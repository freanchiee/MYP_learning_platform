'use client'

import { useState } from 'react'

// Criterion C artifact: a dated build log. Each entry records what was done,
// which technical skill it demonstrates, and — when the plan changed —
// why. That justification is what the C-strand rubric actually rewards.

interface LogEntry {
  date: string
  whatIDid: string
  skill: string
  changeJustification: string
}

function parse(raw: string): LogEntry[] {
  if (!raw) return []
  try {
    const d = JSON.parse(raw)
    return Array.isArray(d) ? d : []
  } catch {
    return []
  }
}

function today(): string {
  return new Date().toISOString().slice(0, 10)
}

export default function BuildLog({ value, onChange, accent }: { value: string; onChange: (v: string) => void; accent: string }) {
  const entries = parse(value)
  const [draft, setDraft] = useState<LogEntry>({ date: today(), whatIDid: '', skill: '', changeJustification: '' })

  const add = () => {
    if (!draft.whatIDid.trim()) return
    onChange(JSON.stringify([...entries, draft]))
    setDraft({ date: today(), whatIDid: '', skill: '', changeJustification: '' })
  }
  const remove = (i: number) => onChange(JSON.stringify(entries.filter((_, j) => j !== i)))

  return (
    <div className="rounded-2xl p-5" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
      <div className="text-xs font-black tracking-widest" style={{ color: accent }}>
        BUILD LOG
      </div>
      <p className="mt-1 text-sm" style={{ color: 'var(--text-subtle)' }}>
        One entry per build session. Log changes AND why you made them — that justification is worth real marks.
      </p>

      {/* New entry form */}
      <div className="mt-4 grid gap-2.5 rounded-xl p-3.5" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
        <div className="grid gap-2.5 sm:grid-cols-2">
          <input
            type="date"
            value={draft.date}
            onChange={(e) => setDraft({ ...draft, date: e.target.value })}
            className="rounded-lg px-3 py-2 text-sm outline-none"
            style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }}
          />
          <input
            value={draft.skill}
            onChange={(e) => setDraft({ ...draft, skill: e.target.value })}
            placeholder="Skill used (e.g. GPIO wiring, soldering, Python)"
            className="rounded-lg px-3 py-2 text-sm outline-none"
            style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }}
          />
        </div>
        <textarea
          value={draft.whatIDid}
          onChange={(e) => setDraft({ ...draft, whatIDid: e.target.value })}
          rows={2}
          placeholder="What did you do this session?"
          className="w-full resize-y rounded-lg p-2.5 text-sm outline-none"
          style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }}
        />
        <textarea
          value={draft.changeJustification}
          onChange={(e) => setDraft({ ...draft, changeJustification: e.target.value })}
          rows={2}
          placeholder="Did you change the plan? What changed, and why? (leave blank if nothing changed)"
          className="w-full resize-y rounded-lg p-2.5 text-sm outline-none"
          style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', color: 'var(--text)' }}
        />
        <button
          onClick={add}
          disabled={!draft.whatIDid.trim()}
          className="justify-self-start rounded-lg px-4 py-2 text-xs font-black disabled:opacity-40"
          style={{ background: accent, color: '#fff' }}
        >
          + Add entry
        </button>
      </div>

      {/* Log */}
      {entries.length > 0 && (
        <ol className="mt-4 space-y-2.5">
          {[...entries].reverse().map((e, ri) => {
            const i = entries.length - 1 - ri
            return (
              <li key={i} className="rounded-xl p-3.5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>
                    <span>{e.date}</span>
                    {e.skill && (
                      <span className="rounded-full px-2 py-0.5" style={{ background: 'var(--surface-2)', color: accent }}>
                        {e.skill}
                      </span>
                    )}
                  </div>
                  <button onClick={() => remove(i)} className="text-xs" style={{ color: 'var(--text-subtle)' }}>
                    ✕
                  </button>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
                  {e.whatIDid}
                </p>
                {e.changeJustification && (
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--text)' }}>Change + why: </strong>
                    {e.changeJustification}
                  </p>
                )}
              </li>
            )
          })}
        </ol>
      )}
    </div>
  )
}
