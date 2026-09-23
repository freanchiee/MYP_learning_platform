'use client'

import { useCallback, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Burst {
  id: number
  label: string
}

const COLORS = ['#FFCF3F', '#1FA98A', '#5C3FD6', '#D6425E', '#2456C9', '#E8672A']
const SHAPES = ['⭐', '🎉', '✦', '💫']

/** A student-facing "you did something worth noticing" moment — a burst of
 *  confetti plus a short label, fired either by a teacher's quick reaction
 *  (see ui.tsx QuickReactButton) or by hitting one of a field's
 *  `celebrateKeywords` (see data/design/live/types.ts). One overlay per
 *  page; call `celebrate(label)` from anywhere under it. */
export function useCelebration() {
  const [bursts, setBursts] = useState<Burst[]>([])
  const counter = useRef(0)
  const celebrate = useCallback((label: string) => {
    const id = ++counter.current
    setBursts((b) => [...b, { id, label }])
    setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 1800)
  }, [])
  return { bursts, celebrate }
}

export function CelebrationOverlay({ bursts }: { bursts: Burst[] }) {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 70, overflow: 'hidden' }}>
      <AnimatePresence>
        {bursts.map((burst) => (
          <div key={burst.id}>
            {Array.from({ length: 20 }).map((_, i) => {
              const angle = (i / 20) * Math.PI * 2
              const dist = 110 + Math.random() * 150
              const dx = Math.cos(angle) * dist
              const dy = Math.sin(angle) * dist - 40
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 1, x: '50vw', y: '38vh', scale: 0.6, rotate: 0 }}
                  animate={{ opacity: 0, x: `calc(50vw + ${dx}px)`, y: `calc(38vh + ${dy}px)`, scale: 1, rotate: Math.random() * 360 }}
                  transition={{ duration: 1.1 + Math.random() * 0.4, ease: 'easeOut' }}
                  style={{ position: 'absolute', fontSize: 15 + Math.random() * 10, color: COLORS[i % COLORS.length] }}
                >
                  {SHAPES[i % SHAPES.length]}
                </motion.span>
              )
            })}
            <motion.div
              initial={{ opacity: 0, y: '32vh', scale: 0.85 }}
              animate={{ opacity: 1, y: '36vh', scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                transform: 'translateX(-50%)',
                background: 'var(--surface)',
                color: 'var(--text)',
                border: '2.5px solid var(--text)',
                borderRadius: 12,
                padding: '8px 16px',
                fontWeight: 800,
                fontSize: 13.5,
                boxShadow: '3px 3px 0 var(--text)',
                whiteSpace: 'nowrap',
                maxWidth: '90vw',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
            >
              {burst.label}
            </motion.div>
          </div>
        ))}
      </AnimatePresence>
    </div>
  )
}
