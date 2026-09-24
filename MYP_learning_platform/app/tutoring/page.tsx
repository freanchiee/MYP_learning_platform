import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/site'
import { TUTORING_COPY, TUTORING_FAQ } from '@/lib/tutoring'
import GuideTopBar from '@/components/guides/GuideTopBar'
import TutoringForm from '@/components/tutoring/TutoringForm'

export const metadata: Metadata = {
  // Bare title — the root layout's template appends " · CritABCD".
  title: 'Online IB Tutoring',
  description: 'One-to-one online help for IB MYP and DP students. Tell us what you are stuck on and we will get back to you by email.',
  alternates: { canonical: '/tutoring' },
  openGraph: {
    title: 'Online IB Tutoring · CritABCD',
    description: 'One-to-one online help for IB MYP and DP students.',
    url: `${SITE_URL}/tutoring`,
  },
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/tutoring#faq`,
      mainEntity: TUTORING_FAQ.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'CritABCD', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Online IB Tutoring', item: `${SITE_URL}/tutoring` },
      ],
    },
  ],
}

export default function TutoringPage() {
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <GuideTopBar label="Tutoring" />

      <main className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <div className="text-sm font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>ONLINE · IB MYP &amp; DP</div>
        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl" style={{ color: 'var(--text)' }}>{TUTORING_COPY.headline}</h1>
        <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>{TUTORING_COPY.intro}</p>
        {TUTORING_COPY.credentialLine && (
          <p className="mt-3 text-base font-semibold" style={{ color: 'var(--text)' }}>{TUTORING_COPY.credentialLine}</p>
        )}

        <section className="mt-8">
          <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text)' }}>Tell us what you need</h2>
          <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            It takes a minute. Nothing is charged here — we reply by email first.
          </p>
          <div className="mt-4">
            <TutoringForm sourcePage="/tutoring" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text)' }}>Questions</h2>
          <div className="mt-4 space-y-4">
            {TUTORING_FAQ.map((f) => (
              <div key={f.q} className="rounded-2xl p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
                <div className="text-base font-bold" style={{ color: 'var(--text)' }}>{f.q}</div>
                <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t pt-8" style={{ borderColor: 'var(--border)' }}>
          <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>WHILE YOU WAIT</div>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link href="/guides" className="rounded-xl px-4 py-2.5 text-sm font-bold" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>Free subject guides →</Link>
            <Link href="/blog" className="rounded-xl px-4 py-2.5 text-sm font-bold" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>MYP blog →</Link>
            <Link href="/resources" className="rounded-xl px-4 py-2.5 text-sm font-bold" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>Free interactive resources →</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
