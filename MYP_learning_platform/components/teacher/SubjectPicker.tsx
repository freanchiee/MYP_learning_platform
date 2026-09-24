'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { TEACH_SUBJECTS } from '@/lib/subjects'

// Multi-select of the subjects a teacher teaches. Saves to profiles.subjects
// on every change, so the same component works in onboarding and on the
// dashboard.
export default function SubjectPicker({ initial, dark = false, onChange }: { initial: string[]; dark?: boolean; onChange?: (subjects: string[]) => void }) {
  const [selected, setSelected] = useState<string[]>(initial)
  const [error, setError] = useState<string | null>(null)

  async function toggle(slug: string) {
    const next = selected.includes(slug) ? selected.filter((s) => s !== slug) : [...selected, slug]
    setSelected(next)
    setError(null)
    onChange?.(next)
    const sb = createClient()
    const { data } = await sb.auth.getUser()
    if (!data.user) return
    const { error: err } = await sb.from('profiles').update({ subjects: next }).eq('id', data.user.id)
    if (err) setError(err.message)
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {TEACH_SUBJECTS.map((s) => {
          const on = selected.includes(s.slug)
          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => toggle(s.slug)}
              aria-pressed={on}
              className="rounded-full px-4 py-2 text-sm font-bold transition-colors"
              style={{
                background: on ? (dark ? '#fff' : 'var(--accent)') : dark ? 'rgba(255,255,255,0.08)' : 'var(--surface-inset)',
                color: on ? (dark ? '#160f2a' : 'var(--text-on-accent)') : dark ? 'rgba(255,255,255,0.8)' : 'var(--text)',
                border: dark ? '1px solid rgba(255,255,255,0.25)' : '1px solid var(--border-strong)',
              }}
            >
              {s.icon} {s.label}
            </button>
          )
        })}
      </div>
      {error && <p className="mt-2 text-sm" style={{ color: 'var(--danger)' }}>{error}</p>}
    </div>
  )
}
