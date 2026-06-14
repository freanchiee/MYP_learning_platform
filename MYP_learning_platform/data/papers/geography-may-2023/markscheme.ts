import 'server-only'

/**
 * MYP Geography — May 2023 mark scheme (rubric-banded, "best fit").
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
 *
 * Σ MSEntry.marks = 80 (= totalMarks): 1+1+4+8+2+4+2+4+18+1+1+2+2+6+24.
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
  // ── Task 1 — Investigating ──────────────────────────────────────────────
  q1_a: {
    marks: 1,
    exemplar: '170%',
    keyConcepts: ['climate change', 'patterns & trends'],
    keywords: ['flood risk', '170%', '2°C', 'increase', 'extreme weather'],
    feedbackHit: 'Correct — Source A shows a 170% increase in flood risk at a 2°C increase.',
    feedbackMiss: 'Read the flood-risk (extreme weather) figure for a 2°C increase off Source A: 170%.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['170%'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'True',
    keyConcepts: ['biodiversity', 'systems'],
    keywords: ['biodiversity', 'plants', 'animals', 'bacteria', 'fungi', 'true'],
    feedbackHit: 'Correct — biodiversity includes plants, animals, bacteria and fungi, so the statement is true.',
    feedbackMiss: 'The statement is true: biodiversity is the measure of all living things, including plants, animals, bacteria and fungi.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose from a list or group.',
    blankAnswers: ['True'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'Coral bleaching is caused by an increase in sea temperature. In warmer water the algae that lives on the coral leaves it. The algae is the food source for the coral and as there is no food source the coral turns white, weakens and can die.',
    keyConcepts: ['causality', 'climate change', 'geographic processes'],
    keywords: ['coral bleaching', 'sea temperature', 'algae', 'food source', 'cause', 'extreme weather', 'sea level rise', 'heat waves'],
    feedbackHit: 'Well done — you explained one cause of your chosen impact in detail, with reasons.',
    feedbackMiss: 'Build from stating a cause (1) → outlining (2) → describing in detail (3) → explaining one cause with reasons (4). An example may support but is not essential.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by the descriptors below.' },
      { marks: '1', descriptor: 'The student states one cause of their chosen impact (likely one sentence that hints at a single cause).', exemplar: 'Coral bleaching is caused by an increase in sea temperature.' },
      { marks: '2', descriptor: 'The student outlines one cause of their chosen impact (a single elaborated sentence or two short sentences; brief detail).', exemplar: 'Coral bleaching is caused by an increase in sea temperature. In warmer water the algae that lives on the coral leaves it.' },
      { marks: '3', descriptor: 'The student describes one cause in detail without comprehensive reasons (a short paragraph; an example may support).', exemplar: 'Coral bleaching is caused by an increase in sea temperature. In warmer water the algae that lives on the coral leaves it. The algae is the food source for the coral.' },
      { marks: '4', descriptor: 'The student explains one cause in detail, with reasons. An example may be given but is not essential.', exemplar: '…The algae is the food source for the coral and as there is no food source the coral turns white, weakens and can die.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'The proposed water plaza will stop flooding. With excess water stored in the three sunken reservoirs of the plaza, it will keep the people in the surrounding areas safe, so the flood risk will be managed and the goal of the investigation is met. However, not all stakeholders were consulted — the urban planner did not talk to businesses in the area, which might mean the plan does not go ahead. Overall, the investigation is done well: the outcome meets the goal even with the limited number of stakeholders spoken to.',
    keyConcepts: ['investigation', 'methods', 'management & intervention', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'water plaza', 'flood risk', 'stakeholders', 'reservoirs', 'methodology', 'outcome'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the investigation and gave an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Strengths and weaknesses can include the planning, methodology and outcome; suggesting alternative methods counts as addressing limitations.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States a strength of the investigation (one sentence referring to a single strength).', exemplar: 'The proposed water plaza will stop flooding.' },
      { marks: 'Strengths 2', descriptor: 'Outlines a strength, elaborated (a single sentence with two clauses or two/three short sentences). Outlining 3+ strengths can be awarded 3.', exemplar: 'The proposed water plaza will stop flooding and keep the people in the surrounding areas safe.' },
      { marks: 'Strengths 3', descriptor: 'Explains a strength, elaborated with reasoning. Quality is rewarded, not the number of strengths.', exemplar: 'The proposed water plaza will stop flooding. With excess water stored in the three sunken areas of the plaza it will keep the people in the surrounding areas safe. Therefore flood risk will be managed and the goal of the investigation is met.' },
      { marks: 'Limitations 1', descriptor: 'States a limitation of the investigation (one sentence referring to a single limitation).', exemplar: 'Not all stakeholders were consulted.' },
      { marks: 'Limitations 2', descriptor: 'Outlines a limitation, elaborated. Outlining 3+ limitations can be awarded 3. Suggesting alternative methods counts as addressing limitations.', exemplar: 'Not all stakeholders were consulted. The urban planner did not talk to businesses in the area.' },
      { marks: 'Limitations 3', descriptor: 'Explains a limitation, elaborated with reasoning.', exemplar: '…Not consulting businesses might mean that the plan does not go ahead.' },
      { marks: 'Appraisal 1', descriptor: 'Provides an overall appraisal of the investigation — a general or vague comment that could apply to any investigation, without referencing aspects of it.', exemplar: 'Overall, the investigation is done well.' },
      { marks: 'Appraisal 2', descriptor: 'Provides a detailed overall appraisal that refers to at least one aspect of the investigation to support it (anywhere in the response).', exemplar: 'Overall, the investigation is done well. The outcome meets the goal even with the limited number of stakeholders spoken to.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How successful are flood barriers in Tuvalu in protecting against sea level rise?',
    keyConcepts: ['investigation', 'research question', 'climate change'],
    keywords: ['research question', 'clear', 'focused', 'statement of inquiry', 'place', 'impact', 'flood barriers'],
    feedbackHit: 'Well done — a research question that is both clear and focused and connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ connected to the SoI scores 1; one that is BOTH clear AND focused (e.g. specifies a place and an impact of climate change) scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry. (Clear = the intention is understandable.)', exemplar: 'How successful are flood barriers in Tuvalu? (clear and connected, but lacks focus — does not specify what the flood barriers are for)' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry (focuses on a place and an impact of climate change).', exemplar: 'How successful are flood barriers in Tuvalu in protecting against sea level rise?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Tuvalu is a low-lying atoll and is experiencing sea-level rise. Flood barriers are used on the coast of the island. Investigating the effectiveness of flood barriers will help the local government to know how they can keep people safe.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['worthy of investigating', 'low-lying', 'sea-level rise', 'flood barriers', 'keep people safe', 'reasons'],
    feedbackHit: 'Well done — you justified, with reasoning, why your research question is worthy of investigation.',
    feedbackMiss: 'Build from stating a simple reason (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is worthy of investigating (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States why the research question is worthy of investigating (a single simple reason).', exemplar: 'Tuvalu is experiencing sea-level rise.' },
      { marks: '2', descriptor: 'Outlines why the research question is worthy of investigating (a single sentence with two clauses or two/three short sentences; brief detail).', exemplar: 'Tuvalu is a low-lying island and is experiencing sea-level rise.' },
      { marks: '3', descriptor: 'Describes why the RQ is worthy of investigating — at least one factor considered in detail, without full reasoning (a short paragraph).', exemplar: 'Tuvalu is a low-lying atoll and is experiencing sea-level rise. Flood barriers are used on the coast to protect the island.' },
      { marks: '4', descriptor: 'Justifies how the research question is worthy of investigating — at least one factor in detail, with reasoning.', exemplar: '…Investigating the effectiveness of flood barriers will help the local government to know how they can keep people safe.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'Language barriers. I might not be able to collect all the data in the languages I do speak.',
    keyConcepts: ['investigation', 'methods'],
    keywords: ['challenge', 'language barriers', 'data collection', 'access', 'time'],
    feedbackHit: 'Well done — you outlined one challenge you might experience, with brief supporting detail.',
    feedbackMiss: 'State a challenge (1), then outline it (2) — elaborate on the single challenge with brief detail on how it would affect your investigation.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one challenge they might face when completing the investigation (one sentence hinting at a single challenge).', exemplar: 'Language barriers.' },
      { marks: '2', descriptor: 'Outlines one challenge — a single sentence with a single challenge that is elaborated on; the detail provided will be brief.', exemplar: 'Language barriers. I might not be able to collect all the data in the languages I do speak.' },
    ],
  },

  q4_d: {
    marks: 4,
    exemplar:
      'Topographic maps will help me to see the low-lying areas at risk from sea level rise, the relief of the land and the location of settlements. I could use this information to determine if the flood barriers are successful.',
    keyConcepts: ['sources', 'usefulness', 'reasoning'],
    keywords: ['topographic maps', 'low-lying areas', 'relief', 'settlements', 'beneficial', 'flood barriers', 'reasons'],
    feedbackHit: 'Well done — you explained, with reasons, how your chosen source would be beneficial to your investigation.',
    feedbackMiss: 'Build from stating how the source helps (1) → outlining (2) → describing a benefit in detail (3) → explaining with reasons (4). If you select a different source to the one you explain, the response is marked in line with the mark-scheme.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States how the chosen source would be beneficial to the investigation (one sentence hinting at a single benefit).', exemplar: 'Topographic maps will help me to see the low-lying areas.' },
      { marks: '2', descriptor: 'Outlines how the chosen source would be beneficial — a single elaborated benefit; brief detail.', exemplar: 'Topographic maps will help me to see the low-lying areas at risk from sea level rise.' },
      { marks: '3', descriptor: 'Describes how the chosen source helps, in detail, without comprehensive reasons. An example may support.', exemplar: 'Topographic maps will help me to see the low-lying areas at risk from sea level rise, the relief of the land and the location of settlements.' },
      { marks: '4', descriptor: 'Explains how the chosen source helps, in detail with reasons. An example may support but is not essential.', exemplar: '…I could use this information to determine if the flood barriers are successful.' },
    ],
  },

  // ── Task 2 — Communicating ──────────────────────────────────────────────
  q5_: {
    marks: 18,
    exemplar:
      'SUBJECT: GIS for managing tectonic hazards in Tonga — strengths and limitations. Dear Ministry of Disaster Response, Thank you for your email about the December 2021 to January 2022 eruption. GIS uses data from satellite images and digital elevation models to help to identify hazard zones surrounding a volcano based on the topography and land use. This helps to identify risks from a volcanic eruption by creating layers to identify areas of vulnerability on a map. This can be used to plan the evacuations of residents in the most high-risk areas, and the measuring tool allows you to accurately measure the land elevation and distance from volcanoes to critical infrastructure such as the hospitals and water storage on your map of Nuku’alofa. However, GIS is expensive, and the recent volcanic eruption dealt a devastating blow to the economy. Therefore, it is not realistic to expect the government to invest in GIS now when you need to focus on recovery, as the eruption caused US$43.7 million worth of damage and 85 000 people were affected. Yours sincerely, SpatialCode.',
    keyConcepts: ['systems', 'networks', 'management & intervention', 'communication'],
    keywords: ['GIS', 'layers', 'hazard zones', 'vulnerability', 'evacuation', 'satellite images', 'digital elevation models', 'expensive', 'strength', 'limitation', 'email', 'subject title'],
    feedbackHit: 'Well done — a formal email explaining ≥1 strength and ≥1 limitation of GIS for Tonga, with a subject title, salutation and close.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. If you refer only to strengths OR only to limitations, Crit A is capped at 3 marks.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge and understanding: outlines at least one strength and/or limitation of using GIS to manage tectonic events in Tonga, using limited examples and limited relevant terminology.', exemplar: 'GIS helps to identify risks from a volcanic eruption but it is expensive.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge and understanding: describes, using satisfactory examples and appropriate relevant terminology. (Best-fit: a described strength + an outlined limitation can reach 3.)', exemplar: 'GIS helps to identify risks from a volcanic eruption by creating layers to identify areas of vulnerability on a map. This can be used to plan the evacuations of residents in the most high-risk areas. However, it is expensive and the recent eruption dealt a devastating blow to the economy.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains at least one strength and at least one limitation, using accurate examples and appropriate relevant terminology.', exemplar: '…The measuring tool allows you to accurately measure the land elevation and distance from volcanoes to critical infrastructure. However, it is expensive… therefore there might not be money available.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains the role of GIS in reducing the impacts, using accurate and effective descriptions/explanations and relevant terminology; comprehensive understanding with clear reasoning and examples.', exemplar: 'GIS uses data from satellite images and digital elevation models to help identify hazard zones surrounding a volcano based on the topography and land use… However, it is not realistic to expect the government to invest in GIS now when they need to focus on recovery, as the volcano caused US$43.7 million worth of damage and 85 000 people were affected.' },
      { marks: 'Format 1', descriptor: 'Two of: an appropriate subject title; a salutation for the recipient (e.g. Dear Ministry of Disaster Response); a complimentary close (e.g. Yours sincerely).' },
      { marks: 'Format 2', descriptor: 'All three: an appropriate subject title; a salutation for the recipient; a complimentary close.' },
      { marks: 'Communicating 1–2', descriptor: 'Style/language rarely appropriate to a formal email for the Ministry of Disaster Response; basic/simple, rarely appropriate for the audience; may be too short to award higher.' },
      { marks: 'Communicating 3–4', descriptor: 'Style/language occasionally appropriate to a formal email; reads at times like an essay (an email written more like an essay is likely 3); some features such as clear sentences and first person.' },
      { marks: 'Communicating 5–6', descriptor: 'Style/language consistently appropriate to a formal email throughout, referring to the email received; clear sentences and first person often used; language clear and completely appropriate.' },
      { marks: 'Organization 1', descriptor: 'Information/ideas rarely build on each other logically; rarely uses effective transitions; may be too short.' },
      { marks: 'Organization 2', descriptor: 'Information/ideas occasionally build logically; sometimes uses effective transitions between sentences/paragraphs.' },
      { marks: 'Organization 3', descriptor: 'Information/ideas mainly build logically; often uses effective transitions to show relationships between ideas.' },
      { marks: 'Organization 4', descriptor: 'Information/ideas consistently build in a clear and logical manner; always uses effective transitions to show relationships between ideas.' },
    ],
  },

  // ── Task 3 — Thinking critically ────────────────────────────────────────
  q6_a: {
    marks: 1,
    exemplar: 'Galapagos Daily (www.galapagosdaily.com).',
    keyConcepts: ['source evaluation', 'origin'],
    keywords: ['origin', 'Galapagos Daily', 'galapagosdaily.com', 'video', 'news website'],
    feedbackHit: 'Correct — the origin of the video is Galapagos Daily (www.galapagosdaily.com).',
    feedbackMiss: 'State who made/published the video: Galapagos Daily / www.galapagosdaily.com.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['www.galapagosdaily.com', 'Galapagos Daily'],
  },

  q6_b: {
    marks: 1,
    exemplar: 'To educate people about tourism on the Galapagos Islands.',
    keyConcepts: ['source evaluation', 'purpose'],
    keywords: ['purpose', 'educate', 'tourism', 'impact', 'Galapagos Islands'],
    feedbackHit: 'Correct — the purpose is to educate people about (the impact of) tourism on the Galápagos Islands.',
    feedbackMiss: 'State the purpose, e.g. to educate people about tourism on the Galápagos Islands, or to show how tourism is impacting the islands. Accept any valid response.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['To educate people about tourism on the Galapagos Islands.', 'To show people how tourism is impacting the islands.'],
  },

  q6_c: {
    marks: 2,
    exemplar: 'The source provides data about tourism making it reliable.',
    keyConcepts: ['source evaluation', 'value'],
    keywords: ['value', 'data', 'tourism', 'reliable', 'presentation'],
    feedbackHit: 'Well done — you outlined one value of the video for the student’s presentation.',
    feedbackMiss: 'State a value (1), then outline it (2) — elaborate on one value (e.g. it provides data about tourism, making it reliable).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one value of the video (quality is rewarded, not the number of values referred to).', exemplar: 'The source provides data about tourism.' },
      { marks: '2', descriptor: 'Outlines one value of the video — one value mentioned and elaborated on.', exemplar: 'The source provides data about tourism making it reliable.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'The source only refers to the Galapagos Islands, this can limit the number of examples for the presentation.',
    keyConcepts: ['source evaluation', 'limitation'],
    keywords: ['limitation', 'only Galapagos Islands', 'examples', 'presentation', 'narrow'],
    feedbackHit: 'Well done — you outlined one limitation of the video for the student’s presentation.',
    feedbackMiss: 'State a limitation (1), then outline it (2) — elaborate on one limitation (e.g. it only refers to the Galápagos Islands, limiting examples).',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'States one limitation of the video (quality is rewarded, not the number of limitations referred to).', exemplar: 'The source only refers to the Galapagos Islands.' },
      { marks: '2', descriptor: 'Outlines one limitation of the video — one limitation mentioned and elaborated on.', exemplar: 'The source only refers to the Galapagos Islands, this can limit the number of examples for the presentation.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'Option 2 will provide jobs for locals, increasing standards of living for local people and providing opportunities for employment where there aren’t many options outside of tourism. Option 1 protects the environment but doesn’t provide as many benefits, such as jobs, and the money goes directly to the government rather than benefitting the local people. The guide would be invested in protecting and managing the environment, therefore option 2 is the best next step because it addresses the economy and the environment.',
    keyConcepts: ['management & intervention', 'sustainability', 'disparity & equity', 'reasoning'],
    keywords: ['justify', 'option 1', 'option 2', 'entry fee', 'local tourist guide', 'jobs', 'standard of living', 'environment', 'economy'],
    feedbackHit: 'Well done — a thorough justification of your chosen action, weighing it against the alternative with specific detail.',
    feedbackMiss: 'Build from stating which option to choose (1) → satisfactory justification with brief arguments (2–3) → detailed argument(s) (4–5) → an in-depth, thorough justification referring to specific details (6). There is no minimum number of points.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'No standard reached.' },
      { marks: '1', descriptor: 'Provides a limited justification by stating which option should be chosen (one or two sentences giving a basic supporting argument).', exemplar: 'Option 2 will provide jobs for locals.' },
      { marks: '2–3', descriptor: 'Provides a satisfactory justification — brief argument(s) to support; no minimum number of points/arguments.', exemplar: 'Option 2 will provide jobs for locals, increasing standards of living for local people. Option 1 protects the environment but doesn’t provide as many benefits, such as jobs.' },
      { marks: '4–5', descriptor: 'Provides a detailed justification — detailed argument(s) to support.', exemplar: 'Option 2 will provide jobs for locals, increasing standards of living for local people and providing opportunities for employment where there aren’t many options outside of tourism. Option 1 protects the environment but doesn’t provide as many benefits, such as jobs.' },
      { marks: '6', descriptor: 'Provides a thorough justification — in-depth arguments referring to specific details.', exemplar: '…The money goes directly to the government rather than benefitting the local people. The guide would be invested in protecting and managing the environment, therefore option 2 is the best next step because it addresses the economy and the environment.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'An increase in tourist numbers is a significant threat to sustainable tourism, but it is not the only or the greatest threat. On one hand, rising numbers directly damage the environment: in the Galápagos Islands tourists rose from 180 000 in 2007 to over 270 000 by 2019, bringing invasive species, generating 230 550 kg of waste a year and driving hotel construction and urbanization that fragment fragile ecosystems. From an environmental perspective, more visitors clearly threaten sustainability. On the other hand, tourist numbers are manageable, and other factors matter more. The same Galápagos tourism generates US$143 million a year and a US$100 entry fee funds conservation, so income from tourists can protect the very environment they visit if it is well governed. Weak management, the type of tourism, and the level of development are arguably greater threats than numbers alone — a small number of poorly regulated visitors can do more harm than a large, well-managed flow. Weighing these perspectives, I agree to a limited extent: increasing tourist numbers is a major threat to sustainable tourism, but the greatest threat is unsustainable management of those numbers, because it is governance, not headcount alone, that determines whether tourism is environmentally, economically and socially sustainable.',
    keyConcepts: ['sustainability', 'management & intervention', 'patterns & trends', 'disparity & equity', 'synthesis'],
    keywords: ['sustainable tourism', 'tourist numbers', 'Galápagos', 'invasive species', 'waste', 'urbanization', 'entry fee', 'conservation', 'management', 'perspectives', 'conclusion', 'synthesis'],
    feedbackHit: 'Well done — a structured essay weighing whether tourist numbers are the greatest threat to sustainable tourism, with ≥2 balanced perspectives, examples and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Reference sustainable tourism, give ≥2 perspectives (e.g. tourist numbers vs other factors; short- vs long-term; environmental vs economic vs social; scale; level of development; manageability) and reach a clear conclusion.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Limited contextual and conceptual understanding in an outline, using limited examples and limited terminology. There is a requirement to reference sustainable tourism, as per the question.' },
      { marks: 'CritA 3–4', descriptor: 'Adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology.' },
      { marks: 'CritA 5–6', descriptor: 'Substantial contextual and conceptual understanding in an explanation (reasons included), using accurate examples and terminology used effectively in most of the essay.' },
      { marks: 'CritA 7–8', descriptor: 'Detailed contextual and conceptual understanding in a thorough explanation; references examples in detail to support points; accurate and effective terminology throughout.' },
      { marks: 'Format 1', descriptor: 'Two of: introduction, a main body of argument, a conclusion — as separate paragraphs (if not separate paragraphs, 0).' },
      { marks: 'Format 2', descriptor: 'All three — introduction, a main body of argument and a conclusion — as separate paragraphs.' },
      { marks: 'Communicating 1', descriptor: 'The style and language used are rarely appropriate to an essay; language rarely clear; may be too short to award higher.' },
      { marks: 'Communicating 2', descriptor: 'The style and language used are occasionally appropriate to an essay; not always consistent; language less clear in places.' },
      { marks: 'Communicating 3', descriptor: 'The style and language used are consistently appropriate to an essay; language formal and clear.' },
      { marks: 'Organization 1', descriptor: 'The organizational structure is rarely effective; rarely uses effective transitions; may be too short.' },
      { marks: 'Organization 2', descriptor: 'The organizational structure is occasionally effective; paragraphs/ideas build in a mainly logical manner; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'The organizational structure is consistently appropriate and effective; ideas build in a clear and logical manner with effective transitions.' },
      { marks: 'CritD 1–2', descriptor: 'Provides one perspective in a basic analysis and summarizes information to a limited extent; may not reach a conclusion or fully answer the question.' },
      { marks: 'CritD 3–4', descriptor: 'Provides different perspectives in an analysis and summarizes information to make clear arguments; at least two perspectives with development (not necessarily balanced); a conclusion expected but likely not fully developed.' },
      { marks: 'CritD 5–6', descriptor: 'Provides different perspectives in an analysis and synthesizes information to make clear arguments; at least two perspectives with substantial development and balance; ideas on growth in tourist numbers and other factors combined into a clear, coherent conclusion.' },
      { marks: 'CritD 7–8', descriptor: 'Provides different perspectives in a detailed discussion and synthesizes information; ≥2 perspectives with thorough development, equally considered/balanced; ideas combined into a clear, coherent and convincing conclusion giving a judgment on whether the impact is more positive, negative or balanced.' },
    ],
  },
}
