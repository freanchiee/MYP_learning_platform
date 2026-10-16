'use client'

import { useMemo, useState } from 'react'
import type { WorksheetField, WorksheetStage } from '@/data/design/live/types'
import type { LivePlayerRow } from '@/lib/design-live/types'
import { estimateLevel, HINT_UNLOCK_SCORE } from '@/lib/design-live/answerFeedback'
import { cardStyle, btnStyle, inputStyle } from './ui'

interface Coached { sectionKey: string; sectionLabel: string; field: WorksheetField }

/** Teacher view for a worksheet stage: who has not yet reached level 5 on a coached written answer, lowest first, so
 *  you can walk to them instead of waiting to be asked. Levels use the rule-based (keyword and length) estimate, the same
 *  one that awards points, because the on-device meaning check only runs in each student's own browser. It is a signal,
 *  never a grade. */
export default function CoachDashboard({ stage, players, onChat }: { stage: WorksheetStage; players: LivePlayerRow[]; onChat: (id: string) => void }) {
  const fields = useMemo<Coached[]>(
    () => stage.sections.flatMap((s) => s.fields.filter((f) => f.coach && (f.type === 'textarea' || f.type === 'text')).map((f) => ({ sectionKey: s.key, sectionLabel: s.label, field: f }))),
    [stage]
  )
  const [pick, setPick] = useState(0)
  if (!fields.length) return null
  const cur = fields[Math.min(pick, fields.length - 1)]

  const rows = players
    .map((p) => {
      const text = p.data?.[stage.key]?.[cur.sectionKey]?.[cur.field.key]
      const t = typeof text === 'string' ? text : ''
      const r = estimateLevel(t, cur.field)
      return { p, started: t.trim().length > 0, r, scaffold: !!p.data?._spent?.[`${stage.key}.${cur.sectionKey}.${cur.field.key}`] }
    })
    .sort((a, b) => a.r.score - b.r.score || a.p.name.localeCompare(b.p.name))

  const secure = rows.filter((x) => x.r.score >= HINT_UNLOCK_SCORE).length
  const notStarted = rows.filter((x) => !x.started).length
  const stuck = rows.length - secure - notStarted

  return (
    <div style={{ ...cardStyle('#5C3FD6'), display: 'grid', gap: 8, marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <strong style={{ fontSize: 14 }}>🧭 Who needs you? Coached answers</strong>
        {fields.length > 1 && (
          <select value={pick} onChange={(e) => setPick(Number(e.target.value))} style={{ ...inputStyle, width: 'auto', fontSize: 12, padding: '5px 8px' }}>
            {fields.map((f, i) => (
              <option key={`${f.sectionKey}.${f.field.key}`} value={i}>{f.sectionLabel} · {f.field.label}</option>
            ))}
          </select>
        )}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
        <strong>{cur.field.label}</strong> · {secure} of {rows.length} at level 5+ · {stuck} below level 5 · {notStarted} not started. Keyword estimate, not a grade.
      </div>
      <div style={{ display: 'grid', gap: 4, maxHeight: 260, overflowY: 'auto' }}>
        {rows.map(({ p, started, r, scaffold }) => {
          const tag = !started ? { t: 'Not started', c: '#8A8A94' } : r.score >= HINT_UNLOCK_SCORE ? { t: `Level ${Math.floor(r.score)}+`, c: '#1FA98A' } : { t: `Below level 5 (${r.score})`, c: '#D6425E' }
          return (
            <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, padding: '4px 6px', borderRadius: 8, background: !started || r.score < HINT_UNLOCK_SCORE ? 'rgba(214,66,94,0.07)' : 'transparent' }}>
              <span style={{ flex: 1, fontWeight: 700 }}>{p.name}</span>
              {r.stuffed && <span title="Reads like a list of key words" style={{ fontSize: 11 }}>⚠️ keyword list</span>}
              {scaffold && <span title="Unlocked the scaffold" style={{ fontSize: 11 }}>🧩</span>}
              <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{r.words} words</span>
              <span style={{ fontSize: 11, fontWeight: 800, color: tag.c, minWidth: 96, textAlign: 'right' }}>{tag.t}</span>
              <button type="button" onClick={() => onChat(p.id)} style={{ ...btnStyle('#5C3FD6'), padding: '2px 8px', fontSize: 11 }}>Message</button>
            </div>
          )
        })}
        {rows.length === 0 && <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>No students have joined yet.</div>}
      </div>
    </div>
  )
}
