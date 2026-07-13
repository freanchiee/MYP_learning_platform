import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { POSTS, getPost } from '@/data/blog'
import { SITE_URL } from '@/lib/site'
import GuideTopBar from '@/components/guides/GuideTopBar'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug)
  if (!p) return {}
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: 'article',
      title: `${p.title} · CritABCD`,
      description: p.description,
      url: `${SITE_URL}/blog/${p.slug}`,
      publishedTime: p.datePublished,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug)
  if (!p) notFound()

  const url = `${SITE_URL}/blog/${p.slug}`
  const JSON_LD = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: p.title,
        description: p.description,
        datePublished: p.datePublished,
        dateModified: p.datePublished,
        author: { '@id': `${SITE_URL}/#org` },
        publisher: { '@id': `${SITE_URL}/#org` },
        mainEntityOfPage: url,
        inLanguage: 'en',
      },
      ...(p.faq
        ? [
            {
              '@type': 'FAQPage',
              '@id': `${url}#faq`,
              mainEntity: p.faq.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            },
          ]
        : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'MYP Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 2, name: p.title, item: url },
        ],
      },
    ],
  }

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <GuideTopBar label="MYP Blog" />

      <main className="mx-auto max-w-3xl px-5 py-12 md:px-8">
        <div className="text-sm" style={{ color: 'var(--text-subtle)' }}>
          <Link href="/blog" className="font-bold" style={{ color: 'var(--accent)' }}>MYP Blog</Link>
          <span className="mx-2">/</span>
          <span>{p.tags[0]}</span>
        </div>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl" style={{ color: 'var(--text)' }}>
          {p.title}
        </h1>
        <div className="mt-3 text-sm font-semibold" style={{ color: 'var(--text-subtle)' }}>
          {new Date(p.datePublished).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} · {p.readMinutes} min read
        </div>

        <p className="mt-6 text-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>{p.intro}</p>

        {p.sections.map((s, i) => (
          <section key={i} className="mt-8">
            {s.heading && (
              <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text)' }}>{s.heading}</h2>
            )}
            {s.body?.map((para, j) => (
              <p key={j} className="mt-3 text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>{para}</p>
            ))}
            {s.bullets && (
              <ul className="mt-3 space-y-2">
                {s.bullets.map((b, k) => (
                  <li key={k} className="flex gap-2.5 text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--accent)' }}>•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* FAQ */}
        {p.faq && (
          <section className="mt-12">
            <h2 className="text-2xl font-extrabold" style={{ color: 'var(--text)' }}>Frequently asked questions</h2>
            <div className="mt-4 space-y-4">
              {p.faq.map((f, i) => (
                <div key={i} className="rounded-2xl p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
                  <div className="text-base font-bold" style={{ color: 'var(--text)' }}>{f.q}</div>
                  <p className="mt-2 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related */}
        {p.related && (
          <section className="mt-12 border-t pt-8" style={{ borderColor: 'var(--border)' }}>
            <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>KEEP READING</div>
            <div className="mt-3 flex flex-wrap gap-3">
              {p.related.map((r) => (
                <Link key={r.href} href={r.href} className="rounded-xl px-4 py-2.5 text-sm font-bold" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>
                  {r.label} →
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
