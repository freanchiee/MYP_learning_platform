'use client'

import { useEffect, useRef } from 'react'
import { Crosshair, Minus, Trash2 } from 'lucide-react'
import { useExamStore } from '@/store/examStore'
import type { Question, GraphPoint } from '@/lib/types'
import { cn } from '@/lib/utils'

interface GraphCanvasProps {
  q: Question
  qIdx: number
}

const CANVAS_W = 560
const CANVAS_H = 340
const PAD = { top: 30, right: 20, bottom: 50, left: 60 }

const PLOT_W = CANVAS_W - PAD.left - PAD.right
const PLOT_H = CANVAS_H - PAD.top - PAD.bottom

function dataToPixel(
  dx: number, dy: number,
  xMax: number, yMax: number,
): { px: number; py: number } {
  return {
    px: PAD.left + (dx / xMax) * PLOT_W,
    py: PAD.top + PLOT_H - (dy / yMax) * PLOT_H,
  }
}

function pixelToData(
  px: number, py: number,
  xMax: number, yMax: number,
): { dx: number; dy: number } {
  return {
    dx: ((px - PAD.left) / PLOT_W) * xMax,
    dy: ((PAD.top + PLOT_H - py) / PLOT_H) * yMax,
  }
}

function drawGraph(
  canvas: HTMLCanvasElement,
  points: GraphPoint[],
  gl: NonNullable<Question['graphLabel']>,
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const { x: xLabel, y: yLabel, xMax, yMax, xStep, yStep } = gl

  // White background
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)

  // Grid
  ctx.strokeStyle = '#e5e7eb'
  ctx.lineWidth = 1

  // Vertical gridlines + x-tick labels
  for (let xv = 0; xv <= xMax; xv += xStep) {
    const { px } = dataToPixel(xv, 0, xMax, yMax)
    ctx.beginPath()
    ctx.moveTo(px, PAD.top)
    ctx.lineTo(px, PAD.top + PLOT_H)
    ctx.stroke()

    ctx.fillStyle = '#6b7280'
    ctx.font = '11px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(String(xv), px, PAD.top + PLOT_H + 16)
  }

  // Horizontal gridlines + y-tick labels
  for (let yv = 0; yv <= yMax + 0.0001; yv += yStep) {
    const { py } = dataToPixel(0, yv, xMax, yMax)
    ctx.beginPath()
    ctx.moveTo(PAD.left, py)
    ctx.lineTo(PAD.left + PLOT_W, py)
    ctx.stroke()

    ctx.fillStyle = '#6b7280'
    ctx.font = '11px sans-serif'
    ctx.textAlign = 'right'
    const label = yv % 1 === 0 ? yv.toFixed(0) : yv.toFixed(2)
    ctx.fillText(label, PAD.left - 6, py + 4)
  }

  // Axes
  ctx.strokeStyle = '#374151'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(PAD.left, PAD.top)
  ctx.lineTo(PAD.left, PAD.top + PLOT_H)
  ctx.lineTo(PAD.left + PLOT_W, PAD.top + PLOT_H)
  ctx.stroke()

  // Axis labels
  ctx.fillStyle = '#111827'
  ctx.font = 'bold 12px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(xLabel, PAD.left + PLOT_W / 2, CANVAS_H - 6)

  // Y-axis label (rotated)
  ctx.save()
  ctx.translate(14, PAD.top + PLOT_H / 2)
  ctx.rotate(-Math.PI / 2)
  ctx.textAlign = 'center'
  ctx.fillText(yLabel, 0, 0)
  ctx.restore()

  // Title
  ctx.fillStyle = '#374151'
  ctx.font = '11px sans-serif'
  ctx.textAlign = 'right'
  ctx.fillText(`${yLabel} vs ${xLabel}`, CANVAS_W - PAD.right, PAD.top - 10)

  // --- Draw points and lines ---
  for (const pt of points) {
    if (pt.type === 'point') {
      const { px, py } = dataToPixel(pt.x, pt.y, xMax, yMax)
      ctx.beginPath()
      ctx.arc(px, py, 5, 0, Math.PI * 2)
      ctx.fillStyle = '#0d9488'
      ctx.fill()
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = 1.5
      ctx.stroke()
    } else if (pt.type === 'line' && pt.x2 !== undefined && pt.y2 !== undefined) {
      const { px: x1, py: y1 } = dataToPixel(pt.x, pt.y, xMax, yMax)
      const { px: x2, py: y2 } = dataToPixel(pt.x2, pt.y2, xMax, yMax)
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.strokeStyle = '#ef4444'
      ctx.lineWidth = 2
      ctx.setLineDash([6, 4])
      ctx.stroke()
      ctx.setLineDash([])
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function GraphCanvas({ q, qIdx }: GraphCanvasProps) {
  const gl = q.graphLabel
  const allPoints = useExamStore(s => s.graphPoints)
  const graphMode = useExamStore(s => s.graphMode)
  const addGraphPoint = useExamStore(s => s.addGraphPoint)
  const popGraphPoint = useExamStore(s => s.popGraphPoint)
  const clearGraphPoints = useExamStore(s => s.clearGraphPoints)
  const setGraphMode = useExamStore(s => s.setGraphMode)

  const points: GraphPoint[] = allPoints[q.id] ?? []
  const modeKey = `q${q.id}`
  const mode: 'point' | 'line' = graphMode[modeKey] ?? 'point'

  // Pending first click for line mode
  const pendingLineStart = useRef<{ dx: number; dy: number } | null>(null)

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !gl) return
    drawGraph(canvas, points, gl)
  }, [points, gl])

  if (!gl) return null

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const scaleX = CANVAS_W / rect.width
    const scaleY = CANVAS_H / rect.height
    const px = (e.clientX - rect.left) * scaleX
    const py = (e.clientY - rect.top) * scaleY

    // Bounds check
    if (px < PAD.left || px > PAD.left + PLOT_W || py < PAD.top || py > PAD.top + PLOT_H) return

    const { dx, dy } = pixelToData(px, py, gl.xMax, gl.yMax)
    // Clamp
    const cx = Math.max(0, Math.min(gl.xMax, dx))
    const cy = Math.max(0, Math.min(gl.yMax, dy))

    if (mode === 'point') {
      addGraphPoint(q.id, { x: cx, y: cy, type: 'point' })
    } else {
      // Line mode: needs two clicks
      if (!pendingLineStart.current) {
        pendingLineStart.current = { dx: cx, dy: cy }
      } else {
        const start = pendingLineStart.current
        addGraphPoint(q.id, {
          x: start.dx, y: start.dy,
          x2: cx, y2: cy,
          type: 'line',
        })
        pendingLineStart.current = null
      }
    }
  }

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    popGraphPoint(q.id)
  }

  const pointCount = points.filter(p => p.type === 'point').length
  const lineCount = points.filter(p => p.type === 'line').length

  return (
    <div className="mt-4 border border-line rounded-card overflow-hidden bg-surface">
      {/* Toolbar */}
      <div className="chrome-bar flex items-center gap-2 px-3 py-2 border-b border-line flex-wrap">
        <span className="text-xs font-semibold mr-1">Graph Tool:</span>

        <button
          onClick={() => { setGraphMode(modeKey, 'point'); pendingLineStart.current = null }}
          className={cn(
            'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all',
            mode === 'point'
              ? 'bg-[var(--ib-teal)] text-white border-[var(--ib-teal)]'
              : 'bg-surface text-ink-muted border-line-strong hover:border-[var(--ib-teal)]',
          )}
        >
          <Crosshair size={12} />
          Plot Point
        </button>

        <button
          onClick={() => { setGraphMode(modeKey, 'line'); pendingLineStart.current = null }}
          className={cn(
            'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all',
            mode === 'line'
              ? 'bg-red-500 text-white border-red-500'
              : 'bg-surface text-ink-muted border-line-strong hover:border-red-400',
          )}
        >
          <Minus size={12} />
          Best-fit Line
        </button>

        <button
          onClick={() => { clearGraphPoints(q.id); pendingLineStart.current = null }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-line-strong bg-surface text-ink-muted hover:border-red-400 hover:text-red-500 transition-all"
        >
          <Trash2 size={12} />
          Clear
        </button>

        <span className="ml-auto text-[11px] font-mono opacity-80">
          {pointCount} pts · {lineCount} line{lineCount !== 1 ? 's' : ''}
          {mode === 'line' && pendingLineStart.current && (
            <span className="ml-2 text-red-500">Click 2nd point to complete line</span>
          )}
        </span>
      </div>

      {/* Canvas */}
      <div className="overflow-x-auto">
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          onClick={handleCanvasClick}
          onContextMenu={handleContextMenu}
          className="block cursor-crosshair"
          style={{ maxWidth: '100%' }}
          title="Left-click to plot. Right-click to undo last point."
        />
      </div>

      <p className="px-3 py-1.5 text-[10px] text-ink-subtle border-t border-divider">
        Left-click to add point/line endpoint · Right-click to undo last action
      </p>
    </div>
  )
}
