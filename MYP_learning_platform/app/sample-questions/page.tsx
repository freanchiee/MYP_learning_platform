import type { Metadata } from 'next'
import Link from 'next/link'
import { SAMPLE_QUESTIONS, SAMPLE_SUBJECTS, sampleQuestionsFor, totalMarks, type SampleSubject } from '@/data/seo/sample-questions'
import { SITE_URL } from '@/lib/site'
import GuideTopBar from '@/components/guides/GuideTopBar'

export const metadata: Metadata = {
  title: 'Free MYP Sample Questions with Mark Schemes',
  description: 'Free original MYP Physics, Chemistry and Biology sample questions with worked mark schemes and exam tips. Try each question, then reveal the answer.',
  alternates: { canonical: '/sample-questions' },
  openGraph: { title: 'Free MYP Sample Questions · CritABCD', description: 'Original MYP Physics, Chemistry and Biology practice questions with worked mark schemes.', url: `${SITE_URL}/sample-questions` },
}

const ITEMLIST_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: SAMPLE_QUESTIONS.map((q, i) => ({ '@type': 'ListItem', position: i + 1, name: `${SAMPLE_SUBJECTS[q.subject].name}: ${q.topic}`, url: `${SITE_URL}/sample-questions/${q.subject}/${q.slug}` })),
}

export default function SampleQuestionsHub() {
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEMLIST_LD) }} />
      <GuideTopBar label="Free questions" />
      <main className="mx-auto w-full max-w-[1100px] px-5 py-12 md:px-10">
        <div className="text-sm font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>FREE · NO SIGN-UP</div>
        <h1 className="mt-2 text-4xl font-extrabold md:text-5xl" style={{ color: 'var(--text)' }}>Free MYP sample questions</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          One original practice question for each key topic in MYP Physics, Chemistry and Biology. Try it on paper first, then open the
          mark scheme to see where the marks are. Written by CritABCD, not copied from past papers.
        </p>

        {(Object.keys(SAMPLE_SUBJECTS) as SampleSubject[]).map((s) => (
          <section key={s} className="mt-10">
            <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text)' }}>MYP {SAMPLE_SUBJECTS[s].name}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {sampleQuestionsFor(s).map((q) => (
                <Link key={q.slug} href={`/sample-questions/${s}/${q.slug}`} className="rounded-2xl p-5 transition-all hover:-translate-y-0.5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
                  <div className="text-[11px] font-black tracking-[0.2em]" style={{ color: 'var(--text-subtle)' }}>{q.group.toUpperCase()} · {totalMarks(q)} MARKS</div>
                  <div className="mt-1 text-lg font-extrabold" style={{ color: 'var(--text)' }}>{q.topic}</div>
                  <div className="mt-2 text-sm font-bold" style={{ color: 'var(--accent)' }}>Try it →</div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}
