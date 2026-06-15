import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2019 · VARIANT 1  (isomorphic to biology-may-2019)
// Same crit / command term / marks / task structure / tags / widgets throughout.
// New biological context per question; every answer recomputed. No figImages —
// figures are self-contained data-driven artefacts.
//   Q1 Cells:        mitochondria → chloroplast (algal cell, thylakoid SA)
//   Q2 Genetics:     (same construct) new gene-pool framing
//   Q3 Natural sel:  mountain rabbits → peppered moths (industrial melanism)
//   Q4 Plant data:   pea + nitrogen fertilizer → barley + phosphate fertilizer
//   Q5 Crit B design: pond duckweed & light → Azolla water-fern & light
//   Q6 Crit B/C:     duckweed & temperature → Azolla water-fern & temperature
//   Q7 Phytoremed.:  water hyacinth → common reed (Phragmites) reed bed
//   Q8 Food web:     tuna (open ocean) → cod (North Sea)
//   Q9 GM fish:      GM salmon → GM tilapia
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-may-2019-v1',
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
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="bah1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="640" height="300" fill="#ffffff"/><text x="320" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Levels of biological organisation</text><g font-size="12" text-anchor="middle"><rect x="20" y="60" width="90" height="34" rx="6" fill="#e9ecef" stroke="#94a3ad"/><text x="65" y="82" fill="#5b6b78">Atoms</text><rect x="130" y="60" width="90" height="34" rx="6" fill="#fff3bf" stroke="#f08c00"/><text x="175" y="82" fill="#a8721a">[blank 1]</text><rect x="240" y="60" width="90" height="34" rx="6" fill="#dbe7d4" stroke="#2f9e44"/><text x="285" y="82" fill="#2f6b34">Tissue</text><rect x="350" y="60" width="90" height="34" rx="6" fill="#dbe7d4" stroke="#2f9e44"/><text x="395" y="82" fill="#2f6b34">Organ</text><rect x="460" y="60" width="100" height="34" rx="6" fill="#dbe7d4" stroke="#2f9e44"/><text x="510" y="82" fill="#2f6b34">Organism</text></g><line x1="112" y1="77" x2="128" y2="77" stroke="#0b7285" stroke-width="1.6" marker-end="url(#bah1)"/><line x1="222" y1="77" x2="238" y2="77" stroke="#0b7285" stroke-width="1.6" marker-end="url(#bah1)"/><line x1="332" y1="77" x2="348" y2="77" stroke="#0b7285" stroke-width="1.6" marker-end="url(#bah1)"/><line x1="442" y1="77" x2="458" y2="77" stroke="#0b7285" stroke-width="1.6" marker-end="url(#bah1)"/><g font-size="12" text-anchor="middle"><rect x="20" y="150" width="90" height="34" rx="6" fill="#e9ecef" stroke="#94a3ad"/><text x="65" y="172" fill="#5b6b78">Cell</text><rect x="130" y="150" width="90" height="34" rx="6" fill="#fff3bf" stroke="#f08c00"/><text x="175" y="172" fill="#a8721a">[blank 2]</text><rect x="240" y="150" width="100" height="34" rx="6" fill="#e9ecef" stroke="#94a3ad"/><text x="290" y="172" fill="#5b6b78">Population</text><rect x="360" y="150" width="100" height="34" rx="6" fill="#fff3bf" stroke="#f08c00"/><text x="410" y="172" fill="#a8721a">[blank 3]</text><rect x="480" y="150" width="100" height="34" rx="6" fill="#e9ecef" stroke="#94a3ad"/><text x="530" y="172" fill="#5b6b78">Ecosystem</text></g><line x1="112" y1="167" x2="128" y2="167" stroke="#0b7285" stroke-width="1.6" marker-end="url(#bah1)"/><line x1="222" y1="167" x2="238" y2="167" stroke="#0b7285" stroke-width="1.6" marker-end="url(#bah1)"/><line x1="342" y1="167" x2="358" y2="167" stroke="#0b7285" stroke-width="1.6" marker-end="url(#bah1)"/><line x1="462" y1="167" x2="478" y2="167" stroke="#0b7285" stroke-width="1.6" marker-end="url(#bah1)"/><text x="320" y="230" font-size="12" text-anchor="middle" fill="#5b6b78">Drag the three missing terms into the orange blanks.</text><text x="320" y="252" font-size="11" text-anchor="middle" fill="#94a3ad">Top track runs atoms → organism · bottom track runs cell → ecosystem</text></svg>',
      },
      caption: 'A levels-of-organisation diagram with three terms missing (orange blanks).',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct terms and drag them to complete the diagram showing levels of biological organisation.\n\nThe diagram shows (left to right, top track): Atoms, [blank], Tissue, Organ, Organism\nAnd (bottom track): Cell, [blank], Population, [blank], Ecosystem',
        marks: 1,
        ph: 'Drag the three correct terms: Molecule → blank 1 (after Atoms), Organ system → blank 2 (after Cell), Community → blank 3 (after Population).',
        widget: 'match_drag_drop',
        widgetItems: ['Molecule', 'Organ system', 'Community'],
        widgetOptions: ['Blank 1 (top, between Atoms and Tissue)', 'Blank 2 (bottom, between Cell and Population)', 'Blank 3 (bottom, between Population and Ecosystem)', 'Not used'],
      },
      {
        label: 'b',
        text: '**Organise** the following terms into the correct location in the Venn diagram (Plant cell only / Both cells / Animal cell only):\n\nChloroplast, Nucleus, Cell wall, Mitochondria, Large central vacuole, Cell membrane, Lysosome',
        marks: 2,
        ph: 'Plant cell only: Chloroplast, Cell wall, Large central vacuole\nBoth cells: Nucleus, Mitochondria, Cell membrane\nAnimal cell only: Lysosome',
        widget: 'match_drag_drop',
        widgetItems: ['Chloroplast', 'Nucleus', 'Cell wall', 'Mitochondria', 'Large central vacuole', 'Cell membrane', 'Lysosome'],
        widgetOptions: ['Plant cell only', 'Both cells', 'Animal cell only'],
      },
      {
        label: 'c',
        text: 'Organelles are the specialised parts of cells that have a specific function. Using scientific language, **outline** the function of chloroplasts.',
        marks: 3,
        ph: 'Chloroplasts capture / absorb light energy and use it to make food (glucose) from carbon dioxide and water through the process of photosynthesis...',
      },
      {
        label: 'd',
        text: 'Chloroplasts contain many stacked internal membranes called thylakoids. **Outline** how the structure of chloroplasts is specifically adapted to the function.',
        marks: 2,
        ph: 'The stacked thylakoid membranes increase the surface area of the chloroplast. This provides more sites for light absorption (photosynthesis) to take place...',
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
    stem: 'In mitosis, two identical cells are produced from a parent cell. Mitosis is needed for many life functions.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="bah2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="220" fill="#ffffff"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Mitosis — one parent cell forms two identical cells</text><circle cx="110" cy="115" r="42" fill="#dbe7d4" stroke="#2f9e44" stroke-width="2"/><path d="M96,100 q14,8 28,0 M96,130 q14,-8 28,0" stroke="#a8531a" stroke-width="3" fill="none"/><text x="110" y="178" font-size="12" text-anchor="middle" fill="#2f6b34">parent cell (2n)</text><line x1="160" y1="115" x2="230" y2="115" stroke="#0b7285" stroke-width="2" marker-end="url(#bah2)"/><circle cx="300" cy="70" r="34" fill="#dbe7d4" stroke="#2f9e44" stroke-width="2"/><path d="M289,60 q11,6 22,0 M289,82 q11,-6 22,0" stroke="#a8531a" stroke-width="2.5" fill="none"/><circle cx="300" cy="165" r="34" fill="#dbe7d4" stroke="#2f9e44" stroke-width="2"/><path d="M289,155 q11,6 22,0 M289,177 q11,-6 22,0" stroke="#a8531a" stroke-width="2.5" fill="none"/><text x="420" y="118" font-size="12" fill="#2f6b34">2 identical diploid (2n) cells</text></svg>',
      },
      caption: 'Mitosis produces two genetically identical diploid daughter cells.',
    },
    figImages: [],
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
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="230" fill="#ffffff"/><text x="320" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">The five major mass extinction events</text><line x1="40" y1="160" x2="600" y2="160" stroke="#5b6b78" stroke-width="2"/><line x1="40" y1="160" x2="40" y2="60" stroke="#5b6b78" stroke-width="2"/><text x="24" y="110" font-size="11" fill="#5b6b78" transform="rotate(-90 24 110)" text-anchor="middle">species lost</text><g><rect x="80" y="70" width="36" height="90" fill="#0b7285"/><text x="98" y="178" font-size="9" text-anchor="middle" fill="#2c5468">Ordovician</text><rect x="190" y="95" width="36" height="65" fill="#1098ad"/><text x="208" y="178" font-size="9" text-anchor="middle" fill="#2c5468">Devonian</text><rect x="300" y="45" width="36" height="115" fill="#c0392b"/><text x="318" y="178" font-size="9" text-anchor="middle" fill="#7a2419">Permian</text><rect x="410" y="100" width="36" height="60" fill="#e8772e"/><text x="428" y="178" font-size="9" text-anchor="middle" fill="#7a3d12">Triassic</text><rect x="520" y="80" width="36" height="80" fill="#9c36b5"/><text x="538" y="178" font-size="9" text-anchor="middle" fill="#5c2169">Cretaceous</text></g><text x="318" y="40" font-size="9" text-anchor="middle" fill="#7a2419">largest</text><text x="320" y="208" font-size="10" text-anchor="middle" fill="#94a3ad">time (oldest → most recent)</text></svg>',
      },
      caption: 'Relative severity of the five major mass extinction events through geological time.',
    },
    figImages: [],
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
        text: 'Peppered moths are an example of a species that has different colours of wing. In a region of woodland, peppered moths with pale, speckled wings are far more common on trees with pale, lichen-covered bark. Peppered moths with dark wings are far more common near factories where the tree bark has been blackened by soot. Mixed-coloured moths are found where both kinds of bark overlap.\n\nUse the theory of natural selection to **explain** this distribution of moths with different coloured wings.',
        marks: 4,
        ph: 'Moths with wing colour matching the bark are less visible to predators (birds), so they are more likely to survive. Longer survival means a greater chance of reproduction. Concentration of wing types by location means similar types breed together more often. Offspring are more likely to inherit advantageous wing colour...',
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
    stem: 'Changes in population size of living organisms are dependent on biotic and abiotic factors. For plants, this includes sunlight, temperature and the availability of nutrients.\n\nStudents learned that phosphorus is an essential nutrient for plants. They conducted a laboratory experiment using fertilizer containing phosphorus to grow barley plants. Their hypothesis: *"If fertilizer containing phosphorus is added to the soil, then the barley plants will grow taller because there is more phosphorus which is an essential nutrient."*\n\nAfter two weeks, the students recorded the height and leaf colour of the plants:\n\n| Trial | Fertilizer added (mm) | No fertilizer (mm) |\n|---|---|---|\n| 1 | 286 | 174 |\n| 2 | 319 | 201 |\n| 3 | 304 | 192 |',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Trial', 'Fertilizer added / mm', 'No fertilizer / mm'],
        rows: [['1', '286', '174'], ['2', '319', '201'], ['3', '304', '192']],
      },
      caption: 'Heights of barley plants after two weeks, with and without phosphorus fertilizer.',
    },
    figImages: [],
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
        ph: 'Mean = (286 + 319 + 304) ÷ 3 = ...',
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
  // Q5 — Azolla Light Investigation Design (14 marks, Criterion B)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Azolla & Light',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 14,
    stem: 'While on a field trip, students noticed two ponds of approximately the same size. One pond had very few Azolla (water fern) plants and was overhung by tall trees that shaded the water. The other pond was almost completely covered with a carpet of Azolla and was in full sun.\n\nThe students decided to investigate if light was a factor in the growth of the Azolla plants. They chose the dependent variable to be the final number of Azolla plants. They planned to calculate the change in number of Azolla plants.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sun5" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="600" height="240" fill="#ffffff"/><circle cx="450" cy="44" r="22" fill="url(#sun5)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="2" stroke-linecap="round"><line x1="450" y1="10" x2="450" y2="0"/><line x1="480" y1="44" x2="492" y2="44"/><line x1="472" y1="22" x2="481" y2="13"/></g><ellipse cx="160" cy="170" rx="120" ry="44" fill="#bfe3f2" stroke="#3f7e98"/><ellipse cx="450" cy="170" rx="120" ry="44" fill="#bfe3f2" stroke="#3f7e98"/><g fill="#2f9e44"><circle cx="120" cy="160" r="6"/><circle cx="170" cy="178" r="6"/></g><g fill="#37b24d"><circle cx="390" cy="155" r="7"/><circle cx="420" cy="170" r="7"/><circle cx="450" cy="160" r="7"/><circle cx="480" cy="175" r="7"/><circle cx="415" cy="185" r="7"/><circle cx="465" cy="186" r="7"/><circle cx="500" cy="165" r="7"/></g><path d="M60,120 q10,-50 24,0 M80,120 q10,-46 24,0" stroke="#2f6b34" stroke-width="4" fill="none"/><text x="160" y="226" font-size="11" text-anchor="middle" fill="#2c5468">shaded pond — few Azolla</text><text x="450" y="226" font-size="11" text-anchor="middle" fill="#2c5468">sunny pond — Azolla carpet</text></svg>',
      },
      caption: 'Two similar ponds: a shaded pond with little Azolla and a sunlit pond covered with Azolla.',
    },
    figImages: [],
    tasks: [
      {
        label: '',
        text: '**Design** an investigation that would allow them to obtain quantitative data. In your answer, you should:\n\n- identify the independent variable and two control variables\n- formulate a testable hypothesis with a scientific explanation\n- describe how to manipulate, measure or monitor all of the variables\n- describe the method to collect sufficient data\n- list any safety considerations.',
        marks: 14,
        ph: 'Independent variable: light intensity/amount of light (e.g. distance from lamp or number of lamps)\nControl variables: (1) volume of water in each container, (2) temperature, (3) initial number of Azolla plants\n\nHypothesis: If light intensity increases, then the number of Azolla plants will increase, because Azolla uses light energy for photosynthesis — more light means more energy available for growth and reproduction.\n\nManipulate: vary the light intensity using different distances from a lamp (e.g. 10 cm, 20 cm, 30 cm, 40 cm, 50 cm)\nMeasure DV: count final number of Azolla plants after 2 weeks\nMonitor CVs: measure water temperature with thermometer, measure water volume with measuring cylinder, use the same species and size of Azolla\n\nMethod: Place equal numbers of Azolla plants (e.g. 10) in beakers with equal volumes of pond water. Place at different distances from a lamp. Repeat 3 times per distance. Wait 2 weeks. Count final number of plants and calculate change.\n\nSafety: wash hands after handling pond water to avoid infection.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Azolla Temperature Experiment (18 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Data Analysis — Azolla & Temperature',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 18,
    stem: 'The students analysed their results and wondered if instead of the amount of sunlight, it was actually the difference in temperature due to shading that was affecting the growth of the Azolla. They set up an experiment to ensure the Azolla plants received the same amount of light, but at different temperatures. The Azolla was placed in water baths to maintain the water at constant temperature.\n\nThe method steps were:\n1. Collect Azolla plants from pond\n2. ___\n3. Label beakers\n4. Measure water from pond into each 500 cm³ beaker\n5. Count initial Azolla plants and place 10 Azolla plants into each of 24 beakers\n6. Set the temperature of each water bath\n7. Add thermometer to water bath\n8. ___\n9. Place three beakers with samples into each water bath\n10. Wait two weeks\n11. ___',
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct location for each step in the method. Drag the three steps to the correct blank positions (steps 2, 8 and 11):\n\n- Place lamp facing water bath\n- Count final number of Azolla plants and record values\n- Select equally healthy Azolla plants',
        marks: 2,
        ph: 'Step 2: Select equally healthy Azolla plants\nStep 8: Place lamp facing water bath\nStep 11: Count final number of Azolla plants and record values',
        widget: 'match_drag_drop',
        widgetItems: ['Place lamp facing water bath', 'Count final number of Azolla plants and record values', 'Select equally healthy Azolla plants'],
        widgetOptions: ['Step 2', 'Step 8', 'Step 11'],
      },
      {
        label: 'b',
        text: '**Suggest** one improvement to the method. **Justify** your answer.',
        marks: 2,
        ph: 'Improvement: measure volume of water precisely / place lamp at a fixed distance / allow time for water bath to reach set temperature\nJustification: this ensures a constant value for the control variable / ensures light level is constant / ensures Azolla experience constant temperature',
      },
      {
        label: 'c',
        text: 'The table below shows the students\' mean data. **Plot** a graph of the data.\n\n| Temperature / °C | Mean number of plants |\n|---|---|\n| 7.5 | 16 |\n| 10.0 | 24 |\n| 12.5 | 36 |\n| 15.0 | 46 |\n| 20.0 | 64 |\n| 27.5 | 74 |\n| 30.0 | 64 |\n| 37.5 | 14 |\n\n*(Describe the graph you would draw.)*',
        marks: 6,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Mean number of Azolla plants vs temperature',
            xLabel: 'Temperature',
            yLabel: 'Mean number of plants',
            xUnit: '°C',
            dataPoints: [
              { x: 7.5, y: 16 },
              { x: 10.0, y: 24 },
              { x: 12.5, y: 36 },
              { x: 15.0, y: 46 },
              { x: 20.0, y: 64 },
              { x: 27.5, y: 74 },
              { x: 30.0, y: 64 },
              { x: 37.5, y: 14 },
            ],
            xMin: 0,
            xMax: 40,
            yMin: 0,
            yMax: 90,
            xStep: 5,
            yStep: 10,
          },
          caption: 'Optimum-curve data: growth rises to a peak near 27.5 °C then falls steeply.',
        },
        ph: 'X-axis: Temperature / °C (evenly spaced, includes 7.5 to 37.5)\nY-axis: Mean number of plants (evenly spaced, 0 to ~80)\nAll 8 points plotted correctly ± 1 unit. Points joined with a smooth curve.',
      },
      {
        label: 'd',
        text: 'Using your graph, **describe** the trend in the data and **explain** the trend using scientific reasoning.',
        marks: 5,
        ph: 'Trend: Below 27.5°C, the mean number of Azolla plants increases with temperature. The maximum is at 27.5°C (74 plants). Above 27.5°C the number decreases.\n\nExplanation: Photosynthesis/growth is controlled by enzymes. Chemical reactions increase with temperature, so rate of growth increases. At temperatures above 27.5°C, enzymes denature and the rate of photosynthesis/growth decreases. At very high temperatures (37.5°C), growth almost stops.',
      },
      {
        label: 'e',
        text: 'The students had the following hypothesis: *"If temperature increases then the number of Azolla plants will increase proportionally."*\n\nUsing the data from part (c), **evaluate** this hypothesis.',
        marks: 3,
        ph: 'Below 27.5°C, the increase in number of plants was approximately proportional to temperature increase. Above 27.5°C, there was a decrease rather than a proportional increase. Therefore, the hypothesis is only partially supported by the data — it is correct for temperatures below 27.5°C but not above it.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Common Reed Investigation (8 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation — Common Reed',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Mitigation of Adverse Effects'],
    marks: 8,
    stem: 'Waste water contains nitrogen and phosphorus from human waste, food and other contaminants such as heavy metals, soaps and detergents. Some students wanted to investigate if a plant called the common reed (Phragmites) could be used in a constructed wetland to treat waste water.\n\n**Common reed (Phragmites):** 50–70% nitrogen removal; vigorous growth rate up to 30 mm per day; good uptake of heavy metals (lead, copper, cadmium, zinc); ideal temperature range 15–25°C; can become invasive when outside its native area.\n\n**Research question:** "Does adding common reed to waste water help to remove contaminants?"',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><rect x="60" y="150" width="480" height="60" fill="#cdb38b" stroke="#8a6d3b"/><rect x="60" y="150" width="480" height="24" fill="#9ec7df" stroke="#3f7e98"/><text x="74" y="166" font-size="11" fill="#2c5468">waste water in →</text><g stroke="#2f9e44" stroke-width="4" stroke-linecap="round"><line x1="150" y1="150" x2="148" y2="80"/><line x1="170" y1="150" x2="174" y2="70"/><line x1="190" y1="150" x2="188" y2="90"/><line x1="300" y1="150" x2="298" y2="74"/><line x1="320" y1="150" x2="324" y2="66"/><line x1="340" y1="150" x2="338" y2="84"/><line x1="430" y1="150" x2="428" y2="78"/><line x1="450" y1="150" x2="454" y2="70"/></g><g fill="#37b24d"><ellipse cx="148" cy="76" rx="4" ry="12"/><ellipse cx="174" cy="66" rx="4" ry="12"/><ellipse cx="298" cy="70" rx="4" ry="12"/><ellipse cx="324" cy="62" rx="4" ry="12"/><ellipse cx="428" cy="74" rx="4" ry="12"/><ellipse cx="454" cy="66" rx="4" ry="12"/></g><g stroke="#6b4a2a" stroke-width="1.5"><line x1="150" y1="178" x2="146" y2="204"/><line x1="170" y1="178" x2="174" y2="204"/><line x1="320" y1="178" x2="316" y2="206"/><line x1="450" y1="178" x2="454" y2="204"/></g><text x="540" y="166" font-size="11" text-anchor="end" fill="#2c5468">→ cleaner water out</text><text x="300" y="232" font-size="11" text-anchor="middle" fill="#5b6b78">Constructed reed-bed wetland treating waste water</text></svg>',
      },
      caption: 'A constructed reed bed: water passes through common-reed roots that take up nitrogen and metals.',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: 'Use the research question above to **formulate** a hypothesis for the students\' investigation.',
        marks: 3,
        ph: 'If we add common reed to waste water, then there will be a decrease in the amount of nitrogen/lead/named contaminant, because common reed has been shown to uptake/absorb/remove nitrogen or named contaminant.',
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
        ph: 'Poor control of variables leads to invalid results. Different amounts of nitrogen could lead to different growth rates of the common reed. The starting point of nitrogen concentration is not the same so the final difference may not be due to the common reed alone.',
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
    stem: 'Fish are an important part of many diets around the world. As the human population is increasing, the amount of fish eaten per person is also increasing. This increase in demand for fish has led to unsustainable fishing practices. Decreasing fish populations are a world-wide problem threatening food supplies.\n\nThe North Sea food web shows: Phytoplankton → Zooplankton → Herring and sand eels → Cod, Haddock, Seal, Dolphin (Cod → Seal, Dolphin; Herring and sand eels → Cod, Haddock, Seal, Dolphin). Bacteria is also shown.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'North Sea food web',
        nodes: [
          { id: 'phyto', label: 'Phytoplankton', color: '#2f9e44', detail: 'Producer — makes food by photosynthesis.' },
          { id: 'zoo', label: 'Zooplankton', color: '#37b24d', detail: 'Primary consumer — grazes on phytoplankton.' },
          { id: 'herring', label: 'Herring & sand eels', color: '#0ca678', detail: 'Small fish — eat zooplankton; prey for many predators.' },
          { id: 'cod', label: 'Cod', color: '#0b7285', detail: 'Predatory fish — eats herring and sand eels.' },
          { id: 'haddock', label: 'Haddock', color: '#1098ad', detail: 'Predatory fish — eats herring and sand eels.' },
          { id: 'seal', label: 'Seal', color: '#e8590c', detail: 'Top predator — eats cod and small fish.' },
          { id: 'dolphin', label: 'Dolphin', color: '#9c36b5', detail: 'Top predator — eats cod and small fish.' },
        ],
        edges: [
          { from: 'phyto', to: 'zoo' },
          { from: 'zoo', to: 'herring' },
          { from: 'herring', to: 'cod' },
          { from: 'herring', to: 'haddock' },
          { from: 'herring', to: 'seal' },
          { from: 'herring', to: 'dolphin' },
          { from: 'cod', to: 'seal' },
          { from: 'cod', to: 'dolphin' },
        ],
      },
      caption: 'Arrows point in the direction energy flows (from the food to the feeder).',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: 'Use the interactive graphic to **state** one reason for a decrease in the total number of wild fish since 1950.',
        marks: 1,
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
        text: 'The use of technology will have an impact on food webs in an ecosystem. Using scientific language, **describe** the impact on two organisms in the ecosystem if the number of cod is reduced.',
        marks: 5,
        ph: 'Organism 1: Seal population would decrease/be reduced. Because there is less food (prey) for seals as cod is a prey item for seals.\n\nOrganism 2: Haddock population would increase. Because there are fewer cod to compete with the haddock for herring and sand eels (less competition), so more food is available for haddock.\n\n(Use ecological terminology: predator, prey, trophic level, consumer, producer, competition, etc.)',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q9 — Genetically Modified Tilapia (16 marks, Criterion D)
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
    stem: 'Scientists have developed a genetically modified tilapia that can grow faster than a traditional tilapia. This GM tilapia is currently being raised in fish farms. A genetically modified farmed tilapia at 12 months: length = 38 cm, mass = 1.4 kg. A regular farmed tilapia at 12 months: length = 24 cm, mass = 0.6 kg.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="230" fill="#ffffff"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Tilapia growth at 12 months</text><g><ellipse cx="200" cy="90" rx="100" ry="34" fill="#5b9a6b" stroke="#356b44" stroke-width="2"/><path d="M300,90 l34,-22 l0,44 Z" fill="#5b9a6b" stroke="#356b44" stroke-width="2"/><circle cx="130" cy="84" r="4" fill="#1f2d3a"/><text x="200" y="146" font-size="12" text-anchor="middle" fill="#356b44">GM tilapia — 38 cm, 1.4 kg</text></g><g><ellipse cx="180" cy="186" rx="64" ry="22" fill="#a9bd5f" stroke="#6e7d2f" stroke-width="2"/><path d="M244,186 l22,-14 l0,28 Z" fill="#a9bd5f" stroke="#6e7d2f" stroke-width="2"/><circle cx="135" cy="182" r="3" fill="#1f2d3a"/><text x="180" y="222" font-size="12" text-anchor="middle" fill="#6e7d2f">regular tilapia — 24 cm, 0.6 kg</text></g><g stroke="#94a3ad" stroke-width="1"><line x1="100" y1="58" x2="300" y2="58"/><line x1="100" y1="54" x2="100" y2="62"/><line x1="300" y1="54" x2="300" y2="62"/></g><text x="200" y="50" font-size="10" text-anchor="middle" fill="#94a3ad">same age — different size</text></svg>',
      },
      caption: 'At 12 months the GM tilapia is markedly longer and heavier than a regular farmed tilapia.',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** an advantage and a disadvantage of farming genetically modified tilapia.',
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
