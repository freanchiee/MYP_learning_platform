// Browser-only: turns a WorkDoc into a downloaded PDF. Shared by the teacher's buttons and the student's
// end-of-activity downloads. Uploaded sketches are embedded; pdfmake only takes JPEG/PNG, so every image is
// redrawn onto a canvas first (which also normalises other formats and caps the size).

import type { WorkDoc } from './studentWork'
import { buildWorkPdf, type ImageMap } from './workPdf'

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

export async function downloadWorkPdf(doc: WorkDoc): Promise<void> {
  const urls = Array.from(new Set(doc.criteria.flatMap((c) => c.strands.flatMap((s) => s.sections.flatMap((x) => x.items.flatMap((i) => (i.kind === 'images' ? i.images.map((im) => im.url) : [])))))))
  const images: ImageMap = {}
  await Promise.all(urls.map(async (u) => { const img = await loadImage(u); if (img) images[u] = img }))

  const pdfMakeMod: any = await import('pdfmake/build/pdfmake')
  const vfsMod: any = await import('pdfmake/build/vfs_fonts')
  const pdfMake = pdfMakeMod.default ?? pdfMakeMod
  pdfMake.vfs = vfsMod.pdfMake?.vfs ?? vfsMod.default?.pdfMake?.vfs ?? vfsMod.default ?? vfsMod
  const safe = (t: string) => t.replace(/[^\w-]+/g, '_')
  const scope = doc.scopeLabel ? `_${safe(doc.scopeLabel)}` : '_design-cycle'
  pdfMake.createPdf(buildWorkPdf(doc, images)).download(`${safe(doc.student)}_${safe(doc.activityTitle)}${scope}.pdf`)
}
