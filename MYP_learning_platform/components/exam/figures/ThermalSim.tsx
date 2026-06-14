'use client'

/**
 * ThermalSim — interactive thermal-process exam stimulus.
 *
 * Replaces IB temperature-vs-time figures (heating / cooling curves with melt/boil/
 * freezing plateaus), fractional-distillation columns, multi-probe cooling experiments,
 * read-the-thermometer tasks and time-driven state progressions (e.g. boiled eggs).
 *
 * Fully data-driven: every numeric label that comes through `data` renders EXACTLY as
 * given — interactivity (play, scrub, pick a fraction) never alters the assessed value.
 * SSR-safe: animation only via the kit's useRaf hook; any pseudo-randomness is seeded
 * deterministically from the data so the server and client render identically.
 */

import { useMemo, useRef, useState } from 'react'
import {
  FigureCard,
  PlayButton,
  GhostButton,
  Slider,
  Segmented,
  Readout,
  useRaf,
  PALETTE,
  colorAt,
  INK,
  SUB,
  LINE,
  SURFACE,
} from './_figureKit'

/* ------------------------------------------------------------------ data ---- */

export interface ThermalPlateau {
  /** plateau temperature in °C */
  atC?: number
  /** label e.g. "melting", "boiling", "freezing" */
  label?: string
  /** optional time window (used by cooling/freezing curves) */
  fromTime?: number
  toTime?: number
}

export interface ThermalMarker {
  id?: string
  /** time value on the x-axis */
  time?: number
  /** temperature in °C */
  tempC?: number
  /** state of matter at this marker */
  state?: string
}

export interface ThermalFraction {
  name?: string
  /** boiling point in °C (may also arrive as a string like "<40" / ">350") */
  boilC?: number | string
  use?: string
  chainLength?: string
}

export interface ThermalColumn {
  /** temperature at the top of the column (°C) */
  topC?: number
  /** temperature at the bottom of the column (°C) */
  bottomC?: number
  fractions?: ThermalFraction[]
}

export interface ThermalThermometer {
  label?: string
  units?: string
  /** correct reading, if this is a "read the scale" task */
  answer?: number
}

export interface ThermalProbe {
  liquid?: string
  startTempC?: number
  endTempC?: number
  minTempC?: number
  /** "flat" | "decay" | "dip-recover" | "rise" */
  behaviour?: string
  color?: string
}

export interface ThermalStateStop {
  time?: number
  /** primary descriptor shown big (e.g. yolk state) */
  primary?: string
  /** secondary descriptor (e.g. white state) */
  secondary?: string
}

export interface ThermalSimData {
  title?: string
  source?: string

  /** which experience to render */
  mode?: 'heat' | 'cool' | 'distill' | 'thermometer' | 'state'

  substance?: string

  // --- curve geometry (heat / cool) -----------------------------------------
  startTempC?: number
  endTempC?: number
  /** total time on the x-axis (max). Defaults sensibly. */
  totalTime?: number
  timeMin?: number
  timeUnit?: string
  tempUnit?: string
  /** explicit y-axis ticks (°C). If absent we derive them. */
  yTicksC?: number[]
  yMinC?: number
  yMaxC?: number
  /** plateaus (melt/boil/freeze) */
  plateaus?: ThermalPlateau[]
  /** explicit data points [time, tempC][] — overrides the synthesised curve */
  series?: [number, number][]
  /** second series (e.g. sample A vs B) */
  seriesB?: [number, number][]
  seriesLabel?: string
  seriesBLabel?: string
  /** labelled markers to call out on the curve */
  markers?: ThermalMarker[]

  // --- distillation ---------------------------------------------------------
  column?: ThermalColumn

  // --- read-the-thermometer -------------------------------------------------
  thermometers?: ThermalThermometer[]

  // --- multi-probe cooling --------------------------------------------------
  probes?: ThermalProbe[]
  labTempC?: number

  // --- time-driven state progression ----------------------------------------
  variable?: string
  stateMin?: number
  stateMax?: number
  stops?: ThermalStateStop[]
}

/* --------------------------------------------------------------- helpers ---- */

/** Deterministic PRNG (mulberry32) seeded from a fixed integer — SSR/CSR safe. */
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

/** Coerce a possibly-string boiling point ("<40", ">350", 110) to a number. */
function asNumber(v: number | string | undefined, fallback = 0): number {
  if (typeof v === 'number' && Number.isFinite(v)) return v
  if (typeof v === 'string') {
    const m = v.match(/-?\d+(\.\d+)?/)
    if (m) return parseFloat(m[0])
  }
  return fallback
}

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

/* ---------------------------------------------------------------- chart ----- */

const W = 560
const H = 320
const M = { l: 52, r: 20, t: 18, b: 40 }
const PW = W - M.l - M.r
const PH = H - M.t - M.b

/** Build a synthetic temperature-vs-time curve with plateaus when no series given. */
function synthCurve(
  startC: number,
  endC: number,
  totalT: number,
  plateaus: { atC: number; fromT: number; toT: number }[],
  heating: boolean,
): [number, number][] {
  const pts: [number, number][] = []
  const N = 80
  // segments: ramp -> plateau -> ramp -> plateau -> ... -> ramp
  const sorted = [...plateaus].sort((a, b) => a.fromT - b.fromT)
  for (let i = 0; i <= N; i++) {
    const t = (totalT * i) / N
    // is t inside a plateau window?
    const pl = sorted.find((p) => t >= p.fromT && t <= p.toT)
    if (pl) {
      pts.push([t, pl.atC])
      continue
    }
    // ramp: interpolate between the surrounding plateau temps (or endpoints)
    let loT = 0
    let loC = startC
    let hiT = totalT
    let hiC = endC
    for (const p of sorted) {
      if (p.toT <= t && p.toT >= loT) {
        loT = p.toT
        loC = p.atC
      }
    }
    for (let j = sorted.length - 1; j >= 0; j--) {
      const p = sorted[j]
      if (p.fromT >= t && p.fromT <= hiT) {
        hiT = p.fromT
        hiC = p.atC
      }
    }
    const span = hiT - loT || 1
    pts.push([t, lerp(loC, hiC, (t - loT) / span)])
  }
  void heating
  return pts
}

/* ============================================================== component === */

export default function ThermalSim({ data }: { data: ThermalSimData }) {
  const mode: NonNullable<ThermalSimData['mode']> = useMemo(() => {
    if (data.mode) return data.mode
    if (data.column?.fractions?.length) return 'distill'
    if (data.thermometers?.length) return 'thermometer'
    if (data.stops?.length) return 'state'
    if (data.probes?.length) return 'cool'
    // infer heat vs cool from the direction of travel
    const s = data.startTempC ?? 0
    const e = data.endTempC ?? 100
    return e < s ? 'cool' : 'heat'
  }, [data])

  const teal = PALETTE[0]
  const hint =
    mode === 'distill'
      ? 'Scrub the temperature up the column to vaporise crude oil and see which fraction condenses at its boiling point.'
      : mode === 'thermometer'
        ? 'Pick a thermometer and use the magnifier to read its scale.'
        : mode === 'state'
          ? 'Scrub the time slider to watch the process progress.'
          : 'Press play (or scrub time) to draw the temperature-vs-time curve; plateaus mark the phase changes.'

  return (
    <FigureCard title={data.title} source={data.source} hint={hint}>
      {mode === 'distill' ? (
        <DistillView data={data} accent={teal} />
      ) : mode === 'thermometer' ? (
        <ThermometerView data={data} accent={teal} />
      ) : mode === 'state' ? (
        <StateView data={data} accent={teal} />
      ) : (
        <CurveView data={data} mode={mode} accent={teal} />
      )}
    </FigureCard>
  )
}

/* ---------------------------------------------------- temperature curve ----- */

function CurveView({
  data,
  mode,
  accent,
}: {
  data: ThermalSimData
  mode: 'heat' | 'cool'
  accent: string
}) {
  const tempUnit = data.tempUnit ?? '°C'
  const timeUnit = data.timeUnit ?? 'min'

  // ----- assemble the probes (multi-probe) OR a single synthesised/explicit curve
  const probes = data.probes ?? []
  const isMulti = probes.length > 0

  // time domain
  const totalT = useMemo(() => {
    if (data.totalTime != null) return data.totalTime
    const fromSeries = [data.series, data.seriesB].flatMap((s) => s ?? []).map((p) => p[0])
    if (fromSeries.length) return Math.max(...fromSeries)
    const fromPlateaus = (data.plateaus ?? []).flatMap((p) => [p.fromTime ?? 0, p.toTime ?? 0])
    if (fromPlateaus.length) return Math.max(10, ...fromPlateaus) + 2
    return 10
  }, [data.totalTime, data.series, data.seriesB, data.plateaus])
  const timeMin = data.timeMin ?? 0

  // temperature domain
  const { yMin, yMax, yTicks } = useMemo(() => {
    let ticks = data.yTicksC
    const allTemps: number[] = []
    ;[data.series, data.seriesB].forEach((s) => s?.forEach((p) => allTemps.push(p[1])))
    if (data.startTempC != null) allTemps.push(data.startTempC)
    if (data.endTempC != null) allTemps.push(data.endTempC)
    ;(data.plateaus ?? []).forEach((p) => p.atC != null && allTemps.push(p.atC))
    probes.forEach((p) => {
      ;[p.startTempC, p.endTempC, p.minTempC].forEach((v) => v != null && allTemps.push(v))
    })
    let lo = data.yMinC ?? (ticks?.length ? Math.min(...ticks) : allTemps.length ? Math.min(...allTemps) : 0)
    let hi = data.yMaxC ?? (ticks?.length ? Math.max(...ticks) : allTemps.length ? Math.max(...allTemps) : 100)
    if (hi <= lo) hi = lo + 10
    // small padding when derived
    if (data.yMinC == null && !ticks?.length) lo = Math.floor(lo - (hi - lo) * 0.05)
    if (data.yMaxC == null && !ticks?.length) hi = Math.ceil(hi + (hi - lo) * 0.05)
    if (!ticks || !ticks.length) {
      const n = 4
      ticks = Array.from({ length: n + 1 }, (_, i) => Math.round(lerp(lo, hi, i / n)))
    }
    return { yMin: lo, yMax: hi, yTicks: ticks }
  }, [data.yTicksC, data.series, data.seriesB, data.startTempC, data.endTempC, data.plateaus, data.yMinC, data.yMaxC, probes])

  // ----- coordinate transforms
  const x = (t: number) => M.l + (PW * (t - timeMin)) / (totalT - timeMin || 1)
  const y = (c: number) => M.t + PH * (1 - (c - yMin) / (yMax - yMin || 1))

  // ----- build curve datasets
  const curves = useMemo(() => {
    if (isMulti) {
      return probes.map((p, i) => {
        const c = p.color ?? colorAt(i)
        const s = p.startTempC ?? data.labTempC ?? yMax
        const e = p.endTempC ?? s
        const mn = p.minTempC
        const rng = mulberry32(0x9e37 + i * 101 + Math.round(s * 7))
        const pts: [number, number][] = []
        const N = 60
        for (let k = 0; k <= N; k++) {
          const tt = k / N
          const t = lerp(timeMin, totalT, tt)
          let temp: number
          switch (p.behaviour) {
            case 'flat':
              temp = lerp(s, e, tt)
              break
            case 'dip-recover': {
              const bottom = mn ?? Math.min(s, e)
              // fall to min around 45% then recover toward e
              temp = tt < 0.45 ? lerp(s, bottom, tt / 0.45) : lerp(bottom, e, (tt - 0.45) / 0.55)
              break
            }
            case 'rise':
              temp = lerp(s, e, tt)
              break
            case 'decay':
            default:
              temp = e + (s - e) * Math.exp(-3.2 * tt)
              break
          }
          // tiny deterministic jitter so curves look like real probe data
          temp += (rng() - 0.5) * (yMax - yMin) * 0.004
          pts.push([t, temp])
        }
        return { label: p.liquid ?? `probe ${i + 1}`, color: c, pts }
      })
    }
    // single curve
    if (data.series && data.series.length) {
      const list: { label: string; color: string; pts: [number, number][] }[] = [
        { label: data.seriesLabel ?? data.substance ?? 'temperature', color: accent, pts: data.series },
      ]
      if (data.seriesB && data.seriesB.length)
        list.push({ label: data.seriesBLabel ?? 'sample B', color: PALETTE[1], pts: data.seriesB })
      return list
    }
    // synthesise from start/end + plateaus
    const heating = mode === 'heat'
    const start = data.startTempC ?? (heating ? yMin : yMax)
    const end = data.endTempC ?? (heating ? yMax : yMin)
    const pls = (data.plateaus ?? []).map((p, i) => {
      const atC = p.atC ?? lerp(start, end, (i + 1) / ((data.plateaus?.length ?? 1) + 1))
      const fromT = p.fromTime ?? lerp(timeMin, totalT, (i + 0.7) / ((data.plateaus?.length ?? 1) + 1))
      const toT = p.toTime ?? lerp(timeMin, totalT, (i + 1.3) / ((data.plateaus?.length ?? 1) + 1))
      return { atC, fromT, toT }
    })
    return [
      {
        label: data.substance ?? (heating ? 'heating' : 'cooling'),
        color: accent,
        pts: synthCurve(start, end, totalT, pls, heating),
      },
    ]
  }, [isMulti, probes, data, mode, accent, yMin, yMax, totalT, timeMin])

  // ----- animation: progress 0..1 reveals the curve left-to-right
  const [progress, setProgress] = useState(1)
  const [playing, setPlaying] = useState(false)
  useRaf((dt) => {
    setProgress((p) => {
      const np = p + dt / 6 // ~6s sweep
      if (np >= 1) {
        setPlaying(false)
        return 1
      }
      return np
    })
  }, playing)

  const curT = lerp(timeMin, totalT, progress)

  // current temp of the primary curve at curT
  const primary = curves[0]
  const curTemp = useMemo(() => {
    if (!primary?.pts.length) return yMin
    const pts = primary.pts
    for (let i = 1; i < pts.length; i++) {
      if (pts[i][0] >= curT) {
        const [t0, c0] = pts[i - 1]
        const [t1, c1] = pts[i]
        const f = t1 === t0 ? 0 : (curT - t0) / (t1 - t0)
        return lerp(c0, c1, f)
      }
    }
    return pts[pts.length - 1][1]
  }, [primary, curT, yMin])

  // visible (clipped) path up to progress
  const pathUpTo = (pts: [number, number][]) => {
    const vis = pts.filter((p) => p[0] <= curT + 1e-6)
    if (vis.length && vis[vis.length - 1][0] < curT && pts.length > vis.length) {
      // add interpolated head point at curT
      const next = pts[vis.length]
      const prev = vis[vis.length - 1]
      const f = (curT - prev[0]) / (next[0] - prev[0] || 1)
      vis.push([curT, lerp(prev[1], next[1], f)])
    }
    if (!vis.length) return ''
    return vis.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(p[0]).toFixed(1)},${y(p[1]).toFixed(1)}`).join(' ')
  }

  const plateaus = data.plateaus ?? []
  const markers = data.markers ?? []

  const therY = y(curTemp)

  return (
    <div className="select-none">
      {/* controls */}
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <PlayButton
          playing={playing}
          onToggle={() => {
            if (progress >= 1) setProgress(0)
            setPlaying((p) => !p)
          }}
          color={accent}
        />
        <GhostButton
          color={accent}
          onClick={() => {
            setPlaying(false)
            setProgress(0)
          }}
        >
          ↺ Reset
        </GhostButton>
        <div className="ml-auto flex flex-wrap gap-2">
          <Readout label="Time" value={curT.toFixed(curT < 10 ? 1 : 0)} unit={timeUnit} color={accent} />
          {!isMulti && (
            <Readout label="Temp" value={curTemp.toFixed(curTemp % 1 === 0 ? 0 : 1)} unit={tempUnit} color={PALETTE[1]} />
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={data.title ?? 'temperature curve'}>
          {/* plot border */}
          <rect x={M.l} y={M.t} width={PW} height={PH} fill={SURFACE} stroke={LINE} />

          {/* y gridlines + ticks */}
          {yTicks.map((tk) => (
            <g key={`y${tk}`}>
              <line x1={M.l} y1={y(tk)} x2={M.l + PW} y2={y(tk)} stroke={LINE} strokeDasharray="3 3" />
              <text x={M.l - 6} y={y(tk) + 3} textAnchor="end" fontSize={10} fill={SUB}>
                {tk}
              </text>
            </g>
          ))}

          {/* plateau guide lines + labels */}
          {plateaus.map((p, i) =>
            p.atC == null ? null : (
              <g key={`pl${i}`}>
                <line x1={M.l} y1={y(p.atC)} x2={M.l + PW} y2={y(p.atC)} stroke={PALETTE[2]} strokeWidth={1} strokeDasharray="5 4" opacity={0.7} />
                <text x={M.l + PW - 4} y={y(p.atC) - 4} textAnchor="end" fontSize={10} fontWeight={700} fill={PALETTE[2]}>
                  {(p.label ? p.label + ' ' : '') + p.atC + tempUnit}
                </text>
              </g>
            ),
          )}

          {/* axes */}
          <line x1={M.l} y1={M.t + PH} x2={M.l + PW} y2={M.t + PH} stroke={INK} strokeWidth={1.2} />
          <line x1={M.l} y1={M.t} x2={M.l} y2={M.t + PH} stroke={INK} strokeWidth={1.2} />
          <text x={M.l + PW / 2} y={H - 6} textAnchor="middle" fontSize={11} fontWeight={600} fill={SUB}>
            Time / {timeUnit}
          </text>
          <text x={14} y={M.t + PH / 2} textAnchor="middle" fontSize={11} fontWeight={600} fill={SUB} transform={`rotate(-90 14 ${M.t + PH / 2})`}>
            Temperature / {tempUnit}
          </text>

          {/* x ticks */}
          {Array.from({ length: 5 }, (_, i) => {
            const t = lerp(timeMin, totalT, i / 4)
            return (
              <text key={`x${i}`} x={x(t)} y={M.t + PH + 14} textAnchor="middle" fontSize={10} fill={SUB}>
                {Number.isInteger(t) ? t : t.toFixed(1)}
              </text>
            )
          })}

          {/* curves (revealed up to progress) */}
          {curves.map((c, i) => (
            <g key={`c${i}`}>
              <path d={pathUpTo(c.pts)} fill="none" stroke={c.color} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
              {/* leading dot */}
              {progress > 0 && (
                <circle cx={x(curT)} cy={y(i === 0 ? curTemp : interpAt(c.pts, curT))} r={i === 0 ? 4.5 : 3.5} fill={c.color} stroke="#fff" strokeWidth={1.5} />
              )}
            </g>
          ))}

          {/* labelled markers */}
          {markers.map((m, i) =>
            m.time == null || m.tempC == null ? null : (
              <g key={`m${i}`}>
                <circle cx={x(m.time)} cy={y(m.tempC)} r={4} fill="#fff" stroke={INK} strokeWidth={1.5} />
                <text x={x(m.time) + 6} y={y(m.tempC) - 6} fontSize={10} fontWeight={700} fill={INK}>
                  {m.id ?? ''}
                  {m.state ? ` (${m.state})` : ''}
                </text>
              </g>
            ),
          )}
        </svg>

        {/* thermometer sidecar for single-curve mode */}
        {!isMulti && (
          <Thermometer minC={yMin} maxC={yMax} tempC={curTemp} unit={tempUnit} accent={PALETTE[1]} ySvg={therY} />
        )}
      </div>

      {/* scrub slider */}
      <div className="mt-3">
        <Slider
          label="Scrub time"
          min={0}
          max={1}
          step={0.001}
          value={progress}
          onChange={(v) => {
            setPlaying(false)
            setProgress(v)
          }}
          color={accent}
          format={() => `${curT.toFixed(curT < 10 ? 1 : 0)} ${timeUnit}`}
        />
      </div>

      {/* multi-probe legend */}
      {isMulti && (
        <div className="mt-2 flex flex-wrap gap-3">
          {curves.map((c, i) => (
            <span key={`lg${i}`} className="inline-flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: INK }}>
              <span style={{ width: 14, height: 3, borderRadius: 2, background: c.color, display: 'inline-block' }} />
              {c.label}
              <span className="font-mono" style={{ color: SUB }}>
                {interpAt(c.pts, curT).toFixed(1)}
                {tempUnit}
              </span>
            </span>
          ))}
          {data.labTempC != null && (
            <span className="text-[11px]" style={{ color: SUB }}>
              lab temp {data.labTempC}
              {tempUnit}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

function interpAt(pts: [number, number][], t: number): number {
  if (!pts.length) return 0
  for (let i = 1; i < pts.length; i++) {
    if (pts[i][0] >= t) {
      const [t0, c0] = pts[i - 1]
      const [t1, c1] = pts[i]
      const f = t1 === t0 ? 0 : (t - t0) / (t1 - t0)
      return lerp(c0, c1, f)
    }
  }
  return pts[pts.length - 1][1]
}

/** Vertical mercury thermometer that tracks the current temperature. */
function Thermometer({
  minC,
  maxC,
  tempC,
  unit,
  accent,
}: {
  minC: number
  maxC: number
  tempC: number
  unit: string
  accent: string
  ySvg?: number
}) {
  const TW = 46
  const TH = H
  const bulbR = 12
  const stemX = TW / 2
  const top = 18
  const bottom = TH - 34
  const frac = clamp((tempC - minC) / (maxC - minC || 1), 0, 1)
  const mercuryY = lerp(bottom, top, frac)
  return (
    <svg viewBox={`0 0 ${TW} ${TH}`} width={TW} className="shrink-0" role="img" aria-label="thermometer">
      {/* stem */}
      <rect x={stemX - 5} y={top - 4} width={10} height={bottom - top + 8} rx={5} fill="#fff" stroke={LINE} />
      {/* mercury column */}
      <rect x={stemX - 3} y={mercuryY} width={6} height={bottom - mercuryY} fill={accent} />
      {/* bulb */}
      <circle cx={stemX} cy={bottom + bulbR} r={bulbR} fill={accent} stroke="#fff" strokeWidth={1.5} />
      {/* readout */}
      <text x={stemX} y={mercuryY - 6} textAnchor="middle" fontSize={9} fontWeight={700} fill={INK}>
        {tempC.toFixed(tempC % 1 === 0 ? 0 : 1)}
        {unit}
      </text>
    </svg>
  )
}

/* ---------------------------------------------------- distillation column --- */

function DistillView({ data, accent }: { data: ThermalSimData; accent: string }) {
  const col = data.column ?? {}
  const fractions = useMemo(
    () =>
      (col.fractions ?? []).map((f, i) => ({
        name: f.name ?? `fraction ${i + 1}`,
        boil: asNumber(f.boilC, lerp(asNumber(col.bottomC, 350), asNumber(col.topC, 40), i / Math.max(1, (col.fractions?.length ?? 1) - 1))),
        rawBoil: f.boilC,
        use: f.use,
        chain: f.chainLength,
      })),
    [col],
  )
  const topC = asNumber(col.topC, fractions.length ? Math.min(...fractions.map((f) => f.boil)) : 40)
  const bottomC = asNumber(col.bottomC, fractions.length ? Math.max(...fractions.map((f) => f.boil)) : 350)

  const [vaporC, setVaporC] = useState(Math.round(lerp(topC, bottomC, 0.5)))

  // a fraction condenses where the column temperature first drops to its boiling point
  // (rising vapour cools as it climbs). The "active" fraction = nearest boiling pt <= vaporC.
  const activeIdx = useMemo(() => {
    let best = -1
    let bestD = Infinity
    fractions.forEach((f, i) => {
      if (f.boil <= vaporC + 1e-6) {
        const d = vaporC - f.boil
        if (d < bestD) {
          bestD = d
          best = i
        }
      }
    })
    return best
  }, [fractions, vaporC])

  // geometry: tall column, hottest at bottom
  const CW = 520
  const CH = 300
  const colX = 150
  const colW = 130
  const colTop = 20
  const colBot = CH - 30
  const yFor = (c: number) => lerp(colBot, colTop, clamp((c - bottomC) / (topC - bottomC || 1), 0, 1))

  return (
    <div className="select-none">
      <div className="mb-2">
        <Slider
          label="Vapour temperature rising up the column"
          min={Math.round(topC)}
          max={Math.round(bottomC)}
          step={1}
          value={vaporC}
          onChange={setVaporC}
          unit="°C"
          color={accent}
        />
      </div>

      <svg viewBox={`0 0 ${CW} ${CH}`} className="block h-auto w-full" role="img" aria-label="fractional distillation column">
        <defs>
          <linearGradient id="thermal-col-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="100%" stopColor="#fed7aa" />
          </linearGradient>
        </defs>

        {/* column body */}
        <rect x={colX} y={colTop} width={colW} height={colBot - colTop} rx={6} fill="url(#thermal-col-grad)" stroke={INK} strokeWidth={1.5} />

        {/* temperature labels at top/bottom */}
        <text x={colX - 8} y={colTop + 12} textAnchor="end" fontSize={11} fontWeight={700} fill={PALETTE[4]}>
          {topC}°C
        </text>
        <text x={colX - 8} y={colBot - 2} textAnchor="end" fontSize={11} fontWeight={700} fill={PALETTE[1]}>
          {bottomC}°C
        </text>
        <text x={colX - 8} y={(colTop + colBot) / 2} textAnchor="end" fontSize={10} fill={SUB} transform={`rotate(-90 ${colX - 30} ${(colTop + colBot) / 2})`}>
          cool ↑ / hot ↓
        </text>

        {/* trays + fraction outlets */}
        {fractions.map((f, i) => {
          const yy = yFor(f.boil)
          const active = i === activeIdx
          return (
            <g key={`fr${i}`}>
              {/* tray line */}
              <line x1={colX} y1={yy} x2={colX + colW} y2={yy} stroke={INK} strokeWidth={active ? 2 : 0.8} opacity={active ? 1 : 0.4} />
              {/* outlet pipe */}
              <line x1={colX + colW} y1={yy} x2={colX + colW + 26} y2={yy} stroke={active ? accent : SUB} strokeWidth={active ? 3 : 1.4} />
              {/* outlet droplet when active */}
              {active && <circle cx={colX + colW + 26} cy={yy} r={4} fill={accent} />}
              {/* fraction label */}
              <text
                x={colX + colW + 32}
                y={yy + 3}
                fontSize={11}
                fontWeight={active ? 800 : 500}
                fill={active ? INK : SUB}
              >
                {f.name}
                <tspan fontSize={9} fontWeight={500} fill={SUB}>
                  {'  '}
                  {typeof f.rawBoil === 'string' ? f.rawBoil : `${f.boil}°C`}
                </tspan>
              </text>
            </g>
          )
        })}

        {/* rising-vapour level indicator */}
        <line x1={colX - 4} y1={yFor(vaporC)} x2={colX + colW + 4} y2={yFor(vaporC)} stroke={accent} strokeWidth={2} strokeDasharray="6 4" />
        <circle cx={colX} cy={yFor(vaporC)} r={5} fill={accent} stroke="#fff" strokeWidth={1.5} />
        <text x={colX + colW / 2} y={yFor(vaporC) - 5} textAnchor="middle" fontSize={10} fontWeight={700} fill={accent}>
          vapour {vaporC}°C
        </text>

        {/* crude oil inlet + furnace at bottom */}
        <rect x={colX + colW / 2 - 26} y={colBot} width={52} height={16} rx={3} fill={PALETTE[7]} />
        <text x={colX + colW / 2} y={colBot + 12} textAnchor="middle" fontSize={9} fontWeight={700} fill="#fff">
          crude oil
        </text>
      </svg>

      <div className="mt-2 rounded-lg px-3 py-2 text-sm" style={{ background: SURFACE, border: `1px solid ${LINE}`, borderLeft: `4px solid ${accent}` }}>
        {activeIdx >= 0 ? (
          <span style={{ color: INK }}>
            At <b>{vaporC}°C</b>, <b style={{ color: accent }}>{fractions[activeIdx].name}</b> condenses
            {typeof fractions[activeIdx].rawBoil === 'number' ? ` (boiling point ${fractions[activeIdx].boil}°C)` : ''}.
            {fractions[activeIdx].use ? ` Used for ${fractions[activeIdx].use}.` : ''}
          </span>
        ) : (
          <span style={{ color: SUB }}>Below the lowest boiling point — gases pass straight out the top of the column.</span>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------ read thermometer ---- */

function ThermometerView({ data, accent }: { data: ThermalSimData; accent: string }) {
  const therms = data.thermometers ?? []
  const [selected, setSelected] = useState(0)
  const [magnified, setMagnified] = useState(false)

  const sel = therms[selected]
  const reading = sel ? (typeof sel.answer === 'number' ? sel.answer : parseFloat(sel.label ?? '')) : NaN
  const knownReadings = therms.map((t) => (typeof t.answer === 'number' ? t.answer : parseFloat(t.label ?? ''))).filter((v) => Number.isFinite(v))
  const scaleMin = knownReadings.length ? Math.floor(Math.min(...knownReadings) / 10) * 10 - 10 : 0
  const scaleMax = knownReadings.length ? Math.ceil(Math.max(...knownReadings) / 10) * 10 + 10 : 100

  return (
    <div className="select-none">
      <div className="mb-3 flex flex-wrap gap-2">
        {therms.map((t, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setSelected(i)
              setMagnified(false)
            }}
            className="rounded-lg px-3 py-1.5 text-xs font-bold transition-all"
            style={{
              background: i === selected ? accent : '#fff',
              color: i === selected ? '#fff' : INK,
              border: `1.5px solid ${accent}`,
            }}
          >
            {t.label}
            {t.units ? `°${t.units}` : ''}
          </button>
        ))}
      </div>

      {sel && (
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 80 280" width={80} className="shrink-0" role="img" aria-label={`thermometer ${sel.label}`}>
            {(() => {
              const top = 14
              const bottom = 240
              const stemX = 40
              const val = Number.isFinite(reading) ? reading : (scaleMin + scaleMax) / 2
              const frac = clamp((val - scaleMin) / (scaleMax - scaleMin || 1), 0, 1)
              const merc = lerp(bottom, top, frac)
              return (
                <>
                  <rect x={stemX - 7} y={top - 6} width={14} height={bottom - top + 12} rx={7} fill="#fff" stroke={LINE} strokeWidth={1.5} />
                  <rect x={stemX - 4} y={merc} width={8} height={bottom - merc} fill={accent} />
                  <circle cx={stemX} cy={bottom + 16} r={16} fill={accent} stroke="#fff" strokeWidth={2} />
                  {/* scale ticks */}
                  {Array.from({ length: 6 }, (_, i) => {
                    const tc = lerp(scaleMin, scaleMax, i / 5)
                    const ty = lerp(bottom, top, i / 5)
                    return (
                      <g key={i}>
                        <line x1={stemX + 7} y1={ty} x2={stemX + 13} y2={ty} stroke={INK} strokeWidth={1} />
                        <text x={stemX + 16} y={ty + 3} fontSize={9} fill={SUB}>
                          {Math.round(tc)}
                        </text>
                      </g>
                    )
                  })}
                  {/* level pointer when magnified or known */}
                  {(magnified || typeof sel.answer === 'number') && Number.isFinite(reading) && (
                    <text x={stemX - 10} y={merc + 3} textAnchor="end" fontSize={11} fontWeight={800} fill={INK}>
                      {reading}°
                    </text>
                  )}
                </>
              )
            })()}
          </svg>

          <div className="flex flex-col gap-2">
            {sel.label === '?' || sel.answer != null ? (
              <>
                <GhostButton color={accent} onClick={() => setMagnified((m) => !m)}>
                  🔍 {magnified ? 'Hide' : 'Click to magnify & read'}
                </GhostButton>
                {magnified && typeof sel.answer === 'number' && (
                  <Readout label="Reading" value={sel.answer} unit={`°${sel.units ?? 'C'}`} color={accent} />
                )}
              </>
            ) : (
              <Readout label="Reading" value={sel.label ?? '—'} unit={`°${sel.units ?? 'C'}`} color={accent} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

/* --------------------------------------------------- time-state scrubber ---- */

function StateView({ data, accent }: { data: ThermalSimData; accent: string }) {
  const stops = useMemo(() => [...(data.stops ?? [])].sort((a, b) => (a.time ?? 0) - (b.time ?? 0)), [data.stops])
  const min = data.stateMin ?? (stops.length ? stops[0].time ?? 0 : 0)
  const max = data.stateMax ?? (stops.length ? stops[stops.length - 1].time ?? 15 : 15)
  const [t, setT] = useState(min)

  // pick the most-recent stop at or before t
  const active = useMemo(() => {
    let cur: ThermalStateStop | undefined
    for (const s of stops) {
      if ((s.time ?? 0) <= t) cur = s
      else break
    }
    return cur ?? stops[0]
  }, [stops, t])

  const frac = clamp((t - min) / (max - min || 1), 0, 1)

  return (
    <div className="select-none">
      <div className="mb-3">
        <Slider
          label={data.variable ?? 'Time'}
          min={min}
          max={max}
          step={1}
          value={t}
          onChange={setT}
          unit={data.timeUnit ?? 'min'}
          color={accent}
        />
      </div>

      {/* progress bar with stop ticks */}
      <svg viewBox="0 0 560 60" className="block h-auto w-full" role="img" aria-label="progression">
        <line x1={20} y1={30} x2={540} y2={30} stroke={LINE} strokeWidth={6} strokeLinecap="round" />
        <line x1={20} y1={30} x2={20 + 520 * frac} y2={30} stroke={accent} strokeWidth={6} strokeLinecap="round" />
        {stops.map((s, i) => {
          const f = clamp(((s.time ?? 0) - min) / (max - min || 1), 0, 1)
          const sx = 20 + 520 * f
          const on = (s.time ?? 0) <= t
          return (
            <g key={i}>
              <circle cx={sx} cy={30} r={on ? 6 : 4} fill={on ? accent : '#fff'} stroke={accent} strokeWidth={1.5} />
              <text x={sx} y={52} textAnchor="middle" fontSize={9} fill={SUB}>
                {s.time}
              </text>
            </g>
          )
        })}
        <circle cx={20 + 520 * frac} cy={30} r={9} fill="#fff" stroke={accent} strokeWidth={3} />
      </svg>

      {active && (
        <div className="mt-2 rounded-lg px-3 py-2.5 text-sm" style={{ background: SURFACE, border: `1px solid ${LINE}`, borderLeft: `4px solid ${accent}` }}>
          <div className="flex items-baseline gap-2">
            <span className="rounded px-1.5 py-0.5 text-[11px] font-bold" style={{ background: accent, color: '#fff' }}>
              {active.time} {data.timeUnit ?? 'min'}
            </span>
            {active.primary && (
              <span className="font-bold" style={{ color: INK }}>
                {active.primary}
              </span>
            )}
          </div>
          {active.secondary && (
            <p className="mt-1 text-[12px]" style={{ color: SUB }}>
              {active.secondary}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
