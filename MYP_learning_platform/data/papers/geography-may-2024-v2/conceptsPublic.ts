/**
 * Public (client-safe) concept tags for MYP Geography — May 2024 · Set 2 variant.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2024_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['geographic processes', 'systems'], keywords: ['deposition', 'saltwater intrusion', 'weathering', 'abrasion', 'transportation', 'mass movement'] },
  q1_b: { keyConcepts: ['causality', 'geographic processes', 'management & intervention'], keywords: ['deposition', 'sediment', 'river bed', 'channel capacity', 'overtops', 'flood', 'threaten communities'] },
  q2_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'two locations', 'water quality'] },
  q3_a: { keyConcepts: ['investigation', 'research question', 'sustainability'], keywords: ['clear', 'focused', 'location', 'strategy', 'statement of inquiry', 'canal lining'] },
  q3_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['canal lining', 'water loss', 'protect the community', 'delta', 'worthy of investigating', 'reasoning'] },
  q3_c: { keyConcepts: ['sources', 'reliability'], keywords: ['secondary source', 'river-gauge records', 'water authority', 'satellite imagery'] },
  q3_d: { keyConcepts: ['sources', 'usefulness', 'reasoning'], keywords: ['river-gauge records', 'lower Indus', 'delta communities', 'judgements', 'canal lining'] },
  q3_e: { keyConcepts: ['investigation', 'challenges'], keywords: ['challenge', 'barrage-release records', 'monsoon fieldwork', 'large research area'] },
  q4_: { keyConcepts: ['management & intervention', 'systems', 'causality', 'communication'], keywords: ['flooding', 'monsoon', 'early warning', 'flood shelters', 'embankments', 'evacuation', 'introduction', 'conclusion'] },
  q5_a: { keyConcepts: ['source evaluation', 'value', 'scale'], keywords: ['scale bar', 'distance', 'Sector W', 'market district', 'value'] },
  q5_b: { keyConcepts: ['source evaluation', 'limitation', 'management & intervention'], keywords: ['lacks detail', 'location of schools', 'housing', 'special economic zone', 'informed decision'] },
  q6_: { keyConcepts: ['urbanization', 'management & intervention', 'disparity & equity'], keywords: ['housing', 'special economic zone', 'migrants', 'seaport', 'informal settlements', 'mangrove', 'both opinions'] },
  q7_: { keyConcepts: ['urbanization', 'disparity & equity', 'sustainability', 'synthesis'], keywords: ['megacity', 'quality of life', 'congestion', 'pollution', 'personal safety', 'perspectives', 'conclusion'] },
}
