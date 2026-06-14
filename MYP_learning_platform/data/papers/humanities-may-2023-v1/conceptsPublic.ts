/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — May 2023 · VARIANT 1.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_MAY2023_V1: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['international institutions', 'cooperation', 'stability', 'global health', 'coordination'], keywords: ['WHO', 'World Health Organization', 'disease', 'vaccines', 'cooperation', 'outbreak', 'stability'] },
  q2_: { keyConcepts: ['global challenges', 'cooperation', 'resolution', 'sustainability'], keywords: ['food insecurity', 'clean water', 'biodiversity', 'unemployment', 'refugees', 'cooperation', 'resolve'] },
  q3_: { keyConcepts: ['investigation', 'action plan', 'strengths and limitations', 'appraisal', 'research question', 'primary/secondary sources'], keywords: ['action plan', 'team strategy', 'brainstorm', 'research question', 'vague', 'focused', 'appraisal', 'military strength', 'superpower', 'empire'] },
  q4_a: { keyConcepts: ['research question', 'clarity', 'focus', 'investigation'], keywords: ['research question', 'clear', 'focused', 'superpower', 'empire', 'factor', 'time period'] },
  q4_b: { keyConcepts: ['justification', 'relevance', 'research question', 'reasoning'], keywords: ['relevant', 'research question', 'investigation', 'reasoning', 'trade networks', 'Roman Empire'] },
  q4_c: { keyConcepts: ['primary source', 'investigation', 'relevance'], keywords: ['primary source', 'ledger', 'artefact', 'inscription', 'coins', 'specific'] },
  q4_d: { keyConcepts: ['recording information', 'method', 'note-taking'], keywords: ['notepad', 'record', 'highlight', 'main points', 'notes'] },
  q4_e: { keyConcepts: ['secondary source', 'investigation', 'relevance'], keywords: ['secondary source', 'book', 'documentary', 'article', 'Roman Empire', 'specific'] },
  q4_f: { keyConcepts: ['collaboration', 'teamwork', 'investigation management'], keywords: ['team', 'collaborate', 'focused', 'common goal', 'tasks', 'roles'] },
  q5_: { keyConcepts: ['sustainability', 'responsible consumption and production', 'stakeholders', 'persuasive speech', 'e-waste', 'SDG 12'], keywords: ['sustainable production', 'consumption', 'e-waste', 'repair', 'recycle', 'stakeholders', 'producers', 'consumers', 'slogan', 'persuasive', 'rhetorical question', 'first person'] },
  q6_a: { keyConcepts: ['origin', 'source evaluation', 'publisher'], keywords: ['origin', 'Atlas Educational Press', 'Lisbon', 'Portugal', 'publisher'] },
  q6_b: { keyConcepts: ['purpose', 'source evaluation', 'intended audience'], keywords: ['purpose', 'inform', 'teach', 'show changes', 'literacy'] },
  q6_c: { keyConcepts: ['value of a source', 'source evaluation', 'content', 'origin', 'purpose'], keywords: ['value', 'compare', 'two years', 'literacy patterns', '1980', '2010'] },
  q6_d: { keyConcepts: ['limitation of a source', 'source evaluation', 'content', 'origin', 'purpose'], keywords: ['limitation', 'does not explain', 'why', 'literacy changes', 'regions', 'gap'] },
  q7_: { keyConcepts: ['literacy data', 'regional development', 'justification', 'data interpretation', 'education policy'], keywords: ['literacy', '1980', '2010', 'North', 'Northeast', 'South', 'gap narrowed', 'access', 'quality', 'data'] },
  q8_: { keyConcepts: ['population change', 'resources', 'factors of production', 'perspectives', 'synthesis', 'to what extent'], keywords: ['population', 'resources', 'capital', 'labour', 'land', 'entrepreneurship', 'perspectives', 'synthesis', 'conclusion', 'MYP examples'] },
}
