import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — May 2024 · VARIANT 1  (isomorphic to physics-may-2024)
// Same construct per question (crit, command term, marks, task structure, tags);
// NEW real-world context + self-contained data-driven artefacts; numbers recomputed.
//   Q1 Thermal/greenhouse:  coal station  → wood-pellet (biomass) power station
//   Q2 Fission/decay:       U-235         → plutonium-239 fission
//   Q3 Wire resistance:     nichrome wire → manganin wire
//   Q4 Magnet + energy:     iron spheres+ferrite → steel ball-bearings + neodymium (Gauss) accelerator
//   Q5 Motor effect:        rod between magnet rows → rod on copper rails (linear motor)
//   Q6 Telescopes:          Hooker reflector → Newtonian reflector
//   Q7 Space-telescope essay: JWST → Hubble Space Telescope
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-may-2024-v1',
  subject: 'Physics',
  session: 'May',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Biomass (wood-pellet) Power Station & Greenhouse Effect (12) Criterion A
  // V1: Q1d 3.1×10⁷ × 4.2×10⁵ = 1.3×10¹³ J; Q1e 28 800 MW × 0.30 = 8 640 MW
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Biomass Power Station & Greenhouse Effect',
    marks: 12,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['states of matter', 'kinetic theory', 'specific heat capacity', 'phase changes'], level: 'proficient' },
    stem: 'Biomass power stations are systems that convert chemical potential energy into electricity, starting with the combustion of compressed wood pellets to heat water.\n\nA wood-pellet thermal power station involves three states of matter. The diagram shows the main components of the plant.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="twr1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4dde3"/><stop offset="1" stop-color="#9fb0bb"/></linearGradient><linearGradient id="boil1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6c177"/><stop offset="1" stop-color="#e08a1e"/></linearGradient></defs><rect width="620" height="320" fill="#ffffff"/><text x="310" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Wood-pellet (biomass) power station</text><rect x="40" y="170" width="90" height="100" rx="6" fill="#caa06a" stroke="#7a5a30"/><polygon points="40,170 85,135 130,170" fill="#b8895a" stroke="#7a5a30"/><circle cx="70" cy="210" r="5" fill="#6b4a22"/><circle cx="95" cy="225" r="5" fill="#6b4a22"/><circle cx="80" cy="245" r="5" fill="#6b4a22"/><text x="85" y="288" font-size="11" text-anchor="middle" fill="#6b4a22">fuel hopper / furnace</text><rect x="170" y="150" width="120" height="120" rx="8" fill="url(#boil1)" stroke="#a8651a"/><path d="M185,250 q14,-22 28,0 q14,-22 28,0 q14,-22 28,0" fill="none" stroke="#ffffff" stroke-width="2"/><text x="230" y="288" font-size="11" text-anchor="middle" fill="#a8651a">boiler / heat exchanger</text><line x1="290" y1="180" x2="360" y2="180" stroke="#0b7285" stroke-width="3"/><text x="325" y="172" font-size="10" text-anchor="middle" fill="#0b7285">steam</text><circle cx="395" cy="180" r="28" fill="#cfe3ec" stroke="#0b7285" stroke-width="2"/><path d="M395,180 l20,-8 l0,16 Z" fill="#0b7285"/><circle cx="383" cy="180" r="4" fill="#0b7285"/><text x="395" y="225" font-size="11" text-anchor="middle" fill="#0b7285">turbine</text><path d="M470,260 Q470,150 510,140 Q550,150 550,260 Z" fill="url(#twr1)" stroke="#6b7c87"/><ellipse cx="510" cy="140" rx="40" ry="9" fill="#eef3f6" stroke="#6b7c87"/><path d="M495,128 q8,-18 0,-34 M520,128 q-8,-18 0,-34" fill="none" stroke="#b6c4cf" stroke-width="3"/><text x="510" y="288" font-size="11" text-anchor="middle" fill="#6b7c87">cooling tower / condenser</text><line x1="425" y1="180" x2="470" y2="200" stroke="#0b7285" stroke-width="2" stroke-dasharray="4 3"/></svg>',
      },
      caption: 'A wood-pellet (biomass) power station: solid pellets are burned to boil water, the steam drives a turbine, and the condenser/cooling tower returns it to liquid.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the location of each substance below by selecting the correct region in the power station diagram.\n\n• Water (liquid)\n• Steam (gas)\n• Wood pellets (solid)',
        marks: 1,
        widget: 'inline_dropdown_select',
        widgetItems: ['Water', 'Steam', 'Wood pellets'],
        widgetOptions: ['Boiler / heat exchanger', 'Fuel hopper / furnace', 'Cooling tower / condenser'],
        ph: 'Water: ...\nSteam: ...\nWood pellets: ...',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'Absorbing heat can affect the kinetic energy of water molecules. **State** how water molecules are affected by this increase in kinetic energy.',
        marks: 1,
        ph: 'The molecules move faster / vibrate more...',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'As water boils into steam, the heat energy absorbed does **not** affect the kinetic energy of the molecules. **Outline** what happens to this heat energy, referring to the movement and arrangement of particles.',
        marks: 2,
        ph: 'The heat energy is used to...\nParticles move from... to...\nThe arrangement of particles changes because...',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'One kilogram of wood pellets contains approximately **3.1 × 10⁷ J** of chemical potential energy. For a biomass power plant that burns **4.2 × 10⁵ kg** of wood pellets per hour, **calculate** the energy released in one hour.\n\nYou should give your answer to two significant figures.',
        marks: 2,
        ph: 'Energy = energy per kg × mass\n= 3.1 × 10⁷ × 4.2 × 10⁵\n= ... J (2 s.f.)',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'Another biomass power plant burns enough wood pellets per hour to generate a power of **28 800 MW**. If the efficiency of this power station is **30 %**, **determine** the useful power output.',
        marks: 2,
        ph: 'Useful power = total power × efficiency\n= 28 800 MW × 0.30\n= ... MW',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'Although wood pellets are renewable, burning them still releases carbon dioxide, a greenhouse gas, when forests are not replanted quickly enough. The diagram shows the flow of energy through Earth\'s atmosphere.\n\n**Select** the arrow in the diagram which would be most affected by an increase in greenhouse gases.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'Solar energy from the Sun',
          'Energy reflected by top of clouds',
          'Heat energy from the ground',
          'Heat energy absorbed and re-emitted by greenhouse gases',
        ],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="g1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#444"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><rect x="0" y="250" width="600" height="70" fill="#cde3c4"/><line x1="0" y1="250" x2="600" y2="250" stroke="#5a7a4a" stroke-width="2"/><text x="300" y="288" font-size="12" text-anchor="middle" fill="#3f5a31">ground</text><rect x="60" y="120" width="480" height="50" rx="22" fill="#e8eef2" stroke="#9fb0bb" stroke-dasharray="5 4"/><text x="300" y="150" font-size="11" text-anchor="middle" fill="#6b7c87">greenhouse-gas layer (atmosphere)</text><circle cx="60" cy="45" r="24" fill="#f6c84c" stroke="#d9a417"/><line x1="80" y1="60" x2="180" y2="245" stroke="#e08a1e" stroke-width="3" marker-end="url(#g1)"/><text x="96" y="120" font-size="10" fill="#e08a1e">solar energy</text><line x1="200" y1="245" x2="150" y2="120" stroke="#0b7285" stroke-width="3" marker-end="url(#g1)"/><text x="120" y="210" font-size="10" fill="#0b7285">heat from ground</text><line x1="330" y1="100" x2="300" y2="40" stroke="#7a4fb5" stroke-width="3" marker-end="url(#g1)"/><text x="312" y="92" font-size="10" fill="#7a4fb5">reflected by clouds</text><path d="M380,170 q40,40 0,75" fill="none" stroke="#c0392b" stroke-width="3" marker-end="url(#g1)"/><text x="408" y="210" font-size="10" fill="#c0392b">re-emitted heat</text></svg>',
          },
          caption: 'Energy flow through Earth\'s atmosphere. Greenhouse gases absorb and re-emit heat radiated from the ground.',
        },
        ph: 'Select the most appropriate arrow',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'Greenhouse gases trap heat energy in Earth\'s atmosphere. This trapped heat is associated with more extreme weather events like storms, droughts, floods and changes to Earth\'s climate.\n\nUsing scientific knowledge, **explain** why trapping heat energy in Earth\'s atmosphere would cause more extreme weather events and changes to Earth\'s climate.',
        marks: 3,
        ph: 'Trapping heat energy causes the temperature of the atmosphere to...\nThis leads to increased... (e.g. evaporation, convection)...\nAs a result, weather events such as storms become more frequent because...',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Plutonium-239 Fission & Radioactive Decay (12) Criteria A
  // ²³⁹Pu (94 p / 145 n) → Xe-134 + Zr-103 + 2n ; decay graph read 75% decayed
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Nuclear Fission & Radioactive Decay',
    marks: 12,
    topicCanonical: 'Nuclear Reactions & Energy',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'radioactive decay', 'nuclear equations', 'half-life', 'nuclear energy'], level: 'proficient' },
    stem: 'Nuclear fission is a reaction in which a heavy nucleus splits into two smaller nuclei, releasing large amounts of energy and two or more free neutrons.\n\nThe animation shows the fission of plutonium-239 when it absorbs a neutron. The plutonium nucleus splits into xenon-134 and zirconium-103, releasing two free neutrons and energy.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="pu2" cx="0.4" cy="0.35"><stop offset="0" stop-color="#9a8fc9"/><stop offset="1" stop-color="#4b3f86"/></radialGradient><marker id="n2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#444"/></marker></defs><rect width="600" height="220" fill="#ffffff"/><circle cx="48" cy="110" r="7" fill="#c0392b"/><text x="32" y="135" font-size="10" fill="#c0392b">neutron</text><line x1="58" y1="110" x2="150" y2="110" stroke="#444" stroke-width="1.5" marker-end="url(#n2)"/><circle cx="186" cy="110" r="36" fill="url(#pu2)" stroke="#2e2659"/><text x="186" y="114" font-size="12" font-weight="700" text-anchor="middle" fill="#ffffff">Pu-239</text><line x1="226" y1="110" x2="286" y2="110" stroke="#444" stroke-width="1.5"/><circle cx="346" cy="58" r="26" fill="#e3a93c" stroke="#a8721a"/><text x="346" y="62" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Xe-134</text><circle cx="346" cy="166" r="23" fill="#5b9a6b" stroke="#356b44"/><text x="346" y="170" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Zr-103</text><line x1="380" y1="54" x2="470" y2="36" stroke="#c0392b" stroke-width="1.5" marker-end="url(#n2)"/><line x1="382" y1="166" x2="472" y2="184" stroke="#c0392b" stroke-width="1.5" marker-end="url(#n2)"/><text x="500" y="113" font-size="11" fill="#c0392b">neutrons + energy</text></svg>',
      },
      caption: 'A slow neutron is absorbed by plutonium-239, which splits into two daughter nuclei and releases two more neutrons and energy.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the periodic table, **state** the number of protons and the number of neutrons present in the nucleus of one atom of plutonium-239.',
        marks: 2,
        ph: 'Number of protons: ...\nNumber of neutrons: ...',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Outline** how the protons and neutrons are affected by the fission of plutonium-239.',
        marks: 2,
        ph: 'The protons and neutrons are divided between the two daughter nuclei (Xe-134 and Zr-103).\nThe total number of protons and neutrons after the reaction is the same as before.\n...',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'A neutron is needed to start this fission reaction. Neutrons are also produced during the reaction. This means that a chain reaction can occur with the fission of plutonium-239.\n\n**Suggest** the meaning of the term chain reaction.',
        marks: 2,
        ph: 'A chain reaction is when one reaction causes another reaction to occur.\nThe released neutrons trigger further fission reactions...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'In nuclear power plants, fission reactions are used to supply energy but these chain reactions have to be carefully controlled.\n\n**Describe** a possible danger of an uncontrolled chain reaction in a nuclear power plant.',
        marks: 3,
        ph: 'An uncontrolled chain reaction means more and more reactions occur...\nThis releases enormous amounts of energy rapidly...\nThis could result in... (e.g. nuclear meltdown, explosion, release of radioactive material)...',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Nuclear power plants use plutonium and uranium in the form of fuel rods. These rods are no longer useable when the level of fissile material remaining is low. However, used fuel rods still contain a small amount of remaining plutonium-239 which decays over time, emitting radiation as shown in the graph below.\n\nUse the graph to **predict** how many years it would take for **75 %** of the remaining plutonium to decay.',
        marks: 1,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'time / thousand years',
            yLabel: 'percentage of plutonium remaining / %',
            points: [[0, 100], [24, 50], [48, 25], [72, 12.5], [96, 6.25]],
            readouts: [{ x: 48, note: '75% decayed means 25% remaining — read the time at 25%' }],
            dataMaxX: 96,
          },
          caption: 'Decay of plutonium-239 in a used fuel rod (drag the crosshair to read values).',
        },
        ph: 'Read from graph: 75% decayed means 25% remaining.\nFind time at 25% on the graph.\n≈ ... thousand years',
        level: 'developing',
      },
      {
        label: 'f',
        text: '**Suggest** why the long decay time of plutonium-239 poses a significant challenge for the safe disposal of fuel rods.',
        marks: 2,
        ph: 'The long decay time means the fuel rods remain radioactive for... years.\nThis is challenging because...\nThe rods must be stored safely and securely because...',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Manganin Wire Resistance Investigation (16) Criteria B / C
  // R = V/I = 1.8/0.30 = 6.0 Ω ; plot (100, 6.0)
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Wire Resistance Investigation',
    marks: 16,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['resistance', "Ohm\'s law", 'measuring current and voltage', 'series circuits'], level: 'proficient' },
    stem: 'A student plans to investigate how the length of a manganin wire affects its electrical resistance.\n\nThe table shows the wires available in the laboratory:\n\n| Length / cm | Material  | Cross-sectional area / mm² |\n|-------------|-----------|----------------------------|\n| 40          | Manganin  | 2.5                        |\n| 60          | Manganin  | 2.5                        |\n| 80          | Manganin  | 2.5                        |\n| 100         | Copper    | 1.0                        |\n| 100         | Manganin  | 1.5                        |\n| 100         | Copper    | 2.0                        |\n| 100         | Aluminium | 2.5                        |\n| 100         | Copper    | 2.5                        |\n| 100         | Gold      | 2.5                        |\n| 100         | Manganin  | 2.5                        |\n| 100         | Copper    | 3.0                        |\n| 120         | Manganin  | 2.5                        |',
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that would be tested in this investigation.',
        marks: 1,
        ph: 'How does the length of a manganin wire affect its electrical resistance?',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for this investigation using scientific reasoning.\n\nIf:\n\nThen:\n\nBecause:',
        marks: 3,
        ph: 'If: the length of the manganin wire increases,\nThen: the resistance of the wire will increase,\nBecause: current (electrons) must travel further through more ions, causing more collisions, so resistance is proportional to length (R = ρL/A).',
        level: 'proficient',
      },
      {
        label: 'c',
        text: '**Select** the wires the student should use to collect sufficient data to determine the relationship between the resistance and the length of the wire.',
        marks: 3,
        widget: 'radio_select',
        widgetOptions: [
          'Manganin wires: 40 cm, 60 cm, 80 cm, 100 cm, 120 cm (all 2.5 mm²)',
          'All 100 cm wires of different materials',
          'Manganin wires of different cross-sectional areas',
          'Any five wires regardless of material',
        ],
        ph: 'Select the correct set of wires',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Justify** the selection you made in part (c).',
        marks: 2,
        ph: 'The independent variable is the length of the wire.\nTo test only the effect of length, the material and cross-sectional area must be kept constant (controlled variables).\nFive different lengths provide sufficient data points to identify a relationship.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: '**Select** the location in the circuit below for each piece of equipment required to take measurements to calculate the resistance of a wire.',
        marks: 1,
        artefact: {
          component: 'CircuitSim',
          data: {
            mode: 'place',
            slots: [
              { id: 'ammeter', correct: 'series with wire' },
              { id: 'voltmeter', correct: 'parallel with wire' },
            ],
          },
          caption: 'Drag the ammeter into series with the wire and the voltmeter into parallel across it.',
        },
        widget: 'radio_select',
        widgetOptions: [
          'Voltmeter in parallel with wire; Ammeter in series with wire',
          'Voltmeter in series with wire; Ammeter in parallel with wire',
          'Both Voltmeter and Ammeter in series',
          'Both Voltmeter and Ammeter in parallel',
        ],
        ph: 'Select the correct circuit configuration',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'For one of the trials when the wire was **100 cm** long, the voltage across the wire was **1.8 V** and the current through the wire was measured as **0.30 A**. **Determine** the resistance of the wire.',
        marks: 2,
        ph: 'R = V / I\nR = 1.8 / 0.30\nR = ... Ω',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'The graph below shows the processed data from the experiment. **Plot** the value you determined in part (f) and **draw** the line of best fit on the graph.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'plot',
            xAxis: { label: 'length / cm', min: 0, max: 120, tick: 20 },
            yAxis: { label: 'resistance / Ω', min: 0, max: 8, tick: 1 },
            dataTable: [{ x: 40, y: 2.4 }, { x: 60, y: 3.6 }, { x: 80, y: 4.8 }, { x: 120, y: 7.2 }],
            plotMissing: [100, 6.0],
          },
          caption: 'Resistance versus length for the manganin wire — plot the missing point at 100 cm.',
        },
        ph: 'Plot the point at (100, 6.0) on the graph.\nDraw a straight line of best fit through the origin that best models all data points.',
        level: 'developing',
      },
      {
        label: 'h',
        text: 'According to theory, the relationship between resistance and length should be proportional, however, the student\'s results do not fit perfectly on the line of best fit. **Suggest** one source of error in this investigation and how it would affect the calculated value of resistance.',
        marks: 3,
        ph: 'Source of error: ...\nEffect on resistance: If this error occurs, the measured resistance will be [higher/lower] than the actual value because...',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Gauss accelerator: steel ball-bearings + neodymium magnet (23) Criteria A/B/C
  // HARDCODED widget q4b (variable_classify) preserved — renders fixed IV/DV/CV content.
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Ball, Magnet & Energy Conservation',
    marks: 23,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['magnetic poles and fields', 'magnetic field lines', 'work done'], level: 'advanced' },
    stem: 'A student sets up a magnetic (Gauss) accelerator with two steel ball-bearings held magnetically on one side of a very strong neodymium magnet placed on an aluminium rail. A single ball-bearing is rolled towards the other side of the magnet. As this ball-bearing collides with the magnet, the ball-bearing on the other side shoots out with a much faster velocity, as shown in the slow-motion video.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="bb1" cx="0.35" cy="0.3"><stop offset="0" stop-color="#f0f4f7"/><stop offset="1" stop-color="#8a99a6"/></radialGradient><marker id="m4" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="620" height="230" fill="#ffffff"/><rect x="30" y="160" width="560" height="16" rx="3" fill="#b6c4cf" stroke="#7a8b97"/><text x="310" y="200" font-size="11" text-anchor="middle" fill="#7a8b97">aluminium rail</text><rect x="300" y="128" width="44" height="32" rx="3" fill="#0b7285" stroke="#073d49"/><text x="311" y="149" font-size="11" font-weight="700" fill="#ffffff">N</text><text x="328" y="149" font-size="11" font-weight="700" fill="#ffffff">S</text><text x="322" y="120" font-size="10" text-anchor="middle" fill="#0b7285">neodymium magnet</text><circle cx="356" cy="148" r="12" fill="url(#bb1)" stroke="#5b6b78"/><circle cx="380" cy="148" r="12" fill="url(#bb1)" stroke="#5b6b78"/><circle cx="150" cy="148" r="12" fill="url(#bb1)" stroke="#5b6b78"/><line x1="170" y1="148" x2="288" y2="148" stroke="#0b7285" stroke-width="2.5" marker-end="url(#m4)"/><text x="225" y="138" font-size="11" fill="#0b7285">incoming ball-bearing</text><line x1="396" y1="148" x2="540" y2="148" stroke="#e08a1e" stroke-width="3" marker-end="url(#m4)"/><text x="470" y="138" font-size="11" fill="#e08a1e">exits fast</text></svg>',
      },
      caption: 'A Gauss accelerator: an incoming steel ball-bearing strikes the neodymium magnet and the far ball-bearing is ejected at high speed.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the conservation law that explains why the exiting ball-bearing reaches the same height for both angles of the inclined plane.',
        marks: 1,
        ph: 'The law of conservation of energy states that...',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The slow-motion video shows the motion of the ball-bearing just before it collides with the magnet. **Draw** and **label** the forces acting on the ball-bearing while it is rolling **just before** it collides with the magnet.\n\nDraggable items: Electrostatic force | Magnetic force | Normal force | Tension force | Upthrust | Weight force',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Electrostatic force', 'Magnetic force', 'Normal force', 'Tension force', 'Upthrust', 'Weight force'],
        widgetOptions: ['Acting on ball-bearing', 'Not acting on ball-bearing'],
        ph: 'Forces acting on ball-bearing just before magnet:\n• Magnetic force: direction right (towards magnet)\n• Normal force: direction up\n• Weight force: direction down\n(No tension, electrostatic, or upthrust)',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Suggest** why the acceleration of the ball-bearing is not constant as it approaches the magnet. **Justify** your answer using scientific reasoning.',
        marks: 2,
        ph: 'The magnetic force on the ball-bearing increases as it gets closer to the magnet.\nTherefore the resultant force increases...\nBy Newton\'s second law (F = ma), a greater force on the same mass means...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The neodymium magnet can be assumed to have a magnetic field similar to that of the Earth. **Select** the diagram that best represents the magnetic field lines around the magnet.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="f4" markerWidth="8" markerHeight="8" refX="6" refY="2.5" orient="auto"><path d="M0,0 L6,2.5 L0,5 Z" fill="#0b7285"/></marker></defs><rect width="600" height="200" fill="#ffffff"/><g><text x="75" y="22" font-size="13" font-weight="700" text-anchor="middle">A</text><rect x="50" y="92" width="26" height="16" fill="#c0392b"/><rect x="76" y="92" width="26" height="16" fill="#3a6ea5"/><text x="63" y="104" font-size="9" fill="#ffffff" text-anchor="middle">N</text><text x="89" y="104" font-size="9" fill="#ffffff" text-anchor="middle">S</text><path d="M76,92 C76,55 50,55 50,92" fill="none" stroke="#0b7285" stroke-width="1.5" marker-end="url(#f4)"/><path d="M102,100 C140,100 140,150 76,108" fill="none" stroke="#0b7285" stroke-width="1.5" marker-end="url(#f4)"/><path d="M50,108 C12,150 110,150 102,100" fill="none" stroke="#0b7285" stroke-width="1.5"/></g><g><text x="225" y="22" font-size="13" font-weight="700" text-anchor="middle">B</text><rect x="200" y="92" width="26" height="16" fill="#c0392b"/><rect x="226" y="92" width="26" height="16" fill="#3a6ea5"/><text x="213" y="104" font-size="9" fill="#ffffff" text-anchor="middle">N</text><text x="239" y="104" font-size="9" fill="#ffffff" text-anchor="middle">S</text><line x1="200" y1="70" x2="252" y2="70" stroke="#0b7285" stroke-width="1.5"/><line x1="200" y1="130" x2="252" y2="130" stroke="#0b7285" stroke-width="1.5"/></g><g><text x="375" y="22" font-size="13" font-weight="700" text-anchor="middle">C</text><rect x="350" y="92" width="26" height="16" fill="#c0392b"/><rect x="376" y="92" width="26" height="16" fill="#3a6ea5"/><text x="363" y="104" font-size="9" fill="#ffffff" text-anchor="middle">N</text><text x="389" y="104" font-size="9" fill="#ffffff" text-anchor="middle">S</text><circle cx="376" cy="100" r="24" fill="none" stroke="#0b7285" stroke-width="1.5"/><circle cx="376" cy="100" r="40" fill="none" stroke="#0b7285" stroke-width="1.5"/></g><g><text x="525" y="22" font-size="13" font-weight="700" text-anchor="middle">D</text><rect x="500" y="92" width="26" height="16" fill="#c0392b"/><rect x="526" y="92" width="26" height="16" fill="#3a6ea5"/><text x="513" y="104" font-size="9" fill="#ffffff" text-anchor="middle">N</text><text x="539" y="104" font-size="9" fill="#ffffff" text-anchor="middle">S</text><path d="M526,92 C560,55 590,80 552,100" fill="none" stroke="#0b7285" stroke-width="1.5" marker-end="url(#f4)"/><path d="M526,108 C560,145 590,120 552,100" fill="none" stroke="#0b7285" stroke-width="1.5" marker-end="url(#f4)"/></g></svg>',
          },
          caption: 'Four candidate magnetic-field patterns (A–D) around a bar magnet.',
        },
        ph: 'Select A, B, C, or D',
        level: 'foundation',
      },
      {
        label: 'e',
        text: 'Once the incoming ball-bearing collides with the magnet, the exiting ball-bearing on the other side has a much greater kinetic energy than the incoming ball-bearing before the collision. Use your scientific knowledge to **suggest** a reason for this observation.',
        marks: 1,
        ph: 'Magnetic potential energy stored in the system is released during the collision...\nor: changes in the magnetic field cause additional kinetic energy to be transferred to the exiting ball-bearing.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'You plan to design an investigation to find out the relationship between the maximum height (h₂) reached by the exiting ball-bearing and the initial height (h₁) of the incoming ball-bearing. In your plan, you should include:\n\n• the independent variable, dependent variable and one control variable\n• a hypothesis which is explained using scientific reasoning\n• a detailed method for how you will collect data, including the equipment you will use\n• the values of the independent variable that will be used\n• details of how you will make sure your method is safe',
        marks: 11,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="bb2" cx="0.35" cy="0.3"><stop offset="0" stop-color="#f0f4f7"/><stop offset="1" stop-color="#8a99a6"/></radialGradient></defs><rect width="560" height="280" fill="#ffffff"/><line x1="40" y1="230" x2="520" y2="230" stroke="#5b6b78" stroke-width="3"/><polygon points="40,230 200,230 200,120" fill="#eaf1f5" stroke="#9fb0bb"/><line x1="40" y1="230" x2="200" y2="120" stroke="#0b7285" stroke-width="3"/><circle cx="150" cy="150" r="11" fill="url(#bb2)" stroke="#5b6b78"/><line x1="200" y1="120" x2="200" y2="230" stroke="#94a3ad" stroke-dasharray="3 3"/><text x="206" y="180" font-size="11" fill="#0b7285">h₁</text><rect x="300" y="210" width="40" height="20" rx="3" fill="#0b7285"/><text x="320" y="224" font-size="9" fill="#ffffff" text-anchor="middle">magnet</text><polygon points="520,230 360,230 360,90" fill="#fdf0e0" stroke="#d9a417"/><line x1="520" y1="230" x2="360" y2="90" stroke="#e08a1e" stroke-width="3"/><circle cx="430" cy="118" r="11" fill="url(#bb2)" stroke="#5b6b78"/><line x1="360" y1="90" x2="360" y2="230" stroke="#94a3ad" stroke-dasharray="3 3"/><text x="338" y="160" font-size="11" fill="#e08a1e">h₂</text><text x="120" y="265" font-size="11" fill="#5b6b78">incoming ramp</text><text x="430" y="265" font-size="11" fill="#5b6b78">exit ramp</text></svg>',
          },
          caption: 'Gauss-accelerator apparatus: the incoming ball-bearing released from height h₁; the exiting ball-bearing rises to height h₂.',
        },
        ph: 'Independent variable (IV): initial height h₁ of the incoming ball-bearing\nDependent variable (DV): maximum height h₂ reached by the exiting ball-bearing\nControl variable: mass of ball-bearings / angle of track\n\nHypothesis: As h₁ increases, h₂ will increase because...\n\nMethod:\n1. Set up the inclined aluminium rail...\n2. Release the ball-bearing from h₁ = 5 cm and measure h₂ using a ruler...\n3. Repeat for h₁ = 10, 15, 20, 25 cm\n4. Repeat each value 3 times and calculate the mean...\n\nSafety: ...',
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Construct** a data table that could be used to record data from the investigation in part (f). The table must include:\n\n• an appropriate number of rows and columns\n• the values of the independent variable that will be used\n• a column for processed data with an appropriate title',
        marks: 4,
        ph: 'Initial Height of Ball-bearing (h₁) / cm | Trial 1 Max Height (h₂) / cm | Trial 2 / cm | Trial 3 / cm | Mean h₂ / cm\n5   | | | |\n10  | | | |\n15  | | | |\n20  | | | |\n25  | | | |',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Linear motor: conducting rod on copper rails (11) Criteria B/C/D
  // s=0.18 m; at 12 A t=1.50 s → a = 2s/t² = 0.16 m s⁻²; x-intercept ~4 A; friction ~2.7 mN
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Motor Effect — Electromagnetic Force',
    marks: 11,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['motors', "Fleming\'s left-hand rule", 'electromagnetic induction'], level: 'proficient' },
    stem: 'A student carries out an experiment using the equipment below. A conducting rod rests across two parallel copper rails between the poles of a magnet on a level surface. When the switch is closed, a current flows through the rod. The rod accelerates to the right. The student adjusts the current of the power supply. The rod is initially at rest and the student measures the time taken by the rod to move **18 cm**.\n\nThe table shows results collected by the student at different current values:\n\n| Current / A | Time / s |\n|-------------|----------|\n| 7           | 2.40     |\n| 8           | 2.10     |\n| 9           | 1.84     |\n| 10          | (missing)|\n| 11          | 1.60     |\n| 12          | 1.50     |',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="mt5" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="260" fill="#ffffff"/><rect x="80" y="90" width="420" height="10" fill="#c98a3c" stroke="#9a6a26"/><rect x="80" y="160" width="420" height="10" fill="#c98a3c" stroke="#9a6a26"/><text x="290" y="205" font-size="11" text-anchor="middle" fill="#9a6a26">parallel copper rails</text><rect x="250" y="78" width="12" height="104" rx="2" fill="#5b6b78"/><text x="256" y="70" font-size="10" text-anchor="middle" fill="#5b6b78">rod</text><rect x="180" y="58" width="160" height="20" fill="#c0392b" opacity="0.25"/><rect x="180" y="182" width="160" height="20" fill="#3a6ea5" opacity="0.25"/><text x="260" y="52" font-size="10" text-anchor="middle" fill="#c0392b">N</text><text x="260" y="216" font-size="10" text-anchor="middle" fill="#3a6ea5">S</text><line x1="262" y1="130" x2="430" y2="130" stroke="#0b7285" stroke-width="2.5" marker-end="url(#mt5)"/><text x="360" y="122" font-size="11" fill="#0b7285">rod accelerates</text><line x1="40" y1="95" x2="80" y2="95" stroke="#5b6b78" stroke-width="2"/><line x1="40" y1="165" x2="80" y2="165" stroke="#5b6b78" stroke-width="2"/><rect x="18" y="110" width="22" height="40" rx="2" fill="#222222"/><text x="29" y="135" font-size="9" fill="#3ad36a" text-anchor="middle" font-family="monospace">A</text><line x1="262" y1="172" x2="262" y2="190" stroke="#94a3ad"/><line x1="455" y1="172" x2="455" y2="190" stroke="#94a3ad"/><text x="262" y="230" font-size="9" text-anchor="middle" fill="#94a3ad">0 cm</text><text x="455" y="230" font-size="9" text-anchor="middle" fill="#94a3ad">18 cm</text></svg>',
      },
      caption: 'A conducting rod on copper rails between magnet poles. The motor effect drives the rod 18 cm along the rails.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The time for a current of **10 A** was not recorded by the student. Using the animation, **measure** the time it takes the rod to travel 18 cm from rest.',
        marks: 1,
        ph: 'Time at 10 A ≈ ... s\n(Expected answer: approximately 1.70 s based on the trend)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'The student assumes that the rod accelerates uniformly. For the last trial, at a current of **12 A**, the student records a time of **1.50 s**. Using the formula sheet, **calculate** the acceleration of the rod.',
        marks: 3,
        ph: 'Using s = ½at²:\n0.18 = ½ × a × (1.50)²\na = (2 × 0.18) / (1.50)²\na = 0.36 / 2.25\na = ... m s⁻²',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'After calculating its acceleration, the student wanted to calculate the net force acting on the rod. **State** what additional quantity would be needed for this calculation.',
        marks: 1,
        ph: 'The mass of the rod (in kg) — not weight.',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'Before starting the experiment, the student makes the following prediction:\n\n*"If the electric current passing through the rod doubles, the force on the rod will double. The relationship will be proportional."*\n\nIf the results of the experiment support this hypothesis, **select** the graph that would represent the data.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A — straight line with negative gradient', 'B — curve levelling off', 'C — curve decreasing', 'D — straight line through origin with positive gradient'],
        ph: 'Select the correct graph shape for a proportional relationship',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'Another student processed the data and calculated the force on the rod for each current. The student plotted their data on the graph shown below.\n\nReferring to the graph, **outline** why the student\'s hypothesis in part (d) is **not** supported by the data.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'current / A',
            yLabel: 'force / mN',
            points: [[4, 0], [6, 5.4], [8, 10.8], [10, 16.2], [12, 21.6]],
            readouts: [{ x: 4, note: 'note where the line crosses the current axis' }],
            dataMaxX: 12,
          },
          caption: 'Force on the rod versus current (drag the crosshair to read values).',
        },
        ph: 'The line of best fit does not pass through the origin.\nThe x-intercept of the line of best fit is at approximately 4 A (there is no force below 4 A).\nThis means that doubling the current does not double the force, so the relationship is not proportional.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'The student adjusts the current to **4 A**. Use the graph in part (e) to **suggest** what you think would happen to the rod. **Justify** your answer.',
        marks: 2,
        ph: 'At 4 A, the force on the rod is approximately zero (the line crosses the x-axis at ~4 A).\nThe rod will not move because...\nThe net force is zero / the force is not sufficient to overcome frictional forces.',
        level: 'proficient',
      },
      {
        label: 'g',
        text: 'For the rod to move, it needs to overcome frictional forces. Use the graph to **suggest** the size of the frictional forces.',
        marks: 1,
        ph: 'From the graph, the y-intercept of the best fit line (extended) is approximately −2.6 to −2.8 mN.\nTherefore the frictional force ≈ 2.6–2.8 mN.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Newtonian Reflector & Expanding Universe (7) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Telescopes & Expanding Universe',
    marks: 7,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['telescopes', 'expansion of the universe', 'Big Bang theory'], level: 'proficient' },
    stem: 'This question is about telescopes used in astronomy to observe distant objects in the universe.',
    tasks: [
      {
        label: 'a',
        text: '**Outline** why a refracting telescope causes the different colours of light to separate.',
        marks: 2,
        ph: 'White light is made up of different wavelengths/frequencies.\nDifferent wavelengths/frequencies have different refractive indices in glass.\nTherefore different colours refract by different amounts and separate (dispersion).',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Clearer images can be obtained by using mirrors to create a reflecting telescope. In a Newtonian reflector, parallel rays from a distant object are reflected by a curved primary mirror onto a small plane secondary mirror set at 45°. The rays are reflected again by the secondary mirror and come into focus at an eyepiece on the side of the tube.\n\n**Label** the primary mirror, secondary mirror and the position of the eyepiece in the diagram shown.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'Large curved mirror at far end = Primary; small flat 45° mirror near top = Secondary; opening at side = Eyepiece',
          'Small flat mirror at far end = Primary; large curved mirror near top = Secondary',
          'Opening at bottom = Eyepiece; large mirror at top = Primary',
          'Small mirror at top = Primary; large mirror at bottom = Secondary',
        ],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="r6" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="280" fill="#ffffff"/><rect x="120" y="50" width="320" height="160" rx="10" fill="#eef3f6" stroke="#9fb0bb" stroke-width="2"/><path d="M430,60 q26,70 0,140" fill="#b9d6e3" stroke="#0b7285" stroke-width="3"/><text x="452" y="135" font-size="10" fill="#0b7285">curved primary</text><rect x="186" y="118" width="10" height="34" rx="2" transform="rotate(45 191 135)" fill="#5b6b78"/><text x="150" y="120" font-size="10" fill="#5b6b78">flat secondary (45°)</text><rect x="178" y="14" width="26" height="34" rx="4" fill="#2c3e50"/><text x="216" y="32" font-size="10" fill="#2c3e50">eyepiece</text><line x1="60" y1="90" x2="420" y2="90" stroke="#0b7285" stroke-width="1.5"/><line x1="60" y1="130" x2="420" y2="130" stroke="#0b7285" stroke-width="1.5"/><line x1="60" y1="170" x2="420" y2="170" stroke="#0b7285" stroke-width="1.5"/><text x="60" y="78" font-size="10" fill="#0b7285">parallel rays</text><path d="M422,95 L196,128" stroke="#0b7285" stroke-width="1.5"/><path d="M420,165 L198,140" stroke="#0b7285" stroke-width="1.5"/><path d="M191,128 L191,46" stroke="#0b7285" stroke-width="2" marker-end="url(#r6)"/></svg>',
          },
          caption: 'A Newtonian reflecting telescope with a curved primary mirror, a flat 45° secondary mirror and a side eyepiece.',
        },
        ph: 'Select the correct labelling arrangement',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'Isaac Newton built the first practical reflecting telescope in 1668. In a Newtonian reflector, a single ray of light is reflected by the curved primary mirror and then by the flat secondary mirror before reaching the eyepiece.\n\n**State** the number of times a single ray of light is reflected after it enters a Newtonian reflecting telescope.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="r6c" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#e08a1e"/></marker></defs><rect width="520" height="240" fill="#ffffff"/><rect x="110" y="50" width="300" height="140" rx="10" fill="#eef3f6" stroke="#9fb0bb" stroke-width="2"/><path d="M400,58 q24,62 0,124" fill="#b9d6e3" stroke="#0b7285" stroke-width="3"/><rect x="176" y="104" width="9" height="30" rx="2" transform="rotate(45 180 119)" fill="#5b6b78"/><rect x="168" y="16" width="24" height="30" rx="4" fill="#2c3e50"/><line x1="60" y1="120" x2="402" y2="120" stroke="#e08a1e" stroke-width="2"/><path d="M401,118 L181,120" stroke="#e08a1e" stroke-width="2" marker-end="url(#r6c)"/><path d="M180,119 L180,48" stroke="#e08a1e" stroke-width="2" marker-end="url(#r6c)"/><circle cx="400" cy="120" r="5" fill="#c0392b"/><text x="408" y="114" font-size="9" fill="#c0392b">1</text><circle cx="180" cy="119" r="5" fill="#c0392b"/><text x="158" y="113" font-size="9" fill="#c0392b">2</text><text x="60" y="108" font-size="10" fill="#e08a1e">ray in</text></svg>',
          },
          caption: 'Ray path through a Newtonian reflector: reflection at the primary mirror, then at the secondary mirror.',
        },
        ph: 'Number of reflections = ...',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'Large reflecting telescopes like those built in the early 20th century were used by Edwin Hubble to make observations that would change our view of the universe forever. He was able to prove that the universe extends far beyond the edge of the Milky Way galaxy. Hubble also proposed that the universe is expanding.\n\n**Suggest** what phenomenon Hubble observed to show him that the universe is expanding.',
        marks: 1,
        ph: 'Hubble observed that galaxies are moving away from us (redshift).\nThe light from distant galaxies is shifted to longer wavelengths (red shift), suggesting they are receding.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The idea of having a telescope in space, instead of on the surface of the Earth, was proposed early in the 20th century. This was an idea to improve the quality of the observations that could be made.\n\n**Suggest** why a telescope in space can make clearer observations than a telescope on the Earth\'s surface.',
        marks: 2,
        ph: 'A space telescope is above the Earth\'s atmosphere.\nThe atmosphere on Earth causes scattering/refraction/absorption/light pollution/weather interference of light.\nIn space, there is no atmosphere so these effects are absent and the images are clearer.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Hubble Space Telescope (19) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Hubble Space Telescope (HST)',
    marks: 19,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['telescopes', 'expansion of the universe', 'stars and stellar evolution'], level: 'advanced' },
    stem: 'The Hubble Space Telescope (HST), named after the astronomer Edwin Hubble, was first proposed in the 1940s but wasn\'t launched until 1990 due to technical delays and budget problems.\n\nSoon after the telescope had been successfully launched into low-Earth orbit, a problem with the main mirror was discovered: it had been ground to the wrong shape and produced blurred images.\n\nA Space Shuttle servicing mission in 1993 corrected the problem with the mirror and brought instrument upgrades to the telescope. The mission to correct the telescope took almost 11 days and the crew members made five spacewalks during the mission.\n\nThe HST has changed our understanding of the universe forever. A famous image, the Hubble Deep Field, was taken in 1995 by pointing the telescope at an apparently empty patch of sky for ten days, revealing thousands of distant galaxies.\n\nThis image has been replicated on everything from T-shirts to coffee mugs.\n\nBecause Hubble orbits only about 540 km above the Earth, astronauts on the Space Shuttle were able to reach it and service it five times between 1993 and 2009, repairing faults and fitting newer cameras.\n\nThe telescope is one of the most expensive scientific instruments ever made. However, the multi-billion-dollar cost is much less than the over 750 billion dollars that the US has as its annual military budget.',
    tasks: [
      {
        label: 'a',
        text: 'Using the information in the passage and your wider MYP studies, **discuss** and **evaluate** the development of the HST and its role in extending our knowledge and understanding of the universe.\n\nIn your answer you should include:\n\n• the scientific challenges of launching a telescope into space\n• the social or cultural implications of the observations made with telescopes\n• the economic implications of spending government funds on a space telescope\n• a concluding appraisal giving your opinion on the impact of the HST',
        marks: 13,
        ph: 'Scientific challenges:\n• Technical complexity: precision grinding of the mirror, the flaw that blurred early images...\n• Operating in orbit: extreme temperatures, micrometeoroid damage, pointing stability...\n• Servicing: reachable only by Space Shuttle in low-Earth orbit, demanding spacewalks...\n\nSocial/cultural implications:\n• Hubble Deep Field image inspired public and appeared on merchandise...\n• Hubble images transformed how people picture the universe...\n\nEconomic implications:\n• Multi-billion-dollar cost vs military spending comparison...\n• Long-term benefits to science and technology...\n\nConclusion: Overall, the HST represents...',
        level: 'advanced',
      },
      {
        label: 'b',
        text: 'The HST carries a spectrograph that some people believe could help provide evidence of conditions for life on other planets.\n\nSome facts about the HST are given below:\n\n• The spectrograph can detect substances such as water vapour, oxygen, ozone and methane in the atmospheres of planets outside our solar system. These planets are known as exoplanets.\n\n• The exoplanet has to pass directly in front of (transit) its parent star for starlight to shine through its atmosphere and be analysed by the instrument.\n\n• Only a small fraction of known exoplanets transit their star as seen from Earth, and the planet must be large with a thick atmosphere for the signal to be strong enough to detect.\n\nUse the information above to **evaluate** the benefits and limitations of using the spectrograph on the HST to search for evidence of life on other planets.',
        marks: 6,
        ph: 'Benefits:\n• Can detect biosignature gases (water vapour, oxygen, ozone, methane) in exoplanet atmospheres...\n• Provides scientific evidence for/against habitable conditions without sending spacecraft...\n\nLimitations:\n• Only works when the planet transits its star — only a small fraction do so as seen from Earth...\n• The planet must be large with a thick atmosphere for a strong enough signal...\n• Detecting these gases does not by itself confirm life...\n\nConclusion: The instrument has significant scientific value but narrow applicability...',
        level: 'advanced',
      },
    ],
  },
]
