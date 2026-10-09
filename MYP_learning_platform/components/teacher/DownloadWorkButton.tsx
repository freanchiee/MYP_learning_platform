'use client'

// One student's actual written answers for one live task, as a PDF the teacher
// can save, print or attach as evidence. Built client-side from the answers the
// class page already fetched (see collectWork), so it needs no extra query.

import { useState } from 'react'
import type { WorkBlock } from '@/lib/design-live/studentWork'

const MARGIN = 40
const PAGE_BOTTOM = 790
const WIDTH = 515

// jsPDF's built-in fonts are Latin-1 only: strip emoji/symbols so they don't turn into garbage.
const clean = (t: string) => t.replace(/[^ -~ -ÿ–—‘’“”•…\n]/g, '').replace(/ {2,}/g, ' ').trim()

export default function DownloadWorkButton({ studentName, className, activityTitle, date, blocks }: {
  studentName: string
  className: string
  activityTitle: string
  date: string
  blocks: WorkBlock[]
}) {
  const [busy, setBusy] = useState(false)

  const download = async () => {
    setBusy(true)
    try {
      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF({ unit: 'pt', format: 'a4' })
      let y = 60
      const room = (n: number) => { if (y + n > PAGE_BOTTOM) { doc.addPage(); y = 60 } }
      const write = (text: string, size: number, bold: boolean, color: number, indent = 0) => {
        doc.setFont('helvetica', bold ? 'bold' : 'normal')
        doc.setFontSize(size)
        doc.setTextColor(color)
        const lines = doc.splitTextToSize(clean(text) || '-', WIDTH - indent) as string[]
        for (const line of lines) { room(size + 4); doc.text(line, MARGIN + indent, y); y += size + 4 }
      }

      write(activityTitle, 18, true, 0)
      write(`${studentName} - ${className}`, 12, true, 40)
      write(`${date} - downloaded ${new Date().toLocaleDateString()}`, 9, false, 120)
      y += 14

      if (blocks.length === 0) write('No written answers saved yet.', 10.5, false, 130)
      blocks.forEach((b) => {
        room(40)
        write(b.stage, 13, true, 0)
        doc.setLineWidth(0.5); doc.line(MARGIN, y - 8, MARGIN + WIDTH, y - 8)
        y += 4
        b.rows.forEach((r) => {
          room(30)
          write(r.label.toUpperCase(), 8.5, true, 110)
          if (r.images?.length) r.images.forEach((im) => write(`Image: ${im.name} (${im.url})`, 9, false, 60, 8))
          else write(r.text, 10.5, false, 0, 8)
          y += 6
        })
        y += 8
      })

      doc.save(`${studentName.replace(/\s+/g, '_')}_${activityTitle.replace(/\s+/g, '_')}.pdf`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); download() }}
      disabled={busy}
      title={`Download ${studentName}'s work for ${activityTitle}`}
      className="rounded-[var(--radius-control)] px-2.5 py-1 text-[10px] font-black tracking-wider disabled:opacity-50"
      style={{ border: '1px solid var(--border-strong)', color: 'var(--text)', whiteSpace: 'nowrap' }}
    >
      {busy ? '…' : '⬇️ Work'}
    </button>
  )
}
