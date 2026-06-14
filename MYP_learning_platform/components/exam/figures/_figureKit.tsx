'use client'

/**
 * _figureKit — shared chrome + controls for interactive exam artefacts.
 *
 * Every interactive figure ("artifact") in components/exam/figures/ is a small,
 * data-driven `'use client'` React component. They all share this kit so they look
 * and behave consistently and stay legible on every theme (including the dark Glass
 * theme — the card forces a light figure surface).
 *
 * Design rules (match TimelineScrubber / InteractiveChart):
 *  - White figure surface, 1px slate border, var(--radius-card) corners.
 *  - Title + small "interactive" mono badge top-right; optional source.
 *  - Hint line at the bottom telling the student what they can do.
 *  - Controls (play, slider, segmented, reset) use the PALETTE + slate neutrals.
 *  - No `window` access at module scope; rAF lives in useRaf (effect-guarded) so it
 *    is SSR-safe under the Next 14 App Router.
 *
 * These are STIMULUS artefacts: they replace the IB figure but must never change the
 * assessed construct. Keep every number/label from the source paper exact.
 */

import { useEffect, useRef, useCallback } from 'react'

export const PALETTE = ['#0b7285', '#e8590c', '#9c36b5', '#2f9e44', '#1971c2', '#c2255c', '#f08c00', '#495057']
export const colorAt = (i: number) => PALETTE[((i % PALETTE.length) + PALETTE.length) % PALETTE.length]

export const INK = '#0f172a'
export const SUB = '#64748b'
export const LINE = '#e2e8f0'
export const SURFACE = '#f8fafc'

/** White card wrapper used by every artefact. */
export function FigureCard({
  title,
  source,
  hint,
  children,
  maxWidth,
}: {
  title?: string
  source?: string
  hint?: string
  children: React.ReactNode
  maxWidth?: number
}) {
  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{
        padding: 16,
        background: '#ffffff',
        border: `1px solid ${LINE}`,
        borderRadius: 'var(--radius-card, 14px)',
        maxWidth: maxWidth ?? undefined,
      }}
    >
      {(title || source) && (
        <div className="mb-2 flex items-baseline justify-between gap-3 flex-wrap">
          {title && (
            <h3 className="text-base font-extrabold tracking-tight" style={{ color: INK }}>
              {title}
            </h3>
          )}
          <span className="text-[11px]" style={{ color: SUB }}>
            {source ? <>Source: {source} · </> : null}
            <span className="font-mono">interactive</span>
          </span>
        </div>
      )}
      {children}
      {hint && (
        <p className="mt-2 text-[11px] leading-relaxed" style={{ color: SUB }}>
          {hint}
        </p>
      )}
    </div>
  )
}

/** Play / pause toggle button. */
export function PlayButton({
  playing,
  onToggle,
  color = PALETTE[0],
  labelPlay = 'Play',
  labelPause = 'Pause',
}: {
  playing: boolean
  onToggle: () => void
  color?: string
  labelPlay?: string
  labelPause?: string
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all hover:brightness-110"
      style={{ background: color, color: '#ffffff' }}
      aria-pressed={playing}
    >
      <span aria-hidden style={{ fontSize: 11 }}>{playing ? '❚❚' : '▶'}</span>
      {playing ? labelPause : labelPlay}
    </button>
  )
}

/** Secondary (outline) button — reset, step, etc. */
export function GhostButton({
  onClick,
  children,
  color = PALETTE[0],
}: {
  onClick: () => void
  children: React.ReactNode
  color?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all hover:brightness-105"
      style={{ background: '#ffffff', color, border: `1.5px solid ${color}` }}
    >
      {children}
    </button>
  )
}

/** Labelled range slider. */
export function Slider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  unit,
  color = PALETTE[0],
  format,
}: {
  label?: string
  min: number
  max: number
  step?: number
  value: number
  onChange: (v: number) => void
  unit?: string
  color?: string
  format?: (v: number) => string
}) {
  const shown = format ? format(value) : `${value}${unit ? ' ' + unit : ''}`
  return (
    <label className="flex flex-col gap-1 text-xs font-semibold" style={{ color: INK }}>
      {label && (
        <span className="flex items-center justify-between gap-2">
          <span>{label}</span>
          <span className="rounded px-1.5 py-0.5 font-mono text-[11px]" style={{ background: SURFACE, color }}>
            {shown}
          </span>
        </span>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ accentColor: color, width: '100%' }}
      />
    </label>
  )
}

/** Segmented control / option picker (also used for select-the-answer tasks). */
export function Segmented<T extends string>({
  options,
  value,
  onChange,
  color = PALETTE[0],
}: {
  options: { value: T; label: string }[]
  value: T | null
  onChange: (v: T) => void
  color?: string
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => {
        const on = o.value === value
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className="rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all"
            style={{
              background: on ? color : '#ffffff',
              color: on ? '#ffffff' : '#475569',
              border: `1.5px solid ${color}`,
              opacity: on ? 1 : 0.8,
            }}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

/** Big readout pill for a live value. */
export function Readout({
  label,
  value,
  unit,
  color = PALETTE[0],
}: {
  label?: string
  value: string | number
  unit?: string
  color?: string
}) {
  return (
    <div
      className="inline-flex flex-col rounded-lg px-3 py-1.5"
      style={{ background: SURFACE, border: `1px solid ${LINE}`, borderLeft: `4px solid ${color}` }}
    >
      {label && <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: SUB }}>{label}</span>}
      <span className="font-mono text-lg font-bold leading-tight" style={{ color: INK }}>
        {value}
        {unit ? <span className="ml-1 text-xs font-semibold" style={{ color: SUB }}>{unit}</span> : null}
      </span>
    </div>
  )
}

/**
 * requestAnimationFrame loop. `cb(dtSeconds, tSeconds)` is called each frame while
 * `running` is true. SSR-safe: only touches rAF inside the effect.
 */
export function useRaf(cb: (dt: number, t: number) => void, running: boolean) {
  const cbRef = useRef(cb)
  cbRef.current = cb
  useEffect(() => {
    if (!running) return
    let raf = 0
    let last = performance.now()
    const start = last
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000) // clamp big gaps (tab switch)
      last = now
      cbRef.current(dt, (now - start) / 1000)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [running])
}

/** Map a pointer clientX/Y onto SVG viewBox coords. */
export function useSvgPoint(svgRef: React.RefObject<SVGSVGElement>, vbW: number, vbH: number) {
  return useCallback(
    (clientX: number, clientY: number): [number, number] => {
      const svg = svgRef.current
      if (!svg) return [0, 0]
      const r = svg.getBoundingClientRect()
      return [((clientX - r.left) / r.width) * vbW, ((clientY - r.top) / r.height) * vbH]
    },
    [svgRef, vbW, vbH],
  )
}

/** Simple controlled toggle row of layer checkboxes. */
export function LayerToggles({
  layers,
  active,
  onToggle,
}: {
  layers: { id: string; label: string; color?: string }[]
  active: Record<string, boolean>
  onToggle: (id: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {layers.map((l, i) => {
        const on = active[l.id]
        const c = l.color ?? colorAt(i)
        return (
          <button
            key={l.id}
            type="button"
            onClick={() => onToggle(l.id)}
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all"
            style={{ background: on ? c : '#ffffff', color: on ? '#ffffff' : '#475569', border: `1.5px solid ${c}`, opacity: on ? 1 : 0.7 }}
          >
            <span aria-hidden style={{ width: 8, height: 8, borderRadius: 8, background: on ? '#ffffff' : c, display: 'inline-block' }} />
            {l.label}
          </button>
        )
      })}
    </div>
  )
}

/** Feedback chip for self-check tasks (drag/select). */
export function FeedbackChip({ state }: { state: 'idle' | 'correct' | 'wrong' }) {
  if (state === 'idle') return null
  const ok = state === 'correct'
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold"
      style={{ background: ok ? '#e6f4ea' : '#fdecea', color: ok ? '#2f9e44' : '#c2255c' }}
    >
      {ok ? '✓ correct' : '✗ try again'}
    </span>
  )
}
