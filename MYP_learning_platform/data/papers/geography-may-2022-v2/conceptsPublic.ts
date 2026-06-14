/**
 * Public (client-safe) concept tags for MYP Geography — May 2022 · VARIANT 2.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2022_V2: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['natural disasters', 'causality'], keywords: ['loss of life', 'flooding', 'farmland', 'destruction of infrastructure', 'loss of clean water', 'forced displacement', 'floods'] },
  q2_: { keyConcepts: ['disparity & equity', 'causality', 'management & intervention'], keywords: ['income disparity', 'low-income', 'floodplain', 'low-lying land', 'no insurance', 'vulnerable', 'crops'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'sample size', 'representative', 'country-level only', 'partial picture'] },
  q4_a: { keyConcepts: ['investigation', 'research question'], keywords: ['clear', 'focused', 'management strategy', 'natural disaster', 'statement of inquiry'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['early-warning sirens', 'alert', 'cyclone shelter', 'evacuate', 'relevance', 'reasoning'] },
  q4_c: { keyConcepts: ['investigation', 'primary data'], keywords: ['interviews', 'questionnaires', 'surveys', 'primary data', 'methods'] },
  q4_d: { keyConcepts: ['investigation', 'usefulness', 'reasoning'], keywords: ['survey', 'count', 'heard the warning', 'reached a shelter', 'evaluate', 'benefit'] },
  q5_: { keyConcepts: ['culture', 'globalization', 'management & intervention', 'communication'], keywords: ['tourism', 'culture', 'host community', 'Nepal', 'cultural identity', 'blog', 'sub-headings', 'advice'] },
  q6_a: { keyConcepts: ['source interpretation', 'energy access'], keywords: ['Sub-Saharan Africa', 'lowest', 'electricity', 'access', 'region'] },
  q6_b: { keyConcepts: ['source evaluation', 'origin'], keywords: ['origin', 'globalenergydata.org', 'source B'] },
  q6_c: { keyConcepts: ['source evaluation', 'value', 'management & intervention'], keywords: ['access figure', 'every region', 'compare', 'Sub-Saharan Africa', 'investment'] },
  q7_: { keyConcepts: ['perspectives', 'power', 'management & intervention', 'sustainability'], keywords: ['rainwater harvesting', 'reliable supply', 'dry season', 'recharge groundwater', 'runoff', 'cost'] },
  q8_: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['limitation', 'timeline', 'cost', 'how much water', 'rainwater harvesting', 'residents'] },
  q9_: { keyConcepts: ['sustainability', 'management & intervention', 'causality', 'globalization'], keywords: ['sustainable forestry', 'biodiversity loss', 'forest habitat', 'selective logging', 'reforestation', 'protected areas', 'perspectives', 'conclusion'] },
}
