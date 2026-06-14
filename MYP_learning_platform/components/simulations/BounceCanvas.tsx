'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const CANVAS_W = 320
const CANVAS_H = 400
const RULER_X = 20
const RULER_W = 40
const DROP_HEIGHT_CM = 60
const BALL_R = 16

// cm to pixel conversion: 60cm maps to ~300px of usable height
const CM_TO_PX = (CANVAS_H - 40) / 80 // 80cm total ruler height

function cmToY(cm: number): number {
  // y=0 is top; ground is near bottom
  const groundY = CANVAS_H - 20
  return groundY - cm * CM_TO_PX
}

type Phase = 'idle' | 'falling' | 'bouncing' | 'done'

export default function BounceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number | null>(null)
  const [phase, setPhase] = useState<Phase>('idle')
  const [bounceHeight, setBounceHeight] = useState<number | null>(null)

  const ballYRef = useRef(cmToY(DROP_HEIGHT_CM))
  const velRef = useRef(0)
  const phaseRef = useRef<Phase>('idle')

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Background
    ctx.fillStyle = '#faf6e0'
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)

    // Ground line
    ctx.strokeStyle = '#1a2338'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(0, CANVAS_H - 20)
    ctx.lineTo(CANVAS_W, CANVAS_H - 20)
    ctx.stroke()

    // Ruler background
    const rulerGrad = ctx.createLinearGradient(RULER_X, 0, RULER_X + RULER_W, 0)
    rulerGrad.addColorStop(0, '#f39c12')
    rulerGrad.addColorStop(1, '#e67e22')
    ctx.fillStyle = rulerGrad
    ctx.fillRect(RULER_X, cmToY(80), RULER_W, cmToY(0) - cmToY(80))

    // Ruler ticks
    ctx.fillStyle = '#1a2338'
    ctx.font = 'bold 9px monospace'
    ctx.textAlign = 'right'
    for (let cm = 0; cm <= 80; cm += 10) {
      const y = cmToY(cm)
      ctx.strokeStyle = '#1a2338'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(RULER_X + RULER_W, y)
      ctx.lineTo(RULER_X + RULER_W + 8, y)
      ctx.stroke()
      ctx.fillText(`${cm}`, RULER_X + RULER_W + 26, y + 4)
    }
    // Minor ticks
    for (let cm = 0; cm <= 80; cm += 5) {
      if (cm % 10 !== 0) {
        const y = cmToY(cm)
        ctx.strokeStyle = '#555'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(RULER_X + RULER_W, y)
        ctx.lineTo(RULER_X + RULER_W + 5, y)
        ctx.stroke()
      }
    }
    ctx.fillStyle = '#1a2338'
    ctx.font = 'bold 9px monospace'
    ctx.textAlign = 'right'
    ctx.fillText('cm', RULER_X + RULER_W + 26, cmToY(0) + 14)

    // Ball shadow
    const ballY = ballYRef.current
    const shadowAlpha = Math.max(0, 1 - (ballY - (CANVAS_H - 20)) / -200) * 0.3
    ctx.beginPath()
    ctx.ellipse(CANVAS_W / 2, CANVAS_H - 20, BALL_R * 0.8, 5, 0, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(0,0,0,${shadowAlpha})`
    ctx.fill()

    // Ball (tennis ball style)
    const ballGrad = ctx.createRadialGradient(
      CANVAS_W / 2 - 4, ballY - 4, 2,
      CANVAS_W / 2, ballY, BALL_R,
    )
    ballGrad.addColorStop(0, '#d4ed3a')
    ballGrad.addColorStop(0.6, '#b8d400')
    ballGrad.addColorStop(1, '#8fa800')
    ctx.beginPath()
    ctx.arc(CANVAS_W / 2, ballY, BALL_R, 0, Math.PI * 2)
    ctx.fillStyle = ballGrad
    ctx.fill()
    ctx.strokeStyle = '#7a9200'
    ctx.lineWidth = 1
    ctx.stroke()

    // Bounce height indicator
    if (phaseRef.current === 'done' && bounceHeight !== null) {
      const bhY = cmToY(bounceHeight)
      ctx.setLineDash([4, 3])
      ctx.strokeStyle = '#e84040'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(RULER_X + RULER_W + 2, bhY)
      ctx.lineTo(CANVAS_W - 10, bhY)
      ctx.stroke()
      ctx.setLineDash([])

      ctx.fillStyle = '#e84040'
      ctx.font = 'bold 11px monospace'
      ctx.textAlign = 'right'
      ctx.fillText(`${bounceHeight.toFixed(1)} cm`, CANVAS_W - 5, bhY - 4)
    }
  }, [bounceHeight])

  useEffect(() => {
    draw()
  }, [draw])

  const animate = useCallback(() => {
    const GRAVITY = 0.6
    const BOUNCE_COEFF = 0.38
    const groundY = CANVAS_H - 20

    let hasBounced = false
    let peakY = Infinity

    const step = () => {
      if (phaseRef.current === 'falling') {
        velRef.current += GRAVITY
        ballYRef.current += velRef.current

        if (ballYRef.current >= groundY - BALL_R) {
          ballYRef.current = groundY - BALL_R
          velRef.current = -velRef.current * BOUNCE_COEFF
          hasBounced = true
          phaseRef.current = 'bouncing'
        }
      } else if (phaseRef.current === 'bouncing') {
        velRef.current += GRAVITY
        ballYRef.current += velRef.current

        if (velRef.current < 0 && ballYRef.current < peakY) {
          peakY = ballYRef.current
        }

        if (ballYRef.current >= groundY - BALL_R && hasBounced) {
          ballYRef.current = groundY - BALL_R
          velRef.current = 0
          phaseRef.current = 'done'
          // Convert peak pixel to cm
          const peakCm = (groundY - peakY) / CM_TO_PX
          setBounceHeight(Math.max(0, peakCm))
          setPhase('done')
          draw()
          return
        }
      }

      draw()
      animRef.current = requestAnimationFrame(step)
    }

    animRef.current = requestAnimationFrame(step)
  }, [draw])

  const handleDrop = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current)
    ballYRef.current = cmToY(DROP_HEIGHT_CM)
    velRef.current = 0
    phaseRef.current = 'falling'
    setBounceHeight(null)
    setPhase('falling')
    animate()
  }

  const handleReset = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current)
    ballYRef.current = cmToY(DROP_HEIGHT_CM)
    velRef.current = 0
    phaseRef.current = 'idle'
    setBounceHeight(null)
    setPhase('idle')
    draw()
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <canvas
        ref={canvasRef}
        width={CANVAS_W}
        height={CANVAS_H}
        className="figure-surface rounded-card shadow-card"
        style={{ maxWidth: '100%' }}
      />

      <div className="flex items-center gap-3">
        <motion.button
          onClick={handleDrop}
          disabled={phase === 'falling' || phase === 'bouncing'}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 rounded-control text-sm font-bold text-on-accent disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          style={{ background: 'var(--accent)' }}
        >
          Drop Ball
        </motion.button>

        <motion.button
          onClick={handleReset}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 rounded-control text-sm font-semibold border border-line-strong bg-surface text-ink-muted hover:bg-surface-2"
        >
          Reset
        </motion.button>
      </div>

      {bounceHeight !== null && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-mono font-semibold text-danger bg-danger-surface border border-line px-4 py-2 rounded-control"
        >
          Bounce height ≈ {bounceHeight.toFixed(1)} cm
        </motion.div>
      )}

      <p className="text-[10px] text-ink-subtle text-center">
        Ball drops from 60 cm. Observe and record the bounce height.
      </p>
    </div>
  )
}
