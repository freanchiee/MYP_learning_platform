// Resolving the model answer to show for ONE student and ONE field.
import type { ExemplarsByChoice, WorksheetField } from '@/data/design/live/types'

export interface ResolvedExemplars {
  texts: string[]
  /** The student's earlier choice (e.g. 'Factory Worker') when the texts are written for it. */
  choice?: string
  /** true = written for this student's choice; false = the general exemplars on the field. */
  specific: boolean
}

export type PlayerData = unknown

const dig = (o: unknown, ...keys: string[]) => keys.reduce<unknown>((a, k) => (a && typeof a === 'object' ? (a as Record<string, unknown>)[k] : undefined), o)

export const fieldRef = (stageKey: string, sectionKey: string, fieldKey: string) => `${stageKey}.${sectionKey}.${fieldKey}`
export const revealKey = (stageKey: string, sectionKey: string, fieldKey: string) => `reveal:${stageKey}:${sectionKey}:${fieldKey}`

/** What the student picked in the activity's choice field, if anything. */
export function chosenValue(cfg: ExemplarsByChoice | undefined, data: PlayerData): string | undefined {
  if (!cfg) return undefined
  const v = dig(data, cfg.from.stage, cfg.from.section, cfg.from.field)
  return typeof v === 'string' && v.trim() ? v.trim() : undefined
}

export function exemplarsFor(cfg: ExemplarsByChoice | undefined, stageKey: string, sectionKey: string, field: WorksheetField, data: PlayerData): ResolvedExemplars {
  const choice = chosenValue(cfg, data)
  const specific = choice ? cfg?.byField[fieldRef(stageKey, sectionKey, field.key)]?.[choice] : undefined
  if (specific?.length) return { texts: specific, choice, specific: true }
  return { texts: field.exemplars ?? [], choice, specific: false }
}
