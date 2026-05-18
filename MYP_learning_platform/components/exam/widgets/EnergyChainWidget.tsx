'use client'

import { useState } from 'react'

interface EnergyChainWidgetProps {
  onAnswer: (answer: string) => void
  initialValue?: string
  /** The chain terms, with null meaning the blank slot */
  chain?: (string | null)[]
  /** Options to drag/click into the blank */
  options?: string[]
}

const DEFAULT_CHAIN: (string | null)[] = ['Heat', null, 'Kinetic']
const DEFAULT_OPTIONS = ['Gravitational', 'Electrical', 'Elastic', 'Light']

const TERM_COLORS: Record<string, string> = {
  Heat:         'bg-orange-100 border-orange-300 text-orange-800',
  Kinetic:      'bg-blue-100 border-blue-300 text-blue-800',
  Electrical:   'bg-yellow-100 border-yellow-300 text-yellow-800',
  Gravitational:'bg-green-100 border-green-300 text-green-800',
  Elastic:      'bg-purple-100 border-purple-300 text-purple-800',
  Light:        'bg-pink-100 border-pink-300 text-pink-800',
}

export default function EnergyChainWidget({
  onAnswer,
  initialValue = '',
  chain = DEFAULT_CHAIN,
  options = DEFAULT_OPTIONS,
}: EnergyChainWidgetProps) {
  const [filled, setFilled] = useState<string>(initialValue)
  const [dragging, setDragging] = useState<string | null>(null)

  function select(opt: string) {
    // Toggle off if already selected
    const next = filled === opt ? '' : opt
    setFilled(next)
    onAnswer(next)
  }

  function handleDragStart(opt: string) {
    setDragging(opt)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    if (dragging) {
      setFilled(dragging)
      onAnswer(dragging)
      setDragging(null)
    }
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault()
  }

  function clearSlot() {
    setFilled('')
    onAnswer('')
  }

  return (
    <div className="space-y-4 my-2">
      {/* Energy chain display */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {chain.map((term, i) => {
          const isBlank = term === null
          const isLast = i === chain.length - 1

          return (
            <div key={i} className="flex items-center gap-2">
              {isBlank ? (
                /* Drop target */
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={filled ? clearSlot : undefined}
                  className={`min-w-[110px] h-10 rounded-lg border-2 border-dashed flex items-center justify-center text-[13px] font-semibold transition-all cursor-pointer
                    ${filled
                      ? `${TERM_COLORS[filled] ?? 'bg-teal-100 border-teal-300 text-teal-800'} border-solid`
                      : 'border-gray-300 bg-gray-50 text-gray-400 hover:border-[var(--ib-teal)] hover:bg-teal-50'
                    }`}
                  title={filled ? 'Click to clear' : 'Drag or click an option below'}
                >
                  {filled || '?'}
                </div>
              ) : (
                <div className={`px-3 h-10 rounded-lg border flex items-center text-[13px] font-semibold ${TERM_COLORS[term] ?? 'bg-gray-100 border-gray-300 text-gray-700'}`}>
                  {term}
                </div>
              )}

              {/* Arrow between terms */}
              {!isLast && (
                <span className="text-gray-400 font-bold text-lg select-none">→</span>
              )}
            </div>
          )
        })}
      </div>

      {/* Option bank */}
      <div className="flex flex-wrap gap-2 justify-center">
        {options.map((opt) => {
          const isSelected = filled === opt
          return (
            <div
              key={opt}
              draggable
              onDragStart={() => handleDragStart(opt)}
              onClick={() => select(opt)}
              className={`px-3 py-1.5 rounded-lg border text-[13px] font-medium cursor-pointer select-none transition-all
                ${isSelected
                  ? 'opacity-40 cursor-not-allowed scale-95'
                  : `${TERM_COLORS[opt] ?? 'bg-gray-100 border-gray-300 text-gray-700'} hover:scale-105 hover:shadow-sm active:scale-95`
                }`}
              title={isSelected ? 'Already placed' : `Click or drag to place "${opt}"`}
            >
              {opt}
            </div>
          )
        })}
      </div>

      {filled && (
        <p className="text-center text-[11px] text-gray-400">
          Click the filled box to clear, or click another option to swap.
        </p>
      )}
    </div>
  )
}
