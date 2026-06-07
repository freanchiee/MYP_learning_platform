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
function useCountUp(target: number, duration = 900) {
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

/* Individual animated stat tile — dark glass */
function StatTile({ stat, delay }: { stat: Stat; delay: number }) {
  const numericValue = typeof stat.value === 'number' ? stat.value : 0
  const isNumeric = typeof stat.value === 'number'
  const counted = useCountUp(numericValue, 800)
  const displayValue = isNumeric ? counted.toLocaleString() : stat.value

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative overflow-hidden flex flex-col gap-1 p-5"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Accent top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: stat.color }}
      />

      {/* Gate-style label */}
      <div
        className="text-[9px] font-black tracking-[0.3em] mb-3"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        {stat.label.toUpperCase()}
      </div>

      {/* Big value */}
      <span
        className="text-4xl font-extrabold leading-none"
        style={{ color: 'white', letterSpacing: '-1px' }}
      >
        {displayValue}
      </span>

      {/* Sub label */}
      <span className="text-xs font-semibold mt-1" style={{ color: 'rgba(173,241,196,0.45)' }}>
        {stat.icon} {stat.sub}
      </span>
    </motion.div>
  )
}

/* Animated XP progress bar — dark glass */
export function XPBar({ pct, level, xpInLevel, xpNeeded }: XPBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), 200)
    return () => clearTimeout(t)
  }, [pct])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.35 }}
      className="p-5"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xs font-black tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.5)' }}>
            LEVEL {level} PROGRESS
          </h2>
          <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.25)' }}>
            {xpInLevel.toLocaleString()} / {xpNeeded.toLocaleString()} XP to Level {level + 1}
          </p>
        </div>
        <span className="text-2xl font-black" style={{ color: '#adf1c4' }}>{pct}%</span>
      </div>
      <div className="h-1 overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          className="h-full xp-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </motion.div>
  )
}

/* Stats grid */
export default function DashboardStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
      {stats.map((stat, i) => (
        <StatTile key={stat.label} stat={stat} delay={i * 0.08} />
      ))}
    </div>
  )
}
