import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2022 · ISOMORPHIC VARIANT 1 (geography-may-2022-v1)
 * Subject group: Individuals & Societies · Course: Geography. Total 80 marks, 3 tasks.
 *
 * Construct preserved 1:1 from geography-may-2022 (same crit / command term / marks /
 * task structure):
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (6) · Q7 (4) · Q8 (2) · Q9 (24)
 *
 * NEW scenario (genuinely different context per question, same assessed skill):
 *   2019–20 Australian "Black Summer" bushfires & displacement (New South Wales) ·
 *   clean-cooking energy access & indoor air pollution (Sub-Saharan Africa) ·
 *   sustainable fishing vs marine biodiversity loss.
 *
 * Per the I&S variant carve-out, EVERY artefact-bearing question presents the new
 * scenario through a DIFFERENT component than the source used for that question:
 *   Q1  source ImageCompareSlider → InteractiveChart  (bushfire impacts by category, value-read)
 *   Q3  source SourceDocViewer    → SlideDeck          (the NGO's investigation web pages)
 *       source LocatedMap         → DataTableInteractive (displaced-people-per-LGA output table)
 *   Q6  source LocatedMap         → InteractiveChart   (clean-cooking access by region, value-read)
 *   Q7  source InfoGraphicPanel   → NetworkGraph       (clean-cookstove benefits/cause-effect)
 *   Q8  reuses Source C           → reuses the Q7 NetworkGraph
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
  id: 'geography-may-2022-v1',
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
    topic: 'Natural disasters — bushfire impacts',
    marks: 2,
    stem:
      'During the southern-hemisphere summer of 2019–2020, a record-breaking drought and heatwave turned much of south-eastern Australia into tinder. A series of intense bushfires — later called the “Black Summer” — burned across New South Wales for months.\n\n' +
      '**Source A (video transcript):** “Years of below-average rainfall left the forests of New South Wales bone dry. In the spring of 2019 lightning strikes and human activity ignited fires that the heat and wind would not let go. By the time rain finally arrived in early 2020, more than 5 million hectares had burned in New South Wales alone. The flames destroyed over 2 400 homes and pushed walls of smoke across the state, choking the air of cities hundreds of kilometres away. Tens of thousands of people were told to leave their homes and drive towards the coast in search of safety. An estimated one billion animals were killed or displaced. The impact was not felt only in Australia — smoke drifted across the Pacific Ocean and was detected in South America.”\n\n' +
      'Use the chart in Source A to read the recorded impacts of the 2019–2020 bushfires in New South Wales.',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source A — recorded impacts of the 2019–2020 “Black Summer” bushfires in New South Wales, by category (original recreation, not the IB imagery). Hover a bar for its exact value.',
      data: {
        kind: 'bar',
        title: 'Source A — Recorded impacts of the 2019–2020 bushfires, New South Wales',
        source: 'NSW Rural Fire Service (recreated)',
        x: { label: 'Impact category', categories: ['Land burned (Mha)', 'Homes destroyed (thousands)', 'People evacuated (ten-thousands)', 'Lives lost'] },
        y: { label: 'Recorded value', min: 0, max: 30, ticks: [0, 5, 10, 15, 20, 25, 30], unit: '' },
        series: [
          { name: 'Black Summer (NSW)', color: '#e8590c', points: [5.0, 2.4, 9.0, 26] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**State** two impacts of the 2019–2020 bushfires in Australia.',
        marks: 2,
        ph: 'Two distinct impacts (e.g. loss of life; destruction of homes; smoke/air pollution; forced evacuation; loss of wildlife). Responses need not be shown in the source.',
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
        ph: 'One way income disparity worsens a disaster’s impact, considered in detail with reasons (e.g. low-income families cannot afford to evacuate early or insure their home → greater loss).',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — displacement after the bushfires',
    marks: 8,
    stem:
      'Following the Black Summer bushfires, a non-governmental organization (NGO) called **BushfireWatch Australia** carried out an investigation into how the fires forced people to move. They produced a data table using the action plan below. You will evaluate their investigation.\n\n' +
      '**Statement of inquiry:** Place and space determine the impact of natural disasters on communities.\n\n' +
      '**Research question:** How did the 2019–2020 bushfires affect the movement of people within New South Wales, Australia?\n\n' +
      'The table (shown alongside) reports the number of people who registered as displaced in each Local Government Area (LGA) of the south-east region on 10 January 2020.',
    artefact: {
      component: 'SlideDeck',
      caption: 'The NGO’s investigation web pages — its goal, statement of inquiry, research question and methodology (the marked action plan). Page through with the arrows or page dots.',
      data: {
        title: 'BushfireWatch Australia — New South Wales 2019–2020',
        source: 'www.bushfirewatch.org.au/projects',
        slides: [
          {
            title: 'Our goal',
            body: 'Our team set out to analyse the movement of people forced from their homes by the Black Summer bushfires. The goal is to use evacuation-centre registrations to map where displaced people moved to, and to publish a table of the results for each Local Government Area (LGA).',
          },
          {
            title: 'Statement of inquiry & research question',
            bullets: [
              'Statement of inquiry: Place and space determine the impact of natural disasters on communities.',
              'Research question: How did the 2019–2020 bushfires affect the movement of people within New South Wales, Australia?',
            ],
          },
          {
            title: 'Methodology',
            bullets: [
              'A person is counted as displaced when they sign in at an official evacuation centre away from their home.',
              'Collect sign-in records from all 31 official evacuation centres across the south-east region.',
              'These centres registered about 64 000 people — roughly the number forced to leave their homes in the worst-hit shires.',
              'Timeframe for data collection: 1 November 2019 – 10 January 2020.',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the investigation carried out by the NGO.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the investigation, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2. You need not discuss every part of the plan or table.',
        artefact: {
          component: 'DataTableInteractive',
          caption: 'The NGO’s table — people registered as displaced per Local Government Area (LGA) of south-east New South Wales, 10 January 2020. Three inland LGAs registered no evacuation centres, so they have no data.',
          data: {
            title: 'Registered displaced people — south-east NSW, 10 January 2020',
            source: 'BushfireWatch Australia (recreated)',
            headers: ['Local Government Area', 'People displaced', 'Band'],
            rows: [
              ['Bega Valley', '21 800', 'Worst hit'],
              ['Eurobodalla', '18 400', 'Worst hit'],
              ['Snowy Monaro', '9 600', 'High'],
              ['Shoalhaven', '8 900', 'High'],
              ['Queanbeyan-Palerang', '3 200', 'Moderate'],
              ['Wingecarribee', '2 100', 'Moderate'],
              ['Cooma North (inland)', 'No data', 'No evacuation centre'],
              ['Bombala (inland)', 'No data', 'No evacuation centre'],
              ['Nimmitabel (inland)', 'No data', 'No evacuation centre'],
            ],
            caption: 'A table of displacement by LGA. It gives a clear overview of where people moved to along the coast, but three inland LGAs had no evacuation centre and so no data, so it is only a partial picture.',
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
        ph: 'One benefit of a chosen method, considered in detail with reasons for how it helps you answer the RQ (e.g. a survey counts how many people received an early-warning alert, so you can evaluate the strategy).',
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
    topic: 'Source evaluation — clean-cooking access in Africa',
    marks: 6,
    stem:
      'In many parts of Sub-Saharan Africa families still cook on open fires or basic stoves burning wood and charcoal. The smoke pollutes the air inside the home and causes serious health problems. “Clean cooking” means using cleaner fuels and stoves (electricity, gas, improved biomass stoves) instead.\n\n' +
      '**Source B** shows the share of the population with access to clean cooking in five Sub-Saharan African regions in 2021. (Created by cleanenergyaccess.org.)',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source B — share of the population with access to clean cooking by Sub-Saharan African region, 2021. Hover a bar for its exact value. Original recreation.',
      data: {
        kind: 'bar',
        title: 'Source B — Access to clean cooking by region, Sub-Saharan Africa (2021)',
        source: 'cleanenergyaccess.org',
        x: { label: 'Region', categories: ['Southern Africa', 'West Africa', 'East Africa', 'Central Africa', 'Sahel'] },
        y: { label: 'Population with access', min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], unit: '%' },
        series: [
          { name: '% with access to clean cooking', color: '#0b7285', points: [62, 24, 16, 9, 5] },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct answer to complete the sentence below.\n\nThe region with the highest access to clean cooking on Source B is ____.\n\nOptions: (i) the Sahel · (ii) East Africa · (iii) Southern Africa.',
        marks: 1,
        ph: 'Pick the region with the tallest bar (highest %) on Source B.',
      },
      {
        label: 'b',
        text: '**State** the origin of **Source B**.',
        marks: 1,
        ph: 'Name the organisation/website that created Source B (read it from the chart).',
      },
      {
        label: 'c',
        text: '**Explain** one value of **Source B** to an MYP student investigating access to clean cooking in Sub-Saharan Africa.',
        marks: 4,
        ph: 'One value of the chart, considered with reasoning (e.g. it gives the access figure for every region, so the student can identify where investment in clean cooking is most needed).',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Justifying an alternative perspective — clean cookstoves',
    marks: 4,
    stem:
      'A government in East Africa is investigating ways to reduce indoor air pollution and improve health. They plan to invest in a national programme to give households **improved clean cookstoves** that burn far less fuel and produce far less smoke.\n\n' +
      '**Source C** shows how the benefits of the clean-cookstove programme are connected: a clean stove sits at the centre, joined to the outcomes it is meant to bring about.\n\n' +
      'One resident was interviewed about the government’s plan to invest in clean cookstoves. Their perspective is given in the interview alongside.',
    artefact: {
      component: 'NetworkGraph',
      caption: 'Source C — how a clean-cookstove programme is expected to work. The clean stove (centre) is linked to the outcomes it is meant to deliver. Hover or tap a node to read it.',
      data: {
        title: 'Source C — Expected benefits of a clean-cookstove programme',
        source: 'Government clean-cooking programme',
        center: { label: 'Clean cookstove', detail: 'An improved stove that burns far less wood or charcoal and produces far less smoke than an open fire.', color: '#0b7285' },
        nodes: [
          { id: 'health', label: 'Better health', color: '#2f9e44', detail: 'Less smoke indoors means fewer respiratory and eye illnesses, especially for women and children.' },
          { id: 'fuel', label: 'Less fuel used', color: '#e8590c', detail: 'The stove burns more efficiently, so households spend less money and time collecting wood or charcoal.' },
          { id: 'forest', label: 'Less deforestation', color: '#9c36b5', detail: 'Burning less wood reduces the pressure to cut down nearby forests for fuel.' },
          { id: 'climate', label: 'Lower emissions', color: '#1971c2', detail: 'Burning less biomass releases fewer greenhouse gases and less black-carbon soot.' },
        ],
        edges: [
          { from: 'fuel', to: 'forest', label: 'reduces wood demand' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'A resident was asked: *“What do you think about the government’s plan to provide clean cookstoves to reduce indoor air pollution?”* They replied:\n\n' +
          '*“The stoves cost too much for a poor household, and the government should be spending that money on hospitals and clean water instead! Many families have cooked on open fires for generations and they trust them. The improved stoves still need wood or pellets that are hard to find in the dry season. People will just go back to their old fires once the free ones break. It isn’t worth it — we must look at other ways to improve people’s health.”*\n\n' +
          '**Justify** why another resident of the country might disagree with this perspective.',
        marks: 4,
        ph: 'Give a valid reason, with detail, why another resident might support the clean-cookstove programme (e.g. indoor smoke causes serious illness; a cleaner stove protects the health of women and children, so the cost is worth it).',
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
      'Re-examine **Source C** (the clean-cookstove benefits diagram from Question 7). A resident is learning about the government’s proposal to invest in clean cookstoves.',
    tasks: [
      {
        label: '',
        text: '**Outline** one limitation of **Source C** to a resident who is learning about the government’s proposal to invest in clean cookstoves.',
        marks: 2,
        ph: 'One limitation of the diagram for residents, elaborated (e.g. it does not show the cost of a stove or whether households can afford one).',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — sustainable fishing & biodiversity',
    marks: 24,
    stem: 'A report by the United Nations found that around one third of the world’s fish stocks are being caught faster than they can reproduce, and overfishing is a leading cause of biodiversity loss in the world’s oceans.',
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '**To what extent** is sustainable fishing essential for reducing marine biodiversity loss?\n\n' +
          'In your essay, you must:\n' +
          '• include explanations and examples to support your arguments\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing whether sustainable fishing is essential for reducing marine biodiversity loss, with ≥2 balanced perspectives, named examples and geographical terms. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
