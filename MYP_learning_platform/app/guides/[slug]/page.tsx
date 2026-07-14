import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GUIDES, getGuide, MYP_GLOBAL_CONTEXTS, GUIDE_EXTRAS } from '@/data/guides'
import { SITE_URL } from '@/lib/site'
import GuideTopBar from '@/components/guides/GuideTopBar'
import SubjectExplorer from '@/components/guides/SubjectExplorer'

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug)
  if (!g) return {}
  const title = `MYP ${g.subject} — Guide & Assessment Criteria`
  const description = `Free MYP ${g.subject} guide: aims, the A–D assessment criteria, key concepts and how it's graded. Part of ${g.group}.`
  return {
    title,
    description,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { title: `${title} · CritABCD`, description, url: `${SITE_URL}/guides/${g.slug}` },
  }
}

const WRAP = 'mx-auto w-full max-w-[1600px] px-5 md:px-10'

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug)
  if (!g) notFound()
  const ex = GUIDE_EXTRAS[g.slug]

  const pageUrl = `${SITE_URL}/guides/${g.slug}`
  const JSON_LD = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        '@id': `${pageUrl}#course`,
        name: `MYP ${g.subject}`,
        description: g.overview,
        url: pageUrl,
        inLanguage: 'en',
        educationalLevel: 'IB Middle Years Programme',
        provider: { '@id': `${SITE_URL}/#org` },
        hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online' },
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: g.faq.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'MYP Guides', item: `${SITE_URL}/guides` },
          { '@type': 'ListItem', position: 2, name: `MYP ${g.subject}`, item: pageUrl },
        ],
      },
    ],
  }

  const Card = ({ label, className = '', children }: { label: string; className?: string; children: React.ReactNode }) => (
    <section className={`rounded-3xl p-6 md:p-7 ${className}`} style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
      <h2 className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>{label}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )

  const Chips = ({ items }: { items: string[] }) => (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="rounded-full px-3.5 py-2 text-sm font-bold" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>
          {t}
        </span>
      ))}
    </div>
  )

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <GuideTopBar />

      {/* ── Hero band (full-bleed) ── */}
      <div style={{ borderBottom: '1px solid var(--border)', background: 'linear-gradient(180deg, var(--accent-soft), transparent)' }}>
        <div className={`${WRAP} py-10 md:py-12`}>
          <div className="text-sm" style={{ color: 'var(--text-subtle)' }}>
            <Link href="/guides" className="font-bold" style={{ color: 'var(--accent)' }}>MYP Guides</Link>
            <span className="mx-2">/</span>
            <span>{g.subject}</span>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div>
              <div className="text-sm font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>{g.group.toUpperCase()}</div>
              <h1 className="mt-2 text-5xl font-extrabold leading-none md:text-6xl" style={{ color: 'var(--text)' }}>
                MYP {g.subject}
              </h1>
              <p className="mt-5 max-w-3xl text-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {g.overview}
              </p>
            </div>

            {/* Quick facts */}
            <div className="rounded-3xl p-6" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
              <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>QUICK FACTS</div>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ['Subject group', g.group],
                  ['Assessment', '4 criteria (A–D), each out of 8'],
                  ['Format', ex ? ex.examPattern.format : '—'],
                  ['Final grade', '1–7 (from the combined criterion levels)'],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col border-b pb-3 last:border-0 last:pb-0" style={{ borderColor: 'var(--divider)' }}>
                    <dt className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--text-subtle)' }}>{k}</dt>
                    <dd className="mt-0.5 font-semibold" style={{ color: 'var(--text)' }}>{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={g.officialUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-4 block rounded-xl px-4 py-2.5 text-center text-sm font-bold"
                style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                Official IB guide ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className={`${WRAP} py-8 md:py-10`}>
        {/* Interactive explorer — the centrepiece */}
        {ex && (
          <SubjectExplorer
            subject={g.subject}
            syllabusAreas={ex.syllabusAreas}
            examPattern={ex.examPattern}
            criteria={g.criteria}
            papersHref={g.papersHref}
          />
        )}

        {/* Bento grid: aims + concepts + contexts */}
        <div className="mt-6 grid gap-5 lg:grid-cols-12">
          <Card label="AIMS" className="lg:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {g.aims.map((a, i) => (
                <li key={i} className="flex gap-2.5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card label="KEY CONCEPTS" className="lg:col-span-5">
            <Chips items={g.keyConcepts} />
          </Card>

          <Card label="RELATED CONCEPTS" className="lg:col-span-6">
            <Chips items={g.relatedConcepts} />
          </Card>

          <Card label="GLOBAL CONTEXTS" className="lg:col-span-6">
            <Chips items={MYP_GLOBAL_CONTEXTS} />
          </Card>
        </div>

        {/* FAQ — interactive accordion (native <details>, fully crawlable) */}
        <div className="mt-6">
          <h2 className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>FREQUENTLY ASKED QUESTIONS</h2>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            {g.faq.map((f, i) => (
              <details
                key={i}
                open={i === 0}
                className="group rounded-2xl p-5"
                style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-bold" style={{ color: 'var(--text)' }}>
                  {f.q}
                  <span className="shrink-0 transition-transform group-open:rotate-180" style={{ color: 'var(--accent)' }}>⌄</span>
                </summary>
                <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA band */}
        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-3xl p-6 md:p-7" style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}>
          <div className="mr-auto">
            <div className="text-lg font-extrabold">Ready to practise MYP {g.subject}?</div>
            <div className="text-sm" style={{ opacity: 0.85 }}>Apply the criteria with instant AI-marked feedback.</div>
          </div>
          <Link
            href={g.papersHref}
            className="rounded-xl px-6 py-3 text-sm font-black"
            style={{ background: 'var(--text-on-accent)', color: 'var(--accent)' }}
          >
            {g.slug === 'design' ? 'Open the Design module →' : `Practise MYP ${g.subject} →`}
          </Link>
        </div>

        <p className="mt-5 text-xs" style={{ color: 'var(--text-subtle)' }}>
          This overview is written by CritABCD for study and revision. The official MYP {g.subject} guide is published by the International Baccalaureate.
        </p>
      </div>
    </div>
  )
}
