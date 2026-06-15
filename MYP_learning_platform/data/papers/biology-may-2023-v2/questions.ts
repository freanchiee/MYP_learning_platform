import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2023 · VARIANT 2  (isomorphic to biology-may-2023)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags) in a NEW biological context, distinct from the source AND
// from Variant 1. Numbers/answers recomputed throughout. Data-driven artefacts.
//   Q1 Joints/muscles/resp:  elbow → ANKLE joint (gastrocnemius / tibialis anterior)
//   Q2 Food storage/osmosis: bananas+ethylene → fresh meat+coating; salted meat → sugar-preserved berries (jam)
//   Q3 Enzymes & genetics:   lactase pigs/rats → AMYLASE in foals / rabbits (allele A/a)
//   Q4 Crit B fibre+humidity: agave → JUTE fibre humidity investigation
//   Q5 Crit C cell diameter:  agave cells → JUTE fibre cells (new numbers, base 70 → 91 = 30%)
//   Q6 Crit B NaOH treatment: agave → JUTE fibre NaOH treatment
//   Q7 Crit B design:         % plant fibre in rope → % JUTE fibre in FABRIC stretch
//   Q8 Urbanisation/pollinator: bees → MOTHS; biodiversity & sustainable city
//   Q9 Crit D essay:          biosolar ROOF → constructed WETLAND + floating solar (aquavoltaic biosolar)
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2023-v2',
  subject: 'Biology',
  session: 'May',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Ankle joint, muscles & respiration (8 marks) Criterion A
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
    stem: 'The skeleton consists of bones, joints and cartilage. A diagram of the ankle joint is shown below.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bone2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f4ecd6"/><stop offset="1" stop-color="#e2d3aa"/></linearGradient></defs><rect width="520" height="340" fill="#ffffff"/><text x="260" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">The ankle joint</text><rect x="232" y="40" width="34" height="150" rx="14" fill="url(#bone2)" stroke="#b39a5c"/><rect x="272" y="46" width="20" height="144" rx="9" fill="url(#bone2)" stroke="#b39a5c"/><text x="304" y="90" font-size="12" fill="#5b6b78">tibia / fibula (shin)</text><path d="M210,210 q60,-30 120,0 q4,40 -10,46 q-58,16 -100,0 q-16,-20 -10,-46 Z" fill="url(#bone2)" stroke="#b39a5c"/><text x="360" y="250" font-size="12" fill="#5b6b78">foot bones</text><ellipse cx="262" cy="200" rx="42" ry="20" fill="#cfe9e0" stroke="#2f9e44" stroke-width="2"/><text x="262" y="204" font-size="11" text-anchor="middle" fill="#0b7285">cartilage</text><path d="M256,46 C300,120 300,170 282,200" fill="none" stroke="#c0392b" stroke-width="9" stroke-linecap="round"/><text x="320" y="150" font-size="12" font-weight="700" fill="#c0392b">X</text><path d="M214,52 C175,120 178,170 226,206" fill="none" stroke="#2b6cb0" stroke-width="9" stroke-linecap="round"/><text x="150" y="120" font-size="12" font-weight="700" fill="#2b6cb0">Y</text><line x1="304" y1="146" x2="282" y2="120" stroke="#c0392b" stroke-width="1"/><line x1="160" y1="116" x2="190" y2="120" stroke="#2b6cb0" stroke-width="1"/></svg>',
      },
      caption: 'The ankle joint, showing the shin bones, foot bones, cartilage and two muscles X and Y.',
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
        widgetOptions: ['Gastrocnemius', 'Deltoid', 'Tibia', 'Bicep'],
        ph: 'Muscle X points the foot down (plantar flexion) — the calf muscle.',
      },
      {
        label: 'c',
        text: '**Outline** how the two muscles, X and Y, in the diagram above work together to move the foot.',
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
  // QUESTION 2 — Edible coatings & food storage (8 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Active Packaging & Food Storage',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    marks: 8,
    stem: 'Scientists are looking for ways to keep food fresh for longer. An edible coating can be sprayed onto fresh food to change the conditions at its surface and extend the time the food stays in good condition and is safe to eat. As fresh meat is exposed to air, oxygen speeds up the growth of microbes that spoil it. The image below shows how an edible coating can act as a barrier that keeps oxygen away from the surface.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="540" height="240" fill="#ffffff"/><text x="180" y="36" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Coated fresh meat</text><ellipse cx="180" cy="150" rx="120" ry="58" fill="#d6677a" stroke="#9c2750" stroke-width="2"/><ellipse cx="180" cy="150" rx="120" ry="58" fill="none" stroke="#2f9e44" stroke-width="6" stroke-dasharray="2 4"/><text x="180" y="155" font-size="12" text-anchor="middle" fill="#fff">meat</text><text x="180" y="222" font-size="11" text-anchor="middle" fill="#2f9e44">edible coating (barrier)</text><g fill="#5b6b78" font-size="12"><text x="330" y="80">O₂</text><text x="370" y="110">O₂</text><text x="340" y="140">O₂</text></g><defs><marker id="b2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#c0392b"/></marker></defs><line x1="345" y1="86" x2="305" y2="120" stroke="#c0392b" stroke-width="1.5" marker-end="url(#b2)"/><line x1="385" y1="116" x2="305" y2="150" stroke="#c0392b" stroke-width="1.5" marker-end="url(#b2)"/><text x="430" y="150" font-size="12" text-anchor="middle" fill="#0b7285">O₂ kept out →</text><text x="430" y="170" font-size="12" text-anchor="middle" fill="#0b7285">microbes slowed</text></svg>',
      },
      caption: 'An edible coating forms a barrier on the meat surface, keeping oxygen away and slowing microbial spoilage.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** two benefits of using an edible coating when transporting fresh food.',
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
        text: '**Describe** why bacteria in sugar-preserved berries (jam) have changed their form and no longer have a smooth surface.',
        marks: 3,
        ph: 'Sugar causes water to leave bacteria by osmosis — bacteria shrink/dehydrate.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Enzymes, amylase & genetics (10 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Enzymes, Amylase & Genetics',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    topicsAlso: ['Digestion', 'DNA & Genetics'],
    marks: 10,
    stem: 'Starch is a major energy store in the plants that many mammals eat. Starch is broken down by an enzyme called amylase. In some mammals the amount of amylase produced as an adult is controlled by a single gene.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="540" height="220" fill="#ffffff"/><text x="270" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Amylase breaks down starch</text><g><circle cx="60" cy="100" r="11" fill="#f08c00" stroke="#a8651a"/><circle cx="82" cy="100" r="11" fill="#f08c00" stroke="#a8651a"/><circle cx="104" cy="100" r="11" fill="#f08c00" stroke="#a8651a"/><circle cx="126" cy="100" r="11" fill="#f08c00" stroke="#a8651a"/></g><text x="92" y="76" font-size="11" font-weight="700" text-anchor="middle" fill="#5b6b78">starch (chain of glucose)</text><path d="M180,118 q40,-50 80,0 q-40,40 -80,0 Z" fill="#cfe9e0" stroke="#2f9e44" stroke-width="2"/><text x="220" y="152" font-size="11" text-anchor="middle" fill="#2f9e44">amylase (enzyme)</text><line x1="270" y1="100" x2="330" y2="100" stroke="#5b6b78" stroke-width="2" marker-end="url(#a3b)"/><defs><marker id="a3b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5b6b78"/></marker></defs><g fill="#f08c00" stroke="#a8651a"><circle cx="370" cy="100" r="13"/><circle cx="410" cy="100" r="13"/><circle cx="450" cy="100" r="13"/><circle cx="490" cy="100" r="13"/></g><text x="430" y="134" font-size="11" text-anchor="middle" fill="#a8651a">glucose molecules (maltose/sugars)</text></svg>',
      },
      caption: 'The enzyme amylase breaks the starch chain down into smaller sugar molecules.',
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
        text: '**State** whether each genotype below produces a high level of amylase as an adult by completing the table. The dominant allele A must be inherited; the recessive allele has the symbol a.',
        marks: 1,
        widget: 'inline_dropdown_select',
        widgetItems: ['AA', 'Aa', 'aa'],
        widgetOptions: ['Yes', 'No'],
        ph: 'Dominant A = high amylase; two recessive a = low.',
      },
      {
        label: 'c',
        text: '**State** the meaning of the term phenotype.',
        marks: 1,
        ph: 'Observable characteristics from gene expression.',
      },
      {
        label: 'd',
        text: 'Using scientific knowledge, **identify** and **justify** one similarity and one difference in amylase production after birth in foals and rabbits.',
        marks: 4,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Amylase activity after birth',
            xLabel: 'Age after birth',
            yLabel: 'Amylase activity',
            xUnit: 'weeks',
            yUnit: 'units',
            dataPoints: [
              { x: 0, y: 90 }, { x: 2, y: 84 }, { x: 4, y: 66 }, { x: 6, y: 46 }, { x: 8, y: 32 }, { x: 10, y: 28 },
            ],
            lobf: false,
            xMax: 10, yMax: 100, xStep: 2, yStep: 20,
          },
          caption: 'Foals (upper trend) keep higher amylase for longer; rabbits (lower trend) fall faster.',
        },
        ph: 'Similarity: both decrease after birth. Difference: foals higher/level off later; justification needed.',
      },
      {
        label: 'e',
        text: 'Using the data in the infographic, **state** the relationship between adult amylase production and average starch-rich plant intake.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Population', 'Adults with high amylase / %', 'Mean starch-rich plant intake / g day⁻¹'],
            rows: [
              ['Population P', '18', '40'],
              ['Population Q', '42', '95'],
              ['Population R', '60', '140'],
              ['Population S', '85', '210'],
            ],
          },
          caption: 'Adult amylase production and starch-rich plant intake across four populations.',
        },
        ph: 'Higher adult amylase % → higher intake (ORA).',
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
  // QUESTION 4 — Jute fibre humidity investigation (16 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Jute Fibre Humidity Investigation',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Cell Structure & Function'],
    marks: 16,
    stem: 'The jute plant can be processed to produce fibres that are used in the textile industry. Some students wanted to study the effects of humidity on the strength of jute fibres. They set up a preliminary investigation to test their method. The equipment can be used to test how easily the jute fibres break by hanging masses from them until they snap.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="320" fill="#ffffff"/><rect x="60" y="40" width="14" height="240" fill="#8a99a6" stroke="#5b6b78"/><rect x="60" y="40" width="160" height="12" fill="#8a99a6" stroke="#5b6b78"/><text x="150" y="32" font-size="12" fill="#5b6b78">clamp stand</text><line x1="170" y1="52" x2="170" y2="160" stroke="#2f9e44" stroke-width="3"/><text x="178" y="110" font-size="12" fill="#2f9e44">jute fibre</text><rect x="150" y="160" width="40" height="26" rx="4" fill="#f08c00" stroke="#a8651a"/><text x="170" y="178" font-size="11" text-anchor="middle" fill="#fff">mass</text><line x1="170" y1="186" x2="170" y2="210" stroke="#5b6b78" stroke-width="1"/><rect x="150" y="210" width="40" height="22" rx="4" fill="#f3b765" stroke="#a8651a"/><rect x="300" y="60" width="120" height="200" rx="8" fill="#eef6fb" stroke="#0b7285" stroke-width="2"/><text x="360" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">humidity chamber</text><text x="360" y="160" font-size="22" font-weight="700" text-anchor="middle" fill="#0b7285">%RH</text><g stroke="#bfe3f2" stroke-width="2"><line x1="320" y1="90" x2="320" y2="240"/><line x1="345" y1="90" x2="345" y2="240"/><line x1="375" y1="90" x2="375" y2="240"/><line x1="400" y1="90" x2="400" y2="240"/></g></svg>',
      },
      caption: 'Jute fibre clamped with masses hung from it, inside a chamber where humidity can be set.',
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
              ['20', '70', '55'],
              ['40', '120', '100'],
              ['60', '155', '150'],
              ['80', '170', '200'],
            ],
          },
          caption: 'Mass needed to break the jute fibre at each humidity for the two groups.',
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
  // QUESTION 5 — Jute cell diameter & water movement (10 marks) Criterion C
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
    stem: 'The students used microscopes with the same magnification to look at the cells in jute fibres after changing the humidity from 25% to 75%. The diagrams show what they saw, with a scale bar of 70 micrometres.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><text x="140" y="28" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">25% humidity</text><circle cx="140" cy="140" r="56" fill="#eaf6ef" stroke="#2f9e44" stroke-width="3"/><circle cx="140" cy="140" r="42" fill="#cfe9e0" stroke="#37b24d" stroke-width="1.5"/><text x="140" y="212" font-size="11" text-anchor="middle" fill="#2f9e44">highlighted cell</text><line x1="84" y1="244" x2="154" y2="244" stroke="#1f2d3a" stroke-width="3"/><text x="119" y="262" font-size="11" text-anchor="middle" fill="#1f2d3a">70 µm</text><text x="420" y="28" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">75% humidity</text><circle cx="420" cy="140" r="73" fill="#eaf6ef" stroke="#2f9e44" stroke-width="3"/><circle cx="420" cy="140" r="57" fill="#cfe9e0" stroke="#37b24d" stroke-width="1.5"/><text x="420" y="228" font-size="11" text-anchor="middle" fill="#2f9e44">highlighted cell</text><line x1="364" y1="248" x2="434" y2="248" stroke="#1f2d3a" stroke-width="3"/><text x="399" y="266" font-size="11" text-anchor="middle" fill="#1f2d3a">70 µm</text></svg>',
      },
      caption: 'The highlighted jute cell at 25% humidity (diameter 70 µm at this scale) and at 75% humidity (larger). Scale bar = 70 µm.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Measure** the diameter of the highlighted cell at 75% humidity.',
        marks: 1,
        ph: 'Use the scale bar — approximately 91 micrometres.',
      },
      {
        label: 'b',
        text: '**Calculate** the percentage increase in diameter for the highlighted cell from 25% to 75% humidity. Give your answer to the nearest 1%.',
        marks: 3,
        ph: '% increase = (value from a − 70) ÷ 70 × 100. Round to nearest %.',
      },
      {
        label: 'c',
        text: '**Explain** how the movement of water causes the jute fibres to increase in size as humidity increases.',
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
  // QUESTION 6 — Sodium hydroxide treatment of jute fibres (7 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Sodium Hydroxide Treatment of Plant Fibres',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    marks: 7,
    stem: 'Jute fibres can also be treated with sodium hydroxide solution to change their properties. The flow chart below briefly outlines the process used by a group of students to treat their jute fibres.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="b6" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5b6b78"/></marker></defs><rect width="560" height="160" fill="#ffffff"/><rect x="20" y="56" width="120" height="48" rx="6" fill="#eaf6ef" stroke="#2f9e44" stroke-width="2"/><text x="80" y="78" font-size="11" text-anchor="middle" fill="#1f2d3a">Cut 25 cm of</text><text x="80" y="94" font-size="11" text-anchor="middle" fill="#1f2d3a">jute fibre</text><line x1="140" y1="80" x2="172" y2="80" stroke="#5b6b78" stroke-width="2" marker-end="url(#b6)"/><rect x="176" y="56" width="124" height="48" rx="6" fill="#eef6fb" stroke="#0b7285" stroke-width="2"/><text x="238" y="78" font-size="11" text-anchor="middle" fill="#1f2d3a">Immerse in 40 cm³</text><text x="238" y="94" font-size="11" text-anchor="middle" fill="#1f2d3a">of NaOH solution</text><line x1="300" y1="80" x2="332" y2="80" stroke="#5b6b78" stroke-width="2" marker-end="url(#b6)"/><rect x="336" y="56" width="120" height="48" rx="6" fill="#fff4e6" stroke="#f08c00" stroke-width="2"/><text x="396" y="78" font-size="11" text-anchor="middle" fill="#1f2d3a">Rinse and</text><text x="396" y="94" font-size="11" text-anchor="middle" fill="#1f2d3a">dry fibre</text><line x1="456" y1="80" x2="488" y2="80" stroke="#5b6b78" stroke-width="2" marker-end="url(#b6)"/><rect x="492" y="56" width="56" height="48" rx="6" fill="#eaf6ef" stroke="#2f9e44" stroke-width="2"/><text x="520" y="84" font-size="11" text-anchor="middle" fill="#1f2d3a">Test</text><text x="280" y="28" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Method flow chart</text></svg>',
      },
      caption: 'Flow chart of the students\' NaOH treatment of jute fibres.',
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
        text: 'The students planned to investigate the effect of sodium hydroxide on the properties of the jute fibres. Before making their measurements, the students suggested the following hypothesis: "As the concentration of alkali changes, the fibres will stretch more." **Suggest** how the students could improve the hypothesis to make it testable.',
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
              { x: 0, y: 3 }, { x: 2, y: 9 }, { x: 5, y: 11 }, { x: 8, y: 6 }, { x: 10, y: 4 }, { x: 15, y: 4 }, { x: 20, y: 4 },
            ],
            lobf: false,
            xMax: 20, yMax: 12, xStep: 5, yStep: 2,
          },
          caption: 'Jute fibre extension at increasing NaOH concentrations.',
        },
        ph: 'Valid 0–2% or 5%; decreases 5–10%; no clear change above 10% — partially supports.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Jute fibre % in fabric design investigation (15 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Plant Fibre Composition Design Investigation',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    marks: 15,
    stem: 'Jute fibres can be combined with other fibres to change their properties. The percentage of jute fibres in a strip of fabric can be changed to vary how far the fabric stretches. You are provided with standard laboratory equipment and a range of different fabric strips containing between 0% and 20% jute fibres.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="420" height="300" fill="#ffffff"/><rect x="40" y="36" width="14" height="220" fill="#8a99a6" stroke="#5b6b78"/><rect x="40" y="36" width="150" height="12" fill="#8a99a6" stroke="#5b6b78"/><rect x="142" y="48" width="16" height="100" fill="#cdb892" stroke="#9c8a5c"/><text x="166" y="100" font-size="12" fill="#9c8a5c">jute/blend fabric strip</text><rect x="130" y="148" width="40" height="26" rx="4" fill="#f08c00" stroke="#a8651a"/><text x="150" y="166" font-size="11" text-anchor="middle" fill="#fff">fixed mass</text><rect x="240" y="60" width="22" height="180" fill="#eef6fb" stroke="#0b7285"/><g stroke="#0b7285" stroke-width="1"><line x1="240" y1="80" x2="262" y2="80"/><line x1="240" y1="110" x2="262" y2="110"/><line x1="240" y1="140" x2="262" y2="140"/><line x1="240" y1="170" x2="262" y2="170"/><line x1="240" y1="200" x2="262" y2="200"/></g><text x="251" y="256" font-size="11" text-anchor="middle" fill="#0b7285">ruler (cm)</text><text x="210" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Measuring fabric stretch</text></svg>',
      },
      caption: 'Apparatus to measure how far a fabric strip stretches when a fixed mass is attached.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out how the percentage of jute fibres in a strip of fabric affects the length it will stretch to when a fixed mass is attached. In your answer, you should include:\n- a research question\n- the independent, dependent and two control variables\n- equipment you will use\n- details of how to manipulate, measure or control the variables\n- a description of a method to collect sufficient data\n- how you will make your method safe',
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
          { id: 'flower', label: 'Night-flowering plants' },
          { id: 'moth', label: 'Moths' },
          { id: 'bat', label: 'Bats' },
          { id: 'seed', label: 'Seed-bearing plants' },
          { id: 'bird', label: 'Insect-eating birds' },
        ],
        edges: [
          { from: 'flower', to: 'moth' },
          { from: 'moth', to: 'bat' },
          { from: 'moth', to: 'bird' },
          { from: 'flower', to: 'seed' },
          { from: 'seed', to: 'bird' },
        ],
      },
      caption: 'Moths pollinate night-flowering plants, supporting seed-bearing plants and the animals that feed on moths.',
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
        text: 'A consequence of urbanisation is lower biodiversity. **Explain** how a reduction in the population of pollinators, such as moths, will further reduce biodiversity.',
        marks: 4,
        ph: 'Fewer moths → less pollination → fewer plants → less food → biodiversity reduced.',
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
  // QUESTION 9 — Constructed wetland + floating solar (aquavoltaic biosolar) (13 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Aquavoltaic Biosolar Technology',
    topicCanonical: 'Mitigation of Adverse Effects',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Biodiversity'],
    marks: 13,
    stem: 'Cities can enhance biodiversity by creating additional green and blue spaces. A constructed wetland (a shallow pond planted with reeds) can be combined with floating solar panels to form aquavoltaic biosolar technology. Using information from this task and your wider MYP studies, discuss and evaluate the use of aquavoltaic biosolar technology to improve the sustainability of urban areas.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky9b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dff1fb"/><stop offset="1" stop-color="#ffffff"/></linearGradient><linearGradient id="watr9" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="480" height="300" fill="url(#sky9b)"/><circle cx="410" cy="50" r="26" fill="#f0c419"/><rect x="0" y="170" width="480" height="130" fill="url(#watr9)"/><line x1="0" y1="170" x2="480" y2="170" stroke="#3f7e98" stroke-width="2"/><text x="40" y="292" font-size="11" fill="#2c5468">constructed wetland (pond)</text><g fill="#2b3a67" stroke="#0b1f3a"><rect x="180" y="150" width="56" height="30"/><rect x="246" y="150" width="56" height="30"/></g><g stroke="#5b76d6" stroke-width="1"><line x1="208" y1="150" x2="208" y2="180"/><line x1="274" y1="150" x2="274" y2="180"/></g><text x="241" y="142" font-size="11" text-anchor="middle" fill="#2b3a67">floating solar panels</text><ellipse cx="190" cy="180" rx="14" ry="4" fill="#1b2748" opacity="0.4"/><ellipse cx="272" cy="180" rx="14" ry="4" fill="#1b2748" opacity="0.4"/><g stroke="#2f9e44" stroke-width="3"><line x1="60" y1="200" x2="56" y2="168"/><line x1="72" y1="204" x2="74" y2="168"/><line x1="86" y1="200" x2="84" y2="172"/><line x1="402" y1="204" x2="400" y2="170"/><line x1="416" y1="206" x2="418" y2="172"/></g><g fill="#37b24d"><path d="M52,168 l4,-12 l4,12 Z"/><path d="M70,168 l4,-12 l4,12 Z"/><path d="M396,170 l4,-12 l4,12 Z"/></g><text x="80" y="222" font-size="11" fill="#2f9e44">reeds</text><g stroke="#f0c419" stroke-width="2" stroke-linecap="round"><line x1="388" y1="68" x2="250" y2="150"/><line x1="392" y1="82" x2="270" y2="150"/></g></svg>',
      },
      caption: 'An aquavoltaic biosolar pond: floating solar panels above a constructed reed wetland.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the use of aquavoltaic biosolar technology to improve the sustainability of urban areas. In your answer, you should include:\n- environmental impacts of constructed wetlands and solar panels\n- economic impacts of constructed wetlands and solar panels\n- additional benefits when constructed wetlands and solar panels are combined in aquavoltaic biosolar technology\n- one factor to consider when deciding where to place aquavoltaic biosolar technology\n- a concluding statement',
        marks: 13,
        ph: 'Cover environmental, economic, additional biosolar benefits, location factor, conclusion.',
      },
    ],
  },
]
