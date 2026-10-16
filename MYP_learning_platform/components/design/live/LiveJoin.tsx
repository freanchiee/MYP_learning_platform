'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { useLiveRow, useLiveTable, useClassRoster, shuffle, useLiveDraftReporter, useTabFocusReporter } from '@/lib/design-live/hooks'
import { worksheetSectionPct } from '@/lib/design-live/scoring'
import { pointsSignature } from '@/lib/design-live/points'
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
import { feedbackFor, feedbackKey, isUnseen, unseenKeys } from '@/lib/design-live/sectionFeedback'
import { StudentExemplarCard } from './ExemplarReveal'
import { exemplarsFor, revealKey } from '@/lib/design-live/exemplars'
import { feedbackOf } from '@/lib/design-live/feedback'
import { CRITERION_LETTERS, criterionOf } from '@/lib/design-live/criteria'
import { SustainabilityGamePlayer } from './game/SustainabilityGame'
import { LearnPlayer } from './LearnStage'
import ShareFooter from './ShareFooter'
import MyWorkDownloads from './MyWorkDownloads'
import StudentShell from './shell/StudentShell'
import { LIVE_FONT_CLASSES } from '@/lib/design-live/liveFonts'
import { useLiveTheme } from '@/lib/design-live/liveTheme'
import { SelfPacedBar, navOf, navPatch } from './SelfPaced'
import { LeaderboardDrawer, useLeaderboardDrawer } from './HostChrome'
import { getPersona } from '@/data/design/live/personas'
import { useCelebration, CelebrationOverlay } from './Celebration'
import LeadCaptureField from './LeadCaptureField'
import GameEvidenceField from './GameEvidenceField'
import AnswerCoach, { guardedChange, noPasteHandlers, useNotice } from './AnswerCoach'
import { resolveCoach } from '@/lib/design-live/answerFeedback'
import { preloadSemantic } from '@/lib/design-live/semantic'

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
  // True while the interview itself is on screen (its own chat is right there, so the floating bubble steps aside).
  const [interviewOnScreen, setInterviewOnScreen] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [profileName, setProfileName] = useState('')
  const [code, setCode] = useState(initialCode.toUpperCase())
  const [codeInput, setCodeInput] = useState(initialCode.toUpperCase())
  const [sessionExists, setSessionExists] = useState<boolean | null>(null)
  const [session, setSession] = useState<LiveSessionRow | null>(null)
  const lb = useLeaderboardDrawer()
  // The student's chosen look for the self-paced workspace (remembered on this device). Only applied when the workspace is on.
  const [liveTheme, setLiveTheme] = useLiveTheme()
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
  // The class roster: names, teams, scores and the head-count only. Deliberately NOT the full rows: a student screen
  // must not download every classmate's answers (`data`), which used to multiply the traffic with class size.
  const players = useClassRoster(code, !!code)
  useLiveRow<LiveGradeRow>('live_grades', 'player_id', me?.id, setMyGrade, !!me)

  // My own full row (answers and all), kept fresh by watching ONLY my row, not the whole table.
  // keepOnError: a failed fetch must never read as "my row is gone" and drop the student back to the join screen.
  useLiveRow<LivePlayerRow>('live_players', 'id', me?.id, (row) => {
    if (Date.now() - lastPatchAt.current < 6000) return
    setMe(row)
  }, !!me, { keepOnError: true })

  // First load: find my row if I have already joined with this account. Re-checked if the roster later shows me
  // (joined from another tab or device).
  const rosterHasMe = !!userId && players.some((p) => p.user_id === userId)
  useEffect(() => {
    if (!code || !userId || me) return
    let cancelled = false
    createClient()
      .from('live_players')
      .select('*')
      .eq('session_code', code)
      .eq('user_id', userId)
      .maybeSingle()
      .then(({ data }) => {
        if (cancelled || !data || Date.now() - lastPatchAt.current < 6000) return
        setMe((cur) => cur ?? (data as LivePlayerRow))
      })
    return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, userId, !!me, rosterHasMe])

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
      .insert({ session_code: code, user_id: userId, name, team, badges: [], data: {} })
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

  // Points are calculated on the server from this student's recorded work (lib/design-live/points.ts); the browser never
  // says how many points to add. Whenever something that can change the score changes (and once on load, which also
  // corrects any total inflated before this existed), ask the server to recalculate and show what it says.
  // addPoints is kept only so the stage components need no changes: it does nothing by itself.
  const addPoints = (_delta: number) => {}
  const pointsSig = me && session ? pointsSignature(activity, me.data, session.state, me.id) : ''
  useEffect(() => {
    if (!me || !pointsSig) return undefined
    const playerId = me.id
    const timer = setTimeout(async () => {
      try {
        const res = await fetch('/api/live/points', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ playerId }) })
        if (!res.ok) return
        const { points } = (await res.json()) as { points: number }
        setMe((m) => (m && m.id === playerId && m.points !== points ? { ...m, points } : m))
      } catch { /* offline: the next change tries again */ }
    }, 800)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me?.id, pointsSig])

  // Warm the on-device smart check in the background a few seconds after joining, so it is ready before the first
  // answer (only for activities with written answers). If it cannot load, the coach falls back to keywords.
  const hasWrittenAnswers = activity.stages.some((s) => s.type === 'worksheet')
  const joined = !!me
  useEffect(() => {
    if (!joined || !hasWrittenAnswers) return undefined
    const t = setTimeout(preloadSemantic, 4000)
    return () => clearTimeout(t)
  }, [joined, hasWrittenAnswers])

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
  const personaLoc = findPersonaField(activity)
  // Self-paced activities: each student has their own position, saved on their own row.
  const selfPaced = !!activity.selfPaced
  // A self-paced student isn't tied to the shared session clock — if the teacher ends
  // the session (e.g. because most of the class finished, or the period is over), a
  // student who is still mid-activity should be able to keep going and finish their
  // own work rather than getting cut off. Host-paced activities still stop at "ended"
  // since their content only exists relative to a host-controlled shared state.
  const canWork = session.status === 'active' || (selfPaced && session.status === 'ended')
  const shellOn = canWork && selfPaced
  const nav = navOf(me, activity)
  const myIdx = selfPaced ? nav.stage : session.stage_idx
  const rawStage = activity.stages[myIdx]
  // With no host to lock or reveal, quizzes run at the student's own pace (answer shows straight away, points at once).
  const stage = selfPaced && rawStage?.type === 'mcq' ? { ...rawStage, pacing: 'self-paced' as const } : rawStage
  const stageSession = selfPaced ? { ...session, state: {} } : session
  const goStage = (n: number) => {
    const t = Math.max(0, Math.min(n, activity.stages.length - 1))
    patchMyData('_nav', navPatch(activity, t, Math.max(nav.max, t)))
  }

  // Teacher feedback the student has not opened yet (one chip per section, tapping it goes to that stage).
  const feedbackAlerts = unseenKeys(myGrade?.section_feedback, me.data?._feedbackSeen).flatMap((k) => {
    const [stageKey, sectionKey] = k.split('.')
    const stageIdx = activity.stages.findIndex((x) => x.key === stageKey)
    const st = activity.stages[stageIdx]
    if (!st || st.type !== 'worksheet') return []
    const sec = st.sections.find((x) => x.key === sectionKey)
    return sec ? [{ key: k, stageIdx, label: `${sec.icon ?? ''} ${st.label} · ${sec.label}`.trim() }] : []
  })
  const feedbackByStage: Record<string, number> = {}
  feedbackAlerts.forEach((a) => { const sk = activity.stages[a.stageIdx].key; feedbackByStage[sk] = (feedbackByStage[sk] ?? 0) + 1 })

  // Wide, single-focus (mcq/openIdeas/grading) stages read best in a
  // comfortable column even on a laptop-wide screen — the shell itself
  // goes full-bleed, but a single question or prompt shouldn't stretch to
  // fill 1200px. Worksheet/ended stages have genuinely more content and
  // use the full shell width (with their own responsive grids inside).
  // Self-paced activities read better a bit wider than the host-paced narrow column —
  // there is no projector screen to keep small, and a lesson card or a quiz question
  // benefits from the extra room, especially on a laptop.
  const stageIsNarrow = !selfPaced && (session.status !== 'active' || stage?.type === 'mcq' || stage?.type === 'openIdeas' || stage?.type === 'grading')
  const contentWidth = shellOn ? '100%' : stageIsNarrow ? 560 : stage?.type === 'learn' || selfPaced ? 800 : '100%'

  return (
    <div
      className={shellOn ? LIVE_FONT_CLASSES : undefined}
      data-live-theme={shellOn && liveTheme !== 'default' ? liveTheme : undefined}
      style={{ ...pageBg(activity.theme), paddingRight: 16 + (canWork && selfPaced ? lb.reserve : 0), transition: 'padding-right .25s' }}
    >
      {canWork && selfPaced && <LeaderboardDrawer activity={activity} code={code} me={me} open={lb.open} onToggle={lb.setOpen} />}
      <div style={{ maxWidth: 'min(1180px, 94vw)', margin: '0 auto', display: 'grid', gap: 18 }}>
        {!shellOn && <div style={{ maxWidth: 480, width: '100%', margin: '0 auto', textAlign: 'center', color: '#fff', display: 'grid', justifyItems: 'center', gap: 6 }}>
          <Avatar seed={me.id} size={56} />
          <div style={{ fontWeight: 800 }}>
            {team ? `${team.icon} ${me.name} · ${team.name}` : `👋 ${me.name}`}
          </div>
          {!activity.teams && <div style={{ fontWeight: 800 }}>⭐ {me.points} pts</div>}
          <Link href="/design/live/history" style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>
            📜 My history
          </Link>
        </div>}

        <StudentShell enabled={shellOn} activity={activity} me={me} code={code} grade={myGrade} idx={myIdx} maxIdx={nav.max} onGo={goStage} theme={liveTheme} onTheme={setLiveTheme}>

        <div style={{ maxWidth: contentWidth, width: '100%', margin: '0 auto', display: 'grid', gap: 14 }}>
          <BadgeRow badges={me.badges} />
          <ErrorBanner message={apiError} onClose={() => setApiError(null)} />

          {canWork && feedbackAlerts.length > 0 && (
            <div role="status" style={{ ...cardStyle('#5C3FD6'), display: 'grid', gap: 8 }}>
              <div style={{ fontWeight: 900 }}>💬 Your teacher left feedback on {feedbackAlerts.length === 1 ? '1 section' : `${feedbackAlerts.length} sections`}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {feedbackAlerts.map((a) => (
                  <button key={a.key} onClick={() => { if (selfPaced) goStage(a.stageIdx) }} disabled={!selfPaced} style={{ ...btnStyle('#5C3FD6', true), padding: '6px 12px', fontSize: 12.5 }}>
                    {a.label}{selfPaced ? ' →' : ''}
                  </button>
                ))}
              </div>
              {!selfPaced && <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Find it on the section named above.</div>}
            </div>
          )}

          <StudentChatToggle sessionCode={code} me={me} accent={activity.theme.accent} />

          {session.status === 'lobby' && (
            <div style={{ ...cardStyle('#1FA98A'), textAlign: 'center' }}>
              You&apos;re in! Waiting for your teacher to start… ({players.length} joined)
            </div>
          )}

          {canWork && selfPaced && !shellOn && <SelfPacedBar activity={activity} idx={myIdx} onGo={goStage} />}

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
            <WorksheetPlayer gameState={session.state?.game} stage={stage} allStages={activity.stages} activity={activity} grade={myGrade} me={me} sessionCode={code} patchMyData={patchMyData} reportDraft={reportDraft} celebrate={celebrate} journal={shellOn} onNextStage={selfPaced ? () => goStage(myIdx + 1) : undefined} onInterviewOnScreen={setInterviewOnScreen} />
          )}
          {canWork && stage?.type === 'openIdeas' && (
            <OpenIdeasPlayer activity={activity} stage={stage} session={stageSession} me={me} patchMyData={patchMyData} addPoints={addPoints} reportDraft={reportDraft} celebrate={celebrate} selfPaced={selfPaced} />
          )}
          {canWork && stage?.type === 'learn' && stage.overview && <WorksheetOverview overview={stage.overview} />}
          {canWork && stage?.type === 'learn' && <LearnPlayer stage={stage} session={stageSession} me={me} patchMyData={patchMyData} accent={activity.theme.accent} onFinish={selfPaced ? () => goStage(myIdx + 1) : undefined} />}
          {canWork && stage?.type === 'boardGame' && stage.overview && <WorksheetOverview overview={stage.overview} />}
          {canWork && stage?.type === 'boardGame' && selfPaced && stage.asyncRecap && !session.state?.game && (
            <div style={{ ...cardStyle(activity.theme.accent), display: 'grid', gap: 10 }}>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>{stage.asyncRecap.title}</h3>
              {stage.asyncRecap.body.map((p, i) => <p key={i} style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6 }}>{p}</p>)}
              {stage.asyncRecap.bullets && <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 6, fontSize: 14, lineHeight: 1.5 }}>{stage.asyncRecap.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>}
              <div><button onClick={() => goStage(myIdx + 1)} style={btnStyle(activity.theme.accent, true)}>Continue to the quiz →</button></div>
            </div>
          )}
          {canWork && stage?.type === 'boardGame' && !(selfPaced && stage.asyncRecap && !session.state?.game) && <SustainabilityGamePlayer session={session} me={me} code={code} players={players} patchMyData={patchMyData} addPoints={addPoints} />}
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
          {/* At the end of the activity (the last stage reached, or once the session is over) the student can download
              their own work (the new layout has a "My work" button in the top bar instead): each criterion as Checkpoint 1 / Checkpoint 2 / all together, plus everything. */}
          {!shellOn && canWork && (session.status === 'ended' || nav.max >= activity.stages.length - 1) && (
            <MyWorkDownloads activity={activity} me={me} code={code} grade={myGrade} />
          )}
          {canWork && <ShareFooter accent={activity.theme.accent} />}
        </div>
        </StudentShell>
      </div>
      {/* The interview, from ANY screen: once a character has been chosen, a bubble on every other stage opens the same chat and
          saves to the same transcript, so primary research can be collected whatever the student is working on. On the
          stage that holds the interview itself, that stage's own bubble does this job. */}
      {canWork && personaLoc && !(stage?.type === 'worksheet' && stage.key === personaLoc.stageKey && interviewOnScreen) && (
        <FloatingPersonaChat
          value={me.data?.[personaLoc.stageKey]?.[personaLoc.sectionKey]?.[personaLoc.fieldKey]}
          onChange={() => {}}
          onPersist={(v) => patchMyData(personaLoc.stageKey, { [personaLoc.sectionKey]: { ...(me.data?.[personaLoc.stageKey]?.[personaLoc.sectionKey] ?? {}), [personaLoc.fieldKey]: v } })}
          onDraft={(text) => reportDraft(personaLoc.stageKey, text, personaLoc.sectionKey)}
          sessionCode={code}
          playerId={me.id}
          rightOffset={selfPaced ? lb.reserve : 0}
          note="💾 Saved to your research notes"
        />
      )}
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
    <div data-tour="chat" style={{ position: 'fixed', left: 16, bottom: 16, zIndex: 45, display: 'grid', gap: 8, justifyItems: 'start' }}>
      {open && (
        <div style={{ width: 'min(320px, calc(100vw - 32px))' }}>
          <ChatPanel sessionCode={sessionCode} playerId={me.id} playerName={me.name} asHost={false} accent={accent} />
        </div>
      )}
      <button onClick={() => setOpen(!open)} style={{ ...btnStyle(`var(--lv-accent, ${accent})`, true), borderRadius: 999, padding: '10px 16px', fontSize: 13, boxShadow: 'var(--lv-btn-shadow, 3px 3px 0 var(--text))' }}>
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
      return <QuizSummary stage={stage} answers={answers} />
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
        {already && q.why && <WhyBox ok={already.correct} why={q.why} strand={q.strand} />}
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
      {st.revealed && q.why && <WhyBox ok={!!mine?.correct} why={q.why} strand={q.strand} />}
    </div>
  )
}

/** One or two sentences on why the right answer is right, shown straight after a quiz question is answered. */
function WhyBox({ ok, why, strand }: { ok: boolean; why: string; strand?: string }) {
  return (
    <div role="note" style={{ background: ok ? 'rgba(31,169,138,0.14)' : 'rgba(214,66,94,0.10)', border: `1.5px solid ${ok ? '#1FA98A' : '#D6425E'}`, borderRadius: 10, padding: '8px 12px', fontSize: 13, lineHeight: 1.45, color: 'var(--text)' }}>
      <strong>{ok ? '✅ Why this is right' : '💡 Why the right answer is right'}{strand ? ` · ${strand}` : ''}.</strong> {why}
    </div>
  )
}

/** The end-of-quiz summary: score per strand, and the ones to look at again with their explanation. */
function QuizSummary({ stage, answers }: { stage: McqStage; answers: Record<number, { choiceIdx: number; correct: boolean }> }) {
  const total = stage.questions.length
  const right = Object.values(answers).filter((a) => a.correct).length
  const byStrand = new Map<string, { ok: number; n: number }>()
  stage.questions.forEach((q, i) => {
    const k = q.strand || 'Other'
    const e = byStrand.get(k) ?? { ok: 0, n: 0 }
    e.n++
    if (answers[i]?.correct) e.ok++
    byStrand.set(k, e)
  })
  const missed = stage.questions.map((q, i) => ({ q, i })).filter(({ i }) => answers[i] && !answers[i].correct)
  return (
    <div style={{ ...cardStyle('#1FA98A'), display: 'grid', gap: 10 }}>
      <div style={{ textAlign: 'center', fontWeight: 800 }}>✅ You&apos;ve answered all {total} questions: {right}/{total} correct.</div>
      {byStrand.size > 0 && !(byStrand.size === 1 && byStrand.has('Other')) && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          {Array.from(byStrand.entries()).map(([k, e]) => (
            <span key={k} style={{ fontSize: 12, fontWeight: 800, padding: '4px 10px', borderRadius: 999, background: e.ok === e.n ? 'rgba(31,169,138,0.16)' : 'rgba(214,66,94,0.12)', border: `1px solid ${e.ok === e.n ? '#1FA98A' : '#D6425E'}` }}>
              {k}: {e.ok}/{e.n}
            </span>
          ))}
        </div>
      )}
      {missed.length > 0 && (
        <div style={{ display: 'grid', gap: 6 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--text-muted)' }}>LOOK AGAIN</div>
          {missed.map(({ q, i }) => (
            <div key={i} style={{ fontSize: 12.5, lineHeight: 1.45 }}>
              <strong>{q.q}</strong>
              <div>Right answer: {q.options[q.correct]}</div>
              {q.why && <div style={{ color: 'var(--text-muted)' }}>{q.why}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function WorksheetPlayer({
  gameState,
  stage,
  allStages,
  activity,
  grade,
  me,
  sessionCode,
  patchMyData,
  reportDraft,
  celebrate,
  journal,
  onNextStage,
  onInterviewOnScreen,
}: {
  /** Journal layout: the stage's sections are tabs, one page open at a time, with Previous / Next section. */
  journal?: boolean
  /** The live game's state (session.state.game), for fields that show the student's own game moves. */
  gameState?: any
  /** Called by the last section's "Finish this stage" button. */
  onNextStage?: () => void
  /** Tells the page whether this stage's interview section is the one being shown. */
  onInterviewOnScreen?: (on: boolean) => void
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
        for (const [k, rawV] of Object.entries(local)) {
          if (!(k in next) || !rawV || Object.keys(rawV).length === 0) continue
          // The interview can now also be done from other screens (GlobalPersonaChat), which saves straight to the
          // database. Keep whichever transcript is longer so an older browser backup can never roll a newer chat back.
          let v = rawV
          for (const f of stage.sections.find((x) => x.key === k)?.fields ?? []) {
            if (f.type !== 'personaChat') continue
            const db = me.data?.[stage.key]?.[k]?.[f.key]
            const mine = rawV[f.key]
            const best = (db?.messages?.length ?? 0) >= (mine?.messages?.length ?? 0) ? db : mine
            if (best) v = { ...v, [f.key]: best }
          }
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
  const activeKey = journal ? (stage.sections.some((x) => x.key === openSection) ? openSection : stage.sections[0]?.key) : openSection
  const currentSection = stage.sections.find((x) => x.key === (activeKey ?? openSection))
  const interviewShown = !!personaField && (journal ? activeKey === personaField.sectionKey : openSection === personaField.sectionKey)
  useEffect(() => {
    onInterviewOnScreen?.(interviewShown)
    return () => onInterviewOnScreen?.(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interviewShown])

  // Teacher feedback on a section: shown on the section, flagged on its tab until it has been opened.
  const seenMap: Record<string, string> = me.data?._feedbackSeen ?? {}
  const fbOf = (sectionKey: string) => feedbackFor(grade?.section_feedback, stage.key, sectionKey)
  const fbNew = (sectionKey: string) => isUnseen(fbOf(sectionKey), seenMap, feedbackKey(stage.key, sectionKey))
  const viewedKey = journal ? activeKey : openSection
  const viewedFb = viewedKey ? fbOf(viewedKey) : undefined
  useEffect(() => {
    if (!viewedKey || !viewedFb || !fbNew(viewedKey)) return
    patchMyData('_feedbackSeen', { [feedbackKey(stage.key, viewedKey)]: viewedFb.at })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewedKey, viewedFb?.at])
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
    {!journal && criteriaPresent.length > 0 && (
      <div style={{ ...cardStyle('#5C3FD6'), marginBottom: 14 }}>
        <div style={{ fontSize: 10.5, fontWeight: 900, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: 8 }}>Where you are · CritABCD</div>
        <CriteriaRingCard currentStrand={currentStrand} progress={criteriaProgress} present={criteriaPresent} />
      </div>
    )}
    <WorksheetOverview
      defaultOpen={!journal}
      overview={stage.overview}
      sections={stage.sections}
      pct={Object.fromEntries(stage.sections.map((s) => [s.key, worksheetSectionPct(s, drafts[s.key])]))}
      onJump={(k) => {
        setOpenSection(k)
        setTimeout(() => document.getElementById(`ws-${k}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
      }}
    />
    {journal && (
      <div role="tablist" aria-label="Pages in this stage" style={{ display: 'flex', gap: 6, overflowX: 'auto', alignItems: 'flex-end', padding: '4px 6px 0' }}>
        {stage.sections.map((s, n) => {
          const act = s.key === activeKey
          const spct = Math.round(worksheetSectionPct(s, drafts[s.key]))
          const tc = s.criterion ? criterionOf(s.criterion).color : 'var(--border-strong)'
          return (
            <button
              key={s.key}
              role="tab"
              aria-selected={act}
              onClick={() => { setOpenSection(s.key); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              title={`${s.label} · ${spct}% done`}
              style={{
                flex: '0 0 auto', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, padding: '8px 14px 9px', fontSize: 12.5, fontWeight: act ? 900 : 700, color: 'var(--text)',
                background: act ? 'var(--surface)' : 'var(--surface-2)', border: '2.5px solid var(--text)', borderTop: `6px solid ${tc}`,
                borderBottom: act ? '2.5px solid var(--surface)' : '2.5px solid var(--text)', borderRadius: '12px 12px 0 0',
                marginBottom: act ? -2.5 : 0, position: 'relative', zIndex: act ? 2 : 1, opacity: act ? 1 : 0.88, boxShadow: 'none',
              }}
            >
              <span style={{ color: 'var(--text-subtle)', fontWeight: 900 }}>{n + 1}</span>
              <span>{s.icon} {s.label}</span>
              {fbNew(s.key) && <span title="New feedback from your teacher" aria-label="New feedback from your teacher" style={{ fontSize: 12 }}>💬</span>}
              {s.criterion && <span style={{ fontSize: 10, fontWeight: 900, color: tc === 'var(--border-strong)' ? 'var(--text-subtle)' : tc }}>{s.criterion}</span>}
              <span style={{ fontSize: 10.5, fontWeight: 800, color: spct >= 70 ? 'var(--success, #1FA98A)' : 'var(--text-subtle)' }}>{spct >= 70 ? '✓' : `${spct}%`}</span>
            </button>
          )
        })}
      </div>
    )}
    <div style={{ display: 'grid', gridTemplateColumns: journal ? 'minmax(0, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, alignItems: 'start' }}>
      {(journal ? stage.sections.filter((x) => x.key === activeKey) : stage.sections).map((s) => {
        const pct = worksheetSectionPct(s, drafts[s.key])
        const open = journal || openSection === s.key
        return (
          <div key={s.key} id={`ws-${s.key}`} style={{ ...cardStyle(pct >= 70 ? '#1FA98A' : 'var(--border)'), gridColumn: open ? '1 / -1' : undefined, scrollMarginTop: 72, ...(journal ? { borderTopLeftRadius: 0 } : {}) }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: journal ? 'default' : 'pointer' }} onClick={() => { if (!journal) setOpenSection(open ? undefined : s.key) }}>
              <div style={{ fontWeight: 800 }}>
                {s.icon} {s.label}
                {s.criterion && <span style={{ marginLeft: 8 }}><StrandBadge strand={s.criterion} compact /></span>}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{pct}%</div>
            </div>
            {open && (
              <div style={{ marginTop: 10, display: 'grid', gap: 10, maxWidth: s.fields.some((f) => f.type === 'personaChat') ? 960 : s.fields.some((f) => grade?.scores?.[revealKey(stage.key, s.key, f.key)]) ? 1180 : 720 }}>
                <SectionMarker section={s} progress={criteriaProgress} present={criteriaPresent} hideRing={journal} />
                {fbOf(s.key) && (
                  <div role="note" style={{ background: 'var(--accent-soft, var(--surface-2))', border: '2.5px solid var(--text)', borderRadius: 'var(--radius-panel)', padding: '10px 12px', display: 'grid', gap: 4 }}>
                    <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: '0.12em' }}>💬 FEEDBACK FROM YOUR TEACHER</div>
                    <div style={{ fontSize: 13.5, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>{fbOf(s.key)!.text}</div>
                    <div style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>{new Date(fbOf(s.key)!.at).toLocaleDateString()}</div>
                  </div>
                )}
                {s.blurb && <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{s.blurb}</div>}
                {s.fields.map((f) => (
                  <div key={f.key} style={{ display: 'grid', gap: 12, alignItems: 'start', gridTemplateColumns: grade?.scores?.[revealKey(stage.key, s.key, f.key)] ? 'repeat(auto-fit, minmax(300px, 1fr))' : 'minmax(0, 1fr)' }}>
                  <div style={{ display: 'grid', gap: 8, minWidth: 0 }}>
                  {f.scaffoldByChoice && <ScaffoldBox spec={f.scaffoldByChoice} lookup={(a, b, c) => me.data?.[a]?.[b]?.[c]} />}
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
                    gameState={gameState}
                    coachCtx={{ points: me.points ?? 0, scaffoldOpen: !!me.data?._spent?.[`${stage.key}.${s.key}.${f.key}`], onUnlockScaffold: () => patchMyData('_spent', { [`${stage.key}.${s.key}.${f.key}`]: true }) }}
                  />
                  </div>
                  {grade?.scores?.[revealKey(stage.key, s.key, f.key)] ? (() => {
                    const resolved = exemplarsFor(activity.exemplarsByChoice, stage.key, s.key, f, me.data)
                    return <StudentExemplarCard resolved={resolved} noun={resolved.noun} />
                  })() : null}
                  </div>
                ))}
                {journal ? (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap', paddingTop: 6, borderTop: '1.5px dashed var(--border-strong)' }}>
                    <button onClick={() => { const i = stage.sections.findIndex((x) => x.key === s.key); if (i > 0) { saveSection(s.key); setOpenSection(stage.sections[i - 1].key); window.scrollTo({ top: 0, behavior: 'smooth' }) } }} disabled={stage.sections[0]?.key === s.key} style={btnStyle('var(--text-muted)')}>← Previous page</button>
                    <button onClick={() => saveSection(s.key)} style={btnStyle('#1FA98A')}>{savedFlash === s.key ? '✅ Saved!' : '💾 Save'}</button>
                    {(() => {
                      const i = stage.sections.findIndex((x) => x.key === s.key)
                      const isLast = i === stage.sections.length - 1
                      if (isLast && !onNextStage) return null
                      return (
                        <button onClick={() => { saveSection(s.key); if (isLast) onNextStage?.(); else { setOpenSection(stage.sections[i + 1].key); window.scrollTo({ top: 0, behavior: 'smooth' }) } }} style={btnStyle('#1FA98A', true)}>
                          {isLast ? 'Finish this stage → next stage' : 'Next page →'}
                        </button>
                      )
                    })()}
                  </div>
                ) : (
                  <button onClick={() => saveSection(s.key)} style={{ ...btnStyle('#1FA98A', true), justifySelf: 'start' }}>
                    {savedFlash === s.key ? '✅ Saved!' : '💾 Save'}
                  </button>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
    </>
  )
}


/** Where the activity's interview (personaChat) field lives, if it has one. */
function findPersonaField(activity: LiveActivityDefinition): { stageKey: string; sectionKey: string; fieldKey: string; pack?: 'accessibility' | 'community' | 'everyday' | 'society' } | null {
  for (const st of activity.stages) {
    if (st.type !== 'worksheet') continue
    for (const sec of st.sections) {
      const f = sec.fields.find((x) => x.type === 'personaChat')
      if (f) return { stageKey: st.key, sectionKey: sec.key, fieldKey: f.key, pack: f.personaPack }
    }
  }
  return null
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
  rightOffset = 0,
  note,
}: {
  value: { characterId: string; messages: unknown[] } | undefined
  onChange: (v: any) => void
  onPersist: (v: any) => void
  onDraft: (text: string) => void
  sessionCode: string
  playerId: string
  /** Extra space to leave on the right, e.g. for a docked leaderboard. */
  rightOffset?: number
  /** A line shown above the chat when it is open. */
  note?: string
}) {
  const [open, setOpen] = useState(false)
  // Drag the bubble anywhere: the offset from its default corner is kept on this device.
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const dragRef = useRef<{ sx: number; sy: number; ox: number; oy: number; moved: boolean } | null>(null)
  useEffect(() => { try { const r = JSON.parse(localStorage.getItem('myp:interview-pos') || 'null'); if (r && typeof r.x === 'number' && typeof r.y === 'number') setPos(r) } catch { /* ignore */ } }, [])
  const character = value?.characterId ? getPersona(value.characterId) : undefined
  if (!character) return null
  const clamp = (x: number, y: number) => ({
    x: Math.min(0, Math.max(x, 32 - window.innerWidth + rightOffset)),
    y: Math.min(0, Math.max(y, 80 - window.innerHeight)),
  })
  const onDown = (e: React.PointerEvent) => {
    dragRef.current = { sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y, moved: false }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }
  const onMove = (e: React.PointerEvent) => {
    const d = dragRef.current
    if (!d) return
    const dx = e.clientX - d.sx, dy = e.clientY - d.sy
    if (!d.moved && Math.hypot(dx, dy) < 6) return
    d.moved = true
    setPos(clamp(d.ox + dx, d.oy + dy))
  }
  const onUp = () => {
    const d = dragRef.current
    dragRef.current = null
    if (d?.moved) { try { localStorage.setItem('myp:interview-pos', JSON.stringify(pos)) } catch { /* ignore */ } } else setOpen((o) => !o)
  }
  return (
    <div data-tour="interview" style={{ position: 'fixed', right: 16 + rightOffset, bottom: 16, transform: `translate(${pos.x}px, ${pos.y}px)`, zIndex: 46, display: 'flex', flexDirection: pos.y < -window.innerHeight / 2 ? 'column' : 'column-reverse', alignItems: 'flex-end', gap: 8, maxWidth: 'calc(100vw - 32px)' }}>
      <button
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={() => { dragRef.current = null }}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!open) } }}
        aria-expanded={open}
        title="Drag to move · tap to open"
        style={{ ...btnStyle('var(--lv-interview, #5C3FD6)', true), touchAction: 'none', cursor: 'grab', userSelect: 'none', borderRadius: 999, padding: '9px 16px 9px 10px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8, boxShadow: 'var(--lv-btn-shadow, 3px 3px 0 var(--text))' }}
      >
        <Avatar seed={character.id} size={26} />
        {open ? `✕ Close chat with ${character.name}` : `💬 Interview ${character.name}`}
      </button>
      {open && (
        <div style={{ width: 'min(360px, calc(100vw - 32px))', maxHeight: '70vh', overflowY: 'auto' }}>
          <div style={{ fontSize: 12.5, fontWeight: 800, color: '#fff', marginBottom: 6, textAlign: 'right', textShadow: '0 1px 3px rgba(0,0,0,.6)' }}>You are interviewing {character.name}{note ? <span style={{ fontWeight: 600, opacity: 0.9 }}> · {note}</span> : null}</div>
          <PersonaChatField value={value as any} onChange={onChange} onPersist={onPersist} onDraft={onDraft} sessionCode={sessionCode} playerId={playerId} />
        </div>
      )}
    </div>
  )
}

/** Worked examples for the student's own earlier choice (e.g. their design direction), shown above the field. */
function ScaffoldBox({ spec, lookup }: { spec: NonNullable<WorksheetField['scaffoldByChoice']>; lookup: (a: string, b: string, c: string) => any }) {
  const chosen = lookup(spec.from.stage, spec.from.section, spec.from.field)
  const key = typeof chosen === 'string' ? chosen : ''
  const lines = (key && spec.byValue[key]) || (key ? spec.byValue['*'] : undefined)
  return (
    <details open={!!lines} style={{ background: 'var(--accent-soft, var(--surface-2))', border: '1.5px dashed var(--border-strong)', borderRadius: 'var(--radius-control)', padding: '8px 12px', fontSize: 12.5 }}>
      <summary style={{ cursor: 'pointer', fontWeight: 800 }}>💡 {spec.title ?? 'Examples for your direction'}{key ? ` · ${key}` : ''}</summary>
      {lines ? (
        <ul style={{ margin: '8px 0 2px', paddingLeft: 18, display: 'grid', gap: 5, lineHeight: 1.45 }}>
          {lines.map((l, i) => <li key={i}>{l}</li>)}
        </ul>
      ) : (
        <div style={{ marginTop: 6, color: 'var(--text-muted)' }}>Choose your direction in “Persona &amp; Empathy” to see examples written for it. They are models, not answers to copy.</div>
      )}
    </details>
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
  coachCtx,
  gameState,
}: {
  gameState?: any
  /** Present when the field has `coach`: the student's points, whether the scaffold is already unlocked, and how to unlock it. */
  coachCtx?: { points: number; scaffoldOpen: boolean; onUnlockScaffold: () => void }
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
  const [pasteNotice, notifyPaste] = useNotice()
  if (coachCtx && (field.type === 'textarea' || field.type === 'text') && resolveCoach(field)) {
    return <AnswerCoach field={field} value={typeof value === 'string' ? value : ''} onChange={onChange} points={coachCtx.points} scaffoldOpen={coachCtx.scaffoldOpen} onUnlockScaffold={coachCtx.onUnlockScaffold} />
  }
  if (field.type === 'gameEvidence') return <GameEvidenceField game={gameState} playerId={playerId!} />
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
    const topicFrom = field.personaTopicFrom
    const preferredTopic = topicFrom ? lookup?.(topicFrom.stage, topicFrom.section, topicFrom.field) : undefined
    return <PersonaChatField value={value} onChange={onChange} onPersist={onPersist!} onDraft={onDraft!} sessionCode={sessionCode!} playerId={playerId!} pack={field.personaPack} preferredTopic={typeof preferredTopic === 'string' ? preferredTopic : undefined} />
  }
  if (field.type === 'leadCapture') {
    return <LeadCaptureField field={field} value={value} onPersist={onPersist ?? onChange} />
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
        <input value={value || ''} placeholder={field.placeholder} onChange={guardedChange(value || '', onChange, notifyPaste)} {...noPasteHandlers(notifyPaste)} style={inputStyle} />
        {pasteNotice && <span role="status" style={{ color: '#D6425E', fontWeight: 700, fontSize: 11 }}>🚫 {pasteNotice}</span>}
      </label>
    )
  }
  if (field.type === 'textarea') {
    return (
      <label style={{ display: 'grid', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
        {field.label}
        {field.hint && <span style={{ fontWeight: 400, fontSize: 11 }}>{field.hint}</span>}
        <textarea value={value || ''} placeholder={field.placeholder} onChange={guardedChange(value || '', onChange, notifyPaste)} {...noPasteHandlers(notifyPaste)} style={{ ...inputStyle, minHeight: 70 }} />
        {pasteNotice && <span role="status" style={{ color: '#D6425E', fontWeight: 700, fontSize: 11 }}>🚫 {pasteNotice}</span>}
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

  const [ideaPasteNotice, notifyIdeaPaste] = useNotice()
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
      <input value={text} disabled={locked} onChange={guardedChange(text, onType, notifyIdeaPaste)} {...noPasteHandlers(notifyIdeaPaste)} placeholder="Your idea, in a few words…" style={inputStyle} onKeyDown={(e) => e.key === 'Enter' && submit()} />
      {ideaPasteNotice && <div role="status" style={{ color: '#D6425E', fontWeight: 700, fontSize: 11.5 }}>🚫 {ideaPasteNotice}</div>}
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
