import 'server-only'

/**
 * MYP Integrated Humanities — November 2024 · VARIANT 1 mark scheme (rubric-banded).
 * Construct mirrors humanities-nov-2024 exactly: identical RubricBand descriptors,
 * marks structure, commandTerm and commandTermDefinition. Only the worked exemplars,
 * keyConcepts and keywords are rewritten for the URBANIZATION & SUSTAINABLE CITIES scenario.
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
    exemplar: 'East Asia and Sub-Saharan Africa.',
    keyConcepts: ['urbanization', 'data interpretation', 'regional comparison'],
    keywords: ['East Asia', 'Sub-Saharan Africa', 'largest increase', 'percentage', 'urban'],
    feedbackHit:
      'You correctly read the chart and identified the two regions with the greatest rise in urban population share (East Asia +42.7 percentage points and Sub-Saharan Africa +18.8).',
    feedbackMiss:
      'Look for the largest difference between the 1980 and 2020 values, not the highest 2020 value alone. East Asia (21.5→64.2) rose most, followed by Sub-Saharan Africa (22.6→41.4).',
    commandTerm: 'Identify',
    commandTermDefinition:
      'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    rubricBands: [
      { marks: '1', descriptor: 'Award (1 mark) for each correct response. Correct responses are: East Asia; Sub-Saharan Africa.' },
      {
        marks: '2',
        descriptor:
          'Both correct regions identified (East Asia and Sub-Saharan Africa). If a student has included more than two regions, award marks for the first two.',
      },
    ],
  },

  q2_: {
    marks: 2,
    exemplar:
      'People move from the countryside to cities because there are more jobs and better-paid work available in urban areas.',
    keyConcepts: ['urbanization', 'rural–urban migration', 'economic opportunity'],
    keywords: ['jobs', 'rural-urban migration', 'industry', 'services', 'economic opportunity', 'better services'],
    feedbackHit:
      'You gave a clear reason and added brief development (the “why”), which lifts a 1-mark statement to a 2-mark outline.',
    feedbackMiss:
      'State a reason (e.g. more jobs in cities, better services, industrial growth) and then elaborate it slightly so it is an outline, not just a bare statement.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor: 'The student states one reason urbanization has increased over recent decades.',
        exemplar: 'People move to cities to find work. (A 1-mark response is likely to be one sentence that hints at a single reason.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one reason urbanization has increased over recent decades.',
        exemplar:
          'People move from the countryside to cities because there are more jobs and better-paid work available in urban areas. (A 2-mark response is likely to be a single sentence with a single reason that is elaborated on; the detail provided will be brief.)',
      },
    ],
  },

  q3_: {
    marks: 2,
    exemplar: 'Rapid urbanization can cause overcrowding, leading to a shortage of affordable housing in the city.',
    keyConcepts: ['urbanization impacts', 'housing', 'infrastructure', 'congestion'],
    keywords: ['overcrowding', 'housing', 'congestion', 'pollution', 'infrastructure', 'services'],
    feedbackHit:
      'You identified an impact and developed it briefly (e.g. linking overcrowding to a housing shortage), reaching the 2-mark outline.',
    feedbackMiss:
      'Name one impact (e.g. housing pressure, congestion, pollution, strain on services) then add a short explanation of its effect so it becomes an outline rather than a bare statement.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor: 'The student states one impact urbanization can have on a city or region.',
        exemplar: 'Cities can become overcrowded. (A 1-mark response is likely to be one sentence that hints at a single impact.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one impact urbanization can have on a city or region.',
        exemplar:
          'Rapid urbanization can cause overcrowding, leading to a shortage of affordable housing in the city. (A 2-mark response is likely to be a single sentence with a single impact that is elaborated on; the detail provided will be brief.)',
      },
    ],
  },

  q4_: {
    marks: 8,
    exemplar:
      'The investigation considers many aspects to understand sustainable transport, such as travel habits and air quality. These will help the city government understand which problems they need to focus on to make transport more sustainable (strength, 3 marks). However, some methods to collect data might not lead to valid information. For example, the survey asks residents how they “usually” travel; without set choices, people may answer vaguely or forget occasional trips, so the responses might be unreliable (limitation, 3 marks). Overall, the action plan is good as it considers many aspects of transport, but there is room for improvement as they could improve the survey design (appraisal, 2 marks).',
    keyConcepts: ['evaluation', 'research methods', 'validity', 'data collection', 'sustainable transport'],
    keywords: [
      'strength',
      'limitation',
      'appraisal',
      'survey',
      'valid data',
      'travel habits',
      'air quality',
      'access',
      'BRT',
      'cost',
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
        exemplar: 'The investigation considers many aspects to understand sustainable transport.',
      },
      {
        marks: 'Strengths 2',
        descriptor:
          'The student outlines the strength(s) of the action plan. Only one strength needs to be mentioned and elaborated on. If a student outlines 3 or more strengths, they can be awarded 3 marks.',
        exemplar: 'The investigation considers many aspects to understand sustainable transport such as travel habits and air quality.',
      },
      {
        marks: 'Strengths 3',
        descriptor:
          'The student explains the strength(s) of the action plan. One strength needs to be mentioned and elaborated on in additional detail with reasoning.',
        exemplar:
          'The investigation considers many aspects to understand sustainable transport such as travel habits and air quality. These will help the city government understand which problems they need to focus on to make transport more sustainable.',
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
        exemplar: 'Some methods to collect data might not lead to valid information. For example, the survey only asks residents how they usually travel.',
      },
      {
        marks: 'Limitations 3',
        descriptor: 'The student explains the limitation(s) of the action plan. One limitation mentioned and elaborated on in additional detail with reasoning.',
        exemplar:
          'Some methods to collect data might not lead to valid information. For example, the survey asks residents how they usually travel. Without set choices, people may answer vaguely or forget occasional trips, so the responses might be unreliable.',
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
        exemplar: 'Overall, the action plan is good as it considers many aspects of transport but there is room for improvement as they could improve the survey design.',
      },
    ],
  },

  q5_a: {
    marks: 2,
    exemplar: 'To what extent do residents in the eastern districts of Bogotá, Colombia have access to public green space?',
    keyConcepts: ['research question', 'urban green space', 'focus and clarity'],
    keywords: ['clear', 'focused', 'research question', 'location', 'time period', 'specific district'],
    feedbackHit:
      'Your question is both clear and focused — it specifies a place/aspect/time period and connects directly to access to urban green space.',
    feedbackMiss:
      'A 1-mark question is clear but too broad. Add focus by naming a specific location, time period or aspect (e.g. “…in the eastern districts of Bogotá”) to reach 2 marks.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor:
          'The student formulates a research question that is either clear or focused and connected to the research on access to urban green space. (Clear = intention is easy to understand, but lacks focus as it doesn’t specify e.g. a location, time period or aspect.)',
        exemplar: 'To what extent do residents have access to public green space? / How easy is it for residents to reach a park?',
      },
      {
        marks: '2',
        descriptor:
          'The student formulates a research question that is both clear and focused and connected to the research on access to urban green space. (Both focus on a specific place; focus could also be a specific district, age group, or a time period.)',
        exemplar: 'To what extent do residents in the eastern districts of Bogotá have access to public green space? / How easy is it for families to reach a park in central Bogotá?',
      },
    ],
  },

  q5_b: {
    marks: 4,
    exemplar:
      'My research question looks at how many residents live close enough to a park to use it easily. The area of parkland per resident is an indicator that will tell me about how fairly green space is shared across the city. This will show the local government whether some districts are missing out on green space compared with others, so they know where to invest.',
    keyConcepts: ['justification', 'relevance', 'indicators', 'urban green space'],
    keywords: ['parkland per resident', 'indicator', 'access', 'local government', 'relevant', 'reasoning'],
    feedbackHit:
      'You justified the question fully — giving a specific factor and a comprehensive reason that builds on it to show why it is useful for the local government.',
    feedbackMiss:
      'Move beyond stating relevance: describe a specific factor (e.g. parkland per resident as an indicator) and then add reasoning explaining why it helps the local government, building depth to reach 4 marks.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor:
          'The student states how the research question is relevant to the research scenario. No detail is required; a simple connection between the scenario and the RQ. Responses may apply to any research.',
        exemplar: 'My research question looks at how many residents can reach a park.',
      },
      {
        marks: '2',
        descriptor:
          'The student outlines how the research question is relevant to the research scenario. Brief detail on how the RQ is relevant. General/vague repetition of the question without new specifics is a maximum at this level.',
        exemplar: 'My research question looks at how many residents live close enough to a park to use it easily.',
      },
      {
        marks: '3',
        descriptor:
          'The student describes how the research question is relevant to the research scenario. At least one specific argument/factor considered in detail without providing reasoning why the RQ is relevant. Responses include new information that derives from the question.',
        exemplar:
          'My research question looks at how many residents live close enough to a park to use it easily. The area of parkland per resident is an indicator that will tell me about how fairly green space is shared across the city.',
      },
      {
        marks: '4',
        descriptor:
          'The student justifies how the research question is relevant to the research scenario. At least one specific argument/factor considered in detail, along with reasoning why the RQ is relevant. Responses include a comprehensive reason that builds on the details of the description. More important than length is the quality and depth provided.',
        exemplar:
          'My research question looks at how many residents live close enough to a park to use it easily. The area of parkland per resident is an indicator that will tell me about how fairly green space is shared across the city. This will show the local government whether some districts are missing out on green space compared with others, so they know where to invest.',
      },
    ],
  },

  q5_c: {
    marks: 4,
    exemplar:
      'Statistics on the area of public parkland per resident in each district. It will allow me to see whether green space is shared fairly across the city. Some districts may have large parks while others have almost none, especially in densely built-up areas. This is important because it can help us determine which neighbourhoods need new green space the most for residents to benefit equally.',
    keyConcepts: ['source evaluation', 'usefulness', 'urban green space', 'explanation'],
    keywords: ['parkland statistics', 'districts', 'access', 'benefit', 'limitation', 'reasons'],
    feedbackHit:
      'You selected a source and explained in detail how it helps your investigation, supporting your point with reasons that link to access to green space.',
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
        exemplar: 'Statistics on the area of public parkland per resident in each district. It will allow me to see how much green space there is. (A 1-mark response is likely to be one sentence that hints at a single benefit.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines how the selected source could be beneficial to the investigation.',
        exemplar:
          'Statistics on the area of public parkland per resident in each district. It will allow me to see whether green space is shared fairly across the city. (A 2-mark response is a single sentence with a single benefit that is elaborated on; brief detail.)',
      },
      {
        marks: '3',
        descriptor:
          'The student describes how the selected source could be beneficial to the investigation. One benefit considered in detail without any comprehensive reasons given; an example may support the description.',
        exemplar:
          'Statistics on the area of public parkland per resident in each district. It will allow me to see whether green space is shared fairly across the city. Some districts may have large parks while others have almost none, especially in densely built-up areas.',
      },
      {
        marks: '4',
        descriptor:
          'The student explains how the selected source could be beneficial to the investigation. One benefit considered in detail, along with reasons; an example may support the explanation but is not essential.',
        exemplar:
          'Statistics on the area of public parkland per resident in each district. It will allow me to see whether green space is shared fairly across the city. Some districts may have large parks while others have almost none, especially in densely built-up areas. This is important because it can help us determine which neighbourhoods need new green space the most for residents to benefit equally.',
      },
    ],
  },

  q5_d: {
    marks: 2,
    exemplar: 'Getting access to accurate maps of every park, as some smaller or informal green spaces may not be recorded by the city.',
    keyConcepts: ['research challenges', 'data collection', 'reliability', 'urban green space'],
    keywords: ['access to data', 'mapping', 'unrecorded green space', 'reliability', 'time'],
    feedbackHit:
      'You identified a genuine research challenge and developed it briefly (e.g. some green spaces not being recorded by the city), reaching the outline level.',
    feedbackMiss:
      'Name one challenge (e.g. accessing reliable maps, unrecorded green spaces, limited time) and add a short elaboration explaining why it is a challenge to reach 2 marks.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor: 'The student states one challenge they may experience when investigating residents’ access to urban green space.',
        exemplar: 'Getting access to maps of every park. (A 1-mark response is likely to be one sentence that hints at a single challenge.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one challenge they may experience when investigating residents’ access to urban green space.',
        exemplar: 'Getting access to accurate maps of every park, as some smaller or informal green spaces may not be recorded by the city. (A 2-mark response is a single sentence with a single challenge that is elaborated on; brief detail.)',
      },
    ],
  },

  q6_: {
    marks: 18,
    exemplar:
      'Criterion A (6 marks): The community action movement Critical Mass has shown that cities can be made safer and cleaner when people demand the right to affordable, healthy transport. Critical Mass began in San Francisco, USA in 1992, when cyclists started riding together through the streets once a month to claim space on roads dominated by cars. Its aim is, through peaceful group rides and raising awareness, to make cycling safer and push city governments to build protected bike lanes. For example, in many cities riders inspired local councils to add cycle paths and lower speed limits, which reduced traffic injuries and air pollution. Through these rides and campaigns, the movement has helped residents win cleaner air and safer streets, and pushed politicians to invest in sustainable transport so that future generations can move around without harming the environment.\n\nThe speech also opens with an address to the audience and closes with a summary/thank-you (C1: Format), reads like a speech throughout using first person, rhetorical questions and emotive vocabulary (C2: 5–6), and ideas build logically with effective transitions (C3: 4).',
    keyConcepts: ['sustainable cities', 'community action movements', 'civic engagement', 'speech writing'],
    keywords: [
      'Critical Mass',
      'affordable public transport',
      'clean air',
      'opening statement',
      'closing statement',
      'rhetorical questions',
      'community',
      'cycle lanes',
    ],
    feedbackHit:
      'Excellent speech: you thoroughly explained how one community action movement (e.g. Critical Mass) made a city more sustainable for a chosen community, with accurate examples and terminology, wrapped in a clear speech format with engaging language and logical structure.',
    feedbackMiss:
      'This is marked across four strands (Crit A knowledge 6, Format 2, Communicating style 6, Organization 4). Make sure you: include an opening and closing; name one specific city goal, one city/community and one community action movement; explain with reasons (not just describe); and write in an engaging speech style with logical transitions.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'CritA 1',
        descriptor:
          'Demonstrates limited knowledge and understanding by outlining how one community action movement has helped to make cities more sustainable, using limited examples and limited relevant terminology. Responses likely brief, with little detail; terminology limited in accuracy/frequency.',
        exemplar:
          'The community action movement Critical Mass has shown that cities can be made safer and cleaner. The movement gained popularity by getting cyclists to ride together through the streets.',
      },
      {
        marks: 'CritA 2–3',
        descriptor:
          'Demonstrates adequate knowledge and understanding by describing how one community action movement has helped to make cities more sustainable, using satisfactory examples and appropriate relevant terminology. Likely little/no reasoning; examples may lack detail. Terminology used accurately in correct context.',
        exemplar:
          'The community action movement Critical Mass has shown that cities can be made safer and cleaner when people demand the right to healthy transport. Critical Mass began in San Francisco, USA in 1992, when cyclists started riding together once a month to claim space on roads dominated by cars. Its aim is, through peaceful group rides, to make cycling safer.',
      },
      {
        marks: 'CritA 4–5',
        descriptor:
          'Demonstrates substantial knowledge and understanding by explaining how one community action movement has helped to make cities more sustainable, using accurate examples and appropriate relevant terminology. Some reasoning; detailed response to the question. Terminology accurate and effective.',
        exemplar:
          '…Critical Mass began in San Francisco in 1992. Its aim is, through peaceful group rides and raising awareness, to make cycling safer and push city governments to build protected bike lanes. For example, in many cities riders inspired local councils to add cycle paths and lower speed limits, which reduced traffic injuries and air pollution.',
      },
      {
        marks: 'CritA 6',
        descriptor:
          'Demonstrates detailed knowledge and understanding by thoroughly explaining how one community action movement has helped to make cities more sustainable, using accurate and effective descriptions and explanations, and appropriate relevant terminology. Very detailed with clear reasoning and comprehensive understanding of community action movements.',
        exemplar:
          '…Through these rides and campaigns, the movement has helped residents win cleaner air and safer streets, and pushed politicians to invest in sustainable transport so that future generations can move around without harming the environment.',
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
    exemplar: 'Greenleaf Cities.',
    keyConcepts: ['origin', 'source evaluation', 'OPVL'],
    keywords: ['Greenleaf Cities', 'charity', 'origin'],
    feedbackHit: 'Correct — the origin is the producer, Greenleaf Cities.',
    feedbackMiss: 'The origin is simply who produced the source: Greenleaf Cities (the charity named in the stem).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [{ marks: '1', descriptor: 'Award (1 mark) for Greenleaf Cities.' }],
  },

  q7_b: {
    marks: 1,
    exemplar: 'To educate the audience about the 15-minute city.',
    keyConcepts: ['purpose', 'source evaluation', 'OPVL'],
    keywords: ['educate', 'inform', '15-minute city', 'car-dependent', 'sustainable cities', 'gain support'],
    feedbackHit:
      'Correct — you stated a valid purpose (e.g. to educate/inform about the 15-minute city or to gain support for greener cities).',
    feedbackMiss:
      'Purpose is why the article was written. Valid answers include: to educate about the 15-minute city, inform about the drawbacks of car-dependent cities, or gain support for more sustainable cities.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      {
        marks: '1',
        descriptor:
          'Accept any valid response. Responses may include: To educate the audience about the 15-minute city; To inform the audience about the drawbacks of car-dependent cities; To gain support for more sustainable cities.',
      },
    ],
  },

  q7_c: {
    marks: 3,
    exemplar:
      'The article provides a clear definition of a 15-minute city, which is a way of designing neighbourhoods so residents can reach daily needs on foot or by bike, helping a student understand how city design can cut emissions and improve health.',
    keyConcepts: ['value', 'source evaluation', 'OPVL', '15-minute city'],
    keywords: ['definition', '15-minute city', 'sustainable cities', 'walkable', 'reduce emissions'],
    feedbackHit:
      'You described one value in detail (e.g. the clear definition of a 15-minute city and how walkable design supports sustainability), reaching the top band.',
    feedbackMiss:
      'Go beyond stating a value — consider it in detail. Explain what the article usefully provides (e.g. a definition of the 15-minute city) and develop how that helps a sustainable-cities student.',
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
        descriptor: 'The student states one value of the article for a student studying sustainable cities.',
        exemplar: 'The article provides a definition of a 15-minute city. (A 1-mark response is one sentence that hints at a single value.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one value of the article for a student studying sustainable cities.',
        exemplar: 'The article provides a definition of a 15-minute city, which is a way of designing neighbourhoods so residents can reach daily needs on foot or by bike. (A 2-mark response is a single sentence with a single value elaborated on; brief detail.)',
      },
      {
        marks: '3',
        descriptor:
          'The student describes one value of the article for a student studying sustainable cities. One value considered in detail. More important than length is the quality and depth provided.',
        exemplar:
          'The article provides a clear definition of a 15-minute city, which is a way of designing neighbourhoods so residents can reach daily needs on foot or by bike, helping a student understand how city design can cut emissions and improve health.',
      },
    ],
  },

  q7_d: {
    marks: 3,
    exemplar:
      'The article doesn’t provide much detail on how an existing car-dependent city could actually be redesigned into 15-minute neighbourhoods, which a student would need to understand how the idea works in practice.',
    keyConcepts: ['limitation', 'source evaluation', 'OPVL', '15-minute city'],
    keywords: ['lack of detail', 'implementation', 'redesign', 'bias', 'car-dependent', 'sustainable cities'],
    feedbackHit:
      'You described one limitation in detail (e.g. the article lacks detail on how to actually redesign a car-dependent city), reaching the top band.',
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
        descriptor: 'The student states one limitation of the article for a student studying sustainable cities.',
        exemplar: 'The article doesn’t provide much detail on how to build a 15-minute city. (A 1-mark response is one sentence that hints at a single limitation.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one limitation of the article for a student studying sustainable cities.',
        exemplar: 'The article doesn’t provide much detail on how an existing car-dependent city could be redesigned into 15-minute neighbourhoods. (A 2-mark response is a single sentence with a single limitation elaborated on; brief detail.)',
      },
      {
        marks: '3',
        descriptor:
          'The student describes one limitation of the article for a student studying sustainable cities. One limitation considered in detail. More important than length is the quality and depth provided.',
        exemplar: 'The article doesn’t provide much detail on how an existing car-dependent city could actually be redesigned into 15-minute neighbourhoods, which a student would need to understand how the idea works in practice.',
      },
    ],
  },

  q8_: {
    marks: 4,
    exemplar:
      'A 15-minute city can make better use of land and time, such as the land currently taken up by wide roads and car parks. That space could be used for homes, shops and parks closer to where people live rather than spread far apart. This helps reduce car journeys, leading to cleaner air and less time wasted commuting.',
    keyConcepts: ['15-minute city', 'car-dependent city', 'sustainability', 'justification'],
    keywords: ['walkable', 'cycling', 'commuting', 'air pollution', 'mixed-use', 'sustainable'],
    feedbackHit:
      'You justified the switch — one need considered in detail with reasoning (e.g. reusing road space cuts car journeys and pollution), using your own words rather than copying the article.',
    feedbackMiss:
      'Don’t just state a need or copy the article. Develop one need in detail and add reasoning (e.g. why walkable neighbourhoods reduce pollution and commuting time) to reach the justify band of 4 marks.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      {
        marks: '0',
        descriptor:
          'The student does not reach a standard described by any of the descriptors below. Note: Responses may focus on either the car-dependent or 15-minute city or both – all approaches are valid and can be fully rewarded; copying the content of the source should not be rewarded.',
      },
      {
        marks: '1',
        descriptor: 'The student states the need to move away from a car-dependent city to a 15-minute city.',
        exemplar: 'A 15-minute city can make better use of land. (A 1-mark response is one sentence that hints at the need without any detail.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines the need to move away from a car-dependent city to a 15-minute city.',
        exemplar: 'A 15-minute city can make better use of land and time, such as the land currently taken up by wide roads and car parks. (A 2-mark response is a single sentence with a need elaborated on; brief detail. An example is not a requirement at this level.)',
      },
      {
        marks: '3',
        descriptor:
          'The student describes the need to move away from a car-dependent city to a 15-minute city. One need considered in detail without comprehensive reasons; an example may support the description.',
        exemplar: 'A 15-minute city can make better use of land and time, such as the land currently taken up by wide roads and car parks. That space could be used for homes, shops and parks closer to where people live rather than spread far apart.',
      },
      {
        marks: '4',
        descriptor:
          'The student justifies the need to move away from a car-dependent city to a 15-minute city. One need considered in detail, along with reason(s); an example may be given but is not essential.',
        exemplar:
          'A 15-minute city can make better use of land and time, such as the land currently taken up by wide roads and car parks. That space could be used for homes, shops and parks closer to where people live rather than spread far apart. This helps reduce car journeys, leading to cleaner air and less time wasted commuting.',
      },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'Criterion A (7–8): A thorough explanation of liveability indicators with accurate detail throughout and clear reasons. For example, the size of a city’s economy (GDP) shows its wealth, but liveability indicators such as air-quality readings, parkland per resident and the share of income spent on housing capture quality of daily life. Using a specific city (e.g. a wealthy city with severe air pollution and unaffordable housing) shows why multiple indicators give a fuller picture. Terminology (liveability, air quality, housing affordability, public transport, green space) is used accurately and effectively throughout.\n\nCriterion D (7–8): At least two perspectives are developed thoroughly and balanced — e.g. liveability indicators like air quality and housing affordability give a much better, multi-dimensional understanding of a city’s development than economic size alone (pro); but indicators can hide inequality between districts, rely on uneven data, or omit factors like community and culture (con). Ideas are synthesized into a clear, coherent and convincing conclusion that gives a judgment on the extent to which liveability indicators improve understanding. The essay also has a clear introduction, body and conclusion as separate paragraphs (C1: 2), formal clear language appropriate to an essay (C2: 3), and ideas that build logically with effective transitions (C3: 3).',
    keyConcepts: ['liveability indicators', 'urban development', 'air quality', 'housing affordability', 'perspectives', 'synthesis'],
    keywords: [
      'liveability',
      'air quality',
      'housing affordability',
      'public transport',
      'green space',
      'quality of life',
      'perspectives',
      'conclusion',
      'examples',
    ],
    feedbackHit:
      'Top-band essay: you thoroughly explained liveability indicators with detailed examples (Crit A), weighed at least two balanced perspectives and synthesized them into a convincing judgement (Crit D), all in a well-structured, formally written essay with intro, body and conclusion.',
    feedbackMiss:
      'This is marked across four strands (Crit A knowledge 8, Format 2, Communicating 3, Organization 3, Crit D thinking 8). Make sure you: support arguments with specific examples (e.g. economic size vs liveability for a named city); discuss at least two balanced perspectives; reach a clear conclusion that gives a judgement without introducing new points; and structure the essay in separate intro/body/conclusion paragraphs.',
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
          'Demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology. Evident knowledge of liveability indicators; example(s) accurate but may lack detail; terminology accurate in correct context.',
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
          'The student does not reach a standard described by any of the descriptors below. Note: Different liveability indicators can be considered as different perspectives. A response with one perspective is likely 1–2 marks. A response that does not include a conclusion is likely 1–2 marks. A conclusion shouldn’t present new aspects not included previously.',
      },
      {
        marks: 'CritD 1–2',
        descriptor:
          'Provides one perspective in a basic analysis and summarizes information to a limited extent in response to the question posed. One perspective considered superficially (general/vague points); response does not reach a conclusion or fully answer the question at this level.',
      },
      {
        marks: 'CritD 3–4',
        descriptor:
          'Provides different perspectives in an analysis and summarizes information to make clear arguments. At least two perspectives (e.g. pros and cons; insight on a city/region’s development; insight on different districts or communities) included with development to show some understanding and implications; perspectives not likely balanced; a conclusion is expected but likely not fully developed.',
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
