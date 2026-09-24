// Generic, activity-agnostic completeness/scoring helpers. These are
// formative signals (progress dashboard, quick auto-score) — never a
// substitute for the teacher's own 1-8 criterion grade, which is
// always a human judgement entered via the GradingStage.

import type { WorksheetSection, McqQuestion } from '@/data/design/live/types'

export function worksheetSectionPct(section: WorksheetSection, values: Record<string, any>): number {
  const fields = section.fields
  if (!fields.length) return 0
  let filled = 0
  fields.forEach((f) => {
    const v = values?.[f.key]
    if (f.type === 'table') {
      const rows: any[] = Array.isArray(v) ? v : []
      const cols = f.columns || []
      if (!rows.length || !cols.length) return
      const totalCells = rows.length * cols.length
      let filledCells = 0
      rows.forEach((row) => cols.forEach((c) => { if (row?.[c.key] && String(row[c.key]).trim().length > 1) filledCells++ }))
      filled += filledCells / totalCells
    } else if (f.type === 'personalityPrompt') {
      if (v?.personalityId) filled += 1
    } else if (f.type === 'opportunityCards') {
      if (v?.opportunityId) filled += 1
    } else if (f.type === 'makeCards') {
      // A wild card only counts once the student has said what they'll make.
      if (v?.makeId && (!String(v.makeId).startsWith('wild-') || String(v?.custom || '').trim().length > 3)) filled += 1
    } else if (f.type === 'personaChat') {
      // "Complete" means the student actually asked something, not just picked a character.
      const messages: any[] = v?.messages || []
      if (messages.some((m) => m.from === 'student')) filled += 1
    } else if (typeof v === 'string' && v.trim().length > (f.type === 'textarea' ? 10 : 1)) {
      filled += 1
    } else if (v) {
      filled += 1
    }
  })
  return Math.min(100, Math.round((filled / fields.length) * 100))
}

export function mcqSectionScore(
  questions: McqQuestion[],
  answers: Record<number, { choiceIdx: number; correct: boolean }>,
  pointsPerCorrect = 10
): { answered: number; correctCount: number; points: number } {
  let correctCount = 0
  let answered = 0
  questions.forEach((_, i) => {
    const a = answers[i]
    if (a) {
      answered++
      if (a.correct) correctCount++
    }
  })
  return { answered, correctCount, points: correctCount * pointsPerCorrect }
}
