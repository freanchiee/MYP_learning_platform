/**
 * Public (client-safe) concept tags for MYP Geography — November 2023 · Set 2 variant.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2023_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['place', 'scale', 'map skills'], keywords: ['boat jetty', 'landing jetty', 'marker ①', 'west coast', 'visitor map'] },
  q1_b: { keyConcepts: ['place', 'space', 'map skills'], keywords: ['compass direction', 'East', 'East North East', 'ranger station', 'dragon viewing platform'] },
  q2_: { keyConcepts: ['management & intervention', 'sustainability', 'place'], keywords: ['positive impact', 'Option A', 'Option B', 'entry fee', 'car park', 'boardwalk', 'viewing platform', 'map reference'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'], keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'visitor count', 'interviews', 'reliability'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'global interactions'], keywords: ['clear', 'focused', 'location', 'community', 'statement of inquiry', 'tourism', 'culture'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning', 'global interactions'], keywords: ['relevance', 'interactions', 'culture', 'way of life', 'reasons', 'worthy of investigating'] },
  q4_c: { keyConcepts: ['sources', 'GIS', 'methods'], keywords: ['GIS map', 'benefit', 'limitation', 'compare data sets', 'spatially', 'patterns', 'cultural elements'] },
  q4_d: { keyConcepts: ['sources', 'secondary data'], keywords: ['tourist board statistics', 'encyclopedia entry', 'journal article', 'documentary footage', 'specific'] },
  q4_e: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['challenge', 'sample size', 'survey', 'validity', 'primary data', 'access'] },
  q5_: { keyConcepts: ['globalization', 'sustainability', 'disparity & equity', 'communication'], keywords: ['sustainable trade', 'SDG', 'gender equality', 'fair trade', 'tariffs', 'shea butter', 'Burkina Faso', 'women', 'cooperatives', 'report', 'title', 'sub-headings'] },
  q6_: { keyConcepts: ['sustainability', 'geographic processes', 'causality'], keywords: ['biome', 'grassland', 'over-exploitation', 'overgrazing', 'pollution', 'deforestation', 'land-use change', 'desertification', 'biodiversity', 'greatest threat'] },
  q7_a: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['purpose', 'inform', 'Sundarbans', 'mangrove', 'decline', 'over time', 'chart'] },
  q7_b: { keyConcepts: ['source evaluation', 'value'], keywords: ['value', 'figures', 'mangrove cover', '1990–2020', 'ecologist', 'rate of loss'] },
  q7_c: { keyConcepts: ['source evaluation', 'limitation', 'reliability'], keywords: ['limitation', 'no raw data', 'unverifiable', 'accuracy', 'ecologist', 'measurement'] },
  q8_: { keyConcepts: ['sustainability', 'management & intervention', 'disparity & equity', 'causality', 'synthesis'], keywords: ['sustainable management', 'biome', 'economic development', 'grassland', 'Sahel', 'desertification', 'ecotourism', 'biodiversity', 'perspectives', 'conclusion'] },
}
