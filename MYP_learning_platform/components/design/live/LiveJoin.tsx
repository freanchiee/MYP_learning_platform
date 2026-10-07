'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useLiveRow, useLiveTable, shuffle, useLiveDraftReporter, useTabFocusReporter } from '@/lib/design-live/hooks'
import { worksheetSectionPct } from '@/lib/design-live/scoring'
import type { LiveActivityDefinition, LiveStage, McqStage, WorksheetStage, OpenIdeasStage, WorksheetField } from '@/data/design/live/types'
import type { LiveSessionRow, LivePlayerRow, LiveGradeRow, LiveEventRow } from '@/lib/design-live/types'
import { cardStyle, btnStyle, inputStyle, pageBg, ErrorBanner, BadgeRow, MCQOptions, Avatar } from './ui'
import ChatPanel from './ChatPanel'
import { Podium } from './Podium'
import PersonaChatField from './PersonaChatField'
import PersonalityPromptField from './PersonalityPromptField'
import OpportunityCardsField from './OpportunityCardsField'
import MakeCardsField from './MakeCardsField'
import ProductCardsField from './ProductCardsField'
import ImageUploadField from './ImageUploadField'
import WorksheetOverview, { SectionMarker, StrandBadge } from './WorksheetOverview'
import CriteriaRingCard from './CriteriaRing'
import StageFeedback from './StageFeedback'
import { StudentExemplarCard } from './ExemplarReveal'
import { exemplarsFor, revealKey } from '@/lib/design-live/exemplars'
import { feedbackOf } from '@/lib/design-live/feedback'
import { CRITERION_LETTERS } from '@/lib/design-live/criteria'
import { SustainabilityGamePlayer } from './game/SustainabilityGame'
import { LearnPlayer } from './LearnStage'
import { SelfPacedBar, ClassTelemetry, navOf } from './SelfPaced'
import { getPersona } from '@/data/design/live/personas'
import { useCelebration, CelebrationOverlay } from './Celebration'

/** Case-insensitive "does this text contain this word/phrase" check used by
 *  both the keyword-celebration nudge and (loosely) nowhere else — kept
 *  here so WorksheetPlayer/OpenIdeasPlayer share one definition of match. */
/** Whether a student has done enough of THIS stage that asking "how was this
 *  part?" makes sense — landing on a stage and immediately being asked to
 *  rate it (before doing any of it) produced meaningless, premature ratings. */
function stageComplete(stage: LiveStage, me: LivePlayerRow): boolean {
  const data = me.data?.[stage.key]
  if (stage.type === 'mcq') return Object.keys(data?.answers || {}).length >= stage.questions.length
  if (stage.type === 'learn') return !!data?.done
  if (stage.type === 'openIdeas') return Object.keys(data || {}).length >= stage.prompts.length
  if (stage.type === 'worksheet') {
    return stage.sections.every((s) => worksheetSectionPct(s, data?.[s.key] || {}) >= (s.completenessTarget ?? 0.6) * 100)
  }
  return true // boardGame and anything else: no single "done" signal, so don't withhold feedback
}

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
  // When this browser last saved something to the student's own row. The poll that refreshes `me` from the
  // server can return a copy from just BEFORE that save landed; applying it would snap the student back
  // (a Next button that seems to do nothing). So a fresh local save wins for a few seconds.
  const lastPatchAt = useRef(0)
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
    if (Date.now() - lastPatchAt.current < 6000) return
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

  // The DB write merges server-side (see migration live_players_server_side_merge:
  // merge_player_data / merge_player_stage_data) instead of a client-side
  // read-modify-write of the whole `data` column. A blind overwrite from a stale
  // local snapshot was losing real student work: two saves landing close together
  // (e.g. a worksheet autosave right as a tab-switch gets reported) could each build
  // their "next data" from a `me.data` that didn't yet include the other's change,
  // so whichever write resolved second silently discarded the first. The RPC merges
  // against the row's actual current value at write time, so concurrent patches can
  // no longer clobber each other regardless of timing or which one lands last. The
  // local `setMe` below is only for snappy optimistic UI — it is NOT what gets saved.
  const patchMyData = async (stageKey: string, patch: Record<string, any>) => {
    if (!me) return
    const sb = createClient()
    const nextData = { ...me.data, [stageKey]: { ...(me.data?.[stageKey] || {}), ...patch } }
    lastPatchAt.current = Date.now()
    setMe({ ...me, data: nextData })
    const { error } = await sb.rpc('merge_player_stage_data', { p_player_id: me.id, p_stage_key: stageKey, p_patch: patch })
    if (error) setApiError(error.message)
  }

  // Same idea as patchMyData but merges at the TOP of `data` (not nested
  // under a stage key) — used for the transient "what am I typing right
  // now" draft and tab-focus tracking, neither of which is per-stage state
  // a host should grade, just a live signal. Also goes through the
  // server-side merge RPC for the same race-safety reason as patchMyData.
  const patchMyRawData = (patch: Record<string, any>) => {
    if (!me) return
    const sb = createClient()
    const nextData = { ...me.data, ...patch }
    setMe({ ...me, data: nextData })
    sb.rpc('merge_player_data', { p_player_id: me.id, p_patch: patch }).then(({ error }) => {
      if (error) console.error('live: failed to sync draft:', error.message)
    })
  }
  const reportDraft = useLiveDraftReporter(patchMyRawData)
  // Lets the teacher's host dashboard see who's actually on the activity right
  // now vs. switched away to another tab/app (see ui.tsx FocusDot) — seeded from
  // whatever switch count was already saved, so a reload keeps counting up.
  useTabFocusReporter(patchMyRawData, me?.data?.focus?.switches ?? 0, !!me)

  const addPoints = async (delta: number) => {
    if (!me || !delta) return
    const sb = createClient()
    setMe({ ...me, points: me.points + delta }) // optimistic UI only — the write below is the atomic source of truth
    await sb.rpc('increment_player_points', { p_player_id: me.id, p_delta: delta })
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
  // Self-paced activities: each student has their own position, saved on their own row.
  const selfPaced = !!activity.selfPaced
  // A self-paced student isn't tied to the shared session clock — if the teacher ends
  // the session (e.g. because most of the class finished, or the period is over), a
  // student who is still mid-activity should be able to keep going and finish their
  // own work rather than getting cut off. Host-paced activities still stop at "ended"
  // since their content only exists relative to a host-controlled shared state.
  const canWork = session.status === 'active' || (selfPaced && session.status === 'ended')
  const nav = navOf(me, activity)
  const myIdx = selfPaced ? nav.stage : session.stage_idx
  const rawStage = activity.stages[myIdx]
  // With no host to lock or reveal, quizzes run at the student's own pace (answer shows straight away, points at once).
  const stage = selfPaced && rawStage?.type === 'mcq' ? { ...rawStage, pacing: 'self-paced' as const } : rawStage
  const stageSession = selfPaced ? { ...session, state: {} } : session
  const goStage = (n: number) => {
    const t = Math.max(0, Math.min(n, activity.stages.length - 1))
    patchMyData('_nav', { stage: t, max: Math.max(nav.max, t) })
  }

  // Wide, single-focus (mcq/openIdeas/grading) stages read best in a
  // comfortable column even on a laptop-wide screen — the shell itself
  // goes full-bleed, but a single question or prompt shouldn't stretch to
  // fill 1200px. Worksheet/ended stages have genuinely more content and
  // use the full shell width (with their own responsive grids inside).
  // Self-paced activities read better a bit wider than the host-paced narrow column —
  // there is no projector screen to keep small, and a lesson card or a quiz question
  // benefits from the extra room, especially on a laptop.
  const stageIsNarrow = !selfPaced && (session.status !== 'active' || stage?.type === 'mcq' || stage?.type === 'openIdeas' || stage?.type === 'grading')
  const contentWidth = stageIsNarrow ? 560 : stage?.type === 'learn' || selfPaced ? 800 : '100%'

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

        <div style={{ maxWidth: contentWidth, width: '100%', margin: '0 auto', display: 'grid', gap: 14 }}>
          <BadgeRow badges={me.badges} />
          <ErrorBanner message={apiError} onClose={() => setApiError(null)} />

          <StudentChatToggle sessionCode={code} me={me} accent={activity.theme.accent} />

          {session.status === 'lobby' && (
            <div style={{ ...cardStyle('#1FA98A'), textAlign: 'center' }}>
              You&apos;re in! Waiting for your teacher to start… ({players.length} joined)
            </div>
          )}

          {canWork && selfPaced && <SelfPacedBar activity={activity} idx={myIdx} onGo={goStage} />}
          {canWork && selfPaced && <ClassTelemetry activity={activity} players={players} meId={me.id} />}

          {/* KEYED ON THE STAGE ITSELF: this forces React to fully discard and
              rebuild everything below — not just swap props — the instant the
              active stage changes, for host-paced OR self-paced navigation.
              Without this, a stray leftover render from a stage a student has
              already left behind could keep showing above the real current
              stage (seen in production as an old worksheet/lesson repeating
              at the top of the page). If this still happens, a hard refresh
              always clears it — state is saved on the server, not lost. */}
          <div key={`stage-${selfPaced ? myIdx : session.stage_idx}-${stage?.key ?? 'none'}`} style={{ display: 'grid', gap: 14 }}>
          {canWork && stage?.type === 'mcq' && (
            <McqPlayer activity={activity} stage={stage} session={stageSession} me={me} patchMyData={patchMyData} addPoints={addPoints} />
          )}
          {canWork && stage?.type === 'worksheet' && (
            <WorksheetPlayer stage={stage} allStages={activity.stages} activity={activity} grade={myGrade} me={me} sessionCode={code} patchMyData={patchMyData} reportDraft={reportDraft} celebrate={celebrate} />
          )}
          {canWork && stage?.type === 'openIdeas' && (
            <OpenIdeasPlayer activity={activity} stage={stage} session={stageSession} me={me} patchMyData={patchMyData} addPoints={addPoints} reportDraft={reportDraft} celebrate={celebrate} selfPaced={selfPaced} />
          )}
          {canWork && stage?.type === 'learn' && stage.overview && <WorksheetOverview overview={stage.overview} />}
          {canWork && stage?.type === 'learn' && <LearnPlayer stage={stage} session={stageSession} me={me} patchMyData={patchMyData} accent={activity.theme.accent} onFinish={selfPaced ? () => goStage(myIdx + 1) : undefined} />}
          {canWork && stage?.type === 'boardGame' && stage.overview && <WorksheetOverview overview={stage.overview} />}
          {canWork && stage?.type === 'boardGame' && <SustainabilityGamePlayer session={session} me={me} code={code} players={players} patchMyData={patchMyData} addPoints={addPoints} />}
          {canWork && stage && stage.type !== 'grading' && (stageComplete(stage, me) || feedbackOf(me, stage.key)) && (
            <StageFeedback
              stageLabel={`${stage.icon} ${stage.label}`}
              value={feedbackOf(me, stage.key)}
              onSave={(v) => patchMyData('_feedback', { [stage.key]: v })}
            />
          )}
          </div>

          {canWork && stage?.type === 'grading' && (
            <div style={cardStyle(activity.theme.accent)}>
              {myGrade?.graded ? (
                <div>
                  <div style={{ fontWeight: 800, marginBottom: 6 }}>Your feedback</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                    {Object.entries(myGrade.scores).filter(([k]) => !k.startsWith('reveal:')).map(([k, v]) => (
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

          {/* Self-paced students keep working past "ended" (see canWork above), so the
              final-results/podium screen — built for a shared host-paced ending — stays
              out of their way instead of competing with their own in-progress activity. */}
          {session.status === 'ended' && !selfPaced && (
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
  const total = stage.questions.length

  const answeredCount = Object.keys(answers).length
  // Self-paced: which question is ON SCREEN, kept separate from how many have been
  // ANSWERED — advancing is the student's own explicit "Next question" click, not an
  // automatic side-effect of answering, so they always get to see whether they were
  // right before moving on. Starts wherever they left off if they revisit mid-quiz;
  // `total` itself means "finished, show the summary".
  const [selfPacedQIdx, setSelfPacedQIdx] = useState(() => Math.min(answeredCount, total))
  const st = session.state?.[stage.key] || { mcqIndex: 0, locked: false, revealed: false }
  const activeQIdx = stage.pacing === 'self-paced' ? Math.min(selfPacedQIdx, total - 1) : st.mcqIndex
  const q = stage.questions[activeQIdx]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const order = useMemo(() => shuffle(q.options.map((text, i) => ({ text, i }))), [activeQIdx, q.options])

  // Host-paced: when the host reveals the answer, a correct student's own browser
  // collects the points once (marked `paid`, so a refresh or a re-reveal cannot double up).
  const mine = answers[st.mcqIndex] as { choiceIdx: number; correct: boolean; paid?: boolean } | undefined
  useEffect(() => {
    if (stage.pacing !== 'host-paced' || !st.revealed || !mine || !mine.correct || mine.paid) return
    addPoints(points)
    patchMyData(stage.key, { answers: { ...answers, [st.mcqIndex]: { ...mine, paid: true } } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [st.revealed, st.mcqIndex, mine?.correct, mine?.paid])

  if (stage.pacing === 'self-paced') {
    const qIdx = selfPacedQIdx
    const done = qIdx >= total
    const already = answers[qIdx]

    if (done) {
      return (
        <div style={{ ...cardStyle('#1FA98A'), textAlign: 'center' }}>
          ✅ You&apos;ve answered all {total} questions. {Object.values(answers).filter((a) => a.correct).length}/{total} correct.
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
          Question {qIdx + 1} of {total}
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
        {already && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => setSelfPacedQIdx(qIdx + 1)} style={btnStyle(activity.theme.accent, true, true)}>
              {already.correct ? '✅ Correct! ' : '❌ Not quite. '}{qIdx + 1 < total ? 'Next question →' : 'See your results →'}
            </button>
          </div>
        )}
      </div>
    )
  }

  // host-paced
  const pick = (choiceIdx: number) => {
    if (st.locked || mine) return
    const correct = choiceIdx === q.correct
    patchMyData(stage.key, { answers: { ...answers, [st.mcqIndex]: { choiceIdx, correct, paid: false } } })
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
  allStages,
  activity,
  grade,
  me,
  sessionCode,
  patchMyData,
  reportDraft,
  celebrate,
}: {
  stage: WorksheetStage
  allStages: LiveStage[]
  activity: LiveActivityDefinition
  grade: LiveGradeRow | null
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

  // Progress is saved three ways so a student never loses work:
  //  1. the database (live_players.data) — the real record, follows the account to any device;
  //  2. an autosave that writes changed sections after ~2.5 s of quiet, so pressing Save is optional;
  //  3. a backup copy in this browser's storage, restored if the tab is closed or the connection
  //     drops before (2) lands. (Browser storage rather than a cookie: cookies are tiny and are
  //     sent with every request.)
  const storageKey = `myp:ws:${sessionCode}:${me.id}:${stage.key}`
  const lastSaved = useRef<Record<string, string>>(Object.fromEntries(stage.sections.map((s) => [s.key, JSON.stringify(me.data?.[stage.key]?.[s.key] || {})])))
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle')

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (!raw) return
      const local = JSON.parse(raw) as Record<string, Record<string, any>>
      setDrafts((d) => {
        const next = { ...d }
        let changed = false
        for (const [k, v] of Object.entries(local)) {
          if (!(k in next) || !v || Object.keys(v).length === 0) continue
          if (JSON.stringify(v) !== JSON.stringify(d[k])) { next[k] = v; changed = true }
        }
        return changed ? next : d
      })
    } catch { /* storage unavailable — the database copy still works */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(drafts)) } catch { /* ignore */ }
  }, [drafts, storageKey])

  useEffect(() => {
    const timer = setTimeout(() => {
      const patch: Record<string, any> = {}
      for (const s of stage.sections) {
        const j = JSON.stringify(drafts[s.key] || {})
        if (j !== lastSaved.current[s.key]) { patch[s.key] = drafts[s.key]; lastSaved.current[s.key] = j }
      }
      if (Object.keys(patch).length) {
        setSaveState('saving')
        patchMyData(stage.key, patch)
        setTimeout(() => setSaveState('saved'), 700)
      }
    }, 2500)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drafts])

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
    lastSaved.current[sectionKey] = JSON.stringify(drafts[sectionKey] || {})
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

  // The CritABCD dial: which criterion is open right now, and how complete each criterion is across the
  // WHOLE activity (this stage from live drafts, other stages from what is already saved).
  const currentSection = stage.sections.find((x) => x.key === openSection)
  const currentStrand = currentSection?.criterion ?? stage.sections.find((x) => x.criterion)?.criterion
  const { criteriaProgress, criteriaPresent } = useMemo(() => {
    const acc: Record<string, number[]> = {}
    for (const st of allStages) {
      if (st.type !== 'worksheet') continue
      for (const sec of st.sections) {
        const l = sec.criterion?.[0]
        if (!l || !/^[A-D]\./.test(sec.criterion ?? '')) continue
        const vals = st.key === stage.key ? drafts[sec.key] : me.data?.[st.key]?.[sec.key]
        ;(acc[l] ||= []).push(worksheetSectionPct(sec, vals || {}))
      }
    }
    return {
      criteriaPresent: CRITERION_LETTERS.filter((l) => acc[l]?.length) as string[],
      criteriaProgress: Object.fromEntries(Object.entries(acc).map(([l, v]) => [l, Math.round(v.reduce((a, b) => a + b, 0) / v.length)])),
    }
  }, [allStages, stage.key, drafts, me.data])

  // Sections that are open render "wide" (span every column) since they
  // hold the actual fields — a full grid width in a laptop browser instead
  // of squeezing a table/chat into a narrow single column. Collapsed
  // sections are compact and flow into whatever columns are left.
  return (
    <>
    <div style={{ textAlign: 'right', fontSize: 11.5, fontWeight: 700, color: 'rgba(255,255,255,0.75)', marginBottom: 6 }}>
      {saveState === 'saving' ? '💾 Saving…' : saveState === 'saved' ? '✅ All changes saved' : '💾 Your work saves automatically'}
    </div>
    {criteriaPresent.length > 0 && (
      <div style={{ ...cardStyle('#5C3FD6'), marginBottom: 14 }}>
        <div style={{ fontSize: 10.5, fontWeight: 900, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: 8 }}>Where you are · CritABCD</div>
        <CriteriaRingCard currentStrand={currentStrand} progress={criteriaProgress} present={criteriaPresent} />
      </div>
    )}
    <WorksheetOverview
      overview={stage.overview}
      sections={stage.sections}
      pct={Object.fromEntries(stage.sections.map((s) => [s.key, worksheetSectionPct(s, drafts[s.key])]))}
      onJump={(k) => {
        setOpenSection(k)
        setTimeout(() => document.getElementById(`ws-${k}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
      }}
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, alignItems: 'start' }}>
      {stage.sections.map((s) => {
        const pct = worksheetSectionPct(s, drafts[s.key])
        const open = openSection === s.key
        return (
          <div key={s.key} id={`ws-${s.key}`} style={{ ...cardStyle(pct >= 70 ? '#1FA98A' : 'var(--border)'), gridColumn: open ? '1 / -1' : undefined, scrollMarginTop: 72 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => setOpenSection(open ? undefined : s.key)}>
              <div style={{ fontWeight: 800 }}>
                {s.icon} {s.label}
                {s.criterion && <span style={{ marginLeft: 8 }}><StrandBadge strand={s.criterion} compact /></span>}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{pct}%</div>
            </div>
            {open && (
              <div style={{ marginTop: 10, display: 'grid', gap: 10, maxWidth: s.fields.some((f) => f.type === 'personaChat') ? 960 : s.fields.some((f) => grade?.scores?.[revealKey(stage.key, s.key, f.key)]) ? 1180 : 720 }}>
                <SectionMarker section={s} progress={criteriaProgress} present={criteriaPresent} />
                {s.blurb && <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{s.blurb}</div>}
                {s.fields.map((f) => (
                  <div key={f.key} style={{ display: 'grid', gap: 12, alignItems: 'start', gridTemplateColumns: grade?.scores?.[revealKey(stage.key, s.key, f.key)] ? 'repeat(auto-fit, minmax(300px, 1fr))' : 'minmax(0, 1fr)' }}>
                  <WorksheetFieldInput
                    field={f}
                    value={drafts[s.key]?.[f.key]}
                    onChange={(v) => updateField(s.key, f.key, v)}
                    onPersist={(v) => persistField(s.key, f.key, v)}
                    onDraft={(text) => reportDraft(stage.key, text, s.key)}
                    sessionCode={sessionCode}
                    playerId={me.id}
                    stageKey={stage.key}
                    lookup={(stageKey, sectionKey, fieldKey) => me.data?.[stageKey]?.[sectionKey]?.[fieldKey]}
                  />
                  {grade?.scores?.[revealKey(stage.key, s.key, f.key)] ? (() => {
                    const resolved = exemplarsFor(activity.exemplarsByChoice, stage.key, s.key, f, me.data)
                    return <StudentExemplarCard resolved={resolved} noun={resolved.noun} />
                  })() : null}
                  </div>
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
  stageKey,
  lookup,
}: {
  field: WorksheetField
  value: any
  onChange: (v: any) => void
  onPersist?: (v: any) => void
  onDraft?: (text: string) => void
  sessionCode?: string
  playerId?: string
  stageKey?: string
  /** Read a value the student saved earlier, from any stage: (stageKey, sectionKey, fieldKey). */
  lookup?: (stageKey: string, sectionKey: string, fieldKey: string) => any
}) {
  if (field.type === 'image') {
    return (
      <label style={{ display: 'grid', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
        {field.label}
        {field.hint && <span style={{ fontWeight: 400, fontSize: 11 }}>{field.hint}</span>}
        <ImageUploadField value={value} onChange={onChange} onPersist={onPersist ?? onChange} sessionCode={sessionCode!} playerId={playerId!} stageKey={stageKey!} fieldKey={field.key} multiple={field.multiple} />
      </label>
    )
  }
  if (field.type === 'productCards') {
    return <ProductCardsField value={value} onChange={onChange} onPersist={onPersist ?? onChange} preferredGroup={lookup?.('community', 'need', 'community')} />
  }
  if (field.type === 'makeCards') {
    return <MakeCardsField value={value} onChange={onChange} onPersist={onPersist ?? onChange} preferredDirection={lookup?.('week1', 'direction', 'direction')} />
  }
  if (field.type === 'personaChat') {
    return <PersonaChatField value={value} onChange={onChange} onPersist={onPersist!} onDraft={onDraft!} sessionCode={sessionCode!} playerId={playerId!} pack={field.personaPack} />
  }
  if (field.type === 'personalityPrompt') {
    return <PersonalityPromptField value={value} onChange={onChange} onPersist={onPersist ?? onChange} />
  }
  if (field.type === 'opportunityCards') {
    return <OpportunityCardsField value={value} onChange={onChange} onPersist={onPersist ?? onChange} />
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
  if (field.type === 'checklist') {
    const items: { label: string; have: boolean }[] = Array.isArray(value) ? value : []
    const setItem = (i: number, patch: Partial<{ label: string; have: boolean }>) => {
      const next = [...items]
      next[i] = { ...next[i], ...patch }
      onChange(next)
    }
    const addItem = () => onChange([...items, { label: '', have: false }])
    const removeItem = (i: number) => onChange(items.filter((_, idx) => idx !== i))
    const gotCount = items.filter((it) => it.have).length
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>{field.label}</div>
          {items.length > 0 && <div style={{ fontSize: 11, fontWeight: 800, color: gotCount === items.length ? '#1FA98A' : 'var(--text-muted)' }}>{gotCount}/{items.length} ready</div>}
        </div>
        {field.hint && <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 6 }}>{field.hint}</div>}
        <div style={{ display: 'grid', gap: 6, marginTop: 6 }}>
          {items.map((it, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input type="checkbox" checked={it.have} onChange={(e) => setItem(i, { have: e.target.checked })} style={{ width: 18, height: 18, flexShrink: 0 }} aria-label={`Got ${it.label || 'this item'}?`} />
              <input value={it.label} placeholder={field.placeholder || 'e.g. Cardboard'} onChange={(e) => setItem(i, { label: e.target.value })} style={{ ...inputStyle, flex: 1, textDecoration: it.have ? 'line-through' : 'none', opacity: it.have ? 0.7 : 1 }} />
              <button onClick={() => removeItem(i)} title="Remove" style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 14, color: 'var(--text-muted)', padding: 4 }}>✕</button>
            </div>
          ))}
          {items.length === 0 && <div style={{ fontSize: 12, color: 'var(--text-subtle)', fontStyle: 'italic' }}>Nothing added yet.</div>}
        </div>
        <button onClick={addItem} style={{ ...btnStyle('var(--surface)'), marginTop: 8, fontSize: 12 }}>
          + Add item
        </button>
      </div>
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
  addPoints,
  reportDraft,
  celebrate,
  selfPaced,
}: {
  activity: LiveActivityDefinition
  stage: OpenIdeasStage
  session: LiveSessionRow
  me: LivePlayerRow
  patchMyData: (stageKey: string, patch: Record<string, any>) => void
  addPoints: (delta: number) => void
  reportDraft: (stageKey: string, text: string) => void
  celebrate: (label: string) => void
  /** No host to advance prompts or lock a round, so each student keeps their
   *  own position and moves on with an explicit button, like self-paced MCQ. */
  selfPaced?: boolean
}) {
  const total = stage.prompts.length
  const answeredCount = Object.keys(me.data?.[stage.key] || {}).length
  const [localIdx, setLocalIdx] = useState(() => Math.min(answeredCount, total))
  const st = session.state?.[stage.key] || { ideaIndex: 0, locked: false, constraintIdx: null }
  const ideaIndex = selfPaced ? Math.min(localIdx, total - 1) : st.ideaIndex
  const locked = selfPaced ? false : st.locked
  const done = selfPaced && localIdx >= total
  const prompt = stage.prompts[ideaIndex]
  const mine = !done ? me.data?.[stage.key]?.[ideaIndex] : undefined
  const [text, setText] = useState(mine?.text || '')
  const [flash, setFlash] = useState(false)
  const [autosaving, setAutosaving] = useState(false)
  const celebratedRef = useRef<Set<string>>(new Set())
  // What's already saved for THIS prompt, so the autosave timer below only fires on
  // genuinely new typing — reset whenever the student moves to a different prompt.
  const lastSavedRef = useRef(mine?.text || '')

  useEffect(() => {
    setText(mine?.text || '')
    lastSavedRef.current = mine?.text || ''
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ideaIndex])

  const onType = (v: string) => {
    setText(v)
    if (v.trim()) {
      reportDraft(stage.key, v)
      prompt.celebrateKeywords?.forEach((kw) => {
        const id = `${ideaIndex}.${kw.toLowerCase()}`
        if (!celebratedRef.current.has(id) && containsKeyword(v, kw)) {
          celebratedRef.current.add(id)
          celebrate(`⭐ Nice! You mentioned "${kw}"`)
        }
      })
    }
  }

  const submit = () => {
    if (!text.trim()) return
    const first = !mine
    lastSavedRef.current = text.trim()
    patchMyData(stage.key, { [ideaIndex]: { text: text.trim() } })
    if (selfPaced && first) addPoints(stage.pointsPerSubmission ?? 10)
    setFlash(true)
    setTimeout(() => setFlash(false), 1200)
  }

  // Autosave: a student who types an idea and walks away (or the teacher advances
  // the prompt) without clicking Submit used to lose it outright — worksheets
  // already autosave on a quiet-for-a-bit timer, so this brings idea prompts to
  // the same standard instead of relying on the button being clicked at all.
  useEffect(() => {
    if (locked || !text.trim() || text.trim() === lastSavedRef.current) return
    const timer = setTimeout(() => {
      const first = !mine
      lastSavedRef.current = text.trim()
      setAutosaving(true)
      patchMyData(stage.key, { [ideaIndex]: { text: text.trim() } })
      if (selfPaced && first) addPoints(stage.pointsPerSubmission ?? 10)
      setTimeout(() => setAutosaving(false), 700)
    }, 2500)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  if (done) {
    return (
      <div style={{ ...cardStyle('#1FA98A'), textAlign: 'center' }}>
        ✅ You&apos;ve answered all {total} prompts.
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
        Prompt {ideaIndex + 1} of {total}
      </div>
      <div style={{ ...cardStyle(activity.theme.accent), textAlign: 'center' }}>
        {prompt.icon && <div style={{ fontSize: 22 }}>{prompt.icon}</div>}
        <div style={{ fontSize: 15, fontWeight: 800 }}>{prompt.text}</div>
      </div>
      {!selfPaced && stage.constraintCards && st.constraintIdx != null && (
        <div style={{ ...cardStyle('#D6425E'), textAlign: 'center' }}>
          <div style={{ fontWeight: 800 }}>
            {stage.constraintCards[st.constraintIdx].icon} CONSTRAINT: {stage.constraintCards[st.constraintIdx].label}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{stage.constraintCards[st.constraintIdx].text}</div>
        </div>
      )}
      {locked && !mine && <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, color: '#D6425E' }}>🔒 Time&apos;s up — your teacher has locked this round.</div>}
      <input value={text} disabled={locked} onChange={(e) => onType(e.target.value)} placeholder="Your idea, in a few words…" style={inputStyle} onKeyDown={(e) => e.key === 'Enter' && submit()} />
      <div style={{ textAlign: 'right', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
        {autosaving ? '💾 Saving…' : '💾 Saves automatically'}
      </div>
      <button onClick={submit} disabled={locked} style={btnStyle('#1FA98A', true, true)}>
        {flash ? '✅ Saved!' : mine ? 'Update my idea' : 'Submit my idea'}
      </button>
      {selfPaced && mine && (
        <button onClick={() => setLocalIdx(ideaIndex + 1)} style={btnStyle(activity.theme.accent, true, true)}>
          {ideaIndex + 1 < total ? 'Next prompt →' : 'Finish →'}
        </button>
      )}
    </div>
  )
}
