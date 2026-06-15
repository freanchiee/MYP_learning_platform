import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — May 2021 · VARIANT 1  (isomorphic to biology-may-2021)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags, widgets) in a NEW biological context, with self-contained
// data-driven artefacts (no figImages). All answers recomputed.
//   Q1 Cells & Genetics:  dimples Dd×dd  → tongue-rolling Rr×rr
//   Q2 Food web:          forest (fox/deer) → grassland (coyote/pronghorn)
//   Q3 Crit C data:       aquatic plants vs prey → hedgerow density vs nesting birds
//   Q4 Photosynthesis B:  Cabomba + light distance → Elodea + light distance
//   Q5 Crit C temperature: Cabomba temp → Elodea temp (new data, same shape)
//   Q6 Crit B design:     Cabomba stem length → Elodea leaf number
//   Q7 Enzymes:           rubisco → catalase (hydrogen peroxide)
//   Q8 Circulation:       stress/hypertension arteries → keep, exercise & vasodilation
//   Q9 Crit D essay:      hypertension medication → type-2 diabetes medication
//   Q10 Hormones/ethics:  melatonin/cortisol + rats → insulin/glucagon + mice
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2021-v1',
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
        svg: '<svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="cellbg" cx="0.45" cy="0.4"><stop offset="0" stop-color="#eaf7ef"/><stop offset="1" stop-color="#cfeede"/></radialGradient></defs><rect width="620" height="260" fill="#ffffff"/><text x="160" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f3d2a">Animal cell</text><circle cx="160" cy="135" r="92" fill="url(#cellbg)" stroke="#2f9e44" stroke-width="2"/><circle cx="160" cy="135" r="34" fill="#a7d8b6" stroke="#0b7285" stroke-width="2"/><text x="160" y="139" font-size="11" text-anchor="middle" fill="#0b7285">nucleus</text><ellipse cx="110" cy="90" rx="22" ry="11" fill="#f08c00" stroke="#b56a00"/><text x="110" y="93" font-size="8" text-anchor="middle" fill="#fff">mitochondrion</text><circle cx="160" cy="58" r="3" fill="#37b24d"/><text x="160" y="48" font-size="9" text-anchor="middle" fill="#1f3d2a">cell membrane</text><text x="430" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f3d2a">Bacteria cell</text><rect x="350" y="95" width="160" height="80" rx="40" fill="#fdeccb" stroke="#f08c00" stroke-width="3"/><rect x="358" y="103" width="144" height="64" rx="32" fill="#fff6e6" stroke="#37b24d" stroke-width="1.5"/><path d="M380,135 q20,-18 40,0 q20,18 40,0" fill="none" stroke="#0b7285" stroke-width="2"/><text x="430" y="155" font-size="9" text-anchor="middle" fill="#0b7285">circular DNA</text><text x="430" y="190" font-size="9" text-anchor="middle" fill="#b56a00">cell wall (outer)</text></svg>',
      },
      caption: 'A 3D-modelled animal cell (left) and a bacteria cell (right). Compare which features are present in each.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** whether each feature is found in bacteria cells, animal cells, or both by selecting the correct option from the dropdown.',
        marks: 2,
        ph: 'Mitochondria → Animal cells; Cell wall → Bacteria cells; Cell membrane → Both; Ribosomes → Both.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Mitochondria', 'Cell wall', 'Cell membrane', 'Ribosomes'],
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
            svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="helix1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0b7285"/><stop offset="1" stop-color="#2f9e44"/></linearGradient></defs><rect width="560" height="260" fill="#ffffff"/><ellipse cx="90" cy="130" rx="64" ry="80" fill="#dff0e6" stroke="#2f9e44" stroke-width="2"/><text x="90" y="222" font-size="11" text-anchor="middle" fill="#1f3d2a">Position 1</text><path d="M70,90 q14,16 -2,32 q-16,16 2,32 q14,16 -2,32" fill="none" stroke="#0b7285" stroke-width="6" stroke-linecap="round"/><path d="M104,90 q-14,16 2,32 q16,16 -2,32 q-14,16 2,32" fill="none" stroke="#1971c2" stroke-width="6" stroke-linecap="round"/><line x1="200" y1="130" x2="250" y2="130" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="4 3"/><text x="225" y="120" font-size="10" text-anchor="middle" fill="#94a3ad">zoom</text><rect x="262" y="96" width="40" height="68" rx="10" fill="#9c36b5" stroke="#6b2480"/><text x="282" y="186" font-size="11" text-anchor="middle" fill="#1f3d2a">Position 2</text><path d="M330,100 q14,16 -2,30 q-16,16 2,30" fill="none" stroke="url(#helix1)" stroke-width="5"/><path d="M360,100 q-14,16 2,30 q16,16 -2,30" fill="none" stroke="url(#helix1)" stroke-width="5"/><text x="346" y="186" font-size="11" text-anchor="middle" fill="#1f3d2a">Position 3</text><rect x="398" y="108" width="46" height="22" rx="5" fill="#f08c00" stroke="#b56a00"/><text x="421" y="186" font-size="11" text-anchor="middle" fill="#1f3d2a">Position 4</text><circle cx="498" cy="120" r="12" fill="#c2255c" stroke="#8a1840"/><rect x="486" y="132" width="24" height="9" rx="3" fill="#37b24d"/><text x="498" y="186" font-size="11" text-anchor="middle" fill="#1f3d2a">Position 5</text></svg>',
          },
          caption: 'From whole structure (Position 1) down to a single sub-unit (Position 5).',
        },
        widget: 'match_drag_drop',
        widgetItems: ['Chromosome', 'DNA', 'Gene', 'Nucleus', 'Nucleotide'],
        widgetOptions: ['Position 1', 'Position 2', 'Position 3', 'Position 4', 'Position 5'],
      },
      {
        label: 'd',
        text: 'The father can roll his tongue and his genotype is Rr. The mother cannot roll her tongue. **State** the genotype of the mother.',
        marks: 1,
        ph: 'rr (cannot roll tongue = homozygous recessive).',
      },
      {
        label: 'e',
        text: '**Complete** the Punnett square using the father\'s alleles (R, r) and mother\'s alleles (r, r), then **determine** the probability that a child would be able to roll their tongue.',
        marks: 2,
        ph: 'Punnett square: Rr, Rr, rr, rr. Probability of tongue-rolling = 50% (2/4).',
        widget: 'fill_blank',
        widgetOptions: ['Rr', 'rr'],
      },
      {
        label: 'f',
        text: '**Explain** why variation within a species is important for its survival.',
        marks: 5,
        ph: 'Variation → selection pressure → favourable individuals survive → reproduce → pass on heritable traits → species better adapted over generations.',
      },
    ],
  },

  // ── Q2 — Grassland Food Web (8 marks, Crit A) ───────────────────────────
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
        title: 'Grassland food web',
        nodes: [
          { id: 'grass', label: 'Prairie grasses', color: '#2f9e44', detail: 'Producer — makes food by photosynthesis.' },
          { id: 'pronghorn', label: 'Pronghorn', color: '#37b24d', detail: 'Primary consumer — grazes on grasses.' },
          { id: 'grasshopper', label: 'Grasshopper', color: '#0ca678', detail: 'Primary consumer — eats grasses.' },
          { id: 'prairiedog', label: 'Prairie dog', color: '#0b7285', detail: 'Primary consumer — eats grasses and seeds.' },
          { id: 'coyote', label: 'Coyote', color: '#e8590c', detail: 'Omnivore — eats prairie dogs, grasshoppers and some berries.' },
          { id: 'hawk', label: 'Hawk', color: '#9c36b5', detail: 'Secondary consumer — preys on prairie dogs.' },
        ],
        edges: [
          { from: 'grass', to: 'pronghorn' },
          { from: 'grass', to: 'grasshopper' },
          { from: 'grass', to: 'prairiedog' },
          { from: 'prairiedog', to: 'coyote' },
          { from: 'grasshopper', to: 'coyote' },
          { from: 'prairiedog', to: 'hawk' },
        ],
      },
      caption: 'Arrows point in the direction energy flows (from the food to the feeder).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the food web to **identify** one producer, one omnivore, and one primary consumer.',
        marks: 3,
        ph: 'Producer: prairie grasses. Omnivore: coyote. Primary consumer: pronghorn, grasshopper, or prairie dog.',
      },
      {
        label: 'b',
        text: 'A new highway is planned across part of the grassland. **Outline** how this could affect the coyote population.',
        marks: 2,
        ph: 'Habitat destroyed → less territory/prey → coyote population decreases. OR alternative food (roadkill/rubbish) → coyote population increases.',
      },
      {
        label: 'c',
        text: 'Using your answer to (b), **describe** how the pronghorn population might be affected.',
        marks: 3,
        ph: 'If coyote population decreases → fewer prairie dogs eaten → prairie dog population increases → more competition for grasses with pronghorn → pronghorn may decrease. OR coyotes eat fewer pronghorn fawns → pronghorn population increases.',
      },
    ],
  },

  // ── Q3 — Hedgerow Density and Nesting Birds (5 marks, Crit C) ───────────
  {
    id: 3,
    crit: 'C',
    type: 'extended',
    topic: 'Hedgerow Density and Nesting Birds',
    topicCanonical: 'Predator/Prey',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 5,
    stem: 'A student investigated how different hedgerow plant types affect the survival rate of nesting songbirds against predators. The bar graph shows the percentage of nests that successfully fledged chicks in plots with different hedge types.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Nest survival by hedge type',
        xLabel: 'Hedge type',
        yLabel: 'Nests fledged',
        yUnit: '%',
        dataPoints: [
          { x: 1, y: 22 },
          { x: 2, y: 71 },
          { x: 3, y: 66 },
          { x: 4, y: 48 },
          { x: 5, y: 41 },
        ],
        xMin: 0,
        xMax: 6,
        yMin: 0,
        yMax: 100,
        xStep: 1,
        yStep: 20,
      },
      caption: 'x = 1 No hedge (control); 2 Hawthorn (native); 3 Blackthorn (native); 4 Privet (non-native); 5 Cherry laurel (non-native).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** which hedge type provided the highest nest survival rate.',
        marks: 1,
        ph: 'Hawthorn (Hedge 2) (accept Blackthorn / Hedge 3).',
      },
      {
        label: 'b',
        text: '**Suggest** one reason why that hedge gave the highest survival rate.',
        marks: 1,
        ph: 'Hawthorn is a native plant; provides denser thorny cover / more nesting sites / better camouflage and protection from predators.',
      },
      {
        label: 'c',
        text: '**Compare and contrast** the results for native hedges with the results for non-native hedges.',
        marks: 2,
        ph: 'Both provide better nest survival than no hedge (similarity). Native hedges give higher survival rates than non-native hedges; greater range between native hedge results (difference).',
      },
      {
        label: 'd',
        text: '**State** why a "no hedge" condition was also tested in this investigation.',
        marks: 1,
        ph: 'To show the effect of the hedge on results; it is the control condition.',
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
    stem: 'A student placed an Elodea (Canadian pondweed) sprig in a beaker of water and moved a lamp to different distances. They counted the number of gas bubbles produced by the plant.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="beak1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4eef9"/><stop offset="1" stop-color="#9bd2ec"/></linearGradient><radialGradient id="bulb1" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff7c2"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="600" height="300" fill="#ffffff"/><circle cx="120" cy="120" r="26" fill="url(#bulb1)" stroke="#c79a10"/><rect x="108" y="146" width="24" height="40" fill="#777"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="150" y1="110" x2="300" y2="120"/><line x1="150" y1="120" x2="300" y2="130"/><line x1="150" y1="130" x2="300" y2="140"/></g><text x="120" y="206" font-size="11" text-anchor="middle" fill="#9a7d0f">lamp</text><line x1="150" y1="240" x2="430" y2="240" stroke="#94a3ad" stroke-width="1"/><line x1="150" y1="240" x2="150" y2="232" stroke="#94a3ad"/><line x1="430" y1="240" x2="430" y2="232" stroke="#94a3ad"/><text x="290" y="258" font-size="11" text-anchor="middle" fill="#5b6b78">distance (varied)</text><path d="M360,120 h120 v150 h-120 z" fill="url(#beak1)" stroke="#3f7e98" stroke-width="2"/><path d="M360,120 h120" fill="none" stroke="#3f7e98" stroke-width="2"/><g stroke="#2f9e44" stroke-width="4" stroke-linecap="round" fill="none"><path d="M420,265 q-8,-30 4,-58 q10,-22 -2,-44"/><path d="M420,255 q14,-8 22,-22"/><path d="M420,225 q-16,-6 -24,-20"/></g><g fill="#bfe3f2" stroke="#7fc4e0"><circle cx="430" cy="150" r="4"/><circle cx="424" cy="168" r="3"/><circle cx="436" cy="182" r="3.5"/><circle cx="430" cy="200" r="3"/></g><text x="420" y="288" font-size="11" text-anchor="middle" fill="#1f3d2a">Elodea sprig</text><text x="470" y="150" font-size="10" fill="#0b7285">O₂ bubbles</text></svg>',
      },
      caption: 'An Elodea sprig in water with a lamp at a measured distance. Gas bubbles are counted per minute.',
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
    stem: 'A student investigated the effect of temperature on the rate of photosynthesis in Elodea. The method involved 6 steps: placing the sprig in a beaker, adding a funnel, measuring gas with a measuring cylinder, placing the beaker in a ___ to keep temperature constant, counting bubbles for 5 minutes, and repeating 4 trials at each of 5 different temperatures.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Temperature / °C', 'Trial 1', 'Trial 2', 'Trial 3', 'Trial 4', 'Average'],
        rows: [
          ['10', '4', '6', '4', '6', '?'],
          ['20', '9', '10', '8', '9', '9'],
          ['30', '13', '11', '19', '13', '?'],
          ['40', '7', '6', '8', '7', '7'],
          ['50', '2', '3', '2', '3', '2.5'],
        ],
      },
      caption: 'Number of gas bubbles produced in 5 minutes by Elodea at each temperature.',
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
        ph: 'Average at 10°C = 5 (4+6+4+6=20÷4). Average at 30°C = 14 (13+11+19+13=56÷4). Improvements: consistent significant figures; correct column headings; plot results as a line/scatter graph.',
      },
      {
        label: 'f',
        text: '**Identify** the data point in the table that appears to be an outlier.',
        marks: 1,
        ph: 'Trial 3 at 30°C (value of 19, much higher than other 30°C values of 13, 11, 13).',
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
              { x: 10, y: 5 },
              { x: 20, y: 9 },
              { x: 30, y: 14 },
              { x: 40, y: 7 },
              { x: 50, y: 2.5 },
            ],
            xMin: 0,
            xMax: 60,
            yMin: 0,
            yMax: 16,
            xStep: 10,
            yStep: 2,
          },
          caption: 'Average gas bubbles produced by Elodea against temperature (peak near 30 °C).',
        },
      },
    ],
  },

  // ── Q6 — Design Investigation: Leaf Number (15 marks, Crit B) ───────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Design Investigation — Elodea Leaf Number',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 15,
    stem: 'A student wants to find out whether the number of leaves on an Elodea sprig affects how quickly it photosynthesises.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="beak6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4eef9"/><stop offset="1" stop-color="#9bd2ec"/></linearGradient></defs><rect width="600" height="260" fill="#ffffff"/><text x="300" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f3d2a">Same lamp, same temperature — vary number of leaves</text><g><path d="M70,210 h110 v-110 h-110 z" fill="url(#beak6)" stroke="#3f7e98" stroke-width="2"/><line x1="125" y1="200" x2="125" y2="120" stroke="#2f9e44" stroke-width="4"/><g fill="#2f9e44"><ellipse cx="115" cy="150" rx="9" ry="4"/><ellipse cx="135" cy="160" rx="9" ry="4"/></g><text x="125" y="232" font-size="11" text-anchor="middle" fill="#1f3d2a">2 leaves</text></g><g><path d="M245,210 h110 v-110 h-110 z" fill="url(#beak6)" stroke="#3f7e98" stroke-width="2"/><line x1="300" y1="200" x2="300" y2="120" stroke="#2f9e44" stroke-width="4"/><g fill="#2f9e44"><ellipse cx="290" cy="142" rx="9" ry="4"/><ellipse cx="310" cy="150" rx="9" ry="4"/><ellipse cx="288" cy="162" rx="9" ry="4"/><ellipse cx="312" cy="172" rx="9" ry="4"/></g><text x="300" y="232" font-size="11" text-anchor="middle" fill="#1f3d2a">4 leaves</text></g><g><path d="M420,210 h110 v-110 h-110 z" fill="url(#beak6)" stroke="#3f7e98" stroke-width="2"/><line x1="475" y1="200" x2="475" y2="116" stroke="#2f9e44" stroke-width="4"/><g fill="#2f9e44"><ellipse cx="465" cy="134" rx="9" ry="4"/><ellipse cx="485" cy="142" rx="9" ry="4"/><ellipse cx="463" cy="152" rx="9" ry="4"/><ellipse cx="487" cy="162" rx="9" ry="4"/><ellipse cx="465" cy="172" rx="9" ry="4"/><ellipse cx="485" cy="182" rx="9" ry="4"/></g><text x="475" y="232" font-size="11" text-anchor="middle" fill="#1f3d2a">6 leaves</text></g></svg>',
      },
      caption: 'Identical beakers, lamp and temperature; only the number of Elodea leaves changes.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to test how changing the number of leaves on an Elodea sprig affects the rate of photosynthesis. Include: IV, DV, two control variables; a testable hypothesis; equipment; a method with at least 5 steps sufficient to collect data for at least 5 different leaf numbers with 3 repeats.',
        marks: 15,
        ph: 'IV = number of leaves; DV = volume of gas / number of bubbles; CVs = light intensity, temperature, CO₂. Hypothesis: more leaves → more chloroplasts → higher rate. Equipment: measuring cylinder, lamp, water bath, beaker. Method: set up plant, set leaf number, count bubbles for fixed time, repeat 3× per number, test 5 leaf numbers.',
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
    stem: 'The enzyme catalase breaks down hydrogen peroxide (a toxic by-product of metabolism) into water and oxygen. Enzymes are affected by different factors, including temperature and concentration of substrate.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="arr7" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#444"/></marker></defs><rect width="600" height="240" fill="#ffffff"/><path d="M70,120 q0,-44 40,-44 l28,0 q-10,22 0,44 q-10,22 0,44 l-28,0 q-40,0 -40,-44 z" fill="#37b24d" stroke="#1f7a33" stroke-width="2"/><text x="96" y="200" font-size="11" text-anchor="middle" fill="#1f7a33">Shape 2 (enzyme)</text><circle cx="150" cy="96" r="16" fill="#9c36b5" stroke="#6b2480"/><circle cx="150" cy="132" r="16" fill="#9c36b5" stroke="#6b2480"/><text x="150" y="70" font-size="11" text-anchor="middle" fill="#6b2480">Shape 1</text><line x1="200" y1="115" x2="270" y2="115" stroke="#444" stroke-width="2" marker-end="url(#arr7)"/><path d="M300,120 q0,-44 40,-44 l28,0 q-10,22 0,44 q-10,22 0,44 l-28,0 q-40,0 -40,-44 z" fill="#37b24d" stroke="#1f7a33" stroke-width="2"/><text x="326" y="200" font-size="11" text-anchor="middle" fill="#1f7a33">Shape 3 (after arrow)</text><line x1="420" y1="115" x2="470" y2="115" stroke="#444" stroke-width="2" marker-end="url(#arr7)"/><circle cx="510" cy="100" r="10" fill="#f08c00" stroke="#b56a00"/><circle cx="510" cy="132" r="10" fill="#f08c00" stroke="#b56a00"/><text x="510" y="70" font-size="11" text-anchor="middle" fill="#b56a00">Shape 4</text></svg>',
      },
      caption: 'An enzyme-catalysed reaction: the substrate binds, the reaction occurs, and the products are released; the enzyme is unchanged.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagram above illustrates an enzyme-catalysed reaction. **Identify** the enzyme, the substrate, and the product from the dropdown.',
        marks: 2,
        ph: 'Shape 1 (large purple) = Substrate; Shape 2 = Enzyme; Shape 3 (after arrow) = Enzyme; Shape 4 (small) = Product.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Shape 1 (large purple molecule)', 'Shape 2 (enzyme shape)', 'Shape 3 (after arrow)', 'Shape 4 (small molecule)'],
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
            title: 'Rate of catalase reaction vs substrate concentration',
            xLabel: 'Substrate concentration',
            yLabel: 'Rate of reaction',
            dataPoints: [
              { x: 0, y: 0 },
              { x: 1, y: 12 },
              { x: 2, y: 22 },
              { x: 3, y: 30 },
              { x: 4, y: 36 },
              { x: 5, y: 39 },
              { x: 6, y: 40 },
              { x: 7, y: 40 },
              { x: 8, y: 40 },
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

  // ── Q9 — Evaluate Medication for Type-2 Diabetes (11 marks, Crit D) ─────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Evaluating Medication for Type-2 Diabetes',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Circulation'],
    marks: 11,
    stem: 'Type-2 diabetes is a condition in which the body cannot control blood-sugar levels properly. It can be treated with medication such as metformin, which helps lower blood-sugar levels.',
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** using medication to solve the problem of type-2 diabetes. In your answer, include: positive and negative impacts on an individual\'s lifestyle; positive and negative impacts on wider society; a concluding appraisal giving your opinion of how type-2 diabetes should be treated.',
        marks: 11,
        ph: 'Individual: positive (controls blood sugar, reduces complications like nerve/kidney damage); negative (side effects, cost, dependency, diet not addressed). Society: positive (reduces healthcare burden); negative (cost of prescriptions, over-reliance). Appraisal: medication useful but best combined with diet and lifestyle changes — justify.',
      },
    ],
  },

  // ── Q10 — Insulin, Glucagon and Blood Sugar (8 marks, Crit D) ───────────
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Insulin, Glucagon and Blood Sugar',
    topicCanonical: 'Receptors & Hormones',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Ethical Implications'],
    marks: 8,
    stem: 'Insulin and glucagon are hormones released by the pancreas to regulate blood-sugar levels. The graph shows hormone levels through the hours after a meal for a healthy person and a person with type-2 diabetes.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Blood-sugar level after a meal',
        xLabel: 'Time after meal',
        yLabel: 'Blood glucose',
        xUnit: 'hours',
        yUnit: 'mmol/L',
        dataPoints: [
          { x: 0, y: 5 },
          { x: 1, y: 8 },
          { x: 2, y: 6.5 },
          { x: 3, y: 5.5 },
          { x: 4, y: 5 },
        ],
        lobf: false,
        xMin: 0,
        xMax: 4,
        yMin: 0,
        yMax: 14,
        xStep: 1,
        yStep: 2,
      },
      caption: 'In a healthy person, insulin returns blood glucose toward 5 mmol/L within a few hours of eating.',
    },
    tasks: [
      {
        label: 'a',
        text: 'People with type-1 diabetes sometimes inject insulin after a meal. **Suggest** how this would help to lower their blood-sugar level.',
        marks: 2,
        ph: 'The injection increases insulin levels; insulin tells body cells (e.g. liver and muscle) to take up glucose from the blood and store it as glycogen, lowering blood-sugar to a safe level.',
      },
      {
        label: 'b',
        text: '**Discuss and evaluate** the use of mice to test the long-term effects of a new insulin treatment on humans with diabetes. In your answer, include: a benefit and a limitation of using mice; two ethical considerations; a concluding appraisal with justification.',
        marks: 6,
        ph: 'Benefit: mice are mammals similar to humans; easy to control external variables. Limitation: different physiology; side effects may not translate. Ethical: mice exposed to disease/injections (harmful); cannot give consent; unknown side effects; bred for experiments. Appraisal: justified conclusion on whether using mice is appropriate.',
      },
    ],
  },
]
