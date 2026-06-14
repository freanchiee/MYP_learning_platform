'use client'

/**
 * GasLawSim — Boyle's law syringe demonstration.
 *
 * A vertical sealed syringe holds a trapped gas column. Adding mass to the plunger
 * raises the total pressure  P = Patm + m·g/A  which compresses the gas inversely:
 * V = const / P  (Boyle's law, isothermal). The piston animates to its new position,
 * live readouts show P (Pa) and V, and an optional P–V inset traces the operating
 * point on the hyperbola.
 *
 * Data-driven and SSR-safe (rAF only via the kit's useRaf). Every supplied number
 * renders exactly — interactivity never changes the assessed quantity.
 */

import { useMemo, useState } from 'react'
import {
  FigureCard,
  GhostButton,
  Slider,
  Readout,
  useRaf,
  PALETTE,
  INK,
  SUB,
  LINE,
  SURFACE,
} from './_figureKit'

export interface GasLawSimData {
  title?: string
  source?: string
  /** Container description, e.g. "vertical sealed syringe". */
  vessel?: string
  /** Cross-sectional area of the plunger, in m². */
  plungerArea?: number
  /** Atmospheric pressure, in Pa. */
  atmPressure?: number
  /** Acceleration due to gravity, in m·s⁻². */
  g?: number
  /** Selectable masses to load onto the plunger, in kg. */
  massSlider_kg?: number[]
  /** Human-readable coupling description (shown as a caption). */
  coupling?: string
  /**
   * Boyle constant P·V. The number is the assessed invariant; pair it with `pvUnit`.
   * If omitted, the inset/volume scale is derived so the no-mass state reads 1.0 on
   * a relative volume axis (still inversely correct as mass changes).
   */
  constantPV_kPa_cm3?: number
  /** Unit label for the P·V product / volume readout (default "kPa·cm³" → cm³). */
  pvUnit?: string
}

// ── SVG geometry ───────────────────────────────────────────────────────────
const W = 640
const H = 320
// Syringe barrel (left half)
const BARREL_X = 70
const BARREL_W = 120
const BARREL_TOP = 28 // top of plunger travel (max volume)
const BARREL_BOT = 280 // sealed base of gas column
const GAS_MAX_H = BARREL_BOT - BARREL_TOP // pixel height for the reference (no-load) volume
// P–V inset (right half)
const INSET_X = 280
const INSET_Y = 56
const INSET_W = 300
const INSET_H = 200

const fmt = (n: number, d = 0) =>
  n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d })

export default function GasLawSim({ data }: { data: GasLawSimData }) {
  const area = data.plungerArea && data.plungerArea > 0 ? data.plungerArea : 0.00082
  const patm = data.atmPressure ?? 101300
  const g = data.g ?? 9.81
  const masses = useMemo(() => {
    const m = data.massSlider_kg && data.massSlider_kg.length ? data.massSlider_kg.slice() : [0, 0.5, 1.0, 1.4, 2.0]
    return m.map((v) => (Number.isFinite(v) ? v : 0))
  }, [data.massSlider_kg])
  const pvUnit = data.pvUnit ?? 'kPa·cm³'
  const volUnit = pvUnit.split('·')[1]?.trim() || 'cm³'

  const teal = PALETTE[0]
  const orange = PALETTE[1]

  // Pressure at a given mass (Pa). This is the assessed quantity — exact, never rounded.
  const pressureAt = (m: number) => patm + (m * g) / area

  // Pressure range across all selectable masses, for axis scaling.
  const pMin = pressureAt(Math.min(...masses))
  const pMax = pressureAt(Math.max(...masses)) || pMin + 1
  const pSpan = pMax - pMin || 1

  // Boyle constant in SI (Pa·m³). If author gave kPa·cm³, convert; else anchor so the
  // smallest-pressure (largest-volume) state maps to GAS_MAX_H pixels.
  const constPV_SI = useMemo(() => {
    if (data.constantPV_kPa_cm3 && data.constantPV_kPa_cm3 > 0) {
      // kPa·cm³ → Pa·m³ : ×1000 (kPa→Pa) ×1e-6 (cm³→m³) = ×1e-3
      return data.constantPV_kPa_cm3 * 1e-3
    }
    return null
  }, [data.constantPV_kPa_cm3])

  // Volume in display units at a given pressure.
  const volumeDisplayAt = (p: number) => {
    if (constPV_SI != null) {
      // V (m³) = const(Pa·m³) / P(Pa); to cm³ ×1e6
      return (constPV_SI / p) * 1e6
    }
    // Relative volume normalised to 1.0 at the minimum pressure (no extra load).
    return pMin / p
  }

  // Reference volume (display) at the lowest pressure — fills the full barrel.
  const volRefDisplay = volumeDisplayAt(pMin)

  // Animated mass position (eased) — index into the masses array, fractional while moving.
  const [target, setTarget] = useState(0)
  const [posF, setPosF] = useState(0) // smoothed fractional index
  const [showInset, setShowInset] = useState(true)

  const animating = Math.abs(posF - target) > 0.001
  useRaf((dt) => {
    setPosF((p) => {
      const d = target - p
      if (Math.abs(d) < 0.001) return target
      // critically-damped-ish approach
      return p + d * Math.min(1, dt * 9)
    })
  }, animating)

  // Interpolated mass / pressure at the current (possibly mid-flight) position.
  const idxLo = Math.max(0, Math.min(masses.length - 1, Math.floor(posF)))
  const idxHi = Math.max(0, Math.min(masses.length - 1, Math.ceil(posF)))
  const frac = posF - idxLo
  const liveMass = masses[idxLo] + (masses[idxHi] - masses[idxLo]) * frac
  const liveP = pressureAt(liveMass)
  const liveV = volumeDisplayAt(liveP)

  // The exact assessed values at the *selected* (settled) mass — these never interpolate.
  const selMass = masses[target] ?? masses[0]
  const selP = pressureAt(selMass)
  const selV = volumeDisplayAt(selP)

  // Gas column pixel height ∝ live volume (clamped to barrel).
  const gasH = Math.max(8, Math.min(GAS_MAX_H, (liveV / volRefDisplay) * GAS_MAX_H))
  const plungerY = BARREL_BOT - gasH

  // ── P–V inset mapping ──────────────────────────────────────────────────────
  const vForAxisMin = volumeDisplayAt(pMax)
  const vForAxisMax = volumeDisplayAt(pMin)
  const vAxisSpan = vForAxisMax - vForAxisMin || 1
  const xForP = (p: number) => INSET_X + (INSET_W * (p - pMin)) / pSpan
  const yForV = (v: number) =>
    INSET_Y + INSET_H - (INSET_H * (v - vForAxisMin)) / vAxisSpan

  // Hyperbola sample points across the pressure range.
  const curve = useMemo(() => {
    const pts: string[] = []
    const N = 48
    const k = constPV_SI != null ? constPV_SI : pMin // proportional constant for shape
    for (let i = 0; i <= N; i++) {
      const p = pMin + (pSpan * i) / N
      const v = constPV_SI != null ? (k / p) * 1e6 : k / p
      pts.push(`${xForP(p).toFixed(1)},${yForV(v).toFixed(1)}`)
    }
    return pts.join(' ')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [constPV_SI, pMin, pMax, pSpan])

  const massStep = masses.length > 1 ? 1 : 1

  return (
    <FigureCard
      title={data.title ?? "Boyle's law syringe"}
      source={data.source}
      hint="Drag the mass slider to load the plunger. Higher pressure squeezes the trapped gas into a smaller volume (P·V stays constant)."
    >
      <div className="flex flex-col gap-3">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label="Gas law syringe simulation">
          {/* ── Syringe ── */}
          {/* trapped gas column */}
          <defs>
            <linearGradient id="gasFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={teal} stopOpacity={0.28} />
              <stop offset="100%" stopColor={teal} stopOpacity={0.12} />
            </linearGradient>
          </defs>

          {/* barrel outline */}
          <rect
            x={BARREL_X}
            y={BARREL_TOP - 4}
            width={BARREL_W}
            height={BARREL_BOT - BARREL_TOP + 4}
            rx={6}
            fill="#ffffff"
            stroke={LINE}
            strokeWidth={2}
          />
          {/* sealed base */}
          <rect x={BARREL_X - 6} y={BARREL_BOT} width={BARREL_W + 12} height={10} rx={3} fill="#94a3b8" />
          {/* nozzle (sealed) */}
          <rect x={BARREL_X + BARREL_W / 2 - 7} y={BARREL_BOT + 10} width={14} height={14} rx={2} fill="#94a3b8" />

          {/* gas column */}
          <rect
            x={BARREL_X + 2}
            y={plungerY}
            width={BARREL_W - 4}
            height={BARREL_BOT - plungerY}
            fill="url(#gasFill)"
          />
          {/* faint gas particles for texture */}
          {GasDots(BARREL_X + 2, plungerY, BARREL_W - 4, BARREL_BOT - plungerY, teal)}

          {/* plunger disc */}
          <rect x={BARREL_X - 2} y={plungerY - 12} width={BARREL_W + 4} height={12} rx={3} fill={orange} />
          {/* plunger rod */}
          <rect x={BARREL_X + BARREL_W / 2 - 6} y={Math.max(BARREL_TOP - 18, plungerY - 46)} width={12} height={plungerY - 12 - Math.max(BARREL_TOP - 18, plungerY - 46)} fill="#cbd5e1" />

          {/* stacked weights on the plunger */}
          {liveMass > 0 && (
            <g>
              {Array.from({ length: Math.min(4, Math.ceil((liveMass / (Math.max(...masses) || 1)) * 4)) }).map((_, i) => (
                <rect
                  key={i}
                  x={BARREL_X + 16 + i * 4}
                  y={plungerY - 12 - 9 - i * 9}
                  width={BARREL_W - 32 - i * 8}
                  height={8}
                  rx={2}
                  fill="#64748b"
                  opacity={0.92}
                />
              ))}
              <text x={BARREL_X + BARREL_W / 2} y={Math.max(16, plungerY - 12 - 9 - 4 * 9 - 6)} textAnchor="middle" fontSize={11} fontWeight={700} fill={INK}>
                {fmt(liveMass, liveMass % 1 === 0 ? 0 : 1)} kg
              </text>
            </g>
          )}

          {/* pressure arrows pushing down */}
          <g stroke={SUB} strokeWidth={1.4} opacity={0.6}>
            {[BARREL_X + 24, BARREL_X + BARREL_W - 24].map((x, i) => (
              <g key={i}>
                <line x1={x} y1={plungerY - 30} x2={x} y2={plungerY - 16} />
                <path d={`M${x - 3} ${plungerY - 20} L${x} ${plungerY - 14} L${x + 3} ${plungerY - 20}`} fill={SUB} stroke="none" />
              </g>
            ))}
          </g>

          {/* volume bracket label */}
          <line x1={BARREL_X - 14} y1={plungerY} x2={BARREL_X - 14} y2={BARREL_BOT} stroke={teal} strokeWidth={1.4} />
          <text x={BARREL_X - 20} y={(plungerY + BARREL_BOT) / 2} textAnchor="middle" fontSize={11} fontWeight={700} fill={teal} transform={`rotate(-90 ${BARREL_X - 20} ${(plungerY + BARREL_BOT) / 2})`}>
            V
          </text>

          {/* ── P–V inset ── */}
          {showInset && (
            <g>
              <rect x={INSET_X} y={INSET_Y} width={INSET_W} height={INSET_H} fill={SURFACE} stroke={LINE} strokeWidth={1} rx={4} />
              {/* axes */}
              <line x1={INSET_X} y1={INSET_Y + INSET_H} x2={INSET_X + INSET_W} y2={INSET_Y + INSET_H} stroke={SUB} strokeWidth={1.2} />
              <line x1={INSET_X} y1={INSET_Y} x2={INSET_X} y2={INSET_Y + INSET_H} stroke={SUB} strokeWidth={1.2} />
              <text x={INSET_X + INSET_W / 2} y={INSET_Y + INSET_H + 18} textAnchor="middle" fontSize={11} fontWeight={600} fill={SUB}>
                Pressure P →
              </text>
              <text x={INSET_X - 8} y={INSET_Y + INSET_H / 2} textAnchor="middle" fontSize={11} fontWeight={600} fill={SUB} transform={`rotate(-90 ${INSET_X - 8} ${INSET_Y + INSET_H / 2})`}>
                Volume V →
              </text>
              {/* hyperbola */}
              <polyline points={curve} fill="none" stroke={teal} strokeWidth={2} />
              {/* operating point */}
              <line x1={xForP(liveP)} y1={INSET_Y + INSET_H} x2={xForP(liveP)} y2={yForV(liveV)} stroke={orange} strokeWidth={1} strokeDasharray="3 3" />
              <line x1={INSET_X} y1={yForV(liveV)} x2={xForP(liveP)} y2={yForV(liveV)} stroke={orange} strokeWidth={1} strokeDasharray="3 3" />
              <circle cx={xForP(liveP)} cy={yForV(liveV)} r={5} fill={orange} stroke="#ffffff" strokeWidth={1.5} />
              <text x={INSET_X + INSET_W - 6} y={INSET_Y + 14} textAnchor="end" fontSize={10} fontWeight={700} fill={SUB}>
                P·V = const
              </text>
            </g>
          )}
        </svg>

        {/* ── Controls ── */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex-1 min-w-[180px]">
            {masses.length > 1 ? (
              <Slider
                label="Mass on plunger"
                min={0}
                max={masses.length - 1}
                step={massStep}
                value={target}
                onChange={(v) => setTarget(Math.round(v))}
                color={orange}
                format={() => `${fmt(selMass, selMass % 1 === 0 ? 0 : 1)} kg`}
              />
            ) : (
              <span className="text-xs font-semibold" style={{ color: INK }}>
                Mass: {fmt(selMass, selMass % 1 === 0 ? 0 : 1)} kg
              </span>
            )}
            <div className="mt-1 flex flex-wrap gap-1">
              {masses.map((m, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setTarget(i)}
                  className="rounded px-1.5 py-0.5 text-[10px] font-semibold transition-all"
                  style={{
                    background: i === target ? orange : '#ffffff',
                    color: i === target ? '#ffffff' : SUB,
                    border: `1px solid ${orange}`,
                  }}
                >
                  {fmt(m, m % 1 === 0 ? 0 : 1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-end gap-2">
            <Readout label="Pressure" value={fmt(selP, 0)} unit="Pa" color={teal} />
            <Readout
              label="Volume"
              value={constPV_SI != null ? fmt(selV, selV < 10 ? 2 : 1) : `${selV.toFixed(2)}×`}
              unit={constPV_SI != null ? volUnit : 'rel.'}
              color={orange}
            />
            <GhostButton onClick={() => setShowInset((s) => !s)} color={teal}>
              {showInset ? 'Hide P–V' : 'Show P–V'}
            </GhostButton>
          </div>
        </div>

        {/* coupling caption */}
        <div className="rounded-lg px-3 py-2 text-[11px] leading-relaxed" style={{ background: SURFACE, border: `1px solid ${LINE}`, color: SUB }}>
          <span className="font-mono" style={{ color: INK }}>P = P_atm + m·g / A</span>
          {'  '}and{'  '}
          <span className="font-mono" style={{ color: INK }}>V = const / P</span>
          {data.coupling ? <span className="ml-1">· {data.coupling}</span> : null}
          <span className="ml-1">
            (P_atm = {fmt(patm, 0)} Pa, A = {area} m², g = {g} m·s⁻²
            {data.constantPV_kPa_cm3 ? `, P·V = ${fmt(data.constantPV_kPa_cm3, 0)} ${pvUnit}` : ''})
          </span>
        </div>
      </div>
    </FigureCard>
  )
}

// ── Deterministic gas particles (seeded; SSR === CSR) ─────────────────────────
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

function GasDots(x: number, y: number, w: number, h: number, color: string) {
  const rnd = mulberry32(20230501)
  const dots: { cx: number; cy: number }[] = []
  // fixed grid of candidate positions; only render those inside the current column
  for (let i = 0; i < 26; i++) {
    const cx = x + 6 + rnd() * Math.max(1, w - 12)
    const cyFrac = rnd() // 0 (top of barrel) → 1 (base)
    dots.push({ cx, cy: cyFrac })
  }
  return (
    <g fill={color} opacity={0.35}>
      {dots.map((d, i) => {
        const cy = y + 4 + d.cy * Math.max(0, h - 8)
        if (cy < y || cy > y + h) return null
        return <circle key={i} cx={d.cx} cy={cy} r={2} />
      })}
    </g>
  )
}
