import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2023 · Set 1 isomorphic variant (geography-may-2023-v1)
 * Subject group: Individuals & Societies · Course: Geography
 * Isomorphic to geography-may-2023: identical paperMeta (bar id), question/task
 * structure, criteria, command terms and mark allocations. Only the SURFACE changes —
 * a genuinely new set of real-world geography scenarios, presented through DIFFERENT
 * artefact components than the source (per the I&S variant carve-out).
 *
 * Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (B, 6) · Q7 (D, 6) · Q8 (24)
 *
 * NEW scenarios (vs source climate/flood/Tonga/Galápagos):
 *   air-quality health impacts (PM2.5 thresholds), drought-resilience water investigation
 *   (Singapore Marina Barrage), urban heat-island adaptation (investigation design),
 *   remote-sensing / satellite imagery for wildfire management (Greece, GIS company), and
 *   textile / fast-fashion waste (source evaluation + sustainable-consumption essay).
 *
 * Artefact components (each DIFFERENT from the source's for that question):
 *   Q1/Q2 → DataTableInteractive  (Source A — air-quality health-impact table, reused at Q2)
 *   Q3    → DataTableInteractive  (water engineer's investigation plan table)
 *   Q5    → SlideDeck (the Hellenic Forest Service brief) + InteractiveChart (burned-area GIS data)
 *   Q6/Q7 → InfoGraphicPanel      (Source B — fast-fashion infographic, reused at Q7)
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
  id: 'geography-may-2023-v1',
  subject: 'Geography',
  session: 'May',
  year: 2023,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// ── Source A — air-quality health-impact table (PM2.5). Reused at Q1 and Q2. ──
// Value-read display: for each impact, a "Good air" baseline figure is paired with a
// higher "Hazardous air" figure (the Hazardous figure is always the larger of the two).
const SOURCE_A_AIRQUALITY = {
  component: 'DataTableInteractive',
  caption:
    'Source A — the health and environmental impacts of clean air versus polluted air, measured by fine-particle (PM2.5) concentration. Each row pairs a "Good air" figure (PM2.5 ≤ 5 µg/m³) with the higher "Hazardous air" figure (PM2.5 ≥ 75 µg/m³). Click a row to pin the value you are reading.',
  data: {
    title: 'Source A · The impacts of good air quality compared with hazardous air quality',
    source: 'Global air-quality monitoring, fine particulate matter PM2.5 (recreated)',
    caption:
      'PM2.5 = airborne particles smaller than 2.5 micrometres that can enter the lungs and bloodstream. The Hazardous-air figure is always the larger of the two in each row.',
    headers: ['Impact', 'Good air (PM2.5 ≤ 5 µg/m³)', 'Hazardous air (PM2.5 ≥ 75 µg/m³)'],
    rows: [
      ['Premature deaths from air pollution worldwide', '0.5 million per year', '4.2 million per year'],
      ['Increase in hospital admissions for asthma', '15% increase', '180% increase'],
      ['Days each year visibility is reduced by smog', '12 days', '95 days'],
      ['Reduction in crop yields from ground-level pollution', '3% loss', '26% loss'],
      ['Population exposed to unsafe air at least once a year', '900 million people', '4 billion people'],
    ],
  },
}

// ── Source B — fast-fashion / textile-waste infographic. Reused at Q6 and Q7. ──
// An evaluable visual source the student found online (origin, purpose, value, limitation).
const SOURCE_B_FASTFASHION = {
  component: 'InfoGraphicPanel',
  caption:
    'Source B — the infographic the student found on a sustainability campaign website (hover a panel to spotlight it). Treat it as a source to evaluate: who made it, why, and what it can and cannot tell you.',
  data: {
    title: 'Source B — The true cost of fast fashion',
    source: 'ThreadFacts · www.threadfacts.org',
    intro:
      'Fast fashion is clothing produced rapidly and cheaply to follow the latest trends. This infographic was published to raise awareness of its environmental impact. The Aral Sea region of Central Asia is one example referenced.',
    layout: 'grid',
    blocks: [
      {
        icon: '🏭',
        heading: 'Scale of production',
        items: [
          'Around 100 billion garments are produced globally each year.',
          'Clothing production has roughly doubled since the year 2000.',
        ],
      },
      {
        icon: '🗑️',
        heading: 'Textile waste',
        items: [
          'A rubbish-truck load of textiles is landfilled or burned every second.',
          'Less than 1% of clothing is recycled into new clothing.',
        ],
      },
      {
        icon: '💧',
        heading: 'Water use',
        items: [
          'It takes about 2700 litres of water to make one cotton t-shirt.',
          'Cotton irrigation helped drain the Aral Sea, which lost most of its volume.',
        ],
      },
      {
        icon: '🌍',
        heading: 'Carbon emissions',
        items: [
          'The fashion industry produces about 8% of global carbon emissions.',
          'Most garments are shipped thousands of kilometres before sale.',
        ],
      },
      {
        icon: '👕',
        heading: 'Use and disposal',
        items: [
          'A garment is worn on average just 7 to 10 times before disposal.',
          'Synthetic fabrics shed microplastics into rivers and oceans when washed.',
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
    topic: 'Air quality — impacts of pollution',
    marks: 2,
    stem:
      'Source A shows the health and environmental impacts of good air quality compared with hazardous air quality, measured by PM2.5 (fine particulate matter). Answer the questions that follow.',
    artefact: SOURCE_A_AIRQUALITY,
    tasks: [
      {
        label: 'a',
        text: '**Identify** the number of premature deaths from air pollution worldwide each year under hazardous air quality.',
        marks: 1,
        ph: 'Read the value off Source A for hazardous air (premature-deaths row).',
      },
      {
        label: 'b',
        text:
          '“PM2.5 refers to fine airborne particles that are small enough to enter the lungs and bloodstream.”\n\n' +
          '**Select** whether the statement is true or false.',
        marks: 1,
        ph: 'Choose true or false.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Air quality — causes of impacts',
    marks: 4,
    stem:
      'Source A is repeated below. You will explain a cause of one of the impacts shown in Source A.\n\n' +
      'Choose one impact (premature deaths / hospital admissions for asthma / reduced visibility from smog / reduced crop yields / population exposed to unsafe air), then explain a cause of it.',
    artefact: SOURCE_A_AIRQUALITY,
    tasks: [
      {
        label: '',
        text: '**Explain** one cause of your chosen impact from Source A.',
        marks: 4,
        ph: 'Pick one impact, then build from stating a cause (1) to explaining it in detail with reasons (4). An example may support but is not required.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — drought-resilience water supply (Singapore)',
    marks: 8,
    stem:
      'Singapore is a small island city-state with no natural lakes or large rivers and limited land to store rainwater. The country has historically imported much of its drinking water and is exposed to drought.\n\n' +
      'A water engineer is investigating how to secure Singapore’s freshwater supply and reduce its dependence on imported water. The engineer is focusing on the Marina Barrage, a dam across the mouth of the Marina Channel.\n\n' +
      'You will evaluate the water engineer’s investigation below. The investigation is presented as the planning table shown beneath this brief.\n\n' +
      '**Goal:** To develop a strategy that secures a reliable, year-round freshwater supply for Singapore and reduces reliance on imported water. **Solution:** Build the Marina Barrage to dam the channel, creating a large freshwater reservoir in the heart of the city while also acting as a tidal barrier against flooding.\n\n' +
      '**Plan for the reservoir:** the dammed reservoir holds around 10 000 000 m³ of fresh water and drains a catchment covering roughly one sixth of Singapore’s land area. Excess water is pumped out to sea through nine crest gates during heavy rain.\n\n' +
      '**Outcome:** the barrage was built; it stores rainwater as a drinking-water reservoir, keeps the channel at a constant level for recreation, and reduces flooding in the low-lying city centre.',
    artefact: {
      component: 'DataTableInteractive',
      caption:
        'The water engineer’s investigation plan (the Planning Stage). Phase 1 runs for 8 weeks; Phase 2 for 4 weeks. Click a row to pin it — this plan is the marked stimulus.',
      data: {
        title: 'Marina Barrage water-supply investigation · Planning Stage',
        source: 'Water engineer, Singapore',
        caption:
          'Goal: secure a reliable year-round freshwater supply for Singapore and reduce reliance on imported water, using a dammed reservoir holding about 10 000 000 m³.',
        headers: ['Phase', 'Step', 'Method'],
        rows: [
          ['Phase 1 · 8 weeks', '1', 'Interview national water-agency officials to evaluate the success of existing reservoirs in Singapore.'],
          ['Phase 1 · 8 weeks', '2', 'Survey residents to determine how they currently use the channel and waterfront.'],
          ['Phase 1 · 8 weeks', '3', 'Use rainfall and river-flow data to calculate the highest inflow and the storage volume needed.'],
          ['Phase 1 · 8 weeks', '4', 'Take water-quality samples to measure salinity and the rate the reservoir would freshen.'],
          ['Phase 1 · 8 weeks', '5', 'Use national meteorological-service predictions of the longest expected drought in this location.'],
          ['Phase 2 · 4 weeks', '6', 'Review the data collected in Phase 1.'],
          ['Phase 2 · 4 weeks', '7', 'Sketch engineering plans for the barrage and reservoir.'],
          ['Phase 2 · 4 weeks', '8', 'Create digital modelling to show the solution.'],
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the water engineer’s investigation.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the planning, methodology and outcome, then give an overall appraisal. Marked: Strengths /3, Limitations /3, Appraisal /2.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — design your own investigation',
    marks: 12,
    stem:
      'You have been asked by a city council to investigate adaptation strategies that are used to address the urban heat island effect. The urban heat island effect is the way cities become significantly warmer than the surrounding countryside, because concrete, tarmac and buildings absorb and re-radiate heat.\n\n' +
      'The investigation will allow the city council to consider the actions they need to take to keep residents safe during increasingly frequent and severe heatwaves.\n\n' +
      '**Statement of inquiry:** Effective planning can reduce the impact of rising urban temperatures on people and places.\n\n' +
      'You must not repeat information from Question 3 in your responses.',
    tasks: [
      {
        label: 'a',
        text: 'Use the statement of inquiry to **formulate** a clear and focused research question for your investigation.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (e.g. names a place and an impact) and connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** why your research question is worthy of investigation.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is worthy of investigating — build from a simple reason to a fully justified one.',
      },
      {
        label: 'c',
        text: '**Outline** one challenge that you might experience when completing your investigation.',
        marks: 2,
        ph: 'One challenge, elaborated with brief detail (e.g. limited access to equipment and how it would affect your data collection).',
      },
      {
        label: 'd',
        text:
          'Choose one of the sources below and **explain** how the source would be beneficial to your investigation.\n\n' +
          '• Recent newspaper articles on the topic\n' +
          '• Temperature and land-use statistics from the city council\n' +
          '• Satellite thermal (land-surface temperature) maps of the city\n' +
          '• Scripts of interviews with local residents',
        marks: 4,
        ph: 'Pick one source, then explain in detail with reasons how it helps answer your RQ.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — remote sensing for wildfire hazards (Greece)',
    marks: 18,
    stem:
      'You work for a geographic information systems (GIS) and remote-sensing company called SpatialCode. You receive a request from the Hellenic Forest Service in Greece, shown in the briefing slides below. The brief links to satellite data about a recent wildfire season and its impacts (shown as the GIS burned-area chart beneath the task).\n\n' +
      'Reply to the request to explain at least one strength and at least one limitation of using GIS and satellite remote sensing to manage the impacts of wildfires in Greece. Write a subject title for your email, then reply.',
    artefact: {
      component: 'SlideDeck',
      caption: 'The briefing slides received from the Hellenic Forest Service — the request your reply must answer.',
      data: {
        title: 'Brief from the Hellenic Forest Service · To: SpatialCode',
        source: 'Hellenic Forest Service, Ministry of Environment, Greece',
        slides: [
          {
            title: 'Who we are',
            body: 'We are the Hellenic Forest Service. We manage forests across Greece and coordinate the response to wildfires, which are becoming more frequent and severe as summers grow hotter and drier.',
          },
          {
            title: 'What happened',
            body: 'During the summer wildfire season, intense fires burned across mainland Greece and the islands. Tens of thousands of residents and tourists had to be evacuated, and large areas of forest and farmland were destroyed.',
          },
          {
            title: 'The problem',
            body: 'In the aftermath it was very difficult to know quickly where the fires were spreading and which villages and infrastructure were most at risk. We need a faster, more accurate way to map the hazard.',
          },
          {
            title: 'Your task',
            bullets: [
              'See the GIS burned-area chart beneath this brief.',
              'Reply by email to explain at least one strength of using GIS and satellite remote sensing to manage wildfires in Greece.',
              'Also explain at least one limitation of using GIS and satellite remote sensing.',
              'Write an appropriate subject title and reply formally.',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a subject title for your email, then reply to the request to **explain** at least one strength and at least one limitation of using GIS and satellite remote sensing to manage the impacts of wildfires in Greece.\n\n' +
          'Use the data in the GIS burned-area chart (below) to support your reply.',
        marks: 18,
        ph: 'A formal email reply explaining ≥1 strength AND ≥1 limitation of GIS/remote sensing for Greece, with a subject title, salutation and close. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Only strengths OR only limitations caps Crit A at 3.',
        artefact: {
          component: 'InteractiveChart',
          caption:
            'Hellenic Forest Service — GIS burned-area data for the wildfire season, derived from satellite imagery (original recreation). Burned area (in km²) per region, split into forest and farmland. Hover a bar for its exact value; click the legend to toggle a layer.',
          data: {
            kind: 'bar',
            title: 'GIS — area burned by region (satellite-derived)',
            source: 'Hellenic Forest Service / satellite remote sensing (recreated)',
            x: {
              label: 'Region',
              categories: ['Attica', 'Evia', 'Rhodes', 'Peloponnese', 'Thessaly'],
            },
            y: { label: 'Area burned', min: 0, max: 500, ticks: [0, 100, 200, 300, 400, 500], unit: 'km²' },
            series: [
              { name: 'Forest', color: '#2f9e44', points: [120, 310, 180, 90, 60] },
              { name: 'Farmland', color: '#e8590c', points: [40, 150, 70, 110, 130] },
            ],
          },
        },
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Source evaluation — fast-fashion infographic',
    marks: 6,
    stem:
      'An MYP student is creating a presentation on the environmental impacts of consumer choices. Whilst researching they have found the infographic shown in Source B below on a sustainability campaign website. Study the infographic and answer the questions that follow.',
    artefact: SOURCE_B_FASTFASHION,
    tasks: [
      {
        label: 'a',
        text: '**Identify** the origin of the infographic.',
        marks: 1,
        ph: 'State who made/published the infographic (read it off Source B).',
      },
      {
        label: 'b',
        text: '**State** the purpose of the infographic.',
        marks: 1,
        ph: 'Why was the infographic made? (e.g. to raise awareness of the environmental impact of fast fashion).',
      },
      {
        label: 'c',
        text: '**Outline** one value of the infographic for the MYP student’s presentation.',
        marks: 2,
        ph: 'One value, elaborated (e.g. it provides data about textile waste, making it useful as evidence).',
      },
      {
        label: 'd',
        text: '**Outline** one limitation of the infographic for the MYP student’s presentation.',
        marks: 2,
        ph: 'One limitation, elaborated (e.g. a campaign website may select only data that supports its message).',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Justify — mitigating fast-fashion impacts',
    marks: 6,
    stem:
      'Source B is repeated for your information (the fast-fashion infographic above). A national government is considering implementing one of the following actions to mitigate the environmental impacts of fast fashion:\n\n' +
      '1. Place a small environmental tax on every new garment sold, to fund textile recycling.\n' +
      '2. Require clothing retailers to run free in-store repair and take-back schemes for worn garments.',
    artefact: SOURCE_B_FASTFASHION,
    tasks: [
      {
        label: '',
        text: '**Justify** which one of the actions you think the government should choose.',
        marks: 6,
        ph: 'Choose one action and justify it with detailed, in-depth arguments — weigh it against the other option (economy and environment).',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — sustainable consumption',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          'Changing what consumers buy is the most effective way to make fashion sustainable. **To what extent** do you agree with this statement?\n\n' +
          'In your essay, you should:\n' +
          '• use examples from your MYP studies\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) on whether changing consumer choices is the most effective route to sustainable fashion, with ≥2 balanced perspectives and examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
