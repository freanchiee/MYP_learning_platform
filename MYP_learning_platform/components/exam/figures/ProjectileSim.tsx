'use client'

/**
 * ProjectileSim — interactive projectile / gravity stimulus for MYP physics papers.
 *
 * Three render modes, all data-driven:
 *  - "drop":   an object falls a fixed height; a Segmented planet/gravity picker changes g
 *              and the fall time; the object animates against a labelled distance scale and
 *              the fall time is read out. (e.g. space-probe drop sim → derive g.)
 *  - "launch": angle + speed sliders draw a live parabolic trajectory; readout of max height
 *              and range. (e.g. spring/ball launcher → angle vs max height.)
 *  - "bounce": a drop-height slider drops a ball that bounces back to a fraction of the drop
 *              height; readout of bounce height. (e.g. basketball/tennis drop-and-bounce.)
 *
 * The component is defensive: every field is optional with a sane default, the mode is
 * inferred from whatever data is present, and it renders something correct even when partial.
 * SSR-safe (rAF only via the kit's useRaf; no module-scope window/RNG).
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
  INK,
  SUB,
  LINE,
  SURFACE,
} from './_figureKit'

export interface ProjectilePlanet {
  name: string
  g: number
  /** fall time over the drop height, in seconds. If omitted, derived from sqrt(2h/g). */
  fallTime_s?: number
}

export interface ProjectileLaunch {
  angleDeg?: number
  speed?: number
  /** sensible slider bounds; defaults applied when absent. */
  angleMin?: number
  angleMax?: number
  speedMin?: number
  speedMax?: number
  /** gravitational field strength for the launch (m/s^2). */
  g?: number
}

export interface ProjectileBounce {
  /** fraction of the drop height reached on the first bounce (0..1). */
  reboundFraction?: number
  dropHeight_m?: number
  dropHeightMin_m?: number
  dropHeightMax_m?: number
}

export type ProjectileMode = 'drop' | 'launch' | 'bounce'

export interface ProjectileSimData {
  title?: string
  source?: string
  mode?: ProjectileMode | string
  /** drop mode */
  dropHeight_m?: number
  scaleMarks_m?: number[]
  planets?: ProjectilePlanet[]
  /** launch mode */
  launch?: ProjectileLaunch
  /** bounce mode */
  bounce?: ProjectileBounce
  /** acceleration due to gravity if no planet picker (m/s^2). */
  g?: number
  /** optional readout label override (e.g. "time / s"). */
  readout?: string
}

const TEAL = PALETTE[0]
const ORANGE = PALETTE[1]
const PURPLE = PALETTE[2]

// SVG canvas
const W = 560
const H = 320

/** Normalise an incoming mode string to one of the three supported modes. */
function resolveMode(data: ProjectileSimData): ProjectileMode {
  const m = (data.mode ?? '').toLowerCase()
  if (m.includes('bounce')) return 'bounce'
  if (m.includes('launch') || m.includes('ramp') || m.includes('slide') || m.includes('trajectory')) return 'launch'
  if (m.includes('drop')) return 'drop'
  // Infer from payload shape.
  if (data.bounce) return 'bounce'
  if (data.launch) return 'launch'
  if (data.planets?.length) return 'drop'
  if (data.dropHeight_m != null) return 'drop'
  return 'drop'
}

const fmt = (v: number, dp = 1) => (Number.isFinite(v) ? v.toFixed(dp) : '—')

export default function ProjectileSim({ data }: { data: ProjectileSimData }) {
  const mode = resolveMode(data)

  return (
    <FigureCard
      title={data.title}
      source={data.source}
      hint={
        mode === 'drop'
          ? 'Pick a planet to change gravity, then press Play to drop the object and read the fall time.'
          : mode === 'launch'
            ? 'Adjust the launch angle and speed, then press Play to watch the trajectory and read the max height and range.'
            : 'Set the drop height, then press Play to drop the ball and watch it bounce back to a fraction of that height.'
      }
    >
      {mode === 'drop' ? (
        <DropMode data={data} />
      ) : mode === 'launch' ? (
        <LaunchMode data={data} />
      ) : (
        <BounceMode data={data} />
      )}
    </FigureCard>
  )
}

/* ------------------------------------------------------------------ DROP --- */

function DropMode({ data }: { data: ProjectileSimData }) {
  const dropHeight = data.dropHeight_m != null && data.dropHeight_m > 0 ? data.dropHeight_m : 100
  const marks = useMemo(() => {
    const m = (data.scaleMarks_m ?? []).filter((v) => Number.isFinite(v))
    if (m.length >= 2) return [...m].sort((a, b) => a - b)
    // synthesise an even 0..dropHeight scale
    const step = dropHeight / 5
    return [0, 1, 2, 3, 4, 5].map((i) => +(i * step).toFixed(2))
  }, [data.scaleMarks_m, dropHeight])
  const maxMark = marks[marks.length - 1] || dropHeight

  const planets: ProjectilePlanet[] = useMemo(() => {
    if (data.planets?.length) return data.planets
    const g = data.g ?? 9.8
    return [{ name: 'Surface', g }]
  }, [data.planets, data.g])

  const [sel, setSel] = useState(() => {
    const earth = planets.findIndex((p) => /earth/i.test(p.name))
    return earth >= 0 ? earth : 0
  })
  const planet = planets[Math.min(sel, planets.length - 1)] ?? planets[0]
  const g = planet?.g ?? 9.8
  const fallTime =
    planet?.fallTime_s != null && planet.fallTime_s > 0 ? planet.fallTime_s : Math.sqrt((2 * dropHeight) / g)

  const [t, setT] = useState(0) // elapsed sim time (s)
  const [playing, setPlaying] = useState(false)

  useRaf((dt) => {
    setT((prev) => {
      const next = prev + dt
      if (next >= fallTime) {
        setPlaying(false)
        return fallTime
      }
      return next
    })
  }, playing)

  // fraction fallen (0 at top, 1 at ground)
  const frac = fallTime > 0 ? Math.min(1, (g * t * t) / (2 * dropHeight)) : 0
  const fallen = Math.min(dropHeight, 0.5 * g * t * t)

  // geometry: vertical scale on the left, object falls down the right side
  const topY = 28
  const groundY = H - 44
  const yFor = (height_m: number) => groundY - (height_m / maxMark) * (groundY - topY)
  const objX = W * 0.62
  const objY = topY + frac * (groundY - topY)

  const restart = () => {
    setT(0)
    setPlaying(true)
  }
  const reset = () => {
    setT(0)
    setPlaying(false)
  }

  const readoutLabel = data.readout ?? 'Fall time'

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="text-xs font-semibold" style={{ color: INK }}>
          Planet
        </span>
        <Segmented
          options={planets.map((p, i) => ({ value: String(i), label: p.name }))}
          value={String(sel)}
          onChange={(v) => {
            setSel(Number(v))
            setT(0)
            setPlaying(false)
          }}
          color={TEAL}
        />
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" style={{ background: SURFACE, borderRadius: 10 }}>
        {/* vertical distance scale */}
        {marks.map((m, i) => {
          const y = yFor(m)
          return (
            <g key={i}>
              <line x1={42} y1={y} x2={W - 24} y2={y} stroke={LINE} strokeWidth={1} strokeDasharray={m === 0 ? '0' : '3 4'} />
              <text x={36} y={y + 3.5} textAnchor="end" fontSize={11} fill={SUB} fontWeight={600}>
                {m}
              </text>
            </g>
          )
        })}
        {/* axis label */}
        <text x={14} y={(topY + groundY) / 2} textAnchor="middle" fontSize={11} fill={SUB} transform={`rotate(-90 14 ${(topY + groundY) / 2})`}>
          height / m
        </text>

        {/* ground */}
        <line x1={42} y1={groundY} x2={W - 24} y2={groundY} stroke={INK} strokeWidth={2} />

        {/* drop guide line */}
        <line x1={objX} y1={topY} x2={objX} y2={groundY} stroke={TEAL} strokeWidth={1} strokeDasharray="2 5" opacity={0.5} />

        {/* falling object */}
        <g style={{ transition: playing ? 'none' : 'transform 200ms ease' }}>
          <circle cx={objX} cy={objY} r={11} fill={ORANGE} stroke="#fff" strokeWidth={2} />
          <circle cx={objX - 3} cy={objY - 3} r={3} fill="#fff" opacity={0.5} />
        </g>

        {/* current height callout */}
        <text x={objX + 18} y={objY + 4} fontSize={11} fill={INK} fontWeight={700}>
          {fmt(dropHeight - fallen, 0)} m
        </text>
      </svg>

      <div className="flex flex-wrap items-center gap-2">
        <PlayButton playing={playing} onToggle={() => (playing ? setPlaying(false) : restart())} color={TEAL} labelPlay="Drop" labelPause="Pause" />
        <GhostButton onClick={reset} color={SUB}>
          ↺ Reset
        </GhostButton>
        <div className="ml-auto flex flex-wrap items-center gap-2">
          <Readout label="g" value={fmt(g, 1)} unit="m/s²" color={PURPLE} />
          <Readout label={readoutLabel} value={fmt(fallTime, 1)} unit="s" color={TEAL} />
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- LAUNCH --- */

function LaunchMode({ data }: { data: ProjectileSimData }) {
  const L = data.launch ?? {}
  const g = L.g ?? data.g ?? 9.8
  const angleMin = L.angleMin ?? 0
  const angleMax = L.angleMax ?? 90
  const speedMin = L.speedMin ?? 1
  const speedMax = L.speedMax ?? 30

  const [angle, setAngle] = useState(() => clamp(L.angleDeg ?? 45, angleMin, angleMax))
  const [speed, setSpeed] = useState(() => clamp(L.speed ?? 15, speedMin, speedMax))
  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(false)

  const rad = (angle * Math.PI) / 180
  const vx = speed * Math.cos(rad)
  const vy = speed * Math.sin(rad)
  const flightTime = g > 0 ? (2 * vy) / g : 0
  const range = vx * flightTime
  const maxHeight = g > 0 ? (vy * vy) / (2 * g) : 0

  useRaf((dt) => {
    setT((prev) => {
      const next = prev + dt * 0.9
      if (next >= flightTime) {
        setPlaying(false)
        return flightTime
      }
      return next
    })
  }, playing)

  // World-to-SVG scaling — fit the whole parabola in the canvas.
  const pad = { l: 44, r: 20, t: 22, b: 40 }
  const plotW = W - pad.l - pad.r
  const plotH = H - pad.t - pad.b
  const worldW = Math.max(range, 1)
  const worldH = Math.max(maxHeight, 1)
  const sx = plotW / worldW
  const sy = plotH / worldH
  const s = Math.min(sx, sy) // uniform scale keeps the parabola shaped correctly
  const baseY = H - pad.b
  const toX = (x: number) => pad.l + x * s
  const toY = (y: number) => baseY - y * s

  // Trajectory polyline.
  const path = useMemo(() => {
    if (flightTime <= 0) return ''
    const pts: string[] = []
    const N = 60
    for (let i = 0; i <= N; i++) {
      const tt = (flightTime * i) / N
      const x = vx * tt
      const y = vy * tt - 0.5 * g * tt * tt
      pts.push(`${toX(x).toFixed(1)},${toY(Math.max(0, y)).toFixed(1)}`)
    }
    return pts.join(' ')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vx, vy, g, flightTime, s])

  // Live projectile position.
  const px = vx * t
  const py = Math.max(0, vy * t - 0.5 * g * t * t)

  const restart = () => {
    setT(0)
    setPlaying(true)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="Launch angle" min={angleMin} max={angleMax} step={1} value={angle} unit="°" color={TEAL} onChange={(v) => { setAngle(v); setT(0); setPlaying(false) }} />
        <Slider label="Launch speed" min={speedMin} max={speedMax} step={0.5} value={speed} unit="m/s" color={ORANGE} onChange={(v) => { setSpeed(v); setT(0); setPlaying(false) }} />
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" style={{ background: SURFACE, borderRadius: 10 }}>
        {/* axes */}
        <line x1={pad.l} y1={baseY} x2={W - pad.r} y2={baseY} stroke={INK} strokeWidth={2} />
        <line x1={pad.l} y1={pad.t} x2={pad.l} y2={baseY} stroke={INK} strokeWidth={1.5} />
        <text x={(pad.l + W - pad.r) / 2} y={H - 8} textAnchor="middle" fontSize={11} fill={SUB}>
          horizontal distance / m
        </text>
        <text x={14} y={(pad.t + baseY) / 2} textAnchor="middle" fontSize={11} fill={SUB} transform={`rotate(-90 14 ${(pad.t + baseY) / 2})`}>
          height / m
        </text>

        {/* max-height guide */}
        {maxHeight > 0 && (
          <line x1={pad.l} y1={toY(maxHeight)} x2={toX(range / 2)} y2={toY(maxHeight)} stroke={PURPLE} strokeWidth={1} strokeDasharray="3 4" opacity={0.6} />
        )}

        {/* trajectory */}
        {path && <polyline points={path} fill="none" stroke={TEAL} strokeWidth={2.5} strokeLinecap="round" />}

        {/* launch angle indicator */}
        <line
          x1={toX(0)}
          y1={toY(0)}
          x2={toX(0) + 34 * Math.cos(rad)}
          y2={toY(0) - 34 * Math.sin(rad)}
          stroke={ORANGE}
          strokeWidth={2}
          markerEnd="url(#ps-arrow)"
        />
        <defs>
          <marker id="ps-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill={ORANGE} />
          </marker>
        </defs>

        {/* projectile */}
        <circle cx={toX(px)} cy={toY(py)} r={8} fill={ORANGE} stroke="#fff" strokeWidth={2} />
      </svg>

      <div className="flex flex-wrap items-center gap-2">
        <PlayButton playing={playing} onToggle={() => (playing ? setPlaying(false) : restart())} color={TEAL} labelPlay="Launch" labelPause="Pause" />
        <GhostButton onClick={() => { setT(0); setPlaying(false) }} color={SUB}>
          ↺ Reset
        </GhostButton>
        <div className="ml-auto flex flex-wrap items-center gap-2">
          <Readout label="Max height" value={fmt(maxHeight, 1)} unit="m" color={PURPLE} />
          <Readout label="Range" value={fmt(range, 1)} unit="m" color={TEAL} />
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- BOUNCE --- */

function BounceMode({ data }: { data: ProjectileSimData }) {
  const B = data.bounce ?? {}
  const g = data.g ?? 9.8
  const fraction = clamp(B.reboundFraction ?? 0.6, 0.05, 0.99)
  const hMin = B.dropHeightMin_m ?? 0.5
  const hMax = B.dropHeightMax_m ?? Math.max(2, B.dropHeight_m ?? 2)

  const [h, setH] = useState(() => clamp(B.dropHeight_m ?? data.dropHeight_m ?? 1.5, hMin, hMax))
  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(false)

  // Phase 1: fall from h. Phase 2: rise to fraction*h, fall back. We animate fall + first bounce.
  const tFall = g > 0 ? Math.sqrt((2 * h) / g) : 0
  const bounceH = fraction * h
  const tUp = g > 0 ? Math.sqrt((2 * bounceH) / g) : 0
  const total = tFall + 2 * tUp // fall, up to peak, back down

  useRaf((dt) => {
    setT((prev) => {
      const next = prev + dt
      if (next >= total) {
        setPlaying(false)
        return total
      }
      return next
    })
  }, playing)

  // Current ball height in metres.
  let ballH = h
  if (t <= tFall) {
    ballH = h - 0.5 * g * t * t
  } else {
    const tb = t - tFall // time since first impact
    // up then down within bounce: height = v0*tb - 0.5 g tb^2, v0 = sqrt(2 g bounceH)
    const v0 = Math.sqrt(2 * g * bounceH)
    ballH = Math.max(0, v0 * tb - 0.5 * g * tb * tb)
  }
  ballH = Math.max(0, Math.min(h, ballH))

  // geometry
  const topY = 24
  const groundY = H - 40
  const scaleMax = Math.max(h, hMax)
  const yFor = (height_m: number) => groundY - (height_m / scaleMax) * (groundY - topY)
  const ballX = W * 0.5

  const restart = () => {
    setT(0)
    setPlaying(true)
  }

  // tick marks
  const ticks = useMemo(() => {
    const out: number[] = []
    const step = scaleMax / 4
    for (let i = 0; i <= 4; i++) out.push(+(i * step).toFixed(2))
    return out
  }, [scaleMax])

  return (
    <div className="flex flex-col gap-3">
      <Slider label="Drop height" min={hMin} max={hMax} step={0.1} value={h} unit="m" color={TEAL} onChange={(v) => { setH(v); setT(0); setPlaying(false) }} />

      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" style={{ background: SURFACE, borderRadius: 10 }}>
        {/* scale */}
        {ticks.map((m, i) => {
          const y = yFor(m)
          return (
            <g key={i}>
              <line x1={42} y1={y} x2={W - 24} y2={y} stroke={LINE} strokeWidth={1} strokeDasharray={m === 0 ? '0' : '3 4'} />
              <text x={36} y={y + 3.5} textAnchor="end" fontSize={11} fill={SUB} fontWeight={600}>
                {m}
              </text>
            </g>
          )
        })}
        <text x={14} y={(topY + groundY) / 2} textAnchor="middle" fontSize={11} fill={SUB} transform={`rotate(-90 14 ${(topY + groundY) / 2})`}>
          height / m
        </text>

        {/* drop height marker */}
        <line x1={42} y1={yFor(h)} x2={W - 24} y2={yFor(h)} stroke={TEAL} strokeWidth={1.5} strokeDasharray="4 3" opacity={0.7} />
        <text x={W - 26} y={yFor(h) - 5} textAnchor="end" fontSize={11} fill={TEAL} fontWeight={700}>
          drop {fmt(h, 1)} m
        </text>

        {/* expected bounce height marker */}
        <line x1={42} y1={yFor(bounceH)} x2={W - 24} y2={yFor(bounceH)} stroke={ORANGE} strokeWidth={1.5} strokeDasharray="4 3" opacity={0.7} />
        <text x={W - 26} y={yFor(bounceH) - 5} textAnchor="end" fontSize={11} fill={ORANGE} fontWeight={700}>
          bounce {fmt(bounceH, 1)} m
        </text>

        {/* ground */}
        <line x1={42} y1={groundY} x2={W - 24} y2={groundY} stroke={INK} strokeWidth={2} />

        {/* ball */}
        <circle cx={ballX} cy={yFor(ballH)} r={12} fill={ORANGE} stroke="#fff" strokeWidth={2} />
        <circle cx={ballX - 3.5} cy={yFor(ballH) - 3.5} r={3.5} fill="#fff" opacity={0.5} />
      </svg>

      <div className="flex flex-wrap items-center gap-2">
        <PlayButton playing={playing} onToggle={() => (playing ? setPlaying(false) : restart())} color={TEAL} labelPlay="Drop ball" labelPause="Pause" />
        <GhostButton onClick={() => { setT(0); setPlaying(false) }} color={SUB}>
          ↺ Reset
        </GhostButton>
        <div className="ml-auto flex flex-wrap items-center gap-2">
          <Readout label="Drop height" value={fmt(h, 1)} unit="m" color={TEAL} />
          <Readout label="Bounce height" value={fmt(bounceH, 1)} unit="m" color={ORANGE} />
        </div>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------- utils --- */

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v))
}
