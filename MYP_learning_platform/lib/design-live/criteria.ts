// MYP Design criteria, so any activity can label its strands consistently.
export const CRITERIA: Record<string, { name: string; color: string }> = {
  A: { name: 'Inquiring and analysing', color: '#2F6FED' },
  B: { name: 'Developing ideas', color: '#8A4FD6' },
  C: { name: 'Creating the solution', color: '#E07A1F' },
  D: { name: 'Evaluating', color: '#1FA98A' },
}

export const CRITERION_LETTERS = ['A', 'B', 'C', 'D'] as const

/** 'A.ii' -> { letter: 'A', name: 'Inquiring and analysing', color }. Non-criterion tags ('Reflection') get an empty letter. */
export function criterionOf(strand: string) {
  const letter = strand.trim().charAt(0).toUpperCase()
  const isCriterion = /^[A-D]\./.test(strand.trim()) && !!CRITERIA[letter]
  if (!isCriterion) return { letter: '', name: strand, color: '#6B7280' }
  return { letter, ...CRITERIA[letter] }
}

/**
 * Student-facing wording of each strand (Design, Years 4–5). Used only as a fallback when a
 * section does not set its own `strandLabel`, so an activity can still override it.
 */
export const STRAND_LABELS: Record<string, string> = {
  'A.i': 'Explain and justify the need for a solution, for a specified client or audience',
  'A.ii': 'Identify and prioritise the primary and secondary research needed',
  'A.iii': 'Analyse a variety of existing products that inspire a solution',
  'A.iv': 'Develop a detailed design brief that summarises the research',
  'B.i': 'Develop a design specification with clear success criteria',
  'B.ii': 'Develop a range of feasible design ideas that others can interpret',
  'B.iii': 'Present the chosen design and justify its selection',
  'B.iv': 'Develop accurate planning drawings and outline what is needed to make it',
  'C.i': 'Construct a logical plan that others could follow',
  'C.ii': 'Demonstrate excellent technical skills when making the solution',
  'C.iii': 'Follow the plan to make a solution that works as intended',
  'C.iv': 'Fully justify changes made to the design and plan',
  'D.i': 'Design testing methods that generate data to measure success',
  'D.ii': 'Critically evaluate the solution against the specification',
  'D.iii': 'Explain how the solution could be improved',
  'D.iv': 'Explain the impact of the solution on the client or audience',
}
