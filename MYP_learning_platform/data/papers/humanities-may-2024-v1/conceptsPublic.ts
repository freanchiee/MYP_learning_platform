/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — May 2024 · Variant 1.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_MAY2024_V1: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['industrialization', 'stakeholders', 'economic systems'], keywords: ['investors', 'factory owners', 'traders', 'government policy makers', 'workers', 'labour unions', 'citizens', 'countries'] },
  q2_: { keyConcepts: ['industrialization', 'causation', 'resources'], keywords: ['access to energy', 'coal', 'natural resources', 'factory machinery', 'cause'] },
  q3_: { keyConcepts: ['industrialization', 'social change', 'urbanization', 'migration'], keywords: ['port and factory towns', 'fixed shifts', 'regular wages', 'rural-to-urban migration', 'crowded neighbourhoods', 'growth of cities', 'new ways of living'] },
  q4_: { keyConcepts: ['primary and secondary sources', 'reliability', 'validity', 'investigation process', 'evaluation'], keywords: ['primary sources', 'secondary sources', 'interviews', 'range of sources', 'reliability', 'first-hand account', 'appraisal', 'overall judgement', 'strengths', 'limitations'] },
  q5_a: { keyConcepts: ['research question', 'statement of inquiry', 'focus', 'industrialization'], keywords: ['clear', 'focused', 'specific group', 'specific location', 'connected to SoI', 'to what extent'] },
  q5_b: { keyConcepts: ['justification', 'significance of research', 'industrialization', 'social change'], keywords: ['worthy of investigation', 'industrializing city', 'steel mills', 'migrant workers', 'wages', 'living standards', 'reasoning'] },
  q5_c: { keyConcepts: ['primary source', 'research methods'], keywords: ['interview', 'survey', 'photographs', 'first-hand', 'primary source'] },
  q5_d: { keyConcepts: ['secondary source', 'research methods'], keywords: ['published articles', 'web research', 'previous studies', 'newspaper reports', 'secondary source'] },
  q5_e: { keyConcepts: ['interviews', 'stakeholders', 'research planning'], keywords: ['mill owners', 'labourers', 'employees', 'labour-records officer', 'history professor', 'steelworkers', 'specific people'] },
  q5_f: { keyConcepts: ['data collection', 'interviews', 'research planning'], keywords: ['information gathered', 'higher wages', 'standard of living', 'elaborated detail'] },
  q6_: { keyConcepts: ['economic agents', 'youth unemployment', 'persuasion', 'script writing', 'explanation'], keywords: ['economic agent', 'government', 'youth unemployment', 'two ways', 'apprenticeships', 'subsidies', 'vocational training', 'incentives', 'hook', 'call to action', 'introduction', 'conclusion', 'rhetorical question', 'emotive vocabulary'] },
  q7_a: { keyConcepts: ['origin of sources', 'source analysis'], keywords: ['Coastal Resilience Agency', 'Marina Bay', 'campaign poster'] },
  q7_b: { keyConcepts: ['purpose of sources', 'source analysis'], keywords: ['inform residents', 'redevelopment', 'preserving heritage', 'raise awareness', 'flood resilience'] },
  q7_c: { keyConcepts: ['value of sources', 'source analysis', 'sustainable management', 'urban environments'], keywords: ['value', 'manages urban environment', 'heritage and natural defences', 'wetlands', 'mangroves', 'rain gardens', 'detailed account'] },
  q7_d: { keyConcepts: ['limitation of sources', 'source analysis', 'sustainable management', 'bias/reliability'], keywords: ['limitation', 'plan’s success unknown', 'reactions of residents', 'flooded less', 'detailed account'] },
  q8_: { keyConcepts: ['economic development', 'urban redevelopment', 'tourism revenue', 'explanation'], keywords: ['reuse of dockland buildings', 'maritime museum', 'attract tourists', 'revenue', 'regenerate', 'economic development', 'reasons'] },
  q9_: { keyConcepts: ['sustainable management', 'redevelopment of place', 'perspectives', 'synthesis', 'critical thinking', 'to what extent'], keywords: ['redevelopment', 'sustainable management', 'perspectives', 'pros and cons', 'cultural natural economic', 'impacts on different groups', 'before/after', 'synthesis', 'judgement', 'not Marina Bay', 'examples'] },
}
