import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2024  (real on-screen exam, context unchanged)
// Every copyrighted screenshot figure has been replaced by an ORIGINAL
// data-driven artefact, and every question now carries a context artefact in
// its q.artefact (stimulus) slot. Zero external image-file references remain.
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2024',
  subject: 'Physics',
  session: 'November',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ── Q1: Pendulum & Wrecking Ball (12 marks, Crit A) ──────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Pendulum & Energy',
    marks: 12,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['gravitational potential energy', 'kinetic energy', 'conservation of energy'], level: 'proficient' },
    stem: 'A pendulum is a mass on a string that swings back and forth. It is an example of periodic motion.',
    artefact: {
      component: 'OscillatorSim',
      data: {
        title: 'Laboratory pendulum',
        type: 'pendulum',
        g: 9.82,
        lengthSlider: { min: 0.3, max: 1.2, step: 0.01, unit: 'm' },
        periodFormula: 'T = 2π√(L/g)',
      },
      caption: 'A simple pendulum oscillating back and forth — drag the length slider to see how the period T changes (L = 0.72 m in this experiment).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Regular, repeating movement can be described as **periodic motion**.\n\n**Select** the image that does **not** show periodic movement.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="200" fill="#ffffff"/><defs><radialGradient id="q1sun" cx="0.5" cy="0.5"><stop offset="0" stop-color="#ffd36b"/><stop offset="1" stop-color="#e8772e"/></radialGradient></defs><g><rect x="14" y="20" width="140" height="140" rx="8" fill="#0d1b2a"/><circle cx="84" cy="90" r="42" fill="none" stroke="#5b76d6" stroke-width="1.5" stroke-dasharray="3 3"/><circle cx="84" cy="90" r="14" fill="url(#q1sun)"/><text x="84" y="56" font-size="9" fill="#ffd36b" text-anchor="middle">Sun</text><circle cx="126" cy="90" r="6" fill="#4d96d6"/><text x="84" y="178" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">A</text></g><g><rect x="170" y="20" width="140" height="140" rx="8" fill="#0d1b2a"/><circle cx="240" cy="90" r="48" fill="#f4f6fb" stroke="#c2c8d0" stroke-width="2"/><line x1="240" y1="90" x2="240" y2="58" stroke="#1f2d3a" stroke-width="2.5"/><line x1="240" y1="90" x2="266" y2="100" stroke="#1f2d3a" stroke-width="2"/><circle cx="240" cy="90" r="3" fill="#1f2d3a"/><text x="240" y="178" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">B</text></g><g><rect x="326" y="20" width="140" height="140" rx="8" fill="#0d1b2a"/><line x1="340" y1="150" x2="452" y2="150" stroke="#3a5a78" stroke-width="2"/><path d="M356,150 Q360,108 372,104" fill="none" stroke="#6b7d8c" stroke-width="2"/><circle cx="356" cy="150" r="7" fill="#2c3e50"/><path d="M372,104 q-8,-30 14,-46 q22,-16 40,4" fill="none" stroke="#e8772e" stroke-width="2.5" stroke-dasharray="5 4"/><circle cx="426" cy="62" r="9" fill="#e8772e"/><rect x="430" y="40" width="22" height="34" rx="2" fill="none" stroke="#d0843a" stroke-width="2"/><text x="396" y="178" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">C</text></g><g><rect x="482" y="20" width="144" height="140" rx="8" fill="#0d1b2a"/><line x1="520" y1="36" x2="588" y2="36" stroke="#7a5a3a" stroke-width="4"/><line x1="520" y1="36" x2="520" y2="150" stroke="#9a7a4a" stroke-width="3"/><line x1="588" y1="36" x2="588" y2="150" stroke="#9a7a4a" stroke-width="3"/><line x1="536" y1="38" x2="552" y2="110" stroke="#cfcfcf" stroke-width="1.5"/><line x1="572" y1="38" x2="556" y2="110" stroke="#cfcfcf" stroke-width="1.5"/><rect x="544" y="110" width="24" height="6" rx="2" fill="#caa15a"/><circle cx="556" cy="100" r="8" fill="#f1c27d"/><path d="M540,118 a16,16 0 0 0 -16,18" fill="none" stroke="#5b76d6" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M572,118 a16,16 0 0 1 16,18" fill="none" stroke="#5b76d6" stroke-width="1.5" stroke-dasharray="4 3"/><text x="554" y="178" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">D</text></g></svg>',
          },
          caption: 'A: a planet orbiting the Sun · B: the hands of a clock · C: a basketball thrown toward a hoop · D: a child swinging on a swing.',
        },
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'b',
        text: '**Select** the option that describes the kinetic energy, potential energy and speed of the pendulum at positions A (top left), B (bottom) and C (top right).',
        marks: 2,
        ph: 'Describe each position:\nPosition A: KE = ___ (min/max), PE = ___ (min/max), Speed = ___ (min/max)\nPosition B: KE = ___, PE = ___, Speed = ___\nPosition C: KE = ___, PE = ___, Speed = ___',
      },
      {
        label: 'c',
        text: 'A pendulum can be used to determine the acceleration due to gravity, g.\n\nThe period T of a pendulum is the time taken to complete one swing. T depends on the length of the pendulum L and g. It is given by the relationship: T² = 4π²L / g\n\nA pendulum used in a laboratory in Canada has a length of 72.0 cm. The time taken for 10 periods is measured to be 17.1 s.\n\n**Calculate** the acceleration due to gravity g in m s⁻² in this laboratory, giving your answer to three significant figures.',
        marks: 3,
        ph: 'Show your working:\nStep 1 — find T: T = 17.1 / 10 = ... s\nStep 2 — rearrange: g = 4π²L / T²\nStep 3 — substitute: g = 4 × π² × 0.720 / (...)²\ng = ... m s⁻² (3 s.f.)',
      },
      {
        label: 'd',
        text: 'The expected value of acceleration due to gravity at this location is 9.82 m s⁻².\n\n**Suggest** why the experimental value in part (c) is different.',
        marks: 1,
        ph: 'Suggest one reason (e.g. measurement uncertainty in T or L, environmental factor, location above sea level)...',
      },
      {
        label: 'e',
        text: 'A wrecking ball is an example of a pendulum that can be used to demolish buildings. It is a very heavy steel ball hanging from a crane, which is released and swung to hit the structure. Mass of steel ball = 2000 kg.\n\nInitially, the ball is stationary. The crane operator releases the ball from a height of 12.5 m. The ball hits the building at 4.5 m above the ground.\n\n**Calculate** the kinetic energy of the ball when it hits the building at 4.5 m above the ground. You should assume that the acceleration due to gravity g = 9.81 m s⁻². Give your result in kJ rounded to two significant figures.',
        marks: 4,
        artefact: {
          component: 'DemolitionCraneDiagram',
          caption: 'The 2000 kg wrecking ball is released from position A (12.5 m above the ground) and strikes the building at position B (4.5 m above the ground). Diagram not to scale.',
        },
        ph: 'Show your working:\nHeight change: Δh = 12.5 − 4.5 = ... m\nUsing conservation of energy: KE = mgh\nKE = 2000 × 9.81 × ...\nKE = ... J = ... kJ (2 s.f.)',
      },
      {
        label: 'f',
        text: '**Suggest** why the real-world kinetic energy of the wrecking ball would be lower than the calculated value.',
        marks: 1,
        ph: 'Suggest one reason relating to energy transfer (e.g. friction, air resistance, heat, sound)...',
      },
    ],
  },

  // ── Q2: Smoke Detectors & Radioactivity (12 marks, Crit A) ───────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity',
    marks: 12,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['alpha radiation', 'radioactive decay', 'half-life'], level: 'proficient' },
    stem: 'Smoke detectors are devices that sound an alarm when smoke enters them. The sound of the alarm warns people to take action in the event of a fire. Some smoke detectors use the properties of radiation to detect smoke.',
    artefact: {
      component: 'SmokeAlarm',
      caption: 'A ceiling-mounted smoke alarm. Rising smoke enters the vents around the detector and triggers the alarm.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** why smoke detectors are installed on the ceiling in a house instead of on the walls or floor.',
        marks: 2,
        ph: 'Explain what smoke does (relative to air density) and why this means the ceiling is the best location...\n•\n•',
      },
      {
        label: 'b',
        text: 'Some smoke detectors use a small amount of a radioactive isotope, americium-241. Americium-241 emits alpha particles.\n\n**State** two properties of alpha particles.',
        marks: 2,
        ph: 'Property 1: ...\nProperty 2: ...',
      },
      {
        label: 'c',
        text: '**Select** the equation that represents the radioactive decay of americium-241 in a smoke detector.\n\n• **A:** ²⁴¹₉₅Am → ²³⁷₉₃Np + ⁴₂α\n• **B:** ²³⁷₉₃Np + ⁴₂α → ²⁴¹₉₅Am\n• **C:** ²⁴¹₉₅Am → ²³⁷₉₃Np + ⁰₀γ\n• **D:** ²⁴¹₉₅Am → ²³⁷₉₃Am + ⁰₋₁β',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'd',
        text: 'Americium-241 is an isotope of americium. **Select** which of the following is **not** an isotope of americium-241. Use scientific terminology to **justify** your answer.\n\n• **A:** ²³⁹₉₅Am\n• **B:** ²⁴⁰₉₃Am\n• **C:** ²⁴³₉₅Am\n• **D:** ²⁴¹₉₅Br',
        marks: 2,
        ph: 'My answer is option ___.\nJustification: Isotopes of the same element must have the same ___ number (protons). Option ___ has a proton number of ___, which is different from americium\'s proton number of 95.',
      },
      {
        label: 'e',
        text: '**Determine** the half-life of americium-241 in years using the graph shown.',
        marks: 1,
        artefact: {
          component: 'DecaySim',
          data: {
            title: 'Decay of americium-241',
            isotope: 'Am-241',
            daughter: 'Np-237',
            decayMode: 'alpha',
            halfLife: 432,
            units: 'years',
            initialCount: 10000,
            axisMax: 2000,
            xAxis: 'Time / years',
            yAxis: 'Number of americium-241 nuclei',
          },
          caption: 'Number of americium-241 nuclei remaining against time. Drag the time marker to find when 5 000 nuclei (half of the original 10 000) remain.',
        },
        ph: 'Starting nuclei = 10 000. Half = 5 000.\nRead the time on the x-axis where the curve crosses 5 000 nuclei.\nHalf-life ≈ ___ years',
      },
      {
        label: 'f',
        text: 'Use your answer to part (e) to **calculate** the time taken for 625 nuclei to remain in this sample, which started with 10 000 nuclei.',
        marks: 1,
        ph: '10 000 → 5 000 (1 half-life)\n5 000 → 2 500 (2)\n2 500 → 1 250 (3)\n1 250 → 625 (4 half-lives)\nTime = 4 × ___ = ___ years',
      },
      {
        label: 'g',
        text: '**Explain** why this kind of smoke detector would not function correctly with a radioactive isotope that emits beta or gamma radiation.',
        marks: 3,
        ph: 'Explain the normal mechanism:\n• Alpha particles ionize air molecules between two plates → creates a current → alarm silent\n\nNow explain why beta/gamma fails:\n• Beta/gamma have ___ ionizing power than alpha...\n• Effect on the current in the chamber...\n• Therefore the alarm would...',
      },
    ],
  },

  // ── Q3: Resistance Investigation (17 marks, Crit B/C) ────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Electrical Resistance',
    marks: 17,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['resistance', "Ohm's law", 'series circuits'], level: 'proficient' },
    stem: 'A resistor is an electrical component that limits the flow of current in a circuit and converts electrical energy to heat. Resistance can be measured using an ohmmeter.\n\nA student is interested in studying resistance. They decide to model resistors using cylinders of conducting material. Their research question is:\n\n"What is the relationship between the diameter of a cylinder and its resistance?"',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="q3cyl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d98b3a"/><stop offset="0.5" stop-color="#b86a1f"/><stop offset="1" stop-color="#8f4f14"/></linearGradient></defs><rect width="560" height="200" fill="#ffffff"/><text x="280" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Modelling a resistor as a conducting cylinder</text><ellipse cx="140" cy="110" rx="14" ry="40" fill="#9a5418"/><rect x="140" y="70" width="240" height="80" fill="url(#q3cyl)"/><ellipse cx="380" cy="110" rx="14" ry="40" fill="#c47b2c" stroke="#8f4f14"/><line x1="126" y1="110" x2="70" y2="110" stroke="#444" stroke-width="2.5"/><line x1="394" y1="110" x2="450" y2="110" stroke="#444" stroke-width="2.5"/><circle cx="60" cy="110" r="8" fill="none" stroke="#444" stroke-width="2.5"/><circle cx="460" cy="110" r="8" fill="none" stroke="#444" stroke-width="2.5"/><line x1="140" y1="62" x2="380" y2="62" stroke="#0b7285" stroke-width="1"/><text x="260" y="55" font-size="11" text-anchor="middle" fill="#0b7285">length (kept constant)</text><line x1="406" y1="70" x2="406" y2="150" stroke="#c0392b" stroke-width="1"/><text x="430" y="114" font-size="11" fill="#c0392b">diameter</text><text x="60" y="138" font-size="10" text-anchor="middle" fill="#444">to ohmmeter</text></svg>',
      },
      caption: 'The student models a resistor as a cylinder of conducting material and measures its resistance with an ohmmeter while varying the diameter.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a hypothesis to test this research question.',
        marks: 2,
        ph: 'If the diameter of the cylinder increases, then the resistance will ___ because...\n\n(Include a scientific reason linking diameter to the number of paths available for electrons)',
      },
      {
        label: 'b',
        text: '**Select** the cylinders the student should use to collect appropriate data by choosing from the available cylinders shown.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="matA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0a85a"/><stop offset="1" stop-color="#c97a2a"/></linearGradient><linearGradient id="matB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6e9ec"/><stop offset="1" stop-color="#a9b0b7"/></linearGradient><linearGradient id="matC" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a4a4a"/><stop offset="1" stop-color="#1c1c1c"/></linearGradient></defs><rect width="640" height="320" fill="#efe9d6"/><text x="20" y="26" font-size="13" font-weight="700" fill="#1f2d3a">Available cylinders</text><g><rect x="40" y="50" width="150" height="10" rx="5" fill="url(#matA)"/><rect x="40" y="74" width="150" height="18" rx="9" fill="url(#matA)"/><rect x="40" y="106" width="150" height="28" rx="14" fill="url(#matA)"/><rect x="40" y="150" width="150" height="40" rx="20" fill="url(#matA)"/><rect x="40" y="206" width="150" height="52" rx="26" fill="url(#matA)"/></g><g><rect x="245" y="50" width="150" height="14" rx="7" fill="url(#matB)" stroke="#9aa1a8"/><rect x="245" y="80" width="150" height="26" rx="13" fill="url(#matB)" stroke="#9aa1a8"/><rect x="245" y="124" width="150" height="40" rx="20" fill="url(#matB)" stroke="#9aa1a8"/><rect x="245" y="182" width="150" height="56" rx="28" fill="url(#matB)" stroke="#9aa1a8"/></g><g><rect x="450" y="50" width="150" height="12" rx="6" fill="url(#matC)"/><rect x="450" y="80" width="150" height="22" rx="11" fill="url(#matC)"/><rect x="450" y="120" width="150" height="34" rx="17" fill="url(#matC)"/><rect x="450" y="172" width="150" height="48" rx="24" fill="url(#matC)"/><rect x="450" y="238" width="150" height="60" rx="30" fill="url(#matC)"/></g><g font-size="12" font-weight="700"><rect x="40" y="284" width="60" height="20" rx="4" fill="url(#matA)"/><text x="108" y="299" fill="#1f2d3a">Material A</text><rect x="245" y="284" width="60" height="20" rx="4" fill="url(#matB)" stroke="#9aa1a8"/><text x="313" y="299" fill="#1f2d3a">Material B</text><rect x="450" y="284" width="60" height="20" rx="4" fill="url(#matC)"/><text x="518" y="299" fill="#1f2d3a">Material C</text></g></svg>',
          },
          caption: 'Cylinders made of three different materials (A, B, C), each available in a range of diameters. To test the research question the student should pick cylinders of one material only, at several different diameters, keeping length constant.',
        },
        ph: 'I would select:\n• Material: only Material ___ (one material only)\n• Number of cylinders: ___ cylinders with ___ different diameters\n• Reason: to keep material and length constant while only varying diameter',
      },
      {
        label: 'c',
        text: '**Justify** your selection of cylinders in part (b).',
        marks: 2,
        ph: 'Justify by explaining:\n1. Why only one material must be selected...\n2. Why cylinders with different diameters are needed (to test the RQ)...\n3. What variables are being controlled and why...',
      },
      {
        label: 'd',
        text: 'Having carried out one trial for each cylinder, the student records their data as shown in the notebook below.\n\n**Organize** and **present** the data in a table with appropriate headings and units.',
        marks: 4,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Cylinder', 'Raw notebook entry'],
            rows: [
              ['1', '27 mm diameter, 12 Ω resistance'],
              ['2', '12 millimetres, 56.2 ohms'],
              ['3', '17 mm, 27 Ω'],
              ['4', '20 millimetres, 20 Ω'],
              ['5', '23 mm diameter and 16 Ω resistance'],
            ],
          },
          caption: 'The student\'s raw notebook entries — units and order are inconsistent. Reorganise these into a clear table with a column for diameter (mm) and a column for resistance (Ω).',
        },
        ph: 'Draw a table:\n| Diameter / mm | Resistance / Ω |\n|---------------|----------------|\n| 12            | 56.2           |\n| 17            | 27             |\n| 20            | 20             |\n| 23            | 16             |\n| 27            | 12             |',
      },
      {
        label: 'e',
        text: 'The student\'s lab partner wants to carry out more trials. **Suggest** how this would improve the investigation.',
        marks: 2,
        ph: 'More trials would:\n• Allow a ___ to be calculated for each diameter\n• Reduce the effect of ___ errors\n• Increase the ___ of the results',
      },
      {
        label: 'f',
        text: 'The student draws four graphs using the data from part (d). **Select** the most appropriate trend line to show the relationship between diameter and resistance.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="360" fill="#ffffff"/><!-- panel A: straight line of best fit --><g transform="translate(20,20)"><text x="140" y="14" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">A</text><rect x="34" y="24" width="240" height="120" fill="#fafbfc" stroke="#cbd2d8"/><line x1="34" y1="144" x2="274" y2="144" stroke="#333" stroke-width="1.2"/><line x1="34" y1="24" x2="34" y2="144" stroke="#333" stroke-width="1.2"/><g fill="#0b7285"><circle cx="64" cy="40" r="3"/><circle cx="104" cy="92" r="3"/><circle cx="124" cy="104" r="3"/><circle cx="148" cy="114" r="3"/><circle cx="188" cy="124" r="3"/></g><line x1="56" y1="44" x2="200" y2="126" stroke="#c0392b" stroke-width="1.8"/><text x="154" y="160" font-size="9" text-anchor="middle" fill="#555">Diameter / mm</text></g><!-- panel B: smooth decreasing curve (correct) --><g transform="translate(330,20)"><text x="140" y="14" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">B</text><rect x="34" y="24" width="240" height="120" fill="#fafbfc" stroke="#cbd2d8"/><line x1="34" y1="144" x2="274" y2="144" stroke="#333" stroke-width="1.2"/><line x1="34" y1="24" x2="34" y2="144" stroke="#333" stroke-width="1.2"/><g fill="#0b7285"><circle cx="64" cy="40" r="3"/><circle cx="104" cy="92" r="3"/><circle cx="124" cy="104" r="3"/><circle cx="148" cy="114" r="3"/><circle cx="188" cy="124" r="3"/></g><path d="M56,36 Q90,96 124,110 Q170,128 220,132" fill="none" stroke="#c0392b" stroke-width="1.8"/><text x="154" y="160" font-size="9" text-anchor="middle" fill="#555">Diameter / mm</text></g><!-- panel C: straight increasing line (wrong) --><g transform="translate(20,190)"><text x="140" y="14" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">C</text><rect x="34" y="24" width="240" height="120" fill="#fafbfc" stroke="#cbd2d8"/><line x1="34" y1="144" x2="274" y2="144" stroke="#333" stroke-width="1.2"/><line x1="34" y1="24" x2="34" y2="144" stroke="#333" stroke-width="1.2"/><g fill="#0b7285"><circle cx="64" cy="40" r="3"/><circle cx="104" cy="92" r="3"/><circle cx="124" cy="104" r="3"/><circle cx="148" cy="114" r="3"/><circle cx="188" cy="124" r="3"/></g><line x1="56" y1="128" x2="200" y2="40" stroke="#c0392b" stroke-width="1.8"/><text x="154" y="160" font-size="9" text-anchor="middle" fill="#555">Diameter / mm</text></g><!-- panel D: curve bending upward (wrong) --><g transform="translate(330,190)"><text x="140" y="14" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">D</text><rect x="34" y="24" width="240" height="120" fill="#fafbfc" stroke="#cbd2d8"/><line x1="34" y1="144" x2="274" y2="144" stroke="#333" stroke-width="1.2"/><line x1="34" y1="24" x2="34" y2="144" stroke="#333" stroke-width="1.2"/><g fill="#0b7285"><circle cx="64" cy="40" r="3"/><circle cx="104" cy="92" r="3"/><circle cx="124" cy="104" r="3"/><circle cx="148" cy="114" r="3"/><circle cx="188" cy="124" r="3"/></g><path d="M56,128 Q150,120 200,40" fill="none" stroke="#c0392b" stroke-width="1.8"/><text x="154" y="160" font-size="9" text-anchor="middle" fill="#555">Diameter / mm</text></g></svg>',
          },
          caption: 'Four candidate trend lines (red) drawn over the same resistance-versus-diameter data points (teal). Axes: Resistance / Ω (vertical) against Diameter / mm (horizontal).',
        },
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'g',
        text: 'The student wishes to extend the investigation using the same materials and equipment available in parts (a) and (b). The dependent variable will be resistance.\n\n**State** an appropriate research question, independent variable, and one control variable for this extension.',
        marks: 3,
        ph: 'Research question: How does ___ affect the resistance of the cylinder?\nIndependent variable: ___\nControl variable: ___ (kept constant because...)',
      },
    ],
  },

  // ── Q4: LDR Investigation Design (14 marks, Crit B) ──────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Light Dependent Resistor',
    marks: 14,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['resistance', 'parallel circuits', 'measuring current and voltage'], level: 'proficient' },
    stem: 'The resistance of a light-dependent resistor (LDR) depends on the intensity of light shining on its upper, light-sensitive surface. A student predicts:\n\n"If the distance between a light source and an LDR increases, then the resistance of the LDR will also increase."',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="q4lamp" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="600" height="280" fill="#ffffff"/><line x1="30" y1="230" x2="570" y2="230" stroke="#5b6b78" stroke-width="3"/><!-- lamp --><rect x="70" y="150" width="14" height="70" fill="#7a8794"/><path d="M50,150 L104,150 L92,110 L62,110 Z" fill="#3a6ea5" stroke="#26486e"/><circle cx="77" cy="142" r="9" fill="url(#q4lamp)"/><g stroke="#f0c419" stroke-width="2" opacity="0.8"><line x1="104" y1="138" x2="250" y2="150"/><line x1="104" y1="146" x2="250" y2="160"/><line x1="104" y1="154" x2="250" y2="170"/></g><text x="77" y="244" font-size="11" text-anchor="middle" fill="#26486e">Lamp</text><!-- LDR --><ellipse cx="270" cy="200" rx="22" ry="11" fill="#d9b38c" stroke="#9a7048"/><path d="M258,196 q12,-8 24,0 M258,202 q12,-8 24,0" fill="none" stroke="#7a5a36" stroke-width="1"/><text x="270" y="232" font-size="11" text-anchor="middle" fill="#7a5a36">LDR</text><!-- distance dimension --><line x1="84" y1="262" x2="270" y2="262" stroke="#0b7285" stroke-width="1"/><line x1="84" y1="256" x2="84" y2="268" stroke="#0b7285"/><line x1="270" y1="256" x2="270" y2="268" stroke="#0b7285"/><text x="177" y="276" font-size="11" text-anchor="middle" fill="#0b7285">distance d (varied)</text><!-- leads to ohmmeter --><line x1="288" y1="204" x2="430" y2="204" stroke="#c0392b" stroke-width="2"/><line x1="288" y1="210" x2="430" y2="216" stroke="#1f2d3a" stroke-width="2"/><!-- ohmmeter --><rect x="430" y="150" width="120" height="90" rx="8" fill="#5b6b78" stroke="#3a4651"/><rect x="446" y="166" width="88" height="34" rx="3" fill="#0d1b2a"/><text x="490" y="189" font-size="15" fill="#3ad36a" text-anchor="middle" font-family="monospace">400 Ω</text><text x="490" y="224" font-size="16" font-weight="700" fill="#fff" text-anchor="middle">Ω</text><text x="490" y="256" font-size="11" text-anchor="middle" fill="#3a4651">Ohmmeter</text></svg>',
      },
      caption: 'The apparatus: a lamp shines on the light-sensitive surface of an LDR a distance d away; an ohmmeter connected across the LDR reads its resistance.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'How does the ___ between the light source and the LDR affect the ___ of the LDR?',
      },
      {
        label: 'b',
        text: 'The student uses a lamp as a light source and an ohmmeter to measure the resistance.\n\n**Design** an investigation the student could use to test their prediction. In your answer, you should include:\n\n• the independent variable and dependent variable\n• two control variables and a justification of why they should be controlled\n• a list of equipment\n• a detailed method for how you will collect data\n• an explanation of how you will collect sufficient data.',
        marks: 13,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="q4blamp" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="600" height="220" fill="#ffffff"/><line x1="40" y1="160" x2="560" y2="160" stroke="#5b6b78" stroke-width="3"/><line x1="40" y1="174" x2="560" y2="174" stroke="#94a3ad" stroke-width="1"/><g font-size="9" fill="#94a3ad" text-anchor="middle"><text x="60" y="190">0</text><text x="185" y="190">20</text><text x="310" y="190">40</text><text x="435" y="190">60</text><text x="555" y="190">80 cm</text></g><line x1="185" y1="168" x2="185" y2="180" stroke="#94a3ad"/><line x1="310" y1="168" x2="310" y2="180" stroke="#94a3ad"/><line x1="435" y1="168" x2="435" y2="180" stroke="#94a3ad"/><path d="M48,160 L72,160 L66,128 L54,128 Z" fill="#3a6ea5" stroke="#26486e"/><circle cx="60" cy="150" r="8" fill="url(#q4blamp)"/><g stroke="#f0c419" stroke-width="2" opacity="0.7"><line x1="70" y1="148" x2="290" y2="152"/></g><text x="60" y="118" font-size="10" text-anchor="middle" fill="#26486e">lamp (fixed)</text><ellipse cx="300" cy="156" rx="18" ry="9" fill="#d9b38c" stroke="#9a7048"/><text x="300" y="138" font-size="10" text-anchor="middle" fill="#7a5a36">LDR (moved along ruler)</text><line x1="318" y1="158" x2="430" y2="158" stroke="#c0392b" stroke-width="1.5"/><rect x="430" y="128" width="90" height="60" rx="6" fill="#5b6b78" stroke="#3a4651"/><rect x="440" y="138" width="70" height="24" rx="2" fill="#0d1b2a"/><text x="475" y="155" font-size="11" fill="#3ad36a" text-anchor="middle" font-family="monospace">Ω</text><text x="475" y="180" font-size="10" text-anchor="middle" fill="#fff">ohmmeter</text></svg>',
          },
          caption: 'The lamp is fixed at one end of a metre ruler and the LDR is moved to measured distances along it, with the ohmmeter reading the resistance at each distance.',
        },
        ph: 'VARIABLES:\nIndependent variable: distance between lamp and LDR (cm)\nDependent variable: resistance of LDR (Ω, measured by ohmmeter)\nControl variable 1: ___ — because if this changes, it would affect the light intensity...\nControl variable 2: ___ — because...\n\nEQUIPMENT:\n•\n•\n•\n\nMETHOD:\n1. Set up the lamp and LDR on a ruler/track.\n2. Place the LDR at a distance of ___ cm from the lamp.\n3. Record the resistance shown on the ohmmeter.\n4. Move the LDR to the next distance (___ cm) and repeat...\n\nSUFFICIENT DATA:\n• Range of distances: ___ cm to ___ cm\n• Intervals: every ___ cm (___ data points)\n• Repeats: ___ trials per distance (to calculate mean)',
      },
    ],
  },

  // ── Q5: Resistance vs Temperature (19 marks, Crit C) ─────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Resistance & Temperature',
    marks: 19,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['resistance', "Ohm's law", 'measuring current and voltage'], level: 'proficient' },
    stem: 'Another student decides to investigate the effect of varying the temperature of a resistor on its resistance. Instead of using an ohmmeter, this student measures current in order to calculate resistance. The supply voltage is kept constant throughout the investigation. The temperature of each resistor is modified by immersing it in a temperature-controlled bead bath.\n\nThe student\'s research question is: "How does the temperature of a resistor affect the current in a circuit?"',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="280" fill="#ffffff"/><!-- bead bath unit --><rect x="60" y="150" width="180" height="90" rx="8" fill="#e7ecf0" stroke="#aeb8c0"/><rect x="76" y="150" width="148" height="34" rx="4" fill="#cfd8de" stroke="#aeb8c0"/><g><circle cx="92" cy="167" r="3" fill="#9aa6ae"/><circle cx="104" cy="167" r="3" fill="#9aa6ae"/><circle cx="116" cy="167" r="3" fill="#9aa6ae"/><circle cx="100" cy="176" r="3" fill="#9aa6ae"/><circle cx="112" cy="176" r="3" fill="#9aa6ae"/><circle cx="124" cy="171" r="3" fill="#9aa6ae"/><circle cx="136" cy="167" r="3" fill="#9aa6ae"/><circle cx="148" cy="174" r="3" fill="#9aa6ae"/></g><rect x="76" y="196" width="148" height="36" rx="4" fill="#3a6ea5"/><rect x="150" y="204" width="40" height="20" rx="2" fill="#0d1b2a"/><text x="170" y="219" font-size="11" fill="#3ad36a" text-anchor="middle" font-family="monospace">38°C</text><text x="150" y="256" font-size="11" text-anchor="middle" fill="#5b6b78">temperature-controlled bead bath</text><!-- thermometer --><rect x="156" y="70" width="6" height="86" rx="3" fill="#f4f6fb" stroke="#c2c8d0"/><rect x="156" y="120" width="6" height="36" fill="#c0392b"/><circle cx="159" cy="160" r="7" fill="#c0392b"/><!-- resistor immersed --><rect x="186" y="172" width="34" height="14" rx="3" fill="#caa15a" stroke="#8f6f30"/><!-- circuit symbol block --><g transform="translate(330,70)"><rect x="0" y="0" width="230" height="150" rx="8" fill="#fbfcfd" stroke="#cbd2d8"/><text x="115" y="20" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Measuring circuit</text><!-- battery --><line x1="40" y1="50" x2="40" y2="70" stroke="#333" stroke-width="3"/><line x1="34" y1="56" x2="46" y2="56" stroke="#333" stroke-width="1.5"/><text x="22" y="64" font-size="10" fill="#333">V</text><!-- wires --><rect x="40" y="40" width="150" height="80" fill="none" stroke="#333" stroke-width="1.5"/><!-- resistor --><rect x="90" y="34" width="50" height="12" fill="#caa15a" stroke="#333"/><text x="115" y="30" font-size="9" text-anchor="middle" fill="#333">resistor</text><!-- ammeter --><circle cx="190" cy="80" r="14" fill="#eef3f6" stroke="#0b7285" stroke-width="1.5"/><text x="190" y="84" font-size="11" font-weight="700" fill="#0b7285" text-anchor="middle">A</text></g></svg>',
      },
      caption: 'The resistor is immersed in a temperature-controlled bead bath. A constant supply voltage drives a current through it, measured by an ammeter, so the resistance can be calculated at each temperature.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Measure** the temperature of the bead bath shown in the image.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="420" height="320" fill="#ffffff"/><!-- thermometer body --><rect x="70" y="30" width="20" height="230" rx="10" fill="#f4f6fb" stroke="#b8c0c8" stroke-width="2"/><rect x="76" y="120" width="8" height="140" fill="#c0392b"/><circle cx="80" cy="270" r="16" fill="#c0392b" stroke="#9a2d22"/><!-- scale ticks on thermometer --><g stroke="#333" stroke-width="1"><line x1="90" y1="80" x2="104" y2="80"/><line x1="90" y1="170" x2="104" y2="170"/></g><text x="118" y="84" font-size="12" fill="#333">40</text><text x="118" y="174" font-size="12" fill="#333">30</text><!-- magnifier circle --><circle cx="290" cy="150" r="100" fill="#f7f9fb" stroke="#7a8794" stroke-width="3"/><line x1="218" y1="150" x2="180" y2="120" stroke="#7a8794" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="218" y1="150" x2="180" y2="180" stroke="#7a8794" stroke-width="1.5" stroke-dasharray="4 3"/><!-- magnified scale --><rect x="280" y="60" width="18" height="180" fill="#eef1f4"/><!-- mercury column up to 38 --><rect x="284" y="120" width="10" height="120" fill="#c0392b"/><!-- ticks 30..40 --><g stroke="#222" stroke-width="1.5"><line x1="298" y1="84" x2="320" y2="84"/><line x1="298" y1="226" x2="320" y2="226"/></g><g stroke="#222" stroke-width="1"><line x1="298" y1="98.2" x2="312" y2="98.2"/><line x1="298" y1="112.4" x2="312" y2="112.4"/><line x1="298" y1="126.6" x2="312" y2="126.6"/><line x1="298" y1="140.8" x2="312" y2="140.8"/><line x1="298" y1="155" x2="312" y2="155"/><line x1="298" y1="169.2" x2="312" y2="169.2"/><line x1="298" y1="183.4" x2="312" y2="183.4"/><line x1="298" y1="197.6" x2="312" y2="197.6"/><line x1="298" y1="211.8" x2="312" y2="211.8"/></g><text x="328" y="88" font-size="14" font-weight="700" fill="#222">40</text><text x="328" y="230" font-size="14" font-weight="700" fill="#222">30</text></svg>',
          },
          caption: 'The thermometer in the bead bath. The major graduations show 30 °C and 40 °C, with minor graduations every 1 °C. Read the level of the red liquid.',
        },
        ph: 'Read the thermometer carefully between the 30 and 40 graduation marks.\nTemperature = ___ °C',
      },
      {
        label: 'b',
        text: '**Draw** a diagram of the circuit used by the student. You do not need to include a bead bath in your diagram.\n\nDescribe the circuit components and how they are connected.',
        marks: 3,
        ph: 'Circuit description:\n• Battery/power supply\n• Resistor (connected in series)\n• Ammeter (in series, to measure current)\n• Voltmeter (in parallel across the resistor)\n\nDescribe using words or standard symbol names:\nThe battery connects in series with the ammeter and resistor. The voltmeter is connected in parallel (across) the resistor.',
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation by classifying each of the following as Independent (IV), Dependent (DV), or Control (CV):\n\n• Temperature of the resistor\n• Length of the resistor\n• Current in the circuit\n• Diameter of the resistor\n• Voltage across the resistor',
        marks: 3,
        ph: 'Independent variable (what you change): ___\nDependent variable (what you measure): ___\nControl variables (kept constant):\n  • ___\n  • ___\n  • ___',
      },
      {
        label: 'd',
        text: '**Identify** a safety issue that the student should have considered when planning this investigation.',
        marks: 1,
        ph: 'Safety issue: e.g. high temperature beads / electrical hazards / burns from hot equipment...',
      },
      {
        label: 'e',
        text: 'The student predicts: "As the temperature of the resistor increases, the current through the resistor will decrease. I predict that there will be an **inversely proportional** relationship between the variables."\n\nThe graph of their results is shown below.\n\nUse data from the graph and a calculation to **explain** whether the student\'s prediction is supported.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            title: 'Current through the resistor vs temperature',
            xLabel: 'Temperature / °C',
            yLabel: 'Current / mA',
            points: [[18, 461], [35, 378], [50, 359], [65, 341], [80, 297], [100, 284]],
            xRange: [0, 120],
            yRange: [0, 500],
            readouts: [
              { x: 18, note: 'I = 461 mA at 18 °C' },
              { x: 100, note: 'I = 284 mA at 100 °C' },
            ],
            dataMaxX: 100,
          },
          caption: 'Measured current against temperature. Drag the cursor to read values. To test inverse proportionality, check whether I × T is constant across the points.',
        },
        ph: 'To test inverse proportion: check if I × T = constant for all data points.\nFrom the graph:\n• At T = ___ °C, I ≈ ___ mA → product = ___\n• At T = ___ °C, I ≈ ___ mA → product = ___\nAre the products constant? ___\nConclusion: The prediction is (supported / not supported) because...',
      },
      {
        label: 'f',
        text: 'Having measured the current and voltage, additional processing is required to find the relationship between temperature and resistance. The voltage was kept constant at 30 V.\n\nUsing the graph in part (e) and information from the formula sheet, **calculate** the missing resistance value for the data shown.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Temperature / °C', 'Current / mA', 'Resistance R = V / I / Ω'],
            rows: [
              ['18', '461', '65'],
              ['35', '378', '79'],
              ['50', '359', '?'],
              ['65', '341', '88'],
              ['80', '297', '101'],
              ['100', '284', '106'],
            ],
          },
          caption: 'Processed data with R = V / I and V = 30 V (constant). One resistance value is missing — calculate it from the current at 50 °C.',
        },
        ph: 'Read the current at 50 °C from the graph: I ≈ ___ mA = ___ A\nFormula: R = V / I\nR = 30 / ___ = ___ Ω\n(Round to nearest whole number)',
      },
      {
        label: 'g',
        text: 'The graph below shows the processed data (temperature vs resistance). **Plot** the data point you determined in part (f) and **draw** a line of best fit on the graph.\n\nAxes: x-axis = Temperature / °C (0 to 100), y-axis = Resistance / Ω (0 to 120)',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            title: 'Resistance vs temperature (processed data)',
            xLabel: 'Temperature / °C',
            yLabel: 'Resistance / Ω',
            points: [[18, 65], [35, 79], [65, 88], [80, 101], [100, 106]],
            xRange: [0, 100],
            yRange: [0, 120],
            readouts: [{ x: 50, note: 'plot your calculated R at 50 °C here (≈ 84 Ω)' }],
            dataMaxX: 100,
          },
          caption: 'The five processed resistance values (the 50 °C point from part f is missing). Drag the cursor to read off; the line of best fit should pass close to all six points and need not go through the origin.',
        },
        ph: 'Data point to plot: (50 °C, ___ Ω) [your calculated value from part f]\n\nLine of best fit:\n• Draw a straight line that passes close to all 6 data points\n• The line should not be forced through the origin\n• Extend slightly beyond the data range in both directions',
      },
      {
        label: 'h',
        text: 'Using the graph in part (g), **predict** the value of resistance at 0 °C.',
        marks: 1,
        ph: 'Extend the line of best fit back to 0 °C on the temperature axis.\nResistance at 0 °C ≈ ___ Ω',
      },
      {
        label: 'i',
        text: '**Calculate** the gradient of the line of best fit drawn in part (g). You should include your working and the unit in your answer.',
        marks: 2,
        ph: 'Choose two well-separated points on the LINE OF BEST FIT (not data points):\nPoint 1: (___ °C, ___ Ω)\nPoint 2: (___ °C, ___ Ω)\nGradient = ΔR / ΔT = (___ − ___) / (___ − ___)\n= ___ Ω °C⁻¹',
      },
      {
        label: 'j',
        text: 'The student calculated that the resistance would be 500 Ω when the temperature was 1000 °C.\n\n**Comment** on the validity of this calculation.',
        marks: 2,
        ph: 'Comment on two issues:\n1. Extrapolation: This temperature is far beyond the data range (data only goes to ___ °C). The linear relationship may not continue...\n2. Physical limitations: At 1000 °C, the resistor would... (e.g. melt, be destroyed, change phase).',
      },
    ],
  },

  // ── Q6: Water Tower & Clean Water Access (13 marks, Crit D) ──────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Energy & Development',
    marks: 13,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['energy sources (renewable vs non-renewable)', 'energy efficiency'], level: 'advanced' },
    stem: 'Different communities around the world do not have equal access to clean water and this is a challenge for fair development.\n\nA water tower is an elevated structure found in many economically developed countries. It holds a water tank high above the ground. This allows the water to be distributed to the local area through a network of pipes.\n\nThe images below show a water tower in Finland with a capacity of 12 600 m³ and a height of 52 m.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="q6tank" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cfe3ee"/><stop offset="0.5" stop-color="#9cc4da"/><stop offset="1" stop-color="#6ea6c6"/></linearGradient></defs><rect width="360" height="360" fill="#ffffff"/><rect x="0" y="320" width="360" height="40" fill="#e6ead0"/><line x1="0" y1="320" x2="360" y2="320" stroke="#b6bb98" stroke-width="2"/><!-- support legs --><line x1="150" y1="120" x2="120" y2="320" stroke="#7a8794" stroke-width="6"/><line x1="210" y1="120" x2="240" y2="320" stroke="#7a8794" stroke-width="6"/><line x1="150" y1="120" x2="240" y2="320" stroke="#9aa6ae" stroke-width="2"/><line x1="210" y1="120" x2="120" y2="320" stroke="#9aa6ae" stroke-width="2"/><line x1="132" y1="200" x2="228" y2="200" stroke="#9aa6ae" stroke-width="3"/><line x1="126" y1="260" x2="234" y2="260" stroke="#9aa6ae" stroke-width="3"/><!-- central riser pipe --><rect x="176" y="120" width="8" height="200" fill="#8a98a4"/><!-- tank --><ellipse cx="180" cy="120" rx="74" ry="18" fill="url(#q6tank)" stroke="#5b8aa8"/><rect x="106" y="70" width="148" height="50" fill="url(#q6tank)" stroke="#5b8aa8"/><ellipse cx="180" cy="70" rx="74" ry="18" fill="#dff0f8" stroke="#5b8aa8"/><path d="M106,70 Q180,30 254,70" fill="#bfe0ef" stroke="#5b8aa8"/><!-- height dimension --><line x1="300" y1="60" x2="300" y2="320" stroke="#0b7285" stroke-width="1.5"/><polygon points="300,60 296,72 304,72" fill="#0b7285"/><polygon points="300,320 296,308 304,308" fill="#0b7285"/><rect x="306" y="178" width="48" height="22" rx="4" fill="#ffffff"/><text x="330" y="194" font-size="13" font-weight="700" text-anchor="middle" fill="#0b7285">52 m</text><!-- capacity label --><rect x="118" y="86" width="124" height="22" rx="4" fill="#ffffff" fill-opacity="0.85"/><text x="180" y="102" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">12 600 m³</text></svg>',
      },
      caption: 'An elevated water tower of capacity 12 600 m³ raised to a height of 52 m, distributing water to the local area through a network of pipes.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the work done to fill this water tower with water from ground level. You should assume that g = 9.81 N kg⁻¹ and the density of water = 1000 kg m⁻³. Give your answer in standard form to two significant figures.',
        marks: 3,
        ph: 'Show your working:\nVolume = 12 600 m³\nMass = density × volume = 1000 × 12 600 = ___ kg\nW = mgh = ___ × 9.81 × 52\nW = ___ J ≈ ___ × 10⁹ J (2 s.f.)',
      },
      {
        label: 'b',
        text: 'In many countries, water must be collected from sources that are sometimes located far away from the home. It is estimated that around a quarter of the global population have to collect water. A worldwide total of around 200 million hours every day is spent collecting water.\n\n**Suggest** why the need to collect water is a barrier to development for the people that live in these regions.',
        marks: 1,
        ph: 'Suggest one reason (e.g. time lost from education / work / economic activity, physical burden on women and girls, health impacts)...',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** providing a hand pump to a local village community.\n\nIn your answer, you should include:\n• the benefits to health that are associated with access to clean, drinkable water\n• the ethical advantages and disadvantages of asking the villagers to pay a small fee to access the clean water\n• a concluding appraisal giving your opinion on how the charity should ensure a long-term solution to water access for the village.',
        marks: 9,
        passage: 'The United Nations (UN) Sustainable Development Goal for clean water and sanitation calls for fair and universal access to safe and affordable drinking water by 2030. However, this is a significant global challenge.\n\nIt is estimated that one in four, or around two billion people worldwide, do not have access to water that is safe to drink. 1.4 million people die annually and 74 million people will have their lives shortened due to diseases caused by drinking unclean water. In addition, the most polluted regions rely entirely on manual water collection, with women and girls bearing a disproportionate share of this burden, spending a worldwide total of around 200 million hours every day collecting water.\n\nMost of the water sources used are sometimes located far away from the home. Collecting water by hand pump — drawing clean water from under the ground — is a common method in sub-Saharan Africa. The charity wants to provide a hand pump to a local village community to improve access to clean water. They want to make sure that the hand pump will remain usable for a long time. A recent study found that charging a small amount of money to use the pump can help train people to maintain the pumps so that they remain usable for a long time.',
        ph: 'BENEFITS TO HEALTH (access to clean water):\n•\n•\n\nETHICAL ANALYSIS (fee to use pump):\nAdvantage of charging a fee: ...\nDisadvantage of charging a fee: ...\n\nCONCLUDING APPRAISAL:\nOverall, I think the charity should... because...',
      },
    ],
  },

  // ── Q7: SODIS Water Treatment (13 marks, Crit D) ─────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'EM Radiation & Development',
    marks: 13,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'em-spectrum', topics: ['electromagnetic spectrum overview', 'uses and hazards of EM radiation'], level: 'advanced' },
    stem: 'Water must be treated before it is safe to be consumed by humans.\n\nIn more economically developed countries, water treatment facilities are used to make sure that water is safe for human consumption. However, less economically developed countries do not always have access to these water treatment facilities.\n\nOne method that is used in less economically developed countries, where no centralized water treatment facilities exist, is solar disinfection, or SODIS. This method involves placing untreated water into a transparent container and exposing it to sunlight for several hours before drinking. The container is often a reused plastic water bottle. It is the UV waves and high temperatures that kills the harmful microbes that are present in the untreated water.\n\nTo be effective, the SODIS technique requires 8 hours of exposure to sunlight on a clear day in the countries close to the equator. This also requires the availability of plastic bottles in which to hold the water. SODIS is recommended by the World Health Organization as a method for household water treatment, especially in locations where fuel is expensive.',
    artefact: {
      component: 'SpectrumSim',
      data: {
        title: 'The electromagnetic spectrum',
        mode: 'scrub',
        bands: ['X-rays', 'Ultraviolet', 'Visible light', 'Infrared', 'Microwaves', 'Radio'],
        axis: 'wavelength increases left → right (energy decreases)',
        target: 'Ultraviolet',
      },
      caption: 'The electromagnetic spectrum ordered by increasing wavelength. Ultraviolet sits between X-rays and visible light. UV is the radiation used in SODIS to kill harmful microbes.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the region where ultraviolet (UV) waves are found in the electromagnetic spectrum shown below.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['1', '2', '3', '4'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 660 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="q7vis" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7a3df0"/><stop offset="0.2" stop-color="#3d6bf0"/><stop offset="0.4" stop-color="#3ddc7a"/><stop offset="0.6" stop-color="#f0e23d"/><stop offset="0.8" stop-color="#f0903d"/><stop offset="1" stop-color="#e8362e"/></linearGradient></defs><rect width="660" height="200" fill="#ffffff"/><line x1="30" y1="96" x2="630" y2="96" stroke="#1f2d3a" stroke-width="2"/><polygon points="630,96 618,90 618,102" fill="#1f2d3a"/><!-- labelled bands --><text x="120" y="60" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">X-rays</text><text x="330" y="60" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Visible light</text><text x="540" y="60" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Microwaves</text><!-- numbered region circles --><g font-size="13" font-weight="700" text-anchor="middle"><circle cx="60" cy="96" r="14" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="60" y="101" fill="#0b7285">1</text><circle cx="225" cy="96" r="14" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="225" y="101" fill="#0b7285">2</text><circle cx="435" cy="96" r="14" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="435" y="101" fill="#0b7285">3</text><circle cx="600" cy="96" r="14" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="600" y="101" fill="#0b7285">4</text></g><!-- visible rainbow strip --><rect x="270" y="130" width="120" height="22" fill="url(#q7vis)" stroke="#9aa6ae"/><text x="330" y="170" font-size="11" text-anchor="middle" fill="#5b6b78">Visible light</text><text x="30" y="190" font-size="10" fill="#5b6b78">shorter wavelength</text><text x="630" y="190" font-size="10" text-anchor="end" fill="#5b6b78">longer wavelength</text></svg>',
          },
          caption: 'The electromagnetic spectrum with four numbered regions. X-rays, visible light and microwaves are labelled; regions 1–4 lie between them, ordered by increasing wavelength.',
        },
        ph: 'Select 1, 2, 3, or 4',
      },
      {
        label: 'b',
        text: '**State** the property of ultraviolet waves that is useful for killing harmful microbes in water.',
        marks: 1,
        ph: 'UV waves have ___ energy / ___ frequency / ___ wavelength, which allows them to...',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** the use of SODIS as a water treatment method for people in less economically developed countries.\n\nIn your answer, you should include:\n• information about the suitability of the climate in different less economically developed countries for SODIS\n• the likely impact on the health of the villagers\n• the challenges of implementing SODIS\n• a concluding appraisal of whether SODIS is a suitable water treatment method.',
        marks: 11,
        passage: 'Water must be treated before it is safe to be consumed by humans.\n\nIn more economically developed countries, water treatment facilities are used to make sure that water is safe for human consumption. However, less economically developed countries do not always have access to these water treatment facilities.\n\nOne method that is used in less economically developed countries, where no centralized water treatment facilities exist, is solar disinfection, or SODIS. This method involves placing untreated water into a transparent container and exposing it to sunlight for several hours before drinking. The container is often a reused plastic water bottle. It is the UV waves and high temperatures that kills the harmful microbes that are present in the untreated water.\n\nTo be effective, the SODIS technique requires 8 hours of exposure to sunlight on a clear day in the countries close to the equator. This also requires the availability of plastic bottles in which to hold the water. SODIS is recommended by the World Health Organization as a method for household water treatment, especially in locations where fuel is expensive.',
        ph: 'CLIMATE SUITABILITY:\n• Countries near the equator: ___ (sunny, ideal for SODIS)\n• Countries with cloudy/cold climates: ___ (2 days needed, less effective)\n\nHEALTH IMPACT:\n• Reducing waterborne diseases: ...\n• Reducing deaths/illness from...\n\nCHALLENGES OF IMPLEMENTATION:\n• Plastic bottle availability...\n• 8-hour exposure time requirement...\n• Cloudy weather...\n• Public trust / education...\n\nCONCLUDING APPRAISAL:\nOverall, SODIS is (suitable / partially suitable / not suitable) for LEDCs because...',
      },
    ],
  },
]
