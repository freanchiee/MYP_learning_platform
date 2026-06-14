import type { Question } from '@/lib/types'

/**
 * MYP Geography — May 2021 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Source: geogMOEENGTZ0XXXX (M21). Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 8) · Q4 (B, 12)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (D, 6) · Q7 (D, 6) · Q8 (24)
 *
 * Theme: land degradation/soil, Amazon deforestation & indigenous people, river/coastal
 * management (Portchester, UK), Philippines tectonics. Text/transcript sources are
 * transcribed as original extracts; visual sources become interactive artefacts wired via
 * the `artefact` field:
 *   Q1/Q2 → PieChart       (Source B — dual doughnut: land-degradation causes, Asia vs Australia)
 *   Q3    → ImageCompareSlider + InfoGraphicPanel (Source C Amazon before/after + the action plan)
 *   Q5    → DragAnnotate   (the Portchester river/coast scene — drag A/B onto threat locations)
 *   Q6/Q7 → LocatedMap     (Source D — Philippines layered GIS: plates/volcanoes/quakes/density)
 *
 * Source A (the soil video transcript) is transcribed into Q1's stem.
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
  id: 'geography-may-2021',
  subject: 'Geography',
  session: 'May',
  year: 2021,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// ── Source B — the dual doughnut chart (causes of land degradation, Asia vs Australia) ──
// Exact values read off the source. Asia = 370.3 Mha (118.8 + 111.5 + 96.7 + 42.3 + 1.0);
// Australia = 87.5 Mha (78.5 + 4.8 + 4.2). Colours match the legend swatches.
const sourceBAsia = {
  component: 'PieChart',
  caption:
    'Source B — main causes of land degradation in Asia, expressed in millions of hectares (Mha). Hover a slice to read its share. Asia total = 370.3 Mha.',
  data: {
    kind: 'doughnut' as const,
    title: 'Causes of land degradation — Asia (370.3 million ha)',
    source: 'Source B',
    unit: ' Mha',
    series: [
      { name: 'Overgrazing', value: 118.8, color: '#5b9bd5' },
      { name: 'Deforestation', value: 111.5, color: '#a9bd5f' },
      { name: 'Agricultural activities', value: 96.7, color: '#4f9d63' },
      { name: 'Over-exploitation of vegetation for domestic use', value: 42.3, color: '#e6c84a' },
      { name: 'Bio-industrial activities', value: 1.0, color: '#c0392b' },
    ],
  },
}
const sourceBAustralia = {
  component: 'PieChart',
  caption:
    'Source B — main causes of land degradation in Australia, in millions of hectares (Mha). Australia total = 87.5 Mha.',
  data: {
    kind: 'doughnut' as const,
    title: 'Causes of land degradation — Australia (87.5 million ha)',
    source: 'Source B',
    unit: ' Mha',
    series: [
      { name: 'Overgrazing', value: 78.5, color: '#5b9bd5' },
      { name: 'Agricultural activities', value: 4.8, color: '#4f9d63' },
      { name: 'Deforestation', value: 4.2, color: '#a9bd5f' },
    ],
  },
}

// ── Source D — the Philippines layered GIS map (reused by Q6 and Q7) ──
// REGION mode: real Philippines geometry. Layers communicate the GIS theme toggles.
// Markers: volcanoes (by eruption count), earthquakes (by magnitude) and the X/Y
// investment-decision boxes. Values transcribed from the source's layers + legends.
const sourceD = {
  component: 'LocatedMap',
  caption:
    'Source D — GIS-Education maps of tectonic activity in the Philippines (a destructive plate margin). Layers: tectonic plate boundaries · volcanic eruptions 1991–2019 · number of earthquakes 1991–2019 · population density (people per km²). Locations X and Y are the two candidate sites for earthquake-proof investment.',
  data: {
    title: 'Source D — Philippines tectonic-activity GIS',
    source: 'GIS-Education',
    region: 'Philippines',
    regionCountries: ['Philippines'],
    scaleKm: 300,
    north: true,
    locator: [122, 13] as [number, number],
    layers: [
      { id: 'plates', label: 'Tectonic plate boundaries', active: true },
      { id: 'volcanoes', label: 'Volcanic eruptions (1991–2019)', active: true },
      { id: 'quakes', label: 'Number of earthquakes (1991–2019)', active: true },
      { id: 'density', label: 'Population density (people per km²)', active: false },
    ],
    markers: [
      // Volcanic eruptions layer — colour by eruption-count class (red 20+, blue 11–19, green 3–9)
      { lon: 123.685, lat: 13.257, color: '#c0392b', glyph: '▲', layerId: 'volcanoes', label: 'Mayon (20+ eruptions)', detail: 'Volcanic eruptions 1991–2019: 20 or more.' },
      { lon: 120.35, lat: 15.13, color: '#1971c2', glyph: '▲', layerId: 'volcanoes', label: 'Pinatubo (11–19)', detail: 'Volcanic eruptions 1991–2019: 11–19. Erupted catastrophically in 1991.' },
      { lon: 123.132, lat: 10.412, color: '#1971c2', glyph: '▲', layerId: 'volcanoes', label: 'Canlaon (11–19)', detail: 'Volcanic eruptions 1991–2019: 11–19.' },
      { lon: 121.0, lat: 14.0, color: '#2f9e44', glyph: '▲', layerId: 'volcanoes', label: 'Taal (3–9)', detail: 'Volcanic eruptions 1991–2019: 3–9.' },
      { lon: 124.05, lat: 12.77, color: '#2f9e44', glyph: '▲', layerId: 'volcanoes', label: 'Bulusan (3–9)', detail: 'Volcanic eruptions 1991–2019: 3–9.' },
      // The two candidate investment locations
      { lon: 122.6, lat: 13.4, color: '#2f9e44', glyph: 'X', label: 'Location X', detail: 'Eastern seaboard, close to the plate boundary: frequent high-magnitude earthquakes near the epicentres and high population density (>400 per km²).' },
      { lon: 121.0, lat: 16.4, color: '#1971c2', glyph: 'Y', label: 'Location Y', detail: 'Northern Luzon, inland: fewer earthquakes since 1991 and lower population density.' },
    ],
    caption:
      'Earthquakes layer: blue = 5–6.4 magnitude, red = over 6.5 magnitude. Population-density layer shades from 0–50 to 801–1600 people per km². The same place is shown under each toggleable GIS layer.',
  },
}

export const questions: Question[] = [
  // ── Task 1 — Investigating (Criteria A + B) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Land degradation — reading data (Source B)',
    marks: 2,
    stem:
      'Land is an essential part of life on Earth — plants, animals and humans depend on it to stay alive. It is a source of food, our habitat and home to countless resources.\n\n' +
      'We all depend on soil. Even though it covers the Earth in a thin layer, it is the site of intensive activity and home to extremely rich ecosystems. It can take up to 500 years to create 2.5 centimetres of soil but just a few years to destroy it.\n\n' +
      'The evidence is clear that soil is being damaged. Today, 75 % of land on Earth is degraded, threatening the wellbeing of 3.2 billion people. This is occurring across the globe. Soil degradation is the decline in the overall quality of soil, which is commonly caused by human activities. We must take action. Soil must be protected. (Source A — video transcript)\n\n' +
      '**Source B** below shows the main causes of land degradation in Asia and Australia, expressed in millions of hectares (Mha).',
    artefact: sourceBAsia,
    tasks: [
      {
        label: 'a',
        text: 'Using the data from **Source B**, **identify** the biggest cause of land degradation in Asia.',
        marks: 1,
        ph: 'One cause — read the largest slice of the Asia doughnut. A one-word answer is acceptable. More than one answer scores 0.',
      },
      {
        label: 'b',
        text: 'Using the data from **Source B**, **identify** which region has the most total land degraded.',
        marks: 1,
        ph: 'One region — compare the two doughnut totals (Asia 370.3 Mha vs Australia 87.5 Mha). A one-word answer is acceptable.',
        // Source B presents both regions together; Asia is in the question context slot above,
        // Australia is shown here so the Asia-vs-Australia total comparison can be read directly.
        artefact: sourceBAustralia,
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Land degradation — human causes',
    marks: 4,
    stem: '**Source B** is repeated below for information.',
    artefact: sourceBAustralia,
    tasks: [
      {
        label: '',
        text: '**Explain** how one human activity causes land degradation.',
        marks: 4,
        ph: 'One human activity (e.g. overgrazing) considered in detail, with reasons — build from a single cause to a full chain of effects on the soil.',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — Amazon deforestation action plan',
    marks: 8,
    stem:
      'As part of a unit of inquiry, an MYP year 5 class in Brazil learned more about the effect of human actions on the rainforest biome and the identities of the people who live there. The class was shown **Source C** about the impact of deforestation on the indigenous people of the Amazon Rainforest in South America.\n\n' +
      '**Source C** is an interactive map revealing how changes in the Amazon Rainforest are impacting indigenous communities. Sliding between past and present reveals the lasting effects of deforestation. The map covers the Amazon basin across Colombia, Venezuela, Ecuador, Peru, Brazil and Bolivia, and marks indigenous communities, areas of deforestation and oil & gas development. Photo hotspots reveal: “The rainforest is being removed to make way for farming.”, “Access to water has decreased for many tribes.”, “Soil degradation is impacting food production.” and “Tribes have lost places that hold significant cultural value.”\n\n' +
      'Based on this source, the class decided to investigate how deforestation has changed the lives of indigenous people in the Amazon Rainforest. The class produced the action plan shown below to collect data. You will be asked to evaluate the action plan.',
    artefact: {
      component: 'ImageCompareSlider',
      caption:
        'Source C — the Amazon Rainforest before and after deforestation (original recreation). Drag the slider to reveal the lasting effects on indigenous communities.',
      data: {
        title: 'Source C — deforestation in the Amazon Rainforest',
        before: {
          label: 'Before',
          scene: 'rainforest',
          caption: 'Dense, intact rainforest across the Amazon basin; indigenous communities have water, food and culturally significant places.',
        },
        after: {
          label: 'After',
          scene: 'deforested',
          caption: 'Cleared land for farming; reduced water access, soil degradation harming food production, and the loss of culturally significant places for many tribes.',
        },
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the action plan.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the investigation, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2. You need not discuss every part of the plan.',
        artefact: {
          component: 'InfoGraphicPanel',
          caption: 'The MYP class’s action plan — the marked stimulus. Hover a stage to spotlight it.',
          data: {
            title: 'Class action plan — Amazon deforestation & indigenous people',
            source: 'MYP year 5 class, Brazil',
            intro:
              'Statement of inquiry: Change in the natural environment can impact human identities and relationships. · Research question: To what extent do changes in the natural environment impact human identities?',
            layout: 'flow',
            blocks: [
              {
                heading: 'Procedure',
                icon: '🗺',
                items: [
                  'Visit the 4 villages shown on the map [Source C] over two weeks and interview different families to understand how deforestation has changed their daily lives.',
                  'Soil samples will be collected and analysed for fertility.',
                ],
              },
              {
                heading: 'Sample size',
                icon: '👥',
                items: ['12 families total (3 families from each of the 4 villages).'],
              },
              {
                heading: 'Primary data',
                icon: '🧪',
                items: [
                  'Collect 5 soil samples from each village.',
                  'Ask open-ended questions: a) Do you eat different foods because of deforestation? b) Are there enough wild animals left to hunt? c) How has deforestation affected your children? d) How many sacred areas have been destroyed?',
                ],
              },
              {
                heading: 'Secondary data',
                icon: '📊',
                items: [
                  'Maps showing deforestation in the Amazon Rainforest.',
                  'Statistics on deforestation from wildlife organizations.',
                ],
              },
            ],
          },
        },
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — design your own (biome)',
    marks: 12,
    stem:
      'You have seen an investigation into deforestation in the rainforest biome in question 3. You will now design your own investigation into a different human activity that is changing a biome that you have studied.\n\n' +
      '**Statement of inquiry:** Human activities can change the natural environment.',
    tasks: [
      {
        label: 'a',
        text: 'Use the statement of inquiry to **formulate** a clear and focused research question for an investigation into a biome you have studied.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (names a human activity and a location) and connected to the statement of inquiry. Re-wording the SoI, or reusing the Q3 RQ, scores 0.',
      },
      {
        label: 'b',
        text: '**Justify** the relevance of the research question in 4(a) to the statement of inquiry.',
        marks: 4,
        ph: 'Build from stating relevance (1) → outlining (2) → describing a factor in detail (3) → justifying with reasoning (4) why the RQ connects to the SoI.',
      },
      {
        label: 'c',
        text: '**Outline** one challenge you might face in your investigation.',
        marks: 2,
        ph: 'State one challenge (1), then elaborate on the reason for it with brief detail (2), e.g. why collecting the relevant primary data would be difficult.',
      },
      {
        label: 'd',
        text: 'Excluding interviews, **explain** the benefit of using one other method of data collection in your investigation.',
        marks: 4,
        ph: 'Name one non-interview method (e.g. a survey) and explain its benefit in detail with reasons. Simply stating a method scores 0.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — Portchester river & coastal management',
    marks: 18,
    stem:
      'The diagram below shows the community of Portchester, a town in the United Kingdom. You have been asked to create a presentation for the local government. Your aim is to persuade the government officials to adopt sustainable management strategies for the river **and/or** coastal system in Portchester.\n\n' +
      'You will use the diagram below to support your presentation. Drag and drop the labels **A** and **B** to show the locations of **two** threats to the river **and/or** coastal system in Portchester that your presentation will focus on (for example A = agricultural run-off, B = coastal erosion). Then write your script.',
    artefact: {
      component: 'DragAnnotate',
      caption:
        'The Portchester river–coast scene — drag labels A and B onto the two threat locations you will focus on, then build a key for them (e.g. A = agricultural run-off; B = coastal erosion).',
      data: {
        title: 'Portchester — river and coastal system',
        prompt: 'Place A and B on the two threat locations your presentation will focus on, then refer to them in your script.',
        mode: 'annotate' as const,
        scene: 'river-coast',
        sceneHint: 'A river meeting the ocean: an industrial city upstream, farmland with livestock, a water-treatment works, a coastal village, woodland and a beach spit with shipping.',
        chips: [
          { id: 'A', text: 'A' },
          { id: 'B', text: 'B' },
        ],
        targets: [
          { id: 't-farm', x: 24, y: 34, label: 'Farmland / livestock (run-off)' },
          { id: 't-city', x: 12, y: 64, label: 'Industrial city (pollution)' },
          { id: 't-works', x: 44, y: 30, label: 'Water-treatment works' },
          { id: 't-beach', x: 86, y: 58, label: 'Beach spit (coastal erosion)' },
          { id: 't-port', x: 70, y: 26, label: 'Shipping / port' },
        ],
        showScore: false,
      },
    },
    tasks: [
      {
        label: '',
        text:
          'Write a script for your persuasive presentation to **explain** the sustainable management strategies you would recommend to address the two threats you have identified.\n\n' +
          'In your script, you must include:\n' +
          '• examples from your MYP studies\n' +
          '• reference(s) to your labelled diagram\n' +
          '• a concluding statement or summary.',
        marks: 18,
        ph: 'A persuasive presentation script explaining sustainable management strategies for the two labelled threats, with MYP examples, references to A/B and a closing summary. Marked: Knowledge (Crit A /6), Format /2, Communicating /6, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Source evaluation — Philippines GIS map',
    marks: 6,
    stem:
      'The maps below were produced by **GIS-Education**, a global mapping company. They show tectonic activity in the Philippines, a country in Southeast Asia. The Philippines is located on a destructive plate margin.\n\n' +
      'Use the toggleable GIS layers in **Source D** (tectonic plate boundaries · volcanic eruptions 1991–2019 · number of earthquakes 1991–2019 · population density) to answer the parts below.',
    artefact: sourceD,
    tasks: [
      {
        label: 'a',
        text: 'Using the **volcanic eruptions** layer of **Source D**, **identify** the number of volcanoes in the Philippines that have erupted between 11 and 19 times.',
        marks: 1,
        ph: 'Read the volcanic-eruptions layer — count the volcanoes in the 11–19 eruption class (the blue volcano symbols, i.e. Pinatubo and Canlaon).',
      },
      {
        label: 'b',
        text: '**State** the origin of **Source D**.',
        marks: 1,
        ph: 'Name who produced the source (read the source attribution).',
      },
      {
        label: 'c',
        text: '**Outline** one value of **Source D** to a resident living in the Philippines.',
        marks: 2,
        ph: 'State one value of the map to a resident (1), then give a brief reason / elaboration (2), e.g. they can judge the risk and decide whether to live there.',
      },
      {
        label: 'd',
        text: '**Outline** one limitation of **Source D** for a resident living in the Philippines.',
        marks: 2,
        ph: 'State one limitation (1), then elaborate with brief detail (2), e.g. the map does not show the impacts of the tectonic activity such as deaths.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Justify — earthquake-proof investment (X or Y)',
    marks: 6,
    stem:
      'The government of the Philippines has decided to invest in earthquake-proof structures. They need to decide whether to invest in **location X** or **location Y**. These locations are marked on the map in **Source D** (repeated below for information). Use the earthquakes and population-density layers to compare the two sites.',
    artefact: sourceD,
    tasks: [
      {
        label: '',
        text: 'Using evidence from **Source D**, **justify** which location the government should invest in.',
        marks: 6,
        ph: 'Choose X or Y and justify it with in-depth, specific evidence from the map (earthquake frequency/magnitude, proximity to epicentres, population density). Simply selecting a location scores 0.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — primary vs secondary tectonic effects',
    marks: 24,
    tasks: [
      {
        label: '',
        text:
          'In a well-structured essay, answer the following question:\n\n' +
          '**To what extent** do secondary effects of tectonic activity pose a greater risk to people and property than primary effects?\n\n' +
          'In your essay, you must:\n' +
          '• include examples from your MYP studies to support your arguments\n' +
          '• refer to volcanic activity and/or earthquakes\n' +
          '• consider different perspectives.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing secondary vs primary tectonic effects, with ≥2 perspectives, named tectonic examples and geographical terms. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
