/**
 * Public (client-safe) concept tags for MYP Geography — November 2022 · Set 1 VARIANT (v1).
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2022_V1: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['causality', 'geographic processes', 'sustainability'], keywords: ['irrigation', 'water diversion', 'cotton', 'overgrazing', 'population growth', 'human factor'] },
  q1_b: { keyConcepts: ['geographic processes', 'patterns & trends', 'sustainability'], keywords: ['evaporation', 'drought', 'arid climate', 'salt and dust storms', 'natural factor'] },
  q2_: { keyConcepts: ['investigation', 'management & intervention', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'range of indices', 'sample size', 'two villages'] },
  q3_a: { keyConcepts: ['investigation', 'research question', 'sustainability'], keywords: ['clear', 'focused', 'place', 'product', 'statement of inquiry', 'mangrove restoration'] },
  q3_b: { keyConcepts: ['investigation', 'relevance', 'causality'], keywords: ['Sundarbans mangroves', 'shrimp farming', 'coastal erosion', 'land degradation', 'biodiversity'] },
  q3_c: { keyConcepts: ['investigation', 'methods', 'feasibility'], keywords: ['challenge', 'primary data', 'large area', 'mangroves', 'Sundarbans'] },
  q3_d: { keyConcepts: ['investigation', 'sources', 'primary data'], keywords: ['primary source', 'water salinity', 'measure', 'replanted mangrove', 'unprotected coast'] },
  q3_e: { keyConcepts: ['investigation', 'sources', 'secondary data'], keywords: ['secondary source', 'journal articles', 'mangrove restoration', 'technology'] },
  q4_: { keyConcepts: ['systems', 'sustainability', 'causality', 'management & intervention'], keywords: ['biome', 'aquatic biome', 'mangroves', 'blue carbon', 'sediment', 'CO₂', 'longwave radiation'] },
  q5_: { keyConcepts: ['global interactions', 'culture', 'disparity & equity', 'communication'], keywords: ['migration', 'positive effects', 'ageing population', 'dependency ratio', 'labour shortages', 'assimilate'] },
  q6_a: { keyConcepts: ['source evaluation', 'origin'], keywords: ['Global E-waste Monitor', 'origin', 'source'] },
  q6_b: { keyConcepts: ['patterns & trends', 'globalization', 'sustainability'], keywords: ['inverse relationship', 'e-waste generated increases', 'recycling rate decreases', 'smaller proportion recycled'] },
  q7_: { keyConcepts: ['source evaluation', 'value', 'globalization'], keywords: ['statistics', 'imported e-waste', 'Agbogbloshie', 'burned', 'Ghana', 'extent of impact', 'reliable'] },
  q8_: { keyConcepts: ['power', 'sustainability', 'management & intervention'], keywords: ['individual responsibility', 'choice', 'repair devices', 'reduced demand', 'less e-waste'] },
  q9_: { keyConcepts: ['globalization', 'sustainability', 'disparity & equity', 'synthesis'], keywords: ['trade', 'environmental sustainability', 'social sustainability', 'e-waste', 'Agbogbloshie', 'recycling', 'perspectives'] },
}
