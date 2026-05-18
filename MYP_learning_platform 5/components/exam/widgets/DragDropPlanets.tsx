'use client'

import { useState } from 'react'

interface DragDropPlanetsProps {
  onAnswer: (answer: string) => void
}

interface PlanetSlot {
  name: string
  abbr: string
  color: string
  isBlank?: boolean
  blankId?: number
}

const PLANET_SLOTS: PlanetSlot[] = [
  { name: 'Mercury', abbr: 'Mer', color: '#9ca3af' },
  { name: 'Venus', abbr: 'Ven', color: '#f59e0b' },
  { name: 'Earth', abbr: 'Ear', color: '#3b82f6' },
  { name: 'Mars', abbr: 'Mar', color: '#ef4444' },
  { name: '?', abbr: '?', color: '#d1d5db', isBlank: true, blankId: 1 },
  { name: 'Saturn', abbr: 'Sat', color: '#a78bfa' },
  { name: 'Uranus', abbr: 'Ura', color: '#67e8f9' },
  { name: 'Neptune', abbr: 'Nep', color: '#1d4ed8' },
  { name: '?', abbr: '?', color: '#d1d5db', isBlank: true, blankId: 2 },
]

const CHIPS = ['Jupiter', 'Pluto', 'Ceres', 'Eris', 'Saturn', 'Comet']

function isCorrect(blankId: number, answer: string): boolean {
  if (blankId === 1) return answer === 'Jupiter'
  if (blankId === 2) return answer === 'Pluto' || answer === 'Ceres'
  return false
}

export default function DragDropPlanets({ onAnswer }: DragDropPlanetsProps) {
  const [blank1, setBlank1] = useState<string | null>(null)
  const [blank2, setBlank2] = useState<string | null>(null)
  const [dragging, setDragging] = useState<string | null>(null)
  const [over, setOver] = useState<number | null>(null)

  function notifyParent(b1: string | null, b2: string | null) {
    if (b1 && b2) onAnswer(`${b1}, ${b2}`)
  }

  function handleDragStart(chip: string) {
    setDragging(chip)
  }

  function handleDragOver(e: React.DragEvent, blankId: number) {
    e.preventDefault()
    setOver(blankId)
  }

  function handleDrop(e: React.DragEvent, blankId: number) {
    e.preventDefault()
    setOver(null)
    if (!dragging) return
    if (blankId === 1) {
      setBlank1(dragging)
      notifyParent(dragging, blank2)
    } else {
      setBlank2(dragging)
      notifyParent(blank1, dragging)
    }
    setDragging(null)
  }

  function handleDragLeave() {
    setOver(null)
  }

  const bothCorrect =
    blank1 !== null && blank2 !== null &&
    isCorrect(1, blank1) && isCorrect(2, blank2)

  const usedChips = new Set([blank1, blank2].filter(Boolean) as string[])

  return (
    <div className="space-y-4 py-2">
      {/* Sun + planet row */}
      <div className="overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max px-2 py-3">
          {/* Sun */}
          <div className="flex flex-col items-center gap-1">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
              style={{ background: 'radial-gradient(circle at 35% 35%, #fde68a, #f59e0b, #d97706)' }}
            >
              ☀
            </div>
            <span className="text-[10px] text-gray-500 font-medium">Sun</span>
          </div>

          {/* Arrow */}
          <div className="text-gray-300 text-lg select-none">→</div>

          {PLANET_SLOTS.map((slot, i) => {
            const filledWith = slot.blankId === 1 ? blank1 : slot.blankId === 2 ? blank2 : null
            const correct = filledWith ? isCorrect(slot.blankId!, filledWith) : null
            const isOver = slot.isBlank && over === slot.blankId

            return (
              <div key={i} className="flex flex-col items-center gap-1">
                {slot.isBlank ? (
                  <div
                    onDragOver={e => handleDragOver(e, slot.blankId!)}
                    onDrop={e => handleDrop(e, slot.blankId!)}
                    onDragLeave={handleDragLeave}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                    style={{
                      border: isOver ? '2px solid #3cb563' : '2px dashed #9ca3af',
                      background: isOver ? '#f0fdf4' : '#f9fafb',
                      minWidth: filledWith ? undefined : '40px',
                    }}
                  >
                    {filledWith ? (
                      <span className="text-[9px] font-bold text-center leading-tight px-0.5" style={{ color: correct ? '#166534' : '#991b1b' }}>
                        {filledWith.slice(0, 3)}
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm">?</span>
                    )}
                  </div>
                ) : (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[9px] font-bold text-white shadow-sm"
                    style={{ backgroundColor: slot.color }}
                  >
                    {slot.abbr}
                  </div>
                )}

                {slot.isBlank && filledWith ? (
                  <div className="flex items-center gap-0.5">
                    <span className="text-[9px] text-gray-600 font-medium">{filledWith.slice(0, 5)}</span>
                    <span className="text-xs">{correct ? '✓' : '✗'}</span>
                  </div>
                ) : (
                  <span className="text-[10px] text-gray-500 font-medium">
                    {slot.isBlank ? `Blank ${slot.blankId}` : slot.name}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Draggable chips */}
      <div className="flex flex-wrap gap-2 px-2">
        <span className="text-xs text-gray-500 font-medium self-center">Drag to fill blanks:</span>
        {CHIPS.map(chip => {
          const used = usedChips.has(chip)
          return (
            <div
              key={chip}
              draggable={!used}
              onDragStart={() => handleDragStart(chip)}
              className="px-3 py-1 rounded-full text-xs font-semibold cursor-grab select-none transition-all"
              style={{
                background: used ? '#e5e7eb' : '#dcfce7',
                color: used ? '#9ca3af' : '#166534',
                border: used ? '1px solid #d1d5db' : '1px solid #86efac',
                opacity: used ? 0.5 : 1,
                cursor: used ? 'not-allowed' : 'grab',
              }}
            >
              {chip}
            </div>
          )
        })}
      </div>

      {/* Success message */}
      {bothCorrect && (
        <div className="mx-2 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800 font-medium flex items-center gap-2">
          <span className="text-lg">🎉</span>
          Correct! Jupiter is 5th from the Sun (between Mars and Saturn). Pluto (or Ceres) comes after Neptune.
        </div>
      )}

      {/* Partial wrong feedback */}
      {(blank1 || blank2) && !bothCorrect && (
        <div className="mx-2 rounded-xl bg-amber-50 border border-amber-200 px-4 py-2 text-xs text-amber-700">
          {blank1 && !isCorrect(1, blank1) && <p>Blank 1: "{blank1}" is not correct — the 5th planet from the Sun is the largest planet.</p>}
          {blank2 && !isCorrect(2, blank2) && <p>Blank 2: "{blank2}" is not a recognised object for that position — try Pluto or Ceres.</p>}
        </div>
      )}
    </div>
  )
}
