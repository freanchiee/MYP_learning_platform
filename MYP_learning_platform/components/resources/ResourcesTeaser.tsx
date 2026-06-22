import Link from 'next/link'
import { RESOURCES } from '@/lib/resources'

const DIAMONDS = ['var(--logo-a)', 'var(--logo-b)', 'var(--logo-c)', 'var(--logo-d)']

/** Self-contained dark gradient panel that links into the /resources gate page.
 *  Used on both the public landing and the logged-in dashboard so the free
 *  resources stay reachable after login. */
export default function ResourcesTeaser({ className = '' }: { className?: string }) {
  return (
    <Link href="/resources" className={`group block ${className}`}>
      <div
        className="relative overflow-hidden rounded-3xl px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8 transition-transform duration-300 group-hover:-translate-y-1"
        style={{ background: 'linear-gradient(135deg, #0a0f2e 0%, #1f3674 55%, #274e68 100%)', boxShadow: '0 24px 60px rgba(31,54,116,0.3)' }}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5 shrink-0">
            {DIAMONDS.map((c, i) => (
              <span key={i} style={{ width: 15, height: 15, transform: 'rotate(45deg)', background: c, boxShadow: `0 0 14px ${c}` }} />
            ))}
          </div>
          <div>
            <div className="text-white font-black text-2xl md:text-3xl tracking-tight">Explore all {RESOURCES.length}</div>
            <div className="text-white/55 text-sm mt-0.5">Full-screen gates — preview each tool, no login</div>
          </div>
        </div>
        <span
          className="inline-flex items-center gap-2 self-start md:self-auto font-black text-sm tracking-[0.15em] px-7 py-4 rounded-full shrink-0 transition-transform group-hover:translate-x-1"
          style={{ background: '#adf1c4', color: '#0a0f2e' }}
        >
          EXPLORE RESOURCES →
        </span>
      </div>
    </Link>
  )
}
