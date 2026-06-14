/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — May 2023.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_MAY2023: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['international institutions', 'peace', 'stability', 'cooperation', 'collective security'], keywords: ['UN', 'United Nations', 'sanctions', 'collective security', 'international law', 'WW2', 'peace'] },
  q2_: { keyConcepts: ['global challenges', 'cooperation', 'resolution', 'sustainability'], keywords: ['climate change', 'disease', 'migration', 'pollution', 'economic inequality', 'cooperation', 'resolve'] },
  q3_: { keyConcepts: ['investigation', 'action plan', 'strengths and limitations', 'appraisal', 'research question', 'primary/secondary sources'], keywords: ['action plan', 'team strategy', 'brainstorm', 'research question', 'vague', 'focused', 'appraisal', 'cultural strength', 'superpower', 'empire'] },
  q4_a: { keyConcepts: ['research question', 'clarity', 'focus', 'investigation'], keywords: ['research question', 'clear', 'focused', 'superpower', 'empire', 'factor', 'time period'] },
  q4_b: { keyConcepts: ['justification', 'relevance', 'research question', 'reasoning'], keywords: ['relevant', 'research question', 'investigation', 'reasoning', 'Cold War', 'military strength'] },
  q4_c: { keyConcepts: ['primary source', 'investigation', 'relevance'], keywords: ['primary source', 'interview', 'photographs', 'speech', 'specialist', 'specific'] },
  q4_d: { keyConcepts: ['recording information', 'method', 'note-taking'], keywords: ['notepad', 'record', 'highlight', 'main points', 'notes'] },
  q4_e: { keyConcepts: ['secondary source', 'investigation', 'relevance'], keywords: ['secondary source', 'book', 'biography', 'essay', 'Cold War', 'specific'] },
  q4_f: { keyConcepts: ['collaboration', 'teamwork', 'investigation management'], keywords: ['team', 'collaborate', 'focused', 'common goal', 'tasks', 'roles'] },
  q5_: { keyConcepts: ['sustainability', 'responsible consumption and production', 'stakeholders', 'persuasive speech', 'fair trade', 'SDG 12'], keywords: ['sustainable production', 'consumption', 'Fair Trade', 'stakeholders', 'producers', 'consumers', 'slogan', 'persuasive', 'rhetorical question', 'first person'] },
  q6_a: { keyConcepts: ['origin', 'source evaluation', 'publisher'], keywords: ['origin', 'Tom Publishing', 'Wisconsin', 'United States', 'publisher'] },
  q6_b: { keyConcepts: ['purpose', 'source evaluation', 'intended audience'], keywords: ['purpose', 'inform', 'teach', 'show changes', 'population'] },
  q6_c: { keyConcepts: ['value of a source', 'source evaluation', 'content', 'origin', 'purpose'], keywords: ['value', 'compare', 'two years', 'population patterns', '1972', '1986'] },
  q6_d: { keyConcepts: ['limitation of a source', 'source evaluation', 'content', 'origin', 'purpose'], keywords: ['limitation', 'does not explain', 'why', 'population changes', 'base', 'top'] },
  q7_: { keyConcepts: ['population pyramids', 'demographic change', 'justification', 'data interpretation', 'ageing population'], keywords: ['population pyramid', '1972', '1986', 'young people', 'under 19', 'ageing', 'negative growth', 'workers', 'data'] },
  q8_: { keyConcepts: ['population change', 'resources', 'factors of production', 'perspectives', 'synthesis', 'to what extent'], keywords: ['population', 'resources', 'capital', 'labour', 'land', 'entrepreneurship', 'perspectives', 'synthesis', 'conclusion', 'MYP examples'] },
}
