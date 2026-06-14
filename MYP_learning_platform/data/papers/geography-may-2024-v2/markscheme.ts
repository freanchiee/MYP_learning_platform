import 'server-only'

/**
 * MYP Geography — May 2024 · Set 2 isomorphic VARIANT mark scheme
 * (geography-may-2024-v2) — rubric-banded, "best fit".
 *
 * SAME keys (q{id}_{label}) and SAME marks as the source. The IB band DESCRIPTORS
 * are unchanged (the assessed construct does not change); only the `exemplar`
 * responses, the top-level `exemplar`, and the keyConcepts/keywords/feedback are
 * rewritten to match the NEW scenario (Indus River management; monsoon-flood
 * management; a Karachi development decision; megacity quality of life).
 *
 * The two extended responses marked across several criterion strands (Q4 /18 and
 * Q7 /24) list EVERY strand in `rubricBands`; the strand maxima sum to the question
 * total. Σ MSEntry.marks = 80 = paperMeta.totalMarks.
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
    marks: 2,
    exemplar: 'Deposition; saltwater intrusion.',
    keyConcepts: ['geographic processes', 'systems'],
    keywords: ['deposition', 'saltwater intrusion', 'weathering', 'abrasion', 'transportation', 'mass movement', 'physical process'],
    feedbackHit: 'Correct — two valid physical processes that affect rivers or coasts.',
    feedbackMiss: 'State two physical processes (e.g. deposition, saltwater intrusion, weathering, abrasion, transportation, mass movement). Accept any valid response.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Deposition', 'Saltwater intrusion', 'Weathering', 'Abrasion', 'Transportation', 'Mass movement'],
  },

  q1_b: {
    marks: 4,
    exemplar:
      'Deposition can drop sediment on the river bed and raise it over time. As the bed rises, the channel can hold less water, so in the monsoon the river overtops its banks more easily. This threatens nearby communities as homes and farmland close to the river are flooded.',
    keyConcepts: ['causality', 'geographic processes', 'management & intervention'],
    keywords: ['deposition', 'sediment', 'river bed', 'raises', 'channel capacity', 'overtops', 'flood', 'threaten communities'],
    feedbackHit: 'Well done — you explained one physical process in detail, with reasons, showing how it threatens communities.',
    feedbackMiss: 'Build from stating how a process threatens communities (1) → outlining (2) → describing in detail (3) → explaining with reasons (4). Consider one process in depth; an example helps but is not essential.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how one physical process can threaten communities (likely one sentence hinting at a single impact).', exemplar: 'Deposition can drop sediment on the river bed.' },
      { marks: '2', descriptor: 'Outlines how one physical process can threaten communities (a single elaborated sentence; brief detail).', exemplar: 'Deposition can drop sediment on the river bed and raise it over time.' },
      { marks: '3', descriptor: 'Describes how one physical process can threaten communities — one process in detail without comprehensive reasons; an example may support it.', exemplar: 'Deposition can drop sediment on the river bed and raise it over time. As the bed rises, the channel can hold less water, so in the monsoon the river overtops its banks more easily.' },
      { marks: '4', descriptor: 'Explains how one physical process can threaten communities — one process in detail, along with reasons (an example may be given but is not essential).', exemplar: '…This threatens nearby communities as homes and farmland close to the river are flooded.' },
    ],
  },

  q2_: {
    marks: 8,
    exemplar:
      'Students are collecting primary data from two locations. Two perspectives will make the investigation more reliable in order to help students understand how the falling flow impacted farmers in both the upstream and downstream communities. However, the students did not test the water quality, for example salinity levels. Water quality is as important as the quantity of water because rising salinity can ruin paddy fields and fisheries, so by not investigating this the results may be less reliable. Although multiple perspectives were collected, the lack of water-quality testing means that, overall, the investigation will be unsuccessful.',
    keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'two locations', 'perspectives', 'water quality', 'reliable', 'salinity', 'fisheries'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s), then give an overall judgement. You need not discuss both strengths and limitations of every part. Suggesting alternative methods counts as addressing limitations.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the action plan (one sentence referring to a single strength).', exemplar: 'Data from two locations is used.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the action plan (one strength elaborated; brief detail).', exemplar: 'Students are collecting primary data from two locations.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the action plan — one strength elaborated in additional detail with reasoning. (3+ strengths can also reach 3.)', exemplar: 'Students are collecting primary data from two locations. Two perspectives will make the investigation more reliable in order to help students understand how the falling flow impacted farmers in both the upstream and downstream communities.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the investigation (one sentence referring to a single limitation).', exemplar: 'The students did not test the water quality.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the investigation (one limitation elaborated; brief detail).', exemplar: 'The students did not test the water quality, for example salinity levels.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the investigation — one limitation elaborated in detail with reasoning. (3+ limitations can also reach 3.)', exemplar: '…Water quality is as important as the quantity of water because rising salinity can ruin paddy fields and fisheries. By not investigating this, the results may be less reliable.' },
      { marks: 'Appraisal 1', descriptor: 'States an appraisal of the investigation (a summary of strengths/limitations or a brief judgment; can appear anywhere).', exemplar: 'Overall, the investigation will be unsuccessful.' },
      { marks: 'Appraisal 2', descriptor: 'Outlines an appraisal — weighs up both positive and negative points (implicitly or explicitly) and makes an overall judgement on the students’ investigative process.', exemplar: 'Although multiple perspectives were collected, the lack of water-quality testing means that, overall, the investigation will be unsuccessful.' },
    ],
  },

  q3_a: {
    marks: 2,
    exemplar: 'To what extent would lining the irrigation canals near Sukkur reduce water lost from the Indus and leave more flow for the delta?',
    keyConcepts: ['investigation', 'research question', 'sustainability'],
    keywords: ['research question', 'clear', 'focused', 'location', 'strategy', 'statement of inquiry', 'canal lining'],
    feedbackHit: 'Well done — a research question that is both clear and focused (a place and a strategy) and connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ scores 1; one that is BOTH clear AND focused (e.g. specifies a location and a strategy) and connected to the SoI scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused, and connected to the statement of inquiry.', exemplar: 'To what extent would lining canals protect the communities who depend on the river? (clear and connected, but lacks focus — no location specified)' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused (a place and strategy) and connected to the statement of inquiry.', exemplar: 'To what extent would lining the irrigation canals near Sukkur reduce water lost from the Indus and leave more flow for the delta?' },
    ],
  },

  q3_b: {
    marks: 4,
    exemplar:
      'The lower Indus has lost much of its flow and the delta communities have suffered from salt water. Lining the canals can be effective because it cuts the water that leaks away into the ground. This leaves more flow in the river. Therefore, if the local council understood how canal lining could be used, they could keep more water in the river and protect the delta community and its fisheries.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['canal lining', 'water loss', 'more flow', 'protect the community', 'delta', 'fisheries', 'worthy of investigating', 'reasoning'],
    feedbackHit: 'Well done — you justified, with reasoning, how investigating the RQ will help the council protect the environment and community.',
    feedbackMiss: 'Build from stating a simple connection (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is relevant to the SoI (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how investigating their research question will help the local council to better protect the environment and the community (a simple connection between SoI and RQ).', exemplar: 'Lining the canals can be effective at saving water.' },
      { marks: '2', descriptor: 'Outlines how investigating their research question will help the council (brief detail on relevance to the SoI).', exemplar: 'Lining the canals can be effective at saving water. It cuts the water that leaks away into the ground.' },
      { marks: '3', descriptor: 'Describes how investigating their research question will help the council — at least one factor in detail, without full reasoning.', exemplar: 'The lower Indus has lost much of its flow and the delta communities have suffered from salt water. Lining the canals can be effective because it cuts the water that leaks away into the ground. This leaves more flow in the river.' },
      { marks: '4', descriptor: 'Justifies how investigating their research question will help the council — at least one factor in detail, along with reasoning for why the RQ is relevant to the SoI.', exemplar: '…Therefore, if the local council understood how canal lining could be used, they could keep more water in the river and protect the delta community and its fisheries.' },
    ],
  },

  q3_c: {
    marks: 1,
    exemplar: 'National water-authority river-gauge records for the lower Indus.',
    keyConcepts: ['sources', 'reliability'],
    keywords: ['secondary source', 'river-gauge records', 'water authority', 'satellite imagery', 'reliable', 'specific'],
    feedbackHit: 'Correct — a specific, reliable secondary source for the investigation.',
    feedbackMiss: 'Name one specific reliable secondary source (e.g. national water-authority river-gauge records, satellite delta-shoreline imagery, or current census statistics for a named district). General or vague responses such as “websites” or “the news” score 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['National water-authority river-gauge records', 'Satellite delta-shoreline imagery', 'Current census statistics for (named district)'],
  },

  q3_d: {
    marks: 4,
    exemplar:
      'River-gauge records will help me see how much water reaches the lower Indus each month and identify which seasons have the lowest flow. I would need to understand when and where the delta communities are most affected by low flow and salt water so I am able to make judgements as to whether canal lining should be used near Sukkur.',
    keyConcepts: ['sources', 'usefulness', 'reasoning'],
    keywords: ['river-gauge records', 'lower Indus', 'flow', 'delta communities', 'low flow', 'judgements', 'canal lining'],
    feedbackHit: 'Well done — you explained, with reasons, how the source helps you investigate your research question.',
    feedbackMiss: 'Build from stating a basic way the source helps (1) → outlining (2) → describing a benefit in detail (3) → explaining with reasons (4).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how the secondary source will help investigate the research question (hints at a basic way it would help).', exemplar: 'River-gauge records will help me see how much water reaches the lower Indus.' },
      { marks: '2', descriptor: 'Outlines how the secondary source will help (a single elaborated benefit; brief detail).', exemplar: 'River-gauge records will help me see how much water reaches the lower Indus each month and identify which seasons have the lowest flow.' },
      { marks: '3', descriptor: 'Describes how the secondary source helps — one benefit in detail without comprehensive reasons; an example may support it.', exemplar: '…I would need to understand when and where the delta communities are most affected by low flow and salt water.' },
      { marks: '4', descriptor: 'Explains how the secondary source helps — one benefit in detail, along with reasons (an example may support it).', exemplar: '…so I am able to make judgements as to whether canal lining should be used near Sukkur.' },
    ],
  },

  q3_e: {
    marks: 1,
    exemplar: 'Unable to access barrage-release records.',
    keyConcepts: ['investigation', 'challenges'],
    keywords: ['challenge', 'barrage-release records', 'reliable data', 'monsoon fieldwork', 'large research area', 'limitation'],
    feedbackHit: 'Correct — a specific challenge you could face in your investigation.',
    feedbackMiss: 'State one specific challenge (e.g. unable to access barrage-release records; the monsoon season makes fieldwork timing difficult; the river basin is a very large research area). Vague responses such as “data” or “unreliable information” score 0.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Unable to access barrage-release records', 'Monsoon season makes fieldwork timing difficult', 'Large river-basin research area could be difficult to investigate'],
  },

  q4_: {
    marks: 18,
    exemplar:
      'INTRODUCTION: I live in Bangladesh, a low-lying country in the Ganges–Brahmaputra delta. Each monsoon, heavy rain and meltwater swell our rivers, and large parts of the country can flood. Over the years we have learned to live with and manage these floods.\n\n' +
      'How does your country keep communities safe and warned before a flood arrives? Where I live, a national Flood Forecasting and Warning Centre tracks the rivers and sends warnings by radio, text and volunteers on bicycles. After severe floods in the past, the government built raised flood shelters and embankments along the rivers. Communities practise evacuation drills, and people move livestock and belongings onto raised platforms (machans). Experts believe early warning of even a day or two lets villages evacuate in time, which has cut flood deaths dramatically — by far more than half compared with decades ago, therefore saving many lives.\n\n' +
      'How are the economic impacts of floods on farmers managed in your country? Farmers grow flood-tolerant “deepwater” rice varieties and crop-insurance and microfinance schemes help them replant quickly after the water falls, limiting the long-term economic damage.\n\n' +
      'CONCLUSION: By warning communities early and helping farmers recover, Bangladesh successfully manages both the social and economic impacts of monsoon flooding.',
    keyConcepts: ['management & intervention', 'systems', 'causality', 'communication'],
    keywords: ['flooding', 'monsoon', 'Bangladesh', 'delta', 'flood forecasting', 'early warning', 'flood shelters', 'embankments', 'evacuation', 'deepwater rice', 'introduction', 'conclusion', 'named location'],
    feedbackHit: 'Well done — a presentation script explaining how flooding is managed, answering two questions from two categories, with an introduction, conclusion and named locations.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Answer two questions from two different categories, write in presentation/first-person style for MYP4 students, and include an introduction, a conclusion and named location(s).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge: outlines how flooding is successfully managed, using limited examples and limited relevant terminology.', exemplar: 'Where I live in Bangladesh, the government warns us before floods and has built flood shelters.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge: describes how flooding is successfully managed, using satisfactory examples and appropriate relevant terminology.', exemplar: 'I live in Bangladesh, a low-lying delta country… A national Flood Forecasting and Warning Centre tracks the rivers and sends warnings by radio, text and volunteers, and raised flood shelters and embankments have been built.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains how flooding is successfully managed, using accurate examples and appropriate relevant terminology.', exemplar: '…We live in the Ganges–Brahmaputra delta… Experts believe early warning of even a day or two lets villages evacuate in time. This reduces the number of lives lost.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains how flooding is successfully managed, using accurate and effective examples and appropriate relevant terminology.', exemplar: '…which has cut flood deaths dramatically — by far more than half compared with decades ago, therefore saving many lives.' },
      { marks: 'Format 1', descriptor: 'One of the following elements is included (as a separate paragraph): introduction, conclusion.' },
      { marks: 'Format 2', descriptor: 'Two of the following elements are included (as separate paragraphs): introduction, conclusion.' },
      { marks: 'Communicating 1–2', descriptor: 'Style/language rarely appropriate to a presentation for MYP4 students explaining: reads more formally (like an essay); basic, not engaging; text may be too short to evidence more.' },
      { marks: 'Communicating 3–4', descriptor: 'Style/language occasionally appropriate: at times like an essay, at times like a presentation (informal/first-person). Some features (metaphor, rhetorical questions, concise sentences, emotive vocabulary) engage the audience.' },
      { marks: 'Communicating 5–6', descriptor: 'Style/language consistently appropriate: reads like a presentation throughout (informal/first-person); language features are often used to engage the audience.' },
      { marks: 'Organization 1', descriptor: 'Ideas rarely build on each other logically; rarely uses effective transitions; text may be too short to evidence more.' },
      { marks: 'Organization 2', descriptor: 'Ideas occasionally build on each other logically; sometimes uses effective transitions to show relationships between ideas.' },
      { marks: 'Organization 3', descriptor: 'Ideas frequently build on each other logically; often uses effective transitions to show relationships between ideas.' },
      { marks: 'Organization 4', descriptor: 'Ideas consistently build on each other in a clear, logical manner; always uses effective transitions to show relationships between ideas.' },
    ],
  },

  q5_a: {
    marks: 2,
    exemplar: 'The brief includes a scale bar that would help the city planners determine how far away Sector W is from the central market district.',
    keyConcepts: ['source evaluation', 'value', 'scale'],
    keywords: ['scale bar', 'distance', 'Sector W', 'market district', 'value', 'city planners'],
    feedbackHit: 'Well done — you outlined one value of the source for the city planners, with elaboration.',
    feedbackMiss: 'Build from stating a value (1) → outlining a value with elaboration (2), e.g. the brief includes a scale bar that helps planners judge how far Sector W is from the market district.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one value of Source A (a brief comment on the value of the map for city planners).', exemplar: 'The brief includes a scale bar.' },
      { marks: '2', descriptor: 'Outlines one value of Source A (elaborates on a value of the map for city planners).', exemplar: 'The brief includes a scale bar that would help the city planners determine how far away Sector W is from the central market district.' },
    ],
  },

  q5_b: {
    marks: 4,
    exemplar:
      'The brief lacks important detail like the location of schools and clinics. If the area is to be developed for housing, the location of schools is important information because the population would increase and there would be more children who need to travel to the schools. The city planners need this information to determine whether Sector W would be more suitable for housing or for the special economic zone.',
    keyConcepts: ['source evaluation', 'limitation', 'management & intervention'],
    keywords: ['limitation', 'lacks detail', 'location of schools', 'clinics', 'housing', 'special economic zone', 'informed decision', 'Sector W'],
    feedbackHit: 'Well done — you explained one limitation of the source, with reasoning, for the city planners’ decision.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining (2) → describing in detail (3) → explaining with reasoning (4), e.g. the brief lacks detail such as school locations, which planners need to decide housing vs the SEZ.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source A that could prevent the planners from making an informed decision about how to develop Sector W.', exemplar: 'The brief lacks important detail.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source A (a brief sentence about the limitation to city planners).', exemplar: 'The brief lacks important detail like the location of schools and clinics.' },
      { marks: '3', descriptor: 'Describes one limitation of Source A in detail; reasoning is not required for “describe”. An example may support it.', exemplar: '…The city planners need this information to determine whether Sector W would be more suitable for housing or for the special economic zone.' },
      { marks: '4', descriptor: 'Explains one limitation of Source A in detail with reasoning. An example may support it.', exemplar: '…If the area is to be developed for housing, the location of schools is important information because the population would increase and there would be more children who need to travel to the schools.' },
    ],
  },

  q6_: {
    marks: 6,
    exemplar:
      'The port and its special economic zone are a major area of trade and therefore attract migrants; the city sits on the Arabian Sea and handles most of the country’s sea trade, so it is already a busy shipping hub. As many migrants are already drawn to this city, the people don’t need more jobs, they need more housing. The growing population of about 17 million needs ‘Sector W’ to be used for housing. There is already a large shortage of affordable housing and more than 40% of residents live in informal settlements. There is already a busy special economic zone in Karachi. If we do not build more housing then the housing shortage will worsen, which will limit the economic growth of Karachi as workers will not stay if they have nowhere to live, and any development must still avoid harming the protected mangrove next to Sector W.',
    keyConcepts: ['urbanization', 'management & intervention', 'disparity & equity', 'reasoning'],
    keywords: ['housing', 'special economic zone', 'migrants', 'seaport', 'trade', 'Arabian Sea', 'informal settlements', 'population', 'mangrove', 'rationale', 'both opinions'],
    feedbackHit: 'Well done — you justified your decision in detail, referring to both opinions and drawing on the sources.',
    feedbackMiss: 'Choose an opinion (build housing OR expand the special economic zone), then justify it in detail with supporting reasons from Sources A and B, referring to BOTH options. Referring to only one option caps at 3 marks.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States their rationale (a brief rationale). If only one option is referred to, the student can still be awarded 1 mark.', exemplar: 'The growing population needs ‘Sector W’ to be used for housing.' },
      { marks: '2–3', descriptor: 'Outlines their rationale — elaborates with details that add weight to their perspective. (Referring to only one option caps at 3 marks.)', exemplar: 'The growing population needs ‘Sector W’ to be used for housing as there is already a busy special economic zone in Karachi. The city already handles most of the country’s sea trade, which provides lots of jobs.' },
      { marks: '4–5', descriptor: 'Justifies their rationale — the rationale is considered in some detail, with supporting reasons and reference to both options.', exemplar: 'As many migrants are already drawn to this city, the people don’t need more jobs, they need more housing… There is already a large shortage of affordable housing and more than 40% of residents live in informal settlements… If we do not build more housing then the housing shortage will worsen.' },
      { marks: '6', descriptor: 'Justifies in detail their rationale — considered in detail with supporting reason(s) provided, referring to both options.', exemplar: '…If we do not build more housing then the housing shortage will worsen, which will limit the economic growth of Karachi as workers will not stay if they have nowhere to live.' },
    ],
  },

  q7_: {
    marks: 24,
    exemplar:
      'Living in a megacity decreases quality of life to a significant extent for some indicators, but the picture is mixed. On one hand, megacities such as Karachi concentrate work and economic opportunity, raising financial wellbeing for migrants who find employment; this draws millions and supports a vibrant community life. On the other hand, the quality of environment falls sharply: congestion in megacities causes severe air pollution, and overcrowded informal settlements undermine personal safety and health, with limited clean water and sanitation. Social relationships can suffer too, as long commutes and high living costs leave little time for family. Weighing these perspectives, living in a megacity decreases quality of life to a large extent through environmental degradation and pressure on health and safety — yet for those who secure stable work, the economic gains can offset this. The overall impact therefore depends on which quality-of-life indicators matter most to the individual and on how well the megacity is managed.',
    keyConcepts: ['urbanization', 'disparity & equity', 'sustainability', 'causality', 'synthesis'],
    keywords: ['megacity', 'quality of life', 'health', 'work', 'financial wellbeing', 'quality of environment', 'personal safety', 'congestion', 'pollution', 'Karachi', 'perspectives', 'conclusion', 'synthesis'],
    feedbackHit: 'Well done — a structured essay weighing how living in a megacity affects quality of life, with ≥2 balanced perspectives, ≥2 indicators, examples and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Use ≥2 quality-of-life indicators, ≥2 perspectives (for and against), examples from your MYP studies and geographical terms, and reach a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Limited contextual and conceptual understanding in an outline, using limited examples and limited terminology; responses are brief.' },
      { marks: 'CritA 3–4', descriptor: 'Adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology used in the correct context.' },
      { marks: 'CritA 5–6', descriptor: 'Substantial contextual and conceptual understanding in an explanation (reasons included), using accurate examples (e.g. congestion in megacities) and terminology used effectively in most of the essay.' },
      { marks: 'CritA 7–8', descriptor: 'Detailed contextual and conceptual understanding in a thorough explanation; references examples (e.g. congestion in megacities) in detail; accurate and effective terminology throughout.' },
      { marks: 'Format 1', descriptor: 'Two of the following are included: introduction, a main body of argument, a conclusion.' },
      { marks: 'Format 2', descriptor: 'Three of the following are included (as separate paragraphs): introduction, a main body of argument and a conclusion.' },
      { marks: 'Communicating 1', descriptor: 'Style/language rarely appropriate to the audience and purpose of informing; rarely consistent with an essay; may be mostly unclear or very short.' },
      { marks: 'Communicating 2', descriptor: 'Style/language occasionally appropriate; not always consistent — may be more informal than expected in an essay; language less clear in places.' },
      { marks: 'Communicating 3', descriptor: 'Style/language consistently appropriate to the audience and purpose of informing; consistent with an essay — formal and clear.' },
      { marks: 'Organization 1', descriptor: 'Organizational structure rarely effective; paragraphs/ideas sometimes build logically; rarely uses effective transitions; may be too short.' },
      { marks: 'Organization 2', descriptor: 'Organizational structure occasionally effective; paragraphs/ideas build in a mainly logical manner; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Organizational structure consistently effective; paragraphs/ideas build in a clear and logical manner; uses effective transitions throughout.' },
      { marks: 'CritD 1–2', descriptor: 'Provides one perspective in a basic analysis and summarizes information to a limited extent; may not reach a conclusion or fully answer the question.' },
      { marks: 'CritD 3–4', descriptor: 'Provides different perspectives (supporting and arguing against) in an analysis with development; clear arguments; ideas on whether megacities decrease quality of life (not fully developed). The two perspectives need not be equally balanced.' },
      { marks: 'CritD 5–6', descriptor: 'Provides different perspectives in an analysis and synthesizes information into clear arguments; substantial development of both perspectives; a conclusion indicating whether megacities decrease quality of life is included.' },
      { marks: 'CritD 7–8', descriptor: 'Provides different perspectives in a detailed discussion and synthesizes information into clear arguments; both perspectives thoroughly and equally developed; ideas combined into a clear, coherent and convincing conclusion on which factor is most important.' },
    ],
  },
}
