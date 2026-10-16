// Students' uploaded photos and sketches live in the PRIVATE `live-uploads` storage bucket: only the uploader and the
// session's host or class teacher may read them (migration 0019). A saved image keeps the plain bucket URL it was stored
// with; to show or download it, that URL is swapped for a short-lived signed link made on demand for the signed-in viewer.

import { createClient } from '@/lib/supabase/client'

const BUCKET = 'live-uploads'
const MARKER = `/${BUCKET}/`
const LIFETIME_S = 3600

/** The object path inside the bucket for a stored upload URL, or null if it is not one of ours. */
export function uploadPathOf(url: string): string | null {
  const at = url.indexOf(MARKER)
  if (at < 0) return null
  return decodeURIComponent(url.slice(at + MARKER.length).split('?')[0])
}

const cache = new Map<string, { url: string; expires: number }>()

/** A link that works for the signed-in viewer. Falls back to the stored URL if signing is not possible. */
export async function signedUploadUrl(url: string): Promise<string> {
  const path = uploadPathOf(url)
  if (!path) return url
  const hit = cache.get(path)
  if (hit && hit.expires > Date.now()) return hit.url
  const { data, error } = await createClient().storage.from(BUCKET).createSignedUrl(path, LIFETIME_S)
  if (error || !data?.signedUrl) return url
  cache.set(path, { url: data.signedUrl, expires: Date.now() + (LIFETIME_S - 300) * 1000 })
  return data.signedUrl
}
