'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import { useLiveRow, useLiveTable, generateJoinCode, hostStorageKey, useNowTick, isDraftFresh, type LiveDraft } from '@/lib/design-live/hooks'
import { worksheetSectionPct } from '@/lib/design-live/scoring'
import type { LiveActivityDefinition, McqStage, WorksheetStage, OpenIdeasStage, GradingStage } from '@/data/design/live/types'
import type { LiveSessionRow, LivePlayerRow, LiveGradeRow, LiveEventRow } from '@/lib/design-live/types'
import { getPersona } from '@/data/design/live/personas'
import { cardStyle, btnStyle, inputStyle, pageBg, ErrorBanner, QRCode, Avatar, ProgressStream, PlayerPreview, PlayerPreviewProvider, ChatButton, QuickReactButton, QuickReactProvider, UnreadChatContext } from './ui'
import ChatPanel from './ChatPanel'
import ClassPicker from './ClassPicker'
import { Podium } from './Podium'
import { WorksheetReviewModal } from './WorksheetReview'

function PlayerChip({ player, now, onChat, sessionCode }: { player: LivePlayerRow; now: number; onChat?: (id: string) => void; sessionCode?: string }) {
  return (
    <motion.span
      layout
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.2 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 12.5,
        fontWeight: 600,
        background: 'var(--surface-2)',
        border: '1.5px solid var(--border)',
        borderRadius: 999,
        padding: '3px 6px 3px 3px',
      }}
    >
      <PlayerPreview name={player.name} draft={player.data?.live as LiveDraft} now={now}>
        <Avatar seed={player.id} size={22} />
        {player.name}
      </PlayerPreview>
      {onChat && <ChatButton playerId={player.id} onClick={() => onChat(player.id)} title={`Message ${player.name}`} />}
      {sessionCode && <QuickReactButton sessionCode={sessionCode} playerId={player.id} playerName={player.name} />}
    </motion.span>
  )
}

export default function LiveHost({ activity }: { activity: LiveActivityDefinition }) {
  const [hostId, setHostId] = useState<string | null | undefined>(undefined) // undefined = loading, null = not signed in
  const [code, setCode] = useState<string | null>(null)
  const [session, setSession] = useState<LiveSessionRow | null>(null)
  const [players, setPlayers] = useState<LivePlayerRow[]>([])
  const [grades, setGrades] = useState<LiveGradeRow[]>([])
  const [apiError, setApiError] = useState<string | null>(null)
  const [joinUrl, setJoinUrl] = useState('')
  const [chatWithId, setChatWithId] = useState<string | null>(null)
  const [reviewPlayerId, setReviewPlayerId] = useState<string | null>(null)
  const [events, setEvents] = useState<LiveEventRow[]>([])
  const [chatReadAt, setChatReadAt] = useState<Record<string, string>>({})
  const now = useNowTick()

  useEffect(() => {
    const sb = createClient()
    sb.auth.getUser().then(({ data }) => setHostId(data.user?.id ?? null))
  }, [])

  const run = async (promise: PromiseLike<{ error: any }>) => {
    const { error } = await promise
    if (error) setApiError(error.message)
    return error
  }

  const createSession = async (uid: string) => {
    const sb = createClient()
    const newCode = generateJoinCode()
    const { error } = await sb.from('live_sessions').insert({ code: newCode, activity_id: activity.id, host_id: uid, status: 'lobby', stage_idx: 0, state: {} })
    if (error) {
      setApiError(error.message)
      return
    }
    localStorage.setItem(hostStorageKey(activity.id), newCode)
    setCode(newCode)
  }

  useEffect(() => {
    if (hostId === undefined || hostId === null) return
    const stored = localStorage.getItem(hostStorageKey(activity.id))
    if (stored) setCode(stored)
    else createSession(hostId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hostId])

  useEffect(() => {
    if (code) setJoinUrl(`${window.location.origin}${window.location.pathname}?s=${code}`)
  }, [code])

  useLiveRow<LiveSessionRow>('live_sessions', 'code', code, setSession)
  useLiveTable<LivePlayerRow>('live_players', 'session_code', code, setPlayers, true, 'joined_at')
  useLiveTable<LiveGradeRow>('live_grades', 'session_code', code, setGrades, !!activity.stages.find((s) => s.type === 'grading'))
  useLiveTable<LiveEventRow>('live_events', 'session_code', code, setEvents, !!code)

  // A student's chat message counts as "unread" for the host until the host
  // actually opens that student's chat panel (see openChat below) — gives
  // the dashboard a way to surface an incoming message without the host
  // having to guess who to check on.
  const unreadIds = useMemo(() => {
    const set = new Set<string>()
    events.forEach((e) => {
      if (e.type === 'message' && e.payload?.from === 'player' && e.player_id) {
        const readAt = chatReadAt[e.player_id]
        if (!readAt || e.created_at > readAt) set.add(e.player_id)
      }
    })
    return set
  }, [events, chatReadAt])

  const openChat = (id: string) => {
    setChatWithId(id)
    setChatReadAt((r) => ({ ...r, [id]: new Date().toISOString() }))
  }

  const newSession = () => {
    if (!hostId) return
    localStorage.removeItem(hostStorageKey(activity.id))
    setSession(null)
    setPlayers([])
    createSession(hostId)
  }

  const stage = session ? activity.stages[session.stage_idx] : undefined

  const startSession = () => run(createClient().from('live_sessions').update({ status: 'active', stage_idx: 0, state: {} }).eq('code', code))
  const advanceStage = () => {
    if (!session) return
    const next = session.stage_idx + 1
    if (next >= activity.stages.length) run(createClient().from('live_sessions').update({ status: 'ended' }).eq('code', code))
    else run(createClient().from('live_sessions').update({ stage_idx: next, state: {} }).eq('code', code))
  }
  const patchState = (patch: Record<string, any>) => {
    if (!session) return
    run(createClient().from('live_sessions').update({ state: { ...session.state, ...patch } }).eq('code', code))
  }

  if (hostId === null) {
    return (
      <div style={pageBg(activity.theme)}>
        <div style={{ ...cardStyle(), maxWidth: 420, margin: '80px auto', textAlign: 'center' }}>Sign in to host a live session.</div>
      </div>
    )
  }
  if (!session) {
    return (
      <div style={pageBg(activity.theme)}>
        <div style={{ maxWidth: 420, margin: '100px auto', textAlign: 'center', color: '#fff' }}>Setting up your session…</div>
      </div>
    )
  }

  const teamCounts = activity.teams?.map((_, t) => players.filter((p) => p.team === t).length)

  return (
    <UnreadChatContext.Provider value={unreadIds}>
    <QuickReactProvider>
    <PlayerPreviewProvider>
    <div style={pageBg(activity.theme)}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gap: 16 }}>
        <header style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, opacity: 0.7 }}>HOST SCREEN — PROJECT THIS</div>
          <h1 style={{ fontSize: 26, margin: '4px 0' }}>
            {activity.icon} {activity.title}
          </h1>
          <div style={{ fontSize: 13, opacity: 0.8 }}>{activity.subtitle}</div>
        </header>

        <ErrorBanner message={apiError} onClose={() => setApiError(null)} />

        <div style={{ ...cardStyle(activity.theme.accent), display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>SESSION CODE</div>
            <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: '0.08em' }}>{code}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', wordBreak: 'break-all', marginTop: 4 }}>{joinUrl}</div>
          </div>
          {joinUrl && <QRCode url={joinUrl} />}
          {hostId && code && <ClassPicker code={code} hostId={hostId} classId={session.class_id ?? null} accent={activity.theme.accent} />}
          <div style={{ display: 'grid', gap: 6 }}>
            <button onClick={newSession} style={{ ...btnStyle('var(--text-muted)'), fontSize: 12 }}>
              ↻ New session
            </button>
            <Link href="/design/live/history" style={{ ...btnStyle('var(--text-muted)'), fontSize: 12, textAlign: 'center', textDecoration: 'none' }}>
              📜 My history
            </Link>
          </div>
        </div>

        {session.status === 'lobby' && (
          <div style={{ display: 'grid', gap: 14 }}>
            {activity.teams ? (
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`, gap: 12 }}>
                {activity.teams.map((t, ti) => (
                  <div key={t.name} style={cardStyle(t.color)}>
                    <div style={{ fontWeight: 800, color: t.color }}>
                      {t.icon} {t.name}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                      <AnimatePresence>
                        {players.filter((p) => p.team === ti).map((p) => (
                          <PlayerChip key={p.id} player={p} now={now} onChat={openChat} sessionCode={code!} />
                        ))}
                      </AnimatePresence>
                      {teamCounts?.[ti] === 0 && <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>Waiting…</span>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={cardStyle()}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Roster</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  <AnimatePresence>
                    {players.map((p) => (
                      <PlayerChip key={p.id} player={p} now={now} onChat={openChat} sessionCode={code!} />
                    ))}
                  </AnimatePresence>
                  {players.length === 0 && <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>Waiting for students to join…</span>}
                </div>
              </div>
            )}
            <div style={{ textAlign: 'center' }}>
              <button onClick={startSession} disabled={players.length === 0} style={btnStyle(activity.theme.accent, true, true)}>
                ▶ Start — {players.length} joined
              </button>
            </div>
          </div>
        )}

        {session.status === 'active' && stage && (
          <StageHost activity={activity} stage={stage} session={session} players={players} grades={grades} patchState={patchState} advanceStage={advanceStage} run={run} now={now} onChat={openChat} onReview={setReviewPlayerId} />
        )}

        {session.status === 'ended' && <EndedHost activity={activity} players={players} session={session} onRestart={newSession} />}
      </div>

      {chatWithId && (
        <div
          onClick={() => setChatWithId(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: 380 }}>
            <ChatPanel
              sessionCode={code!}
              playerId={chatWithId}
              playerName={players.find((p) => p.id === chatWithId)?.name || 'this student'}
              asHost
              accent={activity.theme.accent}
            />
            <button onClick={() => setChatWithId(null)} style={{ ...btnStyle('var(--text-muted)'), marginTop: 8, width: '100%' }}>
              Close
            </button>
          </div>
        </div>
      )}

      {reviewPlayerId && stage?.type === 'worksheet' && (
        <WorksheetReviewModal
          stage={stage}
          player={players.find((p) => p.id === reviewPlayerId)!}
          grade={grades.find((g) => g.player_id === reviewPlayerId)}
          sessionCode={code!}
          onClose={() => setReviewPlayerId(null)}
        />
      )}
    </div>
    </PlayerPreviewProvider>
    </QuickReactProvider>
    </UnreadChatContext.Provider>
  )
}

function StageHost({
  activity,
  stage,
  session,
  players,
  grades,
  patchState,
  advanceStage,
  run,
  now,
  onChat,
  onReview,
}: {
  activity: LiveActivityDefinition
  stage: LiveActivityDefinition['stages'][number]
  session: LiveSessionRow
  players: LivePlayerRow[]
  grades: LiveGradeRow[]
  patchState: (patch: Record<string, any>) => void
  advanceStage: () => void
  run: (p: PromiseLike<{ error: any }>) => Promise<any>
  now: number
  onChat: (id: string) => void
  onReview: (id: string) => void
}) {
  const isLastStage = session.stage_idx >= activity.stages.length - 1
  const advanceLabel = isLastStage ? 'Finish & show results →' : 'Next stage →'

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <div style={{ textAlign: 'center', color: '#fff', fontWeight: 800, fontSize: 15 }}>
        {stage.icon} {stage.label}
      </div>

      {stage.type === 'mcq' && <McqHost activity={activity} stage={stage} session={session} players={players} patchState={patchState} now={now} onChat={onChat} />}
      {stage.type === 'worksheet' && <WorksheetHost stage={stage} players={players} now={now} onChat={onChat} sessionCode={session.code} onReview={onReview} />}
      {stage.type === 'openIdeas' && <OpenIdeasHost activity={activity} stage={stage} session={session} players={players} patchState={patchState} now={now} onChat={onChat} />}
      {stage.type === 'grading' && <GradingHost activity={activity} stage={stage} players={players} grades={grades} run={run} session={session} />}

      <div style={{ textAlign: 'center' }}>
        <button onClick={advanceStage} style={btnStyle(activity.theme.accent, true, true)}>
          {advanceLabel}
        </button>
      </div>
    </div>
  )
}

function McqHost({
  activity,
  stage,
  session,
  players,
  patchState,
  now,
  onChat,
}: {
  activity: LiveActivityDefinition
  stage: McqStage
  session: LiveSessionRow
  players: LivePlayerRow[]
  patchState: (patch: Record<string, any>) => void
  now: number
  onChat: (id: string) => void
}) {
  const st = session.state?.[stage.key] || { mcqIndex: 0, locked: false, revealed: false }
  const setSt = (patch: Record<string, any>) => patchState({ [stage.key]: { ...st, ...patch } })

  if (stage.pacing === 'self-paced') {
    return (
      <div style={{ display: 'grid', gap: 10 }}>
        <div style={{ ...cardStyle(activity.theme.accent), color: 'var(--text-muted)', fontSize: 13, textAlign: 'center' }}>
          Free explore — everyone works through all {stage.questions.length} questions at their own pace. Watch progress live below.
        </div>
        <McqDashboard stage={stage} players={players} now={now} onChat={onChat} sessionCode={session.code} />
      </div>
    )
  }

  const q = stage.questions[st.mcqIndex]
  const answersHere = players.map((p) => p.data?.[stage.key]?.answers?.[st.mcqIndex]).filter(Boolean)
  const teamTally: Record<number, { correct: number; total: number }> = {}
  activity.teams?.forEach((_, ti) => (teamTally[ti] = { correct: 0, total: 0 }))
  players.forEach((p) => {
    const a = p.data?.[stage.key]?.answers?.[st.mcqIndex]
    if (a && p.team != null) {
      teamTally[p.team] = teamTally[p.team] || { correct: 0, total: 0 }
      teamTally[p.team].total++
      if (a.correct) teamTally[p.team].correct++
    }
  })

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
        Question {st.mcqIndex + 1} of {stage.questions.length}
        {q.context ? ` · ${q.context}` : ''}
      </div>
      <div style={{ ...cardStyle(activity.theme.accent), textAlign: 'center' }}>
        {q.icon && <div style={{ fontSize: 30 }}>{q.icon}</div>}
        <div style={{ fontSize: 17, fontWeight: 700, marginTop: 4 }}>{q.q}</div>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => setSt({ locked: !st.locked })} style={btnStyle(st.locked ? '#D6425E' : '#1FA98A', true)}>
          {st.locked ? '🔒 Locked' : '🔓 Open'}
        </button>
        <button onClick={() => setSt({ revealed: !st.revealed })} style={btnStyle('#E8672A', st.revealed)}>
          {st.revealed ? '✓ Revealed' : '👁️ Reveal answer'}
        </button>
        {activity.teams && (
          <button
            disabled={!!st.scored}
            onClick={() => {
              const points = stage.pointsPerCorrect ?? 10
              const teamScores = { ...(session.state?.teamScores || {}) }
              activity.teams!.forEach((_, ti) => {
                teamScores[ti] = (teamScores[ti] || 0) + (teamTally[ti]?.correct || 0) * points
              })
              patchState({ teamScores, [stage.key]: { ...st, scored: true } })
            }}
            style={btnStyle('#FFCF3F', true)}
          >
            🏅 Add round to team score
          </button>
        )}
        <button
          disabled={st.mcqIndex >= stage.questions.length - 1}
          onClick={() => patchState({ [stage.key]: { mcqIndex: st.mcqIndex + 1, locked: false, revealed: false } })}
          style={btnStyle(activity.theme.accent, true)}
        >
          Next question →
        </button>
      </div>
      {activity.teams && (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`, gap: 10 }}>
          {activity.teams.map((t, ti) => (
            <div key={t.name} style={{ ...cardStyle(t.color), textAlign: 'center' }}>
              <div style={{ fontWeight: 800, color: t.color, fontSize: 12.5 }}>
                {t.icon} {t.short}
              </div>
              <div style={{ fontSize: 20, fontWeight: 800 }}>
                {teamTally[ti]?.correct || 0}/{teamTally[ti]?.total || 0}
              </div>
              <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>correct so far</div>
            </div>
          ))}
        </div>
      )}
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', textAlign: 'center' }}>{answersHere.length} of {players.length} answered</div>
      <McqRoster stage={stage} mcqIndex={st.mcqIndex} players={players} now={now} onChat={onChat} sessionCode={session.code} />
    </div>
  )
}

/** Live per-student view for a HOST-PACED quiz, where everyone answers the
 *  same question together: who has answered the current question (and
 *  whether they got it right), plus a running score across the whole stage.
 *  Same hover-peek / chat / react controls as the other host dashboards. */
function McqRoster({
  stage,
  mcqIndex,
  players,
  now,
  onChat,
  sessionCode,
}: {
  stage: McqStage
  mcqIndex: number
  players: LivePlayerRow[]
  now: number
  onChat: (id: string) => void
  sessionCode: string
}) {
  const total = stage.questions.length
  return (
    <div style={cardStyle()}>
      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, color: 'var(--text-muted)', marginBottom: 8 }}>
        STUDENTS — QUESTION {mcqIndex + 1} OF {total}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 8 }}>
        {players.map((p) => {
          const answers: Record<number, { choiceIdx: number; correct: boolean }> = p.data?.[stage.key]?.answers || {}
          const a = answers[mcqIndex]
          const correctSoFar = Object.values(answers).filter((x) => x.correct).length
          const color = !a ? 'var(--text-muted)' : a.correct ? '#1FA98A' : '#D6425E'
          return (
            <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 6, border: '1.5px solid var(--border)', borderRadius: 10, padding: '6px 8px', fontSize: 12.5 }}>
              <PlayerPreview name={p.name} draft={p.data?.live as LiveDraft} now={now}>
                <Avatar seed={p.id} size={22} />
                <span style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 110 }}>{p.name}</span>
              </PlayerPreview>
              <span style={{ marginLeft: 'auto', fontWeight: 800, color, whiteSpace: 'nowrap' }}>{!a ? '● waiting' : a.correct ? '✓' : '✕'}</span>
              <span style={{ fontSize: 10.5, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                {correctSoFar}/{Object.keys(answers).length}
              </span>
              <ChatButton playerId={p.id} onClick={() => onChat(p.id)} title={`Message ${p.name}`} />
              <QuickReactButton sessionCode={sessionCode} playerId={p.id} playerName={p.name} />
            </div>
          )
        })}
        {!players.length && <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>No one&apos;s joined yet.</div>}
      </div>
    </div>
  )
}

function McqDashboard({ stage, players, now, onChat, sessionCode }: { stage: McqStage; players: LivePlayerRow[]; now: number; onChat: (id: string) => void; sessionCode: string }) {
  return (
    <div style={{ ...cardStyle(), overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 12 }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '4px 8px' }}>Student</th>
            {stage.questions.map((_, i) => (
              <th key={i} style={{ padding: '4px 5px', fontWeight: 800, minWidth: 26 }}>
                Q{i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr key={p.id} style={{ borderTop: '1px solid var(--border)' }}>
              <td style={{ padding: '6px 8px', fontWeight: 700, whiteSpace: 'nowrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <PlayerPreview name={p.name} draft={p.data?.live as LiveDraft} now={now}>
                    <Avatar seed={p.id} size={22} />
                    {p.name}
                  </PlayerPreview>
                  <ChatButton playerId={p.id} onClick={() => onChat(p.id)} title={`Message ${p.name}`} />
                  <QuickReactButton sessionCode={sessionCode} playerId={p.id} playerName={p.name} />
                </div>
              </td>
              {stage.questions.map((_, i) => {
                const a = p.data?.[stage.key]?.answers?.[i]
                const symbol = !a ? '●' : a.correct ? '✓' : '✕'
                const color = !a ? 'var(--border-strong)' : a.correct ? '#1FA98A' : '#D6425E'
                return (
                  <td key={i} style={{ textAlign: 'center', padding: '6px 3px', color, fontWeight: 800 }}>
                    {symbol}
                  </td>
                )
              })}
            </tr>
          ))}
          {!players.length && (
            <tr>
              <td colSpan={stage.questions.length + 1} style={{ padding: 10, textAlign: 'center', color: 'var(--text-muted)' }}>
                No one&apos;s joined yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

function WorksheetHost({
  stage,
  players,
  now,
  onChat,
  sessionCode,
  onReview,
}: {
  stage: WorksheetStage
  players: LivePlayerRow[]
  now: number
  onChat: (id: string) => void
  sessionCode: string
  onReview: (id: string) => void
}) {
  return (
    <div style={{ ...cardStyle(), overflowX: 'auto' }}>
      <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 12 }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '4px 8px' }}>Student</th>
            {stage.sections.map((s) => (
              <th key={s.key} style={{ padding: '4px 5px', fontWeight: 800, minWidth: 50 }}>
                {s.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr key={p.id} style={{ borderTop: '1px solid var(--border)' }}>
              <td style={{ padding: '6px 8px', fontWeight: 700, whiteSpace: 'nowrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <PlayerPreview name={p.name} draft={p.data?.live as LiveDraft} now={now}>
                    <Avatar seed={p.id} size={22} />
                    {p.name}
                  </PlayerPreview>
                  <ChatButton playerId={p.id} onClick={() => onChat(p.id)} title={`Message ${p.name}`} />
                  <QuickReactButton sessionCode={sessionCode} playerId={p.id} playerName={p.name} />
                  <button
                    onClick={() => onReview(p.id)}
                    title={`Review & score ${p.name}'s work`}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 11, padding: 0, lineHeight: 1 }}
                  >
                    📝
                  </button>
                </div>
              </td>
              {stage.sections.map((s) => {
                const pct = worksheetSectionPct(s, p.data?.[stage.key]?.[s.key] || {})
                return (
                  <td key={s.key} style={{ textAlign: 'center', padding: '6px 3px' }}>
                    <ProgressStream pct={pct} draft={p.data?.live as LiveDraft} sectionKey={s.key} now={now} name={p.name} />
                  </td>
                )
              })}
            </tr>
          ))}
          {!players.length && (
            <tr>
              <td colSpan={stage.sections.length + 1} style={{ padding: 10, textAlign: 'center', color: 'var(--text-muted)' }}>
                No one&apos;s joined yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

function OpenIdeasHost({
  activity,
  stage,
  session,
  players,
  patchState,
  now,
  onChat,
}: {
  activity: LiveActivityDefinition
  stage: OpenIdeasStage
  session: LiveSessionRow
  players: LivePlayerRow[]
  patchState: (patch: Record<string, any>) => void
  now: number
  onChat: (id: string) => void
}) {
  const st = session.state?.[stage.key] || { ideaIndex: 0, locked: false, constraintIdx: null }
  const setSt = (patch: Record<string, any>) => patchState({ [stage.key]: { ...st, ...patch } })
  const prompt = stage.prompts[st.ideaIndex]
  const submissions = players
    .map((p) => ({ player: p, sub: p.data?.[stage.key]?.[st.ideaIndex] }))
    .filter((r) => r.sub?.text)
  const submittedIds = new Set(submissions.map((r) => r.player.id))
  const typingNow = players.filter((p) => {
    const draft = p.data?.live as LiveDraft | undefined
    return !submittedIds.has(p.id) && draft?.stageKey === stage.key && isDraftFresh(draft, now)
  })

  const awardBonus = (team: number, points: number) => {
    const teamScores = { ...(session.state?.teamScores || {}) }
    teamScores[team] = (teamScores[team] || 0) + points
    patchState({ teamScores })
  }

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
        Prompt {st.ideaIndex + 1} of {stage.prompts.length}
      </div>
      <div style={{ ...cardStyle(activity.theme.accent), textAlign: 'center' }}>
        {prompt.icon && <div style={{ fontSize: 26 }}>{prompt.icon}</div>}
        <div style={{ fontSize: 16, fontWeight: 800 }}>{prompt.text}</div>
      </div>
      {stage.constraintCards && st.constraintIdx != null && (
        <div style={{ ...cardStyle('#D6425E'), textAlign: 'center' }}>
          <div style={{ fontWeight: 800 }}>
            {stage.constraintCards[st.constraintIdx].icon} CONSTRAINT: {stage.constraintCards[st.constraintIdx].label}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{stage.constraintCards[st.constraintIdx].text}</div>
        </div>
      )}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => setSt({ locked: !st.locked })} style={btnStyle(st.locked ? '#D6425E' : '#1FA98A', true)}>
          {st.locked ? '🔒 Locked' : '🔓 Open'}
        </button>
        {stage.constraintCards && (
          <button onClick={() => setSt({ constraintIdx: Math.floor(Math.random() * stage.constraintCards!.length) })} style={btnStyle('#FFCF3F', true)}>
            🎲 Draw a constraint
          </button>
        )}
        <button
          disabled={st.ideaIndex >= stage.prompts.length - 1}
          onClick={() => patchState({ [stage.key]: { ideaIndex: st.ideaIndex + 1, locked: false, constraintIdx: null } })}
          style={btnStyle(activity.theme.accent, true)}
        >
          Next prompt →
        </button>
      </div>
      {activity.teams && stage.bonusCategories && (
        <div style={cardStyle('#FFCF3F')}>
          <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 8 }}>🏅 Teacher bonus scoring</div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(180px, 1fr))`, gap: 14 }}>
            {activity.teams.map((t, ti) => (
              <div key={t.name}>
                <div style={{ fontWeight: 800, fontSize: 13, color: t.color, marginBottom: 6 }}>
                  {t.icon} {t.name}
                </div>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {stage.bonusCategories!.map((c) => (
                    <button key={c.key} onClick={() => awardBonus(ti, c.points)} title={`${c.label} +${c.points}`} style={{ ...btnStyle('var(--surface)'), fontSize: 11, padding: '5px 8px' }}>
                      {c.icon} +{c.points}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {typingNow.length > 0 && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          {typingNow.map((p) => (
            <PlayerPreview key={p.id} name={p.name} draft={p.data?.live as LiveDraft} now={now}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11.5, color: 'rgba(255,255,255,0.85)' }}>
                <Avatar seed={p.id} size={18} />
                {p.name}
              </span>
            </PlayerPreview>
          ))}
        </div>
      )}
      <div style={{ ...cardStyle(), maxHeight: 180, overflowY: 'auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 6 }}>SUBMISSIONS ({submissions.length}/{players.length})</div>
        <div style={{ display: 'grid', gap: 6 }}>
          {submissions.map(({ player, sub }) => (
            <div key={player.id} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5 }}>
              <PlayerPreview name={player.name} draft={player.data?.live as LiveDraft} now={now}>
                <Avatar seed={player.id} size={20} />
              </PlayerPreview>
              <strong>{player.name}:</strong> {sub.text}
              <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
                <ChatButton playerId={player.id} onClick={() => onChat(player.id)} title={`Message ${player.name}`} />
                <QuickReactButton sessionCode={session.code} playerId={player.id} playerName={player.name} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GradingHost({
  activity,
  stage,
  players,
  grades,
  run,
  session,
}: {
  activity: LiveActivityDefinition
  stage: GradingStage
  players: LivePlayerRow[]
  grades: LiveGradeRow[]
  run: (p: PromiseLike<{ error: any }>) => Promise<any>
  session: LiveSessionRow
}) {
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      {stage.intro && (
        <div style={{ ...cardStyle(activity.theme.accent), textAlign: 'center' }}>
          <div style={{ fontWeight: 800 }}>{stage.intro.title}</div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{stage.intro.blurb}</div>
        </div>
      )}
      {players.map((p) => (
        <GradeCard key={p.id} stage={stage} player={p} grade={grades.find((g) => g.player_id === p.id)} sessionCode={session.code} run={run} />
      ))}
    </div>
  )
}

// Scans a player's worksheet data (shape: data[stageKey][sectionKey][fieldKey])
// for a personaChat field's value, regardless of which activity/stage/section
// it lives under — so the grading card works for any activity that uses the
// personaChat field type, not just this one.
function findPersonaChat(data: any): { characterId: string; count: number } | null {
  if (!data || typeof data !== 'object') return null
  for (const stageVal of Object.values(data)) {
    if (!stageVal || typeof stageVal !== 'object') continue
    for (const sectionVal of Object.values(stageVal as Record<string, unknown>)) {
      if (!sectionVal || typeof sectionVal !== 'object') continue
      for (const fieldVal of Object.values(sectionVal as Record<string, unknown>)) {
        const v = fieldVal as any
        if (v && typeof v === 'object' && typeof v.characterId === 'string' && v.characterId && Array.isArray(v.messages)) {
          return { characterId: v.characterId, count: v.messages.filter((m: any) => m.from === 'student').length }
        }
      }
    }
  }
  return null
}

function GradeCard({
  stage,
  player,
  grade,
  sessionCode,
  run,
}: {
  stage: GradingStage
  player: LivePlayerRow
  grade?: LiveGradeRow
  sessionCode: string
  run: (p: PromiseLike<{ error: any }>) => Promise<any>
}) {
  const [open, setOpen] = useState(false)
  const [scores, setScores] = useState<Record<string, string>>(() => Object.fromEntries(stage.strands.map((s) => [s.key, grade?.scores?.[s.key] != null ? String(grade.scores[s.key]) : ''])))
  const [feedback, setFeedback] = useState(grade?.feedback || '')
  const personaChat = findPersonaChat(player.data)

  const save = () =>
    run(
      createClient()
        .from('live_grades')
        .upsert({
          session_code: sessionCode,
          player_id: player.id,
          scores: Object.fromEntries(stage.strands.map((s) => [s.key, scores[s.key] ? Number(scores[s.key]) : null])),
          feedback,
          graded: true,
          updated_at: new Date().toISOString(),
        })
    )

  return (
    <div style={cardStyle(grade?.graded ? '#1FA98A' : 'var(--border)')}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }} onClick={() => setOpen(!open)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 800 }}>
          <Avatar seed={player.id} size={26} />
          {player.name}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{grade?.graded ? '✅ graded' : 'not graded'}</div>
      </div>
      {open && (
        <div style={{ marginTop: 10, display: 'grid', gap: 10 }}>
          {personaChat && (
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
              🎭 Interviewed <strong>{getPersona(personaChat.characterId)?.name || personaChat.characterId}</strong> — {personaChat.count} question{personaChat.count === 1 ? '' : 's'} asked
            </div>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${stage.strands.length}, 1fr)`, gap: 6 }}>
            {stage.strands.map((s) => (
              <div key={s.key}>
                <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--text-muted)' }}>{s.key}</div>
                <select value={scores[s.key]} onChange={(e) => setScores({ ...scores, [s.key]: e.target.value })} style={{ ...inputStyle, padding: '6px 4px', fontSize: 12 }}>
                  <option value="">–</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <textarea placeholder="Feedback for this student…" value={feedback} onChange={(e) => setFeedback(e.target.value)} style={{ ...inputStyle, minHeight: 60 }} />
          <button onClick={save} style={btnStyle('#1FA98A', true)}>
            💾 Save grade
          </button>
        </div>
      )}
    </div>
  )
}

function EndedHost({ activity, players, session, onRestart }: { activity: LiveActivityDefinition; players: LivePlayerRow[]; session: LiveSessionRow; onRestart: () => void }) {
  const sorted = useMemo(() => [...players].sort((a, b) => b.points - a.points), [players])
  const teamScores: Record<number, number> = session.state?.teamScores || {}
  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <div style={{ ...cardStyle('#FFCF3F'), textAlign: 'center' }}>
        <div style={{ fontSize: 20, fontWeight: 800 }}>🏆 Final scores</div>
      </div>
      {activity.teams ? (
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(160px, 1fr))`, gap: 12 }}>
          {activity.teams.map((t, ti) => (
            <div key={t.name} style={{ ...cardStyle(t.color), textAlign: 'center' }}>
              <div style={{ fontWeight: 800, color: t.color }}>
                {t.icon} {t.name}
              </div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>{teamScores[ti] || 0}</div>
            </div>
          ))}
        </div>
      ) : (
        <Podium entries={sorted.map((p) => ({ id: p.id, name: p.name, points: p.points }))} accent={activity.theme.accent} />
      )}
      {activity.debriefQuestions && (
        <div style={cardStyle('var(--accent-2)')}>
          <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 8 }}>💬 Talk it through</div>
          <div style={{ display: 'grid', gap: 8 }}>
            {activity.debriefQuestions.map((q, i) => (
              <div key={i} style={{ fontSize: 13.5, background: 'var(--surface-2)', borderRadius: 8, padding: '8px 10px', border: '1.5px solid var(--border)' }}>
                {q}
              </div>
            ))}
          </div>
        </div>
      )}
      <div style={{ textAlign: 'center' }}>
        <button onClick={onRestart} style={btnStyle(activity.theme.accent, true, true)}>
          ↻ Start a new class
        </button>
      </div>
    </div>
  )
}
