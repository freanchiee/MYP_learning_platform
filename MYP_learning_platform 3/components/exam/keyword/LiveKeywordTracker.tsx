'use client'

import { useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain } from 'lucide-react'
import { CONCEPTS_PUBLIC } from '@/data/papers/physics-nov-2023/conceptsPublic'

interface LiveKeywordTrackerProps {
  qId: number
  taskLabel: string
  text: string
  markSchemeKey?: string
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
  // Try direct includes first
  if (normText.includes(normConcept)) return true
  // Also check each word of the concept individually if concept is a single word
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
  // Build key matching CONCEPTS_PUBLIC format: 'q{id}_{label}'
  const conceptKey = `q${qId}_${taskLabel}`
  const entry = CONCEPTS_PUBLIC[conceptKey]

  // Track which concepts were previously hit for new-hit animation
  const prevHitsRef = useRef<Set<string>>(new Set())

  const { hits, misses } = useMemo(() => {
    if (!entry) return { hits: [], misses: [] }
    const normText = normalise(text)
    const hits: string[] = []
    const misses: string[] = []
    for (const concept of entry.keyConcepts) {
      if (conceptHit(concept, normText)) {
        hits.push(concept)
      } else {
        misses.push(concept)
      }
    }
    return { hits, misses }
  }, [entry, text])

  // Determine newly detected (for animation)
  const newlyHit = useMemo(() => {
    const set = new Set<string>()
    for (const h of hits) {
      if (!prevHitsRef.current.has(h)) set.add(h)
    }
    // Update ref
    prevHitsRef.current = new Set(hits)
    return set
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hits.join(',')])

  if (!entry || entry.keyConcepts.length === 0) return null

  const total = entry.keyConcepts.length
  const hitCount = hits.length
  const pct = total > 0 ? Math.round((hitCount / total) * 100) : 0

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

      {/* Chips */}
      <div
        className="flex flex-wrap gap-1.5 p-2.5 max-h-[120px] overflow-y-auto"
        style={{ scrollbarWidth: 'thin' }}
      >
        <AnimatePresence mode="popLayout">
          {hits.map(concept => (
            <motion.span
              key={concept}
              layout
              initial={newlyHit.has(concept) ? { scale: 0.4, opacity: 0 } : false}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-green-100 text-green-800 border border-green-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              {concept}
            </motion.span>
          ))}
          {misses.map(concept => (
            <motion.span
              key={concept}
              layout
              initial={false}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-gray-100 text-gray-500 border border-gray-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
              {concept}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
