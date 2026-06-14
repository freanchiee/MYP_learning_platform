/**
 * Public (client-safe) concept tags for MYP Geography — November 2021.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2021: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['causality', 'change', 'global interactions'], keywords: ['increase', 'trend', 'fluctuate', 'overall increase', '2018', 'highest temperature'] },
  q2_: { keyConcepts: ['causality', 'global interactions', 'sustainability'], keywords: ['transportation', 'cars', 'flights', 'CO2', 'fossil fuels', 'greenhouse gases'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'questionnaire', 'checkboxes', 'sample size'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'sustainability'], keywords: ['clear', 'focused', 'place', 'time', 'two elements', 'statement of inquiry'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['imported food', 'CO2 emissions', 'carbon footprint', 'individual food choices', 'reasons'] },
  q4_c: { keyConcepts: ['sources', 'investigation'], keywords: ['secondary source', 'local government statistics', 'GIS map', 'newspaper article', 'specific'] },
  q4_d: { keyConcepts: ['sources', 'usefulness', 'reasoning'], keywords: ['website article', 'background information', 'understanding', 'research question', 'primary data'] },
  q4_e: { keyConcepts: ['investigation', 'methods'], keywords: ['challenge', 'primary data', 'sufficient data', 'interviewed', 'detail'] },
  q5_: { keyConcepts: ['global interactions', 'management & intervention', 'sustainability', 'communication'], keywords: ['urban growth', 'slums', 'Dhaka', 'sewage', 'communal toilets', 'solution', 'persuasive speech'] },
  q6_a: { keyConcepts: ['data interpretation', 'human movement'], keywords: ['refugees', 'increase', '10.7 million', '25.9', '15.2'] },
  q6_b: { keyConcepts: ['data interpretation', 'human movement'], keywords: ['asylum seekers', 'four times bigger', '827 000', '3.5 million'] },
  q7_a: { keyConcepts: ['source evaluation', 'purpose', 'human movement'], keywords: ['purpose', 'inform readers', 'newspaper', 'changes', 'forced migrants', '2008', '2018'] },
  q7_b: { keyConcepts: ['source evaluation', 'value', 'communication'], keywords: ['value', 'pictograph', 'pictures and numbers', 'easy to understand', 'wide audience'] },
  q8_a: { keyConcepts: ['source evaluation', 'limitation', 'perspectives', 'causality'], keywords: ['limitation', 'causes', 'disaster-related', 'wars', 'displacement', 'investigation'] },
  q8_b: { keyConcepts: ['source evaluation', 'limitation', 'perspectives', 'change'], keywords: ['limitation', 'out of date', '2016', 'government official', 'current statistics', 'invalid'] },
  q9_: { keyConcepts: ['global interactions', 'disparity & equity', 'causality', 'perspectives', 'synthesis'], keywords: ['migration', 'benefits', 'negative consequences', 'economy', 'China', 'Shanghai', 'xenophobia', 'conclusion'] },
}
