/**
 * Public (client-safe) concept tags for MYP Geography — November 2022.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2022: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['causality', 'geographic processes', 'sustainability'], keywords: ['overgrazing', 'population growth', 'agriculture', 'over-farming', 'human factor'] },
  q1_b: { keyConcepts: ['geographic processes', 'patterns & trends', 'sustainability'], keywords: ['extreme weather', 'drought', 'changing weather patterns', 'natural factor'] },
  q2_: { keyConcepts: ['investigation', 'management & intervention', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'range of indices', 'sample size', 'two villages'] },
  q3_a: { keyConcepts: ['investigation', 'research question', 'sustainability'], keywords: ['clear', 'focused', 'place', 'product', 'statement of inquiry', 'selective logging'] },
  q3_b: { keyConcepts: ['investigation', 'relevance', 'causality'], keywords: ['Borneo rainforest', 'unsustainable logging', 'soil erosion', 'land degradation', 'biodiversity'] },
  q3_c: { keyConcepts: ['investigation', 'methods', 'feasibility'], keywords: ['challenge', 'primary data', 'large area', 'rainforest', 'Sabah'] },
  q3_d: { keyConcepts: ['investigation', 'sources', 'primary data'], keywords: ['primary source', 'soil quality', 'measure', 'selective logging', 'cleared area'] },
  q3_e: { keyConcepts: ['investigation', 'sources', 'secondary data'], keywords: ['secondary source', 'journal articles', 'sustainable logging', 'technology'] },
  q4_: { keyConcepts: ['systems', 'sustainability', 'causality', 'management & intervention'], keywords: ['biome', 'rainforest', 'Amazon', 'carbon sink', 'deforestation', 'CO₂', 'longwave radiation'] },
  q5_: { keyConcepts: ['global interactions', 'culture', 'disparity & equity', 'communication'], keywords: ['migration', 'positive effects', 'ageing population', 'dependency ratio', 'labour shortages', 'assimilate'] },
  q6_a: { keyConcepts: ['source evaluation', 'origin'], keywords: ['Ellen MacArthur Foundation', 'origin', 'source'] },
  q6_b: { keyConcepts: ['patterns & trends', 'globalization', 'sustainability'], keywords: ['inverse relationship', 'clothing sales increase', 'clothing use decreases', 'worn fewer times'] },
  q7_: { keyConcepts: ['source evaluation', 'value', 'globalization'], keywords: ['statistics', 'second-hand textiles', 'landfill', 'Ghana', 'extent of impact', 'reliable'] },
  q8_: { keyConcepts: ['power', 'sustainability', 'management & intervention'], keywords: ['individual responsibility', 'choice', 'buy fewer clothes', 'reduced demand', 'less landfill'] },
  q9_: { keyConcepts: ['globalization', 'sustainability', 'disparity & equity', 'synthesis'], keywords: ['trade', 'environmental sustainability', 'social sustainability', 'fast fashion', 'Kantamanto', 'landfill', 'perspectives'] },
}
