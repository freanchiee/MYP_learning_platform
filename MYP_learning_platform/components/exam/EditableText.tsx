'use client'

/**
 * EditableText — Inline text editor for edit mode
 *
 * Published mode  → renders via renderText(), no chrome.
 *
 * Edit mode       → amber dashed border around every editable block.
 *                   Hover reveals a "✏ edit" chip in the top-right corner.
 *                   Click → monospace textarea showing raw markdown source.
 *                   Live preview panel below the textarea.
 *                   Ctrl+Enter or ✓ Save to commit · Esc to discard.
 *
 * Key scheme (passed by caller):
 *   "q{id}:stem"              – question stem
 *   "q{id}:task:{label}:text" – task question text
 *
 * All overrides live in examStore.textOverrides (in-memory).
 */

import { useState, useRef, useEffect } from 'react'
import { useExamStore } from '@/store/examStore'

interface EditableTextProps {
  /** Unique key used in examStore.textOverrides */
  textKey: string
  /** The original value from questions.ts */
  originalText: string
  /** How to display the (possibly overridden) text */
  renderText: (text: string) => React.ReactNode
  /** Optional label shown in the editor header */
  label?: string
}

export default function EditableText({
  textKey,
  originalText,
  renderText,
  label,
}: EditableTextProps) {
  const editMode        = useExamStore(s => s.editMode)
  const textOverrides   = useExamStore(s => s.textOverrides)
  const setTextOverride = useExamStore(s => s.setTextOverride)

  const [isEditing, setIsEditing] = useState(false)
  const [draft,     setDraft]     = useState('')
  const taRef = useRef<HTMLTextAreaElement>(null)

  const currentText = textOverrides[textKey] ?? originalText
  const hasOverride = textKey in textOverrides

  // ── Auto-resize textarea ────────────────────────────────────────────────────
  useEffect(() => {
    const ta = taRef.current
    if (!ta) return
    ta.style.height = 'auto'
    ta.style.height = `${ta.scrollHeight + 4}px`
  }, [draft])

  function openEditor() {
    setDraft(currentText)
    setIsEditing(true)
    // Focus after paint
    requestAnimationFrame(() => {
      taRef.current?.focus()
      taRef.current?.setSelectionRange(0, 0)
    })
  }

  function save() {
    const trimmed = draft.trim()
    // If identical to original, remove override to keep the store clean
    if (trimmed === originalText.trim()) {
      setTextOverride(textKey, '')
    } else if (trimmed) {
      setTextOverride(textKey, trimmed)
    }
    setIsEditing(false)
  }

  function discard() {
    setIsEditing(false)
  }

  function resetToOriginal() {
    setTextOverride(textKey, '')
    setIsEditing(false)
  }

  // ── Published mode ──────────────────────────────────────────────────────────
  if (!editMode) {
    return <>{renderText(currentText)}</>
  }

  // ── Edit mode: editing ──────────────────────────────────────────────────────
  if (isEditing) {
    return (
      <div className="rounded-xl border-2 border-amber-400 bg-amber-50/60 p-3 space-y-2.5 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">
            {label ?? 'Editing'} — raw markdown
          </span>
          <div className="flex items-center gap-1.5">
            {hasOverride && (
              <button
                onClick={resetToOriginal}
                className="text-[10px] text-red-400 hover:text-red-600 underline"
              >
                Reset to original
              </button>
            )}
            <kbd className="text-[9px] text-gray-400 bg-gray-100 border border-gray-200
                            rounded px-1 py-0.5">Ctrl+↵ save</kbd>
            <kbd className="text-[9px] text-gray-400 bg-gray-100 border border-gray-200
                            rounded px-1 py-0.5">Esc cancel</kbd>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          ref={taRef}
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Escape') { e.preventDefault(); discard() }
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); save() }
          }}
          spellCheck
          className="w-full px-3 py-2.5 rounded-lg border-2 border-amber-300 bg-white
                     text-gray-800 text-[13px] leading-relaxed resize-none
                     focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          style={{ fontFamily: '"JetBrains Mono", "Fira Code", monospace', minHeight: 72 }}
        />

        {/* Character count */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-400 font-mono">{draft.length} chars</span>
          <div className="flex gap-2">
            <button
              onClick={discard}
              className="px-3 py-1 rounded-lg text-xs bg-gray-200 hover:bg-gray-300
                         text-gray-700 font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={save}
              className="px-4 py-1 rounded-lg text-xs bg-emerald-500 hover:bg-emerald-400
                         text-white font-bold transition-colors"
            >
              ✓ Save
            </button>
          </div>
        </div>

        {/* Live preview */}
        <div className="rounded-lg border border-amber-200 bg-white px-4 py-3">
          <p className="text-[9px] font-bold uppercase tracking-widest text-amber-400 mb-2">
            Preview
          </p>
          <div className="text-sm">
            {renderText(draft || ' ')}
          </div>
        </div>
      </div>
    )
  }

  // ── Edit mode: view with edit affordance ────────────────────────────────────
  return (
    <div
      className="relative group/text"
      style={{
        outline: hasOverride ? '1.5px solid #10b981' : '1.5px dashed #fbbf24',
        outlineOffset: 5,
        borderRadius: 6,
      }}
    >
      {/* Rendered text */}
      {renderText(currentText)}

      {/* "✏ edit" chip — appears on hover */}
      <button
        onClick={openEditor}
        title="Edit this text"
        className="absolute -top-4 right-0 z-10
                   opacity-0 group-hover/text:opacity-100 transition-opacity
                   flex items-center gap-1 px-2 py-0.5
                   bg-amber-400 hover:bg-amber-300 text-black text-[10px] font-bold
                   rounded-full shadow-sm"
      >
        ✏ edit
      </button>

      {/* "edited" badge */}
      {hasOverride && (
        <span
          className="absolute -top-4 left-0 z-10 pointer-events-none
                     bg-emerald-500 text-white text-[8px] font-bold
                     px-1.5 py-0.5 rounded-full shadow"
        >
          edited
        </span>
      )}
    </div>
  )
}
