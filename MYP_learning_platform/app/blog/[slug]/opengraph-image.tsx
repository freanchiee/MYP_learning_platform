import { ImageResponse } from 'next/og'
import { getPost } from '@/data/blog'

// A generated 1200x630 share card per post (og:image, and the Article's
// `image` in JSON-LD), so shared links and rich results don't fall back to
// the generic site logo.
//
// Deliberately NOT pre-rendered at build (no generateStaticParams): it renders
// on first request and is then cached by the CDN (ImageResponse sends an
// immutable Cache-Control). That way an image-generation problem can never
// fail the site build — the worst case is one missing share card.
export const alt = 'CritABCD MYP Blog'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  const title = post?.title ?? 'MYP Blog'
  const tags = (post?.tags ?? []).slice(0, 3)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'linear-gradient(135deg, #0a0f2e 0%, #1f3674 60%, #274e68 100%)',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 30, letterSpacing: 4, color: '#7aadcf', fontWeight: 700 }}>
          <span>CRITABCD</span>
          <span style={{ opacity: 0.5 }}>/</span>
          <span>MYP BLOG</span>
        </div>

        <div style={{ display: 'flex', fontSize: title.length > 70 ? 54 : 64, fontWeight: 800, lineHeight: 1.12, letterSpacing: -1 }}>{title}</div>

        <div style={{ display: 'flex', gap: 14 }}>
          {tags.map((t) => (
            <div
              key={t}
              style={{ display: 'flex', fontSize: 24, fontWeight: 700, padding: '8px 22px', borderRadius: 999, border: '2px solid rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.9)' }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
