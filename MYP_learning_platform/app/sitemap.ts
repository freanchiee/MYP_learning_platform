import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { GUIDES } from '@/data/guides'
import { POSTS } from '@/data/blog'
import { MODULES } from '@/data/learn/physics'

// Served at /sitemap.xml. Only genuinely public (non-auth-gated) pages belong here —
// the subject/exam/design routes redirect to /login for crawlers, so they're omitted.
//
// `lastModified` is only set where we actually know a real date (blog posts, and the
// blog index = its newest post). Google ignores <lastmod> from sites that report a
// fresh timestamp on every build, so for pages with no tracked date we omit it
// rather than claim one. (changeFrequency/priority are ignored by Google, kept for other crawlers.)
export default function sitemap(): MetadataRoute.Sitemap {
  const newestPost = new Date(Math.max(...POSTS.map((p) => Date.parse(p.datePublished))))
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/resources`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/guides`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/tutoring`, changeFrequency: 'monthly', priority: 0.6 },
    ...GUIDES.map((g) => ({
      url: `${SITE_URL}/guides/${g.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/dp-physics`, changeFrequency: 'weekly', priority: 0.8 },
    ...MODULES.flatMap((m) => [
      { url: `${SITE_URL}/dp-physics/${m.slug}`, changeFrequency: 'weekly' as const, priority: 0.7 },
      ...m.lessons.map((l) => ({ url: `${SITE_URL}/dp-physics/${m.slug}/${l.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ]),
    { url: `${SITE_URL}/blog`, lastModified: newestPost, changeFrequency: 'weekly', priority: 0.8 },
    ...POSTS.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.datePublished),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
