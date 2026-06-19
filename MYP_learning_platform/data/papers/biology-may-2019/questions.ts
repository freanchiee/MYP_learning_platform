import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

export const paperMeta: PaperMeta = {
  id: 'biology-may-2019',
  subject: 'Biology',
  session: 'May',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // Q1 — Levels of Organization & Cell Biology (8 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Cell Biology & Organisation',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    topicsAlso: ['Tissues, Organs & Systems'],
    marks: 8,
    stem: 'This question is about the levels of organisation in living things and the structure of cells.',
    artefact: {
      component: 'VennOverlap',
      data: {
        title: 'Comparing a plant cell and an animal cell',
        setA: {
          label: 'Plant cell only',
          color: '#2f9e44',
          items: ['Cell wall', 'Chloroplast', 'Large central vacuole'],
        },
        setB: {
          label: 'Animal cell only',
          color: '#e8590c',
          items: ['Small vacuole'],
        },
        overlapLabel: 'Both: cell membrane, nucleus, mitochondria',
        caption: 'Drag each structure into the region where it belongs. Structures inside the overlap are found in both plant and animal cells.',
      },
      caption: 'Venn diagram of the parts found in plant cells, animal cells, or both.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct terms and drag them to complete the diagram showing levels of biological organisation.\n\nThe diagram shows (left to right, top track): [blank], Tissue, Organ, Organism, [blank], Biosphere\nAnd (bottom track): Atoms, Cell, [blank], Population, Ecosystem',
        marks: 1,
        ph: 'Drag the three correct terms: Molecule → first blank, Community → second blank, Body system → third blank.',
        widget: 'match_drag_drop',
        widgetItems: ['Molecule', 'Community', 'Body system'],
        widgetOptions: ['Top-left (between Atoms and Tissue)', 'Top-right (between Organism and Biosphere)', 'Bottom-middle (between Cell and Population)', 'Not used'],
      },
      {
        label: 'b',
        text: '**Organise** the following terms into the correct location in the Venn diagram (Plant cell only / Both cells / Animal cell only):\n\nLarge central vacuole, Cell membrane, Nucleus, Cell wall, Small vacuole, Mitochondria, Chloroplast',
        marks: 2,
        ph: 'Plant cell only: Large central vacuole, Cell wall, Chloroplast\nBoth cells: Cell membrane, Nucleus, Mitochondria\nAnimal cell only: Small vacuole',
        widget: 'match_drag_drop',
        widgetItems: ['Large central vacuole', 'Cell membrane', 'Nucleus', 'Cell wall', 'Small vacuole', 'Mitochondria', 'Chloroplast'],
        widgetOptions: ['Plant cell only', 'Both cells', 'Animal cell only'],
      },
      {
        label: 'c',
        text: 'Organelles are the specialised parts of cells that have a specific function. Using scientific language, **outline** the function of mitochondria.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="mito" cx="0.45" cy="0.4"><stop offset="0" stop-color="#f3c6dd"/><stop offset="1" stop-color="#c64f93"/></radialGradient></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Structure of a mitochondrion</text><ellipse cx="250" cy="150" rx="180" ry="92" fill="url(#mito)" stroke="#9c2e6e" stroke-width="3"/><ellipse cx="250" cy="150" rx="180" ry="92" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="3 4"/><path d="M120,150 q22,-46 44,0 q22,46 44,0 q22,-46 44,0 q22,46 44,0 q22,-46 44,0 q22,46 44,0" fill="none" stroke="#7a1f55" stroke-width="3"/><line x1="80" y1="92" x2="150" y2="120" stroke="#475569" stroke-width="1"/><text x="20" y="90" font-size="12" fill="#475569">outer membrane</text><line x1="80" y1="150" x2="150" y2="150" stroke="#475569" stroke-width="1"/><text x="20" y="154" font-size="12" fill="#475569">inner membrane</text><line x1="250" y1="232" x2="210" y2="160" stroke="#475569" stroke-width="1"/><text x="170" y="252" font-size="12" fill="#7a1f55" font-weight="700">folds (cristae)</text><line x1="430" y1="120" x2="360" y2="140" stroke="#475569" stroke-width="1"/><text x="438" y="124" font-size="12" fill="#475569">matrix</text></svg>',
          },
          caption: 'A mitochondrion. The inner membrane is highly folded into cristae, greatly increasing its surface area for respiration.',
        },
        ph: 'Mitochondria convert / produce energy (ATP) from a source of energy such as glucose through the process of respiration...',
      },
      {
        label: 'd',
        text: 'Mitochondria have several folds on their inner membrane. **Outline** how the structure of mitochondria is specifically adapted to the function.',
        marks: 2,
        ph: 'The folds increase the surface area of the mitochondria. This provides more sites for reactions (energy production) to take place...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q2 — Mitosis, Meiosis & Genetics (7 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Cell Division & Genetics',
    topicCanonical: 'Cell Division (Mitosis & Meiosis)',
    topicGroup: 'Evolution',
    topicsAlso: ['Inheritance & Variation'],
    marks: 7,
    stem: 'In mitosis, two identical cells are produced from a parent cell. Mitosis is needed for many life functions. Meiosis is a different type of cell division that produces gametes (sex cells).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Feature', 'Mitosis', 'Meiosis'],
        rows: [
          ['Number of daughter cells', '2', '4'],
          ['Chromosome number of daughter cells', 'Diploid (46 in humans)', 'Haploid (23 in humans)'],
          ['Daughter cells genetically...', 'Identical to parent', 'Non-identical (varied)'],
          ['Type of cell produced', 'Body (somatic) cells', 'Gametes (sex cells)'],
          ['Main roles', 'Growth, repair, asexual reproduction', 'Sexual reproduction'],
        ],
      },
      caption: 'A comparison of the two types of cell division. Mitosis makes two identical diploid body cells; meiosis makes four non-identical haploid gametes.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** all the functions of mitosis from the following list.',
        marks: 1,
        ph: 'Select all that apply.',
        widget: 'radio_select',
        widgetOptions: [
          'Growth, Repair and Asexual reproduction',
          'Growth, Sexual reproduction and Repair',
          'Respiration, Growth and Repair',
          'Asexual reproduction, Metabolism and Growth',
        ],
      },
      {
        label: 'b',
        text: 'Meiosis is another process which forms new cells. **Outline** the differences in the **cells** produced in meiosis and mitosis.',
        marks: 2,
        ph: 'Meiosis produces 4 haploid (23 chromosomes) cells that are genetically non-identical (gametes). Mitosis produces 2 diploid (46 chromosomes) cells that are genetically identical (somatic cells)...',
      },
      {
        label: 'c',
        text: 'The total available genes in a population is called the gene pool. **Describe** two sources of genetic variation in a gene pool.',
        marks: 4,
        ph: 'Source 1: Sexual reproduction / mutation / crossing over / random assortment / arrival of new individuals\nHow variation occurs: new combination of genes from two parents / change in DNA sequence / exchange of DNA segments within chromosomes...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q3 — Mass Extinction & Natural Selection (10 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Evolution & Extinction',
    topicCanonical: 'Natural Selection',
    topicGroup: 'Evolution',
    topicsAlso: ['Speciation & Extinction'],
    marks: 10,
    stem: 'Catastrophic, global events or widespread, rapid environmental change can cause mass extinctions. The image shows five mass extinction events including the End of Ordovician period (rapid global cooling, falling ocean levels), End of Devonian period (rapid global cooling, asteroid impact), End of Permian period (volcanic activity, rapid global warming), End of Triassic period (rapid global warming, desertification of land), and End of Cretaceous period (asteroid impact, falling ocean levels).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Mass extinction event', 'Causes'],
        rows: [
          ['End of Ordovician period', 'Rapid global cooling, falling ocean levels'],
          ['End of Devonian period', 'Rapid global cooling, asteroid impact'],
          ['End of Permian period', 'Volcanic activity, rapid global warming'],
          ['End of Triassic period', 'Rapid global warming, desertification of land'],
          ['End of Cretaceous period', 'Asteroid impact, falling ocean levels'],
        ],
      },
      caption: 'Five mass extinction events and the catastrophic environmental changes thought to have caused each one.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** a difference between the meaning of the terms *extinction* and *mass extinction*.',
        marks: 2,
        ph: 'Extinction is the disappearance of one species. Mass extinction is the disappearance of many species...',
      },
      {
        label: 'b',
        text: 'Individual species are in danger of extinction when genetic diversity is low or population sizes are small. **Outline** how population size in a species can decrease.',
        marks: 2,
        ph: 'Population size can decrease due to increased predation / habitat reduction / decreased food supply / disease / natural disaster / human interference. This leads to...',
      },
      {
        label: 'c',
        text: 'At the end of the Cretaceous period an asteroid impact resulted in rapid global cooling and falling ocean levels. **Suggest** two traits that helped mammals to survive in the new environmental conditions.',
        marks: 2,
        ph: 'Trait 1: fur (for warmth / insulation in cold conditions)\nTrait 2: warm-blooded (ability to control own body temperature) / carrying young / mothers feeding young with milk...',
      },
      {
        label: 'd',
        text: 'Rabbits are an example of a species that has different colours of fur. In a population of mountain rabbits, rabbits with white fur are far more common in the snowy upper areas of the mountain. Rabbits with darker fur are far more common at lower levels. Mixed-coloured rabbits are found in height ranges overlapping the others.\n\nUse the theory of natural selection to **explain** this distribution of rabbits with different coloured fur.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe8f5"/><stop offset="1" stop-color="#eaf6fb"/></linearGradient></defs><rect width="480" height="320" fill="url(#sky)"/><polygon points="240,40 400,300 80,300" fill="#7c8a96"/><polygon points="240,40 300,140 180,140" fill="#f4f8fb"/><polygon points="180,140 300,140 340,210 140,210" fill="#9fb0bb"/><polygon points="140,210 340,210 400,300 80,300" fill="#5b7a4b"/><text x="240" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Mountain rabbit distribution</text><circle cx="225" cy="105" r="8" fill="#ffffff" stroke="#94a3ad"/><circle cx="255" cy="120" r="8" fill="#ffffff" stroke="#94a3ad"/><text x="312" y="100" font-size="11" fill="#475569">snowy peak: white fur</text><circle cx="200" cy="185" r="8" fill="#cdbba0" stroke="#8a7a5c"/><circle cx="285" cy="180" r="8" fill="#cdbba0" stroke="#8a7a5c"/><text x="350" y="183" font-size="11" fill="#475569">mid-slope: mixed</text><circle cx="170" cy="265" r="8" fill="#5a4632" stroke="#33271b"/><circle cx="300" cy="270" r="8" fill="#5a4632" stroke="#33271b"/><text x="330" y="268" font-size="11" fill="#475569">lower slope: dark fur</text></svg>',
          },
          caption: 'White rabbits dominate the snowy upper slopes, dark rabbits the green lower slopes, with mixed-fur rabbits in the overlapping mid-range.',
        },
        ph: 'Rabbits with fur colour matching their location are less visible to predators, so they are more likely to survive. Longer survival means a greater chance of reproduction. Concentration of fur types by location means similar types breed together more often. Offspring are more likely to inherit advantageous fur colour...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q4 — Plant Growth, Fertilizer & Data Analysis (11 marks, Criterion A/B/C)
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Plant Nutrition & Data Analysis',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 11,
    stem: 'Changes in population size of living organisms are dependent on biotic and abiotic factors. For plants, this includes sunlight, temperature and the availability of nutrients.\n\nStudents learned that nitrogen is an essential nutrient for plants. They conducted a laboratory experiment using fertilizer containing nitrogen to grow pea plants. Their hypothesis: *"If fertilizer containing nitrogen is added to the soil, then the pea plants will grow taller because there is more nitrogen which is an essential nutrient."*\n\nAfter two weeks, the students recorded the height and leaf colour of the plants.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Trial', 'Height — fertilizer added / mm', 'Leaf colour (fertilizer)', 'Height — no fertilizer / mm', 'Leaf colour (no fertilizer)'],
        rows: [
          ['1', '310', 'Dark green, broad leaves', '196', 'Yellow-green, thin leaves'],
          ['2', '347', 'Dark green, broad leaves', '228', 'Brownish-yellow leaves'],
          ['3', '332', 'Dark green, broad leaves', '222', 'Light green, brown edges'],
        ],
      },
      caption: 'Pea-plant height (quantitative) and leaf colour (qualitative) after two weeks, with and without nitrogen fertilizer.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct category for each of the following factors by dragging them to either Biotic or Abiotic.\n\nFungi, Soil, Microbes, Water',
        marks: 1,
        ph: 'Drag each factor: Fungi→Biotic, Microbes→Biotic, Water→Abiotic. (Soil can go in either list.)',
        widget: 'match_drag_drop',
        widgetItems: ['Fungi', 'Soil', 'Microbes', 'Water'],
        widgetOptions: ['Biotic', 'Abiotic'],
      },
      {
        label: 'b',
        text: 'The process of photosynthesis captures energy from the sun for use by plants and animals. **Select** the correct words to complete the word equation for photosynthesis.\n\ncarbon dioxide + ___BLANK_1___ → oxygen + ___BLANK_2___\n\n(Choose from: water, carbon, glucose, air)',
        marks: 2,
        ph: 'Fill in the two blanks in the photosynthesis word equation.',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: 'Using the information in the tables, **state** the independent variable.',
        marks: 1,
        ph: 'The independent variable is...',
      },
      {
        label: 'd',
        text: '**State** one dependent variable recorded by the students.',
        marks: 1,
        ph: 'The dependent variable is...',
      },
      {
        label: 'e',
        text: 'The students recorded both quantitative and qualitative data. **State** the features of quantitative data and qualitative data.',
        marks: 2,
        ph: 'Quantitative data: numerical / can be measured with numbers\nQualitative data: non-numerical / descriptive / cannot be measured with numbers',
      },
      {
        label: 'f',
        text: '**Calculate** the mean for the height of the plants with fertilizer added. Give your calculated value to an appropriate number of decimal places.',
        marks: 2,
        ph: 'Mean = (310 + 347 + 332) ÷ 3 = ...',
      },
      {
        label: 'g',
        text: 'Using the data in the tables above, **outline** the validity of the students\' method giving both a strength and a limitation.',
        marks: 2,
        ph: 'Strength: ...\nLimitation: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — Duckweed Light Investigation Design (14 marks, Criterion B)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Duckweed & Light',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 14,
    stem: 'While on a field trip, students noticed two ponds of approximately the same size. One pond had very few duckweed plants and was surrounded by trees that were shading the pond. The other pond was mostly covered in duckweed and was in full sun.\n\nThe students decided to investigate if light was a factor in the growth of the duckweed plants. They chose the dependent variable to be the final number of duckweed plants. They planned to calculate the change in number of duckweed plants.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sun5" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient><linearGradient id="pond5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two ponds of similar size on the field trip</text><text x="150" y="52" font-size="12" font-weight="700" text-anchor="middle" fill="#2c5468">Shaded pond</text><ellipse cx="150" cy="170" rx="115" ry="70" fill="url(#pond5)" stroke="#3f7e98"/><g fill="#3a7d44"><ellipse cx="60" cy="120" rx="34" ry="40"/><ellipse cx="110" cy="100" rx="36" ry="44"/><ellipse cx="230" cy="118" rx="32" ry="38"/></g><g fill="#2f9e44" opacity="0.85"><circle cx="150" cy="178" r="6"/><circle cx="172" cy="190" r="6"/></g><text x="150" y="262" font-size="11" text-anchor="middle" fill="#475569">few duckweed · shaded by trees</text><circle cx="430" cy="55" r="22" fill="url(#sun5)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="430" y1="20" x2="430" y2="6"/><line x1="460" y1="45" x2="474" y2="38"/><line x1="400" y1="45" x2="386" y2="38"/></g><text x="410" y="92" font-size="12" font-weight="700" text-anchor="middle" fill="#9a7d0f">Sunny pond</text><ellipse cx="410" cy="180" rx="115" ry="70" fill="url(#pond5)" stroke="#3f7e98"/><g fill="#2f9e44"><circle cx="350" cy="170" r="7"/><circle cx="372" cy="158" r="7"/><circle cx="394" cy="172" r="7"/><circle cx="416" cy="160" r="7"/><circle cx="438" cy="174" r="7"/><circle cx="460" cy="162" r="7"/><circle cx="360" cy="192" r="7"/><circle cx="384" cy="200" r="7"/><circle cx="408" cy="192" r="7"/><circle cx="432" cy="200" r="7"/><circle cx="456" cy="192" r="7"/></g><text x="410" y="270" font-size="11" text-anchor="middle" fill="#475569">mostly covered in duckweed · full sun</text></svg>',
      },
      caption: 'The shaded pond (left) has very few duckweed plants; the sunny pond (right) is mostly covered. The students investigate whether light affects duckweed growth.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation that would allow them to obtain quantitative data. In your answer, you should:\n\n- identify the independent variable and two control variables\n- formulate a testable hypothesis with a scientific explanation\n- describe how to manipulate, measure or monitor all of the variables\n- describe the method to collect sufficient data\n- list any safety considerations.',
        marks: 14,
        ph: 'Independent variable: light intensity/amount of light (e.g. distance from lamp or number of lamps)\nControl variables: (1) volume of water in each container, (2) temperature, (3) initial number of duckweed plants\n\nHypothesis: If light intensity increases, then the number of duckweed plants will increase, because duckweed uses light energy for photosynthesis — more light means more energy available for growth and reproduction.\n\nManipulate: vary the light intensity using different distances from a lamp (e.g. 10 cm, 20 cm, 30 cm, 40 cm, 50 cm)\nMeasure DV: count final number of duckweed plants after 2 weeks\nMonitor CVs: measure water temperature with thermometer, measure water volume with measuring cylinder, use the same species and size of duckweed\n\nMethod: Place equal numbers of duckweed plants (e.g. 10) in beakers with equal volumes of pond water. Place at different distances from a lamp. Repeat 3 times per distance. Wait 2 weeks. Count final number of plants and calculate change.\n\nSafety: wash hands after handling pond water to avoid infection.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Duckweed Temperature Experiment (18 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Data Analysis — Duckweed & Temperature',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 18,
    stem: 'The students analysed their results and wondered if instead of the amount of sunlight, it was actually the difference in temperature due to shading that was affecting the growth of the duckweed. They set up an experiment to ensure the duckweed plants received the same amount of light, but at different temperatures. The duckweed was placed in water baths to maintain the water at constant temperature.\n\nThe method steps were:\n1. Collect duckweed plants from pond\n2. ___\n3. Label beakers\n4. Measure water from pond into each 500 cm³ beaker\n5. Count initial duckweed plants and place 10 duckweed plants into each of 24 beakers\n6. Set the temperature of each water bath\n7. Add thermometer to water bath\n8. ___\n9. Place three beakers with samples into each water bath\n10. Wait two weeks\n11. ___',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Mean number of duckweed plants vs temperature',
        xLabel: 'Temperature',
        yLabel: 'Mean number of plants',
        xUnit: '°C',
        xMin: 0,
        xMax: 40,
        yMin: 0,
        yMax: 90,
        xStep: 5,
        yStep: 10,
        dataPoints: [
          { x: 7.5, y: 20 },
          { x: 10.0, y: 28 },
          { x: 12.5, y: 40 },
          { x: 15.0, y: 50 },
          { x: 20.0, y: 70 },
          { x: 27.5, y: 80 },
          { x: 30.0, y: 70 },
          { x: 37.5, y: 18 },
        ],
      },
      caption: 'The students\' mean results. Growth rises to a peak at 27.5 °C, then falls sharply as enzymes denature at higher temperatures.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct location for each step in the method. Drag the three steps to the correct blank positions (steps 2, 8 and 11):\n\n- Place lamp facing water bath\n- Count final number of duckweed plants and record values\n- Select equally healthy duckweed plants',
        marks: 2,
        ph: 'Step 2: Select equally healthy duckweed plants\nStep 8: Place lamp facing water bath\nStep 11: Count final number of duckweed plants and record values',
        widget: 'match_drag_drop',
        widgetItems: ['Place lamp facing water bath', 'Count final number of duckweed plants and record values', 'Select equally healthy duckweed plants'],
        widgetOptions: ['Step 2', 'Step 8', 'Step 11'],
      },
      {
        label: 'b',
        text: '**Suggest** one improvement to the method. **Justify** your answer.',
        marks: 2,
        ph: 'Improvement: measure volume of water precisely / place lamp at a fixed distance / allow time for water bath to reach set temperature\nJustification: this ensures a constant value for the control variable / ensures light level is constant / ensures duckweed experience constant temperature',
      },
      {
        label: 'c',
        text: 'The table below shows the students\' mean data. **Plot** a graph of the data.\n\n| Temperature / °C | Mean number of plants |\n|---|---|\n| 7.5 | 20 |\n| 10.0 | 28 |\n| 12.5 | 40 |\n| 15.0 | 50 |\n| 20.0 | 70 |\n| 27.5 | 80 |\n| 30.0 | 70 |\n| 37.5 | 18 |\n\n*(Describe the graph you would draw.)*',
        marks: 6,
        ph: 'X-axis: Temperature / °C (evenly spaced, includes 7.5 to 37.5)\nY-axis: Mean number of plants (evenly spaced, 0 to ~90)\nAll 8 points plotted correctly ± 1 unit. Points joined with a smooth curve.',
      },
      {
        label: 'd',
        text: 'Using your graph, **describe** the trend in the data and **explain** the trend using scientific reasoning.',
        marks: 5,
        ph: 'Trend: Below 27.5°C, the mean number of duckweed plants increases with temperature. The maximum is at 27.5°C (80 plants). Above 27.5°C the number decreases.\n\nExplanation: Photosynthesis/growth is controlled by enzymes. Chemical reactions increase with temperature, so rate of growth increases. At temperatures above 27.5°C, enzymes denature and the rate of photosynthesis/growth decreases. At very high temperatures (37.5°C), growth almost stops.',
      },
      {
        label: 'e',
        text: 'The students had the following hypothesis: *"If temperature increases then the number of duckweed plants will increase proportionally."*\n\nUsing the data from part (c), **evaluate** this hypothesis.',
        marks: 3,
        ph: 'Below 27.5°C, the increase in number of plants was approximately proportional to temperature increase. Above 27.5°C, there was a decrease rather than a proportional increase. Therefore, the hypothesis is only partially supported by the data — it is correct for temperatures below 27.5°C but not above it.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Water Hyacinth Investigation (8 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation — Water Hyacinth',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Mitigation of Adverse Effects'],
    marks: 8,
    stem: 'Waste water contains nitrogen and phosphorus from human waste, food and other contaminants such as heavy metals, soaps and detergents. Some students wanted to investigate if a plant called water hyacinth could be used to treat waste water.\n\n**Research question:** "Does adding water hyacinth to waste water help to remove contaminants?"',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Water hyacinth — property', 'Value'],
        rows: [
          ['Nitrogen removal', '60–80%'],
          ['Growth rate', 'Rapid, up to 5 m per day'],
          ['Heavy-metal uptake', 'Good (lead, copper, cadmium, mercury)'],
          ['Ideal temperature range', '21–30 °C'],
          ['Behaviour outside native area', 'Highly invasive'],
        ],
      },
      caption: 'Fact card for water hyacinth — the plant the students want to use to treat waste water.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the research question above to **formulate** a hypothesis for the students\' investigation.',
        marks: 3,
        ph: 'If we add water hyacinth to waste water, then there will be a decrease in the amount of nitrogen/lead/named contaminant, because water hyacinth has been shown to uptake/absorb/remove nitrogen or named contaminant.',
      },
      {
        label: 'b',
        text: '**State** two control variables for this investigation.',
        marks: 2,
        ph: 'Control variable 1: temperature of water\nControl variable 2: size of test pond/container (or volume of waste water, or light level, or starting amount of contaminants)',
      },
      {
        label: 'c',
        text: 'After the investigation, the students realised that the starting amount of nitrogen was different for each trial. **Outline** how this limitation would have affected the results.',
        marks: 2,
        ph: 'Poor control of variables leads to invalid results. Different amounts of nitrogen could lead to different growth rates of the water hyacinth. The starting point of nitrogen concentration is not the same so the final difference may not be due to the water hyacinth alone.',
      },
      {
        label: 'd',
        text: '**State** an action which would improve the limitation in part (c). Include details of any equipment you would use.',
        marks: 1,
        ph: 'Use a known amount of nitrogen each trial (measure using a nitrogen test kit / water testing equipment) OR measure the amount of nitrogen at the beginning so that the percentage change could be calculated.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q8 — Wild Fish Populations & Fishing Technology (8 marks, Criterion D)
  // ─────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Sustainability — Fishing & Ecosystems',
    topicCanonical: 'Overexploitation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Food Chains & Webs'],
    marks: 8,
    stem: 'Fish are an important part of many diets around the world. As the human population is increasing, the amount of fish eaten per person is also increasing. This increase in demand for fish has led to unsustainable fishing practices. Decreasing fish populations are a world-wide problem threatening food supplies.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'The tuna food web',
        nodes: [
          { id: 'algae', label: 'Algae', color: '#2f9e44', detail: 'Producer — makes food by photosynthesis.' },
          { id: 'plankton', label: 'Plankton', color: '#74b816', detail: 'Primary consumer that feeds on algae.' },
          { id: 'krill', label: 'Krill & small fish', color: '#1098ad', detail: 'Eaten by tuna, mahi mahi, marlin and shark.' },
          { id: 'tuna', label: 'Tuna', color: '#1971c2', detail: 'Prey of shark; predator of krill and small fish. Eaten by mahi mahi predators too.' },
          { id: 'mahi', label: 'Mahi mahi', color: '#e8590c', detail: 'Eats tuna and krill/small fish.' },
          { id: 'marlin', label: 'Marlin', color: '#9c36b5', detail: 'Top predator feeding on krill and small fish.' },
          { id: 'shark', label: 'Shark', color: '#495057', detail: 'Top predator feeding on tuna and krill/small fish.' },
          { id: 'bacteria', label: 'Bacteria', color: '#7a4f1d', detail: 'Decomposers that recycle nutrients.' },
        ],
        edges: [
          { from: 'algae', to: 'plankton', label: 'eaten by' },
          { from: 'plankton', to: 'krill', label: 'eaten by' },
          { from: 'krill', to: 'tuna', label: 'eaten by' },
          { from: 'krill', to: 'mahi', label: 'eaten by' },
          { from: 'krill', to: 'marlin', label: 'eaten by' },
          { from: 'krill', to: 'shark', label: 'eaten by' },
          { from: 'tuna', to: 'shark', label: 'eaten by' },
          { from: 'tuna', to: 'mahi', label: 'eaten by' },
        ],
      },
      caption: 'Tuna food web. Each link points from prey to predator — hover a species to see what it eats and what eats it.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the interactive graphic to **state** one reason for a decrease in the total number of wild fish since 1950.',
        marks: 1,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Total number of wild fish caught (index)',
            xLabel: 'Year',
            yLabel: 'Relative catch / index',
            xMin: 1950,
            xMax: 2010,
            yMin: 0,
            yMax: 100,
            xStep: 10,
            yStep: 20,
            dataPoints: [
              { x: 1950, y: 20 },
              { x: 1960, y: 38 },
              { x: 1970, y: 60 },
              { x: 1980, y: 78 },
              { x: 1990, y: 95 },
              { x: 2000, y: 80 },
              { x: 2010, y: 62 },
            ],
          },
          caption: 'Wild fish catch rose steeply from 1950 as fishing technology improved, then fell after about 1990 as populations were overfished.',
        },
        ph: 'One reason for a decrease in wild fish is...',
      },
      {
        label: 'b',
        text: '**Suggest** how technology has allowed more fish to be caught.',
        marks: 2,
        ph: 'Sonar has helped fishermen to locate fish populations more accurately. GPS has allowed boats to locate fishing areas more precisely. Larger boats allow fishermen to catch more fish at one time...',
      },
      {
        label: 'c',
        text: 'The use of technology will have an impact on food webs in an ecosystem. Using scientific language, **describe** the impact on two organisms in the ecosystem if the number of tuna is reduced.',
        marks: 5,
        ph: 'Organism 1: Shark population would decrease/be reduced. Because there is less food (prey) for sharks as tuna is a prey item for sharks.\n\nOrganism 2: Mahi mahi population would increase. Because there are fewer tuna to eat the mahi mahi (fewer predators), so mahi mahi are less likely to be eaten.\n\n(Use ecological terminology: predator, prey, trophic level, consumer, producer, carnivore, etc.)',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q9 — Genetically Modified Salmon (16 marks, Criterion D)
  // ─────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'GM Fish Farming & Sustainability',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Ethical Implications'],
    marks: 16,
    stem: 'Scientists have developed a genetically modified salmon that can grow faster than a traditional salmon. This GM salmon is currently being raised in fish farms.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Farmed salmon at 18 months', 'Length / cm', 'Mass / kg'],
        rows: [
          ['Genetically modified salmon', '60', '3.0'],
          ['Regular salmon', '33', '1.3'],
        ],
      },
      caption: 'At 18 months the genetically modified salmon is almost twice as long and more than twice the mass of a regular farmed salmon.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** an advantage and a disadvantage of farming genetically modified salmon.',
        marks: 2,
        ph: 'Advantage: fish grow faster so they reach market sooner / provides more kg of fish / less feed required\nDisadvantage: potentially more expensive / people may not want to buy GM fish / unknown impact of GM organisms on the ecosystem',
      },
      {
        label: 'b',
        text: '**Discuss** and **evaluate** the use of genetically modified fish farming to solve the problem of decreasing fish stocks. In your answer, you should include:\n\n- positive and negative **environmental** impacts of fish farms\n- positive and negative **economic or social** impacts of fish farms\n- a suggestion of the **best location** for fish farms with justification\n- a **concluding appraisal** giving your opinion.',
        marks: 14,
        ph: 'Environmental impacts:\n+ Fish farming reduces pressure on wild fish populations; can help wild stocks recover.\n− Fish farms can cause diseases and parasites to spread to wild fish; reduced water quality; invasive species if fish escape; increased organic waste.\n\nEconomic/Social impacts:\n+ Fish farming can increase food supply and reduce cost of fish; provides employment; can reduce hunger.\n− GM fish may be more expensive to produce; people may refuse to buy GM food; regulatory barriers.\n\nBest location: fish farms should be located inland in enclosed facilities (not in open water) to prevent escape of GM fish into wild populations, to prevent disease transmission, and to allow better control of water quality.\n\nConclusion: In my opinion, GM fish farming can help solve decreasing fish stocks because it produces more fish per unit of feed and takes pressure off wild populations. However, strict regulation and inland farming are needed to prevent environmental risks.',
      },
    ],
  },
]
