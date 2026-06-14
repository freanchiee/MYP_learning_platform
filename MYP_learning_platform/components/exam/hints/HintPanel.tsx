'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, ChevronDown, ChevronUp } from 'lucide-react'
import { HINTS } from '@/data/papers/physics-nov-2023/hints'
import { useExamStore } from '@/store/examStore'
import { cn } from '@/lib/utils'

interface HintPanelProps {
  qId: number
  taskLabel: string
}

export default function HintPanel({ qId, taskLabel }: HintPanelProps) {
  const incrementHints = useExamStore(s => s.incrementHints)
  const [open, setOpen] = useState(false)
  const [revealed, setRevealed] = useState(0)

  // Build the hint key — matches MS key format: 'q{id}_{label}'
  const hintKey = `q${qId}_${taskLabel}`
  const hints = HINTS[hintKey] ?? []

  if (hints.length === 0) return null

  const handleRevealNext = () => {
    if (revealed < hints.length) {
      setRevealed(r => r + 1)
      incrementHints()
    }
  }

  const handleToggle = () => {
    setOpen(o => !o)
  }

  return (
    <div className="mt-2">
      {/* Toggle button */}
      <button
        onClick={handleToggle}
        className={cn(
          'flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all hover:brightness-95',
        )}
        style={{
          borderColor: 'var(--warning)',
          color: 'var(--warning-fg)',
          background: 'var(--warning-surface)',
        }}
      >
        <Lightbulb size={13} style={{ color: 'var(--warning)' }} />
        {open ? 'Hide hints' : '💡 Show hint'}
        {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        {revealed > 0 && (
          <span
            className="ml-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold"
            style={{ background: 'var(--warning)', color: 'var(--text-on-accent)' }}
          >
            {revealed}/{hints.length}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="hint-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div
              className="mt-2 border rounded-xl p-3 space-y-2"
              style={{ borderColor: 'var(--warning)', background: 'var(--warning-surface)' }}
            >
              {/* Revealed hints */}
              {Array.from({ length: revealed }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex gap-2 text-sm"
                  style={{ color: 'var(--warning-fg)' }}
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5"
                    style={{ background: 'var(--warning)', color: 'var(--text-on-accent)' }}
                  >
                    {i + 1}
                  </span>
                  <span>{hints[i]}</span>
                </motion.div>
              ))}

              {/* Reveal next button */}
              {revealed < hints.length ? (
                <button
                  onClick={handleRevealNext}
                  className="flex items-center gap-1.5 text-xs font-medium transition-colors mt-1 border border-dashed rounded-lg px-3 py-1.5 w-full justify-center hover:brightness-95"
                  style={{ color: 'var(--warning-fg)', borderColor: 'var(--warning)', background: 'var(--warning-surface)' }}
                >
                  <Lightbulb size={12} />
                  Reveal hint {revealed + 1} of {hints.length}
                </button>
              ) : (
                <p className="text-[11px] text-center pt-1" style={{ color: 'var(--text-muted)' }}>
                  All hints revealed. Try applying them to your answer!
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
