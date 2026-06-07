'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Props {
  options: string[]
  savedAnswer?: string          // "0,2" — sorted comma-joined indices
  onAnswer: (ans: string) => void
}

export default function CheckboxSelectWidget({ options, savedAnswer, onAnswer }: Props) {
  const [selected, setSelected] = useState<Set<number>>(() => {
    if (!savedAnswer) return new Set()
    return new Set(savedAnswer.split(',').map(Number).filter((n) => !isNaN(n)))
  })

  // Sync if parent resets answer
  useEffect(() => {
    if (!savedAnswer) { setSelected(new Set()); return }
    setSelected(new Set(savedAnswer.split(',').map(Number).filter((n) => !isNaN(n))))
  }, [savedAnswer])

  const toggle = useCallback((idx: number) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      const sorted = Array.from(next).sort((a, b) => a - b)
      onAnswer(sorted.join(','))
      return next
    })
  }, [onAnswer])

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold mb-3" style={{ color: '#547ca4' }}>
        Select all correct answers.
      </p>
      {options.map((opt, idx) => {
        const isChecked = selected.has(idx)
        return (
          <motion.button
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, delay: idx * 0.05 }}
            onClick={() => toggle(idx)}
            className="w-full flex items-start gap-3 px-4 py-3 rounded-lg text-left transition-all"
            style={{
              background: isChecked ? 'rgba(31,54,116,0.08)' : '#fff',
              border: `2px solid ${isChecked ? '#1f3674' : 'rgba(31,54,116,0.15)'}`,
            }}
          >
            {/* Checkbox */}
            <div
              className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center mt-0.5 transition-all"
              style={{
                background: isChecked ? '#1f3674' : '#fff',
                border: `2px solid ${isChecked ? '#1f3674' : 'rgba(31,54,116,0.3)'}`,
              }}
            >
              {isChecked && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  width="10" height="8" viewBox="0 0 10 8" fill="none"
                >
                  <path d="M1 4L4 7L9 1" stroke="#adf1c4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              )}
            </div>
            {/* Label */}
            <span
              className="text-sm font-medium leading-relaxed"
              style={{ color: isChecked ? '#1f3674' : '#374151' }}
              dangerouslySetInnerHTML={{ __html: opt }}
            />
          </motion.button>
        )
      })}
      {selected.size > 0 && (
        <p className="text-xs pt-1" style={{ color: 'rgba(31,54,116,0.45)' }}>
          {selected.size} option{selected.size !== 1 ? 's' : ''} selected
        </p>
      )}
    </div>
  )
}
