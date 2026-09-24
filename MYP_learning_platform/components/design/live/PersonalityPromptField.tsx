'use client'

import { useState } from 'react'
import { PERSONA_DIRECTIONS } from '@/data/design/live/personas'
import { PERSONALITIES, getPersonality, personalitiesByDirection, buildInterviewPrompt, STARTER_QUESTIONS } from '@/data/design/live/personalities'
import { cardStyle, btnStyle } from './ui'

interface PersonalityValue {
  personalityId: string
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Clipboard API can be unavailable (older browsers, restricted frames) — fall back to a hidden textarea.
    try {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(ta)
      return ok
    } catch {
      return false
    }
  }
}

/** Pick a well-known person as your target user, then copy a ready-made
 *  prompt into whichever AI assistant your school approves so it can role-play
 *  them for a *simulated* interview. We don't run this chat ourselves (unlike
 *  the persona-pack interview) — see data/design/live/personalities.ts for why,
 *  and for the guardrails built into the prompt. Only the choice is saved, so
 *  the teacher can see who each student picked. */
export default function PersonalityPromptField({
  value,
  onChange,
  onPersist,
}: {
  value: PersonalityValue | undefined
  onChange: (v: PersonalityValue) => void
  onPersist: (v: PersonalityValue) => void
}) {
  const [copied, setCopied] = useState<'prompt' | 'questions' | null>(null)
  const chosen = value?.personalityId ? getPersonality(value.personalityId) : undefined

  const pick = (id: string) => {
    const next = { personalityId: id }
    onChange(next)
    onPersist(next)
    setCopied(null)
  }
  const clear = () => {
    const next = { personalityId: '' }
    onChange(next)
    onPersist(next)
  }
  const flash = (what: 'prompt' | 'questions') => {
    setCopied(what)
    setTimeout(() => setCopied(null), 1500)
  }

  if (!chosen) {
    return (
      <div style={{ display: 'grid', gap: 10 }}>
        {PERSONA_DIRECTIONS.map((d) => (
          <div key={d.key}>
            <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--text-muted)', marginBottom: 4 }}>{d.label.toUpperCase()}</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 8 }}>
              {personalitiesByDirection(d.key).map((p) => (
                <button
                  key={p.id}
                  onClick={() => pick(p.id)}
                  style={{ ...btnStyle('var(--surface)'), display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left', fontSize: 12.5 }}
                >
                  <span style={{ fontSize: 24 }}>{p.icon}</span>
                  <span>
                    <strong>{p.name}</strong>
                    <span style={{ display: 'block', fontSize: 11, color: 'var(--text-muted)', fontWeight: 400 }}>{p.tagline}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{PERSONALITIES.length} people to choose from — two per design track.</div>
      </div>
    )
  }

  const directionLabel = PERSONA_DIRECTIONS.find((d) => d.key === chosen.direction)?.label || ''
  const prompt = buildInterviewPrompt(chosen, directionLabel)
  const questions = STARTER_QUESTIONS.map((q, i) => `${i + 1}. ${q}`).join('\n')

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={cardStyle('#5C3FD6')}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 34 }}>{chosen.icon}</span>
          <div>
            <div style={{ fontWeight: 800 }}>{chosen.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{chosen.tagline}</div>
          </div>
        </div>
        <ul style={{ margin: '10px 0 0', paddingLeft: 18, fontSize: 12.5 }}>
          {chosen.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div style={{ fontSize: 12, marginTop: 8, fontStyle: 'italic', color: 'var(--text-muted)' }}>Why them? {chosen.designRelevance}</div>
        <button onClick={clear} style={{ ...btnStyle('var(--surface)'), marginTop: 10, fontSize: 11 }}>
          ← Choose someone else
        </button>
      </div>

      <div style={cardStyle()}>
        <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 4 }}>1 · Copy this prompt into your AI assistant</div>
        <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginBottom: 6 }}>Use the AI tool your school approves. Paste it as your first message, then start your interview.</div>
        <pre
          style={{
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            background: 'var(--surface-2)',
            border: '1.5px solid var(--border)',
            borderRadius: 8,
            padding: 10,
            fontSize: 11.5,
            maxHeight: 220,
            overflowY: 'auto',
            margin: 0,
            fontFamily: 'inherit',
          }}
        >
          {prompt}
        </pre>
        <button
          onClick={async () => {
            if (await copyText(prompt)) flash('prompt')
          }}
          style={{ ...btnStyle('#5C3FD6', true), marginTop: 8 }}
        >
          {copied === 'prompt' ? '✅ Copied!' : '📋 Copy prompt'}
        </button>
      </div>

      <div style={cardStyle()}>
        <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 4 }}>2 · Ask real-moment questions</div>
        <ol style={{ margin: '4px 0 0', paddingLeft: 20, fontSize: 12.5, display: 'grid', gap: 3 }}>
          {STARTER_QUESTIONS.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
        <button
          onClick={async () => {
            if (await copyText(questions)) flash('questions')
          }}
          style={{ ...btnStyle('var(--surface)'), marginTop: 8, fontSize: 12 }}
        >
          {copied === 'questions' ? '✅ Copied!' : '📋 Copy questions'}
        </button>
      </div>

      <div style={{ ...cardStyle('#FFCF3F'), background: '#FFF7DA', color: '#3a2f00' }}>
        <div style={{ fontWeight: 800, fontSize: 13, marginBottom: 4 }}>⚠️ Remember: this is a simulation, not evidence</div>
        <div style={{ fontSize: 12.5 }}>
          The AI is guessing what {chosen.name} might say. Treat every answer as an <strong>assumption</strong> to check, not a fact. Real research means talking to a real user
          (primary research) or reading what {chosen.name} has really said in published interviews or biographies (secondary research). Use the empathy map below to record
          what you think you learned — and what you still need to check.
        </div>
      </div>
    </div>
  )
}
