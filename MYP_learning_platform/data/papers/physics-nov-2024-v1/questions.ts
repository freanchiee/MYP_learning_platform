import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2024 · VARIANT 1  (isomorphic to physics-nov-2024)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widgets, tags) in a NEW real-world context, with self-contained
// data-driven artefacts (no figImages). All numbers recomputed.
//   Q1 Energy/pendulum:  wrecking ball → fairground swing ride + pile driver
//   Q2 Radioactivity:    Am-241 smoke detector → Po-210 anti-static eliminator
//   Q3 Crit B resistance: cylinder diameter → conducting-putty rod LENGTH
//   Q4 Crit B design:    LDR vs distance → thermistor resistance vs temperature
//   Q5 Crit C R–T:       resistor in bead bath → filament lamp R vs current
//   Q6 Crit D energy:    water tower → micro-hydro header tank for a village
//   Q7 Crit D EM/dev:    UV SODIS → infrared solar cooking / pasteurisation
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2024-v1',
  subject: 'Physics',
  session: 'November',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ── Q1: Fairground swing ride & pile driver (12 marks, Crit A) ───
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Pendulum & Energy',
    marks: 12,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['gravitational potential energy', 'kinetic energy', 'conservation of energy'], level: 'proficient' },
    stem: 'A swinging fairground ride carries riders back and forth on a long supporting arm, just like a giant pendulum. This repeating, to-and-fro movement is an example of periodic motion.',
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
            svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="200" fill="#ffffff"/><g><text x="75" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">A</text><line x1="75" y1="34" x2="75" y2="70" stroke="#5b6b78"/><line x1="75" y1="70" x2="50" y2="120" stroke="#0b7285" stroke-width="2"/><line x1="75" y1="70" x2="100" y2="120" stroke="#0b7285" stroke-width="2" stroke-dasharray="3 3"/><circle cx="50" cy="120" r="9" fill="#f08c00" stroke="#a8631a"/><text x="75" y="150" font-size="10" text-anchor="middle" fill="#5b6b78">swinging pendulum</text></g><g><text x="225" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">B</text><circle cx="225" cy="95" r="34" fill="none" stroke="#0b7285" stroke-width="2"/><circle cx="225" cy="61" r="6" fill="#f08c00"/><path d="M225,61 A34,34 0 0 1 259,95" fill="none" stroke="#94a3ad" stroke-dasharray="3 3"/><text x="225" y="150" font-size="10" text-anchor="middle" fill="#5b6b78">satellite orbiting</text></g><g><text x="375" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">C</text><path d="M345,120 q15,-60 30,0" fill="none" stroke="#0b7285" stroke-width="2"/><circle cx="382" cy="62" r="7" fill="#c0392b"/><path d="M382,62 l8,-3 l0,6 Z" fill="#c0392b"/><text x="375" y="150" font-size="10" text-anchor="middle" fill="#5b6b78">ball thrown once</text></g><g><text x="525" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">D</text><path d="M495,95 q10,-30 20,0 q10,30 20,0" fill="none" stroke="#0b7285" stroke-width="2"/><path d="M535,95 q10,-30 20,0" fill="none" stroke="#0b7285" stroke-width="2"/><text x="525" y="150" font-size="10" text-anchor="middle" fill="#5b6b78">vibrating spring</text></g></svg>',
          },
          caption: 'Four movements. Three repeat regularly; one does not.',
        },
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'b',
        text: '**Select** the option that describes the kinetic energy, potential energy and speed of the swing ride at positions A (top left), B (bottom) and C (top right).',
        marks: 2,
        ph: 'Describe each position:\nPosition A: KE = ___ (min/max), PE = ___ (min/max), Speed = ___ (min/max)\nPosition B: KE = ___, PE = ___, Speed = ___\nPosition C: KE = ___, PE = ___, Speed = ___',
      },
      {
        label: 'c',
        text: 'A pendulum can be used to determine the acceleration due to gravity, g.\n\nThe period T of a pendulum is the time taken to complete one swing. T depends on the length of the pendulum L and g. It is given by the relationship: T² = 4π²L / g\n\nA pendulum used in a laboratory in Norway has a length of 99.0 cm. The time taken for 10 periods is measured to be 19.9 s.\n\n**Calculate** the acceleration due to gravity g in m s⁻² in this laboratory, giving your answer to three significant figures.',
        marks: 3,
        ph: 'Show your working:\nStep 1 — find T: T = 19.9 / 10 = ... s\nStep 2 — rearrange: g = 4π²L / T²\nStep 3 — substitute: g = 4 × π² × 0.990 / (...)²\ng = ... m s⁻² (3 s.f.)',
      },
      {
        label: 'd',
        text: 'The expected value of acceleration due to gravity at this location is 9.82 m s⁻².\n\n**Suggest** why the experimental value in part (c) is different.',
        marks: 1,
        ph: 'Suggest one reason (e.g. measurement uncertainty in T or L, environmental factor, location above sea level)...',
      },
      {
        label: 'e',
        text: 'A pile driver is a heavy weight used on construction sites to hammer support posts (piles) into the ground. The weight is raised by a crane and then dropped onto the pile. Mass of the falling weight = 1800 kg.\n\nInitially, the weight is stationary. The operator releases it from a height of 10.0 m. The weight strikes the top of the pile at 2.5 m above the ground.\n\n**Calculate** the kinetic energy of the weight when it strikes the pile at 2.5 m above the ground. You should assume that the acceleration due to gravity g = 9.81 m s⁻². Give your result in kJ rounded to two significant figures.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wt1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b7782"/><stop offset="1" stop-color="#3a444c"/></linearGradient></defs><rect width="420" height="320" fill="#ffffff"/><rect x="0" y="285" width="420" height="35" fill="#cdb892"/><line x1="0" y1="285" x2="420" y2="285" stroke="#9b8757" stroke-width="2"/><text x="20" y="307" font-size="11" fill="#6b5c33">ground</text><line x1="200" y1="20" x2="200" y2="285" stroke="#5b6b78" stroke-width="4"/><line x1="200" y1="20" x2="120" y2="20" stroke="#5b6b78" stroke-width="3"/><rect x="150" y="40" width="60" height="46" rx="4" fill="url(#wt1)" stroke="#222"/><text x="180" y="68" font-size="11" fill="#fff" text-anchor="middle">1800 kg</text><line x1="180" y1="86" x2="180" y2="200" stroke="#0b7285" stroke-width="1.5" stroke-dasharray="5 4"/><rect x="168" y="200" width="24" height="85" fill="#8a5a2b" stroke="#5c3a18"/><text x="225" y="160" font-size="11" fill="#0b7285">drops</text><line x1="300" y1="63" x2="300" y2="285" stroke="#a8531a" stroke-width="1"/><line x1="296" y1="63" x2="304" y2="63" stroke="#a8531a"/><line x1="296" y1="285" x2="304" y2="285" stroke="#a8531a"/><text x="310" y="180" font-size="11" fill="#a8531a">10.0 m</text><line x1="360" y1="200" x2="360" y2="285" stroke="#3a7d44" stroke-width="1"/><line x1="356" y1="200" x2="364" y2="200" stroke="#3a7d44"/><line x1="356" y1="285" x2="364" y2="285" stroke="#3a7d44"/><text x="368" y="248" font-size="11" fill="#3a7d44">2.5 m</text></svg>',
          },
          caption: 'A pile driver. The weight is released from 10.0 m and strikes the pile top at 2.5 m above the ground.',
        },
        ph: 'Show your working:\nHeight change: Δh = 10.0 − 2.5 = ... m\nUsing conservation of energy: KE = mgh\nKE = 1800 × 9.81 × ...\nKE = ... J = ... kJ (2 s.f.)',
      },
      {
        label: 'f',
        text: '**Suggest** why the real-world kinetic energy of the falling weight would be lower than the calculated value.',
        marks: 1,
        ph: 'Suggest one reason relating to energy transfer (e.g. friction, air resistance, heat, sound)...',
      },
    ],
  },

  // ── Q2: Anti-static eliminator & Radioactivity (12 marks, Crit A) ─
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity',
    marks: 12,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['alpha radiation', 'radioactive decay', 'half-life'], level: 'proficient' },
    stem: 'In factories that handle paper, plastic film or electronic chips, a build-up of static electricity can attract dust or damage components. An anti-static eliminator (ioniser) is a bar mounted above a moving production line. Some of these bars use the properties of radiation to remove the static charge.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bar2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfd8de"/><stop offset="1" stop-color="#8a99a6"/></linearGradient></defs><rect width="600" height="240" fill="#ffffff"/><rect x="120" y="40" width="360" height="30" rx="6" fill="url(#bar2)" stroke="#5b6b78"/><text x="300" y="60" font-size="12" text-anchor="middle" fill="#1f2d3a">anti-static eliminator bar (alpha source)</text><g fill="#c0392b"><circle cx="180" cy="95" r="3"/><circle cx="240" cy="105" r="3"/><circle cx="300" cy="95" r="3"/><circle cx="360" cy="105" r="3"/><circle cx="420" cy="95" r="3"/></g><g stroke="#c0392b" stroke-width="1"><line x1="180" y1="70" x2="180" y2="92"/><line x1="240" y1="70" x2="240" y2="102"/><line x1="300" y1="70" x2="300" y2="92"/><line x1="360" y1="70" x2="360" y2="102"/><line x1="420" y1="70" x2="420" y2="92"/></g><text x="500" y="92" font-size="11" fill="#c0392b">alpha particles</text><text x="500" y="108" font-size="11" fill="#c0392b">ionise the air</text><rect x="60" y="150" width="480" height="22" fill="#3a6ea5"/><polygon points="540,150 575,161 540,172" fill="#3a6ea5"/><text x="300" y="195" font-size="12" text-anchor="middle" fill="#2b3a67">moving plastic film (carries static charge)</text><line x1="100" y1="150" x2="100" y2="172" stroke="#5b6b78" stroke-width="1"/></svg>',
      },
      caption: 'An anti-static bar above a moving plastic film. Alpha particles ionise the surrounding air so the static charge can leak away.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** why the anti-static eliminator bar is mounted just above the moving film rather than far away from it.',
        marks: 2,
        ph: 'Explain the range of alpha particles in air and why the bar must be close to the film...\n•\n•',
      },
      {
        label: 'b',
        text: 'Some anti-static bars use a small amount of a radioactive isotope, polonium-210. Polonium-210 emits alpha particles.\n\n**State** two properties of alpha particles.',
        marks: 2,
        ph: 'Property 1: ...\nProperty 2: ...',
      },
      {
        label: 'c',
        text: '**Select** the equation that represents the radioactive decay of polonium-210 in the anti-static bar.\n\n• **A:** ²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂α\n• **B:** ²⁰⁶₈₂Pb + ⁴₂α → ²¹⁰₈₄Po\n• **C:** ²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁰₀γ\n• **D:** ²¹⁰₈₄Po → ²¹⁰₈₃Bi + ⁰₋₁β',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'd',
        text: 'Polonium-210 is an isotope of polonium. **Select** which of the following is **not** an isotope of polonium-210. Use scientific terminology to **justify** your answer.\n\n• **A:** ²⁰⁸₈₄Po\n• **B:** ²⁰⁹₈₄Po\n• **C:** ²¹⁰₈₂Pb\n• **D:** ²¹¹₈₄Po',
        marks: 2,
        ph: 'My answer is option ___.\nJustification: Isotopes of the same element must have the same ___ number (protons). Option ___ has a proton number of ___, which is different from polonium\'s proton number of 84.',
      },
      {
        label: 'e',
        text: '**Determine** the half-life of polonium-210 in days using the graph shown.',
        marks: 1,
        artefact: {
          component: 'DecaySim',
          data: {
            isotope: 'Po-210',
            daughter: 'Pb-206',
            decayMode: 'alpha',
            halfLife: 138,
            units: 'days',
            initialCount: 10000,
            axisMax: 690,
          },
          caption: 'Number of polonium-210 nuclei remaining against time. Drag the time marker to read off values.',
        },
        ph: 'Starting nuclei = 10 000. Half = 5 000.\nRead the time on the x-axis where the curve crosses 5 000 nuclei.\nHalf-life ≈ ___ days',
      },
      {
        label: 'f',
        text: 'Use your answer to part (e) to **calculate** the time taken for 625 nuclei to remain in this sample, which started with 10 000 nuclei.',
        marks: 1,
        ph: '10 000 → 5 000 (1 half-life)\n5 000 → 2 500 (2)\n2 500 → 1 250 (3)\n1 250 → 625 (4 half-lives)\nTime = 4 × ___ = ___ days',
      },
      {
        label: 'g',
        text: '**Explain** why this kind of anti-static bar would not work correctly with a radioactive isotope that emits beta or gamma radiation.',
        marks: 3,
        ph: 'Explain the normal mechanism:\n• Alpha particles ionise air molecules → ions neutralise the static charge on the film\n\nNow explain why beta/gamma fails:\n• Beta/gamma have ___ ionising power than alpha...\n• Effect on the number of ions produced in the air...\n• Therefore the static charge would...',
      },
    ],
  },

  // ── Q3: Conducting-putty Resistance Investigation (17 marks, Crit B) ─
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Electrical Resistance',
    marks: 17,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['resistance', "Ohm's law", 'series circuits'], level: 'proficient' },
    stem: 'A resistor is an electrical component that limits the flow of current in a circuit and converts electrical energy to heat. Resistance can be measured using an ohmmeter.\n\nA student is interested in studying resistance. They decide to model resistors using rods of conducting putty. Their research question is:\n\n"What is the relationship between the length of a conducting-putty rod and its resistance?"',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="putty3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8e6db0"/><stop offset="1" stop-color="#5e3f82"/></linearGradient></defs><rect width="560" height="220" fill="#ffffff"/><rect x="160" y="92" width="200" height="30" rx="14" fill="url(#putty3)" stroke="#41295a"/><text x="260" y="112" font-size="12" text-anchor="middle" fill="#fff">conducting-putty rod</text><line x1="80" y1="107" x2="160" y2="107" stroke="#5b6b78" stroke-width="2"/><line x1="360" y1="107" x2="440" y2="107" stroke="#5b6b78" stroke-width="2"/><rect x="40" y="92" width="40" height="30" fill="#cfd8de" stroke="#5b6b78"/><rect x="440" y="92" width="40" height="30" fill="#cfd8de" stroke="#5b6b78"/><text x="60" y="138" font-size="9" text-anchor="middle" fill="#5b6b78">clip</text><text x="460" y="138" font-size="9" text-anchor="middle" fill="#5b6b78">clip</text><circle cx="260" cy="55" r="26" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="260" y="60" font-size="13" font-weight="700" fill="#0b7285" text-anchor="middle">&#937;</text><line x1="200" y1="80" x2="240" y2="58" stroke="#5b6b78"/><line x1="320" y1="80" x2="282" y2="58" stroke="#5b6b78"/><line x1="160" y1="150" x2="360" y2="150" stroke="#a8531a" stroke-width="1"/><line x1="160" y1="146" x2="160" y2="154" stroke="#a8531a"/><line x1="360" y1="146" x2="360" y2="154" stroke="#a8531a"/><text x="260" y="170" font-size="11" text-anchor="middle" fill="#a8531a">length L</text></svg>',
      },
      caption: 'A rod of conducting putty connected to an ohmmeter. The student varies the length of the rod.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a hypothesis to test this research question.',
        marks: 2,
        ph: 'If the length of the putty rod increases, then the resistance will ___ because...\n\n(Include a scientific reason linking length to the distance electrons must travel)',
      },
      {
        label: 'b',
        text: '**Select** the rods the student should use to collect appropriate data by choosing from the available rods shown.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="280" fill="#ffffff"/><text x="20" y="24" font-size="13" font-weight="700" fill="#1f2d3a">Available conducting-putty rods</text><g><text x="30" y="58" font-size="12" fill="#5b3f82" font-weight="700">Material P</text><rect x="120" y="46" width="60" height="16" rx="8" fill="#8e6db0"/><rect x="120" y="78" width="120" height="16" rx="8" fill="#8e6db0"/><rect x="120" y="110" width="180" height="16" rx="8" fill="#8e6db0"/><rect x="120" y="142" width="240" height="16" rx="8" fill="#8e6db0"/><rect x="120" y="174" width="300" height="16" rx="8" fill="#8e6db0"/><text x="200" y="58" font-size="10" fill="#5b6b78">4 cm</text><text x="260" y="90" font-size="10" fill="#5b6b78">8 cm</text><text x="320" y="122" font-size="10" fill="#5b6b78">12 cm</text><text x="380" y="154" font-size="10" fill="#5b6b78">16 cm</text><text x="440" y="186" font-size="10" fill="#5b6b78">20 cm</text></g><g><text x="30" y="232" font-size="12" fill="#2c6c44" font-weight="700">Material Q</text><rect x="120" y="220" width="120" height="16" rx="8" fill="#5b9a6b"/><rect x="120" y="248" width="200" height="16" rx="8" fill="#5b9a6b"/><text x="260" y="232" font-size="10" fill="#5b6b78">8 cm</text><text x="340" y="260" font-size="10" fill="#5b6b78">14 cm</text></g></svg>',
          },
          caption: 'Conducting-putty rods of two materials (P and Q) and various lengths, all the same diameter.',
        },
        ph: 'I would select:\n• Material: only Material ___ (one material only)\n• Number of rods: ___ rods with ___ different lengths\n• Reason: to keep material and diameter constant while only varying length',
      },
      {
        label: 'c',
        text: '**Justify** your selection of rods in part (b).',
        marks: 2,
        ph: 'Justify by explaining:\n1. Why only one material must be selected...\n2. Why rods with different lengths are needed (to test the RQ)...\n3. What variables are being controlled and why...',
      },
      {
        label: 'd',
        text: 'Having carried out one trial for each rod, the student records their data as shown in the notebook below.\n\n**Organize** and **present** the data in a table with appropriate headings and units.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="240" fill="#fffdf3" stroke="#d8cfa8"/><g stroke="#e6dcb8" stroke-width="1"><line x1="0" y1="40" x2="460" y2="40"/><line x1="0" y1="80" x2="460" y2="80"/><line x1="0" y1="120" x2="460" y2="120"/><line x1="0" y1="160" x2="460" y2="160"/><line x1="0" y1="200" x2="460" y2="200"/></g><text x="20" y="28" font-size="14" font-weight="700" fill="#4a3f1a">Lab notebook &#8212; Material P</text><g font-size="14" fill="#2a2a2a"><text x="20" y="64">4 cm rod &#8594; 8 &#937;</text><text x="20" y="104">8 cm rod &#8594; 17 &#937;</text><text x="20" y="144">12 cm rod &#8594; 24 &#937;</text><text x="20" y="184">16 cm rod &#8594; 33 &#937;</text><text x="20" y="224">20 cm rod &#8594; 40 &#937;</text></g></svg>',
          },
          caption: 'The student\'s raw notebook results for the five Material-P rods.',
        },
        ph: 'Draw a table:\n| Length / cm | Resistance / Ω |\n|-------------|----------------|\n| 4           | 8              |\n| 8           | 17             |\n| 12          | 24             |\n| 16          | 33             |\n| 20          | 40             |',
      },
      {
        label: 'e',
        text: 'The student\'s lab partner wants to carry out more trials. **Suggest** how this would improve the investigation.',
        marks: 2,
        ph: 'More trials would:\n• Allow a ___ to be calculated for each length\n• Reduce the effect of ___ errors\n• Increase the ___ of the results',
      },
      {
        label: 'f',
        text: 'The student draws four graphs using the data from part (d). **Select** the most appropriate trend line to show the relationship between length and resistance.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><g><text x="140" y="22" font-size="12" font-weight="700" text-anchor="middle">A</text><line x1="50" y1="140" x2="50" y2="40" stroke="#5b6b78"/><line x1="50" y1="140" x2="240" y2="140" stroke="#5b6b78"/><path d="M55,135 Q150,60 235,57" fill="none" stroke="#0b7285" stroke-width="2"/></g><g><text x="420" y="22" font-size="12" font-weight="700" text-anchor="middle">B</text><line x1="330" y1="140" x2="330" y2="40" stroke="#5b6b78"/><line x1="330" y1="140" x2="520" y2="140" stroke="#5b6b78"/><line x1="335" y1="135" x2="515" y2="55" stroke="#0b7285" stroke-width="2"/></g><g><text x="140" y="182" font-size="12" font-weight="700" text-anchor="middle">C</text><line x1="50" y1="300" x2="50" y2="200" stroke="#5b6b78"/><line x1="50" y1="300" x2="240" y2="300" stroke="#5b6b78"/><line x1="55" y1="295" x2="235" y2="215" stroke="#0b7285" stroke-width="2"/><circle cx="80" cy="280" r="3" fill="#c0392b"/><circle cx="120" cy="265" r="3" fill="#c0392b"/><circle cx="160" cy="248" r="3" fill="#c0392b"/><circle cx="200" cy="232" r="3" fill="#c0392b"/><circle cx="230" cy="218" r="3" fill="#c0392b"/></g><g><text x="420" y="182" font-size="12" font-weight="700" text-anchor="middle">D</text><line x1="330" y1="300" x2="330" y2="200" stroke="#5b6b78"/><line x1="330" y1="300" x2="520" y2="300" stroke="#5b6b78"/><path d="M335,215 Q420,300 515,298" fill="none" stroke="#0b7285" stroke-width="2"/></g></svg>',
          },
          caption: 'Four candidate trend lines (A: rising curve, B: rising straight line, C: rising straight line through data, D: falling curve).',
        },
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'g',
        text: 'The student wishes to extend the investigation using the same materials and equipment available in parts (a) and (b). The dependent variable will be resistance.\n\n**State** an appropriate research question, independent variable, and one control variable for this extension.',
        marks: 3,
        ph: 'Research question: How does ___ affect the resistance of the rod?\nIndependent variable: ___\nControl variable: ___ (kept constant because...)',
      },
    ],
  },

  // ── Q4: Thermistor Investigation Design (14 marks, Crit B) ───────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Thermistor',
    marks: 14,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['resistance', 'parallel circuits', 'measuring current and voltage'], level: 'proficient' },
    stem: 'The resistance of a thermistor depends on the temperature of its surroundings. Thermistors are used in fire alarms and oven thermostats. A student predicts:\n\n"If the temperature of the water around a thermistor increases, then the resistance of the thermistor will decrease."',
    tasks: [
      {
        label: 'a',
        text: '**State** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'How does the ___ of the water around the thermistor affect the ___ of the thermistor?',
      },
      {
        label: 'b',
        text: 'The student uses a beaker of water on a hotplate as the heat source and an ohmmeter to measure the resistance.\n\n**Design** an investigation the student could use to test their prediction. In your answer, you should include:\n\n• the independent variable and dependent variable\n• two control variables and a justification of why they should be controlled\n• a list of equipment\n• a detailed method for how you will collect data\n• an explanation of how you will collect sufficient data.',
        marks: 13,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="watr4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="520" height="300" fill="#ffffff"/><rect x="120" y="110" width="160" height="130" rx="6" fill="none" stroke="#5b6b78" stroke-width="2"/><rect x="124" y="150" width="152" height="86" fill="url(#watr4)"/><text x="200" y="200" font-size="11" text-anchor="middle" fill="#2c5468">water</text><rect x="100" y="240" width="200" height="22" rx="4" fill="#9aa3ab" stroke="#5b6b78"/><rect x="140" y="262" width="120" height="16" fill="#c0392b"/><text x="200" y="290" font-size="10" text-anchor="middle" fill="#7a1d12">hotplate</text><rect x="170" y="60" width="60" height="100" rx="3" fill="none" stroke="#41295a"/><rect x="190" y="150" width="20" height="40" rx="6" fill="#8e6db0" stroke="#41295a"/><text x="200" y="206" font-size="9" text-anchor="middle" fill="#41295a">thermistor</text><line x1="120" y1="60" x2="120" y2="160" stroke="#d6342c" stroke-width="6"/><circle cx="120" cy="166" r="9" fill="#d6342c"/><text x="92" y="90" font-size="9" fill="#7a1d12">thermometer</text><circle cx="380" cy="120" r="30" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="380" y="125" font-size="15" font-weight="700" fill="#0b7285" text-anchor="middle">&#937;</text><line x1="210" y1="150" x2="380" y2="120" stroke="#5b6b78"/><line x1="210" y1="190" x2="360" y2="138" stroke="#5b6b78"/></svg>',
          },
          caption: 'Apparatus: a thermistor in a beaker of water on a hotplate, with a thermometer and an ohmmeter.',
        },
        ph: 'VARIABLES:\nIndependent variable: temperature of the water (°C)\nDependent variable: resistance of thermistor (Ω, measured by ohmmeter)\nControl variable 1: ___ — because if this changes, it would also affect the resistance...\nControl variable 2: ___ — because...\n\nEQUIPMENT:\n•\n•\n•\n\nMETHOD:\n1. Place the thermistor in the beaker of water with a thermometer.\n2. Heat the water to a chosen temperature of ___ °C.\n3. Record the resistance shown on the ohmmeter.\n4. Heat to the next temperature (___ °C) and repeat...\n\nSUFFICIENT DATA:\n• Range of temperatures: ___ °C to ___ °C\n• Intervals: every ___ °C (___ data points)\n• Repeats: ___ trials per temperature (to calculate mean)',
      },
    ],
  },

  // ── Q5: Filament Lamp Resistance vs Current (19 marks, Crit C) ───
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Resistance & Current',
    marks: 19,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['resistance', "Ohm's law", 'measuring current and voltage'], level: 'proficient' },
    stem: 'Another student decides to investigate how the resistance of a filament lamp changes as the current through it increases. As more current flows, the metal filament heats up. The student measures the voltage across the lamp and the current through it. The student\'s research question is: "How does the current in a filament lamp affect its resistance?"',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><line x1="60" y1="60" x2="500" y2="60" stroke="#5b6b78" stroke-width="2"/><line x1="60" y1="60" x2="60" y2="150" stroke="#5b6b78" stroke-width="2"/><line x1="500" y1="60" x2="500" y2="150" stroke="#5b6b78" stroke-width="2"/><line x1="60" y1="150" x2="500" y2="150" stroke="#5b6b78" stroke-width="2"/><line x1="160" y1="150" x2="170" y2="135" stroke="#5b6b78" stroke-width="2"/><line x1="170" y1="135" x2="180" y2="165" stroke="#5b6b78" stroke-width="2"/><line x1="180" y1="165" x2="190" y2="150" stroke="#5b6b78" stroke-width="2"/><text x="130" y="182" font-size="10" fill="#5b6b78">variable supply</text><circle cx="290" cy="60" r="20" fill="#fff7d6" stroke="#f08c00" stroke-width="2"/><line x1="277" y1="47" x2="303" y2="73" stroke="#f08c00"/><line x1="303" y1="47" x2="277" y2="73" stroke="#f08c00"/><text x="290" y="36" font-size="11" text-anchor="middle" fill="#a8631a">filament lamp</text><circle cx="290" cy="150" r="20" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="290" y="155" font-size="13" font-weight="700" fill="#0b7285" text-anchor="middle">A</text><circle cx="420" cy="105" r="20" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="420" y="110" font-size="13" font-weight="700" fill="#0b7285" text-anchor="middle">V</text><line x1="420" y1="60" x2="420" y2="85" stroke="#5b6b78"/><line x1="420" y1="125" x2="420" y2="150" stroke="#5b6b78"/></svg>',
      },
      caption: 'Circuit for the filament-lamp investigation: a variable supply, the lamp, an ammeter in series and a voltmeter across the lamp.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Measure** the current shown on the ammeter in the image.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="320" height="220" fill="#ffffff"/><circle cx="160" cy="120" r="100" fill="#fbfdfe" stroke="#0b7285" stroke-width="3"/><path d="M70,150 A100,100 0 0 1 250,150" fill="none" stroke="#1f2d3a" stroke-width="2"/><g stroke="#1f2d3a" stroke-width="2"><line x1="70" y1="150" x2="80" y2="146"/><line x1="100" y1="108" x2="108" y2="116"/><line x1="160" y1="90" x2="160" y2="100"/><line x1="220" y1="108" x2="212" y2="116"/><line x1="250" y1="150" x2="240" y2="146"/></g><g font-size="13" fill="#1f2d3a" font-weight="700"><text x="58" y="170" text-anchor="middle">0</text><text x="100" y="100" text-anchor="middle">0.1</text><text x="160" y="82" text-anchor="middle">0.2</text><text x="222" y="100" text-anchor="middle">0.3</text><text x="262" y="170" text-anchor="middle">0.4</text></g><line x1="160" y1="150" x2="120" y2="98" stroke="#c0392b" stroke-width="3"/><circle cx="160" cy="150" r="6" fill="#c0392b"/><text x="160" y="200" font-size="14" font-weight="700" text-anchor="middle" fill="#0b7285">A</text></svg>',
          },
          caption: 'The ammeter scale reads from 0 to 0.4 A. Read the position of the needle.',
        },
        ph: 'Read the ammeter scale carefully between the graduation marks.\nCurrent = ___ A',
      },
      {
        label: 'b',
        text: '**Draw** a diagram of the circuit used by the student.\n\nDescribe the circuit components and how they are connected.',
        marks: 3,
        ph: 'Circuit description:\n• Power supply (variable)\n• Filament lamp (connected in series)\n• Ammeter (in series, to measure current)\n• Voltmeter (in parallel across the lamp)\n\nDescribe using words or standard symbol names:\nThe supply connects in series with the ammeter and lamp. The voltmeter is connected in parallel (across) the lamp.',
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation by classifying each of the following as Independent (IV), Dependent (DV), or Control (CV):\n\n• Current in the lamp\n• Length of the filament\n• Resistance of the lamp\n• Material of the filament\n• Type of ammeter used',
        marks: 3,
        ph: 'Independent variable (what you change): ___\nDependent variable (what you measure / calculate): ___\nControl variables (kept constant):\n  • ___\n  • ___\n  • ___',
      },
      {
        label: 'd',
        text: '**Identify** a safety issue that the student should have considered when planning this investigation.',
        marks: 1,
        ph: 'Safety issue: e.g. hot filament/lamp, electrical hazards, burns from hot equipment...',
      },
      {
        label: 'e',
        text: 'The student predicts: "As the current through the lamp increases, the resistance of the lamp will stay the same. I predict that there will be a **directly proportional** relationship between current and voltage."\n\nThe graph of their results is shown below.\n\nUse data from the graph and a calculation to **explain** whether the student\'s prediction is supported.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'current / A',
            yLabel: 'voltage / V',
            points: [[0.05, 0.6], [0.10, 1.5], [0.15, 2.7], [0.20, 4.4], [0.25, 6.5]],
            readouts: [{ x: 0.10, note: 'read V at I = 0.10 A' }, { x: 0.25, note: 'read V at I = 0.25 A' }],
            dataMaxX: 0.25,
          },
          caption: 'Voltage–current graph for the filament lamp (drag the crosshair to read values).',
        },
        ph: 'To test direct proportion (constant resistance): check if V / I is constant for all points.\nFrom the graph:\n• At I = 0.10 A, V ≈ ___ → V/I = ___\n• At I = 0.25 A, V ≈ ___ → V/I = ___\nAre the ratios constant? ___\nConclusion: The prediction is (supported / not supported) because...',
      },
      {
        label: 'f',
        text: 'Having measured the current and voltage, additional processing is required to find the relationship between current and resistance.\n\nUsing the graph in part (e) and information from the formula sheet, **calculate** the resistance of the lamp when the current is 0.20 A.',
        marks: 2,
        ph: 'Read the voltage at I = 0.20 A from the graph: V ≈ ___ V\nFormula: R = V / I\nR = ___ / 0.20 = ___ Ω\n(Round to nearest whole number)',
      },
      {
        label: 'g',
        text: 'The graph below shows the processed data (current vs resistance). **Plot** the data point you determined in part (f) and **draw** a line of best fit on the graph.\n\nAxes: x-axis = Current / A (0 to 0.30), y-axis = Resistance / Ω (0 to 30)',
        marks: 2,
        ph: 'Data point to plot: (0.20 A, ___ Ω) [your calculated value from part f]\n\nLine of best fit:\n• Draw a straight line that passes close to all the data points\n• The line should rise (resistance increases with current)\n• Extend slightly beyond the data range in both directions',
      },
      {
        label: 'h',
        text: 'Using the graph in part (g), **predict** the value of resistance at a current of 0 A.',
        marks: 1,
        ph: 'Extend the line of best fit back to 0 A on the current axis.\nResistance at 0 A ≈ ___ Ω',
      },
      {
        label: 'i',
        text: '**Calculate** the gradient of the line of best fit drawn in part (g). You should include your working and the unit in your answer.',
        marks: 2,
        ph: 'Choose two well-separated points on the LINE OF BEST FIT (not data points):\nPoint 1: (___ A, ___ Ω)\nPoint 2: (___ A, ___ Ω)\nGradient = ΔR / ΔI = (___ − ___) / (___ − ___)\n= ___ Ω A⁻¹',
      },
      {
        label: 'j',
        text: 'The student calculated that the resistance would be 200 Ω when the current was 5 A.\n\n**Comment** on the validity of this calculation.',
        marks: 2,
        ph: 'Comment on two issues:\n1. Extrapolation: This current is far beyond the data range (data only goes to ___ A). The linear relationship may not continue...\n2. Physical limitations: At 5 A, the filament would... (e.g. melt, burn out, be destroyed).',
      },
    ],
  },

  // ── Q6: Micro-hydro & Clean Energy Access (13 marks, Crit D) ─────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Energy & Development',
    marks: 13,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['energy sources (renewable vs non-renewable)', 'energy efficiency'], level: 'advanced' },
    stem: 'Different communities around the world do not have equal access to reliable electricity, and this is a challenge for fair development.\n\nA micro-hydro scheme is a small renewable power system used in many mountainous regions. Water is held in a header tank high on a hillside; when it is released down a pipe it spins a small turbine to generate electricity for the village below.\n\nThe image below shows a micro-hydro header tank in the Nepalese hills with a capacity of 8 400 m³, positioned 45 m above the turbine house.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="hill6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9bbf7a"/><stop offset="1" stop-color="#5e7d44"/></linearGradient><linearGradient id="wtr6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="600" height="320" fill="#eaf4fb"/><path d="M0,120 L260,60 L600,300 L0,300 Z" fill="url(#hill6)"/><rect x="60" y="60" width="120" height="50" rx="4" fill="url(#wtr6)" stroke="#3f7e98"/><text x="120" y="90" font-size="12" text-anchor="middle" fill="#1f4a5c">header tank</text><text x="120" y="128" font-size="10" text-anchor="middle" fill="#2c5468">8 400 m&#179;</text><line x1="170" y1="110" x2="470" y2="260" stroke="#5b6b78" stroke-width="6"/><text x="300" y="205" font-size="11" fill="#5b6b78">penstock pipe</text><rect x="450" y="250" width="90" height="50" fill="#c9a06a" stroke="#8a6a3a"/><text x="495" y="280" font-size="10" text-anchor="middle" fill="#fff">turbine house</text><line x1="560" y1="110" x2="560" y2="260" stroke="#a8531a" stroke-width="1"/><line x1="556" y1="110" x2="564" y2="110" stroke="#a8531a"/><line x1="556" y1="260" x2="564" y2="260" stroke="#a8531a"/><text x="566" y="190" font-size="11" fill="#a8531a">45 m</text></svg>',
      },
      caption: 'A micro-hydro scheme. Water stored 45 m above the turbine house drives a turbine to make electricity.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the work done to pump this volume of water up to the header tank from the turbine house at ground level. You should assume that g = 9.81 N kg⁻¹ and the density of water = 1000 kg m⁻³. Give your answer in standard form to two significant figures.',
        marks: 3,
        ph: 'Show your working:\nVolume = 8 400 m³\nMass = density × volume = 1000 × 8 400 = ___ kg\nW = mgh = ___ × 9.81 × 45\nW = ___ J ≈ ___ × 10⁹ J (2 s.f.)',
      },
      {
        label: 'b',
        text: 'In many remote communities, people must travel long distances to charge a phone or buy fuel such as kerosene for lighting. It is estimated that hundreds of millions of people worldwide still have no access to mains electricity.\n\n**Suggest** why the lack of reliable electricity is a barrier to development for the people that live in these regions.',
        marks: 1,
        ph: 'Suggest one reason (e.g. time/cost of fuel, children cannot study after dark, no refrigeration for food/medicine, no power for clinics or businesses)...',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** installing a micro-hydro scheme for a remote village community.\n\nIn your answer, you should include:\n• the benefits to health and quality of life that come with access to reliable electricity\n• the ethical advantages and disadvantages of asking the villagers to pay a small monthly fee for the electricity\n• a concluding appraisal giving your opinion on how the charity should ensure a long-term solution to electricity access for the village.',
        marks: 9,
        passage: 'The United Nations (UN) Sustainable Development Goal for affordable and clean energy calls for universal access to reliable, sustainable and modern energy by 2030. However, this remains a significant global challenge.\n\nIt is estimated that around 700 million people worldwide still live without access to electricity, the majority of them in rural areas of sub-Saharan Africa and South Asia. Many families rely on kerosene lamps, which give a dim light, cause indoor air pollution and are a fire risk. Without power there is no refrigeration to store food or vaccines, and clinics cannot run basic equipment after dark.\n\nMicro-hydro schemes are a common renewable solution in mountainous regions where there is falling water all year round. A charity wants to install a micro-hydro generator for a remote village to provide clean, renewable electricity. They want to make sure the scheme will keep working for many years. A recent study found that charging households a small monthly fee can fund spare parts and train a local technician, so the system remains usable for a long time.',
        ph: 'BENEFITS TO HEALTH / QUALITY OF LIFE (access to electricity):\n•\n•\n\nETHICAL ANALYSIS (monthly fee):\nAdvantage of charging a fee: ...\nDisadvantage of charging a fee: ...\n\nCONCLUDING APPRAISAL:\nOverall, I think the charity should... because...',
      },
    ],
  },

  // ── Q7: Solar Cooking & Infrared Radiation (13 marks, Crit D) ────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'EM Radiation & Development',
    marks: 13,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'em-spectrum', topics: ['electromagnetic spectrum overview', 'uses and hazards of EM radiation'], level: 'advanced' },
    stem: 'Food and water must often be heated before they are safe to eat or drink, and in many places this is done by burning wood or charcoal.\n\nIn more economically developed countries, electricity or gas is widely used for cooking. However, less economically developed countries do not always have access to these fuels, and collecting firewood can be slow, expensive and harmful to forests and to people\'s lungs.\n\nOne method used in less economically developed countries is the solar cooker. A shiny curved reflector concentrates the Sun\'s infrared radiation onto a dark cooking pot, heating the food or water inside. It can also be used to pasteurise water by heating it enough to kill harmful microbes. Solar cookers are recommended for sunny regions where fuel is scarce or expensive.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sun7" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0a019"/></radialGradient><linearGradient id="dish7" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d8dee3"/><stop offset="0.5" stop-color="#f4f7f9"/><stop offset="1" stop-color="#d8dee3"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><circle cx="90" cy="55" r="32" fill="url(#sun7)" stroke="#c79a10"/><text x="90" y="60" font-size="11" text-anchor="middle" fill="#8a6d0f">Sun</text><g stroke="#f0a019" stroke-width="2.5"><line x1="150" y1="80" x2="250" y2="170"/><line x1="170" y1="70" x2="270" y2="160"/><line x1="190" y1="62" x2="290" y2="152"/></g><text x="195" y="115" font-size="11" fill="#a8631a">infrared rays</text><path d="M250,230 Q330,90 410,230" fill="none" stroke="url(#dish7)" stroke-width="14"/><path d="M250,230 Q330,90 410,230" fill="none" stroke="#9aa3ab" stroke-width="1"/><text x="330" y="252" font-size="11" text-anchor="middle" fill="#5b6b78">curved reflector</text><circle cx="330" cy="190" r="20" fill="#2a2a2a" stroke="#000"/><text x="330" y="170" font-size="10" text-anchor="middle" fill="#1f2d3a">dark pot</text><g stroke="#c0392b" stroke-width="2"><line x1="280" y1="150" x2="320" y2="185"/><line x1="380" y1="150" x2="340" y2="185"/></g><text x="455" y="190" font-size="11" fill="#c0392b">heat focused</text><text x="455" y="206" font-size="11" fill="#c0392b">on the pot</text></svg>',
      },
      caption: 'A solar cooker. A curved reflector concentrates the Sun\'s infrared radiation onto a dark pot to heat the contents.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the region where infrared (IR) waves are found in the electromagnetic spectrum shown below.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['1', '2', '3', '4'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="160" fill="#ffffff"/><text x="20" y="28" font-size="12" fill="#5b6b78">long wavelength</text><text x="580" y="28" font-size="12" text-anchor="end" fill="#5b6b78">short wavelength</text><g><rect x="40" y="50" width="105" height="46" fill="#7a4fb5"/><rect x="145" y="50" width="105" height="46" fill="#3a6ea5"/><rect x="250" y="50" width="105" height="46" fill="#0b7285"/><rect x="355" y="50" width="105" height="46" fill="#3a7d44"/><rect x="460" y="50" width="100" height="46" fill="#a8531a"/></g><g font-size="11" fill="#fff" text-anchor="middle" font-weight="700"><text x="92" y="78">Radio</text><text x="197" y="78">Microwave</text><text x="302" y="78">?  ?  ?</text><text x="407" y="78">Visible</text><text x="510" y="78">Gamma</text></g><g font-size="13" fill="#1f2d3a" text-anchor="middle" font-weight="700"><text x="92" y="120">1</text><text x="197" y="120">2</text><text x="302" y="120">3</text><text x="407" y="120">4</text></g><text x="300" y="148" font-size="11" text-anchor="middle" fill="#5b6b78">Which numbered region lies between microwaves and visible light?</text></svg>',
          },
          caption: 'A simplified electromagnetic spectrum, ordered from long to short wavelength.',
        },
        ph: 'Select 1, 2, 3, or 4',
      },
      {
        label: 'b',
        text: '**State** the property of infrared waves that is useful for heating food and water in a solar cooker.',
        marks: 1,
        ph: 'Infrared waves are strongly ___ by dark surfaces and transfer ___ energy, which allows them to...',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** the use of solar cookers as a method of cooking and pasteurising water for people in less economically developed countries.\n\nIn your answer, you should include:\n• information about the suitability of the climate in different less economically developed countries for solar cooking\n• the likely impact on the health of the villagers\n• the challenges of implementing solar cookers\n• a concluding appraisal of whether the solar cooker is a suitable technology.',
        marks: 11,
        passage: 'Food and water must often be heated before they are safe to eat or drink, and in many places this is done by burning wood or charcoal.\n\nIn more economically developed countries, electricity or gas is widely used for cooking. However, less economically developed countries do not always have access to these fuels, and collecting firewood can be slow, expensive and harmful to forests and to people\'s lungs.\n\nOne method used in less economically developed countries is the solar cooker. A shiny curved reflector concentrates the Sun\'s infrared radiation onto a dark cooking pot, heating the food or water inside. It can also be used to pasteurise water by heating it enough to kill harmful microbes. To work well, a solar cooker needs several hours of strong, direct sunshine, which is reliable in regions close to the equator but not in cloudy or high-latitude regions. Solar cookers are recommended by aid agencies for sunny areas where fuel is scarce or expensive.',
        ph: 'CLIMATE SUITABILITY:\n• Countries near the equator: ___ (sunny, ideal for solar cooking)\n• Countries with cloudy/cold climates: ___ (less reliable sunshine)\n\nHEALTH IMPACT:\n• Reducing indoor smoke from firewood: ...\n• Pasteurising water to reduce waterborne disease: ...\n\nCHALLENGES OF IMPLEMENTATION:\n• Only works in daylight / sunny weather...\n• Slow cooking time...\n• Cost and availability of cookers...\n• Changing cooking habits / public trust...\n\nCONCLUDING APPRAISAL:\nOverall, the solar cooker is (suitable / partially suitable / not suitable) for sunny LEDCs because...',
      },
    ],
  },
]
