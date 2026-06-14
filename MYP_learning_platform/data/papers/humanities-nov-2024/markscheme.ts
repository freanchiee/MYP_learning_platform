import 'server-only'

/**
 * MYP Integrated Humanities — November 2024 mark scheme (rubric-banded).
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
    marks: 2,
    exemplar: 'Europe and Asia.',
    keyConcepts: ['international migration', 'data interpretation', 'regional comparison'],
    keywords: ['Europe', 'Asia', 'largest increase', 'millions'],
    feedbackHit:
      'You correctly read the chart and identified the two regions with the greatest absolute rise in migrant numbers (Europe +37.1m and Asia +37.4m).',
    feedbackMiss:
      'Look for the largest difference between the 1990 and 2020 values, not the highest 2020 value alone. Europe (49.6→86.7) and Asia (48.2→85.6) both rose by about 37 million.',
    commandTerm: 'Identify',
    commandTermDefinition:
      'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    rubricBands: [
      { marks: '1', descriptor: 'Award (1 mark) for each correct response. Correct responses are: Europe; Asia.' },
      {
        marks: '2',
        descriptor:
          'Both correct regions identified (Europe and Asia). If a student has included more than two regions, award marks for the first two.',
      },
    ],
  },

  q2_: {
    marks: 2,
    exemplar:
      'There is a need for workers to fill jobs as populations are getting older in developed countries.',
    keyConcepts: ['migration', 'push and pull factors', 'labour demand'],
    keywords: ['jobs', 'workers', 'ageing population', 'economic opportunity', 'conflict'],
    feedbackHit:
      'You gave a clear reason and added brief development (the “why”), which lifts a 1-mark statement to a 2-mark outline.',
    feedbackMiss:
      'State a reason (e.g. demand for workers, conflict, better opportunities) and then elaborate it slightly so it is an outline, not just a bare statement.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor: 'The student states one reason international migration has increased over the past five decades.',
        exemplar: 'There is a need for workers to fill jobs. (A 1-mark response is likely to be one sentence that hints at a single reason.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one reason international migration has increased over the past five decades.',
        exemplar:
          'There is a need for workers to fill jobs as populations are getting older in developed countries. (A 2-mark response is likely to be a single sentence with a single reason that is elaborated on; the detail provided will be brief.)',
      },
    ],
  },

  q3_: {
    marks: 2,
    exemplar: 'Migrants bring skills back home and this benefits the country’s economy.',
    keyConcepts: ['migration impacts', 'economic development', 'remittances', 'brain drain/gain'],
    keywords: ['skills', 'economy', 'remittances', 'labour', 'culture', 'population'],
    feedbackHit:
      'You identified an impact and developed it briefly (e.g. linking returning skills to economic benefit), reaching the 2-mark outline.',
    feedbackMiss:
      'Name one impact (economic, social, cultural or demographic) then add a short explanation of its effect so it becomes an outline rather than a bare statement.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor: 'The student states one impact migration can have on a country or region.',
        exemplar: 'Migrants bring skills back home. (A 1-mark response is likely to be one sentence that hints at a single impact.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one impact migration can have on a country or region.',
        exemplar:
          'Migrants bring skills back home and this benefits the country’s economy. (A 2-mark response is likely to be a single sentence with a single impact that is elaborated on; the detail provided will be brief.)',
      },
    ],
  },

  q4_: {
    marks: 8,
    exemplar:
      'The investigation considers many aspects to understand social integration of migrants, such as language and schooling. These will help the local government understand the areas they need to focus on to improve social integration (strength, 3 marks). However, some methods to collect data might not lead to valid information. For example, the survey only asks if the migrants feel that they are part of the community; they would need to define what being part of the community means by adding choices, otherwise the responses might be vague (limitation, 3 marks). Overall, the action plan is good as it considers many aspects to understand integration, but there is room for improvement as they could improve the survey (appraisal, 2 marks).',
    keyConcepts: ['evaluation', 'research methods', 'validity', 'data collection', 'social integration'],
    keywords: [
      'strength',
      'limitation',
      'appraisal',
      'survey',
      'valid data',
      'sense of belonging',
      'language',
      'schooling',
      'healthcare',
      'political participation',
    ],
    feedbackHit:
      'Strong evaluation: you explained at least one strength and one limitation in detail and gave an overall appraisal that weighs both up — covering all three strands (strengths + limitations + appraisal).',
    feedbackMiss:
      'Marks are split across three strands: strengths (max 3), limitations (max 3) and an overall appraisal (max 2). Don’t just list — explain with reasoning (e.g. why the vague survey question weakens validity) and finish with a judgement that reflects your whole answer.',
    commandTerm: 'Evaluate',
    commandTermDefinition: 'Make an appraisal by weighing up the strengths and limitations.',
    rubricBands: [
      {
        marks: 'Strengths 0',
        descriptor:
          'The student does not reach a standard described by any of the descriptors below. Note: A statement with a reason in support is not an explanation; there needs to be details to reach an outline and details in support of the reasoning.',
      },
      {
        marks: 'Strengths 1',
        descriptor:
          'The student states the strength(s) of the action plan. Only one strength needs to be mentioned to warrant 1 mark; quality is rewarded, not number of strengths.',
        exemplar: 'The investigation considers many aspects to understand social integration of migrants.',
      },
      {
        marks: 'Strengths 2',
        descriptor:
          'The student outlines the strength(s) of the action plan. Only one strength needs to be mentioned and elaborated on. If a student outlines 3 or more strengths, they can be awarded 3 marks.',
        exemplar: 'The investigation considers many aspects to understand social integration of migrants such as language and schooling.',
      },
      {
        marks: 'Strengths 3',
        descriptor:
          'The student explains the strength(s) of the action plan. One strength needs to be mentioned and elaborated on in additional detail with reasoning.',
        exemplar:
          'The investigation considers many aspects to understand social integration of migrants such as language and schooling. These will help the local government understand the areas they need to focus on to improve social integration.',
      },
      {
        marks: 'Limitations 0',
        descriptor:
          'The student does not reach a standard described by any of the descriptors below. Note: suggesting alternative methods can be interpreted as addressing limitations. A statement with a reason in support is not an explanation.',
      },
      {
        marks: 'Limitations 1',
        descriptor: 'The student states the limitation(s) of the action plan. Only one limitation needs to be mentioned to warrant 1 mark.',
        exemplar: 'Some methods to collect data might not lead to valid information.',
      },
      {
        marks: 'Limitations 2',
        descriptor:
          'The student outlines the limitation(s) of the action plan. One limitation mentioned and elaborated on. If a student outlines 3 or more limitations, they can be awarded 3 marks.',
        exemplar: 'Some methods to collect data might not lead to valid information. For example, the survey only asks if the migrants feel that they are a part of the community.',
      },
      {
        marks: 'Limitations 3',
        descriptor: 'The student explains the limitation(s) of the action plan. One limitation mentioned and elaborated on in additional detail with reasoning.',
        exemplar:
          'Some methods to collect data might not lead to valid information. For example, the survey only asks if the migrants feel that they are a part of the community. They would need to define what being part of the community means by adding choices, otherwise the responses might be vague.',
      },
      {
        marks: 'Appraisal 0',
        descriptor: 'The student does not reach a standard described by any of the descriptors below.',
      },
      {
        marks: 'Appraisal 1',
        descriptor:
          'The student states an appraisal of the action plan. Likely a summary of the strengths and limitations or a brief judgment on the investigative process. The appraisal can appear anywhere in the response.',
        exemplar: 'Overall, the action plan is good but there is room for improvement.',
      },
      {
        marks: 'Appraisal 2',
        descriptor:
          'The student outlines an appraisal of the action plan. Weighs up both positive and negative points and makes an overall judgement on the investigative process. Must reflect the entire response; if placed at the start it cannot be linked to what follows.',
        exemplar: 'Overall, the action plan is good as it considers many aspects to understand integration but there is room for improvement as they could improve the survey.',
      },
    ],
  },

  q5_a: {
    marks: 2,
    exemplar: 'To what extent is the high unemployment rate impacting migrants in Barcelona, Spain?',
    keyConcepts: ['research question', 'economic integration', 'focus and clarity'],
    keywords: ['clear', 'focused', 'research question', 'location', 'time period', 'specific sector'],
    feedbackHit:
      'Your question is both clear and focused — it specifies a place/aspect/time period and connects directly to economic integration of migrants.',
    feedbackMiss:
      'A 1-mark question is clear but too broad. Add focus by naming a specific location, time period or aspect (e.g. “…in Barcelona, Spain”) to reach 2 marks.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor:
          'The student formulates a research question that is either clear or focused and connected to the research on economic integration of migrants. (Clear = intention is easy to understand, but lacks focus as it doesn’t specify e.g. a location, time period or aspect.)',
        exemplar: 'To what extent is the high unemployment rate impacting migrants? / How easy is it for migrants to find a job?',
      },
      {
        marks: '2',
        descriptor:
          'The student formulates a research question that is both clear and focused and connected to the research on economic integration of migrants. (Both focus on a specific place; focus could also be “quality of life”, “a specific sector of employment”, or a time period.)',
        exemplar: 'To what extent is the high unemployment rate impacting migrants in Barcelona, Spain? / How easy is it for migrants to find a job in Barcelona, Spain?',
      },
    ],
  },

  q5_b: {
    marks: 4,
    exemplar:
      'My research question looks at how many migrants are trying to find work but are unable to find some. The unemployment rate is an indicator that will tell me about the current economic conditions for migrant workers. This will show the local government whether migrants are impacted by unemployment in the same way as local residents. (Justification builds a comprehensive reason on the details of the description.)',
    keyConcepts: ['justification', 'relevance', 'indicators', 'economic integration'],
    keywords: ['unemployment rate', 'indicator', 'economic conditions', 'local government', 'relevant', 'reasoning'],
    feedbackHit:
      'You justified the question fully — giving a specific factor and a comprehensive reason that builds on it to show why it is useful for the local government.',
    feedbackMiss:
      'Move beyond stating relevance: describe a specific factor (e.g. the unemployment rate as an indicator) and then add reasoning explaining why it helps the local government, building depth to reach 4 marks.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor:
          'The student states how the research question is relevant to the research scenario. No detail is required; a simple connection between the scenario and the RQ. Responses may apply to any research.',
        exemplar: 'My research question looks at how many migrants are trying to find work.',
      },
      {
        marks: '2',
        descriptor:
          'The student outlines how the research question is relevant to the research scenario. Brief detail on how the RQ is relevant. General/vague repetition of the question without new specifics is a maximum at this level.',
        exemplar: 'My research question looks at how many migrants are trying to find work but are unable to find some.',
      },
      {
        marks: '3',
        descriptor:
          'The student describes how the research question is relevant to the research scenario. At least one specific argument/factor considered in detail without providing reasoning why the RQ is relevant. Responses include new information that derives from the question.',
        exemplar:
          'My research question looks at how many migrants are trying to find work but are unable to find some. The unemployment rate is an indicator that will tell me about the current economic conditions for migrant workers.',
      },
      {
        marks: '4',
        descriptor:
          'The student justifies how the research question is relevant to the research scenario. At least one specific argument/factor considered in detail, along with reasoning why the RQ is relevant. Responses include a comprehensive reason that builds on the details of the description. More important than length is the quality and depth provided.',
        exemplar:
          'My research question looks at how many migrants are trying to find work but are unable to find some. The unemployment rate is an indicator that will tell me about the current economic conditions for migrant workers. This will show the local government whether migrants are impacted by unemployment in the same way as local residents.',
      },
    ],
  },

  q5_c: {
    marks: 4,
    exemplar:
      'Statistics on the wages of migrants that live in the community. It will allow me to see if migrants are paid enough to support their cost of living. Travel, accommodation and food are more expensive in a large city such as Barcelona. This is important because it can help us determine if migrants have enough money to successfully integrate economically into the community. (One benefit considered in detail, along with reasons.)',
    keyConcepts: ['source evaluation', 'usefulness', 'economic integration', 'explanation'],
    keywords: ['wage statistics', 'cost of living', 'benefit', 'limitation', 'reasons', 'economic integration'],
    feedbackHit:
      'You selected a source and explained in detail how it helps your investigation, supporting your point with reasons that link to economic integration.',
    feedbackMiss:
      'Pick one source and go beyond outlining its benefit — consider it in detail and add reasons (the “why it matters”) to reach the explanation band of 4 marks.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      {
        marks: '0',
        descriptor:
          'The student does not reach a standard described by any of the descriptors below. Note: The response can either focus on the benefit or limitation of the source for the investigation.',
      },
      {
        marks: '1',
        descriptor: 'The student states how the selected source could be beneficial to the investigation.',
        exemplar: 'Statistics on the wages of migrants that live in the community. It will allow me to see if migrants are paid enough. (A 1-mark response is likely to be one sentence that hints at a single benefit.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines how the selected source could be beneficial to the investigation.',
        exemplar:
          'Statistics on the wages of migrants that live in the community. It will allow me to see if migrants are paid enough to support their cost of living. (A 2-mark response is a single sentence with a single benefit that is elaborated on; brief detail.)',
      },
      {
        marks: '3',
        descriptor:
          'The student describes how the selected source could be beneficial to the investigation. One benefit considered in detail without any comprehensive reasons given; an example may support the description.',
        exemplar:
          'Statistics on the wages of migrants that live in the community. It will allow me to see if migrants are paid enough to support their cost of living. Travel, accommodation and food are more expensive in a large city such as Barcelona.',
      },
      {
        marks: '4',
        descriptor:
          'The student explains how the selected source could be beneficial to the investigation. One benefit considered in detail, along with reasons; an example may support the explanation but is not essential.',
        exemplar:
          'Statistics on the wages of migrants that live in the community. It will allow me to see if migrants are paid enough to support their cost of living. Travel, accommodation and food are more expensive in a large city such as Barcelona. This is important because it can help us determine if migrants have enough money to successfully integrate economically into the community.',
      },
    ],
  },

  q5_d: {
    marks: 2,
    exemplar: 'Finding participants to interview who are willing to share their personal financial situation.',
    keyConcepts: ['research challenges', 'data collection', 'ethics', 'economic integration'],
    keywords: ['participants', 'interview', 'financial situation', 'access to data', 'willingness'],
    feedbackHit:
      'You identified a genuine research challenge and developed it briefly (e.g. participants being unwilling to share financial information), reaching the outline level.',
    feedbackMiss:
      'Name one challenge (e.g. finding willing participants, accessing reliable data) and add a short elaboration explaining why it is a challenge to reach 2 marks.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor: 'The student states one challenge they may experience when investigating the economic integration of migrants.',
        exemplar: 'Finding participants to interview. (A 1-mark response is likely to be one sentence that hints at a single challenge.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one challenge they may experience when investigating the economic integration of migrants.',
        exemplar: 'Finding participants to interview who are willing to share their personal financial situation. (A 2-mark response is a single sentence with a single challenge that is elaborated on; brief detail.)',
      },
    ],
  },

  q6_: {
    marks: 18,
    exemplar:
      'Criterion A (6 marks): The social protest movement Black Lives Matter (BLM) has shown that racial discrimination is a global issue when people’s right to inclusion is not met. The movement gained popularity and recognized the work many black people do for their communities. BLM was founded in 2013 in response to the acquittal of Trayvon Martin’s murderer in USA. Its aim is, through protest and raising awareness, to minimise inequality inflicted on black communities. For example, many people were inspired to form their own BLM chapters in their cities to force politicians to deal with the demands of black people. In doing so, black people achieved more rights in work and education and health care. Through their protests and campaigns, BLM has been able to raise awareness of brutality and prejudice against certain minorities and individuals. They also played a role in arguing in favor of policy changes that would benefit the communities and stop future violations of human rights.\n\nThe speech also opens with an address to the audience and closes with a summary/thank-you (C1: Format), reads like a speech throughout using first person, rhetorical questions and emotive vocabulary (C2: 5–6), and ideas build logically with effective transitions (C3: 4).',
    keyConcepts: ['human rights', 'social protest movements', 'civic engagement', 'speech writing'],
    keywords: [
      'Black Lives Matter',
      'right to inclusion',
      'racial discrimination',
      'opening statement',
      'closing statement',
      'rhetorical questions',
      'community',
      'policy change',
    ],
    feedbackHit:
      'Excellent speech: you thoroughly explained how one protest movement (e.g. BLM) reduced human rights violations for a chosen community, with accurate examples and terminology, wrapped in a clear speech format with engaging language and logical structure.',
    feedbackMiss:
      'This is marked across four strands (Crit A knowledge 6, Format 2, Communicating style 6, Organization 4). Make sure you: include an opening and closing; name one specific right, one community and one protest movement; explain with reasons (not just describe); and write in an engaging speech style with logical transitions.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'CritA 1',
        descriptor:
          'Demonstrates limited knowledge and understanding by outlining how one social protest movement has helped to minimize the violation of human rights, using limited examples and limited relevant terminology. Responses likely brief, with little detail; terminology limited in accuracy/frequency.',
        exemplar:
          'The social protest movement Black Lives Matter has shown that racial discrimination is a global issue. The movement gained popularity and recognized the work many black people do for their communities.',
      },
      {
        marks: 'CritA 2–3',
        descriptor:
          'Demonstrates adequate knowledge and understanding by describing how one social protest movement has helped to minimize the violation of human rights, using satisfactory examples and appropriate relevant terminology. Likely little/no reasoning; examples may lack detail. Terminology used accurately in correct context.',
        exemplar:
          'The social protest movement Black Lives Matter has shown that racial discrimination is a global issue when people’s right to inclusion is not met. The movement gained popularity… BLM was founded in 2013 in response to the acquittal of Trayvon Martin’s murderer in USA. Its aim is, through protest and raising awareness, to minimise inequality inflicted on black communities.',
      },
      {
        marks: 'CritA 4–5',
        descriptor:
          'Demonstrates substantial knowledge and understanding by explaining how one social protest movement has helped to minimize the violation of human rights, using accurate examples and appropriate relevant terminology. Some reasoning; detailed response to the question. Terminology accurate and effective.',
        exemplar:
          '…BLM was founded in 2013 in response to Trayvon Martin’s murderer in USA. Its aim is, through protest and raising awareness, to minimise inequality inflicted on black communities. For example, many people were inspired to form their own BLM chapters in their cities. In doing so, black people achieved more rights in work and education and health care.',
      },
      {
        marks: 'CritA 6',
        descriptor:
          'Demonstrates detailed knowledge and understanding by thoroughly explaining how one social protest movement has helped to minimize violation of human rights, using accurate and effective descriptions and explanations, and appropriate relevant terminology. Very detailed with clear reasoning and comprehensive understanding of social protest movements.',
        exemplar:
          '…Through their protests and campaigns, BLM has been able to raise awareness of brutality and prejudice against certain minorities and individuals. They also played a role in arguing in favor of policy changes that would benefit the communities and stop future violations of human rights.',
      },
      { marks: 'C1 0', descriptor: 'Format: The student does not achieve a standard described by any of the descriptors below.' },
      {
        marks: 'C1 1',
        descriptor:
          'Format: Two of the following features are included: an opening to the speech (e.g. “Today, I am going to talk about…” or an introduction/opening remark); a main body; an ending to the speech (e.g. “Thank you for listening” or a summary of main points).',
      },
      {
        marks: 'C1 2',
        descriptor: 'Format: Three of the following features are included: an opening to the speech; a main body; an ending to the speech.',
      },
      { marks: 'C2 0', descriptor: 'Communicating information and ideas: does not achieve a standard described below.' },
      {
        marks: 'C2 1–2',
        descriptor:
          'Communicates information and ideas using a style and language that are rarely appropriate to the format of a speech for an audience of young global leaders and the purpose of explaining. Language rarely clear/appropriate; reads more formally (like an essay); basic/simple; or text extremely short (5–6 lines or less).',
      },
      {
        marks: 'C2 3–4',
        descriptor:
          'Communicates using a style and language occasionally appropriate to a speech. Language clear and appropriate; reads at times like an essay and at times like a speech. Some features such as hyperbole, metaphor, rhetorical questions, concise sentences, emotive vocabulary; first person singular/plural is considered like a speech.',
      },
      {
        marks: 'C2 5–6',
        descriptor:
          'Communicates using a style and language consistently appropriate to a speech. Language clear and completely appropriate; reads like a speech throughout (addresses the audience consistently); features such as hyperbole, metaphor, rhetorical questions, concise sentences and emotive vocabulary often used to engage the audience; first person considered like a speech.',
      },
      { marks: 'C3 0', descriptor: 'Organizational structure: does not achieve a standard described below.' },
      {
        marks: 'C3 1',
        descriptor:
          'Structures information and ideas in a way that is rarely effective and appropriate. Ideas rarely build on each other logically; rarely uses effective transitions; text may be extremely short (5–6 lines).',
      },
      {
        marks: 'C3 2',
        descriptor:
          'Structures information and ideas in a way that is occasionally effective. Ideas occasionally build on each other logically; sometimes uses effective transitions within/between sentences and paragraphs.',
      },
      {
        marks: 'C3 3',
        descriptor:
          'Structures information and ideas in a way that is mainly effective. Ideas frequently build on each other logically; often uses effective transitions.',
      },
      {
        marks: 'C3 4',
        descriptor:
          'Structures information and ideas in a way that is consistently effective and appropriate. Ideas consistently build on each other in a clear and logical manner; always uses effective transitions within/between sentences and paragraphs.',
      },
    ],
  },

  q7_a: {
    marks: 1,
    exemplar: 'Xein Environmental.',
    keyConcepts: ['origin', 'source evaluation', 'OPVL'],
    keywords: ['Xein Environmental', 'charity', 'origin'],
    feedbackHit: 'Correct — the origin is the producer, Xein Environmental.',
    feedbackMiss: 'The origin is simply who produced the source: Xein Environmental (the charity named in the stem).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [{ marks: '1', descriptor: 'Award (1 mark) for Xein Environmental.' }],
  },

  q7_b: {
    marks: 1,
    exemplar: 'To educate the audience about the circular economy.',
    keyConcepts: ['purpose', 'source evaluation', 'OPVL'],
    keywords: ['educate', 'inform', 'circular economy', 'linear economy', 'sustainability', 'gain support'],
    feedbackHit:
      'Correct — you stated a valid purpose (e.g. to educate/inform about the circular economy or to gain support for sustainability).',
    feedbackMiss:
      'Purpose is why the video was made. Valid answers include: to educate about the circular economy, inform about the drawbacks of the linear economy, or gain support for sustainable economies.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      {
        marks: '1',
        descriptor:
          'Accept any valid response. Responses may include: To educate the audience about the circular economy; To inform the audience about the drawbacks of linear economy; To gain support for more sustainable economies.',
      },
    ],
  },

  q7_c: {
    marks: 3,
    exemplar:
      'The video provides a definition of a circular economy which is a method that supports sustainability by continuously reusing resources and reducing waste if implemented in place of a linear economy.',
    keyConcepts: ['value', 'source evaluation', 'OPVL', 'circular economy'],
    keywords: ['definition', 'circular economy', 'sustainability', 'reusing resources', 'reducing waste'],
    feedbackHit:
      'You described one value in detail (e.g. the clear definition of a circular economy and how reusing resources supports sustainability), reaching the top band.',
    feedbackMiss:
      'Go beyond stating a value — consider it in detail. Explain what the video usefully provides (e.g. a definition of the circular economy) and develop how that helps a sustainability student.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account or picture of a situation, event, pattern or process.',
    rubricBands: [
      {
        marks: '0',
        descriptor:
          'The student does not reach a standard described by any of the descriptors below. Note: Responses may refer to content (accuracy/objectivity, scope/perspectives, depth, layout/communication), origin (bias, how recent, country/author – experts/reliability, citations), or purpose (intended audience, platform, facts or opinions).',
      },
      {
        marks: '1',
        descriptor: 'The student states one value of the video for a student studying sustainable development.',
        exemplar: 'The video provides a definition of a circular economy. (A 1-mark response is one sentence that hints at a single value.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one value of the video for a student studying sustainable development.',
        exemplar: 'The video provides a definition of a circular economy which is a method that supports sustainability if implemented. (A 2-mark response is a single sentence with a single value elaborated on; brief detail.)',
      },
      {
        marks: '3',
        descriptor:
          'The student describes one value of the video for a student studying sustainable development. One value considered in detail. More important than length is the quality and depth provided.',
        exemplar:
          'The video provides a definition of a circular economy which is a method that supports sustainability by continuously reusing resources and reducing waste if implemented in place of a linear economy.',
      },
    ],
  },

  q7_d: {
    marks: 3,
    exemplar:
      'The video doesn’t provide much detail on how countries or regions can transition away from a linear economy to support sustainability.',
    keyConcepts: ['limitation', 'source evaluation', 'OPVL', 'circular economy'],
    keywords: ['lack of detail', 'implementation', 'transition', 'bias', 'linear economy', 'sustainability'],
    feedbackHit:
      'You described one limitation in detail (e.g. the video lacks detail on how to actually transition from a linear to a circular economy), reaching the top band.',
    feedbackMiss:
      'Identify a genuine limitation (e.g. lack of detail on implementation, possible bias as a campaigning charity) and develop it in detail rather than just stating it.',
    commandTerm: 'Describe',
    commandTermDefinition: 'Give a detailed account or picture of a situation, event, pattern or process.',
    rubricBands: [
      {
        marks: '0',
        descriptor:
          'The student does not reach a standard described by any of the descriptors below. Note: Responses may refer to content, origin or purpose (as listed for 7c).',
      },
      {
        marks: '1',
        descriptor: 'The student states one limitation of the video for a student studying sustainable development.',
        exemplar: 'The video doesn’t provide much detail on sustainability. (A 1-mark response is one sentence that hints at a single limitation.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one limitation of the video for a student studying sustainable development.',
        exemplar: 'The video doesn’t provide much detail on how a circular economy can be implemented to support sustainability. (A 2-mark response is a single sentence with a single limitation elaborated on; brief detail.)',
      },
      {
        marks: '3',
        descriptor:
          'The student describes one limitation of the video for a student studying sustainable development. One limitation considered in detail. More important than length is the quality and depth provided.',
        exemplar: 'The video doesn’t provide much detail on how countries or regions can transition away from a linear economy to support sustainability.',
      },
    ],
  },

  q8_: {
    marks: 4,
    exemplar:
      'A circular economy can provide a better use of resources, such as those being used to make clothes. There are unwanted textiles like silk and cotton that could be used in new clothes rather than be thrown away. This helps reduce waste going into landfills leading to less pollution.',
    keyConcepts: ['circular economy', 'linear economy', 'sustainability', 'justification'],
    keywords: ['resources', 'reuse', 'textiles', 'waste', 'landfill', 'pollution', 'sustainable'],
    feedbackHit:
      'You justified the switch — one need considered in detail with reasoning (e.g. reusing textiles cuts landfill waste and pollution), using your own words rather than copying the video.',
    feedbackMiss:
      'Don’t just state a need or copy the video. Develop one need in detail and add reasoning (e.g. why reusing resources reduces waste and pollution) to reach the justify band of 4 marks.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      {
        marks: '0',
        descriptor:
          'The student does not reach a standard described by any of the descriptors below. Note: Responses may focus on either the linear or circular economy or both – all approaches are valid and can be fully rewarded; copying the content of the source should not be rewarded.',
      },
      {
        marks: '1',
        descriptor: 'The student states the need to move away from a linear economy to a circular economy.',
        exemplar: 'A circular economy can provide a better use of resources. (A 1-mark response is one sentence that hints at the need without any detail.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines the need to move away from a linear economy to a circular economy.',
        exemplar: 'A circular economy can provide a better use of resources, such as those being used to make clothes. (A 2-mark response is a single sentence with a need elaborated on; brief detail. An example is not a requirement at this level.)',
      },
      {
        marks: '3',
        descriptor:
          'The student describes the need to move away from a linear economy to a circular economy. One need considered in detail without comprehensive reasons; an example may support the description.',
        exemplar: 'A circular economy can provide a better use of resources, such as those being used to make clothes. There are unwanted textiles like silk and cotton that could be used in new clothes rather than be thrown away.',
      },
      {
        marks: '4',
        descriptor:
          'The student justifies the need to move away from a linear economy to a circular economy. One need considered in detail, along with reason(s); an example may be given but is not essential.',
        exemplar:
          'A circular economy can provide a better use of resources, such as those being used to make clothes. There are unwanted textiles like silk and cotton that could be used in new clothes rather than be thrown away. This helps reduce waste going into landfills leading to less pollution.',
      },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'Criterion A (7–8): A thorough explanation of development indicators with accurate detail throughout and clear reasons. For example, GDP measures the total value of goods and services and shows economic growth, but the Human Development Index (HDI) combines income with life expectancy and education to capture quality of life. Using a specific country (e.g. a high-GDP country with low HDI) shows why multiple indicators give a fuller picture. Terminology (GDP, HDI, population dynamics, life expectancy, literacy rate) is used accurately and effectively throughout.\n\nCriterion D (7–8): At least two perspectives are developed thoroughly and balanced — e.g. indicators like HDI and education rates give a much better, multi-dimensional understanding of a region’s development than GDP alone (pro); but indicators can hide inequality, rely on unreliable data, or omit factors like happiness or environment (con). Ideas are synthesized into a clear, coherent and convincing conclusion that gives a judgment on the extent to which development indicators improve understanding. The essay also has a clear introduction, body and conclusion as separate paragraphs (C1: 2), formal clear language appropriate to an essay (C2: 3), and ideas that build logically with effective transitions (C3: 3).',
    keyConcepts: ['development indicators', 'GDP', 'HDI', 'perspectives', 'synthesis', 'quality of life'],
    keywords: [
      'GDP',
      'HDI',
      'development indicators',
      'population dynamics',
      'education',
      'quality of life',
      'perspectives',
      'conclusion',
      'examples',
    ],
    feedbackHit:
      'Top-band essay: you thoroughly explained development indicators with detailed examples (Crit A), weighed at least two balanced perspectives and synthesized them into a convincing judgement (Crit D), all in a well-structured, formally written essay with intro, body and conclusion.',
    feedbackMiss:
      'This is marked across four strands (Crit A knowledge 8, Format 2, Communicating 3, Organization 3, Crit D thinking 8). Make sure you: support arguments with specific examples (e.g. GDP vs HDI for a named place); discuss at least two balanced perspectives; reach a clear conclusion that gives a judgement without introducing new points; and structure the essay in separate intro/body/conclusion paragraphs.',
    commandTerm: 'To what extent',
    commandTermDefinition:
      'Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'CritA 1–2',
        descriptor:
          'Demonstrates limited contextual and conceptual understanding in an outline, using limited examples and limited terminology. Responses brief, with little detail; requirement to include an example; terminology limited in accuracy/frequency.',
      },
      {
        marks: 'CritA 3–4',
        descriptor:
          'Demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology. Evident knowledge of development indicators; example(s) accurate but may lack detail; terminology accurate in correct context.',
      },
      {
        marks: 'CritA 5–6',
        descriptor:
          'Demonstrates substantial contextual and conceptual understanding in an explanation, using accurate examples and appropriate terminology. Very good understanding that responds to the question; reasons included; appropriate examples that support points; terminology accurate and effective in most of the essay.',
      },
      {
        marks: 'CritA 7–8',
        descriptor:
          'Demonstrates detailed contextual and conceptual understanding in a thorough explanation, using accurate and effective examples and appropriate terminology. Accurate detail throughout with clear reasons; for 7–8 the response must reference examples in detail; terminology accurate and effective throughout. Multiple valid responses may earn the same mark.',
      },
      { marks: 'C1 0', descriptor: 'Format: The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'C1 1',
        descriptor:
          'Format: Two of the following elements are included: introduction, a main body of argument, or a conclusion. The elements must appear as separate paragraphs; if not, 0 marks should be awarded.',
      },
      {
        marks: 'C1 2',
        descriptor:
          'Format: Three of the following elements are included: introduction, a main body of argument and a conclusion. The elements must appear as separate paragraphs.',
      },
      {
        marks: 'C2 0',
        descriptor:
          'Communicating information and ideas: does not achieve a standard described below. Note: the use of first-person singular is appropriate and formal in the context of a “to what extent” question (e.g. “I believe that […]”).',
      },
      {
        marks: 'C2 1',
        descriptor:
          'The style and language used are rarely appropriate to the audience and purpose of informing. Style rarely consistent with an essay; language rarely clear; text may be extremely short (5–6 lines).',
      },
      {
        marks: 'C2 2',
        descriptor:
          'The style and language used are occasionally appropriate to the audience and purpose of informing. Style not always consistent; language less clear in places.',
      },
      {
        marks: 'C2 3',
        descriptor:
          'The style and language used are consistently appropriate to the audience and purpose of informing. Style consistent with what would be expected in an essay; language formal and clear.',
      },
      {
        marks: 'C3 0',
        descriptor:
          'Organizational structure: does not achieve a standard described below. (Essay should be easy to read with ideas logically connected from one sentence to the next.)',
      },
      {
        marks: 'C3 1',
        descriptor:
          'The organizational structure is rarely effective. Paragraphs/ideas sometimes build logically; rarely uses effective transitions; text may be extremely short (5–6 lines).',
      },
      {
        marks: 'C3 2',
        descriptor:
          'The organizational structure is occasionally effective. Paragraphs/ideas build in a mainly logical manner; sometimes uses effective transitions within and between sentences/paragraphs.',
      },
      {
        marks: 'C3 3',
        descriptor:
          'The organizational structure is consistently appropriate and effective. Paragraphs/ideas build on each other in a consistently clear and logical manner; uses effective transitions within and between sentences/paragraphs.',
      },
      {
        marks: 'CritD 0',
        descriptor:
          'The student does not reach a standard described by any of the descriptors below. Note: Different development indicators can be considered as different perspectives. A response with one perspective is likely 1–2 marks. A response that does not include a conclusion is likely 1–2 marks. A conclusion shouldn’t present new aspects not included previously.',
      },
      {
        marks: 'CritD 1–2',
        descriptor:
          'Provides one perspective in a basic analysis and summarizes information to a limited extent in response to the question posed. One perspective considered superficially (general/vague points); response does not reach a conclusion or fully answer the question at this level.',
      },
      {
        marks: 'CritD 3–4',
        descriptor:
          'Provides different perspectives in an analysis and summarizes information to make clear arguments. At least two perspectives (e.g. pros and cons; insight on a city/country/region’s development; insight on different communities) included with development to show some understanding and implications; perspectives not likely balanced; a conclusion is expected but likely not fully developed.',
      },
      {
        marks: 'CritD 5–6',
        descriptor:
          'Provides different perspectives in an analysis and synthesizes information to make clear arguments. At least two perspectives included with substantial development to show good understanding and implications; perspectives equally considered/balanced but may not be detailed; ideas combined to form a clear, coherent conclusion; synthesis may appear in the body or conclusion.',
      },
      {
        marks: 'CritD 7–8',
        descriptor:
          'Provides different perspectives in a detailed discussion and synthesizes information to make clear arguments. At least two (or more) perspectives included with thorough development to show excellent understanding and implications; perspectives equally balanced and detailed; ideas combined into a clear, coherent and convincing conclusion giving a judgment on whether the impact is more positive or negative or equally balanced; synthesis may appear in body or conclusion. Multiple valid responses may earn the same mark.',
      },
    ],
  },
}
