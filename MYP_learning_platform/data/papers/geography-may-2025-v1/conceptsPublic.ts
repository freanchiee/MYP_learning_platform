/**
 * Public (client-safe) concept tags for MYP Geography — May 2025 · Set 1 variant.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2025_V1: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['globalization', 'global interactions'], keywords: ['cheaper electronics', 'medical knowledge', 'cultures', 'languages', 'trade'] },
  q1_b: { keyConcepts: ['causality', 'globalization', 'sustainability'], keywords: ['e-waste', 'toxic substances', 'lead', 'mercury', 'contamination'] },
  q2_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'secondary data', 'sample size'] },
  q3_a: { keyConcepts: ['investigation', 'research question', 'globalization'], keywords: ['clear', 'focused', 'location', 'stakeholder', 'statement of inquiry'] },
  q3_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['employment', 'minimum wage', 'social impact', 'globalisation', 'reasons'] },
  q3_c: { keyConcepts: ['sources', 'reliability'], keywords: ['ILO', 'NGO statistics', 'wage data', 'reliable source'] },
  q3_d: { keyConcepts: ['sources', 'usefulness', 'reasoning'], keywords: ['wage data', 'social benefits', 'reliable statistics', 'informed conclusion'] },
  q4_: { keyConcepts: ['systems', 'sustainability', 'management & intervention', 'communication'], keywords: ['biome', 'rainforest', 'aquatic', 'heli-logging', 'GIS', 'overfishing', 'innovation', 'documentary'] },
  q5_a: { keyConcepts: ['source evaluation', 'value'], keywords: ['highlighted', 'highest risk', 'overview', 'pre-position', 'prioritise'] },
  q5_b: { keyConcepts: ['source evaluation', 'limitation', 'scale'], keywords: ['country scale', 'no towns', 'no roads', 'where to deliver'] },
  q6_: { keyConcepts: ['analysis', 'perspectives', 'disparity & equity'], keywords: ['phone-app alerts', 'smartphone', 'evacuation drills', 'mobility', 'effectiveness', 'conclusion'] },
  q7_: { keyConcepts: ['disparity & equity', 'management & intervention', 'causality', 'synthesis'], keywords: ['income', 'preparedness', 'infrastructure', 'Haiti earthquake', 'Christchurch', 'perspectives', 'conclusion'] },
}
