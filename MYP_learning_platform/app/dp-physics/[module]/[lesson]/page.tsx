import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MODULES, getLesson, getModule, neighbours } from '@/data/learn/physics'
import { SITE_URL } from '@/lib/site'
import GuideTopBar from '@/components/guides/GuideTopBar'
import LearnSidebar from '@/components/learn/LearnSidebar'
import LessonBody from '@/components/learn/LessonBody'
import { LessonChips } from '@/components/learn/LessonMeta'
import IndexLink from '@/components/learn/IndexLink'

export const dynamicParams = false
export const generateStaticParams = () => MODULES.flatMap((m) => m.lessons.map((l) => ({ module: m.slug, lesson: l.slug })))

export function generateMetadata({ params }: { params: { module: string; lesson: string } }): Metadata {
  const m = getModule(params.module)
  const l = m && getLesson(m, params.lesson)
  if (!m || !l) return {}
  const description = `${l.blurb} Free interactive IB DP Physics lesson (${l.level}) with a simulation and self-check questions.`
  return {
    title: `${l.title} · IB DP Physics`,
    description,
    alternates: { canonical: `/dp-physics/${m.slug}/${l.slug}` },
    openGraph: { title: `${l.title} · IB DP Physics · CritABCD`, description, url: `${SITE_URL}/dp-physics/${m.slug}/${l.slug}` },
  }
}

export default function LessonPage({ params }: { params: { module: string; lesson: string } }) {
  const m = getModule(params.module)
  const l = m && getLesson(m, params.lesson)
  if (!m || !l) notFound()
  const { prev, next } = neighbours(m.slug, l.slug)
  const url = `${SITE_URL}/dp-physics/${m.slug}/${l.slug}`
  const LD = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LearningResource',
        name: l.title,
        description: l.blurb,
        url,
        inLanguage: 'en',
        educationalLevel: 'IB Diploma Programme',
        learningResourceType: 'interactive lesson',
        teaches: l.syllabus,
        timeRequired: `PT${l.minutes}M`,
        isAccessibleForFree: true,
        isPartOf: { '@type': 'Course', name: 'IB DP Physics: Interactive Lessons', url: `${SITE_URL}/dp-physics` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'DP Physics', item: `${SITE_URL}/dp-physics` },
          { '@type': 'ListItem', position: 2, name: m.title, item: `${SITE_URL}/dp-physics/${m.slug}` },
          { '@type': 'ListItem', position: 3, name: l.title, item: url },
        ],
      },
    ],
  }
  const headings: { id: string; text: string }[] = l.blocks.flatMap((b) =>
    b.t === 'h' ? [{ id: b.id, text: b.text }] : b.t === 'deck' ? b.slides.map((s) => ({ id: s.id, text: s.title })) : [],
  )
  const navLink = (x: typeof prev, dir: string) =>
    x ? (
      <Link href={`/dp-physics/${x.module.slug}/${x.lesson.slug}`} className="chrome-card flex-1 p-4 text-sm font-bold" style={{ color: 'var(--text)' }}>
        <span className="block text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: 'var(--text-subtle)' }}>{dir}</span>
        {x.lesson.code} {x.lesson.title}
      </Link>
    ) : (
      <span className="flex-1" />
    )

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <GuideTopBar label="DP Physics" />
      <main className="mx-auto w-full max-w-[1500px] px-4 py-6 md:px-10 md:py-8">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)_200px]">
          <aside className="hidden lg:block"><div className="sticky top-20"><LearnSidebar modules={MODULES} activeModule={m.slug} activeLesson={l.slug} /></div></aside>
          <article className="grid min-w-0 content-start gap-5">
            <header className="p-6 md:p-8" style={{ borderRadius: 'calc(var(--radius-card) + 8px)', background: 'var(--gradient-cta)', color: 'var(--text-on-accent)', boxShadow: 'var(--shadow-card-hover)' }}>
              <nav aria-label="Breadcrumb" className="text-xs font-bold opacity-90">
                <Link href="/dp-physics" className="underline">DP Physics</Link> / <Link href={`/dp-physics/${m.slug}`} className="underline">{m.title}</Link>
              </nav>
              <div className="mt-3 text-xs font-black uppercase tracking-[0.35em] opacity-90">{l.code} · {l.syllabus}</div>
              <h1 className="mt-2 text-3xl font-extrabold md:text-5xl" style={{ letterSpacing: -1.5 }}>{l.title}</h1>
              <p className="mt-2 max-w-2xl text-base opacity-95">{l.blurb}</p>
              <div className="mt-4"><LessonChips l={l} onHero /></div>
            </header>
            <LessonBody lessonKey={`${m.slug}/${l.slug}`} blocks={l.blocks} />
            <div className="flex flex-col gap-3 sm:flex-row">{navLink(prev, '← Previous')}{navLink(next, 'Next →')}</div>
          </article>
          <aside className="hidden xl:block">
            <nav aria-label="On this page" className="sticky top-20 text-sm">
              <div className="mb-2 text-xs font-black uppercase tracking-[0.25em]" style={{ color: 'var(--text-subtle)' }}>Index</div>
              <ul className="grid gap-1.5">
                {headings.map((h) => <li key={h.id}><IndexLink id={h.id} text={h.text} /></li>)}
              </ul>
            </nav>
          </aside>
        </div>
      </main>
    </div>
  )
}
