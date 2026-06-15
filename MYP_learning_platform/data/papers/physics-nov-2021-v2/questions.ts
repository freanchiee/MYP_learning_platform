import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2021 · VARIANT 2  (isomorphic to physics-nov-2021)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags, widgets) in a NEW real-world context, with self-contained
// data-driven artefacts (no figImages). Numbers recomputed throughout.
//   Q1 Kinetic theory:    smoke particles → dust motes in a sunbeam + car tyre heated
//   Q2 Energy + E=mc²:     child on slide → zip-line rider; muon–antimuon annihilation
//   Q3 Red-shift/Hubble:   starlight → light from a receding galaxy cluster (supernova)
//   Q4 Ohm's law:          component X/Y → carbon resistor X vs sensor thermistor/diode Y
//   Q5 Resistance of wire: generic wire → copper conductor in an undersea telecom cable
//   Q6 Series circuit:     decorative lights → model-railway signal-gantry bulbs
//   Q7 Renewable energy:   biomass/geothermal/tidal → tidal stream / geothermal / biomass
//   Q8 Island energy:      Malta → a remote Pacific atoll (solar cable / wind / SMR)
//
// HARDCODED widgets kept exactly (they render fixed self-graded content):
//   Q2b energy_chain · Q3a/Q5a radio_select · Q7a variable_classify · Q7b energy_chain
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2021-v2',
  subject: 'Physics',
  session: 'November',
  year: 2021,
  totalMarks: 98,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Kinetic Theory & Brownian Motion (7 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Physics',
    marks: 7,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['kinetic theory', 'Brownian motion', 'gas pressure', 'particle model'], level: 'proficient' },
    stem: 'Kinetic theory explains the random "jiggling" motion of small particles in a fluid. Tiny dust motes caught in a sunbeam, or fine smoke particles drawn into a small glass cell and viewed under a microscope, are seen to dance about in continuous, random, jerky paths even though the surrounding air is perfectly still.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="dust" cx="0.4" cy="0.35"><stop offset="0" stop-color="#d8d2c4"/><stop offset="1" stop-color="#8a8270"/></radialGradient><marker id="ah1b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="300" fill="#ffffff"/><circle cx="230" cy="150" r="120" fill="#fbf7ea" stroke="#caa64a" stroke-width="3"/><circle cx="230" cy="150" r="120" fill="none" stroke="#ecd9a0" stroke-width="10" opacity="0.4"/><text x="230" y="40" font-size="12" text-anchor="middle" fill="#8a6a18">smoke cell under the microscope</text><g stroke="#bbb39c" stroke-width="1" fill="#d9d2bf"><circle cx="180" cy="110" r="3"/><circle cx="270" cy="120" r="3"/><circle cx="200" cy="200" r="3"/><circle cx="290" cy="190" r="3"/><circle cx="160" cy="160" r="3"/><circle cx="250" cy="160" r="3"/><circle cx="300" cy="140" r="3"/><circle cx="210" cy="148" r="3"/></g><text x="328" y="100" font-size="11" fill="#8a8270">air molecules</text><line x1="316" y1="104" x2="296" y2="135" stroke="#8a8270" stroke-width="0.8" marker-end="url(#ah1b)"/><circle cx="232" cy="156" r="14" fill="url(#dust)" stroke="#5a5444" stroke-width="1.5"/><path d="M232,156 l-26,-18 l30,-4 l-16,28 l24,10 l-12,-22 l20,-14" fill="none" stroke="#c0392b" stroke-width="1.6" marker-end="url(#ah1b)"/><text x="320" y="210" font-size="11" fill="#5a5444">smoke particle (random path)</text><line x1="318" y1="206" x2="250" y2="168" stroke="#5a5444" stroke-width="0.8"/></svg>',
      },
      caption: 'A smoke particle viewed under a microscope follows a continuous random path as the invisible air molecules collide with it.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A diagram shows a smoke particle inside a glass smoke cell. **Label** the diagram to show which particles are visible and which particles are not visible in this Brownian-motion experiment.',
        marks: 1,
        ph: 'Smoke particles (larger, visible under the microscope). Air molecules (much smaller, invisible — but their collisions make the smoke particle move).',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'A diagram shows air molecules colliding with the walls of a sealed container at two different temperatures. **Label** the diagram to correctly show which situation represents the higher temperature.',
        marks: 1,
        ph: 'Higher temperature = molecules moving faster with greater kinetic energy → more frequent and harder collisions with the walls. All correct for the mark.',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'A car is driven at high speed on a motorway. The air sealed inside one of its rigid tyres warms up from **15 °C** to **65 °C** as the tyre flexes and the road friction heats it.\n\n**Explain** why the pressure of the air inside the tyre increases as it is heated. In your answer refer to the particles of the gas.',
        marks: 3,
        ph: 'When heated, the air particles gain more kinetic energy and move faster. They collide with the inside walls of the tyre more frequently and with greater force. Since pressure = force per unit area, the pressure of the gas increases.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'Use your knowledge of kinetic theory to **suggest** the cause of the observed random movement of the smoke particles in the air.',
        marks: 2,
        ph: 'Air molecules are in constant, random motion (even though they are far too small to be seen). They continuously collide with the larger, visible smoke particles. Because these collisions are random and unequal from all sides, the smoke particles are pushed in random directions, causing Brownian motion.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Energy Transformations & E = mc² (8 marks) Criterion A
  // Q2b energy_chain widget is HARDCODED — kept exactly; surrounding numbers recomputed
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power',
    marks: 8,
    topicCanonical: 'Nuclear Reactions & Energy',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'work-energy', topics: ['energy transformations', 'kinetic energy', 'Sankey diagrams', 'E = mc²'], level: 'proficient' },
    stem: 'During his "miracle year" Einstein showed that the mass and the energy of a stationary object are linked by the equation E = mc², where E is the energy of the object, m is the object\'s mass, and c is the speed of light.',
    tasks: [
      {
        label: 'a',
        text: '**Label** each quantity in the equation E = mc² with its SI unit (Système international d\'unités).\n\n| Quantity | SI Unit |\n|----------|---------|\n| E | ? |\n| m | ? |\n| c | ? |',
        marks: 1,
        ph: 'E → joule (J)\nm → kilogram (kg)\nc → metre per second (m s⁻¹)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'A rider of mass **40 kg** descends from rest down a long zip-line cable. The Sankey diagram shows the energy transformations as the rider descends.\n\nThe total input energy is **1000 J**. The kinetic energy at the bottom is **900 J**. The sound energy produced is **15 J**.\n\n**Select** the correct energy form and **calculate** the missing energy value for the Sankey diagram.',
        marks: 2,
        widget: 'energy_chain',
        ph: 'Missing form: the remaining energy lost as heat (to friction in the pulley/cable) as the rider descends.\nMissing value: 1000 − 900 − 15 = 85 J.\n(Award marks for correct energy form and correct calculation.)',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The mass of the rider is **40 kg**. Use information from the Sankey diagram to **calculate** the rider\'s velocity at the bottom of the zip-line. Give your answer to **2 significant figures**.',
        marks: 3,
        ph: 'KE = ½mv²\n900 = ½ × 40 × v²\n900 = 20 × v²\nv² = 900/20 = 45\nv = √45 = 6.708... ≈ **6.7 m s⁻¹**',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The laws of conservation of energy and Einstein\'s mass–energy relationship (E = mc²) apply when understanding transformations in particle physics. An antimuon is an example of anti-matter. When a muon and an antimuon meet, all of their mass is turned into energy.\n\nUse the information in the table below and the speed of light c = 3.0 × 10⁸ m s⁻¹ to **calculate** how much energy is released in this process.\n\n| Particle | Mass / kg |\n|----------|----------|\n| Muon | 1.88 × 10⁻²⁸ |\n| Antimuon | 1.88 × 10⁻²⁸ |',
        marks: 2,
        ph: 'Total mass = 2 × 1.88 × 10⁻²⁸ = 3.76 × 10⁻²⁸ kg\nE = mc²\n= 3.76 × 10⁻²⁸ × (3.0 × 10⁸)²\n= 3.76 × 10⁻²⁸ × 9.0 × 10¹⁶\n= 3.384 × 10⁻¹¹ J ≈ 3.4 × 10⁻¹¹ J',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Red-shift & Hubble's Law (12 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Astrophysics',
    marks: 12,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['red-shift', 'electromagnetic spectrum', 'Hubble\'s law', 'Big Bang'], level: 'proficient' },
    stem: 'When a star explodes as a supernova, its light can briefly outshine an entire galaxy. By studying the light from supernovae in very distant galaxy clusters, astronomers find it is shifted towards the red end of the spectrum — a phenomenon known as red-shift.',
    tasks: [
      {
        label: 'a',
        text: 'Light is an example of a wave.\n\n**Select** the best description of a light wave.\n\nA. Longitudinal electromagnetic\nB. Transverse electromagnetic\nC. Transverse mechanical\nD. Longitudinal mechanical',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Longitudinal electromagnetic', 'B. Transverse electromagnetic', 'C. Transverse mechanical', 'D. Longitudinal mechanical'],
        ph: 'B',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'Here is a graphical representation of a light wave from a **stationary** galaxy cluster seen by an observer.\n\nIn astronomical observations, the properties of light can be affected by the motion of objects. **Select** the graph that shows how the appearance of the wave would change if the cluster was **moving away** from the observer. **Justify** your answer.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><text x="40" y="30" font-size="12" font-weight="700" fill="#1f2d3a">Stationary source</text><line x1="40" y1="60" x2="520" y2="60" stroke="#cbd5db" stroke-width="1"/><path d="M40,60 q15,-22 30,0 q15,22 30,0 q15,-22 30,0 q15,22 30,0 q15,-22 30,0 q15,22 30,0 q15,-22 30,0 q15,22 30,0 q15,-22 30,0 q15,22 30,0 q15,-22 30,0 q15,22 30,0 q15,-22 30,0 q15,22 30,0 q15,-22 30,0 q15,22 30,0" fill="none" stroke="#0b7285" stroke-width="2.5"/><text x="40" y="130" font-size="12" font-weight="700" fill="#1f2d3a">Graph B</text><path d="M40,160 q22,-26 44,0 q22,26 44,0 q22,-26 44,0 q22,26 44,0 q22,-26 44,0 q22,26 44,0 q22,-26 44,0 q22,26 44,0 q22,-26 44,0 q22,26 44,0 q22,-26 44,0" fill="none" stroke="#f08c00" stroke-width="2.5"/><text x="486" y="150" font-size="10" fill="#f08c00">longer λ</text><text x="40" y="230" font-size="12" font-weight="700" fill="#1f2d3a">Graph C</text><path d="M40,260 q10,-22 20,0 q10,22 20,0 q10,-22 20,0 q10,22 20,0 q10,-22 20,0 q10,22 20,0 q10,-22 20,0 q10,22 20,0 q10,-22 20,0 q10,22 20,0 q10,-22 20,0 q10,22 20,0 q10,-22 20,0 q10,22 20,0 q10,-22 20,0 q10,22 20,0 q10,-22 20,0 q10,22 20,0 q10,-22 20,0 q10,22 20,0 q10,-22 20,0 q10,22 20,0 q10,-22 20,0 q10,22 20,0" fill="none" stroke="#94a3ad" stroke-width="2"/><text x="490" y="250" font-size="10" fill="#94a3ad">shorter λ</text></svg>',
          },
          caption: 'The stationary-source wave (teal) compared with Graph B (stretched) and Graph C (compressed).',
        },
        ph: 'Select: Graph B (the graph showing increased wavelength — longer, more stretched-out wave).\nJustification: When the source moves away, the wavelength is stretched (the Doppler effect). The waves are "spread out", so the wavelength increases and the frequency decreases — the light is shifted towards the red end of the spectrum.',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The phenomenon in part (b) is known as **red-shift**. **Suggest** the meaning of the term red-shift by considering the visible light emitted by a distant galaxy cluster and referring to the electromagnetic spectrum.',
        marks: 2,
        ph: 'The wavelength of light emitted from galaxy clusters that are moving away from us has increased (been stretched). Since red light has the longest wavelength in the visible spectrum, the light appears shifted towards the red end of the spectrum — the cluster appears more red than it actually is.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'Scientists use information about red-shift to make predictions about the speed of expansion of the universe. The graph below shows the relationship between how far a galaxy cluster is from Earth and how quickly it is moving. Astronomical distances are very large; on this graph, these distances are shown in units called megaparsecs (Mpc).\n\n**Draw** a line of best fit on the graph.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'distance / Mpc',
            yLabel: 'recession velocity / km s⁻¹',
            points: [[60, 4500], [150, 10200], [240, 17600], [350, 24100], [460, 33800], [560, 39900], [680, 49600]],
            readouts: [{ x: 350, note: 'velocity rises with distance — draw the best-fit line through the origin' }],
            dataMaxX: 680,
          },
          caption: 'Recession velocity of galaxy clusters against their distance from Earth (drag the crosshair to read values).',
        },
        ph: 'Draw a straight line passing through the origin, with roughly equal numbers of data points above and below the line. The line should have a positive gradient (as distance increases, velocity increases).',
        level: 'developing',
      },
      {
        label: 'e',
        text: '**Outline** the relationship shown on the graph in part (d).',
        marks: 2,
        ph: 'As the distance from Earth increases, the recession velocity increases. The relationship is proportional (the line passes through the origin and is straight), meaning velocity is directly proportional to distance.',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'The relationship in part (d) is known as **Hubble\'s law**. **Suggest** how the Big Bang theory is supported by Hubble\'s law.',
        marks: 2,
        ph: 'Hubble\'s law shows that all galaxies are moving away from us, with more distant galaxies moving faster. If we trace the expansion backwards, all matter originated from a single point — consistent with the Big Bang theory. The expanding universe supports the idea that the universe began from a very hot, dense state.',
        level: 'proficient',
      },
      {
        label: 'g',
        text: 'In 1930, Hubble used the gradient of a line of best fit on the graph to estimate the age of the universe as 1.8 billion years. We now estimate the age of the universe to be **13.8 billion years**.\n\n**Suggest** why this estimate has changed using the graph.',
        marks: 1,
        ph: 'The newer estimate is based on more data (galaxy clusters observed both in 1930 and today). With more data points, the line of best fit is more accurate, giving a better estimate of the gradient and therefore a more reliable age for the universe.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Ohm's Law & Non-Ohmic Conductors (16 marks) Criterion C
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Electricity',
    marks: 16,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['Ohm\'s law', 'resistance', 'current-voltage graphs', 'circuit design'], level: 'proficient' },
    stem: 'Georg Ohm was an important figure in describing the physics of electricity. He is most well-known for the relationship we now call Ohm\'s law, which states that the current (I) flowing through a conductor is proportional to the voltage (V) across it. Materials that follow this relationship are known as ohmic conductors; materials that do not are non-ohmic conductors.',
    artefact: {
      component: 'CircuitDiagram',
      data: {
        topology: 'series',
        components: [
          { type: 'battery', label: 'variable supply' },
          { type: 'ammeter', label: 'A' },
          { type: 'resistor', label: 'component X' },
        ],
      },
      caption: 'The circuit used to measure the current through component X for a range of voltages.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A group of MYP students collect current and voltage data for an unknown component, which we will call **component X** (a carbon resistor from a temperature-sensor circuit). Their notebook is shown. One of the measurements is incomplete. **Organise and present** the students\' results in a table of raw data.\n\nNote: The missing value for 2.0 V must be measured from the interactive circuit (reading from the ammeter shown). A reading of **320 mA** is recorded for 2.0 V.',
        marks: 6,
        ph: '| Voltage / V | Current / A |\n|-------------|-------------|\n| 0.5 | 0.08 |\n| 1.0 | 0.16 |\n| 1.5 | 0.24 |\n| 2.0 | 0.32 |\n| 2.5 | 0.42 |\n\nMarks awarded for: column headers with V and A; units in headers only; data in ascending order of voltage; 320 mA correctly converted to 0.32 A; 0.42 A correctly rounded to 2 d.p.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Before collecting the data, the students formulated the following hypothesis:\n\n*"If the voltage across component X doubles then the current will also double because component X is an ohmic conductor and therefore current is proportional to voltage."*\n\n**Explain** whether the data in the table support the students\' hypothesis. You should include calculations to support your answer.',
        marks: 3,
        ph: 'Test: double the voltage and check if current doubles.\nAt 0.5V: I = 0.08A; at 1.0V: I = 0.16A → current doubled when voltage doubled ✓\nAt 1.0V→2.0V: 0.16A → 0.32A → doubled ✓ (V/I ratio constant ≈ 6.25 Ω).\nHowever: at 2.5V: I = 0.42A — slightly above the expected 0.40A (one small anomalous reading).\nConclusion: The data support the hypothesis within experimental precision; component X behaves as an ohmic conductor apart from the one small anomaly at 2.5V.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Another group of MYP students collect current and voltage data for a different unknown component, which we will call **component Y** (a thermistor used in the same sensor circuit). The graph of their results is shown.\n\nUsing the graph, **outline** whether component Y is an ohmic conductor. Justify your answer.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            xLabel: 'Voltage', xUnit: 'V', yLabel: 'Current', yUnit: 'A',
            title: 'Component Y (thermistor)',
            dataPoints: [{ x: 0, y: 0 }, { x: 1.0, y: 0.20 }, { x: 2.0, y: 0.40 }, { x: 3.0, y: 0.66 }, { x: 4.0, y: 1.00 }, { x: 5.0, y: 1.44 }, { x: 6.0, y: 1.98 }],
            xMin: 0, xMax: 6, yMin: 0, yMax: 2.2, xStep: 1, yStep: 0.4,
          },
          caption: 'Current–voltage graph for component Y (the thermistor).',
        },
        ph: 'The graph of current vs voltage for component Y is **not a straight line** (the gradient is not constant — the curve becomes steeper at higher voltages). Therefore component Y is a **non-ohmic conductor** (it does not obey Ohm\'s law).',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'In the investigation of *component X*, a table of data was used to explore a relationship, whereas in the investigation of *component Y*, a graph was used.\n\n**Suggest** why a graph is a more appropriate presentation of this data.',
        marks: 1,
        ph: 'A graph gives an easier and clearer visual representation of the relationship between current and voltage. It immediately shows whether the relationship is linear (ohmic) or non-linear (non-ohmic), which is harder to identify from a table of numbers alone.',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'Using data from the graph in part (c) and the formula sheet, **calculate** the resistance of component Y:\n\n(i) when a voltage of **1.0 V** is across it\n(ii) when a current of **0.40 A** flows through it',
        marks: 3,
        artefact: {
          component: 'LineGraph',
          data: {
            xLabel: 'Voltage', xUnit: 'V', yLabel: 'Current', yUnit: 'A',
            title: 'Component Y (thermistor)',
            dataPoints: [{ x: 0, y: 0 }, { x: 1.0, y: 0.20 }, { x: 2.0, y: 0.40 }, { x: 3.0, y: 0.66 }, { x: 4.0, y: 1.00 }, { x: 5.0, y: 1.44 }, { x: 6.0, y: 1.98 }],
            xMin: 0, xMax: 6, yMin: 0, yMax: 2.2, xStep: 1, yStep: 0.4,
          },
          caption: 'Current–voltage graph for component Y (the thermistor).',
        },
        ph: '(i) From graph: at V = 1.0V, I ≈ 0.20A\nR = V/I = 1.0/0.20 = **5.0 Ω**\n\n(ii) From graph: at I = 0.40A, V ≈ 2.0V\nR = V/I = 2.0/0.40 = **5.0 Ω**\n\nUnit (Ω or ohms) must appear in at least one answer. (At low voltage the resistance is high; as the thermistor warms it falls, so the resistance read at higher currents is smaller.)',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'An MYP student is interested in model-railway lighting and how the number of bulbs connected in series could affect the size of the current flowing through them.\n\n**Construct** a circuit diagram to show how you would measure the current flowing through **two bulbs** connected in **series**. The circuit diagram has been started for you.',
        marks: 1,
        ph: 'Draw: two bulbs (light bulb symbols) connected in series with each other and with the battery. An ammeter (A in a circle) connected in series with the bulbs to measure the current flowing through them. No extra components in series with the bulbs.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Resistance of a Wire (14 marks) Criterion C
  // Context: copper conductor in an undersea telecom cable; R = ρl/A
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Electricity',
    marks: 14,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['resistance', 'resistivity', 'systematic error', 'investigation'], level: 'proficient' },
    stem: 'An MYP student is modelling the copper conductor inside an undersea telecommunications cable and investigates the factors that affect the resistance of a wire. Their research shows that: resistance = resistivity × length ÷ area, or using symbols R = ρl/A. The quantity known as resistivity (ρ) is determined by the material that the conductor is made out of.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wire5b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d99a5a"/><stop offset="0.5" stop-color="#b06f30"/><stop offset="1" stop-color="#d99a5a"/></linearGradient></defs><rect width="560" height="240" fill="#ffffff"/><rect x="40" y="170" width="480" height="14" rx="3" fill="#e7eef2" stroke="#94a3ad"/><g font-size="10" fill="#5b6b78"><text x="40" y="205">0</text><text x="158" y="205">0.25</text><text x="278" y="205">0.50</text><text x="398" y="205">0.75</text><text x="500" y="205">1.00 m</text></g><line x1="160" y1="170" x2="160" y2="184" stroke="#5b6b78"/><line x1="280" y1="170" x2="280" y2="184" stroke="#5b6b78"/><line x1="400" y1="170" x2="400" y2="184" stroke="#5b6b78"/><line x1="60" y1="120" x2="500" y2="120" stroke="url(#wire5b)" stroke-width="7"/><line x1="60" y1="120" x2="500" y2="120" stroke="#7a4a18" stroke-width="2" opacity="0.4"/><text x="280" y="106" font-size="12" text-anchor="middle" fill="#b06f30">copper conductor (length l, fixed cross-section A)</text><circle cx="60" cy="120" r="6" fill="#2c3e50"/><circle cx="500" cy="120" r="6" fill="#2c3e50"/><line x1="60" y1="120" x2="60" y2="90" stroke="#2c3e50" stroke-width="2"/><line x1="500" y1="120" x2="500" y2="90" stroke="#2c3e50" stroke-width="2"/><circle cx="280" cy="55" r="26" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="280" y="60" font-size="14" font-weight="700" fill="#0b7285" text-anchor="middle">Ω</text><line x1="60" y1="90" x2="254" y2="60" stroke="#2c3e50" stroke-width="2"/><line x1="500" y1="90" x2="306" y2="60" stroke="#2c3e50" stroke-width="2"/><text x="280" y="30" font-size="11" text-anchor="middle" fill="#0b7285">ohmmeter reads resistance of the conductor</text></svg>',
      },
      caption: 'A length of the copper conductor is clamped along a metre rule; an ohmmeter reads its resistance for each length.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student investigates how the **length** of the conductor is related to its resistance, keeping the area constant.\n\nUsing information from the student\'s research, **select** what is represented by the **gradient** of a graph of resistance (y-axis) against length (x-axis).\n\nA. ρ × A\nB. ρ / A\nC. ρ\nD. A / ρ',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. ρ × A', 'B. ρ / A', 'C. ρ', 'D. A / ρ'],
        ph: 'B',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'The student investigates how the **length** of the conductor is related to its resistance. The results of their investigation are shown in the graph.\n\n**Calculate** the gradient of the graph, giving your answer in appropriate units.',
        marks: 3,
        artefact: {
          component: 'LineGraph',
          data: {
            xLabel: 'Length', xUnit: 'm', yLabel: 'Resistance', yUnit: 'Ω',
            title: 'Resistance of the copper conductor against length',
            dataPoints: [{ x: 0.20, y: 0.020 }, { x: 0.40, y: 0.029 }, { x: 0.60, y: 0.038 }, { x: 0.80, y: 0.047 }, { x: 1.00, y: 0.056 }],
            lobf: true,
            xMin: 0, xMax: 1.0, yMin: 0, yMax: 0.06, xStep: 0.2, yStep: 0.01,
          },
          caption: 'Resistance against length for the copper conductor (note the non-zero intercept).',
        },
        ph: 'Choose two points on the line of best fit that are far apart.\nGradient = ΔR / Δl\nUsing (0.20, 0.020) and (1.00, 0.056): gradient = (0.056 − 0.020)/(1.00 − 0.20) = 0.036/0.80 = 0.045 Ω m⁻¹\n(Accept values in the range 0.043 to 0.047 Ω m⁻¹.)\nUnits: Ω m⁻¹ (or Ω/m) — award unit mark separately.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Another student in the same class makes the following statement:\n\n*"There is clear evidence of systematic error in these results. This will affect the accuracy of the gradient calculation."*\n\n**Identify** the evidence for systematic error in the graph of these results. **Justify** your answer.',
        marks: 2,
        ph: 'Evidence: The graph does **not pass through the origin** (the y-intercept is above zero — about 0.011 Ω).\nJustification: A length of zero should have a resistance of zero (R = ρl/A → if l = 0, R = 0). The non-zero intercept indicates a systematic error — an additional, constant resistance in the circuit that is added to every measurement.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Discuss** the validity of the student\'s statement in part (c) about the accuracy of the gradient calculation.',
        marks: 3,
        ph: 'The statement is **invalid** (incorrect).\nAll data values are shifted by the same amount (the systematic error is a constant offset). When calculating the gradient, we use differences (ΔR/Δl). Because the offset is the same for all values, it cancels out in the gradient calculation — the gradient is not affected by the systematic offset.\nTherefore, the gradient is accurate even though the y-intercept is not zero, and the student\'s statement that the gradient accuracy is affected is incorrect.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: '**Suggest** a possible source of the systematic error identified in part (c).',
        marks: 1,
        ph: 'Any one of: zero error in the ohmmeter; calibration error in the meter; additional resistance from other components in the circuit (e.g. connecting leads, crocodile clips).',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'Another student decides to investigate the relationship between resistance and the **area** of a conductor. They know that R = ρl/A.\n\n**Formulate** and **explain** a hypothesis for the relationship between resistance and area. You should refer to the microscopic structure of a conducting material and the model of moving charge carriers in your explanation.',
        marks: 4,
        ph: 'Hypothesis: If the area of the conductor increases, the resistance will decrease; the relationship is inversely proportional (R ∝ 1/A).\n\nExplanation: Electrons (charge carriers) move through the conducting material. In a conductor with a larger cross-sectional area, there are more pathways available for the electrons to travel. With more pathways, there is less opposition to the flow of charge, so the resistance decreases. Conversely, a smaller area has fewer pathways, so electrons are more restricted and resistance increases.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Model-Railway Signal Bulbs: Series Circuit Investigation (18 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Electricity',
    marks: 18,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['series circuits', 'current', 'resistance', 'investigation design'], level: 'advanced' },
    stem: 'A model-railway enthusiast is wiring the small bulbs of a signal gantry and wants to know how the number of bulbs connected in series affects the size of the current flowing through them.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sig6" cx="0.5" cy="0.4"><stop offset="0" stop-color="#ffd9d2"/><stop offset="1" stop-color="#d83a2a"/></radialGradient><radialGradient id="sig6g" cx="0.5" cy="0.4"><stop offset="0" stop-color="#d8f5d2"/><stop offset="1" stop-color="#2faa46"/></radialGradient></defs><rect width="560" height="220" fill="#ffffff"/><line x1="120" y1="40" x2="120" y2="180" stroke="#5b6b78" stroke-width="6"/><line x1="120" y1="50" x2="440" y2="50" stroke="#5b6b78" stroke-width="6"/><line x1="120" y1="180" x2="240" y2="180" stroke="#7a8a96" stroke-width="4"/><g><rect x="190" y="62" width="26" height="58" rx="6" fill="#2c3e50"/><circle cx="203" cy="78" r="8" fill="url(#sig6)"/><circle cx="203" cy="104" r="8" fill="url(#sig6g)"/></g><g><rect x="300" y="62" width="26" height="58" rx="6" fill="#2c3e50"/><circle cx="313" cy="78" r="8" fill="url(#sig6)"/><circle cx="313" cy="104" r="8" fill="url(#sig6g)"/></g><g><rect x="408" y="62" width="26" height="58" rx="6" fill="#2c3e50"/><circle cx="421" cy="78" r="8" fill="url(#sig6)"/><circle cx="421" cy="104" r="8" fill="url(#sig6g)"/></g><rect x="80" y="150" width="34" height="22" rx="3" fill="#3a6ea5" stroke="#244a73"/><text x="97" y="190" font-size="9" text-anchor="middle" fill="#244a73">battery</text><text x="300" y="208" font-size="12" text-anchor="middle" fill="#5b6b78">signal-gantry bulbs wired in series</text></svg>',
      },
      caption: 'A model-railway signal gantry whose bulbs are connected in series.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Construct** a circuit diagram to show how you would measure the current flowing through **two bulbs** connected in **series**. The circuit diagram has been started for you (a battery is already shown).',
        marks: 3,
        ph: 'Draw: two light bulb symbols in series. An ammeter (A) connected in series with the bulbs. Correct circuit with no additional components in series. Do not add a voltmeter in series or extra components.',
        level: 'developing',
      },
      {
        label: 'b',
        text: '**Design** a full investigation into how the **number of bulbs** connected in series affects the **current** flowing through them.\n\nIn your plan, include:\n- The **research question** that this investigation will test\n- A **hypothesis** with a prediction and scientific explanation\n- The **independent variable** and **dependent variable**\n- One **control variable** with justification\n- A clear **method** describing the procedure\n- How you will collect **sufficient relevant data**\n- Any **measuring equipment** needed',
        marks: 15,
        ph: 'Research question: How does the number of bulbs connected in series affect the current flowing through them?\n\nHypothesis: If the number of bulbs in series increases, then the current will decrease, because adding more bulbs increases the total resistance of the circuit (resistances in series add up), and by Ohm\'s law (I = V/R) higher resistance means lower current.\n\nIV: number of bulbs connected in series\nDV: current (measured in amperes using an ammeter)\nCV: supply voltage — a higher voltage would increase the current; must use the same power source throughout.\n\nMethod:\n1. Connect 1 bulb in series with the battery and ammeter; record the current.\n2. Add a second bulb in series; record the current.\n3. Repeat for 3, 4, 5, 6 bulbs.\n4. Repeat each measurement 3 times and calculate the mean.\n5. Record results in a table.\n\nData collection: At least 5 different numbers of bulbs; 3 trials per setting; plot current vs number of bulbs.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Renewable Energy Sources (9 marks) Criterion D
  // Context: tidal stream, geothermal, biomass — advantages and disadvantages
  // Q7a variable_classify + Q7b energy_chain are HARDCODED — kept exactly
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Energy & Environment',
    marks: 9,
    topicCanonical: 'Nuclear Reactions & Energy',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'work-energy', topics: ['renewable energy', 'energy transfer', 'advantages', 'disadvantages'], level: 'proficient' },
    stem: 'There are many options for electricity generation as society moves away from burning fossil fuels. Many of these options are carbon neutral; they do not contribute to a net increase in the levels of carbon dioxide in the atmosphere. The infographic below illustrates three of these options: tidal-stream turbines, geothermal power, and biomass (energy-crop) power.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sea7b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="600" height="220" fill="#f4fbff"/><g><rect x="20" y="120" width="160" height="70" fill="url(#sea7b)"/><line x1="100" y1="120" x2="100" y2="160" stroke="#3f5e6c" stroke-width="4"/><g transform="translate(100,150)"><path d="M0,0 L3,-26 L-3,-26 Z" fill="#cfd8dd" stroke="#5b7d8c"/><path d="M0,0 L24,10 L24,6 Z" fill="#cfd8dd" stroke="#5b7d8c"/><path d="M0,0 L-24,10 L-24,6 Z" fill="#cfd8dd" stroke="#5b7d8c"/></g><path d="M24,134 q14,-8 28,0" fill="none" stroke="#9bd0e6" stroke-width="2"/><text x="100" y="208" font-size="11" text-anchor="middle" fill="#3f7e98">Tidal-stream turbine</text></g><g><path d="M280,130 L300,80 L320,130 Z" fill="#8a6f5a" stroke="#5c4634"/><path d="M292,98 q8,-14 16,0 q-8,8 -16,0" fill="#c0392b" opacity="0.7"/><path d="M286,94 q4,-20 6,-2" fill="none" stroke="#aaa" stroke-width="3" stroke-linecap="round"/><rect x="290" y="130" width="40" height="40" fill="#d9dde0" stroke="#9aa3a9"/><text x="300" y="208" font-size="11" text-anchor="middle" fill="#5c4634">Geothermal plant</text></g><g><rect x="470" y="110" width="70" height="60" rx="3" fill="#cfa56a" stroke="#8a6a36"/><path d="M470,110 q35,-26 70,0 Z" fill="#b88c4a" stroke="#8a6a36"/><g stroke="#3a7d44" stroke-width="3"><line x1="455" y1="170" x2="455" y2="150"/><line x1="448" y1="170" x2="448" y2="156"/><line x1="462" y1="170" x2="462" y2="156"/></g><text x="505" y="208" font-size="11" text-anchor="middle" fill="#8a6a36">Biomass (energy crops)</text></g></svg>',
      },
      caption: 'Three carbon-neutral electricity-generation options: tidal-stream, geothermal, and biomass.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct disadvantage for each method of electricity generation shown. Match each description to the correct energy source:\n\nDisadvantages:\n- Only generates power when the tide is flowing; turbines can disrupt marine life\n- Needs to be built in geologically suitable areas; start-up (drilling) costs are high\n- Needs a large amount of land for fuel crops; there is a time delay while the crops grow',
        marks: 3,
        widget: 'variable_classify',
        widgetOptions: ['Tidal-stream', 'Geothermal', 'Biomass'],
        ph: 'Tidal-stream → only generates with the tide; can disrupt marine life.\nGeothermal → needs geologically suitable areas; high drilling start-up costs.\nBiomass → large land area needed for crops; time delay while crops grow.\nAll correct for 3 marks.',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Drag and drop the energy forms to **label** the energy flow diagram for a **biomass** power station.\n\nThe energy flow is:\n**?** → **?** → **?** → Electrical',
        marks: 2,
        widget: 'energy_chain',
        ph: 'Chemical potential → Thermal (heat) → Kinetic → Electrical\n\n(Energy crops store chemical potential energy. Burning converts it to thermal energy. Heat drives a turbine → kinetic energy. The generator converts kinetic → electrical energy.)',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Select** one of the three options for electricity generation that you would recommend for use in a country of your choice.\n\n**Discuss** the advantages and disadvantages of your selected method for electricity generation in your chosen country.',
        marks: 4,
        ph: 'Example: Tidal-stream power for the United Kingdom.\nAdvantages:\n- The UK has many fast tidal channels (e.g. the Pentland Firth) → strong, predictable tidal currents\n- Carbon neutral → no CO₂ emissions during generation\n- Tides are highly predictable, unlike wind or sun\nDisadvantages:\n- High initial construction cost of underwater turbines\n- Turbines can disrupt marine ecosystems and migrating fish\n- Only generates while the tide is flowing (not continuous)\n\n(Marks awarded for: advantage with country-specific justification; disadvantage(s) with further explanation.)',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Island Energy Options: a remote Pacific atoll (14 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Energy & Environment',
    marks: 14,
    topicCanonical: 'Nuclear Reactions & Energy',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'work-energy', topics: ['energy policy', 'nuclear power', 'renewable energy', 'evaluation'], level: 'advanced' },
    stem: 'A small nation built on a remote Pacific atoll is one of the lowest-lying countries in the world. It has a tiny land area and no land link to any continent, so access to external power sources is very limited. At present almost all of the electricity used on the atoll is generated by burning imported diesel oil, which is expensive to ship in. The nation plans to greatly decrease the proportion of its electricity production from fossil fuels. Three options include: (1) a high-voltage submarine power cable linked to a large floating solar array, (2) offshore wind turbines, and (3) a small modular nuclear reactor (SMR) installed on the main island.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sea8b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#5aa6c8"/></linearGradient><radialGradient id="sun8b" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="600" height="240" fill="#eaf7fb"/><circle cx="60" cy="40" r="18" fill="url(#sun8b)"/><rect x="0" y="150" width="600" height="90" fill="url(#sea8b)"/><ellipse cx="250" cy="155" rx="120" ry="14" fill="#e8dcae" stroke="#c9b97a"/><g><rect x="80" y="170" width="70" height="20" rx="4" fill="#2b3a67" stroke="#1b2748" transform="rotate(-4 115 180)"/><line x1="92" y1="172" x2="92" y2="190" stroke="#5b76d6"/><line x1="115" y1="171" x2="115" y2="189" stroke="#5b76d6"/><line x1="138" y1="170" x2="138" y2="188" stroke="#5b76d6"/><text x="115" y="212" font-size="10" text-anchor="middle" fill="#2b3a67">floating solar</text></g><g><line x1="470" y1="120" x2="470" y2="180" stroke="#7a8a96" stroke-width="3"/><g transform="translate(470,120)"><path d="M0,0 L3,-32 L-3,-32 Z" fill="#cfd8dd" stroke="#7a8a96"/><path d="M0,0 L28,12 L28,8 Z" fill="#cfd8dd" stroke="#7a8a96"/><path d="M0,0 L-28,12 L-28,8 Z" fill="#cfd8dd" stroke="#7a8a96"/></g><text x="470" y="200" font-size="10" text-anchor="middle" fill="#5b6b78">offshore wind</text></g><g><rect x="230" y="120" width="42" height="34" rx="3" fill="#d9dde0" stroke="#9aa3a9"/><path d="M233,120 q18,-20 36,0 Z" fill="#c3c9cd" stroke="#9aa3a9"/><circle cx="251" cy="138" r="8" fill="none" stroke="#0b7285" stroke-width="2"/><line x1="251" y1="138" x2="256" y2="133" stroke="#0b7285" stroke-width="2"/><text x="251" y="170" font-size="10" text-anchor="middle" fill="#5b6b78">SMR (nuclear)</text></g></svg>',
      },
      caption: 'Three electricity options for the remote Pacific atoll: a solar cable, offshore wind, and a small modular nuclear reactor.',
    },
    tasks: [
      {
        label: 'a',
        text: 'One of the three options uses a **non-renewable** energy source.\n\n**Identify** which option uses a non-renewable source, and **explain** why this source is described as non-renewable.',
        marks: 2,
        ph: 'Option 3 — the small modular nuclear reactor (SMR).\nNon-renewable because uranium (nuclear fuel) is a finite resource: it exists in limited quantities in the Earth\'s crust and cannot be replenished on a human timescale. Once extracted and used, it cannot be replaced.',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Using the infographic provided, **evaluate** the three options for the atoll nation.\n\nIn your answer, discuss:\n- The **advantages** of your recommended option\n- The **political implications** of the options\n- The **economic implications** of the options, using specific data from the infographic\n\nConclude with a **recommendation** for the atoll nation, justifying your choice.',
        marks: 12,
        ph: 'Recommended option example: Offshore wind turbines.\n\nAdvantages: Zero carbon emissions; no fuel needs to be shipped in once built; steady trade winds across the open Pacific give reliable output; turbines can be sited offshore where there is little spare land on the atoll.\n\nPolitical implications: The solar cable depends on agreement with whichever nation hosts the floating array — political risk if relations change. A nuclear SMR may face strong public opposition on a tiny low-lying island and international scrutiny over waste. Wind turbines keep the nation energy-independent and within its own control.\n\nEconomic implications: Nuclear: highest construction cost plus a large decommissioning cost. Solar cable: cheapest electricity per kWh but the submarine cable is costly to lay and maintain. Wind: moderate construction cost, no fuel cost, and no expensive cable — a good economic balance for a remote island.\n\nConclusion: Offshore wind turbines are recommended for the atoll nation because they are economically viable, politically independent, and provide reliable carbon-neutral power without imported fuel, a costly submarine cable, or nuclear risk on a vulnerable low-lying island.',
        level: 'advanced',
      },
    ],
  },

]
