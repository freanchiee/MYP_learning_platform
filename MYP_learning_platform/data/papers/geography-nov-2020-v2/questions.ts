import type { Question } from '@/lib/types'

/**
 * MYP Geography — November 2020 · ISOMORPHIC VARIANT 2 (geography-nov-2020-v2)
 * Subject group: Individuals & Societies · Course: Geography
 * Construct mirror of geography-nov-2020 (same crit / command terms / marks / task
 * shape). Surface is a NEW scenario and — per the I&S carve-out — every artefact-bearing
 * question is presented through a component that differs from BOTH the source AND v1:
 *   Q1/Q2  source InfoGraphicPanel  · v1 DataTableInteractive → ChoroplethWorld   (Source A — Norway→Malawi locator/highlight map)
 *   Q1a    source PieChart `pie`    · v1 InteractiveChart `bar` → DataTableInteractive (aid funding by category, Food Security & Agriculture 52%)
 *   Q4     source InfoGraphicPanel  · v1 TimelineScrubber       → SlideDeck         (paged action plan)
 *   Q5a    source DragAnnotate      · v1 DragAnnotate           → DragAnnotate       (unique drag-annotate role; NEW scenario: Indonesia / Italy — both volcanic)
 *   Q6     source SourceDocViewer   · v1 SlideDeck              → InfoGraphicPanel   (greenhouse-effect / ecological-footprint transcript as a panel)
 *   Q6a    source PieChart `nested` · v1 InteractiveChart `bar` → DataTableInteractive (Source D — ecological footprint vs population share)
 *   Q7     source InfoGraphicPanel  · v1 NetworkGraph           → VennOverlap        (Source E — mitigation vs adaptation, with the shared-goal overlap)
 *   Q8     source PieChart `nested` · v1 InteractiveChart `bar` → DataTableInteractive (Source D repeated)
 *
 * NEW theme: globalization & aid (Norway → Malawi, food security & sustainable
 * agriculture); tectonic hazards (Indonesia / Italy — both convergent, volcanic);
 * climate change & ecological footprints (land use).
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
  id: 'geography-nov-2020-v2',
  subject: 'Geography',
  session: 'November',
  year: 2020,
  totalMarks: 80,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

// ── Shared artefact data ───────────────────────────────────────────────────
// Source A — locator/highlight world map for Norway→Malawi food-security aid (Q1/Q2
// read indicators off the caption). Component swap: source InfoGraphicPanel,
// v1 DataTableInteractive → here ChoroplethWorld (highlight mode).
const SOURCE_A_MAP = {
  component: 'ChoroplethWorld',
  caption:
    'Source A — Aid from Norway to Malawi. Norway (donor) and Malawi (recipient) are highlighted; hover a country to read it. Development indicators (2019): Malawi — HDI 0.483 · GNI per capita US$1,035 · adult literacy 62.1% · undernourishment 17.3% of population. Norway — HDI 0.957 · GNI per capita US$66,494 · adult literacy 99% · undernourishment <2.5%. Quick facts (2019 aid programme): 24,600 smallholder farmers trained in climate-smart farming · 1,180 hectares of degraded land restored · 95 village seed banks set up · increased number of women leading farmer groups. SDGs supported: SDG 1 No Poverty · SDG 2 Zero Hunger · SDG 5 Gender Equality · SDG 8 Decent Work · SDG 13 Climate Action · SDG 15 Life on Land · SDG 17 Partnerships for the Goals. In 2019, the focus of Norway’s aid programme was to increase food security through sustainable agriculture in Malawi.',
  data: {
    mode: 'highlight',
    title: 'Source A — Aid from Norway to Malawi',
    source: 'Norwegian aid programme (2019)',
    highlight: ['Norway', 'Malawi'],
    highlightLabel: 'Donor (Norway) and recipient (Malawi)',
    baseLabel: 'Other countries',
    caption:
      'Norway provides aid to support Malawi’s development. Norway works in partnership with the people of Malawi to decide where aid is needed most. The 2019 programme focused on food security through sustainable agriculture.',
  },
}

// Source A aid-funding table — percentage share of funding from Norwegian aid given to
// different categories in Malawi. Food Security & Agriculture = the largest (Q1a).
// Component swap: source PieChart `pie`, v1 InteractiveChart `bar` → here DataTableInteractive.
const SOURCE_A_FUNDING = {
  component: 'DataTableInteractive',
  caption:
    'Source A (graph) — percentage share of funding from Norwegian aid given to different categories in Malawi. Click a row to pin the category you are reading off. Categories are listed from the largest share to the smallest.',
  data: {
    title: 'Norwegian aid to Malawi — funding by category',
    source: 'Norwegian aid programme (2019)',
    headers: ['Category', 'Share of funding'],
    rows: [
      ['Food Security & Agriculture', '52%'],
      ['Infrastructure & Trade', '16%'],
      ['Education', '11%'],
      ['Effective Governance', '9%'],
      ['Health', '7%'],
      ['Building Resilience', '3%'],
      ['Development Support', '2%'],
    ],
  },
}

// Source D — ecological footprint vs population share for 10 countries (2017). Component
// swap: source PieChart `nested` doughnut, v1 InteractiveChart `bar` → here
// DataTableInteractive (value-read table). Q6 and Q8 both read shares off this; the USA
// reads 17.4% ecological footprint vs 4.5% population.
const SOURCE_D_TABLE = {
  component: 'DataTableInteractive',
  caption:
    'Source D — each country’s share of the world’s ecological footprint compared with its share of the world’s population (2017). Click a row to pin the country you are reading off. Source: Global Footprint Network (footprintnetwork.org), data for 2017.',
  data: {
    title: 'Source D — Share of world’s ecological footprint vs population (2017)',
    source: 'Global Footprint Network (footprintnetwork.org), data for 2017',
    headers: ['Country', 'Share of world’s ecological footprint', 'Share of world’s population'],
    rows: [
      ['China', '29.4%', '19.9%'],
      ['United States of America', '17.4%', '4.5%'],
      ['India', '6.5%', '17.5%'],
      ['Russian Federation', '4.6%', '2.0%'],
      ['Japan', '3.7%', '1.8%'],
      ['Brazil', '2.6%', '2.8%'],
      ['Germany', '2.2%', '1.2%'],
      ['Mexico', '1.7%', '1.7%'],
      ['United Kingdom', '1.4%', '0.9%'],
      ['Korea, Republic of', '1.3%', '0.7%'],
      ['Rest of the World', '29.2%', '47.0%'],
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
      'The following questions refer to **Source A**, which shows information about aid given by Norway to Malawi.\n\n' +
      'There are three indicators used to calculate HDI (Human Development Index):\n' +
      '1. GNI (Gross National Income) per capita\n' +
      '2. Education Index',
    artefact: SOURCE_A_MAP,
    tasks: [
      {
        label: 'a',
        text: 'Referring to the graph in **Source A**, **identify** the category receiving the largest amount of aid from Norway.',
        marks: 1,
        ph: 'Read the funding table in Source A — the largest single category. (Answer: Food Security & Agriculture, 52%.)',
        artefact: SOURCE_A_FUNDING,
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
    topic: 'Globalization & aid — benefit of sustainable agriculture',
    marks: 4,
    stem: 'Norway’s aid programme has focused on increasing food security through sustainable agriculture in Malawi.',
    artefact: SOURCE_A_MAP,
    tasks: [
      {
        label: '',
        text: '**Explain** one benefit of using aid to invest in sustainable agriculture for communities in Malawi.',
        marks: 4,
        ph: 'One benefit of investing aid in sustainable agriculture, considered in detail with reasons (e.g. climate-smart farming → higher, more reliable harvests → less hunger and surplus to sell → higher incomes → more tax reinvested → better services).',
      },
    ],
  },
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigating — designing an aid investigation (Malawi)',
    marks: 12,
    stem:
      'You are an MYP geography student in Malawi. Your class is investigating trade, aid and exchange flows in Malawi through the statement of inquiry below. The purpose of the investigation is to create an exhibition to show the impacts of aid in Malawi. Your exhibition will be opened at an event at your school on World Food Day on October 16th.\n\n' +
      '**Statement of Inquiry:** Globalization can create change for communities and individuals.',
    tasks: [
      {
        label: 'a',
        text: 'With reference to the statement of inquiry, **formulate** a clear and focused research question that could be used to investigate the impact of aid in Malawi.',
        marks: 2,
        ph: 'A research question that is both clear AND focused (refers to a specific community/type of aid/time) and connected to the statement of inquiry.',
      },
      {
        label: 'b',
        text: '**Justify** the relevance of the research question to the statement of inquiry and the context of aid in Malawi.',
        marks: 4,
        ph: 'Give reasons, with detail, why the RQ is relevant — build from stating a link to fully justifying it (specific group, global interaction, location effects).',
      },
      {
        label: 'c',
        text: '**List** two stakeholders you would interview to investigate your research question.',
        marks: 2,
        ph: 'Two specific stakeholders (e.g. smallholder farmers from a local village; Malawi Government agriculture officials; members of a women’s farmer group). Vague answers (“Government”, “farmers”, “locals”) score 0.',
      },
      {
        label: 'd',
        text: '**Outline** one primary source, other than interview responses, that could be used to investigate your research question.',
        marks: 2,
        ph: 'One primary source named and elaborated (e.g. photographs showing a field before and after climate-smart farming; survey data on household harvest sizes).',
      },
      {
        label: 'e',
        text: '**Outline** one secondary source that could be used to investigate your research question.',
        marks: 2,
        ph: 'One secondary source named and elaborated (e.g. a government website showing yearly aid to Malawi). Do not accept bare “website” or “article”.',
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
      'Another student in your class has created an action plan for their investigation into trade, aid and exchange flows in Malawi. The student has recorded their action plan on the slides below to investigate **how aid has impacted health in Malawi**.\n\n' +
      '**Outcome:** Create an exhibition for World Food Day on October 16th. **Due date:** October 9th.\n' +
      '**Statement of inquiry:** Globalization can create change for communities and individuals.\n\n' +
      'Note: Students do not need to discuss both strengths and limitations of every part of the action plan to access full marks. Marks are awarded on the quality of the response, not the number of strengths or limitations referred to.',
    artefact: {
      component: 'SlideDeck',
      caption: 'The student’s action-plan slides — page through with the arrows, the dots, or your ← / → keys to read each stage up to the due date (October 9th).',
      data: {
        title: 'Action plan — October (due date: October 9th)',
        source: 'Another student’s investigation slides',
        slides: [
          {
            title: 'Oct 1 · Plan the investigation',
            body: 'Research focus: How has aid impacted health in Malawi?',
            bullets: ['Decide on the research focus: the impact of aid on health in Malawi.', 'Write the statement of inquiry and research questions.'],
          },
          {
            title: 'Oct 2–4 · Collect secondary data',
            body: 'Gather and sort secondary sources.',
            bullets: ['Gather secondary sources (reports and statistics) on aid and health in Malawi.', 'Sort information into positive, negative and overall impacts.'],
          },
          {
            title: 'Oct 5–6 · Analyse findings',
            body: 'Make sense of the data collected.',
            bullets: ['Analyse the collected data.', 'Identify gaps in the research.'],
          },
          {
            title: 'Oct 7–8 · Produce & check the exhibition',
            body: 'Build the exhibition display.',
            bullets: ['Create the exhibition using the secondary data.', 'Reference all sources used.'],
          },
          {
            title: 'Oct 9 · Submit (due date)',
            body: 'Final review and submission.',
            bullets: ['Final review and submission of the exhibition for World Food Day.'],
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
    topic: 'Communicating — tectonic hazards email (Indonesia / Italy)',
    marks: 18,
    stem:
      'Imagine you are a local geography student at **one** of the locations shown in **Source B**. In both locations, local governments are thinking about investing more in management strategies to protect against the tectonic activity in the area.\n\n' +
      'You must choose **one** of the maps from Source B to include in an email to the local government about the cause(s) and management of the tectonic activity in your chosen location.\n\n' +
      '**Source B** has two tabs:\n' +
      '• **Map of Java, Indonesia** — a convergent (destructive) plate boundary where the Indo-Australian Plate subducts beneath the Eurasian Plate offshore, forming a chain of active volcanoes; cities include Jakarta, Bandung and Yogyakarta, near Mount Merapi; arrows show the plates moving towards one another. GDP per capita (2017): US$3,837. Population density (2017): 1,121 per square kilometre.\n' +
      '• **Map of the Bay of Naples, Italy** — a convergent (destructive) plate boundary where the African Plate subducts beneath the Eurasian Plate, producing active volcanoes such as Mount Vesuvius; towns include Naples, Pompeii, Torre del Greco and Pozzuoli; arrows show the plates moving towards one another. GDP per capita (2017): US$31,953. Population density (2017): 2,650 per square kilometre.',
    tasks: [
      {
        label: 'a',
        text:
          'Choose one of the maps shown in the tabs below. Your chosen map will be included with your email. **Annotate** your chosen map by dragging and dropping:\n' +
          '• one label to show the type of plate boundary\n' +
          '• one label to show the type of tectonic activity most likely to occur at your chosen location.',
        marks: 2,
        ph: 'Drag the correct boundary + activity labels onto your chosen map. Both Java and the Bay of Naples are convergent/destructive subduction boundaries with active volcanoes → Convergent/Destructive + Volcanic activity (an earthquake is also accepted). 1 mark per correct label, max 2.',
        artefact: {
          component: 'DragAnnotate',
          caption:
            'Source B — drag a plate-boundary label and a tectonic-activity label onto your chosen map (Java, Indonesia shown). Both Java and the Bay of Naples lie on convergent (destructive) subduction boundaries with active volcanoes.',
          data: {
            title: 'Source B — annotate the plate-boundary map',
            mode: 'annotate',
            scene: 'plate-boundary',
            sceneHint: 'Map of Java, Indonesia — Indo-Australian Plate subducting beneath the Eurasian Plate (convergent/destructive boundary), forming the Merapi volcano chain',
            prompt: 'Drag one boundary-type label and one tectonic-activity label onto the marked locations on the Java map.',
            chips: [
              { id: 'convergent', text: 'Convergent' },
              { id: 'destructive', text: 'Destructive' },
              { id: 'transform', text: 'Transform' },
              { id: 'conservative', text: 'Conservative' },
              { id: 'divergent', text: 'Divergent' },
              { id: 'constructive', text: 'Constructive' },
              { id: 'volcanic', text: 'Volcanic activity' },
              { id: 'earthquake', text: 'Earthquake' },
            ],
            targets: [
              { id: 'boundary', x: 52, y: 30, label: 'Plate boundary', correctLabelId: 'convergent' },
              { id: 'activity', x: 40, y: 58, label: 'Tectonic activity', correctLabelId: 'volcanic' },
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
    topic: 'Source evaluation — ecological footprint vs population graph',
    marks: 6,
    stem:
      'An introductory video on the **greenhouse effect and ecological footprints** plays first; its transcript is shown below as a panel.\n\n' +
      '**Source D** is a graph comparing the share of the world’s ecological footprint with the share of the world’s population for 10 countries (2017). The following questions refer to Source D.',
    artefact: {
      component: 'InfoGraphicPanel',
      caption: 'Introductory video on the greenhouse effect and ecological footprints — transcript shown as a panel (Video / Transcript tabs in the original). Hover a card to spotlight it.',
      data: {
        title: 'The greenhouse effect and ecological footprints',
        source: 'Introductory video shown before Source D',
        layout: 'flow',
        intro: 'A short film explains the greenhouse effect and how we measure the demand each person places on the planet.',
        blocks: [
          {
            heading: 'A natural process',
            icon: '☀️',
            items: [
              'The greenhouse effect is a natural process.',
              'Energy from the Sun enters the Earth’s atmosphere.',
              'The energy is either absorbed by the Earth’s surface or is reflected.',
            ],
          },
          {
            heading: 'Trapping the Sun’s energy',
            icon: '🌫️',
            items: [
              'Some of the reflected energy passes through the atmosphere into space.',
              'The rest is absorbed and re-emitted by greenhouse gases.',
            ],
          },
          {
            heading: 'The Enhanced Greenhouse Effect',
            icon: '🌡️',
            items: [
              'Most scientists believe humans are causing an Enhanced Greenhouse Effect through increased emissions of greenhouse gases.',
              'This traps more of the Sun’s energy in the atmosphere, warming the planet further.',
            ],
          },
          {
            heading: 'What is an ecological footprint?',
            icon: '🌍',
            items: [
              'An ecological footprint estimates the area of productive land and sea needed to provide the resources an individual, business or country uses and to absorb its waste.',
              'The food you eat, the energy you use and the land used to make your goods all count towards your ecological footprint.',
            ],
          },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the origin of the graph shown in **Source D**.',
        marks: 1,
        ph: 'The origin (who produced it / where it is from). Accept Global Footprint Network · footprintnetwork.org.',
        artefact: SOURCE_D_TABLE,
      },
      {
        label: 'b',
        text: '**State** the purpose of the graph shown in **Source D**.',
        marks: 1,
        ph: 'Why the graph was made — e.g. to show the relationship between a country’s population size and its ecological footprint.',
      },
      {
        label: 'c',
        text: '**Outline** one value of the graph shown in **Source D** for an MYP geography student studying the management of global climate change.',
        marks: 2,
        ph: 'One value, elaborated — e.g. it lets you compare ecological footprint and population per country side by side; the 2017 data makes it more reliable.',
      },
      {
        label: 'd',
        text: '**Outline** one limitation of the graph shown in **Source D** for an MYP geography student studying the management of global climate change.',
        marks: 2,
        ph: 'One limitation, elaborated — e.g. it shows proportions not actual land area used; it shows no management strategies; it shows only one year (2017) so no change can be seen.',
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
      '**Source E** shows examples of management strategies grouped as two overlapping sets — mitigation and adaptation — with their shared goal in the overlap.',
    artefact: {
      component: 'VennOverlap',
      caption: 'Source E — examples of management strategies. The left circle lists mitigation strategies (reduce the causes); the right circle lists adaptation strategies (reduce the effects); the overlap shows the goal both share.',
      data: {
        title: 'Source E — mitigation vs adaptation strategies',
        source: 'Examples of management strategies',
        setA: {
          label: 'Mitigation (reduce the causes)',
          color: '#2f9e44',
          items: ['Energy-efficient transport', 'Carbon tax'],
        },
        setB: {
          label: 'Adaptation (reduce the effects)',
          color: '#e8590c',
          items: ['Coastal sea walls', 'Drought-resistant crops'],
        },
        overlapLabel: 'Protecting people from climate change',
        caption: 'Mitigation reduces greenhouse-gas emissions (the causes); adaptation reduces vulnerability to impacts (the effects); both aim to protect people and places.',
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
    topic: 'Extended essay — ecological footprint vs population share',
    marks: 24,
    stem:
      'The graph from **Source D** is repeated here. It shows that the United States of America contributes 17.4% of the world’s ecological footprint but only 4.5% of the world’s population.\n\n' +
      'Some have argued that a new global agreement should be signed to make sure that a country’s share of the world’s ecological footprint is not higher than its share of the world’s population.',
    artefact: SOURCE_D_TABLE,
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
        ph: 'A structured essay (intro/body/conclusion) weighing whether a country’s ecological-footprint share should be capped at its population share, with ≥2 perspectives and examples. Marked: Knowledge (Crit A /8), Format /2, Communicating /3, Organization /3, Thinking critically (Crit D /8).',
      },
    ],
  },
]
