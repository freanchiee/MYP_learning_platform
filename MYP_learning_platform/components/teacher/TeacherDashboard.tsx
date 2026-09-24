import Link from 'next/link'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { ClassRow } from '@/lib/classes'
import { getLiveActivity } from '@/data/design/live/registry'
import CreateClassForm from './CreateClassForm'

const card = { background: 'var(--surface-elevated)', border: '1px solid var(--border)' } as const

export default async function TeacherDashboard({ supabase, userId, name }: { supabase: SupabaseClient; userId: string; name: string }) {
  const { data: classes } = await supabase.from('classes').select('*').eq('teacher_id', userId).order('created_at', { ascending: false })
  const list = (classes ?? []) as ClassRow[]
  const ids = list.map((c) => c.id)

  const [{ data: members }, { data: sessions }] = await Promise.all([
    ids.length ? supabase.from('class_members').select('class_id').in('class_id', ids) : Promise.resolve({ data: [] as { class_id: string }[] }),
    supabase.from('live_sessions').select('code, activity_id, status, class_id, created_at').eq('host_id', userId).order('created_at', { ascending: false }).limit(30),
  ])
  const memberCount = (id: string) => (members ?? []).filter((m) => m.class_id === id).length
  const sessionCount = (id: string) => (sessions ?? []).filter((s) => s.class_id === id).length
  const unassigned = (sessions ?? []).filter((s) => !s.class_id).length

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: 'calc(100vh - 56px)' }}>
      <div className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <div className="text-xs font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>TEACHER DASHBOARD</div>
        <h1 className="mt-1 text-3xl font-extrabold md:text-4xl" style={{ color: 'var(--text)' }}>Welcome, {name}</h1>

        <section className="mt-8 rounded-2xl p-5" style={card}>
          <h2 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>Your classes</h2>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>Create a class, share its code, then assign live sessions to it and follow how students do.</p>
          <div className="mt-4"><CreateClassForm /></div>
          {list.length === 0 ? (
            <p className="mt-4 text-sm" style={{ color: 'var(--text-subtle)' }}>No classes yet.</p>
          ) : (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {list.map((c) => (
                <Link key={c.id} href={`/classes/${c.id}`} className="rounded-xl p-4 transition-transform hover:-translate-y-0.5" style={{ border: '1px solid var(--border)', background: 'var(--surface-inset)' }}>
                  <div className="text-base font-extrabold" style={{ color: 'var(--text)' }}>{c.name}</div>
                  <div className="mt-1 text-xs font-bold tracking-widest" style={{ color: 'var(--text-subtle)' }}>CODE <span style={{ color: 'var(--accent)' }}>{c.join_code}</span></div>
                  <div className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>{memberCount(c.id)} students · {sessionCount(c.id)} live tasks</div>
                </Link>
              ))}
            </div>
          )}
        </section>

        <section className="mt-6 rounded-2xl p-5" style={card}>
          <h2 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>Live sessions</h2>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>Host a live class and pick which class it is for in the lobby — or change it later.</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link href="/design/live" className="rounded-xl px-4 py-2.5 text-sm font-bold" style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}>Host a live class →</Link>
            <Link href="/design/live/history" className="rounded-xl px-4 py-2.5 text-sm font-bold" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>Past sessions →</Link>
          </div>
          {unassigned > 0 && <p className="mt-3 text-sm" style={{ color: 'var(--text-subtle)' }}>{unassigned} recent session{unassigned === 1 ? '' : 's'} not assigned to a class.</p>}
          {(sessions ?? []).slice(0, 5).map((s) => (
            <div key={s.code} className="mt-2 flex items-center justify-between rounded-lg px-3 py-2 text-sm" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>
              <span>{getLiveActivity(s.activity_id)?.title ?? s.activity_id} · <span style={{ color: 'var(--text-subtle)' }}>{s.code}</span></span>
              <span style={{ color: 'var(--text-subtle)' }}>{s.class_id ? (list.find((c) => c.id === s.class_id)?.name ?? 'Class') : 'No class'} · {s.status}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
