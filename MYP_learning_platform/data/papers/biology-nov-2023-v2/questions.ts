import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2023 · VARIANT 2  (isomorphic to biology-nov-2023)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widgets, tags) in a NEW biological context, distinct from BOTH the
// source and Variant 1. Self-contained data-driven artefacts (no figImages).
// Answers recomputed throughout.
//   Q1 DNA/inheritance/exchange : cystic fibrosis → ALBINISM (recessive) · villus absorption
//   Q2 Nervous system/homeostasis : new framing — SWIMMER leaving cold water
//   Q3 Respiration investigation : yeast + UV → GERMINATING MUNG-BEAN SEEDS + SALT (osmotic) STRESS
//   Q4 Respiration data analysis : new CO₂ dataset, same linear-decline shape, new numbers
//   Q5 Crit B design : effect of temperature → effect of GLUCOSE CONCENTRATION on respiration
//   Q6 Disease & ecosystems : rabies/raccoons → CANINE DISTEMPER (mammals) · woodland food web
//   Q7 Vaccine evaluation (Crit D) : oral dog vaccine → ORAL BAIT VACCINE for wild FOXES
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2023-v2',
  subject: 'Biology',
  session: 'November',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — DNA, Genetics & Albinism (11 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'DNA, Genetics & Albinism',
    topicCanonical: 'DNA & Genetics',
    topicGroup: 'Evolution',
    topicsAlso: ['Inheritance & Variation'],
    marks: 11,
    stem: 'The questions below are about DNA, inheritance, and the genetic condition albinism, in which the body cannot make the pigment melanin.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="v2bb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b7285"/><stop offset="1" stop-color="#095c6b"/></linearGradient></defs><rect width="600" height="260" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of a DNA molecule</text><path d="M150,50 C200,90 200,130 150,170 C200,210 200,230 150,250" fill="none" stroke="url(#v2bb)" stroke-width="8"/><path d="M330,50 C280,90 280,130 330,170 C280,210 280,230 330,250" fill="none" stroke="url(#v2bb)" stroke-width="8"/><g font-size="13" font-weight="700" text-anchor="middle"><rect x="170" y="60" width="34" height="22" rx="4" fill="#f08c00"/><text x="187" y="76" fill="#fff">T</text><rect x="276" y="60" width="34" height="22" rx="4" fill="#2f9e44"/><text x="293" y="76" fill="#fff">A</text><line x1="204" y1="71" x2="276" y2="71" stroke="#94a3ad" stroke-width="2" stroke-dasharray="3 3"/><rect x="170" y="108" width="34" height="22" rx="4" fill="#c2255c"/><text x="187" y="124" fill="#fff">C</text><rect x="276" y="108" width="34" height="22" rx="4" fill="#1971c2"/><text x="293" y="124" fill="#fff">G</text><line x1="204" y1="119" x2="276" y2="119" stroke="#94a3ad" stroke-width="2" stroke-dasharray="3 3"/><rect x="170" y="156" width="34" height="22" rx="4" fill="#2f9e44"/><text x="187" y="172" fill="#fff">A</text><rect x="276" y="156" width="34" height="22" rx="4" fill="#f08c00"/><text x="293" y="172" fill="#fff">T</text><line x1="204" y1="167" x2="276" y2="167" stroke="#94a3ad" stroke-width="2" stroke-dasharray="3 3"/><rect x="170" y="204" width="34" height="22" rx="4" fill="#1971c2"/><text x="187" y="220" fill="#fff">G</text><rect x="276" y="204" width="34" height="22" rx="4" fill="#c2255c"/><text x="293" y="220" fill="#fff">C</text><line x1="204" y1="215" x2="276" y2="215" stroke="#94a3ad" stroke-width="2" stroke-dasharray="3 3"/></g><text x="150" y="44" font-size="11" text-anchor="middle" fill="#0b7285">sugar–phosphate backbone</text><text x="470" y="120" font-size="12" fill="#495057">Bases pair by</text><text x="470" y="138" font-size="12" fill="#495057">complementary</text><text x="470" y="156" font-size="12" fill="#495057">base-pairing rules.</text></svg>',
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
        text: 'Albinism is an inherited condition caused by a defective recessive allele. **Select** the meaning of the term allele.',
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
        text: '**Determine** the probability that a child does not have the condition but is able to pass it on.',
        marks: 1,
        ph: 'Count the Aa genotypes in the Punnett square — express as % or fraction.',
      },
      {
        label: 'f',
        text: '**Outline** how the structure of a villus in the small intestine supports the absorption of digested food.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="vil2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd6a5"/><stop offset="1" stop-color="#f3a05a"/></linearGradient></defs><rect width="560" height="240" fill="#ffffff"/><text x="280" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">A villus in the small intestine</text><path d="M120,200 Q120,70 160,70 Q200,70 200,200 Z" fill="url(#vil2)" stroke="#c97a3c" stroke-width="2"/><path d="M160,90 L160,185" stroke="#c0392b" stroke-width="3"/><path d="M160,110 C175,118 178,140 160,150" fill="none" stroke="#c0392b" stroke-width="2"/><path d="M160,120 C145,128 142,150 160,160" fill="none" stroke="#1971c2" stroke-width="2"/><text x="240" y="100" font-size="11" fill="#c0392b">capillary network</text><line x1="205" y1="96" x2="232" y2="96" stroke="#c0392b" stroke-width="1"/><text x="240" y="150" font-size="11" fill="#495057">thin wall</text><text x="240" y="168" font-size="11" fill="#495057">(one cell thick)</text><line x1="205" y1="146" x2="232" y2="146" stroke="#495057" stroke-width="1"/><text x="160" y="222" font-size="11" text-anchor="middle" fill="#c97a3c">large surface area for absorption</text></svg>',
          },
          caption: 'A single villus: large surface area, thin wall and a rich capillary network.',
        },
        ph: 'Large surface area + further structural point (thin wall, capillary supply, short diffusion distance).',
      },
      {
        label: 'g',
        text: '**Suggest** one problem experienced by a person with albinism because their skin cannot make the pigment melanin.',
        marks: 1,
        ph: 'Think about protection from UV light: sunburn, skin damage, or eye/vision problems.',
      },
      {
        label: 'h',
        text: 'Albinism is caused by a defective recessive allele. Gene editing technologies like CRISPR allow us to identify and repair defective alleles. **Outline** one benefit and one ethical consideration of gene editing.',
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
    stem: 'The questions below are about the nervous system and how it maintains a stable internal environment. A swimmer climbs out of a cold outdoor pool and walks into a warm changing room.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="pool2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="560" height="240" fill="#ffffff"/><rect x="0" y="150" width="240" height="90" fill="url(#pool2)"/><text x="120" y="200" font-size="12" text-anchor="middle" fill="#1e4658">cold pool</text><rect x="300" y="40" width="240" height="200" fill="#fff3bf" opacity="0.6"/><text x="420" y="62" font-size="12" text-anchor="middle" fill="#a85a00">warm changing room</text><circle cx="270" cy="80" r="18" fill="#f1c27d" stroke="#c98a3c"/><rect x="259" y="96" width="22" height="56" rx="8" fill="#1971c2"/><line x1="270" y1="152" x2="261" y2="196" stroke="#1971c2" stroke-width="6"/><line x1="270" y1="152" x2="281" y2="196" stroke="#1971c2" stroke-width="6"/><line x1="259" y1="106" x2="240" y2="140" stroke="#1971c2" stroke-width="6"/><line x1="281" y1="106" x2="300" y2="140" stroke="#1971c2" stroke-width="6"/><path d="M255,72 q-6,-8 -2,-14 M285,72 q6,-8 2,-14" stroke="#0b7285" stroke-width="2" fill="none"/><text x="270" y="40" font-size="10" text-anchor="middle" fill="#0b7285">shivering → warming up</text></svg>',
      },
      caption: 'A swimmer leaving cold water and entering a warm room. The nervous system keeps body temperature near 37 °C throughout.',
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
        text: 'While the swimmer is still in the cold water, the hairs on their skin stand up. **State** another response to cold temperatures.',
        marks: 1,
        ph: 'Shivering or vasoconstriction are both valid cold responses.',
      },
      {
        label: 'e',
        text: 'Once the swimmer is in the warm changing room, the body responds to the increase in ambient temperature. Identify two responses to increased ambient temperature. For each response, **explain** how body temperature is reduced.',
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
  // QUESTION 3 — Mung-Bean Seeds & Salt Stress Investigation (15 marks) Criterion B
  // IV = time exposed to salt solution; DV = CO₂; concept identical to source.
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Mung-Bean Seeds & Salt Stress Investigation',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Cell Respiration'],
    marks: 15,
    stem: 'Germinating mung-bean seeds are living organisms that respire and are often used for laboratory experiments. A student wanted to study the effect of soaking the seeds in salt (sodium chloride) solution on their rate of respiration. She planned the method below to investigate how the time spent in salt solution affects the production of CO₂.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bath32" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cdeef7"/><stop offset="1" stop-color="#8fcfe6"/></linearGradient></defs><rect width="600" height="260" fill="#ffffff"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Respiration apparatus</text><rect x="60" y="120" width="180" height="110" rx="6" fill="url(#bath32)" stroke="#3f7e98"/><text x="150" y="248" font-size="11" text-anchor="middle" fill="#2c5468">water bath (constant temperature)</text><rect x="110" y="80" width="80" height="120" rx="8" fill="#eef6f8" stroke="#5b6b78"/><ellipse cx="150" cy="178" rx="32" ry="14" fill="#74b816"/><g fill="#3f6212"><circle cx="138" cy="176" r="5"/><circle cx="152" cy="180" r="5"/><circle cx="164" cy="175" r="5"/><circle cx="146" cy="184" r="5"/></g><text x="150" y="200" font-size="10" text-anchor="middle" fill="#3f6212">mung-bean seeds</text><line x1="150" y1="80" x2="150" y2="50" stroke="#5b6b78" stroke-width="3"/><path d="M150,50 L320,50" stroke="#5b6b78" stroke-width="3" fill="none"/><line x1="320" y1="50" x2="320" y2="120" stroke="#5b6b78" stroke-width="3"/><rect x="360" y="90" width="120" height="60" rx="6" fill="#222" stroke="#000"/><text x="420" y="118" font-size="14" fill="#3ad36a" text-anchor="middle" font-family="monospace">CO₂ ppm</text><text x="420" y="170" font-size="11" text-anchor="middle" fill="#5b6b78">CO₂ sensor</text><line x1="320" y1="120" x2="360" y2="120" stroke="#5b6b78" stroke-width="3"/></svg>',
      },
      caption: 'Germinating mung-bean seeds in a water bath; a CO₂ sensor measures the carbon dioxide they release.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the characteristic of living organisms shown in the video.',
        marks: 1,
        ph: 'The mung-bean seeds are germinating and growing larger — which characteristic of life does this show?',
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
        ph: 'IV = time in salt solution; DV = CO₂ concentration; 2 CVs (temperature, mass/number of seeds, salt concentration, species of seed).',
      },
      {
        label: 'd',
        text: '**Formulate** a hypothesis for this investigation.',
        marks: 3,
        ph: 'If time in salt solution increases, then CO₂ production decreases, because salt causes water to leave the cells by osmosis, affecting enzyme/cell function.',
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
        text: 'At the start of the investigation, the student measured the CO₂ concentration produced by seeds that had not been soaked in salt solution. **State** a reason for including an experiment using seeds that had not been soaked in salt solution.',
        marks: 1,
        ph: 'To ensure results are due to the salt treatment / it is a control experiment.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Salt Stress — Data Analysis (20 marks) Criterion C
  // 24-min raw: 1006,1064,958,1012 → sum 4040, avg 1010, rate 336.67 → 337
  // LOBF endpoints (0, 680) and (36, 185). Predict at 18 min ≈ 433 ± 5.
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Salt Stress — Data Analysis',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Cell Respiration'],
    marks: 20,
    stem: 'Students in the biology class carried out the investigation in Question 3 and collected their results in the table below.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Time in salt solution / min', 'Student 1 / ppm', 'Student 2 / ppm', 'Student 3 / ppm', 'Student 4 / ppm'],
        rows: [
          ['0', '2052', '1988', '2104', '2016'],
          ['12', '1490', '1432', '1551', '1487'],
          ['24', '1006', '1064', '958', '1012'],
          ['36', '560', '521', '598', '545'],
        ],
      },
      caption: 'Raw CO₂ concentrations (ppm) produced over 3 minutes by mung-bean seeds after different times in salt solution.',
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
            headers: ['Time in salt solution / min', 'Average CO₂ / ppm', 'Rate of CO₂ production / ppm min⁻¹'],
            rows: [
              ['0', '2040', '680'],
              ['12', '1490', '497'],
              ['24', '?', '?'],
              ['36', '556', '185'],
            ],
          },
          caption: 'Transformed data. The 24-minute row must be completed from the raw data.',
        },
        ph: 'Average = sum ÷ 4; rate = average ÷ 3 min. For 24 min: avg = 1010, rate = 336.67 → 337 ppm min⁻¹.',
      },
      {
        label: 'c',
        text: '**Plot** the data in part (b) on the axes below. Draw a line of best fit and add labels for the axes.',
        marks: 4,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Rate of CO₂ production vs time in salt solution',
            xLabel: 'Time in salt solution',
            yLabel: 'Rate of CO₂ production',
            xUnit: 'min',
            yUnit: 'ppm min⁻¹',
            dataPoints: [{ x: 0, y: 680 }, { x: 12, y: 497 }, { x: 36, y: 185 }],
            lobf: true,
            xMin: 0, xMax: 36, yMin: 0, yMax: 720, xStep: 4, yStep: 120,
          },
          caption: 'Plot the rate against time in salt solution and add a line of best fit (the 24 min point is shown for checking only).',
        },
        ph: 'Plot (0, 680) and (36, 185); draw line of best fit; X = time in salt solution / min; Y = rate of CO₂ production / ppm min⁻¹.',
      },
      {
        label: 'd',
        text: 'Use the graph in part (c) to **predict** the average rate of CO₂ produced by seeds kept in salt solution for 18 minutes.',
        marks: 1,
        ph: 'Read from line of best fit at x = 18 min → approximately 433 ± 5 ppm min⁻¹.',
      },
      {
        label: 'e',
        text: 'The class left the experiment to continue overnight. They noticed that the concentration of CO₂ was unchanged at 600 ppm. **Suggest** two reasons why the concentration of CO₂ was unchanged.',
        marks: 2,
        ph: 'Stored food (sugar/starch) is a limiting factor OR seeds are dead OR no respiration occurring.',
      },
      {
        label: 'f',
        text: 'A researcher wanted to investigate the reason behind the decrease in CO₂ production with longer salt exposure. **Outline** the meaning of the term gene.',
        marks: 2,
        ph: 'A section of DNA that leads to a heritable characteristic and codes for a protein.',
      },
      {
        label: 'g',
        text: 'After soaking seeds in salt solution for different lengths of time, the researcher did a genetic analysis on Gene A, Gene B, and Gene C. **Interpret** the data in the table to suggest the relationship between time in salt solution and the number of observed changes in the seeds\' DNA expression.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Time in salt solution / min', 'Changes in Gene A', 'Changes in Gene B', 'Changes in Gene C'],
            rows: [
              ['0', '0', '0', '0'],
              ['12', '1', '2', '2'],
              ['24', '4', '5', '5'],
              ['36', '8', '9', '10'],
            ],
          },
          caption: 'Number of observed changes in the expression of three genes after different times in salt solution.',
        },
        ph: 'As time in salt solution increases, the number of changes in gene expression increases (positive correlation).',
      },
      {
        label: 'h',
        text: 'Using these results and the results from part (g), **suggest** the effects of salt stress on the rate of respiration of mung-bean seeds.',
        marks: 3,
        ph: 'More salt exposure → more changes in genes for enzymes → enzyme active site changed/denatured → cannot bind substrate → cellular respiration decreases.',
      },
      {
        label: 'i',
        text: 'The class determined that the seeds stopped respiring after 48 minutes in concentrated salt solution. Use evidence from this investigation and scientific reasoning to **suggest** if salting would be effective in preserving food by killing microorganisms.',
        marks: 2,
        ph: 'Salt stops seed respiration at 48 min, may inhibit other microbes, but: no evidence others are killed / not practical for all foods / method lacks CVs.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Glucose Concentration & Seed Respiration Design (19 marks) Criterion B
  // (Source & V1 used temperature; V2 uses glucose concentration as the IV.)
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Glucose Concentration & Seed Respiration Design Investigation',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    marks: 19,
    stem: '**Design** an investigation to test the effect of changing the concentration of glucose solution supplied to germinating mung-bean seeds on their rate of respiration. You are provided with standard laboratory equipment.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="230" fill="#ffffff"/><text x="280" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Glucose solutions of different concentration</text><g><rect x="40" y="70" width="60" height="120" rx="6" fill="#eef6f8" stroke="#5b6b78"/><rect x="40" y="160" width="60" height="30" fill="#d3f9d8"/><text x="70" y="210" font-size="11" text-anchor="middle" fill="#2b8a3e">0%</text></g><g><rect x="150" y="70" width="60" height="120" rx="6" fill="#eef6f8" stroke="#5b6b78"/><rect x="150" y="135" width="60" height="55" fill="#a9e34b"/><text x="180" y="210" font-size="11" text-anchor="middle" fill="#2b8a3e">2%</text></g><g><rect x="260" y="70" width="60" height="120" rx="6" fill="#eef6f8" stroke="#5b6b78"/><rect x="260" y="120" width="60" height="70" fill="#74b816"/><text x="290" y="210" font-size="11" text-anchor="middle" fill="#2b8a3e">4%</text></g><g><rect x="370" y="70" width="60" height="120" rx="6" fill="#eef6f8" stroke="#5b6b78"/><rect x="370" y="105" width="60" height="85" fill="#5c940d"/><text x="400" y="210" font-size="11" text-anchor="middle" fill="#2b8a3e">6%</text></g><g><rect x="480" y="70" width="60" height="120" rx="6" fill="#eef6f8" stroke="#5b6b78"/><rect x="480" y="92" width="60" height="98" fill="#3f6212"/><text x="510" y="210" font-size="11" text-anchor="middle" fill="#2b8a3e">8%</text></g></svg>',
      },
      caption: 'A range of glucose-solution concentrations the seeds can be supplied with.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to test the effect of changing the concentration of glucose solution supplied to germinating mung-bean seeds on their rate of respiration. In your answer, you should include:\n- the independent variable, dependent variable and two control variables\n- a testable hypothesis\n- details of how to manipulate, measure or monitor the variables\n- details of the method used to collect sufficient data\n- a justification of the range you will use for the independent variable',
        marks: 19,
        ph: 'Full Criteria B design: IV=glucose concentration, DV=CO₂ concentration, CVs, hypothesis, method, data plan, range justification.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Canine Distemper & Ecosystems (8 marks) Criterion D
  // Distemper infects mammals (carnivores) → a chain with NO mammals is required.
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Canine Distemper & Ecosystems',
    topicCanonical: 'Pathogens & Parasites',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 8,
    stem: 'Canine distemper is a viral disease that affects mammals such as foxes, badgers and otters around the world. Managing healthy populations of wild animals is different across the world. Animal populations can suffer from injuries and diseases. Over-population and unsustainable land use can destroy habitats.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Woodland food web',
        nodes: [
          { id: 'oak', label: 'Oak tree (acorns)', group: 'producer' },
          { id: 'grass', label: 'Grasses', group: 'producer' },
          { id: 'caterpillar', label: 'Caterpillars', group: 'primary' },
          { id: 'vole', label: 'Vole', group: 'primary' },
          { id: 'thrush', label: 'Song thrush', group: 'secondary' },
          { id: 'fox', label: 'Red fox', group: 'tertiary' },
          { id: 'owl', label: 'Tawny owl', group: 'tertiary' },
        ],
        edges: [
          { from: 'oak', to: 'caterpillar' },
          { from: 'grass', to: 'vole' },
          { from: 'oak', to: 'vole' },
          { from: 'caterpillar', to: 'thrush' },
          { from: 'vole', to: 'fox' },
          { from: 'vole', to: 'owl' },
          { from: 'thrush', to: 'fox' },
          { from: 'thrush', to: 'owl' },
        ],
      },
      caption: 'Feeding relationships in a woodland ecosystem (arrows point from prey to predator, showing energy flow).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The graph below shows the number of reported cases of canine distemper in wild foxes in Europe between 1990 and 2020. Use information from the video to **suggest** one human action that has led to a change in the number of cases of canine distemper in Europe.',
        marks: 1,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Reported cases of canine distemper in wild foxes, Europe',
            xLabel: 'Year',
            yLabel: 'Reported cases',
            dataPoints: [
              { x: 1990, y: 280 }, { x: 1995, y: 320 }, { x: 2000, y: 230 },
              { x: 2005, y: 160 }, { x: 2010, y: 100 }, { x: 2015, y: 70 }, { x: 2020, y: 45 },
            ],
            xMin: 1990, xMax: 2020, yMin: 0, yMax: 360, xStep: 5, yStep: 40,
          },
          caption: 'Reported cases of canine distemper in wild foxes in Europe, 1990–2020.',
        },
        ph: 'Vaccination of wild/domestic animals or culling of infected animals.',
      },
      {
        label: 'b',
        text: 'The feeding relationships in an ecosystem are shown in the food web above. Using the diagram, **identify** a food chain containing organisms that cannot be infected with canine distemper.',
        marks: 2,
        ph: 'Start with a producer; include organisms that are not mammals. E.g. Oak tree → caterpillars → song thrush (none are mammals).',
      },
      {
        label: 'c',
        text: 'Some red foxes in the ecosystem were infected with canine distemper. **Suggest** two possible consequences for other organisms present in the ecosystem. **Justify** your answers. You should use scientific language in your answer.',
        marks: 5,
        ph: 'Two consequences (e.g. vole increases, owl increases) each with scientific justification using predator/prey/population.',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Oral Fox Distemper Vaccine — Evaluation (16 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Oral Fox Distemper Vaccine — Evaluation',
    topicCanonical: 'Vaccination',
    topicGroup: 'Cells',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 16,
    stem: 'Canine distemper is a disease which affects wild and domestic animals across borders and in different regions. Many outbreaks in wildlife begin when the virus spreads from unvaccinated domestic dogs to wild foxes. One strategy to control distemper is to vaccinate wild foxes and prevent transmission between domestic dogs and wild populations. People in different regions have a shared responsibility to work together to develop an effective global solution. International conservation organisations have set targets to protect threatened mammal populations.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="vac2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="220" fill="#ffffff"/><text x="280" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Oral bait vaccine for wild foxes</text><ellipse cx="140" cy="150" rx="56" ry="26" fill="#caa46a" stroke="#8a6a2c"/><text x="140" y="155" font-size="11" text-anchor="middle" fill="#5a3d12">vaccine bait</text><g><ellipse cx="360" cy="140" rx="40" ry="22" fill="#e8772e" stroke="#a8531a"/><path d="M398,128 l16,-10 l-2,16 Z" fill="#e8772e" stroke="#a8531a"/><path d="M338,124 l-6,-12 l10,4 Z" fill="#e8772e"/><path d="M348,120 l-4,-12 l9,4 Z" fill="#e8772e"/><circle cx="346" cy="136" r="2.5" fill="#1f2d3a"/></g><path d="M200,150 q60,-6 122,-12" stroke="#0b7285" stroke-width="2" stroke-dasharray="5 4" fill="none" marker-end="url(#vac2)"/><text x="380" y="178" font-size="11" text-anchor="middle" fill="#495057">fox eats the bait and gains immunity</text></svg>',
      },
      caption: 'An oral bait vaccine is eaten by wild foxes, which then develop immunity without needing to be caught and injected.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Discuss** and **evaluate** the use of an oral vaccine to prevent the transmission of canine distemper from infected domestic dogs to wild foxes. In your answer, you should include:\n- an advantage and a disadvantage of using an oral vaccine rather than an injectable vaccine, with justification\n- a suggestion of why a method of controlling the fox population might be combined with the vaccine\n- an outline of the ethical considerations of using oral vaccines in wild foxes\n- a discussion of why economic and political collaboration is needed to solve global issues\n- a concluding statement',
        marks: 14,
        ph: 'Cover oral vs injectable vaccine, population-control rationale, ethics, global collaboration, conclusion.',
      },
      {
        label: 'b',
        text: 'An alternative strategy for controlling canine distemper is to give an anti-distemper vaccine directly to domestic dogs. **Suggest** an advantage and a disadvantage of vaccinating domestic dogs against canine distemper.',
        marks: 2,
        ph: 'Advantage: included in routine pet vaccination schedule / guaranteed dose. Disadvantage: not all dogs vaccinated / supply issues / side effects.',
      },
    ],
  },
]
