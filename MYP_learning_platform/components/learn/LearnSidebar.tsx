'use client'
import Link from 'next/link'
import type { Module } from '@/data/learn/physics'
import { useDoneLessons } from '@/lib/learn/progress'

const NEXT_UP = ['A.3 Work, energy and power', 'B · Particulate nature of matter', 'C · Wave behaviour', 'D · Fields', 'E · Nuclear and quantum']

// Table-of-contents rail: modules, and the lessons inside the open module.
export default function LearnSidebar({ modules, activeModule, activeLesson }: { modules: Module[]; activeModule?: string; activeLesson?: string }) {
  const done = useDoneLessons()
  return (
    <nav aria-label="Table of contents" className="chrome-card p-3">
      <Link href="/dp-physics" className="flex items-center gap-2 px-3 py-2.5 text-sm font-extrabold" style={{ color: 'var(--text)' }}>
        <span aria-hidden style={{ color: 'var(--accent)' }}>◆</span> Table of contents
      </Link>
      <ul className="mt-1 grid gap-0.5">
        {modules.map((m) => {
          const open = m.slug === activeModule
          return (
            <li key={m.slug}>
              <Link
                href={`/dp-physics/${m.slug}`}
                aria-current={open && !activeLesson ? 'page' : undefined}
                className="flex items-center gap-3 rounded-[var(--radius-panel)] px-3 py-2.5 text-sm font-bold"
                style={{ background: open ? 'var(--accent-soft)' : 'transparent', color: 'var(--text)' }}
              >
                <span className="w-7 shrink-0 text-xs font-black" style={{ color: 'var(--accent)' }}>{m.code}</span>
                {m.title}
              </Link>
              {open && (
                <ul className="mb-1 ml-3 grid gap-0.5 border-l pl-2" style={{ borderColor: 'var(--divider)' }}>
                  {m.lessons.map((l) => {
                    const cur = l.slug === activeLesson
                    const isDone = done.has(`${m.slug}/${l.slug}`)
                    return (
                      <li key={l.slug}>
                        <Link
                          href={`/dp-physics/${m.slug}/${l.slug}`}
                          aria-current={cur ? 'page' : undefined}
                          className="flex items-start gap-2 rounded-[var(--radius-control)] px-2.5 py-2 text-[13px] font-semibold"
                          style={{ background: cur ? 'var(--surface-2)' : 'transparent', color: cur ? 'var(--text)' : 'var(--text-muted)' }}
                        >
                          <span className="w-12 shrink-0 text-[11px] font-black" style={{ color: 'var(--text-subtle)' }}>{l.code}</span>
                          <span className="flex-1">{l.title}</span>
                          {isDone && <span aria-label="completed" title="Completed" style={{ color: 'var(--success)' }}>✓</span>}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
        <li className="px-3 pb-1 pt-3 text-[11px] font-black uppercase tracking-[0.25em]" style={{ color: 'var(--text-subtle)' }}>Coming next</li>
        {NEXT_UP.map((t) => (
          <li key={t} className="px-3 py-1.5 text-[13px]" style={{ color: 'var(--text-subtle)' }}>{t}</li>
        ))}
      </ul>
    </nav>
  )
}
