import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2024 · VARIANT 1  (isomorphic to biology-nov-2024)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget types, tags) in a NEW biological context, with self-contained
// data-driven artefacts (no figImages). Numbers recomputed throughout.
//   Q1 Cell Biology:     animal cell → PLANT cell organelles; egg cell haploid
//   Q2 Hormones:         HGH from GM bacteria → INSULIN from GM bacteria
//   Q3 Classification:   homologous limbs → BIRD characteristic; FISH swim adapt.
//   Q4 Data (Crit C):    hydrangea colour vs pH → MORNING GLORY colour vs soil pH
//   Q5 Investigation (B):Zoysia grass pH → CLOVER germination vs soil pH
//   Q6 Design (Crit B):  mushroom temperature → MOSS biomass vs light intensity
//   Q7 Ecosystems (D):   forest carbon cycle → WETLAND nitrogen cycle
//   Q8 Regeneration (D): forest regeneration → CORAL REEF restoration methods
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2024-v1',
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
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    marks: 10,
    stem: 'The diagram shows the organelles present in a plant cell.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wall1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d3b88a"/><stop offset="1" stop-color="#b8965f"/></linearGradient><radialGradient id="vac1" cx="0.4" cy="0.35"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#7fc0db"/></radialGradient><marker id="ld1" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto"><circle cx="3" cy="3" r="2.5" fill="#1f2d3a"/></marker></defs><rect width="560" height="360" fill="#ffffff"/><rect x="40" y="30" width="420" height="300" rx="14" fill="url(#wall1)"/><rect x="56" y="46" width="388" height="268" rx="10" fill="#eafbe7" stroke="#37b24d" stroke-width="2.5"/><ellipse cx="240" cy="190" rx="120" ry="95" fill="url(#vac1)" stroke="#3f9ec0" stroke-width="2"/><circle cx="150" cy="120" r="34" fill="#9d6fb0" stroke="#6d4683" stroke-width="2"/><circle cx="150" cy="120" r="13" fill="#6d4683"/><ellipse cx="340" cy="110" rx="26" ry="15" fill="#2f9e44" stroke="#1c6b2c" stroke-width="2"/><ellipse cx="360" cy="265" rx="24" ry="14" fill="#2f9e44" stroke="#1c6b2c" stroke-width="2"/><ellipse cx="150" cy="270" rx="22" ry="13" fill="#e8772e" stroke="#a8531a" stroke-width="2"/><circle cx="120" cy="190" r="4" fill="#0b7285"/><circle cx="330" cy="195" r="4" fill="#0b7285"/><circle cx="250" cy="100" r="4" fill="#0b7285"/><line x1="150" y1="120" x2="36" y2="90" stroke="#1f2d3a" stroke-width="1" marker-start="url(#ld1)"/><text x="14" y="86" font-size="12" fill="#1f2d3a">nucleus</text><line x1="240" y1="190" x2="500" y2="180" stroke="#1f2d3a" stroke-width="1" marker-start="url(#ld1)"/><text x="495" y="176" font-size="12" fill="#1f2d3a">vacuole</text><line x1="340" y1="110" x2="500" y2="80" stroke="#1f2d3a" stroke-width="1" marker-start="url(#ld1)"/><text x="495" y="76" font-size="12" fill="#1f2d3a">chloroplast</text><line x1="150" y1="270" x2="40" y2="300" stroke="#1f2d3a" stroke-width="1" marker-start="url(#ld1)"/><text x="14" y="316" font-size="12" fill="#1f2d3a">mitochondrion</text><line x1="56" y1="180" x2="40" y2="180" stroke="#1f2d3a" stroke-width="1" marker-start="url(#ld1)"/><text x="6" y="200" font-size="12" fill="#1f2d3a">cell wall</text><line x1="120" y1="190" x2="40" y2="230" stroke="#1f2d3a" stroke-width="1" marker-start="url(#ld1)"/><text x="6" y="248" font-size="12" fill="#1f2d3a">ribosome</text></svg>',
      },
      caption: 'A typical plant cell showing the cell wall, chloroplasts, a large central vacuole and other organelles.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Complete the table by **matching** each organelle to its function. Drag the organelle names to the correct function row.',
        marks: 2,
        ph: 'Use the drag-and-drop to match each organelle to its function.',
        widget: 'match_drag_drop',
        widgetItems: [
          'Absorbs light energy for photosynthesis',
          'Provides support and a fixed shape to the cell',
          'Stores cell sap and keeps the cell turgid',
        ],
        widgetOptions: ['Chloroplast', 'Cell wall', 'Vacuole', 'Nucleus', 'Mitochondrion'],
      },
      {
        label: 'b',
        text: 'State **one** function of root hair cells and **one** function of xylem cells in a plant.',
        marks: 2,
        ph: 'Root hair cells: ...\nXylem cells: ...',
      },
      {
        label: 'c',
        text: 'An egg cell (ovum) contains a haploid nucleus. **Explain** the importance of the egg cell having a haploid nucleus.',
        marks: 3,
        ph: 'A haploid nucleus means the cell contains half the normal number of chromosomes. When an egg is fertilised by a sperm...',
      },
      {
        label: 'd',
        text: 'Compare aerobic respiration and anaerobic respiration in plant cells.',
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
    topicCanonical: 'Receptors & Hormones',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Reproduction'],
    marks: 11,
    stem: 'During puberty, hormones cause physical changes in the human body. The graph below shows the levels of hormones during the menstrual cycle.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><line x1="70" y1="270" x2="560" y2="270" stroke="#1f2d3a" stroke-width="2"/><line x1="70" y1="270" x2="70" y2="40" stroke="#1f2d3a" stroke-width="2"/><text x="300" y="305" font-size="13" text-anchor="middle" fill="#1f2d3a">Day of menstrual cycle</text><text x="24" y="160" font-size="13" text-anchor="middle" fill="#1f2d3a" transform="rotate(-90 24 160)">Hormone level</text><g font-size="10" fill="#5b6b78"><text x="70" y="288" text-anchor="middle">0</text><text x="192" y="288" text-anchor="middle">7</text><text x="314" y="288" text-anchor="middle">14</text><text x="436" y="288" text-anchor="middle">21</text><text x="558" y="288" text-anchor="middle">28</text></g><line x1="314" y1="270" x2="314" y2="44" stroke="#94a3ad" stroke-width="1" stroke-dasharray="4 4"/><text x="314" y="38" font-size="10" text-anchor="middle" fill="#0b7285">ovulation</text><path d="M70,250 C150,230 210,90 314,80 C400,95 470,200 560,250" fill="none" stroke="#2f9e44" stroke-width="2.5"/><text x="200" y="100" font-size="11" fill="#2f9e44">estrogen</text><path d="M70,260 C200,258 300,250 360,150 C420,90 480,150 560,200" fill="none" stroke="#e8772e" stroke-width="2.5"/><text x="430" y="120" font-size="11" fill="#e8772e">progesterone</text><path d="M70,262 C220,258 280,255 314,70 C340,200 380,258 560,260" fill="none" stroke="#0b7285" stroke-width="2" stroke-dasharray="5 4"/><text x="330" y="64" font-size="11" fill="#0b7285">LH</text></svg>',
      },
      caption: 'Hormone levels through one 28-day menstrual cycle: estrogen, progesterone and the LH surge at ovulation.',
    },
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
        text: 'Insulin for treating diabetes can be produced using genetically modified bacteria. The steps in this process are shown below. **Complete** the missing steps (1, 4 and 5).\n\n1. ___BLANK_1___\n2. Insulin gene inserted into a bacterial plasmid.\n3. Plasmid inserted into bacteria.\n4. ___BLANK_2___\n5. ___BLANK_3___',
        marks: 3,
        ph: 'Fill in the three missing steps of the genetic modification process.',
        widget: 'fill_blank',
      },
      {
        label: 'e',
        text: 'Insulin is given as an injection rather than as a tablet. **Explain** why insulin cannot be taken as a tablet.',
        marks: 2,
        ph: 'If taken as a tablet, insulin would...',
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
    topicCanonical: 'Classification',
    topicGroup: 'Organisms',
    topicsAlso: ['Unity & Diversity of Life'],
    marks: 7,
    stem: 'Scientists classify organisms into groups based on their characteristics. The diagram below shows the homologous limb bones of several vertebrates.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="260" fill="#ffffff"/><g fill="#e6d3a3" stroke="#9a7a3a" stroke-width="2"><g><text x="80" y="30" font-size="12" text-anchor="middle" fill="#1f2d3a">Human (arm)</text><path d="M70,46 q-8,28 -2,52 l16,0 q5,-26 -2,-52 Z"/><path d="M66,100 q-3,30 2,46 l8,-1 q3,-24 0,-46 Z"/><path d="M78,100 q4,28 0,46 l8,1 q4,-22 1,-46 Z"/><g><rect x="64" y="150" width="4" height="34" rx="2"/><rect x="71" y="150" width="4" height="40" rx="2"/><rect x="78" y="150" width="4" height="38" rx="2"/><rect x="85" y="150" width="4" height="30" rx="2"/></g></g><g transform="translate(150,0)"><text x="80" y="30" font-size="12" text-anchor="middle" fill="#1f2d3a">Whale (flipper)</text><path d="M62,46 q-6,24 0,46 l28,0 q6,-22 0,-46 Z"/><path d="M60,96 q-2,26 4,40 l10,0 q2,-22 0,-40 Z"/><path d="M76,96 q4,24 1,40 l10,0 q1,-20 -1,-40 Z"/><g><rect x="58" y="140" width="5" height="44" rx="2"/><rect x="66" y="142" width="5" height="48" rx="2"/><rect x="74" y="142" width="5" height="46" rx="2"/><rect x="82" y="140" width="5" height="40" rx="2"/></g></g><g transform="translate(300,0)"><text x="90" y="30" font-size="12" text-anchor="middle" fill="#1f2d3a">Bird (wing)</text><path d="M74,46 q-8,30 -2,50 l16,0 q5,-24 -2,-50 Z"/><path d="M70,100 q-3,34 4,52 l8,-1 q3,-26 0,-52 Z"/><path d="M82,100 q4,32 0,52 l8,1 q4,-24 1,-52 Z"/><g><rect x="68" y="154" width="4" height="40" rx="2"/><rect x="76" y="154" width="4" height="46" rx="2"/><rect x="84" y="154" width="4" height="34" rx="2"/></g></g><g transform="translate(450,0)"><text x="90" y="30" font-size="12" text-anchor="middle" fill="#1f2d3a">Frog (leg)</text><path d="M76,46 q-7,26 -2,46 l14,0 q5,-22 -2,-46 Z"/><path d="M72,96 q-2,28 4,44 l8,0 q2,-22 0,-44 Z"/><path d="M84,96 q3,26 0,44 l8,0 q3,-20 0,-44 Z"/><g><rect x="70" y="142" width="3" height="46" rx="1.5"/><rect x="77" y="142" width="3" height="52" rx="1.5"/><rect x="84" y="142" width="3" height="48" rx="1.5"/><rect x="91" y="142" width="3" height="42" rx="1.5"/></g></g></g><text x="320" y="248" font-size="11" text-anchor="middle" fill="#5b6b78">Each limb has the same basic bone pattern (one upper bone, two lower bones, several digits).</text></svg>',
      },
      caption: 'Homologous limb bones of a human, whale, bird and frog — the same underlying bone structure adapted for different functions.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** one characteristic of birds.',
        marks: 1,
        ph: 'Birds...',
        widget: 'radio_select',
        widgetOptions: [
          'Have feathers covering their body',
          'Give birth to live young and produce milk',
          'Have moist scaleless skin and lay eggs in water',
          'Breathe using gills throughout their lives',
        ],
      },
      {
        label: 'b',
        text: 'A student states that homologous limb bones can be used to identify birds. **Evaluate** this statement using the diagram.',
        marks: 3,
        ph: 'The student is incorrect because homologous bones are present in birds AND non-birds such as...',
      },
      {
        label: 'c',
        text: 'A fish has a streamlined body shape and a swim bladder filled with gas. **Explain** how these two features are adaptations for life in water.',
        marks: 3,
        ph: 'A streamlined shape reduces water resistance/drag...\nA gas-filled swim bladder controls buoyancy so...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q4 — Morning Glory Investigation (13 marks, Criterion C)
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis & Ecosystems',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    marks: 13,
    stem: 'Students investigated the relationship between soil pH and morning glory flower colour. They measured the soil pH at locations where pink, purple and white morning glory flowers were growing.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Flower colour', 'Mean soil pH'],
        rows: [
          ['Pink', '5.40'],
          ['Purple', '6.90'],
          ['White', '6.85'],
        ],
      },
      caption: 'Summary of mean soil pH recorded at each morning glory flower colour (purple value to be calculated in part b).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Classify the following as **biotic** or **abiotic** factors in the morning glory habitat by dragging each factor to the correct column.',
        marks: 1,
        ph: 'Drag each factor to either Biotic or Abiotic.',
        widget: 'match_drag_drop',
        widgetItems: ['Earthworms', 'Bees', 'Rainfall', 'Sunlight', 'Soil pH', 'Air temperature'],
        widgetOptions: ['Biotic factors', 'Abiotic factors'],
      },
      {
        label: 'b',
        text: 'The table below shows the soil pH values recorded for **purple** morning glory flowers. Calculate the mean soil pH for purple flowers. Give your answer to three significant figures.\n\n| Measurement | Soil pH |\n|---|---|\n| 1 | 6.8 |\n| 2 | 7.0 |\n| 3 | 6.9 |\n| 4 | 7.1 |\n| 5 | 6.7 |\n| 6 | 7.0 |',
        marks: 2,
        ph: 'Mean = (6.8 + 7.0 + ... ) ÷ 6 = ...',
      },
      {
        label: 'c',
        text: 'Using your answer to part (b) and the data provided, **draw** a bar chart to show the average soil pH for each morning glory colour. Label both axes fully and include correct units.',
        marks: 5,
        ph: 'Describe or sketch your bar chart:\n\nY-axis label: ...\nX-axis label: ...\nScale: ...\nBars drawn for: Pink (pH ~5.40), Purple (pH ~6.92), White (pH ~6.85)...',
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
        text: 'The dot plot below shows the soil pH values recorded for each morning glory colour, including white flowers. A student suggests that white morning glory flowers might be a different species. **Evaluate** this suggestion using the dot plot data.',
        marks: 2,
        ph: 'The dot plot shows that white flowers are found across a wide range of soil pH values...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><line x1="90" y1="230" x2="520" y2="230" stroke="#1f2d3a" stroke-width="2"/><text x="305" y="265" font-size="12" text-anchor="middle" fill="#1f2d3a">Soil pH</text><g font-size="10" fill="#5b6b78"><text x="90" y="248">5.0</text><text x="176" y="248">5.5</text><text x="262" y="248">6.0</text><text x="348" y="248">6.5</text><text x="434" y="248">7.0</text><text x="520" y="248">7.5</text></g><text x="50" y="70" font-size="12" fill="#d6336c">Pink</text><text x="50" y="130" font-size="12" fill="#7048e8">Purple</text><text x="50" y="190" font-size="12" fill="#495057">White</text><g fill="#d6336c"><circle cx="159" cy="66" r="5"/><circle cx="142" cy="66" r="5"/><circle cx="176" cy="66" r="5"/><circle cx="193" cy="66" r="5"/><circle cx="170" cy="66" r="5"/><circle cx="148" cy="66" r="5"/></g><g fill="#7048e8"><circle cx="399" cy="126" r="5"/><circle cx="434" cy="126" r="5"/><circle cx="417" cy="126" r="5"/><circle cx="451" cy="126" r="5"/><circle cx="382" cy="126" r="5"/><circle cx="434" cy="126" r="5"/></g><g fill="#495057"><circle cx="124" cy="186" r="5"/><circle cx="210" cy="186" r="5"/><circle cx="296" cy="186" r="5"/><circle cx="382" cy="186" r="5"/><circle cx="451" cy="186" r="5"/><circle cx="262" cy="186" r="5"/></g></svg>',
          },
          caption: 'Dot plot of soil pH for each flower colour. White flowers occur across a much wider pH range than pink or purple.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — Clover Germination pH Investigation (16 marks, Criterion B)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    topicsAlso: ['Photosynthesis'],
    marks: 16,
    stem: 'Students investigated how soil pH affects the growth of white clover. They planted clover seeds in five pots containing soils of pH 5, 6, 7, 8, and 9. Each pot was watered with the same volume of water daily for two weeks. The chemicals used to manipulate the soil pH were unknown to the students.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="soil5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a5a2b"/><stop offset="1" stop-color="#5e3a16"/></linearGradient></defs><rect width="600" height="220" fill="#ffffff"/><g><g transform="translate(20,0)"><path d="M10,120 l70,0 l-8,70 l-54,0 Z" fill="url(#soil5)" stroke="#3f2710"/><rect x="14" y="108" width="62" height="14" fill="#7a4a22"/><line x1="40" y1="108" x2="40" y2="80" stroke="#2f9e44" stroke-width="2"/><circle cx="40" cy="76" r="6" fill="#37b24d"/><text x="45" y="208" font-size="12" text-anchor="middle" fill="#1f2d3a">pH 5</text></g><g transform="translate(130,0)"><path d="M10,120 l70,0 l-8,70 l-54,0 Z" fill="url(#soil5)" stroke="#3f2710"/><rect x="14" y="108" width="62" height="14" fill="#7a4a22"/><line x1="34" y1="108" x2="34" y2="68" stroke="#2f9e44" stroke-width="2"/><line x1="46" y1="108" x2="46" y2="60" stroke="#2f9e44" stroke-width="2"/><circle cx="34" cy="64" r="6" fill="#37b24d"/><circle cx="46" cy="56" r="6" fill="#37b24d"/><text x="45" y="208" font-size="12" text-anchor="middle" fill="#1f2d3a">pH 6</text></g><g transform="translate(240,0)"><path d="M10,120 l70,0 l-8,70 l-54,0 Z" fill="url(#soil5)" stroke="#3f2710"/><rect x="14" y="108" width="62" height="14" fill="#7a4a22"/><line x1="30" y1="108" x2="30" y2="50" stroke="#2f9e44" stroke-width="2"/><line x1="42" y1="108" x2="42" y2="44" stroke="#2f9e44" stroke-width="2"/><line x1="54" y1="108" x2="54" y2="52" stroke="#2f9e44" stroke-width="2"/><circle cx="30" cy="46" r="6" fill="#37b24d"/><circle cx="42" cy="40" r="6" fill="#37b24d"/><circle cx="54" cy="48" r="6" fill="#37b24d"/><text x="45" y="208" font-size="12" text-anchor="middle" fill="#1f2d3a">pH 7</text></g><g transform="translate(350,0)"><path d="M10,120 l70,0 l-8,70 l-54,0 Z" fill="url(#soil5)" stroke="#3f2710"/><rect x="14" y="108" width="62" height="14" fill="#7a4a22"/><line x1="40" y1="108" x2="40" y2="86" stroke="#2f9e44" stroke-width="2"/><circle cx="40" cy="82" r="6" fill="#37b24d"/><text x="45" y="208" font-size="12" text-anchor="middle" fill="#1f2d3a">pH 8</text></g><g transform="translate(460,0)"><path d="M10,120 l70,0 l-8,70 l-54,0 Z" fill="url(#soil5)" stroke="#3f2710"/><rect x="14" y="108" width="62" height="14" fill="#7a4a22"/><text x="45" y="208" font-size="12" text-anchor="middle" fill="#1f2d3a">pH 9</text></g></g><text x="300" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Clover seeds grown in five soils of different pH</text></svg>',
      },
      caption: 'Five identical pots of clover seeds, each in soil of a different pH, watered equally for two weeks.',
    },
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
        text: 'After two weeks, the students recorded the number of clover seedlings in each pot:\n\n| Soil pH | Number of clover seedlings |\n|---|---|\n| 5 | 1 |\n| 6 | 6 |\n| 7 | 6 |\n| 8 | 4 |\n| 9 | 0 |\n\nThe students made the following hypothesis: *"If the soil has a pH of 7, then there will be more clover seedlings, because that is the optimum pH."*\n\nUse the results in the table to **discuss** the validity of their hypothesis.',
        marks: 3,
        ph: 'The results show the maximum number of seedlings at pH 7, however pH 6 also gave 6 seedlings. The hypothesis is only partially supported because...',
      },
      {
        label: 'e',
        text: 'The students also measured the height of each clover seedling after two weeks:\n\n| Soil pH | Plant 1 | Plant 2 | Plant 3 | Plant 4 | Plant 5 |\n|---|---|---|---|---|---|\n| 5 | 7 mm | — | — | — | — |\n| 6 | 2.8 cm | 3.1 cm | 3.4 cm | 3.6 cm | 3.0 cm |\n| 7 | 4.2 cm | 4.7 cm | 4.0 cm | 4.5 cm | 4.6 cm |\n| 8 | 1 cm | 1 cm | 1 cm | 1 cm | — |\n| 9 | — | — | — | — | — |\n\n*(— = no seeds germinated)*\n\nUsing the data in part (d) and the data above, **identify** the optimum soil pH for growing clover. **Justify** your answer.',
        marks: 2,
        ph: 'The optimum soil pH is... because at this pH the most seedlings germinated AND the greatest average height was recorded.',
      },
      {
        label: 'f',
        text: 'One student suggested that 6.5 might be the optimum soil pH for clover growth. **Suggest** how the student could verify this.',
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
  // Q6 — Moss Growth Design (17 marks, Criterion B)
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    marks: 17,
    stem: 'Students noticed that moss was growing in a wide variety of locations around their school. They decided to investigate a factor affecting the growth of moss. They formulated the following research question:\n\n**"How does light intensity affect the growth of moss?"**\n\nAfter carrying out some initial research, the students decided to use biomass as a measure of growth. Biomass is the total mass of living organisms not including the water they contain.\n\nThe students have access to any equipment they need, including soil, moss spores, lamps of different brightness, a light meter and a drying oven.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 580 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="lamp6" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="580" height="240" fill="#ffffff"/><circle cx="120" cy="60" r="24" fill="url(#lamp6)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="120" y1="92" x2="100" y2="130"/><line x1="120" y1="92" x2="120" y2="134"/><line x1="120" y1="92" x2="140" y2="130"/></g><text x="120" y="40" font-size="11" text-anchor="middle" fill="#9a7d0f">lamp (light source)</text><rect x="70" y="150" width="100" height="50" rx="6" fill="#6e4a24" stroke="#3f2710"/><path d="M74,150 q14,-10 28,0 q14,-10 28,0 q14,-10 24,0" fill="none" stroke="#2f9e44" stroke-width="4"/><ellipse cx="120" cy="178" rx="38" ry="14" fill="#37b24d" opacity="0.45"/><text x="120" y="218" font-size="11" text-anchor="middle" fill="#5e3a16">tray of moss</text><rect x="320" y="120" width="70" height="44" rx="4" fill="#222" stroke="#000"/><text x="355" y="147" font-size="13" fill="#3ad36a" text-anchor="middle" font-family="monospace">lux</text><text x="355" y="178" font-size="11" text-anchor="middle" fill="#5b6b78">light meter</text><rect x="440" y="110" width="90" height="70" rx="6" fill="#d9e2e8" stroke="#5b6b78"/><rect x="452" y="128" width="66" height="40" rx="3" fill="#f1f3f5" stroke="#94a3ad"/><text x="485" y="200" font-size="11" text-anchor="middle" fill="#5b6b78">drying oven + balance</text><circle cx="470" cy="148" r="4" fill="#e8772e"/></svg>',
      },
      caption: 'Apparatus available to the students: lamps, a light meter to measure intensity, trays of moss spores, and a drying oven to find dry biomass.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation that would allow the students to obtain quantitative data to answer the research question. In your answer, you must include:\n\n- the independent variable, the dependent variable and two control variables\n- a testable hypothesis with a scientific explanation\n- details of additional equipment needed\n- details of how to manipulate, measure or monitor all of the variables\n- details of the method to collect sufficient data\n- one safety consideration',
        marks: 17,
        ph: 'Independent variable: light intensity (e.g. 1000, 2000, 4000, 8000 lux)\nDependent variable: dry biomass (g) of moss\nControl variables: (1) volume of soil used, (2) amount of moss spores...\n\nHypothesis: If light intensity increases, then moss biomass will increase up to an optimum, because more light increases the rate of photosynthesis until another factor becomes limiting.\n\nEquipment: lamps of known brightness, light meter, drying oven, balance, identical trays...\n\nMethod: ...\n\nSafety: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Wetland Ecosystems (10 marks, Criterion D)
  // ─────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Ecosystems & Sustainability',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 10,
    stem: 'Careful management of ecosystems is essential if global development is to become more sustainable. Wetland ecosystems cover about 6% of the land surface of our planet. Wetland ecosystem services contribute to human well-being in a variety of ways.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wet7" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfeefb"/><stop offset="1" stop-color="#7fc0db"/></linearGradient></defs><rect width="600" height="280" fill="#ffffff"/><rect x="0" y="170" width="600" height="110" fill="url(#wet7)"/><line x1="0" y1="170" x2="600" y2="170" stroke="#3f7e98" stroke-width="2"/><g stroke="#2f9e44" stroke-width="4" stroke-linecap="round"><line x1="80" y1="170" x2="80" y2="90"/><line x1="100" y1="170" x2="100" y2="80"/><line x1="120" y1="170" x2="120" y2="100"/><line x1="450" y1="170" x2="450" y2="95"/><line x1="470" y1="170" x2="470" y2="82"/><line x1="490" y1="170" x2="490" y2="105"/></g><g fill="#37b24d"><ellipse cx="100" cy="80" rx="30" ry="10"/><ellipse cx="470" cy="84" rx="28" ry="9"/></g><ellipse cx="280" cy="210" rx="22" ry="9" fill="#0b7285" opacity="0.5"/><path d="M250,150 q10,-12 20,0 q-2,8 -10,8 q-12,0 -10,-8 Z" fill="#e8772e" stroke="#a8531a"/><text x="270" y="142" font-size="10" fill="#a8531a">heron</text><path d="M300,205 q8,-6 16,0" fill="none" stroke="#1f2d3a" stroke-width="1.5"/><text x="40" y="30" font-size="13" font-weight="700" fill="#1f2d3a">Wetland ecosystem</text><text x="40" y="50" font-size="11" fill="#5b6b78">reeds, open water, birds and abundant nutrient-rich soil</text></svg>',
      },
      caption: 'A wetland ecosystem: shallow open water, dense reeds and rich biodiversity supported by waterlogged, nutrient-rich soils.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The images show examples of the four categories of ecosystem service. **Complete the table** by selecting and dragging the correct ecosystem service to each category.\n\n**Already given:** Products → Fish and reeds; Regulation → Flood control; Cultural → Bird watching; Support → Nutrient cycling',
        marks: 1,
        ph: 'Drag the four remaining services to the correct column.',
        widget: 'match_drag_drop',
        widgetItems: ['Drinking water', 'Water filtration', 'Educational visits', 'Habitat formation'],
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
        text: 'One consequence of a growing global population is an increased demand for farmland. Wetlands are often drained and the exposed organic soils are ploughed and the plant remains burned. The image below shows the nitrogen cycle.\n\nUsing the image, **discuss** the consequences of draining wetlands on the **nitrogen cycle**.',
        marks: 6,
        ph: 'Draining wetlands disturbs the nitrogen cycle because...\nFewer plants means less nitrogen taken up and stored...\nExposed soils allow bacteria to release nitrogen...',
        artefact: {
          component: 'NetworkGraph',
          data: {
            center: { label: 'Nitrogen in atmosphere (N₂)', detail: '78% of air', color: '#0b7285' },
            nodes: [
              { id: 'fix', label: 'Nitrogen fixation (bacteria)' },
              { id: 'nitrate', label: 'Nitrates in soil' },
              { id: 'plant', label: 'Nitrogen in plants' },
              { id: 'animal', label: 'Nitrogen in animals' },
              { id: 'decay', label: 'Decomposers / ammonia' },
              { id: 'denit', label: 'Denitrifying bacteria' },
            ],
            edges: [
              { from: 'fix', to: 'nitrate', label: 'fixed into' },
              { from: 'nitrate', to: 'plant', label: 'absorbed' },
              { from: 'plant', to: 'animal', label: 'eaten' },
              { from: 'animal', to: 'decay', label: 'death/waste' },
              { from: 'decay', to: 'nitrate', label: 'nitrification' },
              { from: 'denit', to: 'fix', label: 'returns N₂' },
            ],
          },
          caption: 'The nitrogen cycle: nitrogen passes between the atmosphere, soil nitrates, plants, animals and decomposers, driven by bacteria.',
        },
      },
      {
        label: 'd',
        text: 'Increased wetland drainage has been linked to global warming and climate change. **Suggest** one other **environmental** consequence of draining wetlands.',
        marks: 1,
        ph: 'Another environmental consequence is...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q8 — Coral Reef Restoration (16 marks, Criterion D)
  // ─────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Sustainability & Reef Restoration',
    topicCanonical: 'Mitigation of Adverse Effects',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 16,
    stem: 'Damaged coral reefs can be restored for different purposes using a range of methods. The three main methods of reef restoration are:\n\n**Natural recovery** — relies on healthy reefs nearby to release coral larvae that settle on the damaged reef; the strongest surviving corals are protected; loose rubble is stabilised; predators removed; site managed to optimise growth. Takes ~12 years.\n\n**Coral gardening** — divers collect a known quantity of coral fragments, grow them in underwater nurseries kept below 28°C, treat fragments to increase survival, then attach them to the reef in spring or autumn; algae removed; takes ~7 years.\n\n**Larval seeding** — coral larvae are reared in tanks on land, then transported in cooled tanks and released onto prepared reef surfaces; rubble stabilised; algae removed; 2 divers can plant 1,000–2,000 corals per day by hand or 8,000–10,000 with specialised equipment; larvae require more care including regular monitoring. Takes ~5 years.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sea8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fd6ec"/><stop offset="1" stop-color="#2c8fb8"/></linearGradient></defs><rect width="600" height="260" fill="url(#sea8)"/><rect x="0" y="220" width="600" height="40" fill="#e6cfa3"/><g><text x="100" y="30" font-size="12" font-weight="700" text-anchor="middle" fill="#093a52">Coral nursery</text><line x1="60" y1="120" x2="140" y2="120" stroke="#5b6b78" stroke-width="2"/><line x1="70" y1="120" x2="70" y2="100" stroke="#5b6b78"/><line x1="90" y1="120" x2="90" y2="100" stroke="#5b6b78"/><line x1="110" y1="120" x2="110" y2="100" stroke="#5b6b78"/><line x1="130" y1="120" x2="130" y2="100" stroke="#5b6b78"/><g fill="#f08c00"><circle cx="70" cy="96" r="5"/><circle cx="90" cy="96" r="5"/><circle cx="110" cy="96" r="5"/><circle cx="130" cy="96" r="5"/></g></g><g><text x="430" y="30" font-size="12" font-weight="700" text-anchor="middle" fill="#093a52">Restored reef</text><path d="M360,220 q10,-40 24,-2 q12,-44 24,-2 q14,-40 26,-4 q12,-36 24,0 q14,-42 26,-2 q12,-40 24,0" fill="#e8772e" stroke="#a8531a" stroke-width="2"/><g fill="#d6336c"><circle cx="390" cy="180" r="6"/><circle cx="440" cy="176" r="6"/><circle cx="490" cy="184" r="6"/></g><path d="M300,150 q24,-8 0,16 q-8,-8 0,-16 Z" fill="#ffd43b" stroke="#b8920f"/><path d="M520,140 q24,-8 0,16 q-8,-8 0,-16 Z" fill="#ffd43b" stroke="#b8920f"/></g><text x="300" y="252" font-size="11" text-anchor="middle" fill="#5e3a16">Coral fragments grown in nurseries are transplanted onto a degraded reef.</text></svg>',
      },
      caption: 'Coral restoration: fragments raised in underwater nurseries are transplanted onto a degraded reef to rebuild the ecosystem.',
    },
    tasks: [
      {
        label: '',
        text: 'Using information from this task and your wider MYP studies, **discuss** and **evaluate** the different methods for coral reef restoration. In your answer, you must include:\n\n- two reasons to restore coral reefs\n- a scientific explanation of why planning for restoration is important\n- a discussion of different environmental consequences for two methods\n- a discussion of different economic considerations for two methods\n- a concluding appraisal justifying your opinion of which is the best method of restoration',
        marks: 16,
        ph: 'Coral reefs should be restored for two main reasons: (1) to provide resources such as fish habitat and coastal protection and (2) to restore/promote biodiversity and habitats.\n\nPlanning is important because...\n\nEnvironmental consequences:\n- Natural recovery: ...\n- Coral gardening: ...\n\nEconomic considerations:\n- Larval seeding: ...\n- Coral gardening: ...\n\nConclusion: In my opinion, the best method is... because...',
      },
    ],
  },
]
