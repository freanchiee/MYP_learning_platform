import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2023 · VARIANT 1  (isomorphic to biology-may-2023)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags) in a NEW biological context, with self-contained data-driven
// artefacts (no external image files). Numbers/answers recomputed throughout.
//   Q1 Joints/muscles/resp:  elbow → KNEE joint (quadriceps / hamstrings)
//   Q2 Food storage/osmosis: bananas+ethylene → strawberries+CO₂; salted meat → salt-cured cod
//   Q3 Enzymes & genetics:   lactase pigs/rats → SUCRASE in calves / goat kids
//   Q4 Crit B fibre+humidity: agave → HEMP fibre humidity investigation
//   Q5 Crit C cell diameter:  agave cells → HEMP fibre cells (new numbers)
//   Q6 Crit B NaOH treatment: agave → HEMP fibre NaOH treatment
//   Q7 Crit B design:         % plant fibre in rope → % HEMP fibre in YARN stretch
//   Q8 Urbanisation/pollinator: bees → HOVERFLIES; biodiversity & sustainable city
//   Q9 Crit D essay:          biosolar ROOF → green-WALL + solar (vertical biosolar)
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2023-v1',
  subject: 'Biology',
  session: 'May',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Knee joint, muscles & respiration (8 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Bones, Joints & Muscles',
    topicCanonical: 'Tissues, Organs & Systems',
    topicGroup: 'Cells',
    topicsAlso: ['Physiology'],
    marks: 8,
    stem: 'The skeleton consists of bones, joints and cartilage. A diagram of the knee joint is shown below.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bone1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f4ecd6"/><stop offset="1" stop-color="#e2d3aa"/></linearGradient></defs><rect width="520" height="340" fill="#ffffff"/><text x="260" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">The knee joint</text><rect x="232" y="40" width="44" height="120" rx="18" fill="url(#bone1)" stroke="#b39a5c"/><text x="300" y="70" font-size="12" fill="#5b6b78">femur (thigh bone)</text><rect x="226" y="200" width="40" height="120" rx="16" fill="url(#bone1)" stroke="#b39a5c"/><rect x="272" y="206" width="22" height="114" rx="10" fill="url(#bone1)" stroke="#b39a5c"/><text x="300" y="270" font-size="12" fill="#5b6b78">tibia / fibula (shin)</text><ellipse cx="252" cy="180" rx="40" ry="26" fill="#cfe9e0" stroke="#2f9e44" stroke-width="2"/><text x="252" y="184" font-size="11" text-anchor="middle" fill="#0b7285">cartilage</text><circle cx="210" cy="178" r="9" fill="#f08c00" stroke="#a8651a"/><text x="150" y="182" font-size="11" fill="#a8651a">kneecap</text><path d="M254,46 C300,90 304,140 282,196" fill="none" stroke="#c0392b" stroke-width="9" stroke-linecap="round"/><text x="330" y="150" font-size="12" font-weight="700" fill="#c0392b">X</text><path d="M210,52 C150,100 150,150 214,200" fill="none" stroke="#2b6cb0" stroke-width="9" stroke-linecap="round"/><text x="120" y="120" font-size="12" font-weight="700" fill="#2b6cb0">Y</text><line x1="312" y1="146" x2="284" y2="120" stroke="#c0392b" stroke-width="1"/><line x1="132" y1="116" x2="172" y2="120" stroke="#2b6cb0" stroke-width="1"/></svg>',
      },
      caption: 'The knee joint, showing the femur, tibia, cartilage, kneecap and two muscles X and Y.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of one other hinge joint in the human body.',
        marks: 1,
        ph: 'Think of another joint that bends in one plane.',
      },
      {
        label: 'b',
        text: '**Select** the name of muscle X from the diagram.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Quadriceps', 'Deltoid', 'Femur', 'Bicep'],
        ph: 'Muscle X straightens (extends) the lower leg.',
      },
      {
        label: 'c',
        text: '**Outline** how the two muscles, X and Y, in the diagram above work together to move the lower leg.',
        marks: 2,
        ph: 'One contracts, the other extends — antagonistic pair.',
      },
      {
        label: 'd',
        text: '**Outline** one similarity and one difference between aerobic and anaerobic cellular respiration in humans.',
        marks: 2,
        ph: 'Similarity: both use glucose/release energy. Difference: oxygen requirement.',
      },
      {
        label: 'e',
        text: '**Outline** the skeleton\'s functions in the boxes below. The first two boxes (Support and posture; Storage of minerals) have been completed. Complete the "How does this happen?" explanations for Protection and Blood cell production.',
        marks: 2,
        ph: 'Protection: hard bones absorb impact. Blood cell production: bone marrow/stem cells.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Modified-atmosphere packaging & food storage (8 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Active Packaging & Food Storage',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    marks: 8,
    stem: 'Scientists are looking for ways to keep food fresh for longer. Modified-atmosphere packaging changes the gases inside the packaging to extend the time food stays in good condition and is safe to eat. As fresh strawberries respire and begin to spoil, mould releases carbon dioxide gas that speeds up deterioration. The image below shows how the packaging can absorb and remove this gas.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="540" height="240" fill="#ffffff"/><rect x="40" y="50" width="280" height="150" rx="10" fill="#eef6fb" stroke="#0b7285" stroke-width="2"/><text x="180" y="40" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sealed strawberry pack</text><g fill="#d6336c" stroke="#9c2750"><path d="M90,150 q12,-22 24,0 q-12,18 -24,0 Z"/><path d="M130,160 q12,-22 24,0 q-12,18 -24,0 Z"/><path d="M170,150 q12,-22 24,0 q-12,18 -24,0 Z"/><path d="M210,162 q12,-22 24,0 q-12,18 -24,0 Z"/></g><g fill="#2f9e44"><path d="M96,128 l8,-12 l8,12 Z"/><path d="M136,138 l8,-12 l8,12 Z"/><path d="M176,128 l8,-12 l8,12 Z"/><path d="M216,140 l8,-12 l8,12 Z"/></g><rect x="250" y="70" width="56" height="34" rx="5" fill="#f08c00" stroke="#a8651a"/><text x="278" y="91" font-size="10" text-anchor="middle" fill="#fff">CO₂ absorber</text><g font-size="13" fill="#5b6b78"><text x="200" y="90">CO₂</text><text x="232" y="118">CO₂</text></g><path d="M214,92 q20,-2 34,-6" stroke="#5b6b78" stroke-width="1.5" fill="none" marker-end="url(#a2)"/><defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6b78"/></marker></defs><text x="430" y="120" font-size="12" text-anchor="middle" fill="#0b7285">CO₂ removed →</text><text x="430" y="140" font-size="12" text-anchor="middle" fill="#0b7285">spoilage slowed</text></svg>',
      },
      caption: 'A CO₂-absorbing sachet inside a sealed strawberry pack removes the gas released as the fruit spoils.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** two benefits of using modified-atmosphere packaging when transporting fruit.',
        marks: 2,
        ph: 'Think about spoilage rate, microbial growth, shelf life.',
      },
      {
        label: 'b',
        text: '**Describe** why many foods are stored between 3°C and 5°C.',
        marks: 3,
        ph: 'Low temperature slows microorganism activity; does not freeze; prevents deterioration.',
      },
      {
        label: 'c',
        text: '**Describe** why bacteria on salt-cured cod have changed their form and no longer have a smooth surface.',
        marks: 3,
        ph: 'Salt causes water to leave bacteria by osmosis — bacteria shrink/dehydrate.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Enzymes, sucrase & genetics (10 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Enzymes, Sucrase & Genetics',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    topicsAlso: ['Digestion', 'DNA & Genetics'],
    marks: 10,
    stem: 'Sucrose is a sugar found in many plants that young mammals eat as they are weaned onto solid food. Sucrose is broken down by an enzyme called sucrase. In some mammals the ability to keep producing sucrase into adulthood is controlled by a single gene.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="540" height="220" fill="#ffffff"/><text x="270" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sucrase breaks down sucrose</text><path d="M120,120 q40,-50 80,0 q-40,40 -80,0 Z" fill="#cfe9e0" stroke="#2f9e44" stroke-width="2"/><text x="160" y="155" font-size="11" text-anchor="middle" fill="#2f9e44">sucrase (enzyme)</text><circle cx="150" cy="108" r="13" fill="#f08c00" stroke="#a8651a"/><circle cx="176" cy="108" r="13" fill="#0b7285" stroke="#07505c"/><text x="135" y="95" font-size="9" fill="#a8651a">glucose</text><text x="172" y="90" font-size="9" fill="#0b7285">fructose</text><text x="120" y="80" font-size="11" font-weight="700" fill="#5b6b78">sucrose</text><line x1="210" y1="108" x2="280" y2="108" stroke="#5b6b78" stroke-width="2" marker-end="url(#a3)"/><defs><marker id="a3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5b6b78"/></marker></defs><circle cx="330" cy="100" r="15" fill="#f08c00" stroke="#a8651a"/><text x="330" y="132" font-size="10" text-anchor="middle" fill="#a8651a">glucose</text><circle cx="400" cy="100" r="15" fill="#0b7285" stroke="#07505c"/><text x="400" y="132" font-size="10" text-anchor="middle" fill="#0b7285">fructose</text></svg>',
      },
      caption: 'The enzyme sucrase splits each sucrose molecule into glucose and fructose.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** the importance of enzymes in the body.',
        marks: 2,
        ph: 'Enzymes speed up reactions; are biological catalysts; build up or break down molecules.',
      },
      {
        label: 'b',
        text: '**State** whether each genotype below can produce sucrase as an adult by completing the table. The dominant allele S must be inherited; the recessive allele has the symbol s.',
        marks: 1,
        widget: 'inline_dropdown_select',
        widgetItems: ['SS', 'Ss', 'ss'],
        widgetOptions: ['Yes', 'No'],
        ph: 'Dominant S = produces sucrase; two recessive s = does not.',
      },
      {
        label: 'c',
        text: '**State** the meaning of the term phenotype.',
        marks: 1,
        ph: 'Observable characteristics from gene expression.',
      },
      {
        label: 'd',
        text: 'Using scientific knowledge, **identify** and **justify** one similarity and one difference in sucrase production after weaning in calves and goat kids.',
        marks: 4,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Sucrase activity after weaning',
            xLabel: 'Age after weaning',
            yLabel: 'Sucrase activity',
            xUnit: 'weeks',
            yUnit: 'units',
            dataPoints: [
              { x: 0, y: 95 }, { x: 2, y: 88 }, { x: 4, y: 70 }, { x: 6, y: 52 }, { x: 8, y: 40 }, { x: 10, y: 34 },
            ],
            lobf: false,
            xMax: 10, yMax: 100, xStep: 2, yStep: 20,
          },
          caption: 'Calves (upper trend) maintain higher sucrase for longer; goat kids fall faster (lower trend).',
        },
        ph: 'Similarity: both decrease after weaning. Difference: calves higher/level off later; justification needed.',
      },
      {
        label: 'e',
        text: 'Using the data in the infographic, **state** the relationship between adult sucrase production and average sugar-rich plant intake.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Population', 'Adults producing sucrase / %', 'Mean sugar-rich plant intake / g day⁻¹'],
            rows: [
              ['Population P', '15', '20'],
              ['Population Q', '38', '46'],
              ['Population R', '64', '78'],
              ['Population S', '88', '110'],
            ],
          },
          caption: 'Adult sucrase production and sugar-rich plant intake across four populations.',
        },
        ph: 'Higher adult sucrase % → higher intake (ORA).',
      },
      {
        label: 'f',
        text: '**Suggest** why scientists should be cautious when drawing conclusions from this data.',
        marks: 1,
        ph: 'Data not available for all populations; correlation ≠ causation.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Hemp fibre humidity investigation (16 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Hemp Fibre Humidity Investigation',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Cell Structure & Function'],
    marks: 16,
    stem: 'The hemp plant can be processed to produce fibres that are used in the textile industry. Some students wanted to study the effects of humidity on the strength of hemp fibres. They set up a preliminary investigation to test their method. The equipment can be used to test how easily the hemp fibres break by hanging masses from them until they snap.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="320" fill="#ffffff"/><rect x="60" y="40" width="14" height="240" fill="#8a99a6" stroke="#5b6b78"/><rect x="60" y="40" width="160" height="12" fill="#8a99a6" stroke="#5b6b78"/><text x="150" y="32" font-size="12" fill="#5b6b78">clamp stand</text><line x1="170" y1="52" x2="170" y2="160" stroke="#2f9e44" stroke-width="3"/><text x="178" y="110" font-size="12" fill="#2f9e44">hemp fibre</text><rect x="150" y="160" width="40" height="26" rx="4" fill="#f08c00" stroke="#a8651a"/><text x="170" y="178" font-size="11" text-anchor="middle" fill="#fff">mass</text><line x1="170" y1="186" x2="170" y2="210" stroke="#5b6b78" stroke-width="1"/><rect x="150" y="210" width="40" height="22" rx="4" fill="#f3b765" stroke="#a8651a"/><rect x="300" y="60" width="120" height="200" rx="8" fill="#eef6fb" stroke="#0b7285" stroke-width="2"/><text x="360" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">humidity chamber</text><text x="360" y="160" font-size="22" font-weight="700" text-anchor="middle" fill="#0b7285">%RH</text><g stroke="#bfe3f2" stroke-width="2"><line x1="320" y1="90" x2="320" y2="240"/><line x1="345" y1="90" x2="345" y2="240"/><line x1="375" y1="90" x2="375" y2="240"/><line x1="400" y1="90" x2="400" y2="240"/></g></svg>',
      },
      caption: 'Hemp fibre clamped with masses hung from it, inside a chamber where humidity can be set.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a research question for this investigation.',
        marks: 1,
        ph: 'How does humidity affect the mass needed to break the fibre?',
      },
      {
        label: 'b',
        text: '**Identify** the independent and dependent variables in this investigation.',
        marks: 2,
        ph: 'IV = humidity (%); DV = mass (g) needed to break the fibre.',
      },
      {
        label: 'c',
        text: '**Suggest** two control variables that should be used in this investigation.',
        marks: 2,
        ph: 'E.g. diameter of fibre, temperature, length of fibre, type/age of plant.',
      },
      {
        label: 'd',
        text: '**State** why control variables are important in an investigation.',
        marks: 1,
        ph: 'Ensure DV is only affected by the IV.',
      },
      {
        label: 'e',
        text: '**Suggest** and **justify** how the experiment could be improved to collect sufficient data.',
        marks: 2,
        ph: 'More humidity levels (range); add repeats to calculate average/identify anomalies.',
      },
      {
        label: 'f',
        text: '**Present** the data for both groups in a graph. Include a title, labelled axes with units, and a key.',
        marks: 4,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Humidity / %', 'Group 1 — mass to break / g', 'Group 2 — mass to break / g'],
            rows: [
              ['20', '60', '50'],
              ['40', '110', '95'],
              ['60', '150', '145'],
              ['80', '165', '195'],
            ],
          },
          caption: 'Mass needed to break the hemp fibre at each humidity for the two groups.',
        },
        ph: 'Plot Group 1 and Group 2 points; equal Y-axis increments; key for each group.',
      },
      {
        label: 'g',
        text: '**State** the patterns shown in each group\'s data.',
        marks: 2,
        ph: 'Group 1: increases then plateaus. Group 2: increases linearly.',
      },
      {
        label: 'h',
        text: '**Suggest** one reason to support the claim made by each group.',
        marks: 2,
        ph: 'Different strengths (natural variation) OR different masses (less precise equipment).',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Hemp cell diameter & water movement (10 marks) Criterion C
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Plant Cell Diameter & Water Movement',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Cell Structure & Function'],
    marks: 10,
    stem: 'The students used microscopes with the same magnification to look at the cells in hemp fibres after changing the humidity from 25% to 75%. The diagrams show what they saw, with a scale bar of 80 micrometres.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><text x="140" y="28" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">25% humidity</text><circle cx="140" cy="140" r="60" fill="#eaf6ef" stroke="#2f9e44" stroke-width="3"/><circle cx="140" cy="140" r="46" fill="#cfe9e0" stroke="#37b24d" stroke-width="1.5"/><text x="140" y="216" font-size="11" text-anchor="middle" fill="#2f9e44">highlighted cell</text><line x1="80" y1="248" x2="160" y2="248" stroke="#1f2d3a" stroke-width="3"/><text x="120" y="266" font-size="11" text-anchor="middle" fill="#1f2d3a">80 µm</text><text x="420" y="28" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">75% humidity</text><circle cx="420" cy="140" r="72" fill="#eaf6ef" stroke="#2f9e44" stroke-width="3"/><circle cx="420" cy="140" r="56" fill="#cfe9e0" stroke="#37b24d" stroke-width="1.5"/><text x="420" y="228" font-size="11" text-anchor="middle" fill="#2f9e44">highlighted cell</text><line x1="360" y1="248" x2="440" y2="248" stroke="#1f2d3a" stroke-width="3"/><text x="400" y="266" font-size="11" text-anchor="middle" fill="#1f2d3a">80 µm</text></svg>',
      },
      caption: 'The highlighted hemp cell at 25% humidity (diameter 80 µm at this scale) and at 75% humidity (larger). Scale bar = 80 µm.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Measure** the diameter of the highlighted cell at 75% humidity.',
        marks: 1,
        ph: 'Use the scale bar — approximately 96 micrometres.',
      },
      {
        label: 'b',
        text: '**Calculate** the percentage increase in diameter for the highlighted cell from 25% to 75% humidity. Give your answer to the nearest 1%.',
        marks: 3,
        ph: '% increase = (value from a − 80) ÷ 80 × 100. Round to nearest %.',
      },
      {
        label: 'c',
        text: '**Explain** how the movement of water causes the hemp fibres to increase in size as humidity increases.',
        marks: 4,
        ph: 'Water enters cells by osmosis/diffusion; cells/vacuoles swell; larger difference with environment.',
      },
      {
        label: 'd',
        text: '**Suggest** different measurements the student could take and **justify** how these measurements would benefit the investigation.',
        marks: 2,
        ph: 'Change in mass or 3D dimensions; justification: calculate % water absorbed/volume change.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Sodium hydroxide treatment of hemp fibres (7 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Sodium Hydroxide Treatment of Plant Fibres',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    marks: 7,
    stem: 'Hemp fibres can also be treated with sodium hydroxide solution to change their properties. The flow chart below briefly outlines the process used by a group of students to treat their hemp fibres.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="a6" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5b6b78"/></marker></defs><rect width="560" height="160" fill="#ffffff"/><rect x="20" y="56" width="120" height="48" rx="6" fill="#eaf6ef" stroke="#2f9e44" stroke-width="2"/><text x="80" y="78" font-size="11" text-anchor="middle" fill="#1f2d3a">Cut 30 cm of</text><text x="80" y="94" font-size="11" text-anchor="middle" fill="#1f2d3a">hemp fibre</text><line x1="140" y1="80" x2="172" y2="80" stroke="#5b6b78" stroke-width="2" marker-end="url(#a6)"/><rect x="176" y="56" width="124" height="48" rx="6" fill="#eef6fb" stroke="#0b7285" stroke-width="2"/><text x="238" y="78" font-size="11" text-anchor="middle" fill="#1f2d3a">Immerse in 50 cm³</text><text x="238" y="94" font-size="11" text-anchor="middle" fill="#1f2d3a">of NaOH solution</text><line x1="300" y1="80" x2="332" y2="80" stroke="#5b6b78" stroke-width="2" marker-end="url(#a6)"/><rect x="336" y="56" width="120" height="48" rx="6" fill="#fff4e6" stroke="#f08c00" stroke-width="2"/><text x="396" y="78" font-size="11" text-anchor="middle" fill="#1f2d3a">Rinse and</text><text x="396" y="94" font-size="11" text-anchor="middle" fill="#1f2d3a">dry fibre</text><line x1="456" y1="80" x2="488" y2="80" stroke="#5b6b78" stroke-width="2" marker-end="url(#a6)"/><rect x="492" y="56" width="56" height="48" rx="6" fill="#eaf6ef" stroke="#2f9e44" stroke-width="2"/><text x="520" y="84" font-size="11" text-anchor="middle" fill="#1f2d3a">Test</text><text x="280" y="28" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Method flow chart</text></svg>',
      },
      caption: 'Flow chart of the students\' NaOH treatment of hemp fibres.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** one control variable shown in the flow chart.',
        marks: 1,
        ph: 'Volume of NaOH, initial fibre length/diameter, type of fibre.',
      },
      {
        label: 'b',
        text: 'The students discussed whether the flow chart was an appropriate way to present a scientific method. One student suggested that the length of time the fibres are immersed in the sodium hydroxide solution should be included. **Suggest** why this would improve the method.',
        marks: 1,
        ph: 'Immersion time affects results; makes method repeatable/comparable.',
      },
      {
        label: 'c',
        text: 'The students planned to investigate the effect of sodium hydroxide on the properties of the hemp fibres. Before making their measurements, the students suggested the following hypothesis: "As the concentration of alkali changes, the fibres will stretch more." **Suggest** how the students could improve the hypothesis to make it testable.',
        marks: 3,
        ph: 'Identify alkali as NaOH; state direction of change; include range of IV concentrations; specify measurement.',
      },
      {
        label: 'd',
        text: 'The students presented their results in the graph below. Use data from the graph to **discuss** whether the students\' results support the hypothesis in part (c).',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Fibre extension vs NaOH concentration',
            xLabel: 'NaOH concentration',
            yLabel: 'Extension of fibre',
            xUnit: '%',
            yUnit: 'mm',
            dataPoints: [
              { x: 0, y: 4 }, { x: 2, y: 10 }, { x: 5, y: 12 }, { x: 8, y: 7 }, { x: 10, y: 5 }, { x: 15, y: 5 }, { x: 20, y: 5 },
            ],
            lobf: false,
            xMax: 20, yMax: 14, xStep: 5, yStep: 2,
          },
          caption: 'Hemp fibre extension at increasing NaOH concentrations.',
        },
        ph: 'Valid 0–2% or 5%; decreases 5–10%; no clear change above 10% — partially supports.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Hemp fibre % in yarn design investigation (15 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Plant Fibre Composition Design Investigation',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    marks: 15,
    stem: 'Hemp fibres can be combined with other fibres to change their properties. The percentage of hemp fibres in a yarn can be changed to vary how far the yarn stretches. You are provided with standard laboratory equipment and a range of different yarns containing between 0% and 20% hemp fibres.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="420" height="300" fill="#ffffff"/><rect x="40" y="36" width="14" height="220" fill="#8a99a6" stroke="#5b6b78"/><rect x="40" y="36" width="150" height="12" fill="#8a99a6" stroke="#5b6b78"/><line x1="150" y1="48" x2="150" y2="150" stroke="#2f9e44" stroke-width="3"/><text x="158" y="100" font-size="12" fill="#2f9e44">hemp/blend yarn</text><rect x="130" y="150" width="40" height="26" rx="4" fill="#f08c00" stroke="#a8651a"/><text x="150" y="168" font-size="11" text-anchor="middle" fill="#fff">fixed mass</text><rect x="240" y="60" width="22" height="180" fill="#eef6fb" stroke="#0b7285"/><g stroke="#0b7285" stroke-width="1"><line x1="240" y1="80" x2="262" y2="80"/><line x1="240" y1="110" x2="262" y2="110"/><line x1="240" y1="140" x2="262" y2="140"/><line x1="240" y1="170" x2="262" y2="170"/><line x1="240" y1="200" x2="262" y2="200"/></g><text x="251" y="256" font-size="11" text-anchor="middle" fill="#0b7285">ruler (cm)</text><text x="210" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Measuring yarn stretch</text></svg>',
      },
      caption: 'Apparatus to measure how far a yarn stretches when a fixed mass is attached.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out how the percentage of hemp fibres in a yarn affects the length it will stretch to when a fixed mass is attached. In your answer, you should include:\n- a research question\n- the independent, dependent and two control variables\n- equipment you will use\n- details of how to manipulate, measure or control the variables\n- a description of a method to collect sufficient data\n- how you will make your method safe',
        marks: 15,
        ph: 'Full Criteria B design: RQ, IV/DV/CVs, equipment, method, data plan, safety.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Urbanisation & biodiversity (13 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Urbanisation & Biodiversity',
    topicCanonical: 'Human Influences',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Biodiversity'],
    marks: 13,
    stem: 'One of the United Nations (UN) sustainable development goals is that cities should be inclusive, safe, resilient and sustainable. In response to migration to large cities, planners must consider the social, economic and environmental impact of urbanisation.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'A simple urban pollination food web',
        nodes: [
          { id: 'flower', label: 'Wildflowers' },
          { id: 'hoverfly', label: 'Hoverflies' },
          { id: 'bird', label: 'Songbirds' },
          { id: 'fruit', label: 'Fruiting plants' },
          { id: 'mammal', label: 'Small mammals' },
        ],
        edges: [
          { from: 'flower', to: 'hoverfly' },
          { from: 'hoverfly', to: 'bird' },
          { from: 'flower', to: 'fruit' },
          { from: 'fruit', to: 'mammal' },
          { from: 'mammal', to: 'bird' },
        ],
      },
      caption: 'Hoverflies pollinate wildflowers, supporting fruiting plants and the animals that depend on them.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Plants have a cooling effect when water evaporates from their leaves. **Select** the name of this process.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Osmosis', 'Photosynthesis', 'Respiration', 'Transpiration'],
        ph: 'Water loss through leaf stomata.',
      },
      {
        label: 'b',
        text: 'A consequence of urbanisation is lower biodiversity. **Explain** how a reduction in the population of pollinators, such as hoverflies, will further reduce biodiversity.',
        marks: 4,
        ph: 'Fewer hoverflies → less pollination → fewer plants → less food → biodiversity reduced.',
      },
      {
        label: 'c',
        text: '**Explain** how an existing city can become more sustainable. In your answer, you should include:\n- a justification of one action an individual can take\n- a justification of one action a government can take\n- a statement of why each action might be difficult to implement\n- a conclusion',
        marks: 8,
        ph: 'Individual + justification + difficulty; government + justification + difficulty; conclusion.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Green-wall + solar (vertical biosolar) technology (13 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Vertical Biosolar Technology',
    topicCanonical: 'Mitigation of Adverse Effects',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Biodiversity'],
    marks: 13,
    stem: 'Cities can enhance biodiversity by creating additional green spaces. Living green walls (plants grown up the side of a building) can be combined with vertical solar panels to form vertical biosolar technology. Using information from this task and your wider MYP studies, discuss and evaluate the use of vertical biosolar technology to improve the sustainability of urban areas.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky9" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dff1fb"/><stop offset="1" stop-color="#ffffff"/></linearGradient></defs><rect width="480" height="320" fill="url(#sky9)"/><circle cx="410" cy="50" r="26" fill="#f0c419"/><rect x="80" y="60" width="120" height="230" fill="#cdd6dd" stroke="#5b6b78" stroke-width="2"/><g fill="#2f9e44" stroke="#1f7a33"><rect x="86" y="70" width="50" height="210"/></g><g fill="#37b24d"><circle cx="98" cy="92" r="7"/><circle cx="118" cy="110" r="7"/><circle cx="104" cy="138" r="7"/><circle cx="124" cy="160" r="7"/><circle cx="98" cy="188" r="7"/><circle cx="120" cy="214" r="7"/><circle cx="104" cy="244" r="7"/></g><text x="111" y="304" font-size="11" text-anchor="middle" fill="#2f9e44">living green wall</text><g fill="#2b3a67" stroke="#0b1f3a"><rect x="146" y="70" width="48" height="46"/><rect x="146" y="122" width="48" height="46"/><rect x="146" y="174" width="48" height="46"/><rect x="146" y="226" width="48" height="46"/></g><g stroke="#5b76d6" stroke-width="1"><line x1="170" y1="70" x2="170" y2="272"/></g><text x="240" y="120" font-size="12" fill="#2b3a67">vertical solar panels</text><line x1="220" y1="116" x2="200" y2="116" stroke="#2b3a67" stroke-width="1"/><g stroke="#f0c419" stroke-width="2" stroke-linecap="round"><line x1="388" y1="70" x2="210" y2="120"/><line x1="392" y1="84" x2="214" y2="150"/></g></svg>',
      },
      caption: 'A vertical biosolar façade: a living green wall beside vertical solar panels on a building.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the use of vertical biosolar technology to improve the sustainability of urban areas. In your answer, you should include:\n- environmental impacts of green walls and solar panels\n- economic impacts of green walls and solar panels\n- additional benefits when green walls and solar panels are combined in vertical biosolar technology\n- one factor to consider when deciding where to place vertical biosolar technology\n- a concluding statement',
        marks: 13,
        ph: 'Cover environmental, economic, additional biosolar benefits, location factor, conclusion.',
      },
    ],
  },
]
