// Lightweight, dependency-free fuzzy matching used to turn a student's
// free-text worksheet answer into a suggested auto-score against a
// activity author's `exemplars` (a variety of model answers) and
// `celebrateKeywords` — see WorksheetReview.tsx for where this feeds a
// teacher's review modal, and data/design/live/types.ts for the schema.
//
// Word-set overlap (Dice coefficient) rather than edit-distance: exemplars
// and student answers are short sentences, not single words, so "did they
// cover similar ground" matters more than "how many characters differ."

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

function diceCoefficient(a: string[], b: string[]): number {
  if (!a.length || !b.length) return 0
  const setB = new Set(b)
  const seen = new Set<string>()
  let overlap = 0
  for (const word of a) {
    if (setB.has(word) && !seen.has(word)) {
      overlap++
      seen.add(word)
    }
  }
  return (2 * overlap) / (a.length + b.length)
}

/** 0–1 similarity: the best word-overlap match across every exemplar, plus
 *  a small bonus per distinct celebrateKeyword actually present in the
 *  text (capped) — a strong answer that hits the target vocabulary but
 *  isn't worded quite like any exemplar still scores well. */
export function fuzzyMatchScore(text: string, exemplars: string[] = [], keywords: string[] = []): number {
  const tokens = tokenize(text)
  if (!tokens.length) return 0
  const best = exemplars.reduce((max, ex) => Math.max(max, diceCoefficient(tokens, tokenize(ex))), 0)
  const lower = text.toLowerCase()
  const kwHits = keywords.filter((k) => lower.includes(k.toLowerCase())).length
  const kwBonus = keywords.length ? Math.min(0.3, kwHits * 0.1) : 0
  return Math.min(1, best + kwBonus)
}

/** Same match, expressed as a rounded 0–maxPoints suggestion. */
export function fuzzyMatchPoints(text: string, exemplars: string[] | undefined, keywords: string[] | undefined, maxPoints: number): number {
  if (!text?.trim()) return 0
  return Math.round(fuzzyMatchScore(text, exemplars, keywords) * maxPoints)
}
