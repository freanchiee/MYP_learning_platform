'use client'

/**
 * EditableImage — Context-aware image component
 *
 * Published mode  → plain <img>; applies imageOverride; hides deleted images entirely.
 *
 * Edit mode       → hover reveals four actions:
 *   ✂  Crop    – full-screen canvas crop editor with smart auto-detect
 *   ⬆  Upload  – pick a local file; stored as data URL override
 *   🔗  URL    – type / paste a replacement URL
 *   🗑  Delete  – hides the image in published mode; shows a placeholder in edit mode
 *
 * All changes live in examStore (in-memory).
 * Future: one-click export to persist overrides to Supabase.
 */

import { useRef, useState } from 'react'
import { useExamStore } from '@/store/examStore'
import ImageCropTool from '@/components/exam/ImageCropTool'
import { resolveAssetUrl } from '@/lib/assets'

interface EditableImageProps {
  src: string
  alt?: string
  className?: string
  style?: React.CSSProperties
}

type PanelMode = 'idle' | 'url' | 'crop'

export default function EditableImage({ src, alt = '', className, style }: EditableImageProps) {
  const editMode         = useExamStore(s => s.editMode)
  const imageOverrides   = useExamStore(s => s.imageOverrides)
  const deletedImages    = useExamStore(s => s.deletedImages)
  const setImageOverride = useExamStore(s => s.setImageOverride)
  const setDeletedImage  = useExamStore(s => s.setDeletedImage)

  const [panel,    setPanel]   = useState<PanelMode>('idle')
  const [urlInput, setUrl]     = useState('')
  const fileInputRef           = useRef<HTMLInputElement>(null)
  const urlInputRef            = useRef<HTMLInputElement>(null)

  const displaySrc  = imageOverrides[src] ?? resolveAssetUrl(src)
  const isDeleted   = !!deletedImages[src]
  const hasOverride = !!imageOverrides[src]

  // ── Upload handler ──────────────────────────────────────────────────────────
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => {
      const dataUrl = ev.target?.result as string
      setImageOverride(src, dataUrl)
      // Also un-delete if it was deleted
      if (isDeleted) setDeletedImage(src, false)
      setPanel('idle')
    }
    reader.readAsDataURL(file)
    // Reset input so same file can be picked again
    e.target.value = ''
  }

  function openUrl() {
    setUrl(displaySrc.startsWith('data:') ? '' : displaySrc)
    setPanel('url')
    setTimeout(() => urlInputRef.current?.select(), 40)
  }

  function applyUrl() {
    const v = urlInput.trim()
    if (v) {
      setImageOverride(src, v)
      if (isDeleted) setDeletedImage(src, false)
    }
    setPanel('idle')
  }

  function restoreImage() {
    setDeletedImage(src, false)
    setPanel('idle')
  }

  function clearAll() {
    setImageOverride(src, '')
    setDeletedImage(src, false)
    setPanel('idle')
  }

  // ── Hidden file input (always mounted so ref is stable) ────────────────────
  const fileInput = (
    <input
      ref={fileInputRef}
      type="file"
      accept="image/*"
      className="hidden"
      onChange={handleFileChange}
    />
  )

  // ── Published mode ──────────────────────────────────────────────────────────
  if (!editMode) {
    if (isDeleted) return null
    return <img src={displaySrc} alt={alt} className={className} style={style} />
  }

  // ── Crop modal (full-screen) ────────────────────────────────────────────────
  if (panel === 'crop') {
    return (
      <>
        {fileInput}
        <ImageCropTool
          src={displaySrc}
          onApply={dataUrl => { setImageOverride(src, dataUrl); setPanel('idle') }}
          onClose={() => setPanel('idle')}
        />
      </>
    )
  }

  // ── Deleted placeholder ─────────────────────────────────────────────────────
  if (isDeleted) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-2 rounded-xl border-2
                   border-dashed py-6 px-4"
        style={{ minHeight: 80, borderColor: 'var(--danger)', background: 'var(--danger-surface)', color: 'var(--danger)', ...(style ?? {}) }}
      >
        {fileInput}
        <span className="text-2xl">🗑</span>
        <span className="text-xs font-semibold">Image deleted (hidden in published mode)</span>
        <div className="flex gap-2 mt-1">
          <button
            onClick={restoreImage}
            className="px-3 py-1 text-xs font-bold rounded-lg transition-colors hover:brightness-110"
            style={{ background: 'var(--success)', color: 'var(--text-on-accent)' }}
          >
            ↩ Restore
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-1 text-xs font-bold rounded-lg transition-colors hover:brightness-110"
            style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
          >
            ⬆ Upload replacement
          </button>
        </div>
      </div>
    )
  }

  // ── Normal edit-mode wrapper ────────────────────────────────────────────────
  return (
    <div className="relative group">
      {fileInput}

      {/* Image */}
      <img
        src={displaySrc}
        alt={alt}
        className={className}
        style={{
          ...style,
          outline: hasOverride ? '2.5px solid var(--success)' : '2px dashed var(--warning)',
          outlineOffset: 3,
          borderRadius: (style?.borderRadius as string | undefined) ?? 8,
        }}
      />

      {/* Replaced badge */}
      {hasOverride && panel === 'idle' && (
        <span
          className="absolute top-1.5 left-1.5 z-10 pointer-events-none
                         text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow"
          style={{ background: 'var(--success)', color: 'var(--text-on-accent)' }}
        >
          ✓ replaced
        </span>
      )}

      {/* ── Hover action bar (idle) ── */}
      {panel === 'idle' && (
        <div
          className="absolute inset-0 flex items-center justify-center gap-1.5
                     group-hover:[background:var(--scrim)] transition-all duration-150
                     opacity-0 group-hover:opacity-100 rounded-lg z-10 flex-wrap px-3"
        >
          <ActionBtn color="amber" onClick={() => setPanel('crop')}  label="✂ Crop" />
          <ActionBtn color="indigo" onClick={() => fileInputRef.current?.click()} label="⬆ Upload" />
          <ActionBtn color="blue"  onClick={openUrl}                  label="🔗 URL" />
          <ActionBtn color="red"   onClick={() => setDeletedImage(src, true)} label="🗑 Delete" />
          {(hasOverride) && (
            <ActionBtn color="gray" onClick={clearAll} label="↩ Reset" />
          )}
        </div>
      )}

      {/* ── URL input popover ── */}
      {panel === 'url' && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2.5
                        rounded-lg z-20 p-4"
          style={{ background: 'var(--scrim)' }}
        >
          <p className="text-xs font-semibold" style={{ color: 'var(--text-on-accent)' }}>Paste image URL or /public path:</p>
          <input
            ref={urlInputRef}
            type="text"
            value={urlInput}
            onChange={e => setUrl(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') applyUrl(); if (e.key === 'Escape') setPanel('idle') }}
            className="w-full max-w-xs px-3 py-2 rounded-lg text-sm border
                       focus:outline-none focus:ring-2"
            style={{ borderColor: 'var(--border-strong)', background: 'var(--surface-inset)', color: 'var(--text)' }}
            placeholder="https://… or /images/papers/…"
          />
          <div className="flex items-center gap-2">
            <button onClick={applyUrl}
              className="px-4 py-1.5 text-xs font-bold rounded-lg hover:brightness-110"
              style={{ background: 'var(--success)', color: 'var(--text-on-accent)' }}>
              ✓ Apply
            </button>
            <button onClick={() => setPanel('idle')}
              className="px-4 py-1.5 text-xs font-bold rounded-lg hover:brightness-95"
              style={{ background: 'var(--surface-3)', color: 'var(--text-muted)' }}>
              Cancel
            </button>
            {hasOverride && (
              <button onClick={clearAll}
                className="px-4 py-1.5 text-xs font-bold rounded-lg hover:brightness-110"
                style={{ background: 'var(--danger)', color: 'var(--text-on-accent)' }}>
                Reset original
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Small helper for action buttons ─────────────────────────────────────────
const COLOR_MAP: Record<string, React.CSSProperties> = {
  amber:  { background: 'var(--warning)', color: 'var(--text-on-accent)' },
  indigo: { background: 'var(--accent-2)', color: 'var(--text-on-accent)' },
  blue:   { background: 'var(--accent)', color: 'var(--text-on-accent)' },
  red:    { background: 'var(--danger)', color: 'var(--text-on-accent)' },
  gray:   { background: 'var(--surface-3)', color: 'var(--text-muted)' },
}

function ActionBtn({ color, onClick, label }: { color: string; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="px-2.5 py-1.5 text-[11px] font-bold rounded-lg shadow-md
                  transition-colors whitespace-nowrap hover:brightness-110"
      style={COLOR_MAP[color] ?? undefined}
    >
      {label}
    </button>
  )
}
