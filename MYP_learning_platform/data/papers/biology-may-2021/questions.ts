import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2021',
  subject: 'Biology',
  session: 'May',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ── Q1 — Cells and Genetics (14 marks, Crit A) ──────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Cells and Genetics',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    topicsAlso: ['DNA & Genetics', 'Inheritance & Variation'],
    marks: 14,
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="300" fill="#ffffff"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two models of an animal cell</text><text x="155" y="44" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">2D labelled diagram</text><text x="465" y="44" font-size="11" font-weight="700" text-anchor="middle" fill="#475569">3D physical model</text><g><ellipse cx="155" cy="170" rx="120" ry="92" fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/><text x="155" y="80" font-size="9" fill="#92400e">cell membrane</text><circle cx="150" cy="170" r="42" fill="#c084fc" stroke="#7e22ce" stroke-width="2"/><text x="150" y="173" font-size="9" font-weight="700" text-anchor="middle" fill="#3b0764">nucleus</text><ellipse cx="90" cy="120" rx="20" ry="9" fill="#1d4ed8" stroke="#1e3a8a" transform="rotate(-25 90 120)"/><ellipse cx="215" cy="125" rx="20" ry="9" fill="#1d4ed8" stroke="#1e3a8a" transform="rotate(20 215 125)"/><ellipse cx="100" cy="225" rx="20" ry="9" fill="#1d4ed8" stroke="#1e3a8a" transform="rotate(15 100 225)"/><text x="60" y="250" font-size="9" fill="#1e3a8a">mitochondria</text><text x="150" y="230" font-size="8" fill="#92400e">cytoplasm</text></g><g><ellipse cx="465" cy="170" rx="120" ry="92" fill="#fde68a" stroke="#b45309" stroke-width="2.5"/><ellipse cx="465" cy="170" rx="120" ry="92" fill="url(#sheen)" opacity="0.25"/><circle cx="458" cy="168" r="46" fill="#a21caf" stroke="#701a75" stroke-width="2"/><circle cx="448" cy="158" r="14" fill="#86198f"/><ellipse cx="400" cy="115" rx="22" ry="11" fill="#1e40af"/><ellipse cx="535" cy="135" rx="22" ry="11" fill="#1e40af"/><ellipse cx="405" cy="225" rx="22" ry="11" fill="#1e40af"/><ellipse cx="525" cy="215" rx="22" ry="11" fill="#1e40af"/></g><defs><linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#fde68a"/></linearGradient></defs></svg>',
      },
      caption: 'A flat 2D diagram and a solid 3D model of the same animal cell — both show the nucleus, mitochondria, cytoplasm and cell membrane.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** whether each feature is found in bacteria cells, animal cells, or both by selecting the correct option from the dropdown.',
        marks: 2,
        ph: 'Mitochondria → Animal cells; Cell wall → Bacteria cells; Cell membrane → Both; Nucleus → Animal cells.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Mitochondria', 'Cell wall', 'Cell membrane', 'Nucleus'],
        widgetOptions: ['Bacteria cells', 'Animal cells', 'Both'],
      },
      {
        label: 'b',
        text: '**Outline** two advantages of using a 3D model of a cell compared to a 2D diagram.',
        marks: 2,
        ph: '3D model is closer to reality; shows spatial relationships between organelles.',
      },
      {
        label: 'c',
        text: '**Label** the diagram by dragging each term to the correct position: Chromosome, DNA, Gene, Nucleus, Nucleotide.',
        marks: 2,
        ph: 'Nucleus (large oval) → Chromosome (condensed inside) → DNA (helix strand) → Gene (segment of DNA) → Nucleotide (single unit).',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="220" fill="#ffffff"/><text x="320" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">From nucleus to nucleotide — levels of genetic material</text><g><ellipse cx="80" cy="120" rx="55" ry="48" fill="#ede9fe" stroke="#7e22ce" stroke-width="2"/><text x="80" y="185" font-size="10" text-anchor="middle" fill="#5b21b6">Nucleus (Position 1)</text></g><g transform="translate(190 95)"><path d="M0 0 q12 12 0 24 q-12 12 0 24 M18 0 q-12 12 0 24 q12 12 0 24" stroke="#be185d" stroke-width="6" fill="none"/><text x="9" y="100" font-size="10" text-anchor="middle" fill="#9d174d">Chromosome (Position 2)</text></g><g transform="translate(330 88)"><path d="M0 0 C30 12 30 24 0 36 C-30 48 -30 60 0 72" stroke="#1d4ed8" stroke-width="3" fill="none"/><path d="M40 0 C10 12 10 24 40 36 C70 48 70 60 40 72" stroke="#1d4ed8" stroke-width="3" fill="none"/><line x1="6" y1="9" x2="34" y2="9" stroke="#94a3b8"/><line x1="6" y1="27" x2="34" y2="27" stroke="#94a3b8"/><line x1="6" y1="45" x2="34" y2="45" stroke="#94a3b8"/><line x1="6" y1="63" x2="34" y2="63" stroke="#94a3b8"/><text x="20" y="100" font-size="10" text-anchor="middle" fill="#1e3a8a">DNA (Position 3)</text></g><g transform="translate(440 100)"><rect x="0" y="0" width="58" height="40" rx="4" fill="#dcfce7" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4 3"/><text x="29" y="24" font-size="9" text-anchor="middle" fill="#166534">gene segment</text><text x="29" y="80" font-size="10" text-anchor="middle" fill="#166534">Gene (Position 4)</text></g><g transform="translate(545 105)"><rect x="0" y="0" width="20" height="14" rx="2" fill="#f59e0b"/><circle cx="30" cy="7" r="7" fill="#0ea5e9"/><polygon points="42,0 56,7 42,14" fill="#ef4444"/><text x="28" y="70" font-size="10" text-anchor="middle" fill="#92400e">Nucleotide (Position 5)</text></g></svg>',
          },
          caption: 'Genetic material zooms in left→right: the nucleus holds chromosomes, which are coiled DNA; a gene is a segment of DNA, and a nucleotide is a single DNA unit.',
        },
        widget: 'match_drag_drop',
        widgetItems: ['Chromosome', 'DNA', 'Gene', 'Nucleus', 'Nucleotide'],
        widgetOptions: ['Position 1', 'Position 2', 'Position 3', 'Position 4', 'Position 5'],
      },
      {
        label: 'd',
        text: 'The father has dimples and his genotype is Dd. The mother has no dimples. **State** the genotype of the mother.',
        marks: 1,
        ph: 'dd (no dimples = homozygous recessive).',
      },
      {
        label: 'e',
        text: '**Complete** the Punnett square using the father\'s alleles (D, d) and mother\'s alleles (d, d), then **determine** the probability that a child would have dimples.',
        marks: 2,
        ph: 'Punnett square: Dd, Dd, dd, dd. Probability of dimples = 50% (2/4).',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Cross (father Dd × mother dd)', 'Mother allele d', 'Mother allele d'],
            rows: [
              ['Father allele D', 'Dd (dimples)', 'Dd (dimples)'],
              ['Father allele d', 'dd (no dimples)', 'dd (no dimples)'],
            ],
          },
          caption: 'Punnett square for the dimple cross: 2 of the 4 offspring are Dd (dimples), so the probability of dimples is 50%.',
        },
        widget: 'fill_blank',
        widgetOptions: ['Dd', 'dd'],
      },
      {
        label: 'f',
        text: '**Explain** why variation within a species is important for its survival.',
        marks: 5,
        ph: 'Variation → selection pressure → favourable individuals survive → reproduce → pass on heritable traits → species better adapted over generations.',
      },
    ],
  },

  // ── Q2 — Forest Food Web (8 marks, Crit A) ──────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Ecosystems and Food Webs',
    topicCanonical: 'Food Chains & Webs',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Interdependency', 'Habitat Change & Destruction'],
    marks: 8,
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Forest food web — links join prey to predator (energy flows prey → predator)',
        nodes: [
          { id: 'grass', label: 'Grasses', color: '#2f9e44', detail: 'Producer — makes its own food by photosynthesis.' },
          { id: 'oak', label: 'Oak tree', color: '#2f9e44', detail: 'Producer — its acorns and leaves feed many animals.' },
          { id: 'deer', label: 'Deer', color: '#f08c00', detail: 'Primary consumer (herbivore) — eats grasses and tree shoots.' },
          { id: 'rabbit', label: 'Rabbit', color: '#f08c00', detail: 'Primary consumer (herbivore) — eats grasses.' },
          { id: 'squirrel', label: 'Squirrel', color: '#f08c00', detail: 'Primary consumer — eats acorns and seeds from the oak.' },
          { id: 'fox', label: 'Fox', color: '#c2255c', detail: 'Secondary consumer — eats rabbits and squirrels.' },
          { id: 'owl', label: 'Owl', color: '#c2255c', detail: 'Secondary consumer — eats squirrels and rabbits.' },
          { id: 'snake', label: 'Snake', color: '#c2255c', detail: 'Secondary consumer — eats rabbits.' },
          { id: 'bear', label: 'Black bear', color: '#495057', detail: 'Omnivore — eats both plants (acorns, berries) and animals (deer, rabbits).' },
        ],
        edges: [
          { from: 'grass', to: 'deer' },
          { from: 'grass', to: 'rabbit' },
          { from: 'oak', to: 'squirrel' },
          { from: 'oak', to: 'bear' },
          { from: 'rabbit', to: 'fox' },
          { from: 'rabbit', to: 'owl' },
          { from: 'rabbit', to: 'snake' },
          { from: 'squirrel', to: 'fox' },
          { from: 'squirrel', to: 'owl' },
          { from: 'deer', to: 'bear' },
          { from: 'rabbit', to: 'bear' },
        ],
      },
      caption: 'Forest food web: green = producers, orange = primary consumers, pink = predators, grey = omnivore. Each link joins a prey to the organism that eats it. Tap a node to read its role.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the food web to **identify** one producer, one omnivore, and one primary consumer.',
        marks: 3,
        ph: 'Producer: grasses or oak tree. Omnivore: black bear. Primary consumer: deer, rabbit, squirrel, or black bear.',
      },
      {
        label: 'b',
        text: 'A housing development is planned in part of the forest. **Outline** how this could affect the fox population.',
        marks: 2,
        ph: 'Habitat destroyed → less territory/prey → fox population decreases. OR alternative food (rubbish) → fox population increases.',
      },
      {
        label: 'c',
        text: 'Using your answer to (b), **describe** how the deer population might be affected.',
        marks: 3,
        ph: 'If fox population decreases → fewer rabbits eaten → rabbit population increases → more competition for food with deer → deer may decrease. OR foxes eat fewer deer → deer population increases.',
      },
    ],
  },

  // ── Q3 — Aquatic Plants and Prey Survival (5 marks, Crit C) ─────────────
  {
    id: 3,
    crit: 'C',
    type: 'extended',
    topic: 'Aquatic Plants and Prey Survival',
    topicCanonical: 'Predator/Prey',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 5,
    stem: 'A student investigated how different aquatic plants affect the survival rate of small prey fish. The bar graph shows percentage survival of prey in tanks with different plant types.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'How different aquatic plants affect the survival of prey',
        mode: 'bars',
        variable: 'Tank condition',
        metric: 'Percentage average survival of prey / %',
        bars: [
          { label: 'No plants', value: 30 },
          { label: 'Plant A (native)', value: 55 },
          { label: 'Plant B (native)', value: 70 },
          { label: 'Plant C (non-native)', value: 45 },
          { label: 'Plant D (non-native)', value: 40 },
        ],
        note: 'Native plants (A, B) give higher survival than non-native plants (C, D); the no-plants tank is the control.',
      },
      caption: 'Percentage of prey surviving in each tank. Plant B (native) gives the highest survival; the no-plants tank is the control.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** which plant provided the highest prey survival rate.',
        marks: 1,
        ph: 'Plant B — 70% survival, the highest of all conditions.',
      },
      {
        label: 'b',
        text: '**Suggest** one reason why that plant gave the highest survival rate.',
        marks: 1,
        ph: 'Plant B is a native plant; provides better hiding places / more branches / better camouflage for prey.',
      },
      {
        label: 'c',
        text: '**Compare and contrast** the results for native plants with the results for non-native plants.',
        marks: 2,
        ph: 'Both provide hiding places for prey compared to no plants (similarity). Native plants give higher survival rates than non-native plants; greater range between native plant results (difference).',
      },
      {
        label: 'd',
        text: '**State** why a "no plants" condition was also tested in this investigation.',
        marks: 1,
        ph: 'To show the effect of plants on results; it is the control condition.',
      },
    ],
  },

  // ── Q4 — Photosynthesis Investigation: Light (8 marks, Crit B) ──────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Photosynthesis Investigation — Light Distance',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 8,
    stem: 'A student placed a Cabomba water plant in a beaker of water and moved a light source to different distances. They counted the number of gas bubbles produced by the plant.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="280" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Measuring photosynthesis at different light distances</text><g><rect x="40" y="120" width="14" height="70" fill="#475569"/><rect x="20" y="92" width="54" height="30" rx="6" fill="#fde047" stroke="#ca8a04" stroke-width="2"/><circle cx="47" cy="107" r="9" fill="#fef9c3"/><text x="47" y="210" font-size="10" text-anchor="middle" fill="#475569">lamp</text></g><g><line x1="100" y1="200" x2="430" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 4"/><line x1="100" y1="194" x2="100" y2="206" stroke="#94a3b8"/><line x1="430" y1="194" x2="430" y2="206" stroke="#94a3b8"/><text x="265" y="220" font-size="11" text-anchor="middle" fill="#0b7285">distance d (independent variable)</text></g><g><path d="M380 110 L450 110 L440 235 L390 235 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><path d="M384 150 L446 150 L444 235 L388 235 Z" fill="#bae6fd" opacity="0.7"/><text x="415" y="252" font-size="10" text-anchor="middle" fill="#475569">beaker of water</text><g stroke="#15803d" stroke-width="2.5" fill="none"><path d="M415 230 q-10 -20 4 -38 q10 -16 -2 -34"/><path d="M415 200 l-12 -6 M415 190 l12 -7 M415 175 l-11 -6"/></g><text x="448" y="178" font-size="9" fill="#166534">Cabomba</text><circle cx="412" cy="150" r="3" fill="#38bdf8"/><circle cx="420" cy="138" r="2.5" fill="#38bdf8"/><circle cx="408" cy="128" r="2" fill="#38bdf8"/><circle cx="418" cy="118" r="2.5" fill="#38bdf8"/><text x="470" y="135" font-size="9" fill="#0369a1">gas bubbles</text></g></svg>',
      },
      caption: 'A lamp is moved to set distances from a beaker holding a Cabomba plant; the student counts the oxygen bubbles released. Distance is the independent variable.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Complete** the word equation for photosynthesis by filling in the missing reactants and products.',
        marks: 1,
        ph: 'Carbon dioxide + Water → Glucose + Oxygen.',
        widget: 'fill_blank',
        widgetOptions: ['Carbon dioxide', 'Water', 'Glucose', 'Oxygen'],
      },
      {
        label: 'b',
        text: '**Identify** the independent variable, dependent variable, and two control variables for this investigation.',
        marks: 4,
        ph: 'IV: distance of light source from plant. DV: number of bubbles / volume of gas produced. CV1: temperature of water. CV2: same plant / same light bulb / same CO₂ concentration.',
      },
      {
        label: 'c',
        text: '**Formulate** a hypothesis for this investigation by selecting the correct prediction and completing the scientific explanation.',
        marks: 3,
        ph: 'Rate of photosynthesis decreases; because light intensity decreases with distance, less light absorbed by chlorophyll, fewer successful reactions.',
        widget: 'radio_select',
        widgetOptions: [
          'the rate of photosynthesis decreases',
          'the rate of photosynthesis increases',
          'the rate of photosynthesis stays the same',
        ],
      },
    ],
  },

  // ── Q5 — Temperature Investigation (15 marks, Crit B/C) ─────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Photosynthesis Investigation — Temperature',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 15,
    stem: 'A student investigated the effect of temperature on the rate of photosynthesis in Cabomba. The method involved 6 steps: placing the plant in a beaker, adding a funnel, measuring gas with a measuring cylinder, placing the beaker in a ___ to keep temperature constant, counting bubbles for 5 minutes, and repeating 4 trials at each of 5 different temperatures.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Apparatus for the temperature investigation</text><g><rect x="60" y="150" width="200" height="115" rx="6" fill="#cffafe" stroke="#0e7490" stroke-width="2"/><text x="160" y="285" font-size="10" text-anchor="middle" fill="#155e75">water bath (keeps temperature constant — step 4)</text></g><g><path d="M95 165 L225 165 L210 255 L110 255 Z" fill="#bae6fd" stroke="#2563eb" stroke-width="2"/><text x="160" y="248" font-size="9" text-anchor="middle" fill="#1e3a8a">beaker</text><g stroke="#15803d" stroke-width="2.5" fill="none"><path d="M160 250 q-10 -22 4 -42 q9 -16 -2 -34"/></g><path d="M135 200 L185 200 L172 150 L148 150 Z" fill="none" stroke="#475569" stroke-width="2"/><rect x="155" y="100" width="10" height="52" fill="none" stroke="#475569" stroke-width="2"/><text x="200" y="120" font-size="9" fill="#475569">funnel</text><circle cx="160" cy="150" r="2.5" fill="#38bdf8"/><circle cx="158" cy="135" r="2" fill="#38bdf8"/><circle cx="162" cy="120" r="2.5" fill="#38bdf8"/></g><g><rect x="360" y="70" width="46" height="195" rx="4" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/><text x="383" y="285" font-size="10" text-anchor="middle" fill="#1e3a8a">measuring cylinder</text><line x1="360" y1="110" x2="372" y2="110" stroke="#1d4ed8"/><line x1="360" y1="150" x2="372" y2="150" stroke="#1d4ed8"/><line x1="360" y1="190" x2="372" y2="190" stroke="#1d4ed8"/><line x1="360" y1="230" x2="372" y2="230" stroke="#1d4ed8"/><rect x="360" y="200" width="46" height="65" fill="#bfdbfe" opacity="0.7"/></g><g><rect x="470" y="60" width="20" height="205" rx="10" fill="#fff" stroke="#b91c1c" stroke-width="2"/><circle cx="480" cy="258" r="13" fill="#ef4444"/><rect x="476" y="120" width="8" height="138" fill="#ef4444"/><text x="480" y="285" font-size="10" text-anchor="middle" fill="#b91c1c">thermometer</text></g></svg>',
      },
      caption: 'Cabomba in a beaker with a funnel collecting gas into a measuring cylinder; the beaker sits in a water bath and a thermometer monitors the temperature.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the piece of equipment missing from step 4 to keep the temperature constant.',
        marks: 1,
        ph: 'A (thermostatically controlled) water bath — it holds the beaker at a set constant temperature.',
      },
      {
        label: 'b',
        text: 'After reading the student\'s method, the teacher said it would not give sufficient data to draw a conclusion. **State** two ways the method should be improved.',
        marks: 2,
        ph: 'Increase the number of different temperatures tested; collect enough data to calculate a reliable average / reduce experimental error.',
      },
      {
        label: 'c',
        text: '**Justify** why the student planned to repeat four trials at each temperature.',
        marks: 3,
        ph: 'To reduce the impact of experimental error; to identify anomalous/outlier results; to increase the reliability/accuracy of the calculated mean.',
      },
      {
        label: 'd',
        text: '**State** a way to improve the precision of measurements in this investigation using the equipment provided.',
        marks: 1,
        ph: 'Use a measuring cylinder to measure the volume of gas produced (rather than counting bubbles).',
      },
      {
        label: 'e',
        text: '**Calculate** the missing average(s) from the data table and show your working. **State** two improvements to the data presentation.',
        marks: 4,
        ph: 'Average at 20°C = 6 (5+7+5+7=24÷4). Improvements: consistent significant figures; correct column headings / units; plot results as a line/scatter graph.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Temperature / °C', 'Trial 1', 'Trial 2', 'Trial 3', 'Trial 4', 'Average'],
            rows: [
              ['20', '5', '7', '5', '7', '?'],
              ['40', '6', '13', '14', '12', '11.25'],
              ['50', '2', '1', '2', '1', '1.5'],
            ],
          },
          caption: 'Number of gas bubbles produced in 5 minutes. The average for the 20 °C row is missing: (5 + 7 + 5 + 7) ÷ 4 = 6.',
        },
      },
      {
        label: 'f',
        text: '**Identify** the data point in the table that appears to be an outlier.',
        marks: 1,
        ph: 'Trial 1 at 40°C (value of 6, much lower than the other 40°C trials: Trial 2 = 13, Trial 3 = 14, Trial 4 = 12).',
      },
      {
        label: 'g',
        text: '**Suggest** how to analyse data that contains an outlier.',
        marks: 1,
        ph: 'Exclude the outlier when calculating the mean / repeat the trial to verify whether it is a genuine result.',
      },
      {
        label: 'h',
        text: 'The graph below shows the effect of temperature on average number of gas bubbles produced. A student concludes the rate is "partially valid." **Evaluate** this conclusion.',
        marks: 2,
        ph: 'Partially valid: rate increases up to the optimum around 40°C (supported). Above the optimum the enzyme denatures — active site changes shape, substrate cannot fit, rate falls sharply.',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Effect of temperature on average gas bubbles in 5 minutes',
            xLabel: 'Temperature',
            xUnit: '°C',
            yLabel: 'Average number of bubbles in 5 minutes',
            xMin: 10,
            xMax: 55,
            yMin: 0,
            yMax: 12,
            xStep: 5,
            yStep: 2,
            dataPoints: [
              { x: 20, y: 6 },
              { x: 30, y: 9.5 },
              { x: 40, y: 11.25 },
              { x: 45, y: 8 },
              { x: 50, y: 1.5 },
            ],
          },
          caption: 'The rate rises to a peak (optimum ≈ 40 °C) then falls steeply as the enzyme denatures above the optimum temperature.',
        },
      },
    ],
  },

  // ── Q6 — Design Investigation: Stem Length (15 marks, Crit B) ───────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Design Investigation — Cabomba Stem Length',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 15,
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="280" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cabomba stems of different lengths (the variable to test)</text><g stroke="#15803d" fill="none"><g transform="translate(110 0)"><line x1="0" y1="220" x2="0" y2="170" stroke-width="4"/><path d="M0 200 l-10 -5 M0 185 l10 -6"/></g><g transform="translate(220 0)"><line x1="0" y1="220" x2="0" y2="130" stroke-width="4"/><path d="M0 200 l-10 -5 M0 180 l10 -6 M0 160 l-10 -5 M0 145 l10 -6"/></g><g transform="translate(340 0)"><line x1="0" y1="220" x2="0" y2="95" stroke-width="4"/><path d="M0 205 l-10 -5 M0 188 l10 -6 M0 170 l-10 -5 M0 152 l10 -6 M0 134 l-10 -5 M0 116 l10 -6"/></g><g transform="translate(470 0)"><line x1="0" y1="220" x2="0" y2="60" stroke-width="4"/><path d="M0 205 l-10 -5 M0 188 l10 -6 M0 170 l-10 -5 M0 152 l10 -6 M0 134 l-10 -5 M0 116 l10 -6 M0 98 l-10 -5 M0 80 l10 -6"/></g></g><line x1="40" y1="222" x2="560" y2="222" stroke="#475569" stroke-width="2"/><g font-size="11" text-anchor="middle" fill="#0b7285"><text x="110" y="245">3 cm</text><text x="220" y="245">6 cm</text><text x="340" y="245">9 cm</text><text x="470" y="245">12 cm</text></g><text x="300" y="268" font-size="11" text-anchor="middle" fill="#475569">Independent variable: length of Cabomba stem  ·  measure the gas bubbles given off for each length</text></svg>',
      },
      caption: 'Pieces of Cabomba cut to different lengths. Your design should change the stem length (IV) and measure the rate of photosynthesis (gas given off) for each length.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to test how changing the length of a Cabomba stem affects the rate of photosynthesis. Include: IV, DV, two control variables; a testable hypothesis; equipment; a method with at least 5 steps sufficient to collect data for at least 5 different stem lengths with 3 repeats.',
        marks: 15,
        ph: 'IV = stem length; DV = volume of gas / number of bubbles; CVs = light intensity, temperature, CO₂. Hypothesis: longer stem → more chloroplasts → higher rate. Equipment: measuring cylinder, ruler, lamp, water bath. Method: set up plant, set stem length, count bubbles for fixed time, repeat 3× per length, test 5 lengths.',
      },
    ],
  },

  // ── Q7 — Enzyme Action (7 marks, Crit A/C) ──────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Enzyme Action',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    topicsAlso: ['Photosynthesis'],
    marks: 7,
    stem: 'The enzyme that catalyses the photosynthesis reaction is called rubisco. Enzymes are affected by different factors, including temperature and concentration of substrate.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="220" fill="#ffffff"/><text x="320" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">An enzyme-catalysed reaction (lock and key)</text><g><polygon points="40,150 55,120 70,150" fill="#1e293b"/><text x="55" y="178" font-size="10" text-anchor="middle" fill="#334155">Shape 1</text><text x="55" y="192" font-size="9" text-anchor="middle" fill="#64748b">large molecule</text></g><text x="95" y="135" font-size="20" fill="#475569">+</text><g><path d="M120 100 a40 40 0 1 0 0 80 l0 -22 a18 18 0 0 1 0 -36 Z" fill="#0ea5e9" stroke="#0369a1" stroke-width="2"/><text x="135" y="200" font-size="10" text-anchor="middle" fill="#334155">Shape 2</text><text x="135" y="214" font-size="9" text-anchor="middle" fill="#64748b">notched shape</text></g><g><line x1="200" y1="138" x2="270" y2="138" stroke="#475569" stroke-width="2"/><polygon points="270,132 282,138 270,144" fill="#475569"/></g><g><path d="M300 100 a40 40 0 1 0 0 80 l0 -22 a18 18 0 0 1 0 -36 Z" fill="#0ea5e9" stroke="#0369a1" stroke-width="2"/><polygon points="318,128 330,110 342,128" fill="#1e293b"/><text x="320" y="200" font-size="10" text-anchor="middle" fill="#334155">Shape 3</text><text x="320" y="214" font-size="9" text-anchor="middle" fill="#64748b">notched shape holding small piece</text></g><g><line x1="380" y1="138" x2="450" y2="138" stroke="#475569" stroke-width="2"/><polygon points="450,132 462,138 450,144" fill="#475569"/></g><g><path d="M490 100 a40 40 0 1 0 0 80 l0 -22 a18 18 0 0 1 0 -36 Z" fill="#0ea5e9" stroke="#0369a1" stroke-width="2"/><text x="505" y="200" font-size="10" text-anchor="middle" fill="#334155">notched shape (released)</text></g><text x="575" y="135" font-size="20" fill="#475569">+</text><g><polygon points="600,135 612,118 624,135" fill="#1e293b"/><text x="612" y="160" font-size="10" text-anchor="middle" fill="#334155">Shape 4</text><text x="612" y="174" font-size="9" text-anchor="middle" fill="#64748b">small molecule</text></g></svg>',
      },
      caption: 'A large molecule (Shape 1) fits into the notched shape (Shape 2), reacts, and is released as a small molecule (Shape 4). The notched shape is unchanged — it is the enzyme.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagram above illustrates an enzyme-catalysed reaction. **Identify** the enzyme, the substrate, and the product from the dropdown.',
        marks: 2,
        ph: 'Shape 1 (large dark) = Substrate; Shape 2 = Enzyme; Shape 3 (after reaction) = Enzyme; Shape 4 (small) = Product.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Shape 1 (large dark molecule)', 'Shape 2 (enzyme shape)', 'Shape 3 (after arrow)', 'Shape 4 (small molecule)'],
        widgetOptions: ['Carbohydrate', 'Enzyme', 'Product', 'Substrate'],
      },
      {
        label: 'b',
        text: '**Interpret** the rate of reaction graph: explain the trend from A to B, and from B to C.',
        marks: 4,
        ph: 'A→B: rate increases as substrate conc increases; more substrate for enzymes to act on. B→C: rate is constant/plateau; all active sites occupied — enzyme concentration is limiting.',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Rate of reaction vs substrate concentration',
            xLabel: 'Substrate concentration',
            yLabel: 'Rate of reaction',
            xMin: 0,
            xMax: 10,
            yMin: 0,
            yMax: 10,
            xStep: 2,
            yStep: 2,
            dataPoints: [
              { x: 0, y: 0 },
              { x: 1, y: 2.6 },
              { x: 2, y: 4.8 },
              { x: 3, y: 6.6 },
              { x: 4, y: 7.8 },
              { x: 5, y: 8.4 },
              { x: 6, y: 8.5 },
              { x: 8, y: 8.5 },
              { x: 10, y: 8.5 },
            ],
          },
          caption: 'A is the origin, B is where the curve starts to flatten, C is the plateau. The rate rises with substrate then levels off when all active sites are occupied.',
        },
      },
      {
        label: 'c',
        text: 'More enzyme is added at point C. **Identify** which graph (A–D) correctly shows the effect on the rate of reaction.',
        marks: 1,
        ph: 'Graph D (rate rises above the plateau, then levels off at a new higher rate).',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="190" fill="#ffffff"/><text x="320" y="18" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Which graph shows the rate after more enzyme is added at C?</text><g transform="translate(20 30)"><rect x="0" y="0" width="140" height="120" fill="#f8fafc" stroke="#cbd5e1"/><line x1="20" y1="100" x2="125" y2="100" stroke="#475569" stroke-width="1.5"/><line x1="20" y1="100" x2="20" y2="15" stroke="#475569" stroke-width="1.5"/><path d="M20 100 Q55 45 125 40" stroke="#2563eb" stroke-width="2" fill="none"/><circle cx="70" cy="52" r="3" fill="#dc2626"/><text x="74" y="50" font-size="8" fill="#dc2626">C</text><path d="M70 52 L125 40" stroke="#2563eb" stroke-width="2" fill="none"/><text x="70" y="116" font-size="10" font-weight="700" fill="#334155">Graph A (no change)</text></g><g transform="translate(180 30)"><rect x="0" y="0" width="140" height="120" fill="#f8fafc" stroke="#cbd5e1"/><line x1="20" y1="100" x2="125" y2="100" stroke="#475569" stroke-width="1.5"/><line x1="20" y1="100" x2="20" y2="15" stroke="#475569" stroke-width="1.5"/><path d="M20 100 Q55 45 70 50" stroke="#2563eb" stroke-width="2" fill="none"/><circle cx="70" cy="50" r="3" fill="#dc2626"/><text x="74" y="48" font-size="8" fill="#dc2626">C</text><path d="M70 50 L125 92" stroke="#2563eb" stroke-width="2" fill="none"/><text x="70" y="116" font-size="10" font-weight="700" fill="#334155">Graph B (falls)</text></g><g transform="translate(340 30)"><rect x="0" y="0" width="140" height="120" fill="#f8fafc" stroke="#cbd5e1"/><line x1="20" y1="100" x2="125" y2="100" stroke="#475569" stroke-width="1.5"/><line x1="20" y1="100" x2="20" y2="15" stroke="#475569" stroke-width="1.5"/><path d="M20 100 Q55 45 70 50" stroke="#2563eb" stroke-width="2" fill="none"/><circle cx="70" cy="50" r="3" fill="#dc2626"/><text x="74" y="48" font-size="8" fill="#dc2626">C</text><path d="M70 50 L125 18" stroke="#2563eb" stroke-width="2" fill="none"/><text x="70" y="116" font-size="10" font-weight="700" fill="#334155">Graph C (keeps rising)</text></g><g transform="translate(500 30)"><rect x="0" y="0" width="140" height="120" fill="#eef2ff" stroke="#6366f1" stroke-width="2"/><line x1="20" y1="100" x2="125" y2="100" stroke="#475569" stroke-width="1.5"/><line x1="20" y1="100" x2="20" y2="15" stroke="#475569" stroke-width="1.5"/><path d="M20 100 Q55 45 70 50" stroke="#2563eb" stroke-width="2" fill="none"/><circle cx="70" cy="50" r="3" fill="#dc2626"/><text x="74" y="48" font-size="8" fill="#dc2626">C</text><path d="M70 50 Q88 28 110 30 L125 30" stroke="#2563eb" stroke-width="2" fill="none"/><text x="70" y="116" font-size="10" font-weight="700" fill="#334155">Graph D (rises then plateaus)</text></g></svg>',
          },
          caption: 'Four possible graphs of what happens to the rate after more enzyme is added at point C.',
        },
        widget: 'radio_select',
        widgetOptions: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
      },
    ],
  },

  // ── Q8 — Stress, Arteries, and Hypertension (9 marks, Crit A/D) ─────────
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Stress, Arteries and Hypertension',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Factors Affecting Human Health'],
    marks: 9,
    stem: 'Stress can lead to health problems including hypertension. One effect of stress is a temporary increase in blood pressure.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="260" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cross-section of an artery and a vein</text><g><circle cx="150" cy="135" r="80" fill="#fee2e2" stroke="#b91c1c" stroke-width="18"/><circle cx="150" cy="135" r="48" fill="#fecaca" stroke="#ef4444" stroke-width="6"/><circle cx="150" cy="135" r="30" fill="#fff"/><text x="150" y="139" font-size="11" text-anchor="middle" fill="#b91c1c">small lumen</text><text x="150" y="40" font-size="13" font-weight="700" text-anchor="middle" fill="#991b1b">ARTERY</text><text x="150" y="240" font-size="10" text-anchor="middle" fill="#7f1d1d">thick muscular + elastic wall</text></g><g><circle cx="410" cy="135" r="80" fill="#dbeafe" stroke="#1d4ed8" stroke-width="7"/><circle cx="410" cy="135" r="64" fill="#fff"/><text x="410" y="139" font-size="12" text-anchor="middle" fill="#1d4ed8">large lumen</text><text x="410" y="40" font-size="13" font-weight="700" text-anchor="middle" fill="#1e3a8a">VEIN</text><text x="410" y="240" font-size="10" text-anchor="middle" fill="#1e3a8a">thin wall, little elastic tissue</text></g></svg>',
      },
      caption: 'The artery has a much thicker wall with more muscle and elastic fibres, and a smaller lumen, so it can withstand the higher pressure of blood pumped from the heart. The vein has a thin wall and a wide lumen.',
    },
    tasks: [
      {
        label: 'a',
        text: 'One effect of stress is a temporary increase in blood pressure. **Outline** how arteries are better able to withstand high blood pressure than veins.',
        marks: 2,
        ph: 'Arteries have more elastic fibres in their walls; arteries have thicker and more muscular walls.',
      },
      {
        label: 'b',
        text: 'Exercise can be prescribed to reduce hypertension. Besides reducing blood pressure, **suggest** two advantages and two disadvantages of exercise for health.',
        marks: 4,
        ph: 'Advantages: weight loss, improved mood/mental health, increased fitness, reduced risk of heart disease. Disadvantages: risk of injury/muscle ache, complications for at-risk groups, hard to maintain long-term.',
      },
      {
        label: 'c',
        text: 'Using information from the video, **explain** how hypertension medication lowers blood pressure.',
        marks: 3,
        ph: 'Medication causes blood vessels to relax/stop contracting; lumen increases in diameter (vasodilation); same volume of blood flows through a larger space, reducing pressure.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="220" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">How medication lowers blood pressure (vasodilation)</text><g><text x="140" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#991b1b">Before: contracted</text><rect x="60" y="70" width="160" height="90" rx="14" fill="#fecaca" stroke="#b91c1c" stroke-width="4"/><rect x="92" y="100" width="96" height="30" rx="10" fill="#ef4444"/><text x="140" y="120" font-size="10" text-anchor="middle" fill="#fff">narrow lumen</text><text x="140" y="178" font-size="10" text-anchor="middle" fill="#7f1d1d">high pressure</text></g><g><line x1="245" y1="115" x2="305" y2="115" stroke="#475569" stroke-width="3"/><polygon points="305,108 320,115 305,122" fill="#475569"/><text x="282" y="105" font-size="9" text-anchor="middle" fill="#475569">drug</text></g><g><text x="430" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#166534">After: relaxed</text><rect x="345" y="70" width="170" height="90" rx="14" fill="#bbf7d0" stroke="#15803d" stroke-width="4"/><rect x="360" y="92" width="140" height="46" rx="12" fill="#22c55e"/><text x="430" y="119" font-size="10" text-anchor="middle" fill="#fff">wider lumen</text><text x="430" y="178" font-size="10" text-anchor="middle" fill="#166534">lower pressure</text></g></svg>',
          },
          caption: 'The medication relaxes the muscle in the vessel wall, so the lumen widens (vasodilation). The same volume of blood now flows through a larger space, lowering the pressure.',
        },
      },
    ],
  },

  // ── Q9 — Evaluate Medication for Hypertension (11 marks, Crit D) ─────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Evaluating Medication for Hypertension',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Circulation'],
    marks: 11,
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Level', 'Positive impacts of using medication', 'Negative impacts of using medication'],
        rows: [
          ['Individual lifestyle', 'Controls blood pressure; lowers risk of stroke/heart attack; easy daily routine', 'Side effects; ongoing cost; dependency; does not fix underlying lifestyle causes'],
          ['Wider society', 'Fewer strokes/heart attacks reduces hospital burden; people stay in work', 'Cost of prescriptions to health service; over-reliance instead of prevention'],
        ],
      },
      caption: 'A framework of impacts to weigh up before reaching a concluding appraisal on treating hypertension with medication.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** using medication to solve the problem of hypertension. In your answer, include: positive and negative impacts on an individual\'s lifestyle; positive and negative impacts on wider society; a concluding appraisal giving your opinion of how hypertension should be treated.',
        marks: 11,
        ph: 'Individual: positive (controls blood pressure, reduces stroke risk); negative (side effects, cost, dependency, lifestyle not addressed). Society: positive (reduces healthcare burden); negative (cost of prescriptions, over-reliance). Appraisal: medication useful but best combined with lifestyle changes — justify.',
      },
    ],
  },

  // ── Q10 — Melatonin, Cortisol and Sleep (8 marks, Crit D) ───────────────
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Melatonin, Cortisol and Sleep',
    topicCanonical: 'Receptors & Hormones',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Ethical Implications'],
    marks: 8,
    stem: 'Melatonin and cortisol are hormones released by the body to regulate the sleep-wake cycle. The graph shows hormone levels during the day and night for a stressed and non-stressed person.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Hormone levels over 24 hours',
        xLabel: 'Time of day / h (0 = midnight)',
        yLabel: 'Relative hormone level / arbitrary units',
        xAxis: { label: 'Time of day / h', min: 0, max: 24, tick: 4 },
        yAxis: { label: 'Relative hormone level', min: 0, max: 100, tick: 20 },
        options: [
          {
            label: 'Melatonin',
            color: 'blue',
            points: [[0, 80], [3, 90], [6, 40], [9, 10], [12, 5], [15, 8], [18, 20], [21, 55], [24, 80]],
          },
          {
            label: 'Cortisol — non-stressed person',
            color: 'green',
            points: [[0, 15], [3, 25], [6, 70], [9, 60], [12, 45], [15, 35], [18, 25], [21, 18], [24, 15]],
          },
          {
            label: 'Cortisol — stressed person',
            color: 'orange',
            points: [[0, 45], [3, 50], [6, 85], [9, 80], [12, 70], [15, 65], [18, 60], [21, 52], [24, 45]],
          },
        ],
        note: 'Melatonin rises at night to bring on sleep; cortisol peaks in the morning. A stressed person has higher cortisol all day, which suppresses melatonin.',
      },
      caption: 'Melatonin (blue) peaks at night; cortisol peaks in the morning. The stressed person (orange) keeps cortisol high, which lowers melatonin and makes sleep harder. Toggle each line to compare.',
    },
    tasks: [
      {
        label: 'a',
        text: 'People with sleeping problems due to stress sometimes take a melatonin pill. **Suggest** how this would help them to fall asleep.',
        marks: 2,
        ph: 'The pill increases melatonin levels; stress raises cortisol which lowers melatonin — the pill compensates by raising melatonin to the level needed to fall asleep.',
      },
      {
        label: 'b',
        text: '**Discuss and evaluate** the use of rats to test the long-term effects of melatonin on humans with sleep problems. In your answer, include: a benefit and a limitation of using rats; two ethical considerations; a concluding appraisal with justification.',
        marks: 6,
        ph: 'Benefit: rats are mammals similar to humans; easy to control external variables. Limitation: different physiology; side effects may not translate. Ethical: rats exposed to stress (harmful); cannot give consent; unknown side effects; bred for experiments. Appraisal: justified conclusion on whether using rats is appropriate.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Proposed study: testing melatonin on two groups of lab rats</text><g><rect x="170" y="40" width="260" height="34" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/><text x="300" y="62" font-size="11" text-anchor="middle" fill="#1e3a8a">Scientists induce stress in two groups of lab rats</text></g><line x1="300" y1="74" x2="300" y2="92" stroke="#475569" stroke-width="1.5"/><line x1="150" y1="92" x2="450" y2="92" stroke="#475569" stroke-width="1.5"/><line x1="150" y1="92" x2="150" y2="108" stroke="#475569" stroke-width="1.5"/><line x1="450" y1="92" x2="450" y2="108" stroke="#475569" stroke-width="1.5"/><g><rect x="60" y="108" width="180" height="34" rx="6" fill="#fecaca" stroke="#b91c1c" stroke-width="1.5"/><text x="150" y="130" font-size="10" text-anchor="middle" fill="#991b1b">Their cortisol levels rise</text><line x1="150" y1="142" x2="150" y2="160" stroke="#475569"/><rect x="60" y="160" width="180" height="34" rx="6" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/><text x="150" y="182" font-size="10" text-anchor="middle" fill="#92400e">One group is given melatonin</text><line x1="150" y1="194" x2="150" y2="212" stroke="#475569"/><rect x="60" y="212" width="180" height="34" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/><text x="150" y="234" font-size="10" text-anchor="middle" fill="#3730a3">Monitor sleep over several weeks</text><line x1="150" y1="246" x2="150" y2="264" stroke="#475569"/><rect x="60" y="264" width="180" height="34" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/><text x="150" y="286" font-size="10" text-anchor="middle" fill="#166534">Monitor health and side effects</text></g><g><rect x="360" y="108" width="180" height="34" rx="6" fill="#fecaca" stroke="#b91c1c" stroke-width="1.5"/><text x="450" y="130" font-size="10" text-anchor="middle" fill="#991b1b">Their cortisol levels rise</text><line x1="450" y1="142" x2="450" y2="160" stroke="#475569"/><rect x="360" y="160" width="180" height="34" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/><text x="450" y="182" font-size="10" text-anchor="middle" fill="#334155">Control group (no melatonin)</text><line x1="450" y1="194" x2="450" y2="212" stroke="#475569"/><rect x="360" y="212" width="180" height="34" rx="6" fill="#e0e7ff" stroke="#4338ca" stroke-width="1.5"/><text x="450" y="234" font-size="10" text-anchor="middle" fill="#3730a3">Monitor sleep over several weeks</text><line x1="450" y1="246" x2="450" y2="264" stroke="#475569"/><rect x="360" y="264" width="180" height="34" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/><text x="450" y="286" font-size="10" text-anchor="middle" fill="#166534">Monitor health and side effects</text></g></svg>',
          },
          caption: 'The proposed animal study: rats are deliberately stressed, one group is given melatonin and a control group is not, then sleep, health and side effects are monitored for weeks.',
        },
      },
    ],
  },
]
