'use client'
import { useState } from 'react'
import { useActiveSection } from './useActiveSection'

// The site's diamond-rail pattern (Design hub, teacher hub, class workspace), reused here to jump between
// a lesson's own sections — the same role the old right-hand "On this page" list played, just fixed on the
// left so the page itself can go full-bleed instead of living in a 3-column grid. Desktop only; see
// LessonNavPills for the phone/tablet equivalent, rendered inline in the content column.
export interface NavItem { id: string; text: string }

export default function LessonNavRail({ items }: { items: NavItem[] }) {
  const { active, go } = useActiveSection(items)
  const [hovered, setHovered] = useState<number | null>(null)

  if (!items.length) return null

  return (
    <nav
      aria-label="On this page"
      className="fixed z-40 hidden max-h-[72vh] flex-col gap-3 overflow-y-auto pr-2 lg:flex"
      style={{ left: '2rem', top: '50%', transform: 'translateY(-50%)' }}
    >
      {items.map((it, i) => {
        const isActive = i === active
        const isHov = hovered === i
        const show = isActive || isHov
        return (
          <button
            key={it.id}
            onClick={() => go(it.id)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(i)}
            onBlur={() => setHovered(null)}
            className="flex items-center gap-2.5 text-left focus:outline-none"
            aria-current={isActive ? 'true' : undefined}
            title={it.text}
          >
            <span
              aria-hidden
              style={{
                width: isActive ? 12 : isHov ? 10 : 8,
                height: isActive ? 12 : isHov ? 10 : 8,
                transform: 'rotate(45deg)',
                flexShrink: 0,
                background: isActive ? 'var(--accent)' : 'transparent',
                border: `1.5px solid ${isActive || isHov ? 'var(--accent)' : 'var(--border-strong)'}`,
                boxShadow: isActive ? '0 0 8px var(--accent)' : 'none',
                transition: 'all 0.15s ease',
              }}
            />
            <span
              className="overflow-hidden whitespace-nowrap text-[10px] font-black uppercase tracking-[0.15em]"
              style={{
                color: isActive ? 'var(--text)' : 'var(--text-subtle)',
                maxWidth: show ? 240 : 0,
                opacity: show ? 1 : 0,
                transition: 'max-width 0.2s ease, opacity 0.15s ease, color 0.15s ease',
              }}
            >
              {it.text}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
