import 'server-only'

/**
 * MYP Integrated Humanities — November 2024 · VARIANT 2 mark scheme (rubric-banded).
 * Construct mirrors humanities-nov-2024 exactly: identical RubricBand descriptors,
 * marks structure, commandTerm and commandTermDefinition. Only the worked exemplars,
 * keyConcepts and keywords are rewritten for the GLOBAL HEALTH & SAFE WATER scenario.
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
    exemplar: 'Eastern & South-Eastern Asia and Central & Southern Asia.',
    keyConcepts: ['global health', 'data interpretation', 'regional comparison'],
    keywords: ['Eastern & South-Eastern Asia', 'Central & Southern Asia', 'largest increase', 'percentage', 'safe water'],
    feedbackHit:
      'You correctly read the table and identified the two regions with the greatest rise in access to safe water (Eastern & South-Eastern Asia +35 percentage points and Central & Southern Asia +16).',
    feedbackMiss:
      'Look for the largest difference between the 2000 and 2020 values, not the highest 2020 value alone. Eastern & South-Eastern Asia (53→88) rose most, followed by Central & Southern Asia (41→57).',
    commandTerm: 'Identify',
    commandTermDefinition:
      'Provide an answer from a number of possibilities. Recognize and state briefly a distinguishing fact or feature.',
    rubricBands: [
      { marks: '1', descriptor: 'Award (1 mark) for each correct response. Correct responses are: Eastern & South-Eastern Asia; Central & Southern Asia.' },
      {
        marks: '2',
        descriptor:
          'Both correct regions identified (Eastern & South-Eastern Asia and Central & Southern Asia). If a student has included more than two regions, award marks for the first two.',
      },
    ],
  },

  q2_: {
    marks: 2,
    exemplar:
      'Governments and aid organizations have invested in building more wells and piped water systems, so more people can reach safe water near their homes.',
    keyConcepts: ['global health', 'infrastructure investment', 'development aid'],
    keywords: ['infrastructure', 'wells', 'piped water', 'investment', 'aid', 'technology'],
    feedbackHit:
      'You gave a clear reason and added brief development (the “why”), which lifts a 1-mark statement to a 2-mark outline.',
    feedbackMiss:
      'State a reason (e.g. new water infrastructure, investment, aid programmes, better technology) and then elaborate it slightly so it is an outline, not just a bare statement.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor: 'The student states one reason access to safe drinking water has improved over recent decades.',
        exemplar: 'More wells and pipes have been built. (A 1-mark response is likely to be one sentence that hints at a single reason.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one reason access to safe drinking water has improved over recent decades.',
        exemplar:
          'Governments and aid organizations have invested in building more wells and piped water systems, so more people can reach safe water near their homes. (A 2-mark response is likely to be a single sentence with a single reason that is elaborated on; the detail provided will be brief.)',
      },
    ],
  },

  q3_: {
    marks: 2,
    exemplar: 'Access to safe water reduces waterborne diseases, so fewer children become ill and more can attend school regularly.',
    keyConcepts: ['health impacts', 'disease', 'education', 'wellbeing'],
    keywords: ['disease', 'health', 'children', 'school', 'productivity', 'wellbeing'],
    feedbackHit:
      'You identified an impact and developed it briefly (e.g. linking safe water to fewer diseases and better school attendance), reaching the 2-mark outline.',
    feedbackMiss:
      'Name one impact (e.g. fewer diseases, better child health, more school attendance, higher productivity) then add a short explanation of its effect so it becomes an outline rather than a bare statement.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor: 'The student states one impact access to safe drinking water can have on a community or region.',
        exemplar: 'It reduces disease. (A 1-mark response is likely to be one sentence that hints at a single impact.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one impact access to safe drinking water can have on a community or region.',
        exemplar:
          'Access to safe water reduces waterborne diseases, so fewer children become ill and more can attend school regularly. (A 2-mark response is likely to be a single sentence with a single impact that is elaborated on; the detail provided will be brief.)',
      },
    ],
  },

  q4_: {
    marks: 8,
    exemplar:
      'The investigation considers many aspects to understand community health, such as access to care and clean water. These will help the county government understand which problems they need to focus on to improve health (strength, 3 marks). However, some methods to collect data might not lead to valid information. For example, the survey asks residents how long it takes them to reach a clinic; without a clear definition of “nearest facility” or set time bands, people may guess or answer vaguely, so the responses might be unreliable (limitation, 3 marks). Overall, the action plan is good as it considers many aspects of health, but there is room for improvement as they could improve the survey design (appraisal, 2 marks).',
    keyConcepts: ['evaluation', 'research methods', 'validity', 'data collection', 'community health'],
    keywords: [
      'strength',
      'limitation',
      'appraisal',
      'survey',
      'valid data',
      'access to care',
      'common illnesses',
      'clean water',
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
        exemplar: 'The investigation considers many aspects to understand community health.',
      },
      {
        marks: 'Strengths 2',
        descriptor:
          'The student outlines the strength(s) of the action plan. Only one strength needs to be mentioned and elaborated on. If a student outlines 3 or more strengths, they can be awarded 3 marks.',
        exemplar: 'The investigation considers many aspects to understand community health such as access to care and clean water.',
      },
      {
        marks: 'Strengths 3',
        descriptor:
          'The student explains the strength(s) of the action plan. One strength needs to be mentioned and elaborated on in additional detail with reasoning.',
        exemplar:
          'The investigation considers many aspects to understand community health such as access to care and clean water. These will help the county government understand which problems they need to focus on to improve health.',
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
        exemplar: 'Some methods to collect data might not lead to valid information. For example, the survey only asks residents how long it takes them to reach a clinic.',
      },
      {
        marks: 'Limitations 3',
        descriptor: 'The student explains the limitation(s) of the action plan. One limitation mentioned and elaborated on in additional detail with reasoning.',
        exemplar:
          'Some methods to collect data might not lead to valid information. For example, the survey asks residents how long it takes them to reach a clinic. Without a clear definition of the nearest facility or set time bands, people may guess or answer vaguely, so the responses might be unreliable.',
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
        exemplar: 'Overall, the action plan is good as it considers many aspects of health but there is room for improvement as they could improve the survey design.',
      },
    ],
  },

  q5_a: {
    marks: 2,
    exemplar: 'To what extent are children in the rural districts of Dhaka, Bangladesh fully vaccinated by the age of two?',
    keyConcepts: ['research question', 'vaccination coverage', 'focus and clarity'],
    keywords: ['clear', 'focused', 'research question', 'location', 'time period', 'specific age group'],
    feedbackHit:
      'Your question is both clear and focused — it specifies a place/aspect/time period and connects directly to childhood vaccination coverage.',
    feedbackMiss:
      'A 1-mark question is clear but too broad. Add focus by naming a specific location, time period or age group (e.g. “…in the rural districts of Dhaka”) to reach 2 marks.',
    commandTerm: 'Formulate',
    commandTermDefinition: 'Express precisely and systematically the relevant concept(s) or argument(s).',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor:
          'The student formulates a research question that is either clear or focused and connected to the research on childhood vaccination coverage. (Clear = intention is easy to understand, but lacks focus as it doesn’t specify e.g. a location, time period or age group.)',
        exemplar: 'To what extent are children fully vaccinated? / How many children receive all their recommended vaccines?',
      },
      {
        marks: '2',
        descriptor:
          'The student formulates a research question that is both clear and focused and connected to the research on childhood vaccination coverage. (Both focus on a specific place; focus could also be a specific age group, vaccine, or a time period.)',
        exemplar: 'To what extent are children in the rural districts of Dhaka, Bangladesh fully vaccinated by the age of two? / How many under-twos receive all recommended vaccines in rural Dhaka?',
      },
    ],
  },

  q5_b: {
    marks: 4,
    exemplar:
      'My research question looks at how many children actually receive all their recommended vaccines. The vaccination rate is an indicator that will tell me how well the health system is reaching young families. This will show the health authority whether some districts are being missed compared with others, so they know where to send more vaccination teams.',
    keyConcepts: ['justification', 'relevance', 'indicators', 'vaccination coverage'],
    keywords: ['vaccination rate', 'indicator', 'coverage', 'health authority', 'relevant', 'reasoning'],
    feedbackHit:
      'You justified the question fully — giving a specific factor and a comprehensive reason that builds on it to show why it is useful for the health authority.',
    feedbackMiss:
      'Move beyond stating relevance: describe a specific factor (e.g. the vaccination rate as an indicator) and then add reasoning explaining why it helps the health authority, building depth to reach 4 marks.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: '1',
        descriptor:
          'The student states how the research question is relevant to the research scenario. No detail is required; a simple connection between the scenario and the RQ. Responses may apply to any research.',
        exemplar: 'My research question looks at how many children get vaccinated.',
      },
      {
        marks: '2',
        descriptor:
          'The student outlines how the research question is relevant to the research scenario. Brief detail on how the RQ is relevant. General/vague repetition of the question without new specifics is a maximum at this level.',
        exemplar: 'My research question looks at how many children actually receive all their recommended vaccines.',
      },
      {
        marks: '3',
        descriptor:
          'The student describes how the research question is relevant to the research scenario. At least one specific argument/factor considered in detail without providing reasoning why the RQ is relevant. Responses include new information that derives from the question.',
        exemplar:
          'My research question looks at how many children actually receive all their recommended vaccines. The vaccination rate is an indicator that will tell me how well the health system is reaching young families.',
      },
      {
        marks: '4',
        descriptor:
          'The student justifies how the research question is relevant to the research scenario. At least one specific argument/factor considered in detail, along with reasoning why the RQ is relevant. Responses include a comprehensive reason that builds on the details of the description. More important than length is the quality and depth provided.',
        exemplar:
          'My research question looks at how many children actually receive all their recommended vaccines. The vaccination rate is an indicator that will tell me how well the health system is reaching young families. This will show the health authority whether some districts are being missed compared with others, so they know where to send more vaccination teams.',
      },
    ],
  },

  q5_c: {
    marks: 4,
    exemplar:
      'Statistics on the percentage of children vaccinated in each district. It will allow me to see whether vaccination coverage is even across the region. Some districts may have very high coverage while remote ones have far less, often where clinics are harder to reach. This is important because it can help us determine which districts need extra vaccination teams the most so that all children are protected equally.',
    keyConcepts: ['source evaluation', 'usefulness', 'vaccination coverage', 'explanation'],
    keywords: ['vaccination statistics', 'districts', 'coverage', 'benefit', 'limitation', 'reasons'],
    feedbackHit:
      'You selected a source and explained in detail how it helps your investigation, supporting your point with reasons that link to vaccination coverage.',
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
        exemplar: 'Statistics on the percentage of children vaccinated in each district. It will allow me to see how many children are vaccinated. (A 1-mark response is likely to be one sentence that hints at a single benefit.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines how the selected source could be beneficial to the investigation.',
        exemplar:
          'Statistics on the percentage of children vaccinated in each district. It will allow me to see whether vaccination coverage is even across the region. (A 2-mark response is a single sentence with a single benefit that is elaborated on; brief detail.)',
      },
      {
        marks: '3',
        descriptor:
          'The student describes how the selected source could be beneficial to the investigation. One benefit considered in detail without any comprehensive reasons given; an example may support the description.',
        exemplar:
          'Statistics on the percentage of children vaccinated in each district. It will allow me to see whether vaccination coverage is even across the region. Some districts may have very high coverage while remote ones have far less, often where clinics are harder to reach.',
      },
      {
        marks: '4',
        descriptor:
          'The student explains how the selected source could be beneficial to the investigation. One benefit considered in detail, along with reasons; an example may support the explanation but is not essential.',
        exemplar:
          'Statistics on the percentage of children vaccinated in each district. It will allow me to see whether vaccination coverage is even across the region. Some districts may have very high coverage while remote ones have far less, often where clinics are harder to reach. This is important because it can help us determine which districts need extra vaccination teams the most so that all children are protected equally.',
      },
    ],
  },

  q5_d: {
    marks: 2,
    exemplar: 'Getting accurate records, as some children may be vaccinated at private clinics whose data is not shared with the health authority.',
    keyConcepts: ['research challenges', 'data collection', 'reliability', 'vaccination coverage'],
    keywords: ['access to records', 'private clinics', 'incomplete data', 'reliability', 'willingness'],
    feedbackHit:
      'You identified a genuine research challenge and developed it briefly (e.g. private-clinic data not being shared), reaching the outline level.',
    feedbackMiss:
      'Name one challenge (e.g. incomplete records, parents unwilling to share, hard-to-reach villages) and add a short elaboration explaining why it is a challenge to reach 2 marks.',
    commandTerm: 'Outline',
    commandTermDefinition: 'Give a brief account or summary.',
    rubricBands: [
      { marks: '0', descriptor: 'The student does not reach a standard described by any of the descriptors below.' },
      {
        marks: '1',
        descriptor: 'The student states one challenge they may experience when investigating childhood vaccination coverage.',
        exemplar: 'Getting accurate vaccination records. (A 1-mark response is likely to be one sentence that hints at a single challenge.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one challenge they may experience when investigating childhood vaccination coverage.',
        exemplar: 'Getting accurate records, as some children may be vaccinated at private clinics whose data is not shared with the health authority. (A 2-mark response is a single sentence with a single challenge that is elaborated on; brief detail.)',
      },
    ],
  },

  q6_: {
    marks: 18,
    exemplar:
      'Criterion A (6 marks): The public health campaign to eradicate polio has shown that people’s right to health can be protected when communities are reached with vaccines. The Global Polio Eradication Initiative began in 1988, when polio was paralysing thousands of children every year across many countries. Its aim is, through mass vaccination drives and raising awareness, to immunise every child so the disease cannot spread. For example, in countries like India, health workers travelled to remote villages to vaccinate children door to door, which built trust and reached families who lived far from clinics. As a result, India was declared polio-free in 2014, protecting millions of children’s right to health. Through these campaigns, the right to health has moved closer to being a reality for whole communities, and the same approach is now being used against other preventable diseases.\n\nThe speech also opens with an address to the audience and closes with a summary/thank-you (C1: Format), reads like a speech throughout using first person, rhetorical questions and emotive vocabulary (C2: 5–6), and ideas build logically with effective transitions (C3: 4).',
    keyConcepts: ['right to health', 'public health campaigns', 'civic engagement', 'speech writing'],
    keywords: [
      'polio eradication',
      'right to health',
      'vaccination',
      'opening statement',
      'closing statement',
      'rhetorical questions',
      'community',
      'public health campaign',
    ],
    feedbackHit:
      'Excellent speech: you thoroughly explained how one public health campaign (e.g. polio eradication) improved the right to health for a chosen community, with accurate examples and terminology, wrapped in a clear speech format with engaging language and logical structure.',
    feedbackMiss:
      'This is marked across four strands (Crit A knowledge 6, Format 2, Communicating style 6, Organization 4). Make sure you: include an opening and closing; name one specific health goal, one community and one public health campaign; explain with reasons (not just describe); and write in an engaging speech style with logical transitions.',
    commandTerm: 'Explain',
    commandTermDefinition: 'Give a detailed account including reasons or causes.',
    rubricBands: [
      { marks: 'CritA 0', descriptor: 'The student does not achieve a standard described by any of the descriptors given below.' },
      {
        marks: 'CritA 1',
        descriptor:
          'Demonstrates limited knowledge and understanding by outlining how one public health campaign has helped to improve people’s right to health, using limited examples and limited relevant terminology. Responses likely brief, with little detail; terminology limited in accuracy/frequency.',
        exemplar:
          'The public health campaign to eradicate polio has shown that people’s right to health can be protected. The campaign gained support by giving children vaccines.',
      },
      {
        marks: 'CritA 2–3',
        descriptor:
          'Demonstrates adequate knowledge and understanding by describing how one public health campaign has helped to improve people’s right to health, using satisfactory examples and appropriate relevant terminology. Likely little/no reasoning; examples may lack detail. Terminology used accurately in correct context.',
        exemplar:
          'The public health campaign to eradicate polio has shown that the right to health can be protected when communities are reached with vaccines. The Global Polio Eradication Initiative began in 1988, when polio was paralysing thousands of children every year. Its aim is, through mass vaccination drives, to immunise every child.',
      },
      {
        marks: 'CritA 4–5',
        descriptor:
          'Demonstrates substantial knowledge and understanding by explaining how one public health campaign has helped to improve people’s right to health, using accurate examples and appropriate relevant terminology. Some reasoning; detailed response to the question. Terminology accurate and effective.',
        exemplar:
          '…The Global Polio Eradication Initiative began in 1988. Its aim is, through mass vaccination drives and raising awareness, to immunise every child so the disease cannot spread. For example, in India health workers travelled to remote villages to vaccinate children door to door, which built trust and reached families who lived far from clinics.',
      },
      {
        marks: 'CritA 6',
        descriptor:
          'Demonstrates detailed knowledge and understanding by thoroughly explaining how one public health campaign has helped to improve people’s right to health, using accurate and effective descriptions and explanations, and appropriate relevant terminology. Very detailed with clear reasoning and comprehensive understanding of public health campaigns.',
        exemplar:
          '…As a result, India was declared polio-free in 2014, protecting millions of children’s right to health. Through these campaigns, the right to health has moved closer to being a reality for whole communities, and the same approach is now being used against other preventable diseases.',
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
    exemplar: 'The WellSpring Trust.',
    keyConcepts: ['origin', 'source evaluation', 'OPVL'],
    keywords: ['WellSpring Trust', 'charity', 'origin'],
    feedbackHit: 'Correct — the origin is the producer, the WellSpring Trust.',
    feedbackMiss: 'The origin is simply who produced the source: the WellSpring Trust (the charity named in the stem).',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [{ marks: '1', descriptor: 'Award (1 mark) for the WellSpring Trust.' }],
  },

  q7_b: {
    marks: 1,
    exemplar: 'To educate the audience about community-based healthcare.',
    keyConcepts: ['purpose', 'source evaluation', 'OPVL'],
    keywords: ['educate', 'inform', 'community health worker', 'hospital-only care', 'global health', 'gain support'],
    feedbackHit:
      'Correct — you stated a valid purpose (e.g. to educate/inform about community-based healthcare or to gain support for healthcare for all).',
    feedbackMiss:
      'Purpose is why the interview was published. Valid answers include: to educate about community-based healthcare, inform about the drawbacks of hospital-only care, or gain support for healthcare for all.',
    commandTerm: 'State',
    commandTermDefinition: 'Give a specific name, value or other brief answer without explanation or calculation.',
    rubricBands: [
      {
        marks: '1',
        descriptor:
          'Accept any valid response. Responses may include: To educate the audience about community-based healthcare; To inform the audience about the drawbacks of hospital-only care; To gain support for healthcare for all.',
      },
    ],
  },

  q7_c: {
    marks: 3,
    exemplar:
      'The interview gives a first-hand account of how community-based healthcare works, which is a model where trained local workers visit homes to give basic care and vaccinations, helping a student understand how care can reach people who cannot travel to a hospital.',
    keyConcepts: ['value', 'source evaluation', 'OPVL', 'community health'],
    keywords: ['first-hand account', 'community health worker', 'global health', 'home visits', 'access to care'],
    feedbackHit:
      'You described one value in detail (e.g. the first-hand account of how community-based care reaches people who cannot travel), reaching the top band.',
    feedbackMiss:
      'Go beyond stating a value — consider it in detail. Explain what the interview usefully provides (e.g. a first-hand account of community-based care) and develop how that helps a global-health student.',
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
        descriptor: 'The student states one value of the interview for a student studying global health.',
        exemplar: 'The interview gives a first-hand account of community-based healthcare. (A 1-mark response is one sentence that hints at a single value.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one value of the interview for a student studying global health.',
        exemplar: 'The interview gives a first-hand account of how community-based healthcare works, where trained local workers visit homes to give basic care. (A 2-mark response is a single sentence with a single value elaborated on; brief detail.)',
      },
      {
        marks: '3',
        descriptor:
          'The student describes one value of the interview for a student studying global health. One value considered in detail. More important than length is the quality and depth provided.',
        exemplar:
          'The interview gives a first-hand account of how community-based healthcare works, which is a model where trained local workers visit homes to give basic care and vaccinations, helping a student understand how care can reach people who cannot travel to a hospital.',
      },
    ],
  },

  q7_d: {
    marks: 3,
    exemplar:
      'The interview only gives the view of one health worker, so it doesn’t show whether community-based care works the same way in other regions, which a student would need to judge how widely the model can be used.',
    keyConcepts: ['limitation', 'source evaluation', 'OPVL', 'community health'],
    keywords: ['single viewpoint', 'one health worker', 'bias', 'not representative', 'community health', 'global health'],
    feedbackHit:
      'You described one limitation in detail (e.g. the interview gives only one health worker’s view and may not represent other regions), reaching the top band.',
    feedbackMiss:
      'Identify a genuine limitation (e.g. only one viewpoint, possible bias as a campaigning charity, may not represent other regions) and develop it in detail rather than just stating it.',
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
        descriptor: 'The student states one limitation of the interview for a student studying global health.',
        exemplar: 'The interview only gives one person’s view. (A 1-mark response is one sentence that hints at a single limitation.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines one limitation of the interview for a student studying global health.',
        exemplar: 'The interview only gives the view of one health worker, so it may not show how care works in other regions. (A 2-mark response is a single sentence with a single limitation elaborated on; brief detail.)',
      },
      {
        marks: '3',
        descriptor:
          'The student describes one limitation of the interview for a student studying global health. One limitation considered in detail. More important than length is the quality and depth provided.',
        exemplar: 'The interview only gives the view of one health worker, so it doesn’t show whether community-based care works the same way in other regions, which a student would need to judge how widely the model can be used.',
      },
    ],
  },

  q8_: {
    marks: 4,
    exemplar:
      'Community-based care can reach people who would otherwise go untreated, such as families living far from any hospital. Instead of waiting until someone is seriously ill before making a long journey, a local health worker can visit homes and catch illnesses early. This helps prevent diseases from spreading and reduces the number of people who die from conditions that could have been treated.',
    keyConcepts: ['community health', 'hospital-only care', 'access to care', 'justification'],
    keywords: ['home visits', 'early treatment', 'remote villages', 'prevention', 'access', 'healthcare for all'],
    feedbackHit:
      'You justified the switch — one need considered in detail with reasoning (e.g. home visits catch illnesses early and prevent deaths), using your own words rather than copying the interview.',
    feedbackMiss:
      'Don’t just state a need or copy the interview. Develop one need in detail and add reasoning (e.g. why home visits catch illnesses early and prevent deaths) to reach the justify band of 4 marks.',
    commandTerm: 'Justify',
    commandTermDefinition: 'Give valid reasons or evidence to support an answer or conclusion.',
    rubricBands: [
      {
        marks: '0',
        descriptor:
          'The student does not reach a standard described by any of the descriptors below. Note: Responses may focus on either hospital-only care or community-based care or both – all approaches are valid and can be fully rewarded; copying the content of the source should not be rewarded.',
      },
      {
        marks: '1',
        descriptor: 'The student states the need to move away from hospital-only care to community-based care.',
        exemplar: 'Community-based care can reach more people. (A 1-mark response is one sentence that hints at the need without any detail.)',
      },
      {
        marks: '2',
        descriptor: 'The student outlines the need to move away from hospital-only care to community-based care.',
        exemplar: 'Community-based care can reach people who would otherwise go untreated, such as families living far from any hospital. (A 2-mark response is a single sentence with a need elaborated on; brief detail. An example is not a requirement at this level.)',
      },
      {
        marks: '3',
        descriptor:
          'The student describes the need to move away from hospital-only care to community-based care. One need considered in detail without comprehensive reasons; an example may support the description.',
        exemplar: 'Community-based care can reach people who would otherwise go untreated, such as families living far from any hospital. Instead of waiting until someone is seriously ill before making a long journey, a local health worker can visit homes and catch illnesses early.',
      },
      {
        marks: '4',
        descriptor:
          'The student justifies the need to move away from hospital-only care to community-based care. One need considered in detail, along with reason(s); an example may be given but is not essential.',
        exemplar:
          'Community-based care can reach people who would otherwise go untreated, such as families living far from any hospital. Instead of waiting until someone is seriously ill before making a long journey, a local health worker can visit homes and catch illnesses early. This helps prevent diseases from spreading and reduces the number of people who die from conditions that could have been treated.',
      },
    ],
  },

  q9_: {
    marks: 24,
    exemplar:
      'Criterion A (7–8): A thorough explanation of health indicators with accurate detail throughout and clear reasons. For example, life expectancy shows how long people live on average, but indicators such as child mortality, access to clean water and vaccination rates capture different aspects of a population’s health. Using a specific country (e.g. a country with rising life expectancy but high child mortality in poorer regions) shows why multiple indicators give a fuller picture. Terminology (life expectancy, child mortality, vaccination rate, sanitation, wellbeing) is used accurately and effectively throughout.\n\nCriterion D (7–8): At least two perspectives are developed thoroughly and balanced — e.g. health indicators like child mortality and vaccination rates give a much better, multi-dimensional understanding of a population’s wellbeing than life expectancy alone (pro); but indicators can hide inequality between richer and poorer districts, rely on incomplete data, or leave out factors like mental health and happiness (con). Ideas are synthesized into a clear, coherent and convincing conclusion that gives a judgment on the extent to which health indicators improve understanding. The essay also has a clear introduction, body and conclusion as separate paragraphs (C1: 2), formal clear language appropriate to an essay (C2: 3), and ideas that build logically with effective transitions (C3: 3).',
    keyConcepts: ['health indicators', 'wellbeing', 'child mortality', 'vaccination rates', 'perspectives', 'synthesis'],
    keywords: [
      'life expectancy',
      'child mortality',
      'vaccination rate',
      'clean water',
      'sanitation',
      'wellbeing',
      'perspectives',
      'conclusion',
      'examples',
    ],
    feedbackHit:
      'Top-band essay: you thoroughly explained health indicators with detailed examples (Crit A), weighed at least two balanced perspectives and synthesized them into a convincing judgement (Crit D), all in a well-structured, formally written essay with intro, body and conclusion.',
    feedbackMiss:
      'This is marked across four strands (Crit A knowledge 8, Format 2, Communicating 3, Organization 3, Crit D thinking 8). Make sure you: support arguments with specific examples (e.g. life expectancy vs child mortality for a named place); discuss at least two balanced perspectives; reach a clear conclusion that gives a judgement without introducing new points; and structure the essay in separate intro/body/conclusion paragraphs.',
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
          'Demonstrates adequate contextual and conceptual understanding in a description, using satisfactory examples and appropriate terminology. Evident knowledge of health indicators; example(s) accurate but may lack detail; terminology accurate in correct context.',
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
          'The student does not reach a standard described by any of the descriptors below. Note: Different health indicators can be considered as different perspectives. A response with one perspective is likely 1–2 marks. A response that does not include a conclusion is likely 1–2 marks. A conclusion shouldn’t present new aspects not included previously.',
      },
      {
        marks: 'CritD 1–2',
        descriptor:
          'Provides one perspective in a basic analysis and summarizes information to a limited extent in response to the question posed. One perspective considered superficially (general/vague points); response does not reach a conclusion or fully answer the question at this level.',
      },
      {
        marks: 'CritD 3–4',
        descriptor:
          'Provides different perspectives in an analysis and summarizes information to make clear arguments. At least two perspectives (e.g. pros and cons; insight on a community/country/region’s wellbeing; insight on different communities) included with development to show some understanding and implications; perspectives not likely balanced; a conclusion is expected but likely not fully developed.',
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
