/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — November 2019 · VARIANT 1.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_NOV2019_V1: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['freshwater use', 'farming', 'population growth', 'rising incomes and meat/dairy consumption'], keywords: ['population growth', 'rising incomes', 'more meat and dairy consumption', 'Source A'] },
  q2_a: { keyConcepts: ['graph reading', 'prediction', 'freshwater use'], keywords: ['2640', 'km³', '2050', 'prediction'] },
  q2_b: { keyConcepts: ['biomes', 'water use change', 'habitat', 'wetland recovery / water returned to ecosystems'], keywords: ['wetland', 'forest', 'aquatic', 'desert', 'habitat', 'animals', 'increase', 'biodiversity'] },
  q3_: { keyConcepts: ['evaluation', 'strengths and limitations', 'reliability of sources', 'data validity', 'global representativeness'], keywords: ['strengths', 'limitations', 'appraisal', 'data', 'sources', 'countries', 'Pakistan', 'Egypt', 'global', 'conclusions', 'bias'] },
  q4_a: { keyConcepts: ['research question', 'clarity', 'focus', 'future trends'], keywords: ['research question', 'drip irrigation', 'population growth', 'focused', 'clear', 'place', 'product'] },
  q4_b: { keyConcepts: ['justification', 'relevance', 'future trends', 'water-use efficiency'], keywords: ['relevant', 'drip irrigation', 'reduce water', 'future', 'cotton', 'Pakistan', 'conclusions'] },
  q4_c: { keyConcepts: ['challenges of investigation', 'unpredictability', 'confounding variables', 'forecasting'], keywords: ['unpredictable', 'variables', 'future', 'challenge', 'drip irrigation', 'efficiency', 'unforeseen'] },
  q4_d: { keyConcepts: ['research methods', 'data collection'], keywords: ['interviews', 'questionnaires', 'surveys', 'observations', 'experiments', 'statistics', 'databases'] },
  q4_e: { keyConcepts: ['recording information', 'data organization'], keywords: ['spreadsheet', 'note taking', 'summarizing', 'tables', 'graphs'] },
  q5_: { keyConcepts: ['fairness and development', 'superpowers', 'empires', 'supranational institutions', 'power and privilege', 'presentation communication'], keywords: ['British Empire', 'India', 'railways', 'positive impacts', 'negative impacts', 'fairness', 'development', 'title', 'slide', 'script', 'audience'] },
  q6_: { keyConcepts: ['urban transport', 'sustainability', 'accessibility', 'environmental impact'], keywords: ['traffic congestion', 'accessibility', 'cycle network', 'walking', 'pollution', 'carbon dioxide', 'greenway', 'green space'] },
  q7_a: { keyConcepts: ['source evaluation', 'value/usefulness of a source', 'content, origin, purpose'], keywords: ['value', 'greenway', 'cycle network', 'bridges', 'green space', 'environment', 'innovation', 'urban'] },
  q7_b: { keyConcepts: ['source evaluation', 'limitations of a source', 'bias', 'scope', 'origin and purpose'], keywords: ['limitation', 'biased', 'one-sided', 'city council', 'one city', 'narrow scope', 'cost', 'construction disruption'] },
  q8_: { keyConcepts: ['technological innovation', 'quality of life', 'different perspectives', 'critical analysis and synthesis', 'essay structure'], keywords: ['vaccination', 'papermaking', 'refrigeration', 'innovation', 'quality of life', 'perspectives', 'discuss', 'introduction', 'conclusion', 'synthesize'] },
}
