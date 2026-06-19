import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2021',
  subject: 'Physics',
  session: 'May',
  year: 2021,
  totalMarks: 98,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Electromagnetic Waves: Radio Communication (8 marks) Criterion A/D
  // Context: Marconi's first radio transmission across open sea (1897)
  // Numbers changed: distance 6 km → 7 km; time = 7000/(3×10⁸) = 2.33×10⁻⁵ s
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Electromagnetic Waves',
    marks: 8,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'em-spectrum', topics: ['radio waves', 'electromagnetic spectrum', 'speed of waves', 'diffraction'], level: 'proficient' },
    stem: 'At the end of the 19th century, physicists considered radio waves to be like an invisible form of light. In 1897, Marconi sent the first radio message across open sea — a message saying "are you ready" was transmitted over the sea.',
    artefact: {
      component: 'WaveSim',
      data: {
        mode: 'wave',
        title: 'A radio wave travelling across the sea',
        freq: 0.6,
        amplitude: 1.2,
        windowSeconds: 4,
        source: 'Radio waves are part of the electromagnetic spectrum and travel at the speed of light in a vacuum.',
      },
      caption: 'Radio waves are electromagnetic waves. Drag the frequency and amplitude sliders to see how the waveform changes; the period and frequency readouts update live.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct option to complete the statements below.\n\n- Radio waves travel **[? → faster than / slower than / at the same speed as]** light waves in a vacuum.\n- Radio waves have **[? → a longer wavelength than / a shorter wavelength than / the same wavelength as]** light waves.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetOptions: ['faster than', 'slower than', 'at the same speed as', 'a longer wavelength than', 'a shorter wavelength than', 'the same wavelength as'],
        widgetItems: ['Speed comparison', 'Wavelength comparison'],
        ph: 'at the same speed as | a longer wavelength than',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'One advantage of sending messages using radio waves is that the waves can bend around obstacles. An animation shows waves bending around a hill to reach a receiver behind it.\n\n**Select** the phenomenon shown in the animation.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Reflection', 'B. Diffraction', 'C. Refraction', 'D. Interference'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><rect x="0" y="230" width="560" height="50" fill="#e7eef2"/><path d="M150,230 Q230,90 330,230 Z" fill="#8a7a5c" stroke="#5b4f3a" stroke-width="2"/><text x="240" y="222" font-size="12" text-anchor="middle" fill="#5b4f3a">hill</text><g stroke="#0b7285" stroke-width="2.5" fill="none"><path d="M30,150 q14,-22 0,-44"/><path d="M52,150 q14,-22 0,-44"/><path d="M74,150 q14,-22 0,-44"/><path d="M96,150 q14,-22 0,-44"/></g><text x="40" y="100" font-size="11" fill="#0b7285">transmitter</text><circle cx="40" cy="128" r="6" fill="#0b7285"/><g stroke="#0b7285" stroke-width="2" fill="none" opacity="0.85"><path d="M330,150 q40,40 60,90"/><path d="M345,135 q48,48 70,100"/><path d="M360,120 q56,56 80,110"/></g><circle cx="470" cy="250" r="8" fill="#c0392b"/><text x="470" y="232" font-size="11" text-anchor="middle" fill="#c0392b">receiver</text><text x="280" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Waves spreading around an obstacle</text></svg>',
          },
          caption: 'Radio waves spread out and bend around the hill to reach the receiver behind it.',
        },
        ph: 'B',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'Marconi sent a radio message over a distance of **7 km**. **Calculate** the time taken for Marconi\'s message to travel 7 km. You should take the speed of radio waves in air to be **3.0 × 10⁸ m s⁻¹**. Give your answer in **scientific notation**.',
        marks: 3,
        ph: 'Convert: 7 km = 7000 m\nt = d/v = 7000 / (3.0 × 10⁸)\n= 2.333... × 10⁻⁵ s\n≈ **2.3 × 10⁻⁵ s**',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Suggest** two reasons why communication using radio waves was such an important discovery.',
        marks: 2,
        ph: 'Any two of:\n- Able to communicate while moving (e.g. boats, aircraft)\n- Communication over larger distances or with other countries / previously inaccessible locations\n- High speed communication is possible\n- No failures of wired connections; saves material and money required for wired connections\n- Led to the development of new technologies (e.g. television, mobile phones, radar)',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Radioactivity & Nuclear Medicine (9 marks) Criterion A
  // Context: Copper-67 isotope used in cancer treatment
  // Numbers changed: half-life reading from graph ~62 h (from 60 h)
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Physics',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'radioactive decay', 'half-life', 'nuclear medicine'], level: 'proficient' },
    stem: 'Copper is a chemical element used as a conductor of heat and electricity. It has an atomic number of 29 and a mass number of 63. Copper has many isotopes, some stable and some unstable. The unstable copper-67 isotope decays by emitting beta and gamma radiation.',
    artefact: {
      component: 'DecaySim',
      data: {
        title: 'Radioactive decay of copper-67',
        isotope: 'Cu-67',
        daughter: 'Zn-67',
        decayMode: 'beta',
        halfLife: 62,
        units: 'h',
        initialMass: 100,
        massUnits: 'g',
        axisMax: 248,
        xAxis: 'Time / h',
        yAxis: 'Mass of copper-67 / g',
      },
      caption: 'How the mass of a 100 g sample of copper-67 falls with time. Play or drag the time marker to find the half-life — the time for the mass to halve.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct option to complete the following sentences about an atom of copper:\n\n- 29 is the **[Select]** in the nucleus.\n- 63 is the **[Select]** in the nucleus.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetOptions: ['atomic number', 'mass number', 'number of protons', 'number of neutrons', 'number of nucleons'],
        widgetItems: ['29 is the', '63 is the'],
        ph: 'number of protons (atomic number) | mass number (number of nucleons)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The three images below show the path of beta radiation emitted by copper-67 moving through an electric field.\n\n**Select** the image that shows the path of beta radiation emitted by copper-67. **Justify** your answer.',
        marks: 3,
        artefact: {
          component: 'FieldSim',
          data: {
            title: 'Beta radiation in an electric field',
            field: 'E',
            plates: { top: 'Positive plate (+)', bottom: 'Negative plate (−)' },
            particles: [
              { name: 'beta (−)', charge: -1 },
              { name: 'alpha (+)', charge: 1 },
              { name: 'gamma (0)', charge: 0 },
            ],
            particle: 'beta',
            expected: 'Beta particles are negatively charged electrons, so they are attracted to the positive plate and deflect towards it.',
          },
          caption: 'Fire the beta particle through the field. Being negatively charged, it bends towards the positive plate.',
        },
        ph: 'Select: image C (beta particles deflected towards the positive plate).\nJustification: Beta particles are electrons, which are negatively charged. Negatively charged particles are attracted to the positive plate, so they are deflected towards the positive plate in an electric field.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The graph below shows how the mass of copper-67 changes with time. Use the graph to **determine** the half-life of copper-67.',
        marks: 2,
        artefact: {
          component: 'DecaySim',
          data: {
            title: 'Mass of copper-67 against time',
            isotope: 'Cu-67',
            daughter: 'Zn-67',
            decayMode: 'beta',
            halfLife: 62,
            units: 'h',
            initialMass: 100,
            massUnits: 'g',
            axisMax: 248,
            xAxis: 'Time / h',
            yAxis: 'Mass of copper-67 / g',
          },
          caption: 'Drag the marker until the mass reads 50 g (half of 100 g); the elapsed-time readout gives the half-life.',
        },
        ph: 'From the graph: start with initial mass (e.g. 100 g). Find the time when it halves to 50 g.\nHalf-life = approximately **62 h** (accept any value within range 60 ± 2 h)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The copper-67 isotope is used in medicine either as a radioactive drug inside the body or as an external source of radiation.\n\n**Suggest** why the half-life and the combination of beta and gamma emissions of copper-67 make it useful to treat medical conditions such as cancer.',
        marks: 2,
        ph: 'Half-life: The half-life (≈60 h) is short enough to limit long-term radioactive exposure in the body, but long enough to allow treatment to be effective.\n\nBeta/gamma emissions: Beta and gamma radiation can penetrate tissue and kill cancer cells or tumours directly. Both types cause ionisation that damages or destroys cancer cells.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Kinetic Energy & Hybrid Cars (11 marks) Criterion A
  // Context: Energy transformations in hybrid cars; regenerative braking
  // Numbers changed: car mass = 1600 kg (from 1500 kg); speed = 22 m/s (from 25 m/s); braking distance = 25 m
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power',
    marks: 11,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'deceleration', 'energy transformation', 'hybrid vehicles'], level: 'proficient' },
    stem: 'Energy transformations occur in moving cars. Hybrid cars use a combination of fuel and electrical power to provide their kinetic energy. These kinds of cars are designed to be more fuel efficient.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Quantity', 'Symbol', 'Value'],
        rows: [
          ['Mass of car', 'm', '1600 kg'],
          ['Speed before braking', 'v', '22 m s⁻¹'],
          ['Braking distance', 'd', '25 m'],
          ['Speed after braking', 'u', '0 m s⁻¹'],
        ],
      },
      caption: 'Data for the hybrid car used in this question. Read the values you need for each calculation from this table.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the kinetic energy of a **1600 kg** car moving at **22 m s⁻¹**.',
        marks: 2,
        ph: 'KE = ½mv²\n= ½ × 1600 × 22²\n= ½ × 1600 × 484\n= 800 × 484\n= **387 200 J** (≈ 387 kJ)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'When the driver of the car hits the brakes, the car slows down to a complete stop. The braking distance is **25 m**.\n\n**Calculate** the average deceleration of the car during braking. Give your answer to **3 significant figures**.',
        marks: 4,
        ph: 'Use v² = u² + 2as\n0 = 22² + 2 × a × 25\n0 = 484 + 50a\n50a = −484\na = −484/50 = **−9.68 m s⁻²** (to 3 s.f.)\n\nOr: using KE = work done → ½mv² = F × d → F = KE/d → a = F/m',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'In petrol cars the brakes slow down the car by transforming all the kinetic energy of the car into heat energy.\n\n**State** why the heat energy produced during braking is considered to be wasted energy.',
        marks: 1,
        ph: 'Heat energy cannot be used by the car to perform useful work (it cannot be converted back to kinetic energy to drive the car forward).',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'Regenerative brakes are a feature of hybrid cars. During regenerative braking, some of the energy wasted as heat is used to recharge the car\'s battery instead.\n\nThe diagram below shows the energy transformations that would take place in a hybrid car during braking. **Select** the correct energy forms to complete the diagram.\n\nKinetic energy → **[?]** → Electrical energy → **[?]** → Thermal energy',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 720 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ce" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#3a6ea5"/></marker></defs><rect width="720" height="130" fill="#ffffff"/><g font-size="12" text-anchor="middle"><rect x="10" y="50" width="110" height="44" rx="6" fill="#dfeaf5" stroke="#3a6ea5"/><text x="65" y="68" fill="#1f2d3a">Kinetic</text><text x="65" y="84" fill="#1f2d3a">energy</text><rect x="160" y="50" width="110" height="44" rx="6" fill="#fff7e0" stroke="#c79a10" stroke-dasharray="5 4"/><text x="215" y="76" fill="#9a7d0f" font-style="italic">?</text><rect x="310" y="50" width="110" height="44" rx="6" fill="#dfeaf5" stroke="#3a6ea5"/><text x="365" y="68" fill="#1f2d3a">Electrical</text><text x="365" y="84" fill="#1f2d3a">energy</text><rect x="460" y="50" width="120" height="44" rx="6" fill="#fff7e0" stroke="#c79a10" stroke-dasharray="5 4"/><text x="520" y="76" fill="#9a7d0f" font-style="italic">?</text><rect x="620" y="50" width="92" height="44" rx="6" fill="#dfeaf5" stroke="#3a6ea5"/><text x="666" y="68" fill="#1f2d3a">Thermal</text><text x="666" y="84" fill="#1f2d3a">energy</text></g><g stroke="#3a6ea5" stroke-width="2.5"><line x1="120" y1="72" x2="156" y2="72" marker-end="url(#ce)"/><line x1="270" y1="72" x2="306" y2="72" marker-end="url(#ce)"/><line x1="420" y1="72" x2="456" y2="72" marker-end="url(#ce)"/><line x1="580" y1="72" x2="616" y2="72" marker-end="url(#ce)"/></g><text x="360" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Energy transformation chain during regenerative braking</text></svg>',
          },
          caption: 'The two dashed boxes are the energy forms you must select to complete the chain.',
        },
        widget: 'energy_chain',
        ph: 'Kinetic energy → Kinetic energy (or mechanical) → Electrical energy → Chemical potential energy → Thermal energy\n(All correct for 1 mark)',
        level: 'foundation',
      },
      {
        label: 'e',
        text: '**Suggest** why regenerative braking helps the hybrid car to use less fuel than a petrol car.',
        marks: 1,
        ph: 'During regenerative braking, the kinetic energy of the car is converted to electrical energy which is stored as chemical potential energy in the battery. This stored energy can then be used to drive the car, reducing the amount of fuel needed.',
        level: 'developing',
      },
      {
        label: 'f',
        text: '**Outline** why reducing the amount of fuel required by cars is an issue of global significance.',
        marks: 2,
        ph: 'Burning fuel produces carbon dioxide (CO₂), which is a greenhouse gas that contributes to global warming and climate change. Reducing fuel consumption reduces CO₂ emissions, addressing climate change, which affects all countries and future generations worldwide.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Galileo's Ramp Experiment: Motion (18 marks) Criterion B/C
  // Context: Galileo's investigation into motion of a ball rolling down a ramp
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Forces & Motion',
    marks: 18,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['acceleration', 'distance-time graphs', 'velocity', 'investigation design'], level: 'proficient' },
    stem: 'The famous scientist Galileo was fascinated by the motion of accelerating objects. He studied the motion of a ball rolling down a ramp. He was interested in the relationship between distance and time. By setting the ramp at a small angle, the motion would happen slowly enough for him to take measurements.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="ramp4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#caa472"/><stop offset="1" stop-color="#9c7a4a"/></linearGradient></defs><rect width="600" height="300" fill="#ffffff"/><rect x="40" y="262" width="520" height="14" fill="#7a6a4d"/><polygon points="80,80 520,250 80,250" fill="url(#ramp4)" stroke="#6b5535" stroke-width="2"/><line x1="80" y1="250" x2="520" y2="250" stroke="#6b5535" stroke-width="1" stroke-dasharray="3 3"/><path d="M150,250 A70,70 0 0 0 142,229" fill="none" stroke="#1f2d3a" stroke-width="1.2"/><text x="158" y="240" font-size="12" fill="#1f2d3a">angle θ</text><circle cx="120" cy="92" r="14" fill="#c0392b" stroke="#7a1f12" stroke-width="2"/><circle cx="115" cy="87" r="4" fill="#e8a39a"/><path d="M134,100 L210,130" stroke="#0b7285" stroke-width="2.5" marker-end="url(#arr4)"/><defs><marker id="arr4" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><text x="200" y="120" font-size="11" fill="#0b7285">rolls down</text><g stroke="#1f2d3a" stroke-width="1"><line x1="80" y1="170" x2="300" y2="255" stroke-dasharray="2 3"/></g><text x="300" y="180" font-size="12" fill="#1f2d3a">distance s measured along ramp</text><rect x="430" y="40" width="120" height="58" rx="8" fill="#eef3f6" stroke="#5b6b78"/><text x="490" y="62" font-size="11" text-anchor="middle" fill="#2c5468">water clock</text><text x="490" y="80" font-size="11" text-anchor="middle" fill="#2c5468">times the roll</text><text x="300" y="30" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">A ball rolling down a ramp</text></svg>',
      },
      caption: 'Galileo released a ball from the top of a ramp set at a small angle and timed how long it took to roll measured distances down the slope.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that would be tested by this investigation.',
        marks: 1,
        ph: 'How does the distance a ball rolls affect the time taken? (Or: "How does the time taken change as the distance the ball rolls increases?")',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Identify** the variables for this investigation. The possible variables are: mass of ball, time taken, size of ball, distance travelled by ball, angle of slope.',
        marks: 3,
        ph: 'Independent variable: distance travelled by ball\nDependent variable: time taken\nControl variables: mass of ball, size of ball, angle of slope',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The student starts to write the following hypothesis:\n\n*"As the distance the ball rolls increases, the time taken will also increase but the relationship will not be proportional. The ball will have a constant acceleration as it moves down the slope."*\n\n**Outline** why the ball accelerates at a constant rate as it moves down the slope by referring to relevant scientific principles.',
        marks: 2,
        ph: 'The ball accelerates because there is a net force acting on it — the component of gravity (weight) along the slope. By Newton\'s second law (F = ma), a constant force on a constant mass produces a constant acceleration. Since the gravitational force and the mass of the ball are both constant, the acceleration is constant.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'For a ball moving with constant acceleration, the distance (s) the ball moves and the time taken (t) are related by the formula:\n\n**s = ½at²** (when initial velocity = 0)\n\nUse the second formula to **select** the results that you would expect to be shown by this investigation. **Justify** your answer.\n\nA. s vs t² — concave curve upwards\nB. s vs t² — straight line through origin\nC. s vs t — straight line through origin\nD. s vs t — decreasing curve',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="200" fill="#ffffff"/><g><text x="80" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">A</text><line x1="30" y1="160" x2="30" y2="40" stroke="#1f2d3a" stroke-width="1.5"/><line x1="30" y1="160" x2="140" y2="160" stroke="#1f2d3a" stroke-width="1.5"/><path d="M30,160 Q90,150 130,55" fill="none" stroke="#2563eb" stroke-width="2.5"/><text x="85" y="178" font-size="10" text-anchor="middle" fill="#475569">t²</text><text x="14" y="100" font-size="10" text-anchor="middle" fill="#475569" transform="rotate(-90 14 100)">s</text></g><g><text x="240" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">B</text><line x1="190" y1="160" x2="190" y2="40" stroke="#1f2d3a" stroke-width="1.5"/><line x1="190" y1="160" x2="300" y2="160" stroke="#1f2d3a" stroke-width="1.5"/><line x1="190" y1="160" x2="295" y2="55" stroke="#2563eb" stroke-width="2.5"/><text x="245" y="178" font-size="10" text-anchor="middle" fill="#475569">t²</text><text x="174" y="100" font-size="10" text-anchor="middle" fill="#475569" transform="rotate(-90 174 100)">s</text></g><g><text x="400" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">C</text><line x1="350" y1="160" x2="350" y2="40" stroke="#1f2d3a" stroke-width="1.5"/><line x1="350" y1="160" x2="460" y2="160" stroke="#1f2d3a" stroke-width="1.5"/><line x1="350" y1="160" x2="455" y2="55" stroke="#2563eb" stroke-width="2.5"/><text x="405" y="178" font-size="10" text-anchor="middle" fill="#475569">t</text><text x="334" y="100" font-size="10" text-anchor="middle" fill="#475569" transform="rotate(-90 334 100)">s</text></g><g><text x="560" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">D</text><line x1="510" y1="160" x2="510" y2="40" stroke="#1f2d3a" stroke-width="1.5"/><line x1="510" y1="160" x2="620" y2="160" stroke="#1f2d3a" stroke-width="1.5"/><path d="M510,60 Q560,150 615,158" fill="none" stroke="#2563eb" stroke-width="2.5"/><text x="565" y="178" font-size="10" text-anchor="middle" fill="#475569">t</text><text x="494" y="100" font-size="10" text-anchor="middle" fill="#475569" transform="rotate(-90 494 100)">s</text></g></svg>',
          },
          caption: 'Four candidate result graphs. A and B plot s against t²; C and D plot s against t.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select: B (straight line through origin on s vs t² graph).\nJustification:\n- s = ½at² means s ∝ t² (s is directly proportional to t²)\n- A graph of s vs t² should be a straight line through the origin\n- The gradient of this line equals ½a',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Another student performs a similar investigation and obtains the results shown in the table below:\n\n| Distance / m | Time / s | (Time)² / **?** |\n|-------------|----------|------------------|\n| 0.25 | 1.02 | 1.04 |\n| 0.50 | 1.39 | 1.93 |\n| 0.75 | 1.75 | 3.06 |\n| 1.00 | 1.98 | 3.92 |\n| 1.25 | 2.19 | **?** |\n\nThe table is incomplete. **Label** the missing unit for the column (Time)² and **calculate** the missing value.',
        marks: 3,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Distance / m', 'Time / s', '(Time)² / ?'],
            rows: [
              ['0.25', '1.02', '1.04'],
              ['0.50', '1.39', '1.93'],
              ['0.75', '1.75', '3.06'],
              ['1.00', '1.98', '3.92'],
              ['1.25', '2.19', '?'],
            ],
          },
          caption: 'The student\'s results. The unit of the third column and the final (Time)² value are missing.',
        },
        ph: 'Unit: s² (seconds squared)\nMissing value: 2.19² = 4.7961 ≈ **4.80** s²\n(Accept 4.7961 or 4.8 or 4.796; award 2 marks for 4.79 if rounded to 2 d.p.)',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'In Galileo\'s original investigation, the measuring equipment available was quite basic. One piece of equipment that Galileo used to measure time was a water clock. The water clock provided a relative measure of time based on the volume of water collected in a beaker as the ball rolled down the ramp.\n\n**Suggest** why using a water clock to measure time would have made it hard for Galileo to share his results with other scientists.',
        marks: 1,
        ph: 'A water clock does not measure time in standard units — different water clocks would produce different volumes for the same time interval. Without a universal standard unit (like seconds), other scientists cannot replicate or compare results. The water clock measurement only makes sense if other scientists use the same clock.',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'In modern times we have much more advanced equipment available. **State** the name of the measuring equipment that you would use to measure time if you were repeating Galileo\'s investigation.',
        marks: 1,
        ph: 'A stopwatch (or stopclock, chronometer, digital timer)',
        level: 'foundation',
      },
      {
        label: 'h',
        text: '**State** a follow-up investigation into another factor that can affect the motion of a ball on a ramp. The dependent variable is time.\n\nState the new independent variable and write a research question that this new investigation would test.',
        marks: 4,
        ph: 'New independent variable: angle of the slope (or mass of ball, size of ball, surface of ramp)\n\nResearch question: How does the angle of the slope affect the time taken for a ball to roll a fixed distance?\n\nControl variables: mass of ball, size of ball (do not use distance as CV if it is the DV, and do not reuse the new IV)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Parachute: Air Resistance Investigation (14 marks) Criterion B
  // Context: Objects falling — air resistance and surface area
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Forces & Motion',
    marks: 14,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['air resistance', 'surface area', 'falling objects', 'investigation design'], level: 'advanced' },
    stem: 'One of Galileo\'s most important discoveries was that objects would fall at the same rate if they were dropped from the same height — provided air resistance was not significant. In real life, air resistance has a significant effect on the rate at which objects fall to the ground. An MYP student is interested in the effect that surface area has on the time taken for an object to fall to the ground.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="aq5" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#c0392b"/></marker><linearGradient id="canopy5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8772e"/><stop offset="1" stop-color="#c25618"/></linearGradient></defs><rect width="560" height="340" fill="#ffffff"/><line x1="40" y1="40" x2="40" y2="300" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="4 4"/><text x="48" y="52" font-size="11" fill="#94a3ad">drop height (fixed)</text><line x1="34" y1="40" x2="46" y2="40" stroke="#94a3ad" stroke-width="1.5"/><line x1="34" y1="300" x2="46" y2="300" stroke="#94a3ad" stroke-width="1.5"/><path d="M170,70 Q280,30 390,70 L360,100 L200,100 Z" fill="url(#canopy5)" stroke="#8a3d10" stroke-width="2"/><line x1="200" y1="100" x2="278" y2="160" stroke="#5b6b78" stroke-width="1"/><line x1="250" y1="100" x2="282" y2="160" stroke="#5b6b78" stroke-width="1"/><line x1="310" y1="100" x2="282" y2="160" stroke="#5b6b78" stroke-width="1"/><line x1="360" y1="100" x2="286" y2="160" stroke="#5b6b78" stroke-width="1"/><rect x="266" y="160" width="32" height="24" rx="3" fill="#3a6ea5" stroke="#27486b"/><text x="282" y="177" font-size="10" text-anchor="middle" fill="#ffffff">load</text><line x1="282" y1="184" x2="282" y2="240" stroke="#c0392b" stroke-width="3" marker-end="url(#aq5)"/><text x="290" y="216" font-size="12" fill="#c0392b" font-weight="700">weight W</text><line x1="282" y1="118" x2="282" y2="60" stroke="#0b7285" stroke-width="3" marker-end="url(#aq5)"/><line x1="282" y1="60" x2="282" y2="60" stroke="#0b7285"/><path d="M282,118 L282,62" stroke="#0b7285" stroke-width="3"/><polygon points="282,52 277,64 287,64" fill="#0b7285"/><text x="292" y="86" font-size="12" fill="#0b7285" font-weight="700">air resistance</text><rect x="430" y="120" width="90" height="56" rx="8" fill="#222" stroke="#000"/><text x="475" y="152" font-size="15" fill="#3ad36a" text-anchor="middle" font-family="monospace">0.00 s</text><text x="475" y="190" font-size="10" fill="#5b6b78" text-anchor="middle">stopwatch</text><rect x="0" y="300" width="560" height="40" fill="#e7eef2"/><text x="280" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Model parachute falling from a fixed height</text></svg>',
      },
      caption: 'A model parachute with a fixed load is dropped from a set height. A larger canopy area means more air resistance, so it falls more slowly and takes longer to reach the ground.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a hypothesis for the student\'s investigation. Your explanation should refer to forces and particle theory.',
        marks: 3,
        ph: 'If the surface area of the parachute increases, then the time taken to fall will increase (it will fall more slowly).\nBecause: A larger surface area means more collisions per second with air particles, which increases the air resistance force on the parachute. The greater air resistance reduces the net downward force, so the parachute decelerates and falls more slowly, taking longer to reach the ground.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: '**Design** an investigation that the student could use to test the hypothesis in part (a).\n\nIn your plan you should include:\n- Your independent and dependent variables\n- Two control variables with justification\n- A list of the equipment you will use\n- An explanation of how you will collect sufficient data\n- Details of how you will make sure your method is safe',
        marks: 11,
        ph: 'Variables:\n- IV: surface area of the parachute\n- DV: time taken to fall (from a fixed height)\n- CV1: mass of the parachute load — a heavier load would fall faster regardless of area\n- CV2: height of drop — a different height changes the total fall time\n\nEquipment: ruler or tape measure (to measure surface area and height), stopwatch (to measure time), metre ruler or plumb line, scissors, material for parachutes of different sizes.\n\nMethod:\n1. Cut 5 parachutes of different surface areas (e.g. 100, 200, 300, 400, 500 cm²)\n2. Attach the same load (mass) to each parachute\n3. Drop each parachute from the same height (e.g. 2 m) and time the fall\n4. Repeat each measurement 3 times and calculate the mean\n5. Record results in a table\n\nSafety: Stand on a stable platform when dropping from height; ensure the drop zone is clear.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Optics: Convex Lens & Focal Length (15 marks) Criterion C
  // Context: Finding the focal length of a convex lens using 1/f = 1/do + 1/di
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Light & Optics',
    marks: 15,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['convex lens', 'focal length', 'image distance', 'data processing'], level: 'proficient' },
    stem: 'Galileo is also famous for his work on the development of the telescope. Galileo used a combination of lenses to allow an observer to see far away objects clearly.\n\nLenses work using the refraction of light. One type of lens is a convex lens. With this lens, light waves coming from an object meet at a point known as the focus (F). The focal length of a lens (f) is defined as the distance between the centre of the lens and its focus. It is a constant for a particular lens; different lenses have different focal lengths.\n\nThe formula relating object distance (dₒ) and image distance (dᵢ) is: **1/f = 1/dₒ + 1/dᵢ**',
    artefact: {
      component: 'OpticsSim',
      data: {
        mode: 'lens',
        title: 'Finding the image distance with a convex lens',
        focalLength: 17,
        objectDistance: 30,
        objectHeight: 36,
        unit: 'cm',
      },
      caption: 'A candle (object) sits 30 cm from a convex lens. Slide the screen along the bench until the projected image is sharp, then read off the image distance dᵢ.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A simulation has a distance dₒ of **30 cm**. Change the position of the movable screen to **determine** the distance dᵢ.\n\nThe lens is at the 30 cm mark on the bench ruler. The simulation shows the image is sharp when the screen is at the **69.2 cm** mark on the ruler. Calculate dᵢ.',
        marks: 3,
        ph: 'The lens is at the 30 cm mark; the object distance dₒ = 30 cm.\nThe image is sharp when the screen is at the 69.2 cm mark.\ndᵢ = 69.2 − 30 = **39.2 cm**\n(Accept 69.2 ± 0.2 for the reading; dᵢ = 39.2 ± 0.2 cm)\nCheck: 1/f = 1/30 + 1/39.2 = 0.0588 cm⁻¹ → f ≈ 17 cm ≈ 0.17 m, consistent with parts (c)–(f).',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'A student collects more data for different values of dₒ. Their raw notebook data is shown below:\n\n- 20.0 cm — 105 centimetres\n- 40.0 cm — 0.300 m\n- 60.0 cm — 27.2 cm\n- 70.0 cm — 23.0 cm\n\n**Organise and present** the student\'s data in a table of results. Include your result from part (a).',
        marks: 4,
        ph: '| dₒ / cm | dᵢ / cm |\n|---------|--------|\n| 20.0 | 105.0 |\n| 30.0 | 39.2 |\n| 40.0 | 30.0 |\n| 60.0 | 27.2 |\n| 70.0 | 23.0 |\n\nMarks: column headings with symbols (dₒ, dᵢ) and units in headers; data in ascending order of dₒ; all data complete (convert 0.300 m → 30.0 cm); dₒ to 1 d.p. (or nearest cm); all dᵢ to a consistent number of d.p.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Another student in the same class processes the data. Their table of processed data is shown below:\n\n| 1/dₒ / m⁻¹ | 1/dᵢ / m⁻¹ | 1/f / m⁻¹ | f / [?] |\n|------------|------------|------------|----------|\n| 5.00 | 0.95 | 5.95 | 0.168 |\n| 3.33 | 2.63 | 5.96 | 0.168 |\n| 2.50 | 3.33 | 5.83 | 0.171 |\n| 2.00 | 3.87 | **?** | **?** |\n| 1.67 | 3.67 | 5.34 | 0.187 |\n| 1.43 | 4.35 | 5.78 | 0.173 |\n\n**Label** the incomplete column header and **calculate** the missing processed data values.',
        marks: 3,
        ph: 'Column header: f / m (metres)\nMissing 1/f value: 1/dₒ + 1/dᵢ = 2.00 + 3.87 = **5.87** m⁻¹\nMissing f value: f = 1/5.87 = **0.170** m\n(Accept 0.170 or 0.17 m)',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'One of the calculated f values in the table appears to be anomalous. **Identify** this data point.',
        marks: 1,
        ph: 'The anomalous value is **0.187 m** (corresponding to 1/dₒ = 1.67 m⁻¹). It is noticeably different from the other values which cluster around 0.168–0.173 m.',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'A graph of 1/dᵢ against 1/dₒ can be used to find the focal length of the lens. The line of best fit will have a y-intercept of 1/f. The four graphs below show different lines of best fit for the data points.\n\n**Select** the most appropriate graph. **Justify** your answer.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="240" fill="#ffffff"/><g><text x="80" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">A</text><line x1="34" y1="40" x2="34" y2="180" stroke="#1f2d3a" stroke-width="1.3"/><line x1="34" y1="180" x2="150" y2="180" stroke="#1f2d3a" stroke-width="1.3"/><circle cx="50" cy="70" r="3" fill="#2563eb"/><circle cx="72" cy="92" r="3" fill="#2563eb"/><circle cx="92" cy="84" r="3" fill="#2563eb"/><circle cx="112" cy="120" r="3" fill="#2563eb"/><circle cx="132" cy="118" r="3" fill="#2563eb"/><line x1="40" y1="60" x2="145" y2="150" stroke="#dc2626" stroke-width="1.8"/><text x="92" y="200" font-size="9" text-anchor="middle" fill="#475569">1/dₒ (m⁻¹)</text></g><g><text x="240" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">B</text><line x1="194" y1="40" x2="194" y2="180" stroke="#1f2d3a" stroke-width="1.3"/><line x1="194" y1="180" x2="310" y2="180" stroke="#1f2d3a" stroke-width="1.3"/><circle cx="210" cy="70" r="3" fill="#2563eb"/><circle cx="232" cy="92" r="3" fill="#2563eb"/><circle cx="252" cy="84" r="3" fill="#2563eb"/><circle cx="272" cy="120" r="3" fill="#2563eb"/><circle cx="292" cy="118" r="3" fill="#2563eb"/><line x1="200" y1="100" x2="305" y2="92" stroke="#dc2626" stroke-width="1.8"/><text x="252" y="200" font-size="9" text-anchor="middle" fill="#475569">1/dₒ (m⁻¹)</text></g><g><text x="400" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">C</text><line x1="354" y1="40" x2="354" y2="180" stroke="#1f2d3a" stroke-width="1.3"/><line x1="354" y1="180" x2="470" y2="180" stroke="#1f2d3a" stroke-width="1.3"/><circle cx="370" cy="74" r="3" fill="#2563eb"/><circle cx="392" cy="86" r="3" fill="#2563eb"/><circle cx="412" cy="82" r="3" fill="#2563eb"/><circle cx="432" cy="120" r="3" fill="#f59e0b" stroke="#b45309"/><circle cx="452" cy="100" r="3" fill="#2563eb"/><line x1="360" y1="70" x2="465" y2="108" stroke="#dc2626" stroke-width="1.8"/><text x="412" y="200" font-size="9" text-anchor="middle" fill="#475569">1/dₒ (m⁻¹)</text></g><g><text x="560" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">D</text><line x1="514" y1="40" x2="514" y2="180" stroke="#1f2d3a" stroke-width="1.3"/><line x1="514" y1="180" x2="630" y2="180" stroke="#1f2d3a" stroke-width="1.3"/><circle cx="530" cy="74" r="3" fill="#2563eb"/><circle cx="552" cy="86" r="3" fill="#2563eb"/><circle cx="572" cy="82" r="3" fill="#2563eb"/><circle cx="592" cy="120" r="3" fill="#2563eb"/><circle cx="612" cy="100" r="3" fill="#2563eb"/><line x1="520" y1="150" x2="625" y2="60" stroke="#dc2626" stroke-width="1.8"/><text x="572" y="200" font-size="9" text-anchor="middle" fill="#475569">1/dₒ (m⁻¹)</text></g><text x="20" y="110" font-size="9" text-anchor="middle" fill="#475569" transform="rotate(-90 20 110)">1/dᵢ (m⁻¹)</text></svg>',
          },
          caption: 'Four candidate lines of best fit. The orange point in graph C is the anomalous result a good line of best fit should ignore.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select: C\nJustification: The equation shows a straight line (linear relationship) is expected. Graph C has the best-fit line that does not include the anomalous data point, with roughly equal numbers of data points above and below the line.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'Use your answer to part (e) to **calculate** the focal length (f) of the lens.',
        marks: 2,
        ph: 'Read y-intercept from graph C: y-intercept ≈ 5.8 m⁻¹ (accept 5.8 ± 0.1)\nf = 1 / (y-intercept) = 1 / 5.8 = **0.172 m** (accept 0.172 ± 0.003 m)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Drones: Forces & Evaluation (9 marks) Criterion A/D
  // Context: Quadcopter drones delivering medical supplies
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Motion',
    marks: 9,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['balanced forces', 'unbalanced forces', 'Newton\'s laws', 'drone technology'], level: 'proficient' },
    stem: 'A drone is a vehicle that can fly without a pilot on board. A drone may be controlled by computers or by someone on the ground who may be a long distance away. A quadcopter is a common type of drone.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="tq7" markerWidth="11" markerHeight="11" refX="8" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 Z" fill="#0b7285"/></marker><marker id="wq7" markerWidth="11" markerHeight="11" refX="8" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 Z" fill="#c0392b"/></marker></defs><rect width="480" height="280" fill="#eaf3fb"/><g stroke="#2c3e50" stroke-width="5" stroke-linecap="round"><line x1="170" y1="150" x2="310" y2="150"/></g><rect x="216" y="138" width="48" height="24" rx="6" fill="#2c3e50"/><g fill="#2c3e50"><ellipse cx="170" cy="142" rx="34" ry="6"/><ellipse cx="310" cy="142" rx="34" ry="6"/></g><circle cx="170" cy="150" r="4" fill="#5b6b78"/><circle cx="310" cy="150" r="4" fill="#5b6b78"/><line x1="240" y1="138" x2="240" y2="60" stroke="#0b7285" stroke-width="4" marker-end="url(#tq7)"/><text x="252" y="92" font-size="15" font-weight="700" fill="#0b7285">T (thrust)</text><line x1="240" y1="162" x2="240" y2="240" stroke="#c0392b" stroke-width="4" marker-end="url(#wq7)"/><text x="252" y="214" font-size="15" font-weight="700" fill="#c0392b">W (weight)</text><text x="240" y="28" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Forces on a quadcopter drone</text></svg>',
      },
      caption: 'A quadcopter experiences an upward thrust T from its propellers and a downward weight W. Whether it rises, hovers or descends depends on the balance of these two forces.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagrams below show the forces acting on a moving quadcopter. T is the total thrust generated by the propellers and W is the weight of the quadcopter. **Select** the diagram showing a quadcopter **taking off**. **Justify** your answer.',
        marks: 2,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ta" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker><marker id="wa" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="600" height="220" fill="#ffffff"/><g><text x="100" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">A</text><line x1="80" y1="110" x2="120" y2="110" stroke="#2c3e50" stroke-width="4"/><rect x="92" y="102" width="16" height="16" fill="#2c3e50"/><line x1="100" y1="100" x2="100" y2="40" stroke="#0b7285" stroke-width="3.5" marker-end="url(#ta)"/><text x="112" y="62" font-size="12" fill="#0b7285" font-weight="700">T</text><line x1="100" y1="120" x2="100" y2="160" stroke="#c0392b" stroke-width="3.5" marker-end="url(#wa)"/><text x="112" y="150" font-size="12" fill="#c0392b" font-weight="700">W</text></g><g><text x="300" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">B</text><line x1="280" y1="110" x2="320" y2="110" stroke="#2c3e50" stroke-width="4"/><rect x="292" y="102" width="16" height="16" fill="#2c3e50"/><line x1="300" y1="100" x2="300" y2="60" stroke="#0b7285" stroke-width="3.5" marker-end="url(#ta)"/><text x="312" y="80" font-size="12" fill="#0b7285" font-weight="700">T</text><line x1="300" y1="120" x2="300" y2="160" stroke="#c0392b" stroke-width="3.5" marker-end="url(#wa)"/><text x="312" y="150" font-size="12" fill="#c0392b" font-weight="700">W</text></g><g><text x="500" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">C</text><line x1="480" y1="110" x2="520" y2="110" stroke="#2c3e50" stroke-width="4"/><rect x="492" y="102" width="16" height="16" fill="#2c3e50"/><line x1="500" y1="100" x2="500" y2="68" stroke="#0b7285" stroke-width="3.5" marker-end="url(#ta)"/><text x="512" y="86" font-size="12" fill="#0b7285" font-weight="700">T</text><line x1="500" y1="120" x2="500" y2="180" stroke="#c0392b" stroke-width="3.5" marker-end="url(#wa)"/><text x="512" y="158" font-size="12" fill="#c0392b" font-weight="700">W</text></g></svg>',
          },
          caption: 'Three free-body diagrams. In A the thrust arrow is longer than the weight (T > W); in B they are equal (T = W); in C the weight is longer (W > T).',
        },
        ph: 'Select: A (diagram showing T > W — upward thrust is greater than downward weight).\nJustification: For the quadcopter to take off (accelerate upwards), the forces must be unbalanced — the thrust must be greater than the weight. This gives a net upward force, causing upward acceleration.',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Many cities have serious traffic problems which can increase the delivery time of urgent medical supplies. Scientists have suggested that quadcopters could be a good option for faster delivery of these supplies. Some quadcopters can carry up to 3 kg of material, can fly for 20 minutes and can cover a distance up to 20 km.\n\n**Discuss and evaluate** the advantages and disadvantages of using quadcopters to deliver urgent medical supplies.',
        marks: 7,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Quadcopter specification', 'Value'],
            rows: [
              ['Maximum payload', '3 kg'],
              ['Maximum flight time', '20 minutes'],
              ['Maximum range', '20 km'],
              ['Power source', 'Rechargeable battery (electric)'],
            ],
          },
          caption: 'Performance limits of the delivery quadcopter. Refer to these figures when weighing the advantages against the disadvantages.',
        },
        ph: 'Advantages:\n- Can bypass road traffic → faster delivery of urgent medical supplies (e.g. blood, medication)\n- Can reach remote areas not accessible by road\n- Lower running costs than ambulances; no driver needed\n- Environmental benefit: electric → zero direct emissions\n\nDisadvantages:\n- Limited payload (3 kg) — may not be sufficient for large/heavy supplies\n- Limited range (20 km) and flight time (20 min)\n- Weather-dependent — cannot operate in heavy rain/wind\n- Risk of collision with aircraft or buildings\n- Privacy and security concerns about autonomous vehicles in urban areas\n- Regulatory challenges — air traffic control\n\nConclusion: For small, urgent medical deliveries (e.g. insulin, AED devices), quadcopters offer significant advantages over road delivery. However, limitations in payload and range mean they supplement rather than replace conventional delivery.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Drones in Environmental Monitoring (14 marks) Criterion D
  // Context: Uses of drones beyond delivery — environmental and scientific monitoring
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society',
    marks: 14,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['drone technology', 'environmental monitoring', 'social implications', 'science and society'], level: 'advanced' },
    stem: 'The video outlines some common uses of drones, including in environmental monitoring, agriculture, search and rescue, photography, and scientific research. Scientists are increasingly using drones to monitor and study the natural environment.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Use of drones', 'Example application'],
        rows: [
          ['Environmental monitoring', 'Surveying wildlife populations and tracking deforestation'],
          ['Agriculture', 'Mapping crop health and targeting irrigation'],
          ['Search and rescue', 'Locating missing people in inaccessible terrain'],
          ['Scientific research', 'Flying into weather systems to collect atmospheric data'],
          ['Surveillance', 'Observing land-use change, disasters and human activity'],
        ],
      },
      caption: 'Some common uses of drones outlined in the video. Use these examples as evidence when you evaluate the benefits and implications of drone technology.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** the use of drones. In your answer:\n\n- Describe at least **two uses of drones in environmental monitoring**, and explain how each use is a benefit to science\n- Discuss the **social implications** of drone technology for individuals (positive AND negative), with justification\n- Discuss the **political implications** of widespread drone use, with further explanation',
        marks: 14,
        ph: 'Environmental monitoring uses:\n1. Monitoring wildlife populations — drones can survey large, inaccessible areas quickly without disturbing animals. This provides more accurate population data for conservation science.\n2. Monitoring deforestation and land use — drones can capture high-resolution imagery of forest areas to track illegal logging. This data supports environmental policy and conservation efforts.\n3. Atmospheric monitoring — drones can fly into weather systems to collect data on temperature, pressure, and pollution levels, improving weather prediction models.\n\nSocial implications:\nPositive: Faster emergency response (e.g. delivering AEDs to cardiac arrest victims); improved search and rescue operations; reduced exposure of humans to dangerous environments.\nNegative: Privacy concerns — drones with cameras can invade personal privacy. Risk of drone crashes or collisions causing injury. Job displacement for delivery workers.\n\nPolitical implications:\nPositive: Better environmental data supports international climate agreements. Drones can monitor borders and enforce environmental laws.\nNegative: Drones can be used for surveillance by governments, raising civil liberties concerns. International tensions over drone flights in disputed airspace. Military use of drones raises ethical questions about autonomous weapons.',
        level: 'advanced',
      },
    ],
  },

]
