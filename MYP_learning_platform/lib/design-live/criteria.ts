// MYP Design criteria, so any activity can label its strands consistently.
export const CRITERIA: Record<string, { name: string; color: string }> = {
  A: { name: 'Inquiring and analysing', color: '#2F6FED' },
  B: { name: 'Developing ideas', color: '#8A4FD6' },
  C: { name: 'Creating the solution', color: '#E07A1F' },
  D: { name: 'Evaluating', color: '#1FA98A' },
}

/** 'A.ii' -> { letter: 'A', name: 'Inquiring and analysing', color } (falls back safely for unknown keys). */
export function criterionOf(strand: string) {
  const letter = strand.trim().charAt(0).toUpperCase()
  return { letter, ...(CRITERIA[letter] ?? { name: 'Criterion', color: '#666' }) }
}
