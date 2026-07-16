'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { CriterionKey } from '@/data/design/cycle'

export interface DesignProgress {
  answers: Record<string, string> // `${crit}:${strandIndex}` -> text, or a namespaced key for artifact data
  bands: Partial<Record<CriterionKey, number>> // crit -> band index (0–3)
}

/**
 * Load/save a student's design-folder progress: localStorage first (instant,
 * offline), then the signed-in user's `design_progress` row (cross-device),
 * with a debounced upsert back to Supabase. Shared by ProjectWorkspace (core
 * exemplar projects) and CaseStudyWorkspace (advanced case studies) — both
 * just need a unique `id` to namespace the row.
 */
export function useDesignProgress(id: string) {
  const storageKey = `myp-design:${id}`
  const supabase = useMemo(() => createClient(), [])
  const [saved, setSaved] = useState<DesignProgress>({ answers: {}, bands: {} })
  const [loaded, setLoaded] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) setSaved(JSON.parse(raw))
    } catch {
      /* corrupt/absent — start fresh */
    }
    ;(async () => {
      let uid: string | null = null
      try {
        uid = (await supabase.auth.getUser()).data.user?.id ?? null
      } catch {
        /* no session / no backend (dev) — stay local-only */
      }
      if (!active) return
      setUserId(uid)
      if (uid) {
        const { data } = await supabase
          .from('design_progress')
          .select('answers, bands')
          .eq('user_id', uid)
          .eq('project_id', id)
          .maybeSingle()
        if (active && data) setSaved({ answers: data.answers ?? {}, bands: data.bands ?? {} })
      }
      if (active) setLoaded(true)
    })()
    return () => {
      active = false
    }
  }, [storageKey, id, supabase])

  const firstSave = useRef(true)
  useEffect(() => {
    if (!loaded) return
    localStorage.setItem(storageKey, JSON.stringify(saved))
    if (!userId) return
    if (firstSave.current) {
      firstSave.current = false
      return
    }
    const t = setTimeout(() => {
      supabase
        .from('design_progress')
        .upsert(
          {
            user_id: userId,
            project_id: id,
            answers: saved.answers,
            bands: saved.bands,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'user_id,project_id' },
        )
        .then(({ error }) => {
          if (error) console.warn('design_progress sync failed:', error.message)
        })
    }, 800)
    return () => clearTimeout(t)
  }, [saved, loaded, userId, storageKey, id, supabase])

  const setAnswer = (key: string, text: string) =>
    setSaved((s) => ({ ...s, answers: { ...s.answers, [key]: text } }))
  const setBand = (crit: CriterionKey, idx: number) =>
    setSaved((s) => ({ ...s, bands: { ...s.bands, [crit]: idx } }))

  return { saved, setSaved, setAnswer, setBand, synced: !!userId, loaded }
}
