import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2021 · VARIANT 2  (isomorphic to biology-may-2021)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags, widgets) in a NEW biological context, with self-contained
// data-driven artefacts (no figImages). All answers recomputed. v2 ≠ v1 ≠ source.
//   Q1 Cells & Genetics:  dimples Dd×dd  → widow's peak Ww×ww
//   Q2 Food web:          forest (fox/deer) → wetland (river otter/muskrat)
//   Q3 Crit C data:       aquatic plants vs prey → coral-reef shelters vs juvenile fish
//   Q4 Photosynthesis B:  Cabomba + light distance → pondweed + light distance (new plant)
//   Q5 Crit C temperature: Cabomba temp → duckweed temp (new data, same shape)
//   Q6 Crit B design:     Cabomba stem length → CO₂ (sodium hydrogencarbonate) concentration
//   Q7 Enzymes:           rubisco → amylase (breaks down starch)
//   Q8 Circulation:       stress/hypertension arteries → keep, exercise & vasodilation
//   Q9 Crit D essay:      hypertension medication → high blood-cholesterol (statin) medication
//   Q10 Hormones/ethics:  melatonin/cortisol + rats → thyroxine (metabolism) + rabbits
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2021-v2',
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
        svg: '<svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="plant2" cx="0.45" cy="0.4"><stop offset="0" stop-color="#eaf7ef"/><stop offset="1" stop-color="#cdeede"/></radialGradient></defs><rect width="620" height="260" fill="#ffffff"/><text x="160" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f3d2a">Plant cell</text><rect x="80" y="55" width="160" height="160" rx="6" fill="url(#plant2)" stroke="#2f9e44" stroke-width="4"/><rect x="92" y="67" width="136" height="136" rx="4" fill="#eefaf2" stroke="#37b24d" stroke-width="1.5"/><circle cx="160" cy="135" r="30" fill="#a7d8b6" stroke="#0b7285" stroke-width="2"/><text x="160" y="139" font-size="10" text-anchor="middle" fill="#0b7285">nucleus</text><ellipse cx="120" cy="95" rx="20" ry="10" fill="#2f9e44" stroke="#1f7a33"/><text x="120" y="98" font-size="8" text-anchor="middle" fill="#fff">chloroplast</text><text x="160" y="46" font-size="9" text-anchor="middle" fill="#1f7a33">cell wall (outer)</text><text x="430" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f3d2a">Bacteria cell</text><rect x="350" y="95" width="160" height="80" rx="40" fill="#fdeccb" stroke="#f08c00" stroke-width="3"/><rect x="358" y="103" width="144" height="64" rx="32" fill="#fff6e6" stroke="#37b24d" stroke-width="1.5"/><path d="M380,135 q20,-18 40,0 q20,18 40,0" fill="none" stroke="#0b7285" stroke-width="2"/><text x="430" y="155" font-size="9" text-anchor="middle" fill="#0b7285">circular DNA</text><text x="430" y="190" font-size="9" text-anchor="middle" fill="#b56a00">cell wall (outer)</text></svg>',
      },
      caption: 'A 3D-modelled plant cell (left) and a bacteria cell (right). Compare which features are present in each.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** whether each feature is found in bacteria cells, plant cells, or both by selecting the correct option from the dropdown.',
        marks: 2,
        ph: 'Chloroplast → Plant cells; Cell wall → Both; Nucleus → Plant cells; Cytoplasm → Both.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Chloroplast', 'Cell wall', 'Nucleus', 'Cytoplasm'],
        widgetOptions: ['Bacteria cells', 'Plant cells', 'Both'],
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
            svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="helix2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0b7285"/><stop offset="1" stop-color="#2f9e44"/></linearGradient></defs><rect width="560" height="260" fill="#ffffff"/><ellipse cx="90" cy="130" rx="64" ry="80" fill="#dff0e6" stroke="#2f9e44" stroke-width="2"/><text x="90" y="222" font-size="11" text-anchor="middle" fill="#1f3d2a">Position 1</text><path d="M70,90 q14,16 -2,32 q-16,16 2,32 q14,16 -2,32" fill="none" stroke="#0b7285" stroke-width="6" stroke-linecap="round"/><path d="M104,90 q-14,16 2,32 q16,16 -2,32 q-14,16 2,32" fill="none" stroke="#1971c2" stroke-width="6" stroke-linecap="round"/><line x1="200" y1="130" x2="250" y2="130" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="4 3"/><text x="225" y="120" font-size="10" text-anchor="middle" fill="#94a3ad">zoom</text><rect x="262" y="96" width="40" height="68" rx="10" fill="#9c36b5" stroke="#6b2480"/><text x="282" y="186" font-size="11" text-anchor="middle" fill="#1f3d2a">Position 2</text><path d="M330,100 q14,16 -2,30 q-16,16 2,30" fill="none" stroke="url(#helix2)" stroke-width="5"/><path d="M360,100 q-14,16 2,30 q16,16 -2,30" fill="none" stroke="url(#helix2)" stroke-width="5"/><text x="346" y="186" font-size="11" text-anchor="middle" fill="#1f3d2a">Position 3</text><rect x="398" y="108" width="46" height="22" rx="5" fill="#f08c00" stroke="#b56a00"/><text x="421" y="186" font-size="11" text-anchor="middle" fill="#1f3d2a">Position 4</text><circle cx="498" cy="120" r="12" fill="#c2255c" stroke="#8a1840"/><rect x="486" y="132" width="24" height="9" rx="3" fill="#37b24d"/><text x="498" y="186" font-size="11" text-anchor="middle" fill="#1f3d2a">Position 5</text></svg>',
          },
          caption: 'From whole structure (Position 1) down to a single sub-unit (Position 5).',
        },
        widget: 'match_drag_drop',
        widgetItems: ['Chromosome', 'DNA', 'Gene', 'Nucleus', 'Nucleotide'],
        widgetOptions: ['Position 1', 'Position 2', 'Position 3', 'Position 4', 'Position 5'],
      },
      {
        label: 'd',
        text: 'The father has a widow\'s peak hairline and his genotype is Ww. The mother has a straight hairline (no widow\'s peak). **State** the genotype of the mother.',
        marks: 1,
        ph: 'ww (straight hairline = homozygous recessive).',
      },
      {
        label: 'e',
        text: '**Complete** the Punnett square using the father\'s alleles (W, w) and mother\'s alleles (w, w), then **determine** the probability that a child would have a widow\'s peak.',
        marks: 2,
        ph: 'Punnett square: Ww, Ww, ww, ww. Probability of widow\'s peak = 50% (2/4).',
        widget: 'fill_blank',
        widgetOptions: ['Ww', 'ww'],
      },
      {
        label: 'f',
        text: '**Explain** why variation within a species is important for its survival.',
        marks: 5,
        ph: 'Variation → selection pressure → favourable individuals survive → reproduce → pass on heritable traits → species better adapted over generations.',
      },
    ],
  },

  // ── Q2 — Wetland Food Web (8 marks, Crit A) ─────────────────────────────
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
        title: 'Wetland food web',
        nodes: [
          { id: 'reeds', label: 'Reeds & algae', color: '#2f9e44', detail: 'Producer — makes food by photosynthesis.' },
          { id: 'muskrat', label: 'Muskrat', color: '#37b24d', detail: 'Primary consumer — feeds on reeds and aquatic plants.' },
          { id: 'snail', label: 'Pond snail', color: '#0ca678', detail: 'Primary consumer — grazes on algae.' },
          { id: 'frog', label: 'Frog', color: '#0b7285', detail: 'Secondary consumer — eats insects and snails.' },
          { id: 'otter', label: 'River otter', color: '#e8590c', detail: 'Omnivore — eats muskrats, frogs and some plant roots.' },
          { id: 'heron', label: 'Heron', color: '#9c36b5', detail: 'Secondary consumer — preys on frogs and muskrats.' },
        ],
        edges: [
          { from: 'reeds', to: 'muskrat' },
          { from: 'reeds', to: 'snail' },
          { from: 'snail', to: 'frog' },
          { from: 'muskrat', to: 'otter' },
          { from: 'frog', to: 'otter' },
          { from: 'muskrat', to: 'heron' },
        ],
      },
      caption: 'Arrows point in the direction energy flows (from the food to the feeder).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the food web to **identify** one producer, one omnivore, and one primary consumer.',
        marks: 3,
        ph: 'Producer: reeds & algae. Omnivore: river otter. Primary consumer: muskrat or pond snail.',
      },
      {
        label: 'b',
        text: 'A drainage scheme is planned to dry out part of the wetland for farmland. **Outline** how this could affect the river otter population.',
        marks: 2,
        ph: 'Habitat destroyed/drained → less water/prey → otter population decreases. OR alternative food nearby → otter population increases.',
      },
      {
        label: 'c',
        text: 'Using your answer to (b), **describe** how the muskrat population might be affected.',
        marks: 3,
        ph: 'If otter population decreases → fewer muskrats eaten → muskrat population increases. OR if otters move away and herons remain, predation continues. Build a logical chain.',
      },
    ],
  },

  // ── Q3 — Coral-Reef Shelters and Juvenile Fish (5 marks, Crit C) ────────
  {
    id: 3,
    crit: 'C',
    type: 'extended',
    topic: 'Coral-Reef Shelters and Juvenile Fish',
    topicCanonical: 'Predator/Prey',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 5,
    stem: 'A marine biologist investigated how different reef structures affect the survival rate of juvenile fish from predators. The bar graph shows the percentage of juvenile fish surviving in tanks with different reef structures.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Juvenile-fish survival by reef structure',
        xLabel: 'Reef structure',
        yLabel: 'Fish surviving',
        yUnit: '%',
        dataPoints: [
          { x: 1, y: 18 },
          { x: 2, y: 74 },
          { x: 3, y: 68 },
          { x: 4, y: 52 },
          { x: 5, y: 44 },
        ],
        xMin: 0,
        xMax: 6,
        yMin: 0,
        yMax: 100,
        xStep: 1,
        yStep: 20,
      },
      caption: 'x = 1 Bare sand (control); 2 Branching coral (native); 3 Staghorn coral (native); 4 Concrete block (artificial); 5 Plastic mesh (artificial).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** which reef structure provided the highest juvenile-fish survival rate.',
        marks: 1,
        ph: 'Branching coral (Structure 2) (accept Staghorn coral / Structure 3).',
      },
      {
        label: 'b',
        text: '**Suggest** one reason why that structure gave the highest survival rate.',
        marks: 1,
        ph: 'Branching coral is a native structure; provides more hiding spaces / complex branches / better shelter and camouflage for juvenile fish.',
      },
      {
        label: 'c',
        text: '**Compare and contrast** the results for native coral structures with the results for artificial structures.',
        marks: 2,
        ph: 'Both provide better survival than bare sand (similarity). Native coral gives higher survival rates than artificial structures; greater range between native results (difference).',
      },
      {
        label: 'd',
        text: '**State** why a "bare sand" condition was also tested in this investigation.',
        marks: 1,
        ph: 'To show the effect of the reef structure on results; it is the control condition.',
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
    stem: 'A student placed a sprig of curly pondweed (Lagarosiphon) in a beaker of water and moved a lamp to different distances. They counted the number of gas bubbles produced by the plant.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="beak4v2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4eef9"/><stop offset="1" stop-color="#9bd2ec"/></linearGradient><radialGradient id="bulb4v2" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff7c2"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="600" height="300" fill="#ffffff"/><circle cx="120" cy="120" r="26" fill="url(#bulb4v2)" stroke="#c79a10"/><rect x="108" y="146" width="24" height="40" fill="#777"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="150" y1="110" x2="300" y2="120"/><line x1="150" y1="120" x2="300" y2="130"/><line x1="150" y1="130" x2="300" y2="140"/></g><text x="120" y="206" font-size="11" text-anchor="middle" fill="#9a7d0f">lamp</text><line x1="150" y1="240" x2="430" y2="240" stroke="#94a3ad" stroke-width="1"/><line x1="150" y1="240" x2="150" y2="232" stroke="#94a3ad"/><line x1="430" y1="240" x2="430" y2="232" stroke="#94a3ad"/><text x="290" y="258" font-size="11" text-anchor="middle" fill="#5b6b78">distance (varied)</text><path d="M360,120 h120 v150 h-120 z" fill="url(#beak4v2)" stroke="#3f7e98" stroke-width="2"/><path d="M360,120 h120" fill="none" stroke="#3f7e98" stroke-width="2"/><g stroke="#2f9e44" stroke-width="4" stroke-linecap="round" fill="none"><path d="M420,265 q-10,-28 2,-54 q12,-20 -4,-42"/><path d="M420,252 q16,-6 26,-18"/><path d="M420,222 q-18,-4 -28,-16"/></g><g fill="#bfe3f2" stroke="#7fc4e0"><circle cx="432" cy="150" r="4"/><circle cx="424" cy="168" r="3"/><circle cx="438" cy="182" r="3.5"/><circle cx="430" cy="200" r="3"/></g><text x="420" y="288" font-size="11" text-anchor="middle" fill="#1f3d2a">pondweed sprig</text><text x="470" y="150" font-size="10" fill="#0b7285">O₂ bubbles</text></svg>',
      },
      caption: 'A pondweed sprig in water with a lamp at a measured distance. Gas bubbles are counted per minute.',
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
        ph: 'IV: distance of lamp from plant. DV: number of bubbles / volume of gas produced. CV1: temperature of water. CV2: same plant / same lamp / same CO₂ concentration.',
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

  // ── Q5 — Temperature Investigation (15 marks, Crit C) ───────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Photosynthesis Investigation — Temperature',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 15,
    stem: 'A student investigated the effect of temperature on the rate of photosynthesis in duckweed. The method involved 6 steps: placing the plants in a beaker, adding a funnel, measuring gas with a measuring cylinder, placing the beaker in a ___ to keep temperature constant, counting bubbles for 5 minutes, and repeating 4 trials at each of 5 different temperatures.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Temperature / °C', 'Trial 1', 'Trial 2', 'Trial 3', 'Trial 4', 'Average'],
        rows: [
          ['10', '5', '7', '5', '7', '?'],
          ['20', '11', '12', '10', '11', '11'],
          ['30', '15', '13', '21', '15', '?'],
          ['40', '8', '7', '9', '8', '8'],
          ['50', '3', '4', '3', '2', '3'],
        ],
      },
      caption: 'Number of gas bubbles produced in 5 minutes by duckweed at each temperature.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the piece of equipment missing from step 4 to keep the temperature constant.',
        marks: 1,
        ph: 'Temperature-controlled water bath (accept: thermometer).',
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
        ph: 'Average at 10°C = 6 (5+7+5+7=24÷4). Average at 30°C = 16 (15+13+21+15=64÷4). Improvements: consistent significant figures; correct column headings; plot results as a line/scatter graph.',
      },
      {
        label: 'f',
        text: '**Identify** the data point in the table that appears to be an outlier.',
        marks: 1,
        ph: 'Trial 3 at 30°C (value of 21, much higher than other 30°C values of 15, 13, 15).',
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
        ph: 'Partially valid: rate increases up to optimum (supported). Above 30°C, enzyme denatures — active site changes shape, substrate cannot fit, photosynthesis slows.',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Rate of photosynthesis vs temperature',
            xLabel: 'Temperature',
            yLabel: 'Average bubbles per 5 min',
            xUnit: '°C',
            dataPoints: [
              { x: 10, y: 6 },
              { x: 20, y: 11 },
              { x: 30, y: 16 },
              { x: 40, y: 8 },
              { x: 50, y: 3 },
            ],
            xMin: 0,
            xMax: 60,
            yMin: 0,
            yMax: 18,
            xStep: 10,
            yStep: 2,
          },
          caption: 'Average gas bubbles produced by duckweed against temperature (peak near 30 °C).',
        },
      },
    ],
  },

  // ── Q6 — Design Investigation: CO₂ Concentration (15 marks, Crit B) ─────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Design Investigation — CO₂ Concentration',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 15,
    stem: 'A student wants to find out whether the concentration of carbon dioxide (added as sodium hydrogencarbonate dissolved in the water) affects how quickly pondweed photosynthesises.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="beak6v2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4eef9"/><stop offset="1" stop-color="#9bd2ec"/></linearGradient></defs><rect width="600" height="260" fill="#ffffff"/><text x="300" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f3d2a">Same lamp, same temperature — vary CO₂ (NaHCO₃) concentration</text><g><path d="M70,210 h110 v-110 h-110 z" fill="url(#beak6v2)" stroke="#3f7e98" stroke-width="2"/><line x1="125" y1="200" x2="125" y2="120" stroke="#2f9e44" stroke-width="4"/><g fill="#bfe3f2" stroke="#7fc4e0"><circle cx="118" cy="150" r="2"/></g><text x="125" y="232" font-size="11" text-anchor="middle" fill="#1f3d2a">0.1%</text></g><g><path d="M245,210 h110 v-110 h-110 z" fill="url(#beak6v2)" stroke="#3f7e98" stroke-width="2"/><line x1="300" y1="200" x2="300" y2="120" stroke="#2f9e44" stroke-width="4"/><g fill="#bfe3f2" stroke="#7fc4e0"><circle cx="292" cy="145" r="2.5"/><circle cx="308" cy="158" r="2.5"/><circle cx="296" cy="172" r="2"/></g><text x="300" y="232" font-size="11" text-anchor="middle" fill="#1f3d2a">0.5%</text></g><g><path d="M420,210 h110 v-110 h-110 z" fill="url(#beak6v2)" stroke="#3f7e98" stroke-width="2"/><line x1="475" y1="200" x2="475" y2="120" stroke="#2f9e44" stroke-width="4"/><g fill="#bfe3f2" stroke="#7fc4e0"><circle cx="467" cy="140" r="3"/><circle cx="485" cy="150" r="3"/><circle cx="465" cy="162" r="2.5"/><circle cx="487" cy="174" r="3"/><circle cx="473" cy="186" r="2.5"/></g><text x="475" y="232" font-size="11" text-anchor="middle" fill="#1f3d2a">1.0%</text></g></svg>',
      },
      caption: 'Identical beakers, lamp and temperature; only the dissolved CO₂ (sodium hydrogencarbonate) concentration changes.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to test how changing the concentration of carbon dioxide (sodium hydrogencarbonate) in the water affects the rate of photosynthesis in pondweed. Include: IV, DV, two control variables; a testable hypothesis; equipment; a method with at least 5 steps sufficient to collect data for at least 5 different CO₂ concentrations with 3 repeats.',
        marks: 15,
        ph: 'IV = CO₂ (sodium hydrogencarbonate) concentration; DV = volume of gas / number of bubbles; CVs = light intensity, temperature, same plant. Hypothesis: more CO₂ → more raw material → higher rate (until another factor becomes limiting). Equipment: measuring cylinder, lamp, water bath, balance to weigh NaHCO₃. Method: set up plant, set CO₂ concentration, count bubbles for fixed time, repeat 3× per concentration, test 5 concentrations.',
      },
    ],
  },

  // ── Q7 — Enzyme Action (7 marks, Crit A) ────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Enzyme Action',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    topicsAlso: ['Photosynthesis'],
    marks: 7,
    stem: 'The enzyme amylase breaks down starch into smaller sugar (maltose) molecules during digestion. Enzymes are affected by different factors, including temperature and concentration of substrate.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="arr7v2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#444"/></marker></defs><rect width="600" height="240" fill="#ffffff"/><path d="M70,120 q0,-44 40,-44 l28,0 q-10,22 0,44 q-10,22 0,44 l-28,0 q-40,0 -40,-44 z" fill="#0b7285" stroke="#08515e" stroke-width="2"/><text x="96" y="200" font-size="11" text-anchor="middle" fill="#08515e">Shape 2 (enzyme)</text><g fill="#f08c00" stroke="#b56a00"><circle cx="142" cy="92" r="11"/><circle cx="158" cy="104" r="11"/><circle cx="142" cy="116" r="11"/><circle cx="158" cy="128" r="11"/></g><text x="150" y="70" font-size="11" text-anchor="middle" fill="#b56a00">Shape 1</text><line x1="200" y1="115" x2="270" y2="115" stroke="#444" stroke-width="2" marker-end="url(#arr7v2)"/><path d="M300,120 q0,-44 40,-44 l28,0 q-10,22 0,44 q-10,22 0,44 l-28,0 q-40,0 -40,-44 z" fill="#0b7285" stroke="#08515e" stroke-width="2"/><text x="326" y="200" font-size="11" text-anchor="middle" fill="#08515e">Shape 3 (after arrow)</text><line x1="420" y1="115" x2="470" y2="115" stroke="#444" stroke-width="2" marker-end="url(#arr7v2)"/><g fill="#f08c00" stroke="#b56a00"><circle cx="505" cy="100" r="9"/><circle cx="525" cy="132" r="9"/></g><text x="514" y="70" font-size="11" text-anchor="middle" fill="#b56a00">Shape 4</text></svg>',
      },
      caption: 'An enzyme-catalysed reaction: the substrate binds, the reaction occurs, and the products are released; the enzyme is unchanged.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagram above illustrates an enzyme-catalysed reaction. **Identify** the enzyme, the substrate, and the product from the dropdown.',
        marks: 2,
        ph: 'Shape 1 (large, four-unit chain) = Substrate; Shape 2 = Enzyme; Shape 3 (after arrow) = Enzyme; Shape 4 (small) = Product.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Shape 1 (large starch chain)', 'Shape 2 (enzyme shape)', 'Shape 3 (after arrow)', 'Shape 4 (small molecule)'],
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
            title: 'Rate of amylase reaction vs substrate concentration',
            xLabel: 'Substrate (starch) concentration',
            yLabel: 'Rate of reaction',
            dataPoints: [
              { x: 0, y: 0 },
              { x: 1, y: 14 },
              { x: 2, y: 26 },
              { x: 3, y: 35 },
              { x: 4, y: 42 },
              { x: 5, y: 45 },
              { x: 6, y: 46 },
              { x: 7, y: 46 },
              { x: 8, y: 46 },
            ],
            xMin: 0,
            xMax: 8,
            yMin: 0,
            yMax: 50,
            xStep: 1,
            yStep: 10,
          },
          caption: 'A is near the origin (low substrate), B is where the curve begins to level, C is on the plateau.',
        },
      },
      {
        label: 'c',
        text: 'More enzyme is added at point C. **Identify** which graph (A–D) correctly shows the effect on the rate of reaction.',
        marks: 1,
        ph: 'Graph D (rate rises above the plateau, then levels off at a new higher rate).',
        widget: 'radio_select',
        widgetOptions: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
      },
    ],
  },

  // ── Q8 — Stress, Arteries, and Hypertension (9 marks, Crit A) ───────────
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
        svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="260" fill="#ffffff"/><text x="150" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Artery</text><circle cx="150" cy="135" r="80" fill="#f3c0c0" stroke="#c0392b" stroke-width="14"/><circle cx="150" cy="135" r="34" fill="#ffffff" stroke="#c0392b" stroke-width="1.5"/><text x="150" y="139" font-size="11" text-anchor="middle" fill="#c0392b">lumen</text><line x1="150" y1="55" x2="150" y2="21" stroke="#7a1f1f" stroke-width="1"/><text x="150" y="248" font-size="11" text-anchor="middle" fill="#7a1f1f">thick, muscular, elastic wall</text><text x="410" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Vein</text><circle cx="410" cy="135" r="80" fill="#cfe0f0" stroke="#2c6fa6" stroke-width="5"/><circle cx="410" cy="135" r="58" fill="#ffffff" stroke="#2c6fa6" stroke-width="1.5"/><text x="410" y="139" font-size="11" text-anchor="middle" fill="#2c6fa6">large lumen</text><text x="410" y="248" font-size="11" text-anchor="middle" fill="#1f4a6b">thin wall</text></svg>',
      },
      caption: 'Cross-sections of an artery (thick muscular wall, narrow lumen) and a vein (thin wall, wide lumen).',
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
        text: 'Using information about how blood-pressure medication works, **explain** how hypertension medication lowers blood pressure.',
        marks: 3,
        ph: 'Medication causes blood vessels to relax/stop contracting; lumen increases in diameter (vasodilation); same volume of blood flows through a larger space, reducing pressure.',
      },
    ],
  },

  // ── Q9 — Evaluate Medication for High Cholesterol (11 marks, Crit D) ────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Evaluating Medication for High Cholesterol',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Circulation'],
    marks: 11,
    stem: 'High blood cholesterol can lead to fatty deposits building up in artery walls, increasing the risk of heart disease. It can be treated with medication such as statins, which lower the level of cholesterol in the blood.',
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** using medication (statins) to solve the problem of high blood cholesterol. In your answer, include: positive and negative impacts on an individual\'s lifestyle; positive and negative impacts on wider society; a concluding appraisal giving your opinion of how high cholesterol should be treated.',
        marks: 11,
        ph: 'Individual: positive (lowers cholesterol, reduces risk of heart attack/stroke); negative (side effects e.g. muscle pain, cost, dependency, diet not addressed). Society: positive (reduces healthcare burden); negative (cost of prescriptions, over-reliance). Appraisal: medication useful but best combined with diet and lifestyle changes — justify.',
      },
    ],
  },

  // ── Q10 — Thyroxine and Metabolism (8 marks, Crit D) ────────────────────
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Thyroxine and Metabolism',
    topicCanonical: 'Receptors & Hormones',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Ethical Implications'],
    marks: 8,
    stem: 'Thyroxine is a hormone released by the thyroid gland that controls the body\'s metabolic rate. The graph shows the metabolic rate over a day for a person with a healthy thyroid and a person with an underactive thyroid.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Metabolic rate over a day',
        xLabel: 'Time of day',
        yLabel: 'Metabolic rate',
        xUnit: 'h',
        yUnit: '%',
        dataPoints: [
          { x: 0, y: 70 },
          { x: 6, y: 85 },
          { x: 12, y: 95 },
          { x: 18, y: 88 },
          { x: 24, y: 72 },
        ],
        lobf: false,
        xMin: 0,
        xMax: 24,
        yMin: 0,
        yMax: 110,
        xStep: 6,
        yStep: 20,
      },
      caption: 'In a person with a healthy thyroid, metabolic rate rises during active daytime hours and falls overnight.',
    },
    tasks: [
      {
        label: 'a',
        text: 'People with an underactive thyroid sometimes take a thyroxine pill. **Suggest** how this would help to raise their metabolic rate.',
        marks: 2,
        ph: 'The pill increases thyroxine levels; thyroxine speeds up the rate of chemical reactions (metabolism) in body cells, raising the metabolic rate toward a healthy level.',
      },
      {
        label: 'b',
        text: '**Discuss and evaluate** the use of rabbits to test the long-term effects of a new thyroxine treatment on humans with thyroid problems. In your answer, include: a benefit and a limitation of using rabbits; two ethical considerations; a concluding appraisal with justification.',
        marks: 6,
        ph: 'Benefit: rabbits are mammals similar to humans; easy to control external variables. Limitation: different physiology; side effects may not translate. Ethical: rabbits exposed to disease/treatment (harmful); cannot give consent; unknown side effects; bred for experiments. Appraisal: justified conclusion on whether using rabbits is appropriate.',
      },
    ],
  },
]
