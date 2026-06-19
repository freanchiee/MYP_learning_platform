import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2021',
  subject: 'Biology',
  session: 'November',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ── Q1 — Flying Foxes (6 marks, Crit A) ─────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Flying Foxes — Ecology and Interdependence',
    topicCanonical: 'Interdependency',
    topicGroup: 'Organisms',
    topicsAlso: ['Food Chains & Webs'],
    marks: 6,
    stem: 'Flying foxes are a macro-bat found in the southern hemisphere. Unlike other types of bat, flying foxes rely on fruit, leaves or nectar as a food source. They live in large colonies in rural and residential areas. The food web shows feeding relationships in an ecosystem. Flying foxes are a keystone species.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Food web of the flying-fox ecosystem',
        center: { label: 'Flying fox', detail: 'Macro-bat that feeds on fruit, leaves and nectar; eats moth larvae and is preyed on by snakes and eagles. A keystone species.', color: '#9c36b5' },
        nodes: [
          { id: 'palm', label: 'Palm tree', color: '#2f9e44', detail: 'Producer — makes its own food by photosynthesis. Provides fruit and nectar.' },
          { id: 'euc', label: 'Eucalyptus', color: '#2f9e44', detail: 'Producer — photosynthesises. Source of leaves and nectar.' },
          { id: 'mango', label: 'Mango tree', color: '#2f9e44', detail: 'Producer — photosynthesises. Bears mango fruit eaten by flying foxes.' },
          { id: 'grass', label: 'Grass', color: '#2f9e44', detail: 'Producer — photosynthesises. Eaten by the wood grub and mouse.' },
          { id: 'grub', label: 'Wood grub', color: '#f08c00', detail: 'Primary consumer — feeds on plant material; eaten by the tree frog.' },
          { id: 'moth', label: 'Moth larva', color: '#f08c00', detail: 'Primary consumer (crop pest) — eaten by the flying fox.' },
          { id: 'mouse', label: 'Mouse', color: '#f08c00', detail: 'Primary consumer — eats grass; prey of the carpet snake.' },
          { id: 'frog', label: 'Tree frog', color: '#1971c2', detail: 'Consumer — eats wood grubs; prey of the wedge-tailed eagle.' },
          { id: 'snake', label: 'Carpet snake', color: '#c2255c', detail: 'Predator — eats the mouse and flying fox.' },
          { id: 'eagle', label: 'Wedge-tailed eagle', color: '#495057', detail: 'Top predator — eats the tree frog and flying fox.' },
        ],
        edges: [
          { from: 'palm', to: 'moth', label: 'eaten by' },
          { from: 'euc', to: 'moth' },
          { from: 'mango', to: 'moth' },
          { from: 'grass', to: 'grub' },
          { from: 'grass', to: 'mouse' },
          { from: 'grub', to: 'frog' },
          { from: 'mouse', to: 'snake' },
          { from: 'frog', to: 'eagle' },
        ],
      },
      caption: 'Arrows show the direction of energy flow (eaten by →). The flying fox links the producers (green) to the predators (snake, eagle). Hover a node for its role.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the category that best describes a flying fox.',
        marks: 1,
        ph: 'Mammal.',
        widget: 'radio_select',
        widgetOptions: ['Mammal', 'Bird', 'Reptile', 'Insect'],
      },
      {
        label: 'b',
        text: 'Flying foxes play an important role in pollination and seed dispersal. **State** why these processes are important for plants.',
        marks: 2,
        ph: 'Pollination: pollen is transferred from one plant to another for reproduction / to increase genetic variation. Seed dispersal: seeds are transported away from the parent plant for better chance to survive / reduced competition.',
      },
      {
        label: 'c',
        text: '**Identify** a producer in the food web.',
        marks: 1,
        ph: 'Palm tree / eucalyptus / mango tree / grass. (Do not accept "tree" alone.)',
      },
      {
        label: 'd',
        text: 'Use the food web to **suggest** one advantage and one disadvantage of flying foxes to mango farmers.',
        marks: 2,
        ph: 'Advantage: flying foxes eat moth larvae which destroy the mango crop / act as pollinators. Disadvantage: flying foxes eat mango, reducing profit.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Flying fox and the mango crop</text><g><rect x="40" y="120" width="90" height="44" rx="6" fill="#eaf7ee" stroke="#2f9e44"/><text x="85" y="146" font-size="12" font-weight="700" text-anchor="middle" fill="#2f9e44">Mango tree</text></g><g><rect x="235" y="40" width="90" height="44" rx="6" fill="#f3e8fb" stroke="#9c36b5"/><text x="280" y="66" font-size="12" font-weight="700" text-anchor="middle" fill="#9c36b5">Flying fox</text></g><g><rect x="235" y="135" width="90" height="44" rx="6" fill="#fff4e6" stroke="#f08c00"/><text x="280" y="161" font-size="12" font-weight="700" text-anchor="middle" fill="#e8590c">Moth larva</text></g><defs><marker id="ar" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#475569"/></marker></defs><line x1="130" y1="142" x2="233" y2="157" stroke="#475569" stroke-width="1.6" marker-end="url(#ar)"/><text x="150" y="178" font-size="10" fill="#7a3d12">larva eats mango leaves</text><line x1="280" y1="135" x2="280" y2="86" stroke="#475569" stroke-width="1.6" marker-end="url(#ar)"/><text x="290" y="115" font-size="10" fill="#9c36b5">fox eats moth larva</text><line x1="235" y1="62" x2="130" y2="128" stroke="#c2255c" stroke-width="1.6" stroke-dasharray="5 4" marker-end="url(#ar)"/><text x="120" y="92" font-size="10" fill="#c2255c">fox also eats mango fruit</text></svg>',
          },
          caption: 'The mango farmer benefits when flying foxes eat the moth larvae that damage the crop, but loses fruit the foxes eat directly.',
        },
      },
    ],
  },

  // ── Q2 — Cell Division (8 marks, Crit A) ─────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Cell Division — Mitosis and Meiosis',
    topicCanonical: 'Cell Division (Mitosis & Meiosis)',
    topicGroup: 'Evolution',
    marks: 8,
    stem: 'These models represent two different processes of cell division: mitosis and meiosis.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="320" fill="#ffffff"/><line x1="310" y1="30" x2="310" y2="300" stroke="#e2e8f0" stroke-width="1"/><text x="155" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1971c2">Mitosis</text><text x="465" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#e8590c">Meiosis</text><defs><marker id="md" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#94a3b8"/></marker><marker id="md2" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#94a3b8"/></marker></defs><circle cx="155" cy="55" r="20" fill="#dbeafe" stroke="#1971c2" stroke-width="2"/><circle cx="155" cy="55" r="6" fill="#1971c2"/><text x="195" y="58" font-size="10" fill="#475569">parent cell (46)</text><line x1="155" y1="76" x2="155" y2="98" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#md2)"/><text x="200" y="92" font-size="9" fill="#94a3b8">DNA replicates</text><circle cx="155" cy="120" r="20" fill="#dbeafe" stroke="#1971c2" stroke-width="2"/><circle cx="148" cy="120" r="5" fill="#1971c2"/><circle cx="162" cy="120" r="5" fill="#1971c2"/><line x1="155" y1="141" x2="120" y2="170" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#md2)"/><line x1="155" y1="141" x2="190" y2="170" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#md2)"/><circle cx="115" cy="190" r="17" fill="#dbeafe" stroke="#1971c2" stroke-width="2"/><circle cx="115" cy="190" r="5" fill="#1971c2"/><circle cx="195" cy="190" r="17" fill="#dbeafe" stroke="#1971c2" stroke-width="2"/><circle cx="195" cy="190" r="5" fill="#1971c2"/><text x="155" y="230" font-size="10" text-anchor="middle" fill="#1971c2" font-weight="700">2 identical daughter cells (46)</text><circle cx="465" cy="55" r="20" fill="#ffe8d6" stroke="#e8590c" stroke-width="2"/><circle cx="465" cy="55" r="6" fill="#e8590c"/><text x="505" y="58" font-size="10" fill="#475569">parent cell</text><line x1="465" y1="76" x2="465" y2="96" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#md)"/><text x="510" y="90" font-size="9" fill="#94a3b8">2 divisions</text><line x1="465" y1="96" x2="430" y2="120" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#md)"/><line x1="465" y1="96" x2="500" y2="120" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#md)"/><circle cx="425" cy="138" r="15" fill="#ffe8d6" stroke="#e8590c" stroke-width="1.6"/><circle cx="505" cy="138" r="15" fill="#ffe8d6" stroke="#e8590c" stroke-width="1.6"/><line x1="425" y1="153" x2="405" y2="172" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#md)"/><line x1="425" y1="153" x2="445" y2="172" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#md)"/><line x1="505" y1="153" x2="485" y2="172" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#md)"/><line x1="505" y1="153" x2="525" y2="172" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#md)"/><circle cx="400" cy="188" r="12" fill="#ffe8d6" stroke="#e8590c" stroke-width="1.4"/><circle cx="450" cy="188" r="12" fill="#ffe8d6" stroke="#e8590c" stroke-width="1.4"/><circle cx="480" cy="188" r="12" fill="#ffe8d6" stroke="#e8590c" stroke-width="1.4"/><circle cx="530" cy="188" r="12" fill="#ffe8d6" stroke="#e8590c" stroke-width="1.4"/><text x="465" y="230" font-size="10" text-anchor="middle" fill="#e8590c" font-weight="700">4 non-identical daughter cells (23)</text><text x="310" y="270" font-size="10" text-anchor="middle" fill="#64748b">Both begin from a single parent cell; mitosis gives 2 identical cells, meiosis gives 4 genetically different gametes.</text></svg>',
      },
      caption: 'Mitosis produces two genetically identical daughter cells; meiosis produces four genetically different gametes after two divisions. A static labelled comparison is used because both processes are fixed sequences with no parametric variable to vary.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** two reasons why cells must divide in organisms.',
        marks: 2,
        ph: 'Growth; repair or replacement of damaged cells; production of gametes (sexual reproduction); asexual reproduction.',
      },
      {
        label: 'b',
        text: '**Select** similarities and differences between mitosis and meiosis and drag the characteristics to the correct location in the Venn diagram.',
        marks: 2,
        ph: 'Mitosis only: daughter cells have 46 chromosomes. Both: begins with a single parent cell. Meiosis only: begins with two copies of each chromosome; genetically non-identical daughter cells.',
        widget: 'variable_classify',
        widgetItems: ['Mitosis only', 'Both', 'Meiosis only'],
        widgetOptions: ['Begins with two copies of each chromosome', 'Begins with a single parent cell', 'Daughter cells have 46 chromosomes', 'Genetically non-identical daughter cells'],
      },
      {
        label: 'c',
        text: 'Fertilization is the combination of genetic material from a sperm and an egg. **Explain** how fertilization leads to genetic variation in a population.',
        marks: 4,
        ph: 'Every individual has different genetic material; every sex cell/gamete is unique; genetic material from two parents is combined; each sex cell has equal chance of being fertilised; offspring express traits from both parents → each individual is unique.',
      },
    ],
  },

  // ── Q3 — Homeostasis and Temperature Regulation (10 marks, Crit A) ───────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Homeostasis — Temperature Regulation',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    marks: 10,
    stem: 'This model represents an example of homeostasis in the human body. Normal body temperature is 36.5°C – 37.5°C.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="340" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Homeostasis: temperature regulation</text><ellipse cx="300" cy="172" rx="46" ry="64" fill="#eef2f7" stroke="#94a3b8" stroke-width="1.5"/><circle cx="300" cy="120" r="18" fill="#eef2f7" stroke="#94a3b8" stroke-width="1.5"/><rect x="270" y="158" width="60" height="14" rx="3" fill="#f8d7da" stroke="#c2255c"/><text x="300" y="250" font-size="11" text-anchor="middle" font-weight="700" fill="#1f2d3a">Normal body temperature</text><text x="300" y="266" font-size="11" text-anchor="middle" fill="#c2255c">36.5°C – 37.5°C</text><defs><marker id="hm" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 Z" fill="#1971c2"/></marker></defs><g><rect x="380" y="48" width="170" height="40" rx="6" fill="#e7f5ff" stroke="#1971c2"/><text x="465" y="64" font-size="11" text-anchor="middle" fill="#1971c2">Body temperature RISES</text><text x="465" y="80" font-size="10" text-anchor="middle" fill="#475569">(too hot)</text></g><g><rect x="380" y="108" width="170" height="40" rx="6" fill="#fff0f6" stroke="#c2255c"/><text x="465" y="124" font-size="11" text-anchor="middle" fill="#c2255c">Body systems interact</text><text x="465" y="140" font-size="10" text-anchor="middle" fill="#475569">cool the body down</text></g><g><rect x="50" y="48" width="170" height="40" rx="6" fill="#e3fafc" stroke="#0b7285"/><text x="135" y="64" font-size="11" text-anchor="middle" fill="#0b7285">Body temperature FALLS</text><text x="135" y="80" font-size="10" text-anchor="middle" fill="#475569">(too cold)</text></g><g><rect x="50" y="108" width="170" height="40" rx="6" fill="#fff0f6" stroke="#c2255c"/><text x="135" y="124" font-size="11" text-anchor="middle" fill="#c2255c">Body systems interact</text><text x="135" y="140" font-size="10" text-anchor="middle" fill="#475569">warm the body up</text></g><path d="M380,68 C320,60 300,90 300,104" fill="none" stroke="#1971c2" stroke-width="1.6" marker-end="url(#hm)"/><path d="M465,148 C465,200 360,210 322,200" fill="none" stroke="#1971c2" stroke-width="1.6" marker-end="url(#hm)"/><path d="M220,68 C280,60 300,90 300,104" fill="none" stroke="#1971c2" stroke-width="1.6" marker-end="url(#hm)"/><path d="M135,148 C135,200 240,210 278,200" fill="none" stroke="#1971c2" stroke-width="1.6" marker-end="url(#hm)"/></svg>',
      },
      caption: 'A negative-feedback loop: when temperature moves away from 36.5–37.5°C, the nervous and cardiovascular/muscular systems interact to return it to normal. A static labelled cycle is used because the loop has no continuous variable to scrub.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** two body systems that interact to monitor and maintain a constant body temperature.',
        marks: 2,
        ph: 'System to monitor temperature: nervous system. System to maintain temperature: cardio-vascular system or muscular system.',
        widget: 'inline_dropdown_select',
        widgetItems: ['System to monitor temperature', 'System to maintain temperature'],
        widgetOptions: ['Excretory system', 'Nervous system', 'Immune system', 'Reproductive system', 'Skeletal system', 'Digestive system', 'Cardio-vascular system', 'Muscular system'],
      },
      {
        label: 'b',
        text: 'Using your answer to part (a), **describe** how these two systems work together to respond to a reduction in body temperature.',
        marks: 3,
        ph: 'Nervous system detects/communicates the reduction in temperature; causes vasoconstriction / blood diverted away from extremities / hairs rise to trap warm air / shivering (involuntary muscle contractions); thereby reducing heat loss / producing heat.',
      },
      {
        label: 'c',
        text: 'In order for enzymes to effectively control reactions in the human body, temperature must remain constant in the range 36.5°C to 37.5°C. **Explain** why enzyme-based reactions in the body are dependent on the temperature not moving outside this range.',
        marks: 5,
        ph: 'Enzymes have an optimum temperature (36.5–37.5°C). Too cold: reactions do not occur fast enough / insufficient kinetic energy. Too hot: enzymes change shape (denature); active site changes shape; substrate can no longer fit; enzyme no longer functions. Use a term from: active site, denature, catalyse, lock and key, substrate.',
      },
    ],
  },

  // ── Q4 — Bacteria Investigation (17 marks, Crit A/C/B) ───────────────────
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Bacteria — Structure and Disinfectant Investigation',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 17,
    stem: 'Bacteria are simple, single-celled organisms that have no nucleus. A scientist investigates bacteria found on a mobile phone. The investigation uses agar plates prepared with an even layer of a known species of bacteria. After two days of growth in an incubator, different colonies of bacteria appeared showing distinct colour, form, elevation and margin characteristics.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="220" fill="#ffffff"/><text x="310" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Which image shows a bacterial cell?</text><g><rect x="20" y="34" width="130" height="130" rx="8" fill="#fdf2f8" stroke="#cbd5e1"/><circle cx="85" cy="99" r="52" fill="#f8c6dd" stroke="#c2255c" stroke-width="1.5"/><circle cx="85" cy="99" r="20" fill="#9c36b5" stroke="#6b219c" stroke-width="1.5"/><circle cx="70" cy="85" r="6" fill="#7048a8"/><circle cx="103" cy="112" r="5" fill="#7048a8"/><text x="85" y="182" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">Image A</text><text x="85" y="197" font-size="9" text-anchor="middle" fill="#94a3b8">animal cell (nucleus)</text></g><g><rect x="165" y="34" width="130" height="130" rx="8" fill="#f0fdf4" stroke="#cbd5e1"/><rect x="178" y="50" width="104" height="98" rx="6" fill="#a7e3c0" stroke="#2f9e44" stroke-width="2"/><circle cx="208" cy="80" r="13" fill="#2f9e44"/><rect x="232" y="66" width="30" height="22" rx="4" fill="#5fbf80"/><rect x="200" y="108" width="34" height="22" rx="4" fill="#5fbf80"/><text x="230" y="182" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">Image B</text><text x="230" y="197" font-size="9" text-anchor="middle" fill="#94a3b8">plant cell (wall, nucleus)</text></g><g><rect x="310" y="34" width="130" height="130" rx="8" fill="#eff6ff" stroke="#cbd5e1"/><rect x="335" y="78" width="80" height="42" rx="21" fill="#bcd7f5" stroke="#1971c2" stroke-width="2"/><circle cx="358" cy="99" r="4" fill="#1971c2"/><circle cx="375" cy="99" r="4" fill="#1971c2"/><circle cx="392" cy="99" r="4" fill="#1971c2"/><path d="M415,99 q14,-10 24,0 q-14,10 -24,0" fill="none" stroke="#1971c2" stroke-width="1.5"/><path d="M415,99 q14,10 24,0" fill="none" stroke="#1971c2" stroke-width="1.5"/><text x="375" y="182" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">Image C</text><text x="375" y="197" font-size="9" text-anchor="middle" fill="#94a3b8">rod bacterium + flagellum</text></g><g><rect x="455" y="34" width="130" height="130" rx="8" fill="#fff7ed" stroke="#cbd5e1"/><path d="M500,46 C540,72 500,98 540,124 C500,150 540,158 500,158" fill="none" stroke="#e8590c" stroke-width="2.5"/><path d="M540,46 C500,72 540,98 500,124 C540,150 500,158 540,158" fill="none" stroke="#f08c00" stroke-width="2.5"/><line x1="506" y1="60" x2="534" y2="60" stroke="#94a3b8" stroke-width="1"/><line x1="508" y1="90" x2="532" y2="90" stroke="#94a3b8" stroke-width="1"/><line x1="506" y1="120" x2="534" y2="120" stroke="#94a3b8" stroke-width="1"/><text x="520" y="182" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">Image D</text><text x="520" y="197" font-size="9" text-anchor="middle" fill="#94a3b8">DNA double helix</text></g></svg>',
      },
      caption: 'Four candidate images. A bacterial (prokaryotic) cell has no nucleus and may carry a flagellum.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** which of the following images shows a bacterial cell.',
        marks: 1,
        ph: 'Image C (rod-shaped bacteria with flagellum — a prokaryotic cell with no nucleus).',
        widget: 'radio_select',
        widgetOptions: ['Image A', 'Image B', 'Image C', 'Image D'],
      },
      {
        label: 'b',
        text: 'Use the chart to **select** the species of the circled bacterial colony based on its appearance. The circled colony is yellow, circular, and convex (domed) when viewed from the side.',
        marks: 1,
        ph: 'Species A.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Species of bacteria', 'Colour', 'Form', 'View from the side'],
            rows: [
              ['A', 'yellow', 'circular', 'convex'],
              ['B', 'grey-white', 'circular', 'craterform'],
              ['C', 'white', 'circular', 'convex'],
              ['D', 'yellow', 'filamentous', 'flat'],
            ],
          },
          caption: 'Colony identification chart. Match the circled colony (yellow · circular · convex) to one species.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: '**Identify** one qualitative and one quantitative piece of data that could be collected from the bacteria in the agar plate.',
        marks: 2,
        ph: 'Qualitative: colour / form / elevation / margin of colonies. Quantitative: number of colonies / measurement of size or diameter or radius.',
      },
      {
        label: 'd',
        text: 'Disinfectants can stop bacterial growth with varying levels of effectiveness. **Formulate** a research question for the disinfectant experiment shown in the video.',
        marks: 2,
        ph: 'A research question linking different disinfecting agents to an implied DV e.g. "How does the type of disinfectant affect the zone of no growth on an agar plate?"',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 580 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="580" height="240" fill="#ffffff"/><text x="290" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Disk-diffusion method (the technique in the video)</text><circle cx="180" cy="135" r="92" fill="#f6c343" stroke="#c99700" stroke-width="2"/><text x="180" y="58" font-size="10" text-anchor="middle" fill="#7a5b00">agar plate + even lawn of bacteria</text><g><circle cx="180" cy="135" r="34" fill="#fff7d6" opacity="0.9"/><circle cx="180" cy="135" r="9" fill="#ffffff" stroke="#7a5b00"/><text x="180" y="138" font-size="7" text-anchor="middle" fill="#7a5b00">disk</text><text x="180" y="186" font-size="9" text-anchor="middle" fill="#7a5b00">clear zone of no growth</text></g><circle cx="120" cy="95" r="8" fill="#ffffff" stroke="#7a5b00"/><circle cx="245" cy="100" r="8" fill="#ffffff" stroke="#7a5b00"/><circle cx="240" cy="175" r="8" fill="#ffffff" stroke="#7a5b00"/><circle cx="120" cy="180" r="8" fill="#ffffff" stroke="#7a5b00"/><g><rect x="330" y="50" width="220" height="150" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="440" y="72" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">Each disk soaked in a different liquid</text><circle cx="358" cy="100" r="7" fill="#fff" stroke="#475569"/><text x="372" y="104" font-size="11" text-anchor="start" fill="#1f2d3a">bleach</text><circle cx="358" cy="124" r="7" fill="#fff" stroke="#475569"/><text x="372" y="128" font-size="11" text-anchor="start" fill="#1f2d3a">ethanol</text><circle cx="358" cy="148" r="7" fill="#fff" stroke="#475569"/><text x="372" y="152" font-size="11" text-anchor="start" fill="#1f2d3a">hydrogen peroxide</text><circle cx="358" cy="172" r="7" fill="#fff" stroke="#475569"/><text x="372" y="176" font-size="11" text-anchor="start" fill="#1f2d3a">iodine, water (control)</text></g></svg>',
          },
          caption: 'Disks soaked in different disinfectants are placed on a bacterial lawn; the diameter of the clear zone of no growth shows how effective each disinfectant is.',
        },
      },
      {
        label: 'e',
        text: '**State** the variables for this experiment: independent variable, dependent variable, and two control variables.',
        marks: 4,
        ph: 'IV: type of disinfectant. DV: diameter of zone of inhibition / clear zone around disk (must be measurable). CVs (any 2): species of bacteria on plate; size of disk; time of immersion of disk; concentration of disinfectant; time period of bacterial growth.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Variable type', 'In this experiment', 'How it is handled'],
            rows: [
              ['Independent', 'type of disinfectant', 'changed: bleach, ethanol, hydrogen peroxide, iodine, water'],
              ['Dependent', 'diameter of zone of no growth / mm', 'measured with a ruler'],
              ['Control', 'species of bacteria, disk size, immersion time, growth time, temperature', 'kept the same for every disk'],
            ],
          },
          caption: 'Identify which row is the independent variable, which is the dependent variable, and choose two control variables.',
        },
      },
      {
        label: 'f',
        text: '**Suggest** a reason why water was also tested in this experiment.',
        marks: 1,
        ph: 'Water is a negative control; to show the effect is not caused by the disk or the water itself; zone is caused by the disinfectant; to measure how effective water is as a disinfectant.',
      },
      {
        label: 'g',
        text: 'Use the ruler to **measure** the zones of no growth surrounding the disks in Plate 2 (each scale division below the plate is 1 mm). Record your data in the table.',
        marks: 2,
        ph: 'Bleach: 24 mm; Ethanol: 7 mm; Hydrogen peroxide: 13 mm; Iodine: 15 mm; Water: 0 mm. (Accept ±1 mm for each measurement.)',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#1f2933"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#ffffff">Plate 2 — measure each clear zone (mm)</text><g><rect x="40" y="36" width="520" height="22" rx="3" fill="#f8f9fa" stroke="#adb5bd"/><line x1="50" y1="40" x2="50" y2="54" stroke="#495057"/><line x1="100" y1="42" x2="100" y2="54" stroke="#495057"/><line x1="150" y1="40" x2="150" y2="54" stroke="#495057"/><line x1="200" y1="42" x2="200" y2="54" stroke="#495057"/><line x1="250" y1="40" x2="250" y2="54" stroke="#495057"/><line x1="300" y1="42" x2="300" y2="54" stroke="#495057"/><line x1="350" y1="40" x2="350" y2="54" stroke="#495057"/><line x1="400" y1="42" x2="400" y2="54" stroke="#495057"/><line x1="450" y1="40" x2="450" y2="54" stroke="#495057"/><line x1="500" y1="42" x2="500" y2="54" stroke="#495057"/><line x1="550" y1="40" x2="550" y2="54" stroke="#495057"/><text x="50" y="34" font-size="8" text-anchor="middle" fill="#ffffff">0</text><text x="150" y="34" font-size="8" text-anchor="middle" fill="#ffffff">20</text><text x="250" y="34" font-size="8" text-anchor="middle" fill="#ffffff">40</text><text x="350" y="34" font-size="8" text-anchor="middle" fill="#ffffff">60</text><text x="450" y="34" font-size="8" text-anchor="middle" fill="#ffffff">80</text><text x="550" y="34" font-size="8" text-anchor="middle" fill="#ffffff">100</text></g><circle cx="300" cy="195" r="110" fill="#f4b400" stroke="#c99700" stroke-width="2"/><g><circle cx="235" cy="155" r="24" fill="#fff7d6" opacity="0.92"/><circle cx="235" cy="155" r="5" fill="#fff" stroke="#7a5b00"/><text x="235" y="124" font-size="10" text-anchor="middle" fill="#7a5b00" font-weight="700">bleach</text></g><g><circle cx="365" cy="150" r="13" fill="#fff7d6" opacity="0.92"/><circle cx="365" cy="150" r="5" fill="#fff" stroke="#7a5b00"/><text x="392" y="138" font-size="10" text-anchor="middle" fill="#7a5b00" font-weight="700">hydrogen peroxide</text></g><g><circle cx="372" cy="232" r="15" fill="#fff7d6" opacity="0.92"/><circle cx="372" cy="232" r="5" fill="#fff" stroke="#7a5b00"/><text x="372" y="258" font-size="10" text-anchor="middle" fill="#7a5b00" font-weight="700">iodine</text></g><g><circle cx="235" cy="240" r="7" fill="#fff7d6" opacity="0.92"/><circle cx="235" cy="240" r="5" fill="#fff" stroke="#7a5b00"/><text x="235" y="262" font-size="10" text-anchor="middle" fill="#7a5b00" font-weight="700">ethanol</text></g><g><circle cx="300" cy="195" r="5" fill="#fff" stroke="#7a5b00"/><text x="300" y="206" font-size="10" text-anchor="middle" fill="#7a5b00" font-weight="700">water</text></g></svg>',
          },
          caption: 'Plate 2: the diameter of each clear ring is the zone of no growth. Use the millimetre scale above the plate to measure each disinfectant\'s zone.',
        },
      },
      {
        label: 'h',
        text: '**Outline** the strengths and weaknesses of the experimental method.',
        marks: 4,
        ph: 'Strengths: range of disinfectants compared; water included as a control; reference to reliability linked to a named control variable. Weaknesses: only two trials; results cannot be verified with only two data points; cannot identify outliers; hydrogen peroxide data not reproducible.',
      },
    ],
  },

  // ── Q5 — Antibiotics and Resistance (15 marks, Crit A/C) ─────────────────
  {
    id: 5,
    crit: 'A',
    type: 'extended',
    topic: 'Antibiotics and Antibiotic Resistance',
    topicCanonical: 'Natural Selection',
    topicGroup: 'Evolution',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 15,
    stem: 'Antibiotics are important in the treatment of bacterial infections. They either prevent growth or kill bacteria enabling an organism to fight infection. Some bacteria are no longer killed by certain antibiotics — these are said to be resistant. Responsible use involves health professionals giving patients an antibiotic to which the bacteria are sensitive at a concentration strong enough to kill the bacteria.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 660 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="660" height="230" fill="#ffffff"/><text x="330" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">How bacteria evolve antibiotic resistance</text><defs><marker id="ra" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#475569"/></marker></defs><g><rect x="14" y="40" width="116" height="150" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="72" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Stage 1</text><circle cx="45" cy="95" r="9" fill="#9c36b5"/><circle cx="95" cy="90" r="9" fill="#9c36b5"/><circle cx="60" cy="125" r="9" fill="#e8590c"/><circle cx="100" cy="130" r="9" fill="#9c36b5"/><circle cx="40" cy="155" r="9" fill="#9c36b5"/><text x="72" y="180" font-size="8.5" text-anchor="middle" fill="#475569">variation: a few resistant (orange)</text></g><line x1="132" y1="115" x2="146" y2="115" stroke="#475569" stroke-width="1.5" marker-end="url(#ra)"/><g><rect x="148" y="40" width="116" height="150" rx="8" fill="#fff0f6" stroke="#f06595" stroke-width="2"/><text x="206" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#c2255c">Stage 2 (missing)</text><text x="206" y="74" font-size="9" text-anchor="middle" fill="#c2255c">antibiotic added</text><circle cx="180" cy="100" r="9" fill="#e8590c"/><circle cx="232" cy="120" r="9" fill="#e8590c"/><line x1="195" y1="135" x2="218" y2="158" stroke="#c2255c" stroke-width="1.5"/><line x1="218" y1="135" x2="195" y2="158" stroke="#c2255c" stroke-width="1.5"/><text x="206" y="180" font-size="8.5" text-anchor="middle" fill="#475569">sensitive bacteria killed</text></g><line x1="266" y1="115" x2="280" y2="115" stroke="#475569" stroke-width="1.5" marker-end="url(#ra)"/><g><rect x="282" y="40" width="116" height="150" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="340" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Stage 3</text><circle cx="320" cy="100" r="9" fill="#e8590c"/><circle cx="360" cy="120" r="9" fill="#e8590c"/><text x="340" y="180" font-size="8.5" text-anchor="middle" fill="#475569">resistant survivors reproduce</text></g><line x1="400" y1="115" x2="414" y2="115" stroke="#475569" stroke-width="1.5" marker-end="url(#ra)"/><g><rect x="416" y="40" width="116" height="150" rx="8" fill="#f8fafc" stroke="#cbd5e1"/><text x="474" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Stage 4</text><circle cx="445" cy="92" r="9" fill="#e8590c"/><circle cx="495" cy="95" r="9" fill="#e8590c"/><circle cx="460" cy="125" r="9" fill="#e8590c"/><circle cx="500" cy="130" r="9" fill="#e8590c"/><circle cx="440" cy="158" r="9" fill="#e8590c"/><text x="474" y="180" font-size="8.5" text-anchor="middle" fill="#475569">new resistant population</text></g><line x1="534" y1="115" x2="548" y2="115" stroke="#475569" stroke-width="1.5" marker-end="url(#ra)"/><g><rect x="550" y="40" width="100" height="150" rx="8" fill="#fff0f6" stroke="#f06595" stroke-width="2"/><text x="600" y="58" font-size="11" font-weight="700" text-anchor="middle" fill="#c2255c">Stage 5 (missing)</text><text x="600" y="74" font-size="9" text-anchor="middle" fill="#c2255c">antibiotic added</text><circle cx="578" cy="100" r="9" fill="#e8590c"/><circle cx="622" cy="118" r="9" fill="#e8590c"/><circle cx="595" cy="150" r="9" fill="#e8590c"/><text x="600" y="180" font-size="8.5" text-anchor="middle" fill="#475569">none killed — all resistant</text></g></svg>',
      },
      caption: 'Five-stage model of resistance evolution. The labels for Stage 2 and Stage 5 are missing — work out what happens to the bacteria at each. A static labelled sequence is used as it shows fixed evolutionary stages.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagram shows how bacteria can evolve to become resistant. The labels for stages 2 and 5 are missing. **Outline** what is happening to the bacteria at each stage.',
        marks: 2,
        ph: 'Stage 2: bacteria sensitive to antibiotic are killed / only resistant individuals survive. Stage 5: no bacteria are killed (all are resistant); population of resistant bacteria increases; antibiotic has no effect.',
      },
      {
        label: 'b',
        text: '*E. coli* samples were taken from infected patients and tested for resistance. **Plot** the data from 2010 to 2014 to complete the graph.',
        marks: 2,
        ph: 'Data points: 2010=6.0%, 2011=5.0%, 2012=6.5%, 2013=8.1%, 2014=8.9%. Two data points correctly plotted = 1 mark; all correct (±0.1) = 2 marks.',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Percentage of resistant E. coli, 1999–2014',
            xLabel: 'Year',
            yLabel: 'Resistant bacteria',
            yUnit: '%',
            xMin: 1999,
            xMax: 2014,
            yMin: 0,
            yMax: 10,
            xStep: 3,
            yStep: 2,
            dataPoints: [
              { x: 1999, y: 5.0 },
              { x: 2000, y: 4.8 },
              { x: 2001, y: 4.9 },
              { x: 2002, y: 4.3 },
              { x: 2003, y: 3.8 },
              { x: 2004, y: 3.5 },
              { x: 2005, y: 3.1 },
              { x: 2006, y: 3.0 },
              { x: 2007, y: 3.0 },
              { x: 2008, y: 3.2 },
              { x: 2009, y: 4.5 },
              { x: 2010, y: 6.0 },
              { x: 2011, y: 5.0 },
              { x: 2012, y: 6.5 },
              { x: 2013, y: 8.1 },
              { x: 2014, y: 8.9 },
            ],
          },
          caption: 'Resistance data for E. coli. Check the plotted 2010–2014 values (6.0, 5.0, 6.5, 8.1, 8.9 %) against the table.',
        },
      },
      {
        label: 'c',
        text: 'The effect of several antibiotics was tested on *E. coli* bacteria. **Select** the antibiotic that is most effective and explain your answer with a scientific reason.',
        marks: 3,
        ph: 'Trimethoprim — it has the largest and clearest zone of no growth. Scientific reason: there are no resistant bacteria so the zone is clear; trimethoprim is effective at a lower concentration than the other antibiotics.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="360" fill="#34404a"/><text x="240" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#ffffff">Antibiotic sensitivity plate — E. coli</text><circle cx="240" cy="195" r="150" fill="#f4b400" stroke="#c99700" stroke-width="2"/><g><circle cx="200" cy="120" r="30" fill="#fff7d6" opacity="0.55"/><circle cx="200" cy="120" r="6" fill="#fff" stroke="#7a5b00"/><text x="200" y="86" font-size="11" text-anchor="middle" fill="#1f2d3a" font-weight="700">Amoxicillin</text></g><g><circle cx="330" cy="150" r="22" fill="#fff7d6" opacity="0.55"/><circle cx="330" cy="150" r="6" fill="#fff" stroke="#7a5b00"/><text x="372" y="146" font-size="11" text-anchor="middle" fill="#1f2d3a" font-weight="700">Ampicillin</text></g><g><circle cx="140" cy="200" r="26" fill="#fff7d6" opacity="0.55"/><circle cx="140" cy="200" r="6" fill="#fff" stroke="#7a5b00"/><text x="120" y="200" font-size="11" text-anchor="end" fill="#1f2d3a" font-weight="700">Gentamicin</text></g><g><circle cx="200" cy="285" r="24" fill="#fff7d6" opacity="0.55"/><circle cx="200" cy="285" r="6" fill="#fff" stroke="#7a5b00"/><text x="200" y="322" font-size="11" text-anchor="middle" fill="#1f2d3a" font-weight="700">Tetracycline</text></g><g><circle cx="320" cy="250" r="46" fill="#fffef2" opacity="0.85"/><circle cx="320" cy="250" r="6" fill="#fff" stroke="#7a5b00"/><text x="372" y="262" font-size="11" text-anchor="middle" fill="#1f2d3a" font-weight="700">Trimethoprim</text></g><text x="240" y="352" font-size="9" text-anchor="middle" fill="#cbd5e1">Larger, clearer ring = larger zone of no growth = more effective.</text></svg>',
          },
          caption: 'Each disk is soaked with a different antibiotic. The larger and clearer the zone of no growth around a disk, the more effective that antibiotic is against the bacteria.',
        },
        widget: 'radio_select',
        widgetOptions: ['Amoxicillin', 'Ampicillin', 'Gentamicin', 'Tetracycline', 'Trimethoprim'],
      },
      {
        label: 'd',
        text: 'A colorimeter measures the percentage of light absorbed by a liquid. **State** the relationship between the population of bacteria and the percentage absorption of light.',
        marks: 2,
        ph: 'As the population of bacteria increases, the percentage absorption of light increases. Positive / proportional / linear relationship.',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Colorimeter: light absorption vs bacterial population',
            xLabel: 'Population of bacteria',
            yLabel: 'Light absorption',
            xUnit: 'millions per cm³',
            yUnit: '%',
            xMin: 0,
            xMax: 10,
            yMin: 0,
            yMax: 100,
            xStep: 2,
            yStep: 20,
            lobf: true,
            dataPoints: [
              { x: 0, y: 0 },
              { x: 2, y: 19 },
              { x: 4, y: 41 },
              { x: 6, y: 58 },
              { x: 8, y: 80 },
              { x: 10, y: 99 },
            ],
          },
          caption: 'A clear, colourless liquid absorbs 0 % of the light; as bacteria multiply the liquid grows cloudier and absorbs more light.',
        },
      },
      {
        label: 'e',
        text: 'The graph below shows the population growth of bacteria over time in a test tube with nutrient liquid. Use the graph to **explain** the change in bacteria population during each stage. Stage 1 ≈ 0–4 h, Stage 2 ≈ 4–14 h, Stage 3 ≈ 14–24 h.',
        marks: 6,
        ph: 'Stage 1: slow growth; plentiful resources; few bacteria to reproduce. Stage 2: rapid/steady population growth; plentiful resources; many bacteria to reproduce. Stage 3: no net population growth; as many bacteria dying as reproducing; limiting factors present.',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Bacterial population growth over time',
            xLabel: 'Time',
            yLabel: 'Population of bacteria',
            xUnit: 'hours',
            yUnit: 'millions per cm³',
            xMin: 0,
            xMax: 24,
            yMin: 0,
            yMax: 100,
            xStep: 4,
            yStep: 20,
            dataPoints: [
              { x: 0, y: 2 },
              { x: 2, y: 4 },
              { x: 4, y: 8 },
              { x: 6, y: 18 },
              { x: 8, y: 38 },
              { x: 10, y: 60 },
              { x: 12, y: 78 },
              { x: 14, y: 88 },
              { x: 16, y: 92 },
              { x: 18, y: 93 },
              { x: 20, y: 93 },
              { x: 24, y: 92 },
            ],
          },
          caption: 'Stage 1 (slow start) → Stage 2 (rapid growth) → Stage 3 (population levels off). Read off each stage to explain why the rate changes.',
        },
      },
    ],
  },

  // ── Q6 — Design Investigation: Salt and Bacteria (17 marks, Crit B) ───────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Design Investigation — Salt Solution and Bacterial Growth',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 17,
    stem: 'All food has a small number of bacteria growing on it. When in small numbers, these bacteria are harmless; but if they multiply, the food spoils and can become harmful to eat. Preservatives are chemicals used to slow or prevent the growth of bacteria in food. Salt has been used as a method of food preservation for millennia. You are provided with standard laboratory equipment, a colorimeter, and liquids: a liquid containing bacteria, nutrient liquid, salt solutions with concentrations from 0% to 10%.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Provided material / apparatus', 'Use in the investigation'],
        rows: [
          ['Liquid containing bacteria', 'the organism whose growth is measured'],
          ['Nutrient liquid', 'provides food so bacteria can multiply'],
          ['Salt solutions: 0%, 2%, 4%, 6%, 8%, 10%', 'the independent variable (concentration)'],
          ['Colorimeter', 'measures % absorption of light (proxy for population)'],
          ['Test tubes + rack, measuring cylinder, pipette', 'set up equal volumes in each tube'],
          ['Stopclock / timer, incubator', 'fix the growth time and temperature'],
        ],
      },
      caption: 'The equipment and liquids you are provided with. Design a fair test of how salt concentration affects bacterial growth.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation into the effect of a salt solution on bacterial growth. In your answer, identify the independent and dependent variables; include two control variables; formulate a testable hypothesis with a scientific explanation; describe how to manipulate, measure or monitor all variables; describe the method to collect sufficient data; list any safety considerations.',
        marks: 17,
        ph: 'IV: concentration of salt solution (0–10%). DV: % absorption (measured with colorimeter). CVs: temperature, volume of solution, type of bacteria, time period. Hypothesis: higher salt concentration → less bacterial growth → lower % absorption (due to osmosis/dehydration of bacteria). Method: set up test tubes with same volume of bacteria + nutrient liquid + different salt concentrations, measure % absorption at start and after a fixed time, repeat at least 3 times for at least 5 concentrations including 0%. Safety: wash hands; handle bacteria safely; dispose of bacteria safely.',
      },
    ],
  },

  // ── Q7 — Cardiovascular Disease (12 marks, Crit D) ───────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Cardiovascular Disease — Atherosclerosis and Interventions',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Circulation'],
    marks: 12,
    stem: 'Changes in human lifestyles, in particular diet and activity, have led to increased levels of cardiovascular diseases. Cholesterol is a substance found in all body cells and has an important function in cell membranes and hormones. Too much cholesterol in the body can lead to atherosclerosis. Atherosclerosis is the development of plaques in blood vessels that produce cholesterol deposits.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="270" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Atherosclerosis: a narrowing artery</text><g><text x="150" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#2f9e44">Healthy artery</text><circle cx="150" cy="140" r="80" fill="#f1d4d4" stroke="#b65b5b" stroke-width="2"/><circle cx="150" cy="140" r="58" fill="#ffe3e3" stroke="#e8847e" stroke-width="1.5"/><circle cx="150" cy="140" r="50" fill="#fff5f5"/><text x="150" y="144" font-size="11" text-anchor="middle" fill="#2f9e44" font-weight="700">wide opening</text><text x="150" y="234" font-size="10" text-anchor="middle" fill="#475569">blood flows freely</text></g><g><text x="450" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#c2255c">Diseased artery</text><circle cx="450" cy="140" r="80" fill="#f1d4d4" stroke="#b65b5b" stroke-width="2"/><circle cx="450" cy="140" r="58" fill="#ffe3e3" stroke="#e8847e" stroke-width="1.5"/><path d="M450,140 m-50,0 a50,50 0 1 0 100,0 a50,50 0 1 0 -100,0" fill="#fff5f5"/><path d="M450,140 m-50,0 a50,50 0 0 1 100,0 a25,18 0 0 1 -50,8 a30,22 0 0 0 -50,-8 Z" fill="#f6d186" stroke="#d9a441"/><circle cx="450" cy="146" r="16" fill="#fff5f5"/><text x="450" y="150" font-size="9" text-anchor="middle" fill="#c2255c" font-weight="700">narrow</text><text x="450" y="234" font-size="10" text-anchor="middle" fill="#475569">plaque (cholesterol) restricts flow</text></g></svg>',
      },
      caption: 'Cholesterol plaque builds up on the artery wall, narrowing the opening so less blood (and oxygen) can pass — the basis of coronary heart disease, statins and stents in this question.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** how atherosclerosis may lead to an increased chance of coronary heart disease.',
        marks: 3,
        ph: 'Coronary artery narrows / is obstructed by plaque; blood flow is restricted / heart must pump harder; heart muscle receives less oxygen or nutrients; this can lead to a heart attack.',
      },
      {
        label: 'b',
        text: '**Suggest** how statins may reduce cholesterol levels.',
        marks: 3,
        ph: 'Statins block the enzyme responsible for cholesterol production in the liver; so less cholesterol is produced and cholesterol levels decrease. Accept correct use of "active site" to describe the mechanism.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="250" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">How a statin blocks cholesterol production in the liver</text><g><text x="150" y="54" font-size="12" font-weight="700" text-anchor="middle" fill="#2f9e44">Without statin</text><path d="M110,90 q40,-26 80,0 q14,40 -40,46 q-54,-6 -40,-46 Z" fill="#f6d6a8" stroke="#d9a441" stroke-width="2"/><text x="150" y="120" font-size="9" text-anchor="middle" fill="#7a5b00">enzyme</text><rect x="138" y="128" width="24" height="14" fill="#ffffff" stroke="#d9a441"/><circle cx="150" cy="178" r="14" fill="#a5d8ff" stroke="#1971c2"/><text x="150" y="182" font-size="8" text-anchor="middle" fill="#1971c2">sub-strate</text><text x="150" y="218" font-size="10" text-anchor="middle" fill="#2f9e44">substrate fits → cholesterol made</text></g><g><text x="450" y="54" font-size="12" font-weight="700" text-anchor="middle" fill="#c2255c">With statin</text><path d="M410,90 q40,-26 80,0 q14,40 -40,46 q-54,-6 -40,-46 Z" fill="#f6d6a8" stroke="#d9a441" stroke-width="2"/><text x="450" y="118" font-size="9" text-anchor="middle" fill="#7a5b00">enzyme</text><rect x="436" y="126" width="28" height="16" rx="3" fill="#ffc9c9" stroke="#c2255c" stroke-width="1.5"/><text x="450" y="138" font-size="8" text-anchor="middle" fill="#c2255c">statin</text><circle cx="510" cy="180" r="14" fill="#a5d8ff" stroke="#1971c2"/><line x1="498" y1="168" x2="522" y2="192" stroke="#c2255c" stroke-width="2"/><text x="450" y="218" font-size="10" text-anchor="middle" fill="#c2255c">statin blocks active site → less cholesterol</text></g></svg>',
          },
          caption: 'A statin binds the active site of the liver enzyme that makes cholesterol, so the substrate can no longer fit and less cholesterol is produced.',
        },
      },
      {
        label: 'c',
        text: '**Describe** how angioplasty and a stent lead to a reduction in blood pressure.',
        marks: 2,
        ph: 'A stent is inserted and inflated in the artery; this widens/opens the artery so blood can flow more easily / resistance is reduced.',
      },
      {
        label: 'd',
        text: '**Suggest** one advantage and one disadvantage for each of the interventions described above (angioplasty and statins).',
        marks: 4,
        ph: 'Angioplasty: advantage (long-term effectiveness; minimally invasive; short recovery). Disadvantage (risk of complications such as blood clot or infection; must be done near heart). Statins: advantage (no surgery needed; lowers cholesterol; prevents other diseases). Disadvantage (must be taken long-term; possible side effects such as headache; may reduce vitamin D/hormone production).',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="200" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Angioplasty and a stent open a narrowed artery</text><g><text x="100" y="48" font-size="11" font-weight="700" text-anchor="middle" fill="#c2255c">1 · narrowed</text><rect x="40" y="70" width="120" height="60" rx="30" fill="#ffe3e3" stroke="#e8847e" stroke-width="2"/><path d="M70,90 q30,12 60,0 q-30,28 -60,0 Z" fill="#f6d186" stroke="#d9a441"/><text x="100" y="150" font-size="9" text-anchor="middle" fill="#475569">plaque blocks flow</text></g><g><text x="300" y="48" font-size="11" font-weight="700" text-anchor="middle" fill="#1971c2">2 · balloon + stent</text><rect x="240" y="70" width="120" height="60" rx="30" fill="#ffe3e3" stroke="#e8847e" stroke-width="2"/><ellipse cx="300" cy="100" rx="34" ry="18" fill="#a5d8ff" stroke="#1971c2"/><rect x="270" y="84" width="60" height="32" fill="none" stroke="#495057" stroke-dasharray="3 2"/><text x="300" y="150" font-size="9" text-anchor="middle" fill="#475569">balloon inflates the stent</text></g><g><text x="500" y="48" font-size="11" font-weight="700" text-anchor="middle" fill="#2f9e44">3 · widened</text><rect x="440" y="70" width="120" height="60" rx="30" fill="#fff5f5" stroke="#e8847e" stroke-width="2"/><rect x="470" y="84" width="60" height="32" fill="none" stroke="#868e96" stroke-width="1.5"/><text x="500" y="150" font-size="9" text-anchor="middle" fill="#475569">stent holds artery open</text></g></svg>',
          },
          caption: 'Angioplasty inflates a stent inside the narrowed artery; the stent stays to hold it open, lowering resistance and blood pressure. Weigh this surgery against taking statin tablets.',
        },
      },
    ],
  },

  // ── Q8 — Evaluate Lifestyle Choices and Cardiovascular Disease (15 marks, D)
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Evaluating Lifestyle Choices and Cardiovascular Disease',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Circulation'],
    marks: 15,
    stem: 'A healthy lifestyle is always recommended to prevent and treat cardiovascular diseases caused by atherosclerosis. The interactive graphic gives some information about aspects of a healthy lifestyle: not smoking, eating healthy foods, taking regular exercise, maintaining a healthy weight, monitoring blood pressure and cholesterol, minimising stress.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Aspects of a healthy lifestyle',
        center: { label: 'Healthy lifestyle', detail: 'Lowers the risk of atherosclerosis and cardiovascular disease.', color: '#c2255c' },
        nodes: [
          { id: 'smoke', label: 'Not smoking', color: '#e8590c', detail: 'Smoking damages artery walls and raises blood pressure; quitting lowers cardiovascular risk.' },
          { id: 'food', label: 'Eating healthy foods', color: '#2f9e44', detail: 'Less saturated fat and salt means less cholesterol and lower blood pressure.' },
          { id: 'exercise', label: 'Regular exercise', color: '#1971c2', detail: 'Strengthens the heart, lowers blood pressure and helps maintain a healthy weight.' },
          { id: 'weight', label: 'Healthy weight', color: '#f08c00', detail: 'Reduces strain on the heart and the risk of high cholesterol and diabetes.' },
          { id: 'monitor', label: 'Monitor BP & cholesterol', color: '#9c36b5', detail: 'Regular checks catch problems early so they can be managed before disease develops.' },
          { id: 'stress', label: 'Minimising stress', color: '#0b7285', detail: 'Long-term stress raises blood pressure; managing it protects the cardiovascular system.' },
        ],
      },
      caption: 'Six aspects of a healthy lifestyle from the infographic. Hover each to see how it reduces cardiovascular risk — use this evidence in your evaluation.',
    },
    tasks: [
      {
        label: '',
        text: 'Using information from the infographic and knowledge from your wider MYP studies, **discuss and evaluate** the impact of lifestyle choices. In your answer, include: how an individual\'s quality of life may be impacted by cardiovascular disease; economic advantages and disadvantages of adopting a healthy lifestyle; a justification of whether good health is the responsibility of the individual; a justification of whether good health is the responsibility of the society; a concluding statement.',
        marks: 15,
        ph: 'Quality of life: cardiovascular disease reduces quality of life (reduced mobility, pain, fatigue, mental health impact). Economic: healthy lifestyle reduces healthcare costs (advantage), but may be expensive to eat healthily or join gym (disadvantage). Individual responsibility: each person can make choices (not smoking, exercise) to reduce risk. Society responsibility: governments should provide affordable healthy food, public exercise spaces, education. Conclusion: both individuals and society share responsibility — justified with examples.',
      },
    ],
  },
]
