'use client'

// One student's progress, as a PDF they can save/print/attach anywhere
// (report cards, parent emails, Toddle evidence uploads...) — built
// entirely client-side from data the class dashboard already fetched, so
// this needs no new query and no server-side PDF rendering.

import { useState } from 'react'

export interface ReportAssignment {
  title: string
  subtitle: string
  result: string
}

export interface ReportGrade {
  key: string
  label: string
  score: number
}

export interface ReportSession {
  title: string
  date: string
  result: string
  grades?: ReportGrade[]
}

const PAGE_BOTTOM = 770
const MARGIN = 40

export default function DownloadReportButton({
  studentName,
  className,
  assignments,
  sessions,
}: {
  studentName: string
  className: string
  assignments: ReportAssignment[]
  sessions: ReportSession[]
}) {
  const [busy, setBusy] = useState(false)

  const download = async () => {
    setBusy(true)
    try {
      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF({ unit: 'pt', format: 'a4' })
      let y = 60

      const ensureRoom = (needed = 16) => {
        if (y + needed > PAGE_BOTTOM) {
          doc.addPage()
          y = 60
        }
      }

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(18)
      doc.text(className, MARGIN, y)
      y += 24
      doc.setFontSize(13)
      doc.text(`Progress report — ${studentName}`, MARGIN, y)
      y += 16
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      doc.setTextColor(120)
      doc.text(`Generated ${new Date().toLocaleDateString()}`, MARGIN, y)
      doc.setTextColor(0)
      y += 30

      const section = (title: string) => {
        ensureRoom(26)
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(13)
        doc.text(title, MARGIN, y)
        y += 8
        doc.setLineWidth(0.5)
        doc.line(MARGIN, y, 555, y)
        y += 16
        doc.setFont('helvetica', 'normal')
      }

      section('Assignments')
      if (assignments.length === 0) {
        doc.setFontSize(10)
        doc.setTextColor(130)
        doc.text('No assignments set.', MARGIN, y)
        doc.setTextColor(0)
        y += 18
      } else {
        assignments.forEach((a) => {
          ensureRoom(28)
          doc.setFontSize(10.5)
          doc.text(a.title, MARGIN, y)
          doc.setFontSize(9)
          doc.setTextColor(110)
          doc.text(a.subtitle, MARGIN, y + 12)
          doc.setTextColor(0)
          doc.setFontSize(10.5)
          doc.text(a.result, 420, y)
          y += 26
        })
      }

      y += 10
      section('Live sessions')
      if (sessions.length === 0) {
        doc.setFontSize(10)
        doc.setTextColor(130)
        doc.text('No live sessions yet.', MARGIN, y)
        doc.setTextColor(0)
        y += 18
      } else {
        sessions.forEach((s) => {
          ensureRoom(28)
          doc.setFontSize(10.5)
          doc.text(s.title, MARGIN, y)
          doc.setFontSize(9)
          doc.setTextColor(110)
          doc.text(s.date, MARGIN, y + 12)
          doc.setTextColor(0)
          doc.setFontSize(10.5)
          doc.text(s.result, 420, y)
          y += 22
          s.grades?.forEach((g) => {
            ensureRoom(16)
            doc.setFontSize(9.5)
            doc.setTextColor(90)
            doc.text(`${g.key} — ${g.label}: ${g.score}/8`, MARGIN + 14, y)
            doc.setTextColor(0)
            y += 14
          })
          y += 8
        })
      }

      doc.save(`${studentName.replace(/\s+/g, '_')}_progress.pdf`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <button
      onClick={download}
      disabled={busy}
      title="Download this student's progress as a PDF"
      className="rounded-[var(--radius-control)] px-2.5 py-1 text-[10px] font-black tracking-wider disabled:opacity-50"
      style={{ border: '1px solid var(--border-strong)', color: 'var(--text)', whiteSpace: 'nowrap' }}
    >
      {busy ? '…' : '⬇️ PDF'}
    </button>
  )
}
