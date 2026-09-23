'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { hostStorageKey } from '@/lib/design-live/hooks'
import { getLiveActivity } from '@/data/design/live/registry'
import type { LiveSessionRow } from '@/lib/design-live/types'
import { cardStyle, btnStyle } from './ui'

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

export default function HostHistory() {
  const router = useRouter()
  const [userId, setUserId] = useState<string | null | undefined>(undefined)
  const [sessions, setSessions] = useState<LiveSessionRow[]>([])
  const [playerCounts, setPlayerCounts] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const sb = createClient()
    sb.auth.getUser().then(({ data }) => setUserId(data.user?.id ?? null))
  }, [])

  useEffect(() => {
    if (!userId) return
    ;(async () => {
      const sb = createClient()
      const { data, error: sessErr } = await sb
        .from('live_sessions')
        .select('*')
        .eq('host_id', userId)
        .order('created_at', { ascending: false })
        .limit(200)
      if (sessErr) {
        setError(sessErr.message)
        setLoading(false)
        return
      }
      const rows = (data as LiveSessionRow[]) || []
      setSessions(rows)
      setLoading(false)

      if (rows.length) {
        const codes = rows.map((r) => r.code)
        const { data: players } = await sb.from('live_players').select('session_code').in('session_code', codes)
        const counts: Record<string, number> = {}
        ;(players || []).forEach((p: any) => {
          counts[p.session_code] = (counts[p.session_code] || 0) + 1
        })
        setPlayerCounts(counts)
      }
    })()
  }, [userId])

  const grouped = useMemo(() => {
    const byActivity: Record<string, LiveSessionRow[]> = {}
    sessions.forEach((s) => {
      ;(byActivity[s.activity_id] = byActivity[s.activity_id] || []).push(s)
    })
    return byActivity
  }, [sessions])

  const reopen = (session: LiveSessionRow) => {
    localStorage.setItem(hostStorageKey(session.activity_id), session.code)
    router.push(`/design/live/${session.activity_id}?host=1`)
  }

  if (userId === null) {
    return (
      <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: 'calc(100vh - 56px)' }}>
        <div className="mx-auto max-w-[900px] px-5 py-10 md:px-10" style={{ textAlign: 'center' }}>
          Sign in to see your hosted games history.
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
          📜 My Hosted Games
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Every session you&apos;ve ever hosted, across every activity — nothing is lost when you start a new one. Reopen any
          past session to review the roster, grades or final scores.
        </p>

        {error && (
          <div style={{ ...cardStyle('#D6425E'), marginTop: 20, color: '#D6425E' }}>⚠ {error}</div>
        )}

        {loading && <div style={{ marginTop: 24, color: 'var(--text-muted)' }}>Loading…</div>}

        {!loading && sessions.length === 0 && !error && (
          <div style={{ ...cardStyle(), marginTop: 24, textAlign: 'center', color: 'var(--text-muted)' }}>
            You haven&apos;t hosted any live sessions yet.
          </div>
        )}

        <div style={{ marginTop: 24, display: 'grid', gap: 28 }}>
          {Object.entries(grouped).map(([activityId, rows]) => {
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
                          {new Date(s.created_at).toLocaleString()} · {playerCounts[s.code] || 0} player{playerCounts[s.code] === 1 ? '' : 's'}
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: STATUS_COLOR[s.status] }}>● {STATUS_LABEL[s.status]}</span>
                        <button onClick={() => reopen(s)} disabled={!activity} style={btnStyle(activity?.theme.accent || 'var(--accent)', true)} title={!activity ? 'This activity no longer exists' : undefined}>
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
      </div>
    </div>
  )
}
