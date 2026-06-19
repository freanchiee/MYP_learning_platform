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
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    marks: 10,
    stem: 'The diagram shows the organelles present in an animal cell.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="360" fill="#ffffff"/><text x="280" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Animal cell</text><ellipse cx="240" cy="195" rx="190" ry="135" fill="#fbe9ef" stroke="#c2255c" stroke-width="3"/><text x="240" y="320" font-size="11" text-anchor="middle" fill="#a61e4d">cytoplasm (jelly filling the cell)</text><ellipse cx="225" cy="180" rx="58" ry="50" fill="#d0bfff" stroke="#7048e8" stroke-width="2.5"/><circle cx="225" cy="180" r="16" fill="#9775fa"/><text x="225" y="184" font-size="9" text-anchor="middle" fill="#3b2a7a">DNA</text><circle cx="120" cy="135" r="6" fill="#1971c2"/><circle cx="150" cy="120" r="6" fill="#1971c2"/><circle cx="330" cy="140" r="6" fill="#1971c2"/><circle cx="300" cy="245" r="6" fill="#1971c2"/><circle cx="160" cy="255" r="6" fill="#1971c2"/><g><ellipse cx="335" cy="215" rx="42" ry="22" fill="#ffd8a8" stroke="#e8590c" stroke-width="2"/><path d="M308,215 q9,-12 18,0 q9,12 18,0 q9,-12 18,0" fill="none" stroke="#e8590c" stroke-width="2"/></g><text x="45" y="60" font-size="11" font-weight="600" fill="#7048e8">Nucleus</text><line x1="95" y1="64" x2="200" y2="150" stroke="#7048e8" stroke-width="1.2"/><text x="430" y="60" font-size="11" font-weight="600" fill="#c2255c">Cell membrane</text><line x1="455" y1="64" x2="420" y2="120" stroke="#c2255c" stroke-width="1.2"/><text x="40" y="300" font-size="11" font-weight="600" fill="#1971c2">Ribosome</text><line x1="90" y1="296" x2="160" y2="255" stroke="#1971c2" stroke-width="1.2"/><text x="430" y="300" font-size="11" font-weight="600" fill="#e8590c">Mitochondrion</text><line x1="455" y1="296" x2="360" y2="232" stroke="#e8590c" stroke-width="1.2"/></svg>',
      },
      caption: 'Labelled animal cell: nucleus (stores DNA), cell membrane, ribosomes (blue dots), mitochondria and cytoplasm.',
    },
    figCaption: 'Animal cell organelles.',
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
    topicCanonical: 'Receptors & Hormones',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Reproduction'],
    marks: 11,
    stem: 'During puberty, hormones cause physical changes in the human body. The graph below shows the levels of hormones during the menstrual cycle.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="340" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hormone levels during the menstrual cycle</text><line x1="60" y1="260" x2="520" y2="260" stroke="#111" stroke-width="1.5"/><line x1="60" y1="50" x2="60" y2="260" stroke="#111" stroke-width="1.5"/><g font-size="10" fill="#374151" text-anchor="middle"><text x="60" y="278">0</text><text x="125" y="278">4</text><text x="190" y="278">8</text><text x="255" y="278">12</text><text x="288" y="278">14</text><text x="320" y="278">16</text><text x="385" y="278">20</text><text x="450" y="278">24</text><text x="515" y="278">28</text></g><text x="290" y="298" font-size="11" font-weight="500" fill="#374151" text-anchor="middle">Day of cycle</text><text x="20" y="160" font-size="11" font-weight="500" fill="#374151" text-anchor="middle" transform="rotate(-90 20 160)">Relative hormone level</text><line x1="288" y1="50" x2="288" y2="260" stroke="#94a3ad" stroke-width="1" stroke-dasharray="4 4"/><text x="288" y="46" font-size="9" fill="#868e96" text-anchor="middle">ovulation</text><path d="M60,235 C140,235 220,150 255,120 C275,105 300,135 320,160 C360,200 460,235 520,238" fill="none" stroke="#1971c2" stroke-width="2.4"/><path d="M60,250 C150,248 250,245 288,210 C320,160 360,95 400,90 C440,95 480,170 520,235" fill="none" stroke="#2f9e44" stroke-width="2.4"/><path d="M60,250 C200,248 250,246 278,205 C285,120 292,120 298,205 C320,246 400,250 520,250" fill="none" stroke="#e8590c" stroke-width="2.4"/><path d="M60,242 C150,240 230,232 288,228 C360,232 440,240 520,242" fill="none" stroke="#9c36b5" stroke-width="2"/><g font-size="11" font-weight="700"><rect x="385" y="58" width="130" height="74" rx="6" fill="#f8fafc" stroke="#e2e8f0"/><line x1="394" y1="72" x2="414" y2="72" stroke="#1971c2" stroke-width="2.4"/><text x="420" y="76" fill="#1971c2">Estrogen</text><line x1="394" y1="90" x2="414" y2="90" stroke="#2f9e44" stroke-width="2.4"/><text x="420" y="94" fill="#2f9e44">Progesterone</text><line x1="394" y1="108" x2="414" y2="108" stroke="#e8590c" stroke-width="2.4"/><text x="420" y="112" fill="#e8590c">LH</text><line x1="394" y1="126" x2="414" y2="126" stroke="#9c36b5" stroke-width="2"/><text x="420" y="130" fill="#9c36b5">FSH</text></g></svg>',
      },
      caption: 'Relative levels of estrogen, progesterone, LH and FSH across the 28-day cycle. Estrogen rises before ovulation; LH spikes at ~day 14; progesterone peaks in the second half.',
    },
    figCaption: 'Hormone levels during the menstrual cycle.',
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
    topicCanonical: 'Classification',
    topicGroup: 'Organisms',
    topicsAlso: ['Unity & Diversity of Life'],
    marks: 7,
    stem: 'Scientists classify organisms into groups based on their characteristics. The diagram below shows the homologous limb bones of several vertebrates.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Homologous front-limb bones of vertebrates</text><g font-size="9.5" text-anchor="middle"><text x="120" y="44" font-weight="700" fill="#1f2d3a">Human (arm)</text><text x="280" y="44" font-weight="700" fill="#1f2d3a">Whale (flipper)</text><text x="430" y="44" font-weight="700" fill="#1f2d3a">Bird (wing)</text><text x="545" y="44" font-weight="700" fill="#1f2d3a">Bat (wing)</text></g><g transform="translate(120,60)"><rect x="-9" y="0" width="18" height="60" rx="6" fill="#ffd8a8" stroke="#e8590c"/><rect x="-13" y="64" width="9" height="55" rx="4" fill="#d0bfff" stroke="#7048e8"/><rect x="4" y="64" width="9" height="55" rx="4" fill="#a5d8ff" stroke="#1971c2"/><g fill="#b2f2bb" stroke="#2f9e44"><rect x="-12" y="122" width="6" height="14" rx="2"/><rect x="-4" y="122" width="6" height="14" rx="2"/><rect x="4" y="122" width="6" height="14" rx="2"/></g><g fill="#ffec99" stroke="#f08c00"><rect x="-14" y="138" width="4" height="34"/><rect x="-7" y="138" width="4" height="40"/><rect x="0" y="138" width="4" height="42"/><rect x="7" y="138" width="4" height="36"/><rect x="13" y="138" width="4" height="26"/></g></g><g transform="translate(280,60)"><rect x="-11" y="0" width="22" height="42" rx="7" fill="#ffd8a8" stroke="#e8590c"/><rect x="-15" y="46" width="11" height="34" rx="4" fill="#d0bfff" stroke="#7048e8"/><rect x="5" y="46" width="11" height="34" rx="4" fill="#a5d8ff" stroke="#1971c2"/><g fill="#b2f2bb" stroke="#2f9e44"><rect x="-14" y="82" width="7" height="16" rx="2"/><rect x="-4" y="82" width="7" height="16" rx="2"/><rect x="6" y="82" width="7" height="16" rx="2"/></g><g fill="#ffec99" stroke="#f08c00"><rect x="-16" y="100" width="5" height="70"/><rect x="-8" y="100" width="5" height="78"/><rect x="0" y="100" width="5" height="76"/><rect x="8" y="100" width="5" height="66"/></g></g><g transform="translate(430,60)"><rect x="-8" y="0" width="16" height="70" rx="6" fill="#ffd8a8" stroke="#e8590c"/><rect x="-12" y="74" width="8" height="60" rx="4" fill="#d0bfff" stroke="#7048e8"/><rect x="3" y="74" width="8" height="60" rx="4" fill="#a5d8ff" stroke="#1971c2"/><g fill="#b2f2bb" stroke="#2f9e44"><rect x="-9" y="136" width="6" height="14" rx="2"/><rect x="0" y="136" width="6" height="14" rx="2"/></g><g fill="#ffec99" stroke="#f08c00"><rect x="-8" y="152" width="5" height="86"/><rect x="2" y="152" width="5" height="60"/></g></g><g transform="translate(545,60)"><rect x="-7" y="0" width="14" height="48" rx="5" fill="#ffd8a8" stroke="#e8590c"/><rect x="-10" y="52" width="7" height="40" rx="3" fill="#d0bfff" stroke="#7048e8"/><rect x="3" y="52" width="7" height="40" rx="3" fill="#a5d8ff" stroke="#1971c2"/><g fill="#b2f2bb" stroke="#2f9e44"><rect x="-9" y="94" width="5" height="12" rx="2"/><rect x="-1" y="94" width="5" height="12" rx="2"/><rect x="5" y="94" width="5" height="12" rx="2"/></g><g fill="#ffec99" stroke="#f08c00"><rect x="-12" y="108" width="3" height="96"/><rect x="-5" y="108" width="3" height="104"/><rect x="2" y="108" width="3" height="100"/><rect x="9" y="108" width="3" height="90"/></g></g><g font-size="10"><rect x="60" y="292" width="12" height="10" fill="#ffd8a8" stroke="#e8590c"/><text x="76" y="301" fill="#495057">humerus</text><rect x="150" y="292" width="12" height="10" fill="#d0bfff" stroke="#7048e8"/><text x="166" y="301" fill="#495057">radius</text><rect x="225" y="292" width="12" height="10" fill="#a5d8ff" stroke="#1971c2"/><text x="241" y="301" fill="#495057">ulna</text><rect x="295" y="292" width="12" height="10" fill="#b2f2bb" stroke="#2f9e44"/><text x="311" y="301" fill="#495057">carpals</text><rect x="375" y="292" width="12" height="10" fill="#ffec99" stroke="#f08c00"/><text x="391" y="301" fill="#495057">digits (fingers)</text></g></svg>',
      },
      caption: 'The same bones (humerus, radius, ulna, carpals, digits) appear in the human arm, whale flipper, bird wing and bat wing — the limbs are homologous despite different functions.',
    },
    figCaption: 'Homologous front-limb bones of several vertebrates.',
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
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    marks: 13,
    stem: 'Students investigated the relationship between soil pH and hydrangea flower colour. They measured the soil pH at locations where white, blue, purple and pink hydrangeas were growing. Their recorded soil-pH data are shown in the table.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Flower colour', 'Soil pH — Trial 1', 'Trial 2', 'Trial 3', 'Average'],
        rows: [
          ['Blue', '5.21', '5.54', '5.32', '—'],
          ['Purple', '6.21', '6.32', '6.35', '6.29'],
          ['Pink', '7.51', '7.92', '8.17', '7.87'],
          ['White', '5.46', '6.55', '7.67', '6.56'],
        ],
      },
      caption: 'Soil pH measured at locations where each colour of hydrangea was growing. The Blue average is left blank for the student to calculate.',
    },
    figCaption: 'Soil pH data by hydrangea flower colour.',
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
        ph: 'Mean = (5.2 + 5.1 + 5.4 + 5.7 + 5.3 + 5.5) ÷ 6 = 32.2 ÷ 6 = ...',
      },
      {
        label: 'c',
        text: 'Using your answer to part (b) and the data provided, **draw** a bar chart to show the average soil pH for each hydrangea colour. Label both axes fully and include correct units.',
        marks: 5,
        ph: 'Describe or sketch your bar chart:\n\nY-axis label: Average soil pH\nX-axis label: Hydrangea flower colour\nScale: ...\nBars drawn for: Blue (your answer to (b), ≈5.37), Purple (6.29), Pink (7.87), White (6.56)...',
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
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Soil pH recorded for each hydrangea colour</text><line x1="60" y1="230" x2="530" y2="230" stroke="#111" stroke-width="1.5"/><g font-size="10" fill="#374151" text-anchor="middle"><text x="60" y="248">5.0</text><text x="138" y="248">5.5</text><text x="216" y="248">6.0</text><text x="294" y="248">6.5</text><text x="372" y="248">7.0</text><text x="450" y="248">7.5</text><text x="528" y="248">8.0</text></g><text x="295" y="268" font-size="11" font-weight="500" fill="#374151" text-anchor="middle">Soil pH</text><g font-size="11" font-weight="600"><text x="14" y="65" fill="#1971c2">Blue</text><text x="8" y="115" fill="#7048e8">Purple</text><text x="16" y="165" fill="#c2255c">Pink</text><text x="12" y="210" fill="#868e96">White</text></g><g fill="#1971c2"><circle cx="93" cy="60" r="6"/><circle cx="110" cy="60" r="6"/><circle cx="143" cy="60" r="6"/></g><g fill="#7048e8"><circle cx="216" cy="110" r="6"/><circle cx="232" cy="110" r="6"/><circle cx="237" cy="110" r="6"/></g><g fill="#c2255c"><circle cx="450" cy="160" r="6"/><circle cx="514" cy="160" r="6"/><circle cx="489" cy="160" r="6"/></g><g fill="#868e96"><circle cx="132" cy="205" r="6"/><circle cx="294" cy="205" r="6"/><circle cx="468" cy="205" r="6"/></g><line x1="132" y1="195" x2="132" y2="215" stroke="#495057" stroke-width="1" stroke-dasharray="2 2"/><line x1="468" y1="195" x2="468" y2="215" stroke="#495057" stroke-width="1" stroke-dasharray="2 2"/><text x="300" y="186" font-size="9" fill="#868e96" text-anchor="middle">white values spread across the whole pH range</text></svg>',
          },
          caption: 'Each colour clusters in a narrow pH band, but white hydrangeas span the whole range (pH 5.5 to 7.7).',
        },
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
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    topicsAlso: ['Photosynthesis'],
    marks: 16,
    stem: 'Students investigated how soil pH affects the growth of *Zoysia* grass. They planted *Zoysia* grass seeds in five pots containing soils of pH 5, 6, 7, 8, and 9. Each pot was watered with the same volume of water daily for two weeks. The chemicals used to manipulate the soil pH were unknown to the students. The students followed the method shown below.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="380" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Method: investigating soil pH and Zoysia grass growth</text><g><rect x="14" y="40" width="280" height="150" rx="8" fill="#f8fafc" stroke="#ced4da"/><circle cx="34" cy="60" r="11" fill="#0ca678"/><text x="34" y="64" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">1</text><text x="52" y="64" font-size="11" font-weight="600" fill="#1f2d3a">Prepare five soils of pH 5, 6, 7, 8, 9</text><g transform="translate(40,80)"><ellipse cx="50" cy="95" rx="46" ry="9" fill="#e9ecef"/><rect x="20" y="40" width="20" height="55" rx="4" fill="#dee2e6" stroke="#adb5bd"/><text x="30" y="72" font-size="7" fill="#495057" text-anchor="middle" transform="rotate(-90 30 72)">distilled</text><path d="M60,55 l30,-14 l8,12 l-30,18 Z" fill="#c0876a" stroke="#8a5a3c"/><circle cx="78" cy="64" r="1.5" fill="#6b4226"/><circle cx="84" cy="70" r="1.5" fill="#6b4226"/><circle cx="90" cy="76" r="1.5" fill="#6b4226"/><rect x="74" y="78" width="38" height="22" rx="3" fill="#bcd9e6" stroke="#7fb1c4"/><rect x="74" y="92" width="38" height="8" fill="#a07050"/></g></g><g><rect x="306" y="40" width="280" height="150" rx="8" fill="#f8fafc" stroke="#ced4da"/><circle cx="326" cy="60" r="11" fill="#0ca678"/><text x="326" y="64" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">2</text><text x="344" y="64" font-size="11" font-weight="600" fill="#1f2d3a">Plant five grass seeds in each pot</text><g transform="translate(326,86)"><g transform="translate(0,0)"><path d="M2,18 L42,18 L37,72 L7,72 Z" fill="#d9714e" stroke="#a8531a"/><ellipse cx="22" cy="20" rx="20" ry="5" fill="#7a4a2b"/><line x1="22" y1="6" x2="22" y2="20" stroke="#2f9e44" stroke-width="1.5"/><line x1="16" y1="9" x2="16" y2="20" stroke="#2f9e44" stroke-width="1.2"/><line x1="28" y1="8" x2="28" y2="20" stroke="#2f9e44" stroke-width="1.2"/><rect x="6" y="44" width="32" height="13" rx="2" fill="#fff" stroke="#adb5bd"/><text x="22" y="53" font-size="8" text-anchor="middle" fill="#1f2d3a">pH 5</text></g><g transform="translate(52,0)"><path d="M2,18 L42,18 L37,72 L7,72 Z" fill="#d9714e" stroke="#a8531a"/><ellipse cx="22" cy="20" rx="20" ry="5" fill="#7a4a2b"/><line x1="22" y1="6" x2="22" y2="20" stroke="#2f9e44" stroke-width="1.5"/><line x1="16" y1="9" x2="16" y2="20" stroke="#2f9e44" stroke-width="1.2"/><line x1="28" y1="8" x2="28" y2="20" stroke="#2f9e44" stroke-width="1.2"/><rect x="6" y="44" width="32" height="13" rx="2" fill="#fff" stroke="#adb5bd"/><text x="22" y="53" font-size="8" text-anchor="middle" fill="#1f2d3a">pH 6</text></g><g transform="translate(104,0)"><path d="M2,18 L42,18 L37,72 L7,72 Z" fill="#d9714e" stroke="#a8531a"/><ellipse cx="22" cy="20" rx="20" ry="5" fill="#7a4a2b"/><line x1="22" y1="6" x2="22" y2="20" stroke="#2f9e44" stroke-width="1.5"/><line x1="16" y1="9" x2="16" y2="20" stroke="#2f9e44" stroke-width="1.2"/><line x1="28" y1="8" x2="28" y2="20" stroke="#2f9e44" stroke-width="1.2"/><rect x="6" y="44" width="32" height="13" rx="2" fill="#fff" stroke="#adb5bd"/><text x="22" y="53" font-size="8" text-anchor="middle" fill="#1f2d3a">pH 7</text></g><g transform="translate(156,0)"><path d="M2,18 L42,18 L37,72 L7,72 Z" fill="#d9714e" stroke="#a8531a"/><ellipse cx="22" cy="20" rx="20" ry="5" fill="#7a4a2b"/><line x1="22" y1="6" x2="22" y2="20" stroke="#2f9e44" stroke-width="1.5"/><line x1="16" y1="9" x2="16" y2="20" stroke="#2f9e44" stroke-width="1.2"/><line x1="28" y1="8" x2="28" y2="20" stroke="#2f9e44" stroke-width="1.2"/><rect x="6" y="44" width="32" height="13" rx="2" fill="#fff" stroke="#adb5bd"/><text x="22" y="53" font-size="8" text-anchor="middle" fill="#1f2d3a">pH 8</text></g><g transform="translate(208,0)"><path d="M2,18 L42,18 L37,72 L7,72 Z" fill="#d9714e" stroke="#a8531a"/><ellipse cx="22" cy="20" rx="20" ry="5" fill="#7a4a2b"/><line x1="22" y1="6" x2="22" y2="20" stroke="#2f9e44" stroke-width="1.5"/><line x1="16" y1="9" x2="16" y2="20" stroke="#2f9e44" stroke-width="1.2"/><line x1="28" y1="8" x2="28" y2="20" stroke="#2f9e44" stroke-width="1.2"/><rect x="6" y="44" width="32" height="13" rx="2" fill="#fff" stroke="#adb5bd"/><text x="22" y="53" font-size="8" text-anchor="middle" fill="#1f2d3a">pH 9</text></g></g></g><g><rect x="14" y="200" width="280" height="160" rx="8" fill="#f8fafc" stroke="#ced4da"/><circle cx="34" cy="220" r="11" fill="#0ca678"/><text x="34" y="224" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">3</text><text x="52" y="224" font-size="11" font-weight="600" fill="#1f2d3a">Water with same volume daily, 2 weeks</text><g transform="translate(90,244)"><rect x="0" y="0" width="60" height="48" rx="4" fill="#fff" stroke="#adb5bd"/><rect x="0" y="0" width="60" height="12" fill="#e03131"/><text x="30" y="9" font-size="6" fill="#fff" text-anchor="middle">2 WEEKS</text><g font-size="6" fill="#495057"><text x="7" y="24">•</text><text x="19" y="24">•</text><text x="31" y="24">•</text><text x="43" y="24">•</text><text x="55" y="24">•</text><text x="7" y="32">•</text><text x="19" y="32">•</text><text x="31" y="32">•</text><text x="43" y="32">•</text><text x="55" y="32">•</text><text x="7" y="40">•</text><text x="19" y="40">•</text><text x="31" y="40">•</text><text x="43" y="40">•</text><text x="55" y="40">•</text><text x="7" y="48">•</text><text x="19" y="48">•</text><text x="31" y="48">•</text><text x="43" y="48">•</text><text x="55" y="48">•</text></g></g><g transform="translate(180,250)"><path d="M0,0 q20,4 24,30" fill="none" stroke="#74c0fc" stroke-width="1.5"/><line x1="22" y1="22" x2="20" y2="34" stroke="#4dabf7" stroke-width="1.5"/><line x1="26" y1="22" x2="24" y2="34" stroke="#4dabf7" stroke-width="1.5"/><line x1="30" y1="22" x2="28" y2="34" stroke="#4dabf7" stroke-width="1.5"/></g></g><g><rect x="306" y="200" width="280" height="160" rx="8" fill="#f8fafc" stroke="#ced4da"/><circle cx="326" cy="220" r="11" fill="#0ca678"/><text x="326" y="224" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">4</text><text x="344" y="224" font-size="11" font-weight="600" fill="#1f2d3a">Count blades &amp; measure blade length</text><g transform="translate(340,244)"><g transform="translate(0,0)"><path d="M4,72 L34,72 L31,96 L7,96 Z" fill="#d9714e" stroke="#a8531a"/><line x1="13" y1="72" x2="13" y2="62" stroke="#2f9e44" stroke-width="2"/><line x1="19" y1="72" x2="19" y2="64" stroke="#37b24d" stroke-width="2"/><line x1="25" y1="72" x2="25" y2="62" stroke="#2f9e44" stroke-width="2"/><rect x="6" y="78" width="28" height="11" rx="2" fill="#fff" stroke="#adb5bd"/><text x="20" y="86" font-size="7" text-anchor="middle" fill="#1f2d3a">pH 5</text></g><g transform="translate(46,0)"><path d="M4,72 L34,72 L31,96 L7,96 Z" fill="#d9714e" stroke="#a8531a"/><line x1="13" y1="72" x2="13" y2="42" stroke="#2f9e44" stroke-width="2"/><line x1="19" y1="72" x2="19" y2="44" stroke="#37b24d" stroke-width="2"/><line x1="25" y1="72" x2="25" y2="42" stroke="#2f9e44" stroke-width="2"/><rect x="6" y="78" width="28" height="11" rx="2" fill="#fff" stroke="#adb5bd"/><text x="20" y="86" font-size="7" text-anchor="middle" fill="#1f2d3a">pH 6</text></g><g transform="translate(92,0)"><path d="M4,72 L34,72 L31,96 L7,96 Z" fill="#d9714e" stroke="#a8531a"/><line x1="13" y1="72" x2="13" y2="30" stroke="#2f9e44" stroke-width="2"/><line x1="19" y1="72" x2="19" y2="32" stroke="#37b24d" stroke-width="2"/><line x1="25" y1="72" x2="25" y2="30" stroke="#2f9e44" stroke-width="2"/><rect x="6" y="78" width="28" height="11" rx="2" fill="#fff" stroke="#adb5bd"/><text x="20" y="86" font-size="7" text-anchor="middle" fill="#1f2d3a">pH 7</text></g><g transform="translate(138,0)"><path d="M4,72 L34,72 L31,96 L7,96 Z" fill="#d9714e" stroke="#a8531a"/><line x1="13" y1="72" x2="13" y2="52" stroke="#2f9e44" stroke-width="2"/><line x1="19" y1="72" x2="19" y2="54" stroke="#37b24d" stroke-width="2"/><line x1="25" y1="72" x2="25" y2="52" stroke="#2f9e44" stroke-width="2"/><rect x="6" y="78" width="28" height="11" rx="2" fill="#fff" stroke="#adb5bd"/><text x="20" y="86" font-size="7" text-anchor="middle" fill="#1f2d3a">pH 8</text></g><g transform="translate(184,0)"><path d="M4,72 L34,72 L31,96 L7,96 Z" fill="#d9714e" stroke="#a8531a"/><rect x="6" y="78" width="28" height="11" rx="2" fill="#fff" stroke="#adb5bd"/><text x="20" y="86" font-size="7" text-anchor="middle" fill="#1f2d3a">pH 9</text></g></g></g></svg>',
      },
      caption: 'Four-step method: prepare soils of pH 5–9, plant five Zoysia seeds per pot, water equally for two weeks, then count the blades and measure their lengths.',
    },
    figCaption: 'Method for the Zoysia grass soil-pH investigation.',
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
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    marks: 17,
    stem: 'Students noticed that mushrooms were growing in a wide variety of locations around their school. They decided to investigate a factor affecting the growth of mushrooms. They formulated the following research question:\n\n**"How does temperature affect the growth of mushrooms?"**\n\nAfter carrying out some initial research, the students decided to use biomass as a measure of growth. Biomass is the total mass of living organisms not including the water they contain.\n\nThe students have access to any equipment they need, including soil, mushroom spores, an incubator and a drying oven.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Stages of mushroom growth (biomass increases)</text><rect x="0" y="170" width="600" height="110" fill="#8a5a3c"/><line x1="0" y1="170" x2="600" y2="170" stroke="#6b4226" stroke-width="2"/><g fill="#d6c39a"><circle cx="78" cy="200" r="2"/><circle cx="86" cy="206" r="2"/><circle cx="72" cy="210" r="2"/><circle cx="92" cy="198" r="2"/><circle cx="82" cy="215" r="2"/></g><text x="80" y="150" font-size="10" fill="#1f2d3a" text-anchor="middle">Spores in soil</text><line x1="80" y1="156" x2="80" y2="190" stroke="#1f2d3a" stroke-width="0.8"/><g transform="translate(210,196)" stroke="#e6d2a8" stroke-width="1.4" fill="none"><path d="M0,10 q6,-12 -4,-18"/><path d="M0,10 q-6,-6 6,-16"/><path d="M0,10 q10,2 14,-8"/></g><text x="210" y="150" font-size="10" fill="#1f2d3a" text-anchor="middle">Germinating spores</text><line x1="210" y1="156" x2="210" y2="188" stroke="#1f2d3a" stroke-width="0.8"/><g transform="translate(360,170)"><ellipse cx="0" cy="-6" rx="14" ry="9" fill="#cdb89a" stroke="#8a6f4a"/><g stroke="#e6d2a8" stroke-width="1.2" fill="none"><path d="M0,2 q-10,14 -22,20"/><path d="M0,2 q-4,16 -6,26"/><path d="M0,2 q10,14 22,20"/><path d="M0,2 q5,16 8,26"/></g></g><text x="360" y="120" font-size="10" fill="#1f2d3a" text-anchor="middle">Developing mushroom</text><line x1="360" y1="126" x2="360" y2="155" stroke="#1f2d3a" stroke-width="0.8"/><g transform="translate(500,170)"><path d="M-32,-44 q32,-26 64,0 q-32,16 -64,0 Z" fill="#8d7355" stroke="#5c462d"/><path d="M-32,-44 q32,12 64,0" fill="none" stroke="#5c462d" stroke-width="0.8"/><rect x="-7" y="-44" width="14" height="44" rx="4" fill="#d3c4ab" stroke="#8a6f4a"/><g stroke="#e6d2a8" stroke-width="1.4" fill="none"><path d="M0,0 q-22,22 -44,30"/><path d="M0,0 q-6,24 -10,40"/><path d="M0,0 q22,22 44,30"/><path d="M0,0 q8,24 12,40"/></g></g><text x="500" y="92" font-size="10" fill="#1f2d3a" text-anchor="middle">Mature mushroom</text><line x1="500" y1="98" x2="500" y2="118" stroke="#1f2d3a" stroke-width="0.8"/><line x1="40" y1="290" x2="560" y2="290" stroke="#2f9e44" stroke-width="2" marker-end="url(#gw)"/><defs><marker id="gw" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2f9e44"/></marker></defs><text x="300" y="287" font-size="9.5" fill="#2f9e44" text-anchor="middle">increasing biomass (dry mass of living tissue)</text></svg>',
      },
      caption: 'Mushroom growth: spores in soil germinate, develop into a small mushroom, then mature. Biomass (the dry mass of living tissue) increases at each stage.',
    },
    figCaption: 'Stages of mushroom growth.',
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
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 10,
    stem: 'Careful management of ecosystems is essential if global development is to become more sustainable. Forest ecosystems cover 31% of the land area on our planet. Forest ecosystem services contribute to human well-being in a variety of ways. They are grouped into four categories, shown below.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'The four categories of forest ecosystem service',
        center: { label: 'Forest ecosystem services', color: '#2b6a4d' },
        nodes: [
          { id: 'products', label: 'Products', color: '#e8590c', detail: 'Goods harvested from the forest, e.g. fruits and berries, raw materials (timber), and a source of potential medicines.' },
          { id: 'regulation', label: 'Regulation', color: '#1971c2', detail: 'Processes that control the environment, e.g. carbon fixation (CO₂ absorbed), microclimate regulation and erosion prevention.' },
          { id: 'cultural', label: 'Cultural', color: '#9c36b5', detail: 'Non-material benefits, e.g. recreational activities and well-being.' },
          { id: 'support', label: 'Support', color: '#2f9e44', detail: 'Underpins all other services, e.g. nutrient cycling, soil formation and providing habitats.' },
        ],
      },
      caption: 'Four categories of ecosystem service. Tap each node to see examples — Support underpins all the others.',
    },
    figCaption: 'The four categories of forest ecosystem service.',
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
        text: 'One consequence of a growing global population is an increased demand for food. Additional farmland is needed to meet this demand, often produced through deforestation — where trees are cut down and the remains burned. The diagram below shows the carbon cycle.\n\nUsing the diagram, **discuss** the consequences of deforestation on the **carbon cycle**.',
        marks: 6,
        ph: 'Deforestation leads to an increase in atmospheric carbon dioxide because...\nFewer trees means less carbon stored in living organisms...\nIncreased combustion from burning releases stored carbon...',
        artefact: {
          component: 'SankeySim',
          data: {
            title: 'Carbon flows in and out of the atmosphere (arbitrary units per year)',
            units: 'units',
            flows: [
              { label: 'CO₂ in the atmosphere', value: 100, kind: 'in' },
              { label: 'Photosynthesis by trees (CO₂ removed)', value: 50, kind: 'out' },
              { label: 'Respiration of living things (CO₂ released)', value: 22, kind: 'loss' },
              { label: 'Decay of dead matter (CO₂ released)', value: 13, kind: 'loss' },
              { label: 'Combustion of fossil fuels / burning forest (CO₂ released)', value: 15, kind: 'loss' },
            ],
            conservation: 'Photosynthesis (50) normally balances respiration + decay + combustion (22 + 13 + 15 = 50).',
          },
          caption: 'In a balanced cycle, the CO₂ trees remove by photosynthesis equals the CO₂ released by respiration, decay and combustion. Removing trees and burning them shifts this balance.',
        },
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
    topicCanonical: 'Mitigation of Adverse Effects',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 16,
    stem: 'Forests can be regenerated for different purposes using a range of methods. The three main methods of regeneration are:\n\n**Natural regeneration** — relies on older trees left on the land to provide seeds; healthiest trees selected as seed trees, then remaining trees cut down; soil prepared by adding nutrients; weeds removed; site managed to optimise growth. Takes ~9 years.\n\n**Direct seeding** — landowner applies a known quantity of seeds directly to the land; soil prepared, seeds stored below 2°C; seeds treated to increase germination rate; planted in spring or autumn; weeds removed; takes ~8 years.\n\n**Planting seedlings** — seedlings grown in tree nurseries, then transported in refrigerated vehicles and planted at the site; soil prepared; weeds removed; 2 people can plant 1,000–2,000 trees per day by hand or 8,000–10,000 with machinery; seedlings require more care including regular watering. Takes ~5 years.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Method', 'How it works', 'Time to regenerate', 'Labour / cost', 'Seed source'],
        rows: [
          ['Natural regeneration', 'Healthiest existing trees left as seed trees; remaining trees cut down; soil prepared, weeds removed', '~9 years', 'Lowest cost — relies on existing trees', 'Seeds from older trees left on the land'],
          ['Direct seeding', 'A known quantity of seeds applied directly to prepared land; seeds stored below 2 °C and treated to raise germination; sown in spring/autumn', '~8 years', 'Moderate — seeds must be stored, treated and sown', 'Bought / collected seed applied by landowner'],
          ['Planting seedlings', 'Seedlings grown in nurseries, moved in refrigerated vehicles, planted at the site; need regular watering and more care', '~5 years (fastest)', 'Highest — 2 people plant 1,000–2,000 trees/day by hand or 8,000–10,000 with machinery', 'Nursery-grown seedlings'],
        ],
      },
      caption: 'Comparison of the three forest-regeneration methods. Planting seedlings is fastest but most costly; natural regeneration is cheapest but slowest.',
    },
    figCaption: 'Three methods of forest regeneration compared.',
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
