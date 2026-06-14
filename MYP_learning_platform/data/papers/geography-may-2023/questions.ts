import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2023 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Source: geogmmoeengtz0xxm (M23). Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (B, 6) · Q7 (D, 6) · Q8 (24)
 *
 * Theme: climate change (1.5°C vs 2°C impacts), flood-risk urban planning
 * (Rotterdam Benthemplein), tectonic hazards / GIS (Tonga), and sustainable
 * tourism (Galápagos Islands). Text/transcript/email sources are transcribed as
 * original extracts; visual sources become interactive artefacts via `artefact`:
 *   Q1/Q2 → InfoGraphicPanel  (Source A — "impacts of a 1.5°C and 2°C change" poster, reused at Q2)
 *   Q3    → ChoroplethWorld   (Netherlands / Rotterdam locator) + InfoGraphicPanel (Goal·Plan·Outcome)
 *   Q5    → SourceDocViewer   (the Government of Tonga email) + LocatedMap (Tonga GIS, Nuku'alofa infrastructure)
 *   Q6/Q7 → SourceDocViewer   (Source B — Galápagos tourism video transcript, reused at Q7)
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
  id: 'geography-may-2023',
  subject: 'Geography',
  session: 'May',
  year: 2023,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// ── Source A — climate-impacts poster (1.5°C vs 2°C). Reused at Q1 and Q2. ──
const SOURCE_A_POSTER = {
  component: 'InfoGraphicPanel',
  caption:
    'Source A — the impacts of a 1.5°C and a 2°C temperature change since the 1850s. Each panel pairs the 1.5°C figure with the higher 2°C figure. Hover a panel to spotlight it.',
  data: {
    title: 'Source A · What are the impacts of a 1.5°C and 2°C temperature change?',
    source: 'Changing global temperatures since the 1850s (recreated)',
    intro:
      'The figures shown compare a 1.5°C temperature increase with a higher 2°C temperature increase. The 2°C figure is always the larger of the two.',
    layout: 'grid',
    blocks: [
      {
        icon: '🌧️',
        heading: 'Extreme weather (flood risk)',
        items: ['1.5°C: 100% increase in flood risk', '2°C: 170% increase in flood risk'],
      },
      {
        icon: '🌡️',
        heading: 'Heat waves',
        items: [
          '1.5°C: 700 million people will be exposed to extreme heat waves at least once every 20 years',
          '2°C: 2 billion people will be exposed to extreme heat waves at least once every 20 years',
        ],
      },
      {
        icon: '🌊',
        heading: 'Sea level rise',
        items: [
          '1.5°C: 46 million people impacted by a sea level rise of 48 cm by 2100',
          '2°C: 49 million people impacted by a sea level rise of 56 cm by 2100',
        ],
      },
      {
        icon: '🐝',
        heading: 'Reduction in biodiversity',
        items: [
          '1.5°C: 6% of insects, 8% of plants and 4% of vertebrates will be affected',
          '2°C: 18% of insects, 16% of plants and 8% of vertebrates will be affected',
        ],
      },
      {
        icon: '🪸',
        heading: 'Coral bleaching',
        items: [
          "1.5°C: 70% of the world's coral reefs lost by 2100",
          "2°C: Almost all of the world's coral reefs lost by 2100",
        ],
      },
    ],
  },
}

// ── Source B — Galápagos tourism video transcript. Reused at Q6 and Q7. ──
const SOURCE_B_GALAPAGOS = {
  component: 'SourceDocViewer',
  caption:
    'Source B — the video the student found on a news website (Video / Transcript tabs). The transcript is reproduced in full below.',
  data: {
    kind: 'Video transcript (news website)',
    title: 'Source B — Tourism in the Galápagos Islands',
    attribution: 'Galapagos Daily · www.galapagosdaily.com',
    paragraphs: [
      'The Galapagos Islands are located 1000 km from the mainland of Ecuador. The volcanic islands are popular for tourism. In 2019, 271 238 tourists visited the Galapagos Islands.',
      'The Galapagos Islands are known for their diverse wildlife.',
      'With a growth in tourism, government officials need to weigh up the advantages and disadvantages of allowing tourists to visit the islands.',
      'The total number of tourists increased from around 180 000 in 2007 to 300 000 in 2018.',
      'There are numerous advantages to allowing tourists, some of which are shown here. International tourism: generates approximately US$143 million a year; creates jobs for locals; helps conserve the natural environment as tourists pay a US$100 fee when arriving in the Galapagos Islands.',
      'However, while there are advantages there are also disadvantages. Tourists bring invasive plant and animal species that harm local ecosystems. More tourists has led to more hotels being built and increased urbanization. Tourists create approximately 230 550 kg of waste each year.',
      'The government and key stakeholders must make a decision on the next steps for tourism in the Galapagos Islands.',
    ],
    glossary: {
      'invasive plant and animal species': 'Non-native species, introduced by visitors, that spread and damage the local ecosystem.',
      urbanization: 'The growth of towns and cities, here through more hotels being built for tourists.',
    },
  },
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Climate change — impacts of warming',
    marks: 2,
    stem:
      'Source A shows the impacts of changing global temperatures since the 1850s. Answer the questions that follow.',
    artefact: SOURCE_A_POSTER,
    tasks: [
      {
        label: 'a',
        text: '**Identify** the change in flood risk from a 2°C temperature increase.',
        marks: 1,
        ph: 'Read the value off Source A for a 2°C increase (extreme weather / flood risk panel).',
      },
      {
        label: 'b',
        text:
          '“Plants, animals, bacteria and fungi are all included in the measurement of biodiversity.”\n\n' +
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
    topic: 'Climate change — causes of impacts',
    marks: 4,
    stem:
      'Source A is repeated below. You will explain a cause of one of the impacts shown in Source A.\n\n' +
      'Choose one impact (extreme weather / a reduction in biodiversity / coral bleaching / sea level rise / heat waves), then explain a cause of it.',
    artefact: SOURCE_A_POSTER,
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
    topic: 'Investigating — flood-risk management (Rotterdam)',
    marks: 8,
    stem:
      'Rotterdam is a city in The Netherlands. The city experiences heavy rainfall and many parts of the city are flooded each year.\n\n' +
      'An urban planner is investigating how to manage the flood risk caused by increasing levels of rainfall. The planner is focusing on an area called Benthemplein in Rotterdam.\n\n' +
      'You will evaluate the urban planner’s investigation below. The planner’s investigation is presented across three tabs — Goal, Plan and Outcome.\n\n' +
      '**Goal:** To develop a strategy to manage the flood risk caused by increasing levels of rainfall in Benthemplein, Rotterdam. **Solution:** Create a ‘Water Plaza’ with surface water storage and recreational areas. The surface water storage will hold excess rainwater on the surface and prevent surrounding areas from flooding.\n\n' +
      '**Plan for the area:** 3 surface reservoirs can hold 8500 bathtubs or 1 730 000 litres of water from surrounding areas. The water is then released into the city’s storm water drainage system.\n\n' +
      '**Outcome:** the water plaza was built; it stores excess rainwater during heavy rainfall and is used by residents for recreation at other times.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption:
        'The urban planner’s investigation plan (the Planning Stage). Phase 1 runs for 8 weeks; Phase 2 for 4 weeks. Hover a stage to spotlight it — this plan is the marked stimulus.',
      data: {
        title: 'Benthemplein water-plaza investigation · Planning Stage',
        source: 'Urban planner, Rotterdam',
        intro:
          'Goal: develop a strategy to manage flood risk in Benthemplein. Solution: a ‘Water Plaza’ with surface water storage and recreational areas, holding 1 730 000 litres before release into the storm water drainage system.',
        layout: 'flow',
        blocks: [
          {
            heading: 'Phase 1 · 8 weeks',
            items: [
              'Interview members of the local council to evaluate the success of other water storage areas in Rotterdam.',
              'Interview residents of the area to determine how they currently use the space.',
              'Use rainfall data to identify the highest level of rainfall and amount of rainfall storage needed.',
              'Take soil samples to calculate the rate that water moves through the soil.',
              'Use predictions from the government meteorology department on the highest rainfall in this location.',
            ],
          },
          {
            heading: 'Phase 2 · 4 weeks',
            items: [
              'Review data from phase one.',
              'Sketch plans for the area.',
              'Create digital imaging to show the solution.',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the urban planner’s investigation.',
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
      'You have been asked by a local government to investigate mitigation strategies that are used to address climate change. Mitigation is the action of reducing the causes and impacts of climate change.\n\n' +
      'The investigation will allow the local government to consider the actions they need to take in reducing the impacts of climate change in the future.\n\n' +
      '**Statement of inquiry:** Effective planning can reduce the impact of changes in global temperatures on the environment.\n\n' +
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
        ph: 'One challenge, elaborated with brief detail (e.g. a language barrier and how it would affect your data collection).',
      },
      {
        label: 'd',
        text:
          'Choose one of the sources below and **explain** how the source would be beneficial to your investigation.\n\n' +
          '• Recent newspaper articles on the topic\n' +
          '• Statistics on the topic from the local government\n' +
          '• Topographic maps of the location\n' +
          '• Scripts of interviews with local stakeholders',
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
    topic: 'Communicating — GIS for tectonic hazards (Tonga)',
    marks: 18,
    stem:
      'You work for a geographic information systems (GIS) company called SpatialCode. You receive the email below from the Government of the Kingdom of Tonga. The email links to data about the eruption and its impacts (shown as the GIS map below, with Introduction, Impacts and The future tabs).\n\n' +
      'Reply to the email to explain at least one strength and at least one limitation of using geographic information systems (GIS) to manage the impacts of tectonic events in Tonga. Write a subject title for your email, then reply.',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'The email received from the Government of the Kingdom of Tonga — the request your reply must answer.',
      data: {
        kind: 'Email',
        title: 'From: Government of the Kingdom of Tonga · To: SpatialCode',
        attribution: 'Ministry of Disaster Response, Government of the Kingdom of Tonga · Today at 09:01',
        paragraphs: [
          'Dear SpatialCode,',
          'We have experienced the devastating effects of a volcanic eruption and resulting tsunami in Tonga.',
          'The volcano erupted here from December 2021 to January 2022. The eruption caused a 1.2 metre tsunami wave to hit our capital city, Nuku’alofa.',
          'In the aftermath of the volcanic eruption and tsunami, it was very challenging to deliver aid to those who needed it most, and this is something that we need to address in the future.',
          'Here is a link to relevant information about the eruption and its impacts. (See the GIS map below — Introduction, Impacts and The future tabs.)',
          'Please reply to this email to explain at least one strength and at least one limitation of using geographic information systems (GIS) to manage the impacts of tectonic events in Tonga.',
          'Yours sincerely,',
          'Ministry of Disaster Response, Government of the Kingdom of Tonga',
        ],
        glossary: {
          'geographic information systems (GIS)': 'A system that captures, stores and displays geographic data as map layers (e.g. hazard zones, infrastructure).',
          tectonic: 'Relating to the structure and movement of the Earth’s crust — here, the volcanic eruption and tsunami.',
        },
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a subject title for your email, then reply to the email to **explain** at least one strength and at least one limitation of using GIS to manage the impacts of tectonic events in Tonga.\n\n' +
          'Use the data in the GIS map (below) to support your reply.',
        marks: 18,
        ph: 'A formal email reply explaining ≥1 strength AND ≥1 limitation of GIS for Tonga, with a subject title, salutation and close. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4. Only strengths OR only limitations caps Crit A at 3.',
        artefact: {
          component: 'LocatedMap',
          caption:
            'Ministry of Disaster Response — GIS data on the Dec 2021–Jan 2022 eruption (original recreation). The data spans three tabs: Introduction (170 islands; people live on 36; location of the volcano), Impacts, and The future (a map of Nuku’alofa critical infrastructure).',
          data: {
            title: 'GIS — Nuku’alofa critical infrastructure (The future tab)',
            source: 'Ministry of Disaster Response, Government of Tonga (recreated)',
            region: 'Nuku’alofa, Tongatapu, Kingdom of Tonga',
            scene: 'coast',
            water: 'bottom',
            terrain: 'none',
            scaleKm: 5,
            north: true,
            locator: [-175.2, -21.13],
            legend: [
              { label: 'Hospitals', color: '#c2255c' },
              { label: 'Police station', color: '#1971c2' },
              { label: 'Ports', color: '#0f2a43' },
              { label: 'Power plant', color: '#2f9e44' },
              { label: 'Telecommunication', color: '#0b7285' },
              { label: 'Water storage', color: '#22b8cf' },
            ],
            groups: [
              { id: 'telecom', label: 'Telecommunication', color: '#0b7285', count: 11, zone: 'all' },
              { id: 'water', label: 'Water storage', color: '#22b8cf', count: 1, zone: 'inland north' },
              { id: 'hosp', label: 'Hospitals', color: '#c2255c', count: 2, zone: 'south' },
            ],
            markers: [
              { x: 60, y: 22, label: 'Nuku’alofa (capital city)', detail: 'Capital city, hit by the 1.2 m tsunami wave; tsunami damaged 600 structures.' },
              { x: 36, y: 50, label: 'Kolofo’ou', detail: 'District of Nuku’alofa.' },
              { x: 18, y: 70, label: 'Haveluloto', detail: 'Settlement to the west; hospitals located nearby.' },
              { x: 62, y: 58, label: 'Malufanga', detail: 'Settlement to the east; power plant located nearby.' },
            ],
            caption:
              'Impacts (eruption Dec 2021–Jan 2022): the tsunami damaged 600 structures (transport, power, water and communications affected); volcanic ash harmed agriculture and fishing; an estimated 85 000 people were affected; US$43.7 million worth of damage was caused.',
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
    topic: 'Source evaluation — Galápagos tourism video',
    marks: 6,
    stem:
      'An MYP student is creating a presentation on the impacts of tourism. Whilst researching they have found the video shown in Source B below on a news website. Watch the video and answer the questions that follow.',
    artefact: SOURCE_B_GALAPAGOS,
    tasks: [
      {
        label: 'a',
        text: '**Identify** the origin of the video.',
        marks: 1,
        ph: 'State who made/published the video (read it off Source B).',
      },
      {
        label: 'b',
        text: '**State** the purpose of the video.',
        marks: 1,
        ph: 'Why was the video made? (e.g. to educate people about tourism on the Galápagos Islands).',
      },
      {
        label: 'c',
        text: '**Outline** one value of the video for the MYP student’s presentation.',
        marks: 2,
        ph: 'One value, elaborated (e.g. it provides data about tourism, making it reliable).',
      },
      {
        label: 'd',
        text: '**Outline** one limitation of the video for the MYP student’s presentation.',
        marks: 2,
        ph: 'One limitation, elaborated (e.g. it only refers to the Galápagos Islands, limiting examples).',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Justify — mitigating tourism impacts (Galápagos)',
    marks: 6,
    stem:
      'Source B is repeated for your information (the Galápagos tourism video transcript above). The local government are considering implementing one of the following actions to mitigate the impacts of tourism in the Galápagos Islands:\n\n' +
      '1. Increase the US$100 entry fee that all visitors pay upon arrival.\n' +
      '2. Each tourist group must be accompanied by an approved local tourist guide.',
    artefact: SOURCE_B_GALAPAGOS,
    tasks: [
      {
        label: '',
        text: '**Justify** which one of the actions you think the local government should choose.',
        marks: 6,
        ph: 'Choose one action and justify it with detailed, in-depth arguments — weigh it against the other option (economy and environment).',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — sustainable tourism',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          'An increase in tourist numbers is the greatest threat to sustainable tourism. **To what extent** do you agree with this statement?\n\n' +
          'In your essay, you should:\n' +
          '• use examples from your MYP studies\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) on whether tourist numbers are the greatest threat to sustainable tourism, with ≥2 balanced perspectives and examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
