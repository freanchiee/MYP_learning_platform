// Shrinks a photo on the student's own device before it is uploaded.
//
// Phone photos are often 3 to 5 MB each. Every time a teacher opens the dashboard those files are sent to the browser
// again, which is most of the storage traffic a live class causes. A photo of a sketch is perfectly clear at 1600 px on
// its long side, saved as a JPEG, usually around 150 to 300 KB. Small images, GIFs and anything that fails to shrink
// are uploaded unchanged.

const MAX_EDGE = 1600
const QUALITY = 0.82
const SKIP_BELOW_BYTES = 250 * 1024

export async function shrinkImage(file: File): Promise<File> {
  try {
    if (file.type === 'image/gif') return file // animated; leave alone
    const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' })
    const long = Math.max(bitmap.width, bitmap.height)
    if (file.size <= SKIP_BELOW_BYTES && long <= MAX_EDGE) {
      bitmap.close()
      return file
    }
    const scale = Math.min(1, MAX_EDGE / long)
    const w = Math.max(1, Math.round(bitmap.width * scale))
    const h = Math.max(1, Math.round(bitmap.height * scale))
    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      bitmap.close()
      return file
    }
    ctx.fillStyle = '#ffffff' // JPEG has no transparency: put transparent PNG screenshots on white
    ctx.fillRect(0, 0, w, h)
    ctx.drawImage(bitmap, 0, 0, w, h)
    bitmap.close()
    const blob: Blob | null = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', QUALITY))
    if (!blob || blob.size >= file.size) return file // never make it bigger
    const base = file.name.replace(/\.[^.]+$/, '') || 'photo'
    return new File([blob], `${base}.jpg`, { type: 'image/jpeg', lastModified: Date.now() })
  } catch {
    return file
  }
}
