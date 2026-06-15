import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2016 · VARIANT 2  (isomorphic to biology-nov-2016)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags, widgets) in a NEW biological context — distinct from v1 and
// the source — with self-contained data-driven artefacts (no external images).
//   Q1 Cells:         generic plant/animal → Elodea waterweed / grass leaf / nerve cell
//   Q2 Organisation:  alveolus→muscle      → alveolus→liver cell (levels of organisation)
//   Q3 Gas exchange:  Borch fish gills     → 'Tilapa' fish gills (new graph numbers)
//   Q4 Respiration:   athlete VO₂          → rower VO₂ (point A = VO₂ max)
//   Q5 GM crop:       GM maize vs trad.    → pest-resistant GM wheat vs traditional wheat
//   Q6 GMO ecosystem: Bt cotton            → Bt corn (maize)
//   Q7 Vaccines:      general vaccines     → polio vaccine
//   Q8 Edible vaccine: GM banana           → GM potato edible vaccine
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2016-v2',
  subject: 'Biology',
  session: 'November',
  year: 2016,
  totalMarks: 120,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // Q1 — Cells (14 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Cells',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    marks: 14,
    stem: 'All living things are made of cells. All cells come from other cells. The cell is the basic unit of structure and function in all living things.',
    tasks: [
      {
        label: 'a',
        text: '**Describe** three functions cells perform to maintain life.',
        marks: 6,
        ph: 'Three of: Growth/differentiation — increasing in size/complexity; Respiration — release of energy from nutrients; Reproduction — replication/propagation; Digestion — breakdown of food; Homeostasis — regulation of internal environment; Excretion — elimination of metabolic waste/CO₂.',
      },
      {
        label: 'b',
        text: 'Look at the three cell images below.\n\nCell 1 — an Elodea (waterweed) leaf cell.\nCell 2 — a grass (Poa) leaf cell.\nCell 3 — a human nerve (neuron) cell.\n\n**State** whether each cell is a plant cell or an animal cell. **Justify** your answers by identifying key structures.',
        marks: 6,
        ph: 'Cell 1: plant cell — has cell wall/chloroplasts/large central vacuole. Cell 2: plant cell — has cell wall/chloroplasts/large central vacuole. Cell 3: animal cell — no cell wall/no chloroplasts/has lysosomes.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Cell 1', 'Cell 2', 'Cell 3'],
        widgetOptions: ['Plant cell', 'Animal cell'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 660 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="cytoA" cx="0.4" cy="0.35"><stop offset="0" stop-color="#eef7ef"/><stop offset="1" stop-color="#d3ecd6"/></radialGradient><radialGradient id="cytoB" cx="0.4" cy="0.35"><stop offset="0" stop-color="#fdf0f3"/><stop offset="1" stop-color="#f6d8e0"/></radialGradient></defs><rect width="660" height="240" fill="#ffffff"/><text x="80" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cell 1 — Elodea leaf</text><rect x="20" y="40" width="200" height="160" rx="6" fill="url(#cytoA)" stroke="#2f9e44" stroke-width="4"/><ellipse cx="70" cy="90" rx="13" ry="9" fill="#2f9e44"/><ellipse cx="120" cy="70" rx="13" ry="9" fill="#37b24d"/><ellipse cx="170" cy="95" rx="13" ry="9" fill="#2f9e44"/><ellipse cx="95" cy="150" rx="13" ry="9" fill="#37b24d"/><ellipse cx="160" cy="160" rx="13" ry="9" fill="#2f9e44"/><ellipse cx="120" cy="125" rx="22" ry="18" fill="#9c6b3f" stroke="#6b4423" stroke-width="2"/><text x="120" y="129" font-size="9" text-anchor="middle" fill="#fff">nucleus</text><text x="225" y="56" font-size="9" fill="#2f9e44">cell wall</text><text x="190" y="200" font-size="9" text-anchor="end" fill="#37b24d">chloroplasts</text><text x="300" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cell 2 — grass leaf</text><rect x="240" y="40" width="200" height="160" rx="6" fill="url(#cytoA)" stroke="#2f9e44" stroke-width="4"/><rect x="260" y="60" width="160" height="120" rx="4" fill="none" stroke="#37b24d" stroke-width="1.5" stroke-dasharray="3 3"/><ellipse cx="305" cy="100" rx="11" ry="8" fill="#2f9e44"/><ellipse cx="370" cy="110" rx="11" ry="8" fill="#37b24d"/><ellipse cx="330" cy="155" rx="11" ry="8" fill="#2f9e44"/><ellipse cx="340" cy="120" rx="20" ry="16" fill="#9c6b3f" stroke="#6b4423" stroke-width="2"/><text x="340" y="124" font-size="9" text-anchor="middle" fill="#fff">nucleus</text><text x="345" y="196" font-size="9" text-anchor="middle" fill="#37b24d">large vacuole</text><text x="520" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cell 3 — human nerve</text><circle cx="540" cy="110" r="34" fill="url(#cytoB)" stroke="#c2255c" stroke-width="2.5"/><circle cx="540" cy="110" r="14" fill="#b5179e" stroke="#7a0f6b" stroke-width="2"/><line x1="574" y1="110" x2="650" y2="135" stroke="#c2255c" stroke-width="4"/><g stroke="#c2255c" stroke-width="2"><line x1="510" y1="92" x2="478" y2="74"/><line x1="512" y1="120" x2="480" y2="138"/><line x1="528" y1="78" x2="512" y2="52"/></g><circle cx="600" cy="80" r="5" fill="#e8772e"/><text x="540" y="206" font-size="9" text-anchor="middle" fill="#c2255c">no cell wall · lysosomes</text></svg>',
          },
          caption: 'Cell 1 Elodea leaf, Cell 2 grass leaf, Cell 3 human nerve cell (not to scale).',
        },
      },
      {
        label: 'c',
        text: 'Some single-celled organisms are not easy to identify as either plant or animal.\n\n**Formulate** and **explain** a testable hypothesis which could be used to determine if a single-celled organism you are observing is a plant.',
        marks: 2,
        ph: 'Hypothesis: If the organism is exposed to light then it will produce oxygen, because plant-like organisms photosynthesize to produce oxygen.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q2 — Organisation & Circulation (7 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Organisation & Circulation',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Tissues, Organs & Systems'],
    marks: 7,
    tasks: [
      {
        label: 'a',
        text: 'Look at the five images below.\n\nDrag and drop to **organize** the images into a sequence in order of increasing complexity.\n\nImages: A (liver/organ tissue), B (single nerve cell), C (euglena/single-celled organism), D (frog/whole organism), E (cluster of nerve cells/tissue).',
        marks: 2,
        ph: 'Correct order least → most complex: B → E → A → C → D.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 660 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="660" height="180" fill="#ffffff"/><g><circle cx="70" cy="78" r="20" fill="#e9d5ff" stroke="#9c36b5" stroke-width="2"/><circle cx="70" cy="78" r="7" fill="#6b21a8"/><g stroke="#9c36b5" stroke-width="2"><line x1="90" y1="78" x2="116" y2="70"/><line x1="50" y1="66" x2="30" y2="54"/><line x1="52" y1="92" x2="34" y2="104"/></g><text x="70" y="135" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">B</text><text x="70" y="152" font-size="9" text-anchor="middle" fill="#5b6b78">single nerve cell</text></g><g><g fill="#e9d5ff" stroke="#9c36b5" stroke-width="1.5"><circle cx="178" cy="64" r="13"/><circle cx="205" cy="78" r="13"/><circle cx="180" cy="94" r="13"/><circle cx="158" cy="80" r="13"/></g><text x="183" y="135" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">E</text><text x="183" y="152" font-size="9" text-anchor="middle" fill="#5b6b78">cluster of cells (tissue)</text></g><g><path d="M298,54 q34,-10 56,12 q14,34 -10,54 q-36,10 -54,-14 q-12,-34 8,-52 Z" fill="#fde2c8" stroke="#e8772e" stroke-width="2"/><text x="324" y="135" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">A</text><text x="324" y="152" font-size="9" text-anchor="middle" fill="#5b6b78">liver (organ)</text></g><g><ellipse cx="452" cy="80" rx="20" ry="34" fill="#dff0d8" stroke="#2f9e44" stroke-width="2"/><path d="M452,46 q6,-14 -2,-22" fill="none" stroke="#2f9e44" stroke-width="2"/><circle cx="452" cy="70" r="3" fill="#356b44"/><text x="452" y="135" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">C</text><text x="452" y="152" font-size="9" text-anchor="middle" fill="#5b6b78">euglena (organism)</text></g><g><ellipse cx="575" cy="92" rx="42" ry="24" fill="#cfe3cf" stroke="#2f9e44" stroke-width="2"/><circle cx="540" cy="76" r="14" fill="#cfe3cf" stroke="#2f9e44" stroke-width="2"/><circle cx="535" cy="72" r="4" fill="#1f2d3a"/><circle cx="545" cy="72" r="4" fill="#1f2d3a"/><path d="M610,100 q18,6 12,20" fill="none" stroke="#2f9e44" stroke-width="2"/><text x="575" y="135" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">D</text><text x="575" y="152" font-size="9" text-anchor="middle" fill="#5b6b78">frog (organism)</text></g></svg>',
          },
          caption: 'Five biological images to be ordered by increasing complexity.',
        },
      },
      {
        label: 'b',
        text: '**Describe** the movement of an oxygen molecule from the lungs to a liver cell. Use scientific language and include five points in your answer.',
        marks: 5,
        ph: 'Diffuses across alveolus membrane → into capillary → binds haemoglobin in red blood cell → transported to heart via pulmonary vein → through left atrium/ventricle → leaves via aorta → through hepatic artery → through capillaries → diffuses into liver cell.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q3 — Tilapa Fish Gill Disease (12 marks, Criterion A/C)
  // ─────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Fish Gill Disease',
    topicCanonical: 'Gas Exchange',
    topicGroup: 'Metabolism',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 12,
    stem: 'A river community relies on its catch of a type of fish called Tilapa for its staple diet. The fish are starting to show signs of a gill disease which increases the thickness of the gas exchange surface. The increase in thickness affects the fish\'s oxygen uptake.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Oxygen uptake of Tilapa against percentage of gill affected by disease',
        xLabel: 'Percentage of gill affected',
        yLabel: 'Oxygen uptake',
        xUnit: '%',
        yUnit: 'cm³ h⁻¹',
        dataPoints: [
          { x: 0, y: 0.24 },
          { x: 20, y: 0.20 },
          { x: 40, y: 0.16 },
          { x: 60, y: 0.12 },
          { x: 80, y: 0.08 },
          { x: 100, y: 0.04 },
        ],
        lobf: true,
        xMin: 0, xMax: 100, yMin: 0, yMax: 0.30, xStep: 20, yStep: 0.05,
      },
      caption: 'As the percentage of gill affected increases, oxygen uptake falls.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the graph, **state** the volume of oxygen taken up per hour by healthy fish without gill disease.',
        marks: 1,
        ph: '0.24 cm³ h⁻¹ (accept 0.23–0.25).',
      },
      {
        label: 'b',
        text: 'Using the graph, **outline** the relationship between the amount of gill affected and the oxygen uptake of the fish.',
        marks: 1,
        ph: 'Negative/inverse relationship — as % gill affected increases, oxygen uptake decreases.',
      },
      {
        label: 'c',
        text: '**Compare and contrast** the structure and function of the fish\'s gill to a human lung.',
        marks: 3,
        ph: 'Common: thin membrane, large surface area, moist surfaces, capillaries. Differences: oxygen from water (fish) vs air (human); gills external/lamellae vs lungs internal/alveoli.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="240" fill="#ffffff"/><text x="155" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Fish gill</text><path d="M120,50 q-30,70 0,150" fill="none" stroke="#c2255c" stroke-width="5"/><g stroke="#e8590c" stroke-width="2"><path d="M120,60 q40,4 70,-6"/><path d="M118,80 q44,4 76,-4"/><path d="M116,100 q46,4 80,-2"/><path d="M116,120 q46,2 80,0"/><path d="M118,140 q44,0 78,2"/><path d="M120,160 q42,-2 74,4"/><path d="M122,180 q38,-4 68,6"/></g><text x="205" y="120" font-size="10" fill="#e8590c">lamellae</text><text x="95" y="215" font-size="10" text-anchor="middle" fill="#c2255c">gill arch</text><text x="200" y="60" font-size="9" fill="#0b7285">O₂ from water</text><text x="465" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Human lung</text><path d="M430,50 L430,110" stroke="#5b6b78" stroke-width="4"/><path d="M430,110 L400,140" stroke="#5b6b78" stroke-width="3"/><path d="M430,110 L460,140" stroke="#5b6b78" stroke-width="3"/><circle cx="388" cy="160" r="16" fill="#dbeafe" stroke="#1971c2" stroke-width="2"/><circle cx="412" cy="172" r="16" fill="#dbeafe" stroke="#1971c2" stroke-width="2"/><circle cx="470" cy="160" r="16" fill="#dbeafe" stroke="#1971c2" stroke-width="2"/><circle cx="448" cy="174" r="16" fill="#dbeafe" stroke="#1971c2" stroke-width="2"/><text x="430" y="40" font-size="10" text-anchor="middle" fill="#5b6b78">trachea</text><text x="500" y="160" font-size="10" fill="#1971c2">alveoli</text><text x="430" y="216" font-size="9" text-anchor="middle" fill="#0b7285">O₂ from air</text></svg>',
          },
          caption: 'A fish gill (left) and human lung (right) as gas-exchange surfaces.',
        },
      },
      {
        label: 'd',
        text: 'Using the information provided, **suggest** why increased thickness of gills would impact oxygen uptake.',
        marks: 2,
        ph: 'Increased thickness → longer diffusion distance → oxygen cannot diffuse as quickly/efficiently across gas exchange surface → reduced oxygen uptake.',
      },
      {
        label: 'e',
        text: 'If the gill disease spreads through the fish population, **discuss** the potential consequences for the biological community. In your answer consider:\n- how the food chain will be affected\n- the size of the fish population\n- the effects of the activities of the diseased fish on the community\n- the effects on the human community that harvests the fish.',
        marks: 5,
        ph: 'Reduced fish numbers → food chain disruption; fish population declines; reduced protein/food source; economic hardship for fishing community.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q4 — Rower Fitness & Oxygen Consumption (9 marks, Criterion C)
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Athlete Fitness & Oxygen Consumption',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Circulation'],
    marks: 9,
    stem: 'One indicator of fitness is a measurement of how efficiently the body can consume oxygen. A coach measures the oxygen consumption of a rower as the stroke rate on a rowing machine is increased. The experiment must be designed to take account of variables.',
    tasks: [
      {
        label: 'a',
        text: 'List **two** variables that should be controlled during an experiment to measure maximum oxygen consumption.',
        marks: 2,
        ph: 'Any two, e.g.: duration of rowing; time of day; age of rower; body mass; type of rowing machine.',
      },
      {
        label: 'b',
        text: '**State** the type of relationship shown in the graph of oxygen consumption and exercise intensity.',
        marks: 2,
        ph: 'Positive/linear relationship — oxygen consumption increases with exercise intensity up to VO₂ max.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="320" fill="#ffffff"/><line x1="70" y1="270" x2="470" y2="270" stroke="#2c3e50" stroke-width="2"/><line x1="70" y1="270" x2="70" y2="40" stroke="#2c3e50" stroke-width="2"/><text x="270" y="305" font-size="13" text-anchor="middle" fill="#1f2d3a">Exercise intensity (stroke rate / spm)</text><text x="24" y="160" font-size="13" text-anchor="middle" fill="#1f2d3a" transform="rotate(-90 24 160)">Oxygen consumption / dm³ min⁻¹</text><polyline points="70,255 145,210 220,168 295,128 340,108" fill="none" stroke="#0b7285" stroke-width="3"/><polyline points="340,108 405,106 470,108" fill="none" stroke="#0b7285" stroke-width="3"/><circle cx="340" cy="108" r="6" fill="#e8590c"/><text x="355" y="98" font-size="13" font-weight="700" fill="#e8590c">A</text><g font-size="10" fill="#5b6b78"><text x="70" y="286">0</text><text x="205" y="286">20</text><text x="340" y="286">40</text><text x="468" y="286">60</text></g></svg>',
          },
          caption: 'Oxygen consumption against exercise intensity; point A marks VO₂ max.',
        },
      },
      {
        label: 'c',
        text: '**Describe** the pattern between oxygen consumption and exercise intensity and **explain** what is happening on a cellular level **just before** and **just after** point A.',
        marks: 5,
        ph: 'Before A: O₂ consumption increases; cells use more O₂ for energy (aerobic respiration). After A (VO₂ max): O₂ consumption plateaus; cells cannot consume more O₂; switch to anaerobic respiration.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="320" fill="#ffffff"/><line x1="70" y1="270" x2="470" y2="270" stroke="#2c3e50" stroke-width="2"/><line x1="70" y1="270" x2="70" y2="40" stroke="#2c3e50" stroke-width="2"/><text x="270" y="305" font-size="13" text-anchor="middle" fill="#1f2d3a">Exercise intensity (stroke rate / spm)</text><text x="24" y="160" font-size="13" text-anchor="middle" fill="#1f2d3a" transform="rotate(-90 24 160)">Oxygen consumption / dm³ min⁻¹</text><polyline points="70,255 145,210 220,168 295,128 340,108" fill="none" stroke="#0b7285" stroke-width="3"/><polyline points="340,108 405,106 470,108" fill="none" stroke="#0b7285" stroke-width="3"/><line x1="340" y1="108" x2="340" y2="270" stroke="#94a3ad" stroke-width="1" stroke-dasharray="4 4"/><circle cx="340" cy="108" r="6" fill="#e8590c"/><text x="355" y="98" font-size="13" font-weight="700" fill="#e8590c">A</text><text x="150" y="150" font-size="11" fill="#2f9e44">aerobic — rising</text><text x="375" y="135" font-size="11" fill="#c2255c">plateau (VO₂ max)</text></svg>',
          },
          caption: 'Detail of the oxygen-consumption curve either side of point A (VO₂ max).',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — GM Wheat Investigation (20 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'GM Maize Investigation',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    marks: 20,
    stem: 'Scientists studied the growth of pest-resistant GM wheat grown without pesticide compared to traditional (non-GM) wheat grown with pesticide. One independent variable is the type of wheat used.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="220" fill="#ffffff"/><rect x="0" y="180" width="560" height="40" fill="#e7d6b8"/><text x="150" y="28" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">GM wheat (no pesticide)</text><g stroke="#2f9e44" stroke-width="4" fill="none"><path d="M90,180 q-3,-55 -2,-100"/><path d="M120,180 q2,-58 0,-104"/><path d="M150,180 q3,-54 5,-98"/><path d="M180,180 q-2,-56 2,-100"/><path d="M210,180 q3,-52 2,-96"/></g><g fill="#d4a017"><ellipse cx="86" cy="76" rx="6" ry="13"/><ellipse cx="120" cy="72" rx="6" ry="13"/><ellipse cx="155" cy="80" rx="6" ry="13"/><ellipse cx="184" cy="78" rx="6" ry="13"/><ellipse cx="212" cy="82" rx="6" ry="13"/></g><line x1="60" y1="180" x2="60" y2="66" stroke="#5b6b78" stroke-width="1"/><text x="48" y="128" font-size="9" text-anchor="middle" fill="#5b6b78" transform="rotate(-90 48 128)">height</text><text x="410" y="28" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Traditional wheat (pesticide)</text><g stroke="#37b24d" stroke-width="4" fill="none"><path d="M350,180 q-3,-56 -2,-100"/><path d="M380,180 q2,-58 0,-102"/><path d="M410,180 q3,-54 5,-100"/><path d="M440,180 q-2,-56 2,-98"/><path d="M470,180 q3,-54 2,-96"/></g><g fill="#d4a017"><ellipse cx="346" cy="76" rx="6" ry="13"/><ellipse cx="380" cy="74" rx="6" ry="13"/><ellipse cx="415" cy="78" rx="6" ry="13"/><ellipse cx="444" cy="78" rx="6" ry="13"/><ellipse cx="472" cy="82" rx="6" ry="13"/></g></svg>',
      },
      caption: 'Pest-resistant GM wheat grown without pesticide and traditional wheat grown with pesticide.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** one other independent variable being investigated in this study.',
        marks: 1,
        ph: 'Use of pesticide (with pesticide vs without pesticide).',
      },
      {
        label: 'b',
        text: '**Select** an appropriate hypothesis that could have been tested in this experiment.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'Crops sprayed with pesticide grow better than crops that are not sprayed with pesticide.',
          'GM wheat can produce more growth without pesticide than traditional wheat.',
          'GM wheat can produce the same growth as traditional wheat without pesticide.',
          'GM wheat produces better growth than traditional wheat.',
        ],
        ph: 'Option C: GM wheat can produce the same growth as traditional wheat without pesticide.',
      },
      {
        label: 'c',
        text: '**Label** the table for the scientists to collect the height of the plants. **Select** and **measure** suitable plants and record your data to an appropriate number of significant figures.',
        marks: 4,
        ph: 'Table headers include group names and unit (m). At least 5 values per group, 3–4 significant figures, all values 0.6–1.0 m.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Plant number', 'GM wheat — height / m', 'Traditional wheat — height / m'],
            rows: [
              ['1', '', ''],
              ['2', '', ''],
              ['3', '', ''],
              ['4', '', ''],
              ['5', '', ''],
            ],
          },
          caption: 'Blank results table for the student to label and complete with measured plant heights.',
        },
      },
      {
        label: 'd',
        text: '**Calculate** the mean (average) of your data for each group.',
        marks: 2,
        ph: 'Mean in range 0.78–0.82 m; expressed to 3 or 4 significant figures.',
      },
      {
        label: 'e',
        text: '**Select** a graph to present this data. **Label** the axes of your graph and give it a suitable title.',
        marks: 3,
        ph: 'Bar graph selected; x-axis: group names; y-axis: height (m); suitable title.',
      },
      {
        label: 'f',
        text: '**Analyse** the results of this experiment using scientific reasoning.',
        marks: 3,
        ph: 'Both groups have similar heights → GM wheat without pesticide achieves same growth as traditional wheat with pesticide → new gene enables the plant to resist pests itself.',
      },
      {
        label: 'g',
        text: '**Discuss** and **evaluate** the method used to investigate the growth of GM wheat. In your answer consider:\n- one feature of the method that ensures that it is valid\n- one feature that could be changed to improve the validity\n- how the investigation could be extended\n- how your suggested extension improves the validity of conclusions.',
        marks: 5,
        ph: 'Strength: number of trials/controls. Limitation: two variables changed simultaneously. Extension: test GM wheat with pesticide. Justification: confirms effects not due to pesticide use alone.',
      },
      {
        label: 'h',
        text: 'In this experiment height was chosen as a measure of growth.\n\nOther than height, **suggest** another way the scientists could have chosen to measure growth of the wheat plants.',
        marks: 1,
        ph: 'Biomass of wheat; number/yield of grains per ear; number of tillers/leaves.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Bt Corn & GMO Ecosystems (30 marks, Criterion B/D)
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Bt Cotton & GMO Ecosystems',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Pollution & Conservation'],
    marks: 30,
    stem: 'Bt corn (maize) is a genetically modified (GM) crop plant that has been developed to produce its own pesticide which kills or deters insects from eating the plant. However, this is not a selective pesticide and the plant\'s pollen itself can be toxic to other organisms.',
    tasks: [
      {
        label: 'a',
        marks: 17,
        text: '**Design** one experiment that could be conducted to study the possible effects of growing Bt corn on an ecosystem. Your answer should include:\n- a testable hypothesis\n- identification of the variables\n- a description of the method\n- a description of how to manipulate the variables.',
        ph: 'Hypothesis: Growing Bt corn will reduce insect biodiversity compared to non-GM corn. IV: type of corn; DV: insect species diversity; CV: soil type, water, sunlight. Method: plant each type in separate plots; sample insects regularly; compare diversity. Safety: handle materials carefully.',
      },
      {
        label: 'b',
        marks: 13,
        text: 'Consider the wider use of genetically modified organisms (GMOs) either using examples from your MYP studies or from earlier questions. **Discuss** and **evaluate** two different implications of how the use of GMOs could impact an ecosystem. In your extended piece of writing you should support your answer with scientific evidence and explanations considering:\n- what is meant by the term ecosystem\n- the advantages and disadvantages of GMOs\n- the consequences we should consider before introducing GMOs from both an ethical and an economic perspective.',
        ph: 'Define ecosystem. Advantage: pest resistance, higher yield. Disadvantage: GM genes spreading, harm to non-target species, reduced biodiversity. Ethical: manipulation of organisms. Economic: cost vs benefit. Concluding appraisal.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Polio Vaccine & Immunity (7 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Vaccines & Immunity',
    topicCanonical: 'Vaccination',
    topicGroup: 'Cells',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 7,
    stem: 'Advances in human capability mean that vaccines are now available to treat diseases that once killed or paralysed millions of people every year. The polio vaccine is part of the Global Vaccine Action Plan, a framework designed to increase equal access to vaccines for people in all communities.',
    tasks: [
      {
        label: 'a',
        text: '**State** the meaning of the term *vaccine*.',
        marks: 2,
        ph: 'A preparation containing killed/weakened pathogens administered to stimulate specific antibody production / immune response.',
      },
      {
        label: 'b',
        text: '**Describe** how vaccines protect organisms against infectious diseases caused by pathogens.',
        marks: 5,
        ph: 'Pathogens have antigens; vaccine administered; body produces antibodies via B lymphocytes; antibodies bind antigens to neutralize; memory cells formed for lasting immunity.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q8 — GM Potatoes as Edible Vaccines (21 marks, Criterion A/D)
  // ─────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'GM Bananas as Edible Vaccines',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Vaccination', 'Ethical Implications'],
    marks: 21,
    stem: 'Scientists have been testing several crops to use them as edible vaccines against tropical water-related diseases such as hepatitis, cholera, malaria and polio. The potato is a suitable crop for this purpose.',
    tasks: [
      {
        label: 'a',
        text: 'A scientist would like to test if edible vaccines are as effective as traditional vaccines. **Identify** the dependent, independent and control variables in this study. For each one, justify your choice.',
        marks: 6,
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: ['Type of vaccine (GM potato vs traditional)', 'Immune response / antibody level', 'Age of participants', 'Health status of participants', 'Dosage amount', 'Type of disease tested against'],
        ph: 'IV: type of vaccine (what is changed). DV: immune response/antibody level (what is measured). CV: age, health status, dosage.',
      },
      {
        label: 'b',
        marks: 15,
        text: '**Discuss** and **evaluate** how using GM potatoes as edible vaccines in tropical developing countries improves access to vaccines for protection against diseases. In this extended piece of writing you should consider:\n- advantages and disadvantages of using GM potatoes compared to traditional vaccines\n- the consequences for a community as a result of an improved immune system\n- wider effects on the ecosystem\n- ethical issues related to vaccination.',
        ph: 'Advantages: cheap, no refrigeration, no needles, accessible. Disadvantages: dosage control, GM concerns. Community: reduced disease burden. Ecosystem: less pharmaceutical waste. Ethical: consent, GM food concerns. Appraisal.',
      },
    ],
  },
]
