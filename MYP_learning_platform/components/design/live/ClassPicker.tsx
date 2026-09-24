'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { createClassRow, type ClassRow } from '@/lib/classes'
import { btnStyle, inputStyle } from './ui'

// Lets the host attach this live session to one of their classes — pick an
// existing one or create a new one on the spot. Works before the session
// starts and afterwards, so a session can be assigned later too.
export default function ClassPicker({ code, hostId, classId, accent }: { code: string; hostId: string; classId: string | null; accent: string }) {
  const [classes, setClasses] = useState<ClassRow[]>([])
  const [creating, setCreating] = useState(false)
  const [name, setName] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    createClient().from('classes').select('*').eq('teacher_id', hostId).order('created_at', { ascending: false }).then(({ data }) => setClasses((data ?? []) as ClassRow[]))
  }, [hostId])

  async function assign(id: string | null) {
    setBusy(true)
    setError(null)
    const { error: err } = await createClient().from('live_sessions').update({ class_id: id }).eq('code', code)
    setBusy(false)
    if (err) setError(err.message)
  }

  async function createAndAssign() {
    if (!name.trim()) return
    setBusy(true)
    setError(null)
    const sb = createClient()
    const { data, error: err } = await createClassRow(sb, hostId, name)
    if (err || !data) {
      setBusy(false)
      return setError(err)
    }
    setClasses((c) => [data, ...c])
    setName('')
    setCreating(false)
    await assign(data.id)
  }

  const current = classes.find((c) => c.id === classId)

  return (
    <div style={{ display: 'grid', gap: 6, minWidth: 210 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>ASSIGN TO CLASS</div>
      <select
        value={classId ?? ''}
        disabled={busy}
        onChange={(e) => (e.target.value === '__new' ? setCreating(true) : assign(e.target.value || null))}
        style={{ ...inputStyle, fontSize: 13 }}
      >
        <option value="">No class</option>
        {classes.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
        <option value="__new">+ Create a new class…</option>
      </select>
      {creating && (
        <div style={{ display: 'flex', gap: 6 }}>
          <input value={name} onChange={(e) => setName(e.target.value)} maxLength={80} placeholder="Class name" style={{ ...inputStyle, fontSize: 13, flex: 1 }} />
          <button onClick={createAndAssign} disabled={busy || !name.trim()} style={{ ...btnStyle(accent), fontSize: 12 }}>Create</button>
        </div>
      )}
      {current && <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Class code {current.join_code} — students see this task on their dashboard.</div>}
      {error && <div style={{ fontSize: 11, color: 'var(--danger)' }}>{error}</div>}
    </div>
  )
}
