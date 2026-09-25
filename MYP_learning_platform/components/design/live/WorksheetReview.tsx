'use client'

import { getProduct, isWildProduct } from '@/data/design/live/digital-products'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { fuzzyMatchPoints } from '@/lib/design-live/fuzzyMatch'
import { getPersona } from '@/data/design/live/personas'
import { getPersonality } from '@/data/design/live/personalities'
import { getOpportunity } from '@/data/design/live/opportunities'
import { getMake, isWildCard } from '@/data/design/live/makes'
import type { LiveActivityDefinition, WorksheetStage, WorksheetField, WorksheetSection } from '@/data/design/live/types'
import { chosenValue, exemplarsFor, revealKey } from '@/lib/design-live/exemplars'
import { ExemplarControls } from './ExemplarReveal'
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
function sectionAutoScore(section: WorksheetSection, data: Record<string, unknown>, activity: LiveActivityDefinition, stageKey: string, playerData: unknown): { auto: number; max: number } {
  let auto = 0
  let max = 0
  section.fields.forEach((f) => {
    if (f.type !== 'text' && f.type !== 'textarea') return
    if (!f.exemplars?.length && !f.celebrateKeywords?.length) return
    const points = f.points ?? 10
    max += points
    // match against the model answers written for THIS student's community when there are any
    auto += fuzzyMatchPoints(fieldAnswerText(f, data?.[f.key]), exemplarsFor(activity.exemplarsByChoice, stageKey, section.key, f, playerData).texts, f.celebrateKeywords, points)
  })
  return { auto, max }
}

const scoreKey = (stageKey: string, sectionKey: string) => `ws:${stageKey}:${sectionKey}`

/** The grade row's scores with its reveal flags set to exactly `revealed` (everything else kept). */
function mergeReveals(scores: Record<string, number | null> | undefined, revealed: Set<string>): Record<string, number | null> {
  const next: Record<string, number | null> = {}
  for (const [k, v] of Object.entries(scores || {})) if (!k.startsWith('reveal:')) next[k] = v
  revealed.forEach((k) => (next[k] = 1))
  return next
}

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
  activity,
  stage,
  player,
  grade,
  sessionCode,
  onClose,
}: {
  activity: LiveActivityDefinition
  stage: WorksheetStage
  player: LivePlayerRow
  grade?: LiveGradeRow
  sessionCode: string
  onClose: () => void
}) {
  const cfg = activity.exemplarsByChoice
  const choice = chosenValue(cfg, player.data)
  // Which exemplars this student can currently see (stored on their grade row as reveal:<stage>:<section>:<field> = 1).
  const [revealed, setRevealed] = useState<Set<string>>(() => new Set(Object.entries(grade?.scores || {}).filter(([k, v]) => k.startsWith('reveal:') && v).map(([k]) => k)))
  const [revealBusy, setRevealBusy] = useState(false)
  const [scores, setScores] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {}
    stage.sections.forEach((s) => {
      const saved = grade?.scores?.[scoreKey(stage.key, s.key)]
      const { auto } = sectionAutoScore(s, player.data?.[stage.key]?.[s.key] || {}, activity, stage.key, player.data)
      init[s.key] = saved != null ? String(saved) : String(auto)
    })
    return init
  })
  const [saving, setSaving] = useState(false)
  const [savedFlash, setSavedFlash] = useState(false)

  // Reveal / hide exemplar(s) for this student straight away (no need to press Save scores).
  const toggleReveal = async (keys: string[]) => {
    const on = keys.some((k) => !revealed.has(k)) // if any is hidden, reveal all; otherwise hide all
    const next = new Set(revealed)
    keys.forEach((k) => (on ? next.add(k) : next.delete(k)))
    setRevealed(next)
    setRevealBusy(true)
    const { error } = await createClient().from('live_grades').upsert({
      session_code: sessionCode,
      player_id: player.id,
      scores: mergeReveals(grade?.scores, next),
      feedback: grade?.feedback || '',
      graded: grade?.graded ?? false,
      updated_at: new Date().toISOString(),
    })
    setRevealBusy(false)
    if (error) setRevealed(revealed) // could not save: put the button back
  }

  const save = async () => {
    setSaving(true)
    const sb = createClient()
    const nextScores = mergeReveals(grade?.scores, revealed)
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
              {cfg && (
                <span style={{ fontSize: 11, fontWeight: 800, background: 'var(--surface-2)', border: '1.5px solid var(--border)', borderRadius: 999, padding: '2px 9px', color: 'var(--text-muted)' }}>
                  {cfg.noun}: {choice ?? 'not chosen yet'}
                </span>
              )}
            </div>
            <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 18, color: 'var(--text-muted)' }}>
              ✕
            </button>
          </div>

          <div style={{ display: 'grid', gap: 14 }}>
            {stage.sections.map((s) => {
              const data = player.data?.[stage.key]?.[s.key] || {}
              const { auto, max } = sectionAutoScore(s, data, activity, stage.key, player.data)
              return (
                <div key={s.key} style={{ border: '1.5px solid var(--border)', borderRadius: 10, padding: 10 }}>
                  <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 6 }}>
                    {s.icon} {s.label}
                    {s.criterion && <span style={{ marginLeft: 8, fontSize: 10.5, fontWeight: 800, color: 'var(--text-muted)' }}>Criterion {s.criterion}</span>}
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
                      if (f.type === 'personalityPrompt') {
                        const v = data[f.key] as { personalityId?: string } | undefined
                        const chosen = v?.personalityId ? getPersonality(v.personalityId) : undefined
                        return (
                          <div key={f.key} style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            🌟 {chosen ? `Chose ${chosen.name} for a simulated interview` : 'No famous person chosen yet'}
                          </div>
                        )
                      }
                      if (f.type === 'productCards') {
                        const v = data[f.key] as { productId?: string; custom?: string } | undefined
                        const chosen = v?.productId && !isWildProduct(v.productId) ? getProduct(v.productId) : undefined
                        return (
                          <div key={f.key} style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            💻 {!v?.productId ? 'Has not chosen a digital product yet' : isWildProduct(v.productId) ? `Wild card: ${v.custom?.trim() || '(not described yet)'}` : `Designing: ${chosen?.name ?? v.productId}`}
                          </div>
                        )
                      }
                      if (f.type === 'makeCards') {
                        const v = data[f.key] as { makeId?: string; custom?: string } | undefined
                        const chosen = v?.makeId ? getMake(v.makeId) : undefined
                        return (
                          <div key={f.key} style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            🛠️ {!chosen ? 'Has not chosen what to make yet' : isWildCard(chosen.id) ? `Wild card: ${v?.custom?.trim() || '(not described yet)'}` : `Making: ${chosen.name}`}
                          </div>
                        )
                      }
                      if (f.type === 'opportunityCards') {
                        const v = data[f.key] as { opportunityId?: string } | undefined
                        const chosen = v?.opportunityId ? getOpportunity(v.opportunityId) : undefined
                        return (
                          <div key={f.key} style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            💡 {chosen ? `Started from: ${chosen.hmw}` : 'No starter opportunity chosen (may have written their own)'}
                          </div>
                        )
                      }
                      const text = fieldAnswerText(f, data[f.key])
                      const resolved = exemplarsFor(cfg, stage.key, s.key, f, player.data)
                      const rk = revealKey(stage.key, s.key, f.key)
                      const points = f.points ?? 10
                      const scoreable = (f.type === 'text' || f.type === 'textarea') && ((f.exemplars?.length ?? 0) > 0 || (f.celebrateKeywords?.length ?? 0) > 0)
                      return (
                        <div key={f.key} style={{ fontSize: 12.5 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                            <strong style={{ color: 'var(--text-muted)', fontSize: 11 }}>{f.label}</strong>
                            {scoreable && (
                              <span style={{ fontSize: 10.5, fontWeight: 700, color: '#1FA98A', whiteSpace: 'nowrap' }}>
                                Auto: {fuzzyMatchPoints(text, resolved.texts, f.celebrateKeywords, points)}/{points}
                              </span>
                            )}
                          </div>
                          <div style={{ whiteSpace: 'pre-wrap', color: text ? 'var(--text)' : 'var(--text-muted)', fontStyle: text ? 'normal' : 'italic' }}>
                            {text || 'Not answered yet'}
                          </div>
                          {(f.type === 'text' || f.type === 'textarea') && (
                            <ExemplarControls resolved={resolved} noun={cfg?.noun} studentName={player.name} revealed={revealed.has(rk)} busy={revealBusy} onToggle={() => toggleReveal([rk])} />
                          )}
                        </div>
                      )
                    })}
                  </div>
                  {(() => {
                    const keys = s.fields.filter((f) => (f.type === 'text' || f.type === 'textarea') && exemplarsFor(cfg, stage.key, s.key, f, player.data).texts.length > 0).map((f) => revealKey(stage.key, s.key, f.key))
                    if (keys.length < 2) return null
                    const all = keys.every((k) => revealed.has(k))
                    const first = player.name.split(' ')[0]
                    return (
                      <button onClick={() => toggleReveal(keys)} disabled={revealBusy} style={{ cursor: 'pointer', fontSize: 11.5, fontWeight: 800, border: '1.5px solid var(--border-strong)', background: 'var(--surface-2)', color: 'var(--text)', borderRadius: 999, padding: '3px 11px', marginBottom: 8 }}>
                        {all ? `Hide all exemplars in this section from ${first}` : `📤 Reveal all ${keys.length} exemplars in this section to ${first}`}
                      </button>
                    )
                  })()}
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
