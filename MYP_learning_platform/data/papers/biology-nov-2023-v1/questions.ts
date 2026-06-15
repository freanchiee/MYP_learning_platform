import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2023 · VARIANT 1  (isomorphic to biology-nov-2023)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags, widget types) in a NEW biological context, with self-contained
// data-driven artefacts (no figImages). Numbers/answers recomputed throughout.
//   Q1 DNA/genetics/disease:  cystic fibrosis → SICKLE-CELL ANAEMIA (RBC/O₂ transport)
//   Q2 Nervous system/homeostasis: body-temp scene → HIKER ON A HOT DAY (cooling responses)
//   Q3 Respiration investigation:  yeast + UV → GERMINATING WHEAT SEEDS + GAMMA RADIATION
//   Q4 Respiration data analysis:  UV/yeast data → GAMMA/wheat-seed CO₂ data (new numbers)
//   Q5 Crit B design:  temperature × yeast respiration → temperature × WHEAT-SEED respiration
//   Q6 Disease & ecosystem:  rabies (mammals) → AVIAN INFLUENZA (birds) · wetland food web
//   Q7 Crit D vaccine essay:  oral rabies vaccine for dogs → ORAL BIRD-FLU VACCINE for poultry
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2023-v1',
  subject: 'Biology',
  session: 'November',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — DNA, Genetics & Sickle-Cell Anaemia (11 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'DNA, Genetics & Sickle-Cell Anaemia',
    topicCanonical: 'DNA & Genetics',
    topicGroup: 'Evolution',
    topicsAlso: ['Inheritance & Variation'],
    marks: 11,
    stem: 'The questions below are about DNA, inheritance, and the genetic disease sickle-cell anaemia.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bb1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b7285"/><stop offset="1" stop-color="#095c6b"/></linearGradient></defs><rect width="600" height="260" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of a DNA molecule</text><path d="M120,50 C170,90 170,130 120,170 C170,210 170,230 120,250" fill="none" stroke="url(#bb1)" stroke-width="8"/><path d="M300,50 C250,90 250,130 300,170 C250,210 250,230 300,250" fill="none" stroke="url(#bb1)" stroke-width="8"/><g font-size="13" font-weight="700" text-anchor="middle"><rect x="140" y="60" width="34" height="22" rx="4" fill="#2f9e44"/><text x="157" y="76" fill="#fff">A</text><rect x="246" y="60" width="34" height="22" rx="4" fill="#f08c00"/><text x="263" y="76" fill="#fff">T</text><line x1="174" y1="71" x2="246" y2="71" stroke="#94a3ad" stroke-width="2" stroke-dasharray="3 3"/><rect x="140" y="108" width="34" height="22" rx="4" fill="#1971c2"/><text x="157" y="124" fill="#fff">G</text><rect x="246" y="108" width="34" height="22" rx="4" fill="#c2255c"/><text x="263" y="124" fill="#fff">C</text><line x1="174" y1="119" x2="246" y2="119" stroke="#94a3ad" stroke-width="2" stroke-dasharray="3 3"/><rect x="140" y="156" width="34" height="22" rx="4" fill="#f08c00"/><text x="157" y="172" fill="#fff">T</text><rect x="246" y="156" width="34" height="22" rx="4" fill="#2f9e44"/><text x="263" y="172" fill="#fff">A</text><line x1="174" y1="167" x2="246" y2="167" stroke="#94a3ad" stroke-width="2" stroke-dasharray="3 3"/><rect x="140" y="204" width="34" height="22" rx="4" fill="#c2255c"/><text x="157" y="220" fill="#fff">C</text><rect x="246" y="204" width="34" height="22" rx="4" fill="#1971c2"/><text x="263" y="220" fill="#fff">G</text><line x1="174" y1="215" x2="246" y2="215" stroke="#94a3ad" stroke-width="2" stroke-dasharray="3 3"/></g><text x="120" y="44" font-size="11" text-anchor="middle" fill="#0b7285">sugar–phosphate backbone</text><text x="450" y="120" font-size="12" fill="#495057">Bases pair by</text><text x="450" y="138" font-size="12" fill="#495057">complementary</text><text x="450" y="156" font-size="12" fill="#495057">base-pairing rules.</text></svg>',
      },
      caption: 'Part of a DNA molecule: two sugar–phosphate backbones joined by complementary base pairs.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the cell organelle where an animal\'s DNA is found.',
        marks: 1,
        ph: 'The organelle that contains genetic material.',
      },
      {
        label: 'b',
        text: 'DNA, deoxyribonucleic acid, consists of two sugar-phosphate backbones held together by complementary base pairs. **Select** and drag the correct complementary bases to complete the molecule.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['A pairs with', 'G pairs with'],
        widgetOptions: ['T', 'C', 'U', 'N'],
        ph: 'A pairs with T; G pairs with C. U and N are distractors.',
      },
      {
        label: 'c',
        text: 'Sickle-cell anaemia is an inherited disease caused by a defective recessive allele. **Select** the meaning of the term allele.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'Alleles are bacteria that cause disease',
          'Alleles are different forms of the same gene',
          'Alleles are proteins found in cells',
          'Alleles are traits seen in organisms',
        ],
        ph: 'Alleles are alternate versions of the same gene.',
      },
      {
        label: 'd',
        text: 'Use the symbols **A** and **a** to complete the Punnett square below. (Father = Aa; Mother = Aa)',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="320" height="320" fill="#ffffff"/><text x="170" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Father (Aa)</text><text x="24" y="180" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a" transform="rotate(-90 24 180)">Mother (Aa)</text><g font-size="18" font-weight="700" text-anchor="middle" fill="#0b7285"><text x="160" y="60">A</text><text x="240" y="60">a</text><text x="70" y="170">A</text><text x="70" y="250">a</text></g><rect x="120" y="80" width="80" height="80" fill="#eef6f8" stroke="#0b7285" stroke-width="2"/><rect x="200" y="80" width="80" height="80" fill="#eef6f8" stroke="#0b7285" stroke-width="2"/><rect x="120" y="160" width="80" height="80" fill="#eef6f8" stroke="#0b7285" stroke-width="2"/><rect x="200" y="160" width="80" height="80" fill="#eef6f8" stroke="#0b7285" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="#94a3ad"><text x="160" y="125">?</text><text x="240" y="125">?</text><text x="160" y="205">?</text><text x="240" y="205">?</text></g></svg>',
          },
          caption: 'Punnett square for a cross between two carrier parents (Aa × Aa).',
        },
        ph: 'Fill in AA, Aa, Aa, aa in the four cells of the Punnett square.',
      },
      {
        label: 'e',
        text: '**Determine** the probability that a child does not have the disease but is able to pass it on.',
        marks: 1,
        ph: 'Count the Aa genotypes in the Punnett square — express as % or fraction.',
      },
      {
        label: 'f',
        text: '**Outline** how the structure of a red blood cell supports the transport of oxygen.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="rbc1" cx="0.5" cy="0.45"><stop offset="0" stop-color="#f3a5a0"/><stop offset="0.55" stop-color="#d6453c"/><stop offset="1" stop-color="#b02a22"/></radialGradient></defs><rect width="560" height="220" fill="#ffffff"/><text x="150" y="30" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Healthy red blood cell</text><ellipse cx="150" cy="120" rx="70" ry="46" fill="url(#rbc1)" stroke="#8a1d17"/><ellipse cx="150" cy="120" rx="30" ry="18" fill="#c0392b" opacity="0.55"/><line x1="150" y1="74" x2="150" y2="64" stroke="#8a1d17"/><text x="150" y="186" font-size="11" text-anchor="middle" fill="#8a1d17">biconcave disc · no nucleus</text><text x="430" y="30" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sickled cell</text><path d="M392,86 C470,70 484,150 416,168 C448,140 432,104 392,116 C400,108 396,96 392,86 Z" fill="#9c2b22" stroke="#6e1c16"/><text x="430" y="186" font-size="11" text-anchor="middle" fill="#6e1c16">rigid, crescent shape</text></svg>',
          },
          caption: 'A healthy biconcave red blood cell (left) and a sickled cell (right).',
        },
        ph: 'Biconcave shape gives large surface area; no nucleus → more room for haemoglobin; flexible to fit through capillaries.',
      },
      {
        label: 'g',
        text: '**Suggest** one symptom experienced by a person with sickle-cell anaemia when sickled cells block small blood vessels.',
        marks: 1,
        ph: 'Think about reduced oxygen supply: tiredness, pain, shortness of breath.',
      },
      {
        label: 'h',
        text: 'Sickle-cell anaemia is caused by a defective recessive allele. Gene editing technologies like CRISPR allow us to identify and repair defective alleles. **Outline** one benefit and one ethical consideration of gene editing.',
        marks: 2,
        ph: 'Benefit: cure disease/less medication. Ethical: long-term effects unknown / cosmetic use.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Nervous System & Homeostasis (11 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Nervous System & Homeostasis',
    topicCanonical: 'Nervous System',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Homeostasis'],
    marks: 11,
    stem: 'The questions below are about the nervous system and how it keeps a hiker\'s internal environment stable while walking on a hot day.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sun2" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f08c00"/></radialGradient></defs><rect width="560" height="240" fill="#ffffff"/><circle cx="80" cy="60" r="30" fill="url(#sun2)" stroke="#c97a0c"/><g stroke="#f08c00" stroke-width="3" stroke-linecap="round"><line x1="80" y1="14" x2="80" y2="2"/><line x1="124" y1="30" x2="134" y2="22"/><line x1="36" y1="30" x2="26" y2="22"/></g><line x1="120" y1="100" x2="240" y2="150" stroke="#f0c419" stroke-width="2"/><circle cx="300" cy="90" r="20" fill="#f1c27d" stroke="#c98a3c"/><rect x="288" y="108" width="24" height="60" rx="8" fill="#2f9e44"/><line x1="300" y1="168" x2="290" y2="210" stroke="#2f9e44" stroke-width="6"/><line x1="300" y1="168" x2="312" y2="210" stroke="#2f9e44" stroke-width="6"/><line x1="288" y1="120" x2="266" y2="150" stroke="#2f9e44" stroke-width="6"/><line x1="312" y1="120" x2="334" y2="150" stroke="#2f9e44" stroke-width="6"/><g fill="#0b7285"><circle cx="290" cy="76" r="2.5"/><circle cx="300" cy="72" r="2.5"/><circle cx="310" cy="76" r="2.5"/></g><text x="300" y="66" font-size="10" text-anchor="middle" fill="#0b7285">sweat droplets</text><text x="430" y="120" font-size="12" fill="#495057">Body temperature is</text><text x="430" y="138" font-size="12" fill="#495057">monitored and kept</text><text x="430" y="156" font-size="12" fill="#495057">constant (~37 °C).</text></svg>',
      },
      caption: 'A hiker on a hot day. The nervous system detects the rise in temperature and triggers cooling responses.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the image showing the nervous system.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Image 1 — circulatory system', 'Image 2 — digestive system', 'Image 3 — nervous system', 'Image 4 — musculoskeletal system'],
        ph: 'The nervous system shows nerve pathways throughout the body.',
      },
      {
        label: 'b',
        text: '**Select** the process which is **not** controlled by the nervous system.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Breathing', 'Mitosis', 'Muscle contractions', 'Digestion'],
        ph: 'The nervous system controls voluntary and involuntary processes — but not cell division.',
      },
      {
        label: 'c',
        text: '**State** the meaning of the term homeostasis.',
        marks: 1,
        ph: 'Maintenance of a constant internal environment.',
      },
      {
        label: 'd',
        text: 'When the hiker moves into shade and the air becomes cold, the nervous system triggers responses to warm the body. The hairs on the hiker\'s arms stand up. **State** another response to cold temperatures.',
        marks: 1,
        ph: 'Shivering or vasoconstriction are both valid cold responses.',
      },
      {
        label: 'e',
        text: 'The diagram shows how the hiker\'s body responds when the air temperature rises. Use this image to identify two responses to increased ambient temperature. For each response, **explain** how body temperature is reduced.',
        marks: 6,
        ph: 'Two responses (e.g. sweating, vasodilation, hair flat) each with a linked explanation.',
      },
      {
        label: 'f',
        text: 'The diagram shows how negative feedback maintains body temperature at a set value. **State** one other example of negative feedback in the body.',
        marks: 1,
        ph: 'Blood glucose levels / water balance / hormone levels / CO₂ concentration.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Wheat Seeds & Gamma Radiation Investigation (15 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Wheat Seeds & Gamma Radiation Investigation',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Cell Respiration'],
    marks: 15,
    stem: 'Germinating wheat seeds are living organisms that respire and are often used for laboratory experiments. A student wanted to study the effect of gamma radiation on the rate of respiration of germinating wheat seeds. She planned the method below to investigate how exposure time affects the production of CO₂.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bath3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cdeef7"/><stop offset="1" stop-color="#8fcfe6"/></linearGradient></defs><rect width="600" height="260" fill="#ffffff"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Respiration apparatus</text><rect x="60" y="120" width="180" height="110" rx="6" fill="url(#bath3)" stroke="#3f7e98"/><text x="150" y="248" font-size="11" text-anchor="middle" fill="#2c5468">water bath (constant temperature)</text><rect x="110" y="80" width="80" height="120" rx="8" fill="#eef6f8" stroke="#5b6b78"/><ellipse cx="150" cy="178" rx="32" ry="14" fill="#caa46a"/><g fill="#7a5a2c"><ellipse cx="138" cy="176" rx="6" ry="4"/><ellipse cx="152" cy="180" rx="6" ry="4"/><ellipse cx="164" cy="175" rx="6" ry="4"/></g><text x="150" y="200" font-size="10" text-anchor="middle" fill="#7a5a2c">germinating seeds</text><line x1="150" y1="80" x2="150" y2="50" stroke="#5b6b78" stroke-width="3"/><path d="M150,50 L320,50" stroke="#5b6b78" stroke-width="3" fill="none"/><line x1="320" y1="50" x2="320" y2="120" stroke="#5b6b78" stroke-width="3"/><rect x="360" y="90" width="120" height="60" rx="6" fill="#222" stroke="#000"/><text x="420" y="118" font-size="14" fill="#3ad36a" text-anchor="middle" font-family="monospace">CO₂ ppm</text><text x="420" y="170" font-size="11" text-anchor="middle" fill="#5b6b78">CO₂ sensor</text><line x1="320" y1="120" x2="360" y2="120" stroke="#5b6b78" stroke-width="3"/></svg>',
      },
      caption: 'Germinating wheat seeds in a water bath; a CO₂ sensor measures the carbon dioxide they release.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the characteristic of living organisms shown in the video.',
        marks: 1,
        ph: 'The wheat seeds are germinating and getting bigger — which characteristic of life does this show?',
      },
      {
        label: 'b',
        text: 'Another characteristic of living organisms is respiration. **Select** the correct location for each of the terms in the word equation for aerobic respiration.',
        marks: 1,
        widget: 'fill_blank',
        widgetOptions: ['Energy', 'Oxygen', 'Sugar', 'Water'],
        ph: 'Sugar + Oxygen → Carbon dioxide + Water + Energy.',
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation.',
        marks: 4,
        ph: 'IV = gamma exposure time; DV = CO₂ concentration; 2 CVs (temperature, mass of seeds, number of seeds, water available).',
      },
      {
        label: 'd',
        text: '**Formulate** a hypothesis for this investigation.',
        marks: 3,
        ph: 'If exposure time increases, then CO₂ production decreases, because gamma radiation affects enzyme/DNA structure.',
      },
      {
        label: 'e',
        text: '**State** the reason for using a water bath in the method above.',
        marks: 1,
        ph: 'To control/maintain a constant temperature.',
      },
      {
        label: 'f',
        text: '**Suggest** two weaknesses of the investigation and **justify** your answers.',
        marks: 4,
        ph: 'Not enough increments (need more to see trend); not enough trials (need repeats for reliability/average).',
      },
      {
        label: 'g',
        text: 'At the start of the investigation, the student measured the CO₂ concentration produced by wheat seeds that had not been exposed to gamma radiation. **State** a reason for including an experiment using seeds that had not been exposed to gamma radiation.',
        marks: 1,
        ph: 'To ensure results are due to gamma exposure / it is a control experiment.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Gamma Radiation — Data Analysis (20 marks) Criterion C
  // V1 raw data row at 30 min: 1142, 1235, 1088, 1311 → sum 4776, avg 1194, rate 398
  // LOBF endpoints: (0, 720) and (45, 210). Predict at 20 min ≈ 495 ± 5.
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Gamma Radiation — Data Analysis',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Cell Respiration'],
    marks: 20,
    stem: 'Students in the biology class carried out the investigation in Question 3 and collected their results in the table below.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Gamma exposure / min', 'Student 1 / ppm', 'Student 2 / ppm', 'Student 3 / ppm', 'Student 4 / ppm'],
        rows: [
          ['0', '2178', '2102', '2256', '2184'],
          ['15', '1602', '1548', '1671', '1599'],
          ['30', '1142', '1235', '1088', '1311'],
          ['45', '648', '601', '672', '619'],
        ],
      },
      caption: 'Raw CO₂ concentrations (ppm) produced over 3 minutes by wheat seeds after different gamma-exposure times.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a reason for having four students repeat the same experiment and **justify** your answer.',
        marks: 2,
        ph: 'Increase number of trials → reduce random error / calculate average / increase accuracy.',
      },
      {
        label: 'b',
        text: 'The class started to transform the data. Their transformed data is shown in the table below. Use the raw data to calculate the missing values and complete the table.',
        marks: 3,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Gamma exposure / min', 'Average CO₂ / ppm', 'Rate of CO₂ production / ppm min⁻¹'],
            rows: [
              ['0', '2180', '727'],
              ['15', '1605', '535'],
              ['30', '?', '?'],
              ['45', '635', '212'],
            ],
          },
          caption: 'Transformed data. The 30-minute row must be completed from the raw data.',
        },
        ph: 'Average = sum ÷ 4; rate = average ÷ 3 min. For 30 min: avg = 1194, rate = 397.9 → 398 ppm min⁻¹.',
      },
      {
        label: 'c',
        text: '**Plot** the data in part (b) on the axes below. Draw a line of best fit and add labels for the axes.',
        marks: 4,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'time of gamma exposure / min',
            yLabel: 'rate of CO₂ production / ppm min⁻¹',
            points: [[0, 727], [15, 535], [30, 398], [45, 212]],
            readouts: [{ x: 20, note: 'read the rate at 20 min for part (d)' }],
            dataMaxX: 45,
          },
          caption: 'Rate of CO₂ production against gamma-exposure time (drag the crosshair to read values).',
        },
        ph: 'Plot (0, 727) and (45, 212); draw line of best fit; X = time of gamma exposure / min; Y = rate of CO₂ production / ppm min⁻¹.',
      },
      {
        label: 'd',
        text: 'Use the graph in part (c) to **predict** the average rate of CO₂ produced by wheat seeds exposed to gamma radiation for 20 minutes.',
        marks: 1,
        ph: 'Read from line of best fit at x = 20 min → approximately 495 ± 5 ppm min⁻¹.',
      },
      {
        label: 'e',
        text: 'The class left the experiment to continue overnight. They noticed that the concentration of CO₂ was unchanged at 690 ppm. **Suggest** two reasons why the concentration of CO₂ was unchanged.',
        marks: 2,
        ph: 'Sugar/food store is a limiting factor OR seeds are dead OR no respiration occurring.',
      },
      {
        label: 'f',
        text: 'A researcher wanted to investigate the reason behind the decrease in CO₂ production with gamma exposure. **Outline** the meaning of the term gene.',
        marks: 2,
        ph: 'A section of DNA that leads to a heritable characteristic and codes for a protein.',
      },
      {
        label: 'g',
        text: 'After exposing wheat seeds to gamma radiation for different lengths of time, the researcher did a genetic analysis on Gene A, Gene B, and Gene C. **Interpret** the data in the table to suggest the relationship between gamma radiation and the number of observed changes in the seeds\' DNA.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Gamma exposure / min', 'Changes in Gene A', 'Changes in Gene B', 'Changes in Gene C'],
            rows: [
              ['0', '0', '0', '0'],
              ['15', '2', '1', '3'],
              ['30', '5', '4', '6'],
              ['45', '9', '7', '10'],
            ],
          },
          caption: 'Number of observed DNA changes in three genes after different gamma-exposure times.',
        },
        ph: 'As gamma exposure time increases, the number of DNA changes increases (positive correlation).',
      },
      {
        label: 'h',
        text: 'Using these results and the results from part (g), **suggest** the effects of gamma radiation on the rate of respiration of wheat seeds.',
        marks: 3,
        ph: 'More gamma → more DNA changes in enzymes → enzyme active site changed/denatured → cannot bind substrate → cellular respiration decreases.',
      },
      {
        label: 'i',
        text: 'The class determined that the wheat seeds were killed after 60 minutes of exposure to gamma radiation. Use evidence from this investigation and scientific reasoning to **suggest** if gamma radiation would be effective in sanitizing food by killing microorganisms.',
        marks: 2,
        ph: 'Gamma kills seeds at 60 min, may kill other microbes, but: no evidence others are killed / not practical outside lab / method lacks CVs.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Temperature & Wheat-Seed Respiration Design (19 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Temperature & Wheat-Seed Respiration Design Investigation',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    marks: 19,
    stem: '**Design** an investigation to test the effect of changing the temperature on the rate of respiration of germinating wheat seeds. You are provided with standard laboratory equipment.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="220" fill="#ffffff"/><text x="280" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Standard laboratory equipment provided</text><rect x="60" y="70" width="90" height="110" rx="6" fill="#eef6f8" stroke="#5b6b78"/><ellipse cx="105" cy="160" rx="26" ry="11" fill="#caa46a"/><text x="105" y="198" font-size="10" text-anchor="middle" fill="#7a5a2c">seeds in flask</text><rect x="200" y="120" width="70" height="60" rx="6" fill="#cdeef7" stroke="#3f7e98"/><text x="235" y="198" font-size="10" text-anchor="middle" fill="#2c5468">water bath</text><line x1="320" y1="70" x2="320" y2="180" stroke="#5b6b78" stroke-width="3"/><circle cx="320" cy="70" r="9" fill="#d6453c"/><text x="320" y="198" font-size="10" text-anchor="middle" fill="#8a1d17">thermometer</text><rect x="380" y="110" width="110" height="56" rx="6" fill="#222"/><text x="435" y="142" font-size="13" fill="#3ad36a" text-anchor="middle" font-family="monospace">CO₂ ppm</text><text x="435" y="198" font-size="10" text-anchor="middle" fill="#5b6b78">CO₂ sensor</text></svg>',
      },
      caption: 'Apparatus available: germinating seeds, flask, water bath, thermometer and a CO₂ sensor.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to test the effect of changing the temperature on the rate of respiration of germinating wheat seeds. In your answer, you should include:\n- the independent variable, dependent variable and two control variables\n- a testable hypothesis\n- details of how to manipulate, measure or monitor the variables\n- details of the method used to collect sufficient data\n- a justification of the range you will use for the independent variable',
        marks: 19,
        ph: 'Full Criteria B design: IV=temperature, DV=CO₂ concentration, CVs, hypothesis, method, data plan, range justification.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Avian Influenza & Ecosystems (8 marks) Criterion D
  // Bird flu infects birds → a chain with NO birds is required.
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Avian Influenza & Ecosystems',
    topicCanonical: 'Pathogens & Parasites',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 8,
    stem: 'Avian influenza (bird flu) is a disease that affects birds around the world. Managing healthy populations of wild birds is different across the world. Bird populations can suffer from injuries and diseases. Over-population and loss of wetland can destroy habitats.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="fw1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#495057"/></marker></defs><rect width="620" height="360" fill="#ffffff"/><text x="310" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Wetland food web</text><g font-size="12" font-weight="700" text-anchor="middle"><rect x="40" y="160" width="120" height="40" rx="8" fill="#2f9e44"/><text x="100" y="184" fill="#fff">Pond plants</text><rect x="220" y="60" width="120" height="40" rx="8" fill="#74b816"/><text x="280" y="84" fill="#fff">Mayfly larvae</text><rect x="220" y="260" width="120" height="40" rx="8" fill="#74b816"/><text x="280" y="284" fill="#fff">Pond snails</text><rect x="410" y="60" width="110" height="40" rx="8" fill="#0b7285"/><text x="465" y="84" fill="#fff">Heron (bird)</text><rect x="410" y="160" width="110" height="40" rx="8" fill="#e8590c"/><text x="465" y="184" fill="#fff">Perch (fish)</text><rect x="410" y="260" width="110" height="40" rx="8" fill="#e8590c"/><text x="465" y="284" fill="#fff">Frog</text></g><g stroke="#495057" stroke-width="2" fill="none"><path d="M160,176 L220,84" marker-end="url(#fw1)"/><path d="M160,182 L220,278" marker-end="url(#fw1)"/><path d="M340,84 L410,84" marker-end="url(#fw1)"/><path d="M340,90 L410,172" marker-end="url(#fw1)"/><path d="M340,278 L410,278" marker-end="url(#fw1)"/><path d="M340,272 L410,190" marker-end="url(#fw1)"/><path d="M520,278 L520,200" marker-end="url(#fw1)"/><path d="M520,172 L520,100" marker-end="url(#fw1)"/></g><text x="310" y="340" font-size="11" text-anchor="middle" fill="#868e96">Arrows point from prey to predator (direction of energy flow).</text></svg>',
      },
      caption: 'A wetland food web. The heron is the only bird; all other organisms shown are non-birds.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The graph below shows the number of reported cases of bird flu in wild waterfowl in Europe between 1980 and 2010. Use information from the video to **suggest** one human action that has led to a change in the number of cases of bird flu in Europe.',
        marks: 1,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Reported cases of bird flu in wild waterfowl, Europe',
            xLabel: 'Year',
            yLabel: 'Reported cases',
            dataPoints: [
              { x: 1980, y: 240 }, { x: 1985, y: 300 }, { x: 1990, y: 210 },
              { x: 1995, y: 150 }, { x: 2000, y: 95 }, { x: 2005, y: 60 }, { x: 2010, y: 35 },
            ],
            xMin: 1980, xMax: 2010, yMin: 0, yMax: 320, xStep: 5, yStep: 40,
          },
          caption: 'Reported bird-flu cases in wild waterfowl in Europe, 1980–2010.',
        },
        ph: 'Vaccination of poultry or culling of infected birds.',
      },
      {
        label: 'b',
        text: 'The feeding relationships in an ecosystem are shown in the food web above. Using the diagram, **identify** a food chain containing organisms that cannot be infected with bird flu.',
        marks: 2,
        ph: 'Start with a producer; include 3 non-bird organisms. E.g. Pond plants → Pond snails → Frog → Perch.',
      },
      {
        label: 'c',
        text: 'Some herons in the ecosystem were infected with bird flu. **Suggest** two possible consequences for other organisms present in the ecosystem. **Justify** your answers. You should use scientific language in your answer.',
        marks: 5,
        ph: 'Two consequences (e.g. perch increases, frog increases) each with scientific justification using predator/prey/population.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Oral Bird-Flu Vaccine — Evaluation (16 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Oral Bird-Flu Vaccine — Evaluation',
    topicCanonical: 'Vaccination',
    topicGroup: 'Cells',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 16,
    stem: 'Avian influenza is a disease which affects birds across borders and in different regions, and can occasionally spread to people. Most human cases occur as a result of close contact with infected poultry. One strategy to reduce bird flu in humans is to vaccinate poultry and wild birds and prevent transmission between birds and people. People in different regions have a shared responsibility to work together to develop an effective global solution. The World Organisation for Animal Health has a target to reduce poultry outbreaks worldwide.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="220" fill="#ffffff"/><text x="280" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Oral vaccine bait for birds</text><ellipse cx="150" cy="150" rx="60" ry="26" fill="#caa46a" stroke="#8a6a2c"/><text x="150" y="155" font-size="11" text-anchor="middle" fill="#5a3d12">vaccine-laced feed</text><g><ellipse cx="370" cy="120" rx="34" ry="22" fill="#e9ecef" stroke="#adb5bd"/><circle cx="398" cy="104" r="13" fill="#e9ecef" stroke="#adb5bd"/><circle cx="402" cy="102" r="2" fill="#212529"/><path d="M410,104 l14,-3 l-12,8 Z" fill="#f08c00"/><path d="M348,138 l-8,18 M360,140 l-2,20" stroke="#adb5bd" stroke-width="3"/></g><path d="M250,150 q40,-10 86,-30" stroke="#0b7285" stroke-width="2" stroke-dasharray="5 4" fill="none" marker-end="url(#vac1)"/><defs><marker id="vac1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><text x="400" y="170" font-size="11" text-anchor="middle" fill="#495057">bird eats the bait and gains immunity</text></svg>',
      },
      caption: 'An oral (edible) vaccine bait. Birds that eat the medicated feed develop immunity to bird flu.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Discuss** and **evaluate** the use of an oral vaccine to prevent the transmission of bird flu from infected wild and farmed birds to humans. In your answer, you should include:\n- an advantage and a disadvantage of using an oral vaccine rather than an injectable vaccine, with justification\n- a suggestion of why a method of limiting the wild-bird population might be combined with the vaccine\n- an outline of the ethical considerations of using oral vaccines in farmed and wild birds\n- a discussion of why economic and political collaboration is needed to solve global issues\n- a concluding statement',
        marks: 14,
        ph: 'Cover oral vs injectable vaccine, population-control rationale, ethics, global collaboration, conclusion.',
      },
      {
        label: 'b',
        text: 'An alternative strategy for preventing bird flu in humans is to give an anti-influenza vaccine directly to poultry farmers. **Suggest** an advantage and a disadvantage of vaccinating poultry farmers against bird flu.',
        marks: 2,
        ph: 'Advantage: included in vaccine schedule / guaranteed dose. Disadvantage: not all people vaccinated / supply issues / side effects.',
      },
    ],
  },
]
