import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2021-v1',
  subject: 'Physics',
  session: 'May',
  year: 2021,
  totalMarks: 98,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Electromagnetic Waves: Maritime Rescue Radio (8 marks) Criterion A
  // V1: MAYDAY radio calls across the English Channel; distance = 9 km
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Electromagnetic Waves — Maritime Radio',
    marks: 8,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'em-spectrum', topics: ['radio waves', 'electromagnetic spectrum', 'speed of waves', 'diffraction'], level: 'proficient' },
    stem: 'Radio waves transformed maritime communication. Before radio, ships in distress had no way to call for help. The first distress call — the MAYDAY signal — was transmitted using radio waves across the English Channel. The ability to send radio signals allowed ships in danger to communicate their position and receive rescue.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sea1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fc1dc"/><stop offset="1" stop-color="#3f87a8"/></linearGradient><linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8f4fb"/><stop offset="1" stop-color="#c9e6f3"/></linearGradient></defs><rect width="620" height="300" fill="url(#sky1)"/><rect y="180" width="620" height="120" fill="url(#sea1)"/><path d="M0,180 q40,-8 80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0" fill="none" stroke="#2c6a87" stroke-width="1.5" opacity="0.5"/><g><rect x="40" y="120" width="18" height="60" fill="#6b7884"/><rect x="20" y="96" width="58" height="26" rx="3" fill="#8b98a4"/><line x1="49" y1="96" x2="49" y2="40" stroke="#5b6873" stroke-width="3"/><line x1="49" y1="48" x2="80" y2="60" stroke="#5b6873" stroke-width="2"/><line x1="49" y1="48" x2="18" y2="60" stroke="#5b6873" stroke-width="2"/><text x="49" y="200" font-size="12" text-anchor="middle" fill="#16384a">rescue station</text></g><g stroke="#0b7285" stroke-width="2" fill="none"><path d="M58,48 q60,-18 120,0"/><path d="M62,52 q70,-22 144,0"/><path d="M66,56 q80,-26 168,0"/></g><text x="150" y="30" font-size="12" fill="#0b7285">radio waves</text><g transform="translate(470,150)"><path d="M-58,18 L58,18 L42,40 L-42,40 Z" fill="#d24b3a" stroke="#9e3327"/><rect x="-30" y="-6" width="60" height="24" fill="#e9edf0" stroke="#9aa6b0"/><rect x="-8" y="-34" width="16" height="28" fill="#c0c8cf"/><line x1="0" y1="-34" x2="0" y2="-58" stroke="#5b6873" stroke-width="2"/><circle cx="0" cy="-58" r="3" fill="#f08c00"/></g><text x="470" y="216" font-size="12" text-anchor="middle" fill="#16384a">ship in distress</text><g stroke="#f08c00" stroke-width="2" fill="none"><path d="M412,128 q-50,-16 -100,0"/><path d="M408,124 q-58,-20 -120,0"/></g><line x1="100" y1="244" x2="420" y2="244" stroke="#16384a" stroke-width="1" marker-start="url(#dimL)" marker-end="url(#dimR)"/><defs><marker id="dimL" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto"><path d="M7,0 L0,3 L7,6 Z" fill="#16384a"/></marker><marker id="dimR" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#16384a"/></marker></defs><text x="260" y="262" font-size="13" font-weight="700" text-anchor="middle" fill="#16384a">9 km across the English Channel</text></svg>',
      },
      caption: 'A MAYDAY radio signal is sent 9 km across the English Channel between a rescue station and a ship in distress.',
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
        text: 'One advantage of using radio waves for maritime rescue is that the waves can travel around the curve of the Earth\'s surface. A simulation shows radio waves bending around a coastal headland to reach a ship hidden from direct line of sight.\n\n**Select** the phenomenon shown in the simulation.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Reflection', 'B. Diffraction', 'C. Refraction', 'D. Interference'],
        ph: 'B',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'A rescue station transmits a MAYDAY confirmation signal across the English Channel, a distance of **9 km**. **Calculate** the time taken for the radio signal to travel 9 km. You should take the speed of radio waves in air to be **3.0 × 10⁸ m s⁻¹**. Give your answer in **scientific notation**.',
        marks: 3,
        ph: 'Convert: 9 km = 9000 m\nt = d/v = 9000 / (3.0 × 10⁸)\n= **3.0 × 10⁻⁵ s**',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Suggest** two reasons why communication using radio waves was such an important discovery for maritime safety.',
        marks: 2,
        ph: 'Any two of:\n- Ships at sea can send distress calls without physical connection to shore\n- Communication over large distances previously impossible without cables\n- Real-time communication allows faster rescue response\n- No physical infrastructure needed at sea\n- Led to development of radar, sonar, navigation systems',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Radioactivity: Iodine-131 in Thyroid Treatment (9 marks) Criterion A
  // V1: Iodine-131 isotope for thyroid cancer; half-life read from graph ≈ 8 days
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Physics — Iodine-131',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'radioactive decay', 'half-life', 'nuclear medicine'], level: 'proficient' },
    stem: 'Iodine is a chemical element essential for thyroid function. It has an atomic number of 53. The unstable iodine-131 isotope has a mass number of 131 and decays by emitting beta and gamma radiation. It is used in medicine to treat thyroid cancer.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct option to complete the following sentences about an atom of iodine-131:\n\n- 53 is the **[Select]** in the nucleus.\n- 131 is the **[Select]** in the nucleus.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetOptions: ['atomic number', 'mass number', 'number of protons', 'number of neutrons', 'number of nucleons'],
        widgetItems: ['53 is the', '131 is the'],
        ph: 'number of protons (atomic number) | mass number (number of nucleons)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The three images below show the path of beta radiation emitted by iodine-131 moving through an electric field.\n\n**Select** the image that shows the path of beta radiation emitted by iodine-131. **Justify** your answer.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="nucI" cx="0.4" cy="0.35"><stop offset="0" stop-color="#9fd0ff"/><stop offset="1" stop-color="#1c4f9c"/></radialGradient><marker id="bw" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto"><path d="M0,0 L8,3.2 L0,6.4 Z" fill="#0b7285"/></marker></defs><rect width="720" height="280" fill="#ffffff"/><g transform="translate(10,30)"><rect width="220" height="230" rx="6" fill="#f4f8fb" stroke="#c4ced8"/><text x="12" y="26" font-size="20" font-weight="700" fill="#16384a">A</text><rect x="120" y="34" width="78" height="8" rx="3" fill="#9aa6b0"/><text x="202" y="44" font-size="20" font-weight="700" fill="#d24b3a">+</text><rect x="120" y="186" width="78" height="8" rx="3" fill="#9aa6b0"/><text x="202" y="200" font-size="22" font-weight="700" fill="#2c6a87">&#8722;</text><circle cx="40" cy="114" r="20" fill="url(#nucI)" stroke="#0e2a52"/><line x1="62" y1="114" x2="200" y2="114" stroke="#0b7285" stroke-width="2.4" stroke-dasharray="8 7" marker-end="url(#bw)"/><text x="110" y="222" font-size="11" text-anchor="middle" fill="#5b6873">no deflection</text></g><g transform="translate(250,30)"><rect width="220" height="230" rx="6" fill="#f4f8fb" stroke="#c4ced8"/><text x="12" y="26" font-size="20" font-weight="700" fill="#16384a">B</text><rect x="120" y="34" width="78" height="8" rx="3" fill="#9aa6b0"/><text x="202" y="44" font-size="20" font-weight="700" fill="#d24b3a">+</text><rect x="120" y="186" width="78" height="8" rx="3" fill="#9aa6b0"/><text x="202" y="200" font-size="22" font-weight="700" fill="#2c6a87">&#8722;</text><circle cx="40" cy="114" r="20" fill="url(#nucI)" stroke="#0e2a52"/><path d="M62,114 Q150,128 200,182" fill="none" stroke="#0b7285" stroke-width="2.4" stroke-dasharray="8 7" marker-end="url(#bw)"/><text x="110" y="222" font-size="11" text-anchor="middle" fill="#5b6873">bends to &#8722; plate</text></g><g transform="translate(490,30)"><rect width="220" height="230" rx="6" fill="#f4f8fb" stroke="#c4ced8"/><text x="12" y="26" font-size="20" font-weight="700" fill="#16384a">C</text><rect x="120" y="34" width="78" height="8" rx="3" fill="#9aa6b0"/><text x="202" y="44" font-size="20" font-weight="700" fill="#d24b3a">+</text><rect x="120" y="186" width="78" height="8" rx="3" fill="#9aa6b0"/><text x="202" y="200" font-size="22" font-weight="700" fill="#2c6a87">&#8722;</text><circle cx="40" cy="114" r="20" fill="url(#nucI)" stroke="#0e2a52"/><path d="M62,114 Q150,100 200,46" fill="none" stroke="#0b7285" stroke-width="2.4" stroke-dasharray="8 7" marker-end="url(#bw)"/><text x="110" y="222" font-size="11" text-anchor="middle" fill="#5b6873">bends to + plate</text></g></svg>',
          },
          caption: 'Three possible paths (A, B, C) for a beta particle emitted by iodine-131 between charged plates.',
        },
        ph: 'Select: image C (beta particles deflected towards the positive plate).\nJustification: Beta particles are electrons, which are negatively charged. Negatively charged particles are attracted to the positive plate, so they are deflected towards the positive plate in an electric field.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The graph below shows how the mass of iodine-131 changes with time. Use the graph to **determine** the half-life of iodine-131.',
        marks: 2,
        artefact: {
          component: 'DecaySim',
          data: {
            isotope: 'iodine-131',
            daughter: 'xenon-131',
            decayMode: 'beta + gamma',
            halfLife: 8,
            units: 'days',
            initialMass: 100,
            massUnits: 'g',
            axisMax: 40,
          },
          caption: 'Mass of iodine-131 against time. Drag the time marker to read off when the mass falls to half its starting value.',
        },
        ph: 'From the graph: start with initial mass. Find the time when mass halves.\nHalf-life ≈ **8 days** (accept 7–9 days from graph)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'Iodine-131 is used in medicine either as a radioactive drug inside the body or as an external source of radiation.\n\n**Suggest** why the half-life and the combination of beta and gamma emissions of iodine-131 make it useful to treat thyroid cancer.',
        marks: 2,
        ph: 'Half-life: The half-life (≈8 days) is short enough to limit long-term radioactive exposure in the body, but long enough to allow treatment of the thyroid to be effective.\n\nBeta/gamma emissions: Beta radiation can travel short distances in tissue and directly destroy cancer cells in the thyroid. Gamma radiation penetrates tissue and can be detected externally to image the thyroid.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Kinetic Energy & Regenerative Braking: Electric Sports Car (11 marks) Criterion A
  // V1: Electric sports car; mass = 1800 kg; speed = 24 m/s; braking distance = 32 m
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power — Electric Car',
    marks: 11,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'deceleration', 'energy transformation', 'electric vehicles'], level: 'proficient' },
    stem: 'Energy transformations occur in moving vehicles. Electric cars use electrical energy stored in batteries to provide their kinetic energy. These cars are designed to be more energy efficient and environmentally friendly than petrol cars.',
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the kinetic energy of a **1800 kg** electric car moving at **24 m s⁻¹**.',
        marks: 2,
        ph: 'KE = ½mv²\n= ½ × 1800 × 24²\n= ½ × 1800 × 576\n= 900 × 576\n= **518 400 J** (≈ 518 kJ)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'When the driver of the car hits the brakes, the car slows down to a complete stop. The braking distance is **32 m**.\n\n**Calculate** the average deceleration of the car during braking. Give your answer to **3 significant figures**.',
        marks: 4,
        ph: 'Use v² = u² + 2as\n0 = 24² + 2 × a × 32\n0 = 576 + 64a\n64a = −576\na = −576/64 = **−9.00 m s⁻²** (to 3 s.f.)',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'In conventional braking, the brakes slow down the car by transforming all the kinetic energy of the car into heat energy.\n\n**State** why the heat energy produced during braking is considered to be wasted energy.',
        marks: 1,
        ph: 'Heat energy cannot be used by the car to perform useful work — it cannot be converted back to kinetic energy to drive the car forward.',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'Regenerative brakes are a feature of electric cars. During regenerative braking, some of the energy wasted as heat is used to recharge the car\'s battery instead.\n\nThe diagram below shows the energy transformations that take place in an electric car during braking. **Select** the correct energy forms to complete the diagram.\n\nKinetic energy → **[?]** → Electrical energy → **[?]** → Thermal energy',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 760 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ec1" markerWidth="11" markerHeight="11" refX="8" refY="4" orient="auto"><path d="M0,0 L9,4 L0,8 Z" fill="#0b7285"/></marker><linearGradient id="ecb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8f1f6"/><stop offset="1" stop-color="#cfe0ea"/></linearGradient></defs><rect width="760" height="130" fill="#ffffff"/><g font-size="13" font-weight="600" fill="#16384a" text-anchor="middle"><rect x="12" y="48" width="120" height="46" rx="6" fill="url(#ecb)" stroke="#9fb0c0"/><text x="72" y="76">Kinetic energy</text><rect x="166" y="48" width="120" height="46" rx="6" fill="#ffffff" stroke="#7c8a98" stroke-dasharray="6 4"/><text x="226" y="72" font-size="18" fill="#9aa6b0">?</text><rect x="320" y="48" width="124" height="46" rx="6" fill="url(#ecb)" stroke="#9fb0c0"/><text x="382" y="76">Electrical energy</text><rect x="478" y="48" width="120" height="46" rx="6" fill="#ffffff" stroke="#7c8a98" stroke-dasharray="6 4"/><text x="538" y="72" font-size="18" fill="#9aa6b0">?</text><rect x="632" y="48" width="120" height="46" rx="6" fill="url(#ecb)" stroke="#9fb0c0"/><text x="692" y="76">Thermal energy</text></g><g stroke="#0b7285" stroke-width="4" marker-end="url(#ec1)"><line x1="134" y1="71" x2="162" y2="71"/><line x1="288" y1="71" x2="316" y2="71"/><line x1="446" y1="71" x2="474" y2="71"/><line x1="600" y1="71" x2="628" y2="71"/></g><text x="380" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#16384a">Energy transformations during regenerative braking (electric car)</text></svg>',
          },
          caption: 'Energy transformation chain during regenerative braking. Fill the two missing energy forms.',
        },
        widget: 'energy_chain',
        ph: 'Kinetic energy → Kinetic energy (mechanical) → Electrical energy → Chemical potential energy → Thermal energy',
        level: 'foundation',
      },
      {
        label: 'e',
        text: '**Suggest** why regenerative braking helps the electric car to travel further on one charge than conventional braking.',
        marks: 1,
        ph: 'During regenerative braking, kinetic energy is converted to electrical energy and stored as chemical potential energy in the battery. This stored energy can be used to drive the car further, increasing the range of the car.',
        level: 'developing',
      },
      {
        label: 'f',
        text: '**Outline** why reducing the energy consumed by cars is an issue of global significance.',
        marks: 2,
        ph: 'Burning fossil fuels for transport produces CO₂, a greenhouse gas contributing to global warming and climate change. Reducing energy consumption lowers CO₂ emissions, addressing climate change — a problem affecting all countries and future generations worldwide.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Galileo's Ramp: Marble Rolling Experiment (18 marks) Criterion B/C
  // V1: Marble on ramp; table data has different time values
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Forces & Motion — Ramp Experiment',
    marks: 18,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['acceleration', 'distance-time graphs', 'velocity', 'investigation design'], level: 'proficient' },
    stem: 'The famous scientist Galileo was fascinated by the motion of accelerating objects. He studied the motion of a ball rolling down a ramp. He was interested in the relationship between distance and time. By setting the ramp at a small angle, the motion would happen slowly enough for him to take measurements.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="ramp4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#caa46b"/><stop offset="1" stop-color="#9c7a44"/></linearGradient><radialGradient id="marble4" cx="0.35" cy="0.3"><stop offset="0" stop-color="#cfe7f2"/><stop offset="1" stop-color="#3f87a8"/></radialGradient><marker id="ar4" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="620" height="280" fill="#ffffff"/><line x1="40" y1="250" x2="590" y2="250" stroke="#5b6873" stroke-width="3"/><polygon points="80,80 80,250 540,250" fill="url(#ramp4)" stroke="#7a5e34" stroke-width="2"/><line x1="80" y1="80" x2="80" y2="250" stroke="#7a5e34" stroke-width="2"/><rect x="78" y="80" width="6" height="20" fill="#7a5e34"/><circle cx="150" cy="200" r="15" fill="url(#marble4)" stroke="#2c6a87" stroke-width="1.5"/><path d="M168,210 L300,242" stroke="#0b7285" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#ar4)"/><text x="240" y="232" font-size="12" fill="#0b7285">rolls down</text><path d="M120,250 A60,60 0 0 0 80,210" fill="none" stroke="#16384a" stroke-width="1.2"/><text x="128" y="240" font-size="13" font-style="italic" fill="#16384a">θ</text><text x="320" y="120" font-size="13" font-weight="700" fill="#16384a">Marble rolling down a ramp</text><text x="320" y="142" font-size="12" fill="#5b6873">distance s measured along the slope</text><line x1="150" y1="270" x2="500" y2="270" stroke="#16384a" stroke-width="1" marker-start="url(#g4L)" marker-end="url(#g4R)"/><defs><marker id="g4L" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto"><path d="M7,0 L0,3 L7,6 Z" fill="#16384a"/></marker><marker id="g4R" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#16384a"/></marker></defs><text x="325" y="266" font-size="11" text-anchor="middle" fill="#16384a">distance travelled, s</text></svg>',
      },
      caption: 'A marble released from rest rolls a measured distance s down a ramp set at a small angle θ.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that would be tested by this investigation.',
        marks: 1,
        ph: 'How does the distance a ball rolls down the ramp affect the time taken?',
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
        ph: 'The ball accelerates because a net force acts on it — the component of gravity (weight) along the slope. By Newton\'s second law (F = ma), a constant net force on a constant mass produces constant acceleration. Since both gravitational force and ball mass are constant, acceleration is constant.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'For a ball moving with constant acceleration, the distance (s) the ball moves and the time taken (t) are related by the formula:\n\n**s = ½at²** (when initial velocity = 0)\n\nUse the formula to **select** the results that you would expect to be shown by this investigation. **Justify** your answer.\n\nA. s vs t² — concave curve upwards\nB. s vs t² — straight line through origin\nC. s vs t — straight line through origin\nD. s vs t — decreasing curve',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 460" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="460" fill="#ffffff"/><g transform="translate(20,20)"><rect width="270" height="200" fill="#ffffff" stroke="#dce3e9"/><text x="14" y="22" font-size="16" font-weight="700" fill="#16384a">A</text><line x1="50" y1="30" x2="50" y2="170" stroke="#333" stroke-width="1.5"/><line x1="50" y1="170" x2="250" y2="170" stroke="#333" stroke-width="1.5"/><text x="150" y="192" font-size="11" text-anchor="middle" fill="#222">Time&#178; / s&#178;</text><text x="20" y="100" font-size="11" text-anchor="middle" fill="#222" transform="rotate(-90 20 100)">Distance / m</text><line x1="50" y1="140" x2="250" y2="40" stroke="#0b7285" stroke-width="2.2"/></g><g transform="translate(330,20)"><rect width="270" height="200" fill="#ffffff" stroke="#dce3e9"/><text x="14" y="22" font-size="16" font-weight="700" fill="#16384a">B</text><line x1="50" y1="30" x2="50" y2="170" stroke="#333" stroke-width="1.5"/><line x1="50" y1="170" x2="250" y2="170" stroke="#333" stroke-width="1.5"/><text x="150" y="192" font-size="11" text-anchor="middle" fill="#222">Time&#178; / s&#178;</text><text x="20" y="100" font-size="11" text-anchor="middle" fill="#222" transform="rotate(-90 20 100)">Distance / m</text><line x1="50" y1="170" x2="250" y2="40" stroke="#0b7285" stroke-width="2.2"/></g><g transform="translate(20,240)"><rect width="270" height="200" fill="#ffffff" stroke="#dce3e9"/><text x="14" y="22" font-size="16" font-weight="700" fill="#16384a">C</text><line x1="50" y1="30" x2="50" y2="170" stroke="#333" stroke-width="1.5"/><line x1="50" y1="170" x2="250" y2="170" stroke="#333" stroke-width="1.5"/><text x="150" y="192" font-size="11" text-anchor="middle" fill="#222">Time / s</text><text x="20" y="100" font-size="11" text-anchor="middle" fill="#222" transform="rotate(-90 20 100)">Distance / m</text><path d="M50,170 Q150,150 250,40" fill="none" stroke="#0b7285" stroke-width="2.2"/></g><g transform="translate(330,240)"><rect width="270" height="200" fill="#ffffff" stroke="#dce3e9"/><text x="14" y="22" font-size="16" font-weight="700" fill="#16384a">D</text><line x1="50" y1="30" x2="50" y2="170" stroke="#333" stroke-width="1.5"/><line x1="50" y1="170" x2="250" y2="170" stroke="#333" stroke-width="1.5"/><text x="150" y="192" font-size="11" text-anchor="middle" fill="#222">Time / s</text><text x="20" y="100" font-size="11" text-anchor="middle" fill="#222" transform="rotate(-90 20 100)">Distance / m</text><line x1="50" y1="40" x2="250" y2="150" stroke="#0b7285" stroke-width="2.2"/></g></svg>',
          },
          caption: 'Four candidate graphs (A–D) of the expected relationship between distance and time.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select: B (straight line through origin on s vs t² graph).\nJustification:\n- s = ½at² means s ∝ t² (s directly proportional to t²)\n- A graph of s vs t² should be a straight line through the origin\n- Gradient of this line equals ½a',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Another student performs a similar investigation and obtains the results shown in the table below:\n\n| Distance / m | Time / s | (Time)² / **?** |\n|-------------|----------|------------------|\n| 0.25 | 0.95 | 0.90 |\n| 0.50 | 1.33 | 1.77 |\n| 0.75 | 1.62 | 2.62 |\n| 1.00 | 1.92 | 3.69 |\n| 1.25 | 2.14 | **?** |\n\nThe table is incomplete. **Label** the missing unit for the column (Time)² and **calculate** the missing value.',
        marks: 3,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Distance / m', 'Time / s', '(Time)² / ?'],
            rows: [
              ['0.25', '0.95', '0.90'],
              ['0.50', '1.33', '1.77'],
              ['0.75', '1.62', '2.62'],
              ['1.00', '1.92', '3.69'],
              ['1.25', '2.14', '?'],
            ],
          },
          caption: 'Results table — the unit and final value of the (Time)² column are missing.',
        },
        ph: 'Unit: s² (seconds squared)\nMissing value: 2.14² = 4.5796 ≈ **4.58** s²',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'In Galileo\'s original investigation, the measuring equipment available was quite basic. One piece of equipment that Galileo used to measure time was a water clock. The water clock provided a relative measure of time based on the volume of water collected in a beaker as the ball rolled down the ramp.\n\n**Suggest** why using a water clock to measure time would have made it hard for Galileo to share his results with other scientists.',
        marks: 1,
        ph: 'A water clock does not measure time in standard units — different water clocks produce different volumes for the same time interval. Without a universal standard unit, other scientists cannot replicate or compare results.',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'In modern times we have much more advanced equipment available. **State** the name of the measuring equipment that you would use to measure time if you were repeating Galileo\'s investigation.',
        marks: 1,
        ph: 'A stopwatch (or stopclock, digital timer)',
        level: 'foundation',
      },
      {
        label: 'h',
        text: '**State** a follow-up investigation into another factor that can affect the motion of a ball on a ramp. The dependent variable is time.\n\nState the new independent variable and write a research question that this new investigation would test.',
        marks: 4,
        ph: 'New independent variable: angle of the slope (or mass of ball, surface material of ramp)\n\nResearch question: How does the angle of the slope affect the time taken for a ball to roll a fixed distance?\n\nControl variables: mass of ball, size of ball, distance (if angle is IV).',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Air Resistance: Coffee Filter Investigation (14 marks) Criterion B
  // V1: Coffee filter papers dropped from a fixed height; different scenario, same structure
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Forces & Motion — Air Resistance',
    marks: 14,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['air resistance', 'surface area', 'falling objects', 'investigation design'], level: 'advanced' },
    stem: 'One of Galileo\'s most important discoveries was that objects fall at the same rate if air resistance is not significant. In real life, air resistance significantly affects the rate at which objects fall. An MYP student is interested in the effect that the number of stacked coffee filters (which changes the mass but not the surface area) has on the time taken to fall from a fixed height.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="filt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e7d3a8"/><stop offset="1" stop-color="#c9a86b"/></linearGradient><marker id="dn5" markerWidth="9" markerHeight="9" refX="3" refY="6" orient="auto"><path d="M0,0 L6,0 L3,7 Z" fill="#0b7285"/></marker></defs><rect width="620" height="300" fill="#ffffff"/><line x1="20" y1="40" x2="600" y2="40" stroke="#5b6873" stroke-width="3"/><text x="30" y="32" font-size="11" fill="#5b6873">fixed release height</text><line x1="20" y1="276" x2="600" y2="276" stroke="#5b6873" stroke-width="3"/><text x="30" y="294" font-size="11" fill="#5b6873">ground</text><g transform="translate(130,60)"><text x="0" y="-4" font-size="12" text-anchor="middle" fill="#16384a">1 filter</text><path d="M-34,18 Q0,2 34,18 Q20,40 0,42 Q-20,40 -34,18 Z" fill="url(#filt)" stroke="#9c7a44"/></g><g transform="translate(310,60)"><text x="0" y="-4" font-size="12" text-anchor="middle" fill="#16384a">3 filters</text><path d="M-34,10 Q0,-6 34,10 Q20,32 0,34 Q-20,32 -34,10 Z" fill="url(#filt)" stroke="#9c7a44"/><path d="M-34,18 Q0,2 34,18 Q20,40 0,42 Q-20,40 -34,18 Z" fill="url(#filt)" stroke="#9c7a44" opacity="0.85"/><path d="M-34,26 Q0,10 34,26 Q20,48 0,50 Q-20,48 -34,26 Z" fill="url(#filt)" stroke="#9c7a44" opacity="0.7"/></g><g transform="translate(490,60)"><text x="0" y="-4" font-size="12" text-anchor="middle" fill="#16384a">5 filters</text><path d="M-34,2 Q0,-14 34,2 Q20,24 0,26 Q-20,24 -34,2 Z" fill="url(#filt)" stroke="#9c7a44"/><path d="M-34,10 Q0,-6 34,10 Q20,32 0,34 Q-20,32 -34,10 Z" fill="url(#filt)" stroke="#9c7a44" opacity="0.9"/><path d="M-34,18 Q0,2 34,18 Q20,40 0,42 Q-20,40 -34,18 Z" fill="url(#filt)" stroke="#9c7a44" opacity="0.8"/><path d="M-34,26 Q0,10 34,26 Q20,48 0,50 Q-20,48 -34,26 Z" fill="url(#filt)" stroke="#9c7a44" opacity="0.7"/><path d="M-34,34 Q0,18 34,34 Q20,56 0,58 Q-20,56 -34,34 Z" fill="url(#filt)" stroke="#9c7a44" opacity="0.6"/></g><g stroke="#0b7285" stroke-width="2" marker-end="url(#dn5)"><line x1="130" y1="130" x2="130" y2="262"/><line x1="310" y1="130" x2="310" y2="262"/><line x1="490" y1="130" x2="490" y2="262"/></g><text x="310" y="160" font-size="12" text-anchor="middle" fill="#0b7285">dropped from the same height; time the fall</text></svg>',
      },
      caption: 'Stacks of 1, 3 and 5 coffee filters are dropped from the same fixed height. Stacking changes the mass but keeps the surface area the same.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a hypothesis for the student\'s investigation. Your explanation should refer to forces and particle theory.',
        marks: 3,
        ph: 'If the mass of stacked coffee filters increases (more filters), then the time taken to fall will decrease (they fall faster).\nBecause: A greater weight (downward force) acts on more filters. The upward air resistance force stays similar (same surface area). The greater net downward force causes greater acceleration. More filters also have greater inertia — two effects oppose each other, but net effect is faster fall. Air resistance: same number of collisions with air particles per unit area.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: '**Design** an investigation that the student could use to test the hypothesis in part (a).\n\nIn your plan you should include:\n- Your independent and dependent variables\n- Two control variables with justification\n- A list of the equipment you will use\n- An explanation of how you will collect sufficient data\n- Details of how you will make sure your method is safe',
        marks: 11,
        ph: 'Variables:\n- IV: number of stacked coffee filters (1–5)\n- DV: time taken to fall (from fixed height)\n- CV1: height of drop — different heights change total fall time regardless of filter mass\n- CV2: orientation of filters — different orientations change surface area and air resistance\n\nEquipment: set of identical coffee filters, stopwatch, metre ruler or tape measure, flat surface to drop from, chair/table as platform.\n\nMethod:\n1. Stack 1, 2, 3, 4, 5 filters\n2. Drop each stack from same height (e.g. 2 m)\n3. Time each drop with stopwatch\n4. Repeat 3 times per stack, calculate mean\n5. Record in table\n\nSafety: Use stable platform; keep drop zone clear.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Optics: Camera Lens Focal Length (15 marks) Criterion C
  // V1: Camera lens with f ≈ 10 cm; Q6a dₒ = 25 cm → dᵢ = 16.7 cm
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Light & Optics — Camera Lens',
    marks: 15,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['convex lens', 'focal length', 'image distance', 'data processing'], level: 'proficient' },
    stem: 'Camera lenses use convex lenses to focus light from a scene onto the camera sensor. With a convex lens, light from an object converges to form a sharp image. The focal length of a lens (f) is the distance between the centre of the lens and the focus point. It is constant for a particular lens.\n\nThe formula relating object distance (dₒ) and image distance (dᵢ) is: **1/f = 1/dₒ + 1/dᵢ**',
    artefact: {
      component: 'OpticsSim',
      data: {
        mode: 'lens',
        focalLength: 10,
        objectDistance: 25,
        objectHeight: 6,
        unit: 'cm',
      },
      caption: 'A convex camera lens forms a real image on a movable screen. The object is at dₒ = 25 cm; move the screen to find where the image is sharp.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A simulation has a distance dₒ of **25 cm**. Change the position of the movable screen to **determine** the distance dᵢ.\n\nThe simulation shows the image is sharp when the screen is at the **41.7 cm** mark on the ruler. Calculate dᵢ.',
        marks: 3,
        ph: 'The lens is positioned at 25 cm from the object.\ndᵢ = 41.7 − 25 = **16.7 cm**\n(Accept 41.7 ± 0.1 for the reading; dᵢ = 16.7 ± 0.1 cm)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'A student collects more data for different values of dₒ. Their raw notebook data is shown below:\n\n- 15.0 cm — 30.0 centimetres\n- 20.0 cm — 20.0 cm\n- 40.0 cm — 0.180 m\n- 50.0 cm — 12.5 cm\n\n**Organise and present** the student\'s data in a table of results. Include your result from part (a).',
        marks: 4,
        ph: '| dₒ / cm | dᵢ / cm |\n|---------|--------|\n| 15.0 | 30.0 |\n| 20.0 | 20.0 |\n| 25.0 | 16.7 |\n| 40.0 | 18.0 |\n| 50.0 | 12.5 |\n\nMarks: correct headings with symbols and units; data in ascending order of dₒ; all values consistent decimal places.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Another student in the same class processes the data. Their table of processed data is shown below:\n\n| 1/dₒ / m⁻¹ | 1/dᵢ / m⁻¹ | 1/f / m⁻¹ | f / [?] |\n|------------|------------|------------|----------|\n| 6.67 | 3.33 | 10.00 | 0.100 |\n| 5.00 | 5.00 | 10.00 | 0.100 |\n| 4.00 | 5.99 | 9.99 | 0.100 |\n| 3.33 | **?** | **?** | **?** |\n| 2.50 | 5.56 | 8.06 | 0.124 |\n| 2.00 | 8.00 | 10.00 | 0.100 |\n\n**Label** the incomplete column header and **calculate** the missing processed data values.',
        marks: 3,
        ph: 'Column header: f / m (metres)\nMissing 1/dᵢ: 1/f − 1/dₒ = 10.00 − 3.33 = **6.67** m⁻¹\nMissing 1/f: 3.33 + 6.67 = **10.00** m⁻¹\nMissing f: 1/10.00 = **0.100** m',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'One of the calculated f values in the table appears to be anomalous. **Identify** this data point.',
        marks: 1,
        ph: 'The anomalous value is **0.124 m** (corresponding to 1/dₒ = 2.50 m⁻¹, dₒ = 40 cm). It is noticeably larger than the other values which cluster around 0.100 m.',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'A graph of 1/dᵢ against 1/dₒ can be used to find the focal length of the lens. The line of best fit will have a y-intercept of 1/f. The four graphs below show different lines of best fit for the data points.\n\n**Select** the most appropriate graph. **Justify** your answer.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 460" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><style>.ax{stroke:#333;stroke-width:1.5}.pt{fill:#0b7285}.lo{stroke:#f08c00;stroke-width:2.2;fill:none}.lb{font-size:11px;fill:#222}</style></defs><rect width="620" height="460" fill="#ffffff"/><g transform="translate(20,20)"><rect width="270" height="200" fill="#ffffff" stroke="#dce3e9"/><text x="14" y="22" font-size="16" font-weight="700" fill="#16384a">A</text><line class="ax" x1="50" y1="30" x2="50" y2="170"/><line class="ax" x1="50" y1="170" x2="250" y2="170"/><text x="150" y="192" class="lb" text-anchor="middle">1/d&#8338; / m&#8315;&#185;</text><text x="20" y="100" class="lb" text-anchor="middle" transform="rotate(-90 20 100)">1/d&#7522; / m&#8315;&#185;</text><circle class="pt" cx="240.6" cy="123.4" r="3.5"/><circle class="pt" cx="192.9" cy="100" r="3.5"/><circle class="pt" cx="164.3" cy="86.1" r="3.5"/><circle class="pt" cx="145.1" cy="76.6" r="3.5"/><circle class="pt" cx="121.4" cy="92.2" r="3.5"/><circle class="pt" cx="107.1" cy="58" r="3.5"/><line class="lo" x1="50" y1="58" x2="250" y2="142"/></g><g transform="translate(330,20)"><rect width="270" height="200" fill="#ffffff" stroke="#dce3e9"/><text x="14" y="22" font-size="16" font-weight="700" fill="#16384a">B</text><line class="ax" x1="50" y1="30" x2="50" y2="170"/><line class="ax" x1="50" y1="170" x2="250" y2="170"/><text x="150" y="192" class="lb" text-anchor="middle">1/d&#8338; / m&#8315;&#185;</text><text x="20" y="100" class="lb" text-anchor="middle" transform="rotate(-90 20 100)">1/d&#7522; / m&#8315;&#185;</text><circle class="pt" cx="240.6" cy="123.4" r="3.5"/><circle class="pt" cx="192.9" cy="100" r="3.5"/><circle class="pt" cx="164.3" cy="86.1" r="3.5"/><circle class="pt" cx="145.1" cy="76.6" r="3.5"/><circle class="pt" cx="121.4" cy="92.2" r="3.5"/><circle class="pt" cx="107.1" cy="58" r="3.5"/><line class="lo" x1="50" y1="30" x2="250" y2="150"/></g><g transform="translate(20,240)"><rect width="270" height="200" fill="#ffffff" stroke="#dce3e9"/><text x="14" y="22" font-size="16" font-weight="700" fill="#16384a">C</text><line class="ax" x1="50" y1="30" x2="50" y2="170"/><line class="ax" x1="50" y1="170" x2="250" y2="170"/><text x="150" y="192" class="lb" text-anchor="middle">1/d&#8338; / m&#8315;&#185;</text><text x="20" y="100" class="lb" text-anchor="middle" transform="rotate(-90 20 100)">1/d&#7522; / m&#8315;&#185;</text><circle class="pt" cx="240.6" cy="123.4" r="3.5"/><circle class="pt" cx="192.9" cy="100" r="3.5"/><circle class="pt" cx="164.3" cy="86.1" r="3.5"/><circle class="pt" cx="145.1" cy="76.6" r="3.5"/><circle class="pt" cx="121.4" cy="92.2" r="3.5"/><circle class="pt" cx="107.1" cy="58" r="3.5"/><line class="lo" x1="50" y1="30" x2="250" y2="128"/></g><g transform="translate(330,240)"><rect width="270" height="200" fill="#ffffff" stroke="#dce3e9"/><text x="14" y="22" font-size="16" font-weight="700" fill="#16384a">D</text><line class="ax" x1="50" y1="30" x2="50" y2="170"/><line class="ax" x1="50" y1="170" x2="250" y2="170"/><text x="150" y="192" class="lb" text-anchor="middle">1/d&#8338; / m&#8315;&#185;</text><text x="20" y="100" class="lb" text-anchor="middle" transform="rotate(-90 20 100)">1/d&#7522; / m&#8315;&#185;</text><circle class="pt" cx="240.6" cy="123.4" r="3.5"/><circle class="pt" cx="192.9" cy="100" r="3.5"/><circle class="pt" cx="164.3" cy="86.1" r="3.5"/><circle class="pt" cx="145.1" cy="76.6" r="3.5"/><circle class="pt" cx="121.4" cy="92.2" r="3.5"/><circle class="pt" cx="107.1" cy="58" r="3.5"/><line class="lo" x1="50" y1="80" x2="250" y2="80"/></g></svg>',
          },
          caption: 'Four candidate lines of best fit (A–D) through the 1/dᵢ versus 1/dₒ data points.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select: C\nJustification: Graph C has a straight line of best fit that does not include the anomalous data point, with roughly equal numbers of points above and below the line. The equation predicts a linear relationship.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'Use your answer to part (e) to **calculate** the focal length (f) of the lens.',
        marks: 2,
        ph: 'Read y-intercept from Graph C: y-intercept ≈ 10.0 m⁻¹ (accept 10.0 ± 0.1)\nf = 1 / 10.0 = **0.100 m** (accept 0.100 ± 0.001 m)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Helicopter: Forces & Evaluation (9 marks) Criterion A/D
  // V1: Helicopter delivering supplies to a remote community
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Motion — Helicopter',
    marks: 9,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['balanced forces', 'unbalanced forces', 'Newton\'s laws', 'helicopter technology'], level: 'proficient' },
    stem: 'A helicopter is an aircraft that can fly without wings, using rotating blades (rotors) to generate lift. Helicopters can fly in any direction and hover in place. They are used for many purposes including military operations, medical evacuation, search and rescue, and delivering supplies to remote communities.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 720 270" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="fh" markerWidth="10" markerHeight="10" refX="7" refY="3.6" orient="auto"><path d="M0,0 L9,3.6 L0,7.2 Z" fill="#16384a"/></marker></defs><rect width="720" height="270" fill="#ffffff"/><g transform="translate(15,20)"><rect width="220" height="230" rx="8" fill="#eef5fb" stroke="#9fbcd6"/><text x="14" y="26" font-size="18" font-weight="700" fill="#16384a">A</text><g transform="translate(110,140)"><ellipse cx="0" cy="6" rx="42" ry="16" fill="#3a6ea5" stroke="#274a73"/><rect x="34" y="-2" width="40" height="8" rx="3" fill="#3a6ea5"/><ellipse cx="74" cy="2" rx="6" ry="12" fill="#274a73"/><line x1="-46" y1="-14" x2="46" y2="-14" stroke="#5b6873" stroke-width="3"/><line x1="0" y1="-14" x2="0" y2="-2" stroke="#5b6873" stroke-width="3"/></g><line x1="110" y1="120" x2="110" y2="44" stroke="#16384a" stroke-width="3" marker-end="url(#fh)"/><text x="120" y="82" font-size="15" font-style="italic" font-weight="700" fill="#16384a">T</text><line x1="110" y1="162" x2="110" y2="196" stroke="#16384a" stroke-width="3" marker-end="url(#fh)"/><text x="120" y="188" font-size="15" font-style="italic" font-weight="700" fill="#16384a">W</text></g><g transform="translate(250,20)"><rect width="220" height="230" rx="8" fill="#eef5fb" stroke="#9fbcd6"/><text x="14" y="26" font-size="18" font-weight="700" fill="#16384a">B</text><g transform="translate(110,140)"><ellipse cx="0" cy="6" rx="42" ry="16" fill="#3a6ea5" stroke="#274a73"/><rect x="34" y="-2" width="40" height="8" rx="3" fill="#3a6ea5"/><ellipse cx="74" cy="2" rx="6" ry="12" fill="#274a73"/><line x1="-46" y1="-14" x2="46" y2="-14" stroke="#5b6873" stroke-width="3"/><line x1="0" y1="-14" x2="0" y2="-2" stroke="#5b6873" stroke-width="3"/></g><line x1="110" y1="120" x2="110" y2="84" stroke="#16384a" stroke-width="3" marker-end="url(#fh)"/><text x="120" y="106" font-size="15" font-style="italic" font-weight="700" fill="#16384a">T</text><line x1="110" y1="162" x2="110" y2="216" stroke="#16384a" stroke-width="3" marker-end="url(#fh)"/><text x="120" y="196" font-size="15" font-style="italic" font-weight="700" fill="#16384a">W</text></g><g transform="translate(485,20)"><rect width="220" height="230" rx="8" fill="#eef5fb" stroke="#9fbcd6"/><text x="14" y="26" font-size="18" font-weight="700" fill="#16384a">C</text><g transform="translate(110,140)"><ellipse cx="0" cy="6" rx="42" ry="16" fill="#3a6ea5" stroke="#274a73"/><rect x="34" y="-2" width="40" height="8" rx="3" fill="#3a6ea5"/><ellipse cx="74" cy="2" rx="6" ry="12" fill="#274a73"/><line x1="-46" y1="-14" x2="46" y2="-14" stroke="#5b6873" stroke-width="3"/><line x1="0" y1="-14" x2="0" y2="-2" stroke="#5b6873" stroke-width="3"/></g><line x1="110" y1="120" x2="110" y2="74" stroke="#16384a" stroke-width="3" marker-end="url(#fh)"/><text x="120" y="100" font-size="15" font-style="italic" font-weight="700" fill="#16384a">T</text><line x1="110" y1="162" x2="110" y2="208" stroke="#16384a" stroke-width="3" marker-end="url(#fh)"/><text x="120" y="192" font-size="15" font-style="italic" font-weight="700" fill="#16384a">W</text></g></svg>',
      },
      caption: 'Three force diagrams (A, B, C) showing the thrust T and weight W on a helicopter.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagrams below show the forces acting on a moving helicopter. T is the total thrust (lift) generated by the rotors and W is the weight of the helicopter. **Select** the diagram showing a helicopter **taking off**. **Justify** your answer.',
        marks: 2,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C'],
        ph: 'Select: A (diagram showing T > W — upward thrust is greater than downward weight).\nJustification: For the helicopter to take off (accelerate upwards), the forces must be unbalanced — thrust must exceed weight. This gives a net upward force, causing upward acceleration.',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Many remote communities lack adequate road infrastructure, increasing the time required to deliver medical supplies and emergency equipment. Scientists have proposed that helicopters could significantly improve access to urgent supplies in these areas. Some light helicopters can carry up to 500 kg of payload and can travel over 600 km.\n\n**Discuss and evaluate** the advantages and disadvantages of using helicopters to deliver urgent medical supplies to remote communities.',
        marks: 7,
        ph: 'Advantages:\n- Can bypass road infrastructure → reach remote areas inaccessible by road\n- Faster delivery of time-sensitive medical supplies (e.g. blood, vaccines, antivenom)\n- Can land in small clearings without need for airstrips\n- Versatile — can also perform evacuations if needed\n\nDisadvantages:\n- High operating cost (fuel, maintenance, trained pilots)\n- Weather-dependent — cannot fly safely in extreme conditions\n- Limited payload compared to trucks\n- High carbon footprint per kg delivered compared to road vehicles\n- Noise pollution, especially near wildlife or communities\n\nConclusion: For truly remote communities where road infrastructure is absent or seasonal, helicopters offer substantial advantages. However, high costs mean they are best used for urgent/emergency deliveries rather than routine supply runs.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Drones in Disaster Relief: Evaluation (14 marks) Criterion D
  // V1: Uses of drones in disaster relief and emergency response
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society — Drones in Disaster Relief',
    marks: 14,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['drone technology', 'disaster relief', 'social implications', 'science and society'], level: 'advanced' },
    stem: 'A video outlines the use of drones in disaster relief, including delivering supplies to flood-affected areas, searching for survivors with thermal cameras, assessing structural damage to buildings, and mapping terrain after earthquakes. Drones are increasingly deployed alongside human rescue teams.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dceaf4"/><stop offset="1" stop-color="#bcd6e8"/></linearGradient><linearGradient id="flood8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fa6c4"/><stop offset="1" stop-color="#3f7595"/></linearGradient><marker id="scan8" markerWidth="8" markerHeight="8" refX="3" refY="6" orient="auto"><path d="M0,0 L6,0 L3,7 Z" fill="#f08c00"/></marker></defs><rect width="620" height="320" fill="url(#sky8)"/><rect y="220" width="620" height="100" fill="url(#flood8)"/><g transform="translate(150,70)"><rect x="-40" y="-4" width="80" height="8" rx="4" fill="#2b3138"/><rect x="-16" y="-2" width="32" height="16" rx="5" fill="#3a424b"/><ellipse cx="-40" cy="-4" rx="16" ry="4" fill="#566069"/><ellipse cx="40" cy="-4" rx="16" ry="4" fill="#566069"/><rect x="-8" y="14" width="16" height="9" rx="2" fill="#566069"/></g><polygon points="150,90 110,200 190,200" fill="#f08c00" opacity="0.18"/><line x1="150" y1="90" x2="130" y2="200" stroke="#f08c00" stroke-width="1.5" stroke-dasharray="4 4" marker-end="url(#scan8)"/><line x1="150" y1="90" x2="170" y2="200" stroke="#f08c00" stroke-width="1.5" stroke-dasharray="4 4" marker-end="url(#scan8)"/><text x="150" y="55" font-size="11" text-anchor="middle" fill="#16384a">thermal camera scan</text><g transform="translate(150,206)"><ellipse cx="0" cy="6" rx="14" ry="4" fill="#2c4a5e" opacity="0.4"/><circle cx="0" cy="-4" r="7" fill="#e8b98c"/><rect x="-6" y="3" width="12" height="14" rx="3" fill="#d24b3a"/></g><text x="150" y="240" font-size="11" text-anchor="middle" fill="#16384a">survivor located</text><g transform="translate(440,90)"><rect x="-40" y="-4" width="80" height="8" rx="4" fill="#2b3138"/><rect x="-16" y="-2" width="32" height="16" rx="5" fill="#3a424b"/><ellipse cx="-40" cy="-4" rx="16" ry="4" fill="#566069"/><ellipse cx="40" cy="-4" rx="16" ry="4" fill="#566069"/></g><g transform="translate(440,120)"><line x1="0" y1="-6" x2="0" y2="22" stroke="#9c7a44" stroke-width="1.5"/><rect x="-12" y="22" width="24" height="20" rx="3" fill="#caa46b" stroke="#9c7a44"/><path d="M-18,2 Q0,-14 18,2" fill="none" stroke="#cf6b2b" stroke-width="2"/></g><text x="440" y="60" font-size="11" text-anchor="middle" fill="#16384a">supply drop</text><g transform="translate(440,200)"><rect x="-20" y="-30" width="40" height="34" fill="#9aa6b0" stroke="#5b6873"/><polygon points="-20,-30 0,-46 20,-30" fill="#7c8a98"/><rect x="-12" y="-20" width="8" height="8" fill="#3a424b"/><rect x="4" y="-20" width="8" height="8" fill="#3a424b"/><line x1="-24" y1="6" x2="22" y2="-12" stroke="#d24b3a" stroke-width="2"/></g><text x="440" y="240" font-size="11" text-anchor="middle" fill="#16384a">damage assessment</text></svg>',
      },
      caption: 'Drones in disaster relief: scanning for survivors with a thermal camera, delivering supplies, and assessing structural damage over flooded terrain.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** the use of drones in disaster relief and emergency response. In your answer:\n\n- Describe at least **two uses of drones in disaster relief**, and explain how each use benefits emergency response science\n- Discuss the **social implications** of drone technology in disaster situations (positive AND negative), with justification\n- Discuss the **political implications** of widespread drone deployment in emergencies, with further explanation',
        marks: 14,
        ph: 'Disaster relief uses:\n1. Search and rescue — drones with thermal cameras can scan large disaster zones quickly, detecting heat signatures from survivors buried under rubble without risking additional lives. Provides more systematic coverage than ground teams.\n2. Supply delivery — drones can deliver emergency supplies (medicine, water, food) to communities cut off by floods or landslides where road access is impossible. Faster than waiting for infrastructure restoration.\n3. Damage assessment — drones can safely map structural damage and landslide extent, providing data for engineering assessment and evacuation planning.\n\nSocial implications:\nPositive: Faster location of survivors saves lives; reduced risk to rescue workers in unstable environments; mental health support — seeing aerial activity reassures survivors.\nNegative: Privacy — drones with cameras in people\'s homes and private areas during emergencies. Dependence on technology that can fail in extreme conditions (heat, rain). Communities may fear autonomous machines; potential for misuse.\n\nPolitical implications:\nPositive: Drones allow faster international aid response after disasters; improve government preparedness and response metrics; reduce cost of disaster relief.\nNegative: Drone flights in national airspace during crises require international clearance. Military drones vs civilian drones — risk of confusion. Government surveillance of affected populations raises human rights concerns. Insurance and liability questions when drones crash during relief operations.',
        level: 'advanced',
      },
    ],
  },

]
