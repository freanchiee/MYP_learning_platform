/**
 * Public (client-safe) concept tags for MYP Geography — May 2025.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2025: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['globalization', 'global interactions'], keywords: ['tourism', 'internet', 'cultures', 'languages', 'cheaper goods'] },
  q1_b: { keyConcepts: ['causality', 'globalization', 'sustainability'], keywords: ['pollution', 'fossil fuels', 'greenhouse gases', 'carbon footprint', 'tourism'] },
  q2_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'secondary data', 'sample size'] },
  q3_a: { keyConcepts: ['investigation', 'research question', 'globalization'], keywords: ['clear', 'focused', 'location', 'stakeholder', 'statement of inquiry'] },
  q3_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['employment', 'minimum wage', 'social impact', 'globalisation', 'reasons'] },
  q3_c: { keyConcepts: ['sources', 'reliability'], keywords: ['World Bank', 'NGO statistics', 'poverty data', 'reliable source'] },
  q3_d: { keyConcepts: ['sources', 'usefulness', 'reasoning'], keywords: ['poverty levels', 'social benefits', 'reliable statistics', 'informed conclusion'] },
  q4_: { keyConcepts: ['systems', 'sustainability', 'management & intervention', 'communication'], keywords: ['biome', 'rainforest', 'aquatic', 'heli-logging', 'GIS', 'overfishing', 'innovation', 'podcast'] },
  q5_a: { keyConcepts: ['source evaluation', 'value'], keywords: ['colour-coded', 'damaged', 'undamaged', 'extent of damage', 'prioritise'] },
  q5_b: { keyConcepts: ['source evaluation', 'limitation', 'scale'], keywords: ['street names', 'detail', 'identify properties', 'deliver food'] },
  q6_: { keyConcepts: ['analysis', 'perspectives', 'disparity & equity'], keywords: ['real-time alerts', 'social media', 'evacuation drills', 'mobility', 'effectiveness', 'conclusion'] },
  q7_: { keyConcepts: ['disparity & equity', 'management & intervention', 'causality', 'synthesis'], keywords: ['income', 'preparedness', 'infrastructure', 'Haiti earthquake', 'Christchurch', 'perspectives', 'conclusion'] },
}
