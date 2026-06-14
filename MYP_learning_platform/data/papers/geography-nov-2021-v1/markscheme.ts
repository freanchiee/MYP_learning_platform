import 'server-only'

/**
 * MYP Geography — November 2021 · ISOMORPHIC VARIANT v1 mark scheme
 * (rubric-banded, "best fit").
 *
 * Same construct as geography-nov-2021: every entry carries the IB band descriptors
 * (UNCHANGED — the band criteria don't change between isomorphic variants) plus worked
 * exemplar responses REWRITTEN for the new plastic-pollution / ocean-health scenario.
 * `exemplar` holds the top-band model answer; the extra fields (`commandTerm`,
 * `commandTermDefinition`, `rubricBands`) are optional and ignored by consumers that
 * don't use them.
 *
 * The two extended responses marked across several criterion strands (Q5 /18 and Q9 /24)
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
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  q1_: {
    marks: 2,
    exemplar: 'There has been an increase in plastic production, with 2020 having the highest figure at 367 million tonnes.',
    keyConcepts: ['causality', 'change', 'global interactions'],
    keywords: ['increase', 'trend', 'overall increase', '2020', 'highest', '367 million tonnes', 'data from Source A'],
    feedbackHit: 'Well done — you outlined the overall trend and referenced data from the table.',
    feedbackMiss: 'State the overall trend (1) — an overall increase — then quote data from the table (2), e.g. 2020 had the highest production at 367 million tonnes.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the trend in global plastic production from 1960–2020 (production increasing overall).', exemplar: 'There has been an increase from 1960 – 2020.' },
      { marks: '2', descriptor: 'Outlines the trend in global plastic production from 1960–2020, using data from Source A (the overall increase referenced with data from the table).', exemplar: 'There has been an increase in plastic production, with 2020 having the highest figure at 367 million tonnes.' },
    ],
  },

  q2_: {
    marks: 4,
    exemplar:
      'There has been a large rise in the use of single-use packaging, for example plastic bottles, bags and food wrappers, which are made from plastic. As consumer demand for cheap, convenient goods has grown since 1960, manufacturers have produced ever more plastic packaging to meet it. Plastic is cheap to make from fossil fuels and quick to mould, so producers keep choosing it, which has driven the steady increase in the total mass of plastic produced shown in Source A.',
    keyConcepts: ['causality', 'global interactions', 'sustainability'],
    keywords: ['single-use packaging', 'bottles', 'bags', 'consumer demand', 'cheap', 'fossil fuels', 'manufacturers', 'increase in production'],
    feedbackHit: 'Well done — you explained one human activity in detail, with reasoning why it could cause the rising production trend.',
    feedbackMiss: 'Take ONE human activity and build from stating a cause (1) → outlining (2) → describing in detail (3) → explaining with reasoning why it causes the trend (4), e.g. rising demand for cheap single-use packaging → more plastic produced.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how the trend shown in Source A could be caused by one human activity (one sentence hinting at a single cause).', exemplar: 'There has been a rise in the use of single-use packaging.' },
      { marks: '2', descriptor: 'Outlines how the trend shown in Source A could be caused by one human activity (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'There has been a rise in the use of single-use packaging, for example plastic bottles and bags, which are made from plastic.' },
      { marks: '3', descriptor: 'Describes how the trend shown in Source A could be caused by one human activity (one cause considered in detail, without comprehensive reasoning; an example may support it).', exemplar: 'There has been a large rise in the use of single-use packaging, for example plastic bottles, bags and food wrappers. As consumer demand for cheap, convenient goods has grown since 1960, manufacturers have produced more plastic packaging to meet it.' },
      { marks: '4', descriptor: 'Explains how the trend shown in Source A could be caused by one human activity (one cause considered in detail, with reasoning why human activity causes the trend).', exemplar: '…Plastic is cheap to make from fossil fuels and quick to mould, so producers keep choosing it, which has driven the steady increase in the total mass of plastic produced shown in Source A.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'The questionnaire is quick and easy to complete with straightforward questions and checkboxes. This is helpful because people are more likely to respond to a short questionnaire, allowing the class to get data from 50 people in a short time period. However, the questionnaire could have included more possible actions in the lists for questions 2 & 3, for example avoiding products with microplastics. This is a limitation because only five actions are identified but people could be taking actions the students have not thought about. Although the questionnaire could include more questions, it still allows students to collect sufficient information for their investigation. Overall, this action plan will allow the class to answer the research question.',
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
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the action plan (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'The questionnaire could have included more possible actions in the lists for questions 2 & 3. For example, whether they avoid products containing microplastics.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the action plan (at least one limitation considered in detail, with reasoning).', exemplar: '…This is a limitation because only five actions are identified but people could be taking actions that the students have not thought about.' },
      { marks: 'Appraisal 1', descriptor: 'Provides an appraisal of the action plan (a brief judgement; can appear anywhere in the response).', exemplar: 'Overall, this action plan will allow the class to answer the research question.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed appraisal of the action plan, referring to at least one aspect of the investigation to support the overall judgement.', exemplar: 'Although the questionnaire could include more questions, it still allows students to collect sufficient information for their investigation. Overall, this action plan will allow the class to answer the research question.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How would replacing single-use bags with refillables in Cebu reduce its plastic waste by 2030?',
    keyConcepts: ['investigation', 'research question', 'sustainability'],
    keywords: ['research question', 'clear', 'focused', 'place', 'time', 'two elements', 'statement of inquiry'],
    feedbackHit: 'Well done — a research question that is both clear AND focused, with at least two elements (e.g. place + time), connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ with one element (time/place/space/other) scores 1; a clear AND focused RQ with at least two elements (e.g. place + time) scores 2. Rewording the statement of inquiry scores 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below. Rewording the statement of inquiry into a question cannot be rewarded.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry. One element (time, place, space or other) must be included.', exemplar: 'How would replacing single-use bags with refillables in Cebu reduce its plastic waste? (place — Cebu — is included)' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry. At least two elements (time, place, space or other) must be included.', exemplar: 'How would replacing single-use bags with refillables in Cebu reduce its plastic waste by 2030? (place — Cebu — and time — by 2030 — are included)' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Cebu is a coastal city whose households rely heavily on single-use plastic bags, much of which ends up in the bay. The city has a serious plastic-pollution problem, so this research question would allow me to investigate how an individual switch to refillables could reduce the community’s plastic waste. It focuses on how people in Cebu can reduce plastic pollution by changing one everyday habit.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['single-use bags', 'refillables', 'plastic waste', 'coastal city', 'individual action', 'statement of inquiry', 'reasons'],
    feedbackHit: 'Well done — you justified, with reasoning, why the research question is relevant to the statement of inquiry.',
    feedbackMiss: 'Build from stating the link to the SoI (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is relevant to the SoI (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the relevance of the research question to the statement of inquiry (a simple connection between the SoI and the RQ; no detail).', exemplar: 'It focuses on how people in Cebu can reduce plastic pollution.' },
      { marks: '2', descriptor: 'Outlines the relevance of the research question to the statement of inquiry (a single sentence with two clauses or two/three short sentences; brief detail, or a single factor).', exemplar: 'It focuses on how people in Cebu can reduce plastic pollution by changing one everyday habit.' },
      { marks: '3', descriptor: 'Describes the relevance of the research question to the statement of inquiry (at least one argument/factor considered in detail, without reasoning).', exemplar: 'Cebu uses a lot of single-use plastic bags, much of which ends up in the bay. This research question would allow me to investigate how a switch to refillables could reduce the community’s plastic waste. It focuses on how people in Cebu can reduce plastic pollution by changing one everyday habit.' },
      { marks: '4', descriptor: 'Justifies the relevance of the research question to the statement of inquiry (at least one argument/factor considered in detail, with reasoning why the RQ is relevant to the SoI).', exemplar: 'Cebu is a coastal city whose households rely heavily on single-use plastic bags, much of which ends up in the bay. The city has a serious plastic-pollution problem, so this research question would allow me to investigate how an individual switch to refillables could reduce the community’s plastic waste…' },
    ],
  },

  q4_c: {
    marks: 1,
    exemplar: 'Statistics from your local council on the amount of plastic waste collected in your area.',
    keyConcepts: ['sources', 'investigation'],
    keywords: ['secondary source', 'local council statistics', 'GIS map', 'litter hotspots', 'newspaper article', 'website article', 'specific'],
    feedbackHit: 'Correct — a specific, valid secondary source for the investigation.',
    feedbackMiss: 'Name one specific secondary source, e.g. statistics from your local council on plastic waste, a GIS map of litter hotspots, or a relevant newspaper/website article. Do not accept vague responses such as "Statistics" or "Newspaper".',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Statistics from your local council on plastic waste', 'GIS map of litter hotspots in your area', 'Newspaper/website articles relating to the topic of the investigation'],
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
      'Good evening, and thank you for inviting me to the International Coastal Cities Conference. Rapid urban growth has led to overflowing waste in our coastal megacity, which grew from a fishing town of 0.9 million in 1985 to over 8 million people by 2020. As migrants crowded into shoreline slums, household waste outpaced collection — by 2012 around 40% of waste in those slums was uncollected, and plastic clogged the canals and drains. When the monsoon comes, those blocked drains cause flooding, while the river carries plastic out to sea, harming the fisheries local communities depend on. One solution to this challenge is for the city government to extend door-to-door waste collection into the informal settlements and add covered community collection points. Currently, plastic is dumped in canals because there is nowhere else to put it, so by making collection available, far more waste would be captured before it reaches the water. This would be even more effective if combined with educating residents on separating plastics so more can be recycled rather than burned. So I ask you all: will we let our fastest-growing coastal cities drown in their own plastic, or will we act? Thank you.',
    keyConcepts: ['global interactions', 'management & intervention', 'sustainability', 'communication'],
    keywords: ['urban growth', 'coastal megacity', 'informal settlements', 'waste collection', 'plastic', 'canals', 'flooding', 'solution', 'persuasive speech', 'introduction', 'conclusion'],
    feedbackHit: 'Well done — a persuasive speech explaining at least one solution to a challenge of urban growth, with MYP examples and an introduction and conclusion.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Explain at least one solution to a challenge of urban growth, include MYP examples, refer to communities or the environment, and write in a persuasive style with an introduction and conclusion.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge and understanding: outlines one possible solution to a challenge presented by urban growth, using a limited example and limited relevant terminology.', exemplar: 'Rapid urban growth can lead to plastic clogging the canals. This can be improved by collecting more waste.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge and understanding: describes at least one possible solution to the challenges presented by urban growth for communities and/or the environment, using satisfactory examples and appropriate relevant terminology.', exemplar: 'Rapid urban growth has crowded migrants into shoreline slums in our coastal megacity. Household waste outpaced collection, so plastic clogs the canals and drains. The city government could extend waste collection into the informal settlements so less plastic ends up in the canals, and could educate residents on separating plastics.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge and understanding: explains at least one possible solution to the challenges presented by urban growth for communities and/or the environment, using accurate examples and appropriate relevant terminology.', exemplar: 'Rapid urban growth has led to overflowing waste as migrants crowded into shoreline slums; by 2012 around 40% of waste there was uncollected. The city government could extend door-to-door collection into the settlements and add community collection points… This solution captures far more plastic before it reaches the canals and the sea.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge and understanding: thoroughly explains at least one possible solution to the challenges presented by urban growth for communities and/or the environment, using accurate and effective examples and appropriate relevant terminology.', exemplar: '…When the monsoon comes, blocked drains cause flooding while the river carries plastic out to sea, harming fisheries communities depend on. By extending collection and adding covered community collection points, plastic is captured before it reaches the water… This would be even more effective if combined with educating residents on separating plastics so more can be recycled rather than burned.' },
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
    exemplar: '5.7 million tonnes',
    keyConcepts: ['data interpretation', 'waste'],
    keywords: ['South Asia', 'increase', '5.7 million tonnes', '12.1', '6.4'],
    feedbackHit: 'Correct — the increase in South Asia is 5.7 million tonnes.',
    feedbackMiss: 'Subtract the 2010 South Asia figure from the 2020 figure (12.1 − 6.4 = 5.7). Award 1 mark for 5.7 million tonnes.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['5.7 million tonnes', '5.7'],
  },

  q6_b: {
    marks: 1,
    exemplar: 'Sub-Saharan Africa',
    keyConcepts: ['data interpretation', 'waste'],
    keywords: ['Sub-Saharan Africa', 'four times bigger', '1.9', '8.3'],
    feedbackHit: 'Correct — mismanaged plastic waste in Sub-Saharan Africa is more than four times bigger in 2020 than in 2010.',
    feedbackMiss: 'Pick the region whose 2020 value is more than four times its 2010 value (1.9 → 8.3 million tonnes). Award 1 mark for Sub-Saharan Africa.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose the correct response from a number of possibilities.',
    blankAnswers: ['Sub-Saharan Africa'],
  },

  q7_a: {
    marks: 2,
    exemplar: 'To inform readers of the newspaper about the changes in mismanaged plastic waste by region between 2010 and 2020.',
    keyConcepts: ['source evaluation', 'purpose', 'waste'],
    keywords: ['purpose', 'inform readers', 'newspaper', 'changes', 'mismanaged plastic waste', '2010', '2020'],
    feedbackHit: 'Well done — you outlined the purpose of Source E, elaborating on what it informs readers about.',
    feedbackMiss: 'State the purpose (1), e.g. to inform readers, then elaborate (2), e.g. about the change in mismanaged plastic waste by region between 2010 and 2020.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the purpose of Source E (a purpose without elaboration).', exemplar: 'To inform readers of the newspaper.' },
      { marks: '2', descriptor: 'Outlines the purpose of Source E (the purpose elaborated on).', exemplar: 'To inform readers of the newspaper about the changes in mismanaged plastic waste by region between 2010 and 2020.' },
    ],
  },

  q7_b: {
    marks: 2,
    exemplar: 'Using a table with clear figures for each region makes it easy to compare. The newspaper can spread the information to a wide audience.',
    keyConcepts: ['source evaluation', 'value', 'communication'],
    keywords: ['value', 'table', 'clear figures', 'easy to compare', 'newspaper', 'wide audience'],
    feedbackHit: 'Well done — you outlined one value of Source E, elaborating on why it is useful in a newspaper.',
    feedbackMiss: 'State one value of the table (1), then elaborate (2) on why it is useful in the newspaper context (not just a general value).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one value of using Source E in a newspaper article on ocean plastic (a statement without elaboration).', exemplar: 'Using a table makes the figures easy to compare.' },
      { marks: '2', descriptor: 'Outlines one value of using Source E in a newspaper article on ocean plastic (elaborates on the value of the source being used in a newspaper, rather than a general value).', exemplar: 'Using a table with clear figures for each region makes it easy to compare. The newspaper can spread the information to a wide audience.' },
    ],
  },

  q8_a: {
    marks: 3,
    exemplar:
      'There is not enough information on causes. The map only shows where plastic waste is imported, not why richer countries export it, which the student would need. The source does not specify what drives the trade in different countries, which the student would need to know for their investigation. This source alone does not give the student enough information or detail for a full investigation.',
    keyConcepts: ['source evaluation', 'limitation', 'perspectives', 'causality'],
    keywords: ['limitation', 'causes', 'imports only', 'why countries export', 'plastic-waste trade', 'student', 'investigation'],
    feedbackHit: 'Well done — you explained one limitation of Source F for the MYP year 3 student, with reasoning referring to the investigation.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining (2) → explaining with reasoning (3). Refer to the student and/or the investigation, e.g. it only shows where waste is imported, not why it is exported, which the student needs.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source F to an MYP year 3 student investigating the causes of the plastic-waste trade (one sentence hinting at a single limitation).', exemplar: 'There is not enough information on causes.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source F to an MYP year 3 student investigating the causes of the plastic-waste trade (a single sentence with two clauses or two/three short sentences; the student and/or investigation should be referred to).', exemplar: 'There is not enough information on causes. It only shows where waste is imported, not why richer countries export it. The source does not specify what drives the trade in different countries.' },
      { marks: '3', descriptor: 'Explains one limitation of Source F to an MYP year 3 student investigating the causes of the plastic-waste trade (one limitation considered with reasoning; refers to the student and/or the investigation).', exemplar: '…not why richer countries export it, which the student would need… which the student would need to know for their investigation. This source alone does not give the student enough information or detail for a full investigation.' },
    ],
  },

  q8_b: {
    marks: 3,
    exemplar:
      'The map is from 2018 so is out of date. A government official would need statistics from this year for their report to keep the report up to date. The situation could have changed since 2018, especially after Malaysia tightened its import rules, so the impacts of imported plastic waste in Malaysia could be very different now. If the government official used this source, their report could be invalid as the impacts have changed.',
    keyConcepts: ['source evaluation', 'limitation', 'perspectives', 'change'],
    keywords: ['limitation', 'out of date', '2018', 'government official', 'current statistics', 'report', 'invalid'],
    feedbackHit: 'Well done — you explained one limitation of Source F for the Malaysian government official, with reasoning referring to the report.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining (2) → explaining with reasoning (3). Refer to the official and/or the report, e.g. the map is from 2018 so it is out of date and the report could be invalid.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source F to a Malaysian government official writing a report on the impacts of imported plastic waste in Malaysia (one sentence hinting at a single limitation).', exemplar: 'The map is from 2018 so is out of date.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source F to a Malaysian government official writing a report on the impacts of imported plastic waste in Malaysia (a single sentence with two clauses or two/three short sentences; the official and/or report should be referred to).', exemplar: 'The map is from 2018 so is out of date. A government official would need statistics from this year for their report. The situation could have changed since 2018 and the impact of imported plastic waste in Malaysia could be very different now.' },
      { marks: '3', descriptor: 'Explains one limitation of Source F to a Malaysian government official writing a report on the impacts of imported plastic waste in Malaysia (one limitation considered with reasoning; refers to the official and/or the report).', exemplar: '…A government official would need statistics from this year for their report to keep the report up to date… If the government official used this source, their report could be invalid as the impacts have changed.' },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'The global trade in plastic waste creates some benefits for societies, though it also brings serious negative consequences; on balance the negatives outweigh the benefits. Importing plastic waste can bring economic benefits to recycling businesses. This is valuable to workers who need an income, and to importing countries that can build a recycling industry around the trade. For example, after China banned plastic-waste imports in 2018, Malaysia received around 870,000 tonnes of plastic waste, and recycling firms there gained raw material and jobs. Without this trade, some processors in Malaysia would have had less material to work with, and the income it generated allowed some local governments to invest in collection equipment, improving services for residents. However, the trade also creates severe environmental and health problems for the importing communities. Much of the imported plastic is too contaminated to recycle profitably, so it is dumped or burned in the open in places like Jenjarom in Malaysia, releasing toxic fumes that harmed residents’ health. This is a negative impact of the trade; although the economic gains are real, they are concentrated in a few firms while the pollution falls on whole communities, so they do not outweigh the harm. In conclusion, these examples demonstrate that to a large extent the global plastic-waste trade brings more negative consequences than benefits to the societies that import the waste.',
    keyConcepts: ['global interactions', 'disparity & equity', 'causality', 'perspectives', 'synthesis'],
    keywords: ['plastic-waste trade', 'benefits', 'negative consequences', 'recycling industry', 'jobs', 'Malaysia', 'China ban', 'dumping', 'burning', 'health', 'perspectives', 'conclusion'],
    feedbackHit: 'Well done — a structured essay weighing positive and negative consequences of the plastic-waste trade, with named examples, geographical terminology and a clear conclusion answering "to what extent".',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Include appropriate geographical terminology, positive AND negative consequences, named MYP examples, and a clear conclusion stating to what extent you agree.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Demonstrates limited contextual and conceptual understanding in an outline, using minimal examples and limited relevant terminology. Responses are likely to be brief with little detail.', exemplar: 'Importing plastic waste can bring money to recycling businesses. This is good for workers who need an income. If countries can build a recycling industry, this will be good for their economy.' },
      { marks: 'CritA 3–4', descriptor: 'Demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate relevant terminology.', exemplar: '…This will be a benefit as recycling firms gain raw material and jobs. For example, after China banned plastic-waste imports in 2018, Malaysia received a lot of plastic waste. However, the trade can also create pollution, as in Jenjarom in Malaysia, where plastic was dumped and burned.' },
      { marks: 'CritA 5–6', descriptor: 'Demonstrates substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate relevant terminology.', exemplar: '…Without this trade, some processors in Malaysia would have had less material to work with, and the income allowed some local governments to invest in collection equipment. Much of the imported plastic, though, is too contaminated to recycle, so it is dumped or burned, releasing toxic fumes… these gains do not outweigh the harm to communities.' },
      { marks: 'CritA 7–8', descriptor: 'Demonstrates detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate relevant terminology.', exemplar: '…after China banned plastic-waste imports in 2018, Malaysia received around 870,000 tonnes of plastic waste… much of which was too contaminated to recycle and was burned in the open in places like Jenjarom, releasing toxic fumes that harmed residents’ health, while the economic gains were concentrated in a few firms.' },
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
