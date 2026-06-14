'use client'

import { useState, useTransition } from 'react'
import QuestionImage from '@/components/exam/QuestionImage'
import {
  approveImage,
  uploadReplacementImage,
  type ReviewEntry,
} from './actions'

interface ReviewCardProps {
  entry: ReviewEntry
}

export default function ReviewCard({ entry }: ReviewCardProps) {
  const [isPending, startTransition] = useTransition()

  // upload panel
  const [showUpload, setShowUpload]   = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [dragOver, setDragOver]       = useState(false)

  // result + live generated image
  const [result, setResult]         = useState<{ type: 'ok' | 'err'; msg: string } | null>(null)
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(entry.generated_path ?? null)
  const [approved, setApproved]     = useState(entry.approved)

  // Interactive artefact (code_rendered) entries render the live component instead of an SVG.
  const isArtifact = entry.image_type === 'code_rendered' && !!entry.render_component

  // ── Approve ────────────────────────────────────────────────────────────────
  function handleApprove() {
    const path = generatedUrl ?? entry.generated_path ?? ''
    if (!isArtifact && !path) {
      setResult({ type: 'err', msg: 'Nothing to approve — author an SVG or upload an image first' })
      return
    }
    startTransition(async () => {
      setResult(null)
      const res = await approveImage(entry.paperId, entry.taskPath, path)
      if (res.ok) {
        setResult({ type: 'ok', msg: isArtifact ? '✅ Approved — artefact now live' : '✅ Approved — now live' })
        setApproved(true)
      } else {
        setResult({ type: 'err', msg: res.error ?? 'Approval failed' })
      }
    })
  }

  // ── Upload ───────────────────────────────────────────────────────────────
  function uploadFile(file: File) {
    setUploadError(null)
    startTransition(async () => {
      setResult(null)
      const fd = new FormData()
      fd.append('file', file)
      const res = await uploadReplacementImage(entry.paperId, entry.taskPath, fd)
      if (res.ok) {
        setResult({ type: 'ok', msg: '✅ Uploaded — click Approve to push live' })
        if (res.newUrl) setGeneratedUrl(`${res.newUrl}?t=${Date.now()}`)
        setShowUpload(false)
      } else {
        setUploadError(res.error ?? 'Upload failed')
        setShowUpload(true)   // surface the error in the panel
      }
    })
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) uploadFile(file)
    e.target.value = ''   // allow re-selecting the same file
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setUploadError(`"${file.type || 'unknown'}" is not an image — use PNG, JPG, WebP or SVG`)
      setShowUpload(true)
      return
    }
    uploadFile(file)
  }

  const contextLabel = [
    entry.questionId != null ? `Q${entry.questionId}` : null,
    entry.taskLabel ? `task ${entry.taskLabel}` : null,
  ].filter(Boolean).join(' · ')

  const hasGenerated = !!(generatedUrl ?? entry.generated_path)

  return (
    <div className={`rounded-card border border-line bg-surface shadow-card overflow-hidden transition-opacity ${isPending ? 'opacity-60 pointer-events-none' : ''}`}>

      {/* ── Card header ── */}
      <div className="px-5 py-3 bg-surface-2 border-b border-line flex items-center gap-2 flex-wrap">
        <span className="font-mono text-xs bg-surface-3 text-ink-muted px-2 py-0.5 rounded">
          {entry.paperId}
        </span>
        {contextLabel && <span className="text-sm text-ink-muted font-medium">{contextLabel}</span>}
        {entry.topic   && <span className="text-xs text-ink-subtle italic">{entry.topic}</span>}
        <span className={`ml-auto text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
          approved ? 'bg-success-surface text-success' : 'bg-warning-surface text-warning'
        }`}>
          {approved ? 'approved' : 'needs review'}
        </span>
      </div>

      {/* ── Context text ── */}
      {(entry.stemText || entry.taskText) && (
        <div className="px-5 py-2 border-b border-divider bg-surface">
          {entry.stemText && (
            <p className="text-xs text-ink-subtle line-clamp-2">
              <span className="font-semibold">Stem:</span> {entry.stemText}
            </p>
          )}
          {entry.taskText && (
            <p className="text-xs text-ink-muted line-clamp-2 mt-0.5">
              <span className="font-semibold">Task:</span> {entry.taskText}
            </p>
          )}
        </div>
      )}

      {/* ── Image comparison ── */}
      <div className="grid grid-cols-2 gap-4 p-4 bg-surface border-b border-divider">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-subtle mb-1">Original (IB)</p>
          {entry.original_path ? (
            <QuestionImage
              image_type="original"
              src={entry.original_path}
              alt="Original image"
              className="figure-surface w-full"
              style={{ maxHeight: 260, objectFit: 'contain' }}
            />
          ) : (
            <div className="flex items-center justify-center h-32 rounded-control border-2 border-dashed border-line text-ink-subtle text-xs">
              No original
            </div>
          )}
        </div>
        <div
          onDragOver={e => { e.preventDefault(); setDragOver(true) }}
          onDragEnter={e => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className="relative"
        >
          <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-subtle mb-1">
            {isArtifact ? <>Interactive artifact <span className="ml-1 font-mono normal-case tracking-normal text-info">{entry.render_component}</span></> : 'SVG replacement'}
            <span className="ml-2 normal-case font-normal tracking-normal text-ink-subtle">
              {isArtifact ? '· try it — this replaces the IB media when approved' : '· drag & drop an image to replace'}
            </span>
          </p>
          {isArtifact ? (
            <div className="figure-surface w-full">
              <QuestionImage
                image_type="code_rendered"
                render_component={entry.render_component}
                render_data={entry.render_data}
                alt="Interactive artifact"
              />
            </div>
          ) : hasGenerated ? (
            <QuestionImage
              image_type="ai_generated"
              generated_src={generatedUrl ?? entry.generated_path}
              alt="SVG replacement"
              className="figure-surface w-full"
              style={{ maxHeight: 260, objectFit: 'contain' }}
            />
          ) : (
            <div className="flex items-center justify-center h-32 rounded-control border-2 border-dashed border-line text-ink-subtle text-xs text-center px-3">
              No SVG yet — ask Claude to author one, or drag &amp; drop / upload your own image
            </div>
          )}
          {dragOver && (
            <div
              className="absolute inset-0 top-5 rounded-control border-2 border-dashed flex items-center justify-center pointer-events-none"
              style={{ borderColor: 'var(--info)', background: 'var(--info-surface)' }}
            >
              <span className="text-info text-sm font-bold">📥 Drop image to replace</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Upload panel ── */}
      {showUpload && (
        <div className="px-4 py-3 bg-info-surface border-b border-info space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-info">
            Upload replacement image
          </p>
          <p className="text-xs text-info">
            PNG / JPG / WebP / SVG · max 10 MB · replaces the SVG above
          </p>
          <label
            className="inline-flex items-center gap-2 cursor-pointer px-4 py-2 rounded-control text-xs font-semibold hover:opacity-90"
            style={{ background: 'var(--info)', color: 'var(--text-on-accent)' }}
          >
            📁 Choose file
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/svg+xml"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          {uploadError && <p className="text-xs text-danger font-medium">{uploadError}</p>}
          <button
            onClick={() => { setShowUpload(false); setUploadError(null) }}
            className="ml-2 px-3 py-1.5 bg-surface-3 text-ink-muted text-xs font-semibold rounded-control hover:opacity-90"
          >
            Cancel
          </button>
        </div>
      )}

      {/* ── Action buttons — exactly two ── */}
      <div className="px-4 py-3 bg-surface flex items-center gap-2 flex-wrap">
        <button
          onClick={handleApprove}
          disabled={isPending || (!hasGenerated && !isArtifact)}
          className="px-4 py-1.5 text-xs font-bold rounded-control hover:opacity-90 disabled:opacity-40"
          style={{ background: 'var(--success)', color: 'var(--text-on-accent)' }}
        >
          ✅ Approve
        </button>

        <button
          onClick={() => { setShowUpload(v => !v); setUploadError(null) }}
          className={`px-4 py-1.5 text-xs font-bold rounded-control border transition-colors ${
            showUpload
              ? 'text-on-accent'
              : 'bg-surface text-info hover:bg-info-surface'
          }`}
          style={showUpload
            ? { background: 'var(--info)', borderColor: 'var(--info)' }
            : { borderColor: 'var(--info-border)' }}
        >
          📤 Upload
        </button>

        <div className="ml-auto flex items-center gap-2">
          {result && (
            <span className={`text-xs font-semibold px-2 py-1 rounded ${
              result.type === 'ok' ? 'bg-success-surface text-success' : 'bg-danger-surface text-danger'
            }`}>
              {result.msg}
            </span>
          )}
          {isPending && <span className="text-xs text-ink-subtle animate-pulse">Processing…</span>}
        </div>
      </div>
    </div>
  )
}
