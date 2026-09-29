'use client'
import { useState } from 'react'
import { useActiveSection } from './useActiveSection'

// A pure icon strip, floating ON TOP of the full-bleed page — no label reserves any layout space, ever.
// A label appears only as a small floating tooltip on hover/focus, positioned absolutely so the rail's own
// footprint never changes width. High-contrast: every diamond gets a solid chip behind it so it reads
// clearly against the page background in every theme, not just the active one.
export interface NavItem { id: string; text: string }

export default function LessonNavRail({ items }: { items: NavItem[] }) {
  const { active, go } = useActiveSection(items)
  const [hovered, setHovered] = useState<number | null>(null)

  if (!items.length) return null

  return (
    <nav
      aria-label="On this page"
      className="fixed z-40 hidden max-h-[80vh] flex-col gap-2 overflow-y-auto lg:flex"
      style={{ left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }}
    >
      {items.map((it, i) => {
        const isActive = i === active
        const isHov = hovered === i
        return (
          <div key={it.id} className="relative">
            <button
              onClick={() => go(it.id)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              aria-current={isActive ? 'true' : undefined}
              aria-label={it.text}
              className="flex items-center justify-center focus:outline-none"
              style={{ width: 26, height: 26 }}
            >
              <span
                aria-hidden
                style={{
                  width: isActive ? 13 : 9,
                  height: isActive ? 13 : 9,
                  transform: 'rotate(45deg)',
                  background: isActive ? 'var(--accent)' : isHov ? 'var(--accent)' : 'var(--surface-elevated)',
                  border: `1.5px solid ${isActive || isHov ? 'var(--accent)' : 'var(--text-subtle)'}`,
                  boxShadow: isActive ? '0 0 10px var(--accent)' : '0 1px 3px rgba(0,0,0,0.25)',
                  transition: 'all 0.15s ease',
                }}
              />
            </button>
            {/* Tooltip: absolutely positioned, no effect on the rail's own layout */}
            <div
              role="tooltip"
              className="pointer-events-none absolute top-1/2 whitespace-nowrap rounded-[var(--radius-control)] px-2.5 py-1.5 text-[11px] font-bold"
              style={{
                left: 'calc(100% + 10px)',
                transform: `translateY(-50%) translateX(${isHov ? '0' : '-6px'})`,
                opacity: isHov ? 1 : 0,
                transition: 'opacity 0.12s ease, transform 0.12s ease',
                background: 'var(--surface-elevated)',
                border: '1px solid var(--accent)',
                color: 'var(--text)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {it.text}
            </div>
          </div>
        )
      })}
    </nav>
  )
}
