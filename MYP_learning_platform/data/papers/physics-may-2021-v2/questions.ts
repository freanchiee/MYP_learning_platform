import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2021-v2',
  subject: 'Physics',
  session: 'May',
  year: 2021,
  totalMarks: 98,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Electromagnetic Waves: Aviation Radio (8 marks) Criterion A
  // V2: Air traffic control microwave/radio signals; distance = 12 km
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Electromagnetic Waves — Aviation Radio',
    marks: 8,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'em-spectrum', topics: ['radio waves', 'electromagnetic spectrum', 'speed of waves', 'diffraction'], level: 'proficient' },
    stem: 'Radio waves are essential for safe aviation. Air traffic controllers on the ground use radio waves to communicate with pilots in aircraft. Without radio communication, pilots would have no way to receive updated weather information, landing instructions, or emergency guidance. The first air-to-ground radio communication was successfully demonstrated in the early twentieth century.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky1b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dceaf6"/><stop offset="1" stop-color="#bcd6ea"/></linearGradient><marker id="ac1L" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto"><path d="M7,0 L0,3 L7,6 Z" fill="#16384a"/></marker><marker id="ac1R" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#16384a"/></marker></defs><rect width="620" height="300" fill="url(#sky1b)"/><rect y="240" width="620" height="60" fill="#7faf6a"/><g transform="translate(80,150)"><rect x="-10" y="0" width="20" height="90" fill="#9aa6b0"/><polygon points="-22,0 22,0 12,-26 -12,-26" fill="#3a6ea5" stroke="#274a73"/><rect x="-14" y="-26" width="28" height="14" fill="#cfe0ea" stroke="#9aa6b0"/><line x1="0" y1="-26" x2="0" y2="-54" stroke="#5b6873" stroke-width="2"/><circle cx="0" cy="-54" r="3" fill="#f08c00"/></g><text x="80" y="270" font-size="12" text-anchor="middle" fill="#16384a">control tower</text><g transform="translate(470,90)"><path d="M-50,0 L40,0 L66,-8 L40,8 Z" fill="#e9edf0" stroke="#9aa6b0"/><polygon points="-10,0 -34,-22 -18,0" fill="#c0c8cf" stroke="#9aa6b0"/><polygon points="-10,0 -34,22 -18,0" fill="#c0c8cf" stroke="#9aa6b0"/><polygon points="48,0 60,-16 40,0" fill="#c0c8cf" stroke="#9aa6b0"/><circle cx="20" cy="0" r="4" fill="#3a6ea5"/></g><text x="470" y="60" font-size="12" text-anchor="middle" fill="#16384a">aircraft</text><g stroke="#0b7285" stroke-width="2" fill="none"><path d="M88,98 q90,-18 200,-2"/><path d="M92,104 q100,-22 230,-4"/><path d="M96,110 q110,-26 260,-6"/></g><text x="240" y="60" font-size="12" fill="#0b7285">radio signal</text><line x1="80" y1="200" x2="470" y2="200" stroke="#16384a" stroke-width="1" marker-start="url(#ac1L)" marker-end="url(#ac1R)"/><text x="275" y="220" font-size="13" font-weight="700" text-anchor="middle" fill="#16384a">12 km from the control tower</text></svg>',
      },
      caption: 'An air traffic controller sends a landing instruction by radio to an aircraft 12 km from the control tower.',
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
        text: 'Radio waves used in aviation can travel beyond the visible horizon. An animation shows radio waves bending around the Earth\'s curved surface to reach aircraft that are not in the direct line of sight of a ground antenna.\n\n**Select** the phenomenon shown in the animation.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Reflection', 'B. Diffraction', 'C. Refraction', 'D. Interference'],
        ph: 'B',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'An air traffic controller transmits a landing instruction to an aircraft at a distance of **12 km** from the control tower. **Calculate** the time taken for the radio signal to travel 12 km. You should take the speed of radio waves in air to be **3.0 × 10⁸ m s⁻¹**. Give your answer in **scientific notation**.',
        marks: 3,
        ph: 'Convert: 12 km = 12 000 m\nt = d/v = 12 000 / (3.0 × 10⁸)\n= **4.0 × 10⁻⁵ s**',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Suggest** two reasons why communication using radio waves was such an important discovery for aviation.',
        marks: 2,
        ph: 'Any two of:\n- Pilots can receive real-time guidance from ground controllers → safer navigation\n- Communication over large distances (to aircraft far from airport) without physical connection\n- Enables precise coordination of takeoff/landing to prevent mid-air collisions\n- Emergency communication with distressed aircraft\n- Led to development of radar for tracking aircraft positions',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Radioactivity: Technetium-99m in Bone Scanning (9 marks) Criterion A
  // V2: Tc-99m (Z=43, A=99) used in bone scans; half-life from graph ≈ 6 h
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Physics — Technetium-99m',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'radioactive decay', 'half-life', 'nuclear medicine'], level: 'proficient' },
    stem: 'Technetium is a chemical element used in nuclear medicine. It has an atomic number of 43. The unstable technetium-99m isotope has a mass number of 99 and decays by emitting gamma radiation only. It is widely used in bone scans and organ imaging to diagnose diseases.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct option to complete the following sentences about an atom of technetium-99m:\n\n- 43 is the **[Select]** in the nucleus.\n- 99 is the **[Select]** in the nucleus.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetOptions: ['atomic number', 'mass number', 'number of protons', 'number of neutrons', 'number of nucleons'],
        widgetItems: ['43 is the', '99 is the'],
        ph: 'number of protons (atomic number) | mass number (number of nucleons)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The three images below show the path of a charged particle moving through an electric field.\n\n**Select** the image that shows the path of beta radiation emitted by a different isotope. **Justify** your answer.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="nucT" cx="0.4" cy="0.35"><stop offset="0" stop-color="#9fd0ff"/><stop offset="1" stop-color="#1c4f9c"/></radialGradient><marker id="bw2" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto"><path d="M0,0 L8,3.2 L0,6.4 Z" fill="#0b7285"/></marker></defs><rect width="720" height="280" fill="#ffffff"/><g transform="translate(10,30)"><rect width="220" height="230" rx="6" fill="#f4f8fb" stroke="#c4ced8"/><text x="12" y="26" font-size="20" font-weight="700" fill="#16384a">A</text><rect x="120" y="34" width="78" height="8" rx="3" fill="#9aa6b0"/><text x="202" y="44" font-size="20" font-weight="700" fill="#d24b3a">+</text><rect x="120" y="186" width="78" height="8" rx="3" fill="#9aa6b0"/><text x="202" y="200" font-size="22" font-weight="700" fill="#2c6a87">&#8722;</text><circle cx="40" cy="114" r="20" fill="url(#nucT)" stroke="#0e2a52"/><line x1="62" y1="114" x2="200" y2="114" stroke="#0b7285" stroke-width="2.4" stroke-dasharray="8 7" marker-end="url(#bw2)"/><text x="110" y="222" font-size="11" text-anchor="middle" fill="#5b6873">no deflection</text></g><g transform="translate(250,30)"><rect width="220" height="230" rx="6" fill="#f4f8fb" stroke="#c4ced8"/><text x="12" y="26" font-size="20" font-weight="700" fill="#16384a">B</text><rect x="120" y="34" width="78" height="8" rx="3" fill="#9aa6b0"/><text x="202" y="44" font-size="20" font-weight="700" fill="#d24b3a">+</text><rect x="120" y="186" width="78" height="8" rx="3" fill="#9aa6b0"/><text x="202" y="200" font-size="22" font-weight="700" fill="#2c6a87">&#8722;</text><circle cx="40" cy="114" r="20" fill="url(#nucT)" stroke="#0e2a52"/><path d="M62,114 Q150,128 200,182" fill="none" stroke="#0b7285" stroke-width="2.4" stroke-dasharray="8 7" marker-end="url(#bw2)"/><text x="110" y="222" font-size="11" text-anchor="middle" fill="#5b6873">bends to &#8722; plate</text></g><g transform="translate(490,30)"><rect width="220" height="230" rx="6" fill="#f4f8fb" stroke="#c4ced8"/><text x="12" y="26" font-size="20" font-weight="700" fill="#16384a">C</text><rect x="120" y="34" width="78" height="8" rx="3" fill="#9aa6b0"/><text x="202" y="44" font-size="20" font-weight="700" fill="#d24b3a">+</text><rect x="120" y="186" width="78" height="8" rx="3" fill="#9aa6b0"/><text x="202" y="200" font-size="22" font-weight="700" fill="#2c6a87">&#8722;</text><circle cx="40" cy="114" r="20" fill="url(#nucT)" stroke="#0e2a52"/><path d="M62,114 Q150,100 200,46" fill="none" stroke="#0b7285" stroke-width="2.4" stroke-dasharray="8 7" marker-end="url(#bw2)"/><text x="110" y="222" font-size="11" text-anchor="middle" fill="#5b6873">bends to + plate</text></g></svg>',
          },
          caption: 'Three possible paths (A, B, C) for a beta particle between charged plates in an electric field.',
        },
        ph: 'Select: image C (beta particles deflected towards the positive plate).\nJustification: Beta particles are electrons, which are negatively charged. Negatively charged particles are attracted to the positive plate, so they are deflected towards the positive plate in an electric field.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The graph below shows how the mass of technetium-99m changes with time. Use the graph to **determine** the half-life of technetium-99m.',
        marks: 2,
        artefact: {
          component: 'DecaySim',
          data: {
            isotope: 'technetium-99m',
            daughter: 'technetium-99',
            decayMode: 'gamma',
            halfLife: 6,
            units: 'h',
            initialMass: 100,
            massUnits: 'g',
            axisMax: 30,
          },
          caption: 'Mass of technetium-99m against time. Drag the time marker to read off when the mass falls to half its starting value.',
        },
        ph: 'From the graph: start with initial mass. Find the time when mass halves.\nHalf-life ≈ **6 h** (accept 5–7 h from graph)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'Technetium-99m is used in medicine as a radioactive tracer injected into the body.\n\n**Suggest** why the half-life and the gamma emission of technetium-99m make it useful for bone scanning.',
        marks: 2,
        ph: 'Half-life: The short half-life (≈6 h) means radioactivity decays quickly after the scan is complete, minimising the radiation dose to the patient.\n\nGamma emission: Gamma rays penetrate bone and soft tissue, allowing an external gamma camera to detect the radiation and form an image of the skeleton. No beta radiation means less tissue damage from the tracer itself.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Kinetic Energy & Regenerative Braking: Hybrid Bus (11 marks) Criterion A
  // V2: Hybrid city bus; mass = 2000 kg; speed = 16 m/s; braking distance = 22 m
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power — Hybrid Bus',
    marks: 11,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'deceleration', 'energy transformation', 'hybrid vehicles'], level: 'proficient' },
    stem: 'Energy transformations occur in moving vehicles. Hybrid buses use a combination of diesel fuel and electrical energy stored in batteries to provide their kinetic energy. These buses are designed to be more fuel efficient and reduce emissions in urban environments.',
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the kinetic energy of a **2000 kg** hybrid bus moving at **16 m s⁻¹**.',
        marks: 2,
        ph: 'KE = ½mv²\n= ½ × 2000 × 16²\n= ½ × 2000 × 256\n= 1000 × 256\n= **256 000 J** (256 kJ)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'When the driver of the bus hits the brakes, the bus slows down to a complete stop. The braking distance is **22 m**.\n\n**Calculate** the average deceleration of the bus during braking. Give your answer to **3 significant figures**.',
        marks: 4,
        ph: 'Use v² = u² + 2as\n0 = 16² + 2 × a × 22\n0 = 256 + 44a\n44a = −256\na = −256/44 = −5.818... ≈ **−5.82 m s⁻²** (to 3 s.f.)',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'In conventional braking, the brakes slow down the bus by transforming all the kinetic energy of the bus into heat energy.\n\n**State** why the heat energy produced during braking is considered to be wasted energy.',
        marks: 1,
        ph: 'Heat energy cannot be used by the bus to perform useful work — it cannot be converted back to kinetic energy to drive the bus forward.',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'Regenerative brakes are a feature of hybrid buses. During regenerative braking, some of the energy wasted as heat is used to recharge the bus\'s battery instead.\n\nThe diagram below shows the energy transformations that take place in a hybrid bus during braking. **Select** the correct energy forms to complete the diagram.\n\nKinetic energy → **[?]** → Electrical energy → **[?]** → Thermal energy',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 760 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ec2" markerWidth="11" markerHeight="11" refX="8" refY="4" orient="auto"><path d="M0,0 L9,4 L0,8 Z" fill="#0b7285"/></marker><linearGradient id="ecb2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8f1f6"/><stop offset="1" stop-color="#cfe0ea"/></linearGradient></defs><rect width="760" height="130" fill="#ffffff"/><g font-size="13" font-weight="600" fill="#16384a" text-anchor="middle"><rect x="12" y="48" width="120" height="46" rx="6" fill="url(#ecb2)" stroke="#9fb0c0"/><text x="72" y="76">Kinetic energy</text><rect x="166" y="48" width="120" height="46" rx="6" fill="#ffffff" stroke="#7c8a98" stroke-dasharray="6 4"/><text x="226" y="72" font-size="18" fill="#9aa6b0">?</text><rect x="320" y="48" width="124" height="46" rx="6" fill="url(#ecb2)" stroke="#9fb0c0"/><text x="382" y="76">Electrical energy</text><rect x="478" y="48" width="120" height="46" rx="6" fill="#ffffff" stroke="#7c8a98" stroke-dasharray="6 4"/><text x="538" y="72" font-size="18" fill="#9aa6b0">?</text><rect x="632" y="48" width="120" height="46" rx="6" fill="url(#ecb2)" stroke="#9fb0c0"/><text x="692" y="76">Thermal energy</text></g><g stroke="#0b7285" stroke-width="4" marker-end="url(#ec2)"><line x1="134" y1="71" x2="162" y2="71"/><line x1="288" y1="71" x2="316" y2="71"/><line x1="446" y1="71" x2="474" y2="71"/><line x1="600" y1="71" x2="628" y2="71"/></g><text x="380" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#16384a">Energy transformations during regenerative braking (hybrid bus)</text></svg>',
          },
          caption: 'Energy transformation chain during regenerative braking. Fill the two missing energy forms.',
        },
        widget: 'energy_chain',
        ph: 'Kinetic energy → Kinetic energy (mechanical) → Electrical energy → Chemical potential energy → Thermal energy',
        level: 'foundation',
      },
      {
        label: 'e',
        text: '**Suggest** why regenerative braking helps the hybrid bus to use less diesel fuel than a conventional bus.',
        marks: 1,
        ph: 'During regenerative braking, kinetic energy is converted to electrical energy and stored as chemical potential energy in the battery. This stored energy can be used to drive the bus, reducing the amount of diesel fuel needed.',
        level: 'developing',
      },
      {
        label: 'f',
        text: '**Outline** why reducing the fuel consumed by city buses is an issue of global significance.',
        marks: 2,
        ph: 'Burning diesel produces CO₂ (a greenhouse gas contributing to climate change) and particulates that cause urban air pollution and health problems. Reducing fuel consumption addresses both climate change (a global problem) and urban air quality, which affects millions of city dwellers worldwide.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Galileo's Ramp: Rubber Ball Experiment (18 marks) Criterion B/C
  // V2: Rubber ball on ramp; different time data; missing value = 2.38² = 5.66 s²
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Forces & Motion — Ball on Ramp',
    marks: 18,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['acceleration', 'distance-time graphs', 'velocity', 'investigation design'], level: 'proficient' },
    stem: 'The famous scientist Galileo was fascinated by the motion of accelerating objects. He studied the motion of a ball rolling down a ramp. He was interested in the relationship between distance and time. By setting the ramp at a small angle, the motion would happen slowly enough for him to take measurements.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="ramp4b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#caa46b"/><stop offset="1" stop-color="#9c7a44"/></linearGradient><radialGradient id="ball4b" cx="0.35" cy="0.3"><stop offset="0" stop-color="#f2c8b8"/><stop offset="1" stop-color="#c0392b"/></radialGradient><marker id="ar4b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="620" height="280" fill="#ffffff"/><line x1="40" y1="250" x2="590" y2="250" stroke="#5b6873" stroke-width="3"/><polygon points="80,80 80,250 540,250" fill="url(#ramp4b)" stroke="#7a5e34" stroke-width="2"/><line x1="80" y1="80" x2="80" y2="250" stroke="#7a5e34" stroke-width="2"/><rect x="78" y="80" width="6" height="20" fill="#7a5e34"/><circle cx="150" cy="200" r="15" fill="url(#ball4b)" stroke="#8e261b" stroke-width="1.5"/><path d="M168,210 L300,242" stroke="#0b7285" stroke-width="2.5" stroke-dasharray="7 5" marker-end="url(#ar4b)"/><text x="240" y="232" font-size="12" fill="#0b7285">rolls down</text><path d="M120,250 A60,60 0 0 0 80,210" fill="none" stroke="#16384a" stroke-width="1.2"/><text x="128" y="240" font-size="13" font-style="italic" fill="#16384a">θ</text><text x="320" y="120" font-size="13" font-weight="700" fill="#16384a">Rubber ball rolling down a ramp</text><text x="320" y="142" font-size="12" fill="#5b6873">distance s measured along the slope</text><line x1="150" y1="270" x2="500" y2="270" stroke="#16384a" stroke-width="1" marker-start="url(#g4bL)" marker-end="url(#g4bR)"/><defs><marker id="g4bL" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto"><path d="M7,0 L0,3 L7,6 Z" fill="#16384a"/></marker><marker id="g4bR" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#16384a"/></marker></defs><text x="325" y="266" font-size="11" text-anchor="middle" fill="#16384a">distance travelled, s</text></svg>',
      },
      caption: 'A rubber ball released from rest rolls a measured distance s down a ramp set at a small angle θ.',
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
        ph: 'The ball accelerates because a constant net force acts on it — the component of gravity along the slope. By Newton\'s second law (F = ma), a constant force on a constant mass produces constant acceleration. Both gravitational force and mass are constant, so acceleration is constant.',
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
        ph: 'Select: B (straight line through origin on s vs t² graph).\nJustification:\n- s = ½at² means s ∝ t² (directly proportional)\n- Graph of s vs t² should be straight line through origin\n- Gradient equals ½a',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Another student performs a similar investigation and obtains the results shown in the table below:\n\n| Distance / m | Time / s | (Time)² / **?** |\n|-------------|----------|------------------|\n| 0.25 | 1.10 | 1.21 |\n| 0.50 | 1.52 | 2.31 |\n| 0.75 | 1.84 | 3.39 |\n| 1.00 | 2.15 | 4.62 |\n| 1.25 | 2.38 | **?** |\n\nThe table is incomplete. **Label** the missing unit for the column (Time)² and **calculate** the missing value.',
        marks: 3,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Distance / m', 'Time / s', '(Time)² / ?'],
            rows: [
              ['0.25', '1.10', '1.21'],
              ['0.50', '1.52', '2.31'],
              ['0.75', '1.84', '3.39'],
              ['1.00', '2.15', '4.62'],
              ['1.25', '2.38', '?'],
            ],
          },
          caption: 'Results table — the unit and final value of the (Time)² column are missing.',
        },
        ph: 'Unit: s² (seconds squared)\nMissing value: 2.38² = 5.6644 ≈ **5.66** s²',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'In Galileo\'s original investigation, the measuring equipment available was quite basic. One piece of equipment that Galileo used to measure time was a water clock. The water clock provided a relative measure of time based on the volume of water collected in a beaker as the ball rolled down the ramp.\n\n**Suggest** why using a water clock to measure time would have made it hard for Galileo to share his results with other scientists.',
        marks: 1,
        ph: 'A water clock does not measure time in standard units — different water clocks produce different volumes for the same time interval. Without a universal standard unit, results cannot be replicated or compared by other scientists.',
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
        ph: 'New independent variable: angle of the slope (or mass of ball, surface material)\n\nResearch question: How does the angle of the slope affect the time taken for a ball to roll a fixed distance?\n\nControl variables: mass of ball, size of ball, distance (do not use distance as CV if it is DV).',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Air Resistance: Cone-shaped Paper Investigation (14 marks) Criterion B
  // V2: Cone-shaped paper objects of different base areas dropped from fixed height
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Forces & Motion — Cone Drag',
    marks: 14,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['air resistance', 'surface area', 'falling objects', 'investigation design'], level: 'advanced' },
    stem: 'One of Galileo\'s most important discoveries was that objects fall at the same rate if air resistance is not significant. In real life, air resistance significantly affects falling objects. An MYP student is interested in the effect that the base area of a cone-shaped paper object has on the time taken to fall from a fixed height.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="cone5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0e3c4"/><stop offset="1" stop-color="#d8c489"/></linearGradient><marker id="dn5b" markerWidth="9" markerHeight="9" refX="3" refY="6" orient="auto"><path d="M0,0 L6,0 L3,7 Z" fill="#0b7285"/></marker></defs><rect width="620" height="300" fill="#ffffff"/><line x1="20" y1="40" x2="600" y2="40" stroke="#5b6873" stroke-width="3"/><text x="30" y="32" font-size="11" fill="#5b6873">fixed release height</text><line x1="20" y1="276" x2="600" y2="276" stroke="#5b6873" stroke-width="3"/><text x="30" y="294" font-size="11" fill="#5b6873">ground</text><g transform="translate(130,60)"><polygon points="0,0 -26,56 26,56" fill="url(#cone5)" stroke="#a8915a"/><ellipse cx="0" cy="56" rx="26" ry="7" fill="#c4ad72" stroke="#a8915a"/><text x="0" y="84" font-size="12" text-anchor="middle" fill="#16384a">small base</text></g><g transform="translate(310,60)"><polygon points="0,0 -40,56 40,56" fill="url(#cone5)" stroke="#a8915a"/><ellipse cx="0" cy="56" rx="40" ry="9" fill="#c4ad72" stroke="#a8915a"/><text x="0" y="86" font-size="12" text-anchor="middle" fill="#16384a">medium base</text></g><g transform="translate(490,60)"><polygon points="0,0 -54,56 54,56" fill="url(#cone5)" stroke="#a8915a"/><ellipse cx="0" cy="56" rx="54" ry="11" fill="#c4ad72" stroke="#a8915a"/><text x="0" y="86" font-size="12" text-anchor="middle" fill="#16384a">large base</text></g><g stroke="#0b7285" stroke-width="2" marker-end="url(#dn5b)"><line x1="130" y1="160" x2="130" y2="262"/><line x1="310" y1="160" x2="310" y2="262"/><line x1="490" y1="160" x2="490" y2="262"/></g><text x="310" y="186" font-size="12" text-anchor="middle" fill="#0b7285">dropped from the same height; time the fall</text></svg>',
      },
      caption: 'Paper cones with different base areas (made from the same amount of paper) are dropped from the same fixed height.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a hypothesis for the student\'s investigation. Your explanation should refer to forces and particle theory.',
        marks: 3,
        ph: 'If the base area of the paper cone increases, then the time taken to fall will increase (it will fall more slowly).\nBecause: A larger base area means more air particles collide with the cone per second, creating a greater upward air resistance force. The greater upward force reduces the net downward force, so the cone decelerates and falls more slowly, taking longer to reach the ground.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: '**Design** an investigation that the student could use to test the hypothesis in part (a).\n\nIn your plan you should include:\n- Your independent and dependent variables\n- Two control variables with justification\n- A list of the equipment you will use\n- An explanation of how you will collect sufficient data\n- Details of how you will make sure your method is safe',
        marks: 11,
        ph: 'Variables:\n- IV: base area of the paper cone (cm²)\n- DV: time taken to fall (from fixed height)\n- CV1: mass of the cone — heavier cones fall faster regardless of area; must keep mass constant by using same amount of paper\n- CV2: height of drop — different heights change total fall time independently\n\nEquipment: paper, scissors, ruler/compass (to measure base radius and calculate area), stopwatch, metre ruler.\n\nMethod:\n1. Make 5 cones with different base areas (e.g. 10, 20, 30, 40, 50 cm²) using the same amount of paper\n2. Drop each cone from the same height (e.g. 2 m)\n3. Time each fall with stopwatch, 3 repeats per cone\n4. Calculate mean time per cone\n5. Record in a table\n\nSafety: Stand on a stable surface; ensure drop zone is clear.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Optics: Projector Lens Focal Length (15 marks) Criterion C
  // V2: Projector/telescope lens with f ≈ 14.5 cm; Q6a dₒ = 30 cm → dᵢ = 28.0 cm
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Light & Optics — Projector Lens',
    marks: 15,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['convex lens', 'focal length', 'image distance', 'data processing'], level: 'proficient' },
    stem: 'Projector lenses use convex lenses to focus light from a small display panel onto a large screen. With a convex lens, light from an object converges to form a magnified image on the screen. The focal length of a lens (f) is the distance between the centre of the lens and the focus point.\n\nThe formula relating object distance (dₒ) and image distance (dᵢ) is: **1/f = 1/dₒ + 1/dᵢ**',
    artefact: {
      component: 'OpticsSim',
      data: {
        mode: 'lens',
        focalLength: 14.5,
        objectDistance: 30,
        objectHeight: 6,
        unit: 'cm',
      },
      caption: 'A convex projector lens forms a real image on a movable screen. The object is at dₒ = 30 cm; move the screen to find where the image is sharp.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A simulation has a distance dₒ of **30 cm**. Change the position of the movable screen to **determine** the distance dᵢ.\n\nThe simulation shows the image is sharp when the screen is at the **58.0 cm** mark on the ruler. Calculate dᵢ.',
        marks: 3,
        ph: 'The lens is positioned at 30 cm from the object.\ndᵢ = 58.0 − 30 = **28.0 cm**\n(Accept 58.0 ± 0.1 for the reading; dᵢ = 28.0 ± 0.1 cm)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'A student collects more data for different values of dₒ. Their raw notebook data is shown below:\n\n- 20.0 cm — 52.6 centimetres\n- 25.0 cm — 0.345 m\n- 50.0 cm — 16.0 cm\n- 60.0 cm — 19.1 cm\n\n**Organise and present** the student\'s data in a table of results. Include your result from part (a).',
        marks: 4,
        ph: '| dₒ / cm | dᵢ / cm |\n|---------|--------|\n| 20.0 | 52.6 |\n| 25.0 | 34.5 |\n| 30.0 | 28.0 |\n| 50.0 | 16.0 |\n| 60.0 | 19.1 |\n\nMarks: correct headings with symbols and units; data in ascending order of dₒ; 0.345 m → 34.5 cm conversion; consistent decimal places.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Another student in the same class processes the data. Their table of processed data is shown below:\n\n| 1/dₒ / m⁻¹ | 1/dᵢ / m⁻¹ | 1/f / m⁻¹ | f / [?] |\n|------------|------------|------------|----------|\n| 5.00 | 1.90 | 6.90 | 0.145 |\n| 4.00 | 2.90 | 6.90 | 0.145 |\n| 3.33 | 3.57 | 6.90 | 0.145 |\n| 2.50 | **?** | **?** | **?** |\n| 2.00 | 6.25 | 8.25 | 0.121 |\n| 1.67 | 5.24 | 6.91 | 0.145 |\n\n**Label** the incomplete column header and **calculate** the missing processed data values.',
        marks: 3,
        ph: 'Column header: f / m (metres)\nMissing 1/dᵢ: 1/f − 1/dₒ = 6.90 − 2.50 = **4.40** m⁻¹\nMissing 1/f: 2.50 + 4.40 = **6.90** m⁻¹\nMissing f: 1/6.90 = **0.145** m',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'One of the calculated f values in the table appears to be anomalous. **Identify** this data point.',
        marks: 1,
        ph: 'The anomalous value is **0.121 m** (corresponding to 1/dₒ = 2.00 m⁻¹, dₒ = 50 cm). It is noticeably smaller than the other values which cluster around 0.145 m.',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'A graph of 1/dᵢ against 1/dₒ can be used to find the focal length of the lens. The line of best fit will have a y-intercept of 1/f. The four graphs below show different lines of best fit for the data points.\n\n**Select** the most appropriate graph. **Justify** your answer.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 460" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><style>.ax{stroke:#333;stroke-width:1.5}.pt{fill:#0b7285}.lo{stroke:#f08c00;stroke-width:2.2;fill:none}.lb{font-size:11px;fill:#222}</style></defs><rect width="620" height="460" fill="#ffffff"/><g transform="translate(20,20)"><rect width="270" height="200" fill="#ffffff" stroke="#dce3e9"/><text x="14" y="22" font-size="16" font-weight="700" fill="#16384a">A</text><line class="ax" x1="50" y1="30" x2="50" y2="170"/><line class="ax" x1="50" y1="170" x2="250" y2="170"/><text x="150" y="192" class="lb" text-anchor="middle">1/d&#8338; / m&#8315;&#185;</text><text x="20" y="100" class="lb" text-anchor="middle" transform="rotate(-90 20 100)">1/d&#7522; / m&#8315;&#185;</text><circle class="pt" cx="216.7" cy="136.75" r="3.5"/><circle class="pt" cx="183.3" cy="119.25" r="3.5"/><circle class="pt" cx="161" cy="107.5" r="3.5"/><circle class="pt" cx="133.3" cy="93" r="3.5"/><circle class="pt" cx="116.7" cy="60.6" r="3.5"/><circle class="pt" cx="105.7" cy="78.3" r="3.5"/><line class="lo" x1="50" y1="60" x2="250" y2="140"/></g><g transform="translate(330,20)"><rect width="270" height="200" fill="#ffffff" stroke="#dce3e9"/><text x="14" y="22" font-size="16" font-weight="700" fill="#16384a">B</text><line class="ax" x1="50" y1="30" x2="50" y2="170"/><line class="ax" x1="50" y1="170" x2="250" y2="170"/><text x="150" y="192" class="lb" text-anchor="middle">1/d&#8338; / m&#8315;&#185;</text><text x="20" y="100" class="lb" text-anchor="middle" transform="rotate(-90 20 100)">1/d&#7522; / m&#8315;&#185;</text><circle class="pt" cx="216.7" cy="136.75" r="3.5"/><circle class="pt" cx="183.3" cy="119.25" r="3.5"/><circle class="pt" cx="161" cy="107.5" r="3.5"/><circle class="pt" cx="133.3" cy="93" r="3.5"/><circle class="pt" cx="116.7" cy="60.6" r="3.5"/><circle class="pt" cx="105.7" cy="78.3" r="3.5"/><line class="lo" x1="50" y1="30" x2="250" y2="160"/></g><g transform="translate(20,240)"><rect width="270" height="200" fill="#ffffff" stroke="#dce3e9"/><text x="14" y="22" font-size="16" font-weight="700" fill="#16384a">C</text><line class="ax" x1="50" y1="30" x2="50" y2="170"/><line class="ax" x1="50" y1="170" x2="250" y2="170"/><text x="150" y="192" class="lb" text-anchor="middle">1/d&#8338; / m&#8315;&#185;</text><text x="20" y="100" class="lb" text-anchor="middle" transform="rotate(-90 20 100)">1/d&#7522; / m&#8315;&#185;</text><circle class="pt" cx="216.7" cy="136.75" r="3.5"/><circle class="pt" cx="183.3" cy="119.25" r="3.5"/><circle class="pt" cx="161" cy="107.5" r="3.5"/><circle class="pt" cx="133.3" cy="93" r="3.5"/><circle class="pt" cx="116.7" cy="60.6" r="3.5"/><circle class="pt" cx="105.7" cy="78.3" r="3.5"/><line class="lo" x1="50" y1="49.25" x2="250" y2="154.25"/></g><g transform="translate(330,240)"><rect width="270" height="200" fill="#ffffff" stroke="#dce3e9"/><text x="14" y="22" font-size="16" font-weight="700" fill="#16384a">D</text><line class="ax" x1="50" y1="30" x2="50" y2="170"/><line class="ax" x1="50" y1="170" x2="250" y2="170"/><text x="150" y="192" class="lb" text-anchor="middle">1/d&#8338; / m&#8315;&#185;</text><text x="20" y="100" class="lb" text-anchor="middle" transform="rotate(-90 20 100)">1/d&#7522; / m&#8315;&#185;</text><circle class="pt" cx="216.7" cy="136.75" r="3.5"/><circle class="pt" cx="183.3" cy="119.25" r="3.5"/><circle class="pt" cx="161" cy="107.5" r="3.5"/><circle class="pt" cx="133.3" cy="93" r="3.5"/><circle class="pt" cx="116.7" cy="60.6" r="3.5"/><circle class="pt" cx="105.7" cy="78.3" r="3.5"/><line class="lo" x1="50" y1="100" x2="250" y2="100"/></g></svg>',
          },
          caption: 'Four candidate lines of best fit (A–D) through the 1/dᵢ versus 1/dₒ data points.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select: C\nJustification: Graph C has a straight line of best fit that excludes the anomalous point, with roughly equal numbers of data points above and below the line. The equation predicts a linear relationship.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'Use your answer to part (e) to **calculate** the focal length (f) of the lens.',
        marks: 2,
        ph: 'Read y-intercept from Graph C: y-intercept ≈ 6.90 m⁻¹ (accept 6.90 ± 0.1)\nf = 1 / 6.90 = **0.145 m** (accept 0.145 ± 0.002 m)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Hot Air Balloon: Forces & Evaluation (9 marks) Criterion A/D
  // V2: Hot air balloon delivering humanitarian aid to mountainous regions
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Motion — Hot Air Balloon',
    marks: 9,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['balanced forces', 'unbalanced forces', 'Newton\'s laws', 'hot air balloon'], level: 'proficient' },
    stem: 'A hot air balloon is an aircraft that uses a large inflated envelope of hot air to generate lift. A burner heats the air inside the balloon, making it less dense than the surrounding cool air, generating an upward buoyancy force. Hot air balloons have been used for scientific research, tourism, and communication relay in remote areas.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 720 290" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="fb" markerWidth="10" markerHeight="10" refX="7" refY="3.6" orient="auto"><path d="M0,0 L9,3.6 L0,7.2 Z" fill="#16384a"/></marker><linearGradient id="env7" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8772e"/><stop offset="1" stop-color="#c0392b"/></linearGradient></defs><rect width="720" height="290" fill="#ffffff"/><g transform="translate(15,20)"><rect width="220" height="250" rx="8" fill="#eef5fb" stroke="#9fbcd6"/><text x="14" y="26" font-size="18" font-weight="700" fill="#16384a">A</text><g transform="translate(110,130)"><path d="M0,-34 C32,-34 38,4 0,30 C-38,4 -32,-34 0,-34 Z" fill="url(#env7)" stroke="#8e261b"/><line x1="-12" y1="28" x2="-8" y2="42" stroke="#7a5e34"/><line x1="12" y1="28" x2="8" y2="42" stroke="#7a5e34"/><rect x="-9" y="42" width="18" height="12" rx="2" fill="#9c7a44"/></g><line x1="110" y1="98" x2="110" y2="40" stroke="#16384a" stroke-width="3" marker-end="url(#fb)"/><text x="120" y="70" font-size="15" font-style="italic" font-weight="700" fill="#16384a">T</text><line x1="110" y1="186" x2="110" y2="218" stroke="#16384a" stroke-width="3" marker-end="url(#fb)"/><text x="120" y="210" font-size="15" font-style="italic" font-weight="700" fill="#16384a">W</text></g><g transform="translate(250,20)"><rect width="220" height="250" rx="8" fill="#eef5fb" stroke="#9fbcd6"/><text x="14" y="26" font-size="18" font-weight="700" fill="#16384a">B</text><g transform="translate(110,130)"><path d="M0,-34 C32,-34 38,4 0,30 C-38,4 -32,-34 0,-34 Z" fill="url(#env7)" stroke="#8e261b"/><line x1="-12" y1="28" x2="-8" y2="42" stroke="#7a5e34"/><line x1="12" y1="28" x2="8" y2="42" stroke="#7a5e34"/><rect x="-9" y="42" width="18" height="12" rx="2" fill="#9c7a44"/></g><line x1="110" y1="98" x2="110" y2="68" stroke="#16384a" stroke-width="3" marker-end="url(#fb)"/><text x="120" y="88" font-size="15" font-style="italic" font-weight="700" fill="#16384a">T</text><line x1="110" y1="186" x2="110" y2="224" stroke="#16384a" stroke-width="3" marker-end="url(#fb)"/><text x="120" y="212" font-size="15" font-style="italic" font-weight="700" fill="#16384a">W</text></g><g transform="translate(485,20)"><rect width="220" height="250" rx="8" fill="#eef5fb" stroke="#9fbcd6"/><text x="14" y="26" font-size="18" font-weight="700" fill="#16384a">C</text><g transform="translate(110,130)"><path d="M0,-34 C32,-34 38,4 0,30 C-38,4 -32,-34 0,-34 Z" fill="url(#env7)" stroke="#8e261b"/><line x1="-12" y1="28" x2="-8" y2="42" stroke="#7a5e34"/><line x1="12" y1="28" x2="8" y2="42" stroke="#7a5e34"/><rect x="-9" y="42" width="18" height="12" rx="2" fill="#9c7a44"/></g><line x1="110" y1="98" x2="110" y2="58" stroke="#16384a" stroke-width="3" marker-end="url(#fb)"/><text x="120" y="80" font-size="15" font-style="italic" font-weight="700" fill="#16384a">T</text><line x1="110" y1="186" x2="110" y2="226" stroke="#16384a" stroke-width="3" marker-end="url(#fb)"/><text x="120" y="210" font-size="15" font-style="italic" font-weight="700" fill="#16384a">W</text></g></svg>',
      },
      caption: 'Three force diagrams (A, B, C) showing the upward lift T and the weight W on a hot air balloon.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagrams below show the forces acting on a hot air balloon. T is the total upward buoyancy force (lift) and W is the weight of the balloon and basket. **Select** the diagram showing a balloon **taking off** (ascending). **Justify** your answer.',
        marks: 2,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C'],
        ph: 'Select: A (diagram showing T > W — upward lift exceeds downward weight).\nJustification: For the balloon to take off (accelerate upwards), the forces must be unbalanced — lift must exceed weight. This gives a net upward force, causing upward acceleration.',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Some mountainous and island communities have limited road and sea access, meaning urgent medical supplies can take days to arrive. Scientists have proposed that hot air balloons could be used to carry supplies to communities at altitude. A research balloon can carry up to 800 kg of payload and carry it several hundred kilometres.\n\n**Discuss and evaluate** the advantages and disadvantages of using hot air balloons to deliver urgent medical supplies to remote mountainous communities.',
        marks: 7,
        ph: 'Advantages:\n- Can reach communities at high altitude that roads or helicopters struggle to access in calm conditions\n- Large payload capacity compared to small drones\n- Low fuel cost once airborne (relies on wind for horizontal travel)\n- Silent operation — no noise disturbance to community or wildlife\n\nDisadvantages:\n- Highly weather-dependent — cannot steer against wind, so direction uncertain\n- Slow — travel time unpredictable and may not suit urgent medical needs\n- Cannot be precisely guided to a delivery point\n- Risk of collision with terrain in mountainous regions\n- Requires large open landing space not always available\n\nConclusion: Hot air balloons are not suitable for time-critical emergency medical deliveries due to limited control and weather dependence. However, they could be used for scheduled, non-urgent supply runs to isolated communities where weather is predictable and suitable landing sites exist.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Drones in Marine Science: Evaluation (14 marks) Criterion D
  // V2: Uses of drones in marine and coastal monitoring
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society — Marine Drones',
    marks: 14,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['drone technology', 'marine science', 'social implications', 'science and society'], level: 'advanced' },
    stem: 'A video outlines the use of aerial and underwater drones in marine science, including monitoring coral reef health using underwater cameras, surveying whale populations from the air, collecting water samples in remote ocean areas, and mapping plastic pollution across large ocean zones. Marine drones are increasingly deployed in coastal and deep-ocean research.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky8b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dceaf4"/><stop offset="1" stop-color="#c4dced"/></linearGradient><linearGradient id="sea8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fa8c8"/><stop offset="1" stop-color="#236181"/></linearGradient></defs><rect width="620" height="320" fill="url(#sky8b)"/><rect y="150" width="620" height="170" fill="url(#sea8)"/><line x1="0" y1="150" x2="620" y2="150" stroke="#2c6a87" stroke-width="2"/><text x="14" y="170" font-size="11" fill="#cfeefa">sea surface</text><g transform="translate(150,70)"><rect x="-36" y="-4" width="72" height="8" rx="4" fill="#2b3138"/><rect x="-14" y="-2" width="28" height="14" rx="5" fill="#3a424b"/><ellipse cx="-36" cy="-4" rx="14" ry="4" fill="#566069"/><ellipse cx="36" cy="-4" rx="14" ry="4" fill="#566069"/></g><text x="150" y="40" font-size="11" text-anchor="middle" fill="#16384a">aerial drone</text><g transform="translate(150,130)"><path d="M-22,4 q22,-12 44,0 l4,6 -52,0 Z" fill="#3b4a57"/><path d="M22,8 l16,-5 0,12 Z" fill="#3b4a57"/></g><text x="150" y="148" font-size="10" text-anchor="middle" fill="#16384a">whale survey</text><g transform="translate(430,210)"><ellipse cx="0" cy="0" rx="26" ry="14" fill="#f0e3c4" stroke="#c4ad72"/><circle cx="-10" cy="-2" r="4" fill="#3a424b"/><circle cx="10" cy="-2" r="4" fill="#3a424b"/><line x1="0" y1="-14" x2="0" y2="-30" stroke="#cfeefa" stroke-width="1.5"/><circle cx="0" cy="-30" r="3" fill="#f08c00"/></g><text x="430" y="240" font-size="10" text-anchor="middle" fill="#cfeefa">underwater ROV</text><g transform="translate(430,270)"><path d="M-30,0 q10,-12 20,0 q10,-12 20,0 q10,-12 20,0" fill="none" stroke="#7fdca8" stroke-width="4"/><path d="M-26,8 q10,-10 20,0 q10,-10 20,0" fill="none" stroke="#5fbf8a" stroke-width="4"/></g><text x="430" y="296" font-size="10" text-anchor="middle" fill="#cfeefa">coral reef</text><g fill="#e8eaed" opacity="0.85"><rect x="250" y="178" width="10" height="6" rx="2"/><rect x="290" y="200" width="8" height="5" rx="2"/><rect x="230" y="214" width="9" height="5" rx="2"/><rect x="300" y="170" width="7" height="4" rx="2"/></g><text x="270" y="240" font-size="10" text-anchor="middle" fill="#cfeefa">plastic mapped</text></svg>',
      },
      caption: 'Marine science drones: an aerial drone surveying whales, an underwater ROV inspecting a coral reef, and floating plastic being mapped at the surface.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** the use of drones in marine science and environmental monitoring. In your answer:\n\n- Describe at least **two uses of drones in marine science**, and explain how each use benefits scientific research\n- Discuss the **social implications** of drone technology in marine environments (positive AND negative), with justification\n- Discuss the **political implications** of widespread drone use in international waters, with further explanation',
        marks: 14,
        ph: 'Marine science uses:\n1. Coral reef monitoring — underwater drones (ROVs) equipped with cameras map reef extent and health across large areas without diver disturbance. Provides more accurate and safer data collection than scuba surveys, enabling better tracking of bleaching events linked to climate change.\n2. Whale population surveys — aerial drones photograph whale pods from above, allowing scientists to count individuals and measure body condition without the noise and disturbance of traditional survey vessels. More data collected per survey hour.\n3. Ocean plastic mapping — surface drones photograph and log GPS coordinates of floating plastic debris across large ocean areas, providing data on distribution that informs cleanup operations.\n\nSocial implications:\nPositive: Better marine data leads to evidence-based fisheries management → food security for fishing communities. Reef protection → protects tourism industries and coastal livelihoods. Reduced risk to human divers in dangerous survey conditions.\nNegative: Underwater drones may disturb marine life (whales, dolphins respond to propeller noise). Fishermen may be monitored without consent. Fear of surveillance equipment in fishing areas. High cost of marine drone technology excludes developing nations from scientific opportunities.\n\nPolitical implications:\nPositive: Shared drone data on ocean health can support international agreements (e.g. UNCLOS marine protected areas). Monitoring of illegal fishing in protected zones supports enforcement.\nNegative: Drones operating in contested international waters raise sovereignty disputes. Military drones and civilian research drones may be confused. Countries may refuse foreign marine drones access to their exclusive economic zones. Data ownership disputes — who owns ocean data collected by drones?',
        level: 'advanced',
      },
    ],
  },

]
