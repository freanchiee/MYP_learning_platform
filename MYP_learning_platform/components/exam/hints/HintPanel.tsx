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
          'flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all',
          'border-amber-400 text-amber-700 bg-amber-50 hover:bg-amber-100',
        )}
      >
        <Lightbulb size={13} className="text-amber-500" />
        {open ? 'Hide hints' : '💡 Show hint'}
        {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        {revealed > 0 && (
          <span className="ml-1 bg-amber-200 text-amber-800 rounded-full px-1.5 py-0.5 text-[10px] font-bold">
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
            <div className="mt-2 border border-amber-200 bg-amber-50 rounded-xl p-3 space-y-2">
              {/* Revealed hints */}
              {Array.from({ length: revealed }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex gap-2 text-sm text-amber-900"
                >
                  <span className="flex-shrink-0 w-5 h-5 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span>{hints[i]}</span>
                </motion.div>
              ))}

              {/* Reveal next button */}
              {revealed < hints.length ? (
                <button
                  onClick={handleRevealNext}
                  className="flex items-center gap-1.5 text-xs text-amber-700 font-medium hover:text-amber-900 transition-colors mt-1 border border-dashed border-amber-300 rounded-lg px-3 py-1.5 w-full justify-center hover:bg-amber-100"
                >
                  <Lightbulb size={12} />
                  Reveal hint {revealed + 1} of {hints.length}
                </button>
              ) : (
                <p className="text-[11px] text-amber-600 text-center pt-1">
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
