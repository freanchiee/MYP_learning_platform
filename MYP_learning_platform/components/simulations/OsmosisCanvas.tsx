'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

interface Molecule {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  isWater: boolean
  side: 'left' | 'right'
}

const W = 640
const H = 340
const MEMBRANE_X = W / 2
const MEMBRANE_GAP = 6
const PORE_COUNT = 5

function makePopulation(
  side: 'left' | 'right',
  waterCount: number,
  soluteCount: number,
  seed: number
): Molecule[] {
  const molecules: Molecule[] = []
  const xMin = side === 'left' ? 14 : MEMBRANE_X + MEMBRANE_GAP + 14
  const xMax = side === 'left' ? MEMBRANE_X - MEMBRANE_GAP - 14 : W - 14

  let r = seed
  const rand = () => { r = (r * 1664525 + 1013904223) & 0xffffffff; return (r >>> 0) / 0xffffffff }

  for (let i = 0; i < waterCount; i++) {
    molecules.push({
      x: xMin + rand() * (xMax - xMin),
      y: 20 + rand() * (H - 40),
      vx: (rand() - 0.5) * 2.2,
      vy: (rand() - 0.5) * 2.2,
      r: 5,
      isWater: true,
      side,
    })
  }
  for (let i = 0; i < soluteCount; i++) {
    molecules.push({
      x: xMin + rand() * (xMax - xMin),
      y: 20 + rand() * (H - 40),
      vx: (rand() - 0.5) * 1.4,
      vy: (rand() - 0.5) * 1.4,
      r: 8,
      isWater: false,
      side,
    })
  }
  return molecules
}

export default function OsmosisCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [leftSolute, setLeftSolute] = useState(1)   // 1-10 slider
  const [rightSolute, setRightSolute] = useState(6)  // 1-10 slider
  const [netFlow, setNetFlow] = useState<'left' | 'right' | 'equilibrium'>('right')
  const moleculesRef = useRef<Molecule[]>([])
  const rafRef = useRef<number>(0)
  const crossingRef = useRef<number[]>([]) // timestamps of crossings

  const reset = useCallback(() => {
    // More solute = fewer water molecules (by concentration logic)
    const leftWater  = Math.max(4, 18 - leftSolute  * 1.4 | 0)
    const rightWater = Math.max(4, 18 - rightSolute * 1.4 | 0)
    moleculesRef.current = [
      ...makePopulation('left',  leftWater,  leftSolute,  42 + leftSolute),
      ...makePopulation('right', rightWater, rightSolute, 99 + rightSolute),
    ]
    crossingRef.current = []

    if (leftSolute > rightSolute) setNetFlow('left')
    else if (rightSolute > leftSolute) setNetFlow('right')
    else setNetFlow('equilibrium')
  }, [leftSolute, rightSolute])

  useEffect(() => { reset() }, [reset])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Backgrounds
      const leftHue  = Math.round(200 + leftSolute  * 4) // blue tones
      const rightHue = Math.round(200 + rightSolute * 4)
      ctx.fillStyle = `hsl(${leftHue},60%,${96 - leftSolute * 2}%)`
      ctx.fillRect(0, 0, MEMBRANE_X - MEMBRANE_GAP / 2, H)
      ctx.fillStyle = `hsl(${rightHue},60%,${96 - rightSolute * 2}%)`
      ctx.fillRect(MEMBRANE_X + MEMBRANE_GAP / 2, 0, W - MEMBRANE_X - MEMBRANE_GAP / 2, H)

      // Membrane — dashed line with pore gaps
      ctx.setLineDash([])
      const poreH = 28
      const poreSpacing = H / (PORE_COUNT + 1)
      for (let i = 0; i <= PORE_COUNT; i++) {
        const segTop = i === 0 ? 0 : i * poreSpacing + poreH / 2
        const segBot = i === PORE_COUNT ? H : (i + 1) * poreSpacing - poreH / 2
        ctx.fillStyle = '#1f3674'
        ctx.fillRect(MEMBRANE_X - 3, segTop, 6, segBot - segTop)
      }

      // Labels
      ctx.font = 'bold 11px Inter, sans-serif'
      ctx.fillStyle = 'rgba(31,54,116,0.55)'
      ctx.textAlign = 'center'
      ctx.fillText('LOW SOLUTE', MEMBRANE_X / 2, 16)
      ctx.fillText('HIGH SOLUTE', MEMBRANE_X + (W - MEMBRANE_X) / 2, 16)
      ctx.fillText(`[${leftSolute}]`, MEMBRANE_X / 2, H - 6)
      ctx.fillText(`[${rightSolute}]`, MEMBRANE_X + (W - MEMBRANE_X) / 2, H - 6)

      // Net flow arrow
      if (netFlow !== 'equilibrium') {
        const arrowX = netFlow === 'right' ? MEMBRANE_X + 1 : MEMBRANE_X - 1
        const arrowDir = netFlow === 'right' ? 1 : -1
        ctx.strokeStyle = '#c3282d'
        ctx.lineWidth = 2.5
        ctx.setLineDash([5, 3])
        ctx.beginPath()
        ctx.moveTo(arrowX - arrowDir * 60, H / 2)
        ctx.lineTo(arrowX + arrowDir * 60, H / 2)
        ctx.stroke()
        ctx.setLineDash([])
        // Arrowhead
        ctx.fillStyle = '#c3282d'
        ctx.beginPath()
        const tip = arrowX + arrowDir * 60
        ctx.moveTo(tip, H / 2)
        ctx.lineTo(tip - arrowDir * 10, H / 2 - 6)
        ctx.lineTo(tip - arrowDir * 10, H / 2 + 6)
        ctx.closePath()
        ctx.fill()

        ctx.font = 'bold 10px Inter, sans-serif'
        ctx.fillStyle = '#c3282d'
        ctx.textAlign = 'center'
        ctx.fillText('H₂O', arrowX + arrowDir * 20, H / 2 - 10)
      } else {
        ctx.font = 'bold 10px Inter, sans-serif'
        ctx.fillStyle = '#274e68'
        ctx.textAlign = 'center'
        ctx.fillText('EQUILIBRIUM', MEMBRANE_X, H / 2 - 10)
      }

      // Molecules
      const mols = moleculesRef.current
      for (const m of mols) {
        ctx.beginPath()
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2)
        if (m.isWater) {
          ctx.fillStyle = 'rgba(84,124,164,0.75)'
          ctx.fill()
          ctx.strokeStyle = 'rgba(31,54,116,0.5)'
          ctx.lineWidth = 1
          ctx.stroke()
          // H₂O label
          ctx.font = '7px Inter, sans-serif'
          ctx.fillStyle = '#fff'
          ctx.textAlign = 'center'
          ctx.fillText('H₂O', m.x, m.y + 2.5)
        } else {
          ctx.fillStyle = 'rgba(195,40,45,0.7)'
          ctx.fill()
          ctx.strokeStyle = '#c3282d'
          ctx.lineWidth = 1
          ctx.stroke()
          ctx.font = '7px Inter, sans-serif'
          ctx.fillStyle = '#fff'
          ctx.textAlign = 'center'
          ctx.fillText('S', m.x, m.y + 2.5)
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const PORE_H = 28
    const PORE_POSITIONS = Array.from({ length: PORE_COUNT }, (_, i) => (i + 1) * H / (PORE_COUNT + 1))

    const tick = () => {
      const mols = moleculesRef.current
      const now = Date.now()

      for (const m of mols) {
        m.x += m.vx
        m.y += m.vy

        // Boundary walls
        if (m.x - m.r < 0)  { m.x = m.r;  m.vx = Math.abs(m.vx) }
        if (m.x + m.r > W)  { m.x = W - m.r; m.vx = -Math.abs(m.vx) }
        if (m.y - m.r < 0)  { m.y = m.r;  m.vy = Math.abs(m.vy) }
        if (m.y + m.r > H)  { m.y = H - m.r; m.vy = -Math.abs(m.vy) }

        // Membrane interaction
        const nearMembrane = Math.abs(m.x - MEMBRANE_X) < m.r + 3
        if (nearMembrane) {
          if (!m.isWater) {
            // Solutes bounce off membrane
            if (m.x < MEMBRANE_X && m.vx > 0) m.vx = -m.vx
            if (m.x > MEMBRANE_X && m.vx < 0) m.vx = -m.vx
          } else {
            // Water can pass through pores
            const nearPore = PORE_POSITIONS.some(py => Math.abs(m.y - py) < PORE_H / 2)
            if (nearPore) {
              // Allow crossing — bias direction based on concentration gradient
              const crossBias = netFlow === 'right' ? 0.7 : netFlow === 'left' ? 0.3 : 0.5
              if (m.side === 'left' && m.x > MEMBRANE_X - m.r && m.vx > 0) {
                if (Math.random() < crossBias) {
                  m.side = 'right'
                  crossingRef.current.push(now)
                } else {
                  m.vx = -m.vx
                }
              } else if (m.side === 'right' && m.x < MEMBRANE_X + m.r && m.vx < 0) {
                if (Math.random() < 1 - crossBias) {
                  m.side = 'left'
                  crossingRef.current.push(now)
                } else {
                  m.vx = -m.vx
                }
              }
            } else {
              // No pore — bounce
              if (m.x < MEMBRANE_X && m.vx > 0) m.vx = -m.vx
              if (m.x > MEMBRANE_X && m.vx < 0) m.vx = -m.vx
            }
          }
        }

        // Keep molecules on correct side bounds (soft)
        const leftBound = m.side === 'left' ? MEMBRANE_X - MEMBRANE_GAP - m.r : MEMBRANE_X + MEMBRANE_GAP + m.r
        if (m.side === 'left' && m.x > leftBound && !nearMembrane) m.vx -= 0.1
        if (m.side === 'right' && m.x < leftBound && !nearMembrane) m.vx += 0.1
      }

      draw()
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [netFlow, leftSolute, rightSolute])

  return (
    <div className="space-y-3 select-none">
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        className="figure-surface w-full rounded-card"
        style={{ maxHeight: 340 }}
      />

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 px-2">
        {[
          { label: 'Left side solute concentration', val: leftSolute, set: setLeftSolute },
          { label: 'Right side solute concentration', val: rightSolute, set: setRightSolute },
        ].map(({ label, val, set }, i) => (
          <div key={i}>
            <div className="flex justify-between text-xs font-semibold mb-1" style={{ color: '#1f3674' }}>
              <span>{label}</span>
              <span className="font-mono">{val}</span>
            </div>
            <input
              type="range" min={1} max={10} value={val}
              onChange={(e) => set(Number(e.target.value))}
              className="w-full accent-[#1f3674]"
            />
          </div>
        ))}
      </div>

      {/* Status */}
      <div
        className="text-center text-xs font-bold py-2 rounded-lg"
        style={{
          background: netFlow === 'equilibrium' ? 'rgba(173,241,196,0.2)' : 'rgba(195,40,45,0.08)',
          color: netFlow === 'equilibrium' ? '#274e68' : '#c3282d',
          border: `1px solid ${netFlow === 'equilibrium' ? 'rgba(173,241,196,0.4)' : 'rgba(195,40,45,0.2)'}`,
        }}
      >
        {netFlow === 'equilibrium'
          ? 'Equilibrium — no net water movement'
          : `Net osmosis: water moving → ${netFlow === 'right' ? 'Right (higher solute)' : 'Left (higher solute)'}`}
      </div>
    </div>
  )
}
