import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Served at /sitemap.xml. Only genuinely public (non-auth-gated) pages belong here —
// the subject/exam/design routes redirect to /login for crawlers, so they're omitted.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]
}
