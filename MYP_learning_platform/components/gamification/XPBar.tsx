'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap } from 'lucide-react'

interface XPBarProps {
  xp: number
  level: number
}

/** XP needed to reach the NEXT level (linear scale: 100 per level) */
function xpForLevel(level: number): number {
  return level * 100
}

export default function XPBar({ xp, level }: XPBarProps) {
  const needed = xpForLevel(level)
  const currentInLevel = xp % needed
  const pct = Math.min((currentInLevel / needed) * 100, 100)

  const prevXp = useRef(xp)
  const [popDelta, setPopDelta] = useState<number | null>(null)
  const [popKey, setPopKey] = useState(0)

  useEffect(() => {
    const delta = xp - prevXp.current
    if (delta > 0) {
      setPopDelta(delta)
      setPopKey(k => k + 1)
    }
    prevXp.current = xp
  }, [xp])

  return (
    <div className="flex items-center gap-2 select-none">
      {/* Level badge */}
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--ib-blue)] text-on-accent flex items-center justify-center text-xs font-bold shadow">
        {level}
      </div>

      {/* Bar + labels */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-[10px] text-ink-subtle font-medium flex items-center gap-0.5">
            <Zap size={10} className="text-[var(--ib-teal)]" />
            XP
          </span>
          <span className="text-[10px] text-ink-subtle font-mono">
            {currentInLevel}/{needed}
          </span>
        </div>
        <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--ib-teal)] rounded-full"
            animate={{ width: `${pct}%` }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          />
        </div>
      </div>

      {/* +XP pop animation */}
      <div className="relative w-10 flex justify-center">
        <AnimatePresence mode="popLayout">
          {popDelta !== null && (
            <motion.span
              key={popKey}
              initial={{ opacity: 1, y: 0, scale: 0.8 }}
              animate={{ opacity: 0, y: -20, scale: 1.2 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              onAnimationComplete={() => setPopDelta(null)}
              className="absolute -top-4 text-xs font-bold text-[var(--ib-teal)] whitespace-nowrap pointer-events-none"
            >
              +{popDelta} XP
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
