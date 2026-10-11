import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SAMPLE_QUESTIONS, SAMPLE_SUBJECTS, getSampleQuestion, sampleQuestionsFor, totalMarks, type SampleSubject } from '@/data/seo/sample-questions'
import { SITE_URL } from '@/lib/site'
import GuideTopBar from '@/components/guides/GuideTopBar'
import ShareLink from '@/components/guides/ShareLink'

export function generateStaticParams() {
  return SAMPLE_QUESTIONS.map((q) => ({ subject: q.subject, topic: q.slug }))
}

export function generateMetadata({ params }: { params: { subject: string; topic: string } }): Metadata {
  const q = getSampleQuestion(params.subject, params.topic)
  if (!q) return {}
  const name = SAMPLE_SUBJECTS[q.subject].name
  const title = `MYP ${name} Sample Question: ${q.topic} (with mark scheme)`
  const description = `Free MYP ${name} practice question on ${q.topic.toLowerCase()}, worth ${totalMarks(q)} marks, with a worked mark scheme and an exam tip.`
  return { title, description, alternates: { canonical: `/sample-questions/${q.subject}/${q.slug}` }, openGraph: { title: `${title} · CritABCD`, description, url: `${SITE_URL}/sample-questions/${q.subject}/${q.slug}` } }
}

const panel = { background: 'var(--surface-elevated)', border: '1px solid var(--border)' } as const

export default function SampleQuestionPage({ params }: { params: { subject: string; topic: string } }) {
  const q = getSampleQuestion(params.subject, params.topic)
  if (!q) notFound()
  const meta = SAMPLE_SUBJECTS[q.subject]
  const url = `${SITE_URL}/sample-questions/${q.subject}/${q.slug}`
  const siblings = sampleQuestionsFor(q.subject)
  const idx = siblings.findIndex((s) => s.slug === q.slug)
  const next = siblings[(idx + 1) % siblings.length]
  const marks = totalMarks(q)

  const JSON_LD = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Quiz',
        '@id': `${url}#quiz`,
        name: `MYP ${meta.name}: ${q.topic}`,
        url,
        educationalLevel: 'IB Middle Years Programme',
        about: { '@type': 'Thing', name: q.topic },
        publisher: { '@id': `${SITE_URL}/#org` },
        hasPart: q.parts.map((p) => ({
          '@type': 'Question',
          name: p.q,
          text: `${q.intro} ${p.q}`,
          eduQuestionType: 'Short answer',
          acceptedAnswer: { '@type': 'Answer', text: p.answer.join(' ') },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Free sample questions', item: `${SITE_URL}/sample-questions` },
          { '@type': 'ListItem', position: 2, name: `MYP ${meta.name}`, item: `${SITE_URL}/sample-questions#${q.subject}` },
          { '@type': 'ListItem', position: 3, name: q.topic, item: url },
        ],
      },
    ],
  }

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <GuideTopBar label="Free questions" />
      <main className="mx-auto w-full max-w-[900px] px-5 py-10 md:px-10">
        <div className="text-sm" style={{ color: 'var(--text-subtle)' }}>
          <Link href="/sample-questions" className="font-bold" style={{ color: 'var(--accent)' }}>Free sample questions</Link>
          <span className="mx-2">/</span>
          <span>MYP {meta.name}</span>
        </div>
        <div className="mt-5 text-sm font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>{q.group.toUpperCase()} · {marks} MARKS</div>
        <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-5xl" style={{ color: 'var(--text)' }}>MYP {meta.name} sample question: {q.topic}</h1>

        <section className="mt-8 rounded-3xl p-6 md:p-7" style={panel}>
          <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>THE QUESTION</div>
          <p className="mt-3 text-lg leading-relaxed" style={{ color: 'var(--text)' }}>{q.intro}</p>
          <ol className="mt-5 space-y-5">
            {q.parts.map((p) => (
              <li key={p.label}>
                <div className="flex gap-3 text-base leading-relaxed" style={{ color: 'var(--text)' }}>
                  <span className="font-black" style={{ color: 'var(--accent)' }}>({p.label})</span>
                  <span className="flex-1">{p.q}</span>
                  <span className="shrink-0 text-sm font-bold" style={{ color: 'var(--text-subtle)' }}>[{p.marks}]</span>
                </div>
                <details className="mt-2 rounded-xl p-3" style={{ background: 'var(--surface-2)' }}>
                  <summary className="cursor-pointer text-sm font-bold" style={{ color: 'var(--accent)' }}>Show the mark scheme for ({p.label})</summary>
                  <ul className="mt-2 space-y-1.5">
                    {p.answer.map((a, i) => (
                      <li key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>• {a}</li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-5 rounded-3xl p-6 md:p-7" style={{ ...panel, borderLeft: '4px solid var(--accent)' }}>
          <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>EXAM TIP</div>
          <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{q.tip}</p>
          <Link href={`/guides/${meta.guideSlug}/criterion-${q.criterion.toLowerCase()}`} className="mt-3 inline-block text-sm font-bold" style={{ color: 'var(--accent)' }}>
            Read the MYP {meta.name} Criterion {q.criterion} guide →
          </Link>
        </section>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link href={`/sample-questions/${q.subject}/${next.slug}`} className="rounded-xl px-5 py-3 text-sm font-black" style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}>
            Next question: {next.topic} →
          </Link>
          <ShareLink url={`${url}?utm_source=sample-question-share&utm_medium=share`} title={`MYP ${meta.name} sample question: ${q.topic}`} />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-3xl p-6 md:p-7" style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}>
          <div className="mr-auto">
            <div className="text-lg font-extrabold">Want a full paper?</div>
            <div className="text-sm" style={{ opacity: 0.85 }}>Timed MYP {meta.name} papers with instant AI marking on CritABCD.</div>
          </div>
          <Link href={meta.papersHref} className="rounded-xl px-6 py-3 text-sm font-black" style={{ background: 'var(--text-on-accent)', color: 'var(--accent)' }}>
            Practise MYP {meta.name} →
          </Link>
        </div>
        <p className="mt-5 text-xs" style={{ color: 'var(--text-subtle)' }}>An original question written by CritABCD for revision. It is not an IB question.</p>
      </main>
    </div>
  )
}
