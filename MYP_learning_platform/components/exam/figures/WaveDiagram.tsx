export interface WaveDiagramData {
  type: 'transverse' | 'longitudinal'
  labelAmplitude?: boolean
  labelWavelength?: boolean
  labelPeriod?: boolean
}

function TransverseWave({ data }: { data: WaveDiagramData }) {
  const W = 400
  const H = 200
  const cx = W / 2
  const cy = H / 2
  const amplitude = 50
  const cycles = 2
  const plotW = W - 40

  // Generate sine path for 2 full cycles
  const points: string[] = []
  const steps = 400
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const x = 20 + t * plotW
    const y = cy - amplitude * Math.sin(2 * Math.PI * cycles * t)
    points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`)
  }
  const sinePath = points.join(' ')

  // One wavelength = plotW / cycles
  const lambda = plotW / cycles
  const x0 = 20   // start x
  const x1 = x0 + lambda

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} className="w-full max-w-full" role="img" aria-label="Transverse wave diagram">
      {/* Centre line */}
      <line x1={20} y1={cy} x2={W - 20} y2={cy} stroke="#9ca3af" strokeWidth={1} strokeDasharray="4 3" />

      {/* Wave */}
      <path d={sinePath} stroke="#2563eb" strokeWidth={2} fill="none" />

      {/* Amplitude label */}
      {data.labelAmplitude && (
        <>
          {/* Arrow from cy to peak at 1/4 wavelength */}
          <line x1={x0 + lambda * 0.25} y1={cy} x2={x0 + lambda * 0.25} y2={cy - amplitude}
            stroke="#dc2626" strokeWidth={1.5} markerEnd="url(#arrowUp)" markerStart="url(#arrowDown)" />
          <text x={x0 + lambda * 0.25 + 6} y={cy - amplitude / 2 + 4} fontSize={12} fill="#dc2626" fontWeight={600}>A</text>
        </>
      )}

      {/* Wavelength label */}
      {data.labelWavelength && (
        <>
          <line x1={x0} y1={cy + amplitude + 14} x2={x1} y2={cy + amplitude + 14}
            stroke="#059669" strokeWidth={1.5} markerEnd="url(#arrowR)" markerStart="url(#arrowL)" />
          <text x={(x0 + x1) / 2} y={cy + amplitude + 28} fontSize={12} fill="#059669" fontWeight={600} textAnchor="middle">λ</text>
        </>
      )}

      {/* Period label */}
      {data.labelPeriod && !data.labelWavelength && (
        <>
          <line x1={x0} y1={cy + amplitude + 14} x2={x1} y2={cy + amplitude + 14}
            stroke="#7c3aed" strokeWidth={1.5} markerEnd="url(#arrowR)" markerStart="url(#arrowL)" />
          <text x={(x0 + x1) / 2} y={cy + amplitude + 28} fontSize={12} fill="#7c3aed" fontWeight={600} textAnchor="middle">T</text>
        </>
      )}

      {/* Arrow markers */}
      <defs>
        <marker id="arrowUp" markerWidth={6} markerHeight={6} refX={3} refY={6} orient="auto">
          <path d="M0,6 L3,0 L6,6" stroke="#dc2626" strokeWidth={1} fill="none" />
        </marker>
        <marker id="arrowDown" markerWidth={6} markerHeight={6} refX={3} refY={0} orient="auto-start-reverse">
          <path d="M0,0 L3,6 L6,0" stroke="#dc2626" strokeWidth={1} fill="none" />
        </marker>
        <marker id="arrowR" markerWidth={6} markerHeight={6} refX={6} refY={3} orient="auto">
          <path d="M0,0 L6,3 L0,6" stroke="currentColor" strokeWidth={1} fill="none" />
        </marker>
        <marker id="arrowL" markerWidth={6} markerHeight={6} refX={0} refY={3} orient="auto-start-reverse">
          <path d="M6,0 L0,3 L6,6" stroke="currentColor" strokeWidth={1} fill="none" />
        </marker>
      </defs>
    </svg>
  )
}

function LongitudinalWave() {
  const W = 400
  const H = 120
  const groups = 5
  const groupW = W / groups
  const lineCount = 7
  const cy = H / 2
  const lineH = 28

  // Compression at groups 1 and 3, rarefaction at groups 0 and 2, group 4 = compression
  const spacings = [2, 6, 10, 6, 2]  // line spacing within group (px)

  const lines: { x: number; group: number }[] = []
  let curX = 18
  for (let g = 0; g < groups; g++) {
    const sp = spacings[g]
    const totalW = sp * (lineCount - 1)
    const start = curX + (groupW - 8 - totalW) / 2
    for (let l = 0; l < lineCount; l++) {
      lines.push({ x: start + l * sp, group: g })
    }
    curX += groupW
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} className="w-full max-w-full" role="img" aria-label="Longitudinal wave diagram">
      {lines.map((ln, i) => (
        <line key={i} x1={ln.x} y1={cy - lineH / 2} x2={ln.x} y2={cy + lineH / 2}
          stroke="#2563eb" strokeWidth={1.5} />
      ))}

      {/* C and R labels */}
      <text x={groupW * 0.5} y={14} textAnchor="middle" fontSize={11} fill="#374151" fontWeight={600}>R</text>
      <text x={groupW * 1.5} y={14} textAnchor="middle" fontSize={11} fill="#374151" fontWeight={600}>C</text>
      <text x={groupW * 2.5} y={14} textAnchor="middle" fontSize={11} fill="#374151" fontWeight={600}>R</text>
      <text x={groupW * 3.5} y={14} textAnchor="middle" fontSize={11} fill="#374151" fontWeight={600}>C</text>
      <text x={groupW * 4.5} y={14} textAnchor="middle" fontSize={11} fill="#374151" fontWeight={600}>R</text>

      {/* Direction arrow */}
      <line x1={W - 90} y1={H - 16} x2={W - 20} y2={H - 16} stroke="#374151" strokeWidth={1.5} markerEnd="url(#arrDir)" />
      <text x={W - 95} y={H - 12} textAnchor="end" fontSize={10} fill="#374151">Direction of propagation</text>

      <defs>
        <marker id="arrDir" markerWidth={6} markerHeight={6} refX={6} refY={3} orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="#374151" />
        </marker>
      </defs>
    </svg>
  )
}

export default function WaveDiagram({ data }: { data: WaveDiagramData }) {
  if (data.type === 'longitudinal') return <LongitudinalWave />
  return <TransverseWave data={data} />
}
