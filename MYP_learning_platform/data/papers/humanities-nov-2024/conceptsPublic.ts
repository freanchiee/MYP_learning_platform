/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — November 2024.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_NOV2024: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['international migration', 'data interpretation', 'regional comparison'], keywords: ['Europe', 'Asia', 'largest increase', 'millions'] },
  q2_: { keyConcepts: ['migration', 'push and pull factors', 'labour demand'], keywords: ['jobs', 'workers', 'ageing population', 'economic opportunity', 'conflict'] },
  q3_: { keyConcepts: ['migration impacts', 'economic development', 'remittances', 'brain drain/gain'], keywords: ['skills', 'economy', 'remittances', 'labour', 'culture', 'population'] },
  q4_: { keyConcepts: ['evaluation', 'research methods', 'validity', 'data collection', 'social integration'], keywords: ['strength', 'limitation', 'appraisal', 'survey', 'valid data', 'sense of belonging', 'language', 'schooling', 'healthcare', 'political participation'] },
  q5_a: { keyConcepts: ['research question', 'economic integration', 'focus and clarity'], keywords: ['clear', 'focused', 'research question', 'location', 'time period', 'specific sector'] },
  q5_b: { keyConcepts: ['justification', 'relevance', 'indicators', 'economic integration'], keywords: ['unemployment rate', 'indicator', 'economic conditions', 'local government', 'relevant', 'reasoning'] },
  q5_c: { keyConcepts: ['source evaluation', 'usefulness', 'economic integration', 'explanation'], keywords: ['wage statistics', 'cost of living', 'benefit', 'limitation', 'reasons', 'economic integration'] },
  q5_d: { keyConcepts: ['research challenges', 'data collection', 'ethics', 'economic integration'], keywords: ['participants', 'interview', 'financial situation', 'access to data', 'willingness'] },
  q6_: { keyConcepts: ['human rights', 'social protest movements', 'civic engagement', 'speech writing'], keywords: ['Black Lives Matter', 'right to inclusion', 'racial discrimination', 'opening statement', 'closing statement', 'rhetorical questions', 'community', 'policy change'] },
  q7_a: { keyConcepts: ['origin', 'source evaluation', 'OPVL'], keywords: ['Xein Environmental', 'charity', 'origin'] },
  q7_b: { keyConcepts: ['purpose', 'source evaluation', 'OPVL'], keywords: ['educate', 'inform', 'circular economy', 'linear economy', 'sustainability', 'gain support'] },
  q7_c: { keyConcepts: ['value', 'source evaluation', 'OPVL', 'circular economy'], keywords: ['definition', 'circular economy', 'sustainability', 'reusing resources', 'reducing waste'] },
  q7_d: { keyConcepts: ['limitation', 'source evaluation', 'OPVL', 'circular economy'], keywords: ['lack of detail', 'implementation', 'transition', 'bias', 'linear economy', 'sustainability'] },
  q8_: { keyConcepts: ['circular economy', 'linear economy', 'sustainability', 'justification'], keywords: ['resources', 'reuse', 'textiles', 'waste', 'landfill', 'pollution', 'sustainable'] },
  q9_: { keyConcepts: ['development indicators', 'GDP', 'HDI', 'perspectives', 'synthesis', 'quality of life'], keywords: ['GDP', 'HDI', 'development indicators', 'population dynamics', 'education', 'quality of life', 'perspectives', 'conclusion', 'examples'] },
}
