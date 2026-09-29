// Resolving the model answer to show for ONE student and ONE field.
import type { ExemplarsByChoice, WorksheetField } from '@/data/design/live/types'

export interface ResolvedExemplars {
  texts: string[]
  /** The student's earlier choice (e.g. 'Factory Worker') when the texts are written for it. */
  choice?: string
  /** Which axis produced `choice` (its `noun`, e.g. 'community', 'persona') — undefined when there was no choice at all. */
  noun?: string
  /** true = written for this student's choice; false = the general exemplars on the field. */
  specific: boolean
}

export type PlayerData = unknown

/** An activity may vary model answers along one axis (a single config) or
 *  several independent ones (an array) — e.g. by the direction a student
 *  picked AND, separately, which persona they interviewed. Everywhere below
 *  normalises to a list and checks each axis in order. */
export type ExemplarsConfig = ExemplarsByChoice | ExemplarsByChoice[] | undefined
const toList = (cfg: ExemplarsConfig): ExemplarsByChoice[] => (!cfg ? [] : Array.isArray(cfg) ? cfg : [cfg])

const dig = (o: unknown, ...keys: string[]) => keys.reduce<unknown>((a, k) => (a && typeof a === 'object' ? (a as Record<string, unknown>)[k] : undefined), o)

export const fieldRef = (stageKey: string, sectionKey: string, fieldKey: string) => `${stageKey}.${sectionKey}.${fieldKey}`
export const revealKey = (stageKey: string, sectionKey: string, fieldKey: string) => `reveal:${stageKey}:${sectionKey}:${fieldKey}`

function resolveChoice(cfg: ExemplarsByChoice, data: PlayerData): string | undefined {
  const raw = dig(data, cfg.from.stage, cfg.from.section, cfg.from.field)
  if (cfg.extractKey) return cfg.extractKey(raw)
  return typeof raw === 'string' && raw.trim() ? raw.trim() : undefined
}

/** What the student picked, for the FIRST axis that has resolved to something —
 *  kept for the single-axis activities that already called this directly. */
export function chosenValue(cfg: ExemplarsConfig, data: PlayerData): string | undefined {
  for (const c of toList(cfg)) {
    const v = resolveChoice(c, data)
    if (v) return v
  }
  return undefined
}

/** Every axis that has resolved to a choice, in order — e.g. [{noun:'direction',
 *  choice:'Physical space'}, {noun:'persona', choice:'Nadia'}] — for a header
 *  that shows all of them, not just the first. */
export function chosenValues(cfg: ExemplarsConfig, data: PlayerData): { noun: string; choice: string }[] {
  const out: { noun: string; choice: string }[] = []
  for (const c of toList(cfg)) {
    const v = resolveChoice(c, data)
    if (v) out.push({ noun: c.noun, choice: v })
  }
  return out
}

export function exemplarsFor(cfg: ExemplarsConfig, stageKey: string, sectionKey: string, field: WorksheetField, data: PlayerData): ResolvedExemplars {
  let fallback: { choice: string; noun: string } | undefined
  for (const c of toList(cfg)) {
    const choice = resolveChoice(c, data)
    if (!choice) continue
    if (!fallback) fallback = { choice, noun: c.noun }
    const specific = c.byField[fieldRef(stageKey, sectionKey, field.key)]?.[choice]
    if (specific?.length) return { texts: specific, choice, noun: c.noun, specific: true }
  }
  return { texts: field.exemplars ?? [], choice: fallback?.choice, noun: fallback?.noun, specific: false }
}
