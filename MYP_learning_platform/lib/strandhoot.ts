// Strandhoot = the public name of the live, strand-assessed classroom activities (the engine behind
// /design/live). This file turns a registered activity into plain, serialisable facts for the PUBLIC pages
// (/strandhoot, /strandhoot/[id]). It reads only titles, strands and counts, never answers, so nothing
// private is exposed, and it returns no functions, so it is safe to use in Server Components.

import { LIVE_ACTIVITIES } from '@/data/design/live/registry'
import type { LiveActivityDefinition } from '@/data/design/live/types'

export interface StrandhootSummary {
  id: string
  year: string
  subject: string
  title: string
  subtitle: string
  icon: string
  accent: string
  strands: string[]
  stages: { label: string; kind: string; minutes?: number }[]
  checkpoints: number
  minutes: number
  selfPaced: boolean
  hasInterview: boolean
}

const KIND: Record<string, string> = { mcq: 'Checkpoint quiz', worksheet: 'Worksheet', openIdeas: 'Quick-fire ideas', grading: 'Teacher grading', boardGame: 'Board game', learn: 'Mini-lesson' }

export function summarize(a: LiveActivityDefinition): StrandhootSummary {
  const strands = new Set<string>()
  let hasInterview = false
  for (const s of a.stages) {
    if (s.type === 'worksheet') {
      for (const sec of s.sections) {
        if (sec.criterion) strands.add(sec.criterion)
        if (sec.fields.some((f) => f.type === 'personaChat')) hasInterview = true
      }
    }
    if (s.type === 'grading') s.strands.forEach((x) => strands.add(x.key))
  }
  const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi']
  const order = (k: string) => k.charCodeAt(0) * 10 + Math.max(0, ROMAN.indexOf(k.split('.')[1] ?? 'i'))
  return {
    id: a.id,
    year: a.year,
    subject: a.subject ?? 'Design',
    title: a.title,
    subtitle: a.subtitle,
    icon: a.icon,
    accent: a.theme.accent,
    strands: Array.from(strands).sort((x, y) => order(x) - order(y)),
    stages: a.stages.filter((s) => s.type !== 'grading').map((s) => ({ label: s.label, kind: KIND[s.type] ?? s.type, minutes: (s as { minutes?: number }).minutes })),
    checkpoints: a.stages.filter((s) => s.type === 'mcq').length,
    minutes: a.stages.reduce((n, s) => n + ((s as { minutes?: number }).minutes ?? 0), 0),
    selfPaced: !!a.selfPaced,
    hasInterview,
  }
}

/** Activities worth a public page: real MYP activities, not the on-the-fly DP Physics lessons. */
export function publicActivities(): StrandhootSummary[] {
  return LIVE_ACTIVITIES.filter((a) => a.year !== 'DP').map(summarize)
}

export function publicActivity(id: string): StrandhootSummary | undefined {
  return publicActivities().find((a) => a.id === id)
}

export const STRANDHOOT_FAQ: { q: string; a: string }[] = [
  {
    q: 'What is Strandhoot?',
    a: 'Strandhoot is a live, game-style classroom activity for the IB MYP where progress is tracked strand by strand (A.i, B.ii, D.iii and so on) instead of by a single score. A teacher hosts it, students join from any device with a code or work through it at their own pace, and the teacher sees every student’s evidence against each assessment strand.',
  },
  {
    q: 'How is Strandhoot different from Kahoot?',
    a: 'Kahoot is built mainly for quick recall quizzes. Strandhoot keeps quick checkpoint quizzes, but also has worksheets, source analysis, interviews with characters, live typing previews and a teacher grading screen, so it can assess MYP criteria strands rather than only whether an answer was right.',
  },
  {
    q: 'Which MYP subjects and years does Strandhoot cover?',
    a: 'Exemplar activities are available for MYP Design (Years 2 to 5), MYP4 Geography and MYP4 History (Individuals & Societies), with more subjects being added.',
  },
  {
    q: 'Do students need an account?',
    a: 'Students sign in so that their work is saved and the teacher can see who did what. The activity pages on this site are public so teachers and parents can preview what each activity covers before joining.',
  },
  {
    q: 'Is Strandhoot free?',
    a: 'The exemplar activities can be tried without charge. Leave your email on the sign-up form to hear about the next free activities and any plans for classes.',
  },
  {
    q: 'Can a teacher grade with it?',
    a: 'Yes. Each activity ends with a criteria review where the teacher scores every strand from 1 to 8 and writes feedback. Checkpoint scores and a suggested score for written answers are only a first signal; the teacher’s judgement decides.',
  },
]
