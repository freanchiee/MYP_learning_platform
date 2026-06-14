'use client'

import { useRef, useEffect, useState } from 'react'

const W = 640
const H = 320

// Bell curve: rate = A * exp(-((x - mu)^2) / (2 * sigma^2))
function bellRate(x: number, mu: number, sigma: number): number {
  return Math.exp(-((x - mu) ** 2) / (2 * sigma ** 2))
}

// For enzyme rate as fn of pH (optimal ~7-8, sigma ~1.5)
// For temperature: optimal ~37°C, sigma ~8
// Inhibitor: reduces amplitude

interface GraphConfig {
  mode: 'ph' | 'temperature'
  sliderVal: number
  inhibitorActive: boolean
  substrateConc: number // 1-10
}

function drawGraph(ctx: CanvasRenderingContext2D, cfg: GraphConfig) {
  const { mode, sliderVal, inhibitorActive, substrateConc } = cfg

  const PAD_L = 56
  const PAD_B = 48
  const PAD_T = 28
  const PAD_R = 20
  const gW = W - PAD_L - PAD_R
  const gH = H - PAD_T - PAD_B

  // Background
  ctx.fillStyle = '#faf9f6'
  ctx.fillRect(0, 0, W, H)

  // Grid
  ctx.strokeStyle = 'rgba(31,54,116,0.07)'
  ctx.lineWidth = 1
  ctx.setLineDash([4, 4])
  for (let i = 0; i <= 4; i++) {
    const y = PAD_T + (i / 4) * gH
    ctx.beginPath(); ctx.moveTo(PAD_L, y); ctx.lineTo(W - PAD_R, y); ctx.stroke()
  }
  for (let i = 0; i <= 6; i++) {
    const x = PAD_L + (i / 6) * gW
    ctx.beginPath(); ctx.moveTo(x, PAD_T); ctx.lineTo(x, PAD_T + gH); ctx.stroke()
  }
  ctx.setLineDash([])

  // Axes
  ctx.strokeStyle = 'rgba(31,54,116,0.5)'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(PAD_L, PAD_T)
  ctx.lineTo(PAD_L, PAD_T + gH)
  ctx.lineTo(W - PAD_R, PAD_T + gH)
  ctx.stroke()

  // Axis labels
  ctx.font = '11px Inter, sans-serif'
  ctx.fillStyle = 'rgba(31,54,116,0.7)'
  ctx.textAlign = 'center'
  ctx.fillText(mode === 'ph' ? 'pH' : 'Temperature (°C)', PAD_L + gW / 2, H - 6)

  ctx.save()
  ctx.translate(14, PAD_T + gH / 2)
  ctx.rotate(-Math.PI / 2)
  ctx.fillText('Reaction Rate (arbitrary units)', 0, 0)
  ctx.restore()

  // X tick labels
  const xRange = mode === 'ph' ? { min: 0, max: 14 } : { min: 0, max: 80 }
  const tickCount = 7
  for (let i = 0; i <= tickCount; i++) {
    const xPx = PAD_L + (i / tickCount) * gW
    const xVal = xRange.min + (i / tickCount) * (xRange.max - xRange.min)
    ctx.fillText(xVal.toFixed(0), xPx, PAD_T + gH + 14)
  }

  // Y tick labels
  for (let i = 0; i <= 4; i++) {
    const yPx = PAD_T + ((4 - i) / 4) * gH
    ctx.textAlign = 'right'
    ctx.fillText((i * 25).toString(), PAD_L - 6, yPx + 4)
  }

  // Config-specific
  const mu    = mode === 'ph' ? 7.4 : 37
  const sigma = mode === 'ph' ? 1.6 : 9
  const inhibitorFactor = inhibitorActive ? 0.55 : 1
  const concFactor = 0.3 + (substrateConc / 10) * 0.7 // Michaelis-Menten-ish

  // Draw curve (current conditions, normal)
  const drawCurve = (color: string, factor: number) => {
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 2.5
    ctx.setLineDash([])
    for (let px = 0; px <= gW; px++) {
      const xVal = xRange.min + (px / gW) * (xRange.max - xRange.min)
      const rate  = bellRate(xVal, mu, sigma) * factor * concFactor
      const yPx   = PAD_T + gH - rate * gH
      if (px === 0) ctx.moveTo(PAD_L + px, yPx)
      else ctx.lineTo(PAD_L + px, yPx)
    }
    ctx.stroke()
  }

  // Base curve (grey)
  drawCurve('rgba(31,54,116,0.15)', 1)

  // Active curve
  drawCurve(inhibitorActive ? '#c3282d' : '#1f3674', inhibitorFactor)

  if (inhibitorActive) {
    // Dashed uninhibited reference
    ctx.setLineDash([6, 4])
    ctx.strokeStyle = 'rgba(31,54,116,0.35)'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    for (let px = 0; px <= gW; px++) {
      const xVal = xRange.min + (px / gW) * (xRange.max - xRange.min)
      const rate  = bellRate(xVal, mu, sigma) * concFactor
      const yPx   = PAD_T + gH - rate * gH
      if (px === 0) ctx.moveTo(PAD_L + px, yPx)
      else ctx.lineTo(PAD_L + px, yPx)
    }
    ctx.stroke()
    ctx.setLineDash([])
  }

  // Current x marker
  const curXVal = sliderVal
  const curXPx  = PAD_L + ((curXVal - xRange.min) / (xRange.max - xRange.min)) * gW
  const curRate  = bellRate(curXVal, mu, sigma) * inhibitorFactor * concFactor
  const curYPx   = PAD_T + gH - curRate * gH

  // Vertical marker line
  ctx.strokeStyle = 'rgba(195,40,45,0.5)'
  ctx.lineWidth = 1.5
  ctx.setLineDash([4, 3])
  ctx.beginPath()
  ctx.moveTo(curXPx, PAD_T + gH)
  ctx.lineTo(curXPx, curYPx)
  ctx.stroke()
  ctx.setLineDash([])

  // Dot on curve
  ctx.beginPath()
  ctx.arc(curXPx, curYPx, 6, 0, Math.PI * 2)
  ctx.fillStyle = '#c3282d'
  ctx.fill()
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = 2
  ctx.stroke()

  // Rate value label
  const ratePercent = Math.round(curRate * 100)
  ctx.font = 'bold 12px Inter, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillStyle = '#c3282d'
  ctx.fillText(`${ratePercent}%`, curXPx, curYPx - 14)

  // Optimal marker
  const optXPx = PAD_L + ((mu - xRange.min) / (xRange.max - xRange.min)) * gW
  ctx.font = 'bold 10px Inter, sans-serif'
  ctx.fillStyle = 'rgba(39,78,104,0.6)'
  ctx.textAlign = 'center'
  ctx.fillText('Optimum', optXPx, PAD_T + 12)
  ctx.beginPath()
  ctx.moveTo(optXPx, PAD_T + 15)
  ctx.lineTo(optXPx, PAD_T + gH)
  ctx.strokeStyle = 'rgba(39,78,104,0.2)'
  ctx.lineWidth = 1.5
  ctx.setLineDash([4, 3])
  ctx.stroke()
  ctx.setLineDash([])

  // Legend
  ctx.font = '10px Inter, sans-serif'
  ctx.textAlign = 'left'
  const lx = PAD_L + gW - 130
  const ly = PAD_T + 12
  if (inhibitorActive) {
    ctx.fillStyle = '#c3282d'
    ctx.fillRect(lx, ly, 18, 3)
    ctx.fillStyle = 'rgba(31,54,116,0.6)'
    ctx.fillText('+ Inhibitor', lx + 22, ly + 4)

    ctx.setLineDash([5, 3])
    ctx.strokeStyle = 'rgba(31,54,116,0.35)'
    ctx.lineWidth = 1.5
    ctx.beginPath(); ctx.moveTo(lx, ly + 14); ctx.lineTo(lx + 18, ly + 14); ctx.stroke()
    ctx.setLineDash([])
    ctx.fillStyle = 'rgba(31,54,116,0.6)'
    ctx.fillText('No inhibitor', lx + 22, ly + 18)
  }
}

export default function EnzymeRateGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mode, setMode] = useState<'ph' | 'temperature'>('ph')
  const [sliderVal, setSliderVal] = useState(7)
  const [inhibitor, setInhibitor] = useState(false)
  const [substrateConc, setSubstrateConc] = useState(7)

  const sliderMin = mode === 'ph' ? 0 : 0
  const sliderMax = mode === 'ph' ? 14 : 80
  const sliderLabel = mode === 'ph' ? 'pH' : 'Temperature (°C)'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    drawGraph(ctx, { mode, sliderVal, inhibitorActive: inhibitor, substrateConc })
  }, [mode, sliderVal, inhibitor, substrateConc])

  const mu = mode === 'ph' ? 7.4 : 37
  const sigma = mode === 'ph' ? 1.6 : 9
  const concFactor = 0.3 + (substrateConc / 10) * 0.7
  const inhibitorFactor = inhibitor ? 0.55 : 1
  const curRate = Math.round(bellRate(sliderVal, mu, sigma) * inhibitorFactor * concFactor * 100)

  return (
    <div className="space-y-3 select-none">
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        className="figure-surface w-full rounded-card"
        style={{ maxHeight: 320 }}
      />

      {/* Mode switch */}
      <div className="flex gap-2">
        {(['ph', 'temperature'] as const).map(m => (
          <button
            key={m}
            onClick={() => { setMode(m); setSliderVal(m === 'ph' ? 7 : 37) }}
            className="px-4 py-1.5 rounded-lg text-xs font-bold transition-all"
            style={{
              background: mode === m ? '#1f3674' : 'rgba(31,54,116,0.08)',
              color: mode === m ? '#adf1c4' : '#1f3674',
              border: `1px solid ${mode === m ? '#1f3674' : 'rgba(31,54,116,0.15)'}`,
            }}
          >
            {m === 'ph' ? 'pH Effect' : 'Temperature Effect'}
          </button>
        ))}
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex justify-between text-xs font-semibold mb-1" style={{ color: '#1f3674' }}>
            <span>{sliderLabel}</span>
            <span className="font-mono">{sliderVal}{mode === 'temperature' ? '°C' : ''}</span>
          </div>
          <input
            type="range" min={sliderMin} max={sliderMax} step={mode === 'ph' ? 0.1 : 1}
            value={sliderVal}
            onChange={e => setSliderVal(Number(e.target.value))}
            className="w-full accent-[#c3282d]"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs font-semibold mb-1" style={{ color: '#547ca4' }}>
            <span>Substrate concentration</span>
            <span className="font-mono">{substrateConc}</span>
          </div>
          <input
            type="range" min={1} max={10} value={substrateConc}
            onChange={e => setSubstrateConc(Number(e.target.value))}
            className="w-full accent-[#547ca4]"
          />
        </div>
      </div>

      {/* Inhibitor toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setInhibitor(v => !v)}
          className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
          style={{
            background: inhibitor ? 'rgba(195,40,45,0.12)' : 'rgba(31,54,116,0.06)',
            color: inhibitor ? '#c3282d' : '#1f3674',
            border: `1.5px solid ${inhibitor ? '#c3282d' : 'rgba(31,54,116,0.15)'}`,
          }}
        >
          {inhibitor ? '⚠ Inhibitor ON' : 'Add Inhibitor'}
        </button>
        {inhibitor && (
          <span className="text-xs text-ink-subtle">Competitive inhibitor reduces rate by ~45%</span>
        )}
      </div>

      {/* Status */}
      <div
        className="text-center py-2 rounded-lg text-xs font-bold"
        style={{
          background: curRate > 70 ? 'rgba(173,241,196,0.2)' : curRate > 30 ? 'rgba(84,124,164,0.1)' : 'rgba(195,40,45,0.08)',
          color: curRate > 70 ? '#274e68' : curRate > 30 ? '#547ca4' : '#c3282d',
          border: `1px solid ${curRate > 70 ? 'rgba(173,241,196,0.4)' : curRate > 30 ? 'rgba(84,124,164,0.2)' : 'rgba(195,40,45,0.2)'}`,
        }}
      >
        Current reaction rate: {curRate}% of maximum
        {curRate < 20 && ' — enzyme likely denatured or inactive'}
        {curRate > 85 && ' — near optimum conditions'}
      </div>
    </div>
  )
}
