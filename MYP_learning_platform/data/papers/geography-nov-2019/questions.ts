import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2019 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Source: geogmmoeengtz0xxm (N19). Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (C, 2) · Q7 (C, 4) · Q8 (C, 6) · Q9 (24)
 *
 * Theme: natural resources & disasters — renewable/non-renewable energy, resource
 * scarcity, the Grand Ethiopian Renaissance Dam (GERD) & Nile water cooperation,
 * overtourism, disaster vulnerability, and technology/mitigation in disaster management.
 * Text/audio/video sources are transcribed as original extracts; visual sources become
 * interactive artefacts wired via the `artefact` field:
 *   Q1 → DragAnnotate (classify)  — Coal/Geothermal/Solar/Oil/Wind → Renewable/Non-renewable bins
 *   Q3 → SlideDeck + SourceDocViewer — the "Water Management" tablet action plan + GERD video transcript
 *   Q5 → SlideDeck + SourceDocViewer — overtourism video transcript + 4-image petition builder + TV interview
 *   Q6 → InteractiveChart — Source A, global deaths from natural disasters 1900s–2010s (exact values)
 *   Q7 → VennOverlap — Source B, natural disaster factors ∩ vulnerability → "Greater risk"
 *   Q8 → SlideDeck — Source C, the "Wildfire Alert" mobile-app screens (Portugal)
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
  id: 'geography-nov-2019',
  subject: 'Geography',
  session: 'November',
  year: 2019,
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
    topic: 'Natural resources — renewable & non-renewable',
    marks: 2,
    stem:
      'Natural energy resources can be classified as renewable or non-renewable.\n\n' +
      'Select four appropriate images and drag and drop them to complete the “Natural energy resources” diagram — sorting each into the correct category.',
    artefact: {
      component: 'DragAnnotate',
      caption: 'Drag each energy resource into the correct category. Renewable: wind, geo-thermal, solar. Non-renewable: coal, oil.',
      data: {
        title: 'Natural energy resources',
        prompt: 'Sort each draggable energy resource into the correct category. Four correctly positioned = 2 marks; two/three = 1 mark.',
        mode: 'classify',
        showScore: true,
        chips: [
          { id: 'coal', text: 'Coal', imageHint: 'Photo of coal / open-cast coal mining' },
          { id: 'geothermal', text: 'Geothermal', imageHint: 'Photo of a geothermal power station venting steam' },
          { id: 'solar', text: 'Solar', imageHint: 'Photo of a solar panel array' },
          { id: 'oil', text: 'Oil', imageHint: 'Photo of an offshore oil rig' },
          { id: 'wind', text: 'Wind', imageHint: 'Photo of wind turbines' },
        ],
        bins: [
          { id: 'non-renewable', label: 'Non-renewable resources', correctLabelIds: ['coal', 'oil'] },
          { id: 'renewable', label: 'Renewable resources', correctLabelIds: ['wind', 'geothermal', 'solar'] },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Select** four appropriate images and drag and drop to complete the diagram, sorting them into renewable and non-renewable resources.',
        marks: 2,
        ph: 'Renewable: wind, geo-thermal, solar. Non-renewable: coal, oil. Four correct = 2; two/three correct = 1.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Causes of resource scarcity',
    marks: 4,
    stem: 'Natural resources can become scarce.',
    tasks: [
      {
        label: '',
        text:
          'Using an example from your MYP studies, **explain** one factor that can cause scarcity of natural resources.',
        marks: 4,
        ph: 'Explain one factor (e.g. population growth) with reasons and a named example. No example → max 3 marks.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — GERD / Nile water cooperation',
    marks: 8,
    stem:
      'Watch the video below and answer the questions that follow.\n\n' +
      'The Grand Ethiopian Renaissance Dam (GERD) will be Africa’s most important source of hydroelectric power. There are concerns from the other countries along the Nile River.\n\n' +
      'Ethiopia, Sudan and Egypt have hired a consultant who specializes in water management to help them reach an agreement about the Grand Ethiopian Renaissance Dam. The consultant’s investigation action plan is shown on the tablet below — click the buttons to show more information. You will be asked to evaluate this action plan.',
    artefact: {
      component: 'SlideDeck',
      caption: 'The water-management consultant’s action plan (tablet tabs: Research question · Interview · Further research). This action plan is the marked stimulus.',
      data: {
        title: 'Water Management — investigation action plan',
        source: 'Consultant tablet · Action Plan app',
        slides: [
          {
            title: 'Research question',
            body:
              'Statement of inquiry: “Natural resources can be shared more fairly through cooperation.”\n\n' +
              'Research question: “To what extent can cooperation between countries lead to fair distribution of water?”',
          },
          {
            title: 'Interview',
            body: 'Interview with the Ethiopian minister of water and energy.',
            bullets: [
              '1. When will the dam be finished?',
              '2. Why is the construction of the dam so important for Ethiopia?',
              '3. How will the construction of the dam impact the natural cycle of the Nile River?',
              '4. What benefits will the dam bring to Egypt and Sudan?',
            ],
          },
          {
            title: 'Further research',
            body:
              '1. Discuss with stakeholders what impact the Grand Ethiopian Renaissance Dam would have on:',
            bullets: [
              'share of water',
              'economic development',
              'the natural environment in the region',
              '2. www.UNwater.org — for information on how the United Nations informs policies, monitors and reports on water issues and inspires action.',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the consultant’s action plan.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the investigation, then give an overall appraisal. Marked: Strengths /3, Limitations /3, Appraisal /2.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — natural resource management',
    marks: 12,
    stem:
      'Now that you have evaluated the consultant’s action plan in question 3, you will take on the role of a researcher who has been asked to plan an investigation into issues relating to natural resource management.\n\n' +
      'The following is the statement of inquiry you need to base your investigation on:\n\n' +
      '**Statement of inquiry:** “The extraction of natural resources can have a great impact on human and natural environments.”',
    tasks: [
      {
        label: 'a',
        text: 'With reference to the statement of inquiry, **formulate** a clear and focused research question.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (e.g. names a location/place) and clearly connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** the relevance of your research question to the statement of inquiry.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is relevant to the SoI — build from a simple connection to a fully justified one.',
      },
      {
        label: 'c',
        text: '**List** two relevant methods for collecting information/data for your investigation.',
        marks: 2,
        ph: 'Two valid methods (e.g. interviews; questionnaire/survey; library/internet research). 1 mark each.',
      },
      {
        label: 'd',
        text: '**Outline** how one of the methods listed in part (c) could be useful to your investigation.',
        marks: 2,
        ph: 'Elaborate, with brief detail, on how your chosen method is useful (e.g. a Skype interview gives primary data from an expert).',
      },
      {
        label: 'e',
        text: '**Outline** one challenge you might face while collecting information/data for your investigation.',
        marks: 2,
        ph: 'Elaborate, with brief detail, on one possible challenge (e.g. unreliable data because companies may not publish it).',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — overtourism petition & TV interview',
    marks: 18,
    stem:
      'Watch the video report on overtourism, then read the transcript below.\n\n' +
      'The video report has inspired you to start a petition to convince world leaders to take action and protect natural environments. You will: write a title for your petition, choose one image to be shown on it and write a caption, and then give a TV interview to persuade people to sign.',
    artefact: {
      component: 'SlideDeck',
      caption: 'Overtourism video transcript and the four draggable images for your petition (choose one). Recreated as original artefact.',
      data: {
        title: 'Overtourism — video report transcript & petition images',
        source: 'Video report · petition builder',
        slides: [
          {
            title: 'Video report transcript',
            bullets: [
              'All over the world, natural environments are coming under threat from ‘overtourism’. This is when popular destinations become overrun with tourists in an unsustainable way.',
              'In many countries, governments are thinking about controlling the number of tourists who can visit.',
              'Even in remote places such as Mount Everest in Nepal, thousands of tonnes of rubbish and human waste are left each year by climbers and tourists.',
              'On the Galapagos Islands, part of Ecuador, many of the unique species there are threatened by pollution and disturbance caused by tourists.',
              'Tourism is contributing to the loss of coral on the Great Barrier Reef off the coast of Australia.',
              'Some beaches on the Mediterranean coast have become so overcrowded that pollution from plastics and waste is causing severe damage to the sea and marine wildlife.',
              'If something is not done urgently, these natural environments will be lost to future generations.',
            ],
          },
          {
            title: 'Petition images — choose ONE',
            body: 'Drag and drop to choose one image to be shown on your petition (banner reads “Sign the Petition now!”).',
            bullets: [
              'Image 1: A turtle and snorkeller in clear tropical water (a delicate marine environment).',
              'Image 2: Tourists posing with giant tortoises on the Galápagos Islands.',
              'Image 3: A heavily overcrowded beach packed with sunbathers and umbrellas.',
              'Image 4: A person in a wedding dress on a snowy mountainside surrounded by tourist litter (Mount Everest).',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Build your petition and then give your TV interview.\n\n' +
          'You must:\n' +
          '• write an appropriate **title** for your petition\n' +
          '• choose **one** image and write a brief **caption** to help persuade people to sign\n' +
          '• in the interview, **explain** to viewers how natural environments are threatened by overtourism and how this can be managed sustainably for future generations, referring to examples from your MYP studies.',
        marks: 18,
        ph: 'A titled, captioned petition + a persuasive TV interview explaining overtourism threats and sustainable management, with examples. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Reading data — global disaster deaths 1900–2015',
    marks: 2,
    stem:
      'Using data from **Source A**, you will describe the trend in global deaths from natural disasters between the 1900s and 2010s.\n\n' +
      'The number of deaths is given as an average per decade (by decade 1900s to 2000s; and then six years from 2010 to 2015). Use the timeline slider on the chart to show the data.',
    artefact: {
      component: 'InteractiveChart',
      caption: 'Source A — Global deaths from natural disasters by decade. The 1900s show 153,678 deaths / 5 disasters; the 2010s ≈ 68,748 deaths. Deaths (red) fall while the number of recorded disasters (blue) rises.',
      data: {
        kind: 'line',
        title: 'Global deaths from natural disasters',
        source: 'Source A (recreated)',
        x: {
          label: 'Decade',
          categories: ['1900s', '1910s', '1920s', '1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s'],
        },
        y: { label: 'Number of reported deaths', min: 0, max: 550000, ticks: [0, 100000, 200000, 300000, 400000, 500000], unit: 'deaths' },
        series: [
          {
            name: 'Number of reported deaths',
            color: '#e03131',
            points: [153678, 25000, 520000, 460000, 370000, 215000, 165000, 90000, 65000, 25000, 70000, 68748],
          },
          {
            name: 'Number of natural disasters (×1000, scaled)',
            color: '#1971c2',
            // disasters per decade scaled ×1000 so they sit on the same axis: 5 → 5000 … ~430 → 430000
            points: [5000, 8000, 12000, 16000, 14000, 20000, 35000, 95000, 205000, 290000, 460000, 420000],
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'Using data from **Source A**, **outline** the trend in global deaths from natural disasters between the 1900s and 2010s.',
        marks: 2,
        ph: 'State the trend (it has decreased) and reference data, e.g. “decreased from 153,678 to 68,748”.',
      },
    ],
  },
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Disaster risk — factors & vulnerability',
    marks: 4,
    stem:
      'With reference to **Source B** below, you will describe the relationship between natural disaster factors and vulnerability.\n\n' +
      'Source B is a Venn diagram. Where natural disaster factors (magnitude, frequency) overlap with vulnerability (population density, management strategies), the result is a “Greater risk”.',
    artefact: {
      component: 'VennOverlap',
      caption: 'Source B — the overlap of natural disaster factors and vulnerability produces “Greater risk”.',
      data: {
        title: 'Source B — Natural disaster factors & vulnerability',
        source: 'Source B',
        setA: { label: 'Natural disaster factors', items: ['Magnitude', 'Frequency'], color: '#2f9e44' },
        setB: { label: 'Vulnerability', items: ['Population density', 'Management strategies'], color: '#f08c00' },
        overlapLabel: 'Greater risk',
        caption: 'Risk is a product of both the natural disaster factors AND the vulnerability of the area where the hazard occurs.',
      },
    },
    tasks: [
      {
        label: '',
        text: 'With reference to **Source B**, **describe** the relationship between natural disaster factors and vulnerability.',
        marks: 4,
        ph: 'Describe in detail how the disaster factors (magnitude, frequency) and vulnerability (population density, management) combine to produce greater or lesser risk.',
      },
    ],
  },
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Source evaluation — Wildfire Alert app',
    marks: 6,
    stem:
      'The mobile phone app shown in **Source C** (the “Wildfire Alert” app) provides users with information on wildfires across Portugal. It gives access to satellite images, maps and photos taken by other app users. Use the mobile phone app below to show more information.',
    artefact: {
      component: 'SlideDeck',
      caption: 'Source C — the “Wildfire Alert” mobile-app screens (home menu · satellite images · maps · user photos). Recreated as an original artefact.',
      data: {
        title: 'Source C — “Wildfire Alert” app · The app to keep you safe',
        source: 'Source C · mobile app mockup',
        slides: [
          {
            title: 'Home menu',
            body: 'The app home screen — three sections plus a status bar.',
            bullets: [
              'Satellite images',
              'Maps',
              'Photos',
              'Status: “Last updated: 3 hours ago”',
              'Bottom navigation icons: satellite · map · camera',
            ],
          },
          {
            title: 'Satellite images',
            body: 'A satellite view of Portugal with active wildfires marked by flame icons.',
            bullets: [
              'Three active wildfires shown by yellow-circled flame markers (north-west, central, and southern Portugal).',
              'Last updated: 3 hours ago',
            ],
          },
          {
            title: 'Maps',
            body: 'A street/road map of southern Portugal (the Algarve region) with the same wildfires plotted.',
            bullets: [
              'Three flame markers plotted on the road map near towns such as Portimão and Lagos.',
              'A magnifying-glass (zoom/search) tool.',
              'Last updated: 3 hours ago',
            ],
          },
          {
            title: 'Photos',
            body: 'Photographs uploaded by other app users.',
            bullets: [
              'A forest wildfire burning through trees.',
              'A fire spreading near greenhouses/buildings, with thick smoke.',
              'Last updated: 3 hours ago',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Describe** one value of the Wildfire Alert app for local residents.',
        marks: 3,
        ph: 'Describe one value in detail (e.g. satellite images, maps and photos let residents assess the danger and decide whether to evacuate).',
      },
      {
        label: 'b',
        text: '**Describe** one limitation of the Wildfire Alert app for local residents.',
        marks: 3,
        ph: 'Describe one limitation in detail (e.g. it does not show wind direction/speed, so residents cannot tell if the fire is moving towards them).',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — technology & disaster impacts in HICs',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'Write a well-structured essay to answer the following question:\n\n' +
          '**To what extent** has technology reduced the impacts of natural disasters in highly industrialized countries (HICs)?\n\n' +
          'In your essay, you must:\n' +
          '• use examples from your MYP studies\n' +
          '• consider different perspectives/factors.',
        marks: 24,
        ph: 'A structured essay weighing how far technology has reduced disaster impacts in HICs, with ≥2 perspectives and named examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
