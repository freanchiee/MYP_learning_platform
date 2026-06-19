import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2019',
  subject: 'Biology',
  session: 'Nov',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // Q1 — Food Web & Ecosystems (11 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Ecosystems & Food Webs',
    topicCanonical: 'Food Chains & Webs',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Interdependency'],
    marks: 11,
    stem: 'The diagram shows a food web from a savanna ecosystem. The organisms shown include: lion, vulture, leopard, giraffe, rhino, baboon, skunk, shrike, snake, impala, caracal, grasshopper, mouse, tree, grass, and shrub.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Savanna food web',
        source: 'savanna ecosystem',
        nodes: [
          { id: 'grass', label: 'Grass', color: '#2f9e44', detail: 'Producer — makes its own food by photosynthesis. Eaten by grasshopper, mouse, impala, giraffe and rhino.' },
          { id: 'shrub', label: 'Shrub', color: '#2f9e44', detail: 'Producer — eaten by impala, baboon, giraffe and rhino.' },
          { id: 'tree', label: 'Tree', color: '#2f9e44', detail: 'Producer — eaten by giraffe and baboon.' },
          { id: 'grasshopper', label: 'Grasshopper', color: '#f08c00', detail: 'Primary consumer (herbivore) — eats grass. Eaten by shrike, mouse and baboon.' },
          { id: 'mouse', label: 'Mouse', color: '#f08c00', detail: 'Primary consumer — eats grass and grasshoppers. Eaten by snake, shrike and caracal.' },
          { id: 'impala', label: 'Impala', color: '#f08c00', detail: 'Primary consumer (herbivore) — eats grass and shrub. Eaten by lion, leopard and caracal.' },
          { id: 'giraffe', label: 'Giraffe', color: '#f08c00', detail: 'Primary consumer — eats tree, shrub and grass. Eaten by lion.' },
          { id: 'rhino', label: 'Rhino', color: '#f08c00', detail: 'Primary consumer — eats grass and shrub.' },
          { id: 'baboon', label: 'Baboon', color: '#9c36b5', detail: 'Omnivore / secondary consumer — eats shrub, tree and grasshoppers. Eaten by leopard.' },
          { id: 'shrike', label: 'Shrike', color: '#9c36b5', detail: 'Secondary consumer (bird) — eats grasshoppers and mice.' },
          { id: 'snake', label: 'Snake', color: '#9c36b5', detail: 'Secondary consumer — eats mice. Eaten by caracal.' },
          { id: 'caracal', label: 'Caracal', color: '#1971c2', detail: 'Secondary / tertiary consumer (predator cat) — eats mice, snakes and impala.' },
          { id: 'leopard', label: 'Leopard', color: '#1971c2', detail: 'Tertiary consumer (top predator) — eats impala and baboon.' },
          { id: 'lion', label: 'Lion', color: '#1971c2', detail: 'Tertiary consumer (top predator) — eats impala and giraffe.' },
          { id: 'skunk', label: 'Skunk', color: '#c2255c', detail: 'Omnivore — feeds opportunistically; not a prey item in this web.' },
          { id: 'vulture', label: 'Vulture', color: '#495057', detail: 'Scavenger — feeds on the remains of dead animals (a decomposer-type role not shown by feeding arrows).' },
        ],
        edges: [
          { from: 'grass', to: 'grasshopper' },
          { from: 'grass', to: 'mouse' },
          { from: 'grass', to: 'impala' },
          { from: 'grass', to: 'giraffe' },
          { from: 'grass', to: 'rhino' },
          { from: 'shrub', to: 'impala' },
          { from: 'shrub', to: 'baboon' },
          { from: 'shrub', to: 'giraffe' },
          { from: 'shrub', to: 'rhino' },
          { from: 'tree', to: 'giraffe' },
          { from: 'tree', to: 'baboon' },
          { from: 'grasshopper', to: 'shrike' },
          { from: 'grasshopper', to: 'mouse' },
          { from: 'grasshopper', to: 'baboon' },
          { from: 'mouse', to: 'snake' },
          { from: 'mouse', to: 'shrike' },
          { from: 'mouse', to: 'caracal' },
          { from: 'snake', to: 'caracal' },
          { from: 'impala', to: 'lion' },
          { from: 'impala', to: 'leopard' },
          { from: 'impala', to: 'caracal' },
          { from: 'giraffe', to: 'lion' },
          { from: 'baboon', to: 'leopard' },
        ],
      },
      caption: 'Each link runs from an organism to what eats it (the direction of energy flow). Tap any organism to see what it eats and what eats it. Producers (green), primary consumers (orange), secondary consumers (purple), top predators (blue).',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the type of model shown in the diagram.',
        marks: 1,
        ph: 'The model is called a ...',
      },
      {
        label: 'b',
        text: '**State** what the arrows in the diagram represent.',
        marks: 1,
        ph: 'The arrows represent...',
      },
      {
        label: 'c',
        text: '**Identify** one producer and two secondary consumers from the food web.',
        marks: 2,
        ph: 'Producer: ...\nSecondary consumer 1: ...\nSecondary consumer 2: ...',
      },
      {
        label: 'd',
        text: 'The impala population decreases due to disease. **Explain** how the populations of shrub and baboon would change.',
        marks: 5,
        ph: 'Shrub population: ...\nBaboon population: ...',
      },
      {
        label: 'e',
        text: '**State** the role of decomposers in an ecosystem.',
        marks: 1,
        ph: 'Decomposers...',
      },
      {
        label: 'f',
        text: '**Suggest** one other limitation of a food web as a model of an ecosystem.',
        marks: 1,
        ph: 'Another limitation is...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q2 — Cells & Photosynthesis (12 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Cell Biology & Photosynthesis',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Cell Structure & Function'],
    marks: 12,
    stem: 'This question is about cells and how plants produce glucose.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="360" fill="#ffffff"/><text x="160" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Animal cell</text><text x="480" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Plant cell</text><ellipse cx="160" cy="190" rx="120" ry="105" fill="#f6c89a" stroke="#d98e3c" stroke-width="3"/><circle cx="150" cy="175" r="40" fill="#a23a93" stroke="#7a2a6e" stroke-width="2"/><circle cx="150" cy="175" r="13" fill="#5e1d54"/><ellipse cx="95" cy="235" rx="26" ry="12" fill="#2f6fb0" stroke="#1f4f80" transform="rotate(-25 95 235)"/><ellipse cx="210" cy="120" rx="24" ry="11" fill="#2f6fb0" stroke="#1f4f80" transform="rotate(20 210 120)"/><ellipse cx="205" cy="235" rx="24" ry="11" fill="#2f6fb0" stroke="#1f4f80" transform="rotate(-15 205 235)"/><text x="150" y="178" font-size="9" text-anchor="middle" fill="#fff">nucleus</text><line x1="95" y1="235" x2="46" y2="270" stroke="#475569"/><text x="44" y="284" font-size="10" text-anchor="end" fill="#475569">mitochondrion</text><line x1="270" y1="190" x2="300" y2="190" stroke="#475569"/><text x="304" y="193" font-size="10" fill="#475569">cell membrane</text><line x1="150" y1="135" x2="150" y2="110" stroke="#475569"/><text x="150" y="104" font-size="10" text-anchor="middle" fill="#475569">cytoplasm</text><rect x="372" y="90" width="216" height="200" rx="6" fill="#cdeee0" stroke="#3a7d44" stroke-width="6"/><rect x="384" y="102" width="192" height="176" rx="4" fill="#f4f9c8" stroke="#c9d36a" stroke-width="2"/><rect x="430" y="135" width="120" height="115" rx="10" fill="#7fd0e6" stroke="#3f9fc0" stroke-width="2"/><text x="490" y="196" font-size="11" text-anchor="middle" fill="#1f6b86">large</text><text x="490" y="210" font-size="11" text-anchor="middle" fill="#1f6b86">vacuole</text><circle cx="412" cy="135" r="26" fill="#a23a93" stroke="#7a2a6e" stroke-width="2"/><circle cx="412" cy="135" r="8" fill="#5e1d54"/><text x="412" y="138" font-size="8" text-anchor="middle" fill="#fff">nucleus</text><ellipse cx="408" cy="200" rx="20" ry="10" fill="#2f9e44" stroke="#216b30" transform="rotate(-20 408 200)"/><ellipse cx="402" cy="240" rx="20" ry="10" fill="#2f9e44" stroke="#216b30" transform="rotate(15 402 240)"/><ellipse cx="455" cy="262" rx="20" ry="10" fill="#2f9e44" stroke="#216b30"/><line x1="588" y1="120" x2="616" y2="108" stroke="#3a7d44"/><text x="600" y="100" font-size="10" text-anchor="middle" fill="#2f6b35">cell wall</text><line x1="408" y1="200" x2="350" y2="200" stroke="#216b30"/><text x="346" y="203" font-size="10" text-anchor="end" fill="#216b30">chloroplast</text></svg>',
      },
      caption: 'A model animal cell (left) and plant cell (right). The plant cell additionally has a cell wall, chloroplasts and a large permanent vacuole, which the animal cell does not.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct statement about cells.',
        marks: 1,
        ph: 'Select the correct statement.',
        widget: 'radio_select',
        widgetOptions: [
          'Cells are found in plants but not fungi',
          'Cells are the smallest unit of life',
          'All cells go through meiosis',
          'All cells are the same size',
        ],
      },
      {
        label: 'b',
        text: 'The diagram below shows an animal cell and a plant cell. **State** two structures present in the plant cell but not in the animal cell and **outline** the function of each structure.',
        marks: 4,
        ph: 'Structure 1: ... Function: ...\nStructure 2: ... Function: ...',
      },
      {
        label: 'c',
        text: '**Describe** the role of chlorophyll in glucose production in plants.',
        marks: 4,
        ph: 'Chlorophyll absorbs light... light energy is used to...',
      },
      {
        label: 'd',
        text: 'The roots of a plant cannot produce glucose but they need glucose for growth. **Outline** how the roots obtain glucose.',
        marks: 3,
        ph: 'Glucose is produced in the leaves by photosynthesis. It is then transported...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q3 — Yeast Respiration Experiment (10 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation — Respiration',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Cell Respiration'],
    marks: 10,
    stem: 'Yeast is a microorganism that is commonly used to make bread and beer.\n\nYeast must respire to survive. Respiration is a reaction that occurs in the cells of living things, and is controlled by specific enzymes.\n\nSome students planned a simple experiment to find out how temperature affects respiration in yeast. The students collected the carbon dioxide produced during respiration in a balloon. They suggested the following research question:\n\n**"How does temperature affect the rate of respiration in yeast as measured by the volume of carbon dioxide produced in 15 minutes?"**\n\nThe experiment used sugar solution mixed with yeast solution, placed in three flasks held in water baths at 20 °C, 40 °C, and 60 °C for 15 minutes. The size of the balloon attached to each flask was compared after 15 minutes.',
    artefact: {
      component: 'RateSim',
      data: {
        mode: 'gasVolume',
        title: 'CO₂ produced by yeast respiration at three temperatures',
        source: "students' experiment",
        variable: 'water-bath temperature',
        xLabel: 'Time',
        yLabel: 'Volume of CO₂ collected',
        xAxis: { label: 'Time (minutes)', min: 0, max: 15, step: 3 },
        yAxis: { label: 'Volume of CO₂ (cm³)', min: 0, max: 65, step: 10 },
        note: 'Each flask holds equal volumes of sugar solution + yeast solution; a balloon collects the CO₂ given off by respiration. Press Play to fill the balloons; only the volume after 15 minutes is recorded. Respiration is fastest near 40 °C (the enzymes’ optimum), slower at 20 °C, and slowest at 60 °C where the enzymes start to denature.',
        options: [
          { label: '40 °C (largest balloon)', color: 'orange', ratePerSec: 5, plateauVolume: 60 },
          { label: '20 °C (small balloon)', color: 'blue', ratePerSec: 2.5, plateauVolume: 30 },
          { label: '60 °C (very small balloon)', color: 'pink', ratePerSec: 1, plateauVolume: 10 },
        ],
      },
      caption: 'The students\' set-up shown as CO₂ volume collected over the 15-minute run at 20 °C, 40 °C and 60 °C. Press Play and overlay the temperatures to compare. Respiration is fastest at 40 °C (near the enzyme optimum), slower at 20 °C, and slowest at 60 °C where the enzymes begin to denature. Only the final volume after 15 minutes is measured.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the variables in this experiment: the independent variable, the dependent variable, and **two** control variables.',
        marks: 4,
        ph: 'Independent variable: ...\nDependent variable: ...\nControl variable 1: ...\nControl variable 2: ...',
      },
      {
        label: 'b',
        text: '**Outline** if the method in the interactive graphic above will give sufficient data to answer the research question. **Justify** your answer.',
        marks: 2,
        ph: 'The method will / will not give sufficient data because...',
      },
      {
        label: 'c',
        text: '**Suggest** two improvements to this experiment. **Justify** your improvements.',
        marks: 4,
        ph: 'Improvement 1: ...\nJustification: ...\nImprovement 2: ...\nJustification: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q4 — Investigating Different Sugars (21 marks, Criterion B)
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation — Enzymes & Sugars',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Enzymes & Biochemistry'],
    marks: 21,
    stem: 'The students continued to investigate respiration in yeast. They were interested in investigating different sugars.\n\nZymase is an enzyme found in yeast which is important in respiration. The image below shows a model of zymase and five different sugars: fructose, glucose, sucrose, lactose and maltose.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="420" fill="#ffffff"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Model of the enzyme zymase and five sugars (lock-and-key)</text><path d="M150,200 m0,-90 a90,90 0 1 0 0,180 a90,90 0 0 0 0,-180 Z M150,200 L235,165 L235,235 Z" fill="#2c2c2c" fill-rule="evenodd"/><text x="150" y="318" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Zymase</text><text x="150" y="336" font-size="10" text-anchor="middle" fill="#64748b">(enzyme — note the wedge-shaped active site)</text><g><path d="M430,60 L470,90 L430,120 Z" fill="#2c2c2c"/><text x="500" y="95" font-size="12" font-weight="600" fill="#1f2d3a">Fructose</text></g><g><polygon points="450,150 470,162 470,186 450,198 430,186 430,162" fill="#2c2c2c"/><text x="500" y="178" font-size="12" font-weight="600" fill="#1f2d3a">Glucose</text></g><g><circle cx="442" cy="240" r="16" fill="#2c2c2c"/><circle cx="462" cy="252" r="12" fill="#2c2c2c"/><text x="500" y="248" font-size="12" font-weight="600" fill="#1f2d3a">Sucrose</text></g><g><path d="M430,300 q26,-18 36,4 q-6,26 -26,20 q-18,-6 -10,-24 Z" fill="#2c2c2c"/><text x="500" y="316" font-size="12" font-weight="600" fill="#1f2d3a">Lactose</text></g><g><rect x="430" y="358" width="40" height="36" fill="#2c2c2c"/><text x="500" y="380" font-size="12" font-weight="600" fill="#1f2d3a">Maltose</text></g><text x="40" y="406" font-size="10" fill="#94a3ad">A substrate is respired only if its shape is complementary to the enzyme&apos;s active site.</text></svg>',
      },
      caption: 'A model of zymase (a Pac-Man-shaped enzyme with a triangular active site) and five sugars of different shapes. Only a sugar whose shape is complementary to the active site can bind and be respired.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a research question for an investigation into the effect of different sugars on the rate of respiration of yeast.',
        marks: 2,
        ph: 'How does the type of sugar affect the rate of respiration in yeast as measured by...',
      },
      {
        label: 'b',
        text: 'Using the model of zymase and the five sugars shown above, **predict** which sugar is most likely to be respired by the yeast. **Justify** your answer.',
        marks: 4,
        ph: 'The sugar most likely to be respired is ... because its shape fits the active site of zymase...',
      },
      {
        label: 'c',
        text: '**Design** an investigation into the effect of different sugars on the **rate** of respiration of yeast. In your answer, you should include:\n\n- the independent, dependent and two control variables\n- how you will collect sufficient data and process it\n- any additional equipment you will need to make measurements or to control variables\n- the method that you will use.',
        marks: 15,
        ph: 'Independent variable: type of sugar (fructose, glucose, sucrose, lactose, maltose)\nDependent variable: volume of CO₂ produced / size of balloon after 15 minutes\nControl variables: (1) volume of sugar solution, (2) concentration of sugar solution, (3) temperature...\n\nEquipment: flasks, balloons, measuring cylinders, water bath, ruler/syringe to measure balloon size...\n\nMethod: Prepare equal volumes of each sugar solution at the same concentration. Mix with equal volumes of yeast solution. Attach a balloon to each flask. Place all flasks in a water bath at the same temperature. Record balloon size after 15 minutes. Repeat three times for each sugar. Calculate mean. Process by comparing means...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — Fermentation & Biofuels (23 marks, Criterion C/D)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis — Fermentation & Biofuels',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    marks: 23,
    stem: 'Another term for respiration in yeast is *fermentation*. Fermentation of plant materials is used to produce ethanol, which can be used as biofuel. The main sources of plant material used around the world today are wheat, corn, soybeans, and sugarcane. These food sources are used because they have a high sugar content and they ferment easily.\n\nSome students decided to investigate if other food sources could be fermented. They were particularly interested in waste products — parts of food that are thrown away rather than eaten.\n\nThe food waste they chose to study was from **water chestnuts** and **pineapples**. Their method: (1) grow the yeast; (2) collect food waste; (3) dry it in an oven and grind it to a powder; (4) mix the yeast solution with the food-waste powder; (5) place the mixture in a beaker of warm water to allow fermentation; (6) measure the mass of ethanol present each day.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Food waste', 'Day 1', 'Day 3', 'Day 5', 'Day 7', 'Day 9', 'Day 11', 'Carbohydrate / g per 100 g'],
        rows: [
          ['Water chestnut', '2.6', '4.5', '3.4', '3.1', '2.3', '2.0', '24'],
          ['Pineapple', '2.3', '5.6', '9.0', '3.4', '1.3', '1.3', '13'],
        ],
      },
      caption: 'Mass of ethanol produced each day from 10 g of food waste (mg), with the carbohydrate content of each food (from the nutrition labels). Use this data for parts (c) to (i).',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** one advantage of biofuels over fossil fuels.',
        marks: 1,
        ph: 'One advantage of biofuels is...',
      },
      {
        label: 'b',
        text: '**State** two advantages of using food waste rather than food crops to produce biofuels.',
        marks: 2,
        ph: 'Advantage 1: ...\nAdvantage 2: ...',
      },
      {
        label: 'c',
        text: 'The results from the students\' investigation are shown in the table below. For each of the food wastes, **identify** the day on which the largest mass of ethanol was produced.\n\n| | Day 1 | Day 3 | Day 5 | Day 7 | Day 9 | Day 11 |\n|---|---|---|---|---|---|---|\n| Water chestnut | 2.6 | 4.5 | 3.4 | 3.1 | 2.3 | 2.0 |\n| Pineapple | 2.3 | 5.6 | 9.0 | 3.4 | 1.3 | 1.3 |\n\n*(Mass of ethanol produced each day from 10 g of food waste / mg)*\n\nWater chestnut: Day ___BLANK_1___\nPineapple: Day ___BLANK_2___',
        marks: 1,
        ph: 'Fill in the day numbers for each food waste.',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: 'The graph below already shows the data for pineapple waste. **Plot** the data for water chestnut waste on the graph. You should also **add a title** to the graph and **label the axes**.\n\n*(Describe what your completed graph would look like, including key features.)*',
        marks: 5,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Ethanol produced from pineapple waste (already plotted)',
            xLabel: 'Day',
            yLabel: 'Mass of ethanol',
            yUnit: 'mg',
            xMin: 0,
            xMax: 11,
            yMin: 0,
            yMax: 10,
            xStep: 1,
            yStep: 1,
            dataPoints: [
              { x: 1, y: 2.3 },
              { x: 3, y: 5.6 },
              { x: 5, y: 9.0 },
              { x: 7, y: 3.4 },
              { x: 9, y: 1.3 },
              { x: 11, y: 1.3 },
            ],
          },
          caption: 'The pineapple-waste data is already plotted. You plot the water-chestnut data on top: Day 1 = 2.6, Day 3 = 4.5, Day 5 = 3.4, Day 7 = 3.1, Day 9 = 2.3, Day 11 = 2.0 mg.',
        },
        ph: 'Title: Mass of ethanol produced from food waste over time\nX-axis: Day / day(s)\nY-axis: Mass of ethanol / mg\nWater chestnut points: Day 1 = 2.6, Day 3 = 4.5, Day 5 = 3.4, Day 7 = 3.1, Day 9 = 2.3, Day 11 = 2.0\nPoints correctly plotted and joined with a smooth curve...',
      },
      {
        label: 'e',
        text: '**Outline** two trends in ethanol production for pineapple waste. **Explain** these trends using scientific reasoning.',
        marks: 6,
        ph: 'Trend 1: Ethanol production increases initially (until day 5).\nExplanation: The yeast population is growing, so there is more respiration occurring...\n\nTrend 2: After day 5, ethanol production decreases.\nExplanation: Food supply becomes limited, so less respiration occurs. Or ethanol builds up to toxic levels, causing yeast cells to die...',
      },
      {
        label: 'f',
        text: 'The table shows that the total mass of ethanol produced by water chestnut over all days was 17.9 mg. **Calculate** the total mass of ethanol produced by pineapple waste over the 11 days. Show your working.',
        marks: 1,
        ph: 'Total = 2.3 + 5.6 + 9.0 + 3.4 + 1.3 + 1.3 = ...',
      },
      {
        label: 'g',
        text: '**Calculate** the difference in total mass of ethanol produced between the two types of food waste.',
        marks: 1,
        ph: 'Difference = ... − 17.9 = ...',
      },
      {
        label: 'h',
        text: 'The nutritional information shows that pineapple contains 13 g of carbohydrates per 100 g, while water chestnut contains 24 g of carbohydrates per 100 g. The students predicted that a food source containing more carbohydrate will produce more ethanol.\n\n**Suggest** reasons why this prediction is **not** supported by the results in part (f).',
        marks: 2,
        ph: 'Water chestnut has a higher carbohydrate content but produced less ethanol because...',
      },
      {
        label: 'i',
        text: 'The temperature of the water baths was not controlled in the students\' method. **Identify** two other variables that were not controlled and **suggest** how the results may have been affected.',
        marks: 4,
        ph: 'Variable 1: ...\nEffect: ...\nVariable 2: ...\nEffect: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Diabetes & Insulin (23 marks, Criterion A/D)
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Diabetes, Hormones & Genetics',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Receptors & Hormones'],
    marks: 23,
    stem: 'Diabetes has been recognised since ancient times as a disease that can be linked to diet. We now know that this disease is caused when the body cannot regulate its blood sugar levels. In the 1920s, it was discovered that the hormone insulin is involved in regulating blood sugar levels.\n\nBetween the 1930s and the 1980s, factories purified insulin extracted from pigs\' pancreases. Around 1980, human insulin was produced by genetically modified bacteria for the first time. By changing the human insulin gene slightly, different versions of insulin are produced. In 1980, there were 108 million people worldwide with diabetes; by 2014 this figure rose to 422 million. However, over this time the death rate from diabetes dropped dramatically.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 660 380" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="660" height="380" fill="#ffffff"/><text x="330" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Industrial manufacture of human insulin</text><ellipse cx="90" cy="90" rx="52" ry="40" fill="#f6c89a" stroke="#d98e3c" stroke-width="2"/><circle cx="90" cy="90" r="16" fill="#a23a93"/><path d="M82,90 q8,-12 16,0 q-8,12 -16,0" fill="none" stroke="#5e1d54" stroke-width="2"/><text x="90" y="150" font-size="11" text-anchor="middle" fill="#475569">Human pancreas cell</text><text x="90" y="164" font-size="10" text-anchor="middle" fill="#94a3ad">(contains DNA)</text><circle cx="230" cy="90" r="18" fill="#0b7285"/><text x="230" y="95" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">1</text><line x1="146" y1="90" x2="208" y2="90" stroke="#0b7285" stroke-width="2" marker-end="url(#arr)"/><circle cx="330" cy="90" r="22" fill="none" stroke="#0b7285" stroke-width="3"/><path d="M318,90 a12,12 0 0 1 24,0" fill="none" stroke="#c0392b" stroke-width="3"/><text x="330" y="132" font-size="10" text-anchor="middle" fill="#475569">Combined DNA</text><text x="330" y="145" font-size="10" text-anchor="middle" fill="#475569">inserted into bacteria</text><line x1="252" y1="90" x2="304" y2="90" stroke="#0b7285" stroke-width="2" marker-end="url(#arr)"/><circle cx="230" cy="250" r="18" fill="#0b7285"/><text x="230" y="255" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">2</text><circle cx="120" cy="250" r="26" fill="none" stroke="#2f9e44" stroke-width="3"/><text x="120" y="300" font-size="10" text-anchor="middle" fill="#475569">Bacterial DNA / plasmid</text><line x1="150" y1="250" x2="208" y2="250" stroke="#0b7285" stroke-width="2" marker-end="url(#arr)"/><path d="M330,114 Q300,180 252,244" fill="none" stroke="#0b7285" stroke-width="2" marker-end="url(#arr)"/><circle cx="450" cy="170" r="18" fill="#0b7285"/><text x="450" y="175" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">3</text><rect x="500" y="120" width="80" height="120" rx="10" fill="#cfd8dc" stroke="#5b6b78" stroke-width="2"/><circle cx="520" cy="160" r="6" fill="#7fb2c9"/><circle cx="555" cy="190" r="7" fill="#7fb2c9"/><circle cx="535" cy="215" r="5" fill="#7fb2c9"/><text x="540" y="258" font-size="10" text-anchor="middle" fill="#475569">Industrial reactor tank</text><text x="540" y="271" font-size="10" text-anchor="middle" fill="#94a3ad">(GM bacteria reproduce)</text><line x1="352" y1="100" x2="430" y2="160" stroke="#0b7285" stroke-width="2" marker-end="url(#arr)"/><line x1="468" y1="170" x2="496" y2="175" stroke="#0b7285" stroke-width="2" marker-end="url(#arr)"/><circle cx="540" cy="70" r="18" fill="#0b7285"/><text x="540" y="75" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">4</text><rect x="600" y="40" width="40" height="70" rx="6" fill="#eaf3f7" stroke="#3a6ea5" stroke-width="2"/><rect x="610" y="30" width="20" height="14" fill="#3a6ea5"/><text x="620" y="128" font-size="10" text-anchor="middle" fill="#475569">Human insulin</text><line x1="558" y1="80" x2="598" y2="80" stroke="#0b7285" stroke-width="2" marker-end="url(#arr)"/><line x1="555" y1="120" x2="548" y2="92" stroke="#0b7285" stroke-width="2" marker-end="url(#arr)"/><text x="40" y="372" font-size="10" fill="#94a3ad">Numbered circles 1–4 mark the four stages of the process referred to in part (b).</text></svg>',
      },
      caption: 'The industrial manufacture of human insulin by genetic modification, shown as four numbered stages: (1) the human insulin gene is taken from a pancreas cell, (2) a bacterial plasmid is opened, (3) the combined DNA is grown in genetically modified bacteria in a reactor tank, and (4) human insulin is extracted and purified.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The regulation of blood sugar is an example of homeostasis. **Select** the correct meaning of the word *homeostasis*.',
        marks: 1,
        ph: 'Select the correct meaning.',
        widget: 'radio_select',
        widgetOptions: [
          'The conversion of glucose to glycogen',
          'The maintenance of a constant internal environment',
          'The release of energy from glucose',
          'The development of red blood cells in bone marrow',
        ],
      },
      {
        label: 'b',
        text: 'Gene transfer is an example of genetic modification and is used to produce human insulin. The diagram shows the industrial manufacture of insulin with four numbered stages. **Select** the correct statement for each numbered stage.\n\n**Stage 1:** ___SELECT_1___\n**Stage 2:** ___SELECT_2___\n**Stage 3:** ___SELECT_3___\n**Stage 4:** ___SELECT_4___',
        marks: 4,
        ph: 'Select the correct statement for each of the four stages.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'],
        widgetOptions: [
          'Human insulin gene extracted',
          'Plasmid DNA opened',
          'Bacterial diabetes gene removed',
          'Extraction and purification of human insulin',
          'Genetically modified bacteria reproduce',
          'Insulin extracted from pancreas cell',
        ],
      },
      {
        label: 'c',
        text: 'Fast-acting insulin can be taken before a meal. **Suggest** why this might be necessary for people with diabetes.',
        marks: 2,
        ph: 'Eating a meal causes blood glucose to rise. People with diabetes cannot produce enough insulin to lower it, so...',
      },
      {
        label: 'd',
        text: 'The industrialization of insulin production has been developed to help manage diabetes. **Discuss** and **evaluate** the impacts of the industrialization of insulin production. In your answer you should include:\n\n- the impacts on an individual\'s health\n- social implications for communities\n- economic considerations\n- your opinion of whether or not industrialization has improved the management of diabetes.',
        marks: 14,
        ph: 'Individual health: Industrialization has made insulin more available and affordable, meaning people with diabetes can manage their blood sugar levels more effectively. Different forms of insulin (fast-acting, long-lasting) allow personalised treatment...\n\nSocial implications: More people can access insulin in developing countries. However, the number of people with diabetes has increased from 108 million to 422 million, suggesting broader social challenges...\n\nEconomic considerations: Mass production has reduced the cost of insulin. However, diabetes still places a large economic burden on healthcare systems...\n\nConclusion: In my opinion, industrialization has improved the management of diabetes because the death rate has dropped dramatically despite the large increase in the number of people with diabetes...',
      },
      {
        label: 'e',
        text: 'Insulin treatment is not always effective. Recently, scientists have been working to develop a permanent cure for diabetes. This cure involves transplanting insulin-producing pancreas cells from pigs into humans. **Outline** the ethical implications of this procedure.',
        marks: 2,
        ph: 'Ethical implications include...',
      },
    ],
  },
]
