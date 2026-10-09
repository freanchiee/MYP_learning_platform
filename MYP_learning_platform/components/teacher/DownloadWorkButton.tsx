'use client'

// One student's work for one live task, as a designed PDF: organised by design-cycle
// criterion and strand, with the student's own words clearly separated from task
// context and reference answers (see lib/design-live/workPdf.ts). Meant to be read by
// the teacher, revised from by the student, or handed to an AI to help with grading.
// Built entirely client-side from data the class page already fetched.

import { useState } from 'react'
import type { WorkDoc } from '@/lib/design-live/studentWork'
import { buildWorkPdf, type ImageMap } from '@/lib/design-live/workPdf'

// Uploaded sketches/photos are embedded in the PDF. pdfmake only takes JPEG/PNG, so every
// image is redrawn onto a canvas (which also normalises webp/heic-ish formats and caps size).
async function loadImage(url: string): Promise<ImageMap[string] | null> {
  try {
    const ctl = new AbortController()
    const t = setTimeout(() => ctl.abort(), 8000)
    const res = await fetch(url, { signal: ctl.signal })
    clearTimeout(t)
    if (!res.ok) return null
    const bmp = await createImageBitmap(await res.blob())
    const scale = Math.min(1, 1100 / Math.max(bmp.width, bmp.height))
    const w = Math.max(1, Math.round(bmp.width * scale))
    const h = Math.max(1, Math.round(bmp.height * scale))
    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')
    if (!ctx) return null
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, w, h)
    ctx.drawImage(bmp, 0, 0, w, h)
    return { dataUrl: canvas.toDataURL('image/jpeg', 0.85), w, h }
  } catch {
    return null // CORS/format/network: the PDF falls back to a link for that image
  }
}

export default function DownloadWorkButton({ doc }: { doc: WorkDoc }) {
  const [busy, setBusy] = useState(false)

  const download = async () => {
    setBusy(true)
    try {
      const urls = Array.from(new Set(doc.criteria.flatMap((c) => c.strands.flatMap((s) => s.sections.flatMap((x) => x.items.flatMap((i) => (i.kind === 'images' ? i.images.map((im) => im.url) : [])))))))
      const images: ImageMap = {}
      await Promise.all(urls.map(async (u) => { const img = await loadImage(u); if (img) images[u] = img }))

      const pdfMakeMod: any = await import('pdfmake/build/pdfmake')
      const vfsMod: any = await import('pdfmake/build/vfs_fonts')
      const pdfMake = pdfMakeMod.default ?? pdfMakeMod
      pdfMake.vfs = vfsMod.pdfMake?.vfs ?? vfsMod.default?.pdfMake?.vfs ?? vfsMod.default ?? vfsMod
      const safe = (t: string) => t.replace(/[^\w-]+/g, '_')
      pdfMake.createPdf(buildWorkPdf(doc, images)).download(`${safe(doc.student)}_${safe(doc.activityTitle)}_design-cycle.pdf`)
    } finally {
      setBusy(false)
    }
  }

  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); download() }}
      disabled={busy}
      title={`Download ${doc.student}'s work for ${doc.activityTitle} as a design-cycle PDF`}
      className="rounded-[var(--radius-control)] px-2.5 py-1 text-[10px] font-black tracking-wider disabled:opacity-50"
      style={{ border: '1px solid var(--border-strong)', color: 'var(--text)', whiteSpace: 'nowrap' }}
    >
      {busy ? 'Building…' : '⬇️ Work PDF'}
    </button>
  )
}
