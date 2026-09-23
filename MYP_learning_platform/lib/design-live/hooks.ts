'use client'

// Live Class Creator — the resilient live-data pattern extracted from
// three one-off HTML builds (see .claude/skills/live-class-creator):
// Realtime subscription + a poll fallback + refetch on tab focus, so a
// dropped WebSocket (phone locks, network switch) never leaves a
// device stuck until a manual refresh.

import { useEffect } from 'react'
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

export function generateJoinCode(): string {
  const A = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'
  let c = ''
  for (let i = 0; i < 4; i++) c += A[Math.floor(Math.random() * A.length)]
  return c
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
