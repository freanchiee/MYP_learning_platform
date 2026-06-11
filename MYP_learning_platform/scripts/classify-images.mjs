/**
 * Phase 2: Per-paper Image Classifier + Generator
 *
 * Reads audit-results.json, processes one paper at a time.
 * For each image entry:
 *   - Type 2A (existing_source_image): Claude Vision → prompt → image download
 *   - Type 2B (variant/missing/broken): text-only prompt → image download
 *   - Type 1: classified as code_rendered (no image generated — SVG component needed)
 *   - Type 3: classified as text_only (no image)
 *
 * Usage:
 *   node scripts/classify-images.mjs --paperId physics-nov-2024
 *   node scripts/classify-images.mjs --paperId physics-nov-2024 --dryRun
 *   node scripts/classify-images.mjs --paperId physics-nov-2024 --skipVision
 *   node scripts/classify-images.mjs --paperId physics-nov-2024 --status existing_source_image
 *   node scripts/classify-images.mjs --paperId physics-nov-2024 --max 3
 *
 * Environment (set ONE image provider):
 *   HF_TOKEN          HuggingFace token (free at huggingface.co/settings/tokens)  ← recommended
 *   TOGETHER_API_KEY  Together AI key (cheap, ~$0.002/image)
 *
 * For Claude Vision (--skipVision skips this if you don't have the key):
 *   ANTHROPIC_API_KEY  Anthropic API key from console.anthropic.com
 *
 * Output: data/papers/{paperId}/image-classifications.json
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DATA_PAPERS = path.join(REPO_ROOT, 'data', 'papers')
const PUBLIC = path.join(REPO_ROOT, 'public')
const AUDIT_FILE = path.join(__dirname, 'audit-results.json')

// ─── parse args ──────────────────────────────────────────────────────────────

const args = process.argv.slice(2)
function getArg(name) {
  const i = args.indexOf(name)
  return i !== -1 ? args[i + 1] : null
}
const paperId    = getArg('--paperId')
const statusFilter = getArg('--status') ?? null
const dryRun     = args.includes('--dryRun') || args.includes('--dry-run')
const skipVision = args.includes('--skipVision') || args.includes('--skip-vision')
const maxImages  = parseInt(getArg('--max') ?? '99999', 10)

if (!paperId) {
  console.error(`
Usage: node scripts/classify-images.mjs --paperId <paperId> [options]

Options:
  --dryRun        Preview without downloading images or writing sidecar
  --skipVision    Skip Claude Vision (use text-only 2B prompts for all entries)
  --status <s>    Only process entries with this audit status
  --max <n>       Limit to first N entries (useful for testing)

Environment:
  HF_TOKEN         HuggingFace token — free at huggingface.co/settings/tokens
  TOGETHER_API_KEY Together AI key — together.ai (cheap, ~$0.002/image)
  ANTHROPIC_API_KEY Anthropic key — only needed for Claude Vision (skippable)
`)
  process.exit(1)
}

// ─── detect image provider ───────────────────────────────────────────────────

const HF_TOKEN      = process.env.HF_TOKEN ?? ''
const TOGETHER_KEY  = process.env.TOGETHER_API_KEY ?? ''
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY ?? ''

function detectProvider() {
  if (HF_TOKEN)     return 'huggingface'
  if (TOGETHER_KEY) return 'together'
  return 'none'
}

const PROVIDER = detectProvider()

if (!dryRun && PROVIDER === 'none') {
  console.error(`
❌  No image generation API key found.

Set ONE of these environment variables:

  HF_TOKEN=hf_...          (free — get at huggingface.co/settings/tokens)
  TOGETHER_API_KEY=...     (cheap — together.ai, ~$0.002/image)

Example:
  HF_TOKEN=hf_xxxx node scripts/classify-images.mjs --paperId physics-nov-2024

Or run with --dryRun to preview without generating images.
`)
  process.exit(1)
}

// ─── constants ───────────────────────────────────────────────────────────────

const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages'

// HuggingFace: FLUX.1-schnell (fast, free tier, good quality)
const HF_MODEL = 'black-forest-labs/FLUX.1-schnell'
const HF_API   = `https://api-inference.huggingface.co/models/${HF_MODEL}`

// Together AI: FLUX.1-schnell
const TOGETHER_MODEL = 'black-forest-labs/FLUX.1-schnell-turbo'
const TOGETHER_API   = 'https://api.together.xyz/v1/images/generations'

const VISION_PROMPT = `You are helping recreate a scientific diagram for an MYP educational platform.
Analyze this image carefully and write a detailed generation prompt for an AI image generator to create an equivalent ORIGINAL illustration.

Describe: the subject matter, all visible components and their spatial relationships, any labels and their positions, the visual style (schematic flat illustration vs realistic), the composition, and ALL scientifically important details.

Format your response as a single paragraph starting with exactly:
"Clean educational illustration, white background, flat design, no watermarks, no text overlays, school science textbook style. [YOUR DESCRIPTION]"

Do NOT say 'copy' or 'reproduce'. Describe what an original equivalent should look like.`

// Type 1 trigger keywords (→ code_rendered, SVG component needed)
const TYPE1_KEYWORDS = [
  'circuit diagram', 'circuit board',
  'line graph', 'bar graph', 'bar chart', 'scatter graph', 'scatter plot',
  'data table', 'results table',
  'force diagram', 'free body diagram', 'free-body',
  'wave diagram', 'wave pattern', 'transverse wave', 'longitudinal wave',
  'ray diagram', 'food web', 'punnett square', 'decay curve',
  'flow chart', 'venn diagram', 'vector diagram', 'energy level',
  'box plot',
]

// ─── helpers ─────────────────────────────────────────────────────────────────

function sidecarPath(pid) {
  return path.join(DATA_PAPERS, pid, 'image-classifications.json')
}
function readSidecar(pid) {
  const p = sidecarPath(pid)
  if (!fs.existsSync(p)) return []
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}
function writeSidecar(pid, entries) {
  const p = sidecarPath(pid)
  fs.writeFileSync(p, JSON.stringify(entries, null, 2))
  console.log(`   📄 Sidecar: ${path.relative(REPO_ROOT, p)} (${entries.length} entries)`)
}
function taskPathKey(entry) {
  const t = entry.taskLabel ? `.tasks[${entry.taskLabel}]` : ''
  return `q${entry.questionId}${t}`
}
function existingSidecarEntry(sidecar, tp) {
  // Only skip if approved, OR needs_review AND no error (i.e. successfully generated)
  return sidecar.find(e => e.taskPath === tp && (e.approved || (e.needs_review && !e._error)))
}
function guessType(stemText, taskText, topic) {
  const combined = [stemText, taskText, topic].join(' ').toLowerCase()
  for (const kw of TYPE1_KEYWORDS) {
    if (combined.includes(kw)) return 'code_rendered'
  }
  return 'ai_generated'
}
function generatedPath(originalPath, pid) {
  if (!originalPath) return `/images/papers/${pid}/generated-${pid}-${Date.now()}.png`
  const parts = originalPath.split('/')
  const filename = parts[parts.length - 1]
  const stem = filename.replace(/-crop(\.[^.]+)$/, '$1').replace(/(\.[^.]+)$/, '-generated$1')
  parts[parts.length - 1] = stem
  return parts.join('/')
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

// ─── Claude Vision ────────────────────────────────────────────────────────────

async function callClaudeVision(imagePath) {
  if (!ANTHROPIC_KEY) throw new Error('ANTHROPIC_API_KEY not set')
  const physPath = path.join(PUBLIC, imagePath)
  if (!fs.existsSync(physPath)) throw new Error(`Not found: ${physPath}`)
  const base64Data = fs.readFileSync(physPath).toString('base64')
  const mediaType = imagePath.toLowerCase().endsWith('.jpg') || imagePath.toLowerCase().endsWith('.jpeg')
    ? 'image/jpeg' : 'image/png'

  const res = await fetch(ANTHROPIC_API, {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      messages: [{
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64Data } },
          { type: 'text', text: VISION_PROMPT },
        ],
      }],
    }),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Claude API error ${res.status}: ${body}`)
  }
  const json = await res.json()
  let prompt = json.content?.[0]?.text ?? ''
  if (!prompt.startsWith('Clean educational')) {
    const match = prompt.match(/Clean educational[\s\S]+/)
    prompt = match ? match[0].trim() : `Clean educational illustration, white background, flat design. ${prompt}`
  }
  return prompt.trim()
}

// ─── Image generation ─────────────────────────────────────────────────────────

async function downloadHuggingFace(prompt, destPath, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(HF_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HF_TOKEN}`,
        'Content-Type': 'application/json',
        'X-Wait-For-Model': 'true',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: { width: 800, height: 600, num_inference_steps: 4 },
      }),
    })

    if (res.status === 503) {
      // Model loading — HF needs a moment
      const wait = attempt * 20
      console.log(`      ⏳ HF model loading, waiting ${wait}s…`)
      await sleep(wait * 1000)
      continue
    }

    if (!res.ok) {
      const body = await res.text()
      if (attempt < retries) {
        console.log(`      ⚠️  HF attempt ${attempt} failed (${res.status}): ${body.slice(0, 120)}`)
        await sleep(5000)
        continue
      }
      throw new Error(`HuggingFace error ${res.status}: ${body.slice(0, 200)}`)
    }

    const buf = Buffer.from(await res.arrayBuffer())
    if (buf.length < 1000) throw new Error(`HF returned suspiciously small response (${buf.length} bytes)`)

    const physDest = path.join(PUBLIC, destPath)
    fs.mkdirSync(path.dirname(physDest), { recursive: true })
    fs.writeFileSync(physDest, buf)
    console.log(`      ✅ HF → ${path.relative(REPO_ROOT, physDest)} (${(buf.length / 1024).toFixed(1)} KB)`)
    return
  }
}

async function downloadTogether(prompt, destPath) {
  const res = await fetch(TOGETHER_API, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOGETHER_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: TOGETHER_MODEL,
      prompt,
      width: 800, height: 600,
      steps: 4, n: 1,
    }),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Together error ${res.status}: ${body.slice(0, 200)}`)
  }
  const json = await res.json()
  const url = json.data?.[0]?.url
  if (!url) throw new Error(`Together: no image URL in response: ${JSON.stringify(json).slice(0, 200)}`)

  const imgRes = await fetch(url)
  if (!imgRes.ok) throw new Error(`Together download error ${imgRes.status}`)
  const buf = Buffer.from(await imgRes.arrayBuffer())
  const physDest = path.join(PUBLIC, destPath)
  fs.mkdirSync(path.dirname(physDest), { recursive: true })
  fs.writeFileSync(physDest, buf)
  console.log(`      ✅ Together → ${path.relative(REPO_ROOT, physDest)} (${(buf.length / 1024).toFixed(1)} KB)`)
}

async function downloadImage(prompt, destPath) {
  if (PROVIDER === 'huggingface') return downloadHuggingFace(prompt, destPath)
  if (PROVIDER === 'together')    return downloadTogether(prompt, destPath)
  throw new Error('No provider configured')
}

function buildTextPrompt(stemText, taskText, topic, pid) {
  const subject = pid.split('-')[0]
  const context = [topic, stemText, taskText].filter(Boolean).join('. ').slice(0, 400)
  return `Clean educational illustration, white background, flat design, no watermarks, no text overlays, school science textbook style. ${subject} science: ${context}. Clear, accurate, professional educational diagram.`
}

// ─── classify one entry ───────────────────────────────────────────────────────

async function classifyEntry(entry, pid, sidecar) {
  const tp = taskPathKey(entry)
  const existing = existingSidecarEntry(sidecar, tp)
  if (existing) {
    console.log(`   ⏭️  Skip ${tp} (already: ${existing.image_type})`)
    return null
  }

  const { status, path: imgPath, stemText = '', taskText = '', topic = '' } = entry
  const imageType = guessType(stemText, taskText, topic)

  console.log(`\n   📋 ${tp} | ${status} | ${imageType}`)
  if (imgPath) console.log(`      ${imgPath}`)

  // ── Type 1: code_rendered ────────────────────────────────────────────────
  if (imageType === 'code_rendered') {
    console.log(`      → Type 1 (SVG component — no image generated)`)
    return {
      taskPath: tp, original_path: imgPath ?? null, image_type: 'code_rendered',
      sub_type: null, render_component: null, render_data: null,
      image_prompt: null, generated_path: null, needs_review: true, approved: false,
    }
  }

  // ── Type 2: ai_generated ─────────────────────────────────────────────────
  let subType = '2B'
  let prompt

  const canDoVision = !skipVision && ANTHROPIC_KEY &&
    status === 'existing_source_image' && imgPath && entry.fileExists

  if (canDoVision) {
    subType = '2A'
    console.log(`      → 2A: Claude Vision…`)
    if (!dryRun) {
      try {
        prompt = await callClaudeVision(imgPath)
        console.log(`      ✓ Prompt: ${prompt.slice(0, 100)}…`)
      } catch (e) {
        console.warn(`      ⚠️  Vision failed: ${e.message.slice(0, 80)} → falling back to 2B`)
        subType = '2B'
      }
    } else {
      prompt = '[DRY RUN — Claude Vision not called]'
    }
  }

  if (!prompt) {
    subType = '2B'
    prompt = buildTextPrompt(stemText, taskText, topic, pid)
    console.log(`      → 2B text prompt: ${prompt.slice(0, 80)}…`)
  }

  const genPath = generatedPath(imgPath, pid)

  if (!dryRun) {
    try {
      console.log(`      📡 ${PROVIDER} download → ${genPath.split('/').pop()}`)
      await downloadImage(prompt, genPath)
    } catch (e) {
      console.error(`      ❌ Download failed: ${e.message.slice(0, 100)}`)
      return {
        taskPath: tp, original_path: imgPath ?? null, image_type: 'ai_generated',
        sub_type: subType, image_prompt: prompt, generated_path: genPath,
        needs_review: true, approved: false, _error: e.message.slice(0, 200),
      }
    }
  } else {
    console.log(`      [DRY RUN] Would save to: ${genPath}`)
  }

  return {
    taskPath: tp, original_path: imgPath ?? null, image_type: 'ai_generated',
    sub_type: subType, image_prompt: prompt, generated_path: genPath,
    needs_review: true, approved: false,
  }
}

// ─── main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n🎨  Image classifier — paper: ${paperId}`)
  console.log(`    Provider: ${PROVIDER === 'none' ? '(dry run only)' : PROVIDER}`)
  console.log(`    Vision:   ${skipVision ? 'skipped (--skipVision)' : ANTHROPIC_KEY ? 'Claude Vision' : 'text-only (no ANTHROPIC_API_KEY)'}`)
  if (dryRun) console.log('    Mode:     DRY RUN')
  console.log()

  if (!fs.existsSync(AUDIT_FILE)) {
    console.error('❌  audit-results.json not found. Run first:\n   node scripts/audit-image-classification.mjs')
    process.exit(1)
  }

  const audit = JSON.parse(fs.readFileSync(AUDIT_FILE, 'utf8'))
  let entries = audit.entries.filter(e => e.paperId === paperId)

  if (entries.length === 0) {
    console.log(`⚠️  No audit entries for: ${paperId}`)
    console.log('   Check the paperId is correct, then re-run the audit.')
    process.exit(0)
  }

  if (statusFilter) {
    entries = entries.filter(e => e.status === statusFilter)
    console.log(`   Filtered to status=${statusFilter}: ${entries.length} entries`)
  }

  // Skip malformed (already fixed) and already_generated
  const workEntries = entries
    .filter(e => e.status !== 'malformed_path' && e.status !== 'already_generated')
    .slice(0, maxImages)

  const malformed = entries.filter(e => e.status === 'malformed_path')
  if (malformed.length > 0) {
    console.log(`⚠️  ${malformed.length} malformed paths skipped (run fix-malformed-paths.mjs first)`)
  }

  console.log(`   Processing ${workEntries.length} entries…\n`)

  const sidecar = readSidecar(paperId)
  const newEntries = []
  let processed = 0

  for (const entry of workEntries) {
    const result = await classifyEntry(entry, paperId, sidecar)
    if (result) {
      newEntries.push(result)
      processed++
    }
    // Gentle pacing between API calls
    if (!dryRun && processed > 0 && processed % 5 === 0) {
      console.log(`\n   ⏸  ${processed}/${workEntries.length} done — pausing 3s…`)
      await sleep(3000)
    }
  }

  // Merge into sidecar (preserve approved entries)
  const merged = [...sidecar]
  for (const e of newEntries) {
    const idx = merged.findIndex(m => m.taskPath === e.taskPath)
    if (idx !== -1) merged[idx] = e
    else merged.push(e)
  }

  if (!dryRun) {
    writeSidecar(paperId, merged)
  } else {
    console.log(`\n[DRY RUN] Would write ${merged.length} entries to sidecar`)
  }

  // Summary
  const counts = {}
  for (const e of newEntries) counts[e.image_type] = (counts[e.image_type] ?? 0) + 1

  console.log('\n📊 New entries:')
  for (const [k, v] of Object.entries(counts)) console.log(`   ${k}: ${v}`)
  console.log(`\n✅  ${processed} entries classified for ${paperId}`)
  console.log(`   Review: http://localhost:3000/admin/image-review\n`)
}

main().catch(e => {
  console.error('\n❌  Fatal:', e.message)
  process.exit(1)
})
