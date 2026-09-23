'use client'

import { useEffect, useMemo, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useLiveRow, useLiveTable, shuffle } from '@/lib/design-live/hooks'
import { worksheetSectionPct } from '@/lib/design-live/scoring'
import type { LiveActivityDefinition, McqStage, WorksheetStage, OpenIdeasStage, WorksheetField } from '@/data/design/live/types'
import type { LiveSessionRow, LivePlayerRow, LiveGradeRow } from '@/lib/design-live/types'
import { cardStyle, btnStyle, inputStyle, pageBg, ErrorBanner, BadgeRow, MCQOptions, Avatar } from './ui'

function pickTeam(players: LivePlayerRow[], teamCount: number): number {
  const counts = new Array(teamCount).fill(0)
  players.forEach((p) => { if (p.team != null) counts[p.team]++ })
  let best = 0
  counts.forEach((c, i) => { if (c < counts[best]) best = i })
  return best
}

export default function LiveJoin({ activity, initialCode }: { activity: LiveActivityDefinition; initialCode: string }) {
  const [userId, setUserId] = useState<string | null | undefined>(undefined)
  const [userEmail, setUserEmail] = useState('')
  const [code, setCode] = useState(initialCode.toUpperCase())
  const [codeInput, setCodeInput] = useState(initialCode.toUpperCase())
  const [sessionExists, setSessionExists] = useState<boolean | null>(null)
  const [session, setSession] = useState<LiveSessionRow | null>(null)
  const [players, setPlayers] = useState<LivePlayerRow[]>([])
  const [me, setMe] = useState<LivePlayerRow | null>(null)
  const [myGrade, setMyGrade] = useState<LiveGradeRow | null>(null)
  const [nameInput, setNameInput] = useState('')
  const [apiError, setApiError] = useState<string | null>(null)

  useEffect(() => {
    const sb = createClient()
    sb.auth.getUser().then(({ data }) => {
      setUserId(data.user?.id ?? null)
      setUserEmail(data.user?.email?.split('@')[0] || '')
    })
  }, [])

  useEffect(() => {
    if (!code) return
    ;(async () => {
      const sb = createClient()
      const { data } = await sb.from('live_sessions').select('code').eq('code', code).eq('activity_id', activity.id).maybeSingle()
      setSessionExists(!!data)
    })()
  }, [code, activity.id])

  useLiveRow<LiveSessionRow>('live_sessions', 'code', code, setSession, !!code)
  useLiveTable<LivePlayerRow>('live_players', 'session_code', code, setPlayers, !!code)
  useLiveRow<LiveGradeRow>('live_grades', 'player_id', me?.id, setMyGrade, !!me)

  useEffect(() => {
    if (userId && players.length) setMe(players.find((p) => p.user_id === userId) || null)
  }, [players, userId])

  const join = async () => {
    if (!nameInput.trim() || !userId || !code) return
    const sb = createClient()
    const team = activity.teams ? pickTeam(players, activity.teams.length) : null
    const { error } = await sb.from('live_players').insert({ session_code: code, user_id: userId, name: nameInput.trim(), team, points: 0, badges: [], data: {} })
    if (error) {
      setApiError(error.message)
      return
    }
  }

  const patchMyData = async (stageKey: string, patch: Record<string, any>) => {
    if (!me) return
    const sb = createClient()
    const nextData = { ...me.data, [stageKey]: { ...(me.data?.[stageKey] || {}), ...patch } }
    setMe({ ...me, data: nextData })
    const { error } = await sb.from('live_players').update({ data: nextData }).eq('id', me.id)
    if (error) setApiError(error.message)
  }

  const addPoints = async (delta: number) => {
    if (!me || !delta) return
    const sb = createClient()
    await sb.from('live_players').update({ points: me.points + delta }).eq('id', me.id)
  }

  if (userId === null) {
    return (
      <div style={pageBg(activity.theme)}>
        <div style={{ ...cardStyle(), maxWidth: 420, margin: '80px auto', textAlign: 'center' }}>Sign in to join this live class.</div>
      </div>
    )
  }

  if (!code) {
    return (
      <div style={pageBg(activity.theme)}>
        <div style={{ ...cardStyle(activity.theme.accent), maxWidth: 380, margin: '60px auto', textAlign: 'center' }}>
          <div style={{ fontSize: 32 }}>{activity.icon}</div>
          <h2>{activity.title}</h2>
          <input value={codeInput} onChange={(e) => setCodeInput(e.target.value.toUpperCase())} placeholder="Session code" style={{ ...inputStyle, textAlign: 'center', fontSize: 20, fontWeight: 800, letterSpacing: '0.1em' }} />
          <button onClick={() => setCode(codeInput.trim())} style={{ ...btnStyle(activity.theme.accent, true), marginTop: 12, width: '100%' }}>
            Continue
          </button>
        </div>
      </div>
    )
  }
  if (sessionExists === false) {
    return (
      <div style={pageBg(activity.theme)}>
        <div style={{ ...cardStyle('#D6425E'), maxWidth: 380, margin: '60px auto', textAlign: 'center' }}>
          Session &quot;{code}&quot; not found. Double-check the code with your teacher.
        </div>
      </div>
    )
  }
  if (!session) {
    return (
      <div style={pageBg(activity.theme)}>
        <p style={{ textAlign: 'center', color: '#fff' }}>Connecting…</p>
      </div>
    )
  }
  if (!me) {
    return (
      <div style={pageBg(activity.theme)}>
        <div style={{ ...cardStyle(activity.theme.accent), maxWidth: 380, margin: '60px auto', textAlign: 'center' }}>
          <div style={{ fontSize: 32 }}>{activity.icon}</div>
          <h2>{activity.title}</h2>
          <div style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 10 }}>Session {code}</div>
          <ErrorBanner message={apiError} onClose={() => setApiError(null)} />
          <input value={nameInput || userEmail} onChange={(e) => setNameInput(e.target.value)} placeholder="Your name" style={inputStyle} onKeyDown={(e) => e.key === 'Enter' && join()} />
          <button onClick={join} style={{ ...btnStyle('#1FA98A', true), marginTop: 12, width: '100%' }}>
            Join the class →
          </button>
        </div>
      </div>
    )
  }

  const team = activity.teams && me.team != null ? activity.teams[me.team] : null
  const stage = activity.stages[session.stage_idx]

  return (
    <div style={pageBg(activity.theme)}>
      <div style={{ maxWidth: 480, margin: '0 auto', display: 'grid', gap: 14 }}>
        <div style={{ textAlign: 'center', color: '#fff', display: 'grid', justifyItems: 'center', gap: 6 }}>
          <Avatar seed={me.id} size={56} />
          <div style={{ fontWeight: 800 }}>
            {team ? `${team.icon} ${me.name} · ${team.name}` : `👋 ${me.name}`}
          </div>
          {!activity.teams && <div style={{ fontWeight: 800 }}>⭐ {me.points} pts</div>}
        </div>
        <BadgeRow badges={me.badges} />
        <ErrorBanner message={apiError} onClose={() => setApiError(null)} />

        {session.status === 'lobby' && (
          <div style={{ ...cardStyle('#1FA98A'), textAlign: 'center' }}>
            You&apos;re in! Waiting for your teacher to start… ({players.length} joined)
          </div>
        )}

        {session.status === 'active' && stage?.type === 'mcq' && (
          <McqPlayer activity={activity} stage={stage} session={session} me={me} patchMyData={patchMyData} addPoints={addPoints} />
        )}
        {session.status === 'active' && stage?.type === 'worksheet' && <WorksheetPlayer stage={stage} me={me} patchMyData={patchMyData} />}
        {session.status === 'active' && stage?.type === 'openIdeas' && (
          <OpenIdeasPlayer activity={activity} stage={stage} session={session} me={me} patchMyData={patchMyData} />
        )}
        {session.status === 'active' && stage?.type === 'grading' && (
          <div style={cardStyle(activity.theme.accent)}>
            {myGrade?.graded ? (
              <div>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>Your feedback</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                  {Object.entries(myGrade.scores).map(([k, v]) => (
                    <span key={k} style={{ fontSize: 12, fontWeight: 700, background: 'var(--surface-2)', borderRadius: 8, padding: '4px 8px' }}>
                      {k}: {v ?? '–'}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: 13 }}>{myGrade.feedback || 'No written feedback yet.'}</div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Your teacher is reviewing everyone&apos;s work — check back soon.</div>
            )}
          </div>
        )}

        {session.status === 'ended' && (
          <div style={{ display: 'grid', gap: 10 }}>
            <div style={{ ...cardStyle('#FFCF3F'), textAlign: 'center' }}>Nice work! The class has ended — check the big screen for final results.</div>
            {activity.debriefQuestions && (
              <div style={cardStyle('var(--accent-2)')}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>💬 Talk it through</div>
                <div style={{ display: 'grid', gap: 8 }}>
                  {activity.debriefQuestions.map((q, i) => (
                    <div key={i} style={{ fontSize: 13.5, background: 'var(--surface-2)', borderRadius: 8, padding: '8px 10px', border: '1.5px solid var(--border)' }}>
                      {q}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function McqPlayer({
  activity,
  stage,
  session,
  me,
  patchMyData,
  addPoints,
}: {
  activity: LiveActivityDefinition
  stage: McqStage
  session: LiveSessionRow
  me: LivePlayerRow
  patchMyData: (stageKey: string, patch: Record<string, any>) => void
  addPoints: (delta: number) => void
}) {
  const answers: Record<number, { choiceIdx: number; correct: boolean }> = me.data?.[stage.key]?.answers || {}
  const points = stage.pointsPerCorrect ?? 10

  const answeredCount = Object.keys(answers).length
  const selfPacedQIdx = Math.min(answeredCount, stage.questions.length - 1)
  const st = session.state?.[stage.key] || { mcqIndex: 0, locked: false, revealed: false }
  const activeQIdx = stage.pacing === 'self-paced' ? selfPacedQIdx : st.mcqIndex
  const q = stage.questions[activeQIdx]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const order = useMemo(() => shuffle(q.options.map((text, i) => ({ text, i }))), [activeQIdx, q.options])

  if (stage.pacing === 'self-paced') {
    const done = answeredCount >= stage.questions.length
    const qIdx = selfPacedQIdx
    const already = answers[qIdx]

    if (done) {
      return (
        <div style={{ ...cardStyle('#1FA98A'), textAlign: 'center' }}>
          ✅ You&apos;ve answered all {stage.questions.length} questions. {Object.values(answers).filter((a) => a.correct).length}/{stage.questions.length} correct.
        </div>
      )
    }

    const pick = (choiceIdx: number) => {
      if (already) return
      const correct = choiceIdx === q.correct
      patchMyData(stage.key, { answers: { ...answers, [qIdx]: { choiceIdx, correct } } })
      addPoints(correct ? points : 0)
    }

    return (
      <div style={{ display: 'grid', gap: 10 }}>
        <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
          Question {qIdx + 1} of {stage.questions.length}
        </div>
        {q.context && (
          <div style={{ ...cardStyle(activity.theme.accent), textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
              {q.icon} {q.context}
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4 }}>{q.q}</div>
          </div>
        )}
        {!q.context && (
          <div style={{ ...cardStyle(activity.theme.accent), textAlign: 'center', fontSize: 15, fontWeight: 700 }}>{q.q}</div>
        )}
        <MCQOptions order={order} disabled={!!already} selectedIdx={already?.choiceIdx} onPick={pick} correctIdx={q.correct} revealed={!!already} />
      </div>
    )
  }

  // host-paced
  const mine = answers[st.mcqIndex]

  const pick = (choiceIdx: number) => {
    if (st.locked || mine) return
    const correct = choiceIdx === q.correct
    patchMyData(stage.key, { answers: { ...answers, [st.mcqIndex]: { choiceIdx, correct } } })
  }

  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
        Question {st.mcqIndex + 1} of {stage.questions.length}
      </div>
      <div style={{ ...cardStyle(activity.theme.accent), textAlign: 'center' }}>
        {q.icon && <div style={{ fontSize: 30 }}>{q.icon}</div>}
        <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>{q.q}</div>
      </div>
      {st.locked && !mine && <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#D6425E' }}>🔒 Time&apos;s up — your teacher has locked this round.</div>}
      <MCQOptions order={order} disabled={st.locked || !!mine} selectedIdx={mine?.choiceIdx} onPick={pick} correctIdx={q.correct} revealed={!!st.revealed} />
    </div>
  )
}

function WorksheetPlayer({ stage, me, patchMyData }: { stage: WorksheetStage; me: LivePlayerRow; patchMyData: (stageKey: string, patch: Record<string, any>) => void }) {
  const [openSection, setOpenSection] = useState<string | undefined>(stage.sections[0]?.key)
  const [drafts, setDrafts] = useState<Record<string, Record<string, any>>>(() =>
    Object.fromEntries(stage.sections.map((s) => [s.key, me.data?.[stage.key]?.[s.key] || {}]))
  )
  const [savedFlash, setSavedFlash] = useState<string | null>(null)

  const updateField = (sectionKey: string, fieldKey: string, value: any) => {
    setDrafts((d) => ({ ...d, [sectionKey]: { ...d[sectionKey], [fieldKey]: value } }))
  }
  const saveSection = (sectionKey: string) => {
    patchMyData(stage.key, { [sectionKey]: drafts[sectionKey] })
    setSavedFlash(sectionKey)
    setTimeout(() => setSavedFlash(null), 1200)
  }

  return (
    <div style={{ display: 'grid', gap: 10 }}>
      {stage.sections.map((s) => {
        const pct = worksheetSectionPct(s, drafts[s.key])
        const open = openSection === s.key
        return (
          <div key={s.key} style={cardStyle(pct >= 70 ? '#1FA98A' : 'var(--border)')}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => setOpenSection(open ? undefined : s.key)}>
              <div style={{ fontWeight: 800 }}>
                {s.icon} {s.label}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{pct}%</div>
            </div>
            {open && (
              <div style={{ marginTop: 10, display: 'grid', gap: 10 }}>
                {s.blurb && <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{s.blurb}</div>}
                {s.fields.map((f) => (
                  <WorksheetFieldInput key={f.key} field={f} value={drafts[s.key]?.[f.key]} onChange={(v) => updateField(s.key, f.key, v)} />
                ))}
                <button onClick={() => saveSection(s.key)} style={btnStyle('#1FA98A', true)}>
                  {savedFlash === s.key ? '✅ Saved!' : '💾 Save'}
                </button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function WorksheetFieldInput({ field, value, onChange }: { field: WorksheetField; value: any; onChange: (v: any) => void }) {
  if (field.type === 'text') {
    return (
      <label style={{ display: 'grid', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
        {field.label}
        <input value={value || ''} placeholder={field.placeholder} onChange={(e) => onChange(e.target.value)} style={inputStyle} />
      </label>
    )
  }
  if (field.type === 'textarea') {
    return (
      <label style={{ display: 'grid', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
        {field.label}
        {field.hint && <span style={{ fontWeight: 400, fontSize: 11 }}>{field.hint}</span>}
        <textarea value={value || ''} placeholder={field.placeholder} onChange={(e) => onChange(e.target.value)} style={{ ...inputStyle, minHeight: 70 }} />
      </label>
    )
  }
  if (field.type === 'select') {
    return (
      <label style={{ display: 'grid', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
        {field.label}
        <select value={value || ''} onChange={(e) => onChange(e.target.value)} style={inputStyle}>
          <option value="">–</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
    )
  }
  // table
  const rows: Record<string, string>[] = Array.isArray(value) && value.length ? value : Array.from({ length: field.minRows || 2 }, () => ({}))
  const setRow = (i: number, colKey: string, v: string) => {
    const next = [...rows]
    next[i] = { ...next[i], [colKey]: v }
    onChange(next)
  }
  const addRow = () => onChange([...rows, {}])
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 4 }}>{field.label}</div>
      <div style={{ display: 'grid', gap: 8 }}>
        {rows.map((row, i) => (
          <div key={i} style={{ display: 'grid', gap: 4, border: '1.5px solid var(--border)', borderRadius: 8, padding: 8 }}>
            {field.columns?.map((c) => (
              <input key={c.key} value={row[c.key] || ''} placeholder={c.placeholder || c.label} onChange={(e) => setRow(i, c.key, e.target.value)} style={{ ...inputStyle, fontSize: 12.5 }} />
            ))}
          </div>
        ))}
      </div>
      <button onClick={addRow} style={{ ...btnStyle('var(--surface)'), marginTop: 6, fontSize: 12 }}>
        + Add row
      </button>
    </div>
  )
}

function OpenIdeasPlayer({
  activity,
  stage,
  session,
  me,
  patchMyData,
}: {
  activity: LiveActivityDefinition
  stage: OpenIdeasStage
  session: LiveSessionRow
  me: LivePlayerRow
  patchMyData: (stageKey: string, patch: Record<string, any>) => void
}) {
  const st = session.state?.[stage.key] || { ideaIndex: 0, locked: false, constraintIdx: null }
  const prompt = stage.prompts[st.ideaIndex]
  const mine = me.data?.[stage.key]?.[st.ideaIndex]
  const [text, setText] = useState(mine?.text || '')
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    setText(mine?.text || '')
  }, [st.ideaIndex])

  const submit = () => {
    if (!text.trim()) return
    patchMyData(stage.key, { [st.ideaIndex]: { text: text.trim() } })
    setFlash(true)
    setTimeout(() => setFlash(false), 1200)
  }

  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
        Prompt {st.ideaIndex + 1} of {stage.prompts.length}
      </div>
      <div style={{ ...cardStyle(activity.theme.accent), textAlign: 'center' }}>
        {prompt.icon && <div style={{ fontSize: 22 }}>{prompt.icon}</div>}
        <div style={{ fontSize: 15, fontWeight: 800 }}>{prompt.text}</div>
      </div>
      {stage.constraintCards && st.constraintIdx != null && (
        <div style={{ ...cardStyle('#D6425E'), textAlign: 'center' }}>
          <div style={{ fontWeight: 800 }}>
            {stage.constraintCards[st.constraintIdx].icon} CONSTRAINT: {stage.constraintCards[st.constraintIdx].label}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{stage.constraintCards[st.constraintIdx].text}</div>
        </div>
      )}
      {st.locked && !mine && <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#D6425E' }}>🔒 Time&apos;s up — your teacher has locked this round.</div>}
      <input value={text} disabled={st.locked} onChange={(e) => setText(e.target.value)} placeholder="Your idea, in a few words…" style={inputStyle} onKeyDown={(e) => e.key === 'Enter' && submit()} />
      <button onClick={submit} disabled={st.locked} style={btnStyle('#1FA98A', true, true)}>
        {flash ? '✅ Saved!' : mine ? 'Update my idea' : 'Submit my idea'}
      </button>
    </div>
  )
}
