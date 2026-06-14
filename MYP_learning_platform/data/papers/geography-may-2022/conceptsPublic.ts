/**
 * Public (client-safe) concept tags for MYP Geography — May 2022.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2022: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['natural disasters', 'causality'], keywords: ['loss of life', 'flooding', 'destruction of houses', 'destruction of infrastructure', 'forced migration', 'tsunami'] },
  q2_: { keyConcepts: ['disparity & equity', 'causality', 'management & intervention'], keywords: ['income disparity', 'insurance', 'low-income', 'vulnerable', 'aftershocks', 'unsafe house'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'sample size', 'representative', 'missing data', 'reliability'] },
  q4_a: { keyConcepts: ['investigation', 'research question'], keywords: ['clear', 'focused', 'management strategy', 'natural disaster', 'statement of inquiry'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['land use zoning', 'protect', 'residential', 'economic activity', 'relevance', 'reasoning'] },
  q4_c: { keyConcepts: ['investigation', 'primary data'], keywords: ['interviews', 'questionnaires', 'surveys', 'primary data', 'methods'] },
  q4_d: { keyConcepts: ['investigation', 'usefulness', 'reasoning'], keywords: ['survey', 'count', 'awareness', 'strategies', 'evaluate', 'benefit'] },
  q5_: { keyConcepts: ['culture', 'globalization', 'management & intervention', 'communication'], keywords: ['tourism', 'culture', 'host community', 'Nepal', 'cultural identity', 'blog', 'sub-headings', 'advice'] },
  q6_a: { keyConcepts: ['source interpretation', 'sustainability'], keywords: ['Hammad', 'Sarhan', 'sustainable', 'surplus', 'water deficit', 'basins'] },
  q6_b: { keyConcepts: ['source evaluation', 'origin'], keywords: ['origin', 'allthatiswater.org', 'source B'] },
  q6_c: { keyConcepts: ['source evaluation', 'value', 'management & intervention'], keywords: ['precise location', 'basins', '2019 water deficit', 'surplus', 'management of extraction'] },
  q7_: { keyConcepts: ['perspectives', 'power', 'management & intervention', 'sustainability'], keywords: ['desalinization', 'freshwater', 'population', 'health', 'industry', 'groundwater', 'cost'] },
  q8_: { keyConcepts: ['source evaluation', 'limitation'], keywords: ['limitation', 'diagram', 'location', 'desalinization plants', 'distance', 'residents'] },
  q9_: { keyConcepts: ['sustainability', 'management & intervention', 'causality', 'globalization'], keywords: ['sustainable extraction', 'biodiversity loss', 'minerals', 'habitat', 'mining', 'conservation', 'perspectives', 'conclusion'] },
}
