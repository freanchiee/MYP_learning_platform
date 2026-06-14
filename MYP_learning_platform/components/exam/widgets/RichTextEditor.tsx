'use client'

import { useRef, useState, useCallback, useEffect } from 'react'

interface RichTextEditorProps {
  value: string
  onChange: (val: string) => void
  placeholder?: string
  rows?: number
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = 'Type your answer here...',
  rows = 4,
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [wordCount, setWordCount] = useState(0)
  const [activeFormats, setActiveFormats] = useState({ bold: false, italic: false, underline: false })

  const minHeight = `${rows * 1.5}rem`

  // Update word count and active formats
  const updateState = useCallback(() => {
    const el = editorRef.current
    if (!el) return
    const text = el.innerText.trim()
    const words = text ? text.split(/\s+/).filter(w => w.length > 0).length : 0
    setWordCount(words)
    setActiveFormats({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
    })
  }, [])

  const handleInput = useCallback(() => {
    const el = editorRef.current
    if (!el) return
    onChange(el.innerText)
    updateState()
  }, [onChange, updateState])

  const execFormat = useCallback((cmd: string) => {
    document.execCommand(cmd, false)
    editorRef.current?.focus()
    updateState()
  }, [updateState])

  const handleKeyUp = useCallback(() => {
    updateState()
  }, [updateState])

  const handleMouseUp = useCallback(() => {
    updateState()
  }, [updateState])

  // Sync external value changes (e.g. on mount)
  useEffect(() => {
    const el = editorRef.current
    if (!el) return
    // Only update DOM if content differs (avoids cursor jump)
    if (el.innerText !== value && value === '') {
      el.innerHTML = ''
    }
  }, [value])

  return (
    <div
      className="rounded-control focus-within:ring-2 focus-within:border-transparent overflow-hidden transition-shadow"
      style={{
        border: '1px solid var(--border-strong)',
        background: 'var(--surface)',
        ['--tw-ring-color' as string]: 'var(--accent)',
      }}
    >
      {/* Toolbar */}
      <div className="px-2 py-1 flex gap-1 items-center" style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
        {/* Bold */}
        <button
          type="button"
          onMouseDown={e => { e.preventDefault(); execFormat('bold') }}
          className="px-2 py-1 rounded-control text-sm font-bold transition-colors"
          style={{
            background: activeFormats.bold ? 'var(--accent)' : 'var(--surface)',
            color: activeFormats.bold ? 'var(--text-on-accent)' : 'var(--text-muted)',
            border: activeFormats.bold ? 'none' : '1px solid var(--border-strong)',
          }}
          title="Bold"
        >
          B
        </button>

        {/* Italic */}
        <button
          type="button"
          onMouseDown={e => { e.preventDefault(); execFormat('italic') }}
          className="px-2 py-1 rounded-control text-sm italic transition-colors"
          style={{
            background: activeFormats.italic ? 'var(--accent)' : 'var(--surface)',
            color: activeFormats.italic ? 'var(--text-on-accent)' : 'var(--text-muted)',
            border: activeFormats.italic ? 'none' : '1px solid var(--border-strong)',
          }}
          title="Italic"
        >
          I
        </button>

        {/* Underline */}
        <button
          type="button"
          onMouseDown={e => { e.preventDefault(); execFormat('underline') }}
          className="px-2 py-1 rounded-control text-sm underline transition-colors"
          style={{
            background: activeFormats.underline ? 'var(--accent)' : 'var(--surface)',
            color: activeFormats.underline ? 'var(--text-on-accent)' : 'var(--text-muted)',
            border: activeFormats.underline ? 'none' : '1px solid var(--border-strong)',
          }}
          title="Underline"
        >
          U
        </button>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Word count */}
        <span className="text-[10px] font-mono pr-1" style={{ color: 'var(--text-subtle)' }}>
          {wordCount} word{wordCount !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Editable area */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onKeyUp={handleKeyUp}
        onMouseUp={handleMouseUp}
        className="px-3 py-2.5 text-sm outline-none"
        style={{
          minHeight,
          fontFamily: 'Georgia, "Times New Roman", serif',
          lineHeight: '1.6',
          background: 'var(--surface-inset)',
          color: 'var(--text)',
        }}
        data-placeholder={placeholder}
      />

      <style>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: var(--text-subtle);
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}
