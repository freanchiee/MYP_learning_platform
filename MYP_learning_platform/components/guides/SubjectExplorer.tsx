'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { GuideCriterion, ExamPattern } from '@/data/guides'

type Tab = 'syllabus' | 'exam' | 'criteria'

// Interactive explorer for a subject guide: Syllabus areas · Exam pattern ·
// Criteria A–D. All three panels are rendered in the DOM (only visibility
// toggles) so the content stays crawlable for SEO.
export default function SubjectExplorer({
  subject,
  syllabusAreas,
  examPattern,
  criteria,
  papersHref,
}: {
  subject: string
  syllabusAreas: string[]
  examPattern: ExamPattern
  criteria: GuideCriterion[]
  papersHref: string
}) {
  const [tab, setTab] = useState<Tab>('syllabus')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'syllabus', label: 'Syllabus areas' },
    { id: 'exam', label: 'Exam pattern' },
    { id: 'criteria', label: 'Criteria A–D' },
  ]

  return (
    <div className="rounded-3xl p-5 md:p-7" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label={`${subject} guide explorer`}>
        {tabs.map((t) => {
          const on = tab === t.id
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={on}
              onClick={() => setTab(t.id)}
              className="rounded-full px-4 py-2 text-sm font-black tracking-wide transition-all"
              style={{
                background: on ? 'var(--accent)' : 'var(--surface-2)',
                color: on ? 'var(--text-on-accent)' : 'var(--text-muted)',
              }}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      {/* Syllabus areas */}
      <div role="tabpanel" hidden={tab !== 'syllabus'} className="mt-5">
        <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>
          The main areas of study in MYP {subject}. On CritABCD you can filter practice questions by
          any of these.
        </p>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {syllabusAreas.map((a, i) => (
            <div key={a} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: 'var(--surface-2)' }}>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-black text-white" style={{ background: 'var(--accent)' }}>
                {i + 1}
              </span>
              <span className="text-base font-semibold" style={{ color: 'var(--text)' }}>{a}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Exam pattern */}
      <div role="tabpanel" hidden={tab !== 'exam'} className="mt-5">
        <div className="inline-block rounded-full px-3.5 py-1.5 text-sm font-black" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
          {examPattern.format}
        </div>
        <ul className="mt-4 space-y-3">
          {examPattern.details.map((d, i) => (
            <li key={i} className="flex gap-2.5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--accent)' }}>•</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Criteria A–D */}
      <div role="tabpanel" hidden={tab !== 'criteria'} className="mt-5">
        <div className="space-y-3">
          {criteria.map((c) => (
            <div key={c.key} className="rounded-xl p-4" style={{ background: 'var(--surface-2)' }}>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg text-sm font-black text-white" style={{ background: 'var(--accent)' }}>
                  {c.key}
                </span>
                <span className="text-base font-bold" style={{ color: 'var(--text)' }}>
                  Criterion {c.key}: {c.title}
                </span>
                <span className="ml-auto text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>/ 8</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.summary}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 border-t pt-5" style={{ borderColor: 'var(--border)' }}>
        <Link
          href={papersHref}
          className="inline-block rounded-xl px-5 py-3 text-sm font-black"
          style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
        >
          {papersHref === '/design' ? 'Open the Design module →' : `Practise MYP ${subject} →`}
        </Link>
      </div>
    </div>
  )
}
