import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2018 · VARIANT 2  (isomorphic to biology-may-2018)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widgets, tags) in a NEW biological context — distinct from both the
// source AND variant 1 — with self-contained data-driven artefacts. Numbers recomputed.
//   Q1 Natural selection: peppered moths → grove snails (dark shell on woodland floor)
//   Q2 Carbon cycle/human impact → marine carbon cycle / ocean acidification
//   Q3 Reproduction & hormones → same construct, hormone-graph matching (new graph)
//   Q4 Enzyme pH (lactase/lactose) → amylase / starch, pH 3/7/11
//   Q5 Lactose-conc data → amylase enzyme-concentration plateau (new numbers)
//   Q6 Crit B temp-enzyme design → temperature & amylase design
//   Q7 Plant growth factors → photosynthesis requirements (new options)
//   Q8 Terracing vs vertical farming → crop rotation/cover crops vs aquaponics
//   Q9 Crit D landscape farming → mangrove clearance for coastal farming/aquaculture
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-may-2018-v2',
  subject: 'Biology',
  session: 'May',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Q1: Natural Selection — Grove Snails (11 marks, Criterion A) ──────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Natural Selection & Genetics',
    topicCanonical: 'Natural Selection',
    topicGroup: 'Evolution',
    topicsAlso: ['Inheritance & Variation'],
    marks: 11,
    stem: 'This question is about natural selection and genetics. Grove snails live in two habitats: on pale grassland and on the dark leaf-litter floor of a beech wood. Some snails have pale, yellow banded shells and others have dark brown unbanded shells. Thrushes hunt the snails by sight and smash them on stones.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="grass2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8e9b0"/><stop offset="1" stop-color="#aecf78"/></linearGradient><linearGradient id="leaf2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b5436"/><stop offset="1" stop-color="#3a2c19"/></linearGradient></defs><rect width="600" height="260" fill="#ffffff"/><rect x="20" y="40" width="270" height="180" rx="8" fill="url(#grass2)" stroke="#8bb058"/><rect x="310" y="40" width="270" height="180" rx="8" fill="url(#leaf2)" stroke="#241a0d"/><text x="155" y="32" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pale grassland</text><text x="445" y="32" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Dark leaf litter (beech wood)</text><g><path d="M95 140 a22 22 0 1 0 0.1 0 m-10 0 a12 12 0 1 0 0.1 0" fill="#f0e2a0" stroke="#c9b56a" stroke-width="2"/><path d="M75 140 q-16 8 -22 -2" stroke="#c9b56a" stroke-width="3" fill="none"/><text x="95" y="186" font-size="11" text-anchor="middle" fill="#7a6b28">pale banded (camouflaged)</text></g><g><path d="M210 175 a18 18 0 1 0 0.1 0 m-8 0 a10 10 0 1 0 0.1 0" fill="#5a3f22" stroke="#3a2814" stroke-width="2"/><text x="210" y="210" font-size="11" text-anchor="middle" fill="#5a4326">dark unbanded (visible)</text></g><g><path d="M385 140 a22 22 0 1 0 0.1 0 m-10 0 a12 12 0 1 0 0.1 0" fill="#f0e2a0" stroke="#c9b56a" stroke-width="2"/><text x="385" y="186" font-size="11" text-anchor="middle" fill="#ffe9b8">pale banded (visible)</text></g><g><path d="M500 175 a18 18 0 1 0 0.1 0 m-8 0 a10 10 0 1 0 0.1 0" fill="#4a3019" stroke="#241405" stroke-width="2"/><text x="500" y="210" font-size="11" text-anchor="middle" fill="#d8c9a8">dark unbanded (camouflaged)</text></g><text x="300" y="248" font-size="11" text-anchor="middle" fill="#9a8c70">thrushes hunt the snails by sight</text></svg>',
      },
      caption: 'Grove snails with pale banded or dark unbanded shells on pale grassland and on the dark leaf-litter floor of a beech wood. Thrushes hunt by sight.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the meaning of the term *population* in the context of the grove snails.',
        marks: 1,
        ph: 'A population is organisms of the same species living in the same area.',
      },
      {
        label: 'b',
        text: '**Describe** how natural selection results in the increase in frequency of the dark unbanded snails living on the dark leaf-litter floor of the beech wood.',
        marks: 3,
        ph: 'Reference to survival of fittest; beneficial traits survive to reproduce; frequency of trait increases...',
      },
      {
        label: 'c',
        text: '**Describe** how living on the dark leaf-litter floor selected for the dark unbanded snails and affected their frequency in the population.',
        marks: 4,
        ph: 'Background colour is dark; dark snails camouflaged; increased survival from predation; produced offspring with same shell colour...',
      },
      {
        label: 'd',
        text: 'On the pale grassland most grove snails have pale banded shells. The dark unbanded shell trait in these snails is recessive.\n\n**Explain** how the dark unbanded shell trait remained in the population on the grassland even though it was an undesirable trait there.',
        marks: 3,
        ph: 'Dark trait hidden by pale/dominant allele; not expressed in heterozygous individuals; only homozygous recessive show it...',
      },
    ],
  },

  // ── Q2: Carbon Cycle — Oceans (6 marks, Criterion A) ─────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Carbon Cycle & Human Impact',
    topicCanonical: 'Nutrient/Carbon/Nitrogen Cycles',
    topicGroup: 'Organisms',
    topicsAlso: ['Human Influences'],
    marks: 6,
    stem: 'The diagram shows the carbon cycle in the ocean, linking marine plants (phytoplankton), animals and dissolved carbon dioxide. The graph shows how the pH of surface seawater has changed over time as more carbon dioxide has dissolved into the ocean.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ahC" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker><linearGradient id="sea2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#4f9ac0"/></linearGradient></defs><rect width="640" height="320" fill="#ffffff"/><rect x="0" y="70" width="640" height="250" fill="url(#sea2)"/><line x1="0" y1="70" x2="640" y2="70" stroke="#3f7e98" stroke-width="2"/><text x="20" y="40" font-size="12" fill="#5b6b78">CO₂ in air</text><circle cx="100" cy="40" r="14" fill="#eef6fb" stroke="#5b6b78"/><text x="100" y="44" font-size="9" text-anchor="middle" fill="#5b6b78">CO₂</text><path d="M100 56 C 110 65, 130 66, 150 78" stroke="#0b7285" stroke-width="2" fill="none" marker-end="url(#ahC)"/><text x="120" y="92" font-size="9" fill="#0b7285">dissolves</text><g><circle cx="220" cy="150" r="6" fill="#2f9e44"/><circle cx="235" cy="140" r="5" fill="#37b24d"/><circle cx="212" cy="138" r="4" fill="#37b24d"/><text x="220" y="178" font-size="11" text-anchor="middle" fill="#1f5c2c">phytoplankton</text></g><g><ellipse cx="420" cy="200" rx="34" ry="18" fill="#5a8aa8" stroke="#2c5468"/><path d="M454 200 l16 -8 l0 16 Z" fill="#5a8aa8" stroke="#2c5468"/><circle cx="398" cy="195" r="2" fill="#fff"/><text x="420" y="232" font-size="11" text-anchor="middle" fill="#234a5e">fish</text></g><path d="M252 150 C 320 165, 360 185, 388 196" stroke="#2f9e44" stroke-width="2" fill="none" marker-end="url(#ahC)"/><text x="300" y="160" font-size="10" fill="#2f6b34">eaten</text><path d="M420 218 C 360 255, 280 200, 230 170" stroke="#f08c00" stroke-width="2" fill="none" marker-end="url(#ahC)"/><text x="300" y="262" font-size="10" fill="#b56b00">respiration / decay returns CO₂</text><path d="M205 145 C 170 120, 150 100, 150 80" stroke="#2f9e44" stroke-width="2" fill="none" marker-end="url(#ahC)"/><text x="120" y="128" font-size="10" fill="#2f6b34">photosynthesis takes up CO₂</text><text x="320" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">The carbon cycle in the ocean</text></svg>',
      },
      caption: 'The ocean carbon cycle: CO₂ dissolves from the air, phytoplankton take it up in photosynthesis, animals eat the plankton, and respiration and decay return CO₂.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** how marine plants (phytoplankton) and animals are connected in the carbon cycle.',
        marks: 3,
        ph: 'Animals eat phytoplankton; animals produce CO₂ during respiration; phytoplankton use CO₂ in photosynthesis; CO₂ produced when animals/plants decay...',
      },
      {
        label: 'b',
        text: 'Use information from the diagram and graph above to **describe** how human activity has led to a change in the carbon cycle.',
        marks: 3,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Surface seawater pH over time',
            xLabel: 'Year',
            yLabel: 'Seawater pH',
            dataPoints: [
              { x: 1980, y: 8.12 },
              { x: 1990, y: 8.10 },
              { x: 2000, y: 8.08 },
              { x: 2010, y: 8.06 },
              { x: 2020, y: 8.04 },
            ],
            xMin: 1980,
            xMax: 2020,
            yMin: 8.0,
            yMax: 8.2,
            xStep: 10,
            yStep: 0.05,
          },
          caption: 'As more carbon dioxide dissolves into the sea, the pH of surface seawater has fallen steadily (the ocean has become more acidic).',
        },
        ph: 'Burning fossil fuels / deforestation increases atmospheric CO₂; more CO₂ dissolves in the ocean; seawater becomes more acidic (pH falls); harms shells/coral...',
      },
    ],
  },

  // ── Q3: Reproduction & Hormones (8 marks, Criterion A) ───────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Reproduction, Variation & Hormones',
    topicCanonical: 'Reproduction',
    topicGroup: 'Evolution',
    topicsAlso: ['Receptors & Hormones', 'Inheritance & Variation'],
    marks: 8,
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the process that produces sperm and egg cells in organisms.',
        marks: 1,
        ph: 'Select one option.',
        widget: 'radio_select',
        widgetOptions: ['Mitosis', 'Meiosis', 'Photosynthesis', 'Diffusion'],
      },
      {
        label: 'b',
        text: '**Outline** how fertilization leads to variation in a population.',
        marks: 3,
        ph: 'Each parent has different genetic material; half genetic material comes from each parent; combination leads to new individual...',
      },
      {
        label: 'c',
        text: 'The table below gives information about the role of hormones involved in the menstrual cycle.\n\n| Hormone | Role |\n|---|---|\n| Oestrogen | Stops FSH being produced; causes egg to mature; thickens uterus lining; stimulates pituitary to release LH |\n| FSH (follicle stimulating hormone) | Stimulates the ovaries to release oestrogen |\n| LH (luteinising hormone) | Triggers ovulation |\n| Progesterone | Maintains thickening of uterus during middle part of cycle |\n\n**Analyse** the information in the table to label the key of the following graph by dragging the hormone names to the correct positions.',
        marks: 3,
        ph: 'Drag: FSH → first peak early cycle; LH → sharp peak at ovulation; Oestrogen → rises then dips; Progesterone → rises after ovulation.',
        widget: 'match_drag_drop',
        widgetItems: ['Follicle stimulating hormone (FSH)', 'Progesterone', 'Luteinising hormone (LH)', 'Oestrogen'],
        widgetOptions: ['Key position 1', 'Key position 2', 'Key position 3', 'Key position 4'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="320" fill="#ffffff"/><line x1="70" y1="270" x2="600" y2="270" stroke="#333" stroke-width="1.5"/><line x1="70" y1="270" x2="70" y2="30" stroke="#333" stroke-width="1.5"/><text x="335" y="305" font-size="12" text-anchor="middle" fill="#1f2d3a">Day of menstrual cycle</text><text x="28" y="150" font-size="12" text-anchor="middle" fill="#1f2d3a" transform="rotate(-90 28 150)">Relative hormone level</text><line x1="335" y1="270" x2="335" y2="40" stroke="#94a3ad" stroke-width="1" stroke-dasharray="4 4"/><text x="335" y="30" font-size="10" text-anchor="middle" fill="#94a3ad">ovulation (~day 14)</text><g font-size="10" fill="#5b6b78"><text x="70" y="286" text-anchor="middle">0</text><text x="202" y="286" text-anchor="middle">7</text><text x="335" y="286" text-anchor="middle">14</text><text x="468" y="286" text-anchor="middle">21</text><text x="600" y="286" text-anchor="middle">28</text></g><path d="M70,205 C150,200 240,195 320,205 C350,215 430,250 600,255" fill="none" stroke="#0b7285" stroke-width="2.5"/><text x="160" y="186" font-size="11" fill="#0b7285">1</text><path d="M70,255 C200,250 300,150 335,92 C370,150 470,248 600,252" fill="none" stroke="#2f9e44" stroke-width="2.5"/><text x="335" y="82" font-size="11" text-anchor="middle" fill="#2f9e44">2</text><path d="M70,252 C150,248 240,200 320,196 C328,196 333,200 340,206" fill="none" stroke="#f08c00" stroke-width="2.5"/><text x="230" y="188" font-size="11" fill="#b56b00">3</text><path d="M340,206 C400,200 460,125 510,118 C560,126 580,180 600,228" fill="none" stroke="#7a4fb5" stroke-width="2.5"/><text x="520" y="108" font-size="11" fill="#7a4fb5">4</text></svg>',
          },
          caption: 'Changing hormone levels through one menstrual cycle. Curves 1–4 must be matched to the four hormones in the key.',
        },
      },
      {
        label: 'd',
        text: 'The graph above shows changing hormone levels during the menstrual cycle.\n\nUse information from the table above to **suggest** one possible result if oestrogen did not stop the production of FSH.',
        marks: 1,
        ph: 'More than one egg could mature; could lead to twins or multiple embryos...',
      },
    ],
  },

  // ── Q4: Enzyme Investigation — pH (12 marks, Criterion B/C) ──────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Enzymes & Investigation Design',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    topicsAlso: ['Digestion'],
    marks: 12,
    stem: 'Enzymes are biological compounds that speed up biochemical reactions in organisms. Enzymes are a type of catalyst.\n\nThe graph below shows data about five enzymes found in the human digestive system.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Rate of reaction of five digestive enzymes against pH',
        xLabel: 'pH',
        yLabel: 'Relative rate of reaction',
        dataPoints: [
          { x: 2, y: 90 },
          { x: 4, y: 50 },
          { x: 7, y: 82 },
          { x: 9, y: 60 },
          { x: 12, y: 18 },
        ],
        xMin: 0,
        xMax: 14,
        yMin: 0,
        yMax: 100,
        xStep: 2,
        yStep: 20,
      },
      caption: 'Each digestive enzyme works fastest at a different optimum pH along the gut (e.g. pepsin at acidic pH ~2, others nearer neutral or alkaline).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Interpret** the graph and use your scientific knowledge to drag and drop the correct enzyme to the correct location in the human body.',
        marks: 4,
        ph: 'Salivary amylase → mouth; Pepsin → stomach; Trypsin → small intestine/pancreas; Carbonic anhydrase → small intestine; Alkaline phosphatase → intestinal wall.',
        widget: 'match_drag_drop',
        widgetItems: ['Salivary amylase', 'Pepsin', 'Trypsin', 'Carbonic anhydrase', 'Alkaline phosphatase'],
        widgetOptions: ['Mouth/Salivary glands', 'Stomach', 'Small intestine (upper)', 'Small intestine / Pancreas', 'Intestinal wall (lower)'],
      },
      {
        label: 'b',
        text: 'A group of students investigated the effect of pH on enzyme-based reactions using amylase and starch at pH 3, 7 and 11 at 37°C. Iodine solution turns from blue-black back to orange when all the starch has been broken down, showing when the reaction is complete.\n\n**Formulate** a research question for this investigation.',
        marks: 1,
        ph: 'How does pH affect the time taken / the rate at which amylase breaks down starch?',
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation.',
        marks: 4,
        ph: 'IV: pH. DV: time for the iodine colour change. CV (any 2): amount of starch, amount of amylase, volume of water, concentration of enzyme, temperature, type of enzyme.',
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: ['pH', 'Time for the iodine colour change', 'Amount of starch/substrate', 'Volume of water', 'Temperature', 'Amount of amylase/enzyme'],
      },
      {
        label: 'd',
        text: 'Amylase is an enzyme present in the human digestive system.\n\n**Explain** why the values of pH chosen in the investigation above will not give sufficient relevant data.',
        marks: 3,
        ph: 'Range too wide / not relevant to where amylase works; insufficient number of values; no repeats/minimum 3 trials needed...',
      },
    ],
  },

  // ── Q5: Enzyme Concentration Investigation (21 marks, Criterion A/C) ──────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis — Enzyme Concentration',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    marks: 21,
    stem: 'The students knew that each enzyme molecule could be used multiple times but wondered if the concentration of amylase would affect the time of reaction. The students conducted an investigation changing the concentration of amylase and timing how long the iodine took to change colour. The students hypothesised that if the concentration of amylase increases, then the time to change colour would be shorter because more enzyme would be interacting with the starch.\n\n| Concentration of amylase / gdm⁻³ | Time for iodine colour change / s |\n|---|---|\n| 2 | 90 |\n| 4 | 72 |\n| 6 | 71 |\n| 8 | 54 |\n| 10 | 49 |\n| 12 | 48 |\n| 14 | 47 |',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Concentration of amylase / g dm⁻³', 'Time for iodine colour change / s'],
        rows: [
          ['2', '90'],
          ['4', '72'],
          ['6', '71'],
          ['8', '54'],
          ['10', '49'],
          ['12', '48'],
          ['14', '47'],
        ],
      },
      caption: 'Time for the iodine colour change at different amylase concentrations (starch fixed). The trend falls steeply then plateaus.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the enzyme that breaks down starch.',
        marks: 1,
        ph: 'The enzyme is...',
      },
      {
        label: 'b',
        text: '**Plot** the data from the table on the axes below, add values to both axes and label the *y* axis.',
        marks: 5,
        ph: 'y-axis: Time for iodine colour change / s (with unit). x-axis values evenly spaced. All 7 points plotted correctly ± 1 unit on candidate\'s scale.',
      },
      {
        label: 'c',
        text: '**State** the unit that is missing from the *x* axis.',
        marks: 1,
        ph: 'The missing unit is...',
      },
      {
        label: 'd',
        text: 'Use scientific reasoning to **explain** the trend shown by the data in the graph above.',
        marks: 6,
        ph: 'As amylase concentration increases, time decreases (negative trend); more enzyme interacts with starch; at plateau all starch being broken down quickly / substrate limiting; one correct scientific term used (active site, substrate, amylase)...',
      },
      {
        label: 'e',
        text: 'The students hypothesised that if the concentration of amylase increases, then the time to change colour would be shorter because more enzyme would be interacting with the starch.\n\nUsing the graph, **evaluate** the validity of the students\' hypothesis.',
        marks: 5,
        ph: 'Valid at lower concentrations (time decreasing); not valid at higher concentrations (plateau reached); all starch being broken down / substrate now limiting; hypothesis partly valid...',
      },
      {
        label: 'f',
        text: '**State** one improvement to the investigation. **Justify** your answer.',
        marks: 2,
        ph: 'Improvement: more trials / extend range of concentrations / use a colorimeter. Justification: linked to improvement...',
      },
      {
        label: 'g',
        text: 'The action of enzymes is temperature dependent. **State** one extension to the enzyme investigation other than changing the temperature or pH.',
        marks: 1,
        ph: 'Change the concentration of the substrate/starch...',
      },
    ],
  },

  // ── Q6: Temperature Enzyme Design Investigation (18 marks, Criterion B) ───────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Temperature & Enzymes',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    marks: 18,
    stem: 'In a third enzyme investigation using amylase and starch, the students wanted to study the effects of temperature on enzyme activity.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wbath2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe9f6"/><stop offset="1" stop-color="#8fc7e3"/></linearGradient></defs><rect width="600" height="300" fill="#ffffff"/><rect x="40" y="150" width="220" height="110" rx="6" fill="url(#wbath2)" stroke="#3f7e98"/><text x="150" y="278" font-size="11" text-anchor="middle" fill="#2c5468">water bath at set temperature</text><rect x="90" y="90" width="40" height="110" rx="6" fill="#eef6fb" stroke="#5b6b78"/><rect x="90" y="150" width="40" height="50" fill="#cdb3d8" stroke="#5b6b78"/><text x="110" y="86" font-size="10" text-anchor="middle" fill="#5b6b78">tube: amylase + starch</text><rect x="178" y="70" width="14" height="130" rx="6" fill="#fbe9ec" stroke="#c0392b"/><rect x="178" y="150" width="14" height="50" fill="#c0392b"/><circle cx="185" cy="205" r="9" fill="#c0392b"/><text x="185" y="60" font-size="10" text-anchor="middle" fill="#c0392b">thermometer</text><g><rect x="330" y="70" width="220" height="90" rx="6" fill="#fbfbf0" stroke="#c9c19a"/><text x="440" y="62" font-size="11" text-anchor="middle" fill="#8a7d2a">spotting tile + iodine</text><circle cx="370" cy="115" r="10" fill="#1f2a44"/><circle cx="410" cy="115" r="10" fill="#3a4a6a"/><circle cx="450" cy="115" r="10" fill="#7a6a4a"/><circle cx="490" cy="115" r="10" fill="#e0922e"/><circle cx="525" cy="115" r="10" fill="#e8a84e"/><text x="370" y="150" font-size="9" text-anchor="middle" fill="#5b6b78">starch present</text><text x="500" y="150" font-size="9" text-anchor="middle" fill="#5b6b78">starch gone</text></g><text x="300" y="195" font-size="11" fill="#1f2d3a">Sample drops of the mixture into iodine at intervals.</text><text x="300" y="213" font-size="11" fill="#1f2d3a">Time how long until the blue-black colour no longer forms.</text></svg>',
      },
      caption: 'Apparatus to investigate the effect of temperature on amylase activity: a water bath, a tube of amylase and starch, a thermometer, and a spotting tile with iodine to time when the starch has been broken down.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation into the effect of temperature on enzyme activity. In your design, you should:\n\n- identify the independent, dependent and two control variables\n- formulate a testable hypothesis with a scientific explanation\n- describe how you will manipulate the variables\n- describe the method\n- state how you will make sure your method is safe',
        marks: 18,
        ph: 'IV: temperature. DV: time for the iodine colour change (time to break down the starch). CV: amount/concentration of starch, volume/concentration of amylase. Hypothesis: As temperature increases, time to change colour decreases (up to optimal), because enzymes work faster at higher temperatures. Above optimal temperature enzymes denature and reaction stops. Method: set water baths at different temperatures (e.g. 10, 20, 30, 37, 50°C); add fixed volume of amylase + starch; sample into iodine until no blue-black colour; record time; repeat 3 times. Safety: handle hot water/glassware carefully; iodine is an irritant — wear goggles.',
      },
    ],
  },

  // ── Q7: Plant Growth Factors (4 marks, Criterion A/D) ────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Plant Growth & Photosynthesis',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 4,
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sun7b" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="560" height="280" fill="#ffffff"/><circle cx="80" cy="60" r="28" fill="url(#sun7b)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="118" y1="58" x2="200" y2="92"/><line x1="118" y1="70" x2="200" y2="104"/></g><text x="80" y="106" font-size="11" text-anchor="middle" fill="#9a7d0f">light</text><rect x="170" y="210" width="220" height="42" rx="6" fill="#cdb892" stroke="#9a8458"/><text x="280" y="236" font-size="11" text-anchor="middle" fill="#6b5a36">soil (water + nutrients)</text><path d="M280 130 q-46 -30 -14 -60 q36 28 14 60" fill="#2f9e44"/><path d="M280 110 q46 -26 14 -54 q-36 28 -14 54" fill="#37b24d"/><rect x="276" y="120" width="8" height="92" fill="#2f6b34"/><path d="M280 160 q-52 -14 -18 -42 q42 20 18 42" fill="#37b24d"/><path d="M280 175 q52 -12 18 -40 q-42 20 -18 40" fill="#2f9e44"/><g><path d="M110 252 l30 -16 l0 32 Z" fill="#9bb9cf"/><text x="96" y="246" font-size="10" fill="#0b7285">water uptake</text></g><g><circle cx="430" cy="118" r="14" fill="#eef6fb" stroke="#5b6b78"/><text x="430" y="122" font-size="10" text-anchor="middle" fill="#5b6b78">CO₂</text></g><text x="430" y="148" font-size="10" text-anchor="middle" fill="#5b6b78">carbon dioxide from air</text><text x="280" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Factors a plant needs to grow</text></svg>',
      },
      caption: 'A green plant receives light, water and nutrients from the soil, and carbon dioxide from the air.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** all the factors needed for plant growth.',
        marks: 2,
        ph: 'Light, Water, Nutrients and Carbon dioxide.',
        widget: 'radio_select',
        widgetOptions: [
          'Light, Water, Nutrients and Carbon dioxide',
          'Glucose, Light, Oxygen and Water',
          'Light, Oxygen, Nutrients and Carbon dioxide',
          'Glucose, Water, Nutrients and Oxygen',
        ],
      },
      {
        label: 'b',
        text: 'For **one** of the factors you selected in part (a), **outline** the role of this factor in plant growth.',
        marks: 2,
        ph: 'e.g. Water: used as a raw material in photosynthesis and to transport nutrients / keep cells turgid for growth...',
      },
    ],
  },

  // ── Q8: Crop Rotation vs Aquaponics — Compare (5 marks, Criterion D) ──────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Farming Methods — Compare & Contrast',
    topicCanonical: 'Human Influences',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitat Change & Destruction'],
    marks: 5,
    stem: 'In open-field farming, farmers use crop rotation and plant cover crops between harvests to keep the soil fertile and to stop bare soil being washed away by rain. In an aquaponic greenhouse, fish and plants are grown together indoors: waste from the fish provides nutrients for the plants, the plants clean the water for the fish, and the light, temperature and water are all controlled.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="field8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe6a8"/><stop offset="1" stop-color="#9cc06a"/></linearGradient></defs><rect width="640" height="280" fill="#ffffff"/><text x="160" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Crop rotation + cover crops</text><rect x="30" y="120" width="270" height="120" rx="6" fill="url(#field8)" stroke="#7a9c4e"/><g fill="#2f9e44"><rect x="55" y="150" width="4" height="24"/><rect x="80" y="148" width="4" height="26"/><rect x="105" y="152" width="4" height="22"/><rect x="130" y="150" width="4" height="24"/></g><g fill="#37b24d"><rect x="180" y="160" width="3" height="14"/><rect x="200" y="158" width="3" height="16"/><rect x="220" y="160" width="3" height="14"/><rect x="240" y="158" width="3" height="16"/><rect x="260" y="160" width="3" height="14"/></g><text x="105" y="262" font-size="10" text-anchor="middle" fill="#5f7a3a">crop A</text><text x="220" y="262" font-size="10" text-anchor="middle" fill="#5f7a3a">cover crop protects soil</text><text x="480" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Aquaponic greenhouse</text><polygon points="350,200 610,200 610,100 480,55 350,100" fill="#eaf6fb" stroke="#7fb2c9"/><rect x="370" y="150" width="220" height="20" rx="4" fill="#0b7285" opacity="0.45"/><text x="480" y="190" font-size="10" text-anchor="middle" fill="#0b7285">fish tank water (nutrients)</text><g fill="#2f9e44"><rect x="390" y="130" width="4" height="20"/><rect x="420" y="130" width="4" height="20"/><rect x="450" y="130" width="4" height="20"/><rect x="510" y="130" width="4" height="20"/><rect x="540" y="130" width="4" height="20"/></g><ellipse cx="430" cy="160" rx="10" ry="5" fill="#5a8aa8"/><ellipse cx="520" cy="162" rx="10" ry="5" fill="#5a8aa8"/><circle cx="400" cy="78" r="9" fill="#f0c419"/><text x="480" y="244" font-size="11" text-anchor="middle" fill="#0b7285">fish + plants share water; light, heat and nutrients controlled</text></svg>',
      },
      caption: 'Crop rotation with cover crops in an open field (left) and a soil-free aquaponic greenhouse where fish and plants share recirculated water (right).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Compare and contrast** how the needs of the crops have been met in crop rotation/cover-crop farming and aquaponic farming. **Justify** your answers.',
        marks: 5,
        ph: 'Similarity: both keep the crops supplied with nutrients / both protect or reuse resources / both aim to maximise yield. Difference: rotation uses natural light vs aquaponics can control light; rotation relies on rainfall/climate vs aquaponics recirculates water; rotation protects soil from erosion with cover crops vs aquaponics has no soil/erosion; nutrients come from the soil/cover crops vs from fish waste in a controlled solution...',
      },
    ],
  },

  // ── Q9: Mangrove Clearance — Discuss & Evaluate (15 marks, Criterion D) ───────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Human Impact on Landscape — Evaluation',
    topicCanonical: 'Human Influences',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Mitigation of Adverse Effects'],
    marks: 15,
    stem: 'Using information from the reading passage about how people clear coastal mangrove forests to create rice paddies and shrimp ponds.',
    tasks: [
      {
        label: '',
        text: 'Using information from the video, **discuss** and **evaluate** how humans have changed their natural coastal landscape by clearing mangrove forests to optimise their local environment for farming and aquaculture. In your answer, you should include:\n\n- a discussion of how the landscape has been changed\n- scientific justification of the changes to the landscape\n- advantages of changing the landscape\n- disadvantages of changing the landscape\n- an economic impact or a social impact\n- a concluding appraisal.',
        marks: 15,
        ph: 'Change: mangroves cleared and the land flattened/embanked to make rice paddies and shrimp ponds; channels and bunds built. Scientific justification: creates flat fertile land / controls salt water / allows water to be managed for crops and fish. Advantages: more farmland and food / income from shrimp exports. Disadvantages: loss of mangrove habitat & nursery for fish / loss of coastal protection from storms and erosion / release of stored carbon / saltwater intrusion. Economic/social: jobs and export income vs cost when storms or disease hit the ponds. Appraisal: profitable in the short term but trades off coastal protection and long-term sustainability...',
      },
    ],
  },
]
