import Link from 'next/link'
import type { SupabaseClient } from '@supabase/supabase-js'
import { getLiveActivity } from '@/data/design/live/registry'

// Student dashboard section: the classes they belong to and any live session
// their teacher has assigned that has not finished yet.
export default async function MyClasses({ supabase, userId }: { supabase: SupabaseClient; userId: string }) {
  const { data: memberships } = await supabase.from('class_members').select('class_id').eq('user_id', userId)
  const ids = (memberships ?? []).map((m) => m.class_id)
  const { data: classes } = ids.length ? await supabase.from('classes').select('id, name').in('id', ids) : { data: [] as { id: string; name: string }[] }
  const { data: sessions } = ids.length
    ? await supabase.from('live_sessions').select('code, activity_id, status, class_id').in('class_id', ids).neq('status', 'ended').order('created_at', { ascending: false })
    : { data: [] as { code: string; activity_id: string; status: string; class_id: string }[] }

  return (
    <section className="mx-auto max-w-6xl px-6 pt-8">
      <div className="rounded-2xl p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>My classes</h2>
          <Link href="/join-class" className="text-sm font-bold" style={{ color: 'var(--accent)' }}>Join a class with a code →</Link>
        </div>
        {(classes ?? []).length === 0 ? (
          <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>You are not in a class yet. Ask your teacher for a code.</p>
        ) : (
          <>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>{(classes ?? []).map((c) => c.name).join(' · ')}</p>
            <h3 className="mt-4 text-sm font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>TASKS FROM YOUR TEACHER</h3>
            {(sessions ?? []).length === 0 ? (
              <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>Nothing assigned right now.</p>
            ) : (
              (sessions ?? []).map((s) => (
                <Link key={s.code} href={`/design/live/${s.activity_id}?s=${s.code}`} className="mt-2 flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>
                  <span>{getLiveActivity(s.activity_id)?.icon} {getLiveActivity(s.activity_id)?.title ?? s.activity_id}</span>
                  <span style={{ color: 'var(--accent)' }}>{s.status === 'lobby' ? 'Join →' : 'In progress — join →'}</span>
                </Link>
              ))
            )}
          </>
        )}
      </div>
    </section>
  )
}
