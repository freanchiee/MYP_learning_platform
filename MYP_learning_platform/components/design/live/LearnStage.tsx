'use client'

// Criterion-specific mini-lessons for a live activity (stage type `learn`).
//
// A lesson is a short run of cards: one idea per card, a worked example or a
// strong-versus-weak comparison, key terms, and a thing to try. Two modes, both
// chosen by the teacher on the host screen:
//   - "Read at your own pace": every student moves through the cards themselves;
//   - "Present": the whole class follows the teacher's card (teacher modelling).
// A student's furthest card is saved in their own data, so the host sees who has
// read what and a refresh never loses the place.

import { useEffect, useRef, useState } from 'react'
import type { LearnPage, LearnStage } from '@/data/design/live/types'
import type { LivePlayerRow, LiveSessionRow } from '@/lib/design-live/types'
import { Avatar, cardStyle, btnStyle } from './ui'

const clampIdx = (n: number, len: number) => Math.max(0, Math.min(n, Math.max(0, len - 1)))

function Page({ page, index, total, accent }: { page: LearnPage; index: number; total: number; accent: string }) {
  return (
    <div style={{ ...cardStyle(accent), display: 'grid', gap: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, color: 'var(--text-muted)' }}>
        CARD {index + 1} OF {total}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {page.icon && <span style={{ fontSize: 30 }}>{page.icon}</span>}
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, lineHeight: 1.2 }}>{page.title}</h3>
      </div>

      {page.body.map((p, i) => (
        <p key={i} style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6 }}>{p}</p>
      ))}

      {page.bullets && (
        <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 6, fontSize: 14, lineHeight: 1.5 }}>
          {page.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}

      {page.example && (
        <div style={{ background: 'var(--surface-2)', border: '1.5px solid var(--border)', borderRadius: 'var(--radius-panel)', padding: 12, display: 'grid', gap: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.2, color: 'var(--text-muted)' }}>{page.example.label.toUpperCase()}</div>
          {page.example.text && <div style={{ fontSize: 14, lineHeight: 1.55 }}>{page.example.text}</div>}
          {(page.example.strong || page.example.weak) && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 8 }}>
              {page.example.weak && (
                <div style={{ border: '2px solid #D6425E', borderRadius: 'var(--radius-control)', padding: '8px 10px', fontSize: 13.5, lineHeight: 1.5, background: 'var(--surface)' }}>
                  <b style={{ color: '#D6425E' }}>✗ Weak</b><div style={{ marginTop: 3 }}>{page.example.weak}</div>
                </div>
              )}
              {page.example.strong && (
                <div style={{ border: '2px solid #1FA98A', borderRadius: 'var(--radius-control)', padding: '8px 10px', fontSize: 13.5, lineHeight: 1.5, background: 'var(--surface)' }}>
                  <b style={{ color: '#1FA98A' }}>✓ Strong</b><div style={{ marginTop: 3 }}>{page.example.strong}</div>
                </div>
              )}
            </div>
          )}
          {page.example.note && <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{page.example.note}</div>}
        </div>
      )}

      {page.keyTerms && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 8 }}>
          {page.keyTerms.map((k) => (
            <div key={k.term} style={{ border: '1.5px solid var(--border)', borderRadius: 'var(--radius-control)', padding: '6px 10px', fontSize: 12.5, background: 'var(--surface)' }}>
              <b>{k.term}</b> — <span style={{ color: 'var(--text-muted)' }}>{k.meaning}</span>
            </div>
          ))}
        </div>
      )}

      {page.tip && (
        <div style={{ background: 'var(--accent-soft)', borderRadius: 'var(--radius-control)', padding: '8px 12px', fontSize: 13.5, fontWeight: 600 }}>
          💭 {page.tip}
        </div>
      )}
    </div>
  )
}

// ------------------------------------------------------------------ student
export function LearnPlayer({
  stage, session, me, patchMyData, accent,
}: {
  stage: LearnStage
  session: LiveSessionRow
  me: LivePlayerRow
  patchMyData: (stageKey: string, patch: Record<string, any>) => void
  accent: string
}) {
  const total = stage.pages.length
  const st = (session.state?.[stage.key] || {}) as { present?: boolean; page?: number }
  const mine = (me.data?.[stage.key] || {}) as { page?: number; maxPage?: number }
  const present = !!st.present
  const [own, setOwn] = useState(() => clampIdx(mine.page ?? 0, total))
  const idx = present ? clampIdx(st.page ?? 0, total) : own
  const seen = useRef<number>(mine.maxPage ?? -1)

  // Remember the furthest card reached (and where the student is), so the host can see progress.
  useEffect(() => {
    if (idx > seen.current || (!present && idx !== mine.page)) {
      seen.current = Math.max(seen.current, idx)
      patchMyData(stage.key, { page: idx, maxPage: seen.current, done: seen.current >= total - 1 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx])

  const go = (n: number) => { if (!present) setOwn(clampIdx(n, total)) }

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {present && (
        <div style={{ ...cardStyle('#E8672A'), textAlign: 'center', fontSize: 13, fontWeight: 700 }}>
          🎤 Your teacher is presenting — follow along. You will be able to read at your own pace after.
        </div>
      )}
      <Page page={stage.pages[idx]} index={idx} total={total} accent={accent} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
        <button onClick={() => go(idx - 1)} disabled={present || idx === 0} style={btnStyle('var(--text-muted)')}>← Back</button>
        <div style={{ display: 'flex', gap: 6 }} aria-label={`Card ${idx + 1} of ${total}`}>
          {stage.pages.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              disabled={present}
              aria-label={`Go to card ${i + 1}`}
              style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid var(--text)', padding: 0, background: i === idx ? accent : i <= (seen.current ?? 0) ? 'var(--text-muted)' : 'transparent', cursor: present ? 'default' : 'pointer', boxShadow: 'none' }}
            />
          ))}
        </div>
        {idx < total - 1
          ? <button onClick={() => go(idx + 1)} disabled={present} style={btnStyle(accent, true)}>Next →</button>
          : <div style={{ fontSize: 13, fontWeight: 700, color: '#1FA98A' }}>🎉 Lesson finished — wait for your teacher</div>}
      </div>
    </div>
  )
}

// --------------------------------------------------------------------- host
export function LearnHost({
  stage, session, players, patchState, accent,
}: {
  stage: LearnStage
  session: LiveSessionRow
  players: LivePlayerRow[]
  patchState: (patch: Record<string, any>) => void
  accent: string
}) {
  const total = stage.pages.length
  const st = (session.state?.[stage.key] || {}) as { present?: boolean; page?: number }
  const page = clampIdx(st.page ?? 0, total)
  const present = !!st.present
  const setSt = (patch: Record<string, any>) => patchState({ [stage.key]: { ...st, ...patch } })

  const rows = players.map((p) => {
    const d = (p.data?.[stage.key] || {}) as { maxPage?: number; done?: boolean }
    return { p, reached: (d.maxPage ?? -1) + 1, done: !!d.done }
  })
  const finished = rows.filter((r) => r.done).length

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={{ ...cardStyle(accent), display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', maxWidth: 520 }}>
          {present
            ? 'Presenting: every student sees the card you are on. Use Back and Next to teach it, then let them read on their own.'
            : 'Free reading: each student moves through the cards at their own pace. Switch on Present to model it with the whole class.'}
        </div>
        <button onClick={() => setSt({ present: !present, page })} style={btnStyle('#E8672A', present)}>
          {present ? '🎤 Presenting — click to stop' : '🎤 Present to the class'}
        </button>
      </div>

      {present && (
        <>
          <Page page={stage.pages[page]} index={page} total={total} accent={accent} />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
            <button onClick={() => setSt({ page: clampIdx(page - 1, total) })} disabled={page === 0} style={btnStyle('var(--text-muted)')}>← Back</button>
            <button onClick={() => setSt({ page: clampIdx(page + 1, total) })} disabled={page >= total - 1} style={btnStyle(accent, true)}>Next card →</button>
          </div>
        </>
      )}

      <div style={cardStyle()}>
        <div style={{ fontWeight: 800, marginBottom: 8 }}>
          Reading progress · {finished} of {players.length} finished
        </div>
        {rows.length === 0 && <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Waiting for students…</div>}
        <div style={{ display: 'grid', gap: 6 }}>
          {rows.map(({ p, reached, done }) => (
            <div key={p.id} style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 200px) 1fr auto', gap: 10, alignItems: 'center', fontSize: 12.5 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700 }}><Avatar seed={p.id} size={22} />{p.name}</span>
              <span style={{ height: 8, background: 'var(--border)', borderRadius: 999, overflow: 'hidden' }}>
                <span style={{ display: 'block', height: '100%', width: `${(reached / total) * 100}%`, background: done ? '#1FA98A' : accent, transition: 'width .4s' }} />
              </span>
              <span style={{ color: 'var(--text-muted)', minWidth: 46, textAlign: 'right' }}>{done ? '✓ done' : `${reached}/${total}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
