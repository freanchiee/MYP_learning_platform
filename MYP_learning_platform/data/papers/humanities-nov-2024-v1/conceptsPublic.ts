/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — November 2024 · VARIANT 1.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_NOV2024_V1: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['urbanization', 'data interpretation', 'regional comparison'], keywords: ['East Asia', 'Sub-Saharan Africa', 'largest increase', 'percentage', 'urban'] },
  q2_: { keyConcepts: ['urbanization', 'rural–urban migration', 'economic opportunity'], keywords: ['jobs', 'rural-urban migration', 'industry', 'services', 'economic opportunity', 'better services'] },
  q3_: { keyConcepts: ['urbanization impacts', 'housing', 'infrastructure', 'congestion'], keywords: ['overcrowding', 'housing', 'congestion', 'pollution', 'infrastructure', 'services'] },
  q4_: { keyConcepts: ['evaluation', 'research methods', 'validity', 'data collection', 'sustainable transport'], keywords: ['strength', 'limitation', 'appraisal', 'survey', 'valid data', 'travel habits', 'air quality', 'access', 'BRT', 'cost'] },
  q5_a: { keyConcepts: ['research question', 'urban green space', 'focus and clarity'], keywords: ['clear', 'focused', 'research question', 'location', 'time period', 'specific district'] },
  q5_b: { keyConcepts: ['justification', 'relevance', 'indicators', 'urban green space'], keywords: ['parkland per resident', 'indicator', 'access', 'local government', 'relevant', 'reasoning'] },
  q5_c: { keyConcepts: ['source evaluation', 'usefulness', 'urban green space', 'explanation'], keywords: ['parkland statistics', 'districts', 'access', 'benefit', 'limitation', 'reasons'] },
  q5_d: { keyConcepts: ['research challenges', 'data collection', 'reliability', 'urban green space'], keywords: ['access to data', 'mapping', 'unrecorded green space', 'reliability', 'time'] },
  q6_: { keyConcepts: ['sustainable cities', 'community action movements', 'civic engagement', 'speech writing'], keywords: ['Critical Mass', 'affordable public transport', 'clean air', 'opening statement', 'closing statement', 'rhetorical questions', 'community', 'cycle lanes'] },
  q7_a: { keyConcepts: ['origin', 'source evaluation', 'OPVL'], keywords: ['Greenleaf Cities', 'charity', 'origin'] },
  q7_b: { keyConcepts: ['purpose', 'source evaluation', 'OPVL'], keywords: ['educate', 'inform', '15-minute city', 'car-dependent', 'sustainable cities', 'gain support'] },
  q7_c: { keyConcepts: ['value', 'source evaluation', 'OPVL', '15-minute city'], keywords: ['definition', '15-minute city', 'sustainable cities', 'walkable', 'reduce emissions'] },
  q7_d: { keyConcepts: ['limitation', 'source evaluation', 'OPVL', '15-minute city'], keywords: ['lack of detail', 'implementation', 'redesign', 'bias', 'car-dependent', 'sustainable cities'] },
  q8_: { keyConcepts: ['15-minute city', 'car-dependent city', 'sustainability', 'justification'], keywords: ['walkable', 'cycling', 'commuting', 'air pollution', 'mixed-use', 'sustainable'] },
  q9_: { keyConcepts: ['liveability indicators', 'urban development', 'air quality', 'housing affordability', 'perspectives', 'synthesis'], keywords: ['liveability', 'air quality', 'housing affordability', 'public transport', 'green space', 'quality of life', 'perspectives', 'conclusion', 'examples'] },
}
