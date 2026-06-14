/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — May 2024.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_MAY2024: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['industrialization', 'stakeholders', 'economic systems'], keywords: ['investors', 'business owners', 'traders', 'government policy makers', 'workers', 'labour unions', 'citizens', 'countries'] },
  q2_: { keyConcepts: ['industrialization', 'causation', 'resources'], keywords: ['availability of resources', 'natural resources', 'factories', 'cause'] },
  q3_: { keyConcepts: ['industrialization', 'social change', 'urbanization', 'migration'], keywords: ['overcrowded cities', 'factories', 'rural-to-urban migration', 'fixed working hours', 'wages', 'growth of cities', 'new ways of living'] },
  q4_: { keyConcepts: ['primary and secondary sources', 'reliability', 'validity', 'investigation process', 'evaluation'], keywords: ['primary sources', 'secondary sources', 'interviews', 'range of sources', 'reliability', 'first-hand account', 'appraisal', 'overall judgement', 'strengths', 'limitations'] },
  q5_a: { keyConcepts: ['research question', 'statement of inquiry', 'focus', 'industrialization'], keywords: ['clear', 'focused', 'specific group', 'specific location', 'connected to SoI', 'to what extent'] },
  q5_b: { keyConcepts: ['justification', 'significance of research', 'industrialization', 'social change'], keywords: ['worthy of investigation', 'developing country', 'textile factories', 'social status', 'economic independence', 'social empowerment', 'reasoning'] },
  q5_c: { keyConcepts: ['primary source', 'research methods'], keywords: ['interview', 'survey', 'photographs', 'first-hand', 'primary source'] },
  q5_d: { keyConcepts: ['secondary source', 'research methods'], keywords: ['published articles', 'web research', 'previous studies', 'newspaper reports', 'secondary source'] },
  q5_e: { keyConcepts: ['interviews', 'stakeholders', 'research planning'], keywords: ['factory owners', 'labourers', 'employees', 'government officer', 'history professor', 'women workers', 'specific people'] },
  q5_f: { keyConcepts: ['data collection', 'interviews', 'research planning'], keywords: ['information gathered', 'make more money', 'social status', 'elaborated detail'] },
  q6_: { keyConcepts: ['economic agents', 'labour shortage', 'persuasion', 'script writing', 'explanation'], keywords: ['economic agent', 'government', 'labour shortage', 'two ways', 'subsidies', 'incentives', 'wages', 'flexible work', 'hook', 'call to action', 'introduction', 'conclusion', 'rhetorical question', 'emotive vocabulary'] },
  q7_a: { keyConcepts: ['origin of sources', 'source analysis'], keywords: ['Lyon Town Planning Council', 'Lyon Council website', 'Lyon'] },
  q7_b: { keyConcepts: ['purpose of sources', 'source analysis'], keywords: ['inform residents', 'redevelopment', 'preserving heritage', 'raise awareness', 'combine history and culture'] },
  q7_c: { keyConcepts: ['value of sources', 'source analysis', 'sustainable management', 'urban environments'], keywords: ['value', 'manages urban environment', 'cultural and natural aspects', 'forests', 'water-based recreation', 'detailed account'] },
  q7_d: { keyConcepts: ['limitation of sources', 'source analysis', 'sustainable management', 'bias/reliability'], keywords: ['limitation', 'plan’s success unknown', 'reactions of residents', 'lives improved', 'detailed account'] },
  q8_: { keyConcepts: ['economic development', 'urban redevelopment', 'tourism revenue', 'explanation'], keywords: ['reuse of historic buildings', 'luxury hotels', 'attract visitors', 'revenue', 'regenerate', 'economic development', 'reasons'] },
  q9_: { keyConcepts: ['sustainable management', 'redevelopment of place', 'perspectives', 'synthesis', 'critical thinking', 'to what extent'], keywords: ['redevelopment', 'sustainable management', 'perspectives', 'pros and cons', 'cultural natural economic', 'impacts on different groups', 'before/after', 'synthesis', 'judgement', 'not Lyon', 'examples'] },
}
