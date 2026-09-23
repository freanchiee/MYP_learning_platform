'use client'

import { createContext, useContext, useState, type CSSProperties, type ReactNode } from 'react'
import type { LiveTheme } from '@/data/design/live/types'
import { avatarSvg } from '@/lib/design-live/avatar'
import { isDraftFresh, type LiveDraft } from '@/lib/design-live/hooks'
import { createClient } from '@/lib/supabase/client'

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

/** Channel for the "peek at a student's live draft" hover preview. A nested
 *  position:absolute popup doesn't work here — every usage site
 *  (McqDashboard, WorksheetHost, the submissions list) sits inside a
 *  container with `overflow-x: auto`, and CSS forces `overflow-y` to clip
 *  too in that case, silently cutting the popup off. Instead every
 *  `<PlayerPreview>` reports into this context, and ONE floating panel
 *  (`<PlayerPreviewPanel>`) renders at the top level of the host screen,
 *  outside any scroll container, guaranteed unclipped. */
type PreviewEntry = { name: string; draft: LiveDraft; fresh: boolean } | null
const PlayerPreviewContext = createContext<((entry: PreviewEntry) => void) | null>(null)

export function PlayerPreviewProvider({ children }: { children: ReactNode }) {
  const [preview, setPreview] = useState<PreviewEntry>(null)
  return (
    <PlayerPreviewContext.Provider value={setPreview}>
      {children}
      <PlayerPreviewPanel entry={preview} />
    </PlayerPreviewContext.Provider>
  )
}

function PlayerPreviewPanel({ entry }: { entry: PreviewEntry }) {
  if (!entry) return null
  return (
    <div
      style={{
        position: 'fixed',
        right: 16,
        bottom: 16,
        zIndex: 50,
        minWidth: 220,
        maxWidth: 320,
        background: 'var(--surface)',
        color: 'var(--text)',
        border: '2.5px solid var(--text)',
        borderRadius: 12,
        boxShadow: '4px 4px 0 var(--text)',
        padding: '10px 14px',
        fontSize: 12,
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 4, color: entry.fresh ? '#1FA98A' : 'var(--text-muted)' }}>
        {entry.fresh ? `✍️ ${entry.name} is typing…` : `Last seen typing — ${entry.name}`}
      </div>
      <div style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{entry.draft.text}</div>
    </div>
  )
}

/** A progress cell that also streams a compact, continuously-updating
 *  glimpse of the student's live draft for THIS exact section — a snippet
 *  cross-fades in above the bar whenever a fresh matching draft arrives
 *  (see LiveDraft.sectionKey / isDraftFresh) and fades back out on its own,
 *  so the host sees a running ticker of who's writing what without having
 *  to hover anything. The fade cycle runs faster the closer the student is
 *  to done — the near-finished moment is the one worth watching closest.
 *  Hovering still opens the full <PlayerPreviewPanel> for the bigger read,
 *  via the same channel <PlayerPreview> uses. Must be rendered under a
 *  <PlayerPreviewProvider>. */
export function ProgressStream({
  pct,
  draft,
  sectionKey,
  now,
  name,
}: {
  pct: number
  draft?: LiveDraft | null
  sectionKey: string
  now: number
  name: string
}) {
  const setPreview = useContext(PlayerPreviewContext)
  const matches = draft?.sectionKey === sectionKey
  const fresh = matches && isDraftFresh(draft, now)
  const snippet = matches ? draft?.text?.trim().slice(-42) : ''
  const cycleMs = Math.max(1400, 3200 - pct * 18)

  return (
    <span
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 2, minWidth: 60 }}
      onMouseEnter={() => matches && draft?.text && setPreview?.({ name, draft: draft!, fresh })}
      onMouseLeave={() => matches && setPreview?.(null)}
    >
      <ProgressCell pct={pct} />
      <span style={{ position: 'relative', height: 12, width: '100%', overflow: 'hidden' }}>
        {fresh && snippet && (
          <span
            key={snippet}
            style={{
              position: 'absolute',
              inset: 0,
              textAlign: 'center',
              fontSize: 9,
              fontStyle: 'italic',
              color: 'var(--text-muted)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              animation: `live-ticker ${cycleMs}ms ease-in-out`,
            }}
          >
            “{snippet}”
          </span>
        )}
      </span>
    </span>
  )
}

/** Wraps a player's name/avatar with a hover preview of what they're
 *  currently typing (see lib/design-live/hooks.ts useLiveDraftReporter) — a
 *  minified window onto their in-progress answer, for the host dashboard.
 *  `now` should come from useNowTick so the "typing…" cue expires on its
 *  own. Must be rendered under a <PlayerPreviewProvider>. Renders
 *  `children` unchanged if there's no live draft to show. */
export function PlayerPreview({ name, draft, now, children }: { name: string; draft?: LiveDraft | null; now: number; children: ReactNode }) {
  const setPreview = useContext(PlayerPreviewContext)
  const fresh = isDraftFresh(draft, now)
  const canPreview = !!draft?.text
  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
      onMouseEnter={() => canPreview && setPreview?.({ name, draft: draft!, fresh })}
      onMouseLeave={() => canPreview && setPreview?.(null)}
    >
      {children}
      {fresh && <span style={{ color: '#1FA98A', fontSize: 10, fontWeight: 800, animation: 'live-pulse 1.2s ease-in-out infinite' }}>✍️</span>}
    </span>
  )
}

/** Which players currently have an unread student-initiated chat message —
 *  computed by LiveHost (it owns the live_events subscription) and handed
 *  down via context so <ChatButton> can show a dot without every
 *  intermediate dashboard component threading the set through as a prop. */
export const UnreadChatContext = createContext<Set<string>>(new Set())

/** The 💬 button used on every host dashboard row — now unread-aware: a
 *  small red dot appears while this player has a message the host hasn't
 *  opened their chat panel for yet (see UnreadChatContext). */
export function ChatButton({ playerId, onClick, title }: { playerId: string; onClick: () => void; title: string }) {
  const unreadIds = useContext(UnreadChatContext)
  const unread = unreadIds.has(playerId)
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      <button onClick={onClick} title={title} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 11, padding: 0, lineHeight: 1 }}>
        💬
      </button>
      {unread && (
        <span
          aria-hidden
          style={{ position: 'absolute', top: -3, right: -3, width: 7, height: 7, borderRadius: '50%', background: '#D6425E', border: '1px solid var(--surface)' }}
        />
      )}
    </span>
  )
}

/** Channel for the "quick-appreciate a student" picker — same clipping
 *  problem and same fix as PlayerPreviewContext above: one floating panel
 *  at the top level instead of a popup nested in an overflow-x:auto table
 *  cell. Sends a live_events row (type: 'reaction'), which the student's
 *  <CelebrationOverlay> picks up and turns into a confetti burst. */
type ReactTarget = { sessionCode: string; playerId: string; playerName: string } | null
const QuickReactContext = createContext<((t: ReactTarget) => void) | null>(null)

const QUICK_EMOJI = ['👍', '🔥', '🌟', '💡', '❤️', '✅']
const QUICK_MESSAGES = ['Nice work!', 'Great start!', 'Add more detail here', 'Keep going — almost there!']

export function QuickReactProvider({ children }: { children: ReactNode }) {
  const [target, setTarget] = useState<ReactTarget>(null)
  return (
    <QuickReactContext.Provider value={setTarget}>
      {children}
      <QuickReactPanel target={target} onClose={() => setTarget(null)} />
    </QuickReactContext.Provider>
  )
}

function QuickReactPanel({ target, onClose }: { target: ReactTarget; onClose: () => void }) {
  const [sentFlash, setSentFlash] = useState<string | null>(null)
  if (!target) return null

  const send = async (payload: { emoji?: string; text?: string }) => {
    setSentFlash(payload.emoji || payload.text || '✓')
    const sb = createClient()
    await sb.from('live_events').insert({ session_code: target.sessionCode, player_id: target.playerId, type: 'reaction', payload: { from: 'host', ...payload } })
    setTimeout(() => {
      setSentFlash(null)
      onClose()
    }, 900)
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: 16,
        bottom: 16,
        zIndex: 55,
        minWidth: 200,
        maxWidth: 260,
        background: 'var(--surface)',
        color: 'var(--text)',
        border: '2.5px solid var(--text)',
        borderRadius: 12,
        boxShadow: '4px 4px 0 var(--text)',
        padding: '10px 14px',
        fontSize: 12,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontWeight: 800 }}>🎉 Appreciate {target.playerName}</span>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 13, color: 'var(--text-muted)' }}>
          ✕
        </button>
      </div>
      {sentFlash ? (
        <div style={{ textAlign: 'center', fontWeight: 700, color: '#1FA98A', padding: '6px 0' }}>Sent {sentFlash} ✓</div>
      ) : (
        <>
          <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
            {QUICK_EMOJI.map((e) => (
              <button
                key={e}
                onClick={() => send({ emoji: e })}
                style={{ fontSize: 18, background: 'var(--surface-2)', border: '1.5px solid var(--border)', borderRadius: 8, padding: '4px 7px', cursor: 'pointer', lineHeight: 1 }}
              >
                {e}
              </button>
            ))}
          </div>
          <div style={{ display: 'grid', gap: 5 }}>
            {QUICK_MESSAGES.map((m) => (
              <button key={m} onClick={() => send({ text: m })} style={{ ...btnStyle('var(--surface)'), fontSize: 11.5, padding: '6px 9px', textAlign: 'left' }}>
                {m}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/** Opens the quick-reaction picker for one player — drop next to <ChatButton>
 *  on any host dashboard row. Must be rendered under a <QuickReactProvider>. */
export function QuickReactButton({ sessionCode, playerId, playerName }: { sessionCode: string; playerId: string; playerName: string }) {
  const setTarget = useContext(QuickReactContext)
  return (
    <button
      onClick={() => setTarget?.({ sessionCode, playerId, playerName })}
      title={`Appreciate ${playerName}`}
      style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 11, padding: 0, lineHeight: 1 }}
    >
      🎉
    </button>
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
