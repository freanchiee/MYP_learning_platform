'use server'

import fs from 'fs'
import path from 'path'
import { revalidatePath } from 'next/cache'
import { execSync } from 'child_process'
import { generateImageWithProvider, getVisionKey, readProviderConfig } from './provider-config'
import { uploadPapersAsset } from '@/lib/supabase/admin'

const REPO_ROOT = path.join(process.cwd())
const DATA_PAPERS = path.join(REPO_ROOT, 'data', 'papers')
const PUBLIC_DIR  = path.join(REPO_ROOT, 'public')

// ─── Vision helpers (Claude → GPT-4o fallback) ───────────────────────────────

const VISION_PROMPT = `You are helping recreate a scientific diagram for an MYP educational platform.
Analyze this image carefully and write a detailed generation prompt for an AI image generator
to create an equivalent ORIGINAL illustration.

Describe: the subject matter, all visible components and their spatial relationships,
any labels and their positions, the visual style (schematic flat illustration vs realistic),
the composition, and ALL scientifically important details — including any numerical values,
measurements, or annotations visible in the diagram.

Format your response as a single paragraph starting with exactly:
"Clean educational illustration, white background, flat design, no watermarks, no text overlays, school science textbook style. [YOUR DESCRIPTION]"

Do NOT say 'copy' or 'reproduce'. Describe what an original equivalent should look like.`

function imageToBase64(physPath: string): { base64: string; mediaType: 'image/jpeg' | 'image/png' | 'image/webp' } {
  const base64 = fs.readFileSync(physPath).toString('base64')
  const lower = physPath.toLowerCase()
  const mediaType: 'image/jpeg' | 'image/png' | 'image/webp' =
    lower.endsWith('.jpg') || lower.endsWith('.jpeg') ? 'image/jpeg'
    : lower.endsWith('.webp') ? 'image/webp'
    : 'image/png'
  return { base64, mediaType }
}

function normaliseVisionResponse(raw: string): string {
  if (raw.startsWith('Clean educational')) return raw.trim()
  const match = raw.match(/Clean educational[\s\S]+/)
  return match ? match[0].trim() : `Clean educational illustration, white background, flat design. ${raw}`
}

/** Claude Sonnet Vision — requires Anthropic API credits */
async function callClaudeVision(physPath: string, key: string, customPrompt = VISION_PROMPT): Promise<string> {
  const { base64, mediaType } = imageToBase64(physPath)
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,   // SVG output needs more tokens than a text prompt
      messages: [{
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64 } },
          { type: 'text', text: customPrompt },
        ],
      }],
    }),
    signal: AbortSignal.timeout(90_000),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Claude Vision error ${res.status}: ${body.slice(0, 300)}`)
  }
  const json = await res.json() as { content?: { type: string; text: string }[] }
  return normaliseVisionResponse(json.content?.[0]?.text ?? '')
}

/** GPT-4o Vision — uses the existing OpenAI key, no extra cost beyond per-token rate */
async function callGPT4Vision(physPath: string, key: string, customPrompt = VISION_PROMPT): Promise<string> {
  const { base64, mediaType } = imageToBase64(physPath)
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-4o',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content: [
          { type: 'image_url', image_url: { url: `data:${mediaType};base64,${base64}`, detail: 'high' } },
          { type: 'text', text: customPrompt },
        ],
      }],
    }),
    signal: AbortSignal.timeout(90_000),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`GPT-4o Vision error ${res.status}: ${body.slice(0, 300)}`)
  }
  const json = await res.json() as { choices?: { message?: { content?: string } }[] }
  return normaliseVisionResponse(json.choices?.[0]?.message?.content ?? '')
}

/**
 * Gemini Vision — FREE tier (Google AI Studio key).
 * Probes candidate models in order because not every AI Studio key has every model
 * enabled. The *image-generation* model (flash-exp-image-generation) only outputs
 * images; here we need text output, so we use regular Flash/Pro variants.
 */
async function callGeminiVision(physPath: string, key: string, customPrompt = VISION_PROMPT): Promise<string> {
  const { base64, mediaType } = imageToBase64(physPath)

  // Try these in order — stop at the first 200.
  // If one 404s, move on; any other error is fatal.
  const VISION_MODELS = [
    'gemini-2.0-flash',             // newest stable (text+vision in/text out)
    'gemini-2.0-flash-exp',         // exp variant, same capability set
    'gemini-1.5-flash-latest',      // 1.5 latest alias
    'gemini-1.5-flash',             // 1.5 specific
    'gemini-1.5-pro',               // pro fallback (slower but widely available)
  ]

  const notFound: string[] = []
  for (const model of VISION_MODELS) {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              { inlineData: { mimeType: mediaType, data: base64 } },
              { text: customPrompt },
            ],
          }],
          generationConfig: { maxOutputTokens: 4096 },
        }),
        signal: AbortSignal.timeout(60_000),
      },
    )

    if (res.status === 404) {
      notFound.push(model)
      continue
    }
    if (!res.ok) {
      const body = await res.text()
      throw new Error(`Gemini Vision ${res.status} (${model}): ${body.slice(0, 300)}`)
    }
    const json = await res.json() as {
      candidates?: { content?: { parts?: { text?: string }[] } }[]
    }
    const text = json.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
    if (!text) throw new Error(`Gemini Vision (${model}): empty response`)
    console.log(`[vision] ✅ Gemini succeeded with model: ${model}`)
    return normaliseVisionResponse(text)
  }

  throw new Error(
    `Gemini Vision: none of the candidate models are available on this key. ` +
    `Tried: ${VISION_MODELS.join(', ')}. ` +
    `Check aistudio.google.com/app/apikey for model access.`,
  )
}

/**
 * Unified vision: Claude → GPT-4o → Gemini (free tier).
 * Each provider is only tried if its key is configured.
 * Returns { prompt, provider } so the caller can report which ran.
 */
async function callVisionForPrompt(
  imagePath: string,
): Promise<{ prompt: string; provider: 'claude' | 'gpt4o' | 'gemini' }> {
  const physPath = path.join(PUBLIC_DIR, imagePath)
  if (!fs.existsSync(physPath)) throw new Error(`Image not found: ${physPath}`)

  const claudeKey = await getVisionKey()          // Anthropic key (env or config)
  const cfg = await readProviderConfig()
  const openaiKey  = process.env.OPENAI_API_KEY || cfg.openai?.key || ''
  const geminiKey  = cfg.gemini?.key || ''

  const errors: string[] = []

  // 1 — Try Claude (best quality, pays per token)
  if (claudeKey) {
    try {
      const prompt = await callClaudeVision(physPath, claudeKey)
      console.log('[vision] ✅ Claude succeeded')
      return { prompt, provider: 'claude' }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e)
      errors.push(`Claude: ${msg.slice(0, 120)}`)
      console.warn(`[vision] Claude failed → trying GPT-4o… (${msg.slice(0, 80)})`)
    }
  } else {
    console.log('[vision] Claude skipped — no key')
  }

  // 2 — Try GPT-4o Vision (per-token cost, high quality)
  if (openaiKey) {
    try {
      const prompt = await callGPT4Vision(physPath, openaiKey)
      console.log('[vision] ✅ GPT-4o succeeded')
      return { prompt, provider: 'gpt4o' }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e)
      errors.push(`GPT-4o: ${msg.slice(0, 120)}`)
      console.warn(`[vision] GPT-4o failed → trying Gemini… (${msg.slice(0, 80)})`)
    }
  } else {
    console.log('[vision] GPT-4o skipped — no key')
  }

  // 3 — Try Gemini 1.5 Flash (FREE tier with Google AI Studio key)
  if (geminiKey) {
    try {
      const prompt = await callGeminiVision(physPath, geminiKey)
      console.log('[vision] ✅ Gemini succeeded (free tier)')
      return { prompt, provider: 'gemini' }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e)
      errors.push(`Gemini: ${msg.slice(0, 120)}`)
      console.error(`[vision] Gemini also failed: ${msg.slice(0, 80)}`)
    }
  } else {
    console.log('[vision] Gemini skipped — no key')
  }

  throw new Error(
    `All vision providers failed.\n${errors.join('\n')}\n` +
    'Fix: add at least one key in ⚙️ Image Providers (Gemini free tier is easiest).',
  )
}

// ─── types ───────────────────────────────────────────────────────────────────

export interface SidecarEntry {
  taskPath: string
  topic?: string
  original_path: string | null
  image_type: 'ai_generated' | 'code_rendered' | 'text_only' | 'original' | 'pending'
  sub_type?: '2A' | '2B' | null
  image_prompt?: string | null
  generated_path?: string | null
  render_component?: string | null
  render_data?: unknown
  needs_review: boolean
  approved: boolean
  flagged?: boolean
  flag_note?: string | null
  regenerated_at?: string | null
  _error?: string | undefined
}

function readSidecar(paperId: string): SidecarEntry[] {
  const sidecarPath = path.join(DATA_PAPERS, paperId, 'image-classifications.json')
  if (!fs.existsSync(sidecarPath)) return []
  return JSON.parse(fs.readFileSync(sidecarPath, 'utf8')) as SidecarEntry[]
}

function writeSidecar(paperId: string, entries: SidecarEntry[]) {
  const sidecarPath = path.join(DATA_PAPERS, paperId, 'image-classifications.json')
  fs.writeFileSync(sidecarPath, JSON.stringify(entries, null, 2))
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * In questions.ts, replace references to `originalPath` with `newPath`.
 * Handles both template-literal refs (`${P}filename`) and string-literal refs.
 * Returns the updated content string.
 */
function replacePathInQuestionsTs(content: string, originalPath: string, newPath: string): string {
  const filename = path.basename(originalPath)
  let updated = content

  // 1. Template literal: `${P}page-05-crop.png`
  const tplPattern = new RegExp('`\\$\\{P\\}' + escapeRe(filename) + '`', 'g')
  updated = updated.replace(tplPattern, `'${newPath}'`)

  // 2. Single-quoted literal: '/images/papers/.../page-05-crop.png'
  const sqPattern = new RegExp("'" + escapeRe(originalPath) + "'", 'g')
  updated = updated.replace(sqPattern, `'${newPath}'`)

  // 3. Double-quoted literal: "/images/papers/.../..."
  const dqPattern = new RegExp('"' + escapeRe(originalPath) + '"', 'g')
  updated = updated.replace(dqPattern, `'${newPath}'`)

  return updated
}

/**
 * For a code_rendered (interactive artefact) entry, inject an `artefact: { component, data, caption? }`
 * property into questions.ts, anchored immediately after the `figImages: [...]` array that references
 * `originalPath`. This is what makes the artefact render in the live exam (ExtendedQuestion reads
 * q.artefact / task.artefact, and figImages are suppressed when an artefact is present).
 * Returns the updated content (unchanged if no anchor found).
 */
function injectArtefactIntoQuestionsTs(
  content: string,
  originalPath: string,
  component: string,
  data: unknown,
  caption?: string | null,
): { content: string; changed: boolean } {
  const base = escapeRe(path.basename(originalPath))
  // The figImages array literal that contains the figure's basename (template `${P}stem` or quoted path).
  const re = new RegExp('figImages:\\s*\\[[^\\]]*' + base + '[^\\]]*\\]')
  const m = content.match(re)
  if (!m) return { content, changed: false }

  const dataLiteral = JSON.stringify(data ?? {})
  const capLiteral = caption ? `, caption: ${JSON.stringify(caption)}` : ''
  const artefactLiteral = `artefact: { component: ${JSON.stringify(component)}, data: ${dataLiteral}${capLiteral} }`
  // Insert AFTER the figImages array; the comma keeps the object literal valid whether or not
  // figImages was the last property.
  const insertion = `${m[0]},\n        ${artefactLiteral}`
  // If an artefact already exists adjacent, replace it instead of duplicating.
  const dupRe = new RegExp(escapeRe(m[0]) + ',\\s*\\n\\s*artefact:\\s*\\{[\\s\\S]*?\\}\\s*\\}')
  if (dupRe.test(content)) {
    return { content: content.replace(dupRe, insertion), changed: true }
  }
  return { content: content.replace(m[0], insertion), changed: true }
}

// ─── server actions ───────────────────────────────────────────────────────────

/**
 * Approve a figure. Two kinds:
 *  - ai_generated (SVG): swap the figImages path in questions.ts to the generated .svg.
 *  - code_rendered (interactive artefact): inject `artefact:{component,data}` into questions.ts.
 * Both run tsc and roll back on failure.
 */
export async function approveImage(
  paperId: string,
  taskPath: string,
  generatedPath: string,
): Promise<{ ok: boolean; error?: string }> {
  const entries = readSidecar(paperId)
  const idx = entries.findIndex(e => e.taskPath === taskPath)
  if (idx === -1) return { ok: false, error: `Entry not found: ${taskPath}` }

  const entry = entries[idx]
  const originalPath = entry.original_path
  const isArtefact = entry.image_type === 'code_rendered' && !!entry.render_component

  // Update sidecar
  entries[idx] = { ...entry, approved: true, needs_review: false }
  writeSidecar(paperId, entries)

  const qFile = path.join(DATA_PAPERS, paperId, 'questions.ts')

  if (isArtefact && originalPath && fs.existsSync(qFile)) {
    // ── interactive artefact path ──
    const content = fs.readFileSync(qFile, 'utf8')
    const { content: updated, changed } = injectArtefactIntoQuestionsTs(
      content,
      originalPath,
      entry.render_component as string,
      entry.render_data,
      (entry.render_data as { caption?: string } | null)?.caption ?? entry.topic ?? null,
    )
    if (!changed) {
      entries[idx] = entry
      writeSidecar(paperId, entries)
      return { ok: false, error: `Could not find a figImages anchor for ${path.basename(originalPath)} in questions.ts to attach the artefact.` }
    }
    fs.writeFileSync(qFile, updated)
    try {
      execSync('npx tsc --noEmit', { cwd: REPO_ROOT, stdio: 'pipe' })
    } catch (e: unknown) {
      fs.writeFileSync(qFile, content)
      entries[idx] = entry
      writeSidecar(paperId, entries)
      const msg = e instanceof Error ? e.message : String(e)
      return { ok: false, error: `TypeScript error after approval — rolled back:\n${msg}` }
    }
    revalidatePath('/admin/image-review')
    return { ok: true }
  }

  // ── ai_generated (SVG) path: swap the figImages path ──
  if (originalPath && generatedPath) {
    if (fs.existsSync(qFile)) {
      const content = fs.readFileSync(qFile, 'utf8')
      const updated = replacePathInQuestionsTs(content, originalPath, generatedPath)
      if (updated !== content) {
        fs.writeFileSync(qFile, updated)

        // Run tsc check
        try {
          execSync('npx tsc --noEmit', { cwd: REPO_ROOT, stdio: 'pipe' })
        } catch (e: unknown) {
          // Roll back the questions.ts change
          fs.writeFileSync(qFile, content)
          entries[idx] = entry  // revert sidecar too
          writeSidecar(paperId, entries)
          const msg = e instanceof Error ? e.message : String(e)
          return { ok: false, error: `TypeScript error after approval — rolled back:\n${msg}` }
        }
      }
    }
  }

  revalidatePath('/admin/image-review')
  return { ok: true }
}

/**
 * Regenerate an image using the configured provider.
 *
 * Auto-upgrade logic: if the entry is sub_type 2B (text-only prompt) AND the original
 * image still exists AND ANTHROPIC_API_KEY is in the environment, we first call Claude
 * Vision to get a specific, image-derived prompt (upgrading to 2A) before generating.
 * This makes the dashboard Regenerate button produce much better results without any
 * extra clicks.
 */
export async function regenerateImage(
  paperId: string,
  taskPath: string,
): Promise<{ ok: boolean; newUrl?: string; error?: string; visionUsed?: boolean; visionProvider?: string; visionError?: string; method?: string; generationProvider?: string; generationNote?: string }> {
  const entries = readSidecar(paperId)
  const idx = entries.findIndex(e => e.taskPath === taskPath)
  if (idx === -1) return { ok: false, error: `Entry not found: ${taskPath}` }

  const entry = entries[idx]
  if (!entry.generated_path) return { ok: false, error: 'No generated_path on this entry' }

  let prompt = entry.image_prompt ?? ''
  let subType = entry.sub_type ?? '2B'
  let visionUsed = false
  let visionProvider: string | undefined
  let visionError: string | undefined

  // ── Vision upgrade: original image exists → run Claude (or GPT-4o fallback) ─
  const originalPhysPath = entry.original_path
    ? path.join(PUBLIC_DIR, entry.original_path) : null
  const originalExists = !!(originalPhysPath && fs.existsSync(originalPhysPath))

  if (originalExists) {
    console.log(`[vision] RUNNING callVisionForPrompt on ${entry.original_path}…`)
    try {
      const result = await callVisionForPrompt(entry.original_path!)
      prompt = result.prompt
      subType = '2A'
      visionUsed = true
      visionProvider = result.provider
      console.log(`[vision] SUCCESS via ${result.provider}: ${prompt.slice(0, 100)}…`)
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e)
      visionError = msg
      console.error(`[vision] ALL PROVIDERS FAILED: ${msg}`)
      if (!prompt) return {
        ok: false,
        error: `Vision failed with no fallback prompt: ${msg}`,
        visionError: msg,
      }
      // Has a fallback prompt — continue generation but warn the user
    }
  } else {
    if (!originalPhysPath) console.log('[vision] SKIP — no original_path on entry')
    else console.log(`[vision] SKIP — file missing: ${originalPhysPath}`)
    if (!prompt) return { ok: false, error: 'No image_prompt — use Edit Prompt first' }
  }

  // Pass original_path so Stability can use Structure Control (preserves spatial layout)
  const result = await generateImageWithProvider(
    prompt,
    entry.generated_path,
    undefined,
    entry.original_path ?? undefined,
  )
  if (!result.ok) return { ok: false, error: result.error, visionError }

  entries[idx] = {
    ...entry,
    image_prompt: prompt,
    sub_type: subType as '2A' | '2B' | null,
    regenerated_at: new Date().toISOString(),
    _error: undefined,
  }
  writeSidecar(paperId, entries)

  revalidatePath('/admin/image-review')
  return {
    ok: true,
    newUrl: entry.generated_path,
    visionUsed,
    visionProvider,
    visionError,
    method: result.method,
    generationProvider: result.usedProvider,
    // When active provider failed but Stability took over, surface as an info note
    generationNote: result.usedProvider && result.usedProvider !== 'stability' ? undefined
      : result.error?.startsWith('Note:') ? result.error : undefined,
  }
}

/**
 * Edit the prompt and regenerate.
 */
export async function editPromptAndRegenerate(
  paperId: string,
  taskPath: string,
  newPrompt: string,
): Promise<{ ok: boolean; newUrl?: string; error?: string }> {
  const entries = readSidecar(paperId)
  const idx = entries.findIndex(e => e.taskPath === taskPath)
  if (idx === -1) return { ok: false, error: `Entry not found: ${taskPath}` }

  entries[idx] = { ...entries[idx], image_prompt: newPrompt }
  writeSidecar(paperId, entries)

  return regenerateImage(paperId, taskPath)
}

/**
 * Upload a replacement image manually (PNG/JPG/WebP).
 * Saves to the same generated_path slot so the card refreshes correctly.
 */
export async function uploadReplacementImage(
  paperId: string,
  taskPath: string,
  formData: FormData,
): Promise<{ ok: boolean; newUrl?: string; error?: string }> {
  const file = formData.get('file') as File | null
  if (!file || file.size === 0) return { ok: false, error: 'No file provided' }

  const allowed = ['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml']
  if (!allowed.includes(file.type)) {
    return { ok: false, error: `Unsupported type "${file.type}" — use PNG, JPG, WebP, or SVG` }
  }
  if (file.size > 10 * 1024 * 1024) {
    return { ok: false, error: 'File too large (max 10 MB)' }
  }

  const entries = readSidecar(paperId)
  const idx = entries.findIndex(e => e.taskPath === taskPath)
  if (idx === -1) return { ok: false, error: `Entry not found: ${taskPath}` }

  const entry = entries[idx]
  // Use existing generated_path or derive one from paperId + taskPath
  const ext =
    file.type === 'image/jpeg' ? 'jpg'
    : file.type === 'image/webp' ? 'webp'
    : file.type === 'image/svg+xml' ? 'svg'
    : 'png'
  const destPath = entry.generated_path
    ?? `/images/papers/${paperId}/${taskPath.replace(/[^a-z0-9]/gi, '-')}-uploaded.${ext}`

  // Upload to the subject-wise Supabase Storage bucket (images no longer live in public/)
  const uploaded = await uploadPapersAsset(destPath, Buffer.from(await file.arrayBuffer()))
  if (!uploaded.ok) return { ok: false, error: `Upload to Storage failed: ${uploaded.error}` }

  entries[idx] = {
    ...entry,
    generated_path: destPath,
    needs_review: true,
    regenerated_at: new Date().toISOString(),
    _error: undefined,
  }
  writeSidecar(paperId, entries)

  revalidatePath('/admin/image-review')
  // cache-bust the resolved bucket URL so the card shows the new image immediately
  return { ok: true, newUrl: destPath }
}

/**
 * Switch an entry to code_rendered and assign an SVG component.
 * On approval the questions.ts reference will point to the component name.
 */
export async function applySvgComponent(
  paperId: string,
  taskPath: string,
  componentName: string,
): Promise<{ ok: boolean; error?: string }> {
  if (!componentName.trim()) return { ok: false, error: 'Component name required' }

  const entries = readSidecar(paperId)
  const idx = entries.findIndex(e => e.taskPath === taskPath)
  if (idx === -1) return { ok: false, error: `Entry not found: ${taskPath}` }

  entries[idx] = {
    ...entries[idx],
    image_type: 'code_rendered',
    render_component: componentName.trim(),
    needs_review: true,
    approved: false,
    _error: undefined,
  }
  writeSidecar(paperId, entries)

  revalidatePath('/admin/image-review')
  return { ok: true }
}

/**
 * Flag an image as needing manual attention.
 */
export async function flagImage(
  paperId: string,
  taskPath: string,
  flagNote: string,
): Promise<{ ok: boolean }> {
  const entries = readSidecar(paperId)
  const idx = entries.findIndex(e => e.taskPath === taskPath)
  if (idx === -1) return { ok: false }

  entries[idx] = {
    ...entries[idx],
    flagged: true,
    flag_note: flagNote,
    needs_review: false,
  }
  writeSidecar(paperId, entries)

  revalidatePath('/admin/image-review')
  return { ok: true }
}

// ─── data loading helper (used by the page) ───────────────────────────────────

export interface ReviewEntry extends SidecarEntry {
  paperId: string
  topic?: string
  questionId?: number | null
  taskLabel?: string | null
  stemText?: string
  taskText?: string
}

export async function loadReviewQueue(): Promise<ReviewEntry[]> {
  const paperDirs = fs.readdirSync(DATA_PAPERS)
    .filter(d => d !== '_archive' && fs.existsSync(path.join(DATA_PAPERS, d, 'image-classifications.json')))

  const queue: ReviewEntry[] = []

  for (const paperId of paperDirs) {
    const entries = readSidecar(paperId)
    for (const entry of entries) {
      if (!entry.needs_review || entry.approved || entry.flagged) continue
      queue.push({ ...entry, paperId })
    }
  }

  return queue.sort((a, b) => a.paperId.localeCompare(b.paperId))
}

export async function loadAllEntries(): Promise<ReviewEntry[]> {
  const paperDirs = fs.readdirSync(DATA_PAPERS)
    .filter(d => d !== '_archive' && fs.existsSync(path.join(DATA_PAPERS, d, 'image-classifications.json')))

  const all: ReviewEntry[] = []
  for (const paperId of paperDirs) {
    const entries = readSidecar(paperId)
    for (const entry of entries) {
      all.push({ ...entry, paperId })
    }
  }
  return all
}
