// Flattens one student's saved answers (live_players.data) into plain,
// serializable rows — used by the "Download work" PDF and the answer peek.
// Pure data in, pure data out: safe to call in a Server Component and pass
// the result down to a client component as props.

import type { LiveActivityDefinition, WorksheetField, WorksheetStage } from '@/data/design/live/types'

export interface WorkRow { label: string; text: string; images?: { url: string; name: string }[] }
export interface WorkBlock { stage: string; rows: WorkRow[] }

export function fieldAnswerText(field: WorksheetField, value: unknown): string {
  if (value == null || value === '') return ''
  if (field.type === 'table' && Array.isArray(value)) {
    return (value as Record<string, string>[])
      .map((row) => (field.columns || []).map((c) => row[c.key]).filter(Boolean).join(' — '))
      .filter(Boolean)
      .join(' · ')
  }
  if (field.type === 'checklist' && Array.isArray(value)) {
    return (value as { label: string; have: boolean }[])
      .filter((it) => it.label?.trim())
      .map((it) => `${it.have ? '✅' : '◻️'} ${it.label}`)
      .join(' · ')
  }
  if (field.type === 'text' || field.type === 'textarea' || field.type === 'select') return String(value)
  return '' // interactive types (personaChat, cards, etc.) have no plain-text form
}

/** Every worksheet stage's written answers, in stage order. Empty stages are dropped. */
export function collectWork(activity: LiveActivityDefinition, data: Record<string, any> | null | undefined): WorkBlock[] {
  const stages = activity.stages.filter((s): s is WorksheetStage => s.type === 'worksheet')
  return stages
    .map((stage) => {
      const rows: WorkRow[] = []
      for (const section of stage.sections) {
        const sectionData = data?.[stage.key]?.[section.key] || {}
        for (const field of section.fields) {
          if (field.type === 'image') {
            const images = sectionData[field.key] as { url: string; name: string }[] | undefined
            if (images?.length) rows.push({ label: field.label, text: '', images })
            continue
          }
          const text = fieldAnswerText(field, sectionData[field.key])
          if (text) rows.push({ label: field.label, text })
        }
      }
      return { stage: `${stage.label}`, rows }
    })
    .filter((b) => b.rows.length)
}
