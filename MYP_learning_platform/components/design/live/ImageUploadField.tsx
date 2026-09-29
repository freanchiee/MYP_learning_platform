'use client'

// A build-log style upload: students attach a screenshot or a photo of a
// sketch straight from their device, no external link or "photos go in
// your own design folder" workaround needed. Uploads go to the public
// `live-uploads` Supabase Storage bucket (see supabase migration
// live_uploads_bucket), one object per file at
// `${sessionCode}/${playerId}/${stageKey}-${fieldKey}/...` — public read
// (so a teacher's browser can just show the URL), insert restricted to
// signed-in users, delete restricted to the uploader's own files.

import { useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { WorksheetImageUpload } from '@/data/design/live/types'
import { btnStyle } from './ui'

const MAX_BYTES = 8 * 1024 * 1024
const ACCEPTED = ['image/png', 'image/jpeg', 'image/webp', 'image/gif']

export default function ImageUploadField({
  value,
  onChange,
  onPersist,
  sessionCode,
  playerId,
  stageKey,
  fieldKey,
  multiple,
}: {
  value: WorksheetImageUpload[] | undefined
  onChange: (v: WorksheetImageUpload[]) => void
  /** Saved to the DB immediately — losing an upload because a student navigated
   *  away before the next autosave tick would be a bad time. */
  onPersist: (v: WorksheetImageUpload[]) => void
  sessionCode: string
  playerId: string
  stageKey: string
  fieldKey: string
  multiple?: boolean
}) {
  const images = value || []
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = async (fileList: FileList | null) => {
    if (!fileList?.length) return
    setError(null)
    const files = Array.from(fileList).slice(0, multiple ? 4 : 1)
    const sb = createClient()
    setUploading(true)
    const uploaded: WorksheetImageUpload[] = []
    for (const file of files) {
      if (!ACCEPTED.includes(file.type)) {
        setError(`${file.name}: only PNG, JPG, WEBP or GIF images.`)
        continue
      }
      if (file.size > MAX_BYTES) {
        setError(`${file.name} is over 8MB — try a smaller screenshot.`)
        continue
      }
      const ext = file.name.split('.').pop()?.toLowerCase() || 'png'
      const path = `${sessionCode}/${playerId}/${stageKey}-${fieldKey}/${Date.now()}-${Math.random().toString(36).slice(2, 7)}.${ext}`
      const { error: upErr } = await sb.storage.from('live-uploads').upload(path, file, { contentType: file.type })
      if (upErr) {
        setError(upErr.message)
        continue
      }
      const { data } = sb.storage.from('live-uploads').getPublicUrl(path)
      uploaded.push({ url: data.publicUrl, name: file.name, uploadedAt: new Date().toISOString() })
    }
    setUploading(false)
    if (inputRef.current) inputRef.current.value = ''
    if (!uploaded.length) return
    const next = multiple ? [...images, ...uploaded] : uploaded.slice(0, 1)
    onChange(next)
    onPersist(next)
  }

  const remove = async (idx: number) => {
    const img = images[idx]
    const next = images.filter((_, i) => i !== idx)
    onChange(next)
    onPersist(next)
    try {
      const marker = '/live-uploads/'
      const at = img.url.indexOf(marker)
      if (at >= 0) await createClient().storage.from('live-uploads').remove([decodeURIComponent(img.url.slice(at + marker.length))])
    } catch {
      // best-effort cleanup — the field is already updated either way
    }
  }

  return (
    <div style={{ display: 'grid', gap: 8 }}>
      {images.length > 0 && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {images.map((img, i) => (
            <div key={img.url} style={{ position: 'relative' }}>
              <a href={img.url} target="_blank" rel="noreferrer">
                <img src={img.url} alt={img.name} style={{ width: 84, height: 84, objectFit: 'cover', borderRadius: 8, border: '1.5px solid var(--border)', display: 'block' }} />
              </a>
              <button
                onClick={() => remove(i)}
                title="Remove"
                style={{ position: 'absolute', top: -6, right: -6, width: 20, height: 20, borderRadius: '50%', border: '1.5px solid var(--border-strong)', background: 'var(--surface-elevated)', color: 'var(--text)', fontSize: 11, lineHeight: 1, cursor: 'pointer', display: 'grid', placeItems: 'center' }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
      {(multiple || images.length === 0) && (
        <div>
          <input ref={inputRef} type="file" accept={ACCEPTED.join(',')} multiple={multiple} onChange={(e) => handleFiles(e.target.files)} style={{ display: 'none' }} id={`imgfield-${stageKey}-${fieldKey}`} />
          <button
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            style={{ ...btnStyle('var(--surface)'), fontSize: 12 }}
          >
            {uploading ? '⬆️ Uploading…' : images.length ? '📷 Add another photo' : '📷 Upload a screenshot or photo'}
          </button>
        </div>
      )}
      {error && <div style={{ fontSize: 11.5, color: '#D6425E' }}>{error}</div>}
    </div>
  )
}
