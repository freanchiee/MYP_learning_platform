// Shared read-only content lookups for the MCP server (app/api/mcp/route.ts).
// Reuses the exact same data files that render /guides and /blog — so an
// agent calling these tools can never see something that contradicts the
// live pages or drifts out of date with them.

import { SITE_URL, SITE_FAQ } from '@/lib/site'
import { GUIDES, MYP_GLOBAL_CONTEXTS, type SubjectGuide } from '@/data/guides'
import { POSTS, type BlogPost } from '@/data/blog'

export function guideSummary(g: SubjectGuide) {
  return {
    slug: g.slug,
    subject: g.subject,
    group: g.group,
    tagline: g.tagline,
    url: `${SITE_URL}/guides/${g.slug}`,
  }
}

export function guideFull(g: SubjectGuide) {
  return {
    ...guideSummary(g),
    overview: g.overview,
    aims: g.aims,
    criteria: g.criteria,
    keyConcepts: g.keyConcepts,
    relatedConcepts: g.relatedConcepts,
    globalContexts: MYP_GLOBAL_CONTEXTS,
    officialUrl: g.officialUrl,
    faq: g.faq,
    relatedPosts: g.relatedPosts ?? [],
  }
}

export function postSummary(p: BlogPost) {
  return {
    slug: p.slug,
    title: p.title,
    description: p.description,
    datePublished: p.datePublished,
    readMinutes: p.readMinutes,
    tags: p.tags,
    url: `${SITE_URL}/blog/${p.slug}`,
  }
}

export function postFull(p: BlogPost) {
  return {
    ...postSummary(p),
    intro: p.intro,
    sections: p.sections.map((s) => ({ heading: s.heading, body: s.body ?? [], bullets: s.bullets ?? [] })),
    faq: p.faq ?? [],
    related: p.related ?? [],
  }
}

function haystack(...parts: (string | string[] | undefined)[]): string {
  return parts
    .flatMap((p) => (Array.isArray(p) ? p : [p ?? '']))
    .join(' ')
    .toLowerCase()
}

export function findGuide(slug: string): SubjectGuide | undefined {
  return GUIDES.find((g) => g.slug === slug)
}

export function findPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}

export function searchGuides(query: string): SubjectGuide[] {
  const q = query.trim().toLowerCase()
  if (!q) return GUIDES
  return GUIDES.filter((g) =>
    haystack(g.subject, g.group, g.tagline, g.overview, g.keyConcepts, g.relatedConcepts).includes(q)
  )
}

export function searchPosts(query: string): BlogPost[] {
  const q = query.trim().toLowerCase()
  if (!q) return POSTS
  return POSTS.filter((p) =>
    haystack(
      p.title,
      p.description,
      p.intro,
      p.tags,
      p.sections.flatMap((s) => [s.heading ?? '', ...(s.body ?? []), ...(s.bullets ?? [])])
    ).includes(q)
  )
}

export function siteFaq() {
  return SITE_FAQ
}

export { GUIDES, POSTS, MYP_GLOBAL_CONTEXTS, SITE_URL }
