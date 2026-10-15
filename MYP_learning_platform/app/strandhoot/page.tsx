import type { Metadata } from 'next'
import Link from 'next/link'
import GuideTopBar from '@/components/guides/GuideTopBar'
import InterestForm from '@/components/leads/InterestForm'
import { SITE_URL } from '@/lib/site'
import { publicActivities, STRANDHOOT_FAQ } from '@/lib/strandhoot'
import { MODULES } from '@/data/learn/physics'

export const metadata: Metadata = {
  title: 'Strandhoot — live MYP classroom activities, graded strand by strand',
  description:
    'Strandhoot is a live, game-style classroom activity for the IB MYP. Students join with a code, work through checkpoints, sources and interviews, and teachers see evidence against every criterion strand. Try MYP4 Geography, History and Design.',
  alternates: { canonical: '/strandhoot' },
}

const LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'Strandhoot',
      url: `${SITE_URL}/strandhoot`,
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Any (web browser)',
      description: 'Live, teacher-hosted IB MYP classroom activities with progress tracked strand by strand.',
      audience: { '@type': 'EducationalAudience', educationalRole: 'teacher' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: STRANDHOOT_FAQ.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ],
}

const STEPS = [
  { n: '1', t: 'Host or join', d: 'A teacher opens an activity and shares a code, or students work through it at their own pace.' },
  { n: '2', t: 'Learn, check, investigate', d: 'Short mini-lessons, checkpoint quizzes, sources to judge and characters to interview.' },
  { n: '3', t: 'See every strand', d: 'The teacher dashboard shows each student’s evidence against A.i, B.ii, D.iii and the rest, as it happens.' },
  { n: '4', t: 'Grade with judgement', d: 'Score each strand from 1 to 8 and give feedback. Suggested scores are only a first signal.' },
]

const COMPARE = [
  ['Question types', 'Quick recall quizzes', 'Checkpoint quizzes plus worksheets, source analysis and interviews'],
  ['What the teacher sees', 'Who got an answer right', 'Evidence against each MYP criterion strand'],
  ['Built for', 'Any subject, any age', 'IB MYP criteria A to D'],
  ['Pacing', 'Teacher-led rounds', 'Teacher-led or self-paced, saved automatically'],
  ['Marking', 'Automatic score', 'Teacher grades each strand; suggested scores help'],
]

const YEARS = ['MYP2', 'MYP3', 'MYP4', 'MYP5']
const physicsLessonCount = MODULES.reduce((n, m) => n + m.lessons.length, 0)

export default function StrandhootPage() {
  const acts = publicActivities()
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <GuideTopBar label="Strandhoot" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <main className="mx-auto max-w-5xl px-5 py-12 md:px-8">
        <p className="text-xs font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>LIVE CLASSES FOR THE IB MYP</p>
        <h1 className="mt-2 text-4xl font-extrabold md:text-6xl" style={{ color: 'var(--text)', letterSpacing: '-1px' }}>Strandhoot</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          A game-style live class where progress is tracked <strong>strand by strand</strong>. Students join from any device, teachers see the evidence behind every criterion, and nobody has to wait for marking to know where a class is.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="#activities" className="rounded-xl px-5 py-3 text-sm font-black" style={{ background: 'var(--accent)', color: '#fff' }}>Browse activities</Link>
          <Link href="#sign-up" className="rounded-xl px-5 py-3 text-sm font-bold" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>Get the next free activity</Link>
        </div>

        <h2 className="mt-14 text-2xl font-extrabold" style={{ color: 'var(--text)' }}>How Strandhoot works</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
              <div className="text-sm font-black" style={{ color: 'var(--accent)' }}>STEP {s.n}</div>
              <h3 className="mt-1 font-extrabold" style={{ color: 'var(--text)' }}>{s.t}</h3>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.d}</p>
            </div>
          ))}
        </div>

        <h2 id="activities" className="mt-14 text-2xl font-extrabold" style={{ color: 'var(--text)' }}>Strandhoot activities</h2>
        <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>Open any activity to preview the strands, checkpoints and stages before you host it.</p>
        {YEARS.map((year) => {
          const list = acts.filter((a) => a.year === year)
          if (!list.length) return null
          return (
            <section key={year} className="mt-8">
              <h3 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>{year}</h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((a) => (
                  <Link key={a.id} href={`/strandhoot/${a.id}`} className="group flex flex-col rounded-2xl p-5 transition-transform hover:-translate-y-1" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', borderTop: `4px solid ${a.accent}` }}>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{a.icon}</span>
                      <span className="rounded-full px-2.5 py-1 text-[10px] font-black tracking-widest" style={{ background: 'var(--accent-soft)', color: 'var(--text)' }}>{a.year} · {a.subject.toUpperCase()}</span>
                    </div>
                    <h4 className="mt-2 text-lg font-extrabold leading-tight" style={{ color: 'var(--text)' }}>{a.title}</h4>
                    <p className="mt-1 flex-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a.subtitle}</p>
                    <span className="mt-3 text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>{a.strands.length ? `${a.strands.length} strands · ` : ''}{a.checkpoints} quiz stage{a.checkpoints === 1 ? '' : 's'}{a.hasInterview ? ' · interviews' : ''}{a.selfPaced ? ' · self-paced' : ' · hosted live'}</span>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
        <section className="mt-8">
          <h3 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>DP Physics</h3>
          <Link href="/dp-physics" className="mt-3 flex flex-col rounded-2xl p-5 transition-transform hover:-translate-y-1" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', borderTop: '4px solid #2456C9' }}>
            <h4 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>Every DP Physics lesson can be run live</h4>
            <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>Each of the {physicsLessonCount} lessons across {MODULES.length} modules has predict-first and check-your-understanding questions that a teacher can host as a live class.</p>
            <span className="mt-3 text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>Browse DP Physics lessons →</span>
          </Link>
        </section>

        <h2 className="mt-14 text-2xl font-extrabold" style={{ color: 'var(--text)' }}>Strandhoot and Kahoot: what is different</h2>
        <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>Kahoot is a good tool for quick quizzes. Strandhoot is built for a different job: gathering evidence against MYP criteria.</p>
        <div className="mt-4 overflow-x-auto rounded-2xl" style={{ border: '1px solid var(--border)' }}>
          <table className="w-full text-left text-sm" style={{ background: 'var(--surface-elevated)', color: 'var(--text)' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th className="p-3" />
                <th className="p-3 font-bold">Kahoot</th>
                <th className="p-3 font-bold">Strandhoot</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map(([k, a, b]) => (
                <tr key={k} style={{ borderBottom: '1px solid var(--border)' }}>
                  <th className="p-3 font-semibold" scope="row">{k}</th>
                  <td className="p-3" style={{ color: 'var(--text-muted)' }}>{a}</td>
                  <td className="p-3">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 text-2xl font-extrabold" style={{ color: 'var(--text)' }}>Questions teachers ask</h2>
        <div className="mt-4 space-y-3">
          {STRANDHOOT_FAQ.map((f) => (
            <details key={f.q} className="rounded-xl p-4" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
              <summary className="cursor-pointer font-bold" style={{ color: 'var(--text)' }}>{f.q}</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div id="sign-up" className="mt-14">
          <InterestForm
            sourcePage="/strandhoot"
            defaultInterests={['Live classes for teachers (Strandhoot)', 'Free interactive resources']}
            heading="Get the next free Strandhoot activity"
            blurb="Teachers, parents and guardians: leave an email and tick what you want. We may contact you about it, nothing is charged, and you can unsubscribe at any time."
          />
        </div>
      </main>
    </div>
  )
}
