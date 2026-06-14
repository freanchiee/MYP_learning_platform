/**
 * Public (client-safe) concept tags for MYP Geography — November 2023.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2023: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['place', 'scale', 'map skills'], keywords: ['coastal rocks', 'Point Kean', 'grid reference', '5003', 'topographic map'] },
  q1_b: { keyConcepts: ['place', 'space', 'map skills'], keywords: ['compass direction', 'East', 'East South East', 'Māori Leap Caves', 'racecourse'] },
  q2_: { keyConcepts: ['management & intervention', 'sustainability', 'place'], keywords: ['positive impact', 'Option A', 'Option B', 'fee', 'car park', 'walkway', 'South Bay Lookout', 'map reference'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'], keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'traffic count', 'interviews', 'reliability'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'global interactions'], keywords: ['clear', 'focused', 'location', 'community', 'statement of inquiry', 'tourism', 'culture'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning', 'global interactions'], keywords: ['relevance', 'interactions', 'culture', 'way of life', 'reasons', 'worthy of investigating'] },
  q4_c: { keyConcepts: ['sources', 'GIS', 'methods'], keywords: ['GIS map', 'benefit', 'limitation', 'compare data sets', 'spatially', 'patterns', 'cultural elements'] },
  q4_d: { keyConcepts: ['sources', 'secondary data'], keywords: ['government statistics', 'encyclopedia entry', 'journal article', 'documentary footage', 'specific'] },
  q4_e: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['challenge', 'sample size', 'survey', 'validity', 'primary data', 'access'] },
  q5_: { keyConcepts: ['globalization', 'sustainability', 'disparity & equity', 'communication'], keywords: ['sustainable trade', 'SDG', 'gender equality', 'fair trade', 'tariffs', 'coffee', 'Ethiopia', 'women', 'report', 'title', 'sub-headings'] },
  q6_: { keyConcepts: ['sustainability', 'geographic processes', 'causality'], keywords: ['biome', 'over-exploitation', 'overgrazing', 'pollution', 'deforestation', 'land-use change', 'desertification', 'biodiversity', 'greatest threat'] },
  q7_a: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['purpose', 'inform', 'Coral Triangle', 'threats', 'human activities', 'infographic'] },
  q7_b: { keyConcepts: ['source evaluation', 'value'], keywords: ['value', 'statistics', 'tuna', 'unsustainable fishing', 'marine biologist', 'fish population'] },
  q7_c: { keyConcepts: ['source evaluation', 'limitation', 'reliability'], keywords: ['limitation', 'sources not cited', 'unreliable', 'credibility', 'marine biologist', 'data'] },
  q8_: { keyConcepts: ['sustainability', 'management & intervention', 'disparity & equity', 'causality', 'synthesis'], keywords: ['sustainable management', 'biome', 'economic development', 'Amazon', 'deforestation', 'ecotourism', 'biodiversity', 'perspectives', 'conclusion'] },
}
