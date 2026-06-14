/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — May 2025 · VARIANT 1.
 * One entry per mark-scheme task key. No server-only import.
 * Scenario: migration, displacement & global health.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_MAY2025_V1: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['causality', 'migration', 'governance'], keywords: ['cause of migration', 'persecution', 'conflict', 'natural disaster', 'flee'] },
  q2_: { keyConcepts: ['causality', 'migration', 'consequences'], keywords: ['effect of crisis', 'Syrian refugee crisis', 'host cities', 'housing', 'pressure'] },
  q3_: { keyConcepts: ['source evaluation', 'perspectives', 'communication'], keywords: ['strengths', 'limitations', 'appraisal', 'sources', 'bias', 'campaign'] },
  q4_a: { keyConcepts: ['investigation', 'research question'], keywords: ['research question', 'migration policy', 'community', 'change', 'focus'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['asylum policy', 'Berlin', 'integration', 'language classes', 'relevance'] },
  q4_c: { keyConcepts: ['sources', 'relevance'], keywords: ['source type', 'specific source', 'report', 'documentary', 'interview'] },
  q4_d: { keyConcepts: ['source evaluation', 'usefulness', 'reliability'], keywords: ['reliable', 'usefulness', 'content', 'source type'] },
  q4_e: { keyConcepts: ['IB learner profile', 'reflection', 'investigation'], keywords: ['learner profile', 'open-minded', 'caring', 'inquirer', 'attribute'] },
  q5_: { keyConcepts: ['development indicators', 'quality of life', 'communication'], keywords: ['SDG 3', 'child mortality', 'vaccines', 'persuasive', 'call to action', 'Rwanda'] },
  q6_a: { keyConcepts: ['source evaluation', 'origin'], keywords: ['origin', 'World Health Organization', 'WHO', 'author'] },
  q6_b: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['purpose', 'inform', 'vaccination', 'coverage', 'trend'] },
  q6_c: { keyConcepts: ['source evaluation', 'value'], keywords: ['value', 'clear', 'trend', 'over time', 'compare years'] },
  q6_d: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['limitation', 'global average', 'no countries', 'no causes', 'scope'] },
  q7_: { keyConcepts: ['global cooperation', 'governance', 'sustainability'], keywords: ['global community', 'cooperation', 'WHO', 'Gavi', 'funding'] },
  q8_: { keyConcepts: ['causality', 'sustainability', 'public health'], keywords: ['future impact', 'Africa', 'measles', 'outbreak', 'children', 'coverage'] },
  q9_: { keyConcepts: ['perspectives', 'synthesis', 'sustainability', 'systems'], keywords: ['technology', 'healthcare access', 'telemedicine', 'India', 'equity', 'perspectives', 'synthesis'] },
}
