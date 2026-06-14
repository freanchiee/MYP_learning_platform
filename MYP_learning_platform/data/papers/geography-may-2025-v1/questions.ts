import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2025 · Set 1 ISOMORPHIC VARIANT (geography-may-2025-v1)
 * Subject group: Individuals & Societies · Course: Geography
 * Isomorphic to geography-may-2025: same blueprint, criteria, marks, task structure and
 * command terms — a genuinely NEW scenario per question, presented through a DIFFERENT
 * artefact component than the source for every artefact-bearing question.
 *
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 6) · Q2 (B, 8) · Q3 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q4 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q5 (6) · Q6 (6) · Q7 (24)
 *
 * Theme: globalization & the global garment trade (Bangladesh) + climate-disaster
 * resilience (Valencia, Spain floods). Visual sources become interactive artefacts.
 * Artefact component changed vs source (carve-out for I&S variants):
 *   Q2  → DataTableInteractive  (source used InfoGraphicPanel)  — water-access action plan
 *   Q4  → SlideDeck             (source used SourceDocViewer)   — TV documentary transcript
 *   Q5  → ChoroplethWorld       (source used LocatedMap)        — global flood-risk thematic map
 *   Q6  → NetworkGraph          (source used SourceDocViewer)   — two adaptation strategies
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
  id: 'geography-may-2025-v1',
  subject: 'Geography',
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
    topic: 'Globalization — impacts',
    marks: 6,
    stem: 'Globalization can have positive and negative impacts.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** two positive impacts of globalization.',
        marks: 2,
        ph: 'Two distinct positive impacts (e.g. cheaper electronics; sharing of medical knowledge between countries). Single words that do not signify an impact score 0.',
      },
      {
        label: 'b',
        text: '**Explain** a negative consequence of one of the impacts you have identified in part (a).',
        marks: 4,
        ph: 'One negative consequence of an impact, considered in detail with reasons (e.g. cheaper electronics → growing piles of toxic e-waste in importing countries).',
      },
    ],
  },
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — water security (Kenya)',
    marks: 8,
    stem:
      'The county government of Turkana, in northern Kenya, is concerned that many rural households cannot reach a safe, reliable source of water. During droughts, families walk for hours to collect water, and the water they find is often unsafe to drink.\n\n' +
      'The county government has employed a research consultant to investigate ways to improve access to clean water and the health of their population. The consultant’s action plan is shown below.\n\n' +
      '**Research question:** How can Turkana County improve access to clean water for rural households?',
    artefact: {
      component: 'DataTableInteractive',
      caption: 'The research consultant’s action plan — click a row to pin the stage you are reading. The marked stimulus is this plan.',
      data: {
        title: 'Research consultant’s action plan',
        source: 'Turkana County Government, Kenya',
        caption: 'Research question: How can Turkana County improve access to clean water for rural households? Plan runs over an 8-week schedule.',
        headers: ['Stage', 'Schedule / status', 'Tasks in this stage'],
        rows: [
          [
            'Stage 1 · Research sub-questions',
            'Week 1 · Launched',
            'SQ1: Do rural households in Turkana lack access to clean water? · SQ2: Why are existing boreholes so often broken? · SQ3: Which water sources do families currently use and how far away are they? · SQ4: What percentage of residents own a smartphone?',
          ],
          [
            'Stage 2 · Secondary data collection',
            'Weeks 2–4 · In progress',
            'Litres of safe water available per person per day · Rates of waterborne disease in the county · Number and condition of existing boreholes and wells · Causes of borehole breakdown',
          ],
          [
            'Stage 3 · Primary data collection',
            'Weeks 5–6 · Not started',
            'Interview five villagers about where they collect water and how long it takes them',
          ],
          [
            'Stage 4 · Prepare recommendations for the county government',
            'Weeks 7–8 · Not started',
            'Design a presentation using the secondary data on water availability and disease · Mention what villagers say in the interviews',
          ],
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the action plan.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the investigation, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — globalization, trade & exchange',
    marks: 12,
    stem:
      'A local government wants to understand the social or environmental impacts of globalization on trade and exchange in their country.\n\n' +
      'The government asked you, as a research consultant, to design an action plan to investigate the social **or** environmental impacts on a case study of your choice. Use the following statement of inquiry to inform your action plan.\n\n' +
      '**Statement of inquiry:** Local and global processes are interconnected as a result of globalisation, creating challenges and opportunities.',
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a clear and focused research question for your investigation.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (e.g. names a location/stakeholder) and connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** why your research question will allow the government to achieve their goal.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is worthy of investigating — build from a simple reason to a fully justified one.',
      },
      {
        label: 'c',
        text: '**Identify** two reliable sources you would use in your investigation.',
        marks: 2,
        ph: 'Two specific reliable sources (e.g. ILO data on garment-worker wages in Bangladesh; reports from NGOs working in Dhaka). Vague source types alone score 0.',
      },
      {
        label: 'd',
        text: '**Explain** how one source identified in part (c) will help you answer your research question.',
        marks: 4,
        ph: 'One benefit of the source, considered in detail with reasons for how it helps answer the RQ.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — humans, innovation & biomes',
    marks: 18,
    stem:
      'You have been invited to appear on a TV documentary series made for students. The audience of the series will be students in MYP schools from around the world.\n\n' +
      'You are in the studio to film your segment. The presenter’s introduction has been storyboarded as a set of cards — read the storyboard, then write your script.',
    artefact: {
      component: 'SlideDeck',
      caption: 'The presenter’s storyboarded introduction — page through it. The presenter’s question is the prompt for your script.',
      data: {
        title: 'Student documentary — presenter storyboard',
        source: 'TV documentary studio · global context: scientific and technical innovation',
        slides: [
          {
            title: 'Card 1 — Cold open',
            body: 'Presenter: “Welcome to the show that explores the global context of scientific and technical innovation. Today our guest is a fellow MYP5 Geography student, here to talk about the impact humans have on their environment(s).”',
          },
          {
            title: 'Card 2 — Guest welcome',
            body: 'Guest: “Thanks for having me!”  ·  Presenter: “We are so glad you could join us in the studio for this episode.”',
          },
          {
            title: 'Card 3 — The big question',
            body: 'Presenter: “Here is the question we’d like you to answer for our viewers today: how are humans using scientific and technical innovations to harm or to protect biomes?”',
            bullets: [
              'Cue the guest to begin their scripted answer',
              'Camera holds on the guest for the response',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a script in response to the presenter’s question.\n\n' +
          'In your script, you must:\n' +
          '• state a title for the episode\n' +
          '• **explain** how humans are using scientific and technical innovations to harm or protect natural environments\n' +
          '• reference at least **two** biomes from your MYP studies\n' +
          '• provide a closing statement.',
        marks: 18,
        ph: 'A titled documentary script explaining how innovation harms/protects biomes, referencing ≥2 biomes, with a closing statement. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 5,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — global flood-risk map',
    marks: 6,
    stem:
      'In 2024, severe flash floods struck the region of Valencia in eastern Spain. The floods killed more than 200 people and damaged tens of thousands of homes and businesses.\n\n' +
      'An international non-governmental organization (NGO) called **Relief Without Borders** wants to plan ahead so it can pre-position food and emergency shelter in the countries most likely to need them. They have contacted you to get your opinion on how useful **Source B** could be for achieving their goal.\n\n' +
      '**Source B** is a world thematic map highlighting the countries at the highest risk of damaging river and flash floods.',
    artefact: {
      component: 'ChoroplethWorld',
      caption: 'Source B — world map highlighting the countries at highest flood risk (original recreation). Highlighted = highest-risk countries.',
      data: {
        mode: 'highlight',
        title: 'Source B — Countries at highest flood risk',
        source: 'NGO flood-risk assessment (recreated)',
        highlightLabel: 'Highest flood risk',
        baseLabel: 'Lower flood risk',
        highlight: [
          'Spain',
          'India',
          'Bangladesh',
          'Pakistan',
          'China',
          'Philippines',
          'Indonesia',
          'Vietnam',
          'Myanmar',
          'Mozambique',
          'Brazil',
        ],
        caption: 'The colour-coded map gives an overview of which whole countries face the greatest flood risk; it does not show individual towns, roads or the needs of particular communities.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Explain** one value of **Source B** to the NGO’s goal to help communities affected by flooding.',
        marks: 3,
        ph: 'One value of the map for the NGO, considered with reasoning (e.g. it highlights the highest-risk countries, so the NGO can pre-position aid where flooding is most likely).',
      },
      {
        label: 'b',
        text: '**Explain** one reason why **Source B** might not provide enough information for the NGO’s project.',
        marks: 3,
        ph: 'One limitation of the map for the NGO, considered with reasoning (e.g. it works at country scale, so it cannot show which towns or roads within a country need help).',
      },
    ],
  },
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Analysing disaster-preparedness strategies',
    marks: 6,
    stem:
      'Months after the floods, a member of the Valencia city council addressed residents about preparing for possible flooding in the future.\n\n' +
      'Study **Source C** (the proposed strategies) and answer the question below. A wheelchair user living on the ground floor of an apartment block was listening to the address.',
    artefact: {
      component: 'NetworkGraph',
      caption: 'Source C — the two proposed preparedness strategies and how each is meant to work. Hover a node to read its detail.',
      data: {
        title: 'Source C — Valencia city-council preparedness plan',
        source: 'A member of the Valencia city council, addressing residents',
        center: {
          label: 'Flood preparedness plan',
          color: '#1971c2',
          detail: 'Two strategies the council will put in place to protect residents from future flooding.',
        },
        nodes: [
          {
            id: 's1',
            label: 'Phone-app flood alerts',
            color: '#e8590c',
            detail: 'A smartphone app will send real-time alerts and rising-water warnings, so residents get up-to-date information about an approaching flood through their phones and social media.',
          },
          {
            id: 's1a',
            label: 'Needs a smartphone',
            color: '#f08c00',
            detail: 'Residents must own a smartphone, keep it charged and be confident using apps and social media to receive the warning in time.',
          },
          {
            id: 's2',
            label: 'Evacuation drills to high ground',
            color: '#2f9e44',
            detail: 'The city will hold regular drills so residents learn the safest routes on foot to higher floors and to elevated assembly points away from the river.',
          },
          {
            id: 's2a',
            label: 'Routes use stairs & kerbs',
            color: '#9c36b5',
            detail: 'The marked safe routes climb to upper floors and cross raised kerbs, assuming residents can move quickly on foot when a flood strikes.',
          },
        ],
        edges: [
          { from: 's1', to: 's1a', label: 'requires' },
          { from: 's2', to: 's2a', label: 'requires' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'With reference to the proposed strategies, **analyse** the effectiveness of the two strategies from the wheelchair user’s perspective.',
        marks: 6,
        ph: 'Analyse both strategies (phone-app alerts; evacuation drills) for a wheelchair user, in detail, and reach a conclusion on their effectiveness. Analysing only one strategy caps at 3 marks.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — income & disaster impacts',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '**To what extent** can differences in income influence the severity of the impacts of natural disasters?\n\n' +
          'In your essay, you must include:\n' +
          '• different perspectives\n' +
          '• at least one example of a natural disaster to support your arguments\n' +
          '• appropriate geographical terms.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing how income differences affect disaster severity, with ≥2 perspectives and a named disaster. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
