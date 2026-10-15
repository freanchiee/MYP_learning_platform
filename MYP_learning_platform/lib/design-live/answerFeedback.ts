// The "answer coach": live, private feedback on a student's written answer while they type.
//
// Three signals are combined into a level 0-8 (shown to the student as a band: 1-2, 3-4, 5-6, 7-8):
//   1. KEYWORDS AND KEY PHRASES from the field's `coach.groups`, matched with typo tolerance
//      (a word one or two letters off still counts, and simple endings like -s / -ed / -ing are ignored).
//   2. MEANING: how close the answer is to a model answer. In the browser this comes from a small
//      on-device sentence-similarity model (lib/design-live/semantic.ts); here, and on the server, a
//      plain word-overlap measure stands in so the level can always be worked out.
//   3. LENGTH: a very short answer cannot reach the top bands.
//
// Anti-gaming, on purpose:
//   - a keyword counts once, however often it is repeated;
//   - a "bag of keywords" (almost no ordinary words between them) is treated as stuffing and earns nothing;
//   - the student is only ever shown what they HIT, never a list of what is missing, so the word list
//     cannot be read off the screen.
//
// This file is pure (no DOM, no network) so the browser and the server share it. It is a coaching signal,
// never the grade: the teacher's 1-8 score stays a human judgement.

import type { AnswerLevel, FieldCoach, WorksheetField } from '@/data/design/live/types'
import { fuzzyMatchScore } from './fuzzyMatch'

export interface CoachHit {
  level: AnswerLevel
  /** The words the student actually wrote (not the author's list), so chips never reveal the list. */
  text: string
  from: number
  to: number
}

export interface CoachResult {
  /** 0-8. */
  score: number
  words: number
  hits: CoachHit[]
  stuffed: boolean
  /** 1-2, 3-4, 5-6, 7-8, or 0 when the answer has not started. */
  band: 0 | 1 | 2 | 3 | 4
  bandLabel: string
}

/** Points for a coached answer that reaches level 5 or more, and what unlocking the scaffold costs. */
export const COACH_POINTS = 5
export const SCAFFOLD_COST = 5
export const HINT_UNLOCK_SCORE = 5

const STOP = new Set(
  'a an the and or but if then so of to in on at by for with from as is are was were be been being it its this that these those he she they them his her their we you i my your our me us not no do does did has have had can could will would should may might must than there here which who whom what when where why how also too very just only into out up down over about after before because while while'.split(' ')
)

interface Tok { raw: string; norm: string; stem: string; from: number; to: number }

function tokenize(text: string): Tok[] {
  const out: Tok[] = []
  const re = /[A-Za-z0-9À-ɏ]+(?:['’][A-Za-z]+)?/g
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    const raw = m[0]
    const norm = raw.toLowerCase().replace(/['’]/g, '')
    out.push({ raw, norm, stem: stem(norm), from: m.index, to: m.index + raw.length })
  }
  return out
}

function stem(w: string): string {
  if (w.length <= 4) return w
  return w.replace(/(ing|ed|es|s)$/, '')
}

/** Damerau-Levenshtein (optimal string alignment): a swapped pair of letters counts as one mistake. */
function editDistance(a: string, b: string): number {
  if (a === b) return 0
  const al = a.length
  const bl = b.length
  if (Math.abs(al - bl) > 2) return 3
  const d: number[][] = Array.from({ length: al + 1 }, (_, i) => [i, ...Array(bl).fill(0)])
  for (let j = 0; j <= bl; j++) d[0][j] = j
  for (let i = 1; i <= al; i++) {
    for (let j = 1; j <= bl; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1)
    }
  }
  return d[al][bl]
}

/** Two words are "the same" if equal, share a stem, or differ by a typo (1 letter for 5+, 2 for 9+). */
function sameWord(a: Tok, b: Tok): boolean {
  if (a.norm === b.norm || a.stem === b.stem) return true
  const len = Math.min(a.norm.length, b.norm.length)
  if (len < 5) return false
  const limit = len >= 9 ? 2 : 1
  return editDistance(a.norm, b.norm) <= limit || editDistance(a.stem, b.stem) <= limit
}

/** Reasoning words every written answer can show, whatever the subject. The field's own keywords join the middle group. */
const REASONING = {
  developed: ['because', 'so that', 'which means', 'for example', 'for instance', 'this shows'],
  justified: ['as a result', 'this means', 'therefore', 'which leads to', 'however', 'on the other hand', 'matters because', 'at stake'],
}

/**
 * The coach a field uses: its own `coach` if the author wrote one; otherwise, for a written answer that already has
 * model answers or keywords, a sensible default built from them, so every existing activity is coached without edits.
 * Defaults carry no scaffold or hints (those need an author) and never earn points (see coachEarns).
 */
export function resolveCoach(field: Pick<WorksheetField, 'type' | 'coach' | 'exemplars' | 'celebrateKeywords'>): FieldCoach | undefined {
  if (field.coach) return field.coach
  if (field.type !== 'textarea') return undefined
  if (!field.exemplars?.length && !field.celebrateKeywords?.length) return undefined
  return {
    groups: [
      { level: 'developed', words: Array.from(new Set([...(field.celebrateKeywords ?? []), ...REASONING.developed])) },
      { level: 'justified', words: REASONING.justified },
    ],
  }
}

/** Find the first place each word or phrase appears (typos allowed). Each distinct phrase counts once. */
export function findHits(text: string, coach: FieldCoach | undefined): CoachHit[] {
  if (!coach || !text.trim()) return []
  const toks = tokenize(text)
  const hits: CoachHit[] = []
  const used = new Set<number>()
  // Longer phrases first, so "matters because" is not swallowed by "because".
  const entries = coach.groups
    .flatMap((g) => g.words.map((w) => ({ level: g.level, phrase: tokenize(w) })))
    .filter((e) => e.phrase.length)
    .sort((x, y) => y.phrase.length - x.phrase.length)
  for (const e of entries) {
    const n = e.phrase.length
    for (let i = 0; i + n <= toks.length; i++) {
      if (used.has(i)) continue
      let ok = true
      for (let k = 0; k < n; k++) if (used.has(i + k) || !sameWord(toks[i + k], e.phrase[k])) { ok = false; break }
      if (!ok) continue
      for (let k = 0; k < n; k++) used.add(i + k)
      hits.push({ level: e.level, text: text.slice(toks[i].from, toks[i + n - 1].to), from: toks[i].from, to: toks[i + n - 1].to })
      break // one hit per phrase: repeating it earns nothing more
    }
  }
  return hits.sort((a, b) => a.from - b.from)
}

/** A string of keywords with almost no ordinary words between them is not an answer. */
export function looksStuffed(text: string, hits: CoachHit[]): boolean {
  const toks = tokenize(text)
  if (toks.length < 8) return false
  const stop = toks.filter((t) => STOP.has(t.norm)).length
  if (stop / toks.length < 0.15) return true
  const hitWords = hits.reduce((n, h) => n + tokenize(text.slice(h.from, h.to)).length, 0)
  return hitWords / toks.length > 0.55
}

const BAND_LABEL = ['Not started', 'Level 1–2 · beginning', 'Level 3–4 · developing', 'Level 5–6 · secure', 'Level 7–8 · detailed'] as const

export function bandOf(score: number): CoachResult['band'] {
  if (score < 1) return 0
  if (score < 3) return 1
  if (score < 5) return 2
  if (score < 7) return 3
  return 4
}

/**
 * @param semantic 0-1 meaning similarity to a model answer when the on-device model has produced one; otherwise
 *   a word-overlap stand-in against the field's exemplars is used.
 */
export function estimateLevel(text: string, field: Pick<WorksheetField, 'type' | 'coach' | 'exemplars' | 'celebrateKeywords'>, semantic?: number | null): CoachResult {
  const coach = resolveCoach(field)
  const toks = tokenize(text)
  const words = toks.length
  const hits = findHits(text, coach)
  const stuffed = looksStuffed(text, hits)

  const len = words < 6 ? 0 : words < 15 ? 0.5 : words < 25 ? 1 : 2

  const distinct = (lvl: AnswerLevel) => hits.filter((h) => h.level === lvl).length
  const kw = stuffed ? 0 : Math.min(3, Math.min(1, distinct('basic') * 0.5) + Math.min(2, distinct('developed')) + Math.min(3, distinct('justified') * 1.5))

  let sim = semantic
  if (sim == null || Number.isNaN(sim)) sim = fuzzyMatchScore(text, field.exemplars ?? [], [])
  const sem = words < 6 ? 0 : Math.max(0, Math.min(1, (sim - 0.3) / 0.5)) * 3

  let score = len + kw + sem
  if (stuffed) score = Math.min(score, 2)
  score = Math.round(Math.min(8, score) * 2) / 2
  const band = bandOf(score)
  return { score, words, hits: stuffed ? [] : hits, stuffed, band, bandLabel: BAND_LABEL[band] }
}

/** Server-side points: +COACH_POINTS for each coached answer that reaches level 5 on the rule-based estimate alone. */
export function coachEarns(text: unknown, field: WorksheetField): boolean {
  if (!field.coach || typeof text !== 'string') return false // only authored coaches earn points, never the automatic default
  return estimateLevel(text, field).score >= HINT_UNLOCK_SCORE
}

/** Stop pasted-in text: true when `next` grew by more than a person plausibly types between two events. */
export function isSuspiciousInsert(prev: string, next: string): boolean {
  return next.length - prev.length > 40
}
