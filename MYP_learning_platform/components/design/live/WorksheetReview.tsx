'use client'

import SignedThumb from './SignedThumb'
import { getProduct, isWildProduct } from '@/data/design/live/digital-products'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { fuzzyMatchPoints } from '@/lib/design-live/fuzzyMatch'
import { getPersona } from '@/data/design/live/personas'
import { getPersonality } from '@/data/design/live/personalities'
import { getOpportunity } from '@/data/design/live/opportunities'
import { getMake, isWildCard } from '@/data/design/live/makes'
import type { LiveActivityDefinition, WorksheetStage, WorksheetField, WorksheetSection } from '@/data/design/live/types'
import { chosenValues, exemplarsFor, revealKey } from '@/lib/design-live/exemplars'
import { ExemplarControls } from './ExemplarReveal'
import type { LivePlayerRow, LiveGradeRow } from '@/lib/design-live/types'
import { feedbackFor, feedbackKey } from '@/lib/design-live/sectionFeedback'
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


/** The teacher's written feedback on ONE section. Sending it tells the student, and it goes into their PDF. */
function SectionFeedbackBox({ sessionCode, player, grade, stageKey, sectionKey }: { sessionCode: string; player: LivePlayerRow; grade?: LiveGradeRow; stageKey: string; sectionKey: string }) {
  const key = feedbackKey(stageKey, sectionKey)
  const sent = feedbackFor(grade?.section_feedback, stageKey, sectionKey)
  const [text, setText] = useState(sent?.text ?? '')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState<string | null>(null)
  // Shown straight after a successful send, so the button visibly did something even before the row refreshes.
  const [justSent, setJustSent] = useState<string | null>(null)
  const seenAt: string | undefined = player.data?._feedbackSeen?.[key]
  const seen = !!sent && !!seenAt && seenAt >= sent.at
  const dirty = text.trim() !== (sent?.text ?? '')
  const send = async (value: string) => {
    setBusy(true)
    setErr(null)
    const { error } = await createClient().rpc('set_section_feedback', { p_code: sessionCode, p_player: player.id, p_key: key, p_text: value })
    setBusy(false)
    if (error) setErr('Could not save: ' + error.message)
    else if (!value.trim()) { setText(''); setJustSent('Feedback removed') }
    else {
      setJustSent(`✓ Sent to ${player.name.split(' ')[0]} at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`)
      setTimeout(() => setJustSent(null), 6000)
    }
  }
  return (
    <div style={{ marginBottom: 10, background: 'var(--accent-soft, var(--surface-2))', border: '1.5px solid var(--border-strong)', borderRadius: 10, padding: 10, display: 'grid', gap: 6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <strong style={{ fontSize: 12 }}>💬 Feedback for {player.name.split(' ')[0]} on this section</strong>
        {sent && <span style={{ fontSize: 10.5, fontWeight: 800, color: seen ? '#1FA98A' : 'var(--text-muted)' }}>{seen ? '✓ Seen by student' : `● Sent${sent.at ? ' ' + new Date(sent.at).toLocaleString([], { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : ''}, not opened yet`}</span>}
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What worked, and one thing to do next. The student is told when you send it, and it appears in their PDF."
        style={{ ...inputStyle, minHeight: 64 }}
      />
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => send(text)} disabled={busy || !text.trim() || !dirty} style={{ ...btnStyle('#5C3FD6', true), padding: '6px 14px' }}>
          {busy ? 'Sending…' : sent ? 'Update feedback' : 'Send feedback'}
        </button>
        {sent && <button onClick={() => send('')} disabled={busy} style={{ ...btnStyle('var(--text-muted)'), padding: '6px 12px' }}>Remove</button>}
        {err && <span style={{ fontSize: 11.5, color: 'var(--danger, #D64545)' }}>{err}</span>}
        {justSent && !err && <span role="status" style={{ fontSize: 12, fontWeight: 800, color: '#1FA98A' }}>{justSent}</span>}
      </div>
    </div>
  )
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
  const choices = chosenValues(cfg, player.data)
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
      <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: 980, margin: '24px 0' }}>
        <div style={cardStyle('#5C3FD6')}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800 }}>
              <Avatar seed={player.id} size={30} />
              {player.name}
              {choices.map((c) => (
                <span key={c.noun} style={{ fontSize: 11, fontWeight: 800, background: 'var(--surface-2)', border: '1.5px solid var(--border)', borderRadius: 999, padding: '2px 9px', color: 'var(--text-muted)' }}>
                  {c.noun}: {c.choice}
                </span>
              ))}
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
                    {s.fields.filter((f) => f.type !== 'gameEvidence' && f.type !== 'leadCapture').map((f) => {
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
                      if (f.type === 'checklist') {
                        const items = (data[f.key] as { label: string; have: boolean }[] | undefined) || []
                        const got = items.filter((it) => it.have).length
                        return (
                          <div key={f.key} style={{ fontSize: 12 }}>
                            <strong style={{ color: 'var(--text-muted)', fontSize: 11 }}>{f.label}</strong>
                            {items.length === 0 ? (
                              <div style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginTop: 2 }}>Nothing listed yet</div>
                            ) : (
                              <>
                                <div style={{ fontSize: 10.5, fontWeight: 800, color: got === items.length ? '#1FA98A' : 'var(--text-muted)', marginTop: 2 }}>{got}/{items.length} ready</div>
                                <ul style={{ margin: '4px 0 0', paddingLeft: 18 }}>
                                  {items.filter((it) => it.label?.trim()).map((it, i) => (
                                    <li key={i} style={{ color: it.have ? 'var(--text)' : 'var(--text-muted)' }}>{it.have ? '✅' : '◻️'} {it.label}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        )
                      }
                      if (f.type === 'image') {
                        const v = data[f.key] as { url: string; name: string }[] | undefined
                        return (
                          <div key={f.key} style={{ fontSize: 12 }}>
                            <strong style={{ color: 'var(--text-muted)', fontSize: 11 }}>{f.label}</strong>
                            {!v?.length ? (
                              <div style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginTop: 2 }}>No images uploaded yet</div>
                            ) : (
                              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                                {v.map((img, i) => (
                                  <SignedThumb key={i} url={img.url} name={img.name} style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 8, border: '1.5px solid var(--border)' }} />
                                ))}
                              </div>
                            )}
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
                          {/* the student's answer and the model answer sit side by side, so nothing needs scrolling */}
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12, alignItems: 'start', marginTop: 2 }}>
                            <div style={{ whiteSpace: 'pre-wrap', color: text ? 'var(--text)' : 'var(--text-muted)', fontStyle: text ? 'normal' : 'italic' }}>
                              {text || 'Not answered yet'}
                            </div>
                            {(f.type === 'text' || f.type === 'textarea') && (
                              <ExemplarControls resolved={resolved} noun={resolved.noun} studentName={player.name} revealed={revealed.has(rk)} busy={revealBusy} onToggle={() => toggleReveal([rk])} defaultOpen={revealed.has(rk)} />
                            )}
                          </div>
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
                  <SectionFeedbackBox sessionCode={sessionCode} player={player} grade={grade} stageKey={stage.key} sectionKey={s.key} />
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
