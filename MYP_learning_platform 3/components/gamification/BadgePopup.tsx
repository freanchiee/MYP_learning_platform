'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BadgeInfo {
  id: string
  name: string
  icon: string
  description: string
  rarity: string
}

interface BadgePopupProps {
  badges: BadgeInfo[]
  onDone: () => void
}

const rarityStyle: Record<string, string> = {
  common: 'bg-gray-200 text-gray-700',
  rare: 'bg-blue-100 text-blue-700 border border-blue-300',
  epic: 'bg-purple-100 text-purple-700 border border-purple-300',
  legendary: 'bg-yellow-100 text-yellow-700 border border-yellow-400',
}

const PARTICLE_COUNT = 18

function randomParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 4 + Math.random() * 8,
    delay: Math.random() * 0.6,
    color: ['#facc15', '#f59e0b', '#fde68a', '#fff', '#fbbf24'][
      Math.floor(Math.random() * 5)
    ],
  }))
}

export default function BadgePopup({ badges, onDone }: BadgePopupProps) {
  const [idx, setIdx] = useState(0)
  const [particles] = useState(randomParticles)

  const current = badges[idx]

  // Auto-advance after 3 seconds
  useEffect(() => {
    if (!current) return
    const t = setTimeout(() => {
      handleNext()
    }, 3000)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, current?.id])

  const handleNext = () => {
    if (idx < badges.length - 1) {
      setIdx(i => i + 1)
    } else {
      onDone()
    }
  }

  if (!current) return null

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center"
        style={{ background: 'rgba(10, 10, 30, 0.88)' }}
        onClick={handleNext}
      >
        {/* Floating particles */}
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.color,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2.5,
              delay: p.delay,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        ))}

        {/* Card */}
        <motion.div
          key={current.id}
          initial={{ scale: 0.5, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: -20 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          onClick={e => e.stopPropagation()}
          className="relative z-10 bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-4 max-w-sm w-full mx-4"
        >
          {/* Subtitle */}
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--ib-teal)]">
            Achievement Unlocked!
          </p>

          {/* Icon with burst ring */}
          <div className="relative flex items-center justify-center">
            {/* Animated ring */}
            <motion.div
              className="absolute rounded-full border-4 border-yellow-400"
              animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0.2, 0.8] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: 110, height: 110 }}
            />
            <motion.div
              className="absolute rounded-full border-2 border-yellow-200"
              animate={{ scale: [1.1, 1.4, 1.1], opacity: [0.5, 0.1, 0.5] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              style={{ width: 130, height: 130 }}
            />
            <motion.span
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ fontSize: 80, lineHeight: 1, zIndex: 1 }}
              className="select-none"
            >
              {current.icon}
            </motion.span>
          </div>

          {/* Name */}
          <h2 className="text-2xl font-bold text-gray-900 text-center">{current.name}</h2>

          {/* Rarity chip */}
          <span
            className={cn(
              'px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide',
              rarityStyle[current.rarity] ?? rarityStyle.common,
            )}
          >
            {current.rarity}
          </span>

          {/* Description */}
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            {current.description}
          </p>

          {/* Progress & Continue */}
          <div className="w-full flex flex-col items-center gap-2 pt-2">
            <div className="flex gap-1">
              {badges.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all',
                    i <= idx ? 'bg-[var(--ib-teal)]' : 'bg-gray-200',
                  )}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="mt-1 px-6 py-2 bg-[var(--ib-blue)] text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {idx < badges.length - 1 ? 'Next Badge →' : 'Continue'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
