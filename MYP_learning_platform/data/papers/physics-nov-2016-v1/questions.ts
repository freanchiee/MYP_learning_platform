import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2016 · VARIANT 1  (isomorphic to physics-nov-2016)
// Same crit / command term / marks / tags / widgets / task structure throughout.
// Only the real-world context, numbers and (data-driven) artefacts change.
// No figImages — every figure is a self-contained artefact rendered by
// QuestionImage.tsx's CodeRendered switch.
//   Q1 Motion:        bar-tailed godwit → ARCTIC TERN migration (840 km/day)
//   Q2 Waves:         elephants/hill → RHINOCEROS / rocky ridge (infrasound)   [wave widget locked]
//   Q3 Refraction:    3-layer ray, Air/Glass/Water (refraction widget locked)
//   Q4 Static:        plastic rod + cat → PERSPEX rod + DOG (induction)        [charge widget locked]
//   Q5 Crit B design: paper-wrap ice → BUBBLE-WRAP insulation investigation
//   Q6 Crit C eval:   coffee cup → HOT-CHOCOLATE cup cooling
//   Q7 Crit B design: Al-foil factory → PAPER-MILL beta thickness gauge
//   Q8 Half-life:     Sr-90 sim/Cs-137 graph/Fukushima → IODINE-131 sim/Sr-90 graph/Chernobyl
//   Q9 Crit D:        coal station → OIL-FIRED power station & transmission
//   Q10 Crit D essay: solar/Africa → WIND-TURBINE traffic management
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2016-v1',
  subject: 'Physics',
  session: 'November',
  year: 2016,
  totalMarks: 120,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Arctic Tern Migration & Motion (10 marks) Criterion A
  // V1: 840 km in 24 h → 35 km h⁻¹.  v–t graph: B-C constant 50 km/h,
  //     C-D decelerates 50→0 over 2 h → distance = ½·2·50 = 50 km.
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Arctic Tern Migration & Motion',
    marks: 10,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['speed and velocity', 'velocity-time graphs', "Newton's second law"], level: 'proficient' },
    stem: 'Some birds migrate every year between their breeding and feeding grounds. The Arctic tern makes one of the longest migrations of any animal, flying from its Arctic breeding grounds to the Antarctic and back — a round trip of up to 70 000 km. Scientists track these journeys using lightweight geolocators clipped to the birds\' legs.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dff1fb"/><stop offset="1" stop-color="#bfe3f2"/></linearGradient></defs><rect width="600" height="260" fill="#ffffff"/><rect x="0" y="0" width="600" height="180" fill="url(#sky1)"/><path d="M0,180 L600,180 L600,230 L0,230 Z" fill="#cfe4d8"/><path d="M0,180 Q150,160 300,178 T600,176" fill="none" stroke="#7fae93" stroke-width="2"/><g stroke="#2c3e50" stroke-width="3" fill="none" stroke-linecap="round"><path d="M120,70 Q140,56 160,70 Q180,56 200,70"/><path d="M260,100 Q278,88 296,100 Q314,88 332,100"/><path d="M400,60 Q418,48 436,60 Q454,48 472,60"/></g><path d="M300,200 C330,150 380,150 430,120" fill="none" stroke="#0b7285" stroke-width="2" stroke-dasharray="6 5"/><text x="300" y="222" font-size="12" fill="#0b7285">tracked migration route</text><text x="40" y="34" font-size="14" font-weight="700" fill="#1f2d3a">Arctic tern long-distance flight</text></svg>',
      },
      caption: 'An Arctic tern in flight; geolocators record its position along the migration route.',
    },
    tasks: [
      {
        label: 'a',
        text: 'One Arctic tern flies **840 km** in a day. **Calculate** the speed in km h⁻¹ (in kilometres per hour).',
        marks: 1,
        ph: 'Speed = distance / time = 840 / 24 = ... km h⁻¹',
      },
      {
        label: 'b',
        text: 'Scientists fit lightweight geolocator tags to 20 Arctic terns at their breeding colonies in Iceland. Later the scientists use the information from the geolocators and calculate that the average speed of the birds is 44 km h⁻¹.\n\n**Outline** two factors that may affect the average speed achieved by the Arctic tern.',
        marks: 2,
        ph: 'Factor 1:\nFactor 2:',
      },
      {
        label: 'c',
        text: 'The graph below shows part of a different migrating bird\'s journey. Between points B and C on the graph, the bird travels at **constant velocity**.\n\n**Select** the appropriate diagram which represents the forces acting between points B and C on the graph.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Diagram 1', 'Diagram 2', 'Diagram 3', 'Diagram 4'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="fa1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="620" height="300" fill="#ffffff"/><text x="20" y="22" font-size="13" font-weight="700" fill="#1f2d3a">Velocity–time graph of the bird&#39;s journey</text><line x1="60" y1="40" x2="60" y2="180" stroke="#5b6b78" stroke-width="2"/><line x1="60" y1="180" x2="320" y2="180" stroke="#5b6b78" stroke-width="2"/><text x="30" y="115" font-size="11" fill="#5b6b78" transform="rotate(-90 30 115)">velocity</text><text x="175" y="198" font-size="11" fill="#5b6b78">time</text><polyline points="60,160 110,70 210,70 300,160" fill="none" stroke="#0b7285" stroke-width="2.5"/><circle cx="60" cy="160" r="3" fill="#0b7285"/><circle cx="110" cy="70" r="3" fill="#0b7285"/><circle cx="210" cy="70" r="3" fill="#0b7285"/><circle cx="300" cy="160" r="3" fill="#0b7285"/><text x="52" y="174" font-size="11" font-weight="700">A</text><text x="104" y="64" font-size="11" font-weight="700">B</text><text x="212" y="64" font-size="11" font-weight="700">C</text><text x="300" y="174" font-size="11" font-weight="700">D</text><g><text x="380" y="40" font-size="12" font-weight="700">Diagram 1</text><circle cx="410" cy="70" r="9" fill="#2c3e50"/><line x1="410" y1="79" x2="410" y2="110" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1)"/><line x1="419" y1="70" x2="455" y2="70" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1)"/></g><g><text x="510" y="40" font-size="12" font-weight="700">Diagram 2</text><circle cx="540" cy="70" r="9" fill="#2c3e50"/><line x1="540" y1="61" x2="540" y2="34" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1)"/><line x1="549" y1="70" x2="585" y2="70" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1)"/></g><g><text x="380" y="180" font-size="12" font-weight="700">Diagram 3</text><circle cx="410" cy="215" r="9" fill="#2c3e50"/><line x1="419" y1="215" x2="465" y2="215" stroke="#c0392b" stroke-width="2.5" marker-end="url(#fa1)"/><line x1="401" y1="215" x2="384" y2="215" stroke="#c0392b" stroke-width="1.5" marker-end="url(#fa1)"/></g><g><text x="510" y="180" font-size="12" font-weight="700">Diagram 4</text><circle cx="540" cy="215" r="9" fill="#2c3e50"/><line x1="531" y1="215" x2="500" y2="215" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1)"/><line x1="549" y1="215" x2="580" y2="215" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1)"/><line x1="540" y1="206" x2="540" y2="180" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1)"/><line x1="540" y1="224" x2="540" y2="250" stroke="#c0392b" stroke-width="2" marker-end="url(#fa1)"/></g></svg>',
          },
          caption: 'Velocity–time graph (left) and four candidate force diagrams (1–4) for the constant-velocity section B–C.',
        },
        ph: 'Select Diagram 1, 2, 3, or 4',
      },
      {
        label: 'd',
        text: '**Explain** what is happening with respect to the force, velocity and acceleration of the bird between points C and D on the graph. Include in your explanation which of Newton\'s laws is being obeyed as the graph changes.\n\nAddress each of the following in turn:\n• Force (between C and D)\n• Velocity (between C and D)\n• Acceleration (between C and D)\n• Which Newton\'s law applies, and what it states',
        marks: 4,
        ph: 'Force: ...\nVelocity: ...\nAcceleration: ...\nNewton\'s law: ...',
      },
      {
        label: 'e',
        text: 'Use the graph to **calculate** the distance travelled by the bird while decelerating (between C and D). Between C and D the bird slows from a constant velocity of 50 km h⁻¹ to rest over a time of 2 hours.',
        marks: 2,
        ph: 'Distance = area under graph between C and D\nArea = ½ × base × height = ½ × (time CD) × (velocity at C)\n= ... km',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Wave Properties (10 marks) Criterion A
  // wave_label_drag_drop LOCKED → keep transverse/longitudinal infrasound family.
  // Rhinoceros / rocky-ridge context. Oscilloscope artefact: 1 s window.
  //   Wave A = 8 Hz, B = 12 Hz, C = 5 Hz, D = 12 Hz (B & D match).
  //   v=330: λ(C)=330/5 = 66 m.  Wave that is NOT infrasound: none >20 here? choose
  //   to keep "highest freq" mark-scheme generic — wave B/D = 12 Hz still < 20.
  //   To preserve the q2_e construct (one wave NOT infrasound) set D = 25 Hz.
  //   Final: A=8, B=12, C=5, D=12? must keep "two same freq" + "one not infrasound".
  //   Use A=10, B=6, C=5, D=10 (A&D same), and add E? No — keep 4 waves:
  //   A=10 Hz, B=6 Hz, C=5 Hz, D=10 Hz → A&D same freq; none >20… need one >20.
  //   Resolve: A=25 Hz, B=8 Hz, C=5 Hz, D=8 Hz → B&D same (q2_c), A NOT infrasound
  //   (25>20, q2_e), λ(C)=330/5=66 m (q2_d), f(A)=25 (q2_b).
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
    stem: 'These animations show the two different types of wave moving along springs — a transverse wave and a longitudinal wave. Infrasound is a low-frequency longitudinal wave that rhinoceroses, hippopotamuses and alligators use to communicate with one another. The frequency of infrasound waves is lower than 20 Hz. Infrasound waves can travel very long distances through air at a speed of 330 m s⁻¹.',
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
            svg: '<svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="380" fill="#ffffff"/><text x="20" y="22" font-size="13" font-weight="700" fill="#1f2d3a">Sound waves recorded over 1 second</text><g><text x="20" y="60" font-size="12" font-weight="700" fill="#0b7285">A</text><line x1="40" y1="60" x2="520" y2="60" stroke="#d0d7de" stroke-width="1"/><path d="M40,60 q4.8,-20 9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0 t9.6,0" fill="none" stroke="#0b7285" stroke-width="2"/></g><g><text x="20" y="135" font-size="12" font-weight="700" fill="#f08c00">B</text><line x1="40" y1="135" x2="520" y2="135" stroke="#d0d7de" stroke-width="1"/><path d="M40,135 q15,-26 30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0" fill="none" stroke="#f08c00" stroke-width="2"/></g><g><text x="20" y="210" font-size="12" font-weight="700" fill="#7a4fb5">C</text><line x1="40" y1="210" x2="520" y2="210" stroke="#d0d7de" stroke-width="1"/><path d="M40,210 q24,-30 48,0 t48,0 t48,0 t48,0 t48,0 t48,0 t48,0 t48,0 t48,0 t48,0" fill="none" stroke="#7a4fb5" stroke-width="2"/></g><g><text x="20" y="285" font-size="12" font-weight="700" fill="#1f8a4c">D</text><line x1="40" y1="285" x2="520" y2="285" stroke="#d0d7de" stroke-width="1"/><path d="M40,285 q15,-16 30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0" fill="none" stroke="#1f8a4c" stroke-width="2"/></g><line x1="40" y1="330" x2="520" y2="330" stroke="#5b6b78" stroke-width="1.5"/><text x="40" y="350" font-size="11" fill="#5b6b78">0 s</text><text x="490" y="350" font-size="11" fill="#5b6b78">1 s</text><text x="270" y="368" font-size="11" fill="#5b6b78" text-anchor="middle">time</text></svg>',
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
        text: 'Animals use infrasound because the waves travel long distances. The diagram shows rhinoceroses on opposite sides of a rocky ridge.\n\n**Explain** how the group of rhinoceroses on the far side of the ridge can hear the calling rhinoceros.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e7f3fb"/><stop offset="1" stop-color="#cfe7f5"/></linearGradient></defs><rect width="600" height="300" fill="#ffffff"/><rect x="0" y="0" width="600" height="230" fill="url(#sky2)"/><path d="M210,230 L300,70 L390,230 Z" fill="#9a8b6f" stroke="#6b5d44" stroke-width="2"/><path d="M260,150 L300,70 L340,150 Z" fill="#b7a98c"/><rect x="0" y="230" width="600" height="70" fill="#cdbf9c"/><g stroke="#0b7285" stroke-width="1.6" fill="none"><path d="M150,180 A60,60 0 0 1 150,120"/><path d="M135,190 A78,78 0 0 1 135,110"/><path d="M120,200 A96,96 0 0 1 120,100"/></g><g stroke="#0b7285" stroke-width="1.6" fill="none" opacity="0.85"><path d="M450,120 A60,60 0 0 1 450,180"/><path d="M465,110 A78,78 0 0 1 465,190"/><path d="M480,100 A96,96 0 0 1 480,200"/></g><ellipse cx="110" cy="215" rx="34" ry="20" fill="#7d7468" stroke="#534c43"/><path d="M140,205 l16,-6 l-2,10 Z" fill="#534c43"/><text x="92" y="252" font-size="11" fill="#4a4339">calling rhino</text><ellipse cx="500" cy="215" rx="34" ry="20" fill="#8a8175" stroke="#534c43"/><path d="M470,205 l-16,-6 l2,10 Z" fill="#534c43"/><text x="455" y="252" font-size="11" fill="#4a4339">listening rhinos</text><text x="270" y="58" font-size="11" fill="#6b5d44">rocky ridge</text></svg>',
          },
          caption: 'Infrasound from a calling rhinoceros must travel around the rocky ridge to reach the rhinoceroses on the far side.',
        },
        ph: 'The infrasound waves undergo...\nThis happens because the wavelength is...\nAs a result, the waves...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Refraction of Light (5 marks) Criterion A
  // refraction_label_drag_drop is LOCKED (renders Air→Glass→Water ray, fixed
  // angles, self-grades {top:Air, middle:Glass, bottom:Water}). KEEP the
  // 3-material layered-ray construct and the n-table; reframe surrounding text.
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
    stem: 'A science museum exhibit shines a narrow laser beam down through three stacked transparent slabs so visitors can watch the beam change direction at each boundary. The diagram shows the ray passing through the three different materials. The table shows the refractive indices of common materials:\n\n| Material | Refractive index (n) |\n|----------|---------------------|\n| Air      | 1.00                |\n| Glass    | 1.50                |\n| Water    | 1.33                |',
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
  // inline_dropdown_select is LOCKED (Electron/Proton/Neutron → -1/+1/0).
  // KEEP the subatomic-charge + charging + induction family.
  // Context: perspex rod + wool (→ negative), dog (Bruno) + cereal induction.
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
    stem: 'Most materials are electrically neutral; they contain equal numbers of charged particles. An animation shows that when a wool cloth is used to rub a perspex rod, the rod becomes negatively charged.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="rod4" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#7fb6d0"/></linearGradient></defs><rect width="560" height="230" fill="#ffffff"/><rect x="70" y="100" width="260" height="22" rx="11" fill="url(#rod4)" stroke="#3f7e98"/><text x="200" y="142" font-size="11" text-anchor="middle" fill="#2c5468">perspex rod</text><g fill="#c0392b" font-size="13" font-weight="700"><text x="105" y="116">−</text><text x="150" y="116">−</text><text x="195" y="116">−</text><text x="240" y="116">−</text><text x="285" y="116">−</text></g><path d="M360,80 q40,-10 70,10 q20,30 -5,55 q-45,15 -70,-10 q-15,-30 5,-55 Z" fill="#e8d8b0" stroke="#b9a565" stroke-width="2"/><text x="395" y="170" font-size="11" text-anchor="middle" fill="#8a7b3f">wool cloth</text><g fill="#2466b0" font-size="13" font-weight="700"><text x="378" y="108">+</text><text x="402" y="120">+</text><text x="388" y="135">+</text><text x="414" y="100">+</text></g><path d="M335,111 q12,-4 22,0" stroke="#5b6b78" stroke-width="1.5" fill="none" marker-end="url(#arrowe)"/><defs><marker id="arrowe" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6b78"/></marker></defs><text x="300" y="44" font-size="11" fill="#5b6b78">electrons transferred onto the rod</text><path d="M300,52 q-30,18 -70,42" stroke="#5b6b78" stroke-width="1" fill="none" stroke-dasharray="3 3"/><text x="40" y="30" font-size="14" font-weight="700" fill="#1f2d3a">Charging a perspex rod by friction</text></svg>',
      },
      caption: 'Rubbing the perspex rod with a wool cloth transfers electrons onto the rod, leaving it negatively charged.',
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
        text: 'Use the animation to **explain** the process by which the rod becomes negatively charged when rubbed with a wool cloth.',
        marks: 3,
        ph: 'When the cloth rubs the rod, ... are transferred...\nThe rod gains...\nThis makes the rod negatively charged because...',
      },
      {
        label: 'c',
        text: 'Bruno is a large dog. When Bruno walks around on a nylon carpet, he becomes electrically charged. Small pieces of dry breakfast cereal on the floor are attracted to Bruno\'s fur. The cereal pieces are initially uncharged.\n\nUsing the concept of induction, **suggest** why the cereal pieces stick to Bruno.',
        marks: 4,
        ph: 'Bruno becomes charged because...\nThe cereal is initially uncharged, but...\nInduction causes...\nThe cereal is attracted because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Thermal Insulation Investigation (13 marks) Criterion B
  // V1: bubble-wrap layers around a 100 g ice block.
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
    stem: 'Yuki carries ice cream home from the shops. On hot days she finds that much of the ice cream has melted before she gets home. She lives 15 minutes away from the shops. Yuki decides to investigate a solution. She reads that wrapping the tub in bubble wrap can help it stay cold for longer.\n\nYuki uses standard blocks of ice, each with a mass of 100 g, to model the melting of the ice cream. She investigates how the number of layers of bubble wrap wrapped around the block affects the mass of ice that melts.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="ice5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8f7ff"/><stop offset="1" stop-color="#bfe6f5"/></linearGradient></defs><rect width="560" height="240" fill="#ffffff"/><rect x="60" y="150" width="440" height="14" fill="#d8d2c4"/><g><rect x="120" y="90" width="80" height="70" rx="4" fill="url(#ice5)" stroke="#6cb6d6" stroke-width="2"/><text x="160" y="180" font-size="11" text-anchor="middle" fill="#3f7e98">0 layers</text></g><g><rect x="300" y="84" width="92" height="82" rx="6" fill="url(#ice5)" stroke="#6cb6d6" stroke-width="2"/><rect x="290" y="74" width="112" height="102" rx="10" fill="none" stroke="#0b7285" stroke-width="2" stroke-dasharray="5 4"/><rect x="282" y="66" width="128" height="118" rx="12" fill="none" stroke="#0b7285" stroke-width="1.5" stroke-dasharray="5 4"/><text x="346" y="200" font-size="11" text-anchor="middle" fill="#3f7e98">several layers of bubble wrap</text></g><g fill="#f08c00" font-size="13"><text x="92" y="86">☀</text><text x="250" y="86">☀</text></g><text x="40" y="34" font-size="14" font-weight="700" fill="#1f2d3a">Modelling ice-cream melting with wrapped ice blocks</text></svg>',
      },
      caption: 'Ice blocks wrapped in different numbers of layers of bubble wrap to model the insulation of an ice-cream tub.',
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
        text: 'Other than ice and bubble wrap, **suggest** and **justify** one additional piece of equipment that Yuki will need to perform this experiment.',
        marks: 2,
        ph: 'Equipment: ...\nJustification: ...',
      },
      {
        label: 'c',
        text: '**Suggest** and **justify** a hypothesis for this experiment.',
        marks: 2,
        ph: 'Hypothesis: As the number of layers of bubble wrap increases, the mass of ice melted will...\nJustification: This is because...',
      },
      {
        label: 'd',
        text: '**State** one variable that Yuki needs to control. **Describe** how and why this variable should be controlled.',
        marks: 3,
        ph: 'Variable: ...\nHow it should be controlled: ...\nWhy it should be controlled: ...',
      },
      {
        label: 'e',
        text: '**Explain** what results Yuki needs to collect to ensure that she has sufficient relevant data.',
        marks: 3,
        ph: 'Yuki should measure...\nShe should test at least ... different values of...\nShe should repeat each measurement ... times because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Cup Cooling Investigation (9 marks) Criterion C
  // V1: hot chocolate, 80→55 °C, inconsistent data (no trend, repeated 6 mm).
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
    stem: 'Another student, Priya, finds that her cup of hot chocolate cools down too quickly. She wonders if a thicker cup would keep her drink warm for longer.\n\nPriya forms the hypothesis: "The thicker the cup, the longer the drink will take to cool down because heat will take longer to transfer through the thicker material of the cup."\n\nShe finds cups of different thicknesses in her kitchen. She fills each cup with hot chocolate to the same level and times how long it takes for the drink to cool from 80 °C to 55 °C in each cup.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Thickness of cup / mm', 'Time to cool from 80 °C to 55 °C / min'],
        rows: [['2', '12'], ['4', '8'], ['6', '20'], ['6', '11'], ['8', '15']],
      },
      caption: 'Priya\'s results: cooling time for cups of different thickness (note the inconsistent values).',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** and **justify** whether the results of Priya\'s investigation support her hypothesis.',
        marks: 1,
        ph: 'The results [do / do not] support the hypothesis because...',
      },
      {
        label: 'b',
        text: '**Identify** four weaknesses in Priya\'s method. For each of the weaknesses, **explain** how her investigation was affected. Use scientific knowledge and understanding in your answer.',
        marks: 8,
        ph: 'Weakness 1: ...\nHow this affected the investigation: ...\n\nWeakness 2: ...\nHow this affected the investigation: ...\n\nWeakness 3: ...\nHow this affected the investigation: ...\n\nWeakness 4: ...\nHow this affected the investigation: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Radiation Investigation (21 marks) Criterion B
  // V1: beta thickness gauge in a PAPER MILL (paper-sheet thickness).
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
    stem: 'Developments in atomic physics have led to many useful applications in industry, medicine and technology. By understanding patterns in the properties of alpha (α), beta (β) and gamma (γ) radiation, scientists have found ways to use their specific properties.\n\nOne useful property is the difference in penetration of the three types of radiation. The diagram shows how alpha, beta and gamma radiation are stopped by paper, aluminium and lead.\n\nThe amount of beta radiation absorbed depends on the thickness of the material it passes through. In a paper mill, a beta source and detector are used to monitor the thickness of paper sheets as they pass between rollers — the detector signal adjusts the rollers automatically.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ray7" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="600" height="300" fill="#ffffff"/><text x="20" y="24" font-size="13" font-weight="700" fill="#1f2d3a">Beta thickness gauge in a paper mill</text><circle cx="80" cy="150" r="22" fill="#0b7285"/><text x="80" y="154" font-size="10" fill="#fff" text-anchor="middle">β src</text><circle cx="220" cy="120" r="34" fill="#b6c4cf" stroke="#5b6b78" stroke-width="2"/><circle cx="220" cy="190" r="34" fill="#b6c4cf" stroke="#5b6b78" stroke-width="2"/><text x="220" y="98" font-size="10" text-anchor="middle" fill="#5b6b78">rollers</text><rect x="100" y="151" width="430" height="8" fill="#efe7d2" stroke="#cbbe96"/><text x="330" y="146" font-size="10" fill="#9a8b58">paper sheet</text><line x1="102" y1="155" x2="430" y2="155" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#ray7)"/><rect x="470" y="132" width="60" height="46" rx="4" fill="#222"/><text x="500" y="150" font-size="9" fill="#3ad36a" text-anchor="middle" font-family="monospace">cps</text><text x="500" y="168" font-size="9" fill="#9aa" text-anchor="middle">detector</text><text x="60" y="250" font-size="11" fill="#5b6b78">More paper → more beta absorbed → lower count rate at the detector.</text></svg>',
      },
      caption: 'A beta source and Geiger detector measure the count rate transmitted through the moving paper sheet.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Your task is to design an investigation to determine how the thickness of paper sheets affects the amount of beta radiation absorbed.\n\n**State** the independent and dependent variables in your investigation.',
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
        text: '**Write** a hypothesis for this investigation that describes the expected relationship between the thickness of paper and the intensity of beta radiation detected.',
        marks: 2,
        ph: 'As the thickness of paper increases, the beta radiation detected will ... because ...',
      },
      {
        label: 'd',
        text: '**Describe** in detail how you would carry out this investigation to collect valid and reliable data. In your answer include:\n• the range and number of IV values tested\n• how and how many times measurements are repeated\n• what measurement is taken with no paper present\n• how paper sheets are added\n• one control variable and how it is kept constant\n• how the same source is used throughout',
        marks: 6,
        ph: 'Range of IV values: ...\nRepeat each measurement: ... times\nBaseline (no paper): ...\nPaper added: ...\nControl variable: ...\nSame source: ...',
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
        text: 'The student then places an alpha source in the same position and repeats the experiment with the paper sheets.\n\n**Describe** what the student would observe with the alpha source compared to the beta source, and explain why the observations differ.',
        marks: 2,
        ph: 'With the alpha source, the count rate would...\nThis differs from beta because alpha particles...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Radioactive Decay & Half-Life (12 marks) Criterion C
  // radio_select q8_b correct=2 → "Smooth curve" must be option index 2.
  // V1: iodine-131 sim; strontium-90 decay graph; Chernobyl context.
  //   q8_d: iodine-131 t½ = 8 days; 640 000 → 40 000 = 4 half-lives → 32 days.
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
    stem: 'A simulation shows the radioactive decay of iodine-131. In the simulation the percentage of the original nucleus remaining can be recorded at different times. Some of the data is also presented on a graph of strontium-90 decay (% of original nucleus remaining vs. time in years). The Chernobyl nuclear disaster released several radioactive isotopes into the environment, including iodine-131 and strontium-90.',
    artefact: {
      component: 'DecaySim',
      data: {
        isotope: 'iodine-131',
        daughter: 'xenon-131',
        decayMode: 'β⁻',
        halfLife: 8,
        units: 'days',
        initialCount: 144,
        axisMax: 48,
      },
      caption: 'Simulation of the radioactive decay of iodine-131 (half-life 8 days). Drag the time marker to record the percentage remaining.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A simulation shows the radioactive decay of iodine-131. You should **identify** six times at which you would record data from the simulation. For each time, record the percentage of the original nucleus remaining from three separate trial runs and **calculate** the mean average.\n\nPresent your results in a table with columns: Time (days) | Trial 1 | Trial 2 | Trial 3 | Average.\n\nGive your average values to an appropriate number of significant figures.',
        marks: 6,
        ph: 'Time (days) | Trial 1 | Trial 2 | Trial 3 | Average\n...         | ...     | ...     | ...     | ...\n(Choose 6 evenly spaced time values, record % remaining for each trial, calculate the average)',
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
        text: 'A different isotope, iodine-131, was also released during the disaster. Iodine-131 has a half-life of **8 days**.\n\nIf the disaster released **640 000** atoms of iodine-131 into the water supply, **calculate** how long it would take for this number to decrease to **40 000**.',
        marks: 2,
        ph: 'Number of half-lives needed: 640 000 → 320 000 → 160 000 → 80 000 → 40 000 = ... half-lives\nTotal time = ... × 8 days = ... days',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Power Stations & Electricity Transmission (16 marks) Criterion D
  // V1: oil-fired power station.
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
    stem: 'This question is about the generation and transmission of electricity. In many developed countries, electricity is generated in large power stations far from where the people who use it live and work. The diagram shows the main components: power station → step-up transformer → high-voltage cables → step-down transformer → homes. The energy sources that power the generators in large industrial countries are oil, gas and nuclear (fission) reactors, or a mixture of these.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="pw9" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5b6b78"/></marker></defs><rect width="620" height="250" fill="#ffffff"/><text x="20" y="24" font-size="13" font-weight="700" fill="#1f2d3a">Generation and transmission of electricity</text><rect x="30" y="120" width="70" height="60" fill="#8a99a6" stroke="#5b6b78"/><rect x="48" y="95" width="14" height="28" fill="#6b7882"/><path d="M55,95 q-6,-14 4,-22" fill="none" stroke="#aab4bc" stroke-width="3"/><text x="65" y="200" font-size="10" text-anchor="middle" fill="#5b6b78">oil-fired station</text><circle cx="150" cy="150" r="20" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="150" y="154" font-size="9" text-anchor="middle" fill="#0b7285">step-up</text><line x1="100" y1="150" x2="130" y2="150" stroke="#5b6b78" stroke-width="2" marker-end="url(#pw9)"/><path d="M250,90 L240,150 L260,150 Z" fill="#b6c4cf" stroke="#5b6b78"/><path d="M380,90 L370,150 L390,150 Z" fill="#b6c4cf" stroke="#5b6b78"/><line x1="172" y1="150" x2="245" y2="150" stroke="#5b6b78" stroke-width="2"/><line x1="250" y1="100" x2="380" y2="100" stroke="#f08c00" stroke-width="2"/><text x="300" y="92" font-size="10" text-anchor="middle" fill="#c47f0a">high-voltage cables</text><circle cx="450" cy="150" r="20" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="450" y="154" font-size="8" text-anchor="middle" fill="#0b7285">step-down</text><line x1="385" y1="150" x2="430" y2="150" stroke="#5b6b78" stroke-width="2" marker-end="url(#pw9)"/><path d="M520,130 L540,110 L560,130 L560,180 L520,180 Z" fill="#d8c7a8" stroke="#9a865c"/><rect x="532" y="150" width="14" height="30" fill="#9a865c"/><text x="540" y="200" font-size="10" text-anchor="middle" fill="#5b6b78">homes</text><line x1="472" y1="150" x2="515" y2="150" stroke="#5b6b78" stroke-width="2" marker-end="url(#pw9)"/></svg>',
      },
      caption: 'From oil-fired generator to home: a step-up transformer raises the voltage for transmission, a step-down transformer lowers it for use.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** two reasons why people would not want an oil-fired power station in or near their city.',
        marks: 2,
        ph: 'Reason 1:\nReason 2:',
      },
      {
        label: 'b',
        text: 'Oil-fired power stations require large quantities of water. **State** one reason why so much water is needed in an oil-fired power station.',
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
        text: 'Oil burns to release energy. The combustion of oil also releases three gases: water vapour (H₂O), carbon dioxide (CO₂) and sulfur dioxide (SO₂).\n\n**Explain** the environmental impact of each of these gases.',
        marks: 6,
        ph: 'Water vapour (H₂O): ...\n\nCarbon dioxide (CO₂): ...\n\nSulfur dioxide (SO₂): ...',
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
  // QUESTION 10 — Wind Power & Traffic Management (16 marks) Criterion D
  // V1: small-scale wind turbine + battery powering traffic lights.
  // ─────────────────────────────────────────────────────────────
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Wind Power & Traffic Management',
    marks: 16,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'work-energy', topics: ['energy sources (renewable vs non-renewable)', 'electrical power', 'energy efficiency'], level: 'advanced' },
    stem: 'The animation shows a sustainable solution to traffic management in a coastal city. Load shedding cuts off the electricity supply to different parts of a city at different times. When load shedding happens, the traffic lights lose power and stop working. The animation shows a small wind turbine positioned to capture wind energy, connected to a battery station. The stored energy in the battery can supply the traffic lights even when load shedding occurs.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky10" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3f1fb"/><stop offset="1" stop-color="#c2e0f2"/></linearGradient></defs><rect width="600" height="280" fill="#ffffff"/><rect x="0" y="0" width="600" height="220" fill="url(#sky10)"/><rect x="0" y="220" width="600" height="60" fill="#cfd9c8"/><line x1="130" y1="220" x2="130" y2="100" stroke="#8a99a6" stroke-width="6"/><circle cx="130" cy="96" r="6" fill="#5b6b78"/><g stroke="#5b6b78" stroke-width="4" fill="#b6c4cf"><path d="M130,96 L130,40 L138,44 Z"/><path d="M130,96 L178,124 L172,131 Z"/><path d="M130,96 L82,124 L88,131 Z"/></g><text x="130" y="244" font-size="10" text-anchor="middle" fill="#5b6b78">wind turbine</text><rect x="280" y="170" width="60" height="50" rx="6" fill="#3a6ea5" stroke="#27496d"/><text x="310" y="200" font-size="11" fill="#fff" text-anchor="middle">battery</text><text x="310" y="244" font-size="10" text-anchor="middle" fill="#5b6b78">storage</text><line x1="178" y1="135" x2="278" y2="180" stroke="#5b6b78" stroke-width="2"/><rect x="430" y="150" width="26" height="70" rx="5" fill="#2c3e50"/><circle cx="443" cy="166" r="7" fill="#e74c3c"/><circle cx="443" cy="185" r="7" fill="#f1c40f"/><circle cx="443" cy="204" r="7" fill="#2ecc71"/><text x="443" y="244" font-size="10" text-anchor="middle" fill="#5b6b78">traffic lights</text><line x1="340" y1="195" x2="428" y2="190" stroke="#5b6b78" stroke-width="2"/><text x="40" y="32" font-size="13" font-weight="700" fill="#1f2d3a">Wind-powered backup for traffic lights during load shedding</text></svg>',
      },
      caption: 'A small wind turbine charges a battery that keeps the traffic lights running when the grid supply is cut.',
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
        text: 'Using information from the animation and your wider MYP studies, **discuss** and **evaluate** the use of a small-scale wind-turbine electrical power supply to solve the problem identified in part (a).\n\nIn your answer you should consider:\n• why a constant source of electricity is important in your application\n• the advantage of using a small-scale power supply in this situation\n• the disadvantage of using a small-scale power supply in this situation\n• economic factors\n• social factors',
        marks: 15,
        ph: 'Why constant electricity matters for my application: ...\n\nAdvantage of small-scale wind supply: ...\n\nDisadvantage of small-scale wind supply: ...\n\nEconomic factors: ...\n\nSocial factors: ...',
      },
    ],
  },
]
