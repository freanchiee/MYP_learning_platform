import 'server-only'

/**
 * MYP Geography — May 2021 mark scheme (rubric-banded, "best fit").
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
    exemplar: 'Overgrazing.',
    keyConcepts: ['land degradation', 'data interpretation'],
    keywords: ['overgrazing', 'biggest cause', 'Asia', 'Source B', 'doughnut'],
    feedbackHit: 'Correct — overgrazing (118.8 Mha) is the biggest cause of land degradation in Asia.',
    feedbackMiss: 'Read the largest slice of the Asia doughnut — overgrazing. A one-word response is acceptable. Where more than one answer is given the response is incorrect and scores 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Overgrazing'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'Asia.',
    keyConcepts: ['land degradation', 'data interpretation'],
    keywords: ['Asia', 'most total land degraded', 'Source B', 'comparison', 'Mha'],
    feedbackHit: 'Correct — Asia (370.3 Mha) has the most total land degraded, far more than Australia (87.5 Mha).',
    feedbackMiss: 'Compare the two doughnut totals — Asia has the most total land degraded. A one-word response is acceptable. Where more than one answer is given the response is incorrect and scores 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Asia'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'Overgrazing removes the plant cover over the soil as the animals eat them, leading to soil erosion. Without plants to keep the soil in place, the top layer of soil is exposed so water and wind can now wash away the top layer. With this soil erosion, the nutrients are removed, which weakens the structure and fertility of the soil.',
    keyConcepts: ['causality', 'land degradation', 'soil systems'],
    keywords: ['overgrazing', 'plant cover', 'soil erosion', 'top layer', 'nutrients', 'structure', 'fertility', 'human activity'],
    feedbackHit: 'Well done — you explained how one human activity causes land degradation in detail with clear reasons.',
    feedbackMiss: 'Build from stating how one human activity causes land degradation (1) → outlining (2) → describing in detail (3) → explaining with reasons (4). A one-word response is not acceptable.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how one human activity causes land degradation (a sentence hinting at a single cause; a one-word response is not acceptable).', exemplar: 'Overgrazing leads to soil erosion.' },
      { marks: '2', descriptor: 'Outlines how one human activity causes land degradation (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'Overgrazing removes the plant cover over the soil, leading to soil erosion.' },
      { marks: '3', descriptor: 'Describes how one human activity causes land degradation (one activity in detail, without comprehensive reasons; an example may support but is not required).', exemplar: 'Overgrazing removes the plant cover over the soil, leading to soil erosion. Without plants to keep the soil in place, water and wind can now wash away the top layer. This weakens the structure of the soil.' },
      { marks: '4', descriptor: 'Explains how one human activity causes land degradation (one activity in detail, with reason(s); an example may support but is not required).', exemplar: 'Overgrazing removes the plant cover over the soil as the animals eat them, leading to soil erosion. Without plants to keep the soil in place, the top layer of soil is exposed so water and wind can now wash away the top layer. With this soil erosion, the nutrients are removed, which weakens the structure and fertility of the soil.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'Interviewing 12 different families from 4 different communities will provide the students with a variety of data to analyze. Different families from different villages might have varying experiences, so interviewing them, each with unique insights into the issue, will give more valuable primary data. However, the action plan does not consider the possible language barrier between the students and indigenous communities. The families might not speak Portuguese or English. This is a limitation, as the students would need to overcome any communication difficulties, such as by using a translator; impaired communication would impact the validity and reliability of the data. Although the action plan does not provide details about overcoming any communication difficulties, the students will still be collecting soil samples and secondary data, so overall the strengths of the action plan will allow the investigation to be successful.',
    keyConcepts: ['investigation', 'evaluation', 'reliability', 'validity'],
    keywords: ['strengths', 'limitations', 'appraisal', 'sample size', 'primary data', 'secondary data', 'soil samples', 'language barrier', 'translator', 'validity', 'reliability'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s), then give an overall judgement. You do not need to discuss both strengths and limitations of every part of the plan; a suggestion for improvement counts as a limitation.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the action plan (one sentence referring to a single strength).', exemplar: 'The sample size of families is large enough to gather useful data.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the action plan (one strength elaborated with brief detail; three or more strengths outlined → 3).', exemplar: 'Interviewing 12 different families from 4 different communities will provide the students with a variety of data to analyze.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the action plan (one strength elaborated in additional detail with reasoning; or three or more strengths outlined).', exemplar: '…Different families from different villages might have varying experiences, so interviewing 12 families from four areas, each with unique insights into the issue, will give more valuable primary data.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the action plan (one sentence referring to a single limitation; a suggestion for improvement counts).', exemplar: 'The action plan does not consider the possible language barrier between the students and indigenous communities.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the action plan (one limitation elaborated with brief detail; three or more limitations outlined → 3).', exemplar: 'The action plan does not consider the possible language barrier between the students and indigenous communities. The families might not speak Portuguese or English.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the action plan (one limitation elaborated in additional detail with reasoning; or three or more limitations outlined).', exemplar: '…This is a limitation, as the students would need to consider overcoming any communication difficulties, such as by using a translator. Impaired communication would impact the validity and reliability of the data.' },
      { marks: 'Appraisal 1', descriptor: 'An appraisal is stated (a summary of strengths and limitations, or a brief judgement on the action plan; can appear anywhere in the response).', exemplar: 'Overall, the strengths of the action plan will allow the investigation to be successful.' },
      { marks: 'Appraisal 2', descriptor: 'An appraisal is outlined — weighs up both positive and negative points (implicitly or explicitly) into an overall judgement on the investigative process; can appear anywhere.', exemplar: 'Although the action plan does not provide details about overcoming any communication difficulties, the students will still be collecting soil samples and secondary data. Overall, the strengths of the action plan will allow the investigation to be successful.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How does the increase in commercial fishing impact biodiversity in the North Sea?',
    keyConcepts: ['investigation', 'research question', 'biomes'],
    keywords: ['research question', 'clear', 'focused', 'location', 'human activity', 'statement of inquiry', 'biome'],
    feedbackHit: 'Well done — a research question that is both clear and focused, naming a human activity and a location, connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ connected to the SoI scores 1; one that is BOTH clear AND focused (names a human activity and a location) scores 2. Re-wording the SoI, or reusing the Q3 RQ, scores 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached. Rewording the statement of inquiry into a question, or reusing the previous investigation’s RQ, cannot be rewarded.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry (references a human activity but lacks focus, e.g. no named location).', exemplar: 'How does the increase in commercial fishing impact oceans?' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry (references a human activity and is focused on a named location).', exemplar: 'How does the increase in commercial fishing impact biodiversity in the North Sea?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Commercial fishing does not only catch intended species for consumption but also inadvertently traps other species. This is called by-catch. Commercial fishing results in high levels of by-catch, because of the large nets used, which disrupts the food chain of many different species in the aquatic biome. My research question focuses on how human actions can decrease the biodiversity of the North Sea by focusing on the increase in commercial fishing.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['relevance', 'by-catch', 'food chain', 'biodiversity', 'aquatic biome', 'commercial fishing', 'statement of inquiry', 'reasons'],
    feedbackHit: 'Well done — you justified, with reasoning, the relevance of the research question to the statement of inquiry.',
    feedbackMiss: 'Build from stating relevance (1) → outlining (2) → describing a factor in detail (3) → justifying with reason(s) why the RQ is relevant to the SoI (4). Explicit reference to the SoI is not required.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States the relevance of the research question to the statement of inquiry (a single sentence making a simple connection between the SoI and the RQ; no detail required).', exemplar: 'It focuses on how human actions can decrease the biodiversity of the North Sea.' },
      { marks: '2', descriptor: 'Outlines the relevance of the research question to the statement of inquiry (a single sentence with two clauses or two/three short sentences; brief detail or a single factor).', exemplar: 'It focuses on how human actions can decrease the biodiversity of the North Sea by focusing on the increase in commercial fishing.' },
      { marks: '3', descriptor: 'Describes the relevance of the research question to the statement of inquiry (at least one argument/factor considered in detail, without reason(s) why the RQ is relevant).', exemplar: 'Commercial fishing results in high levels of by-catch, which disrupts the food chain of many different species in the aquatic biome. My research question focuses on how human actions can decrease the biodiversity of the North Sea by focusing on the increase in commercial fishing.' },
      { marks: '4', descriptor: 'Justifies the relevance of the research question to the statement of inquiry (at least one argument/factor in detail, along with reason(s) why the RQ is relevant).', exemplar: 'Commercial fishing does not only catch intended species for consumption but also inadvertently traps other species. This is called by-catch. Commercial fishing results in high levels of by-catch, because of the large nets used, which disrupts the food chain of many different species in the aquatic biome. My research question focuses on how human actions can decrease the biodiversity of the North Sea by focusing on the increase in commercial fishing.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'As the fishing industry is so large, it will be hard for me to go out and collect the relevant primary data.',
    keyConcepts: ['investigation', 'methods', 'challenges'],
    keywords: ['challenge', 'primary data', 'fishing industry', 'difficult', 'collecting data'],
    feedbackHit: 'Well done — you outlined one challenge, elaborating on the reason for it.',
    feedbackMiss: 'State one challenge (1), then elaborate on the reason for it with brief detail (2), e.g. why collecting the relevant primary data would be difficult.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one challenge they might face in the investigation (a statement/fact about a possible challenge).', exemplar: 'A lack of primary data.' },
      { marks: '2', descriptor: 'Outlines one challenge they might face in the investigation (elaborates on the reason for the challenge with brief detail).', exemplar: 'As the fishing industry is so large, it will be hard for me to go out and collect the relevant primary data.' },
    ],
  },

  q4_d: {
    marks: 4,
    exemplar:
      'There are lots of fishing businesses that depend on the fish stocks in the North Sea. A survey of how many tonnes of by-catch per species they catch would help me calculate the impact this has on biodiversity in the North Sea. If I can understand how many species of fish are killed as by-catch, I can evaluate the impact this has on the food chain.',
    keyConcepts: ['investigation', 'methods', 'usefulness'],
    keywords: ['survey', 'data collection', 'by-catch', 'biodiversity', 'food chain', 'benefit', 'reasons', 'excluding interviews'],
    feedbackHit: 'Well done — you explained the benefit of one non-interview method in detail with reasons.',
    feedbackMiss: 'Name one non-interview method (e.g. a survey) and build from stating its benefit (1) → outlining (2) → describing in detail (3) → explaining with reasons (4). Simply stating a method scores 0.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States the benefit of one data-collection method, other than interviews (one sentence giving a basic benefit; simply stating a method cannot be awarded).', exemplar: 'A survey of commercial fishing businesses would help me know how much by-catch they catch.' },
      { marks: '2', descriptor: 'Outlines the benefit of one data-collection method, other than interviews (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'A survey of commercial fishing businesses would help me know how much by-catch they catch and calculate the impact this has on biodiversity in the North Sea.' },
      { marks: '3', descriptor: 'Describes the benefit of one data-collection method, other than interviews (one benefit considered in detail, without comprehensive reasons).', exemplar: 'There are lots of fishing businesses that depend on the fish stocks in the North Sea. A survey of how much by-catch the fishing businesses catch per species would help me calculate the impact this has on biodiversity in the North Sea.' },
      { marks: '4', descriptor: 'Explains the benefit of one data-collection method, other than interviews (one benefit considered in detail, along with reason(s)).', exemplar: 'There are lots of fishing businesses that depend on the fish stocks in the North Sea. A survey of how many tonnes of by-catch per species they catch would help me calculate the impact this has on biodiversity in the North Sea. If I can understand how many species of fish are killed as by-catch, I can evaluate the impact this has on the food chain.' },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      'As you can see at point A, this river needs sustainable management as there is currently a decline in water quality due to agricultural activity. Firstly, increasing demand for crops and meat to feed a growing human population is resulting in increased agricultural run-off such as fertilizers, animal waste and pesticides. These wash into the river with rainfall and irrigation. This combination reduces water quality and increases turbidity and eutrophication. My suggestion is that you encourage farmers to put sustainable management strategies in place. I suggest that you sustainably manage the use of chemical fertilizers and pesticides by passing a law to regulate their use. This would stop the likelihood of algal blooms downstream from Point A, and the spread of diseases from cattle waste such as E. coli in the river water. This strategy has worked in the Alster River in Germany where the government has restricted fertilizer application to only include fertilizers which have minimal impact on the surrounding environment. Farmers who don’t comply are fined. At point B, coastal erosion is wearing away the beach spit, so I also recommend managed retreat and planting marram grass to stabilise the dunes. Therefore, given the evidence, I think we should put similar regulations in place to sustainably manage the river and coast in Portchester.',
    keyConcepts: ['management & intervention', 'sustainability', 'communication', 'water systems'],
    keywords: ['sustainable management', 'agricultural run-off', 'fertilizers', 'pesticides', 'eutrophication', 'algal blooms', 'coastal erosion', 'Portchester', 'point A', 'point B', 'key/legend', 'concluding statement', 'presentation', 'persuasive'],
    feedbackHit: 'Well done — a persuasive presentation script explaining sustainable management strategies for the two labelled threats, with MYP examples, references to A/B and a closing summary.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Cover sustainable management strategies for two identified locations (A and B), include example(s), reference your labelled diagram, write in presentation style and add a key/legend and a concluding statement.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: 'CritA 1', descriptor: 'Limited knowledge and understanding: outlines sustainable management strategies, using limited examples and limited relevant terminology (may refer to only one strategy/threat).', exemplar: 'I suggest that you sustainably manage the use of chemical fertilizers and pesticides by passing a law to regulate their use. This strategy has worked in Germany.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge and understanding: describes sustainable management strategies that could be used in two identified locations, using satisfactory examples and appropriate relevant terminology (little or no reasoning; or detailed for one threat but not the other).', exemplar: 'As you can see at point A, this river needs sustainable management due to agricultural activity. Increased agricultural run-off comes from fertilizers, animal waste and pesticides. These wash into the river with rainfall and irrigation. My suggestion is that you encourage farmers to put sustainable management strategies in place… This strategy has worked in Germany where the government has restricted fertilizer application. Farmers who don’t comply are fined.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge and understanding: explains sustainable management strategies that could be used in two identified locations, using accurate examples and appropriate relevant terminology.', exemplar: 'As you can see at point A, this river needs sustainable management as there is currently a decline in water quality due to agricultural activity. Firstly, increasing demand for crops and meat to feed a growing human population is resulting in increased agricultural run-off… This strategy has worked in Germany where the government has restricted fertilizer application to only include fertilizers which have minimal impact on the surrounding environment. Farmers who don’t comply are fined.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge and understanding: thoroughly explains sustainable management strategies that could be used in two identified locations, using accurate and effective examples and appropriate relevant terminology (both locations covered in detail; one strategy mitigating two threats is acceptable).', exemplar: '…This combination reduces water quality and increases turbidity and eutrophication… This would stop the likelihood of algal blooms downstream from Point A, and the spread of diseases from cattle waste such as E. coli in the river water. This strategy has worked in the Alster River in Germany…' },
      { marks: 'Format 1', descriptor: 'One of the following features is included: an appropriate key/legend (e.g. A = agricultural run-off; B = coastal erosion) OR a concluding/summary statement appropriate to the presentation.' },
      { marks: 'Format 2', descriptor: 'Two of the following features are included: an appropriate key/legend (e.g. A = agricultural run-off; B = coastal erosion) AND a concluding/summary statement appropriate to the presentation.' },
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
    exemplar: '2 (Pinatubo and Canlaon).',
    keyConcepts: ['source interpretation', 'tectonic activity'],
    keywords: ['volcanic eruptions', '11–19', 'Pinatubo', 'Canlaon', 'Source D', 'layer'],
    feedbackHit: 'Correct — 2 volcanoes erupted between 11 and 19 times (Pinatubo and Canlaon).',
    feedbackMiss: 'Read the volcanic-eruptions layer and count the volcanoes in the 11–19 class. Award for "2" or naming Pinatubo and Canlaon.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['2', 'Pinatubo and Canlaon'],
  },

  q6_b: {
    marks: 1,
    exemplar: 'GIS-Education.',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['origin', 'GIS-Education', 'Source D', 'attribution'],
    feedbackHit: 'Correct — the origin of Source D is GIS-Education.',
    feedbackMiss: 'State who produced the source. Award for stating GIS-Education.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['GIS-Education'],
  },

  q6_c: {
    marks: 2,
    exemplar: 'They know how high the risk of a volcanic eruption is and can choose whether they want to live there.',
    keyConcepts: ['source evaluation', 'value', 'risk'],
    keywords: ['value', 'risk', 'volcanic eruption', 'resident', 'choose where to live', 'Source D'],
    feedbackHit: 'Well done — you outlined one value of the map to a resident with a brief reason.',
    feedbackMiss: 'State one value of the map to a resident (1), then give a brief elaboration (2), e.g. they can judge the risk and decide whether to live there.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one value of Source D to a resident living in the Philippines (a statement about the value of the map to residents).', exemplar: 'They know how high the risk of a volcanic eruption is.' },
      { marks: '2', descriptor: 'Outlines one value of Source D to a resident living in the Philippines (a brief sentence about the value of the map to residents).', exemplar: 'They know how high the risk of a volcanic eruption is and can choose whether they want to live there.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'The map doesn’t show the impact of the tectonic activity, such as the number of deaths.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['limitation', 'impact', 'tectonic activity', 'deaths', 'resident', 'Source D'],
    feedbackHit: 'Well done — you outlined one limitation of the map for a resident with a brief elaboration.',
    feedbackMiss: 'State one limitation (1), then elaborate with brief detail (2), e.g. the map does not show the impacts of the tectonic activity such as the number of deaths.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source D to a resident living in the Philippines (a brief fact or hint about the limitation of the map to residents).', exemplar: 'The map doesn’t show the impact of the tectonic activity.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source D to a resident living in the Philippines (elaborates on the limitation of the map to residents).', exemplar: 'The map doesn’t show the impact of the tectonic activity, such as the number of deaths.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'Location X, which has had more frequent and high-magnitude earthquakes in the past, which suggests they are more likely to have earthquakes again in the future. Location X has a high population density of more than 400 per square km close to the epicentres. Therefore, there is a higher risk from earthquakes to a larger proportion of the population. This means that more people will benefit from the earthquake-proof structures and this could save more lives. Location Y has not had as many earthquakes, with only one occurring in the area since 1991. The risk of earthquakes in Y is lower than in X so the government’s money will not be well spent here as it will not benefit as many people.',
    keyConcepts: ['justification', 'risk', 'management & intervention', 'disparity & equity'],
    keywords: ['Location X', 'Location Y', 'earthquakes', 'frequency', 'magnitude', 'epicentres', 'population density', 'risk', 'earthquake-proof', 'evidence'],
    feedbackHit: 'Well done — you justified your chosen location with in-depth, specific evidence from the map.',
    feedbackMiss: 'Choose X or Y and justify it with specific evidence from Source D (earthquake frequency/magnitude, proximity to epicentres, population density). Simply selecting a location scores 0; a short paragraph with in-depth arguments is needed for full marks.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below. Simply selecting a location cannot be awarded.' },
      { marks: '1', descriptor: 'Provides a limited justification on which location should be invested in (one or two sentences giving a basic supporting argument).', exemplar: 'Location X, which has had more earthquakes in the past.' },
      { marks: '2–3', descriptor: 'Provides a satisfactory justification on which location should be invested in (brief argument(s); a 2-mark response gives less detail).', exemplar: 'Location X, which has had more frequent and high-magnitude earthquakes in the past and has a high population density close to the epicentres. Therefore, there is a higher risk from earthquakes to the population. Location Y has not had as many earthquakes.' },
      { marks: '4–5', descriptor: 'Provides a detailed justification on which location should be invested in (detailed argument(s)).', exemplar: 'Location X, which has had more frequent and high-magnitude earthquakes in the past, which suggests they are more likely to have earthquakes again in the future. Location X has a high population density close to the epicentres. Therefore, there is a higher risk from earthquakes to a larger proportion of the population. Location Y has not had as many earthquakes.' },
      { marks: '6', descriptor: 'Provides a thorough justification on which location should be invested in (in-depth arguments referring to specific details of why the location has been chosen; a short paragraph is likely required).', exemplar: 'Location X, which has had more frequent and high-magnitude earthquakes in the past… Location X has a high population density of more than 400 per square km close to the epicentres… This means that more people will benefit from the earthquake-proof structures and this could save more lives. Location Y has not had as many earthquakes with only one occurring in the area since 1991. The risk of earthquakes in Y is lower than in X so the government’s money will not be well spent here as it will not benefit as many people.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'Secondary effects of tectonic activity, such as tsunamis, fires and disease, often pose a greater risk to people and property than the primary effects of ground shaking or lava, because they affect wider areas over a longer period. On one hand, secondary effects are devastating: in the 2011 Tōhoku earthquake in Japan, the primary ground shaking caused some damage, but it was the secondary tsunami that killed around 18,000 people and triggered the Fukushima nuclear meltdown, spreading risk far beyond the epicentre. Similarly, after the 2010 Haiti earthquake the secondary effects — collapsed sanitation and a cholera epidemic — killed thousands more than the initial collapse. On the other hand, primary effects can be the greater risk where they are intense and immediate: the pyroclastic flows and lava of a volcanic eruption, or violent ground shaking that flattens buildings, kill instantly and leave no time to respond. Different perspectives also matter: a wealthy, well-prepared country may withstand primary shaking through strict building codes but still be overwhelmed by an unexpected secondary tsunami, while a poorer community may suffer most from the primary collapse of weak housing. Weighing these perspectives, secondary effects pose a greater risk to a large extent, because they are often unanticipated, spread over a wider area and persist long after the event — yet the balance depends on the type of hazard, the level of preparedness and the wealth of the affected community.',
    keyConcepts: ['causality', 'risk', 'disparity & equity', 'management & intervention', 'synthesis'],
    keywords: ['primary effects', 'secondary effects', 'tectonic activity', 'tsunami', 'earthquake', 'volcanic activity', 'Tōhoku', 'Haiti', 'pyroclastic flow', 'preparedness', 'perspectives', 'conclusion', 'synthesis'],
    feedbackHit: 'Well done — a structured essay weighing secondary vs primary tectonic effects, with balanced perspectives, named tectonic examples, geographical terms and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Give two perspectives (for and against), refer to volcanic activity and/or earthquakes with named examples in detail, use geographical terms, and reach a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: 'CritA 1–2', descriptor: 'Limited contextual and conceptual understanding in an outline, using limited examples and limited terminology (responses likely brief with little detail).' },
      { marks: 'CritA 3–4', descriptor: 'Adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology (accurate example(s), possibly lacking detail; some reasons may be provided).' },
      { marks: 'CritA 5–6', descriptor: 'Substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate terminology (an explanation requires reasons; calls on appropriate examples such as previous tectonic activities; terminology accurate and effective in most of the essay).' },
      { marks: 'CritA 7–8', descriptor: 'Detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate terminology (accurate detail throughout with clear reasons; references examples such as previous tectonic activities in detail; terminology accurate and effective throughout).' },
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
