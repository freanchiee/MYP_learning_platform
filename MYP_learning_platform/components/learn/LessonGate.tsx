'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { formatUnlock, lessonAccess } from '@/lib/learn/unlock'
import type { Block } from '@/data/learn/physics'
import LessonBody from './LessonBody'

type Gate = { kind: 'open' } | { kind: 'locked'; unlockAt: Date; className: string }

// Wraps the lesson. Anyone not in a class that was assigned this lesson sees it exactly as before (the lessons
// stay public and static). A student whose class has it assigned with a future unlock time sees a locked card
// instead; and "?view=questions" (an assignment of just the questions) shows only the check / apply / recall
// blocks. This is a pacing aid for a class, not access control: the page itself remains public.
export default function LessonGate({ lessonKey, blocks }: { lessonKey: string; blocks: Block[] }) {
  const [gate, setGate] = useState<Gate>({ kind: 'open' })
  const [questionsOnly, setQuestionsOnly] = useState(false)

  useEffect(() => {
    setQuestionsOnly(new URLSearchParams(window.location.search).get('view') === 'questions')
    let cancelled = false
    ;(async () => {
      const sb = createClient()
      const { data: u } = await sb.auth.getUser()
      if (!u.user || cancelled) return
      const { data: mem } = await sb.from('class_members').select('class_id').eq('user_id', u.user.id)
      const classIds = (mem ?? []).map((m: { class_id: string }) => m.class_id)
      if (!classIds.length) return // a teacher or a student with no class: never locked
      const { data: rows } = await sb.from('class_assignments').select('class_id, unlock_at').eq('kind', 'lesson').eq('mode', 'async').eq('ref', lessonKey).in('class_id', classIds)
      if (cancelled || !rows?.length) return
      const access = lessonAccess(rows as { unlock_at: string | null }[])
      if (access.state === 'locked') {
        const { data: cls } = await sb.from('classes').select('name').eq('id', (rows[0] as { class_id: string }).class_id).maybeSingle()
        if (!cancelled) setGate({ kind: 'locked', unlockAt: access.unlockAt, className: (cls as { name: string } | null)?.name ?? 'your class' })
      }
    })().catch(() => {})
    return () => { cancelled = true }
  }, [lessonKey])

  if (gate.kind === 'locked') {
    return (
      <div className="chrome-card p-8 text-center" style={{ color: 'var(--text)' }}>
        <div className="text-5xl">🔒</div>
        <h2 className="mt-3 text-2xl font-extrabold">This lesson unlocks {formatUnlock(gate.unlockAt)}</h2>
        <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
          {gate.className} is working through DP Physics one lesson at a time. It opens on {gate.unlockAt.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' })}.
        </p>
        <Link href="/dashboard" className="mt-4 inline-block text-sm font-bold" style={{ color: 'var(--accent)' }}>← Back to my classes</Link>
      </div>
    )
  }

  if (questionsOnly) {
    // Questions can sit at the top level or inside a slide deck; pull them all out, in order.
    const isQ = (b: Block) => b.t === 'check' || b.t === 'apply' || b.t === 'retrieval'
    const qs = blocks.flatMap((b): Block[] => (b.t === 'deck' ? b.slides.flatMap((sl) => sl.blocks.filter(isQ)) : isQ(b) ? [b] : []))
    return (
      <div className="grid gap-5">
        <div className="chrome-card flex flex-wrap items-center justify-between gap-2 p-4 text-sm" style={{ color: 'var(--text)' }}>
          <span><b>Questions only</b> — your teacher assigned just the questions from this lesson.</span>
          <Link href={window.location.pathname} className="font-bold" style={{ color: 'var(--accent)' }}>Open the full lesson →</Link>
        </div>
        <LessonBody lessonKey={lessonKey} blocks={qs} />
      </div>
    )
  }

  return <LessonBody lessonKey={lessonKey} blocks={blocks} />
}
