'use client'

// A quiet "pass it on" prompt at the foot of the student screen. Students are the
// best advertisement a live class has: one tap shares the site (tagged, so it shows
// up in analytics) with a classmate, a sibling's teacher or a parent.

import { useState } from 'react'
import { shareUrl } from '@/lib/site'
import { btnStyle } from './ui'

export default function ShareFooter({ accent }: { accent: string }) {
  const [copied, setCopied] = useState(false)
  const url = shareUrl('live-student-share')

  const share = async () => {
    const data = { title: 'CritABCD', text: 'Free IB MYP guides, practice and live classes.', url }
    try {
      if (typeof navigator !== 'undefined' && navigator.share) { await navigator.share(data); return }
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch { /* share sheet dismissed or clipboard blocked: nothing to do */ }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap', padding: '10px 0 2px', color: 'var(--text-muted)', fontSize: 12.5 }}>
      <span>Enjoying CritABCD? Pass it on to a classmate or teacher.</span>
      <button onClick={share} style={{ ...btnStyle(accent), fontSize: 12, padding: '5px 12px' }}>
        {copied ? 'Link copied ✓' : '🔗 Share'}
      </button>
    </div>
  )
}
