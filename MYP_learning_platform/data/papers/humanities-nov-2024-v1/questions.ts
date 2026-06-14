import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — November 2024 · VARIANT 1 (isomorphic practice paper)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Construct mirrors humanities-nov-2024 exactly (same crit / command term / marks /
 * task structure). Surface scenario rewritten around URBANIZATION & SUSTAINABLE CITIES.
 * Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1–Q5
 *   Task 2 Communicating (Crit A+C, 18): Q6
 *   Task 3 Thinking critically (Crit A+B+C+D, 36): Q7–Q9
 *
 * Stimulus sources are transcribed as text here (parallel original extracts) so the
 * paper is fully answerable today. Artefacts chosen to FIT each new scenario:
 *   Q1     → <InteractiveChart/>   (Source A — urban population share 1980 vs 2020, line)
 *   Q4     → <DataTableInteractive/> (Curitiba green-transport investigation action plan)
 *   Q6     → <InfoGraphicPanel/>   (World Cities Youth Forum poster — sustainable cities)
 *   Q7/Q8  → <SourceDocViewer/>    (Greenleaf Cities NGO article on the 15-minute city)
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
  id: 'humanities-nov-2024-v1',
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
    topic: 'Share of population living in urban areas 1980–2020 (Source A)',
    marks: 2,
    stem:
      'Look at Source A, which shows the change in the percentage of people living in urban areas between 1980 and 2020, and answer the question that follows.\n\n' +
      'Source A is a line chart showing the urban population share (% of total population) for six world regions, comparing 1980 with 2020. Each region rises from its 1980 value to its 2020 value. The values are: Sub-Saharan Africa 22.6 (1980) → 41.4 (2020); South Asia 23.1 → 35.6; East Asia 21.5 → 64.2; Middle East & North Africa 48.3 → 65.9; Latin America & Caribbean 64.8 → 81.2; Europe & Central Asia 67.1 → 71.4. The vertical axis is labelled “% urban”.',
    artefact: {
      component: 'InteractiveChart',
      caption:
        'Source A — Share of population living in urban areas (% of total), 1980 compared with 2020.',
      data: {
        kind: 'line',
        title: 'Urban population share by region, 1980 vs 2020',
        source: 'World Bank, World Urbanization Prospects (adapted)',
        x: {
          label: 'World region',
          categories: [
            'Sub-Saharan Africa',
            'South Asia',
            'East Asia',
            'Middle East & North Africa',
            'Latin America & Caribbean',
            'Europe & Central Asia',
          ],
        },
        y: { label: '% urban', min: 0, max: 90, ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], unit: '%' },
        series: [
          { name: '1980', color: '#adb5bd', points: [22.6, 23.1, 21.5, 48.3, 64.8, 67.1] },
          { name: '2020', color: '#1971c2', points: [41.4, 35.6, 64.2, 65.9, 81.2, 71.4] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'With reference to **Source A**, **identify** the **two** regions that had the largest increase in the percentage of people living in urban areas between 1980 and 2020.',
        marks: 2,
        ph: 'Name the two regions with the biggest rise in urban population share.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Reason urbanization has increased',
    marks: 2,
    stem:
      'In 2020, the World Bank stated that “for the first time in history, more than half of the world’s population now lives in towns and cities, and that share has risen steadily over recent decades.”',
    tasks: [
      {
        label: '',
        text: '**Outline** one reason urbanization has increased over recent decades.',
        marks: 2,
        ph: 'Give one reason and briefly develop it.',
      },
    ],
  },
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Impact of urbanization on a city or region',
    marks: 2,
    tasks: [
      {
        label: '',
        text: '**Outline** one impact urbanization can have on a city or region.',
        marks: 2,
        ph: 'Give one impact of urbanization and briefly develop it.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Evaluate Curitiba sustainable-transport action plan',
    marks: 8,
    stem:
      'As a planning consultant, you have been asked by the city officials of Curitiba, Brazil to advise them on making urban transport more sustainable. You suggested that they should first investigate how residents currently travel around the city. The city officials have shared their action plan for you to evaluate.\n\n' +
      'The action plan is presented below as a four-week investigation timeline set out in a table. Each step lists the research methods the team will use.\n\n' +
      'Step #1: Research on travel habits — (1) Collect data from the transport authority to find out which routes are most used. (2) Survey residents to ask how they usually travel to work or school.\n' +
      'Step #2: Research on air quality — (1) Review monitoring-station data to find out which neighbourhoods have the worst air pollution.\n' +
      'Step #3: Research on access — (1) Map how far residents live from the nearest bus rapid transit (BRT) stop. (2) Contact local schools to ask how students travel.\n' +
      'Step #4: Research on cost — (1) Compare the price of a monthly bus pass with average local wages.\n' +
      'Step #5: Compile results.',
    artefact: {
      component: 'DataTableInteractive',
      caption:
        'Curitiba city officials’ proposed action plan for investigating sustainable urban transport (4-week timeline).',
      data: {
        title: 'Sustainable urban transport — Curitiba action plan',
        source: 'City of Curitiba, Planning Office',
        caption: 'Overall timeline for the investigation: 4 weeks.',
        headers: ['Step', 'Focus', 'Proposed research methods'],
        rows: [
          [
            '1',
            'Travel habits',
            'Collect data from the transport authority on the most-used routes; survey residents on how they usually travel to work or school.',
          ],
          [
            '2',
            'Air quality',
            'Review monitoring-station data to find out which neighbourhoods have the worst air pollution.',
          ],
          [
            '3',
            'Access',
            'Map how far residents live from the nearest bus rapid transit (BRT) stop; contact local schools to ask how students travel.',
          ],
          [
            '4',
            'Cost',
            'Compare the price of a monthly bus pass with average local wages.',
          ],
          ['5', 'Compile results', 'Bring together the findings from each strand of the investigation.'],
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
    topic: 'Planning an investigation into urban green space',
    marks: 12,
    stem:
      'Following your work with the city officials of Curitiba on sustainable transport, you have been asked by another city’s local government to plan an investigation into residents’ access to urban green space (parks and other public green areas).',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question to help guide your investigation into residents’ access to urban green space.',
        marks: 2,
        ph: 'Write one research question that is both clear and focused (specify place/time/aspect).',
      },
      {
        label: 'b',
        text: '**Justify** the usefulness of your research question for the local government looking into residents’ access to urban green space.',
        marks: 4,
        ph: 'Explain why your research question is useful, building from relevant to justified with reasons.',
      },
      {
        label: 'c',
        passage:
          'Sources to choose from:\n' +
          '• Local newspaper article about which neighbourhoods residents moved from.\n' +
          '• Statistics on the area of public parkland per resident in each district.\n' +
          '• Interview transcript with the director of the city parks department.\n' +
          '• Article from an NGO website on the health benefits of access to green space.',
        text:
          'Select **one** of the sources below and **explain** whether or not it would be beneficial to your investigation on residents’ access to urban green space.\n\n' +
          '- Local newspaper article about which neighbourhoods residents moved from.\n' +
          '- Statistics on the area of public parkland per resident in each district.\n' +
          '- Interview transcript with the director of the city parks department.\n' +
          '- Article from an NGO website on the health benefits of access to green space.',
        marks: 4,
        ph: 'Pick one source; explain in detail how it would (or would not) help, with reasons.',
      },
      {
        label: 'd',
        text: '**Outline** one challenge you may experience when investigating residents’ access to urban green space.',
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
    topic: 'Speech: community action and the right to a healthy environment',
    marks: 18,
    stem:
      'You will be attending the next World Cities Youth Forum, which will take place in Singapore in 2025. The focus of this forum is building sustainable cities, as shown on the poster below.\n\n' +
      'The poster reads: “World Cities Youth Forum — Building SUSTAINABLE CITIES — 14–16 May 2025, Singapore”. It lists five city goals, each ticked: Clean air and water; Affordable public transport; Safe and inclusive public spaces; Access to green space; Resilience to climate change. The poster features a stylised skyline of green towers surrounded by trees and people on bicycles, with social media icons (Twitter, YouTube, Facebook, WhatsApp, Instagram).\n\n' +
      'You have been asked to deliver a speech at the forum to explain how community action movements have helped to make cities more sustainable.\n' +
      'In your speech, you must:\n' +
      '• include an opening and closing statement\n' +
      '• choose one city goal either from the poster or from your MYP studies or your own knowledge\n' +
      '• choose one city or community to explore your chosen goal\n' +
      '• refer to one past or present community action movement.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'Promotional poster for the World Cities Youth Forum on building sustainable cities, 14–16 May 2025, Singapore.',
      data: {
        title: 'World Cities Youth Forum — Building SUSTAINABLE CITIES',
        source: '14–16 May 2025, Singapore',
        intro:
          'A promotional poster featuring a green city skyline surrounded by trees, parks and people cycling. The five city goals below are each marked with a green tick.',
        layout: 'grid',
        blocks: [
          {
            heading: 'City goals highlighted',
            icon: '✔',
            items: [
              'Clean air and water',
              'Affordable public transport',
              'Safe and inclusive public spaces',
              'Access to green space',
              'Resilience to climate change',
            ],
          },
          {
            heading: 'Forum details',
            icon: '🏙',
            items: [
              'World Cities Youth Forum — Building SUSTAINABLE CITIES',
              '14–16 May 2025',
              'Singapore',
            ],
            note: 'Imagery: a skyline of green towers surrounded by trees and cyclists.',
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
          'Write a speech to deliver at the forum to **explain** how community action movements have helped to make cities more sustainable. In your speech, you **must**: include an opening and closing statement; choose **one** city goal (from the poster, your MYP studies or your own knowledge); choose **one** city or community to explore your chosen goal; refer to **one** past or present community action movement.',
        marks: 18,
        ph: 'Write a speech with opening/closing; explain how one community action movement made one city/community more sustainable.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + B + C + D) ────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'OPVL: usefulness of the Greenleaf Cities article on the 15-minute city',
    marks: 8,
    stem:
      'In terms of its origin, purpose, value and limitations, consider the usefulness of the article below to an MYP student studying sustainable cities. The article was published by a well-known charity called Greenleaf Cities, which campaigns for greener, more liveable cities.\n\n' +
      'The article explains the idea of a “15-minute city”: a city designed so that residents can reach most of their daily needs — shops, schools, healthcare, parks and work — within a 15-minute walk or bicycle ride from home. It argues that twentieth-century cities were built around the private car, spreading homes far from workplaces and forcing long commutes that increase traffic and air pollution. It contrasts this with the 15-minute city, in which neighbourhoods mix homes, shops and services so that people drive less, walk and cycle more, and have more time for community life. The article concludes that moving towards 15-minute neighbourhoods can cut emissions, improve health and make cities fairer.',
    artefact: {
      component: 'SourceDocViewer',
      caption:
        'Greenleaf Cities article explaining the “15-minute city” and contrasting it with car-dependent urban design.',
      data: {
        title: 'What is a 15-minute city?',
        attribution: 'Greenleaf Cities (charity)',
        kind: 'NGO article',
        paragraphs: [
          'For most of the twentieth century, cities were built around the private car. Homes were placed far from workplaces, shops and schools, and people had little choice but to drive long distances every day.',
          'This car-dependent design spread cities outwards, increased traffic congestion and worsened air pollution. Many residents spent hours commuting and had little time left for family or community life.',
          'A “15-minute city” is designed differently. It aims to let residents reach most of their daily needs — shops, schools, healthcare, parks and work — within a 15-minute walk or bicycle ride from home.',
          'In a 15-minute neighbourhood, homes, shops and services are mixed together. People drive less, walk and cycle more, and public spaces become busier and safer.',
          'We believe that moving towards 15-minute neighbourhoods can cut emissions, improve residents’ health and make our cities fairer and more pleasant places to live.',
        ],
        glossary: {
          'commute': 'The regular journey between home and work or school.',
          'congestion': 'Overcrowding of roads by too much traffic.',
        },
      },
    },
    tasks: [
      { label: 'a', text: '**State** the origin of the article.', marks: 1, ph: 'Name who produced the article.' },
      { label: 'b', text: '**State** the purpose of the article.', marks: 1, ph: 'State why the article was written.' },
      { label: 'c', text: '**Describe** one value of the article for a student studying sustainable cities.', marks: 3, ph: 'Give one value and develop it in detail.' },
      { label: 'd', text: '**Describe** one limitation of the article for a student studying sustainable cities.', marks: 3, ph: 'Give one limitation and develop it in detail.' },
    ],
  },
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Justify moving from a car-dependent city to a 15-minute city',
    marks: 4,
    stem:
      'The article from question 7 has been repeated here for information. (Same Greenleaf Cities article on the 15-minute city as in Question 7 — see the Q7 stem for the full text.)',
    artefact: {
      component: 'SourceDocViewer',
      caption:
        'Greenleaf Cities article on the “15-minute city” (repeated from Question 7).',
      data: {
        title: 'What is a 15-minute city?',
        attribution: 'Greenleaf Cities (charity)',
        kind: 'NGO article',
        paragraphs: [
          'For most of the twentieth century, cities were built around the private car. Homes were placed far from workplaces, shops and schools, and people had little choice but to drive long distances every day.',
          'This car-dependent design spread cities outwards, increased traffic congestion and worsened air pollution. Many residents spent hours commuting and had little time left for family or community life.',
          'A “15-minute city” is designed differently. It aims to let residents reach most of their daily needs — shops, schools, healthcare, parks and work — within a 15-minute walk or bicycle ride from home.',
          'In a 15-minute neighbourhood, homes, shops and services are mixed together. People drive less, walk and cycle more, and public spaces become busier and safer.',
          'We believe that moving towards 15-minute neighbourhoods can cut emissions, improve residents’ health and make our cities fairer and more pleasant places to live.',
        ],
        glossary: {
          'commute': 'The regular journey between home and work or school.',
          'congestion': 'Overcrowding of roads by too much traffic.',
        },
      },
    },
    tasks: [
      {
        label: '',
        text: 'Using the article, **justify** the need to move away from a car-dependent city to a 15-minute city.',
        marks: 4,
        ph: 'Explain a need to switch to a 15-minute city and support it with reasons (not copying the source).',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Essay: To what extent do liveability indicators improve understanding of a city’s development?',
    marks: 24,
    stem:
      'In the past, the size of a city’s economy or its population was the main focus when judging how well a city was doing. Recently, other indicators measuring different aspects of urban life — such as air quality, access to green space, housing affordability and public transport — have also been used to rank how “liveable” a city is.\n\n' +
      'Write a well-structured essay in response to the following.',
    tasks: [
      {
        label: '',
        text:
          '**To what extent** can liveability indicators give us a better understanding into a city’s **or** region’s development?\n\n' +
          'In your essay, you **must**:\n' +
          '• provide examples to support your arguments\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'Write a structured essay weighing perspectives on whether liveability indicators improve understanding of a city’s development, with examples and a conclusion.',
      },
    ],
  },
]
