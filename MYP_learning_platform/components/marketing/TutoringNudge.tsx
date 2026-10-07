'use client'

// A small, dismissible, honest nudge toward /tutoring — only on the public
// content pages (not inside the logged-in app, which already links to
// /pricing and /tutoring from its own nav; not on /exam or /join, where
// interrupting someone mid-task would be actively harmful). Shows once per
// visit after a short delay, and stays dismissed in this browser for two
// weeks once closed — never pesters the same person repeatedly.

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const SHOW_ON_PREFIXES = ['/guides', '/blog', '/resources', '/gameducation', '/dp-physics', '/updates']
const DISMISS_KEY = 'myp_tutoring_nudge_dismissed_at'
const DISMISS_MS = 14 * 24 * 60 * 60 * 1000
const SHOW_DELAY_MS = 9000

export default function TutoringNudge() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const onMarketingPage = pathname === '/' || SHOW_ON_PREFIXES.some((p) => pathname.startsWith(p))

  useEffect(() => {
    if (!onMarketingPage) return
    try {
      const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0)
      if (dismissedAt && Date.now() - dismissedAt < DISMISS_MS) return
    } catch {
      /* localStorage unavailable — just show it, no harm in a repeat visit */
    }
    const t = setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => clearTimeout(t)
  }, [onMarketingPage])

  const dismiss = () => {
    setVisible(false)
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()))
    } catch {
      /* ignore */
    }
  }

  if (!visible) return null

  return (
    <div style={{ position: 'fixed', right: 16, bottom: 16, zIndex: 60, maxWidth: 300 }} role="complementary" aria-label="Tutoring offer">
      <div style={{ background: 'var(--surface-elevated)', border: '1.5px solid var(--border-strong)', borderRadius: 16, padding: '14px 16px', boxShadow: '0 8px 24px rgba(0,0,0,0.18)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)' }}>Stuck on a topic?</span>
          <button onClick={dismiss} aria-label="Dismiss" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-subtle)', fontSize: 14, lineHeight: 1, padding: 2 }}>
            ✕
          </button>
        </div>
        <p style={{ marginTop: 4, fontSize: 12.5, color: 'var(--text-muted)' }}>
          Get 1:1 online help for IB MYP &amp; DP — tell us what you need, no obligation.
        </p>
        <Link href="/tutoring" onClick={dismiss} style={{ marginTop: 8, display: 'inline-block', fontSize: 12, fontWeight: 800, color: 'var(--accent)' }}>
          Get help →
        </Link>
      </div>
    </div>
  )
}
