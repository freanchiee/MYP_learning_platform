'use client'

import { useRef, useState, useCallback } from 'react'

const W = 540
const H = 360
const padL = 65
const padR = 24
const padT = 24
const padB = 56

const plotW = W - padL - padR
const plotH = H - padT - padB

const X_MAX = 40000
const Y_MAX = 100

function toSvgX(t: number) {
  return padL + (t / X_MAX) * plotW
}

function toSvgY(pct: number) {
  return padT + plotH - (pct / Y_MAX) * plotH
}

function decayY(t: number) {
  return 100 * Math.pow(0.5, t / 5730)
}

// Build the decay curve polyline points
const curvePoints: string[] = []
for (let t = 0; t <= X_MAX; t += 200) {
  curvePoints.push(`${toSvgX(t).toFixed(2)},${toSvgY(decayY(t)).toFixed(2)}`)
}

const HALF_LIVES = [5730, 11460, 17190, 22920]

const xTicks = [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000]
const yTicks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function formatYear(t: number) {
  return t >= 1000 ? `${t / 1000}k` : String(t)
}

export default function CarbonDecayGraph() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hover, setHover] = useState<{ t: number; pct: number; svgX: number; svgY: number } | null>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGRectElement>) => {
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const scaleX = W / rect.width
    const mouseX = (e.clientX - rect.left) * scaleX
    const t = Math.max(0, Math.min(X_MAX, ((mouseX - padL) / plotW) * X_MAX))
    const pct = decayY(t)
    setHover({ t, pct, svgX: toSvgX(t), svgY: toSvgY(pct) })
  }, [])

  const handleMouseLeave = useCallback(() => setHover(null), [])

  return (
    <div className="figure-surface w-full overflow-x-auto p-2">
      <div className="text-center text-xs text-ink-subtle font-medium mb-1">
        Carbon-14 Decay Curve — hover to read values
      </div>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="w-full max-w-2xl mx-auto block"
        style={{ fontFamily: 'system-ui, sans-serif' }}
      >
        {/* Grid lines */}
        {yTicks.map(y => (
          <line
            key={`gy-${y}`}
            x1={padL} y1={toSvgY(y)}
            x2={W - padR} y2={toSvgY(y)}
            stroke="#e5e7eb" strokeWidth="1"
          />
        ))}
        {xTicks.map(x => (
          <line
            key={`gx-${x}`}
            x1={toSvgX(x)} y1={padT}
            x2={toSvgX(x)} y2={padT + plotH}
            stroke="#e5e7eb" strokeWidth="1"
          />
        ))}

        {/* Axes */}
        {/* Y axis */}
        <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="#374151" strokeWidth="1.5" />
        {/* X axis */}
        <line x1={padL} y1={padT + plotH} x2={W - padR} y2={padT + plotH} stroke="#374151" strokeWidth="1.5" />

        {/* Half-life dashed lines */}
        {HALF_LIVES.map((hl, i) => {
          const pct = decayY(hl)
          return (
            <g key={`hl-${i}`}>
              <line
                x1={toSvgX(hl)} y1={padT}
                x2={toSvgX(hl)} y2={toSvgY(pct)}
                stroke="#3498db" strokeWidth="1.2" strokeDasharray="5,4" opacity="0.5"
              />
              <line
                x1={padL} y1={toSvgY(pct)}
                x2={toSvgX(hl)} y2={toSvgY(pct)}
                stroke="#3498db" strokeWidth="1.2" strokeDasharray="5,4" opacity="0.5"
              />
            </g>
          )
        })}

        {/* Decay curve */}
        <polyline
          points={curvePoints.join(' ')}
          fill="none"
          stroke="#3cb563"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Y axis ticks + labels */}
        {yTicks.map(y => (
          <g key={`yt-${y}`}>
            <line x1={padL - 4} y1={toSvgY(y)} x2={padL} y2={toSvgY(y)} stroke="#374151" strokeWidth="1" />
            <text x={padL - 7} y={toSvgY(y)} textAnchor="end" dominantBaseline="middle" fontSize="10" fill="#374151">
              {y}%
            </text>
          </g>
        ))}
        {/* Y=0 label */}
        <text x={padL - 7} y={toSvgY(0)} textAnchor="end" dominantBaseline="middle" fontSize="10" fill="#374151">0%</text>

        {/* X axis ticks + labels */}
        {xTicks.map(x => (
          <g key={`xt-${x}`}>
            <line x1={toSvgX(x)} y1={padT + plotH} x2={toSvgX(x)} y2={padT + plotH + 4} stroke="#374151" strokeWidth="1" />
            <text x={toSvgX(x)} y={padT + plotH + 14} textAnchor="middle" fontSize="10" fill="#374151">
              {formatYear(x)}
            </text>
          </g>
        ))}

        {/* Y axis label */}
        <text
          transform={`translate(13, ${padT + plotH / 2}) rotate(-90)`}
          textAnchor="middle"
          fontSize="11"
          fill="#374151"
          fontWeight="500"
        >
          Carbon-14 atoms / %
        </text>

        {/* X axis label */}
        <text
          x={padL + plotW / 2}
          y={H - 6}
          textAnchor="middle"
          fontSize="11"
          fill="#374151"
          fontWeight="500"
        >
          Time / years
        </text>

        {/* Hover overlay — invisible rect */}
        <rect
          x={padL} y={padT}
          width={plotW} height={plotH}
          fill="transparent"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'crosshair' }}
        />

        {/* Hover elements */}
        {hover && (
          <g>
            {/* Vertical red line */}
            <line
              x1={hover.svgX} y1={padT}
              x2={hover.svgX} y2={padT + plotH}
              stroke="#e53e3e" strokeWidth="1" strokeDasharray="3,3"
            />
            {/* Red dot on curve */}
            <circle
              cx={hover.svgX} cy={hover.svgY}
              r="5" fill="#e53e3e" stroke="white" strokeWidth="1.5"
            />
            {/* Tooltip box */}
            {(() => {
              const ttW = 88
              const ttH = 42
              const margin = 8
              let tx = hover.svgX + margin
              if (tx + ttW > W - padR) tx = hover.svgX - ttW - margin
              let ty = hover.svgY - ttH / 2
              if (ty < padT) ty = padT
              if (ty + ttH > padT + plotH) ty = padT + plotH - ttH
              return (
                <g>
                  <rect x={tx} y={ty} width={ttW} height={ttH} rx="4" fill="#1a2338" opacity="0.92" />
                  <text x={tx + ttW / 2} y={ty + 14} textAnchor="middle" fontSize="10" fill="white" fontWeight="600">
                    {Math.round(hover.t).toLocaleString()} yr
                  </text>
                  <text x={tx + ttW / 2} y={ty + 29} textAnchor="middle" fontSize="10" fill="#86efac">
                    {hover.pct.toFixed(1)}%
                  </text>
                </g>
              )
            })()}
          </g>
        )}
      </svg>
    </div>
  )
}
