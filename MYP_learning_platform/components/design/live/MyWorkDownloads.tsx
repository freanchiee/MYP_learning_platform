'use client'

// The student's own end-of-activity downloads: their work as PDFs, one set per criterion the activity has,
// each split into Checkpoint 1 and Checkpoint 2 and also as one PDF for the whole criterion, plus everything
// in one. Built in the browser from the student's own saved answers.

import { useMemo, useState } from 'react'
import type { LiveActivityDefinition } from '@/data/design/live/types'
import type { LiveGradeRow, LivePlayerRow } from '@/lib/design-live/types'
import { buildWorkDoc, listPdfScopes, scopeDoc, type PdfScopeOption } from '@/lib/design-live/studentWork'
import { downloadWorkPdf } from '@/lib/design-live/downloadWorkPdf'
import { CRITERIA } from '@/lib/design-live/criteria'
import { cardStyle, btnStyle } from './ui'

export default function MyWorkDownloads({ activity, me, code, grade }: { activity: LiveActivityDefinition; me: LivePlayerRow; code: string; grade: LiveGradeRow | null }) {
  const [busy, setBusy] = useState<string | null>(null)
  const doc = useMemo(
    () => buildWorkDoc(activity, me.data, { student: me.name, className: `Live session ${code}`, date: new Date().toLocaleDateString(), grade: grade ? { scores: grade.scores, feedback: grade.feedback ?? '', graded: grade.graded } : null, sectionFeedback: grade?.section_feedback }),
    [activity, me.data, me.name, code, grade]
  )
  const options = useMemo(() => listPdfScopes(doc), [doc])
  const go = async (o: PdfScopeOption) => {
    setBusy(o.id)
    try { await downloadWorkPdf(scopeDoc(doc, o.scope)) } finally { setBusy(null) }
  }

  const criteria = Array.from(new Set(options.filter((o) => o.criterion).map((o) => o.criterion!)))
  const everything = options.find((o) => o.kind === 'all')!
  const accent = activity.theme.accent

  return (
    <div style={{ ...cardStyle(accent), display: 'grid', gap: 12 }}>
      <div>
        <div style={{ fontWeight: 800, fontSize: 16 }}>📄 Your work, ready to download</div>
        <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>
          {criteria.length
            ? 'One PDF for each checkpoint, one for each whole criterion, and one with everything. Keep them for revision.'
            : 'Everything you wrote in this activity, as one PDF to keep for revision.'}
        </div>
      </div>

      {criteria.map((L) => {
        const parts = options.filter((o) => o.criterion === L)
        const c = CRITERIA[L]
        return (
          <div key={L} style={{ display: 'grid', gap: 6 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: c?.color ?? 'var(--text)' }}>CRITERION {L} · {c?.name}</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {parts.map((o) => (
                <button key={o.id} disabled={!!busy} onClick={() => go(o)} style={{ ...btnStyle(c?.color ?? accent, o.kind === 'criterion'), fontSize: 12.5, padding: '7px 12px' }} title={o.detail}>
                  {busy === o.id ? 'Building…' : `⬇️ ${o.kind === 'checkpoint' ? o.label.replace(`Criterion ${L} · `, '') : o.kind === 'criterion' ? (parts.length > 1 ? `All of ${L}` : `Criterion ${L}`) : o.label}`}
                  {o.detail && o.kind === 'checkpoint' ? <span style={{ fontWeight: 600, opacity: 0.7 }}> ({o.detail})</span> : null}
                </button>
              ))}
            </div>
          </div>
        )
      })}

      <div>
        <button disabled={!!busy} onClick={() => go(everything)} style={{ ...btnStyle(accent, true), fontSize: 13 }}>
          {busy === everything.id ? 'Building…' : criteria.length ? '⬇️ Everything in one PDF' : '⬇️ Download my work (PDF)'}
        </button>
      </div>
    </div>
  )
}
