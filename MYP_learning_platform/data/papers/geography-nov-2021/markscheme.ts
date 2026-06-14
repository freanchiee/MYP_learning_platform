import 'server-only'

/**
 * MYP Geography — November 2021 mark scheme (rubric-banded, "best fit").
 *
 * Geography (I&S) answers are open-ended, so every entry carries the IB band
 * descriptors plus worked exemplar responses at each band (`rubricBands`) —
 * surfaced to the student on submission and in the downloadable exam report.
 * `exemplar` holds the top-band model answer (kept for the shared grading/results
 * consumers); the extra fields (`commandTerm`, `commandTermDefinition`,
 * `rubricBands`) are optional and ignored by consumers that don't use them.
 *
 * The two extended responses marked across several criterion strands (Q5 /18 and
 * Q9 /24) list EVERY strand in `rubricBands` (e.g. 'CritA 6', 'Format 2',
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
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  q1_: {
    marks: 2,
    exemplar: 'There has been an increase in temperature with 2018 having the highest temperature.',
    keyConcepts: ['causality', 'change', 'global interactions'],
    keywords: ['increase', 'trend', 'fluctuate', 'overall increase', '2018', 'highest temperature', 'data from Source A'],
    feedbackHit: 'Well done — you outlined the overall trend and referenced data from the graph.',
    feedbackMiss: 'State the overall trend (1) — an overall increase, or fluctuating with an overall increase — then quote data from the graph (2), e.g. 2018 had the highest temperature.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the trend in global temperatures from 1960–2019 (temperatures increasing overall, or fluctuating with an overall increase).', exemplar: 'There has been an increase from 1960 – 2019.' },
      { marks: '2', descriptor: 'Outlines the trend in global temperatures from 1960–2019, using data from Source A (the overall increase referenced with data from the graph).', exemplar: 'There has been an increase in temperature with 2018 having the highest temperature.' },
    ],
  },

  q2_: {
    marks: 4,
    exemplar:
      'There has been an increase in transportation, for example the number of cars being used and flights taken, which emit CO2. Emissions from fossil fuels have risen since 1960 at the same time as global temperatures have increased. Greenhouse gases like CO2 retain UV rays and reflected radiation in the atmosphere, which has caused the increase in temperature on the planet.',
    keyConcepts: ['causality', 'global interactions', 'sustainability'],
    keywords: ['transportation', 'cars', 'flights', 'CO2', 'fossil fuels', 'greenhouse gases', 'radiation', 'increase in temperature'],
    feedbackHit: 'Well done — you explained one human activity in detail, with reasoning why it could cause the warming trend.',
    feedbackMiss: 'Take ONE human activity and build from stating a cause (1) → outlining (2) → describing in detail (3) → explaining with reasoning why it causes the trend (4), e.g. greenhouse gases trap heat → temperatures rise.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how the trend shown in Source A could be caused by one human activity (one sentence hinting at a single cause).', exemplar: 'There has been an increase in transportation.' },
      { marks: '2', descriptor: 'Outlines how the trend shown in Source A could be caused by one human activity (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'There has been an increase in transportation, for example the number of cars being used which emit CO2.' },
      { marks: '3', descriptor: 'Describes how the trend shown in Source A could be caused by one human activity (one cause considered in detail, without comprehensive reasoning; an example may support it).', exemplar: 'There has been an increase in transportation, for example the number of cars being used and flights taken, which emit CO2. Emissions from fossil fuels have risen since 1960 along with global temperatures.' },
      { marks: '4', descriptor: 'Explains how the trend shown in Source A could be caused by one human activity (one cause considered in detail, with reasoning why human activity causes the trend).', exemplar: '…Greenhouse gases like CO2 retain UV rays and reflected radiation in the atmosphere, which has caused the increase in temperature on the planet.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'The questionnaire is quick and easy to complete with straightforward questions and checkboxes. This is helpful because people are more likely to respond to a short questionnaire, allowing the class to get data from 50 people in a short time period. However, the questionnaire could have included more possible actions in the lists for questions 2 & 3, for example taking part in demonstrations. This is a limitation because only five actions are identified but people could be taking actions the students have not thought about. Although the questionnaire could include more questions, it still allows students to collect sufficient information for their investigation. Overall, this action plan will allow the class to answer the research question.',
    keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'questionnaire', 'checkboxes', 'primary data', 'sample size', 'research question'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s) of the plan/questionnaire, then give an overall judgement. Only one strength/limitation need be considered well.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the action plan (one sentence referring to a single strength).', exemplar: 'The questionnaire is quick and easy to complete.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the action plan (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'The questionnaire is quick and easy to complete with straightforward questions and checkboxes.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the action plan (at least one strength considered in detail, with reasoning).', exemplar: '…This is helpful because people are more likely to respond to a short questionnaire allowing the class to get data from 50 people in a short time period.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the action plan (one sentence referring to a single limitation).', exemplar: 'The questionnaire could have included more possible actions.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the action plan (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'The questionnaire could have included more possible actions in the lists for questions 2 & 3. For example, if they would be willing to take part in demonstrations.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the action plan (at least one limitation considered in detail, with reasoning).', exemplar: '…This is a limitation because only five actions are identified but people could be taking actions that the students have not thought about.' },
      { marks: 'Appraisal 1', descriptor: 'Provides an appraisal of the action plan (a brief judgement; can appear anywhere in the response).', exemplar: 'Overall, this action plan will allow the class to answer the research question.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed appraisal of the action plan, referring to at least one aspect of the investigation to support the overall judgement.', exemplar: 'Although the questionnaire could include more questions, it still allows students to collect sufficient information for their investigation. Overall, this action plan will allow the class to answer the research question.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How would increasing food production in Doha reduce its carbon footprint by 2030?',
    keyConcepts: ['investigation', 'research question', 'sustainability'],
    keywords: ['research question', 'clear', 'focused', 'place', 'time', 'two elements', 'statement of inquiry'],
    feedbackHit: 'Well done — a research question that is both clear AND focused, with at least two elements (e.g. place + time), connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ with one element (time/place/space/other) scores 1; a clear AND focused RQ with at least two elements (e.g. place + time) scores 2. Rewording the statement of inquiry scores 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below. Rewording the statement of inquiry into a question cannot be rewarded.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry. One element (time, place, space or other) must be included.', exemplar: 'How would increasing food production in Doha reduce its carbon footprint? (place — Doha — is included)' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry. At least two elements (time, place, space or other) must be included.', exemplar: 'How would increasing food production in Doha reduce its carbon footprint by 2030? (place — Doha — and time — by 2030 — are included)' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Qatar is a desert country and primarily relies on imported food products, which contributes to global CO2 emissions. Qatar has an extremely high carbon footprint so this research question would allow me to investigate how individual food choices could reduce Doha’s carbon footprint. It focuses on how people in Doha can reduce the impact of climate change by becoming less dependent on imported food.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['imported food', 'CO2 emissions', 'carbon footprint', 'individual food choices', 'statement of inquiry', 'reasons'],
    feedbackHit: 'Well done — you justified, with reasoning, why the research question is relevant to the statement of inquiry.',
    feedbackMiss: 'Build from stating the link to the SoI (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is relevant to the SoI (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the relevance of the research question to the statement of inquiry (a simple connection between the SoI and the RQ; no detail).', exemplar: 'It focuses on how people in Doha can reduce the impact of climate change.' },
      { marks: '2', descriptor: 'Outlines the relevance of the research question to the statement of inquiry (a single sentence with two clauses or two/three short sentences; brief detail, or a single factor).', exemplar: 'It focuses on how people in Doha can reduce the impact of climate change by becoming less dependent on imported food.' },
      { marks: '3', descriptor: 'Describes the relevance of the research question to the statement of inquiry (at least one argument/factor considered in detail, without reasoning).', exemplar: 'Qatar imports a lot of food, which leads to more CO2 being used. This research question would allow me to investigate how individual food choices could reduce Doha’s carbon footprint. It focuses on how people in Doha can reduce the impact of climate change by becoming less dependent on imported food.' },
      { marks: '4', descriptor: 'Justifies the relevance of the research question to the statement of inquiry (at least one argument/factor considered in detail, with reasoning why the RQ is relevant to the SoI).', exemplar: 'Qatar is a desert country and primarily relies on imported food products, which contributes to global CO2 emissions. Qatar has an extremely high carbon footprint so this research question would allow me to investigate how individual food choices could reduce Doha’s carbon footprint…' },
    ],
  },

  q4_c: {
    marks: 1,
    exemplar: 'Statistics from your local government on greenhouse gas emissions in your area.',
    keyConcepts: ['sources', 'investigation'],
    keywords: ['secondary source', 'local government statistics', 'GIS map', 'newspaper article', 'website article', 'specific'],
    feedbackHit: 'Correct — a specific, valid secondary source for the investigation.',
    feedbackMiss: 'Name one specific secondary source, e.g. statistics from your local government, a GIS map of greenhouse-gas emissions, or a relevant newspaper/website article. Do not accept vague responses such as "Statistics" or "Newspaper".',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Statistics from your local government', 'GIS map on greenhouse gas emissions in your area', 'Newspaper/website articles relating to the topic of the investigation'],
  },

  q4_d: {
    marks: 3,
    exemplar:
      'A website article would contain background information on my topic, which can help me get a better understanding of my research question. This could provide a starting point to help me decide on the best primary data to include.',
    keyConcepts: ['sources', 'usefulness', 'reasoning'],
    keywords: ['website article', 'background information', 'understanding', 'research question', 'starting point', 'primary data'],
    feedbackHit: 'Well done — you explained one benefit of the secondary source in detail, with reasoning.',
    feedbackMiss: 'Build from stating a benefit (1) → outlining (2) → explaining in detail with reasoning (3) how the source helps your investigation. Only one benefit need be considered well.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the benefit of including this secondary source in their investigation (one sentence referring to a single benefit).', exemplar: 'A website article would contain background information on my topic.' },
      { marks: '2', descriptor: 'Outlines the benefit of including this secondary source in their investigation (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'A website article would contain background information on my topic, which can help me get a better understanding of my research question.' },
      { marks: '3', descriptor: 'Explains the benefit of including this secondary source in their investigation (at least one benefit considered in detail, with reasoning).', exemplar: '…This could provide a starting point to help me decide on the best primary data to include.' },
    ],
  },

  q4_e: {
    marks: 2,
    exemplar: 'Gathering sufficient primary data might be difficult, as people might not want to be interviewed.',
    keyConcepts: ['investigation', 'methods'],
    keywords: ['challenge', 'primary data', 'sufficient data', 'interviewed', 'detail'],
    feedbackHit: 'Well done — you outlined a valid challenge with brief detail on why it is a challenge.',
    feedbackMiss: 'Name a valid challenge (1), e.g. gathering enough primary data, then add brief detail (2) on the nature of the challenge. A response that is too vague to identify a challenge scores 0.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below. The response does not identify a challenge or is too vague to be awarded a mark.' },
      { marks: '1', descriptor: 'States one challenge they might face when carrying out their investigation (a valid challenge mentioned briefly).', exemplar: 'Gathering sufficient primary data.' },
      { marks: '2', descriptor: 'Outlines one challenge they might face when carrying out their investigation (some detail about the nature of the challenge is provided).', exemplar: 'Gathering sufficient primary data might be difficult, as people might not want to be interviewed.' },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  q5_: {
    marks: 18,
    exemplar:
      'Good evening, and thank you for inviting me to the International Urban Design Conference. Rapid urban growth has led to the growth of slums in Dhaka, with 400,000 people migrating to the city each year and over 1 million living in slums. These slums do not have good infrastructure, therefore a lack of access to sewage and clean water can lead to health issues like diarrhoea and water pollution. By 2030, Dhaka will be the world’s 6th largest mega-city, which will increase the need for freshwater supplies, especially in the slums. One solution to this challenge is for the local government to build communal toilets to reduce water pollution. Currently, streets and rivers are used as toilets, so by making toilets available to residents of the slum, more people would use them. Contaminated water is the main cause of health issues in the slums; by having a developed sewage system, the risk of diseases spreading would be greatly reduced as human waste would not end up in the people’s water supply. This would be even more effective if combined with educating residents, particularly children, on personal hygiene to avoid diarrhoea. So I ask you all: will we let our fastest-growing cities drown in their own waste, or will we act? Thank you.',
    keyConcepts: ['global interactions', 'management & intervention', 'sustainability', 'communication'],
    keywords: ['urban growth', 'slums', 'Dhaka', 'infrastructure', 'sewage', 'communal toilets', 'water pollution', 'solution', 'persuasive speech', 'introduction', 'conclusion'],
    feedbackHit: 'Well done — a persuasive speech explaining at least one solution to a challenge of urban growth, with MYP examples and an introduction and conclusion.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Explain at least one solution to a challenge of urban growth, include MYP examples, refer to communities or the environment, and write in a persuasive style with an introduction and conclusion.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge and understanding: outlines one possible solution to a challenge presented by urban growth, using a limited example and limited relevant terminology.', exemplar: 'Rapid urban growth can result in health issues like diarrhoea. This can be improved by building communal toilets.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge and understanding: describes at least one possible solution to the challenges presented by urban growth for communities and/or the environment, using satisfactory examples and appropriate relevant terminology.', exemplar: 'Rapid urban growth can lead to the growth of slums in Dhaka. Currently, streets and rivers are used as toilets so this would improve their cleanliness. The lack of access to sewage and clean water can lead to health issues like diarrhoea and water pollution. The local government could build communal toilets to reduce water pollution and could educate residents on personal hygiene to avoid diarrhoea.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge and understanding: explains at least one possible solution to the challenges presented by urban growth for communities and/or the environment, using accurate examples and appropriate relevant terminology.', exemplar: 'Rapid urban growth has led to the growth of slums in Dhaka with 400,000 poor people migrating to the city each year. These slums do not have good infrastructure, therefore a lack of access to sewage and clean water can lead to health issues like diarrhoea and water pollution. The local government could build communal toilets to reduce water pollution… This solution minimises the amount of human waste in the waterways in Dhaka, which is a main cause of the health issues there.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge and understanding: thoroughly explains at least one possible solution to the challenges presented by urban growth for communities and/or the environment, using accurate and effective examples and appropriate relevant terminology.', exemplar: '…By 2030, Dhaka will be the world’s 6th largest mega-city, which will increase the need for freshwater supplies… By having a developed sewage system, the risk of diseases spreading would be greatly reduced as the human waste would not end up in the people’s water supply… This would be even more effective if combined with educating residents, particularly children, on personal hygiene to avoid diarrhoea.' },
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
    exemplar: '10.7 million',
    keyConcepts: ['data interpretation', 'human movement'],
    keywords: ['refugees', 'increase', '10.7 million', '25.9', '15.2'],
    feedbackHit: 'Correct — the increase in refugees is 10.7 million.',
    feedbackMiss: 'Subtract the 2008 refugee figure from the 2018 figure (25.9 − 15.2 = 10.7). Award 1 mark for 10.7 million (or 10,700,000).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['10.7 million', '10,700,000'],
  },

  q6_b: {
    marks: 1,
    exemplar: 'asylum seekers',
    keyConcepts: ['data interpretation', 'human movement'],
    keywords: ['asylum seekers', 'four times bigger', '827 000', '3.5 million'],
    feedbackHit: 'Correct — the number of asylum seekers is more than four times bigger in 2018 than in 2008.',
    feedbackMiss: 'Pick the category whose 2018 value is more than four times its 2008 value (827 000 → 3.5 million). Award 1 mark for asylum seekers.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose the correct response from a number of possibilities.',
    blankAnswers: ['asylum seekers'],
  },

  q7_a: {
    marks: 2,
    exemplar: 'To inform readers of the newspaper about the changes in the number of migrants in 2008 and 2018.',
    keyConcepts: ['source evaluation', 'purpose', 'human movement'],
    keywords: ['purpose', 'inform readers', 'newspaper', 'changes', 'forced migrants', '2008', '2018'],
    feedbackHit: 'Well done — you outlined the purpose of Source D, elaborating on what it informs readers about.',
    feedbackMiss: 'State the purpose (1), e.g. to inform readers, then elaborate (2), e.g. about the change in the number of forced migrants between 2008 and 2018.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the purpose of Source D (a purpose without elaboration).', exemplar: 'To inform readers of the newspaper.' },
      { marks: '2', descriptor: 'Outlines the purpose of Source D (the purpose elaborated on).', exemplar: 'To inform readers of the newspaper about the changes in the number of migrants in 2008 and 2018.' },
    ],
  },

  q7_b: {
    marks: 2,
    exemplar: 'Using a pictograph with pictures and numbers makes it easy to understand. The newspaper can spread the information to a wide audience.',
    keyConcepts: ['source evaluation', 'value', 'communication'],
    keywords: ['value', 'pictograph', 'pictures and numbers', 'easy to understand', 'newspaper', 'wide audience'],
    feedbackHit: 'Well done — you outlined one value of Source D, elaborating on why it is useful in a newspaper.',
    feedbackMiss: 'State one value of the pictograph (1), then elaborate (2) on why it is useful in the newspaper context (not just a general value).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one value of using Source D in a newspaper article on forced migration (a statement without elaboration).', exemplar: 'Using a pictograph makes it easy to understand.' },
      { marks: '2', descriptor: 'Outlines one value of using Source D in a newspaper article on forced migration (elaborates on the value of the source being used in a newspaper, rather than a general value).', exemplar: 'Using a pictograph with pictures and numbers makes it easy to understand. The newspaper can spread the information to a wide audience.' },
    ],
  },

  q8_a: {
    marks: 3,
    exemplar:
      'There is not enough information on causes. It only refers to disaster-related causes and not other causes such as wars, which the student would need. The source does not specify which disasters cause displacement in different countries, which the student would need to know for their investigation. This source alone does not give the student enough information or detail for a full investigation.',
    keyConcepts: ['source evaluation', 'limitation', 'perspectives', 'causality'],
    keywords: ['limitation', 'causes', 'disaster-related', 'wars', 'displacement', 'student', 'investigation'],
    feedbackHit: 'Well done — you explained one limitation of Source E for the MYP year 3 student, with reasoning referring to the investigation.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining (2) → explaining with reasoning (3). Refer to the student and/or the investigation, e.g. it only shows disaster-related causes, not wars, which the student needs.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source E to an MYP year 3 student investigating the causes of forced migration (one sentence hinting at a single limitation).', exemplar: 'There is not enough information on causes.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source E to an MYP year 3 student investigating the causes of forced migration (a single sentence with two clauses or two/three short sentences; the student and/or investigation should be referred to).', exemplar: 'There is not enough information on causes. It only refers to disaster related causes and not other causes such as wars. The source does not specify which disasters cause displacement in different countries.' },
      { marks: '3', descriptor: 'Explains one limitation of Source E to an MYP year 3 student investigating the causes of forced migration (one limitation considered with reasoning; refers to the student and/or the investigation).', exemplar: '…not other causes such as wars, which the student would need… which the student would need to know for their investigation. This source alone does not give the student enough information or detail for a full investigation.' },
    ],
  },

  q8_b: {
    marks: 3,
    exemplar:
      'The map is from 2016 so is out of date. A government official would need statistics from this year for their report to keep the report up to date. The situation could have changed since 2016 and the impact of internally displaced people in India could be very different now. If the government official used this source, their report could be invalid as the impacts have changed.',
    keyConcepts: ['source evaluation', 'limitation', 'perspectives', 'change'],
    keywords: ['limitation', 'out of date', '2016', 'government official', 'current statistics', 'report', 'invalid'],
    feedbackHit: 'Well done — you explained one limitation of Source E for the Indian government official, with reasoning referring to the report.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining (2) → explaining with reasoning (3). Refer to the official and/or the report, e.g. the map is from 2016 so it is out of date and the report could be invalid.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source E to an Indian government official writing a report on the impacts of internally displaced people in India (one sentence hinting at a single limitation).', exemplar: 'The map is from 2016 so is out of date.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source E to an Indian government official writing a report on the impacts of internally displaced people in India (a single sentence with two clauses or two/three short sentences; the official and/or report should be referred to).', exemplar: 'The map is from 2016 so is out of date. A government official would need statistics from this year for their report. The situation could have changed since 2016 and the impact of internally displaced people in India could be very different now.' },
      { marks: '3', descriptor: 'Explains one limitation of Source E to an Indian government official writing a report on the impacts of internally displaced people in India (one limitation considered with reasoning; refers to the official and/or the report).', exemplar: '…A government official would need statistics from this year for their report to keep the report up to date… If the government official used this source, their report could be invalid as the impacts have changed.' },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'Migration creates significant benefits for societies, though it also brings negative consequences; on balance the benefits outweigh the negatives. Voluntary migration means that people are moving for better job opportunities. This is essential to migrants who need more money to support themselves or their families. If people are moving for jobs, positions in the community will be filled and this will be good for the economy, as there will be an increase in the number of economically active people who will pay taxes. For example, rural to urban migration in China boosted the economy as 225 million migrants moved to cities and began working in industries such as construction. Without this migration, China’s coastal cities like Shanghai would not have been able to develop their exports and therefore their economy. The increase in taxes has allowed Shanghai’s local government to invest in infrastructure, leading to better access to hospitals and improved roads, which has in turn increased the quality of life for migrants and locals. However, migration can create tension between locals and migrants that can lead to xenophobic attacks. For example, in Dresden, Germany, there were attacks on refugee shelters. Some locals don’t like the influence of migrants on their culture and do not want a multicultural society. Germany accepted 1 million refugees and while these attacks are shocking, they are not widespread. This is a negative impact of migration, however as this is a short-term negative impact and due to its isolated nature, it does not outweigh the positive impacts. In conclusion, these examples demonstrate that to a large extent migration does bring more benefits than negatives to societies.',
    keyConcepts: ['global interactions', 'disparity & equity', 'causality', 'perspectives', 'synthesis'],
    keywords: ['migration', 'voluntary migration', 'benefits', 'negative consequences', 'economy', 'taxes', 'China', 'Shanghai', 'xenophobia', 'Dresden', 'refugees', 'perspectives', 'conclusion'],
    feedbackHit: 'Well done — a structured essay weighing positive and negative consequences of migration, with named examples, geographical terminology and a clear conclusion answering "to what extent".',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Include appropriate geographical terminology, positive AND negative consequences, named MYP examples, and a clear conclusion stating to what extent you agree.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Demonstrates limited contextual and conceptual understanding in an outline, using minimal examples and limited relevant terminology. Responses are likely to be brief with little detail.', exemplar: 'Voluntary migration means that people are moving for better job opportunities. This is essential to migrants who need more money to support themselves or their families. If people are moving for jobs, positions in the community will be filled and this will be good for the economy.' },
      { marks: 'CritA 3–4', descriptor: 'Demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate relevant terminology.', exemplar: '…This will be a benefit to the economy as there will be an increase in the number of economically active people who will pay taxes. For example, rural migrants in China boosted the economy by moving to cities and working in industries such as construction. However, migration can create tension between locals and migrants that can lead to xenophobic attacks. For example, in Dresden, Germany, there were attacks on refugee shelters.' },
      { marks: 'CritA 5–6', descriptor: 'Demonstrates substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate relevant terminology.', exemplar: '…Without this migration, China’s coastal cities like Shanghai would not have been able to develop its exports and therefore its economy. The increase in taxes has allowed Shanghai’s infrastructure to grow. Migration brings many economic benefits as can be seen in this example… this does not outweigh the economic benefits that migration brings to societies.' },
      { marks: 'CritA 7–8', descriptor: 'Demonstrates detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate relevant terminology.', exemplar: '…rural to urban migration in China boosted the economy as 225 million migrants moved to cities… The increase in taxes has allowed Shanghai’s local government to invest in infrastructure, leading to better access to hospitals and improved roads, which has in turn increased the quality of life for migrants and locals.' },
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
