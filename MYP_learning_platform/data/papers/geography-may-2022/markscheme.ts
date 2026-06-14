import 'server-only'

/**
 * MYP Geography — May 2022 mark scheme (rubric-banded, "best fit").
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
 * All exemplars and descriptors are transcribed from the official M22 mark scheme.
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
  q1_: {
    marks: 2,
    exemplar: 'Loss of life; destruction of houses.',
    keyConcepts: ['natural disasters', 'causality'],
    keywords: ['loss of life', 'flooding', 'destruction of houses', 'destruction of infrastructure', 'forced migration', 'tsunami'],
    feedbackHit: 'Correct — two valid impacts of the 2004 tsunami.',
    feedbackMiss: 'State two impacts (e.g. loss of life, flooding, destruction of houses/infrastructure, loss of trees/grass, forced migration). Award 1 mark per impact. Responses do not have to be shown in the source.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Loss of life', 'Flooding', 'Destruction of houses', 'Destruction of infrastructure', 'Loss of trees/grass', 'Forced migration'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'Many low-income families don’t have insurance and after an earthquake, their house might collapse and they must pay to rebuild or repair their homes. The family might not be able to afford this leading to them staying in an unsafe house. This could lead to the family being more vulnerable if there were aftershocks as they are at greater risk of the building collapsing and killing or trapping them.',
    keyConcepts: ['disparity & equity', 'causality', 'management & intervention'],
    keywords: ['income disparity', 'insurance', 'low-income', 'vulnerable', 'aftershocks', 'unsafe house', 'earthquake'],
    feedbackHit: 'Well done — you explained one way income disparity worsens a disaster’s impact in detail, with reasoning.',
    feedbackMiss: 'Build from stating a way (1) → outlining (2) → describing in detail (3) → explaining one way in detail with reasoning (4). One way should be considered in depth.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States how disparities in income can worsen the impact of one natural disaster (one sentence hinting at a single idea).', exemplar: 'After an earthquake a low-income family’s house might collapse and the family might not be able to afford to repair it.' },
      { marks: '2', descriptor: 'Outlines how disparities in income can worsen the impacts of one natural disaster (a single idea elaborated; brief detail).', exemplar: 'Many low-income families don’t have insurance. After an earthquake their house might collapse and the family might not be able to afford to repair it leading to them staying in an unsafe house.' },
      { marks: '3', descriptor: 'Describes how disparities in income can worsen the impacts of one natural disaster (one way in detail, without comprehensive reasons; a short paragraph).', exemplar: '…and they must pay to rebuild or repair their homes. The family might not be able to afford this leading to them staying in an unsafe house. This could lead to the family being more vulnerable if there were aftershocks.' },
      { marks: '4', descriptor: 'Explains how disparities in income can worsen the impacts of one natural disaster (one way in detail, with reasoning; an example may support but is not essential).', exemplar: '…This could lead to the family being more vulnerable if there were aftershocks as they are at greater risk of the building collapsing and killing or trapping them.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'The investigation collected data from 1.9 million mobile phones. This provides a large sample size, which is representative of the population of the Aceh Province. However, there are four districts with no data. This compromises the reliability of the map and means that we do not have a full understanding of the impact of the tsunami across the whole Province. Therefore, the map only gives us a partial picture of where people had to move to. Although there is some missing data on the map the large amount of data used means that overall the investigation was successful.',
    keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'sample size', '1.9 million mobile phones', 'representative', 'missing data', 'reliability'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the investigation and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s), then give an overall judgement. You need not discuss both strengths and limitations of every part of the plan or map.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the investigation (one sentence referring to a single strength).', exemplar: 'The investigation collected data from 1.9 million mobile phones.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the investigation (a strength elaborated; brief detail).', exemplar: 'The investigation collected data from 1.9 million mobile phones. This provides a large sample size.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the investigation (a strength elaborated with reasoning). 3+ strengths outlined can also reach 3.', exemplar: '…This provides a large sample size, which is representative of the population of the Aceh Province.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the investigation (one sentence referring to a single limitation).', exemplar: 'There are four districts with no data.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the investigation (a limitation elaborated; brief detail). Suggesting alternative methods can address limitations.', exemplar: 'There are four districts with no data. The map only gives us a partial picture of where people had to move to.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the investigation (a limitation elaborated with reasoning). 3+ limitations outlined can also reach 3.', exemplar: '…This compromises the reliability of the map and means that we do not have a full understanding of the impact of the tsunami across the whole Province. Therefore, the map only gives us a partial picture of where people had to move to.' },
      { marks: 'Appraisal 1', descriptor: 'States an appraisal of the investigation (a summary of strengths/limitations or a brief judgement; can appear anywhere).', exemplar: 'Overall, the investigation was successful.' },
      { marks: 'Appraisal 2', descriptor: 'Outlines an appraisal — weighs up positive and negative points (implicitly or explicitly) into an overall judgement on the investigative process.', exemplar: 'Although there is some missing data on the map the large amount of data used means that overall the investigation was successful.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'To what extent did land use zoning in Iceland reduce the impacts of volcanic eruptions?',
    keyConcepts: ['investigation', 'research question'],
    keywords: ['research question', 'clear', 'focused', 'management strategy', 'natural disaster', 'statement of inquiry', 'land use zoning'],
    feedbackHit: 'Well done — a research question that is both clear and focused and connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ scores 1; one that is BOTH clear AND focused (specifies a management strategy and a specific disaster/location) and connected to the SoI scores 2. A reworded SoI scores 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry.', exemplar: 'To what extent did Iceland reduce the impacts of volcanic eruptions? (Clear and connected, but lacks focus — no management strategy or specific disaster named.)' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry (focuses on a location and management strategy).', exemplar: 'To what extent did land use zoning in Iceland reduce the impacts of volcanic eruptions?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Volcanic eruptions can destroy housing and infrastructure, leading to challenges with economic activity such as farming. Land use zoning is used to protect important areas, particularly residential and areas of economic activity. By investigating Iceland’s use of this strategy, I can find out how successful their land use zoning was in reducing the impacts of the 2010 volcanic eruption.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['land use zoning', 'protect', 'residential', 'economic activity', 'relevance', 'reasoning', 'goal'],
    feedbackHit: 'Well done — you justified, with reasoning, why the RQ will help the NGO achieve their goal.',
    feedbackMiss: 'Build from a simple connection (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is relevant to the SoI/goal (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States how the research question will help the NGO to achieve their goal (a simple connection between the SoI and the RQ).', exemplar: 'Land use zoning is used to protect important areas.' },
      { marks: '2', descriptor: 'Outlines how the research question will help the NGO to achieve their goal (brief detail on how the RQ is relevant).', exemplar: 'Land use zoning is used to protect important areas, particularly residential and areas of economic activity.' },
      { marks: '3', descriptor: 'Describes how the research question will help the NGO to achieve their goal (at least one factor in detail, without reasoning).', exemplar: 'Volcanic eruptions can destroy housing and infrastructure, leading to challenges with economic activity such as farming. Land use zoning is used to protect important areas, particularly residential and areas of economic activity.' },
      { marks: '4', descriptor: 'Justifies how the research question will help the NGO to achieve their goal (at least one factor in detail, with reasoning why the RQ is relevant).', exemplar: '…By investigating Iceland’s use of this strategy, I can find out how successful their land use zoning was in reducing the impacts of the 2010 volcanic eruption.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'Interviews; questionnaires.',
    keyConcepts: ['investigation', 'primary data'],
    keywords: ['interviews', 'questionnaires', 'surveys', 'primary data', 'methods'],
    feedbackHit: 'Correct — two valid methods of collecting primary data.',
    feedbackMiss: 'List two valid primary-data methods (e.g. interviews, questionnaires, surveys). Award 1 mark per method.',
    commandTerm: 'List',
    commandTermDefinition: 'Give a sequence of brief answers with no explanation.',
    blankAnswers: ['Interviews', 'Questionnaires', 'Surveys'],
  },

  q4_d: {
    marks: 4,
    exemplar:
      'A survey of people impacted would help me to count how many people know what to do because of the government’s strategies in an earthquake. It would be good to know how many people are aware of the plans to answer my research question so that I can evaluate the impact of the strategies on the community.',
    keyConcepts: ['investigation', 'usefulness', 'reasoning'],
    keywords: ['survey', 'count', 'awareness', 'strategies', 'evaluate', 'research question', 'benefit'],
    feedbackHit: 'Well done — you explained, with reasons, how one primary-data method helps your investigation.',
    feedbackMiss: 'Build from stating a benefit (1) → outlining (2) → describing one benefit in detail (3) → explaining one benefit in detail with reasons (4).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States how one of the primary data sources would help their investigation (one sentence hinting at a single benefit).', exemplar: 'A survey of people impacted would help me to count how many people know what to do in an earthquake.' },
      { marks: '2', descriptor: 'Outlines how one of the primary data sources would help their investigation (a single benefit elaborated; brief detail).', exemplar: 'A survey of people impacted would help me to count how many people know what to do because of the government’s strategies in an earthquake.' },
      { marks: '3', descriptor: 'Describes how one of the primary data sources would help their investigation (one benefit in detail, without comprehensive reasons).', exemplar: '…It would be good to know how many people are aware of the plans to answer my research question.' },
      { marks: '4', descriptor: 'Explains how one of the primary data sources would help their investigation (one benefit in detail, with reasons).', exemplar: '…so that I can evaluate the impact of the strategies on the community.' },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      'TITLE: Tourism and Culture — People Before Pictures. Positive impacts of tourism on culture: Tourism has revitalised the culture of host communities in Nepal as they display their customs and traditions for tourists. When I was in the Old Town in Kathmandu, traditional local arts and craft were celebrated. This is important because the skills required for these could have been lost without the demand from tourism. To attract tourists, they prepare traditional foods and entertain the crowd with unique performances and rituals. This empowers communities and strengthens their cultural values. Negative impacts of tourism on culture: When locals entertain tourists, they often have to adapt to tourists’ needs, attitudes and values. Ultimately this could lead to some ignoring their own culture and adopting the cultural traits of the tourists. In the Pokhara-Ghandruk community in Nepal, the traditional fashion, behaviour, and lifestyle of teenagers from mountain communities have been severely affected by tourism. The elders are totally against this and worry about the cultural change from tourism because, with the influence of tourists, young Nepalese will lose their cultural identity. Final thoughts: Traveling should always be approached from a place of respect for local communities. My mantra is: People before pictures. Be willing to miss “the shot”. Tourism has the power to preserve or destroy cultural identities — make the right choice.',
    keyConcepts: ['culture', 'globalization', 'management & intervention', 'communication'],
    keywords: ['tourism', 'culture', 'host community', 'Nepal', 'revitalised', 'cultural identity', 'blog', 'title', 'sub-headings', 'advice'],
    feedbackHit: 'Well done — a blog-style post explaining ≥1 positive and ≥1 negative cultural impact of tourism on one community, with a title, sub-headings and advice for travellers.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Explain at least one positive AND one negative cultural impact on one community, with a title, sub-headings and a concluding piece of advice, written in a blog style.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge and understanding: outlines the positive OR negative impact of tourism on local cultures, using limited examples and limited relevant terminology.', exemplar: 'Tourism has revitalised the culture of host communities in Nepal. When I was in the Old Town, traditional local arts and craft are celebrated.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge and understanding: describes the positive and negative impacts of tourism on local cultures, using satisfactory examples and appropriate relevant terminology.', exemplar: '…They display their customs and traditions for tourists… The traditional fashion, behaviour, and lifestyle of teenagers from mountain communities have been severely affected by tourism.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge and understanding: explains the positive and negative impacts of tourism on local cultures, using accurate examples and appropriate relevant terminology.', exemplar: '…This is important because the skills required for these could have been lost without demand from tourism… The elders are totally against this because, with the influence of tourists, young Nepalese will lose their cultural identity.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge and understanding: thoroughly explains the positive and negative impacts of tourism on local cultures, using accurate and effective examples and appropriate relevant terminology.', exemplar: '…To attract tourists, they prepare traditional foods and entertain the crowd with unique performances and rituals. This empowers communities and strengthens their cultural values… In the Pokhara-Ghandruk community in Nepal… The elders worry about the cultural change from tourism.' },
      { marks: 'Format 1', descriptor: 'Two of the following elements are included (as separate paragraphs): heading/title, sub-headings, advice to future travellers.' },
      { marks: 'Format 2', descriptor: 'All three elements are included (as separate paragraphs): heading/title, sub-headings, advice to future travellers.' },
      { marks: 'Communicating 1–2', descriptor: 'Style and language rarely appropriate to a blog post for an audience of tourists and a purpose of explaining (reads more formally, like an essay; basic, not engaging; may be very short).' },
      { marks: 'Communicating 3–4', descriptor: 'Style and language occasionally appropriate to a blog post (at times like an essay, at times like a blog — informal language/first person; some rhetorical questions, concise sentences and emotive vocabulary).' },
      { marks: 'Communicating 5–6', descriptor: 'Style and language consistently appropriate to a blog post throughout (informal language/first person; language features such as rhetorical questions, concise sentences and emotive vocabulary often used to engage the audience).' },
      { marks: 'Organization 1', descriptor: 'Structures information rarely effectively: ideas rarely build on each other logically; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'Structures information occasionally effectively: ideas occasionally build logically; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Structures information mainly effectively: ideas frequently build logically; often uses effective transitions.' },
      { marks: 'Organization 4', descriptor: 'Structures information consistently effectively: ideas consistently build in a clear and logical manner; always uses effective transitions to show relationships between ideas.' },
    ],
  },

  q6_a: {
    marks: 1,
    exemplar: 'Hammad and Sarhan',
    keyConcepts: ['source interpretation', 'sustainability'],
    keywords: ['Hammad', 'Sarhan', 'sustainable', 'surplus', 'water deficit', 'basins'],
    feedbackHit: 'Correct — Hammad and Sarhan are the two basins with a positive (surplus) water balance, so extraction there is sustainable.',
    feedbackMiss: 'Award 1 mark for Hammad and Sarhan — the only two basins on Source B with a positive (surplus) water balance.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose from a list or group.',
    blankAnswers: ['Hammad and Sarhan'],
  },

  q6_b: {
    marks: 1,
    exemplar: 'Allthatiswater.org',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['origin', 'allthatiswater.org', 'source B'],
    feedbackHit: 'Correct — the origin of Source B is allthatiswater.org.',
    feedbackMiss: 'Award 1 mark for Allthatiswater.org (also accept “Allthatiswater”).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Allthatiswater.org', 'Allthatiswater'],
  },

  q6_c: {
    marks: 4,
    exemplar:
      'It includes the precise location of all the basins in Jordan with data for each basin including the 2019 water deficit including the areas with water deficit and surplus. This would help the student to identify the basins where more careful management of water extraction is needed.',
    keyConcepts: ['source evaluation', 'value', 'management & intervention'],
    keywords: ['precise location', 'basins', '2019 water deficit', 'surplus', 'value', 'management of extraction'],
    feedbackHit: 'Well done — you explained one value of Source B to the student, with reasoning.',
    feedbackMiss: 'Build from stating a value (1) → outlining (2) → describing one value in detail (3) → explaining one value with reasoning (4).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States one value of Source B to an MYP student investigating groundwater extraction in Jordan (a brief statement/fact about the value of the map).', exemplar: 'There is data for each basin.' },
      { marks: '2', descriptor: 'Outlines one value of Source B to an MYP student (a brief sentence about the value of the map to a student).', exemplar: 'There is data for each basin including the 2019 water deficit.' },
      { marks: '3', descriptor: 'Describes one value of Source B to an MYP student (one value in detail; reasoning not required for ‘describe’).', exemplar: 'It includes the precise location of all the basins in Jordan with data for each basin including the 2019 water deficit and the areas with water deficit and surplus.' },
      { marks: '4', descriptor: 'Explains one value of Source B to an MYP student (one value considered with reasoning).', exemplar: '…This would help the student to identify the basins where more careful management of water extraction is needed.' },
    ],
  },

  q7_: {
    marks: 4,
    exemplar:
      'Another person might think that it is worth spending the money to provide freshwater to meet the needs of the population of Jordan. Water is essential for the health of residents and industry of Jordan. The residents can no longer rely on groundwater so the cost of desalinization plants is better than having no water.',
    keyConcepts: ['perspectives', 'power', 'management & intervention', 'sustainability'],
    keywords: ['desalinization', 'freshwater', 'population', 'health', 'industry', 'groundwater', 'alternative perspective', 'cost'],
    feedbackHit: 'Well done — you justified, with reasons, why another resident might disagree with the perspective.',
    feedbackMiss: 'Build from a statement (1) → an outline (2) → a description (3) → an explanation with a valid reason/evidence (4) for why another resident might disagree and support desalinization.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'Justifies with a statement why another resident might disagree with the perspective (one statement, no detail or justification).', exemplar: 'Another person might think that it is worth spending the money to provide freshwater.' },
      { marks: '2', descriptor: 'Justifies with an outline why another resident might disagree (a statement briefly elaborated; minor detail).', exemplar: 'Another person might think that it is worth spending the money to provide freshwater to meet the needs of the population of Jordan.' },
      { marks: '3', descriptor: 'Justifies with a description why another resident might disagree (additional detail on the alternative perspective).', exemplar: '…Water is essential for the health of residents and industry of Jordan.' },
      { marks: '4', descriptor: 'Justifies with an explanation why another resident might disagree (a valid reason or evidence for the alternative perspective).', exemplar: '…The residents can no longer rely on groundwater so the cost of desalinization plants is better than having no water.' },
    ],
  },

  q8_: {
    marks: 2,
    exemplar: 'The diagram does not show where the desalinization plants will be located, such as the distance from residents’ homes.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['limitation', 'diagram', 'location', 'desalinization plants', 'distance', 'residents'],
    feedbackHit: 'Well done — you outlined one limitation of Source C for residents.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining a limitation, elaborated (2). Focus on what the diagram does not tell a resident.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source C (a brief fact or hint about the limitation of the diagram for residents).', exemplar: 'The diagram does not show where the desalinization plants will be located.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source C (a limitation of the diagram for residents, elaborated).', exemplar: 'The diagram does not show where the desalinization plants will be located, such as the distance from residents’ homes.' },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'The sustainable extraction of resources is essential to reducing biodiversity loss, but it is not the only factor — protection and restoration matter too. On one hand, because the extraction and processing of minerals causes more than 80% of the world’s biodiversity loss, extracting resources sustainably is essential. For example, where mining companies in the Amazon use selective extraction and rehabilitate cleared land, fewer habitats are destroyed, so fewer species lose the conditions they need to survive and extinction rates fall. Reducing the area cleared and the pollution released keeps food chains intact. On the other hand, sustainable extraction alone cannot reverse biodiversity loss: demand for minerals such as cobalt for batteries keeps rising, so even “sustainable” mining still removes habitat, and other drivers — deforestation for agriculture and climate change — also threaten biodiversity. Protected areas and reforestation are therefore needed alongside it. Weighing these perspectives, the sustainable extraction of resources is essential to a large extent for reducing biodiversity loss, because extraction is the single largest driver, but it must be combined with conservation and lower consumption to be effective.',
    keyConcepts: ['sustainability', 'management & intervention', 'causality', 'globalization'],
    keywords: ['sustainable extraction', 'biodiversity loss', 'minerals', 'habitat', 'mining', 'conservation', 'perspectives', 'synthesis', 'conclusion'],
    feedbackHit: 'Well done — a structured essay weighing whether sustainable extraction is essential for reducing biodiversity loss, with ≥2 balanced perspectives, examples and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Give ≥2 perspectives (for and against), explanations with examples (e.g. extracted natural resources), geographical terms, and a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Limited contextual and conceptual understanding in an outline, using limited examples and limited terminology.' },
      { marks: 'CritA 3–4', descriptor: 'Adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology.' },
      { marks: 'CritA 5–6', descriptor: 'Substantial contextual and conceptual understanding in an explanation (reasons included), using accurate examples (e.g. extracted natural resources) and appropriate terminology used effectively in most of the essay.' },
      { marks: 'CritA 7–8', descriptor: 'Detailed contextual and conceptual understanding in a thorough explanation; references examples (e.g. extracted natural resources) in detail; accurate and effective terminology used throughout.' },
      { marks: 'Format 1', descriptor: 'Two of the following are included (as separate paragraphs): introduction, a main body of argument, a conclusion.' },
      { marks: 'Format 2', descriptor: 'All three are included (as separate paragraphs): introduction, a main body of argument and a conclusion.' },
      { marks: 'Communicating 1', descriptor: 'Style and language rarely appropriate to the audience and purpose of informing (mostly unclear; may be very short).' },
      { marks: 'Communicating 2', descriptor: 'Style and language occasionally appropriate to the audience and purpose of informing (not always consistent; may be more informal than expected in an essay; less clear in places).' },
      { marks: 'Communicating 3', descriptor: 'Style and language consistently appropriate to the audience and purpose of informing (formal and clear, consistent with what would be expected in an essay).' },
      { marks: 'Organization 1', descriptor: 'Organizational structure rarely effective (paragraphs/ideas sometimes build logically; rarely uses effective transitions; may be very short).' },
      { marks: 'Organization 2', descriptor: 'Organizational structure occasionally effective (paragraphs/ideas build in a mainly logical manner; sometimes uses effective transitions).' },
      { marks: 'Organization 3', descriptor: 'Organizational structure consistently effective (paragraphs/ideas build in a consistently clear and logical manner; uses effective transitions to show relationships between ideas).' },
      { marks: 'CritD 1–2', descriptor: 'Provides one perspective in a basic analysis and summarizes information to a limited extent (the perspective is considered only superficially; may not reach a conclusion or fully answer the question).' },
      { marks: 'CritD 3–4', descriptor: 'Provides different perspectives in an analysis and summarizes information to make clear arguments (two perspectives, developed to show some understanding; a conclusion on whether sustainable extraction is essential, likely not fully developed).' },
      { marks: 'CritD 5–6', descriptor: 'Provides different perspectives in an analysis and synthesizes information to make clear arguments (two perspectives with substantial development; ideas on whether sustainable extraction is essential included; synthesis in the body or conclusion).' },
      { marks: 'CritD 7–8', descriptor: 'Provides different perspectives in a detailed discussion and synthesizes information to make clear arguments (two perspectives equally considered/balanced with thorough development; ideas combined into a clear, coherent and convincing conclusion indicating which factor is most important).' },
    ],
  },
}
