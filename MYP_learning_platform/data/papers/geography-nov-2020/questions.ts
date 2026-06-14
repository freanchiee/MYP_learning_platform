import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2020 (on-screen examination)
 * Subject group: Individuals & Societies · Course: Geography
 * Source: geogmmoeengtz0xxm (N20). Total 80 marks, 3 tasks:
 *   Task 1 Investigating (Crit A+B, 26): Q1 (A, 2) · Q2 (A, 4) · Q3 (B, 12) · Q4 (B, 8)
 *   Task 2 Communicating (Crit A+C, 18): Q5 (18 — 5a annotate 2 + 5b email 16)
 *   Task 3 Thinking critically (Crit A+C+D, 36): Q6 (B, 6) · Q7 (D, 6) · Q8 (24)
 *
 * Theme: globalization & aid (Australia → Laos); tectonic hazards (California /
 * Iceland); climate change & carbon footprints. Text/audio/video sources are
 * transcribed as original extracts; visual sources become interactive artefacts
 * wired via the `artefact` field:
 *   Q1/Q2 → InfoGraphicPanel  (Source A — Australian aid to Laos infographic)
 *           + PieChart `pie`  (aid funding split, Education 59%)
 *   Q4    → InfoGraphicPanel  (the September-2020 action-plan calendar)
 *   Q5a   → DragAnnotate      (Source B — California / Iceland plate-boundary maps)
 *   Q6    → SourceDocViewer   (the greenhouse-effect video transcript)
 *           + PieChart `nested` (Source D — population vs carbon-footprint doughnut)
 *   Q7    → InfoGraphicPanel  (Source E — mitigation vs adaptation strategies)
 *   Q8    → PieChart `nested` (Source D repeated)
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
  id: 'geography-nov-2020',
  subject: 'Geography',
  session: 'November',
  year: 2020,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// ── Shared artefact data ───────────────────────────────────────────────────
// Source A — the Australian aid to Laos infographic (Q1/Q2 read off it).
const SOURCE_A_INFOGRAPHIC = {
  component: 'InfoGraphicPanel',
  caption:
    'Source A — Aid from Australia to Laos. Hover a card to spotlight it. In 2019, the focus of Australia’s aid programme was to increase access to primary education in Laos.',
  data: {
    title: 'Source A — Aid from Australia to Laos',
    source: 'Australian aid programme (2019)',
    intro:
      'Australia provides aid to support Laos’ development. Australia works in partnership with the people of Laos to decide where aid is needed most.',
    layout: 'grid',
    blocks: [
      {
        heading: 'Laos — development indicators',
        icon: '🇱🇦',
        items: [
          'Human Development Index: 0.601',
          'Gross National Income per capita: US$6,070',
          'Adult literacy rate (2018, % of adults who can read and write): 58.3%',
        ],
      },
      {
        heading: 'Australia — development indicators',
        icon: '🇦🇺',
        items: [
          'Human Development Index: 0.939',
          'Gross National Income per capita: US$43,560',
          'Adult literacy rate (2018, % of adults who can read and write): 99%',
        ],
      },
      {
        heading: 'Quick facts (2019 aid programme)',
        icon: '📌',
        items: [
          '19,795 children enrolled in programmes to improve reading and hygiene (for example, hand washing, dental care)',
          'Increased number of girls in primary school education',
          '850 classrooms improved',
          '356 teachers received training',
        ],
      },
      {
        heading: 'Sustainable Development Goals supported',
        icon: '🌍',
        note: 'Aid from Australia helps Laos achieve the Sustainable Development Goals.',
        items: [
          'SDG 1 — No Poverty',
          'SDG 4 — Quality Education',
          'SDG 5 — Gender Equality',
          'SDG 8 — Decent Work and Economic Growth',
          'SDG 9 — Industry, Innovation and Infrastructure',
          'SDG 10 — Reduced Inequalities',
          'SDG 17 — Partnerships for the Goals',
        ],
      },
    ],
  },
}

// Source A aid-funding pie — percentage share of funding from Australian aid
// given to different categories in Laos. Education = the largest (Q1a).
const SOURCE_A_PIE = {
  component: 'PieChart',
  caption:
    'Source A (graph) — percentage share of funding from Australian aid given to different categories in Laos. Hover a slice to read its share.',
  data: {
    kind: 'pie',
    title: 'Australian aid to Laos — funding by category',
    source: 'Australian aid programme (2019)',
    unit: '%',
    series: [
      { name: 'Education', value: 59, color: '#2f9e44' },
      { name: 'Infrastructure and Trade', value: 17, color: '#e8590c' },
      { name: 'Agriculture', value: 10, color: '#f08c00' },
      { name: 'Effective Governance', value: 7, color: '#fab005' },
      { name: 'Development Support', value: 5, color: '#1971c2' },
      { name: 'Health', value: 1, color: '#c2255c' },
      { name: 'Building Resilience', value: 1, color: '#0b7285' },
    ],
  },
}

// Source D — nested doughnut: outer ring = share of world's carbon footprint,
// inner ring = share of world's population (2017). Values read EXACTLY off the
// source; Q6 and Q8 both read shares off this. Legend order is preserved.
const SOURCE_D_DOUGHNUT = {
  component: 'PieChart',
  caption:
    'Source D — Carbon footprint vs population. Outer ring = each country’s share of the world’s carbon footprint; inner ring = its share of the world’s population (2017). Hover a slice to read its share.',
  data: {
    kind: 'nested',
    title: 'Source D — Share of world’s carbon footprint vs population (2017)',
    source: 'Global Footprint Network (footprintnetwork.org), data for 2017',
    unit: '%',
    // OUTER ring — share of world's carbon footprint
    series: [
      { name: 'China', value: 27.2, color: '#9ad9d4' },
      { name: 'United States of America', value: 15.6, color: '#e6007e' },
      { name: 'India', value: 6.3, color: '#f6a623' },
      { name: 'Russian Federation', value: 4.6, color: '#4dbdf0' },
      { name: 'Japan', value: 3.9, color: '#b39ddb' },
      { name: 'Germany', value: 2.3, color: '#c2255c' },
      { name: 'Mexico', value: 1.8, color: '#f2d098' },
      { name: 'Korea, Republic of', value: 1.7, color: '#2f7fb5' },
      { name: 'Brazil', value: 1.5, color: '#8bc34a' },
      { name: 'United Kingdom', value: 1.7, color: '#7a8b1f' },
      { name: 'Rest of the World', value: 33.4, color: '#b0b0b0' },
    ],
    // INNER ring — share of world's population
    innerSeries: [
      { name: 'China', value: 19.9, color: '#9ad9d4' },
      { name: 'United States of America', value: 4.5, color: '#e6007e' },
      { name: 'India', value: 17.5, color: '#f6a623' },
      { name: 'Russian Federation', value: 2.0, color: '#4dbdf0' },
      { name: 'Japan', value: 1.8, color: '#b39ddb' },
      { name: 'Germany', value: 1.2, color: '#c2255c' },
      { name: 'Mexico', value: 1.7, color: '#f2d098' },
      { name: 'Korea, Republic of', value: 0.7, color: '#2f7fb5' },
      { name: 'Brazil', value: 2.8, color: '#8bc34a' },
      { name: 'United Kingdom', value: 0.9, color: '#7a8b1f' },
      { name: 'Rest of the World', value: 47.1, color: '#b0b0b0' },
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
      'The following questions refer to **Source A**, which shows information about aid given by Australia to Laos.\n\n' +
      'There are three indicators used to calculate HDI (Human Development Index):\n' +
      '1. GNI (Gross National Income) per capita\n' +
      '2. Education Index',
    artefact: SOURCE_A_INFOGRAPHIC,
    tasks: [
      {
        label: 'a',
        text: 'Referring to the graph in **Source A**, **identify** the category receiving the largest amount of aid from Australia.',
        marks: 1,
        ph: 'Read the funding pie in Source A — the largest single category. (Answer: Education, 59%.)',
        artefact: SOURCE_A_PIE,
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
    topic: 'Globalization & aid — benefit of education',
    marks: 4,
    stem: 'Australia’s aid programme has focused on increasing access to primary education in Laos.',
    artefact: SOURCE_A_INFOGRAPHIC,
    tasks: [
      {
        label: '',
        text: '**Explain** one benefit of using aid to invest in education for communities in Laos.',
        marks: 4,
        ph: 'One benefit of investing aid in education, considered in detail with reasons (e.g. access → qualifications → higher-paid jobs → more tax reinvested → better schools/hospitals).',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — designing an aid investigation (Laos)',
    marks: 12,
    stem:
      'You are an MYP geography student in Laos. Your class is investigating trade, aid and exchange flows in Laos through the statement of inquiry below. The purpose of the investigation is to create a video to show the impacts of aid in Laos. Your video will be shown at an event at your school on End Poverty Day on October 17th.\n\n' +
      '**Statement of Inquiry:** Globalization can create change for communities and individuals.',
    tasks: [
      {
        label: 'a',
        text: 'With reference to the statement of inquiry, **formulate** a clear and focused research question that could be used to investigate the impact of aid in Laos.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (refers to a specific community/type of aid/time) and connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** the relevance of the research question to the statement of inquiry and the context of aid in Laos.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is relevant — build from stating a link to fully justifying it (specific group, global interaction, location effects).',
      },
      {
        label: 'c',
        text: '**List** two stakeholders you would interview to investigate your research question.',
        marks: 2,
        ph: 'Two specific stakeholders (e.g. teachers from a local school; Laos Government officials; students in a school in Laos). Vague answers (“Government”, “students”, “locals”) score 0.',
      },
      {
        label: 'd',
        text: '**Outline** one primary source, other than interview responses, that could be used to investigate your research question.',
        marks: 2,
        ph: 'One primary source named and elaborated (e.g. photographs showing classrooms before and after aid; survey data on rural enrolment rates).',
      },
      {
        label: 'e',
        text: '**Outline** one secondary source that could be used to investigate your research question.',
        marks: 2,
        ph: 'One secondary source named and elaborated (e.g. a government website showing yearly aid to Laos). Do not accept bare “website” or “article”.',
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
      'Another student in your class has created an action plan for their investigation into trade, aid and exchange flows in Laos. The student has recorded their action plan on the calendar below to investigate **how aid has impacted health in Laos**.\n\n' +
      '**Outcome:** Create a video for End Poverty Day on October 17th. **Due date:** September 29th.\n' +
      '**Statement of inquiry:** Globalization can create change for communities and individuals.\n\n' +
      'Note: Students do not need to discuss both strengths and limitations of every part of the action plan to access full marks. Marks are awarded on the quality of the response, not the number of strengths or limitations referred to.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'The student’s September 2020 action-plan calendar — colour-coded stages towards the due date (September 29th).',
      data: {
        title: 'Action plan — September 2020',
        source: 'Another student’s investigation calendar',
        intro: 'Research focus: How has aid impacted health in Laos? · Outcome: a video for End Poverty Day (October 17th) · Due date: September 29th.',
        layout: 'flow',
        blocks: [
          {
            heading: 'Sept 1 · Plan the investigation',
            icon: '🟡',
            items: ['Decide on research focus: the impact of aid on health in Laos', 'Write the statement of inquiry and research questions'],
          },
          {
            heading: 'Sept 5–12 · Collect secondary data',
            icon: '🟢',
            items: ['Gather secondary sources (reports and statistics) on aid and health in Laos', 'Sort information into positive, negative and overall impacts'],
          },
          {
            heading: 'Sept 13–16 · Analyse findings',
            icon: '🔴',
            items: ['Analyse the collected data', 'Identify gaps in the research'],
          },
          {
            heading: 'Sept 23–25 · Produce & check the video',
            icon: '🔵',
            items: ['Make the video using the secondary data', 'Reference all sources used'],
          },
          {
            heading: 'Sept 29 · Submit (due date)',
            icon: '🟠',
            items: ['Final review and submission of the video for End Poverty Day'],
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
    topic: 'Communicating — tectonic hazards email (California / Iceland)',
    marks: 18,
    stem:
      'Imagine you are a local geography student at **one** of the locations shown in **Source B**. In both locations, local governments are thinking about investing more in management strategies to protect against the tectonic activity in the area.\n\n' +
      'You must choose **one** of the maps from Source B to include in an email to the local government about the cause(s) and management of the tectonic activity in your chosen location.\n\n' +
      '**Source B** has two tabs:\n' +
      '• **Map of California** — a transform (conservative) plate boundary along the San Andreas Fault; cities include San Francisco, Los Angeles, San Diego and Las Vegas; arrows show the direction of plate movement (plates sliding past one another). GDP per capita (2017): US$60,359. Population density (2017): 408 per square kilometre.\n' +
      '• **Map of Iceland** — a divergent (constructive) plate boundary (the Mid-Atlantic Ridge) running across the island; towns include Reykjavik, Keflavik, Borgarnes, Vestmannaeyjar and Húsavík; arrows show the plates moving apart. GDP per capita (2017): US$70,056. Population density (2017): 3.3 per square kilometre.',
    tasks: [
      {
        label: 'a',
        text:
          'Choose one of the maps shown in the tabs below. Your chosen map will be included with your email. **Annotate** your chosen map by dragging and dropping:\n' +
          '• one label to show the type of plate boundary\n' +
          '• one label to show the type of tectonic activity most likely to occur at your chosen location.',
        marks: 2,
        ph: 'Drag the correct boundary + activity labels onto your chosen map. California → Transform/Conservative + Earthquake; Iceland → Divergent/Constructive + Volcanic activity. 1 mark per correct label, max 2.',
        artefact: {
          component: 'DragAnnotate',
          caption:
            'Source B — drag a plate-boundary label and a tectonic-activity label onto your chosen map (California shown). Switch the tabs in your mind: California is a transform boundary; Iceland is a divergent boundary.',
          data: {
            title: 'Source B — annotate the plate-boundary map',
            mode: 'annotate',
            scene: 'plate-boundary',
            sceneHint: 'Map of California — San Andreas transform plate boundary',
            prompt: 'Drag one boundary-type label and one tectonic-activity label onto the marked locations on the California map.',
            chips: [
              { id: 'transform', text: 'Transform' },
              { id: 'conservative', text: 'Conservative' },
              { id: 'convergent', text: 'Convergent' },
              { id: 'destructive', text: 'Destructive' },
              { id: 'divergent', text: 'Divergent' },
              { id: 'constructive', text: 'Constructive' },
              { id: 'earthquake', text: 'Earthquake' },
              { id: 'volcanic', text: 'Volcanic activity' },
            ],
            targets: [
              { id: 'boundary', x: 56, y: 30, label: 'Plate boundary', correctLabelId: 'transform' },
              { id: 'activity', x: 44, y: 62, label: 'Tectonic activity', correctLabelId: 'earthquake' },
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
    topic: 'Source evaluation — carbon footprint vs population graph',
    marks: 6,
    stem:
      'An introductory video on the **greenhouse effect** plays first; its transcript is shown below.\n\n' +
      '**Source D** is a graph comparing the share of the world’s carbon footprint with the share of the world’s population for 10 countries (2017). The following questions refer to Source D.',
    artefact: {
      component: 'SourceDocViewer',
      caption: 'Introductory video on the greenhouse effect — transcript (Video / Transcript tabs in the original).',
      data: {
        kind: 'Video transcript',
        title: 'The greenhouse effect',
        attribution: 'Introductory video shown before Source D',
        paragraphs: [
          'The greenhouse effect is a natural process.',
          'Energy from the Sun enters the Earth’s atmosphere.',
          'The energy is either absorbed by the Earth’s surface or is reflected.',
          'Some of the reflected energy passes through the atmosphere into space.',
          'The rest is absorbed and re-emitted by greenhouse gases.',
          'The majority of scientists believe that humans are causing an Enhanced Greenhouse Effect. This happens because of increased emissions of greenhouse gases. This causes more of the Sun’s energy to become trapped in the Earth’s atmosphere, warming the planet further.',
          'Carbon footprint is an estimated value calculated by the total amount of greenhouse gases emitted by an individual, business or country.',
          'Energy spent making the things you use, the car you drive and the food you eat are all used to calculate your carbon footprint.',
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the origin of the graph shown in **Source D**.',
        marks: 1,
        ph: 'The origin (who produced it / where it is from). Accept Global Footprint Network · footprintnetwork.org.',
        artefact: SOURCE_D_DOUGHNUT,
      },
      {
        label: 'b',
        text: '**State** the purpose of the graph shown in **Source D**.',
        marks: 1,
        ph: 'Why the graph was made — e.g. to show the relationship between a country’s population size and its carbon footprint.',
      },
      {
        label: 'c',
        text: '**Outline** one value of the graph shown in **Source D** for an MYP geography student studying the management of global climate change.',
        marks: 2,
        ph: 'One value, elaborated — e.g. it uses a key to compare carbon footprint and population per country; the 2017 data makes it more reliable.',
      },
      {
        label: 'd',
        text: '**Outline** one limitation of the graph shown in **Source D** for an MYP geography student studying the management of global climate change.',
        marks: 2,
        ph: 'One limitation, elaborated — e.g. it shows proportions not actual carbon emissions; it shows no management strategies; it shows only one year (2017) so no change can be seen.',
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
      '**Source E** shows examples of management strategies.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Source E — examples of management strategies, grouped into mitigation (reducing causes) and adaptation (reducing effects).',
      data: {
        title: 'Source E — mitigation vs adaptation strategies',
        source: 'Examples of management strategies',
        layout: 'grid',
        blocks: [
          {
            heading: 'Examples of mitigation (reduce the causes)',
            icon: '🚌',
            items: ['Using energy-efficient transport (buses, bicycles)', 'Governments introduce a carbon tax'],
          },
          {
            heading: 'Examples of adaptation (reduce the effects)',
            icon: '🌊',
            items: ['Building coastal defences (sea walls)', 'Planting drought-resistant crops'],
          },
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
    topic: 'Extended essay — carbon footprint vs population share',
    marks: 24,
    stem:
      'The graph from **Source D** is repeated here. It shows that the United States of America contributes 15.6% of the world’s carbon footprint but only 4.5% of the world’s population.\n\n' +
      'Some have argued that a new global agreement should be signed to make sure that a country’s share of the world’s carbon footprint is not higher than its share of the world’s population.',
    artefact: SOURCE_D_DOUGHNUT,
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
        ph: 'A structured essay (intro/body/conclusion) weighing whether a country’s carbon-footprint share should be capped at its population share, with ≥2 perspectives and examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
