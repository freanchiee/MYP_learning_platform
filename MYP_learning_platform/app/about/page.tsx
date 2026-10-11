import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL, SITE_FAQ, SOCIAL_PROFILES, BRAND_ALIASES } from '@/lib/site'
import GuideTopBar from '@/components/guides/GuideTopBar'

export const metadata: Metadata = {
  title: 'About CritABCD',
  description: 'CritABCD is an IB MYP learning site: free guides, live classes, past papers and practice, marked against the A–D criteria. Find out what it is and who it is for.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About CritABCD', description: 'An IB MYP learning site built around the A–D assessment criteria.', url: `${SITE_URL}/about` },
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${SITE_URL}/about#page`,
      url: `${SITE_URL}/about`,
      name: 'About CritABCD',
      inLanguage: 'en',
      mainEntity: { '@id': `${SITE_URL}/#org` },
    },
    // Repeats the sitewide organisation entity with its profile links so this page alone is self-describing.
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#org`,
      name: 'CritABCD',
      alternateName: BRAND_ALIASES,
      url: SITE_URL,
      ...(SOCIAL_PROFILES.length ? { sameAs: SOCIAL_PROFILES.map((p) => p.url) } : {}),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
      ],
    },
  ],
}

const panel = { background: 'var(--surface-elevated)', border: '1px solid var(--border)' } as const
const Label = ({ children }: { children: React.ReactNode }) => <h2 className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>{children}</h2>

const FREE = [
  { href: '/guides', title: 'Subject guides', text: 'Aims, the A–D criteria and how each MYP subject is graded.' },
  { href: '/sample-questions', title: 'Sample questions', text: 'Original practice questions with worked mark schemes.' },
  { href: '/blog', title: 'Blog', text: 'Short explainers on key MYP science and design topics.' },
  { href: '/resources', title: 'Resources', text: 'Interactive labs and games that make ideas stick.' },
]

const PLATFORM = [
  { title: 'Past papers and practice', text: 'Timed MYP papers and topic practice, marked against criteria A to D with feedback tied to each one rather than a single percentage.' },
  { title: 'Live classes', text: 'Teachers host a live session students join with a code. Activities can run in step or at each student’s own pace.' },
  { title: 'Design cycle projects', text: 'A guided Design module and live activities that follow the design cycle from inquiring through to evaluating.' },
  { title: 'Class tools for teachers', text: 'Set a class, assign work, see how each student is progressing, and download a student’s work as a PDF organised by criterion.' },
]

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <GuideTopBar label="About" />
      <main className="mx-auto w-full max-w-[900px] px-5 py-12 md:px-10">
        <div className="text-sm font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>ABOUT</div>
        <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-5xl" style={{ color: 'var(--text)' }}>About CritABCD</h1>
        <p className="mt-5 text-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          CritABCD (also written <em>Crit ABCD</em>, and found at critabcd.com) is a learning site for the IB Middle Years Programme. It is
          built around the four assessment criteria, A, B, C and D, that every MYP subject is marked against. The name comes from there: <strong>Crit</strong>eria <strong>ABCD</strong>.
        </p>

        <section className="mt-8 rounded-3xl p-6 md:p-7" style={panel}>
          <Label>WHO IT IS FOR</Label>
          <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text)' }}>Students</strong> who want to know what a good answer looks like and practise it, and{' '}
            <strong style={{ color: 'var(--text)' }}>teachers</strong> who want tools to run a class, see where each student is, and give feedback against the criteria.
            It covers Physics, Chemistry, Biology, Individuals and Societies (Humanities), Geography and Design.
          </p>
        </section>

        <section className="mt-5">
          <Label>FREE TO USE, NO SIGN-UP</Label>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {FREE.map((f) => (
              <Link key={f.href} href={f.href} className="rounded-2xl p-5 transition-all hover:-translate-y-0.5" style={panel}>
                <div className="font-extrabold" style={{ color: 'var(--text)' }}>{f.title} →</div>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-5">
          <Label>ON THE PLATFORM</Label>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {PLATFORM.map((f) => (
              <div key={f.title} className="rounded-2xl p-5" style={panel}>
                <div className="font-extrabold" style={{ color: 'var(--text)' }}>{f.title}</div>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-3xl p-6 md:p-7" style={panel}>
          <Label>A NOTE ON THE IB</Label>
          <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            CritABCD is an independent learning site. It is not the International Baccalaureate and does not host the IB’s own subject guides;
            our guides, questions and examples are written in our own words, and each guide links to the official IB source. Your teacher marks against the official IB level descriptors.
          </p>
        </section>

        <section className="mt-5">
          <Label>COMMON QUESTIONS</Label>
          <div className="mt-3 grid gap-3">
            {SITE_FAQ.slice(0, 4).map((f, i) => (
              <details key={i} className="group rounded-2xl p-5" style={panel}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-bold" style={{ color: 'var(--text)' }}>
                  {f.q}
                  <span className="shrink-0 transition-transform group-open:rotate-180" style={{ color: 'var(--accent)' }}>⌄</span>
                </summary>
                <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-3xl p-6 md:p-7" style={panel}>
          <Label>GET IN TOUCH</Label>
          <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Want updates on new guides and features, or help from a tutor? Use the{' '}
            <Link href="/updates" className="font-bold" style={{ color: 'var(--accent)' }}>updates sign-up</Link> or the{' '}
            <Link href="/tutoring" className="font-bold" style={{ color: 'var(--accent)' }}>tutoring page</Link>.
          </p>
          {SOCIAL_PROFILES.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="self-center text-sm font-bold" style={{ color: 'var(--text-subtle)' }}>Find us on</span>
              {SOCIAL_PROFILES.map((p) => (
                <a key={p.url} href={p.url} target="_blank" rel="me noopener noreferrer" className="rounded-full px-4 py-2 text-sm font-bold" style={{ border: '1px solid var(--border-strong)', color: 'var(--text)' }}>
                  {p.label}
                </a>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
