import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — May 2024 · VARIANT 2  (isomorphic to physics-may-2024; ≠ v1)
// Same construct per question (crit, command term, marks, task structure, tags);
// NEW real-world context + self-contained data-driven artefacts; numbers recomputed.
//   Q1 Thermal/greenhouse:  coal station  → municipal waste-to-energy incinerator
//   Q2 Fission/decay:       U-235         → thorium-fuelled uranium-233 fission
//   Q3 Wire resistance:     nichrome wire → tungsten wire
//   Q4 Magnet + energy:     iron spheres+ferrite → tungsten-carbide spheres + samarium-cobalt magnet (ceramic track)
//   Q5 Motor effect:        rod between magnet rows → aluminium bar cart between magnet rows
//   Q6 Telescopes:          Hooker reflector → Cassegrain reflector
//   Q7 Space-telescope essay: JWST → Nancy Grace Roman Space Telescope
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-may-2024-v2',
  subject: 'Physics',
  session: 'May',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Waste-to-Energy Incinerator & Greenhouse Effect (12) Criterion A
  // V2: Q1d 2.7×10⁷ × 4.4×10⁵ = 1.2×10¹³ J; Q1e 33 600 MW × 0.20 = 6 720 MW
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Waste-to-Energy Incinerator & Greenhouse Effect',
    marks: 12,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['states of matter', 'kinetic theory', 'specific heat capacity', 'phase changes'], level: 'proficient' },
    stem: 'Waste-to-energy incinerators are systems that convert chemical potential energy into electricity, starting with the combustion of municipal solid waste to heat water.\n\nA waste-to-energy power station involves three states of matter. The diagram shows the main components of the plant.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="twr2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4dde3"/><stop offset="1" stop-color="#9fb0bb"/></linearGradient><linearGradient id="boil2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6c177"/><stop offset="1" stop-color="#e08a1e"/></linearGradient></defs><rect width="620" height="320" fill="#ffffff"/><text x="310" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Waste-to-energy incinerator</text><rect x="40" y="160" width="96" height="110" rx="6" fill="#8a99a6" stroke="#5b6b78"/><rect x="48" y="172" width="80" height="20" fill="#6b7c87"/><circle cx="66" cy="220" r="6" fill="#4a5a66"/><rect x="88" y="232" width="14" height="14" fill="#4a5a66"/><polygon points="78,205 92,200 86,215" fill="#5b6b78"/><text x="88" y="288" font-size="11" text-anchor="middle" fill="#5b6b78">fuel hopper / furnace</text><rect x="176" y="150" width="120" height="120" rx="8" fill="url(#boil2)" stroke="#a8651a"/><path d="M191,250 q14,-22 28,0 q14,-22 28,0 q14,-22 28,0" fill="none" stroke="#ffffff" stroke-width="2"/><text x="236" y="288" font-size="11" text-anchor="middle" fill="#a8651a">boiler / heat exchanger</text><line x1="296" y1="180" x2="362" y2="180" stroke="#0b7285" stroke-width="3"/><text x="329" y="172" font-size="10" text-anchor="middle" fill="#0b7285">steam</text><circle cx="396" cy="180" r="28" fill="#cfe3ec" stroke="#0b7285" stroke-width="2"/><path d="M396,180 l20,-8 l0,16 Z" fill="#0b7285"/><circle cx="384" cy="180" r="4" fill="#0b7285"/><text x="396" y="225" font-size="11" text-anchor="middle" fill="#0b7285">turbine</text><path d="M470,260 Q470,150 510,140 Q550,150 550,260 Z" fill="url(#twr2)" stroke="#6b7c87"/><ellipse cx="510" cy="140" rx="40" ry="9" fill="#eef3f6" stroke="#6b7c87"/><path d="M495,128 q8,-18 0,-34 M520,128 q-8,-18 0,-34" fill="none" stroke="#b6c4cf" stroke-width="3"/><text x="510" y="288" font-size="11" text-anchor="middle" fill="#6b7c87">cooling tower / condenser</text><line x1="426" y1="180" x2="470" y2="200" stroke="#0b7285" stroke-width="2" stroke-dasharray="4 3"/></svg>',
      },
      caption: 'A waste-to-energy incinerator: solid municipal waste is burned to boil water, the steam drives a turbine, and the condenser/cooling tower returns it to liquid.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the location of each substance below by selecting the correct region in the power station diagram.\n\n• Water (liquid)\n• Steam (gas)\n• Solid waste (solid)',
        marks: 1,
        widget: 'inline_dropdown_select',
        widgetItems: ['Water', 'Steam', 'Solid waste'],
        widgetOptions: ['Boiler / heat exchanger', 'Fuel hopper / furnace', 'Cooling tower / condenser'],
        ph: 'Water: ...\nSteam: ...\nSolid waste: ...',
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
        text: 'One kilogram of municipal solid waste contains approximately **2.7 × 10⁷ J** of chemical potential energy. For a waste-to-energy plant that burns **4.4 × 10⁵ kg** of waste per hour, **calculate** the energy released in one hour.\n\nYou should give your answer to two significant figures.',
        marks: 2,
        ph: 'Energy = energy per kg × mass\n= 2.7 × 10⁷ × 4.4 × 10⁵\n= ... J (2 s.f.)',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'Another waste-to-energy plant burns enough waste per hour to generate a power of **33 600 MW**. If the efficiency of this power station is **20 %**, **determine** the useful power output.',
        marks: 2,
        ph: 'Useful power = total power × efficiency\n= 33 600 MW × 0.20\n= ... MW',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'Burning municipal waste releases carbon dioxide, a greenhouse gas, into Earth\'s atmosphere. The diagram shows the flow of energy through Earth\'s atmosphere.\n\n**Select** the arrow in the diagram which would be most affected by an increase in greenhouse gases.',
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
            svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="g2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#444"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><rect x="0" y="250" width="600" height="70" fill="#cde3c4"/><line x1="0" y1="250" x2="600" y2="250" stroke="#5a7a4a" stroke-width="2"/><text x="300" y="288" font-size="12" text-anchor="middle" fill="#3f5a31">ground</text><rect x="60" y="120" width="480" height="50" rx="22" fill="#e8eef2" stroke="#9fb0bb" stroke-dasharray="5 4"/><text x="300" y="150" font-size="11" text-anchor="middle" fill="#6b7c87">greenhouse-gas layer (atmosphere)</text><circle cx="60" cy="45" r="24" fill="#f6c84c" stroke="#d9a417"/><line x1="80" y1="60" x2="180" y2="245" stroke="#e08a1e" stroke-width="3" marker-end="url(#g2)"/><text x="96" y="120" font-size="10" fill="#e08a1e">solar energy</text><line x1="200" y1="245" x2="150" y2="120" stroke="#0b7285" stroke-width="3" marker-end="url(#g2)"/><text x="120" y="210" font-size="10" fill="#0b7285">heat from ground</text><line x1="330" y1="100" x2="300" y2="40" stroke="#7a4fb5" stroke-width="3" marker-end="url(#g2)"/><text x="312" y="92" font-size="10" fill="#7a4fb5">reflected by clouds</text><path d="M380,170 q40,40 0,75" fill="none" stroke="#c0392b" stroke-width="3" marker-end="url(#g2)"/><text x="408" y="210" font-size="10" fill="#c0392b">re-emitted heat</text></svg>',
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
  // QUESTION 2 — Thorium-fuelled Uranium-233 Fission & Decay (12) Criteria A
  // ²³³U (92 p / 141 n) → Ce-140 + Mo-91 + 2n ; decay graph read 75% decayed
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
    stem: 'Nuclear fission is a reaction in which a heavy nucleus splits into two smaller nuclei, releasing large amounts of energy and two or more free neutrons.\n\nIn a thorium reactor, thorium-232 absorbs a neutron and converts into the fissile fuel uranium-233. The animation shows the fission of uranium-233 when it absorbs a neutron. The uranium nucleus splits into cerium-140 and molybdenum-91, releasing two free neutrons and energy.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="u2" cx="0.4" cy="0.35"><stop offset="0" stop-color="#7fb2c9"/><stop offset="1" stop-color="#2c6c86"/></radialGradient><marker id="n22" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#444"/></marker></defs><rect width="600" height="220" fill="#ffffff"/><circle cx="48" cy="110" r="7" fill="#c0392b"/><text x="32" y="135" font-size="10" fill="#c0392b">neutron</text><line x1="58" y1="110" x2="150" y2="110" stroke="#444" stroke-width="1.5" marker-end="url(#n22)"/><circle cx="186" cy="110" r="36" fill="url(#u2)" stroke="#1f4a5c"/><text x="186" y="114" font-size="12" font-weight="700" text-anchor="middle" fill="#ffffff">U-233</text><line x1="226" y1="110" x2="286" y2="110" stroke="#444" stroke-width="1.5"/><circle cx="346" cy="58" r="26" fill="#e3a93c" stroke="#a8721a"/><text x="346" y="62" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Ce-140</text><circle cx="346" cy="166" r="23" fill="#5b9a6b" stroke="#356b44"/><text x="346" y="170" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Mo-91</text><line x1="380" y1="54" x2="470" y2="36" stroke="#c0392b" stroke-width="1.5" marker-end="url(#n22)"/><line x1="382" y1="166" x2="472" y2="184" stroke="#c0392b" stroke-width="1.5" marker-end="url(#n22)"/><text x="500" y="113" font-size="11" fill="#c0392b">neutrons + energy</text></svg>',
      },
      caption: 'A slow neutron is absorbed by uranium-233 (bred from thorium-232), which splits into two daughter nuclei and releases two more neutrons and energy.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the periodic table, **state** the number of protons and the number of neutrons present in the nucleus of one atom of uranium-233.',
        marks: 2,
        ph: 'Number of protons: ...\nNumber of neutrons: ...',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Outline** how the protons and neutrons are affected by the fission of uranium-233.',
        marks: 2,
        ph: 'The protons and neutrons are divided between the two daughter nuclei (Ce-140 and Mo-91).\nThe total number of protons and neutrons after the reaction is the same as before.\n...',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'A neutron is needed to start this fission reaction. Neutrons are also produced during the reaction. This means that a chain reaction can occur with the fission of uranium-233.\n\n**Suggest** the meaning of the term chain reaction.',
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
        text: 'Thorium reactors use fuel in the form of fuel salts or rods. These are no longer useable when the level of fissile material remaining is low. However, used fuel still contains a small amount of remaining uranium-233 which decays over time, emitting radiation as shown in the graph below.\n\nUse the graph to **predict** how many years it would take for **75 %** of the remaining uranium to decay.',
        marks: 1,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'time / thousand years',
            yLabel: 'percentage of uranium-233 remaining / %',
            points: [[0, 100], [160, 50], [320, 25], [480, 12.5], [640, 6.25]],
            readouts: [{ x: 320, note: '75% decayed means 25% remaining — read the time at 25%' }],
            dataMaxX: 640,
          },
          caption: 'Decay of uranium-233 in used thorium-reactor fuel (drag the crosshair to read values).',
        },
        ph: 'Read from graph: 75% decayed means 25% remaining.\nFind time at 25% on the graph.\n≈ ... thousand years',
        level: 'developing',
      },
      {
        label: 'f',
        text: '**Suggest** why the long decay time of uranium-233 poses a significant challenge for the safe disposal of used fuel.',
        marks: 2,
        ph: 'The long decay time means the used fuel remains radioactive for... years.\nThis is challenging because...\nThe fuel must be stored safely and securely because...',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Tungsten Wire Resistance Investigation (16) Criteria B / C
  // R = V/I = 1.4/0.25 = 5.6 Ω ; plot (100, 5.6)
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
    stem: 'A student plans to investigate how the length of a tungsten wire affects its electrical resistance.\n\nThe table shows the wires available in the laboratory:\n\n| Length / cm | Material  | Cross-sectional area / mm² |\n|-------------|-----------|----------------------------|\n| 40          | Tungsten  | 2.5                        |\n| 60          | Tungsten  | 2.5                        |\n| 80          | Tungsten  | 2.5                        |\n| 100         | Copper    | 1.0                        |\n| 100         | Tungsten  | 1.5                        |\n| 100         | Copper    | 2.0                        |\n| 100         | Aluminium | 2.5                        |\n| 100         | Copper    | 2.5                        |\n| 100         | Gold      | 2.5                        |\n| 100         | Tungsten  | 2.5                        |\n| 100         | Copper    | 3.0                        |\n| 120         | Tungsten  | 2.5                        |',
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that would be tested in this investigation.',
        marks: 1,
        ph: 'How does the length of a tungsten wire affect its electrical resistance?',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for this investigation using scientific reasoning.\n\nIf:\n\nThen:\n\nBecause:',
        marks: 3,
        ph: 'If: the length of the tungsten wire increases,\nThen: the resistance of the wire will increase,\nBecause: current (electrons) must travel further through more ions, causing more collisions, so resistance is proportional to length (R = ρL/A).',
        level: 'proficient',
      },
      {
        label: 'c',
        text: '**Select** the wires the student should use to collect sufficient data to determine the relationship between the resistance and the length of the wire.',
        marks: 3,
        widget: 'radio_select',
        widgetOptions: [
          'Tungsten wires: 40 cm, 60 cm, 80 cm, 100 cm, 120 cm (all 2.5 mm²)',
          'All 100 cm wires of different materials',
          'Tungsten wires of different cross-sectional areas',
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
        text: 'For one of the trials when the wire was **100 cm** long, the voltage across the wire was **1.4 V** and the current through the wire was measured as **0.25 A**. **Determine** the resistance of the wire.',
        marks: 2,
        ph: 'R = V / I\nR = 1.4 / 0.25\nR = ... Ω',
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
            dataTable: [{ x: 40, y: 2.24 }, { x: 60, y: 3.36 }, { x: 80, y: 4.48 }, { x: 120, y: 6.72 }],
            plotMissing: [100, 5.6],
          },
          caption: 'Resistance versus length for the tungsten wire — plot the missing point at 100 cm.',
        },
        ph: 'Plot the point at (100, 5.6) on the graph.\nDraw a straight line of best fit through the origin that best models all data points.',
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
  // QUESTION 4 — Magnetic accelerator: tungsten-carbide spheres + samarium-cobalt magnet (23) A/B/C
  // HARDCODED widget q4b (variable_classify) preserved.
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
    stem: 'A student sets up an experiment with two tungsten-carbide spheres held magnetically on one side of a very strong samarium-cobalt magnet placed on a ceramic track. A single sphere is rolled towards the other side of the magnet. As this sphere collides with the magnet, the sphere on the other side shoots out with a much faster velocity, as shown in the slow-motion video.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="tc1" cx="0.35" cy="0.3"><stop offset="0" stop-color="#dfe3e8"/><stop offset="1" stop-color="#6e7780"/></radialGradient><marker id="m42" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="620" height="230" fill="#ffffff"/><rect x="30" y="160" width="560" height="16" rx="3" fill="#e3d8c2" stroke="#b6a07a"/><text x="310" y="200" font-size="11" text-anchor="middle" fill="#9a8559">ceramic track</text><rect x="300" y="128" width="44" height="32" rx="3" fill="#0b7285" stroke="#073d49"/><text x="311" y="149" font-size="11" font-weight="700" fill="#ffffff">N</text><text x="328" y="149" font-size="11" font-weight="700" fill="#ffffff">S</text><text x="322" y="120" font-size="10" text-anchor="middle" fill="#0b7285">samarium-cobalt magnet</text><circle cx="356" cy="148" r="12" fill="url(#tc1)" stroke="#4a5158"/><circle cx="380" cy="148" r="12" fill="url(#tc1)" stroke="#4a5158"/><circle cx="150" cy="148" r="12" fill="url(#tc1)" stroke="#4a5158"/><line x1="170" y1="148" x2="288" y2="148" stroke="#0b7285" stroke-width="2.5" marker-end="url(#m42)"/><text x="225" y="138" font-size="11" fill="#0b7285">incoming sphere</text><line x1="396" y1="148" x2="540" y2="148" stroke="#e08a1e" stroke-width="3" marker-end="url(#m42)"/><text x="470" y="138" font-size="11" fill="#e08a1e">exits fast</text></svg>',
      },
      caption: 'A magnetic accelerator: an incoming tungsten-carbide sphere strikes the samarium-cobalt magnet and the far sphere is ejected at high speed.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the conservation law that explains why the exiting sphere reaches the same height for both angles of the inclined plane.',
        marks: 1,
        ph: 'The law of conservation of energy states that...',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The slow-motion video shows the motion of the sphere just before it collides with the magnet. **Draw** and **label** the forces acting on the sphere while it is rolling **just before** it collides with the magnet.\n\nDraggable items: Electrostatic force | Magnetic force | Normal force | Tension force | Upthrust | Weight force',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Electrostatic force', 'Magnetic force', 'Normal force', 'Tension force', 'Upthrust', 'Weight force'],
        widgetOptions: ['Acting on sphere', 'Not acting on sphere'],
        ph: 'Forces acting on sphere just before magnet:\n• Magnetic force: direction right (towards magnet)\n• Normal force: direction up\n• Weight force: direction down\n(No tension, electrostatic, or upthrust)',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Suggest** why the acceleration of the sphere is not constant as it approaches the magnet. **Justify** your answer using scientific reasoning.',
        marks: 2,
        ph: 'The magnetic force on the sphere increases as it gets closer to the magnet.\nTherefore the resultant force increases...\nBy Newton\'s second law (F = ma), a greater force on the same mass means...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The samarium-cobalt magnet can be assumed to have a magnetic field similar to that of the Earth. **Select** the diagram that best represents the magnetic field lines around the magnet.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="f42" markerWidth="8" markerHeight="8" refX="6" refY="2.5" orient="auto"><path d="M0,0 L6,2.5 L0,5 Z" fill="#0b7285"/></marker></defs><rect width="600" height="200" fill="#ffffff"/><g><text x="75" y="22" font-size="13" font-weight="700" text-anchor="middle">A</text><rect x="50" y="92" width="26" height="16" fill="#c0392b"/><rect x="76" y="92" width="26" height="16" fill="#3a6ea5"/><text x="63" y="104" font-size="9" fill="#ffffff" text-anchor="middle">N</text><text x="89" y="104" font-size="9" fill="#ffffff" text-anchor="middle">S</text><path d="M76,92 C76,55 50,55 50,92" fill="none" stroke="#0b7285" stroke-width="1.5" marker-end="url(#f42)"/><path d="M102,100 C140,100 140,150 76,108" fill="none" stroke="#0b7285" stroke-width="1.5" marker-end="url(#f42)"/><path d="M50,108 C12,150 110,150 102,100" fill="none" stroke="#0b7285" stroke-width="1.5"/></g><g><text x="225" y="22" font-size="13" font-weight="700" text-anchor="middle">B</text><rect x="200" y="92" width="26" height="16" fill="#c0392b"/><rect x="226" y="92" width="26" height="16" fill="#3a6ea5"/><text x="213" y="104" font-size="9" fill="#ffffff" text-anchor="middle">N</text><text x="239" y="104" font-size="9" fill="#ffffff" text-anchor="middle">S</text><line x1="200" y1="70" x2="252" y2="70" stroke="#0b7285" stroke-width="1.5"/><line x1="200" y1="130" x2="252" y2="130" stroke="#0b7285" stroke-width="1.5"/></g><g><text x="375" y="22" font-size="13" font-weight="700" text-anchor="middle">C</text><rect x="350" y="92" width="26" height="16" fill="#c0392b"/><rect x="376" y="92" width="26" height="16" fill="#3a6ea5"/><text x="363" y="104" font-size="9" fill="#ffffff" text-anchor="middle">N</text><text x="389" y="104" font-size="9" fill="#ffffff" text-anchor="middle">S</text><circle cx="376" cy="100" r="24" fill="none" stroke="#0b7285" stroke-width="1.5"/><circle cx="376" cy="100" r="40" fill="none" stroke="#0b7285" stroke-width="1.5"/></g><g><text x="525" y="22" font-size="13" font-weight="700" text-anchor="middle">D</text><rect x="500" y="92" width="26" height="16" fill="#c0392b"/><rect x="526" y="92" width="26" height="16" fill="#3a6ea5"/><text x="513" y="104" font-size="9" fill="#ffffff" text-anchor="middle">N</text><text x="539" y="104" font-size="9" fill="#ffffff" text-anchor="middle">S</text><path d="M526,92 C560,55 590,80 552,100" fill="none" stroke="#0b7285" stroke-width="1.5" marker-end="url(#f42)"/><path d="M526,108 C560,145 590,120 552,100" fill="none" stroke="#0b7285" stroke-width="1.5" marker-end="url(#f42)"/></g></svg>',
          },
          caption: 'Four candidate magnetic-field patterns (A–D) around a bar magnet.',
        },
        ph: 'Select A, B, C, or D',
        level: 'foundation',
      },
      {
        label: 'e',
        text: 'Once the incoming sphere collides with the magnet, the exiting sphere on the other side has a much greater kinetic energy than the incoming sphere before the collision. Use your scientific knowledge to **suggest** a reason for this observation.',
        marks: 1,
        ph: 'Magnetic potential energy stored in the system is released during the collision...\nor: changes in the magnetic field cause additional kinetic energy to be transferred to the exiting sphere.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'You plan to design an investigation to find out the relationship between the maximum height (h₂) reached by the exiting sphere and the initial height (h₁) of the incoming sphere. In your plan, you should include:\n\n• the independent variable, dependent variable and one control variable\n• a hypothesis which is explained using scientific reasoning\n• a detailed method for how you will collect data, including the equipment you will use\n• the values of the independent variable that will be used\n• details of how you will make sure your method is safe',
        marks: 11,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="tc2" cx="0.35" cy="0.3"><stop offset="0" stop-color="#dfe3e8"/><stop offset="1" stop-color="#6e7780"/></radialGradient></defs><rect width="560" height="280" fill="#ffffff"/><line x1="40" y1="230" x2="520" y2="230" stroke="#5b6b78" stroke-width="3"/><polygon points="40,230 200,230 200,120" fill="#eaf1f5" stroke="#9fb0bb"/><line x1="40" y1="230" x2="200" y2="120" stroke="#0b7285" stroke-width="3"/><circle cx="150" cy="150" r="11" fill="url(#tc2)" stroke="#4a5158"/><line x1="200" y1="120" x2="200" y2="230" stroke="#94a3ad" stroke-dasharray="3 3"/><text x="206" y="180" font-size="11" fill="#0b7285">h₁</text><rect x="300" y="210" width="40" height="20" rx="3" fill="#0b7285"/><text x="320" y="224" font-size="9" fill="#ffffff" text-anchor="middle">magnet</text><polygon points="520,230 360,230 360,90" fill="#fdf0e0" stroke="#d9a417"/><line x1="520" y1="230" x2="360" y2="90" stroke="#e08a1e" stroke-width="3"/><circle cx="430" cy="118" r="11" fill="url(#tc2)" stroke="#4a5158"/><line x1="360" y1="90" x2="360" y2="230" stroke="#94a3ad" stroke-dasharray="3 3"/><text x="338" y="160" font-size="11" fill="#e08a1e">h₂</text><text x="120" y="265" font-size="11" fill="#5b6b78">incoming ramp</text><text x="430" y="265" font-size="11" fill="#5b6b78">exit ramp</text></svg>',
          },
          caption: 'Magnetic-accelerator apparatus: the incoming sphere released from height h₁; the exiting sphere rises to height h₂.',
        },
        ph: 'Independent variable (IV): initial height h₁ of the incoming sphere\nDependent variable (DV): maximum height h₂ reached by the exiting sphere\nControl variable: mass of spheres / angle of track\n\nHypothesis: As h₁ increases, h₂ will increase because...\n\nMethod:\n1. Set up the inclined ceramic track...\n2. Release the sphere from h₁ = 5 cm and measure h₂ using a ruler...\n3. Repeat for h₁ = 10, 15, 20, 25 cm\n4. Repeat each value 3 times and calculate the mean...\n\nSafety: ...',
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Construct** a data table that could be used to record data from the investigation in part (f). The table must include:\n\n• an appropriate number of rows and columns\n• the values of the independent variable that will be used\n• a column for processed data with an appropriate title',
        marks: 4,
        ph: 'Initial Height of Sphere (h₁) / cm | Trial 1 Max Height (h₂) / cm | Trial 2 / cm | Trial 3 / cm | Mean h₂ / cm\n5   | | | |\n10  | | | |\n15  | | | |\n20  | | | |\n25  | | | |',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Aluminium-bar cart between magnet rows (11) Criteria B/C/D
  // s=0.18 m; at 12 A t=1.20 s → a = 2s/t² = 0.25 m s⁻²; x-intercept ~4 A; friction ~2.7 mN
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
    stem: 'A student carries out an experiment using the equipment below. An aluminium bar rests between two rows of magnets on a level surface. When the switch is closed, a current flows through the bar. The bar accelerates to the right. The student adjusts the current of the power supply. The bar is initially at rest and the student measures the time taken by the bar to move **18 cm**.\n\nThe table shows results collected by the student at different current values:\n\n| Current / A | Time / s |\n|-------------|----------|\n| 7           | 1.95     |\n| 8           | 1.70     |\n| 9           | 1.50     |\n| 10          | (missing)|\n| 11          | 1.30     |\n| 12          | 1.20     |',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="mt52" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="260" fill="#ffffff"/><g><rect x="120" y="78" width="36" height="22" fill="#c0392b"/><rect x="200" y="78" width="36" height="22" fill="#c0392b"/><rect x="280" y="78" width="36" height="22" fill="#c0392b"/><rect x="360" y="78" width="36" height="22" fill="#c0392b"/><text x="258" y="70" font-size="10" text-anchor="middle" fill="#c0392b">row of magnets (N up)</text></g><g><rect x="120" y="160" width="36" height="22" fill="#3a6ea5"/><rect x="200" y="160" width="36" height="22" fill="#3a6ea5"/><rect x="280" y="160" width="36" height="22" fill="#3a6ea5"/><rect x="360" y="160" width="36" height="22" fill="#3a6ea5"/><text x="258" y="200" font-size="10" text-anchor="middle" fill="#3a6ea5">row of magnets (S up)</text></g><rect x="232" y="100" width="12" height="60" rx="2" fill="#b6c4cf" stroke="#7a8b97"/><text x="238" y="128" font-size="10" text-anchor="middle" fill="#5b6b78"></text><text x="238" y="248" font-size="10" text-anchor="middle" fill="#5b6b78">aluminium bar</text><line x1="244" y1="130" x2="430" y2="130" stroke="#0b7285" stroke-width="2.5" marker-end="url(#mt52)"/><text x="360" y="122" font-size="11" fill="#0b7285">bar accelerates</text><rect x="40" y="110" width="22" height="40" rx="2" fill="#222222"/><text x="51" y="135" font-size="9" fill="#3ad36a" text-anchor="middle" font-family="monospace">A</text><line x1="62" y1="118" x2="120" y2="118" stroke="#5b6b78" stroke-width="2"/><line x1="62" y1="142" x2="120" y2="142" stroke="#5b6b78" stroke-width="2"/><line x1="238" y1="184" x2="238" y2="200" stroke="#94a3ad"/><line x1="430" y1="184" x2="430" y2="200" stroke="#94a3ad"/><text x="238" y="222" font-size="9" text-anchor="middle" fill="#94a3ad">0 cm</text><text x="430" y="222" font-size="9" text-anchor="middle" fill="#94a3ad">18 cm</text></svg>',
      },
      caption: 'An aluminium bar between two rows of magnets. The motor effect drives the bar 18 cm across the surface.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The time for a current of **10 A** was not recorded by the student. Using the animation, **measure** the time it takes the bar to travel 18 cm from rest.',
        marks: 1,
        ph: 'Time at 10 A ≈ ... s\n(Expected answer: approximately 1.40 s based on the trend)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'The student assumes that the bar accelerates uniformly. For the last trial, at a current of **12 A**, the student records a time of **1.20 s**. Using the formula sheet, **calculate** the acceleration of the bar.',
        marks: 3,
        ph: 'Using s = ½at²:\n0.18 = ½ × a × (1.20)²\na = (2 × 0.18) / (1.20)²\na = 0.36 / 1.44\na = ... m s⁻²',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'After calculating its acceleration, the student wanted to calculate the net force acting on the bar. **State** what additional quantity would be needed for this calculation.',
        marks: 1,
        ph: 'The mass of the bar (in kg) — not weight.',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'Before starting the experiment, the student makes the following prediction:\n\n*"If the electric current passing through the bar doubles, the force on the bar will double. The relationship will be proportional."*\n\nIf the results of the experiment support this hypothesis, **select** the graph that would represent the data.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A — straight line with negative gradient', 'B — curve levelling off', 'C — curve decreasing', 'D — straight line through origin with positive gradient'],
        ph: 'Select the correct graph shape for a proportional relationship',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'Another student processed the data and calculated the force on the bar for each current. The student plotted their data on the graph shown below.\n\nReferring to the graph, **outline** why the student\'s hypothesis in part (d) is **not** supported by the data.',
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
          caption: 'Force on the bar versus current (drag the crosshair to read values).',
        },
        ph: 'The line of best fit does not pass through the origin.\nThe x-intercept of the line of best fit is at approximately 4 A (there is no force below 4 A).\nThis means that doubling the current does not double the force, so the relationship is not proportional.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'The student adjusts the current to **4 A**. Use the graph in part (e) to **suggest** what you think would happen to the bar. **Justify** your answer.',
        marks: 2,
        ph: 'At 4 A, the force on the bar is approximately zero (the line crosses the x-axis at ~4 A).\nThe bar will not move because...\nThe net force is zero / the force is not sufficient to overcome frictional forces.',
        level: 'proficient',
      },
      {
        label: 'g',
        text: 'For the bar to move, it needs to overcome frictional forces. Use the graph to **suggest** the size of the frictional forces.',
        marks: 1,
        ph: 'From the graph, the y-intercept of the best fit line (extended) is approximately −2.6 to −2.8 mN.\nTherefore the frictional force ≈ 2.6–2.8 mN.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Cassegrain Reflector & Expanding Universe (7) Criterion D
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
        text: 'Clearer images can be obtained by using mirrors to create a reflecting telescope. In a Cassegrain reflector, parallel rays from a distant object are reflected by a large curved primary mirror onto a small curved secondary mirror. The rays are reflected again through a hole in the centre of the primary mirror and come into focus at an eyepiece behind it.\n\n**Label** the primary mirror, secondary mirror and the position of the eyepiece in the diagram shown.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'Large curved mirror at far end = Primary; small curved mirror near top = Secondary; opening behind centre = Eyepiece',
          'Small flat mirror at far end = Primary; large curved mirror near top = Secondary',
          'Opening at bottom = Eyepiece; large mirror at top = Primary',
          'Small mirror at top = Primary; large mirror at bottom = Secondary',
        ],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="r62" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="280" fill="#ffffff"/><rect x="120" y="50" width="320" height="180" rx="10" fill="#eef3f6" stroke="#9fb0bb" stroke-width="2"/><path d="M420,60 q34,80 0,160 L420,170 Q412,140 420,110 Z" fill="#b9d6e3" stroke="#0b7285" stroke-width="3"/><rect x="420" y="118" width="6" height="44" fill="#ffffff"/><text x="452" y="145" font-size="10" fill="#0b7285">curved primary</text><path d="M158,118 q10,22 0,44" fill="#cfe0d6" stroke="#3a7d44" stroke-width="3"/><text x="150" y="110" font-size="10" fill="#3a7d44">curved secondary</text><rect x="452" y="124" width="28" height="32" rx="4" fill="#2c3e50"/><text x="466" y="178" font-size="10" text-anchor="middle" fill="#2c3e50">eyepiece</text><line x1="40" y1="100" x2="416" y2="100" stroke="#0b7285" stroke-width="1.5"/><line x1="40" y1="180" x2="416" y2="180" stroke="#0b7285" stroke-width="1.5"/><text x="40" y="88" font-size="10" fill="#0b7285">parallel rays</text><path d="M418,104 L160,128" stroke="#0b7285" stroke-width="1.5"/><path d="M418,176 L160,152" stroke="#0b7285" stroke-width="1.5"/><path d="M160,140 L450,140" stroke="#0b7285" stroke-width="2" marker-end="url(#r62)"/></svg>',
          },
          caption: 'A Cassegrain reflecting telescope: a curved primary mirror, a curved secondary mirror, and an eyepiece behind a central hole.',
        },
        ph: 'Select the correct labelling arrangement',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'Many large research telescopes use the Cassegrain design. In a Cassegrain reflector, a single ray of light is reflected by the curved primary mirror and then by the curved secondary mirror before passing through the central hole to the eyepiece.\n\n**State** the number of times a single ray of light is reflected after it enters a Cassegrain reflecting telescope.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="r6c2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#e08a1e"/></marker></defs><rect width="520" height="240" fill="#ffffff"/><rect x="110" y="50" width="300" height="140" rx="10" fill="#eef3f6" stroke="#9fb0bb" stroke-width="2"/><path d="M392,58 q30,62 0,124 L392,134 Q386,120 392,106 Z" fill="#b9d6e3" stroke="#0b7285" stroke-width="3"/><rect x="392" y="110" width="5" height="20" fill="#ffffff"/><path d="M150,108 q8,16 0,32" fill="#cfe0d6" stroke="#3a7d44" stroke-width="3"/><rect x="416" y="112" width="22" height="24" rx="4" fill="#2c3e50"/><line x1="60" y1="120" x2="394" y2="120" stroke="#e08a1e" stroke-width="2"/><path d="M393,118 L152,122" stroke="#e08a1e" stroke-width="2" marker-end="url(#r6c2)"/><path d="M151,120 L418,120" stroke="#e08a1e" stroke-width="2" marker-end="url(#r6c2)"/><circle cx="392" cy="120" r="5" fill="#c0392b"/><text x="384" y="108" font-size="9" fill="#c0392b">1</text><circle cx="151" cy="120" r="5" fill="#c0392b"/><text x="138" y="112" font-size="9" fill="#c0392b">2</text><text x="60" y="108" font-size="10" fill="#e08a1e">ray in</text></svg>',
          },
          caption: 'Ray path through a Cassegrain reflector: reflection at the primary mirror, then at the secondary mirror.',
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
  // QUESTION 7 — Nancy Grace Roman Space Telescope (19) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Nancy Grace Roman Space Telescope',
    marks: 19,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['telescopes', 'expansion of the universe', 'stars and stellar evolution'], level: 'advanced' },
    stem: 'The Nancy Grace Roman Space Telescope, named after NASA\'s first chief astronomer, was planned for decades and is being prepared for launch later this decade after technical delays and budget debates.\n\nThe Roman telescope reuses a 2.4 m mirror, the same size as the Hubble Space Telescope\'s mirror, but its camera has a field of view about one hundred times larger, allowing it to survey huge areas of sky very quickly.\n\nLike the James Webb Space Telescope, Roman is designed to operate far from Earth at the Sun–Earth L2 point, about 1.5 million kilometres away. At this distance it cannot be reached or repaired by astronauts if a problem develops.\n\nThe Roman telescope is built to study dark energy — the mysterious effect that appears to be making the expansion of the universe speed up — by mapping the positions of millions of galaxies. It will also search for distant planets and take images that are likely to inspire the public, as earlier space telescopes have done.\n\nThe telescope is a very expensive piece of scientific equipment. However, the multi-billion-dollar cost is much less than the over 750 billion dollars that the US has as its annual military budget.',
    tasks: [
      {
        label: 'a',
        text: 'Using the information in the passage and your wider MYP studies, **discuss** and **evaluate** the development of the Roman Space Telescope and its role in extending our knowledge and understanding of the universe.\n\nIn your answer you should include:\n\n• the scientific challenges of launching a telescope into space\n• the social or cultural implications of the observations made with telescopes\n• the economic implications of spending government funds on a space telescope\n• a concluding appraisal giving your opinion on the impact of the Roman telescope',
        marks: 13,
        ph: 'Scientific challenges:\n• Technical complexity: a wide-field camera 100× larger than Hubble\'s, precise pointing while surveying...\n• Inaccessibility: Roman operates at L2 (1.5 million km), too far to repair...\n• Operating in space: extreme temperatures, no chance of a servicing mission...\n\nSocial/cultural implications:\n• Telescope images inspire the public, as earlier space telescopes have done...\n• Mapping dark energy could transform our understanding of the universe...\n\nEconomic implications:\n• Multi-billion-dollar cost vs military spending comparison...\n• Reusing a 2.4 m mirror to save money; long-term scientific value...\n\nConclusion: Overall, the Roman telescope represents...',
        level: 'advanced',
      },
      {
        label: 'b',
        text: 'The Roman Space Telescope carries an instrument that some people believe could help provide evidence of planets that might support life.\n\nSome facts about the Roman telescope are given below:\n\n• The instrument can detect distant exoplanets — planets outside our solar system — using a technique called microlensing, where a planet\'s gravity briefly bends and brightens the light of a more distant star.\n\n• A microlensing event only happens when a planet passes almost exactly in front of a far more distant background star, as seen from the telescope.\n\n• Each alignment is a one-off event that does not repeat, so a planet found this way usually cannot be observed again.\n\nUse the information above to **evaluate** the benefits and limitations of using the microlensing instrument on the Roman telescope to search for planets that might support life.',
        marks: 6,
        ph: 'Benefits:\n• Can detect exoplanets very far away, including small or distant planets that other methods miss...\n• Its wide field of view lets it monitor millions of stars for these rare events...\n\nLimitations:\n• Microlensing needs an almost exact alignment of planet and background star — very rare...\n• Each event is a one-off and does not repeat, so the planet usually cannot be studied again...\n• Detecting a planet does not by itself confirm it could support life...\n\nConclusion: The instrument has significant scientific value but narrow applicability...',
        level: 'advanced',
      },
    ],
  },
]
