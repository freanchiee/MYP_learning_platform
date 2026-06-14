/**
 * Public (client-safe) concept tags for MYP Geography — November 2021 · VARIANT v1.
 * One entry per mark-scheme task key. No server-only import.
 * Scenario: plastic pollution & ocean health.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2021_V1: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['causality', 'change', 'global interactions'], keywords: ['increase', 'trend', 'overall increase', '2020', 'highest', '367 million tonnes'] },
  q2_: { keyConcepts: ['causality', 'global interactions', 'sustainability'], keywords: ['single-use packaging', 'bottles', 'bags', 'consumer demand', 'cheap', 'fossil fuels'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'questionnaire', 'checkboxes', 'sample size'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'sustainability'], keywords: ['clear', 'focused', 'place', 'time', 'two elements', 'statement of inquiry'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['single-use bags', 'refillables', 'plastic waste', 'individual action', 'reasons'] },
  q4_c: { keyConcepts: ['sources', 'investigation'], keywords: ['secondary source', 'local council statistics', 'GIS map', 'litter hotspots', 'specific'] },
  q4_d: { keyConcepts: ['sources', 'usefulness', 'reasoning'], keywords: ['website article', 'background information', 'understanding', 'research question', 'primary data'] },
  q4_e: { keyConcepts: ['investigation', 'methods'], keywords: ['challenge', 'primary data', 'sufficient data', 'interviewed', 'detail'] },
  q5_: { keyConcepts: ['global interactions', 'management & intervention', 'sustainability', 'communication'], keywords: ['urban growth', 'coastal megacity', 'waste collection', 'canals', 'flooding', 'solution', 'persuasive speech'] },
  q6_a: { keyConcepts: ['data interpretation', 'waste'], keywords: ['South Asia', 'increase', '5.7 million tonnes', '12.1', '6.4'] },
  q6_b: { keyConcepts: ['data interpretation', 'waste'], keywords: ['Sub-Saharan Africa', 'four times bigger', '1.9', '8.3'] },
  q7_a: { keyConcepts: ['source evaluation', 'purpose', 'waste'], keywords: ['purpose', 'inform readers', 'newspaper', 'changes', 'mismanaged plastic waste', '2010', '2020'] },
  q7_b: { keyConcepts: ['source evaluation', 'value', 'communication'], keywords: ['value', 'table', 'clear figures', 'easy to compare', 'wide audience'] },
  q8_a: { keyConcepts: ['source evaluation', 'limitation', 'perspectives', 'causality'], keywords: ['limitation', 'causes', 'imports only', 'why countries export', 'plastic-waste trade', 'investigation'] },
  q8_b: { keyConcepts: ['source evaluation', 'limitation', 'perspectives', 'change'], keywords: ['limitation', 'out of date', '2018', 'government official', 'current statistics', 'invalid'] },
  q9_: { keyConcepts: ['global interactions', 'disparity & equity', 'causality', 'perspectives', 'synthesis'], keywords: ['plastic-waste trade', 'benefits', 'negative consequences', 'recycling industry', 'Malaysia', 'China ban', 'dumping', 'conclusion'] },
}
