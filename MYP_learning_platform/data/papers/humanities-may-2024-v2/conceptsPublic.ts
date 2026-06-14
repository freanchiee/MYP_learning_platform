/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — May 2024 · Variant 2.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_MAY2024_V2: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['industrialization', 'stakeholders', 'economic systems'], keywords: ['investors', 'merchants', 'mill owners', 'government policy makers', 'workers', 'labour unions', 'citizens', 'countries'] },
  q2_: { keyConcepts: ['industrialization', 'causation', 'technology'], keywords: ['new machinery', 'powered loom', 'inventions', 'factories', 'cause'] },
  q3_: { keyConcepts: ['industrialization', 'social change', 'family life', 'factory work'], keywords: ['work moved to the factory', 'cottage workshops', 'fixed shifts', 'wage', 'factory clock', 'family life', 'new ways of living'] },
  q4_: { keyConcepts: ['primary and secondary sources', 'reliability', 'validity', 'investigation process', 'evaluation'], keywords: ['primary sources', 'secondary sources', 'interviews', 'range of sources', 'reliability', 'first-hand account', 'appraisal', 'overall judgement', 'strengths', 'limitations'] },
  q5_a: { keyConcepts: ['research question', 'statement of inquiry', 'focus', 'industrialization'], keywords: ['clear', 'focused', 'specific group', 'specific location', 'connected to SoI', 'to what extent'] },
  q5_b: { keyConcepts: ['justification', 'significance of research', 'industrialization', 'social change'], keywords: ['worthy of investigation', 'coal region', 'mining towns', 'mining families', 'working conditions', 'disease rates', 'reasoning'] },
  q5_c: { keyConcepts: ['primary source', 'research methods'], keywords: ['interview', 'survey', 'photographs', 'first-hand', 'primary source'] },
  q5_d: { keyConcepts: ['secondary source', 'research methods'], keywords: ['published articles', 'census records', 'previous studies', 'newspaper reports', 'secondary source'] },
  q5_e: { keyConcepts: ['interviews', 'stakeholders', 'research planning'], keywords: ['mine owners', 'miners', 'employees', 'mining-town doctor', 'history professor', 'mining families', 'specific people'] },
  q5_f: { keyConcepts: ['data collection', 'interviews', 'research planning'], keywords: ['information gathered', 'working conditions', 'illness', 'elaborated detail'] },
  q6_: { keyConcepts: ['economic agents', 'rising food prices', 'persuasion', 'script writing', 'explanation'], keywords: ['economic agent', 'government', 'food prices', 'two ways', 'subsidies', 'staple foods', 'local food production', 'loans', 'hook', 'call to action', 'introduction', 'conclusion', 'rhetorical question', 'emotive vocabulary'] },
  q7_a: { keyConcepts: ['origin of sources', 'source analysis'], keywords: ['Riverside Heritage Regeneration Trust', 'published report', 'Mill Quarter'] },
  q7_b: { keyConcepts: ['purpose of sources', 'source analysis'], keywords: ['inform people', 'regeneration', 'preserving heritage', 'raise awareness', 'combine heritage and green space'] },
  q7_c: { keyConcepts: ['value of sources', 'source analysis', 'sustainable management', 'urban environments'], keywords: ['value', 'manages urban environment', 'industrial heritage and green space', 'canal', 'pocket parks', 'towpaths', 'detailed account'] },
  q7_d: { keyConcepts: ['limitation of sources', 'source analysis', 'sustainable management', 'bias/reliability'], keywords: ['limitation', 'plan’s success unknown', 'reactions of residents', 'lives improved', 'detailed account'] },
  q8_: { keyConcepts: ['economic development', 'urban redevelopment', 'tourism revenue', 'explanation'], keywords: ['reuse of historic buildings', 'market hall', 'attract shoppers', 'revenue', 'regenerate', 'economic development', 'reasons'] },
  q9_: { keyConcepts: ['sustainable management', 'redevelopment of place', 'perspectives', 'synthesis', 'critical thinking', 'to what extent'], keywords: ['redevelopment', 'sustainable management', 'perspectives', 'pros and cons', 'cultural natural economic', 'impacts on different groups', 'before/after', 'synthesis', 'judgement', 'not the Mill Quarter', 'examples'] },
}
