import type { Question } from '@/lib/types'

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
  id: 'biology-may-2024',
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
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'The seven life processes (MRS GREN)',
        center: { label: 'Life', detail: 'All living organisms carry out all seven life processes.', color: '#2f9e44' },
        nodes: [
          { id: 'm', label: 'Movement', color: '#1971c2', detail: 'Change of position or place by part or all of the organism.' },
          { id: 'r', label: 'Respiration', color: '#e8590c', detail: 'Releasing energy from food inside cells.' },
          { id: 's', label: 'Sensitivity', color: '#9c36b5', detail: 'Detecting and responding to changes in the internal or external environment (a response to a stimulus).' },
          { id: 'g', label: 'Growth', color: '#2f9e44', detail: 'A permanent increase in size and dry mass.' },
          { id: 're', label: 'Reproduction', color: '#c2255c', detail: 'Producing offspring of the same species.' },
          { id: 'e', label: 'Excretion', color: '#0b7285', detail: 'Removal of the toxic waste products of metabolism.' },
          { id: 'n', label: 'Nutrition', color: '#f08c00', detail: 'Taking in nutrients (food) used for energy, growth and repair.' },
        ],
      },
      caption: 'Hover a process to see its definition. Use it to match each definition in part (a) to the correct life process.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Select the function described by each of the definitions below.\n\n• Production of offspring\n• Permanent increase in size\n• Reaction to an internal or external stimulus',
        marks: 2,
        ph: 'Select the matching life process for each definition.',
        widget: 'inline_dropdown_select',
        widgetOptions: ['Excretion', 'Growth', 'Metabolism', 'Nutrition', 'Reproduction', 'Response', 'Sensitivity'],
        widgetItems: ['Production of offspring', 'Permanent increase in size', 'Reaction to an internal or external stimulus'],
      },
      {
        label: 'b',
        text: 'Homeostasis is the maintenance of a stable internal environment. The image shows the temperature of an elephant. Outline how an elephant\'s ears help to maintain its body temperature.',
        marks: 2,
        ph: 'Describe how elephant ears help regulate body temperature...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="thermo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6336c"/><stop offset="0.4" stop-color="#f59f00"/><stop offset="0.7" stop-color="#74b816"/><stop offset="1" stop-color="#1971c2"/></linearGradient></defs><rect width="560" height="280" fill="#0b1726"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#ffffff">Thermal (infra-red) image of an elephant</text><g><ellipse cx="230" cy="160" rx="120" ry="62" fill="#f59f00"/><ellipse cx="120" cy="150" rx="70" ry="60" fill="#e8590c"/><path d="M150 110 q-78 -20 -96 56 q-6 56 70 40 q40 -42 26 -96 Z" fill="#d6336c" stroke="#ffe066" stroke-width="2"/><text x="86" y="92" font-size="11" font-weight="700" fill="#ffffff">EAR</text><line x1="120" y1="96" x2="120" y2="120" stroke="#ffe066" stroke-width="1.5"/><rect x="150" y="200" width="22" height="50" fill="#74b816"/><rect x="200" y="205" width="22" height="48" fill="#74b816"/><rect x="280" y="205" width="22" height="48" fill="#f59f00"/><rect x="320" y="200" width="22" height="52" fill="#74b816"/></g><g><rect x="470" y="50" width="26" height="170" fill="url(#thermo)" stroke="#ffffff" stroke-width="1"/><text x="506" y="58" font-size="12" font-weight="700" fill="#ffffff">34°C</text><text x="506" y="224" font-size="12" font-weight="700" fill="#ffffff">14°C</text><text x="506" y="120" font-size="10" fill="#ced4da">warm</text><text x="506" y="170" font-size="10" fill="#ced4da">cool</text></g><text x="20" y="262" font-size="11" fill="#ced4da">The large, thin ears glow hottest (≈34°C): warm blood flows close to the surface and loses heat to the air.</text></svg>',
          },
          caption: 'Thermal image: the thin ears are the warmest part of the elephant — a large surface area through which heat is lost.',
        },
      },
      {
        label: 'c',
        text: 'Plants have adapted to their environments by evolving a variety of leaf shapes and sizes. Broad-leaf plants, like the maple tree found in temperate forests, have large leaves which grow quickly.\n\nOutline one possible advantage of maple leaves having a large surface area.',
        marks: 2,
        ph: 'State and briefly explain one advantage of large surface area in maple leaves...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="240" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Leaf adaptations: large vs small surface area</text><g><text x="140" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#2f9e44">Maple leaf (temperate)</text><path d="M140 70 C100 70 70 95 75 130 C60 125 55 150 80 155 C70 175 95 185 110 170 C115 195 165 195 170 170 C185 185 210 175 200 155 C225 150 220 125 205 130 C210 95 180 70 140 70 Z" fill="#69db7c" stroke="#2f9e44" stroke-width="2"/><line x1="140" y1="80" x2="140" y2="180" stroke="#2b8a3e" stroke-width="2"/><text x="140" y="210" font-size="11" text-anchor="middle" fill="#475569">Large surface area</text><text x="140" y="226" font-size="10" text-anchor="middle" fill="#94a3ad">more light captured for photosynthesis</text></g><g><text x="410" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#e8590c">Saguaro spine (desert)</text><line x1="410" y1="70" x2="410" y2="170" stroke="#e8590c" stroke-width="4" stroke-linecap="round"/><line x1="402" y1="78" x2="402" y2="160" stroke="#fab005" stroke-width="2"/><line x1="418" y1="78" x2="418" y2="160" stroke="#fab005" stroke-width="2"/><text x="410" y="210" font-size="11" text-anchor="middle" fill="#475569">Small surface area</text><text x="410" y="226" font-size="10" text-anchor="middle" fill="#94a3ad">less water lost by evaporation</text></g></svg>',
          },
          caption: 'A broad maple leaf has a large surface area; a cactus spine (a modified leaf) has a small surface area.',
        },
      },
      {
        label: 'd',
        text: 'Other plants, like the saguaro cactus found in the desert, have spines, which are modified leaves.\n\nOutline one possible advantage of cactus leaves having a small surface area.',
        marks: 2,
        ph: 'State and briefly explain one advantage of small surface area in cactus spines...',
      },
      {
        label: 'e',
        text: 'All cells need to obtain nutrients and eliminate waste efficiently. Because of this, cells are limited in size by the relationship between their surface area and their volume.\n\nExplain why having a high surface area to volume ratio is beneficial to a cell.',
        marks: 3,
        ph: 'Explain the benefit of a high SA:V ratio for cells, referencing nutrient uptake and waste removal...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Cube side length', 'Surface area', 'Volume', 'Surface area : volume ratio'],
            rows: [
              ['1 unit', '6 units²', '1 unit³', '6 : 1'],
              ['2 units', '24 units²', '8 units³', '3 : 1'],
              ['4 units', '96 units²', '64 units³', '1.5 : 1'],
            ],
          },
          caption: 'As a cell (modelled as a cube) gets larger, its surface area : volume ratio falls — so small cells exchange materials more efficiently.',
        },
      },
    ],
  },

  // ── Question 2 — Criterion A / D (12 marks) ─────────────────────────────────
  // North Pacific Ocean food web
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Ecosystems & Food Webs',
    topicCanonical: 'Food Chains & Webs',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Interdependency'],
    marks: 12,
    stem: 'Below is a food web from the North Pacific Ocean.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'North Pacific Ocean food web',
        source: 'arrows point from prey to predator (direction of energy flow)',
        nodes: [
          { id: 'phyto', label: 'Phytoplankton', color: '#2f9e44', detail: 'Producer (trophic level 1) — makes food by photosynthesis.' },
          { id: 'krill', label: 'Krill', color: '#1971c2', detail: 'Primary consumer (trophic level 2) — eats phytoplankton.' },
          { id: 'copepods', label: 'Copepods', color: '#1971c2', detail: 'Primary consumer (trophic level 2) — eats phytoplankton.' },
          { id: 'herring', label: 'Pacific herring', color: '#0b7285', detail: 'Eats krill and copepods (trophic level 3).' },
          { id: 'squid', label: 'Armhook squid', color: '#9c36b5', detail: 'Eats krill and copepods (trophic level 3).' },
          { id: 'salmon', label: 'Chinook salmon', color: '#e8590c', detail: 'Eats Pacific herring and armhook squid (trophic level 4).' },
          { id: 'halibut', label: 'Pacific halibut', color: '#c2255c', detail: 'Eats Pacific herring and armhook squid (trophic level 4).' },
          { id: 'whale', label: 'Resident killer whale', color: '#495057', detail: 'Top predator — feeds on Chinook salmon and Pacific halibut.' },
        ],
        edges: [
          { from: 'phyto', to: 'krill' },
          { from: 'phyto', to: 'copepods' },
          { from: 'krill', to: 'herring' },
          { from: 'copepods', to: 'herring' },
          { from: 'krill', to: 'squid' },
          { from: 'copepods', to: 'squid' },
          { from: 'herring', to: 'salmon' },
          { from: 'squid', to: 'salmon' },
          { from: 'herring', to: 'halibut' },
          { from: 'squid', to: 'halibut' },
          { from: 'salmon', to: 'whale' },
          { from: 'halibut', to: 'whale' },
        ],
      },
      caption: 'Hover an organism to see what it eats and its trophic level. Each arrow runs from prey to predator. Use it to build the food chain in part (a).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the food web above, construct a food chain that consists of five species including the Pacific halibut at the fourth trophic level.',
        marks: 3,
        ph: 'Write out a 5-species food chain with Pacific halibut at the 4th trophic level...',
        widget: 'match_drag_drop',
        widgetItems: ['Armhook squid', 'Chinook salmon', 'Copepods', 'Krill', 'Pacific herring', 'Phytoplankton', 'Resident killer whale'],
        widgetOptions: ['Trophic level 1', 'Trophic level 2', 'Trophic level 3', 'Trophic level 4 (Pacific halibut)', 'Trophic level 5'],
      },
      {
        label: 'b',
        text: 'State the trophic levels at which the resident killer whale feeds.',
        marks: 2,
        ph: 'State which trophic level(s) the killer whale occupies...',
      },
      {
        label: 'c',
        text: 'There are three different types of killer whale that live in the North Pacific Ocean. Each type has different physical features and eats a different diet.\n\nComment on whether the three different types of killer whale should be classified as three different species.',
        marks: 3,
        ph: 'Discuss species classification based on physical features and diet differences...',
      },
      {
        label: 'd',
        text: 'Scientists have mapped the genomes of different killer whale types. Suggest how this information could help scientists to decide whether the killer whale types should be classified as different species.',
        marks: 4,
        ph: 'Explain how genome mapping can inform species classification...',
      },
    ],
  },

  // ── Question 3 — Criterion B / C (10 marks) ─────────────────────────────────
  // Tree age estimation using growth factor values
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
      component: 'DataTable',
      data: {
        headers: ['Tree species', 'Growth factor', 'Relative growth speed'],
        rows: [
          ['Aspen', '2.00', 'fast'],
          ['Sycamore', '1.57', 'fairly fast'],
          ['Birch', '1.25', 'medium'],
          ['Beech', '1.00', 'slower'],
          ['Oak', '0.80', 'slow'],
        ],
      },
      caption: 'Growth factor values for some tree species. age (years) = (circumference in cm ÷ π) × growth factor. Faster-growing trees have a higher growth factor.',
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
        text: 'A student measures the circumference of a beech tree trunk at a height of 135 cm. The circumference is 170 cm. The growth factor for a beech tree is 1.00.\n\nUse the formula below to estimate the age of the beech tree. Show your working.\n\nage (years) = (circumference in cm ÷ π) × growth factor',
        marks: 3,
        ph: 'Show your calculation step by step. Age = (circumference ÷ π) × growth factor',
        ans: '54',
      },
      {
        label: 'c',
        text: 'An alternative method for estimating tree age is counting growth rings in the cross section of a trunk. Growth rings occur because trees grow faster in the spring and summer and slower in the autumn.\n\nOutline why counting both the light and dark rings would not accurately estimate the age of the tree.',
        marks: 2,
        ph: 'Explain why counting both light and dark rings is inaccurate...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="300" fill="#ffffff"/><text x="260" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cross-section of a tree trunk — growth rings</text><g><circle cx="180" cy="170" r="110" fill="#deb887"/><circle cx="180" cy="170" r="98" fill="none" stroke="#8b5a2b" stroke-width="6"/><circle cx="180" cy="170" r="84" fill="none" stroke="#f5deb3" stroke-width="6"/><circle cx="180" cy="170" r="72" fill="none" stroke="#8b5a2b" stroke-width="6"/><circle cx="180" cy="170" r="58" fill="none" stroke="#f5deb3" stroke-width="6"/><circle cx="180" cy="170" r="46" fill="none" stroke="#8b5a2b" stroke-width="6"/><circle cx="180" cy="170" r="32" fill="none" stroke="#f5deb3" stroke-width="6"/><circle cx="180" cy="170" r="20" fill="none" stroke="#8b5a2b" stroke-width="6"/><circle cx="180" cy="170" r="6" fill="#5c4033"/></g><g><line x1="290" y1="120" x2="345" y2="105" stroke="#94a3ad" stroke-width="1.5"/><rect x="345" y="92" width="14" height="14" fill="#f5deb3" stroke="#8b5a2b"/><text x="365" y="103" font-size="12" fill="#475569">Light ring — fast spring/summer growth</text><line x1="290" y1="170" x2="345" y2="170" stroke="#94a3ad" stroke-width="1.5"/><rect x="345" y="160" width="14" height="14" fill="#8b5a2b"/><text x="365" y="171" font-size="12" fill="#475569">Dark ring — slow autumn growth</text><text x="345" y="220" font-size="12" font-weight="700" fill="#1f2d3a">One YEAR = 1 light ring + 1 dark ring</text><text x="345" y="240" font-size="11" fill="#94a3ad">Counting both bands would double-count each year.</text></g></svg>',
          },
          caption: 'Each year produces one light ring (spring/summer) and one dark ring (autumn). Counting both bands per year would over-estimate the age.',
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
        text: 'The image below shows cross sections of the same species of tree of the same age — one grown in a temperate climate and one grown in a tropical climate.\n\nIdentify a limitation of each method used to estimate the age of trees.\n\n• Growth factor values\n• Counting rings',
        marks: 3,
        ph: 'State one limitation of the growth factor method and one limitation of counting rings...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Same species, same age — different climates</text><g><text x="150" y="52" font-size="12" font-weight="700" text-anchor="middle" fill="#1971c2">Temperate climate</text><circle cx="150" cy="160" r="86" fill="#deb887"/><circle cx="150" cy="160" r="76" fill="none" stroke="#8b5a2b" stroke-width="3"/><circle cx="150" cy="160" r="66" fill="none" stroke="#8b5a2b" stroke-width="3"/><circle cx="150" cy="160" r="56" fill="none" stroke="#8b5a2b" stroke-width="3"/><circle cx="150" cy="160" r="46" fill="none" stroke="#8b5a2b" stroke-width="3"/><circle cx="150" cy="160" r="36" fill="none" stroke="#8b5a2b" stroke-width="3"/><circle cx="150" cy="160" r="26" fill="none" stroke="#8b5a2b" stroke-width="3"/><circle cx="150" cy="160" r="16" fill="none" stroke="#8b5a2b" stroke-width="3"/><circle cx="150" cy="160" r="5" fill="#5c4033"/><text x="150" y="262" font-size="11" text-anchor="middle" fill="#475569">Clear rings — distinct seasons</text></g><g><text x="410" y="52" font-size="12" font-weight="700" text-anchor="middle" fill="#e8590c">Tropical climate</text><circle cx="410" cy="160" r="86" fill="#deb887"/><circle cx="410" cy="160" r="70" fill="none" stroke="#c9a36a" stroke-width="2"/><circle cx="410" cy="160" r="52" fill="none" stroke="#c9a36a" stroke-width="2"/><circle cx="410" cy="160" r="34" fill="none" stroke="#c9a36a" stroke-width="2"/><circle cx="410" cy="160" r="5" fill="#5c4033"/><text x="410" y="262" font-size="11" text-anchor="middle" fill="#475569">Faint/few rings — little seasonal change</text></g></svg>',
          },
          caption: 'Two trees of the same species and age: the temperate tree has clear annual rings; the tropical tree (little seasonal change) has faint, hard-to-count rings — a limitation of ring counting.',
        },
      },
    ],
  },

  // ── Question 4 — Criterion B / C (13 marks) ─────────────────────────────────
  // Sycamore tree age vs height investigation
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Data Collection & Analysis',
    topicCanonical: 'Life Cycles',
    topicGroup: 'Evolution',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 13,
    stem: 'Some MYP students wanted to investigate the relationship between the age and height of sycamore trees growing in their local forest. The forest had over 500 sycamore trees. After discussing with their teacher how height could be estimated, they collected data on a sample of 20 randomly selected sycamore trees.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Age vs height of sycamore trees',
        xLabel: 'Age',
        yLabel: 'Height',
        xUnit: 'years',
        yUnit: 'm',
        xMin: 0,
        xMax: 80,
        yMin: 0,
        yMax: 25,
        xStep: 10,
        yStep: 5,
        lobf: true,
        dataPoints: [
          { x: 5, y: 3 },
          { x: 10, y: 7 },
          { x: 20, y: 12 },
          { x: 40, y: 17 },
          { x: 80, y: 22 },
        ],
      },
      caption: 'The five data points from the table plotted with a line of best fit. Read off the gradient (≈ 0.25 m/year) for part (d); notice the curve flattens, which matters for part (e).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Suggest why the sample of 20 sycamore trees was randomly selected.',
        marks: 2,
        ph: 'Explain the purpose of random sampling in this investigation...',
      },
      {
        label: 'b',
        text: 'Outline how the sample could be randomly selected.',
        marks: 1,
        ph: 'Describe a method for randomly selecting trees from the forest...',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="320" fill="#ffffff"/><text x="230" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Forest gridded for random sampling</text><g transform="translate(40,46)"><rect x="0" y="0" width="240" height="240" fill="#ebfbee" stroke="#2f9e44" stroke-width="1.5"/><g stroke="#b2f2bb" stroke-width="1"><line x1="40" y1="0" x2="40" y2="240"/><line x1="80" y1="0" x2="80" y2="240"/><line x1="120" y1="0" x2="120" y2="240"/><line x1="160" y1="0" x2="160" y2="240"/><line x1="200" y1="0" x2="200" y2="240"/><line x1="0" y1="40" x2="240" y2="40"/><line x1="0" y1="80" x2="240" y2="80"/><line x1="0" y1="120" x2="240" y2="120"/><line x1="0" y1="160" x2="240" y2="160"/><line x1="0" y1="200" x2="240" y2="200"/></g><g fill="#40c057"><circle cx="20" cy="30" r="6"/><circle cx="95" cy="18" r="6"/><circle cx="150" cy="55" r="6"/><circle cx="210" cy="35" r="6"/><circle cx="55" cy="95" r="6"/><circle cx="130" cy="110" r="6"/><circle cx="185" cy="135" r="6"/><circle cx="30" cy="160" r="6"/><circle cx="100" cy="175" r="6"/><circle cx="170" cy="205" r="6"/><circle cx="220" cy="195" r="6"/><circle cx="65" cy="225" r="6"/></g><g fill="#e8590c" stroke="#ffffff" stroke-width="1"><circle cx="95" cy="18" r="9"/><circle cx="55" cy="95" r="9"/><circle cx="185" cy="135" r="9"/><circle cx="100" cy="175" r="9"/></g><text x="0" y="-6" font-size="10" fill="#94a3ad" text-anchor="start">columns 1–6</text></g><g transform="translate(300,60)"><circle cx="8" cy="6" r="6" fill="#e8590c"/><text x="22" y="10" font-size="11" fill="#475569">selected (random coords)</text><circle cx="8" cy="32" r="6" fill="#40c057"/><text x="22" y="36" font-size="11" fill="#475569">not selected</text><text x="0" y="72" font-size="11" fill="#1f2d3a" font-weight="700">Method:</text><text x="0" y="92" font-size="10.5" fill="#475569">1. Overlay a numbered grid.</text><text x="0" y="108" font-size="10.5" fill="#475569">2. Use a random-number</text><text x="0" y="122" font-size="10.5" fill="#475569">   generator for coordinates.</text><text x="0" y="138" font-size="10.5" fill="#475569">3. Sample the tree at each</text><text x="0" y="152" font-size="10.5" fill="#475569">   chosen square.</text></g></svg>',
          },
          caption: 'A grid is laid over the forest and random coordinates pick which trees to sample — removing bias so the sample represents the whole population.',
        },
      },
      {
        label: 'c',
        text: 'The students collected the following data from five of the 20 trees:\n\n| Age (years) | Height (m) |\n|-------------|------------|\n| 80          | 22         |\n| 40          | 17         |\n| 20          | 12         |\n| 10          | 7          |\n| 5           | 3          |\n\nPlot the data from the table on the grid. Draw a line of best fit.',
        marks: 5,
        ph: 'Plot all 5 data points and draw a line of best fit. Marks: axes labelled (1), correct scale (1), all points plotted (2), line of best fit (1).',
        widget: 'radio_select',
        widgetOptions: ['I have plotted the points and drawn a line of best fit'],
      },
      {
        label: 'd',
        text: 'Using your graph, deduce the growth rate of the sycamore tree in metres per year.',
        marks: 2,
        ph: 'Calculate growth rate from the graph (change in height ÷ change in age)...',
      },
      {
        label: 'e',
        text: 'The students used their graph to predict the height of a 100-year-old sycamore tree. Outline one reason why this prediction may not be reliable.',
        marks: 2,
        ph: 'Explain why extrapolating the graph may give an unreliable prediction...',
      },
      {
        label: 'f',
        text: 'The growth factor for a sycamore tree is 1.57. Calculate the age of a sycamore tree with a circumference of 250 cm. Show your working.',
        marks: 1,
        ph: 'Use age = (circumference ÷ π) × growth factor to calculate the sycamore\'s age.',
        ans: '125',
      },
    ],
  },

  // ── Question 5 — Criterion B / C (10 marks) ─────────────────────────────────
  // Paper helicopter experiment
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Experimental Design — Paper Helicopter',
    marks: 10,
    stem: 'A paper helicopter model is made by following the steps shown. The time spent in the air is measured for three different drop heights.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="300" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Paper-helicopter drop experiment (model of a maple seed)</text><g><text x="120" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">The model helicopter</text><line x1="60" y1="90" x2="180" y2="90" stroke="#1971c2" stroke-width="3"/><path d="M60 90 q-6 -16 6 -22" fill="none" stroke="#1971c2" stroke-width="2.5"/><path d="M180 90 q6 16 -6 22" fill="none" stroke="#1971c2" stroke-width="2.5"/><rect x="116" y="90" width="8" height="70" fill="#adb5bd"/><rect x="114" y="158" width="12" height="10" rx="2" fill="#868e96"/><text x="120" y="186" font-size="10" text-anchor="middle" fill="#94a3ad">two wings + paperclip on the base</text></g><g><text x="400" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">Drop &amp; time</text><line x1="320" y1="80" x2="320" y2="250" stroke="#212529" stroke-width="2"/><g stroke="#868e96" stroke-width="1"><line x1="312" y1="100" x2="320" y2="100"/><line x1="312" y1="150" x2="320" y2="150"/><line x1="312" y1="200" x2="320" y2="200"/><line x1="312" y1="250" x2="320" y2="250"/></g><text x="308" y="104" font-size="9" text-anchor="end" fill="#475569">2.00 m</text><text x="308" y="154" font-size="9" text-anchor="end" fill="#475569">0.75 m</text><text x="308" y="204" font-size="9" text-anchor="end" fill="#475569">0.50 m</text><text x="308" y="252" font-size="9" text-anchor="end" fill="#475569">0 m</text><g transform="translate(360,96)"><line x1="-10" y1="0" x2="10" y2="0" stroke="#1971c2" stroke-width="2.5"/><rect x="-1" y="0" width="3" height="12" fill="#adb5bd"/></g><path d="M362 110 q14 18 0 34 q-14 18 0 34 q14 18 0 34 q-14 18 0 34" fill="none" stroke="#74c0fc" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="430" y="120" width="80" height="34" rx="5" fill="#212529"/><text x="470" y="142" font-size="13" font-family="monospace" text-anchor="middle" fill="#69db7c">00:02.16</text><text x="470" y="170" font-size="9" text-anchor="middle" fill="#94a3ad">stop-clock: time in air</text></g></svg>',
      },
      caption: 'A paper helicopter is dropped from a measured height; the stop-clock records the time it spends in the air. Drop height is the independent variable.',
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
        text: 'The students collected the following data:\n\n| Height from which seed is dropped (m) | Time spent in the air, Trial 1 (s) | Time spent in the air, Trial 2 (s) |\n|----------------------------------------|--------------------------------------|--------------------------------------|\n| 0.50 | 0.56 | 0.67 |\n| 0.75 | 1.15 | 1.07 |\n| 2.00 | 2.16 | 2.38 |\n\nDescribe the pattern shown in the data.',
        marks: 2,
        ph: 'Describe the relationship between drop height and time in air...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Height from which seed is dropped / m', 'Time spent in the air, Trial 1 / s', 'Time spent in the air, Trial 2 / s'],
            rows: [
              ['0.50', '0.56', '0.67'],
              ['0.75', '1.15', '1.07'],
              ['2.00', '2.16', '2.38'],
            ],
          },
          caption: 'Time spent in the air for three drop heights, repeated over two trials. As drop height increases, the time in the air increases.',
        },
      },
      {
        label: 'd',
        text: 'Identify one limitation of using a paper helicopter as a model for a real maple seed.',
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
  // Design a full investigation: effect of wing angle on seed fall time
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation Design',
    marks: 16,
    stem: 'Design an investigation to test how the angle of the wing of the paper helicopter affects the time the helicopter spends in the air.\n\nYour investigation should be clearly described so that it could be repeated by another student. Use the method from Question 5 as a starting point.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="260" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Independent variable: wing angle (θ)</text><g transform="translate(110,150)"><rect x="-3" y="-60" width="6" height="60" fill="#adb5bd"/><line x1="0" y1="-60" x2="0" y2="-60" /><line x1="0" y1="-60" x2="48" y2="-60" stroke="#1971c2" stroke-width="3"/><line x1="0" y1="-60" x2="-48" y2="-60" stroke="#1971c2" stroke-width="3"/><path d="M0 -60 m18 0 a18 18 0 0 0 -3 -8" fill="none" stroke="#e8590c" stroke-width="1.5"/><text x="0" y="28" font-size="11" text-anchor="middle" fill="#475569">θ = 0° (flat)</text></g><g transform="translate(280,150)"><rect x="-3" y="-60" width="6" height="60" fill="#adb5bd"/><line x1="0" y1="-60" x2="42" y2="-78" stroke="#1971c2" stroke-width="3"/><line x1="0" y1="-60" x2="-42" y2="-78" stroke="#1971c2" stroke-width="3"/><path d="M0 -60 l18 0 a18 18 0 0 0 -2 -8" fill="none" stroke="#e8590c" stroke-width="1.5"/><text x="0" y="28" font-size="11" text-anchor="middle" fill="#475569">θ = 25°</text></g><g transform="translate(450,150)"><rect x="-3" y="-60" width="6" height="60" fill="#adb5bd"/><line x1="0" y1="-60" x2="30" y2="-96" stroke="#1971c2" stroke-width="3"/><line x1="0" y1="-60" x2="-30" y2="-96" stroke="#1971c2" stroke-width="3"/><path d="M0 -60 l16 0 a16 16 0 0 0 -1 -8" fill="none" stroke="#e8590c" stroke-width="1.5"/><text x="0" y="28" font-size="11" text-anchor="middle" fill="#475569">θ = 45°</text></g><text x="280" y="216" font-size="12" text-anchor="middle" fill="#1f2d3a" font-weight="700">Change only the wing angle; keep drop height, paper, paperclip mass &amp; wing length constant.</text><text x="280" y="238" font-size="11" text-anchor="middle" fill="#94a3ad">Dependent variable: time spent in the air (measured with a stop-clock, repeated).</text></svg>',
      },
      caption: 'The investigation changes one variable — the angle of the wings — and measures how long the helicopter stays in the air. Everything else must be kept constant.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Design a full scientific investigation to determine how the wing angle of the paper helicopter affects the time it spends in the air. Your answer should include:\n\n• A focused research question\n• Identification of independent, dependent, and controlled variables\n• A step-by-step method that could be repeated by another student\n• Identification of safety and ethical considerations\n• A description of how data will be collected and recorded\n• How you will process the data to reach a conclusion',
        marks: 16,
        ph: 'Write your complete investigation design here. Include research question, variables, method, safety considerations, data collection table, and data processing plan...',
      },
    ],
  },

  // ── Question 7 — Criterion D / A (11 marks) ──────────────────────────────────
  // Dehydration, osmosis, reverse osmosis
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="220" fill="#ffffff"/><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Producing freshwater from seawater by reverse osmosis</text><g><rect x="20" y="80" width="74" height="70" rx="6" fill="#74c0fc"/><text x="57" y="120" font-size="11" text-anchor="middle" fill="#1b3a57">Seawater</text><text x="57" y="168" font-size="10" text-anchor="middle" fill="#475569">1. Pump in</text></g><path d="M96 115 h34" stroke="#495057" stroke-width="2" marker-end="url(#a7)"/><g><rect x="132" y="72" width="96" height="86" rx="6" fill="#e9ecef" stroke="#868e96"/><line x1="180" y1="72" x2="180" y2="158" stroke="#e8590c" stroke-width="3" stroke-dasharray="4 3"/><text x="180" y="66" font-size="9" text-anchor="middle" fill="#e8590c">semipermeable membrane</text><text x="156" y="120" font-size="9" text-anchor="middle" fill="#475569">high</text><text x="156" y="132" font-size="9" text-anchor="middle" fill="#475569">pressure</text><text x="204" y="120" font-size="9" text-anchor="middle" fill="#1971c2">pure</text><text x="204" y="132" font-size="9" text-anchor="middle" fill="#1971c2">water</text><text x="180" y="174" font-size="10" text-anchor="middle" fill="#475569">2. Reverse osmosis</text></g><path d="M230 145 h30" stroke="#495057" stroke-width="2" marker-end="url(#a7)"/><g><rect x="262" y="120" width="78" height="46" rx="6" fill="#ffc9c9"/><text x="301" y="140" font-size="10" text-anchor="middle" fill="#a61e4d">Waste brine</text><text x="301" y="156" font-size="9" text-anchor="middle" fill="#a61e4d">(salty)</text><text x="301" y="184" font-size="10" text-anchor="middle" fill="#475569">3. Concentrated waste</text></g><path d="M228 100 h120" stroke="#1971c2" stroke-width="2" marker-end="url(#a7)"/><g><rect x="350" y="78" width="84" height="44" rx="6" fill="#a5d8ff"/><text x="392" y="104" font-size="11" text-anchor="middle" fill="#1b3a57">Freshwater</text></g><path d="M436 100 h30" stroke="#495057" stroke-width="2" marker-end="url(#a7)"/><g><rect x="468" y="76" width="74" height="48" rx="6" fill="#d0bfff"/><text x="505" y="104" font-size="11" text-anchor="middle" fill="#4a2c8a">Store &amp; supply</text><text x="505" y="140" font-size="10" text-anchor="middle" fill="#475569">4. Deliver water</text></g><text x="320" y="208" font-size="11" text-anchor="middle" fill="#94a3ad">High pressure forces water (but not salt) through the membrane — this needs a lot of energy and makes salty brine.</text><defs><marker id="a7" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#495057"/></marker></defs></svg>',
      },
      caption: 'Reverse osmosis pushes seawater through a semipermeable membrane under high pressure: freshwater passes through while salty brine waste is left behind.',
    },
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
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="280" fill="#ffffff"/><text x="260" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Osmosis across the cell membrane</text><rect x="20" y="44" width="220" height="200" rx="8" fill="#e7f5ff"/><text x="130" y="66" font-size="11" font-weight="700" text-anchor="middle" fill="#1971c2">OUTSIDE cell</text><text x="130" y="84" font-size="10" text-anchor="middle" fill="#475569">LOW solute concentration</text><text x="130" y="98" font-size="10" text-anchor="middle" fill="#475569">(more free water)</text><g fill="#1971c2"><circle cx="60" cy="130" r="3"/><circle cx="95" cy="160" r="3"/><circle cx="70" cy="200" r="3"/></g><g><circle cx="330" cy="150" r="96" fill="#fff0f6" stroke="#212529" stroke-width="6"/><text x="330" y="100" font-size="11" font-weight="700" text-anchor="middle" fill="#c2255c">INSIDE cell</text><text x="330" y="116" font-size="10" text-anchor="middle" fill="#475569">HIGH solute</text><g fill="#c2255c"><circle cx="300" cy="145" r="4"/><circle cx="345" cy="135" r="4"/><circle cx="320" cy="170" r="4"/><circle cx="360" cy="165" r="4"/><circle cx="335" cy="190" r="4"/><circle cx="305" cy="185" r="4"/><circle cx="355" cy="195" r="4"/></g></g><g><line x1="180" y1="150" x2="250" y2="150" stroke="#2f9e44" stroke-width="6" marker-end="url(#netarrow)"/><text x="215" y="138" font-size="11" font-weight="700" text-anchor="middle" fill="#2f9e44">net water in</text></g><text x="260" y="270" font-size="10.5" text-anchor="middle" fill="#94a3ad">Water moves by osmosis from low solute (outside) to high solute (inside), across the partially permeable membrane.</text><defs><marker id="netarrow" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#2f9e44"/></marker></defs></svg>',
          },
          caption: 'The cell has a high solute concentration inside and low outside, so the net movement of water by osmosis is INTO the cell.',
        },
      },
      {
        label: 'c',
        text: 'Reverse osmosis can be used to provide freshwater from seawater. The process pumps seawater through a semipermeable membrane under high pressure.\n\nDiscuss the implications of using reverse osmosis to provide freshwater. In your answer, you should include:\n• the impacts on different ecosystems\n• the consequences of high energy use\n• a concluding appraisal',
        marks: 5,
        ph: 'Discuss ecosystem impacts (marine ecosystems, energy source effects), energy consequences, and provide a balanced conclusion...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Stage of reverse osmosis', 'Possible impact on ecosystems / energy'],
            rows: [
              ['1. Pumping seawater in', 'Intake pipes can trap and kill marine organisms (fish, larvae, plankton).'],
              ['2. High-pressure membrane', 'Needs large amounts of energy; if from fossil fuels, releases CO₂ → climate change.'],
              ['3. Waste brine returned to sea', 'Very salty, dense brine sinks and can harm seabed and marine life near the outlet.'],
              ['4. Freshwater supplied', 'Provides reliable drinking water in dry regions where rainfall is scarce.'],
            ],
          },
          caption: 'The benefits and drawbacks at each stage of reverse osmosis. Use this to discuss ecosystem impacts, the consequences of high energy use, and to reach a concluding appraisal.',
        },
      },
    ],
  },

  // ── Question 8 — Criterion D (15 marks) ──────────────────────────────────────
  // Water cycle, precipitation, water sustainability
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Water Cycle & Sustainability',
    topicCanonical: 'Nutrient/Carbon/Nitrogen Cycles',
    topicGroup: 'Organisms',
    topicsAlso: ['Pollution & Conservation'],
    marks: 15,
    stem: 'The water cycle describes the continuous movement of water on Earth.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a5d8ff"/><stop offset="1" stop-color="#d0ebff"/></linearGradient><marker id="wc" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#e8590c"/></marker></defs><rect width="600" height="340" fill="url(#sky)"/><text x="300" y="26" font-size="16" font-weight="800" text-anchor="middle" fill="#1864ab">The water cycle</text><path d="M0 250 Q120 210 260 245 T600 240 L600 340 L0 340 Z" fill="#4dabf7"/><path d="M380 250 L470 150 L560 250 Z" fill="#82c91e"/><path d="M300 260 L370 180 L440 260 Z" fill="#a9e34b"/><circle cx="520" cy="60" r="26" fill="#ffd43b"/><g><ellipse cx="150" cy="80" rx="58" ry="26" fill="#ffffff"/><ellipse cx="190" cy="92" rx="40" ry="20" fill="#f1f3f5"/></g><circle cx="1" cy="1" r="0" /><g fill="#1971c2"><line x1="135" y1="110" x2="135" y2="130" stroke="#1971c2" stroke-width="2"/><line x1="160" y1="112" x2="160" y2="134" stroke="#1971c2" stroke-width="2"/><line x1="185" y1="110" x2="185" y2="130" stroke="#1971c2" stroke-width="2"/></g><g stroke="#e8590c" stroke-width="4" fill="none"><path d="M460 235 q-20 -70 -150 -120" marker-end="url(#wc)"/><path d="M250 150 q40 -50 120 -55" marker-end="url(#wc)"/><path d="M120 150 q-20 50 10 90" marker-end="url(#wc)"/><path d="M470 250 q-30 30 -120 40" marker-end="url(#wc)"/></g><g font-size="12" font-weight="700"><rect x="44" y="58" width="120" height="22" rx="11" fill="#e8590c" opacity="0.92"/><text x="104" y="73" text-anchor="middle" fill="#ffffff">1 (cloud top)</text><rect x="60" y="172" width="120" height="22" rx="11" fill="#e8590c" opacity="0.92"/><text x="120" y="187" text-anchor="middle" fill="#ffffff">2 (falling rain)</text><rect x="392" y="196" width="150" height="22" rx="11" fill="#e8590c" opacity="0.92"/><text x="467" y="211" text-anchor="middle" fill="#ffffff">3 (rising from sea)</text><rect x="220" y="300" width="160" height="22" rx="11" fill="#e8590c" opacity="0.92"/><text x="300" y="315" text-anchor="middle" fill="#ffffff">4 (rivers / lakes)</text></g></svg>',
      },
      caption: 'The four numbered positions in the water cycle: 1 cloud formation, 2 falling rain, 3 water rising from the sea surface, 4 water gathering in rivers and lakes. Match condensation, precipitation, evaporation and collection in part (a).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Label the water cycle diagram. Drag the correct labels to the diagram.',
        marks: 1,
        ph: 'Place the labels: Condensation, Precipitation, Evaporation, Collection.',
        widget: 'match_drag_drop',
        widgetItems: ['Condensation', 'Precipitation', 'Evaporation', 'Collection'],
        widgetOptions: ['Position 1 (top – cloud formation)', 'Position 2 (falling rain)', 'Position 3 (water rising from surface)', 'Position 4 (water gathering in rivers/lakes)'],
      },
      {
        label: 'b',
        text: 'Some of the processes in the water cycle are changing due to climate change. Precipitation is one of these processes.\n\nOutline the consequences to a region if precipitation changes due to climate change.\n\n• Increased precipitation\n• Decreased precipitation',
        marks: 2,
        ph: 'For each: state one consequence of increased precipitation and one of decreased precipitation...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Change in precipitation', 'Possible consequence for a region'],
            rows: [
              ['Increased precipitation', 'Flooding; waterlogged soil and damaged crops; landslides; spread of waterborne disease.'],
              ['Decreased precipitation', 'Drought; crop failure and food shortage; lower river/reservoir levels; water shortages.'],
            ],
          },
          caption: 'Climate change can increase or decrease precipitation in a region, each with different consequences.',
        },
      },
      {
        label: 'c',
        text: 'Water is a finite resource. It is essential for life. It is necessary for hydration, hygiene, agriculture and food production. Human actions have changed the water cycle.\n\nEvaluate the actions that individuals and governments can take to ensure water is used sustainably. In your answer, you should include:\n\n• steps that could be taken to reduce water shortage in the home\n• a description of how an individual\'s dietary choices can affect their water footprint\n• a suggestion of how government policies can influence water usage\n• a concluding appraisal',
        marks: 12,
        ph: 'Evaluate individual and government actions for sustainable water use. Include home water saving, dietary water footprint (e.g. meat vs. vegetables), government policies (laws, education, subsidies), and a balanced concluding appraisal...',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Food product', 'Water footprint / litres per kg'],
            rows: [
              ['Beef', '15 400'],
              ['Cheese', '5 000'],
              ['Chicken', '4 300'],
              ['Rice', '2 500'],
              ['Bread (wheat)', '1 600'],
              ['Vegetables', '320'],
            ],
          },
          caption: 'The hidden water "footprint" of producing different foods. Use it when discussing how dietary choices affect an individual\'s water use sustainably.',
        },
      },
    ],
  },
]
