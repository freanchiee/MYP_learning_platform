'use client'

/**
 * OscillatorSim — interactive simple-harmonic-motion stimulus.
 *
 * A pendulum OR a mass-on-spring. The student drags a slider to set the control
 * variable (pendulum length, or hanging mass), and the component computes the
 * period from first principles and animates the oscillation in real time:
 *   - pendulum:  T = 2·π·√(L/g)
 *   - spring:    T = 2·π·√(m/k)
 * A live stopwatch counts elapsed seconds while playing, and the computed period T
 * is shown to the side. Interactivity only changes the controllable apparatus
 * variable — it never alters an assessed number that arrives through `data`.
 *
 * Data-driven + SSR-safe: every field is optional with a sane default, animation
 * runs only through the kit's useRaf hook, and there is no module-scope RNG.
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

type OscillatorType = 'pendulum' | 'spring'

export interface OscillatorSliderSpec {
  min?: number
  max?: number
  step?: number
  unit?: string
}

export interface OscillatorSimData {
  title?: string
  source?: string
  /** 'pendulum' or 'spring'. Loose strings like "mass on vertical spring" are accepted. */
  type?: OscillatorType | string
  /** Gravitational field strength, m/s². Default 9.81. Used for the pendulum period. */
  g?: number
  /** Spring constant k, N/m. Default 20. Used for the spring period. */
  springConstant?: number
  /** Slider spec for the hanging mass (spring mode). Units typically g. */
  massSlider?: OscillatorSliderSpec
  /** Slider spec for the pendulum length (pendulum mode). Units typically m. */
  lengthSlider?: OscillatorSliderSpec
  /** Optional formula string shown as a caption (purely cosmetic). */
  periodFormula?: string
}

// ── deterministic PRNG (seeded, SSR-safe) ───────────────────────────────────
function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// ── normalisation helpers ────────────────────────────────────────────────────
function normType(t: OscillatorType | string | undefined): OscillatorType {
  const s = (t ?? '').toString().toLowerCase()
  if (s.includes('pendul')) return 'pendulum'
  if (s.includes('spring') || s.includes('mass')) return 'spring'
  return 'spring'
}

/** Convert a mass value to kilograms given its declared unit (g vs kg). */
function massToKg(value: number, unit?: string): number {
  const u = (unit ?? 'g').toLowerCase()
  if (u.startsWith('kg')) return value
  if (u === 'g' || u.startsWith('gram')) return value / 1000
  return value / 1000 // default assume grams
}

/** Convert a length value to metres given its declared unit (m vs cm). */
function lengthToM(value: number, unit?: string): number {
  const u = (unit ?? 'm').toLowerCase()
  if (u.startsWith('cm')) return value / 100
  if (u.startsWith('mm')) return value / 1000
  return value // default metres
}

const fmt = (v: number, d = 2) => (Number.isFinite(v) ? v.toFixed(d) : '—')

// SVG geometry
const W = 320
const H = 300

export default function OscillatorSim({ data }: { data: OscillatorSimData }) {
  const kind = normType(data.type)
  const C = PALETTE[0] // teal primary

  const g = typeof data.g === 'number' && data.g > 0 ? data.g : 9.81
  const k = typeof data.springConstant === 'number' && data.springConstant > 0 ? data.springConstant : 20

  // Pick the active slider spec for the current mode, with safe fallbacks.
  const spec: Required<OscillatorSliderSpec> = useMemo(() => {
    const raw = (kind === 'pendulum' ? data.lengthSlider : data.massSlider) ?? {}
    const defaults =
      kind === 'pendulum'
        ? { min: 0.2, max: 1.0, step: 0.1, unit: 'm' }
        : { min: 100, max: 500, step: 100, unit: 'g' }
    const min = typeof raw.min === 'number' ? raw.min : defaults.min
    const max = typeof raw.max === 'number' && raw.max > min ? raw.max : Math.max(min + (defaults.max - defaults.min), min + (raw.step ?? defaults.step))
    const step = typeof raw.step === 'number' && raw.step > 0 ? raw.step : defaults.step
    const unit = raw.unit ?? defaults.unit
    return { min, max, step, unit }
  }, [kind, data.lengthSlider, data.massSlider])

  // Slider value starts mid-range so the figure looks sensible before interaction.
  const [val, setVal] = useState<number>(() => {
    const mid = spec.min + (spec.max - spec.min) / 2
    const snapped = Math.round((mid - spec.min) / spec.step) * spec.step + spec.min
    return Math.min(spec.max, Math.max(spec.min, snapped))
  })

  const [playing, setPlaying] = useState(false)
  const [stopwatch, setStopwatch] = useState(0)
  const phaseRef = useRef(0) // oscillation phase in radians

  // Period T from first principles. Never invents — derived from real g/k + slider.
  const period = useMemo(() => {
    if (kind === 'pendulum') {
      const L = lengthToM(val, spec.unit)
      return 2 * Math.PI * Math.sqrt(Math.max(L, 1e-6) / g)
    }
    const m = massToKg(val, spec.unit)
    return 2 * Math.PI * Math.sqrt(Math.max(m, 1e-6) / k)
  }, [kind, val, spec.unit, g, k])

  // Deterministic seed from the slider value (stable across SSR/CSR).
  const seedRand = useMemo(() => mulberry32(Math.round((val + spec.min) * 1000) + (kind === 'pendulum' ? 7 : 13)), [val, spec.min, kind])
  const seedPhase = useMemo(() => seedRand() * 0.0001, [seedRand]) // negligible, keeps a usage

  const [, force] = useState(0)
  useRaf((dt) => {
    phaseRef.current += (2 * Math.PI * dt) / Math.max(period, 1e-3)
    setStopwatch((s) => s + dt)
    force((n) => (n + 1) % 1_000_000)
  }, playing)

  const reset = () => {
    setPlaying(false)
    phaseRef.current = 0
    setStopwatch(0)
    force((n) => n + 1)
  }

  // Oscillation displacement, normalised to ±1, with the deterministic micro-offset.
  const disp = Math.sin(phaseRef.current + seedPhase)

  const sliderLabel = kind === 'pendulum' ? 'Length L' : 'Mass m'
  const formula = data.periodFormula ?? (kind === 'pendulum' ? 'T = 2π√(L/g)' : 'T = 2π√(m/k)')

  // ── render the apparatus ──────────────────────────────────────────────────
  const pivotX = W / 2
  const pivotY = 40

  let scene: React.ReactNode
  if (kind === 'pendulum') {
    const Lm = lengthToM(val, spec.unit)
    // Scale rope length to fit the canvas, but keep proportions among lengths.
    const ropeMax = H - pivotY - 50
    const ropeLen = 70 + (Lm / Math.max(lengthToM(spec.max, spec.unit), 1e-6)) * (ropeMax - 70)
    const maxAngle = 0.42 // rad swing amplitude (visual only)
    const angle = maxAngle * disp
    const bobX = pivotX + ropeLen * Math.sin(angle)
    const bobY = pivotY + ropeLen * Math.cos(angle)
    scene = (
      <g>
        {/* support beam */}
        <line x1={pivotX - 60} y1={pivotY} x2={pivotX + 60} y2={pivotY} stroke={INK} strokeWidth={4} strokeLinecap="round" />
        <line x1={pivotX - 50} y1={pivotY} x2={pivotX - 56} y2={pivotY - 12} stroke={SUB} strokeWidth={2} />
        <line x1={pivotX + 50} y1={pivotY} x2={pivotX + 56} y2={pivotY - 12} stroke={SUB} strokeWidth={2} />
        {/* swing arc guide */}
        <path
          d={`M ${pivotX + ropeLen * Math.sin(-maxAngle)} ${pivotY + ropeLen * Math.cos(-maxAngle)} A ${ropeLen} ${ropeLen} 0 0 1 ${pivotX + ropeLen * Math.sin(maxAngle)} ${pivotY + ropeLen * Math.cos(maxAngle)}`}
          fill="none"
          stroke={LINE}
          strokeWidth={1.5}
          strokeDasharray="3 4"
        />
        {/* equilibrium reference */}
        <line x1={pivotX} y1={pivotY} x2={pivotX} y2={pivotY + ropeLen + 18} stroke={LINE} strokeWidth={1} strokeDasharray="2 4" />
        {/* rope + bob */}
        <line x1={pivotX} y1={pivotY} x2={bobX} y2={bobY} stroke={INK} strokeWidth={1.5} />
        <circle cx={pivotX} cy={pivotY} r={3} fill={INK} />
        <circle cx={bobX} cy={bobY} r={14} fill={C} stroke="#ffffff" strokeWidth={2} />
        <text x={bobX} y={bobY + 4} textAnchor="middle" fontSize={9} fontWeight={700} fill="#ffffff">
          {fmt(val, spec.step < 1 ? 1 : 0)}
        </text>
      </g>
    )
  } else {
    // Mass-on-vertical-spring. disp moves the block about an equilibrium line.
    const eqY = 150
    const ampPx = 46
    const blockY = eqY + ampPx * disp
    const coilTop = pivotY + 6
    const coilTurns = 9
    const coilW = 22
    // Build a zig-zag coil from the ceiling to the top of the block.
    const blockTop = blockY - 22
    const segs: string[] = [`M ${pivotX} ${coilTop}`]
    const span = blockTop - coilTop
    for (let i = 0; i < coilTurns; i++) {
      const y1 = coilTop + (span * (i + 0.5)) / coilTurns
      const y2 = coilTop + (span * (i + 1)) / coilTurns
      const dir = i % 2 === 0 ? 1 : -1
      segs.push(`L ${pivotX + dir * coilW} ${y1}`)
      segs.push(`L ${pivotX} ${y2}`)
    }
    scene = (
      <g>
        {/* ceiling / clamp */}
        <rect x={pivotX - 60} y={pivotY - 14} width={120} height={14} rx={2} fill={SURFACE} stroke={INK} strokeWidth={2} />
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1={pivotX - 56 + i * 18} y1={pivotY - 14} x2={pivotX - 66 + i * 18} y2={pivotY} stroke={SUB} strokeWidth={1.5} />
        ))}
        {/* equilibrium reference line */}
        <line x1={pivotX - 90} y1={eqY} x2={pivotX + 90} y2={eqY} stroke={LINE} strokeWidth={1} strokeDasharray="4 4" />
        <text x={pivotX + 92} y={eqY + 4} fontSize={9} fill={SUB}>eqm</text>
        {/* displacement marker */}
        <line x1={pivotX - 78} y1={eqY} x2={pivotX - 78} y2={blockY} stroke={PALETTE[1]} strokeWidth={2} />
        {/* spring coil */}
        <path d={segs.join(' ')} fill="none" stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        {/* hanging mass */}
        <rect x={pivotX - 24} y={blockY - 22} width={48} height={44} rx={5} fill={C} stroke="#ffffff" strokeWidth={2} />
        <text x={pivotX} y={blockY + 4} textAnchor="middle" fontSize={11} fontWeight={700} fill="#ffffff">
          {fmt(val, spec.step < 1 ? 2 : 0)}
          <tspan fontSize={8}>{spec.unit ? ' ' + spec.unit : ''}</tspan>
        </text>
      </g>
    )
  }

  return (
    <FigureCard
      title={data.title ?? (kind === 'pendulum' ? 'Simple pendulum' : 'Mass on a spring')}
      source={data.source}
      hint={`Set the ${kind === 'pendulum' ? 'length' : 'mass'} with the slider, then press Play to watch the oscillation. The period T is computed from ${formula}; the stopwatch times the real motion.`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        {/* apparatus */}
        <div className="flex-shrink-0" style={{ maxWidth: W }}>
          <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" style={{ background: SURFACE, borderRadius: 10, border: `1px solid ${LINE}` }}>
            {scene}
          </svg>
        </div>

        {/* controls + readouts */}
        <div className="flex flex-1 flex-col gap-3">
          {kind === 'spring' && (
            <Segmented
              options={[
                { value: 'spring', label: 'Spring' },
                { value: 'pendulum', label: 'Pendulum' },
              ]}
              value={kind}
              onChange={() => undefined}
              color={C}
            />
          )}

          <Slider
            label={sliderLabel}
            min={spec.min}
            max={spec.max}
            step={spec.step}
            value={val}
            onChange={(v) => {
              setVal(v)
            }}
            unit={spec.unit}
            color={C}
            format={(v) => `${fmt(v, spec.step < 1 ? 2 : 0)}${spec.unit ? ' ' + spec.unit : ''}`}
          />

          <div className="flex flex-wrap items-center gap-2">
            <PlayButton playing={playing} onToggle={() => setPlaying((p) => !p)} color={C} />
            <GhostButton onClick={reset} color={C}>↺ Reset</GhostButton>
          </div>

          <div className="flex flex-wrap gap-2">
            <Readout label="Period T" value={fmt(period, 2)} unit="s" color={C} />
            <Readout label="Stopwatch" value={fmt(stopwatch, 1)} unit="s" color={PALETTE[1]} />
          </div>

          <div className="rounded-lg px-3 py-2 text-[11px]" style={{ background: SURFACE, border: `1px solid ${LINE}`, color: SUB }}>
            <span className="font-mono" style={{ color: INK }}>{formula}</span>
            <span className="ml-2">
              {kind === 'pendulum' ? `g = ${fmt(g, 2)} m/s²` : `k = ${fmt(k, 0)} N/m`}
            </span>
          </div>
        </div>
      </div>
    </FigureCard>
  )
}
