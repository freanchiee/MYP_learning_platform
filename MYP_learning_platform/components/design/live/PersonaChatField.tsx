'use client'

import { useState } from 'react'
import { PERSONA_DIRECTIONS, personasByDirection, getPersona } from '@/data/design/live/personas'
import { cardStyle, btnStyle, inputStyle, Avatar } from './ui'

interface ChatMessage {
  from: 'student' | 'character'
  text: string
  at: string
}
interface PersonaChatValue {
  characterId: string
  messages: ChatMessage[]
}

/** Pick a persona-pack character, then interview them with a real small
 *  LLM (Groq, see app/api/persona-chat/route.ts) — a genuine natural-
 *  language conversation, not a keyword-matched script. Every message is
 *  persisted immediately via `onPersist`, so the transcript survives a
 *  refresh and shows up on the teacher's grading card as evidence of
 *  engagement, not just a name typed into a box. */
export default function PersonaChatField({
  value,
  onChange,
  onPersist,
  onDraft,
  sessionCode,
  playerId,
}: {
  value: PersonaChatValue | undefined
  onChange: (v: PersonaChatValue) => void
  onPersist: (v: PersonaChatValue) => void
  onDraft: (text: string) => void
  sessionCode: string
  playerId: string
}) {
  const [text, setText] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [failedText, setFailedText] = useState<string | null>(null)
  const [retryNote, setRetryNote] = useState<string | null>(null)

  const characterId = value?.characterId
  const messages = value?.messages || []
  const character = characterId ? getPersona(characterId) : undefined

  const pickCharacter = (id: string) => {
    const greeting = getPersona(id)?.greeting
    const next: PersonaChatValue = { characterId: id, messages: greeting ? [{ from: 'character', text: greeting, at: new Date().toISOString() }] : [] }
    onChange(next)
    onPersist(next)
    setError(null)
  }

  // POST to the persona API, riding out a flaky connection: a dropped
  // connection ("Failed to fetch" — common on busy school Wi-Fi) or a request
  // that hangs is retried twice before giving up. A server that ANSWERS with an
  // error (sign-in, validation, bad gateway) is reported straight away.
  const requestReply = async (payload: object): Promise<string> => {
    const delays = [0, 1200, 2500]
    for (let attempt = 0; attempt < delays.length; attempt++) {
      if (delays[attempt]) {
        setRetryNote('Connection hiccup — trying again…')
        await new Promise((r) => setTimeout(r, delays[attempt]))
      }
      const ctrl = new AbortController()
      const timer = setTimeout(() => ctrl.abort(), 25000)
      try {
        const resp = await fetch('/api/persona-chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: ctrl.signal,
        })
        clearTimeout(timer)
        const data = await resp.json().catch(() => null)
        if (resp.ok && data?.reply) return data.reply as string
        throw new Error(data?.error || `The persona couldn't answer (error ${resp.status}). Try again.`)
      } catch (e: any) {
        clearTimeout(timer)
        const networkDrop = e?.name === 'AbortError' || e instanceof TypeError
        if (!networkDrop) throw e
      }
    }
    throw new Error('Couldn’t reach the server — check your connection.')
  }

  // `retryOf` re-sends a message that already sits in the transcript (its
  // reply never arrived) instead of adding it a second time.
  const send = async (retryOf?: string) => {
    const outgoing = retryOf ?? text.trim()
    if (!outgoing || !character || sending) return
    setError(null)
    setFailedText(null)
    setRetryNote(null)

    let transcript = messages
    if (!retryOf) {
      const userMsg: ChatMessage = { from: 'student', text: outgoing, at: new Date().toISOString() }
      const withUser: PersonaChatValue = { characterId: character.id, messages: [...messages, userMsg] }
      onChange(withUser)
      onPersist(withUser)
      setText('')
      transcript = withUser.messages
    }

    setSending(true)
    try {
      const reply = await requestReply({
        sessionCode,
        playerId,
        characterId: character.id,
        message: outgoing,
        // the API adds `message` itself, so history stops just before it
        history: transcript.slice(0, -1).slice(-10).map((m) => ({ role: m.from === 'student' ? 'user' : 'assistant', text: m.text })),
      })
      const charMsg: ChatMessage = { from: 'character', text: reply, at: new Date().toISOString() }
      const withReply: PersonaChatValue = { characterId: character.id, messages: [...transcript, charMsg] }
      onChange(withReply)
      onPersist(withReply)
    } catch (e: any) {
      setError(e.message || 'Something went wrong — try again.')
      setFailedText(outgoing)
    } finally {
      setSending(false)
      setRetryNote(null)
    }
  }

  if (!character) {
    return (
      <div style={{ display: 'grid', gap: 10 }}>
        {PERSONA_DIRECTIONS.map((d) => (
          <div key={d.key}>
            <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--text-muted)', marginBottom: 4 }}>{d.label.toUpperCase()}</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {personasByDirection(d.key).map((p) => (
                <button
                  key={p.id}
                  onClick={() => pickCharacter(p.id)}
                  style={{ ...btnStyle('var(--surface)'), display: 'flex', alignItems: 'center', gap: 8, textAlign: 'left', fontSize: 12.5 }}
                >
                  <Avatar seed={p.id} size={28} />
                  <span>
                    {p.name}, {p.age}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14, alignItems: 'start' }}>
      <div style={cardStyle('#5C3FD6')}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Avatar seed={character.id} size={48} />
          <div>
            <div style={{ fontWeight: 800 }}>
              {character.name}, {character.age}
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>{character.traits}</div>
          </div>
        </div>
        <div style={{ fontSize: 12.5, marginTop: 8 }}>{character.bio}</div>
        <div style={{ fontSize: 10.5, fontWeight: 800, color: 'var(--text-muted)', marginTop: 8, textTransform: 'uppercase' }}>Struggles with</div>
        <ul style={{ margin: '4px 0 0', paddingLeft: 18, fontSize: 12 }}>
          {character.struggles.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 10, fontStyle: 'italic' }}>
          Ask how they feel, what they actually do to cope, or their measurements — use what they tell you to fill in the empathy map below.
        </div>
        <button onClick={() => onChange({ characterId: '', messages: [] })} style={{ ...btnStyle('var(--surface)'), marginTop: 10, fontSize: 11 }}>
          ← Choose a different character
        </button>
      </div>

      <div style={{ ...cardStyle(), display: 'grid', gap: 10 }}>
        <div style={{ display: 'grid', gap: 6, maxHeight: 360, overflowY: 'auto', padding: '4px 2px' }}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                marginLeft: m.from === 'student' ? 'auto' : 0,
                maxWidth: '85%',
                background: m.from === 'student' ? '#5C3FD6' : 'var(--surface-2)',
                color: m.from === 'student' ? '#fff' : 'var(--text)',
                borderRadius: 10,
                padding: '7px 11px',
                fontSize: 12.5,
              }}
            >
              {m.text}
            </div>
          ))}
          {sending && <div style={{ fontSize: 11.5, color: 'var(--text-muted)', fontStyle: 'italic' }}>{retryNote || `${character.name} is typing…`}</div>}
        </div>

        {error && (
          <div style={{ fontSize: 11.5, color: '#D6425E', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span>⚠ {error}</span>
            {failedText && (
              <button onClick={() => send(failedText)} disabled={sending} style={{ ...btnStyle('#5C3FD6', true), fontSize: 11.5, padding: '4px 10px' }}>
                ↻ Try again
              </button>
            )}
          </div>
        )}

        <div style={{ display: 'flex', gap: 6 }}>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value)
              if (e.target.value.trim()) onDraft(e.target.value)
            }}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder={`Ask ${character.name} something…`}
            style={inputStyle}
          />
          <button onClick={() => send()} disabled={sending || !text.trim()} style={btnStyle('#5C3FD6', true)}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
