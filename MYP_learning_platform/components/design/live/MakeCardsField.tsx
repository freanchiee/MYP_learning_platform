'use client'

import { PERSONA_DIRECTIONS } from '@/data/design/live/personas'
import { MAKE_TIME_LABEL, getMake, isWildCard, makesByDirection } from '@/data/design/live/makes'
import { cardStyle, btnStyle, inputStyle } from './ui'

interface MakeValue {
  makeId: string
  /** Only for a wild card: what the student decided to make. */
  custom?: string
}

/** The hands-on "What will you make?" menu (data/design/live/makes.ts):
 *  concrete things to build, grouped by accessibility track, with a wild card
 *  per track for the student's own idea and a 🎲 "Surprise me" that draws one
 *  at random. The student's own track (looked up from their Week 1 direction
 *  by the caller) is listed first. Only the choice — and, for a wild card,
 *  the student's own description — is saved. */
export default function MakeCardsField({
  value,
  onChange,
  onPersist,
  preferredDirection,
}: {
  value: MakeValue | undefined
  onChange: (v: MakeValue) => void
  onPersist: (v: MakeValue) => void
  /** Label of the student's chosen direction (e.g. "One-handed tool"), if they picked one. */
  preferredDirection?: string
}) {
  const chosen = value?.makeId ? getMake(value.makeId) : undefined

  const choose = (makeId: string) => {
    const next: MakeValue = { makeId, custom: '' }
    onChange(next)
    onPersist(next)
  }
  const surprise = (direction: (typeof PERSONA_DIRECTIONS)[number]['key']) => {
    const pool = makesByDirection(direction).filter((m) => !isWildCard(m.id))
    if (pool.length) choose(pool[Math.floor(Math.random() * pool.length)].id)
  }

  if (!chosen) {
    const ordered = [...PERSONA_DIRECTIONS].sort((a, b) => Number(b.label === preferredDirection) - Number(a.label === preferredDirection))
    return (
      <div style={{ display: 'grid', gap: 16 }}>
        {ordered.map((d) => {
          const mine = d.label === preferredDirection
          return (
            <div key={d.key}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: mine ? '#5C3FD6' : 'var(--text-muted)' }}>
                  {mine ? '★ ' : ''}
                  {d.label.toUpperCase()}
                  {mine ? ' — YOUR TRACK' : ''}
                </div>
                <button onClick={() => surprise(d.key)} style={{ ...btnStyle('var(--surface)'), fontSize: 11, padding: '4px 10px' }}>
                  🎲 Surprise me
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 8 }}>
                {makesByDirection(d.key).map((m) => {
                  const wild = isWildCard(m.id)
                  return (
                    <button
                      key={m.id}
                      onClick={() => choose(m.id)}
                      style={{
                        ...btnStyle('var(--surface)'),
                        textAlign: 'left',
                        display: 'grid',
                        gap: 4,
                        alignContent: 'start',
                        fontSize: 12.5,
                        border: wild ? '2.5px dashed var(--text)' : undefined,
                      }}
                    >
                      <span style={{ fontSize: 26 }}>{m.icon}</span>
                      <strong>{m.name}</strong>
                      <span style={{ fontWeight: 400, fontSize: 11.5, color: 'var(--text-muted)' }}>{m.what}</span>
                      <span style={{ fontWeight: 700, fontSize: 10.5, color: '#0E7A72' }}>{MAKE_TIME_LABEL[m.time]}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const wild = isWildCard(chosen.id)
  const block = (label: string, text: string) => (
    <div>
      <div style={{ fontSize: 10.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 12.5 }}>{text}</div>
    </div>
  )

  return (
    <div style={{ ...cardStyle('#E8672A'), display: 'grid', gap: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 34 }}>{chosen.icon}</span>
        <div>
          <div style={{ fontWeight: 800, fontSize: 15 }}>{wild ? 'Wild card — your own make' : chosen.name}</div>
          <div style={{ fontSize: 11.5, fontWeight: 700, color: '#0E7A72' }}>{MAKE_TIME_LABEL[chosen.time]}</div>
        </div>
      </div>
      {wild ? (
        <label style={{ display: 'grid', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
          What will you make?
          <textarea
            value={value?.custom || ''}
            onChange={(e) => onChange({ makeId: chosen.id, custom: e.target.value })}
            onBlur={() => onPersist({ makeId: chosen.id, custom: value?.custom || '' })}
            placeholder="e.g. A clip-on handle for my user's water bottle, made from card and rubber bands"
            style={{ ...inputStyle, minHeight: 64, fontWeight: 400 }}
          />
        </label>
      ) : (
        block('What it is', chosen.what)
      )}
      {!wild && block('Make it from', chosen.materials)}
      {block('The first version must prove', chosen.proves)}
      <button onClick={() => choose('')} style={{ ...btnStyle('var(--surface)'), justifySelf: 'start', fontSize: 11 }}>
        ← Choose a different make
      </button>
    </div>
  )
}
