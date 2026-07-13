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

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug)
  if (!g) notFound()

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

  const Section = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <section className="mt-10">
      <h2 className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>
        {label}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  )

  const Chips = ({ items }: { items: string[] }) => (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="rounded-full px-3 py-1.5 text-sm font-bold" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>
          {t}
        </span>
      ))}
    </div>
  )

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <GuideTopBar />

      <main className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        {/* Breadcrumb */}
        <div className="text-sm" style={{ color: 'var(--text-subtle)' }}>
          <Link href="/guides" className="font-bold" style={{ color: 'var(--accent)' }}>MYP Guides</Link>
          <span className="mx-2">/</span>
          <span>{g.subject}</span>
        </div>

        <div className="mt-4 text-sm font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
          {g.group.toUpperCase()}
        </div>
        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl" style={{ color: 'var(--text)' }}>
          MYP {g.subject}
        </h1>
        <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {g.overview}
        </p>

        {/* Interactive explorer: syllabus areas · exam pattern · criteria */}
        {GUIDE_EXTRAS[g.slug] && (
          <div className="mt-8">
            <SubjectExplorer
              subject={g.subject}
              syllabusAreas={GUIDE_EXTRAS[g.slug].syllabusAreas}
              examPattern={GUIDE_EXTRAS[g.slug].examPattern}
              criteria={g.criteria}
              papersHref={g.papersHref}
            />
          </div>
        )}

        <Section label="AIMS">
          <ul className="space-y-2.5">
            {g.aims.map((a, i) => (
              <li key={i} className="flex gap-2.5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--accent)' }}>•</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="ASSESSMENT CRITERIA (EACH OUT OF 8)">
          <div className="grid gap-3 sm:grid-cols-2">
            {g.criteria.map((c) => (
              <div key={c.key} className="rounded-2xl p-4" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg text-sm font-black text-white" style={{ background: 'var(--accent)' }}>
                    {c.key}
                  </span>
                  <span className="text-base font-bold" style={{ color: 'var(--text)' }}>{c.title}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.summary}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section label="KEY CONCEPTS">
          <Chips items={g.keyConcepts} />
        </Section>

        <Section label="RELATED CONCEPTS">
          <Chips items={g.relatedConcepts} />
        </Section>

        <Section label="GLOBAL CONTEXTS">
          <Chips items={MYP_GLOBAL_CONTEXTS} />
        </Section>

        <Section label="FREQUENTLY ASKED QUESTIONS">
          <div className="space-y-4">
            {g.faq.map((f, i) => (
              <div key={i} className="rounded-2xl p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
                <div className="text-base font-bold" style={{ color: 'var(--text)' }}>{f.q}</div>
                <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA + official source */}
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t pt-8" style={{ borderColor: 'var(--border)' }}>
          <Link
            href={g.papersHref}
            className="rounded-xl px-5 py-3 text-sm font-black"
            style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
          >
            {g.slug === 'design' ? 'Start the Design module →' : `Practise MYP ${g.subject} →`}
          </Link>
          <a
            href={g.officialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="rounded-xl px-5 py-3 text-sm font-bold"
            style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
          >
            Official IB guide ↗
          </a>
        </div>
        <p className="mt-4 text-xs" style={{ color: 'var(--text-subtle)' }}>
          This overview is written by CritABCD for study and revision. The official MYP {g.subject}{' '}
          guide is published by the International Baccalaureate.
        </p>
      </main>
    </div>
  )
}
