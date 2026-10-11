'use client'

// "Share this page" for the free public pages: native share sheet where available, otherwise copy the link.
import { useState } from 'react'

export default function ShareLink({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)
  const share = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.share) { await navigator.share({ title, url }); return }
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch { /* dismissed or blocked */ }
  }
  return (
    <button onClick={share} className="rounded-xl px-5 py-3 text-sm font-bold" style={{ border: '1px solid var(--border-strong)', color: 'var(--text)' }}>
      {copied ? 'Link copied ✓' : '🔗 Share with a classmate'}
    </button>
  )
}
