import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2019 · ISOMORPHIC VARIANT 2 (geography-nov-2019-v2)
 * Subject group: Individuals & Societies · Course: Geography
 * Construct-identical to geography-nov-2019. Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (C, 2) · Q7 (C, 4) · Q8 (C, 6) · Q9 (24)
 *
 * NEW scenario (genuinely different surface, same assessed skills/commands):
 * mineral, forest & water resources and drought resilience in Sub-Saharan / Southern
 * Africa — energy-resource classification, groundwater over-abstraction scarcity,
 * transboundary cooperation over the Okavango River Basin, charcoal-deforestation
 * campaigning, drought risk & vulnerability, and locust/drought early-warning technology.
 *
 * I&S carve-out: each artefact-bearing question presents the new scenario through a
 * DIFFERENT, scenario-appropriate `component` than BOTH the source AND v1 used for that
 * question (v2 ≠ v1 ≠ source per question; the chosen component still supports the
 * command/stimulus ROLE):
 *   Q1 → VennOverlap        [source DragAnnotate · v1 InfoGraphicPanel]  classify energy → renewable/non-renewable
 *   Q3 → TimelineScrubber   [source SlideDeck · v1 InfoGraphicPanel]     dated river-basin investigation action plan
 *   Q5 → InfoGraphicPanel   [source SlideDeck · v1 SourceDocViewer]      charcoal-deforestation campaign poster
 *   Q6 → PieChart           [source InteractiveChart · v1 DataTableInteractive]  value-read first-vs-last decade death share
 *   Q7 → InfoGraphicPanel   [source VennOverlap · v1 NetworkGraph]       hazard factors + vulnerability → greater risk (flow)
 *   Q8 → SourceDocViewer    [source SlideDeck · v1 DataTableInteractive] "DroughtAlert" app as an evaluable source
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
  id: 'geography-nov-2019-v2',
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
      'Select four appropriate resources and complete the “Natural energy resources” diagram — sorting each into the correct category. The Venn diagram below shows the two categories; place each resource in the correct circle.',
    artefact: {
      component: 'VennOverlap',
      caption: 'Classify each energy resource into the correct category. Renewable: solar, hydro-electric, biomass. Non-renewable: natural gas, uranium.',
      data: {
        title: 'Natural energy resources',
        source: 'Classification diagram',
        setA: { label: 'Renewable resources', items: ['Solar', 'Hydro-electric', 'Biomass'], color: '#2f9e44' },
        setB: { label: 'Non-renewable resources', items: ['Natural gas', 'Uranium'], color: '#e8590c' },
        overlapLabel: '',
        caption: 'Renewable resources are replenished within a human lifetime; non-renewable resources are used faster than they can be replaced. Four correctly placed = 2 marks; two/three = 1 mark.',
      },
    },
    tasks: [
      {
        label: '',
        text: '**Select** four appropriate resources and complete the diagram, sorting them into renewable and non-renewable resources.',
        marks: 2,
        ph: 'Renewable: solar, hydro-electric, biomass. Non-renewable: natural gas, uranium. Four correct = 2; two/three correct = 1.',
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
        ph: 'Explain one factor (e.g. over-abstraction of groundwater) with reasons and a named example. No example → max 3 marks.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — Okavango Basin / transboundary water cooperation',
    marks: 8,
    stem:
      'Study the investigation action plan below and answer the question that follows.\n\n' +
      'The Okavango River rises in the highlands of Angola and flows through Namibia before forming the Okavango Delta, a unique inland wetland in Botswana. Angola plans to build dams and expand irrigation upstream; Namibia wants to pipe water to its dry interior; and Botswana fears the Delta and its tourism economy could dry out.\n\n' +
      'Angola, Namibia and Botswana have hired a consultant who specializes in water management to help them reach an agreement about sharing the river. The consultant’s investigation action plan is shown on the dated timeline below — drag the handle or click a marker to read each planned stage. You will be asked to evaluate this action plan.',
    artefact: {
      component: 'TimelineScrubber',
      caption: 'The water-management consultant’s investigation action plan, laid out as a dated schedule (Research question → Interview → Further research → Report). This action plan is the marked stimulus.',
      data: {
        title: 'Water Management — investigation action plan',
        source: 'Consultant · scheduled action plan',
        events: [
          {
            date: 'Week 1',
            label: 'Research question',
            detail:
              'Statement of inquiry: “Natural resources can be shared more fairly through cooperation.” Research question set for the investigation: “To what extent can cooperation between countries lead to fair distribution of water?”',
          },
          {
            date: 'Week 3',
            label: 'Interview',
            detail:
              'Interview the Botswana Minister of Water and Tourism. Questions: 1. When will an agreement be reached? 2. Why is the Delta so important for Botswana? 3. How will upstream dams affect the natural flow of the river? 4. What benefits would a shared agreement bring to Angola and Namibia?',
          },
          {
            date: 'Week 5',
            label: 'Further research',
            detail:
              'Discuss with stakeholders the impact of an upstream dam on: the share of water; economic development (irrigation and tourism); the natural wetland environment. Use www.UNwater.org for UN information on how shared rivers are monitored and managed.',
          },
          {
            date: 'Week 7',
            label: 'Report',
            detail:
              'Write up findings and recommend a cooperation agreement to the three governments.',
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
        ph: 'Elaborate, with brief detail, on how your chosen method is useful (e.g. a video interview gives primary data from an expert).',
      },
      {
        label: 'e',
        text: '**Outline** one challenge you might face while collecting information/data for your investigation.',
        marks: 2,
        ph: 'Elaborate, with brief detail, on one possible challenge (e.g. unreliable data because mining companies may not publish it).',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — charcoal-deforestation petition & TV interview',
    marks: 18,
    stem:
      'Read the campaign poster below, then build your campaign.\n\n' +
      'The poster has inspired you to start a petition to convince world leaders to take action and protect natural environments from deforestation. You will: write a title for your petition, choose one image idea to be shown on it and write a caption, and then give a TV interview to persuade people to sign.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Charcoal & deforestation campaign poster (facts panel). The four image ideas for your petition are in the final panel — choose one.',
      data: {
        title: 'Forests in Flames — charcoal & deforestation',
        source: 'Forest Futures coalition · campaign poster',
        intro:
          'All over the world, forests are coming under threat from unsustainable demand for fuel-wood and charcoal. This is when woodland is cleared faster than it can ever grow back. Hover or tap a panel to focus on it; the last panel lists the image ideas for your petition.',
        layout: 'grid',
        blocks: [
          {
            heading: 'Why it is happening',
            icon: '🪓',
            items: [
              'Across sub-Saharan Africa, most households still cook on charcoal and fuel-wood.',
              'As cities grow, demand for charcoal rises faster than forests can regrow.',
            ],
            note: 'Governments are now considering licensing charcoal producers and promoting clean cook-stoves.',
          },
          {
            heading: 'The damage',
            icon: '🌍',
            items: [
              'In the Congo Basin and Tanzania, forest loss is destroying habitat for endangered species such as chimpanzees and elephants.',
              'Cleared, bare soil is washed away, silting rivers and reducing the land’s ability to recover.',
            ],
            note: 'Forests that store carbon and hold soil together are being lost.',
          },
          {
            heading: 'Why it matters',
            icon: '⏳',
            items: [
              'Losing tree cover makes droughts worse and removes a natural defence against climate change.',
              'If something is not done urgently, these natural environments will be lost to future generations.',
            ],
            note: 'Sustainable management means replanting and using fuel more efficiently.',
          },
          {
            heading: 'Image ideas — choose ONE',
            icon: '🖼️',
            items: [
              'Image 1: a single tree left standing in a vast cleared, smoking hillside.',
              'Image 2: women carrying heavy bundles of fuel-wood across dry, eroded land.',
              'Image 3: sacks of charcoal stacked at a roadside market in a city.',
              'Image 4: a chimpanzee looking out from the last fringe of forest beside a bare field.',
            ],
            note: 'Drag your chosen image idea onto the petition banner: “Sign the Petition now!”',
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
          '• choose **one** image idea and write a brief **caption** to help persuade people to sign\n' +
          '• in the interview, **explain** to viewers how natural environments are threatened by deforestation and how this can be managed sustainably for future generations, referring to examples from your MYP studies.',
        marks: 18,
        ph: 'A titled, captioned petition + a persuasive TV interview explaining deforestation threats and sustainable management, with examples. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Reading data — global drought deaths 1900–2015',
    marks: 2,
    stem:
      'Using data from **Source A**, you will describe the trend in global deaths from droughts between the 1900s and 2010s.\n\n' +
      'The chart below shows the share of recorded drought deaths by era; the exact totals are given in the legend. Compare the first decade (1900s) with the last (2010s) to describe the trend. Hover a segment to read its share.',
    artefact: {
      component: 'PieChart',
      caption: 'Source A — Global deaths from droughts, first decade vs last decade. The 1900s show 1,267,000 deaths; the 2010s ≈ 22,000 deaths. The share of deaths has fallen dramatically over the period.',
      data: {
        kind: 'doughnut',
        title: 'Source A — Global deaths from droughts (1900s vs 2010s)',
        source: 'Source A (recreated)',
        unit: ' deaths',
        series: [
          { name: '1900s (first decade)', value: 1267000, color: '#e03131' },
          { name: '2010s (last decade)', value: 22000, color: '#1971c2' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'Using data from **Source A**, **outline** the trend in global deaths from droughts between the 1900s and 2010s.',
        marks: 2,
        ph: 'State the trend (it has decreased) and reference data, e.g. “decreased from 1,267,000 to 22,000”.',
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
      'With reference to **Source B** below, you will describe the relationship between natural hazard factors and vulnerability.\n\n' +
      'Source B is a process panel. Where natural hazard factors (magnitude, frequency) combine with vulnerability (population density, management strategies), the result is a “Greater risk”. Hover or click a stage to read its detail.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source B — natural hazard factors and vulnerability combine to produce “Greater risk”.',
      data: {
        title: 'Source B — Natural hazard factors & vulnerability',
        source: 'Source B',
        intro: 'Risk is a product of BOTH the natural hazard factors AND the vulnerability of the area where the hazard occurs.',
        layout: 'flow',
        blocks: [
          {
            heading: 'Natural hazard factors',
            items: [
              'Magnitude — how powerful the hazard is; a larger magnitude tends to increase risk, especially in a densely populated area.',
              'Frequency — how often it happens; frequent events can mean a population is better prepared, except in an extremely high-magnitude event.',
            ],
            note: 'These describe the hazard itself.',
          },
          {
            heading: 'Vulnerability',
            items: [
              'Population density — how many people are exposed; a densely populated area raises the potential impact.',
              'Management strategies — preparation and response; effective management can reduce the risk even when the magnitude is great.',
            ],
            note: 'These describe the exposed community.',
          },
          {
            heading: 'Greater risk',
            items: [
              'Where powerful or frequent hazards meet high density and weak management, risk is greatest.',
              'Where management is strong, the same hazard can produce far less risk.',
            ],
            note: 'The outcome of factors AND vulnerability combined.',
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'With reference to **Source B**, **describe** the relationship between natural hazard factors and vulnerability.',
        marks: 4,
        ph: 'Describe in detail how the hazard factors (magnitude, frequency) and vulnerability (population density, management) combine to produce greater or lesser risk.',
      },
    ],
  },
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Source evaluation — DroughtAlert app',
    marks: 6,
    stem:
      'The mobile phone app described in **Source C** (the “DroughtAlert” app) provides users with information on droughts across Kenya. It gives access to satellite images, rainfall maps and photos taken by other app users. Read the description below as a source — use the evaluation lenses to weigh what it does and does not tell residents.',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'Source C — a description of the “DroughtAlert” mobile app (what each screen shows, and what it does NOT show). Recreated as an original evaluable source.',
      data: {
        title: 'Source C — “DroughtAlert” app · The app to keep you prepared',
        kind: 'Secondary source · app description',
        attribution: 'DroughtAlert · product description, recreated as an original artefact',
        glossary: {
          'satellite images': 'pictures of the ground taken from space, used to see where vegetation is drying out',
          'rainfall map': 'a map showing how much rain has fallen across different areas',
          'evapotranspiration': 'the rate at which water is lost from soil and plants — a key sign of drought stress',
        },
        paragraphs: [
          'The DroughtAlert app keeps Kenyan farmers and herders informed about developing droughts. From the home menu, users can open three sections — satellite images, a rainfall map, and photos uploaded by other users — and a status bar shows the data was “last updated 3 hours ago”.',
          'The satellite images section shows a view of Kenya with three areas of severe vegetation stress marked by yellow circles, in the north, east and the central Rift Valley.',
          'The rainfall map shows the same regions on a road map near towns such as Marsabit and Garissa, with a zoom tool, so users can see which districts have had the least rain.',
          'The photos section shows pictures uploaded by other users — dried-up boreholes and thin cattle searching for grazing.',
          'However, the app does NOT show how long the drought is forecast to last, the rate of evapotranspiration, or where emergency water and food aid can be collected, so residents cannot tell from it alone whether or when they should move their herds.',
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Describe** one value of the DroughtAlert app for local residents.',
        marks: 3,
        ph: 'Describe one value in detail (e.g. satellite images, rainfall maps and photos let residents assess the danger and decide whether to move their herds to safer grazing).',
      },
      {
        label: 'b',
        text: '**Describe** one limitation of the DroughtAlert app for local residents.',
        marks: 3,
        ph: 'Describe one limitation in detail (e.g. it does not forecast how long the drought will last, so residents cannot plan when to move).',
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
