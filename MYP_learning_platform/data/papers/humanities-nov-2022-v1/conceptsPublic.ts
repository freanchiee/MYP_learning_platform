/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — November 2022 · VARIANT 1.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_NOV2022_V1: Record<string, ConceptEntry> = {
  q1_a: {
    keyConcepts: ['Youth Literacy Index', 'development indicators', 'map reading', 'regions of the world'],
    keywords: ['Europe', 'Youth Literacy Index', 'region', 'Source A'],
  },
  q1_b: {
    keyConcepts: ['education access', 'development', 'factors affecting literacy'],
    keywords: ['poverty', 'conflict', 'child labour', 'lack of schools', 'gender inequality', 'teacher shortage'],
  },
  q2_: {
    keyConcepts: ['development indicators', 'expected years of schooling', 'public spending on education', 'access to learning resources', 'literacy'],
    keywords: ['years of schooling', 'public spending', 'access to resources', 'pupil–teacher ratio', 'ranking', 'indicator'],
  },
  q3_a: {
    keyConcepts: ['research question', 'development indicators', 'components', 'focus'],
    keywords: ['research question', 'clear', 'focused', 'location', 'component', 'indicator'],
  },
  q3_b: {
    keyConcepts: ['verification', 'city vs country comparison', 'development indicators', 'reasoning'],
    keywords: ['verify', 'compare', 'city', 'country', 'ranking', 'reasoning'],
  },
  q3_c: {
    keyConcepts: ['data collection', 'investigation planning', 'relevance to research question'],
    keywords: ['data', 'schools', 'education ranking', 'Global Education Monitor', 'completion rate'],
  },
  q3_d: {
    keyConcepts: ['investigation challenges', 'data management', 'reliability'],
    keywords: ['challenge', 'too much data', 'consider fully', 'elaborate'],
  },
  q3_e: {
    keyConcepts: ['data recording', 'investigation methods', 'organisation of data'],
    keywords: ['spreadsheet', 'phone', 'record', 'interview', 'categories', 'method'],
  },
  q4_: {
    keyConcepts: ['evaluation', 'reliability', 'bias', 'research methods', 'validity of data'],
    keywords: ['strength', 'limitation', 'appraisal', 'bias', 'reliability', 'different methods', 'honesty', 'fairness'],
  },
  q5_: {
    keyConcepts: ['significant individuals', 'change', 'historical impact', 'presentation/script format', 'audience and purpose'],
    keywords: ['significant individual', 'change in history', 'opening statement', 'concluding statement', 'convincing', 'engaging', 'presentation', 'transitions'],
  },
  q6_a: {
    keyConcepts: ['origin of a source', 'source analysis'],
    keywords: ['Riverbend Community Newsletter', 'letter', 'origin'],
  },
  q6_b: {
    keyConcepts: ['purpose of a source', 'source analysis', 'audience'],
    keywords: ['inform', 'convince', 'purpose', 'hydroelectric dam', 'relocation'],
  },
  q6_c: {
    keyConcepts: ['value of a source', 'perspective', 'OPVL', 'sustainable management'],
    keywords: ['value', 'chair of the water authority', 'importance', 'perspective', 'resident'],
  },
  q6_d: {
    keyConcepts: ['limitation of a source', 'bias', 'perspective', 'OPVL'],
    keywords: ['limitation', 'vague', 'chair', 'relocation support', 'not specific'],
  },
  q7_: {
    keyConcepts: ['sustainability', 'displacement and relocation', 'environmental risk', 'water and energy management', 'alternatives'],
    keywords: ['flooding', 'relocation', 'farmland', 'habitats', 'reservoir', 'future generations', 'wind power', 'solar', 'methane', 'sustainable'],
  },
  q8_: {
    keyConcepts: ['land consumption', 'urbanisation', 'sustainability', 'benefits vs problems', 'multiple perspectives', 'synthesis', 'judgement'],
    keywords: ['urban expansion', 'farmland', 'wetlands', 'brownfield', 'economic', 'environmental', 'political', 'social', 'perspectives', 'benefits', 'problems', 'sustainable', 'conclusion', 'synthesis'],
  },
}
