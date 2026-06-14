'use client'

const DATA_POINTS = [
  { x: 0.40, y: 0.257 },
  { x: 0.80, y: 0.433 },
  { x: 1.20, y: 0.650 },
  { x: 1.60, y: 0.803 },
  { x: 2.00, y: 0.933 },
]

// Best-fit line: y = 0.476x
const FIT_SLOPE = 0.476

const padL = 50
const padR = 20
const padT = 30
const padB = 50
const PLOT_W = 220
const PLOT_H = 220

// Graph A: square, both axes 0-2.0
const A_X_MAX = 2.0
const A_Y_MAX = 2.0

// Graph B: wider range y 0-1.0, x 0-2.0
const B_X_MAX = 2.0
const B_Y_MAX = 1.0
const B_PLOT_H = 160 // shorter height for B

function toSvgX(x: number, xMax: number, plotW: number) {
  return padL + (x / xMax) * plotW
}
function toSvgYA(y: number, yMax: number, plotH: number) {
  return padT + plotH - (y / yMax) * plotH
}

const xTicksAB = [0.5, 1.0, 1.5, 2.0]

// Graph A ticks
const yTicksA = [0.5, 1.0, 1.5, 2.0]

// Graph B ticks
const yTicksB = [0.2, 0.4, 0.6, 0.8, 1.0]

interface GraphProps {
  title: string
  xMax: number
  yMax: number
  plotW: number
  plotH: number
  xTicks: number[]
  yTicks: number[]
  showFitLine: boolean
  svgH: number
}

function Graph({ title, xMax, yMax, plotW, plotH, xTicks, yTicks, showFitLine, svgH }: GraphProps) {
  const svgW = padL + plotW + padR
  const toX = (x: number) => toSvgX(x, xMax, plotW)
  const toY = (y: number) => toSvgYA(y, yMax, plotH)

  // Best-fit line endpoints
  const fitX1 = 0
  const fitY1 = FIT_SLOPE * fitX1
  const fitX2 = xMax
  const fitY2 = FIT_SLOPE * fitX2

  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="w-full block"
      style={{ fontFamily: 'system-ui, sans-serif' }}
    >
      {/* Title */}
      <text
        x={padL + plotW / 2}
        y={padT - 10}
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fill="#1a2338"
      >
        {title}
      </text>

      {/* Grid lines */}
      {yTicks.map(y => (
        <line
          key={`gy-${y}`}
          x1={padL} y1={toY(y)}
          x2={padL + plotW} y2={toY(y)}
          stroke="#e5e7eb" strokeWidth="1"
        />
      ))}
      {xTicks.map(x => (
        <line
          key={`gx-${x}`}
          x1={toX(x)} y1={padT}
          x2={toX(x)} y2={padT + plotH}
          stroke="#e5e7eb" strokeWidth="1"
        />
      ))}

      {/* Axes */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="#374151" strokeWidth="1.5" />
      <line x1={padL} y1={padT + plotH} x2={padL + plotW} y2={padT + plotH} stroke="#374151" strokeWidth="1.5" />

      {/* X ticks + labels */}
      {xTicks.map(x => (
        <g key={`xt-${x}`}>
          <line x1={toX(x)} y1={padT + plotH} x2={toX(x)} y2={padT + plotH + 4} stroke="#374151" strokeWidth="1" />
          <text x={toX(x)} y={padT + plotH + 15} textAnchor="middle" fontSize="9" fill="#374151">
            {x.toFixed(1)}
          </text>
        </g>
      ))}
      {/* x=0 label */}
      <text x={padL} y={padT + plotH + 15} textAnchor="middle" fontSize="9" fill="#374151">0</text>

      {/* Y ticks + labels */}
      {yTicks.map(y => (
        <g key={`yt-${y}`}>
          <line x1={padL - 4} y1={toY(y)} x2={padL} y2={toY(y)} stroke="#374151" strokeWidth="1" />
          <text x={padL - 7} y={toY(y)} textAnchor="end" dominantBaseline="middle" fontSize="9" fill="#374151">
            {y.toFixed(1)}
          </text>
        </g>
      ))}
      {/* y=0 label */}
      <text x={padL - 7} y={toY(0)} textAnchor="end" dominantBaseline="middle" fontSize="9" fill="#374151">0</text>

      {/* Best-fit line (Graph B only) */}
      {showFitLine && fitY2 <= yMax && (
        <line
          x1={toX(fitX1)} y1={toY(fitY1)}
          x2={toX(fitX2)} y2={toY(fitY2)}
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeDasharray="6,4"
        />
      )}
      {showFitLine && fitY2 > yMax && (
        // clip line to y max
        <line
          x1={toX(fitX1)} y1={toY(Math.min(fitY1, yMax))}
          x2={toX(yMax / FIT_SLOPE)} y2={toY(yMax)}
          stroke="#ef4444"
          strokeWidth="1.5"
          strokeDasharray="6,4"
        />
      )}

      {/* Data points */}
      {DATA_POINTS.map((pt, i) => (
        pt.y <= yMax ? (
          <circle
            key={i}
            cx={toX(pt.x)}
            cy={toY(pt.y)}
            r="5"
            fill="#1a2338"
          />
        ) : null
      ))}

      {/* Y axis label */}
      <text
        transform={`translate(12, ${padT + plotH / 2}) rotate(-90)`}
        textAnchor="middle"
        fontSize="9"
        fill="#374151"
        fontWeight="500"
      >
        Average bounce height / m
      </text>

      {/* X axis label */}
      <text
        x={padL + plotW / 2}
        y={svgH - 4}
        textAnchor="middle"
        fontSize="9"
        fill="#374151"
        fontWeight="500"
      >
        Drop height / m
      </text>
    </svg>
  )
}

export default function BounceGraphsAB() {
  const svgWA = padL + PLOT_W + padR
  const svgHA = padT + PLOT_H + padB
  const svgWB = padL + PLOT_W + padR
  const svgHB = padT + B_PLOT_H + padB

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Graph A */}
        <div className="figure-surface flex-1 shadow-card p-3">
          <Graph
            title="Graph A"
            xMax={A_X_MAX}
            yMax={A_Y_MAX}
            plotW={PLOT_W}
            plotH={PLOT_H}
            xTicks={xTicksAB}
            yTicks={yTicksA}
            showFitLine={false}
            svgH={svgHA}
          />
        </div>

        {/* Graph B */}
        <div className="figure-surface flex-1 shadow-card p-3">
          <Graph
            title="Graph B"
            xMax={B_X_MAX}
            yMax={B_Y_MAX}
            plotW={PLOT_W}
            plotH={B_PLOT_H}
            xTicks={xTicksAB}
            yTicks={yTicksB}
            showFitLine={true}
            svgH={svgHB}
          />
        </div>
      </div>

      <p className="text-xs text-ink-subtle text-center italic px-2">
        The same data is plotted in both graphs with different axis scales.
        Graph B also shows the best-fit line (y = 0.476x, dashed red).
      </p>
    </div>
  )
}
