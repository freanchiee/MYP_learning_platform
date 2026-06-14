/**
 * Public (client-safe) concept tags for MYP Geography — May 2023 · Set 1 variant.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2023_V1: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['air quality', 'patterns & trends'], keywords: ['premature deaths', '4.2 million', 'hazardous air', 'PM2.5'] },
  q1_b: { keyConcepts: ['air quality', 'systems'], keywords: ['PM2.5', 'fine particles', 'lungs', 'bloodstream', 'true'] },
  q2_: { keyConcepts: ['causality', 'air quality', 'geographic processes'], keywords: ['smog', 'PM2.5', 'fossil fuels', 'vehicles', 'cause'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'management & intervention'], keywords: ['strengths', 'limitations', 'appraisal', 'Marina Barrage', 'reservoir', 'stakeholders'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'urban heat island'], keywords: ['clear', 'focused', 'statement of inquiry', 'place', 'impact'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['worthy of investigating', 'heatwaves', 'street trees', 'shade', 'reasons'] },
  q4_c: { keyConcepts: ['investigation', 'methods'], keywords: ['challenge', 'access to equipment', 'thermometers', 'data collection'] },
  q4_d: { keyConcepts: ['sources', 'usefulness', 'reasoning'], keywords: ['satellite thermal maps', 'land-surface temperature', 'tree cover', 'hottest streets', 'beneficial'] },
  q5_: { keyConcepts: ['systems', 'networks', 'management & intervention', 'communication'], keywords: ['GIS', 'remote sensing', 'satellite imagery', 'burned area', 'evacuation', 'smoke', 'email'] },
  q6_a: { keyConcepts: ['source evaluation', 'origin'], keywords: ['origin', 'ThreadFacts', 'threadfacts.org', 'infographic'] },
  q6_b: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['purpose', 'raise awareness', 'fast fashion', 'environmental impact'] },
  q6_c: { keyConcepts: ['source evaluation', 'value'], keywords: ['value', 'data', 'textile waste', 'evidence', 'presentation'] },
  q6_d: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['limitation', 'campaign website', 'bias', 'selective', 'presentation'] },
  q7_: { keyConcepts: ['management & intervention', 'sustainability', 'disparity & equity'], keywords: ['option 1', 'option 2', 'environmental tax', 'repair', 'take-back', 'environment', 'economy'] },
  q8_: { keyConcepts: ['sustainability', 'management & intervention', 'patterns & trends', 'synthesis'], keywords: ['sustainable fashion', 'consumer choices', 'fast fashion', 'textile waste', 'regulation', 'perspectives', 'conclusion'] },
}
