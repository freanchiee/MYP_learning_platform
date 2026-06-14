/**
 * Public (client-safe) concept tags for MYP Geography — May 2024.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_MAY2024: Record<string, ConceptEntry> = {
  q1_a: { keyConcepts: ['geographic processes', 'systems'], keywords: ['erosion', 'flooding', 'longshore drift', 'attrition', 'hydraulic action'] },
  q1_b: { keyConcepts: ['causality', 'geographic processes', 'management & intervention'], keywords: ['erosion', 'undercut', 'riverbank', 'collapse', 'farmland', 'threaten communities'] },
  q2_: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'two locations', 'water quality'] },
  q3_a: { keyConcepts: ['investigation', 'research question', 'sustainability'], keywords: ['clear', 'focused', 'location', 'strategy', 'statement of inquiry', 'levees'] },
  q3_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['levees', 'flooding', 'protect the community', 'worthy of investigating', 'reasoning'] },
  q3_c: { keyConcepts: ['sources', 'reliability'], keywords: ['secondary source', 'GIS mapping data', 'local council website', 'population statistics'] },
  q3_d: { keyConcepts: ['sources', 'usefulness', 'reasoning'], keywords: ['GIS mapping data', 'communities', 'impacted by flooding', 'judgements', 'levees'] },
  q3_e: { keyConcepts: ['investigation', 'challenges'], keywords: ['challenge', 'government data', 'reliable data', 'large research area'] },
  q4_: { keyConcepts: ['management & intervention', 'systems', 'causality', 'communication'], keywords: ['tectonic activity', 'earthquake', 'volcanic eruption', 'retrofitted', 'cross bracing', 'Christchurch', 'introduction', 'conclusion'] },
  q5_a: { keyConcepts: ['source evaluation', 'value', 'scale'], keywords: ['scale', 'distance', 'Area X', 'CBD', 'value'] },
  q5_b: { keyConcepts: ['source evaluation', 'limitation', 'management & intervention'], keywords: ['lacks detail', 'location of schools', 'housing', 'factories', 'informed decision'] },
  q6_: { keyConcepts: ['urbanization', 'management & intervention', 'disparity & equity'], keywords: ['housing', 'industrial area', 'migrants', 'seaport', 'two rivers', 'CBD', 'both opinions'] },
  q7_: { keyConcepts: ['urbanization', 'disparity & equity', 'sustainability', 'synthesis'], keywords: ['megacity', 'quality of life', 'congestion', 'pollution', 'personal safety', 'perspectives', 'conclusion'] },
}
