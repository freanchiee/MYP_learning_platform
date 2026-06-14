/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — November 2019.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_NOV2019: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['land use', 'farming', 'population growth', 'wealth and meat consumption'], keywords: ['population growth', 'increasing wealth', 'more meat consumption', 'Source A'] },
  q2_a: { keyConcepts: ['graph reading', 'prediction', 'land use'], keywords: ['1420', 'MHa', '2050', 'prediction'] },
  q2_b: { keyConcepts: ['biomes', 'land use change', 'habitat', 'rewilding / land returned to nature'], keywords: ['grassland', 'forest', 'aquatic', 'desert', 'habitat', 'animals', 'increase', 'biodiversity'] },
  q3_: { keyConcepts: ['evaluation', 'strengths and limitations', 'reliability of sources', 'data validity', 'global representativeness'], keywords: ['strengths', 'limitations', 'appraisal', 'data', 'sources', 'countries', 'Brazil', 'global', 'conclusions', 'bias'] },
  q4_a: { keyConcepts: ['research question', 'clarity', 'focus', 'future trends'], keywords: ['research question', 'fertilizers', 'population growth', 'focused', 'clear', 'place', 'product'] },
  q4_b: { keyConcepts: ['justification', 'relevance', 'future trends', 'land use efficiency'], keywords: ['relevant', 'fertilizers', 'decrease land', 'future', 'sugarcane', 'Kenya', 'conclusions'] },
  q4_c: { keyConcepts: ['challenges of investigation', 'unpredictability', 'confounding variables', 'forecasting'], keywords: ['unpredictable', 'variables', 'future', 'challenge', 'fertilizer', 'yields', 'unforeseen'] },
  q4_d: { keyConcepts: ['research methods', 'data collection'], keywords: ['interviews', 'questionnaires', 'surveys', 'observations', 'experiments', 'statistics', 'databases'] },
  q4_e: { keyConcepts: ['recording information', 'data organization'], keywords: ['spreadsheet', 'note taking', 'summarizing', 'tables', 'graphs'] },
  q5_: { keyConcepts: ['fairness and development', 'superpowers', 'empires', 'supranational institutions', 'peace and conflict', 'presentation communication'], keywords: ['United Nations', 'USSR', 'Korea', 'positive impacts', 'negative impacts', 'fairness', 'development', 'title', 'slide', 'script', 'audience'] },
  q6_: { keyConcepts: ['urban transport', 'sustainability', 'accessibility', 'environmental impact'], keywords: ['traffic congestion', 'accessibility', 'mass transit', 'electricity', 'pollution', 'carbon monoxide', 'tramway', 'cleaner energy'] },
  q7_a: { keyConcepts: ['source evaluation', 'value/usefulness of a source', 'content, origin, purpose'], keywords: ['value', 'tramway', 'images', 'stations', 'electricity', 'environment', 'innovation', 'urban'] },
  q7_b: { keyConcepts: ['source evaluation', 'limitations of a source', 'bias', 'scope', 'origin and purpose'], keywords: ['limitation', 'biased', 'one-sided', 'local government', 'one city', 'narrow scope', 'construction disruption'] },
  q8_: { keyConcepts: ['technological innovation', 'quality of life', 'different perspectives', 'critical analysis and synthesis', 'essay structure'], keywords: ['internet', 'compass', 'printing press', 'internal combustion engine', 'innovation', 'quality of life', 'perspectives', 'discuss', 'introduction', 'conclusion', 'synthesize'] },
}
