import 'server-only'

/**
 * MYP Geography — November 2019 · VARIANT 1 mark scheme (rubric-banded, "best fit").
 *
 * Geography (I&S) answers are open-ended, so every entry carries the IB band
 * descriptors plus worked exemplar responses at each band (`rubricBands`) —
 * surfaced to the student on submission and in the downloadable exam report.
 * `exemplar` holds the top-band model answer (kept for the shared grading/results
 * consumers); the extra fields (`commandTerm`, `commandTermDefinition`,
 * `rubricBands`) are optional and ignored by consumers that don't use them.
 *
 * Construct-identical to geography-nov-2019: SAME keys and marks; the band
 * DESCRIPTORS are unchanged (the criteria don't change); only the exemplars,
 * keyConcepts/keywords and feedback are rewritten for the NEW coastal/marine scenario.
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
    exemplar: 'Renewable resources: rainwater, river flow, tidal energy. Non-renewable resources: deep fossil groundwater.',
    keyConcepts: ['natural resources', 'sustainability', 'classification'],
    keywords: ['renewable', 'non-renewable', 'rainwater', 'river flow', 'tidal energy', 'fossil groundwater', 'aquifer'],
    feedbackHit: 'Correct — all four water-related resources sorted into the right renewable / non-renewable category.',
    feedbackMiss: 'Renewable: rainwater, river flow, tidal energy. Non-renewable: deep fossil groundwater. One correct = 0; two/three correct = 1; four correct = 2.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose from a list or group. Recognize and place each item in its correct category.',
    blankAnswers: ['Rainwater — renewable', 'River flow — renewable', 'Tidal energy — renewable', 'Deep fossil groundwater — non-renewable'],
    rubricBands: [
      { marks: '0', descriptor: 'One image correctly positioned.', exemplar: 'Only one resource sorted into the correct bin.' },
      { marks: '1', descriptor: 'Two or three images correctly positioned.', exemplar: 'Rainwater and tidal energy placed under renewable; the rest misplaced.' },
      { marks: '2', descriptor: 'Four images correctly positioned.', exemplar: 'Renewable: rainwater, river flow, tidal energy. Non-renewable: deep fossil groundwater.' },
    ],
  },

  q2_: {
    marks: 4,
    exemplar:
      'Unsustainable extraction is causing the scarcity of sand. As construction booms in countries such as India, demand for sand for concrete is rising faster than rivers can replace it. This leads to dredging of riverbeds and deltas, which lowers water tables and erodes the banks, reducing the supply of usable sand and damaging the coastline.',
    keyConcepts: ['causality', 'natural resources', 'scarcity', 'sustainability'],
    keywords: ['unsustainable extraction', 'sand mining', 'demand', 'dredging', 'river beds', 'erosion', 'example'],
    feedbackHit: 'Well done — you explained one factor causing resource scarcity in detail, with reasons and a named example.',
    feedbackMiss: 'Build from stating a factor (1) → outlining with an example (2) → describing in detail (3) → explaining with reasoning and an example (4). With NO example the maximum is 3 marks.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States one factor that can cause natural resource scarcity (one sentence hinting at a single factor).', exemplar: 'Unsustainable extraction.' },
      { marks: '2', descriptor: 'Outlines one factor that can cause scarcity, using an example (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'Unsustainable extraction is causing the scarcity of sand, as demand for concrete in India puts pressure on the rivers it is dredged from.' },
      { marks: '3', descriptor: 'Describes one factor that can cause scarcity, using an example (one factor in detail, no comprehensive reasoning). Awarded to an explanation with no example.', exemplar: 'Unsustainable extraction is causing the scarcity of sand. As construction booms in fast-growing countries, demand for sand for concrete is rising. This leads to heavy dredging of riverbeds and deltas, which lowers water tables and erodes the banks.' },
      { marks: '4', descriptor: 'Explains one factor that can cause scarcity, using an example (one factor in detail, with reasoning).', exemplar: 'Unsustainable extraction is causing the scarcity of sand. As construction booms in countries such as India, demand for sand for concrete is rising faster than rivers can replace it. This leads to dredging of riverbeds and deltas, which lowers water tables and erodes the banks, reducing the supply of usable sand and damaging the coastline.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'The interviewee is a good choice as a forestry minister would have access to government data and so should be able to answer the questions fully, and the interview questions are mainly relevant because they relate to the impacts of mangrove restoration on both countries, giving specific and accurate information to help reach conclusions. However, the process of the investigation will be limited because the research question is too general — it does not refer to any specific country or coastline, or even to the Sundarbans specifically, and it does not mention a type of cooperation; if it had, the investigation could have been more focused. Overall, the investigation would allow valuable information about the mangroves to be collected from primary and secondary sources that would help the governments to cooperate, however interviewing only one official from one country could lead to biased results.',
    keyConcepts: ['investigation', 'methods', 'evaluation', 'cooperation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'interview', 'research question', 'too general', 'primary data', 'secondary data', 'bias'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal of the investigation.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s), then give an overall judgement. You need not discuss both strengths and limitations of every part of the plan.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the action plan (one sentence referring to a single strength).', exemplar: 'The interview questions are mainly relevant to the investigation.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the action plan (one strength elaborated). 3+ outlined strengths can be awarded 3.', exemplar: 'The interviewee is a good choice. The interview questions are mainly relevant to the investigation. The answers will give specific and accurate information to help reach conclusions to aid the investigation.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the action plan (one strength elaborated in additional detail with reasoning).', exemplar: 'The interviewee is a good choice as a forestry minister would have access to government data and so should be able to answer the questions fully. The interview questions are mainly relevant to the investigation because they relate to the impacts of restoration on both countries. The answers will give specific and accurate information to help reach conclusions to aid the investigation.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the action plan (one sentence referring to a single limitation).', exemplar: 'The research question is too general.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the action plan (one limitation elaborated). 3+ outlined limitations can be awarded 3.', exemplar: 'The research question is too general with no reference to any specific coastline or type of cooperation.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the action plan (one limitation elaborated in some detail with reasoning).', exemplar: 'The process of the investigation will be limited because the research question is too general. It does not refer to any specific country or coastline or even to the Sundarbans specifically. Furthermore, it does not mention a type of cooperation — if it had, the investigation could have been more focused.' },
      { marks: 'Appraisal 1', descriptor: 'Provides an overall appraisal of the action plan (a general or vague comment that could apply to any investigation, without referencing aspects to support it).', exemplar: 'Useful information was collected by the team but the investigation could have had more focus.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed overall appraisal that refers to at least one aspect of the investigation to support it (can appear anywhere in the response).', exemplar: 'The investigation would allow valuable information about the mangroves to be collected from primary and secondary sources that would help the governments to cooperate. However, interviewing only one official from one country could lead to biased results.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'To what extent is the dredging of sand from the Mekong Delta in Vietnam affecting the supply of fish?',
    keyConcepts: ['investigation', 'research question', 'natural resources'],
    keywords: ['research question', 'clear', 'focused', 'location', 'statement of inquiry', 'extraction'],
    feedbackHit: 'Well done — a research question that is both clear and focused (it names a place) and clearly connected to the statement of inquiry.',
    feedbackMiss: 'A clear and/or focused RQ with a limited connection to the SoI scores 1; one that is BOTH clear AND focused (e.g. specifies a location/time period) with a clear connection to the SoI scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'Formulates a research question that is clear and/or focused, with a limited connection to the statement of inquiry (e.g. clear and connected, but lacking focus — no location/time period).', exemplar: 'To what extent is the extraction of sand from rivers affecting marine life?' },
      { marks: '2', descriptor: 'Formulates a research question that is clear and focused with a clear connection to the statement of inquiry (the RQ focuses on a place).', exemplar: 'To what extent is the dredging of sand from the Mekong Delta in Vietnam affecting the supply of fish?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'My research question refers to the extraction of a natural resource, sand, in a particular location (the Mekong Delta). This type of economic activity causes erosion of the riverbed and banks, which threatens the supply of fish and affects communities living on and around the delta. It could also lead to the collapse of farmland into the river, affecting the delta ecosystem.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['relevance', 'extraction', 'erosion', 'communities', 'fish', 'delta ecosystem', 'statement of inquiry'],
    feedbackHit: 'Well done — you justified, with reasoning, why the research question is relevant to the statement of inquiry.',
    feedbackMiss: 'Build from stating the relevance (1) → outlining with brief detail (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is relevant to the SoI (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States the relevance of the research question to the SoI (a single sentence making a simple connection; no detail required).', exemplar: 'My research question refers to the extraction of sand from the Mekong Delta.' },
      { marks: '2', descriptor: 'Outlines the relevance of the RQ to the SoI (a single factor or brief detail on why the RQ is relevant).', exemplar: 'My research question refers to the extraction of sand from the Mekong Delta. This causes erosion, which affects communities living on and around the delta.' },
      { marks: '3', descriptor: 'Describes the relevance of the RQ to the SoI (at least one argument/factor in detail, without reasoning).', exemplar: 'My research question refers to the extraction of a natural resource, sand, in a particular location (the Mekong Delta). This type of economic activity causes erosion of the riverbed and banks, which threatens the supply of fish and affects communities living on and around the delta.' },
      { marks: '4', descriptor: 'Justifies the relevance of the RQ to the SoI (at least one argument/factor in detail, along with reasoning).', exemplar: 'My research question refers to the extraction of a natural resource, sand, in a particular location (the Mekong Delta). This type of economic activity causes erosion of the riverbed and banks, which threatens the supply of fish and affects communities living on and around the delta. It could also lead to the collapse of farmland into the river, affecting the delta ecosystem.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'Interviews; library/internet research.',
    keyConcepts: ['investigation', 'methods', 'data collection'],
    keywords: ['interviews', 'questionnaire', 'survey', 'library research', 'internet research', 'methods'],
    feedbackHit: 'Well done — two relevant methods for collecting information/data.',
    feedbackMiss: 'List two valid methods (e.g. interviews; questionnaire/survey; library/internet research). 1 mark per relevant method, up to 2.',
    commandTerm: 'List',
    commandTermDefinition: 'Give a sequence of brief answers with no explanation.',
    blankAnswers: ['Interviews', 'Questionnaire/survey', 'Library/internet research'],
  },

  q4_d: {
    marks: 2,
    exemplar:
      'The video interview will provide me with primary data from an expert who would know about the impacts of sand extraction on human and natural environments.',
    keyConcepts: ['investigation', 'methods', 'usefulness'],
    keywords: ['video interview', 'primary data', 'expert', 'extraction', 'human and natural environments'],
    feedbackHit: 'Well done — you outlined, with brief detail, how the chosen method is useful to your investigation.',
    feedbackMiss: 'Build from stating that the method is useful (1) → outlining its usefulness with brief detail (2).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States how the chosen method would be useful to their investigation (a statement/fact about usefulness).', exemplar: 'The video interview will provide me with primary data from an expert.' },
      { marks: '2', descriptor: 'Outlines how the chosen method would be useful (elaborates on the usefulness with some brief detail).', exemplar: 'The video interview will provide me with primary data from an expert who would know about the impacts of sand extraction on human and natural environments.' },
    ],
  },

  q4_e: {
    marks: 2,
    exemplar:
      'I might not be able to find reliable data on the impact of sand dredging on the Mekong Delta because mining operators and governments may not always publish it.',
    keyConcepts: ['investigation', 'methods', 'reliability'],
    keywords: ['challenge', 'reliable data', 'sand dredging', 'operators', 'governments', 'may not publish'],
    feedbackHit: 'Well done — you outlined, with brief detail, one challenge you might face when collecting data.',
    feedbackMiss: 'Build from stating a challenge (1) → outlining it with brief detail (2), e.g. unreliable data because operators may not publish it.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States one challenge that would be faced while collecting the data (basic information about a possible challenge).', exemplar: 'I might not be able to find reliable data.' },
      { marks: '2', descriptor: 'Outlines one challenge they may face while collecting information/data (elaborates on the challenge with some brief detail).', exemplar: 'I might not be able to find reliable data on the impact of sand dredging on the Mekong Delta because mining operators and governments may not always publish it.' },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  q5_: {
    marks: 18,
    exemplar:
      'TITLE: “Stop choking our rivers and seas with plastic!” CAPTION: “Our rivers are carrying plastic to the ocean — sign now to protect marine life for future generations.” As overconsumption of single-use plastic continues to grow there is an increasing need to ensure waste is managed sustainably. People won’t stop using products — they are only consuming more, as they have more money and convenience. For that reason, there needs to be more control over single-use plastic to ensure that the health of delicate marine environments is preserved. For example, in Indonesia, marine reserves and beach clean-ups have been set up to protect biodiversity; whilst they do not stop all pollution, they do limit the plastic reaching coral reefs and mangroves. Some argue that bans are essential — Kenya banned single-use plastic bags in 2017, with heavy fines, to allow ecosystems to recover. In India, there have been efforts to involve local communities in river clean-ups and to charge producers for the waste they create, reducing the pressure on rivers like the Ganges; involving locals ensures their needs are included and encourages them to support the efforts in the long term.',
    keyConcepts: ['globalization', 'sustainability', 'management & intervention', 'communication'],
    keywords: ['plastic pollution', 'single-use plastic', 'sustainable', 'Indonesia', 'marine reserve', 'Kenya plastic ban', 'India', 'Ganges', 'petition', 'title', 'caption', 'persuasive'],
    feedbackHit: 'Well done — a titled, captioned petition plus a persuasive TV interview explaining how plastic pollution threatens natural environments and how it can be managed sustainably, with examples.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Write an appropriate title AND a caption, explain plastic-pollution threats and sustainable management with named examples, and write persuasively for the general public.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: 'CritA 1', descriptor: 'Limited knowledge: outlines how natural environments threatened by plastic pollution can be managed sustainably, using limited examples and limited relevant terminology (brief, little detail).', exemplar: 'Some argue that single-use plastic should be controlled by the governments of countries with polluted rivers like the Ganges in India.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge: describes how natural environments threatened by plastic pollution can be managed sustainably, using satisfactory examples and appropriate relevant terminology (little or no reasoning).', exemplar: 'There needs to be more control over single-use plastic to ensure that the beauty of delicate marine environments is preserved. For example, in Indonesia, beach clean-ups and marine reserves limit the plastic reaching coral reefs. In India, there have been efforts to involve local communities in river clean-ups to reduce the pressure on rivers like the Ganges.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains how natural environments threatened by plastic pollution can be managed sustainably, using accurate examples and appropriate relevant terminology (detailed, logical, some reasoning).', exemplar: 'As overconsumption of plastic continues to grow there is an increasing need to ensure waste is managed sustainably. People won’t stop consuming, they are only consuming more. For that reason there needs to be more control over single-use plastic. For example, in Indonesia, marine reserves limit the plastic reaching reefs; whilst they do not stop all pollution, they reduce the damage. Involving locals will encourage them to support the efforts.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains how natural environments threatened by plastic pollution can be managed sustainably, using accurate and effective examples and appropriate relevant terminology (clear reasoning, comprehensive understanding).', exemplar: 'For example, in Indonesia marine reserves and beach clean-ups protect biodiversity. Some argue bans are essential — Kenya banned single-use plastic bags in 2017, with heavy fines, to allow ecosystems to recover. In India, efforts to involve local communities in river clean-ups, and to charge producers for the waste they create, reduce the pressure on rivers like the Ganges, ensure their needs are included and encourage them to support the efforts in the long term.' },
      { marks: 'Format 1', descriptor: 'One of the following is included: an appropriate title for the petition; an appropriate caption for the chosen image.' },
      { marks: 'Format 2', descriptor: 'Two of the following are included: an appropriate title for the petition; an appropriate caption for the chosen image.' },
      { marks: 'Communicating 1–2', descriptor: 'Style/language rarely appropriate to the format of a petition (a formal written request using persuasive language); the text rarely engages the reader, language may be unclear, persuasive language rarely used.' },
      { marks: 'Communicating 3–4', descriptor: 'Style/language occasionally appropriate to the format of a petition; the text occasionally engages the reader, language mainly clear and appropriate, persuasive language mainly used.' },
      { marks: 'Communicating 5–6', descriptor: 'Style/language consistently appropriate to the format of a petition; the text engages the reader, language is clear and concise, persuasive language used throughout.' },
      { marks: 'Organization 1', descriptor: 'Structures information and ideas in a way that is rarely effective and appropriate to the audience of the general public; ideas/paragraphs rarely build logically; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'Structures information and ideas in a way that is occasionally effective and appropriate to the general public; ideas/paragraphs occasionally build logically; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Structures information and ideas in a way that is mainly effective and appropriate to the general public; ideas/paragraphs frequently build logically; often uses effective transitions.' },
      { marks: 'Organization 4', descriptor: 'Structures information and ideas in a way that is consistently effective and appropriate to the general public; ideas/paragraphs build in a consistently clear and logical manner; always uses effective transitions.' },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  q6_: {
    marks: 2,
    exemplar: 'It has decreased from 198,420 to 84,260.',
    keyConcepts: ['interpretation', 'trends', 'natural disasters'],
    keywords: ['trend', 'decreased', 'deaths', 'data', '198,420', '84,260'],
    feedbackHit: 'Well done — you outlined the trend (deaths decreased) and referenced data from the table.',
    feedbackMiss: 'Build from stating the trend, e.g. “It has decreased” (1) → outlining the trend with reference to data, e.g. “decreased from 198,420 to 84,260” (2).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States the trend (a statement about the number of deaths decreasing).', exemplar: 'It has decreased.' },
      { marks: '2', descriptor: 'Outlines the trend with reference to data in the graph.', exemplar: 'It has decreased from 198,420 to 84,260.' },
    ],
  },

  q7_: {
    marks: 4,
    exemplar:
      'Risk is calculated from both natural hazard factors and vulnerability. The magnitude of a hazard would normally increase the risk, if the area is densely populated. Even with a great magnitude, the risk can be reduced with effective management. When events happen frequently, the population may be better prepared except when it is an event of extremely high magnitude.',
    keyConcepts: ['causality', 'risk', 'vulnerability', 'management & intervention'],
    keywords: ['risk', 'magnitude', 'frequency', 'vulnerability', 'population density', 'management strategies', 'preparedness'],
    feedbackHit: 'Well done — you described in detail how natural hazard factors and vulnerability combine to determine risk.',
    feedbackMiss: 'Build from stating the relationship (1) → outlining it (2) → describing the relationship (3) → describing it in detail (4). Reasons are not required; an example may support the description.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account or picture of a situation, event, pattern or process.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States the relationship between natural disaster factors and vulnerability (one sentence hinting at a single factor).', exemplar: 'The magnitude of a hazard would increase the risk but only if the area is densely populated.' },
      { marks: '2', descriptor: 'Outlines the relationship between natural disaster factors and vulnerability (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'Risk is calculated from both natural hazard factors and vulnerability. The magnitude of a hazard would increase the risk but only if the area is densely populated.' },
      { marks: '3', descriptor: 'Describes the relationship (considered without reasons; an example may support the description; a short paragraph).', exemplar: 'Risk is calculated from both natural hazard factors and vulnerability. The magnitude of a hazard would normally increase the risk but only if the area is densely populated. Despite a great magnitude, the risk can be reduced with effective management.' },
      { marks: '4', descriptor: 'Describes in detail the relationship between natural disaster factors and vulnerability (considered in detail; reasons not required; an example may support).', exemplar: 'Risk is calculated from both natural hazard factors and vulnerability. The magnitude of a hazard would normally increase the risk, if the area is densely populated. Even with a great magnitude, the risk can be reduced with effective management. When events happen frequently, the population may be better prepared except when it is an event of extremely high magnitude.' },
    ],
  },

  q8_a: {
    marks: 3,
    exemplar:
      'The information given in the app provides satellite images, maps and photographs, so it is easy for users to assess the danger and decide what to do. The satellite image will help to assess where the flood might spread to next, and the app will allow local residents to see where the floods are located by looking at the map feature so they can decide if they should evacuate their home and move to higher ground. They will be able to make a judgement as to how at risk they are and decide on the appropriate action.',
    keyConcepts: ['source evaluation', 'value', 'management & intervention'],
    keywords: ['satellite images', 'maps', 'photographs', 'assess danger', 'evacuate', 'higher ground', 'local residents'],
    feedbackHit: 'Well done — you described one value of the FloodWatch app for local residents in detail.',
    feedbackMiss: 'Build from stating a value (1) → outlining it (2) → describing one value in detail (3). Only one benefit need be considered in detail.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account or picture of a situation, event, pattern or process.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States one value of the FloodWatch app for local residents.', exemplar: 'The information given in the app is easy to read and understand.' },
      { marks: '2', descriptor: 'Outlines one value of the FloodWatch app for local residents (one benefit elaborated; brief detail).', exemplar: 'The information given in the app is easy to read and understand as it provides satellite information, maps and photographs.' },
      { marks: '3', descriptor: 'Describes one value of the FloodWatch app for local residents (one benefit considered in detail; a short paragraph).', exemplar: 'The information given in the app provides satellite images, maps and photographs, so it is easy for users to assess the danger and decide what to do. The satellite image will help to assess where the flood might spread to next. The app will allow local residents to see where the floods are located so they can decide if they should evacuate their home and move to higher ground, making a judgement as to how at risk they are.' },
    ],
  },

  q8_b: {
    marks: 3,
    exemplar:
      'The app is limited in terms of the information it provides. It does not tell the user about water depth or the speed of the rising water and therefore the direction the flood is spreading in or how fast, so local residents will not know if they are at risk.',
    keyConcepts: ['source evaluation', 'limitation', 'management & intervention'],
    keywords: ['limitation', 'water depth', 'speed of rising water', 'direction flood is spreading', 'at risk', 'local residents'],
    feedbackHit: 'Well done — you described one limitation of the FloodWatch app for local residents in detail.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining it (2) → describing one limitation in detail (3), e.g. it does not show water depth/speed so residents cannot tell how fast the flood is rising.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account or picture of a situation, event, pattern or process.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of the FloodWatch app for local residents.', exemplar: 'It does not tell local residents whether or not they are at risk.' },
      { marks: '2', descriptor: 'Outlines one limitation of the FloodWatch app for local residents (one limitation elaborated; brief detail).', exemplar: 'The app is limited in terms of the information it provides. It does not tell the user the speed of the rising water so local residents will not know if they are at risk.' },
      { marks: '3', descriptor: 'Describes one limitation of the FloodWatch app for local residents (one limitation considered in detail; a short paragraph).', exemplar: 'The app is limited in terms of the information it provides. It does not tell the user about water depth or the speed of the rising water and therefore the direction the flood is spreading in or how fast, so local residents will not know if they are at risk.' },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'HICs have access to technology, which can reduce the impacts of natural disasters. However, other factors also have an effect on the outcome. Seismometers can be used to predict tectonic events; in Japan, this information is used to send text alerts to enable people to move to areas of safety, and improvements in technology in infrastructure, such as shock absorbers, prevent the collapse of buildings and help reduce casualties and economic costs. Robots and drones are able to deliver aid to inaccessible areas and are used for search and rescue operations to find missing people, which can speed up response time and save lives. However, although the USA is a HIC, Hurricane Katrina in 2005 had devastating impacts despite early warning systems — New Orleans did not have the socio-economic power to respond or evacuate, so over 25,000 people were forced to seek shelter in the Superdome stadium. This proves that even within HICs, not everyone has the same access to the technology or infrastructure that can reduce the impacts of natural disasters. Some would argue education is more important than technology because without it people are not prepared to take the appropriate action; while seismometers can predict an earthquake, if people have not been told how to respond, such as in California where they are told to ‘duck, cover and hold’, there will still be unnecessary casualties. Therefore, technology can reduce the impacts but it is not the only method — it is most effective when used with other techniques.',
    keyConcepts: ['causality', 'management & intervention', 'disparity & equity', 'sustainability', 'synthesis'],
    keywords: ['technology', 'HICs', 'natural disasters', 'seismometers', 'Japan text alerts', 'shock absorbers', 'robots', 'drones', 'Hurricane Katrina', 'education', 'duck cover and hold', 'perspectives', 'conclusion'],
    feedbackHit: 'Well done — a structured essay weighing how far technology has reduced disaster impacts in HICs, with ≥2 perspectives, named examples and a clear conclusion answering “to what extent”.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Give ≥2 perspectives/factors, named examples from your MYP studies, geographical terms, and a clear conclusion on the extent to which technology has reduced impacts.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: 'CritA 1–2', descriptor: 'Limited contextual and conceptual understanding in an outline, using limited examples and limited relevant terminology.', exemplar: 'HICs have access to technology, which can reduce the impacts of natural disasters. Tectonic events can be predicted. In Japan, text alerts enable people to move to areas of safety. Improvements in technology in infrastructure prevent the collapse of buildings. Therefore, technology can reduce the impacts of natural disasters.' },
      { marks: 'CritA 3–4', descriptor: 'Adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate relevant terminology.', exemplar: 'In Japan, text alerts enable people to move to areas of safety. Improvements in infrastructure, such as shock absorbers, prevent the collapse of buildings. Robots and drones are able to deliver aid to inaccessible areas and are used for search and rescue operations. However, although the USA is a HIC, Hurricane Katrina in 2005 had devastating impacts despite early warning systems.' },
      { marks: 'CritA 5–6', descriptor: 'Substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate relevant terminology.', exemplar: 'Seismometers can be used to predict tectonic events; in Japan this information is used to send text alerts. Improvements in infrastructure, such as shock absorbers, prevent the collapse of buildings. Hurricane Katrina in 2005 had devastating impacts despite early warning systems — New Orleans did not have the socio-economic power to respond or evacuate. Some would argue education is more important than technology, e.g. in California they are told to ‘duck, cover and hold’.' },
      { marks: 'CritA 7–8', descriptor: 'Detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate relevant terminology.', exemplar: 'Improvements in infrastructure, such as shock absorbers, prevent the collapse of buildings and help reduce casualties and economic costs. Robots and drones deliver aid to inaccessible areas and are used for search and rescue, speeding up response time. Over 25,000 people were forced to seek shelter in the Superdome stadium after Hurricane Katrina — proving that even within HICs, not everyone has the same access to technology or infrastructure.' },
      { marks: 'Format 1', descriptor: 'Two of the following elements are included as separate paragraphs: introduction, a main body of argument, a conclusion.' },
      { marks: 'Format 2', descriptor: 'Three of the following elements are included as separate paragraphs: introduction, a main body of argument, a conclusion.' },
      { marks: 'Communicating 1', descriptor: 'Style/language rarely appropriate to the audience and purpose of informing; rarely consistent with what would be expected in an essay.' },
      { marks: 'Communicating 2', descriptor: 'Style/language occasionally appropriate to the audience and purpose of informing; not always consistent with an essay (may be informal, e.g. colloquialisms or first person).' },
      { marks: 'Communicating 3', descriptor: 'Style/language consistently appropriate to the audience and purpose of informing; consistent with an essay (e.g. third person), formal and clear throughout.' },
      { marks: 'Organization 1', descriptor: 'The organizational structure is rarely effective; rarely uses effective transitions within or between sentences and/or paragraphs to show relationships between ideas.' },
      { marks: 'Organization 2', descriptor: 'The organizational structure is occasionally effective; paragraphs/ideas build in a mainly logical manner; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'The organizational structure is consistently effective; paragraphs and ideas build in a consistently clear and logical manner; uses effective transitions.' },
      { marks: 'CritD 0', descriptor: 'The student does not achieve a standard described by the descriptors below.' },
      { marks: 'CritD 1–2', descriptor: 'Provides one perspective in a basic analysis that summarizes information to a limited extent in response to the question.' },
      { marks: 'CritD 3–4', descriptor: 'Provides different perspectives in an analysis and summarizes information to make clear arguments in response to the question.' },
      { marks: 'CritD 5–6', descriptor: 'Provides different perspectives in a discussion and synthesizes information to make clear arguments in response to the question.' },
      { marks: 'CritD 7–8', descriptor: 'Provides different perspectives in a detailed discussion that synthesizes information to make clear arguments in response to the question.' },
    ],
  },
}
