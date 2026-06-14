import 'server-only'

/**
 * MYP Geography — November 2024 mark scheme (rubric-banded, "best fit").
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
 * All descriptors and example responses are transcribed faithfully from the IB
 * November 2024 markscheme (geogmmoeengtz0xxm).
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
    exemplar: 'Europe',
    keyConcepts: ['patterns & trends', 'population'],
    keywords: ['Europe', 'over 65', 'ageing', 'population structure', '19%'],
    feedbackHit: 'Correct — Europe has the highest percentage of over 65 year olds (19%).',
    feedbackMiss: 'Read the “Over 65 year olds” (blue) bars: Europe is highest at 19%. Award 1 mark for Europe.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    blankAnswers: ['Europe'],
  },

  q1_b: {
    marks: 1,
    exemplar: 'Youthful',
    keyConcepts: ['patterns & trends', 'population'],
    keywords: ['Youthful', 'Africa', 'under 15', 'over 65', 'population structure'],
    feedbackHit: 'Correct — Africa has a Youthful population structure (40% under 15, only 3% over 65).',
    feedbackMiss: 'A region with a very high under-15 share (40%) and a very low over-65 share (3%) is Youthful. Award 1 mark for Youthful.',
    commandTerm: 'Select',
    commandTermDefinition: 'Choose from a list or group.',
    blankAnswers: ['Youthful'],
  },

  q2_: {
    marks: 4,
    exemplar:
      'Life expectancy is higher with improved health care. Easier access to doctors for older people creates a healthier population with more people living over 65 years old.',
    keyConcepts: ['causality', 'geographic processes', 'population'],
    keywords: ['ageing populations', 'life expectancy', 'health care', 'access to doctors', 'over 65'],
    feedbackHit: 'Well done — you explained one cause of ageing populations in detail, with reasons.',
    feedbackMiss: 'Build from naming a cause (1) → outlining it (2) → describing it (3) → explaining it in detail with reasons (4). One cause considered well is enough.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'The student states one cause of ageing populations. (A 1-mark response could be just naming a cause.)', exemplar: 'Improved health care' },
      { marks: '2', descriptor: 'The student outlines one cause of ageing populations. (Likely a single sentence with brief detail.)', exemplar: 'Life expectancy is higher with improved health care.' },
      { marks: '3', descriptor: 'The student describes one cause of ageing populations. (One way considered in detail without comprehensive reason(s); a short paragraph is likely.)', exemplar: 'Life expectancy is higher with improved health care with easier access to doctors for older people.' },
      { marks: '4', descriptor: 'The student explains one cause of ageing populations. (One way considered in detail, along with reason(s); an example may support but is not essential.)', exemplar: 'Life expectancy is higher with improved health care. Easier access to doctors for older people creates a healthier population with more people living over 65 years old.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'A range of statistics including hospital admissions are used, which the government can use to decide if they need to invest in more hospitals for the population. However, only 40 nursing home residents will be interviewed from over 1.5 million people. The sample size is too small so the information gathered from this is unlikely to be representative of the ageing population. Although a range of statistics will be collected, the small sample size for interviews is not reliable which means that, overall, the investigation will be unsuccessful.',
    keyConcepts: ['investigation', 'methods', 'reliability', 'evaluation'],
    keywords: ['strengths', 'limitations', 'appraisal', 'statistics', 'hospital admissions', 'sample size', 'representative', '40 residents', 'reliable'],
    feedbackHit: 'Well done — you weighed strengths and limitations and reached an overall appraisal of the investigation.',
    feedbackMiss: 'Marked across three strands — Strengths /3, Limitations /3, Appraisal /2. Outline/explain a strength AND a limitation, then weigh them into one overall judgement. Suggesting alternative methods counts as addressing a limitation.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 1', descriptor: 'States the strength(s) of the action plan (one sentence referring to a single strength).', exemplar: 'A range of statistics are used.' },
      { marks: 'Strengths 2', descriptor: 'Outlines the strength(s) of the action plan (single strength elaborated; brief detail).', exemplar: 'A range of statistics including hospital admissions are used.' },
      { marks: 'Strengths 3', descriptor: 'Explains the strength(s) of the action plan (a single strength elaborated in additional detail with reasoning).', exemplar: 'A range of statistics including hospital admissions are used, which the government can use to decide if they need to invest in more hospitals for the population.' },
      { marks: 'Limitations 1', descriptor: 'States the limitation(s) of the action plan (one sentence referring to a single limitation).', exemplar: 'Only 40 nursing home residents will be interviewed.' },
      { marks: 'Limitations 2', descriptor: 'Outlines the limitation(s) of the action plan (single limitation elaborated; brief detail).', exemplar: 'Only 40 nursing home residents will be interviewed from over 1.5 million people.' },
      { marks: 'Limitations 3', descriptor: 'Explains the limitation(s) of the action plan (a single limitation elaborated in detail with reasoning; suggesting alternative methods counts).', exemplar: 'Only 40 nursing home residents will be interviewed from over 1.5 million people. The sample size is too small so the information gathered from this is unlikely to be representative of the ageing population.' },
      { marks: 'Appraisal 1', descriptor: 'States an appraisal of the action plan — a summary of the strengths and limitations or a brief judgement (anywhere in the response).', exemplar: 'Overall, the investigation will be unsuccessful.' },
      { marks: 'Appraisal 2', descriptor: 'Outlines an appraisal of the action plan — weighs up both positive and negative points and makes an overall judgement on the investigative process.', exemplar: 'Although a range of statistics will be collected, the small sample size for interviews is not reliable which means that, overall, the investigation will be unsuccessful.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'How has the Syrian refugee migration to Germany changed its population structure?',
    keyConcepts: ['investigation', 'research question', 'migration'],
    keywords: ['research question', 'clear', 'focused', 'named migration', 'place', 'statement of inquiry', 'time, place and space'],
    feedbackHit: 'Well done — a research question that is both clear and focused (a named migration movement to a specified place) and connected to the statement of inquiry.',
    feedbackMiss: 'A clear OR focused RQ connected to the SoI scores 1; one that is BOTH clear AND focused — naming a specific migration movement and place/time — scores 2.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'Formulates a research question that is either clear OR focused and connected to the statement of inquiry. (Clear but lacks focus — no specific migration movement or time period.)', exemplar: 'How has migration to Germany changed its population structure?' },
      { marks: '2', descriptor: 'Formulates a research question that is both clear AND focused and connected to the statement of inquiry (a named migration movement to a specified place).', exemplar: 'How has the Syrian refugee migration to Germany changed its population structure?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'Syrian refugees were usually young men, creating more workers for Germany. This increase in the economically active population could impact the dependency ratio in Germany. Therefore, people could understand how migration can help with the negative impacts of high dependency ratios and ageing populations.',
    keyConcepts: ['investigation', 'relevance', 'reasoning', 'migration'],
    keywords: ['Syrian refugees', 'young men', 'workers', 'economically active', 'dependency ratio', 'ageing populations', 'relevant to SoI'],
    feedbackHit: 'Well done — you justified, with reasoning, how investigating the RQ helps readers understand migration’s role in changing population structures.',
    feedbackMiss: 'Build from stating a simple connection (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning why the RQ is relevant to the SoI (4).',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how investigating their RQ will help them understand the role migration has in changing population structures (a simple connection between SoI and RQ).', exemplar: 'Syrian refugees created more workers for Germany.' },
      { marks: '2', descriptor: 'Outlines how investigating their RQ will help (a single sentence with two clauses, or two/three short sentences; brief detail).', exemplar: 'Syrian refugees were usually young men, creating more workers for Germany.' },
      { marks: '3', descriptor: 'Describes how investigating their RQ will help (at least one argument/factor considered in detail without providing reasoning why the RQ is relevant to the SoI).', exemplar: 'Syrian refugees were usually young men, creating more workers for Germany. This increase in the economically active population could impact the dependency ratio in Germany.' },
      { marks: '4', descriptor: 'Justifies how investigating their RQ will help readers understand migration’s role (at least one factor in detail, with reasoning why the RQ is relevant to the SoI).', exemplar: '…This increase in the economically active population could impact the dependency ratio in Germany. Therefore, people could understand how migration can help with the negative impacts of high dependency ratios and ageing populations.' },
    ],
  },

  q4_c: {
    marks: 2,
    exemplar: 'Refugees may not want to be interviewed. There will not be enough qualitative data.',
    keyConcepts: ['investigation', 'methods', 'challenges'],
    keywords: ['challenge', 'refugees', 'interviewed', 'qualitative data', 'access'],
    feedbackHit: 'Well done — you outlined a challenge you might face, with brief elaboration.',
    feedbackMiss: 'State a challenge (1) then elaborate it (2), e.g. refugees may not want to be interviewed, so there will not be enough qualitative data.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States a challenge that they might face in their investigation.', exemplar: 'Refugees may not want to be interviewed.' },
      { marks: '2', descriptor: 'Outlines a challenge that they might face in their investigation.', exemplar: 'Refugees may not want to be interviewed. There will not be enough qualitative data.' },
    ],
  },

  q4_d: {
    marks: 2,
    exemplar: 'I could collect quantitative data by carrying out a survey.',
    keyConcepts: ['investigation', 'methods', 'solutions'],
    keywords: ['overcome', 'quantitative data', 'survey', 'method'],
    feedbackHit: 'Well done — you outlined how you would overcome the challenge from part (c).',
    feedbackMiss: 'State how you would overcome the challenge (1) then elaborate it (2), e.g. collect quantitative data by carrying out a survey.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States how they would attempt to overcome the challenge they outlined.', exemplar: 'I could collect quantitative data.' },
      { marks: '2', descriptor: 'Outlines how they would attempt to overcome the challenge they outlined.', exemplar: 'I could collect quantitative data by carrying out a survey.' },
    ],
  },

  q4_e: {
    marks: 2,
    exemplar: 'Syrian refugees in Germany; business owners in Germany.',
    keyConcepts: ['investigation', 'primary data', 'stakeholders'],
    keywords: ['interview', 'Syrian refugees', 'elderly Germans', 'business owners', 'local government', 'stakeholders'],
    feedbackHit: 'Well done — two relevant individuals or groups to interview for your investigation.',
    feedbackMiss: 'List two individuals/groups relevant to YOUR investigation (e.g. Syrian refugees in Germany, elderly Germans, business owners in Germany, local German government).',
    commandTerm: 'List',
    commandTermDefinition: 'Give a sequence of brief answers with no explanation.',
    blankAnswers: ['Syrian refugees in Germany', 'Elderly Germans', 'Business owners in Germany', 'Local German government'],
  },

  q5_: {
    marks: 18,
    exemplar:
      'TITLE/OPENING: “Good evening, neighbours. Location: Cadia Mine, Australia · Natural resource: Gold.” We’ve heard that one of your concerns about Cadia mine is the wastewater being returned to our waterways. We work continuously to ensure that the water is returned to source at a higher quality. We do this through UV filtration and chemical purification because wastewater can contain heavy metals such as arsenic. Our process of chemical filtration pulls the tiny particles together so that we can remove them. The water is tested before it is returned to Flyer’s Creek. We always monitor to ensure your health and the environment is protected. Secondly, we rehabilitate the land we mine — replanting native vegetation once extraction is complete — so the ecosystem can recover. For all these reasons, I ask you to vote in our favour so we can keep extracting responsibly.',
    keyConcepts: ['sustainability', 'management & intervention', 'systems', 'communication'],
    keywords: ['natural resource extraction', 'sustainably', 'wastewater', 'filtration', 'purification', 'heavy metals', 'arsenic', 'conservation', 'monitor', 'persuasive', 'speech', 'Cadia Mine', 'gold'],
    feedbackHit: 'Well done — a persuasive speech explaining two ways your company sustainably extracts the resource, with examples and correct terminology.',
    feedbackMiss: 'Marked across four strands: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Explain TWO sustainable extraction methods with an example, include an intro/body/conclusion and use persuasive language for the residents.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 1', descriptor: 'Limited knowledge & understanding: outlines at least one way the company sustainably extracts the resource using limited examples and limited relevant terminology. (Brief, little detail; an example is not required.)', exemplar: 'We’ve heard that one of your concerns about Cadia mine is the wastewater being returned to our waterways. We use filtration and purification to remove impurities.' },
      { marks: 'CritA 2–3', descriptor: 'Adequate knowledge & understanding: describes two ways the company sustainably extracts the resource using satisfactory examples and appropriate relevant terminology. (Little/no reasoning; examples may lack detail.)', exemplar: '…We work continuously to ensure that the water is returned to source at a higher quality. We do this through filtration and purification to remove impurities. We always monitor to ensure your health and the environment is protected.' },
      { marks: 'CritA 4–5', descriptor: 'Substantial knowledge & understanding: explains two ways the company sustainably extracts the resource, using accurate examples and appropriate relevant terminology. (Detailed; some reasoning.)', exemplar: '…We do this through filtration and purification to remove impurities because wastewater can contain heavy metals such as arsenic. We always monitor to ensure your health and the environment is protected.' },
      { marks: 'CritA 6', descriptor: 'Detailed knowledge & understanding: thoroughly explains two ways the company sustainably extracts the resource using accurate and effective examples and appropriate relevant terminology. (Very detailed, clear reasoning, comprehensive understanding.)', exemplar: '…We do this through UV filtration and chemical purification because wastewater can contain heavy metals such as arsenic. Our process of chemical filtration pulls the tiny particles together so that we can remove them. The water is tested before it is returned to Flyer’s Creek. We always monitor to ensure your health and the environment is protected.' },
      { marks: 'Format 1', descriptor: 'Two of the following are included: introduction/greeting to audience, body, conclusion/closing argument.' },
      { marks: 'Format 2', descriptor: 'Three of the following are included: introduction/greeting to audience, body, conclusion/closing argument.' },
      { marks: 'Communicating 1–2', descriptor: 'The style and language used are rarely appropriate to the format of a speech — the text rarely engages the listener, language may be unclear, persuasive language is rarely used.' },
      { marks: 'Communicating 3–4', descriptor: 'The style and language used are occasionally appropriate to the format of a speech — the text occasionally engages the listener, language is mainly clear and appropriate, persuasive language is mainly used.' },
      { marks: 'Communicating 5–6', descriptor: 'The style and language used are consistently appropriate to the format of a speech — the text engages the listener, language is clear and concise, communicating ideas effectively, persuasive language is used throughout.' },
      { marks: 'Organization 1', descriptor: 'Information and ideas structured in a way that is rarely effective and appropriate — ideas/paragraphs rarely build on each other logically; rarely uses effective transitions.' },
      { marks: 'Organization 2', descriptor: 'Structured in a way that is occasionally effective — ideas/paragraphs occasionally build on each other logically; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'Structured in a way that is mainly effective — ideas/paragraphs frequently build on each other logically; often uses effective transitions.' },
      { marks: 'Organization 4', descriptor: 'Structured in a way that is consistently effective — ideas/paragraphs build on each other in a consistently clear and logical manner; always uses effective transitions.' },
    ],
  },

  q6_a: {
    marks: 2,
    exemplar: 'It informs people about vulnerability to climate change by determining areas most at risk.',
    keyConcepts: ['source evaluation', 'purpose', 'patterns & trends'],
    keywords: ['purpose', 'inform', 'vulnerability', 'climate change', 'areas at risk'],
    feedbackHit: 'Well done — you outlined the purpose of Source A.',
    feedbackMiss: 'State the purpose (1) then elaborate it (2), e.g. it informs people about vulnerability to climate change by determining the areas most at risk.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States the purpose of Source A.', exemplar: 'It informs people about vulnerability to climate change.' },
      { marks: '2', descriptor: 'Outlines the purpose of Source A.', exemplar: 'It informs people about vulnerability to climate change by determining areas most at risk.' },
    ],
  },

  q6_b: {
    marks: 2,
    exemplar: 'The map comes from a reliable source. The policy maker can trust the information.',
    keyConcepts: ['source evaluation', 'value', 'reliability'],
    keywords: ['value', 'reliable source', 'trust', 'information', 'policy maker'],
    feedbackHit: 'Well done — you outlined one value of Source A to the policy maker.',
    feedbackMiss: 'State a value (1) then elaborate it (2), e.g. the map comes from a reliable source, so the policy maker can trust the information.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one value of Source A.', exemplar: 'The map comes from a reliable source.' },
      { marks: '2', descriptor: 'Outlines one value of Source A.', exemplar: 'The map comes from a reliable source. The policy maker can trust the information.' },
    ],
  },

  q6_c: {
    marks: 2,
    exemplar: 'The map gives a value for the whole country rather than by region. One value for an entire country is not specific enough.',
    keyConcepts: ['source evaluation', 'limitation', 'scale'],
    keywords: ['limitation', 'whole country', 'by region', 'not specific', 'scale'],
    feedbackHit: 'Well done — you outlined one limitation of Source A to the policy maker.',
    feedbackMiss: 'State a limitation (1) then elaborate it (2), e.g. it gives one value for the whole country rather than by region, which is not specific enough.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'States one limitation of Source A.', exemplar: 'The map gives a value for the whole country rather than by region.' },
      { marks: '2', descriptor: 'Outlines one limitation of Source A.', exemplar: 'The map gives a value for the whole country rather than by region. One value for an entire country is not specific enough.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'Barcelona is at a lower elevation than Madrid so is at greater risk from coastal flooding caused by sea level rise. Madrid is further inland so is not at risk of coastal flooding. Barcelona is a major port and has 3–5 million containers. Barcelona currently generates one billion euros more from exports than Madrid. Coastal flooding will impact trade, jobs and the environment so climate change would have a more significant negative impact on Barcelona than Madrid.',
    keyConcepts: ['causality', 'disparity & equity', 'management & intervention', 'scale'],
    keywords: ['Barcelona', 'Madrid', 'elevation', 'coastal flooding', 'sea level rise', 'port', 'containers', 'exports', 'trade', 'justify'],
    feedbackHit: 'Well done — a thorough justification referring to both cities with specific evidence for your chosen location.',
    feedbackMiss: 'Justify your choice WITH reference to both cities. Build from a basic supporting argument (1) → describing (2–3) → detailed arguments (4–5) → in-depth arguments with specific details (6). Naming a location with no reason scores 0.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'Limited justification — outlines which location is at greater risk, with reference to both cities (a basic supporting argument). Naming a location with no reason cannot be awarded.', exemplar: 'Barcelona is at a lower elevation than Madrid so is at greater risk.' },
      { marks: '2–3', descriptor: 'Satisfactory justification — describes which location is at greater risk, with reference to both cities (brief arguments; no minimum number of points).', exemplar: 'Barcelona is at a lower elevation than Madrid so is at greater risk from coastal flooding caused by sea level rise. Madrid is further inland so is not at risk of coastal flooding.' },
      { marks: '4–5', descriptor: 'A justification of which location is at greater risk, with reference to both cities (detailed arguments).', exemplar: '…Barcelona is a major port and has 3–5 million containers. Coastal flooding will impact trade.' },
      { marks: '6', descriptor: 'A thorough justification of which location is at greater risk, with reference to both cities — in-depth arguments referring to specific details of why the location was chosen.', exemplar: '…Barcelona currently generates one billion euros more from exports than Madrid. Coastal flooding will impact trade, jobs and the environment so climate change would have a more significant negative impact on Barcelona than Madrid.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      'It is important to a large extent that all countries respond to climate change, but the responsibility is not equally shared. On one hand, climate change is a global problem: greenhouse gases mix across the atmosphere, so emissions from one country raise sea levels and temperatures everywhere — as the UN Secretary-General warned at COP27, “Humanity has a choice: cooperate or perish.” Low-lying Pacific island nations such as Tuvalu contribute almost nothing to emissions yet face being submerged, so a response from every country, especially high emitters like China and the USA, is needed for fairness and for the problem to be solved at all. On the other hand, from an economic and developmental perspective, demanding the same response from every country is unfair: lower-income countries argue that high-income countries caused most historic emissions while industrialising, so wealthier nations should respond first and fund poorer ones (loss-and-damage finance agreed at COP27). Some also argue that without binding enforcement, COP pledges are often not met. Synthesising these perspectives, it is important to a large extent that all countries respond — because the atmosphere is a shared system and tipping points are irreversible — but responses must be differentiated by responsibility and capacity, with the biggest emitters and historic polluters doing the most.',
    keyConcepts: ['global interactions', 'systems', 'sustainability', 'disparity & equity', 'synthesis'],
    keywords: ['climate change', 'all countries', 'COP27', 'Guterres', 'cooperate', 'greenhouse gases', 'emissions', 'high-income', 'low-income', 'historic emissions', 'Pacific islands', 'perspectives', 'synthesis', 'conclusion'],
    feedbackHit: 'Well done — a structured essay weighing different perspectives on whether all countries must respond, with examples and a synthesised conclusion.',
    feedbackMiss: 'Marked across: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8). Give ≥2 developed perspectives, accurate examples and terminology, and a clear conclusion answering “to what extent”.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 1–2', descriptor: 'Demonstrates limited contextual and conceptual understanding in an outline, using limited examples and limited terminology. (Brief, little detail.)' },
      { marks: 'CritA 3–4', descriptor: 'Demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology. (Examples accurate but may lack detail; terminology accurate in context.)' },
      { marks: 'CritA 5–6', descriptor: 'Demonstrates substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate terminology. (Reasons included; very good understanding of climate change; terminology effective in most of the essay.)' },
      { marks: 'CritA 7–8', descriptor: 'Demonstrates detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate terminology. (References examples in detail; comprehensive understanding; terminology effective throughout.)' },
      { marks: 'Format 1', descriptor: 'Two of the following elements are included as separate paragraphs: introduction, a main body of argument or a conclusion.' },
      { marks: 'Format 2', descriptor: 'Three of the following elements are included as separate paragraphs: introduction, a main body of argument and a conclusion.' },
      { marks: 'Communicating 1', descriptor: 'Style and language rarely appropriate to the audience and purpose of informing — rarely consistent with an essay, language rarely clear; text may be extremely short.' },
      { marks: 'Communicating 2', descriptor: 'Style and language occasionally appropriate to the audience and purpose of informing — not always consistent; language less clear in places.' },
      { marks: 'Communicating 3', descriptor: 'Style and language consistently appropriate to the audience and purpose of informing — consistent with an essay; language formal and clear.' },
      { marks: 'Organization 1', descriptor: 'The organizational structure is rarely effective — paragraphs/ideas sometimes build logically; rarely uses effective transitions; text may be extremely short.' },
      { marks: 'Organization 2', descriptor: 'The organizational structure is occasionally effective — paragraphs/ideas build in a mainly logical manner; sometimes uses effective transitions.' },
      { marks: 'Organization 3', descriptor: 'The organizational structure is consistently appropriate and effective — paragraphs/ideas build in a consistently clear and logical manner; uses effective transitions.' },
      { marks: 'CritD 1–2', descriptor: 'Provides one perspective in a basic analysis and summarizes information to a limited extent in response to the question. (One perspective, considered superficially; may not reach a conclusion.)' },
      { marks: 'CritD 3–4', descriptor: 'Provides different perspectives in an analysis and summarizes information to make clear arguments. (At least two perspectives developed to show some understanding; a conclusion is expected but likely not fully developed.)' },
      { marks: 'CritD 5–6', descriptor: 'Provides different perspectives in an analysis and synthesizes information to make clear arguments. (At least two perspectives with substantial development; ideas on countries’ responses combined into a clear, coherent conclusion.)' },
      { marks: 'CritD 7–8', descriptor: 'Provides different perspectives in a detailed discussion and synthesizes information to make clear arguments. (Two or more balanced perspectives with thorough development; ideas combined into a clear, coherent and convincing conclusion/judgement.)' },
    ],
  },
}
