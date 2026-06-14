'use client'

/**
 * SankeySim — energy-transfer Sankey diagram (interactive exam stimulus).
 *
 * Horizontal flow: an input band enters from the left and splits into useful + loss
 * bands on the right, with band WIDTHS proportional to value. Every band is labelled
 * with its value + units, and a conservation readout shows total-in vs sum-out.
 *
 * Three data shapes are supported (normalised to one flow model):
 *  1. flows:[{label,value,units,kind,highlight}] — generic; optional select-the-arrow
 *     task via selectTarget + options.
 *  2. input{label,value} + outputs[] + units — engine/efficiency Sankey; optional
 *     drag-labels-onto-bands task via mode:'drag-labels-onto-arrows' + labelBank.
 *  3. inputJ + branches[{form,valueJ,direction,blank}] — slide-energy Sankey with a
 *     blank band the student fills (balance task) + a conservation string.
 *
 * Balance interaction: if exactly one OUT band has a null/blank value, the student
 * drags a slider to set it; when the flows balance (sum out === total in) we confirm.
 *
 * SSR-safe: no module-scope window/RNG; animation only via the kit's useRaf; particle
 * positions are seeded deterministically from data so SSR and CSR agree.
 */

import { useMemo, useRef, useState } from 'react'
import {
  FigureCard,
  GhostButton,
  PlayButton,
  Slider,
  Segmented,
  Readout,
  FeedbackChip,
  useRaf,
  PALETTE,
  INK,
  SUB,
  LINE,
} from './_figureKit'

// ---- public data interface (covers every render_data shape in the grounding) ----

export type FlowKind = 'in' | 'out' | 'loss'

export interface SankeyFlow {
  label?: string
  /** numeric value; null/undefined ⇒ blank band the student must determine */
  value?: number | null
  units?: string
  kind?: FlowKind
  /** mark a band as the focus of the question */
  highlight?: boolean
  /** branch direction hint (shape 3); purely visual */
  direction?: 'straight' | 'up' | 'down'
}

export interface SankeySimData {
  title?: string
  source?: string
  units?: string
  /** generic flow list */
  flows?: SankeyFlow[]
  /** shape 2: explicit single input */
  input?: { label?: string; value?: number | null }
  /** shape 2: explicit outputs */
  outputs?: SankeyFlow[]
  /** shape 3: input in joules */
  inputJ?: number
  /** shape 3: branches */
  branches?: { form?: string; valueJ?: number | null; direction?: 'straight' | 'up' | 'down'; blank?: boolean }[]
  missingForm?: string
  missingValueJ?: number | null
  conservation?: string
  /** index (within the normalised OUT bands) that is blank; auto-detected if omitted */
  blankIndex?: number
  /** select-the-arrow task */
  selectTarget?: string
  options?: string[]
  /** drag-labels task */
  mode?: 'drag-labels-onto-arrows' | string
  labelBank?: string[]
}

// ---- geometry ----
const W = 720
const H = 300
const PAD = { l: 14, r: 14, t: 18, b: 18 }
const IN_X = 120 // right edge of the input band
const OUT_X = 560 // left edge of the output bands
const TEAL = PALETTE[0]
const LOSS_COLOR = PALETTE[1] // orange for losses
const USEFUL_COLOR = PALETTE[3] // green for useful out

// deterministic PRNG seeded from data (SSR === CSR)
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

type Band = {
  label: string
  value: number | null
  kind: FlowKind
  highlight: boolean
  blank: boolean
}

function num(v: number | null | undefined): number | null {
  return typeof v === 'number' && isFinite(v) ? v : null
}

/** Normalise any of the three shapes into a single {input, outs, units}. */
function normalise(data: SankeySimData): { inputBand: Band | null; outs: Band[]; units: string } {
  // shape 3: inputJ + branches
  if (data.inputJ != null || (data.branches && data.branches.length)) {
    const units = data.units ?? 'J'
    const inputBand: Band = {
      label: 'Input',
      value: num(data.inputJ),
      kind: 'in',
      highlight: false,
      blank: false,
    }
    const outs: Band[] = (data.branches ?? []).map((b) => {
      const isBlank = !!b.blank || num(b.valueJ) == null
      return {
        label: b.form ?? '',
        value: isBlank && data.missingValueJ != null ? null : num(b.valueJ),
        kind: 'out' as FlowKind,
        highlight: isBlank,
        blank: isBlank,
      }
    })
    return { inputBand, outs, units }
  }

  // shape 2: input + outputs
  if (data.input || (data.outputs && data.outputs.length)) {
    const units = data.units ?? ''
    const inputBand: Band = {
      label: data.input?.label ?? 'Input',
      value: num(data.input?.value),
      kind: 'in',
      highlight: false,
      blank: num(data.input?.value) == null,
    }
    const outs: Band[] = (data.outputs ?? []).map((o) => {
      const k: FlowKind = o.kind ?? (/loss/i.test(o.label ?? '') ? 'loss' : 'out')
      const blank = num(o.value) == null
      return { label: o.label ?? '', value: num(o.value), kind: k, highlight: !!o.highlight || blank, blank }
    })
    return { inputBand, outs, units }
  }

  // shape 1: flows[]
  const flows = data.flows ?? []
  const units = data.units ?? flows.find((f) => f.units)?.units ?? ''
  // classify: explicit kind wins; else first becomes input, 'loss' if labelled, else out
  let inputBand: Band | null = null
  const outs: Band[] = []
  flows.forEach((f, i) => {
    const blank = num(f.value) == null
    const labelLoss = /reflect|loss|lost|waste|escap/i.test(f.label ?? '')
    let kind: FlowKind
    if (f.kind) kind = f.kind
    else if (i === 0) kind = 'in'
    else kind = labelLoss ? 'loss' : 'out'
    const band: Band = { label: f.label ?? '', value: num(f.value), kind, highlight: !!f.highlight || blank, blank }
    if (kind === 'in' && !inputBand) inputBand = band
    else outs.push(band)
  })
  return { inputBand, outs, units }
}

function fmt(v: number | null, units: string): string {
  if (v == null) return units ? `? ${units}` : '?'
  // never round — show as-is
  const s = Number.isInteger(v) ? String(v) : String(v)
  return units ? `${s} ${units}` : s
}

function bandColor(b: Band): string {
  if (b.kind === 'in') return TEAL
  if (b.kind === 'loss') return LOSS_COLOR
  return USEFUL_COLOR
}

export default function SankeySim({ data }: { data: SankeySimData }) {
  const { inputBand, outs, units } = useMemo(() => normalise(data), [data])

  // total input value (prefer explicit input, else sum of known outs)
  const knownOutSum = outs.reduce((s, o) => s + (o.value ?? 0), 0)
  const totalIn = inputBand?.value ?? (outs.some((o) => o.blank) ? null : knownOutSum)

  // detect the (single) blank OUT band index for the balance task
  const blankIdx = useMemo(() => {
    if (typeof data.blankIndex === 'number' && outs[data.blankIndex]?.blank) return data.blankIndex
    const idxs = outs.map((o, i) => (o.blank ? i : -1)).filter((i) => i >= 0)
    return idxs.length === 1 ? idxs[0] : -1
  }, [data.blankIndex, outs])

  const balanceMode = blankIdx >= 0 && totalIn != null
  // the value that balances the diagram
  const target = balanceMode ? Math.max(0, (totalIn ?? 0) - outs.reduce((s, o, i) => (i === blankIdx ? s : s + (o.value ?? 0)), 0)) : null

  const sliderMax = balanceMode ? Math.max(1, Math.ceil((totalIn ?? 0))) : 1
  const [guess, setGuess] = useState<number>(0)
  const balanced = balanceMode && target != null && Math.abs(guess - target) < 0.5

  // select-the-arrow task
  const hasSelect = !!data.selectTarget && !!data.options?.length
  const [picked, setPicked] = useState<string | null>(null)
  const selectState: 'idle' | 'correct' | 'wrong' = picked == null ? 'idle' : picked === data.selectTarget ? 'correct' : 'wrong'

  // drag-labels task — implemented as click-to-assign (touch + a11y friendly)
  const dragMode = data.mode === 'drag-labels-onto-arrows' && !!data.labelBank?.length
  const [assign, setAssign] = useState<Record<number, string>>({})
  const [activeLabel, setActiveLabel] = useState<string | null>(null)
  const allAssigned = dragMode && outs.every((_, i) => assign[i])
  const dragCorrect = dragMode && outs.every((o, i) => assign[i] === o.label)

  // animated flow particles (seeded, deterministic)
  const [playing, setPlaying] = useState(false)
  const [phase, setPhase] = useState(0)
  useRaf((dt) => setPhase((p) => (p + dt * 0.6) % 1), playing)
  const rand = useMemo(() => {
    const seed = Math.round((totalIn ?? outs.length + 1) * 97 + outs.length * 13 + 7)
    return mulberry32(seed)
  }, [totalIn, outs.length])

  const reset = () => {
    setGuess(0)
    setPicked(null)
    setAssign({})
    setActiveLabel(null)
    setPlaying(false)
    setPhase(0)
  }

  // --- layout: band widths proportional to value -----------------------------
  const inH = H - PAD.t - PAD.b
  // scale: total-in value maps to full available height
  const scaleBasis = totalIn ?? Math.max(knownOutSum, 1)
  const px = (v: number) => (scaleBasis > 0 ? (v / scaleBasis) * inH : 0)

  // displayed value for the blank band: the guess in balance mode
  const dispVal = (o: Band, i: number): number | null => {
    if (balanceMode && i === blankIdx) return guess
    return o.value
  }

  // stack the out bands vertically on the right
  let cursor = PAD.t
  const outLayout = outs.map((o, i) => {
    const v = dispVal(o, i) ?? 0
    const h = Math.max(2, px(v))
    const y = cursor
    cursor += h + 6
    return { o, i, y, h, cy: y + h / 2 }
  })
  const totalOutH = cursor - 6 - PAD.t

  // input band centred on the average of the out band centres
  const inCY = outLayout.length ? outLayout.reduce((s, l) => s + l.cy, 0) / outLayout.length : H / 2
  const inHpx = Math.max(2, px(totalIn ?? scaleBasis))
  const inY = inCY - inHpx / 2

  const svgRef = useRef<SVGSVGElement | null>(null)

  // conservation check
  const liveOutSum = outLayout.reduce((s, l) => s + (dispVal(l.o, l.i) ?? 0), 0)
  const conserved = totalIn != null && Math.abs(liveOutSum - totalIn) < 0.5

  const hint = balanceMode
    ? 'Drag the slider to set the blank band so the energy flows balance — total in must equal total out.'
    : dragMode
      ? 'Tap a label, then tap a band to place it. Match every band to its energy form.'
      : hasSelect
        ? 'Use the buttons to choose which arrow the question refers to.'
        : 'Band widths are proportional to energy. Play to watch the flow; read off the conservation totals.'

  return (
    <FigureCard title={data.title} source={data.source} hint={hint}>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <PlayButton playing={playing} onToggle={() => setPlaying((p) => !p)} color={TEAL} labelPlay="Animate flow" labelPause="Pause" />
        <GhostButton onClick={reset} color={SUB}>Reset</GhostButton>
        {data.conservation && (
          <span className="font-mono text-[11px] rounded px-2 py-1" style={{ background: '#f1f5f9', color: INK }}>
            {data.conservation}
          </span>
        )}
      </div>

      <div className="relative select-none">
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={data.title ?? 'Sankey energy flow'} style={{ touchAction: 'none' }}>
          <defs>
            <marker id="sankey-arrow" markerWidth={8} markerHeight={8} refX={6} refY={4} orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill={SUB} />
            </marker>
          </defs>

          {/* INPUT band */}
          {inputBand && (
            <g>
              <rect x={PAD.l} y={inY} width={IN_X - PAD.l} height={inHpx} rx={4} fill={TEAL} opacity={0.9} />
              <text x={PAD.l + 6} y={inY - 6} fontSize={12} fontWeight={700} fill={INK}>
                {inputBand.label}
              </text>
              <text x={(PAD.l + IN_X) / 2} y={inCY + 4} fontSize={13} fontWeight={800} fill="#ffffff" textAnchor="middle">
                {fmt(totalIn, units)}
              </text>
            </g>
          )}

          {/* FLOW ribbons from input to each out band */}
          {outLayout.map(({ o, i, y, h, cy }) => {
            const c = bandColor(o)
            const isBlank = balanceMode && i === blankIdx
            const x0 = IN_X
            const x1 = OUT_X
            const midX = (x0 + x1) / 2
            // ribbon as a filled band that morphs from input height-slice to out height
            const topPath = `M${x0},${inY} C${midX},${inY} ${midX},${y} ${x1},${y}`
            const botPath = `L${x1},${y + h} C${midX},${y + h} ${midX},${inY + inHpx} ${x0},${inY + inHpx}`
            return (
              <path
                key={`ribbon-${i}`}
                d={`${topPath} ${botPath} Z`}
                fill={c}
                opacity={isBlank ? 0.16 : 0.28}
                stroke={isBlank ? c : 'none'}
                strokeWidth={isBlank ? 1.5 : 0}
                strokeDasharray={isBlank ? '6 5' : undefined}
              />
            )
          })}

          {/* animated particles along ribbons */}
          {playing &&
            outLayout.map(({ o, i, cy }) => {
              const c = bandColor(o)
              const count = 4
              return Array.from({ length: count }).map((_, k) => {
                const off = (rand() + k / count + phase) % 1
                const x = IN_X + off * (OUT_X - IN_X)
                // interpolate y from input centre to out centre
                const yy = inCY + (cy - inCY) * off
                return <circle key={`p-${i}-${k}`} cx={x} cy={yy} r={2.6} fill={c} opacity={0.85} />
              })
            })}

          {/* OUT bands */}
          {outLayout.map(({ o, i, y, h, cy }) => {
            const c = bandColor(o)
            const isBlank = balanceMode && i === blankIdx
            const assigned = dragMode ? assign[i] : undefined
            const shownLabel = dragMode ? assigned ?? '' : o.label
            const v = dispVal(o, i)
            const selectable = hasSelect && !!o.label
            const isPicked = hasSelect && picked === o.label
            const showHighlight = o.highlight && !balanceMode && !hasSelect && !dragMode
            return (
              <g
                key={`out-${i}`}
                onClick={() => {
                  if (dragMode && activeLabel) {
                    setAssign((m) => ({ ...m, [i]: activeLabel }))
                    setActiveLabel(null)
                  } else if (selectable) {
                    setPicked(o.label ?? null)
                  }
                }}
                style={{ cursor: dragMode || selectable ? 'pointer' : 'default' }}
              >
                <rect
                  x={OUT_X}
                  y={y}
                  width={W - PAD.r - OUT_X}
                  height={h}
                  rx={4}
                  fill={c}
                  opacity={isBlank ? 0.18 : 0.9}
                  stroke={isPicked ? INK : showHighlight ? c : isBlank ? c : 'none'}
                  strokeWidth={isPicked ? 2.5 : showHighlight ? 2 : isBlank ? 1.5 : 0}
                  strokeDasharray={isBlank ? '6 5' : undefined}
                />
                {/* arrow tip */}
                <line x1={W - PAD.r} y1={cy} x2={W - PAD.r + 1} y2={cy} stroke={SUB} markerEnd="url(#sankey-arrow)" />
                {/* value inside band */}
                <text x={OUT_X + (W - PAD.r - OUT_X) / 2} y={cy + 4} fontSize={12} fontWeight={800} fill={isBlank ? c : '#ffffff'} textAnchor="middle">
                  {isBlank ? fmt(guess > 0 ? guess : null, units) : fmt(v, units)}
                </text>
                {/* label to the right / above */}
                <text x={OUT_X} y={y - 4} fontSize={11.5} fontWeight={600} fill={INK}>
                  {shownLabel}
                  {dragMode && !assigned ? <tspan fill={SUB} fontStyle="italic"> (tap to place)</tspan> : null}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* conservation readout */}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <Readout label="Total in" value={fmt(totalIn, units)} color={TEAL} />
        <span className="text-lg font-bold" style={{ color: SUB }}>=</span>
        <Readout label="Total out" value={fmt(balanceMode ? liveOutSum : knownOutSum, units)} color={conserved ? USEFUL_COLOR : LOSS_COLOR} />
        {totalIn != null && (
          <span
            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold"
            style={{ background: conserved ? '#e6f4ea' : '#fff4e6', color: conserved ? '#2f9e44' : '#e8590c' }}
          >
            {conserved ? '✓ balanced' : 'not balanced'}
          </span>
        )}
      </div>

      {/* BALANCE slider task */}
      {balanceMode && (
        <div className="mt-3 rounded-lg p-3" style={{ background: '#f8fafc', border: `1px solid ${LINE}` }}>
          <Slider
            label={`Set: ${outs[blankIdx]?.label || 'blank band'}`}
            min={0}
            max={sliderMax}
            step={units === 'J' || Number.isInteger(target ?? 0) ? 1 : 0.1}
            value={guess}
            onChange={setGuess}
            unit={units}
            color={TEAL}
          />
          <div className="mt-2">
            <FeedbackChip state={guess === 0 ? 'idle' : balanced ? 'correct' : 'wrong'} />
            {balanced && (
              <span className="ml-2 text-[11px] font-semibold" style={{ color: '#2f9e44' }}>
                Flows balance: {fmt(totalIn, units)} in = {fmt(liveOutSum, units)} out.
              </span>
            )}
          </div>
        </div>
      )}

      {/* SELECT-the-arrow task */}
      {hasSelect && !balanceMode && (
        <div className="mt-3 rounded-lg p-3" style={{ background: '#f8fafc', border: `1px solid ${LINE}` }}>
          <p className="mb-1.5 text-xs font-semibold" style={{ color: INK }}>Which arrow does the question refer to?</p>
          <Segmented
            options={(data.options ?? []).map((o) => ({ value: o, label: o }))}
            value={picked}
            onChange={setPicked}
            color={TEAL}
          />
          <div className="mt-2">
            <FeedbackChip state={selectState} />
          </div>
        </div>
      )}

      {/* DRAG-labels task */}
      {dragMode && (
        <div className="mt-3 rounded-lg p-3" style={{ background: '#f8fafc', border: `1px solid ${LINE}` }}>
          <p className="mb-1.5 text-xs font-semibold" style={{ color: INK }}>Tap a label, then tap a band:</p>
          <div className="flex flex-wrap gap-1.5">
            {(data.labelBank ?? []).map((lab) => {
              const used = Object.values(assign).includes(lab)
              const on = activeLabel === lab
              return (
                <button
                  key={lab}
                  type="button"
                  onClick={() => setActiveLabel(on ? null : lab)}
                  disabled={used}
                  className="rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all disabled:opacity-40"
                  style={{ background: on ? TEAL : '#ffffff', color: on ? '#ffffff' : '#475569', border: `1.5px solid ${TEAL}` }}
                >
                  {lab}
                </button>
              )
            })}
          </div>
          <div className="mt-2 flex items-center gap-2">
            {allAssigned && <FeedbackChip state={dragCorrect ? 'correct' : 'wrong'} />}
            <GhostButton onClick={() => { setAssign({}); setActiveLabel(null) }} color={SUB}>Clear labels</GhostButton>
          </div>
        </div>
      )}
    </FigureCard>
  )
}
