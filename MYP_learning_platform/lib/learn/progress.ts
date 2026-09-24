'use client'
import { useCallback, useEffect, useState } from 'react'

// Browser-storage progress for the free /dp-physics lessons (no sign-in needed).
// A Supabase-backed version (per-student, RLS) is the planned next step; this shape maps 1:1 onto it.
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

export function useLessonProgress(key: string) {
  const [p, setP] = useState<LessonProgress>(empty())
  useEffect(() => {
    setP({ ...empty(), ...readAll()[key] })
  }, [key])

  const update = useCallback(
    (fn: (cur: LessonProgress) => LessonProgress) => {
      const all = readAll()
      const next = fn({ ...empty(), ...all[key] })
      all[key] = next
      writeAll(all)
      setP(next)
    },
    [key],
  )
  return { progress: p, update }
}

/** Set of finished lesson keys (`module/lesson`), refreshed when any lesson saves. */
export function useDoneLessons() {
  const [done, setDone] = useState<Set<string>>(new Set())
  useEffect(() => {
    const load = () =>
      setDone(new Set(Object.entries(readAll()).filter(([, v]) => v.done).map(([k]) => k)))
    load()
    window.addEventListener('dp-physics-progress', load)
    window.addEventListener('storage', load)
    return () => {
      window.removeEventListener('dp-physics-progress', load)
      window.removeEventListener('storage', load)
    }
  }, [])
  return done
}
