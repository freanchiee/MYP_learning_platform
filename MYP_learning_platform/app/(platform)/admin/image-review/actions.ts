'use server'

import fs from 'fs'
import path from 'path'
import { revalidatePath } from 'next/cache'
import { execSync } from 'child_process'

const REPO_ROOT = path.join(process.cwd())
const DATA_PAPERS = path.join(REPO_ROOT, 'data', 'papers')

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
 * Regenerate an image using the same prompt → Pollinations download.
 */
export async function regenerateImage(
  paperId: string,
  taskPath: string,
): Promise<{ ok: boolean; newUrl?: string; error?: string }> {
  const entries = readSidecar(paperId)
  const idx = entries.findIndex(e => e.taskPath === taskPath)
  if (idx === -1) return { ok: false, error: `Entry not found: ${taskPath}` }

  const entry = entries[idx]
  if (!entry.image_prompt) return { ok: false, error: 'No image_prompt on this entry' }
  if (!entry.generated_path) return { ok: false, error: 'No generated_path on this entry' }

  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(entry.image_prompt)}?width=800&height=600&nologo=true&model=flux`

  try {
    const res = await fetch(url)
    if (!res.ok) return { ok: false, error: `Pollinations error: ${res.status}` }
    const buf = Buffer.from(await res.arrayBuffer())
    const destFile = path.join(REPO_ROOT, 'public', entry.generated_path)
    fs.mkdirSync(path.dirname(destFile), { recursive: true })
    fs.writeFileSync(destFile, buf)

    entries[idx] = { ...entry, regenerated_at: new Date().toISOString() }
    writeSidecar(paperId, entries)

    revalidatePath('/admin/image-review')
    return { ok: true, newUrl: entry.generated_path }
  } catch (e: unknown) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) }
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

  // Update prompt in sidecar first
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
