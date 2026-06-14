/**
 * Public (client-safe) concept tags for MYP Geography — November 2024.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2024: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['patterns & trends', 'population'], keywords: ['Europe', 'over 65', 'ageing', 'population structure'] },
  q1_b: { keyConcepts: ['patterns & trends', 'population'], keywords: ['Youthful', 'Africa', 'under 15', 'over 65'] },
  q2_: { keyConcepts: ['causality', 'geographic processes', 'population'], keywords: ['ageing populations', 'life expectancy', 'health care', 'access to doctors'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'statistics', 'sample size', 'representative'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'migration'], keywords: ['clear', 'focused', 'named migration', 'place', 'statement of inquiry'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'migration'], keywords: ['Syrian refugees', 'economically active', 'dependency ratio', 'ageing populations'] },
  q4_c: { keyConcepts: ['investigation', 'methods', 'challenges'], keywords: ['challenge', 'refugees', 'interviewed', 'qualitative data'] },
  q4_d: { keyConcepts: ['investigation', 'methods', 'solutions'], keywords: ['overcome', 'quantitative data', 'survey'] },
  q4_e: { keyConcepts: ['investigation', 'primary data', 'stakeholders'], keywords: ['interview', 'Syrian refugees', 'elderly Germans', 'business owners', 'local government'] },
  q5_: { keyConcepts: ['sustainability', 'management & intervention', 'systems', 'communication'], keywords: ['natural resource extraction', 'wastewater', 'filtration', 'purification', 'heavy metals', 'persuasive', 'speech'] },
  q6_a: { keyConcepts: ['source evaluation', 'purpose'], keywords: ['inform', 'vulnerability', 'climate change', 'areas at risk'] },
  q6_b: { keyConcepts: ['source evaluation', 'value', 'reliability'], keywords: ['reliable source', 'trust', 'information', 'policy maker'] },
  q6_c: { keyConcepts: ['source evaluation', 'limitation', 'scale'], keywords: ['whole country', 'by region', 'not specific', 'scale'] },
  q7_: { keyConcepts: ['causality', 'disparity & equity', 'management & intervention', 'scale'], keywords: ['Barcelona', 'Madrid', 'elevation', 'coastal flooding', 'port', 'exports', 'trade'] },
  q8_: { keyConcepts: ['global interactions', 'systems', 'sustainability', 'disparity & equity', 'synthesis'], keywords: ['climate change', 'all countries', 'COP27', 'emissions', 'high-income', 'low-income', 'perspectives', 'conclusion'] },
}
