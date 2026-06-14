/**
 * Public (client-safe) concept tags for MYP Geography — November 2022 · Set 2 variant (v2).
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2022_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['causality', 'geographic processes', 'sustainability'], keywords: ['deforestation', 'over-cultivation', 'overgrazing', 'population growth', 'human factor'] },
  q1_b: { keyConcepts: ['geographic processes', 'patterns & trends', 'sustainability'], keywords: ['heavy rainfall', 'drought', 'strong winds', 'natural factor'] },
  q2_: { keyConcepts: ['investigation', 'management & intervention', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'range of indices', 'sample size', 'two villages'] },
  q3_a: { keyConcepts: ['investigation', 'research question', 'sustainability'], keywords: ['clear', 'focused', 'place', 'product', 'statement of inquiry', 'peatland rewetting'] },
  q3_b: { keyConcepts: ['investigation', 'relevance', 'causality'], keywords: ['Flow Country', 'peatland drainage', 'carbon release', 'habitat loss', 'rewetting'] },
  q3_c: { keyConcepts: ['investigation', 'methods', 'feasibility'], keywords: ['challenge', 'primary data', 'large area', 'waterlogged', 'Flow Country'] },
  q3_d: { keyConcepts: ['investigation', 'sources', 'primary data'], keywords: ['primary source', 'water-table depth', 'measure', 'rewetting', 'drained area'] },
  q3_e: { keyConcepts: ['investigation', 'sources', 'secondary data'], keywords: ['secondary source', 'journal articles', 'peatland rewetting', 'technology'] },
  q4_: { keyConcepts: ['systems', 'sustainability', 'causality', 'management & intervention'], keywords: ['biome', 'Arctic tundra', 'permafrost', 'carbon store', 'thaw', 'CO₂', 'methane'] },
  q5_: { keyConcepts: ['global interactions', 'culture', 'disparity & equity', 'communication'], keywords: ['migration', 'positive effects', 'ageing population', 'dependency ratio', 'labour shortages', 'assimilate'] },
  q6_a: { keyConcepts: ['source evaluation', 'origin'], keywords: ['OECD', 'Global Plastics Outlook', 'origin', 'source'] },
  q6_b: { keyConcepts: ['patterns & trends', 'globalization', 'sustainability'], keywords: ['inverse relationship', 'plastic waste increases', 'recycled share decreases', 'smaller proportion recycled'] },
  q7_: { keyConcepts: ['source evaluation', 'value', 'globalization'], keywords: ['figures', 'imported plastic waste', 'Indonesia', 'scale of impact', 'reliable'] },
  q8_: { keyConcepts: ['power', 'sustainability', 'management & intervention'], keywords: ['individual responsibility', 'choice', 'refuse single-use plastic', 'reduced demand', 'less dumped'] },
  q9_: { keyConcepts: ['globalization', 'sustainability', 'disparity & equity', 'synthesis'], keywords: ['trade', 'environmental sustainability', 'social sustainability', 'plastic waste', 'recycling trade', 'Indonesia', 'perspectives'] },
}
