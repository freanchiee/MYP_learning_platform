import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2022',
  subject: 'Biology',
  session: 'November',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Food Webs & Ecosystems',
    topicCanonical: 'Food Chains & Webs',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Interdependency'],
    marks: 8,
    stem: 'The questions below are about a kelp forest food web. The web includes kelp, sea urchins, small fish, large crabs and sea otters.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Kelp forest food web',
        center: { label: 'Kelp (producer)', color: '#2f9e44', detail: 'Photosynthetic seaweed — the producer that fixes light energy at the base of the web.' },
        nodes: [
          { id: 'urchin', label: 'Sea urchin', color: '#9c36b5', detail: 'Primary consumer (herbivore): grazes on kelp.' },
          { id: 'fish', label: 'Small fish', color: '#1971c2', detail: 'Primary consumer: feeds on kelp and small organisms.' },
          { id: 'crab', label: 'Large crab', color: '#e8590c', detail: 'Secondary consumer: eats small fish and urchins.' },
          { id: 'otter', label: 'Sea otter', color: '#c2255c', detail: 'Top predator: feeds on sea urchins (and crabs), keeping urchin numbers in check.' },
        ],
        edges: [
          { from: 'urchin', to: 'crab', label: 'eaten by' },
          { from: 'fish', to: 'crab', label: 'eaten by' },
          { from: 'urchin', to: 'otter', label: 'eaten by' },
          { from: 'crab', to: 'otter', label: 'eaten by' },
        ],
      },
      caption: 'Kelp is the producer; sea urchins and small fish graze it; large crabs and sea otters are predators. Arrows show "eaten by" (energy flow).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** one organism that sea otters eat in this food web.',
        marks: 1,
        ph: 'Name a prey organism of the sea otter from the food web.',
      },
      {
        label: 'b',
        text: '**Outline** the role of producers in a food web.',
        marks: 2,
        ph: 'State what producers do (photosynthesis, light energy) and what they produce.',
      },
      {
        label: 'c',
        text: 'Until the 1950s, sea otters were killed and hunted for their fur; this had a dramatic impact on this ecosystem. Following a ban on hunting in the 1970s, the sea otter population started to increase. **Suggest** another human action that could have caused the sea otter population to increase.',
        marks: 1,
        ph: 'Think of a conservation strategy humans use to protect species.',
      },
      {
        label: 'd',
        text: 'The following diagrams are pyramids of numbers from the food chain in part (c). The pyramid on the left shows the ecosystem in 1957; the pyramid on the right shows the ecosystem today. Using the diagrams, **explain** the effect of the growing sea otter population on the populations of sea urchins and kelp.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="300" fill="#ffffff"/><text x="155" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">1957</text><text x="465" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Today</text><text x="310" y="290" font-size="11" text-anchor="middle" fill="#64748b">Pyramids of numbers (block width ∝ number of organisms). Top = sea otter, middle = sea urchin, bottom = kelp.</text><g stroke="#356b44" stroke-width="1.5"><rect x="138" y="44" width="34" height="34" fill="#f8d7da"/><rect x="78" y="80" width="154" height="34" fill="#e9d5f0"/><rect x="120" y="116" width="70" height="34" fill="#d3f0d8"/></g><g font-size="11" fill="#1f2d3a"><text x="155" y="65" text-anchor="middle">Sea otter</text><text x="155" y="101" text-anchor="middle">Sea urchin (many)</text><text x="155" y="137" text-anchor="middle">Kelp (few)</text></g><g stroke="#356b44" stroke-width="1.5"><rect x="448" y="44" width="34" height="34" fill="#f8d7da"/><rect x="430" y="80" width="70" height="34" fill="#e9d5f0"/><rect x="388" y="116" width="154" height="34" fill="#d3f0d8"/></g><g font-size="11" fill="#1f2d3a"><text x="465" y="65" text-anchor="middle">Sea otter</text><text x="465" y="101" text-anchor="middle">Sea urchin (few)</text><text x="465" y="137" text-anchor="middle">Kelp (many)</text></g></svg>',
          },
          caption: 'Pyramids of numbers for the kelp → sea urchin → sea otter chain. In 1957 urchins were abundant and kelp scarce; today, with more otters, urchins are scarce and kelp abundant.',
        },
        ph: 'Sea otters eat more urchins → fewer urchins → less kelp eaten → kelp increases.',
      },
    ],
  },
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Nutrition, Digestion & Transport',
    topicCanonical: 'Digestion',
    topicGroup: 'Metabolism',
    topicsAlso: ['Nutrition', 'Movement & Transport'],
    marks: 10,
    stem: 'The questions below are about nutrients, digestion, and transport in the human body.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Nutrient', 'Main role in the body', 'Digestion products (monomers)'],
        rows: [
          ['Carbohydrate', 'Main energy source', 'Simple sugars (e.g. glucose)'],
          ['Lipid (fat)', 'Energy store; insulation', 'Fatty acids + glycerol'],
          ['Protein', 'Growth and repair', 'Amino acids'],
        ],
      },
      caption: 'The major nutrients, what the body uses them for, and the small molecules they are broken down into during digestion.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a nutrient that is used as a source of energy under normal circumstances.',
        marks: 1,
        ph: 'Not protein — think carbohydrates or fats.',
      },
      {
        label: 'b',
        text: 'Proteases are enzymes in the stomach that begin to digest proteins. **Select** what is produced when proteins are digested.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Amino acids', 'Glucose', 'Fatty acids', 'Glycerol'],
        ph: 'Proteins are broken down into their monomer building blocks.',
      },
      {
        label: 'c',
        text: 'Cells in the stomach lining produce hydrochloric acid. The graph shows the activity of four different enzymes. **Select** the enzyme that digests protein in the stomach. **Justify** your answer.',
        marks: 2,
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'line',
            title: 'Activity of four enzymes against pH',
            x: { label: 'pH', categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'] },
            y: { label: '% of maximum activity', min: 0, max: 100, ticks: [0, 25, 50, 75, 100] },
            series: [
              { name: 'Enzyme A', color: '#e03131', points: [35, 100, 80, 45, 18, 5, 0, 0, 0, 0, 0] },
              { name: 'Enzyme B', color: '#1c7ed6', points: [0, 0, 2, 10, 45, 95, 60, 12, 0, 0, 0] },
              { name: 'Enzyme C', color: '#9c36b5', points: [0, 0, 0, 5, 30, 75, 100, 70, 25, 5, 0] },
              { name: 'Enzyme D', color: '#f08c00', points: [0, 0, 0, 0, 5, 20, 55, 90, 100, 60, 15] },
            ],
          },
          caption: 'Each enzyme works fastest at its optimum pH. Enzyme A peaks in strongly acidic conditions (pH ≈ 2); B peaks near pH 6; C near pH 7; D in alkaline conditions (pH ≈ 9).',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select the enzyme with optimum activity at the stomach\'s acidic pH (~1.9).',
      },
      {
        label: 'd',
        text: 'The products of digestion must enter the blood to be transported around the body. **Outline** the process through which the products of digestion enter the bloodstream. You should use scientific terminology in your answer.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="dg1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Absorption across the small-intestine wall (villus)</text><path d="M60,70 Q90,40 120,70 Q150,40 180,70 Q210,40 240,70 Q270,40 300,70 Q330,40 360,70 Q390,40 420,70 Q450,40 480,70 L500,70 L500,240 L60,240 Z" fill="#f6d8c4" stroke="#c98a3c" stroke-width="2"/><text x="120" y="60" font-size="10" fill="#7a3d12">gut lining (villi)</text><text x="80" y="120" font-size="11" fill="#7a3d12">High concentration of</text><text x="80" y="136" font-size="11" fill="#7a3d12">digested nutrients in gut</text><circle cx="150" cy="170" r="6" fill="#2f9e44"/><circle cx="200" cy="190" r="6" fill="#2f9e44"/><circle cx="250" cy="160" r="6" fill="#2f9e44"/><circle cx="300" cy="195" r="6" fill="#2f9e44"/><ellipse cx="360" cy="200" rx="70" ry="34" fill="#f8d7da" stroke="#c0392b" stroke-width="2"/><text x="360" y="198" font-size="11" text-anchor="middle" fill="#7a1f2a">blood capillary</text><text x="360" y="214" font-size="11" text-anchor="middle" fill="#7a1f2a">(low concentration)</text><line x1="300" y1="180" x2="345" y2="195" stroke="#c0392b" stroke-width="2" marker-end="url(#dg1)"/><line x1="250" y1="175" x2="300" y2="192" stroke="#c0392b" stroke-width="2" marker-end="url(#dg1)"/><text x="250" y="262" font-size="11" text-anchor="middle" fill="#64748b">Nutrients diffuse down the concentration gradient (high → low) into the blood; some are taken up by active transport.</text></svg>',
          },
          caption: 'Digested nutrients move from the gut (high concentration) into the blood capillary (low concentration) by diffusion across the villus wall.',
        },
        ph: 'Diffusion (high to low concentration) or active transport (low to high).',
      },
      {
        label: 'e',
        text: 'In addition to the products of digestion, other molecules are present in the bloodstream. **Explain** how red blood cells are adapted to transport gases around the body.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="rbc" cx="0.5" cy="0.5"><stop offset="0" stop-color="#f3b6b6"/><stop offset="0.55" stop-color="#d64545"/><stop offset="1" stop-color="#b02e2e"/></radialGradient></defs><rect width="520" height="250" fill="#ffffff"/><text x="260" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">A red blood cell (erythrocyte)</text><ellipse cx="180" cy="135" rx="95" ry="60" fill="url(#rbc)" stroke="#8f2424" stroke-width="2"/><ellipse cx="180" cy="135" rx="40" ry="24" fill="#c33b3b"/><line x1="275" y1="135" x2="340" y2="135" stroke="#475569" stroke-width="1"/><text x="345" y="120" font-size="11" fill="#334155">Biconcave disc shape</text><text x="345" y="136" font-size="11" fill="#64748b">→ large surface area for</text><text x="345" y="151" font-size="11" fill="#64748b">  fast gas exchange</text><line x1="180" y1="135" x2="180" y2="225" stroke="#475569" stroke-width="1"/><text x="60" y="218" font-size="11" fill="#334155">No nucleus</text><text x="60" y="233" font-size="11" fill="#64748b">→ more room for haemoglobin (binds O₂)</text></svg>',
          },
          caption: 'Key adaptations of a red blood cell: a biconcave shape (large surface area), no nucleus (more space for haemoglobin), and haemoglobin that binds oxygen.',
        },
        ph: 'State 2 structural features; explain how each enables gas transport.',
      },
    ],
  },
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Reproduction & Genetics',
    topicCanonical: 'Reproduction',
    topicGroup: 'Evolution',
    topicsAlso: ['DNA & Genetics'],
    marks: 9,
    stem: 'The questions below are about the reproductive system and genetics.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="250" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sex hormones and where they are produced</text><g><text x="150" y="58" font-size="13" font-weight="700" text-anchor="middle" fill="#1971c2">Male</text><path d="M120,80 q30,-14 60,0 v40 h-60 z" fill="#dbeafe" stroke="#1971c2" stroke-width="1.5"/><circle cx="135" cy="140" r="14" fill="#bfdbfe" stroke="#1971c2" stroke-width="1.5"/><circle cx="165" cy="140" r="14" fill="#bfdbfe" stroke="#1971c2" stroke-width="1.5"/><text x="150" y="172" font-size="11" text-anchor="middle" fill="#334155">testes</text><text x="150" y="200" font-size="11" text-anchor="middle" fill="#1971c2">produce testosterone</text></g><g><text x="410" y="58" font-size="13" font-weight="700" text-anchor="middle" fill="#c2255c">Female</text><path d="M375,90 h70 v18 h-70 z" fill="#fce7f3" stroke="#c2255c" stroke-width="1.5"/><ellipse cx="382" cy="128" rx="14" ry="11" fill="#fbcfe8" stroke="#c2255c" stroke-width="1.5"/><ellipse cx="438" cy="128" rx="14" ry="11" fill="#fbcfe8" stroke="#c2255c" stroke-width="1.5"/><path d="M396,128 q14,-10 28,0" fill="none" stroke="#c2255c" stroke-width="1.5"/><text x="410" y="160" font-size="11" text-anchor="middle" fill="#334155">ovaries + uterus</text><text x="410" y="188" font-size="11" text-anchor="middle" fill="#c2255c">ovaries produce</text><text x="410" y="203" font-size="11" text-anchor="middle" fill="#c2255c">oestrogen + progesterone</text></g></svg>',
      },
      caption: 'The male reproductive system (testes produce testosterone) and the female reproductive system (ovaries produce oestrogen and progesterone).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The reproductive system is controlled by hormones. **Select** the correct items to complete the diagram by matching each sex hormone to its site of production.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Testosterone → Site of production', 'Progesterone → Site of production'],
        widgetOptions: ['Testes', 'Ovaries', 'Pancreas', 'Insulin'],
        ph: 'Match testosterone to its gland and progesterone to its gland.',
      },
      {
        label: 'b',
        text: 'Sex hormones are responsible for the changes during puberty. **Select** the correct location for each change in the Venn diagram.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="300" fill="#ffffff"/><circle cx="190" cy="150" r="120" fill="#2f9e44" fill-opacity="0.35" stroke="#2f9e44" stroke-width="2"/><circle cx="330" cy="150" r="120" fill="#e03131" fill-opacity="0.30" stroke="#e03131" stroke-width="2"/><text x="120" y="150" font-size="15" font-weight="700" text-anchor="middle" fill="#1f6b30">Males</text><text x="260" y="150" font-size="14" font-weight="700" text-anchor="middle" fill="#8a5a00">Both</text><text x="402" y="150" font-size="15" font-weight="700" text-anchor="middle" fill="#9b1c1c">Females</text><text x="260" y="288" font-size="11" text-anchor="middle" fill="#64748b">Classify each change: left circle (males only), overlap (both), right circle (females only).</text></svg>',
          },
          caption: 'An empty Males / Both / Females Venn diagram. Changes such as "pubic hair grows" and "sex organs grow" go in the overlap; "sperm production starts" is males only; "menstruation starts" is females only.',
        },
        widget: 'variable_classify',
        widgetItems: ['Males', 'Both', 'Females'],
        widgetOptions: [
          'Sex organs grow and develop',
          'Sperm production starts',
          'Hips widen',
          'Development of breast tissue',
          'Facial hair grows',
          'Menstruation starts',
          'Pubic hair grows',
        ],
        ph: 'Males only, both sexes, or females only — classify each change correctly.',
      },
      {
        label: 'c',
        text: 'Sperm are formed in the testes through meiosis. Human body cells contain 46 chromosomes, but sex cells contain 23. **Outline** why there are fewer chromosomes in sex cells.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="me1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#475569"/></marker></defs><rect width="560" height="220" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Meiosis halves the chromosome number</text><circle cx="90" cy="115" r="40" fill="#dbeafe" stroke="#1971c2" stroke-width="2"/><text x="90" y="112" font-size="12" font-weight="700" text-anchor="middle" fill="#1971c2">46</text><text x="90" y="128" font-size="9" text-anchor="middle" fill="#334155">body cell</text><line x1="135" y1="115" x2="195" y2="115" stroke="#475569" stroke-width="1.5" marker-end="url(#me1)"/><text x="165" y="105" font-size="9" text-anchor="middle" fill="#64748b">meiosis</text><circle cx="250" cy="75" r="30" fill="#bbf7d0" stroke="#2f9e44" stroke-width="2"/><text x="250" y="80" font-size="11" font-weight="700" text-anchor="middle" fill="#2f9e44">23</text><circle cx="250" cy="160" r="30" fill="#bbf7d0" stroke="#2f9e44" stroke-width="2"/><text x="250" y="165" font-size="11" font-weight="700" text-anchor="middle" fill="#2f9e44">23</text><text x="250" y="205" font-size="9" text-anchor="middle" fill="#334155">sex cells (gametes)</text><text x="330" y="60" font-size="11" fill="#334155">sperm 23  +  egg 23</text><line x1="360" y1="70" x2="420" y2="105" stroke="#475569" stroke-width="1.5" marker-end="url(#me1)"/><text x="380" y="95" font-size="9" fill="#64748b">fertilisation</text><circle cx="470" cy="115" r="40" fill="#fde2e2" stroke="#c0392b" stroke-width="2"/><text x="470" y="112" font-size="12" font-weight="700" text-anchor="middle" fill="#c0392b">46</text><text x="470" y="128" font-size="9" text-anchor="middle" fill="#334155">zygote</text></svg>',
          },
          caption: 'A 46-chromosome body cell divides by meiosis into gametes with 23 chromosomes each. At fertilisation a 23-chromosome sperm and 23-chromosome egg fuse to restore 46 in the zygote.',
        },
        ph: 'Two sex cells fuse at fertilization — if both had 46, offspring would have 92.',
      },
      {
        label: 'd',
        text: 'Using your knowledge of sex chromosomes X and Y, **explain** why sperm determine whether offspring will be male or female.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="360" height="320" fill="#ffffff"/><text x="180" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Punnett square: sex determination</text><text x="180" y="52" font-size="11" text-anchor="middle" fill="#64748b">Mother XX  ×  Father XY</text><text x="150" y="92" font-size="13" font-weight="700" text-anchor="middle" fill="#1971c2">Sperm →</text><text x="80" y="160" font-size="13" font-weight="700" text-anchor="middle" fill="#c2255c" transform="rotate(-90 80 160)">Egg →</text><line x1="110" y1="100" x2="330" y2="100" stroke="#334155" stroke-width="1.5"/><line x1="110" y1="100" x2="110" y2="300" stroke="#334155" stroke-width="1.5"/><line x1="220" y1="100" x2="220" y2="300" stroke="#cbd5e1"/><line x1="110" y1="200" x2="330" y2="200" stroke="#cbd5e1"/><text x="165" y="92" font-size="13" font-weight="700" text-anchor="middle" fill="#1971c2">X</text><text x="275" y="92" font-size="13" font-weight="700" text-anchor="middle" fill="#1971c2">Y</text><text x="98" y="155" font-size="13" font-weight="700" text-anchor="middle" fill="#c2255c">X</text><text x="98" y="255" font-size="13" font-weight="700" text-anchor="middle" fill="#c2255c">X</text><rect x="112" y="102" width="106" height="96" fill="#fce7f3"/><rect x="222" y="102" width="106" height="96" fill="#dbeafe"/><rect x="112" y="202" width="106" height="96" fill="#fce7f3"/><rect x="222" y="202" width="106" height="96" fill="#dbeafe"/><text x="165" y="155" font-size="14" font-weight="700" text-anchor="middle" fill="#9b1c1c">XX</text><text x="275" y="155" font-size="14" font-weight="700" text-anchor="middle" fill="#1e40af">XY</text><text x="165" y="255" font-size="14" font-weight="700" text-anchor="middle" fill="#9b1c1c">XX</text><text x="275" y="255" font-size="14" font-weight="700" text-anchor="middle" fill="#1e40af">XY</text><text x="165" y="172" font-size="9" text-anchor="middle" fill="#9b1c1c">female</text><text x="275" y="172" font-size="9" text-anchor="middle" fill="#1e40af">male</text><text x="165" y="272" font-size="9" text-anchor="middle" fill="#9b1c1c">female</text><text x="275" y="272" font-size="9" text-anchor="middle" fill="#1e40af">male</text></svg>',
          },
          caption: 'The egg always carries an X chromosome; the sperm carries either an X (→ XX female) or a Y (→ XY male). So the sperm determines the sex of the offspring (50:50 ratio).',
        },
        ph: 'Female = XX, male = XY. Egg always gives X; sperm gives either X or Y.',
      },
    ],
  },
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Photosynthesis Investigation',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Nutrient/Carbon/Nitrogen Cycles'],
    marks: 13,
    stem: 'Climate change is one of the biggest current issues facing humanity. Human actions have caused atmospheric carbon dioxide (CO₂) concentration to increase, which has led to a rise in average global temperatures.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="lamp4" cx="0.5" cy="0.4"><stop offset="0" stop-color="#fff7cc"/><stop offset="1" stop-color="#f4c84a"/></radialGradient></defs><rect width="560" height="300" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Apparatus to measure photosynthesis</text><circle cx="430" cy="60" r="26" fill="url(#lamp4)" stroke="#c79a10"/><g stroke="#f4c84a" stroke-width="3" stroke-linecap="round"><line x1="412" y1="84" x2="400" y2="100"/><line x1="430" y1="88" x2="430" y2="106"/><line x1="448" y1="84" x2="460" y2="100"/></g><text x="430" y="44" font-size="10" text-anchor="middle" fill="#9a7d0f">lamp (light)</text><rect x="120" y="90" width="200" height="160" rx="6" fill="#e8f4fb" stroke="#3a6ea5" stroke-width="2" fill-opacity="0.6"/><text x="220" y="108" font-size="10" text-anchor="middle" fill="#3a6ea5">closed container</text><rect x="195" y="180" width="50" height="50" rx="4" fill="#bfe3f2" stroke="#2c6c86"/><path d="M214,180 v-26" stroke="#5b3a1a" stroke-width="3"/><path d="M214,154 q-14,-12 -22,-2 q16,2 22,8 q6,-6 22,-8 q-8,-10 -22,2 z" fill="#2f9e44"/><text x="220" y="246" font-size="9" text-anchor="middle" fill="#334155">plant in flask of water</text><circle cx="150" cy="200" r="20" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/><text x="150" y="197" font-size="9" text-anchor="middle" fill="#475569">heater</text><text x="150" y="209" font-size="8" text-anchor="middle" fill="#475569">°C control</text><rect x="350" y="200" width="90" height="40" rx="4" fill="#222" stroke="#000"/><text x="395" y="218" font-size="9" fill="#3ad36a" text-anchor="middle" font-family="monospace">O₂ ppm</text><text x="395" y="232" font-size="8" fill="#9bb9cf" text-anchor="middle">data logger</text><line x1="245" y1="225" x2="350" y2="222" stroke="#475569" stroke-width="1.5"/></svg>',
      },
      caption: 'A plant in a flask of water sits inside a closed container with a heater (temperature control) and a lamp. An oxygen sensor and data logger record the O₂ produced — a measure of the rate of photosynthesis.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Plants use sunlight to convert CO₂ to glucose using a process called photosynthesis. **Select** words to complete the word equation for photosynthesis.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ps1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#1f2d3a"/></marker></defs><rect width="560" height="150" fill="#ffffff"/><text x="280" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Word equation for photosynthesis</text><rect x="20" y="60" width="120" height="40" rx="6" fill="#e8f4fb" stroke="#3a6ea5"/><text x="80" y="85" font-size="13" text-anchor="middle" fill="#1971c2">carbon dioxide</text><text x="158" y="86" font-size="22" text-anchor="middle" fill="#1f2d3a">+</text><rect x="180" y="60" width="90" height="40" rx="6" fill="#e8f4fb" stroke="#3a6ea5"/><text x="225" y="85" font-size="13" text-anchor="middle" fill="#1971c2">water</text><line x1="285" y1="80" x2="345" y2="80" stroke="#1f2d3a" stroke-width="2" marker-end="url(#ps1)"/><text x="315" y="70" font-size="10" text-anchor="middle" fill="#9a7d0f">light</text><rect x="350" y="60" width="80" height="40" rx="6" fill="#dff5e3" stroke="#2f9e44"/><text x="390" y="85" font-size="13" text-anchor="middle" fill="#2f9e44">glucose</text><text x="446" y="86" font-size="22" text-anchor="middle" fill="#1f2d3a">+</text><rect x="468" y="60" width="80" height="40" rx="6" fill="#dff5e3" stroke="#2f9e44"/><text x="508" y="85" font-size="13" text-anchor="middle" fill="#2f9e44">oxygen</text></svg>',
          },
          caption: 'Photosynthesis: carbon dioxide + water → (light) → glucose + oxygen. Reactants on the left, products on the right.',
        },
        widget: 'fill_blank',
        widgetOptions: ['Oxygen', 'Glucose', 'Water', 'Carbon dioxide'],
        ph: 'Reactants: CO₂ + water. Products: glucose + oxygen.',
      },
      {
        label: 'b',
        text: 'A student decided to test the effect of temperature on photosynthesis. **Identify** the variables in this investigation: state the independent variable, dependent variable, and two control variables.',
        marks: 4,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Type of variable', 'In this investigation'],
            rows: [
              ['Independent (changed)', 'Temperature set by the heater / °C'],
              ['Dependent (measured)', 'O₂ concentration after 10 min / ppm'],
              ['Control (kept the same)', 'CO₂ concentration · light intensity · same plant / volume of water'],
            ],
          },
          caption: 'Variable roles for the temperature-vs-photosynthesis investigation.',
        },
        ph: 'IV = temperature; DV = O₂ concentration; CVs = CO₂ concentration, light level, plant type.',
      },
      {
        label: 'c',
        text: '**Formulate** a hypothesis for this investigation using the format: If … then … because …',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="170" fill="#ffffff"/><text x="280" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hypothesis sentence frame</text><rect x="20" y="46" width="150" height="40" rx="6" fill="#eef2ff" stroke="#4f46e5"/><text x="95" y="71" font-size="12" text-anchor="middle" fill="#4338ca">If (independent var.)</text><rect x="200" y="46" width="160" height="40" rx="6" fill="#ecfdf5" stroke="#059669"/><text x="280" y="71" font-size="12" text-anchor="middle" fill="#047857">then (dependent var.)</text><rect x="390" y="46" width="150" height="40" rx="6" fill="#fff7ed" stroke="#ea580c"/><text x="465" y="71" font-size="12" text-anchor="middle" fill="#c2410c">because (reason)</text><text x="280" y="125" font-size="11" text-anchor="middle" fill="#64748b">e.g. "If temperature increases, then the O₂ produced increases,</text><text x="280" y="143" font-size="11" text-anchor="middle" fill="#64748b">because warmer conditions speed up the rate of photosynthesis (up to the optimum)."</text></svg>',
          },
          caption: 'A testable hypothesis links the independent variable, the dependent variable, and a scientific reason in an "If… then… because…" sentence.',
        },
        ph: 'If temperature increases, then O₂ concentration will increase, because photosynthesis rate increases.',
      },
      {
        label: 'd',
        text: 'The student conducted the experiment and collected data. **Calculate** the missing average for 40°C and add it to the table, giving your answer to an appropriate degree of accuracy.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Temperature / °C', 'Trial 1', 'Trial 2', 'Trial 3', 'Average'],
            rows: [
              ['20', '219', '217', '218', '218'],
              ['40', '262', '261', '259', '?'],
              ['60', '201', '200', '202', '201'],
            ],
          },
          caption: 'Concentration of O₂ after 10 minutes / 10³ ppm. The 40 °C average is missing — find the mean of 262, 261 and 259.',
        },
        ph: 'Average of 262, 261, 259 = 260.666… → round to 261.',
      },
      {
        label: 'e',
        text: '**State** one improvement to the presentation of the student\'s data table.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Temperature / °C', 'Trial 1', 'Trial 2', 'Trial 3', 'Average'],
            rows: [
              ['20', '219', '217', '218', '218'],
              ['40', '262', '261', '259', '261'],
              ['60', '201', '200', '202', '201'],
            ],
          },
          caption: 'The completed data table. Consider what the column headings should include (a unit for the O₂ readings) and how the values could be made consistent.',
        },
        ph: 'What is missing from the table headings or units?',
      },
      {
        label: 'f',
        text: 'The student predicted that as temperature increases, the O₂ concentration decreases. Use the results to **comment** on the validity of this prediction.',
        marks: 2,
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'bar',
            title: 'Average O₂ produced at each temperature',
            x: { label: 'Temperature / °C', categories: ['20', '40', '60'] },
            y: { label: 'Average O₂ after 10 min', unit: '10³ ppm', min: 0, max: 300, ticks: [0, 50, 100, 150, 200, 250, 300] },
            series: [{ name: 'O₂ produced', color: '#2f9e44', points: [218, 261, 201] }],
          },
          caption: 'Average O₂ produced: 218 at 20 °C, 261 at 40 °C, 201 at 60 °C. From 20→40 °C the O₂ rises (contradicts the prediction); from 40→60 °C it falls.',
        },
        ph: 'Data do not support from 20→40°C; do support above 40°C. Or insufficient data.',
      },
    ],
  },
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'CO₂ & Photosynthesis Evaluation',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 14,
    stem: 'A student tested the effect of carbon dioxide (CO₂) concentration on the rate of photosynthesis using the following method: (1) Cut base of plant stem. (2) Place stem in flask with water. (3) Place flask in closed container at 40°C with CO₂ regulator. (4) Use CO₂ concentrations of 0.05%, 0.10% and 0.15%. (5) Measure O₂ concentration in ppm after 10 minutes. (6) Use O₂ data to calculate rate of photosynthesis.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="lamp5" cx="0.5" cy="0.4"><stop offset="0" stop-color="#fff7cc"/><stop offset="1" stop-color="#f4c84a"/></radialGradient></defs><rect width="580" height="300" fill="#ffffff"/><text x="290" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Effect of CO₂ concentration on photosynthesis</text><circle cx="70" cy="80" r="24" fill="url(#lamp5)" stroke="#c79a10"/><g stroke="#f4c84a" stroke-width="3" stroke-linecap="round"><line x1="92" y1="92" x2="120" y2="108"/><line x1="90" y1="80" x2="120" y2="86"/></g><text x="70" y="124" font-size="10" text-anchor="middle" fill="#9a7d0f">lamp</text><rect x="150" y="150" width="34" height="70" rx="6" fill="#cfe9d4" stroke="#2f9e44"/><text x="167" y="190" font-size="9" text-anchor="middle" fill="#2f9e44">CO₂</text><text x="167" y="236" font-size="8" text-anchor="middle" fill="#334155">CO₂ regulator</text><rect x="220" y="80" width="210" height="170" rx="6" fill="#e8f4fb" stroke="#3a6ea5" stroke-width="2" fill-opacity="0.6"/><text x="325" y="98" font-size="10" text-anchor="middle" fill="#3a6ea5">closed container (40 °C)</text><rect x="300" y="180" width="50" height="50" rx="4" fill="#bfe3f2" stroke="#2c6c86"/><path d="M319,180 v-26" stroke="#5b3a1a" stroke-width="3"/><path d="M319,154 q-14,-12 -22,-2 q16,2 22,8 q6,-6 22,-8 q-8,-10 -22,2 z" fill="#2f9e44"/><text x="325" y="246" font-size="9" text-anchor="middle" fill="#334155">cut stem in flask of water</text><circle cx="255" cy="200" r="18" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/><text x="255" y="203" font-size="8" text-anchor="middle" fill="#475569">heater</text><rect x="450" y="190" width="100" height="44" rx="4" fill="#222" stroke="#000"/><text x="500" y="210" font-size="10" fill="#3ad36a" text-anchor="middle" font-family="monospace">O₂ ppm</text><text x="500" y="226" font-size="8" fill="#9bb9cf" text-anchor="middle">data logger / O₂ sensor</text><line x1="350" y1="220" x2="450" y2="214" stroke="#475569" stroke-width="1.5"/></svg>',
      },
      caption: 'The apparatus: a lamp, a CO₂ cylinder and regulator, a cut stem standing in a flask of water inside a closed container held at 40 °C, and an oxygen sensor with a data logger to measure O₂ produced after 10 minutes.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The method does not contain details of how control variables should be monitored. **State** two extra details that should be added to the method to make it repeatable.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Control variable', 'How the method should monitor it'],
            rows: [
              ['Light intensity', 'Fix lamp distance / power; use a light meter — not stated'],
              ['Length / mass of stem', 'Cut every stem to the same length — not stated'],
              ['Temperature', 'Stated as 40 °C, but not checked with a thermometer/sensor'],
              ['Time', 'Stated as 10 min, but no detail on starting the timer'],
            ],
          },
          caption: 'Control variables the method mentions vaguely or leaves out. Adding detail on how each is kept constant makes the method repeatable.',
        },
        ph: 'Name two CVs that need to be monitored and how (e.g. light level, stem length).',
      },
      {
        label: 'b',
        text: '**Suggest** two reasons for setting the heater at 40°C.',
        marks: 2,
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'line',
            title: 'How temperature affects rate of photosynthesis',
            x: { label: 'Temperature / °C', categories: ['0', '10', '20', '30', '40', '50', '60'] },
            y: { label: 'Rate of photosynthesis', unit: 'arb.', min: 0, max: 10, ticks: [0, 2, 4, 6, 8, 10] },
            series: [{ name: 'Rate', color: '#2f9e44', points: [1, 3, 5, 7.5, 9, 5, 1.5] }],
          },
          caption: 'Rate of photosynthesis rises with temperature to an optimum around 40 °C, then falls as enzymes denature. Setting the heater at 40 °C keeps temperature constant (a control variable) near the optimum so the reaction proceeds quickly.',
        },
        ph: 'Temperature as a control variable; 40°C is optimum or ensures reaction proceeds quickly.',
      },
      {
        label: 'c',
        text: 'The student\'s laboratory partner said that the method would not give sufficient data to test the effect of changing CO₂ concentration on photosynthesis rate. **Suggest** and **justify** two improvements to the data collection to give sufficient data.',
        marks: 4,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['CO₂ concentration / %', 'Rate of photosynthesis / ppm O₂ min⁻¹', 'Repeats'],
            rows: [
              ['0.05', '4', '1'],
              ['0.10', '8', '1'],
              ['0.15', '8', '1'],
            ],
          },
          caption: 'The student collected only three CO₂ values with a single reading each (no repeats, no 0% control). More increments and repeats would give sufficient, more reliable data.',
        },
        ph: 'More repeats, more CO₂ increments, or add a control (CO₂ = 0%) — justify each.',
      },
      {
        label: 'd',
        text: 'The students used their data to calculate the rate of photosynthesis and plotted the graph. Using data from the graph and scientific reasoning, **explain** the results of this experiment.',
        marks: 5,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            title: 'Rate of photosynthesis vs CO₂ concentration',
            xLabel: 'Concentration of CO₂ / %',
            yLabel: 'Rate of photosynthesis / ppm O₂ min⁻¹',
            xRange: [0, 0.16],
            yRange: [0, 9],
            points: [[0.05, 4], [0.10, 8], [0.15, 8]],
            readouts: [
              { x: 0.10, note: 'rate stops rising here — CO₂ no longer limiting' },
            ],
            dataMaxX: 0.15,
          },
          caption: 'Rate rises steeply from 4 to 8 ppm O₂ min⁻¹ as CO₂ goes from 0.05% to 0.10% (CO₂ is the limiting factor), then plateaus at 8 between 0.10% and 0.15% (another factor now limits the rate).',
        },
        ph: 'Rate increases below 0.10% (CO₂ limiting); plateaus above 0.10% (other factors limit).',
      },
      {
        label: 'e',
        text: '**Suggest** how the students could increase the rate of photosynthesis beyond 8 ppm O₂ min⁻¹.',
        marks: 1,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            title: 'Rate plateaus at 8 ppm O₂ min⁻¹',
            xLabel: 'Concentration of CO₂ / %',
            yLabel: 'Rate of photosynthesis / ppm O₂ min⁻¹',
            xRange: [0, 0.16],
            yRange: [0, 9],
            points: [[0.05, 4], [0.10, 8], [0.15, 8]],
            readouts: [
              { x: 0.15, note: 'still 8 ppm — adding CO₂ no longer helps' },
            ],
            dataMaxX: 0.15,
          },
          caption: 'Above 0.10% CO₂ the rate stays at 8 ppm O₂ min⁻¹, so CO₂ is no longer limiting. To go higher, increase a different limiting factor (e.g. light intensity or temperature).',
        },
        ph: 'Change another limiting factor — temperature or light intensity.',
      },
    ],
  },
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Light Intensity & Photosynthesis Design',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 15,
    stem: 'The students wanted to extend their knowledge of photosynthesis. They want to investigate how changing light intensity affects the rate of photosynthesis. They are provided with the equipment shown and standard laboratory equipment.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="lamp6b" cx="0.5" cy="0.4"><stop offset="0" stop-color="#fff7cc"/><stop offset="1" stop-color="#f4c84a"/></radialGradient></defs><rect width="600" height="300" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Equipment for the light-intensity investigation</text><circle cx="70" cy="120" r="24" fill="url(#lamp6b)" stroke="#c79a10"/><g stroke="#f4c84a" stroke-width="3" stroke-linecap="round"><line x1="94" y1="120" x2="150" y2="120"/><line x1="92" y1="106" x2="150" y2="100"/><line x1="92" y1="134" x2="150" y2="140"/></g><text x="70" y="160" font-size="10" text-anchor="middle" fill="#9a7d0f">lamp</text><line x1="44" y1="250" x2="430" y2="250" stroke="#94a3ad" stroke-width="1"/><g font-size="9" fill="#64748b"><text x="70" y="266">0</text><text x="190" y="266">10</text><text x="310" y="266">20</text><text x="420" y="266">30 cm</text></g><line x1="190" y1="244" x2="190" y2="252" stroke="#94a3ad"/><line x1="310" y1="244" x2="310" y2="252" stroke="#94a3ad"/><text x="245" y="284" font-size="10" text-anchor="middle" fill="#64748b">change lamp distance → change light intensity</text><rect x="180" y="150" width="30" height="60" rx="6" fill="#cfe9d4" stroke="#2f9e44"/><text x="195" y="184" font-size="8" text-anchor="middle" fill="#2f9e44">CO₂</text><rect x="270" y="170" width="46" height="46" rx="4" fill="#bfe3f2" stroke="#2c6c86"/><path d="M288,170 v-24" stroke="#5b3a1a" stroke-width="3"/><path d="M288,146 q-14,-12 -22,-2 q16,2 22,8 q6,-6 22,-8 q-8,-10 -22,2 z" fill="#2f9e44"/><text x="293" y="230" font-size="9" text-anchor="middle" fill="#334155">plant in flask</text><rect x="440" y="160" width="110" height="46" rx="4" fill="#222" stroke="#000"/><text x="495" y="180" font-size="10" fill="#3ad36a" text-anchor="middle" font-family="monospace">O₂ ppm</text><text x="495" y="197" font-size="8" fill="#9bb9cf" text-anchor="middle">data logger / O₂ sensor</text><line x1="316" y1="200" x2="440" y2="186" stroke="#475569" stroke-width="1.5"/></svg>',
      },
      caption: 'A lamp (moveable along a metre rule to change light intensity), a CO₂ supply, the plant in a flask, and an oxygen sensor with a data logger to measure the rate of photosynthesis.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to test how changing light intensity affects the rate of photosynthesis. In your answer, you should include:\n- the independent variable, dependent variable and two control variables\n- a testable hypothesis\n- details of any additional equipment you would need\n- details of how to manipulate, measure or monitor the variables\n- details of the method to collect sufficient data',
        marks: 15,
        ph: 'IV = light intensity; DV = O₂ concentration; CVs; hypothesis; method with repeats and increments.',
      },
    ],
  },
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Pesticides & Plant Yield',
    topicCanonical: 'Human Influences',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Pollution & Conservation'],
    marks: 7,
    stem: 'In addition to maximizing plant growth through photosynthesis, the yield of plant crops can be increased using pesticides. Pesticides are compounds used in farming to kill plant pests. The table below shows the results from experiments testing the impact of using the pesticide boric acid on the yield of different plant species. The experiment was conducted in a greenhouse with constant environmental conditions and concentration of pesticide.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Plant species', 'Yield without pesticide / kg m⁻²', 'Yield with pesticide / kg m⁻²'],
        rows: [
          ['W', '1.8', '3.0'],
          ['X', '1.9', '2.0'],
          ['Y', '2.0', '2.4'],
          ['Z', '1.0', '1.2'],
        ],
      },
      caption: 'Yield of four plant species grown with and without the pesticide boric acid, at constant greenhouse conditions and pesticide concentration.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the plant species that has the highest yield when grown using pesticide.',
        marks: 1,
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'bar',
            title: 'Yield with vs without pesticide',
            x: { label: 'Plant species', categories: ['W', 'X', 'Y', 'Z'] },
            y: { label: 'Yield', unit: 'kg m⁻²', min: 0, max: 3.5, ticks: [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5] },
            series: [
              { name: 'Without pesticide', color: '#94a3b8', points: [1.8, 1.9, 2.0, 1.0] },
              { name: 'With pesticide', color: '#2f9e44', points: [3.0, 2.0, 2.4, 1.2] },
            ],
          },
          caption: 'Yield of each species without (grey) and with (green) pesticide. Compare the green bars to find the highest yield with pesticide.',
        },
        ph: 'Compare "Yield with pesticide" column for all four species.',
      },
      {
        label: 'b',
        text: 'In some species, the use of pesticide did not have a large impact on yield. **Suggest** a reason for this observation.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Plant species', 'Increase in yield with pesticide / kg m⁻²'],
            rows: [
              ['W', '+1.2 (large effect)'],
              ['X', '+0.1 (little effect)'],
              ['Y', '+0.4'],
              ['Z', '+0.2 (little effect)'],
            ],
          },
          caption: 'The change in yield caused by the pesticide. For X and Z the increase is small — the pest that boric acid kills may not attack those species.',
        },
        ph: 'The pest targeted by boric acid may not attack all plant species.',
      },
      {
        label: 'c',
        text: '**State** the reason for conducting these experiments inside a greenhouse.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Variable', 'Why a greenhouse helps'],
            rows: [
              ['Temperature', 'Kept constant for every plant'],
              ['Water / humidity', 'Controlled by the grower'],
              ['Light', 'Same for all plants'],
              ['Pests from outside', 'Excluded, so only boric acid affects the pest'],
            ],
          },
          caption: 'A greenhouse lets the experimenter keep environmental conditions constant, so any difference in yield is due to the pesticide and not other variables — a fair test.',
        },
        ph: 'Greenhouses allow control of environmental variables.',
      },
      {
        label: 'd',
        text: 'A farmer who grows species W and Y decided to find the lowest possible concentration of boric acid needed to maximise yield. **Identify** the minimum concentration of boric acid for plant W and for plant Y.',
        marks: 2,
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'line',
            title: 'Yield vs boric acid concentration for plants W and Y',
            x: { label: 'Boric acid / %', categories: ['0', '2', '4', '6', '8', '10'] },
            y: { label: 'Yield', unit: 'kg m⁻²', min: 0, max: 3.5, ticks: [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5] },
            series: [
              { name: 'Plant W', color: '#e8590c', points: [1.8, 2.4, 3.0, 3.0, 3.0, 3.0] },
              { name: 'Plant Y', color: '#1971c2', points: [2.0, 2.1, 2.2, 2.4, 2.4, 2.4] },
            ],
          },
          caption: 'Plant W reaches its maximum yield (3.0) at 4% boric acid and stays flat after; Plant Y reaches its maximum (2.4) at 6% and stays flat after. The minimum concentration that maximises yield is where each curve first levels off.',
        },
        widget: 'fill_blank',
        widgetOptions: ['4', '6'],
        ph: 'Read from graph where yield of each plant reaches its maximum and stops increasing.',
      },
      {
        label: 'e',
        text: 'The farmer wants to grow both species on the same farm. **Identify** the minimum concentration of boric acid they should use. **Justify** your answer.',
        marks: 2,
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'line',
            title: 'Both species must reach maximum yield',
            x: { label: 'Boric acid / %', categories: ['0', '2', '4', '6', '8', '10'] },
            y: { label: 'Yield', unit: 'kg m⁻²', min: 0, max: 3.5, ticks: [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5] },
            series: [
              { name: 'Plant W', color: '#e8590c', points: [1.8, 2.4, 3.0, 3.0, 3.0, 3.0] },
              { name: 'Plant Y', color: '#1971c2', points: [2.0, 2.1, 2.2, 2.4, 2.4, 2.4] },
            ],
          },
          caption: 'W is maximal from 4%, but Y is not maximal until 6%. To maximise both species on one farm, the farmer must use the higher of the two minimums (6%).',
        },
        ph: 'Use the higher of the two minimum concentrations and explain why.',
      },
    ],
  },
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Cancer & Disease',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Cell Division (Mitosis & Meiosis)'],
    marks: 10,
    stem: 'A disease is a disorder that affects an organism\'s body, organs, tissues or cells. Diseases can be caused by pathogens; they can be inherited or they can develop due to changes in normal body processes.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 580 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ca1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#94a3b8"/></marker><marker id="ca2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="580" height="280" fill="#ffffff"/><text x="290" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Normal cell division vs cancer</text><text x="40" y="56" font-size="12" font-weight="700" fill="#2f9e44">Healthy: controlled mitosis</text><circle cx="70" cy="100" r="16" fill="#fde2b3" stroke="#c98a3c"/><circle cx="70" cy="100" r="5" fill="#b45309"/><line x1="90" y1="100" x2="130" y2="100" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ca1)"/><circle cx="152" cy="100" r="13" fill="#fde2b3" stroke="#c98a3c"/><circle cx="178" cy="100" r="13" fill="#fde2b3" stroke="#c98a3c"/><line x1="200" y1="100" x2="236" y2="100" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ca1)"/><rect x="244" y="80" width="80" height="42" rx="4" fill="#fdf0d5" stroke="#c98a3c"/><g fill="#c98a3c"><circle cx="262" cy="92" r="4"/><circle cx="284" cy="92" r="4"/><circle cx="306" cy="92" r="4"/><circle cx="262" cy="110" r="4"/><circle cx="284" cy="110" r="4"/><circle cx="306" cy="110" r="4"/></g><text x="284" y="138" font-size="9" text-anchor="middle" fill="#334155">healthy tissue</text><text x="40" y="178" font-size="12" font-weight="700" fill="#c0392b">Cancer: uncontrolled division</text><circle cx="70" cy="222" r="16" fill="#fde2b3" stroke="#c98a3c"/><line x1="90" y1="222" x2="126" y2="222" stroke="#c0392b" stroke-width="1.5" marker-end="url(#ca2)"/><circle cx="148" cy="222" r="14" fill="#e8a0a0" stroke="#a83232"/><text x="148" y="226" font-size="9" text-anchor="middle" fill="#7a1f1f">mutation</text><line x1="170" y1="222" x2="206" y2="222" stroke="#c0392b" stroke-width="1.5" marker-end="url(#ca2)"/><g fill="#c0392b"><circle cx="250" cy="206" r="9"/><circle cx="272" cy="214" r="9"/><circle cx="262" cy="232" r="9"/><circle cx="288" cy="228" r="9"/><circle cx="244" cy="226" r="9"/><circle cx="278" cy="200" r="9"/></g><text x="266" y="258" font-size="9" text-anchor="middle" fill="#7a1f1f">tumour</text></svg>',
      },
      caption: 'In healthy tissue, cells divide in a controlled way by mitosis. In cancer, abnormal genetic changes cause cells to divide uncontrollably, forming a tumour.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The graph shows the number of new cases of cancer per year in females and males in the UK in 2016–2018. Using the graph, **state** one similarity and one difference in the trends in new cancer cases per year for females and males.',
        marks: 2,
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'bar',
            title: 'New cancer cases per year by age (UK, 2016–2018)',
            x: { label: 'Age at diagnosis / years', categories: ['0–4', '10–14', '20–24', '30–34', '40–44', '50–54', '60–64', '65–69', '70–74', '75–79', '80–84', '85–89'] },
            y: { label: 'Average new cases per year', min: 0, max: 35000, ticks: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000] },
            series: [
              { name: 'Female', color: '#c2255c', points: [200, 100, 600, 2000, 5500, 13500, 17500, 24000, 23000, 21500, 19000, 13000] },
              { name: 'Male', color: '#2f9e44', points: [200, 100, 500, 1300, 2800, 8500, 20000, 30500, 31500, 29000, 21500, 13000] },
            ],
          },
          caption: 'New cancer cases per year for females (magenta) and males (green) by age group. Both rise with age then fall; female cases peak at 65–69 while male cases peak at 70–74.',
        },
        ph: 'Similarity: both increase then decrease with age. Difference: peak age or which sex has more cases at certain ages.',
      },
      {
        label: 'b',
        text: 'The incidence rate graph shows cases per 100 000 people. **Suggest** and **justify** why the incidence rates for both males and females increase with age.',
        marks: 2,
        artefact: {
          component: 'InteractiveChart',
          data: {
            kind: 'line',
            title: 'Cancer incidence rate by age (cases per 100 000)',
            x: { label: 'Age at diagnosis / years', categories: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90'] },
            y: { label: 'Incidence rate per 100 000 people', min: 0, max: 3500, ticks: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500] },
            series: [
              { name: 'Female', color: '#c2255c', points: [0, 20, 40, 100, 300, 550, 750, 1200, 1700, 2050] },
              { name: 'Male', color: '#2f9e44', points: [0, 15, 30, 50, 200, 450, 750, 1500, 2650, 3200] },
            ],
          },
          caption: 'Incidence rate (cases per 100 000) rises with age for both sexes. The two lines cross around age 60; above this, the male rate climbs more steeply, reaching about 3200 per 100 000 by age 90.',
        },
        ph: 'Longer exposure to risk factors → greater chance of mutations accumulating over time.',
      },
      {
        label: 'c',
        text: 'A student claims that spending time in the sun is good for health. **Discuss** and **evaluate** the student\'s claim. In your answer, you should include:\n- health benefits that support the student\'s claim\n- health concerns that do not support the student\'s claim\n- a concluding statement with advice for minimizing the health concerns',
        marks: 6,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Effect of sun exposure', 'For or against the claim'],
            rows: [
              ['Skin makes vitamin D (bone health)', 'Supports the claim'],
              ['Sunlight can improve mood / mental health', 'Supports the claim'],
              ['UV damages DNA → risk of skin cancer (melanoma)', 'Against the claim'],
              ['UV can cause cataracts / eye damage', 'Against the claim'],
              ['Premature skin ageing / sunburn', 'Against the claim'],
            ],
          },
          caption: 'Benefits and health concerns of sun exposure to weigh up. Advice for minimising concerns: limit time in strong sun, use sunscreen, and protect the eyes.',
        },
        ph: 'Benefits: Vitamin D, mental health. Concerns: skin cancer, cataracts. Advice: limit exposure, use sunscreen.',
      },
    ],
  },
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Personalized Medicine',
    topicCanonical: 'Genome Mapping & Application',
    topicGroup: 'Biotechnology',
    topicsAlso: ['DNA & Genetics', 'Ethical Implications'],
    marks: 14,
    stem: 'Developments in science and technology have allowed for personalization of medicine so that patients can be prescribed the most effective treatment. DNA sequencing is used to study a patient\'s genetic material before deciding on a treatment. DNA sequencing can be used to determine which version of a disease a patient has, and to predict how an individual will respond to different drugs and doses.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="pm1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#475569"/></marker></defs><rect width="600" height="220" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Personalised medicine workflow</text><g><rect x="20" y="70" width="110" height="80" rx="8" fill="#eef2ff" stroke="#4f46e5"/><circle cx="75" cy="96" r="9" fill="#c7d2fe" stroke="#4f46e5"/><path d="M61,120 a14,14 0 0 1 28,0 z" fill="#c7d2fe" stroke="#4f46e5"/><text x="75" y="140" font-size="10" text-anchor="middle" fill="#3730a3">patient sample</text></g><line x1="132" y1="110" x2="168" y2="110" stroke="#475569" stroke-width="1.5" marker-end="url(#pm1)"/><g><rect x="170" y="70" width="120" height="80" rx="8" fill="#ecfeff" stroke="#0891b2"/><path d="M200,82 q14,16 0,32 q-14,16 0,32" fill="none" stroke="#0891b2" stroke-width="2.5"/><path d="M214,82 q-14,16 0,32 q14,16 0,32" fill="none" stroke="#0891b2" stroke-width="2.5"/><text x="248" y="116" font-size="11" text-anchor="middle" fill="#155e75">DNA</text><text x="230" y="140" font-size="10" text-anchor="middle" fill="#155e75">sequencing</text></g><line x1="292" y1="110" x2="328" y2="110" stroke="#475569" stroke-width="1.5" marker-end="url(#pm1)"/><g><rect x="330" y="70" width="120" height="80" rx="8" fill="#fff7ed" stroke="#ea580c"/><text x="390" y="104" font-size="10" text-anchor="middle" fill="#9a3412">analyse genes:</text><text x="390" y="120" font-size="10" text-anchor="middle" fill="#9a3412">disease version,</text><text x="390" y="136" font-size="10" text-anchor="middle" fill="#9a3412">drug response</text></g><line x1="452" y1="110" x2="488" y2="110" stroke="#475569" stroke-width="1.5" marker-end="url(#pm1)"/><g><rect x="490" y="70" width="100" height="80" rx="8" fill="#ecfdf5" stroke="#059669"/><text x="540" y="104" font-size="10" text-anchor="middle" fill="#065f46">best drug</text><text x="540" y="120" font-size="10" text-anchor="middle" fill="#065f46">&amp; dose for</text><text x="540" y="136" font-size="10" text-anchor="middle" fill="#065f46">this patient</text></g><text x="300" y="186" font-size="11" text-anchor="middle" fill="#64748b">A patient’s DNA is sequenced and analysed so the most effective drug and dose can be prescribed.</text></svg>',
      },
      caption: 'Personalised medicine: a patient\'s DNA is sequenced and analysed to identify their disease version and likely drug response, so treatment can be tailored to the individual.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the use of personalized healthcare in the treatment of diseases. In your answer, you should include:\n- medical benefits of personalized healthcare for an individual and wider society\n- economic considerations in moving to personalized healthcare\n- ethical considerations\n- a concluding appraisal with justification',
        marks: 14,
        ph: 'Cover medical benefits, economic costs/savings, ethical issues (access, privacy), and a justified conclusion.',
      },
    ],
  },
]
