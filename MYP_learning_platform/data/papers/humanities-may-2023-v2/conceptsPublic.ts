/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — May 2023 · VARIANT 2.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_MAY2023_V2: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['international institutions', 'cooperation', 'stability', 'integration', 'peace'], keywords: ['EU', 'European Union', 'single market', 'trade', 'cooperation', 'stability', 'integration'] },
  q2_: { keyConcepts: ['global challenges', 'cooperation', 'resolution', 'sustainability'], keywords: ['freshwater', 'water shortage', 'shared rivers', 'agreement', 'cooperation', 'resolve', 'conservation'] },
  q3_: { keyConcepts: ['investigation', 'action plan', 'strengths and limitations', 'appraisal', 'research question', 'primary/secondary sources'], keywords: ['action plan', 'team strategy', 'brainstorm', 'research question', 'vague', 'focused', 'appraisal', 'economic strength', 'superpower', 'empire'] },
  q4_a: { keyConcepts: ['research question', 'clarity', 'focus', 'investigation'], keywords: ['research question', 'clear', 'focused', 'superpower', 'empire', 'factor', 'time period'] },
  q4_b: { keyConcepts: ['justification', 'relevance', 'research question', 'reasoning'], keywords: ['relevant', 'research question', 'investigation', 'reasoning', 'naval power', 'British Empire'] },
  q4_c: { keyConcepts: ['primary source', 'investigation', 'relevance'], keywords: ['primary source', 'logbook', 'naval records', 'maps', 'letters', 'specific'] },
  q4_d: { keyConcepts: ['recording information', 'method', 'note-taking'], keywords: ['notepad', 'record', 'highlight', 'main points', 'notes'] },
  q4_e: { keyConcepts: ['secondary source', 'investigation', 'relevance'], keywords: ['secondary source', 'book', 'documentary', 'article', 'British Navy', 'specific'] },
  q4_f: { keyConcepts: ['collaboration', 'teamwork', 'investigation management'], keywords: ['team', 'collaborate', 'focused', 'common goal', 'tasks', 'roles'] },
  q5_: { keyConcepts: ['sustainability', 'responsible consumption and production', 'stakeholders', 'persuasive speech', 'slow fashion', 'SDG 12'], keywords: ['sustainable production', 'consumption', 'slow fashion', 'fast fashion', 'garment workers', 'stakeholders', 'producers', 'consumers', 'slogan', 'persuasive', 'rhetorical question', 'first person'] },
  q6_a: { keyConcepts: ['origin', 'source evaluation', 'publisher'], keywords: ['origin', 'Meridian Geography Press', 'Nairobi', 'Kenya', 'publisher'] },
  q6_b: { keyConcepts: ['purpose', 'source evaluation', 'intended audience'], keywords: ['purpose', 'inform', 'teach', 'show changes', 'urbanisation'] },
  q6_c: { keyConcepts: ['value of a source', 'source evaluation', 'content', 'origin', 'purpose'], keywords: ['value', 'compare', 'decades', 'urbanisation patterns', '1970', '2010'] },
  q6_d: { keyConcepts: ['limitation of a source', 'source evaluation', 'content', 'origin', 'purpose'], keywords: ['limitation', 'does not explain', 'why', 'urbanisation changes', 'rural', 'causes'] },
  q7_: { keyConcepts: ['urbanisation data', 'demographic change', 'justification', 'data interpretation', 'rural-urban shift'], keywords: ['urbanisation', '1970', '2010', '10%', '24%', 'rural', 'cities', 'Nairobi', 'data'] },
  q8_: { keyConcepts: ['population change', 'resources', 'factors of production', 'perspectives', 'synthesis', 'to what extent'], keywords: ['population', 'resources', 'capital', 'labour', 'land', 'entrepreneurship', 'perspectives', 'synthesis', 'conclusion', 'MYP examples'] },
}
