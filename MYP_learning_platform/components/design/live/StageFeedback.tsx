'use client'
import { useState } from 'react'
import type { LiveActivityDefinition } from '@/data/design/live/types'
import type { LivePlayerRow } from '@/lib/design-live/types'
import { summariseFeedback, type StageFeedbackValue } from '@/lib/design-live/feedback'
import { btnStyle, cardStyle, inputStyle } from './ui'

const STAR = '#F5A623'

function Stars({ value, size = 26 }: { value: number; size?: number }) {
  return (
    <span aria-label={`${value} out of 5 stars`} role="img" style={{ display: 'inline-flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width={size} height={size} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" fill={n <= value ? STAR : 'none'} stroke={n <= value ? STAR : 'var(--text-subtle)'} strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      ))}
    </span>
  )
}

const WORDS = ['', 'Not helpful', 'Could be better', 'Okay', 'Good', 'Great']

/** Student card at the end of a part: 1–5 stars + what worked + what could be improved. Editable after sending. */
export default function StageFeedback({ stageLabel, value, onSave }: { stageLabel: string; value?: StageFeedbackValue; onSave: (v: StageFeedbackValue) => void }) {
  const [stars, setStars] = useState(value?.stars ?? 0)
  const [hover, setHover] = useState(0)
  const [liked, setLiked] = useState(value?.liked ?? '')
  const [improve, setImprove] = useState(value?.improve ?? '')
  const [editing, setEditing] = useState(!value)
  const shown = hover || stars

  if (!editing && value) {
    return (
      <div style={{ ...cardStyle('#F5A623'), display: 'grid', gap: 6 }}>
        <div style={{ fontWeight: 800, fontSize: 13 }}>✅ Thanks for your feedback on “{stageLabel}”</div>
        <Stars value={value.stars} size={20} />
        {value.improve && <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>To improve: {value.improve}</div>}
        <button onClick={() => setEditing(true)} style={{ ...btnStyle('#F5A623'), justifySelf: 'start', padding: '5px 12px', fontSize: 12, boxShadow: '2px 2px 0 var(--text)' }}>
          ✏️ Change my feedback
        </button>
      </div>
    )
  }

  return (
    <div style={{ ...cardStyle('#F5A623'), display: 'grid', gap: 10 }}>
      <div>
        <div style={{ fontWeight: 800, fontSize: 14 }}>⭐ How was this part?</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>“{stageLabel}”. Optional, and your teacher will see it with your name.</div>
      </div>
      <div role="radiogroup" aria-label="Rate this part out of 5 stars" style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            role="radio"
            aria-checked={stars === n}
            aria-label={`${n} star${n > 1 ? 's' : ''}: ${WORDS[n]}`}
            onClick={() => setStars(n)}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            onFocus={() => setHover(n)}
            onBlur={() => setHover(0)}
            style={{ cursor: 'pointer', background: 'transparent', border: 'none', padding: 4, borderRadius: 8, minWidth: 40, minHeight: 40 }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden style={{ display: 'block' }}>
              <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" fill={n <= shown ? STAR : 'none'} stroke={n <= shown ? STAR : 'var(--text-subtle)'} strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </button>
        ))}
        <span style={{ fontSize: 13, fontWeight: 800, marginLeft: 6 }} aria-live="polite">{shown ? WORDS[shown] : 'Tap a star'}</span>
      </div>
      <label style={{ display: 'grid', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
        Comments: what worked well?
        <textarea value={liked} onChange={(e) => setLiked(e.target.value)} rows={2} placeholder="e.g. The empathy map examples helped me start" style={{ ...inputStyle, resize: 'vertical' }} />
      </label>
      <label style={{ display: 'grid', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
        What could be improved?
        <textarea value={improve} onChange={(e) => setImprove(e.target.value)} rows={2} placeholder="e.g. Give us more time for the interview" style={{ ...inputStyle, resize: 'vertical' }} />
      </label>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <button
          disabled={stars < 1}
          onClick={() => {
            onSave({ stars, liked: liked.trim() || undefined, improve: improve.trim() || undefined, at: new Date().toISOString() })
            setEditing(false)
          }}
          style={{ ...btnStyle('#F5A623', true), opacity: stars < 1 ? 0.5 : 1, cursor: stars < 1 ? 'not-allowed' : 'pointer' }}
        >
          Send feedback
        </button>
        {stars < 1 && <span style={{ fontSize: 11.5, color: 'var(--text-subtle)' }}>Choose a star rating first.</span>}
        {value && <button onClick={() => setEditing(false)} style={{ ...btnStyle('#F5A623'), padding: '7px 12px', fontSize: 12 }}>Cancel</button>}
      </div>
    </div>
  )
}

/** Teacher view for ONE part: average, spread and every comment. */
export function FeedbackSummary({ stageKey, stageLabel, players, compact }: { stageKey: string; stageLabel: string; players: LivePlayerRow[]; compact?: boolean }) {
  const s = summariseFeedback(players, stageKey)
  const max = Math.max(1, ...s.distribution)
  return (
    <details open={!compact} style={{ ...cardStyle('#F5A623'), padding: 14 }}>
      <summary style={{ cursor: 'pointer', fontWeight: 800, fontSize: 14, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        ⭐ Student feedback · {stageLabel}
        <span style={{ fontWeight: 700, fontSize: 12.5, color: 'var(--text-muted)' }}>
          {s.count ? `${s.average} / 5 from ${s.count} of ${players.length}` : `no ratings yet (${players.length} students)`}
        </span>
      </summary>
      {s.count > 0 && (
        <div style={{ marginTop: 10, display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1 }}>{s.average}</div>
            <div>
              <Stars value={Math.round(s.average)} size={20} />
              <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>{s.count} rating{s.count > 1 ? 's' : ''}</div>
            </div>
            <div style={{ display: 'grid', gap: 3, flex: 1, minWidth: 180 }} aria-label="Rating spread">
              {[5, 4, 3, 2, 1].map((n) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 700 }}>
                  <span style={{ width: 22 }}>{n}★</span>
                  <span style={{ flex: 1, height: 8, background: 'var(--surface-2)', borderRadius: 999, overflow: 'hidden' }}>
                    <span style={{ display: 'block', height: '100%', width: `${(s.distribution[n - 1] / max) * 100}%`, background: STAR }} />
                  </span>
                  <span style={{ width: 18, textAlign: 'right' }}>{s.distribution[n - 1]}</span>
                </div>
              ))}
            </div>
          </div>
          {s.comments.length > 0 && (
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 6 }}>
              {s.comments.map((c, i) => (
                <li key={i} style={{ background: 'var(--surface-2)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-panel)', padding: '8px 10px', fontSize: 12.5 }}>
                  <strong>{c.name}</strong> <span style={{ color: STAR, fontWeight: 900 }}>{'★'.repeat(c.stars)}</span>
                  {c.liked && <div>👍 {c.liked}</div>}
                  {c.improve && <div>🔧 {c.improve}</div>}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </details>
  )
}

/** Teacher view of every part at once (used on the final screen). */
export function FeedbackOverview({ activity, players }: { activity: LiveActivityDefinition; players: LivePlayerRow[] }) {
  const parts = activity.stages.filter((s) => s.type !== 'grading')
  if (!parts.length) return null
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <div style={{ ...cardStyle('#F5A623'), fontWeight: 800, fontSize: 15 }}>⭐ What students thought of each part</div>
      {parts.map((s) => <FeedbackSummary key={s.key} stageKey={s.key} stageLabel={`${s.icon} ${s.label}`} players={players} compact />)}
    </div>
  )
}
