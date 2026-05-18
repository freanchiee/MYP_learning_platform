'use client'

import { useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Lock } from 'lucide-react'
import { useExamStore } from '@/store/examStore'
import { getConceptEntry } from '@/data/concepts/registry'

interface LiveKeywordTrackerProps {
  qId: number
  taskLabel: string
  text: string
}

/** Normalise text for matching: lowercase, strip punctuation, collapse spaces */
function normalise(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s/=.²³°]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Check if a concept phrase appears anywhere in the normalised student text */
function conceptHit(concept: string, normText: string): boolean {
  const normConcept = normalise(concept)
  if (normText.includes(normConcept)) return true
  const words = normConcept.split(' ')
  if (words.length === 1) return normText.includes(normConcept)
  // Multi-word: require all words to appear somewhere (order-independent fallback)
  return words.every(w => w.length > 2 && normText.includes(w))
}

export default function LiveKeywordTracker({
  qId,
  taskLabel,
  text,
}: LiveKeywordTrackerProps) {
  const paperId = useExamStore(s => s.paperId)

  const conceptKey = `q${qId}_${taskLabel}`
  const entry = getConceptEntry(paperId, conceptKey)

  // Track previous hits for new-hit pop animation
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

  // Determine newly hit indices for pop animation
  const newlyHit = useMemo(() => {
    const set = new Set<number>()
    hitIndices.forEach(idx => {
      if (!prevHitsRef.current.has(idx)) set.add(idx)
    })
    prevHitsRef.current = new Set(hitIndices)
    return set
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Array.from(hitIndices).join(',')])

  if (!entry || entry.keyConcepts.length === 0) return null

  const total = entry.keyConcepts.length
  const hitCount = hitIndices.size
  const pct = total > 0 ? Math.round((hitCount / total) * 100) : 0

  /**
   * Sequential reveal logic:
   * - Show all concepts that have been HIT (green)
   * - Show the next un-hit concept as the current TARGET (grey outline)
   * - Everything beyond that is LOCKED (shown as a count)
   *
   * "Next target" = the first index not yet hit.
   */
  const nextTargetIdx = entry.keyConcepts.findIndex((_, idx) => !hitIndices.has(idx))
  const lockedCount = nextTargetIdx === -1
    ? 0
    : total - nextTargetIdx - 1  // how many after the next target

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
              pct >= 80
                ? 'text-[var(--ib-green)]'
                : pct >= 50
                ? 'text-[var(--ib-teal)]'
                : 'text-gray-400'
            }`}
          >
            {pct}%
          </span>
        </div>
      </div>

      {/* Chips — sequential reveal */}
      <div
        className="flex flex-wrap gap-1.5 p-2.5 max-h-[120px] overflow-y-auto items-center"
        style={{ scrollbarWidth: 'thin' }}
      >
        <AnimatePresence mode="popLayout">
          {entry.keyConcepts.map((concept, idx) => {
            const isHit = hitIndices.has(idx)
            const isNextTarget = idx === nextTargetIdx
            const isLocked = !isHit && !isNextTarget

            if (isLocked) return null  // hidden — counted in the "locked" badge below

            if (isHit) {
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
            }

            // Next target chip — show the concept so student knows what to aim for
            return (
              <motion.span
                key={`target-${idx}`}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200 border-dashed"
                title="Next concept to cover"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {concept}
              </motion.span>
            )
          })}
        </AnimatePresence>

        {/* Locked badge */}
        {lockedCount > 0 && (
          <motion.span
            layout
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 text-gray-400 border border-gray-200"
            title={`${lockedCount} more concept${lockedCount !== 1 ? 's' : ''} to unlock`}
          >
            <Lock size={9} className="flex-shrink-0" />
            +{lockedCount} more
          </motion.span>
        )}

        {/* All done state */}
        {hitCount === total && total > 0 && (
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
