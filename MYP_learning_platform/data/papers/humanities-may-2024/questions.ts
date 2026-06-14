import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — May 2024 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Source: M24-INS. Total 80 marks, 120 minutes, 3 tasks:
 *   Task 1 Investigating (Crit A+B): Q1–Q5
 *   Task 2 Communicating (Crit A+C): Q6
 *   Task 3 Thinking critically (Crit A+B+C+D): Q7–Q9
 *
 * Text/list/table stimulus is transcribed fully into stem/passage so the paper is
 * fully answerable today. Visual stimulus becomes an interactive artefact wired via
 * the `artefact` field on the relevant question:
 *   Q4      → <SlideDeck/>  (4-page student investigation notebook)
 *   Q7 / Q8 → <SlideDeck/>  (Source A — Lyon 2019 redevelopment plan website)
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
  id: 'humanities-may-2024',
  subject: 'Integrated Humanities',
  session: 'May',
  year: 2024,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// Source A — Lyon 2019 redevelopment plan (interactive council website).
// Reused by Q7 (source evaluation) and Q8 (economic-development explanation).
const LYON_SOURCE_A: import('@/lib/types').ArtefactSpec = {
  component: 'SlideDeck',
  caption:
    'Source A — Website of the Town Planning Council of Lyon, France, detailing four methods used in its 2019 urban redevelopment plan combining natural and cultural heritage. Page through the landing page and the four numbered sections.',
  data: {
    title: 'Lyon — 2019 redevelopment plan',
    source: 'Lyon Town Planning Council / Lyon Council website',
    slides: [
      {
        title: 'Town Planning Council of Lyon — 2019 redevelopment plan',
        body: 'Click on the sections below for more information about how we redeveloped our city. The plan combines the city’s natural and cultural heritage in the city centre.',
        bullets: [
          '1. Reuse of historic buildings — a grand domed historic building',
          '2. Historic and modern buildings — a hillside town with a basilica',
          '3. Areas of cultural interest — a modern opera house',
          '4. Natural spaces — a landscaped flower garden',
        ],
      },
      {
        title: '1. Reuse of historic buildings',
        body: 'A 19th century prison was turned into a residential site and a medieval hospital was turned into a luxury hotel.',
        bullets: [
          'Image 1 — Residential site: the former prison, a brick courtyard building with a central tower.',
          'Image 2 — Hotel: a long riverside classical building with a dome (the former medieval hospital).',
        ],
      },
      {
        title: '2. Historic and modern buildings',
        body: 'Modern houses were built close to and surrounding historic buildings, showing that both could co-exist.',
        bullets: [
          'Image 1 — A hillside view of orange-roofed historic and modern houses below a basilica at sunset.',
        ],
      },
      {
        title: '3. Areas of cultural interest',
        body: 'Historic buildings were altered to include modern features while respecting the character and history of the area. Click on images 1–3 for further information.',
        bullets: [
          'Image 1 — A modern opera house with a curved dark roof on a historic base.',
          'Image 2 — An ornate arched historic facade with stained-glass-style windows.',
          'Image 3 — Excavated ancient Roman stone ruins on a hillside.',
        ],
      },
      {
        title: '4. Natural spaces',
        body: 'Forests, green paths and natural areas are preserved. Bodies of water for recreational activities and ecological reasons are also preserved.',
        bullets: [
          'Image 1 — A landscaped flower garden with a sprinkler and a lamppost.',
          'Image 2 — A reflective body of water with large stones in the foreground and cyclists on a riverside path with historic buildings behind.',
        ],
      },
    ],
  },
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Stakeholder who benefitted from industrialization',
    marks: 1,
    stem:
      'A short-response knowledge question on industrialization. A response can reference any industrialization period.',
    tasks: [
      {
        label: '',
        text: '**Identify** one stakeholder who has benefitted from industrialization.',
        marks: 1,
        ph: 'Name one stakeholder, e.g. investors, workers, business owners.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Reason why industrialization occurred',
    marks: 2,
    stem:
      'A short-response question on the causes of industrialization. Note: a response can reference any industrialization period. Note: ease, speed and improvements are considered as changes/consequences and not reasons.',
    tasks: [
      {
        label: '',
        text: '**Outline** one reason why industrialization occurred.',
        marks: 2,
        ph: 'Give a brief account of one cause, with brief detail.',
      },
    ],
  },
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'How society changed after industrialization',
    marks: 3,
    stem:
      'A short extended-response question. Note: a society can be considered as a nation, a country, or any structured group of people. Note: a response can reference any industrialization period.',
    tasks: [
      {
        label: '',
        text: '**Describe** how society changed after industrialization.',
        marks: 3,
        ph: 'Give a detailed account of one societal change; an example may support.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Evaluate a student investigation into smartphone use by farmers',
    marks: 8,
    stem:
      'As a part of their research project, a group of MYP year 5 students in India has led an investigation into understanding the impact of technical innovations.\n\n' +
      '**Statement of inquiry: Technological innovations have changed lives at local levels.**\n\n' +
      'The students chose to investigate the impact of smartphone use on farmers and their livelihood. They had one month to complete their investigation.\n\n' +
      'One of the students kept notes on how they conducted their investigation. The investigation process is presented across the interactive 4-page notebook below. You will be asked to evaluate their investigation process.\n\n' +
      '**Summary of the notebook:**\n' +
      '• **Week 1** — The students wrote the research question “To what extent has smartphone use changed the livelihood of Indian farmers in rural areas?” and interviewed six farmers from their village, asking how they use smartphones to help with farming and how much they rely on the information they receive through their smartphones.\n' +
      '• **Findings from the interviews** — All six farmers had used smartphones for at least three years; smartphones are a very reliable source for weather updates and government agriculture policies and plans; a farming helpline app gave an extreme-weather warning that saved one farmer’s harvested crop; some find fair prices for their crops via smartphone; three of the six often use social media during work.\n' +
      '• **Week 3** — They found secondary information on a global forum for agriculture website (www.oecd.org, published 2018) listing smartphone uses for farmers: awareness of government policies; access to market prices; managing their finances; instant weather information; awareness of new technology and innovation in farming.\n' +
      '• **Week 4** — They visited another village in their local area and took photographs of farmers using smartphones and of cellular phone towers.',
    artefact: {
      component: 'SlideDeck',
      caption:
        'Q4 stimulus — the student investigation notebook (spiral-bound, handwritten). Page through the four weeks of the MYP year 5 students’ investigation into smartphone use among Indian farmers.',
      data: {
        title: 'Investigation notebook',
        source: 'MYP year 5 student investigation, India',
        slides: [
          {
            title: 'Page 1 — Investigation: Technological innovations have changed lives at local levels',
            body: 'We spent the first week coming up with the following research question and arranging an interview with local farmers. Research question: “To what extent has smartphone use changed the livelihood of Indian farmers in rural areas?” We interviewed six farmers from our village.',
            bullets: [
              'We asked them: How do you use your smartphone to help you with farming?',
              'We asked them: How much do you rely on the information you receive through your smartphone?',
            ],
          },
          {
            title: 'Page 2 — Interesting facts from interviewing the farmers',
            bullets: [
              'They have all been using a smartphone for at least three years.',
              'Their smartphones are a very reliable source for weather updates and government agriculture policies and plans.',
              'A farming helpline app helped one farmer protect a harvested crop that would have been destroyed by heavy rain — the app gave an extreme-weather warning.',
              'Some of them use their smartphones to find fair prices for their crops.',
              'Three of the six farmers often use their smartphones to access social media during work.',
            ],
          },
          {
            title: 'Page 3 — Secondary information (global agriculture forum website, published 2018)',
            body: 'In week three we found the following information on a global forum for agriculture website. It provided the following smartphone uses for farmers (Source: www.oecd.org):',
            bullets: [
              'Awareness of government policies',
              'Access to market prices',
              'Managing their finances',
              'Instant weather information',
              'Awareness of new technology and innovation in farming',
            ],
          },
          {
            title: 'Page 4 — Fieldwork in another village (week four)',
            body: 'We visited another village in our local area in the fourth week. We took photographs of:',
            bullets: [
              'Farmers using smartphones — a group of farmers sitting on a bench by a green paddy field, looking at their phones.',
              'Cellular phone towers — a telecom mast beside buildings.',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** their investigation process.',
        marks: 8,
        ph: 'Weigh strengths and limitations; give an overall appraisal of the process.',
      },
    ],
  },
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Plan an investigation: industrialization changed lives around the world',
    marks: 12,
    stem:
      'You have been asked to investigate the impact of industrialization on the world. You have been given the following statement of inquiry:\n\n' +
      '**Statement of inquiry: Industrialization has changed lives around the world.**',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question to help you investigate the statement of inquiry.',
        marks: 2,
        ph: 'Write a clear AND focused research question (specify a group/place).',
      },
      {
        label: 'b',
        text: '**Justify** why the research question is worthy of investigation.',
        marks: 4,
        ph: 'Give a reasoned argument why the RQ is worth investigating.',
      },
      {
        label: 'c',
        text: '**State** one primary source you would use for your investigation.',
        marks: 1,
        ph: 'Name one primary source relevant to your RQ/SoI.',
      },
      {
        label: 'd',
        text: '**State** one secondary source you would use for your investigation.',
        marks: 1,
        ph: 'Name one secondary source relevant to your RQ/SoI.',
      },
      {
        label: 'e',
        text: '**Identify** two people you would interview to broaden your investigation.',
        marks: 2,
        ph: 'Name two specific people relevant to your investigation.',
      },
      {
        label: 'f',
        text: '**Outline** the information you would gather from **one** of the people you identified in part (e).',
        marks: 2,
        ph: 'Brief account of the information you’d gather, with brief detail.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Script explaining to an economic agent how to help with labour shortage',
    marks: 18,
    stem:
      'As part of an MYP school project on the state of the economy around the world, your team has been tasked to create a short video about labour shortage. You must work on the script to explain to one economic agent how they could help with labour shortage for a country of your choice.\n\n' +
      'These are the economic agents you can choose from:\n' +
      '• Consumers\n' +
      '• Producers\n' +
      '• Governments\n' +
      '• Banks\n\n' +
      'Your script must:\n' +
      '• include an introduction and conclusion\n' +
      '• inform, engage, and convince so that your ideas lead the economic agent into action\n' +
      '• include two ways in which the economic agent could help.\n\n' +
      'Note: if you only provide one way in which the economic agent can help, the maximum mark that can be awarded for Criterion A is 3 marks.',
    tasks: [
      {
        label: '',
        text:
          '**Explain** to **one** economic agent how they could help with labour shortage for a country of your choice. Write the script for a short video (with an introduction and conclusion) that informs, engages and convinces, and includes **two** ways in which the economic agent could help.',
        marks: 18,
        ph: 'Write a persuasive video script: hook, 2 ways the agent can help, call to action.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + B + C + D) ─────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Source evaluation: origin, purpose, value and limitation of Source A (Lyon)',
    marks: 8,
    stem:
      'In 2019, the Town Planning Council of Lyon in France introduced an urban plan aimed at combining its natural and cultural heritage in the city centre. **Source A** shows the council’s website, which gives details of four of the methods they used to do this.\n\n' +
      'Look at **Source A** and answer the questions that follow. You will be asked to analyse it in terms of its origin, purpose, value and limitations for an MYP student studying sustainable management of urban environments.\n\n' +
      '**The four methods shown in Source A:**\n' +
      '1. **Reuse of historic buildings** — a 19th-century prison turned into a residential site and a medieval hospital turned into a luxury hotel.\n' +
      '2. **Historic and modern buildings** — modern houses built around historic buildings to show they can co-exist.\n' +
      '3. **Areas of cultural interest** — historic buildings altered to include modern features while respecting the area’s character and history.\n' +
      '4. **Natural spaces** — forests, green paths, natural areas and bodies of water preserved for recreation and ecological reasons.',
    artefact: LYON_SOURCE_A,
    tasks: [
      { label: 'a', text: '**State** the origin of **Source A**.', marks: 1, ph: 'Who/where the source comes from.' },
      { label: 'b', text: '**State** the purpose of **Source A**.', marks: 1, ph: 'Why the source was made.' },
      {
        label: 'c',
        text: '**Describe** one value of **Source A** for an MYP student studying sustainable management of urban environments.',
        marks: 3,
        ph: 'Give a detailed account of one value of the source.',
      },
      {
        label: 'd',
        text: '**Describe** one limitation of **Source A** for an MYP student studying sustainable management of urban environments.',
        marks: 3,
        ph: 'Give a detailed account of one limitation of the source.',
      },
    ],
  },
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Explain how a Lyon redevelopment method contributed to economic development',
    marks: 4,
    stem:
      '**Source A** (the website of the Town Planning Council of Lyon) is repeated here for information.',
    artefact: LYON_SOURCE_A,
    tasks: [
      {
        label: '',
        text:
          '**Explain** how **one** of the **following** methods used by the Town Planning Council of Lyon contributed to the economic development of the city.\n\n' +
          '○ Reuse of historic buildings\n' +
          '○ Historic and modern buildings\n' +
          '○ Areas of cultural interest\n' +
          '○ Natural spaces',
        marks: 4,
        ph: 'Give a detailed account with reasons of one method’s economic contribution.',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'To what extent has redevelopment of one place contributed to its sustainable management (essay)',
    marks: 24,
    stem:
      'Write a well-structured essay in response to the question below.\n\n' +
      'Note: a place can be an area, town, building, etc. Perspectives must be considered depending on the place selected (e.g. if you select cities as a place, two different cities could be considered as two perspectives). A response that does not include a conclusion indicating to what extent the redevelopment of one place has contributed to its sustainable management is likely to be awarded 1–2 marks for Criterion D. A conclusion should not present new aspects not previously included in the essay.',
    tasks: [
      {
        label: '',
        text:
          'Write a well-structured essay in response to the following question:\n\n' +
          '**To what extent** has the redevelopment of **one** place contributed to its sustainable management?\n\n' +
          'In your essay, you must:\n' +
          '• provide example(s) from your MYP studies and/or your own knowledge\n' +
          '• consider different perspectives.\n\n' +
          'You **cannot** use the redevelopment of the city of Lyon as an example.',
        marks: 24,
        ph: 'Balanced essay: example (not Lyon), multiple perspectives, reasoned judgement.',
      },
    ],
  },
]
