'use client'

/**
 * EditModeBanner — Sticky amber strip visible whenever editMode is on.
 *
 * Shows a live count of pending changes (images replaced/deleted, texts edited).
 * Future: "Save to DB" button will persist overrides via Supabase for teacher accounts.
 */

import { useExamStore } from '@/store/examStore'

export default function EditModeBanner() {
  const setEditMode    = useExamStore(s => s.setEditMode)
  const imageOverrides = useExamStore(s => s.imageOverrides)
  const deletedImages  = useExamStore(s => s.deletedImages)
  const textOverrides  = useExamStore(s => s.textOverrides)

  const imgReplaced = Object.keys(imageOverrides).length
  const imgDeleted  = Object.keys(deletedImages).length
  const textsEdited = Object.keys(textOverrides).length
  const totalChanges = imgReplaced + imgDeleted + textsEdited

  return (
    <div
      className="flex items-center justify-between gap-3 px-4 py-1.5 text-xs select-none flex-wrap"
      style={{ background: 'var(--warning-surface)', borderBottom: '2px solid var(--warning)' }}
    >
      {/* Left: mode label + instructions */}
      <div className="flex items-center gap-2.5 flex-wrap">
        <span className="font-black uppercase tracking-widest text-[10px]" style={{ color: 'var(--warning-fg)' }}>
          ✏ Edit Mode
        </span>
        <span className="hidden sm:inline" style={{ color: 'var(--warning-fg)' }}>
          Hover any image for crop / upload / delete · Hover any text for inline editing
        </span>
      </div>

      {/* Center: change counters */}
      {totalChanges > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          {imgReplaced > 0 && (
            <Chip color="emerald" label={`${imgReplaced} image${imgReplaced > 1 ? 's' : ''} replaced`} />
          )}
          {imgDeleted > 0 && (
            <Chip color="red" label={`${imgDeleted} deleted`} />
          )}
          {textsEdited > 0 && (
            <Chip color="blue" label={`${textsEdited} text${textsEdited > 1 ? 's' : ''} edited`} />
          )}
        </div>
      )}

      {/* Right: exit button */}
      <div className="flex items-center gap-2 ml-auto">
        {totalChanges === 0 && (
          <span className="text-[10px]" style={{ color: 'var(--warning-fg)' }}>No changes yet</span>
        )}
        <button
          onClick={() => setEditMode(false)}
          className="px-3 py-1 text-[11px] font-bold rounded-lg transition-colors"
          style={{ background: 'var(--warning)', color: 'var(--text-on-accent)' }}
        >
          Exit Edit Mode
        </button>
      </div>
    </div>
  )
}

function Chip({ color, label }: { color: string; label: string }) {
  const styles: Record<string, React.CSSProperties> = {
    emerald: { background: 'var(--success-surface)', color: 'var(--success)', borderColor: 'var(--success)' },
    red:     { background: 'var(--danger-surface)',  color: 'var(--danger)',  borderColor: 'var(--danger)' },
    blue:    { background: 'var(--info-surface)',    color: 'var(--info)',    borderColor: 'var(--info)' },
  }
  return (
    <span
      className="border rounded-full px-2 py-0.5 font-semibold text-[10px]"
      style={styles[color] ?? undefined}
    >
      {label}
    </span>
  )
}
