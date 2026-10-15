'use client'

// A student's work as a design-cycle PDF, straight from the live host dashboard (the same PDF as Class → Live
// sessions → History). The dashboard's row components are many and deeply nested, so the activity and grades
// they all need come from context instead of being passed down through every one of them. The PDF is only
// built when the button is clicked, never while the live dashboard re-renders.

import { createContext, useContext } from 'react'
import type { LiveActivityDefinition } from '@/data/design/live/types'
import type { LiveGradeRow, LivePlayerRow } from '@/lib/design-live/types'
import { buildWorkDoc } from '@/lib/design-live/studentWork'
import DownloadWorkButton from '@/components/teacher/DownloadWorkButton'

interface HostWork { activity: LiveActivityDefinition; className: string; grades: LiveGradeRow[] }

const HostWorkContext = createContext<HostWork | null>(null)
export const HostWorkProvider = HostWorkContext.Provider

export function WorkPdfButton({ player }: { player: LivePlayerRow }) {
  const ctx = useContext(HostWorkContext)
  if (!ctx) return null
  return (
    <DownloadWorkButton
      icon
      studentName={player.name}
      activityTitle={ctx.activity.title}
      getDoc={() => {
        const g = ctx.grades.find((x) => x.player_id === player.id)
        return buildWorkDoc(ctx.activity, player.data, {
          student: player.name,
          className: ctx.className,
          date: new Date().toLocaleDateString(),
          grade: g ? { scores: g.scores, feedback: g.feedback ?? '', graded: g.graded } : null,
          sectionFeedback: g?.section_feedback,
        })
      }}
    />
  )
}
