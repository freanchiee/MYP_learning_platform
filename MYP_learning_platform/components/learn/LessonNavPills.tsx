'use client'
import type { NavItem } from './LessonNavRail'
import { useActiveSection } from './useActiveSection'

// Phone/tablet equivalent of LessonNavRail's diamonds: per style-dna, the diamond rail "collapses to pill
// tabs" on small screens. Rendered inline in the content column (not fixed), same items and same jump.
export default function LessonNavPills({ items }: { items: NavItem[] }) {
  const { active, go } = useActiveSection(items)
  if (!items.length) return null
  return (
    <nav aria-label="On this page" className="mb-1 flex gap-2 overflow-x-auto pb-1 lg:hidden">
      {items.map((it, i) => {
        const isActive = i === active
        return (
          <button
            key={it.id}
            onClick={() => go(it.id)}
            aria-current={isActive ? 'true' : undefined}
            className="flex-none whitespace-nowrap rounded-full px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.1em]"
            style={{
              background: isActive ? 'var(--accent)' : 'var(--surface-inset)',
              color: isActive ? 'var(--accent-fg)' : 'var(--text-muted)',
              border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
            }}
          >
            {it.text}
          </button>
        )
      })}
    </nav>
  )
}
