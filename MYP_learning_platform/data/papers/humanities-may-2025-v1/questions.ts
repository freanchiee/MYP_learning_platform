import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — May 2025 · VARIANT 1 (isomorphic alternative paper)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Same construct as humanities-may-2025: identical crit / command terms / marks /
 * task structure. NEW surface scenario: MIGRATION, DISPLACEMENT & GLOBAL HEALTH.
 * Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1–Q4
 *   Task 2 Communicating (Crit A+C, 18): Q5
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6–Q9
 *
 * Artefacts chosen to FIT each new scenario (differ from the source where sensible):
 *   Q3  → <InfoGraphicPanel/>  (a public-health awareness campaign plan to evaluate)
 *   Q4e → <InfoGraphicPanel/>  (Source A — the IB Learner Profile, the IB framework)
 *   Q5  → <SlideDeck/>         (Source B — the Sustainable Development Goal 3 framework)
 *   Q6/Q7/Q8 → <InteractiveChart/> (Source C — global child-vaccination coverage, line)
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
  id: 'humanities-may-2025-v1',
  subject: 'Integrated Humanities',
  session: 'May',
  year: 2025,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Migration — causes of displacement',
    marks: 2,
    tasks: [
      {
        label: '',
        text: '**Outline** one cause of forced migration.',
        marks: 2,
        ph: 'One cause, briefly elaborated — e.g. persecution of a minority group forcing families to flee.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Migration — effects of displacement',
    marks: 4,
    tasks: [
      {
        label: '',
        text: '**Explain** one effect of a specific refugee crisis.',
        marks: 4,
        ph: 'One effect of a named crisis, with reasons — e.g. the Syrian refugee crisis straining housing in host cities.',
      },
    ],
  },
  {
    id: 3,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — public-health awareness campaign plan',
    marks: 8,
    stem:
      'A city Public Health Office has created the following plan for an awareness campaign on clean drinking water and disease prevention in neighbourhoods that recently received large numbers of new arrivals. Because you volunteer with a local community centre, you have been asked to give feedback on the initial plan to decide whether the campaign will actually reach and help your local community.\n\n' +
      'The campaign plan — titled **Clean Water, Healthy Families**:\n\n' +
      '**Sources providing information for the campaign**\n' +
      '• A leaflet produced by the bottled-water industry\n' +
      '• A national newspaper article on a recent cholera outbreak\n' +
      '• Interviews with two doctors at the city hospital\n' +
      '• A blog post written by a wellness influencer\n\n' +
      '**Additional materials for the campaign**\n' +
      '• Posters to be displayed at bus stops and the central market\n\n' +
      '**Deadline to launch the campaign**\n' +
      '• Four weeks\n\n' +
      '**Next steps**\n' +
      '• Write the text that will appear on the posters\n' +
      '• Translate the posters into the main languages spoken locally\n\n' +
      '**Organizers of the campaign**\n' +
      '• Dr. Elena Sousa, a public-health physician\n' +
      '• Tomas Reyes, a graphic designer with no health background\n\n' +
      '**Success criteria**\n' +
      '• Content is clear: simple facts about safe water and hygiene\n' +
      '• Well-organized rollout: a schedule of poster placement and community talks\n' +
      '• Strong overall style: eye-catching, easy-to-read posters\n' +
      '• Appropriate for the audience: accessible to families who speak different languages',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'The Public Health Office campaign plan — page through the sections of the infographic.',
      data: {
        title: 'City Public Health Office — “Clean Water, Healthy Families”',
        source: 'City Public Health Office',
        intro: 'A proposed awareness campaign on safe drinking water and disease prevention for neighbourhoods that recently received many new arrivals.',
        layout: 'flow',
        blocks: [
          { heading: 'Sources providing information', items: ['Leaflet produced by the bottled-water industry', 'National newspaper article on a recent cholera outbreak', 'Interviews with two doctors at the city hospital', 'Blog post by a wellness influencer'] },
          { heading: 'Additional materials', items: ['Posters displayed at bus stops and the central market'] },
          { heading: 'Deadline to launch', items: ['Four weeks'] },
          { heading: 'Next steps', items: ['Write the text for the posters', 'Translate posters into the main languages spoken locally'] },
          { heading: 'Organizers', items: ['Dr. Elena Sousa — a public-health physician', 'Tomas Reyes — a graphic designer with no health background'] },
          { heading: 'Success criteria', items: ['Content is clear: simple facts on safe water and hygiene', 'Well-organized rollout: schedule of posters and community talks', 'Strong overall style: eye-catching, easy-to-read posters', 'Appropriate for the audience: accessible to families speaking different languages'] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: "**Evaluate** the Public Health Office's plan to determine whether the campaign will be of interest and use to your local community.",
        marks: 8,
        ph: 'Weigh strengths and limitations of the plan, then give an overall appraisal.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — migration and belonging',
    marks: 12,
    stem:
      'You have just completed a unit on migration and belonging in school. Your teacher has asked your class to organize an exhibition based on the unit’s statement of inquiry.\n\n' +
      '**Statement of inquiry: Migration policies create change for communities.**\n\n' +
      'In preparation for your exhibition, answer the following questions.',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question to investigate the statement of inquiry.',
        marks: 2,
        ph: 'A research question naming three aspects: a migration policy, a community/location, a type of change.',
      },
      {
        label: 'b',
        text: '**Justify** the usefulness of your research question in relation to the statement of inquiry.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is relevant to the statement of inquiry.',
      },
      {
        label: 'c',
        text: '**Identify** one source that is relevant to your research question or the statement of inquiry. You **cannot** use any of the sources mentioned in question 3.',
        marks: 1,
        ph: 'Name a source type AND specific details (e.g. a named report, documentary or person).',
      },
      {
        label: 'd',
        text: '**Describe** the usefulness of the source you identified in part (c) for your exhibition.',
        marks: 3,
        ph: 'Describe in detail one way the source type or its content is useful.',
      },
      {
        label: 'e',
        passage:
          'Source A — the IB learner profile.\nThe aim of all IB programmes is to develop internationally minded people who, recognizing their common humanity and shared guardianship of the planet, help to create a better and more peaceful world.\nAs IB learners we strive to be: (1) Inquirers (2) Knowledgeable (3) Thinkers (4) Communicators (5) Principled (6) Open-minded (7) Caring (8) Risk-takers (9) Balanced (10) Reflective.',
        artefact: {
          component: 'InfoGraphicPanel',
          caption: 'Source A — the IB Learner Profile (10 attributes).',
          data: {
            title: 'Source A — The IB Learner Profile',
            source: 'International Baccalaureate',
            intro: 'The aim of all IB programmes is to develop internationally minded people who help to create a better and more peaceful world. As IB learners we strive to be:',
            layout: 'grid',
            blocks: [
              { heading: 'Inquirers', icon: '🔎' }, { heading: 'Knowledgeable', icon: '📚' },
              { heading: 'Thinkers', icon: '💭' }, { heading: 'Communicators', icon: '💬' },
              { heading: 'Principled', icon: '⚖️' }, { heading: 'Open-minded', icon: '🌍' },
              { heading: 'Caring', icon: '🤝' }, { heading: 'Risk-takers', icon: '🚀' },
              { heading: 'Balanced', icon: '☯️' }, { heading: 'Reflective', icon: '🪞' },
            ],
          },
        },
        text: '**Outline** how you will develop **one** of the 10 attributes shown in **Source A** throughout this investigation.',
        marks: 2,
        ph: 'Name one attribute and briefly outline how the investigation develops it.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — global health & wellbeing',
    marks: 18,
    stem:
      'Economic indicators such as GDP have traditionally been used to judge how a country is doing.\n\n' +
      'More recently, health and wellbeing indicators have been used to better understand whether people in a country can actually live long, healthy lives.\n\n' +
      '**Source B** illustrates the global framework most often used to organise efforts to improve health and wellbeing.\n\n' +
      'Source B — **Sustainable Development Goal 3: Good Health and Well-being**. The goal is broken down into targets, each tracked by an indicator:\n' +
      '• Reduce preventable child deaths → Under-five mortality rate\n' +
      '• End epidemics of major diseases → Number of new infections per year\n' +
      '• Achieve universal health coverage → Share of population covered by essential services\n' +
      '(*Universal health coverage: all people can use the health services they need without suffering financial hardship.)\n\n' +
      'In preparation for an upcoming youth conference, you have been given the task of persuading the audience of the importance of improving health and wellbeing for all.',
    artefact: {
      component: 'SlideDeck',
      caption: 'Source B — Sustainable Development Goal 3, broken down into targets and their indicators.',
      data: {
        title: 'Source B — SDG 3: Good Health and Well-being',
        source: 'United Nations — Sustainable Development Goals',
        slides: [
          { title: 'SDG 3: Good Health and Well-being', body: 'Ensure healthy lives and promote well-being for all at all ages. The goal is tracked through targets, each with an indicator.' },
          { title: 'Reduce preventable child deaths', bullets: ['Indicator: under-five mortality rate (deaths before age 5 per 1,000 live births)', 'Largely preventable through vaccines, clean water and basic care'] },
          { title: 'End epidemics of major diseases', bullets: ['Indicator: number of new infections per year', 'Covers diseases such as tuberculosis, malaria and HIV'] },
          { title: 'Achieve universal health coverage', bullets: ['Indicator: share of the population covered by essential health services', 'People can use the services they need without financial hardship'] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'With reference to your MYP studies, write a persuasive speech to **explain** why a country or region may need to improve health and well-being for its population.\n\n' +
          'In your speech, you must:\n' +
          '• select **one** of the three targets listed in **Source B** to show how a country or region’s health and well-being may be improved\n' +
          '• provide a title\n' +
          '• make a call to action\n' +
          '• consider your audience.',
        marks: 18,
        ph: 'A titled persuasive speech on one SDG 3 target, with a call to action, addressed to the conference.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — child vaccination coverage',
    marks: 6,
    stem:
      'A vaccine is a treatment that helps the body fight a specific disease. Many serious childhood diseases can be prevented if enough children are vaccinated.\n\n' +
      'Look at **Source C** below, a chart by the World Health Organization, and answer the questions that follow.\n\n' +
      'Source C — **Global Child Vaccination Coverage**. A line chart showing the percentage of one-year-old children worldwide who received the recommended basic vaccines, plotted for selected years from 2000 to 2022.',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source C — global child vaccination coverage, % of one-year-olds, 2000–2022 (hover a point to read the value).',
      data: {
        kind: 'line',
        title: 'Source C — Global Child Vaccination Coverage',
        source: 'World Health Organization',
        x: { label: 'Year', categories: ['2000', '2005', '2010', '2015', '2019', '2021', '2022'] },
        y: { label: 'Children vaccinated', min: 50, max: 100, ticks: [50, 60, 70, 80, 90, 100], unit: '%' },
        series: [
          { name: 'Basic childhood vaccines', color: '#1971c2', points: [72, 78, 84, 86, 86, 81, 84] },
        ],
      },
    },
    tasks: [
      { label: 'a', text: '**State** the origin of **Source C**.', marks: 1, ph: 'World Health Organization (who.int).' },
      { label: 'b', text: '**State** the purpose of **Source C**.', marks: 1, ph: 'To inform on how child vaccination coverage has changed over time.' },
      { label: 'c', text: '**Outline** one value of **Source C** for an MYP student researching global health.', marks: 2, ph: 'One value (e.g. it clearly shows the trend over time), briefly elaborated.' },
      { label: 'd', text: '**Outline** one limitation of **Source C** for an MYP student researching global health.', marks: 2, ph: 'One limitation (e.g. it does not show differences between countries), briefly elaborated.' },
    ],
  },
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Global health — international cooperation',
    marks: 2,
    stem: '**Source C** (Global Child Vaccination Coverage, World Health Organization) is repeated here for information.',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source C — global child vaccination coverage (repeated).',
      data: {
        kind: 'line',
        title: 'Source C — Global Child Vaccination Coverage',
        source: 'World Health Organization',
        x: { label: 'Year', categories: ['2000', '2005', '2010', '2015', '2019', '2021', '2022'] },
        y: { label: 'Children vaccinated', min: 50, max: 100, ticks: [50, 60, 70, 80, 90, 100], unit: '%' },
        series: [
          { name: 'Basic childhood vaccines', color: '#1971c2', points: [72, 78, 84, 86, 86, 81, 84] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Outline** one way the global community can support countries with low child vaccination coverage.',
        marks: 2,
        ph: 'One role of the global community, referencing the global community, briefly elaborated.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Global health — future impact',
    marks: 4,
    stem:
      '**Source C** (Global Child Vaccination Coverage, World Health Organization) is repeated here for information.\n\n' +
      'Experts warn that if vaccination coverage keeps slipping, gaps in protection could widen. In some regions coverage has fallen by 5 to 10 percentage points since 2019.',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source C — global child vaccination coverage (repeated).',
      data: {
        kind: 'line',
        title: 'Source C — Global Child Vaccination Coverage',
        source: 'World Health Organization',
        x: { label: 'Year', categories: ['2000', '2005', '2010', '2015', '2019', '2021', '2022'] },
        y: { label: 'Children vaccinated', min: 50, max: 100, ticks: [50, 60, 70, 80, 90, 100], unit: '%' },
        series: [
          { name: 'Basic childhood vaccines', color: '#1971c2', points: [72, 78, 84, 86, 86, 81, 84] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Explain** one potential future impact of falling vaccination coverage on a specific country or region.',
        marks: 4,
        ph: 'One future impact on a named country/region, explained with reasons.',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — technology & access to healthcare',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'Write a well-structured essay in response to the following question:\n\n' +
          '**To what extent** can technological advances improve access to healthcare?\n\n' +
          'In your essay, you must:\n' +
          '• reference **at least one** specific country or region\n' +
          '• consider different perspectives.\n\n' +
          'You **cannot** include the topic of vaccination coverage due to its use in the previous questions.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) on technology and healthcare access in a named place, weighing perspectives.',
      },
    ],
  },
]
