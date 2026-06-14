/**
 * Public (client-safe) concept tags for MYP Geography — May 2024 · Set 1 VARIANT.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2024_V1: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['geographic processes', 'systems'], keywords: ['deposition', 'weathering', 'abrasion', 'transportation', 'mass movement'] },
  q1_b: { keyConcepts: ['causality', 'geographic processes', 'management & intervention'], keywords: ['deposition', 'sediment', 'silt up', 'harbour', 'fishing community', 'threaten communities'] },
  q2_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'two locations', 'salinity'] },
  q3_a: { keyConcepts: ['investigation', 'research question', 'sustainability'], keywords: ['clear', 'focused', 'location', 'strategy', 'statement of inquiry', 'mangroves'] },
  q3_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['mangroves', 'coastal erosion', 'trap sediment', 'protect the community', 'worthy of investigating', 'reasoning'] },
  q3_c: { keyConcepts: ['sources', 'reliability'], keywords: ['secondary source', 'satellite shoreline imagery', 'coastal-monitoring agency', 'erosion data'] },
  q3_d: { keyConcepts: ['sources', 'usefulness', 'reasoning'], keywords: ['satellite shoreline imagery', 'communities', 'lost land', 'judgements', 'mangroves'] },
  q3_e: { keyConcepts: ['investigation', 'challenges'], keywords: ['challenge', 'dam-release records', 'reliable data', 'tides'] },
  q4_: { keyConcepts: ['management & intervention', 'systems', 'causality', 'communication'], keywords: ['drought', 'Sahel', 'borehole', 'rainwater harvesting', 'early-warning system', 'zaï pits', 'introduction', 'conclusion'] },
  q5_a: { keyConcepts: ['source evaluation', 'value', 'scale'], keywords: ['scale', 'distance', 'Plot Z', 'market district', 'value'] },
  q5_b: { keyConcepts: ['source evaluation', 'limitation', 'management & intervention'], keywords: ['lacks detail', 'location of schools', 'housing', 'container yard', 'informed decision'] },
  q6_: { keyConcepts: ['urbanization', 'management & intervention', 'disparity & equity'], keywords: ['housing', 'container yard', 'migrants', 'seaport', 'wetland', 'overcrowded', 'both opinions'] },
  q7_: { keyConcepts: ['urbanization', 'disparity & equity', 'sustainability', 'synthesis'], keywords: ['megacity', 'quality of life', 'congestion', 'pollution', 'personal safety', 'perspectives', 'conclusion'] },
}
