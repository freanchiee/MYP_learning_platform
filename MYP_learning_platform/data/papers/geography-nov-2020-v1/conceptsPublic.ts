/**
 * Public (client-safe) concept tags for MYP Geography — November 2020 · VARIANT 1.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2020_V1: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['globalization', 'development', 'aid'], keywords: ['Water & Sanitation', 'aid', 'funding', 'largest'] },
  q1_b: { keyConcepts: ['development', 'HDI'], keywords: ['HDI', 'life expectancy at birth', 'indicator'] },
  q2_: { keyConcepts: ['globalization', 'aid', 'development', 'causality'], keywords: ['clean water', 'sanitation', 'waterborne disease', 'income', 'life expectancy'] },
  q3_a: { keyConcepts: ['investigation', 'research question', 'globalization'], keywords: ['clear', 'focused', 'specific community', 'type of aid', 'rural Kenya'] },
  q3_b: { keyConcepts: ['investigation', 'relevance', 'disparity & equity'], keywords: ['global interaction', 'inequality', 'water access', 'rural', 'relevance'] },
  q3_c: { keyConcepts: ['investigation', 'stakeholders'], keywords: ['nurses', 'Government water officials', 'residents', 'interview'] },
  q3_d: { keyConcepts: ['sources', 'primary data'], keywords: ['photographs', 'surveys', 'water point', 'household water access'] },
  q3_e: { keyConcepts: ['sources', 'secondary data'], keywords: ['government website', 'newspaper article', 'aid'] },
  q4_: { keyConcepts: ['investigation', 'evaluation', 'reliability', 'bias'], keywords: ['strengths', 'limitations', 'appraisal', 'categories', 'bias', 'secondary sources'] },
  q5_a: { keyConcepts: ['plate tectonics', 'geographic processes'], keywords: ['convergent', 'destructive', 'subduction', 'earthquake', 'tsunami', 'plate boundary'] },
  q5_b: { keyConcepts: ['plate tectonics', 'management & intervention', 'communication'], keywords: ['convergent boundary', 'subduction', 'seismic waves', 'tsunami', 'early-warning system', 'Japan', 'GDP', 'email'] },
  q6_a: { keyConcepts: ['source evaluation', 'origin'], keywords: ['Water Footprint Network', 'waterfootprint.org', 'origin'] },
  q6_b: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['purpose', 'relationship', 'population', 'water footprint'] },
  q6_c: { keyConcepts: ['source evaluation', 'value'], keywords: ['key', 'compare', 'relationship', '2017', 'reliable'] },
  q6_d: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['proportions', 'actual water use', 'no management', 'one year'] },
  q7_: { keyConcepts: ['sustainability', 'management & intervention', 'causality'], keywords: ['mitigation', 'adaptation', 'causes', 'effects', 'coastal defences', 'sustainable'] },
  q8_: { keyConcepts: ['sustainability', 'power', 'globalization', 'synthesis'], keywords: ['water footprint', 'population share', 'water scarcity', 'UN', 'mandatory', 'perspectives', 'conclusion'] },
}
