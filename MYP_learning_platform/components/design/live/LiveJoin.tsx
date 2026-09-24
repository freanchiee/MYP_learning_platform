'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useLiveRow, useLiveTable, shuffle, useLiveDraftReporter } from '@/lib/design-live/hooks'
import { worksheetSectionPct } from '@/lib/design-live/scoring'
import type { LiveActivityDefinition, McqStage, WorksheetStage, OpenIdeasStage, WorksheetField } from '@/data/design/live/types'
import type { LiveSessionRow, LivePlayerRow, LiveGradeRow, LiveEventRow } from '@/lib/design-live/types'
import { cardStyle, btnStyle, inputStyle, pageBg, ErrorBanner, BadgeRow, MCQOptions, Avatar } from './ui'
import ChatPanel from './ChatPanel'
import { Podium } from './Podium'
import PersonaChatField from './PersonaChatField'
import PersonalityPromptField from './PersonalityPromptField'
import { getPersona } from '@/data/design/live/personas'
import { useCelebration, CelebrationOverlay } from './Celebration'

/** Case-insensitive "does this text contain this word/phrase" check used by
 *  both the keyword-celebration nudge and (loosely) nowhere else — kept
 *  here so WorksheetPlayer/OpenIdeasPlayer share one definition of match. */
function containsKeyword(text: string, keyword: string): boolean {
  return text.toLowerCase().includes(keyword.toLowerCase())
}

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
  const [profileName, setProfileName] = useState('')
  const [code, setCode] = useState(initialCode.toUpperCase())
  const [codeInput, setCodeInput] = useState(initialCode.toUpperCase())
  const [sessionExists, setSessionExists] = useState<boolean | null>(null)
  const [session, setSession] = useState<LiveSessionRow | null>(null)
  const [players, setPlayers] = useState<LivePlayerRow[]>([])
  const [me, setMe] = useState<LivePlayerRow | null>(null)
  const [myGrade, setMyGrade] = useState<LiveGradeRow | null>(null)
  const [nameInput, setNameInput] = useState('')
  const [apiError, setApiError] = useState<string | null>(null)
  const [joining, setJoining] = useState(false)

  useEffect(() => {
    const sb = createClient()
    sb.auth.getUser().then(async ({ data }) => {
      setUserId(data.user?.id ?? null)
      setUserEmail(data.user?.email?.split('@')[0] || '')
      if (data.user?.id) {
        const { data: profile } = await sb.from('profiles').select('name').eq('id', data.user.id).maybeSingle()
        if (profile?.name?.trim()) setProfileName(profile.name.trim())
      }
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

  // A teacher's quick reaction (see ui.tsx QuickReactButton) is a
  // live_events row addressed to this player — pick up NEW ones (not the
  // ones already sitting there from before this page loaded) and turn each
  // into a confetti burst.
  const { bursts, celebrate } = useCelebration()
  const [reactionEvents, setReactionEvents] = useState<LiveEventRow[]>([])
  const seenReactionIds = useRef<Set<string> | null>(null)
  useLiveTable<LiveEventRow>('live_events', 'player_id', me?.id, (rows) => setReactionEvents(rows.filter((r) => r.type === 'reaction')), !!me)
  useEffect(() => {
    if (seenReactionIds.current === null) {
      // First load: treat every reaction already on record as already seen,
      // so reopening the page doesn't replay every past "nice work!" as new confetti.
      seenReactionIds.current = new Set(reactionEvents.map((r) => r.id))
      return
    }
    reactionEvents.forEach((r) => {
      if (!seenReactionIds.current!.has(r.id)) {
        seenReactionIds.current!.add(r.id)
        celebrate(r.payload?.emoji ? `${r.payload.emoji} Your teacher noticed your work!` : `💌 ${r.payload?.text || 'Your teacher sent you a note!'}`)
      }
    })
  }, [reactionEvents, celebrate])

  // Real name, not a freely-typed one, once the account has one set. The
  // (session_code, user_id) unique constraint is what actually makes "one
  // account, one player row per session" bulletproof — a double-click, a
  // race between two tabs, or revisiting the join screen can never create
  // a second row. Plain INSERT (not upsert) on purpose: an upsert would
  // silently reset an existing player's points/badges/answers back to
  // defaults on every conflict, wiping a returning/reconnecting student's
  // progress. On a genuine conflict (code 23505) we instead just fetch
  // their existing row — no data lost, no duplicate created.
  const join = async () => {
    const name = (profileName || nameInput).trim()
    if (!name || !userId || !code || joining) return
    setJoining(true)
    const sb = createClient()
    const team = activity.teams ? pickTeam(players, activity.teams.length) : null
    const { data, error } = await sb
      .from('live_players')
      .insert({ session_code: code, user_id: userId, name, team, points: 0, badges: [], data: {} })
      .select()
      .maybeSingle()
    if (!error) {
      setJoining(false)
      if (data) setMe(data as LivePlayerRow)
      return
    }
    if (error.code === '23505') {
      const { data: existing, error: fetchErr } = await sb.from('live_players').select('*').eq('session_code', code).eq('user_id', userId).maybeSingle()
      setJoining(false)
      if (fetchErr) setApiError(fetchErr.message)
      else if (existing) setMe(existing as LivePlayerRow)
      return
    }
    setJoining(false)
    setApiError(error.message)
  }

  const patchMyData = async (stageKey: string, patch: Record<string, any>) => {
    if (!me) return
    const sb = createClient()
    const nextData = { ...me.data, [stageKey]: { ...(me.data?.[stageKey] || {}), ...patch } }
    setMe({ ...me, data: nextData })
    const { error } = await sb.from('live_players').update({ data: nextData }).eq('id', me.id)
    if (error) setApiError(error.message)
  }

  // Same idea as patchMyData but merges at the TOP of `data` (not nested
  // under a stage key) — used for the transient "what am I typing right
  // now" draft, which isn't per-stage state a host should grade, just a
  // live preview.
  const patchMyRawData = (patch: Record<string, any>) => {
    if (!me) return
    const sb = createClient()
    const nextData = { ...me.data, ...patch }
    sb.from('live_players').update({ data: nextData }).eq('id', me.id).then(({ error }) => {
      if (error) console.error('live: failed to sync draft:', error.message)
    })
  }
  const reportDraft = useLiveDraftReporter(patchMyRawData)

  const addPoints = async (delta: number) => {
    if (!me || !delta) return
    const sb = createClient()
    await sb.from('live_players').update({ points: me.points + delta }).eq('id', me.id)
  }

  if (userId === null) {
    // Send them to sign in (or create an account — the login page's OTP
    // flow does both, there's no separate signup) with `next` pointing
    // right back at THIS join link, so accepting a shared code doesn't
    // require the student to already have an account or re-find the link
    // afterwards.
    const next = typeof window !== 'undefined' ? window.location.pathname + window.location.search : `/design/live/${activity.id}${code ? `?s=${code}` : ''}`
    return (
      <div style={pageBg(activity.theme)}>
        <div style={{ ...cardStyle(activity.theme.accent), maxWidth: 400, margin: '80px auto', textAlign: 'center' }}>
          <div style={{ fontSize: 32 }}>{activity.icon}</div>
          <h2 style={{ margin: '6px 0 4px' }}>{activity.title}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 13.5, marginBottom: 14 }}>
            Sign in — or create a free account, it&apos;s the same step — to join this live class. You&apos;ll land right back on this join link afterwards.
          </p>
          <Link href={`/login?next=${encodeURIComponent(next)}`} style={{ ...btnStyle(activity.theme.accent, true, true), width: '100%', boxSizing: 'border-box', display: 'block', textDecoration: 'none' }}>
            Sign in to join →
          </Link>
        </div>
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
    const nameLocked = !!profileName
    return (
      <div style={pageBg(activity.theme)}>
        <div style={{ ...cardStyle(activity.theme.accent), maxWidth: 380, margin: '60px auto', textAlign: 'center' }}>
          <div style={{ fontSize: 32 }}>{activity.icon}</div>
          <h2>{activity.title}</h2>
          <div style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 10 }}>Session {code}</div>
          <ErrorBanner message={apiError} onClose={() => setApiError(null)} />
          <input
            value={nameLocked ? profileName : nameInput || userEmail}
            disabled={nameLocked}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Your name"
            style={{ ...inputStyle, opacity: nameLocked ? 0.75 : 1 }}
            onKeyDown={(e) => e.key === 'Enter' && join()}
          />
          <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
            {nameLocked ? "This is your account's name — teachers see who you really are." : 'Set your name in Settings to lock it here.'}
          </div>
          <button onClick={join} disabled={joining} style={{ ...btnStyle('#1FA98A', true), marginTop: 12, width: '100%' }}>
            {joining ? 'Joining…' : 'Join the class →'}
          </button>
        </div>
      </div>
    )
  }

  const team = activity.teams && me.team != null ? activity.teams[me.team] : null
  const stage = activity.stages[session.stage_idx]

  // Wide, single-focus (mcq/openIdeas/grading) stages read best in a
  // comfortable column even on a laptop-wide screen — the shell itself
  // goes full-bleed, but a single question or prompt shouldn't stretch to
  // fill 1200px. Worksheet/ended stages have genuinely more content and
  // use the full shell width (with their own responsive grids inside).
  const stageIsNarrow = session.status !== 'active' || stage?.type === 'mcq' || stage?.type === 'openIdeas' || stage?.type === 'grading'

  return (
    <div style={pageBg(activity.theme)}>
      <div style={{ maxWidth: 'min(1180px, 94vw)', margin: '0 auto', display: 'grid', gap: 18 }}>
        <div style={{ maxWidth: 480, width: '100%', margin: '0 auto', textAlign: 'center', color: '#fff', display: 'grid', justifyItems: 'center', gap: 6 }}>
          <Avatar seed={me.id} size={56} />
          <div style={{ fontWeight: 800 }}>
            {team ? `${team.icon} ${me.name} · ${team.name}` : `👋 ${me.name}`}
          </div>
          {!activity.teams && <div style={{ fontWeight: 800 }}>⭐ {me.points} pts</div>}
          <Link href="/design/live/history" style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>
            📜 My history
          </Link>
        </div>

        <div style={{ maxWidth: stageIsNarrow ? 560 : '100%', width: '100%', margin: '0 auto', display: 'grid', gap: 14 }}>
          <BadgeRow badges={me.badges} />
          <ErrorBanner message={apiError} onClose={() => setApiError(null)} />

          <StudentChatToggle sessionCode={code} me={me} accent={activity.theme.accent} />

          {session.status === 'lobby' && (
            <div style={{ ...cardStyle('#1FA98A'), textAlign: 'center' }}>
              You&apos;re in! Waiting for your teacher to start… ({players.length} joined)
            </div>
          )}

          {session.status === 'active' && stage?.type === 'mcq' && (
            <McqPlayer activity={activity} stage={stage} session={session} me={me} patchMyData={patchMyData} addPoints={addPoints} />
          )}
          {session.status === 'active' && stage?.type === 'worksheet' && (
            <WorksheetPlayer stage={stage} me={me} sessionCode={code} patchMyData={patchMyData} reportDraft={reportDraft} celebrate={celebrate} />
          )}
          {session.status === 'active' && stage?.type === 'openIdeas' && (
            <OpenIdeasPlayer activity={activity} stage={stage} session={session} me={me} patchMyData={patchMyData} reportDraft={reportDraft} celebrate={celebrate} />
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
            <div style={{ display: 'grid', gap: 14 }}>
              <div style={{ ...cardStyle('#FFCF3F'), textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 800 }}>🏆 Final results</div>
              </div>
              {activity.teams ? (
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(140px, 1fr))`, gap: 10 }}>
                  {activity.teams.map((t, ti) => (
                    <div key={t.name} style={{ ...cardStyle(t.color), textAlign: 'center', border: me.team === ti ? '2.5px solid #FFCF3F' : undefined }}>
                      <div style={{ fontWeight: 800, color: t.color }}>
                        {t.icon} {t.name}
                      </div>
                      <div style={{ fontSize: 24, fontWeight: 800 }}>{session.state?.teamScores?.[ti] || 0}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <Podium entries={[...players].sort((a, b) => b.points - a.points).map((p) => ({ id: p.id, name: p.name, points: p.points }))} accent={activity.theme.accent} youId={me.id} />
              )}
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
      <CelebrationOverlay bursts={bursts} />
    </div>
  )
}

/** A floating chat bubble (bottom-left, fixed) instead of an inline banner
 *  at the top of the stage — it shouldn't compete for space with the
 *  activity itself, and `position: fixed` means its place in the render
 *  tree doesn't matter for layout. */
function StudentChatToggle({ sessionCode, me, accent }: { sessionCode: string; me: LivePlayerRow; accent: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ position: 'fixed', left: 16, bottom: 16, zIndex: 45, display: 'grid', gap: 8, justifyItems: 'start' }}>
      {open && (
        <div style={{ width: 'min(320px, calc(100vw - 32px))' }}>
          <ChatPanel sessionCode={sessionCode} playerId={me.id} playerName={me.name} asHost={false} accent={accent} />
        </div>
      )}
      <button onClick={() => setOpen(!open)} style={{ ...btnStyle(accent, true), borderRadius: 999, padding: '10px 16px', fontSize: 13, boxShadow: '3px 3px 0 var(--text)' }}>
        {open ? '✕ Close chat' : '💬 Chat with your teacher'}
      </button>
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

function WorksheetPlayer({
  stage,
  me,
  sessionCode,
  patchMyData,
  reportDraft,
  celebrate,
}: {
  stage: WorksheetStage
  me: LivePlayerRow
  sessionCode: string
  patchMyData: (stageKey: string, patch: Record<string, any>) => void
  reportDraft: (stageKey: string, text: string, sectionKey?: string) => void
  celebrate: (label: string) => void
}) {
  const [openSection, setOpenSection] = useState<string | undefined>(stage.sections[0]?.key)
  const [drafts, setDrafts] = useState<Record<string, Record<string, any>>>(() =>
    Object.fromEntries(stage.sections.map((s) => [s.key, me.data?.[stage.key]?.[s.key] || {}]))
  )
  const [savedFlash, setSavedFlash] = useState<string | null>(null)
  // Which "sectionKey.fieldKey.keyword" combos have already fired their
  // confetti burst this session, so re-typing over the same keyword (or
  // deleting and retyping it) doesn't spam the celebration on every keystroke.
  const celebratedRef = useRef<Set<string>>(new Set())

  const updateField = (sectionKey: string, fieldKey: string, value: any) => {
    setDrafts((d) => ({ ...d, [sectionKey]: { ...d[sectionKey], [fieldKey]: value } }))
    if (typeof value === 'string' && value.trim()) {
      reportDraft(stage.key, value, sectionKey)
      const field = stage.sections.find((s) => s.key === sectionKey)?.fields.find((f) => f.key === fieldKey)
      field?.celebrateKeywords?.forEach((kw) => {
        const id = `${sectionKey}.${fieldKey}.${kw.toLowerCase()}`
        if (!celebratedRef.current.has(id) && containsKeyword(value, kw)) {
          celebratedRef.current.add(id)
          celebrate(`⭐ Nice! You mentioned "${kw}"`)
        }
      })
    }
  }
  const saveSection = (sectionKey: string) => {
    patchMyData(stage.key, { [sectionKey]: drafts[sectionKey] })
    setSavedFlash(sectionKey)
    setTimeout(() => setSavedFlash(null), 1200)
  }
  // Persona chat messages persist immediately (not gated behind the
  // section's Save button) — losing a saved conversation because a
  // student navigated away before clicking Save would be a bad time.
  const persistField = (sectionKey: string, fieldKey: string, value: any) => {
    patchMyData(stage.key, { [sectionKey]: { ...drafts[sectionKey], [fieldKey]: value } })
  }

  // Which section+field (if any) holds this stage's personaChat field —
  // most activities have at most one. Once a character's picked, a
  // floating chat bubble surfaces it from every OTHER section (e.g. the
  // empathy map) so a student never has to leave what they're filling in
  // just to go check what the persona said.
  const personaField = useMemo(() => {
    for (const s of stage.sections) {
      const f = s.fields.find((f) => f.type === 'personaChat')
      if (f) return { sectionKey: s.key, fieldKey: f.key }
    }
    return null
  }, [stage])
  const personaValue = personaField ? drafts[personaField.sectionKey]?.[personaField.fieldKey] : undefined

  // Sections that are open render "wide" (span every column) since they
  // hold the actual fields — a full grid width in a laptop browser instead
  // of squeezing a table/chat into a narrow single column. Collapsed
  // sections are compact and flow into whatever columns are left.
  return (
    <>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, alignItems: 'start' }}>
      {stage.sections.map((s) => {
        const pct = worksheetSectionPct(s, drafts[s.key])
        const open = openSection === s.key
        return (
          <div key={s.key} style={{ ...cardStyle(pct >= 70 ? '#1FA98A' : 'var(--border)'), gridColumn: open ? '1 / -1' : undefined }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => setOpenSection(open ? undefined : s.key)}>
              <div style={{ fontWeight: 800 }}>
                {s.icon} {s.label}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{pct}%</div>
            </div>
            {open && (
              <div style={{ marginTop: 10, display: 'grid', gap: 10, maxWidth: s.fields.some((f) => f.type === 'personaChat') ? 960 : 720 }}>
                {s.blurb && <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{s.blurb}</div>}
                {s.fields.map((f) => (
                  <WorksheetFieldInput
                    key={f.key}
                    field={f}
                    value={drafts[s.key]?.[f.key]}
                    onChange={(v) => updateField(s.key, f.key, v)}
                    onPersist={(v) => persistField(s.key, f.key, v)}
                    onDraft={(text) => reportDraft(stage.key, text, s.key)}
                    sessionCode={sessionCode}
                    playerId={me.id}
                  />
                ))}
                <button onClick={() => saveSection(s.key)} style={{ ...btnStyle('#1FA98A', true), justifySelf: 'start' }}>
                  {savedFlash === s.key ? '✅ Saved!' : '💾 Save'}
                </button>
              </div>
            )}
          </div>
        )
      })}
    </div>
    {personaField && openSection !== personaField.sectionKey && (
      <FloatingPersonaChat
        value={personaValue}
        onChange={(v) => updateField(personaField.sectionKey, personaField.fieldKey, v)}
        onPersist={(v) => persistField(personaField.sectionKey, personaField.fieldKey, v)}
        onDraft={(text) => reportDraft(stage.key, text, personaField.sectionKey)}
        sessionCode={sessionCode}
        playerId={me.id}
      />
    )}
    </>
  )
}

/** A collapsed bubble docked to the right edge — expand it to keep talking
 *  to the persona while filling in any OTHER section (the empathy map,
 *  most often) without switching back to the Interview section. Renders
 *  nothing until a character has actually been picked. */
function FloatingPersonaChat({
  value,
  onChange,
  onPersist,
  onDraft,
  sessionCode,
  playerId,
}: {
  value: { characterId: string; messages: unknown[] } | undefined
  onChange: (v: any) => void
  onPersist: (v: any) => void
  onDraft: (text: string) => void
  sessionCode: string
  playerId: string
}) {
  const [open, setOpen] = useState(false)
  const character = value?.characterId ? getPersona(value.characterId) : undefined
  if (!character) return null
  return (
    <div style={{ position: 'fixed', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 44, display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start', gap: 8 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ ...btnStyle('#5C3FD6', true), borderRadius: 999, padding: '8px 14px', fontSize: 12.5, display: 'flex', alignItems: 'center', gap: 6, boxShadow: '3px 3px 0 var(--text)' }}
      >
        <Avatar seed={character.id} size={20} />
        {open ? '✕ Close' : `Chat with ${character.name}`}
      </button>
      {open && (
        <div style={{ width: 'min(340px, calc(100vw - 32px))', maxHeight: '75vh', overflowY: 'auto' }}>
          <PersonaChatField value={value as any} onChange={onChange} onPersist={onPersist} onDraft={onDraft} sessionCode={sessionCode} playerId={playerId} />
        </div>
      )}
    </div>
  )
}

function WorksheetFieldInput({
  field,
  value,
  onChange,
  onPersist,
  onDraft,
  sessionCode,
  playerId,
}: {
  field: WorksheetField
  value: any
  onChange: (v: any) => void
  onPersist?: (v: any) => void
  onDraft?: (text: string) => void
  sessionCode?: string
  playerId?: string
}) {
  if (field.type === 'personaChat') {
    return <PersonaChatField value={value} onChange={onChange} onPersist={onPersist!} onDraft={onDraft!} sessionCode={sessionCode!} playerId={playerId!} />
  }
  if (field.type === 'personalityPrompt') {
    return <PersonalityPromptField value={value} onChange={onChange} onPersist={onPersist ?? onChange} />
  }
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
  reportDraft,
  celebrate,
}: {
  activity: LiveActivityDefinition
  stage: OpenIdeasStage
  session: LiveSessionRow
  me: LivePlayerRow
  patchMyData: (stageKey: string, patch: Record<string, any>) => void
  reportDraft: (stageKey: string, text: string) => void
  celebrate: (label: string) => void
}) {
  const st = session.state?.[stage.key] || { ideaIndex: 0, locked: false, constraintIdx: null }
  const prompt = stage.prompts[st.ideaIndex]
  const mine = me.data?.[stage.key]?.[st.ideaIndex]
  const [text, setText] = useState(mine?.text || '')
  const [flash, setFlash] = useState(false)
  const celebratedRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    setText(mine?.text || '')
  }, [st.ideaIndex])

  const onType = (v: string) => {
    setText(v)
    if (v.trim()) {
      reportDraft(stage.key, v)
      prompt.celebrateKeywords?.forEach((kw) => {
        const id = `${st.ideaIndex}.${kw.toLowerCase()}`
        if (!celebratedRef.current.has(id) && containsKeyword(v, kw)) {
          celebratedRef.current.add(id)
          celebrate(`⭐ Nice! You mentioned "${kw}"`)
        }
      })
    }
  }

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
      <input value={text} disabled={st.locked} onChange={(e) => onType(e.target.value)} placeholder="Your idea, in a few words…" style={inputStyle} onKeyDown={(e) => e.key === 'Enter' && submit()} />
      <button onClick={submit} disabled={st.locked} style={btnStyle('#1FA98A', true, true)}>
        {flash ? '✅ Saved!' : mine ? 'Update my idea' : 'Submit my idea'}
      </button>
    </div>
  )
}
