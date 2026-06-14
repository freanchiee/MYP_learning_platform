import 'server-only'

/**
 * MYP Geography — May 2024 mark scheme (rubric-banded, "best fit").
 *
 * Geography (I&S) answers are open-ended, so every entry carries the IB band
 * descriptors plus worked exemplar responses at each band (`rubricBands`) —
 * surfaced to the student on submission and in the downloadable exam report.
 * `exemplar` holds the top-band model answer (kept for the shared grading/results
 * consumers); the extra fields (`commandTerm`, `commandTermDefinition`,
 * `rubricBands`) are optional and ignored by consumers that don't use them.
 *
 * The two extended responses marked across several criterion strands (Q4 /18 and
 * Q7 /24) list EVERY strand in `rubricBands` (e.g. 'CritA 6', 'Format 2',
 * 'Communicating 5–6', 'CritD 7–8'); the strand maxima sum to the question total.
 * All descriptors and example responses are transcribed from the official M24
 * markscheme (geogmmoeengtz0xxm).
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
    exemplar: 'Erosion; longshore drift.',
    keyConcepts: ['geographic processes', 'systems'],
    keywords: ['erosion', 'flooding', 'longshore drift', 'attrition', 'hydraulic action', 'physical process'],
    feedbackHit: 'Correct — two valid physical processes that affect rivers or coasts.',
    feedbackMiss: 'State two physical processes (e.g. erosion, flooding, longshore drift, attrition, hydraulic action). Accept any valid response.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Erosion', 'Flooding', 'Longshore drift', 'Attrition', 'Hydraulic action'],
  },

  q1_b: {
    marks: 4,
    exemplar:
      'Erosion can undercut riverbanks and destabilise them. Over time, continued erosion eats away at the bank, and it becomes top-heavy and collapses. This threatens farmland close to the river as fertile land is washed away.',
    keyConcepts: ['causality', 'geographic processes', 'management & intervention'],
    keywords: ['erosion', 'undercut', 'riverbank', 'destabilise', 'collapse', 'farmland', 'threaten communities'],
    feedbackHit: 'Well done — you explained one physical process in detail, with reasons, showing how it threatens communities.',
    feedbackMiss: 'Build from stating how a process threatens communities (1) → outlining (2) → describing in detail (3) → explaining with reasons (4). Consider one process in depth; an example helps but is not essential.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how one physical process can threaten communities (likely one sentence hinting at a single impact).', exemplar: 'Erosion can undercut riverbanks.' },
      { marks: '2', descriptor: 'Outlines how one physical process can threaten communities (a single elaborated sentence; brief detail).', exemplar: 'Erosion can undercut riverbanks and destabilises them.' },
      { marks: '3', descriptor: 'Describes how one physical process can threaten communities — one process in detail without comprehensive reasons; an example may support it.', exemplar: 'Erosion can undercut riverbanks and destabilise them. Over time, continued erosion eats away at the bank, and it becomes top-heavy and collapses.' },
      { marks: '4', descriptor: 'Explains how one physical process can threaten communities — one process in detail, along with reasons (an example may be given but is not essential).', exemplar: '…This threatens farmland close to the river as fertile land is washed away.' },
    ],
  },

  q2_: {
    marks: 8,
    exemplar:
      'Students are collecting primary data from two locations. Two perspectives will make the investigation more reliable in order to help students understand how the changing water levels impacted farmers in both locations. However, the students did not test the water quality, for example oxygen levels. Water quality is as important as the quantity of water because oxygen-deprived water can create dead zones, so by not investigating this the results may be less reliable. Although multiple perspectives were collected, the lack of water quality testing means that, overall, the investigation will be unsuccessful.',
    keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'two locations', 'perspectives', 'water quality', 'reliable', 'oxygen levels', 'dead zones'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s), then give an overall judgement. You need not discuss both strengths and limitations of every part. Suggesting alternative methods counts as addressing limitations.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the action plan (one sentence referring to a single strength).', exemplar: 'Data from two locations is used.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the action plan (one strength elaborated; brief detail).', exemplar: 'Students are collecting primary data from two locations.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the action plan — one strength elaborated in additional detail with reasoning. (3+ strengths can also reach 3.)', exemplar: 'Students are collecting primary data from two locations. Two perspectives will make the investigation more reliable in order to help students understand how the changing water levels impacted farmers in both locations.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the investigation (one sentence referring to a single limitation).', exemplar: 'The students did not test the water quality.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the investigation (one limitation elaborated; brief detail).', exemplar: 'The students did not test the water quality, for example oxygen levels.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the investigation — one limitation elaborated in detail with reasoning. (3+ limitations can also reach 3.)', exemplar: '…Water quality is as important as the quantity of water because oxygen-deprived water can create dead zones. By not investigating this, the results may be less reliable.' },
      { marks: 'Appraisal 1', descriptor: 'States an appraisal of the investigation (a summary of strengths/limitations or a brief judgment; can appear anywhere).', exemplar: 'Overall, the investigation will be unsuccessful.' },
      { marks: 'Appraisal 2', descriptor: 'Outlines an appraisal — weighs up both positive and negative points (implicitly or explicitly) and makes an overall judgement on the students’ investigative process.', exemplar: 'Although multiple perspectives were collected, the lack of water quality testing means that, overall, the investigation will be unsuccessful.' },
    ],
  },

  q3_a: {
    marks: 2,
    exemplar: 'To what extent would levees on the Mississippi River prevent flooding in St Louis?',
    keyConcepts: ['investigation', 'research question', 'sustainability'],
    keywords: ['research question', 'clear', 'focused', 'location', 'strategy', 'statement of inquiry', 'levees'],
    feedbackHit: 'Well done — a research question that is both clear and focused (a place and a strategy) and connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ scores 1; one that is BOTH clear AND focused (e.g. specifies a location and a strategy) and connected to the SoI scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused, and connected to the statement of inquiry.', exemplar: 'To what extent would levees protect the communities who live on rivers? (clear and connected, but lacks focus — no location specified)' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused (a place and strategy) and connected to the statement of inquiry.', exemplar: 'To what extent would levees on the Mississippi River prevent flooding in St Louis?' },
    ],
  },

  q3_b: {
    marks: 4,
    exemplar:
      'St. Louis gets a lot of rainfall and has experienced floods in the past. Levees can be effective in preventing flooding. They increase the volume of water that the river can hold. Therefore, if the local council understood how levees could be used, they could prevent flooding and protect the community.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['levees', 'flooding', 'volume of water', 'protect the community', 'worthy of investigating', 'reasoning'],
    feedbackHit: 'Well done — you justified, with reasoning, how investigating the RQ will help the council protect the environment and community.',
    feedbackMiss: 'Build from stating a simple connection (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is relevant to the SoI (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how investigating their research question will help the local council to better protect the environment and the community (a simple connection between SoI and RQ).', exemplar: 'Levees can be effective in preventing flooding.' },
      { marks: '2', descriptor: 'Outlines how investigating their research question will help the council (brief detail on relevance to the SoI).', exemplar: 'Levees can be effective in preventing flooding. They increase the volume of water that the river can hold.' },
      { marks: '3', descriptor: 'Describes how investigating their research question will help the council — at least one factor in detail, without full reasoning.', exemplar: 'St. Louis gets a lot of rainfall and has experienced floods in the past. Levees can be effective in preventing flooding. They increase the volume of water that the river can hold.' },
      { marks: '4', descriptor: 'Justifies how investigating their research question will help the council — at least one factor in detail, along with reasoning for why the RQ is relevant to the SoI.', exemplar: '…Therefore, if the local council understood how levees could be used, they could prevent flooding and protect the community.' },
    ],
  },

  q3_c: {
    marks: 1,
    exemplar: 'GIS mapping data showing flooding (for the named location).',
    keyConcepts: ['sources', 'reliability'],
    keywords: ['secondary source', 'GIS mapping data', 'local council website', 'population statistics', 'reliable', 'specific'],
    feedbackHit: 'Correct — a specific, reliable secondary source for the investigation.',
    feedbackMiss: 'Name one specific reliable secondary source (e.g. current population statistics for a named location, a local council website, or GIS mapping data showing flooding). General or vague responses such as “websites” or “newspaper articles” score 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Current population statistics for (named location)', 'Local council website', 'GIS mapping data showing flooding'],
  },

  q3_d: {
    marks: 4,
    exemplar:
      'GIS mapping data will help me see where the Mississippi River flows and identify the communities who live closest to the river. I would need to understand where the people who have been most heavily impacted by flooding in the past live so I am able to make judgements as to whether levees should be built on the Mississippi.',
    keyConcepts: ['sources', 'usefulness', 'reasoning'],
    keywords: ['GIS mapping data', 'communities', 'closest to the river', 'impacted by flooding', 'judgements', 'levees'],
    feedbackHit: 'Well done — you explained, with reasons, how the source helps you investigate your research question.',
    feedbackMiss: 'Build from stating a basic way the source helps (1) → outlining (2) → describing a benefit in detail (3) → explaining with reasons (4).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how the secondary source will help investigate the research question (hints at a basic way it would help).', exemplar: 'GIS mapping data will help me see where the Mississippi River flows.' },
      { marks: '2', descriptor: 'Outlines how the secondary source will help (a single elaborated benefit; brief detail).', exemplar: 'GIS mapping data will help me see where the Mississippi River flows and identify the communities who live closest to the river.' },
      { marks: '3', descriptor: 'Describes how the secondary source helps — one benefit in detail without comprehensive reasons; an example may support it.', exemplar: '…I would need to understand where the people who have been most heavily impacted by flooding in the past live.' },
      { marks: '4', descriptor: 'Explains how the secondary source helps — one benefit in detail, along with reasons (an example may support it).', exemplar: '…so I am able to make judgements as to whether levees should be built on the Mississippi.' },
    ],
  },

  q3_e: {
    marks: 1,
    exemplar: 'Unable to access government data.',
    keyConcepts: ['investigation', 'challenges'],
    keywords: ['challenge', 'government data', 'reliable data', 'large research area', 'limitation'],
    feedbackHit: 'Correct — a specific challenge you could face in your investigation.',
    feedbackMiss: 'State one specific challenge (e.g. unable to access government data; difficult to locate reliable data; a large research area). Vague responses such as “government data” or “unreliable information” score 0.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Unable to access government data', 'Difficult to locate reliable data', 'Large research area could be difficult to investigate'],
  },

  q4_: {
    marks: 18,
    exemplar:
      'INTRODUCTION: I live in New Zealand, a tectonically active country. It lies on the collision zone between the Pacific Plate and the Australian Plate. There are multiple fault lines. We have many active and dormant volcanoes and experience minor earthquakes.\n\n' +
      'Why are there so few social impacts after an earthquake? Where I live, my apartment building is an earthquake-proof building. After the Christchurch earthquakes in 2010 and 2011, the government required that all older buildings be retrofitted to include earthquake proofing; before this, it was only buildings built after 1960. Some buildings have had cross bracing fitted. Experts believe that if a building can sway a small amount in an earthquake and remain structurally intact, this reduces the chances of damage to the building causing injury. It also reduces the chances of buildings collapsing entirely by 80%, therefore saving many lives.\n\n' +
      'How are the economic impacts of earthquakes managed in your country? Insurance schemes and government recovery funds help businesses rebuild quickly, limiting the long-term economic damage.\n\n' +
      'CONCLUSION: By retrofitting buildings and planning for recovery, New Zealand successfully manages both the social and economic impacts of tectonic activity.',
    keyConcepts: ['management & intervention', 'systems', 'causality', 'communication'],
    keywords: ['tectonic activity', 'earthquake', 'volcanic eruption', 'New Zealand', 'Pacific Plate', 'Australian Plate', 'retrofitted', 'earthquake-proof', 'cross bracing', 'Christchurch', 'introduction', 'conclusion', 'named location'],
    feedbackHit: 'Well done — a presentation script explaining how tectonic activity is managed, answering two questions from two categories, with an introduction, conclusion and named locations.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Answer two questions from two different categories, write in presentation/first-person style for MYP4 students, and include an introduction, a conclusion and named location(s).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge: outlines how tectonic activity is successfully managed, using limited examples and limited relevant terminology.', exemplar: 'Where I live in New Zealand, my apartment building is an earthquake-proof building. The government required that all older buildings be retrofitted.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge: describes how tectonic activity is successfully managed, using satisfactory examples and appropriate relevant terminology.', exemplar: 'I live in New Zealand, a tectonically active country… After the Christchurch earthquakes in 2010 and 2011, the government required that all older buildings be retrofitted to include earthquake proofing. Some buildings have had cross bracing fitted.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains how tectonic activity is successfully managed, using accurate examples and appropriate relevant terminology.', exemplar: '…It lies on the collision zone between the Pacific Plate and the Australian Plate… Experts believe that if a building can sway in an earthquake, the damage caused will be reduced. This will reduce the number of lives lost.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains how tectonic activity is successfully managed, using accurate and effective examples and appropriate relevant terminology.', exemplar: '…It also reduces the chances of buildings collapsing entirely by 80%, therefore saving many lives.' },
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
    exemplar: 'The map includes a scale that would help the city planners determine how far away Area X is from the CBD.',
    keyConcepts: ['source evaluation', 'value', 'scale'],
    keywords: ['scale', 'distance', 'Area X', 'CBD', 'value', 'city planners'],
    feedbackHit: 'Well done — you outlined one value of the map for the city planners, with elaboration.',
    feedbackMiss: 'Build from stating a value (1) → outlining a value with elaboration (2), e.g. the map includes a scale that helps planners judge how far Area X is from the CBD.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one value of Source A (a brief comment on the value of the map for city planners).', exemplar: 'The map includes a scale.' },
      { marks: '2', descriptor: 'Outlines one value of Source A (elaborates on a value of the map for city planners).', exemplar: 'The map includes a scale that would help the city planners determine how far away Area X is from the CBD.' },
    ],
  },

  q5_b: {
    marks: 4,
    exemplar:
      'The map lacks important detail like the location of schools. If the area is to be developed for housing, the location of schools is important information because the population would increase and there would be more children who need to travel to the schools. The city planners need this information to determine whether Area X would be more suitable for housing or for factories.',
    keyConcepts: ['source evaluation', 'limitation', 'management & intervention'],
    keywords: ['limitation', 'lacks detail', 'location of schools', 'housing', 'factories', 'informed decision', 'Area X'],
    feedbackHit: 'Well done — you explained one limitation of the map, with reasoning, for the city planners’ decision.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining (2) → describing in detail (3) → explaining with reasoning (4), e.g. the map lacks detail such as school locations, which planners need to decide housing vs factories.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source A that could prevent the planners from making an informed decision about how to develop Area X.', exemplar: 'The map lacks important detail.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source A (a brief sentence about the limitation to city planners).', exemplar: 'The map lacks important detail like the location of schools.' },
      { marks: '3', descriptor: 'Describes one limitation of Source A in detail; reasoning is not required for “describe”. An example may support it.', exemplar: '…The city planners need this information to determine whether Area X would be more suitable for housing or for factories.' },
      { marks: '4', descriptor: 'Explains one limitation of Source A in detail with reasoning. An example may support it.', exemplar: '…If the area is to be developed for housing, the location of schools is important information because the population would increase and there would be more children who need to travel to the schools.' },
    ],
  },

  q6_: {
    marks: 6,
    exemplar:
      'The seaport in the city is a major area of trade and therefore attractive to migrants; it is also located where two large rivers meet so will be a popular shipping port. As many migrants are already attracted to this city, the people don’t need more jobs, they need more housing. The growing population needs ‘Area X’ to be used for housing. There is already high demand for housing. There are already a lot of industrial areas in Basra. The map identifies agricultural areas and a CBD, which would provide lots of jobs. If we do not build more housing then there will be a shortage of housing which will limit the economic growth of Basra as workers will not migrate if they have nowhere to live.',
    keyConcepts: ['urbanization', 'management & intervention', 'disparity & equity', 'reasoning'],
    keywords: ['housing', 'industrial area', 'migrants', 'seaport', 'trade', 'two rivers', 'CBD', 'population', 'rationale', 'both opinions'],
    feedbackHit: 'Well done — you justified your decision in detail, referring to both opinions and drawing on the sources.',
    feedbackMiss: 'Choose an opinion (build housing OR expand industry), then justify it in detail with supporting reasons from Sources A and B, referring to BOTH options. Referring to only one option caps at 3 marks.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States their rationale (a brief rationale). If only one option is referred to, the student can still be awarded 1 mark.', exemplar: 'The growing population needs ‘Area X’ to be used for housing.' },
      { marks: '2–3', descriptor: 'Outlines their rationale — elaborates with details that add weight to their perspective. (Referring to only one option caps at 3 marks.)', exemplar: 'The growing population needs ‘Area X’ to be used for housing as there are already a lot of industrial areas in Basra. The map identifies agricultural areas and a CBD, which would provide lots of jobs.' },
      { marks: '4–5', descriptor: 'Justifies their rationale — the rationale is considered in some detail, with supporting reasons and reference to both options.', exemplar: 'As many migrants are already attracted to this city, the people don’t need more jobs, they need more housing… There is already high demand for housing… If we do not build more housing then there will be a shortage of housing.' },
      { marks: '6', descriptor: 'Justifies in detail their rationale — considered in detail with supporting reason(s) provided, referring to both options.', exemplar: '…If we do not build more housing then there will be a shortage of housing which will limit the economic growth of Basra as workers will not migrate if they have nowhere to live.' },
    ],
  },

  q7_: {
    marks: 24,
    exemplar:
      'Living in a megacity decreases quality of life to a significant extent for some indicators, but the picture is mixed. On one hand, megacities such as Mumbai concentrate work and economic opportunity, raising financial wellbeing for migrants who find employment; this draws millions and supports a vibrant community life. On the other hand, the quality of environment falls sharply: congestion in megacities causes severe air pollution, and overcrowded informal settlements undermine personal safety and health, with limited clean water and sanitation. Social relationships can suffer too, as long commutes and high living costs leave little time for family. Weighing these perspectives, living in a megacity decreases quality of life to a large extent through environmental degradation and pressure on health and safety — yet for those who secure stable work, the economic gains can offset this. The overall impact therefore depends on which quality-of-life indicators matter most to the individual and on how well the megacity is managed.',
    keyConcepts: ['urbanization', 'disparity & equity', 'sustainability', 'causality', 'synthesis'],
    keywords: ['megacity', 'quality of life', 'health', 'work', 'financial wellbeing', 'quality of environment', 'personal safety', 'congestion', 'pollution', 'Mumbai', 'perspectives', 'conclusion', 'synthesis'],
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
