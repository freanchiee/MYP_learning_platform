'use client'

import { PERSONA_DIRECTIONS } from '@/data/design/live/personas'
import { OPPORTUNITIES, getOpportunity, opportunitiesByDirection } from '@/data/design/live/opportunities'
import { cardStyle, btnStyle } from './ui'

interface OpportunityValue {
  opportunityId: string
}

/** Starter design opportunities (data/design/live/opportunities.ts) — three
 *  per accessibility track, each with an online-friendly way to prototype it,
 *  something to measure at home, and how to test it on a video call. They're
 *  prompts to adapt to the student's OWN named user, not a menu to pick from;
 *  only the choice is saved, so the teacher can see where each student started. */
export default function OpportunityCardsField({
  value,
  onChange,
  onPersist,
}: {
  value: OpportunityValue | undefined
  onChange: (v: OpportunityValue) => void
  onPersist: (v: OpportunityValue) => void
}) {
  const chosen = value?.opportunityId ? getOpportunity(value.opportunityId) : undefined

  const set = (id: string) => {
    const next = { opportunityId: id }
    onChange(next)
    onPersist(next)
  }

  if (!chosen) {
    return (
      <div style={{ display: 'grid', gap: 10 }}>
        {PERSONA_DIRECTIONS.map((d) => (
          <div key={d.key}>
            <div style={{ fontSize: 11, fontWeight: 800, color: 'var(--text-muted)', marginBottom: 4 }}>{d.label.toUpperCase()}</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 8 }}>
              {opportunitiesByDirection(d.key).map((o) => (
                <button key={o.id} onClick={() => set(o.id)} style={{ ...btnStyle('var(--surface)'), textAlign: 'left', fontSize: 12.5, fontWeight: 600 }}>
                  💡 {o.hmw}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
          {OPPORTUNITIES.length} starting points — pick one that fits your user, then make it your own below. Or ignore these and write your own.
        </div>
      </div>
    )
  }

  const block = (label: string, text: string) => (
    <div>
      <div style={{ fontSize: 10.5, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 12.5 }}>{text}</div>
    </div>
  )

  return (
    <div style={{ ...cardStyle('#0E7A72'), display: 'grid', gap: 10 }}>
      <div style={{ fontWeight: 800, fontSize: 14 }}>💡 {chosen.hmw}</div>
      {block('🧪 Prototype it online', chosen.prototype)}
      {block('📏 Measure at home', chosen.measure)}
      {block('🎥 Test it on camera', chosen.test)}
      <div style={{ fontSize: 11.5, color: 'var(--text-muted)', fontStyle: 'italic' }}>
        Start with the cheapest version that proves ONE thing, then climb: paper mock-up, cardboard functional mock-up, then a digital model.
      </div>
      <button onClick={() => set('')} style={{ ...btnStyle('var(--surface)'), justifySelf: 'start', fontSize: 11 }}>
        ← Choose a different one
      </button>
    </div>
  )
}
