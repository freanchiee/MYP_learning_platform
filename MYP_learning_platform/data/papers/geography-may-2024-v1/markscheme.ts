import 'server-only'

/**
 * MYP Geography — May 2024 · Set 1 VARIANT mark scheme (rubric-banded, "best fit").
 *
 * Isomorphic to geography-may-2024: SAME keys (q{id}_{label}), SAME marks per entry,
 * SAME command terms and SAME band DESCRIPTORS. Only the worked exemplars and the
 * concept/keyword/feedback metadata are rewritten for the new West-Africa scenario
 * (Volta River management, Sahel drought, urbanisation in Tema, Ghana).
 *
 * Geography (I&S) answers are open-ended, so every entry carries the IB band
 * descriptors plus worked exemplar responses at each band (`rubricBands`) — surfaced
 * to the student on submission and in the downloadable exam report. `exemplar` holds
 * the top-band model answer (kept for the shared grading/results consumers); the extra
 * fields (`commandTerm`, `commandTermDefinition`, `rubricBands`) are optional and ignored
 * by consumers that don't use them.
 *
 * The two extended responses marked across several criterion strands (Q4 /18 and
 * Q7 /24) list EVERY strand in `rubricBands` (e.g. 'CritA 6', 'Format 2',
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
    marks: 2,
    exemplar: 'Deposition; abrasion.',
    keyConcepts: ['geographic processes', 'systems'],
    keywords: ['deposition', 'weathering', 'abrasion', 'transportation', 'mass movement', 'physical process'],
    feedbackHit: 'Correct — two valid physical processes that affect rivers or coasts.',
    feedbackMiss: 'State two physical processes (e.g. deposition, weathering, abrasion, transportation, mass movement). Accept any valid response.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Deposition', 'Weathering', 'Abrasion', 'Transportation', 'Mass movement'],
  },

  q1_b: {
    marks: 4,
    exemplar:
      'Deposition occurs when a river or longshore current slows down and drops the sediment it was carrying. Over time, this sediment builds up and silts up a harbour or river mouth. This threatens fishing communities because boats can no longer reach the open sea, so families lose the income they depend on.',
    keyConcepts: ['causality', 'geographic processes', 'management & intervention'],
    keywords: ['deposition', 'sediment', 'silt up', 'harbour', 'river mouth', 'fishing community', 'threaten communities'],
    feedbackHit: 'Well done — you explained one physical process in detail, with reasons, showing how it threatens communities.',
    feedbackMiss: 'Build from stating how a process threatens communities (1) → outlining (2) → describing in detail (3) → explaining with reasons (4). Consider one process in depth; an example helps but is not essential.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how one physical process can threaten communities (likely one sentence hinting at a single impact).', exemplar: 'Deposition can silt up a harbour.' },
      { marks: '2', descriptor: 'Outlines how one physical process can threaten communities (a single elaborated sentence; brief detail).', exemplar: 'Deposition drops sediment that silts up a harbour or river mouth.' },
      { marks: '3', descriptor: 'Describes how one physical process can threaten communities — one process in detail without comprehensive reasons; an example may support it.', exemplar: 'Deposition occurs when a river or current slows and drops its sediment. Over time this builds up and silts up the harbour or river mouth.' },
      { marks: '4', descriptor: 'Explains how one physical process can threaten communities — one process in detail, along with reasons (an example may be given but is not essential).', exemplar: '…This threatens fishing communities because boats can no longer reach the open sea, so families lose the income they depend on.' },
    ],
  },

  q2_: {
    marks: 8,
    exemplar:
      'Students are collecting primary data from two locations, upstream at Akosombo and downstream at Ada. Two perspectives will make the investigation more reliable in order to help students understand how the changing river flow affects communities both above and below the dam. However, the students did not test the water quality, for example the salinity of the river near the delta. Water quality is as important as the quantity of water because salt water moving upstream can ruin rice paddies and clam fisheries, so by not investigating this the results may be less reliable. Although multiple perspectives were collected, the lack of salinity testing means that, overall, the investigation will be unsuccessful.',
    keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'primary data', 'two locations', 'perspectives', 'water quality', 'reliable', 'salinity', 'salt water', 'delta'],
    feedbackHit: 'Well done — you weighed strengths and limitations of the action plan and reached an overall appraisal.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain strength(s) AND limitation(s), then give an overall judgement. You need not discuss both strengths and limitations of every part. Suggesting alternative methods counts as addressing limitations.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the action plan (one sentence referring to a single strength).', exemplar: 'Data from two locations is used.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the action plan (one strength elaborated; brief detail).', exemplar: 'Students are collecting primary data from two locations, upstream and downstream of the dam.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the action plan — one strength elaborated in additional detail with reasoning. (3+ strengths can also reach 3.)', exemplar: 'Students are collecting primary data from two locations. Two perspectives will make the investigation more reliable in order to help students understand how the changing river flow affects communities both above and below the dam.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the investigation (one sentence referring to a single limitation).', exemplar: 'The students did not test the water quality.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the investigation (one limitation elaborated; brief detail).', exemplar: 'The students did not test the water quality, for example the salinity near the delta.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the investigation — one limitation elaborated in detail with reasoning. (3+ limitations can also reach 3.)', exemplar: '…Water quality is as important as the quantity of water because salt water moving upstream can ruin rice paddies and clam fisheries. By not investigating this, the results may be less reliable.' },
      { marks: 'Appraisal 1', descriptor: 'States an appraisal of the investigation (a summary of strengths/limitations or a brief judgment; can appear anywhere).', exemplar: 'Overall, the investigation will be unsuccessful.' },
      { marks: 'Appraisal 2', descriptor: 'Outlines an appraisal — weighs up both positive and negative points (implicitly or explicitly) and makes an overall judgement on the students’ investigative process.', exemplar: 'Although multiple perspectives were collected, the lack of salinity testing means that, overall, the investigation will be unsuccessful.' },
    ],
  },

  q3_a: {
    marks: 2,
    exemplar: 'To what extent would planting mangroves along the Volta delta at Ada reduce coastal erosion?',
    keyConcepts: ['investigation', 'research question', 'sustainability'],
    keywords: ['research question', 'clear', 'focused', 'location', 'strategy', 'statement of inquiry', 'mangroves', 'coastal erosion'],
    feedbackHit: 'Well done — a research question that is both clear and focused (a place and a strategy) and connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ scores 1; one that is BOTH clear AND focused (e.g. specifies a location and a strategy) and connected to the SoI scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused, and connected to the statement of inquiry.', exemplar: 'To what extent would mangroves protect communities who live on the coast? (clear and connected, but lacks focus — no location specified)' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused (a place and strategy) and connected to the statement of inquiry.', exemplar: 'To what extent would planting mangroves along the Volta delta at Ada reduce coastal erosion?' },
    ],
  },

  q3_b: {
    marks: 4,
    exemplar:
      'Ada sits on the Volta delta and has lost land to coastal erosion since the dam reduced the sediment reaching the coast. Mangroves can be effective in reducing erosion because their dense roots trap sediment and absorb wave energy. Therefore, if the local council understood how mangroves could be planted and protected, they could slow the loss of land and protect the delta community.',
    keyConcepts: ['investigation', 'relevance', 'reasoning'],
    keywords: ['mangroves', 'coastal erosion', 'trap sediment', 'wave energy', 'protect the community', 'worthy of investigating', 'reasoning'],
    feedbackHit: 'Well done — you justified, with reasoning, how investigating the RQ will help the council protect the environment and community.',
    feedbackMiss: 'Build from stating a simple connection (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is relevant to the SoI (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how investigating their research question will help the local council to better protect the environment and the community (a simple connection between SoI and RQ).', exemplar: 'Mangroves can be effective in reducing coastal erosion.' },
      { marks: '2', descriptor: 'Outlines how investigating their research question will help the council (brief detail on relevance to the SoI).', exemplar: 'Mangroves can be effective in reducing erosion because their roots trap sediment and absorb wave energy.' },
      { marks: '3', descriptor: 'Describes how investigating their research question will help the council — at least one factor in detail, without full reasoning.', exemplar: 'Ada sits on the Volta delta and has lost land to erosion since the dam reduced sediment. Mangroves can reduce erosion because their dense roots trap sediment and absorb wave energy.' },
      { marks: '4', descriptor: 'Justifies how investigating their research question will help the council — at least one factor in detail, along with reasoning for why the RQ is relevant to the SoI.', exemplar: '…Therefore, if the local council understood how mangroves could be planted and protected, they could slow the loss of land and protect the delta community.' },
    ],
  },

  q3_c: {
    marks: 1,
    exemplar: 'Satellite shoreline imagery showing the retreat of the coast at the named location.',
    keyConcepts: ['sources', 'reliability'],
    keywords: ['secondary source', 'satellite shoreline imagery', 'coastal-monitoring agency', 'erosion data', 'reliable', 'specific'],
    feedbackHit: 'Correct — a specific, reliable secondary source for the investigation.',
    feedbackMiss: 'Name one specific reliable secondary source (e.g. satellite shoreline imagery for the named coast, a national coastal-monitoring agency’s erosion records, or dam-release data from the power authority). General or vague responses such as “websites” or “the internet” score 0.',
    commandTerm: 'Identify',
    commandTermDefinition: 'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    blankAnswers: ['Satellite shoreline imagery for (named location)', 'National coastal-monitoring agency erosion data', 'Dam-release records from the power authority'],
  },

  q3_d: {
    marks: 4,
    exemplar:
      'Satellite shoreline imagery will help me see exactly where the coast at Ada has retreated and identify the villages and farmland closest to the eroding shoreline. I would need to understand which communities have lost the most land in recent years so I am able to make judgements as to whether mangroves should be planted along the Volta delta.',
    keyConcepts: ['sources', 'usefulness', 'reasoning'],
    keywords: ['satellite shoreline imagery', 'communities', 'closest to the shoreline', 'lost land', 'judgements', 'mangroves'],
    feedbackHit: 'Well done — you explained, with reasons, how the source helps you investigate your research question.',
    feedbackMiss: 'Build from stating a basic way the source helps (1) → outlining (2) → describing a benefit in detail (3) → explaining with reasons (4).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how the secondary source will help investigate the research question (hints at a basic way it would help).', exemplar: 'Satellite imagery will help me see where the coast at Ada has retreated.' },
      { marks: '2', descriptor: 'Outlines how the secondary source will help (a single elaborated benefit; brief detail).', exemplar: 'Satellite imagery will help me see where the coast has retreated and identify the villages and farmland closest to the eroding shoreline.' },
      { marks: '3', descriptor: 'Describes how the secondary source helps — one benefit in detail without comprehensive reasons; an example may support it.', exemplar: '…I would need to understand which communities have lost the most land in recent years.' },
      { marks: '4', descriptor: 'Explains how the secondary source helps — one benefit in detail, along with reasons (an example may support it).', exemplar: '…so I am able to make judgements as to whether mangroves should be planted along the Volta delta.' },
    ],
  },

  q3_e: {
    marks: 1,
    exemplar: 'Unable to access dam-release records from the power authority.',
    keyConcepts: ['investigation', 'challenges'],
    keywords: ['challenge', 'dam-release records', 'reliable data', 'tides', 'fieldwork timing', 'limitation'],
    feedbackHit: 'Correct — a specific challenge you could face in your investigation.',
    feedbackMiss: 'State one specific challenge (e.g. unable to access dam-release records; difficult to locate reliable erosion data; tides make fieldwork timing difficult). Vague responses such as “not enough data” or “the weather” score 0.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Unable to access dam-release records', 'Difficult to locate reliable erosion data', 'Tides make fieldwork timing difficult'],
  },

  q4_: {
    marks: 18,
    exemplar:
      'INTRODUCTION: I live in Niger, a country in the Sahel on the southern edge of the Sahara. We have a long dry season and rainfall that varies a great deal from year to year, so drought is a serious and regular hazard for our farmers and herders.\n\n' +
      'How does your country make sure communities still have safe drinking water during a drought? Where I live, villages have built and repaired boreholes and hand pumps so that people can reach groundwater even when surface rivers dry up. Many communities also harvest rainwater in the wet season and store it in covered tanks. The government and aid agencies run an early-warning system that watches rainfall and crop data, so water can be trucked to the worst-hit villages before wells run dry. Experts believe these steps cut the number of people forced to walk many kilometres for water, which keeps children in school and reduces the spread of disease.\n\n' +
      'How are the economic impacts of drought on farmers managed in your country? Farmers are encouraged to plant drought-resistant millet and to use the "zaï" pit technique, which catches scarce rainwater around each seedling. Microinsurance schemes pay out when the rains fail, so a bad year does not push families into debt. This protects farm incomes and limits the long-term economic damage of drought.\n\n' +
      'CONCLUSION: By securing drinking water through boreholes and early warning, and by protecting farm incomes with drought-resistant crops and insurance, Niger successfully manages both the social and economic impacts of drought.',
    keyConcepts: ['management & intervention', 'systems', 'causality', 'communication'],
    keywords: ['drought', 'Sahel', 'Niger', 'borehole', 'groundwater', 'rainwater harvesting', 'early-warning system', 'drought-resistant millet', 'zaï pits', 'microinsurance', 'introduction', 'conclusion', 'named location'],
    feedbackHit: 'Well done — a presentation script explaining how drought is managed, answering two questions from two categories, with an introduction, conclusion and named locations.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Answer two questions from two different categories, write in presentation/first-person style for MYP4 students, and include an introduction, a conclusion and named location(s).',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge: outlines how drought is successfully managed, using limited examples and limited relevant terminology.', exemplar: 'Where I live in Niger, villages dig boreholes so people can reach water when the rivers dry up during a drought.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge: describes how drought is successfully managed, using satisfactory examples and appropriate relevant terminology.', exemplar: 'I live in Niger, a country in the Sahel… Villages have built boreholes and hand pumps and harvest rainwater in covered tanks so communities still have safe drinking water during a drought.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge: explains how drought is successfully managed, using accurate examples and appropriate relevant terminology.', exemplar: '…The government and aid agencies run an early-warning system that watches rainfall and crop data, so water can be trucked to the worst-hit villages before wells run dry. Farmers also plant drought-resistant millet and use zaï pits to catch scarce rainwater.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge: thoroughly explains how drought is successfully managed, using accurate and effective examples and appropriate relevant terminology.', exemplar: '…Microinsurance schemes pay out when the rains fail, so a bad year does not push families into debt, protecting farm incomes and limiting the long-term economic damage of drought.' },
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
    exemplar: 'The brief includes a scale (1 cm = 0.5 km) that would help the city planners determine how far away Plot Z is from the market district.',
    keyConcepts: ['source evaluation', 'value', 'scale'],
    keywords: ['scale', 'distance', 'Plot Z', 'market district', 'value', 'city planners'],
    feedbackHit: 'Well done — you outlined one value of the source for the city planners, with elaboration.',
    feedbackMiss: 'Build from stating a value (1) → outlining a value with elaboration (2), e.g. the brief includes a scale that helps planners judge how far Plot Z is from the market district.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one value of Source A (a brief comment on the value of the map for city planners).', exemplar: 'The brief includes a scale.' },
      { marks: '2', descriptor: 'Outlines one value of Source A (elaborates on a value of the map for city planners).', exemplar: 'The brief includes a scale (1 cm = 0.5 km) that would help the city planners determine how far away Plot Z is from the market district.' },
    ],
  },

  q5_b: {
    marks: 4,
    exemplar:
      'The brief lacks important detail like the location of schools and clinics. If the area is to be developed for housing, the location of schools is important information because the population would increase and there would be more children who need to travel to school. The city planners need this information to determine whether Plot Z would be more suitable for housing or for the container yard.',
    keyConcepts: ['source evaluation', 'limitation', 'management & intervention'],
    keywords: ['limitation', 'lacks detail', 'location of schools', 'housing', 'container yard', 'informed decision', 'Plot Z'],
    feedbackHit: 'Well done — you explained one limitation of the source, with reasoning, for the city planners’ decision.',
    feedbackMiss: 'Build from stating a limitation (1) → outlining (2) → describing in detail (3) → explaining with reasoning (4), e.g. the brief lacks detail such as school locations, which planners need to decide housing vs container yard.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source A that could prevent the planners from making an informed decision about how to develop Plot Z.', exemplar: 'The brief lacks important detail.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source A (a brief sentence about the limitation to city planners).', exemplar: 'The brief lacks important detail like the location of schools and clinics.' },
      { marks: '3', descriptor: 'Describes one limitation of Source A in detail; reasoning is not required for “describe”. An example may support it.', exemplar: '…The city planners need this information to determine whether Plot Z would be more suitable for housing or for the container yard.' },
      { marks: '4', descriptor: 'Explains one limitation of Source A in detail with reasoning. An example may support it.', exemplar: '…If the area is to be developed for housing, the location of schools is important information because the population would increase and there would be more children who need to travel to school.' },
    ],
  },

  q6_: {
    marks: 6,
    exemplar:
      'Tema is Ghana’s largest seaport and the city profits mainly from trade passing through it, so it is attractive to migrants looking for work. As many migrants are already drawn to this city, the people don’t need more port jobs first, they need somewhere to live: more than a third of residents live in overcrowded housing and the population grows every year because of urbanization. The growing population needs ‘Plot Z’ to be used for housing. There is already a busy container yard and a market district that provide jobs, and a protected wetland next to the site limits how far the port could safely expand anyway. If we expand the container yard instead of building housing, the shortage of affordable homes will get worse and overcrowding will limit the economic growth of Tema, because workers will not stay if they have nowhere to live.',
    keyConcepts: ['urbanization', 'management & intervention', 'disparity & equity', 'reasoning'],
    keywords: ['housing', 'container yard', 'migrants', 'seaport', 'trade', 'wetland', 'market district', 'overcrowded', 'population', 'rationale', 'both opinions'],
    feedbackHit: 'Well done — you justified your decision in detail, referring to both opinions and drawing on the sources.',
    feedbackMiss: 'Choose an opinion (build housing OR expand the container yard), then justify it in detail with supporting reasons from Sources A and B, referring to BOTH options. Referring to only one option caps at 3 marks.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States their rationale (a brief rationale). If only one option is referred to, the student can still be awarded 1 mark.', exemplar: 'The growing population needs ‘Plot Z’ to be used for housing.' },
      { marks: '2–3', descriptor: 'Outlines their rationale — elaborates with details that add weight to their perspective. (Referring to only one option caps at 3 marks.)', exemplar: 'The growing population needs ‘Plot Z’ to be used for housing, as there is already a busy container yard and a market district that provide jobs.' },
      { marks: '4–5', descriptor: 'Justifies their rationale — the rationale is considered in some detail, with supporting reasons and reference to both options.', exemplar: 'As many migrants are already drawn to this city, the people need somewhere to live first… more than a third of residents live in overcrowded housing… and a protected wetland next to the site limits how far the port could safely expand anyway.' },
      { marks: '6', descriptor: 'Justifies in detail their rationale — considered in detail with supporting reason(s) provided, referring to both options.', exemplar: '…If we expand the container yard instead of building housing, the shortage of affordable homes will get worse and overcrowding will limit the economic growth of Tema, because workers will not stay if they have nowhere to live.' },
    ],
  },

  q7_: {
    marks: 24,
    exemplar:
      'Living in a megacity decreases quality of life to a significant extent for some indicators, but the picture is mixed. On one hand, megacities such as Lagos concentrate work and economic opportunity, raising financial wellbeing for migrants who find employment; this draws millions and supports a vibrant community life. On the other hand, the quality of environment falls sharply: congestion in megacities causes severe air pollution, and overcrowded informal settlements undermine personal safety and health, with limited clean water and sanitation. Social relationships can suffer too, as long commutes and high living costs leave little time for family. Weighing these perspectives, living in a megacity decreases quality of life to a large extent through environmental degradation and pressure on health and safety — yet for those who secure stable work, the economic gains can offset this. The overall impact therefore depends on which quality-of-life indicators matter most to the individual and on how well the megacity is managed.',
    keyConcepts: ['urbanization', 'disparity & equity', 'sustainability', 'causality', 'synthesis'],
    keywords: ['megacity', 'quality of life', 'health', 'work', 'financial wellbeing', 'quality of environment', 'personal safety', 'congestion', 'pollution', 'Lagos', 'perspectives', 'conclusion', 'synthesis'],
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
