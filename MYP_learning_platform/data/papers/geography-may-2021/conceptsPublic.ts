/**
 * Public (client-safe) concept tags for MYP Geography — May 2021.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2021: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['land degradation', 'data interpretation'], keywords: ['overgrazing', 'biggest cause', 'Asia', 'Source B'] },
  q1_b: { keyConcepts: ['land degradation', 'data interpretation'], keywords: ['Asia', 'most total land degraded', 'Source B', 'comparison'] },
  q2_: { keyConcepts: ['causality', 'land degradation', 'soil systems'], keywords: ['overgrazing', 'plant cover', 'soil erosion', 'nutrients', 'fertility', 'human activity'] },
  q3_: { keyConcepts: ['investigation', 'evaluation', 'reliability', 'validity'], keywords: ['strengths', 'limitations', 'appraisal', 'sample size', 'primary data', 'secondary data', 'language barrier'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'biomes'], keywords: ['clear', 'focused', 'location', 'human activity', 'statement of inquiry', 'biome'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['relevance', 'by-catch', 'food chain', 'biodiversity', 'aquatic biome', 'reasons'] },
  q4_c: { keyConcepts: ['investigation', 'methods', 'challenges'], keywords: ['challenge', 'primary data', 'fishing industry', 'difficult'] },
  q4_d: { keyConcepts: ['investigation', 'methods', 'usefulness'], keywords: ['survey', 'data collection', 'by-catch', 'biodiversity', 'benefit', 'reasons'] },
  q5_: { keyConcepts: ['management & intervention', 'sustainability', 'communication', 'water systems'], keywords: ['sustainable management', 'agricultural run-off', 'fertilizers', 'eutrophication', 'coastal erosion', 'Portchester', 'concluding statement'] },
  q6_a: { keyConcepts: ['source interpretation', 'tectonic activity'], keywords: ['volcanic eruptions', '11–19', 'Pinatubo', 'Canlaon', 'Source D'] },
  q6_b: { keyConcepts: ['source evaluation', 'origin'], keywords: ['origin', 'GIS-Education', 'Source D', 'attribution'] },
  q6_c: { keyConcepts: ['source evaluation', 'value', 'risk'], keywords: ['value', 'risk', 'volcanic eruption', 'resident', 'choose where to live'] },
  q6_d: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['limitation', 'impact', 'tectonic activity', 'deaths', 'resident'] },
  q7_: { keyConcepts: ['justification', 'risk', 'management & intervention', 'disparity & equity'], keywords: ['Location X', 'Location Y', 'earthquakes', 'magnitude', 'epicentres', 'population density', 'risk'] },
  q8_: { keyConcepts: ['causality', 'risk', 'disparity & equity', 'management & intervention', 'synthesis'], keywords: ['primary effects', 'secondary effects', 'tsunami', 'earthquake', 'volcanic activity', 'preparedness', 'perspectives', 'conclusion'] },
}
