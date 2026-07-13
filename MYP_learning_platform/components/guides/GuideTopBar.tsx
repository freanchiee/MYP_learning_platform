import Link from 'next/link'
import Wordmark from '@/components/brand/Wordmark'

// Public, theme-aware top bar for the free /guides and /blog pages (no platform chrome).
export default function GuideTopBar({ label = 'MYP Guides' }: { label?: string }) {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-8"
      style={{
        height: 56,
        background: 'var(--nav-bg)',
        borderBottom: '1px solid var(--nav-border)',
        backdropFilter: 'var(--blur-chrome, blur(12px))',
      }}
    >
      <Link href="/" className="flex items-baseline gap-2">
        <Wordmark className="text-lg font-black tracking-tight" style={{ color: 'var(--nav-fg)' }} />
        <span className="hidden text-[11px] font-bold uppercase tracking-[0.2em] sm:block" style={{ color: 'var(--text-subtle)' }}>
          {label}
        </span>
      </Link>
      <nav className="flex items-center gap-1">
        {[
          { href: '/', label: 'Home' },
          { href: '/guides', label: 'Guides' },
          { href: '/blog', label: 'Blog' },
          { href: '/resources', label: 'Resources' },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-lg px-3.5 py-1.5 text-sm font-semibold"
            style={{ color: 'var(--nav-fg)' }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
