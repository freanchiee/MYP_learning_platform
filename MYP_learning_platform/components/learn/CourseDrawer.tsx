'use client'
import { useEffect, useState } from 'react'
import type { Module } from '@/data/learn/physics'
import LearnSidebar from './LearnSidebar'

// The diamond rail (LessonNavRail) covers THIS lesson's own sections. The full course tree still needs a
// home now the page is full-bleed rather than a 3-column grid — a slide-in drawer, opened from a small
// trigger under the diamonds, keeps it one tap away without permanently taking up a grid column.
export default function CourseDrawer({ modules, activeModule, activeLesson }: { modules: Module[]; activeModule?: string; activeLesson?: string }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="fixed z-40 flex items-center gap-2 rounded-[var(--radius-control)] px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em]"
        style={{ left: '1rem', bottom: '1rem', background: 'var(--surface-elevated)', border: '1px solid var(--border-strong)', color: 'var(--text)', boxShadow: 'var(--shadow-card)' }}
      >
        <span aria-hidden style={{ color: 'var(--accent)' }}>◆</span> Course
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex" role="dialog" aria-modal="true" aria-label="Course contents">
          <button aria-label="Close course menu" onClick={() => setOpen(false)} className="flex-1" style={{ background: 'rgba(0,0,0,0.45)' }} />
          <div className="h-full w-full max-w-sm overflow-y-auto p-4" style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', boxShadow: '-8px 0 30px rgba(0,0,0,0.2)' }}>
            <div className="flex items-center justify-between px-1 pb-3">
              <span className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: 'var(--text-subtle)' }}>Course contents</span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-[var(--radius-control)] px-2.5 py-1.5 text-sm font-black" style={{ background: 'var(--surface-inset)', color: 'var(--text)' }}>✕</button>
            </div>
            <LearnSidebar modules={modules} activeModule={activeModule} activeLesson={activeLesson} />
          </div>
        </div>
      )}
    </>
  )
}
