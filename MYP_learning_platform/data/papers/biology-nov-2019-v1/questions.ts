import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2019 · VARIANT 1  (isomorphic to biology-nov-2019)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widgets, tags) in a NEW biological context, with self-contained
// data-driven artefacts (no external image files). Answers recomputed throughout.
//   Q1 Food web:        African savanna → temperate freshwater pond ecosystem
//   Q2 Cells/photosyn.: generic plant vs animal → aquatic duckweed vs animal cell
//   Q3 Respiration:     yeast + sugar (temp) → yeast + glucose (temp, new temps)
//   Q4 Enzyme + sugars: zymase model → amylase / maltase enzyme-substrate model
//   Q5 Fermentation:    water chestnut + pineapple waste → apple core + banana peel
//   Q6 Homeostasis/GM:  insulin (diabetes) → human growth hormone (GM bacteria)
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2019-v1',
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
  // Context: temperate freshwater pond ecosystem
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
    stem: 'The diagram shows a food web from a temperate freshwater pond ecosystem. The organisms shown include: heron, otter, pike, perch, frog, water beetle, dragonfly larva, pond snail, tadpole, mayfly nymph, algae, pondweed, and reeds.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 440" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="fwah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#495057"/></marker></defs><rect width="640" height="440" fill="#ffffff"/><text x="320" y="22" font-size="15" font-weight="700" text-anchor="middle" fill="#0b7285">Freshwater pond food web</text><g font-size="12" font-weight="700" text-anchor="middle"><rect x="40" y="380" width="80" height="34" rx="6" fill="#2f9e44" stroke="#1e7a32"/><text x="80" y="401" fill="#ffffff">algae</text><rect x="260" y="380" width="90" height="34" rx="6" fill="#2f9e44" stroke="#1e7a32"/><text x="305" y="401" fill="#ffffff">pondweed</text><rect x="490" y="380" width="80" height="34" rx="6" fill="#2f9e44" stroke="#1e7a32"/><text x="530" y="401" fill="#ffffff">reeds</text><rect x="40" y="280" width="90" height="32" rx="6" fill="#37b24d" stroke="#1e7a32"/><text x="85" y="300" fill="#ffffff">pond snail</text><rect x="180" y="280" width="100" height="32" rx="6" fill="#37b24d" stroke="#1e7a32"/><text x="230" y="300" fill="#ffffff">mayfly nymph</text><rect x="330" y="280" width="80" height="32" rx="6" fill="#37b24d" stroke="#1e7a32"/><text x="370" y="300" fill="#ffffff">tadpole</text><rect x="470" y="280" width="110" height="32" rx="6" fill="#37b24d" stroke="#1e7a32"/><text x="525" y="300" fill="#ffffff">water beetle</text><rect x="150" y="185" width="120" height="32" rx="6" fill="#0b7285" stroke="#08545f"/><text x="210" y="205" fill="#ffffff">dragonfly larva</text><rect x="330" y="185" width="80" height="32" rx="6" fill="#0b7285" stroke="#08545f"/><text x="370" y="205" fill="#ffffff">perch</text><rect x="470" y="185" width="70" height="32" rx="6" fill="#0b7285" stroke="#08545f"/><text x="505" y="205" fill="#ffffff">frog</text><rect x="120" y="95" width="80" height="32" rx="6" fill="#f08c00" stroke="#b56a00"/><text x="160" y="115" fill="#ffffff">pike</text><rect x="300" y="95" width="80" height="32" rx="6" fill="#f08c00" stroke="#b56a00"/><text x="340" y="115" fill="#ffffff">otter</text><rect x="470" y="95" width="80" height="32" rx="6" fill="#f08c00" stroke="#b56a00"/><text x="510" y="115" fill="#ffffff">heron</text></g><g stroke="#495057" stroke-width="1.6" fill="none" marker-end="url(#fwah)"><path d="M80,380 L85,312"/><path d="M90,380 L225,312"/><path d="M295,380 L235,312"/><path d="M300,380 L370,312"/><path d="M520,382 L530,312"/><path d="M285,380 L80,312"/><path d="M95,280 L200,217"/><path d="M225,280 L215,217"/><path d="M375,280 L370,217"/><path d="M380,280 L500,217"/><path d="M525,280 L370,217"/><path d="M210,185 L165,127"/><path d="M360,185 L170,127"/><path d="M385,185 L335,127"/><path d="M390,185 L505,127"/><path d="M515,185 L520,127"/><path d="M375,185 L330,127"/></g></svg>',
      },
      caption: 'A freshwater pond food web. Producers (green), primary consumers (light green), secondary consumers (teal) and top predators (amber). Arrows point from prey to predator.',
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
        text: 'The mayfly nymph population decreases due to water pollution. **Explain** how the populations of pondweed and frog would change.',
        marks: 5,
        ph: 'Pondweed population: ...\nFrog population: ...',
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
  // Context: aquatic duckweed leaf cell vs animal cell
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
    stem: 'This question is about cells and how plants produce glucose. Duckweed is a tiny floating plant that grows on the surface of ponds.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><text x="160" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Animal cell</text><text x="445" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Duckweed (plant) cell</text><ellipse cx="160" cy="170" rx="120" ry="95" fill="#fde7f3" stroke="#c2255c" stroke-width="2.5"/><circle cx="150" cy="160" r="34" fill="#c2255c" opacity="0.55"/><circle cx="150" cy="160" r="14" fill="#8c1346"/><text x="150" y="220" font-size="11" text-anchor="middle" fill="#8c1346">nucleus</text><ellipse cx="225" cy="120" rx="20" ry="11" fill="#f783ac"/><text x="252" y="98" font-size="10" fill="#8c1346">mitochondrion</text><line x1="240" y1="112" x2="232" y2="118" stroke="#8c1346" stroke-width="1"/><text x="160" y="285" font-size="11" text-anchor="middle" fill="#8c1346">cell membrane</text><rect x="330" y="70" width="230" height="200" rx="6" fill="#e7f6ec" stroke="#1e7a32" stroke-width="4"/><text x="445" y="60" font-size="10" text-anchor="middle" fill="#1e7a32">cell wall</text><rect x="350" y="90" width="190" height="160" rx="4" fill="#c9ecd6" stroke="#2f9e44" stroke-width="1.5"/><circle cx="395" cy="135" r="20" fill="#c2255c" opacity="0.5"/><circle cx="395" cy="135" r="9" fill="#8c1346"/><text x="395" y="170" font-size="10" text-anchor="middle" fill="#8c1346">nucleus</text><ellipse cx="470" cy="120" rx="22" ry="12" fill="#2f9e44"/><ellipse cx="505" cy="150" rx="22" ry="12" fill="#37b24d"/><ellipse cx="455" cy="175" rx="22" ry="12" fill="#2f9e44"/><text x="540" y="120" font-size="10" fill="#1e7a32">chloroplast</text><line x1="490" y1="120" x2="500" y2="118" stroke="#1e7a32" stroke-width="1"/><rect x="420" y="195" width="100" height="42" rx="6" fill="#bfe3f2" stroke="#0b7285"/><text x="470" y="221" font-size="10" text-anchor="middle" fill="#0b7285">vacuole</text></svg>',
      },
      caption: 'An animal cell (left) and a duckweed leaf cell (right).',
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
        text: 'The diagram above shows an animal cell and a duckweed (plant) cell. **State** two structures present in the duckweed cell but not in the animal cell and **outline** the function of each structure.',
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
  // Q3 — Yeast Respiration Experiment (10 marks, Criterion B)
  // Context: yeast + glucose, new temperatures 15/35/55 °C, 20 minutes
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
    stem: 'Yeast is a microorganism that is commonly used to make bread and beer.\n\nYeast must respire to survive. Respiration is a reaction that occurs in the cells of living things, and is controlled by specific enzymes.\n\nSome students planned a simple experiment to find out how temperature affects respiration in yeast. The students collected the carbon dioxide produced during respiration in a gas syringe. They suggested the following research question:\n\n**"How does temperature affect the rate of respiration in yeast as measured by the volume of carbon dioxide produced in 20 minutes?"**\n\nThe experiment used glucose solution mixed with yeast solution, placed in three flasks held in water baths at 15 °C, 35 °C, and 55 °C for 20 minutes. The volume of gas in the syringe attached to each flask was compared after 20 minutes.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="280" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#0b7285">Yeast respiration apparatus</text><g><rect x="40" y="150" width="150" height="90" rx="6" fill="#cdeaf2" stroke="#0b7285" stroke-width="2"/><text x="115" y="232" font-size="10" text-anchor="middle" fill="#0b7285">water bath 15 °C</text></g><g><rect x="225" y="150" width="150" height="90" rx="6" fill="#bfe3a8" stroke="#2f9e44" stroke-width="2"/><text x="300" y="232" font-size="10" text-anchor="middle" fill="#1e7a32">water bath 35 °C</text></g><g><rect x="410" y="150" width="150" height="90" rx="6" fill="#f8d7a8" stroke="#f08c00" stroke-width="2"/><text x="485" y="232" font-size="10" text-anchor="middle" fill="#b56a00">water bath 55 °C</text></g><g fill="#f8e3b0" stroke="#b08900" stroke-width="1.5"><path d="M90,210 L90,175 L78,150 L152,150 L140,175 L140,210 Z"/><path d="M275,210 L275,175 L263,150 L337,150 L325,175 L325,210 Z"/><path d="M460,210 L460,175 L448,150 L522,150 L510,175 L510,210 Z"/></g><g fill="#e8772e"><circle cx="115" cy="195" r="3"/><circle cx="105" cy="200" r="2.5"/><circle cx="300" cy="190" r="3"/><circle cx="310" cy="198" r="2.5"/><circle cx="290" cy="200" r="2.5"/><circle cx="485" cy="198" r="2.5"/></g><g stroke="#5b6b78" stroke-width="2" fill="none"><line x1="115" y1="150" x2="115" y2="105"/><line x1="300" y1="150" x2="300" y2="105"/><line x1="485" y1="150" x2="485" y2="105"/></g><g fill="#dfe7ec" stroke="#5b6b78" stroke-width="1.5"><rect x="95" y="80" width="40" height="25" rx="3"/><rect x="280" y="80" width="40" height="25" rx="3"/><rect x="465" y="80" width="40" height="25" rx="3"/></g><text x="300" y="70" font-size="10" text-anchor="middle" fill="#5b6b78">gas syringes collect CO₂</text></svg>',
      },
      caption: 'Three flasks of glucose + yeast solution held at 15 °C, 35 °C and 55 °C. The CO₂ collected in each gas syringe is compared after 20 minutes.',
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
  // Context: amylase / maltase enzyme model + five sugars
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
    stem: 'The students continued to investigate respiration in yeast. They were interested in investigating different sugars.\n\nMaltase is an enzyme found in yeast which is important in breaking down sugar for respiration. The image below shows a model of maltase and five different sugars: maltose, glucose, sucrose, lactose and galactose.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="300" fill="#ffffff"/><text x="310" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#0b7285">Maltase enzyme and five sugar substrates</text><path d="M70,150 q-40,0 -40,40 l0,40 q0,40 40,40 l120,0 q40,0 40,-40 l0,-12 q-22,0 -22,-28 q0,-28 22,-28 l0,-12 q0,-40 -40,-40 Z" fill="#a5d8e8" stroke="#0b7285" stroke-width="2"/><text x="120" y="225" font-size="12" font-weight="700" text-anchor="middle" fill="#08545f">maltase</text><text x="232" y="200" font-size="9" text-anchor="middle" fill="#08545f">active site</text><g font-size="11" font-weight="700" text-anchor="middle"><g><path d="M300,160 l22,0 q14,0 14,14 q0,14 -14,14 l-22,0 Z" fill="#2f9e44" stroke="#1e7a32"/><text x="318" y="200" fill="#1e7a32">maltose ✓</text></g><g><rect x="300" y="50" width="40" height="28" rx="4" fill="#f08c00" stroke="#b56a00"/><text x="320" y="42" fill="#b56a00">sucrose</text></g><g><circle cx="430" cy="64" r="18" fill="#c2255c" stroke="#8c1346"/><text x="430" y="42" fill="#8c1346">lactose</text></g><g><polygon points="430,150 452,178 408,178" fill="#7048e8" stroke="#4a2fb0"/><text x="430" y="200" fill="#4a2fb0">galactose</text></g><g><rect x="520" y="100" width="34" height="34" rx="4" transform="rotate(45 537 117)" fill="#1971c2" stroke="#0d4f8b"/><text x="537" y="160" fill="#0d4f8b">glucose</text></g></g></svg>',
      },
      caption: 'A model of the enzyme maltase and five sugars. Only the sugar whose shape matches the active site can be broken down.',
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
        text: 'Using the model of maltase and the five sugars shown above, **predict** which sugar is most likely to be respired by the yeast. **Justify** your answer.',
        marks: 4,
        ph: 'The sugar most likely to be respired is ... because its shape fits the active site of maltase...',
      },
      {
        label: 'c',
        text: '**Design** an investigation into the effect of different sugars on the **rate** of respiration of yeast. In your answer, you should include:\n\n- the independent, dependent and two control variables\n- how you will collect sufficient data and process it\n- any additional equipment you will need to make measurements or to control variables\n- the method that you will use.',
        marks: 15,
        ph: 'Independent variable: type of sugar (maltose, glucose, sucrose, lactose, galactose)\nDependent variable: volume of CO₂ produced / gas syringe reading after 20 minutes\nControl variables: (1) volume of sugar solution, (2) concentration of sugar solution, (3) temperature...\n\nEquipment: flasks, gas syringes, measuring cylinders, water bath, thermometer...\n\nMethod: Prepare equal volumes of each sugar solution at the same concentration. Mix with equal volumes of yeast solution. Attach a gas syringe to each flask. Place all flasks in a water bath at the same temperature. Record gas volume after 20 minutes. Repeat three times for each sugar. Calculate mean. Process by comparing means...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — Fermentation & Biofuels (23 marks, Criterion C)
  // Context: apple core + banana peel food waste; new data values
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis — Fermentation & Biofuels',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    marks: 23,
    stem: 'Another term for respiration in yeast is *fermentation*. Fermentation of plant materials is used to produce ethanol, which can be used as biofuel. The main sources of plant material used around the world today are wheat, corn, soybeans, and sugarcane. These food sources are used because they have a high sugar content and they ferment easily.\n\nSome students decided to investigate if other food sources could be fermented. They were particularly interested in waste products — parts of food that are thrown away rather than eaten.\n\nThe food waste they chose to study was from **apple cores** and **banana peels**.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['', 'Day 1', 'Day 3', 'Day 5', 'Day 7', 'Day 9', 'Day 11'],
        rows: [
          ['Apple core', '2.0', '4.8', '3.6', '3.0', '2.4', '1.9'],
          ['Banana peel', '1.8', '6.2', '10.0', '4.0', '1.5', '1.2'],
        ],
      },
      caption: 'Mass of ethanol produced each day from 10 g of food waste / mg.',
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
        text: 'The results from the students\' investigation are shown in the table below. For each of the food wastes, **identify** the day on which the largest mass of ethanol was produced.\n\n| | Day 1 | Day 3 | Day 5 | Day 7 | Day 9 | Day 11 |\n|---|---|---|---|---|---|---|\n| Apple core | 2.0 | 4.8 | 3.6 | 3.0 | 2.4 | 1.9 |\n| Banana peel | 1.8 | 6.2 | 10.0 | 4.0 | 1.5 | 1.2 |\n\n*(Mass of ethanol produced each day from 10 g of food waste / mg)*\n\nApple core: Day ___BLANK_1___\nBanana peel: Day ___BLANK_2___',
        marks: 1,
        ph: 'Fill in the day numbers for each food waste.',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: 'The graph below already shows the data for banana peel waste. **Plot** the data for apple core waste on the graph. You should also **add a title** to the graph and **label the axes**.\n\n*(Describe what your completed graph would look like, including key features.)*',
        marks: 5,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Mass of ethanol produced from banana peel over time',
            xLabel: 'Day',
            yLabel: 'Mass of ethanol',
            yUnit: 'mg',
            xMin: 0,
            xMax: 12,
            yMin: 0,
            yMax: 12,
            xStep: 1,
            yStep: 2,
            dataPoints: [
              { x: 1, y: 1.8 },
              { x: 3, y: 6.2 },
              { x: 5, y: 10.0 },
              { x: 7, y: 4.0 },
              { x: 9, y: 1.5 },
              { x: 11, y: 1.2 },
            ],
          },
          caption: 'Banana peel data already plotted. Add the apple core points: Day 1 = 2.0, Day 3 = 4.8, Day 5 = 3.6, Day 7 = 3.0, Day 9 = 2.4, Day 11 = 1.9.',
        },
        ph: 'Title: Mass of ethanol produced from food waste over time\nX-axis: Day / day(s)\nY-axis: Mass of ethanol / mg\nApple core points: Day 1 = 2.0, Day 3 = 4.8, Day 5 = 3.6, Day 7 = 3.0, Day 9 = 2.4, Day 11 = 1.9\nPoints correctly plotted and joined with a smooth curve...',
      },
      {
        label: 'e',
        text: '**Outline** two trends in ethanol production for banana peel waste. **Explain** these trends using scientific reasoning.',
        marks: 6,
        ph: 'Trend 1: Ethanol production increases initially (until day 5).\nExplanation: The yeast population is growing, so there is more respiration occurring...\n\nTrend 2: After day 5, ethanol production decreases.\nExplanation: Food supply becomes limited, so less respiration occurs. Or ethanol builds up to toxic levels, causing yeast cells to die...',
      },
      {
        label: 'f',
        text: 'The table shows that the total mass of ethanol produced by apple core over all days was 17.7 mg. **Calculate** the total mass of ethanol produced by banana peel waste over the 11 days. Show your working.',
        marks: 1,
        ph: 'Total = 1.8 + 6.2 + 10.0 + 4.0 + 1.5 + 1.2 = ...',
      },
      {
        label: 'g',
        text: '**Calculate** the difference in total mass of ethanol produced between the two types of food waste.',
        marks: 1,
        ph: 'Difference = ... − 17.7 = ...',
      },
      {
        label: 'h',
        text: 'The nutritional information shows that banana peel contains 15 g of carbohydrates per 100 g, while apple core contains 22 g of carbohydrates per 100 g. The students predicted that a food source containing more carbohydrate will produce more ethanol.\n\n**Suggest** reasons why this prediction is **not** supported by the results in part (f).',
        marks: 2,
        ph: 'Apple core has a higher carbohydrate content but produced less ethanol because...',
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
  // Q6 — Human Growth Hormone & GM Bacteria (23 marks, Criterion D)
  // Context: recombinant human growth hormone (hGH) via GM bacteria; homeostasis
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Hormones, Homeostasis & Genetics',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Receptors & Hormones'],
    marks: 23,
    stem: 'Growth-hormone deficiency has been recognised for over a century as a condition that affects how children grow. We now know that this condition is caused when the body cannot make enough of the hormone that controls growth. In the 1950s, doctors discovered that the hormone *human growth hormone* (hGH) is involved in regulating growth.\n\nFrom the 1960s to the 1980s, hospitals extracted and purified human growth hormone from the pituitary glands of human donors. Around 1985, human growth hormone was produced by genetically modified bacteria for the first time. By changing the human growth-hormone gene slightly, different versions of the hormone are produced. In 1985, treatment was available to only a few thousand children worldwide; today millions of doses are produced each year. Over this time the safety of the treatment improved dramatically.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="gmah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#495057"/></marker></defs><rect width="640" height="280" fill="#ffffff"/><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#0b7285">Manufacture of human growth hormone using GM bacteria</text><g font-size="11" text-anchor="middle"><g><circle cx="80" cy="100" r="30" fill="#fde7f3" stroke="#c2255c" stroke-width="2"/><path d="M68,100 q12,-14 24,0" stroke="#c2255c" fill="none" stroke-width="2"/><rect x="76" y="92" width="8" height="16" rx="2" fill="#c2255c"/><text x="80" y="150" fill="#8c1346">Stage 1</text><text x="80" y="164" fill="#8c1346" font-size="9">hGH gene extracted</text></g><g><circle cx="240" cy="100" r="30" fill="#e7f6ec" stroke="#2f9e44" stroke-width="2"/><circle cx="240" cy="100" r="18" fill="none" stroke="#1e7a32" stroke-width="2.5" stroke-dasharray="4 4"/><text x="240" y="150" fill="#1e7a32">Stage 2</text><text x="240" y="164" fill="#1e7a32" font-size="9">plasmid opened</text></g><g><ellipse cx="400" cy="100" rx="34" ry="22" fill="#fff3bf" stroke="#f08c00" stroke-width="2"/><circle cx="392" cy="96" r="9" fill="none" stroke="#b56a00" stroke-width="2"/><rect x="404" y="92" width="6" height="10" rx="2" fill="#c2255c"/><text x="400" y="150" fill="#b56a00">Stage 3</text><text x="400" y="164" fill="#b56a00" font-size="9">GM bacteria reproduce</text></g><g><rect x="530" y="78" width="56" height="44" rx="6" fill="#cdeaf2" stroke="#0b7285" stroke-width="2"/><circle cx="548" cy="100" r="5" fill="#c2255c"/><circle cx="568" cy="96" r="5" fill="#c2255c"/><circle cx="558" cy="112" r="5" fill="#c2255c"/><text x="558" y="150" fill="#08545f">Stage 4</text><text x="558" y="164" fill="#08545f" font-size="9">hGH purified</text></g></g><g stroke="#495057" stroke-width="2" marker-end="url(#gmah)"><line x1="115" y1="100" x2="205" y2="100"/><line x1="275" y1="100" x2="362" y2="100"/><line x1="438" y1="100" x2="525" y2="100"/></g></svg>',
      },
      caption: 'The industrial manufacture of human growth hormone using genetically modified bacteria, shown in four numbered stages.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The regulation of growth and body processes is an example of homeostasis. **Select** the correct meaning of the word *homeostasis*.',
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
        text: 'Gene transfer is an example of genetic modification and is used to produce human growth hormone. The diagram shows the industrial manufacture of the hormone with four numbered stages. **Select** the correct statement for each numbered stage.\n\n**Stage 1:** ___SELECT_1___\n**Stage 2:** ___SELECT_2___\n**Stage 3:** ___SELECT_3___\n**Stage 4:** ___SELECT_4___',
        marks: 4,
        ph: 'Select the correct statement for each of the four stages.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'],
        widgetOptions: [
          'Human growth-hormone gene extracted',
          'Plasmid DNA opened',
          'Bacterial growth gene removed',
          'Extraction and purification of human growth hormone',
          'Genetically modified bacteria reproduce',
          'Growth hormone extracted from pituitary cell',
        ],
      },
      {
        label: 'c',
        text: 'Growth-hormone injections are taken regularly by children being treated. **Suggest** why regular doses might be necessary for children with growth-hormone deficiency.',
        marks: 2,
        ph: 'The body cannot make enough growth hormone on its own, so regular doses are needed to...',
      },
      {
        label: 'd',
        text: 'The industrialization of human growth hormone production has been developed to help treat growth-hormone deficiency. **Discuss** and **evaluate** the impacts of the industrialization of growth hormone production. In your answer you should include:\n\n- the impacts on an individual\'s health\n- social implications for communities\n- economic considerations\n- your opinion of whether or not industrialization has improved the treatment of growth-hormone deficiency.',
        marks: 14,
        ph: 'Individual health: Industrialization has made growth hormone more available and affordable, meaning more children can be treated effectively. Different forms of the hormone allow personalised treatment...\n\nSocial implications: More children can access treatment in developing countries. However, treating only those who can afford it may raise issues of fairness...\n\nEconomic considerations: Mass production has reduced the cost of growth hormone. However, treatment still places a large economic burden on healthcare systems...\n\nConclusion: In my opinion, industrialization has improved treatment because the safety of the hormone has improved dramatically while the number of doses produced has risen...',
      },
      {
        label: 'e',
        text: 'Before GM bacteria were used, growth hormone was extracted from the pituitary glands of human donors after death. **Outline** the ethical implications of using human-donor tissue in this way.',
        marks: 2,
        ph: 'Ethical implications include...',
      },
    ],
  },
]
