import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2024 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Source: geogmmoeengtz0xxm (M24). Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 6) · Q2 (B, 8) · Q3 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q4 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q5 (6) · Q6 (6) · Q7 (24)
 *
 * Theme: rivers/coasts management (Mekong), tectonic-hazard management, and
 * urbanisation / megacities (Basra, Iraq). Text/list sources are transcribed as
 * original extracts; visual sources become interactive artefacts wired via the
 * `artefact` field:
 *   Q2  → LocatedMap (REGION mode)  — the Mekong basin map (Pakse, Stung Treng)
 *         + InfoGraphicPanel        — the students' Mekong investigation action plan
 *   Q4  → DataTableInteractive      — the choose-two question grid (Environmental/Social/Economic)
 *   Q5  → LocatedMap (SCENE mode)   — Source A, the annotated Basra aerial map (recreated)
 *   Q6  → InfoGraphicPanel          — Source B "Facts about Basra" (+ reuses Source A from Q5)
 *   Q7  → InfoGraphicPanel          — the seesaw of eight quality-of-life indicators
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
  id: 'geography-may-2024',
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
        ph: 'Two distinct physical processes (e.g. erosion, flooding, longshore drift, attrition, hydraulic action).',
      },
      {
        label: 'b',
        text: '**Explain** how one physical process in rivers or coasts can threaten communities.',
        marks: 4,
        ph: 'One process considered in detail, with reasons (e.g. erosion undercuts and destabilises a riverbank → it collapses → farmland is washed away).',
      },
    ],
  },
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — Mekong River management',
    marks: 8,
    stem:
      'The people of Cambodia are growing increasingly concerned about the health of the Mekong River. The level of water in the Mekong River in Cambodia is decreasing every year. The water is becoming more polluted which is causing fish stocks to decline. By the time the Mekong River reaches Cambodia, it has completed most of its journey through its catchment area. There is little the Cambodian government can do to improve water quality and quantity.\n\n' +
      'MYP5 students from Pakse in Laos, and Stung Treng in Cambodia (both shown on the map) are working together to investigate management strategies in the Mekong River. The students met online and designed the action plan below for their investigation. You will be asked to evaluate this action plan.\n\n' +
      'Background facts shown on the interactive infographic:\n' +
      '• Laos has built over 60 dams on the Mekong River. They plan to build many more to generate electricity and sell it to neighbouring countries.\n' +
      '• 60 million people across 6 countries rely on the Mekong River for their livelihoods.\n' +
      '• The river level has dropped to its lowest in 100 years.\n' +
      '• The lack of water has led to fewer fish and more algae.\n' +
      '• Farmers in Cambodia experience big changes in river flow as Laos stores and releases water from its dams.',
    artefact: {
      component: 'LocatedMap',
      caption: 'The Mekong River basin — Pakse (Laos) and Stung Treng (Cambodia), the two student field sites, are pinned on the river.',
      data: {
        title: 'The Mekong River basin',
        source: 'Student investigation infographic (recreated)',
        region: 'Mekong River, mainland Southeast Asia',
        regionCountries: ['China', 'Myanmar', 'Laos', 'Thailand', 'Cambodia', 'Vietnam'],
        scaleKm: 200,
        north: true,
        locator: [104.5, 16.5],
        markers: [
          { lon: 105.78, lat: 15.12, label: 'Pakse', detail: 'Team Laos field site, on the Mekong in southern Laos.', color: '#e8590c' },
          { lon: 105.97, lat: 13.52, label: 'Stung Treng', detail: 'Team Cambodia field site, on the Mekong in northern Cambodia.', color: '#e8590c' },
        ],
        caption: 'The Mekong flows from China through Myanmar, Laos, Thailand and Cambodia to the Mekong Delta in Vietnam.',
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the students’ action plan.',
        marks: 8,
        ph: 'Weigh the strengths and limitations of the plan, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2. You need not discuss every part.',
        artefact: {
          component: 'InfoGraphicPanel',
          caption: 'The students’ Mekong River Investigation Action Plan — Team Cambodia and Team Laos working in parallel. This plan is the marked stimulus.',
          data: {
            title: 'Mekong River Investigation Action Plan',
            source: 'MYP5 students, Pakse (Laos) & Stung Treng (Cambodia)',
            intro: 'Two student teams investigate management strategies for the Mekong River, working in parallel over six weeks.',
            layout: 'flow',
            blocks: [
              {
                heading: 'Both · Week 1 — Design the investigation',
                note: 'Stage 1–2: research question & sub-questions',
                items: [
                  '1. Research question: How can the Mekong River be better managed to make sure there is clean water for Laos and Cambodian communities?',
                  '2. Sub-questions: How do dams work? What would happen to water availability if the dams were removed? Would more dams in Cambodia benefit farmers?',
                ],
              },
              {
                heading: 'Team Cambodia · Week 2–4 — Data collection',
                note: 'Stage 3: primary data (Cambodia)',
                items: [
                  'Interview Cambodian farmers about the challenges they are experiencing due to the lack of water.',
                ],
              },
              {
                heading: 'Team Laos · Week 2–4 — Data collection',
                note: 'Stage 3: primary & secondary data (Laos)',
                items: [
                  'Email the local water company asking them how much water is stored and used in the Laos reservoirs.',
                  'Visit a dam to see how it works.',
                ],
              },
              {
                heading: 'Both · Week 5–6 — Data presentation',
                note: 'Stage 4: findings',
                items: [
                  'Create a video to show the findings of the investigation.',
                ],
              },
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
        ph: 'One specific reliable secondary source (e.g. local council website; GIS mapping data showing flooding). Vague responses like “websites” score 0.',
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
        ph: 'One specific challenge (e.g. unable to access government data; large research area). Vague responses score 0.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — managing tectonic activity',
    marks: 18,
    stem:
      'You have been invited to give an online presentation to MYP4 students in Australia as you live in a tectonically active country that experiences both earthquakes and volcanic eruptions. You have been asked to explain how tectonic activity is successfully managed in your country.\n\n' +
      'Before the presentation, the students in Australia have emailed some questions for you to consider. Your teacher has organised them into three categories. You must choose **two** questions, each from a **different** category.',
    artefact: {
      component: 'DataTableInteractive',
      caption: 'The emailed questions, grouped into three categories. Choose two — each from a different category — to answer in your script.',
      data: {
        title: 'Questions from the MYP4 students in Australia',
        source: 'Australian MYP4 class',
        caption: 'Click a row to pin the question(s) you choose. You must answer two questions from two different categories.',
        headers: ['Environmental', 'Social', 'Economic'],
        rows: [
          [
            'How does your country minimise the environmental impacts of volcanic eruptions?',
            'Why are there so few social impacts after an earthquake?',
            'How are the economic impacts of earthquakes managed in your country?',
          ],
          [
            'How does your country minimise the environmental impacts of earthquakes?',
            'Why are there so few social impacts after volcanic activity?',
            'How are the economic impacts of volcanic activity managed in your country?',
          ],
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Prepare for your presentation and your chosen questions by writing a **script** to explain how tectonic activity is successfully managed in your country.\n\n' +
          'Your script must include the following:\n' +
          '• an introduction\n' +
          '• a conclusion\n' +
          '• named location(s).',
        marks: 18,
        ph: 'A presentation script explaining how tectonic activity is managed, answering two questions from two categories, with an introduction, conclusion and named locations. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 5,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — Basra development map',
    marks: 6,
    stem:
      'You are a city planner working in Basra, a city in Iraq. ‘Area X’, marked on **Source A** below, is being considered as a possible site for development. You and other city planners are considering whether to expand the industrial area or build more housing.\n\n' +
      '**Source A** is an aerial map of part of Basra. Area X is outlined; the surrounding land uses are labelled (industrial area, canal, low- / mid- / high-income housing, central business district, sports arena, agricultural land), and a river runs through the scene. A scale bar is shown.',
    artefact: {
      component: 'LocatedMap',
      caption: 'Source A — an aerial map of part of Basra, Iraq (original recreation). Area X (outlined) is the site being considered for development.',
      data: {
        title: 'Source A — aerial map of Basra (Area X site)',
        source: 'City planning department (recreated)',
        region: 'Basra, Iraq',
        scene: 'coast',
        water: 'left',
        terrain: 'right',
        scaleKm: 2,
        north: true,
        locator: [47.78, 30.5],
        legend: [
          { label: 'Housing (low / mid / high income)', color: '#c2a36b' },
          { label: 'Industrial area', color: '#8a8f98' },
          { label: 'Central business district', color: '#5c7cfa' },
          { label: 'Agricultural land', color: '#5a9e4e' },
        ],
        groups: [
          { id: 'housing-low', label: 'Low-income housing', color: '#c2a36b', count: 90, zone: 'north' },
          { id: 'housing-mid', label: 'Mid-income housing', color: '#c2a36b', count: 90, zone: 'south' },
          { id: 'housing-high', label: 'High-income housing', color: '#c2a36b', count: 60, zone: 'south' },
          { id: 'cbd', label: 'Central business district', color: '#5c7cfa', count: 30, zone: 'all' },
          { id: 'industry', label: 'Industrial area', color: '#8a8f98', count: 30, zone: 'coast north' },
        ],
        markers: [
          { x: 30, y: 40, glyph: 'X', label: 'Area X', detail: 'The site being considered — expand industry or build housing?', color: '#c2255c' },
          { x: 24, y: 24, glyph: '⬛', label: 'Industrial area', detail: 'Existing factories near the canal.', color: '#8a8f98' },
          { x: 70, y: 22, glyph: '▦', label: 'Agricultural land', detail: 'Farmland across the river.', color: '#5a9e4e' },
          { x: 56, y: 58, glyph: '$', label: 'Central business district', detail: 'Jobs and commerce.', color: '#5c7cfa' },
        ],
        caption: 'The map shows land use and a scale bar but no street names, school locations or the needs of individual residents.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** one value of **Source A** for the city planners’ discussion on whether to expand the industrial area or build more housing.',
        marks: 2,
        ph: 'One value of the map elaborated on (e.g. it includes a scale that helps planners judge how far Area X is from the CBD).',
      },
      {
        label: 'b',
        text: '**Explain** one limitation of **Source A** that could prevent the city planners from making an informed decision about how to develop Area X.',
        marks: 4,
        ph: 'One limitation considered with reasoning (e.g. the map lacks detail such as school locations, which planners need to decide housing vs factories).',
      },
    ],
  },
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Justifying a development decision (Basra)',
    marks: 6,
    stem:
      '**Source A** (the aerial map of Basra from Question 5) is repeated here for information. Look at **Source A** and the **Source B** fact cards below, then decide how Area X should be developed.\n\n' +
      'Choose the opinion you would support:\n' +
      '• Build more housing\n' +
      '• Expand the industrial area.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source B — “Facts about Basra”. Use these facts (and Source A from Q5) to justify your decision.',
      data: {
        title: 'Source B — Facts about Basra',
        source: 'City profile',
        layout: 'grid',
        blocks: [
          {
            heading: 'Population',
            items: ['The city has a population of 1.45 million.', 'Due to urbanization, the population increases every year.'],
          },
          {
            heading: 'Wealth',
            items: ['More than 46% of Basra’s population lives on less than $2.15 per day.'],
          },
          {
            heading: 'Location',
            items: ['The city is located where the two largest rivers in the region meet and flow into the Arabian Gulf.'],
          },
          {
            heading: 'Housing',
            items: ['There is increased demand for housing due to urbanization.'],
          },
          {
            heading: 'Trade',
            items: ['Basra is the country’s main seaport, making it a major centre for trade.', 'The city profits mainly from oil found in the region.'],
          },
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
      'The seesaw below weighs **living in a megacity** against eight **quality-of-life indicators**: health, work, belonging to a community, financial wellbeing, quality of environment, personal safety, social relationships and emotional wellbeing. Use at least two of these indicators to build your argument.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Quality-of-life indicators weighed against living in a megacity — choose at least two indicators to argue with.',
      data: {
        title: 'Quality-of-life indicators vs living in a megacity',
        source: 'Wellbeing framework',
        intro: 'Does living in a megacity tip the balance for these quality-of-life indicators? Consider at least two.',
        layout: 'grid',
        blocks: [
          { heading: 'Health', items: ['Access to clean air, healthcare and sanitation.'] },
          { heading: 'Work', items: ['Employment opportunities, commuting and job security.'] },
          { heading: 'Belonging to a community', items: ['Connection to neighbours and local identity.'] },
          { heading: 'Financial wellbeing', items: ['Cost of living, housing affordability and income.'] },
          { heading: 'Quality of environment', items: ['Pollution, green space and congestion.'] },
          { heading: 'Personal safety', items: ['Crime, traffic and exposure to hazards.'] },
          { heading: 'Social relationships', items: ['Time with family and friends, social networks.'] },
          { heading: 'Emotional wellbeing', items: ['Stress, noise and overall life satisfaction.'] },
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
