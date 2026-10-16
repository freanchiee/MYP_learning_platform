'use client'

import { useEffect, useState, type CSSProperties, type MouseEvent } from 'react'
import { signedUploadUrl } from '@/lib/design-live/uploads'

/** A thumbnail of an uploaded photo that opens full size in a new tab, using a short-lived signed link
 *  (uploads are private, see lib/design-live/uploads.ts). */
export default function SignedThumb({ url, name, style, onLinkClick }: { url: string; name: string; style: CSSProperties; onLinkClick?: (e: MouseEvent) => void }) {
  const [src, setSrc] = useState<string | null>(null)
  useEffect(() => {
    let live = true
    signedUploadUrl(url).then((u) => { if (live) setSrc(u) })
    return () => { live = false }
  }, [url])
  return (
    <a href={src ?? undefined} target="_blank" rel="noreferrer" onClick={onLinkClick} style={{ display: 'block' }}>
      {src ? <img src={src} alt={name} style={style} /> : <div aria-label={name} style={{ ...style, background: 'var(--surface-2)' }} />}
    </a>
  )
}
