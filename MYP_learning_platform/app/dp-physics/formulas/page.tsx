import type { Metadata } from 'next'
import Link from 'next/link'
import { MODULES } from '@/data/learn/physics'
import { SITE_URL } from '@/lib/site'
import GuideTopBar from '@/components/guides/GuideTopBar'
import { Sci } from '@/components/learn/visuals'

const TITLE = 'IB Physics Formula Sheet and Data Booklet Guide'
const DESCRIPTION =
  'A free IB DP Physics formula sheet that grows with the course: the equations from every CritABCD lesson, grouped by topic, with units, the constants we use and a link to the lesson that explains each one. A study companion to the official IB physics data booklet.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'IB physics formula sheet', 'IB physics data booklet', 'IB physics formula booklet', 'IB DP physics equations',
    'IB physics formulas SL HL', 'physics data booklet explained', 'IB physics constants', 'IB physics cheat sheet',
    'IB physics equations list', 'DP physics revision formulas',
  ],
  alternates: { canonical: '/dp-physics/formulas' },
  openGraph: { title: `${TITLE} · CritABCD`, description: DESCRIPTION, url: `${SITE_URL}/dp-physics/formulas`, type: 'article' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

// Physical constants as used in the lessons (same values as lib/learn/fields-model.ts).
const CONSTANTS: [string, string, string][] = [
  ['Speed of light in a vacuum', 'c', '3.00 × 10⁸ m s⁻¹'],
  ['Gravitational constant', 'G', '6.67 × 10⁻¹¹ N m² kg⁻²'],
  ['Coulomb constant', 'k = 1 / 4πε_{0}', '8.99 × 10⁹ N m² C⁻²'],
  ['Permeability of free space', 'μ_{0}', '4π × 10⁻⁷ T m A⁻¹'],
  ['Elementary charge', 'e', '1.60 × 10⁻¹⁹ C'],
  ['Gravitational field strength at the Earth’s surface', 'g', '9.81 N kg⁻¹ (m s⁻²)'],
  ['Mass of the Earth', 'M_{Earth}', '5.97 × 10²⁴ kg'],
  ['Radius of the Earth', 'R_{Earth}', '6.37 × 10⁶ m'],
]

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Is this the official IB physics data booklet?',
    a: 'No. The official IB Physics data booklet is published by the International Baccalaureate and is given to you in the exam. It is the IB’s copyright, so we do not host it. This page is our own formula sheet, built from the lessons on this site, and it is meant to sit beside the official booklet while you revise.',
  },
  {
    q: 'Where can I get the IB physics data booklet?',
    a: 'Your school or teacher has the current edition that matches your syllabus, and you receive a copy in the exam. Always revise from the edition for your own exam session, because the booklet changed with the 2025 first-assessment syllabus.',
  },
  {
    q: 'Do I need to memorise the formulas in the IB physics data booklet?',
    a: 'You do not need to memorise the equations that are printed in the booklet, but you must know what each symbol means, which units it uses and when it applies. The lessons here focus on exactly that: where a formula comes from, what each term means and a worked example with context.',
  },
  {
    q: 'Which topics does this formula sheet cover?',
    a: 'Every lesson published so far: the syllabus preface (units and conversions), kinematics and motion graphs, Newton’s laws and momentum, and Theme D fields (field strength, Newton’s law of gravitation, Coulomb’s law, magnetic fields, potential, orbits and escape speed). New lessons add their formulas here automatically.',
  },
]

const LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/dp-physics/formulas#page`,
      name: TITLE,
      description: DESCRIPTION,
      url: `${SITE_URL}/dp-physics/formulas`,
      inLanguage: 'en',
      isAccessibleForFree: true,
      about: { '@type': 'Thing', name: 'IB Diploma Programme Physics equations' },
      isPartOf: { '@type': 'Course', name: 'IB DP Physics: Interactive Lessons', url: `${SITE_URL}/dp-physics` },
      educationalLevel: 'IB Diploma Programme',
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'DP Physics', item: `${SITE_URL}/dp-physics` },
        { '@type': 'ListItem', position: 2, name: 'Formula sheet', item: `${SITE_URL}/dp-physics/formulas` },
      ],
    },
  ],
}

export default function FormulasPage() {
  const sections = MODULES.map((m) => ({
    m,
    lessons: m.lessons
      .map((l) => {
        const s = l.blocks.find((b) => b.t === 'summary')
        return { l, formulas: s && s.t === 'summary' ? s.formulas : [] }
      })
      .filter((x) => x.formulas.length > 0),
  })).filter((s) => s.lessons.length > 0)
  const total = sections.reduce((n, s) => n + s.lessons.reduce((k, x) => k + x.formulas.length, 0), 0)

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
      <GuideTopBar label="DP Physics" />
      <main className="mx-auto w-full max-w-[1100px] px-4 py-6 md:px-10 md:py-8">
        <header className="p-6 md:p-10" style={{ borderRadius: 'calc(var(--radius-card) + 8px)', background: 'var(--gradient-cta)', color: 'var(--text-on-accent)', boxShadow: 'var(--shadow-card-hover)' }}>
          <nav aria-label="Breadcrumb" className="text-xs font-bold opacity-90"><Link href="/dp-physics" className="underline">DP Physics</Link> / Formula sheet</nav>
          <div className="mt-3 text-xs font-black uppercase tracking-[0.4em] opacity-90">IB DP Physics · SL and HL · Free</div>
          <h1 className="mt-2 text-3xl font-extrabold md:text-5xl" style={{ letterSpacing: -1.5 }}>IB Physics formula sheet</h1>
          <p className="mt-3 max-w-2xl text-base opacity-95 md:text-lg">
            {total} equations from our DP Physics lessons, grouped by topic, each linked to the lesson that explains where it comes from and works an example. Use it next to the official IB physics data booklet.
          </p>
        </header>

        <p className="chrome-card mt-5 p-4 text-sm" style={{ color: 'var(--text-muted)' }}>
          <strong style={{ color: 'var(--text)' }}>About the official booklet.</strong> The IB Physics data booklet is published by the International Baccalaureate and is provided in the exam. It is the IB’s copyright, so we do not host it; ask your teacher for the edition that matches your syllabus. This page is our own, written from our lessons.
        </p>

        <nav aria-label="Jump to a topic" className="mt-5 flex flex-wrap gap-2">
          {sections.map((s) => (
            <a key={s.m.slug} href={`#${s.m.slug}`} className="rounded-full px-3 py-1.5 text-xs font-bold" style={{ border: '1px solid var(--border-strong)', color: 'var(--text)' }}>{s.m.code} {s.m.title}</a>
          ))}
          <a href="#constants" className="rounded-full px-3 py-1.5 text-xs font-bold" style={{ border: '1px solid var(--border-strong)', color: 'var(--text)' }}>Constants</a>
          <a href="#faq" className="rounded-full px-3 py-1.5 text-xs font-bold" style={{ border: '1px solid var(--border-strong)', color: 'var(--text)' }}>FAQ</a>
        </nav>

        <div className="mt-6 grid gap-6">
          {sections.map(({ m, lessons }) => (
            <section key={m.slug} id={m.slug} className="chrome-card p-5 md:p-6" style={{ scrollMarginTop: 80 }}>
              <div className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>{m.theme}</div>
              <h2 className="mt-1 text-2xl font-extrabold" style={{ color: 'var(--text)' }}>{m.code} {m.title}: formulas</h2>
              <div className="mt-4 grid gap-4">
                {lessons.map(({ l, formulas }) => (
                  <article key={l.slug} className="rounded-[var(--radius-panel)] p-4" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border)' }}>
                    <h3 className="text-base font-extrabold" style={{ color: 'var(--text)' }}>
                      <Link href={`/dp-physics/${m.slug}/${l.slug}`} style={{ color: 'var(--accent)' }}>{l.code} {l.title}</Link>
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>{l.syllabus}</p>
                    <ul className="mt-3 grid gap-1.5">
                      {formulas.map((f) => (
                        <li key={f} className="text-sm font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}><Sci text={f} /></li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section id="constants" className="chrome-card p-5 md:p-6" style={{ scrollMarginTop: 80 }}>
            <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text)' }}>Constants used in the lessons</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead><tr style={{ color: 'var(--text-subtle)' }}><th className="py-2 pr-3 font-bold">Quantity</th><th className="py-2 pr-3 font-bold">Symbol</th><th className="py-2 font-bold">Value</th></tr></thead>
                <tbody>
                  {CONSTANTS.map(([name, sym, val]) => (
                    <tr key={name} style={{ borderTop: '1px solid var(--divider)' }}>
                      <td className="py-2 pr-3" style={{ color: 'var(--text)' }}>{name}</td>
                      <td className="py-2 pr-3 font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}><Sci text={sym} /></td>
                      <td className="py-2" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs" style={{ color: 'var(--text-subtle)' }}>Values as used in the worked examples. In an exam, use the values printed in your official data booklet.</p>
          </section>

          <section id="faq" className="chrome-card p-5 md:p-6" style={{ scrollMarginTop: 80 }}>
            <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text)' }}>IB physics data booklet: common questions</h2>
            <div className="mt-3 grid gap-4">
              {FAQ.map((f) => (
                <div key={f.q}>
                  <h3 className="text-base font-extrabold" style={{ color: 'var(--text)' }}>{f.q}</h3>
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <p className="text-center text-sm" style={{ color: 'var(--text-muted)' }}>
            Ready to practise? <Link href="/dp-physics" className="font-bold underline" style={{ color: 'var(--accent)' }}>Open the interactive DP Physics lessons</Link>.
          </p>
        </div>
      </main>
    </div>
  )
}
