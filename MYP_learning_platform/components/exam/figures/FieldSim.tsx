'use client'

/**
 * FieldSim — charged particle in a field (E or B), or an inverse force–distance probe.
 *
 * Two render modes, chosen by the data:
 *  1. Particle-deflection sim (default). Parallel plates (top +, bottom −) set up a
 *     field. A Segmented control picks the particle (alpha +, beta −, gamma neutral).
 *     Play sends it across: + charge bends toward the − plate, − charge toward the +
 *     plate, neutral goes straight. A B-field "into page" variant bends the same signs
 *     in opposite sense (force F = qv×B). The deflection direction is labelled.
 *  2. Force–distance probe (when `relationship`/`quantity` is supplied, e.g. F ∝ 1/d).
 *     A distance Slider drives a live force Readout following F = k / d.
 *
 * Pure 2D SVG + state. SSR-safe: animation only via useRaf; no module-scope RNG/clock.
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

export interface FieldSimParticle {
  name: string
  /** Sign of the charge: +1, -1, or 0 (neutral). Strings like 'alpha (+)' also accepted. */
  charge?: number | string
}

export interface FieldSimData {
  title?: string
  source?: string
  /** 'E' = electric field between plates; 'B' = magnetic field into the page. */
  field?: 'E' | 'B' | string
  /** Plate labels (top is positive by convention). */
  plates?: { top?: string; bottom?: string }
  /** Selectable particles. Defaults to alpha/beta/gamma if omitted. */
  particles?: FieldSimParticle[]
  /** Human-readable expected deflection, e.g. "curves up toward + plate". */
  expected?: string
  /** Optional preselected particle name. */
  particle?: string

  // ---- Force–distance probe mode ----
  /** Name of the measured quantity, e.g. "magnetic repelling force". */
  quantity?: string
  /** Relationship label, e.g. "force ∝ 1/distance". */
  relationship?: string
  /** Constant k in F = k / distance. */
  k?: number
  distanceUnits?: string
  distanceRange?: [number, number]
  forceUnits?: string
  forceRange?: [number, number]
  slider?: string
  readout?: string
  /** Optional narrative coupling note shown under the probe graph. */
  passengerCoupling?: string
}

// ---- SVG geometry ----
const W = 720
const H = 300
const PLATE_X0 = 70
const PLATE_X1 = W - 70
const TOP_Y = 56
const BOT_Y = H - 56
const MID_Y = (TOP_Y + BOT_Y) / 2
const ENTRY_X = PLATE_X0 - 36

// Deterministic mulberry32 PRNG, seeded from data so SSR === CSR.
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

/** Normalise a charge that may arrive as a number or a descriptive string. */
function chargeSign(c: FieldSimParticle['charge'], name?: string): number {
  if (typeof c === 'number') return Math.sign(c)
  const s = `${c ?? ''} ${name ?? ''}`.toLowerCase()
  if (/(^|[^a-z])(0|neutral|gamma|photon)([^a-z]|$)/.test(s) || s.includes('neutral')) {
    // gamma/neutral unless an explicit sign overrides below
    if (!/[+\-]/.test(`${c ?? ''}`)) return 0
  }
  if (/(−|-|minus|negative|electron|beta\b)/.test(s)) return -1
  if (/(\+|plus|positive|alpha\b|proton)/.test(s)) return 1
  if (/gamma|neutral|neutron/.test(s)) return 0
  return 0
}

const DEFAULT_PARTICLES: Required<FieldSimParticle>[] = [
  { name: 'alpha (+)', charge: 1 },
  { name: 'beta (−)', charge: -1 },
  { name: 'gamma (0)', charge: 0 },
]

export default function FieldSim({ data }: { data: FieldSimData }) {
  // Force–distance probe whenever inverse-relationship data is present; otherwise the
  // charged-particle deflection sim. Each mode is its own component so hooks stay top-level.
  const isForceMode = !!(data.relationship || data.quantity || data.k != null)
  return isForceMode ? <ForceProbe data={data} /> : <ParticleDeflect data={data} />
}

/* ============================ Particle deflection ============================ */
function ParticleDeflect({ data }: { data: FieldSimData }) {
  const fieldType: 'E' | 'B' = data.field === 'B' ? 'B' : 'E'
  const topLabel = data.plates?.top ?? '+'
  const botLabel = data.plates?.bottom ?? '−'

  const particles = useMemo<Required<FieldSimParticle>[]>(() => {
    const src = data.particles && data.particles.length ? data.particles : DEFAULT_PARTICLES
    return src.map((p) => ({ name: p.name, charge: chargeSign(p.charge, p.name) }))
  }, [data.particles])

  const initialIdx = useMemo(() => {
    if (data.particle) {
      const i = particles.findIndex((p) => p.name.toLowerCase().includes(data.particle!.toLowerCase()))
      if (i >= 0) return i
    }
    return 0
  }, [data.particle, particles])

  const [idx, setIdx] = useState(initialIdx)
  const [playing, setPlaying] = useState(false)
  const [t, setT] = useState(0) // 0..1 progress across the plates
  const selected = particles[idx] ?? DEFAULT_PARTICLES[0]
  const sign = chargeSign(selected.charge, selected.name)

  // Field direction: in E mode + charge pushed toward − (bottom) plate.
  // In B mode (into page), force F = qv×B flips the bend for the same sign.
  const bendDir = (fieldType === 'B' ? -1 : 1) * sign // +1 => downward, -1 => upward, 0 => straight
  const maxDeflect = (BOT_Y - MID_Y) * 0.72

  useRaf(
    (dt) => {
      setT((prev) => {
        const next = prev + dt * 0.55
        if (next >= 1) {
          setPlaying(false)
          return 1
        }
        return next
      })
    },
    playing,
  )

  // Path of the particle: horizontal motion + parabolic transverse deflection (∝ t²).
  const pathPoint = (u: number): [number, number] => {
    const x = ENTRY_X + (PLATE_X1 + 36 - ENTRY_X) * u
    // deflection only accrues while between the plates
    const inField = Math.min(1, Math.max(0, (x - PLATE_X0) / (PLATE_X1 - PLATE_X0)))
    const y = MID_Y + bendDir * maxDeflect * inField * inField
    return [x, y]
  }

  const traj = useMemo(() => {
    const N = 60
    const pts: [number, number][] = []
    for (let i = 0; i <= N; i++) pts.push(pathPoint(i / N))
    return pts
  }, [bendDir]) // eslint-disable-line react-hooks/exhaustive-deps

  const drawnPath = useMemo(() => {
    const N = 60
    const upto = Math.max(1, Math.round(N * t))
    let d = ''
    for (let i = 0; i <= upto; i++) {
      const [x, y] = pathPoint(i / N)
      d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)} `
    }
    return d
  }, [t, bendDir]) // eslint-disable-line react-hooks/exhaustive-deps

  const [headX, headY] = pathPoint(t)

  // Deterministic field-line / dot decoration seeded from particle name length + field.
  const decoSeed = (selected.name.length * 31 + (fieldType === 'B' ? 7 : 13)) >>> 0
  const bDots = useMemo(() => {
    const rnd = mulberry32(decoSeed)
    const cols = 7
    const rows = 4
    const out: { x: number; y: number }[] = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const jx = (rnd() - 0.5) * 8
        const jy = (rnd() - 0.5) * 8
        out.push({
          x: PLATE_X0 + 24 + ((PLATE_X1 - PLATE_X0 - 48) * c) / (cols - 1) + jx,
          y: TOP_Y + 30 + ((BOT_Y - TOP_Y - 60) * r) / (rows - 1) + jy,
        })
      }
    }
    return out
  }, [decoSeed])

  // Deflection direction label.
  const deflectLabel =
    bendDir === 0
      ? 'no deflection — travels straight through'
      : bendDir < 0
        ? `deflects up toward ${topLabel} plate`
        : `deflects down toward ${botLabel} plate`

  const reset = () => {
    setPlaying(false)
    setT(0)
  }

  const color = PALETTE[0]
  const particleColor = sign > 0 ? PALETTE[1] : sign < 0 ? PALETTE[4] : PALETTE[7]

  return (
    <FigureCard
      title={data.title}
      source={data.source}
      hint="Pick a particle, then press Play to fire it through the field and watch which plate it bends toward."
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Segmented
          options={particles.map((p) => ({ value: p.name, label: p.name }))}
          value={selected.name}
          onChange={(name) => {
            const i = particles.findIndex((p) => p.name === name)
            setIdx(i >= 0 ? i : 0)
            reset()
          }}
          color={color}
        />
      </div>

      <div className="relative select-none">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={data.title ?? 'field deflection'}>
          <rect x={0} y={0} width={W} height={H} fill={SURFACE} rx={10} />

          {/* ---- Field region between plates ---- */}
          {fieldType === 'E' ? (
            // vertical field lines pointing from + (top) to − (bottom)
            Array.from({ length: 9 }).map((_, i) => {
              const x = PLATE_X0 + 20 + ((PLATE_X1 - PLATE_X0 - 40) * i) / 8
              return (
                <g key={`fl${i}`}>
                  <line x1={x} y1={TOP_Y + 6} x2={x} y2={BOT_Y - 6} stroke="#cbd5e1" strokeWidth={1.5} strokeDasharray="2 6" />
                  <path d={`M${x - 4} ${MID_Y - 6} L${x} ${MID_Y} L${x + 4} ${MID_Y - 6}`} fill="none" stroke="#94a3b8" strokeWidth={1.5} />
                </g>
              )
            })
          ) : (
            // B into page: × symbols on a deterministic grid
            bDots.map((d, i) => (
              <text key={`x${i}`} x={d.x} y={d.y} textAnchor="middle" dominantBaseline="middle" fontSize={13} fill="#94a3b8" fontWeight={700}>
                ×
              </text>
            ))
          )}

          {/* ---- Plates ---- */}
          <line x1={PLATE_X0} y1={TOP_Y} x2={PLATE_X1} y2={TOP_Y} stroke={PALETTE[1]} strokeWidth={6} strokeLinecap="round" />
          <line x1={PLATE_X0} y1={BOT_Y} x2={PLATE_X1} y2={BOT_Y} stroke={PALETTE[4]} strokeWidth={6} strokeLinecap="round" />
          <text x={PLATE_X0 - 14} y={TOP_Y + 5} textAnchor="end" fontSize={18} fontWeight={800} fill={PALETTE[1]}>
            {topLabel}
          </text>
          <text x={PLATE_X0 - 14} y={BOT_Y + 6} textAnchor="end" fontSize={18} fontWeight={800} fill={PALETTE[4]}>
            {botLabel}
          </text>
          {fieldType === 'B' && (
            <text x={(PLATE_X0 + PLATE_X1) / 2} y={TOP_Y - 12} textAnchor="middle" fontSize={12} fontWeight={700} fill={SUB}>
              B field into page
            </text>
          )}

          {/* ---- Trajectory: faint full guide + drawn portion ---- */}
          <path
            d={traj.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ')}
            fill="none"
            stroke={particleColor}
            strokeWidth={1.5}
            strokeDasharray="4 5"
            opacity={0.35}
          />
          <path d={drawnPath} fill="none" stroke={particleColor} strokeWidth={3} strokeLinecap="round" />

          {/* entry arrow */}
          <path d={`M${ENTRY_X - 26} ${MID_Y} L${ENTRY_X - 4} ${MID_Y}`} stroke={SUB} strokeWidth={2} />
          <path d={`M${ENTRY_X - 9} ${MID_Y - 4} L${ENTRY_X - 4} ${MID_Y} L${ENTRY_X - 9} ${MID_Y + 4}`} fill="none" stroke={SUB} strokeWidth={2} />

          {/* moving particle head */}
          <circle cx={headX} cy={headY} r={8} fill={particleColor} stroke="#ffffff" strokeWidth={2} />
          <text x={headX} y={headY + 1} textAnchor="middle" dominantBaseline="middle" fontSize={11} fontWeight={800} fill="#ffffff">
            {sign > 0 ? '+' : sign < 0 ? '−' : '0'}
          </text>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <PlayButton playing={playing} onToggle={() => (t >= 1 ? (reset(), setPlaying(true)) : setPlaying((p) => !p))} color={color} labelPlay={t >= 1 ? 'Replay' : 'Play'} />
        <GhostButton onClick={reset} color={color}>
          Reset
        </GhostButton>
        <div className="ml-auto">
          <Readout label={selected.name} value={deflectLabel} color={particleColor} />
        </div>
      </div>

      {data.expected && (
        <p className="mt-2 text-[11px] leading-relaxed" style={{ color: SUB }}>
          Expected: <span style={{ color: INK, fontWeight: 600 }}>{data.expected}</span>
        </p>
      )}
    </FigureCard>
  )
}

/* ============================ Force–distance probe ============================ */
function ForceProbe({ data }: { data: FieldSimData }) {
  const dUnits = data.distanceUnits ?? 'cm'
  const fUnits = data.forceUnits ?? 'N'
  const [dMin, dMax] = data.distanceRange ?? [0.2, 3.0]
  const k = data.k ?? (data.forceRange && data.distanceRange ? data.forceRange[1] * data.distanceRange[0] : 700)

  // Force from inverse relationship F = k / d (clamped to any provided force range for display).
  const forceAt = (d: number) => k / d
  const [dist, setDist] = useState(() => Number(((dMin + dMax) / 2).toFixed(3)))
  const force = forceAt(dist)

  // Graph geometry
  const gw = 720
  const gh = 280
  const padL = 64
  const padR = 24
  const padT = 20
  const padB = 44
  const fRange = data.forceRange ?? [forceAt(dMax), forceAt(dMin)]
  const fLo = Math.min(fRange[0], forceAt(dMax))
  const fHi = Math.max(fRange[1], forceAt(dMin))

  const xFor = (d: number) => padL + ((d - dMin) / (dMax - dMin)) * (gw - padL - padR)
  const yFor = (f: number) => gh - padB - ((f - fLo) / (fHi - fLo || 1)) * (gh - padT - padB)

  const curve = useMemo(() => {
    const N = 80
    let p = ''
    for (let i = 0; i <= N; i++) {
      const d = dMin + ((dMax - dMin) * i) / N
      const f = Math.min(fHi, Math.max(fLo, forceAt(d)))
      p += `${i === 0 ? 'M' : 'L'}${xFor(d).toFixed(1)} ${yFor(f).toFixed(1)} `
    }
    return p
  }, [dMin, dMax, fLo, fHi, k]) // eslint-disable-line react-hooks/exhaustive-deps

  const cx = xFor(dist)
  const cy = yFor(Math.min(fHi, Math.max(fLo, force)))
  const color = PALETTE[0]

  const fmtForce = (v: number) => (v >= 100 ? v.toFixed(0) : v >= 10 ? v.toFixed(1) : v.toFixed(2))

  // axis ticks
  const xTicks = 5
  const yTicks = 4

  return (
    <FigureCard
      title={data.title}
      source={data.source}
      hint="Drag the distance slider; the force readout updates along the curve. As the gap shrinks, the force grows."
    >
      <div className="mb-2 flex flex-wrap items-center gap-3">
        {data.relationship && (
          <span className="rounded px-2 py-1 font-mono text-[12px] font-semibold" style={{ background: SURFACE, color, border: `1px solid ${LINE}` }}>
            {data.relationship}
          </span>
        )}
        <Readout label={data.readout ?? data.quantity ?? 'force'} value={fmtForce(force)} unit={fUnits} color={color} />
      </div>

      <div className="relative select-none">
        <svg viewBox={`0 0 ${gw} ${gh}`} className="block h-auto w-full" role="img" aria-label={data.title ?? 'force versus distance'}>
          <rect x={0} y={0} width={gw} height={gh} fill={SURFACE} rx={10} />

          {/* grid + ticks */}
          {Array.from({ length: xTicks + 1 }).map((_, i) => {
            const d = dMin + ((dMax - dMin) * i) / xTicks
            const x = xFor(d)
            return (
              <g key={`xt${i}`}>
                <line x1={x} y1={padT} x2={x} y2={gh - padB} stroke={LINE} strokeWidth={1} />
                <text x={x} y={gh - padB + 18} textAnchor="middle" fontSize={11} fill={SUB}>
                  {d.toFixed(1)}
                </text>
              </g>
            )
          })}
          {Array.from({ length: yTicks + 1 }).map((_, i) => {
            const f = fLo + ((fHi - fLo) * i) / yTicks
            const y = yFor(f)
            return (
              <g key={`yt${i}`}>
                <line x1={padL} y1={y} x2={gw - padR} y2={y} stroke={LINE} strokeWidth={1} />
                <text x={padL - 8} y={y + 4} textAnchor="end" fontSize={11} fill={SUB}>
                  {fmtForce(f)}
                </text>
              </g>
            )
          })}

          {/* axes */}
          <line x1={padL} y1={padT} x2={padL} y2={gh - padB} stroke={INK} strokeWidth={1.5} />
          <line x1={padL} y1={gh - padB} x2={gw - padR} y2={gh - padB} stroke={INK} strokeWidth={1.5} />
          <text x={(padL + gw - padR) / 2} y={gh - 8} textAnchor="middle" fontSize={12} fontWeight={600} fill={INK}>
            {(data.slider ?? 'distance')} ({dUnits})
          </text>
          <text x={16} y={(padT + gh - padB) / 2} textAnchor="middle" fontSize={12} fontWeight={600} fill={INK} transform={`rotate(-90 16 ${(padT + gh - padB) / 2})`}>
            {(data.quantity ?? 'force')} ({fUnits})
          </text>

          {/* curve */}
          <path d={curve} fill="none" stroke={color} strokeWidth={3} strokeLinecap="round" />

          {/* marker drop lines + point */}
          <line x1={cx} y1={cy} x2={cx} y2={gh - padB} stroke={PALETTE[1]} strokeWidth={1.5} strokeDasharray="4 4" />
          <line x1={padL} y1={cy} x2={cx} y2={cy} stroke={PALETTE[1]} strokeWidth={1.5} strokeDasharray="4 4" />
          <circle cx={cx} cy={cy} r={7} fill={PALETTE[1]} stroke="#ffffff" strokeWidth={2} />
        </svg>
      </div>

      <div className="mt-3">
        <Slider
          label={data.slider ?? 'distance between magnets'}
          min={dMin}
          max={dMax}
          step={Math.max(0.01, Number(((dMax - dMin) / 100).toFixed(3)))}
          value={dist}
          onChange={(v) => setDist(v)}
          unit={dUnits}
          color={color}
          format={(v) => `${v.toFixed(2)} ${dUnits}`}
        />
      </div>

      {data.passengerCoupling && (
        <p className="mt-2 text-[11px] leading-relaxed" style={{ color: SUB }}>
          {data.passengerCoupling}
        </p>
      )}
    </FigureCard>
  )
}
