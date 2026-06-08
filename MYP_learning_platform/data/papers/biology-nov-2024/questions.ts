import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2024',
  subject: 'Biology',
  session: 'Nov',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // Q1 — Cell Biology (10 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Cell Biology',
    marks: 10,
    stem: 'The diagram shows the organelles present in an animal cell.',
    figImages: ['/images/papers/biology-nov-2024/page-07.png'],
    tasks: [
      {
        label: 'a',
        text: 'Complete the table by **matching** each organelle to its function. Drag the organelle names to the correct function row.',
        marks: 2,
        ph: 'Use the drag-and-drop to match each organelle to its function.',
        widget: 'match_drag_drop',
        widgetItems: [
          'Stores genetic material',
          'Controls what goes in and out of the cell',
          'Makes proteins',
        ],
        widgetOptions: ['Nucleus', 'Cell membrane', 'Ribosome', 'Mitochondria', 'Cytoplasm'],
      },
      {
        label: 'b',
        text: 'State **one** function of red blood cells and **one** function of white blood cells.',
        marks: 2,
        ph: 'Red blood cells: ...\nWhite blood cells: ...',
      },
      {
        label: 'c',
        text: 'A sperm cell contains a haploid nucleus. **Explain** the importance of the sperm cell having a haploid nucleus.',
        marks: 3,
        ph: 'A haploid nucleus means the cell contains half the normal number of chromosomes. When a sperm fertilises an egg...',
      },
      {
        label: 'd',
        text: 'Compare aerobic respiration and anaerobic respiration in animal cells.',
        marks: 3,
        ph: 'Aerobic requires oxygen whereas anaerobic does not...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q2 — Hormones & Reproduction (11 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Hormones & Reproduction',
    marks: 11,
    stem: 'During puberty, hormones cause physical changes in the human body. The graph below shows the levels of hormones during the menstrual cycle.',
    figImages: ['/images/papers/biology-nov-2024/page-19.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** one physical change that occurs in females only and one physical change that occurs in males only during puberty.',
        marks: 2,
        ph: 'Female only: ...\nMale only: ...',
      },
      {
        label: 'b',
        text: 'Using the graph, **explain** the roles of estrogen and progesterone in the menstrual cycle.',
        marks: 3,
        ph: 'Estrogen thickens the uterus lining...\nProgesterone maintains the lining so that...',
      },
      {
        label: 'c',
        text: '**State** the role of LH (luteinising hormone) in the menstrual cycle.',
        marks: 1,
        ph: 'LH triggers...',
      },
      {
        label: 'd',
        text: 'Human growth hormone (HGH) can be produced using genetically modified bacteria. The steps in this process are shown below. **Complete** the missing steps (1, 4 and 5).\n\n1. ___BLANK_1___\n2. HGH gene inserted into a bacterial plasmid.\n3. Plasmid inserted into bacteria.\n4. ___BLANK_2___\n5. ___BLANK_3___',
        marks: 3,
        ph: 'Fill in the three missing steps of the genetic modification process.',
        widget: 'fill_blank',
      },
      {
        label: 'e',
        text: 'HGH is given as an injection rather than as a tablet. **Explain** why HGH cannot be taken as a tablet.',
        marks: 2,
        ph: 'If taken as a tablet, HGH would...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q3 — Classification (7 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Classification',
    marks: 7,
    stem: 'Scientists classify organisms into groups based on their characteristics. The diagram below shows the homologous limb bones of several vertebrates.',
    figImages: ['/images/papers/biology-nov-2024/page-25.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** one characteristic of mammals.',
        marks: 1,
        ph: 'Mammals...',
        widget: 'radio_select',
        widgetOptions: [
          'Have mammary glands to feed young with milk',
          'Are cold-blooded and lay eggs',
          'Have scales covering their body',
          'Breathe using gills',
        ],
      },
      {
        label: 'b',
        text: 'A student states that homologous limb bones can be used to identify mammals. **Evaluate** this statement using the diagram.',
        marks: 3,
        ph: 'The student is incorrect because homologous bones are present in mammals AND non-mammals such as...',
      },
      {
        label: 'c',
        text: 'Bird bones have a dense outer layer and air pockets inside. **Explain** how these two features are adaptations for flight.',
        marks: 3,
        ph: 'Dense bones increase strength/stiffness...\nAir pockets reduce weight so...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q4 — Hydrangea Investigation (13 marks, Criterion C)
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis & Ecosystems',
    marks: 13,
    stem: 'Students investigated the relationship between soil pH and hydrangea flower colour. They measured the soil pH at locations where white, blue and pink hydrangeas were growing.',
    figImages: [
      '/images/papers/biology-nov-2024/page-27.png',
      '/images/papers/biology-nov-2024/page-28.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'Classify the following as **biotic** or **abiotic** factors in the hydrangea habitat by dragging each factor to the correct column.',
        marks: 1,
        ph: 'Drag each factor to either Biotic or Abiotic.',
        widget: 'match_drag_drop',
        widgetItems: ['Bacteria', 'Insects', 'Water', 'Light', 'Soil pH', 'Temperature'],
        widgetOptions: ['Biotic factors', 'Abiotic factors'],
      },
      {
        label: 'b',
        text: 'The table below shows the soil pH values recorded for **blue** hydrangeas. Calculate the mean soil pH for blue hydrangeas. Give your answer to three significant figures.\n\n| Measurement | Soil pH |\n|---|---|\n| 1 | 5.2 |\n| 2 | 5.1 |\n| 3 | 5.4 |\n| 4 | 5.7 |\n| 5 | 5.3 |\n| 6 | 5.5 |',
        marks: 2,
        ph: 'Mean = (5.2 + 5.1 + ... ) ÷ 6 = ...',
      },
      {
        label: 'c',
        text: 'Using your answer to part (b) and the data provided, **draw** a bar chart to show the average soil pH for each hydrangea colour. Label both axes fully and include correct units.',
        marks: 5,
        ph: 'Describe or sketch your bar chart:\n\nY-axis label: ...\nX-axis label: ...\nScale: ...\nBars drawn for: White (pH ~6.8), Blue (pH ~5.36), Pink (pH ~7.2)...',
      },
      {
        label: 'd',
        text: '**State** the type of data represented on the x-axis of your bar chart.',
        marks: 1,
        ph: 'The data on the x-axis is...',
      },
      {
        label: 'e',
        text: '**Suggest** one way the students could improve the reliability of their results.',
        marks: 2,
        ph: 'To improve reliability, the students could...',
      },
      {
        label: 'f',
        text: 'The dot plot below shows the soil pH values recorded for each hydrangea colour, including white hydrangeas. A student suggests that white hydrangeas might be a different species. **Evaluate** this suggestion using the dot plot data.',
        marks: 2,
        ph: 'The dot plot shows that white hydrangeas are found across a wide range of soil pH values...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — Zoysia Grass pH Investigation (16 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation',
    marks: 16,
    stem: 'Students investigated how soil pH affects the growth of *Zoysia* grass. They planted *Zoysia* grass seeds in five pots containing soils of pH 5, 6, 7, 8, and 9. Each pot was watered with the same volume of water daily for two weeks. The chemicals used to manipulate the soil pH were unknown to the students.',
    figImages: [
      '/images/papers/biology-nov-2024/page-35.png',
      '/images/papers/biology-nov-2024/page-36.png',
      '/images/papers/biology-nov-2024/page-37.png',
      '/images/papers/biology-nov-2024/page-38.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'The students did not know which chemicals were used to manipulate the soil pH. **State** and **justify** a safety precaution they should take when working with the different soils.',
        marks: 2,
        ph: 'Safety precaution: ...\nJustification: because the soils could be acidic or alkaline...',
      },
      {
        label: 'b',
        text: '**Identify** the independent variable, the dependent variable and **two** control variables used in the investigation above.',
        marks: 4,
        ph: 'Independent variable: ...\nDependent variable: ...\nControl variable 1: ...\nControl variable 2: ...',
      },
      {
        label: 'c',
        text: '**Suggest** two different control variables that were **not** included in the method above.',
        marks: 2,
        ph: 'Control variable 1: ...\nControl variable 2: ...',
      },
      {
        label: 'd',
        text: 'After two weeks, the students recorded the number of blades of grass in each pot:\n\n| Soil pH | Number of blades of grass |\n|---|---|\n| 5 | 2 |\n| 6 | 5 |\n| 7 | 5 |\n| 8 | 3 |\n| 9 | 0 |\n\nThe students made the following hypothesis: *"If the soil has a pH of 7, then there will be more blades of grass, because that is the optimum pH."*\n\nUse the results in the table to **discuss** the validity of their hypothesis.',
        marks: 3,
        ph: 'The results show the maximum number of blades at pH 7, however pH 6 also gave 5 blades. The hypothesis is only partially supported because...',
      },
      {
        label: 'e',
        text: 'The students also measured the length of each blade of grass after two weeks:\n\n| Soil pH | Blade 1 | Blade 2 | Blade 3 | Blade 4 | Blade 5 |\n|---|---|---|---|---|---|\n| 5 | 6 mm | 8 mm | — | — | — |\n| 6 | 3.0 cm | 3.2 cm | 3.5 cm | 4.0 cm | 3.8 cm |\n| 7 | 4.0 cm | 4.9 cm | 4.1 cm | 4.6 cm | 4.8 cm |\n| 8 | 1 cm | 1 cm | 1 cm | — | — |\n| 9 | — | — | — | — | — |\n\n*(— = no seeds germinated)*\n\nUsing the data in part (d) and the data above, **identify** the optimum soil pH for growing *Zoysia* grass. **Justify** your answer.',
        marks: 2,
        ph: 'The optimum soil pH is... because at this pH the most blades germinated AND the greatest average length was recorded.',
      },
      {
        label: 'f',
        text: 'One student suggested that 6.5 might be the optimum soil pH for *Zoysia* grass growth. **Suggest** how the student could verify this.',
        marks: 1,
        ph: 'To verify this, the student could...',
      },
      {
        label: 'g',
        text: '**Suggest** two improvements to the **presentation** of the students\' data in part (e).',
        marks: 2,
        ph: 'Improvement 1: ...\nImprovement 2: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Mushroom Growth Design (17 marks, Criterion B)
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design',
    marks: 17,
    stem: 'Students noticed that mushrooms were growing in a wide variety of locations around their school. They decided to investigate a factor affecting the growth of mushrooms. They formulated the following research question:\n\n**"How does temperature affect the growth of mushrooms?"**\n\nAfter carrying out some initial research, the students decided to use biomass as a measure of growth. Biomass is the total mass of living organisms not including the water they contain.\n\nThe students have access to any equipment they need, including soil, mushroom spores, an incubator and a drying oven.',
    figImages: [
      '/images/papers/biology-nov-2024/page-49.png',
    ],
    tasks: [
      {
        label: '',
        text: '**Design** an investigation that would allow the students to obtain quantitative data to answer the research question. In your answer, you must include:\n\n- the independent variable, the dependent variable and two control variables\n- a testable hypothesis with a scientific explanation\n- details of additional equipment needed\n- details of how to manipulate, measure or monitor all of the variables\n- details of the method to collect sufficient data\n- one safety consideration',
        marks: 17,
        ph: 'Independent variable: temperature (e.g. 10°C, 20°C, 30°C, 40°C)\nDependent variable: dry biomass (g) of mushrooms\nControl variables: (1) volume of soil used, (2) amount of mushroom spores...\n\nHypothesis: If temperature increases, then mushroom biomass will increase up to an optimum temperature, because enzymes in mushroom cells work faster at higher temperatures until they denature.\n\nEquipment: incubators set to different temperatures, drying oven, balance, identical containers...\n\nMethod: ...\n\nSafety: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Forest Ecosystems (10 marks, Criterion D)
  // ─────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Ecosystems & Sustainability',
    marks: 10,
    stem: 'Careful management of ecosystems is essential if global development is to become more sustainable. Forest ecosystems cover 31% of the land area on our planet. Forest ecosystem services contribute to human well-being in a variety of ways.',
    figImages: [
      '/images/papers/biology-nov-2024/page-52.png',
      '/images/papers/biology-nov-2024/page-53.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'The images show examples of the four categories of ecosystem service. **Complete the table** by selecting and dragging the correct ecosystem service to each category.\n\n**Already given:** Products → Fruits and berries; Regulation → Carbon fixation; Cultural → Well-being; Support → Nutrient cycling',
        marks: 1,
        ph: 'Drag the four remaining services to the correct column.',
        widget: 'match_drag_drop',
        widgetItems: ['Raw materials', 'Purification of water', 'Recreational activities', 'Soil formation'],
        widgetOptions: ['Products', 'Regulation', 'Cultural', 'Support'],
      },
      {
        label: 'b',
        text: '**Outline** why nutrient cycling is an example of a support service.',
        marks: 2,
        ph: 'Nutrient cycling supports all other ecosystem services because it leads to increased availability of nutrients, which...',
      },
      {
        label: 'c',
        text: 'One consequence of a growing global population is an increased demand for food. Additional farmland is needed to meet this demand, often produced through deforestation — where trees are cut down and the remains burned. The image below shows the carbon cycle.\n\nUsing the image, **discuss** the consequences of deforestation on the **carbon cycle**.',
        marks: 6,
        ph: 'Deforestation leads to an increase in atmospheric carbon dioxide because...\nFewer trees means less carbon stored in living organisms...\nIncreased combustion from burning releases stored carbon...',
        figImages: ['/images/papers/biology-nov-2024/page-62.png'],
      },
      {
        label: 'd',
        text: 'Increased deforestation has been linked to global warming and climate change. **Suggest** one other **environmental** consequence of deforestation.',
        marks: 1,
        ph: 'Another environmental consequence is...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q8 — Forest Regeneration (16 marks, Criterion D)
  // ─────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Sustainability & Forest Regeneration',
    marks: 16,
    stem: 'Forests can be regenerated for different purposes using a range of methods. The three main methods of regeneration are:\n\n**Natural regeneration** — relies on older trees left on the land to provide seeds; healthiest trees selected as seed trees, then remaining trees cut down; soil prepared by adding nutrients; weeds removed; site managed to optimise growth. Takes ~9 years.\n\n**Direct seeding** — landowner applies a known quantity of seeds directly to the land; soil prepared, seeds stored below 2°C; seeds treated to increase germination rate; planted in spring or autumn; weeds removed; takes ~8 years.\n\n**Planting seedlings** — seedlings grown in tree nurseries, then transported in refrigerated vehicles and planted at the site; soil prepared; weeds removed; 2 people can plant 1,000–2,000 trees per day by hand or 8,000–10,000 with machinery; seedlings require more care including regular watering. Takes ~5 years.',
    figImages: [
      '/images/papers/biology-nov-2024/page-67.png',
      '/images/papers/biology-nov-2024/page-84.png',
      '/images/papers/biology-nov-2024/page-85.png',
    ],
    tasks: [
      {
        label: '',
        text: 'Using information from this task and your wider MYP studies, **discuss** and **evaluate** the different methods for forest regeneration. In your answer, you must include:\n\n- two reasons to regenerate forests\n- a scientific explanation of why planning for regeneration is important\n- a discussion of different environmental consequences for two methods\n- a discussion of different economic considerations for two methods\n- a concluding appraisal justifying your opinion of which is the best method of regeneration',
        marks: 16,
        ph: 'Forests should be regenerated for two main reasons: (1) to provide more resources such as raw materials and (2) to restore/promote biodiversity and habitats.\n\nPlanning is important because...\n\nEnvironmental consequences:\n- Natural regeneration: ...\n- Direct seeding: ...\n\nEconomic considerations:\n- Planting seedlings: ...\n- Direct seeding: ...\n\nConclusion: In my opinion, the best method is... because...',
      },
    ],
  },
]
