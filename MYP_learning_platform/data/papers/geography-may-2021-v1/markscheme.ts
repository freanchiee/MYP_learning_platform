import 'server-only'

/**
 * MYP Geography — May 2021 · Set 1 VARIANT mark scheme (rubric-banded, "best fit").
 *
 * Isomorphic to geography-may-2021: SAME keys, SAME marks, SAME rubricBand DESCRIPTORS
 * and command terms. Every `exemplar` is rewritten for the new scenarios (air pollution /
 * coral-reef bleaching / Marisport urban-heat & coastal-flooding / monsoon-Asia flood GIS).
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
    exemplar: 'Road transport.',
    keyConcepts: ['air pollution', 'data interpretation'],
    keywords: ['road transport', 'biggest source', 'Hazepur', 'Source B', 'bar chart'],
    feedbackHit: 'Correct — road transport (32 %) is the biggest source of air pollution in Hazepur.',
    feedbackMiss: 'Read the tallest Hazepur bar — road transport (32 %). A short response is acceptable. Where more than one answer is given the response is incorrect and scores 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Road transport'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'Construction and dust.',
    keyConcepts: ['air pollution', 'data interpretation'],
    keywords: ['construction', 'dust', 'most', 'Marisport', 'Source B', 'comparison'],
    feedbackHit: 'Correct — construction & dust (46 %) contributes the most to air pollution in Marisport.',
    feedbackMiss: 'Read the tallest Marisport bar — construction & dust (46 %). A short response is acceptable. Where more than one answer is given the response is incorrect and scores 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Construction & dust', 'Construction and dust'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'Road transport burns petrol and diesel in vehicle engines, which releases fine particles (PM2.5) and nitrogen oxides into the air. Because a megacity has heavy traffic concentrated in a small area, these emissions build up faster than the wind can disperse them, so the concentration of pollutants in the air rises. Breathing this polluted air damages people’s lungs and lowers air quality across the whole city.',
    keyConcepts: ['causality', 'air pollution', 'atmosphere'],
    keywords: ['road transport', 'fossil fuels', 'diesel', 'fine particles', 'PM2.5', 'nitrogen oxides', 'traffic', 'concentration', 'human activity'],
    feedbackHit: 'Well done — you explained how one human activity causes air pollution in detail with clear reasons.',
    feedbackMiss: 'Build from stating how one human activity causes air pollution (1) → outlining (2) → describing in detail (3) → explaining with reasons (4). A one-word response is not acceptable.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how one human activity causes air pollution (a sentence hinting at a single cause; a one-word response is not acceptable).', exemplar: 'Road transport releases pollution into the air.' },
      { marks: '2', descriptor: 'Outlines how one human activity causes air pollution (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'Road transport burns diesel and petrol, which releases fine particles into the air.' },
      { marks: '3', descriptor: 'Describes how one human activity causes air pollution (one activity in detail, without comprehensive reasons; an example may support but is not required).', exemplar: 'Road transport burns petrol and diesel in vehicle engines, which releases fine particles and nitrogen oxides into the air. In a busy city this builds up because there is so much traffic, lowering air quality.' },
      { marks: '4', descriptor: 'Explains how one human activity causes air pollution (one activity in detail, with reason(s); an example may support but is not required).', exemplar: 'Road transport burns petrol and diesel in vehicle engines, which releases fine particles (PM2.5) and nitrogen oxides into the air. Because a megacity has heavy traffic concentrated in a small area, these emissions build up faster than the wind can disperse them, so the concentration of pollutants rises and air quality across the whole city falls.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'Interviewing 12 different families from 4 different reef towns will provide the students with a variety of data to analyze. Different families from different towns might have very different experiences of bleaching — some rely on fishing, others on tourism — so interviewing them, each with unique insights into the issue, will give more valuable primary data. However, the action plan does not consider that families have a strong reason to exaggerate how badly bleaching has affected their income, hoping it will lead to compensation or support. This is a limitation, as it could bias the interview answers and reduce the validity and reliability of the data; the students would need to cross-check what they are told against the water-clarity readings and the secondary coral-cover statistics. Although the action plan does not explain how it will check for this bias, the students are still collecting objective water-clarity readings and secondary data, so overall the strengths of the action plan will allow the investigation to be successful.',
    keyConcepts: ['investigation', 'evaluation', 'reliability', 'validity'],
    keywords: ['strengths', 'limitations', 'appraisal', 'sample size', 'primary data', 'secondary data', 'water-clarity readings', 'bias', 'exaggerate', 'validity', 'reliability'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s), then give an overall judgement. You do not need to discuss both strengths and limitations of every part of the plan; a suggestion for improvement counts as a limitation.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the action plan (one sentence referring to a single strength).', exemplar: 'The sample size of families is large enough to gather useful data.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the action plan (one strength elaborated with brief detail; three or more strengths outlined → 3).', exemplar: 'Interviewing 12 different families from 4 different reef towns will provide the students with a variety of data to analyze.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the action plan (one strength elaborated in additional detail with reasoning; or three or more strengths outlined).', exemplar: '…Different families from different towns might have very different experiences of bleaching — some rely on fishing, others on tourism — so interviewing 12 families from four towns, each with unique insights, will give more valuable primary data.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the action plan (one sentence referring to a single limitation; a suggestion for improvement counts).', exemplar: 'The action plan does not consider that families might exaggerate how badly bleaching has affected their income.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the action plan (one limitation elaborated with brief detail; three or more limitations outlined → 3).', exemplar: 'The action plan does not consider that families have a reason to exaggerate how badly bleaching has affected their income, hoping it will lead to support.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the action plan (one limitation elaborated in additional detail with reasoning; or three or more limitations outlined).', exemplar: '…This is a limitation, as exaggeration could bias the interview answers and reduce the validity and reliability of the data; the students would need to cross-check the interviews against the water-clarity readings and the secondary coral-cover statistics.' },
      { marks: 'Appraisal 1', descriptor: 'An appraisal is stated (a summary of strengths and limitations, or a brief judgement on the action plan; can appear anywhere in the response).', exemplar: 'Overall, the strengths of the action plan will allow the investigation to be successful.' },
      { marks: 'Appraisal 2', descriptor: 'An appraisal is outlined — weighs up both positive and negative points (implicitly or explicitly) into an overall judgement on the investigative process; can appear anywhere.', exemplar: 'Although the action plan does not explain how it will check for exaggeration, the students are still collecting objective water-clarity readings and secondary data. Overall, the strengths of the action plan will allow the investigation to be successful.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How does the growth of palm-oil plantations affect biodiversity in the rainforests of Borneo?',
    keyConcepts: ['investigation', 'research question', 'biomes'],
    keywords: ['research question', 'clear', 'focused', 'location', 'human activity', 'statement of inquiry', 'biome'],
    feedbackHit: 'Well done — a research question that is both clear and focused, naming a human activity and a location, connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ connected to the SoI scores 1; one that is BOTH clear AND focused (names a human activity and a location) scores 2. Re-wording the SoI, or reusing the Q3 RQ, scores 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached. Rewording the statement of inquiry into a question, or reusing the previous investigation’s RQ, cannot be rewarded.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry (references a human activity but lacks focus, e.g. no named location).', exemplar: 'How does the growth of palm-oil plantations affect rainforests?' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry (references a human activity and is focused on a named location).', exemplar: 'How does the growth of palm-oil plantations affect biodiversity in the rainforests of Borneo?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Growing palm oil does not only mean planting one crop; it means clearing large areas of natural rainforest first. This is called land clearance. Palm-oil expansion results in widespread land clearance, because plantations need huge continuous areas, which removes the habitat of many different species in the rainforest biome. My research question focuses on how a human activity can decrease the biodiversity of the Borneo rainforest by focusing on the growth of palm-oil plantations.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['relevance', 'land clearance', 'habitat', 'biodiversity', 'rainforest biome', 'palm oil', 'statement of inquiry', 'reasons'],
    feedbackHit: 'Well done — you justified, with reasoning, the relevance of the research question to the statement of inquiry.',
    feedbackMiss: 'Build from stating relevance (1) → outlining (2) → describing a factor in detail (3) → justifying with reason(s) why the RQ is relevant to the SoI (4). Explicit reference to the SoI is not required.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States the relevance of the research question to the statement of inquiry (a single sentence making a simple connection between the SoI and the RQ; no detail required).', exemplar: 'It focuses on how a human activity can decrease the biodiversity of the Borneo rainforest.' },
      { marks: '2', descriptor: 'Outlines the relevance of the research question to the statement of inquiry (a single sentence with two clauses or two/three short sentences; brief detail or a single factor).', exemplar: 'It focuses on how a human activity can decrease the biodiversity of the Borneo rainforest by focusing on the growth of palm-oil plantations.' },
      { marks: '3', descriptor: 'Describes the relevance of the research question to the statement of inquiry (at least one argument/factor considered in detail, without reason(s) why the RQ is relevant).', exemplar: 'Palm-oil expansion results in widespread land clearance, which removes the habitat of many different species in the rainforest biome. My research question focuses on how a human activity can decrease the biodiversity of the Borneo rainforest by focusing on the growth of palm-oil plantations.' },
      { marks: '4', descriptor: 'Justifies the relevance of the research question to the statement of inquiry (at least one argument/factor in detail, along with reason(s) why the RQ is relevant).', exemplar: 'Growing palm oil means clearing large areas of natural rainforest first. This is called land clearance. Palm-oil expansion results in widespread land clearance, because plantations need huge continuous areas, which removes the habitat of many different species in the rainforest biome. My research question focuses on how a human activity can decrease the biodiversity of the Borneo rainforest by focusing on the growth of palm-oil plantations.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'As the plantations are so large and remote, it will be hard for me to travel there and collect the relevant primary data.',
    keyConcepts: ['investigation', 'methods', 'challenges'],
    keywords: ['challenge', 'primary data', 'plantations', 'remote', 'difficult', 'collecting data'],
    feedbackHit: 'Well done — you outlined one challenge, elaborating on the reason for it.',
    feedbackMiss: 'State one challenge (1), then elaborate on the reason for it with brief detail (2), e.g. why collecting the relevant primary data would be difficult.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one challenge they might face in the investigation (a statement/fact about a possible challenge).', exemplar: 'A lack of primary data.' },
      { marks: '2', descriptor: 'Outlines one challenge they might face in the investigation (elaborates on the reason for the challenge with brief detail).', exemplar: 'As the plantations are so large and remote, it will be hard for me to travel there and collect the relevant primary data.' },
    ],
  },

  q4_d: {
    marks: 4,
    exemplar:
      'There are lots of plantation companies and conservation groups that monitor the Borneo rainforest. A survey of how many hectares of forest each plantation clears per year would help me calculate the impact this has on biodiversity in Borneo. If I can understand how much habitat is lost each year, I can evaluate the impact this has on the species that live in the rainforest.',
    keyConcepts: ['investigation', 'methods', 'usefulness'],
    keywords: ['survey', 'data collection', 'land clearance', 'biodiversity', 'habitat', 'benefit', 'reasons', 'excluding interviews'],
    feedbackHit: 'Well done — you explained the benefit of one non-interview method in detail with reasons.',
    feedbackMiss: 'Name one non-interview method (e.g. a survey) and build from stating its benefit (1) → outlining (2) → describing in detail (3) → explaining with reasons (4). Simply stating a method scores 0.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States the benefit of one data-collection method, other than interviews (one sentence giving a basic benefit; simply stating a method cannot be awarded).', exemplar: 'A survey of plantation companies would help me know how much forest they clear.' },
      { marks: '2', descriptor: 'Outlines the benefit of one data-collection method, other than interviews (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'A survey of plantation companies would help me know how much forest they clear and calculate the impact this has on biodiversity in Borneo.' },
      { marks: '3', descriptor: 'Describes the benefit of one data-collection method, other than interviews (one benefit considered in detail, without comprehensive reasons).', exemplar: 'There are lots of plantation companies and conservation groups that monitor the rainforest. A survey of how many hectares of forest each plantation clears would help me calculate the impact this has on biodiversity in Borneo.' },
      { marks: '4', descriptor: 'Explains the benefit of one data-collection method, other than interviews (one benefit considered in detail, along with reason(s)).', exemplar: 'There are lots of plantation companies and conservation groups that monitor the Borneo rainforest. A survey of how many hectares of forest each plantation clears per year would help me calculate the impact this has on biodiversity in Borneo. If I can understand how much habitat is lost each year, I can evaluate the impact this has on the species that live in the rainforest.' },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      'As you can see at point A, the city centre suffers from an urban heat island, where concrete and glass trap heat so summers are several degrees hotter than the countryside. Firstly, the lack of trees and parks means there is no shade and no cooling from plants, which puts residents at risk during heatwaves. My suggestion is that you green the city centre sustainably: plant street trees and create pocket parks, and require new buildings to have green or reflective roofs. This works — in Singapore, green roofs and a “city in a garden” policy have measurably lowered urban temperatures. At point B, the low-lying harbour district floods at spring tides and in storms, and old sea defences cannot cope with rising sea levels. I recommend a sustainable, soft-engineering approach: restore the upstream wetland so it can store floodwater, and build a managed coastal marsh in front of the harbour to absorb wave energy, rather than only raising concrete walls. The Thames Estuary uses managed realignment in just this way. Therefore, given the evidence, I think the council should green the centre to cool point A and use wetland restoration to protect point B, so that Marisport stays both cooler and safer.',
    keyConcepts: ['management & intervention', 'sustainability', 'communication', 'urban systems'],
    keywords: ['sustainable management', 'urban heat island', 'green roofs', 'street trees', 'coastal flooding', 'wetland restoration', 'managed realignment', 'Marisport', 'point A', 'point B', 'key/legend', 'concluding statement', 'presentation', 'persuasive'],
    feedbackHit: 'Well done — a persuasive presentation script explaining sustainable management strategies for the two labelled threats, with MYP examples, references to A/B and a closing summary.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Cover sustainable management strategies for two identified locations (A and B), include example(s), reference your labelled briefing, write in presentation style and add a key/legend and a concluding statement.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: 'CritA 1', descriptor: 'Limited knowledge and understanding: outlines sustainable management strategies, using limited examples and limited relevant terminology (may refer to only one strategy/threat).', exemplar: 'I suggest you plant trees in the city centre to cool it down. This works in Singapore.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge and understanding: describes sustainable management strategies that could be used in two identified locations, using satisfactory examples and appropriate relevant terminology (little or no reasoning; or detailed for one threat but not the other).', exemplar: 'At point A the city centre is an urban heat island because concrete traps heat. My suggestion is to plant street trees and add green roofs… this works in Singapore. At point B the harbour floods, so I recommend restoring the wetland to store floodwater.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge and understanding: explains sustainable management strategies that could be used in two identified locations, using accurate examples and appropriate relevant terminology.', exemplar: 'As you can see at point A, the city centre suffers from an urban heat island, where concrete and glass trap heat… My suggestion is to green the city centre with street trees and green roofs, as Singapore has done to lower temperatures. At point B the harbour floods, so I recommend restoring the upstream wetland to store floodwater, as the Thames Estuary does.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge and understanding: thoroughly explains sustainable management strategies that could be used in two identified locations, using accurate and effective examples and appropriate relevant terminology (both locations covered in detail; one strategy mitigating two threats is acceptable).', exemplar: '…the lack of trees and parks means there is no shade and no cooling from plants… green or reflective roofs… in Singapore… At point B… build a managed coastal marsh in front of the harbour to absorb wave energy rather than only raising concrete walls, as the Thames Estuary uses managed realignment…' },
      { marks: 'Format 1', descriptor: 'One of the following features is included: an appropriate key/legend (e.g. A = urban heat island; B = coastal flooding) OR a concluding/summary statement appropriate to the presentation.' },
      { marks: 'Format 2', descriptor: 'Two of the following features are included: an appropriate key/legend (e.g. A = urban heat island; B = coastal flooding) AND a concluding/summary statement appropriate to the presentation.' },
      { marks: 'Communicating 1–2', descriptor: 'Style and language rarely appropriate to a presentation for local government officials and the purpose of explaining: reads more formally (like an essay); basic/simple, not engaging; no clear reference to the labelled image.' },
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
    exemplar: '8 countries.',
    keyConcepts: ['source interpretation', 'flood risk'],
    keywords: ['flood risk', 'highlighted', 'countries', '8', 'Source D', 'map'],
    feedbackHit: 'Correct — 8 countries are highlighted as being at very high river-flood risk in Source D.',
    feedbackMiss: 'Count the highlighted countries in the very-high-flood-risk set in Source D. The answer is 8.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['8', '8 countries', 'Eight'],
  },

  q6_b: {
    marks: 1,
    exemplar: 'World-Flood-Watch.',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['origin', 'World-Flood-Watch', 'Source D', 'attribution'],
    feedbackHit: 'Correct — the origin of Source D is World-Flood-Watch.',
    feedbackMiss: 'State who produced the source. Award for stating World-Flood-Watch.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['World-Flood-Watch'],
  },

  q6_c: {
    marks: 2,
    exemplar: 'They know how high the risk of river flooding is and can choose whether they want to live there.',
    keyConcepts: ['source evaluation', 'value', 'risk'],
    keywords: ['value', 'risk', 'river flooding', 'resident', 'choose where to live', 'Source D'],
    feedbackHit: 'Well done — you outlined one value of the map to a resident with a brief reason.',
    feedbackMiss: 'State one value of the map to a resident (1), then give a brief elaboration (2), e.g. they can judge the flood risk and decide whether to live there.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one value of Source D to a resident living in monsoon Asia (a statement about the value of the map to residents).', exemplar: 'They know how high the risk of river flooding is.' },
      { marks: '2', descriptor: 'Outlines one value of Source D to a resident living in monsoon Asia (a brief sentence about the value of the map to residents).', exemplar: 'They know how high the risk of river flooding is and can choose whether they want to live there.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'The map doesn’t show the impact of the flooding, such as the number of deaths, or which areas inside a country are worst hit.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['limitation', 'impact', 'flooding', 'deaths', 'within country', 'resident', 'Source D'],
    feedbackHit: 'Well done — you outlined one limitation of the map for a resident with a brief elaboration.',
    feedbackMiss: 'State one limitation (1), then elaborate with brief detail (2), e.g. the map does not show the impacts of the flooding such as the number of deaths, or which parts of a country are worst affected.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source D to a resident living in monsoon Asia (a brief fact or hint about the limitation of the map to residents).', exemplar: 'The map doesn’t show the impact of the flooding.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source D to a resident living in monsoon Asia (elaborates on the limitation of the map to residents).', exemplar: 'The map doesn’t show the impact of the flooding, such as the number of deaths, or which areas inside a country are worst hit.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'Location X (Cambodia), which lies on the low-lying Mekong floodplain near the river mouth, where heavy monsoon rains and the river delta combine to cause severe, frequent flooding. Location X also has a high population density along the riverside, so a larger proportion of people are exposed to the floods. Therefore, there is a higher flood risk to far more people. This means that more people will benefit from the raised embankments and early-warning systems and this could save more lives. Location Y (Laos) is mountainous and upstream, so floodwater drains away more quickly and the population density is lower. The flood risk in Y is lower than in X, so the government’s money will not be as well spent here as it will not protect as many people.',
    keyConcepts: ['justification', 'risk', 'management & intervention', 'disparity & equity'],
    keywords: ['Location X', 'Cambodia', 'Location Y', 'Laos', 'floodplain', 'delta', 'monsoon', 'population density', 'upstream', 'flood risk', 'embankments', 'evidence'],
    feedbackHit: 'Well done — you justified your chosen location with in-depth, specific evidence from the map.',
    feedbackMiss: 'Choose X (Cambodia) or Y (Laos) and justify it with specific evidence from Source D (position in the basin — low floodplain near the delta vs mountainous upstream — and population density). Simply selecting a location scores 0; a short paragraph with in-depth arguments is needed for full marks.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below. Simply selecting a location cannot be awarded.' },
      { marks: '1', descriptor: 'Provides a limited justification on which location should be invested in (one or two sentences giving a basic supporting argument).', exemplar: 'Location X (Cambodia), which floods more because it is low-lying.' },
      { marks: '2–3', descriptor: 'Provides a satisfactory justification on which location should be invested in (brief argument(s); a 2-mark response gives less detail).', exemplar: 'Location X (Cambodia), which lies on the low Mekong floodplain near the river mouth and has a high riverside population density. Therefore, there is a higher flood risk to the population. Location Y (Laos) is upstream and mountainous, so it floods less.' },
      { marks: '4–5', descriptor: 'Provides a detailed justification on which location should be invested in (detailed argument(s)).', exemplar: 'Location X (Cambodia), which lies on the low-lying Mekong floodplain near the river mouth, where monsoon rains and the delta combine to cause severe, frequent flooding. Location X also has a high riverside population density, so more people are exposed. Location Y (Laos) is mountainous and upstream, so it floods less.' },
      { marks: '6', descriptor: 'Provides a thorough justification on which location should be invested in (in-depth arguments referring to specific details of why the location has been chosen; a short paragraph is likely required).', exemplar: 'Location X (Cambodia)… lies on the low-lying Mekong floodplain near the river mouth… Location X also has a high population density along the riverside… This means more people will benefit from the embankments and early-warning systems and this could save more lives. Location Y (Laos) is mountainous and upstream so floodwater drains away quickly and population density is lower. The flood risk in Y is lower than in X, so the government’s money will not be as well spent here.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Secondary effects of flooding, such as disease, contaminated water, ruined crops and long-term displacement, often pose a greater risk to people and property than the primary effects of drowning and immediate damage, because they affect wider areas over a much longer period. On one hand, secondary effects are devastating: after the 2010 Pakistan floods, the primary inundation caused many deaths, but it was the secondary effects — outbreaks of cholera and other waterborne diseases, destroyed harvests and millions left homeless for months — that affected around 20 million people and did the lasting harm. Similarly, after the 2011 Bangkok floods in Thailand, the secondary collapse of factory supply chains damaged the national economy long after the water drained away. On the other hand, primary effects can be the greater risk where the flooding is sudden and violent: a flash flood or a storm surge can drown people and sweep away homes in minutes, leaving no time to respond, as in coastal flooding from tropical cyclones. Different perspectives also matter: a wealthy, well-prepared country may survive the primary flood through good defences and warnings but still face costly secondary disruption, while a poorer community may suffer most from the immediate drowning and house collapse because housing is weak and escape is hard. Weighing these perspectives, secondary effects pose a greater risk to a large extent, because they are widespread, long-lasting and often strike communities that are already weakened — yet the balance depends on the speed and type of flood, the level of preparedness and the wealth of the affected community.',
    keyConcepts: ['causality', 'risk', 'disparity & equity', 'management & intervention', 'synthesis'],
    keywords: ['primary effects', 'secondary effects', 'flooding', 'river flooding', 'coastal flooding', 'disease', 'cholera', 'displacement', 'Pakistan floods', 'Bangkok floods', 'storm surge', 'preparedness', 'perspectives', 'conclusion', 'synthesis'],
    feedbackHit: 'Well done — a structured essay weighing secondary vs primary flood effects, with balanced perspectives, named flood examples, geographical terms and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Give two perspectives (for and against), refer to river and/or coastal flooding with named examples in detail, use geographical terms, and reach a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: 'CritA 1–2', descriptor: 'Limited contextual and conceptual understanding in an outline, using limited examples and limited terminology (responses likely brief with little detail).' },
      { marks: 'CritA 3–4', descriptor: 'Adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology (accurate example(s), possibly lacking detail; some reasons may be provided).' },
      { marks: 'CritA 5–6', descriptor: 'Substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate terminology (an explanation requires reasons; calls on appropriate examples such as previous flood events; terminology accurate and effective in most of the essay).' },
      { marks: 'CritA 7–8', descriptor: 'Detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate terminology (accurate detail throughout with clear reasons; references examples such as previous flood events in detail; terminology accurate and effective throughout).' },
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
