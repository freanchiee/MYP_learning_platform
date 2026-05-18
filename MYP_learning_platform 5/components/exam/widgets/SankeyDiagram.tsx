'use client'

import { useState, useEffect } from 'react'

interface SankeyDiagramProps {
  onAnswer: (answer: string) => void
}

export default function SankeyDiagram({ onAnswer }: SankeyDiagramProps) {
  const [thermalValue, setThermalValue] = useState('')
  const [outputForms, setOutputForms] = useState('')

  useEffect(() => {
    if (thermalValue || outputForms) {
      onAnswer(`Thermal energy output = ${thermalValue} J\nTwo output forms: ${outputForms}`)
    }
  }, [thermalValue, outputForms, onAnswer])

  // SVG dimensions
  const W = 480
  const H = 200

  // Input arrow (left side) — full height ~160px total, arrow tip at x=120
  // Light output: 5% of 160 = 8px height
  // Thermal output: 95% of 160 = 152px height
  const inputLeft = 30
  const inputRight = 140
  const inputTop = 20
  const inputBottom = 180
  const inputMidY = (inputTop + inputBottom) / 2

  // Split point x
  const splitX = inputRight

  // Light arrow: top portion, 5% → ~8px band at center of input
  const lightH = 8
  const lightTopY = inputMidY - lightH / 2
  const lightBotY = inputMidY + lightH / 2
  const lightEndX = W - 20
  const lightEndTopY = 25
  const lightEndBotY = 38

  // Thermal arrow: bottom portion, 95% → ~152px band
  const thermalH = 130
  const thermalTopY = inputMidY - thermalH / 2
  const thermalBotY = inputMidY + thermalH / 2
  const thermalEndX = W - 20
  const thermalEndTopY = 55
  const thermalEndBotY = H - 20

  // Input arrow polygon (left box + arrowhead)
  const inputBoxPoints = `
    ${inputLeft},${inputTop}
    ${inputRight - 20},${inputTop}
    ${inputRight},${inputMidY}
    ${inputRight - 20},${inputBottom}
    ${inputLeft},${inputBottom}
  `.trim()

  // Light output path (thin band going upper-right)
  const lightPath = `
    M ${splitX},${lightTopY}
    C ${splitX + 60},${lightTopY} ${splitX + 60},${lightEndTopY} ${lightEndX},${lightEndTopY}
    L ${lightEndX},${lightEndBotY}
    C ${splitX + 60},${lightEndBotY} ${splitX + 60},${lightBotY} ${splitX},${lightBotY}
    Z
  `

  // Thermal output path (thick band going right)
  const thermalPath = `
    M ${splitX},${thermalTopY}
    C ${splitX + 60},${thermalTopY} ${splitX + 60},${thermalEndTopY} ${thermalEndX},${thermalEndTopY}
    L ${thermalEndX},${thermalEndBotY}
    C ${splitX + 60},${thermalEndBotY} ${splitX + 60},${thermalBotY} ${splitX},${thermalBotY}
    Z
  `

  return (
    <div className="space-y-4">
      {/* SVG Sankey diagram */}
      <div className="w-full overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm p-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full max-w-2xl mx-auto block"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          {/* Input arrow */}
          <polygon
            points={inputBoxPoints}
            fill="#64748b"
            opacity="0.85"
          />
          {/* Input label */}
          <text
            x={(inputLeft + inputRight - 20) / 2}
            y={inputMidY - 8}
            textAnchor="middle"
            fontSize="9"
            fill="white"
            fontWeight="600"
          >
            Electrical
          </text>
          <text
            x={(inputLeft + inputRight - 20) / 2}
            y={inputMidY + 4}
            textAnchor="middle"
            fontSize="9"
            fill="white"
            fontWeight="600"
          >
            energy input
          </text>
          <text
            x={(inputLeft + inputRight - 20) / 2}
            y={inputMidY + 16}
            textAnchor="middle"
            fontSize="9"
            fill="white"
            fontWeight="600"
          >
            = 100 J
          </text>

          {/* Light output (thin, yellow) */}
          <path d={lightPath} fill="#f39c12" opacity="0.9" />
          {/* Light arrowhead */}
          <polygon
            points={`${lightEndX},${lightEndTopY} ${lightEndX + 12},${(lightEndTopY + lightEndBotY) / 2} ${lightEndX},${lightEndBotY}`}
            fill="#f39c12"
            opacity="0.9"
          />
          {/* Light label */}
          <text x={lightEndX + 16} y={(lightEndTopY + lightEndBotY) / 2 + 1} textAnchor="start" fontSize="9" fill="#92400e" fontWeight="600">
            Light energy = 5 J
          </text>

          {/* Thermal output (thick, blue-gray) */}
          <path d={thermalPath} fill="#94a3b8" opacity="0.85" />
          {/* Thermal arrowhead */}
          <polygon
            points={`${thermalEndX},${thermalEndTopY} ${thermalEndX + 14},${(thermalEndTopY + thermalEndBotY) / 2} ${thermalEndX},${thermalEndBotY}`}
            fill="#94a3b8"
            opacity="0.85"
          />
          {/* Thermal label */}
          <text
            x={(splitX + thermalEndX) / 2}
            y={(thermalTopY + thermalBotY) / 2 - 4}
            textAnchor="middle"
            fontSize="9"
            fill="#1e293b"
            fontWeight="600"
          >
            Thermal energy
          </text>
          <text
            x={(splitX + thermalEndX) / 2}
            y={(thermalTopY + thermalBotY) / 2 + 8}
            textAnchor="middle"
            fontSize="9"
            fill="#1e293b"
            fontWeight="600"
          >
            = ___ J
          </text>

          {/* Width ratio annotation */}
          <text x={inputLeft} y={H - 2} fontSize="8" fill="#94a3b8">
            Arrow widths proportional to energy (5 J light : 95 J thermal)
          </text>
        </svg>
      </div>

      {/* Student input fields */}
      <div className="space-y-3 px-1">
        <div className="flex items-center gap-3 flex-wrap">
          <label className="text-sm text-gray-700 font-medium min-w-[220px]">
            Thermal energy output =
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={thermalValue}
              onChange={e => setThermalValue(e.target.value)}
              placeholder="___"
              className="w-20 rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[#3cb563] focus:border-transparent"
            />
            <span className="text-sm text-gray-700">J</span>
          </div>
        </div>

        <div className="flex items-start gap-3 flex-wrap">
          <label className="text-sm text-gray-700 font-medium min-w-[220px]">
            Identify the two output energy forms:
          </label>
          <input
            type="text"
            value={outputForms}
            onChange={e => setOutputForms(e.target.value)}
            placeholder="e.g. light energy and thermal energy"
            className="flex-1 min-w-[200px] rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3cb563] focus:border-transparent"
          />
        </div>

        {thermalValue === '95' && (
          <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-2 text-sm text-green-800 font-medium">
            Correct! 100 J input − 5 J light = 95 J thermal energy.
          </div>
        )}
      </div>
    </div>
  )
}
