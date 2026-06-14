'use client'
import { useEffect } from 'react'
import { useExamStore } from '@/store/examStore'
import { formatTime } from '@/lib/utils'
import EditModeBanner from '@/components/exam/EditModeBanner'

type ToolId = 'calculator' | 'formulae' | 'booklet' | 'converter'

const TOOLS: { id: ToolId; label: string }[] = [
  { id: 'calculator', label: '🧮 Calculator' },
  { id: 'formulae', label: '∑ Formulae' },
  { id: 'booklet', label: '📋 Data Booklet' },
  { id: 'converter', label: '⇄ Conversions' },
]

export default function ExamToolbar() {
  const activeTool = useExamStore((s) => s.activeTool)
  const setActiveTool = useExamStore((s) => s.setActiveTool)
  const timerSeconds = useExamStore((s) => s.timerSeconds)
  const timerState = useExamStore((s) => s.timerState)
  const strikes = useExamStore((s) => s.strikes)
  const tick = useExamStore((s) => s.tick)
  const phase = useExamStore((s) => s.phase)
  const editMode = useExamStore((s) => s.editMode)
  const setEditMode = useExamStore((s) => s.setEditMode)
  const paperId = useExamStore((s) => s.paperId)
  const practiceMode = useExamStore((s) => s.practiceMode)

  // Parse paperId → "Physics — May 2024"
  const paperLabel = (() => {
    if (!paperId) return 'MYP Sciences'
    const parts = paperId.split('-') // ['physics','may','2024'] or ['physics','nov','2023']
    const subject  = parts[0] ? parts[0].charAt(0).toUpperCase() + parts[0].slice(1) : ''
    const session  = parts[1] ? parts[1].charAt(0).toUpperCase() + parts[1].slice(1) : ''
    const year     = parts[2] ?? ''
    if (parts[1] === 'practice') return `${subject} — Practice`
    return `${subject} — ${session} ${year}`
  })()

  // Subject-group brand: Individuals & Societies (humanities/geography/history) vs Sciences.
  const brand = ['geography', 'history', 'humanities'].includes((paperId ?? '').split('-')[0])
    ? 'MYP Individuals & Societies'
    : 'MYP Sciences'

  // Drive the countdown timer
  useEffect(() => {
    if (phase !== 'active') return
    const id = setInterval(() => tick(), 1000)
    return () => clearInterval(id)
  }, [phase, tick])

  const timerColor =
    timerState === 'critical'
      ? 'var(--danger)'
      : timerState === 'warning'
      ? 'var(--warning)'
      : 'var(--bar-fg)'

  const timerClass =
    timerState === 'critical'
      ? 'animate-pulse'
      : timerState === 'warning'
      ? 'animate-pulse'
      : ''

  return (
    <>
    {editMode && <EditModeBanner />}
    <div
      className="flex items-center justify-between px-4 flex-shrink-0 select-none chrome-bar"
      style={{
        height: 48,
        background: editMode ? 'var(--warning-fg)' : 'var(--bar-bg)',
        color: editMode ? '#fff' : 'var(--bar-fg)',
        borderBottom: '1px solid var(--nav-border)',
      }}
    >
      {/* Left: Branding */}
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0"
          style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
        >
          MYP
        </div>
        <span className="font-semibold text-sm" style={{ color: 'inherit' }}>{brand}</span>
        <span className="opacity-30 text-lg">|</span>
        <span className="opacity-70 text-xs">{paperLabel}</span>
      </div>

      {/* Center: Tool tabs */}
      <div className="flex items-center gap-1">
        {TOOLS.map((tool) => {
          const isActive = activeTool === tool.id
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className="px-3 py-1 rounded text-xs font-medium transition-colors"
              style={{
                background: isActive ? 'var(--accent)' : 'transparent',
                color: isActive ? 'var(--text-on-accent)' : 'inherit',
                opacity: isActive ? 1 : 0.78,
                border: isActive ? 'none' : '1px solid var(--nav-border)',
              }}
            >
              {tool.label}
            </button>
          )
        })}
      </div>

      {/* Right: Edit toggle + Focus indicator + Timer */}
      <div className="flex items-center gap-4">
        {/* Edit / Published mode toggle */}
        <button
          onClick={() => setEditMode(!editMode)}
          title={editMode ? 'Exit edit mode → Published view' : 'Enter edit mode (content editors only)'}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold
                     transition-all border select-none"
          style={{
            background: editMode ? 'var(--warning)' : 'transparent',
            color:      editMode ? 'var(--warning-fg)' : 'inherit',
            opacity:    editMode ? 1 : 0.7,
            border:     editMode ? '1px solid var(--warning)' : '1px solid var(--nav-border)',
          }}
        >
          {editMode ? '✏ EDIT' : '✏ Edit'}
        </button>

        {/* Strike dots — hidden in practice and edit mode */}
        {!editMode && !practiceMode && (
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  background: i < strikes ? 'var(--danger)' : 'transparent',
                  border: `1px solid ${i < strikes ? 'var(--danger)' : 'color-mix(in srgb, var(--bar-fg) 40%, transparent)'}`,
                }}
                title={i < strikes ? 'Focus violation' : 'Focus OK'}
              />
            ))}
          </div>
        )}

        {/* Practice badge — shown instead of timer in practice mode */}
        {!editMode && practiceMode && (
          <span
            className="nav-fill text-[10px] font-black tracking-[0.2em] px-2.5 py-1 rounded-full"
            style={{ color: 'inherit' }}
          >
            PRACTICE
          </span>
        )}

        {/* Timer — hidden in edit mode and practice mode */}
        {!editMode && !practiceMode && (
          <div
            className={`font-mono text-base font-bold tracking-widest ${timerClass}`}
            style={{ color: timerColor, fontFamily: 'var(--font-mono, monospace)' }}
            title="Time remaining"
          >
            {formatTime(timerSeconds)}
          </div>
        )}
      </div>
    </div>
    </>
  )
}
