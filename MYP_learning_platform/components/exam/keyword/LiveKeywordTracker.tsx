'use client'

import { useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain } from 'lucide-react'
import { useExamStore } from '@/store/examStore'
import { getConceptEntry } from '@/data/concepts/registry'

interface LiveKeywordTrackerProps {
  qId: number
  taskLabel: string
  text: string
}

function normalise(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s/=.²³°]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function conceptHit(concept: string, normText: string): boolean {
  const normConcept = normalise(concept)
  if (normText.includes(normConcept)) return true
  const words = normConcept.split(' ')
  if (words.length === 1) return normText.includes(normConcept)
  return words.every(w => w.length > 2 && normText.includes(w))
}

export default function LiveKeywordTracker({ qId, taskLabel, text }: LiveKeywordTrackerProps) {
  const paperId = useExamStore(s => s.paperId)

  const entry = getConceptEntry(paperId, `q${qId}_${taskLabel}`)
  const prevHitsRef = useRef<Set<number>>(new Set())

  const hitIndices = useMemo(() => {
    if (!entry) return new Set<number>()
    const normText = normalise(text)
    const set = new Set<number>()
    entry.keyConcepts.forEach((concept, idx) => {
      if (conceptHit(concept, normText)) set.add(idx)
    })
    return set
  }, [entry, text])

  const newlyHit = useMemo(() => {
    const set = new Set<number>()
    hitIndices.forEach(idx => { if (!prevHitsRef.current.has(idx)) set.add(idx) })
    prevHitsRef.current = new Set(hitIndices)
    return set
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Array.from(hitIndices).join(',')])

  if (!entry || entry.keyConcepts.length === 0) return null

  const hitCount = hitIndices.size
  const total = entry.keyConcepts.length

  // Hidden until the student earns their first keyword hit
  if (hitCount === 0) return null

  const pct = Math.round((hitCount / total) * 100)

  return (
    <div className="mt-2 border border-gray-200 bg-gray-50 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-white border-b border-gray-100">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
          <Brain size={13} className="text-[var(--ib-teal)]" />
          Concept Tracker
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-gray-500 font-medium">
            {hitCount}/{total} concepts
          </span>
          <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-[var(--ib-teal)]"
              animate={{ width: `${pct}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            />
          </div>
          <span
            className={`text-[11px] font-bold ${
              pct >= 80 ? 'text-[var(--ib-green)]' : pct >= 50 ? 'text-[var(--ib-teal)]' : 'text-gray-400'
            }`}
          >
            {pct}%
          </span>
        </div>
      </div>

      {/* Hit chips only — no next-target or locked previews */}
      <div
        className="flex flex-wrap gap-1.5 p-2.5 max-h-[120px] overflow-y-auto items-center"
        style={{ scrollbarWidth: 'thin' }}
      >
        <AnimatePresence mode="popLayout">
          {entry.keyConcepts.map((concept, idx) => {
            if (!hitIndices.has(idx)) return null
            return (
              <motion.span
                key={`hit-${idx}`}
                layout
                initial={newlyHit.has(idx) ? { scale: 0.4, opacity: 0 } : false}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-green-100 text-green-800 border border-green-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                {concept}
              </motion.span>
            )
          })}
        </AnimatePresence>

        {hitCount === total && (
          <motion.span
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-green-500 text-white ml-1"
          >
            ✓ All concepts covered!
          </motion.span>
        )}
      </div>
    </div>
  )
}
