import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — May 2023 · VARIANT 2 (isomorphic alternative)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Derived from humanities-may-2023. Same construct (crit / command term / marks /
 * task structure / total 80), NEW scenarios + scenario-fitting artefacts.
 * Distinct from both the source and v1.
 *
 * Task 1 Investigating (Crit A + B, 26): Q1–Q4
 * Task 2 Communicating (Crit A + C, 18): Q5
 * Task 3 Thinking critically (Crit A + C + D, 36): Q6–Q8
 *
 * Artefact components (chosen to fit each new scenario; varied across the paper):
 *   Q2  Source A   → <ChoroplethWorld/>      (highlight map of regions facing freshwater stress)
 *   Q3  Action plan → <SlideDeck/>            (a 4-slide research action-plan deck)
 *   Q5  Source B   → <SlideDeck/>             (a multi-page "Slow Fashion Festival" campaign website)
 *   Q6/Q7 Source C → <InteractiveChart/> line (urban population share of Kenya, 1970 vs 2010 — value-readable trend)
 *   Q8  Source D   → <InfoGraphicPanel/>      (the four factors of production as a process panel)
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
  id: 'humanities-may-2023-v2',
  subject: 'Integrated Humanities',
  session: 'May',
  year: 2023,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// ── Source C — Kenya urban population share, 1970 and 2010 ───────────────────
// A value-readable LINE chart of the percentage of Kenya's population living in
// urban areas, by decade. In 1970 Kenya was overwhelmingly rural; by 2010 the
// urban share had climbed steeply as cities such as Nairobi grew. A later
// question asks the student to read values off this chart for BOTH eras and
// justify why a planning minister changed policy slogans — the same
// "read a value + justify" skill as the source's population pyramids.
const kenyaUrbanData = {
  kind: 'line' as const,
  title: 'Kenya — share of population living in urban areas, 1970–2010',
  source: 'Meridian Geography Press, Nairobi, Kenya',
  x: { label: 'Year', categories: ['1970', '1980', '1990', '2000', '2010'] },
  y: { label: 'Urban population', min: 0, max: 30, ticks: [0, 5, 10, 15, 20, 25, 30], unit: '%' },
  series: [
    { name: '% of population in urban areas', color: '#1971c2', points: [10, 14, 17, 20, 24] },
  ],
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'International institutions and regional cooperation',
    marks: 4,
    stem:
      'After periods of conflict and division, groups of countries have formed international institutions and organizations intended to bring peace, stability and closer cooperation to their regions and the world.',
    tasks: [
      {
        label: '',
        text: '**Explain** how **one** international institution or organization has improved either peace, stability or cooperation in the world.',
        marks: 4,
        ph: 'Name one institution (e.g. the European Union); give reasoning for the improvement.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Resolving a current global challenge (Source A)',
    marks: 2,
    stem:
      'Look at **Source A** and answer the question that follows.\n\n' +
      'Source A — a world map titled “Where freshwater is running short”. The map highlights the regions where many people already face severe shortages of clean freshwater, a challenge that affects health, farming and migration across borders.\n\n' +
      'Text accompanying Source A: “Many of the world’s people live in regions where rivers, lakes and underground water cannot keep up with demand. Solving this challenge depends on cooperation between countries that share the same rivers and water sources.”',
    artefact: {
      component: 'ChoroplethWorld',
      caption: 'Source A — world map highlighting regions where many people face severe freshwater shortages, a global challenge requiring cross-border cooperation.',
      data: {
        mode: 'highlight',
        title: 'Where freshwater is running short',
        source: 'Source A',
        highlight: [
          'Egypt', 'Sudan', 'Ethiopia', 'Somalia', 'Yemen', 'Saudi Arabia', 'Iraq', 'Iran',
          'Pakistan', 'India', 'Afghanistan', 'Libya', 'Algeria', 'Niger', 'Chad',
        ],
        highlightLabel: 'Severe freshwater shortage',
        baseLabel: 'Lower water stress',
        caption: 'Regions where rivers, lakes and groundwater struggle to keep up with demand. Solving the challenge depends on countries that share water sources cooperating.',
      },
    },
    tasks: [
      {
        label: '',
        text: 'With reference to **Source A or** your own knowledge, **outline** how **one** current global challenge could be resolved.',
        marks: 2,
        ph: 'Pick one challenge; say HOW it could be resolved with brief detail.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: "Evaluating a team's investigation action plan (economic strength)",
    marks: 8,
    stem:
      'There are many factors that can have an impact on superpowers or empires. A team developed an action plan for an investigation into the importance of one of these factors: **economic strength**. You will be asked to evaluate their action plan. The plan is presented as the slide deck below.\n\n' +
      '**Slide 1 — Team strategy:** Assign roles · Set small goals (to-do list) · Set deadlines.\n' +
      '**Slide 2 — Brainstorm session:** Decide on primary and secondary sources · Agree how we will share notes · Agree on this research question: “What is economic strength?”\n' +
      '**Slide 3 — Sources:** Documentary on the British East India Company (BBC, 2017) · Interview with a historian on trade and wealth through the ages · Encyclopaedia entry “World Trade Organization”, Encyclopaedia Britannica · Research on the rise of the United States economy after 1945.\n' +
      '**Slide 4 — Report:** Combine our findings and write the report on the importance of economic strength for a superpower or an empire.',
    artefact: {
      component: 'SlideDeck',
      caption: "Action plan — the team's four-slide plan for investigating the importance of economic strength for a superpower or empire.",
      data: {
        title: 'Action plan — investigating economic strength',
        source: 'Team slide deck',
        slides: [
          { title: '1. Team strategy', bullets: ['Assign roles', 'Set small goals (to-do list)', 'Set deadlines'] },
          {
            title: '2. Brainstorm session',
            bullets: [
              'Decide on primary and secondary sources',
              'Agree how we will share notes',
              'Agree on this research question: “What is economic strength?”',
            ],
          },
          {
            title: '3. Sources',
            bullets: [
              'Documentary on the British East India Company (BBC, 2017)',
              'Interview with a historian on trade and wealth through the ages',
              'Encyclopaedia entry “World Trade Organization”, Encyclopaedia Britannica',
              'Research on the rise of the United States economy after 1945',
            ],
          },
          { title: '4. Report', bullets: ['Combine our findings and write the report on the importance of economic strength for a superpower or an empire.'] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: "**Evaluate** the team's action plan for the investigation on the importance of economic strength for a superpower or an empire.",
        marks: 8,
        ph: 'Discuss strengths AND limitations of the plan, then give an overall appraisal.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Planning a team investigation into a factor affecting a superpower/empire',
    marks: 12,
    stem:
      'For a school project, your teacher has asked you to work in a team. Your task is to investigate the effect of **one** of the following factors on a superpower or empire:\n' +
      '• Naval power\n' +
      '• Education and learning\n' +
      '• Alliances and diplomacy\n' +
      '• Agriculture and food supply\n' +
      '• Law and government',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question to investigate how **one** of the factors listed above has affected a superpower or an empire.',
        marks: 2,
        ph: 'Write one clear AND focused research question naming a factor and a superpower/empire.',
      },
      {
        label: 'b',
        text: '**Justify** the relevance of the research question to the investigation.',
        marks: 4,
        ph: 'Explain why your RQ is relevant, with reasoning (not just repeating the question).',
      },
      {
        label: 'c',
        text: '**State** **one** primary source you would use that is clearly linked to your investigation and research question.',
        marks: 1,
        ph: 'Name one specific primary source linked to your RQ (e.g. a naval logbook).',
      },
      {
        label: 'd',
        text: '**Outline** the method you would use to record the information from the source stated in part (c).',
        marks: 2,
        ph: 'Describe how you would record info (e.g. notepad, highlighting main points).',
      },
      {
        label: 'e',
        text: '**State** **one** secondary source you would use that is clearly linked to your investigation and research question.',
        marks: 1,
        ph: 'Name one specific secondary source linked to your RQ (e.g. a book on the British Navy).',
      },
      {
        label: 'f',
        text: '**Outline** how you would make sure the team collaborates effectively during the investigation.',
        marks: 2,
        ph: 'Describe one way to ensure effective team collaboration with brief detail.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Persuasive speech on sustainable production and consumption (Source B)',
    marks: 18,
    stem:
      'As a leader of a local youth group you have been invited to open the “Slow Fashion Festival” promoted on the website shown in **Source B** below. You have been asked to deliver a persuasive speech to an audience of stakeholders involved in production and consumption including producers, consumers, employees, governments, non-governmental organizations (NGOs) and members of the community.\n\n' +
      'Source B is the campaign website for the festival. Source B pages read:\n\n' +
      'Home — “Fashion should not cost the Earth. Buy less, choose well, make it last.”\n' +
      'The problem — “Clothes are produced faster and cheaper than ever, but cheap ‘fast fashion’ uses huge amounts of water and energy, and mountains of barely-worn clothes are thrown away each year.”\n' +
      'The festival — “The theme of the Slow Fashion Festival is the United Nations’ Sustainable Development Goal 12: ‘responsible consumption and production’. Come to the town square to swap, mend and learn about clothes made to last.”',
    artefact: {
      component: 'SlideDeck',
      caption: 'Source B — pages of the campaign website for the Slow Fashion Festival (UN Sustainable Development Goal 12: responsible consumption and production).',
      data: {
        title: 'Slow Fashion Festival — campaign website',
        source: 'Source B (website pages)',
        slides: [
          {
            title: 'Home',
            body: 'Fashion should not cost the Earth.',
            bullets: ['Buy less', 'Choose well', 'Make it last'],
          },
          {
            title: 'The problem',
            body: 'Clothes are produced faster and cheaper than ever — but at a hidden cost.',
            bullets: [
              'Cheap “fast fashion” uses huge amounts of water and energy',
              'Mountains of barely-worn clothes are thrown away each year',
            ],
          },
          {
            title: 'The festival',
            body: 'Theme: UN Sustainable Development Goal 12 — responsible consumption and production.',
            bullets: ['Come to the town square to swap and mend clothes', 'Learn about clothing made to last'],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'In your persuasive speech, **explain** how sustainable production and consumption can benefit **at least one** of the stakeholders mentioned above. Your speech must be accompanied by a supporting presentation slide with:\n' +
          '• a slogan to draw attention to the topic\n' +
          '• at least three points related to your speech.',
        marks: 18,
        ph: 'Write a persuasive speech (intro/body/conclusion) + a slide with a slogan and 3+ points.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — Kenya urbanisation chart (Source C)',
    marks: 6,
    stem:
      'Look at **Source C** and answer the questions that follow.\n\n' +
      'Source C is a line graph from a digital geography resource about urbanisation. Attribution shown: “Meridian Geography Press, Nairobi, Kenya”. Text:\n\n' +
      '“In 1970, a Kenyan planning minister is quoted as saying: ‘Our future is in the countryside; we must invest in rural villages.’\n' +
      'In 2010, a later planning minister is quoted as saying: ‘Our cities are growing fast; we must build housing and transport for urban life.’\n' +
      'The graph below shows the percentage of Kenya’s population living in urban areas from 1970 to 2010.”\n\n' +
      'The line graph plots the urban population share (%) on the vertical axis against the year (1970–2010) on the horizontal axis, rising steadily across the period.',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source C — Kenya’s urban population share rising from 1970 to 2010. Read the line at 1970 and 2010 to compare the two eras.',
      data: kenyaUrbanData,
    },
    tasks: [
      { label: 'a', text: '**State** the origin of **Source C**.', marks: 1, ph: 'Give the origin/publisher — must be more than just the location.' },
      { label: 'b', text: '**State** the purpose of **Source C**.', marks: 1, ph: 'Give the purpose in your own words (not copied from the source).' },
      { label: 'c', text: '**Outline** **one** value of **Source C** for a student studying urbanisation patterns in Kenya.', marks: 2, ph: 'Give one value (content/origin/purpose) with brief elaboration.' },
      { label: 'd', text: '**Outline** **one** limitation of **Source C** for a student studying urbanisation patterns in Kenya.', marks: 2, ph: 'Give one limitation with brief elaboration.' },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: "Justifying the minister's statements using the urbanisation chart (Kenya)",
    marks: 6,
    stem:
      'The Kenya urbanisation graph for 1970 to 2010 is repeated.\n\n' +
      'In 1970 only about one in ten Kenyans lived in urban areas — the country was overwhelmingly rural. By 2010 roughly one in four Kenyans lived in urban areas, after the urban share climbed steadily across every decade as cities such as Nairobi expanded.\n\n' +
      'Planning ministers’ statements:\n' +
      '1970: “Our future is in the countryside; we must invest in rural villages.”\n' +
      '2010: “Our cities are growing fast; we must build housing and transport for urban life.”',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source C (repeated) — Kenya’s urban population share, 1970–2010. Read the line for both years to compare the eras.',
      data: kenyaUrbanData,
    },
    tasks: [
      {
        label: '',
        text:
          'With reference to data from the urbanisation graph, **justify** why the planning ministers chose to use the two different statements in 1970 and 2010.\n' +
          '1970: “Our future is in the countryside; we must invest in rural villages.”\n' +
          '2010: “Our cities are growing fast; we must build housing and transport for urban life.”',
        marks: 6,
        ph: 'Use graph data for BOTH years and give detailed reasoning for each statement.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Essay — Population change and resources (Source D)',
    marks: 24,
    stem:
      'Look at **Source D** and answer the question that follows.\n\n' +
      'Source D is a four-panel infographic defining the factors of production, each with a short caption:\n' +
      '• **Capital** — “Goods used to make other goods, such as machines, tools and factories.”\n' +
      '• **Labour** — “The people whose work produces goods and services.”\n' +
      '• **Land** — “The natural resources such as soil, water, minerals and forests used in production.”\n' +
      '• **Entrepreneurship** — “The people who bring the other resources together and take the risk to produce or improve goods and services.”',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source D — the four factors of production: capital, labour, land and entrepreneurship.',
      data: {
        title: 'The factors of production',
        source: 'Source D',
        intro: 'The four resources combined to produce goods and services.',
        layout: 'grid',
        blocks: [
          { icon: '🏭', heading: 'Capital', items: ['Goods used to make other goods, such as machines, tools and factories.'] },
          { icon: '👷', heading: 'Labour', items: ['The people whose work produces goods and services.'] },
          { icon: '🌾', heading: 'Land', items: ['The natural resources such as soil, water, minerals and forests used in production.'] },
          { icon: '🧠', heading: 'Entrepreneurship', items: ['The people who bring the other resources together and take the risk to produce or improve goods and services.'] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          '**To what extent** are changes in population related to changes in resources?\n\n' +
          'In a well-structured essay, you should:\n' +
          '• provide examples from your MYP studies\n' +
          '• consider different perspectives\n' +
          '• consider **at least one** of the resources shown in **Source D**.',
        marks: 24,
        ph: 'Write a structured essay: intro, balanced perspectives w/ examples, synthesised conclusion.',
      },
    ],
  },
]
