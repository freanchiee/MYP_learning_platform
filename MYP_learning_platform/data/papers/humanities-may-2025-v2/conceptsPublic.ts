/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — May 2025 · VARIANT 2.
 * One entry per mark-scheme task key. No server-only import.
 * Scenario: trade, colonial legacies & global inequality.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_MAY2025_V2: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['causality', 'trade', 'governance'], keywords: ['cause of inequality', 'unfair trade', 'raw materials', 'debt', 'dependency'] },
  q2_: { keyConcepts: ['causality', 'trade', 'consequences'], keywords: ['effect of colonialism', 'Congo', 'resource dependence', 'extraction', 'economy'] },
  q3_: { keyConcepts: ['source evaluation', 'perspectives', 'communication'], keywords: ['strengths', 'limitations', 'appraisal', 'sources', 'bias', 'fair trade'] },
  q4_a: { keyConcepts: ['investigation', 'research question'], keywords: ['research question', 'trade agreement', 'community', 'change', 'focus'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['AfCFTA', 'Ghana', 'tariffs', 'textiles', 'relevance'] },
  q4_c: { keyConcepts: ['sources', 'relevance'], keywords: ['source type', 'specific source', 'report', 'documentary', 'interview'] },
  q4_d: { keyConcepts: ['source evaluation', 'usefulness', 'reliability'], keywords: ['reliable', 'usefulness', 'content', 'source type'] },
  q4_e: { keyConcepts: ['IB learner profile', 'reflection', 'investigation'], keywords: ['learner profile', 'principled', 'thinker', 'inquirer', 'attribute'] },
  q5_: { keyConcepts: ['development indicators', 'quality of life', 'communication'], keywords: ['MPI', 'multidimensional poverty', 'education', 'persuasive', 'call to action', 'Bangladesh'] },
  q6_a: { keyConcepts: ['source evaluation', 'origin'], keywords: ['origin', 'World Bank', 'author'] },
  q6_b: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['purpose', 'inform', 'extreme poverty', 'distribution'] },
  q6_c: { keyConcepts: ['source evaluation', 'value'], keywords: ['value', 'clear', 'compare', 'most affected', 'least affected'] },
  q6_d: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['limitation', 'no causes', 'conflict', 'debt', 'scope'] },
  q7_: { keyConcepts: ['global cooperation', 'governance', 'sustainability'], keywords: ['global community', 'cooperation', 'debt relief', 'IMF', 'aid'] },
  q8_: { keyConcepts: ['causality', 'sustainability', 'global inequality'], keywords: ['future impact', 'Sahel', 'Niger', 'Chad', 'migration', 'food prices'] },
  q9_: { keyConcepts: ['perspectives', 'synthesis', 'sustainability', 'systems'], keywords: ['technology', 'inequality', 'M-Pesa', 'Kenya', 'leapfrogging', 'dependency', 'synthesis'] },
}
