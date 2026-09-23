'use client'

import { useState, type CSSProperties, type ReactNode } from 'react'
import type { LiveTheme } from '@/data/design/live/types'
import { avatarSvg } from '@/lib/design-live/avatar'
import { isDraftFresh, type LiveDraft } from '@/lib/design-live/hooks'

export const cardStyle = (accent?: string): CSSProperties => ({
  background: 'var(--surface)',
  border: '2.5px solid var(--text)',
  borderRadius: 14,
  boxShadow: `4px 4px 0 ${accent || 'var(--text)'}`,
  padding: 18,
  color: 'var(--text)',
})

export const btnStyle = (color: string, filled = false, big = false): CSSProperties => ({
  fontWeight: 700,
  fontSize: big ? 16 : 14,
  cursor: 'pointer',
  background: filled ? color : 'var(--surface)',
  color: filled ? '#fff' : 'var(--text)',
  border: '2.5px solid var(--text)',
  borderRadius: 10,
  padding: big ? '13px 22px' : '9px 15px',
  boxShadow: '3px 3px 0 var(--text)',
})

export const inputStyle: CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  border: '2px solid var(--border)',
  borderRadius: 8,
  padding: '10px 12px',
  fontSize: 14,
  background: 'var(--surface)',
  color: 'var(--text)',
}

export function pageBg(theme: LiveTheme): CSSProperties {
  return {
    minHeight: '100vh',
    padding: '24px 16px 60px',
    background: `linear-gradient(160deg, ${theme.from} 0%, ${theme.via} 55%, ${theme.to} 100%)`,
  }
}

export function ErrorBanner({ message, onClose }: { message: string | null; onClose: () => void }) {
  if (!message) return null
  return (
    <div
      style={{
        background: '#D6425E',
        color: '#fff',
        borderRadius: 10,
        padding: '10px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        fontSize: 13,
        fontWeight: 700,
      }}
    >
      <span>⚠ {message}</span>
      <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#fff', fontWeight: 800, cursor: 'pointer', fontSize: 15 }}>
        ✕
      </button>
    </div>
  )
}

export function QRCode({ url, size = 150 }: { url: string; size?: number }) {
  if (!url) return null
  const src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt="QR code to join" src={src} width={size} height={size} style={{ border: '2.5px solid var(--text)', borderRadius: 10 }} />
  )
}

/** A deterministic per-player avatar (see lib/design-live/avatar.ts) — same
 *  player, same face, everywhere: roster, dashboards, leaderboards. */
export function Avatar({ seed, size = 40 }: { seed: string; size?: number }) {
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid var(--text)',
        background: 'var(--surface-2)',
        flexShrink: 0,
      }}
      dangerouslySetInnerHTML={{ __html: avatarSvg(seed) }}
    />
  )
}

/** A compact colour-coded progress bar for a dashboard table cell — e.g. a
 *  worksheet section's completeness %, or a quiz score out of a total. */
export function ProgressCell({ pct, label }: { pct: number; label?: string }) {
  const color = pct >= 70 ? '#1FA98A' : pct >= 30 ? '#FFCF3F' : pct > 0 ? '#D6425E' : 'var(--border-strong)'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, minWidth: 46 }}>
      <div style={{ width: '100%', height: 6, borderRadius: 999, background: 'var(--border)', overflow: 'hidden' }}>
        <div style={{ width: `${Math.max(0, Math.min(100, pct))}%`, height: '100%', background: color, transition: 'width .4s ease' }} />
      </div>
      <span style={{ fontSize: 10, fontWeight: 800, color }}>{label ?? `${pct}%`}</span>
    </div>
  )
}

/** Wraps a player's name/avatar with a hover preview of what they're
 *  currently typing (see lib/design-live/hooks.ts useLiveDraftReporter) — a
 *  minified window onto their in-progress answer, for the host dashboard.
 *  `now` should come from useNowTick so the "typing…" cue expires on its
 *  own. Renders `children` unchanged if there's no live draft to show. */
export function PlayerPreview({ name, draft, now, children }: { name: string; draft?: LiveDraft | null; now: number; children: ReactNode }) {
  const [hovered, setHovered] = useState(false)
  const fresh = isDraftFresh(draft, now)
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        {children}
        {fresh && <span style={{ color: '#1FA98A', fontSize: 10, fontWeight: 800, animation: 'live-pulse 1.2s ease-in-out infinite' }}>✍️</span>}
      </span>
      {hovered && draft?.text && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 20,
            marginTop: 6,
            minWidth: 180,
            maxWidth: 260,
            background: 'var(--surface)',
            color: 'var(--text)',
            border: '2px solid var(--text)',
            borderRadius: 10,
            boxShadow: '3px 3px 0 var(--text)',
            padding: '8px 10px',
            fontSize: 11.5,
          }}
        >
          <div style={{ fontWeight: 800, marginBottom: 3, color: fresh ? '#1FA98A' : 'var(--text-muted)' }}>{fresh ? `✍️ ${name} is typing…` : `Last seen typing`}</div>
          <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{draft.text}</div>
        </div>
      )}
    </span>
  )
}

export function BadgeRow({ badges }: { badges: string[] }) {
  if (!badges?.length) return null
  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      {badges.map((b) => (
        <span key={b} style={{ background: '#FFF7DA', border: '1.5px solid #FFCF3F', borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>
          🏅 {b}
        </span>
      ))}
    </div>
  )
}

export function MCQOptions({
  order,
  disabled,
  selectedIdx,
  onPick,
  correctIdx,
  revealed,
}: {
  order: { text: string; i: number }[]
  disabled: boolean
  selectedIdx: number | null | undefined
  onPick: (idx: number) => void
  correctIdx?: number
  revealed?: boolean
}) {
  return (
    <div style={{ display: 'grid', gap: 8 }}>
      {order.map((opt) => {
        const isSelected = selectedIdx === opt.i
        const isCorrect = revealed && opt.i === correctIdx
        const wrongPick = revealed && isSelected && opt.i !== correctIdx
        return (
          <button
            key={opt.i}
            disabled={disabled}
            onClick={() => onPick(opt.i)}
            style={{
              ...btnStyle(isCorrect ? '#1FA98A' : wrongPick ? '#D6425E' : 'var(--accent)', isSelected || !!isCorrect),
              textAlign: 'left',
              fontSize: 13.5,
              padding: '12px 14px',
              width: '100%',
            }}
          >
            {opt.text}
            {isCorrect ? ' ✓' : wrongPick ? ' ✕' : ''}
          </button>
        )
      })}
    </div>
  )
}
