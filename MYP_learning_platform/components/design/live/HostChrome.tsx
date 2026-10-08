'use client'

// Host-screen chrome for the Live engine: a slim top ribbon (session code, join QR,
// class, new session), a docked side drawer for class progress, and floating
// Previous/Next buttons that stay blurred until the pointer approaches them.
//
// Everything is tinted from the activity's own theme (accent/from/via), so each
// activity gets its own colour identity, and surfaces use theme tokens
// (--surface, --text, --border, --radius-*) so they follow the theme switcher.
// Stage content below keeps the engine's sticker-card look; this chrome is the
// modern "glass" layer around it.

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import Link from 'next/link'
import type { LiveActivityDefinition } from '@/data/design/live/types'
import type { LivePlayerRow } from '@/lib/design-live/types'
import type { LiveFocus } from '@/lib/design-live/hooks'
import ClassPicker from './ClassPicker'
import { Avatar, FocusDot, QRCode, cardStyle } from './ui'
import { defaultStart, navOf } from './SelfPaced'

export const RIBBON_H = 56
export const DRAWER_W = 340
export const RAIL_W = 52

const glass = (tint?: string): CSSProperties => ({
  background: `color-mix(in srgb, var(--surface) 78%, ${tint ?? 'transparent'})`,
  backdropFilter: 'blur(16px) saturate(1.4)',
  WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
})

function useMedia(query: string, initial = false) {
  const [m, setM] = useState(initial)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setM(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [query])
  return m
}
export const useIsWide = () => useMedia('(min-width: 1100px)')

export function useStoredBool(key: string, fallback: boolean): [boolean, (v: boolean) => void, boolean] {
  const [v, setV] = useState(fallback)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    try {
      const s = localStorage.getItem(key)
      if (s === '1') setV(true)
      else if (s === '0') setV(false)
    } catch { /* ignore */ }
    setLoaded(true)
  }, [key])
  const set = (n: boolean) => {
    setV(n)
    try { localStorage.setItem(key, n ? '1' : '0') } catch { /* ignore */ }
  }
  return [v, set, loaded]
}

// -------------------------------------------------------------- join card
export function JoinCard({ code, joinUrl, qrSize = 170 }: { code: string | null; joinUrl: string; qrSize?: number }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
      {joinUrl && <QRCode url={joinUrl} size={qrSize} />}
      <div style={{ display: 'grid', gap: 4 }}>
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.4, color: 'var(--text-muted)' }}>SESSION CODE</div>
        <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: '0.08em', lineHeight: 1 }}>{code}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', wordBreak: 'break-all', maxWidth: 260 }}>{joinUrl}</div>
      </div>
    </div>
  )
}

// ------------------------------------------------------------------ ribbon
const ribbonBtn = (active?: boolean): CSSProperties => ({
  cursor: 'pointer', fontSize: 12, fontWeight: 800, letterSpacing: 0.4, color: '#fff', minHeight: 36, padding: '0 12px',
  borderRadius: 'var(--radius-control)', border: '1px solid rgba(255,255,255,0.25)', display: 'inline-flex', alignItems: 'center', gap: 6,
  background: active ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.1)', textDecoration: 'none', whiteSpace: 'nowrap',
})

export function HostRibbon({
  activity, code, joinUrl, hostId, classId, onNewSession, stageLabel, progress, leading,
}: {
  activity: LiveActivityDefinition
  code: string | null
  joinUrl: string
  hostId: string | null | undefined
  classId: string | null
  onNewSession: () => void
  stageLabel?: string
  progress?: string
  leading?: ReactNode
}) {
  const [open, setOpen] = useState<null | 'join' | 'class'>(null)
  const t = activity.theme
  return (
    <div
      style={{
        position: 'sticky', top: 0, zIndex: 30, height: RIBBON_H, display: 'flex', alignItems: 'center', gap: 12, padding: '0 16px',
        background: `linear-gradient(90deg, color-mix(in srgb, ${t.from} 82%, transparent), color-mix(in srgb, ${t.via} 82%, transparent))`,
        backdropFilter: 'blur(16px) saturate(1.4)', WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
        borderBottom: `2px solid ${t.accent}`, color: '#fff',
      }}
    >
      {leading}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0, flex: '1 1 auto' }}>
        <span style={{ fontSize: 22 }} aria-hidden>{activity.icon}</span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: 15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{activity.title}</div>
          {stageLabel && (
            <div style={{ fontSize: 11.5, fontWeight: 600, opacity: 0.8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {stageLabel}{progress ? ` · ${progress}` : ''}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => setOpen(open === 'join' ? null : 'join')}
        aria-expanded={open === 'join'}
        title="Show join QR code"
        style={{
          cursor: 'pointer', display: 'inline-flex', alignItems: 'baseline', gap: 8, padding: '4px 14px', minHeight: 36, color: '#fff',
          borderRadius: 999, border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.12)',
        }}
      >
        <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1.4, opacity: 0.8 }}>CODE</span>
        <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '0.1em' }}>{code}</span>
        <span aria-hidden style={{ fontSize: 14 }}>▦</span>
      </button>

      <div style={{ display: 'flex', gap: 8 }}>
        {hostId && code && (
          <button title="Assign to class" aria-label="Assign to class" aria-expanded={open === 'class'} style={ribbonBtn(open === 'class')} onClick={() => setOpen(open === 'class' ? null : 'class')}>🎓 <span className="host-ribbon-label">Class</span></button>
        )}
        <button title="Start a new session" aria-label="Start a new session" style={ribbonBtn()} onClick={onNewSession}>↻ <span className="host-ribbon-label">New</span></button>
        <Link href="/design/live/history" title="My history" aria-label="My history" style={ribbonBtn()}>📜 <span className="host-ribbon-label">History</span></Link>
      </div>

      {open && (
        <>
          <div onClick={() => setOpen(null)} style={{ position: 'fixed', inset: 0, zIndex: -1 }} />
          <div style={{ ...cardStyle(t.accent), position: 'absolute', top: RIBBON_H + 8, right: 16, zIndex: 31, maxWidth: 'min(94vw, 460px)' }}>
            {open === 'join' && <JoinCard code={code} joinUrl={joinUrl} />}
            {open === 'class' && hostId && code && <ClassPicker code={code} hostId={hostId} classId={classId} accent={t.accent} />}
          </div>
        </>
      )}
      <style>{`@media (max-width: 720px) { .host-ribbon-label { display: none } }`}</style>
    </div>
  )
}

// ------------------------------------------------------------------ drawer
/** Whether the drawer is docked (reserves space) and how much room it takes. */
export function useProgressDrawer() {
  const wide = useIsWide()
  const [stored, setStored, loaded] = useStoredBool('live:host:progressDrawer', true)
  // Narrow screens have no room to dock it: it starts collapsed and, when opened, floats over the page.
  const [narrowOpen, setNarrowOpen] = useState(false)
  const open = wide ? loaded && stored : narrowOpen
  return { open, setOpen: wide ? setStored : setNarrowOpen, wide, reserve: wide ? (open ? DRAWER_W + 16 : RAIL_W + 8) : 0, docked: wide && open }
}

export function ProgressDrawer({
  activity, players, now, open, onToggle, viewIdx, onPickStage,
}: {
  activity: LiveActivityDefinition
  players: LivePlayerRow[]
  now: number
  open: boolean
  onToggle: (v: boolean) => void
  viewIdx: number
  onPickStage: (i: number) => void
}) {
  const n = activity.stages.length
  const t = activity.theme
  const rows = players.map((p) => ({ p, nav: navOf(p, activity) })).sort((a, b) => b.nav.max - a.nav.max || a.p.name.localeCompare(b.p.name))
  const perStage = activity.stages.map((_, i) => rows.filter((r) => r.nav.stage === i).length)
  const peak = Math.max(1, ...perStage)
  const finished = rows.filter((r) => r.nav.max >= n - 1).length

  if (!open) {
    return (
      <button
        onClick={() => onToggle(true)}
        aria-label="Open class progress"
        title="Open class progress"
        style={{
          ...glass(), position: 'fixed', top: RIBBON_H + 12, right: 12, zIndex: 25, width: RAIL_W, padding: '12px 0', cursor: 'pointer',
          borderRadius: 'var(--radius-card)', display: 'grid', justifyItems: 'center', gap: 6, boxShadow: 'var(--shadow-card)', borderTop: `3px solid ${t.accent}`,
        }}
      >
        <span aria-hidden style={{ fontSize: 18 }}>👥</span>
        <span style={{ fontWeight: 800, fontSize: 14 }}>{rows.length}</span>
        <span aria-hidden style={{ fontSize: 11, color: 'var(--text-muted)' }}>◀</span>
      </button>
    )
  }

  return (
    <aside
      aria-label="Class progress"
      style={{
        ...glass(), position: 'fixed', top: RIBBON_H + 12, right: 12, bottom: 12, width: `min(${DRAWER_W}px, calc(100vw - 24px))`, zIndex: 25, display: 'flex', flexDirection: 'column',
        borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card-hover)', borderTop: `3px solid ${t.accent}`, overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, padding: '12px 14px 4px' }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1.4, color: 'var(--text-subtle)' }}>CLASS PROGRESS</div>
          <div style={{ fontWeight: 800, fontSize: 15 }}>{rows.length} here · {finished} finished</div>
        </div>
        <button onClick={() => onToggle(false)} aria-label="Collapse class progress" title="Collapse" style={{ cursor: 'pointer', minWidth: 36, minHeight: 36, borderRadius: 'var(--radius-control)', border: '1px solid var(--border-strong)', background: 'transparent', color: 'var(--text)' }}>▶</button>
      </div>

      {/* Activity-wise progress: one bar per stage, tap one to watch that stage's dashboard. */}
      <div style={{ padding: '6px 14px 10px' }}>
        <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 64 }} aria-label="Students per stage">
          {perStage.map((count, i) => (
            <button
              key={i}
              onClick={() => onPickStage(i)}
              title={`${activity.stages[i].label}: ${count} student${count === 1 ? '' : 's'}`}
              aria-label={`${activity.stages[i].label}: ${count} students. Watch this stage`}
              aria-current={i === viewIdx ? 'step' : undefined}
              style={{ flex: 1, minWidth: 0, display: 'grid', gap: 2, justifyItems: 'center', alignContent: 'end', background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text)' }}
            >
              <span style={{ fontSize: 10, fontWeight: 800, color: 'var(--text-muted)', minHeight: 12 }}>{count || ''}</span>
              <span style={{ width: '100%', height: 4 + (count / peak) * 34, background: count ? t.accent : 'var(--border)', borderRadius: 5, opacity: i === viewIdx ? 1 : 0.7, outline: i === viewIdx ? `2px solid ${t.accent}` : 'none', outlineOffset: 2, transition: 'height .4s' }} />
              <span aria-hidden style={{ fontSize: 12, opacity: i === viewIdx ? 1 : 0.6 }}>{activity.stages[i].icon}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ overflowY: 'auto', padding: '0 14px 14px', display: 'grid', gap: 7, alignContent: 'start', flex: 1 }}>
        {rows.length === 0 && <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Waiting for students…</div>}
        {rows.map(({ p, nav }) => (
          <div key={p.id} style={{ display: 'grid', gap: 3 }} title={`${activity.stages[nav.stage].label} · ${nav.stage + 1}/${n}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 700 }}>
              <Avatar seed={p.id} size={20} />
              <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</span>
              <FocusDot focus={p.data?.focus as LiveFocus} now={now} />
              <span style={{ fontSize: 11, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{activity.stages[nav.stage].icon} {nav.stage + 1}/{n}</span>
            </div>
            <span style={{ height: 6, background: 'var(--border)', borderRadius: 999, overflow: 'hidden' }}>
              <span style={{ display: 'block', height: '100%', width: `${((nav.max + 1) / n) * 100}%`, background: t.accent, transition: 'width .4s' }} />
            </span>
          </div>
        ))}
        <div style={{ fontSize: 11, color: 'var(--text-subtle)', marginTop: 4 }}>
          Dot: <span style={{ color: '#1FA98A', fontWeight: 800 }}>green</span> on this tab, <span style={{ color: '#D6425E', fontWeight: 800 }}>red</span> switched away (number = times). Students start at “{activity.stages[defaultStart(activity)].label}”.
        </div>
      </div>
    </aside>
  )
}

// ---------------------------------------------------------- floating nav
/** True while the pointer is within `radius` px of the element (always true on touch / keyboard focus). */
function useProximity(ref: React.RefObject<HTMLElement | null>, radius = 150) {
  const [near, setNear] = useState(false)
  const touch = useMedia('(hover: none)')
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const dx = Math.max(r.left - e.clientX, 0, e.clientX - r.right)
      const dy = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom)
      setNear(Math.hypot(dx, dy) < radius)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [ref, radius])
  return near || touch
}

export function FloatingNav({
  activity, viewIdx, advanceLabel, onPrev, onNext, rightInset,
}: {
  activity: LiveActivityDefinition
  viewIdx: number
  advanceLabel: string
  onPrev: () => void
  onNext: () => void
  rightInset: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [focused, setFocused] = useState(false)
  const near = useProximity(ref)
  const show = near || focused
  const t = activity.theme
  const pill: CSSProperties = {
    cursor: 'pointer', minHeight: 44, padding: '0 20px', borderRadius: 999, fontWeight: 800, fontSize: 14, border: '1px solid var(--border-strong)',
    background: 'transparent', color: 'var(--text)',
  }
  return (
    <div
      ref={ref}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...glass(), position: 'fixed', bottom: 18, left: `calc(50% - ${rightInset / 2}px)`, transform: `translateX(-50%) scale(${show ? 1 : 0.96})`, zIndex: 28,
        display: 'flex', alignItems: 'center', gap: 10, padding: 8, borderRadius: 999, boxShadow: 'var(--shadow-card-hover)',
        opacity: show ? 1 : 0.35, filter: show ? 'none' : 'blur(3px)', transition: 'opacity .25s, filter .25s, transform .25s', maxWidth: '94vw',
      }}
    >
      {viewIdx > 0 && (
        <button onClick={onPrev} style={pill} title={`Back to ${activity.stages[viewIdx - 1].label}`} aria-label={`Previous: ${activity.stages[viewIdx - 1].label}`}>
          ← <span className="host-nav-label">Previous</span>
        </button>
      )}
      <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--text-muted)', padding: '0 4px', whiteSpace: 'nowrap' }}>{viewIdx + 1} / {activity.stages.length}</span>
      <button onClick={onNext} style={{ ...pill, border: 'none', color: '#fff', background: `linear-gradient(135deg, ${t.accent}, ${t.via})` }}>
        {advanceLabel}
      </button>
      <style>{`@media (max-width: 560px) { .host-nav-label { display: none } }`}</style>
    </div>
  )
}

// ------------------------------------------------- student leaderboard drawer
/** Whether the student's leaderboard is docked (reserves space) and how much room it takes. */
export function useLeaderboardDrawer() {
  const wide = useIsWide()
  const [stored, setStored, loaded] = useStoredBool('live:join:leaderboardDrawer', true)
  // Narrow screens: start collapsed (an open drawer would cover answer buttons) and float when opened.
  const [narrowOpen, setNarrowOpen] = useState(false)
  const open = wide ? loaded && stored : narrowOpen
  return { open, setOpen: wide ? setStored : setNarrowOpen, reserve: wide ? (open ? DRAWER_W - 40 + 16 : RAIL_W + 8) : 0 }
}

// Student-facing class leaderboard. Shows ONLY name, position, points and badges —
// never `data` (answers, drafts, chat).
export function LeaderboardDrawer({
  activity, players, me, open, onToggle,
}: {
  activity: LiveActivityDefinition
  players: LivePlayerRow[]
  me: LivePlayerRow
  open: boolean
  onToggle: (v: boolean) => void
}) {
  const n = activity.stages.length
  const t = activity.theme
  const all = players.some((p) => p.id === me.id) ? players : [...players, me]
  const rows = all
    .map((p) => ({ p, nav: navOf(p, activity) }))
    .sort((a, b) => b.p.points - a.p.points || b.nav.max - a.nav.max || a.p.name.localeCompare(b.p.name))
  const myRank = rows.findIndex((r) => r.p.id === me.id) + 1
  const medal = ['🥇', '🥈', '🥉']
  const W = DRAWER_W - 40

  if (!open) {
    return (
      <button
        onClick={() => onToggle(true)}
        aria-label="Open class leaderboard"
        title="Open class leaderboard"
        style={{
          ...glass(), position: 'fixed', top: 12, right: 12, zIndex: 25, width: RAIL_W, padding: '12px 0', cursor: 'pointer',
          borderRadius: 'var(--radius-card)', display: 'grid', justifyItems: 'center', gap: 6, boxShadow: 'var(--shadow-card)', borderTop: `3px solid ${t.accent}`,
        }}
      >
        <span aria-hidden style={{ fontSize: 18 }}>🏆</span>
        <span style={{ fontWeight: 800, fontSize: 14 }}>#{myRank}</span>
        <span aria-hidden style={{ fontSize: 11, color: 'var(--text-muted)' }}>◀</span>
      </button>
    )
  }

  return (
    <aside
      aria-label="Class leaderboard"
      style={{
        ...glass(), position: 'fixed', top: 12, right: 12, bottom: 12, width: `min(${W}px, calc(100vw - 24px))`, zIndex: 25, display: 'flex', flexDirection: 'column',
        borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card-hover)', borderTop: `3px solid ${t.accent}`, overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, padding: '12px 14px 8px' }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1.4, color: 'var(--text-subtle)' }}>CLASS LEADERBOARD</div>
          <div style={{ fontWeight: 800, fontSize: 15 }}>You&apos;re #{myRank} of {rows.length}</div>
        </div>
        <button onClick={() => onToggle(false)} aria-label="Collapse leaderboard" title="Collapse" style={{ cursor: 'pointer', minWidth: 36, minHeight: 36, borderRadius: 'var(--radius-control)', border: '1px solid var(--border-strong)', background: 'transparent', color: 'var(--text)' }}>▶</button>
      </div>
      <div style={{ overflowY: 'auto', padding: '0 10px 12px', display: 'grid', gap: 4, alignContent: 'start', flex: 1 }}>
        {rows.map(({ p, nav }, i) => {
          const you = p.id === me.id
          return (
            <div
              key={p.id}
              style={{
                display: 'grid', gap: 3, padding: '6px 8px', borderRadius: 'var(--radius-control)',
                background: you ? 'var(--accent-soft)' : 'transparent', border: you ? `1.5px solid ${t.accent}` : '1.5px solid transparent',
              }}
              title={`${activity.stages[nav.stage].label} · ${nav.stage + 1}/${n}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 700 }}>
                <span style={{ width: 22, textAlign: 'center', fontWeight: 800, color: 'var(--text-muted)' }}>{medal[i] ?? i + 1}</span>
                <Avatar seed={p.id} size={22} />
                <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}{you ? ' (you)' : ''}</span>
                <span style={{ whiteSpace: 'nowrap', fontWeight: 800 }}>⭐ {p.points}{p.badges?.length ? ` · 🏅${p.badges.length}` : ''}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 28 }}>
                <span style={{ flex: 1, height: 6, background: 'var(--border)', borderRadius: 999, overflow: 'hidden' }}>
                  <span style={{ display: 'block', height: '100%', width: `${((nav.max + 1) / n) * 100}%`, background: t.accent, transition: 'width .4s' }} />
                </span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{activity.stages[nav.stage].icon} {nav.stage + 1}/{n}</span>
              </div>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
