'use client'

import { useEffect, useRef, useState } from 'react'
import { RotateCcw } from 'lucide-react'

const CANVAS_W = 400
const CANVAS_H = 350
const BG = '#0a0f1a'

// Spring physics constants
const K = 25       // N/m spring constant
const G = 9.8      // m/s²
const PX_PER_M = 1000 // 1 m = 1000 px → 1 mm = 1 px

const ANCHOR_X = CANVAS_W * 0.45
const ANCHOR_Y = 20
const NATURAL_LENGTH_PX = 100  // natural length in pixels
const COIL_WIDTH = 22
const COIL_COUNT = 8

function drawSpring(
  ctx: CanvasRenderingContext2D,
  x: number,
  topY: number,
  bottomY: number,
  coils: number,
  width: number,
) {
  const length = bottomY - topY
  if (length <= 0) return

  const segH = length / (coils * 2)
  ctx.beginPath()
  ctx.moveTo(x, topY)

  for (let i = 0; i < coils * 2; i++) {
    const y = topY + segH * (i + 1)
    const xOff = i % 2 === 0 ? width : -width
    ctx.lineTo(x + xOff, y - segH * 0.5)
    ctx.lineTo(x + xOff, y)
  }
  ctx.lineTo(x, bottomY)
  ctx.strokeStyle = '#4eecd4'
  ctx.lineWidth = 2.5
  ctx.lineJoin = 'round'
  ctx.stroke()
}

function drawRuler(
  ctx: CanvasRenderingContext2D,
  x: number,
  topY: number,
  maxPx: number,
) {
  // Background strip
  ctx.fillStyle = '#1e2a3a'
  ctx.fillRect(x, topY, 32, maxPx)

  ctx.fillStyle = '#e5e7eb'
  ctx.font = '9px monospace'
  ctx.textAlign = 'left'

  // Tick every 10mm (10px)
  const totalMM = Math.ceil(maxPx)
  for (let mm = 0; mm <= totalMM; mm += 10) {
    const y = topY + mm
    const isMajor = mm % 50 === 0
    ctx.strokeStyle = isMajor ? '#9ca3af' : '#374151'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + (isMajor ? 20 : 10), y)
    ctx.stroke()
    if (isMajor) {
      ctx.fillStyle = '#9ca3af'
      ctx.fillText(`${mm}`, x + 21, y + 3)
    }
  }
}

function redraw(
  canvas: HTMLCanvasElement,
  massG: number,
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Clear
  ctx.fillStyle = BG
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)

  const massKg = massG / 1000
  const force = massKg * G           // Newtons
  const extensionM = force / K       // metres
  const extensionPx = extensionM * PX_PER_M

  // Elastic limit check (F > 5N → extra non-linear extension)
  let extraPx = 0
  if (force > 5) {
    extraPx = (force - 5) ** 2 * 40
  }

  const totalExtPx = extensionPx + extraPx
  const springBottomY = ANCHOR_Y + NATURAL_LENGTH_PX + totalExtPx

  // Ceiling / anchor bar
  ctx.fillStyle = '#374151'
  ctx.fillRect(ANCHOR_X - 40, ANCHOR_Y - 12, 80, 12)
  // Anchor screw
  ctx.beginPath()
  ctx.arc(ANCHOR_X, ANCHOR_Y, 4, 0, Math.PI * 2)
  ctx.fillStyle = '#6b7280'
  ctx.fill()

  // Draw spring
  drawSpring(ctx, ANCHOR_X, ANCHOR_Y, springBottomY, COIL_COUNT, COIL_WIDTH)

  // Mass block
  if (massG > 0) {
    const blockW = 40 + massG * 0.04
    const blockH = 22 + massG * 0.02
    const bx = ANCHOR_X - blockW / 2
    const by = springBottomY

    ctx.fillStyle = '#2563eb'
    ctx.beginPath()
    ctx.roundRect(bx, by, blockW, blockH, 4)
    ctx.fill()

    ctx.strokeStyle = '#60a5fa'
    ctx.lineWidth = 1.5
    ctx.stroke()

    // Mass label
    ctx.fillStyle = '#fff'
    ctx.font = `bold ${massG >= 100 ? 11 : 12}px sans-serif`
    ctx.textAlign = 'center'
    ctx.fillText(`${massG}g`, ANCHOR_X, by + blockH / 2 + 4)
  }

  // Ruler
  const rulerX = ANCHOR_X + 50
  const rulerTop = ANCHOR_Y
  drawRuler(ctx, rulerX, rulerTop, 280)

  // Zero & extension markers
  if (massG > 0) {
    const zeroY = ANCHOR_Y + NATURAL_LENGTH_PX
    // zero line
    ctx.strokeStyle = '#22d3ee'
    ctx.lineWidth = 1
    ctx.setLineDash([4, 3])
    ctx.beginPath()
    ctx.moveTo(ANCHOR_X - 30, zeroY)
    ctx.lineTo(rulerX + 32, zeroY)
    ctx.stroke()

    // extension line
    ctx.strokeStyle = '#facc15'
    ctx.setLineDash([4, 3])
    ctx.beginPath()
    ctx.moveTo(ANCHOR_X - 30, springBottomY)
    ctx.lineTo(rulerX + 32, springBottomY)
    ctx.stroke()
    ctx.setLineDash([])

    // Arrow between them
    const midY = (zeroY + springBottomY) / 2
    ctx.strokeStyle = '#facc15'
    ctx.lineWidth = 1.5
    ctx.setLineDash([])
    ctx.beginPath()
    ctx.moveTo(ANCHOR_X - 20, zeroY)
    ctx.lineTo(ANCHOR_X - 20, springBottomY)
    ctx.stroke()
    // arrowheads
    ctx.fillStyle = '#facc15'
    ctx.beginPath()
    ctx.moveTo(ANCHOR_X - 20, springBottomY)
    ctx.lineTo(ANCHOR_X - 24, springBottomY - 6)
    ctx.lineTo(ANCHOR_X - 16, springBottomY - 6)
    ctx.closePath()
    ctx.fill()

    // Extension label
    const extCm = (extensionM * 100 + extraPx / 10).toFixed(1)
    ctx.fillStyle = '#fde68a'
    ctx.font = 'bold 11px sans-serif'
    ctx.textAlign = 'right'
    ctx.fillText(`ext: ${extCm} cm`, ANCHOR_X - 28, midY + 4)
  }

  // Info panel (bottom)
  const panelY = CANVAS_H - 70
  ctx.fillStyle = '#111827'
  ctx.fillRect(8, panelY, CANVAS_W - 16, 60)
  ctx.strokeStyle = '#1f2937'
  ctx.lineWidth = 1
  ctx.strokeRect(8, panelY, CANVAS_W - 16, 60)

  const extCm = (extensionM * 100).toFixed(2)
  const totalLenCm = (10 + extensionM * 100 + extraPx / 10).toFixed(2)
  const forceStr = force.toFixed(3)

  ctx.fillStyle = '#9ca3af'
  ctx.font = '11px monospace'
  ctx.textAlign = 'left'
  ctx.fillText(`Load: ${forceStr} N`, 18, panelY + 18)
  ctx.fillText(`Extension: ${extCm} cm`, 18, panelY + 34)
  ctx.fillText(`Total length: ${totalLenCm} cm`, 18, panelY + 50)

  if (force > 5) {
    ctx.fillStyle = '#ef4444'
    ctx.font = 'bold 11px sans-serif'
    ctx.textAlign = 'right'
    ctx.fillText('⚠ Elastic limit exceeded!', CANVAS_W - 18, panelY + 30)
  } else {
    ctx.fillStyle = '#22d3ee'
    ctx.font = '11px monospace'
    ctx.textAlign = 'right'
    ctx.fillText(`k = ${K} N/m`, CANVAS_W - 18, panelY + 18)
    ctx.fillText('Linear region', CANVAS_W - 18, panelY + 34)
  }
}

export default function SpringCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [massG, setMassG] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    redraw(canvas, massG)
  }, [massG])

  const handleReset = () => setMassG(0)

  const force = (massG / 1000) * G

  return (
    <div className="flex flex-col items-center gap-3 p-4 bg-[#0a0f1a] rounded-xl">
      <canvas
        ref={canvasRef}
        width={CANVAS_W}
        height={CANVAS_H}
        className="rounded-lg block"
        style={{ imageRendering: 'crisp-edges' }}
      />

      {/* Controls */}
      <div className="w-full max-w-[400px] space-y-3">
        {/* Slider */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-400">
            <span>Mass: <span className="text-white font-mono font-bold">{massG} g</span></span>
            <span>Force: <span className="text-[#4eecd4] font-mono">{force.toFixed(3)} N</span></span>
          </div>
          <input
            type="range"
            min={0}
            max={500}
            step={10}
            value={massG}
            onChange={e => setMassG(Number(e.target.value))}
            className="w-full accent-[#4eecd4] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-gray-600">
            <span>0 g</span>
            <span className="text-yellow-500 text-[10px]">← elastic limit ~510 g</span>
            <span>500 g</span>
          </div>
        </div>

        {/* Reset */}
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 text-xs hover:bg-gray-700 transition-colors"
        >
          <RotateCcw size={12} />
          Reset
        </button>
      </div>
    </div>
  )
}
