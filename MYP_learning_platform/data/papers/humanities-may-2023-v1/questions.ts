import type { Question } from '@/lib/types'

/**
 * MYP Integrated Humanities — May 2023 · VARIANT 1 (isomorphic alternative)
 * Subject group: Individuals & Societies · Course: Integrated Humanities
 * Derived from humanities-may-2023. Same construct (crit / command term / marks /
 * task structure / total 80), NEW scenarios + scenario-fitting artefacts.
 *
 * Task 1 Investigating (Crit A + B, 26): Q1–Q4
 * Task 2 Communicating (Crit A + C, 18): Q5
 * Task 3 Thinking critically (Crit A + C + D, 36): Q6–Q8
 *
 * Artefact components (chosen to fit each new scenario; varied across the paper):
 *   Q2  Source A   → <SlideDeck/>            (a public-awareness campaign micro-site on global challenges)
 *   Q3  Action plan → <DataTableInteractive/> (a 4-row research action-plan table)
 *   Q5  Source B   → <InfoGraphicPanel/>      (an "Ethical Electronics Expo" campaign poster)
 *   Q6/Q7 Source C → <DataTableInteractive/>  (Brazil literacy rate by region, 1980 vs 2010 — value-readable)
 *   Q8  Source D   → <NetworkGraph/>          (the four factors of production as a hub-and-spoke diagram)
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
  id: 'humanities-may-2023-v1',
  subject: 'Integrated Humanities',
  session: 'May',
  year: 2023,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// ── Source C — Brazil adult literacy rate by region, 1980 and 2010 ───────────
// A value-readable table. In 1980 the North/Northeast lag far behind the
// South/Southeast; by 2010 the gap has narrowed sharply as schooling expanded.
// A later question asks the student to read values off this table for BOTH
// years and justify a policy slogan change — the same "read a value + justify"
// skill as the source's population pyramids.
const brazilLiteracyData = {
  title: 'Brazil — adult literacy rate by region, 1980 and 2010 (% of adults aged 15+)',
  source: 'Atlas Educational Press, Lisbon, Portugal',
  caption:
    'Adult literacy rate (% of people aged 15 and over who can read and write) for five regions of Brazil. Compare the 1980 and 2010 columns to see how each region changed.',
  headers: ['Region', 'Literacy rate 1980 (%)', 'Literacy rate 2010 (%)', 'Change (percentage points)'],
  rows: [
    ['North', '62', '90', '+28'],
    ['Northeast', '54', '83', '+29'],
    ['Central-West', '74', '93', '+19'],
    ['Southeast', '83', '96', '+13'],
    ['South', '85', '97', '+12'],
  ],
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'International institutions and global stability',
    marks: 4,
    stem:
      'After periods of crisis, countries have created international institutions and organizations intended to bring greater health, prosperity and cooperation to the world.',
    tasks: [
      {
        label: '',
        text: '**Explain** how **one** international institution or organization has improved either peace, stability or cooperation in the world.',
        marks: 4,
        ph: 'Name one institution (e.g. WHO); give reasoning for the improvement.',
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
      'Source A — “One World, Shared Problems”: a public-awareness campaign micro-site. Each screen names a global challenge that no single country can solve alone.\n\n' +
      'Screen 1 — “Our shared challenges”: clean water and sanitation; loss of biodiversity; youth unemployment; food insecurity; refugee displacement.\n' +
      'Screen 2 — “Why cooperation matters”: these problems cross borders, so solutions require countries to share resources, data and funding.',
    artefact: {
      component: 'SlideDeck',
      caption: 'Source A — “One World, Shared Problems” awareness campaign: the global challenges that depend on cooperation between countries.',
      data: {
        title: 'One World, Shared Problems',
        source: 'Source A — public-awareness campaign micro-site',
        slides: [
          {
            title: 'Our shared challenges',
            body: 'In today’s world, people’s well-being depends on cooperation between countries to solve challenges such as:',
            bullets: [
              'Clean water and sanitation',
              'Loss of biodiversity',
              'Youth unemployment',
              'Food insecurity',
              'Refugee displacement',
            ],
          },
          {
            title: 'Why cooperation matters',
            body: 'These problems cross borders, so lasting solutions require countries to share resources, data and funding.',
            bullets: [
              'No single country can solve them alone',
              'Shared funding spreads the cost fairly',
              'Shared data helps everyone respond faster',
            ],
          },
        ],
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
    topic: "Evaluating a team's investigation action plan (military strength)",
    marks: 8,
    stem:
      'There are many factors that can have an impact on superpowers or empires. A team developed an action plan for an investigation into the importance of one of these factors: **military strength**. You will be asked to evaluate their action plan. The plan is set out in the table below.\n\n' +
      '**1. Team strategy** — Assign roles · Set small goals (to-do list) · Set deadlines.\n' +
      '**2. Brainstorm session** — Decide on primary and secondary sources · Agree how we will share notes · Agree on this research question: “What is military strength?”\n' +
      '**3. Sources** — Documentary on the Roman legions (History Channel, 2015) · Interview with a museum curator about weapons through history · Encyclopaedia entry “NATO”, Encyclopaedia Britannica · Research on the arms race between the USA and the USSR.\n' +
      '**4. Report** — Combine our findings and write the report on the importance of military strength for a superpower or an empire.',
    artefact: {
      component: 'DataTableInteractive',
      caption: "Action plan — the team's four-section plan for investigating the importance of military strength for a superpower or empire.",
      data: {
        title: 'Action plan — investigating military strength',
        caption: 'A team’s plan for investigating the importance of military strength for a superpower or an empire.',
        headers: ['Section', 'Details'],
        rows: [
          ['1. Team strategy', 'Assign roles; set small goals (to-do list); set deadlines.'],
          ['2. Brainstorm session', 'Decide on primary and secondary sources; agree how we will share notes; agree on this research question: “What is military strength?”'],
          ['3. Sources', 'Documentary on the Roman legions (History Channel, 2015); interview with a museum curator about weapons through history; encyclopaedia entry “NATO”, Encyclopaedia Britannica; research on the arms race between the USA and the USSR.'],
          ['4. Report', 'Combine our findings and write the report on the importance of military strength for a superpower or an empire.'],
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: "**Evaluate** the team's action plan for the investigation on the importance of military strength for a superpower or an empire.",
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
      '• Trade networks\n' +
      '• Religion\n' +
      '• Natural resources\n' +
      '• Communication and transport\n' +
      '• Leadership',
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
        ph: 'Name one specific primary source linked to your RQ (e.g. a merchant’s trade ledger).',
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
        ph: 'Name one specific secondary source linked to your RQ (e.g. a book on the Silk Road).',
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
      'As the head of a school’s student council you have been invited to open the “Ethical Electronics Expo” advertised in **Source B** below. You have been asked to deliver a persuasive speech to an audience of stakeholders involved in production and consumption including producers, consumers, employees, governments, non-governmental organizations (NGOs) and members of the community.\n\n' +
      'Source B is the campaign poster for the Expo. Source B text:\n\n' +
      '“Every year we throw away millions of phones, laptops and chargers — even when they still work.\n' +
      'Mining the metals inside them damages land and uses huge amounts of water and energy.\n' +
      'When e-waste is dumped, toxic chemicals can leak into soil and rivers.\n' +
      'The theme of the Ethical Electronics Expo is the United Nations’ Sustainable Development Goal 12: ‘responsible consumption and production’.\n' +
      'Come to the community hall to learn how repairing, reusing and recycling can make a difference!”',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source B — campaign poster for the Ethical Electronics Expo (UN Sustainable Development Goal 12: responsible consumption and production).',
      data: {
        title: 'Ethical Electronics Expo',
        source: 'Source B — campaign poster',
        intro: 'Theme: UN Sustainable Development Goal 12 — responsible consumption and production.',
        layout: 'grid',
        blocks: [
          { icon: '📱', heading: 'We throw too much away', items: ['Millions of phones, laptops and chargers are discarded every year — even when they still work.'] },
          { icon: '⛏️', heading: 'Mining harms the planet', items: ['Mining the metals inside devices damages land and uses huge amounts of water and energy.'] },
          { icon: '☠️', heading: 'E-waste is toxic', items: ['When e-waste is dumped, toxic chemicals can leak into soil and rivers.'] },
          { icon: '♻️', heading: 'What you can do', items: ['Repair, reuse and recycle — come to the community hall to learn how.'] },
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
    topic: 'Source evaluation — Brazil literacy table (Source C)',
    marks: 6,
    stem:
      'Look at **Source C** and answer the questions that follow.\n\n' +
      'Source C is a data table from a digital atlas about development. Attribution shown: “Atlas Educational Press, Lisbon, Portugal”. Text:\n\n' +
      '“In 1980, a government minister for education in Brazil is quoted as saying: ‘Our first duty is to bring schools to the poorest regions.’\n' +
      'In 2010, a later minister is quoted as saying: ‘Now we must raise the quality of learning everywhere, not only its reach.’\n' +
      'The adult literacy rates for five regions of Brazil for 1980 and 2010 are shown in the table below.”\n\n' +
      'The table lists the literacy rate (percentage of adults aged 15+ who can read and write) for the North, Northeast, Central-West, Southeast and South regions in 1980 and 2010, with the change in percentage points.',
    artefact: {
      component: 'DataTableInteractive',
      caption: 'Source C — Brazil adult literacy rate by region, 1980 and 2010. Compare the two year columns to see how each region changed.',
      data: brazilLiteracyData,
    },
    tasks: [
      { label: 'a', text: '**State** the origin of **Source C**.', marks: 1, ph: 'Give the origin/publisher — must be more than just the location.' },
      { label: 'b', text: '**State** the purpose of **Source C**.', marks: 1, ph: 'Give the purpose in your own words (not copied from the source).' },
      { label: 'c', text: '**Outline** **one** value of **Source C** for a student studying literacy patterns in Brazil.', marks: 2, ph: 'Give one value (content/origin/purpose) with brief elaboration.' },
      { label: 'd', text: '**Outline** **one** limitation of **Source C** for a student studying literacy patterns in Brazil.', marks: 2, ph: 'Give one limitation with brief elaboration.' },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: "Justifying the minister's statements using the literacy table (Brazil)",
    marks: 6,
    stem:
      'The Brazil literacy table for 1980 and 2010 is repeated.\n\n' +
      'In 1980 the poorest regions (the North and Northeast) had much lower literacy rates than the wealthier South and Southeast — a wide gap between regions. By 2010 every region was above 80% and the gap between the poorest and richest regions had narrowed sharply, although the South and Southeast were still slightly ahead.\n\n' +
      'Education ministers’ statements:\n' +
      '1980: “Our first duty is to bring schools to the poorest regions.”\n' +
      '2010: “Now we must raise the quality of learning everywhere, not only its reach.”',
    artefact: {
      component: 'DataTableInteractive',
      caption: 'Source C (repeated) — Brazil adult literacy rate by region, 1980 and 2010. Use the year columns to compare regions.',
      data: brazilLiteracyData,
    },
    tasks: [
      {
        label: '',
        text:
          'With reference to data from the literacy table, **justify** why the education ministers chose to use the two different statements in 1980 and 2010.\n' +
          '1980: “Our first duty is to bring schools to the poorest regions.”\n' +
          '2010: “Now we must raise the quality of learning everywhere, not only its reach.”',
        marks: 6,
        ph: 'Use table data for BOTH years and give detailed reasoning for each statement.',
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
      'Source D is a diagram showing how the four factors of production combine to make goods and services. The central node is “Production”, and four connected nodes describe each factor:\n' +
      '• **Capital** — “Goods used to make other goods, e.g. machines and tools.”\n' +
      '• **Labour** — “People who work to produce goods and services.”\n' +
      '• **Land** — “The natural resources such as soil, water, minerals and forests used in production.”\n' +
      '• **Entrepreneurship** — “People who combine the other resources to produce or improve goods and services.”',
    artefact: {
      component: 'NetworkGraph',
      caption: 'Source D — the four factors of production (capital, labour, land and entrepreneurship) combining to create production.',
      data: {
        title: 'The factors of production',
        source: 'Source D',
        center: { label: 'Production' },
        nodes: [
          { id: 'capital', label: 'Capital', color: '#1971c2', detail: 'Goods used to make other goods, e.g. machines and tools.' },
          { id: 'labour', label: 'Labour', color: '#f08c00', detail: 'People who work to produce goods and services.' },
          { id: 'land', label: 'Land', color: '#2f9e44', detail: 'The natural resources such as soil, water, minerals and forests used in production.' },
          { id: 'entrepreneurship', label: 'Entrepreneurship', color: '#c2255c', detail: 'People who combine the other resources to produce or improve goods and services.' },
        ],
        edges: [
          { from: 'capital', to: 'land', label: 'combine to produce' },
          { from: 'labour', to: 'entrepreneurship', label: 'combine to produce' },
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
