'use client'

// Live Class Creator — the resilient live-data pattern extracted from
// three one-off HTML builds (see .claude/skills/live-class-creator):
// Realtime subscription + a poll fallback + refetch on tab focus, so a
// dropped WebSocket (phone locks, network switch) never leaves a
// device stuck until a manual refresh.

import { useEffect, useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const POLL_MS = 3000

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
    fetchIt()
    const channel = sb
      .channel(`${table}-row-${filterVal}-${Math.random().toString(36).slice(2)}`)
      .on('postgres_changes', { event: '*', schema: 'public', table, filter: `${filterCol}=eq.${filterVal}` }, fetchIt)
      .subscribe()
    const pollId = setInterval(fetchIt, POLL_MS)
    const onVis = () => {
      if (!document.hidden) fetchIt()
    }
    document.addEventListener('visibilitychange', onVis)
    return () => {
      cancelled = true
      sb.removeChannel(channel)
      clearInterval(pollId)
      document.removeEventListener('visibilitychange', onVis)
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
      if (error) console.error(`live: failed to load ${table}:`, error.message)
      if (!cancelled) onData((data as T[]) ?? [])
    }
    fetchIt()
    const channel = sb
      .channel(`${table}-${filterVal}-${Math.random().toString(36).slice(2)}`)
      .on('postgres_changes', { event: '*', schema: 'public', table, filter: `${filterCol}=eq.${filterVal}` }, fetchIt)
      .subscribe()
    const pollId = setInterval(fetchIt, POLL_MS)
    const onVis = () => {
      if (!document.hidden) fetchIt()
    }
    document.addEventListener('visibilitychange', onVis)
    return () => {
      cancelled = true
      sb.removeChannel(channel)
      clearInterval(pollId)
      document.removeEventListener('visibilitychange', onVis)
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
): (stageKey: string, text: string) => void {
  const lastSentAt = useRef(0)
  const pending = useRef<ReturnType<typeof setTimeout> | null>(null)

  return (stageKey: string, text: string) => {
    const send = () => {
      lastSentAt.current = Date.now()
      patchRawData({ live: { stageKey, text: text.slice(0, 280), at: new Date().toISOString() } as LiveDraft })
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

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
