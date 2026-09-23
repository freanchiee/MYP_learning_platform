'use client'

import type { CSSProperties } from 'react'
import type { LiveTheme } from '@/data/design/live/types'

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
