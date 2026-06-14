import 'server-only'

/**
 * MYP Integrated Humanities — May 2023 mark scheme (rubric-banded).
 *
 * I&S answers are open-ended, so every entry carries the IB band descriptors plus
 * worked exemplar responses at each band (`rubricBands`) — surfaced to the student
 * on submission and in the downloadable exam report. `exemplar` holds the top-band
 * model answer (kept for the shared grading/results consumers); the extra fields
 * (`commandTerm`, `commandTermDefinition`, `rubricBands`) are optional and ignored
 * by consumers that don't use them.
 */

export interface RubricBand {
  marks: string // e.g. '0', '1', '2–3', '7–8'
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
    marks: 4,
    exemplar:
      'The UN has helped to maintain international peace after WW2 with the intention to promote collective security. Members of the UN respond to certain violations with military and economic sanctions. By using these sanctions, the UN is able to influence countries to follow international law and customs to ensure a decent standard of living around the world and to prevent other conflicts.',
    keyConcepts: ['international institutions', 'peace', 'stability', 'cooperation', 'collective security'],
    keywords: ['UN', 'United Nations', 'sanctions', 'collective security', 'international law', 'WW2', 'peace'],
    feedbackHit: 'You named a specific institution and explained how it improved peace/stability/cooperation, with clear reasoning (the strand that lifts you to 4 marks).',
    feedbackMiss: 'Make sure you name a specific institution (no institution = 0 marks) and add a REASON for how it improved peace/stability/cooperation — describing what it does without reasoning caps you at 3.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below. Note: if no international institution or organization is mentioned, 0 marks must be awarded.' },
      { marks: '1', descriptor: 'The student STATES how one international institution or organization has improved either peace, stability or cooperation in the world. A (1 mark) response is likely to be a brief sentence.', exemplar: 'The UN has helped to maintain international peace.' },
      { marks: '2', descriptor: 'The student OUTLINES how one international institution or organization has improved either peace, stability or cooperation in the world. A (2 marks) response is likely to be a single sentence that is elaborated on; the detail provided will be brief.', exemplar: 'The UN has helped to maintain international peace after WW2 with the intention to promote collective security.' },
      { marks: '3', descriptor: 'The student DESCRIBES how one international institution or organization has improved either peace, stability or cooperation in the world. Responses should be considered in detail without any comprehensive reason given. An example may be used to support the description. At this level, responses may include many examples or details but WITHOUT clear reasoning.', exemplar: 'The UN has helped to maintain international peace after WW2 with the intention to promote collective security. Members of the UN respond to violations of peace with sanctions.' },
      { marks: '4', descriptor: 'The student EXPLAINS how one international institution or organization has improved either peace, stability or cooperation in the world. Responses should be considered in detail, along with a reason. An example may be given to support the explanation but is not essential to be awarded (4 marks).', exemplar: 'The UN has helped to maintain international peace after WW2 with the intention to promote collective security. Members of the UN respond to certain violations with military and economic sanctions. By using these sanctions, the UN is able to influence countries to follow international law and customs to ensure a decent standard of living around the world and to prevent other conflicts.' },
    ],
  },

  q2_: {
    marks: 2,
    exemplar: 'To stop coastal water deterioration, countries need to prevent pollution by disposing of chemicals properly.',
    keyConcepts: ['global challenges', 'cooperation', 'resolution', 'sustainability'],
    keywords: ['climate change', 'disease', 'migration', 'pollution', 'economic inequality', 'cooperation', 'resolve'],
    feedbackHit: 'You identified a specific global challenge and outlined a concrete way it could be resolved with elaboration.',
    feedbackMiss: 'Don’t just reword the prompt (that scores 0). Name a real global challenge and explain HOW it could be resolved, adding a brief detail to reach 2 marks.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below. Note: a rewording of the context of the question will be awarded 0 marks (e.g. "There needs to be cooperation between countries to stop climate change"). Responses must focus on HOW the challenge could be resolved. Responses need to include a global challenge, if not 0 marks must be awarded.' },
      { marks: '1', descriptor: 'The student STATES how one current global challenge could be resolved. A (1 mark) response is likely to be one sentence including brief details on the challenge.', exemplar: 'To stop coastal water deterioration, countries need to prevent pollution.' },
      { marks: '2', descriptor: 'The student OUTLINES how one current global challenge could be resolved. A (2 mark) response is likely to be a single sentence with a challenge that is elaborated on; the detail provided will be brief.', exemplar: 'To stop coastal water deterioration, countries need to prevent pollution by disposing of chemicals properly.' },
    ],
  },

  q3_: {
    marks: 8,
    exemplar:
      'STRENGTHS: The action plan includes detailed information on the four tasks to be completed such as team strategy, a brainstorm session, the sources to look at and writing the report. Establishing a clear plan before the start of the investigation helps to understand all the work there is to do. LIMITATIONS: The research question "What is cultural strength?" is too vague for this investigation. It doesn’t name a superpower or an empire. As such, the information found might not be focused enough to help fully understand the importance of cultural strength for a superpower or an empire. APPRAISAL: Overall, the action plan is good, it has some strengths as it includes clear tasks to complete but it could also be improved with a focused research question.',
    keyConcepts: ['investigation', 'action plan', 'strengths and limitations', 'appraisal', 'research question', 'primary/secondary sources'],
    keywords: ['action plan', 'team strategy', 'brainstorm', 'research question', 'vague', 'focused', 'appraisal', 'cultural strength', 'superpower', 'empire'],
    feedbackHit: 'You weighed up strengths AND limitations of the plan with elaboration and reasoning, and made an overall appraisal that judges the investigative process — covering all three strands.',
    feedbackMiss: 'An evaluation needs all three strands: strengths, limitations, AND an appraisal that weighs them up. A vague "it’s good but could improve" appraisal that could apply to any plan only earns 1 — tie it to specific features (e.g. the vague research question).',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      { marks: 'Strengths 0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: 'Strengths 1', descriptor: 'The student STATES the strength(s) of the action plan. Only one strength needs to be mentioned to warrant 1 mark. A (1 mark) response can be one sentence that refers to a single strength.', exemplar: 'The action plan includes detailed information on the tasks to be completed.' },
      { marks: 'Strengths 2', descriptor: 'The student OUTLINES the strength(s) of the action plan. Only one strength needs to be mentioned and elaborated on to warrant 2 marks. However, if a student outlines 3 or more strengths, they can be awarded 3 marks. A (2 marks) response is likely to be a single sentence with two clauses or two/three short sentences; the detail provided will be brief.', exemplar: 'The action plan includes detailed information on the tasks to be completed such as team strategy, a brainstorm session, the sources to look at and writing the report.' },
      { marks: 'Strengths 3', descriptor: 'The student EXPLAINS the strength(s) of the action plan. Only one strength needs to be mentioned and elaborated on in additional detail with reasoning to warrant 3 marks. If a student outlines 3 or more strengths, they can be awarded 3 marks.', exemplar: 'The action plan includes detailed information on the four tasks to be completed such as team strategy, a brainstorm session, the sources to look at and writing the report. Establishing a clear plan before the start of the investigation helps to understand all the work there is to do.' },
      { marks: 'Limitations 0', descriptor: 'The student does not reach a standard described by any of the descriptors below. Note: suggesting alternative methods can be interpreted as addressing limitations.' },
      { marks: 'Limitations 1', descriptor: 'The student STATES the limitation(s) of the action plan. Only one limitation needs to be mentioned to warrant 1 mark. A (1 mark) response can be one sentence that refers to a single limitation.', exemplar: 'The research question is too vague for this investigation.' },
      { marks: 'Limitations 2', descriptor: 'The student OUTLINES the limitation(s) of the action plan. Only one limitation needs to be mentioned and elaborated on to warrant 2 marks. However, if a student outlines 3 or more limitations, they can be awarded 3 marks. A (2 mark) response is likely to be a single sentence with two clauses or two/three short sentences; the detail provided will be brief.', exemplar: 'The research question is too vague for this investigation. It doesn’t name a superpower or an empire.' },
      { marks: 'Limitations 3', descriptor: 'The student EXPLAINS the limitation(s) of the action plan. Only one limitation needs to be mentioned and elaborated on in additional detail with reasoning to warrant 3 marks. If a student outlines 3 or more limitations, they can be awarded 3 marks.', exemplar: 'The research question is too vague for this investigation. It doesn’t name a superpower or an empire. As such, the information found might not be focused enough to help fully understand the importance of cultural strength for a superpower or an empire.' },
      { marks: 'Appraisal 0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: 'Appraisal 1', descriptor: 'The appraisal is STATED. Responses will give an overall appraisal without referencing aspects of the investigation to support it. It may be a general or vague comment that could apply to any investigation.', exemplar: 'Overall, the action plan is good, it has some strengths, but it could also be improved.' },
      { marks: 'Appraisal 2', descriptor: 'The appraisal is OUTLINED. The appraisal statement will weigh up both positive and negative points and make an overall judgement on the students’ investigative process. The appraisal can appear anywhere in the response; it does not have to be a concluding statement.', exemplar: 'Overall, the action plan is good, it has some strengths as it includes clear tasks to complete but it could also be improved with a focused research question.' },
    ],
  },

  q4_a: {
    marks: 2,
    exemplar: 'To what extent did military strength affect the United States after WW2? (clear AND focused AND connected to a superpower) — 2 marks.',
    keyConcepts: ['research question', 'clarity', 'focus', 'investigation'],
    keywords: ['research question', 'clear', 'focused', 'superpower', 'empire', 'factor', 'time period'],
    feedbackHit: 'Your research question is both clear and focused, naming a superpower/empire plus a specific aspect (time period or effect).',
    feedbackMiss: 'A clear-but-broad RQ caps at 1 mark. Add focus — a specific time period, a specific effect, or another specific aspect of the factor — to reach 2 marks. A bare bullet point starting with a question word earns 0.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. A bullet point with a question term at the start should be awarded 0 marks.' },
      { marks: '1', descriptor: 'The student formulates a research question that is EITHER clear OR focused AND connected to the investigation. The RQ is clear (you can easily understand the intention) and connected to the investigation of a superpower or empire, but lacks focus as it doesn’t specify, for example, a specific time or other specific aspects related to the country, the effect, or the chosen factor. NOTE: A response that doesn’t include a superpower/empire but that includes two specific aspects can be awarded 1 mark.', exemplar: '#1 To what extent did military strength affect the United States? / #2 How has the military affected the United States?' },
      { marks: '2', descriptor: 'The student formulates a research question that is BOTH clear AND focused AND connected to the investigation. The first RQ focuses on a superpower and a time period; the second focuses on a superpower and an effect (negatively).', exemplar: '#1 To what extent did military strength affect the United States after WW2? / #2 How has the military affected the United States negatively?' },
    ],
  },

  q4_b: {
    marks: 4,
    exemplar:
      'The research question will help to find out about how military strength helped the United States after WW2. During this period, military expansion was unlike any other in the United States’ history as they relied on a large army due to the ongoing Cold War between them and the Soviet Union.',
    keyConcepts: ['justification', 'relevance', 'research question', 'reasoning'],
    keywords: ['relevant', 'research question', 'investigation', 'reasoning', 'Cold War', 'military strength'],
    feedbackHit: 'You justified the RQ’s relevance by considering an argument in detail AND giving the reasoning that makes it relevant to investigating a superpower/empire.',
    feedbackMiss: 'Don’t just repeat the question (caps at 2). Develop one argument in detail (gets you to 3) and add the REASON why the RQ is relevant to the investigation to reach 4.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: '1', descriptor: 'The student STATES how the research question is relevant to the purpose of the investigation. No detail is required; a single sentence making a simple connection. A response that could apply to any research is likely to be awarded this level.', exemplar: 'The research question will help to find out about US military strength. / My question is relevant to the investigation that is about the effect of a factor on a superpower/empire and is linked to the investigation while being clear and focused.' },
      { marks: '2', descriptor: 'The student OUTLINES how the research question is relevant to the purpose of the investigation. Likely a single sentence with two clauses or two/three short sentences providing brief detail. General or vague information that repeats the content of the question without adding new details is likely to be awarded this level as a maximum.', exemplar: 'The research question will help to find out about how military strength helped the United States after WW2.' },
      { marks: '3', descriptor: 'The student DESCRIBES how the research question is relevant to the purpose of the investigation. At least one argument/factor should be considered in detail without providing reasoning why the RQ is relevant. More important than length is the quality and depth provided.', exemplar: 'The research question will help to find out about how military strength helped the United States after WW2. During this period, military expansion was unlike any other in the United States’ history.' },
      { marks: '4', descriptor: 'The student JUSTIFIES how the research question is relevant to the purpose of the investigation. At least one argument/factor should be considered in detail, along with reasoning why the RQ is relevant. More important than length is the quality and depth provided.', exemplar: 'The research question will help to find out about how military strength helped the United States after WW2. During this period, military expansion was unlike any other in the United States’ history as they relied on a large army due to the ongoing Cold War between them and the Soviet Union.' },
    ],
  },

  q4_c: {
    marks: 1,
    exemplar: 'A speech from a US president at the time (on military policy during the Cold War).',
    keyConcepts: ['primary source', 'investigation', 'relevance'],
    keywords: ['primary source', 'interview', 'photographs', 'speech', 'specialist', 'specific'],
    feedbackHit: 'You named a specific primary source clearly linked to your investigation and RQ.',
    feedbackMiss: 'A generic "interview" or "photograph" isn’t specific enough. State a detailed primary source (e.g. "an interview with a military specialist") so its link to your RQ is clear.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      { marks: '0', descriptor: 'Response does not state a primary source that is detailed enough to clearly link to the investigation/RQ. For example, "interview/photograph/speech" alone are not specific enough for 1 mark.' },
      { marks: '1', descriptor: 'The student states one primary source that is detailed enough so that a link to the investigation and/or RQ is clear. Accept any valid response relevant to the student’s investigation. Responses may include: an interview with a military specialist; photographs of US military equipment; a speech from a US president at the time.' },
    ],
  },

  q4_d: {
    marks: 2,
    exemplar: 'I would use my notepad and highlight the main points.',
    keyConcepts: ['recording information', 'method', 'note-taking'],
    keywords: ['notepad', 'record', 'highlight', 'main points', 'notes'],
    feedbackHit: 'You outlined a recording method with an elaborating detail (e.g. highlighting the main points).',
    feedbackMiss: 'A bare method ("I’d use my notepad") earns 1. Add a brief detail on HOW you’d record/organise the information to reach 2.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'The student STATES how information from the source would be recorded. A (1 mark) response is likely to be one brief sentence.', exemplar: 'I would use my notepad.' },
      { marks: '2', descriptor: 'The student OUTLINES how information from the source would be recorded. A (2 marks) response is likely to be a single sentence with detail that is elaborated on; the detail provided will be brief.', exemplar: 'I would use my notepad and highlight the main points.' },
    ],
  },

  q4_e: {
    marks: 1,
    exemplar: 'A biography of a US political figure during the Cold War.',
    keyConcepts: ['secondary source', 'investigation', 'relevance'],
    keywords: ['secondary source', 'book', 'biography', 'essay', 'Cold War', 'specific'],
    feedbackHit: 'You named a specific secondary source clearly linked to your investigation and RQ.',
    feedbackMiss: 'A generic "book" or "essay" isn’t specific enough. State a detailed secondary source (e.g. "a book on the Cold War") so its link to your RQ is clear.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      { marks: '0', descriptor: 'Response does not state a secondary source that is detailed enough to clearly link to the investigation/RQ. For example, "book/biography/essay" alone are not specific enough for 1 mark.' },
      { marks: '1', descriptor: 'The student states one secondary source that is detailed enough so that a link to the investigation and RQ is clear. Accept any valid response relevant to the student’s investigation. Responses may include: a book on the Cold War; a biography of a US political figure during the Cold War; an essay on military warfare.' },
    ],
  },

  q4_f: {
    marks: 2,
    exemplar: 'I would keep the team focused on the tasks by reminding everyone of our common goal.',
    keyConcepts: ['collaboration', 'teamwork', 'investigation management'],
    keywords: ['team', 'collaborate', 'focused', 'common goal', 'tasks', 'roles'],
    feedbackHit: 'You outlined a collaboration strategy with an elaborating detail (e.g. reminding the team of the common goal).',
    feedbackMiss: 'A bare statement ("keep the team focused") earns 1. Add a brief detail on HOW you’d ensure effective collaboration to reach 2.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      { marks: '1', descriptor: 'The student STATES how to make sure the team would collaborate effectively during the investigation. A (1 mark) response is likely to be one brief sentence.', exemplar: 'I would keep the team focused on the tasks.' },
      { marks: '2', descriptor: 'The student OUTLINES how to make sure the team would collaborate effectively during the investigation. A (2 mark) response is likely to be a single sentence with detail that is elaborated on; the detail provided will be brief.', exemplar: 'I would keep the team focused on the tasks by reminding everyone of our common goal.' },
    ],
  },

  q5_: {
    marks: 18,
    exemplar:
      '[Criterion A, 6 marks] Fair Trade certification products mean that you are getting a quality product, that workers receive fair wages, safe working conditions, and access to education and healthcare. Fair Trade helps provide farming families and small-scale producers with the income and stability they need to keep their children in school, instead of in the fields. From Nicaragua to India, farmer and worker associations have used Fair Trade funds to provide school supplies, pay for tuition and uniforms, set up scholarship programs, and finance free, healthy meals for children. Not only does Fair Trade help the planet, but the people too. As consumers, the next time you are grocery shopping with your family, be sure to look for the green sticker on products. All you need to do is to start with only one product, like bananas from the Dominican Republic and then make the switch! Convince your family and friends to do it too! The market for Fairtrade products continues to grow every year, and the more we support it, the more this growth will continue and the more the low-income producers will benefit. Buy fair and be fair. [Slide / C1, 2 marks] Slogan: "Buy fair and be fair." Three points: (1) Fair wages and safe working conditions; (2) Income to keep children in school; (3) The Fairtrade market grows every year. [C2/C3] Written as a persuasive speech addressing the audience directly with rhetorical devices, first-person plural, and a logical introduction-body-conclusion structure.',
    keyConcepts: ['sustainability', 'responsible consumption and production', 'stakeholders', 'persuasive speech', 'fair trade', 'SDG 12'],
    keywords: ['sustainable production', 'consumption', 'Fair Trade', 'stakeholders', 'producers', 'consumers', 'slogan', 'persuasive', 'rhetorical question', 'first person'],
    feedbackHit: 'Strong response: you explained with reasoning and specific examples how sustainable production/consumption benefits a stakeholder (Crit A), included a slide with a slogan plus 3+ points (C1), wrote in a consistently persuasive speech style addressing the audience directly (C2), and structured ideas logically with transitions (C3).',
    feedbackMiss: 'Avoid copying from Source B (scores 0 in Crit A). Use specific, detailed examples with reasoning, write it as a SPEECH (address the audience, use first person plural and rhetorical devices — not an essay), include both a slogan AND three points on the slide, and organise into clear introduction/body/conclusion with transitions.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors. Note: Elements taken directly from the source should not be awarded any marks. Knowledge demonstrated in the presentation slide can contribute to the marks awarded for criterion A.' },
      { marks: 'CritA 1', descriptor: 'The student demonstrates LIMITED knowledge and understanding by OUTLINING how sustainable production and consumption can benefit stakeholders, using limited examples and limited relevant terminology. Responses are likely to be brief, with little detail. Terminology may be limited in accuracy and/or frequency.', exemplar: 'Fair Trade farming families have good income and stability. (slide) Convince your family and friends to buy fair trade!' },
      { marks: 'CritA 2–3', descriptor: 'The student demonstrates ADEQUATE knowledge and understanding by DESCRIBING how sustainable production and consumption can benefit stakeholders, using satisfactory examples, and appropriate relevant terminology. Examples might be lacking in detail, vague or not the most appropriate. Likely little or no reasoning. Terminology used accurately in the correct context.', exemplar: 'Fair Trade farming families have good income and stability. Not only does Fair Trade help the planet, but the people too. As consumers, the next time you are grocery shopping with your family, be sure to look for the green sticker on products. All you need to do is to start with only one product, and then make the switch! Convince your family and friends to do it too! The market for Fairtrade products continues to grow every year. Buy fair and be fair.' },
      { marks: 'CritA 4–5', descriptor: 'The student demonstrates SUBSTANTIAL knowledge and understanding by EXPLAINING how sustainable production and consumption can benefit stakeholders, using accurate examples, and appropriate relevant terminology. Students need to demonstrate good understanding of how fair trade supports local communities with a detailed response, calling on appropriate specific example(s). Some reasoning is provided.', exemplar: 'Fair Trade certification products mean that you are getting a quality product and that workers have good working conditions. Fair Trade helps provide farming families and small scale producers with the income and stability they need to keep their children in school, instead of in the fields... start with only one product, like bananas from the Dominican Republic... the more we support it, the more this growth will continue and the more the low-income producers will benefit.' },
      { marks: 'CritA 6', descriptor: 'The student demonstrates DETAILED knowledge and understanding by THOROUGHLY EXPLAINING how responsible production and consumption can benefit stakeholders, using accurate and effective descriptions and examples, and appropriate relevant terminology. Very detailed and provides clear reasoning, making use of specific and detailed example(s); comprehensive understanding of Fair Trade and/or sustainable consumption.', exemplar: 'Fair Trade certification products mean... workers receive fair wages, safe working conditions, and access to education and healthcare... From Nicaragua to India, farmer and worker associations have used Fair Trade funds to provide school supplies, pay for tuition and uniforms, set up scholarship programs, and finance free, healthy meals for children...' },
      { marks: 'C1 0', descriptor: 'The student does not achieve a standard described by any of the descriptors. Note: If the slogan and points are entered into the answer box provided for the presentation script, this should still be rewarded.' },
      { marks: 'C1 1', descriptor: 'ONE of the following features are included in the presentation slide: a slogan to draw attention to the topic; at least three points related to their speech.' },
      { marks: 'C1 2', descriptor: 'TWO of the following features are included in the presentation slide: a slogan to draw attention to the topic; at least three points related to their speech.' },
      { marks: 'C2 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C2 1–2', descriptor: 'The student communicates information and ideas using a style and language that are RARELY appropriate to the format of persuasive speech for an audience of stakeholders. Language is rarely clear/appropriate; reads more formally like an essay. Language is basic/simple and doesn’t engage the audience effectively. Text may be extremely short (5-6 lines or less).' },
      { marks: 'C2 3–4', descriptor: 'The student communicates information and ideas using a style and language that are OCCASIONALLY appropriate to the format of persuasive speech for an audience of stakeholders. Language clear and appropriate; reads at times like an essay and at times like a presentation. (A speech written more like an essay = 3 marks; more like a speech = 4 marks.) Some language features (first person singular/plural, adverbs/adjectives, hyperbole, metaphor, rhetorical questions, concise sentences, emotive vocabulary). Award 4 marks for the use of first person singular/plural.' },
      { marks: 'C2 5–6', descriptor: 'The student communicates information and ideas using a style and language that are CONSISTENTLY appropriate to the format of persuasive speech for an audience of stakeholders. Reads like a persuasive speech throughout, including by addressing the audience directly. Language features often used to engage the audience. Including elements such as "dear colleagues/friends" and "thank you for listening" along with other language features can be considered consistently appropriate.' },
      { marks: 'C3 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C3 1', descriptor: 'The student structures information and ideas in a way that is RARELY effective and appropriate to the audience of stakeholders and the purpose of persuading. Ideas rarely build on each other logically. Rarely uses effective transitions. Text may be extremely short (5-6 lines or less); text may read like a list of items.' },
      { marks: 'C3 2', descriptor: 'The student structures information and ideas in a way that is OCCASIONALLY effective and appropriate. Ideas occasionally build on each other logically. Sometimes uses effective transitions within/between sentences and/or paragraphs.' },
      { marks: 'C3 3', descriptor: 'The student structures information and ideas in a way that is MAINLY effective and appropriate. Ideas frequently build on each other logically. Often uses effective transitions.' },
      { marks: 'C3 4', descriptor: 'The student structures information and ideas in a way that is CONSISTENTLY effective and appropriate. Ideas consistently build on each other in a clear and logical manner. Always uses effective transitions within/between sentences and/or paragraphs.' },
    ],
  },

  q6_a: {
    marks: 1,
    exemplar: 'Tom Publishing, Wisconsin, United States.',
    keyConcepts: ['origin', 'source evaluation', 'publisher'],
    keywords: ['origin', 'Tom Publishing', 'Wisconsin', 'United States', 'publisher'],
    feedbackHit: 'You identified the publisher/origin (e.g. "Tom Publishing"), which is sufficient.',
    feedbackMiss: 'The location alone ("Wisconsin, United States") is not enough — name the publisher (e.g. "Tom Publishing") as the origin.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      { marks: '0', descriptor: 'Response does not state the origin sufficiently. Note: only stating "Wisconsin, United States" is not sufficient to earn 1 mark.' },
      { marks: '1', descriptor: 'The student states the origin of Source C. Responses may include: Tom Publishing, Wisconsin, United States; Tom Publishing; https://countryeconomy.com/demography/population-structure/singapore.' },
    ],
  },

  q6_b: {
    marks: 1,
    exemplar: 'To give information about population.',
    keyConcepts: ['purpose', 'source evaluation', 'intended audience'],
    keywords: ['purpose', 'inform', 'teach', 'show changes', 'population'],
    feedbackHit: 'You stated a valid purpose of the source in your own words (e.g. to inform/teach about population).',
    feedbackMiss: 'State the purpose in your own words — e.g. to inform/teach about or show changes in population. Don’t copy text straight from the source.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      { marks: '0', descriptor: 'Response does not state a valid purpose, or copies directly from the source.' },
      { marks: '1', descriptor: 'The student states the purpose of Source C. Responses may include: to give information about population; to show changes in population; to teach about population. Accept any valid response that is not copied from the source.' },
    ],
  },

  q6_c: {
    marks: 2,
    exemplar: 'It allows students to compare population patterns across two different years.',
    keyConcepts: ['value of a source', 'source evaluation', 'content', 'origin', 'purpose'],
    keywords: ['value', 'compare', 'two years', 'population patterns', '1972', '1986'],
    feedbackHit: 'You outlined a specific value of the source with elaboration (e.g. comparing population across two different years).',
    feedbackMiss: 'A bare value ("it gives good information") earns 1. Elaborate on WHY it’s valuable for studying population patterns (e.g. lets you compare 1972 vs 1986) to reach 2.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. Note: Responses may include content (accuracy/objectivity, scope/perspectives, depth, layout/communication), origin (bias, how recent, country/author, reliability, citations), purpose (intended audience, platform, facts or opinions).' },
      { marks: '1', descriptor: 'The student STATES the value of the source to a student studying population patterns. Only one value needs to be mentioned to warrant 1 mark. A (1 mark) response can be one sentence that refers to a single value.', exemplar: 'It gives good information on population patterns.' },
      { marks: '2', descriptor: 'The student OUTLINES the value of the source to a student studying population patterns. Only one value needs to be mentioned and elaborated on to warrant 2 marks. A (2 mark) response is likely to be a single sentence with two clauses or two/three short sentences; the detail provided will be brief.', exemplar: 'It allows students to compare population patterns across two different years.' },
    ],
  },

  q6_d: {
    marks: 2,
    exemplar: 'The source does not explain why the population changed to be narrower at the base and wider at the top.',
    keyConcepts: ['limitation of a source', 'source evaluation', 'content', 'origin', 'purpose'],
    keywords: ['limitation', 'does not explain', 'why', 'population changes', 'base', 'top'],
    feedbackHit: 'You outlined a specific limitation with elaboration (e.g. the source doesn’t explain WHY the pyramid shape changed).',
    feedbackMiss: 'A bare limitation ("it doesn’t explain changes") earns 1. Elaborate on WHAT specifically it fails to explain (e.g. why the base narrowed and top widened) to reach 2.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. Note: Responses may include content (accuracy/objectivity, scope/perspectives, depth, layout/communication), origin (bias, how recent, country/author, reliability, citations), purpose (intended audience, platform, facts or opinions). Suggesting alternative methods can be interpreted as addressing limitations.' },
      { marks: '1', descriptor: 'The student STATES the limitation of the source to a student studying population patterns. Only one limitation needs to be mentioned to warrant 1 mark. A (1 mark) response can be one sentence that refers to a single limitation.', exemplar: 'The source does not explain population changes.' },
      { marks: '2', descriptor: 'The student OUTLINES the limitation of the source to a student studying population patterns. Only one limitation needs to be mentioned and elaborated on to warrant 2 marks. A (2 mark) response is likely to be a single sentence with two clauses or two/three short sentences; the detail provided will be brief.', exemplar: 'The source does not explain why the population changed to be narrower at the base and wider at the top.' },
    ],
  },

  q7_: {
    marks: 6,
    exemplar:
      'In 1972, there was lots of young people and fewer older people, the prime minister might have been worried about population becoming too large and so they might not be able to provide sufficient basic goods, such as food and clothing for everyone. By 1986 the percentage of people under 19 had fallen and the percentage living longer had increased, he might have worried about the population becoming too small so this could mean that there would not be enough young workers to support an aging population.',
    keyConcepts: ['population pyramids', 'demographic change', 'justification', 'data interpretation', 'ageing population'],
    keywords: ['population pyramid', '1972', '1986', 'young people', 'under 19', 'ageing', 'negative growth', 'workers', 'data'],
    feedbackHit: 'You fully justified both slogans using pyramid data for BOTH years (e.g. large young population in 1972, falling under-19s and ageing by 1986) with detailed reasoning about why the PM’s policy reversed.',
    feedbackMiss: 'Use data from BOTH 1972 and 1986 (one year alone caps at 4). Give reasons rooted in the pyramid shapes (don’t just quote the slogans), and develop DETAILED reasoning for each year — e.g. fears of overpopulation vs. an ageing population without enough workers — to reach 6.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. Note: If the student only considers either 1972 or 1986, the maximum mark that can be awarded is 4 marks (best-fit applied). A response that only includes reasons for both years should be awarded 2 marks as a maximum. Including the slogans in the response is not considered as details and should not be rewarded. Mark positively.' },
      { marks: '1', descriptor: 'The student STATES why the prime minister chose to use one of the different slogans in 1972 and 1986. Responses refer to limited data/details for one year (1972 or 1986).', exemplar: 'In 1972 there was lots of young people.' },
      { marks: '2–3', descriptor: 'The student OUTLINES why the prime minister chose to use the two different slogans in 1972 and 1986 with limited reference to data from the population pyramids. (2 marks) responses refer to limited data/details for both years. (3 marks): both years considered with fuller data and some reasoning.', exemplar: '(2) In 1972 there was lots of young people. By 1986 the percentage of people under 19 had fallen. (3) In 1972, there was lots of young people and fewer older people. By 1986 the percentage of people under 19 had fallen and the percentage living longer had increased.' },
      { marks: '4–5', descriptor: 'The student JUSTIFIES why the prime minister chose to use the two different slogans in 1972 and 1986, with reference to data from the population pyramids. (4 marks): data/details for both years and reasoning for ONE of the two years (if only one year is considered, max 4 marks). (5 marks): data/details for both years and reasoning for BOTH years.', exemplar: '(4) In 1972, there was lots of young people and fewer older people, the prime minister might have been worried about the population becoming too large. By 1986 the percentage of people under 19 had fallen and the percentage living longer had increased. (5) ...by 1986... he might have worried about the population becoming too small.' },
      { marks: '6', descriptor: 'The student FULLY JUSTIFIES why the prime minister chose to use the two different slogans in 1972 and 1986, with reference data from the population pyramids. Responses refer to data/details for both years (1972 and 1986) and include DETAILED reasoning for both years.', exemplar: 'In 1972, there was lots of young people and fewer older people, the prime minister might have been worried about population becoming too large and so they might not be able to provide sufficient basic goods, such as food and clothing for everyone. By 1986 the percentage of people under 19 had fallen and the percentage living longer had increased, he might have worried about the population becoming too small so this could mean that there would not be enough young workers to support an aging population.' },
    ],
  },

  q8_: {
    marks: 24,
    exemplar:
      '[Crit A 7–8] A thorough explanation using accurate, effective examples and appropriate terminology: e.g. as population grows, demand for LAND (natural resources such as minerals and forests) rises, accelerating deforestation and mineral extraction; growth in LABOUR supply enables greater production, while CAPITAL (machines) increases output per worker and ENTREPRENEURSHIP combines these resources efficiently — each point supported with reasons and detail referencing at least one Source D resource. [Crit D 7–8] Different perspectives are equally balanced and detailed (e.g. population growth increasing pressure on resources vs. resource availability shaping where populations grow; comparisons across different countries or historical situations) and synthesised into a clear, coherent and convincing conclusion directly answering "to what extent". [Crit C] Three paragraphs (introduction, main body, conclusion) as separate paragraphs (C1=2); consistently appropriate formal essay style with rich, precise vocabulary (C2=3); consistently clear and logical organization with effective transitions (C3=3).',
    keyConcepts: ['population change', 'resources', 'factors of production', 'perspectives', 'synthesis', 'to what extent'],
    keywords: ['population', 'resources', 'capital', 'labour', 'land', 'entrepreneurship', 'perspectives', 'synthesis', 'conclusion', 'MYP examples'],
    feedbackHit: 'Top-band essay: you explained the population–resources relationship in detail with accurate examples referencing at least one Source D resource (Crit A), discussed at least two balanced, detailed perspectives synthesised into a clear and convincing conclusion answering "to what extent" (Crit D), and wrote a well-structured formal essay with intro/body/conclusion as separate paragraphs and rich vocabulary (Crit C).',
    feedbackMiss: 'Cover BOTH sides — give at least two equally-developed perspectives (one perspective caps Crit D at 1–2) and finish with a synthesised conclusion that explicitly says "to what extent". In Crit A, reference at least one Source D resource (capital/labour/land/entrepreneurship) with detailed, reasoned examples. For Crit C, write three separate paragraphs (intro/body/conclusion) in formal essay style.',
    commandTerm: 'To what extent',
    commandTermDefinition: 'Consider the merits or otherwise of an argument or concept; weigh up evidence and arrive at a conclusion.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'CritA 1–2', descriptor: 'The student demonstrates LIMITED contextual and conceptual understanding in an OUTLINE, using limited examples and limited terminology. Responses likely brief, with little detail. Requirement to include a resource as per the question. Terminology may be limited in accuracy and/or frequency.' },
      { marks: 'CritA 3–4', descriptor: 'The student demonstrates ADEQUATE contextual and conceptual understanding in a DESCRIPTION, using satisfactory examples and appropriate terminology. Evident knowledge of at least one resource; examples accurate but might be lacking in detail or not the most appropriate. Some reasoning but examples/terminology/detail not sufficient. Terminology accurately used in the correct context.' },
      { marks: 'CritA 5–6', descriptor: 'The student demonstrates SUBSTANTIAL contextual and conceptual understanding in an EXPLANATION, using accurate examples and appropriate terminology. Very good understanding of at least one resource; an explanation requires reasons to be included. Calls on appropriate examples that support points. Terminology accurate and effective in most of the essay.' },
      { marks: 'CritA 7–8', descriptor: 'The student demonstrates DETAILED contextual and conceptual understanding in a THOROUGH EXPLANATION, using accurate and effective examples and appropriate terminology. Accurate detail throughout and clear reasons supporting points, with examples demonstrating comprehensive understanding of at least one resource. References examples in detail. Quite different responses may be awarded the same mark.' },
      { marks: 'C1 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C1 1', descriptor: 'TWO of the following elements are included: introduction; a main body of argument; a conclusion. The elements must appear as separate paragraphs. If this is not the case, 0 marks should be awarded.' },
      { marks: 'C1 2', descriptor: 'THREE of the following elements are included: introduction; a main body of argument; a conclusion. The elements must appear as separate paragraphs.' },
      { marks: 'C2 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below. Note: the use of first-person singular is appropriate and formal in the context of a "to what extent" question (e.g. "I believe that [...]").' },
      { marks: 'C2 1', descriptor: 'The style and language used are RARELY appropriate. Style rarely consistent with an essay. Language rarely clear, use of basic, familiar, vague words. Text may be extremely short (5-6 lines or less).' },
      { marks: 'C2 2', descriptor: 'The style and language used are OCCASIONALLY appropriate. Style not always consistent. Language is less clear in places.' },
      { marks: 'C2 3', descriptor: 'The style and language used are CONSISTENTLY appropriate. Style consistent with an essay. Language formal and clear, and the vocabulary is rich and precise.' },
      { marks: 'C3 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      { marks: 'C3 1', descriptor: 'The organizational structure is RARELY effective. Paragraphs/ideas sometimes build on each other logically. Rarely uses effective transitions. Text may be extremely short (5-6 lines or less).' },
      { marks: 'C3 2', descriptor: 'The organizational structure is OCCASIONALLY effective. Paragraphs/ideas build on each other in a mainly logical manner. Sometimes uses effective transitions within/between sentences and/or paragraphs.' },
      { marks: 'C3 3', descriptor: 'The organizational structure is CONSISTENTLY appropriate and effective. Paragraphs/ideas build on each other in consistently clear and logical manner. Uses effective transitions within/between sentences and/or paragraphs.' },
      { marks: 'CritD 0', descriptor: 'The student does not reach a standard described by any of the descriptors below. Note: a response with one perspective is likely 1-2 marks; a response with no conclusion indicating to what extent is likely 1-2 marks.' },
      { marks: 'CritD 1–2', descriptor: 'The student provides ONE perspective in a BASIC ANALYSIS and summarizes information to a limited extent in response to the question posed. One perspective only considered superficially, i.e. only general or vague points are made. The response might not reach a conclusion or fully answer the question.' },
      { marks: 'CritD 3–4', descriptor: 'The student provides DIFFERENT perspectives in an ANALYSIS and summarizes information to make clear arguments in response to the question posed. At least two perspectives with development showing some understanding; the perspectives will not be equally considered/balanced. A conclusion is expected but is likely to be not fully developed at this level.' },
      { marks: 'CritD 5–6', descriptor: 'The student provides DIFFERENT perspectives in an ANALYSIS and SYNTHESIZES information to make clear arguments in response to the question posed. At least two perspectives with development showing good understanding; the perspectives must be equally considered/balanced but might not be highly detailed. Ideas on the relationship between changes in population and changes in resources combined to form a clear and coherent conclusion (synthesis in body or conclusion).' },
      { marks: 'CritD 7–8', descriptor: 'The student provides DIFFERENT perspectives in a DETAILED DISCUSSION and SYNTHESIZES information to make clear arguments in response to the question posed. At least two perspectives with thorough development showing excellent understanding; perspectives must be equally considered/balanced AND detailed. Ideas combined into a clear, coherent and convincing conclusion (synthesis in body or conclusion). Quite different responses may be awarded the same mark.' },
    ],
  },
}
