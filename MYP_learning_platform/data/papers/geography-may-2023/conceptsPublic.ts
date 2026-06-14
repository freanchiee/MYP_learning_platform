/**
 * Public (client-safe) concept tags for MYP Geography — May 2023.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2023: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['climate change', 'patterns & trends'], keywords: ['flood risk', '170%', '2°C', 'extreme weather'] },
  q1_b: { keyConcepts: ['biodiversity', 'systems'], keywords: ['biodiversity', 'plants', 'animals', 'bacteria', 'fungi', 'true'] },
  q2_: { keyConcepts: ['causality', 'climate change', 'geographic processes'], keywords: ['coral bleaching', 'sea temperature', 'algae', 'food source', 'cause'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'management & intervention'], keywords: ['strengths', 'limitations', 'appraisal', 'water plaza', 'flood risk', 'stakeholders'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'climate change'], keywords: ['clear', 'focused', 'statement of inquiry', 'place', 'impact'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['worthy of investigating', 'low-lying', 'sea-level rise', 'flood barriers', 'reasons'] },
  q4_c: { keyConcepts: ['investigation', 'methods'], keywords: ['challenge', 'language barriers', 'data collection', 'access'] },
  q4_d: { keyConcepts: ['sources', 'usefulness', 'reasoning'], keywords: ['topographic maps', 'low-lying areas', 'relief', 'settlements', 'beneficial'] },
  q5_: { keyConcepts: ['systems', 'networks', 'management & intervention', 'communication'], keywords: ['GIS', 'layers', 'hazard zones', 'vulnerability', 'evacuation', 'expensive', 'email'] },
  q6_a: { keyConcepts: ['source evaluation', 'origin'], keywords: ['origin', 'Galapagos Daily', 'galapagosdaily.com', 'video'] },
  q6_b: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['purpose', 'educate', 'tourism', 'impact', 'Galapagos Islands'] },
  q6_c: { keyConcepts: ['source evaluation', 'value'], keywords: ['value', 'data', 'tourism', 'reliable', 'presentation'] },
  q6_d: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['limitation', 'only Galapagos Islands', 'examples', 'presentation'] },
  q7_: { keyConcepts: ['management & intervention', 'sustainability', 'disparity & equity'], keywords: ['option 1', 'option 2', 'entry fee', 'local tourist guide', 'jobs', 'environment', 'economy'] },
  q8_: { keyConcepts: ['sustainability', 'management & intervention', 'patterns & trends', 'synthesis'], keywords: ['sustainable tourism', 'tourist numbers', 'Galápagos', 'invasive species', 'waste', 'management', 'perspectives', 'conclusion'] },
}
