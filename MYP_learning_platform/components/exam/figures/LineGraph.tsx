export interface LineGraphData {
  xLabel: string
  yLabel: string
  xUnit?: string
  yUnit?: string
  title?: string
  dataPoints: { x: number; y: number }[]
  lobf?: boolean
  xMin?: number
  xMax: number
  yMin?: number
  yMax: number
  xStep: number
  yStep: number
}

// Least-squares line of best fit
function leastSquares(pts: { x: number; y: number }[]): { m: number; b: number } | null {
  const n = pts.length
  if (n < 2) return null
  const sumX = pts.reduce((s, p) => s + p.x, 0)
  const sumY = pts.reduce((s, p) => s + p.y, 0)
  const sumXX = pts.reduce((s, p) => s + p.x * p.x, 0)
  const sumXY = pts.reduce((s, p) => s + p.x * p.y, 0)
  const denom = n * sumXX - sumX * sumX
  if (denom === 0) return null
  const m = (n * sumXY - sumX * sumY) / denom
  const b = (sumY - m * sumX) / n
  return { m, b }
}

export default function LineGraph({ data }: { data: LineGraphData }) {
  const W = 400
  const H = 300
  const padL = 52
  const padB = 48
  const padT = data.title ? 34 : 18
  const padR = 18

  const xMin = data.xMin ?? 0
  const yMin = data.yMin ?? 0
  const xRange = data.xMax - xMin
  const yRange = data.yMax - yMin

  const plotW = W - padL - padR
  const plotH = H - padT - padB

  function sx(val: number) {
    return padL + ((val - xMin) / xRange) * plotW
  }
  function sy(val: number) {
    return padT + plotH - ((val - yMin) / yRange) * plotH
  }

  // Grid lines + ticks
  const xTicks: number[] = []
  for (let v = xMin; v <= data.xMax + 1e-9; v += data.xStep) xTicks.push(v)
  const yTicks: number[] = []
  for (let v = yMin; v <= data.yMax + 1e-9; v += data.yStep) yTicks.push(v)

  // Data path
  const sorted = [...data.dataPoints].sort((a, b) => a.x - b.x)
  const linePath = sorted.map((p, i) => `${i === 0 ? 'M' : 'L'} ${sx(p.x)} ${sy(p.y)}`).join(' ')

  // LOBF
  const lobfLine = data.lobf ? leastSquares(sorted) : null
  const lobfPath = lobfLine
    ? `M ${sx(xMin)} ${sy(lobfLine.m * xMin + lobfLine.b)} L ${sx(data.xMax)} ${sy(lobfLine.m * data.xMax + lobfLine.b)}`
    : null

  const xAxisLabel = data.xUnit ? `${data.xLabel} (${data.xUnit})` : data.xLabel
  const yAxisLabel = data.yUnit ? `${data.yLabel} (${data.yUnit})` : data.yLabel

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width={W}
      height={H}
      className="w-full max-w-full"
      role="img"
      aria-label={data.title ?? `Graph of ${data.yLabel} vs ${data.xLabel}`}
    >
      {/* Title */}
      {data.title && (
        <text x={W / 2} y={18} textAnchor="middle" fontSize={13} fontWeight={600} fill="#111">
          {data.title}
        </text>
      )}

      {/* Grid lines */}
      {xTicks.map((v) => (
        <line key={`xg${v}`} x1={sx(v)} y1={padT} x2={sx(v)} y2={padT + plotH}
          stroke="#e5e7eb" strokeWidth={0.5} />
      ))}
      {yTicks.map((v) => (
        <line key={`yg${v}`} x1={padL} y1={sy(v)} x2={padL + plotW} y2={sy(v)}
          stroke="#e5e7eb" strokeWidth={0.5} />
      ))}

      {/* Axes */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="#111" strokeWidth={1.5} />
      <line x1={padL} y1={padT + plotH} x2={padL + plotW} y2={padT + plotH} stroke="#111" strokeWidth={1.5} />

      {/* Tick marks + labels */}
      {xTicks.map((v) => (
        <g key={`xt${v}`}>
          <line x1={sx(v)} y1={padT + plotH} x2={sx(v)} y2={padT + plotH + 5} stroke="#111" strokeWidth={1} />
          <text x={sx(v)} y={padT + plotH + 16} textAnchor="middle" fontSize={10} fill="#374151">
            {v}
          </text>
        </g>
      ))}
      {yTicks.map((v) => (
        <g key={`yt${v}`}>
          <line x1={padL - 5} y1={sy(v)} x2={padL} y2={sy(v)} stroke="#111" strokeWidth={1} />
          <text x={padL - 8} y={sy(v) + 4} textAnchor="end" fontSize={10} fill="#374151">
            {v}
          </text>
        </g>
      ))}

      {/* Axis labels */}
      <text
        x={padL + plotW / 2}
        y={H - 4}
        textAnchor="middle"
        fontSize={11}
        fill="#374151"
        fontWeight={500}
      >
        {xAxisLabel}
      </text>
      <text
        x={-(padT + plotH / 2)}
        y={12}
        textAnchor="middle"
        fontSize={11}
        fill="#374151"
        fontWeight={500}
        transform="rotate(-90)"
      >
        {yAxisLabel}
      </text>

      {/* LOBF */}
      {lobfPath && (
        <path d={lobfPath} stroke="#dc2626" strokeWidth={1.5} strokeDasharray="5 3" fill="none" />
      )}

      {/* Data line */}
      {sorted.length > 1 && (
        <path d={linePath} stroke="#2563eb" strokeWidth={1.5} fill="none" />
      )}

      {/* Data points */}
      {sorted.map((p, i) => (
        <circle key={i} cx={sx(p.x)} cy={sy(p.y)} r={4} fill="#2563eb" />
      ))}
    </svg>
  )
}
