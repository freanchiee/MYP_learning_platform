import { createClient } from '@supabase/supabase-js'
import { parsePapersPath } from '@/lib/assets'

/**
 * Service-role Supabase client — SERVER ONLY.
 *
 * Bypasses RLS, so it must never be imported into a client component. Used for
 * privileged Storage writes (uploading replacement images into the subject-wise
 * public buckets). Only imported from server actions ('use server'), never from
 * a client component.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceKey) {
    throw new Error(
      'Supabase admin client needs NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY',
    )
  }
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

const CONTENT_TYPES: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  svg: 'image/svg+xml',
  gif: 'image/gif',
}

export function contentTypeFor(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() ?? ''
  return CONTENT_TYPES[ext] ?? 'application/octet-stream'
}

/**
 * Determine content-type from the actual file bytes (magic numbers), falling back
 * to the extension. CRITICAL: some files have a `.svg` extension but contain raster
 * PNG/JPEG data (manual AI images uploaded to an svg-named slot). Serving those as
 * `image/svg+xml` makes browsers fail to render them — so we trust the bytes.
 */
export function sniffContentType(body: Uint8Array, filename: string): string {
  const b = body
  if (b.length >= 4 && b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return 'image/png'
  if (b.length >= 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'image/jpeg'
  if (b.length >= 3 && b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46) return 'image/gif'
  if (b.length >= 12 && b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 &&
      b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) return 'image/webp'
  return contentTypeFor(filename)
}

/**
 * Upload a file buffer to the subject bucket derived from a local-style papers path
 * (`/images/papers/{paperId}/{file}`). Upserts, so it doubles as a replace.
 * Returns the same local-style path on success (the resolver turns it into a URL).
 */
export async function uploadPapersAsset(
  localPath: string,
  body: Buffer | Uint8Array,
): Promise<{ ok: true; path: string } | { ok: false; error: string }> {
  const parsed = parsePapersPath(localPath)
  if (!parsed) return { ok: false, error: `Not a papers path: ${localPath}` }

  const supabase = createAdminClient()
  const { error } = await supabase.storage
    .from(parsed.bucket)
    .upload(parsed.key, body, {
      contentType: sniffContentType(body, parsed.key),
      upsert: true,
    })
  if (error) return { ok: false, error: error.message }
  return { ok: true, path: localPath }
}
