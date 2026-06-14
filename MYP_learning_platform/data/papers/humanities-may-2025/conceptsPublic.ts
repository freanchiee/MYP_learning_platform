/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — May 2025.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_MAY2025: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['causality', 'conflict', 'governance'], keywords: ['cause of war', 'human rights', 'dictatorship', 'resources', 'uprising'] },
  q2_: { keyConcepts: ['causality', 'conflict', 'consequences'], keywords: ['effect of war', 'displaced people', 'refugees', 'international aid', 'Second World War'] },
  q3_: { keyConcepts: ['source evaluation', 'perspectives', 'communication'], keywords: ['strengths', 'limitations', 'appraisal', 'sources', 'audience', 'exhibition'] },
  q4_a: { keyConcepts: ['investigation', 'research question'], keywords: ['research question', 'peace agreement', 'community', 'change', 'focus'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['Treaty of Versailles', 'Germany', 'hyperinflation', 'reparations', 'relevance'] },
  q4_c: { keyConcepts: ['sources', 'relevance'], keywords: ['source type', 'specific source', 'article', 'book', 'documentary'] },
  q4_d: { keyConcepts: ['source evaluation', 'usefulness', 'reliability'], keywords: ['reliable', 'usefulness', 'content', 'source type'] },
  q4_e: { keyConcepts: ['IB learner profile', 'reflection', 'investigation'], keywords: ['learner profile', 'knowledgeable', 'inquirer', 'thinker', 'attribute'] },
  q5_: { keyConcepts: ['development indicators', 'quality of life', 'communication'], keywords: ['HDI', 'education', 'GNI per capita', 'persuasive', 'call to action', 'SDGs', 'Malala'] },
  q6_a: { keyConcepts: ['source evaluation', 'origin'], keywords: ['origin', 'World Resources Institute', 'WRI', 'author'] },
  q6_b: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['purpose', 'inform', 'water stress', 'exposure'] },
  q6_c: { keyConcepts: ['source evaluation', 'value'], keywords: ['value', 'clear', 'compare', 'most affected', 'least affected'] },
  q6_d: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['limitation', 'no causes', 'mismanagement', 'scarcity', 'scope'] },
  q7_: { keyConcepts: ['global cooperation', 'governance', 'sustainability'], keywords: ['global community', 'cooperation', 'international borders', 'irrigation', 'aid'] },
  q8_: { keyConcepts: ['causality', 'sustainability', 'food security'], keywords: ['future impact', 'Africa', 'hunger', 'crops', 'drought', 'prices'] },
  q9_: { keyConcepts: ['perspectives', 'synthesis', 'sustainability', 'systems'], keywords: ['technology', 'biome', 'rainforest', 'tundra', 'deforestation', 'perspectives', 'synthesis'] },
}
