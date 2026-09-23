'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useLiveTable } from '@/lib/design-live/hooks'
import type { LiveEventRow } from '@/lib/design-live/types'
import { cardStyle, btnStyle, inputStyle, Avatar } from './ui'

/** A private one-to-one chat thread between the host and a single student,
 *  built on live_events (type: 'message') — see supabase/migrations/
 *  0005_live_chat_rls.sql for why this is safe to read/write from both
 *  sides without leaking to other students. */
export default function ChatPanel({
  sessionCode,
  playerId,
  playerName,
  asHost,
  accent,
}: {
  sessionCode: string
  playerId: string
  playerName: string
  asHost: boolean
  accent: string
}) {
  const [messages, setMessages] = useState<LiveEventRow[]>([])
  const [text, setText] = useState('')
  const [sending, setSending] = useState(false)

  useLiveTable<LiveEventRow>('live_events', 'player_id', playerId, (rows) => setMessages(rows.filter((r) => r.type === 'message')), true)

  const send = async () => {
    if (!text.trim() || sending) return
    setSending(true)
    const sb = createClient()
    const { error } = await sb.from('live_events').insert({
      session_code: sessionCode,
      player_id: playerId,
      type: 'message',
      payload: { from: asHost ? 'host' : 'player', text: text.trim() },
    })
    setSending(false)
    if (!error) setText('')
  }

  return (
    <div style={cardStyle(accent)}>
      <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 8 }}>
        💬 {asHost ? `Chat with ${playerName}` : 'Chat with your teacher'}
      </div>
      <div style={{ display: 'grid', gap: 6, maxHeight: 200, overflowY: 'auto', marginBottom: 8 }}>
        {!messages.length && <div style={{ fontSize: 12, color: 'var(--text-muted)', fontStyle: 'italic' }}>No messages yet.</div>}
        {messages.map((m) => {
          const fromHost = m.payload?.from === 'host'
          const mine = asHost ? fromHost : !fromHost
          return (
            <div key={m.id} style={{ display: 'flex', gap: 6, alignItems: 'flex-end', flexDirection: mine ? 'row-reverse' : 'row' }}>
              {!mine && <Avatar seed={fromHost ? 'host' : playerId} size={20} />}
              <div
                style={{
                  background: mine ? accent : 'var(--surface-2)',
                  color: mine ? '#fff' : 'var(--text)',
                  borderRadius: 10,
                  padding: '6px 10px',
                  fontSize: 12.5,
                  maxWidth: '80%',
                }}
              >
                {m.payload?.text}
              </div>
            </div>
          )
        })}
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder={asHost ? `Message ${playerName}…` : 'Message your teacher…'}
          style={{ ...inputStyle, flex: 1 }}
        />
        <button onClick={send} disabled={sending || !text.trim()} style={btnStyle(accent, true)}>
          Send
        </button>
      </div>
    </div>
  )
}
