import 'server-only'

/**
 * MYP Geography — November 2021 · ISOMORPHIC VARIANT v2 mark scheme
 * (rubric-banded, "best fit").
 *
 * NEW scenario: water scarcity & access to safe water. The IB band DESCRIPTORS are
 * unchanged from the source paper (the assessed construct is identical); only the
 * exemplars, key concepts, keywords and feedback are rewritten to match the new
 * water-scarcity context. Keys (q{id}_{label}) and marks match the source exactly.
 *
 * Geography (I&S) answers are open-ended, so every entry carries the IB band
 * descriptors plus worked exemplar responses at each band (`rubricBands`) —
 * surfaced to the student on submission and in the downloadable exam report.
 * `exemplar` holds the top-band model answer; the extra fields (`commandTerm`,
 * `commandTermDefinition`, `rubricBands`) are optional and ignored by consumers
 * that don't use them.
 *
 * The two extended responses marked across several criterion strands (Q5 /18 and
 * Q9 /24) list EVERY strand in `rubricBands`; the strand maxima sum to the total.
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
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  q1_: {
    marks: 2,
    exemplar: 'There has been an increase in freshwater withdrawal, with 2020 having the highest total at 4 000 km³ — nearly double the 1980 figure.',
    keyConcepts: ['causality', 'change', 'global interactions'],
    keywords: ['increase', 'trend', 'overall increase', '2020', 'highest', '4 000 km³', 'almost doubled', 'data from Source A'],
    feedbackHit: 'Well done — you outlined the overall trend and referenced data from the chart.',
    feedbackMiss: 'State the overall trend (1) — an overall increase in freshwater withdrawal — then quote data from the chart (2), e.g. the 2020 total of 4 000 km³ is the highest, almost double the 1980 figure of 2 200 km³.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the trend in global freshwater withdrawal from 1980–2020 (withdrawal increasing overall, or fluctuating with an overall increase).', exemplar: 'There has been an increase from 1980 to 2020.' },
      { marks: '2', descriptor: 'Outlines the trend in global freshwater withdrawal from 1980–2020, using data from Source A (the overall increase referenced with data from the chart).', exemplar: 'There has been an increase in freshwater withdrawal, with 2020 having the highest total at 4 000 km³ — nearly double the 1980 figure.' },
    ],
  },

  q2_: {
    marks: 4,
    exemplar:
      'There has been a large expansion of irrigated farming, for example growing thirsty crops like rice and cotton to feed a rising population. Agricultural withdrawal rose from 1 700 km³ in 1980 to 2 800 km³ in 2020 — by far the largest sector. As the population grows, more food is needed, so more land is irrigated, and irrigation is wasteful because much of the water evaporates or soaks away before it reaches the roots. This is why the human activity of expanding irrigated farming has caused the overall increase in freshwater withdrawal.',
    keyConcepts: ['causality', 'global interactions', 'sustainability'],
    keywords: ['irrigation', 'irrigated farming', 'agriculture', 'population growth', 'crops', 'food demand', 'evaporation', 'increase in withdrawal'],
    feedbackHit: 'Well done — you explained one human activity in detail, with reasoning why it could cause the rising-withdrawal trend.',
    feedbackMiss: 'Take ONE human activity and build from stating a cause (1) → outlining (2) → describing in detail (3) → explaining with reasoning why it causes the trend (4), e.g. a growing population needs more food → more irrigated farming → more water withdrawn.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how the trend shown in Source A could be caused by one human activity (one sentence hinting at a single cause).', exemplar: 'There has been an increase in irrigated farming.' },
      { marks: '2', descriptor: 'Outlines how the trend shown in Source A could be caused by one human activity (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'There has been an increase in irrigated farming, for example growing thirsty crops like rice which use a lot of water.' },
      { marks: '3', descriptor: 'Describes how the trend shown in Source A could be caused by one human activity (one cause considered in detail, without comprehensive reasoning; an example may support it).', exemplar: 'There has been a large expansion of irrigated farming, for example growing thirsty crops like rice and cotton. Agricultural withdrawal rose from 1 700 km³ in 1980 to 2 800 km³ in 2020 as more land was irrigated.' },
      { marks: '4', descriptor: 'Explains how the trend shown in Source A could be caused by one human activity (one cause considered in detail, with reasoning why human activity causes the trend).', exemplar: '…As the population grows, more food is needed, so more land is irrigated, and irrigation is wasteful because much of the water evaporates before it reaches the roots, which has caused the overall increase in freshwater withdrawal.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'The questionnaire is quick and easy to complete with straightforward questions and checkbox actions. This is helpful because people are more likely to respond to a short questionnaire, allowing the class to get data from 50 people in a short time period. However, the questionnaire could have included more possible water-saving actions in the lists for questions 2 & 3, for example using a water-efficient toilet. This is a limitation because only five actions are identified but people could be saving water in ways the students have not thought about. Although the questionnaire could include more actions, it still allows students to collect sufficient information for their investigation. Overall, this action plan will allow the class to answer the research question.',
    keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'questionnaire', 'checkboxes', 'primary data', 'sample size', 'water-saving actions', 'research question'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s) of the plan/questionnaire, then give an overall judgement. Only one strength/limitation need be considered well.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the action plan (one sentence referring to a single strength).', exemplar: 'The questionnaire is quick and easy to complete.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the action plan (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'The questionnaire is quick and easy to complete with straightforward questions and checkbox actions.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the action plan (at least one strength considered in detail, with reasoning).', exemplar: '…This is helpful because people are more likely to respond to a short questionnaire allowing the class to get data from 50 people in a short time period.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the action plan (one sentence referring to a single limitation).', exemplar: 'The questionnaire could have included more possible water-saving actions.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the action plan (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'The questionnaire could have included more possible water-saving actions in the lists for questions 2 & 3. For example, using a water-efficient toilet.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the action plan (at least one limitation considered in detail, with reasoning).', exemplar: '…This is a limitation because only five actions are identified but people could be saving water in ways that the students have not thought about.' },
      { marks: 'Appraisal 1', descriptor: 'Provides an appraisal of the action plan (a brief judgement; can appear anywhere in the response).', exemplar: 'Overall, this action plan will allow the class to answer the research question.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed appraisal of the action plan, referring to at least one aspect of the investigation to support the overall judgement.', exemplar: 'Although the questionnaire could include more actions, it still allows students to collect sufficient information for their investigation. Overall, this action plan will allow the class to answer the research question.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How would installing rainwater tanks in Windhoek reduce its household water use by 2030?',
    keyConcepts: ['investigation', 'research question', 'sustainability'],
    keywords: ['research question', 'clear', 'focused', 'place', 'time', 'two elements', 'statement of inquiry'],
    feedbackHit: 'Well done — a research question that is both clear AND focused, with at least two elements (e.g. place + time), connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ with one element (time/place/space/other) scores 1; a clear AND focused RQ with at least two elements (e.g. place + time) scores 2. Rewording the statement of inquiry scores 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below. Rewording the statement of inquiry into a question cannot be rewarded.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry. One element (time, place, space or other) must be included.', exemplar: 'How would installing rainwater tanks in Windhoek reduce its household water use? (place — Windhoek — is included)' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry. At least two elements (time, place, space or other) must be included.', exemplar: 'How would installing rainwater tanks in Windhoek reduce its household water use by 2030? (place — Windhoek — and time — by 2030 — are included)' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Windhoek is one of the driest capital cities in the world and depends heavily on dams that often run low during droughts. Because so much household water is used outdoors and on flushing, this research question would allow me to investigate how collecting rainwater could cut the amount of treated water households use. It focuses on how individuals in Windhoek can change the way the community responds to water scarcity by relying less on stressed dam supplies.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['Windhoek', 'drought', 'dams', 'rainwater', 'household water', 'water scarcity', 'statement of inquiry', 'reasons'],
    feedbackHit: 'Well done — you justified, with reasoning, why the research question is relevant to the statement of inquiry.',
    feedbackMiss: 'Build from stating the link to the SoI (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is relevant to the SoI (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the relevance of the research question to the statement of inquiry (a simple connection between the SoI and the RQ; no detail).', exemplar: 'It focuses on how people in Windhoek can help the community respond to water scarcity.' },
      { marks: '2', descriptor: 'Outlines the relevance of the research question to the statement of inquiry (a single sentence with two clauses or two/three short sentences; brief detail, or a single factor).', exemplar: 'It focuses on how people in Windhoek can help the community respond to water scarcity by relying less on stressed dam supplies.' },
      { marks: '3', descriptor: 'Describes the relevance of the research question to the statement of inquiry (at least one argument/factor considered in detail, without reasoning).', exemplar: 'Windhoek is very dry and depends on dams that run low in droughts. This research question would allow me to investigate how collecting rainwater could cut the treated water households use. It focuses on how people in Windhoek can change the way the community responds to water scarcity.' },
      { marks: '4', descriptor: 'Justifies the relevance of the research question to the statement of inquiry (at least one argument/factor considered in detail, with reasoning why the RQ is relevant to the SoI).', exemplar: 'Windhoek is one of the driest capital cities in the world and depends heavily on dams that often run low during droughts. Because so much household water is used outdoors and on flushing, this research question would allow me to investigate how collecting rainwater could cut the treated water households use…' },
    ],
  },

  q4_c: {
    marks: 1,
    exemplar: 'Household water-use statistics from your local water utility.',
    keyConcepts: ['sources', 'investigation'],
    keywords: ['secondary source', 'water utility statistics', 'reservoir levels', 'GIS map', 'newspaper article', 'website article', 'specific'],
    feedbackHit: 'Correct — a specific, valid secondary source for the investigation.',
    feedbackMiss: 'Name one specific secondary source, e.g. household water-use statistics from your local water utility, a GIS map of reservoir levels, or a relevant newspaper/website article. Do not accept vague responses such as "Statistics" or "Newspaper".',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Household water-use statistics from your local water utility', 'GIS map of reservoir or groundwater levels in your area', 'Newspaper/website articles relating to the topic of the investigation'],
  },

  q4_d: {
    marks: 3,
    exemplar:
      'A website article would contain background information on water saving in my area, which can help me get a better understanding of my research question. This could provide a starting point to help me decide on the best primary data to collect about household water use.',
    keyConcepts: ['sources', 'usefulness', 'reasoning'],
    keywords: ['website article', 'background information', 'understanding', 'research question', 'starting point', 'primary data', 'household water use'],
    feedbackHit: 'Well done — you explained one benefit of the secondary source in detail, with reasoning.',
    feedbackMiss: 'Build from stating a benefit (1) → outlining (2) → explaining in detail with reasoning (3) how the source helps your investigation. Only one benefit need be considered well.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the benefit of including this secondary source in their investigation (one sentence referring to a single benefit).', exemplar: 'A website article would contain background information on water saving in my area.' },
      { marks: '2', descriptor: 'Outlines the benefit of including this secondary source in their investigation (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'A website article would contain background information on water saving in my area, which can help me get a better understanding of my research question.' },
      { marks: '3', descriptor: 'Explains the benefit of including this secondary source in their investigation (at least one benefit considered in detail, with reasoning).', exemplar: '…This could provide a starting point to help me decide on the best primary data to collect about household water use.' },
    ],
  },

  q4_e: {
    marks: 2,
    exemplar: 'Gathering sufficient primary data might be difficult, as people might not want to be interviewed about their water use.',
    keyConcepts: ['investigation', 'methods'],
    keywords: ['challenge', 'primary data', 'sufficient data', 'interviewed', 'water use', 'detail'],
    feedbackHit: 'Well done — you outlined a valid challenge with brief detail on why it is a challenge.',
    feedbackMiss: 'Name a valid challenge (1), e.g. gathering enough primary data, then add brief detail (2) on the nature of the challenge. A response that is too vague to identify a challenge scores 0.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below. The response does not identify a challenge or is too vague to be awarded a mark.' },
      { marks: '1', descriptor: 'States one challenge they might face when carrying out their investigation (a valid challenge mentioned briefly).', exemplar: 'Gathering sufficient primary data.' },
      { marks: '2', descriptor: 'Outlines one challenge they might face when carrying out their investigation (some detail about the nature of the challenge is provided).', exemplar: 'Gathering sufficient primary data might be difficult, as people might not want to be interviewed about their water use.' },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  q5_: {
    marks: 18,
    exemplar:
      'Good evening, and thank you for inviting me to the International Urban Water Conference. Rapid urban growth has pushed cities like Cape Town to the edge of disaster — in 2018, three years of drought brought it to "Day Zero", when the taps were almost switched off for four million people. When a city grows faster than its water supply, reservoirs cannot keep up, and the poorest communities, who cannot buy bottled water, suffer most. One solution to this challenge is for the city government to fix the leaking pipes that lose water before it ever reaches homes — in Mexico City, up to 40% of treated water is lost to leaks. By repairing the network, the same reservoirs would supply far more people without building a single new dam, protecting rivers and wetlands downstream from being drained. This would be even more effective if combined with public campaigns encouraging shorter showers and rainwater collection, as happened in Cape Town. So I ask you all: will we let our fastest-growing cities run their taps dry, or will we act? Thank you.',
    keyConcepts: ['global interactions', 'management & intervention', 'sustainability', 'communication'],
    keywords: ['urban growth', 'water stress', 'Cape Town', 'Day Zero', 'reservoirs', 'leaking pipes', 'Mexico City', 'solution', 'persuasive speech', 'introduction', 'conclusion'],
    feedbackHit: 'Well done — a persuasive speech explaining at least one solution to a challenge of urban growth, with MYP examples and an introduction and conclusion.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Explain at least one solution to a challenge of urban growth, include MYP examples, refer to communities or the environment, and write in a persuasive style with an introduction and conclusion.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge and understanding: outlines one possible solution to a challenge presented by urban growth, using a limited example and limited relevant terminology.', exemplar: 'Rapid urban growth can cause water shortages. This can be improved by fixing leaking pipes.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge and understanding: describes at least one possible solution to the challenges presented by urban growth for communities and/or the environment, using satisfactory examples and appropriate relevant terminology.', exemplar: 'Rapid urban growth can lead to water shortages in cities like Cape Town. When a city grows faster than its water supply, reservoirs cannot keep up and the poorest communities suffer most. The city government could fix the leaking pipes that lose water before it reaches homes and could run campaigns asking people to take shorter showers.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge and understanding: explains at least one possible solution to the challenges presented by urban growth for communities and/or the environment, using accurate examples and appropriate relevant terminology.', exemplar: 'Rapid urban growth pushed Cape Town to "Day Zero" in 2018, when the taps were almost switched off for four million people. The city government could fix leaking pipes that lose water before it reaches homes… This solution means the same reservoirs would supply far more people, which is a main cause of the shortages there.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge and understanding: thoroughly explains at least one possible solution to the challenges presented by urban growth for communities and/or the environment, using accurate and effective examples and appropriate relevant terminology.', exemplar: '…In Mexico City, up to 40% of treated water is lost to leaks. By repairing the network, the same reservoirs would supply far more people without building a single new dam, protecting rivers and wetlands downstream from being drained… This would be even more effective if combined with public campaigns encouraging shorter showers and rainwater collection.' },
      { marks: 'Format 1', descriptor: 'One of the following is included: an introduction (referring to the context or audience) OR a conclusion. They do not need to be separated by paragraphs.' },
      { marks: 'Format 2', descriptor: 'Two of the following are included: an introduction (referring to the context or audience) AND a conclusion. They do not need to be separated by paragraphs.' },
      { marks: 'Communicating 1–2', descriptor: 'Style and language rarely appropriate to the format of a persuasive speech for an audience of MYP students and the purpose of explaining; an inappropriate register and style; basic/simple language that does not engage the audience; text may be overly short.' },
      { marks: 'Communicating 3–4', descriptor: 'Style and language occasionally appropriate to a persuasive speech; sometimes writes in a register and style that serve the context; some language features (hyperbole, metaphor, rhetorical questions, concise sentences, emotive vocabulary) used to engage the audience.' },
      { marks: 'Communicating 5–6', descriptor: 'Style and language consistently appropriate to a persuasive speech; writes competently in a register and style that serve the context and intention; language features (hyperbole, metaphor, rhetorical questions, concise sentences, emotive vocabulary) often used to engage the audience.' },
      { marks: 'Organization 1', descriptor: 'Structures information and ideas in a way that is rarely effective and appropriate to the audience and purpose; ideas rarely build on each other; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'Structures information and ideas in a way that is occasionally effective; ideas occasionally build on each other; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Structures information and ideas in a way that is mainly effective; ideas frequently build on each other; often uses effective transitions.' },
      { marks: 'Organization 4', descriptor: 'Structures information and ideas in a way that is consistently effective; ideas build on each other in a consistently clear and logical manner; always uses effective transitions.' },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  q6_a: {
    marks: 1,
    exemplar: '120 million',
    keyConcepts: ['data interpretation', 'water access'],
    keywords: ['Sub-Saharan Africa', 'increase', '120 million', '420', '300'],
    feedbackHit: 'Correct — the increase in Sub-Saharan Africa is 120 million.',
    feedbackMiss: 'Subtract the 2005 Sub-Saharan Africa figure from the 2020 figure (420 − 300 = 120). Award 1 mark for 120 million (or 120,000,000).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['120 million', '120,000,000'],
  },

  q6_b: {
    marks: 1,
    exemplar: 'Latin America & the Caribbean',
    keyConcepts: ['data interpretation', 'water access'],
    keywords: ['Latin America', 'Caribbean', 'four times bigger', '15 million', '80 million'],
    feedbackHit: 'Correct — the number for Latin America & the Caribbean is more than four times bigger in 2020 than in 2005.',
    feedbackMiss: 'Pick the region whose 2020 value is more than four times its 2005 value (15 million → 80 million). Award 1 mark for Latin America & the Caribbean.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose the correct response from a number of possibilities.',
    blankAnswers: ['Latin America & the Caribbean', 'Latin America and the Caribbean'],
  },

  q7_a: {
    marks: 2,
    exemplar: 'To inform readers of the newspaper about the changes in the number of people without safe water by region in 2005 and 2020.',
    keyConcepts: ['source evaluation', 'purpose', 'water access'],
    keywords: ['purpose', 'inform readers', 'newspaper', 'changes', 'safe water', 'region', '2005', '2020'],
    feedbackHit: 'Well done — you outlined the purpose of Source E, elaborating on what it informs readers about.',
    feedbackMiss: 'State the purpose (1), e.g. to inform readers, then elaborate (2), e.g. about the change in the number of people without safe water by region between 2005 and 2020.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the purpose of Source E (a purpose without elaboration).', exemplar: 'To inform readers of the newspaper.' },
      { marks: '2', descriptor: 'Outlines the purpose of Source E (the purpose elaborated on).', exemplar: 'To inform readers of the newspaper about the changes in the number of people without safe water by region in 2005 and 2020.' },
    ],
  },

  q7_b: {
    marks: 2,
    exemplar: 'Using a doughnut chart with clear colours and figures makes the regional shares easy to compare at a glance. The newspaper can spread the information to a wide audience.',
    keyConcepts: ['source evaluation', 'value', 'communication'],
    keywords: ['value', 'doughnut chart', 'colours and figures', 'easy to compare', 'newspaper', 'wide audience'],
    feedbackHit: 'Well done — you outlined one value of Source E, elaborating on why it is useful in a newspaper.',
    feedbackMiss: 'State one value of the chart (1), then elaborate (2) on why it is useful in the newspaper context (not just a general value).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one value of using Source E in a newspaper article on access to safe water (a statement without elaboration).', exemplar: 'Using a doughnut chart makes the shares easy to compare.' },
      { marks: '2', descriptor: 'Outlines one value of using Source E in a newspaper article on access to safe water (elaborates on the value of the source being used in a newspaper, rather than a general value).', exemplar: 'Using a doughnut chart with clear colours and figures makes the regional shares easy to compare at a glance. The newspaper can spread the information to a wide audience.' },
    ],
  },

  q8_a: {
    marks: 3,
    exemplar:
      'There is not enough information on causes. The briefing only ranks how stressed each country is and not why they are short of water, such as drought, over-pumping of groundwater or rising demand, which the student would need. The source does not explain what is driving water scarcity in each country, which the student would need to know for their investigation. This source alone does not give the student enough information or detail for a full investigation.',
    keyConcepts: ['source evaluation', 'limitation', 'perspectives', 'causality'],
    keywords: ['limitation', 'causes', 'ranking only', 'drought', 'over-pumping', 'demand', 'student', 'investigation'],
    feedbackHit: 'Well done — you explained one limitation of Source F for the MYP year 3 student, with reasoning referring to the investigation.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining (2) → explaining with reasoning (3). Refer to the student and/or the investigation, e.g. it only ranks how stressed countries are, not why they are short of water, which the student needs.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source F to an MYP year 3 student investigating the causes of water scarcity (one sentence hinting at a single limitation).', exemplar: 'There is not enough information on causes.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source F to an MYP year 3 student investigating the causes of water scarcity (a single sentence with two clauses or two/three short sentences; the student and/or investigation should be referred to).', exemplar: 'There is not enough information on causes. It only ranks how stressed each country is and not why they are short of water, such as drought or over-pumping. The source does not explain what is driving water scarcity in each country.' },
      { marks: '3', descriptor: 'Explains one limitation of Source F to an MYP year 3 student investigating the causes of water scarcity (one limitation considered with reasoning; refers to the student and/or the investigation).', exemplar: '…not why they are short of water, such as drought, over-pumping of groundwater or rising demand, which the student would need… which the student would need to know for their investigation. This source alone does not give the student enough information or detail for a full investigation.' },
    ],
  },

  q8_b: {
    marks: 3,
    exemplar:
      'The briefing is from 2019 so is out of date. A government official would need statistics from this year for their report to keep the report up to date. The situation could have changed since 2019 and the impact of water shortages in India could be very different now. If the government official used this source, their report could be invalid as the impacts have changed.',
    keyConcepts: ['source evaluation', 'limitation', 'perspectives', 'change'],
    keywords: ['limitation', 'out of date', '2019', 'government official', 'current statistics', 'report', 'invalid'],
    feedbackHit: 'Well done — you explained one limitation of Source F for the Indian government official, with reasoning referring to the report.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining (2) → explaining with reasoning (3). Refer to the official and/or the report, e.g. the briefing is from 2019 so it is out of date and the report could be invalid.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source F to an Indian government official writing a report on the impacts of water shortages in India (one sentence hinting at a single limitation).', exemplar: 'The briefing is from 2019 so is out of date.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source F to an Indian government official writing a report on the impacts of water shortages in India (a single sentence with two clauses or two/three short sentences; the official and/or report should be referred to).', exemplar: 'The briefing is from 2019 so is out of date. A government official would need statistics from this year for their report. The situation could have changed since 2019 and the impact of water shortages in India could be very different now.' },
      { marks: '3', descriptor: 'Explains one limitation of Source F to an Indian government official writing a report on the impacts of water shortages in India (one limitation considered with reasoning; refers to the official and/or the report).', exemplar: '…A government official would need statistics from this year for their report to keep the report up to date… If the government official used this source, their report could be invalid as the impacts have changed.' },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'Building large dams to supply water creates significant benefits for societies, though it also brings negative consequences; on balance the benefits can outweigh the negatives, but only where they are managed carefully. A large dam stores water through dry seasons and droughts, giving cities and farms a reliable supply. This is essential where rainfall is unreliable, because without stored water crops fail and taps run dry. For example, the Three Gorges Dam in China supplies water and generates huge amounts of clean hydroelectricity, which has reduced the country’s reliance on coal and improved air quality for millions of people downstream. The reservoir also controls floods on the Yangtze, protecting communities that were regularly devastated, and the electricity has allowed local governments to invest in industry, raising the quality of life for many. However, large dams can force people from their homes and damage ecosystems. For example, the Three Gorges Dam displaced over 1.3 million people whose towns were flooded by the reservoir, and downstream the reduced flow has harmed fisheries and increased riverbank erosion. Some communities lost farmland and cultural sites that can never be recovered. This is a serious negative impact, however because the displacement and environmental harm can be partly reduced through resettlement support and managed water releases, while the water security and energy benefits last for generations, the dam still brings more benefits than negatives on balance. In conclusion, these examples demonstrate that to a large extent building large dams brings more benefits than negative consequences to societies, provided the people displaced are properly compensated and the river’s ecology is protected.',
    keyConcepts: ['global interactions', 'disparity & equity', 'causality', 'perspectives', 'synthesis'],
    keywords: ['large dams', 'water supply', 'benefits', 'negative consequences', 'hydroelectricity', 'flood control', 'Three Gorges Dam', 'displacement', 'ecosystems', 'perspectives', 'conclusion'],
    feedbackHit: 'Well done — a structured essay weighing positive and negative consequences of building large dams, with named examples, geographical terminology and a clear conclusion answering "to what extent".',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Include appropriate geographical terminology, positive AND negative consequences, named MYP examples, and a clear conclusion stating to what extent you agree.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Demonstrates limited contextual and conceptual understanding in an outline, using minimal examples and limited relevant terminology. Responses are likely to be brief with little detail.', exemplar: 'A large dam stores water through dry seasons and droughts, giving cities and farms a reliable supply. This is essential where rainfall is unreliable, because without stored water crops fail and taps run dry.' },
      { marks: 'CritA 3–4', descriptor: 'Demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate relevant terminology.', exemplar: '…For example, the Three Gorges Dam in China supplies water and generates clean hydroelectricity, which has reduced the country’s reliance on coal. However, large dams can force people from their homes and damage ecosystems. For example, the Three Gorges Dam displaced over a million people whose towns were flooded.' },
      { marks: 'CritA 5–6', descriptor: 'Demonstrates substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate relevant terminology.', exemplar: '…The reservoir also controls floods on the Yangtze, protecting communities that were regularly devastated, and the electricity has allowed local governments to invest in industry, raising quality of life… this does not outweigh the lasting water-security benefits the dam brings.' },
      { marks: 'CritA 7–8', descriptor: 'Demonstrates detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate relevant terminology.', exemplar: '…the Three Gorges Dam displaced over 1.3 million people whose towns were flooded by the reservoir, and downstream the reduced flow has harmed fisheries and increased riverbank erosion, while the clean hydroelectricity has improved air quality for millions downstream.' },
      { marks: 'Format 1', descriptor: 'Two of the following elements are included as separate paragraphs: introduction, main body of text, conclusion.' },
      { marks: 'Format 2', descriptor: 'Three of the following elements are included as separate paragraphs: introduction, main body of text, conclusion.' },
      { marks: 'Communicating 1', descriptor: 'The style and language used are rarely appropriate to the audience and purpose of informing; the style of writing is rarely consistent with what would be expected in an essay.' },
      { marks: 'Communicating 2', descriptor: 'The style and language used are occasionally appropriate to the audience and purpose of informing; not always consistent with an essay (may be informal, e.g. colloquialisms or rhetorical questions).' },
      { marks: 'Communicating 3', descriptor: 'The style and language used are consistently appropriate to the audience and purpose of informing; the style is consistent with an essay — formal and clear throughout.' },
      { marks: 'Organization 1', descriptor: 'The organizational structure is rarely effective; paragraphs/ideas sometimes build on each other logically; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'The organizational structure is occasionally effective; paragraphs/ideas build on each other in a mainly logical manner; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'The organizational structure is consistently effective; paragraphs and ideas build on each other in a consistently clear and logical manner; uses effective transitions.' },
      { marks: 'CritD 1–2', descriptor: 'Provides one perspective in a basic analysis and summarizes information to a limited extent in response to the question posed; a perspective is included which may not be used to reach a conclusion; little or no evidence of examples being unpacked.' },
      { marks: 'CritD 3–4', descriptor: 'Provides different perspectives in an analysis and summarizes information to make clear arguments; two or more perspectives included with development, used to reach a conclusion likely not fully developed; examples unpacked to inform the argument.' },
      { marks: 'CritD 5–6', descriptor: 'Provides different perspectives in an analysis and synthesizes information to make clear arguments; two or more perspectives developed and used to reach a well-developed conclusion; examples unpacked and used effectively to inform and support the argument.' },
      { marks: 'CritD 7–8', descriptor: 'Provides different perspectives in a detailed discussion and synthesizes information to make clear arguments; two or more perspectives with thorough development used to reach a fully-developed conclusion; examples unpacked and used effectively to support a comprehensive argument.' },
    ],
  },
}
