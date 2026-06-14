/**
 * Public (client-safe) concept tags for MYP Integrated Humanities — November 2022 · VARIANT 2.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_HUMANITIES_NOV2022_V2: Record<string, ConceptEntry> = {
  q1_a: {
    keyConcepts: ['Ocean Health Index', 'development indicators', 'map reading', 'regions of the world'],
    keywords: ['Europe', 'Ocean Health Index', 'region', 'Source A'],
  },
  q1_b: {
    keyConcepts: ['marine sustainability', 'development', 'factors affecting ocean health'],
    keywords: ['overfishing', 'plastic pollution', 'oil spills', 'coastal development', 'warming seas', 'sewage'],
  },
  q2_: {
    keyConcepts: ['development indicators', 'sustainable fisheries', 'clean waters', 'habitat protection', 'coastal livelihoods', 'marine sustainability'],
    keywords: ['sustainable fisheries', 'catch limits', 'clean waters', 'habitat protection', 'ranking', 'indicator'],
  },
  q3_a: {
    keyConcepts: ['research question', 'development indicators', 'components', 'focus'],
    keywords: ['research question', 'clear', 'focused', 'location', 'component', 'indicator'],
  },
  q3_b: {
    keyConcepts: ['verification', 'coast vs country comparison', 'development indicators', 'reasoning'],
    keywords: ['verify', 'compare', 'coast', 'country', 'ranking', 'reasoning'],
  },
  q3_c: {
    keyConcepts: ['data collection', 'investigation planning', 'relevance to research question'],
    keywords: ['data', 'fish catch', 'ocean-health score', 'Ocean Health Report', 'safe limits'],
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
    keywords: ['strength', 'limitation', 'appraisal', 'bias', 'reliability', 'different methods', 'honesty', 'enforcement'],
  },
  q5_: {
    keyConcepts: ['significant individuals', 'change', 'historical impact', 'presentation/script format', 'audience and purpose'],
    keywords: ['significant individual', 'change in history', 'opening statement', 'concluding statement', 'convincing', 'engaging', 'presentation', 'transitions'],
  },
  q6_a: {
    keyConcepts: ['origin of a source', 'source analysis'],
    keywords: ['Blue Lagoon Resorts', 'website', 'developer', 'origin'],
  },
  q6_b: {
    keyConcepts: ['purpose of a source', 'source analysis', 'audience'],
    keywords: ['convince', 'persuade', 'promote', 'purpose', 'beach resort'],
  },
  q6_c: {
    keyConcepts: ['value of a source', 'perspective', 'OPVL', 'sustainable management'],
    keywords: ['value', 'developer', 'promises', 'perspective', 'resident'],
  },
  q6_d: {
    keyConcepts: ['limitation of a source', 'bias', 'perspective', 'OPVL'],
    keywords: ['limitation', 'biased', 'advertisement', 'reef protection', 'not specific'],
  },
  q7_: {
    keyConcepts: ['sustainability', 'coastal development', 'environmental risk', 'reef and habitat protection', 'alternatives'],
    keywords: ['reef', 'coral', 'habitat', 'sediment', 'pollution', 'tourism', 'future generations', 'fishing', 'eco-tourism', 'sustainable'],
  },
  q8_: {
    keyConcepts: ['ocean resource consumption', 'fishing', 'sustainability', 'benefits vs problems', 'multiple perspectives', 'synthesis', 'judgement'],
    keywords: ['fishing', 'trawling', 'overfishing', 'bycatch', 'aquaculture', 'economic', 'environmental', 'political', 'social', 'perspectives', 'benefits', 'problems', 'sustainable', 'conclusion', 'synthesis'],
  },
}
