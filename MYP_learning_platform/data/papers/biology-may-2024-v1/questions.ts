import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2024 · VARIANT 1  (isomorphic to biology-may-2024)
// Same crit, command demand, marks (task + question + paper total = 98), widgets,
// task structure and taxonomy tokens as the source. Only the SURFACE changes —
// new species / ecosystem / data — and every figure is a self-contained
// data-driven artefact (no figImages). All answers recomputed in markscheme.ts.
//   Q1 Life processes / homeostasis / SA:V : elephant ears → jackrabbit ears;
//      maple+cactus leaves → water-lily pad + marram grass
//   Q2 Food web + species classification : N. Pacific Ocean → Arctic tundra;
//      killer-whale types → Arctic wolf subspecies
//   Q3 Tree-age by growth factor : beech (GF 1.00) → English oak (GF 1.00)
//   Q4 Age–height field investigation : sycamore → silver birch
//   Q5 Falling-model experiment (Crit C) : paper helicopter → paper spinner
//   Q6 Crit B design : wing angle → wing (blade) length
//   Q7 Dehydration / osmosis / desalination (Crit D) : reverse osmosis → solar still
//   Q8 Nutrient cycle + sustainability (Crit D) : water cycle → carbon cycle
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
  id: 'biology-may-2024-v1',
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
        text: 'Select the function described by each of the definitions below.\n\n• Removal of toxic waste products of metabolism\n• Taking in of materials for energy, growth and development\n• Detecting changes in the surroundings',
        marks: 2,
        ph: 'Select the matching life process for each definition.',
        widget: 'inline_dropdown_select',
        widgetOptions: ['Excretion', 'Growth', 'Metabolism', 'Nutrition', 'Reproduction', 'Response', 'Sensitivity'],
        widgetItems: ['Removal of toxic waste products of metabolism', 'Taking in of materials for energy, growth and development', 'Detecting changes in the surroundings'],
      },
      {
        label: 'b',
        text: 'Homeostasis is the maintenance of a stable internal environment. The image shows a thermal image of a desert jackrabbit. Outline how a jackrabbit\'s large ears help to maintain its body temperature.',
        marks: 2,
        ph: 'Describe how jackrabbit ears help regulate body temperature...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="thermJ" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1b3a8a"/><stop offset="0.5" stop-color="#2f9e44"/><stop offset="1" stop-color="#f08c00"/></linearGradient><radialGradient id="earhot" cx="0.5" cy="0.5"><stop offset="0" stop-color="#ffd43b"/><stop offset="1" stop-color="#f08c00"/></radialGradient></defs><rect width="480" height="300" fill="#ffffff"/><rect x="20" y="20" width="320" height="220" rx="10" fill="#0b1f3a"/><ellipse cx="180" cy="170" rx="70" ry="48" fill="#1971c2"/><ellipse cx="150" cy="120" rx="34" ry="30" fill="#2f9e44"/><path d="M150,98 Q120,18 100,90 Q132,104 150,98 Z" fill="url(#earhot)" stroke="#c96a00"/><path d="M168,96 Q150,14 198,84 Q176,102 168,96 Z" fill="url(#earhot)" stroke="#c96a00"/><circle cx="138" cy="124" r="4" fill="#0b1f3a"/><text x="180" y="232" font-size="12" fill="#cbd5e1" text-anchor="middle">thermal image of a desert jackrabbit</text><text x="118" y="44" font-size="11" fill="#ffd43b">ears glow hottest</text><rect x="360" y="40" width="22" height="180" fill="url(#thermJ)" stroke="#475569"/><text x="392" y="48" font-size="11" fill="#1f2d3a">hot</text><text x="392" y="220" font-size="11" fill="#1f2d3a">cold</text><text x="392" y="135" font-size="11" fill="#1f2d3a">°C</text></svg>',
          },
          caption: 'Thermal image of a desert jackrabbit — the large thin ears appear hottest, showing where heat is lost.',
        },
      },
      {
        label: 'c',
        text: 'Plants have adapted to their environments by evolving a variety of leaf shapes and sizes. Floating water plants, like the giant water lily of tropical rivers, have very large flat leaves (pads) that float on the surface.\n\nOutline one possible advantage of water-lily pads having a large surface area.',
        marks: 2,
        ph: 'State and briefly explain one advantage of large surface area in water-lily pads...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="pond1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient><radialGradient id="pad1" cx="0.45" cy="0.4"><stop offset="0" stop-color="#69db7c"/><stop offset="1" stop-color="#2f9e44"/></radialGradient></defs><rect width="520" height="240" fill="#ffffff"/><rect x="0" y="120" width="520" height="120" fill="url(#pond1)"/><line x1="0" y1="120" x2="520" y2="120" stroke="#3f7e98" stroke-width="2"/><g stroke="#f6c244" stroke-width="2" stroke-linecap="round"><line x1="60" y1="20" x2="80" y2="60"/><line x1="120" y1="14" x2="130" y2="58"/><line x1="190" y1="20" x2="180" y2="60"/></g><ellipse cx="200" cy="118" rx="130" ry="26" fill="url(#pad1)" stroke="#1f7a36" stroke-width="2"/><path d="M200,118 L325,108" stroke="#1f7a36" stroke-width="1.5"/><path d="M200,118 L80,110" stroke="#1f7a36" stroke-width="1.5"/><path d="M200,118 L200,96" stroke="#1f7a36" stroke-width="1.5"/><line x1="380" y1="118" x2="380" y2="210" stroke="#3f6f4a" stroke-width="3"/><ellipse cx="380" cy="118" rx="26" ry="8" fill="url(#pad1)" stroke="#1f7a36"/><text x="200" y="80" font-size="12" fill="#1f7a36" text-anchor="middle">large floating lily pad</text><text x="300" y="160" font-size="11" fill="#2c5468">water surface</text></svg>',
          },
          caption: 'A giant water-lily pad floats flat on the surface, fully exposed to sunlight.',
        },
      },
      {
        label: 'd',
        text: 'Other plants, like marram grass found on coastal sand dunes, have narrow leaves that can roll up into tight tubes, greatly reducing their exposed surface area.\n\nOutline one possible advantage of marram grass leaves having a small (rolled) surface area.',
        marks: 2,
        ph: 'State and briefly explain one advantage of small surface area in rolled marram grass leaves...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="leafM" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#69db7c"/><stop offset="1" stop-color="#2f9e44"/></linearGradient></defs><rect width="480" height="240" fill="#ffffff"/><text x="110" y="34" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Open (flat) leaf</text><path d="M70,60 Q110,50 150,60 L150,190 Q110,200 70,190 Z" fill="url(#leafM)" stroke="#1f7a36" stroke-width="2"/><g stroke="#f08c00" stroke-width="2" marker-end="url(#wlossA)"><line x1="110" y1="70" x2="110" y2="44"/></g><text x="110" y="216" font-size="11" text-anchor="middle" fill="#1f7a36">stomata exposed to dry wind</text><text x="360" y="34" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Rolled leaf</text><path d="M340,60 Q372,52 388,70 Q396,120 388,180 Q372,196 340,188 Q360,120 340,60 Z" fill="url(#leafM)" stroke="#1f7a36" stroke-width="2"/><path d="M352,70 Q370,120 352,180" fill="none" stroke="#1f7a36" stroke-width="1.2" stroke-dasharray="3 3"/><text x="362" y="216" font-size="11" text-anchor="middle" fill="#1f7a36">stomata sheltered inside</text><defs><marker id="wlossA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f08c00"/></marker></defs></svg>',
          },
          caption: 'Marram grass rolls its leaves so the stomata are hidden inside, reducing the surface exposed to the wind.',
        },
      },
      {
        label: 'e',
        text: 'All cells need to obtain nutrients and eliminate waste efficiently. Because of this, cells are limited in size by the relationship between their surface area and their volume.\n\nExplain why having a high surface area to volume ratio is beneficial to a cell.',
        marks: 3,
        ph: 'Explain the benefit of a high SA:V ratio for cells, referencing nutrient uptake and waste removal...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="diffA" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="520" height="240" fill="#ffffff"/><rect x="40" y="60" width="60" height="60" fill="#d3f9d8" stroke="#2f9e44" stroke-width="2"/><text x="70" y="138" font-size="11" text-anchor="middle" fill="#1f7a36">small cube</text><text x="70" y="152" font-size="10" text-anchor="middle" fill="#1f7a36">SA:V = high</text><g stroke="#0b7285" stroke-width="2" marker-end="url(#diffA)"><line x1="30" y1="90" x2="55" y2="90"/><line x1="110" y1="90" x2="85" y2="90"/></g><rect x="300" y="40" width="120" height="120" fill="#d3f9d8" stroke="#2f9e44" stroke-width="2"/><text x="360" y="178" font-size="11" text-anchor="middle" fill="#1f7a36">large cube</text><text x="360" y="192" font-size="10" text-anchor="middle" fill="#1f7a36">SA:V = low</text><circle cx="360" cy="100" r="8" fill="#f08c00"/><text x="360" y="104" font-size="9" text-anchor="middle" fill="#fff">slow</text><g stroke="#0b7285" stroke-width="2" marker-end="url(#diffA)"><line x1="288" y1="70" x2="316" y2="70"/></g><text x="360" y="226" font-size="10" text-anchor="middle" fill="#7a3d12">centre too far from surface — slow diffusion</text></svg>',
          },
          caption: 'A small cell (high SA:V) lets substances diffuse in and out quickly; in a large cell the centre is too far from the surface.',
        },
      },
    ],
  },

  // ── Question 2 — Criterion A (12 marks) ─────────────────────────────────────
  // Arctic tundra food web + Arctic wolf subspecies classification
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Ecosystems & Food Webs',
    topicCanonical: 'Food Chains & Webs',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Interdependency'],
    marks: 12,
    stem: 'Below is a food web from the Arctic tundra.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Arctic tundra food web',
        nodes: [
          { id: 'lichen', label: 'Lichen & moss', color: '#2f9e44', detail: 'Producers — make their own food by photosynthesis (trophic level 1).' },
          { id: 'sedge', label: 'Sedge grass', color: '#37b24d', detail: 'Producer — grazed by herbivores (trophic level 1).' },
          { id: 'lemming', label: 'Lemming', color: '#f08c00', detail: 'Small herbivore that eats sedge and moss (trophic level 2).' },
          { id: 'hare', label: 'Arctic hare', color: '#f08c00', detail: 'Herbivore that eats lichen and sedge (trophic level 2).' },
          { id: 'ptarmigan', label: 'Ptarmigan', color: '#e8590c', detail: 'Bird that eats sedge and is eaten by foxes and wolves (trophic level 2–3).' },
          { id: 'fox', label: 'Arctic fox', color: '#1971c2', detail: 'Carnivore that eats lemmings, hares and ptarmigan (trophic level 3).' },
          { id: 'wolf', label: 'Arctic wolf', color: '#495057', detail: 'Top predator that eats hares, ptarmigan and Arctic foxes (trophic levels 3–4).' },
        ],
        edges: [
          { from: 'lichen', to: 'hare' },
          { from: 'lichen', to: 'lemming' },
          { from: 'sedge', to: 'lemming' },
          { from: 'sedge', to: 'hare' },
          { from: 'sedge', to: 'ptarmigan' },
          { from: 'lemming', to: 'fox' },
          { from: 'hare', to: 'fox' },
          { from: 'hare', to: 'wolf' },
          { from: 'ptarmigan', to: 'fox' },
          { from: 'ptarmigan', to: 'wolf' },
          { from: 'fox', to: 'wolf' },
        ],
      },
      caption: 'Arrows point from prey to predator, showing the direction of energy flow through the Arctic tundra.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the food web above, construct a food chain that consists of five species including the Arctic fox at the fourth trophic level.',
        marks: 3,
        ph: 'Write out a 5-species food chain with Arctic fox at the 4th trophic level...',
        widget: 'match_drag_drop',
        widgetItems: ['Arctic fox', 'Arctic hare', 'Arctic wolf', 'Lemming', 'Lichen & moss', 'Ptarmigan', 'Sedge grass'],
        widgetOptions: ['Trophic level 1', 'Trophic level 2', 'Trophic level 3', 'Trophic level 4 (Arctic fox)', 'Trophic level 5'],
      },
      {
        label: 'b',
        text: 'State the trophic levels at which the Arctic wolf feeds.',
        marks: 2,
        ph: 'State which trophic level(s) the Arctic wolf occupies...',
      },
      {
        label: 'c',
        text: 'There are several different types of Arctic wolf that live across the polar regions. Each type has different physical features (such as coat colour and body size) and lives in a different habitat.\n\nComment on whether the different types of Arctic wolf should be classified as different species.',
        marks: 3,
        ph: 'Discuss species classification based on physical features and habitat differences...',
      },
      {
        label: 'd',
        text: 'Scientists have mapped the genomes of the different Arctic wolf types. Suggest how this information could help scientists to decide whether the wolf types should be classified as different species.',
        marks: 4,
        ph: 'Explain how genome mapping can inform species classification...',
      },
    ],
  },

  // ── Question 3 — Criterion B (10 marks) ─────────────────────────────────────
  // Tree age estimation using growth factor values (English oak)
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
        svg: '<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="trunkR" cx="0.5" cy="0.5"><stop offset="0" stop-color="#f3e2c7"/><stop offset="1" stop-color="#c79a5b"/></radialGradient></defs><rect width="520" height="280" fill="#ffffff"/><circle cx="180" cy="140" r="120" fill="url(#trunkR)" stroke="#8a6332" stroke-width="2"/><g fill="none" stroke="#8a6332"><circle cx="180" cy="140" r="14"/><circle cx="180" cy="140" r="28"/><circle cx="180" cy="140" r="40" stroke="#5b4326" stroke-width="2.5"/><circle cx="180" cy="140" r="52"/><circle cx="180" cy="140" r="64"/><circle cx="180" cy="140" r="74" stroke="#5b4326" stroke-width="2.5"/><circle cx="180" cy="140" r="86"/><circle cx="180" cy="140" r="98"/><circle cx="180" cy="140" r="108" stroke="#5b4326" stroke-width="2.5"/></g><text x="180" y="270" font-size="12" text-anchor="middle" fill="#5b4326">cross-section of an oak trunk (growth rings)</text><line x1="320" y1="240" x2="320" y2="60" stroke="#1f2d3a" stroke-width="1.5"/><line x1="316" y1="60" x2="324" y2="60" stroke="#1f2d3a" stroke-width="1.5"/><line x1="316" y1="240" x2="324" y2="240" stroke="#1f2d3a" stroke-width="1.5"/><text x="332" y="150" font-size="11" fill="#1f2d3a">height</text><text x="332" y="164" font-size="11" fill="#1f2d3a">135 cm</text><path d="M360,150 Q420,150 420,90 L460,90" fill="none" stroke="#0b7285" stroke-width="2"/><text x="430" y="82" font-size="11" fill="#0b7285">tape measure</text><text x="380" y="200" font-size="11" fill="#5b6b78">circumference measured</text><text x="380" y="214" font-size="11" fill="#5b6b78">around trunk</text></svg>',
      },
      caption: 'The circumference of an oak trunk is measured at a height of 135 cm; its growth rings can also be counted.',
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
        text: 'A student measures the circumference of an English oak tree trunk at a height of 135 cm. The circumference is 220 cm. The growth factor for an English oak is 1.00.\n\nUse the formula below to estimate the age of the oak tree. Show your working.\n\nage (years) = (circumference in cm ÷ π) × growth factor',
        marks: 3,
        ph: 'Show your calculation step by step. Age = (circumference ÷ π) × growth factor',
        ans: '70',
      },
      {
        label: 'c',
        text: 'An alternative method for estimating tree age is counting growth rings in the cross section of a trunk. Growth rings occur because trees grow faster in the spring and summer and slower in the autumn.\n\nOutline why counting both the light and dark rings would not accurately estimate the age of the tree.',
        marks: 2,
        ph: 'Explain why counting both light and dark rings is inaccurate...',
      },
      {
        label: 'd',
        text: 'Justify why cutting near the base of the tree gives a more valid estimate of the tree\'s age.',
        marks: 1,
        ph: 'Justify why the base gives the most accurate ring count...',
      },
      {
        label: 'e',
        text: 'The image below shows cross sections of the same species of tree of the same age — one grown in a temperate climate and one grown in a tropical climate.\n\nIdentify a limitation of each method used to estimate the age of trees.\n\n• Growth factor values\n• Counting rings',
        marks: 3,
        ph: 'State one limitation of the growth factor method and one limitation of counting rings...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="tT" cx="0.5" cy="0.5"><stop offset="0" stop-color="#f3e2c7"/><stop offset="1" stop-color="#c79a5b"/></radialGradient></defs><rect width="520" height="230" fill="#ffffff"/><text x="130" y="26" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Temperate</text><circle cx="130" cy="120" r="80" fill="url(#tT)" stroke="#8a6332"/><g fill="none" stroke="#8a6332"><circle cx="130" cy="120" r="16"/><circle cx="130" cy="120" r="30" stroke="#5b4326"/><circle cx="130" cy="120" r="44"/><circle cx="130" cy="120" r="58" stroke="#5b4326"/><circle cx="130" cy="120" r="72"/></g><text x="130" y="218" font-size="11" text-anchor="middle" fill="#5b4326">clear seasonal rings</text><text x="390" y="26" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Tropical</text><circle cx="390" cy="120" r="80" fill="url(#tT)" stroke="#8a6332"/><g fill="none" stroke="#cbb48a" stroke-width="0.8"><circle cx="390" cy="120" r="22"/><circle cx="390" cy="120" r="38"/><circle cx="390" cy="120" r="54"/><circle cx="390" cy="120" r="70"/></g><text x="390" y="218" font-size="11" text-anchor="middle" fill="#5b4326">faint / no clear rings</text></svg>',
          },
          caption: 'Trees of the same age and species: a temperate tree (clear rings) and a tropical tree (faint, unclear rings).',
        },
      },
    ],
  },

  // ── Question 4 — Criterion B / C (13 marks) ─────────────────────────────────
  // Silver birch tree age vs height investigation
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Data Collection & Analysis',
    topicCanonical: 'Life Cycles',
    topicGroup: 'Evolution',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 13,
    stem: 'Some MYP students wanted to investigate the relationship between the age and height of silver birch trees growing in their local woodland. The woodland had over 600 silver birch trees. After discussing with their teacher how height could be estimated, they collected data on a sample of 20 randomly selected silver birch trees.',
    tasks: [
      {
        label: 'a',
        text: 'Suggest why the sample of 20 silver birch trees was randomly selected.',
        marks: 2,
        ph: 'Explain the purpose of random sampling in this investigation...',
      },
      {
        label: 'b',
        text: 'Outline how the sample could be randomly selected.',
        marks: 1,
        ph: 'Describe a method for randomly selecting trees from the woodland...',
      },
      {
        label: 'c',
        text: 'The students collected the following data from five of the 20 trees:\n\n| Age (years) | Height (m) |\n|-------------|------------|\n| 75          | 18         |\n| 45          | 14         |\n| 25          | 10         |\n| 15          | 6          |\n| 5           | 2          |\n\nPlot the data from the table on the grid. Draw a line of best fit.',
        marks: 5,
        ph: 'Plot all 5 data points and draw a line of best fit. Marks: axes labelled (1), correct scale (1), all points plotted (2), line of best fit (1).',
        widget: 'radio_select',
        widgetOptions: ['I have plotted the points and drawn a line of best fit'],
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Age / years', 'Height / m'],
            rows: [['75', '18'], ['45', '14'], ['25', '10'], ['15', '6'], ['5', '2']],
          },
          caption: 'Age and height of five randomly selected silver birch trees.',
        },
      },
      {
        label: 'd',
        text: 'Using your graph, deduce the growth rate of the silver birch tree in metres per year.',
        marks: 2,
        ph: 'Calculate growth rate from the graph (change in height ÷ change in age)...',
      },
      {
        label: 'e',
        text: 'The students used their graph to predict the height of a 100-year-old silver birch tree. Outline one reason why this prediction may not be reliable.',
        marks: 2,
        ph: 'Explain why extrapolating the graph may give an unreliable prediction...',
      },
      {
        label: 'f',
        text: 'The growth factor for a silver birch tree is 1.66. Calculate the age of a silver birch tree with a circumference of 180 cm. Show your working.',
        marks: 1,
        ph: 'Use age = (circumference ÷ π) × growth factor to calculate the silver birch\'s age.',
      },
    ],
  },

  // ── Question 5 — Criterion C (10 marks) ─────────────────────────────────────
  // Paper spinner experiment (model for a sycamore "helicopter" seed)
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Experimental Design — Paper Spinner',
    marks: 10,
    stem: 'A paper spinner model is made by following the steps shown. It is used as a model for a sycamore seed, which spins as it falls. The time spent in the air is measured for three different drop heights.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="spinA" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="460" height="320" fill="#ffffff"/><line x1="60" y1="30" x2="60" y2="290" stroke="#5b6b78" stroke-width="2"/><g font-size="10" fill="#5b6b78"><text x="20" y="64">2.0 m</text><text x="20" y="164">1.0 m</text><text x="20" y="284">0 m</text></g><line x1="56" y1="60" x2="64" y2="60" stroke="#5b6b78"/><line x1="56" y1="160" x2="64" y2="160" stroke="#5b6b78"/><line x1="56" y1="280" x2="64" y2="280" stroke="#5b6b78"/><g transform="translate(200,70)"><path d="M0,0 L-44,-14 Q-58,-18 -50,-2 L-6,8 Z" fill="#a5d8ff" stroke="#1971c2"/><path d="M0,0 L44,-14 Q58,-18 50,-2 L6,8 Z" fill="#a5d8ff" stroke="#1971c2"/><rect x="-5" y="8" width="10" height="40" fill="#dee2e6" stroke="#868e96"/><rect x="-6" y="48" width="12" height="10" rx="2" fill="#495057"/></g><path d="M150,60 q-12,8 0,16" fill="none" stroke="#0b7285" stroke-width="1.5" marker-end="url(#spinA)"/><path d="M250,76 q12,-8 0,-16" fill="none" stroke="#0b7285" stroke-width="1.5" marker-end="url(#spinA)"/><text x="200" y="40" font-size="11" text-anchor="middle" fill="#1971c2">paper spinner (model seed)</text><line x1="200" y1="118" x2="200" y2="270" stroke="#0b7285" stroke-width="1.5" stroke-dasharray="5 5" marker-end="url(#spinA)"/><text x="210" y="200" font-size="11" fill="#0b7285">falls spinning</text><line x1="60" y1="280" x2="420" y2="280" stroke="#5b6b78" stroke-width="3"/><rect x="320" y="60" width="60" height="40" rx="5" fill="#222"/><text x="350" y="85" font-size="13" fill="#3ad36a" text-anchor="middle" font-family="monospace">0.00</text><text x="350" y="112" font-size="10" fill="#5b6b78" text-anchor="middle">stopwatch</text></svg>',
      },
      caption: 'A paper spinner released from different heights; a stopwatch records the time it spends in the air.',
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
        text: 'The students collected the following data:\n\n| Height from which spinner is dropped (m) | Time spent in the air, Trial 1 (s) | Time spent in the air, Trial 2 (s) |\n|----------------------------------------|--------------------------------------|--------------------------------------|\n| 0.50 | 0.62 | 0.71 |\n| 1.00 | 1.28 | 1.34 |\n| 2.00 | 2.45 | 2.59 |\n\nDescribe the pattern shown in the data.',
        marks: 2,
        ph: 'Describe the relationship between drop height and time in air...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Drop height / m', 'Time in air, Trial 1 / s', 'Time in air, Trial 2 / s'],
            rows: [['0.50', '0.62', '0.71'], ['1.00', '1.28', '1.34'], ['2.00', '2.45', '2.59']],
          },
          caption: 'Time the paper spinner spent in the air for three drop heights (two trials each).',
        },
      },
      {
        label: 'd',
        text: 'Identify one limitation of using a paper spinner as a model for a real sycamore seed.',
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
  // Design a full investigation: effect of wing (blade) length on fall time
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation Design',
    marks: 16,
    stem: 'Design an investigation to test how the length of the wings (blades) of the paper spinner affects the time the spinner spends in the air.\n\nYour investigation should be clearly described so that it could be repeated by another student. Use the method from Question 5 as a starting point.',
    tasks: [
      {
        label: 'a',
        text: 'Design a full scientific investigation to determine how the wing (blade) length of the paper spinner affects the time it spends in the air. Your answer should include:\n\n• A focused research question\n• Identification of independent, dependent, and controlled variables\n• A step-by-step method that could be repeated by another student\n• Identification of safety and ethical considerations\n• A description of how data will be collected and recorded\n• How you will process the data to reach a conclusion',
        marks: 16,
        ph: 'Write your complete investigation design here. Include research question, variables, method, safety considerations, data collection table, and data processing plan...',
      },
    ],
  },

  // ── Question 7 — Criterion D / A (11 marks) ──────────────────────────────────
  // Dehydration, osmosis, desalination by solar still
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
        text: 'For each of the functions below, outline the effect of dehydration.\n\n• Excretion of waste\n• Temperature control',
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
          component: 'ParticleSim',
          data: {
            mode: 'diffusion',
            substance: 'water across a partially permeable cell membrane',
            before: 'Low solute concentration outside the cell (lots of free water); high solute concentration inside the cell (little free water).',
            after: 'Water moves by osmosis from the dilute solution outside to the concentrated solution inside — net movement is INTO the cell.',
            particleCount: 36,
          },
          caption: 'Water molecules cross the membrane both ways, but the NET movement is from the dilute side (outside) into the concentrated cell.',
        },
      },
      {
        label: 'c',
        text: 'A solar still can be used to provide freshwater from seawater. Heat from the Sun evaporates seawater inside a sealed container; the water vapour condenses on a sloping glass cover and runs off as freshwater, leaving the salt behind.\n\nDiscuss the implications of using a solar still to provide freshwater. In your answer, you should include:\n• the impacts on different ecosystems\n• the consequences of relying on sunlight as the energy source\n• a concluding appraisal',
        marks: 5,
        ph: 'Discuss ecosystem impacts (seawater extraction, brine left behind), the consequences of depending on sunlight (slow, weather-dependent, low energy cost), and provide a balanced conclusion...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 540 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="seaS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#74c0fc"/><stop offset="1" stop-color="#1971c2"/></linearGradient><radialGradient id="sunS" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f08c00"/></radialGradient></defs><rect width="540" height="300" fill="#ffffff"/><circle cx="80" cy="60" r="30" fill="url(#sunS)" stroke="#c96a00"/><g stroke="#f6c244" stroke-width="3" stroke-linecap="round"><line x1="80" y1="14" x2="80" y2="2"/><line x1="118" y1="38" x2="128" y2="30"/><line x1="42" y1="38" x2="32" y2="30"/></g><g stroke="#f6c244" stroke-width="2" stroke-linecap="round"><line x1="120" y1="80" x2="200" y2="130"/><line x1="120" y1="96" x2="200" y2="146"/></g><polygon points="180,130 480,130 470,250 190,250" fill="#eef6fb" stroke="#5b6b78" stroke-width="2"/><rect x="200" y="210" width="260" height="38" fill="url(#seaS)"/><text x="330" y="234" font-size="12" text-anchor="middle" fill="#ffffff">seawater</text><line x1="200" y1="135" x2="470" y2="135" stroke="#adb5bd" stroke-width="3"/><text x="330" y="126" font-size="11" text-anchor="middle" fill="#5b6b78">sloping glass cover</text><g fill="#0b7285"><circle cx="280" cy="180" r="3"/><circle cx="320" cy="172" r="3"/><circle cx="360" cy="184" r="3"/><circle cx="400" cy="170" r="3"/></g><text x="300" y="200" font-size="10" fill="#0b7285">vapour rises</text><path d="M460,140 Q470,160 460,180 L460,200" fill="none" stroke="#0b7285" stroke-width="2"/><path d="M470,250 l30,8 l-30,8 Z" fill="#2f9e44"/><text x="500" y="246" font-size="11" fill="#2f9e44">freshwater out</text><text x="330" y="278" font-size="11" text-anchor="middle" fill="#7a3d12">salt left behind in the basin</text></svg>',
          },
          caption: 'A solar still: sunlight evaporates seawater, vapour condenses on the glass and runs off as freshwater; salt is left behind.',
        },
      },
    ],
  },

  // ── Question 8 — Criterion D (15 marks) ──────────────────────────────────────
  // Carbon cycle, climate change, carbon sustainability
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon Cycle & Sustainability',
    topicCanonical: 'Nutrient/Carbon/Nitrogen Cycles',
    topicGroup: 'Organisms',
    topicsAlso: ['Pollution & Conservation'],
    marks: 15,
    stem: 'The carbon cycle describes the continuous movement of carbon between the atmosphere, living things, the oceans and the ground.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="cflow" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#495057"/></marker></defs><rect width="560" height="340" fill="#ffffff"/><rect x="120" y="14" width="320" height="44" rx="10" fill="#dee2e6" stroke="#868e96"/><text x="280" y="42" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">CO₂ in the atmosphere</text><rect x="60" y="160" width="120" height="60" rx="8" fill="#d3f9d8" stroke="#2f9e44"/><text x="120" y="186" font-size="12" text-anchor="middle" fill="#1f7a36">plants</text><text x="120" y="204" font-size="10" text-anchor="middle" fill="#1f7a36">(photosynthesis)</text><rect x="220" y="250" width="120" height="56" rx="8" fill="#ffe8cc" stroke="#e8590c"/><text x="280" y="274" font-size="12" text-anchor="middle" fill="#a8531a">animals</text><text x="280" y="292" font-size="10" text-anchor="middle" fill="#a8531a">(respiration)</text><rect x="380" y="160" width="130" height="60" rx="8" fill="#e9ecef" stroke="#495057"/><text x="445" y="186" font-size="12" text-anchor="middle" fill="#343a40">fossil fuels</text><text x="445" y="204" font-size="10" text-anchor="middle" fill="#343a40">(combustion)</text><path d="M150,160 Q140,100 200,58" fill="none" stroke="#2f9e44" stroke-width="2" marker-end="url(#cflow)"/><text x="120" y="120" font-size="10" fill="#2f9e44">photosynthesis</text><path d="M250,250 Q255,150 280,60" fill="none" stroke="#e8590c" stroke-width="2" marker-end="url(#cflow)"/><text x="262" y="160" font-size="10" fill="#e8590c">respiration</text><path d="M150,160 L230,250" fill="none" stroke="#495057" stroke-width="2" marker-end="url(#cflow)"/><text x="150" y="220" font-size="10" fill="#495057">feeding</text><path d="M445,160 Q440,100 360,58" fill="none" stroke="#495057" stroke-width="2" marker-end="url(#cflow)"/><text x="430" y="120" font-size="10" fill="#495057">combustion</text><path d="M310,300 Q400,300 430,220" fill="none" stroke="#868e96" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#cflow)"/><text x="360" y="320" font-size="10" fill="#868e96">death &amp; burial → fossil fuels</text></svg>',
      },
      caption: 'The carbon cycle: carbon moves between the atmosphere, plants, animals and fossil fuels through photosynthesis, respiration, feeding and combustion.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Label the carbon cycle diagram. Drag the correct labels to the diagram.',
        marks: 1,
        ph: 'Place the labels: Photosynthesis, Respiration, Combustion, Feeding.',
        widget: 'match_drag_drop',
        widgetItems: ['Photosynthesis', 'Respiration', 'Combustion', 'Feeding'],
        widgetOptions: ['Position 1 (plants remove CO₂ from air)', 'Position 2 (animals release CO₂ to air)', 'Position 3 (burning fossil fuels releases CO₂)', 'Position 4 (carbon passes from plants to animals)'],
      },
      {
        label: 'b',
        text: 'Some of the processes in the carbon cycle are changing due to human activity. The amount of carbon dioxide in the atmosphere is one of these.\n\nOutline the consequences to the planet if the amount of atmospheric carbon dioxide changes.\n\n• Increased atmospheric carbon dioxide\n• Decreased atmospheric carbon dioxide',
        marks: 2,
        ph: 'For each: state one consequence of increased CO₂ and one of decreased CO₂...',
      },
      {
        label: 'c',
        text: 'Carbon-based fossil fuels are a finite resource and burning them releases carbon dioxide. Human actions have changed the carbon cycle and the climate.\n\nEvaluate the actions that individuals and governments can take to reduce carbon emissions and use carbon resources sustainably. In your answer, you should include:\n\n• steps that could be taken to reduce carbon emissions in the home\n• a description of how an individual\'s dietary choices can affect their carbon footprint\n• a suggestion of how government policies can influence carbon emissions\n• a concluding appraisal',
        marks: 12,
        ph: 'Evaluate individual and government actions for sustainable carbon use. Include home energy saving, dietary carbon footprint (e.g. meat vs. plant-based), government policies (carbon taxes, renewable subsidies, education), and a balanced concluding appraisal...',
      },
    ],
  },
]
