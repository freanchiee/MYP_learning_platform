/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — November 2019 · VARIANT 2.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_NOV2019_V2: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['forest cover', 'farming', 'population growth', 'rising incomes and meat consumption'], keywords: ['population growth', 'rising incomes', 'more meat consumption', 'Source A'] },
  q2_a: { keyConcepts: ['graph reading', 'prediction', 'forest cover'], keywords: ['4120', 'MHa', '2050', 'prediction'] },
  q2_b: { keyConcepts: ['biomes', 'forest cover change', 'habitat', 'reforestation / land returned to nature'], keywords: ['forest', 'grassland', 'aquatic', 'desert', 'habitat', 'animals', 'increase', 'biodiversity'] },
  q3_: { keyConcepts: ['evaluation', 'strengths and limitations', 'reliability of sources', 'data validity', 'global representativeness'], keywords: ['strengths', 'limitations', 'appraisal', 'data', 'sources', 'countries', 'Bolivia', 'Malaysia', 'global', 'conclusions', 'bias'] },
  q4_a: { keyConcepts: ['research question', 'clarity', 'focus', 'future trends'], keywords: ['research question', 'higher-yield seeds', 'population growth', 'focused', 'clear', 'place', 'product'] },
  q4_b: { keyConcepts: ['justification', 'relevance', 'future trends', 'land-use efficiency'], keywords: ['relevant', 'higher-yield seeds', 'reduce clearance', 'future', 'maize', 'Brazil', 'conclusions'] },
  q4_c: { keyConcepts: ['challenges of investigation', 'unpredictability', 'confounding variables', 'forecasting'], keywords: ['unpredictable', 'variables', 'future', 'challenge', 'higher-yield seeds', 'yields', 'unforeseen'] },
  q4_d: { keyConcepts: ['research methods', 'data collection'], keywords: ['interviews', 'questionnaires', 'surveys', 'observations', 'experiments', 'statistics', 'databases'] },
  q4_e: { keyConcepts: ['recording information', 'data organization'], keywords: ['spreadsheet', 'note taking', 'summarizing', 'tables', 'graphs'] },
  q5_: { keyConcepts: ['fairness and development', 'superpowers', 'empires', 'supranational institutions', 'health and inequality', 'presentation communication'], keywords: ['World Health Organization', 'WHO', 'smallpox', 'positive impacts', 'negative impacts', 'fairness', 'development', 'title', 'slide', 'script', 'audience'] },
  q6_: { keyConcepts: ['urban energy', 'sustainability', 'reliability and affordability', 'environmental impact'], keywords: ['reliable', 'affordable', 'battery storage', 'blackout', 'solar', 'coal', 'pollution', 'emissions', 'microgrid'] },
  q7_a: { keyConcepts: ['source evaluation', 'value/usefulness of a source', 'content, origin, purpose'], keywords: ['value', 'microgrid', 'solar panels', 'battery storage', 'environment', 'innovation', 'urban', 'coal'] },
  q7_b: { keyConcepts: ['source evaluation', 'limitations of a source', 'bias', 'scope', 'origin and purpose'], keywords: ['limitation', 'biased', 'one-sided', 'city government', 'one city', 'narrow scope', 'cost', 'access'] },
  q8_: { keyConcepts: ['technological innovation', 'quality of life', 'different perspectives', 'critical analysis and synthesis', 'essay structure'], keywords: ['telephone', 'waterwheel', 'electric light', 'innovation', 'quality of life', 'perspectives', 'discuss', 'introduction', 'conclusion', 'synthesize'] },
}
