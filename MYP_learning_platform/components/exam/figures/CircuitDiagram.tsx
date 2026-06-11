export interface CircuitDiagramData {
  components: {
    type: 'battery' | 'bulb' | 'resistor' | 'switch' | 'ammeter' | 'voltmeter'
    label?: string
  }[]
  topology: 'series' | 'parallel'
}

const COMP_W = 40  // width allocated per component symbol
const COMP_H = 24  // height of component symbol

// IEC-style symbol paths (centered at 0,0, scaled to ~40×24)
function BatterySymbol({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      {/* negative terminal (short) */}
      <line x1={-14} y1={-6} x2={-14} y2={6} stroke="#111" strokeWidth={2.5} />
      {/* positive terminal (long) */}
      <line x1={-6} y1={-10} x2={-6} y2={10} stroke="#111" strokeWidth={1.5} />
      {/* wire left */}
      <line x1={-20} y1={0} x2={-14} y2={0} stroke="#111" strokeWidth={1.5} />
      {/* wire right */}
      <line x1={-6} y1={0} x2={20} y2={0} stroke="#111" strokeWidth={1.5} />
    </g>
  )
}

function BulbSymbol({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx={0} cy={0} r={10} stroke="#111" strokeWidth={1.5} fill="none" />
      <line x1={-7} y1={-7} x2={7} y2={7} stroke="#111" strokeWidth={1.5} />
      <line x1={7} y1={-7} x2={-7} y2={7} stroke="#111" strokeWidth={1.5} />
      <line x1={-20} y1={0} x2={-10} y2={0} stroke="#111" strokeWidth={1.5} />
      <line x1={10} y1={0} x2={20} y2={0} stroke="#111" strokeWidth={1.5} />
    </g>
  )
}

function ResistorSymbol({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x={-14} y={-7} width={28} height={14} stroke="#111" strokeWidth={1.5} fill="none" />
      <line x1={-20} y1={0} x2={-14} y2={0} stroke="#111" strokeWidth={1.5} />
      <line x1={14} y1={0} x2={20} y2={0} stroke="#111" strokeWidth={1.5} />
    </g>
  )
}

function SwitchSymbol({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx={-14} cy={0} r={2} fill="#111" />
      <circle cx={14} cy={0} r={2} fill="#111" />
      {/* angled open line */}
      <line x1={-14} y1={0} x2={12} y2={-9} stroke="#111" strokeWidth={1.5} />
      <line x1={-20} y1={0} x2={-16} y2={0} stroke="#111" strokeWidth={1.5} />
      <line x1={16} y1={0} x2={20} y2={0} stroke="#111" strokeWidth={1.5} />
    </g>
  )
}

function MeterSymbol({ x, y, letter }: { x: number; y: number; letter: string }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx={0} cy={0} r={10} stroke="#111" strokeWidth={1.5} fill="white" />
      <text x={0} y={4} textAnchor="middle" fontSize={10} fontWeight={700} fill="#111">{letter}</text>
      <line x1={-20} y1={0} x2={-10} y2={0} stroke="#111" strokeWidth={1.5} />
      <line x1={10} y1={0} x2={20} y2={0} stroke="#111" strokeWidth={1.5} />
    </g>
  )
}

function renderSymbol(type: string, x: number, y: number) {
  switch (type) {
    case 'battery':   return <BatterySymbol x={x} y={y} key={`${type}${x}`} />
    case 'bulb':      return <BulbSymbol x={x} y={y} key={`${type}${x}`} />
    case 'resistor':  return <ResistorSymbol x={x} y={y} key={`${type}${x}`} />
    case 'switch':    return <SwitchSymbol x={x} y={y} key={`${type}${x}`} />
    case 'ammeter':   return <MeterSymbol x={x} y={y} letter="A" key={`${type}${x}`} />
    case 'voltmeter': return <MeterSymbol x={x} y={y} letter="V" key={`${type}${x}`} />
    default:          return null
  }
}

export default function CircuitDiagram({ data }: { data: CircuitDiagramData }) {
  const W = 360
  const H = 240
  const comps = data.components
  const n = comps.length

  if (data.topology === 'series') {
    // Single rectangular loop. Components along the top wire.
    const loopL = 30
    const loopR = W - 30
    const loopT = 60
    const loopB = H - 60

    const topWireW = loopR - loopL
    const slotW = topWireW / n
    const symbolY = loopT

    return (
      <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} className="w-full max-w-full" role="img" aria-label="Series circuit diagram">
        {/* Rectangle outline */}
        <rect x={loopL} y={loopT} width={topWireW} height={loopB - loopT} stroke="#111" strokeWidth={1.5} fill="none" />
        {/* Components on top wire (overwrite that segment) */}
        {comps.map((comp, i) => {
          const cx = loopL + slotW * i + slotW / 2
          return (
            <g key={i}>
              {/* Fill wire behind symbol */}
              {renderSymbol(comp.type, cx, symbolY)}
              {comp.label && (
                <text x={cx} y={symbolY + 22} textAnchor="middle" fontSize={10} fill="#374151">{comp.label}</text>
              )}
            </g>
          )
        })}
      </svg>
    )
  }

  // Parallel: two branches
  const halfN = Math.ceil(n / 2)
  const branch1 = comps.slice(0, halfN)
  const branch2 = comps.slice(halfN)
  const branchH = 70
  const cy1 = 70
  const cy2 = 170
  const slotW = (W - 80) / Math.max(branch1.length, 1)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} className="w-full max-w-full" role="img" aria-label="Parallel circuit diagram">
      {/* Top and bottom bus wires */}
      <line x1={20} y1={cy1} x2={W - 20} y2={cy1} stroke="#111" strokeWidth={1.5} />
      <line x1={20} y1={cy2} x2={W - 20} y2={cy2} stroke="#111" strokeWidth={1.5} />
      {/* Left vertical */}
      <line x1={20} y1={cy1} x2={20} y2={cy2} stroke="#111" strokeWidth={1.5} />
      {/* Right vertical */}
      <line x1={W - 20} y1={cy1} x2={W - 20} y2={cy2} stroke="#111" strokeWidth={1.5} />

      {/* Branch 1 (top) */}
      {branch1.map((comp, i) => {
        const cx = 40 + i * slotW + slotW / 2
        return (
          <g key={`b1-${i}`}>
            {renderSymbol(comp.type, cx, cy1)}
            {comp.label && (
              <text x={cx} y={cy1 + 22} textAnchor="middle" fontSize={10} fill="#374151">{comp.label}</text>
            )}
          </g>
        )
      })}

      {/* Branch 2 (bottom) */}
      {branch2.map((comp, i) => {
        const cx = 40 + i * slotW + slotW / 2
        return (
          <g key={`b2-${i}`}>
            {renderSymbol(comp.type, cx, cy2)}
            {comp.label && (
              <text x={cx} y={cy2 + 22} textAnchor="middle" fontSize={10} fill="#374151">{comp.label}</text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
