import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-nov-2021',
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
  // Context: Einstein's explanation of Brownian motion as evidence for kinetic theory
  // Numbers changed: "smoke particles" context kept; temperature increased from 20°C → 25°C
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
    stem: 'The origins of kinetic theory are linked to Einstein\'s explanation of a phenomenon known as Brownian motion. Brownian motion was observed when scientists studied the random jiggling of smoke particles suspended in air under a microscope.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Gas particles in a sealed container',
        mode: 'states',
        substance: 'air',
        states: ['gas'],
        containers: ['Sealed rigid container'],
        particleCount: 40,
        heatSlider: true,
      },
      caption: 'Air molecules move randomly and collide with the walls. Raise the temperature to see them move faster and hit the walls harder and more often — the cause of Brownian motion of the larger smoke particles, and of the rise in gas pressure on heating.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A diagram shows a smoke particle inside a container. **Label** the diagram to show which particles are visible and which particles are not visible in the Brownian motion experiment.',
        marks: 1,
        ph: 'Smoke particles (larger, visible under microscope). Air molecules (much smaller, invisible — but their collisions cause the smoke particle to move).',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'A diagram shows two gas particles colliding with the walls of a container at two different temperatures. **Label** the diagram to correctly show which situation represents the higher temperature.',
        marks: 1,
        ph: 'Higher temperature = particles moving faster with greater kinetic energy → more frequent and harder collisions with the walls. All correct for the mark.',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'A gas is heated inside a sealed, rigid container. The temperature of the gas increases from **25 °C** to **95 °C**.\n\n**Explain** why the pressure of the gas increases when it is heated. In your answer refer to the particles of the gas.',
        marks: 3,
        ph: 'When heated, the particles gain more kinetic energy and move faster. They collide with the walls of the container more frequently and with greater force. Since force per unit area = pressure, the pressure of the gas increases.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'Use your knowledge of kinetic theory to **suggest** the cause of the observed random movement of smoke particles in air.',
        marks: 2,
        ph: 'Air particles (molecules) are in constant, random motion (even though they are too small to be seen). They continuously collide with the larger, visible smoke particles. Since these collisions are random and unequal from all sides, the smoke particles are pushed in random directions, causing Brownian motion.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Energy Transformations & E = mc² (8 marks) Criterion A/D
  // Context: Child on a slide; energy transformations; Einstein's mass-energy equivalence
  // Numbers changed: child mass = 28 kg (from 25 kg); KE = 672 J (from 660 J); v = 6.9 m/s
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
    stem: 'One of the papers Einstein published during his annus mirabilis showed the relationship between the mass and the energy of an object when it is not moving. The relationship is given by the equation E = mc², where E represents the energy of the object, m is the object\'s mass, and c is the speed of light.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Energy transformations as a child slides down a slide',
        inputJ: 750,
        branches: [
          { form: 'Kinetic energy', valueJ: 672, direction: 'straight' },
          { form: 'Sound energy', valueJ: 10, direction: 'up' },
          { form: 'Heat (thermal) energy', valueJ: null, direction: 'down', blank: true },
        ],
        missingForm: 'Heat (thermal) energy',
        missingValueJ: 68,
        conservation: '750 J in = 672 J + 10 J + 68 J out',
      },
      caption: 'Input gravitational potential energy (750 J) splits into useful kinetic energy (672 J) plus sound (10 J) and wasted heat. Drag the slider to balance the diagram and find the missing band.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Label** each quantity in the equation E = mc² with its SI unit (Système international d\'unités).\n\n| Quantity | SI Unit |\n|----------|---------|\n| E | ? |\n| m | ? |\n| c | ? |',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Quantity', 'Meaning', 'SI unit (choose)'],
            rows: [
              ['E', 'energy of the object', '?'],
              ['m', 'mass of the object', '?'],
              ['c', 'speed of light', '?'],
            ],
          },
          caption: 'Match each quantity in E = mc² to its SI unit: joule (J), kilogram (kg), metre per second (m s⁻¹).',
        },
        ph: 'E → joule (J)\nm → kilogram (kg)\nc → metre per second (m s⁻¹)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'A child of mass **28 kg** moves down a slide. The Sankey diagram shows the energy transformations as the child slides down.\n\nThe total input energy is **750 J**. The kinetic energy at the bottom is **672 J**. The sound energy produced is **10 J**.\n\n**Select** the correct energy form and **calculate** the missing energy value for the Sankey diagram.',
        marks: 2,
        widget: 'energy_chain',
        ph: 'Missing form: Heat (thermal) energy — the wasted energy lost to friction between the child and the slide.\nMissing value (conservation of energy): 750 − 672 − 10 = **68 J**\n(Award 1 mark for identifying heat/thermal energy as the missing form, 1 mark for the value 68 J.)',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The mass of the child is **28 kg**. Use information from the Sankey diagram to **calculate** the child\'s velocity at the bottom of the slide. Give your answer to **2 significant figures**.',
        marks: 3,
        ph: 'KE = ½mv²\n672 = ½ × 28 × v²\n672 = 14 × v²\nv² = 672/14 = 48\nv = √48 = 6.928... ≈ **6.9 m s⁻¹**',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The laws of conservation of energy and Einstein\'s mass–energy relationship (E = mc²) apply when understanding transformations in particle physics. A positron is an example of anti-matter. When an electron and a positron meet, all of their mass is turned into energy.\n\nUse the information in the table below and the speed of light c = 3.0 × 10⁸ m s⁻¹ to **calculate** how much energy is released in this process.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Particle', 'Mass / kg'],
            rows: [
              ['Electron', '9.11 × 10⁻³¹'],
              ['Positron', '9.11 × 10⁻³¹'],
            ],
          },
          caption: 'Rest masses of the electron and positron used in the annihilation calculation.',
        },
        ph: 'Total mass = 2 × 9.11 × 10⁻³¹ = 1.822 × 10⁻³⁰ kg\nE = mc²\n= 1.822 × 10⁻³⁰ × (3.0 × 10⁸)²\n= 1.822 × 10⁻³⁰ × 9.0 × 10¹⁶\n= 1.6398 × 10⁻¹³ J ≈ 1.64 × 10⁻¹³ J',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Red-shift & Hubble's Law (12 marks) Criterion A/C
  // Context: Red-shift of starlight and evidence for the Big Bang
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
    stem: 'In astronomical observations, the properties of light can be affected by the motion of objects. Scientists have observed that light from distant galaxies appears shifted towards the red end of the spectrum — a phenomenon known as red-shift.',
    artefact: {
      component: 'SpectrumSim',
      data: {
        title: 'The visible spectrum',
        mode: 'scrub',
        bands: ['Violet', 'Blue', 'Green', 'Yellow', 'Orange', 'Red'],
        axis: 'wavelength increases left → right (frequency decreases)',
        target: 'Red',
        visibleRange: ['400 nm', '700 nm'],
      },
      caption: 'Red light has the longest wavelength in the visible spectrum. When a star moves away, its light is stretched to longer wavelengths — shifted towards the red end (red-shift). Scrub across to compare the bands.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Light is an example of a wave.\n\n**Select** the best description of a light wave.\n\nA. Transverse mechanical\nB. Longitudinal mechanical\nC. Transverse electromagnetic\nD. Longitudinal electromagnetic',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Transverse mechanical', 'B. Longitudinal mechanical', 'C. Transverse electromagnetic', 'D. Longitudinal electromagnetic'],
        ph: 'C',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'Here is a graphical representation of a light wave from a **stationary** source seen by an observer.\n\nIn astronomical observations, the properties of light can be affected by the motion of objects. **Select** the graph that shows how the appearance of the wave would change if the source was **moving away** from the observer. **Justify** your answer.',
        marks: 2,
        artefact: {
          component: 'WaveSim',
          data: {
            title: 'Light wave from a stationary source vs a receding source',
            mode: 'match',
            windowSeconds: 1,
            stationary: { id: 'stationary', label: 'Stationary source', cycles: 6 },
            options: [
              { id: 'A', label: 'A', cycles: 9, note: 'Shorter wavelength (blue-shift) — source moving toward observer.' },
              { id: 'B', label: 'B', cycles: 6, note: 'Unchanged wavelength — source at rest relative to observer.' },
              { id: 'C', label: 'C', cycles: 12, note: 'Even shorter wavelength — not red-shift.' },
              { id: 'D', label: 'D', cycles: 4, note: 'Longer wavelength (red-shift) — source moving away from observer.' },
            ],
            correct: 'D',
            concept: 'A receding source stretches the wavelength: fewer cycles in the same window, lower frequency, shifted to the red end.',
          },
          caption: 'The stationary-source wave has 6 cycles. Select the option whose wavelength is stretched (fewer cycles) — the red-shifted wave of a receding source.',
        },
        ph: 'Select: Graph D (or the graph showing increased wavelength — longer, more stretched-out wave).\nJustification: When the source moves away, the wavelength is stretched (the Doppler effect). The waves are "spread out", so the wavelength increases and the frequency decreases — the light is shifted towards the red end of the spectrum.',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The phenomenon in part (b) is known as **red-shift**. **Suggest** the meaning of the term red-shift by considering the visible light emitted by a star and referring to the electromagnetic spectrum.',
        marks: 2,
        ph: 'The wavelength of light emitted from stars that are moving away from us has increased (been stretched). Since red light has the longest wavelength in the visible spectrum, the light appears to shift towards the red end of the spectrum — the star appears more red than it actually is.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'Scientists use information about red-shift to make predictions about the speed of expansion of the universe. The graph below shows the relationship between how far an object is from Earth and how quickly it is moving. Astronomical distances are very large; on this graph, these distances are shown in units called megaparsecs (Mpc).\n\n**Draw** a line of best fit on the graph.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Hubble plot — recession velocity against distance',
            mode: 'readoff',
            xLabel: 'distance / Mpc',
            yLabel: 'recession velocity / km s⁻¹',
            xRange: [0, 500],
            yRange: [0, 40000],
            points: [
              [50, 3200], [100, 7400], [150, 9800], [200, 15200],
              [250, 17000], [300, 22000], [350, 23800], [400, 29000], [450, 31000],
            ],
            dataMaxX: 450,
            bestFit: 'a straight line through the origin (≈ 70 km s⁻¹ per Mpc) with roughly equal points above and below.',
          },
          caption: 'More distant galaxies recede faster. A best-fit straight line through the origin gives Hubble\'s constant; its gradient is used to estimate the age of the universe.',
        },
        ph: 'Draw a straight line passing through the origin, with roughly equal numbers of data points above and below the line. The line should have a positive gradient (as distance increases, velocity increases).',
        level: 'developing',
      },
      {
        label: 'e',
        text: '**Outline** the relationship shown on the graph in part (d).',
        marks: 2,
        ph: 'As the distance from Earth increases, the velocity of recession increases. The relationship is proportional (the line passes through the origin and is straight), meaning velocity is directly proportional to distance.',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'The relationship in part (d) is known as **Hubble\'s law**. **Suggest** how the Big Bang theory is supported by Hubble\'s law.',
        marks: 2,
        ph: 'Hubble\'s law shows that all galaxies are moving away from us, with more distant galaxies moving faster. This suggests that everything was once in the same place (a single point of origin). If we trace the expansion backwards, all matter originated from a single point — consistent with the Big Bang theory. The expanding universe supports the idea that the universe began from a very hot, dense state.',
        level: 'proficient',
      },
      {
        label: 'g',
        text: 'In 1930, Hubble used the gradient of a line of best fit on the graph to estimate the age of the universe as 1.8 billion years. We now estimate the age of the universe to be **13.8 billion years**.\n\n**Suggest** why this estimate has changed using the graph.',
        marks: 1,
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Hubble plot — 1930 data vs modern data',
            mode: 'readoff',
            xLabel: 'distance / Mpc',
            yLabel: 'recession velocity / km s⁻¹',
            xRange: [0, 500],
            yRange: [0, 40000],
            points: [
              [50, 3200], [100, 7400], [150, 9800], [200, 15200],
              [250, 17000], [300, 22000], [350, 23800], [400, 29000], [450, 31000],
            ],
            dataMaxX: 450,
            bestFit: 'Hubble had only the nearest few galaxies (small distances); modern data extend much further, giving a shallower, more reliable gradient.',
          },
          caption: 'Hubble worked from only the closest galaxies in 1930; today the plot extends to far larger distances, so the best-fit gradient — and the age it gives — is much more accurate.',
        },
        ph: 'The newer estimate is based on more data (the graph shows data from galaxies observed both in 1930 and today). With more data points, the line of best fit is more accurate, giving a better estimate of the gradient and therefore a more reliable age for the universe.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Ohm's Law & Non-Ohmic Conductors (16 marks) Criterion B/C/D
  // Context: Georg Ohm's discovery; investigating components X and Y
  // Numbers changed: voltage range to 0.5V–2.5V; component Y resistance values changed
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
    stem: 'Georg Ohm was an important figure in describing the physics of electricity. He is probably most well-known for discovering the relationship that we now call Ohm\'s law. Ohm\'s law states that the current (I) that flows through a conductor is proportional to the voltage (V) across that conductor. Materials that follow this relationship are known as ohmic conductors; materials that do not obey this relationship are known as non-ohmic conductors.',
    artefact: {
      component: 'CircuitSim',
      data: {
        title: 'Measuring current and voltage for component X',
        mode: 'iv',
        component: 'component X',
        emf: 2.5,
        ivPairs: [
          { V: 0.5, I: 0.10 },
          { V: 1.0, I: 0.20 },
          { V: 1.5, I: 0.30 },
          { V: 2.0, I: 0.40, readFromAmmeter: '400 mA' },
          { V: 2.5, I: 0.50 },
        ],
      },
      caption: 'A cell, component X, an ammeter (in series) and a voltmeter (in parallel). Drag the slider to step through the trials; the 2.0 V trial reads 400 mA on the ammeter (which the student must convert to amperes).',
    },
    tasks: [
      {
        label: 'a',
        text: 'A group of MYP students collect current and voltage data for an unknown component, which we will call **component X**. Their notebook is shown. One of the measurements is incomplete. **Organise and present** the students\' results in a table of raw data.\n\nNote: The missing value for 2.0 V must be measured from the interactive circuit (reading from the ammeter shown). A reading of **400 mA** is recorded for 2.0 V.',
        marks: 6,
        ph: '| Voltage / V | Current / A |\n|-------------|-------------|\n| 0.5 | 0.10 |\n| 1.0 | 0.20 |\n| 1.5 | 0.30 |\n| 2.0 | 0.40 |\n| 2.5 | 0.50 |\n\nMarks awarded for: column headers with the quantity and unit (V, A); units placed in the headers only (not beside each value); data in ascending order of voltage; 400 mA correctly converted to 0.40 A; all currents to a consistent number of decimal places.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Before collecting the data, the students formulated the following hypothesis:\n\n*"If the voltage across component X doubles then the current will also double because component X is an ohmic conductor and therefore current is proportional to voltage."*\n\n**Explain** whether the data in the table support the students\' hypothesis. You should include calculations to support your answer.',
        marks: 3,
        ph: 'Test: double the voltage and check whether the current also doubles (i.e. whether I/V is constant).\nAt 0.5 V: I = 0.10 A; at 1.0 V: I = 0.20 A → doubling the voltage doubled the current ✓\nAt 1.0 V: I = 0.20 A; at 2.0 V: I = 0.40 A → doubling the voltage again doubled the current ✓\nResistance check: R = V/I = 0.5/0.10 = 1.0/0.20 = 1.5/0.30 = 2.0/0.40 = 2.5/0.50 = 5.0 Ω — constant throughout.\nConclusion: The data **support** the hypothesis. Because I/V (and therefore R) is constant, current is directly proportional to voltage, so component X behaves as an ohmic conductor over this range.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Another group of MYP students collect current and voltage data for an unknown component, which we will call **component Y**. The graph of their results is shown.\n\nUsing the graph, **outline** whether component Y is an ohmic conductor. Justify your answer.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Current against voltage for component Y',
            mode: 'readoff',
            xLabel: 'Voltage / V',
            yLabel: 'Current / A',
            xRange: [0, 10],
            yRange: [0, 0.5],
            points: [
              [0, 0], [1.0, 0.20], [2.0, 0.27], [3.0, 0.32],
              [4.0, 0.355], [5.0, 0.38], [6.0, 0.40], [8.0, 0.44],
            ],
            dataMaxX: 8.0,
            readouts: [
              { x: 1.0, note: 'read I at V = 1.0 V → R = V/I' },
              { x: 6.0, note: 'find V where I = 0.40 A → R = V/I' },
            ],
            bestFit: 'a curve through the origin whose gradient falls as voltage rises — not a straight line.',
          },
          caption: 'Current–voltage curve for component Y. The line is curved (gradient is not constant), so component Y is non-ohmic. Drag the crosshair to read values for the resistance calculations.',
        },
        ph: 'The graph of current vs voltage for component Y is **not a straight line** (the gradient is not constant — the curve flattens / becomes less steep at higher voltages, so the current rises more slowly as the voltage increases). Because I is not directly proportional to V, the resistance (V/I) is not constant. Therefore component Y is a **non-ohmic conductor** (it does not obey Ohm\'s law).',
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
          component: 'GraphSim',
          data: {
            title: 'Current against voltage for component Y',
            mode: 'readoff',
            xLabel: 'Voltage / V',
            yLabel: 'Current / A',
            xRange: [0, 10],
            yRange: [0, 0.5],
            points: [
              [0, 0], [1.0, 0.20], [2.0, 0.27], [3.0, 0.32],
              [4.0, 0.355], [5.0, 0.38], [6.0, 0.40], [8.0, 0.44],
            ],
            dataMaxX: 8.0,
            readouts: [
              { x: 1.0, note: 'at V = 1.0 V, I = 0.20 A → R = 1.0 / 0.20 = 5.0 Ω' },
              { x: 6.0, note: 'I = 0.40 A occurs at V = 6.0 V → R = 6.0 / 0.40 = 15 Ω' },
            ],
          },
          caption: 'Read I at V = 1.0 V (0.20 A) and the V where I = 0.40 A (6.0 V) to find the resistances. Drag the crosshair to the marked voltages.',
        },
        ph: '(i) From graph: at V = 1.0V, I ≈ 0.20A\nR = V/I = 1.0/0.20 = **5.0 Ω**\n\n(ii) From graph: at I = 0.40A, V ≈ 6.0V\nR = V/I = 6.0/0.40 = **15 Ω**\n\nUnit (Ω or ohms) must appear in at least one answer.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'An MYP student is interested in the design of decorative lights and how the number of bulbs connected in series could affect the size of the current flowing through them.\n\n**Construct** a circuit diagram to show how you would measure the current flowing through **two bulbs** connected in **series**. The circuit diagram has been started for you.',
        marks: 1,
        artefact: {
          component: 'CircuitSim',
          data: {
            title: 'Build the circuit to measure current through two series bulbs',
            mode: 'place',
            component: 'two bulbs (in series)',
            emf: 3.0,
            slots: [
              { id: 'ammeter', correct: 'series with wire' },
              { id: 'voltmeter', correct: 'parallel with wire' },
            ],
            knownTrial: { V: 3.0, I: 0.15 },
          },
          caption: 'A battery is already shown. To measure the current through the bulbs the ammeter must be placed in series with them. Place the meters and check.',
        },
        ph: 'Draw: two bulbs (light bulb symbols) connected in series with each other and with the battery. An ammeter (A in a circle) connected in series with the bulbs to measure the current flowing through them. No extra components in series with the bulbs.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Resistance of a Wire (14 marks) Criterion B/C
  // Context: Student investigates how length affects resistance; R = ρl/A
  // Numbers changed: gradient range 0.043–0.047 → data shown on graph
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
    stem: 'An MYP student is interested in the factors that can affect the resistance of a wire. The student does some research and finds that: resistance = resistivity × length ÷ area, or using symbols: R = ρl/A. The quantity known as resistivity (ρ) is determined by the material that the conductor is made out of.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wire5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e7c9a0"/><stop offset="0.5" stop-color="#c8924e"/><stop offset="1" stop-color="#8a5a22"/></linearGradient></defs><rect width="560" height="230" fill="#ffffff"/><text x="280" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">A conducting wire</text><rect x="140" y="86" width="220" height="56" fill="url(#wire5)" stroke="#6b451c"/><ellipse cx="360" cy="114" rx="22" ry="28" fill="#b07d3e" stroke="#6b451c"/><ellipse cx="140" cy="114" rx="22" ry="28" fill="#9c6a30" stroke="#6b451c"/><line x1="140" y1="166" x2="360" y2="166" stroke="#1f2d3a" stroke-width="1.5"/><line x1="140" y1="160" x2="140" y2="172" stroke="#1f2d3a" stroke-width="1.5"/><line x1="360" y1="160" x2="360" y2="172" stroke="#1f2d3a" stroke-width="1.5"/><text x="250" y="186" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Length (l)</text><line x1="408" y1="86" x2="408" y2="142" stroke="#0b7285" stroke-width="1.5"/><text x="418" y="118" font-size="13" font-weight="700" fill="#0b7285">Area (A)</text><line x1="384" y1="100" x2="404" y2="92" stroke="#0b7285" stroke-width="1.2"/><line x1="384" y1="128" x2="404" y2="136" stroke="#0b7285" stroke-width="1.2"/><text x="280" y="216" font-size="13" text-anchor="middle" fill="#475569">R = ρ l / A   (ρ = resistivity, set by the material)</text></svg>',
      },
      caption: 'Resistance of a wire depends on its length (l), cross-sectional area (A) and the resistivity (ρ) of the material: R = ρl/A.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student investigates how the **length** of the wire is related to its resistance, keeping the area constant.\n\nUsing information from the student\'s research, **select** what is represented by the **gradient** of a graph of resistance (y-axis) against length (x-axis).\n\nA. ρ × A\nB. ρ / A\nC. ρ\nD. A / ρ',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. ρ × A', 'B. ρ / A', 'C. ρ', 'D. A / ρ'],
        ph: 'B',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'The student investigates how the **length** of the wire is related to its resistance. The results of their investigation are shown in the graph.\n\n**Calculate** the gradient of the graph, giving your answer in appropriate units.',
        marks: 3,
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Resistance against length of wire',
            mode: 'readoff',
            xLabel: 'Length / m',
            yLabel: 'Resistance / Ω',
            xRange: [0, 1.0],
            yRange: [0, 0.06],
            points: [
              [0.2, 0.014], [0.4, 0.023], [0.6, 0.032], [0.8, 0.041], [1.0, 0.050],
            ],
            dataMaxX: 1.0,
            bestFit: 'a straight line of gradient ≈ 0.045 Ω m⁻¹ that does NOT pass through the origin (intercept ≈ +0.005 Ω).',
          },
          caption: 'Resistance rises linearly with length. Gradient = ΔR/Δl ≈ (0.050 − 0.014)/(1.0 − 0.2) = 0.045 Ω m⁻¹. Note the line does not pass through the origin.',
        },
        ph: 'Choose two points on the line of best fit that are far apart.\nGradient = ΔR / Δl\ne.g. using (0.2, 0.014) and (1.0, 0.050): gradient = 0.036/0.8 = 0.045 Ω m⁻¹\n(Accept values in range 0.043 to 0.047 Ω m⁻¹)\nUnits: Ω m⁻¹ (or Ω/m) — award unit mark separately.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Another student in the same class makes the following statement:\n\n*"There is clear evidence of systematic error in these results. This will affect the accuracy of the gradient calculation."*\n\n**Identify** the evidence for systematic error in the graph of these results. **Justify** your answer.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Resistance against length — note the y-intercept',
            mode: 'readoff',
            xLabel: 'Length / m',
            yLabel: 'Resistance / Ω',
            xRange: [0, 1.0],
            yRange: [0, 0.06],
            points: [
              [0.2, 0.014], [0.4, 0.023], [0.6, 0.032], [0.8, 0.041], [1.0, 0.050],
            ],
            dataMaxX: 1.0,
            readouts: [{ x: 0.2, note: 'extrapolate back to l = 0: R is still ≈ +0.005 Ω, not zero' }],
            bestFit: 'extrapolated to l = 0 the line meets the R-axis above zero (intercept ≈ +0.005 Ω) — the signature of a systematic error.',
          },
          caption: 'A zero-length wire should have zero resistance, yet the best-fit line meets the resistance axis above zero. This non-zero intercept is the evidence of a systematic (constant offset) error.',
        },
        ph: 'Evidence: The graph does **not pass through the origin** (the y-intercept is above zero).\nJustification: A length of zero should have a resistance of zero (R = ρl/A → if l = 0, R = 0). The non-zero intercept indicates a systematic error — an additional, constant resistance in the circuit that is added to every measurement.',
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
        ph: 'Any one of: zero error in the measuring instrument; calibration error in the ohmmeter; additional resistance from other components in the circuit (e.g. connecting wires, crocodile clips).',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'Another student decides to investigate the relationship between resistance and the **area** of a wire. They know that R = ρl/A.\n\n**Formulate** and **explain** a hypothesis for the relationship between resistance and area. You should refer to the microscopic structure of a conducting material and the model of moving charge carriers in your explanation.',
        marks: 4,
        ph: 'Hypothesis: If the area of the wire increases, the resistance will decrease; the relationship is inversely proportional (R ∝ 1/A).\n\nExplanation: Electrons (charge carriers) move through the conducting material. In a wire with a larger cross-sectional area, there are more pathways available for the electrons to travel. With more pathways, there is less opposition to the flow of charge, so the resistance decreases. Conversely, a smaller area has fewer pathways, so electrons are more restricted and resistance increases.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Decorative Lights: Series Circuit Investigation (18 marks) Criterion B
  // Context: Series circuit investigation — how number of bulbs affects current
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
    stem: 'An MYP student is interested in the design of decorative lights and how the number of bulbs connected in series could affect the size of the current flowing through them.',
    artefact: {
      component: 'CircuitSim',
      data: {
        title: 'Decorative lights — measuring current through series bulbs',
        mode: 'place',
        component: 'string of bulbs (in series)',
        emf: 6.0,
        slots: [
          { id: 'ammeter', correct: 'series with wire' },
          { id: 'voltmeter', correct: 'parallel with wire' },
        ],
        knownTrial: { V: 6.0, I: 0.30 },
      },
      caption: 'Decorative lights are bulbs wired in series. To measure the current flowing through them the ammeter must be in series. Place the meters and check.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Construct** a circuit diagram to show how you would measure the current flowing through **two bulbs** connected in **series**. The circuit diagram has been started for you (a battery is already shown).',
        marks: 3,
        artefact: {
          component: 'CircuitSim',
          data: {
            title: 'Build the circuit: two bulbs in series with an ammeter',
            mode: 'place',
            component: 'two bulbs (in series)',
            emf: 6.0,
            slots: [
              { id: 'ammeter', correct: 'series with wire' },
              { id: 'voltmeter', correct: 'parallel with wire' },
            ],
            knownTrial: { V: 6.0, I: 0.30 },
          },
          caption: 'Place the ammeter in series with the two bulbs (the only correct way to read the current through them) and check.',
        },
        ph: 'Draw: two light bulb symbols in series. An ammeter (A) connected in series with the bulbs. Correct circuit with no additional components in series. Do not add a voltmeter in series or extra components.',
        level: 'developing',
      },
      {
        label: 'b',
        text: '**Design** a full investigation into how the **number of bulbs** connected in series affects the **current** flowing through them.\n\nIn your plan, include:\n- The **research question** that this investigation will test\n- A **hypothesis** with a prediction and scientific explanation\n- The **independent variable** and **dependent variable**\n- One **control variable** with justification\n- A clear **method** describing the procedure\n- How you will collect **sufficient relevant data**\n- Any **measuring equipment** needed',
        marks: 15,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Number of bulbs in series', 'Current / A (suggested results)'],
            rows: [
              ['1', '0.60'],
              ['2', '0.30'],
              ['3', '0.20'],
              ['4', '0.15'],
              ['5', '0.12'],
              ['6', '0.10'],
            ],
          },
          caption: 'An example of the kind of results table your method should generate: as more bulbs are added in series the total resistance rises, so the current falls (I = V/R).',
        },
        ph: 'Research question: How does the number of bulbs connected in series affect the current flowing through them?\n\nHypothesis: If the number of bulbs in series increases, then the current will decrease, because adding more bulbs increases the total resistance of the circuit (since resistances in series add up), and by Ohm\'s law (I = V/R), higher resistance means lower current.\n\nIV: number of bulbs connected in series\nDV: current (measured in amperes using an ammeter)\nCV: supply voltage — a higher voltage would increase the current; must use same power source throughout.\n\nMethod:\n1. Connect 1 bulb in series with the battery and ammeter; record the current.\n2. Add a second bulb in series; record the current.\n3. Repeat for 3, 4, 5, 6 bulbs.\n4. Repeat each measurement 3 times and calculate the mean.\n5. Record results in a table.\n\nData collection: At least 5 different numbers of bulbs; 3 trials per setting; plot current vs number of bulbs.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Renewable Energy Sources (9 marks) Criterion D
  // Context: Wood burning biomass, geothermal power, tidal power — advantages and disadvantages
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
    stem: 'There are many options for electricity generation as society moves away from burning fossil fuels. Many of these options are carbon neutral; they do not contribute to a net increase in the levels of carbon dioxide in the atmosphere. The infographic below illustrates three of these options: wood burning biomass, geothermal power, and tidal power.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Method', 'How it works', 'Advantage', 'Disadvantage'],
        rows: [
          ['Wood burning biomass', 'Wood (a carbon-neutral fuel) is burned to heat water and drive a turbine.', 'Carbon neutral; the energy it generates is cheap and easy to harness.', 'Needs a large amount of space for fuel production; there is a time delay between planting and the fuel being ready to use.'],
          ['Geothermal power', 'Water pumped underground is heated by hot rocks and returns as steam to drive a turbine.', 'Carbon neutral; electricity supply is stable and available continuously.', 'Needs to be built in geologically suitable areas; start-up costs are high.'],
          ['Tidal power', 'The rise and fall of the tide drives water through turbines.', 'Carbon neutral; power is available day and night and the plant needs little maintenance.', 'Building the plant may damage the environment and disrupt the local ecosystem.'],
        ],
      },
      caption: 'Three carbon-neutral options for electricity generation, with how each works plus a key advantage and disadvantage.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct disadvantage for each method of electricity generation shown. Match each description to the correct energy source:\n\nDisadvantages:\n- Needs to be built in geologically suitable areas; start-up costs are high\n- Needs a large amount of space for fuel production; time delay between planting the fuel and it being ready to use\n- Building the plant can damage the environment and disrupt the local ecosystem',
        marks: 3,
        widget: 'variable_classify',
        widgetOptions: ['Geothermal', 'Wood burning biomass', 'Tidal'],
        ph: 'Geothermal → needs to be built in geologically suitable areas; high start-up costs.\nWood burning biomass → needs a large amount of space for fuel production; time delay between planting and the fuel being ready to use.\nTidal → building the plant (the barrage/turbines) can damage the environment and disrupt the local ecosystem.\n\n1 mark per correct match (3 marks total).',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Drag and drop the energy forms to **label** the energy flow diagram for a **wood burning biomass** power station.\n\nThe energy flow is:\n**?** → **?** → **?** → Electrical',
        marks: 2,
        widget: 'energy_chain',
        ph: 'Chemical potential → Thermal (heat) → Kinetic → Electrical\n\n(Wood has chemical potential energy. Burning converts it to thermal energy. Heat drives a turbine → kinetic energy. Generator converts kinetic → electrical energy.)',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Select** one of the three options for electricity generation that you would recommend for use in a country of your choice.\n\n**Discuss** the advantages and disadvantages of your selected method for electricity generation in your chosen country.',
        marks: 4,
        ph: 'Example: Geothermal power for Iceland.\nAdvantages:\n- Iceland sits on the Mid-Atlantic Ridge → abundant geothermal energy available\n- Carbon neutral → no CO₂ emissions\n- Reliable baseload power — not dependent on weather\nDisadvantages:\n- High initial construction cost\n- Only feasible in geologically active areas\n- Risk of earthquakes or volcanic activity disrupting the plant\n\n(Marks awarded for: advantage with country-specific justification; disadvantage(s) with further explanation.)',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Malta Energy Options (14 marks) Criterion D
  // Context: Island nation reducing fossil fuel dependence — solar cable, wind turbines, or nuclear
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
    stem: 'Malta is a small island nation in the Mediterranean Sea. It is one of the most densely populated countries in the world, with few natural resources. It has no land link, so access to external power sources is limited. Currently over 90% of the electricity used on Malta is generated by burning imported oil. Malta plans to greatly decrease the proportion of its electricity production from fossil fuels. Three options include: (1) a high-voltage underwater power line linked to a solar farm in north Africa, (2) offshore wind turbines, and (3) a nuclear power plant built on the island.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: [
          'Quantity',
          'Solar farm + undersea cable',
          'Offshore wind turbines',
          'Nuclear power plant',
        ],
        rows: [
          ['Power output / MW', '250', '250', '250'],
          ['Area covered / km²', '1', '73', '0.1'],
          ['Cost per kWh / €', '0.05', '0.15', '0.02'],
          ['Cost of construction / billion €', '3.9', '1.6', '2.2'],
          ['Life time / years', '25', '15', '40'],
          ['Decommission cost / million €', '1', '30', '1000'],
        ],
      },
      caption: 'Infographic data comparing Malta\'s three low-carbon options. Use these figures when discussing the economic implications.',
    },
    tasks: [
      {
        label: 'a',
        text: 'One of the three options uses a **non-renewable** energy source.\n\n**Identify** which option uses a non-renewable source, and **explain** why this source is described as non-renewable.',
        marks: 2,
        ph: 'Option 3 — nuclear power plant.\nNon-renewable because uranium (nuclear fuel) is a finite resource: it exists in limited quantities in the Earth\'s crust and cannot be replenished on a human timescale. Once extracted and used, it cannot be replaced.',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Using the infographic provided, **evaluate** the three options for Malta.\n\nIn your answer, discuss:\n- The **advantages** of your recommended option\n- The **political implications** of the options\n- The **economic implications** of the options, using specific data from the infographic\n\nConclude with a **recommendation** for Malta, justifying your choice.',
        marks: 12,
        ph: 'Recommended option example: Offshore wind turbines.\n\nAdvantages: Zero carbon emissions; no fuel costs once built; power output of 250 MW.\n\nPolitical implications: Solar cable requires agreement with a north African nation — political risk if relations change. Nuclear plant may face public opposition and international scrutiny. Wind turbines are politically neutral and fully within Malta\'s control.\n\nEconomic implications (from the infographic): Nuclear has the highest decommission cost (€1000M) and a construction cost of €2.2B, but the lowest cost per kWh (€0.02). Solar cable has a low cost per kWh (€0.05) but the highest construction cost (€3.9B). Wind costs €0.15/kWh with the lowest construction cost (€1.6B), but the largest area (73 km²) and shortest lifetime (15 years). Wind offers a balance of low up-front cost and full independence.\n\nConclusion: Offshore wind turbines are recommended for Malta because they have the lowest construction cost, are politically independent, and provide reliable power without fossil fuels or nuclear risks.',
        level: 'advanced',
      },
    ],
  },

]
