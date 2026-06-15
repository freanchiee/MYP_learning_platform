import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2021 · VARIANT 2  (isomorphic to biology-nov-2021)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widgets, taxonomy tags) in a NEW biological context, with
// self-contained data-driven artefacts (no external image files).
//   Q1 Interdependency:  flying foxes / mango web → earthworms / woodland-soil web
//   Q2 Cell division:     human gametes → skin wound healing & sperm formation
//   Q3 Homeostasis:       cold response → desert hiker overheating (vasodilation/sweat)
//   Q4 Bacteria/method:   mobile phone + disinfectants → door handle + mouthwashes
//   Q5 Natural selection: E. coli antibiotic resistance → Pseudomonas resistance
//   Q6 Crit B design:     salt solution vs growth → vinegar (acetic acid) vs growth
//   Q7 Cardiovascular:    statins/angioplasty → aspirin/balloon-angioplasty (stent)
//   Q8 Crit D essay:      lifestyle & CVD → lifestyle & stroke (cerebrovascular)
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2021-v2',
  subject: 'Biology',
  session: 'November',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ── Q1 — Earthworms (6 marks, Crit A) ────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Earthworms — Ecology and Interdependence',
    topicCanonical: 'Interdependency',
    topicGroup: 'Organisms',
    topicsAlso: ['Food Chains & Webs'],
    marks: 6,
    stem: 'Earthworms live in the soil of woodlands and grasslands. They feed on dead leaves and decaying plant material, mixing and aerating the soil as they burrow. The food web below shows feeding relationships in a woodland-soil ecosystem. Earthworms are described as a keystone species because so many other organisms depend on the healthy soil they create.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Woodland-soil food web',
        nodes: [
          { id: 'oak', label: 'Oak tree', color: '#2f9e44', detail: 'Producer — its fallen leaves become the dead organic matter earthworms feed on.' },
          { id: 'grass', label: 'Grass', color: '#37b24d', detail: 'Producer — adds dead plant litter to the soil.' },
          { id: 'worm', label: 'Earthworm', color: '#f08c00', detail: 'Decomposer/detritivore — eats dead leaves and aerates the soil; keystone species.' },
          { id: 'beetle', label: 'Ground beetle', color: '#9c36b5', detail: 'Consumer — eats earthworms and other soil invertebrates.' },
          { id: 'shrew', label: 'Shrew', color: '#1971c2', detail: 'Consumer — a small mammal that eats earthworms and beetles.' },
          { id: 'thrush', label: 'Song thrush', color: '#e8590c', detail: 'Consumer — a bird that pulls earthworms from the soil.' },
          { id: 'owl', label: 'Tawny owl', color: '#495057', detail: 'Top predator — hunts shrews and small birds.' },
        ],
        edges: [
          { from: 'oak', to: 'worm', label: 'dead leaves' },
          { from: 'grass', to: 'worm', label: 'dead leaves' },
          { from: 'worm', to: 'beetle', label: 'eaten by' },
          { from: 'worm', to: 'shrew', label: 'eaten by' },
          { from: 'worm', to: 'thrush', label: 'eaten by' },
          { from: 'beetle', to: 'shrew', label: 'eaten by' },
          { from: 'shrew', to: 'owl', label: 'eaten by' },
        ],
      },
      caption: 'Feeding relationships in a woodland-soil ecosystem. Tap a node to see its role.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the category that best describes an earthworm.',
        marks: 1,
        ph: 'Annelid (invertebrate / worm).',
        widget: 'radio_select',
        widgetOptions: ['Annelid', 'Insect', 'Mammal', 'Mollusc'],
      },
      {
        label: 'b',
        text: 'Earthworms play an important role in nutrient cycling and aerating the soil. **State** why these processes are important for plants.',
        marks: 2,
        ph: 'Nutrient cycling: dead material is broken down so nutrients/minerals are returned to the soil for plant growth. Aeration: burrows let air and water reach plant roots, improving root growth and respiration.',
      },
      {
        label: 'c',
        text: '**Identify** a producer in the food web.',
        marks: 1,
        ph: 'Oak tree / grass. (Do not accept "plant" alone.)',
      },
      {
        label: 'd',
        text: 'Use the food web to **suggest** one advantage and one disadvantage of earthworms to a vegetable gardener.',
        marks: 2,
        ph: 'Advantage: earthworms enrich and aerate the soil, improving crop growth / recycling nutrients. Disadvantage: earthworms attract birds (thrushes) or moles that may damage crops, or their casts can disturb seedlings.',
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="cellg2b" cx="0.4" cy="0.35"><stop offset="0" stop-color="#e7f1ff"/><stop offset="1" stop-color="#a5c8f5"/></radialGradient><marker id="arrm2b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5b6b78"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Mitosis (skin repair) vs Meiosis (sperm formation)</text><ellipse cx="120" cy="90" rx="60" ry="42" fill="url(#cellg2b)" stroke="#1971c2" stroke-width="2"/><line x1="105" y1="78" x2="135" y2="102" stroke="#0b7285" stroke-width="3"/><line x1="135" y1="78" x2="105" y2="102" stroke="#0b7285" stroke-width="3"/><text x="120" y="148" font-size="12" text-anchor="middle" fill="#1f2d3a">Parent cell</text><line x1="180" y1="90" x2="250" y2="60" stroke="#5b6b78" stroke-width="2" marker-end="url(#arrm2b)"/><line x1="180" y1="90" x2="250" y2="230" stroke="#5b6b78" stroke-width="2" marker-end="url(#arrm2b)"/><text x="215" y="48" font-size="11" fill="#1971c2">MITOSIS</text><ellipse cx="320" cy="50" rx="40" ry="28" fill="url(#cellg2b)" stroke="#1971c2" stroke-width="2"/><line x1="312" y1="42" x2="328" y2="58" stroke="#0b7285" stroke-width="2.5"/><line x1="328" y1="42" x2="312" y2="58" stroke="#0b7285" stroke-width="2.5"/><ellipse cx="320" cy="120" rx="40" ry="28" fill="url(#cellg2b)" stroke="#1971c2" stroke-width="2"/><line x1="312" y1="112" x2="328" y2="128" stroke="#0b7285" stroke-width="2.5"/><line x1="328" y1="112" x2="312" y2="128" stroke="#0b7285" stroke-width="2.5"/><text x="372" y="90" font-size="11" fill="#1f2d3a">2 identical</text><text x="372" y="106" font-size="11" fill="#1f2d3a">skin cells</text><text x="245" y="218" font-size="11" fill="#c2255c">MEIOSIS</text><ellipse cx="320" cy="210" rx="28" ry="20" fill="#ffe3e3" stroke="#c2255c" stroke-width="2"/><line x1="314" y1="204" x2="326" y2="216" stroke="#0b7285" stroke-width="2"/><ellipse cx="320" cy="260" rx="28" ry="20" fill="#ffe3e3" stroke="#c2255c" stroke-width="2"/><line x1="314" y1="254" x2="326" y2="266" stroke="#2f9e44" stroke-width="2"/><ellipse cx="398" cy="210" rx="28" ry="20" fill="#ffe3e3" stroke="#c2255c" stroke-width="2"/><line x1="392" y1="204" x2="404" y2="216" stroke="#f08c00" stroke-width="2"/><ellipse cx="398" cy="260" rx="28" ry="20" fill="#ffe3e3" stroke="#c2255c" stroke-width="2"/><line x1="392" y1="254" x2="404" y2="266" stroke="#9c36b5" stroke-width="2"/><text x="442" y="232" font-size="11" fill="#1f2d3a">4 non-identical</text><text x="442" y="248" font-size="11" fill="#1f2d3a">sperm cells</text></svg>',
      },
      caption: 'Mitosis repairs skin with identical cells; meiosis makes four genetically different sperm cells.',
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
        text: 'Fertilization is the combination of genetic material from a sperm cell and an egg cell. **Explain** how fertilization leads to genetic variation in a population.',
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
    stem: 'A hiker is crossing a hot desert where the air temperature reaches 42°C. Her body must keep its core temperature within the normal range of 36.5°C – 37.5°C. This model represents an example of homeostasis in the human body.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="arr3b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="280" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Negative-feedback control of body temperature</text><rect x="220" y="48" width="160" height="40" rx="8" fill="#e7f5ff" stroke="#0b7285" stroke-width="2"/><text x="300" y="73" font-size="12" text-anchor="middle" fill="#0b7285">Normal core temp 36.5–37.5°C</text><path d="M300,88 L300,118" stroke="#0b7285" stroke-width="2" marker-end="url(#arr3b)"/><rect x="190" y="120" width="220" height="36" rx="8" fill="#fff4e6" stroke="#f08c00" stroke-width="2"/><text x="300" y="143" font-size="12" text-anchor="middle" fill="#a8531a">Desert heat raises skin temperature</text><path d="M300,156 L300,184" stroke="#0b7285" stroke-width="2" marker-end="url(#arr3b)"/><rect x="60" y="186" width="200" height="58" rx="8" fill="#ffffff" stroke="#2f9e44" stroke-width="2"/><text x="160" y="208" font-size="12" text-anchor="middle" fill="#2f9e44">Receptor</text><text x="160" y="228" font-size="11" text-anchor="middle" fill="#1f2d3a">Nervous system detects change</text><rect x="340" y="186" width="200" height="58" rx="8" fill="#ffffff" stroke="#2f9e44" stroke-width="2"/><text x="440" y="208" font-size="12" text-anchor="middle" fill="#2f9e44">Effector</text><text x="440" y="228" font-size="11" text-anchor="middle" fill="#1f2d3a">Sweat glands / blood vessels respond</text><path d="M260,215 L340,215" stroke="#0b7285" stroke-width="2" marker-end="url(#arr3b)"/><path d="M440,186 C470,140 420,96 382,72" fill="none" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#arr3b)"/><text x="470" y="120" font-size="10" fill="#94a3ad">return to</text><text x="470" y="134" font-size="10" fill="#94a3ad">normal</text></svg>',
      },
      caption: 'A negative-feedback loop returns the hiker\'s core temperature to the normal range.',
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
        text: 'Using your answer to part (a), **describe** how these two systems work together to respond to the hiker\'s rise in body temperature in the desert heat.',
        marks: 3,
        ph: 'Nervous system detects/communicates the rise in temperature; causes vasodilation / blood diverted towards the skin surface / sweating; thereby increasing heat loss from the body (sweat evaporates and cools the skin).',
      },
      {
        label: 'c',
        text: 'In order for enzymes to effectively control reactions in the human body, temperature must remain constant in the range 36.5°C to 37.5°C. **Explain** why enzyme-based reactions in the body are dependent on the temperature not moving outside this range.',
        marks: 5,
        ph: 'Enzymes have an optimum temperature (36.5–37.5°C). Too cold: reactions do not occur fast enough / insufficient kinetic energy. Too hot: enzymes change shape (denature); active site changes shape; substrate can no longer fit; enzyme no longer functions. Use a term from: active site, denature, catalyse, lock and key, substrate.',
      },
    ],
  },

  // ── Q4 — Bacteria Investigation (17 marks, Crit A) ───────────────────────
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Bacteria — Structure and Mouthwash Investigation',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 17,
    stem: 'Bacteria are simple, single-celled organisms that have no nucleus. A scientist investigates bacteria found on a public door handle. The investigation uses agar plates prepared with an even layer of a known species of bacteria. After two days of growth in an incubator, different colonies appeared showing distinct colour, form, elevation and margin characteristics.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="200" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Which image shows a bacterial cell?</text><g><text x="80" y="52" font-size="12" font-weight="700" text-anchor="middle">Image A</text><ellipse cx="80" cy="115" rx="44" ry="30" fill="#f3f0ff" stroke="#9c36b5" stroke-width="2"/><circle cx="80" cy="115" r="12" fill="#d0bfff" stroke="#7048e8"/><path d="M50,105 q30,-18 60,0" stroke="#9c36b5" stroke-width="1.5" fill="none"/><text x="80" y="178" font-size="10" text-anchor="middle" fill="#5b6b78">virus particle</text></g><g><text x="220" y="52" font-size="12" font-weight="700" text-anchor="middle">Image B</text><circle cx="220" cy="115" r="42" fill="#e7f5ff" stroke="#0b7285" stroke-width="2"/><circle cx="220" cy="115" r="14" fill="#74c0fc" stroke="#1971c2"/><ellipse cx="200" cy="100" rx="8" ry="5" fill="#b197fc"/><ellipse cx="238" cy="128" rx="9" ry="6" fill="#63e6be"/><text x="220" y="178" font-size="10" text-anchor="middle" fill="#5b6b78">animal cell</text></g><g><text x="360" y="52" font-size="12" font-weight="700" text-anchor="middle">Image C</text><rect x="318" y="78" width="80" height="74" rx="6" fill="#e6fcf5" stroke="#0b7285" stroke-width="2"/><circle cx="358" cy="115" r="13" fill="#74c0fc" stroke="#1971c2"/><ellipse cx="338" cy="98" rx="8" ry="5" fill="#63e6be"/><rect x="370" y="120" width="14" height="9" fill="#b2f2bb" stroke="#2f9e44"/><text x="360" y="178" font-size="10" text-anchor="middle" fill="#5b6b78">plant cell</text></g><g><text x="510" y="52" font-size="12" font-weight="700" text-anchor="middle">Image D</text><circle cx="500" cy="115" r="16" fill="#fff4e6" stroke="#f08c00" stroke-width="2"/><circle cx="520" cy="118" r="16" fill="#fff4e6" stroke="#f08c00" stroke-width="2"/><circle cx="510" cy="100" r="16" fill="#fff4e6" stroke="#f08c00" stroke-width="2"/><circle cx="500" cy="115" r="3" fill="#f08c00"/><text x="510" y="178" font-size="10" text-anchor="middle" fill="#5b6b78">cocci (spheres)</text></g></svg>',
      },
      caption: 'Four candidate microscope images. Only one shows a prokaryotic bacterial cell.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** which of the following images shows a bacterial cell.',
        marks: 1,
        ph: 'Image D (the cluster of cocci — spherical prokaryotic cells with no nucleus).',
        widget: 'radio_select',
        widgetOptions: ['Image A', 'Image B', 'Image C', 'Image D'],
      },
      {
        label: 'b',
        text: 'Use the chart to **select** the species of the circled bacterial colony based on its appearance.',
        marks: 1,
        ph: 'Species A.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Species', 'Colour', 'Form', 'Elevation', 'Margin'],
            rows: [
              ['A', 'Grey', 'Circular', 'Convex', 'Entire'],
              ['B', 'Orange', 'Irregular', 'Flat', 'Lobate'],
              ['C', 'White', 'Rhizoid', 'Umbonate', 'Filamentous'],
              ['D', 'Yellow', 'Circular', 'Flat', 'Undulate'],
            ],
          },
          caption: 'The circled colony is grey, circular, convex, with an entire margin.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: '**Identify** one qualitative and one quantitative piece of data that could be collected from the bacteria on the agar plate.',
        marks: 2,
        ph: 'Qualitative: colour / form / elevation / margin of colonies. Quantitative: number of colonies / measurement of size or diameter or radius.',
      },
      {
        label: 'd',
        text: 'Mouthwashes can stop bacterial growth with varying levels of effectiveness. **Formulate** a research question for a mouthwash experiment in which paper disks soaked in different mouthwashes are placed on an inoculated agar plate.',
        marks: 2,
        ph: 'A research question linking different mouthwashes to an implied DV e.g. "How does the type of mouthwash affect the zone of no growth on an agar plate?"',
      },
      {
        label: 'e',
        text: '**State** the variables for this experiment: independent variable, dependent variable, and two control variables.',
        marks: 4,
        ph: 'IV: type of mouthwash. DV: diameter of zone of inhibition / clear zone around disk (must be measurable). CVs (any 2): species of bacteria on plate; size of disk; time of immersion of disk; concentration of mouthwash; time period of bacterial growth.',
      },
      {
        label: 'f',
        text: '**Suggest** a reason why water was also tested in this experiment.',
        marks: 1,
        ph: 'Water is a negative control; to show the effect is not caused by the disk or the water itself; zone is caused by the mouthwash; to measure how effective water is at stopping growth.',
      },
      {
        label: 'g',
        text: 'Use the ruler to **measure** the zones of no growth surrounding the disks in Plate 2. Record your data in the table.',
        marks: 2,
        ph: 'Chlorhexidine: 26 mm; Herbal (alcohol-free): 8 mm; Fluoride rinse: 12 mm; Essential-oil: 18 mm; Water: 0 mm. (Accept ±1 mm for each measurement.)',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Disk', 'Zone of no growth / mm'],
            rows: [
              ['Chlorhexidine', ''],
              ['Herbal (alcohol-free)', ''],
              ['Fluoride rinse', ''],
              ['Essential-oil', ''],
              ['Water (control)', ''],
            ],
          },
          caption: 'Record the diameter of the clear zone around each disk in Plate 2.',
        },
      },
      {
        label: 'h',
        text: '**Outline** the strengths and weaknesses of the experimental method.',
        marks: 4,
        ph: 'Strengths: range of mouthwashes compared; water included as a control; reference to reliability linked to a named control variable. Weaknesses: only two trials; results cannot be verified with only two data points; cannot identify outliers; one mouthwash\'s data not reproducible.',
      },
    ],
  },

  // ── Q5 — Antibiotics and Resistance (15 marks, Crit A) ───────────────────
  {
    id: 5,
    crit: 'A',
    type: 'extended',
    topic: 'Antibiotics and Antibiotic Resistance',
    topicCanonical: 'Natural Selection',
    topicGroup: 'Evolution',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 15,
    stem: 'Antibiotics are important in the treatment of bacterial infections. They either prevent growth or kill bacteria, enabling an organism to fight infection. Some Pseudomonas bacteria are no longer killed by certain antibiotics — these are said to be resistant. Responsible use involves giving patients an antibiotic to which the bacteria are sensitive, at a concentration strong enough to kill the bacteria.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="200" fill="#ffffff"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Evolution of antibiotic resistance in a Pseudomonas population</text><g><rect x="20" y="50" width="110" height="110" rx="8" fill="#f1f3f5" stroke="#adb5bd"/><text x="75" y="46" font-size="11" text-anchor="middle" fill="#5b6b78">Stage 1</text><circle cx="48" cy="80" r="7" fill="#37b24d"/><circle cx="72" cy="95" r="7" fill="#37b24d"/><circle cx="100" cy="78" r="7" fill="#c2255c"/><circle cx="60" cy="125" r="7" fill="#37b24d"/><circle cx="98" cy="130" r="7" fill="#37b24d"/><text x="75" y="178" font-size="9" text-anchor="middle" fill="#5b6b78">mixed population</text></g><g><rect x="150" y="50" width="110" height="110" rx="8" fill="#f1f3f5" stroke="#adb5bd"/><text x="205" y="46" font-size="11" text-anchor="middle" fill="#5b6b78">Stage 2</text><text x="205" y="110" font-size="11" text-anchor="middle" fill="#a8531a">? (missing)</text><text x="205" y="178" font-size="9" text-anchor="middle" fill="#5b6b78">antibiotic added</text></g><g><rect x="280" y="50" width="110" height="110" rx="8" fill="#f1f3f5" stroke="#adb5bd"/><text x="335" y="46" font-size="11" text-anchor="middle" fill="#5b6b78">Stage 3</text><circle cx="320" cy="100" r="7" fill="#c2255c"/><text x="335" y="178" font-size="9" text-anchor="middle" fill="#5b6b78">resistant survive</text></g><g><rect x="410" y="50" width="110" height="110" rx="8" fill="#f1f3f5" stroke="#adb5bd"/><text x="465" y="46" font-size="11" text-anchor="middle" fill="#5b6b78">Stage 4</text><circle cx="438" cy="82" r="7" fill="#c2255c"/><circle cx="470" cy="100" r="7" fill="#c2255c"/><circle cx="498" cy="120" r="7" fill="#c2255c"/><text x="465" y="178" font-size="9" text-anchor="middle" fill="#5b6b78">resistant reproduce</text></g><g><rect x="540" y="50" width="60" height="110" rx="8" fill="#f1f3f5" stroke="#adb5bd"/><text x="570" y="46" font-size="11" text-anchor="middle" fill="#5b6b78">Stage 5</text><text x="570" y="100" font-size="10" text-anchor="middle" fill="#a8531a">?</text><text x="570" y="178" font-size="8" text-anchor="middle" fill="#5b6b78">all resistant</text></g><circle cx="40" cy="190" r="6" fill="#37b24d"/><text x="52" y="194" font-size="9" fill="#1f2d3a">sensitive</text><circle cx="120" cy="190" r="6" fill="#c2255c"/><text x="132" y="194" font-size="9" fill="#1f2d3a">resistant</text></svg>',
      },
      caption: 'Five stages showing how an antibiotic selects for resistant bacteria. Stages 2 and 5 labels are missing.',
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
        text: '*Pseudomonas* samples were taken from infected patients and tested for resistance. **Plot** the data from 2010 to 2014 to complete the graph.',
        marks: 2,
        ph: 'Data points: 2010=4.5%, 2011=4.0%, 2012=5.2%, 2013=6.8%, 2014=7.6%. Two data points correctly plotted = 1 mark; all correct (±0.1) = 2 marks.',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Percentage of Pseudomonas samples resistant to ciprofloxacin',
            xLabel: 'Year',
            yLabel: 'Resistant samples',
            yUnit: '%',
            dataPoints: [{ x: 2010, y: 4.5 }, { x: 2011, y: 4.0 }, { x: 2012, y: 5.2 }, { x: 2013, y: 6.8 }, { x: 2014, y: 7.6 }],
            xMin: 2009,
            xMax: 2015,
            yMin: 0,
            yMax: 10,
            xStep: 1,
            yStep: 2,
          },
          caption: 'Plot the percentage of resistant samples for each year from 2010 to 2014.',
        },
      },
      {
        label: 'c',
        text: 'The effect of several antibiotics was tested on *Pseudomonas* bacteria. **Select** the antibiotic that is most effective and explain your answer with a scientific reason.',
        marks: 3,
        ph: 'Colistin — it has the largest and clearest zone of no growth. Scientific reason: there are no resistant bacteria so the zone is clear; colistin is effective at a lower concentration than the other antibiotics.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="220" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Zones of no growth around antibiotic disks</text><circle cx="300" cy="120" r="92" fill="#f3e9d8" stroke="#b08d57" stroke-width="2"/><g><circle cx="300" cy="70" r="20" fill="#ffffff" opacity="0.85"/><circle cx="300" cy="70" r="5" fill="#495057"/><text x="300" y="46" font-size="10" text-anchor="middle" fill="#1f2d3a">Ciprofloxacin</text></g><g><circle cx="372" cy="118" r="12" fill="#ffffff" opacity="0.85"/><circle cx="372" cy="118" r="5" fill="#495057"/><text x="406" y="118" font-size="10" text-anchor="middle" fill="#1f2d3a">Gentamicin</text></g><g><circle cx="252" cy="160" r="38" fill="#ffffff" opacity="0.9"/><circle cx="252" cy="160" r="5" fill="#495057"/><text x="252" y="208" font-size="10" text-anchor="middle" fill="#2f9e44" font-weight="700">Colistin</text></g><g><circle cx="338" cy="170" r="16" fill="#ffffff" opacity="0.6"/><circle cx="338" cy="170" r="5" fill="#495057"/><text x="362" y="190" font-size="10" text-anchor="middle" fill="#1f2d3a">Tobramycin</text></g><text x="300" y="120" font-size="10" text-anchor="middle" fill="#8a6d3b">agar lawn</text></svg>',
          },
          caption: 'Colistin shows the largest, completely clear zone of no growth.',
        },
        widget: 'radio_select',
        widgetOptions: ['Ciprofloxacin', 'Gentamicin', 'Tobramycin', 'Colistin'],
      },
      {
        label: 'd',
        text: 'A colorimeter measures the percentage of light absorbed by a liquid. **State** the relationship between the population of bacteria and the percentage absorption of light.',
        marks: 2,
        ph: 'As the population of bacteria increases, the percentage absorption of light increases. Positive / proportional / linear relationship.',
      },
      {
        label: 'e',
        text: 'The graph below shows the population growth of bacteria over time in a test tube with nutrient liquid. Use the graph to **explain** the change in bacteria population during each stage.',
        marks: 6,
        ph: 'Stage 1: slow growth; plentiful resources; few bacteria to reproduce. Stage 2: rapid/steady population growth; plentiful resources; many bacteria to reproduce. Stage 3: no net population growth; as many bacteria dying as reproducing; limiting factors present.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Bacterial population growth over time</text><line x1="70" y1="250" x2="560" y2="250" stroke="#1f2d3a" stroke-width="2"/><line x1="70" y1="250" x2="70" y2="50" stroke="#1f2d3a" stroke-width="2"/><text x="315" y="288" font-size="12" text-anchor="middle" fill="#1f2d3a">Time</text><text x="28" y="150" font-size="12" text-anchor="middle" fill="#1f2d3a" transform="rotate(-90 28 150)">Population</text><path d="M70,248 C150,244 175,235 200,215 C240,180 280,110 350,85 C420,65 480,70 560,72" fill="none" stroke="#0b7285" stroke-width="3"/><line x1="200" y1="50" x2="200" y2="250" stroke="#adb5bd" stroke-width="1" stroke-dasharray="5 4"/><line x1="360" y1="50" x2="360" y2="250" stroke="#adb5bd" stroke-width="1" stroke-dasharray="5 4"/><text x="135" y="120" font-size="13" font-weight="700" text-anchor="middle" fill="#2f9e44">Stage 1</text><text x="280" y="120" font-size="13" font-weight="700" text-anchor="middle" fill="#f08c00">Stage 2</text><text x="460" y="120" font-size="13" font-weight="700" text-anchor="middle" fill="#c2255c">Stage 3</text></svg>',
          },
          caption: 'A bacterial growth curve with three labelled stages.',
        },
      },
    ],
  },

  // ── Q6 — Design Investigation: Vinegar and Bacteria (17 marks, Crit B) ────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Design Investigation — Vinegar (Acetic Acid) and Bacterial Growth',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 17,
    stem: 'All food has a small number of bacteria growing on it. When in small numbers, these bacteria are harmless; but if they multiply, the food spoils and can become harmful to eat. Preservatives slow or prevent the growth of bacteria. Vinegar — a dilute solution of acetic acid — has been used to pickle and preserve food for centuries. You are provided with standard laboratory equipment, a colorimeter, and liquids: a liquid containing bacteria, nutrient liquid, and vinegar (acetic acid) solutions with concentrations from 0% to 8%.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Apparatus: colorimeter and vinegar-solution tubes</text><g><rect x="430" y="120" width="120" height="70" rx="8" fill="#e9ecef" stroke="#5b6b78" stroke-width="2"/><rect x="446" y="138" width="60" height="34" rx="3" fill="#212529"/><text x="476" y="160" font-size="13" fill="#3ad36a" text-anchor="middle" font-family="monospace">% abs</text><circle cx="528" cy="155" r="9" fill="#adb5bd" stroke="#5b6b78"/><text x="490" y="208" font-size="11" text-anchor="middle" fill="#5b6b78">colorimeter</text></g><g><rect x="60" y="110" width="26" height="90" rx="4" fill="#d0ebff" stroke="#1971c2"/><text x="73" y="216" font-size="10" text-anchor="middle" fill="#1971c2">0%</text></g><g><rect x="110" y="110" width="26" height="90" rx="4" fill="#e9fac8" stroke="#74b816"/><text x="123" y="216" font-size="10" text-anchor="middle" fill="#74b816">2%</text></g><g><rect x="160" y="110" width="26" height="90" rx="4" fill="#fff3bf" stroke="#f08c00"/><text x="173" y="216" font-size="10" text-anchor="middle" fill="#f08c00">4%</text></g><g><rect x="210" y="110" width="26" height="90" rx="4" fill="#ffd8a8" stroke="#e8590c"/><text x="223" y="216" font-size="10" text-anchor="middle" fill="#e8590c">6%</text></g><g><rect x="260" y="110" width="26" height="90" rx="4" fill="#ffc9c9" stroke="#c2255c"/><text x="273" y="216" font-size="10" text-anchor="middle" fill="#c2255c">8%</text></g><text x="175" y="92" font-size="11" text-anchor="middle" fill="#5b6b78">vinegar solutions of increasing concentration</text></svg>',
      },
      caption: 'Bacteria in nutrient liquid are mixed with vinegar solutions of different concentrations; the colorimeter reads % absorption.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation into the effect of a vinegar (acetic acid) solution on bacterial growth. In your answer, identify the independent and dependent variables; include two control variables; formulate a testable hypothesis with a scientific explanation; describe how to manipulate, measure or monitor all variables; describe the method to collect sufficient data; list any safety considerations.',
        marks: 17,
        ph: 'IV: concentration of vinegar (acetic acid) solution (0–8%). DV: % absorption (measured with colorimeter). CVs: temperature, volume of solution, type of bacteria, time period. Hypothesis: higher vinegar concentration → less bacterial growth → lower % absorption (due to low pH / acidity denaturing enzymes / damaging cells). Method: set up test tubes with same volume of bacteria + nutrient liquid + different vinegar concentrations, measure % absorption at start and after a fixed time, repeat at least 3 times for at least 5 concentrations including 0%. Safety: wash hands; handle acid and bacteria safely; dispose of bacteria safely.',
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
    stem: 'Changes in human lifestyles, in particular diet and activity, have led to increased levels of cardiovascular disease. Cholesterol is a substance found in all body cells and is important in cell membranes and hormones. Too much cholesterol can lead to atherosclerosis — the build-up of fatty plaques in blood vessels. Two interventions are considered here: low-dose aspirin, which makes the blood less likely to clot, and balloon angioplasty with a stent, in which a tiny balloon is inflated inside the narrowed artery and a mesh tube (stent) is left to hold it open.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Atherosclerosis in a coronary artery</text><g><text x="160" y="56" font-size="12" font-weight="700" text-anchor="middle" fill="#2f9e44">Healthy artery</text><ellipse cx="160" cy="140" rx="80" ry="60" fill="#ffe3e3" stroke="#c2255c" stroke-width="3"/><circle cx="160" cy="140" r="46" fill="#ffffff" stroke="#c2255c" stroke-width="2"/><circle cx="150" cy="135" r="7" fill="#fa5252"/><circle cx="172" cy="148" r="7" fill="#fa5252"/><text x="160" y="216" font-size="10" text-anchor="middle" fill="#5b6b78">wide lumen, blood flows freely</text></g><g><text x="440" y="56" font-size="12" font-weight="700" text-anchor="middle" fill="#a8531a">Diseased artery</text><ellipse cx="440" cy="140" rx="80" ry="60" fill="#ffe3e3" stroke="#c2255c" stroke-width="3"/><circle cx="440" cy="140" r="46" fill="#ffffff" stroke="#c2255c" stroke-width="2"/><path d="M440,94 A46,46 0 0 1 440,186 A30,30 0 0 0 440,94 Z" fill="#ffd8a8" stroke="#e8590c"/><circle cx="448" cy="140" r="5" fill="#fa5252"/><text x="440" y="216" font-size="10" text-anchor="middle" fill="#5b6b78">plaque narrows the lumen</text></g><line x1="248" y1="140" x2="352" y2="140" stroke="#5b6b78" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#arr7b)"/><defs><marker id="arr7b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5b6b78"/></marker></defs></svg>',
      },
      caption: 'A plaque deposit narrows the artery lumen, restricting blood flow to the heart muscle.',
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
        text: '**Suggest** how low-dose aspirin may reduce the chance of a heart attack.',
        marks: 3,
        ph: 'Aspirin reduces the stickiness of platelets / makes the blood less likely to clot; so a clot is less likely to form on a plaque; reducing the chance the coronary artery becomes blocked and causes a heart attack.',
      },
      {
        label: 'c',
        text: '**Describe** how balloon angioplasty and a stent lead to a reduction in blood pressure.',
        marks: 2,
        ph: 'A balloon is inflated inside the narrowed artery and a stent holds it open; this widens the artery so blood can flow more easily / resistance to blood flow is reduced.',
      },
      {
        label: 'd',
        text: '**Suggest** one advantage and one disadvantage for each of the interventions described above (balloon angioplasty and aspirin).',
        marks: 4,
        ph: 'Balloon angioplasty: advantage (minimally invasive; quick recovery; immediately widens the artery). Disadvantage (risk of complications such as a clot or re-narrowing; must be done near the heart). Aspirin: advantage (no surgery needed; cheap; reduces clot risk). Disadvantage (must be taken long-term; can cause stomach bleeding / irritation).',
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
    stem: 'A healthy lifestyle is always recommended to prevent and treat cardiovascular disease, including stroke, which can be caused by atherosclerosis in the arteries supplying the brain. The interactive graphic gives information about aspects of a healthy lifestyle: not smoking, eating healthy foods, taking regular exercise, maintaining a healthy weight, limiting salt, monitoring blood pressure and cholesterol, and minimising stress.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="260" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Aspects of a brain-and-heart-healthy lifestyle</text><circle cx="300" cy="140" r="48" fill="#f3f0ff" stroke="#7048e8" stroke-width="2"/><path d="M300,108 c-22,0 -36,16 -36,34 c0,22 22,36 36,44 c14,-8 36,-22 36,-44 c0,-18 -14,-34 -36,-34 Z" fill="#d0bfff" stroke="#7048e8"/><path d="M286,128 q14,-10 28,0 M284,150 q16,12 32,0" stroke="#7048e8" stroke-width="1.5" fill="none"/><text x="300" y="206" font-size="10" text-anchor="middle" fill="#5b6b78">brain</text><g font-size="11" fill="#1f2d3a"><rect x="60" y="60" width="120" height="30" rx="15" fill="#d3f9d8" stroke="#2f9e44"/><text x="120" y="80" text-anchor="middle">No smoking</text><rect x="420" y="60" width="120" height="30" rx="15" fill="#d3f9d8" stroke="#2f9e44"/><text x="480" y="80" text-anchor="middle">Healthy diet</text><rect x="40" y="130" width="120" height="30" rx="15" fill="#d0ebff" stroke="#1971c2"/><text x="100" y="150" text-anchor="middle">Exercise</text><rect x="440" y="130" width="130" height="30" rx="15" fill="#d0ebff" stroke="#1971c2"/><text x="505" y="150" text-anchor="middle">Healthy weight</text><rect x="70" y="200" width="130" height="30" rx="15" fill="#fff3bf" stroke="#f08c00"/><text x="135" y="220" text-anchor="middle">Limit salt</text><rect x="410" y="200" width="150" height="30" rx="15" fill="#fff3bf" stroke="#f08c00"/><text x="485" y="220" text-anchor="middle">Reduce stress</text></g></svg>',
      },
      caption: 'An infographic summarising lifestyle choices that lower the risk of stroke and heart disease.',
    },
    tasks: [
      {
        label: '',
        text: 'Using information from the infographic and knowledge from your wider MYP studies, **discuss and evaluate** the impact of lifestyle choices. In your answer, include: how an individual\'s quality of life may be impacted by cardiovascular disease (such as a stroke); economic advantages and disadvantages of adopting a healthy lifestyle; a justification of whether good health is the responsibility of the individual; a justification of whether good health is the responsibility of the society; a concluding statement.',
        marks: 15,
        ph: 'Quality of life: a stroke / cardiovascular disease reduces quality of life (loss of mobility or speech, pain, fatigue, mental health impact). Economic: healthy lifestyle reduces healthcare costs (advantage), but may be expensive to eat healthily or join a gym (disadvantage). Individual responsibility: each person can make choices (not smoking, exercise, limiting salt) to reduce risk. Society responsibility: governments should provide affordable healthy food, public exercise spaces, education. Conclusion: both individuals and society share responsibility — justified with examples.',
      },
    ],
  },
]
