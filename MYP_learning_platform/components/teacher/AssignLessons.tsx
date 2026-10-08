'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { buildDrip } from '@/lib/learn/unlock'

export interface LessonOutline {
  module: string
  moduleTitle: string
  lessons: { key: string; code: string; title: string; minutes: number; checks: number; live: boolean; assigned: boolean }[]
}

const ghost = { border: '1px solid var(--border-strong)', color: 'var(--text)' } as const
const solid = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' } as const
const field = { background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' } as const
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}` }

// Library > DP Physics: pick a module (dropdown), tick lessons, choose how they run and when they open.
// Async = students work through the lesson on their own (progress saved, dripped open); Live = you host it as a
// live class (same engine as every other live activity, attached to this class).
export default function AssignLessons({ classId, teacherId, outline }: { classId: string; teacherId: string; outline: LessonOutline[] }) {
  const router = useRouter()
  const [mod, setMod] = useState(outline[0]?.module ?? '')
  const [picked, setPicked] = useState<string[]>([])
  const [mode, setMode] = useState<'async' | 'live'>('async')
  const [scope, setScope] = useState<'lesson' | 'questions'>('lesson')
  const [drip, setDrip] = useState(true)
  const [start, setStart] = useState(today())
  const [every, setEvery] = useState(2)
  const [weekends, setWeekends] = useState(true)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const current = outline.find((m) => m.module === mod)
  const all = useMemo(() => outline.flatMap((m) => m.lessons), [outline])
  const chosen = all.filter((l) => picked.includes(l.key)) // keeps curriculum order
  const schedule = useMemo(() => (drip ? buildDrip(chosen.map((c) => c.key), { startDate: start, everyDays: every, skipWeekends: weekends }) : []), [drip, chosen, start, every, weekends])
  const when = (key: string) => schedule.find((s) => s.key === key)?.unlockAt

  const toggle = (key: string) => setPicked((p) => (p.includes(key) ? p.filter((k) => k !== key) : [...p, key]))
  const selectable = (current?.lessons ?? []).filter((l) => !l.assigned && (mode !== 'live' || l.live))

  async function assign() {
    setBusy(true)
    setError(null)
    const rows = chosen.map((l, i) => ({
      class_id: classId,
      teacher_id: teacherId,
      kind: 'lesson',
      subject: 'physics',
      ref: l.key,
      title: `${l.code} ${l.title}`,
      mode,
      scope: mode === 'live' ? 'lesson' : scope,
      unlock_at: when(l.key)?.toISOString() ?? null,
      position: i,
    }))
    const { error: err } = await createClient().from('class_assignments').insert(rows)
    setBusy(false)
    if (err) return setError(err.message)
    setPicked([])
    router.refresh()
  }

  const label = 'text-xs font-bold'
  return (
    <div className="grid gap-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className={label} style={{ color: 'var(--text-muted)' }}>
          Module
          <select value={mod} onChange={(e) => setMod(e.target.value)} className="mt-1 w-full rounded-[var(--radius-control)] px-3 py-2 text-sm" style={field}>
            {outline.map((m) => <option key={m.module} value={m.module}>{m.moduleTitle} ({m.lessons.length})</option>)}
          </select>
        </label>
        <div className={label} style={{ color: 'var(--text-muted)' }}>
          How it runs
          <div className="mt-1 flex gap-2">
            {([['async', '🕒 Self-paced (async)'], ['live', '🎮 Live class']] as const).map(([k, t]) => (
              <button key={k} onClick={() => { setMode(k); if (k === 'live') setPicked((p) => p.filter((key) => all.find((l) => l.key === key)?.live)) }} className="flex-1 rounded-full px-3 py-2 text-sm font-bold" style={mode === k ? solid : ghost}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      {mode === 'async' && (
        <div className="flex flex-wrap gap-2 text-sm">
          {([['lesson', 'Whole lesson (simulations + questions)'], ['questions', 'Questions only']] as const).map(([k, t]) => (
            <button key={k} onClick={() => setScope(k)} className="rounded-full px-3 py-1.5 text-xs font-bold" style={scope === k ? solid : ghost}>{t}</button>
          ))}
        </div>
      )}
      {mode === 'live' && <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Live runs the lesson&apos;s predictions and check questions as a host-paced class quiz. Only lessons that have questions can run live. You start each one from the Assignments tab.</p>}

      <div className="rounded-[var(--radius-panel)] p-3" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border)' }}>
        <div className="mb-2 flex items-center justify-between text-xs font-bold" style={{ color: 'var(--text-muted)' }}>
          <span>Lessons in {current?.moduleTitle}</span>
          <button onClick={() => setPicked((p) => Array.from(new Set([...p, ...selectable.map((l) => l.key)])))} className="underline">Select all</button>
        </div>
        <div className="grid gap-1">
          {(current?.lessons ?? []).map((l) => {
            const blocked = l.assigned || (mode === 'live' && !l.live)
            return (
              <label key={l.key} className="flex items-center gap-3 rounded-[var(--radius-control)] px-2 py-1.5 text-sm" style={{ opacity: blocked ? 0.5 : 1 }}>
                <input type="checkbox" disabled={blocked} checked={picked.includes(l.key)} onChange={() => toggle(l.key)} />
                <span className="font-semibold">{l.code} {l.title}</span>
                <span className="ml-auto text-xs" style={{ color: 'var(--text-subtle)' }}>
                  {l.assigned ? 'ASSIGNED ✓' : mode === 'live' && !l.live ? 'no questions' : `${l.minutes} min · ${l.checks} checks`}
                </span>
              </label>
            )
          })}
        </div>
      </div>

      <div className="rounded-[var(--radius-panel)] p-3" style={{ border: '1px solid var(--border)' }}>
        <label className="flex items-center gap-2 text-sm font-bold">
          <input type="checkbox" checked={drip} onChange={(e) => setDrip(e.target.checked)} />
          {mode === 'async' ? 'Drip: unlock one lesson at a time' : 'Plan a date for each lesson'}
        </label>
        {drip && (
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <label className={label} style={{ color: 'var(--text-muted)' }}>First opens<input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="mt-1 block rounded-[var(--radius-control)] px-2 py-1.5 text-sm" style={field} /></label>
            <label className={label} style={{ color: 'var(--text-muted)' }}>Then every (days)<input type="number" min={0} max={30} value={every} onChange={(e) => setEvery(Math.max(0, Math.min(30, +e.target.value || 0)))} className="mt-1 block w-24 rounded-[var(--radius-control)] px-2 py-1.5 text-sm" style={field} /></label>
            <label className="flex items-center gap-2 pb-2 text-xs font-bold" style={{ color: 'var(--text-muted)' }}><input type="checkbox" checked={weekends} onChange={(e) => setWeekends(e.target.checked)} />Skip weekends</label>
          </div>
        )}
        {chosen.length > 0 && (
          <ol className="mt-3 grid gap-1 text-sm">
            {chosen.map((l, i) => {
              const at = when(l.key)
              return (
                <li key={l.key} className="flex justify-between gap-3">
                  <span>{i + 1}. {l.code} {l.title}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{drip ? (at ? at.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' }) : 'check the date') : 'open now'}</span>
                </li>
              )
            })}
          </ol>
        )}
      </div>

      {error && <p className="text-sm" style={{ color: 'var(--danger)' }}>{error}</p>}
      <button disabled={busy || chosen.length === 0 || (drip && schedule.length === 0)} onClick={assign} className="justify-self-start rounded-[var(--radius-control)] px-5 py-2.5 text-sm font-black tracking-wider disabled:opacity-40" style={solid}>
        {busy ? '…' : `ASSIGN ${chosen.length || ''} LESSON${chosen.length === 1 ? '' : 'S'}`}
      </button>
    </div>
  )
}
