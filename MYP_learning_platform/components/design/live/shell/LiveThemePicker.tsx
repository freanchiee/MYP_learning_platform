'use client'

// "Look" button + menu for the live student workspace. Choice is remembered on this device (see useLiveTheme).

import { useEffect, useRef, useState } from 'react'
import { LIVE_THEMES, type LiveThemeId } from '@/lib/design-live/liveTheme'
import { btnStyle } from '../ui'

export default function LiveThemePicker({ theme, onTheme }: { theme: LiveThemeId; onTheme: (t: LiveThemeId) => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return undefined
    const away = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false) }
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', away)
    document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('mousedown', away); document.removeEventListener('keydown', esc) }
  }, [open])
  const current = LIVE_THEMES.find((t) => t.id === theme) ?? LIVE_THEMES[0]

  return (
    <div ref={ref} className="cs-theme" style={{ position: 'relative' }}>
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-haspopup="true" title={`Look: ${current.label}. Change how this page looks`} aria-label={`Change the look of this page. Now: ${current.label}`} style={{ ...btnStyle('var(--text-muted)'), padding: '8px 11px', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <span aria-hidden>🎨</span><span className="cs-hide-sm">Look</span>
      </button>
      {open && (
        <div role="menu" aria-label="Choose a look" className="cs-theme-menu" style={{ position: 'absolute', right: 0, top: 'calc(100% + 8px)', width: 'min(320px, 88vw)', zIndex: 60, background: 'var(--surface)', color: 'var(--text)', border: '2.5px solid var(--text)', borderRadius: 14, boxShadow: '4px 4px 0 var(--text)', padding: 8, display: 'grid', gap: 4 }}>
          {LIVE_THEMES.map((t) => {
            const on = t.id === theme
            return (
              <button key={t.id} role="menuitemradio" aria-checked={on} onClick={() => { onTheme(t.id); setOpen(false) }}
                style={{ display: 'grid', gridTemplateColumns: '44px 1fr auto', alignItems: 'center', gap: 10, textAlign: 'left', minHeight: 52, padding: '6px 10px', cursor: 'pointer', borderRadius: 10, color: 'var(--text)', background: on ? 'var(--accent-soft)' : 'transparent', border: on ? '2px solid var(--text)' : '2px solid transparent', boxShadow: 'none', font: 'inherit' }}>
                <span aria-hidden style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', height: 28, borderRadius: 6, overflow: 'hidden', border: '1.5px solid #111', background: t.paper }}>
                  {t.swatch.map((c) => <i key={c} style={{ background: c, margin: '10px 1px 2px', borderRadius: 2 }} />)}
                </span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: 'block', fontWeight: 800, fontSize: 14 }}>{t.label}</span>
                  <span style={{ display: 'block', fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.25 }}>{t.blurb}</span>
                </span>
                <span aria-hidden style={{ fontWeight: 900 }}>{on ? '✓' : ''}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
