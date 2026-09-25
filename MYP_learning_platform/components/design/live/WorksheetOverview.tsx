'use client'
import { useState } from 'react'
import type { ActivityBrief, FlowStep, WorksheetSection, WorksheetStage } from '@/data/design/live/types'
import { CRITERIA, criterionOf, STRAND_LABELS } from '@/lib/design-live/criteria'
import { CriteriaRing } from './CriteriaRing'
import { cardStyle } from './ui'

const eyebrow = { fontSize: 10.5, fontWeight: 900, letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'var(--text-subtle)' }

/** Criterion + strand marker: coloured criterion letter, strand key, and what the strand asks. */
export function StrandBadge({ strand, label, compact }: { strand: string; label?: string; compact?: boolean }) {
  const c = criterionOf(strand)
  return (
    <span
      title={`Criterion ${c.letter}: ${c.name}${label ? ` · ${strand}: ${label}` : ''}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: `1.5px solid ${c.color}`, borderRadius: 999, padding: compact ? '1px 8px 1px 2px' : '2px 10px 2px 3px', background: 'var(--surface-2)', fontSize: compact ? 10.5 : 11.5, fontWeight: 800, color: 'var(--text)', verticalAlign: 'middle' }}
    >
      <span style={{ background: c.color, color: '#fff', borderRadius: 999, padding: compact ? '1px 7px' : '2px 8px' }}>{strand}</span>
      {!compact && label && <span style={{ color: 'var(--text-muted)', fontWeight: 700 }}>{label}</span>}
    </span>
  )
}

/** Shown at the top of an OPEN section: which criterion and strand this is, plus the section brief. */
export function SectionMarker({ section, progress, present }: { section: WorksheetSection; progress?: Partial<Record<string, number>>; present?: string[] }) {
  if (!section.criterion && !section.brief) return null
  const c = section.criterion ? criterionOf(section.criterion) : null
  const label = section.strandLabel ?? (section.criterion ? STRAND_LABELS[section.criterion] : undefined)
  return (
    <div style={{ borderLeft: `5px solid ${c?.color ?? 'var(--border-strong)'}`, background: 'var(--surface-2)', borderRadius: 'var(--radius-panel)', padding: '10px 14px', display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
      {c && c.letter && <CriteriaRing current={c.letter} progress={progress ?? {}} present={present ?? ['A', 'B', 'C', 'D']} size={72} />}
      <div style={{ flex: 1, minWidth: 220, display: 'grid', gap: 6 }}>
        {c && section.criterion && (
          <div style={{ fontSize: 12.5, fontWeight: 800, color: 'var(--text)' }}>
            {c.letter ? (
              <>📍 You are on <span style={{ color: c.color }}>Criterion {c.letter}: {c.name}</span> · strand <StrandBadge strand={section.criterion} compact /></>
            ) : (
              <>📍 You are on: <strong>{section.criterion}</strong></>
            )}
            {label && <span style={{ display: 'block', fontWeight: 600, color: 'var(--text-muted)', marginTop: 2 }}>This strand asks you to: {label}.</span>}
          </div>
        )}
        {section.brief && (
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 900, color: 'var(--text)' }}>📝 {section.brief.title}</div>
            <ul style={{ margin: '4px 0 0', paddingLeft: 18, listStyle: 'disc', fontSize: 12.5, color: 'var(--text-muted)', display: 'grid', gap: 2 }}>
              {section.brief.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function BriefCard({ brief }: { brief: ActivityBrief }) {
  const row = (label: string, body: React.ReactNode) => (
    <div style={{ display: 'grid', gap: 3 }}>
      <div style={eyebrow}>{label}</div>
      <div style={{ fontSize: 13.5, color: 'var(--text)' }}>{body}</div>
    </div>
  )
  return (
    <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
      {row('Context', brief.context)}
      {row('Your task', <strong>{brief.task}</strong>)}
      {row('You will produce', <ul style={{ margin: 0, paddingLeft: 18, listStyle: 'disc', display: 'grid', gap: 2 }}>{brief.produce.map((p) => <li key={p}>{p}</li>)}</ul>)}
      {row('Assessed on', <span style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{brief.assessedOn.map((s) => <StrandBadge key={s} strand={s} />)}</span>)}
      {brief.time && row('Time', brief.time)}
    </div>
  )
}

/** Criteria-wise journey: one card per step, arrows between, each step tagged with its strand and % complete. */
function FlowStrip({ flow, pct, labels, onJump }: { flow: FlowStep[]; pct: Record<string, number>; labels: Record<string, string>; onJump: (sectionKey: string) => void }) {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'stretch' }}>
      {flow.map((f, i) => {
        const c = criterionOf(f.strand)
        const secs = f.sections ?? []
        const done = secs.length ? Math.round(secs.reduce((a, k) => a + (pct[k] ?? 0), 0) / secs.length) : null
        return (
          <li key={`${f.strand}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '1 1 210px', minWidth: 0 }}>
            <div style={{ flex: 1, minWidth: 0, height: '100%', border: `2px solid ${c.color}`, borderRadius: 'var(--radius-panel)', background: 'var(--surface)', padding: '10px 12px', display: 'grid', gap: 5, alignContent: 'start' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 6, alignItems: 'center' }}>
                <span style={{ fontSize: 10.5, fontWeight: 900, color: c.color, letterSpacing: '0.12em' }}>STEP {i + 1} · {c.letter ? `CRITERION ${c.letter}` : 'REFLECTION'}</span>
                {done !== null && <span style={{ fontSize: 11, fontWeight: 800, color: done >= 70 ? '#1FA98A' : 'var(--text-muted)' }}>{done}%</span>}
              </div>
              <div>{c.letter && <StrandBadge strand={f.strand} compact />} <span style={{ fontSize: 13.5, fontWeight: 900, color: 'var(--text)' }}>{f.title}</span></div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{f.asks}</div>
              {secs.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {secs.map((k) => (
                    <button key={k} onClick={() => onJump(k)} style={{ cursor: 'pointer', fontSize: 11, fontWeight: 800, border: '1.5px solid var(--border-strong)', borderRadius: 999, background: 'var(--surface-2)', color: 'var(--text)', padding: '2px 9px' }}>
                      {labels[k] ?? k} ▸
                    </button>
                  ))}
                </div>
              )}
              {f.where && <div style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--text-subtle)' }}>Later: {f.where}</div>}
            </div>
            {i < flow.length - 1 && <span aria-hidden style={{ fontSize: 20, fontWeight: 900, color: 'var(--text-subtle)' }}>→</span>}
          </li>
        )
      })}
    </ol>
  )
}

export default function WorksheetOverview({ stage, pct, onJump }: { stage: WorksheetStage; pct: Record<string, number>; onJump: (sectionKey: string) => void }) {
  const ov = stage.overview
  const [open, setOpen] = useState(true)
  if (!ov || (!ov.brief && !ov.flow?.length)) return null
  const letters = Array.from(new Set((ov.flow ?? []).map((f) => criterionOf(f.strand).letter).filter(Boolean)))
  return (
    <div style={{ ...cardStyle('#5C3FD6'), marginBottom: 14, display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
        <div style={{ fontWeight: 900, fontSize: 16 }}>📋 Activity brief &amp; the big picture</div>
        <button onClick={() => setOpen(!open)} aria-expanded={open} style={{ cursor: 'pointer', fontSize: 12, fontWeight: 800, border: '1.5px solid var(--border-strong)', borderRadius: 999, background: 'var(--surface-2)', color: 'var(--text)', padding: '3px 12px' }}>
          {open ? 'Hide ▲' : 'Show ▼'}
        </button>
      </div>
      {open && (
        <>
          {ov.brief && <BriefCard brief={ov.brief} />}
          {ov.flow && ov.flow.length > 0 && (
            <div style={{ display: 'grid', gap: 8 }}>
              <div style={eyebrow}>The journey, criterion by criterion</div>
              <FlowStrip flow={ov.flow} pct={pct} labels={Object.fromEntries(stage.sections.map((x) => [x.key, `${x.icon ?? ''} ${x.label}`.trim()]))} onJump={onJump} />
              <div style={{ fontSize: 11.5, color: 'var(--text-subtle)' }}>
                {letters.map((l) => `Criterion ${l}: ${CRITERIA[l].name}`).join('  ·  ')}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
