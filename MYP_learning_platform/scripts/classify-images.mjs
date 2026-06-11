/**
 * Phase 2: Per-paper Image Classifier + Generator
 *
 * Reads audit-results.json, processes one paper at a time.
 * For each image entry:
 *   - Type 2A (existing_source_image): Claude Vision → prompt → Pollinations download
 *   - Type 2B (variant/missing): text-only prompt → Pollinations download
 *   - Type 1: classified as code_rendered (no image generated — SVG component needed)
 *   - Type 3: classified as text_only (no image)
 *
 * Usage:
 *   node scripts/classify-images.mjs --paperId physics-nov-2024
 *   node scripts/classify-images.mjs --paperId physics-nov-2024 --dryRun
 *   node scripts/classify-images.mjs --paperId physics-nov-2024 --status existing_source_image
 *
 * Environment:
 *   ANTHROPIC_API_KEY  (required for 2A vision calls)
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
const paperId = getArg('--paperId')
const statusFilter = getArg('--status') ?? null
const dryRun = args.includes('--dryRun') || args.includes('--dry-run')
const maxImages = parseInt(getArg('--max') ?? '99999', 10)

if (!paperId) {
  console.error('Usage: node scripts/classify-images.mjs --paperId <paperId> [--status <status>] [--dryRun] [--max N]')
  process.exit(1)
}

// ─── constants ───────────────────────────────────────────────────────────────

const POLLINATIONS_BASE = 'https://image.pollinations.ai/prompt'
const ANTHROPIC_API = 'https://api.anthropic.com/v1/messages'

const VISION_PROMPT = `You are helping recreate a scientific diagram for an MYP educational platform.
Analyze this image carefully and write a detailed generation prompt for an AI image generator (flux model) to create an equivalent ORIGINAL illustration.

Describe: the subject matter, all visible components and their spatial relationships, any labels and their positions, the visual style (schematic flat illustration vs realistic), the composition, and ALL scientifically important details.

Format your response as a single paragraph starting with exactly:
"Clean educational illustration, white background, flat design, no watermarks, no text overlays, school science textbook style. [YOUR DESCRIPTION]"

Do NOT say 'copy' or 'reproduce'. Describe what an original equivalent should look like.`

// Type 1 trigger keywords (→ code_rendered)
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

// Type 3 trigger: decorative or all-data-in-text
const TYPE3_KEYWORDS = [
  'symbol only', 'purely decorative', 'no useful info',
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
  console.log(`   📄 Sidecar written: ${path.relative(REPO_ROOT, p)}`)
}

function taskPath(entry) {
  const t = entry.taskLabel ? `.tasks[${entry.taskLabel}]` : ''
  return `q${entry.questionId}${t}`
}

function existingSidecarEntry(sidecar, tp) {
  return sidecar.find(e => e.taskPath === tp && (e.approved || e.needs_review))
}

function guessType(stemText, taskText, topic) {
  const combined = [stemText, taskText, topic].join(' ').toLowerCase()
  for (const kw of TYPE1_KEYWORDS) {
    if (combined.includes(kw)) return 'code_rendered'
  }
  for (const kw of TYPE3_KEYWORDS) {
    if (combined.includes(kw)) return 'text_only'
  }
  return 'ai_generated'
}

function generatedPath(originalPath, paperId) {
  // /images/papers/physics-nov-2024/page-05-crop.png
  // → /images/papers/physics-nov-2024/page-05-generated.png
  if (!originalPath) {
    return `/images/papers/${paperId}/generated-${Date.now()}.png`
  }
  const parts = originalPath.split('/')
  const filename = parts[parts.length - 1]
  const stem = filename.replace(/-crop(\.[^.]+)$/, '$1').replace(/(\.[^.]+)$/, '-generated$1')
  parts[parts.length - 1] = stem
  return parts.join('/')
}

// ─── API calls ───────────────────────────────────────────────────────────────

async function callClaudeVision(imagePath) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY env var not set')

  const physPath = path.join(PUBLIC, imagePath)
  if (!fs.existsSync(physPath)) throw new Error(`Image not found: ${physPath}`)

  const imgData = fs.readFileSync(physPath)
  const base64Data = imgData.toString('base64')
  const mediaType = imagePath.endsWith('.png') ? 'image/png' :
    imagePath.endsWith('.jpg') || imagePath.endsWith('.jpeg') ? 'image/jpeg' : 'image/png'

  const res = await fetch(ANTHROPIC_API, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      messages: [{
        role: 'user',
        content: [
          {
            type: 'image',
            source: { type: 'base64', media_type: mediaType, data: base64Data },
          },
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
  const prompt = json.content?.[0]?.text ?? ''
  if (!prompt.startsWith('Clean educational')) {
    // Try to extract the paragraph
    const match = prompt.match(/Clean educational[\s\S]+/)
    return match ? match[0].trim() : `Clean educational illustration, white background, flat design. ${prompt}`
  }
  return prompt.trim()
}

async function downloadPollinations(prompt, destPath) {
  const url = `${POLLINATIONS_BASE}/${encodeURIComponent(prompt)}?width=800&height=600&nologo=true&model=flux`
  console.log(`   📡 Pollinations: ${url.slice(0, 100)}…`)

  const res = await fetch(url, {
    headers: { 'User-Agent': 'MYP-Learn-ImagePipeline/1.0' },
  })
  if (!res.ok) throw new Error(`Pollinations error ${res.status}`)

  const physDest = path.join(PUBLIC, destPath)
  fs.mkdirSync(path.dirname(physDest), { recursive: true })
  const buf = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(physDest, buf)
  console.log(`   ✅ Saved: ${path.relative(REPO_ROOT, physDest)} (${(buf.length / 1024).toFixed(1)} KB)`)
}

function buildTextPrompt(stemText, taskText, topic, paperId) {
  const subject = paperId.split('-')[0]
  const context = [topic, stemText, taskText].filter(Boolean).join('. ').slice(0, 400)
  return `Clean educational illustration, white background, flat design, no watermarks, no text overlays, school science textbook style. ${subject} science diagram: ${context}. Clear, accurate, professional educational quality.`
}

// ─── classify one entry ───────────────────────────────────────────────────────

async function classifyEntry(entry, paperId, sidecar) {
  const tp = taskPath(entry)

  // Skip if already classified
  const existing = existingSidecarEntry(sidecar, tp)
  if (existing) {
    console.log(`   ⏭️  Skipping ${tp} (already in sidecar: ${existing.image_type})`)
    return null
  }

  const { status, path: imgPath, stemText = '', taskText = '', topic = '' } = entry

  // Guess image type
  let imageType = guessType(stemText, taskText, topic)

  console.log(`\n   🔍 ${tp} | status: ${status} | guessed: ${imageType}`)
  if (imgPath) console.log(`      path: ${imgPath}`)

  // ── Type 3: text_only ────────────────────────────────────────────────────
  if (imageType === 'text_only') {
    return {
      taskPath: tp,
      original_path: imgPath ?? null,
      image_type: 'text_only',
      sub_type: null,
      image_prompt: null,
      generated_path: null,
      needs_review: true,   // still want human eyes
      approved: false,
    }
  }

  // ── Type 1: code_rendered ────────────────────────────────────────────────
  if (imageType === 'code_rendered') {
    console.log(`      → Type 1 (SVG component needed — no image generated)`)
    return {
      taskPath: tp,
      original_path: imgPath ?? null,
      image_type: 'code_rendered',
      sub_type: null,
      render_component: null,   // to be filled by human in dashboard
      render_data: null,
      image_prompt: null,
      generated_path: null,
      needs_review: true,
      approved: false,
    }
  }

  // ── Type 2: ai_generated ─────────────────────────────────────────────────
  let subType = '2B'
  let prompt

  if (status === 'existing_source_image' && imgPath && entry.fileExists) {
    // 2A: use Claude Vision
    subType = '2A'
    console.log(`      → Type 2A: calling Claude Vision…`)
    if (!dryRun) {
      try {
        prompt = await callClaudeVision(imgPath)
        console.log(`      ✓ Prompt: ${prompt.slice(0, 120)}…`)
      } catch (e) {
        console.warn(`      ⚠️  Vision failed: ${e.message}. Falling back to 2B.`)
        subType = '2B'
      }
    } else {
      prompt = '[DRY RUN — Claude Vision not called]'
    }
  }

  if (!prompt) {
    // 2B: text-based prompt
    subType = '2B'
    prompt = buildTextPrompt(stemText, taskText, topic, paperId)
    console.log(`      → Type 2B prompt: ${prompt.slice(0, 100)}…`)
  }

  const genPath = generatedPath(imgPath, paperId)

  if (!dryRun) {
    try {
      await downloadPollinations(prompt, genPath)
    } catch (e) {
      console.error(`      ❌ Pollinations failed: ${e.message}`)
      return {
        taskPath: tp,
        original_path: imgPath ?? null,
        image_type: 'ai_generated',
        sub_type: subType,
        image_prompt: prompt,
        generated_path: genPath,
        needs_review: true,
        approved: false,
        _error: e.message,
      }
    }
  } else {
    console.log(`      [DRY RUN] Would download to: ${genPath}`)
  }

  return {
    taskPath: tp,
    original_path: imgPath ?? null,
    image_type: 'ai_generated',
    sub_type: subType,
    image_prompt: prompt,
    generated_path: genPath,
    needs_review: true,
    approved: false,
  }
}

// ─── main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n🎨 Image classifier — paper: ${paperId}`)
  if (dryRun) console.log('   [DRY RUN mode — no files will be written]')

  if (!fs.existsSync(AUDIT_FILE)) {
    console.error(`❌ audit-results.json not found. Run: node scripts/audit-image-classification.mjs first`)
    process.exit(1)
  }

  const audit = JSON.parse(fs.readFileSync(AUDIT_FILE, 'utf8'))
  let entries = audit.entries.filter(e => e.paperId === paperId)

  if (entries.length === 0) {
    console.log(`⚠️  No entries found in audit-results.json for paperId: ${paperId}`)
    console.log('   Make sure you ran the audit script and the paperId is correct.')
    process.exit(0)
  }

  if (statusFilter) {
    entries = entries.filter(e => e.status === statusFilter)
    console.log(`   Filtered to status=${statusFilter}: ${entries.length} entries`)
  }

  // Skip missing_image and malformed_path by default (they need manual attention)
  const workEntries = entries.filter(e =>
    e.status !== 'malformed_path' &&
    e.status !== 'already_generated'
  ).slice(0, maxImages)

  const malformed = entries.filter(e => e.status === 'malformed_path')
  if (malformed.length > 0) {
    console.log(`\n⚠️  ${malformed.length} malformed_path entries skipped (fix prefix first):`)
    malformed.forEach(e => console.log(`   ${e.path}`))
  }

  console.log(`\n   Processing ${workEntries.length} entries…\n`)

  const sidecar = readSidecar(paperId)
  const newEntries = []
  let processed = 0

  for (const entry of workEntries) {
    const result = await classifyEntry(entry, paperId, sidecar)
    if (result) {
      newEntries.push(result)
      processed++
    }

    // Pause between API calls to avoid rate limits
    if (!dryRun && processed > 0 && processed % 3 === 0) {
      console.log(`\n   Pausing 2s…`)
      await new Promise(r => setTimeout(r, 2000))
    }
  }

  // Merge into existing sidecar (don't overwrite approved entries)
  const merged = [...sidecar]
  for (const e of newEntries) {
    const idx = merged.findIndex(m => m.taskPath === e.taskPath)
    if (idx !== -1) {
      merged[idx] = e
    } else {
      merged.push(e)
    }
  }

  if (!dryRun) {
    writeSidecar(paperId, merged)
  } else {
    console.log(`\n[DRY RUN] Would write ${merged.length} entries to sidecar`)
  }

  // Summary
  const byType = {}
  for (const e of newEntries) {
    byType[e.image_type] = (byType[e.image_type] ?? 0) + 1
  }

  console.log('\n📊 Done:')
  for (const [k, v] of Object.entries(byType)) {
    console.log(`   ${k}: ${v}`)
  }
  console.log(`\n✅ ${processed} new entries classified for ${paperId}`)
  console.log(`   Review at: http://localhost:3000/admin/image-review\n`)
}

main().catch(e => {
  console.error('\n❌ Fatal:', e.message)
  process.exit(1)
})
