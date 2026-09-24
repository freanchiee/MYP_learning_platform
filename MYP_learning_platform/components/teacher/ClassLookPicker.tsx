'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { CLASS_EMOJIS, CLASS_THEMES, classLook } from '@/lib/classes'

/** Change a class's emoji and colour theme. */
export default function ClassLookPicker({ classId, emoji, theme }: { classId: string; emoji: string | null; theme: string | null }) {
  const router = useRouter()
  const look = classLook({ id: classId, emoji, theme })
  const [curEmoji, setEmoji] = useState(look.emoji)
  const [curTheme, setTheme] = useState(look.theme.key)
  const [error, setError] = useState<string | null>(null)

  async function save(next: { emoji?: string; theme?: string }) {
    setError(null)
    const { error: err } = await createClient().from('classes').update(next).eq('id', classId)
    if (err) return setError(err.message)
    router.refresh()
  }

  return (
    <div className="rounded-[var(--radius-card)] p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
      <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>CLASS LOOK</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {CLASS_EMOJIS.map((e) => (
          <button
            key={e}
            onClick={() => { setEmoji(e); save({ emoji: e }) }}
            aria-pressed={curEmoji === e}
            className="grid h-11 w-11 place-items-center rounded-[var(--radius-panel)] text-2xl transition-transform hover:scale-110"
            style={{ background: curEmoji === e ? 'var(--accent-soft)' : 'var(--surface-inset)', border: curEmoji === e ? '2px solid var(--accent)' : '1px solid var(--border)' }}
          >
            {e}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {CLASS_THEMES.map((t) => (
          <button
            key={t.key}
            onClick={() => { setTheme(t.key); save({ theme: t.key }) }}
            aria-pressed={curTheme === t.key}
            title={t.name}
            className="h-9 w-16 rounded-[var(--radius-control)] transition-transform hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})`, outline: curTheme === t.key ? '3px solid var(--accent)' : 'none', outlineOffset: 2 }}
          />
        ))}
      </div>
      {error && <p className="mt-3 text-sm" style={{ color: 'var(--danger)' }}>{error}</p>}
    </div>
  )
}
