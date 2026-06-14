/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — November 2024 · VARIANT 2.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_NOV2024_V2: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['global health', 'data interpretation', 'regional comparison'], keywords: ['Eastern & South-Eastern Asia', 'Central & Southern Asia', 'largest increase', 'percentage', 'safe water'] },
  q2_: { keyConcepts: ['global health', 'infrastructure investment', 'development aid'], keywords: ['infrastructure', 'wells', 'piped water', 'investment', 'aid', 'technology'] },
  q3_: { keyConcepts: ['health impacts', 'disease', 'education', 'wellbeing'], keywords: ['disease', 'health', 'children', 'school', 'productivity', 'wellbeing'] },
  q4_: { keyConcepts: ['evaluation', 'research methods', 'validity', 'data collection', 'community health'], keywords: ['strength', 'limitation', 'appraisal', 'survey', 'valid data', 'access to care', 'common illnesses', 'clean water', 'cost'] },
  q5_a: { keyConcepts: ['research question', 'vaccination coverage', 'focus and clarity'], keywords: ['clear', 'focused', 'research question', 'location', 'time period', 'specific age group'] },
  q5_b: { keyConcepts: ['justification', 'relevance', 'indicators', 'vaccination coverage'], keywords: ['vaccination rate', 'indicator', 'coverage', 'health authority', 'relevant', 'reasoning'] },
  q5_c: { keyConcepts: ['source evaluation', 'usefulness', 'vaccination coverage', 'explanation'], keywords: ['vaccination statistics', 'districts', 'coverage', 'benefit', 'limitation', 'reasons'] },
  q5_d: { keyConcepts: ['research challenges', 'data collection', 'reliability', 'vaccination coverage'], keywords: ['access to records', 'private clinics', 'incomplete data', 'reliability', 'willingness'] },
  q6_: { keyConcepts: ['right to health', 'public health campaigns', 'civic engagement', 'speech writing'], keywords: ['polio eradication', 'right to health', 'vaccination', 'opening statement', 'closing statement', 'rhetorical questions', 'community', 'public health campaign'] },
  q7_a: { keyConcepts: ['origin', 'source evaluation', 'OPVL'], keywords: ['WellSpring Trust', 'charity', 'origin'] },
  q7_b: { keyConcepts: ['purpose', 'source evaluation', 'OPVL'], keywords: ['educate', 'inform', 'community health worker', 'hospital-only care', 'global health', 'gain support'] },
  q7_c: { keyConcepts: ['value', 'source evaluation', 'OPVL', 'community health'], keywords: ['first-hand account', 'community health worker', 'global health', 'home visits', 'access to care'] },
  q7_d: { keyConcepts: ['limitation', 'source evaluation', 'OPVL', 'community health'], keywords: ['single viewpoint', 'one health worker', 'bias', 'not representative', 'community health', 'global health'] },
  q8_: { keyConcepts: ['community health', 'hospital-only care', 'access to care', 'justification'], keywords: ['home visits', 'early treatment', 'remote villages', 'prevention', 'access', 'healthcare for all'] },
  q9_: { keyConcepts: ['health indicators', 'wellbeing', 'child mortality', 'vaccination rates', 'perspectives', 'synthesis'], keywords: ['life expectancy', 'child mortality', 'vaccination rate', 'clean water', 'sanitation', 'wellbeing', 'perspectives', 'conclusion', 'examples'] },
}
