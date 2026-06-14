'use client'

import { useMemo, useRef, useState, useCallback, useEffect } from 'react'

/**
 * Reusable interactive timeline scrubber (I&S artefact).
 * A horizontal dated axis with a draggable / clickable scrubber: dragging snaps to the
 * nearest event, clicking a marker jumps to it, and the active event reveals its label +
 * detail in a readout card below. Events are always shown sorted by date.
 * Theme-aware chrome (CSS var tokens for surrounding text/source); own light backing
 * + figure-surface so it stays legible on the dark Glass theme. Marker colours are
 * either author-supplied (data, fixed) or cycled from a fixed palette.
 */
export interface TimelineEvent {
  date: string // e.g. '1947', 'Mar 1947', '1947-03-12' — used for sort + axis label
  label: string
  detail?: string
}
export interface TimelineScrubberData {
  title?: string
  source?: string
  events: TimelineEvent[]
}

const PALETTE = ['#0b7285', '#e8590c', '#9c36b5', '#2f9e44', '#1971c2', '#c2255c', '#f08c00', '#495057']

// SVG geometry
const W = 720
const H = 132
const PAD = { l: 40, r: 40 }
const AXIS_Y = 86
const TRACK_X0 = PAD.l
const TRACK_X1 = W - PAD.r
const TRACK_W = TRACK_X1 - TRACK_X0

/**
 * Parse a loose date string to a sortable numeric key (year, BCE negative).
 * Handles ISO, "Mar 1947", "1947", "1430s", "1040 BCE", and "(early|mid|late) Nth century".
 */
function dateKey(s: string): number {
  const lower = s.toLowerCase()
  const bce = /\bbce?\b|\bbc\b/.test(lower) ? -1 : 1

  // "(early|mid|late) Nth century"
  const cen = lower.match(/(\d+)\s*(?:st|nd|rd|th)?\s*century/)
  if (cen) {
    const n = +cen[1]
    let y = (n - 1) * 100 + 50
    if (/early/.test(lower)) y -= 30
    else if (/late/.test(lower)) y += 30
    return bce * y
  }

  // ISO date
  const iso = s.match(/^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?/)
  if (iso) {
    const y = +iso[1], m = iso[2] ? +iso[2] : 1, d = iso[3] ? +iso[3] : 1
    return y + (m - 1) / 12 + (d - 1) / 372
  }

  const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
  const mi = MONTHS.findIndex((mm) => lower.includes(mm))
  // first run of digits = the year (handles "1430s", "1040 BCE", "c. 1850")
  const ym = s.match(/(\d{1,4})/)
  const y = ym ? +ym[1] : 0
  return bce * y + (mi >= 0 ? mi / 12 : 0)
}

export default function TimelineScrubber({ data }: { data: TimelineScrubberData }) {
  const events = useMemo(
    () => data.events.map((e, i) => ({ ...e, _i: i })).sort((a, b) => dateKey(a.date) - dateKey(b.date)),
    [data.events],
  )
  const n = events.length

  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const svgRef = useRef<SVGSVGElement | null>(null)

  const color = (i: number) => PALETTE[i % PALETTE.length]

  // Evenly space markers along the track (rank order), so clusters stay readable.
  const markerX = useCallback((i: number) => (n <= 1 ? (TRACK_X0 + TRACK_X1) / 2 : TRACK_X0 + (TRACK_W * i) / (n - 1)), [n])

  // Map a clientX from a pointer event onto the nearest event index.
  const nearestFromClientX = useCallback(
    (clientX: number) => {
      const svg = svgRef.current
      if (!svg) return active
      const rect = svg.getBoundingClientRect()
      const sx = ((clientX - rect.left) / rect.width) * W // into viewBox space
      let best = 0
      let bestD = Infinity
      for (let i = 0; i < n; i++) {
        const d = Math.abs(markerX(i) - sx)
        if (d < bestD) { bestD = d; best = i }
      }
      return best
    },
    [active, markerX, n],
  )

  // Pointer drag handling (mouse + touch via Pointer Events).
  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    setDragging(true)
    setActive(nearestFromClientX(e.clientX))
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return
    setActive(nearestFromClientX(e.clientX))
  }
  const endDrag = () => setDragging(false)

  // Keyboard accessibility: arrows / home / end move the scrubber.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.min(n - 1, a + 1)) }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.max(0, a - 1)) }
    else if (e.key === 'Home') { e.preventDefault(); setActive(0) }
    else if (e.key === 'End') { e.preventDefault(); setActive(n - 1) }
  }

  // Stop dragging even if the pointer is released outside the SVG.
  useEffect(() => {
    if (!dragging) return
    const up = () => setDragging(false)
    window.addEventListener('pointerup', up)
    return () => window.removeEventListener('pointerup', up)
  }, [dragging])

  if (n === 0) {
    return (
      <div className="figure-surface w-full" style={{ padding: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-card)', color: '#64748b' }}>
        No timeline events.
      </div>
    )
  }

  const handleX = markerX(active)
  const filledTo = handleX
  const ev = events[active]

  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{ padding: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-card)' }}
    >
      <div className="mb-1 flex items-baseline justify-between gap-3 flex-wrap">
        {data.title && <h3 className="text-base font-extrabold tracking-tight" style={{ color: '#0f172a' }}>{data.title}</h3>}
        {data.source && <span className="text-[11px]" style={{ color: '#64748b' }}>Source: {data.source} · <span className="font-mono">interactive</span></span>}
      </div>

      <div className="relative select-none">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full"
          role="slider"
          aria-label={data.title ?? 'timeline'}
          aria-valmin={0}
          aria-valmax={n - 1}
          aria-valuenow={active}
          aria-valuetext={`${ev.date}: ${ev.label}`}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onKeyDown={onKeyDown}
          style={{ cursor: dragging ? 'grabbing' : 'pointer', touchAction: 'none', outline: 'none' }}
        >
          {/* base track */}
          <line x1={TRACK_X0} y1={AXIS_Y} x2={TRACK_X1} y2={AXIS_Y} stroke="#e2e8f0" strokeWidth={4} strokeLinecap="round" />
          {/* progress fill up to the active handle */}
          <line x1={TRACK_X0} y1={AXIS_Y} x2={filledTo} y2={AXIS_Y} stroke={color(active)} strokeWidth={4} strokeLinecap="round" />

          {/* event markers + date labels */}
          {events.map((e, i) => {
            const x = markerX(i)
            const isActive = i === active
            return (
              <g key={`${e._i}`} onClick={(ce) => { ce.stopPropagation(); setActive(i) }} style={{ cursor: 'pointer' }}>
                {/* generous transparent hit area */}
                <rect x={x - 16} y={AXIS_Y - 40} width={32} height={64} fill="transparent" />
                {/* tick from axis */}
                <line x1={x} y1={AXIS_Y - 11} x2={x} y2={AXIS_Y + 11} stroke={isActive ? color(i) : '#94a3b8'} strokeWidth={isActive ? 2 : 1} />
                {/* marker dot */}
                <circle
                  cx={x}
                  cy={AXIS_Y}
                  r={isActive ? 7.5 : 4.5}
                  fill={isActive ? color(i) : '#ffffff'}
                  stroke={color(i)}
                  strokeWidth={2}
                  style={{ transition: 'r 120ms ease' }}
                />
                {/* date label, alternating above/below to avoid overlap */}
                <text
                  x={x}
                  y={i % 2 === 0 ? AXIS_Y - 22 : AXIS_Y + 32}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={isActive ? 700 : 500}
                  fill={isActive ? '#0f172a' : '#64748b'}
                >
                  {e.date}
                </text>
              </g>
            )
          })}

          {/* draggable handle */}
          <g style={{ transition: dragging ? 'none' : 'transform 160ms cubic-bezier(.22,.61,.36,1)', transform: `translateX(${handleX - W / 2}px)`, transformBox: 'view-box' as any }}>
            <circle cx={W / 2} cy={AXIS_Y} r={12} fill="#ffffff" stroke={color(active)} strokeWidth={3} style={{ filter: 'drop-shadow(0 1px 2px rgba(15,23,42,0.25))' }} />
            <circle cx={W / 2} cy={AXIS_Y} r={4} fill={color(active)} />
          </g>
        </svg>
      </div>

      {/* event navigation chips */}
      <div className="mt-1 mb-2 flex flex-wrap gap-1.5">
        {events.map((e, i) => {
          const on = i === active
          return (
            <button
              key={`${e._i}`}
              type="button"
              onClick={() => setActive(i)}
              className="rounded-full px-2 py-1 text-[11px] font-semibold transition-all"
              style={{ background: on ? color(i) : '#ffffff', color: on ? '#ffffff' : '#475569', border: `1.5px solid ${color(i)}`, opacity: on ? 1 : 0.75 }}
            >
              {e.date}
            </button>
          )
        })}
      </div>

      {/* readout card for the active event */}
      <div
        className="rounded-lg px-3 py-2.5 text-sm"
        style={{ background: '#f8fafc', border: `1px solid #e2e8f0`, borderLeft: `4px solid ${color(active)}`, minHeight: 64, color: '#0f172a' }}
        aria-live="polite"
      >
        <div className="flex items-baseline gap-2">
          <span className="rounded px-1.5 py-0.5 text-[11px] font-bold" style={{ background: color(active), color: '#ffffff' }}>{ev.date}</span>
          <span className="font-bold leading-snug" style={{ color: '#0f172a' }}>{ev.label}</span>
        </div>
        {ev.detail && <p className="mt-1.5 leading-relaxed" style={{ color: '#475569' }}>{ev.detail}</p>}
      </div>

      <p className="mt-1.5 text-[11px]" style={{ color: '#64748b' }}>
        Drag the handle along the timeline, click a marker, or use the arrow keys to scrub between events.
      </p>
    </div>
  )
}
