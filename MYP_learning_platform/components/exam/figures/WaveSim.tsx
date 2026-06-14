'use client'

import { useMemo, useRef, useState } from 'react'
import {
  FigureCard,
  PlayButton,
  GhostButton,
  Slider,
  Segmented,
  Readout,
  useRaf,
  FeedbackChip,
  PALETTE,
  colorAt,
  INK,
  SUB,
  LINE,
  SURFACE,
} from './_figureKit'

/**
 * WaveSim — interactive transverse-wave / sound stimulus.
 *
 * Three behaviours, picked from `mode` (or inferred from the data shape):
 *  - "wave": frequency + amplitude sliders draw a live sine wave on a
 *    displacement-vs-time axis; readout shows period & frequency.
 *  - "match": a target waveform + lettered option waveforms of different
 *    frequency/cycles; the student selects the one whose frequency matches the
 *    target; feedback chip self-checks against `correct`/`answer`.
 *  - "soundDistance": a speaker at one end and a sound-level meter the student
 *    moves with a distance slider; level falls with an inverse-square law;
 *    readout shows the level in dB.
 *
 * Data-driven and SSR-safe: no module-scope window/RNG; animation only via the
 * kit's useRaf. Every supplied number/label renders exactly; interactivity does
 * not change the assessed quantity.
 */

export type WaveSimMode = 'wave' | 'match' | 'soundDistance'

export interface WaveSpec {
  /** Letter / short id, e.g. "A", "C". */
  id?: string
  label?: string
  /** Period in seconds (preferred if given). */
  period_s?: number
  /** Frequency in Hz. */
  frequency_Hz?: number
  /** Alias used by some encodings. */
  frequency?: number
  /** Amplitude in cm / arbitrary units. */
  amplitude_cm?: number
  amplitude?: number
  /** Whole cycles shown across the window (oscilloscope / Doppler style). */
  cycles?: number
  /** Phase offset in radians (so "inverted" / "peak first" options differ). */
  phase?: number
  /** Author note shown when this option is revealed. */
  note?: string
}

export interface WaveSimScale {
  label?: string
  min?: number
  max?: number
}

export interface WaveSimData {
  title?: string
  source?: string
  /** Explicit mode; otherwise inferred from the data shape. */
  mode?: WaveSimMode

  // ---- "wave" mode ----
  freq?: number
  amplitude?: number
  period?: number

  // ---- "match" / oscilloscope / Doppler ----
  target?: WaveSpec
  stationary?: WaveSpec
  /** Options as a map {A:{...}} or an array [{id:'A',...}]. */
  options?: Record<string, WaveSpec> | WaveSpec[]
  /** Fixed traces (oscilloscope comparison). */
  traces?: WaveSpec[]
  /** Correct option id (either key works). */
  correct?: string
  answer?: string
  /** Window length in seconds for the time axis. */
  windowSeconds?: number
  concept?: string
  task?: string
  amplitudeGridUnits?: number

  // ---- "soundDistance" mode ----
  scale?: WaveSimScale
  speakerAt?: number
  meterStart?: number
  /** Reference level in dB at 1 unit from the speaker. */
  refDb?: number
  readoutUnit?: string
}

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

const TEAL = PALETTE[0]

function num(...vals: Array<number | undefined>): number | undefined {
  for (const v of vals) if (typeof v === 'number' && isFinite(v)) return v
  return undefined
}

/** Normalise an options map/array into an ordered list. */
function asList(opts?: Record<string, WaveSpec> | WaveSpec[]): WaveSpec[] {
  if (!opts) return []
  if (Array.isArray(opts)) return opts.map((o, i) => ({ id: o.id ?? String.fromCharCode(65 + i), ...o }))
  return Object.keys(opts).map((k) => ({ id: k, ...opts[k] }))
}

/** Derive the frequency (Hz) of a spec from whatever is supplied. */
function specFreq(s: WaveSpec | undefined, windowSeconds: number): number {
  if (!s) return 1
  const f = num(s.frequency_Hz, s.frequency)
  if (f !== undefined) return f
  if (typeof s.period_s === 'number' && s.period_s > 0) return 1 / s.period_s
  if (typeof s.cycles === 'number') return s.cycles / Math.max(1e-6, windowSeconds)
  return 1
}

function specAmp(s: WaveSpec | undefined): number {
  return num(s?.amplitude_cm, s?.amplitude) ?? 1
}

/** Infer mode from the data shape when not explicit. */
function inferMode(d: WaveSimData): WaveSimMode {
  if (d.mode) return d.mode
  if (d.scale || typeof d.speakerAt === 'number' || typeof d.meterStart === 'number') return 'soundDistance'
  if (d.target || d.stationary || d.options || d.traces) return 'match'
  return 'wave'
}

/** Build a sine-wave SVG path across [x0,x1] for `cycles` whole cycles. */
function wavePath(
  x0: number,
  x1: number,
  midY: number,
  ampPx: number,
  cycles: number,
  phase: number,
  samples = 220,
): string {
  let dpath = ''
  for (let i = 0; i <= samples; i++) {
    const t = i / samples
    const x = x0 + (x1 - x0) * t
    const y = midY - ampPx * Math.sin(2 * Math.PI * cycles * t + phase)
    dpath += `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)} `
  }
  return dpath.trim()
}

// SVG geometry shared by the panels
const W = 720
const H = 220

// ---------------------------------------------------------------------------
// component
// ---------------------------------------------------------------------------

export default function WaveSim({ data }: { data: WaveSimData }) {
  const mode = inferMode(data)

  return (
    <FigureCard
      title={data.title}
      source={data.source}
      hint={
        mode === 'wave'
          ? 'Drag the frequency and amplitude sliders to reshape the wave; the period and frequency readouts update live.'
          : mode === 'match'
          ? 'Compare the waveforms and pick the option whose frequency matches the target, then check your answer.'
          : 'Drag the distance slider to move the meter away from the speaker and watch the sound level fall.'
      }
    >
      {mode === 'wave' && <WaveMode data={data} />}
      {mode === 'match' && <MatchMode data={data} />}
      {mode === 'soundDistance' && <SoundDistanceMode data={data} />}
    </FigureCard>
  )
}

// ---------------------------------------------------------------------------
// "wave" mode — live sine on a displacement-vs-time axis
// ---------------------------------------------------------------------------

function WaveMode({ data }: { data: WaveSimData }) {
  const initFreq = num(data.freq, data.period && data.period > 0 ? 1 / data.period : undefined) ?? 1
  const initAmp = num(data.amplitude) ?? 1

  const [freq, setFreq] = useState(initFreq)
  const [amp, setAmp] = useState(initAmp)
  const [playing, setPlaying] = useState(true)
  const [phase, setPhase] = useState(0)

  useRaf((dt) => setPhase((p) => (p + dt * freq * 2 * Math.PI) % (2 * Math.PI)), playing)

  const period = freq > 0 ? 1 / freq : Infinity
  const win = num(data.windowSeconds) ?? 4 // seconds across the axis
  const cycles = freq * win

  const pad = { l: 44, r: 16, t: 16, b: 30 }
  const x0 = pad.l
  const x1 = W - pad.r
  const midY = (H - pad.b + pad.t) / 2
  const ampPx = Math.min((H - pad.t - pad.b) / 2 - 6, 6 + amp * 26)

  const gridFreqs = [0.25, 0.5, 0.75]

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label="transverse wave">
        <rect x={x0} y={pad.t} width={x1 - x0} height={H - pad.t - pad.b} fill={SURFACE} stroke={LINE} />
        {/* horizontal gridlines */}
        {gridFreqs.map((g, i) => {
          const y = pad.t + (H - pad.t - pad.b) * g
          return <line key={i} x1={x0} y1={y} x2={x1} y2={y} stroke={LINE} />
        })}
        {/* zero / equilibrium line */}
        <line x1={x0} y1={midY} x2={x1} y2={midY} stroke="#cbd5e1" strokeDasharray="4 4" />
        {/* axes */}
        <line x1={x0} y1={pad.t} x2={x0} y2={H - pad.b} stroke={INK} strokeWidth={1.5} />
        <line x1={x0} y1={H - pad.b} x2={x1} y2={H - pad.b} stroke={INK} strokeWidth={1.5} />
        {/* the wave */}
        <path
          d={wavePath(x0, x1, midY, ampPx, cycles, phase)}
          fill="none"
          stroke={TEAL}
          strokeWidth={2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* amplitude marker */}
        <line x1={x0 - 5} y1={midY - ampPx} x2={x0 + 5} y2={midY - ampPx} stroke={PALETTE[1]} strokeWidth={1.5} />
        <line x1={x0 - 5} y1={midY + ampPx} x2={x0 + 5} y2={midY + ampPx} stroke={PALETTE[1]} strokeWidth={1.5} />
        {/* labels */}
        <text x={x0 - 6} y={pad.t + 4} textAnchor="end" fontSize={10} fill={SUB}>
          +
        </text>
        <text x={x0 - 6} y={H - pad.b} textAnchor="end" fontSize={10} fill={SUB}>
          −
        </text>
        <text
          x={(x0 + x1) / 2}
          y={H - 8}
          textAnchor="middle"
          fontSize={11}
          fontWeight={600}
          fill={SUB}
        >
          Time / s →
        </text>
        <text
          x={14}
          y={midY}
          textAnchor="middle"
          fontSize={11}
          fontWeight={600}
          fill={SUB}
          transform={`rotate(-90 14 ${midY})`}
        >
          Displacement
        </text>
      </svg>

      <div className="mt-3 flex flex-wrap items-end gap-3">
        <div className="min-w-[180px] flex-1">
          <Slider
            label="Frequency"
            min={0.1}
            max={5}
            step={0.05}
            value={freq}
            onChange={setFreq}
            unit="Hz"
            format={(v) => `${v.toFixed(2)} Hz`}
          />
        </div>
        <div className="min-w-[180px] flex-1">
          <Slider
            label="Amplitude"
            min={0.1}
            max={3}
            step={0.05}
            value={amp}
            onChange={setAmp}
            color={PALETTE[1]}
            format={(v) => v.toFixed(2)}
          />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <PlayButton playing={playing} onToggle={() => setPlaying((p) => !p)} />
        <GhostButton
          onClick={() => {
            setFreq(initFreq)
            setAmp(initAmp)
            setPhase(0)
          }}
        >
          Reset
        </GhostButton>
        <Readout label="Frequency" value={freq.toFixed(2)} unit="Hz" />
        <Readout label="Period" value={isFinite(period) ? period.toFixed(2) : '∞'} unit="s" color={PALETTE[1]} />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// "match" mode — target + option waveforms; select the frequency match
// ---------------------------------------------------------------------------

function MatchMode({ data }: { data: WaveSimData }) {
  const win = num(data.windowSeconds) ?? 2.4
  const target = data.target ?? data.stationary
  const correct = (data.correct ?? data.answer ?? '').toString().toUpperCase()

  // Options: explicit options, else the trace list (oscilloscope), else nothing.
  const options = useMemo<WaveSpec[]>(() => {
    const list = asList(data.options)
    if (list.length) return list
    return (data.traces ?? []).map((t, i) => ({ id: t.label ?? String.fromCharCode(65 + i), ...t }))
  }, [data.options, data.traces])

  const [picked, setPicked] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [phase, setPhase] = useState(0)

  useRaf((dt) => setPhase((p) => (p + dt * 2 * Math.PI) % (2 * Math.PI)), playing)

  const feedback: 'idle' | 'correct' | 'wrong' = !checked || !picked ? 'idle' : picked.toUpperCase() === correct ? 'correct' : 'wrong'

  // A small panel that renders one waveform.
  function Panel({
    spec,
    title,
    accent,
    big = false,
    badge,
  }: {
    spec: WaveSpec | undefined
    title: string
    accent: string
    big?: boolean
    badge?: string
  }) {
    const w = 320
    const h = big ? 120 : 96
    const pad = { l: 10, r: 10, t: 10, b: 10 }
    const cyclesOnScreen = (spec ? specFreq(spec, win) : 1) * win
    const ampUnits = specAmp(spec)
    const ampPx = Math.min((h - pad.t - pad.b) / 2 - 3, ((h - pad.t - pad.b) / 2 - 3) * Math.min(1, ampUnits / (data.amplitudeGridUnits ?? 2)))
    const midY = h / 2
    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="block h-auto w-full" role="img" aria-label={title}>
        <rect x={0.5} y={0.5} width={w - 1} height={h - 1} fill="#ffffff" stroke={LINE} rx={8} />
        <line x1={pad.l} y1={midY} x2={w - pad.r} y2={midY} stroke="#cbd5e1" strokeDasharray="3 3" />
        <path
          d={wavePath(pad.l, w - pad.r, midY, Math.max(8, ampPx), cyclesOnScreen, spec?.phase ?? phase * 0)}
          fill="none"
          stroke={accent}
          strokeWidth={2.25}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <text x={pad.l + 2} y={14} fontSize={11} fontWeight={700} fill={INK}>
          {title}
        </text>
        {badge && (
          <text x={w - pad.r - 2} y={14} textAnchor="end" fontSize={10} fontWeight={600} fill={SUB}>
            {badge}
          </text>
        )}
      </svg>
    )
  }

  const targetBadge = target
    ? typeof target.period_s === 'number'
      ? `T = ${target.period_s} s`
      : typeof target.cycles === 'number'
      ? `${target.cycles} cycles`
      : undefined
    : undefined

  return (
    <div>
      {target && (
        <div className="mb-3">
          <Panel spec={target} title={target.label ?? 'Target'} accent={INK} big badge={targetBadge} />
        </div>
      )}

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {options.map((o, i) => {
          const id = (o.id ?? String.fromCharCode(65 + i)).toString()
          const on = picked === id
          const accent = on ? colorAt(i) : PALETTE[7]
          const badge =
            typeof o.period_s === 'number'
              ? `T = ${o.period_s} s`
              : typeof o.cycles === 'number'
              ? `${o.cycles} cycles`
              : typeof (o.frequency_Hz ?? o.frequency) === 'number'
              ? `${o.frequency_Hz ?? o.frequency} Hz`
              : undefined
          return (
            <button
              key={id}
              type="button"
              onClick={() => {
                setPicked(id)
                setChecked(false)
              }}
              className="rounded-xl p-1.5 text-left transition-all"
              style={{
                border: `2px solid ${on ? colorAt(i) : LINE}`,
                background: on ? SURFACE : '#ffffff',
              }}
              aria-pressed={on}
            >
              <Panel spec={o} title={id} accent={accent} badge={badge} />
            </button>
          )
        })}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {options.length > 0 && (
          <Segmented
            options={options.map((o, i) => {
              const id = (o.id ?? String.fromCharCode(65 + i)).toString()
              return { value: id, label: id }
            })}
            value={picked}
            onChange={(v) => {
              setPicked(v)
              setChecked(false)
            }}
          />
        )}
        <GhostButton onClick={() => setChecked(true)} color={PALETTE[3]}>
          Check
        </GhostButton>
        <PlayButton playing={playing} onToggle={() => setPlaying((p) => !p)} />
        <FeedbackChip state={feedback} />
      </div>

      {checked && feedback === 'correct' && (() => {
        const sel = options.find((o, i) => (o.id ?? String.fromCharCode(65 + i)).toString().toUpperCase() === correct)
        return sel?.note ? (
          <p className="mt-2 text-[12px] leading-relaxed" style={{ color: SUB }}>
            {sel.note}
          </p>
        ) : null
      })()}

      {(data.concept || data.task) && (
        <p className="mt-2 text-[11px] leading-relaxed" style={{ color: SUB }}>
          {data.concept ?? data.task}
        </p>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// "soundDistance" mode — speaker + movable meter, inverse-square dB fall-off
// ---------------------------------------------------------------------------

function SoundDistanceMode({ data }: { data: WaveSimData }) {
  const scale = data.scale ?? {}
  const min = num(scale.min) ?? 0
  const max = num(scale.max) ?? 12
  const speakerAt = num(data.speakerAt) ?? min
  const start = Math.min(max, Math.max(min, num(data.meterStart) ?? (min + max) / 2))
  const unit = data.readoutUnit ?? 'dB'
  const axisLabel = scale.label ?? 'Distance / m'

  // Reference level so the curve is plausible and deterministic.
  const refDb = num(data.refDb) ?? 90

  const [dist, setDist] = useState(start)

  // Inverse-square law in dB: level = refDb - 20*log10(r / r0), r0 = 1 unit.
  const r = Math.max(0.001, Math.abs(dist - speakerAt))
  const db = refDb - 20 * Math.log10(Math.max(1, r))

  const pad = { l: 56, r: 24, t: 28, b: 44 }
  const x0 = pad.l
  const x1 = W - pad.r
  const span = max - min || 1
  const xOf = (d: number) => x0 + ((d - min) / span) * (x1 - x0)
  const trackY = 150
  const speakerX = xOf(speakerAt)
  const meterX = xOf(dist)

  // Ticks every sensible step
  const step = span <= 6 ? 1 : span <= 15 ? 2 : Math.ceil(span / 8)
  const ticks: number[] = []
  for (let t = min; t <= max + 1e-9; t += step) ticks.push(Number(t.toFixed(4)))

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label="sound level vs distance">
        {/* ground / field */}
        <rect x={x0} y={trackY} width={x1 - x0} height={6} fill="#e2e8f0" rx={3} />

        {/* speaker */}
        <g transform={`translate(${speakerX} ${trackY})`}>
          <rect x={-18} y={-34} width={28} height={34} rx={4} fill={TEAL} />
          <circle cx={-4} cy={-17} r={8} fill="#ffffff" opacity={0.9} />
          <circle cx={-4} cy={-17} r={3.5} fill={TEAL} />
          {/* sound rings */}
          {[14, 22, 30].map((rr, i) => (
            <path
              key={i}
              d={`M ${14} ${-17 - rr * 0.6} A ${rr} ${rr} 0 0 1 ${14} ${-17 + rr * 0.6}`}
              fill="none"
              stroke={TEAL}
              strokeWidth={2}
              opacity={0.55 - i * 0.13}
            />
          ))}
          <text x={-4} y={16} textAnchor="middle" fontSize={10} fontWeight={600} fill={SUB}>
            speaker
          </text>
        </g>

        {/* meter */}
        <g transform={`translate(${meterX} ${trackY})`} style={{ transition: 'transform 80ms linear' }}>
          <line x1={0} y1={0} x2={0} y2={-44} stroke="#94a3b8" strokeWidth={2} />
          <rect x={-30} y={-78} width={60} height={36} rx={6} fill="#0f172a" />
          <text x={0} y={-60} textAnchor="middle" fontSize={13} fontWeight={700} fill={PALETTE[3]} className="font-mono">
            {db.toFixed(1)}
          </text>
          <text x={0} y={-48} textAnchor="middle" fontSize={9} fill="#94a3b8">
            {unit}
          </text>
          <circle cx={0} cy={0} r={4} fill={PALETTE[1]} />
        </g>

        {/* axis */}
        <line x1={x0} y1={trackY + 26} x2={x1} y2={trackY + 26} stroke={INK} strokeWidth={1.5} />
        {ticks.map((t) => {
          const x = xOf(t)
          return (
            <g key={t}>
              <line x1={x} y1={trackY + 26} x2={x} y2={trackY + 31} stroke={INK} />
              <text x={x} y={trackY + 43} textAnchor="middle" fontSize={10} fill={SUB}>
                {t}
              </text>
            </g>
          )
        })}
        <text x={(x0 + x1) / 2} y={H - 4} textAnchor="middle" fontSize={11} fontWeight={600} fill={SUB}>
          {axisLabel}
        </text>
      </svg>

      <div className="mt-3 flex flex-wrap items-end gap-3">
        <div className="min-w-[200px] flex-1">
          <Slider
            label="Meter distance"
            min={min}
            max={max}
            step={Math.max(0.1, Math.round((span / 60) * 10) / 10)}
            value={dist}
            onChange={setDist}
            unit="m"
            format={(v) => `${v.toFixed(1)} m`}
            color={PALETTE[1]}
          />
        </div>
        <GhostButton onClick={() => setDist(start)}>Reset</GhostButton>
        <Readout label="Sound level" value={db.toFixed(1)} unit={unit} color={PALETTE[3]} />
        <Readout label="Distance from speaker" value={r.toFixed(1)} unit="m" />
      </div>
    </div>
  )
}
