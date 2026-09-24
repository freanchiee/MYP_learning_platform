import type { Metadata } from 'next'
import Link from 'next/link'
import { MODULES } from '@/data/learn/physics'
import { SITE_URL } from '@/lib/site'
import GuideTopBar from '@/components/guides/GuideTopBar'
import LearnSidebar from '@/components/learn/LearnSidebar'
import { LessonChips } from '@/components/learn/LessonMeta'

export const metadata: Metadata = {
  title: 'IB DP Physics: Interactive Lessons',
  description: 'Free interactive IB DP Physics lessons for SL and HL. Read, predict, explore simulations and check your understanding, one idea at a time.',
  alternates: { canonical: '/dp-physics' },
  openGraph: { title: 'IB DP Physics: Interactive Lessons · CritABCD', description: 'Learn IB DP Physics by reading, doing and exploring.', url: `${SITE_URL}/dp-physics` },
}

const LD = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'IB DP Physics: Interactive Lessons',
  description: 'Interactive lessons for IB Diploma Programme Physics (SL and HL).',
  url: `${SITE_URL}/dp-physics`,
  inLanguage: 'en',
  educationalLevel: 'IB Diploma Programme',
  isAccessibleForFree: true,
  provider: { '@id': `${SITE_URL}/#org` },
  hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online' },
}

export default function DpPhysicsHub() {
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <GuideTopBar label="DP Physics" />
      <main className="mx-auto w-full max-w-[1400px] px-4 py-6 md:px-10 md:py-8">
        <header
          className="p-6 md:p-10"
          style={{ borderRadius: 'calc(var(--radius-card) + 8px)', background: 'var(--gradient-cta)', color: 'var(--text-on-accent)', boxShadow: 'var(--shadow-card-hover)' }}
        >
          <div className="text-xs font-black uppercase tracking-[0.4em] opacity-90">IB DP Physics · SL and HL · Free</div>
          <h1 className="mt-3 text-4xl font-extrabold md:text-6xl" style={{ letterSpacing: -2 }}>Learn physics by doing</h1>
          <p className="mt-3 max-w-2xl text-base opacity-95 md:text-lg">
            Short lessons you can do alone: read one idea, predict, test it in a simulation, then check yourself. Built class by class from our own classroom notes.
          </p>
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="hidden lg:block"><div className="sticky top-20"><LearnSidebar modules={MODULES} /></div></aside>
          <div className="grid content-start gap-6">
            {MODULES.map((m) => (
              <section key={m.slug} className="chrome-card p-5 md:p-6">
                <div className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>{m.theme} · {m.source}</div>
                <h2 className="mt-1 text-2xl font-extrabold" style={{ color: 'var(--text)' }}>
                  <Link href={`/dp-physics/${m.slug}`}>{m.code} {m.title}</Link>
                </h2>
                <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>{m.intro}</p>
                <ul className="mt-4 grid gap-2">
                  {m.lessons.map((l) => (
                    <li key={l.slug}>
                      <Link href={`/dp-physics/${m.slug}/${l.slug}`} className="flex flex-wrap items-center gap-3 rounded-[var(--radius-panel)] p-3" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border)' }}>
                        <span className="w-14 text-xs font-black" style={{ color: 'var(--accent)' }}>{l.code}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-extrabold" style={{ color: 'var(--text)' }}>{l.title}</span>
                          <span className="block text-xs" style={{ color: 'var(--text-muted)' }}>{l.blurb}</span>
                        </span>
                        <LessonChips l={l} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
