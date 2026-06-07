'use client'

import { useEffect, useRef } from 'react'

// ─── Transverse wave canvas ───────────────────────────────────────────────────
function TransverseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const W = canvas.width
    const H = canvas.height
    const cy = H / 2
    let t = 0

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Background
      ctx.fillStyle = '#f8f9fa'
      ctx.fillRect(0, 0, W, H)

      // Centre line (equilibrium)
      ctx.strokeStyle = '#ccc'
      ctx.lineWidth = 1
      ctx.setLineDash([4, 4])
      ctx.beginPath()
      ctx.moveTo(0, cy)
      ctx.lineTo(W, cy)
      ctx.stroke()
      ctx.setLineDash([])

      // Coil dots along the spring (vertical oscillation = transverse)
      const N = 28
      const amplitude = 48
      const omega = 2 * Math.PI
      const k = (2 * Math.PI) / W   // 1 full wavelength across canvas
      const speed = 1.5

      // Draw wave path
      ctx.strokeStyle = '#0055aa'
      ctx.lineWidth = 2.5
      ctx.beginPath()
      for (let px = 0; px <= W; px++) {
        const y = cy - amplitude * Math.sin(k * px - omega * speed * t)
        if (px === 0) ctx.moveTo(px, y)
        else ctx.lineTo(px, y)
      }
      ctx.stroke()

      // Draw "mass" dots along the wave
      ctx.fillStyle = '#0055aa'
      for (let i = 0; i <= N; i++) {
        const px = (i / N) * W
        const y = cy - amplitude * Math.sin(k * px - omega * speed * t)
        ctx.beginPath()
        ctx.arc(px, y, 3.5, 0, Math.PI * 2)
        ctx.fill()
      }

      // Arrow showing direction of wave travel
      ctx.fillStyle = '#0055aa'
      ctx.font = 'bold 12px sans-serif'
      ctx.fillText('→ wave travels this way', 8, 16)

      // Arrow showing particle motion direction (↕)
      ctx.fillStyle = '#cc0000'
      ctx.font = '11px sans-serif'
      ctx.fillText('↕ particle motion (⊥ to wave)', 8, H - 8)

      t += 0.016
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={320}
      height={160}
      className="rounded-lg border border-blue-200"
      style={{ imageRendering: 'pixelated' }}
    />
  )
}

// ─── Longitudinal wave canvas ─────────────────────────────────────────────────
function LongitudinalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const W = canvas.width
    const H = canvas.height
    const cy = H / 2
    let t = 0

    function draw() {
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#f8f9fa'
      ctx.fillRect(0, 0, W, H)

      const N = 36  // number of coil loops
      const amplitude = 18  // horizontal displacement amplitude
      const omega = 2 * Math.PI
      const k = (2 * Math.PI) / W
      const speed = 1.5
      const coilW = 7  // half-width of each coil
      const coilH = 28 // half-height of each coil

      // Draw each coil as a short arc displaced horizontally
      ctx.strokeStyle = '#444'
      ctx.lineWidth = 2

      for (let i = 0; i < N; i++) {
        const baseX = ((i + 0.5) / N) * W
        // Horizontal displacement: compression/rarefaction
        const dx = amplitude * Math.sin(k * baseX - omega * speed * t)
        const cx2 = baseX + dx

        // Draw a small zigzag (coil cross-section simplified as arc)
        ctx.beginPath()
        ctx.arc(cx2, cy, coilW, -Math.PI / 2, Math.PI / 2)
        ctx.stroke()
      }

      // Colour-code compressed vs stretched regions
      // Find density: compare adjacent displaced positions
      for (let i = 0; i < N - 1; i++) {
        const x1 = ((i + 0.5) / N) * W + amplitude * Math.sin(k * ((i + 0.5) / N) * W - omega * speed * t)
        const x2 = ((i + 1.5) / N) * W + amplitude * Math.sin(k * ((i + 1.5) / N) * W - omega * speed * t)
        const spacing = x2 - x1
        const normalSpacing = W / N

        if (spacing < normalSpacing * 0.7) {
          // Compression — highlight with light red
          ctx.fillStyle = 'rgba(220,80,80,0.12)'
          ctx.fillRect(x1, cy - coilH, spacing, coilH * 2)
        } else if (spacing > normalSpacing * 1.3) {
          // Rarefaction — highlight with light blue
          ctx.fillStyle = 'rgba(80,120,220,0.12)'
          ctx.fillRect(x1, cy - coilH, spacing, coilH * 2)
        }
      }

      // Labels
      ctx.fillStyle = '#0055aa'
      ctx.font = 'bold 12px sans-serif'
      ctx.fillText('→ wave travels this way', 8, 16)

      ctx.fillStyle = '#cc0000'
      ctx.font = '11px sans-serif'
      ctx.fillText('↔ particle motion (∥ to wave)', 8, H - 8)

      t += 0.016
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={320}
      height={160}
      className="rounded-lg border border-gray-300"
      style={{ imageRendering: 'pixelated' }}
    />
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function WaveAnimationsWidget() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 my-3 justify-center">
      {/* Transverse */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Transverse Wave
        </span>
        <TransverseCanvas />
        <p className="text-[11px] text-gray-500 max-w-[320px] text-center">
          Particles vibrate <strong>perpendicular</strong> to the direction of wave travel.
          Example: light, water waves, waves on a string.
        </p>
      </div>

      {/* Longitudinal */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-300">
          Longitudinal Wave
        </span>
        <LongitudinalCanvas />
        <p className="text-[11px] text-gray-500 max-w-[320px] text-center">
          Particles vibrate <strong>parallel</strong> to the direction of wave travel,
          creating <span className="text-red-600 font-semibold">compressions</span> and{' '}
          <span className="text-blue-600 font-semibold">rarefactions</span>.
          Example: sound, infrasound.
        </p>
      </div>
    </div>
  )
}
