/**
 * Public (client-safe) concept tags for MYP Geography — May 2021 · Set 2 VARIANT.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2021_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['freshwater degradation', 'data interpretation'], keywords: ['irrigation', 'biggest cause', 'Indara basin', 'Source B'] },
  q1_b: { keyConcepts: ['freshwater degradation', 'data interpretation'], keywords: ['Indara', 'most total fresh water degraded', 'Source B', 'comparison'] },
  q2_: { keyConcepts: ['causality', 'freshwater degradation', 'water systems'], keywords: ['irrigation', 'over-abstraction', 'groundwater', 'water table', 'salinization', 'human activity'] },
  q3_: { keyConcepts: ['investigation', 'evaluation', 'reliability', 'validity'], keywords: ['strengths', 'limitations', 'appraisal', 'sample size', 'primary data', 'secondary data', 'bias'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'biomes'], keywords: ['clear', 'focused', 'location', 'human activity', 'statement of inquiry', 'biome'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['relevance', 'habitat loss', 'fragmentation', 'biodiversity', 'rainforest biome', 'reasons'] },
  q4_c: { keyConcepts: ['investigation', 'methods', 'challenges'], keywords: ['challenge', 'primary data', 'plantations', 'remote', 'difficult'] },
  q4_d: { keyConcepts: ['investigation', 'methods', 'usefulness'], keywords: ['field survey', 'species count', 'data collection', 'biodiversity', 'benefit', 'reasons'] },
  q5_: { keyConcepts: ['management & intervention', 'sustainability', 'communication', 'water systems'], keywords: ['sustainable management', 'glacial-lake-outburst flood', 'meltwater', 'early-warning system', 'mining pollution', 'Tarnvik', 'concluding statement'] },
  q6_a: { keyConcepts: ['source interpretation', 'wildfire hazard'], keywords: ['very high risk', 'zones', '3', 'Pinhal Ridge', 'Source D'] },
  q6_b: { keyConcepts: ['source evaluation', 'origin'], keywords: ['origin', 'Wildfire-Watch', 'Source D', 'attribution'] },
  q6_c: { keyConcepts: ['source evaluation', 'value', 'risk'], keywords: ['value', 'risk', 'wildfire', 'resident', 'choose where to live'] },
  q6_d: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['limitation', 'impact', 'wildfire', 'deaths', 'resident'] },
  q7_: { keyConcepts: ['justification', 'risk', 'management & intervention', 'disparity & equity'], keywords: ['Location X', 'Solano Hills', 'Location Y', 'Norte Plateau', 'fire frequency', 'population', 'wildfire risk'] },
  q8_: { keyConcepts: ['causality', 'risk', 'disparity & equity', 'management & intervention', 'synthesis'], keywords: ['primary effects', 'secondary effects', 'wildfire', 'smoke', 'soil erosion', 'preparedness', 'perspectives', 'conclusion'] },
}
