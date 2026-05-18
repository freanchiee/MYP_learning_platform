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
    <div className="rounded-xl border border-gray-300 focus-within:ring-2 focus-within:ring-[#3cb563] focus-within:border-transparent overflow-hidden bg-white transition-shadow">
      {/* Toolbar */}
      <div className="bg-gray-50 border-b border-gray-200 px-2 py-1 flex gap-1 items-center">
        {/* Bold */}
        <button
          type="button"
          onMouseDown={e => { e.preventDefault(); execFormat('bold') }}
          className="px-2 py-1 rounded text-sm font-bold transition-colors"
          style={{
            background: activeFormats.bold ? '#3cb563' : 'white',
            color: activeFormats.bold ? 'white' : '#374151',
            border: activeFormats.bold ? 'none' : '1px solid #d1d5db',
          }}
          title="Bold"
        >
          B
        </button>

        {/* Italic */}
        <button
          type="button"
          onMouseDown={e => { e.preventDefault(); execFormat('italic') }}
          className="px-2 py-1 rounded text-sm italic transition-colors"
          style={{
            background: activeFormats.italic ? '#3cb563' : 'white',
            color: activeFormats.italic ? 'white' : '#374151',
            border: activeFormats.italic ? 'none' : '1px solid #d1d5db',
          }}
          title="Italic"
        >
          I
        </button>

        {/* Underline */}
        <button
          type="button"
          onMouseDown={e => { e.preventDefault(); execFormat('underline') }}
          className="px-2 py-1 rounded text-sm underline transition-colors"
          style={{
            background: activeFormats.underline ? '#3cb563' : 'white',
            color: activeFormats.underline ? 'white' : '#374151',
            border: activeFormats.underline ? 'none' : '1px solid #d1d5db',
          }}
          title="Underline"
        >
          U
        </button>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Word count */}
        <span className="text-[10px] text-gray-400 font-mono pr-1">
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
        className="px-3 py-2.5 text-sm text-gray-800 outline-none"
        style={{
          minHeight,
          fontFamily: 'Georgia, "Times New Roman", serif',
          lineHeight: '1.6',
        }}
        data-placeholder={placeholder}
      />

      <style>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}
