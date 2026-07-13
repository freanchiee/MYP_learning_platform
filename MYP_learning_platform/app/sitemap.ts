import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { GUIDES } from '@/data/guides'
import { POSTS } from '@/data/blog'

// Served at /sitemap.xml. Only genuinely public (non-auth-gated) pages belong here —
// the subject/exam/design routes redirect to /login for crawlers, so they're omitted.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/guides`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...GUIDES.map((g) => ({
      url: `${SITE_URL}/guides/${g.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...POSTS.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.datePublished),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
