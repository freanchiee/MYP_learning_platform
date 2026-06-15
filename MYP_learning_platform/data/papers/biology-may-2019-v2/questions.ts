import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2019 · VARIANT 2  (isomorphic to biology-may-2019)
// Same crit / command term / marks / task structure / tags / widgets throughout.
// New biological context per question (different from source AND from v1); every
// answer recomputed. No figImages — figures are data-driven artefacts.
//   Q1 Cells:        mitochondria → small-intestine epithelial cell (microvilli SA)
//   Q2 Genetics:     (same construct) new gene-pool framing
//   Q3 Natural sel:  mountain rabbits → rock pocket mice (desert sand vs lava rock)
//   Q4 Plant data:   pea + nitrogen fertilizer → tomato + potassium fertilizer
//   Q5 Crit B design: pond duckweed & light → filamentous algae (Spirogyra) & light
//   Q6 Crit B/C:     duckweed & temperature → Spirogyra algae & temperature
//   Q7 Phytoremed.:  water hyacinth → water lettuce (Pistia)
//   Q8 Food web:     tuna (open ocean) → kelp forest (kelp / urchin / otter)
//   Q9 GM fish:      GM salmon → GM common carp
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-may-2019-v2',
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
        svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="cah1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="640" height="300" fill="#ffffff"/><text x="320" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Levels of biological organisation</text><g font-size="12" text-anchor="middle"><rect x="20" y="60" width="90" height="34" rx="6" fill="#e9ecef" stroke="#94a3ad"/><text x="65" y="82" fill="#5b6b78">Atoms</text><rect x="130" y="60" width="90" height="34" rx="6" fill="#fff3bf" stroke="#f08c00"/><text x="175" y="82" fill="#a8721a">[blank 1]</text><rect x="240" y="60" width="90" height="34" rx="6" fill="#dbe7d4" stroke="#2f9e44"/><text x="285" y="82" fill="#2f6b34">Cell</text><rect x="350" y="60" width="90" height="34" rx="6" fill="#fff3bf" stroke="#f08c00"/><text x="395" y="82" fill="#a8721a">[blank 2]</text><rect x="460" y="60" width="100" height="34" rx="6" fill="#dbe7d4" stroke="#2f9e44"/><text x="510" y="82" fill="#2f6b34">Organ</text></g><line x1="112" y1="77" x2="128" y2="77" stroke="#0b7285" stroke-width="1.6" marker-end="url(#cah1)"/><line x1="222" y1="77" x2="238" y2="77" stroke="#0b7285" stroke-width="1.6" marker-end="url(#cah1)"/><line x1="332" y1="77" x2="348" y2="77" stroke="#0b7285" stroke-width="1.6" marker-end="url(#cah1)"/><line x1="442" y1="77" x2="458" y2="77" stroke="#0b7285" stroke-width="1.6" marker-end="url(#cah1)"/><g font-size="12" text-anchor="middle"><rect x="20" y="150" width="100" height="34" rx="6" fill="#dbe7d4" stroke="#2f9e44"/><text x="70" y="172" fill="#2f6b34">Organism</text><rect x="140" y="150" width="100" height="34" rx="6" fill="#e9ecef" stroke="#94a3ad"/><text x="190" y="172" fill="#5b6b78">Population</text><rect x="260" y="150" width="100" height="34" rx="6" fill="#fff3bf" stroke="#f08c00"/><text x="310" y="172" fill="#a8721a">[blank 3]</text><rect x="380" y="150" width="100" height="34" rx="6" fill="#e9ecef" stroke="#94a3ad"/><text x="430" y="172" fill="#5b6b78">Ecosystem</text><rect x="500" y="150" width="100" height="34" rx="6" fill="#e9ecef" stroke="#94a3ad"/><text x="550" y="172" fill="#5b6b78">Biosphere</text></g><line x1="122" y1="167" x2="138" y2="167" stroke="#0b7285" stroke-width="1.6" marker-end="url(#cah1)"/><line x1="242" y1="167" x2="258" y2="167" stroke="#0b7285" stroke-width="1.6" marker-end="url(#cah1)"/><line x1="362" y1="167" x2="378" y2="167" stroke="#0b7285" stroke-width="1.6" marker-end="url(#cah1)"/><line x1="482" y1="167" x2="498" y2="167" stroke="#0b7285" stroke-width="1.6" marker-end="url(#cah1)"/><text x="320" y="230" font-size="12" text-anchor="middle" fill="#5b6b78">Drag the three missing terms into the orange blanks.</text><text x="320" y="252" font-size="11" text-anchor="middle" fill="#94a3ad">Top track runs atoms → organ · bottom track runs organism → biosphere</text></svg>',
      },
      caption: 'A levels-of-organisation diagram with three terms missing (orange blanks).',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct terms and drag them to complete the diagram showing levels of biological organisation.\n\nThe diagram shows (left to right, top track): Atoms, [blank], Cell, [blank], Organ\nAnd (bottom track): Organism, Population, [blank], Ecosystem, Biosphere',
        marks: 1,
        ph: 'Drag the three correct terms: Molecule → blank 1 (after Atoms), Tissue → blank 2 (after Cell), Community → blank 3 (after Population).',
        widget: 'match_drag_drop',
        widgetItems: ['Molecule', 'Tissue', 'Community'],
        widgetOptions: ['Blank 1 (top, between Atoms and Cell)', 'Blank 2 (top, between Cell and Organ)', 'Blank 3 (bottom, between Population and Ecosystem)', 'Not used'],
      },
      {
        label: 'b',
        text: '**Organise** the following terms into the correct location in the Venn diagram (Plant cell only / Both cells / Animal cell only):\n\nCell wall, Cytoplasm, Chloroplast, Mitochondria, Centriole, Cell membrane, Large central vacuole',
        marks: 2,
        ph: 'Plant cell only: Cell wall, Chloroplast, Large central vacuole\nBoth cells: Cytoplasm, Mitochondria, Cell membrane\nAnimal cell only: Centriole',
        widget: 'match_drag_drop',
        widgetItems: ['Cell wall', 'Cytoplasm', 'Chloroplast', 'Mitochondria', 'Centriole', 'Cell membrane', 'Large central vacuole'],
        widgetOptions: ['Plant cell only', 'Both cells', 'Animal cell only'],
      },
      {
        label: 'c',
        text: 'Organelles and specialised cells have a specific function. Using scientific language, **outline** the function of an epithelial cell lining the small intestine.',
        marks: 3,
        ph: 'Epithelial cells lining the small intestine absorb / take up digested food molecules (nutrients such as glucose and amino acids) from the gut into the blood...',
      },
      {
        label: 'd',
        text: 'Epithelial cells lining the small intestine are covered in tiny folds called microvilli. **Outline** how the structure of these cells is specifically adapted to the function.',
        marks: 2,
        ph: 'The microvilli increase the surface area of the cell. This provides more area for the absorption of nutrients to take place...',
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
        svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="cah2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="220" fill="#ffffff"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Meiosis — one parent cell forms four non-identical cells</text><circle cx="100" cy="115" r="40" fill="#e6dff2" stroke="#7a4fb5" stroke-width="2"/><path d="M86,102 q14,8 28,0 M86,128 q14,-8 28,0" stroke="#a8531a" stroke-width="3" fill="none"/><text x="100" y="176" font-size="12" text-anchor="middle" fill="#5c2169">parent cell (2n)</text><line x1="148" y1="115" x2="215" y2="115" stroke="#0b7285" stroke-width="2" marker-end="url(#cah2)"/><g fill="#e6dff2" stroke="#7a4fb5" stroke-width="2"><circle cx="290" cy="50" r="22"/><circle cx="290" cy="105" r="22"/><circle cx="290" cy="160" r="22"/><circle cx="370" cy="80" r="22"/></g><text x="470" y="118" font-size="12" fill="#5c2169">4 non-identical haploid (n) gametes</text></svg>',
      },
      caption: 'Meiosis produces four genetically non-identical haploid gametes from one parent cell.',
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
        text: 'Rock pocket mice are an example of a species that has different colours of fur. In a desert region, mice with pale, sandy fur are far more common on the light-coloured desert sand. Mice with dark fur are far more common on patches of dark volcanic lava rock. Mixed-coloured mice are found where the sand and lava rock overlap.\n\nUse the theory of natural selection to **explain** this distribution of mice with different coloured fur.',
        marks: 4,
        ph: 'Mice with fur colour matching the ground are less visible to predators (owls/hawks), so they are more likely to survive. Longer survival means a greater chance of reproduction. Concentration of fur types by location means similar types breed together more often. Offspring are more likely to inherit advantageous fur colour...',
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
    stem: 'Changes in population size of living organisms are dependent on biotic and abiotic factors. For plants, this includes sunlight, temperature and the availability of nutrients.\n\nStudents learned that potassium is an essential nutrient for plants. They conducted a laboratory experiment using fertilizer containing potassium to grow tomato plants. Their hypothesis: *"If fertilizer containing potassium is added to the soil, then the tomato plants will grow taller because there is more potassium which is an essential nutrient."*\n\nAfter two weeks, the students recorded the height and leaf colour of the plants:\n\n| Trial | Fertilizer added (mm) | No fertilizer (mm) |\n|---|---|---|\n| 1 | 264 | 158 |\n| 2 | 291 | 182 |\n| 3 | 279 | 170 |',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Trial', 'Fertilizer added / mm', 'No fertilizer / mm'],
        rows: [['1', '264', '158'], ['2', '291', '182'], ['3', '279', '170']],
      },
      caption: 'Heights of tomato plants after two weeks, with and without potassium fertilizer.',
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
        ph: 'Mean = (264 + 291 + 279) ÷ 3 = ...',
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
  // Q5 — Spirogyra Algae Light Investigation Design (14 marks, Criterion B)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Algae & Light',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 14,
    stem: 'While on a field trip, students noticed two streams of approximately the same size. One stream had very little filamentous algae (Spirogyra) and ran through dense woodland that shaded the water. The other stream was thick with green strands of algae and ran across an open, sunlit meadow.\n\nThe students decided to investigate if light was a factor in the growth of the algae. They chose the dependent variable to be the final mass of algae. They planned to calculate the change in mass of the algae.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sun5b" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="600" height="240" fill="#ffffff"/><circle cx="450" cy="44" r="22" fill="url(#sun5b)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="2" stroke-linecap="round"><line x1="450" y1="10" x2="450" y2="0"/><line x1="480" y1="44" x2="492" y2="44"/><line x1="472" y1="22" x2="481" y2="13"/></g><rect x="40" y="150" width="240" height="60" fill="#bfe3f2" stroke="#3f7e98"/><rect x="320" y="150" width="240" height="60" fill="#bfe3f2" stroke="#3f7e98"/><g stroke="#2f9e44" stroke-width="2" fill="none"><path d="M70,210 q6,-18 0,-36"/><path d="M120,210 q-6,-14 0,-30"/></g><g stroke="#37b24d" stroke-width="2.5" fill="none"><path d="M340,210 q8,-30 0,-54"/><path d="M370,210 q-8,-28 0,-50"/><path d="M400,210 q8,-32 0,-56"/><path d="M430,210 q-8,-26 0,-48"/><path d="M460,210 q8,-30 0,-54"/><path d="M490,210 q-8,-28 0,-50"/><path d="M520,210 q8,-30 0,-52"/></g><path d="M60,130 q10,-44 24,0 M80,130 q10,-40 24,0" stroke="#2f6b34" stroke-width="4" fill="none"/><text x="160" y="230" font-size="11" text-anchor="middle" fill="#2c5468">shaded stream — little algae</text><text x="440" y="230" font-size="11" text-anchor="middle" fill="#2c5468">sunny stream — thick algae</text></svg>',
      },
      caption: 'Two similar streams: a shaded stream with little algae and a sunlit stream choked with Spirogyra.',
    },
    figImages: [],
    tasks: [
      {
        label: '',
        text: '**Design** an investigation that would allow them to obtain quantitative data. In your answer, you should:\n\n- identify the independent variable and two control variables\n- formulate a testable hypothesis with a scientific explanation\n- describe how to manipulate, measure or monitor all of the variables\n- describe the method to collect sufficient data\n- list any safety considerations.',
        marks: 14,
        ph: 'Independent variable: light intensity/amount of light (e.g. distance from lamp or number of lamps)\nControl variables: (1) volume of water in each container, (2) temperature, (3) initial mass of algae\n\nHypothesis: If light intensity increases, then the mass of algae will increase, because algae uses light energy for photosynthesis — more light means more energy available for growth.\n\nManipulate: vary the light intensity using different distances from a lamp (e.g. 10 cm, 20 cm, 30 cm, 40 cm, 50 cm)\nMeasure DV: measure the final mass of algae with a balance after 2 weeks\nMonitor CVs: measure water temperature with thermometer, measure water volume with measuring cylinder, use the same species and starting mass of algae\n\nMethod: Place equal masses of algae (e.g. 2 g) in beakers with equal volumes of pond water. Place at different distances from a lamp. Repeat 3 times per distance. Wait 2 weeks. Measure final mass and calculate change.\n\nSafety: wash hands after handling pond water to avoid infection.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Spirogyra Algae Temperature Experiment (18 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Data Analysis — Algae & Temperature',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 18,
    stem: 'The students analysed their results and wondered if instead of the amount of sunlight, it was actually the difference in temperature due to shading that was affecting the growth of the algae. They set up an experiment to ensure the algae received the same amount of light, but at different temperatures. The algae was placed in water baths to maintain the water at constant temperature.\n\nThe method steps were:\n1. Collect algae from stream\n2. ___\n3. Label beakers\n4. Measure water from stream into each 500 cm³ beaker\n5. Weigh out and place 2 g of algae into each of 24 beakers\n6. Set the temperature of each water bath\n7. Add thermometer to water bath\n8. ___\n9. Place three beakers with samples into each water bath\n10. Wait two weeks\n11. ___',
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct location for each step in the method. Drag the three steps to the correct blank positions (steps 2, 8 and 11):\n\n- Place lamp facing water bath\n- Weigh the final mass of algae and record values\n- Select equally healthy strands of algae',
        marks: 2,
        ph: 'Step 2: Select equally healthy strands of algae\nStep 8: Place lamp facing water bath\nStep 11: Weigh the final mass of algae and record values',
        widget: 'match_drag_drop',
        widgetItems: ['Place lamp facing water bath', 'Weigh the final mass of algae and record values', 'Select equally healthy strands of algae'],
        widgetOptions: ['Step 2', 'Step 8', 'Step 11'],
      },
      {
        label: 'b',
        text: '**Suggest** one improvement to the method. **Justify** your answer.',
        marks: 2,
        ph: 'Improvement: measure volume of water precisely / place lamp at a fixed distance / allow time for water bath to reach set temperature\nJustification: this ensures a constant value for the control variable / ensures light level is constant / ensures algae experience constant temperature',
      },
      {
        label: 'c',
        text: 'The table below shows the students\' mean data. **Plot** a graph of the data.\n\n| Temperature / °C | Mean mass of algae / g |\n|---|---|\n| 7.5 | 4 |\n| 10.0 | 7 |\n| 12.5 | 11 |\n| 15.0 | 15 |\n| 20.0 | 22 |\n| 27.5 | 26 |\n| 30.0 | 22 |\n| 37.5 | 5 |\n\n*(Describe the graph you would draw.)*',
        marks: 6,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Mean mass of algae vs temperature',
            xLabel: 'Temperature',
            yLabel: 'Mean mass of algae',
            xUnit: '°C',
            yUnit: 'g',
            dataPoints: [
              { x: 7.5, y: 4 },
              { x: 10.0, y: 7 },
              { x: 12.5, y: 11 },
              { x: 15.0, y: 15 },
              { x: 20.0, y: 22 },
              { x: 27.5, y: 26 },
              { x: 30.0, y: 22 },
              { x: 37.5, y: 5 },
            ],
            xMin: 0,
            xMax: 40,
            yMin: 0,
            yMax: 30,
            xStep: 5,
            yStep: 5,
          },
          caption: 'Optimum-curve data: algal mass rises to a peak near 27.5 °C then falls steeply.',
        },
        ph: 'X-axis: Temperature / °C (evenly spaced, includes 7.5 to 37.5)\nY-axis: Mean mass of algae / g (evenly spaced, 0 to ~30)\nAll 8 points plotted correctly ± 1 unit. Points joined with a smooth curve.',
      },
      {
        label: 'd',
        text: 'Using your graph, **describe** the trend in the data and **explain** the trend using scientific reasoning.',
        marks: 5,
        ph: 'Trend: Below 27.5°C, the mean mass of algae increases with temperature. The maximum is at 27.5°C (26 g). Above 27.5°C the mass decreases.\n\nExplanation: Photosynthesis/growth is controlled by enzymes. Chemical reactions increase with temperature, so rate of growth increases. At temperatures above 27.5°C, enzymes denature and the rate of photosynthesis/growth decreases. At very high temperatures (37.5°C), growth almost stops.',
      },
      {
        label: 'e',
        text: 'The students had the following hypothesis: *"If temperature increases then the mass of algae will increase proportionally."*\n\nUsing the data from part (c), **evaluate** this hypothesis.',
        marks: 3,
        ph: 'Below 27.5°C, the increase in mass was approximately proportional to temperature increase. Above 27.5°C, there was a decrease rather than a proportional increase. Therefore, the hypothesis is only partially supported by the data — it is correct for temperatures below 27.5°C but not above it.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Water Lettuce Investigation (8 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation — Water Lettuce',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Mitigation of Adverse Effects'],
    marks: 8,
    stem: 'Waste water contains nitrogen and phosphorus from human waste, food and other contaminants such as heavy metals, soaps and detergents. Some students wanted to investigate if a floating plant called water lettuce (Pistia) could be used to treat waste water.\n\n**Water lettuce (Pistia):** 55–75% nitrogen removal; fast growth rate, doubling its area in under two weeks; good uptake of heavy metals (lead, chromium, nickel, zinc); ideal temperature range 22–30°C; highly invasive when outside its native area.\n\n**Research question:** "Does adding water lettuce to waste water help to remove contaminants?"',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><rect x="60" y="70" width="480" height="140" fill="#cfe9f6" stroke="#3f7e98"/><line x1="60" y1="100" x2="540" y2="100" stroke="#3f7e98" stroke-width="2"/><text x="74" y="92" font-size="11" fill="#2c5468">water surface — floating water lettuce</text><g><g transform="translate(150,95)"><path d="M0,0 q-22,-16 -36,0 q22,10 36,0 Z" fill="#37b24d" stroke="#2f6b34"/><path d="M0,0 q22,-16 36,0 q-22,10 -36,0 Z" fill="#2f9e44" stroke="#2f6b34"/><path d="M0,0 q0,-22 0,0 q0,-22 0,0" /></g><g transform="translate(300,95)"><path d="M0,0 q-22,-16 -36,0 q22,10 36,0 Z" fill="#37b24d" stroke="#2f6b34"/><path d="M0,0 q22,-16 36,0 q-22,10 -36,0 Z" fill="#2f9e44" stroke="#2f6b34"/></g><g transform="translate(440,95)"><path d="M0,0 q-22,-16 -36,0 q22,10 36,0 Z" fill="#37b24d" stroke="#2f6b34"/><path d="M0,0 q22,-16 36,0 q-22,10 -36,0 Z" fill="#2f9e44" stroke="#2f6b34"/></g></g><g stroke="#6b4a2a" stroke-width="1.4"><line x1="150" y1="100" x2="146" y2="170"/><line x1="150" y1="100" x2="154" y2="166"/><line x1="300" y1="100" x2="296" y2="172"/><line x1="300" y1="100" x2="304" y2="168"/><line x1="440" y1="100" x2="436" y2="170"/><line x1="440" y1="100" x2="444" y2="166"/></g><text x="300" y="200" font-size="11" text-anchor="middle" fill="#2c5468">roots take up nitrogen and metals from the waste water</text><text x="300" y="230" font-size="11" text-anchor="middle" fill="#5b6b78">Water lettuce floating on a tank of waste water</text></svg>',
      },
      caption: 'Floating water lettuce (Pistia): roots hanging below the surface take up nitrogen and heavy metals.',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: 'Use the research question above to **formulate** a hypothesis for the students\' investigation.',
        marks: 3,
        ph: 'If we add water lettuce to waste water, then there will be a decrease in the amount of nitrogen/lead/named contaminant, because water lettuce has been shown to uptake/absorb/remove nitrogen or named contaminant.',
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
        ph: 'Poor control of variables leads to invalid results. Different amounts of nitrogen could lead to different growth rates of the water lettuce. The starting point of nitrogen concentration is not the same so the final difference may not be due to the water lettuce alone.',
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
    stem: 'Fish and shellfish are an important part of many diets around the world. As the human population is increasing, the amount of seafood eaten per person is also increasing. This increase in demand has led to unsustainable fishing practices. Decreasing populations are a world-wide problem threatening food supplies.\n\nThe kelp-forest food web shows: Giant kelp → Sea urchin and abalone → Sheephead fish, Sea otter, Lobster (Sea urchin → Sea otter, Sheephead fish, Lobster; Sea otter → (no predator shown)). Bacteria is also shown.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Kelp forest food web',
        nodes: [
          { id: 'kelp', label: 'Giant kelp', color: '#2f9e44', detail: 'Producer — makes food by photosynthesis.' },
          { id: 'urchin', label: 'Sea urchin', color: '#37b24d', detail: 'Primary consumer — grazes on kelp.' },
          { id: 'abalone', label: 'Abalone', color: '#0ca678', detail: 'Primary consumer — eats kelp.' },
          { id: 'sheephead', label: 'Sheephead fish', color: '#0b7285', detail: 'Predator — eats sea urchins.' },
          { id: 'lobster', label: 'Lobster', color: '#1098ad', detail: 'Predator — eats sea urchins.' },
          { id: 'otter', label: 'Sea otter', color: '#e8590c', detail: 'Top predator — eats sea urchins and abalone.' },
        ],
        edges: [
          { from: 'kelp', to: 'urchin' },
          { from: 'kelp', to: 'abalone' },
          { from: 'urchin', to: 'sheephead' },
          { from: 'urchin', to: 'lobster' },
          { from: 'urchin', to: 'otter' },
          { from: 'abalone', to: 'otter' },
        ],
      },
      caption: 'Arrows point in the direction energy flows (from the food to the feeder).',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: 'Use the interactive graphic to **state** one reason for a decrease in the total number of wild sea otters since 1950.',
        marks: 1,
        ph: 'One reason for a decrease in wild sea otters is...',
      },
      {
        label: 'b',
        text: '**Suggest** how technology has allowed more sea otters and shellfish to be caught (historically by the fur and fishing trades).',
        marks: 2,
        ph: 'Sonar has helped locate populations more accurately. GPS has allowed boats to locate hunting/fishing areas more precisely. Larger boats allow more to be caught at one time...',
      },
      {
        label: 'c',
        text: 'The use of technology will have an impact on food webs in an ecosystem. Using scientific language, **describe** the impact on two organisms in the ecosystem if the number of sea otters is reduced.',
        marks: 5,
        ph: 'Organism 1: Sea urchin population would increase. Because there are fewer otters (predators) to eat the urchins, so fewer urchins are eaten.\n\nOrganism 2: Giant kelp would decrease. Because more sea urchins graze on the kelp (more herbivores), reducing the producer population.\n\n(Use ecological terminology: predator, prey, trophic level, producer, primary consumer, etc.)',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q9 — Genetically Modified Carp (16 marks, Criterion D)
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
    stem: 'Scientists have developed a genetically modified common carp that can grow faster than a traditional carp. This GM carp is currently being raised in fish farms. A genetically modified farmed carp at 15 months: length = 52 cm, mass = 2.4 kg. A regular farmed carp at 15 months: length = 30 cm, mass = 1.0 kg.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="230" fill="#ffffff"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Common carp growth at 15 months</text><g><ellipse cx="200" cy="90" rx="100" ry="32" fill="#c08a3c" stroke="#7a531a" stroke-width="2"/><path d="M300,90 l34,-20 l0,40 Z" fill="#c08a3c" stroke="#7a531a" stroke-width="2"/><circle cx="132" cy="84" r="4" fill="#1f2d3a"/><text x="200" y="144" font-size="12" text-anchor="middle" fill="#7a531a">GM carp — 52 cm, 2.4 kg</text></g><g><ellipse cx="180" cy="186" rx="62" ry="20" fill="#d9b97a" stroke="#9a7634" stroke-width="2"/><path d="M242,186 l22,-13 l0,26 Z" fill="#d9b97a" stroke="#9a7634" stroke-width="2"/><circle cx="136" cy="182" r="3" fill="#1f2d3a"/><text x="180" y="222" font-size="12" text-anchor="middle" fill="#9a7634">regular carp — 30 cm, 1.0 kg</text></g><g stroke="#94a3ad" stroke-width="1"><line x1="100" y1="56" x2="300" y2="56"/><line x1="100" y1="52" x2="100" y2="60"/><line x1="300" y1="52" x2="300" y2="60"/></g><text x="200" y="48" font-size="10" text-anchor="middle" fill="#94a3ad">same age — different size</text></svg>',
      },
      caption: 'At 15 months the GM carp is markedly longer and heavier than a regular farmed carp.',
    },
    figImages: [],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** an advantage and a disadvantage of farming genetically modified carp.',
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
