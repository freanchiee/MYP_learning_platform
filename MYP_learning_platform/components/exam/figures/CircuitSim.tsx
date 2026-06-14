'use client'

/**
 * CircuitSim — interactive circuit stimulus for resistance / I-V measurement tasks.
 *
 * Two modes:
 *  - "iv"   : a schematic (cell, component-under-test, ammeter A in series, voltmeter V
 *             in parallel). A value slider sweeps through the supplied I-V trials; the
 *             meters update live and a readout shows R = V / I for the active trial.
 *  - "place": drag an Ammeter chip into the series slot and a Voltmeter chip into the
 *             parallel slot, then check against the correct placement (feedback chip).
 *
 * DATA-DRIVEN: the public interface covers every render_data shape in the grounding set
 * (plain {V,I} pairs, {Rvar,I,Vbulb,brightness} pairs, place-the-meter tasks with slots +
 * knownTrial, a labelled variableResistor sweep, a named component, an emf). Every field
 * is optional with a sane fallback; the component renders something correct on partial data
 * and never crashes. No window/RNG at module scope — SSR-safe.
 */

import { useMemo, useState } from 'react'
import {
  FigureCard,
  GhostButton,
  Slider,
  Segmented,
  Readout,
  FeedbackChip,
  PALETTE,
  INK,
  SUB,
  LINE,
  SURFACE,
} from './_figureKit'

const TEAL = PALETTE[0]

/** One measured trial. Different papers populate different fields — all optional. */
export interface CircuitTrial {
  V?: number // voltmeter / supply voltage (V)
  I?: number // ammeter current (A)
  R?: number // explicit resistance if supplied (ohm)
  Rvar?: number // variable-resistor setting for this trial (ohm)
  Vbulb?: number // voltage across the component when there is a series resistor (V)
  brightness?: string // qualitative label e.g. "full" / "dim"
  readFromAmmeter?: string // e.g. "601 mA" — exact meter face text to show
  label?: string // optional axis label override
}

export interface CircuitSlot {
  id: string // e.g. "ammeter" | "voltmeter"
  correct?: string // e.g. "series with wire" | "parallel with wire"
}

export interface CircuitVariableResistor {
  min?: number
  max?: number
  step?: number
  label?: string
}

export interface CircuitSimData {
  title?: string
  source?: string
  mode?: 'iv' | 'place'
  /** Label for the component under test (cell drives this). */
  component?: string
  /** Synonyms accepted from the grounding data. */
  wire?: string
  /** Source emf / battery. `battery` may be a string like "fixed". */
  emf?: number
  battery?: string | number
  /** The measured trials the slider sweeps through. */
  ivPairs?: CircuitTrial[]
  /** A single highlighted trial (place mode shows this once meters are placed). */
  knownTrial?: CircuitTrial
  /** Place-mode slots to fill. */
  slots?: CircuitSlot[]
  /** Optional config for the variable-resistor slider. */
  variableResistor?: CircuitVariableResistor
  /** Free-text task description (rendered as the hint fallback). */
  task?: string
}

const fmt = (n: number, dp = 2) => {
  if (!Number.isFinite(n)) return '—'
  const r = Math.round(n * 10 ** dp) / 10 ** dp
  return Number.isInteger(r) ? String(r) : r.toFixed(dp).replace(/0+$/, '').replace(/\.$/, '')
}

/** Pick the most descriptive label for a trial along the slider. */
function trialLabel(t: CircuitTrial, vr?: CircuitVariableResistor): string {
  if (t.label) return t.label
  if (t.Rvar != null) return `${fmt(t.Rvar)} Ω`
  if (t.V != null) return `${fmt(t.V)} V`
  return ''
}

// ── schematic geometry ──────────────────────────────────────────────────────
const W = 460
const H = 240

export default function CircuitSim({ data }: { data: CircuitSimData }) {
  const mode: 'iv' | 'place' = data.mode ?? (data.slots && data.slots.length ? 'place' : 'iv')
  const componentName = data.component ?? data.wire ?? 'component'
  const emfText =
    data.emf != null
      ? `${fmt(data.emf)} V`
      : typeof data.battery === 'number'
        ? `${fmt(data.battery)} V`
        : typeof data.battery === 'string'
          ? data.battery
          : 'cell'

  const pairs = useMemo<CircuitTrial[]>(() => {
    if (data.ivPairs && data.ivPairs.length) return data.ivPairs
    if (data.knownTrial) return [data.knownTrial]
    return []
  }, [data.ivPairs, data.knownTrial])

  return (
    <FigureCard
      title={data.title ?? (mode === 'place' ? 'Build the measuring circuit' : 'Circuit measurement')}
      source={data.source}
      hint={
        mode === 'place'
          ? 'Tap the Ammeter and Voltmeter chips into the correct slots (ammeter in series, voltmeter in parallel), then check your answer.'
          : data.task
            ? data.task
            : 'Drag the slider to sweep through the measured trials; the ammeter and voltmeter update live and R = V / I is read out below.'
      }
    >
      {mode === 'place' ? (
        <PlaceMode data={data} componentName={componentName} emfText={emfText} />
      ) : (
        <IvMode data={data} pairs={pairs} componentName={componentName} emfText={emfText} />
      )}
    </FigureCard>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// IV MODE — slider sweeps trials, live meters, R = V/I readout
// ════════════════════════════════════════════════════════════════════════════
function IvMode({
  data,
  pairs,
  componentName,
  emfText,
}: {
  data: CircuitSimData
  pairs: CircuitTrial[]
  componentName: string
  emfText: string
}) {
  const n = pairs.length
  const [idx, setIdx] = useState(0)
  const i = Math.min(idx, Math.max(0, n - 1))
  const t: CircuitTrial = pairs[i] ?? data.knownTrial ?? {}

  // Voltmeter reads the voltage across the component-under-test.
  const Vmeter = t.Vbulb ?? t.V
  const Imeter = t.I
  const ammeterFace = t.readFromAmmeter ?? (Imeter != null ? `${fmt(Imeter, 3)} A` : '— A')
  const voltFace = Vmeter != null ? `${fmt(Vmeter, 3)} V` : '— V'
  // Resistance: explicit if given, else V/I of the meter values.
  const R =
    t.R ??
    (Vmeter != null && Imeter != null && Imeter !== 0 ? Vmeter / Imeter : undefined)

  const vr = data.variableResistor
  const sliderLabel = vr?.label ?? (pairs.some((p) => p.Rvar != null) ? 'Variable resistor' : 'Trial')

  return (
    <div className="flex flex-col gap-3">
      <Schematic
        componentName={componentName}
        emfText={emfText}
        hasSeriesResistor={pairs.some((p) => p.Rvar != null)}
        seriesResistorLabel={t.Rvar != null ? `${fmt(t.Rvar)} Ω` : undefined}
        ammeterFace={ammeterFace}
        voltFace={voltFace}
        brightness={t.brightness}
      />

      {n > 0 && (
        <Slider
          label={sliderLabel}
          min={0}
          max={Math.max(0, n - 1)}
          step={1}
          value={i}
          onChange={(v) => setIdx(Math.round(v))}
          color={TEAL}
          format={() => trialLabel(t, vr) || `${i + 1} / ${n}`}
        />
      )}

      <div className="flex flex-wrap items-stretch gap-2">
        <Readout label="Ammeter" value={ammeterFace.replace(/\s*A$/, '')} unit="A" color={PALETTE[4]} />
        <Readout label="Voltmeter" value={voltFace.replace(/\s*V$/, '')} unit="V" color={PALETTE[1]} />
        <Readout
          label="R = V / I"
          value={R != null ? fmt(R, 2) : '—'}
          unit={R != null ? 'Ω' : undefined}
          color={TEAL}
        />
      </div>

      {n > 1 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[11px]" style={{ color: INK }}>
            <thead>
              <tr style={{ color: SUB }}>
                {pairs.some((p) => p.Rvar != null) && <th className="px-2 py-1 text-left font-semibold">R<sub>var</sub>/&#8486;</th>}
                <th className="px-2 py-1 text-left font-semibold">V / V</th>
                <th className="px-2 py-1 text-left font-semibold">I / A</th>
                {pairs.some((p) => p.brightness) && <th className="px-2 py-1 text-left font-semibold">Brightness</th>}
              </tr>
            </thead>
            <tbody>
              {pairs.map((p, k) => {
                const on = k === i
                return (
                  <tr
                    key={k}
                    onClick={() => setIdx(k)}
                    style={{
                      cursor: 'pointer',
                      background: on ? SURFACE : 'transparent',
                      borderLeft: `3px solid ${on ? TEAL : 'transparent'}`,
                      fontWeight: on ? 700 : 400,
                    }}
                  >
                    {pairs.some((q) => q.Rvar != null) && <td className="px-2 py-1">{p.Rvar != null ? fmt(p.Rvar) : '—'}</td>}
                    <td className="px-2 py-1">{(p.Vbulb ?? p.V) != null ? fmt(p.Vbulb ?? p.V!, 3) : '—'}</td>
                    <td className="px-2 py-1">{p.I != null ? fmt(p.I, 3) : '—'}</td>
                    {pairs.some((q) => q.brightness) && <td className="px-2 py-1" style={{ color: SUB }}>{p.brightness ?? '—'}</td>}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {n === 0 && (
        <p className="text-[12px]" style={{ color: SUB }}>
          No trials supplied. Showing an empty {componentName} circuit.
        </p>
      )}
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// PLACE MODE — assign each meter chip to a slot, check against the key
// ════════════════════════════════════════════════════════════════════════════
type SlotChoice = 'series' | 'parallel' | null

/** Normalise a "correct" string from data into series/parallel. */
function correctSide(s?: string): SlotChoice {
  if (!s) return null
  const l = s.toLowerCase()
  if (l.includes('series')) return 'series'
  if (l.includes('parallel')) return 'parallel'
  return null
}

function PlaceMode({
  data,
  componentName,
  emfText,
}: {
  data: CircuitSimData
  componentName: string
  emfText: string
}) {
  // Determine which meters need placing. Default to the standard A + V pair.
  const slots = useMemo<CircuitSlot[]>(() => {
    if (data.slots && data.slots.length) return data.slots
    return [
      { id: 'ammeter', correct: 'series with wire' },
      { id: 'voltmeter', correct: 'parallel with wire' },
    ]
  }, [data.slots])

  const ammeterKey = correctSide(slots.find((s) => /amm/i.test(s.id))?.correct) ?? 'series'
  const voltKey = correctSide(slots.find((s) => /volt/i.test(s.id))?.correct) ?? 'parallel'

  const [ammeterAt, setAmmeterAt] = useState<SlotChoice>(null)
  const [voltAt, setVoltAt] = useState<SlotChoice>(null)
  const [checked, setChecked] = useState(false)

  const allPlaced = ammeterAt != null && voltAt != null
  const correct = allPlaced && ammeterAt === ammeterKey && voltAt === voltKey
  const feedback: 'idle' | 'correct' | 'wrong' = !checked ? 'idle' : correct ? 'correct' : 'wrong'

  const known = data.knownTrial
  const R =
    known?.R ??
    (known?.V != null && known?.I != null && known.I !== 0 ? known.V / known.I : undefined)

  const sideOptions = [
    { value: 'series' as const, label: 'Series slot' },
    { value: 'parallel' as const, label: 'Parallel slot' },
  ]

  return (
    <div className="flex flex-col gap-3">
      <Schematic
        componentName={componentName}
        emfText={emfText}
        ammeterFace={checked && correct ? (known?.I != null ? `${fmt(known.I, 3)} A` : 'A') : 'A?'}
        voltFace={checked && correct ? (known?.V != null ? `${fmt(known.V, 3)} V` : 'V') : 'V?'}
        ammeterPlaced={ammeterAt}
        voltPlaced={voltAt}
        showSlots
      />

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold" style={{ color: PALETTE[4] }}>Ammeter (A) goes in:</span>
          <Segmented
            options={sideOptions}
            value={ammeterAt}
            onChange={(v) => {
              setAmmeterAt(v)
              setChecked(false)
            }}
            color={PALETTE[4]}
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold" style={{ color: PALETTE[1] }}>Voltmeter (V) goes in:</span>
          <Segmented
            options={sideOptions}
            value={voltAt}
            onChange={(v) => {
              setVoltAt(v)
              setChecked(false)
            }}
            color={PALETTE[1]}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <GhostButton onClick={() => setChecked(true)} color={TEAL}>
          Check placement
        </GhostButton>
        <GhostButton
          onClick={() => {
            setAmmeterAt(null)
            setVoltAt(null)
            setChecked(false)
          }}
          color={SUB}
        >
          Reset
        </GhostButton>
        <FeedbackChip state={feedback} />
      </div>

      {checked && correct && (R != null || known) && (
        <div className="flex flex-wrap items-stretch gap-2">
          {known?.V != null && <Readout label="Voltmeter" value={fmt(known.V, 3)} unit="V" color={PALETTE[1]} />}
          {known?.I != null && <Readout label="Ammeter" value={fmt(known.I, 3)} unit="A" color={PALETTE[4]} />}
          {R != null && <Readout label="R = V / I" value={fmt(R, 2)} unit="Ω" color={TEAL} />}
        </div>
      )}
    </div>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// SCHEMATIC — shared SVG circuit drawing (cell · A in series · component · V in parallel)
// ════════════════════════════════════════════════════════════════════════════
function Schematic({
  componentName,
  emfText,
  hasSeriesResistor,
  seriesResistorLabel,
  ammeterFace,
  voltFace,
  brightness,
  ammeterPlaced,
  voltPlaced,
  showSlots,
}: {
  componentName: string
  emfText: string
  hasSeriesResistor?: boolean
  seriesResistorLabel?: string
  ammeterFace: string
  voltFace: string
  brightness?: string
  ammeterPlaced?: SlotChoice
  voltPlaced?: SlotChoice
  showSlots?: boolean
}) {
  // Layout: rectangular loop. Top wire holds (left→right): cell, ammeter, component.
  // Voltmeter hangs below the component (parallel branch).
  const x0 = 40
  const x1 = W - 40
  const yTop = 56
  const yBot = 184
  const compX = 320 // component centre on top wire
  const ammX = 170 // ammeter centre on top wire

  const ammActive = !showSlots || ammeterPlaced === 'series'
  const voltActive = !showSlots || voltPlaced === 'parallel'

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label="circuit schematic">
        {/* outer loop wires */}
        <g stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round">
          {/* top wire (with gaps for cell, ammeter, component) */}
          <line x1={x0} y1={yTop} x2={x0 + 30} y2={yTop} />
          <line x1={x0 + 62} y1={yTop} x2={ammX - 18} y2={yTop} />
          <line x1={ammX + 18} y1={yTop} x2={compX - 26} y2={yTop} />
          <line x1={compX + 26} y1={yTop} x2={x1} y2={yTop} />
          {/* right wire */}
          <line x1={x1} y1={yTop} x2={x1} y2={yBot} />
          {/* bottom wire */}
          <line x1={x1} y1={yBot} x2={x0} y2={yBot} />
          {/* left wire */}
          <line x1={x0} y1={yBot} x2={x0} y2={yTop} />
        </g>

        {/* cell / battery symbol (top-left gap) */}
        <g>
          <line x1={x0 + 30} y1={yTop - 14} x2={x0 + 30} y2={yTop + 14} stroke={INK} strokeWidth={2.5} />
          <line x1={x0 + 40} y1={yTop - 7} x2={x0 + 40} y2={yTop + 7} stroke={INK} strokeWidth={4.5} />
          <line x1={x0 + 50} y1={yTop - 14} x2={x0 + 50} y2={yTop + 14} stroke={INK} strokeWidth={2.5} />
          <line x1={x0 + 60} y1={yTop - 7} x2={x0 + 60} y2={yTop + 7} stroke={INK} strokeWidth={4.5} />
          <text x={x0 + 45} y={yTop - 22} textAnchor="middle" fontSize={11} fontWeight={700} fill={INK}>
            {emfText}
          </text>
        </g>

        {/* ammeter (series, on top wire) */}
        <Meter
          cx={ammX}
          cy={yTop}
          letter="A"
          face={ammActive ? ammeterFace : ''}
          color={PALETTE[4]}
          ghost={showSlots && ammeterPlaced !== 'series'}
        />
        {showSlots && ammeterPlaced !== 'series' && <SlotMarker cx={ammX} cy={yTop} label="series slot" />}

        {/* component under test (top wire, right) */}
        <g>
          <rect
            x={compX - 26}
            y={yTop - 13}
            width={52}
            height={26}
            rx={4}
            fill={SURFACE}
            stroke={INK}
            strokeWidth={2.5}
          />
          {/* brightness glow if it's a lamp-like component */}
          {brightness && (
            <circle
              cx={compX}
              cy={yTop}
              r={10}
              fill={PALETTE[6]}
              opacity={
                brightness.includes('full')
                  ? 0.85
                  : brightness.includes('very')
                    ? 0.18
                    : brightness.includes('dim')
                      ? 0.38
                      : 0.55
              }
            />
          )}
          <text x={compX} y={yTop - 21} textAnchor="middle" fontSize={11} fontWeight={700} fill={INK}>
            {componentName}
          </text>
        </g>

        {/* optional series variable-resistor marker (between ammeter and component) */}
        {hasSeriesResistor && (
          <g>
            <rect x={235} y={yTop - 9} width={30} height={18} rx={2} fill="#fff" stroke={INK} strokeWidth={2} />
            <line x1={233} y1={yTop - 13} x2={267} y2={yTop + 5} stroke={INK} strokeWidth={2} />
            <polygon points={`267,${yTop + 5} 261,${yTop + 4} 265,${yTop}`} fill={INK} />
            {seriesResistorLabel && (
              <text x={250} y={yTop + 26} textAnchor="middle" fontSize={10} fontWeight={600} fill={SUB}>
                {seriesResistorLabel}
              </text>
            )}
          </g>
        )}

        {/* voltmeter — parallel branch dropping from the component to the bottom wire */}
        <g stroke={voltActive ? INK : LINE} strokeWidth={2} fill="none" strokeDasharray={voltActive ? undefined : '4 4'}>
          <line x1={compX - 26} y1={yTop} x2={compX - 26} y2={120} />
          <line x1={compX + 26} y1={yTop} x2={compX + 26} y2={120} />
          <line x1={compX - 26} y1={yBot} x2={compX - 26} y2={140} />
          <line x1={compX + 26} y1={yBot} x2={compX + 26} y2={140} />
        </g>
        <Meter
          cx={compX}
          cy={130}
          letter="V"
          face={voltActive ? voltFace : ''}
          color={PALETTE[1]}
          ghost={showSlots && voltPlaced !== 'parallel'}
        />
        {showSlots && voltPlaced !== 'parallel' && <SlotMarker cx={compX} cy={130} label="parallel slot" />}
      </svg>
    </div>
  )
}

/** Round meter symbol with a centre letter and a small live face value. */
function Meter({
  cx,
  cy,
  letter,
  face,
  color,
  ghost,
}: {
  cx: number
  cy: number
  letter: string
  face: string
  color: string
  ghost?: boolean
}) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={18} fill="#fff" stroke={ghost ? LINE : color} strokeWidth={2.5} strokeDasharray={ghost ? '4 4' : undefined} />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize={15} fontWeight={800} fill={ghost ? LINE : color}>
        {letter}
      </text>
      {face && !ghost && (
        <text x={cx} y={cy + 33} textAnchor="middle" fontSize={11} fontWeight={700} fill={INK}>
          {face}
        </text>
      )}
    </g>
  )
}

/** Dashed placeholder circle shown when a slot is empty in place-mode. */
function SlotMarker({ cx, cy, label }: { cx: number; cy: number; label: string }) {
  return (
    <text x={cx} y={cy + 34} textAnchor="middle" fontSize={9} fontWeight={600} fill={SUB}>
      {label}
    </text>
  )
}
