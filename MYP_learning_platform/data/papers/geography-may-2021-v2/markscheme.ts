import 'server-only'

/**
 * MYP Geography — May 2021 · Set 2 VARIANT mark scheme (rubric-banded, "best fit").
 *
 * Isomorphic to geography-may-2021: SAME keys, SAME marks, SAME rubricBand DESCRIPTORS
 * and command terms. Every `exemplar` is rewritten for the new scenarios (freshwater
 * degradation / peatland drainage / Tarnvik meltwater & mining / Aldoria wildfire GIS).
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
    exemplar: 'Irrigation for farming.',
    keyConcepts: ['freshwater degradation', 'data interpretation'],
    keywords: ['irrigation', 'biggest cause', 'Indara basin', 'Source B', 'table'],
    feedbackHit: 'Correct — irrigation for farming (164 km³) is the biggest cause of freshwater degradation in the Indara basin.',
    feedbackMiss: 'Read the largest row of the Indara table — irrigation for farming. A short response is acceptable. Where more than one answer is given the response is incorrect and scores 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Irrigation for farming', 'Irrigation'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'Indara.',
    keyConcepts: ['freshwater degradation', 'data interpretation'],
    keywords: ['Indara', 'most total fresh water degraded', 'Source B', 'comparison', 'km³'],
    feedbackHit: 'Correct — the Indara basin (278 km³) has the most total fresh water degraded, far more than Veltmark (96 km³).',
    feedbackMiss: 'Compare the two table totals — the Indara basin has the most total fresh water degraded. A short response is acceptable. Where more than one answer is given the response is incorrect and scores 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Indara', 'Indara basin'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'Irrigation withdraws huge volumes of water from rivers and groundwater to water crops, so the river’s flow falls and aquifers are drawn down faster than rain can refill them. As less fresh water remains in the system, what is left becomes more concentrated with salts and fertilizer washed off the fields, so its quality drops too. Over time the over-abstraction lowers the water table and the salt build-up damages the soil, which degrades both the quantity and quality of the basin’s fresh water.',
    keyConcepts: ['causality', 'freshwater degradation', 'water systems'],
    keywords: ['irrigation', 'over-abstraction', 'groundwater', 'water table', 'salinization', 'fertilizer', 'river flow', 'human activity'],
    feedbackHit: 'Well done — you explained how one human activity causes freshwater degradation in detail with clear reasons.',
    feedbackMiss: 'Build from stating how one human activity causes freshwater degradation (1) → outlining (2) → describing in detail (3) → explaining with reasons (4). A one-word response is not acceptable.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how one human activity causes freshwater degradation (a sentence hinting at a single cause; a one-word response is not acceptable).', exemplar: 'Irrigation takes water out of the river.' },
      { marks: '2', descriptor: 'Outlines how one human activity causes freshwater degradation (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'Irrigation withdraws large volumes of water from rivers and groundwater, so the river’s flow falls.' },
      { marks: '3', descriptor: 'Describes how one human activity causes freshwater degradation (one activity in detail, without comprehensive reasons; an example may support but is not required).', exemplar: 'Irrigation withdraws huge volumes of water to water crops, so the river’s flow falls and aquifers are drawn down. As less fresh water remains, what is left becomes more concentrated with salts and fertilizer washed off the fields.' },
      { marks: '4', descriptor: 'Explains how one human activity causes freshwater degradation (one activity in detail, with reason(s); an example may support but is not required).', exemplar: 'Irrigation withdraws huge volumes of water from rivers and groundwater, so the river’s flow falls and aquifers are drawn down faster than rain can refill them. As less fresh water remains in the system, what is left becomes more concentrated with salts and fertilizer washed off the fields, so its quality drops too. Over time the over-abstraction lowers the water table and the salt build-up degrades both the quantity and quality of the basin’s fresh water.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'Interviewing 12 different families from 4 different villages will provide the students with a variety of data to analyze. Different families from different villages might have different experiences of the drained bog, so interviewing them, each with unique insights, will give more valuable primary data. However, the action plan does not consider that some families may have an interest in keeping the drainage — for example those who cut turf to sell or who farm the cleared land — so their answers could be biased and play down the harm. This is a limitation, as the students would need to consider this bias, for example by also interviewing families who do not profit from the drainage; ignoring it would weaken the validity and reliability of the data. Although the action plan does not address this bias, the students are still measuring the water table and collecting secondary data, so overall the strengths of the action plan will allow the investigation to be successful.',
    keyConcepts: ['investigation', 'evaluation', 'reliability', 'validity'],
    keywords: ['strengths', 'limitations', 'appraisal', 'sample size', 'primary data', 'secondary data', 'water table', 'bias', 'validity', 'reliability'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s), then give an overall judgement. You do not need to discuss both strengths and limitations of every part of the plan; a suggestion for improvement counts as a limitation.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the action plan (one sentence referring to a single strength).', exemplar: 'The sample size of families is large enough to gather useful data.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the action plan (one strength elaborated with brief detail; three or more strengths outlined → 3).', exemplar: 'Interviewing 12 different families from 4 different villages will provide the students with a variety of data to analyze.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the action plan (one strength elaborated in additional detail with reasoning; or three or more strengths outlined).', exemplar: '…Different families from different villages might have different experiences of the drained bog, so interviewing 12 families from four villages, each with unique insights, will give more valuable primary data.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the action plan (one sentence referring to a single limitation; a suggestion for improvement counts).', exemplar: 'The action plan does not consider that some families may be biased because they profit from draining the bog.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the action plan (one limitation elaborated with brief detail; three or more limitations outlined → 3).', exemplar: 'The action plan does not consider that families who cut turf to sell or farm the cleared land may play down the harm, so their answers could be biased.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the action plan (one limitation elaborated in additional detail with reasoning; or three or more limitations outlined).', exemplar: '…This is a limitation, as the students would need to consider this bias, for example by also interviewing families who do not profit from the drainage. Ignoring it would weaken the validity and reliability of the data.' },
      { marks: 'Appraisal 1', descriptor: 'An appraisal is stated (a summary of strengths and limitations, or a brief judgement on the action plan; can appear anywhere in the response).', exemplar: 'Overall, the strengths of the action plan will allow the investigation to be successful.' },
      { marks: 'Appraisal 2', descriptor: 'An appraisal is outlined — weighs up both positive and negative points (implicitly or explicitly) into an overall judgement on the investigative process; can appear anywhere.', exemplar: 'Although the action plan does not address this bias, the students are still measuring the water table and collecting secondary data. Overall, the strengths of the action plan will allow the investigation to be successful.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How does the expansion of palm-oil plantations impact biodiversity in the rainforest of Borneo?',
    keyConcepts: ['investigation', 'research question', 'biomes'],
    keywords: ['research question', 'clear', 'focused', 'location', 'human activity', 'statement of inquiry', 'biome'],
    feedbackHit: 'Well done — a research question that is both clear and focused, naming a human activity and a location, connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ connected to the SoI scores 1; one that is BOTH clear AND focused (names a human activity and a location) scores 2. Re-wording the SoI, or reusing the Q3 RQ, scores 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached. Rewording the statement of inquiry into a question, or reusing the previous investigation’s RQ, cannot be rewarded.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry (references a human activity but lacks focus, e.g. no named location).', exemplar: 'How does the expansion of palm-oil plantations impact rainforests?' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry (references a human activity and is focused on a named location).', exemplar: 'How does the expansion of palm-oil plantations impact biodiversity in the rainforest of Borneo?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Expanding palm-oil plantations does not only clear the targeted trees but also destroys the layered habitat that many rainforest species depend on. This is called habitat loss. The clearance removes the canopy and breaks the forest into fragments, because of the large estates created, which disrupts the food chains and breeding ranges of many different species in the rainforest biome. My research question focuses on how human actions can decrease the biodiversity of the Borneo rainforest by focusing on the expansion of palm-oil plantations.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['relevance', 'habitat loss', 'fragmentation', 'food chain', 'biodiversity', 'rainforest biome', 'palm oil', 'statement of inquiry', 'reasons'],
    feedbackHit: 'Well done — you justified, with reasoning, the relevance of the research question to the statement of inquiry.',
    feedbackMiss: 'Build from stating relevance (1) → outlining (2) → describing a factor in detail (3) → justifying with reason(s) why the RQ is relevant to the SoI (4). Explicit reference to the SoI is not required.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States the relevance of the research question to the statement of inquiry (a single sentence making a simple connection between the SoI and the RQ; no detail required).', exemplar: 'It focuses on how human actions can decrease the biodiversity of the Borneo rainforest.' },
      { marks: '2', descriptor: 'Outlines the relevance of the research question to the statement of inquiry (a single sentence with two clauses or two/three short sentences; brief detail or a single factor).', exemplar: 'It focuses on how human actions can decrease the biodiversity of the Borneo rainforest by focusing on the expansion of palm-oil plantations.' },
      { marks: '3', descriptor: 'Describes the relevance of the research question to the statement of inquiry (at least one argument/factor considered in detail, without reason(s) why the RQ is relevant).', exemplar: 'Expanding palm-oil plantations causes habitat loss, which disrupts the food chains of many different species in the rainforest biome. My research question focuses on how human actions can decrease the biodiversity of the Borneo rainforest by focusing on the expansion of palm-oil plantations.' },
      { marks: '4', descriptor: 'Justifies the relevance of the research question to the statement of inquiry (at least one argument/factor in detail, along with reason(s) why the RQ is relevant).', exemplar: 'Expanding palm-oil plantations does not only clear the targeted trees but also destroys the layered habitat that many rainforest species depend on. This is called habitat loss. The clearance removes the canopy and breaks the forest into fragments, because of the large estates created, which disrupts the food chains and breeding ranges of many species in the rainforest biome. My research question focuses on how human actions can decrease the biodiversity of the Borneo rainforest by focusing on the expansion of palm-oil plantations.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'As the plantations are vast and remote, it will be hard for me to travel out and collect the relevant primary data.',
    keyConcepts: ['investigation', 'methods', 'challenges'],
    keywords: ['challenge', 'primary data', 'plantations', 'remote', 'difficult', 'collecting data'],
    feedbackHit: 'Well done — you outlined one challenge, elaborating on the reason for it.',
    feedbackMiss: 'State one challenge (1), then elaborate on the reason for it with brief detail (2), e.g. why collecting the relevant primary data would be difficult.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one challenge they might face in the investigation (a statement/fact about a possible challenge).', exemplar: 'A lack of primary data.' },
      { marks: '2', descriptor: 'Outlines one challenge they might face in the investigation (elaborates on the reason for the challenge with brief detail).', exemplar: 'As the plantations are vast and remote, it will be hard for me to travel out and collect the relevant primary data.' },
    ],
  },

  q4_d: {
    marks: 4,
    exemplar:
      'There are many plantation companies and conservation groups that record what lives in the forest. A field survey counting the number of bird and mammal species in cleared plots compared with intact forest would help me measure the impact this has on biodiversity in Borneo. If I can compare how many species survive in plantations versus undisturbed forest, I can evaluate how much the clearance has reduced the variety of life.',
    keyConcepts: ['investigation', 'methods', 'usefulness'],
    keywords: ['field survey', 'species count', 'data collection', 'plantations', 'biodiversity', 'benefit', 'reasons', 'excluding interviews'],
    feedbackHit: 'Well done — you explained the benefit of one non-interview method in detail with reasons.',
    feedbackMiss: 'Name one non-interview method (e.g. a field survey) and build from stating its benefit (1) → outlining (2) → describing in detail (3) → explaining with reasons (4). Simply stating a method scores 0.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States the benefit of one data-collection method, other than interviews (one sentence giving a basic benefit; simply stating a method cannot be awarded).', exemplar: 'A field survey would help me know how many species live in the cleared plots.' },
      { marks: '2', descriptor: 'Outlines the benefit of one data-collection method, other than interviews (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'A field survey of how many species live in the cleared plots would help me measure the impact this has on biodiversity in Borneo.' },
      { marks: '3', descriptor: 'Describes the benefit of one data-collection method, other than interviews (one benefit considered in detail, without comprehensive reasons).', exemplar: 'A field survey counting the number of bird and mammal species in cleared plots compared with intact forest would help me measure the impact this has on biodiversity in Borneo.' },
      { marks: '4', descriptor: 'Explains the benefit of one data-collection method, other than interviews (one benefit considered in detail, along with reason(s)).', exemplar: 'A field survey counting the number of bird and mammal species in cleared plots compared with intact forest would help me measure the impact this has on biodiversity in Borneo. If I can compare how many species survive in plantations versus undisturbed forest, I can evaluate how much the clearance has reduced the variety of life.' },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      'As you can see at point A, this valley needs sustainable management because warming is accelerating the glacier melt that feeds our river. Firstly, as the climate warms, the glacier melts faster and a meltwater lake is growing behind a weak dam of ice and rock; if it bursts, a glacial-lake-outburst flood would sweep down onto Tarnvik’s homes, farmland and the only valley road. My suggestion is that you adopt sustainable management here. I recommend installing an early-warning system and slowly draining the lake through controlled channels to lower the flood risk, while restoring riverside woodland to slow the summer melt-flows. This kind of managed approach has worked in the Himalayas, where lakes such as Imja have been partially drained and monitored to protect downstream villages. At point B, the upstream mine is discharging sediment and toxic metals into our drinking water, so I also recommend requiring the mine to treat its waste water in settling ponds before release and fining it if it does not comply. Therefore, given the evidence, I urge you to put these sustainable strategies in place to protect the meltwater river and the people of Tarnvik.',
    keyConcepts: ['management & intervention', 'sustainability', 'communication', 'water systems'],
    keywords: ['sustainable management', 'glacial-lake-outburst flood', 'meltwater', 'early-warning system', 'controlled drainage', 'mining pollution', 'settling ponds', 'Tarnvik', 'point A', 'point B', 'key/legend', 'concluding statement', 'presentation', 'persuasive'],
    feedbackHit: 'Well done — a persuasive presentation script explaining sustainable management strategies for the two labelled threats, with MYP examples, references to A/B and a closing summary.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Cover sustainable management strategies for two identified threats (A and B), include example(s), reference your labelled diagram, write in presentation style and add a key/legend and a concluding statement.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: 'CritA 1', descriptor: 'Limited knowledge and understanding: outlines sustainable management strategies, using limited examples and limited relevant terminology (may refer to only one strategy/threat).', exemplar: 'I suggest you make the mine treat its waste water before it goes into the river. This has worked in other mining areas.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge and understanding: describes sustainable management strategies that could be used in two identified locations, using satisfactory examples and appropriate relevant terminology (little or no reasoning; or detailed for one threat but not the other).', exemplar: 'As you can see at point A, the valley needs sustainable management because the glacier is melting faster and a meltwater lake could burst and flood the town. I recommend an early-warning system and draining the lake slowly. At point B the mine pollutes our water, so it should treat its waste in settling ponds. This kind of approach has worked in the Himalayas.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge and understanding: explains sustainable management strategies that could be used in two identified locations, using accurate examples and appropriate relevant terminology.', exemplar: 'As you can see at point A, this valley needs sustainable management because warming is accelerating the glacier melt that feeds our river… I recommend installing an early-warning system and slowly draining the lake through controlled channels. This has worked in the Himalayas, where lakes such as Imja have been partially drained and monitored to protect downstream villages. At point B the mine should treat its waste water in settling ponds before release.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge and understanding: thoroughly explains sustainable management strategies that could be used in two identified locations, using accurate and effective examples and appropriate relevant terminology (both locations covered in detail; one strategy mitigating two threats is acceptable).', exemplar: '…if it bursts, a glacial-lake-outburst flood would sweep down onto Tarnvik’s homes, farmland and the only valley road… I recommend installing an early-warning system and slowly draining the lake through controlled channels, while restoring riverside woodland to slow the summer melt-flows… At point B I recommend requiring the mine to treat its waste water in settling ponds before release and fining it if it does not comply.' },
      { marks: 'Format 1', descriptor: 'One of the following features is included: an appropriate key/legend (e.g. A = glacial-meltwater flooding; B = mining water pollution) OR a concluding/summary statement appropriate to the presentation.' },
      { marks: 'Format 2', descriptor: 'Two of the following features are included: an appropriate key/legend (e.g. A = glacial-meltwater flooding; B = mining water pollution) AND a concluding/summary statement appropriate to the presentation.' },
      { marks: 'Communicating 1–2', descriptor: 'Style and language rarely appropriate to a presentation for the valley authority and the purpose of explaining: reads more formally (like an essay); basic/simple, not engaging; no clear reference to the labelled image.' },
      { marks: 'Communicating 3–4', descriptor: 'Style and language occasionally appropriate: at times reads like an essay and at times like a presentation; references to the labelled image are required; some language features (rhetorical questions, concise sentences, emotive vocabulary) used to engage the audience.' },
      { marks: 'Communicating 5–6', descriptor: 'Style and language consistently appropriate to a presentation: reads like a presentation throughout (engages and appeals to the audience, signposts such as “as you can see”, “firstly”, “secondly”, uses personal pronouns/first person); references to the labelled image are required; language features often used to engage.' },
      { marks: 'Organization 1', descriptor: 'Structures information and ideas in a way that is rarely effective: ideas rarely build on each other logically; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'Structures information and ideas in a way that is occasionally effective: ideas occasionally build logically; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Structures information and ideas in a way that is mainly effective: ideas frequently build logically; often uses effective transitions.' },
      { marks: 'Organization 4', descriptor: 'Structures information and ideas in a way that is consistently effective: ideas consistently build in a clear, logical manner; always uses effective transitions.' },
    ],
  },

  q6_a: {
    marks: 1,
    exemplar: '3 (Pinhal Ridge, Solano Hills and Norte Plateau).',
    keyConcepts: ['source interpretation', 'wildfire hazard'],
    keywords: ['very high risk', 'zones', '3', 'Pinhal Ridge', 'Solano Hills', 'Norte Plateau', 'Source D'],
    feedbackHit: 'Correct — 3 zones are classed as very high wildfire risk (Pinhal Ridge, Solano Hills/X and Norte Plateau/Y).',
    feedbackMiss: 'Read the risk class of each zone and count the “very high risk” ones. Award for “3” or naming Pinhal Ridge, Solano Hills and Norte Plateau.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['3', 'Pinhal Ridge, Solano Hills and Norte Plateau'],
  },

  q6_b: {
    marks: 1,
    exemplar: 'Wildfire-Watch.',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['origin', 'Wildfire-Watch', 'Source D', 'attribution'],
    feedbackHit: 'Correct — the origin of Source D is Wildfire-Watch.',
    feedbackMiss: 'State who produced the source. Award for stating Wildfire-Watch.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Wildfire-Watch'],
  },

  q6_c: {
    marks: 2,
    exemplar: 'They know how high the risk of a wildfire is in their zone and can choose whether they want to live there.',
    keyConcepts: ['source evaluation', 'value', 'risk'],
    keywords: ['value', 'risk', 'wildfire', 'resident', 'choose where to live', 'Source D'],
    feedbackHit: 'Well done — you outlined one value of the briefing to a resident with a brief reason.',
    feedbackMiss: 'State one value of the briefing to a resident (1), then give a brief elaboration (2), e.g. they can judge the fire risk and decide whether to live there.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one value of Source D to a resident living in the region (a statement about the value of the briefing to residents).', exemplar: 'They know how high the risk of a wildfire is in their zone.' },
      { marks: '2', descriptor: 'Outlines one value of Source D to a resident living in the region (a brief sentence about the value of the briefing to residents).', exemplar: 'They know how high the risk of a wildfire is in their zone and can choose whether they want to live there.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'The briefing doesn’t show the impact of the wildfires, such as the number of deaths or homes destroyed.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['limitation', 'impact', 'wildfire', 'deaths', 'resident', 'Source D'],
    feedbackHit: 'Well done — you outlined one limitation of the briefing for a resident with a brief elaboration.',
    feedbackMiss: 'State one limitation (1), then elaborate with brief detail (2), e.g. the briefing does not show the impacts of the fires such as the number of deaths.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source D to a resident living in the region (a brief fact or hint about the limitation of the briefing to residents).', exemplar: 'The briefing doesn’t show the impact of the wildfires.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source D to a resident living in the region (elaborates on the limitation of the briefing to residents).', exemplar: 'The briefing doesn’t show the impact of the wildfires, such as the number of deaths or homes destroyed.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'Location X (Solano Hills), which is classed very high risk and has had more frequent fires — 19 recorded between 2010 and 2020 — which suggests it is more likely to burn again in the future. Location X also has a far higher population of 28,000, a dense town packed against the forest edge, close to where the fires start. Therefore, there is a higher risk from wildfire to a much larger proportion of the population. This means that many more people will benefit from the fire-resistant infrastructure and it could save more lives and homes. Location Y (Norte Plateau) is also very high risk but has had fewer fires (16) and a population of only 1,200 in scattered hamlets. The risk to people in Y is lower than in X, so the government’s money will not be as well spent here because it will protect far fewer people.',
    keyConcepts: ['justification', 'risk', 'management & intervention', 'disparity & equity'],
    keywords: ['Location X', 'Solano Hills', 'Location Y', 'Norte Plateau', 'wildfire', 'fire frequency', 'very high risk', 'population', 'fire-resistant', 'evidence'],
    feedbackHit: 'Well done — you justified your chosen location with in-depth, specific evidence from the briefing.',
    feedbackMiss: 'Choose X or Y and justify it with specific evidence from Source D (number of fires recorded, very-high-risk class, population at risk). Simply selecting a location scores 0; a short paragraph with in-depth arguments is needed for full marks.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below. Simply selecting a location cannot be awarded.' },
      { marks: '1', descriptor: 'Provides a limited justification on which location should be invested in (one or two sentences giving a basic supporting argument).', exemplar: 'Location X, which has had more fires in the past.' },
      { marks: '2–3', descriptor: 'Provides a satisfactory justification on which location should be invested in (brief argument(s); a 2-mark response gives less detail).', exemplar: 'Location X (Solano Hills), which has had more frequent fires and a much higher population close to the forest edge. Therefore, there is a higher risk from wildfire to the population. Location Y has had fewer fires and a much smaller population.' },
      { marks: '4–5', descriptor: 'Provides a detailed justification on which location should be invested in (detailed argument(s)).', exemplar: 'Location X (Solano Hills), which is very high risk and has had more frequent fires (19), which suggests it is more likely to burn again. Location X has a high population of 28,000 close to the forest edge. Therefore, there is a higher risk to a larger proportion of the population. Location Y has had fewer fires and only 1,200 people.' },
      { marks: '6', descriptor: 'Provides a thorough justification on which location should be invested in (in-depth arguments referring to specific details of why the location has been chosen; a short paragraph is likely required).', exemplar: 'Location X (Solano Hills), which is classed very high risk and has had more frequent fires — 19 recorded between 2010 and 2020… Location X also has a far higher population of 28,000 packed against the forest edge… This means that many more people will benefit from the fire-resistant infrastructure and it could save more lives and homes. Location Y (Norte Plateau) has had fewer fires (16) and a population of only 1,200, so the government’s money will not be as well spent here because it will protect far fewer people.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Secondary effects of wildfires, such as toxic smoke, soil erosion, flooding and lost livelihoods, often pose a greater risk to people and property than the primary effects of the flames themselves, because they reach far beyond the fire and last long after it is out. On one hand, secondary effects are devastating: in the 2020 California wildfires the primary flames destroyed many homes, but the secondary smoke blanketed cities hundreds of kilometres away, causing widespread breathing problems, and once the burnt slopes were exposed the following rains triggered mudslides that buried roads and houses. Similarly, after major Australian bushfires the loss of grazing land and tourism income harmed rural communities for years, spreading the impact far beyond those directly burned. On the other hand, primary effects can be the greater risk where the fire is fast and intense: a crown fire racing through dry forest can overrun a town before anyone can escape, killing instantly and destroying property in minutes. Different perspectives also matter: a wealthy, well-prepared region may stop the flames with firebreaks and air support yet still suffer weeks of toxic smoke, while a poorer rural community may lose everything in the initial burn because it cannot evacuate or rebuild. Weighing these perspectives, secondary effects pose a greater risk to a large extent, because they affect wider areas and persist long after the fire — yet the balance depends on the speed and intensity of the fire, the level of preparedness and the wealth of the affected community.',
    keyConcepts: ['causality', 'risk', 'disparity & equity', 'management & intervention', 'synthesis'],
    keywords: ['primary effects', 'secondary effects', 'wildfire', 'smoke', 'soil erosion', 'mudslide', 'crown fire', 'California', 'Australia', 'preparedness', 'perspectives', 'conclusion', 'synthesis'],
    feedbackHit: 'Well done — a structured essay weighing secondary vs primary wildfire effects, with balanced perspectives, named wildfire examples, geographical terms and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Give two perspectives (for and against), refer to forest and/or scrubland fires with named examples in detail, use geographical terms, and reach a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: 'CritA 1–2', descriptor: 'Limited contextual and conceptual understanding in an outline, using limited examples and limited terminology (responses likely brief with little detail).' },
      { marks: 'CritA 3–4', descriptor: 'Adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology (accurate example(s), possibly lacking detail; some reasons may be provided).' },
      { marks: 'CritA 5–6', descriptor: 'Substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate terminology (an explanation requires reasons; calls on appropriate examples such as previous wildfires; terminology accurate and effective in most of the essay).' },
      { marks: 'CritA 7–8', descriptor: 'Detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate terminology (accurate detail throughout with clear reasons; references examples such as previous wildfires in detail; terminology accurate and effective throughout).' },
      { marks: 'Format 1', descriptor: 'Two of the following elements are included as separate paragraphs: introduction, a main body of argument or a conclusion. (If they do not appear as separate paragraphs, 0 marks.)' },
      { marks: 'Format 2', descriptor: 'Three of the following elements are included as separate paragraphs: introduction, a main body of argument and a conclusion.' },
      { marks: 'Communicating 1', descriptor: 'Style and language rarely appropriate to the audience and purpose of informing: style rarely consistent with an essay; language may be mostly unclear; text may be very short.' },
      { marks: 'Communicating 2', descriptor: 'Style and language occasionally appropriate: style not always consistent; may appear more informal than expected in an essay; language less clear in places.' },
      { marks: 'Communicating 3', descriptor: 'Style and language consistently appropriate: style consistent with an essay; language formal and clear.' },
      { marks: 'Organization 1', descriptor: 'Organizational structure rarely effective: paragraphs/ideas sometimes build logically; rarely uses effective transitions; text may be very short.' },
      { marks: 'Organization 2', descriptor: 'Organizational structure occasionally effective: paragraphs/ideas build in a mainly logical manner; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Organizational structure consistently effective: paragraphs/ideas build in a consistently clear and logical manner; uses effective transitions between sentences and/or paragraphs.' },
      { marks: 'CritD 0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: 'CritD 1–2', descriptor: 'One perspective in a basic analysis; summarizes information to a limited extent in response to the question (the perspective is considered superficially; may not reach a conclusion or fully answer the question).' },
      { marks: 'CritD 3–4', descriptor: 'Different perspectives (for and against) in an analysis; summarizes information to make clear arguments (perspectives developed to show some understanding and their implications, not necessarily balanced; a conclusion on which effects pose the most risk, likely not fully developed; may conclude they pose equal risk).' },
      { marks: 'CritD 5–6', descriptor: 'Different perspectives in an analysis; synthesizes information to make clear arguments (perspectives with substantial development showing good understanding; ideas combined into a clear and coherent conclusion; synthesis may appear in the body or conclusion).' },
      { marks: 'CritD 7–8', descriptor: 'Different perspectives in a detailed, balanced discussion; synthesizes information to make clear arguments (perspectives with thorough development showing excellent understanding; the two perspectives must be balanced; ideas combined into a clear, coherent and convincing conclusion indicating which factor is most important).' },
    ],
  },
}
