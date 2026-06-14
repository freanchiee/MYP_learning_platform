import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2021 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Source: geogmmoeengtz0xxm (N21). Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (B, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (C, 2) · Q7 (C, 4) · Q8 (D, 6) · Q9 (24)
 *
 * Theme: climate change, individual/community action, forced migration & urban growth.
 * Text/list sources are transcribed as original extracts; visual sources become
 * interactive artefacts wired via the `artefact` field:
 *   Q1  → InteractiveChart  (Source A — yearly global temperature anomaly 1960–2019, scatter/line)
 *   Q3  → InfoGraphicPanel  (Source B — the MYP year-4 class action plan + questionnaire)
 *   Q4  → InfoGraphicPanel  (Source C — "6 actions preventing climate change" infographic)
 *   Q5  → SlideDeck         (the six-city urban-growth video, transcribed as profile cards)
 *   Q6  → InteractiveChart  (Source D — forced-migration pictograph 2008 vs 2018, grouped bar)
 *   Q8  → ChoroplethWorld   (Source E — world map of internally displaced people, 2016)
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
  id: 'geography-nov-2021',
  subject: 'Geography',
  session: 'November',
  year: 2021,
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
    topic: 'Investigating — reading a climate trend (Source A)',
    marks: 2,
    stem:
      '**Source A** is a graph showing the yearly average global temperature change from 1960 to 2019. ' +
      'Temperatures are shown as the difference (in degrees Celsius) from the average global temperature of the late 19th century (the 0.0 baseline).',
    artefact: {
      component: 'InteractiveChart',
      caption:
        'Source A — yearly average global temperature change, 1960–2019. Values are the difference (°C) from the late-19th-century average (0.0 line). Hover a point to read its value.',
      data: {
        kind: 'line',
        title: 'Yearly average global temperature change: 1960–2019',
        source: 'Global temperature record (recreated)',
        x: {
          label: 'Year',
          categories: [
            '1960', '1963', '1966', '1969', '1972', '1975', '1978', '1981',
            '1984', '1987', '1990', '1993', '1996', '1999', '2002', '2005',
            '2008', '2011', '2014', '2016', '2018', '2019',
          ],
        },
        y: { label: 'Temperature difference in degrees Celsius', min: -0.5, max: 1.0, ticks: [-0.5, 0.0, 0.5, 1.0], unit: '°C' },
        series: [
          {
            name: 'Temperature anomaly (°C)',
            color: '#e03131',
            points: [
              0.02, -0.05, -0.10, -0.15, 0.00, -0.10, 0.05, 0.30,
              0.10, 0.30, 0.40, 0.25, 0.32, 0.42, 0.62, 0.68,
              0.55, 0.62, 0.75, 0.97, 0.85, 0.95,
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'Using data from **Source A**, **outline** the trend in global temperatures from 1960–2019.',
        marks: 2,
        ph: 'State the overall trend AND quote data from the graph (e.g. an overall increase, with 2018 having the highest temperature).',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Explaining a human cause of the climate trend',
    marks: 4,
    stem: '**Source A** is repeated for reference (the yearly average global temperature change from 1960 to 2019).',
    tasks: [
      {
        label: '',
        text: '**Explain** how the trend shown in **Source A** could be caused by **one** human activity.',
        marks: 4,
        ph: 'Take ONE human activity (e.g. transport / burning fossil fuels) and build from a stated cause to a detailed explanation with reasoning (greenhouse gases trap heat → temperatures rise).',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — evaluating a class action plan (Source B)',
    marks: 8,
    stem:
      'In 2018, a 15-year-old Swedish girl called Greta Thunberg started a protest, refusing to go to school unless politicians took urgent action on climate change. Her protest has grown into a global movement led by young people.\n\n' +
      'An MYP year 4 class has been inspired by Greta. They have decided to investigate what individuals in the local community could do to reduce the impacts of climate change. The class will collect information from local people to find out about the actions they were already taking and the actions they would be willing to take in the future. This information will help the class choose a service project for MYP year 5.\n\n' +
      'The class produced the following action plan (**Source B**) to gather primary data. You will be asked to evaluate this action plan.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'Source B — the MYP year-4 class action plan and questionnaire. The marked stimulus is this plan; hover a block to spotlight it.',
      data: {
        title: 'Source B — MYP class action plan',
        source: 'MYP year 4 class',
        intro:
          'Statement of inquiry: Individual actions can lead to changes in communities. · Research question: What actions are people in our local community taking to reduce greenhouse gas emissions?',
        layout: 'flow',
        blocks: [
          {
            heading: 'Method · Step 1 — Secondary data',
            icon: '🏛️',
            items: ['Go to the local government to ask what is being done already.'],
          },
          {
            heading: 'Method · Step 2 — Primary data',
            icon: '📋',
            items: [
              'Use a questionnaire at a local shopping centre.',
              'Work in pairs; each pair collects 5 questionnaires (total 50 people).',
            ],
          },
          {
            heading: 'Questionnaire',
            icon: '❓',
            note: 'Q1 uses a 1 (Not at all) → 10 (Extremely concerned) scale. Q2 & Q3 use the same five checkbox actions.',
            items: [
              'Q1. On a scale of 1 to 10, how concerned are you about climate change?',
              'Q2. Do you take any of these actions to reduce greenhouse gas emissions? (Save energy · Recycle · Eat local foods · Use public transport · Don’t eat meat)',
              'Q3. Which of these actions would you be willing to take in the future? (same five options)',
              'Q4. Name one thing that prevents you from taking action to reduce greenhouse gas emissions.',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the action plan.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the plan/questionnaire, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — design your own local-community investigation (Source C)',
    marks: 12,
    stem:
      'Following Greta’s actions and the MYP class project, you will now design an investigation into your own local community. Your investigation must be based on **one** of the six possible actions shown in **Source C**.\n\n' +
      '**Statement of inquiry:** Individual actions can lead to changes in the way communities respond to climate change.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source C — "6 actions preventing climate change". Your investigation focuses on one of these actions.',
      data: {
        title: 'Source C — 6 actions preventing climate change',
        source: 'Sustainability for all · activesustainability.com (recreated)',
        layout: 'grid',
        blocks: [
          { heading: '1. Alternative forms of transport', icon: '🚲', items: ['Walk, cycle or use public transport instead of a private car.'] },
          { heading: '2. Save energy', icon: '💡', items: ['Switch off devices and lights; use energy-efficient appliances.'] },
          { heading: '3. Implement the 3 Rs', icon: '♻️', items: ['Reduce, Reuse and Recycle to cut waste and emissions.'] },
          { heading: '4. Change in diet', icon: '🥕', items: ['Eat more local and plant-based food; less meat.'] },
          { heading: '5. Take action to save forests', icon: '🌱', items: ['Protect and plant trees; support reforestation.'] },
          { heading: '6. Raise awareness', icon: '📢', items: ['Inform others and campaign for community climate action.'] },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text:
          'Choose which action your investigation will focus on. Using the statement of inquiry and your chosen action, **formulate** a clear and focused research question for an investigation into your local community.\n\n' +
          '**Statement of inquiry:** Individual actions can lead to changes in the way communities respond to climate change.',
        marks: 2,
        ph: 'Write an RQ that is both clear AND focused — include at least two elements (time, place, space or other), e.g. "How would increasing food production in Doha reduce its carbon footprint by 2030?". Rewording the SoI scores 0.',
      },
      {
        label: 'b',
        text: '**Justify** the relevance of your research question to the statement of inquiry.',
        marks: 4,
        ph: 'Build from stating the link to the SoI → outlining → describing a factor in detail → justifying with reasoning why the RQ is relevant.',
      },
      {
        label: 'c',
        text: '**Identify** one secondary source of information that would be helpful for your investigation.',
        marks: 1,
        ph: 'One specific secondary source (e.g. statistics from your local government; a GIS map of greenhouse-gas emissions; a relevant newspaper/website article). Vague answers like "statistics" score 0.',
      },
      {
        label: 'd',
        text: '**Explain** one benefit of including the secondary source you identified in part (c) in your investigation.',
        marks: 3,
        ph: 'Build from stating a benefit → outlining → explaining in detail with reasoning how the source helps your investigation.',
      },
      {
        label: 'e',
        text: '**Outline** one challenge that you might face when carrying out your investigation.',
        marks: 2,
        ph: 'Name a valid challenge (e.g. gathering enough primary data) and add brief detail on why it is a challenge.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — persuasive speech on urban growth',
    marks: 18,
    stem:
      'A video shows the development of six urban settlements over the past 35 years. Watch it (transcribed below) to prepare to answer a question on the challenges of urban growth.\n\n' +
      'You have been invited to be the guest speaker at this year’s International Urban Design Conference. Your speech will focus on the challenges of urban growth for communities and the environment.',
    artefact: {
      component: 'SlideDeck',
      caption: 'The six-city urban-growth video, transcribed as profile cards. Use these examples to prepare your speech.',
      data: {
        title: 'Six urban settlements — 35 years of growth',
        source: 'Conference video (transcript)',
        slides: [
          { title: 'Dubai, United Arab Emirates (UAE)', body: 'In 2018, Dubai had the 12th-busiest airport in the world, welcoming over 15 million visitors attracted by the growing economy.' },
          { title: 'Singapore', body: 'Singapore is a global financial centre and has the second-largest port in the world. Although densely populated, it has the highest quality of life in Asia.' },
          { title: 'Kampala, Uganda', body: 'Kampala is one of the fastest-growing cities in Africa and its population is predicted to grow from 1.6 million in 2019 to 3.9 million by 2030 due to high birth rates and rural-urban migration.' },
          { title: 'Dhaka, Bangladesh', body: 'Dhaka is the fastest-growing mega-city in the world with rapid economic growth. It has an estimated 400 000 mostly poor migrants per year.' },
          { title: 'San Jose, Costa Rica', body: 'One third of Costa Rica’s population lives in San Jose. Its growth plan is based on sustainable development.' },
          { title: 'Las Vegas, USA', body: 'Las Vegas has grown to become known as the "Entertainment Capital of the World" with over 2 million inhabitants and over 42 million visitors in 2018.' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a **persuasive** speech to **explain** at least one possible solution to the challenges presented by urban growth.\n\n' +
          'In your speech, you should:\n' +
          '• include examples from your MYP studies\n' +
          '• refer to either communities **or** the environment.',
        marks: 18,
        ph: 'A persuasive speech explaining at least one solution to a challenge of urban growth, with MYP examples. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Reading a forced-migration pictograph (Source D)',
    marks: 2,
    stem:
      '**Source D** was part of a newspaper article on forced migration. It is a pictograph showing the number of forced migrants worldwide in 2008 and in 2018, split into internally displaced people (IDPs), refugees and asylum seekers.',
    artefact: {
      component: 'InteractiveChart',
      caption:
        'Source D — number of forced migrants in 2008 and 2018 (millions). Hover a bar to read its value. 2008 total: 42 million; 2018 total: 70.8 million.',
      data: {
        kind: 'bar',
        title: 'Number of forced migrants in 2008 and 2018',
        source: 'Newspaper article on forced migration (recreated)',
        x: { label: 'Category of forced migrant', categories: ['Internally displaced people (IDPs)', 'Refugees', 'Asylum seekers'] },
        y: { label: 'Number of people (millions)', min: 0, max: 45, ticks: [0, 10, 20, 30, 40], unit: 'million' },
        series: [
          { name: '2008', color: '#1971c2', points: [26, 15.2, 0.827] },
          { name: '2018', color: '#e8590c', points: [41.3, 25.9, 3.5] },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the increase in the number of refugees from 2008 to 2018.',
        marks: 1,
        ph: 'Subtract the 2008 refugee figure from the 2018 figure (25.9 − 15.2). One number, in millions.',
      },
      {
        label: 'b',
        text: 'Select the correct response to complete the sentence: "The number of ______ is more than four times bigger in 2018 than it was in 2008." (internally displaced people / refugees / asylum seekers)',
        marks: 1,
        ph: 'Pick the category whose 2018 value is more than 4× its 2008 value (827 000 → 3.5 million).',
      },
    ],
  },
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Purpose & value of a source (Source D)',
    marks: 4,
    stem: '**Source D** (the forced-migration pictograph) is repeated to help you answer the questions that follow.',
    tasks: [
      {
        label: 'a',
        text: '**Outline** the purpose of **Source D** in a newspaper article on forced migration.',
        marks: 2,
        ph: 'State the purpose (e.g. to inform readers) then elaborate (e.g. about the change in the number of forced migrants between 2008 and 2018).',
      },
      {
        label: 'b',
        text: '**Outline** one value of using **Source D** in a newspaper article on forced migration.',
        marks: 2,
        ph: 'State one value of the pictograph for a newspaper, then elaborate on why it is useful in that newspaper context (not just a general value).',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — limitations of an IDP infographic (Source E)',
    marks: 6,
    stem:
      '**Source E** is an infographic from an NGO called **Migration Matters**, showing internally displaced people (IDPs) by country in 2016.\n\n' +
      'You will be asked to describe the limitations of **Source E** from the perspective of:\n' +
      '• an MYP year 3 student investigating the causes of forced migration\n' +
      '• an Indian government official writing a report on the impacts of internally displaced people in India.',
    artefact: {
      component: 'ChoroplethWorld',
      caption:
        'Source E — internally displaced people (IDPs) by country, 2016 (NGO "Migration Matters", recreated). Hover a highlighted country to read it.',
      data: {
        mode: 'highlight',
        title: 'Source E — Internally displaced people (IDPs), 2016',
        source: 'NGO "Migration Matters" infographic (recreated)',
        highlightLabel: 'Country reporting IDPs in 2016',
        baseLabel: 'No data shown',
        highlight: [
          'Colombia', 'China', 'India', 'Philippines', 'Syria', 'Yemen',
          'South Sudan', 'Cuba', 'Mexico', 'Ecuador', 'Honduras', 'Haiti',
          'Senegal', 'Italy', 'Israel', 'Fiji',
        ],
        caption:
          'IDP figures shown: Colombia 7.4M · China 7.4M · India 2.4M · Philippines 5.9M · Syria 824 000 · Yemen 478 000 · South Sudan 281 000 · Cuba 1M · Mexico 311 000 · Ecuador 289 000 · Honduras 190 000 · Haiti 46 691 · Senegal 24 000 · Italy 31 000 · Israel 75 000 · Fiji 76 000. The map only shows disaster-related displacement for 2016.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Explain** one limitation of **Source E** from the perspective of an MYP year 3 student investigating the **causes** of forced migration.',
        marks: 3,
        ph: 'One limitation for this student, with reasoning (e.g. it only shows disaster-related causes, not wars; the student needs other causes for their investigation).',
      },
      {
        label: 'b',
        text: '**Explain** one limitation of **Source E** from the perspective of an Indian government official writing a report on the impacts of internally displaced people in India.',
        marks: 3,
        ph: 'One limitation for this official, with reasoning (e.g. the map is from 2016, so it is out of date; the official needs current figures or the report could be invalid).',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — benefits vs consequences of migration',
    marks: 24,
    stem: '"Migration creates more benefits for societies than negative consequences." To what extent do you agree with this statement?',
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '"Migration creates more benefits for societies than negative consequences." **To what extent** do you agree with this statement?\n\n' +
          'In your essay, you must include:\n' +
          '• appropriate geographical terminology\n' +
          '• positive **and** negative consequences of migration\n' +
          '• examples from your MYP studies to support your arguments.',
        marks: 24,
        ph: 'A structured essay weighing positive and negative consequences of migration, with named examples and a clear conclusion. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
