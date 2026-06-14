import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2025 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Source: geogmmoeengtz0xxm (M25). Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 6) · Q2 (B, 8) · Q3 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q4 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q5 (6) · Q6 (6) · Q7 (24)
 *
 * Theme: globalization & food security (Tajikistan) + natural-disaster resilience
 * (Lahaina, Hawaii). Text/audio sources are transcribed as original extracts; visual
 * sources become interactive artefacts wired via the `artefact` field:
 *   Q2  → InfoGraphicPanel  (the research consultant's 4-stage action plan)
 *   Q4  → SourceDocViewer   (the student-led podcast transcript)
 *   Q5  → LocatedMap        (Source B — Lahaina GIS damage map, recreated as original SVG)
 *   Q6  → SourceDocViewer   (Source C — the town-council speech, audio transcript)
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
  id: 'geography-may-2025',
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
        ph: 'Two distinct positive impacts (e.g. increased tourism; access to the internet). Single words that do not signify an impact score 0.',
      },
      {
        label: 'b',
        text: '**Explain** a negative consequence of one of the impacts you have identified in part (a).',
        marks: 4,
        ph: 'One negative consequence of an impact, considered in detail with reasons (e.g. increased tourism → more pollution from fossil-fuel transport).',
      },
    ],
  },
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — food security (Tajikistan)',
    marks: 8,
    stem:
      'The government of Tajikistan is concerned that they are overly reliant on food imports from other countries. Situations such as war in other countries can make it harder for the country to import the foods needed to feed their population.\n\n' +
      'The government has employed a research consultant to investigate ways the country could increase food security and the health of their population. The consultant’s action plan is shown below.\n\n' +
      '**Research question:** How can Tajikistan reduce their reliance on other countries to increase their food security?',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'The research consultant’s action plan — hover a stage to spotlight it. The marked stimulus is this plan.',
      data: {
        title: 'Research consultant’s action plan',
        source: 'Government of Tajikistan',
        intro: 'Research question: How can Tajikistan reduce their reliance on other countries to increase their food security?',
        layout: 'flow',
        blocks: [
          {
            heading: 'Stage 1 · Research sub-questions',
            note: 'Status: Launched · Week 1: Planning stage',
            items: [
              'Sub-question 1: Is Tajikistan overly reliant on other countries for their food imports?',
              'Sub-question 2: Why are Tajikistan’s farming technologies so poor?',
              'Sub-question 3: Which foods are imported and where do they come from?',
              'Sub-question 4: What percentage of the population in Tajikistan are vegan?',
            ],
          },
          {
            heading: 'Stage 2 · Secondary data collection',
            note: 'Status: In progress · Week 2–4: Research stage A',
            items: [
              'Average caloric intake per person in Tajikistan and globally',
              'Types of crops grown in and exported from Tajikistan',
              'Types of farming practices currently used',
              'Causes of malnutrition',
            ],
          },
          {
            heading: 'Stage 3 · Primary data collection',
            note: 'Status: Not started · Week 5–6: Research stage B',
            items: [
              'Interview five farmers about their farming practices and how much money they make from their crops',
            ],
          },
          {
            heading: 'Stage 4 · Prepare presentation and recommendations for government',
            note: 'Status: Not started · Week 7–8: Findings stage',
            items: [
              'Design a presentation on PowerPoint using the secondary data on caloric intake, crops grown and exports',
              'Mention what farmers say in the interviews',
            ],
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
        ph: 'Two specific reliable sources (e.g. World Bank poverty data for Myanmar; statistics from NGOs working in Myanmar). Vague source types alone score 0.',
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
      'You have been invited to speak on a student-led podcast. The audience of the podcast will be students in MYP schools from around the world.\n\n' +
      'You are in the podcast studio to record the episode. The host has introduced you — read the transcript, then write your script.',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'The podcast introduction (transcript) — the host’s question is the prompt for your script.',
      data: {
        kind: 'Podcast transcript',
        title: 'Student-led MYP podcast',
        attribution: 'Recorded in the podcast studio · global context: scientific and technical innovation',
        paragraphs: [
          'Host: “Welcome to our student-led podcast where we are exploring the global context, scientific and technical innovation. Our guest on the show today is a fellow MYP5 Geography student. We will be speaking about the impact humans have on their environment(s). Thanks for joining us.”',
          'You: “Thanks for having me!”',
          'Host: “The big question we’d like you to answer for our listeners today: how are humans using scientific and technical innovations to harm or to protect biomes?”',
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a script in response to the host’s question.\n\n' +
          'In your script, you must:\n' +
          '• state a title for the episode\n' +
          '• **explain** how humans are using scientific and technical innovations to harm or protect natural environments\n' +
          '• reference at least **two** biomes from your MYP studies\n' +
          '• provide a closing statement.',
        marks: 18,
        ph: 'A titled podcast script explaining how innovation harms/protects biomes, referencing ≥2 biomes, with a closing statement. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 5,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — Lahaina GIS damage map',
    marks: 6,
    stem:
      'In 2023, wildfires in Hawaii destroyed much of a town called Lahaina. The death toll was more than 100 people and forced thousands to evacuate.\n\n' +
      'A non-governmental organization (NGO) called **Giving Hands** wants to help survivors of the fire. Their goal is to provide food and emergency shelter to those who need it most. They have contacted you to get your opinion on how useful **Source B** could be for achieving their goal.\n\n' +
      '**Source B** is a GIS map of Lahaina showing which buildings were damaged (red) and undamaged (green) by the wildfire.',
    artefact: {
      component: 'LocatedMap',
      caption: 'Source B — GIS map of Lahaina after the 2023 wildfires (original recreation). Red = damaged, green = undamaged buildings.',
      data: {
        title: 'Source B — Lahaina wildfire damage (GIS)',
        source: 'NASA/USGS damage assessment (recreated)',
        region: 'Lahaina, Maui, Hawaii',
        scene: 'coast',
        water: 'left',
        terrain: 'right',
        scaleKm: 1,
        north: true,
        locator: [-156.68, 20.88],
        legend: [
          { label: 'Damaged buildings', color: '#e03131' },
          { label: 'Undamaged buildings', color: '#37b24d' },
        ],
        groups: [
          { id: 'dmg-coast', label: 'Damaged buildings', color: '#e03131', count: 150, zone: 'coast' },
          { id: 'dmg-south', label: 'Damaged buildings', color: '#e03131', count: 70, zone: 'south' },
          { id: 'safe-inland', label: 'Undamaged buildings', color: '#37b24d', count: 80, zone: 'inland north' },
          { id: 'safe-mid', label: 'Undamaged buildings', color: '#37b24d', count: 40, zone: 'all' },
        ],
        markers: [
          { x: 34, y: 46, glyph: '⌕', label: 'Lahaina town centre', detail: 'Historic Front Street area — severely damaged.' },
        ],
        caption: 'The colour-coded map gives an overview of the extent of the damage; it does not show street names or the needs of individual residents.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Explain** one value of **Source B** to the NGO’s goal to help survivors of the wildfires.',
        marks: 3,
        ph: 'One value of the map for the NGO, considered with reasoning (e.g. it shows damaged vs undamaged buildings, so the NGO can prioritise where aid is needed).',
      },
      {
        label: 'b',
        text: '**Explain** one reason why **Source B** might not provide enough information for the NGO’s project.',
        marks: 3,
        ph: 'One limitation of the map for the NGO, considered with reasoning (e.g. it lacks street names, so it is hard to locate damaged properties to deliver food).',
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
      'Months after the wildfires, a member of the Lahaina town council addressed the residents about preparing for possible natural disasters in the future.\n\n' +
      'Listen to **Source C** (the speech) and answer the question below. An 80-year-old resident of Lahaina was listening to the speech.',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'Source C — the town-council speech (audio transcript). Two preparedness strategies are proposed.',
      data: {
        kind: 'Speech transcript (audio source)',
        title: 'Source C — Lahaina town-council address',
        attribution: 'A member of the Lahaina town council, addressing residents',
        paragraphs: [
          '“As a town, we need to be prepared for all natural disasters. As you know, Hawaii experiences different natural hazards including tsunamis, hurricanes, volcanic eruptions, earthquakes, and wildfires. This is why we have put in place the following strategies:',
          '1. Early warning system — Our town will use an early warning system to alert residents of any emergency situations. The system will send real-time alerts to residents’ phones and through social media so that everyone can receive up-to-date information about an approaching hazard.',
          '2. Evacuation drills — Our town will hold regular evacuation drills so that residents know the safest routes and where to go when a disaster strikes. Practising these drills will help the whole community respond quickly and calmly, keeping more people safe.”',
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'With reference to the proposed strategies, **analyse** the effectiveness of the two strategies from the 80-year-old’s perspective.',
        marks: 6,
        ph: 'Analyse both strategies (real-time alerts; evacuation drills) for an 80-year-old, in detail, and reach a conclusion on their effectiveness. Analysing only one strategy caps at 3 marks.',
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
