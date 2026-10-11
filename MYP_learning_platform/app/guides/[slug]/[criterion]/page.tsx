import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GUIDES, getGuide } from '@/data/guides'
import { CRITERION_CONTENT, CRITERION_KEYS, CRITERION_TITLES, LEVEL_BANDS, STRANDS, SUBJECT_GROUP, type CriterionKey } from '@/data/seo/criterion-guides'
import { SAMPLE_SUBJECTS, sampleQuestionsFor, totalMarks, type SampleSubject } from '@/data/seo/sample-questions'
import { SITE_URL } from '@/lib/site'
import GuideTopBar from '@/components/guides/GuideTopBar'

// /guides/<subject>/criterion-<a-d>: a free, original study page for each criterion of each MYP subject.

const parseKey = (s: string): CriterionKey | null => {
  const m = /^criterion-([a-d])$/.exec(s)
  return m ? (m[1].toUpperCase() as CriterionKey) : null
}

export function generateStaticParams() {
  return GUIDES.flatMap((g) => CRITERION_KEYS.map((k) => ({ slug: g.slug, criterion: `criterion-${k.toLowerCase()}` })))
}

function load(slug: string, criterion: string) {
  const guide = getGuide(slug)
  const key = parseKey(criterion)
  const content = guide && key ? CRITERION_CONTENT[guide.slug]?.[key] : undefined
  if (!guide || !key || !content) return null
  const group = SUBJECT_GROUP[guide.slug]
  return { guide, key, content, group, title: CRITERION_TITLES[group][key], strands: STRANDS[group][key] }
}

export function generateMetadata({ params }: { params: { slug: string; criterion: string } }): Metadata {
  const d = load(params.slug, params.criterion)
  if (!d) return {}
  const title = `MYP ${d.guide.subject} Criterion ${d.key}: ${d.title} — Guide & Examples`
  const description = `Free guide to MYP ${d.guide.subject} Criterion ${d.key} (${d.title}): what each strand asks, what the score levels look like, tips, common mistakes and a weak-versus-strong example.`
  const url = `${SITE_URL}/guides/${d.guide.slug}/criterion-${d.key.toLowerCase()}`
  return { title, description, alternates: { canonical: `/guides/${d.guide.slug}/criterion-${d.key.toLowerCase()}` }, openGraph: { title: `${title} · CritABCD`, description, url } }
}

const WRAP = 'mx-auto w-full max-w-[1100px] px-5 md:px-10'
const Label = ({ children }: { children: React.ReactNode }) => <h2 className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>{children}</h2>
const panel = { background: 'var(--surface-elevated)', border: '1px solid var(--border)' } as const

export default function CriterionPage({ params }: { params: { slug: string; criterion: string } }) {
  const d = load(params.slug, params.criterion)
  if (!d) notFound()
  const { guide, key, content, title, strands } = d
  const subjectName = guide.subject
  const url = `${SITE_URL}/guides/${guide.slug}/criterion-${key.toLowerCase()}`
  const isScience = guide.slug in SAMPLE_SUBJECTS
  const questions = isScience ? sampleQuestionsFor(guide.slug as SampleSubject).slice(0, 4) : []

  const faq = [
    { q: `What is MYP ${subjectName} Criterion ${key}?`, a: `Criterion ${key} is ${title}. It is marked out of 8 across ${strands.length} strands (${strands.map((s) => s.code).join(', ')}). ${content.lead}` },
    { q: `How do I score highly in MYP ${subjectName} Criterion ${key}?`, a: content.tips.slice(0, 3).join(' ') },
    { q: `What are common mistakes in MYP ${subjectName} Criterion ${key}?`, a: content.mistakes.join(' ') },
  ]

  const JSON_LD = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: `MYP ${subjectName} Criterion ${key}: ${title}`,
        description: content.lead,
        url,
        inLanguage: 'en',
        about: `IB MYP ${subjectName}`,
        educationalLevel: 'IB Middle Years Programme',
        author: { '@id': `${SITE_URL}/#org` },
        publisher: { '@id': `${SITE_URL}/#org` },
        isPartOf: { '@id': `${SITE_URL}/guides/${guide.slug}#course` },
      },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'MYP Guides', item: `${SITE_URL}/guides` },
          { '@type': 'ListItem', position: 2, name: `MYP ${subjectName}`, item: `${SITE_URL}/guides/${guide.slug}` },
          { '@type': 'ListItem', position: 3, name: `Criterion ${key}`, item: url },
        ],
      },
    ],
  }

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <GuideTopBar />

      <div style={{ borderBottom: '1px solid var(--border)', background: 'linear-gradient(180deg, var(--accent-soft), transparent)' }}>
        <div className={`${WRAP} py-10 md:py-12`}>
          <div className="text-sm" style={{ color: 'var(--text-subtle)' }}>
            <Link href="/guides" className="font-bold" style={{ color: 'var(--accent)' }}>MYP Guides</Link>
            <span className="mx-2">/</span>
            <Link href={`/guides/${guide.slug}`} className="font-bold" style={{ color: 'var(--accent)' }}>{subjectName}</Link>
            <span className="mx-2">/</span>
            <span>Criterion {key}</span>
          </div>
          <div className="mt-5 text-sm font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>{guide.group.toUpperCase()} · OUT OF 8</div>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-5xl" style={{ color: 'var(--text)' }}>
            MYP {subjectName} Criterion {key}: {title}
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>{content.lead}</p>
          <nav aria-label="Other criteria" className="mt-6 flex flex-wrap gap-2">
            {CRITERION_KEYS.map((k) => (
              <Link
                key={k}
                href={`/guides/${guide.slug}/criterion-${k.toLowerCase()}`}
                aria-current={k === key ? 'page' : undefined}
                className="rounded-full px-4 py-2 text-sm font-bold"
                style={k === key ? { background: 'var(--accent)', color: 'var(--text-on-accent)' } : { border: '1px solid var(--border-strong)', color: 'var(--text)' }}
              >
                {k} · {CRITERION_TITLES[d.group][k]}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className={`${WRAP} space-y-6 py-8 md:py-10`}>
        <section className="rounded-3xl p-6 md:p-7" style={panel}>
          <Label>WHAT THE STRANDS ASK</Label>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {strands.map((s) => (
              <div key={s.code} className="rounded-2xl p-4" style={{ background: 'var(--surface-2)' }}>
                <div className="text-sm font-black" style={{ color: 'var(--accent)' }}>{s.code}</div>
                <div className="mt-0.5 font-bold" style={{ color: 'var(--text)' }}>{s.name}</div>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.looksLike}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl p-6 md:p-7" style={panel}>
          <Label>WHAT EACH SCORE LEVEL TENDS TO LOOK LIKE</Label>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {LEVEL_BANDS.map((b) => (
              <div key={b.range} className="rounded-2xl p-4" style={{ background: 'var(--surface-2)' }}>
                <div className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>{b.range}</div>
                <div className="text-xs font-black tracking-widest" style={{ color: 'var(--accent)' }}>{b.label.toUpperCase()}</div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{b.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs" style={{ color: 'var(--text-subtle)' }}>A plain-language guide only. Your teacher marks against the official IB level descriptors.</p>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl p-6 md:p-7" style={panel}>
            <Label>HOW TO SCORE HIGHER</Label>
            <ul className="mt-4 space-y-3">
              {content.tips.map((t, i) => (
                <li key={i} className="flex gap-2.5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl p-6 md:p-7" style={panel}>
            <Label>COMMON MISTAKES</Label>
            <ul className="mt-4 space-y-3">
              {content.mistakes.map((t, i) => (
                <li key={i} className="flex gap-2.5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: 'var(--danger, #D6425E)' }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-3xl p-6 md:p-7" style={panel}>
          <Label>WORKED EXAMPLE: WEAK VERSUS STRONG</Label>
          <p className="mt-3 text-lg font-bold" style={{ color: 'var(--text)' }}>{content.example.task}</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl p-4" style={{ border: '2px solid var(--danger, #D6425E)' }}>
              <div className="text-xs font-black tracking-widest" style={{ color: 'var(--danger, #D6425E)' }}>WEAK</div>
              <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--text)' }}>{content.example.weak}</p>
            </div>
            <div className="rounded-2xl p-4" style={{ border: '2px solid var(--success, #1FA98A)' }}>
              <div className="text-xs font-black tracking-widest" style={{ color: 'var(--success, #1FA98A)' }}>STRONG</div>
              <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--text)' }}>{content.example.strong}</p>
            </div>
          </div>
          <div className="mt-4 text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>WHY THE STRONG ANSWER WORKS</div>
          <ul className="mt-2 space-y-2">
            {content.example.why.map((w, i) => (
              <li key={i} className="flex gap-2.5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: 'var(--success, #1FA98A)' }} />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </section>

        {questions.length > 0 && (
          <section className="rounded-3xl p-6 md:p-7" style={panel}>
            <Label>TRY IT: FREE SAMPLE QUESTIONS</Label>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {questions.map((q) => (
                <Link key={q.slug} href={`/sample-questions/${q.subject}/${q.slug}`} className="rounded-2xl p-4" style={{ background: 'var(--surface-2)' }}>
                  <div className="text-[11px] font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>{q.group.toUpperCase()} · {totalMarks(q)} MARKS</div>
                  <div className="mt-1 font-bold" style={{ color: 'var(--text)' }}>{q.topic} →</div>
                </Link>
              ))}
            </div>
            <Link href="/sample-questions" className="mt-4 inline-block text-sm font-bold" style={{ color: 'var(--accent)' }}>All free sample questions →</Link>
          </section>
        )}

        <div>
          <Label>FREQUENTLY ASKED QUESTIONS</Label>
          <div className="mt-4 grid gap-3">
            {faq.map((f, i) => (
              <details key={i} open={i === 0} className="group rounded-2xl p-5" style={panel}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-bold" style={{ color: 'var(--text)' }}>
                  {f.q}
                  <span className="shrink-0 transition-transform group-open:rotate-180" style={{ color: 'var(--accent)' }}>⌄</span>
                </summary>
                <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 rounded-3xl p-6 md:p-7" style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}>
          <div className="mr-auto">
            <div className="text-lg font-extrabold">Practise Criterion {key} for real</div>
            <div className="text-sm" style={{ opacity: 0.85 }}>Past papers and live classes on CritABCD, marked against the A–D criteria.</div>
          </div>
          <Link href={guide.papersHref} className="rounded-xl px-6 py-3 text-sm font-black" style={{ background: 'var(--text-on-accent)', color: 'var(--accent)' }}>
            {guide.slug === 'design' ? 'Open the Design module →' : `Practise MYP ${subjectName} →`}
          </Link>
        </div>

        <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
          Written by CritABCD for study and revision, in our own words. The official MYP {subjectName} guide and assessment criteria are published by the International Baccalaureate.{' '}
          <a href={guide.officialUrl} target="_blank" rel="noopener noreferrer nofollow" className="font-bold" style={{ color: 'var(--accent)' }}>Official IB guide ↗</a>
        </p>
      </div>
    </div>
  )
}
