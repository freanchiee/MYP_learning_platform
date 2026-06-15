import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2024 · VARIANT 2  (isomorphic to physics-nov-2024)
// Same construct (crit, command term, marks, task structure, widgets, tags) in a
// NEW real-world context, distinct from the source AND from variant 1.
// Self-contained data-driven artefacts (no figImages). All numbers recomputed.
//   Q1 Energy/pendulum:  wrecking ball → trapeze swing + roller-coaster drop car
//   Q2 Radioactivity:    Am-241 smoke detector → Pu-238 RTG in a space probe
//   Q3 Crit B resistance: cylinder diameter → NUMBER of resistors in series
//   Q4 Crit B design:    LDR vs distance → LDR resistance vs light intensity
//   Q5 Crit C R–T:       resistor in bead bath → copper coil in a water bath
//   Q6 Crit D energy:    water tower → solar borehole pump filling a storage tank
//   Q7 Crit D EM/dev:    UV SODIS → microwave/radio masts for rural connectivity
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2024-v2',
  subject: 'Physics',
  session: 'November',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ── Q1: Trapeze swing & Roller-coaster drop (12 marks, Crit A) ───
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Pendulum & Energy',
    marks: 12,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['gravitational potential energy', 'kinetic energy', 'conservation of energy'], level: 'proficient' },
    stem: 'A circus trapeze artist swings back and forth on a bar hanging from two ropes, behaving just like a pendulum. This repeating, to-and-fro movement is an example of periodic motion.',
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
            svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="200" fill="#ffffff"/><g><text x="75" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">A</text><circle cx="75" cy="95" r="34" fill="none" stroke="#0b7285" stroke-width="2"/><circle cx="75" cy="61" r="6" fill="#f08c00"/><path d="M75,61 A34,34 0 0 1 109,95" fill="none" stroke="#94a3ad" stroke-dasharray="3 3"/><text x="75" y="150" font-size="10" text-anchor="middle" fill="#5b6b78">planet orbiting</text></g><g><text x="225" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">B</text><path d="M195,120 q15,-60 30,0" fill="none" stroke="#0b7285" stroke-width="2"/><circle cx="232" cy="62" r="7" fill="#c0392b"/><path d="M232,62 l8,-3 l0,6 Z" fill="#c0392b"/><text x="225" y="150" font-size="10" text-anchor="middle" fill="#5b6b78">arrow fired once</text></g><g><text x="375" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">C</text><line x1="375" y1="34" x2="375" y2="70" stroke="#5b6b78"/><line x1="375" y1="70" x2="350" y2="120" stroke="#0b7285" stroke-width="2"/><line x1="375" y1="70" x2="400" y2="120" stroke="#0b7285" stroke-width="2" stroke-dasharray="3 3"/><circle cx="350" cy="120" r="9" fill="#f08c00" stroke="#a8631a"/><text x="375" y="150" font-size="10" text-anchor="middle" fill="#5b6b78">swinging trapeze</text></g><g><text x="525" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">D</text><path d="M495,95 q10,-30 20,0 q10,30 20,0" fill="none" stroke="#0b7285" stroke-width="2"/><path d="M535,95 q10,-30 20,0" fill="none" stroke="#0b7285" stroke-width="2"/><text x="525" y="150" font-size="10" text-anchor="middle" fill="#5b6b78">vibrating guitar string</text></g></svg>',
          },
          caption: 'Four movements. Three repeat regularly; one does not.',
        },
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'b',
        text: '**Select** the option that describes the kinetic energy, potential energy and speed of the trapeze at positions A (top left), B (bottom) and C (top right).',
        marks: 2,
        ph: 'Describe each position:\nPosition A: KE = ___ (min/max), PE = ___ (min/max), Speed = ___ (min/max)\nPosition B: KE = ___, PE = ___, Speed = ___\nPosition C: KE = ___, PE = ___, Speed = ___',
      },
      {
        label: 'c',
        text: 'A pendulum can be used to determine the acceleration due to gravity, g.\n\nThe period T of a pendulum is the time taken to complete one swing. T depends on the length of the pendulum L and g. It is given by the relationship: T² = 4π²L / g\n\nA pendulum used in a laboratory in Peru has a length of 84.0 cm. The time taken for 10 periods is measured to be 18.4 s.\n\n**Calculate** the acceleration due to gravity g in m s⁻² in this laboratory, giving your answer to three significant figures.',
        marks: 3,
        ph: 'Show your working:\nStep 1 — find T: T = 18.4 / 10 = ... s\nStep 2 — rearrange: g = 4π²L / T²\nStep 3 — substitute: g = 4 × π² × 0.840 / (...)²\ng = ... m s⁻² (3 s.f.)',
      },
      {
        label: 'd',
        text: 'The expected value of acceleration due to gravity at this location is 9.82 m s⁻².\n\n**Suggest** why the experimental value in part (c) is different.',
        marks: 1,
        ph: 'Suggest one reason (e.g. measurement uncertainty in T or L, environmental factor, location above sea level)...',
      },
      {
        label: 'e',
        text: 'A roller-coaster car is released from rest at the top of the first drop and rolls down to the bottom of a dip. Mass of the car and riders = 600 kg.\n\nInitially, the car is stationary at a height of 38 m. The car reaches the bottom of the dip at 3.0 m above the ground.\n\n**Calculate** the kinetic energy of the car when it reaches the bottom of the dip at 3.0 m above the ground. You should assume that the acceleration due to gravity g = 9.81 m s⁻². Give your result in kJ rounded to two significant figures.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="car2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8772e"/><stop offset="1" stop-color="#a8531a"/></linearGradient></defs><rect width="480" height="300" fill="#ffffff"/><rect x="0" y="275" width="480" height="25" fill="#cdb892"/><line x1="0" y1="275" x2="480" y2="275" stroke="#9b8757" stroke-width="2"/><text x="20" y="293" font-size="10" fill="#6b5c33">ground</text><path d="M40,50 Q60,50 80,70 Q160,200 240,250 Q320,200 400,90" fill="none" stroke="#5b6b78" stroke-width="5"/><rect x="52" y="36" width="34" height="18" rx="4" fill="url(#car2)" stroke="#7a3d12"/><circle cx="60" cy="56" r="5" fill="#2c3e50"/><circle cx="78" cy="56" r="5" fill="#2c3e50"/><text x="100" y="44" font-size="11" fill="#a8531a">600 kg</text><line x1="69" y1="54" x2="69" y2="250" stroke="#a8531a" stroke-width="1" stroke-dasharray="5 4"/><line x1="430" y1="50" x2="430" y2="275" stroke="#a8531a" stroke-width="1"/><line x1="426" y1="50" x2="434" y2="50" stroke="#a8531a"/><line x1="426" y1="275" x2="434" y2="275" stroke="#a8531a"/><text x="438" y="165" font-size="11" fill="#a8531a">38 m</text><line x1="240" y1="250" x2="240" y2="275" stroke="#3a7d44" stroke-width="1"/><line x1="236" y1="250" x2="244" y2="250" stroke="#3a7d44"/><line x1="236" y1="275" x2="244" y2="275" stroke="#3a7d44"/><text x="248" y="268" font-size="11" fill="#3a7d44">3.0 m</text></svg>',
          },
          caption: 'A roller-coaster car released from 38 m reaches the bottom of the dip at 3.0 m above the ground.',
        },
        ph: 'Show your working:\nHeight change: Δh = 38 − 3.0 = ... m\nUsing conservation of energy: KE = mgh\nKE = 600 × 9.81 × ...\nKE = ... J = ... kJ (2 s.f.)',
      },
      {
        label: 'f',
        text: '**Suggest** why the real-world kinetic energy of the roller-coaster car would be lower than the calculated value.',
        marks: 1,
        ph: 'Suggest one reason relating to energy transfer (e.g. friction, air resistance, heat, sound)...',
      },
    ],
  },

  // ── Q2: Space-probe RTG & Radioactivity (12 marks, Crit A) ───────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity',
    marks: 12,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['alpha radiation', 'radioactive decay', 'half-life'], level: 'proficient' },
    stem: 'Space probes that travel far from the Sun cannot rely on solar panels for power. Instead, many carry a radioisotope thermoelectric generator (RTG). An RTG uses the heat released by a decaying radioactive isotope to generate electricity for the spacecraft for many years.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="rtg2" cx="0.5" cy="0.5"><stop offset="0" stop-color="#f6b26b"/><stop offset="1" stop-color="#a8531a"/></radialGradient></defs><rect width="600" height="240" fill="#0b1020"/><g fill="#ffffff"><circle cx="60" cy="40" r="1.5"/><circle cx="180" cy="30" r="1"/><circle cx="320" cy="50" r="1.5"/><circle cx="520" cy="35" r="1"/><circle cx="430" cy="70" r="1.2"/></g><rect x="220" y="70" width="120" height="90" rx="6" fill="#7b8794" stroke="#cfd8de"/><circle cx="280" cy="115" r="26" fill="url(#rtg2)" stroke="#7a3d12"/><text x="280" y="119" font-size="11" text-anchor="middle" fill="#2a1606" font-weight="700">RTG</text><g stroke="#f08c00" stroke-width="2"><line x1="306" y1="100" x2="340" y2="92"/><line x1="306" y1="130" x2="340" y2="138"/></g><text x="280" y="178" font-size="11" text-anchor="middle" fill="#cfd8de">heat source</text><rect x="340" y="95" width="160" height="14" fill="#3a6ea5"/><rect x="340" y="121" width="160" height="14" fill="#3a6ea5"/><g stroke="#5b6b78" stroke-width="2"><line x1="380" y1="95" x2="380" y2="70"/><line x1="460" y1="95" x2="460" y2="70"/></g><text x="420" y="160" font-size="11" text-anchor="middle" fill="#9bb9cf">solar-less space probe</text><line x1="120" y1="115" x2="220" y2="115" stroke="#5b6b78" stroke-width="3"/><rect x="80" y="95" width="44" height="40" fill="#2c3e50" stroke="#5b6b78"/><text x="102" y="150" font-size="10" text-anchor="middle" fill="#9bb9cf">antenna</text></svg>',
      },
      caption: 'A space probe powered by a radioisotope thermoelectric generator (RTG). Heat from radioactive decay is converted to electricity.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** why a thick metal casing is placed around the radioactive source inside the RTG to protect the spacecraft\'s electronics.',
        marks: 2,
        ph: 'Explain what radiation does to nearby electronics and why shielding (the casing) protects them...\n•\n•',
      },
      {
        label: 'b',
        text: 'The RTG uses a small amount of the radioactive isotope plutonium-238. Plutonium-238 emits alpha particles.\n\n**State** two properties of alpha particles.',
        marks: 2,
        ph: 'Property 1: ...\nProperty 2: ...',
      },
      {
        label: 'c',
        text: '**Select** the equation that represents the radioactive decay of plutonium-238 in the RTG.\n\n• **A:** ²³⁸₉₄Pu → ²³⁴₉₂U + ⁴₂α\n• **B:** ²³⁴₉₂U + ⁴₂α → ²³⁸₉₄Pu\n• **C:** ²³⁸₉₄Pu → ²³⁴₉₂U + ⁰₀γ\n• **D:** ²³⁸₉₄Pu → ²³⁸₉₅Am + ⁰₋₁β',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'd',
        text: 'Plutonium-238 is an isotope of plutonium. **Select** which of the following is **not** an isotope of plutonium-238. Use scientific terminology to **justify** your answer.\n\n• **A:** ²³⁶₉₄Pu\n• **B:** ²³⁹₉₄Pu\n• **C:** ²³⁸₉₂U\n• **D:** ²⁴⁰₉₄Pu',
        marks: 2,
        ph: 'My answer is option ___.\nJustification: Isotopes of the same element must have the same ___ number (protons). Option ___ has a proton number of ___, which is different from plutonium\'s proton number of 94.',
      },
      {
        label: 'e',
        text: '**Determine** the half-life of plutonium-238 in years using the graph shown.',
        marks: 1,
        artefact: {
          component: 'DecaySim',
          data: {
            isotope: 'Pu-238',
            daughter: 'U-234',
            decayMode: 'alpha',
            halfLife: 88,
            units: 'years',
            initialCount: 10000,
            axisMax: 440,
          },
          caption: 'Number of plutonium-238 nuclei remaining against time. Drag the time marker to read off values.',
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
        text: '**Explain** why this RTG, which relies on the heat from alpha decay, would be less effective if it used an isotope that emits only beta or gamma radiation instead.',
        marks: 3,
        ph: 'Explain the normal mechanism:\n• Alpha particles are strongly ionising and are absorbed within the source, depositing their energy as heat\n\nNow explain why beta/gamma is worse:\n• Beta/gamma are ___ ionising / more penetrating than alpha...\n• Effect on how much energy is absorbed as heat in the source...\n• Therefore the electrical power produced would...',
      },
    ],
  },

  // ── Q3: Resistors-in-series Investigation (17 marks, Crit B) ─────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Electrical Resistance',
    marks: 17,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['resistance', "Ohm's law", 'series circuits'], level: 'proficient' },
    stem: 'A resistor is an electrical component that limits the flow of current in a circuit and converts electrical energy to heat. Resistance can be measured using an ohmmeter.\n\nA student is interested in studying resistance. They decide to connect identical resistors one after another in a series chain. Their research question is:\n\n"What is the relationship between the number of identical resistors connected in series and the total resistance of the chain?"',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><line x1="60" y1="120" x2="120" y2="120" stroke="#5b6b78" stroke-width="2"/><rect x="120" y="108" width="50" height="24" rx="3" fill="#f6c177" stroke="#a8631a"/><line x1="170" y1="120" x2="210" y2="120" stroke="#5b6b78" stroke-width="2"/><rect x="210" y="108" width="50" height="24" rx="3" fill="#f6c177" stroke="#a8631a"/><line x1="260" y1="120" x2="300" y2="120" stroke="#5b6b78" stroke-width="2"/><rect x="300" y="108" width="50" height="24" rx="3" fill="#f6c177" stroke="#a8631a"/><line x1="350" y1="120" x2="400" y2="120" stroke="#5b6b78" stroke-width="2"/><text x="225" y="150" font-size="11" text-anchor="middle" fill="#a8631a">identical resistors in series</text><circle cx="230" cy="55" r="26" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="230" y="60" font-size="13" font-weight="700" fill="#0b7285" text-anchor="middle">&#937;</text><line x1="60" y1="120" x2="60" y2="75" stroke="#5b6b78" stroke-width="2"/><line x1="60" y1="75" x2="206" y2="60" stroke="#5b6b78" stroke-width="2"/><line x1="400" y1="120" x2="400" y2="75" stroke="#5b6b78" stroke-width="2"/><line x1="400" y1="75" x2="254" y2="60" stroke="#5b6b78" stroke-width="2"/></svg>',
      },
      caption: 'Identical resistors connected in a series chain, with an ohmmeter reading the total resistance.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a hypothesis to test this research question.',
        marks: 2,
        ph: 'If the number of resistors in series increases, then the total resistance will ___ because...\n\n(Include a scientific reason linking series resistors to the total opposition to current)',
      },
      {
        label: 'b',
        text: '**Select** the resistors the student should use to collect appropriate data by choosing from the available resistors shown.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><text x="20" y="24" font-size="13" font-weight="700" fill="#1f2d3a">Available resistors</text><g><text x="30" y="62" font-size="12" fill="#a8631a" font-weight="700">Type X (10 Ω each)</text><rect x="220" y="48" width="44" height="20" rx="3" fill="#f6c177" stroke="#a8631a"/><rect x="280" y="48" width="44" height="20" rx="3" fill="#f6c177" stroke="#a8631a"/><rect x="340" y="48" width="44" height="20" rx="3" fill="#f6c177" stroke="#a8631a"/><rect x="400" y="48" width="44" height="20" rx="3" fill="#f6c177" stroke="#a8631a"/><rect x="460" y="48" width="44" height="20" rx="3" fill="#f6c177" stroke="#a8631a"/><text x="520" y="63" font-size="10" fill="#5b6b78">×5</text></g><g><text x="30" y="122" font-size="12" fill="#2c6c44" font-weight="700">Type Y (22 Ω each)</text><rect x="220" y="108" width="44" height="20" rx="3" fill="#9cd3a8" stroke="#2c6c44"/><rect x="280" y="108" width="44" height="20" rx="3" fill="#9cd3a8" stroke="#2c6c44"/><rect x="340" y="108" width="44" height="20" rx="3" fill="#9cd3a8" stroke="#2c6c44"/></g><g><text x="30" y="182" font-size="12" fill="#3a6ea5" font-weight="700">Type Z (47 Ω each)</text><rect x="220" y="168" width="44" height="20" rx="3" fill="#9bbbe0" stroke="#3a6ea5"/><rect x="280" y="168" width="44" height="20" rx="3" fill="#9bbbe0" stroke="#3a6ea5"/></g><text x="20" y="222" font-size="11" fill="#5b6b78">To test the research question, only identical resistors should be used.</text></svg>',
          },
          caption: 'Resistors of three types (X = 10 Ω, Y = 22 Ω, Z = 47 Ω). Only one type is needed to keep them identical.',
        },
        ph: 'I would select:\n• Type: only Type ___ (one type, all identical)\n• Number of resistors: up to ___ resistors, building chains of ___ different lengths\n• Reason: to keep the resistance of each individual resistor constant while only the NUMBER in series changes',
      },
      {
        label: 'c',
        text: '**Justify** your selection of resistors in part (b).',
        marks: 2,
        ph: 'Justify by explaining:\n1. Why only one type (identical resistors) must be selected...\n2. Why building chains of different numbers of resistors is needed (to test the RQ)...\n3. What variables are being controlled and why...',
      },
      {
        label: 'd',
        text: 'Having measured the total resistance for each chain length, the student records their data as shown in the notebook below.\n\n**Organize** and **present** the data in a table with appropriate headings and units.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="240" fill="#fffdf3" stroke="#d8cfa8"/><g stroke="#e6dcb8" stroke-width="1"><line x1="0" y1="40" x2="460" y2="40"/><line x1="0" y1="80" x2="460" y2="80"/><line x1="0" y1="120" x2="460" y2="120"/><line x1="0" y1="160" x2="460" y2="160"/><line x1="0" y1="200" x2="460" y2="200"/></g><text x="20" y="28" font-size="14" font-weight="700" fill="#4a3f1a">Lab notebook &#8212; Type X resistors</text><g font-size="14" fill="#2a2a2a"><text x="20" y="64">1 resistor &#8594; 10 &#937;</text><text x="20" y="104">2 resistors &#8594; 20 &#937;</text><text x="20" y="144">3 resistors &#8594; 30 &#937;</text><text x="20" y="184">4 resistors &#8594; 40 &#937;</text><text x="20" y="224">5 resistors &#8594; 50 &#937;</text></g></svg>',
          },
          caption: 'The student\'s raw notebook results for the five chain lengths of Type-X resistors.',
        },
        ph: 'Draw a table:\n| Number of resistors | Total resistance / Ω |\n|---------------------|----------------------|\n| 1                   | 10                   |\n| 2                   | 20                   |\n| 3                   | 30                   |\n| 4                   | 40                   |\n| 5                   | 50                   |',
      },
      {
        label: 'e',
        text: 'The student\'s lab partner wants to carry out more trials. **Suggest** how this would improve the investigation.',
        marks: 2,
        ph: 'More trials would:\n• Allow a ___ to be calculated for each chain length\n• Reduce the effect of ___ errors\n• Increase the ___ of the results',
      },
      {
        label: 'f',
        text: 'The student draws four graphs using the data from part (d). **Select** the most appropriate trend line to show the relationship between the number of resistors and the total resistance.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><g><text x="140" y="22" font-size="12" font-weight="700" text-anchor="middle">A</text><line x1="50" y1="140" x2="50" y2="40" stroke="#5b6b78"/><line x1="50" y1="140" x2="240" y2="140" stroke="#5b6b78"/><path d="M55,55 Q140,130 235,138" fill="none" stroke="#0b7285" stroke-width="2"/></g><g><text x="420" y="22" font-size="12" font-weight="700" text-anchor="middle">B</text><line x1="330" y1="140" x2="330" y2="40" stroke="#5b6b78"/><line x1="330" y1="140" x2="520" y2="140" stroke="#5b6b78"/><line x1="335" y1="135" x2="515" y2="55" stroke="#0b7285" stroke-width="2"/></g><g><text x="140" y="182" font-size="12" font-weight="700" text-anchor="middle">C</text><line x1="50" y1="300" x2="50" y2="200" stroke="#5b6b78"/><line x1="50" y1="300" x2="240" y2="300" stroke="#5b6b78"/><line x1="50" y1="298" x2="232" y2="212" stroke="#0b7285" stroke-width="2"/><circle cx="86" cy="281" r="3" fill="#c0392b"/><circle cx="122" cy="264" r="3" fill="#c0392b"/><circle cx="158" cy="247" r="3" fill="#c0392b"/><circle cx="194" cy="230" r="3" fill="#c0392b"/><circle cx="230" cy="213" r="3" fill="#c0392b"/></g><g><text x="420" y="182" font-size="12" font-weight="700" text-anchor="middle">D</text><line x1="330" y1="300" x2="330" y2="200" stroke="#5b6b78"/><line x1="330" y1="300" x2="520" y2="300" stroke="#5b6b78"/><path d="M335,215 Q420,300 515,298" fill="none" stroke="#0b7285" stroke-width="2"/></g></svg>',
          },
          caption: 'Four candidate trend lines (A: rising curve, B: rising straight line, C: rising straight line through origin and data, D: falling curve).',
        },
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'g',
        text: 'The student wishes to extend the investigation using the same materials and equipment available in parts (a) and (b). The dependent variable will be resistance.\n\n**State** an appropriate research question, independent variable, and one control variable for this extension.',
        marks: 3,
        ph: 'Research question: How does ___ affect the resistance of the chain?\nIndependent variable: ___\nControl variable: ___ (kept constant because...)',
      },
    ],
  },

  // ── Q4: LDR (light-intensity) Investigation Design (14 marks, Crit B) ─
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Light Dependent Resistor',
    marks: 14,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['resistance', 'parallel circuits', 'measuring current and voltage'], level: 'proficient' },
    stem: 'The resistance of a light-dependent resistor (LDR) depends on the brightness of the light falling on its light-sensitive surface. LDRs are used in automatic street lights and camera light meters. A student predicts:\n\n"If the light intensity falling on an LDR increases, then the resistance of the LDR will decrease."',
    tasks: [
      {
        label: 'a',
        text: '**State** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'How does the ___ of light falling on the LDR affect the ___ of the LDR?',
      },
      {
        label: 'b',
        text: 'The student uses a dimmable lamp as a light source, a light meter to measure the light intensity in lux, and an ohmmeter to measure the resistance.\n\n**Design** an investigation the student could use to test their prediction. In your answer, you should include:\n\n• the independent variable and dependent variable\n• two control variables and a justification of why they should be controlled\n• a list of equipment\n• a detailed method for how you will collect data\n• an explanation of how you will collect sufficient data.',
        marks: 13,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="lamp4" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="520" height="260" fill="#ffffff"/><circle cx="90" cy="100" r="28" fill="url(#lamp4)" stroke="#c79a10"/><text x="90" y="148" font-size="11" text-anchor="middle" fill="#9a7d0f">dimmable lamp</text><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="130" y1="88" x2="240" y2="100"/><line x1="130" y1="100" x2="240" y2="112"/><line x1="130" y1="112" x2="240" y2="124"/></g><rect x="240" y="92" width="40" height="36" rx="4" fill="#3a3f44" stroke="#1f2d3a"/><text x="260" y="148" font-size="10" text-anchor="middle" fill="#41295a">LDR</text><rect x="300" y="96" width="48" height="28" rx="3" fill="#222"/><text x="324" y="114" font-size="9" fill="#3ad36a" text-anchor="middle" font-family="monospace">lux</text><text x="324" y="148" font-size="10" text-anchor="middle" fill="#5b6b78">light meter</text><circle cx="420" cy="110" r="30" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="420" y="115" font-size="15" font-weight="700" fill="#0b7285" text-anchor="middle">&#937;</text><line x1="270" y1="124" x2="396" y2="120" stroke="#5b6b78"/><line x1="270" y1="128" x2="400" y2="135" stroke="#5b6b78"/></svg>',
          },
          caption: 'Apparatus: a dimmable lamp shines on an LDR, with a light meter (lux) and an ohmmeter.',
        },
        ph: 'VARIABLES:\nIndependent variable: light intensity falling on the LDR (lux)\nDependent variable: resistance of LDR (Ω, measured by ohmmeter)\nControl variable 1: ___ — because if this changes, it would also affect the resistance...\nControl variable 2: ___ — because...\n\nEQUIPMENT:\n•\n•\n•\n\nMETHOD:\n1. Set up the lamp shining on the LDR with the light meter alongside it.\n2. Set the lamp to a chosen brightness so the light meter reads ___ lux.\n3. Record the resistance shown on the ohmmeter.\n4. Change the brightness to the next intensity (___ lux) and repeat...\n\nSUFFICIENT DATA:\n• Range of intensities: ___ lux to ___ lux\n• Intervals: every ___ lux (___ data points)\n• Repeats: ___ trials per intensity (to calculate mean)',
      },
    ],
  },

  // ── Q5: Copper Coil Resistance vs Temperature (19 marks, Crit C) ─
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Resistance & Temperature',
    marks: 19,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['resistance', "Ohm's law", 'measuring current and voltage'], level: 'proficient' },
    stem: 'Another student decides to investigate the effect of varying the temperature of a copper coil on its resistance. Instead of using an ohmmeter, this student measures current in order to calculate resistance. The supply voltage is kept constant throughout the investigation. The temperature of the coil is modified by immersing it in a temperature-controlled water bath.\n\nThe student\'s research question is: "How does the temperature of a copper coil affect the current in a circuit?"',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bath5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="520" height="260" fill="#ffffff"/><rect x="120" y="100" width="180" height="120" rx="6" fill="none" stroke="#5b6b78" stroke-width="2"/><rect x="124" y="135" width="172" height="81" fill="url(#bath5)"/><text x="210" y="180" font-size="11" text-anchor="middle" fill="#2c5468">water bath</text><g stroke="#b87333" stroke-width="3" fill="none"><path d="M170,150 q10,-12 20,0 q10,12 20,0 q10,-12 20,0 q10,12 20,0"/></g><text x="210" y="205" font-size="9" text-anchor="middle" fill="#8a5320">copper coil</text><line x1="150" y1="100" x2="150" y2="200" stroke="#d6342c" stroke-width="5"/><circle cx="150" cy="206" r="8" fill="#d6342c"/><text x="124" y="92" font-size="9" fill="#7a1d12">thermometer</text><rect x="350" y="60" width="120" height="40" rx="4" fill="#fafafa" stroke="#5b6b78"/><text x="410" y="78" font-size="10" text-anchor="middle" fill="#5b6b78">constant-voltage</text><text x="410" y="92" font-size="10" text-anchor="middle" fill="#5b6b78">supply, 12 V</text><circle cx="400" cy="150" r="24" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="400" y="155" font-size="13" font-weight="700" fill="#0b7285" text-anchor="middle">A</text><line x1="240" y1="150" x2="376" y2="150" stroke="#5b6b78"/><line x1="410" y1="100" x2="410" y2="128" stroke="#5b6b78"/></svg>',
      },
      caption: 'A copper coil in a temperature-controlled water bath. A constant 12 V supply drives the current, which is measured by an ammeter.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Measure** the temperature of the water bath shown in the image.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="200" height="300" fill="#ffffff"/><rect x="86" y="30" width="28" height="220" rx="12" fill="#f4f7f9" stroke="#5b6b78" stroke-width="2"/><circle cx="100" cy="262" r="20" fill="#d6342c" stroke="#9b1d14"/><rect x="92" y="150" width="16" height="115" fill="#d6342c"/><g stroke="#1f2d3a" stroke-width="1.5"><line x1="114" y1="60" x2="130" y2="60"/><line x1="114" y1="90" x2="124" y2="90"/><line x1="114" y1="120" x2="130" y2="120"/><line x1="114" y1="150" x2="124" y2="150"/><line x1="114" y1="180" x2="130" y2="180"/><line x1="114" y1="210" x2="124" y2="210"/><line x1="114" y1="240" x2="130" y2="240"/></g><g font-size="12" fill="#1f2d3a" font-weight="700"><text x="136" y="64">80</text><text x="136" y="124">60</text><text x="136" y="184">40</text><text x="136" y="244">20</text></g><text x="100" y="290" font-size="12" text-anchor="middle" fill="#5b6b78">°C</text></svg>',
          },
          caption: 'The thermometer scale. Read the temperature where the red liquid ends, between the 40 and 60 marks.',
        },
        ph: 'Read the thermometer carefully between the 40 and 60 graduation marks.\nTemperature = ___ °C',
      },
      {
        label: 'b',
        text: '**Draw** a diagram of the circuit used by the student. You do not need to include a water bath in your diagram.\n\nDescribe the circuit components and how they are connected.',
        marks: 3,
        ph: 'Circuit description:\n• Battery/power supply (constant 12 V)\n• Copper coil (connected in series)\n• Ammeter (in series, to measure current)\n• Voltmeter (in parallel across the coil)\n\nDescribe using words or standard symbol names:\nThe supply connects in series with the ammeter and coil. The voltmeter is connected in parallel (across) the coil.',
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation by classifying each of the following as Independent (IV), Dependent (DV), or Control (CV):\n\n• Temperature of the coil\n• Length of the coil wire\n• Current in the circuit\n• Diameter of the coil wire\n• Voltage across the coil',
        marks: 3,
        ph: 'Independent variable (what you change): ___\nDependent variable (what you measure): ___\nControl variables (kept constant):\n  • ___\n  • ___\n  • ___',
      },
      {
        label: 'd',
        text: '**Identify** a safety issue that the student should have considered when planning this investigation.',
        marks: 1,
        ph: 'Safety issue: e.g. hot water / steam / scalds, electrical hazards, burns from hot equipment...',
      },
      {
        label: 'e',
        text: 'The student predicts: "As the temperature of the copper coil increases, the current through the coil will decrease. I predict that there will be an **inversely proportional** relationship between the variables."\n\nThe graph of their results is shown below.\n\nUse data from the graph and a calculation to **explain** whether the student\'s prediction is supported.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'temperature / °C',
            yLabel: 'current / mA',
            points: [[20, 400], [40, 320], [60, 270], [80, 235], [100, 210]],
            readouts: [{ x: 20, note: 'read I at 20 °C' }, { x: 100, note: 'read I at 100 °C' }],
            dataMaxX: 100,
          },
          caption: 'Current–temperature graph for the copper coil (drag the crosshair to read values).',
        },
        ph: 'To test inverse proportion: check if I × T = constant for all data points.\nFrom the graph:\n• At T = 20 °C, I ≈ ___ mA → product = ___\n• At T = 100 °C, I ≈ ___ mA → product = ___\nAre the products constant? ___\nConclusion: The prediction is (supported / not supported) because...',
      },
      {
        label: 'f',
        text: 'Having measured the current and voltage, additional processing is required to find the relationship between temperature and resistance. The voltage was kept constant at 12 V.\n\nUsing the graph in part (e) and information from the formula sheet, **calculate** the missing resistance value for the data shown at 50 °C.',
        marks: 2,
        ph: 'Read the current at 50 °C from the graph: I ≈ ___ mA = ___ A\nFormula: R = V / I\nR = 12 / ___ = ___ Ω\n(Round to nearest whole number)',
      },
      {
        label: 'g',
        text: 'The graph below shows the processed data (temperature vs resistance). **Plot** the data point you determined in part (f) and **draw** a line of best fit on the graph.\n\nAxes: x-axis = Temperature / °C (0 to 100), y-axis = Resistance / Ω (0 to 60)',
        marks: 2,
        ph: 'Data point to plot: (50 °C, ___ Ω) [your calculated value from part f]\n\nLine of best fit:\n• Draw a straight line that passes close to all the data points\n• The line should rise (resistance increases with temperature for a metal)\n• Extend slightly beyond the data range in both directions',
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
        text: 'The student calculated that the resistance would be 400 Ω when the temperature was 1200 °C.\n\n**Comment** on the validity of this calculation.',
        marks: 2,
        ph: 'Comment on two issues:\n1. Extrapolation: This temperature is far beyond the data range (data only goes to ___ °C). The linear relationship may not continue...\n2. Physical limitations: At 1200 °C, the copper coil would... (e.g. melt — copper melts at ~1085 °C).',
      },
    ],
  },

  // ── Q6: Solar Borehole Pump & Clean Water Access (13 marks, Crit D) ─
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Energy & Development',
    marks: 13,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['energy sources (renewable vs non-renewable)', 'energy efficiency'], level: 'advanced' },
    stem: 'Different communities around the world do not have equal access to clean water, and this is a challenge for fair development.\n\nA solar-powered borehole pump is used in many dry rural regions. Solar panels power an electric pump that lifts groundwater from deep underground into a raised storage tank. The stored water can then flow by gravity to taps around the village.\n\nThe image below shows a solar borehole scheme in rural Kenya with a storage tank that holds 9 200 m³ of water, raised to a height of 38 m above the ground.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="tank6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient><linearGradient id="sky6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dff0fb"/><stop offset="1" stop-color="#f3e6c4"/></linearGradient></defs><rect width="600" height="320" fill="url(#sky6)"/><rect x="0" y="270" width="600" height="50" fill="#d8b87a"/><line x1="0" y1="270" x2="600" y2="270" stroke="#b5965a" stroke-width="2"/><circle cx="510" cy="50" r="26" fill="#f6c83c" stroke="#c79a10"/><g stroke="#f6c83c" stroke-width="2"><line x1="510" y1="14" x2="510" y2="2"/><line x1="546" y1="50" x2="558" y2="50"/><line x1="535" y1="25" x2="544" y2="16"/></g><rect x="380" y="200" width="80" height="45" rx="3" fill="#2b3a67" stroke="#0b1f3a"/><g stroke="#5b76d6" stroke-width="1"><line x1="400" y1="200" x2="400" y2="245"/><line x1="420" y1="200" x2="420" y2="245"/><line x1="440" y1="200" x2="440" y2="245"/></g><text x="420" y="262" font-size="10" text-anchor="middle" fill="#2b3a67">solar panel</text><rect x="120" y="70" width="110" height="70" rx="6" fill="url(#tank6)" stroke="#3f7e98"/><text x="175" y="100" font-size="11" text-anchor="middle" fill="#1f4a5c">storage tank</text><text x="175" y="120" font-size="10" text-anchor="middle" fill="#2c5468">9 200 m&#179;</text><line x1="175" y1="140" x2="175" y2="270" stroke="#7b8794" stroke-width="6"/><rect x="160" y="270" width="30" height="20" fill="#5b6b78"/><text x="175" y="305" font-size="9" text-anchor="middle" fill="#5b6b78">pump + borehole</text><line x1="270" y1="70" x2="270" y2="270" stroke="#a8531a" stroke-width="1"/><line x1="266" y1="70" x2="274" y2="70" stroke="#a8531a"/><line x1="266" y1="270" x2="274" y2="270" stroke="#a8531a"/><text x="278" y="175" font-size="11" fill="#a8531a">38 m</text></svg>',
      },
      caption: 'A solar borehole scheme. Solar panels power a pump that lifts groundwater 38 m into a raised storage tank.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the work done to lift this volume of water from ground level up to the storage tank. You should assume that g = 9.81 N kg⁻¹ and the density of water = 1000 kg m⁻³. Give your answer in standard form to two significant figures.',
        marks: 3,
        ph: 'Show your working:\nVolume = 9 200 m³\nMass = density × volume = 1000 × 9 200 = ___ kg\nW = mgh = ___ × 9.81 × 38\nW = ___ J ≈ ___ × 10⁹ J (2 s.f.)',
      },
      {
        label: 'b',
        text: 'In many dry regions, people must walk for hours to collect water from distant rivers or ponds. It is estimated that around two billion people worldwide lack a safely managed water source, and a large share of the work of collecting water falls on women and girls.\n\n**Suggest** why the need to collect water is a barrier to development for the people that live in these regions.',
        marks: 1,
        ph: 'Suggest one reason (e.g. time lost from education / work / economic activity, physical burden on women and girls, health impacts)...',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** installing a solar borehole pump for a remote village community.\n\nIn your answer, you should include:\n• the benefits to health that are associated with access to clean, drinkable water\n• the ethical advantages and disadvantages of asking the villagers to pay a small fee to access the clean water\n• a concluding appraisal giving your opinion on how the charity should ensure a long-term solution to water access for the village.',
        marks: 9,
        passage: 'The United Nations (UN) Sustainable Development Goal for clean water and sanitation calls for fair and universal access to safe and affordable drinking water by 2030. However, this is a significant global challenge.\n\nIt is estimated that around two billion people worldwide do not have access to water that is safe to drink. Around 1.4 million people die each year, and many more have their lives shortened, due to diseases caused by drinking unclean water. In the most affected regions, families rely on manual water collection from distant and often dirty sources, with women and girls bearing a disproportionate share of this burden.\n\nA solar borehole pump draws clean groundwater from deep under the ground using free solar energy, with no fuel cost and no greenhouse-gas emissions. The charity wants to install a solar borehole pump for a village to improve access to clean water. They want to make sure that the pump will remain usable for a long time. A recent study found that charging households a small fee to use the pump can fund spare parts and train a local technician, so the system remains usable for a long time.',
        ph: 'BENEFITS TO HEALTH (access to clean water):\n•\n•\n\nETHICAL ANALYSIS (fee to use pump):\nAdvantage of charging a fee: ...\nDisadvantage of charging a fee: ...\n\nCONCLUDING APPRAISAL:\nOverall, I think the charity should... because...',
      },
    ],
  },

  // ── Q7: Rural Connectivity & Microwave/Radio (13 marks, Crit D) ──
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'EM Radiation & Development',
    marks: 13,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'em-spectrum', topics: ['electromagnetic spectrum overview', 'uses and hazards of EM radiation'], level: 'advanced' },
    stem: 'Access to mobile phone and internet connections is very unequal around the world.\n\nIn more economically developed countries, dense networks of mobile masts and fibre cables give almost everyone fast internet. However, less economically developed countries, especially in remote rural areas, often have little or no coverage.\n\nOne solution is to install solar-powered mobile masts. These masts use microwaves and radio waves to carry calls and internet data to and from mobile phones. A single mast can connect a whole village, allowing people to access mobile banking, weather forecasts for farming, online learning, and telemedicine (medical advice by video call). Masts are recommended for remote regions where laying cables would be too expensive.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="hill7" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cbe3a8"/><stop offset="1" stop-color="#9bbf7a"/></linearGradient></defs><rect width="560" height="280" fill="#eef6fb"/><path d="M0,220 L560,220 L560,280 L0,280 Z" fill="url(#hill7)"/><line x1="120" y1="60" x2="120" y2="220" stroke="#5b6b78" stroke-width="4"/><line x1="120" y1="60" x2="100" y2="220" stroke="#9aa3ab" stroke-width="1"/><line x1="120" y1="60" x2="140" y2="220" stroke="#9aa3ab" stroke-width="1"/><rect x="108" y="40" width="24" height="22" fill="#3a3f44"/><g stroke="#0b7285" stroke-width="2" fill="none"><path d="M150,50 a30,30 0 0 1 0,42"/><path d="M165,42 a48,48 0 0 1 0,58"/><path d="M180,34 a66,66 0 0 1 0,74"/><path d="M90,50 a30,30 0 0 0 0,42"/><path d="M75,42 a48,48 0 0 0 0,58"/></g><text x="240" y="58" font-size="11" fill="#0b7285">microwave &amp; radio signals</text><rect x="380" y="170" width="34" height="50" rx="4" fill="#2b3a67"/><rect x="386" y="178" width="22" height="30" rx="2" fill="#5b76d6"/><text x="397" y="240" font-size="10" text-anchor="middle" fill="#2b3a67">phone</text><rect x="60" y="240" width="60" height="30" fill="#c9a06a" stroke="#8a6a3a"/><rect x="180" y="244" width="55" height="26" fill="#c9a06a" stroke="#8a6a3a"/><text x="150" y="266" font-size="10" text-anchor="middle" fill="#6b4f28">village</text></svg>',
      },
      caption: 'A solar-powered mobile mast. It uses microwaves and radio waves to connect phones in a remote village.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the region where microwaves are found in the electromagnetic spectrum shown below.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['1', '2', '3', '4'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="160" fill="#ffffff"/><text x="20" y="28" font-size="12" fill="#5b6b78">long wavelength</text><text x="580" y="28" font-size="12" text-anchor="end" fill="#5b6b78">short wavelength</text><g><rect x="40" y="50" width="105" height="46" fill="#7a4fb5"/><rect x="145" y="50" width="105" height="46" fill="#3a6ea5"/><rect x="250" y="50" width="105" height="46" fill="#0b7285"/><rect x="355" y="50" width="105" height="46" fill="#3a7d44"/><rect x="460" y="50" width="100" height="46" fill="#a8531a"/></g><g font-size="11" fill="#fff" text-anchor="middle" font-weight="700"><text x="92" y="78">Radio</text><text x="197" y="78">?  ?  ?</text><text x="302" y="78">Infrared</text><text x="407" y="78">Visible</text><text x="510" y="78">X-rays</text></g><g font-size="13" fill="#1f2d3a" text-anchor="middle" font-weight="700"><text x="92" y="120">1</text><text x="197" y="120">2</text><text x="302" y="120">3</text><text x="407" y="120">4</text></g><text x="300" y="148" font-size="11" text-anchor="middle" fill="#5b6b78">Which numbered region lies between radio waves and infrared?</text></svg>',
          },
          caption: 'A simplified electromagnetic spectrum, ordered from long to short wavelength.',
        },
        ph: 'Select 1, 2, 3, or 4',
      },
      {
        label: 'b',
        text: '**State** the property of microwaves and radio waves that makes them useful for carrying mobile phone signals over long distances to a village.',
        marks: 1,
        ph: 'Microwaves and radio waves can travel ___ through the air/atmosphere (long range, low absorption), which allows them to...',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** the use of solar-powered mobile masts to bring mobile and internet connectivity to people in less economically developed countries.\n\nIn your answer, you should include:\n• information about the suitability of different less economically developed regions for solar-powered masts\n• the likely impact on the health, education and economy of the villagers\n• the challenges of implementing the masts\n• a concluding appraisal of whether solar-powered masts are a suitable technology.',
        marks: 11,
        passage: 'Access to mobile phone and internet connections is very unequal around the world.\n\nIn more economically developed countries, dense networks of mobile masts and fibre cables give almost everyone fast internet. However, less economically developed countries, especially in remote rural areas, often have little or no coverage.\n\nOne solution is to install solar-powered mobile masts. These masts use microwaves and radio waves to carry calls and internet data to and from mobile phones. A single mast can connect a whole village, allowing people to access mobile banking, weather forecasts for farming, online learning, and telemedicine (medical advice by video call). Solar power means the masts need no fuel and no mains grid, which suits sunny regions, but in very cloudy areas a battery backup is needed. Installing and maintaining masts in remote areas is expensive and requires trained technicians, and not everyone can afford a phone or the cost of data.',
        ph: 'REGION / CLIMATE SUITABILITY:\n• Sunny remote regions: ___ (solar power reliable, good for masts)\n• Very cloudy regions: ___ (battery backup needed, less reliable)\n\nIMPACT (health, education, economy):\n• Telemedicine and health advice: ...\n• Online learning and education: ...\n• Mobile banking and markets for farmers: ...\n\nCHALLENGES OF IMPLEMENTATION:\n• Cost of installing and maintaining masts...\n• Need for trained technicians...\n• Cost of phones and data for villagers...\n• Cloudy weather / battery backup...\n\nCONCLUDING APPRAISAL:\nOverall, solar-powered masts are (suitable / partially suitable / not suitable) for remote LEDC regions because...',
      },
    ],
  },
]
