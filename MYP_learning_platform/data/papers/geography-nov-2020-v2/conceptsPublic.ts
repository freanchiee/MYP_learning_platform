/**
 * Public (client-safe) concept tags for MYP Geography — November 2020 · VARIANT 2.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2020_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['globalization', 'development', 'aid'], keywords: ['Food Security & Agriculture', 'aid', 'funding', 'largest'] },
  q1_b: { keyConcepts: ['development', 'HDI'], keywords: ['HDI', 'life expectancy at birth', 'indicator'] },
  q2_: { keyConcepts: ['globalization', 'aid', 'development', 'causality'], keywords: ['sustainable agriculture', 'climate-smart', 'food security', 'income', 'life expectancy'] },
  q3_a: { keyConcepts: ['investigation', 'research question', 'globalization'], keywords: ['clear', 'focused', 'specific community', 'type of aid', 'rural Malawi'] },
  q3_b: { keyConcepts: ['investigation', 'relevance', 'disparity & equity'], keywords: ['global interaction', 'inequality', 'food security', 'rural', 'relevance'] },
  q3_c: { keyConcepts: ['investigation', 'stakeholders'], keywords: ['smallholder farmers', 'Government agriculture officials', "women's farmer group", 'interview'] },
  q3_d: { keyConcepts: ['sources', 'primary data'], keywords: ['photographs', 'surveys', 'field', 'harvest sizes'] },
  q3_e: { keyConcepts: ['sources', 'secondary data'], keywords: ['government website', 'newspaper article', 'aid'] },
  q4_: { keyConcepts: ['investigation', 'evaluation', 'reliability', 'bias'], keywords: ['strengths', 'limitations', 'appraisal', 'categories', 'bias', 'secondary sources'] },
  q5_a: { keyConcepts: ['plate tectonics', 'geographic processes'], keywords: ['convergent', 'destructive', 'subduction', 'volcanic activity', 'earthquake', 'plate boundary'] },
  q5_b: { keyConcepts: ['plate tectonics', 'management & intervention', 'communication'], keywords: ['convergent boundary', 'subduction', 'magma', 'volcanic activity', 'Vesuvius', 'monitoring', 'evacuation', 'Italy', 'GDP', 'email'] },
  q6_a: { keyConcepts: ['source evaluation', 'origin'], keywords: ['Global Footprint Network', 'footprintnetwork.org', 'origin'] },
  q6_b: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['purpose', 'relationship', 'population', 'ecological footprint'] },
  q6_c: { keyConcepts: ['source evaluation', 'value'], keywords: ['compare', 'side by side', 'relationship', '2017', 'reliable'] },
  q6_d: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['proportions', 'actual land area', 'no management', 'one year'] },
  q7_: { keyConcepts: ['sustainability', 'management & intervention', 'causality'], keywords: ['mitigation', 'adaptation', 'causes', 'effects', 'sea walls', 'sustainable'] },
  q8_: { keyConcepts: ['sustainability', 'power', 'globalization', 'synthesis'], keywords: ['ecological footprint', 'population share', 'Earth Overshoot', 'Paris Agreement', 'mandatory', 'perspectives', 'conclusion'] },
}
