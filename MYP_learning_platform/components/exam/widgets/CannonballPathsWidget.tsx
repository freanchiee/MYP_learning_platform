'use client'

import { useState } from 'react'

interface CannonballPathsWidgetProps {
  onAnswer: (answer: string) => void
  initialValue?: string
}

const PATHS = ['A', 'B', 'C', 'D'] as const
type PathKey = typeof PATHS[number]

const SPEED_OPTIONS = [
  { label: '0 m s⁻¹', value: '0' },
  { label: '4 700 m s⁻¹', value: '4700' },
  { label: '7 800 m s⁻¹', value: '7800' },
  { label: '14 200 m s⁻¹', value: '14200' },
]

const PATH_DESCRIPTIONS: Record<PathKey, string> = {
  A: 'Cannonball follows a curved path but falls back to Earth',
  B: 'Cannonball achieves low Earth orbit',
  C: 'Cannonball falls straight down',
  D: 'Cannonball escapes Earth\'s gravity',
}

const PATH_COLORS: Record<PathKey, string> = {
  A: 'bg-red-50 border-red-200 text-red-800',
  B: 'bg-orange-50 border-orange-200 text-orange-800',
  C: 'bg-blue-50 border-blue-200 text-blue-800',
  D: 'bg-purple-50 border-purple-200 text-purple-800',
}

const PATH_BADGE_COLORS: Record<PathKey, string> = {
  A: 'bg-red-500',
  B: 'bg-orange-500',
  C: 'bg-blue-500',
  D: 'bg-purple-500',
}

export default function CannonballPathsWidget({
  onAnswer,
  initialValue = '',
}: CannonballPathsWidgetProps) {
  const [selections, setSelections] = useState<Record<PathKey, string>>(() => {
    if (initialValue) {
      try {
        return JSON.parse(initialValue)
      } catch {
        /* ignore */
      }
    }
    return { A: '', B: '', C: '', D: '' }
  })

  function handleChange(path: PathKey, value: string) {
    const next = { ...selections, [path]: value }
    setSelections(next)
    onAnswer(JSON.stringify(next))
  }

  const allSelected = PATHS.every(p => selections[p] !== '')

  return (
    <div className="space-y-3 my-2">
      <p className="text-[12px] text-ink-subtle font-medium uppercase tracking-wide">
        Match each path to its launch speed
      </p>

      <div className="space-y-2">
        {PATHS.map((path) => (
          <div
            key={path}
            className={`flex items-center gap-3 rounded-card border px-3 py-2.5 transition-colors ${
              selections[path] ? PATH_COLORS[path] : 'bg-surface-2 border-line'
            }`}
          >
            {/* Path label badge */}
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold text-white ${PATH_BADGE_COLORS[path]}`}
            >
              {path}
            </span>

            {/* Description */}
            <span className="flex-1 text-[12px] text-ink-muted hidden sm:block">
              {PATH_DESCRIPTIONS[path]}
            </span>

            {/* Dropdown */}
            <select
              value={selections[path]}
              onChange={(e) => handleChange(path, e.target.value)}
              className={`text-[13px] rounded-control border px-2 py-1.5 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all ${
                selections[path]
                  ? 'border-current bg-surface/70'
                  : 'border-line-strong bg-surface text-ink-subtle'
              }`}
            >
              <option value="">Select speed…</option>
              {SPEED_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Completion indicator */}
      {allSelected && (
        <div className="flex items-center gap-1.5 text-[12px] text-[var(--ib-teal)] font-medium pt-1">
          <span className="w-4 h-4 rounded-full bg-[var(--ib-teal)] flex items-center justify-center text-on-accent text-[9px] font-bold flex-shrink-0">
            ✓
          </span>
          All paths assigned — your answer has been recorded.
        </div>
      )}
    </div>
  )
}
