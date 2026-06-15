import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2018 · VARIANT 1  (isomorphic to physics-nov-2018)
// Same crit / command terms / marks / task structure / tags / widgets.
// New real-world contexts + data-driven artefacts (no figImages). Numbers recomputed.
//   Q1 sound vs light + d-t graph:  lightning storm → FIREWORKS DISPLAY (festival)
//   Q2 R=V/I, Q=It, conductor:      lightning/electricity → ELECTRIC ARC WELDING (industrial)
//   Q3 decay & half-life:           Meitnerium-274 → TENNESSINE-294 alpha decay
//   Q4 bounce-vs-pressure (Crit B): football → BASKETBALL internal pressure
//   Q5 bounce data processing (C):  basketball/tennis → TENNIS BALL & GOLF BALL
//   Q6 bounce-vs-temperature (B):   squash ball → SUPERBALL (high-bounce rubber)
//   Q7 climate/global impact (D):   car travel → AIR TRAVEL (aviation emissions)
//   Q8 transport evaluation (D):    Fenna → NOAH, different city/commute options
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2018-v1',
  subject: 'Physics',
  session: 'November',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Sound & Light: Fireworks display (8 marks) Criterion A
  // Q1d: 6 km at 21:00 → 3 km at 21:10; 3 km in 10 min = 1/6 h → 18 km h⁻¹
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Sound and Light — Fireworks Display',
    marks: 8,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    stem: 'This question is about light and sound waves and the different speeds at which they move through the air.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="fw1" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff6c2"/><stop offset="1" stop-color="#f08c00"/></radialGradient></defs><rect width="600" height="320" fill="#10243a"/><rect x="0" y="270" width="600" height="50" fill="#0b1726"/><circle cx="180" cy="90" r="6" fill="url(#fw1)"/><g stroke="#f08c00" stroke-width="2" stroke-linecap="round"><line x1="180" y1="90" x2="180" y2="40"/><line x1="180" y1="90" x2="220" y2="55"/><line x1="180" y1="90" x2="232" y2="90"/><line x1="180" y1="90" x2="220" y2="125"/><line x1="180" y1="90" x2="180" y2="142"/><line x1="180" y1="90" x2="140" y2="125"/><line x1="180" y1="90" x2="128" y2="90"/><line x1="180" y1="90" x2="140" y2="55"/></g><circle cx="180" cy="90" r="58" fill="none" stroke="#f08c00" stroke-width="1" stroke-dasharray="3 5" opacity="0.6"/><text x="180" y="172" font-size="12" fill="#ffd166" text-anchor="middle">flash of light (seen first)</text><circle cx="430" cy="120" r="46" fill="none" stroke="#9bb9cf" stroke-width="1.5" stroke-dasharray="4 6"/><circle cx="430" cy="120" r="30" fill="none" stroke="#9bb9cf" stroke-width="1.5" stroke-dasharray="4 6"/><circle cx="430" cy="120" r="14" fill="none" stroke="#9bb9cf" stroke-width="1.5" stroke-dasharray="4 6"/><text x="430" y="190" font-size="12" fill="#9bb9cf" text-anchor="middle">sound (heard later)</text><circle cx="300" cy="295" r="9" fill="#f1c27d" stroke="#c98a3c"/><rect x="292" y="304" width="16" height="14" rx="4" fill="#0b7285"/><text x="300" y="262" font-size="11" fill="#cfe3f0" text-anchor="middle">observer</text></svg>',
      },
      caption: 'At a fireworks display the flash is seen almost instantly, but the bang is heard a moment later.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct response from the choices below.\n\nThe speed of sound in air is ___ and the speed of light in air is ___.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['330 ms⁻¹ and 300 000 000 ms⁻¹', '300 000 000 ms⁻¹ and 330 ms⁻¹', '55 000 ms⁻¹ and 300 000 000 ms⁻¹', '330 ms⁻¹ and 55 000 ms⁻¹'],
        ph: 'Select the correct pair of speeds.',
      },
      {
        label: 'b',
        text: 'If you watch a firework burst high in the sky and listen until you hear the bang, it is possible to find the distance to the firework. **Outline** what quantity you would measure and the calculation you would perform to calculate the distance.',
        marks: 3,
        ph: 'Quantity to measure: time between seeing the flash and hearing the bang\nCalculation: use speed = distance/time → distance = speed of sound × time\n(speed of sound in air = 330 ms⁻¹)',
      },
      {
        label: 'c',
        text: 'A barge sets off fireworks while moving along a river. A student on the bank calculates the distance to the barge every five minutes and draws the following graph of the results. Use the graph to **describe** the journey of the barge as it passes the student.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            xLabel: 'Time',
            yLabel: 'Distance to barge',
            yUnit: 'km',
            title: 'Distance to the fireworks barge',
            dataPoints: [
              { x: 0, y: 6 }, { x: 10, y: 3 }, { x: 20, y: 1 }, { x: 30, y: 1 }, { x: 40, y: 3 }, { x: 50, y: 6 },
            ],
            xMin: 0, xMax: 50, yMin: 0, yMax: 7, xStep: 10, yStep: 1,
          },
          caption: 'Distance to the fireworks barge over time (x-axis marked 21:00 → 21:50).',
        },
        ph: 'The barge moves with constant/unchanging speed (not accelerating). It moves toward the student AND then away from the student. It passes at a distance of about 1 km (its closest approach).',
      },
      {
        label: 'd',
        text: 'Use information from the graph to **calculate** the speed of the barge between 21:00 and 21:10. Give your answer in km h⁻¹.',
        marks: 2,
        ph: 'Read values from graph: distance at 21:00 = 6 km, distance at 21:10 = 3 km\nDistance covered = 3 km in 10 min = 1/6 hour\nSpeed = 3 ÷ (1/6) = 18 km h⁻¹',
      },
    ],
    tags: { unit: 'sound-waves', topics: ['speed of light', 'speed of sound', 'distance-time graph', 'wave speed'], level: 'developing' },
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Electricity: Electric arc welding (9 marks) Criterion A
  // Q2b: R = V/I = 40 / 160 = 0.25 Ω ; Q2c: Q = It = 160 × 5.0 = 800 C
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity — Arc Welding and Earthing',
    marks: 9,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'This question is about electric arc welding, a process that uses a large electric current to join metal.',
    tasks: [
      {
        label: 'a',
        text: 'A welder rubs the electrode against the metal to start the arc, which transfers charge between the electrode and the workpiece. **Select** the sentence that best describes how charge is transferred in the welding arc.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'Electrons are transferred from the electrode through the arc to the workpiece.',
          'Protons are transferred from the electrode through the arc to the workpiece.',
          'Neutrons are transferred from the workpiece through the arc to the electrode.',
          'Protons are transferred from the workpiece through the arc to the electrode.',
        ],
        ph: 'Select the correct charge transfer process.',
      },
      {
        label: 'b',
        text: 'When the arc strikes, the air between the electrode and the metal is heated into a plasma (a super-hot gas) that has a very low resistance, so a large current can flow. Using information from the diagram, **calculate** the resistance of the welding arc.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="arc2" cx="0.5" cy="0.4"><stop offset="0" stop-color="#fff6c2"/><stop offset="1" stop-color="#f08c00"/></radialGradient></defs><rect width="560" height="240" fill="#ffffff"/><rect x="40" y="170" width="480" height="34" fill="#8a99a6" stroke="#5b6b78"/><text x="280" y="222" font-size="11" text-anchor="middle" fill="#5b6b78">steel workpiece</text><rect x="262" y="40" width="20" height="100" rx="4" fill="#3a6ea5" stroke="#244a73"/><text x="296" y="70" font-size="11" fill="#244a73">electrode</text><ellipse cx="272" cy="158" rx="20" ry="14" fill="url(#arc2)"/><line x1="272" y1="142" x2="272" y2="170" stroke="#f08c00" stroke-width="3"/><text x="330" y="160" font-size="11" fill="#9a5b00">welding arc (plasma)</text><rect x="60" y="60" width="120" height="60" rx="6" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="120" y="86" font-size="13" font-weight="700" text-anchor="middle" fill="#0b7285">V = 40 V</text><text x="120" y="106" font-size="13" font-weight="700" text-anchor="middle" fill="#0b7285">I = 160 A</text><text x="120" y="135" font-size="10" text-anchor="middle" fill="#5b6b78">welder readings</text></svg>',
          },
          caption: 'An electric arc welder. The arc voltage is 40 V and the welding current is 160 A.',
        },
        ph: 'R = V/I\n= 40 / 160\n= 0.25 Ω',
      },
      {
        label: 'c',
        text: 'A single weld passes a current of 160 A for a time of 5.0 s. **Calculate** the charge transferred during this time.',
        marks: 2,
        ph: 'ΔQ = I × Δt\n= 160 × 5.0\n= 800 C',
      },
      {
        label: 'd',
        text: 'The metal workpiece is connected to the ground by a thick metal earthing cable clamped to the welding bench. To keep the welder safe, this earthing cable is essential. **Explain** how the earthing cable protects the welder from electric shock.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="aw2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="240" fill="#ffffff"/><rect x="120" y="90" width="200" height="40" rx="4" fill="#8a99a6" stroke="#5b6b78"/><text x="220" y="115" font-size="11" text-anchor="middle" fill="#26323c">welding bench / workpiece</text><path d="M320,110 L420,110 L420,200" fill="none" stroke="#0b7285" stroke-width="4" marker-end="url(#aw2)"/><text x="430" y="160" font-size="11" fill="#0b7285">earthing cable</text><line x1="395" y1="200" x2="445" y2="200" stroke="#5b6b78" stroke-width="3"/><line x1="403" y1="208" x2="437" y2="208" stroke="#5b6b78" stroke-width="2"/><line x1="411" y1="216" x2="429" y2="216" stroke="#5b6b78" stroke-width="2"/><text x="420" y="232" font-size="10" text-anchor="middle" fill="#5b6b78">earth (ground)</text><circle cx="70" cy="80" r="12" fill="#f1c27d" stroke="#c98a3c"/><rect x="60" y="92" width="20" height="40" rx="6" fill="#3a6ea5"/><text x="70" y="150" font-size="11" text-anchor="middle" fill="#26323c">welder</text></svg>',
          },
          caption: 'The workpiece is connected to earth by a thick, low-resistance earthing cable.',
        },
        ph: 'The metal earthing cable is a better conductor / has lower resistance than the welder\'s body. If a fault occurs, the current/charge flows through the low-resistance earthing cable (path of least resistance). The charge passes safely to earth instead of through the welder, preventing an electric shock.',
      },
    ],
    tags: { unit: 'electricity-circuits', topics: ['charge', 'current', 'resistance', 'V = IR', 'Q = It', 'lightning'], level: 'developing' },
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Radioactivity: Decay and half-life (9 marks) Criterion A
  // Q3b: Tennessine-294 (Z=117) alpha decay → mass 290, Z 115 = Moscovium (Mc)
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity — Decay and Half-life',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'This question is about decay and half-life.',
    tasks: [
      {
        label: 'a',
        text: 'When unstable isotopes decay, they may release an alpha or a beta particle. For each of the decay equations below, **select** the particle released during decay.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="20" y="50" font-size="16" fill="#1f2d3a">²²⁶₈₈Ra  →  ²²²₈₆Rn  +  ⁴₂?</text><text x="20" y="110" font-size="16" fill="#1f2d3a">²¹²₈₂Pb  →  ²¹²₈₃Bi  +  ⁰₋₁?</text><text x="20" y="170" font-size="16" fill="#1f2d3a">²³⁸₉₂U   →  ²³⁴₉₀Th  +  ⁴₂?</text><line x1="14" y1="30" x2="14" y2="190" stroke="#0b7285" stroke-width="3"/></svg>',
          },
          caption: 'Three decay equations. Identify the particle released in each.',
        },
        ph: '²²⁶Ra(88) → ²²²Rn(86) + ⁴α(2): alpha particle\n²¹²Pb(82) → ²¹²Bi(83) + ⁰β(−1): beta particle\n²³⁸U(92) → ²³⁴Th(90) + ⁴α(2): alpha particle\n(Award 1 mark for all three correct)',
      },
      {
        label: 'b',
        text: 'Tennessine-294 emits an alpha particle when it decays. **Identify** the atomic number, mass number and name of the element formed when an atom of tennessine-294 decays. You may refer to the periodic table.',
        marks: 3,
        ph: 'Alpha particle has mass number 4, atomic number 2.\nNew mass number = 294 − 4 = 290\nNew atomic number = 117 − 2 = 115\nElement with atomic number 115 = Moscovium (Mc)',
      },
      {
        label: 'c',
        text: 'After decay has taken place, the daughter nucleus emits gamma radiation. **Outline** the nature of gamma radiation.',
        marks: 2,
        ph: 'Gamma radiation is a high energy electromagnetic wave (or: high frequency / short wavelength). It is radiation/a photon — do NOT describe it as a particle.',
      },
      {
        label: 'd',
        text: 'The following table lists some unstable isotopes, their half-lives and some additional information regarding the elements. **Evaluate** the information in the table to determine which of the isotopes listed would best assist us in dating an ancient wooden tool used by early humans, suspected to be 10 000 years old.',
        marks: 3,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Isotope', 'Half-life', 'Where it is found'],
            rows: [
              ['Carbon-14', '5 700 years', 'In all living and once-living (organic) materials'],
              ['Uranium-238', '4 500 000 000 years', 'In rocks and minerals'],
              ['Sodium-24', '15 hours', 'Made artificially in reactors'],
              ['Potassium-40', '1 300 000 000 years', 'In rocks and some foods'],
            ],
          },
          caption: 'Some unstable isotopes, their half-lives and where they are found.',
        },
        ph: 'Carbon-14 is most appropriate. Reasons: (1) its half-life of 5 700 years means after 10 000 years the change in abundance will be noticeable; (2) the half-life is appropriate to the timescale (similar order of magnitude); (3) it exists in nature in organic materials (such as the wooden tool used by humans).',
      },
    ],
    tags: { unit: 'atomic-physics', topics: ['radioactive decay', 'alpha beta gamma', 'half-life', 'carbon dating'], level: 'developing' },
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Basketball bounce vs internal pressure (18 marks) Criterion B
  // Q4d gauge reads 56 kPa; Q4f LOBF at 38 kPa ≈ 0.58 m; Q4g y-intercept ≈ 0.38 m
  // NOTE: Q4a widget = variable_classify (HARDCODED) — ball-bounce variable family kept.
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Basketball Bounce — Experiment Design and Analysis',
    marks: 18,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    stem: 'A change in the characteristics of a basketball may impact the ball\'s performance. The international basketball federation (FIBA) sets a standard so that every game is played with balls that have identical characteristics.\n\nThe bounciness of the ball is an important factor that can affect its performance. Your class is studying factors that affect the performance of the ball. You decide that you are going to study one factor: the effect of the ball\'s internal air pressure.\n\nYou plan to drop the ball from a measured height towards a horizontal surface and determine the height of the first bounce. Your hypothesis for the experiment is:\n\n*Bounce height is proportional to internal air pressure because higher pressure reduces the energy loss due to deformation when the ball bounces.*',
    tasks: [
      {
        label: 'a',
        text: '**Select** the following variables.',
        marks: 4,
        widget: 'variable_classify',
        widgetItems: ['Drop height', 'Internal air pressure', 'Bounce height', 'Size of ball', 'Bouncing surface', 'Material of the ball'],
        ph: 'Internal air pressure → Independent variable\nBounce height → Dependent variable\nDrop height → Control variable\nSize of ball → Control variable\nBouncing surface → Control variable\nMaterial of the ball → Control variable',
      },
      {
        label: 'b',
        text: 'FIBA\'s guidelines require the pressure in the basketball to be between 50 kPa and 110 kPa. **Select** the most appropriate option for collecting data. **Justify** your answer.',
        marks: 3,
        widget: 'radio_select',
        widgetOptions: [
          'Measurements each 5 kPa; 1 repetition at each pressure',
          'Measurements each 10 kPa; 3 repetitions at each pressure',
          'Measurements each 30 kPa; 8 repetitions at each pressure',
        ],
        ph: 'Select: Measurements each 10 kPa; 3 repetitions at each pressure.\nJustification: 3 repetitions allows a mean to be calculated and reduces experimental uncertainty. 10 kPa intervals provide sufficient data across the full range (7 data points).',
      },
      {
        label: 'c',
        text: '**State** and **justify** one safety measure that you must take as you perform the experiment.',
        marks: 2,
        ph: 'Safety measure: e.g. use a safe method to drop the ball from height / avoid bouncing the ball into the face / avoid over-pressurizing the ball.\nJustification: to avoid falling injury / to avoid injury from the ball / the ball might burst if over-pressurized.',
      },
      {
        label: 'd',
        text: 'The following is an image of the pressure gauge that you will use to inflate the ball. **Measure** the pressure of the ball shown in the image using an appropriate unit.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="300" height="300" fill="#ffffff"/><circle cx="150" cy="150" r="120" fill="#f7fafc" stroke="#5b6b78" stroke-width="4"/><circle cx="150" cy="150" r="6" fill="#1f2d3a"/><g stroke="#1f2d3a" stroke-width="2"><line x1="150" y1="40" x2="150" y2="58"/><line x1="260" y1="150" x2="242" y2="150"/><line x1="150" y1="260" x2="150" y2="242"/><line x1="40" y1="150" x2="58" y2="150"/></g><g font-size="15" font-weight="700" fill="#1f2d3a" text-anchor="middle"><text x="150" y="34">100</text><text x="276" y="156">75</text><text x="150" y="284">50</text><text x="24" y="156">25</text><text x="64" y="74">0</text></g><g stroke="#9aa7b2" stroke-width="1"><line x1="150" y1="45" x2="150" y2="55"/><line x1="255" y1="150" x2="245" y2="150"/><line x1="150" y1="255" x2="150" y2="245"/><line x1="45" y1="150" x2="55" y2="150"/></g><line x1="150" y1="150" x2="184.5" y2="237.1" stroke="#f08c00" stroke-width="4"/><text x="150" y="200" font-size="13" fill="#0b7285" text-anchor="middle">kPa</text></svg>',
          },
          caption: 'The pressure gauge reading for the basketball (dial marked 0–100 kPa).',
        },
        ph: '56 ± 0.5 kPa (needle reads just over half-way between 50 and 75, closest to 56)\n(Accept any value 55–57 kPa with the unit kPa.)',
      },
      {
        label: 'e',
        text: 'Some of the results from another student who performed a similar experiment are shown in the graph below. **Draw** a line of best fit on the graph.',
        marks: 1,
        artefact: {
          component: 'LineGraph',
          data: {
            xLabel: 'Internal air pressure',
            yLabel: 'Bounce height',
            xUnit: 'kPa',
            yUnit: 'm',
            title: 'Bounce height vs internal air pressure',
            dataPoints: [
              { x: 20, y: 0.49 }, { x: 40, y: 0.59 }, { x: 60, y: 0.71 }, { x: 80, y: 0.79 }, { x: 100, y: 0.91 },
            ],
            xMin: 0, xMax: 110, yMin: 0, yMax: 1.0, xStep: 20, yStep: 0.1,
          },
          caption: 'Bounce height against internal air pressure (draw your own line of best fit).',
        },
        ph: 'A straight line of best fit that passes through all (or as close as possible to all) the data points.',
      },
      {
        label: 'f',
        text: 'Use your line of best fit to **estimate** the bounce height for a pressure of 38 kPa.',
        marks: 1,
        ph: 'Read from LOBF at 38 kPa: approximately 0.57–0.59 m',
      },
      {
        label: 'g',
        text: 'Use the graph to **explain** why the y-intercept of the line of best fit has no significance.',
        marks: 3,
        ph: 'The y-intercept corresponds to a bounce height of approximately 0.38 m when pressure = 0 kPa. However, when the ball is completely deflated (pressure = 0 kPa) it will not bounce at all. The y-intercept is therefore physically meaningless.',
      },
      {
        label: 'h',
        text: 'The hypothesis proposed at the start of the investigation was: *Bounce height is proportional to internal air pressure because higher pressure reduces the energy loss due to deformation when the ball bounces.* Use the graph of the results of the experiment to **evaluate** the validity of this hypothesis.',
        marks: 2,
        ph: 'If the relationship was proportional, the line of best fit would go through the origin of the graph. The line does not go through the origin — therefore the relationship is NOT proportional and the hypothesis is not fully supported.',
      },
    ],
    tags: { unit: 'pressure', topics: ['pressure', 'experiment design', 'variables', 'graph analysis', 'LOBF', 'hypothesis'], level: 'developing' },
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Tennis ball & golf ball bounce: data processing (15 marks) Criterion C
  // Q5b: 0.48, 0.53, 5.0 × 10¹ cm (= 50 cm = 0.50 m) → mean = (0.48+0.53+0.50)/3 = 0.50(33) m
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Ball Bounce — Data Processing',
    marks: 15,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    stem: 'Another student decided to do a similar experiment using a tennis ball and a golf ball.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah5b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="480" height="260" fill="#ffffff"/><rect x="40" y="220" width="400" height="14" fill="#8a99a6" stroke="#5b6b78"/><line x1="90" y1="40" x2="90" y2="234" stroke="#1f2d3a" stroke-width="2"/><g stroke="#1f2d3a" stroke-width="1"><line x1="84" y1="60" x2="96" y2="60"/><line x1="84" y1="120" x2="96" y2="120"/><line x1="84" y1="180" x2="96" y2="180"/></g><g font-size="10" fill="#5b6b78"><text x="60" y="64">1.8</text><text x="60" y="124">1.2</text><text x="60" y="184">0.6</text><text x="74" y="248">m</text></g><circle cx="160" cy="60" r="14" fill="#cde34a" stroke="#8aa11f"/><text x="160" y="40" font-size="10" text-anchor="middle" fill="#5b6b78">drop</text><path d="M160,76 L160,200" stroke="#94a3ad" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#ah5b)"/><circle cx="160" cy="210" r="14" fill="#cde34a" stroke="#8aa11f"/><circle cx="300" cy="160" r="12" fill="#ffffff" stroke="#5b6b78"/><text x="300" y="138" font-size="10" text-anchor="middle" fill="#5b6b78">bounce</text><path d="M300,172 L300,210" stroke="#94a3ad" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#ah5b)"/><circle cx="300" cy="210" r="12" fill="#ffffff" stroke="#5b6b78"/><text x="380" y="120" font-size="11" fill="#0b7285">tennis ball (green)</text><text x="380" y="138" font-size="11" fill="#5b6b78">golf ball (white)</text></svg>',
      },
      caption: 'A tennis ball and a golf ball dropped from a measured height; the bounce height is recorded.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** the validity of the method shown in the animation. In your answer, you should identify steps in the method that affect the validity of the data, what effect each step has on the validity of the data and how the method can be improved.',
        marks: 6,
        ph: 'Step 1: Ruler not used correctly (e.g. held at an angle, not placed on the floor)\nEffect 1: Bounce height measured incorrectly / inconsistently\nImprovement 1: Hold the ruler vertically / place the ruler base on the floor\n\nStep 2: Ball is thrown rather than dropped / a different ball used / dropped from different positions\nEffect 2: Measurement of bounce height will be inconsistent\nImprovement 2: Use the same ball for all repeats / release (not throw) from the same hand position',
      },
      {
        label: 'b',
        text: 'The following are the bounce height values for 3 repetitions at a drop height of 1.8 m: 0.48 m, 0.53 m and 5.0 × 10¹ cm. **Calculate** the average value of bounce height for the drop height of 1.8 m. Give your answer in metres.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Repetition', 'Bounce height'],
            rows: [['1', '0.48 m'], ['2', '0.53 m'], ['3', '5.0 × 10¹ cm']],
          },
          caption: 'Three bounce-height repetitions recorded at a drop height of 1.8 m.',
        },
        ph: 'Convert 5.0 × 10¹ cm = 50 cm = 0.50 m\nAverage = (0.48 + 0.53 + 0.50) / 3 = 1.51 / 3 = 0.50(33) m ≈ 0.50 m',
      },
      {
        label: 'c',
        text: 'The student\'s data is shown below. **Organise** and **present** this data in a table. You should include the answer from part (b) in your table.',
        marks: 5,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Drop height', 'Mean bounce height'],
            rows: [
              ['1.2 m', '0.34 m'],
              ['0.6 m', '0.17 m'],
              ['1.8 m', '(from part b)'],
              ['2.4 m', '0.67 m'],
              ['1.5 m', '0.42 m'],
            ],
          },
          caption: 'Raw (unordered) mean bounce-height data to be organised into a table.',
        },
        ph: 'Table with:\nColumn 1 header: Drop height / m (or metres)\nColumn 2 header: Bounce height / m (or metres)\nData in ascending or descending order of drop height\nAll values to consistent decimal places\nInclude 0.50 m from part (b) at 1.8 m drop height',
      },
      {
        label: 'd',
        text: 'The mean data from the experiment is shown below. **State** the labels for the x and y axes and plot your calculated data point from part (b).',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'plot',
            xAxis: { label: 'drop height / m', min: 0, max: 2.5, tick: 0.5 },
            yAxis: { label: 'bounce height / m', min: 0, max: 0.8, tick: 0.1 },
            dataTable: [
              { x: 0.6, y: 0.17 }, { x: 1.2, y: 0.34 }, { x: 1.5, y: 0.42 }, { x: 2.4, y: 0.67 },
            ],
            plotMissing: [1.8, 0.50],
          },
          caption: 'Plot the part (b) data point (1.8, 0.50) and label the axes.',
        },
        ph: 'X axis: Drop height / m\nY axis: Bounce height / m\nPlot point at (1.8, 0.50) — ECF from part (b)',
      },
    ],
    tags: { unit: 'forces-interactions', topics: ['data processing', 'table', 'graph', 'mean calculation', 'evaluation of method'], level: 'developing' },
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Superball bounce vs temperature: design (17 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Superball — Investigation Design',
    marks: 17,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    stem: 'A "superball" is a small, very bouncy ball made from a special synthetic rubber. Children notice that a superball bounces higher on a hot summer day than on a cold winter day.\n\nIn this question you will design an investigation to determine how the temperature of the ball affects its bounce height. You will place the ball into a water bath, as shown in the diagram, and slowly increase the temperature of the water bath, determining how the ball\'s bounce is affected by the temperature.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wb6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="520" height="280" fill="#ffffff"/><rect x="120" y="90" width="180" height="140" rx="6" fill="url(#wb6)" stroke="#3f7e98" stroke-width="3"/><text x="210" y="252" font-size="11" text-anchor="middle" fill="#2c5468">water bath</text><circle cx="210" cy="170" r="20" fill="#e8772e" stroke="#a8531a"/><text x="210" y="174" font-size="9" fill="#fff" text-anchor="middle">ball</text><rect x="150" y="70" width="14" height="150" rx="6" fill="#f7fafc" stroke="#5b6b78"/><circle cx="157" cy="214" r="10" fill="#c0392b"/><rect x="153" y="120" width="8" height="94" fill="#c0392b"/><text x="157" y="60" font-size="10" text-anchor="middle" fill="#5b6b78">thermometer</text><rect x="120" y="230" width="180" height="16" rx="3" fill="#d39a3c" stroke="#9a6f1f"/><g stroke="#f08c00" stroke-width="2"><line x1="150" y1="246" x2="150" y2="258"/><line x1="210" y1="246" x2="210" y2="258"/><line x1="270" y1="246" x2="270" y2="258"/></g><text x="210" y="274" font-size="10" text-anchor="middle" fill="#9a6f1f">electric heater</text><circle cx="400" cy="120" r="20" fill="#e8772e" stroke="#a8531a"/><text x="400" y="100" font-size="10" text-anchor="middle" fill="#5b6b78">drop</text><path d="M400,150 L400,210" stroke="#94a3ad" stroke-width="1" stroke-dasharray="3 3"/><circle cx="400" cy="220" r="14" fill="#e8772e" stroke="#a8531a"/><line x1="440" y1="90" x2="440" y2="234" stroke="#1f2d3a" stroke-width="2"/><text x="455" y="160" font-size="10" fill="#5b6b78">measure bounce</text></svg>',
      },
      caption: 'A superball is warmed in a water bath, then dropped from a fixed height and the bounce height measured.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the variables in this investigation. The independent variable has been completed for you.\n\nIndependent variable: Temperature of the ball\nDependent variable: ___\nControl variables: ___, ___',
        marks: 3,
        ph: 'Dependent variable: bounce height (of the ball)\nControl variable 1: drop height (height from which the ball is dropped)\nControl variable 2: any other relevant variable, e.g. surface type, ball size, ball mass, ball material',
      },
      {
        label: 'b',
        text: '**Design** a method to investigate the effect of changing the ball\'s temperature. In your answer, you should include:\n- a hypothesis that your method will test\n- how you will manipulate the variables\n- how you will collect sufficient data\n- a justification of why your data is sufficient\n- safety considerations',
        marks: 14,
        ph: 'Hypothesis: As the temperature of the ball increases, the bounce height will increase, because higher temperature gives the rubber more elastic energy and reduces energy loss.\n\nManipulation: Heat the water bath to specific temperatures (e.g. 20°C, 30°C, 40°C, 50°C, 60°C) using an electric heater. Place the superball in the water bath for 2 minutes at each temperature before testing.\n\nData collection: Drop the ball from a fixed height (e.g. 1.5 m) onto a fixed surface. Record the bounce height. Take 3 repetitions at each temperature.\n\nJustification: 5+ temperatures gives a sufficient range; 3 repeats allows a mean to be calculated to reduce random error.\n\nSafety: Use a thermometer to monitor the water temperature (risk of scalding); use tongs to handle the ball in hot water; wear goggles.',
      },
    ],
    tags: { unit: 'thermal-physics', topics: ['temperature', 'experiment design', 'variables', 'method', 'hypothesis', 'safety'], level: 'developing' },
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Climate change & air travel (13 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Climate Change — Aviation and Global Temperature',
    marks: 13,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    stem: 'This question is about how individual lifestyle choices can have a global impact.\n\nThe climate has been changing significantly over the past 100 years. Scientific evidence shows that significant climate change is caused by changes in the atmosphere as a consequence of human activity. Individual travel choices — including how often people fly — can have an impact on a global scale.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the source of renewable energy from the following list.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Coal', 'Uranium', 'Solar', 'Natural gas'],
        ph: 'Select the renewable energy source.',
      },
      {
        label: 'b',
        text: 'Scientists have measured or calculated both the amount of carbon dioxide in the atmosphere over the last thousand years and the average global temperature. **Outline** how the graph supports this statement.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            xLabel: 'Year',
            yLabel: 'Relative level',
            title: 'Atmospheric CO₂ and global temperature (1000–2000)',
            dataPoints: [
              { x: 1000, y: 0.10 }, { x: 1200, y: 0.11 }, { x: 1400, y: 0.10 }, { x: 1600, y: 0.12 }, { x: 1800, y: 0.18 }, { x: 1900, y: 0.45 }, { x: 2000, y: 0.92 },
            ],
            xMin: 1000, xMax: 2000, yMin: 0, yMax: 1.0, xStep: 200, yStep: 0.2,
          },
          caption: 'Both atmospheric CO₂ and average global temperature rise sharply after about 1800 (relative scale).',
        },
        ph: 'Both global temperature AND the amount of CO₂ increase together (positive correlation). As CO₂ levels rise (especially after 1800), global temperature also rises. The graph shows both variables increasing from around 1900 onwards.',
      },
      {
        label: 'c',
        text: '**Suggest** a cause for the increase in CO₂ after 1800, as seen in the graph.',
        marks: 2,
        ph: 'Increased use of fossil fuels (coal, oil, gas) due to industrialization. The Industrial Revolution began around 1800, leading to increased burning of fossil fuels which releases CO₂.',
      },
      {
        label: 'd',
        text: '**State** two possible consequences of increasing global temperature and **outline** the impact of each.',
        marks: 4,
        ph: 'Consequence 1: Rising sea levels (as polar ice sheets melt) → impact: coastal flooding, loss of land, displacement of populations.\nConsequence 2: Changing weather patterns / more extreme weather → impact: drought, reduced plant growth, reduced food production, loss of biodiversity.',
      },
      {
        label: 'e',
        text: '**Suggest** one type of technology that scientists are developing to slow down the trend identified in part (b). **Outline** how the technology reduces CO₂ production and a strength and a limitation of its use.',
        marks: 4,
        ph: 'Technology: e.g. electric or hydrogen aircraft / sustainable aviation fuel / carbon capture / solar panels / wind turbines\nHow it reduces CO₂: e.g. electric aircraft do not burn jet fuel so no CO₂ is directly produced\nStrength: e.g. no fossil fuels are burned in flight / existing airports can be used\nLimitation: e.g. high cost, batteries are heavy and limit range, electricity may still come from fossil fuels',
      },
    ],
    tags: { unit: 'em-spectrum', topics: ['climate change', 'CO₂', 'global temperature', 'renewable energy', 'greenhouse effect'], level: 'developing' },
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Transport choices: extended evaluation (11 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Transport Choices — Extended Evaluation',
    marks: 11,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    stem: 'Noah is a student at a school in a city with a range of transport options. He lives 6 km away from his school. These are the options for his journey to school: walking, cycling, taking the bus, or being driven by car.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><line x1="20" y1="150" x2="540" y2="150" stroke="#5b6b78" stroke-width="3"/><g><circle cx="80" cy="120" r="10" fill="#3a7d44"/><rect x="74" y="130" width="12" height="18" rx="3" fill="#3a7d44"/><text x="80" y="178" font-size="11" text-anchor="middle" fill="#26323c">walk</text></g><g><circle cx="190" cy="138" r="12" fill="none" stroke="#0b7285" stroke-width="3"/><circle cx="218" cy="138" r="12" fill="none" stroke="#0b7285" stroke-width="3"/><line x1="190" y1="138" x2="210" y2="120" stroke="#0b7285" stroke-width="2"/><text x="204" y="178" font-size="11" text-anchor="middle" fill="#26323c">cycle</text></g><g><rect x="300" y="110" width="80" height="38" rx="5" fill="#f08c00" stroke="#9a5b00"/><circle cx="318" cy="150" r="8" fill="#2c3e50"/><circle cx="362" cy="150" r="8" fill="#2c3e50"/><text x="340" y="178" font-size="11" text-anchor="middle" fill="#26323c">bus</text></g><g><rect x="450" y="120" width="64" height="26" rx="8" fill="#c0392b" stroke="#7a2417"/><circle cx="466" cy="148" r="8" fill="#2c3e50"/><circle cx="498" cy="148" r="8" fill="#2c3e50"/><text x="482" y="178" font-size="11" text-anchor="middle" fill="#26323c">car</text></g><text x="280" y="40" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Noah\'s journey: 6 km to school</text></svg>',
      },
      caption: 'Noah can walk, cycle, take the bus, or be driven by car the 6 km to school.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the information provided and your wider MYP studies to **discuss** and **evaluate** two methods of transport from the list above and recommend a method of travel for Noah. In your answer, you should include:\n- positive and negative health and well-being impacts of your two chosen methods\n- positive and negative economic or social impacts of your two chosen methods\n- a comparison of the impacts of your two chosen methods\n- a final recommendation',
        marks: 11,
        ph: 'Choose two methods (e.g. cycling and bus).\n\nHealth/well-being:\n+ Cycling: exercise, fitness improvement\n− Cycling: exposure to pollution, risk of accident\n+ Bus: shelter from weather\n− Bus: sedentary, exposure to other people\'s illness\n\nEconomic/social:\n+ Cycling: low cost, reduces traffic, environmental benefit\n− Cycling: requires equipment, weather dependent\n+ Bus: affordable, reduced car use\n− Bus: ticket cost, delays, overcrowding\n\nComparison: Cycling provides health benefits but has safety risks; the bus is safer but more sedentary.\n\nRecommendation: Cycling is recommended for Noah as it provides exercise AND transport at low cost, with appropriate safety precautions.',
      },
    ],
    tags: { unit: 'forces-interactions', topics: ['transport', 'health', 'economics', 'evaluation', 'lifestyle choices'], level: 'developing' },
  },
]
