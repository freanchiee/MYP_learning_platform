import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — May 2022 · VARIANT 1  (isomorphic to physics-may-2022)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags, widgets) in a NEW real-world context, with self-contained
// data-driven artefacts (no external image files). Numbers recomputed throughout.
//   Q1 Kinematics/forces:  maglev train      → skydiver / parachutist (sport)
//   Q2 Transformers:        power grid        → electric-railway substation (transport)
//   Q3 Heat transfer:       ice in salt water → hot drink: vacuum flask vs open mug (everyday)
//   Q4 Waves/sound length:  blown tubes       → boomwhacker plastic tubes (everyday/music)
//   Q5 String tension:      guitar string     → lab sonometer wire (school)
//   Q6 Sound intensity:     cardboard layers  → acoustic-foam panels (environmental)
//   Q7 Space/retrograde:    Mars + signal     → Jupiter (Europa probe) + signal (space)
//   Q8 Crit D evaluation:   Mars missions     → crewed mission to Europa (space)
//   Q9 Crit D environment:  living on Mars    → research base on the Moon (space)
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-may-2022-v1',
  subject: 'Physics',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Forces & Motion: Skydiver in free fall (11 marks) Criterion A
  // Context: a parachutist falling, drag and terminal velocity; v–t trapezoid.
  // V1 numbers: v–t trapezoid (80 & 40 m s⁻¹ over 30 s) → distance 1800 m
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Motion',
    marks: 11,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['forces', 'balanced forces', 'speed and velocity', 'drag'], level: 'proficient' },
    stem: 'A skydiver jumps from a high-altitude balloon and falls towards the ground. As she falls, air resistance (drag) acts upwards on her body, opposing her weight. The diagrams below show the forces on the skydiver at different stages of the fall.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dff1fa"/><stop offset="1" stop-color="#a8d4ec"/></linearGradient><marker id="ah1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="560" height="280" fill="url(#sky1)"/><g><text x="160" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Stage X</text><circle cx="160" cy="120" r="16" fill="#f1c27d" stroke="#c98a3c"/><rect x="150" y="134" width="20" height="42" rx="6" fill="#0b7285"/><line x1="160" y1="176" x2="160" y2="238" stroke="#c0392b" stroke-width="3" marker-end="url(#ah1)"/><text x="166" y="222" font-size="12" fill="#c0392b">weight 720 N</text><line x1="160" y1="104" x2="160" y2="58" stroke="#0b7285" stroke-width="3" marker-end="url(#ah1)"/><text x="166" y="72" font-size="12" fill="#0b7285">drag 480 N</text></g><g><text x="400" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Stage Y</text><circle cx="400" cy="120" r="16" fill="#f1c27d" stroke="#c98a3c"/><rect x="390" y="134" width="20" height="42" rx="6" fill="#0b7285"/><line x1="400" y1="176" x2="400" y2="238" stroke="#c0392b" stroke-width="3" marker-end="url(#ah1)"/><text x="406" y="222" font-size="12" fill="#c0392b">weight 720 N</text><line x1="400" y1="104" x2="400" y2="42" stroke="#0b7285" stroke-width="3" marker-end="url(#ah1)"/><text x="406" y="60" font-size="12" fill="#0b7285">drag 720 N</text></g></svg>',
      },
      caption: 'Force diagrams for the skydiver at two stages of the fall (arrow lengths show the size of each force).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The skydiver has a weight of 720 N. **State** the unit of force.',
        marks: 1,
        ph: 'newtons (N)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The diagrams above show the forces on the skydiver in two different stages of the fall.\n\n**Identify** which diagram shows the skydiver:\n- Falling at **constant (terminal) velocity**\n- **Accelerating** downwards\n\nExplain your reasoning for each.',
        marks: 2,
        ph: 'Diagram [X] shows acceleration because the weight is greater than the drag (resultant force downward).\nDiagram [Y] shows constant (terminal) velocity because the forces are balanced (resultant = 0).',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The skydiver pulls her arms and legs in to make herself more streamlined, then later spreads them out wide.\n\n**Explain** how spreading out wide allows her to fall at a lower terminal velocity. In your answer, refer to:\n- the drag force\n- balanced forces\n- her body shape / surface area',
        marks: 3,
        ph: 'Spreading out increases her surface area, which increases the drag force at any given speed. Because more drag acts at a lower speed, the upward drag becomes balanced with her weight (resultant force = 0) at a lower speed, so her terminal velocity is lower.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'During one part of the dive the skydiver slows down after opening her parachute. The velocity–time graph below shows this part of her motion.\n\n**Calculate** the distance she falls during this part of the dive. Show your working.',
        marks: 3,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Velocity–time graph after the parachute opens',
            xLabel: 'time', yLabel: 'velocity', xUnit: 's', yUnit: 'm s⁻¹',
            dataPoints: [{ x: 0, y: 80 }, { x: 30, y: 40 }],
            xMin: 0, xMax: 30, yMin: 0, yMax: 90, xStep: 5, yStep: 10,
          },
          caption: 'Velocity falls steadily from 80 m s⁻¹ to 40 m s⁻¹ over 30 s.',
        },
        ph: 'Distance = area under graph (trapezoid)\n= average speed × time\n= (v₁ + v₂)/2 × t\n= (80 + 40)/2 × 30\n= 60 × 30\n= 1800 m',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The graph from part (d) shows the skydiver decelerating after her parachute opens.\n\nA second skydiver of **greater mass** opens an **identical parachute** at the **same starting speed**. Because she is heavier, she settles at a **higher** final (terminal) speed.\n\n**Draw** a line on the graph to represent the motion of the second skydiver. She starts at the same time and the same starting speed.',
        marks: 2,
        ph: 'Draw a line starting at the same y-intercept (80 m s⁻¹) as the original, but levelling off at a higher final velocity than the original (ending above 40 m s⁻¹). The line should not drop as steeply as the original.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Electricity: Railway-substation transformer (7 marks) Criterion A
  // Context: a transformer that steps down grid voltage for an electric railway.
  // V1: Np=11000, Ns=440, Vs=600 → Vp=15000 V ; eff 96% × 25000 W = 24000 W
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity',
    marks: 7,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['transformers', 'power', 'voltage', 'current'], level: 'proficient' },
    stem: 'Electric railways use transformers in trackside substations to change the voltage of an alternating current before it reaches the overhead lines. The diagram below shows a step-down transformer in a railway substation.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="core2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfd8dc"/><stop offset="1" stop-color="#9aa7ad"/></linearGradient></defs><rect width="600" height="260" fill="#ffffff"/><rect x="250" y="40" width="100" height="180" rx="6" fill="url(#core2)" stroke="#5b6b78" stroke-width="2"/><text x="300" y="240" font-size="11" text-anchor="middle" fill="#5b6b78">iron core</text><g stroke="#0b7285" stroke-width="4" fill="none"><path d="M250,60 q-26,0 -26,16 q0,16 26,16"/><path d="M250,92 q-26,0 -26,16 q0,16 26,16"/><path d="M250,124 q-26,0 -26,16 q0,16 26,16"/><path d="M250,156 q-26,0 -26,16 q0,16 26,16"/></g><text x="190" y="50" font-size="12" font-weight="700" fill="#0b7285">primary</text><text x="186" y="232" font-size="11" fill="#0b7285">Np = 11 000</text><g stroke="#f08c00" stroke-width="4" fill="none"><path d="M350,90 q26,0 26,16 q0,16 -26,16"/><path d="M350,122 q26,0 26,16 q0,16 -26,16"/></g><text x="372" y="50" font-size="12" font-weight="700" fill="#c66a00">secondary</text><text x="372" y="232" font-size="11" fill="#c66a00">Ns = 440</text><line x1="224" y1="76" x2="150" y2="76" stroke="#333" stroke-width="2"/><line x1="224" y1="172" x2="150" y2="172" stroke="#333" stroke-width="2"/><text x="120" y="128" font-size="11" text-anchor="middle" fill="#333">25 kV grid</text><line x1="376" y1="106" x2="460" y2="106" stroke="#333" stroke-width="2"/><line x1="376" y1="138" x2="460" y2="138" stroke="#333" stroke-width="2"/><text x="500" y="124" font-size="11" text-anchor="middle" fill="#333">to track</text></svg>',
      },
      caption: 'A step-down transformer in an electric-railway substation, reducing the grid voltage for the trackside supply.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A transformer is described as \'ideal\' when it has no energy losses.\n\n**State** the relationship between the power input and power output in an ideal transformer.',
        marks: 1,
        ph: 'Power input = Power output (power in equals power out)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The substation transformer has **11 000 turns** in the primary coil and **440 turns** in the secondary coil. The secondary (output) voltage is **600 V**.\n\n**Calculate** the primary (input) voltage.',
        marks: 2,
        ph: 'Vp/Vs = Np/Ns\nVp = Vs × (Np/Ns)\nVp = 600 × (11000/440)\n= 600 × 25\n= 15 000 V',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'A real transformer has an efficiency of **96%**. The power input to the transformer is **25 000 W**.\n\n**Calculate** the useful power output.',
        marks: 2,
        ph: 'Power output = efficiency × power input\n= 0.96 × 25000\n= 24000 W',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'Electricity is carried to the railway substation at very high voltages from the national grid.\n\n**Explain** why high voltage is used for transmitting electricity over long distances. In your answer, refer to current and energy losses.',
        marks: 2,
        ph: 'By increasing the voltage, the current in the transmission cables is reduced. Since energy is wasted as heat in the wires (P = I²R), a lower current means less energy is wasted as heat, so more power reaches the destination.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Thermal Physics: Hot drink cooling (9 marks) Criterion A/B
  // Context: comparing a hot drink cooling in a vacuum flask vs an open mug.
  // Q3a KEEPS the hardcoded `variable_classify` widget (renders fixed variable
  // table) — only the surrounding framing changes, not the widget content.
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Physics',
    marks: 9,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'conduction', 'convection', 'density'], level: 'proficient' },
    stem: 'A student investigates how quickly a hot drink cools. They compare two containers — a vacuum (insulated) flask and an open ceramic mug — both filled with the same hot drink at the same starting temperature.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="drink3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9743a"/><stop offset="1" stop-color="#7a4a20"/></linearGradient></defs><rect width="560" height="250" fill="#ffffff"/><g><text x="150" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Vacuum flask</text><rect x="110" y="50" width="80" height="160" rx="14" fill="#eef3f6" stroke="#5b6b78" stroke-width="3"/><rect x="124" y="64" width="52" height="132" rx="8" fill="none" stroke="#9aa7ad" stroke-width="6"/><rect x="132" y="78" width="36" height="110" rx="5" fill="url(#drink3)"/><text x="150" y="232" font-size="11" text-anchor="middle" fill="#5b6b78">vacuum gap insulates</text></g><g><text x="410" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Open mug</text><path d="M372,80 h76 v110 a14,14 0 0 1 -14,14 h-48 a14,14 0 0 1 -14,-14 Z" fill="#eef3f6" stroke="#5b6b78" stroke-width="3"/><rect x="378" y="92" width="64" height="92" rx="5" fill="url(#drink3)"/><path d="M448,100 q34,6 0,60" fill="none" stroke="#5b6b78" stroke-width="6"/><path d="M398,74 q4,-14 14,-2" fill="none" stroke="#c0392b" stroke-width="2"/><path d="M414,70 q4,-14 14,-2" fill="none" stroke="#c0392b" stroke-width="2"/><text x="410" y="232" font-size="11" text-anchor="middle" fill="#c0392b">heat escapes from the top</text></g></svg>',
      },
      caption: 'The same hot drink cooling in a vacuum flask (left) and an open ceramic mug (right).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Heat can be transferred by different processes. **Match** each description to the correct method of heat transfer:\n\n- Transfer of thermal energy through direct contact between particles\n- Transfer of thermal energy through bulk movement of a fluid\n- Transfer of thermal energy as electromagnetic waves without needing a medium',
        marks: 1,
        widget: 'variable_classify',
        widgetOptions: ['Conduction', 'Convection', 'Radiation'],
        ph: 'Conduction | Convection | Radiation',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The student notices droplets of water forming on the cold metal lid resting beside the flask. **Select** the correct name for this process.\n\nA. Evaporation\nB. Melting\nC. Sublimation\nD. Condensation',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Evaporation', 'B. Melting', 'C. Sublimation', 'D. Condensation'],
        ph: 'D',
        level: 'foundation',
      },
      {
        label: 'c',
        text: '**Name** the process by which the water droplets formed on the cold metal lid.',
        marks: 1,
        ph: 'Condensation',
        level: 'foundation',
      },
      {
        label: 'd',
        text: '**Explain** why condensation occurs on the cold metal lid.',
        marks: 1,
        ph: 'The lid is cold. Water vapour in the warm air loses thermal energy when it contacts the cold surface and changes state to liquid (condenses).',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The student finds that the drink in the open mug cools much **faster** than the drink in the vacuum flask.\n\n**Explain** this observation using ideas about heat transfer by convection and the movement (density) of the warm air above the drink.',
        marks: 3,
        ph: 'In the open mug, the warm drink heats the air just above it. This warm air is less dense, so it rises and carries energy away, while cooler denser air moves in to replace it — setting up convection currents that remove heat quickly. The vacuum flask has an insulated lid and a vacuum gap, which prevent these convection currents (and conduction), so the drink stays hot for longer.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'The student blows gently across the surface of the drink in the open mug.\n\n**Predict** and **explain** what would happen to the cooling time of the drink in the open mug.',
        marks: 2,
        ph: 'Blowing moves the warm, moist air away from the surface and brings in cooler air, increasing convection and evaporation. This increases the rate of heat transfer, so the cooling time would decrease (the drink would cool faster).',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Waves/Sound: Boomwhacker tube length & frequency (16 marks) Criterion B/C
  // Context: how the length of a plastic boomwhacker tube affects the frequency it sounds.
  // V1: L×f = 340 const → f at 0.20 m = 1700 Hz; gradient/speed of sound = 340 m s⁻¹
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Waves & Sound',
    marks: 16,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['sound', 'frequency', 'wavelength', 'inverse proportion'], level: 'proficient' },
    stem: 'A student investigates how the length of a plastic "boomwhacker" tube affects the frequency of the note it produces when the open end is tapped. The student\'s hypothesis is: "As the length of a tube increases, the frequency of the sound produced decreases (inverse proportion)."',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="230" fill="#ffffff"/><g><rect x="60" y="60" width="34" height="80" rx="6" fill="#c0392b" stroke="#7a2218"/><text x="77" y="158" font-size="11" text-anchor="middle" fill="#7a2218">20 cm</text></g><g><rect x="150" y="60" width="34" height="100" rx="6" fill="#e08a1e" stroke="#a8631a"/><text x="167" y="178" font-size="11" text-anchor="middle" fill="#a8631a">30 cm</text></g><g><rect x="240" y="60" width="34" height="120" rx="6" fill="#2e8b57" stroke="#1e5c39"/><text x="257" y="198" font-size="11" text-anchor="middle" fill="#1e5c39">40 cm</text></g><g><rect x="330" y="60" width="34" height="140" rx="6" fill="#0b7285" stroke="#073f4a"/><text x="347" y="218" font-size="11" text-anchor="middle" fill="#073f4a">50 cm</text></g><g><rect x="420" y="60" width="34" height="160" rx="6" fill="#5b4fb5" stroke="#332b72"/><text x="437" y="218" font-size="11" text-anchor="middle" fill="#332b72">60 cm</text></g><text x="300" y="38" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Boomwhacker tubes of equal diameter, different lengths</text></svg>',
      },
      caption: 'A set of plastic boomwhacker tubes of the same diameter but different lengths.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Write** a suitable research question for this investigation.',
        marks: 1,
        ph: 'How does the length of a tube affect the frequency of the sound it produces?',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The student is given the following equipment:\n\n- 5 plastic tubes of **3.0 cm** diameter (lengths: 20 cm, 30 cm, 40 cm, 50 cm, 60 cm)\n- 3 plastic tubes of **5.0 cm** diameter\n- 4 cardboard tubes of **3.0 cm** diameter\n- A frequency meter\n- A ruler\n\n**Select** the most appropriate equipment to use, and **justify** your selection.',
        marks: 3,
        ph: 'Select: 5 plastic tubes of 3.0 cm diameter.\nJustification:\n- Only one material (plastic) should be used to keep material as a control variable.\n- Only one diameter (3.0 cm) should be used to keep diameter as a control variable.\n- Five lengths are needed to collect enough data to identify a pattern.',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Identify** the independent variable in this investigation.\n\n**State** two variables that should be controlled, and **explain** why each must be controlled.',
        marks: 2,
        ph: 'Independent variable: length of tube.\n\nControl variables:\n1. Material (plastic) — different materials have different properties that could affect the frequency.\n2. Diameter of the tube — a different diameter would change the volume of air inside and affect the frequency.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The student produces a graph of **frequency (Hz)** against **tube length (m)**.\n\nThe student takes two data points from the graph to test if the relationship is an inverse proportion.\n\n**Use** two data points from the graph to determine whether the data supports the hypothesis. **State** your conclusion.',
        marks: 3,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Length / m', 'Frequency / Hz'],
            rows: [['0.20', '1700'], ['0.25', '1360'], ['0.30', '1133'], ['0.40', '850'], ['0.50', '680']],
          },
          caption: 'Frequency of the note for boomwhacker tubes of different length.',
        },
        ph: 'Choose two data points, e.g. (0.20 m, 1700 Hz) and (0.40 m, 850 Hz).\nFor inverse proportion: L × f = constant.\n0.20 × 1700 = 340\n0.40 × 850 = 340\nThe products are equal, confirming inverse proportion.\nConclusion: The data supports the hypothesis — as length doubles, frequency halves.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The student creates a new table with an additional column for **1/length (m⁻¹)**.\n\nPart of the table is shown below:\n\n| Length / m | Frequency / Hz | 1/Length / m⁻¹ |\n|------------|----------------|----------------|\n| 0.20 | 1700 | 5.0 |\n| 0.25 | 1360 | 4.0 |\n| 0.30 | 1133 | 3.3 |\n| **0.40** | **850** | **?** |\n| 0.50 | 680 | 2.0 |\n\n**Calculate** the missing value of 1/Length for the 0.40 m tube.',
        marks: 1,
        ph: '1/0.40 = 2.5 m⁻¹',
        level: 'foundation',
      },
      {
        label: 'f',
        text: 'The student plots a graph of **frequency (Hz)** on the y-axis against **1/Length (m⁻¹)** on the x-axis.\n\n**Plot** the data point for the tube of length 0.40 m on the graph, and **draw** a line of best fit through all points.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'plot',
            xAxis: { label: '1/Length / m⁻¹', min: 0, max: 5, tick: 1 },
            yAxis: { label: 'frequency / Hz', min: 0, max: 1800, tick: 200 },
            dataTable: [{ x: 5.0, y: 1700 }, { x: 4.0, y: 1360 }, { x: 3.3, y: 1133 }, { x: 2.0, y: 680 }],
            plotMissing: [2.5, 850],
          },
          caption: 'Frequency against 1/length (plot the missing point at 1/L = 2.5 m⁻¹).',
        },
        ph: 'Plot the point (2.5, 850) on the graph.\nDraw a straight line of best fit through the origin, with roughly equal numbers of data points above and below the line.',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'The graph of frequency against 1/length is a straight line through the origin.\n\n**Select** what physical quantity the **gradient** of this graph represents.\n\nA. Wavelength of the sound\nB. Amplitude of the sound\nC. Speed of sound in air\nD. Period of the sound wave',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Wavelength', 'B. Amplitude', 'C. Speed of sound in air', 'D. Period'],
        ph: 'C',
        level: 'developing',
      },
      {
        label: 'h',
        text: '**Calculate** the speed of sound in air using the gradient of your line of best fit from part (f).\n\nShow your working and give appropriate units.',
        marks: 3,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: '1/Length / m⁻¹',
            yLabel: 'frequency / Hz',
            points: [[2.0, 680], [3.3, 1133], [4.0, 1360], [5.0, 1700]],
            readouts: [{ x: 5.0, note: 'read f at 1/L = 5.0 m⁻¹' }],
            dataMaxX: 5.0,
          },
          caption: 'Frequency against 1/length — read two points off the line to find the gradient.',
        },
        ph: 'Choose two points on the line of best fit that are far apart.\nGradient = Δfrequency / Δ(1/length)\nGradient = (1700 − 0) / (5.0 − 0) = 340\nSpeed of sound = 340 m s⁻¹\n(Accept values in range 330–350 m s⁻¹)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Waves/Sound: Sonometer wire tension (15 marks) Criterion C/B
  // Context: a lab sonometer (monochord) wire under tension from hanging masses.
  // V1: mass 0.28 kg → T = 2.744 ≈ 2.7 N ; table row 4.81 kg → 47.14 → 47.1 N
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Sound',
    marks: 15,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['frequency', 'tension', 'sound', 'investigation design'], level: 'proficient' },
    stem: 'A student investigates how the tension in a sonometer wire (a lab monochord) affects the frequency of the note produced. They hang different masses from the end of the wire over a pulley to change the tension.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="box5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8c3a5"/><stop offset="1" stop-color="#b08d5b"/></linearGradient></defs><rect width="600" height="230" fill="#ffffff"/><rect x="40" y="120" width="420" height="40" rx="6" fill="url(#box5)" stroke="#7a5c2e" stroke-width="2"/><text x="240" y="186" font-size="11" text-anchor="middle" fill="#7a5c2e">sounding box</text><polygon points="90,120 100,100 110,120" fill="#5b6b78"/><polygon points="400,120 410,100 420,120" fill="#5b6b78"/><line x1="100" y1="102" x2="410" y2="102" stroke="#0b7285" stroke-width="2"/><text x="240" y="94" font-size="11" text-anchor="middle" fill="#0b7285">wire under tension</text><circle cx="470" cy="102" r="12" fill="none" stroke="#5b6b78" stroke-width="3"/><line x1="410" y1="102" x2="470" y2="90" stroke="#0b7285" stroke-width="2"/><line x1="482" y1="102" x2="482" y2="160" stroke="#0b7285" stroke-width="2"/><rect x="470" y="160" width="24" height="34" rx="3" fill="#5b6b78"/><text x="482" y="214" font-size="11" text-anchor="middle" fill="#5b6b78">hanging mass</text></svg>',
      },
      caption: 'A sonometer: a wire over a sounding box, tensioned by a mass hanging over a pulley.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student hangs a mass of **0.28 kg** from the end of the wire.\n\n**Calculate** the tension in the wire. Use **g = 9.8 N kg⁻¹**.',
        marks: 2,
        ph: 'Tension = weight = mg\n= 0.28 × 9.8\n= 2.744 N ≈ 2.7 N',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'The student wants to investigate how tension affects the frequency of the wire.\n\n**State** two variables that should be controlled in this investigation.',
        marks: 2,
        ph: 'Any two of:\n- Length of the wire (between the bridges)\n- Thickness (diameter) of the wire\n- Material of the wire\n- Force used to pluck the wire',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The student collects data for different masses hung on the wire. Part of their results table is shown below:\n\n| Tension / N | Frequency / Hz |\n|-------------|----------------|\n| 2.9 | 165 |\n| 12.3 | 330 |\n| 27.9 | 495 |\n| **47.1** | **660** |\n| 49.0 | 737 |\n\nA student accidentally records the tension for the fourth row as 47.6 N. The correct value, rounded consistently to 1 decimal place, is **47.1 N**.\n\n**Complete** the table, ensuring:\n- Column headers include the correct quantities and units\n- Results are recorded in ascending order\n- Values are rounded consistently',
        marks: 4,
        ph: 'The table should show:\n- Column headers: "Tension / N" and "Frequency / Hz"\n- Results in ascending order of tension\n- All tensions to 1 d.p., all frequencies as whole numbers\n- 47.1 N correctly rounded (not 47.6 or 47.14)',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Suggest** one improvement the student could make to this investigation to improve the quality of the data. **Explain** why this improvement would be beneficial.',
        marks: 2,
        ph: 'Improvement: Repeat each measurement at least 3 times and calculate a mean.\nExplanation: This reduces the effect of random errors and makes the results more reliable.',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The student wants to extend the investigation by changing the **independent variable** (currently: tension).\n\n**State** one new independent variable the student could investigate.\n\n**State** two variables that would need to be controlled if this new independent variable were used.',
        marks: 3,
        ph: 'New IV: Length of the wire (or thickness/material/temperature)\n\nControl variables (if length is the new IV):\n1. Tension (keep constant by using same hanging mass)\n2. Material/thickness of the wire',
        level: 'proficient',
      },
      {
        label: 'f',
        text: '**Write** a hypothesis for the new investigation you described in part (e).\n\nYour hypothesis should follow the format: "If [independent variable] increases, then [dependent variable] will ... because ..."',
        marks: 2,
        ph: 'If the length of the wire increases, then the frequency of the sound produced will decrease, because a longer wire vibrates more slowly, producing a lower-pitched sound.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Sound: Intensity through acoustic-foam panels (17 marks) Criterion C/B
  // Context: how layers of acoustic foam reduce the sound intensity level behind them.
  // V1: 2-layer mean 117 dB, 4-layer mean 114 dB; mean of 6 & 8 layers = 107 dB
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Sound',
    marks: 17,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['sound intensity', 'investigation design', 'data analysis'], level: 'proficient' },
    stem: 'A student investigates how layers of acoustic foam affect the sound intensity level measured on the other side. They use a sound level meter placed a fixed distance from a speaker, with foam panels placed between the speaker and the meter.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="230" fill="#ffffff"/><rect x="40" y="80" width="50" height="80" rx="6" fill="#2c3e50" stroke="#000"/><circle cx="65" cy="120" r="16" fill="#5b6b78"/><circle cx="65" cy="120" r="7" fill="#222"/><text x="65" y="178" font-size="11" text-anchor="middle" fill="#2c3e50">speaker</text><g><rect x="150" y="70" width="14" height="100" fill="#7a4fb5" opacity="0.85"/><rect x="170" y="70" width="14" height="100" fill="#7a4fb5" opacity="0.7"/><rect x="190" y="70" width="14" height="100" fill="#7a4fb5" opacity="0.55"/><rect x="210" y="70" width="14" height="100" fill="#7a4fb5" opacity="0.4"/></g><text x="187" y="190" font-size="11" text-anchor="middle" fill="#5b3fa0">foam layers</text><g stroke="#f08c00" stroke-width="2" fill="none"><path d="M92,120 q14,-10 28,0"/><path d="M100,120 q14,-12 28,0"/></g><rect x="470" y="84" width="56" height="72" rx="6" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><rect x="480" y="94" width="36" height="22" rx="3" fill="#222"/><text x="498" y="110" font-size="10" fill="#3ad36a" text-anchor="middle" font-family="monospace">dB</text><circle cx="498" cy="138" r="8" fill="#5b6b78"/><text x="498" y="172" font-size="11" text-anchor="middle" fill="#0b7285">sound meter</text><line x1="230" y1="120" x2="466" y2="120" stroke="#94a3ad" stroke-width="1" stroke-dasharray="4 4"/><text x="350" y="112" font-size="10" text-anchor="middle" fill="#94a3ad">fixed distance</text></svg>',
      },
      caption: 'A speaker, a stack of acoustic-foam panels, and a sound level meter at a fixed distance.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student takes **three measurements** for each number of foam layers.\n\n**State** one reason why taking three measurements improves the investigation.',
        marks: 1,
        ph: 'Taking three measurements improves reliability. It allows the student to identify anomalous results and calculate a more accurate mean.',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The table below shows the student\'s results for **2 layers** of foam:\n\n| Trial | Sound intensity level / dB |\n|-------|---------------------------|\n| 1 | 118 |\n| 2 | 116 |\n| 3 | 116 |\n\nAnd for **4 layers** of foam:\n\n| Trial | Sound intensity level / dB |\n|-------|---------------------------|\n| 1 | 115 |\n| 2 | 114 |\n| 3 | 112 |\n\n**Calculate** the mean sound intensity level for **2 layers** and for **4 layers**.',
        marks: 2,
        ph: '2 layers: mean = (118 + 116 + 116) / 3 = 350 / 3 = 116.7 → 117 dB\n4 layers: mean = (115 + 114 + 112) / 3 = 341 / 3 = 113.7 → 114 dB\n\n(Award 1 mark per correct mean)',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The complete results for all numbers of layers are shown below:\n\n| Layers | Mean sound intensity level / dB |\n|--------|--------------------------------|\n| 0 | 124 |\n| 2 | 117 |\n| 4 | 114 |\n| 6 | 110 |\n| 8 | 104 |\n| 10 | 98 |\n\n**Calculate** the mean of the sound intensity levels for 6 and 8 layers combined.',
        marks: 1,
        ph: 'Mean = (110 + 104) / 2 = 214 / 2 = 107 dB',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The student wants to design a **new investigation** using the equipment shown. The investigation will test how the **number of layers of foam** affects the **sound intensity level** measured through the foam barrier.\n\n**Design** a full investigation. In your answer, include:\n- The independent variable, dependent variable, and at least **two** control variables with justification\n- A **hypothesis** with a scientific explanation\n- A **method** that could be followed by another student\n- How you would **collect sufficient data** to draw a valid conclusion',
        marks: 13,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><rect x="60" y="60" width="40" height="70" rx="5" fill="#2c3e50"/><circle cx="80" cy="95" r="12" fill="#5b6b78"/><text x="80" y="148" font-size="10" text-anchor="middle" fill="#2c3e50">speaker</text><g><rect x="200" y="50" width="18" height="100" fill="#7a4fb5" opacity="0.8"/><rect x="224" y="50" width="18" height="100" fill="#7a4fb5" opacity="0.6"/><rect x="248" y="50" width="18" height="100" fill="#7a4fb5" opacity="0.45"/></g><text x="233" y="168" font-size="10" text-anchor="middle" fill="#5b3fa0">foam barrier</text><rect x="440" y="66" width="48" height="64" rx="5" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="464" y="102" font-size="10" fill="#0b7285" text-anchor="middle">dB</text><text x="464" y="150" font-size="10" text-anchor="middle" fill="#0b7285">meter</text><line x1="100" y1="95" x2="436" y2="95" stroke="#94a3ad" stroke-width="1" stroke-dasharray="4 4"/><text x="270" y="36" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Wall model: vary the number of foam layers</text></svg>',
          },
          caption: 'A model sound barrier: foam layers between a speaker and a sound level meter.',
        },
        ph: 'Variables:\n- IV: number of layers of foam\n- DV: sound intensity level (measured in dB using a sound level meter)\n- CV1: distance between speaker and meter (kept constant — changing distance would affect intensity)\n- CV2: type and thickness of foam (same material — different materials absorb sound differently)\n- CV3: volume of the speaker/sound source\n\nHypothesis:\nIf the number of layers of foam increases, then the sound intensity level measured will decrease, because each layer absorbs some of the sound energy, so more layers will result in more total absorption.\n\nMethod:\n1. Set up speaker and sound level meter 50 cm apart\n2. Place 0 layers of foam between them; record sound level 3 times\n3. Add 2 layers of foam; record 3 measurements\n4. Repeat for 4, 6, 8, 10 layers\n5. Calculate mean for each number of layers\n\nData collection:\nRecord at least 5 different numbers of layers with 3 trials each. Plot a graph of sound intensity level (y-axis) vs number of layers (x-axis). Draw a line of best fit.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Space Physics: Jupiter, retrograde motion & signal time (6 marks) Criterion A/D
  // Context: observing Jupiter's retrograde motion; a probe sent to Jupiter's moon Europa.
  // V1: distance Earth–Jupiter = 6.3 × 10¹¹ m → signal time = 2100 s = 35 minutes
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Space Physics',
    marks: 6,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['retrograde motion', 'speed of light', 'heliocentric model'], level: 'proficient' },
    stem: 'Humans have been observing the planets in the night sky for thousands of years. Ancient astronomers noticed that Jupiter appeared to move backwards against the stars at certain times of the year, which is known as retrograde motion.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sun7" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0a020"/></radialGradient><radialGradient id="jup7" cx="0.4" cy="0.4"><stop offset="0" stop-color="#e3b98c"/><stop offset="1" stop-color="#a8743c"/></radialGradient></defs><rect width="560" height="280" fill="#0b1426"/><circle cx="160" cy="140" r="22" fill="url(#sun7)"/><text x="160" y="176" font-size="11" text-anchor="middle" fill="#f0c419">Sun</text><circle cx="160" cy="140" r="70" fill="none" stroke="#3a5878" stroke-width="1.5"/><circle cx="230" cy="140" r="8" fill="#3a86c8"/><text x="230" y="118" font-size="10" text-anchor="middle" fill="#9fc6e8">Earth</text><circle cx="160" cy="140" r="120" fill="none" stroke="#3a5878" stroke-width="1.5"/><circle cx="280" cy="140" r="14" fill="url(#jup7)"/><text x="280" y="170" font-size="10" text-anchor="middle" fill="#e3b98c">Jupiter</text><path d="M300,90 q40,12 0,24 q40,12 0,24" fill="none" stroke="#e8772e" stroke-width="2"/><text x="360" y="118" font-size="11" fill="#e8772e">apparent retrograde</text><text x="360" y="132" font-size="11" fill="#e8772e">loop in the sky</text></svg>',
      },
      caption: 'As Earth overtakes Jupiter on its faster inner orbit, Jupiter appears to trace a backwards loop against the background stars.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Ancient astronomers believed in the **geocentric model** of the solar system (Earth at the centre).\n\n**Explain** why the retrograde motion of Jupiter was difficult to explain using the geocentric model.',
        marks: 2,
        ph: 'In the geocentric model, Jupiter would orbit around Earth in a circular or elliptical path. If Earth were the centre, Jupiter would always appear to move in the same direction across the sky. Retrograde motion (Jupiter appearing to move backwards) cannot be explained if Jupiter simply orbits Earth — it would never reverse direction.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'A signal is sent from Earth to a spacecraft orbiting Jupiter\'s moon Europa. The distance between Earth and Jupiter is **6.3 × 10¹¹ m**. The speed of light (and radio waves) is **3.0 × 10⁸ m s⁻¹**.\n\n**Calculate** the time it takes for the signal to travel from Earth to Jupiter. Give your answer in **minutes**.',
        marks: 2,
        ph: 't = d/v\n= 6.3 × 10¹¹ / 3.0 × 10⁸\n= 2100 s\n= 2100 / 60\n= 35 minutes',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Scientists calculate a precise **launch date** for a rocket to travel from Earth to Jupiter.\n\n**Explain** why the launch date is important for a mission to Jupiter.',
        marks: 2,
        ph: 'The launch date is calculated so that Earth and Jupiter are favourably positioned in their orbits when the spacecraft arrives. A well-chosen date means:\n- A shorter, more fuel-efficient journey (often using a gravity assist)\n- Less travel time for the spacecraft\n- Less communication delay on arrival\nLaunching at the wrong time would mean a much longer and more costly journey.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Europa Mission Evaluation (13 marks) Criterion D
  // Context: evaluating a crewed mission to Jupiter's moon Europa.
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society',
    marks: 13,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['space exploration', 'evaluation', 'evidence', 'stakeholders'], level: 'proficient' },
    stem: 'Several space agencies and private companies are studying the possibility of sending a crewed mission to Jupiter\'s moon Europa, which is thought to have a liquid-water ocean beneath its icy crust. The table below summarises proposed Europa mission objectives.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Mission objective', 'Reason'],
        rows: [
          ['Search the sub-surface ocean for signs of life', 'Liquid water + energy could support microbes'],
          ['Map the radiation environment around Jupiter', 'Jupiter\'s magnetosphere is intensely radioactive'],
          ['Test long-duration life support beyond Mars', 'A ~6-year round trip stresses crew and supplies'],
          ['Demonstrate gravity-assist navigation', 'Saves fuel on the journey to the outer planets'],
        ],
      },
      caption: 'Proposed objectives for a crewed mission to Europa.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** the proposal to send humans to Europa. In your answer, discuss:\n\n- At least **two technical challenges** involved in planning the journey to Europa (with scientific explanations)\n- **Economic advantages and disadvantages** for the government of a country funding the mission\n- **Political implications** of a crewed Europa mission\n- A **concluding appraisal** of whether the mission should proceed\n\nUse evidence and scientific reasoning to support your points.',
        marks: 13,
        ph: 'Technical challenges:\n1. Distance/communication delay — signals take about 35 minutes each way at Jupiter\'s distance, so real-time control is impossible. Engineers must design autonomous systems.\n2. Intense radiation — Jupiter\'s magnetosphere exposes the crew and electronics to very high radiation doses; heavy shielding is needed, adding mass and cost.\n3. (Others: very long mission time, food/water/life support for ~6 years, extreme cold at Europa.)\n\nEconomic advantages: technological spin-offs, high-skill jobs, international prestige, new scientific knowledge (possible discovery of life).\nEconomic disadvantages: enormous cost, opportunity cost (could fund healthcare/education), uncertain return, very long payback time.\n\nPolitical implications: national prestige and soft power, international cooperation or competition, debate over planetary protection (not contaminating Europa\'s ocean).\n\nConclusion: Weigh the long-term scientific value (searching for life) against the cost and risk; a collaborative international mission would share costs and benefits.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Moon-base Environment Challenges (6 marks) Criterion D
  // Context: scientific challenges of a permanent research base on the Moon.
  // ─────────────────────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society',
    marks: 6,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['space', 'temperature', 'radiation', 'gravity', 'colonisation'], level: 'proficient' },
    stem: 'Some scientists propose building a permanent research base on the Moon. However, the environment on the Moon is very different from Earth.',
    tasks: [
      {
        label: 'a',
        text: '**Discuss** the challenges of living on the Moon by explaining the effect of each factor listed below on a human crew, and suggesting how each challenge could be overcome:\n\n1. **Extreme temperature swings** (the surface ranges from about +120 °C in sunlight to −130 °C in shadow)\n2. **Radiation** (the Moon has no atmosphere and no global magnetic field)\n3. **Low gravity** (the Moon has about 17% of Earth\'s surface gravity)',
        marks: 6,
        ph: '1. Extreme temperature swings:\n   Effect: Equipment and habitats must cope with huge heating and cooling; humans cannot survive unprotected.\n   Solution: Well-insulated habitats with active heating and cooling; build into shaded craters or use reflective/insulating outer layers.\n\n2. Radiation:\n   Effect: No atmosphere or magnetic field means high exposure to cosmic rays and solar radiation; increased risk of cancer and cell damage.\n   Solution: Bury habitats under regolith (Moon soil) or build in lava tubes for shielding; use protective suits.\n\n3. Low gravity:\n   Effect: Bone density loss and muscle wasting over long stays; balance and movement difficulties.\n   Solution: Regular resistance exercise to maintain muscle and bone; possible use of rotating modules to simulate gravity.',
        level: 'advanced',
      },
    ],
  },

]
