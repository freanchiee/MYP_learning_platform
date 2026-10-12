'use client'

// One student's work for one live task, as a designed PDF: organised by design-cycle
// criterion and strand, with the student's own words clearly separated from task
// context and reference answers (see lib/design-live/workPdf.ts). Meant to be read by
// the teacher, revised from by the student, or handed to an AI to help with grading.
// Built entirely client-side from data the class page already fetched.

import { useState } from 'react'
import type { WorkDoc } from '@/lib/design-live/studentWork'
import { downloadWorkPdf } from '@/lib/design-live/downloadWorkPdf'

export default function DownloadWorkButton(props: {
  /** The finished document, or `getDoc` to build it only when the button is clicked (use that on busy screens). */
  doc?: WorkDoc
  getDoc?: () => WorkDoc
  studentName?: string
  activityTitle?: string
  /** A compact icon-only button for crowded rows such as the live host dashboard. */
  icon?: boolean
}) {
  const { icon } = props
  const label = `${props.studentName ?? props.doc?.student ?? 'this student'}'s work${props.activityTitle ?? props.doc?.activityTitle ? ` for ${props.activityTitle ?? props.doc?.activityTitle}` : ''}`
  const [busy, setBusy] = useState(false)

  const download = async () => {
    setBusy(true)
    try {
      const doc = (props.doc ?? props.getDoc?.())!
      await downloadWorkPdf(doc)
    } finally {
      setBusy(false)
    }
  }

  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); download() }}
      disabled={busy}
      aria-label={`Download ${label} as a design-cycle PDF`}
      title={`Download ${label} as a design-cycle PDF`}
      className={icon ? 'disabled:opacity-50' : 'rounded-[var(--radius-control)] px-2.5 py-1 text-[10px] font-black tracking-wider disabled:opacity-50'}
      style={icon
        ? { cursor: 'pointer', border: 'none', background: 'transparent', color: 'inherit', fontSize: 14, lineHeight: 1, padding: '2px 3px' }
        : { border: '1px solid var(--border-strong)', color: 'var(--text)', whiteSpace: 'nowrap' }}
    >
      {busy ? (icon ? '…' : 'Building…') : icon ? '⬇️' : '⬇️ Work PDF'}
    </button>
  )
}
