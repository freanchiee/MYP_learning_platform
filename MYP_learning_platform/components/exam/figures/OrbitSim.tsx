'use client'

/**
 * OrbitSim — bodies orbiting a centre (data-driven exam stimulus).
 *
 * Modes
 *  - "phases": Moon orbiting Earth. Left panel = top-down orbit with the Sun fixed to the
 *    left; right panel = "as seen from Earth", showing the lit fraction + phase name as it
 *    cycles new → crescent → quarter → gibbous → full and back.
 *  - "orbit": bodies on circular paths around a centre (planets/Sun, satellite/Earth, comet).
 *    Optional radial force vector (always points to centre) for centripetal/gravity stimuli.
 *  - "moons": Galilean-style moons strung out beside a central body (telescope line view).
 *
 * Play/pause + speed slider + a scrub slider over the period. Every number/label that comes
 * through `data` renders exactly as given — interactivity never changes an assessed value.
 * SSR-safe: animation only via the kit's useRaf; any pseudo-randomness is seeded
 * deterministically with a local mulberry32 PRNG so SSR and CSR agree.
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

export type OrbitMode = 'phases' | 'orbit' | 'moons'

export interface OrbitBody {
  name?: string
  /** Orbital period in days (synonyms accepted by the loader below). */
  orbitalPeriod?: number
  orbitalPeriod_days?: number
  periodDays?: number
  /** Orbit radius — relative units; auto-spaced from index when absent. */
  orbitRadius?: number
  /** Body draw radius in px (auto from data when absent). */
  radius?: number
  colour?: string
  color?: string
  role?: 'center' | 'orbiter' | string
  fixed?: boolean
  /** Synodic month for phases mode (defaults to 29.5). */
  synodicMonth_days?: number
}

export interface OrbitSimData {
  title?: string
  source?: string
  mode?: OrbitMode
  /** Name of the central body (Sun / Earth / Jupiter). Falls back to a fixed/center body. */
  central?: string
  bodies?: OrbitBody[]
  /** Ordered phase names for "phases" mode. */
  phases?: string[]
  /** Synodic month length (days) for phases mode. */
  synodicMonth?: number
  /** Show a radial force/weight vector on the (first) orbiter — for centripetal stimuli. */
  showForce?: boolean | string
  /** Optional caption beneath the figure. */
  caption?: string
  /** Deterministic seed for any starfield/jitter. */
  seed?: number
}

/* ---------- deterministic PRNG (no global RNG; SSR === CSR) ---------- */
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

/* ---------- helpers ---------- */
const periodOf = (b: OrbitBody): number =>
  b.orbitalPeriod ?? b.orbitalPeriod_days ?? b.periodDays ?? b.synodicMonth_days ?? 0
const colourOf = (b: OrbitBody, i: number): string => b.colour ?? b.color ?? colorAt(i + 1)

const DEFAULT_PHASES = [
  'new',
  'waxing crescent',
  'first quarter',
  'waxing gibbous',
  'full',
  'waning gibbous',
  'last quarter',
  'waning crescent',
]

const SVG_W = 460
const SVG_H = 300

export default function OrbitSim({ data }: { data: OrbitSimData }) {
  const bodies = useMemo(() => data.bodies ?? [], [data.bodies])

  // Infer the mode from the shape if not explicitly given.
  const mode: OrbitMode = useMemo(() => {
    if (data.mode) return data.mode
    if (data.phases || bodies.some((b) => b.synodicMonth_days != null) || /moon/i.test(bodies.find((b) => b.role === 'orbiter')?.name ?? ''))
      return 'phases'
    if (data.central || /jupiter/i.test(data.central ?? '')) {
      // many moons strung beside a central body
      const orbiters = bodies.filter((b) => b.role !== 'center' && !b.fixed)
      if (orbiters.length >= 2 && /jupiter/i.test(data.central ?? '')) return 'moons'
    }
    return 'orbit'
  }, [data.mode, data.phases, data.central, bodies])

  // Central body + orbiters.
  const centerBody = useMemo(
    () => bodies.find((b) => b.role === 'center' || b.fixed) ?? bodies[0],
    [bodies],
  )
  const centralName = data.central ?? centerBody?.name ?? (mode === 'phases' ? 'Earth' : 'Sun')
  const orbiters = useMemo(
    () => bodies.filter((b) => b !== centerBody && b.role !== 'center' && !b.fixed),
    [bodies, centerBody],
  )

  const phases = data.phases ?? DEFAULT_PHASES
  const synodic = data.synodicMonth ?? bodies.find((b) => b.synodicMonth_days != null)?.synodicMonth_days ?? 29.5

  // Longest period sets the scrub window (days). For phases, use the synodic month.
  const maxPeriod = useMemo(() => {
    if (mode === 'phases') return synodic
    const ps = orbiters.map(periodOf).filter((p) => p > 0)
    return ps.length ? Math.max(...ps) : 100
  }, [mode, synodic, orbiters])

  const showForce = Boolean(data.showForce)

  /* ---------- animation state ---------- */
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  // t is in days; we keep it in a ref-mirroring state so the scrub slider stays in sync.
  const [day, setDay] = useState(0)

  useRaf(
    (dt) => {
      // Sweep the full window in ~12s at speed 1.
      const perSec = maxPeriod / 12
      setDay((d) => {
        const next = d + dt * perSec * speed
        return next % maxPeriod
      })
    },
    playing,
  )

  // Fraction through the (longest) window, 0..1.
  const winFrac = maxPeriod > 0 ? (day % maxPeriod) / maxPeriod : 0

  /* ---------- starfield (deterministic) ---------- */
  const stars = useMemo(() => {
    const rnd = mulberry32((data.seed ?? 7) >>> 0)
    return Array.from({ length: 36 }, () => ({
      x: rnd() * SVG_W,
      y: rnd() * SVG_H,
      r: 0.4 + rnd() * 1.1,
      o: 0.25 + rnd() * 0.5,
    }))
  }, [data.seed])

  /* ---------- phase computation (phases mode) ---------- */
  // angle: 0 = new (Moon between Sun & Earth, Sun to the left).
  const moonAngle = winFrac * Math.PI * 2
  // Illuminated fraction seen from Earth: 0 at new, 1 at full.
  const litFraction = (1 - Math.cos(moonAngle)) / 2
  const phaseName = useMemo(() => {
    if (!phases.length) return ''
    const idx = Math.floor(((winFrac % 1) + 1) % 1 * phases.length) % phases.length
    return phases[idx]
  }, [winFrac, phases])

  const reset = () => {
    setDay(0)
  }

  const center = { x: SVG_W / 2, y: SVG_H / 2 }

  return (
    <FigureCard
      title={data.title}
      source={data.source}
      hint={
        mode === 'phases'
          ? 'Play or scrub through the month: watch the Moon orbit Earth (left) and the phase you would see from Earth (right).'
          : 'Play or scrub to animate the orbit. Bodies move at their real relative periods; the readout shows the current day.'
      }
    >
      {/* controls row */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <PlayButton playing={playing} onToggle={() => setPlaying((p) => !p)} />
        <GhostButton onClick={reset}>Reset</GhostButton>
        {mode === 'phases' ? (
          <Readout label="phase" value={phaseName || '—'} />
        ) : (
          <Readout label="day" value={day.toFixed(1)} unit="d" />
        )}
        {mode === 'phases' && <Readout label="day" value={day.toFixed(1)} unit="d" color={PALETTE[1]} />}
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: mode === 'phases' ? '1.4fr 1fr' : '1fr' }}>
        {/* ---------- main orbit panel ---------- */}
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="block h-auto w-full"
          style={{ background: '#0b1020', borderRadius: 10, border: `1px solid ${LINE}` }}
          role="img"
          aria-label={`${centralName} system, ${mode} view`}
        >
          {/* starfield */}
          {stars.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#ffffff" opacity={s.o} />
          ))}

          {mode === 'moons' ? (
            <MoonsView central={centralName} orbiters={orbiters} day={day} maxPeriod={maxPeriod} w={SVG_W} h={SVG_H} />
          ) : mode === 'phases' ? (
            <PhasesOrbit center={center} angle={moonAngle} moonColour={colourOf(orbiters[0] ?? {}, 0)} />
          ) : (
            <OrbitView
              center={center}
              centralName={centralName}
              orbiters={orbiters}
              day={day}
              showForce={showForce}
            />
          )}
        </svg>

        {/* ---------- Earth-view phase panel ---------- */}
        {mode === 'phases' && (
          <div className="flex flex-col items-center justify-center gap-2 rounded-[10px] p-3" style={{ background: SURFACE, border: `1px solid ${LINE}` }}>
            <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: SUB }}>
              as seen from Earth
            </span>
            <PhaseDisc litFraction={litFraction} waxing={Math.sin(moonAngle) >= 0} colour={colourOf(orbiters[0] ?? {}, 0)} />
            <div className="text-center">
              <div className="text-sm font-extrabold capitalize" style={{ color: INK }}>{phaseName}</div>
              <div className="font-mono text-[11px]" style={{ color: SUB }}>
                {(litFraction * 100).toFixed(0)}% lit
              </div>
            </div>
          </div>
        )}
      </div>

      {/* scrub + speed */}
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Slider
          label={mode === 'phases' ? 'Scrub (day of month)' : 'Scrub (day)'}
          min={0}
          max={maxPeriod}
          step={maxPeriod / 240}
          value={day}
          onChange={(v) => {
            setPlaying(false)
            setDay(v)
          }}
          format={(v) => `${v.toFixed(1)} d`}
        />
        <Slider label="Speed" min={0.25} max={4} step={0.25} value={speed} onChange={setSpeed} unit="×" color={PALETTE[1]} />
      </div>

      {/* legend of orbiting bodies with their periods */}
      {orbiters.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {orbiters.map((b, i) => {
            const p = periodOf(b)
            return (
              <span key={`${b.name ?? i}`} className="inline-flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: INK }}>
                <span aria-hidden style={{ width: 9, height: 9, borderRadius: 9, background: colourOf(b, i), display: 'inline-block' }} />
                {b.name ?? `Body ${i + 1}`}
                {p > 0 && <span className="font-mono" style={{ color: SUB }}>· {p} d</span>}
              </span>
            )
          })}
        </div>
      )}

      {data.caption && (
        <p className="mt-2 text-[11px] leading-relaxed" style={{ color: SUB }}>
          {data.caption}
        </p>
      )}
    </FigureCard>
  )
}

/* =================== sub-views =================== */

/** Generic circular-orbit view (planets / satellite around a centre). */
function OrbitView({
  center,
  centralName,
  orbiters,
  day,
  showForce,
}: {
  center: { x: number; y: number }
  centralName: string
  orbiters: OrbitBody[]
  day: number
  showForce: boolean
}) {
  const n = Math.max(orbiters.length, 1)
  const rMin = 42
  const rMax = Math.min(center.x, center.y) - 16
  const radiusFor = (b: OrbitBody, i: number) => {
    if (b.orbitRadius && b.orbitRadius > 0) {
      // treat as a relative scale 0..maxRadius among given radii
      return b.orbitRadius
    }
    return n === 1 ? (rMin + rMax) / 2 : rMin + ((rMax - rMin) * i) / (n - 1)
  }

  // central body colour/size
  const isSun = /sun/i.test(centralName)
  const centralColour = isSun ? '#f6c343' : /jupiter/i.test(centralName) ? '#d9a066' : '#3b82f6'

  return (
    <g>
      {/* orbit rings */}
      {orbiters.map((b, i) => {
        const r = radiusFor(b, i)
        return (
          <circle
            key={`ring-${i}`}
            cx={center.x}
            cy={center.y}
            r={r}
            fill="none"
            stroke={colourOf(b, i)}
            strokeOpacity={0.35}
            strokeWidth={1}
            strokeDasharray="3 4"
          />
        )
      })}

      {/* central body */}
      {isSun && <circle cx={center.x} cy={center.y} r={20} fill={centralColour} opacity={0.25} />}
      <circle cx={center.x} cy={center.y} r={isSun ? 13 : 11} fill={centralColour} />
      <text x={center.x} y={center.y + 30} textAnchor="middle" fontSize={11} fontWeight={700} fill="#e2e8f0">
        {centralName}
      </text>

      {/* orbiters */}
      {orbiters.map((b, i) => {
        const r = radiusFor(b, i)
        const p = periodOf(b)
        const ang = p > 0 ? (day / p) * Math.PI * 2 : (day / 30) * Math.PI * 2
        const x = center.x + r * Math.cos(ang)
        const y = center.y + r * Math.sin(ang)
        const bodyR = b.radius ?? 6
        const col = colourOf(b, i)
        // radial force vector toward centre
        const fx = center.x - x
        const fy = center.y - y
        const flen = Math.hypot(fx, fy) || 1
        const ax = x + (fx / flen) * 26
        const ay = y + (fy / flen) * 26
        return (
          <g key={`orb-${i}`}>
            {showForce && (
              <>
                <line x1={x} y1={y} x2={ax} y2={ay} stroke={PALETTE[1]} strokeWidth={2} markerEnd="url(#orbArrow)" />
              </>
            )}
            <circle cx={x} cy={y} r={bodyR} fill={col} stroke="#0b1020" strokeWidth={1} />
            {b.name && (
              <text x={x} y={y - bodyR - 4} textAnchor="middle" fontSize={10} fontWeight={600} fill="#e2e8f0">
                {b.name}
              </text>
            )}
          </g>
        )
      })}

      {/* arrow marker for force vector */}
      <defs>
        <marker id="orbArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L6,3 L0,6 Z" fill={PALETTE[1]} />
        </marker>
      </defs>
    </g>
  )
}

/** Top-down Moon-orbiting-Earth panel with Sun fixed to the left. */
function PhasesOrbit({
  center,
  angle,
  moonColour,
}: {
  center: { x: number; y: number }
  angle: number
  moonColour: string
}) {
  const orbitR = Math.min(center.x, center.y) - 40
  // angle 0 = new: Moon on the Sun side (left). Place Moon at angle measured from the -x (sun) axis.
  const mx = center.x - orbitR * Math.cos(angle)
  const my = center.y - orbitR * Math.sin(angle)

  return (
    <g>
      {/* sunlight from the left */}
      {[0, 1, 2, 3].map((k) => {
        const yy = 60 + k * 60
        return <line key={k} x1={6} y1={yy} x2={center.x - orbitR - 18} y2={yy} stroke="#f6c343" strokeWidth={1.5} strokeOpacity={0.5} strokeDasharray="2 5" />
      })}
      <text x={8} y={24} fontSize={10} fontWeight={700} fill="#f6c343">
        ☀ sunlight →
      </text>

      {/* orbit ring */}
      <circle cx={center.x} cy={center.y} r={orbitR} fill="none" stroke="#94a3b8" strokeOpacity={0.4} strokeWidth={1} strokeDasharray="3 4" />

      {/* Earth (half lit from the left) */}
      <circle cx={center.x} cy={center.y} r={14} fill="#1e3a8a" />
      <path d={`M ${center.x} ${center.y - 14} A 14 14 0 0 0 ${center.x} ${center.y + 14} Z`} fill="#60a5fa" />
      <text x={center.x} y={center.y + 30} textAnchor="middle" fontSize={11} fontWeight={700} fill="#e2e8f0">
        Earth
      </text>

      {/* Moon — half lit from the left (toward Sun) */}
      <g>
        <circle cx={mx} cy={my} r={8} fill="#3a3f55" />
        <path d={`M ${mx} ${my - 8} A 8 8 0 0 0 ${mx} ${my + 8} Z`} fill={moonColour || '#e2e8f0'} />
        <circle cx={mx} cy={my} r={8} fill="none" stroke="#cbd5e1" strokeOpacity={0.6} strokeWidth={0.8} />
      </g>

      {/* dashed sight line Earth->Moon */}
      <line x1={center.x} y1={center.y} x2={mx} y2={my} stroke="#64748b" strokeWidth={0.8} strokeDasharray="2 3" />
    </g>
  )
}

/** The Moon disc as seen from Earth, with terminator drawn from the lit fraction. */
function PhaseDisc({ litFraction, waxing, colour }: { litFraction: number; waxing: boolean; colour: string }) {
  const R = 54
  const cx = 60
  const cy = 60
  const lit = colour && colour !== '#0b7285' ? colour : '#f1f5f9'
  const dark = '#2a2f45'
  const f = Math.max(0, Math.min(1, litFraction))

  // Terminator is an ellipse; its horizontal semi-axis = R*|cos(theta)| where lit = (1-cos)/2.
  // cos(theta) = 1 - 2f. waxing => lit limb on the right.
  const cosT = 1 - 2 * f
  const ax = R * Math.abs(cosT)
  // Build the lit region path.
  const big = f > 0.5
  // Right half lit when waxing; left half lit when waning. The boundary bulges based on cosT sign.
  let path = ''
  if (f <= 0.001) {
    path = '' // new moon: nothing lit
  } else if (f >= 0.999) {
    path = `M ${cx} ${cy - R} A ${R} ${R} 0 1 1 ${cx} ${cy + R} A ${R} ${R} 0 1 1 ${cx} ${cy - R} Z`
  } else {
    // outer limb arc (lit side) + terminator ellipse arc back
    const sideSweep = waxing ? 1 : 0 // outer arc direction
    // For waxing the lit side is the right; terminator sweep depends on gibbous/crescent.
    const termSweep = (cosT >= 0) === waxing ? 1 : 0
    path = `M ${cx} ${cy - R}
            A ${R} ${R} 0 0 ${sideSweep} ${cx} ${cy + R}
            A ${ax} ${R} 0 0 ${termSweep} ${cx} ${cy - R} Z`
  }

  return (
    <svg viewBox="0 0 120 120" width={120} height={120} aria-label="Moon phase as seen from Earth">
      <circle cx={cx} cy={cy} r={R} fill={dark} stroke="#475569" strokeWidth={1} />
      {path && <path d={path} fill={lit} />}
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="#64748b" strokeOpacity={0.5} strokeWidth={1} />
    </svg>
  )
}

/** Galilean-moons-beside-Jupiter (telescope line) view. */
function MoonsView({
  central,
  orbiters,
  day,
  maxPeriod,
  w,
  h,
}: {
  central: string
  orbiters: OrbitBody[]
  day: number
  maxPeriod: number
  w: number
  h: number
}) {
  const cx = w / 2
  const cy = h / 2
  const n = Math.max(orbiters.length, 1)
  const rMin = 40
  const rMax = w / 2 - 24
  const radiusFor = (i: number) => (n === 1 ? (rMin + rMax) / 2 : rMin + ((rMax - rMin) * i) / (n - 1))

  return (
    <g>
      {/* telescope sight line */}
      <line x1={10} y1={cy} x2={w - 10} y2={cy} stroke="#334155" strokeWidth={1} />

      {/* Jupiter */}
      <circle cx={cx} cy={cy} r={16} fill="#d9a066" />
      <ellipse cx={cx} cy={cy - 4} rx={16} ry={2.2} fill="#b07a44" opacity={0.6} />
      <ellipse cx={cx} cy={cy + 4} rx={16} ry={2.2} fill="#b07a44" opacity={0.6} />
      <text x={cx} y={cy + 34} textAnchor="middle" fontSize={11} fontWeight={700} fill="#e2e8f0">
        {central}
      </text>

      {orbiters.map((b, i) => {
        const r = radiusFor(i)
        const p = periodOf(b) || maxPeriod
        const ang = (day / p) * Math.PI * 2
        // projected x position on the sight line (what a telescope shows), y is small bob for depth.
        const x = cx + r * Math.cos(ang)
        const y = cy - 4 * Math.sin(ang)
        const col = colourOf(b, i)
        const front = Math.sin(ang) <= 0
        return (
          <g key={`m-${i}`} opacity={front ? 1 : 0.55}>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke={col} strokeOpacity={0.18} strokeWidth={1} />
            <circle cx={x} cy={y} r={b.radius ?? 4.5} fill={col} stroke="#0b1020" strokeWidth={0.8} />
            {b.name && (
              <text x={x} y={y - 8} textAnchor="middle" fontSize={9} fontWeight={600} fill="#cbd5e1">
                {b.name}
              </text>
            )}
          </g>
        )
      })}
    </g>
  )
}
