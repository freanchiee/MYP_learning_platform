import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2025 · Set 2 ISOMORPHIC VARIANT (geography-may-2025-v2)
 * Subject group: Individuals & Societies · Course: Geography
 * Isomorphic to geography-may-2025: same blueprint, criteria, marks, task structure and
 * command terms — a genuinely NEW scenario per question, presented through a DIFFERENT
 * artefact component than BOTH the source AND Set 1 (geography-may-2025-v1) for every
 * artefact-bearing question.
 *
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 6) · Q2 (B, 8) · Q3 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q4 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q5 (6) · Q6 (6) · Q7 (24)
 *
 * Theme: globalization & energy security (Mongolia) + earthquake-disaster resilience
 * (Antakya, Türkiye, 2023). Visual sources become interactive artefacts.
 * Artefact component changed vs BOTH source AND Set 1 (I&S carve-out):
 *   Q2  → TimelineScrubber  (source InfoGraphicPanel · v1 DataTableInteractive) — dated 8-week plan
 *   Q4  → InfoGraphicPanel  (source SourceDocViewer · v1 SlideDeck)             — keynote briefing panel
 *   Q5  → InteractiveChart  (source LocatedMap · v1 ChoroplethWorld)            — district damage bar chart
 *   Q6  → SlideDeck         (source SourceDocViewer · v1 NetworkGraph)          — two strategy slides
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
  id: 'geography-may-2025-v2',
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
        ph: 'Two distinct positive impacts (e.g. foreign companies create new jobs; faster sharing of new technology). Single words that do not signify an impact score 0.',
      },
      {
        label: 'b',
        text: '**Explain** a negative consequence of one of the impacts you have identified in part (a).',
        marks: 4,
        ph: 'One negative consequence of an impact, considered in detail with reasons (e.g. foreign factories arriving → local family-owned businesses cannot compete and close down).',
      },
    ],
  },
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — energy security (Mongolia)',
    marks: 8,
    stem:
      'The government of Mongolia is concerned that they are overly reliant on electricity imported from neighbouring countries. When supplies are interrupted in winter, towns can lose power during extremely cold weather, putting residents at risk.\n\n' +
      'The government has employed a research consultant to investigate ways the country could increase its energy security using its own renewable resources. The consultant’s action plan is shown below as a dated 8-week schedule.\n\n' +
      '**Research question:** How can Mongolia reduce its reliance on imported electricity to increase its energy security?',
    artefact: {
      component: 'TimelineScrubber',
      caption: 'The research consultant’s action plan — drag the handle or click a date to read each stage. The marked stimulus is this plan.',
      data: {
        title: 'Research consultant’s action plan (8-week schedule)',
        source: 'Government of Mongolia',
        events: [
          {
            date: 'Week 1',
            label: 'Stage 1 · Research sub-questions (Planning)',
            detail:
              'SQ1: Is Mongolia overly reliant on imported electricity? · SQ2: Why is Mongolia’s renewable-energy infrastructure so limited? · SQ3: Which renewable resources (wind, solar) does Mongolia have and where? · SQ4: What percentage of Mongolians own an electric car?',
          },
          {
            date: 'Weeks 2–4',
            label: 'Stage 2 · Secondary data collection (Research A) — In progress',
            detail:
              'Average electricity used per person in Mongolia and globally · Amount of electricity imported each year and from where · Types of power generation currently used · Causes of winter power cuts.',
          },
          {
            date: 'Weeks 5–6',
            label: 'Stage 3 · Primary data collection (Research B) — Not started',
            detail: 'Interview five engineers about current power generation and how much electricity each plant produces.',
          },
          {
            date: 'Weeks 7–8',
            label: 'Stage 4 · Prepare presentation & recommendations (Findings) — Not started',
            detail:
              'Design a presentation using the secondary data on electricity use, imports and generation · Mention what the engineers say in the interviews.',
          },
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
        ph: 'Two specific reliable sources (e.g. UN Comtrade export data for Vietnam; reports from NGOs monitoring electronics-factory conditions in Vietnam). Vague source types alone score 0.',
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
      'You have been invited to deliver a short keynote talk at a student geography conference. The audience will be students in MYP schools from around the world.\n\n' +
      'You are backstage, about to go on. The conference organisers have given you a briefing panel summarising your slot — read the briefing, then write your script.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'The conference briefing panel — hover a card to spotlight it. The conference question is the prompt for your keynote script.',
      data: {
        title: 'Student geography conference — speaker briefing',
        source: 'Conference organisers · global context: scientific and technical innovation',
        intro: 'Global context for this session: scientific and technical innovation. You are speaking about the impact humans have on their environment(s).',
        layout: 'flow',
        blocks: [
          {
            heading: 'Your slot',
            note: 'Keynote · 6 minutes · main stage',
            items: [
              'Audience: MYP5 Geography students from schools worldwide',
              'You are a fellow MYP5 Geography student speaker',
            ],
          },
          {
            heading: 'The conference question',
            note: 'This is what you must answer for the audience',
            items: [
              'How are humans using scientific and technical innovations to harm or to protect biomes?',
            ],
          },
          {
            heading: 'What to deliver',
            note: 'The organisers will mark you on these',
            items: [
              'A clear title for your keynote',
              'An explanation of how innovation harms or protects natural environments',
              'Reference to at least two biomes',
              'A closing statement for the audience',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a script in response to the conference question.\n\n' +
          'In your script, you must:\n' +
          '• state a title for the keynote\n' +
          '• **explain** how humans are using scientific and technical innovations to harm or protect natural environments\n' +
          '• reference at least **two** biomes from your MYP studies\n' +
          '• provide a closing statement.',
        marks: 18,
        ph: 'A titled keynote script explaining how innovation harms/protects biomes, referencing ≥2 biomes, with a closing statement. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 5,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — earthquake damage chart',
    marks: 6,
    stem:
      'In 2023, a powerful earthquake struck southern Türkiye. The city of Antakya was among the worst hit, with thousands of buildings destroyed and many people forced from their homes.\n\n' +
      'A non-governmental organization (NGO) called **Giving Hands** wants to help survivors of the earthquake. Their goal is to provide food and emergency shelter to those who need it most. They have contacted you to get your opinion on how useful **Source B** could be for achieving their goal.\n\n' +
      '**Source B** is a chart showing, for each district of Antakya, how many buildings were assessed as collapsed/unsafe (red) and how many remained safe to use (green) after the earthquake.',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source B — buildings collapsed/unsafe vs safe in each district of Antakya (original recreation). Hover a bar for its exact value.',
      data: {
        kind: 'bar',
        title: 'Source B — Building damage by district, Antakya',
        source: 'Rapid post-earthquake damage assessment (recreated)',
        x: { label: 'District', categories: ['Old City', 'Harbiye', 'Sümerler', 'Akdeniz', 'Odabaşı'] },
        y: { label: 'Number of buildings', min: 0, max: 500, ticks: [0, 100, 200, 300, 400, 500], unit: 'buildings' },
        series: [
          { name: 'Collapsed / unsafe', color: '#e03131', points: [420, 260, 180, 320, 90] },
          { name: 'Safe to use', color: '#37b24d', points: [80, 240, 320, 180, 410] },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Explain** one value of **Source B** to the NGO’s goal to help survivors of the earthquake.',
        marks: 3,
        ph: 'One value of the chart for the NGO, considered with reasoning (e.g. it shows which districts have the most collapsed/unsafe buildings, so the NGO can prioritise where shelter is needed most — the Old City, with 420 unsafe buildings).',
      },
      {
        label: 'b',
        text: '**Explain** one reason why **Source B** might not provide enough information for the NGO’s project.',
        marks: 3,
        ph: 'One limitation of the chart for the NGO, considered with reasoning (e.g. it only gives totals per district, so it cannot show which exact streets or families need food and shelter).',
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
      'Months after the earthquake, a member of the Antakya city council addressed residents about preparing for possible earthquakes in the future.\n\n' +
      'Study **Source C** (the proposed strategies) and answer the question below. A profoundly deaf resident who cannot hear spoken announcements or sirens was at the meeting.',
    artefact: {
      component: 'SlideDeck',
      caption: 'Source C — the two proposed preparedness strategies, one per slide. Page through to read each.',
      data: {
        title: 'Source C — Antakya city-council preparedness plan',
        source: 'A member of the Antakya city council, addressing residents',
        slides: [
          {
            title: 'Strategy 1 — Loudspeaker siren warnings',
            body:
              'Our city will install loudspeaker sirens on poles across every neighbourhood. When sensors detect an earthquake, the sirens will sound a loud alarm and a recorded spoken announcement telling residents to take cover and then move outdoors.',
            bullets: [
              'Alerts everyone outdoors at the same time',
              'Relies on residents being able to hear the siren and the spoken announcement',
            ],
          },
          {
            title: 'Strategy 2 — Community evacuation drills',
            body:
              'Our city will hold regular evacuation drills so residents learn the safest routes out of buildings and where the open assembly points are. Marshals will shout spoken instructions during each drill so the whole community can respond quickly and calmly.',
            bullets: [
              'Helps residents practise reaching open assembly points',
              'Marshals give the instructions by shouting them out loud',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'With reference to the proposed strategies, **analyse** the effectiveness of the two strategies from the deaf resident’s perspective.',
        marks: 6,
        ph: 'Analyse both strategies (loudspeaker siren warnings; evacuation drills) for a deaf resident, in detail, and reach a conclusion on their effectiveness. Analysing only one strategy caps at 3 marks.',
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
