'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  items: string[]             // draggable labels (left)
  targets: string[]           // drop zone labels (right)
  savedAnswer?: string        // JSON: { "Mitochondria": "Energy production", ... }
  onAnswer: (ans: string) => void
}

export default function MatchDragDropWidget({ items, targets, savedAnswer, onAnswer }: Props) {
  const [matches, setMatches] = useState<Record<string, string>>(() => {
    try { return savedAnswer ? JSON.parse(savedAnswer) : {} }
    catch { return {} }
  })
  const [dragging, setDragging] = useState<string | null>(null)
  const [hovering, setHovering] = useState<string | null>(null)

  useEffect(() => {
    try { setMatches(savedAnswer ? JSON.parse(savedAnswer) : {}) }
    catch { setMatches({}) }
  }, [savedAnswer])

  const matchedItems = new Set(Object.keys(matches))
  const usedTargets = new Set(Object.values(matches))

  const commit = (updated: Record<string, string>) => {
    setMatches(updated)
    onAnswer(JSON.stringify(updated))
  }

  const handleDrop = (target: string) => {
    if (!dragging) return
    // Remove previous mapping for this target
    const existing = Object.entries(matches).find(([, v]) => v === target)?.[0]
    const next = { ...matches }
    if (existing) delete next[existing]
    next[dragging] = target
    commit(next)
    setDragging(null)
    setHovering(null)
  }

  const removeMatch = (item: string) => {
    const next = { ...matches }
    delete next[item]
    commit(next)
  }

  return (
    <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(31,54,116,0.12)' }}>
      <div className="grid grid-cols-2">
        {/* ── Left: draggable items ── */}
        <div className="p-4" style={{ background: '#f5edcc', borderRight: '1px solid rgba(31,54,116,0.1)' }}>
          <p className="text-[9px] font-black tracking-[0.2em] mb-3" style={{ color: 'rgba(31,54,116,0.4)' }}>
            DRAG ITEMS
          </p>
          <div className="space-y-2">
            {items.map((item) => {
              const isMatched = matchedItems.has(item)
              const isDraggingThis = dragging === item
              return (
                <motion.div
                  key={item}
                  layout
                  draggable
                  onDragStart={() => setDragging(item)}
                  onDragEnd={() => { setDragging(null); setHovering(null) }}
                  className="px-3 py-2 rounded text-sm font-semibold cursor-grab active:cursor-grabbing select-none transition-all"
                  style={{
                    background: isMatched ? 'rgba(31,54,116,0.06)' : '#fff',
                    border: `2px solid ${isMatched ? 'rgba(31,54,116,0.15)' : '#1f3674'}`,
                    color: isMatched ? 'rgba(31,54,116,0.35)' : '#1f3674',
                    opacity: isDraggingThis ? 0.4 : 1,
                    textDecoration: isMatched ? 'line-through' : 'none',
                  }}
                  whileHover={{ scale: isMatched ? 1 : 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {item}
                  {isMatched && (
                    <span className="ml-2 text-[10px]" style={{ color: '#adf1c4', background: '#1f3674', padding: '1px 5px', borderRadius: 3 }}>
                      ✓
                    </span>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── Right: drop targets ── */}
        <div className="p-4" style={{ background: '#fff' }}>
          <p className="text-[9px] font-black tracking-[0.2em] mb-3" style={{ color: 'rgba(31,54,116,0.4)' }}>
            DROP HERE
          </p>
          <div className="space-y-2">
            {targets.map((target) => {
              const occupant = Object.entries(matches).find(([, v]) => v === target)?.[0]
              const isHovered = hovering === target && dragging !== null
              return (
                <div
                  key={target}
                  onDragOver={(e) => { e.preventDefault(); setHovering(target) }}
                  onDragLeave={() => setHovering(null)}
                  onDrop={() => handleDrop(target)}
                  className="min-h-[42px] px-3 py-2 rounded text-sm transition-all"
                  style={{
                    border: `2px dashed ${isHovered ? '#547ca4' : occupant ? '#1f3674' : 'rgba(31,54,116,0.2)'}`,
                    background: isHovered ? 'rgba(84,124,164,0.06)' : occupant ? 'rgba(31,54,116,0.04)' : 'transparent',
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium" style={{ color: '#1f3674' }}>{target}</span>
                    <AnimatePresence mode="wait">
                      {occupant ? (
                        <motion.div
                          key={occupant}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center gap-1"
                        >
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded"
                            style={{ background: '#1f3674', color: '#adf1c4' }}
                          >
                            {occupant}
                          </span>
                          <button
                            onClick={() => removeMatch(occupant)}
                            className="text-xs font-black transition-opacity hover:opacity-70"
                            style={{ color: '#c3282d' }}
                            title="Remove match"
                          >
                            ✕
                          </button>
                        </motion.div>
                      ) : (
                        <motion.span
                          key="empty"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs"
                          style={{ color: 'rgba(31,54,116,0.25)' }}
                        >
                          {isHovered ? 'Drop here' : '—'}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="px-4 py-2 flex items-center justify-between text-xs"
        style={{ background: 'rgba(31,54,116,0.04)', borderTop: '1px solid rgba(31,54,116,0.08)' }}
      >
        <span style={{ color: 'rgba(31,54,116,0.5)' }}>
          {matchedItems.size} of {items.length} matched
        </span>
        {matchedItems.size > 0 && (
          <button
            onClick={() => commit({})}
            className="text-xs font-semibold transition-opacity hover:opacity-70"
            style={{ color: '#c3282d' }}
          >
            Reset all
          </button>
        )}
      </div>
    </div>
  )
}
