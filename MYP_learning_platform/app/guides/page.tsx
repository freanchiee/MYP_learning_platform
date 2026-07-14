import type { Metadata } from 'next'
import Link from 'next/link'
import { GUIDES } from '@/data/guides'
import { SITE_URL } from '@/lib/site'
import GuideTopBar from '@/components/guides/GuideTopBar'

export const metadata: Metadata = {
  title: 'Free MYP Subject Guides',
  description:
    'Free IB MYP subject guides: aims, assessment criteria (A–D), key concepts and grading for Physics, Chemistry, Biology, Individuals & Societies, Geography and Design.',
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Free MYP Subject Guides · CritABCD',
    description:
      'Aims, assessment criteria (A–D), key concepts and grading for every IB MYP subject — with links to the official IB guides.',
    url: `${SITE_URL}/guides`,
  },
}

const ITEMLIST_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: GUIDES.map((g, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `MYP ${g.subject}`,
    url: `${SITE_URL}/guides/${g.slug}`,
  })),
}

export default function GuidesHubPage() {
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEMLIST_LD) }} />
      <GuideTopBar />

      <main className="mx-auto w-full max-w-[1600px] px-5 py-12 md:px-10">
        <div className="text-sm font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
          FREE · NO SIGN-UP
        </div>
        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl" style={{ color: 'var(--text)' }}>
          MYP Subject Guides
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Clear, free overviews of every IB Middle Years Programme subject — the aims, the four
          assessment criteria (A–D), key and related concepts, and exactly how each subject is
          graded. Each page links to the official IB guide and to free practice on CritABCD.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group rounded-2xl p-6 transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}
            >
              <div className="text-[11px] font-black tracking-[0.2em]" style={{ color: 'var(--text-subtle)' }}>
                {g.group.toUpperCase()}
              </div>
              <div className="mt-1 text-2xl font-extrabold" style={{ color: 'var(--text)' }}>
                MYP {g.subject}
              </div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {g.tagline}
              </p>
              <div className="mt-4 text-sm font-black tracking-widest" style={{ color: 'var(--accent)' }}>
                READ THE GUIDE →
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm" style={{ color: 'var(--text-subtle)' }}>
          These overviews are written by CritABCD for study and revision. The official MYP subject
          guides are published by the International Baccalaureate — each page links to the source.
        </p>
      </main>
    </div>
  )
}
