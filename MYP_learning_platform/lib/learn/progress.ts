'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

// Progress for the free /dp-physics lessons. Browser storage is always the base (works signed out, no waiting);
// when a student is signed in it is also mirrored to public.lesson_progress (RLS: own rows; a teacher reads the
// rows of students in their classes) so a class dashboard can show it and it follows the student between devices.
export interface LessonProgress {
  checks: Record<string, number> // check id -> option the student last picked
  apply: Record<string, string> // apply id -> the student's own written answer
  done?: boolean
}

const KEY = 'critabcd:dp-physics:v1'
type Store = Record<string, LessonProgress>
const empty = (): LessonProgress => ({ checks: {}, apply: {} })

function readAll(): Store {
  try {
    const raw = window.localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Store) : {}
  } catch {
    return {}
  }
}
function writeAll(s: Store) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(s))
    window.dispatchEvent(new Event('dp-physics-progress'))
  } catch {
    /* storage blocked: the lesson still works, it just will not be remembered */
  }
}

// ---- signed-in mirror (every call is best-effort: a failure never breaks the lesson) ----
let userIdPromise: Promise<string | null> | null = null
function currentUserId(): Promise<string | null> {
  if (!userIdPromise) {
    userIdPromise = createClient().auth.getUser().then(({ data }) => data.user?.id ?? null, () => null)
  }
  return userIdPromise
}

interface RemoteRow { lesson_key: string; checks: Record<string, number> | null; apply: Record<string, string> | null; done: boolean | null }

/** Union of what is on this device and what is saved remotely; a pick made on this device wins a tie. */
export function mergeProgress(local: LessonProgress | undefined, remote: Pick<RemoteRow, 'checks' | 'apply' | 'done'> | undefined): LessonProgress {
  return {
    checks: { ...(remote?.checks ?? {}), ...(local?.checks ?? {}) },
    apply: { ...(remote?.apply ?? {}), ...(local?.apply ?? {}) },
    done: !!(local?.done || remote?.done),
  }
}

async function pushRemote(key: string, p: LessonProgress) {
  const uid = await currentUserId()
  if (!uid) return
  await createClient().from('lesson_progress').upsert(
    { user_id: uid, lesson_key: key, checks: p.checks, apply: p.apply, done: !!p.done, done_at: p.done ? new Date().toISOString() : null, updated_at: new Date().toISOString() },
    { onConflict: 'user_id,lesson_key' },
  )
}

export function useLessonProgress(key: string) {
  const [p, setP] = useState<LessonProgress>(empty())
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const latest = useRef<LessonProgress>(empty())

  const schedulePush = useCallback(
    (next: LessonProgress) => {
      latest.current = next
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => { void pushRemote(key, latest.current).catch(() => {}) }, 800)
    },
    [key],
  )

  useEffect(() => {
    let cancelled = false
    const local = { ...empty(), ...readAll()[key] }
    setP(local)
    latest.current = local
    // Pull what is saved remotely (other device / earlier session), merge, and keep both sides in step.
    ;(async () => {
      const uid = await currentUserId()
      if (!uid || cancelled) return
      const { data } = await createClient().from('lesson_progress').select('lesson_key, checks, apply, done').eq('user_id', uid).eq('lesson_key', key).maybeSingle<RemoteRow>()
      if (cancelled) return
      const cur = { ...empty(), ...readAll()[key] }
      const merged = mergeProgress(cur, data ?? undefined)
      const changedLocal = JSON.stringify(merged) !== JSON.stringify(cur)
      if (changedLocal) {
        const all = readAll()
        all[key] = merged
        writeAll(all)
        setP(merged)
        latest.current = merged
      }
      // First visit while signed in (or this device knew more): make the remote copy match.
      if (!data || JSON.stringify(mergeProgress(undefined, data)) !== JSON.stringify(merged)) {
        if (Object.keys(merged.checks).length || Object.keys(merged.apply).length || merged.done) void pushRemote(key, merged).catch(() => {})
      }
    })().catch(() => {})
    return () => { cancelled = true }
  }, [key])

  // A pending save must not be lost if the student navigates away straight after answering.
  useEffect(() => {
    const flush = () => {
      if (timer.current) { clearTimeout(timer.current); timer.current = null; void pushRemote(key, latest.current).catch(() => {}) }
    }
    window.addEventListener('pagehide', flush)
    return () => { window.removeEventListener('pagehide', flush); flush() }
  }, [key])

  const update = useCallback(
    (fn: (cur: LessonProgress) => LessonProgress) => {
      const all = readAll()
      const next = fn({ ...empty(), ...all[key] })
      all[key] = next
      writeAll(all)
      setP(next)
      schedulePush(next)
    },
    [key, schedulePush],
  )
  return { progress: p, update }
}

/** Set of finished lesson keys (`module/lesson`), refreshed when any lesson saves. */
export function useDoneLessons() {
  const [done, setDone] = useState<Set<string>>(new Set())
  useEffect(() => {
    let remote: string[] = []
    const load = () =>
      setDone(new Set([...Object.entries(readAll()).filter(([, v]) => v.done).map(([k]) => k), ...remote]))
    load()
    ;(async () => {
      const uid = await currentUserId()
      if (!uid) return
      const { data } = await createClient().from('lesson_progress').select('lesson_key').eq('user_id', uid).eq('done', true)
      remote = (data ?? []).map((r: { lesson_key: string }) => r.lesson_key)
      load()
    })().catch(() => {})
    window.addEventListener('dp-physics-progress', load)
    window.addEventListener('storage', load)
    return () => {
      window.removeEventListener('dp-physics-progress', load)
      window.removeEventListener('storage', load)
    }
  }, [])
  return done
}
