'use client'

/**
 * DecaySim — interactive radioactive-decay stimulus.
 *
 * A grid of nuclei flips from parent (teal) to daughter (faded) deterministically
 * as the time slider / Play advances. A live mass-vs-time exponential curve
 * (N = N0 * (1/2)^(t / halfLife)) carries a draggable time marker, and readouts
 * show elapsed time, number of half-lives, and the remaining quantity
 * (mass / count / activity, whichever the data supplies).
 *
 * STIMULUS rules: every author-supplied number/label renders exactly. Interactivity
 * lets the student scrub time to read the half-life, but never changes the assessed
 * quantity. SSR-safe — the decay order is seeded deterministically (mulberry32) from
 * a fixed numeric seed so server and client paint identically; animation only via the
 * kit's useRaf hook.
 */

import { useMemo, useRef, useState } from 'react'
import {
  FigureCard,
  PlayButton,
  GhostButton,
  Slider,
  Readout,
  useRaf,
  useSvgPoint,
  PALETTE,
  INK,
  SUB,
  LINE,
  SURFACE,
} from './_figureKit'

export interface DecaySimData {
  title?: string
  source?: string
  isotope?: string
  daughter?: string
  decayMode?: string
  halfLife?: number
  /** time units, e.g. 'h', 'years', 'minutes', 'millions of years' */
  units?: string

  /** Initial nuclei count (default 144). Used for the count readout + grid. */
  initialCount?: number
  /** Initial mass (g) — enables the mass readout/curve. */
  initialMass?: number
  massUnits?: string
  /** Initial activity (Bq) — enables the activity readout/curve. */
  initialActivity?: number
  activityUnits?: string

  /** Explicit max time for the slider / x-axis (in `units`). */
  axisMax?: number
  /** Aliases seen across papers for the time-axis maximum. */
  axisTimeMax?: number
  /** Activity-axis max (defaults derived from initialActivity). */
  axisActivityMax?: number
  /** {min,max,units} time range (overrides axisMax if present). */
  timeRange?: { min?: number; max?: number; units?: string }

  /** Axis label strings (free-form) — rendered verbatim if present. */
  xAxis?: string
  yAxis?: string
  axis?: { x?: string; y?: string }
}

// ── SVG geometry for the decay curve ───────────────────────────────────────
const W = 360
const H = 220
const M = { l: 46, r: 14, t: 14, b: 34 }
const PW = W - M.l - M.r
const PH = H - M.t - M.b

/** Deterministic PRNG (mulberry32) — seeded so SSR === CSR. */
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

/** Stable numeric seed from the isotope label, so the flip order is reproducible. */
function seedFrom(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Pick the nearest perfect-ish grid (rows*cols) covering `n` cells. */
function gridDims(n: number): { rows: number; cols: number } {
  const cols = Math.max(1, Math.ceil(Math.sqrt(n)))
  const rows = Math.max(1, Math.ceil(n / cols))
  return { rows, cols }
}

function fmt(v: number): string {
  if (!isFinite(v)) return '—'
  if (Math.abs(v) >= 1000) return v.toLocaleString('en-US', { maximumFractionDigits: 0 })
  if (Number.isInteger(v)) return String(v)
  return v.toFixed(Math.abs(v) < 10 ? 2 : 1)
}

export default function DecaySim({ data }: { data: DecaySimData }) {
  const isotope = data.isotope ?? 'Parent'
  const daughter = data.daughter
  const units = data.timeRange?.units ?? data.units ?? ''
  const halfLife = data.halfLife && data.halfLife > 0 ? data.halfLife : 1

  // Which quantity does this paper track? mass > activity > count.
  const mode: 'mass' | 'activity' | 'count' =
    data.initialMass != null ? 'mass' : data.initialActivity != null ? 'activity' : 'count'
  const initialCount = Math.max(1, Math.round(data.initialCount ?? 144))
  const N0 =
    mode === 'mass'
      ? (data.initialMass as number)
      : mode === 'activity'
        ? (data.initialActivity as number)
        : initialCount
  const qUnits =
    mode === 'mass'
      ? (data.massUnits ?? 'g')
      : mode === 'activity'
        ? (data.activityUnits ?? 'Bq')
        : 'nuclei'

  // Time axis maximum: explicit override → default of ~5 half-lives.
  const tMax =
    data.timeRange?.max ??
    data.axisMax ??
    data.axisTimeMax ??
    Math.max(halfLife * 5, halfLife + 1)
  const tMin = Math.max(0, data.timeRange?.min ?? 0)

  // y-axis (quantity) maximum.
  const yMaxRaw = mode === 'activity' ? (data.axisActivityMax ?? N0) : N0
  const yMax = yMaxRaw > 0 ? yMaxRaw : 1

  const [t, setT] = useState(tMin)
  const [playing, setPlaying] = useState(false)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const toPoint = useSvgPoint(svgRef, W, H)

  // Animate: sweep the full axis in ~9 s, then stop at the end.
  useRaf(
    (dt) => {
      setT((prev) => {
        const next = prev + dt * ((tMax - tMin) / 9)
        if (next >= tMax) {
          setPlaying(false)
          return tMax
        }
        return next
      })
    },
    playing,
  )

  const remainingFrac = useMemo(() => Math.pow(0.5, (t - tMin) / halfLife), [t, tMin, halfLife])
  const remaining = N0 * remainingFrac
  const halfLives = (t - tMin) / halfLife

  // ── Deterministic nuclei grid ──────────────────────────────────────────
  const { rows, cols, flipOrder } = useMemo(() => {
    const cells = Math.min(196, initialCount) // cap grid cells for legibility
    const { rows, cols } = gridDims(cells)
    const total = rows * cols
    const rnd = mulberry32(seedFrom(isotope) ^ (total * 2654435761))
    // Random permutation of cell indices → the order they decay in.
    const order = Array.from({ length: total }, (_, i) => i)
    for (let i = total - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1))
      ;[order[i], order[j]] = [order[j], order[i]]
    }
    // flipOrder[cellIndex] = its rank in 0..total-1 (fraction at which it flips).
    const flipOrder = new Array<number>(total)
    order.forEach((cell, rank) => {
      flipOrder[cell] = rank
    })
    return { rows, cols, flipOrder }
  }, [initialCount, isotope])

  const totalCells = rows * cols
  const decayedCells = Math.round(totalCells * (1 - remainingFrac))

  // ── Curve geometry ─────────────────────────────────────────────────────
  const sx = (time: number) => M.l + (PW * (time - tMin)) / (tMax - tMin || 1)
  const sy = (q: number) => M.t + PH * (1 - q / yMax)
  const curve = useMemo(() => {
    const pts: string[] = []
    const steps = 80
    for (let i = 0; i <= steps; i++) {
      const time = tMin + ((tMax - tMin) * i) / steps
      const q = N0 * Math.pow(0.5, (time - tMin) / halfLife)
      pts.push(`${i === 0 ? 'M' : 'L'}${sx(time).toFixed(2)},${sy(q).toFixed(2)}`)
    }
    return pts.join(' ')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tMin, tMax, N0, halfLife, yMax])

  const markerX = sx(t)
  const markerY = sy(remaining)

  // Drag the time marker on the curve.
  const dragRef = useRef(false)
  const setFromClientX = (clientX: number) => {
    const [px] = toPoint(clientX, 0)
    const frac = (px - M.l) / (PW || 1)
    const time = tMin + Math.min(1, Math.max(0, frac)) * (tMax - tMin)
    setT(time)
  }
  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    setPlaying(false)
    dragRef.current = true
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    setFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return
    setFromClientX(e.clientX)
  }
  const endDrag = () => {
    dragRef.current = false
  }

  // Axis labels: prefer the verbatim author strings if supplied.
  const xLabel = data.xAxis ?? data.axis?.x ?? `Time / ${units || 't'}`
  const yLabel =
    data.yAxis ??
    data.axis?.y ??
    (mode === 'mass'
      ? `Mass / ${qUnits}`
      : mode === 'activity'
        ? `Activity / ${qUnits}`
        : 'Nuclei remaining')

  const teal = PALETTE[0]
  const faded = '#cbd5e1'

  // y gridlines / ticks (0, 25, 50, 75, 100 % of yMax)
  const yTicks = [0, 0.25, 0.5, 0.75, 1]
  const xTicks = [0, 0.25, 0.5, 0.75, 1]

  const reset = () => {
    setPlaying(false)
    setT(tMin)
  }

  return (
    <FigureCard
      title={data.title ?? `Radioactive decay of ${isotope}`}
      source={data.source}
      hint="Play or drag the time slider (or the marker on the curve). Watch parent nuclei flip to daughter; read elapsed time, number of half-lives, and the amount remaining."
      maxWidth={760}
    >
      {/* readouts */}
      <div className="mb-3 flex flex-wrap items-stretch gap-2">
        <Readout label="Elapsed time" value={fmt(t)} unit={units} color={teal} />
        <Readout label="Half-lives" value={fmt(halfLives)} color={PALETTE[2]} />
        <Readout
          label={mode === 'mass' ? 'Mass remaining' : mode === 'activity' ? 'Activity' : 'Nuclei remaining'}
          value={fmt(mode === 'count' ? Math.round(remaining) : remaining)}
          unit={qUnits}
          color={PALETTE[1]}
        />
        <Readout label="Fraction remaining" value={`${(remainingFrac * 100).toFixed(1)}%`} color={PALETTE[4]} />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        {/* nuclei grid */}
        <div className="shrink-0" style={{ flexBasis: 256 }}>
          <div
            className="grid gap-[3px] rounded-lg p-2"
            style={{
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              background: SURFACE,
              border: `1px solid ${LINE}`,
              width: 256,
              maxWidth: '100%',
            }}
            aria-label={`${decayedCells} of ${totalCells} nuclei decayed`}
          >
            {Array.from({ length: totalCells }, (_, i) => {
              const decayed = flipOrder[i] < decayedCells
              return (
                <span
                  key={i}
                  style={{
                    aspectRatio: '1 / 1',
                    borderRadius: 3,
                    background: decayed ? faded : teal,
                    opacity: decayed ? 0.55 : 1,
                    transition: 'background 200ms ease, opacity 200ms ease',
                  }}
                />
              )
            })}
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]" style={{ color: SUB }}>
            <span className="inline-flex items-center gap-1">
              <span style={{ width: 9, height: 9, borderRadius: 2, background: teal, display: 'inline-block' }} />
              {isotope} (parent)
            </span>
            <span className="inline-flex items-center gap-1">
              <span style={{ width: 9, height: 9, borderRadius: 2, background: faded, display: 'inline-block' }} />
              {daughter ? `${daughter} (daughter)` : 'daughter'}
            </span>
            {data.decayMode && (
              <span style={{ color: SUB }}>
                {data.decayMode}-decay
              </span>
            )}
          </div>
        </div>

        {/* decay curve */}
        <div className="min-w-0 flex-1">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${W} ${H}`}
            className="block h-auto w-full select-none"
            style={{ touchAction: 'none', cursor: 'pointer' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            role="img"
            aria-label={`${yLabel} against ${xLabel}`}
          >
            {/* gridlines + y ticks */}
            {yTicks.map((f) => {
              const y = M.t + PH * (1 - f)
              return (
                <g key={`y${f}`}>
                  <line x1={M.l} y1={y} x2={W - M.r} y2={y} stroke={LINE} strokeWidth={1} />
                  <text x={M.l - 6} y={y + 3.5} textAnchor="end" fontSize={9} fill={SUB}>
                    {fmt(yMax * f)}
                  </text>
                </g>
              )
            })}
            {/* x ticks */}
            {xTicks.map((f) => {
              const x = M.l + PW * f
              return (
                <g key={`x${f}`}>
                  <line x1={x} y1={M.t} x2={x} y2={M.t + PH} stroke={LINE} strokeWidth={f === 0 ? 0 : 1} />
                  <text x={x} y={M.t + PH + 13} textAnchor="middle" fontSize={9} fill={SUB}>
                    {fmt(tMin + (tMax - tMin) * f)}
                  </text>
                </g>
              )
            })}
            {/* axes */}
            <line x1={M.l} y1={M.t} x2={M.l} y2={M.t + PH} stroke={INK} strokeWidth={1.5} />
            <line x1={M.l} y1={M.t + PH} x2={W - M.r} y2={M.t + PH} stroke={INK} strokeWidth={1.5} />

            {/* half-life guide lines (at the current marker) */}
            <line
              x1={M.l}
              y1={markerY}
              x2={markerX}
              y2={markerY}
              stroke={PALETTE[1]}
              strokeWidth={1}
              strokeDasharray="3 3"
            />
            <line
              x1={markerX}
              y1={markerY}
              x2={markerX}
              y2={M.t + PH}
              stroke={PALETTE[1]}
              strokeWidth={1}
              strokeDasharray="3 3"
            />

            {/* decay curve */}
            <path d={curve} fill="none" stroke={teal} strokeWidth={2.4} strokeLinecap="round" />

            {/* draggable marker */}
            <circle cx={markerX} cy={markerY} r={6} fill="#ffffff" stroke={PALETTE[1]} strokeWidth={2.5} />
            <circle cx={markerX} cy={markerY} r={2.5} fill={PALETTE[1]} />

            {/* axis labels */}
            <text x={M.l + PW / 2} y={H - 2} textAnchor="middle" fontSize={10} fontWeight={600} fill={INK}>
              {xLabel}
            </text>
            <text
              x={12}
              y={M.t + PH / 2}
              textAnchor="middle"
              fontSize={10}
              fontWeight={600}
              fill={INK}
              transform={`rotate(-90 12 ${M.t + PH / 2})`}
            >
              {yLabel}
            </text>
          </svg>
        </div>
      </div>

      {/* controls */}
      <div className="mt-3 flex flex-col gap-3">
        <Slider
          label={`Time${units ? ` (${units})` : ''}`}
          min={tMin}
          max={tMax}
          step={(tMax - tMin) / 600 || 0.01}
          value={t}
          onChange={(v) => {
            setPlaying(false)
            setT(v)
          }}
          unit={units}
          color={teal}
          format={(v) => `${fmt(v)}${units ? ' ' + units : ''}`}
        />
        <div className="flex flex-wrap items-center gap-2">
          <PlayButton playing={playing} onToggle={() => setPlaying((p) => !p)} color={teal} />
          <GhostButton onClick={() => setT(Math.min(tMax, t + halfLife))} color={teal}>
            + 1 half-life
          </GhostButton>
          <GhostButton onClick={reset} color={SUB}>
            Reset
          </GhostButton>
        </div>
      </div>
    </FigureCard>
  )
}
