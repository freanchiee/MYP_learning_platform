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

  // Drive the countdown timer
  useEffect(() => {
    if (phase !== 'active') return
    const id = setInterval(() => tick(), 1000)
    return () => clearInterval(id)
  }, [phase, tick])

  const timerColor =
    timerState === 'critical'
      ? '#ff4444'
      : timerState === 'warning'
      ? '#f5a623'
      : '#ffffff'

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
      className="flex items-center justify-between px-4 flex-shrink-0 select-none"
      style={{ height: 48, background: editMode ? '#78350f' : '#1c3d5a' }}
    >
      {/* Left: Branding */}
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
          style={{ background: '#0079a8' }}
        >
          MYP
        </div>
        <span className="text-white font-semibold text-sm">MYP Sciences</span>
        <span className="text-white opacity-30 text-lg">|</span>
        <span className="text-white opacity-70 text-xs">Physics — Nov 2023</span>
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
                background: isActive ? '#ffffff' : 'transparent',
                color: isActive ? '#003b5c' : 'rgba(255,255,255,0.75)',
                border: isActive ? 'none' : '1px solid rgba(255,255,255,0.15)',
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
            background: editMode ? '#fbbf24' : 'transparent',
            color:      editMode ? '#78350f' : 'rgba(255,255,255,0.65)',
            border:     editMode ? '1px solid #f59e0b' : '1px solid rgba(255,255,255,0.18)',
          }}
        >
          {editMode ? '✏ EDIT' : '✏ Edit'}
        </button>

        {/* Strike dots */}
        {!editMode && (
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full border border-white"
                style={{
                  background: i < strikes ? '#c0392b' : 'transparent',
                  borderColor: i < strikes ? '#c0392b' : 'rgba(255,255,255,0.4)',
                }}
                title={i < strikes ? 'Focus violation' : 'Focus OK'}
              />
            ))}
          </div>
        )}

        {/* Timer — hidden in edit mode */}
        {!editMode && (
          <div
            className={`font-mono text-base font-bold tracking-widest ${timerClass}`}
            style={{ color: timerColor, fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
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
