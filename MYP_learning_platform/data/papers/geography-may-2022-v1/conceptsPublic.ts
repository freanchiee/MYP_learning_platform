/**
 * Public (client-safe) concept tags for MYP Geography — May 2022 · VARIANT 1.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2022_V1: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['natural disasters', 'causality'], keywords: ['loss of life', 'smoke', 'air pollution', 'destruction of homes', 'forced evacuation', 'loss of wildlife', 'bushfire'] },
  q2_: { keyConcepts: ['disparity & equity', 'causality', 'management & intervention'], keywords: ['income disparity', 'evacuate', 'low-income', 'vulnerable', 'transport', 'trapped'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'sample size', 'representative', 'missing data', 'reliability'] },
  q4_a: { keyConcepts: ['investigation', 'research question'], keywords: ['clear', 'focused', 'management strategy', 'natural disaster', 'statement of inquiry'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['early-warning sirens', 'alert', 'evacuate', 'community', 'relevance', 'reasoning'] },
  q4_c: { keyConcepts: ['investigation', 'primary data'], keywords: ['interviews', 'questionnaires', 'surveys', 'primary data', 'methods'] },
  q4_d: { keyConcepts: ['investigation', 'usefulness', 'reasoning'], keywords: ['survey', 'count', 'warning', 'strategy', 'evaluate', 'benefit'] },
  q5_: { keyConcepts: ['culture', 'globalization', 'management & intervention', 'communication'], keywords: ['tourism', 'culture', 'host community', 'Nepal', 'cultural identity', 'blog', 'sub-headings', 'advice'] },
  q6_a: { keyConcepts: ['source interpretation', 'energy access'], keywords: ['Southern Africa', 'highest', 'clean cooking', 'access', 'region'] },
  q6_b: { keyConcepts: ['source evaluation', 'origin'], keywords: ['origin', 'cleanenergyaccess.org', 'source B'] },
  q6_c: { keyConcepts: ['source evaluation', 'value', 'management & intervention'], keywords: ['access', 'every region', 'clean cooking', 'Sahel', 'investment', 'indoor smoke'] },
  q7_: { keyConcepts: ['perspectives', 'power', 'management & intervention', 'sustainability'], keywords: ['clean cookstove', 'indoor smoke', 'health', 'respiratory illness', 'women and children', 'cost'] },
  q8_: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['limitation', 'diagram', 'cost', 'affordability', 'clean cookstove', 'residents'] },
  q9_: { keyConcepts: ['sustainability', 'management & intervention', 'causality', 'globalization'], keywords: ['sustainable fishing', 'marine biodiversity loss', 'overfishing', 'fish stocks', 'catch limits', 'marine protected areas', 'perspectives', 'conclusion'] },
}
