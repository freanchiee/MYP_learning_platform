import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2020 · ISOMORPHIC VARIANT 1 (geography-nov-2020-v1)
 * Subject group: Individuals & Societies · Course: Geography
 * Construct mirror of geography-nov-2020 (same crit / command terms / marks / task
 * shape). Surface is a NEW scenario and — per the I&S carve-out — every artefact-bearing
 * question is presented through a DIFFERENT component than the source uses:
 *   Q1/Q2  source InfoGraphicPanel → DataTableInteractive (Source A — Japan→Kenya WASH indicators)
 *   Q1a    source PieChart `pie`   → InteractiveChart `bar`   (aid funding by category, Water & Sanitation 54%)
 *   Q4     source InfoGraphicPanel → TimelineScrubber          (dated action plan)
 *   Q5a    source DragAnnotate     → DragAnnotate              (unique drag-annotate role; NEW scenario: Japan / Chile)
 *   Q6     source SourceDocViewer  → SlideDeck                 (water-cycle / climate video transcript)
 *   Q6a    source PieChart `nested`→ InteractiveChart `bar`    (Source D — water footprint vs population share)
 *   Q7     source InfoGraphicPanel → NetworkGraph              (Source E — mitigation vs adaptation strategy network)
 *   Q8     source PieChart `nested`→ InteractiveChart `bar`    (Source D repeated)
 *
 * NEW theme: globalization & aid (Japan → Kenya, clean water & sanitation);
 * tectonic hazards (Japan convergent / Chile); climate change & water footprints.
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
  id: 'geography-nov-2020-v1',
  subject: 'Geography',
  session: 'November',
  year: 2020,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// ── Shared artefact data ───────────────────────────────────────────────────
// Source A — development-indicator table for Japan→Kenya WASH aid (Q1/Q2 read off it).
// Component swap: source uses InfoGraphicPanel → here DataTableInteractive.
const SOURCE_A_TABLE = {
  component: 'DataTableInteractive',
  caption:
    'Source A — Aid from Japan to Kenya. Click a row to pin it. In 2019, the focus of Japan’s aid programme was to increase access to clean water and sanitation in Kenya.',
  data: {
    title: 'Source A — Aid from Japan to Kenya (development indicators)',
    source: 'Japanese aid programme (2019)',
    caption:
      'Japan provides aid to support Kenya’s development. Japan works in partnership with the people of Kenya to decide where aid is needed most. Quick facts (2019): 38,500 people gained access to a safe water point · 142 boreholes drilled · 410 latrines built · 320 community health volunteers trained. SDGs supported: SDG 3 Good Health and Well-being · SDG 6 Clean Water and Sanitation · SDG 5 Gender Equality · SDG 8 Decent Work · SDG 9 Industry, Innovation and Infrastructure · SDG 10 Reduced Inequalities · SDG 17 Partnerships for the Goals.',
    headers: ['Indicator', 'Kenya', 'Japan'],
    rows: [
      ['Human Development Index', '0.601', '0.919'],
      ['Gross National Income per capita (US$)', '4,244', '42,932'],
      ['Adult literacy rate, 2018 (% of adults who can read and write)', '81.5%', '99%'],
      ['Access to safely managed drinking water, 2018 (% of population)', '59%', '99%'],
    ],
  },
}

// Source A aid-funding chart — percentage share of funding from Japanese aid given to
// different categories in Kenya. Water & Sanitation = the largest (Q1a).
// Component swap: source uses PieChart `pie` → here InteractiveChart `bar`.
const SOURCE_A_CHART = {
  component: 'InteractiveChart',
  caption:
    'Source A (graph) — percentage share of funding from Japanese aid given to different categories in Kenya. Hover a bar to read its share.',
  data: {
    kind: 'bar',
    title: 'Japanese aid to Kenya — funding by category',
    source: 'Japanese aid programme (2019)',
    x: {
      label: 'Category',
      categories: ['Water & Sanitation', 'Infrastructure', 'Health', 'Agriculture', 'Governance', 'Education'],
    },
    y: { label: 'Share of funding', min: 0, max: 60, ticks: [0, 10, 20, 30, 40, 50, 60], unit: '%' },
    series: [
      {
        name: 'Share of funding (%)',
        color: '#1971c2',
        points: [54, 18, 12, 9, 4, 3],
      },
    ],
  },
}

// Source D — water footprint vs population share for 10 countries (2017). Component swap:
// source uses PieChart `nested` doughnut → here InteractiveChart grouped `bar` (two series).
// Q6 and Q8 both read shares off this; the USA reads 14.1% footprint vs 4.5% population.
const SOURCE_D_CHART = {
  component: 'InteractiveChart',
  caption:
    'Source D — each country’s share of the world’s water footprint compared with its share of the world’s population (2017). Hover a bar to read its exact share; click a legend item to toggle a series.',
  data: {
    kind: 'bar',
    title: 'Source D — Share of world’s water footprint vs population (2017)',
    source: 'Water Footprint Network (waterfootprint.org), data for 2017',
    x: {
      label: 'Country',
      categories: ['China', 'India', 'USA', 'Brazil', 'Russia', 'Indonesia', 'Japan', 'Germany', 'Mexico', 'UK'],
    },
    y: { label: 'Share of world total', min: 0, max: 30, ticks: [0, 5, 10, 15, 20, 25, 30], unit: '%' },
    series: [
      {
        name: 'Share of world’s water footprint',
        color: '#1971c2',
        points: [26.8, 13.1, 14.1, 5.2, 3.1, 2.6, 2.4, 1.9, 1.7, 1.1],
      },
      {
        name: 'Share of world’s population',
        color: '#e8590c',
        points: [19.9, 17.5, 4.5, 2.8, 2.0, 3.5, 1.8, 1.2, 1.7, 0.9],
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
    topic: 'Globalization & aid — reading the source',
    marks: 2,
    stem:
      'The following questions refer to **Source A**, which shows information about aid given by Japan to Kenya.\n\n' +
      'There are three indicators used to calculate HDI (Human Development Index):\n' +
      '1. GNI (Gross National Income) per capita\n' +
      '2. Education Index',
    artefact: SOURCE_A_TABLE,
    tasks: [
      {
        label: 'a',
        text: 'Referring to the graph in **Source A**, **identify** the category receiving the largest amount of aid from Japan.',
        marks: 1,
        ph: 'Read the funding bar chart in Source A — the largest single category. (Answer: Water & Sanitation, 54%.)',
        artefact: SOURCE_A_CHART,
      },
      {
        label: 'b',
        text: '**Select** which one of the following is the third indicator used to calculate HDI: life expectancy at birth · GDP (Gross Domestic Product) · infant mortality rate.',
        marks: 1,
        ph: 'The third HDI indicator alongside GNI per capita and the Education Index. (Answer: life expectancy at birth.)',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Globalization & aid — benefit of clean water',
    marks: 4,
    stem: 'Japan’s aid programme has focused on increasing access to clean water and sanitation in Kenya.',
    artefact: SOURCE_A_TABLE,
    tasks: [
      {
        label: '',
        text: '**Explain** one benefit of using aid to invest in clean water and sanitation for communities in Kenya.',
        marks: 4,
        ph: 'One benefit of investing aid in clean water and sanitation, considered in detail with reasons (e.g. safe water → fewer waterborne diseases → fewer days off school/work → higher incomes → more tax reinvested → better services).',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — designing an aid investigation (Kenya)',
    marks: 12,
    stem:
      'You are an MYP geography student in Kenya. Your class is investigating trade, aid and exchange flows in Kenya through the statement of inquiry below. The purpose of the investigation is to create a podcast to show the impacts of aid in Kenya. Your podcast will be shared at an event at your school on World Water Day on March 22nd.\n\n' +
      '**Statement of Inquiry:** Globalization can create change for communities and individuals.',
    tasks: [
      {
        label: 'a',
        text: 'With reference to the statement of inquiry, **formulate** a clear and focused research question that could be used to investigate the impact of aid in Kenya.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (refers to a specific community/type of aid/time) and connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** the relevance of the research question to the statement of inquiry and the context of aid in Kenya.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is relevant — build from stating a link to fully justifying it (specific group, global interaction, location effects).',
      },
      {
        label: 'c',
        text: '**List** two stakeholders you would interview to investigate your research question.',
        marks: 2,
        ph: 'Two specific stakeholders (e.g. nurses from a local clinic; Kenya Government water officials; residents of a village in Kenya). Vague answers (“Government”, “people”, “locals”) score 0.',
      },
      {
        label: 'd',
        text: '**Outline** one primary source, other than interview responses, that could be used to investigate your research question.',
        marks: 2,
        ph: 'One primary source named and elaborated (e.g. photographs showing a village water point before and after aid; survey data on rural household water access).',
      },
      {
        label: 'e',
        text: '**Outline** one secondary source that could be used to investigate your research question.',
        marks: 2,
        ph: 'One secondary source named and elaborated (e.g. a government website showing yearly aid to Kenya). Do not accept bare “website” or “article”.',
      },
    ],
  },
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — evaluating an action plan',
    marks: 8,
    stem:
      'Another student in your class has created an action plan for their investigation into trade, aid and exchange flows in Kenya. The student has recorded their action plan on the timeline below to investigate **how aid has impacted health in Kenya**.\n\n' +
      '**Outcome:** Create a podcast for World Water Day on March 22nd. **Due date:** March 18th.\n' +
      '**Statement of inquiry:** Globalization can create change for communities and individuals.\n\n' +
      'Note: Students do not need to discuss both strengths and limitations of every part of the action plan to access full marks. Marks are awarded on the quality of the response, not the number of strengths or limitations referred to.',
    artefact: {
      component: 'TimelineScrubber',
      caption: 'The student’s March action-plan timeline — drag the handle, click a marker, or use the arrow keys to read each stage up to the due date (March 18th).',
      data: {
        title: 'Action plan — March (due date: March 18th)',
        source: 'Another student’s investigation timeline',
        events: [
          {
            date: 'Mar 1',
            label: 'Plan the investigation',
            detail: 'Decide on research focus: the impact of aid on health in Kenya. Write the statement of inquiry and research questions.',
          },
          {
            date: 'Mar 5',
            label: 'Collect secondary data',
            detail: 'Gather secondary sources (reports and statistics) on aid and health in Kenya. Sort information into positive, negative and overall impacts.',
          },
          {
            date: 'Mar 12',
            label: 'Analyse findings',
            detail: 'Analyse the collected data. Identify gaps in the research.',
          },
          {
            date: 'Mar 16',
            label: 'Produce & check the podcast',
            detail: 'Record the podcast using the secondary data. Reference all sources used.',
          },
          {
            date: 'Mar 18',
            label: 'Submit (due date)',
            detail: 'Final review and submission of the podcast for World Water Day.',
          },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the action plan.',
        marks: 8,
        ph: 'Weigh strengths and limitations of the plan, then give an overall appraisal. Marked across Strengths /3, Limitations /3, Appraisal /2.',
      },
    ],
  },

  // ── Task 2 — Communicating (Criteria A + C) ──────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Communicating — tectonic hazards email (Japan / Chile)',
    marks: 18,
    stem:
      'Imagine you are a local geography student at **one** of the locations shown in **Source B**. In both locations, local governments are thinking about investing more in management strategies to protect against the tectonic activity in the area.\n\n' +
      'You must choose **one** of the maps from Source B to include in an email to the local government about the cause(s) and management of the tectonic activity in your chosen location.\n\n' +
      '**Source B** has two tabs:\n' +
      '• **Map of Japan (Tōhoku coast)** — a convergent (destructive) plate boundary where the Pacific Plate subducts beneath the Eurasian Plate offshore; cities include Sendai, Ishinomaki and Fukushima; arrows show the plates moving towards one another. GDP per capita (2017): US$38,332. Population density (2017): 347 per square kilometre.\n' +
      '• **Map of southern Chile** — a convergent (destructive) plate boundary where the Nazca Plate subducts beneath the South American Plate offshore; cities include Concepción, Valdivia and Temuco; arrows show the plates moving towards one another. GDP per capita (2017): US$15,070. Population density (2017): 24 per square kilometre.',
    tasks: [
      {
        label: 'a',
        text:
          'Choose one of the maps shown in the tabs below. Your chosen map will be included with your email. **Annotate** your chosen map by dragging and dropping:\n' +
          '• one label to show the type of plate boundary\n' +
          '• one label to show the type of tectonic activity most likely to occur at your chosen location.',
        marks: 2,
        ph: 'Drag the correct boundary + activity labels onto your chosen map. Both Japan and Chile are convergent/destructive subduction boundaries → Convergent/Destructive + Earthquake (and a destructive volcano / tsunami also accepted). 1 mark per correct label, max 2.',
        artefact: {
          component: 'DragAnnotate',
          caption:
            'Source B — drag a plate-boundary label and a tectonic-activity label onto your chosen map (Japan shown). Both Japan and Chile lie on convergent (destructive) subduction boundaries.',
          data: {
            title: 'Source B — annotate the plate-boundary map',
            mode: 'annotate',
            scene: 'plate-boundary',
            sceneHint: 'Map of Japan — Pacific Plate subducting beneath the Eurasian Plate (convergent/destructive boundary)',
            prompt: 'Drag one boundary-type label and one tectonic-activity label onto the marked locations on the Japan map.',
            chips: [
              { id: 'convergent', text: 'Convergent' },
              { id: 'destructive', text: 'Destructive' },
              { id: 'transform', text: 'Transform' },
              { id: 'conservative', text: 'Conservative' },
              { id: 'divergent', text: 'Divergent' },
              { id: 'constructive', text: 'Constructive' },
              { id: 'earthquake', text: 'Earthquake' },
              { id: 'volcanic', text: 'Volcanic activity' },
            ],
            targets: [
              { id: 'boundary', x: 50, y: 28, label: 'Plate boundary', correctLabelId: 'convergent' },
              { id: 'activity', x: 38, y: 60, label: 'Tectonic activity', correctLabelId: 'earthquake' },
            ],
            showScore: true,
          },
        },
      },
      {
        label: 'b',
        text:
          'As a local geography student, you have chosen to write a **convincing** email to the local government about which management strategy should be invested in. In your email, you must **explain**:\n' +
          '• the cause(s) of the type of tectonic activity most likely to occur in your chosen location\n' +
          '• which management strategy would be the most effective in this area.\n\n' +
          'You should use examples from your MYP geography course to support your explanation. Write a relevant email subject title, then write your email.',
        marks: 16,
        ph: 'A convincing email (subject line + greeting/sign-off) explaining the cause of the tectonic activity and the most effective management strategy, with examples. Marked: Knowledge (Crit A /6), Format /2, Communicating /4, Organization /4.',
      },
    ],
  },

  // ── Task 3 — Thinking critically (Criteria A + C + D) ────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Source evaluation — water footprint vs population graph',
    marks: 6,
    stem:
      'An introductory video on the **water cycle and climate change** plays first; its transcript is shown below.\n\n' +
      '**Source D** is a graph comparing the share of the world’s water footprint with the share of the world’s population for 10 countries (2017). The following questions refer to Source D.',
    artefact: {
      component: 'SlideDeck',
      caption: 'Introductory video on the water cycle and climate change — transcript shown as slides (Video / Transcript tabs in the original).',
      data: {
        title: 'The water cycle and climate change',
        source: 'Introductory video shown before Source D',
        slides: [
          {
            title: 'A natural cycle',
            body: 'The water cycle is a natural process that moves water between the oceans, the atmosphere and the land.',
            bullets: ['Energy from the Sun evaporates water from oceans, lakes and rivers.', 'Water vapour rises, cools and condenses into clouds.'],
          },
          {
            title: 'Rain and run-off',
            body: 'Water returns to the surface as precipitation.',
            bullets: ['Some water soaks into the ground; some runs off into rivers and back to the sea.', 'A warmer atmosphere can hold more water vapour, changing where and how heavily it rains.'],
          },
          {
            title: 'How climate change disrupts it',
            body: 'The majority of scientists believe that human activity is intensifying the water cycle through the Enhanced Greenhouse Effect. This traps more of the Sun’s energy, warming the planet and changing rainfall patterns.',
            bullets: ['Some regions face longer droughts; others face heavier flooding.', 'These changes make freshwater harder to manage.'],
          },
          {
            title: 'What is a water footprint?',
            body: 'A water footprint is an estimated value of the total volume of fresh water used to produce the goods and services consumed by an individual, business or country.',
            bullets: ['The water used to grow your food, make your clothes and produce your energy all count towards your water footprint.'],
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the origin of the graph shown in **Source D**.',
        marks: 1,
        ph: 'The origin (who produced it / where it is from). Accept Water Footprint Network · waterfootprint.org.',
        artefact: SOURCE_D_CHART,
      },
      {
        label: 'b',
        text: '**State** the purpose of the graph shown in **Source D**.',
        marks: 1,
        ph: 'Why the graph was made — e.g. to show the relationship between a country’s population size and its water footprint.',
      },
      {
        label: 'c',
        text: '**Outline** one value of the graph shown in **Source D** for an MYP geography student studying the management of global climate change.',
        marks: 2,
        ph: 'One value, elaborated — e.g. it uses a key to compare water footprint and population per country; the 2017 data makes it more reliable.',
      },
      {
        label: 'd',
        text: '**Outline** one limitation of the graph shown in **Source D** for an MYP geography student studying the management of global climate change.',
        marks: 2,
        ph: 'One limitation, elaborated — e.g. it shows proportions not actual water use; it shows no management strategies; it shows only one year (2017) so no change can be seen.',
      },
    ],
  },
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Justifying — mitigation vs adaptation',
    marks: 6,
    stem:
      'Climate change has become an important issue for societies. Two of the main approaches used to respond to climate change are mitigation and adaptation.\n' +
      '• **Mitigation** is the action of reducing the **causes** of climate change.\n' +
      '• **Adaptation** is the action of reducing the **effects** of climate change.\n\n' +
      '**Source E** shows examples of management strategies as a network — hover or tap a node to read it.',
    artefact: {
      component: 'NetworkGraph',
      caption: 'Source E — examples of management strategies, grouped around two approaches: mitigation (reducing causes) and adaptation (reducing effects). Hover a node to read its detail.',
      data: {
        title: 'Source E — mitigation vs adaptation strategies',
        source: 'Examples of management strategies',
        center: { label: 'Responding to climate change', detail: 'Two main approaches: mitigation reduces the causes; adaptation reduces the effects.', color: '#1e293b' },
        nodes: [
          { id: 'mit_transport', label: 'Energy-efficient transport', color: '#2f9e44', detail: 'Mitigation — using buses and bicycles cuts greenhouse-gas emissions, reducing a cause of climate change.' },
          { id: 'mit_tax', label: 'Carbon tax', color: '#2f9e44', detail: 'Mitigation — a government tax on emissions discourages burning fossil fuels, reducing a cause of climate change.' },
          { id: 'adapt_defences', label: 'Coastal defences', color: '#e8590c', detail: 'Adaptation — building sea walls protects people from rising seas, reducing an effect of climate change.' },
          { id: 'adapt_crops', label: 'Drought-resistant crops', color: '#e8590c', detail: 'Adaptation — planting crops that survive less rainfall protects food supply, reducing an effect of climate change.' },
        ],
        edges: [
          { from: 'mit_transport', to: 'mit_tax', label: 'mitigation' },
          { from: 'adapt_defences', to: 'adapt_crops', label: 'adaptation' },
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: 'Using **Source E**, **justify** whether mitigation or adaptation is the most effective way to reduce the impacts of climate change.',
        marks: 6,
        ph: 'Choose one approach and justify it with reasoning (e.g. mitigation addresses the causes, so reduces the need for adaptation; adaptation is reactive and not sustainable). Build from stating a choice to a thorough justification.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Extended essay — water footprint vs population share',
    marks: 24,
    stem:
      'The graph from **Source D** is repeated here. It shows that the United States of America contributes 14.1% of the world’s water footprint but only 4.5% of the world’s population.\n\n' +
      'Some have argued that a new global agreement should be signed to make sure that a country’s share of the world’s water footprint is not higher than its share of the world’s population.',
    artefact: SOURCE_D_CHART,
    tasks: [
      {
        label: '',
        text:
          'Write a well-structured essay to answer the following question. **To what extent** do you agree with this argument?\n\n' +
          'In your essay, you should:\n' +
          '• use knowledge and examples from your MYP studies\n' +
          '• consider different perspectives\n' +
          '• provide a clear conclusion.',
        marks: 24,
        ph: 'A structured essay (intro/body/conclusion) weighing whether a country’s water-footprint share should be capped at its population share, with ≥2 perspectives and examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
