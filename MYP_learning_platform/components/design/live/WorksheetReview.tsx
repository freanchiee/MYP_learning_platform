'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { fuzzyMatchPoints } from '@/lib/design-live/fuzzyMatch'
import { getPersona } from '@/data/design/live/personas'
import type { WorksheetStage, WorksheetField, WorksheetSection } from '@/data/design/live/types'
import type { LivePlayerRow, LiveGradeRow } from '@/lib/design-live/types'
import { cardStyle, btnStyle, inputStyle, Avatar } from './ui'

function fieldAnswerText(field: WorksheetField, value: unknown): string {
  if (value == null) return ''
  if (field.type === 'table' && Array.isArray(value)) {
    return value
      .map((row: Record<string, string>) => (field.columns || []).map((c) => row[c.key]).filter(Boolean).join(' — '))
      .filter(Boolean)
      .join('\n')
  }
  if (field.type === 'personaChat') return ''
  return String(value)
}

/** The score this section would get if the teacher accepted the fuzzy-match
 *  suggestion outright — sum of each scoreable field's best-exemplar match. */
function sectionAutoScore(section: WorksheetSection, data: Record<string, unknown>): { auto: number; max: number } {
  let auto = 0
  let max = 0
  section.fields.forEach((f) => {
    if (f.type !== 'text' && f.type !== 'textarea') return
    if (!f.exemplars?.length && !f.celebrateKeywords?.length) return
    const points = f.points ?? 10
    max += points
    auto += fuzzyMatchPoints(fieldAnswerText(f, data?.[f.key]), f.exemplars, f.celebrateKeywords, points)
  })
  return { auto, max }
}

const scoreKey = (stageKey: string, sectionKey: string) => `ws:${stageKey}:${sectionKey}`

/** Click a student's name on the worksheet host dashboard to open this: a
 *  window onto everything they've written for the current worksheet stage,
 *  field by field, each scoreable field showing its fuzzy-match "auto"
 *  suggestion (see lib/design-live/fuzzyMatch.ts) next to an editable
 *  points input the teacher can accept or override — manual score always
 *  wins over the auto suggestion, it's just pre-filled with it. Scores
 *  save into the existing live_grades row under synthetic keys
 *  (`ws:<stageKey>:<sectionKey>`), alongside whatever the grading stage's
 *  strand scores use — no new table needed. */
export function WorksheetReviewModal({
  stage,
  player,
  grade,
  sessionCode,
  onClose,
}: {
  stage: WorksheetStage
  player: LivePlayerRow
  grade?: LiveGradeRow
  sessionCode: string
  onClose: () => void
}) {
  const [scores, setScores] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {}
    stage.sections.forEach((s) => {
      const saved = grade?.scores?.[scoreKey(stage.key, s.key)]
      const { auto } = sectionAutoScore(s, player.data?.[stage.key]?.[s.key] || {})
      init[s.key] = saved != null ? String(saved) : String(auto)
    })
    return init
  })
  const [saving, setSaving] = useState(false)
  const [savedFlash, setSavedFlash] = useState(false)

  const save = async () => {
    setSaving(true)
    const sb = createClient()
    const nextScores = { ...(grade?.scores || {}) }
    stage.sections.forEach((s) => {
      const n = Number(scores[s.key])
      nextScores[scoreKey(stage.key, s.key)] = Number.isFinite(n) ? n : null
    })
    const { error } = await sb.from('live_grades').upsert({
      session_code: sessionCode,
      player_id: player.id,
      scores: nextScores,
      feedback: grade?.feedback || '',
      graded: grade?.graded ?? false,
      updated_at: new Date().toISOString(),
    })
    setSaving(false)
    if (!error) {
      setSavedFlash(true)
      setTimeout(() => setSavedFlash(false), 1200)
    }
  }

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 60, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 16, overflowY: 'auto' }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: 640, margin: '24px 0' }}>
        <div style={cardStyle('#5C3FD6')}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800 }}>
              <Avatar seed={player.id} size={30} />
              {player.name}
            </div>
            <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 18, color: 'var(--text-muted)' }}>
              ✕
            </button>
          </div>

          <div style={{ display: 'grid', gap: 14 }}>
            {stage.sections.map((s) => {
              const data = player.data?.[stage.key]?.[s.key] || {}
              const { auto, max } = sectionAutoScore(s, data)
              return (
                <div key={s.key} style={{ border: '1.5px solid var(--border)', borderRadius: 10, padding: 10 }}>
                  <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
                    {s.icon} {s.label}
                  </div>
                  <div style={{ display: 'grid', gap: 8, marginBottom: 10 }}>
                    {s.fields.map((f) => {
                      if (f.type === 'personaChat') {
                        const v = data[f.key] as { characterId?: string; messages?: { from: string }[] } | undefined
                        const persona = v?.characterId ? getPersona(v.characterId) : undefined
                        const asked = v?.messages?.filter((m) => m.from === 'student').length || 0
                        return (
                          <div key={f.key} style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            🎭 {persona ? `Interviewed ${persona.name}` : 'No interview yet'} — {asked} question{asked === 1 ? '' : 's'}
                          </div>
                        )
                      }
                      const text = fieldAnswerText(f, data[f.key])
                      const points = f.points ?? 10
                      const scoreable = (f.type === 'text' || f.type === 'textarea') && ((f.exemplars?.length ?? 0) > 0 || (f.celebrateKeywords?.length ?? 0) > 0)
                      return (
                        <div key={f.key} style={{ fontSize: 12.5 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                            <strong style={{ color: 'var(--text-muted)', fontSize: 11 }}>{f.label}</strong>
                            {scoreable && (
                              <span style={{ fontSize: 10.5, fontWeight: 700, color: '#1FA98A', whiteSpace: 'nowrap' }}>
                                Auto: {fuzzyMatchPoints(text, f.exemplars, f.celebrateKeywords, points)}/{points}
                              </span>
                            )}
                          </div>
                          <div style={{ whiteSpace: 'pre-wrap', color: text ? 'var(--text)' : 'var(--text-muted)', fontStyle: text ? 'normal' : 'italic' }}>
                            {text || 'Not answered yet'}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  {max > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>Score (auto-suggested {auto}/{max}):</span>
                      <input
                        type="number"
                        min={0}
                        max={max}
                        value={scores[s.key] ?? ''}
                        onChange={(e) => setScores((sc) => ({ ...sc, [s.key]: e.target.value }))}
                        style={{ ...inputStyle, width: 70, padding: '4px 8px' }}
                      />
                      <span style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>/ {max}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <button onClick={save} disabled={saving} style={{ ...btnStyle('#1FA98A', true), marginTop: 12, width: '100%' }}>
            {savedFlash ? '✅ Saved!' : saving ? 'Saving…' : '💾 Save scores'}
          </button>
        </div>
      </div>
    </div>
  )
}
