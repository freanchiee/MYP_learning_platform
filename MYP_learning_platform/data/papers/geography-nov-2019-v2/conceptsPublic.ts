/**
 * Public (client-safe) concept tags for MYP Geography — November 2019 · VARIANT 2.
 * One entry per mark-scheme task key. No server-only import.
 */

export type ConceptEntry = { keyConcepts: string[]; keywords: string[] }

export const CONCEPTS_PUBLIC_GEOGRAPHY_NOV2019_V2: Record<string, ConceptEntry> = {
  q1_: { keyConcepts: ['natural resources', 'sustainability', 'classification'], keywords: ['renewable', 'non-renewable', 'solar', 'hydro-electric', 'biomass', 'natural gas', 'uranium'] },
  q2_: { keyConcepts: ['causality', 'natural resources', 'scarcity'], keywords: ['over-abstraction', 'groundwater', 'demand', 'water table', 'recharge', 'boreholes'] },
  q3_: { keyConcepts: ['investigation', 'methods', 'evaluation', 'cooperation'], keywords: ['strengths', 'limitations', 'appraisal', 'interview', 'research question', 'primary data', 'secondary data', 'bias'] },
  q4_a: { keyConcepts: ['investigation', 'research question', 'natural resources'], keywords: ['clear', 'focused', 'location', 'statement of inquiry', 'extraction'] },
  q4_b: { keyConcepts: ['investigation', 'relevance', 'reasoning'], keywords: ['extraction', 'pollution', 'communities', 'cobalt', 'ecosystem', 'statement of inquiry'] },
  q4_c: { keyConcepts: ['investigation', 'methods', 'data collection'], keywords: ['interviews', 'questionnaire', 'survey', 'library research', 'internet research'] },
  q4_d: { keyConcepts: ['investigation', 'methods', 'usefulness'], keywords: ['video interview', 'primary data', 'expert', 'extraction', 'human and natural environments'] },
  q4_e: { keyConcepts: ['investigation', 'methods', 'reliability'], keywords: ['challenge', 'reliable data', 'cobalt mining', 'companies', 'governments', 'may not publish'] },
  q5_: { keyConcepts: ['globalization', 'sustainability', 'management & intervention', 'communication'], keywords: ['deforestation', 'charcoal', 'fuel-wood', 'sustainable', 'Kenya', 'clean cook-stoves', 'Tanzania', 'replanting', 'petition', 'persuasive'] },
  q6_: { keyConcepts: ['interpretation', 'trends', 'natural disasters'], keywords: ['trend', 'decreased', 'deaths', 'data', '1,267,000', '22,000'] },
  q7_: { keyConcepts: ['causality', 'risk', 'vulnerability', 'management & intervention'], keywords: ['risk', 'magnitude', 'frequency', 'vulnerability', 'population density', 'management strategies', 'preparedness'] },
  q8_a: { keyConcepts: ['source evaluation', 'value', 'management & intervention'], keywords: ['satellite images', 'rainfall maps', 'photographs', 'assess danger', 'move herds', 'better grazing'] },
  q8_b: { keyConcepts: ['source evaluation', 'limitation', 'management & intervention'], keywords: ['forecast', 'how long', 'emergency aid', 'at risk', 'local residents'] },
  q9_: { keyConcepts: ['causality', 'management & intervention', 'disparity & equity', 'synthesis'], keywords: ['technology', 'HICs', 'seismometers', 'Japan text alerts', 'shock absorbers', 'robots', 'drones', 'Hurricane Katrina', 'education', 'perspectives', 'conclusion'] },
}
