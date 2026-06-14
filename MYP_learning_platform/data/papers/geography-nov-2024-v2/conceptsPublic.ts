/**
 * Public (client-safe) concept tags for MYP Geography — November 2024 · Set 2 variant.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2024_V2: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['patterns & trends', 'population'], keywords: ['Asia', 'coastal zone', 'low-elevation', 'population'] },
  q1_b: { keyConcepts: ['patterns & trends', 'population'], keywords: ['Low', 'Latin America/Caribbean', 'coastal zone', 'coastal exposure'] },
  q2_: { keyConcepts: ['causality', 'geographic processes', 'land use'], keywords: ['deforestation', 'farmland', 'demand for food', 'crops', 'cattle'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'satellite data', 'sample size', 'representative'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'migration'], keywords: ['clear', 'focused', 'environmental migration', 'place', 'statement of inquiry'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'migration'], keywords: ['displaced', 'flooding', 'economically active', 'dependency ratio', 'population structure'] },
  q4_c: { keyConcepts: ['investigation', 'methods', 'challenges'], keywords: ['challenge', 'displaced people', 'hard to trace', 'qualitative data'] },
  q4_d: { keyConcepts: ['investigation', 'methods', 'solutions'], keywords: ['overcome', 'quantitative data', 'survey'] },
  q4_e: { keyConcepts: ['investigation', 'primary data', 'stakeholders'], keywords: ['interview', 'displaced families', 'host-city residents', 'aid workers', 'local government'] },
  q5_: { keyConcepts: ['sustainability', 'management & intervention', 'systems', 'communication'], keywords: ['sustainable farming', 'land use', 'zero-deforestation', 'cover crops', 'soil fertility', 'persuasive', 'speech'] },
  q6_a: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['inform', 'tropical cyclone', 'risk', 'countries at risk'] },
  q6_b: { keyConcepts: ['source evaluation', 'value', 'reliability'], keywords: ['reliable source', 'trust', 'information', 'policy maker'] },
  q6_c: { keyConcepts: ['source evaluation', 'limitation', 'scale'], keywords: ['whole country', 'by region', 'not specific', 'scale'] },
  q7_: { keyConcepts: ['causality', 'disparity & equity', 'management & intervention', 'scale'], keywords: ['Manila', 'Cebu City', 'low-lying', 'density', 'typhoon', 'exports', 'trade'] },
  q8_: { keyConcepts: ['global interactions', 'systems', 'sustainability', 'disparity & equity', 'synthesis'], keywords: ['deforestation', 'biodiversity loss', 'all countries', 'COP15', 'forests', 'high-income', 'low-income', 'perspectives', 'conclusion'] },
}
