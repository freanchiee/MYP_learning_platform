import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2016 · VARIANT 2  (isomorphic to physics-nov-2016)
// Same crit / command term / marks / tags / widgets / task structure throughout.
// Only the real-world context, numbers and (data-driven) artefacts change.
// v2 contexts are distinct from both the source AND variant 1.
//   Q1 Motion:        bird → MONARCH BUTTERFLY migration (360 km/day → 15 km/h)
//   Q2 Waves:         elephants/hill → WHALES / undersea seamount (infrasound)  [wave widget locked]
//   Q3 Refraction:    3-layer ray, Air/Glass/Water (refraction widget locked) — aquarium framing
//   Q4 Static:        plastic rod → PVC rod + duster; BALLOON-ON-WALL induction [charge widget locked]
//   Q5 Crit B design: paper-wrap ice → POLYSTYRENE-FOAM insulation investigation
//   Q6 Crit C eval:   coffee cup → TAKEAWAY SOUP cup cooling
//   Q7 Crit B design: Al-foil factory → STEEL-MILL beta gauge on PLASTIC SHEET
//   Q8 Half-life:     Sr-90/Cs-137/Fukushima → COBALT-60 sim / Sr-90 graph / sterilisation plant
//   Q9 Crit D:        coal station → GAS-FIRED power station & transmission
//   Q10 Crit D essay: solar/Africa → MICRO-HYDRO traffic management
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2016-v2',
  subject: 'Physics',
  session: 'November',
  year: 2016,
  totalMarks: 120,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Monarch Butterfly Migration & Motion (10 marks) Criterion A
  // V2: 360 km in 24 h → 15 km h⁻¹.  v–t: C-D decelerates 40→0 over 3 h →
  //     distance = ½·3·40 = 60 km.
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Monarch Butterfly Migration & Motion',
    marks: 10,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['speed and velocity', 'velocity-time graphs', "Newton's second law"], level: 'proficient' },
    stem: 'Some animals migrate every year between their breeding and feeding grounds. Each autumn, millions of monarch butterflies fly from Canada and the northern United States to overwintering forests in central Mexico — a journey of up to 4 800 km. Scientists track the journey by tagging the butterflies\' wings with tiny numbered stickers.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky1b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdeecb"/><stop offset="1" stop-color="#f8d9a0"/></linearGradient></defs><rect width="600" height="260" fill="#ffffff"/><rect x="0" y="0" width="600" height="180" fill="url(#sky1b)"/><path d="M0,180 L600,180 L600,230 L0,230 Z" fill="#d8e8cf"/><g><path d="M150,90 q-18,-22 -4,-2 q14,-20 4,2 q18,22 4,2 q-14,20 -4,-2 Z" fill="#e8772e" stroke="#a8531a" stroke-width="1.2"/><path d="M150,90 l-20,-16 m20,16 l-22,2 m22,-2 l20,16 m-20,-16 l22,2" stroke="#a8531a" stroke-width="0"/><ellipse cx="135" cy="82" rx="14" ry="10" fill="#e8772e" stroke="#a8531a"/><ellipse cx="165" cy="82" rx="14" ry="10" fill="#e8772e" stroke="#a8531a"/><ellipse cx="138" cy="100" rx="10" ry="8" fill="#f0a04b" stroke="#a8531a"/><ellipse cx="162" cy="100" rx="10" ry="8" fill="#f0a04b" stroke="#a8531a"/><line x1="150" y1="78" x2="150" y2="104" stroke="#3a2a14" stroke-width="2"/></g><g fill="#c87b3a" opacity="0.7"><circle cx="300" cy="70" r="4"/><circle cx="340" cy="90" r="4"/><circle cx="400" cy="60" r="4"/><circle cx="440" cy="100" r="4"/></g><path d="M180,180 C260,140 360,150 460,110" fill="none" stroke="#0b7285" stroke-width="2" stroke-dasharray="6 5"/><text x="250" y="206" font-size="12" fill="#0b7285">tracked migration route to Mexico</text><text x="40" y="34" font-size="14" font-weight="700" fill="#1f2d3a">Monarch butterfly long-distance migration</text></svg>',
      },
      caption: 'A monarch butterfly in flight; tagged butterflies are recovered to map the migration route.',
    },
    tasks: [
      {
        label: 'a',
        text: 'One monarch butterfly flies **360 km** in a day. **Calculate** the speed in km h⁻¹ (in kilometres per hour).',
        marks: 1,
        ph: 'Speed = distance / time = 360 / 24 = ... km h⁻¹',
      },
      {
        label: 'b',
        text: 'Scientists tag 500 monarch butterflies at their summer breeding sites in Canada. Later, from recovered tags, they calculate that the average speed of the butterflies is 12 km h⁻¹.\n\n**Outline** two factors that may affect the average speed achieved by the monarch butterfly.',
        marks: 2,
        ph: 'Factor 1:\nFactor 2:',
      },
      {
        label: 'c',
        text: 'The graph below shows part of a different migrating animal\'s journey. Between points B and C on the graph, the animal travels at **constant velocity**.\n\n**Select** the appropriate diagram which represents the forces acting between points B and C on the graph.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Diagram 1', 'Diagram 2', 'Diagram 3', 'Diagram 4'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="fa1b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="620" height="300" fill="#ffffff"/><text x="20" y="22" font-size="13" font-weight="700" fill="#1f2d3a">Velocity–time graph of the journey</text><line x1="60" y1="40" x2="60" y2="180" stroke="#5b6b78" stroke-width="2"/><line x1="60" y1="180" x2="320" y2="180" stroke="#5b6b78" stroke-width="2"/><text x="30" y="115" font-size="11" fill="#5b6b78" transform="rotate(-90 30 115)">velocity</text><text x="175" y="198" font-size="11" fill="#5b6b78">time</text><polyline points="60,160 110,70 210,70 300,160" fill="none" stroke="#0b7285" stroke-width="2.5"/><circle cx="60" cy="160" r="3" fill="#0b7285"/><circle cx="110" cy="70" r="3" fill="#0b7285"/><circle cx="210" cy="70" r="3" fill="#0b7285"/><circle cx="300" cy="160" r="3" fill="#0b7285"/><text x="52" y="174" font-size="11" font-weight="700">A</text><text x="104" y="64" font-size="11" font-weight="700">B</text><text x="212" y="64" font-size="11" font-weight="700">C</text><text x="300" y="174" font-size="11" font-weight="700">D</text><g><text x="380" y="40" font-size="12" font-weight="700">Diagram 1</text><circle cx="410" cy="70" r="9" fill="#2c3e50"/><line x1="410" y1="79" x2="410" y2="110" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1b)"/><line x1="419" y1="70" x2="455" y2="70" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1b)"/></g><g><text x="510" y="40" font-size="12" font-weight="700">Diagram 2</text><circle cx="540" cy="70" r="9" fill="#2c3e50"/><line x1="540" y1="61" x2="540" y2="34" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1b)"/><line x1="549" y1="70" x2="585" y2="70" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1b)"/></g><g><text x="380" y="180" font-size="12" font-weight="700">Diagram 3</text><circle cx="410" cy="215" r="9" fill="#2c3e50"/><line x1="419" y1="215" x2="465" y2="215" stroke="#c0392b" stroke-width="2.5" marker-end="url(#fa1b)"/><line x1="401" y1="215" x2="384" y2="215" stroke="#c0392b" stroke-width="1.5" marker-end="url(#fa1b)"/></g><g><text x="510" y="180" font-size="12" font-weight="700">Diagram 4</text><circle cx="540" cy="215" r="9" fill="#2c3e50"/><line x1="531" y1="215" x2="500" y2="215" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1b)"/><line x1="549" y1="215" x2="580" y2="215" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1b)"/><line x1="540" y1="206" x2="540" y2="180" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1b)"/><line x1="540" y1="224" x2="540" y2="250" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1b)"/></g></svg>',
          },
          caption: 'Velocity–time graph (left) and four candidate force diagrams (1–4) for the constant-velocity section B–C.',
        },
        ph: 'Select Diagram 1, 2, 3, or 4',
      },
      {
        label: 'd',
        text: '**Explain** what is happening with respect to the force, velocity and acceleration of the animal between points C and D on the graph. Include in your explanation which of Newton\'s laws is being obeyed as the graph changes.\n\nAddress each of the following in turn:\n• Force (between C and D)\n• Velocity (between C and D)\n• Acceleration (between C and D)\n• Which Newton\'s law applies, and what it states',
        marks: 4,
        ph: 'Force: ...\nVelocity: ...\nAcceleration: ...\nNewton\'s law: ...',
      },
      {
        label: 'e',
        text: 'Use the graph to **calculate** the distance travelled by the animal while decelerating (between C and D). Between C and D it slows from a constant velocity of 40 km h⁻¹ to rest over a time of 3 hours.',
        marks: 2,
        ph: 'Distance = area under graph between C and D\nArea = ½ × base × height = ½ × (time CD) × (velocity at C)\n= ... km',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Wave Properties (10 marks) Criterion A
  // wave_label_drag_drop LOCKED → keep transverse/longitudinal infrasound family.
  // Whale / undersea seamount context. Oscilloscope: 1 s window.
  //   A = 30 Hz (NOT infrasound), B = 6 Hz, C = 4 Hz, D = 6 Hz (B & D match).
  //   λ(C) = 330/4 = 82.5 m.
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Wave Properties',
    marks: 10,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['wave properties (wavelength, frequency, amplitude, period)', 'infrasound and ultrasound', 'speed of sound'], level: 'proficient' },
    stem: 'These animations show the two different types of wave moving along springs — a transverse wave and a longitudinal wave. Infrasound is a low-frequency longitudinal wave that whales, elephants and alligators use to communicate over long distances. The frequency of infrasound waves is lower than 20 Hz. The sound waves shown here can be recorded as they travel through air at a speed of 330 m s⁻¹.',
    nativeContent: 'wave_animations',
    tasks: [
      {
        label: 'a',
        text: '**Label** the two diagrams shown above to identify each of the following wave properties. Drag each label to the correct position on the diagram:\n\n(i) wavelength\n(ii) amplitude\n(iii) compression\n(iv) rarefaction',
        marks: 2,
        widget: 'wave_label_drag_drop',
        ph: '(i) Wavelength: ...\n(ii) Amplitude: ...\n(iii) Compression: ...\n(iv) Rarefaction: ...',
      },
      {
        label: 'b',
        text: 'Sound waves can be represented on a computer. The image shows waves recorded on a computer from four different sources (A, B, C and D). The time axis shows 1 second total.\n\n**Calculate** the frequency of wave A.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="380" fill="#ffffff"/><text x="20" y="22" font-size="13" font-weight="700" fill="#1f2d3a">Sound waves recorded over 1 second</text><g><text x="20" y="60" font-size="12" font-weight="700" fill="#0b7285">A</text><line x1="40" y1="60" x2="520" y2="60" stroke="#d0d7de" stroke-width="1"/><path d="M40,60 q4.0,-16 8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0 t8.0,0" fill="none" stroke="#0b7285" stroke-width="2"/></g><g><text x="20" y="135" font-size="12" font-weight="700" fill="#f08c00">B</text><line x1="40" y1="135" x2="520" y2="135" stroke="#d0d7de" stroke-width="1"/><path d="M40,135 q20.0,-26 40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0" fill="none" stroke="#f08c00" stroke-width="2"/></g><g><text x="20" y="210" font-size="12" font-weight="700" fill="#7a4fb5">C</text><line x1="40" y1="210" x2="520" y2="210" stroke="#d0d7de" stroke-width="1"/><path d="M40,210 q30.0,-30 60.0,0 t60.0,0 t60.0,0 t60.0,0 t60.0,0 t60.0,0 t60.0,0" fill="none" stroke="#7a4fb5" stroke-width="2"/></g><g><text x="20" y="285" font-size="12" font-weight="700" fill="#1f8a4c">D</text><line x1="40" y1="285" x2="520" y2="285" stroke="#d0d7de" stroke-width="1"/><path d="M40,285 q20.0,-16 40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0 t40.0,0" fill="none" stroke="#1f8a4c" stroke-width="2"/></g><line x1="40" y1="330" x2="520" y2="330" stroke="#5b6b78" stroke-width="1.5"/><text x="40" y="350" font-size="11" fill="#5b6b78">0 s</text><text x="490" y="350" font-size="11" fill="#5b6b78">1 s</text><text x="270" y="368" font-size="11" fill="#5b6b78" text-anchor="middle">time</text></svg>',
          },
          caption: 'Four sound waves recorded on a computer over a 1-second window (A, B, C, D).',
        },
        ph: 'Frequency = number of complete cycles per second\nCount cycles of wave A in 1 second: ...\nf = ... Hz',
      },
      {
        label: 'c',
        text: 'Looking at the four waves A, B, C and D shown on the computer display, **identify** which two waves have the same frequency.',
        marks: 1,
        ph: 'The two waves with the same frequency are ... and ...',
      },
      {
        label: 'd',
        text: 'The speed of sound in air is 330 m s⁻¹.\n\n**Calculate** the wavelength of wave C. Show your working and include the unit.',
        marks: 2,
        ph: 'First find the frequency of wave C from the display: f = ... Hz\nThen use v = fλ → λ = v/f = 330 / ... = ... m',
      },
      {
        label: 'e',
        text: 'Infrasound waves have a frequency of less than 20 Hz. Use your answers above to **identify** which wave (A, B, C or D) does **not** show infrasound.',
        marks: 1,
        ph: 'Wave ... does not show infrasound because its frequency is ... Hz, which is [above/below] 20 Hz.',
      },
      {
        label: 'f',
        text: 'Animals use infrasound because the waves travel long distances. The diagram shows two whales on opposite sides of an undersea seamount (a steep underwater mountain).\n\n**Explain** how the whale on the far side of the seamount can hear the calling whale.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sea2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfeaf6"/><stop offset="1" stop-color="#5a93b8"/></linearGradient></defs><rect width="600" height="300" fill="#ffffff"/><rect x="0" y="0" width="600" height="270" fill="url(#sea2)"/><path d="M230,270 L300,90 L370,270 Z" fill="#6b6256" stroke="#473f33" stroke-width="2"/><path d="M270,160 L300,90 L330,160 Z" fill="#867b6b"/><rect x="0" y="270" width="600" height="30" fill="#4a4234"/><g stroke="#11405a" stroke-width="1.6" fill="none"><path d="M150,185 A60,60 0 0 1 150,115"/><path d="M135,195 A78,78 0 0 1 135,105"/><path d="M120,205 A96,96 0 0 1 120,95"/></g><g stroke="#11405a" stroke-width="1.6" fill="none" opacity="0.85"><path d="M450,115 A60,60 0 0 1 450,185"/><path d="M465,105 A78,78 0 0 1 465,195"/><path d="M480,95 A96,96 0 0 1 480,205"/></g><g><path d="M70,150 q40,-26 96,0 q-12,18 -40,14 q-36,-2 -56,-14 Z" fill="#2c3e50" stroke="#1a2733"/><path d="M70,150 q-14,-6 -22,-22 q14,4 22,12 Z" fill="#2c3e50"/><circle cx="150" cy="148" r="3" fill="#fff"/></g><text x="70" y="186" font-size="11" fill="#11405a">calling whale</text><g><path d="M530,150 q-40,-26 -96,0 q12,18 40,14 q36,-2 56,-14 Z" fill="#33485c" stroke="#1a2733"/><path d="M530,150 q14,-6 22,-22 q-14,4 -22,12 Z" fill="#33485c"/><circle cx="450" cy="148" r="3" fill="#fff"/></g><text x="440" y="186" font-size="11" fill="#11405a">listening whale</text><text x="270" y="80" font-size="11" fill="#473f33">seamount</text></svg>',
          },
          caption: 'Infrasound from a calling whale must travel around the undersea seamount to reach the whale on the far side.',
        },
        ph: 'The infrasound waves undergo...\nThis happens because the wavelength is...\nAs a result, the waves...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Refraction of Light (5 marks) Criterion A
  // refraction_label_drag_drop is LOCKED (Air→Glass→Water ray, fixed angles,
  // self-grades {top:Air, middle:Glass, bottom:Water}). KEEP the construct and
  // the n-table; reframe with an aquarium-window framing.
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Refraction of Light',
    marks: 5,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['refraction', 'refractive index', "Snell's law"], level: 'proficient' },
    stem: 'At a public aquarium, a beam of light from above passes through the air, then through the thick glass viewing window, and finally into the water of the tank. The diagram shows the ray passing through the three different transparent materials. The table shows the refractive indices of common materials:\n\n| Material | Refractive index (n) |\n|----------|---------------------|\n| Air      | 1.00                |\n| Glass    | 1.50                |\n| Water    | 1.33                |',
    tasks: [
      {
        label: 'a',
        text: 'Use the data and the diagram to **identify** each of the materials the ray passes through. Drag each material to the correct layer.',
        marks: 2,
        widget: 'refraction_label_drag_drop',
        widgetItems: ['Air', 'Glass', 'Water'],
        ph: 'Top layer: ...\nMiddle layer: ...\nBottom layer: ...',
      },
      {
        label: 'b',
        text: '**Explain** your answer to part (a). In your explanation, refer to:\n• what happens to the speed of light in each material\n• why the ray bends towards or away from the normal at each boundary\n• how the refractive index is related to the bending',
        marks: 3,
        ph: 'When light passes from ... to ..., the speed...\nThe ray bends ... the normal because...\nA higher refractive index means...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Static Electricity (8 marks) Criterion A
  // inline_dropdown_select LOCKED (Electron/Proton/Neutron → -1/+1/0).
  // KEEP the subatomic-charge + charging + induction family.
  // Context: PVC rod + duster (→ negative), charged balloon + paper-bits induction.
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Static Electricity',
    marks: 8,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'electricity-circuits', topics: ['electric charge', 'static electricity', 'induction'], level: 'proficient' },
    stem: 'Most materials are electrically neutral; they contain equal numbers of charged particles. An animation shows that when a cloth duster is used to rub a PVC (polyvinyl chloride) rod, the rod becomes negatively charged.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="rod4b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d7c8e8"/><stop offset="1" stop-color="#a98fd0"/></linearGradient><marker id="arrowe2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6b78"/></marker></defs><rect width="560" height="230" fill="#ffffff"/><rect x="70" y="100" width="260" height="22" rx="11" fill="url(#rod4b)" stroke="#7a5ca8"/><text x="200" y="142" font-size="11" text-anchor="middle" fill="#5a3f87">PVC rod</text><g fill="#c0392b" font-size="13" font-weight="700"><text x="105" y="116">−</text><text x="150" y="116">−</text><text x="195" y="116">−</text><text x="240" y="116">−</text><text x="285" y="116">−</text></g><path d="M360,80 q42,-8 70,12 q18,30 -7,54 q-46,14 -69,-12 q-14,-30 6,-54 Z" fill="#f0e3c4" stroke="#c4b074" stroke-width="2"/><text x="395" y="172" font-size="11" text-anchor="middle" fill="#9a8b4a">cloth duster</text><g fill="#2466b0" font-size="13" font-weight="700"><text x="378" y="108">+</text><text x="402" y="120">+</text><text x="388" y="135">+</text><text x="414" y="100">+</text></g><path d="M335,111 q12,-4 22,0" stroke="#5b6b78" stroke-width="1.5" fill="none" marker-end="url(#arrowe2)"/><text x="300" y="44" font-size="11" fill="#5b6b78">electrons transferred onto the rod</text><path d="M300,52 q-30,18 -70,42" stroke="#5b6b78" stroke-width="1" fill="none" stroke-dasharray="3 3"/><text x="40" y="30" font-size="14" font-weight="700" fill="#1f2d3a">Charging a PVC rod by friction</text></svg>',
      },
      caption: 'Rubbing the PVC rod with a cloth duster transfers electrons onto the rod, leaving it negatively charged.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** an appropriate charge for each particle below.',
        marks: 1,
        widget: 'inline_dropdown_select',
        widgetItems: ['Electron', 'Proton', 'Neutron'],
        widgetOptions: ['+1', '0', '-1'],
        ph: 'Electron: ...\nProton: ...\nNeutron: ...',
      },
      {
        label: 'b',
        text: 'Use the animation to **explain** the process by which the rod becomes negatively charged when rubbed with a cloth duster.',
        marks: 3,
        ph: 'When the duster rubs the rod, ... are transferred...\nThe rod gains...\nThis makes the rod negatively charged because...',
      },
      {
        label: 'c',
        text: 'A student rubs an inflated balloon on their hair so that the balloon becomes electrically charged. They then hold the balloon close to small pieces of torn-up paper on the table. The paper pieces are initially uncharged, yet they jump up and stick to the balloon.\n\nUsing the concept of induction, **suggest** why the paper pieces stick to the balloon.',
        marks: 4,
        ph: 'The balloon becomes charged because...\nThe paper is initially uncharged, but...\nInduction causes...\nThe paper is attracted because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Thermal Insulation Investigation (13 marks) Criterion B
  // V2: layers of polystyrene foam wrapped around a 100 g ice block.
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Thermal Insulation Investigation',
    marks: 13,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['conduction', 'convection', 'radiation (thermal)'], level: 'proficient' },
    stem: 'Mateo buys frozen yoghurt and walks home from the shops. On warm days he finds that much of it has melted by the time he arrives. He lives 15 minutes from the shops. Mateo decides to investigate a solution. He reads that wrapping the tub in sheets of polystyrene foam can keep it cold for longer.\n\nMateo uses standard blocks of ice, each with a mass of 100 g, to model the melting of the frozen yoghurt. He investigates how the number of sheets of polystyrene foam wrapped around the block affects the mass of ice that melts.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="ice5b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8f7ff"/><stop offset="1" stop-color="#bfe6f5"/></linearGradient></defs><rect width="560" height="240" fill="#ffffff"/><rect x="60" y="150" width="440" height="14" fill="#d8d2c4"/><g><rect x="120" y="90" width="80" height="70" rx="4" fill="url(#ice5b)" stroke="#6cb6d6" stroke-width="2"/><text x="160" y="180" font-size="11" text-anchor="middle" fill="#3f7e98">0 sheets</text></g><g><rect x="300" y="84" width="92" height="82" rx="6" fill="url(#ice5b)" stroke="#6cb6d6" stroke-width="2"/><rect x="288" y="72" width="116" height="106" rx="6" fill="none" stroke="#0b7285" stroke-width="3"/><rect x="278" y="62" width="136" height="126" rx="6" fill="none" stroke="#0b7285" stroke-width="3"/><text x="346" y="200" font-size="11" text-anchor="middle" fill="#3f7e98">several sheets of polystyrene foam</text></g><g fill="#f08c00" font-size="13"><text x="92" y="86">☀</text><text x="250" y="86">☀</text></g><text x="40" y="34" font-size="14" font-weight="700" fill="#1f2d3a">Modelling frozen-yoghurt melting with wrapped ice blocks</text></svg>',
      },
      caption: 'Ice blocks wrapped in different numbers of polystyrene-foam sheets to model the insulation of a frozen-yoghurt tub.',
    },
    tasks: [
      {
        label: 'a',
        text: 'This question is about heat transfer.\n\n**List** the three ways that heat is transferred.',
        marks: 3,
        ph: '1.\n2.\n3.',
      },
      {
        label: 'b',
        text: 'Other than ice and polystyrene foam, **suggest** and **justify** one additional piece of equipment that Mateo will need to perform this experiment.',
        marks: 2,
        ph: 'Equipment: ...\nJustification: ...',
      },
      {
        label: 'c',
        text: '**Suggest** and **justify** a hypothesis for this experiment.',
        marks: 2,
        ph: 'Hypothesis: As the number of sheets of polystyrene foam increases, the mass of ice melted will...\nJustification: This is because...',
      },
      {
        label: 'd',
        text: '**State** one variable that Mateo needs to control. **Describe** how and why this variable should be controlled.',
        marks: 3,
        ph: 'Variable: ...\nHow it should be controlled: ...\nWhy it should be controlled: ...',
      },
      {
        label: 'e',
        text: '**Explain** what results Mateo needs to collect to ensure that he has sufficient relevant data.',
        marks: 3,
        ph: 'Mateo should measure...\nHe should test at least ... different values of...\nHe should repeat each measurement ... times because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Cup Cooling Investigation (9 marks) Criterion C
  // V2: takeaway soup cup, 90→60 °C, inconsistent data (no trend, repeated 5 mm).
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Cup Cooling Investigation',
    marks: 9,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['conduction', 'specific heat capacity', 'thermal equilibrium'], level: 'proficient' },
    stem: 'Another student, Leah, finds that her takeaway cup of soup cools down too quickly on the way home. She wonders if a thicker cup would keep the soup hot for longer.\n\nLeah forms the hypothesis: "The thicker the cup, the longer the soup will take to cool down because heat will take longer to transfer through the thicker material of the cup."\n\nShe collects takeaway cups of different wall thicknesses. She fills each cup with soup to the same level and times how long it takes for the soup to cool from 90 °C to 60 °C in each cup.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Wall thickness of cup / mm', 'Time to cool from 90 °C to 60 °C / min'],
        rows: [['1', '14'], ['3', '9'], ['5', '22'], ['5', '13'], ['7', '17']],
      },
      caption: 'Leah\'s results: cooling time for soup cups of different wall thickness (note the inconsistent values).',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** and **justify** whether the results of Leah\'s investigation support her hypothesis.',
        marks: 1,
        ph: 'The results [do / do not] support the hypothesis because...',
      },
      {
        label: 'b',
        text: '**Identify** four weaknesses in Leah\'s method. For each of the weaknesses, **explain** how her investigation was affected. Use scientific knowledge and understanding in your answer.',
        marks: 8,
        ph: 'Weakness 1: ...\nHow this affected the investigation: ...\n\nWeakness 2: ...\nHow this affected the investigation: ...\n\nWeakness 3: ...\nHow this affected the investigation: ...\n\nWeakness 4: ...\nHow this affected the investigation: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Radiation Investigation (21 marks) Criterion B
  // V2: beta thickness gauge in a STEEL MILL monitoring PLASTIC SHEET.
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Radiation Investigation',
    marks: 21,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['alpha radiation', 'beta radiation', 'gamma radiation', 'radiation safety'], level: 'proficient' },
    stem: 'Developments in atomic physics have led to many useful applications in industry, medicine and technology. By understanding patterns in the properties of alpha (α), beta (β) and gamma (γ) radiation, scientists have found ways to use their specific properties.\n\nOne useful property is the difference in penetration of the three types of radiation. The diagram shows how alpha, beta and gamma radiation are stopped by paper, aluminium and lead.\n\nThe amount of beta radiation absorbed depends on the thickness of the material it passes through. In a factory making plastic sheet, a beta source and detector continuously monitor the thickness of the plastic as it passes between rollers — the detector signal adjusts the rollers automatically.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ray7b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="600" height="300" fill="#ffffff"/><text x="20" y="24" font-size="13" font-weight="700" fill="#1f2d3a">Beta thickness gauge on a plastic-sheet line</text><circle cx="80" cy="150" r="22" fill="#0b7285"/><text x="80" y="154" font-size="10" fill="#fff" text-anchor="middle">β src</text><circle cx="220" cy="120" r="34" fill="#b6c4cf" stroke="#5b6b78" stroke-width="2"/><circle cx="220" cy="190" r="34" fill="#b6c4cf" stroke="#5b6b78" stroke-width="2"/><text x="220" y="98" font-size="10" text-anchor="middle" fill="#5b6b78">rollers</text><rect x="100" y="150" width="430" height="10" fill="#cfe2ef" stroke="#7fa9c4"/><text x="330" y="145" font-size="10" fill="#5d87a3">plastic sheet</text><line x1="102" y1="155" x2="430" y2="155" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#ray7b)"/><rect x="470" y="132" width="60" height="46" rx="4" fill="#222"/><text x="500" y="150" font-size="9" fill="#3ad36a" text-anchor="middle" font-family="monospace">cps</text><text x="500" y="168" font-size="9" fill="#9aa" text-anchor="middle">detector</text><text x="60" y="250" font-size="11" fill="#5b6b78">Thicker plastic → more beta absorbed → lower count rate at the detector.</text></svg>',
      },
      caption: 'A beta source and Geiger detector measure the count rate transmitted through the moving plastic sheet.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Your task is to design an investigation to determine how the thickness of the plastic sheet affects the amount of beta radiation absorbed.\n\n**State** the independent and dependent variables in your investigation.',
        marks: 2,
        ph: 'Independent variable (IV): ...\nDependent variable (DV): ...',
      },
      {
        label: 'b',
        text: '**State** what a beta particle is, including its identity and one property related to its motion.',
        marks: 2,
        ph: 'A beta particle is a ... It is ...',
      },
      {
        label: 'c',
        text: '**Write** a hypothesis for this investigation that describes the expected relationship between the thickness of the plastic sheet and the intensity of beta radiation detected.',
        marks: 2,
        ph: 'As the thickness of the plastic increases, the beta radiation detected will ... because ...',
      },
      {
        label: 'd',
        text: '**Describe** in detail how you would carry out this investigation to collect valid and reliable data. In your answer include:\n• the range and number of IV values tested\n• how and how many times measurements are repeated\n• what measurement is taken with no plastic present\n• how plastic sheets are added\n• one control variable and how it is kept constant\n• how the same source is used throughout',
        marks: 6,
        ph: 'Range of IV values: ...\nRepeat each measurement: ... times\nBaseline (no plastic): ...\nPlastic added: ...\nControl variable: ...\nSame source: ...',
      },
      {
        label: 'e',
        text: 'The Geiger counter detects background radiation even when no radioactive source is present. **State** one source of this background radiation.',
        marks: 1,
        ph: 'Source of background radiation: ...',
      },
      {
        label: 'f',
        text: '**Explain** how the student should account for background radiation in their investigation. State how background radiation is measured and how it should be used to correct the experimental results.',
        marks: 2,
        ph: 'Background radiation should be measured by...\nIt should be used to correct results by...',
      },
      {
        label: 'g',
        text: 'Beta radiation is hazardous to health. **State** four safety precautions the student should take when handling the beta source. For each precaution, give a reason why it is important.',
        marks: 4,
        ph: 'Precaution 1: ... — Reason: ...\nPrecaution 2: ... — Reason: ...\nPrecaution 3: ... — Reason: ...\nPrecaution 4: ... — Reason: ...',
      },
      {
        label: 'h',
        text: 'The student then places an alpha source in the same position and repeats the experiment with the plastic sheets.\n\n**Describe** what the student would observe with the alpha source compared to the beta source, and explain why the observations differ.',
        marks: 2,
        ph: 'With the alpha source, the count rate would...\nThis differs from beta because alpha particles...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Radioactive Decay & Half-Life (12 marks) Criterion C
  // radio_select q8_b correct=2 → "Smooth curve" must be option index 2.
  // V2: cobalt-60 sim; strontium-90 decay graph; medical sterilisation context.
  //   q8_d: cobalt-60 t½ = 5 years; 1 280 000 → 80 000 = 4 half-lives → 20 years.
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Radioactive Decay & Half-Life',
    marks: 12,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['radioactive decay', 'half-life', 'half-life calculations'], level: 'developing' },
    stem: 'A simulation shows the radioactive decay of cobalt-60, a gamma-emitting isotope used to sterilise medical equipment and to treat cancer. In the simulation the percentage of the original nucleus remaining can be recorded at different times. Some of the data is also presented on a graph of strontium-90 decay (% of original nucleus remaining vs. time in years). Hospitals must plan how long a cobalt-60 source remains strong enough to use before it is replaced.',
    artefact: {
      component: 'DecaySim',
      data: {
        isotope: 'cobalt-60',
        daughter: 'nickel-60',
        decayMode: 'β⁻ + γ',
        halfLife: 5,
        units: 'years',
        initialCount: 144,
        axisMax: 30,
      },
      caption: 'Simulation of the radioactive decay of cobalt-60 (half-life 5 years). Drag the time marker to record the percentage remaining.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A simulation shows the radioactive decay of cobalt-60. You should **identify** six times at which you would record data from the simulation. For each time, record the percentage of the original nucleus remaining from three separate trial runs and **calculate** the mean average.\n\nPresent your results in a table with columns: Time (years) | Trial 1 | Trial 2 | Trial 3 | Average.\n\nGive your average values to an appropriate number of significant figures.',
        marks: 6,
        ph: 'Time (years) | Trial 1 | Trial 2 | Trial 3 | Average\n...          | ...     | ...     | ...     | ...\n(Choose 6 evenly spaced time values, record % remaining for each trial, calculate the average)',
      },
      {
        label: 'b',
        text: 'Some of the data is also presented in a graph. Three options are shown for how to draw a line through the data points.\n\n**Select** the most appropriate graph to present the radioactive decay data.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Point-to-point', 'Straight line', 'Smooth curve'],
        ph: 'Select the most appropriate line type',
      },
      {
        label: 'c',
        text: 'The half-life is characteristic of a particular isotope. The graph shows the decay of strontium-90.\n\nUsing the graph, **calculate** the average half-life for strontium-90. You should use **at least three** data points in your calculation.',
        marks: 3,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'time / years',
            yLabel: '% of original nucleus remaining',
            points: [[0, 100], [14, 71], [29, 50], [43, 35], [58, 25], [87, 12.5], [116, 6.25]],
            readouts: [
              { x: 29, note: 'read the time when 50% remains (1st half-life)' },
              { x: 58, note: 'read the time when 25% remains (2nd half-life)' },
              { x: 87, note: 'read the time when 12.5% remains (3rd half-life)' },
            ],
            dataMaxX: 116,
          },
          caption: 'Decay curve for strontium-90 (% remaining vs time). Drag the crosshair to read the times at 50%, 25% and 12.5%.',
        },
        ph: 'Reading 1: at t = ... years, % = 50 → first half-life = ... years\nReading 2: at t = ... years, % = 25 → second half-life = ... years\nReading 3: at t = ... years, % = 12.5 → third half-life = ... years\nAverage half-life = ... years',
      },
      {
        label: 'd',
        text: 'A cobalt-60 source has a half-life of **5 years**.\n\nIf a fresh source contains **1 280 000** undecayed cobalt-60 nuclei, **calculate** how long it would take for this number to decrease to **80 000**.',
        marks: 2,
        ph: 'Number of half-lives needed: 1 280 000 → 640 000 → 320 000 → 160 000 → 80 000 = ... half-lives\nTotal time = ... × 5 years = ... years',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Power Stations & Electricity Transmission (16 marks) Criterion D
  // V2: gas-fired (natural gas) power station.
  // ─────────────────────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Power Stations & Electricity Transmission',
    marks: 16,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['transformers', 'generators', 'AC vs DC'], level: 'proficient' },
    stem: 'This question is about the generation and transmission of electricity. In many developed countries, electricity is generated in large power stations far from where the people who use it live and work. The diagram shows the main components: power station → step-up transformer → high-voltage cables → step-down transformer → homes. The energy sources that power the generators in large industrial countries are gas, coal and nuclear (fission) reactors, or a mixture of these.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="pw9b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5b6b78"/></marker></defs><rect width="620" height="250" fill="#ffffff"/><text x="20" y="24" font-size="13" font-weight="700" fill="#1f2d3a">Generation and transmission of electricity</text><rect x="30" y="120" width="70" height="60" fill="#8a99a6" stroke="#5b6b78"/><rect x="44" y="92" width="10" height="30" fill="#6b7882"/><rect x="60" y="100" width="10" height="22" fill="#6b7882"/><path d="M49,92 q-4,-12 3,-18" fill="none" stroke="#7fc3e0" stroke-width="3"/><text x="65" y="200" font-size="10" text-anchor="middle" fill="#5b6b78">gas-fired station</text><circle cx="150" cy="150" r="20" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="150" y="154" font-size="9" text-anchor="middle" fill="#0b7285">step-up</text><line x1="100" y1="150" x2="130" y2="150" stroke="#5b6b78" stroke-width="2" marker-end="url(#pw9b)"/><path d="M250,90 L240,150 L260,150 Z" fill="#b6c4cf" stroke="#5b6b78"/><path d="M380,90 L370,150 L390,150 Z" fill="#b6c4cf" stroke="#5b6b78"/><line x1="172" y1="150" x2="245" y2="150" stroke="#5b6b78" stroke-width="2"/><line x1="250" y1="100" x2="380" y2="100" stroke="#f08c00" stroke-width="2"/><text x="300" y="92" font-size="10" text-anchor="middle" fill="#c47f0a">high-voltage cables</text><circle cx="450" cy="150" r="20" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="450" y="154" font-size="8" text-anchor="middle" fill="#0b7285">step-down</text><line x1="385" y1="150" x2="430" y2="150" stroke="#5b6b78" stroke-width="2" marker-end="url(#pw9b)"/><path d="M520,130 L540,110 L560,130 L560,180 L520,180 Z" fill="#d8c7a8" stroke="#9a865c"/><rect x="532" y="150" width="14" height="30" fill="#9a865c"/><text x="540" y="200" font-size="10" text-anchor="middle" fill="#5b6b78">homes</text><line x1="472" y1="150" x2="515" y2="150" stroke="#5b6b78" stroke-width="2" marker-end="url(#pw9b)"/></svg>',
      },
      caption: 'From gas-fired generator to home: a step-up transformer raises the voltage for transmission, a step-down transformer lowers it for use.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** two reasons why people would not want a gas-fired power station in or near their city.',
        marks: 2,
        ph: 'Reason 1:\nReason 2:',
      },
      {
        label: 'b',
        text: 'Gas-fired power stations require large quantities of water. **State** one reason why so much water is needed in a gas-fired power station.',
        marks: 1,
        ph: 'Water is needed for...',
      },
      {
        label: 'c',
        text: 'A transformer converts current and voltage. If P = IV, when the secondary voltage **doubles**, **state** what happens to the secondary current.',
        marks: 1,
        ph: 'The secondary current...',
      },
      {
        label: 'd',
        text: '**Explain** why electricity is transmitted at high voltage to reduce energy loss in the cables. In your answer use the relationship between energy loss, current and voltage.',
        marks: 3,
        ph: 'Energy loss in cables is proportional to...\nIncreasing transmission voltage reduces...\nTherefore less energy is lost because...',
      },
      {
        label: 'e',
        text: 'Burning natural gas releases energy. The combustion of natural gas also releases three gases: water vapour (H₂O), carbon dioxide (CO₂) and small amounts of nitrogen oxides (NOₓ).\n\n**Explain** the environmental impact of each of these gases.',
        marks: 6,
        ph: 'Water vapour (H₂O): ...\n\nCarbon dioxide (CO₂): ...\n\nNitrogen oxides (NOₓ): ...',
      },
      {
        label: 'f',
        text: 'Electricity companies sometimes charge less for electricity used at night than during the day. **Explain** why electricity companies offer cheaper night-time electricity rates. In your answer consider:\n• the demand for electricity at night compared with during the day\n• whether electrical energy can be stored\n• the benefit to the electricity company of encouraging night-time use',
        marks: 3,
        ph: 'At night, demand for electricity is...\nElectrical energy cannot be...\nTherefore it benefits the company to charge less at night because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 10 — Micro-Hydro Power & Traffic Management (16 marks) Criterion D
  // V2: small-scale micro-hydro turbine + battery powering traffic lights.
  // ─────────────────────────────────────────────────────────────
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Micro-Hydro Power & Traffic Management',
    marks: 16,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'work-energy', topics: ['energy sources (renewable vs non-renewable)', 'electrical power', 'energy efficiency'], level: 'advanced' },
    stem: 'The animation shows a sustainable solution to traffic management in a mountain town beside a fast-flowing river. Load shedding cuts off the electricity supply to different parts of the town at different times. When load shedding happens, the traffic lights lose power and stop working. The animation shows a small micro-hydro turbine, driven by water from the river, connected to a battery station. The stored energy in the battery can supply the traffic lights even when load shedding occurs.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky10b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3f1fb"/><stop offset="1" stop-color="#c2e0f2"/></linearGradient><linearGradient id="wtr10" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="600" height="280" fill="#ffffff"/><rect x="0" y="0" width="600" height="220" fill="url(#sky10b)"/><rect x="0" y="220" width="600" height="60" fill="#cdbf9c"/><path d="M40,60 L120,60 L150,180 L40,180 Z" fill="#9fb0a0" stroke="#6b7c6c"/><path d="M120,60 L150,180 L210,180 L150,60 Z" fill="#b6c7b6"/><path d="M150,120 Q175,140 175,175" fill="none" stroke="url(#wtr10)" stroke-width="14" stroke-linecap="round"/><circle cx="200" cy="185" r="26" fill="#b6c4cf" stroke="#5b6b78" stroke-width="2"/><g stroke="#5b6b78" stroke-width="3"><line x1="200" y1="185" x2="200" y2="161"/><line x1="200" y1="185" x2="221" y2="197"/><line x1="200" y1="185" x2="179" y2="197"/></g><text x="200" y="232" font-size="10" text-anchor="middle" fill="#5b6b78">micro-hydro turbine</text><rect x="300" y="170" width="60" height="50" rx="6" fill="#3a6ea5" stroke="#27496d"/><text x="330" y="200" font-size="11" fill="#fff" text-anchor="middle">battery</text><text x="330" y="244" font-size="10" text-anchor="middle" fill="#5b6b78">storage</text><line x1="226" y1="185" x2="298" y2="190" stroke="#5b6b78" stroke-width="2"/><rect x="450" y="150" width="26" height="70" rx="5" fill="#2c3e50"/><circle cx="463" cy="166" r="7" fill="#e74c3c"/><circle cx="463" cy="185" r="7" fill="#f1c40f"/><circle cx="463" cy="204" r="7" fill="#2ecc71"/><text x="463" y="244" font-size="10" text-anchor="middle" fill="#5b6b78">traffic lights</text><line x1="360" y1="195" x2="448" y2="190" stroke="#5b6b78" stroke-width="2"/><text x="40" y="32" font-size="13" font-weight="700" fill="#1f2d3a">Micro-hydro backup for traffic lights during load shedding</text></svg>',
      },
      caption: 'A small micro-hydro turbine driven by river water charges a battery that keeps the traffic lights running when the grid supply is cut.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Apart from traffic lights, **suggest** a different application where a constant source of electricity is necessary.',
        marks: 1,
        ph: 'Application: ...',
      },
      {
        label: 'b',
        text: 'Using information from the animation and your wider MYP studies, **discuss** and **evaluate** the use of a small-scale micro-hydro electrical power supply to solve the problem identified in part (a).\n\nIn your answer you should consider:\n• why a constant source of electricity is important in your application\n• the advantage of using a small-scale power supply in this situation\n• the disadvantage of using a small-scale power supply in this situation\n• economic factors\n• social factors',
        marks: 15,
        ph: 'Why constant electricity matters for my application: ...\n\nAdvantage of small-scale micro-hydro supply: ...\n\nDisadvantage of small-scale micro-hydro supply: ...\n\nEconomic factors: ...\n\nSocial factors: ...',
      },
    ],
  },
]
