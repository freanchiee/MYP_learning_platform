'use client'

import { useMemo, useState } from 'react'
import {
  FigureCard,
  PlayButton,
  GhostButton,
  Segmented,
  Readout,
  useRaf,
  PALETTE,
  INK,
  SUB,
  LINE,
} from './_figureKit'

/**
 * EchemCellSim — interactive electrochemical-cell simulation (chemistry stimulus).
 *
 * Two beakers connected by a salt bridge: a FIXED anode on the left and a CATHODE
 * the student selects from `cathodeChoices`. A digital voltmeter reads the cell
 * voltage looked up from the `voltages` map (e.g. "Mg-Cu": 2.707). Electrons animate
 * along the external wire from anode → cathode. Same metal both sides = 0.000 V.
 *
 * The assessed quantity (the voltage) is read verbatim from `data.voltages` — the
 * animation is purely decorative and never alters it. SSR-safe: animation only via
 * the kit's useRaf, no module-scope RNG or window access.
 */
export interface EchemCellSimData {
  title?: string
  source?: string
  /** Fixed anode metal, e.g. "Mg". Matched case-insensitively against choices. */
  fixedAnode?: string
  /** Selectable cathode metals — full names ("Copper") or symbols ("Cu"). */
  cathodeChoices?: string[]
  /** Voltage map keyed "Anode-Cathode" by symbol, e.g. { "Mg-Cu": 2.707 }. */
  voltages?: Record<string, number>
  /** Unit string for the readout, default "V". */
  units?: string
  /** Whether to show the digital voltmeter (default true). */
  voltmeter?: boolean
}

// ── metal name ↔ symbol helpers ────────────────────────────────────────────
const NAME_TO_SYMBOL: Record<string, string> = {
  copper: 'Cu', lead: 'Pb', magnesium: 'Mg', silver: 'Ag', zinc: 'Zn',
  iron: 'Fe', aluminium: 'Al', aluminum: 'Al', tin: 'Sn', nickel: 'Ni',
  hydrogen: 'H', gold: 'Au', platinum: 'Pt', cobalt: 'Co', chromium: 'Cr',
  manganese: 'Mn', calcium: 'Ca', potassium: 'K', sodium: 'Na', lithium: 'Li',
}
function symbolOf(metal: string): string {
  const t = metal.trim()
  const byName = NAME_TO_SYMBOL[t.toLowerCase()]
  if (byName) return byName
  // already a symbol like "Mg" → normalise capitalisation
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
}
function labelOf(metal: string): string {
  return metal.trim()
}

// ── SVG geometry ────────────────────────────────────────────────────────────
const W = 560
const H = 300
const BEAKER_W = 150
const BEAKER_H = 150
const BEAKER_Y = 110
const LEFT_X = 70
const RIGHT_X = W - 70 - BEAKER_W
const WIRE_Y = 56
const ANODE_TOP_X = LEFT_X + BEAKER_W / 2
const CATHODE_TOP_X = RIGHT_X + BEAKER_W / 2

const TEAL = PALETTE[0]
const ORANGE = PALETTE[1]
const E_COUNT = 7

export default function EchemCellSim({ data }: { data: EchemCellSimData }) {
  const fixedAnode = data.fixedAnode ?? 'Mg'
  const units = data.units ?? 'V'
  const showVoltmeter = data.voltmeter !== false
  const voltages = data.voltages ?? {}

  const choices = useMemo(
    () => (data.cathodeChoices && data.cathodeChoices.length ? data.cathodeChoices : ['Copper']),
    [data.cathodeChoices],
  )

  const anodeSym = symbolOf(fixedAnode)

  const options = useMemo(
    () => choices.map((c) => ({ value: c, label: labelOf(c) })),
    [choices],
  )

  // Default the cathode to the first choice that is NOT the anode (so the cell is "on").
  const defaultCathode = useMemo(() => {
    const nonSame = choices.find((c) => symbolOf(c) !== anodeSym)
    return nonSame ?? choices[0]
  }, [choices, anodeSym])

  const [cathode, setCathode] = useState<string>(defaultCathode)
  const [playing, setPlaying] = useState(true)
  const [phase, setPhase] = useState(0) // 0..1 looping animation phase

  const cathodeSym = symbolOf(cathode)

  // Look up the cell voltage. Try "Anode-Cathode", then the reverse, then same-metal.
  const { voltage, found } = useMemo(() => {
    if (anodeSym === cathodeSym) return { voltage: 0, found: true }
    const direct = voltages[`${anodeSym}-${cathodeSym}`]
    if (typeof direct === 'number') return { voltage: direct, found: true }
    const rev = voltages[`${cathodeSym}-${anodeSym}`]
    if (typeof rev === 'number') return { voltage: rev, found: true }
    return { voltage: 0, found: false }
  }, [voltages, anodeSym, cathodeSym])

  const sameMetal = anodeSym === cathodeSym
  const live = found && voltage !== 0

  // Render the voltage EXACTLY as supplied; same-metal is the canonical 0.000.
  const voltageText = useMemo(() => {
    if (!found) return '—'
    if (sameMetal) return '0.000'
    return String(voltage)
  }, [found, sameMetal, voltage])

  // Decorative electron flow — runs only when there is a live (non-zero) cell.
  useRaf((dt) => {
    setPhase((p) => (p + dt * 0.45) % 1)
  }, playing && live)

  // electron x-positions along the top wire (anode → cathode)
  const electrons = useMemo(() => {
    const x0 = ANODE_TOP_X
    const x1 = CATHODE_TOP_X
    return Array.from({ length: E_COUNT }, (_, i) => {
      const f = (i / E_COUNT + phase) % 1
      return { f, x: x0 + (x1 - x0) * f }
    })
  }, [phase])

  return (
    <FigureCard
      title={data.title ?? 'Electrochemical cell simulation'}
      source={data.source}
      hint="Pick a cathode metal to complete the cell. The digital voltmeter reads the cell potential; electrons flow from the anode to the cathode through the wire. Same metal on both sides gives 0.000 V."
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full select-none" role="img" aria-label="Electrochemical cell">
        <defs>
          <marker id="ecs-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill={TEAL} />
          </marker>
          <linearGradient id="ecs-sol-l" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfeef0" />
            <stop offset="1" stopColor="#a5dde1" />
          </linearGradient>
          <linearGradient id="ecs-sol-r" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfeef0" />
            <stop offset="1" stopColor="#a5dde1" />
          </linearGradient>
        </defs>

        {/* external wire: anode terminal → voltmeter → cathode terminal */}
        <Wire x0={ANODE_TOP_X} x1={CATHODE_TOP_X} y={WIRE_Y} anodeY={BEAKER_Y} live={live} />

        {/* voltmeter at top centre */}
        {showVoltmeter && (
          <Voltmeter cx={W / 2} cy={WIRE_Y} value={voltageText} units={units} found={found} />
        )}

        {/* salt bridge connecting the two solutions */}
        <SaltBridge
          x0={LEFT_X + BEAKER_W - 20}
          x1={RIGHT_X + 20}
          yTop={BEAKER_Y + 26}
        />

        {/* left beaker — fixed anode */}
        <Beaker
          x={LEFT_X}
          fill="url(#ecs-sol-l)"
          electrodeColor={ORANGE}
          metal={anodeSym}
          role="Anode (–)"
          topX={ANODE_TOP_X}
        />

        {/* right beaker — selected cathode */}
        <Beaker
          x={RIGHT_X}
          fill="url(#ecs-sol-r)"
          electrodeColor={TEAL}
          metal={cathodeSym}
          role="Cathode (+)"
          topX={CATHODE_TOP_X}
        />

        {/* flowing electrons (decorative, live cells only) */}
        {live &&
          electrons.map((e, i) => (
            <g key={i} opacity={0.85}>
              <circle cx={e.x} cy={WIRE_Y} r={4.2} fill={TEAL} />
              <text x={e.x} y={WIRE_Y + 1.2} textAnchor="middle" fontSize={5.2} fontWeight={800} fill="#ffffff">
                –
              </text>
            </g>
          ))}

        {/* e⁻ direction note */}
        {live && (
          <text x={W / 2} y={WIRE_Y - 16} textAnchor="middle" fontSize={10} fontWeight={700} fill={TEAL}>
            e⁻ flow →
          </text>
        )}
      </svg>

      {/* controls */}
      <div className="mt-3 flex flex-col gap-2.5">
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: SUB }}>
            Cathode metal
          </span>
          <Segmented options={options} value={cathode} onChange={setCathode} color={TEAL} />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {showVoltmeter && (
            <Readout label="Cell voltage" value={voltageText} unit={found ? units : undefined} color={TEAL} />
          )}
          <Readout label="Cell" value={`${anodeSym} | ${cathodeSym}`} color={ORANGE} />
          {live && <PlayButton playing={playing} onToggle={() => setPlaying((p) => !p)} color={TEAL} />}
          <GhostButton onClick={() => setCathode(defaultCathode)} color={TEAL}>
            Reset
          </GhostButton>
        </div>

        {sameMetal && (
          <p className="text-[11px] font-semibold" style={{ color: ORANGE }}>
            Same metal on both electrodes → no potential difference (0.000 {units}).
          </p>
        )}
        {!found && (
          <p className="text-[11px]" style={{ color: SUB }}>
            No recorded voltage for this combination.
          </p>
        )}
      </div>
    </FigureCard>
  )
}

// ── sub-components ───────────────────────────────────────────────────────────

function Wire({ x0, x1, y, anodeY, live }: { x0: number; x1: number; y: number; anodeY: number; live: boolean }) {
  const stroke = live ? INK : '#94a3b8'
  return (
    <g>
      {/* left riser */}
      <path d={`M${x0},${anodeY - 20} L${x0},${y}`} stroke={stroke} strokeWidth={2.4} fill="none" strokeLinecap="round" />
      {/* top run */}
      <path d={`M${x0},${y} L${x1},${y}`} stroke={stroke} strokeWidth={2.4} fill="none" strokeLinecap="round" />
      {/* right riser */}
      <path d={`M${x1},${y} L${x1},${anodeY - 20}`} stroke={stroke} strokeWidth={2.4} fill="none" strokeLinecap="round" />
    </g>
  )
}

function Voltmeter({
  cx,
  cy,
  value,
  units,
  found,
}: {
  cx: number
  cy: number
  value: string
  units: string
  found: boolean
}) {
  const w = 86
  const h = 40
  return (
    <g>
      {/* connectors into the wire */}
      <rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={7} fill="#0f172a" />
      <rect x={cx - w / 2 + 5} y={cy - h / 2 + 5} width={w - 10} height={h - 14} rx={4} fill="#031c1a" />
      <text
        x={cx}
        y={cy + 1}
        textAnchor="middle"
        fontSize={15}
        fontWeight={800}
        fontFamily="ui-monospace, monospace"
        fill={found ? '#34d399' : '#475569'}
        style={{ letterSpacing: 0.5 }}
      >
        {value}
      </text>
      <text x={cx} y={cy + h / 2 - 3} textAnchor="middle" fontSize={7.5} fontWeight={700} fill="#94a3b8">
        VOLTMETER ({units})
      </text>
    </g>
  )
}

function SaltBridge({ x0, x1, yTop }: { x0: number; x1: number; yTop: number }) {
  const arch = 30
  return (
    <g>
      <path
        d={`M${x0},${yTop + 30} L${x0},${yTop - arch} Q${x0},${yTop - arch - 14} ${x0 + 14},${yTop - arch - 14}
           L${x1 - 14},${yTop - arch - 14} Q${x1},${yTop - arch - 14} ${x1},${yTop - arch} L${x1},${yTop + 30}`}
        fill="#e9d8fd"
        stroke="#b794f4"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <text x={(x0 + x1) / 2} y={yTop - arch - 3} textAnchor="middle" fontSize={9} fontWeight={700} fill="#7c3aed">
        salt bridge
      </text>
    </g>
  )
}

function Beaker({
  x,
  fill,
  electrodeColor,
  metal,
  role,
  topX,
}: {
  x: number
  fill: string
  electrodeColor: string
  metal: string
  role: string
  topX: number
}) {
  const y = BEAKER_Y
  const solY = y + 30
  const solH = BEAKER_H - 40
  const elecW = 18
  const elecX = topX - elecW / 2
  return (
    <g>
      {/* solution */}
      <path
        d={`M${x + 4},${solY} L${x + 4},${y + BEAKER_H - 8} Q${x + 4},${y + BEAKER_H} ${x + 16},${y + BEAKER_H}
           L${x + BEAKER_W - 16},${y + BEAKER_H} Q${x + BEAKER_W - 4},${y + BEAKER_H} ${x + BEAKER_W - 4},${y + BEAKER_H - 8}
           L${x + BEAKER_W - 4},${solY} Z`}
        fill={fill}
      />
      {/* electrode (metal strip dipping into solution) */}
      <rect x={elecX} y={y - 20} width={elecW} height={solH + 50} rx={2} fill={electrodeColor} opacity={0.92} />
      <rect x={elecX} y={y - 20} width={elecW} height={12} rx={2} fill="#ffffff" opacity={0.35} />
      <text x={topX} y={y + solH + 8} textAnchor="middle" fontSize={12} fontWeight={800} fill="#ffffff">
        {metal}
      </text>

      {/* beaker glass outline */}
      <path
        d={`M${x},${y} L${x},${y + BEAKER_H - 14} Q${x},${y + BEAKER_H} ${x + 16},${y + BEAKER_H}
           L${x + BEAKER_W - 16},${y + BEAKER_H} Q${x + BEAKER_W},${y + BEAKER_H} ${x + BEAKER_W},${y + BEAKER_H - 14}
           L${x + BEAKER_W},${y}`}
        fill="none"
        stroke={LINE}
        strokeWidth={3}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* role label */}
      <text x={x + BEAKER_W / 2} y={y + BEAKER_H + 18} textAnchor="middle" fontSize={11} fontWeight={700} fill={INK}>
        {role}
      </text>
      <text x={x + BEAKER_W / 2} y={y + BEAKER_H + 31} textAnchor="middle" fontSize={9} fontWeight={600} fill={SUB}>
        {metal} electrode
      </text>
    </g>
  )
}
