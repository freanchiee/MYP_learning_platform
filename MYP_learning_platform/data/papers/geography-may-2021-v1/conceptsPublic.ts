/**
 * Public (client-safe) concept tags for MYP Geography — May 2021 · Set 1 VARIANT.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2021_V1: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['air pollution', 'data interpretation'], keywords: ['road transport', 'biggest source', 'Hazepur', 'Source B'] },
  q1_b: { keyConcepts: ['air pollution', 'data interpretation'], keywords: ['construction', 'dust', 'most', 'Marisport', 'Source B', 'comparison'] },
  q2_: { keyConcepts: ['causality', 'air pollution', 'atmosphere'], keywords: ['road transport', 'fossil fuels', 'fine particles', 'PM2.5', 'traffic', 'human activity'] },
  q3_: { keyConcepts: ['investigation', 'evaluation', 'reliability', 'validity'], keywords: ['strengths', 'limitations', 'appraisal', 'sample size', 'primary data', 'secondary data', 'bias'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'biomes'], keywords: ['clear', 'focused', 'location', 'human activity', 'statement of inquiry', 'biome'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['relevance', 'land clearance', 'habitat', 'biodiversity', 'rainforest biome', 'reasons'] },
  q4_c: { keyConcepts: ['investigation', 'methods', 'challenges'], keywords: ['challenge', 'primary data', 'plantations', 'remote', 'difficult'] },
  q4_d: { keyConcepts: ['investigation', 'methods', 'usefulness'], keywords: ['survey', 'data collection', 'land clearance', 'biodiversity', 'benefit', 'reasons'] },
  q5_: { keyConcepts: ['management & intervention', 'sustainability', 'communication', 'urban systems'], keywords: ['sustainable management', 'urban heat island', 'green roofs', 'coastal flooding', 'wetland restoration', 'Marisport', 'concluding statement'] },
  q6_a: { keyConcepts: ['source interpretation', 'flood risk'], keywords: ['flood risk', 'highlighted', 'countries', '8', 'Source D'] },
  q6_b: { keyConcepts: ['source evaluation', 'origin'], keywords: ['origin', 'World-Flood-Watch', 'Source D', 'attribution'] },
  q6_c: { keyConcepts: ['source evaluation', 'value', 'risk'], keywords: ['value', 'risk', 'river flooding', 'resident', 'choose where to live'] },
  q6_d: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['limitation', 'impact', 'flooding', 'deaths', 'resident'] },
  q7_: { keyConcepts: ['justification', 'risk', 'management & intervention', 'disparity & equity'], keywords: ['Location X', 'Cambodia', 'Location Y', 'Laos', 'floodplain', 'population density', 'flood risk'] },
  q8_: { keyConcepts: ['causality', 'risk', 'disparity & equity', 'management & intervention', 'synthesis'], keywords: ['primary effects', 'secondary effects', 'flooding', 'disease', 'displacement', 'preparedness', 'perspectives', 'conclusion'] },
}
