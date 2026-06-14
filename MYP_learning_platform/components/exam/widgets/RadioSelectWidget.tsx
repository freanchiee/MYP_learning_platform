'use client'

import { useState } from 'react'

interface RadioSelectWidgetProps {
  options: string[]
  onAnswer: (answer: string) => void
  initialValue?: string
}

export default function RadioSelectWidget({
  options,
  onAnswer,
  initialValue = '',
}: RadioSelectWidgetProps) {
  const [selected, setSelected] = useState<string>(initialValue)

  function handleSelect(opt: string) {
    setSelected(opt)
    onAnswer(opt)
  }

  return (
    <div className="flex flex-col gap-2 my-2">
      {options.map((opt) => {
        const isSelected = selected === opt
        return (
          <label
            key={opt}
            onClick={() => handleSelect(opt)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border cursor-pointer select-none transition-all
              ${isSelected
                ? 'bg-[var(--ib-teal)]/10 border-[var(--ib-teal)] text-[var(--ib-teal)] font-semibold'
                : 'bg-surface border-line text-ink-muted hover:border-line-strong hover:bg-surface-2'
              }`}
          >
            {/* Custom radio circle */}
            <span
              className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                ${isSelected
                  ? 'border-[var(--ib-teal)] bg-[var(--ib-teal)]'
                  : 'border-line-strong bg-surface'
                }`}
            >
              {isSelected && (
                <span className="w-2 h-2 rounded-full bg-on-accent block" />
              )}
            </span>
            <span className="text-[14px] font-medium">{opt}</span>
          </label>
        )
      })}
    </div>
  )
}
