import { SITE_URL, SITE_FAQ } from '@/lib/site'
import { GUIDES, MYP_GLOBAL_CONTEXTS } from '@/data/guides'
import { POSTS } from '@/data/blog'

// /llms-full.txt — the whole public, crawlable content of the site as one
// plain-text document, for LLM crawlers and agents (the companion to the short
// index in public/llms.txt). Generated from the same data files that render
// /guides and /blog, so it can't drift out of date. Static at build time.
export const dynamic = 'force-static'

export function GET() {
  const out: string[] = []

  out.push('# CritABCD — full public content')
  out.push('')
  out.push(
    '> CritABCD is a next-generation learning site for the IB Middle Years Programme (MYP): free guides and articles, interactive resources, live classes, past papers, and AI-graded practice against the four IB MYP criteria (A–D). This file contains the text of every public guide and article. Short index: ' +
      `${SITE_URL}/llms.txt`
  )
  out.push('')

  out.push('## About')
  for (const { q, a } of SITE_FAQ) {
    out.push(`- ${q} ${a}`)
  }
  out.push('')
  out.push(`Global contexts used across MYP subjects: ${MYP_GLOBAL_CONTEXTS.join('; ')}.`)
  out.push('')

  out.push('# Subject guides')
  out.push('')
  for (const g of GUIDES) {
    out.push(`## MYP ${g.subject} (${g.group})`)
    out.push(`URL: ${SITE_URL}/guides/${g.slug}`)
    out.push('')
    out.push(g.overview)
    out.push('')
    out.push('Aims:')
    g.aims.forEach((a) => out.push(`- ${a}`))
    out.push('')
    out.push('Assessment criteria (each marked out of 8):')
    g.criteria.forEach((c) => out.push(`- ${c.key} — ${c.title}: ${c.summary}`))
    out.push('')
    out.push(`Key concepts: ${g.keyConcepts.join(', ')}.`)
    out.push(`Related concepts: ${g.relatedConcepts.join(', ')}.`)
    out.push('')
    if (g.faq.length) {
      out.push('FAQ:')
      g.faq.forEach(({ q, a }) => out.push(`- ${q} ${a}`))
      out.push('')
    }
  }

  out.push('# Articles')
  out.push('')
  for (const p of POSTS) {
    out.push(`## ${p.title}`)
    out.push(`URL: ${SITE_URL}/blog/${p.slug}`)
    out.push(`Published: ${p.datePublished}. Topics: ${p.tags.join(', ')}.`)
    out.push('')
    out.push(p.intro)
    out.push('')
    for (const s of p.sections) {
      if (s.heading) out.push(`### ${s.heading}`)
      s.body?.forEach((para) => out.push(para, ''))
      if (s.bullets?.length) {
        s.bullets.forEach((b) => out.push(`- ${b}`))
        out.push('')
      }
    }
    if (p.faq?.length) {
      out.push('FAQ:')
      p.faq.forEach(({ q, a }) => out.push(`- ${q} ${a}`))
      out.push('')
    }
  }

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  })
}
