'use client'

import { useState, useTransition } from 'react'
import QuestionImage from '@/components/exam/QuestionImage'
import {
  approveImage,
  regenerateImage,
  editPromptAndRegenerate,
  flagImage,
  type ReviewEntry,
} from './actions'

interface ReviewCardProps {
  entry: ReviewEntry
}

export default function ReviewCard({ entry }: ReviewCardProps) {
  const [isPending, startTransition] = useTransition()
  const [editingPrompt, setEditingPrompt] = useState(false)
  const [newPrompt, setNewPrompt] = useState(entry.image_prompt ?? '')
  const [flagging, setFlagging] = useState(false)
  const [flagNote, setFlagNote] = useState('')
  const [result, setResult] = useState<{ type: 'ok' | 'err'; msg: string } | null>(null)
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(entry.generated_path ?? null)

  function run(action: () => Promise<{ ok: boolean; error?: string; newUrl?: string; visionUsed?: boolean; method?: string }>) {
    startTransition(async () => {
      setResult(null)
      const res = await action()
      if (res.ok) {
        const parts = []
        if (res.visionUsed) parts.push('Vision prompt')
        if (res.method === 'structure_control') parts.push('Structure Control layout')
        const suffix = parts.length ? ` (${parts.join(' + ')})` : ''
        setResult({ type: 'ok', msg: `✅ Done!${suffix}` })
        if (res.newUrl) {
          // Bust the browser cache by appending a timestamp query param
          setGeneratedUrl(`${res.newUrl}?t=${Date.now()}`)
        }
      } else {
        setResult({ type: 'err', msg: res.error ?? 'Unknown error' })
      }
    })
  }

  const subject = entry.paperId.split('-')[0]
  const contextLabel = [
    entry.questionId != null ? `Q${entry.questionId}` : null,
    entry.taskLabel ? `task ${entry.taskLabel}` : null,
  ].filter(Boolean).join(' · ')

  return (
    <div className={`rounded-2xl border shadow-sm overflow-hidden transition-opacity ${isPending ? 'opacity-60 pointer-events-none' : ''}`}>
      {/* Card header */}
      <div className="px-5 py-3 bg-gray-50 border-b border-gray-200 flex items-center gap-2 flex-wrap">
        <span className="font-mono text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
          {entry.paperId}
        </span>
        {contextLabel && (
          <span className="text-sm text-gray-600 font-medium">{contextLabel}</span>
        )}
        {entry.topic && (
          <span className="text-xs text-gray-500 italic">{entry.topic}</span>
        )}
        <span className={`ml-auto text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
          entry.image_type === 'ai_generated' ? 'bg-blue-100 text-blue-700' :
          entry.image_type === 'code_rendered' ? 'bg-purple-100 text-purple-700' :
          'bg-gray-100 text-gray-600'
        }`}>
          {entry.image_type}
          {entry.sub_type ? ` (${entry.sub_type})` : ''}
        </span>
      </div>

      {/* Context text */}
      {(entry.stemText || entry.taskText) && (
        <div className="px-5 py-2 border-b border-gray-100 bg-white">
          {entry.stemText && (
            <p className="text-xs text-gray-500 line-clamp-2"><span className="font-semibold">Stem:</span> {entry.stemText}</p>
          )}
          {entry.taskText && (
            <p className="text-xs text-gray-600 line-clamp-2 mt-0.5"><span className="font-semibold">Task:</span> {entry.taskText}</p>
          )}
        </div>
      )}

      {/* Image comparison */}
      <div className="grid grid-cols-2 gap-4 p-4 bg-white border-b border-gray-100">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Original</p>
          {entry.original_path ? (
            <QuestionImage
              image_type="original"
              src={entry.original_path}
              alt="Original image"
              className="w-full rounded border border-gray-200"
              style={{ maxHeight: 260, objectFit: 'contain', background: '#f9fafb' }}
            />
          ) : (
            <div className="flex items-center justify-center h-32 rounded border-2 border-dashed border-gray-200 text-gray-400 text-xs">
              No original
            </div>
          )}
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Generated</p>
          <QuestionImage
            image_type={entry.image_type === 'code_rendered' ? 'code_rendered' : 'ai_generated'}
            generated_src={generatedUrl}
            render_component={entry.render_component}
            render_data={entry.render_data}
            needs_review
            show_review_badge
            alt="Generated image"
            className="w-full rounded border border-gray-200"
            style={{ maxHeight: 260, objectFit: 'contain', background: '#f9fafb' }}
          />
        </div>
      </div>

      {/* Prompt section */}
      {entry.image_prompt && (
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
          {editingPrompt ? (
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                Edit prompt
              </label>
              <textarea
                value={newPrompt}
                onChange={e => setNewPrompt(e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 font-mono"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => run(() => editPromptAndRegenerate(entry.paperId, entry.taskPath, newPrompt))}
                  className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700"
                >
                  Save &amp; Regenerate
                </button>
                <button
                  onClick={() => { setEditingPrompt(false); setNewPrompt(entry.image_prompt ?? '') }}
                  className="px-3 py-1.5 bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Prompt</p>
              <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">{entry.image_prompt}</p>
            </div>
          )}
        </div>
      )}

      {/* Flag section */}
      {flagging && (
        <div className="px-4 py-3 bg-red-50 border-b border-red-100 space-y-2">
          <label className="text-[10px] font-semibold uppercase tracking-widest text-red-500">
            Flag note (required)
          </label>
          <input
            type="text"
            value={flagNote}
            onChange={e => setFlagNote(e.target.value)}
            placeholder="Why is this flagged?"
            className="w-full rounded-lg border border-red-200 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <div className="flex gap-2">
            <button
              disabled={!flagNote.trim()}
              onClick={() => run(() => flagImage(entry.paperId, entry.taskPath, flagNote))}
              className="px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 disabled:opacity-40"
            >
              Confirm Flag
            </button>
            <button
              onClick={() => setFlagging(false)}
              className="px-3 py-1.5 bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="px-4 py-3 bg-white flex items-center gap-2 flex-wrap">
        <button
          onClick={() => run(() => approveImage(entry.paperId, entry.taskPath, generatedUrl ?? entry.generated_path ?? ''))}
          className="px-4 py-1.5 bg-green-600 text-white text-xs font-bold rounded-lg hover:bg-green-700 flex items-center gap-1"
        >
          ✅ Approve
        </button>
        {entry.image_type === 'ai_generated' && (
          <>
            <button
              onClick={() => run(() => regenerateImage(entry.paperId, entry.taskPath))}
              className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 flex items-center gap-1"
            >
              🔄 Regenerate
            </button>
            <button
              onClick={() => setEditingPrompt(v => !v)}
              className="px-4 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-lg hover:bg-amber-600 flex items-center gap-1"
            >
              ✏️ Edit Prompt
            </button>
          </>
        )}
        <button
          onClick={() => setFlagging(v => !v)}
          className="px-4 py-1.5 bg-red-100 text-red-700 text-xs font-bold rounded-lg hover:bg-red-200 flex items-center gap-1"
        >
          ❌ Flag
        </button>

        {result && (
          <span className={`ml-auto text-xs font-semibold px-2 py-1 rounded ${result.type === 'ok' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {result.msg}
          </span>
        )}
        {isPending && (
          <span className="ml-auto text-xs text-gray-400 animate-pulse">Processing…</span>
        )}
      </div>
    </div>
  )
}
