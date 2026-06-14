import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — November 2024 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Source: N24-INS. Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1–Q5
 *   Task 2 Communicating (Crit A+C, 18): Q6
 *   Task 3 Thinking critically (Crit A+B+C+D, 36): Q7–Q9
 *
 * Stimulus sources are transcribed as text here (parallel original extracts) so the
 * paper is fully answerable today. Visual sources are attached as data-driven
 * interactive artefacts:
 *   Q1     → <InteractiveChart/>   (Source A — international migration 1990 vs 2020)
 *   Q4     → <SlideDeck/>          (Madrid social-integration action plan slideshow)
 *   Q6     → <InfoGraphicPanel/>   (Young Global Leaders Conference poster — photo recreated)
 *   Q7/Q8  → <SlideDeck/>          (Xein Environmental linear vs circular economy video)
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
  id: 'humanities-nov-2024',
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
    topic: 'International migration by region 1990–2020 (Source A)',
    marks: 2,
    stem:
      'Look at Source A, which shows the increase in international migration between 1990 and 2020, and answer the question that follows.\n\n' +
      'Source A is a multi-panel chart showing the number of international migrants (in millions) for six world regions, comparing 1990 with 2020. Each region has its own small chart rising from the 1990 value to the 2020 value. The values are: Oceania 4.73 (1990) → 9.38 (2020); Latin America and the Caribbean 7.14 → 14.8; Africa 15.7 → 25.4; Northern America 27.6 → 58.7; Asia 48.2 → 85.6; Europe 49.6 → 86.7. The vertical axis is labelled “Millions”.',
    artefact: {
      component: 'InteractiveChart',
      caption:
        'Source A — Number of international migrants by region (millions), 1990 compared with 2020.',
      data: {
        kind: 'bar',
        title: 'International migrants by region, 1990 vs 2020',
        source: 'United Nations, International Migration 2020',
        x: {
          label: 'World region',
          categories: [
            'Oceania',
            'Latin America & Caribbean',
            'Africa',
            'Northern America',
            'Asia',
            'Europe',
          ],
        },
        y: { label: 'Millions', min: 0, max: 90, ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], unit: 'm' },
        series: [
          { name: '1990', color: '#adb5bd', points: [4.73, 7.14, 15.7, 27.6, 48.2, 49.6] },
          { name: '2020', color: '#1971c2', points: [9.38, 14.8, 25.4, 58.7, 85.6, 86.7] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'With reference to **Source A**, **identify** the **two** regions that had the largest increase in millions of people between 1990 and 2020.',
        marks: 2,
        ph: 'Name the two regions with the biggest rise in migrant numbers.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Reason international migration has increased',
    marks: 2,
    stem:
      'In 2020, the United Nations stated that “the estimated number of international migrants has increased over the past five decades.”',
    tasks: [
      {
        label: '',
        text: '**Outline** one reason international migration has increased over the past five decades.',
        marks: 2,
        ph: 'Give one reason and briefly develop it.',
      },
    ],
  },
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Impact of migration on a country or region',
    marks: 2,
    tasks: [
      {
        label: '',
        text: '**Outline** one impact migration can have on a country or region.',
        marks: 2,
        ph: 'Give one impact of migration and briefly develop it.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Evaluate Madrid social integration action plan',
    marks: 8,
    stem:
      'As a government consultant, you have been asked by the city officials of Madrid, Spain to advise them on the integration of migrants into their community. You suggested that they should investigate the social integration of migrants. The city officials have shared their action plan for you to evaluate.\n\n' +
      'This media is interactive — click on the blue arrow icons to see their action plan. The action plan is presented as an interactive slideshow (styled as a web browser with the flag and coat of arms of the Community of Madrid):\n\n' +
      'Title slide: “Overall timeline for the investigation: 4 weeks”.\n' +
      'Step #1: Research on the sense of belonging — (1) Collect data from the government archives to find out in which areas migrants live. (2) Survey migrants that arrived in the last 5 years to ask if they feel that they are part of the community.\n' +
      'Step #2: Research on language and schooling — (1) Find out if a majority of migrants speak the local language. (2) Contact local schools to enquire on the number of migrants who graduated compared to local students.\n' +
      'Step #3: Research on healthcare — (1) Collect data from hospitals to find out if migrants have access to healthcare.\n' +
      'Step #4: Research on political participation — (1) Review statistics of last general election to find out if migrants voted.\n' +
      'Step #5: Compile results.',
    artefact: {
      component: 'SlideDeck',
      caption:
        'Madrid city officials’ proposed action plan for investigating the social integration of migrants (4-week timeline).',
      data: {
        title: 'Social integration of migrants — Madrid action plan',
        source: 'Community of Madrid',
        slides: [
          {
            title: 'Overall timeline for the investigation: 4 weeks',
            body: 'Proposed plan to investigate the social integration of migrants in Madrid. Click the arrows to view each step.',
          },
          {
            title: 'Step #1 — Research on the sense of belonging',
            bullets: [
              'Collect data from the government archives to find out in which areas migrants live.',
              'Survey migrants that arrived in the last 5 years to ask if they feel that they are part of the community.',
            ],
          },
          {
            title: 'Step #2 — Research on language and schooling',
            bullets: [
              'Find out if a majority of migrants speak the local language.',
              'Contact local schools to enquire on the number of migrants who graduated compared to local students.',
            ],
          },
          {
            title: 'Step #3 — Research on healthcare',
            bullets: [
              'Collect data from hospitals to find out if migrants have access to healthcare.',
            ],
          },
          {
            title: 'Step #4 — Research on political participation',
            bullets: [
              'Review statistics of last general election to find out if migrants voted.',
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
    topic: 'Planning an investigation into economic integration of migrants',
    marks: 12,
    stem:
      'Following your work with the city officials of Madrid on the social integration of migrants, you have been asked by another city’s local government to plan an investigation into the economic integration of migrants.',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question to help guide your investigation into the economic integration of migrants.',
        marks: 2,
        ph: 'Write one research question that is both clear and focused (specify place/time/aspect).',
      },
      {
        label: 'b',
        text: '**Justify** the usefulness of your research question for the local government looking into the economic integration of migrants.',
        marks: 4,
        ph: 'Explain why your research question is useful, building from relevant to justified with reasons.',
      },
      {
        label: 'c',
        passage:
          'Sources to choose from:\n' +
          '• Local newspaper article about migrants’ countries of origin.\n' +
          '• Statistics on the wages of migrants that live in the community.\n' +
          '• Interview transcript with the director of the community centre.\n' +
          '• Article from an NGO website on the most common jobs given to migrants.',
        text:
          'Select **one** of the sources below and **explain** whether or not it would be beneficial to your investigation on the economic integration of migrants.\n\n' +
          '- Local newspaper article about migrants’ countries of origin.\n' +
          '- Statistics on the wages of migrants that live in the community.\n' +
          '- Interview transcript with the director of the community centre.\n' +
          '- Article from an NGO website on the most common jobs given to migrants.',
        marks: 4,
        ph: 'Pick one source; explain in detail how it would (or would not) help, with reasons.',
      },
      {
        label: 'd',
        text: '**Outline** one challenge you may experience when investigating the economic integration of migrants.',
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
    topic: 'Speech: social protest movements and human rights',
    marks: 18,
    stem:
      'You will be attending the next Young Global Leaders Conference, which will take place in New York in 2025. The focus of this conference is human rights, as shown on the poster below.\n\n' +
      'The poster reads: “Young Global Leaders Conference For HUMAN RIGHTS — 22–24 June 2025, New York, USA”. It lists five human rights, each ticked: Right to equality and non-discrimination; Right to participation and inclusion; Right to education; Right to choose your religion; Right to freedom of opinion. The poster features a globe surrounded by multicoloured hands and social media icons (Twitter, YouTube, Facebook, WhatsApp, Instagram).\n\n' +
      'You have been asked to deliver a speech at the conference to explain how social protest movements have helped to minimize the violation of human rights.\n' +
      'In your speech, you must:\n' +
      '• include an opening and closing statement\n' +
      '• choose one human right either from the poster or from your MYP studies or your own knowledge\n' +
      '• choose one community to explore your chosen human right\n' +
      '• refer to one past or present social protest movement.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'Promotional poster for the Young Global Leaders Conference for Human Rights, 22–24 June 2025, New York, USA.',
      data: {
        title: 'Young Global Leaders Conference — For HUMAN RIGHTS',
        source: '22–24 June 2025, New York, USA',
        intro:
          'A promotional poster featuring a globe encircled by multicoloured raised human hands. The five human rights below are each marked with a green tick.',
        layout: 'grid',
        blocks: [
          {
            heading: 'Human rights highlighted',
            icon: '✔',
            items: [
              'Right to equality and non-discrimination',
              'Right to participation and inclusion',
              'Right to education',
              'Right to choose your religion',
              'Right to freedom of opinion',
            ],
          },
          {
            heading: 'Conference details',
            icon: '🌐',
            items: [
              'Young Global Leaders Conference For HUMAN RIGHTS',
              '22–24 June 2025',
              'New York, USA',
            ],
            note: 'Imagery: a globe surrounded by colourful raised hands.',
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
          'Write a speech to deliver at the conference to **explain** how social protest movements have helped to minimize the violation of human rights. In your speech, you **must**: include an opening and closing statement; choose **one** human right (from the poster, your MYP studies or your own knowledge); choose **one** community to explore your chosen human right; refer to **one** past or present social protest movement.',
        marks: 18,
        ph: 'Write a speech with opening/closing; explain how one protest movement reduced human rights violations for one community.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + B + C + D) ────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'OPVL: usefulness of the Xein Environmental video on the circular economy',
    marks: 8,
    stem:
      'In terms of its origin, purpose, value and limitations, consider the usefulness of the video below to an MYP student studying sustainable development. The video was produced by a well-known charity called Xein Environmental which campaigns for a more sustainable world.\n\n' +
      'The video (an animated explainer with a cartoon businessman) makes these key points via subtitles: “The 20th century was dominated by a simple business mindset” → “that asked one very important question –” → “how much money can we make from this product?” → “20th century industry was not environmentally friendly.” → “We would take Earth’s materials, make them into things we want,” → “use them for a while, and throw them away.” → “This is a linear economy.” → “Some 21st century business leaders are asking a completely different set of questions.” → “Can we think of additional ways to benefit society when designing this product?” → “Who else can benefit from this product other than the consumer?” → “How can the product help improve the system that we are a part of?” → “We need to move away from the linear economy so that resources are never used up.” → “Instead, they are used again and again, resulting in a more sustainable world.” → “This is a circular economy.”',
    artefact: {
      component: 'SlideDeck',
      caption:
        'Xein Environmental animated explainer contrasting the linear economy with the circular economy (subtitle sequence).',
      data: {
        title: 'Linear economy vs circular economy',
        source: 'Xein Environmental (charity)',
        slides: [
          { title: 'A 20th-century mindset', body: 'The 20th century was dominated by a simple business mindset that asked one very important question –' },
          { title: 'One question', body: 'How much money can we make from this product?' },
          { title: 'Not environmentally friendly', body: '20th century industry was not environmentally friendly.' },
          {
            title: 'Take, make, use, throw away',
            bullets: [
              'We would take Earth’s materials, make them into things we want,',
              'use them for a while, and throw them away.',
            ],
          },
          { title: 'This is a linear economy', body: 'Materials flow one way: extracted, used, then discarded as waste.' },
          { title: 'A different set of questions', body: 'Some 21st century business leaders are asking a completely different set of questions.' },
          {
            title: '21st-century questions',
            bullets: [
              'Can we think of additional ways to benefit society when designing this product?',
              'Who else can benefit from this product other than the consumer?',
              'How can the product help improve the system that we are a part of?',
            ],
          },
          {
            title: 'Resources used again and again',
            bullets: [
              'We need to move away from the linear economy so that resources are never used up.',
              'Instead, they are used again and again, resulting in a more sustainable world.',
            ],
          },
          { title: 'This is a circular economy', body: 'Resources are continuously reused, reducing waste and supporting a more sustainable world.' },
        ],
      },
    },
    tasks: [
      { label: 'a', text: '**State** the origin of the video.', marks: 1, ph: 'Name who produced the video.' },
      { label: 'b', text: '**State** the purpose of the video.', marks: 1, ph: 'State why the video was made.' },
      { label: 'c', text: '**Describe** one value of the video for a student studying sustainable development.', marks: 3, ph: 'Give one value and develop it in detail.' },
      { label: 'd', text: '**Describe** one limitation of the video for a student studying sustainable development.', marks: 3, ph: 'Give one limitation and develop it in detail.' },
    ],
  },
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Justify moving from a linear to a circular economy',
    marks: 4,
    stem:
      'The video from question 7 has been repeated here for information. (Same Xein Environmental animated video on the linear economy and the circular economy as in Question 7 — see the Q7 stem for the full subtitle transcript.)',
    artefact: {
      component: 'SlideDeck',
      caption:
        'Xein Environmental animated explainer on the linear and circular economy (repeated from Question 7).',
      data: {
        title: 'Linear economy vs circular economy',
        source: 'Xein Environmental (charity)',
        slides: [
          { title: 'A 20th-century mindset', body: 'The 20th century was dominated by a simple business mindset that asked one very important question –' },
          { title: 'One question', body: 'How much money can we make from this product?' },
          { title: 'Not environmentally friendly', body: '20th century industry was not environmentally friendly.' },
          {
            title: 'Take, make, use, throw away',
            bullets: [
              'We would take Earth’s materials, make them into things we want,',
              'use them for a while, and throw them away.',
            ],
          },
          { title: 'This is a linear economy', body: 'Materials flow one way: extracted, used, then discarded as waste.' },
          { title: 'A different set of questions', body: 'Some 21st century business leaders are asking a completely different set of questions.' },
          {
            title: '21st-century questions',
            bullets: [
              'Can we think of additional ways to benefit society when designing this product?',
              'Who else can benefit from this product other than the consumer?',
              'How can the product help improve the system that we are a part of?',
            ],
          },
          {
            title: 'Resources used again and again',
            bullets: [
              'We need to move away from the linear economy so that resources are never used up.',
              'Instead, they are used again and again, resulting in a more sustainable world.',
            ],
          },
          { title: 'This is a circular economy', body: 'Resources are continuously reused, reducing waste and supporting a more sustainable world.' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'Using the video, **justify** the need to move away from a linear economy to a circular economy.',
        marks: 4,
        ph: 'Explain a need to switch to a circular economy and support it with reasons (not copying the source).',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Essay: To what extent do development indicators improve understanding of development?',
    marks: 24,
    stem:
      'In the past, gross domestic product (GDP) was the main focus when measuring development. Recently, other indicators measuring different aspects of life such as population dynamics, education and quality of life have also been used.\n\n' +
      'Write a well-structured essay in response to the following.',
    tasks: [
      {
        label: '',
        text:
          '**To what extent** can development indicators give us a better understanding into a city’s **or** country’s **or** region’s development?\n\n' +
          'In your essay, you **must**:\n' +
          '• provide examples to support your arguments\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'Write a structured essay weighing perspectives on whether development indicators improve understanding of development, with examples and a conclusion.',
      },
    ],
  },
]
