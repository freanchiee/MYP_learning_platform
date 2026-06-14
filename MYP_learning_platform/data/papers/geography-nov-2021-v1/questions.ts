import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2021 · ISOMORPHIC VARIANT v1 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Total 80 marks, 3 tasks (identical blueprint to geography-nov-2021):
 *   Task 1 Investigating (Crit A+B, 26): Q1 (B, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (C, 2) · Q7 (C, 4) · Q8 (D, 6) · Q9 (24)
 *
 * NEW scenario (isomorphic, NOT a paraphrase of the source): plastic pollution & ocean
 * health — single-use plastics, community beach-clean-up action, coastal-city growth and
 * the global trade in plastic waste. Every assessed construct (crit, command term, marks,
 * task structure) is preserved; only the surface context changes.
 *
 * Per the I&S variant carve-out, every artefact-bearing question presents the new scenario
 * through a DIFFERENT component than the source used for that question:
 *   Q1  → DataTableInteractive  (source used InteractiveChart) — global plastic production by decade
 *   Q3  → SourceDocViewer       (source used InfoGraphicPanel)  — the class beach-clean-up action plan
 *   Q4  → NetworkGraph          (source used InfoGraphicPanel)  — 6 actions reducing plastic waste
 *   Q5  → TimelineScrubber      (source used SlideDeck)         — coastal-city plastic-waste milestones
 *   Q6  → DataTableInteractive  (source used InteractiveChart)  — mismanaged plastic waste 2010 vs 2020
 *   Q8  → LocatedMap            (source used ChoroplethWorld)   — plastic-waste imports, SE Asia, 2018
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
  id: 'geography-nov-2021-v1',
  subject: 'Geography',
  session: 'November',
  year: 2021,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — reading a plastic-production trend (Source A)',
    marks: 2,
    stem:
      '**Source A** is a data table showing the total mass of plastic produced worldwide each decade from 1960 to 2020. ' +
      'Figures are given in millions of tonnes produced per year at the start of each decade.',
    artefact: {
      component: 'DataTableInteractive',
      caption:
        'Source A — annual global plastic production, 1960–2020 (millions of tonnes). Click a row to pin the year you are reading off.',
      data: {
        title: 'Source A — Annual global plastic production, 1960–2020',
        source: 'Global plastics record (recreated)',
        headers: ['Year', 'Plastic produced (million tonnes)'],
        rows: [
          ['1960', '8'],
          ['1970', '35'],
          ['1980', '70'],
          ['1990', '120'],
          ['2000', '213'],
          ['2010', '313'],
          ['2020', '367'],
        ],
        caption:
          'Production rose in every decade, from 8 million tonnes in 1960 to 367 million tonnes in 2020 — the highest figure shown.',
      },
    },
    tasks: [
      {
        label: '',
        text: 'Using data from **Source A**, **outline** the trend in global plastic production from 1960–2020.',
        marks: 2,
        ph: 'State the overall trend AND quote data from the table (e.g. an overall increase, with 2020 the highest at 367 million tonnes).',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Explaining a human cause of the plastic trend',
    marks: 4,
    stem: '**Source A** is repeated for reference (annual global plastic production from 1960 to 2020).',
    tasks: [
      {
        label: '',
        text: '**Explain** how the trend shown in **Source A** could be caused by **one** human activity.',
        marks: 4,
        ph: 'Take ONE human activity (e.g. growth of single-use packaging / consumer goods) and build from a stated cause to a detailed explanation with reasoning (cheap demand → more plastic made).',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — evaluating a class action plan (Source B)',
    marks: 8,
    stem:
      'In 2019, a group of teenagers in the Philippines began organising weekly beach clean-ups after seeing their local bay choked with single-use plastic. Their campaign spread along the coast and inspired schools across the region to take action.\n\n' +
      'An MYP year 4 class has been inspired by them. They have decided to investigate what individuals in the local community could do to reduce plastic pollution. The class will collect information from local people to find out about the actions they were already taking and the actions they would be willing to take in the future. This information will help the class choose a service project for MYP year 5.\n\n' +
      'The class wrote up the following action plan (**Source B**) to gather primary data. You will be asked to evaluate this action plan.',
    artefact: {
      component: 'SourceDocViewer',
      caption:
        'Source B — the MYP year-4 class action plan and questionnaire, presented as a working document. Use the evaluation lenses and highlight the parts you appraise.',
      data: {
        kind: 'Action plan (primary-data method)',
        title: 'Source B — MYP class action plan',
        attribution: 'Written by the MYP year 4 class, 2019',
        glossary: {
          'primary data': 'Information the class collects first-hand themselves, e.g. from a questionnaire.',
          'secondary data': 'Information already gathered by someone else, e.g. local-government figures.',
          questionnaire: 'A fixed set of written questions asked of many people to gather comparable data.',
        },
        paragraphs: [
          'Statement of inquiry: Individual actions can lead to changes in communities. Research question: What actions are people in our local community taking to reduce plastic pollution?',
          'Method, Step 1 — secondary data: visit the local council to ask what is already being done about plastic waste.',
          'Method, Step 2 — primary data: use a questionnaire at a local shopping centre. Work in pairs; each pair collects 5 questionnaires (total 50 people).',
          'Questionnaire Q1. On a scale of 1 to 10, how concerned are you about plastic pollution? (1 = Not at all, 10 = Extremely concerned)',
          'Questionnaire Q2. Do you take any of these actions to reduce plastic waste? (Refuse plastic bags · Use a refillable bottle · Buy unpackaged food · Recycle plastics · Join a clean-up)',
          'Questionnaire Q3. Which of these actions would you be willing to take in the future? (same five options)',
          'Questionnaire Q4. Name one thing that prevents you from taking action to reduce plastic waste.',
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the action plan.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the plan/questionnaire, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — design your own local-community investigation (Source C)',
    marks: 12,
    stem:
      'Following the Philippine teenagers’ clean-ups and the MYP class project, you will now design an investigation into your own local community. Your investigation must be based on **one** of the six possible actions shown in **Source C**.\n\n' +
      '**Statement of inquiry:** Individual actions can lead to changes in the way communities respond to plastic pollution.',
    artefact: {
      component: 'NetworkGraph',
      caption:
        'Source C — six actions that reduce plastic waste, branching from a central goal. Hover an action to read it; your investigation focuses on one of these.',
      data: {
        title: 'Source C — 6 actions reducing plastic pollution',
        source: 'Ocean Conservancy guidance (recreated)',
        center: { label: 'Reduce plastic pollution', detail: 'The shared community goal each action contributes to.', color: '#0b7285' },
        nodes: [
          { id: 'refuse', label: 'Refuse single-use', color: '#e8590c', detail: 'Refuse plastic bags, straws and cutlery; carry reusable alternatives.' },
          { id: 'refill', label: 'Use refillables', color: '#1971c2', detail: 'Switch to refillable bottles, cups and containers instead of disposable ones.' },
          { id: 'recycle', label: 'Recycle properly', color: '#2f9e44', detail: 'Sort and clean recyclable plastics so more is actually recycled, not landfilled.' },
          { id: 'unpackaged', label: 'Buy unpackaged', color: '#9c36b5', detail: 'Choose loose or unpackaged food and refill stations to avoid plastic wrapping.' },
          { id: 'cleanup', label: 'Join clean-ups', color: '#f08c00', detail: 'Take part in beach and river clean-ups to remove plastic already in the environment.' },
          { id: 'awareness', label: 'Raise awareness', color: '#c2255c', detail: 'Inform others and campaign for community action against plastic waste.' },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text:
          'Choose which action your investigation will focus on. Using the statement of inquiry and your chosen action, **formulate** a clear and focused research question for an investigation into your local community.\n\n' +
          '**Statement of inquiry:** Individual actions can lead to changes in the way communities respond to plastic pollution.',
        marks: 2,
        ph: 'Write an RQ that is both clear AND focused — include at least two elements (time, place, space or other), e.g. "How would replacing single-use bags with refillables in Cebu reduce its plastic waste by 2030?". Rewording the SoI scores 0.',
      },
      {
        label: 'b',
        text: '**Justify** the relevance of your research question to the statement of inquiry.',
        marks: 4,
        ph: 'Build from stating the link to the SoI → outlining → describing a factor in detail → justifying with reasoning why the RQ is relevant.',
      },
      {
        label: 'c',
        text: '**Identify** one secondary source of information that would be helpful for your investigation.',
        marks: 1,
        ph: 'One specific secondary source (e.g. statistics from your local council on plastic waste collected; a GIS map of litter hotspots; a relevant newspaper/website article). Vague answers like "statistics" score 0.',
      },
      {
        label: 'd',
        text: '**Explain** one benefit of including the secondary source you identified in part (c) in your investigation.',
        marks: 3,
        ph: 'Build from stating a benefit → outlining → explaining in detail with reasoning how the source helps your investigation.',
      },
      {
        label: 'e',
        text: '**Outline** one challenge that you might face when carrying out your investigation.',
        marks: 2,
        ph: 'Name a valid challenge (e.g. gathering enough primary data) and add brief detail on why it is a challenge.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — persuasive speech on coastal urban growth',
    marks: 18,
    stem:
      '**Source D** is an interactive timeline tracing 35 years of growth in a coastal city and the plastic-waste pressures that grew with it. Scrub through it (below) to prepare to answer a question on the challenges of rapid coastal urban growth.\n\n' +
      'You have been invited to be the guest speaker at this year’s International Coastal Cities Conference. Your speech will focus on the challenges of rapid urban growth for communities and the environment.',
    artefact: {
      component: 'TimelineScrubber',
      caption: 'Source D — 35 years of growth in a coastal megacity and its mounting plastic-waste challenge. Drag or click to scrub between milestones.',
      data: {
        title: 'A coastal megacity — 35 years of growth and waste',
        source: 'Conference timeline (recreated)',
        events: [
          { date: '1985', label: 'A fishing town of 0.9 million', detail: 'The settlement is a modest coastal fishing town with little formal waste collection and few plastic goods in daily use.' },
          { date: '1995', label: 'Port expansion draws migrants', detail: 'A new container port and factories pull rural migrants to the coast; informal settlements spread along the shoreline.' },
          { date: '2005', label: 'Population passes 4 million', detail: 'Rapid rural–urban migration pushes the population past 4 million; single-use plastic packaging becomes everyday, but collection lags behind.' },
          { date: '2012', label: 'Waste outpaces collection', detail: 'Around 40% of household waste in coastal slums is uncollected; plastic accumulates in canals and drains, blocking them in the monsoon.' },
          { date: '2018', label: 'River carries plastic to sea', detail: 'The city’s river becomes one of the region’s largest sources of ocean plastic, harming fisheries that local communities depend on.' },
          { date: '2020', label: 'A coastal megacity of 8 million', detail: 'Now a megacity of over 8 million, the city faces clogged waterways, flooding and polluted beaches that threaten health and tourism.' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a **persuasive** speech to **explain** at least one possible solution to the challenges presented by urban growth.\n\n' +
          'In your speech, you should:\n' +
          '• include examples from your MYP studies\n' +
          '• refer to either communities **or** the environment.',
        marks: 18,
        ph: 'A persuasive speech explaining at least one solution to a challenge of urban growth, with MYP examples. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Reading a mismanaged-plastic-waste table (Source E)',
    marks: 2,
    stem:
      '**Source E** was part of a newspaper article on ocean plastic. It is a table showing the mass of mismanaged plastic waste (waste that is littered or dumped, not properly collected) in 2010 and in 2020, split into three world regions: East Asia & Pacific, South Asia and Sub-Saharan Africa.',
    artefact: {
      component: 'DataTableInteractive',
      caption:
        'Source E — mismanaged plastic waste by region, 2010 and 2020 (millions of tonnes per year). Click a row to pin the region you are reading off.',
      data: {
        title: 'Source E — Mismanaged plastic waste by region, 2010 and 2020',
        source: 'Newspaper article on ocean plastic (recreated)',
        headers: ['Region', '2010 (million tonnes)', '2020 (million tonnes)'],
        rows: [
          ['East Asia & Pacific', '12.5', '20.8'],
          ['South Asia', '6.4', '12.1'],
          ['Sub-Saharan Africa', '1.9', '8.3'],
        ],
        caption:
          'Mismanaged plastic waste rose in every region. Sub-Saharan Africa went from 1.9 to 8.3 million tonnes — more than four times larger in 2020 than in 2010.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the increase in mismanaged plastic waste in South Asia from 2010 to 2020.',
        marks: 1,
        ph: 'Subtract the 2010 South Asia figure from the 2020 figure (12.1 − 6.4). One number, in million tonnes.',
      },
      {
        label: 'b',
        text: 'Select the correct response to complete the sentence: "Mismanaged plastic waste in ______ is more than four times bigger in 2020 than it was in 2010." (East Asia & Pacific / South Asia / Sub-Saharan Africa)',
        marks: 1,
        ph: 'Pick the region whose 2020 value is more than 4× its 2010 value (1.9 → 8.3 million tonnes).',
      },
    ],
  },
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Purpose & value of a source (Source E)',
    marks: 4,
    stem: '**Source E** (the mismanaged-plastic-waste table) is repeated to help you answer the questions that follow.',
    tasks: [
      {
        label: 'a',
        text: '**Outline** the purpose of **Source E** in a newspaper article on ocean plastic.',
        marks: 2,
        ph: 'State the purpose (e.g. to inform readers) then elaborate (e.g. about the change in mismanaged plastic waste by region between 2010 and 2020).',
      },
      {
        label: 'b',
        text: '**Outline** one value of using **Source E** in a newspaper article on ocean plastic.',
        marks: 2,
        ph: 'State one value of the table for a newspaper, then elaborate on why it is useful in that newspaper context (not just a general value).',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — limitations of a plastic-waste imports map (Source F)',
    marks: 6,
    stem:
      '**Source F** is a map from an NGO called **Ocean Watch**, showing the main importers of plastic waste in South-East Asia in 2018, after China banned most plastic-waste imports.\n\n' +
      'You will be asked to describe the limitations of **Source F** from the perspective of:\n' +
      '• an MYP year 3 student investigating the **causes** of the plastic-waste trade\n' +
      '• a Malaysian government official writing a report on the **impacts** of imported plastic waste in Malaysia.',
    artefact: {
      component: 'LocatedMap',
      caption:
        'Source F — main South-East Asian importers of plastic waste, 2018 (NGO "Ocean Watch", recreated). Hover a marker to read the country and the tonnage imported.',
      data: {
        title: 'Source F — Plastic-waste imports in South-East Asia, 2018',
        source: 'NGO "Ocean Watch" map (recreated)',
        region: 'South-East Asia',
        regionCountries: ['Malaysia', 'Vietnam', 'Thailand', 'Indonesia', 'Philippines'],
        scaleKm: 1000,
        north: true,
        locator: [110, 5],
        markers: [
          { lon: 101.7, lat: 3.9, label: 'Malaysia', detail: 'Imported about 870,000 tonnes of plastic waste in 2018 — the most in the region.', color: '#c2255c' },
          { lon: 105.8, lat: 21.0, label: 'Vietnam', detail: 'Imported about 480,000 tonnes of plastic waste in 2018.', color: '#1971c2' },
          { lon: 100.5, lat: 13.7, label: 'Thailand', detail: 'Imported about 360,000 tonnes of plastic waste in 2018.', color: '#2f9e44' },
          { lon: 106.8, lat: -6.2, label: 'Indonesia', detail: 'Imported about 320,000 tonnes of plastic waste in 2018.', color: '#e8590c' },
          { lon: 121.0, lat: 14.6, label: 'Philippines', detail: 'Imported about 95,000 tonnes of plastic waste in 2018.', color: '#9c36b5' },
        ],
        caption:
          'Import figures shown (2018): Malaysia 870,000 t · Vietnam 480,000 t · Thailand 360,000 t · Indonesia 320,000 t · Philippines 95,000 t. The map only shows imported (traded) plastic waste for 2018, not domestically produced waste.',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Explain** one limitation of **Source F** from the perspective of an MYP year 3 student investigating the **causes** of the plastic-waste trade.',
        marks: 3,
        ph: 'One limitation for this student, with reasoning (e.g. it only shows where waste is imported, not why richer countries export it; the student needs the causes for their investigation).',
      },
      {
        label: 'b',
        text: '**Explain** one limitation of **Source F** from the perspective of a Malaysian government official writing a report on the impacts of imported plastic waste in Malaysia.',
        marks: 3,
        ph: 'One limitation for this official, with reasoning (e.g. the map is from 2018, so it is out of date; the official needs current figures or the report could be invalid).',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — benefits vs consequences of the global plastic-waste trade',
    marks: 24,
    stem: '"The global trade in plastic waste creates more benefits for societies than negative consequences." To what extent do you agree with this statement?',
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '"The global trade in plastic waste creates more benefits for societies than negative consequences." **To what extent** do you agree with this statement?\n\n' +
          'In your essay, you must include:\n' +
          '• appropriate geographical terminology\n' +
          '• positive **and** negative consequences of the plastic-waste trade\n' +
          '• examples from your MYP studies to support your arguments.',
        marks: 24,
        ph: 'A structured essay weighing positive and negative consequences of the plastic-waste trade, with named examples and a clear conclusion. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
