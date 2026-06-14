/**
 * Asset URL resolver — maps local-style exam image paths to Supabase Storage.
 *
 * Exam figures are referenced in questions.ts as `/images/papers/{paperId}/{file}`.
 * Those files now live in subject-wise public Storage buckets (physics / chemistry /
 * biology), NOT in the Next.js public/ folder. This helper rewrites the local-style
 * path to the bucket's public CDN URL at render time, so we never had to touch the
 * 128 questions.ts files.
 *
 * Pure + idempotent + isomorphic (safe in client and server components, and mirrored
 * by the migration script). If no Supabase URL is configured, or the path isn't a
 * papers asset, the input is returned unchanged (graceful local fallback).
 */

const PAPERS_RE = /^\/images\/papers\/([^/]+)\/(.+)$/

/** Subject bucket for a paperId, e.g. "physics-may-2024" → "physics". */
export function subjectOfPaper(paperId: string): string {
  return paperId.split('-')[0]
}

/**
 * Parse a `/images/papers/{paperId}/{rest}` path into its bucket + object key.
 * Returns null for anything that isn't a papers asset.
 */
export function parsePapersPath(
  localPath: string,
): { bucket: string; key: string; paperId: string } | null {
  const m = PAPERS_RE.exec(localPath)
  if (!m) return null
  const [, paperId, rest] = m
  return { bucket: subjectOfPaper(paperId), key: `papers/${paperId}/${rest}`, paperId }
}

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, '') ?? ''

/**
 * Resolve a figure src to a loadable URL.
 * - http/https/data/blob URLs and EditableImage overrides → returned as-is
 * - `/images/papers/...` → Supabase public bucket URL
 * - anything else (e.g. /images/landing/...) → returned as-is (still local)
 */
export function resolveAssetUrl(src?: string | null): string {
  if (!src) return ''
  if (/^(https?:|data:|blob:)/.test(src)) return src
  const parsed = parsePapersPath(src)
  if (!parsed || !SUPABASE_URL) return src
  return `${SUPABASE_URL}/storage/v1/object/public/${parsed.bucket}/${parsed.key}`
}
