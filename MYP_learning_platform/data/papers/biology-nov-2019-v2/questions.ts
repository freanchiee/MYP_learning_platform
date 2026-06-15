import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2019 · VARIANT 2  (isomorphic to biology-nov-2019)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widgets, tags) in a NEW biological context, with self-contained
// data-driven artefacts (no external image files). Answers recomputed throughout.
// v2 differs from BOTH the source AND variant 1 in species/scenario and artefact.
//   Q1 Food web:        African savanna → marine kelp-forest ecosystem
//   Q2 Cells/photosyn.: generic plant vs animal → moss leaf cell vs animal cell
//   Q3 Respiration:     yeast + sugar (temp) → yeast + glucose (new temps 10/30/50)
//   Q4 Enzyme + sugars: zymase model → sucrase (invertase) enzyme-substrate model
//   Q5 Fermentation:    water chestnut + pineapple → potato peel + mango skin waste
//   Q6 Homeostasis/GM:  insulin (diabetes) → clotting factor VIII (haemophilia)
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2019-v2',
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
  // Context: marine kelp-forest ecosystem
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
    stem: 'The diagram shows a food web from a marine kelp-forest ecosystem. The organisms shown include: sea otter, harbour seal, lingcod, rockfish, sea star, kelp crab, sea urchin, abalone, zooplankton, giant kelp, surfgrass, and phytoplankton.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 440" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="kwah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#495057"/></marker></defs><rect width="640" height="440" fill="#ffffff"/><text x="320" y="22" font-size="15" font-weight="700" text-anchor="middle" fill="#0b7285">Kelp-forest food web</text><g font-size="11.5" font-weight="700" text-anchor="middle"><rect x="40" y="380" width="110" height="34" rx="6" fill="#2f9e44" stroke="#1e7a32"/><text x="95" y="401" fill="#ffffff">giant kelp</text><rect x="270" y="380" width="100" height="34" rx="6" fill="#2f9e44" stroke="#1e7a32"/><text x="320" y="401" fill="#ffffff">surfgrass</text><rect x="490" y="380" width="110" height="34" rx="6" fill="#2f9e44" stroke="#1e7a32"/><text x="545" y="401" fill="#ffffff">phytoplankton</text><rect x="40" y="280" width="100" height="32" rx="6" fill="#37b24d" stroke="#1e7a32"/><text x="90" y="300" fill="#ffffff">sea urchin</text><rect x="185" y="280" width="90" height="32" rx="6" fill="#37b24d" stroke="#1e7a32"/><text x="230" y="300" fill="#ffffff">abalone</text><rect x="320" y="280" width="100" height="32" rx="6" fill="#37b24d" stroke="#1e7a32"/><text x="370" y="300" fill="#ffffff">kelp crab</text><rect x="470" y="280" width="120" height="32" rx="6" fill="#37b24d" stroke="#1e7a32"/><text x="530" y="300" fill="#ffffff">zooplankton</text><rect x="150" y="185" width="80" height="32" rx="6" fill="#0b7285" stroke="#08545f"/><text x="190" y="205" fill="#ffffff">sea star</text><rect x="320" y="185" width="90" height="32" rx="6" fill="#0b7285" stroke="#08545f"/><text x="365" y="205" fill="#ffffff">rockfish</text><rect x="470" y="185" width="90" height="32" rx="6" fill="#0b7285" stroke="#08545f"/><text x="515" y="205" fill="#ffffff">lingcod</text><rect x="120" y="95" width="100" height="32" rx="6" fill="#f08c00" stroke="#b56a00"/><text x="170" y="115" fill="#ffffff">sea otter</text><rect x="430" y="95" width="120" height="32" rx="6" fill="#f08c00" stroke="#b56a00"/><text x="490" y="115" fill="#ffffff">harbour seal</text></g><g stroke="#495057" stroke-width="1.6" fill="none" marker-end="url(#kwah)"><path d="M90,380 L90,312"/><path d="M120,380 L225,312"/><path d="M310,380 L370,312"/><path d="M325,380 L235,312"/><path d="M545,382 L535,312"/><path d="M95,280 L185,217"/><path d="M235,280 L200,217"/><path d="M375,280 L370,217"/><path d="M385,280 L510,217"/><path d="M525,280 L520,217"/><path d="M190,185 L170,127"/><path d="M360,185 L210,127"/><path d="M385,185 L480,127"/><path d="M515,185 L505,127"/><path d="M375,280 L160,127"/></g></svg>',
      },
      caption: 'A kelp-forest food web. Producers (green), primary consumers (light green), secondary consumers (teal) and top predators (amber). Arrows point from prey to predator.',
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
        text: 'The sea urchin population decreases due to a disease outbreak. **Explain** how the populations of giant kelp and sea otter would change.',
        marks: 5,
        ph: 'Giant kelp population: ...\nSea otter population: ...',
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
  // Context: moss leaf cell vs animal cell
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
    stem: 'This question is about cells and how plants produce glucose. Moss is a small green plant that grows in a thin layer in damp, shady places.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><text x="160" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Animal cell</text><text x="445" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Moss leaf (plant) cell</text><ellipse cx="160" cy="170" rx="120" ry="95" fill="#fde7f3" stroke="#c2255c" stroke-width="2.5"/><circle cx="150" cy="160" r="34" fill="#c2255c" opacity="0.55"/><circle cx="150" cy="160" r="14" fill="#8c1346"/><text x="150" y="220" font-size="11" text-anchor="middle" fill="#8c1346">nucleus</text><ellipse cx="225" cy="120" rx="20" ry="11" fill="#f783ac"/><text x="252" y="98" font-size="10" fill="#8c1346">mitochondrion</text><line x1="240" y1="112" x2="232" y2="118" stroke="#8c1346" stroke-width="1"/><text x="160" y="285" font-size="11" text-anchor="middle" fill="#8c1346">cell membrane</text><rect x="330" y="70" width="230" height="200" rx="6" fill="#e7f6ec" stroke="#1e7a32" stroke-width="4"/><text x="445" y="60" font-size="10" text-anchor="middle" fill="#1e7a32">cell wall</text><rect x="350" y="90" width="190" height="160" rx="4" fill="#c9ecd6" stroke="#2f9e44" stroke-width="1.5"/><circle cx="395" cy="135" r="20" fill="#c2255c" opacity="0.5"/><circle cx="395" cy="135" r="9" fill="#8c1346"/><text x="395" y="170" font-size="10" text-anchor="middle" fill="#8c1346">nucleus</text><ellipse cx="470" cy="118" rx="22" ry="12" fill="#2f9e44"/><ellipse cx="508" cy="148" rx="22" ry="12" fill="#37b24d"/><ellipse cx="455" cy="178" rx="22" ry="12" fill="#2f9e44"/><ellipse cx="510" cy="200" rx="22" ry="12" fill="#37b24d"/><text x="544" y="118" font-size="10" fill="#1e7a32">chloroplast</text><line x1="492" y1="118" x2="502" y2="116" stroke="#1e7a32" stroke-width="1"/><rect x="410" y="205" width="80" height="40" rx="6" fill="#bfe3f2" stroke="#0b7285"/><text x="450" y="230" font-size="10" text-anchor="middle" fill="#0b7285">vacuole</text></svg>',
      },
      caption: 'An animal cell (left) and a moss leaf cell (right).',
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
        text: 'The diagram above shows an animal cell and a moss leaf (plant) cell. **State** two structures present in the moss cell but not in the animal cell and **outline** the function of each structure.',
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
  // Context: yeast + glucose, new temps 10/30/50 °C, 25 minutes, gas over water
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
    stem: 'Yeast is a microorganism that is commonly used to make bread and beer.\n\nYeast must respire to survive. Respiration is a reaction that occurs in the cells of living things, and is controlled by specific enzymes.\n\nSome students planned a simple experiment to find out how temperature affects respiration in yeast. The students collected the carbon dioxide produced during respiration in an upturned measuring cylinder filled with water. They suggested the following research question:\n\n**"How does temperature affect the rate of respiration in yeast as measured by the volume of carbon dioxide produced in 25 minutes?"**\n\nThe experiment used glucose solution mixed with yeast solution, placed in three flasks held in water baths at 10 °C, 30 °C, and 50 °C for 25 minutes. The volume of gas collected from each flask was compared after 25 minutes.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 290" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="290" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#0b7285">Yeast respiration — gas collected over water</text><g><rect x="35" y="160" width="160" height="90" rx="6" fill="#cdeaf2" stroke="#0b7285" stroke-width="2"/><text x="115" y="242" font-size="10" text-anchor="middle" fill="#0b7285">water bath 10 °C</text></g><g><rect x="220" y="160" width="160" height="90" rx="6" fill="#bfe3a8" stroke="#2f9e44" stroke-width="2"/><text x="300" y="242" font-size="10" text-anchor="middle" fill="#1e7a32">water bath 30 °C</text></g><g><rect x="405" y="160" width="160" height="90" rx="6" fill="#f8d7a8" stroke="#f08c00" stroke-width="2"/><text x="485" y="242" font-size="10" text-anchor="middle" fill="#b56a00">water bath 50 °C</text></g><g fill="#f8e3b0" stroke="#b08900" stroke-width="1.5"><path d="M88,220 L88,185 L78,162 L132,162 L122,185 L122,220 Z"/><path d="M273,220 L273,185 L263,162 L317,162 L307,185 L307,220 Z"/><path d="M458,220 L458,185 L448,162 L502,162 L492,185 L492,220 Z"/></g><g fill="#e8772e"><circle cx="105" cy="200" r="2.5"/><circle cx="300" cy="195" r="3"/><circle cx="290" cy="202" r="2.5"/><circle cx="485" cy="202" r="2.5"/></g><g fill="#dfeef6" stroke="#5b6b78" stroke-width="1.5"><rect x="150" y="55" width="22" height="95" rx="4"/><rect x="335" y="55" width="22" height="95" rx="4"/><rect x="520" y="55" width="22" height="95" rx="4"/></g><g fill="#bfe3f2"><rect x="151" y="120" width="20" height="29"/><rect x="336" y="100" width="20" height="49"/><rect x="521" y="135" width="20" height="14"/></g><g stroke="#5b6b78" stroke-width="1.5" fill="none"><path d="M122,180 q20,-10 39,-25"/><path d="M307,180 q20,-15 39,-30"/><path d="M492,180 q20,-5 39,-20"/></g><text x="300" y="46" font-size="10" text-anchor="middle" fill="#5b6b78">CO₂ displaces water in measuring cylinders</text></svg>',
      },
      caption: 'Three flasks of glucose + yeast solution held at 10 °C, 30 °C and 50 °C. CO₂ is collected by displacing water in upturned measuring cylinders, and the gas volume is compared after 25 minutes.',
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
  // Context: sucrase (invertase) enzyme model + five sugars
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
    stem: 'The students continued to investigate respiration in yeast. They were interested in investigating different sugars.\n\nSucrase (also called invertase) is an enzyme found in yeast which is important in breaking down sugar for respiration. The image below shows a model of sucrase and five different sugars: sucrose, glucose, fructose, lactose and maltose.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="300" fill="#ffffff"/><text x="310" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#0b7285">Sucrase enzyme and five sugar substrates</text><path d="M70,150 q-40,0 -40,40 l0,40 q0,40 40,40 l120,0 q40,0 40,-40 l0,-10 q-26,0 -26,-16 q-16,0 -16,-16 q0,-16 16,-16 q0,-16 26,-16 l0,-10 q0,-40 -40,-40 Z" fill="#a5d8e8" stroke="#0b7285" stroke-width="2"/><text x="120" y="225" font-size="12" font-weight="700" text-anchor="middle" fill="#08545f">sucrase</text><text x="236" y="198" font-size="9" text-anchor="middle" fill="#08545f">active site</text><g font-size="11" font-weight="700" text-anchor="middle"><g><path d="M300,168 l20,0 q12,0 12,12 q12,0 12,12 q0,12 -12,12 q0,12 -12,12 l-20,0 Z" fill="#f08c00" stroke="#b56a00"/><text x="320" y="222" fill="#b56a00">sucrose ✓</text></g><g><rect x="300" y="50" width="40" height="28" rx="4" transform="rotate(45 320 64)" fill="#1971c2" stroke="#0d4f8b"/><text x="320" y="46" fill="#0d4f8b">glucose</text></g><g><polygon points="430,46 452,76 408,76" fill="#2f9e44" stroke="#1e7a32"/><text x="430" y="98" fill="#1e7a32">fructose</text></g><g><circle cx="430" cy="160" r="18" fill="#c2255c" stroke="#8c1346"/><text x="430" y="196" fill="#8c1346">lactose</text></g><g><rect x="520" y="100" width="34" height="34" rx="6" fill="#7048e8" stroke="#4a2fb0"/><text x="537" y="160" fill="#4a2fb0">maltose</text></g></g></svg>',
      },
      caption: 'A model of the enzyme sucrase and five sugars. Only the sugar whose shape matches the active site can be broken down.',
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
        text: 'Using the model of sucrase and the five sugars shown above, **predict** which sugar is most likely to be respired by the yeast. **Justify** your answer.',
        marks: 4,
        ph: 'The sugar most likely to be respired is ... because its shape fits the active site of sucrase...',
      },
      {
        label: 'c',
        text: '**Design** an investigation into the effect of different sugars on the **rate** of respiration of yeast. In your answer, you should include:\n\n- the independent, dependent and two control variables\n- how you will collect sufficient data and process it\n- any additional equipment you will need to make measurements or to control variables\n- the method that you will use.',
        marks: 15,
        ph: 'Independent variable: type of sugar (sucrose, glucose, fructose, lactose, maltose)\nDependent variable: volume of CO₂ produced / measuring-cylinder reading after 25 minutes\nControl variables: (1) volume of sugar solution, (2) concentration of sugar solution, (3) temperature...\n\nEquipment: flasks, measuring cylinders, water trough, water bath, thermometer...\n\nMethod: Prepare equal volumes of each sugar solution at the same concentration. Mix with equal volumes of yeast solution. Collect the gas over water from each flask. Place all flasks in a water bath at the same temperature. Record gas volume after 25 minutes. Repeat three times for each sugar. Calculate mean. Process by comparing means...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — Fermentation & Biofuels (23 marks, Criterion C)
  // Context: potato peel + mango skin food waste; new data values
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis — Fermentation & Biofuels',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    marks: 23,
    stem: 'Another term for respiration in yeast is *fermentation*. Fermentation of plant materials is used to produce ethanol, which can be used as biofuel. The main sources of plant material used around the world today are wheat, corn, soybeans, and sugarcane. These food sources are used because they have a high sugar content and they ferment easily.\n\nSome students decided to investigate if other food sources could be fermented. They were particularly interested in waste products — parts of food that are thrown away rather than eaten.\n\nThe food waste they chose to study was from **potato peelings** and **mango skins**.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['', 'Day 1', 'Day 3', 'Day 5', 'Day 7', 'Day 9', 'Day 11'],
        rows: [
          ['Potato peel', '2.4', '4.6', '3.5', '2.9', '2.2', '1.8'],
          ['Mango skin', '2.1', '5.0', '9.4', '3.6', '1.6', '1.4'],
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
        text: 'The results from the students\' investigation are shown in the table below. For each of the food wastes, **identify** the day on which the largest mass of ethanol was produced.\n\n| | Day 1 | Day 3 | Day 5 | Day 7 | Day 9 | Day 11 |\n|---|---|---|---|---|---|---|\n| Potato peel | 2.4 | 4.6 | 3.5 | 2.9 | 2.2 | 1.8 |\n| Mango skin | 2.1 | 5.0 | 9.4 | 3.6 | 1.6 | 1.4 |\n\n*(Mass of ethanol produced each day from 10 g of food waste / mg)*\n\nPotato peel: Day ___BLANK_1___\nMango skin: Day ___BLANK_2___',
        marks: 1,
        ph: 'Fill in the day numbers for each food waste.',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: 'The graph below already shows the data for mango skin waste. **Plot** the data for potato peel waste on the graph. You should also **add a title** to the graph and **label the axes**.\n\n*(Describe what your completed graph would look like, including key features.)*',
        marks: 5,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Mass of ethanol produced from mango skin over time',
            xLabel: 'Day',
            yLabel: 'Mass of ethanol',
            yUnit: 'mg',
            xMin: 0,
            xMax: 12,
            yMin: 0,
            yMax: 10,
            xStep: 1,
            yStep: 2,
            dataPoints: [
              { x: 1, y: 2.1 },
              { x: 3, y: 5.0 },
              { x: 5, y: 9.4 },
              { x: 7, y: 3.6 },
              { x: 9, y: 1.6 },
              { x: 11, y: 1.4 },
            ],
          },
          caption: 'Mango skin data already plotted. Add the potato peel points: Day 1 = 2.4, Day 3 = 4.6, Day 5 = 3.5, Day 7 = 2.9, Day 9 = 2.2, Day 11 = 1.8.',
        },
        ph: 'Title: Mass of ethanol produced from food waste over time\nX-axis: Day / day(s)\nY-axis: Mass of ethanol / mg\nPotato peel points: Day 1 = 2.4, Day 3 = 4.6, Day 5 = 3.5, Day 7 = 2.9, Day 9 = 2.2, Day 11 = 1.8\nPoints correctly plotted and joined with a smooth curve...',
      },
      {
        label: 'e',
        text: '**Outline** two trends in ethanol production for mango skin waste. **Explain** these trends using scientific reasoning.',
        marks: 6,
        ph: 'Trend 1: Ethanol production increases initially (until day 5).\nExplanation: The yeast population is growing, so there is more respiration occurring...\n\nTrend 2: After day 5, ethanol production decreases.\nExplanation: Food supply becomes limited, so less respiration occurs. Or ethanol builds up to toxic levels, causing yeast cells to die...',
      },
      {
        label: 'f',
        text: 'The table shows that the total mass of ethanol produced by potato peel over all days was 17.4 mg. **Calculate** the total mass of ethanol produced by mango skin waste over the 11 days. Show your working.',
        marks: 1,
        ph: 'Total = 2.1 + 5.0 + 9.4 + 3.6 + 1.6 + 1.4 = ...',
      },
      {
        label: 'g',
        text: '**Calculate** the difference in total mass of ethanol produced between the two types of food waste.',
        marks: 1,
        ph: 'Difference = ... − 17.4 = ...',
      },
      {
        label: 'h',
        text: 'The nutritional information shows that mango skin contains 17 g of carbohydrates per 100 g, while potato peel contains 21 g of carbohydrates per 100 g. The students predicted that a food source containing more carbohydrate will produce more ethanol.\n\n**Suggest** reasons why this prediction is **not** supported by the results in part (f).',
        marks: 2,
        ph: 'Potato peel has a higher carbohydrate content but produced less ethanol because...',
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
  // Q6 — Clotting Factor VIII & GM Bacteria (23 marks, Criterion D)
  // Context: recombinant Factor VIII for haemophilia via GM bacteria; homeostasis
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Blood Clotting, Homeostasis & Genetics',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Receptors & Hormones'],
    marks: 23,
    stem: 'Haemophilia has been recognised since ancient times as a condition in which a person\'s blood does not clot properly. We now know that this condition is caused when the body cannot make a working version of a blood protein. In the 1940s, scientists discovered that the protein *clotting factor VIII* is involved in stopping bleeding.\n\nFrom the 1960s to the 1990s, hospitals extracted and purified clotting factor VIII from donated human blood plasma. Around 1992, clotting factor VIII was produced by genetically modified bacteria for the first time. By changing the human factor-VIII gene slightly, different versions of the protein are produced. In 1992, treatment reached only a few thousand patients worldwide; today millions of doses are produced each year. Over this time the safety of the treatment improved dramatically.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="f8ah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#495057"/></marker></defs><rect width="640" height="280" fill="#ffffff"/><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#0b7285">Manufacture of clotting factor VIII using GM bacteria</text><g font-size="11" text-anchor="middle"><g><circle cx="80" cy="100" r="30" fill="#fde7f3" stroke="#c2255c" stroke-width="2"/><path d="M68,100 q12,-14 24,0" stroke="#c2255c" fill="none" stroke-width="2"/><rect x="76" y="92" width="8" height="16" rx="2" fill="#c2255c"/><text x="80" y="150" fill="#8c1346">Stage 1</text><text x="80" y="164" fill="#8c1346" font-size="9">factor-VIII gene extracted</text></g><g><circle cx="240" cy="100" r="30" fill="#e7f6ec" stroke="#2f9e44" stroke-width="2"/><circle cx="240" cy="100" r="18" fill="none" stroke="#1e7a32" stroke-width="2.5" stroke-dasharray="4 4"/><text x="240" y="150" fill="#1e7a32">Stage 2</text><text x="240" y="164" fill="#1e7a32" font-size="9">plasmid opened</text></g><g><ellipse cx="400" cy="100" rx="34" ry="22" fill="#fff3bf" stroke="#f08c00" stroke-width="2"/><circle cx="392" cy="96" r="9" fill="none" stroke="#b56a00" stroke-width="2"/><rect x="404" y="92" width="6" height="10" rx="2" fill="#c2255c"/><text x="400" y="150" fill="#b56a00">Stage 3</text><text x="400" y="164" fill="#b56a00" font-size="9">GM bacteria reproduce</text></g><g><rect x="530" y="78" width="56" height="44" rx="6" fill="#cdeaf2" stroke="#0b7285" stroke-width="2"/><circle cx="548" cy="100" r="5" fill="#c2255c"/><circle cx="568" cy="96" r="5" fill="#c2255c"/><circle cx="558" cy="112" r="5" fill="#c2255c"/><text x="558" y="150" fill="#08545f">Stage 4</text><text x="558" y="164" fill="#08545f" font-size="9">factor VIII purified</text></g></g><g stroke="#495057" stroke-width="2" marker-end="url(#f8ah)"><line x1="115" y1="100" x2="205" y2="100"/><line x1="275" y1="100" x2="362" y2="100"/><line x1="438" y1="100" x2="525" y2="100"/></g></svg>',
      },
      caption: 'The industrial manufacture of clotting factor VIII using genetically modified bacteria, shown in four numbered stages.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The control of bleeding and the internal balance of the blood is an example of homeostasis. **Select** the correct meaning of the word *homeostasis*.',
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
        text: 'Gene transfer is an example of genetic modification and is used to produce clotting factor VIII. The diagram shows the industrial manufacture of the protein with four numbered stages. **Select** the correct statement for each numbered stage.\n\n**Stage 1:** ___SELECT_1___\n**Stage 2:** ___SELECT_2___\n**Stage 3:** ___SELECT_3___\n**Stage 4:** ___SELECT_4___',
        marks: 4,
        ph: 'Select the correct statement for each of the four stages.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'],
        widgetOptions: [
          'Human factor-VIII gene extracted',
          'Plasmid DNA opened',
          'Bacterial clotting gene removed',
          'Extraction and purification of clotting factor VIII',
          'Genetically modified bacteria reproduce',
          'Factor VIII extracted from a liver cell',
        ],
      },
      {
        label: 'c',
        text: 'Clotting factor VIII can be injected by a patient before a sporting activity. **Suggest** why this might be necessary for people with haemophilia.',
        marks: 2,
        ph: 'An injury during sport would cause bleeding. People with haemophilia cannot clot their blood properly, so...',
      },
      {
        label: 'd',
        text: 'The industrialization of clotting factor VIII production has been developed to help treat haemophilia. **Discuss** and **evaluate** the impacts of the industrialization of factor VIII production. In your answer you should include:\n\n- the impacts on an individual\'s health\n- social implications for communities\n- economic considerations\n- your opinion of whether or not industrialization has improved the treatment of haemophilia.',
        marks: 14,
        ph: 'Individual health: Industrialization has made factor VIII more available and affordable, meaning people with haemophilia can control bleeding more effectively. GM-made factor VIII is also safer than plasma-derived factor VIII...\n\nSocial implications: More people can access treatment in developing countries. However, treating only those who can afford it may raise issues of fairness...\n\nEconomic considerations: Mass production has reduced the cost of factor VIII. However, treatment still places a large economic burden on healthcare systems...\n\nConclusion: In my opinion, industrialization has improved the treatment of haemophilia because the safety of factor VIII has improved dramatically while the number of doses produced has risen...',
      },
      {
        label: 'e',
        text: 'Before GM bacteria were used, clotting factor VIII was extracted from the pooled blood plasma of many human donors. **Outline** the ethical implications of using donated human blood in this way.',
        marks: 2,
        ph: 'Ethical implications include...',
      },
    ],
  },
]
