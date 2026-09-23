'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { hostStorageKey } from '@/lib/design-live/hooks'
import { getLiveActivity } from '@/data/design/live/registry'
import type { LiveSessionRow, LivePlayerRow } from '@/lib/design-live/types'
import { cardStyle, btnStyle, Avatar } from './ui'

const STATUS_LABEL: Record<LiveSessionRow['status'], string> = {
  lobby: 'Lobby (not started)',
  active: 'In progress',
  ended: 'Finished',
}
const STATUS_COLOR: Record<LiveSessionRow['status'], string> = {
  lobby: '#FFCF3F',
  active: '#1FA98A',
  ended: 'var(--text-muted)',
}

type Tab = 'hosted' | 'joined'

/** "My hosted games" and "My joined games", in one place — every teacher
 *  and every student has a symmetrical way back to their own past live
 *  sessions. Starting a "New session" (host) or re-visiting a join link
 *  (student) never loses a past session's row; this page is just a
 *  window onto live_sessions / live_players filtered to the signed-in
 *  account, so there's nothing here to "lose" in the first place. */
export default function MyActivityHistory() {
  const router = useRouter()
  const [userId, setUserId] = useState<string | null | undefined>(undefined)
  const [tab, setTab] = useState<Tab>('hosted')

  const [hosted, setHosted] = useState<LiveSessionRow[]>([])
  const [hostedCounts, setHostedCounts] = useState<Record<string, number>>({})
  const [joined, setJoined] = useState<(LivePlayerRow & { sessionStatus?: LiveSessionRow['status']; activityId?: string })[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const sb = createClient()
    sb.auth.getUser().then(({ data }) => setUserId(data.user?.id ?? null))
  }, [])

  useEffect(() => {
    if (!userId) return
    ;(async () => {
      setLoading(true)
      const sb = createClient()

      const { data: hostedRows, error: hostedErr } = await sb
        .from('live_sessions')
        .select('*')
        .eq('host_id', userId)
        .order('created_at', { ascending: false })
        .limit(200)
      if (hostedErr) {
        setError(hostedErr.message)
        setLoading(false)
        return
      }
      const hRows = (hostedRows as LiveSessionRow[]) || []
      setHosted(hRows)
      if (hRows.length) {
        const codes = hRows.map((r) => r.code)
        const { data: p } = await sb.from('live_players').select('session_code').in('session_code', codes)
        const counts: Record<string, number> = {}
        ;(p || []).forEach((row: any) => {
          counts[row.session_code] = (counts[row.session_code] || 0) + 1
        })
        setHostedCounts(counts)
      }

      const { data: joinedRows, error: joinedErr } = await sb
        .from('live_players')
        .select('*')
        .eq('user_id', userId)
        .order('joined_at', { ascending: false })
        .limit(200)
      if (joinedErr) {
        setError(joinedErr.message)
        setLoading(false)
        return
      }
      const jRows = (joinedRows as LivePlayerRow[]) || []
      if (jRows.length) {
        const codes = Array.from(new Set(jRows.map((r) => r.session_code)))
        const { data: sessions } = await sb.from('live_sessions').select('code, status, activity_id').in('code', codes)
        const statusByCode: Record<string, LiveSessionRow['status']> = {}
        const activityIdByCode: Record<string, string> = {}
        ;(sessions || []).forEach((s: any) => {
          statusByCode[s.code] = s.status
          activityIdByCode[s.code] = s.activity_id
        })
        setJoined(jRows.map((r) => ({ ...r, sessionStatus: statusByCode[r.session_code], activityId: activityIdByCode[r.session_code] })))
      } else {
        setJoined([])
      }

      setLoading(false)
    })()
  }, [userId])

  const groupedHosted = useMemo(() => {
    const byActivity: Record<string, LiveSessionRow[]> = {}
    hosted.forEach((s) => {
      ;(byActivity[s.activity_id] = byActivity[s.activity_id] || []).push(s)
    })
    return byActivity
  }, [hosted])

  const groupedJoined = useMemo(() => {
    const byActivity: Record<string, typeof joined> = {}
    joined.forEach((p) => {
      const key = p.activityId || 'unknown'
      ;(byActivity[key] = byActivity[key] || []).push(p)
    })
    return byActivity
  }, [joined])

  const reopenAsHost = (session: LiveSessionRow) => {
    localStorage.setItem(hostStorageKey(session.activity_id), session.code)
    router.push(`/design/live/${session.activity_id}?host=1`)
  }

  if (userId === null) {
    return (
      <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: 'calc(100vh - 56px)' }}>
        <div className="mx-auto max-w-[900px] px-5 py-10 md:px-10" style={{ textAlign: 'center' }}>
          Sign in to see your live class history.
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: 'calc(100vh - 56px)' }}>
      <div className="mx-auto max-w-[900px] px-5 py-10 md:px-10">
        <Link href="/design/live" className="text-sm font-bold tracking-widest" style={{ color: 'var(--text-subtle)' }}>
          ← BACK TO LIVE CLASSES
        </Link>
        <h1 className="mt-2 text-3xl font-extrabold md:text-5xl" style={{ color: 'var(--text)', letterSpacing: '-1px' }}>
          📜 My Live Class History
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Nothing you&apos;ve hosted or joined is ever lost — starting a new session, or re-visiting a join link, never
          erases the last one.
        </p>

        <div className="mt-6 flex gap-2">
          <button onClick={() => setTab('hosted')} className="rounded-full px-4 py-2 text-sm font-black" style={{ background: tab === 'hosted' ? 'var(--accent)' : 'var(--surface-2)', color: tab === 'hosted' ? 'var(--text-on-accent)' : 'var(--text-muted)', border: '1px solid var(--border)' }}>
            🖥️ Hosted by me ({hosted.length})
          </button>
          <button onClick={() => setTab('joined')} className="rounded-full px-4 py-2 text-sm font-black" style={{ background: tab === 'joined' ? 'var(--accent)' : 'var(--surface-2)', color: tab === 'joined' ? 'var(--text-on-accent)' : 'var(--text-muted)', border: '1px solid var(--border)' }}>
            🙋 Joined by me ({joined.length})
          </button>
        </div>

        {error && <div style={{ ...cardStyle('#D6425E'), marginTop: 20, color: '#D6425E' }}>⚠ {error}</div>}
        {loading && <div style={{ marginTop: 24, color: 'var(--text-muted)' }}>Loading…</div>}

        {!loading && tab === 'hosted' && hosted.length === 0 && !error && (
          <div style={{ ...cardStyle(), marginTop: 24, textAlign: 'center', color: 'var(--text-muted)' }}>You haven&apos;t hosted any live sessions yet.</div>
        )}
        {!loading && tab === 'joined' && joined.length === 0 && !error && (
          <div style={{ ...cardStyle(), marginTop: 24, textAlign: 'center', color: 'var(--text-muted)' }}>You haven&apos;t joined any live sessions yet.</div>
        )}

        {tab === 'hosted' && (
          <div style={{ marginTop: 24, display: 'grid', gap: 28 }}>
            {Object.entries(groupedHosted).map(([activityId, rows]) => {
              const activity = getLiveActivity(activityId)
              return (
                <section key={activityId}>
                  <h2 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>
                    {activity ? `${activity.icon} ${activity.title}` : activityId}
                  </h2>
                  <div style={{ marginTop: 10, display: 'grid', gap: 10 }}>
                    {rows.map((s) => (
                      <div key={s.code} style={{ ...cardStyle(activity?.theme.accent), display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: '0.08em' }}>{s.code}</div>
                          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            {new Date(s.created_at).toLocaleString()} · {hostedCounts[s.code] || 0} player{hostedCounts[s.code] === 1 ? '' : 's'}
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: STATUS_COLOR[s.status] }}>● {STATUS_LABEL[s.status]}</span>
                          <button onClick={() => reopenAsHost(s)} disabled={!activity} style={btnStyle(activity?.theme.accent || 'var(--accent)', true)} title={!activity ? 'This activity no longer exists' : undefined}>
                            Reopen as host →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        )}

        {tab === 'joined' && (
          <div style={{ marginTop: 24, display: 'grid', gap: 28 }}>
            {Object.entries(groupedJoined).map(([activityId, rows]) => {
              const activity = getLiveActivity(activityId)
              return (
                <section key={activityId}>
                  <h2 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>
                    {activity ? `${activity.icon} ${activity.title}` : 'Unknown activity'}
                  </h2>
                  <div style={{ marginTop: 10, display: 'grid', gap: 10 }}>
                    {rows.map((p) => (
                      <div key={p.id} style={{ ...cardStyle(activity?.theme.accent), display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <Avatar seed={p.id} size={32} />
                          <div>
                            <div style={{ fontWeight: 800 }}>
                              {p.session_code} {activity?.teams && p.team != null ? `· ${activity.teams[p.team]?.name ?? `Team ${p.team + 1}`}` : ''}
                            </div>
                            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                              Joined {new Date(p.joined_at).toLocaleString()} · {p.points} pts
                            </div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                          {p.sessionStatus && <span style={{ fontSize: 12, fontWeight: 700, color: STATUS_COLOR[p.sessionStatus] }}>● {STATUS_LABEL[p.sessionStatus]}</span>}
                          {activity && (
                            <Link href={`/design/live/${activity.id}?s=${p.session_code}`} style={{ ...btnStyle('var(--accent)', true), textDecoration: 'none' }}>
                              Rejoin →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
