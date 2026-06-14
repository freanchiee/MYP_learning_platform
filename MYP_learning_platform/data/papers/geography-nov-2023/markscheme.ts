import 'server-only'

/**
 * MYP Geography — November 2023 mark scheme (rubric-banded, "best fit").
 *
 * Geography (I&S) answers are open-ended, so every entry carries the IB band
 * descriptors plus worked exemplar responses at each band (`rubricBands`) —
 * surfaced to the student on submission and in the downloadable exam report.
 * `exemplar` holds the top-band model answer (kept for the shared grading/results
 * consumers); the extra fields (`commandTerm`, `commandTermDefinition`,
 * `rubricBands`) are optional and ignored by consumers that don't use them.
 *
 * The two extended responses marked across several criterion strands (Q5 /18 and
 * Q8 /24) list EVERY strand in `rubricBands` (e.g. 'CritA 6', 'Format 2',
 * 'Communicating 5–6', 'CritD 7–8'); the strand maxima sum to the question total.
 * All descriptors and exemplars are transcribed from the official N23 markscheme.
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
    exemplar: 'Coastal Rocks.',
    keyConcepts: ['place', 'scale', 'map skills'],
    keywords: ['coastal rocks', 'Point Kean', 'grid reference', '5003', 'topographic map'],
    feedbackHit: 'Correct — the coastal feature at Point Kean (5003) is Coastal Rocks.',
    feedbackMiss: 'Award 1 mark for Coastal Rocks. Note: ‘Rocks’ on its own cannot be accepted.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Coastal Rocks'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'East (or East South East).',
    keyConcepts: ['place', 'space', 'map skills'],
    keywords: ['compass direction', 'East', 'East South East', 'Māori Leap Caves', 'racecourse', '4504', '4604'],
    feedbackHit: 'Correct — the racecourse lies to the East (or East South East) of the Māori Leap Caves.',
    feedbackMiss: 'Award 1 mark for East or East South East.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['East', 'East South East'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'The money from the tourists can be used to build a raised walkway to protect the foot track on the South Bay Lookout. The walkway will stop tourists from stepping on plants and removing ground cover which would have degraded the soil. With less ground cover, erosion by wind and water will increase resulting in environmental degradation.',
    keyConcepts: ['management & intervention', 'sustainability', 'place'],
    keywords: ['positive impact', 'Option A', 'Option B', 'fee', 'maximum number', 'car park', 'walkway', 'South Bay Lookout', 'protect', 'map reference'],
    feedbackHit: 'Well done — you explained one positive impact in detail, with reasons, and referred to the map.',
    feedbackMiss: 'Build from stating an impact (1) → outlining with a map reference (2) → describing (3) → explaining with reasons and a map reference (4). Responses may refer to just one aspect of Option A and still gain full marks. Without a map reference (named location, grid ref or map feature), the maximum is one band lower.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States one positive impact of Option A or Option B (reference to the map not required).', exemplar: 'The money from the tourists can be used to protect the path.' },
      { marks: '2', descriptor: 'Outlines one positive impact of Option A or Option B, with reference to the map. Without a map reference, max 1.', exemplar: 'The money from the tourists can be used to build a raised walkway to protect the foot track on the South Bay Lookout.' },
      { marks: '3', descriptor: 'Describes one positive impact of Option A or Option B, with reference to the map (in detail, without comprehensive reasons). Without a map reference, max 2.', exemplar: '…The walkway will stop tourists from stepping on plants, removing ground cover and degrading the soil.' },
      { marks: '4', descriptor: 'Explains one positive impact of Option A or Option B, with reference to the map (in detail, with reasons). Without a map reference, max 3.', exemplar: '…With less ground cover, erosion by wind and water will increase resulting in environmental degradation.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'Both quantitative and qualitative primary data, such as traffic counts and interviews, are used to collect data. This is better than only relying on numerical data as there is more valuable primary data that the tourist operators can use to make an informed decision. However, the traffic count is only conducted over 3 weeks and won’t give data for the whole year. There could be differences in traffic in different seasons, which would impact whether the car park is needed or not, so the data would not be as reliable. The weakness of the traffic count will not stop the tourist operators from completing their investigation. Overall, the strengths outweigh the limitations.',
    keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'qualitative', 'quantitative', 'traffic count', 'interviews', 'seasons', 'reliability'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s) of the plan, then give an overall judgement on the investigative process. Considering how the plan could be improved is rewarded under Limitations. Do not credit the same point as both a strength/limitation and an appraisal.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States a strength of the action plan.', exemplar: 'A range of primary data is used.' },
      { marks: 'Strengths 2', descriptor: 'Outlines a strength (elaborated with brief detail). Three or more strengths → up to 3.', exemplar: 'Both quantitative and qualitative primary data, such as traffic counts and interviews, are used to collect data.' },
      { marks: 'Strengths 3', descriptor: 'Explains a strength with additional detail and reasoning.', exemplar: '…This is better than only relying on numerical data as there is more valuable primary data that the tourist operators can use to make an informed decision.' },
      { marks: 'Limitations 1', descriptor: 'States a limitation of the action plan.', exemplar: 'The traffic count won’t give data for the whole year.' },
      { marks: 'Limitations 2', descriptor: 'Outlines a limitation (elaborated with brief detail). Three or more limitations → up to 3.', exemplar: 'The traffic count is only conducted over 3 weeks and won’t give data for different seasons or the whole year.' },
      { marks: 'Limitations 3', descriptor: 'Explains a limitation with additional detail and reasoning (improvements count here too).', exemplar: '…There could be differences in traffic in different seasons, which would impact whether the car park is needed or not. The data would not be as reliable.' },
      { marks: 'Appraisal 1', descriptor: 'States an appraisal of the action plan (a summary or brief judgment; may appear anywhere).', exemplar: 'Overall, the strengths outweigh the limitations.' },
      { marks: 'Appraisal 2', descriptor: 'Outlines an appraisal — weighs up positives and negatives into one overall judgement on the investigative process.', exemplar: 'The weakness of the traffic count will not stop the tourist operators from completing their investigation. Overall, the strengths outweigh the limitations.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How does an increase in tourism impact the culture of the remote communities of the Hill Tribes of Vietnam?',
    keyConcepts: ['investigation', 'research question', 'global interactions'],
    keywords: ['research question', 'clear', 'focused', 'location', 'community', 'statement of inquiry', 'tourism', 'culture'],
    feedbackHit: 'Well done — a research question that is both clear and focused, connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ scores 1; one that is BOTH clear AND focused (e.g. names a specific community/location and a type of benefit) and connected to the SoI scores 2. Rewording the SoI into a question cannot be rewarded.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached. Rewording the SoI into a question cannot be rewarded.' },
      { marks: '1', descriptor: 'RQ is either clear OR focused, and connected to the SoI.', exemplar: 'How does an increase in tourism impact the culture of remote communities? (clear and connected but lacks focus — no named location)' },
      { marks: '2', descriptor: 'RQ is both clear AND focused and connected to the SoI.', exemplar: 'To what extent has ecotourism preserved biodiversity on Table Mountain in Cape Town?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Tourism to Vietnam has increased over the past 20 years and the once remote Hill Tribes are now a popular tourist attraction. My RQ focuses on how interactions from tourism could impact the culture of the remote communities. An increase in tourism could change the way of life of the Hill Tribes as the tourists demand facilities such as electricity or accommodation that is different from the traditional way of life of the Hill Tribes.',
    keyConcepts: ['investigation', 'relevance', 'reasoning', 'global interactions'],
    keywords: ['relevance', 'statement of inquiry', 'interactions', 'culture', 'way of life', 'reasons', 'worthy of investigating'],
    feedbackHit: 'Well done — you justified, with reasoning, why the RQ is relevant to the statement of inquiry.',
    feedbackMiss: 'Build from stating the relevance (1) → outlining it (2) → describing a factor in detail (3) → justifying with reasons why the RQ is relevant to the SoI (4). Explicit reference to the SoI is not required at the top band.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States the relevance of the research question to the statement of inquiry.', exemplar: 'It focuses on how interactions from tourism could impact the culture of remote communities.' },
      { marks: '2', descriptor: 'Outlines the relevance of the RQ to the SoI (a single factor with brief detail).', exemplar: '…An increase in tourism could change the way of life of the Hill Tribes.' },
      { marks: '3', descriptor: 'Describes the relevance of the RQ to the SoI (a factor in detail, without full reasoning).', exemplar: 'Tourism to Vietnam has increased over the past 20 years and the once remote Hill Tribes are now a popular tourist attraction. With an increase in tourism, cultural interactions increase and this could change the way of life of the Hill Tribes.' },
      { marks: '4', descriptor: 'Justifies the relevance of the RQ to the SoI (a factor in detail, with reasons).', exemplar: '…as the tourists demand facilities such as electricity or accommodation that is different from the traditional way of life of the Hill Tribes.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'This type of GIS map allows me to compare different data sets spatially to see patterns to see the impact of tourism in the area.',
    keyConcepts: ['sources', 'GIS', 'methods'],
    keywords: ['GIS map', 'benefit', 'limitation', 'compare data sets', 'spatially', 'patterns', 'cultural elements'],
    feedbackHit: 'Well done — you outlined a benefit or limitation of the GIS map with brief supporting detail.',
    feedbackMiss: 'State a benefit OR limitation (1), then elaborate it with brief detail (2), e.g. ‘the GIS map would not show cultural elements; it is difficult to map cultural elements using GIS.’',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States a benefit or a limitation of using a GIS map in their investigation.', exemplar: 'This type of GIS map allows me to compare different data sets spatially.' },
      { marks: '2', descriptor: 'Outlines a benefit or a limitation of using a GIS map (elaborated with brief detail).', exemplar: 'The GIS map would not show cultural elements. It is difficult to map cultural elements using GIS.' },
    ],
  },

  q4_d: {
    marks: 2,
    exemplar: 'Statistics on tourist numbers from the local government; a journal article on the society of the area.',
    keyConcepts: ['sources', 'secondary data'],
    keywords: ['secondary sources', 'government statistics', 'encyclopedia entry', 'journal article', 'documentary footage', 'specific'],
    feedbackHit: 'Well done — two valid, specific secondary sources.',
    feedbackMiss: 'Award 1 mark per valid secondary source up to 2. Examples: statistics from the local government; an encyclopedia entry on tourism in the area; journal articles on the society; documentary footage of the chosen environment. Vague responses such as ‘statistics’ are too vague — name the type of statistics.',
    commandTerm: 'List',
    commandTermDefinition: 'Give a sequence of brief answers with no explanation.',
    blankAnswers: ['Statistics on tourist numbers from the local government', 'Encyclopedia entry on tourism in the area', 'Journal articles on the society', 'Documentary footage of the chosen environment'],
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
      'TITLE: “Fair trade, fair future: how sustainable trade advances gender equality (SDG 5)”. Introduction — Sustainable trade focuses on liberating trade by removing barriers while protecting people. This report explains how it can help achieve Goal 5, Gender equality. Empowering women through trade — In Ethiopia, economic growth can be generated from sustainable trade in coffee. Gender equality can be achieved if fair trade is implemented as it promotes fairer prices of crops and an increase in the number of women in the workforce. Fair Trade improves the livelihood of women by ensuring they are empowered through better wages and improved access to training in agriculture. Female coffee farmers in Ethiopia, under the fair-trade scheme, receive more money for their crops; this money can be invested in improving primary education for girls in rural areas, and the primary school enrolment rate of girls has increased to 49% in Ethiopia. As 60–80% of the world’s food is grown by women, sustainable fair trade will have a large impact on achieving Goal 5. Removing trade barriers — Without tariffs, female coffee farmers can create more international partnerships; with tariffs, female farmers in Guatemala are unable to export to the USA, reducing demand. Conclusion / recommendation — Governments should expand fair-trade certification so that more of the women who grow the world’s food share fairly in the value of global trade.',
    keyConcepts: ['globalization', 'sustainability', 'disparity & equity', 'communication'],
    keywords: ['sustainable trade', 'SDG', 'Goal 5', 'gender equality', 'fair trade', 'tariffs', 'coffee', 'Ethiopia', 'women', 'wages', 'report', 'title', 'sub-headings'],
    feedbackHit: 'Well done — a report explaining how sustainable trade advances one chosen SDG, with a title, sub-headings, accurate examples and a conclusion.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Choose one SDG (1, 5 or 12), include a title and sub-headings, give accurate examples and relevant terminology, and write consistently in the style of a formal report. Criterion A rewards content only, not format or organization.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge/understanding: outlines how sustainable trade can contribute to progress in achieving one of the given SDGs, using minimal examples and limited relevant terminology.', exemplar: 'Goal 5 — Gender equality. In Ethiopia, economic growth can be generated from sustainable trade in coffee. Gender equality can be achieved if fair trade is implemented.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge/understanding: describes how sustainable trade can contribute to progress in achieving one of the given SDGs, using satisfactory examples and appropriate relevant terminology.', exemplar: '…fair trade promotes fairer prices of crops and an increase in the number of women in the workforce. Fair Trade improves the livelihood of women through better wages and access to training. As 60–80% of the world’s food is grown by women, sustainable fair trade will have a large impact on achieving Goal 5.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge/understanding: explains how sustainable trade can contribute to progress in achieving one of the given SDGs, using accurate examples and appropriate relevant terminology.', exemplar: '…Female coffee farmers in Ethiopia, under the fair-trade scheme, receive more money for their crops. This money can be invested in improving primary education for girls in rural areas.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge/understanding: thoroughly explains how sustainable trade can contribute to progress in achieving one of the given SDGs, using accurate and effective examples and appropriate relevant terminology.', exemplar: '…The primary school enrolment rate of girls has increased to 49% in Ethiopia. Sustainable trade focuses on liberating trade by removing barriers, which increases markets for coffee; without tariffs the farmers can create more international partnerships, while with tariffs female coffee farmers in Guatemala are unable to export to the USA, resulting in a decline in demand.' },
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
      'Over-exploitation through overgrazing is the greatest threat to forest biomes as it leads to desertification. Overgrazing from cattle farms removes vegetation, which causes erosion and leaching of nutrients from the soil. This makes the soil less fertile, causing further desertification that results in a loss of biodiversity. Overgrazing occurs in most forest biomes, especially the Amazon, and is set to increase with further demand for food, making this the largest threat.',
    keyConcepts: ['sustainability', 'geographic processes', 'causality'],
    keywords: ['biome', 'over-exploitation', 'overgrazing', 'pollution', 'deforestation', 'land-use change', 'desertification', 'erosion', 'biodiversity', 'greatest threat'],
    feedbackHit: 'Well done — you justified in detail, with a clear conclusion, why one human activity is the greatest threat to your chosen biome.',
    feedbackMiss: 'Build from saying how the activity is a threat (1) → outlining its impact (2) → justifying with developed reasons (3) → justifying in detail with a clear conclusion (4). Simply selecting a biome and naming an activity scores 0. Examples are not mandatory.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached. Marks cannot be awarded for simply selecting a biome and naming a human activity.' },
      { marks: '1', descriptor: 'Identifies why the selected human activity is the greatest threat to their chosen biome (says how the activity is a threat).', exemplar: 'Over-exploitation through overgrazing is the greatest threat to forest biomes.' },
      { marks: '2', descriptor: 'Outlines why the selected human activity is the greatest threat (the impact is briefly elaborated).', exemplar: 'Over-exploitation through overgrazing is the greatest threat to forest biomes as it leads to desertification.' },
      { marks: '3', descriptor: 'Justifies why the selected human activity is the greatest threat (developed reasons and detail; conclusion may be implied).', exemplar: '…Overgrazing from cattle farms removes vegetation, which causes erosion and leaching of nutrients from the soil. This would lead to a loss of biodiversity in the forest biome.' },
      { marks: '4', descriptor: 'Justifies in detail why the selected human activity is the greatest threat (thorough reasons and a clear conclusion; conclusion need not be at the end).', exemplar: '…This makes the soil less fertile, causing further desertification that results in a loss of biodiversity. Overgrazing occurs in most forest biomes, especially the Amazon, and is set to increase with further demand for food, making this the largest threat.' },
    ],
  },

  q7_a: {
    marks: 2,
    exemplar: 'It informs people about the Coral Triangle, by including the threats of human activities.',
    keyConcepts: ['source evaluation', 'purpose'],
    keywords: ['purpose', 'inform', 'Coral Triangle', 'threats', 'human activities', 'infographic'],
    feedbackHit: 'Well done — you outlined the purpose of Source C with brief supporting detail.',
    feedbackMiss: 'State the purpose (1), then elaborate it (2), e.g. ‘It informs people about the Coral Triangle, by including the threats of human activities.’',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States the purpose of Source C.', exemplar: 'It informs people about the Coral Triangle.' },
      { marks: '2', descriptor: 'Outlines the purpose of Source C (elaborated with brief detail).', exemplar: 'It informs people about the Coral Triangle, by including the threats of human activities.' },
    ],
  },

  q7_b: {
    marks: 3,
    exemplar:
      'It provides statistics on the unsustainable fishing of tuna in the Coral Triangle. These statistics will allow the marine biologist to assess the impact of fishing on the health of the fish population.',
    keyConcepts: ['source evaluation', 'value'],
    keywords: ['value', 'statistics', 'tuna', 'unsustainable fishing', 'marine biologist', 'fish population', 'impact'],
    feedbackHit: 'Well done — you explained one value of Source C to a marine biologist, in detail.',
    feedbackMiss: 'Build from stating a value (1) → outlining it with brief detail (2) → explaining a single value in detail (3). Reasoning is not required at the top band.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one value of Source C to a marine biologist studying the impact of fishing in the Coral Triangle.', exemplar: 'It provides statistics on tuna in the Coral Triangle.' },
      { marks: '2', descriptor: 'Outlines one value (1–2 sentences elaborating a single value with brief detail).', exemplar: 'It provides statistics on the unsustainable fishing of tuna in the Coral Triangle.' },
      { marks: '3', descriptor: 'Explains one value (2–3 sentences with a single value elaborated in detail).', exemplar: '…These statistics will allow the marine biologist to assess the impact of fishing on the health of the fish population.' },
    ],
  },

  q7_c: {
    marks: 3,
    exemplar:
      'The infographic does not cite all of its sources, making it unreliable. The lack of cited sources means the marine biologist cannot evaluate the credibility of the data given in the infographic.',
    keyConcepts: ['source evaluation', 'limitation', 'reliability'],
    keywords: ['limitation', 'sources not cited', 'unreliable', 'credibility', 'marine biologist', 'data', 'infographic'],
    feedbackHit: 'Well done — you explained one limitation of Source C to a marine biologist, in detail.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining it with brief detail (2) → explaining a single limitation in detail (3). Reasoning is not required at the top band.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one limitation of Source C to a marine biologist studying the impact of fishing in the Coral Triangle.', exemplar: 'The infographic does not cite all of its sources.' },
      { marks: '2', descriptor: 'Outlines one limitation (1–2 sentences elaborating a single limitation with brief detail).', exemplar: 'The infographic does not cite all of its sources, making it unreliable.' },
      { marks: '3', descriptor: 'Explains one limitation (2–3 sentences with a single limitation elaborated in detail).', exemplar: '…The lack of cited sources means the marine biologist cannot evaluate the credibility of the data given in the infographic.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Whether the sustainable management of biomes is more important than economic development is a key tension in geography, and to a large extent careful management is more important because the ecosystem services biomes provide underpin long-term development itself. On one hand, sustainable biome management is vital: forest biomes such as the Amazon store carbon, regulate the water cycle and hold huge biodiversity, so protecting them through measures like protected areas and selective logging reduces climate change and preserves resources for the future. On the other hand, many lower-income communities depend on economic development from biomes — clearing forest for cattle ranching or palm oil raises incomes and funds schools and hospitals — and to people facing poverty, development can feel more urgent than conservation. However, these perspectives are not wholly opposed: sustainable approaches such as ecotourism and certified sustainable timber can generate income while protecting the biome, so the two aims can be combined. Weighing these perspectives, the sustainable management of biomes is more important than unchecked economic development, because development that destroys a biome ultimately undermines the resources, climate stability and livelihoods on which future development depends — though the most convincing approach is one that pursues development sustainably rather than abandoning it.',
    keyConcepts: ['sustainability', 'management & intervention', 'disparity & equity', 'causality', 'synthesis'],
    keywords: ['sustainable management', 'biome', 'economic development', 'Amazon', 'deforestation', 'ecotourism', 'biodiversity', 'carbon', 'perspectives', 'conclusion', 'synthesis'],
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
