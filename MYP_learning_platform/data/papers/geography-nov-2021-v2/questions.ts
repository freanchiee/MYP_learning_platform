import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2021 · ISOMORPHIC VARIANT v2 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Total 80 marks, 3 tasks (identical blueprint to geography-nov-2021):
 *   Task 1 Investigating (Crit A+B, 26): Q1 (B, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (C, 2) · Q7 (C, 4) · Q8 (D, 6) · Q9 (24)
 *
 * NEW scenario (isomorphic, NOT a paraphrase of the source OR of v1): water scarcity &
 * access to safe water — rising global freshwater withdrawals, community water-saving
 * action, the growth of water-stressed cities, and the worldwide pattern of physical water
 * stress and water-related displacement. Every assessed construct (crit, command term,
 * marks, task structure) is preserved; only the surface context changes.
 *
 * Per the I&S variant carve-out, every artefact-bearing question presents the new scenario
 * through a component DIFFERENT from BOTH the source AND v1 for that question:
 *   Q1  → PieChart            (source InteractiveChart · v1 DataTableInteractive) — global freshwater withdrawal by sector, 1980 vs 2020 (nested rings)
 *   Q3  → SlideDeck           (source InfoGraphicPanel · v1 SourceDocViewer)      — the class water-saving action plan, paged
 *   Q4  → DragAnnotate        (source InfoGraphicPanel · v1 NetworkGraph)         — 6 water-saving actions sorted into home / community bins
 *   Q5  → InfoGraphicPanel    (source SlideDeck · v1 TimelineScrubber)            — six water-stressed cities as profile cards
 *   Q6  → PieChart            (source InteractiveChart · v1 DataTableInteractive) — people without safely managed water by region, 2005 vs 2020 (nested rings)
 *   Q8  → SourceDocViewer     (source ChoroplethWorld · v1 LocatedMap)           — an NGO water-stress briefing, written up as an evaluable source
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
  id: 'geography-nov-2021-v2',
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
    topic: 'Investigating — reading a freshwater-withdrawal trend (Source A)',
    marks: 2,
    stem:
      '**Source A** is a nested doughnut chart showing total global freshwater withdrawal split by sector — agriculture, industry and domestic (homes). ' +
      'The inner ring shows the withdrawal in 1980 and the outer ring shows it in 2020. Figures are in cubic kilometres of water withdrawn per year (km³/yr). ' +
      'The total withdrawal was 2 200 km³ in 1980 and 4 000 km³ in 2020.',
    artefact: {
      component: 'PieChart',
      caption:
        'Source A — global freshwater withdrawal by sector, 1980 (inner ring) vs 2020 (outer ring), in km³/yr. Hover a slice to read its share. 1980 total: 2 200 km³; 2020 total: 4 000 km³.',
      data: {
        kind: 'nested',
        title: 'Source A — Global freshwater withdrawal by sector: 1980 vs 2020',
        source: 'Global water-use record (recreated)',
        unit: ' km³',
        // Outer ring = 2020 (total 4000 km³)
        series: [
          { name: 'Agriculture (2020)', value: 2800, color: '#2f9e44' },
          { name: 'Industry (2020)', value: 800, color: '#1971c2' },
          { name: 'Domestic / homes (2020)', value: 400, color: '#e8590c' },
        ],
        // Inner ring = 1980 (total 2200 km³)
        innerSeries: [
          { name: 'Agriculture (1980)', value: 1700, color: '#2f9e44' },
          { name: 'Industry (1980)', value: 350, color: '#1971c2' },
          { name: 'Domestic / homes (1980)', value: 150, color: '#e8590c' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'Using data from **Source A**, **outline** the trend in global freshwater withdrawal from 1980–2020.',
        marks: 2,
        ph: 'State the overall trend AND quote data from the chart (e.g. an overall increase, with the 2020 total of 4 000 km³ the highest — nearly double 1980).',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Explaining a human cause of the water-use trend',
    marks: 4,
    stem: '**Source A** is repeated for reference (global freshwater withdrawal by sector in 1980 and 2020).',
    tasks: [
      {
        label: '',
        text: '**Explain** how the trend shown in **Source A** could be caused by **one** human activity.',
        marks: 4,
        ph: 'Take ONE human activity (e.g. expansion of irrigated farming to feed a growing population) and build from a stated cause to a detailed explanation with reasoning (more mouths to feed → more irrigation → more water withdrawn).',
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
      'In 2018, after three years of severe drought, the South African city of Cape Town came close to "Day Zero" — the day the taps would be switched off. Residents cut their water use dramatically, and the campaign inspired young people around the world to take everyday water saving seriously.\n\n' +
      'An MYP year 4 class has been inspired by this. They have decided to investigate what individuals in the local community could do to reduce the amount of water they waste. The class will collect information from local people to find out about the actions they were already taking and the actions they would be willing to take in the future. This information will help the class choose a service project for MYP year 5.\n\n' +
      'The class produced the following action plan (**Source B**) to gather primary data. You will be asked to evaluate this action plan.',
    artefact: {
      component: 'SlideDeck',
      caption:
        'Source B — the MYP year-4 class action plan and questionnaire, presented as paged cards. Page through the plan, then evaluate it.',
      data: {
        title: 'Source B — MYP class action plan',
        source: 'MYP year 4 class',
        slides: [
          {
            title: 'Statement of inquiry & research question',
            body:
              'Statement of inquiry: Individual actions can lead to changes in communities. Research question: What actions are people in our local community taking to reduce the amount of water they waste?',
          },
          {
            title: 'Method · Step 1 — Secondary data',
            body: 'Go to the local water utility to ask what is being done already to reduce water use across the city.',
          },
          {
            title: 'Method · Step 2 — Primary data',
            body:
              'Use a questionnaire at a local shopping centre. Work in pairs; each pair collects 5 questionnaires (total 50 people).',
          },
          {
            title: 'Questionnaire — Q1 & Q2',
            bullets: [
              'Q1. On a scale of 1 to 10, how concerned are you about water shortages? (1 = Not at all, 10 = Extremely concerned)',
              'Q2. Do you take any of these actions to save water? (Take shorter showers · Fix dripping taps · Reuse greywater on the garden · Run only full washing loads · Collect rainwater)',
            ],
          },
          {
            title: 'Questionnaire — Q3 & Q4',
            bullets: [
              'Q3. Which of these actions would you be willing to take in the future? (same five options)',
              'Q4. Name one thing that prevents you from taking action to save water.',
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
      'Following Cape Town’s water crisis and the MYP class project, you will now design an investigation into your own local community. Your investigation must be based on **one** of the six possible water-saving actions shown in **Source C**.\n\n' +
      '**Statement of inquiry:** Individual actions can lead to changes in the way communities respond to water scarcity.',
    artefact: {
      component: 'DragAnnotate',
      caption:
        'Source C — six actions that save water, shown as cards you can sort into where they mainly happen (at home or across the community). Hover or sort a card to read it; your investigation focuses on one of these six actions.',
      data: {
        title: 'Source C — 6 actions to save water',
        mode: 'classify',
        prompt:
          'Six water-saving actions. Sort each card into where it mainly takes place. Your investigation will focus on ONE of these six actions.',
        chips: [
          { id: 'showers', text: 'Take shorter showers' },
          { id: 'taps', text: 'Fix dripping taps & leaks' },
          { id: 'greywater', text: 'Reuse greywater on gardens' },
          { id: 'rainwater', text: 'Collect & store rainwater' },
          { id: 'crops', text: 'Plant drought-tolerant gardens' },
          { id: 'awareness', text: 'Run a water-saving campaign' },
        ],
        bins: [
          { id: 'home', label: 'Mainly at home', correctLabelIds: ['showers', 'taps', 'greywater', 'rainwater'] },
          { id: 'community', label: 'Across the community', correctLabelIds: ['crops', 'awareness'] },
        ],
        showScore: true,
      },
    },
    tasks: [
      {
        label: 'a',
        text:
          'Choose which action your investigation will focus on. Using the statement of inquiry and your chosen action, **formulate** a clear and focused research question for an investigation into your local community.\n\n' +
          '**Statement of inquiry:** Individual actions can lead to changes in the way communities respond to water scarcity.',
        marks: 2,
        ph: 'Write an RQ that is both clear AND focused — include at least two elements (time, place, space or other), e.g. "How would installing rainwater tanks in Windhoek reduce its household water use by 2030?". Rewording the SoI scores 0.',
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
        ph: 'One specific secondary source (e.g. household water-use statistics from your local water utility; a GIS map of reservoir levels; a relevant newspaper/website article). Vague answers like "statistics" score 0.',
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
    topic: 'Communicating — persuasive speech on water-stressed cities',
    marks: 18,
    stem:
      '**Source D** is an information panel profiling six cities that have grown rapidly and now face serious water stress. Read the profiles (below) to prepare to answer a question on the challenges of supplying water to growing cities.\n\n' +
      'You have been invited to be the guest speaker at this year’s International Urban Water Conference. Your speech will focus on the challenges of water supply for growing communities and the environment.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source D — six water-stressed cities profiled as cards. Hover a card to spotlight it; use these examples to prepare your speech.',
      data: {
        title: 'Six water-stressed cities',
        source: 'Conference briefing (recreated)',
        layout: 'grid',
        blocks: [
          { heading: 'Cape Town, South Africa', icon: '🚿', items: ['Three years of drought brought the city to "Day Zero" in 2018; residents were limited to 50 litres per person per day.'] },
          { heading: 'Chennai, India', icon: '🌵', items: ['In 2019 the four main reservoirs ran almost dry; water had to be brought into the city of 10 million by train and tanker.'] },
          { heading: 'São Paulo, Brazil', icon: '💧', items: ['A 2014–15 drought cut the main Cantareira reservoir to about 5% of capacity, supplying a metro region of over 21 million.'] },
          { heading: 'Sana’a, Yemen', icon: '🏜️', items: ['Rapid growth and over-pumping of groundwater make Sana’a one of the first capitals at risk of running out of water.'] },
          { heading: 'Mexico City, Mexico', icon: '🏙️', items: ['Over-pumping has caused the ground to sink, while up to 40% of piped water is lost through leaks before it reaches homes.'] },
          { heading: 'Jakarta, Indonesia', icon: '🌊', items: ['Only about a third of homes have piped water, so many rely on wells; over-pumping is causing parts of the city to sink.'] },
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
    topic: 'Reading a "people without safe water" chart (Source E)',
    marks: 2,
    stem:
      '**Source E** was part of a newspaper article on access to safe water. It is a nested doughnut chart showing the number of people without access to safely managed drinking water, by world region, in 2005 (inner ring) and in 2020 (outer ring). The three regions shown are Sub-Saharan Africa, Central & Southern Asia, and Latin America & the Caribbean.',
    artefact: {
      component: 'PieChart',
      caption:
        'Source E — people without safely managed drinking water by region, 2005 (inner ring) vs 2020 (outer ring), in millions. Hover a slice to read its share. 2005 total: 770 million; 2020 total: 980 million.',
      data: {
        kind: 'nested',
        title: 'Source E — People without safely managed drinking water: 2005 vs 2020',
        source: 'Newspaper article on access to safe water (recreated)',
        unit: 'm',
        // Outer ring = 2020 (total 980 million)
        series: [
          { name: 'Sub-Saharan Africa (2020)', value: 420, color: '#e8590c' },
          { name: 'Central & Southern Asia (2020)', value: 480, color: '#1971c2' },
          { name: 'Latin America & Caribbean (2020)', value: 80, color: '#9c36b5' },
        ],
        // Inner ring = 2005 (total 770 million)
        innerSeries: [
          { name: 'Sub-Saharan Africa (2005)', value: 300, color: '#e8590c' },
          { name: 'Central & Southern Asia (2005)', value: 455, color: '#1971c2' },
          { name: 'Latin America & Caribbean (2005)', value: 15, color: '#9c36b5' },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the increase in the number of people without safely managed water in Sub-Saharan Africa from 2005 to 2020.',
        marks: 1,
        ph: 'Subtract the 2005 Sub-Saharan Africa figure from the 2020 figure (420 − 300). One number, in millions.',
      },
      {
        label: 'b',
        text: 'Select the correct response to complete the sentence: "The number of people without safely managed water in ______ is more than four times bigger in 2020 than it was in 2005." (Sub-Saharan Africa / Central & Southern Asia / Latin America & the Caribbean)',
        marks: 1,
        ph: 'Pick the region whose 2020 value is more than 4× its 2005 value (15m → 80m).',
      },
    ],
  },
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Purpose & value of a source (Source E)',
    marks: 4,
    stem: '**Source E** (the "people without safe water" chart) is repeated to help you answer the questions that follow.',
    tasks: [
      {
        label: 'a',
        text: '**Outline** the purpose of **Source E** in a newspaper article on access to safe water.',
        marks: 2,
        ph: 'State the purpose (e.g. to inform readers) then elaborate (e.g. about the change in the number of people without safe water by region between 2005 and 2020).',
      },
      {
        label: 'b',
        text: '**Outline** one value of using **Source E** in a newspaper article on access to safe water.',
        marks: 2,
        ph: 'State one value of the chart for a newspaper, then elaborate on why it is useful in that newspaper context (not just a general value).',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — limitations of a water-stress briefing (Source F)',
    marks: 6,
    stem:
      '**Source F** is a briefing from an NGO called **Water Watch**, describing the countries facing the highest physical water stress in 2019.\n\n' +
      'You will be asked to describe the limitations of **Source F** from the perspective of:\n' +
      '• an MYP year 3 student investigating the **causes** of water scarcity\n' +
      '• an Indian government official writing a report on the **impacts** of water shortages in India.',
    artefact: {
      component: 'SourceDocViewer',
      caption:
        'Source F — an NGO water-stress briefing, presented as an evaluable source. Use the evaluation lenses and highlight the parts you appraise.',
      data: {
        kind: 'NGO briefing (secondary source)',
        title: 'Source F — Countries facing extremely high water stress, 2019',
        attribution: 'Published by the NGO "Water Watch", 2019',
        glossary: {
          'water stress': 'When the demand for water in an area is close to, or greater than, the amount of water available.',
          'physical water stress': 'Water stress caused by a real shortage of water in a place, rather than by poverty or poor infrastructure.',
          'baseline': 'A starting point or reference level against which later measurements are compared.',
        },
        paragraphs: [
          'This briefing ranks countries by physical water stress in 2019 — the share of available water that is withdrawn each year for farming, industry and homes.',
          'Seventeen countries, home to a quarter of the world’s people, face extremely high water stress, withdrawing over 80% of their available supply every year.',
          'The most stressed countries are concentrated in the Middle East and North Africa: Qatar, Israel, Lebanon, Iran, Jordan, Libya, Kuwait, Saudi Arabia, Eritrea, the United Arab Emirates, San Marino, Bahrain, India, Pakistan, Turkmenistan, Oman and Botswana.',
          'India is highlighted as a special case: although its national stress is high, the briefing notes that more than 600 million Indians face acute water shortages in some regions.',
          'The figures are 2019 baseline values and describe only physical water stress — they do not show why each country is short of water, nor how shortages affect people’s daily lives.',
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Explain** one limitation of **Source F** from the perspective of an MYP year 3 student investigating the **causes** of water scarcity.',
        marks: 3,
        ph: 'One limitation for this student, with reasoning (e.g. it only ranks how stressed countries are, not why they are short of water — the student needs the causes for their investigation).',
      },
      {
        label: 'b',
        text: '**Explain** one limitation of **Source F** from the perspective of an Indian government official writing a report on the impacts of water shortages in India.',
        marks: 3,
        ph: 'One limitation for this official, with reasoning (e.g. the briefing is from 2019, so it is out of date; the official needs current figures or the report could be invalid).',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — benefits vs consequences of large dams',
    marks: 24,
    stem: '"Building large dams to supply water creates more benefits for societies than negative consequences." To what extent do you agree with this statement?',
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '"Building large dams to supply water creates more benefits for societies than negative consequences." **To what extent** do you agree with this statement?\n\n' +
          'In your essay, you must include:\n' +
          '• appropriate geographical terminology\n' +
          '• positive **and** negative consequences of building large dams\n' +
          '• examples from your MYP studies to support your arguments.',
        marks: 24,
        ph: 'A structured essay weighing positive and negative consequences of building large dams, with named examples and a clear conclusion. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
