/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — November 2022.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_NOV2022: Record<string, ConceptEntry> = {
  q1_a: {
    keyConcepts: ['World Happiness Index', 'development indicators', 'map reading', 'regions of the world'],
    keywords: ['Europe', 'Happiness Index', 'region', 'Source A'],
  },
  q1_b: {
    keyConcepts: ['wellbeing', 'development', 'factors affecting happiness'],
    keywords: ['poverty', 'war', 'corruption', 'unemployment', 'pandemic', 'lower GDP'],
  },
  q2_: {
    keyConcepts: ['development indicators', 'healthy life expectancy', 'social support', 'GDP per capita', 'wellbeing'],
    keywords: ['life expectancy', 'healthcare', 'GDP', 'social support', 'ranking', 'indicator'],
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
    keywords: ['data', 'doctors', 'happiness ranking', 'World Happiness Report', 'speciality'],
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
    keywords: ['strength', 'limitation', 'appraisal', 'bias', 'reliability', 'different methods', 'honesty', 'corruption'],
  },
  q5_: {
    keyConcepts: ['significant individuals', 'change', 'historical impact', 'presentation/script format', 'audience and purpose'],
    keywords: ['significant individual', 'change in history', 'opening statement', 'concluding statement', 'convincing', 'engaging', 'presentation', 'transitions'],
  },
  q6_a: {
    keyConcepts: ['origin of a source', 'source analysis'],
    keywords: ['Labrador Times', 'newspaper', 'origin'],
  },
  q6_b: {
    keyConcepts: ['purpose of a source', 'source analysis', 'audience'],
    keywords: ['inform', 'convince', 'purpose', 'nuclear waste storage site'],
  },
  q6_c: {
    keyConcepts: ['value of a source', 'perspective', 'OPVL', 'sustainable management'],
    keywords: ['value', 'leader of the community', 'importance', 'perspective', 'resident'],
  },
  q6_d: {
    keyConcepts: ['limitation of a source', 'bias', 'perspective', 'OPVL'],
    keywords: ['limitation', 'vague', 'politician', 'long term effects', 'not specific'],
  },
  q7_: {
    keyConcepts: ['sustainability', 'intergenerational responsibility', 'environmental risk', 'nuclear waste management', 'alternatives'],
    keywords: ['radioactive', 'thousands of years', 'tectonic shifts', 'groundwater', 'future generations', 'wind power', 'vitrification', 'sustainable'],
  },
  q8_: {
    keyConcepts: ['natural resource consumption', 'sustainability', 'benefits vs problems', 'multiple perspectives', 'synthesis', 'judgement'],
    keywords: ['natural resource', 'economic', 'environmental', 'political', 'social', 'perspectives', 'benefits', 'problems', 'sustainable', 'conclusion', 'synthesis'],
  },
}
