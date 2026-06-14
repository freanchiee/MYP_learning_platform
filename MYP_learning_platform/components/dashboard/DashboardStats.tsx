'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Stat {
  label: string
  value: number | string
  sub: string
  color: string
  icon: string
}

interface XPBarProps {
  pct: number
  level: number
  xpInLevel: number
  xpNeeded: number
}

/* Count-up hook */
function useCountUp(target: number, duration = 1000) {
  const [display, setDisplay] = useState(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    const start = performance.now()
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(target * eased))
      if (progress < 1) raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf.current)
  }, [target, duration])

  return display
}

/* Single stat — editorial typographic style */
function StatTile({ stat, delay, index }: { stat: Stat; delay: number; index: number }) {
  const numericValue = typeof stat.value === 'number' ? stat.value : 0
  const isNumeric = typeof stat.value === 'number'
  const counted = useCountUp(numericValue, 1000)
  const displayValue = isNumeric ? counted.toLocaleString() : stat.value

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative flex flex-col py-8 px-6"
      style={{
        borderRight: index < 3 ? '1px solid var(--border)' : 'none',
      }}
    >
      {/* Small label — top */}
      <div
        className="text-[9px] font-black uppercase tracking-[0.3em] mb-5"
        style={{ color: 'var(--text-subtle)' }}
      >
        {stat.label}
      </div>

      {/* Giant number */}
      <div
        className="font-extrabold leading-none"
        style={{
          fontSize: 'clamp(52px, 6vw, 88px)',
          color: 'var(--text)',
          letterSpacing: '-3px',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {displayValue}
      </div>

      {/* Sub label */}
      <div
        className="mt-3 text-xs font-semibold"
        style={{ color: 'var(--text-muted)' }}
      >
        {stat.sub}
      </div>

      {/* Accent bar — bottom left on hover */}
      <div
        className="absolute bottom-0 left-6"
        style={{
          width: 32,
          height: 2,
          background: stat.color,
        }}
      />
    </motion.div>
  )
}

/* Animated XP progress bar — editorial style */
export function XPBar({ pct, level, xpInLevel, xpNeeded }: XPBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), 300)
    return () => clearTimeout(t)
  }, [pct])

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex items-center gap-10 py-8 px-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Left: label block */}
      <div className="flex-shrink-0 w-48">
        <div
          className="text-[9px] font-black uppercase tracking-[0.3em] mb-1"
          style={{ color: 'var(--text-subtle)' }}
        >
          Level {level} Progress
        </div>
        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {xpInLevel.toLocaleString()} / {xpNeeded.toLocaleString()} XP
        </div>
      </div>

      {/* Middle: bar */}
      <div className="flex-1">
        <div
          className="relative h-px overflow-visible"
          style={{ background: 'var(--border)' }}
        >
          <div
            className="absolute top-0 left-0 h-full xp-bar-fill"
            style={{ width: `${width}%`, height: '2px', top: '-0.5px' }}
          />
        </div>
      </div>

      {/* Right: percent */}
      <div
        className="flex-shrink-0 text-2xl font-extrabold tabular-nums"
        style={{ color: 'var(--text)', letterSpacing: '-1px' }}
      >
        {pct}%
      </div>
    </motion.div>
  )
}

/* Stats row — editorial four-column */
export default function DashboardStats({ stats }: { stats: Stat[] }) {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      {stats.map((stat, i) => (
        <StatTile key={stat.label} stat={stat} delay={i * 0.07} index={i} />
      ))}
    </div>
  )
}
