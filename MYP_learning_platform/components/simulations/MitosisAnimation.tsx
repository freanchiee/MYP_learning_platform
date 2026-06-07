'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const W = 640
const H = 320

interface Phase {
  name: string
  description: string
  color: string
  draw: (ctx: CanvasRenderingContext2D, t: number) => void
}

function drawCell(ctx: CanvasRenderingContext2D, cx: number, cy: number, rx: number, ry: number, color: string, alpha = 0.15) {
  ctx.save()
  ctx.beginPath()
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
  ctx.fillStyle = `rgba(${color},${alpha})`
  ctx.fill()
  ctx.strokeStyle = `rgba(${color},0.7)`
  ctx.lineWidth = 3
  ctx.stroke()
  ctx.restore()
}

function drawChromosome(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number, color: string, size = 1) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(angle)
  ctx.scale(size, size)

  ctx.beginPath()
  ctx.roundRect(-5, -14, 10, 28, 4)
  ctx.fillStyle = color
  ctx.fill()

  // Centromere
  ctx.beginPath()
  ctx.arc(0, 0, 4, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(255,255,255,0.7)'
  ctx.fill()

  ctx.restore()
}

function drawSpindleFiber(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, alpha: number) {
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = `rgba(84,124,164,${alpha})`
  ctx.lineWidth = 1.2
  ctx.setLineDash([4, 3])
  ctx.stroke()
  ctx.restore()
}

const PHASES: Phase[] = [
  {
    name: 'Interphase',
    description: 'Cell grows; DNA replicates. Chromatin is loosely distributed in the nucleus.',
    color: '31,54,116',
    draw(ctx, t) {
      // Single cell with diffuse chromatin
      drawCell(ctx, W / 2, H / 2, 130, 100, '31,54,116')
      // Nucleus
      ctx.save()
      ctx.beginPath()
      ctx.ellipse(W / 2, H / 2, 55, 45, 0, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(84,124,164,0.18)'
      ctx.fill()
      ctx.strokeStyle = 'rgba(31,54,116,0.5)'
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.restore()
      // Chromatin dots
      const seed = [0.2, 0.6, 0.35, 0.8, 0.5, 0.15, 0.75, 0.45, 0.9, 0.3]
      seed.forEach((s, i) => {
        const angle = (i / seed.length) * Math.PI * 2 + t * 0.3
        const r = 20 + s * 25
        ctx.beginPath()
        ctx.arc(W / 2 + Math.cos(angle) * r * 0.7, H / 2 + Math.sin(angle) * r * 0.5, 3 + s * 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(31,54,116,0.55)'
        ctx.fill()
      })
      // Nucleolus
      ctx.beginPath()
      ctx.arc(W / 2 - 10, H / 2 + 8, 10, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(195,40,45,0.35)'
      ctx.fill()
    }
  },
  {
    name: 'Prophase',
    description: 'Chromosomes condense and become visible. Nuclear envelope begins to break down.',
    color: '84,124,164',
    draw(ctx, t) {
      drawCell(ctx, W / 2, H / 2, 130, 100, '84,124,164')
      // Fading nucleus
      ctx.save()
      ctx.beginPath()
      ctx.ellipse(W / 2, H / 2, 55, 45, 0, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(31,54,116,${0.4 - t * 0.08})`
      ctx.lineWidth = 2
      ctx.setLineDash([6, 4])
      ctx.stroke()
      ctx.restore()
      // Condensing chromosomes (4 pairs)
      const positions = [[-30, -25], [30, -25], [-30, 25], [30, 25]]
      positions.forEach(([dx, dy], i) => {
        drawChromosome(ctx, W / 2 + dx, H / 2 + dy, (i * 0.8) + t * 0.1, '#1f3674')
      })
    }
  },
  {
    name: 'Metaphase',
    description: 'Chromosomes align at the metaphase plate (cell equator). Spindle fibres attach to centromeres.',
    color: '39,78,104',
    draw(ctx, t) {
      drawCell(ctx, W / 2, H / 2, 130, 100, '39,78,104')
      // Spindle poles
      const poleL = W / 2 - 115
      const poleR = W / 2 + 115
      // Metaphase plate line
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(W / 2, H / 2 - 95)
      ctx.lineTo(W / 2, H / 2 + 95)
      ctx.strokeStyle = 'rgba(173,241,196,0.7)'
      ctx.lineWidth = 2
      ctx.setLineDash([5, 3])
      ctx.stroke()
      ctx.restore()

      // Chromosomes aligned at plate
      const ys = [-36, -12, 12, 36]
      ys.forEach((dy, i) => {
        drawChromosome(ctx, W / 2, H / 2 + dy, Math.PI / 2, '#1f3674')
        drawSpindleFiber(ctx, poleL, H / 2, W / 2, H / 2 + dy, 0.55 + Math.sin(t + i) * 0.1)
        drawSpindleFiber(ctx, poleR, H / 2, W / 2, H / 2 + dy, 0.55 + Math.sin(t + i) * 0.1)
      })
    }
  },
  {
    name: 'Anaphase',
    description: 'Sister chromatids are pulled to opposite poles. Cell elongates.',
    color: '195,40,45',
    draw(ctx, t) {
      const elongation = 1 + Math.sin(t) * 0.08
      drawCell(ctx, W / 2, H / 2, 130 * elongation, 100 / elongation, '195,40,45')

      const poleL = W / 2 - 115
      const poleR = W / 2 + 115
      const sep = 40 + t * 8  // chromosomes moving apart

      const ys = [-30, -10, 10, 30]
      ys.forEach((dy) => {
        // Left chromatids
        drawChromosome(ctx, W / 2 - Math.min(sep, 80), H / 2 + dy, 0, '#1f3674', 0.85)
        drawSpindleFiber(ctx, poleL, H / 2, W / 2 - Math.min(sep, 80), H / 2 + dy, 0.5)
        // Right chromatids
        drawChromosome(ctx, W / 2 + Math.min(sep, 80), H / 2 + dy, 0, '#c3282d', 0.85)
        drawSpindleFiber(ctx, poleR, H / 2, W / 2 + Math.min(sep, 80), H / 2 + dy, 0.5)
      })
    }
  },
  {
    name: 'Telophase',
    description: 'Two nuclei form at opposite poles. Chromosomes begin to decondense. Cytokinesis begins.',
    color: '39,78,104',
    draw(ctx, t) {
      // Two cells forming
      const cx1 = W / 2 - 95
      const cx2 = W / 2 + 95
      drawCell(ctx, cx1, H / 2, 85, 80, '39,78,104', 0.12)
      drawCell(ctx, cx2, H / 2, 85, 80, '39,78,104', 0.12)
      // New nuclei
      ctx.beginPath()
      ctx.ellipse(cx1, H / 2, 38, 30, 0, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(84,124,164,0.2)'
      ctx.fill()
      ctx.strokeStyle = 'rgba(31,54,116,0.5)'
      ctx.lineWidth = 1.5
      ctx.stroke()
      ctx.beginPath()
      ctx.ellipse(cx2, H / 2, 38, 30, 0, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(84,124,164,0.2)'
      ctx.fill()
      ctx.stroke()
      // Decondensing chromosomes
      ;[-15, 0, 15].forEach((dy) => {
        drawChromosome(ctx, cx1, H / 2 + dy, 0, 'rgba(31,54,116,0.5)', 0.65)
        drawChromosome(ctx, cx2, H / 2 + dy, 0, 'rgba(195,40,45,0.5)', 0.65)
      })
      // Cleavage furrow
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(W / 2, H / 2 - 75)
      ctx.lineTo(W / 2, H / 2 + 75)
      ctx.strokeStyle = `rgba(39,78,104,${0.5 + Math.sin(t * 2) * 0.2})`
      ctx.lineWidth = 3
      ctx.setLineDash([])
      ctx.stroke()
      ctx.restore()
    }
  },
  {
    name: 'Cytokinesis',
    description: 'The cytoplasm divides. Two genetically identical daughter cells are produced.',
    color: '173,241,196',
    draw(ctx, _t) {
      // Two separate daughter cells
      drawCell(ctx, W / 2 - 140, H / 2, 80, 75, '31,54,116', 0.13)
      drawCell(ctx, W / 2 + 140, H / 2, 80, 75, '31,54,116', 0.13)
      // Their nuclei
      ;[W / 2 - 140, W / 2 + 140].forEach((cx) => {
        ctx.beginPath()
        ctx.ellipse(cx, H / 2, 34, 27, 0, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(84,124,164,0.22)'
        ctx.fill()
        ctx.strokeStyle = 'rgba(31,54,116,0.5)'
        ctx.lineWidth = 1.5
        ctx.stroke()
        // Chromatin
        ;[-8, 0, 8].forEach((dy) => {
          ctx.beginPath()
          ctx.arc(cx, H / 2 + dy, 3, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(31,54,116,0.4)'
          ctx.fill()
        })
      })
      // = labels
      ctx.font = 'bold 28px Georgia, serif'
      ctx.fillStyle = 'rgba(31,54,116,0.3)'
      ctx.textAlign = 'center'
      ctx.fillText('=', W / 2, H / 2 + 10)
    }
  },
]

export default function MitosisAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [phaseIdx, setPhaseIdx] = useState(0)
  const tRef = useRef(0)
  const rafRef = useRef<number>(0)

  const phase = PHASES[phaseIdx]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    tRef.current = 0

    const tick = () => {
      tRef.current += 0.04
      ctx.clearRect(0, 0, W, H)

      // Background
      ctx.fillStyle = '#faf9f6'
      ctx.fillRect(0, 0, W, H)

      PHASES[phaseIdx].draw(ctx, tRef.current)

      // Phase label
      ctx.font = 'bold 13px Inter, sans-serif'
      ctx.fillStyle = `rgba(${PHASES[phaseIdx].color},0.6)`
      ctx.textAlign = 'left'
      ctx.fillText(PHASES[phaseIdx].name.toUpperCase(), 12, H - 10)

      // Step counter
      ctx.textAlign = 'right'
      ctx.font = '11px Inter, sans-serif'
      ctx.fillStyle = 'rgba(31,54,116,0.4)'
      ctx.fillText(`${phaseIdx + 1} / ${PHASES.length}`, W - 12, H - 10)

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [phaseIdx])

  return (
    <div className="space-y-3 select-none">
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        className="w-full rounded-xl border border-gray-200"
        style={{ maxHeight: 320 }}
      />

      {/* Phase description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={phaseIdx}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22 }}
          className="px-4 py-2.5 rounded-lg text-sm"
          style={{
            background: `rgba(${phase.color},0.07)`,
            border: `1px solid rgba(${phase.color},0.2)`,
            color: '#274e68',
          }}
        >
          <span className="font-bold">{phase.name}: </span>{phase.description}
        </motion.div>
      </AnimatePresence>

      {/* Phase buttons */}
      <div className="flex gap-1.5 flex-wrap">
        {PHASES.map((p, i) => (
          <button
            key={i}
            onClick={() => setPhaseIdx(i)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            style={{
              background: i === phaseIdx ? '#1f3674' : 'rgba(31,54,116,0.07)',
              color: i === phaseIdx ? '#fff' : '#1f3674',
              border: `1px solid ${i === phaseIdx ? '#1f3674' : 'rgba(31,54,116,0.15)'}`,
            }}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Prev / Next */}
      <div className="flex justify-between pt-1">
        <button
          onClick={() => setPhaseIdx(i => Math.max(0, i - 1))}
          disabled={phaseIdx === 0}
          className="px-4 py-1.5 rounded-lg text-xs font-bold transition-all disabled:opacity-30"
          style={{ background: 'rgba(31,54,116,0.1)', color: '#1f3674' }}
        >
          ← Previous
        </button>
        <button
          onClick={() => setPhaseIdx(i => Math.min(PHASES.length - 1, i + 1))}
          disabled={phaseIdx === PHASES.length - 1}
          className="px-4 py-1.5 rounded-lg text-xs font-bold transition-all disabled:opacity-30"
          style={{ background: '#1f3674', color: '#adf1c4' }}
        >
          Next →
        </button>
      </div>
    </div>
  )
}
