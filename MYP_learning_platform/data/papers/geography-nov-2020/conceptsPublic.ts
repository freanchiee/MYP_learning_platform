/**
 * Public (client-safe) concept tags for MYP Geography — November 2020.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2020: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['globalization', 'development', 'aid'], keywords: ['Education', 'aid', 'funding', 'largest'] },
  q1_b: { keyConcepts: ['development', 'HDI'], keywords: ['HDI', 'life expectancy at birth', 'indicator'] },
  q2_: { keyConcepts: ['globalization', 'aid', 'development', 'causality'], keywords: ['education', 'qualifications', 'higher-paid jobs', 'tax', 'life expectancy'] },
  q3_a: { keyConcepts: ['investigation', 'research question', 'globalization'], keywords: ['clear', 'focused', 'specific community', 'type of aid', 'rural Laos'] },
  q3_b: { keyConcepts: ['investigation', 'relevance', 'disparity & equity'], keywords: ['global interaction', 'gender inequality', 'enrolment', 'rural', 'relevance'] },
  q3_c: { keyConcepts: ['investigation', 'stakeholders'], keywords: ['teachers', 'Government officials', 'students', 'interview'] },
  q3_d: { keyConcepts: ['sources', 'primary data'], keywords: ['photographs', 'surveys', 'classrooms', 'enrolment'] },
  q3_e: { keyConcepts: ['sources', 'secondary data'], keywords: ['government website', 'newspaper article', 'aid'] },
  q4_: { keyConcepts: ['investigation', 'evaluation', 'reliability', 'bias'], keywords: ['strengths', 'limitations', 'appraisal', 'categories', 'bias', 'secondary sources'] },
  q5_a: { keyConcepts: ['plate tectonics', 'geographic processes'], keywords: ['transform', 'conservative', 'divergent', 'earthquake', 'volcanic activity', 'plate boundary'] },
  q5_b: { keyConcepts: ['plate tectonics', 'management & intervention', 'communication'], keywords: ['conservative boundary', 'seismic waves', 'building codes', 'cross-bracing', 'Japan', 'GDP', 'email'] },
  q6_a: { keyConcepts: ['source evaluation', 'origin'], keywords: ['Global Footprint Network', 'footprintnetwork.org', 'origin'] },
  q6_b: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['purpose', 'relationship', 'population', 'carbon footprint'] },
  q6_c: { keyConcepts: ['source evaluation', 'value'], keywords: ['key', 'compare', 'relationship', '2017', 'reliable'] },
  q6_d: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['proportions', 'actual carbon', 'no management', 'one year'] },
  q7_: { keyConcepts: ['sustainability', 'management & intervention', 'causality'], keywords: ['mitigation', 'adaptation', 'causes', 'effects', 'sea walls', 'sustainable'] },
  q8_: { keyConcepts: ['sustainability', 'power', 'globalization', 'synthesis'], keywords: ['carbon footprint', 'population share', 'Paris Agreement', 'IPCC', 'mandatory', 'perspectives', 'conclusion'] },
}
