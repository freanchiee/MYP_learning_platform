/**
 * Public (client-safe) concept tags for MYP Geography — May 2023 · Set 2 variant.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2023_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['marine pollution', 'patterns & trends'], keywords: ['rivers', '41%', 'ocean plastic', 'land-based'] },
  q1_b: { keyConcepts: ['marine pollution', 'systems'], keywords: ['microplastics', 'five millimetres', 'marine animals', 'plastic', 'true'] },
  q2_: { keyConcepts: ['causality', 'marine pollution', 'geographic processes'], keywords: ['rivers', 'waste management', 'litter', 'drains', 'cause'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'management & intervention'], keywords: ['strengths', 'limitations', 'appraisal', 'mangroves', 'coastal erosion', 'stakeholders'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'desertification'], keywords: ['clear', 'focused', 'statement of inquiry', 'place', 'impact'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['worthy of investigating', 'Sahel', 'desertification', 'drought', 'reasons'] },
  q4_c: { keyConcepts: ['investigation', 'methods'], keywords: ['challenge', 'remote areas', 'travel', 'data collection'] },
  q4_d: { keyConcepts: ['sources', 'usefulness', 'reasoning'], keywords: ['satellite vegetation maps', 'land cover', 'change over time', 'desert', 'beneficial'] },
  q5_: { keyConcepts: ['systems', 'networks', 'management & intervention', 'communication'], keywords: ['GIS', 'flood extent', 'satellite images', 'displaced', 'aid', 'cloud', 'email'] },
  q6_a: { keyConcepts: ['source evaluation', 'origin'], keywords: ['origin', 'FairMineral Watch', 'fairmineralwatch.org', 'diagram'] },
  q6_b: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['purpose', 'raise awareness', 'EV battery', 'social and environmental impacts'] },
  q6_c: { keyConcepts: ['source evaluation', 'value'], keywords: ['value', 'supply chain', 'stages', 'presentation'] },
  q6_d: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['limitation', 'campaign organisation', 'bias', 'selective', 'presentation'] },
  q7_: { keyConcepts: ['management & intervention', 'sustainability', 'disparity & equity'], keywords: ['option 1', 'option 2', 'responsible mining', 'recycling', 'cobalt', 'environment', 'economy'] },
  q8_: { keyConcepts: ['sustainability', 'management & intervention', 'patterns & trends', 'synthesis'], keywords: ['energy transition', 'minerals', 'cobalt', 'recycling', 'regulation', 'perspectives', 'conclusion'] },
}
