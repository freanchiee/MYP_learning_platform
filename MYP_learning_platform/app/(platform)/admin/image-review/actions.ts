'use server'

import fs from 'fs'
import path from 'path'
import { revalidatePath } from 'next/cache'
import { execSync } from 'child_process'
import { generateImageWithProvider, getVisionKey } from './provider-config'

const REPO_ROOT = path.join(process.cwd())
const DATA_PAPERS = path.join(REPO_ROOT, 'data', 'papers')
const PUBLIC_DIR  = path.join(REPO_ROOT, 'public')

// ─── Claude Vision helper ─────────────────────────────────────────────────────

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

async function callClaudeVision(imagePath: string): Promise<string> {
  // Priority: env var → saved config file
  const key = await getVisionKey()
  if (!key) throw new Error('Anthropic key not configured. Add it in ⚙️ Image Providers → Claude Vision section.')

  const physPath = path.join(PUBLIC_DIR, imagePath)
  if (!fs.existsSync(physPath)) throw new Error(`Original image not found: ${physPath}`)

  const base64Data = fs.readFileSync(physPath).toString('base64')
  const lower = imagePath.toLowerCase()
  const mediaType: 'image/jpeg' | 'image/png' | 'image/webp' =
    lower.endsWith('.jpg') || lower.endsWith('.jpeg') ? 'image/jpeg'
    : lower.endsWith('.webp') ? 'image/webp'
    : 'image/png'

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': key,
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
    signal: AbortSignal.timeout(60_000),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Claude Vision error ${res.status}: ${body.slice(0, 200)}`)
  }

  const json = await res.json() as { content?: { type: string; text: string }[] }
  let prompt = json.content?.[0]?.text ?? ''
  if (!prompt.startsWith('Clean educational')) {
    const match = prompt.match(/Clean educational[\s\S]+/)
    prompt = match ? match[0].trim() : `Clean educational illustration, white background, flat design. ${prompt}`
  }
  return prompt.trim()
}

// ─── types ───────────────────────────────────────────────────────────────────

export interface SidecarEntry {
  taskPath: string
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

// ─── server actions ───────────────────────────────────────────────────────────

/**
 * Approve an image: update sidecar, replace path in questions.ts, run tsc.
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

  // Update sidecar
  entries[idx] = { ...entry, approved: true, needs_review: false }
  writeSidecar(paperId, entries)

  // Update questions.ts if there's a path to replace
  if (originalPath && generatedPath) {
    const qFile = path.join(DATA_PAPERS, paperId, 'questions.ts')
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
): Promise<{ ok: boolean; newUrl?: string; error?: string; visionUsed?: boolean; visionError?: string; method?: string }> {
  const entries = readSidecar(paperId)
  const idx = entries.findIndex(e => e.taskPath === taskPath)
  if (idx === -1) return { ok: false, error: `Entry not found: ${taskPath}` }

  const entry = entries[idx]
  if (!entry.generated_path) return { ok: false, error: 'No generated_path on this entry' }

  let prompt = entry.image_prompt ?? ''
  let subType = entry.sub_type ?? '2B'
  let visionUsed = false
  let visionError: string | undefined

  // ── Vision upgrade diagnostics ──────────────────────────────────────────────
  const originalPhysPath = entry.original_path
    ? path.join(PUBLIC_DIR, entry.original_path) : null
  const originalExists = originalPhysPath && fs.existsSync(originalPhysPath)
  const visionKey = await getVisionKey()

  // Log why Vision won't run (shows in server console for debugging)
  if (!originalPhysPath) console.log('[vision] SKIP — no original_path on entry')
  else if (!originalExists) console.log(`[vision] SKIP — original file missing: ${originalPhysPath}`)
  else if (!visionKey) console.log('[vision] SKIP — no Anthropic key (check ⚙️ Image Providers → Claude Vision)')
  else console.log(`[vision] RUNNING on ${entry.original_path} …`)

  if (originalExists && visionKey) {
    try {
      prompt = await callClaudeVision(entry.original_path!)
      subType = '2A'
      visionUsed = true
      console.log(`[vision] SUCCESS — prompt: ${prompt.slice(0, 100)}…`)
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e)
      visionError = msg   // ← surface to UI instead of silently swallowing
      console.error(`[vision] FAILED: ${msg}`)
      if (!prompt) return {
        ok: false,
        error: `Claude Vision failed and no fallback prompt: ${msg}`,
        visionError: msg,
      }
      // Has a fallback prompt — continue with generation but tell the user Vision failed
    }
  } else if (!prompt) {
    return { ok: false, error: 'No image_prompt — use Edit Prompt first' }
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
  return { ok: true, newUrl: entry.generated_path, visionUsed, visionError, method: result.method }
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
