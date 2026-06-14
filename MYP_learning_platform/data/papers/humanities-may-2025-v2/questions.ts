import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — May 2025 · VARIANT 2 (isomorphic alternative paper)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Same construct as humanities-may-2025: identical crit / command terms / marks /
 * task structure. NEW surface scenario: TRADE, COLONIAL LEGACIES & GLOBAL INEQUALITY.
 * Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1–Q4
 *   Task 2 Communicating (Crit A+C, 18): Q5
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6–Q9
 *
 * Artefacts chosen to FIT each new scenario (differ from source and from v1):
 *   Q3  → <DataTableInteractive/> (a school fair-trade fundraising project plan to evaluate)
 *   Q4e → <InfoGraphicPanel/>     (Source A — the IB Learner Profile, the IB framework)
 *   Q5  → <InfoGraphicPanel/>     (Source B — the Multidimensional Poverty Index framework)
 *   Q6/Q7/Q8 → <ChoroplethWorld/> (Source C — share of population in extreme poverty, map)
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
  id: 'humanities-may-2025-v2',
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
    topic: 'Trade — causes of global inequality',
    marks: 2,
    tasks: [
      {
        label: '',
        text: '**Outline** one cause of global economic inequality.',
        marks: 2,
        ph: 'One cause, briefly elaborated — e.g. unfair trade rules that keep some countries dependent on cheap raw exports.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Trade — effects of colonialism',
    marks: 4,
    tasks: [
      {
        label: '',
        text: '**Explain** one lasting effect of colonialism on a specific country.',
        marks: 4,
        ph: 'One effect on a named country, with reasons — e.g. the Congo left with a narrow, resource-dependent economy.',
      },
    ],
  },
  {
    id: 3,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — fair-trade fundraising project plan',
    marks: 8,
    stem:
      'Your school’s Global Citizenship club has created the following plan for a fair-trade fundraising project. The club wants to sell fair-trade chocolate and coffee at the school fair and use the profit to support cocoa-farming communities. Because you are an active club member, you have been asked to give feedback on the initial plan to decide whether it will genuinely raise awareness and help the farming communities.\n\n' +
      'The club’s project plan — titled **Fair Trade, Fair Future**:\n\n' +
      '**Sources providing information for the project**\n' +
      '• A promotional video from one large chocolate company\n' +
      '• A report from the Fairtrade Foundation\n' +
      '• An interview with a geography teacher\n' +
      '• A documentary on cocoa farming in West Africa\n\n' +
      '**Additional materials for the project**\n' +
      '• A stall with posters and product samples at the school fair\n\n' +
      '**Deadline to launch the project**\n' +
      '• Three weeks\n\n' +
      '**Next steps**\n' +
      '• Decide which products to sell and set prices\n' +
      '• Write the information that will appear on the stall posters\n\n' +
      '**Organizers of the project**\n' +
      '• Priya Nair, club president, strong at public speaking\n' +
      '• Daniel Cole, treasurer, good with budgets but new to fair trade\n\n' +
      '**Success criteria**\n' +
      '• Content is clear: simple facts about what fair trade means\n' +
      '• Well-organized stall: a rota of helpers and a clear price list\n' +
      '• Strong overall style: an attractive, welcoming stall\n' +
      '• Appropriate for the audience: explanations suitable for students and families',
    artefact: {
      component: 'DataTableInteractive',
      caption: 'The club’s fair-trade project plan — review each section of the plan in the table.',
      data: {
        title: 'Global Citizenship Club — “Fair Trade, Fair Future”',
        source: 'School Global Citizenship Club',
        caption: 'Initial project plan for the school-fair fundraiser.',
        headers: ['Section', 'Details'],
        rows: [
          ['Sources providing information', 'Promotional video from one large chocolate company; report from the Fairtrade Foundation; interview with a geography teacher; documentary on cocoa farming in West Africa'],
          ['Additional materials', 'A stall with posters and product samples at the school fair'],
          ['Deadline to launch', 'Three weeks'],
          ['Next steps', 'Decide which products to sell and set prices; write the information for the stall posters'],
          ['Organizers', 'Priya Nair (president, strong public speaker); Daniel Cole (treasurer, good with budgets but new to fair trade)'],
          ['Success criteria', 'Clear content on what fair trade means; well-organized stall with a helper rota and price list; attractive style; explanations suitable for students and families'],
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: "**Evaluate** the club's plan to determine whether the project will genuinely raise awareness and help the cocoa-farming communities.",
        marks: 8,
        ph: 'Weigh strengths and limitations of the plan, then give an overall appraisal.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — trade and development',
    marks: 12,
    stem:
      'You have just completed a unit on trade and development in school. Your teacher has asked your class to organize an exhibition based on the unit’s statement of inquiry.\n\n' +
      '**Statement of inquiry: Trade agreements create change for communities.**\n\n' +
      'In preparation for your exhibition, answer the following questions.',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question to investigate the statement of inquiry.',
        marks: 2,
        ph: 'A research question naming three aspects: a trade agreement, a community/location, a type of change.',
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
    topic: 'Communicating — poverty & development',
    marks: 18,
    stem:
      'Income measures such as GDP per person have traditionally been used to judge how wealthy a country is.\n\n' +
      'More recently, broader measures have been used to better understand what it actually means to live in poverty.\n\n' +
      '**Source B** illustrates one widely used framework for measuring poverty as more than just low income.\n\n' +
      'Source B — the **Multidimensional Poverty Index (MPI)**. It measures poverty across three dimensions, each tracked by indicators:\n' +
      '• Health → Nutrition and child mortality\n' +
      '• Education → Years of schooling and school attendance\n' +
      '• Living standards → Access to clean water, electricity, sanitation and decent housing\n' +
      '(*A household is counted as poor when it is deprived in several of these areas at once.)\n\n' +
      'In preparation for an upcoming youth conference, you have been given the task of persuading the audience of the importance of reducing poverty for all.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source B — the Multidimensional Poverty Index: three dimensions, each measured by indicators.',
      data: {
        title: 'Source B — the Multidimensional Poverty Index (MPI)',
        source: 'United Nations Development Programme & OPHI',
        intro: 'The MPI measures poverty as deprivation across three dimensions at once, not just low income. The three dimensions and their indicators are:',
        layout: 'grid',
        blocks: [
          { heading: 'Health', items: ['Nutrition', 'Child mortality'], note: 'A long and healthy life', icon: '🩺' },
          { heading: 'Education', items: ['Years of schooling', 'School attendance'], note: 'Access to learning', icon: '🎓' },
          { heading: 'Living standards', items: ['Clean water', 'Electricity', 'Sanitation', 'Decent housing'], note: 'A decent standard of living', icon: '🏠' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'With reference to your MYP studies, write a persuasive speech to **explain** why a country or region may need to reduce poverty for its population.\n\n' +
          'In your speech, you must:\n' +
          '• select **one** of the three dimensions listed in **Source B** to show how a country or region’s poverty may be reduced\n' +
          '• provide a title\n' +
          '• make a call to action\n' +
          '• consider your audience.',
        marks: 18,
        ph: 'A titled persuasive speech on one MPI dimension, with a call to action, addressed to the conference.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — global extreme poverty',
    marks: 6,
    stem:
      'Extreme poverty means living on less than the international poverty line — a level of income too low to meet basic needs such as food, shelter and clean water.\n\n' +
      'Look at **Source C** below, a map by the World Bank, and answer the questions that follow.\n\n' +
      'Source C — **Share of Population in Extreme Poverty**. A world choropleth map shading each country by the percentage of its population living in extreme poverty, with the highest rates concentrated in parts of sub-Saharan Africa.',
    artefact: {
      component: 'ChoroplethWorld',
      caption: 'Source C — share of population living in extreme poverty (highlighted countries have the highest rates).',
      data: {
        mode: 'highlight',
        title: 'Source C — Share of Population in Extreme Poverty',
        source: 'World Bank',
        highlight: ['Dem. Rep. Congo', 'Madagascar', 'Mozambique', 'Burundi', 'South Sudan', 'Central African Rep.', 'Nigeria', 'Niger', 'Chad', 'Zambia'],
        highlightLabel: 'Highest share in extreme poverty',
        baseLabel: 'Lower share in extreme poverty',
        caption: 'Countries with the highest share of their population living below the international poverty line.',
      },
    },
    tasks: [
      { label: 'a', text: '**State** the origin of **Source C**.', marks: 1, ph: 'The World Bank (worldbank.org).' },
      { label: 'b', text: '**State** the purpose of **Source C**.', marks: 1, ph: 'To inform on which countries have the most people in extreme poverty.' },
      { label: 'c', text: '**Outline** one value of **Source C** for an MYP student researching global poverty.', marks: 2, ph: 'One value (e.g. it clearly shows which regions are most affected), briefly elaborated.' },
      { label: 'd', text: '**Outline** one limitation of **Source C** for an MYP student researching global poverty.', marks: 2, ph: 'One limitation (e.g. it does not show the causes of poverty), briefly elaborated.' },
    ],
  },
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Global poverty — international cooperation',
    marks: 2,
    stem: '**Source C** (Share of Population in Extreme Poverty, World Bank) is repeated here for information.',
    artefact: {
      component: 'ChoroplethWorld',
      caption: 'Source C — share of population living in extreme poverty (repeated).',
      data: {
        mode: 'highlight',
        title: 'Source C — Share of Population in Extreme Poverty',
        source: 'World Bank',
        highlight: ['Dem. Rep. Congo', 'Madagascar', 'Mozambique', 'Burundi', 'South Sudan', 'Central African Rep.', 'Nigeria', 'Niger', 'Chad', 'Zambia'],
        highlightLabel: 'Highest share in extreme poverty',
        baseLabel: 'Lower share in extreme poverty',
        caption: 'Countries with the highest share of their population living below the international poverty line.',
      },
    },
    tasks: [
      {
        label: '',
        text: '**Outline** one way the global community can support countries with high levels of extreme poverty.',
        marks: 2,
        ph: 'One role of the global community, referencing the global community, briefly elaborated.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Global poverty — future impact',
    marks: 4,
    stem:
      '**Source C** (Share of Population in Extreme Poverty, World Bank) is repeated here for information.\n\n' +
      'Experts warn that climate shocks and rising food prices could push millions more people into extreme poverty in the coming years, especially in regions that are already struggling.',
    artefact: {
      component: 'ChoroplethWorld',
      caption: 'Source C — share of population living in extreme poverty (repeated).',
      data: {
        mode: 'highlight',
        title: 'Source C — Share of Population in Extreme Poverty',
        source: 'World Bank',
        highlight: ['Dem. Rep. Congo', 'Madagascar', 'Mozambique', 'Burundi', 'South Sudan', 'Central African Rep.', 'Nigeria', 'Niger', 'Chad', 'Zambia'],
        highlightLabel: 'Highest share in extreme poverty',
        baseLabel: 'Lower share in extreme poverty',
        caption: 'Countries with the highest share of their population living below the international poverty line.',
      },
    },
    tasks: [
      {
        label: '',
        text: '**Explain** one potential future impact of rising extreme poverty on a specific country or region.',
        marks: 4,
        ph: 'One future impact on a named country/region, explained with reasons.',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — technology & global trade',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'Write a well-structured essay in response to the following question:\n\n' +
          '**To what extent** can technological advances reduce inequality between countries?\n\n' +
          'In your essay, you must:\n' +
          '• reference **at least one** specific country or region\n' +
          '• consider different perspectives.\n\n' +
          'You **cannot** include the topic of extreme poverty mapping due to its use in the previous questions.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) on technology and inequality in a named place, weighing perspectives.',
      },
    ],
  },
]
