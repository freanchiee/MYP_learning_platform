import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2022 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Source: geogmmoeengtz0xxm (M22). Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (6) · Q7 (4) · Q8 (2) · Q9 (24)
 *
 * Theme: 2004 Indian Ocean tsunami & displacement (Banda Aceh, Indonesia) ·
 * water scarcity & desalinization (Jordan) · sustainable resource extraction vs
 * biodiversity loss. Text/audio/video sources are transcribed as original extracts;
 * visual sources become interactive artefacts wired via the `artefact` field:
 *   Q1  → ImageCompareSlider (Source A — Banda Aceh before/after the tsunami)
 *   Q3  → LocatedMap         (the NGO's Internally Displaced People map of Aceh Province)
 *         + SourceDocViewer  (the NGO investigation web page / action plan & methodology)
 *   Q5  → (decorative travel-blog desk photo — described in stem, no marked stimulus)
 *   Q6  → LocatedMap         (Source B — Jordan groundwater-basin water-deficit map)
 *   Q7  → InfoGraphicPanel   (Source C — desalinization process diagram)
 *         + SourceDocViewer  (the interview with a Jordanian resident)
 *   Q8  → reuses Source C    (the desalinization diagram from Q7)
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
  id: 'geography-may-2022',
  subject: 'Geography',
  session: 'May',
  year: 2022,
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
    topic: 'Natural disasters — tsunami impacts',
    marks: 2,
    stem:
      'On the 26th of December 2004, an earthquake 30 km below the Indian Ocean ruptured a fault line, sending a series of giant waves — a tsunami — towards the coast.\n\n' +
      '**Source A (video transcript):** “The Indo-Australian and Eurasian plates under the Indian Ocean have been pushing against each other for centuries. On the 26th of December 2004, 30 kilometres below the ocean’s surface, the forces reached breaking point and the fault started to rupture. This caused the water to move out as a series of giant ripples. This is known as a tsunami. The tsunami wave that hit Banda Aceh in Indonesia was 30 metres high. It hit the coast with the force of sixty hurricanes, destroying 100 000 houses and one third of critical infrastructure along the coast in Banda Aceh. This forced many people to leave their home in search of safety. The impact was not only felt in Indonesia. It was also felt in coastal cities of multiple countries worldwide.”\n\n' +
      'Use the slider in Source A to view the impact of the 2004 tsunami in Banda Aceh, Indonesia.',
    artefact: {
      component: 'ImageCompareSlider',
      caption: 'Source A — drag the slider to compare Banda Aceh, Indonesia before and after the 2004 tsunami (original recreation, not the IB satellite imagery).',
      data: {
        title: 'Source A — Banda Aceh, before and after the 2004 tsunami',
        before: {
          label: 'Before',
          scene: 'urban-dense',
          caption: 'Densely built coastal town: housing, roads, farmland and vegetation along the shoreline.',
        },
        after: {
          label: 'After',
          scene: 'tsunami-scoured',
          caption: 'After the tsunami: buildings and vegetation swept away, the coastline scoured back, brown floodwater across the land.',
        },
      },
    },
    tasks: [
      {
        label: '',
        text: '**State** two impacts of the 2004 tsunami in Indonesia.',
        marks: 2,
        ph: 'Two distinct impacts (e.g. loss of life; destruction of houses; flooding; forced migration). Responses need not be shown in the source.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Disparity & equity — disaster impacts',
    marks: 4,
    stem: 'Communities are not affected equally by natural disasters. Income can shape how vulnerable people are when a hazard strikes.',
    tasks: [
      {
        label: '',
        text: '**Explain** how disparities in income can worsen the impacts of **one** natural disaster.',
        marks: 4,
        ph: 'One way income disparity worsens a disaster’s impact, considered in detail with reasons (e.g. low-income families lack insurance → cannot repair a collapsed house → stay in an unsafe home).',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — displacement after the tsunami',
    marks: 8,
    stem:
      'Following the tsunami in 2004, a non-governmental organization (NGO) called **Tsunami Response Indonesia** carried out an investigation into the impacts of the tsunami. They produced a map using the action plan below. You will evaluate their investigation.\n\n' +
      '**Statement of inquiry:** Place and space determine the impact of natural disasters on communities.\n\n' +
      '**Research question:** How did the 2004 tsunami impact the movement of people within Aceh Province, Indonesia?\n\n' +
      'The map (shown alongside) reports the total number of internally displaced people per district of Aceh Province on 12 January 2005.',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'The NGO’s investigation web page — its goal, statement of inquiry, research question and methodology (the marked action plan).',
      data: {
        kind: 'Investigation web page',
        title: 'Tsunami Response Indonesia — Indonesia 2004',
        attribution: 'www.tri.org/projects · the NGO’s methodology for the investigation',
        paragraphs: [
          'Our team set out to analyse the movement of people following the tsunami. Below is the methodology we used for this investigation.',
          'Statement of inquiry: Place and space determine the impact of natural disasters on communities.',
          'Research question: How did the 2004 tsunami impact the movement of people within Aceh Province, Indonesia?',
          'The goal is to use mobile data to track the movement of people following the December 26th, 2004 tsunami in Indonesia and to create a map to show the results.',
          'Methodology:',
          '• The location of a person can be determined by where they are when they make a call.',
          '• Use mobile phones to work out where people are located when they use their phones.',
          '• Track the location of 1.9 million mobile phones — this is approximately half of the population of the Aceh Province.',
          '• Timeframe for data collection: December 27th, 2004 – January 12th, 2005.',
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the investigation carried out by the NGO.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the investigation, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2. You need not discuss every part of the plan or map.',
        artefact: {
          component: 'LocatedMap',
          caption: 'The NGO’s map — Internally Displaced People per district of Aceh Province, 12 January 2005. Darker = more people displaced. Four districts have no data.',
          data: {
            title: 'Internally Displaced People — Aceh Province, 12 January 2005',
            source: 'Tsunami Response Indonesia (recreated)',
            region: 'Aceh Province, Sumatra, Indonesia',
            regionCountries: ['Indonesia'],
            scaleKm: 100,
            north: true,
            locator: [96.7, 4.5],
            legend: [
              { label: '2 400 – 5 500 displaced', color: '#fde3d2' },
              { label: '5 501 – 25 000 displaced', color: '#f4a261' },
              { label: '25 001 – 50 000 displaced', color: '#e76f2c' },
              { label: '50 001 – 116 984 displaced', color: '#6b1f0e' },
              { label: 'Data not available', color: '#e9e9e9' },
            ],
            markers: [
              { lon: 95.32, lat: 5.55, label: 'Banda Aceh / Aceh Besar', detail: 'North-west tip of Sumatra — worst hit: 50 001 – 116 984 internally displaced people.', color: '#6b1f0e' },
              { lon: 96.95, lat: 5.0, label: 'Aceh Utara', detail: '50 001 – 116 984 internally displaced people.', color: '#6b1f0e' },
              { lon: 95.6, lat: 4.85, label: 'Aceh Jaya / Aceh Barat', detail: '25 001 – 50 000 internally displaced people along the west coast.', color: '#e76f2c' },
              { lon: 97.4, lat: 4.0, label: 'Gayo Lues / Aceh Tenggara', detail: 'Inland districts — data not available.', color: '#9aa0a6' },
            ],
            caption: 'A choropleth of displacement by district. It gives a clear overview of where people moved, but four inland districts have no data, so it is only a partial picture.',
          },
        },
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — designing an investigation',
    marks: 12,
    stem:
      'A Non-Governmental Organisation (NGO) has asked you to investigate the strategies used to manage a natural disaster. The investigation will allow the NGO to evaluate the effectiveness of strategies in different locations.\n\n' +
      '**Statement of inquiry:** Time, place and space can influence the effectiveness of a community’s response to natural disasters.',
    tasks: [
      {
        label: 'a',
        text: 'With reference to the statement of inquiry, **formulate** a clear and focused research question for your investigation.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (names a management strategy and a specific natural disaster/location) and connected to the SoI. A reworded SoI scores 0.',
      },
      {
        label: 'b',
        text: '**Justify** why your research question will help the NGO to achieve their goal.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is worthy of investigating — build from a simple connection to a fully justified one (a factor in detail, with reasoning).',
      },
      {
        label: 'c',
        text: '**List** two methods of collecting primary data that you could use to answer the research question you formulated in part (a).',
        marks: 2,
        ph: 'Two valid primary-data methods (e.g. interviews; questionnaires; surveys). One mark per valid method.',
      },
      {
        label: 'd',
        text: '**Explain** why one of the primary data sources in part (c) would help your investigation.',
        marks: 4,
        ph: 'One benefit of a chosen method, considered in detail with reasons for how it helps you answer the RQ (e.g. a survey counts how many people know what to do, so you can evaluate the strategy).',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — tourism & culture',
    marks: 18,
    stem:
      'You are a popular travel **blogger** who has many online followers.\n\n' +
      'You decide to write a blog post to explain the positive and negative impacts of tourism on the culture of **one** community.\n\n' +
      '(A photograph of a travel writer’s desk — laptop, camera, glasses, passport and an open notebook — accompanies the task in the exam. It is decorative and is not a marked source.)',
    tasks: [
      {
        label: '',
        text:
          'Write a blog post to explain the positive and negative impacts of tourism on the culture of **one** community.\n\n' +
          'In your blog post, you must:\n' +
          '• include a relevant title and sub-headings\n' +
          '• **explain** at least one positive and at least one negative impact of tourism on the culture of one community\n' +
          '• conclude with advice for future travellers.',
        marks: 18,
        ph: 'A titled, sub-headed blog post explaining ≥1 positive AND ≥1 negative cultural impact of tourism on one community, ending with advice for travellers. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — Jordan groundwater basins',
    marks: 6,
    stem:
      'Jordan is a country in the Middle East. It does not have enough fresh water to meet the needs of its population. Jordan extracts 46 % of its water from groundwater sources.\n\n' +
      '**Source B** shows the location of groundwater basins and the extraction rates of water. The water deficit is a negative if the amount of extracted water exceeds the sustainable amount. (Created by allthatiswater.org.)',
    artefact: {
      component: 'LocatedMap',
      caption: 'Source B — Jordan’s groundwater basins and their 2019 water deficit (Million Cubic Metres). A negative value means extraction exceeds the sustainable amount; positive (surplus) basins are sustainable. Original recreation.',
      data: {
        title: 'Source B — Water deficit by groundwater basin, Jordan (2019)',
        source: 'allthatiswater.org (recreated)',
        region: 'Jordan, Middle East',
        regionCountries: ['Jordan'],
        scaleKm: 100,
        north: true,
        locator: [36.5, 31.2],
        legend: [
          { label: 'Large deficit (≈ −80 MCM)', color: '#b2182b' },
          { label: 'Moderate deficit (≈ −30 MCM)', color: '#e8896a' },
          { label: 'Small deficit (≈ −6 MCM)', color: '#f5d9c8' },
          { label: 'Surplus / sustainable (positive)', color: '#e9e9e9' },
        ],
        markers: [
          { lon: 36.0, lat: 32.0, label: 'Amman Zarqa Basin: −78.5 MCM', detail: 'Largest deficit, under the capital city Amman. Extraction far exceeds the sustainable amount.', color: '#b2182b' },
          { lon: 35.5, lat: 31.3, label: 'Dead Sea Basin: −33 MCM', detail: 'Moderate deficit.', color: '#e8896a' },
          { lon: 35.6, lat: 32.3, label: 'Rifthe Side Wadis Basin: −31.7 MCM', detail: 'Moderate deficit.', color: '#e8896a' },
          { lon: 36.8, lat: 31.6, label: 'Azraq Basin: −28.5 MCM', detail: 'Moderate deficit in the central east.', color: '#e8896a' },
          { lon: 36.4, lat: 29.6, label: 'Disi Basin: −18 MCM', detail: 'Deficit in the south.', color: '#e8896a' },
          { lon: 35.5, lat: 32.6, label: 'Yarmouk Basin: −14 MCM', detail: 'Deficit in the north-west.', color: '#f5d9c8' },
          { lon: 36.0, lat: 29.9, label: 'Jafer Basin: −8.5 MCM', detail: 'Small deficit in the south.', color: '#f5d9c8' },
          { lon: 35.6, lat: 32.1, label: 'Jordan Valley Basin: −6.0 MCM', detail: 'Small deficit.', color: '#f5d9c8' },
          { lon: 35.85, lat: 32.55, label: 'Wadi Arab North Basin: −2.8 MCM', detail: 'Small deficit in the north-west.', color: '#f5d9c8' },
          { lon: 35.75, lat: 32.45, label: 'Wadi Arab South Basin: −3 MCM', detail: 'Small deficit in the north-west.', color: '#f5d9c8' },
          { lon: 38.5, lat: 32.2, label: 'Hammad Basin: +6.1 MCM', detail: 'Surplus — water extraction is sustainable here.', color: '#9aa0a6' },
          { lon: 37.4, lat: 31.3, label: 'Sarhan Basin: +3.3 MCM', detail: 'Surplus — water extraction is sustainable here.', color: '#9aa0a6' },
        ],
        caption: 'The map gives the precise location of all the basins in Jordan with the 2019 water deficit for each, and shows which basins are in deficit versus surplus. The two basins with a positive (surplus) balance — Hammad and Sarhan — are where extraction is sustainable.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct answer to complete the sentence below.\n\nJordan’s water extraction is sustainable in the ____ basins.\n\nOptions: (i) Dead Sea and Jordan Valley · (ii) Hammad and Sarhan · (iii) Jafer and Azraq.',
        marks: 1,
        ph: 'Pick the two basins with a positive (surplus) water balance on Source B.',
      },
      {
        label: 'b',
        text: '**State** the origin of **Source B**.',
        marks: 1,
        ph: 'Name the organisation/website that created Source B (read it from the map).',
      },
      {
        label: 'c',
        text: '**Explain** one value of **Source B** to an MYP student investigating groundwater extraction in Jordan.',
        marks: 4,
        ph: 'One value of the map, considered with reasoning (e.g. it locates every basin with its 2019 deficit, so the student can identify where careful management of extraction is needed).',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Justifying an alternative perspective — desalinization',
    marks: 4,
    stem:
      'The government of Jordan is investigating ways to sustainably provide fresh water in Jordan. They plan to increase the amount of fresh water through **desalinization**.\n\n' +
      '**Source C** shows one way that desalinization works: the process uses a filter that only allows water particles through, separating the water from salt and contaminants.\n\n' +
      'One resident of Jordan was interviewed about the government’s plan to invest in desalinization. Their perspective is given in the interview alongside.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source C — how desalinization works. Pressure forces salt water (with contaminants) through a filter; only fresh water passes to the other side.',
      data: {
        title: 'Source C — The desalinization process',
        source: 'Government of Jordan',
        layout: 'flow',
        blocks: [
          {
            heading: '1 · Salt water in',
            icon: '🌊',
            items: [
              'A tank of salt water containing contaminants (bacteria, microplastics and other pollutants) sits on the left.',
            ],
            note: 'Input: untreated salt water',
          },
          {
            heading: '2 · Pressure applied',
            icon: '⬇️',
            items: [
              'Pressure is applied from above, pushing the salt water towards the filter.',
            ],
            note: 'Energy is needed to create this pressure',
          },
          {
            heading: '3 · Filter',
            icon: '⛛',
            items: [
              'A filter only allows water particles through, separating the water from salt and contaminants.',
            ],
            note: 'Water flow passes through the membrane',
          },
          {
            heading: '4 · Fresh water out',
            icon: '💧',
            items: [
              'Clean fresh water collects on the right and rises out of the tank.',
            ],
            note: 'Output: fresh water',
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'A resident was asked: *“What do you think about the government’s plans to provide more fresh water to the nation through desalinization?”* They replied:\n\n' +
          '*“The energy needed for desalinization is too high. We would spend too much money to only get a small amount of water — it isn’t worth it! Climate change is already affecting us here in Jordan! The use of natural gas and other fossil fuels to run the desalinization process will contribute more greenhouse gases to the environment. This will make our situation worse, not just now but in the future too. We must definitely look at other sources of water to meet our needs.”*\n\n' +
          '**Justify** why another resident of Jordan might disagree with this perspective.',
        marks: 4,
        ph: 'Give a valid reason, with detail, why another resident might support desalinization (e.g. water is essential for health and industry; with groundwater unreliable, the cost is worth it).',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — limitation of a diagram',
    marks: 2,
    stem:
      'Re-examine **Source C** (the desalinization process diagram from Question 7). A resident of Jordan is learning about the government’s proposal to invest in desalinization.',
    tasks: [
      {
        label: '',
        text: '**Outline** one limitation of **Source C** to a resident of Jordan who is learning about the government’s proposal to invest in desalinization.',
        marks: 2,
        ph: 'One limitation of the diagram for residents, elaborated (e.g. it does not show where the desalinization plants will be located, such as their distance from residents’ homes).',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — sustainable extraction & biodiversity',
    marks: 24,
    stem: 'A report by the United Nations found that the extraction and processing of minerals is responsible for more than 80 % of the world’s biodiversity loss.',
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '**To what extent** is the sustainable extraction of resources essential for reducing biodiversity loss?\n\n' +
          'In your essay, you must:\n' +
          '• include explanations and examples to support your arguments\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing whether sustainable extraction is essential for reducing biodiversity loss, with ≥2 balanced perspectives, named examples and geographical terms. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
