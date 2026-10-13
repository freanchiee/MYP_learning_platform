'use client'

// Live Class Creator — the resilient live-data pattern extracted from
// three one-off HTML builds (see .claude/skills/live-class-creator):
// Realtime subscription + a poll fallback + refetch on tab focus, so a
// dropped WebSocket (phone locks, network switch) never leaves a
// device stuck until a manual refresh.

import { useEffect, useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { createLiveFetcher } from '@/lib/design-live/fetcher'

/** Realtime change feed + a polling safety net + catch-up on tab focus, with the request policy in fetcher.ts:
 *  one request at a time, slow polling while realtime is connected, nothing while the tab is hidden, and bursts of
 *  change events merged into a single refetch. Returns the cleanup function. */
function startLive(sb: ReturnType<typeof createClient>, channelKey: string, table: string, filter: string, run: () => Promise<void>) {
  const fetcher = createLiveFetcher({ run, isHidden: () => document.hidden })
  const channel = sb
    .channel(`${channelKey}-${Math.random().toString(36).slice(2)}`)
    .on('postgres_changes', { event: '*', schema: 'public', table, filter }, () => fetcher.trigger())
    .subscribe((status) => fetcher.setConnected(status === 'SUBSCRIBED'))
  const onVis = () => fetcher.onVisible()
  document.addEventListener('visibilitychange', onVis)
  fetcher.start()
  return () => {
    fetcher.stop()
    sb.removeChannel(channel)
    document.removeEventListener('visibilitychange', onVis)
  }
}

export function useLiveRow<T>(
  table: string,
  filterCol: string,
  filterVal: string | null | undefined,
  onData: (row: T | null) => void,
  enabled = true
) {
  useEffect(() => {
    if (!enabled || !filterVal) return undefined
    const sb = createClient()
    let cancelled = false
    const fetchIt = async () => {
      const { data, error } = await sb.from(table).select('*').eq(filterCol, filterVal).maybeSingle()
      if (error) console.error(`live: failed to load ${table}:`, error.message)
      if (!cancelled) onData((data as T) ?? null)
    }
    const stop = startLive(sb, `${table}-row-${filterVal}`, table, `${filterCol}=eq.${filterVal}`, fetchIt)
    return () => {
      cancelled = true
      stop()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table, filterCol, filterVal, enabled])
}

export function useLiveTable<T>(
  table: string,
  filterCol: string,
  filterVal: string | null | undefined,
  onData: (rows: T[]) => void,
  enabled = true,
  orderCol = 'created_at'
) {
  useEffect(() => {
    if (!enabled || !filterVal) return undefined
    const sb = createClient()
    let cancelled = false
    const fetchIt = async () => {
      const { data, error } = await sb
        .from(table)
        .select('*')
        .eq(filterCol, filterVal)
        .order(orderCol, { ascending: true })
      if (error) {
        // Keep whatever we already showed: a failed poll must not blank the list.
        console.error(`live: failed to load ${table}:`, error.message)
        return
      }
      if (!cancelled) onData((data as T[]) ?? [])
    }
    const stop = startLive(sb, `${table}-${filterVal}`, table, `${filterCol}=eq.${filterVal}`, fetchIt)
    return () => {
      cancelled = true
      stop()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table, filterCol, filterVal, enabled, orderCol])
}

/** The localStorage key a teacher's device uses to remember which session code it's
 *  currently hosting for a given activity. Shared between LiveHost (writes/reads it to
 *  resume the active session across reloads) and the "My hosted games" history page
 *  (writes it when a teacher chooses to reopen a past session as host). */
export function hostStorageKey(activityId: string): string {
  return `liveHost_${activityId}`
}

export function generateJoinCode(): string {
  const A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'
  let c = ''
  for (let i = 0; i < 4; i++) c += A[Math.floor(Math.random() * A.length)]
  return c
}

/** Forces a re-render every `intervalMs` — used by host dashboards to expire
 *  a "typing…" indicator on its own, without waiting for a fresh realtime
 *  event from the student who stopped typing. */
export function useNowTick(intervalMs = 1000): number {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])
  return now
}

const TYPING_TTL_MS = 4000
const DRAFT_THROTTLE_MS = 900

export interface LiveDraft {
  stageKey: string
  text: string
  at: string // ISO timestamp
  sectionKey?: string // which worksheet section this text belongs to, if any
}

/** True while `draft` was reported within the last few seconds — the
 *  "is this student actively typing right now" signal shown on host
 *  dashboards. Pass `now` from useNowTick so it expires on its own. */
export function isDraftFresh(draft: LiveDraft | undefined | null, now: number): boolean {
  if (!draft?.at) return false
  return now - Date.parse(draft.at) < TYPING_TTL_MS
}

/** Throttled sync of a student's in-progress (unsaved) answer text up to
 *  their own live_players row, under `data.live` — so a host hovering over
 *  that student's name can see roughly what they're typing right now, and
 *  the dashboard can show a "✍️ typing…" cue. Never overwrites the rest of
 *  `data` (merges), and writes at most once per `DRAFT_THROTTLE_MS`. */
export function useLiveDraftReporter(
  patchRawData: (patch: Record<string, any>) => void
): (stageKey: string, text: string, sectionKey?: string) => void {
  const lastSentAt = useRef(0)
  const pending = useRef<ReturnType<typeof setTimeout> | null>(null)

  return (stageKey: string, text: string, sectionKey?: string) => {
    const send = () => {
      lastSentAt.current = Date.now()
      patchRawData({ live: { stageKey, sectionKey, text: text.slice(0, 280), at: new Date().toISOString() } as LiveDraft })
    }
    const elapsed = Date.now() - lastSentAt.current
    if (elapsed >= DRAFT_THROTTLE_MS) {
      send()
    } else {
      if (pending.current) clearTimeout(pending.current)
      pending.current = setTimeout(send, DRAFT_THROTTLE_MS - elapsed)
    }
  }
}

export interface LiveFocus {
  visible: boolean // is THIS browser tab currently the foreground one
  switches: number // how many times it's gone from visible -> hidden this session
  at: string // ISO timestamp of the last change
}

/** Tracks whether a student's browser tab is actually foregrounded on the
 *  activity, and counts how many times it's been switched away from (tab
 *  change, app switch, window minimise) — the "on task or not" signal shown
 *  on the host dashboard (see ui.tsx FocusDot). Reports immediately once
 *  `enabled`, then on every visibility change; `patchRawData` is read via a
 *  ref kept fresh every render, so a listener registered once at mount never
 *  writes back a stale snapshot of the rest of `data` (see patchMyRawData in
 *  LiveJoin.tsx, which merges into whatever it's called with). */
export function useTabFocusReporter(patchRawData: (patch: Record<string, any>) => void, initialSwitches: number, enabled: boolean) {
  const patchRef = useRef(patchRawData)
  useEffect(() => {
    patchRef.current = patchRawData
  })
  const switchesRef = useRef(initialSwitches)

  useEffect(() => {
    if (!enabled) return undefined
    switchesRef.current = initialSwitches
    const report = () => {
      const visible = document.visibilityState === 'visible'
      if (!visible) switchesRef.current += 1
      patchRef.current({ focus: { visible, switches: switchesRef.current, at: new Date().toISOString() } as LiveFocus })
    }
    document.addEventListener('visibilitychange', report)
    report()
    return () => document.removeEventListener('visibilitychange', report)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled])
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export interface LeaderboardRow {
  id: string
  name: string
  points: number
  badges: string[] | null
  nav: { stage?: number; max?: number } | null
}

/** Everyone in a session, reduced to what a leaderboard may show: name, points, badges and
 *  position (`data._nav`). Selects only those columns, so classmates' answers and drafts are
 *  never even downloaded by this view. `error` is surfaced so a failure is visible, not blank. */
export function useClassLeaderboard(code: string | null | undefined, enabled = true) {
  const [rows, setRows] = useState<LeaderboardRow[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    if (!enabled || !code) return undefined
    const sb = createClient()
    let cancelled = false
    const fetchIt = async () => {
      const { data, error: err } = await sb
        .from('live_players')
        .select('id,name,points,badges,nav:data->_nav')
        .eq('session_code', code)
        .order('joined_at', { ascending: true })
      if (cancelled) return
      if (err) { setError(err.message); return }
      setError(null)
      setRows((data as unknown as LeaderboardRow[]) ?? [])
      setLoaded(true)
    }
    const stop = startLive(sb, `leaderboard-${code}`, 'live_players', `session_code=eq.${code}`, fetchIt)
    return () => { cancelled = true; stop() }
  }, [code, enabled])
  return { rows, error, loaded }
}
