import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — November 2024 · VARIANT 2 (isomorphic practice paper)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Construct mirrors humanities-nov-2024 exactly (same crit / command term / marks /
 * task structure). Surface scenario rewritten around GLOBAL HEALTH & ACCESS TO SAFE WATER.
 * Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1–Q5
 *   Task 2 Communicating (Crit A+C, 18): Q6
 *   Task 3 Thinking critically (Crit A+B+C+D, 36): Q7–Q9
 *
 * Stimulus sources are transcribed as text here (parallel original extracts) so the
 * paper is fully answerable today. Artefacts chosen to FIT each new scenario:
 *   Q1     → <DataTableInteractive/> (Source A — access to safely managed drinking water 2000 vs 2020)
 *   Q4     → <SlideDeck/>            (Kisumu mobile-clinic outreach investigation plan)
 *   Q6     → <InfoGraphicPanel/>     (Global Health Youth Summit poster — right to health)
 *   Q7/Q8  → <SourceDocViewer/>      (WellSpring Trust community health worker interview transcript)
 */

export interface PaperMeta {
  id: string
  subject: string
  session: 'May' | 'November'
  year: number
  totalMarks: number
  durationMinutes: number
  criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'humanities-nov-2024-v2',
  subject: 'Integrated Humanities',
  session: 'November',
  year: 2024,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'B',
    type: 'extended',
    topic: 'Access to safely managed drinking water 2000–2020 (Source A)',
    marks: 2,
    stem:
      'Look at Source A, which shows the change in the percentage of people using safely managed drinking water between 2000 and 2020, and answer the question that follows.\n\n' +
      'Source A is a table showing the share of the population (%) using safely managed drinking-water services for six world regions, comparing 2000 with 2020. The values are: Sub-Saharan Africa 24 (2000) → 31 (2020); Central & Southern Asia 41 → 57; Western Asia & Northern Africa 60 → 74; Latin America & Caribbean 68 → 80; Eastern & South-Eastern Asia 53 → 88; Europe & Northern America 91 → 95.',
    artefact: {
      component: 'DataTableInteractive',
      caption:
        'Source A — Share of population using safely managed drinking-water services (%), 2000 compared with 2020.',
      data: {
        title: 'Access to safely managed drinking water by region, 2000 vs 2020',
        source: 'WHO/UNICEF Joint Monitoring Programme (adapted)',
        caption: 'Figures show the percentage of each region’s population using safely managed drinking-water services.',
        headers: ['World region', '2000 (%)', '2020 (%)'],
        rows: [
          ['Sub-Saharan Africa', '24', '31'],
          ['Central & Southern Asia', '41', '57'],
          ['Western Asia & Northern Africa', '60', '74'],
          ['Latin America & Caribbean', '68', '80'],
          ['Eastern & South-Eastern Asia', '53', '88'],
          ['Europe & Northern America', '91', '95'],
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'With reference to **Source A**, **identify** the **two** regions that had the largest increase in the percentage of people using safely managed drinking water between 2000 and 2020.',
        marks: 2,
        ph: 'Name the two regions with the biggest rise in access to safe drinking water.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Reason access to safe water has improved',
    marks: 2,
    stem:
      'In 2021, the World Health Organization stated that “the share of the world’s population with access to safely managed drinking water has risen steadily over the past two decades, although large gaps remain between regions.”',
    tasks: [
      {
        label: '',
        text: '**Outline** one reason access to safe drinking water has improved over recent decades.',
        marks: 2,
        ph: 'Give one reason and briefly develop it.',
      },
    ],
  },
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Impact of access to safe water on a community or region',
    marks: 2,
    tasks: [
      {
        label: '',
        text: '**Outline** one impact access to safe drinking water can have on a community or region.',
        marks: 2,
        ph: 'Give one impact of access to safe water and briefly develop it.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Evaluate Kisumu mobile-clinic outreach action plan',
    marks: 8,
    stem:
      'As a public-health consultant, you have been asked by the county officials of Kisumu, Kenya to advise them on improving community health. You suggested that they should first investigate how well rural residents can reach basic healthcare. The county officials have shared their action plan for you to evaluate.\n\n' +
      'This media is interactive — click on the blue arrow icons to see their action plan. The action plan is presented as an interactive slideshow set out as a four-week investigation timeline:\n\n' +
      'Title slide: “Overall timeline for the investigation: 4 weeks”.\n' +
      'Step #1: Research on access to care — (1) Collect data from county records to find out which villages are furthest from a clinic. (2) Survey residents to ask how long it takes them to reach the nearest health facility.\n' +
      'Step #2: Research on common illnesses — (1) Review clinic records to find out which illnesses are most often treated.\n' +
      'Step #3: Research on clean water — (1) Test water from local sources to find out which villages lack safe drinking water. (2) Ask residents where they collect their water.\n' +
      'Step #4: Research on cost — (1) Compare the cost of treatment with average household income.\n' +
      'Step #5: Compile results.',
    artefact: {
      component: 'SlideDeck',
      caption:
        'Kisumu county officials’ proposed action plan for investigating community access to healthcare (4-week timeline).',
      data: {
        title: 'Community health access — Kisumu action plan',
        source: 'County Government of Kisumu',
        slides: [
          {
            title: 'Overall timeline for the investigation: 4 weeks',
            body: 'Proposed plan to investigate how well rural residents can reach basic healthcare. Click the arrows to view each step.',
          },
          {
            title: 'Step #1 — Research on access to care',
            bullets: [
              'Collect data from county records to find out which villages are furthest from a clinic.',
              'Survey residents to ask how long it takes them to reach the nearest health facility.',
            ],
          },
          {
            title: 'Step #2 — Research on common illnesses',
            bullets: [
              'Review clinic records to find out which illnesses are most often treated.',
            ],
          },
          {
            title: 'Step #3 — Research on clean water',
            bullets: [
              'Test water from local sources to find out which villages lack safe drinking water.',
              'Ask residents where they collect their water.',
            ],
          },
          {
            title: 'Step #4 — Research on cost',
            bullets: [
              'Compare the cost of treatment with average household income.',
            ],
          },
          {
            title: 'Step #5 — Compile results',
            body: 'Bring together the findings from each strand of the investigation.',
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the proposed action plan.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the investigation plan, then give an overall appraisal.',
      },
    ],
  },
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Planning an investigation into childhood vaccination coverage',
    marks: 12,
    stem:
      'Following your work with the county officials of Kisumu on access to healthcare, you have been asked by another region’s health authority to plan an investigation into childhood vaccination coverage (the share of children who receive recommended vaccines).',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question to help guide your investigation into childhood vaccination coverage.',
        marks: 2,
        ph: 'Write one research question that is both clear and focused (specify place/time/aspect).',
      },
      {
        label: 'b',
        text: '**Justify** the usefulness of your research question for the health authority looking into childhood vaccination coverage.',
        marks: 4,
        ph: 'Explain why your research question is useful, building from relevant to justified with reasons.',
      },
      {
        label: 'c',
        passage:
          'Sources to choose from:\n' +
          '• Local newspaper article about which towns families have moved to.\n' +
          '• Statistics on the percentage of children vaccinated in each district.\n' +
          '• Interview transcript with the director of the district health centre.\n' +
          '• Article from an NGO website on common reasons parents delay vaccinations.',
        text:
          'Select **one** of the sources below and **explain** whether or not it would be beneficial to your investigation on childhood vaccination coverage.\n\n' +
          '- Local newspaper article about which towns families have moved to.\n' +
          '- Statistics on the percentage of children vaccinated in each district.\n' +
          '- Interview transcript with the director of the district health centre.\n' +
          '- Article from an NGO website on common reasons parents delay vaccinations.',
        marks: 4,
        ph: 'Pick one source; explain in detail how it would (or would not) help, with reasons.',
      },
      {
        label: 'd',
        text: '**Outline** one challenge you may experience when investigating childhood vaccination coverage.',
        marks: 2,
        ph: 'Give one research challenge and develop it briefly.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Speech: public health campaigns and the right to health',
    marks: 18,
    stem:
      'You will be attending the next Global Health Youth Summit, which will take place in Geneva in 2025. The focus of this summit is the right to health, as shown on the poster below.\n\n' +
      'The poster reads: “Global Health Youth Summit — For the RIGHT TO HEALTH — 8–10 April 2025, Geneva, Switzerland”. It lists five health goals, each ticked: Access to clean water and sanitation; Access to vaccines and medicines; Maternal and child health; Mental health and wellbeing; Health information and education. The poster features a globe held in cupped hands surrounded by medical and water-drop symbols, with social media icons (Twitter, YouTube, Facebook, WhatsApp, Instagram).\n\n' +
      'You have been asked to deliver a speech at the summit to explain how public health campaigns have helped to improve people’s right to health.\n' +
      'In your speech, you must:\n' +
      '• include an opening and closing statement\n' +
      '• choose one health goal either from the poster or from your MYP studies or your own knowledge\n' +
      '• choose one community to explore your chosen health goal\n' +
      '• refer to one past or present public health campaign.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'Promotional poster for the Global Health Youth Summit for the right to health, 8–10 April 2025, Geneva, Switzerland.',
      data: {
        title: 'Global Health Youth Summit — For the RIGHT TO HEALTH',
        source: '8–10 April 2025, Geneva, Switzerland',
        intro:
          'A promotional poster featuring a globe held in cupped hands, surrounded by medical and water-drop symbols. The five health goals below are each marked with a green tick.',
        layout: 'grid',
        blocks: [
          {
            heading: 'Health goals highlighted',
            icon: '✔',
            items: [
              'Access to clean water and sanitation',
              'Access to vaccines and medicines',
              'Maternal and child health',
              'Mental health and wellbeing',
              'Health information and education',
            ],
          },
          {
            heading: 'Summit details',
            icon: '🌐',
            items: [
              'Global Health Youth Summit — For the RIGHT TO HEALTH',
              '8–10 April 2025',
              'Geneva, Switzerland',
            ],
            note: 'Imagery: a globe held in cupped hands surrounded by medical and water-drop symbols.',
          },
          {
            heading: 'Share / follow',
            icon: '📣',
            items: ['Twitter', 'YouTube', 'Facebook', 'WhatsApp', 'Instagram'],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a speech to deliver at the summit to **explain** how public health campaigns have helped to improve people’s right to health. In your speech, you **must**: include an opening and closing statement; choose **one** health goal (from the poster, your MYP studies or your own knowledge); choose **one** community to explore your chosen health goal; refer to **one** past or present public health campaign.',
        marks: 18,
        ph: 'Write a speech with opening/closing; explain how one public health campaign improved the right to health for one community.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + B + C + D) ────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'OPVL: usefulness of the WellSpring Trust interview on community health workers',
    marks: 8,
    stem:
      'In terms of its origin, purpose, value and limitations, consider the usefulness of the interview below to an MYP student studying global health. The interview was published by a well-known charity called the WellSpring Trust, which campaigns for healthcare for all.\n\n' +
      'In the interview, a community health worker describes her daily work. She explains that the traditional health system relied only on hospitals in towns, so people in remote villages often did not get treatment until they were seriously ill. She contrasts this with the community health worker model, in which trained local people visit homes to give basic care, advice and vaccinations, and refer serious cases to clinics. She argues that visiting people where they live catches illnesses early, builds trust, and means fewer people travel long distances or go untreated, helping move towards healthcare for everyone.',
    artefact: {
      component: 'SourceDocViewer',
      caption:
        'WellSpring Trust interview with a community health worker, contrasting hospital-only care with community-based care.',
      data: {
        title: 'Interview: a day in the life of a community health worker',
        attribution: 'WellSpring Trust (charity)',
        kind: 'Interview transcript',
        paragraphs: [
          'Interviewer: How did people get healthcare before community health workers?',
          'Health worker: For a long time, care meant going to a hospital in the town. Many families in remote villages could not afford the journey, so they often waited until someone was seriously ill before seeking help.',
          'Interviewer: What is different about your work?',
          'Health worker: I am a trained local person, and I visit homes in my own village. I give basic care and advice, check on mothers and babies, and provide vaccinations. If a case is serious, I refer it to the clinic.',
          'Interviewer: Why does this matter?',
          'Health worker: Visiting people where they live means we catch illnesses early and build trust. Fewer people travel long distances or go untreated. I believe this is how we reach healthcare for everyone.',
        ],
        glossary: {
          'refer': 'Send a patient on to a clinic or hospital for further treatment.',
          'vaccination': 'A medicine that protects a person against a disease.',
        },
      },
    },
    tasks: [
      { label: 'a', text: '**State** the origin of the interview.', marks: 1, ph: 'Name who produced the interview.' },
      { label: 'b', text: '**State** the purpose of the interview.', marks: 1, ph: 'State why the interview was published.' },
      { label: 'c', text: '**Describe** one value of the interview for a student studying global health.', marks: 3, ph: 'Give one value and develop it in detail.' },
      { label: 'd', text: '**Describe** one limitation of the interview for a student studying global health.', marks: 3, ph: 'Give one limitation and develop it in detail.' },
    ],
  },
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Justify moving from hospital-only care to community-based care',
    marks: 4,
    stem:
      'The interview from question 7 has been repeated here for information. (Same WellSpring Trust interview with a community health worker as in Question 7 — see the Q7 stem for the full transcript.)',
    artefact: {
      component: 'SourceDocViewer',
      caption:
        'WellSpring Trust interview with a community health worker (repeated from Question 7).',
      data: {
        title: 'Interview: a day in the life of a community health worker',
        attribution: 'WellSpring Trust (charity)',
        kind: 'Interview transcript',
        paragraphs: [
          'Interviewer: How did people get healthcare before community health workers?',
          'Health worker: For a long time, care meant going to a hospital in the town. Many families in remote villages could not afford the journey, so they often waited until someone was seriously ill before seeking help.',
          'Interviewer: What is different about your work?',
          'Health worker: I am a trained local person, and I visit homes in my own village. I give basic care and advice, check on mothers and babies, and provide vaccinations. If a case is serious, I refer it to the clinic.',
          'Interviewer: Why does this matter?',
          'Health worker: Visiting people where they live means we catch illnesses early and build trust. Fewer people travel long distances or go untreated. I believe this is how we reach healthcare for everyone.',
        ],
        glossary: {
          'refer': 'Send a patient on to a clinic or hospital for further treatment.',
          'vaccination': 'A medicine that protects a person against a disease.',
        },
      },
    },
    tasks: [
      {
        label: '',
        text: 'Using the interview, **justify** the need to move away from hospital-only care to community-based care.',
        marks: 4,
        ph: 'Explain a need to switch to community-based care and support it with reasons (not copying the source).',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Essay: To what extent do health indicators improve understanding of a population’s wellbeing?',
    marks: 24,
    stem:
      'In the past, life expectancy was the main focus when judging how healthy a population was. Recently, other indicators measuring different aspects of health — such as child mortality, access to clean water, vaccination rates and mental wellbeing — have also been used to understand a population’s health.\n\n' +
      'Write a well-structured essay in response to the following.',
    tasks: [
      {
        label: '',
        text:
          '**To what extent** can health indicators give us a better understanding into a community’s **or** country’s **or** region’s wellbeing?\n\n' +
          'In your essay, you **must**:\n' +
          '• provide examples to support your arguments\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'Write a structured essay weighing perspectives on whether health indicators improve understanding of a population’s wellbeing, with examples and a conclusion.',
      },
    ],
  },
]
