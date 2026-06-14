import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2024 · Set 2 isomorphic VARIANT (geography-may-2024-v2).
 * Subject group: Individuals & Societies · Course: Geography
 *
 * ISOMORPHIC to geography-may-2024: identical paperMeta (bar id), identical
 * question ids / crit / type / marks, identical task labels + marks, identical
 * command terms (first **bold** word of each task), and the same 3-task / 80-mark
 * blueprint:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 6) · Q2 (B, 8) · Q3 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q4 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q5 (6) · Q6 (6) · Q7 (24)
 *
 * NEW scenario (South Asia): the Indus River basin (Pakistan) and its water-quality
 * decline; monsoon-flood hazard management in a flood-prone country; and a development
 * decision in the fast-growing port city of Karachi (Pakistan). Each artefact-bearing
 * question presents this new context through a DIFFERENT, scenario-appropriate component
 * than BOTH the source AND Set 1 (per the I&S variant carve-out — the artefact component
 * is NOT an invariant). Component map vs source / v1:
 *   Q2  source LocatedMap+InfoGraphicPanel · v1 ChoroplethWorld+TimelineScrubber
 *         → InteractiveChart (line — the falling Indus flow/quality data, value-read context)
 *         + NetworkGraph (the students' action plan as a hub-and-spoke of investigation stages — the marked stimulus)
 *   Q4  source DataTableInteractive · v1 SlideDeck
 *         → InfoGraphicPanel (grid — the emailed questions, one panel per category)
 *   Q5  source LocatedMap (scene) · v1 InfoGraphicPanel
 *         → SourceDocViewer (Source A, the annotated land-use brief as an evaluable document)
 *   Q6  source InfoGraphicPanel · v1 SourceDocViewer
 *         → DataTableInteractive (Source B, the city fact file as a fact table)
 *   Q7  source InfoGraphicPanel · v1 NetworkGraph
 *         → SlideDeck (eight quality-of-life indicators, one slide per indicator)
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
  id: 'geography-may-2024-v2',
  subject: 'Geography',
  session: 'May',
  year: 2024,
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
    topic: 'Physical processes — rivers & coasts',
    marks: 6,
    stem: 'Rivers and coasts are shaped by physical processes, some of which can put nearby communities at risk.',
    tasks: [
      {
        label: 'a',
        text: '**State** two physical processes that may impact rivers or coasts.',
        marks: 2,
        ph: 'Two distinct physical processes (e.g. deposition, weathering, abrasion, transportation, mass movement, saltwater intrusion).',
      },
      {
        label: 'b',
        text: '**Explain** how one physical process in rivers or coasts can threaten communities.',
        marks: 4,
        ph: 'One process considered in detail, with reasons (e.g. river deposition raises the bed → the channel holds less water → it overtops in the monsoon and floods nearby homes).',
      },
    ],
  },
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — Indus River management',
    marks: 8,
    stem:
      'The people of southern Pakistan are growing increasingly concerned about the health of the Indus River. The volume of water reaching the lower Indus is falling year on year as more is taken upstream for irrigation. The remaining water is becoming more polluted, and lower flow lets salt water push up the delta, harming farms and fisheries. By the time the Indus reaches Sindh province, it has completed most of its journey through its catchment area, and downstream communities have little control over how much water is released to them.\n\n' +
      'MYP5 students from Sukkur (on the middle Indus, beside a large barrage) and Thatta (downstream, near the delta) are working together to investigate management strategies for the Indus River. The interactive chart below shows how the flow reaching the lower river has changed over the past five years. The students met online and designed the action plan shown alongside for their investigation. You will be asked to evaluate this action plan.\n\n' +
      'Background facts shown alongside the chart:\n' +
      '• Barrages and canals divert much of the Indus to irrigate Pakistan’s farmland.\n' +
      '• Around 95% of Pakistan’s water use comes from the Indus basin, on which millions depend for water, food and power.\n' +
      '• Mean dry-season flow reaching the lower Indus has fallen from about 1,800 m³/s five years ago to about 1,000 m³/s last year.\n' +
      '• Lower flow has let salt water push further up the delta, ruining rice paddies and palla-fish fisheries.\n' +
      '• When upstream barrages release water suddenly in the monsoon, downstream villages can flood.',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Mean dry-season flow reaching the lower Indus over the past five years, with the salinity creeping up the delta over the same period. Read the falling-flow trend off the chart.',
      data: {
        kind: 'line',
        title: 'Lower Indus — falling dry-season flow (last 5 years)',
        source: 'Student investigation chart (recreated)',
        x: { label: 'Year', categories: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'] },
        y: { label: 'Mean dry-season flow', min: 0, max: 2000, ticks: [0, 500, 1000, 1500, 2000], unit: 'm³/s' },
        series: [
          { name: 'Dry-season flow (m³/s)', color: '#1971c2', points: [1800, 1600, 1400, 1200, 1000] },
          { name: 'Delta salinity index', color: '#e8590c', points: [200, 400, 600, 800, 1000] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the students’ action plan.',
        marks: 8,
        ph: 'Weigh the strengths and limitations of the plan, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2. You need not discuss every part.',
        artefact: {
          component: 'NetworkGraph',
          caption: 'The students’ Indus River Investigation Action Plan, shown as the central inquiry surrounded by each planned stage. Team Sukkur (upstream) and Team Thatta (downstream) work in parallel. This plan is the marked stimulus.',
          data: {
            title: 'Indus River Investigation Action Plan',
            source: 'MYP5 students, Sukkur & Thatta (Pakistan)',
            center: {
              label: 'Research question: How can the Indus be managed for clean water?',
              detail:
                'Both teams · Week 1 — Design the investigation. Research question: How can the Indus River be better managed so that both upstream and downstream communities in Sindh have enough clean water? Sub-questions: How do barrages and canals change the river? What would happen to the delta if more water were released downstream? Would lining the canals to reduce losses help farmers?',
              color: '#1e293b',
            },
            nodes: [
              { id: 'farmers', label: 'Interview delta farmers', detail: 'Team Thatta (downstream) · Week 2–4 — interview rice farmers and palla fishers about the problems caused by salt water and low flow. Primary data from one perspective.' },
              { id: 'irrigation', label: 'Email the irrigation department', detail: 'Team Sukkur (upstream) · Week 2–4 — email the provincial irrigation department asking how much water is diverted at the barrage and when it is released. Secondary data.' },
              { id: 'barrage', label: 'Visit the barrage', detail: 'Team Sukkur (upstream) · Week 2–4 — visit the Sukkur Barrage to see how water is diverted into the canals and how flow is controlled.' },
              { id: 'video', label: 'Present the findings', detail: 'Both teams · Week 5–6 — combine the data and create a video to show the findings. No water-quality testing (e.g. salinity or oxygen levels) is planned.' },
            ],
          },
        },
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — sustainable river/coastal management',
    marks: 12,
    stem:
      'The local government of a river or coastal area wants to investigate ways to better protect the environment and the community. You must choose a location and design an action plan to investigate sustainable management solutions for the local government.\n\n' +
      '**Statement of inquiry:** Sustainable management of rivers and coastal environments can protect communities and the environment.\n\n' +
      'You must **not** repeat information from Question 2 in your responses.',
    tasks: [
      {
        label: 'a',
        text: 'Use the statement of inquiry to **formulate** a clear and focused research question for your investigation.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (e.g. names a place and a strategy) and connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** how investigating your research question will help the local council to better protect the environment and the community.',
        marks: 4,
        ph: 'Consider at least one factor in detail, with reasoning for why the RQ is relevant to the statement of inquiry. Build from a simple connection to a full justification.',
      },
      {
        label: 'c',
        text: '**Identify** one reliable secondary source you would use to investigate your research question.',
        marks: 1,
        ph: 'One specific reliable secondary source (e.g. national water-authority river-gauge records; satellite delta-shoreline imagery). Vague responses like “websites” score 0.',
      },
      {
        label: 'd',
        text: '**Explain** how the secondary source you identified in part (c) will help you investigate your research question.',
        marks: 4,
        ph: 'One benefit of the source considered in detail, with reasons for how it helps you answer the research question.',
      },
      {
        label: 'e',
        text: '**State** one challenge you could face in your investigation.',
        marks: 1,
        ph: 'One specific challenge (e.g. unable to access barrage-release records; the monsoon season makes fieldwork timing difficult). Vague responses score 0.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — managing monsoon flooding',
    marks: 18,
    stem:
      'You have been invited to give an online presentation to MYP4 students in Norway as you live in a flood-prone country that experiences heavy monsoon rains and large river floods almost every year. You have been asked to explain how flooding is successfully managed in your country.\n\n' +
      'Before the presentation, the students in Norway have emailed some questions for you to consider. Your teacher has organised them into three categories, shown on the panel below. You must choose **two** questions, each from a **different** category.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'The emailed questions, grouped into three category panels (Environmental, Social, Economic). Choose two — each from a different category — to answer in your script.',
      data: {
        title: 'Questions from the MYP4 students in Norway',
        source: 'Norwegian MYP4 class',
        intro: 'Click a panel to spotlight a category. You must answer two questions from two different categories in your script.',
        layout: 'grid',
        blocks: [
          {
            heading: 'Environmental',
            note: 'Choose at most one question from this category.',
            items: [
              'How does your country reduce the environmental damage caused by river floods?',
              'How does your country protect wetlands and farmland from being washed away when rivers flood?',
            ],
          },
          {
            heading: 'Social',
            note: 'Choose at most one question from this category.',
            items: [
              'Why do so few people have to leave their homes permanently when a flood happens in your country?',
              'How does your country keep communities safe and warned before a flood arrives?',
            ],
          },
          {
            heading: 'Economic',
            note: 'Choose at most one question from this category.',
            items: [
              'How are the economic impacts of floods on farmers managed in your country?',
              'How does your country help businesses recover quickly after a flood?',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Prepare for your presentation and your chosen questions by writing a **script** to explain how flooding is successfully managed in your country.\n\n' +
          'Your script must include the following:\n' +
          '• an introduction\n' +
          '• a conclusion\n' +
          '• named location(s).',
        marks: 18,
        ph: 'A presentation script explaining how flooding is managed, answering two questions from two categories, with an introduction, conclusion and named locations. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 5,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — Karachi land-use brief',
    marks: 6,
    stem:
      'You are a city planner working in Karachi, a fast-growing port city on the coast of Pakistan. ‘Sector W’, described in **Source A** below, is being considered as a possible site for development. You and other city planners are considering whether to expand the port’s special economic zone (SEZ) or build more housing.\n\n' +
      '**Source A** is a planning brief for the area around Sector W. It lists the surrounding land uses and gives a scale bar so distances can be measured. It does not include street names, the locations of schools or clinics, or the views of individual residents.',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'Source A — a land-use planning brief for the area around Sector W, Karachi (original recreation). Use the evaluation lenses to judge its value and limitations for the planners’ decision.',
      data: {
        title: 'Source A — Sector W land-use brief (Karachi)',
        kind: 'Secondary source',
        attribution: 'City planning department, Karachi (recreated extract)',
        paragraphs: [
          'Sector W is the site being considered for development. It lies between the existing port zone to the south and the residential districts to the north and west, and is the land the planners must decide how to use: expand the port’s special economic zone, or build housing.',
          'A scale bar is printed on the brief: 1 cm on the brief represents 0.5 km on the ground. Using this scale, Sector W is about 2 km from the central market district along the main road, and about 1 km from the nearest existing housing.',
          'To the south, an existing container terminal and special economic zone line the coast. Low-, mid- and high-income housing districts lie to the north and west. A central market district lies inland, and a protected coastal mangrove forest borders the site to the east.',
          'The brief does NOT show street names, the locations of schools or clinics, or the needs and opinions of the individual residents who would be affected by the decision.',
        ],
        glossary: {
          'special economic zone': 'An area of a country with relaxed trade and tax rules, set up to attract industry and exports.',
          'scale bar': 'A line marked on a map or brief that shows the real-world distance a given length represents.',
          mangrove: 'Salt-tolerant coastal trees that protect shorelines from erosion and shelter young fish and birds.',
        },
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** one value of **Source A** for the city planners’ discussion on whether to expand the port’s special economic zone or build more housing.',
        marks: 2,
        ph: 'One value of the source elaborated on (e.g. it includes a scale that helps planners judge how far Sector W is from the market district).',
      },
      {
        label: 'b',
        text: '**Explain** one limitation of **Source A** that could prevent the city planners from making an informed decision about how to develop Sector W.',
        marks: 4,
        ph: 'One limitation considered with reasoning (e.g. the brief lacks detail such as school locations, which planners need to decide housing vs the SEZ).',
      },
    ],
  },
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Justifying a development decision (Karachi)',
    marks: 6,
    stem:
      '**Source A** (the Sector W land-use brief for Karachi from Question 5) still applies. Read **Source B** below — a fact file on Karachi — and, together with Source A, decide how Sector W should be developed.\n\n' +
      'Choose the opinion you would support:\n' +
      '• Build more housing\n' +
      '• Expand the port’s special economic zone.',
    artefact: {
      component: 'DataTableInteractive',
      caption: 'Source B — Facts about Karachi, set out as a fact table. Click a row to pin the fact you are using. Use these facts (and Source A from Q5) to justify your decision.',
      data: {
        title: 'Source B — Facts about Karachi',
        source: 'City profile (recreated)',
        caption: 'Each row is one fact about the city. Use them, with Source A, to justify whether Sector W should be housing or an expanded special economic zone.',
        headers: ['Theme', 'Fact'],
        rows: [
          ['Population', 'Karachi has a population of about 17 million, and it rises every year because of urbanization.'],
          ['Wealth', 'More than 40% of the city’s residents live in informal settlements, and there is a large shortage of affordable housing.'],
          ['Location', 'The city sits on the Arabian Sea where the port handles most of the country’s sea trade.'],
          ['Housing', 'Demand for housing is rising fast as workers move to the city from rural areas.'],
          ['Trade', 'The port and its special economic zone are already among the busiest in the region; the city profits mainly from trade and industry there.'],
          ['Environment', 'A protected mangrove forest beside Sector W shelters fish nurseries and protects the coast, so any development must avoid draining or polluting it.'],
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'With reference to **both** opinions, **justify** your decision.',
        marks: 6,
        ph: 'State your chosen opinion, then justify it in detail with supporting reasons drawn from Sources A and B, referring to BOTH options. Referring to only one option caps at 3 marks.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — megacities & quality of life',
    marks: 24,
    stem:
      'The slide deck below presents eight **quality-of-life indicators** — health, work, belonging to a community, financial wellbeing, quality of environment, personal safety, social relationships and emotional wellbeing — one per slide, each weighed against **living in a megacity**. Page through them and use at least two of these indicators to build your argument.',
    artefact: {
      component: 'SlideDeck',
      caption: 'Eight quality-of-life indicators, one per slide, weighed against living in a megacity — choose at least two indicators to argue with.',
      data: {
        title: 'Quality-of-life indicators vs living in a megacity',
        source: 'Wellbeing framework',
        slides: [
          { title: 'Health', body: 'Does living in a megacity raise or lower this indicator? Consider it as you plan your essay.', bullets: ['Access to clean air, healthcare and sanitation.'] },
          { title: 'Work', body: 'Does living in a megacity raise or lower this indicator?', bullets: ['Employment opportunities, commuting and job security.'] },
          { title: 'Belonging to a community', body: 'Does living in a megacity raise or lower this indicator?', bullets: ['Connection to neighbours and local identity.'] },
          { title: 'Financial wellbeing', body: 'Does living in a megacity raise or lower this indicator?', bullets: ['Cost of living, housing affordability and income.'] },
          { title: 'Quality of environment', body: 'Does living in a megacity raise or lower this indicator?', bullets: ['Pollution, green space and congestion.'] },
          { title: 'Personal safety', body: 'Does living in a megacity raise or lower this indicator?', bullets: ['Crime, traffic and exposure to hazards.'] },
          { title: 'Social relationships', body: 'Does living in a megacity raise or lower this indicator?', bullets: ['Time with family and friends, social networks.'] },
          { title: 'Emotional wellbeing', body: 'Does living in a megacity raise or lower this indicator?', bullets: ['Stress, noise and overall life satisfaction.'] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '**To what extent** does living in a megacity decrease the quality of life of societies?\n\n' +
          'In your essay, you must:\n' +
          '• consider at least two different quality of life indicators\n' +
          '• consider different perspectives\n' +
          '• use examples from your MYP studies to support your arguments\n' +
          '• use appropriate geographical terms.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing how living in a megacity affects quality of life, using ≥2 indicators, ≥2 perspectives and examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
