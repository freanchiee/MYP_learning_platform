import type { Metadata } from 'next'
import Link from 'next/link'
import { POSTS } from '@/data/blog'
import { SITE_URL } from '@/lib/site'
import GuideTopBar from '@/components/guides/GuideTopBar'

export const metadata: Metadata = {
  title: 'MYP Blog — Syllabus, Grading & Study Guides',
  description:
    'Free articles on the IB MYP: how it’s graded, the assessment criteria, command terms, eAssessment and study tips for Sciences, Individuals & Societies and Design.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'MYP Blog · CritABCD',
    description: 'Clear, free articles explaining the IB MYP — grading, criteria, command terms, eAssessment and more.',
    url: `${SITE_URL}/blog`,
  },
}

const ITEMLIST_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: POSTS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: `${SITE_URL}/blog/${p.slug}`,
  })),
}

export default function BlogHubPage() {
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEMLIST_LD) }} />
      <GuideTopBar label="MYP Blog" />

      <main className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <div className="text-sm font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
          FREE · IB MYP
        </div>
        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl" style={{ color: 'var(--text)' }}>
          MYP Blog
        </h1>
        <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Plain-English guides to how the IB Middle Years Programme works — grading, the assessment
          criteria, command terms, eAssessment and study tips.
        </p>

        <div className="mt-10 space-y-4">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block rounded-2xl p-6 transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full px-2.5 py-1" style={{ background: 'var(--surface-2)' }}>{t.toUpperCase()}</span>
                ))}
                <span>· {p.readMinutes} MIN READ</span>
              </div>
              <div className="mt-2 text-2xl font-extrabold" style={{ color: 'var(--text)' }}>{p.title}</div>
              <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.description}</p>
              <div className="mt-3 text-sm font-black tracking-widest" style={{ color: 'var(--accent)' }}>READ →</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
