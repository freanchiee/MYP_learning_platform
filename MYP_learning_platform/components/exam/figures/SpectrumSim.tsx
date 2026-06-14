'use client'

/**
 * SpectrumSim — interactive electromagnetic / visible spectrum artefact.
 *
 * A horizontal band bar (e.g. Radio…Gamma, or IR…UVC) with energy/frequency
 * increasing one way. Three modes:
 *   - "scrub":   a draggable marker scrubs across the spectrum and names the
 *                current band + a sample wavelength/frequency readout.
 *   - "sources": toggle sources (Heat lamp / Light bulb / UV lamp / Sunlight)
 *                via LayerToggles and highlight which bands each one covers.
 *   - "label":   drag band names from a tray onto the correct dashed slots,
 *                with self-check feedback.
 *
 * Data-driven and SSR-safe: no window/RNG at module scope. The mode is inferred
 * from the data when not explicitly given, so partial render_data still renders.
 */

import { useMemo, useRef, useState, useCallback, useEffect } from 'react'
import {
  FigureCard,
  GhostButton,
  Slider,
  Segmented,
  Readout,
  useSvgPoint,
  LayerToggles,
  FeedbackChip,
  colorAt,
  INK,
  SUB,
  LINE,
  SURFACE,
} from './_figureKit'

/* ------------------------------------------------------------------ types */

export type SpectrumMode = 'scrub' | 'sources' | 'label'

export interface SpectrumSource {
  name: string
  /** Band names (or substrings) this source covers, matched loosely against bands. */
  covers?: string[]
}

export interface SpectrumGap {
  /** Human description of the slot, e.g. "between Microwave and Visible". */
  slot?: string
  /** The band that correctly fills the slot. */
  correct: string
}

export interface SpectrumSimData {
  title?: string
  source?: string
  /** Ordered band names, low energy → high energy (left → right) by default. */
  bands?: string[]
  /** Explicit mode; if omitted it is inferred from the other fields. */
  mode?: SpectrumMode
  /** Axis label, e.g. "frequency (low→high)" or "energy increases left → right". */
  axis?: string
  energyAxis?: string
  /** Sources mode: list of emitters and the bands they cover. */
  sources?: SpectrumSource[]
  /** Label mode: gaps to fill (each pinned to a band already in `bands`). */
  gaps?: SpectrumGap[]
  /** Label mode: bands that are pre-printed (not draggable). */
  fixedLabels?: string[]
  /** Label mode: the tray of draggable band names. */
  draggableTray?: string[]
  /** Scrub mode: which band to highlight as the answer (select-the-band). */
  target?: string
  /** Optional wavelength bounds for the scrub readout, in metres (or strings). */
  wavelengthRange?: [number | string, number | string]
  visibleRange?: [number | string, number | string]
}

/* --------------------------------------------------------------- geometry */

const W = 720
const H = 150
const PAD = { l: 24, r: 24, t: 40 }
const BAR_H = 46

/** Deterministic mulberry32 PRNG (SSR === CSR). Kept for any future stochastic dressing. */
function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Strip a wavelength annotation off a band name ("red 680nm" → "red"). */
function bandLabel(raw: string): string {
  return raw.replace(/~?\s*[\d.]+\s*nm\s*/gi, '').replace(/\s+\(.*\)$/, '').trim() || raw.trim()
}

/** Loose case-insensitive match so "visible" matches "Visible light" / "visible (ROYGBIV)". */
function bandMatches(band: string, key: string): boolean {
  const a = bandLabel(band).toLowerCase()
  const b = bandLabel(key).toLowerCase()
  return a === b || a.includes(b) || b.includes(a)
}

/** Approximate colour for a band so the bar reads like a real spectrum. */
function bandFill(raw: string, i: number, n: number): string {
  const l = bandLabel(raw).toLowerCase()
  const named: Record<string, string> = {
    red: '#e03131', orange: '#f76707', yellow: '#f2c200', green: '#2f9e44',
    blue: '#1971c2', indigo: '#3b3bb5', violet: '#7048e8',
    radio: '#495057', microwave: '#5c5470', 'infra-red': '#b34700', infrared: '#b34700',
    ir: '#b34700', visible: '#2f9e44', ultraviolet: '#7048e8', uv: '#7048e8',
    uva: '#7048e8', uvb: '#6741d9', uvc: '#5f3dc4', 'x-rays': '#1864ab', 'x-ray': '#1864ab',
    gamma: '#862e9c', 'gamma ray': '#862e9c', 'gamma rays': '#862e9c',
  }
  for (const key of Object.keys(named)) if (l === key || l.startsWith(key)) return named[key]
  return colorAt(i % n)
}

/* ------------------------------------------------------------- component */

export default function SpectrumSim({ data }: { data: SpectrumSimData }) {
  const bands = useMemo(() => (data.bands && data.bands.length ? data.bands : ['Radio', 'Microwave', 'IR', 'Visible', 'UV', 'X-rays', 'Gamma']), [data.bands])
  const n = bands.length

  // Infer the mode if not supplied.
  const mode: SpectrumMode = useMemo(() => {
    if (data.mode) return data.mode
    if (data.sources && data.sources.length) return 'sources'
    if ((data.gaps && data.gaps.length) || (data.draggableTray && data.draggableTray.length)) return 'label'
    return 'scrub'
  }, [data.mode, data.sources, data.gaps, data.draggableTray])

  const axisLabel = data.axis ?? data.energyAxis ?? 'energy increases left → right'

  const svgRef = useRef<SVGSVGElement | null>(null)
  const toPoint = useSvgPoint(svgRef, W, H)

  const barX0 = PAD.l
  const barX1 = W - PAD.r
  const barW = barX1 - barX0
  const segW = barW / n
  const segX = useCallback((i: number) => barX0 + segW * i, [segW])

  /* prng seeded from band content so any decoration is deterministic */
  const rnd = useMemo(() => mulberry32(bands.join('|').length * 2654435761), [bands])
  void rnd

  /* ------------------------------------------------------------- SCRUB */
  // marker position as a fraction 0..1 across the bar
  const [frac, setFrac] = useState(() => {
    if (data.target) {
      const ti = bands.findIndex((b) => bandMatches(b, data.target!))
      if (ti >= 0) return (ti + 0.5) / n
    }
    return 0.5
  })
  const [dragging, setDragging] = useState(false)
  const activeIdx = Math.min(n - 1, Math.max(0, Math.floor(frac * n)))

  const fmtBound = (v: number | string | undefined): string =>
    v === undefined ? '' : typeof v === 'string' ? v : `${v}`

  // sample wavelength readout: interpolate across wavelengthRange if numeric, else show fraction
  const wlText = useMemo(() => {
    const r = data.wavelengthRange
    if (r && typeof r[0] === 'number' && typeof r[1] === 'number') {
      // energy increases L→R means wavelength DECREASES L→R, so high frac = short wl
      const hi = r[0] as number
      const lo = r[1] as number
      const v = hi + (lo - hi) * frac
      return v.toExponential(1)
    }
    if (r) return `${fmtBound(r[0])} – ${fmtBound(r[1])}`
    return `${Math.round((1 - frac) * 100)}%`
  }, [data.wavelengthRange, frac])

  const updateFromClient = useCallback(
    (clientX: number) => {
      const [px] = toPoint(clientX, 0)
      setFrac(Math.min(1, Math.max(0, (px - barX0) / barW)))
    },
    [toPoint, barW, barX0],
  )
  const onPointerDown = (e: React.PointerEvent) => {
    if (mode !== 'scrub') return
    e.preventDefault()
    setDragging(true)
    updateFromClient(e.clientX)
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return
    updateFromClient(e.clientX)
  }
  useEffect(() => {
    if (!dragging) return
    const up = () => setDragging(false)
    window.addEventListener('pointerup', up)
    return () => window.removeEventListener('pointerup', up)
  }, [dragging])
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (mode !== 'scrub') return
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); setFrac((f) => Math.min(1, (Math.floor(f * n) + 1.5) / n)) }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); setFrac((f) => Math.max(0, (Math.floor(f * n) - 0.5) / n)) }
  }

  /* ------------------------------------------------------------ SOURCES */
  const sources = useMemo(() => data.sources ?? [], [data.sources])
  const [activeSrc, setActiveSrc] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {}
    sources.forEach((s, i) => { init[s.name] = i === 0 })
    return init
  })
  const coveredBands = useMemo(() => {
    const set = new Set<number>()
    sources.forEach((s) => {
      if (!activeSrc[s.name]) return
      ;(s.covers ?? []).forEach((c) => {
        bands.forEach((b, i) => { if (bandMatches(b, c)) set.add(i) })
      })
    })
    return set
  }, [sources, activeSrc, bands])

  /* -------------------------------------------------------------- LABEL */
  // map a gap to the band index it sits on (by `correct`)
  const gapSlots = useMemo(() => {
    const gaps = data.gaps ?? []
    if (gaps.length) {
      return gaps
        .map((g) => ({ correct: g.correct, idx: bands.findIndex((b) => bandMatches(b, g.correct)) }))
        .filter((g) => g.idx >= 0)
    }
    // fall back: every band not in fixedLabels is a slot to fill
    const fixed = new Set((data.fixedLabels ?? []).map((f) => bandLabel(f).toLowerCase()))
    return bands
      .map((b, idx) => ({ correct: b, idx }))
      .filter((g) => !fixed.has(bandLabel(g.correct).toLowerCase()))
  }, [data.gaps, data.fixedLabels, bands])

  const tray = useMemo(() => {
    if (data.draggableTray && data.draggableTray.length) return data.draggableTray
    return gapSlots.map((g) => g.correct)
  }, [data.draggableTray, gapSlots])

  const [placed, setPlaced] = useState<Record<number, string>>({})
  const [picked, setPicked] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)

  const placeInSlot = (slotIdx: number) => {
    if (!picked) return
    setPlaced((p) => {
      const next: Record<number, string> = {}
      // remove this label from any other slot, then assign
      for (const [k, v] of Object.entries(p)) if (v !== picked) next[+k] = v
      next[slotIdx] = picked
      return next
    })
    setPicked(null)
    setChecked(false)
  }
  const resetLabel = () => { setPlaced({}); setPicked(null); setChecked(false) }
  const usedLabels = new Set(Object.values(placed))
  const allFilled = gapSlots.every((g) => placed[g.idx])
  const allCorrect = gapSlots.every((g) => placed[g.idx] && bandMatches(placed[g.idx], g.correct))
  const feedback: 'idle' | 'correct' | 'wrong' = !checked ? 'idle' : allCorrect ? 'correct' : 'wrong'

  /* ------------------------------------------------------------- render */

  const markerX = barX0 + frac * barW
  const targetIdx = data.target ? bands.findIndex((b) => bandMatches(b, data.target!)) : -1

  const hint =
    mode === 'sources'
      ? 'Toggle each source on or off to see which bands of the spectrum it emits — compare their coverage.'
      : mode === 'label'
        ? 'Pick a label from the tray, then click a dashed slot to drop it in. Check your answer when every slot is filled.'
        : 'Drag the marker across the spectrum (or use the arrow keys) to read off the band and a sample wavelength.'

  return (
    <FigureCard title={data.title} source={data.source} hint={hint}>
      {/* mode-specific controls above the bar */}
      {mode === 'sources' && sources.length > 0 && (
        <div className="mb-3">
          <LayerToggles
            layers={sources.map((s, i) => ({ id: s.name, label: s.name, color: colorAt(i) }))}
            active={activeSrc}
            onToggle={(id) => setActiveSrc((a) => ({ ...a, [id]: !a[id] }))}
          />
        </div>
      )}

      {mode === 'label' && tray.length > 0 && (
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: SUB }}>Tray</span>
          <Segmented
            options={tray.filter((t) => !usedLabels.has(t)).map((t) => ({ value: t, label: bandLabel(t) }))}
            value={picked}
            onChange={(v) => setPicked(v)}
          />
        </div>
      )}

      <div className="relative select-none">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full"
          role={mode === 'scrub' ? 'slider' : 'img'}
          aria-label={data.title ?? 'spectrum'}
          aria-valuemin={mode === 'scrub' ? 0 : undefined}
          aria-valuemax={mode === 'scrub' ? n - 1 : undefined}
          aria-valuenow={mode === 'scrub' ? activeIdx : undefined}
          aria-valuetext={mode === 'scrub' ? bandLabel(bands[activeIdx]) : undefined}
          tabIndex={mode === 'scrub' ? 0 : -1}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={() => setDragging(false)}
          onKeyDown={onKeyDown}
          style={{ cursor: mode === 'scrub' ? (dragging ? 'grabbing' : 'pointer') : 'default', touchAction: 'none', outline: 'none' }}
        >
          {/* band segments */}
          {bands.map((b, i) => {
            const x = segX(i)
            const fill = bandFill(b, i, n)
            const isTarget = i === targetIdx
            const isCovered = mode === 'sources' && coveredBands.has(i)
            const isActive = mode === 'scrub' && i === activeIdx
            const dim = mode === 'sources' && coveredBands.size > 0 && !isCovered
            // in label mode, hide the names of slots that must be filled
            const isSlot = mode === 'label' && gapSlots.some((g) => g.idx === i)
            const placedHere = mode === 'label' ? placed[i] : undefined
            const showName = !(isSlot && !placedHere)
            const name = placedHere ? bandLabel(placedHere) : bandLabel(b)
            return (
              <g key={`${b}-${i}`}>
                <rect
                  x={x}
                  y={PAD.t}
                  width={segW - 1.2}
                  height={BAR_H}
                  rx={3}
                  fill={fill}
                  opacity={dim ? 0.22 : isCovered ? 1 : mode === 'sources' ? 0.85 : 0.92}
                  stroke={isSlot && !placedHere ? '#94a3b8' : isActive || isTarget ? INK : 'transparent'}
                  strokeWidth={isActive || isTarget ? 2.5 : isSlot && !placedHere ? 1.5 : 0}
                  strokeDasharray={isSlot && !placedHere ? '5 4' : undefined}
                  onClick={mode === 'label' && isSlot ? () => placeInSlot(i) : undefined}
                  style={{ cursor: mode === 'label' && isSlot ? 'pointer' : undefined, transition: 'opacity 160ms ease' }}
                />
                {showName && (
                  <text
                    x={x + (segW - 1.2) / 2}
                    y={PAD.t + BAR_H / 2 + 4}
                    textAnchor="middle"
                    fontSize={Math.min(12, (segW - 6) / Math.max(4, name.length) * 1.7)}
                    fontWeight={700}
                    fill="#ffffff"
                    style={{ pointerEvents: 'none', paintOrder: 'stroke', stroke: 'rgba(15,23,42,0.35)', strokeWidth: 0.6 }}
                  >
                    {name}
                  </text>
                )}
                {isSlot && !placedHere && checked && (
                  <text x={x + (segW - 1.2) / 2} y={PAD.t + BAR_H / 2 + 4} textAnchor="middle" fontSize={10} fontWeight={700} fill="#c2255c" style={{ pointerEvents: 'none' }}>
                    ?
                  </text>
                )}
                {/* per-slot correctness tick after checking */}
                {mode === 'label' && isSlot && placedHere && checked && (
                  <text x={x + (segW - 1.2) / 2} y={PAD.t - 6} textAnchor="middle" fontSize={13} fontWeight={800}
                    fill={bandMatches(placedHere, gapSlots.find((g) => g.idx === i)!.correct) ? '#2f9e44' : '#c2255c'}>
                    {bandMatches(placedHere, gapSlots.find((g) => g.idx === i)!.correct) ? '✓' : '✗'}
                  </text>
                )}
              </g>
            )
          })}

          {/* axis arrow + label */}
          <g>
            <line x1={barX0} y1={PAD.t + BAR_H + 18} x2={barX1} y2={PAD.t + BAR_H + 18} stroke={SUB} strokeWidth={1.5} markerEnd="url(#sp-arrow)" />
            <defs>
              <marker id="sp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill={SUB} />
              </marker>
            </defs>
            <text x={(barX0 + barX1) / 2} y={PAD.t + BAR_H + 34} textAnchor="middle" fontSize={11} fontWeight={600} fill={SUB}>
              {axisLabel}
            </text>
          </g>

          {/* scrub marker */}
          {mode === 'scrub' && (
            <g style={{ transition: dragging ? 'none' : 'transform 120ms ease', transform: `translateX(${markerX - W / 2}px)`, transformBox: 'view-box' as React.CSSProperties['transformBox'] }}>
              <line x1={W / 2} y1={PAD.t - 8} x2={W / 2} y2={PAD.t + BAR_H + 8} stroke={INK} strokeWidth={2} />
              <polygon points={`${W / 2 - 7},${PAD.t - 8} ${W / 2 + 7},${PAD.t - 8} ${W / 2},${PAD.t + 2}`} fill={INK} />
              <circle cx={W / 2} cy={PAD.t + BAR_H + 8} r={6} fill="#ffffff" stroke={INK} strokeWidth={2.5} />
            </g>
          )}
        </svg>
      </div>

      {/* mode-specific readouts / controls below the bar */}
      {mode === 'scrub' && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Readout label="Band" value={bandLabel(bands[activeIdx])} color={bandFill(bands[activeIdx], activeIdx, n)} />
          <Readout label={data.wavelengthRange ? 'Wavelength' : 'Position'} value={wlText} />
          {data.visibleRange && (
            <Readout label="Visible" value={`${fmtBound(data.visibleRange[0])} – ${fmtBound(data.visibleRange[1])}`} color="#2f9e44" />
          )}
          {targetIdx >= 0 && (
            <span className="text-[11px] font-semibold" style={{ color: activeIdx === targetIdx ? '#2f9e44' : SUB }}>
              {activeIdx === targetIdx ? '✓ on target band' : `target: ${bandLabel(bands[targetIdx])}`}
            </span>
          )}
        </div>
      )}

      {mode === 'sources' && sources.length > 0 && (
        <div className="mt-3 flex flex-col gap-1.5 text-[11px]" style={{ color: INK }}>
          {sources.filter((s) => activeSrc[s.name]).map((s, i) => (
            <div key={s.name} className="flex items-center gap-2">
              <span className="inline-block rounded px-1.5 py-0.5 font-semibold" style={{ background: colorAt(sources.indexOf(s)), color: '#fff' }}>{s.name}</span>
              <span style={{ color: SUB }}>covers</span>
              <span className="font-mono" style={{ color: INK }}>
                {(s.covers ?? []).map(bandLabel).join(', ') || '—'}
              </span>
            </div>
          ))}
          {sources.every((s) => !activeSrc[s.name]) && (
            <span style={{ color: SUB }}>Select a source above to highlight its band coverage.</span>
          )}
        </div>
      )}

      {mode === 'label' && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <GhostButton onClick={() => setChecked(true)} color={allFilled ? '#0b7285' : '#94a3b8'}>Check</GhostButton>
          <GhostButton onClick={resetLabel} color="#64748b">Reset</GhostButton>
          <FeedbackChip state={feedback} />
          {picked && (
            <span className="text-[11px] font-semibold" style={{ color: SUB }}>
              holding <span className="font-mono" style={{ color: INK }}>{bandLabel(picked)}</span> — click a dashed slot
            </span>
          )}
          {!allFilled && checked && (
            <span className="text-[11px]" style={{ color: '#c2255c' }}>fill every slot first</span>
          )}
        </div>
      )}
    </FigureCard>
  )
}
