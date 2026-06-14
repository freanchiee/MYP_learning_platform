/**
 * Public (client-safe) concept tags for MYP Geography — November 2021 · VARIANT v2.
 * One entry per mark-scheme task key. No server-only import.
 * NEW scenario: water scarcity & access to safe water.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2021_V2: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['causality', 'change', 'global interactions'], keywords: ['increase', 'trend', 'overall increase', '2020', 'highest', '4 000 km³', 'almost doubled'] },
  q2_: { keyConcepts: ['causality', 'global interactions', 'sustainability'], keywords: ['irrigation', 'irrigated farming', 'agriculture', 'population growth', 'crops', 'food demand'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'questionnaire', 'checkboxes', 'sample size', 'water-saving actions'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'sustainability'], keywords: ['clear', 'focused', 'place', 'time', 'two elements', 'statement of inquiry'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['Windhoek', 'drought', 'dams', 'rainwater', 'household water', 'water scarcity', 'reasons'] },
  q4_c: { keyConcepts: ['sources', 'investigation'], keywords: ['secondary source', 'water utility statistics', 'reservoir levels', 'GIS map', 'newspaper article', 'specific'] },
  q4_d: { keyConcepts: ['sources', 'usefulness', 'reasoning'], keywords: ['website article', 'background information', 'understanding', 'research question', 'primary data'] },
  q4_e: { keyConcepts: ['investigation', 'methods'], keywords: ['challenge', 'primary data', 'sufficient data', 'interviewed', 'water use', 'detail'] },
  q5_: { keyConcepts: ['global interactions', 'management & intervention', 'sustainability', 'communication'], keywords: ['urban growth', 'water stress', 'Cape Town', 'leaking pipes', 'reservoirs', 'solution', 'persuasive speech'] },
  q6_a: { keyConcepts: ['data interpretation', 'water access'], keywords: ['Sub-Saharan Africa', 'increase', '120 million', '420', '300'] },
  q6_b: { keyConcepts: ['data interpretation', 'water access'], keywords: ['Latin America', 'Caribbean', 'four times bigger', '15 million', '80 million'] },
  q7_a: { keyConcepts: ['source evaluation', 'purpose', 'water access'], keywords: ['purpose', 'inform readers', 'newspaper', 'changes', 'safe water', '2005', '2020'] },
  q7_b: { keyConcepts: ['source evaluation', 'value', 'communication'], keywords: ['value', 'doughnut chart', 'easy to compare', 'colours and figures', 'wide audience'] },
  q8_a: { keyConcepts: ['source evaluation', 'limitation', 'perspectives', 'causality'], keywords: ['limitation', 'causes', 'ranking only', 'drought', 'over-pumping', 'investigation'] },
  q8_b: { keyConcepts: ['source evaluation', 'limitation', 'perspectives', 'change'], keywords: ['limitation', 'out of date', '2019', 'government official', 'current statistics', 'invalid'] },
  q9_: { keyConcepts: ['global interactions', 'disparity & equity', 'causality', 'perspectives', 'synthesis'], keywords: ['large dams', 'benefits', 'negative consequences', 'hydroelectricity', 'Three Gorges Dam', 'displacement', 'conclusion'] },
}
