'use client'

/**
 * RateSim — interactive "process RATE vs a condition" exam artefact.
 *
 * A Segmented condition picker selects one of several conditions (particle size large
 * vs crushed, concentration, catalyst, temperature, altitude…). Press Play to animate
 * the cumulative process progressively along time/x; a live numeric readout tracks the
 * current value, and selected conditions can be overlaid on the same axes for comparison.
 *
 * It covers every render_data variety in the grounding file by normalising each shape
 * into a common "series" model (a list of conditions, each a curve over an x-domain):
 *  - gas-volume-vs-time (options[] with ratePerSec + plateauVolume + linear ramp)
 *  - conductometric titration (V-shape with a sharp equivalence dip)
 *  - biodegradation % vs time (series[] of saturating curves to a plateau)
 *  - glow-stick / temperature (points[] sampled curve, read a value off it)
 *  - concentration → mass-lost scatter with line of best fit (points[])
 *  - atmosphere probe altitude → O2% live logger (altitude/oxygen map + data table)
 *  - bar metric per category (bars[]) and pictograph dataPoints (rendered as a series)
 *
 * SSR-safe (Next 14 App Router): no window/document/performance/RNG at module scope.
 * Animation runs only through the kit's useRaf. Any pseudo-randomness is seeded
 * deterministically from data via a local mulberry32 so SSR and CSR match.
 *
 * Stimulus rule: every supplied number/label renders EXACTLY; the Play/scrub
 * interaction never alters an assessed quantity — it only reveals the supplied curve.
 */

import { useMemo, useRef, useState, useCallback } from 'react'
import {
  FigureCard,
  PlayButton,
  GhostButton,
  Readout,
  LayerToggles,
  useRaf,
  useSvgPoint,
  PALETTE,
  colorAt,
  INK,
  SUB,
  LINE,
  SURFACE,
} from './_figureKit'

type Pt = [number, number]

/** Axis given either as a structured object or a loose string (label only). */
export interface RateAxis {
  label?: string
  min?: number
  max?: number
  tick?: number
  step?: number
}

/** A "Play"-able condition: a labelled curve over the shared x-domain. */
export interface RateOption {
  label?: string
  color?: string
  /** Linear-ramp shape: cm3/unit rate up to a plateau (gas-volume style). */
  ratePerSec?: number
  plateauVolume?: number
  /** Saturating shape: rises to this plateau (biodegradation style). */
  plateau?: number
  shape?: string
  /** Explicit sampled curve, overrides shape inference. */
  points?: Pt[]
  particleSize?: string
}

/** A bar / single-metric category (metal-reactivity style). */
export interface RateBar {
  label?: string
  time_s?: number
  value?: number
}

export interface RateSimData {
  title?: string
  source?: string

  /** Forced mode; otherwise inferred from the data shape. */
  mode?:
    | 'gasVolume'
    | 'titration'
    | 'saturating'
    | 'scatter'
    | 'altitudeProbe'
    | 'bars'

  // Axis labels (flat or structured)
  xLabel?: string
  yLabel?: string
  xAxis?: RateAxis | string
  yAxis?: RateAxis | string

  /** The condition variable being changed (caption only). */
  variable?: string
  unit?: string
  metric?: string
  reaction?: string
  prompt?: string
  note?: string
  task?: string
  answer?: string
  trend?: string

  // ── shape: list of conditions / curves ──
  options?: RateOption[]
  series?: RateOption[]

  // ── shape: a single sampled curve (temperature / titration) ──
  points?: Pt[]

  // ── shape: titration ──
  plateauHigh?: number
  plateauLow?: number
  equivalenceVolume?: number

  // ── shape: scatter with best-fit ──
  /** points may also arrive as {conc,massLost} objects. */
  scatterPoints?: { x: number; y: number }[]
  lineOfBestFit?: boolean

  // ── shape: atmosphere probe ──
  altitudesKm?: number[]
  oxygenPctByAltitude?: Record<string, number>
  layers?: string[]
  status?: string

  // ── shape: bars / pictograph ──
  bars?: RateBar[]
  dataPoints?: Record<string, number>[]
}

// ── SVG geometry ─────────────────────────────────────────────────────────────
const W = 560
const H = 340
const M = { l: 60, r: 24, t: 16, b: 50 }
const PX0 = M.l
const PX1 = W - M.r
const PY0 = H - M.b
const PY1 = M.t

// ── deterministic PRNG (seeded from data; SSR === CSR) ───────────────────────
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
function seedFrom(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

// ── helpers ──────────────────────────────────────────────────────────────────
function axisLabel(a: RateAxis | string | undefined, fallback: string): string {
  if (!a) return fallback
  if (typeof a === 'string') return a
  return a.label ?? fallback
}
function axisObj(a: RateAxis | string | undefined): RateAxis {
  return typeof a === 'object' && a !== null ? a : {}
}
function fmt(n: number, dp = 2): string {
  if (!Number.isFinite(n)) return '—'
  const r = Math.round(n * 10 ** dp) / 10 ** dp
  return Object.is(r, -0) ? '0' : String(r)
}
function niceStep(lo: number, hi: number, divs = 6): number {
  const span = Math.abs(hi - lo) || 1
  const raw = span / divs
  const mag = Math.pow(10, Math.floor(Math.log10(raw)))
  const norm = raw / mag
  const nice = norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10
  return nice * mag
}
function buildTicks(lo: number, hi: number, step: number): number[] {
  if (!Number.isFinite(step) || step <= 0) return [lo, hi]
  const out: number[] = []
  const start = Math.ceil(lo / step) * step
  for (let v = start, i = 0; v <= hi + step * 1e-6 && i < 200; v += step, i++) {
    out.push(Math.round(v * 1e6) / 1e6)
  }
  return out.length ? out : [lo, hi]
}

/** A normalised condition: a name, colour and a closed-form y(x) over [x0,x1]. */
interface Curve {
  id: string
  label: string
  color: string
  xs: Pt[] // sampled polyline used for both drawing and read-off
}

const PRIMARY = PALETTE[0]

// Resolve a named/string colour or palette index into a hex.
function resolveColor(c: string | undefined, i: number): string {
  if (!c) return colorAt(i)
  const named: Record<string, string> = {
    teal: PALETTE[0],
    orange: PALETTE[1],
    purple: PALETTE[2],
    green: PALETTE[3],
    blue: PALETTE[4],
    pink: PALETTE[5],
    amber: PALETTE[6],
    slate: PALETTE[7],
  }
  if (named[c.toLowerCase()]) return named[c.toLowerCase()]
  if (/^#/.test(c)) return c
  return colorAt(i)
}

export default function RateSim({ data }: { data: RateSimData }) {
  // ── infer mode ──────────────────────────────────────────────────────────────
  const mode: NonNullable<RateSimData['mode']> = useMemo(() => {
    if (data.mode) return data.mode
    if (data.altitudesKm || data.oxygenPctByAltitude) return 'altitudeProbe'
    if (data.equivalenceVolume != null || data.plateauHigh != null) return 'titration'
    if (data.bars && data.bars.length) return 'bars'
    if (data.series && data.series.length) return 'saturating'
    if (data.options && data.options.length) return 'gasVolume'
    if ((data.points && data.points.length) || (data.scatterPoints && data.scatterPoints.length))
      return data.lineOfBestFit ? 'scatter' : 'scatter'
    return 'gasVolume'
  }, [data])

  // ── axis labels ─────────────────────────────────────────────────────────────
  const xa = axisObj(data.xAxis)
  const ya = axisObj(data.yAxis)
  const xLab = axisLabel(data.xAxis, data.xLabel ?? 'x')
  const yLab = axisLabel(data.yAxis, data.yLabel ?? 'y')

  // ── altitude probe: handled as its own panel (vertical logger) ──────────────
  const altitudes = useMemo(
    () => (data.altitudesKm ? [...data.altitudesKm].sort((a, b) => a - b) : []),
    [data.altitudesKm],
  )

  // ── build normalised curves for the line/area chart modes ───────────────────
  const { curves, xRange, yRange } = useMemo(() => {
    const SAMPLES = 60
    const list: Curve[] = []

    // gather raw conditions for the multi-series modes
    const rawOptions: RateOption[] =
      (mode === 'saturating' ? data.series : data.options) ??
      data.series ??
      data.options ??
      []

    // ----- single-curve point modes (scatter / sampled temperature curve) -----
    const flatPts: Pt[] =
      (data.points && data.points.map((p) => [Number(p[0]) || 0, Number(p[1]) || 0] as Pt)) ||
      (data.scatterPoints &&
        data.scatterPoints.map((p) => [Number(p.x) || 0, Number(p.y) || 0] as Pt)) ||
      []

    // determine x-domain
    let xMin = xa.min ?? 0
    let xMax = xa.max ?? 0
    let yMin = ya.min ?? 0
    let yMax = ya.max ?? 0

    if (mode === 'gasVolume' || mode === 'saturating' || mode === 'bars') {
      if (xa.max == null) xMax = 80 // gas-volume default domain
      if (mode === 'saturating' && xa.max == null) xMax = 50
    }

    // include flat points in range
    flatPts.forEach((p) => {
      xMax = Math.max(xMax, p[0])
      yMax = Math.max(yMax, p[1])
      xMin = Math.min(xMin, p[0])
    })

    if (mode === 'scatter') {
      list.push({
        id: 's0',
        label: data.variable ?? 'measured',
        color: PRIMARY,
        xs: [...flatPts].sort((a, b) => a[0] - b[0]),
      })
    } else if (rawOptions.length) {
      rawOptions.forEach((o, i) => {
        // explicit sampled curve wins
        if (o.points && o.points.length) {
          const pts = o.points.map((p) => [Number(p[0]) || 0, Number(p[1]) || 0] as Pt)
          pts.forEach((p) => {
            xMax = Math.max(xMax, p[0])
            yMax = Math.max(yMax, p[1])
          })
          list.push({
            id: `o${i}`,
            label: o.label ?? `Condition ${i + 1}`,
            color: resolveColor(o.color, i),
            xs: [...pts].sort((a, b) => a[0] - b[0]),
          })
          return
        }

        // linear-ramp (gas volume): y = min(rate * x, plateau)
        if (o.ratePerSec != null || o.plateauVolume != null) {
          const rate = o.ratePerSec ?? 1
          const cap = o.plateauVolume ?? rate * xMax
          yMax = Math.max(yMax, cap)
          const pts: Pt[] = []
          for (let s = 0; s <= SAMPLES; s++) {
            const x = xMin + ((xMax - xMin) * s) / SAMPLES
            pts.push([x, Math.min(rate * x, cap)])
          }
          list.push({
            id: `o${i}`,
            label: o.label ?? `Condition ${i + 1}`,
            color: resolveColor(o.color, i),
            xs: pts,
          })
          return
        }

        // saturating (biodegradation): y = plateau * (1 - e^{-k x}), k ranks by index
        const plat = o.plateau ?? o.plateauVolume ?? 50
        yMax = Math.max(yMax, plat)
        // smaller index → faster rate (data lists fastest first by convention here)
        const k = 0.12 - i * 0.02 > 0.03 ? 0.12 - i * 0.02 : 0.04
        const pts: Pt[] = []
        for (let s = 0; s <= SAMPLES; s++) {
          const x = xMin + ((xMax - xMin) * s) / SAMPLES
          pts.push([x, plat * (1 - Math.exp(-k * x))])
        }
        list.push({
          id: `o${i}`,
          label: o.label ?? `Condition ${i + 1}`,
          color: resolveColor(o.color, i),
          xs: pts,
        })
      })
    }

    // pad y a touch when it came from auto-max
    if (ya.max == null) yMax = yMax * 1.06 || 10
    if (xMax <= xMin) xMax = xMin + 1
    if (yMax <= yMin) yMax = yMin + 1

    return {
      curves: list,
      xRange: [xMin, ya.min != null ? xMax : xMax] as [number, number],
      yRange: [yMin, yMax] as [number, number],
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, mode])

  // titration synthetic V-curve
  const titrationCurve = useMemo<Pt[]>(() => {
    if (mode !== 'titration') return []
    const x0 = xa.min ?? 0
    const x1 = xa.max ?? 40
    const hi = data.plateauHigh ?? 320
    const lo = data.plateauLow ?? 5
    const eq = data.equivalenceVolume ?? (x0 + x1) / 2
    const pts: Pt[] = []
    const N = 80
    for (let s = 0; s <= N; s++) {
      const x = x0 + ((x1 - x0) * s) / N
      // falls steeply to the equivalence dip, then rises back as excess ions add
      let y: number
      if (x <= eq) y = lo + (hi - lo) * (1 - x / (eq || 1))
      else y = lo + (hi - lo) * 0.7 * ((x - eq) / (x1 - eq || 1))
      pts.push([x, y])
    }
    return pts
  }, [mode, xa.min, xa.max, data.plateauHigh, data.plateauLow, data.equivalenceVolume])

  const titRange = useMemo(() => {
    const x0 = xa.min ?? 0
    const x1 = xa.max ?? 40
    const y0 = ya.min ?? -10
    const y1 = ya.max ?? Math.max(data.plateauHigh ?? 320, 0) * 1.06
    return { x: [x0, x1] as [number, number], y: [y0, y1] as [number, number] }
  }, [xa.min, xa.max, ya.min, ya.max, data.plateauHigh])

  // ── active selection / overlay state ────────────────────────────────────────
  const allIds = curves.map((c) => c.id)
  const [active, setActive] = useState<string>(allIds[0] ?? 's0')
  const [overlay, setOverlay] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(curves.map((c, i) => [c.id, i === 0])),
  )

  // ── progressive play (0→1 fraction of the x-domain) ─────────────────────────
  const [t, setT] = useState(1) // start fully drawn (read-off ready)
  const [playing, setPlaying] = useState(false)
  useRaf(
    (dt) => {
      setT((p) => {
        const np = p + dt / 4 // ~4s sweep
        if (np >= 1) {
          setPlaying(false)
          return 1
        }
        return np
      })
    },
    playing,
  )
  const play = useCallback(() => {
    if (playing) {
      setPlaying(false)
      return
    }
    setT(0)
    setPlaying(true)
  }, [playing])
  const reset = useCallback(() => {
    setPlaying(false)
    setT(1)
  }, [])

  // ── scales (line/area modes) ────────────────────────────────────────────────
  const isTit = mode === 'titration'
  const xr = isTit ? titRange.x : xRange
  const yr = isTit ? titRange.y : yRange
  const sx = useCallback((x: number) => PX0 + ((x - xr[0]) / (xr[1] - xr[0] || 1)) * (PX1 - PX0), [xr])
  const sy = useCallback((y: number) => PY0 - ((y - yr[0]) / (yr[1] - yr[0] || 1)) * (PY0 - PY1), [yr])
  const invX = useCallback(
    (px: number) => xr[0] + ((px - PX0) / (PX1 - PX0 || 1)) * (xr[1] - xr[0]),
    [xr],
  )

  const xTick = xa.tick ?? xa.step ?? niceStep(xr[0], xr[1])
  const yTick = ya.tick ?? niceStep(yr[0], yr[1])
  const xTicks = useMemo(() => buildTicks(xr[0], xr[1], xTick), [xr, xTick])
  const yTicks = useMemo(() => buildTicks(yr[0], yr[1], yTick), [yr, yTick])

  // ── read-off cursor (drag along x) ──────────────────────────────────────────
  const svgRef = useRef<SVGSVGElement | null>(null)
  const toSvg = useSvgPoint(svgRef, W, H)
  const [cursorX, setCursorX] = useState<number>(() => (xr[0] + xr[1]) / 2)
  const [dragging, setDragging] = useState(false)
  const onMove = useCallback(
    (clientX: number, clientY: number) => {
      const [px] = toSvg(clientX, clientY)
      setCursorX(Math.max(xr[0], Math.min(xr[1], invX(px))))
    },
    [toSvg, invX, xr],
  )

  // piecewise-linear read of a polyline at x
  const yAtPolyline = useCallback((pts: Pt[], x: number): number | null => {
    if (!pts.length) return null
    if (pts.length === 1) return pts[0][1]
    for (let i = 0; i < pts.length - 1; i++) {
      const [x0, y0] = pts[i]
      const [x1, y1] = pts[i + 1]
      if (x >= Math.min(x0, x1) && x <= Math.max(x0, x1)) {
        const tt = (x - x0) / (x1 - x0 || 1)
        return y0 + tt * (y1 - y0)
      }
    }
    if (x < pts[0][0]) return pts[0][1]
    return pts[pts.length - 1][1]
  }, [])

  // active polyline for read-off
  const activeCurve = curves.find((c) => c.id === active) ?? curves[0]
  const readPolyline = isTit ? titrationCurve : activeCurve?.xs ?? []
  const cursorY = yAtPolyline(readPolyline, cursorX)

  // ── path builders (progressively revealed by t) ─────────────────────────────
  const drawnXMax = xr[0] + (xr[1] - xr[0]) * t
  const pathOf = useCallback(
    (pts: Pt[]): string => {
      const visible = pts.filter((p) => p[0] <= drawnXMax + 1e-9)
      if (visible.length < 2) {
        return visible.length === 1 ? `M${sx(visible[0][0])},${sy(visible[0][1])}` : ''
      }
      // interpolate the leading edge exactly at drawnXMax for a smooth sweep
      const last = visible[visible.length - 1]
      const nextIdx = pts.indexOf(last) + 1
      let path = visible.map((p, i) => `${i === 0 ? 'M' : 'L'}${sx(p[0])},${sy(p[1])}`).join(' ')
      if (nextIdx < pts.length && drawnXMax < xr[1]) {
        const ey = yAtPolyline(pts, drawnXMax)
        if (ey != null) path += ` L${sx(drawnXMax)},${sy(ey)}`
      }
      return path
    },
    [drawnXMax, sx, sy, xr, yAtPolyline],
  )

  // ── live numeric readout for the active condition at the play frontier ──────
  const frontierY = yAtPolyline(readPolyline, drawnXMax)

  // ── deterministic particle dots (decorative, gas-volume only) ───────────────
  const particles = useMemo(() => {
    if (mode !== 'gasVolume') return []
    const rnd = mulberry32(seedFrom((data.title ?? '') + (activeCurve?.label ?? '')))
    return Array.from({ length: 14 }, () => [rnd(), rnd()] as Pt)
  }, [mode, data.title, activeCurve?.label])

  // ── pointer handlers ────────────────────────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent) => {
    if (mode === 'altitudeProbe' || mode === 'bars') return
    e.preventDefault()
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    setDragging(true)
    onMove(e.clientX, e.clientY)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging) onMove(e.clientX, e.clientY)
  }
  const endDrag = () => setDragging(false)

  // ── titration extras ────────────────────────────────────────────────────────
  const eqVol = data.equivalenceVolume

  const hint =
    mode === 'altitudeProbe'
      ? 'Pick an altitude and launch the probe — it rises through the atmosphere layers and logs the oxygen reading at each height into the data table.'
      : mode === 'bars'
        ? 'Compare the measured value for each condition. The shorter the bar, the faster the reaction.'
        : 'Choose a condition, press Play to watch the curve build up over the run, then drag the cursor across to read a value at any point. Toggle conditions to compare them on the same axes.'

  // ───────────────────────────────────────────────────────────────────────────
  // ALTITUDE PROBE MODE
  // ───────────────────────────────────────────────────────────────────────────
  if (mode === 'altitudeProbe') {
    return (
      <AltitudeProbe
        title={data.title}
        source={data.source}
        hint={hint}
        altitudes={altitudes}
        oxygen={data.oxygenPctByAltitude ?? {}}
        layers={data.layers ?? []}
        status={data.status}
        note={data.note}
      />
    )
  }

  // ───────────────────────────────────────────────────────────────────────────
  // BAR MODE
  // ───────────────────────────────────────────────────────────────────────────
  if (mode === 'bars') {
    const bars = data.bars ?? []
    const maxV = Math.max(1, ...bars.map((b) => b.time_s ?? b.value ?? 0))
    const bw = bars.length ? (PX1 - PX0) / bars.length : 0
    const sy0 = (v: number, max: number) => PY0 - ((PY0 - PY1) * v) / max
    return (
      <FigureCard title={data.title} source={data.source} hint={hint}>
        {(data.variable || data.metric) && (
          <p className="mb-2 text-[11px]" style={{ color: SUB }}>
            {data.variable ? <span className="font-semibold">{data.variable}</span> : null}
            {data.metric ? <> — {data.metric}</> : null}
          </p>
        )}
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={data.title ?? 'bar chart'}>
          <rect x={PX0} y={PY1} width={PX1 - PX0} height={PY0 - PY1} fill={SURFACE} stroke={LINE} />
          {buildTicks(0, maxV, niceStep(0, maxV)).map((v) => (
            <g key={`t${v}`}>
              <line x1={PX0} y1={sy0(v, maxV)} x2={PX1} y2={sy0(v, maxV)} stroke={LINE} />
              <text x={PX0 - 8} y={sy0(v, maxV) + 3} textAnchor="end" fontSize={10} fill={SUB}>
                {fmt(v, 0)}
              </text>
            </g>
          ))}
          <line x1={PX0} y1={PY0} x2={PX1} y2={PY0} stroke={INK} strokeWidth={1.5} />
          {bars.map((b, i) => {
            const v = b.time_s ?? b.value ?? 0
            const h = ((PY0 - PY1) * v) / maxV
            return (
              <g key={`b${i}`}>
                <rect x={PX0 + i * bw + bw * 0.18} y={PY0 - h} width={bw * 0.64} height={h} fill={colorAt(i)} rx={3} />
                <text x={PX0 + i * bw + bw / 2} y={PY0 - h - 5} textAnchor="middle" fontSize={10} fontWeight={700} fill={INK}>
                  {fmt(v, 0)}
                </text>
                <text x={PX0 + i * bw + bw / 2} y={PY0 + 16} textAnchor="middle" fontSize={9} fill={SUB}>
                  {b.label ?? `#${i + 1}`}
                </text>
              </g>
            )
          })}
          {data.metric && (
            <text x={16} y={(PY0 + PY1) / 2} textAnchor="middle" fontSize={11} fontWeight={600} fill={INK} transform={`rotate(-90 16 ${(PY0 + PY1) / 2})`}>
              {data.metric}
            </text>
          )}
        </svg>
        {data.task && <p className="mt-2 text-[11px]" style={{ color: SUB }}>{data.task}</p>}
      </FigureCard>
    )
  }

  // ───────────────────────────────────────────────────────────────────────────
  // LINE / AREA MODES (gasVolume, saturating, scatter, titration)
  // ───────────────────────────────────────────────────────────────────────────
  const visibleCurves = isTit
    ? [{ id: 'tit', label: data.reaction ?? 'Conductivity', color: PRIMARY, xs: titrationCurve }]
    : mode === 'scatter'
      ? curves
      : curves.filter((c) => overlay[c.id])

  // best-fit line for scatter
  const bestFit = useMemo<Pt[] | null>(() => {
    if (mode !== 'scatter' || !data.lineOfBestFit) return null
    const pts = curves[0]?.xs ?? []
    if (pts.length < 2) return null
    const n = pts.length
    const sumX = pts.reduce((a, p) => a + p[0], 0)
    const sumY = pts.reduce((a, p) => a + p[1], 0)
    const sumXY = pts.reduce((a, p) => a + p[0] * p[1], 0)
    const sumXX = pts.reduce((a, p) => a + p[0] * p[0], 0)
    const m = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX || 1)
    const b = (sumY - m * sumX) / n
    return [
      [xr[0], m * xr[0] + b],
      [xr[1], m * xr[1] + b],
    ]
  }, [mode, data.lineOfBestFit, curves, xr])

  return (
    <FigureCard title={data.title} source={data.source} hint={hint}>
      {/* condition picker + play controls */}
      <div className="mb-2 flex flex-wrap items-center gap-2">
        {!isTit && mode !== 'scatter' && curves.length > 0 && (
          <LayerToggles
            layers={curves.map((c) => ({ id: c.id, label: c.label, color: c.color }))}
            active={overlay}
            onToggle={(id) => {
              setOverlay((p) => ({ ...p, [id]: !p[id] }))
              setActive(id)
            }}
          />
        )}
        <PlayButton playing={playing} onToggle={play} />
        <GhostButton onClick={reset} color={SUB}>
          Reset
        </GhostButton>
      </div>

      {(data.variable || data.reaction || data.prompt) && (
        <p className="mb-2 text-[11px]" style={{ color: SUB }}>
          {data.reaction ? <span className="font-mono font-semibold" style={{ color: INK }}>{data.reaction}</span> : null}
          {data.reaction && (data.variable || data.prompt) ? ' · ' : ''}
          {data.variable ? <>changing <span className="font-semibold">{data.variable}</span></> : null}
        </p>
      )}

      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto w-full select-none"
        style={{ touchAction: 'none', cursor: 'ew-resize' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        role="img"
        aria-label={data.title ?? 'rate simulation'}
      >
        <rect x={PX0} y={PY1} width={PX1 - PX0} height={PY0 - PY1} fill={SURFACE} stroke={LINE} />

        {/* grid */}
        {xTicks.map((tk) => (
          <line key={`gx${tk}`} x1={sx(tk)} y1={PY1} x2={sx(tk)} y2={PY0} stroke={LINE} />
        ))}
        {yTicks.map((tk) => (
          <line key={`gy${tk}`} x1={PX0} y1={sy(tk)} x2={PX1} y2={sy(tk)} stroke={LINE} />
        ))}

        {/* zero line for titration (mV can dip below 0) */}
        {isTit && yr[0] < 0 && yr[1] > 0 && (
          <line x1={PX0} y1={sy(0)} x2={PX1} y2={sy(0)} stroke="#cbd5e1" strokeWidth={1} />
        )}

        {/* axes */}
        <line x1={PX0} y1={PY0} x2={PX1} y2={PY0} stroke={INK} strokeWidth={1.5} />
        <line x1={PX0} y1={PY0} x2={PX0} y2={PY1} stroke={INK} strokeWidth={1.5} />

        {/* tick labels */}
        {xTicks.map((tk) => (
          <text key={`xt${tk}`} x={sx(tk)} y={PY0 + 16} textAnchor="middle" fontSize={10} fill={SUB}>
            {fmt(tk, 0)}
          </text>
        ))}
        {yTicks.map((tk) => (
          <text key={`yt${tk}`} x={PX0 - 8} y={sy(tk) + 3} textAnchor="end" fontSize={10} fill={SUB}>
            {fmt(tk, 0)}
          </text>
        ))}

        {/* axis titles */}
        <text x={(PX0 + PX1) / 2} y={H - 10} textAnchor="middle" fontSize={11} fontWeight={600} fill={INK}>
          {xLab}
        </text>
        <text
          x={15}
          y={(PY0 + PY1) / 2}
          textAnchor="middle"
          fontSize={11}
          fontWeight={600}
          fill={INK}
          transform={`rotate(-90 15 ${(PY0 + PY1) / 2})`}
        >
          {yLab}
        </text>

        {/* equivalence marker (titration) */}
        {isTit && eqVol != null && eqVol >= xr[0] && eqVol <= xr[1] && (
          <g>
            <line x1={sx(eqVol)} y1={PY1} x2={sx(eqVol)} y2={PY0} stroke={PALETTE[1]} strokeWidth={1.25} strokeDasharray="4 3" />
            <text x={sx(eqVol)} y={PY1 + 12} textAnchor="middle" fontSize={9} fontWeight={700} fill={PALETTE[1]}>
              equivalence {fmt(eqVol, 0)}
            </text>
          </g>
        )}

        {/* area fill under the active gas-volume curve (cumulative feel) */}
        {mode === 'gasVolume' && activeCurve && overlay[activeCurve.id] && (() => {
          const pts = activeCurve.xs.filter((p) => p[0] <= drawnXMax + 1e-9)
          if (pts.length < 2) return null
          const d = `M${sx(pts[0][0])},${sy(yr[0])} ` + pts.map((p) => `L${sx(p[0])},${sy(p[1])}`).join(' ') + ` L${sx(pts[pts.length - 1][0])},${sy(yr[0])} Z`
          return <path d={d} fill={activeCurve.color} opacity={0.08} />
        })()}

        {/* curves */}
        {visibleCurves.map((c) => {
          if (mode === 'scatter') {
            return (
              <g key={c.id}>
                {bestFit && (
                  <line
                    x1={sx(bestFit[0][0])}
                    y1={sy(bestFit[0][1])}
                    x2={sx(bestFit[1][0])}
                    y2={sy(bestFit[1][1])}
                    stroke={PALETTE[4]}
                    strokeWidth={2}
                    strokeDasharray="6 4"
                  />
                )}
                {c.xs
                  .filter((p) => p[0] <= drawnXMax + 1e-9)
                  .map((p, i) => (
                    <circle key={`pt${i}`} cx={sx(p[0])} cy={sy(p[1])} r={4} fill={c.color} stroke="#fff" strokeWidth={1.25} />
                  ))}
              </g>
            )
          }
          const dPath = pathOf(c.xs)
          const isActive = c.id === active
          return (
            <path
              key={c.id}
              d={dPath}
              fill="none"
              stroke={c.color}
              strokeWidth={isActive ? 2.75 : 2}
              strokeLinejoin="round"
              opacity={isActive ? 1 : 0.7}
            />
          )
        })}

        {/* read-off crosshair on the active curve */}
        {cursorY != null && !Number.isNaN(cursorY) && (
          <g>
            <line x1={sx(cursorX)} y1={PY1} x2={sx(cursorX)} y2={PY0} stroke={activeCurve?.color ?? PRIMARY} strokeWidth={1.25} />
            <circle
              cx={sx(cursorX)}
              cy={sy(cursorY)}
              r={6}
              fill="#fff"
              stroke={activeCurve?.color ?? PRIMARY}
              strokeWidth={3}
              style={{ filter: 'drop-shadow(0 1px 2px rgba(15,23,42,0.25))' }}
            />
          </g>
        )}

        {/* play frontier dot */}
        {playing && frontierY != null && (
          <circle cx={sx(drawnXMax)} cy={sy(frontierY)} r={4} fill={activeCurve?.color ?? PRIMARY} />
        )}

        {/* decorative seeded particles for gas-volume (subtle) */}
        {mode === 'gasVolume' &&
          particles.map((p, i) => (
            <circle
              key={`pp${i}`}
              cx={PX0 + 12 + p[0] * (PX1 - PX0 - 24)}
              cy={PY1 + 8 + p[1] * 24}
              r={1.6}
              fill={activeCurve?.color ?? PRIMARY}
              opacity={0.25}
            />
          ))}
      </svg>

      {/* live readouts */}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <Readout label={xLab.split('/')[0].trim()} value={fmt(cursorX, 1)} color={activeCurve?.color ?? PRIMARY} />
        <Readout
          label={yLab.split('/')[0].trim()}
          value={cursorY == null ? '—' : fmt(cursorY, 1)}
          color={activeCurve?.color ?? PRIMARY}
        />
        {!isTit && activeCurve && (
          <span className="text-[11px]" style={{ color: SUB }}>
            on <span className="font-semibold" style={{ color: activeCurve.color }}>{activeCurve.label}</span>
          </span>
        )}
      </div>

      {/* free-text captions (never assessed) */}
      {(data.note || data.task || data.answer || data.trend || data.prompt || data.metric) && (
        <div className="mt-2 space-y-0.5 text-[11px]" style={{ color: SUB }}>
          {data.prompt && <p>{data.prompt}</p>}
          {data.task && <p>{data.task}</p>}
          {data.metric && !data.task && <p>{data.metric}</p>}
          {data.trend && <p>Trend: {data.trend}</p>}
          {data.note && <p>{data.note}</p>}
          {data.answer && <p>Answer: {data.answer}</p>}
        </div>
      )}
    </FigureCard>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ALTITUDE PROBE — vertical logger sub-component
// ─────────────────────────────────────────────────────────────────────────────
function AltitudeProbe({
  title,
  source,
  hint,
  altitudes,
  oxygen,
  layers,
  status,
  note,
}: {
  title?: string
  source?: string
  hint?: string
  altitudes: number[]
  oxygen: Record<string, number>
  layers: string[]
  status?: string
  note?: string
}) {
  const PW = 280
  const PH = 320
  const top = 16
  const bottom = PH - 24
  const maxAlt = altitudes.length ? Math.max(...altitudes) : 600
  const altY = useCallback(
    (a: number) => bottom - ((bottom - top) * a) / (maxAlt || 1),
    [bottom, top, maxAlt],
  )

  const [target, setTarget] = useState<number>(altitudes.length ? altitudes[0] : 0)
  const [logged, setLogged] = useState<number[]>([])
  const [probeAlt, setProbeAlt] = useState(0)
  const [running, setRunning] = useState(false)
  const [statusMsg, setStatusMsg] = useState(status ?? 'Ready for launch')

  useRaf(
    (dt) => {
      setProbeAlt((p) => {
        const np = p + dt * maxAlt * 0.5 // ~2s to top
        if (np >= target) {
          setRunning(false)
          setStatusMsg('Collection complete')
          setLogged((prev) => (prev.includes(target) ? prev : [...prev, target].sort((a, b) => a - b)))
          return target
        }
        setStatusMsg('Taking shots…')
        return np
      })
    },
    running,
  )

  const launch = useCallback(() => {
    setProbeAlt(0)
    setStatusMsg('Launching…')
    setRunning(true)
  }, [])
  const resetAll = useCallback(() => {
    setRunning(false)
    setProbeAlt(0)
    setLogged([])
    setStatusMsg(status ?? 'Ready for launch')
  }, [status])

  // layer bands divide the altitude range into equal stacked regions
  const bands = layers.length
    ? layers.map((name, i) => {
        const a0 = (maxAlt * i) / layers.length
        const a1 = (maxAlt * (i + 1)) / layers.length
        return { name, a0, a1 }
      })
    : []

  return (
    <FigureCard title={title} source={source} hint={hint}>
      <div className="flex flex-wrap items-center gap-2">
        <PlayButton playing={running} onToggle={running ? () => setRunning(false) : launch} labelPlay="Launch probe" labelPause="Rising…" />
        <GhostButton onClick={resetAll} color={SUB}>
          Reset
        </GhostButton>
        <span
          className="rounded-full px-2.5 py-1 text-[11px] font-bold"
          style={{ background: SURFACE, color: PRIMARY, border: `1px solid ${LINE}` }}
        >
          {statusMsg}
        </span>
      </div>

      {/* altitude picker */}
      <div className="mt-2 mb-2 flex flex-wrap gap-1.5">
        {altitudes.map((a, i) => {
          const on = a === target
          return (
            <button
              key={a}
              type="button"
              onClick={() => setTarget(a)}
              className="rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all"
              style={{
                background: on ? PRIMARY : '#fff',
                color: on ? '#fff' : '#475569',
                border: `1.5px solid ${PRIMARY}`,
                opacity: on ? 1 : 0.8,
              }}
            >
              {a} km
            </button>
          )
        })}
      </div>

      <div className="flex flex-wrap gap-4">
        {/* atmosphere column */}
        <svg viewBox={`0 0 ${PW} ${PH}`} style={{ width: PW, maxWidth: '100%', height: 'auto' }} role="img" aria-label="atmosphere probe">
          {/* layer bands */}
          {bands.map((b, i) => (
            <g key={b.name}>
              <rect
                x={40}
                y={altY(b.a1)}
                width={PW - 56}
                height={altY(b.a0) - altY(b.a1)}
                fill={colorAt(i)}
                opacity={0.07}
              />
              <text x={44} y={altY(b.a1) + 13} fontSize={9} fontWeight={700} fill={colorAt(i)}>
                {b.name}
              </text>
            </g>
          ))}
          {/* altitude axis */}
          <line x1={40} y1={top} x2={40} y2={bottom} stroke={INK} strokeWidth={1.25} />
          {altitudes.map((a) => (
            <g key={`am${a}`}>
              <line x1={36} y1={altY(a)} x2={40} y2={altY(a)} stroke={SUB} />
              <text x={33} y={altY(a) + 3} textAnchor="end" fontSize={8.5} fill={SUB}>
                {a}
              </text>
              {logged.includes(a) && (
                <text x={44} y={altY(a) + 3} fontSize={8.5} fontWeight={700} fill={PALETTE[3]}>
                  {fmt(oxygen[String(a)] ?? NaN, 1)}%
                </text>
              )}
            </g>
          ))}
          <text x={10} y={(top + bottom) / 2} textAnchor="middle" fontSize={9} fill={SUB} transform={`rotate(-90 10 ${(top + bottom) / 2})`}>
            Altitude / km
          </text>
          {/* probe */}
          <g style={{ transition: running ? 'none' : 'transform 200ms ease' }}>
            <line x1={PW - 14} y1={bottom} x2={PW - 14} y2={altY(probeAlt)} stroke={LINE} strokeDasharray="3 3" />
            <g transform={`translate(${PW - 14} ${altY(probeAlt)})`}>
              <circle r={7} fill={PRIMARY} stroke="#fff" strokeWidth={1.5} />
              <circle r={2.5} fill="#fff" />
            </g>
          </g>
        </svg>

        {/* data-logger table */}
        <div className="min-w-[150px] flex-1">
          <div className="text-[11px] font-bold uppercase tracking-wide" style={{ color: SUB }}>
            Data collection
          </div>
          <table className="mt-1 w-full text-[11px]" style={{ color: INK }}>
            <thead>
              <tr style={{ color: SUB }}>
                <th className="pr-3 text-left font-semibold">Altitude / km</th>
                <th className="text-left font-semibold">O₂ / %</th>
              </tr>
            </thead>
            <tbody>
              {altitudes.map((a) => {
                const done = logged.includes(a)
                return (
                  <tr key={`row${a}`} style={{ opacity: done ? 1 : 0.45 }}>
                    <td className="pr-3 font-mono">{a}</td>
                    <td className="font-mono" style={{ color: done ? PALETTE[3] : SUB }}>
                      {done ? fmt(oxygen[String(a)] ?? NaN, 1) : '—'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {note && <p className="mt-2 text-[11px]" style={{ color: SUB }}>{note}</p>}
    </FigureCard>
  )
}
