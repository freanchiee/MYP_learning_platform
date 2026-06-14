import 'server-only'

/**
 * MYP Geography — November 2023 · Set 1 VARIANT mark scheme (rubric-banded, "best fit").
 *
 * Isomorphic to geography-nov-2023: SAME keys, SAME marks, SAME rubric-band DESCRIPTORS
 * (the band criteria do not change). Every `exemplar` and the keyConcepts/keywords/feedback
 * are rewritten for the NEW scenario (Galápagos ecotourism → sustainable cocoa trade →
 * freshwater/wetland & Arctic biome threats). commandTerm/commandTermDefinition unchanged.
 *
 * The two extended responses marked across several criterion strands (Q5 /18 and Q8 /24)
 * list EVERY strand in `rubricBands`; the strand maxima sum to the question total.
 */

export interface RubricBand {
  marks: string // e.g. '0', '1', '2–3', '7–8', 'Strengths 3', 'CritD 7–8'
  descriptor: string // IB band descriptor
  exemplar?: string // example response at this band
}

export interface MSEntry {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
  blankAnswers?: string[]
  // ── I&S rubric extensions (optional) ──
  commandTerm?: string
  commandTermDefinition?: string
  rubricBands?: RubricBand[]
}

export type MSRecord = Record<string, MSEntry>

export const MS: MSRecord = {
  q1_a: {
    marks: 1,
    exemplar: 'Ecuador.',
    keyConcepts: ['place', 'scale', 'map skills'],
    keywords: ['Ecuador', 'Galápagos Islands', 'highlighted country', 'locator map', 'South America'],
    feedbackHit: 'Correct — the highlighted country that governs the Galápagos Islands is Ecuador.',
    feedbackMiss: 'Award 1 mark for Ecuador (the highlighted country that governs the Galápagos Islands).',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Ecuador'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'South (or South East).',
    keyConcepts: ['place', 'space', 'map skills'],
    keywords: ['compass direction', 'South', 'South East', 'Ecuador', 'Peru', 'southern border'],
    feedbackHit: 'Correct — Peru lies to the South (or South East) of Ecuador.',
    feedbackMiss: 'Award 1 mark for South or South East — Peru shares Ecuador’s southern border.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['South', 'South East'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'The money from the higher entry fee in Option A can be used to build raised boardwalks at the busiest landing site on the Galápagos Islands, off the coast of Ecuador. The boardwalks will stop tourists from walking on the bare ground and trampling the plants that hold the soil together. With less trampling, the ground cover is not removed, so erosion by wind and rain is reduced and the fragile island environment is protected from further degradation.',
    keyConcepts: ['management & intervention', 'sustainability', 'place'],
    keywords: ['positive impact', 'Option A', 'Option B', 'entry fee', 'daily cap', 'boardwalk', 'visitor centre', 'Galápagos', 'Ecuador', 'protect', 'map reference'],
    feedbackHit: 'Well done — you explained one positive impact in detail, with reasons, and referred to the map.',
    feedbackMiss: 'Build from stating an impact (1) → outlining with a map reference (2) → describing (3) → explaining with reasons and a map reference (4). Responses may refer to just one aspect of Option A or Option B and still gain full marks. Without a map reference (named country/island or its highlighted Pacific location), the maximum is one band lower.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States one positive impact of Option A or Option B (reference to the map not required).', exemplar: 'The money from the higher fee can be used to protect the islands.' },
      { marks: '2', descriptor: 'Outlines one positive impact of Option A or Option B, with reference to the map. Without a map reference, max 1.', exemplar: 'The money from the higher fee can be used to build raised boardwalks at the busiest landing site on the Galápagos Islands, off the coast of Ecuador.' },
      { marks: '3', descriptor: 'Describes one positive impact of Option A or Option B, with reference to the map (in detail, without comprehensive reasons). Without a map reference, max 2.', exemplar: '…The boardwalks will stop tourists from walking on the bare ground, trampling the plants and removing the ground cover.' },
      { marks: '4', descriptor: 'Explains one positive impact of Option A or Option B, with reference to the map (in detail, with reasons). Without a map reference, max 3.', exemplar: '…With less trampling the ground cover is not removed, so erosion by wind and rain is reduced and the fragile island environment is protected from further degradation.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'Both quantitative and qualitative primary data, such as the three-week visitor count and the ranger and operator interviews, are used to collect data. This is better than relying on numbers alone, as the rangers have more valuable primary data to make an informed decision. However, the visitor count is only carried out over three weeks and will not give data for the whole year. Visitor numbers on the Galápagos vary between seasons, which would affect whether a visitor centre is really needed, so the data would be less reliable. This weakness of the visitor count will not stop the rangers from completing their investigation. Overall, the strengths outweigh the limitations.',
    keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'qualitative', 'quantitative', 'visitor count', 'interviews', 'seasons', 'reliability'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s) of the plan, then give an overall judgement on the investigative process. Considering how the plan could be improved is rewarded under Limitations. Do not credit the same point as both a strength/limitation and an appraisal.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States a strength of the action plan.', exemplar: 'A range of primary data is used.' },
      { marks: 'Strengths 2', descriptor: 'Outlines a strength (elaborated with brief detail). Three or more strengths → up to 3.', exemplar: 'Both quantitative and qualitative primary data, such as the visitor count and the ranger and operator interviews, are used to collect data.' },
      { marks: 'Strengths 3', descriptor: 'Explains a strength with additional detail and reasoning.', exemplar: '…This is better than relying on numbers alone, as the rangers have more valuable primary data to make an informed decision.' },
      { marks: 'Limitations 1', descriptor: 'States a limitation of the action plan.', exemplar: 'The visitor count won’t give data for the whole year.' },
      { marks: 'Limitations 2', descriptor: 'Outlines a limitation (elaborated with brief detail). Three or more limitations → up to 3.', exemplar: 'The visitor count is only carried out over three weeks and won’t give data for different seasons or the whole year.' },
      { marks: 'Limitations 3', descriptor: 'Explains a limitation with additional detail and reasoning (improvements count here too).', exemplar: '…Visitor numbers on the Galápagos vary between seasons, which would affect whether a visitor centre is really needed. The data would be less reliable.' },
      { marks: 'Appraisal 1', descriptor: 'States an appraisal of the action plan (a summary or brief judgment; may appear anywhere).', exemplar: 'Overall, the strengths outweigh the limitations.' },
      { marks: 'Appraisal 2', descriptor: 'Outlines an appraisal — weighs up positives and negatives into one overall judgement on the investigative process.', exemplar: 'The weakness of the visitor count will not stop the rangers from completing their investigation. Overall, the strengths outweigh the limitations.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'To what extent has community-based ecotourism changed the traditional way of life of the Sámi reindeer herders in northern Norway?',
    keyConcepts: ['investigation', 'research question', 'global interactions'],
    keywords: ['research question', 'clear', 'focused', 'location', 'community', 'statement of inquiry', 'ecotourism', 'culture'],
    feedbackHit: 'Well done — a research question that is both clear and focused, connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ scores 1; one that is BOTH clear AND focused (e.g. names a specific community/location and a type of change) and connected to the SoI scores 2. Rewording the SoI into a question cannot be rewarded.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached. Rewording the SoI into a question cannot be rewarded.' },
      { marks: '1', descriptor: 'RQ is either clear OR focused, and connected to the SoI.', exemplar: 'How does ecotourism change the way of life of remote communities? (clear and connected but lacks focus — no named location)' },
      { marks: '2', descriptor: 'RQ is both clear AND focused and connected to the SoI.', exemplar: 'To what extent has community-based ecotourism changed the traditional way of life of the Sámi reindeer herders in northern Norway?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Ecotourism to northern Norway has grown over the past 20 years, and the once-remote Sámi reindeer herders are now a popular cultural attraction. My RQ focuses on how the interactions created by ecotourism could change the identity and way of life of this community. An increase in visitors could change their traditional way of life, as tourists demand accommodation, transport and scheduled cultural shows that differ from the herders’ seasonal, land-based lifestyle.',
    keyConcepts: ['investigation', 'relevance', 'reasoning', 'global interactions'],
    keywords: ['relevance', 'statement of inquiry', 'interactions', 'culture', 'way of life', 'reasons', 'worthy of investigating'],
    feedbackHit: 'Well done — you justified, with reasoning, why the RQ is relevant to the statement of inquiry.',
    feedbackMiss: 'Build from stating the relevance (1) → outlining it (2) → describing a factor in detail (3) → justifying with reasons why the RQ is relevant to the SoI (4). Explicit reference to the SoI is not required at the top band.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States the relevance of the research question to the statement of inquiry.', exemplar: 'It focuses on how interactions from ecotourism could change the way of life of a remote community.' },
      { marks: '2', descriptor: 'Outlines the relevance of the RQ to the SoI (a single factor with brief detail).', exemplar: '…An increase in visitors could change the traditional way of life of the Sámi herders.' },
      { marks: '3', descriptor: 'Describes the relevance of the RQ to the SoI (a factor in detail, without full reasoning).', exemplar: 'Ecotourism to northern Norway has grown over the past 20 years and the once-remote Sámi herders are now a popular cultural attraction. With more tourists, cultural interactions increase and this could change the herders’ way of life.' },
      { marks: '4', descriptor: 'Justifies the relevance of the RQ to the SoI (a factor in detail, with reasons).', exemplar: '…as tourists demand accommodation, transport and scheduled cultural shows that differ from the herders’ seasonal, land-based lifestyle.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'This type of GIS map allows me to compare different data sets spatially to see patterns and identify where tourism has grown most across the area.',
    keyConcepts: ['sources', 'GIS', 'methods'],
    keywords: ['GIS map', 'benefit', 'limitation', 'compare data sets', 'spatially', 'patterns', 'cultural elements'],
    feedbackHit: 'Well done — you outlined a benefit or limitation of the GIS map with brief supporting detail.',
    feedbackMiss: 'State a benefit OR limitation (1), then elaborate it with brief detail (2), e.g. ‘the GIS map would not show cultural elements; it is difficult to map cultural change using GIS.’',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States a benefit or a limitation of using a GIS map in their investigation.', exemplar: 'This type of GIS map allows me to compare different data sets spatially.' },
      { marks: '2', descriptor: 'Outlines a benefit or a limitation of using a GIS map (elaborated with brief detail).', exemplar: 'The GIS map would not show cultural elements. It is difficult to map cultural change using GIS.' },
    ],
  },

  q4_d: {
    marks: 2,
    exemplar: 'Statistics on visitor numbers from the national park authority; a journal article on the culture of the community.',
    keyConcepts: ['sources', 'secondary data'],
    keywords: ['secondary sources', 'national park statistics', 'encyclopedia entry', 'journal article', 'documentary footage', 'specific'],
    feedbackHit: 'Well done — two valid, specific secondary sources.',
    feedbackMiss: 'Award 1 mark per valid secondary source up to 2. Examples: visitor-number statistics from the national park authority; an encyclopedia entry on tourism in the area; journal articles on the community; documentary footage of the chosen environment. Vague responses such as ‘statistics’ are too vague — name the type of statistics.',
    commandTerm: 'List',
    commandTermDefinition: 'Give a sequence of brief answers with no explanation.',
    blankAnswers: ['Statistics on visitor numbers from the national park authority', 'Encyclopedia entry on tourism in the area', 'Journal articles on the community', 'Documentary footage of the chosen environment'],
  },

  q4_e: {
    marks: 2,
    exemplar: 'I won’t be able to survey enough tourists, impacting the validity of my primary data.',
    keyConcepts: ['investigation', 'methods', 'reliability'],
    keywords: ['challenge', 'sample size', 'survey', 'validity', 'primary data', 'time', 'access'],
    feedbackHit: 'Well done — you outlined a challenge with brief supporting detail.',
    feedbackMiss: 'State a challenge (1), then elaborate it with brief detail (2), e.g. ‘I won’t be able to survey enough tourists, impacting the validity of my primary data.’',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one challenge that they could face in their investigation.', exemplar: 'I won’t be able to survey enough tourists.' },
      { marks: '2', descriptor: 'Outlines one challenge (elaborated with brief detail).', exemplar: 'I won’t be able to survey enough tourists, impacting the validity of my primary data.' },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      'TITLE: “From bean to better life: how sustainable cocoa trade tackles poverty (SDG 1)”. Introduction — Sustainable trade focuses on liberating trade by removing barriers while protecting people and the environment. This report explains how sustainable cocoa trade can help achieve Goal 1, No Poverty. Lifting smallholders out of poverty — Around 70% of cocoa farmers live in poverty, and 90% of the world’s cocoa is grown by smallholders, so improving the price they receive has a large impact. In Ghana and Côte d’Ivoire, Fairtrade certification guarantees a minimum price plus a premium; certified farmers earn about 30% more for their crop, money that can be spent on food, school fees and better farming tools. Empowering women in cocoa — As 45% of the cocoa workforce are women, fairer prices also raise household incomes controlled by women, multiplying the anti-poverty effect. Removing trade barriers — Lowering tariffs on processed cocoa lets producing countries export chocolate, not just raw beans, keeping more value and jobs in the country. Conclusion / recommendation — Governments and chocolate companies should expand Fairtrade certification and cut tariffs on processed cocoa so that the smallholders who grow 90% of the world’s cocoa share fairly in its value and are lifted out of poverty.',
    keyConcepts: ['globalization', 'sustainability', 'disparity & equity', 'communication'],
    keywords: ['sustainable trade', 'SDG', 'Goal 1', 'no poverty', 'fair trade', 'Fairtrade premium', 'tariffs', 'cocoa', 'Ghana', 'smallholders', 'report', 'title', 'sub-headings'],
    feedbackHit: 'Well done — a report explaining how sustainable trade advances one chosen SDG, with a title, sub-headings, accurate examples and a conclusion.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Choose one SDG (1, 5 or 12), include a title and sub-headings, give accurate examples and relevant terminology, and write consistently in the style of a formal report. Criterion A rewards content only, not format or organization.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge/understanding: outlines how sustainable trade can contribute to progress in achieving one of the given SDGs, using minimal examples and limited relevant terminology.', exemplar: 'Goal 1 — No Poverty. In Ghana, money can be earned from sustainable trade in cocoa. Poverty can be reduced if Fairtrade is used.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge/understanding: describes how sustainable trade can contribute to progress in achieving one of the given SDGs, using satisfactory examples and appropriate relevant terminology.', exemplar: '…Fairtrade guarantees a minimum price and a premium, so farmers earn more for their crop. As 90% of the world’s cocoa is grown by smallholders, sustainable cocoa trade will have a large impact on reducing poverty.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge/understanding: explains how sustainable trade can contribute to progress in achieving one of the given SDGs, using accurate examples and appropriate relevant terminology.', exemplar: '…Certified cocoa farmers in Ghana earn about 30% more for their crop, and this extra money can be spent on food, school fees and better farming tools.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge/understanding: thoroughly explains how sustainable trade can contribute to progress in achieving one of the given SDGs, using accurate and effective examples and appropriate relevant terminology.', exemplar: '…Sustainable trade focuses on liberating trade by removing barriers: lowering tariffs on processed cocoa lets producing countries export chocolate rather than just raw beans, keeping more value and more jobs in the country, which steadily reduces poverty for the smallholders who grow 90% of the world’s cocoa.' },
      { marks: 'Format 1', descriptor: 'One of the following features is included: a title; subheading(s).' },
      { marks: 'Format 2', descriptor: 'Two of the following features are included: a title; subheading(s).' },
      { marks: 'Communicating 1–2', descriptor: 'The style and language used are somewhat appropriate for a report (rarely consistent with a report; e.g. informal language; language may be unclear).' },
      { marks: 'Communicating 3–4', descriptor: 'The style and language used are mainly appropriate for a report (mainly consistent; mainly clear, appropriate and for the most part formal).' },
      { marks: 'Communicating 5–6', descriptor: 'The style and language used are always appropriate for a report (completely consistent; language is clear and concise, communicating ideas effectively).' },
      { marks: 'Organization 1', descriptor: 'Structures information and ideas in a way that is rarely effective and appropriate; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'Structures information and ideas in a way that is occasionally effective and appropriate; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Structures information and ideas in a way that is mainly effective and appropriate; often uses effective transitions.' },
      { marks: 'Organization 4', descriptor: 'Communicates information and ideas in a way that is completely effective and appropriate; ideas build on each other in a consistently clear, logical manner with effective transitions.' },
    ],
  },

  q6_: {
    marks: 4,
    exemplar:
      'Land-use change is the greatest threat to freshwater (aquatic) biomes such as wetlands, because draining and converting wetlands for farmland and housing destroys the biome directly. When wetlands are drained, the standing water that fish, amphibians and waterbirds depend on disappears, so habitats are lost and biodiversity collapses. Land-use change affects most wetland biomes worldwide and is set to increase as demand for farmland and housing grows, which is why it is the largest threat — larger than pollution or over-exploitation, which damage the water but do not remove the biome itself.',
    keyConcepts: ['sustainability', 'geographic processes', 'causality'],
    keywords: ['biome', 'over-exploitation', 'pollution', 'deforestation', 'land-use change', 'wetlands', 'drainage', 'habitat loss', 'biodiversity', 'greatest threat'],
    feedbackHit: 'Well done — you justified in detail, with a clear conclusion, why one human activity is the greatest threat to your chosen biome.',
    feedbackMiss: 'Build from saying how the activity is a threat (1) → outlining its impact (2) → justifying with developed reasons (3) → justifying in detail with a clear conclusion (4). Simply selecting a biome and naming an activity scores 0. Examples are not mandatory.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached. Marks cannot be awarded for simply selecting a biome and naming a human activity.' },
      { marks: '1', descriptor: 'Identifies why the selected human activity is the greatest threat to their chosen biome (says how the activity is a threat).', exemplar: 'Land-use change is the greatest threat to freshwater wetland biomes.' },
      { marks: '2', descriptor: 'Outlines why the selected human activity is the greatest threat (the impact is briefly elaborated).', exemplar: 'Land-use change is the greatest threat to freshwater wetland biomes because draining wetlands for farmland destroys them.' },
      { marks: '3', descriptor: 'Justifies why the selected human activity is the greatest threat (developed reasons and detail; conclusion may be implied).', exemplar: '…When wetlands are drained the standing water that fish, amphibians and waterbirds depend on disappears, so habitats are lost and biodiversity collapses.' },
      { marks: '4', descriptor: 'Justifies in detail why the selected human activity is the greatest threat (thorough reasons and a clear conclusion; conclusion need not be at the end).', exemplar: '…Land-use change affects most wetland biomes worldwide and is set to increase as demand for farmland and housing grows, which is why it is the largest threat — larger than pollution or over-exploitation, which damage the water but do not remove the biome itself.' },
    ],
  },

  q7_a: {
    marks: 2,
    exemplar: 'It informs and persuades people about thawing Arctic permafrost, by explaining the threat and calling for the tundra to be protected.',
    keyConcepts: ['source evaluation', 'purpose'],
    keywords: ['purpose', 'inform', 'persuade', 'permafrost', 'tundra', 'protect', 'report'],
    feedbackHit: 'Well done — you outlined the purpose of Source C with brief supporting detail.',
    feedbackMiss: 'State the purpose (1), then elaborate it (2), e.g. ‘It informs and persuades people about thawing permafrost, by explaining the threat and urging action to protect the tundra.’',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States the purpose of Source C.', exemplar: 'It informs people about thawing permafrost in the Arctic.' },
      { marks: '2', descriptor: 'Outlines the purpose of Source C (elaborated with brief detail).', exemplar: 'It informs and persuades people about thawing Arctic permafrost, by explaining the threat and calling for the tundra to be protected.' },
    ],
  },

  q7_b: {
    marks: 3,
    exemplar:
      'It explains how thawing permafrost releases methane and carbon dioxide that were locked in the frozen soil. This helps the climate scientist understand the warming feedback loop in which thawing releases gases that speed up warming, which thaws even more permafrost.',
    keyConcepts: ['source evaluation', 'value'],
    keywords: ['value', 'methane', 'carbon dioxide', 'permafrost', 'feedback loop', 'climate scientist', 'warming', 'tundra'],
    feedbackHit: 'Well done — you explained one value of Source C to a climate scientist, in detail.',
    feedbackMiss: 'Build from stating a value (1) → outlining it with brief detail (2) → explaining a single value in detail (3). Reasoning is not required at the top band.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one value of Source C to a climate scientist studying the impact of warming on the Arctic tundra.', exemplar: 'It explains that thawing permafrost releases greenhouse gases.' },
      { marks: '2', descriptor: 'Outlines one value (1–2 sentences elaborating a single value with brief detail).', exemplar: 'It explains how thawing permafrost releases methane and carbon dioxide that were locked in the frozen soil.' },
      { marks: '3', descriptor: 'Explains one value (2–3 sentences with a single value elaborated in detail).', exemplar: '…This helps the climate scientist understand the warming feedback loop in which thawing releases gases that speed up warming, which thaws even more permafrost.' },
    ],
  },

  q7_c: {
    marks: 3,
    exemplar:
      'The source names no author and gives no data sources, making it unreliable. Without knowing who wrote it or where its figures come from, the climate scientist cannot check the credibility of the claims, such as the tundra warming nearly four times faster than the global average.',
    keyConcepts: ['source evaluation', 'limitation', 'reliability'],
    keywords: ['limitation', 'no author', 'sources not cited', 'unreliable', 'credibility', 'climate scientist', 'data', 'blog'],
    feedbackHit: 'Well done — you explained one limitation of Source C to a climate scientist, in detail.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining it with brief detail (2) → explaining a single limitation in detail (3). Reasoning is not required at the top band.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one limitation of Source C to a climate scientist studying the impact of warming on the Arctic tundra.', exemplar: 'The source names no author and gives no data sources.' },
      { marks: '2', descriptor: 'Outlines one limitation (1–2 sentences elaborating a single limitation with brief detail).', exemplar: 'The source names no author and gives no data sources, making it unreliable.' },
      { marks: '3', descriptor: 'Explains one limitation (2–3 sentences with a single limitation elaborated in detail).', exemplar: '…Without knowing who wrote it or where its figures come from, the climate scientist cannot check the credibility of the claims, such as the tundra warming nearly four times faster than the global average.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Whether the sustainable management of biomes is more important than economic development is a key tension in geography, and to a large extent careful management is more important because the ecosystem services biomes provide underpin long-term development itself. On one hand, sustainable biome management is vital: wetland biomes store and clean fresh water, hold huge biodiversity and protect against floods, so protecting them through measures like Ramsar protected sites and controlled drainage reduces disaster risk and preserves water resources for the future. On the other hand, many lower-income communities depend on economic development from biomes — draining wetlands for farmland or building on coastal land raises incomes and funds schools and hospitals — and to people facing poverty, development can feel more urgent than conservation. However, these perspectives are not wholly opposed: sustainable approaches such as wetland ecotourism and certified sustainable fishing can generate income while protecting the biome, so the two aims can be combined. Weighing these perspectives, the sustainable management of biomes is more important than unchecked economic development, because development that destroys a biome ultimately undermines the water, climate stability and livelihoods on which future development depends — though the most convincing approach is one that pursues development sustainably rather than abandoning it.',
    keyConcepts: ['sustainability', 'management & intervention', 'disparity & equity', 'causality', 'synthesis'],
    keywords: ['sustainable management', 'biome', 'economic development', 'wetlands', 'drainage', 'ecotourism', 'biodiversity', 'water resources', 'perspectives', 'conclusion', 'synthesis'],
    feedbackHit: 'Well done — a structured essay weighing sustainable biome management against economic development, with ≥2 balanced perspectives, ≥1 biome and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Refer to at least one biome, provide explanations and examples, consider different perspectives (for and against) and reach a clear conclusion answering ‘to what extent’.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Demonstrates limited contextual and conceptual understanding in an outline, using limited examples and limited terminology.' },
      { marks: 'CritA 3–4', descriptor: 'Demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology.' },
      { marks: 'CritA 5–6', descriptor: 'Demonstrates substantial contextual and conceptual understanding in an explanation (reasons included), using accurate examples and appropriate terminology.' },
      { marks: 'CritA 7–8', descriptor: 'Demonstrates detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate terminology throughout.' },
      { marks: 'Format 1', descriptor: 'Two of the following elements are included as separate paragraphs: introduction, a main body of argument, a conclusion.' },
      { marks: 'Format 2', descriptor: 'Three of the following elements are included as separate paragraphs: introduction, a main body of argument and a conclusion.' },
      { marks: 'Communicating 1', descriptor: 'The style and language used is rarely appropriate to the audience and purpose of informing (rarely consistent with an essay; may be mostly unclear or too short).' },
      { marks: 'Communicating 2', descriptor: 'The style and language used is mainly appropriate to the audience and purpose of informing (not always consistent; may be more informal than expected; less clear in places).' },
      { marks: 'Communicating 3', descriptor: 'The style and language used is consistently appropriate to the audience and purpose of informing (consistent with an essay; language formal and clear).' },
      { marks: 'Organization 1', descriptor: 'The organizational structure is occasionally effective; paragraphs/ideas sometimes build on each other; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'The organizational structure is mainly effective; paragraphs/ideas build in a mainly logical manner; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'The organizational structure is consistently appropriate and effective; paragraphs/ideas build in a consistently clear and logical manner with effective transitions.' },
      { marks: 'CritD 1–2', descriptor: 'Provides one perspective in a basic analysis and summarizes information to a limited extent; may not reach a conclusion; little or no use of examples.' },
      { marks: 'CritD 3–4', descriptor: 'Provides different perspectives in an analysis and summarizes information to make clear arguments; a conclusion on which is more important is expected (not fully developed); examples used to inform the argument.' },
      { marks: 'CritD 5–6', descriptor: 'Provides different perspectives in an analysis and synthesizes information to make clear arguments; ideas on biome management and economic development combined into a clear, coherent conclusion; examples used effectively.' },
      { marks: 'CritD 7–8', descriptor: 'Provides different perspectives in a detailed, balanced discussion and synthesizes information into a clear, coherent and convincing conclusion on which is more important; examples used effectively to support a comprehensive argument.' },
    ],
  },
}
