import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2024 · VARIANT 2  (isomorphic to biology-may-2024)
// Same crit, command demand, marks (task + question + paper total = 98), widgets,
// task structure and taxonomy tokens as the source. Only the SURFACE changes —
// new species / ecosystem / data — and every figure is a self-contained
// data-driven artefact (no figImages). v2 ≠ v1 ≠ source in scenario AND artefact.
// All answers recomputed in markscheme.ts.
//   Q1 Life processes / homeostasis / SA:V : elephant ears → fennec-fox ears;
//      maple+cactus leaves → banana leaf + pine needle
//   Q2 Food web + species classification : N. Pacific Ocean → Antarctic Southern
//      Ocean; killer-whale types → leopard-seal populations
//   Q3 Tree-age by growth factor : beech (GF 1.00) → coast redwood (GF 1.00,
//      circ 314 cm → 100 yr)
//   Q4 Age–height field investigation : sycamore → Norway spruce (GF 1.34,
//      circ 200 cm → 85 yr)
//   Q5 Falling-model experiment (Crit C) : paper helicopter → paper "winged-seed"
//      glider strip (model for an ash key / samara)
//   Q6 Crit B design : wing angle → number of paperclips (mass) on the glider
//   Q7 Dehydration / osmosis / desalination (Crit D) : reverse osmosis →
//      distillation desalination plant
//   Q8 Nutrient cycle + sustainability (Crit D) : water cycle → NITROGEN cycle
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string
  subject: string
  session: string
  year: number
  totalMarks: number
  durationMinutes: number
  criteria: string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2024-v2',
  subject: 'Biology',
  session: 'May',
  year: 2024,
  totalMarks: 98,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Question 1 — Criterion A (11 marks) ─────────────────────────────────────
  // Life processes, homeostasis, surface area to volume ratio
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Life Processes & Homeostasis',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Tissues, Organs & Systems'],
    marks: 11,
    tasks: [
      {
        label: 'a',
        text: 'Select the function described by each of the definitions below.\n\n• Chemical reactions that take place inside an organism\n• Movement of the whole organism from place to place\n• Release of energy from food inside cells',
        marks: 2,
        ph: 'Select the matching life process for each definition.',
        widget: 'inline_dropdown_select',
        widgetOptions: ['Excretion', 'Growth', 'Metabolism', 'Movement', 'Nutrition', 'Reproduction', 'Respiration'],
        widgetItems: ['Chemical reactions that take place inside an organism', 'Movement of the whole organism from place to place', 'Release of energy from food inside cells'],
      },
      {
        label: 'b',
        text: 'Homeostasis is the maintenance of a stable internal environment. The diagram shows a fennec fox, a desert animal with very large ears. Outline how a fennec fox\'s ears help to maintain its body temperature.',
        marks: 2,
        ph: 'Describe how fennec fox ears help regulate body temperature...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="furF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0dcb8"/><stop offset="1" stop-color="#d6b483"/></linearGradient><marker id="heatF" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f08c00"/></marker></defs><rect width="520" height="300" fill="#ffffff"/><ellipse cx="200" cy="220" rx="80" ry="46" fill="url(#furF)" stroke="#b8915c"/><circle cx="250" cy="150" r="40" fill="url(#furF)" stroke="#b8915c"/><path d="M232,120 Q210,30 250,46 Q262,110 244,134 Z" fill="#f3e6cc" stroke="#cda36c"/><path d="M256,120 Q252,28 296,52 Q272,110 266,132 Z" fill="#f3e6cc" stroke="#cda36c"/><path d="M240,116 q-16,-58 -4,-78" stroke="#c98a3c" stroke-width="1.5" fill="none"/><path d="M260,116 q4,-58 20,-74" stroke="#c98a3c" stroke-width="1.5" fill="none"/><circle cx="262" cy="148" r="4" fill="#2b2118"/><path d="M270,160 q8,4 14,0" stroke="#2b2118" stroke-width="2" fill="none"/><text x="320" y="56" font-size="12" fill="#9c7a4a">large thin ears</text><line x1="300" y1="70" x2="370" y2="54" stroke="#f08c00" stroke-width="2" marker-end="url(#heatF)"/><line x1="306" y1="92" x2="378" y2="84" stroke="#f08c00" stroke-width="2" marker-end="url(#heatF)"/><line x1="300" y1="112" x2="372" y2="114" stroke="#f08c00" stroke-width="2" marker-end="url(#heatF)"/><text x="382" y="104" font-size="12" fill="#f08c00">heat lost</text><line x1="120" y1="266" x2="280" y2="266" stroke="#e0c089" stroke-width="3"/><text x="130" y="288" font-size="11" fill="#9c7a4a">hot desert sand</text></svg>',
          },
          caption: 'A fennec fox. Its large, thin ears are rich in blood vessels close to the surface.',
        },
      },
      {
        label: 'c',
        text: 'Plants have adapted to their environments by evolving a variety of leaf shapes and sizes. Tropical rainforest plants, like the banana plant, have very large broad leaves that grow quickly in the warm, wet understorey.\n\nOutline one possible advantage of banana leaves having a large surface area.',
        marks: 2,
        ph: 'State and briefly explain one advantage of large surface area in banana leaves...',
      },
      {
        label: 'd',
        text: 'Other plants, like the pine tree found in cold northern forests, have thin needle-shaped leaves with a very small surface area.\n\nOutline one possible advantage of pine needles having a small surface area.',
        marks: 2,
        ph: 'State and briefly explain one advantage of small surface area in pine needles...',
      },
      {
        label: 'e',
        text: 'All cells need to obtain nutrients and eliminate waste efficiently. Because of this, cells are limited in size by the relationship between their surface area and their volume.\n\nExplain why having a high surface area to volume ratio is beneficial to a cell.',
        marks: 3,
        ph: 'Explain the benefit of a high SA:V ratio for cells, referencing nutrient uptake and waste removal...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 500 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="dffB" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="500" height="230" fill="#ffffff"/><rect x="50" y="70" width="50" height="50" fill="#d3f9d8" stroke="#2f9e44" stroke-width="2"/><text x="75" y="140" font-size="11" text-anchor="middle" fill="#1f7a36">small cell</text><text x="75" y="154" font-size="10" text-anchor="middle" fill="#1f7a36">high SA:V</text><g stroke="#0b7285" stroke-width="2" marker-end="url(#dffB)"><line x1="38" y1="80" x2="60" y2="80"/><line x1="112" y1="110" x2="90" y2="110"/></g><rect x="300" y="40" width="120" height="120" fill="#d3f9d8" stroke="#2f9e44" stroke-width="2"/><text x="360" y="180" font-size="11" text-anchor="middle" fill="#1f7a36">large cell</text><text x="360" y="194" font-size="10" text-anchor="middle" fill="#1f7a36">low SA:V</text><circle cx="360" cy="100" r="9" fill="#f08c00"/><text x="360" y="226" font-size="10" text-anchor="middle" fill="#7a3d12">centre far from surface — slow diffusion</text><g stroke="#0b7285" stroke-width="2" marker-end="url(#dffB)"><line x1="288" y1="60" x2="316" y2="60"/></g></svg>',
          },
          caption: 'A small cell (high SA:V) exchanges materials quickly; in a large cell (low SA:V) the centre is far from the surface.',
        },
      },
    ],
  },

  // ── Question 2 — Criterion A (12 marks) ─────────────────────────────────────
  // Antarctic Southern Ocean food web + leopard-seal population classification
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Ecosystems & Food Webs',
    topicCanonical: 'Food Chains & Webs',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Interdependency'],
    marks: 12,
    stem: 'Below is a food web from the Antarctic Southern Ocean.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Antarctic Southern Ocean food web',
        nodes: [
          { id: 'phyto', label: 'Phytoplankton', color: '#2f9e44', detail: 'Producer (trophic level 1) — makes food by photosynthesis.' },
          { id: 'krill', label: 'Antarctic krill', color: '#37b24d', detail: 'Primary consumer (level 2) — grazes on phytoplankton.' },
          { id: 'silverfish', label: 'Antarctic silverfish', color: '#94d82d', detail: 'Secondary consumer (level 3) — eats krill.' },
          { id: 'adelie', label: 'Adélie penguin', color: '#f08c00', detail: 'Eats krill and silverfish (levels 3–4).' },
          { id: 'squid', label: 'Squid', color: '#e8772e', detail: 'Eats silverfish (level 4).' },
          { id: 'leopard', label: 'Leopard seal', color: '#0b7285', detail: 'Predator — eats penguins (level 4–5).' },
          { id: 'orca', label: 'Orca', color: '#c2255c', detail: 'Apex predator — eats squid and leopard seals.' },
        ],
        edges: [
          { from: 'phyto', to: 'krill' },
          { from: 'krill', to: 'silverfish' },
          { from: 'krill', to: 'adelie' },
          { from: 'silverfish', to: 'adelie' },
          { from: 'silverfish', to: 'squid' },
          { from: 'adelie', to: 'leopard' },
          { from: 'squid', to: 'orca' },
          { from: 'leopard', to: 'orca' },
        ],
      },
      caption: 'Arrows point from each organism to the organism that eats it (direction of energy flow).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the food web above, construct a food chain that consists of five species including the leopard seal at the fourth trophic level.',
        marks: 3,
        ph: 'Write out a 5-species food chain with leopard seal at the 4th trophic level...',
        widget: 'match_drag_drop',
        widgetItems: ['Adélie penguin', 'Antarctic krill', 'Antarctic silverfish', 'Leopard seal', 'Orca', 'Phytoplankton', 'Squid'],
        widgetOptions: ['Trophic level 1', 'Trophic level 2', 'Trophic level 3', 'Trophic level 4 (leopard seal)', 'Trophic level 5'],
      },
      {
        label: 'b',
        text: 'State the trophic levels at which the orca feeds.',
        marks: 2,
        ph: 'State which trophic level(s) the orca occupies...',
      },
      {
        label: 'c',
        text: 'There are three different populations of leopard seal living around different parts of Antarctica. Each population has slightly different body size and markings and feeds on a different mix of prey.\n\nComment on whether the three different populations of leopard seal should be classified as three different species.',
        marks: 3,
        ph: 'Discuss species classification based on physical features and diet differences...',
      },
      {
        label: 'd',
        text: 'Scientists have mapped the genomes of the different leopard-seal populations. Suggest how this information could help scientists to decide whether the seal populations should be classified as different species.',
        marks: 4,
        ph: 'Explain how genome mapping can inform species classification...',
      },
    ],
  },

  // ── Question 3 — Criterion B (10 marks) ─────────────────────────────────────
  // Tree age estimation using growth factor values — COAST REDWOOD
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Measurement & Tree Biology',
    topicCanonical: 'Life Cycles',
    topicGroup: 'Evolution',
    marks: 10,
    stem: 'The oldest living tree is thought to be over 5000 years old. The age of a tree can be estimated using growth factor values. Trees that grow faster have a higher growth factor. Different tree species have different growth factors.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="rwTrunk" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7d3f24"/><stop offset="0.5" stop-color="#b5602f"/><stop offset="1" stop-color="#6b3219"/></linearGradient></defs><rect width="460" height="260" fill="#ffffff"/><ellipse cx="150" cy="70" rx="78" ry="44" fill="#2f9e44"/><ellipse cx="150" cy="52" rx="46" ry="30" fill="#37b24d"/><rect x="130" y="110" width="40" height="120" fill="url(#rwTrunk)" stroke="#4d2412"/><line x1="118" y1="180" x2="182" y2="180" stroke="#0b7285" stroke-width="2"/><line x1="118" y1="176" x2="118" y2="184" stroke="#0b7285" stroke-width="2"/><line x1="182" y1="176" x2="182" y2="184" stroke="#0b7285" stroke-width="2"/><text x="150" y="170" font-size="11" text-anchor="middle" fill="#0b7285">circumference</text><line x1="150" y1="230" x2="150" y2="250" stroke="#94a3ad" stroke-width="1" stroke-dasharray="3 3"/><text x="150" y="250" font-size="10" text-anchor="middle" fill="#94a3ad">measured at 135 cm height</text><line x1="40" y1="230" x2="420" y2="230" stroke="#6b3219" stroke-width="3"/><text x="330" y="60" font-size="13" font-weight="700" fill="#2f9e44">Coast redwood</text></svg>',
      },
      caption: 'The circumference of a tree trunk is measured 135 cm above the ground.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A student wants to measure the circumference of a tree trunk at a height of 135 cm above the ground. Select the most appropriate piece of equipment to measure the circumference of the tree trunk.',
        marks: 1,
        ph: 'Select the best measuring instrument.',
        widget: 'radio_select',
        widgetOptions: ['Ruler', 'Tape measure', 'Protractor', 'Thermometer'],
      },
      {
        label: 'b',
        text: 'A student measures the circumference of a coast redwood tree trunk at a height of 135 cm. The circumference is 314 cm. The growth factor for a coast redwood is 1.00.\n\nUse the formula below to estimate the age of the redwood tree. Show your working.\n\nage (years) = (circumference in cm ÷ π) × growth factor',
        marks: 3,
        ph: 'Show your calculation step by step. Age = (circumference ÷ π) × growth factor',
        ans: '100',
      },
      {
        label: 'c',
        text: 'An alternative method for estimating tree age is counting growth rings in the cross section of a trunk. Growth rings occur because trees grow faster in the spring and summer and slower in the autumn.\n\nOutline why counting both the light and dark rings would not accurately estimate the age of the tree.',
        marks: 2,
        ph: 'Explain why counting both light and dark rings is inaccurate...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="260" height="260" fill="#ffffff"/><circle cx="130" cy="130" r="120" fill="#dcae7c" stroke="#6b3219"/><circle cx="130" cy="130" r="106" fill="none" stroke="#6b3219" stroke-width="6"/><circle cx="130" cy="130" r="90" fill="none" stroke="#f0d6ad" stroke-width="6"/><circle cx="130" cy="130" r="74" fill="none" stroke="#6b3219" stroke-width="6"/><circle cx="130" cy="130" r="58" fill="none" stroke="#f0d6ad" stroke-width="6"/><circle cx="130" cy="130" r="42" fill="none" stroke="#6b3219" stroke-width="6"/><circle cx="130" cy="130" r="26" fill="none" stroke="#f0d6ad" stroke-width="6"/><circle cx="130" cy="130" r="7" fill="#6b3219"/><text x="130" y="252" font-size="11" text-anchor="middle" fill="#5b2d18">dark = autumn ring · light = spring/summer ring</text></svg>',
          },
          caption: 'Cross section of a redwood trunk showing alternating light and dark growth rings.',
        },
      },
      {
        label: 'd',
        text: 'Justify why cutting near the base of the tree gives a more valid estimate of the tree\'s age.',
        marks: 1,
        ph: 'Justify why the base gives the most accurate ring count...',
      },
      {
        label: 'e',
        text: 'The cross sections show the same species of tree of the same age — one grown in a temperate climate and one grown in a tropical climate.\n\nIdentify a limitation of each method used to estimate the age of trees.\n\n• Growth factor values\n• Counting rings',
        marks: 3,
        ph: 'State one limitation of the growth factor method and one limitation of counting rings...',
      },
    ],
  },

  // ── Question 4 — Criterion B (13 marks) ─────────────────────────────────────
  // Norway spruce age vs height investigation
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Data Collection & Analysis',
    topicCanonical: 'Life Cycles',
    topicGroup: 'Evolution',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 13,
    stem: 'Some MYP students wanted to investigate the relationship between the age and height of Norway spruce trees growing in their local forest. The forest had over 700 spruce trees. After discussing with their teacher how height could be estimated, they collected data on a sample of 20 randomly selected spruce trees.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="220" fill="#ffffff"/><g fill="#2f9e44"><polygon points="70,182 52,182 61,154"/><polygon points="72,168 50,168 61,136"/><polygon points="74,154 48,154 61,118"/></g><rect x="58" y="182" width="6" height="14" fill="#5d3f23"/><g fill="#37b24d"><polygon points="160,182 130,182 145,140"/><polygon points="163,164 127,164 145,114"/><polygon points="166,146 124,146 145,90"/></g><rect x="141" y="182" width="8" height="16" fill="#5d3f23"/><g fill="#2f9e44"><polygon points="270,182 232,182 251,124"/><polygon points="274,160 228,160 251,92"/><polygon points="278,138 224,138 251,62"/></g><rect x="246" y="182" width="10" height="18" fill="#5d3f23"/><line x1="40" y1="196" x2="320" y2="196" stroke="#5d3f23" stroke-width="3"/><text x="61" y="214" font-size="10" text-anchor="middle" fill="#5d3f23">young</text><text x="251" y="214" font-size="10" text-anchor="middle" fill="#5d3f23">older &amp; taller</text><text x="410" y="60" font-size="13" font-weight="700" fill="#2f9e44">Spruce forest</text><text x="410" y="84" font-size="11" fill="#495057">700+ trees · sample 20</text></svg>',
      },
      caption: 'Norway spruce trees of different ages; older trees tend to be taller.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Suggest why the sample of 20 spruce trees was randomly selected.',
        marks: 2,
        ph: 'Explain the purpose of random sampling in this investigation...',
      },
      {
        label: 'b',
        text: 'Outline how the sample could be randomly selected.',
        marks: 1,
        ph: 'Describe a method for randomly selecting trees from the forest...',
      },
      {
        label: 'c',
        text: 'The students collected the following data from five of the 20 trees:\n\n| Age (years) | Height (m) |\n|-------------|------------|\n| 90          | 28         |\n| 60          | 22         |\n| 30          | 15         |\n| 15          | 9          |\n| 5           | 4          |\n\nPlot the data from the table on the grid. Draw a line of best fit.',
        marks: 5,
        ph: 'Plot all 5 data points and draw a line of best fit. Marks: axes labelled (1), correct scale (1), all points plotted (2), line of best fit (1).',
        widget: 'radio_select',
        widgetOptions: ['I have plotted the points and drawn a line of best fit'],
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Age / years', 'Height / m'],
            rows: [['90', '28'], ['60', '22'], ['30', '15'], ['15', '9'], ['5', '4']],
          },
          caption: 'Age and height of five sampled Norway spruce trees.',
        },
      },
      {
        label: 'd',
        text: 'Using your graph, deduce the growth rate of the spruce tree in metres per year.',
        marks: 2,
        ph: 'Calculate growth rate from the graph (change in height ÷ change in age)...',
      },
      {
        label: 'e',
        text: 'The students used their graph to predict the height of a 120-year-old spruce tree. Outline one reason why this prediction may not be reliable.',
        marks: 2,
        ph: 'Explain why extrapolating the graph may give an unreliable prediction...',
      },
      {
        label: 'f',
        text: 'The growth factor for a Norway spruce is 1.34. Calculate the age of a spruce tree with a circumference of 200 cm. Show your working.',
        marks: 1,
        ph: 'Use age = (circumference ÷ π) × growth factor to calculate the spruce\'s age.',
      },
    ],
  },

  // ── Question 5 — Criterion C (10 marks) ─────────────────────────────────────
  // Paper "winged-seed" glider strip (model for an ash key / samara)
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Experimental Design — Winged-Seed Glider Model',
    marks: 10,
    stem: 'A model of a winged seed (such as an ash key) is made from a strip of paper folded into a single wing with a paperclip at one end. The model spins and glides as it falls. The time spent in the air is measured for three different drop heights.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="glA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="460" height="320" fill="#ffffff"/><line x1="60" y1="30" x2="60" y2="290" stroke="#5b6b78" stroke-width="2"/><g font-size="10" fill="#5b6b78"><text x="20" y="64">2.0 m</text><text x="20" y="164">1.0 m</text><text x="20" y="284">0 m</text></g><line x1="56" y1="60" x2="64" y2="60" stroke="#5b6b78"/><line x1="56" y1="160" x2="64" y2="160" stroke="#5b6b78"/><line x1="56" y1="280" x2="64" y2="280" stroke="#5b6b78"/><g transform="translate(210,72)"><path d="M0,0 Q70,-26 96,2 Q66,10 0,8 Z" fill="#c3e0a8" stroke="#5b8a3c"/><rect x="-6" y="0" width="12" height="34" fill="#dee2e6" stroke="#868e96"/><rect x="-7" y="34" width="14" height="9" rx="2" fill="#495057"/></g><text x="240" y="44" font-size="11" text-anchor="middle" fill="#5b8a3c">paper winged-seed model</text><path d="M170,76 q-10,8 0,16" fill="none" stroke="#0b7285" stroke-width="1.5" marker-end="url(#glA)"/><line x1="216" y1="124" x2="216" y2="270" stroke="#0b7285" stroke-width="1.5" stroke-dasharray="5 5" marker-end="url(#glA)"/><text x="226" y="200" font-size="11" fill="#0b7285">spins and glides down</text><line x1="60" y1="280" x2="420" y2="280" stroke="#5b6b78" stroke-width="3"/><rect x="330" y="60" width="60" height="40" rx="5" fill="#222"/><text x="360" y="85" font-size="13" fill="#3ad36a" text-anchor="middle" font-family="monospace">0.00</text><text x="360" y="112" font-size="10" fill="#5b6b78" text-anchor="middle">stopwatch</text></svg>',
      },
      caption: 'A paper winged-seed model released from different heights; a stopwatch records the time in the air.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Identify the independent and dependent variables in this experiment.',
        marks: 2,
        ph: 'State the independent variable (IV) and the dependent variable (DV)...',
      },
      {
        label: 'b',
        text: 'State two controlled variables in this experiment.',
        marks: 2,
        ph: 'List two variables that must be kept constant throughout the experiment...',
      },
      {
        label: 'c',
        text: 'The students collected the following data:\n\n| Height from which model is dropped (m) | Time spent in the air, Trial 1 (s) | Time spent in the air, Trial 2 (s) |\n|----------------------------------------|--------------------------------------|--------------------------------------|\n| 0.50 | 0.71 | 0.64 |\n| 1.00 | 1.42 | 1.55 |\n| 2.00 | 2.83 | 2.69 |\n\nDescribe the pattern shown in the data.',
        marks: 2,
        ph: 'Describe the relationship between drop height and time in air...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Drop height / m', 'Time in air, Trial 1 / s', 'Time in air, Trial 2 / s'],
            rows: [['0.50', '0.71', '0.64'], ['1.00', '1.42', '1.55'], ['2.00', '2.83', '2.69']],
          },
          caption: 'Time the winged-seed model spent in the air for three drop heights (two trials each).',
        },
      },
      {
        label: 'd',
        text: 'Identify one limitation of using a paper winged-seed model as a model for a real ash seed.',
        marks: 2,
        ph: 'State one way the model differs from a real seed and explain why this is a limitation...',
      },
      {
        label: 'e',
        text: 'Suggest one way the experimental method could be improved to increase the reliability of the results.',
        marks: 2,
        ph: 'Propose a specific improvement to increase reliability...',
      },
    ],
  },

  // ── Question 6 — Criterion B (16 marks) ─────────────────────────────────────
  // Design a full investigation: effect of number of paperclips (mass) on fall time
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation Design',
    marks: 16,
    stem: 'Design an investigation to test how the number of paperclips attached to the winged-seed model affects the time the model spends in the air.\n\nYour investigation should be clearly described so that it could be repeated by another student. Use the method from Question 5 as a starting point.',
    tasks: [
      {
        label: 'a',
        text: 'Design a full scientific investigation to determine how the number of paperclips (the mass) attached to the winged-seed model affects the time it spends in the air. Your answer should include:\n\n• A focused research question\n• Identification of independent, dependent, and controlled variables\n• A step-by-step method that could be repeated by another student\n• Identification of safety and ethical considerations\n• A description of how data will be collected and recorded\n• How you will process the data to reach a conclusion',
        marks: 16,
        ph: 'Write your complete investigation design here. Include research question, variables, method, safety considerations, data collection table, and data processing plan...',
      },
    ],
  },

  // ── Question 7 — Criterion D (11 marks) ──────────────────────────────────────
  // Dehydration, osmosis, distillation desalination
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Water, Osmosis & Sustainability',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Homeostasis'],
    marks: 11,
    stem: 'The human body is 65% water. Different body systems use water to carry out their specific functions. If a person does not drink enough water, they become dehydrated and their body systems do not work effectively.',
    tasks: [
      {
        label: 'a',
        text: 'For each of the functions below, outline the effect of dehydration.\n\n• Transport of substances in the blood\n• Digestion of food',
        marks: 4,
        ph: 'For each function, describe what happens when the body is dehydrated...',
      },
      {
        label: 'b',
        text: 'Water can enter and exit cells by osmosis. Select arrows to show the net movement of water across the cell membrane in the diagram.\n\nThe diagram shows a cell with a high solute concentration inside and a low solute concentration outside.',
        marks: 2,
        ph: 'Select the arrow(s) showing net water movement by osmosis.',
        widget: 'match_drag_drop',
        widgetItems: ['Arrow pointing left (into cell)', 'Arrow pointing right (out of cell)'],
        widgetOptions: ['Net movement direction 1', 'Net movement direction 2', 'Net movement direction 3'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="osmA" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="480" height="260" fill="#ffffff"/><rect x="0" y="0" width="480" height="260" fill="#eaf6fb"/><circle cx="240" cy="130" r="92" fill="#fde8c9" stroke="#e8990c" stroke-width="3"/><text x="240" y="120" font-size="13" font-weight="700" text-anchor="middle" fill="#a8531a">inside cell</text><text x="240" y="140" font-size="11" text-anchor="middle" fill="#a8531a">HIGH solute</text><text x="240" y="156" font-size="11" text-anchor="middle" fill="#a8531a">(little free water)</text><text x="70" y="40" font-size="12" font-weight="700" fill="#0b7285">outside cell</text><text x="70" y="58" font-size="11" fill="#0b7285">LOW solute (lots of water)</text><line x1="120" y1="130" x2="158" y2="130" stroke="#0b7285" stroke-width="3" marker-end="url(#osmA)"/><line x1="360" y1="90" x2="324" y2="90" stroke="#0b7285" stroke-width="3" marker-end="url(#osmA)"/><line x1="240" y1="226" x2="240" y2="200" stroke="#0b7285" stroke-width="3" marker-end="url(#osmA)"/><text x="120" y="120" font-size="10" fill="#0b7285">A</text><text x="356" y="80" font-size="10" fill="#0b7285">B</text><text x="252" y="222" font-size="10" fill="#0b7285">C</text><text x="240" y="248" font-size="11" text-anchor="middle" fill="#5b6b78">partially permeable membrane (orange)</text></svg>',
          },
          caption: 'A cell with high solute concentration inside, surrounded by a dilute solution. Which arrows show the NET movement of water?',
        },
      },
      {
        label: 'c',
        text: 'A distillation desalination plant can be used to provide freshwater from seawater. The seawater is heated until it boils; the water vapour is collected and condensed back into pure freshwater, leaving the salt behind.\n\nDiscuss the implications of using a distillation desalination plant to provide freshwater. In your answer, you should include:\n• the impacts on different ecosystems\n• the consequences of high energy use\n• a concluding appraisal',
        marks: 5,
        ph: 'Discuss ecosystem impacts (seawater intake, hot brine discharge), the consequences of the large amount of energy needed to boil seawater, and provide a balanced conclusion...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="seaD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#74c0fc"/><stop offset="1" stop-color="#1971c2"/></linearGradient><marker id="dArr" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="280" fill="#ffffff"/><rect x="60" y="150" width="120" height="90" rx="6" fill="url(#seaD)" stroke="#155a96"/><text x="120" y="200" font-size="12" text-anchor="middle" fill="#ffffff">seawater</text><path d="M90,240 q4,16 12,0 q4,16 12,0 q4,16 12,0" fill="none" stroke="#f08c00" stroke-width="2"/><text x="120" y="260" font-size="10" text-anchor="middle" fill="#a8531a">heated &amp; boiled</text><g stroke="#0b7285" stroke-width="2" marker-end="url(#dArr)"><line x1="120" y1="148" x2="120" y2="110"/><line x1="120" y1="110" x2="240" y2="90"/></g><text x="150" y="86" font-size="10" fill="#0b7285">vapour</text><rect x="250" y="70" width="100" height="60" rx="8" fill="#dbe9f4" stroke="#3a6ea5"/><text x="300" y="96" font-size="11" text-anchor="middle" fill="#3a6ea5">condenser</text><text x="300" y="114" font-size="10" text-anchor="middle" fill="#3a6ea5">(cools vapour)</text><line x1="350" y1="110" x2="430" y2="150" stroke="#0b7285" stroke-width="2" marker-end="url(#dArr)"/><rect x="430" y="150" width="90" height="60" rx="6" fill="#c3fae8" stroke="#0ca678"/><text x="475" y="184" font-size="12" text-anchor="middle" fill="#087f5b">freshwater</text><path d="M180,210 l40,0" stroke="#a8531a" stroke-width="3" marker-end="url(#dArr)"/><text x="230" y="226" font-size="10" fill="#a8531a">hot salty brine out</text></svg>',
          },
          caption: 'A distillation desalination plant: seawater is boiled, the vapour is condensed into freshwater, and hot salty brine is left over.',
        },
      },
    ],
  },

  // ── Question 8 — Criterion D (15 marks) ──────────────────────────────────────
  // Nitrogen cycle, fertilisers, nitrogen sustainability
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Nitrogen Cycle & Sustainability',
    topicCanonical: 'Nutrient/Carbon/Nitrogen Cycles',
    topicGroup: 'Organisms',
    topicsAlso: ['Pollution & Conservation'],
    marks: 15,
    stem: 'The nitrogen cycle describes the continuous movement of nitrogen between the air, the soil and living things. Plants and animals need nitrogen to make proteins.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="nArr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#495057"/></marker><linearGradient id="soilN" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#caa46a"/><stop offset="1" stop-color="#8a6a3d"/></linearGradient></defs><rect width="600" height="360" fill="#eef6fb"/><rect x="0" y="250" width="600" height="110" fill="url(#soilN)"/><rect x="150" y="16" width="300" height="44" rx="10" fill="#ffffff" stroke="#0b7285"/><text x="300" y="44" font-size="14" font-weight="700" text-anchor="middle" fill="#0b7285">Nitrogen gas (N₂) in the air</text><g><ellipse cx="120" cy="220" rx="30" ry="38" fill="#2f9e44"/><rect x="116" y="240" width="8" height="20" fill="#5d3f23"/><text x="120" y="278" font-size="11" text-anchor="middle" fill="#1f7a36">plant</text></g><g><ellipse cx="430" cy="218" rx="40" ry="26" fill="#e8990c"/><circle cx="465" cy="206" r="16" fill="#e8990c"/><text x="430" y="262" font-size="11" text-anchor="middle" fill="#a8531a">animal</text></g><circle cx="280" cy="300" r="10" fill="#9c6b3f"/><circle cx="320" cy="312" r="8" fill="#9c6b3f"/><text x="300" y="338" font-size="11" text-anchor="middle" fill="#5d3f23">nitrates in the soil (NO₃⁻)</text><path d="M150,90 Q120,160 250,290" fill="none" stroke="#1971c2" stroke-width="2.5" marker-end="url(#nArr)"/><text x="150" y="170" font-size="11" fill="#1971c2">nitrogen fixation</text><path d="M150,210 Q200,250 270,290" fill="none" stroke="#2f9e44" stroke-width="2.5" marker-end="url(#nArr)"/><text x="180" y="244" font-size="11" fill="#2f9e44">absorption (uptake)</text><path d="M390,218 L160,222" fill="none" stroke="#e8590c" stroke-width="2.5" marker-end="url(#nArr)"/><text x="250" y="210" font-size="11" fill="#e8590c">feeding</text><path d="M340,300 Q420,300 450,90" fill="none" stroke="#c2255c" stroke-width="2.5" marker-end="url(#nArr)"/><text x="430" y="170" font-size="11" fill="#c2255c">denitrification</text><path d="M430,250 Q360,300 330,300" fill="none" stroke="#7a4fb5" stroke-width="2.5" marker-end="url(#nArr)"/><text x="356" y="276" font-size="11" fill="#7a4fb5">decomposition</text></svg>',
      },
      caption: 'The nitrogen cycle: nitrogen moves between the air, the soil (as nitrates) and living things through fixation, uptake, feeding, decomposition and denitrification.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Label the nitrogen cycle diagram. Drag the correct labels to the diagram.',
        marks: 1,
        ph: 'Place the labels: Nitrogen fixation, Decomposition, Denitrification, Absorption.',
        widget: 'match_drag_drop',
        widgetItems: ['Nitrogen fixation', 'Decomposition', 'Denitrification', 'Absorption'],
        widgetOptions: ['Position 1 (nitrogen gas → nitrates in soil)', 'Position 2 (dead matter → nitrates in soil)', 'Position 3 (nitrates in soil → nitrogen gas in air)', 'Position 4 (nitrates taken up by plant roots)'],
      },
      {
        label: 'b',
        text: 'Some of the processes in the nitrogen cycle are changing due to human activity. Adding nitrogen fertilisers to farmland is one of these.\n\nOutline the consequences to the environment if the amount of nitrate in the soil and water changes due to human activity.\n\n• Too much nitrate (from heavy fertiliser use)\n• Too little nitrate (in poor soils)',
        marks: 2,
        ph: 'For each: state one consequence of too much nitrate and one of too little nitrate...',
      },
      {
        label: 'c',
        text: 'Nitrogen fertilisers help farmers grow more food, but their overuse can damage ecosystems. Human actions have changed the nitrogen cycle.\n\nEvaluate the actions that individuals and governments can take to use nitrogen fertilisers sustainably and protect ecosystems. In your answer, you should include:\n\n• steps that farmers could take to reduce nitrate pollution from their land\n• a description of how an individual\'s food choices can affect nitrogen use in agriculture\n• a suggestion of how government policies can influence fertiliser use\n• a concluding appraisal',
        marks: 12,
        ph: 'Evaluate farmer/individual and government actions for sustainable nitrogen use. Include farming methods (crop rotation, buffer strips, precise application), how food choices affect fertiliser demand (e.g. meat vs plant-based), government policies (limits, subsidies, education), and a balanced concluding appraisal...',
      },
    ],
  },
]
