'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Organism {
  id: string
  name: string
  emoji: string
  level: 'producer' | 'primary' | 'secondary' | 'tertiary' | 'decomposer'
}

interface Arrow {
  from: string
  to: string
}

const ORGANISMS: Organism[] = [
  { id: 'grass', name: 'Grass', emoji: '🌿', level: 'producer' },
  { id: 'oak', name: 'Oak Tree', emoji: '🌳', level: 'producer' },
  { id: 'algae', name: 'Algae', emoji: '🟢', level: 'producer' },
  { id: 'rabbit', name: 'Rabbit', emoji: '🐰', level: 'primary' },
  { id: 'deer', name: 'Deer', emoji: '🦌', level: 'primary' },
  { id: 'fish', name: 'Small Fish', emoji: '🐟', level: 'primary' },
  { id: 'fox', name: 'Fox', emoji: '🦊', level: 'secondary' },
  { id: 'snake', name: 'Snake', emoji: '🐍', level: 'secondary' },
  { id: 'eagle', name: 'Eagle', emoji: '🦅', level: 'tertiary' },
  { id: 'fungi', name: 'Fungi', emoji: '🍄', level: 'decomposer' },
]

const LEVEL_COLORS: Record<string, string> = {
  producer: 'rgba(173,241,196,0.25)',
  primary: 'rgba(84,124,164,0.12)',
  secondary: 'rgba(39,78,104,0.12)',
  tertiary: 'rgba(31,54,116,0.12)',
  decomposer: 'rgba(195,40,45,0.10)',
}
const LEVEL_BORDER: Record<string, string> = {
  producer: '#adf1c4',
  primary: '#547ca4',
  secondary: '#274e68',
  tertiary: '#1f3674',
  decomposer: '#c3282d',
}
const LEVEL_LABELS: Record<string, string> = {
  producer: 'Producers',
  primary: 'Primary Consumers',
  secondary: 'Secondary Consumers',
  tertiary: 'Tertiary Consumers',
  decomposer: 'Decomposers',
}

export default function FoodWebDrag() {
  const [webOrgs, setWebOrgs] = useState<string[]>([]) // ids in the web
  const [arrows, setArrows] = useState<Arrow[]>([])
  const [draggingFrom, setDraggingFrom] = useState<string | null>(null)
  const [hovering, setHovering] = useState<string | null>(null)
  const [removed, setRemoved] = useState<string[]>([]) // removed from bank
  const containerRef = useRef<HTMLDivElement>(null)

  const orgById = (id: string) => ORGANISMS.find(o => o.id === id)!

  const addToWeb = useCallback((id: string) => {
    setWebOrgs(prev => prev.includes(id) ? prev : [...prev, id])
    setRemoved(prev => prev.includes(id) ? prev : [...prev, id])
  }, [])

  const removeFromWeb = useCallback((id: string) => {
    setWebOrgs(prev => prev.filter(x => x !== id))
    setArrows(prev => prev.filter(a => a.from !== id && a.to !== id))
    setRemoved(prev => prev.filter(x => x !== id))
  }, [])

  const startArrow = (id: string) => setDraggingFrom(id)

  const completeArrow = (toId: string) => {
    if (!draggingFrom || draggingFrom === toId) { setDraggingFrom(null); return }
    setArrows(prev => {
      const exists = prev.some(a => a.from === draggingFrom && a.to === toId)
      if (exists) return prev
      return [...prev, { from: draggingFrom, to: toId }]
    })
    setDraggingFrom(null)
  }

  const removeArrow = (from: string, to: string) => {
    setArrows(prev => prev.filter(a => !(a.from === from && a.to === to)))
  }

  const levels = ['producer', 'primary', 'secondary', 'tertiary', 'decomposer'] as const
  const webByLevel = levels.map(l => webOrgs.filter(id => orgById(id).level === l))

  return (
    <div className="space-y-3 select-none" ref={containerRef}>
      {/* Organism bank */}
      <div className="p-3 rounded-xl" style={{ background: 'rgba(31,54,116,0.04)', border: '1px solid rgba(31,54,116,0.1)' }}>
        <p className="text-xs font-bold mb-2" style={{ color: '#1f3674' }}>Organism Bank — drag to web or click +</p>
        <div className="flex flex-wrap gap-2">
          {ORGANISMS.filter(o => !removed.includes(o.id)).map(org => (
            <motion.button
              key={org.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={() => addToWeb(org.id)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
              style={{
                background: LEVEL_COLORS[org.level],
                border: `1.5px solid ${LEVEL_BORDER[org.level]}`,
                color: '#274e68',
              }}
            >
              <span>{org.emoji}</span>
              <span>{org.name}</span>
              <span className="text-[10px] font-bold" style={{ color: LEVEL_BORDER[org.level] }}>+</span>
            </motion.button>
          ))}
          {removed.length === ORGANISMS.length && (
            <span className="text-xs text-gray-400 italic">All organisms placed</span>
          )}
        </div>
      </div>

      {/* Food Web Canvas */}
      <div className="p-3 rounded-xl relative" style={{ background: '#fafaf7', border: '1.5px solid rgba(31,54,116,0.12)', minHeight: 260 }}>
        <p className="text-xs font-bold mb-3" style={{ color: '#1f3674' }}>
          Food Web — {draggingFrom ? `Drawing arrow from ${orgById(draggingFrom).name}…` : 'Click organism to draw energy arrow'}
        </p>

        {/* Arrows (rendered as simple list) */}
        {arrows.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {arrows.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                style={{ background: 'rgba(31,54,116,0.08)', color: '#274e68', border: '1px solid rgba(31,54,116,0.15)' }}
              >
                <span>{orgById(a.from).emoji} {orgById(a.from).name}</span>
                <span style={{ color: '#c3282d' }}>→</span>
                <span>{orgById(a.to).emoji} {orgById(a.to).name}</span>
                <button
                  onClick={() => removeArrow(a.from, a.to)}
                  className="ml-1 text-red-400 hover:text-red-600 font-bold"
                >✕</button>
              </div>
            ))}
          </div>
        )}

        {/* Trophic levels */}
        {levels.map((level, li) => {
          const orgs = webByLevel[li]
          if (orgs.length === 0 && webOrgs.length === 0) return null
          return (
            <div key={level} className="mb-2">
              <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: LEVEL_BORDER[level] }}>
                {LEVEL_LABELS[level]}
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {orgs.map(id => {
                  const org = orgById(id)
                  const isSource = draggingFrom === id
                  const isTarget = hovering === id && draggingFrom && draggingFrom !== id
                  return (
                    <motion.div
                      key={id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="relative flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all"
                      style={{
                        background: isSource ? '#1f3674' : isTarget ? 'rgba(195,40,45,0.12)' : LEVEL_COLORS[level],
                        border: `2px solid ${isSource ? '#1f3674' : isTarget ? '#c3282d' : LEVEL_BORDER[level]}`,
                        color: isSource ? '#adf1c4' : '#274e68',
                      }}
                      onClick={() => {
                        if (!draggingFrom) startArrow(id)
                        else completeArrow(id)
                      }}
                      onMouseEnter={() => setHovering(id)}
                      onMouseLeave={() => setHovering(null)}
                    >
                      <span>{org.emoji}</span>
                      <span>{org.name}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); removeFromWeb(id) }}
                        className="ml-1 text-[9px] opacity-40 hover:opacity-100"
                      >✕</button>
                    </motion.div>
                  )
                })}
                {orgs.length === 0 && (
                  <span className="text-[10px] italic text-gray-300">empty</span>
                )}
              </div>
            </div>
          )
        })}

        {webOrgs.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xs text-gray-400 italic">Add organisms from the bank above</p>
          </div>
        )}

        {draggingFrom && (
          <button
            onClick={() => setDraggingFrom(null)}
            className="absolute top-2 right-2 text-xs px-2 py-1 rounded"
            style={{ background: 'rgba(195,40,45,0.12)', color: '#c3282d' }}
          >
            Cancel
          </button>
        )}
      </div>

      {/* Summary */}
      {arrows.length > 0 && (
        <div className="px-3 py-2 rounded-lg text-xs" style={{ background: 'rgba(173,241,196,0.15)', border: '1px solid rgba(173,241,196,0.3)', color: '#274e68' }}>
          <span className="font-bold">{arrows.length} energy flow{arrows.length !== 1 ? 's' : ''}</span> drawn.
          Arrows show direction of energy transfer (prey → predator / plant → herbivore).
        </div>
      )}
    </div>
  )
}
