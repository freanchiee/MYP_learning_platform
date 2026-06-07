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
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(target * eased))
      if (progress < 1) raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf.current)
  }, [target, duration])

  return display
}

/* Individual animated stat tile */
function StatTile({ stat, delay }: { stat: Stat; delay: number }) {
  const numericValue = typeof stat.value === 'number' ? stat.value : 0
  const isNumeric = typeof stat.value === 'number'
  const counted = useCountUp(numericValue, 800)
  const displayValue = isNumeric
    ? counted.toLocaleString()
    : stat.value

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="rounded-2xl p-5 flex flex-col gap-1"
      style={{
        background: '#fff',
        border: '1px solid rgba(31,54,116,0.09)',
        boxShadow: '0 2px 12px rgba(31,54,116,0.06)',
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-1"
        style={{ background: stat.color + '18' }}
      >
        {stat.icon}
      </div>
      <span className="text-3xl font-extrabold leading-none" style={{ color: stat.color }}>
        {displayValue}
      </span>
      <span className="text-sm font-semibold" style={{ color: '#1f3674' }}>{stat.label}</span>
      <span className="text-xs" style={{ color: '#547ca4' }}>{stat.sub}</span>
    </motion.div>
  )
}

/* Animated XP progress bar */
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
      className="rounded-2xl p-5"
      style={{
        background: '#fff',
        border: '1px solid rgba(31,54,116,0.09)',
        boxShadow: '0 2px 12px rgba(31,54,116,0.06)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-sm font-bold" style={{ color: '#1f3674' }}>Level {level} Progress</h2>
          <p className="text-xs mt-0.5" style={{ color: '#547ca4' }}>
            {xpInLevel.toLocaleString()} / {xpNeeded.toLocaleString()} XP to Level {level + 1}
          </p>
        </div>
        <span className="text-sm font-bold" style={{ color: '#c3282d' }}>{pct}%</span>
      </div>
      <div className="h-3 rounded-full overflow-hidden" style={{ background: '#e0edf7' }}>
        <div
          className="h-full rounded-full xp-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </motion.div>
  )
}

/* Stats grid */
export default function DashboardStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <StatTile key={stat.label} stat={stat} delay={i * 0.08} />
      ))}
    </div>
  )
}
