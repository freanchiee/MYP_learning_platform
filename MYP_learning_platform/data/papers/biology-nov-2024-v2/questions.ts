import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2024 · VARIANT 2  (isomorphic to biology-nov-2024)
// Each question re-tests the SAME construct (crit, command term, marks, task
// structure, widgets, tags) in a NEW biological context, distinct from both the
// source AND variant 1. Every answer recomputed.
//   Q1 Cell biology:     animal cell → BACTERIAL cell organelles; egg-cell haploid
//   Q2 Hormones/GM:      menstrual + HGH → blood-sugar + BLOOD-CLOTTING FACTOR (GM)
//   Q3 Classification:   homologous limbs / mammal → REPTILE characteristic; cactus
//   Q4 Data (Crit C):    hydrangea pH/colour → PETUNIA flower anthocyanin pH
//   Q5 Investigation:    Zoysia grass pH → CRESS seedling soil pH
//   Q6 Crit B design:    mushroom temp→biomass → BEAN seedling biomass vs salt conc.
//   Q7 Ecosystems (D):   forest services + carbon cycle → MANGROVE services + carbon cycle
//   Q8 Crit D essay:     forest regeneration → MANGROVE restoration methods
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2024-v2',
  subject: 'Biology',
  session: 'Nov',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // Q1 — Cell Biology (10 marks, Criterion A) — BACTERIAL CELL
  // ─────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Cell Biology',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    marks: 10,
    stem: 'The diagram shows the structures present in a bacterial cell.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bw2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3d27a"/><stop offset="1" stop-color="#e0b347"/></linearGradient><radialGradient id="cy2" cx="0.4" cy="0.4"><stop offset="0" stop-color="#eafbe7"/><stop offset="1" stop-color="#cfeedd"/></radialGradient><marker id="ld2" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto"><circle cx="3" cy="3" r="2.5" fill="#1f2d3a"/></marker></defs><rect width="560" height="340" fill="#ffffff"/><rect x="60" y="90" width="380" height="160" rx="80" fill="url(#bw2)"/><rect x="70" y="100" width="360" height="140" rx="70" fill="#37b24d"/><rect x="80" y="110" width="340" height="120" rx="60" fill="url(#cy2)"/><path d="M120,170 q40,-40 90,0 q40,40 90,0 q30,-30 60,-6" fill="none" stroke="#0b7285" stroke-width="3"/><text x="250" y="150" font-size="11" fill="#0b7285">circular DNA (nucleoid)</text><ellipse cx="180" cy="200" rx="24" ry="11" fill="none" stroke="#c0392b" stroke-width="2"/><text x="158" y="225" font-size="10" fill="#c0392b">plasmid</text><circle cx="300" cy="200" r="4" fill="#6f4fa8"/><circle cx="320" cy="190" r="4" fill="#6f4fa8"/><circle cx="285" cy="210" r="4" fill="#6f4fa8"/><text x="300" y="232" font-size="10" fill="#6f4fa8">ribosomes</text><path d="M440,170 q40,-10 70,-30 M440,180 q44,4 78,-2 M440,190 q40,16 70,30" stroke="#5b6b78" stroke-width="2" fill="none"/><text x="470" y="150" font-size="10" fill="#5b6b78">flagella</text><line x1="70" y1="170" x2="36" y2="150" stroke="#1f2d3a" stroke-width="1" marker-start="url(#ld2)"/><text x="6" y="146" font-size="11" fill="#1f2d3a">cell wall</text><line x1="80" y1="150" x2="40" y2="120" stroke="#1f2d3a" stroke-width="1" marker-start="url(#ld2)"/><text x="6" y="116" font-size="11" fill="#1f2d3a">cell membrane</text><line x1="120" y1="220" x2="60" y2="270" stroke="#1f2d3a" stroke-width="1" marker-start="url(#ld2)"/><text x="40" y="288" font-size="11" fill="#1f2d3a">cytoplasm</text><text x="280" y="40" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Bacterial cell</text></svg>',
      },
      caption: 'A bacterial cell showing the cell wall, cell membrane, cytoplasm, circular DNA (nucleoid), a plasmid, ribosomes and flagella.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Complete the table by **matching** each structure to its function. Drag the structure names to the correct function row.',
        marks: 2,
        ph: 'Use the drag-and-drop to match each structure to its function.',
        widget: 'match_drag_drop',
        widgetItems: [
          'Carries the main genetic material',
          'Controls what goes in and out of the cell',
          'Makes proteins',
        ],
        widgetOptions: ['Circular DNA', 'Cell membrane', 'Ribosome', 'Flagellum', 'Cell wall'],
      },
      {
        label: 'b',
        text: 'State **one** function of nerve cells and **one** function of muscle cells.',
        marks: 2,
        ph: 'Nerve cells: ...\nMuscle cells: ...',
      },
      {
        label: 'c',
        text: 'An egg cell contains a haploid nucleus. **Explain** the importance of the egg cell having a haploid nucleus.',
        marks: 3,
        ph: 'A haploid nucleus means the cell contains half the normal number of chromosomes. When an egg is fertilised by a sperm...',
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
  // Q2 — Hormones & Reproduction (11 marks, Criterion A) — CLOTTING FACTOR
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
        text: 'Human blood-clotting factor (used to treat haemophilia) can be produced using genetically modified bacteria. The steps in this process are shown below. **Complete** the missing steps (1, 4 and 5).\n\n1. ___BLANK_1___\n2. Clotting-factor gene inserted into a bacterial plasmid.\n3. Plasmid inserted into bacteria.\n4. ___BLANK_2___\n5. ___BLANK_3___',
        marks: 3,
        ph: 'Fill in the three missing steps of the genetic modification process.',
        widget: 'fill_blank',
      },
      {
        label: 'e',
        text: 'Clotting factor is given as an injection rather than as a tablet. **Explain** why clotting factor cannot be taken as a tablet.',
        marks: 2,
        ph: 'If taken as a tablet, clotting factor would...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q3 — Classification (7 marks, Criterion A) — REPTILE + CACTUS
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
        svg: '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="260" fill="#ffffff"/><g fill="#e6d3a3" stroke="#9a7a3a" stroke-width="2"><g><text x="80" y="30" font-size="12" text-anchor="middle" fill="#1f2d3a">Cat (mammal)</text><path d="M70,46 q-8,28 -2,52 l16,0 q5,-26 -2,-52 Z"/><path d="M66,100 q-3,30 2,46 l8,-1 q3,-24 0,-46 Z"/><path d="M78,100 q4,28 0,46 l8,1 q4,-22 1,-46 Z"/><g><rect x="64" y="150" width="4" height="34" rx="2"/><rect x="71" y="150" width="4" height="40" rx="2"/><rect x="78" y="150" width="4" height="38" rx="2"/><rect x="85" y="150" width="4" height="30" rx="2"/></g></g><g transform="translate(150,0)"><text x="80" y="30" font-size="12" text-anchor="middle" fill="#1f2d3a">Lizard (reptile)</text><path d="M62,46 q-6,24 0,46 l28,0 q6,-22 0,-46 Z"/><path d="M60,96 q-2,26 4,40 l10,0 q2,-22 0,-40 Z"/><path d="M76,96 q4,24 1,40 l10,0 q1,-20 -1,-40 Z"/><g><rect x="58" y="140" width="5" height="44" rx="2"/><rect x="66" y="142" width="5" height="48" rx="2"/><rect x="74" y="142" width="5" height="46" rx="2"/><rect x="82" y="140" width="5" height="40" rx="2"/></g></g><g transform="translate(300,0)"><text x="90" y="30" font-size="12" text-anchor="middle" fill="#1f2d3a">Bat (wing)</text><path d="M74,46 q-8,30 -2,50 l16,0 q5,-24 -2,-50 Z"/><path d="M70,100 q-3,34 4,52 l8,-1 q3,-26 0,-52 Z"/><path d="M82,100 q4,32 0,52 l8,1 q4,-24 1,-52 Z"/><g><rect x="64" y="154" width="3" height="50" rx="1.5"/><rect x="72" y="154" width="3" height="56" rx="1.5"/><rect x="80" y="154" width="3" height="52" rx="1.5"/><rect x="88" y="154" width="3" height="46" rx="1.5"/></g></g><g transform="translate(450,0)"><text x="90" y="30" font-size="12" text-anchor="middle" fill="#1f2d3a">Frog (leg)</text><path d="M76,46 q-7,26 -2,46 l14,0 q5,-22 -2,-46 Z"/><path d="M72,96 q-2,28 4,44 l8,0 q2,-22 0,-44 Z"/><path d="M84,96 q3,26 0,44 l8,0 q3,-20 0,-44 Z"/><g><rect x="70" y="142" width="3" height="46" rx="1.5"/><rect x="77" y="142" width="3" height="52" rx="1.5"/><rect x="84" y="142" width="3" height="48" rx="1.5"/><rect x="91" y="142" width="3" height="42" rx="1.5"/></g></g></g><text x="320" y="248" font-size="11" text-anchor="middle" fill="#5b6b78">Each limb has the same basic bone pattern (one upper bone, two lower bones, several digits).</text></svg>',
      },
      caption: 'Homologous limb bones of a cat, lizard, bat and frog — the same underlying bone structure adapted for different functions.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** one characteristic of reptiles.',
        marks: 1,
        ph: 'Reptiles...',
        widget: 'radio_select',
        widgetOptions: [
          'Have dry scaly skin and lay eggs with leathery shells',
          'Have mammary glands and feed young with milk',
          'Have feathers and a beak',
          'Have moist skin and breathe through gills',
        ],
      },
      {
        label: 'b',
        text: 'A student states that homologous limb bones can be used to identify reptiles. **Evaluate** this statement using the diagram.',
        marks: 3,
        ph: 'The student is incorrect because homologous bones are present in reptiles AND non-reptiles such as...',
      },
      {
        label: 'c',
        text: 'A cactus has a thick waxy outer layer and stores water in a swollen stem. **Explain** how these two features are adaptations for living in a hot, dry desert.',
        marks: 3,
        ph: 'A thick waxy layer reduces water loss by...\nStoring water in the stem allows the cactus to...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q4 — Petunia Investigation (13 marks, Criterion C)
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis & Ecosystems',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    marks: 13,
    stem: 'Students investigated the relationship between soil pH and petunia flower colour. They measured the soil pH at locations where pink, magenta and purple petunias were growing.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Flower colour', 'Mean soil pH'],
        rows: [
          ['Pink', '5.60'],
          ['Magenta', '6.40'],
          ['Purple', '7.30'],
        ],
      },
      caption: 'Summary of mean soil pH recorded at each petunia flower colour (magenta value to be calculated in part b).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Classify the following as **biotic** or **abiotic** factors in the petunia habitat by dragging each factor to the correct column.',
        marks: 1,
        ph: 'Drag each factor to either Biotic or Abiotic.',
        widget: 'match_drag_drop',
        widgetItems: ['Aphids', 'Butterflies', 'Rainfall', 'Sunlight', 'Soil pH', 'Air temperature'],
        widgetOptions: ['Biotic factors', 'Abiotic factors'],
      },
      {
        label: 'b',
        text: 'The table below shows the soil pH values recorded for **magenta** petunias. Calculate the mean soil pH for magenta petunias. Give your answer to three significant figures.\n\n| Measurement | Soil pH |\n|---|---|\n| 1 | 6.2 |\n| 2 | 6.5 |\n| 3 | 6.3 |\n| 4 | 6.6 |\n| 5 | 6.1 |\n| 6 | 6.7 |',
        marks: 2,
        ph: 'Mean = (6.2 + 6.5 + ... ) ÷ 6 = ...',
      },
      {
        label: 'c',
        text: 'Using your answer to part (b) and the data provided, **draw** a bar chart to show the average soil pH for each petunia colour. Label both axes fully and include correct units.',
        marks: 5,
        ph: 'Describe or sketch your bar chart:\n\nY-axis label: ...\nX-axis label: ...\nScale: ...\nBars drawn for: Pink (pH ~5.60), Magenta (pH ~6.40), Purple (pH ~7.30)...',
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
        text: 'The dot plot below shows the soil pH values recorded for each petunia colour, including white petunias. A student suggests that white petunias might be a different species. **Evaluate** this suggestion using the dot plot data.',
        marks: 2,
        ph: 'The dot plot shows that white petunias are found across a wide range of soil pH values...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 290" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="290" fill="#ffffff"/><line x1="90" y1="240" x2="520" y2="240" stroke="#1f2d3a" stroke-width="2"/><text x="305" y="275" font-size="12" text-anchor="middle" fill="#1f2d3a">Soil pH</text><g font-size="10" fill="#5b6b78"><text x="90" y="258">5.0</text><text x="176" y="258">5.5</text><text x="262" y="258">6.0</text><text x="348" y="258">6.5</text><text x="434" y="258">7.0</text><text x="520" y="258">7.5</text></g><text x="50" y="66" font-size="12" fill="#d6336c">Pink</text><text x="50" y="120" font-size="12" fill="#c2255c">Magenta</text><text x="50" y="174" font-size="12" fill="#7048e8">Purple</text><text x="50" y="216" font-size="12" fill="#495057">White</text><g fill="#d6336c"><circle cx="193" cy="62" r="5"/><circle cx="176" cy="62" r="5"/><circle cx="210" cy="62" r="5"/><circle cx="159" cy="62" r="5"/><circle cx="185" cy="62" r="5"/><circle cx="200" cy="62" r="5"/></g><g fill="#c2255c"><circle cx="296" cy="116" r="5"/><circle cx="313" cy="116" r="5"/><circle cx="279" cy="116" r="5"/><circle cx="330" cy="116" r="5"/><circle cx="305" cy="116" r="5"/><circle cx="287" cy="116" r="5"/></g><g fill="#7048e8"><circle cx="416" cy="170" r="5"/><circle cx="434" cy="170" r="5"/><circle cx="399" cy="170" r="5"/><circle cx="451" cy="170" r="5"/><circle cx="425" cy="170" r="5"/><circle cx="408" cy="170" r="5"/></g><g fill="#495057"><circle cx="124" cy="212" r="5"/><circle cx="210" cy="212" r="5"/><circle cx="296" cy="212" r="5"/><circle cx="382" cy="212" r="5"/><circle cx="451" cy="212" r="5"/><circle cx="262" cy="212" r="5"/></g></svg>',
          },
          caption: 'Dot plot of soil pH for each flower colour. White petunias occur across a much wider pH range than the other colours.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — Cress Germination pH Investigation (16 marks, Criterion B)
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
    stem: 'Students investigated how soil pH affects the growth of cress. They planted cress seeds in five pots containing soils of pH 5, 6, 7, 8, and 9. Each pot was watered with the same volume of water daily for two weeks. The chemicals used to manipulate the soil pH were unknown to the students.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><text x="300" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cress seeds grown in five soils of different pH</text><g><rect x="55" y="168" width="44" height="36" rx="4" fill="#6e4626" stroke="#3f2710"/><line x1="77" y1="168" x2="77" y2="152" stroke="#2f9e44" stroke-width="2"/><circle cx="77" cy="150" r="4" fill="#37b24d"/><text x="77" y="222" font-size="11" text-anchor="middle" fill="#1f2d3a">pH 5</text><rect x="161" y="168" width="44" height="36" rx="4" fill="#6e4626" stroke="#3f2710"/><line x1="163" y1="168" x2="163" y2="126" stroke="#2f9e44" stroke-width="2"/><circle cx="163" cy="124" r="4" fill="#37b24d"/><line x1="171" y1="168" x2="171" y2="126" stroke="#2f9e44" stroke-width="2"/><circle cx="171" cy="124" r="4" fill="#37b24d"/><line x1="179" y1="168" x2="179" y2="126" stroke="#2f9e44" stroke-width="2"/><circle cx="179" cy="124" r="4" fill="#37b24d"/><line x1="187" y1="168" x2="187" y2="126" stroke="#2f9e44" stroke-width="2"/><circle cx="187" cy="124" r="4" fill="#37b24d"/><line x1="195" y1="168" x2="195" y2="126" stroke="#2f9e44" stroke-width="2"/><circle cx="195" cy="124" r="4" fill="#37b24d"/><line x1="203" y1="168" x2="203" y2="126" stroke="#2f9e44" stroke-width="2"/><circle cx="203" cy="124" r="4" fill="#37b24d"/><text x="183" y="222" font-size="11" text-anchor="middle" fill="#1f2d3a">pH 6</text><rect x="267" y="168" width="44" height="36" rx="4" fill="#6e4626" stroke="#3f2710"/><line x1="269" y1="168" x2="269" y2="120" stroke="#2f9e44" stroke-width="2"/><circle cx="269" cy="118" r="4" fill="#37b24d"/><line x1="277" y1="168" x2="277" y2="120" stroke="#2f9e44" stroke-width="2"/><circle cx="277" cy="118" r="4" fill="#37b24d"/><line x1="285" y1="168" x2="285" y2="120" stroke="#2f9e44" stroke-width="2"/><circle cx="285" cy="118" r="4" fill="#37b24d"/><line x1="293" y1="168" x2="293" y2="120" stroke="#2f9e44" stroke-width="2"/><circle cx="293" cy="118" r="4" fill="#37b24d"/><line x1="301" y1="168" x2="301" y2="120" stroke="#2f9e44" stroke-width="2"/><circle cx="301" cy="118" r="4" fill="#37b24d"/><line x1="309" y1="168" x2="309" y2="120" stroke="#2f9e44" stroke-width="2"/><circle cx="309" cy="118" r="4" fill="#37b24d"/><text x="289" y="222" font-size="11" text-anchor="middle" fill="#1f2d3a">pH 7</text><rect x="373" y="168" width="44" height="36" rx="4" fill="#6e4626" stroke="#3f2710"/><line x1="383" y1="168" x2="383" y2="138" stroke="#2f9e44" stroke-width="2"/><circle cx="383" cy="136" r="4" fill="#37b24d"/><line x1="391" y1="168" x2="391" y2="138" stroke="#2f9e44" stroke-width="2"/><circle cx="391" cy="136" r="4" fill="#37b24d"/><line x1="399" y1="168" x2="399" y2="138" stroke="#2f9e44" stroke-width="2"/><circle cx="399" cy="136" r="4" fill="#37b24d"/><line x1="407" y1="168" x2="407" y2="138" stroke="#2f9e44" stroke-width="2"/><circle cx="407" cy="136" r="4" fill="#37b24d"/><text x="395" y="222" font-size="11" text-anchor="middle" fill="#1f2d3a">pH 8</text><rect x="479" y="168" width="44" height="36" rx="4" fill="#6e4626" stroke="#3f2710"/><text x="501" y="222" font-size="11" text-anchor="middle" fill="#1f2d3a">pH 9</text></g></svg>',
      },
      caption: 'Five identical pots of cress seeds, each in soil of a different pH, watered equally for two weeks.',
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
        text: 'After two weeks, the students recorded the number of cress seedlings in each pot:\n\n| Soil pH | Number of cress seedlings |\n|---|---|\n| 5 | 1 |\n| 6 | 6 |\n| 7 | 6 |\n| 8 | 4 |\n| 9 | 0 |\n\nThe students made the following hypothesis: *"If the soil has a pH of 7, then there will be more cress seedlings, because that is the optimum pH."*\n\nUse the results in the table to **discuss** the validity of their hypothesis.',
        marks: 3,
        ph: 'The results show the maximum number of seedlings at pH 7, however pH 6 also gave 6 seedlings. The hypothesis is only partially supported because...',
      },
      {
        label: 'e',
        text: 'The students also measured the height of each cress seedling after two weeks:\n\n| Soil pH | Plant 1 | Plant 2 | Plant 3 | Plant 4 | Plant 5 |\n|---|---|---|---|---|---|\n| 5 | 8 mm | — | — | — | — |\n| 6 | 2.9 cm | 3.0 cm | 3.3 cm | 3.5 cm | 3.1 cm |\n| 7 | 4.3 cm | 4.8 cm | 4.1 cm | 4.4 cm | 4.7 cm |\n| 8 | 1 cm | 1 cm | 1 cm | 1 cm | — |\n| 9 | — | — | — | — | — |\n\n*(— = no seeds germinated)*\n\nUsing the data in part (d) and the data above, **identify** the optimum soil pH for growing cress. **Justify** your answer.',
        marks: 2,
        ph: 'The optimum soil pH is... because at this pH the most seedlings germinated AND the greatest average height was recorded.',
      },
      {
        label: 'f',
        text: 'One student suggested that 6.5 might be the optimum soil pH for cress growth. **Suggest** how the student could verify this.',
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
  // Q6 — Bean Seedling Growth Design (17 marks, Criterion B)
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    marks: 17,
    stem: 'Students noticed that plants growing near a coastal road, where salt is spread on the road in winter, seemed smaller than the same plants growing further inland. They decided to investigate a factor affecting the growth of bean seedlings. They formulated the following research question:\n\n**"How does the salt concentration of the water affect the growth of bean seedlings?"**\n\nAfter carrying out some initial research, the students decided to use biomass as a measure of growth. Biomass is the total mass of living organisms not including the water they contain.\n\nThe students have access to any equipment they need, including soil, bean seeds, salt, distilled water, measuring cylinders and a drying oven.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 580 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="580" height="240" fill="#ffffff"/><text x="290" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Bean seedlings watered with different salt concentrations</text><g><g transform="translate(20,0)"><path d="M10,150 l60,0 l-6,56 l-48,0 Z" fill="#6e4626" stroke="#3f2710"/><line x1="40" y1="150" x2="40" y2="100" stroke="#2f9e44" stroke-width="3"/><path d="M40,118 q-14,-6 -18,-18 q14,2 18,12 Z" fill="#37b24d"/><path d="M40,108 q14,-6 18,-18 q-14,2 -18,12 Z" fill="#37b24d"/><text x="40" y="224" font-size="10" text-anchor="middle" fill="#1f2d3a">0 g/L</text></g><g transform="translate(120,0)"><path d="M10,150 l60,0 l-6,56 l-48,0 Z" fill="#6e4626" stroke="#3f2710"/><line x1="40" y1="150" x2="40" y2="112" stroke="#2f9e44" stroke-width="3"/><path d="M40,126 q-12,-5 -16,-15 q12,2 16,10 Z" fill="#37b24d"/><text x="40" y="224" font-size="10" text-anchor="middle" fill="#1f2d3a">10 g/L</text></g><g transform="translate(220,0)"><path d="M10,150 l60,0 l-6,56 l-48,0 Z" fill="#6e4626" stroke="#3f2710"/><line x1="40" y1="150" x2="40" y2="126" stroke="#8aa56b" stroke-width="3"/><path d="M40,134 q-9,-4 -12,-11 q9,1 12,7 Z" fill="#9bb87a"/><text x="40" y="224" font-size="10" text-anchor="middle" fill="#1f2d3a">20 g/L</text></g><g transform="translate(320,0)"><path d="M10,150 l60,0 l-6,56 l-48,0 Z" fill="#6e4626" stroke="#3f2710"/><line x1="40" y1="150" x2="40" y2="138" stroke="#b0a06a" stroke-width="3"/><text x="40" y="224" font-size="10" text-anchor="middle" fill="#1f2d3a">30 g/L</text></g></g><g transform="translate(440,80)"><rect x="0" y="20" width="110" height="80" rx="6" fill="#d9e2e8" stroke="#5b6b78"/><rect x="14" y="38" width="82" height="44" rx="3" fill="#4a4a4a"/><text x="55" y="116" font-size="11" text-anchor="middle" fill="#5b6b78">drying oven</text></g></svg>',
      },
      caption: 'Bean seedlings watered with solutions of increasing salt concentration grow less; dried biomass is measured in a drying oven.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation that would allow the students to obtain quantitative data to answer the research question. In your answer, you must include:\n\n- the independent variable, the dependent variable and two control variables\n- a testable hypothesis with a scientific explanation\n- details of additional equipment needed\n- details of how to manipulate, measure or monitor all of the variables\n- details of the method to collect sufficient data\n- one safety consideration',
        marks: 17,
        ph: 'Independent variable: salt concentration of water (e.g. 0, 10, 20, 30, 40 g/L)\nDependent variable: dry biomass (g) of bean seedlings\nControl variables: (1) volume of solution added, (2) number/type of bean seeds...\n\nHypothesis: If salt concentration increases, then bean seedling biomass will decrease, because a higher salt concentration outside the roots reduces water uptake by osmosis.\n\nEquipment: measuring cylinders, balance, drying oven, identical pots, salt, distilled water...\n\nMethod: ...\n\nSafety: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Mangrove Ecosystems (10 marks, Criterion D)
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
    stem: 'Careful management of ecosystems is essential if global development is to become more sustainable. Mangrove forests grow along tropical coastlines and store more carbon per hectare than almost any other ecosystem. Mangrove ecosystem services contribute to human well-being in a variety of ways.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'A simple mangrove food web',
        nodes: [
          { id: 'mangrove', label: 'Mangrove leaves & algae' },
          { id: 'crab', label: 'Crab' },
          { id: 'shrimp', label: 'Shrimp' },
          { id: 'fish', label: 'Young fish' },
          { id: 'bird', label: 'Wading bird' },
          { id: 'croc', label: 'Crocodile' },
        ],
        edges: [
          { from: 'mangrove', to: 'crab' },
          { from: 'mangrove', to: 'shrimp' },
          { from: 'shrimp', to: 'fish' },
          { from: 'crab', to: 'bird' },
          { from: 'fish', to: 'bird' },
          { from: 'fish', to: 'croc' },
          { from: 'bird', to: 'croc' },
        ],
      },
      caption: 'Arrows point from each organism to the organism that eats it (the direction of energy flow) in a mangrove.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The images show examples of the four categories of ecosystem service. **Complete the table** by selecting and dragging the correct ecosystem service to each category.\n\n**Already given:** Products → Fish and shellfish; Regulation → Coastal protection; Cultural → Eco-tourism; Support → Nutrient cycling',
        marks: 1,
        ph: 'Drag the four remaining services to the correct column.',
        widget: 'match_drag_drop',
        widgetItems: ['Timber for building', 'Carbon storage', 'Recreational fishing', 'Soil formation'],
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
        text: 'One consequence of a growing global population is an increased demand for land and seafood. Mangroves are often cleared to make space for shrimp farms, and the cut trees are burned. The image below shows the carbon cycle.\n\nUsing the image, **discuss** the consequences of clearing mangroves on the **carbon cycle**.',
        marks: 6,
        ph: 'Clearing mangroves leads to an increase in atmospheric carbon dioxide because...\nFewer mangroves means less carbon fixed by photosynthesis...\nBurning the cut trees releases stored carbon...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ahc7b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#5b6b78"/></marker></defs><rect width="620" height="360" fill="#ffffff"/><text x="310" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">The carbon cycle</text><rect x="210" y="44" width="200" height="44" rx="10" fill="#cfe0ea" stroke="#5b6b78"/><text x="310" y="64" font-size="12" text-anchor="middle" fill="#1f2d3a">CO₂ in atmosphere</text><text x="310" y="80" font-size="10" text-anchor="middle" fill="#5b6b78">(carbon dioxide)</text><rect x="60" y="180" width="150" height="50" rx="10" fill="#dff0d8" stroke="#2f9e44"/><text x="135" y="200" font-size="12" text-anchor="middle" fill="#1e7a33">Mangrove trees</text><text x="135" y="216" font-size="10" text-anchor="middle" fill="#2f9e44">photosynthesis</text><rect x="420" y="180" width="150" height="50" rx="10" fill="#fdecd2" stroke="#f08c00"/><text x="495" y="200" font-size="12" text-anchor="middle" fill="#b36b00">Animals</text><text x="495" y="216" font-size="10" text-anchor="middle" fill="#f08c00">respiration</text><rect x="215" y="290" width="190" height="50" rx="10" fill="#e6d3b3" stroke="#8a6d3b"/><text x="310" y="312" font-size="12" text-anchor="middle" fill="#6b5430">Carbon in mud &amp; wood</text><text x="310" y="328" font-size="10" text-anchor="middle" fill="#8a6d3b">stored / combustion</text><path d="M250,88 L150,178" stroke="#2f9e44" stroke-width="2" marker-end="url(#ahc7b)"/><text x="180" y="135" font-size="10" fill="#2f9e44">photosynthesis</text><path d="M210,205 L420,205" stroke="#5b6b78" stroke-width="2" marker-end="url(#ahc7b)"/><text x="300" y="198" font-size="10" fill="#5b6b78">feeding</text><path d="M495,180 L360,90" stroke="#f08c00" stroke-width="2" marker-end="url(#ahc7b)"/><text x="430" y="135" font-size="10" fill="#f08c00">respiration</text><path d="M310,290 L310,90" stroke="#8a6d3b" stroke-width="2" marker-end="url(#ahc7b)" stroke-dasharray="6 4"/><text x="318" y="200" font-size="10" fill="#8a6d3b">combustion / clearing</text><path d="M135,230 L290,290" stroke="#2f9e44" stroke-width="2" marker-end="url(#ahc7b)"/><path d="M495,230 L350,295" stroke="#f08c00" stroke-width="2" marker-end="url(#ahc7b)"/></svg>',
          },
          caption: 'The carbon cycle in a mangrove forest, showing photosynthesis, respiration, feeding and the large store of carbon held in waterlogged mud and wood.',
        },
      },
      {
        label: 'd',
        text: 'Clearing of mangroves has been linked to global warming and climate change. **Suggest** one other **environmental** consequence of clearing mangroves.',
        marks: 1,
        ph: 'Another environmental consequence is...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q8 — Mangrove Restoration (16 marks, Criterion D)
  // ─────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Sustainability & Mangrove Restoration',
    topicCanonical: 'Mitigation of Adverse Effects',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 16,
    stem: 'Cleared mangrove coastlines can be restored for different purposes using a range of methods. The three main methods of mangrove restoration are:\n\n**Natural recovery** — tidal channels are reopened so seawater can flow in again, then the site is left to recover from seeds and roots already present; the healthiest surviving trees are protected as seed sources; invasive plants are removed; the site is managed to optimise growth. Takes ~11 years.\n\n**Direct seeding** — the landowner restores the tidal flow, then plants a known quantity of mangrove propagules (seedlings) directly into the mud; propagules are stored cool before use and treated to increase survival; planted at the start of the wet season; invasive plants removed. Takes ~8 years.\n\n**Planting nursery seedlings** — young mangroves are grown in a coastal nursery, transported in shaded, moist conditions and planted by hand at the site; tidal flow is restored and the mud prepared first; invasive plants removed; 2 people can plant 1,000–2,000 seedlings per day by hand; seedlings need more care including protection from waves. Takes ~5 years.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="msky8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8f4fb"/><stop offset="1" stop-color="#cfe9f6"/></linearGradient></defs><rect width="620" height="260" fill="#ffffff"/><text x="310" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Three methods of mangrove restoration</text><g><rect x="30" y="50" width="170" height="170" rx="10" fill="url(#msky8)" stroke="#9bd0ea"/><rect x="30" y="178" width="170" height="42" fill="#b6936a"/><g stroke="#5e3a16" stroke-width="2"><path d="M70,178 l0,-30 M90,178 l0,-36 M110,178 l0,-30"/></g><g fill="#2f9e44"><circle cx="70" cy="146" r="10"/><circle cx="90" cy="140" r="11"/><circle cx="110" cy="146" r="10"/></g><g stroke="#7a5230" stroke-width="1.5"><path d="M64,178 l-6,18 M76,178 l6,18 M84,178 l-6,18 M96,178 l6,18 M104,178 l-6,18 M116,178 l6,18"/></g><text x="115" y="244" font-size="12" text-anchor="middle" fill="#1f2d3a">Natural recovery</text><text x="115" y="64" font-size="10" text-anchor="middle" fill="#5b6b78">~11 years</text></g><g><rect x="225" y="50" width="170" height="170" rx="10" fill="url(#msky8)" stroke="#9bd0ea"/><rect x="225" y="178" width="170" height="42" fill="#b6936a"/><g stroke="#1e7a33" stroke-width="3"><path d="M255,178 l2,-24 M285,178 l-2,-28 M315,178 l2,-22 M345,178 l-2,-26 M370,178 l2,-24"/></g><g fill="#37b24d"><circle cx="257" cy="152" r="4"/><circle cx="283" cy="148" r="4"/><circle cx="317" cy="154" r="4"/><circle cx="343" cy="150" r="4"/><circle cx="372" cy="152" r="4"/></g><text x="310" y="244" font-size="12" text-anchor="middle" fill="#1f2d3a">Direct seeding</text><text x="310" y="64" font-size="10" text-anchor="middle" fill="#5b6b78">~8 years</text></g><g><rect x="420" y="50" width="170" height="170" rx="10" fill="url(#msky8)" stroke="#9bd0ea"/><rect x="420" y="178" width="170" height="42" fill="#b6936a"/><g stroke="#1e7a33" stroke-width="2.5"><path d="M455,178 l0,-28 M485,178 l0,-32 M515,178 l0,-26 M545,178 l0,-30"/></g><g fill="#37b24d"><circle cx="455" cy="146" r="8"/><circle cx="485" cy="142" r="9"/><circle cx="515" cy="148" r="8"/><circle cx="545" cy="144" r="9"/></g><text x="505" y="244" font-size="12" text-anchor="middle" fill="#1f2d3a">Planting seedlings</text><text x="505" y="64" font-size="10" text-anchor="middle" fill="#5b6b78">~5 years</text></g></svg>',
      },
      caption: 'Natural recovery (left), direct seeding of propagules (centre) and planting nursery-grown seedlings (right) as methods of mangrove restoration.',
    },
    tasks: [
      {
        label: '',
        text: 'Using information from this task and your wider MYP studies, **discuss** and **evaluate** the different methods for mangrove restoration. In your answer, you must include:\n\n- two reasons to restore mangroves\n- a scientific explanation of why planning for restoration is important\n- a discussion of different environmental consequences for two methods\n- a discussion of different economic considerations for two methods\n- a concluding appraisal justifying your opinion of which is the best method of restoration',
        marks: 16,
        ph: 'Mangroves should be restored for two main reasons: (1) to store carbon and protect coasts from storms and (2) to restore/promote biodiversity and nursery habitats for fish.\n\nPlanning is important because...\n\nEnvironmental consequences:\n- Natural recovery: ...\n- Direct seeding: ...\n\nEconomic considerations:\n- Planting seedlings: ...\n- Direct seeding: ...\n\nConclusion: In my opinion, the best method is... because...',
      },
    ],
  },
]
