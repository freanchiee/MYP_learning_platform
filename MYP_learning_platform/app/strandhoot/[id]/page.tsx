import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import GuideTopBar from '@/components/guides/GuideTopBar'
import InterestForm from '@/components/leads/InterestForm'
import { SITE_URL } from '@/lib/site'
import { IS_STRANDS } from '@/data/design/live/is-shared'
import { publicActivities, publicActivity } from '@/lib/strandhoot'

export function generateStaticParams() {
  return publicActivities().map((a) => ({ id: a.id }))
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const a = publicActivity(params.id)
  if (!a) return {}
  return {
    title: `${a.title} — ${a.year} ${a.subject} Strandhoot activity`,
    description: `${a.subtitle} A ${a.minutes ? `${a.minutes}-minute ` : ''}Strandhoot activity with ${a.checkpoints} checkpoint${a.checkpoints === 1 ? '' : 's'}, evidence tracked against ${a.strands.length} MYP criterion strands.`,
    alternates: { canonical: `/strandhoot/${a.id}` },
  }
}

const STRAND_TEXT: Record<string, string> = IS_STRANDS

export default function StrandhootActivityPage({ params }: { params: { id: string } }) {
  const a = publicActivity(params.id)
  if (!a) notFound()
  const url = `${SITE_URL}/strandhoot/${a.id}`
  const LD = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: a.title,
    description: a.subtitle,
    url,
    educationalLevel: `IB MYP ${a.year.replace('MYP', 'Year ')}`,
    about: a.subject,
    learningResourceType: 'Interactive classroom activity',
    isAccessibleForFree: true,
    provider: { '@type': 'Organization', name: 'CritABCD', url: SITE_URL },
  }
  const subjectInterest = a.subject === 'Geography' ? 'MYP Geography' : a.subject === 'History' ? 'MYP Humanities' : 'MYP Design'
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <GuideTopBar label="Strandhoot" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <main className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <Link href="/strandhoot" className="text-xs font-bold tracking-widest" style={{ color: 'var(--text-subtle)' }}>← ALL STRANDHOOT ACTIVITIES</Link>
        <div className="mt-4 text-5xl">{a.icon}</div>
        <p className="mt-2 text-xs font-black tracking-[0.25em]" style={{ color: a.accent }}>{a.year} · {a.subject.toUpperCase()} · STRANDHOOT</p>
        <h1 className="mt-1 text-3xl font-extrabold md:text-5xl" style={{ color: 'var(--text)', letterSpacing: '-0.5px' }}>{a.title}</h1>
        <p className="mt-3 text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>{a.subtitle}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={`/design/live/${a.id}`} className="rounded-xl px-5 py-3 text-sm font-black" style={{ background: a.accent, color: '#fff' }}>Host or join this activity →</Link>
          <Link href="#sign-up" className="rounded-xl px-5 py-3 text-sm font-bold" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>Get the next free one</Link>
        </div>
        <p className="mt-2 text-xs" style={{ color: 'var(--text-subtle)' }}>Students sign in so their work is saved. {a.selfPaced ? 'Self-paced: each student works at their own speed.' : 'Hosted live by the teacher.'}</p>

        <h2 className="mt-10 text-xl font-extrabold" style={{ color: 'var(--text)' }}>What students do</h2>
        <ol className="mt-3 space-y-2">
          {a.stages.map((s, i) => (
            <li key={s.label} className="flex gap-3 rounded-xl p-3 text-sm" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }}>
              <span className="font-black" style={{ color: a.accent }}>{i + 1}</span>
              <span className="flex-1"><strong>{s.label}</strong> <span style={{ color: 'var(--text-muted)' }}>· {s.kind}</span></span>
              {s.minutes ? <span style={{ color: 'var(--text-subtle)' }}>~{s.minutes} min</span> : null}
            </li>
          ))}
        </ol>

        <h2 className="mt-10 text-xl font-extrabold" style={{ color: 'var(--text)' }}>Strands covered</h2>
        <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>Evidence is collected against each of these MYP criterion strands, and the teacher scores them from 1 to 8.</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {a.strands.map((k) => (
            <li key={k} className="rounded-xl p-3 text-sm" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }}>
              <strong style={{ color: a.accent }}>{k}</strong> {STRAND_TEXT[k] ? <span style={{ color: 'var(--text-muted)' }}>· {STRAND_TEXT[k]}</span> : null}
            </li>
          ))}
        </ul>

        <div id="sign-up" className="mt-12">
          <InterestForm
            sourcePage={`/strandhoot/${a.id}`}
            defaultInterests={[subjectInterest, 'Live classes for teachers (Strandhoot)']}
            heading="Get the next free Strandhoot activity for your subject"
            blurb="Teachers, parents and guardians: leave an email and tick what you want. We may contact you about it, nothing is charged, and you can unsubscribe at any time."
          />
        </div>
      </main>
    </div>
  )
}
