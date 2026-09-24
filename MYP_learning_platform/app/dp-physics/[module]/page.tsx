import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MODULES, getModule } from '@/data/learn/physics'
import { SITE_URL } from '@/lib/site'
import GuideTopBar from '@/components/guides/GuideTopBar'
import LearnSidebar from '@/components/learn/LearnSidebar'
import { LessonChips } from '@/components/learn/LessonMeta'

export const dynamicParams = false
export const generateStaticParams = () => MODULES.map((m) => ({ module: m.slug }))

export function generateMetadata({ params }: { params: { module: string } }): Metadata {
  const m = getModule(params.module)
  if (!m) return {}
  return {
    title: `${m.code} ${m.title} · IB DP Physics`,
    description: m.intro,
    alternates: { canonical: `/dp-physics/${m.slug}` },
    openGraph: { title: `${m.title} · IB DP Physics · CritABCD`, description: m.intro, url: `${SITE_URL}/dp-physics/${m.slug}` },
  }
}

export default function ModulePage({ params }: { params: { module: string } }) {
  const m = getModule(params.module)
  if (!m) notFound()
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <GuideTopBar label="DP Physics" />
      <main className="mx-auto w-full max-w-[1400px] px-4 py-6 md:px-10 md:py-8">
        <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="hidden lg:block"><div className="sticky top-20"><LearnSidebar modules={MODULES} activeModule={m.slug} /></div></aside>
          <div className="grid content-start gap-6">
            <header className="p-6 md:p-8" style={{ borderRadius: 'calc(var(--radius-card) + 8px)', background: 'var(--gradient-cta)', color: 'var(--text-on-accent)', boxShadow: 'var(--shadow-card-hover)' }}>
              <Link href="/dp-physics" className="text-xs font-black uppercase tracking-[0.3em] underline opacity-90">← All of DP Physics</Link>
              <div className="mt-3 text-xs font-black uppercase tracking-[0.35em] opacity-90">{m.theme} · {m.source}</div>
              <h1 className="mt-2 text-3xl font-extrabold md:text-5xl" style={{ letterSpacing: -1.5 }}>{m.code} {m.title}</h1>
              <p className="mt-3 max-w-2xl text-base opacity-95">{m.intro}</p>
            </header>
            <section className="chrome-card p-5 md:p-6">
              <h2 className="text-xl font-extrabold" style={{ color: 'var(--text)' }}>Lessons</h2>
              <ul className="mt-4 grid gap-2">
                {m.lessons.map((l) => (
                  <li key={l.slug}>
                    <Link href={`/dp-physics/${m.slug}/${l.slug}`} className="flex flex-wrap items-center gap-3 rounded-[var(--radius-panel)] p-3" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border)' }}>
                      <span className="w-14 text-xs font-black" style={{ color: 'var(--accent)' }}>{l.code}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-extrabold" style={{ color: 'var(--text)' }}>{l.title}</span>
                        <span className="block text-xs" style={{ color: 'var(--text-muted)' }}>{l.blurb} · {l.syllabus}</span>
                      </span>
                      <LessonChips l={l} />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
