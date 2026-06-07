'use client'

/**
 * InlineDropdownSelect — Generic "select a value for each item" widget
 *
 * Renders a row of labelled <select> dropdowns, one per item.
 * Use whenever a question asks students to pick a value for each of N items.
 *
 * Pattern for future questions:
 *   widget: 'inline_dropdown_select'
 *   widgetItems:   ['Electron', 'Proton', 'Neutron']     ← the row labels
 *   widgetOptions: ['+1', '0', '-1']                     ← shared dropdown choices
 *
 * Answer stored as JSON: { "Electron": "-1", "Proton": "+1", "Neutron": "0" }
 *
 * Examples of future questions that fit this pattern:
 *   - "Select the state of each substance at room temperature"
 *   - "Match each material to its magnetic property"
 *   - "Identify whether each process is endothermic or exothermic"
 */

import { useState } from 'react'

interface InlineDropdownSelectProps {
  items:        string[]          // row labels (widgetItems)
  options:      string[]          // dropdown choices (widgetOptions)
  onAnswer:     (answer: string) => void
  initialValue?: string
}

export default function InlineDropdownSelect({
  items,
  options,
  onAnswer,
  initialValue = '',
}: InlineDropdownSelectProps) {
  // Parse stored JSON → { item: selectedOption }
  const parseInitial = (): Record<string, string> => {
    try {
      const p = JSON.parse(initialValue)
      if (typeof p === 'object' && p !== null) return p
    } catch {}
    return {}
  }

  const [selections, setSelections] = useState<Record<string, string>>(parseInitial)

  function handleChange(item: string, value: string) {
    const next = { ...selections, [item]: value }
    setSelections(next)
    // Only emit answer once all items have a real selection
    onAnswer(JSON.stringify(next))
  }

  const allSelected = items.every(it => selections[it] && selections[it] !== '')

  return (
    <div className="my-3">
      {/* Inline row — wraps gracefully on narrow screens */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {items.map(item => {
          const val = selections[item] ?? ''
          const isSet = val !== ''

          return (
            <label
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-gray-700"
            >
              <span className="shrink-0">{item}:</span>
              <select
                value={val}
                onChange={e => handleChange(item, e.target.value)}
                className={`
                  rounded-lg border px-3 py-1.5 text-sm font-medium
                  transition-colors cursor-pointer outline-none
                  focus:ring-2 focus:ring-[var(--ib-teal)] focus:border-[var(--ib-teal)]
                  ${isSet
                    ? 'border-[var(--ib-teal)] bg-[var(--ib-teal)]/5 text-[var(--ib-teal)]'
                    : 'border-gray-300 bg-white text-gray-500 hover:border-gray-400'
                  }
                `}
              >
                <option value="">Select…</option>
                {options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </label>
          )
        })}
      </div>

      {/* Completion indicator */}
      {allSelected && (
        <p className="mt-2 text-xs font-semibold text-green-600 flex items-center gap-1">
          <span>✓</span>
          <span>All selections complete</span>
        </p>
      )}
    </div>
  )
}
