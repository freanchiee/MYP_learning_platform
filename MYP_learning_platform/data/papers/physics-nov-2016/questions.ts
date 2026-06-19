import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-nov-2016',
  subject: 'Physics',
  session: 'November',
  year: 2016,
  totalMarks: 120,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Bird Migration & Motion (10 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Bird Migration & Motion',
    marks: 10,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['speed and velocity', 'velocity-time graphs', "Newton's second law"], level: 'proficient' },
    stem: 'Some birds migrate every autumn, some fly to cooler countries and some fly to warmer countries. The bar-tailed godwit can fly for nearly 11 000 km without stopping. During the eight-day journey that it takes to cover that distance, the bird doesn\'t stop for food or rest. This makes the bar-tailed godwit the bird with the longest recorded non-stop flight.\n\nThe velocity–time graph shows part of a different migrating bird\'s journey: it accelerates from rest (A→B), flies at constant velocity (B→C), then decelerates and lands (C→D).',
    artefact: {
      component: 'GraphSim',
      data: {
        title: 'Velocity–time graph for a migrating bird',
        mode: 'readoff',
        xLabel: 'time / s',
        yLabel: 'velocity / m s⁻¹',
        xRange: [0, 60],
        yRange: [0, 24],
        points: [[0, 0], [10, 20], [40, 20], [50, 0]],
        readouts: [
          { x: 25, note: 'B→C: constant velocity (20 m s⁻¹)' },
          { x: 45, note: 'C→D: decelerating to rest' },
        ],
        dataMaxX: 60,
      },
      caption: 'A→B the bird accelerates, B→C it flies at a constant 20 m s⁻¹, C→D (t = 40 s to 50 s) it decelerates to rest. Drag the cursor to read the velocity.',
    },
    tasks: [
      {
        label: 'a',
        text: 'One bar-tailed godwit flies 1200 km in a day. **Calculate** the speed in km h⁻¹ (in kilometres per hour).',
        marks: 1,
        ph: 'Speed = distance / time = 1200 / 24 = ... km h⁻¹',
      },
      {
        label: 'b',
        text: 'Scientists fit satellite transmitters to 16 godwits at two locations in New Zealand. Later the scientists use the information from the satellite transmitters and calculate that the average speed of the bird is 56 km h⁻¹.\n\n**Outline** two factors that may affect the average speed achieved by the bar-tailed godwit.',
        marks: 2,
        ph: 'Factor 1:\nFactor 2:',
      },
      {
        label: 'c',
        text: 'Between points B and C on the graph, the bird travels at **constant velocity**.\n\n**Select** the appropriate diagram which represents the forces acting between points B and C on the graph.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Diagram 1', 'Diagram 2', 'Diagram 3', 'Diagram 4'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 520" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="520" fill="#ffffff"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Force diagrams for the flying bird</text><defs><marker id="aU" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2e8b57"/></marker><marker id="aD" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#9b5a18"/></marker><marker id="aL" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1f6feb"/></marker><marker id="aR" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><g><text x="155" y="58" font-size="13" font-weight="700" text-anchor="middle">Diagram 1</text><ellipse cx="155" cy="150" rx="28" ry="13" fill="#9c7a3c" stroke="#6b5226"/><line x1="155" y1="137" x2="155" y2="92" stroke="#2e8b57" stroke-width="3" marker-end="url(#aU)"/><text x="155" y="86" font-size="11" text-anchor="middle" fill="#2e8b57">Lift</text><line x1="155" y1="163" x2="155" y2="208" stroke="#9b5a18" stroke-width="3" marker-end="url(#aD)"/><text x="155" y="224" font-size="11" text-anchor="middle" fill="#9b5a18">Weight</text><line x1="127" y1="150" x2="82" y2="150" stroke="#1f6feb" stroke-width="3" marker-end="url(#aL)"/><text x="70" y="153" font-size="11" text-anchor="end" fill="#1f6feb">Drag</text><line x1="183" y1="150" x2="228" y2="150" stroke="#c0392b" stroke-width="3" marker-end="url(#aR)"/><text x="240" y="153" font-size="11" fill="#c0392b">Thrust</text></g><g><text x="465" y="58" font-size="13" font-weight="700" text-anchor="middle">Diagram 2</text><ellipse cx="465" cy="150" rx="28" ry="13" fill="#9c7a3c" stroke="#6b5226"/><line x1="465" y1="137" x2="465" y2="100" stroke="#2e8b57" stroke-width="3" marker-end="url(#aU)"/><text x="465" y="94" font-size="11" text-anchor="middle" fill="#2e8b57">Lift</text><line x1="465" y1="163" x2="465" y2="216" stroke="#9b5a18" stroke-width="3" marker-end="url(#aD)"/><text x="465" y="232" font-size="11" text-anchor="middle" fill="#9b5a18">Weight</text><line x1="437" y1="150" x2="392" y2="150" stroke="#1f6feb" stroke-width="3" marker-end="url(#aL)"/><text x="380" y="153" font-size="11" text-anchor="end" fill="#1f6feb">Drag</text><line x1="493" y1="150" x2="538" y2="150" stroke="#c0392b" stroke-width="3" marker-end="url(#aR)"/><text x="550" y="153" font-size="11" fill="#c0392b">Thrust</text></g><g><text x="155" y="300" font-size="13" font-weight="700" text-anchor="middle">Diagram 3</text><ellipse cx="155" cy="392" rx="28" ry="13" fill="#9c7a3c" stroke="#6b5226"/><line x1="155" y1="379" x2="155" y2="334" stroke="#2e8b57" stroke-width="3" marker-end="url(#aU)"/><text x="155" y="328" font-size="11" text-anchor="middle" fill="#2e8b57">Lift</text><line x1="155" y1="405" x2="155" y2="450" stroke="#9b5a18" stroke-width="3" marker-end="url(#aD)"/><text x="155" y="466" font-size="11" text-anchor="middle" fill="#9b5a18">Weight</text><line x1="127" y1="392" x2="82" y2="392" stroke="#1f6feb" stroke-width="3" marker-end="url(#aL)"/><text x="70" y="395" font-size="11" text-anchor="end" fill="#1f6feb">Drag</text><line x1="183" y1="392" x2="213" y2="392" stroke="#c0392b" stroke-width="3" marker-end="url(#aR)"/><text x="225" y="395" font-size="11" fill="#c0392b">Thrust</text></g><g><text x="465" y="300" font-size="13" font-weight="700" text-anchor="middle">Diagram 4</text><ellipse cx="465" cy="392" rx="28" ry="13" fill="#9c7a3c" stroke="#6b5226"/><line x1="465" y1="379" x2="465" y2="352" stroke="#2e8b57" stroke-width="3" marker-end="url(#aU)"/><text x="465" y="346" font-size="11" text-anchor="middle" fill="#2e8b57">Lift</text><line x1="465" y1="405" x2="465" y2="458" stroke="#9b5a18" stroke-width="3" marker-end="url(#aD)"/><text x="465" y="474" font-size="11" text-anchor="middle" fill="#9b5a18">Weight</text><line x1="437" y1="392" x2="392" y2="392" stroke="#1f6feb" stroke-width="3" marker-end="url(#aL)"/><text x="380" y="395" font-size="11" text-anchor="end" fill="#1f6feb">Drag</text><line x1="493" y1="392" x2="548" y2="392" stroke="#c0392b" stroke-width="3" marker-end="url(#aR)"/><text x="560" y="395" font-size="11" fill="#c0392b">Thrust</text></g></svg>',
          },
          caption: 'Four candidate force diagrams (Lift up, Weight down, Drag back, Thrust forward) with differing arrow lengths.',
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
        text: 'Use the graph to **calculate** the distance travelled by the bird while decelerating (between C and D).',
        marks: 2,
        ph: 'Distance = area under graph between C and D\nArea = ½ × base × height = ½ × (time CD) × (velocity at C)\n= ... km or m',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Wave Properties (10 marks) Criterion A
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
    stem: 'These animations show the two different types of wave moving along springs — a transverse wave and a longitudinal wave. Infrasound is a low frequency longitudinal wave that elephants, whales, rhinoceros and alligators use to communicate with each other. The frequency of infrasound waves is lower than 20 Hz. Infrasound waves can travel very long distances through air at a speed of 330 m s⁻¹.',
    artefact: {
      component: 'WaveSim',
      data: {
        title: 'A transverse wave',
        mode: 'wave',
        freq: 1.5,
        amplitude: 1.2,
        windowSeconds: 4,
        concept: 'Drag the frequency and amplitude sliders to see how wavelength, amplitude and period change.',
      },
      caption: 'A transverse wave on a spring. Adjust the sliders to explore wavelength, amplitude and period; a longitudinal wave (like infrasound) carries the same properties as compressions and rarefactions.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Label** the two diagrams shown above to identify each of the following wave properties. Drag each label to the correct position on the diagram:\n\n(i) wavelength\n(ii) amplitude\n(iii) compression\n(iv) rarefaction',
        marks: 2,
        widget: 'wave_label_drag_drop',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="320" fill="#ffffff"/><text x="14" y="22" font-size="12" font-weight="700" fill="#1f2d3a">Transverse wave</text><path d="M30,90 C70,40 110,40 150,90 C190,140 230,140 270,90 C310,40 350,40 390,90 C430,140 470,140 510,90 C550,40 590,40 600,70" fill="none" stroke="#0b7285" stroke-width="2.5"/><line x1="30" y1="90" x2="600" y2="90" stroke="#cbd5e1" stroke-dasharray="4 4"/><line x1="150" y1="40" x2="390" y2="40" stroke="#94a3ad" stroke-width="1"/><text x="270" y="34" font-size="11" text-anchor="middle" fill="#5b6b78">one wavelength (λ)</text><line x1="150" y1="44" x2="150" y2="86" stroke="#94a3ad" stroke-dasharray="2 2"/><line x1="390" y1="44" x2="390" y2="86" stroke="#94a3ad" stroke-dasharray="2 2"/><line x1="90" y1="90" x2="90" y2="65" stroke="#c0392b" stroke-width="1.5"/><text x="96" y="80" font-size="11" fill="#c0392b">amplitude</text><circle cx="90" cy="65" r="2.5" fill="#c0392b"/><text x="14" y="180" font-size="12" font-weight="700" fill="#1f2d3a">Longitudinal wave (sound)</text><g fill="#2c3e50"><rect x="40" y="210" width="3" height="60"/><rect x="58" y="210" width="3" height="60"/><rect x="70" y="210" width="3" height="60"/><rect x="80" y="210" width="3" height="60"/><rect x="98" y="210" width="3" height="60"/><rect x="124" y="210" width="3" height="60"/><rect x="150" y="210" width="3" height="60"/><rect x="160" y="210" width="3" height="60"/><rect x="170" y="210" width="3" height="60"/><rect x="196" y="210" width="3" height="60"/><rect x="224" y="210" width="3" height="60"/><rect x="250" y="210" width="3" height="60"/><rect x="260" y="210" width="3" height="60"/><rect x="270" y="210" width="3" height="60"/><rect x="296" y="210" width="3" height="60"/><rect x="322" y="210" width="3" height="60"/><rect x="348" y="210" width="3" height="60"/><rect x="358" y="210" width="3" height="60"/><rect x="368" y="210" width="3" height="60"/><rect x="394" y="210" width="3" height="60"/></g><text x="76" y="296" font-size="11" text-anchor="middle" fill="#c0392b">compression</text><line x1="76" y1="276" x2="76" y2="288" stroke="#c0392b"/><text x="210" y="296" font-size="11" text-anchor="middle" fill="#1f6feb">rarefaction</text><line x1="210" y1="276" x2="210" y2="288" stroke="#1f6feb"/></svg>',
          },
          caption: 'Top: a transverse wave (wavelength λ and amplitude marked). Bottom: a longitudinal sound wave showing compressions and rarefactions.',
        },
        ph: '(i) Wavelength: ...\n(ii) Amplitude: ...\n(iii) Compression: ...\n(iv) Rarefaction: ...',
      },
      {
        label: 'b',
        text: 'Sound waves can be represented on a computer. The display shows waves recorded from four different sources (A, B, C and D). The time axis shows 1 second total.\n\n**Calculate** the frequency of wave A.',
        marks: 1,
        artefact: {
          component: 'WaveSim',
          data: {
            title: 'Four sound waves recorded over 1 second (A, B, C, D)',
            mode: 'match',
            windowSeconds: 1,
            traces: [
              { label: 'A', cycles: 10, amplitude_cm: 1.4 },
              { label: 'B', cycles: 10, amplitude_cm: 0.9 },
              { label: 'C', cycles: 5, amplitude_cm: 1.2 },
              { label: 'D', cycles: 25, amplitude_cm: 1.0 },
            ],
            task: 'Count the number of complete cycles each wave completes in the 1-second window to find its frequency.',
          },
          caption: 'Waves A, B, C and D over a 1-second time window. Count the cycles to read each frequency (A = 10, B = 10, C = 5, D = 25 cycles per second).',
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
        ph: 'First find frequency of wave C from the display: f = ... Hz\nThen use v = fλ → λ = v/f = 330 / ... = ... m',
      },
      {
        label: 'e',
        text: 'Infrasound waves have a frequency of less than 20 Hz. Use your answers above to **identify** which wave (A, B, C or D) does **not** show infrasound.',
        marks: 1,
        ph: 'Wave ... does not show infrasound because its frequency is ... Hz, which is [above/below] 20 Hz.',
      },
      {
        label: 'f',
        text: 'Animals use infrasound as the waves travel long distances. The diagram shows elephants on opposite sides of a hill.\n\n**Explain** how the group of elephants on the other side of the hill can hear the elephant.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7d5a3c"/><stop offset="1" stop-color="#4f3a25"/></linearGradient></defs><rect width="600" height="300" fill="#fbf6ec"/><rect x="0" y="250" width="600" height="50" fill="#cdb892"/><path d="M170,250 Q300,40 430,250 Z" fill="url(#hill2)"/><text x="300" y="150" font-size="12" text-anchor="middle" fill="#fbf6ec">hill</text><g stroke="#0b7285" stroke-width="2" fill="none"><path d="M150,210 Q210,150 250,90"/><path d="M150,210 Q230,170 300,120"/><path d="M150,210 Q250,200 350,170"/></g><g stroke="#0b7285" stroke-width="2" fill="none"><path d="M300,90 Q360,140 430,200"/><path d="M310,115 Q380,150 450,205"/><path d="M325,150 Q400,175 460,215"/></g><text x="170" y="150" font-size="10" fill="#0b7285">long-λ infrasound</text><text x="360" y="120" font-size="10" fill="#0b7285">diffracts over hill</text><g><ellipse cx="110" cy="232" rx="34" ry="22" fill="#6b6b6b"/><circle cx="80" cy="222" r="13" fill="#6b6b6b"/><path d="M70,216 q-12,-6 -16,4 q10,2 16,2 Z" fill="#6b6b6b"/><text x="110" y="280" font-size="11" text-anchor="middle" fill="#3a3a3a">calling elephant</text></g><g><ellipse cx="500" cy="232" rx="30" ry="20" fill="#7a7a7a"/><circle cx="526" cy="223" r="12" fill="#7a7a7a"/><path d="M535,217 q12,-6 16,4 q-10,2 -16,2 Z" fill="#7a7a7a"/><text x="500" y="280" font-size="11" text-anchor="middle" fill="#3a3a3a">listening herd</text></g></svg>',
          },
          caption: 'A calling elephant on one side of a hill; long-wavelength infrasound diffracts (bends) over the hill to reach the herd on the far side.',
        },
        ph: 'The infrasound waves undergo...\nThis happens because the wavelength is...\nAs a result, the waves...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Refraction of Light (5 marks) Criterion A
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
    stem: 'A ray of light travels from one material to another. When light crosses a boundary between two transparent materials it changes speed and bends. The amount of bending depends on the refractive index (n) of each material. The table shows the refractive indices of common materials:\n\n| Material | Refractive index (n) |\n|----------|---------------------|\n| Air      | 1.00                |\n| Glass    | 1.50                |\n| Water    | 1.33                |',
    artefact: {
      component: 'OpticsSim',
      data: {
        title: 'Refraction at a boundary (Snell\'s law: n₁ sin θ₁ = n₂ sin θ₂)',
        mode: 'refraction',
        n1: 1.0,
        n2: 1.5,
        medium1: 'Air',
        medium2: 'Glass',
        incidenceAngle: 50,
      },
      caption: 'Drag the incident ray to change the angle of incidence. Going from air (n = 1.00) into glass (n = 1.50) the light slows down and bends toward the normal; the larger the refractive index, the greater the bending.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A ray of light is shown passing through three stacked transparent layers. Use the data and diagram to **identify** each of the materials the ray passes through. Drag each material to the correct layer.',
        marks: 2,
        widget: 'refraction_label_drag_drop',
        widgetItems: ['Air', 'Glass', 'Water'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ar3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="480" height="360" fill="#ffffff"/><rect x="40" y="40" width="360" height="90" fill="#eef6fb"/><rect x="40" y="130" width="360" height="100" fill="#cfd8df"/><rect x="40" y="230" width="360" height="90" fill="#cfe9f6"/><line x1="40" y1="130" x2="400" y2="130" stroke="#7b8a96" stroke-width="1"/><line x1="40" y1="230" x2="400" y2="230" stroke="#7b8a96" stroke-width="1"/><text x="50" y="60" font-size="12" fill="#5b6b78">Top layer</text><text x="50" y="185" font-size="12" fill="#3a4751">Middle layer</text><text x="50" y="280" font-size="12" fill="#2c5468">Bottom layer</text><line x1="220" y1="40" x2="220" y2="320" stroke="#94a3ad" stroke-width="1" stroke-dasharray="3 3"/><text x="226" y="52" font-size="9" fill="#94a3ad">normal</text><path d="M120,40 L220,130" stroke="#c0392b" stroke-width="2.5"/><path d="M220,130 L240,230" stroke="#c0392b" stroke-width="2.5"/><path d="M240,230 L320,320" stroke="#c0392b" stroke-width="2.5" marker-end="url(#ar3)"/><text x="150" y="40" font-size="10" fill="#c0392b">incoming ray</text></svg>',
          },
          caption: 'A light ray passing through three stacked transparent layers. The ray bends most (closest to the normal) in the layer with the highest refractive index, and least in air. Use the refractive-index table to identify each layer.',
        },
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
    stem: 'Most materials are electrically neutral; they contain equal numbers of charged particles. An animation shows that if a cloth is used to rub a plastic rod, the rod becomes positively charged.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="are" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1f6feb"/></marker></defs><rect width="600" height="280" fill="#ffffff"/><text x="300" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Rubbing a plastic rod with a cloth</text><rect x="80" y="120" width="300" height="26" rx="13" fill="#c98a3c" stroke="#8a5a1e"/><text x="230" y="112" font-size="11" text-anchor="middle" fill="#8a5a1e">plastic rod</text><g font-size="13" font-weight="700" fill="#c0392b"><text x="120" y="139">+</text><text x="160" y="139">+</text><text x="200" y="139">+</text><text x="240" y="139">+</text><text x="280" y="139">+</text><text x="320" y="139">+</text></g><path d="M400,90 q40,-20 70,10 q20,30 -10,55 q-30,20 -55,-5 q-25,-25 -5,-60 Z" fill="#dfe7ec" stroke="#8a99a6"/><text x="445" y="170" font-size="11" text-anchor="middle" fill="#5b6b78">cloth</text><g font-size="13" font-weight="700" fill="#1f6feb"><text x="420" y="120">−</text><text x="445" y="120">−</text><text x="430" y="140">−</text></g><g stroke="#1f6feb" stroke-width="1.8" fill="none"><path d="M345,128 q30,-30 65,-18" marker-end="url(#are)"/><path d="M345,134 q35,-12 70,-2" marker-end="url(#are)"/></g><text x="375" y="100" font-size="10" fill="#1f6feb">electrons transferred rod → cloth</text><text x="300" y="240" font-size="11" text-anchor="middle" fill="#5b6b78">The rod loses electrons, so it is left with an overall positive charge.</text></svg>',
      },
      caption: 'When the cloth rubs the rod, negatively charged electrons move from the rod to the cloth. The rod loses electrons and becomes positively charged; the cloth gains electrons and becomes negatively charged.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** an appropriate charge for each particle below.',
        marks: 1,
        widget: 'inline_dropdown_select',
        widgetItems: ['Electron', 'Proton', 'Neutron'],
        widgetOptions: ['+1', '0', '-1'],
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Sub-atomic particle', 'Relative charge'],
            rows: [['Proton', '+1'], ['Neutron', '0'], ['Electron', '−1']],
          },
          caption: 'The three sub-atomic particles. Match each particle to its relative charge.',
        },
        ph: 'Electron: ...\nProton: ...\nNeutron: ...',
      },
      {
        label: 'b',
        text: 'Use the animation to **explain** the process by which the rod becomes positively charged when rubbed with a cloth.',
        marks: 3,
        ph: 'When the cloth rubs the rod, ... are transferred...\nThe rod loses...\nThis makes the rod positively charged because...',
      },
      {
        label: 'c',
        text: 'Harry is a cat. When Harry walks around, he becomes electrically charged. Small polystyrene pellets on the floor are attracted to Harry\'s fur. The polystyrene pellets are initially uncharged.\n\nUsing the concept of induction, **suggest** why the polystyrene pellets stick to Harry.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Charging an uncharged pellet by induction</text><ellipse cx="140" cy="150" rx="78" ry="50" fill="#9c7a3c" stroke="#6b5226"/><circle cx="92" cy="118" r="22" fill="#9c7a3c" stroke="#6b5226"/><path d="M78,100 q-10,-18 -2,-26 q10,10 12,24 Z" fill="#9c7a3c"/><path d="M104,98 q8,-18 18,-22 q-4,14 -10,26 Z" fill="#9c7a3c"/><text x="140" y="220" font-size="11" text-anchor="middle" fill="#6b5226">charged cat (negative fur)</text><g font-size="13" font-weight="700" fill="#1f6feb"><text x="190" y="120">−</text><text x="200" y="150">−</text><text x="190" y="180">−</text></g><g><circle cx="320" cy="150" r="34" fill="#f4f4f4" stroke="#b8b8b8"/><text x="320" y="210" font-size="11" text-anchor="middle" fill="#5b6b78">polystyrene pellet</text><text x="320" y="226" font-size="10" text-anchor="middle" fill="#5b6b78">(initially neutral)</text><g font-size="14" font-weight="700"><text x="294" y="156" fill="#c0392b">+</text><text x="300" y="135" fill="#c0392b">+</text><text x="300" y="178" fill="#c0392b">+</text><text x="338" y="156" fill="#1f6feb">−</text><text x="332" y="135" fill="#1f6feb">−</text><text x="332" y="178" fill="#1f6feb">−</text></g></g><path d="M250,150 L284,150" stroke="#2e8b57" stroke-width="2" stroke-dasharray="4 3"/><text x="262" y="142" font-size="10" fill="#2e8b57">attraction</text><text x="460" y="150" font-size="11" text-anchor="middle" fill="#5b6b78">Near side of pellet is</text><text x="460" y="166" font-size="11" text-anchor="middle" fill="#5b6b78">positive → attracted to cat</text></svg>',
          },
          caption: 'The charged cat repels electrons in the nearby neutral pellet, leaving the near side positive (induced charge). The opposite charges attract, so the pellet sticks to the cat.',
        },
        ph: 'Harry becomes charged because...\nThe pellets are initially uncharged, but...\nInduction causes...\nThe pellets are attracted because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Thermal Insulation Investigation (13 marks) Criterion B
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
    stem: 'Zaina carries ice cream home from the shops. On hot days, she finds that much of the ice cream has melted before she gets home. She lives 15 minutes away from the shops. Zaina decides to investigate a solution to this problem. In many countries, wrapping ice cream in thick paper is an environmentally friendly alternative to insulated bags.\n\nZaina uses standard blocks of ice, each with mass of 100 g, to model the melting of the ice cream. She decides to investigate how the number of sheets of paper wrapped around the block affects the mass of ice that has melted.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="ice5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dff3fb"/><stop offset="1" stop-color="#aadcef"/></linearGradient><marker id="arr5" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5b6b78"/></marker></defs><rect width="560" height="300" fill="#ffffff"/><text x="280" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Modelling melting: 100 g ice block wrapped in paper</text><rect x="120" y="90" width="120" height="90" rx="6" fill="#e7d6b8" stroke="#b89a5e"/><rect x="132" y="100" width="96" height="70" rx="4" fill="#efe2c6" stroke="#cbb178"/><rect x="146" y="112" width="68" height="46" rx="4" fill="url(#ice5)" stroke="#7fb9d4"/><text x="180" y="139" font-size="12" text-anchor="middle" fill="#2c6c86" font-weight="700">ice</text><text x="180" y="200" font-size="11" text-anchor="middle" fill="#8a6d2f">paper sheets (variable number)</text><path d="M180,200 L180,232" stroke="#5b6b78" stroke-width="1.5" marker-end="url(#arr5)"/><rect x="330" y="150" width="150" height="60" rx="6" fill="#2b2b2b"/><rect x="346" y="162" width="118" height="34" rx="3" fill="#1e2a1e"/><text x="405" y="185" font-size="16" fill="#3ad36a" text-anchor="middle" font-family="monospace">100.0 g</text><text x="405" y="226" font-size="11" text-anchor="middle" fill="#5b6b78">balance measures mass</text><text x="405" y="124" font-size="11" text-anchor="middle" fill="#5b6b78">melted water is poured off</text><text x="405" y="140" font-size="11" text-anchor="middle" fill="#5b6b78">then the block is re-weighed</text></svg>',
      },
      caption: 'Apparatus to model melting: a 100 g ice block is wrapped in a chosen number of paper sheets, left for a fixed time, and the mass of ice melted is found by re-weighing on a balance.',
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
        text: 'Other than ice and paper, **suggest** and **justify** one additional piece of equipment that Zaina will need to perform this experiment.',
        marks: 2,
        ph: 'Equipment: ...\nJustification: ...',
      },
      {
        label: 'c',
        text: '**Suggest** and **justify** a hypothesis for this experiment.',
        marks: 2,
        ph: 'Hypothesis: As the number of sheets of paper increases, the mass of ice melted will...\nJustification: This is because...',
      },
      {
        label: 'd',
        text: '**State** one variable that Zaina needs to control. **Describe** how and why this variable should be controlled.',
        marks: 3,
        ph: 'Variable: ...\nHow it should be controlled: ...\nWhy it should be controlled: ...',
      },
      {
        label: 'e',
        text: '**Explain** what results Zaina needs to collect to ensure that she has sufficient relevant data.',
        marks: 3,
        ph: 'Zaina should measure...\nShe should test at least ... different values of...\nShe should repeat each measurement ... times because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Coffee Cup Cooling Investigation (9 marks) Criterion C
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Coffee Cup Cooling Investigation',
    marks: 9,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['conduction', 'specific heat capacity', 'thermal equilibrium'], level: 'proficient' },
    stem: 'Another student, Gareth, finds that his cup of coffee cools down too quickly when taking it home from his local coffee shop. He wonders if the thin cardboard cup is the reason for the coffee cooling down too quickly.\n\nGareth formulates the hypothesis: "The thicker the coffee cup, the longer the coffee will take to cool down because the heat will take longer to transfer through the thicker material of the cup."\n\nHe finds cups of different thicknesses in his kitchen. He fills each cup with coffee to the same level and times how long it takes for the coffee to cool down from 75 °C to 50 °C in each cup.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Thickness of coffee cup / mm', 'Time taken to cool from 75 °C to 50 °C / min'],
        rows: [['1', '18'], ['2', '25'], ['3', '8'], ['3', '16'], ['4', '10']],
      },
      caption: 'Gareth\'s results. Notice the data is not a clear trend — the two cups of thickness 3 mm give very different times, and the thickest cup (4 mm) cools faster than the 2 mm cup.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** and **justify** whether the results of Gareth\'s investigation support his hypothesis.',
        marks: 1,
        ph: 'The results [do / do not] support the hypothesis because...',
      },
      {
        label: 'b',
        text: '**Identify** four weaknesses in Gareth\'s method. For each of the weaknesses, **explain** how his investigation was affected. Use scientific knowledge and understanding in your answer.',
        marks: 8,
        ph: 'Weakness 1: ...\nHow this affected the investigation: ...\n\nWeakness 2: ...\nHow this affected the investigation: ...\n\nWeakness 3: ...\nHow this affected the investigation: ...\n\nWeakness 4: ...\nHow this affected the investigation: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Radiation Investigation (21 marks) Criterion B
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
    stem: 'Developments in the understanding of atomic physics have led to many useful applications in industry, medicine and technology. Through understanding patterns in the properties of alpha (α), beta (β) and gamma (γ) radiation, scientists have developed ways in which the specific properties may be used.\n\nOne useful property is the difference in the penetration of the three types of radiation. The diagram shows the penetration of alpha, beta and gamma radiation through paper, aluminium and lead.\n\nThe amount of beta radiation absorbed depends on the thickness of the materials. This property of beta radiation is used to monitor the thickness of aluminium foil produced in an aluminium factory — a sensor adjusts rollers based on data from the detector.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="320" fill="#ffffff"/><text x="310" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Penetration of α, β and γ radiation</text><circle cx="40" cy="160" r="14" fill="#444"/><text x="40" y="195" font-size="10" text-anchor="middle" fill="#444">source</text><rect x="200" y="50" width="16" height="220" fill="#f0e2c0" stroke="#c9b27a"/><text x="208" y="288" font-size="11" text-anchor="middle" fill="#8a6d2f">paper</text><rect x="350" y="50" width="26" height="220" fill="#c7ccd1" stroke="#8a99a6"/><text x="363" y="288" font-size="11" text-anchor="middle" fill="#5b6b78">aluminium</text><rect x="500" y="50" width="46" height="220" fill="#6b6f75" stroke="#3d4045"/><text x="523" y="288" font-size="11" text-anchor="middle" fill="#3d4045">lead</text><line x1="54" y1="100" x2="208" y2="100" stroke="#c0392b" stroke-width="3"/><circle cx="210" cy="100" r="4" fill="#c0392b"/><text x="120" y="92" font-size="11" fill="#c0392b" font-weight="700">α (alpha) — stopped by paper</text><line x1="54" y1="160" x2="363" y2="160" stroke="#1f6feb" stroke-width="3"/><circle cx="365" cy="160" r="4" fill="#1f6feb"/><text x="150" y="152" font-size="11" fill="#1f6feb" font-weight="700">β (beta) — stopped by aluminium</text><line x1="54" y1="220" x2="546" y2="220" stroke="#2e8b57" stroke-width="3"/><text x="170" y="240" font-size="11" fill="#2e8b57" font-weight="700">γ (gamma) — only reduced by thick lead</text></svg>',
      },
      caption: 'Alpha radiation is stopped by paper, beta radiation by a few millimetres of aluminium, and gamma radiation is only reduced by thick lead. Beta radiation is partly absorbed by aluminium, so the amount getting through depends on the foil thickness.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Your task is to design an investigation to determine how the thickness of aluminium foil affects the amount of beta radiation absorbed.\n\n**State** the independent and dependent variables in your investigation.',
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
        text: '**Write** a hypothesis for this investigation that describes the expected relationship between the thickness of aluminium and the intensity of beta radiation detected.',
        marks: 2,
        ph: 'As the thickness of aluminium increases, the beta radiation detected will ... because ...',
      },
      {
        label: 'd',
        text: '**Describe** in detail how you would carry out this investigation to collect valid and reliable data. In your answer include:\n• the range and number of IV values tested\n• how and how many times measurements are repeated\n• what measurement is taken with no aluminium present\n• how aluminium sheets are added\n• one control variable and how it is kept constant\n• how the same source is used throughout',
        marks: 6,
        ph: 'Range of IV values: ...\nRepeat each measurement: ... times\nBaseline (no aluminium): ...\nAluminium added: ...\nControl variable: ...\nSame source: ...',
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
        text: 'The student then places an alpha source in the same position and repeats the experiment with the aluminium sheets.\n\n**Describe** what the student would observe with the alpha source compared to the beta source, and explain why the observations differ.',
        marks: 2,
        ph: 'With the alpha source, the count rate would...\nThis differs from beta because alpha particles...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Radioactive Decay & Half-Life (12 marks) Criterion C
  // (Fukushima / Caesium-137 context)
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
    stem: 'A simulation shows the radioactive decay of strontium-90. In the simulation, the percentage of the original nucleus remaining can be recorded at different times. Some of the data is also shown on a graph of caesium-137 decay (% of original nucleus remaining vs. time in years). The Fukushima Daiichi nuclear disaster released several radioactive isotopes into the environment, including caesium-134 and caesium-137.',
    artefact: {
      component: 'DecaySim',
      data: {
        title: 'Radioactive decay of caesium-137',
        isotope: 'Cs-137',
        daughter: 'Ba-137',
        decayMode: 'β',
        halfLife: 30,
        units: 'years',
        initialCount: 100,
        axisMax: 120,
        xAxis: 'Time / years',
        yAxis: '% of original nuclei remaining',
      },
      caption: 'Caesium-137 decays with a half-life of 30 years (100% → 50% at 30 yr → 25% at 60 yr → 12.5% at 90 yr). Drag the time marker to read the percentage remaining and find the half-life.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A simulation shows the radioactive decay of strontium-90. You should **identify** six times at which you would record data from the simulation. For each time, record the percentage of the original nucleus remaining from three separate trial runs and **calculate** the mean average.\n\nPresent your results in a table with columns: Time (yrs) | Trial 1 | Trial 2 | Trial 3 | Average.\n\nGive your average values to an appropriate number of significant figures.',
        marks: 6,
        artefact: {
          component: 'DecaySim',
          data: {
            title: 'Strontium-90 decay simulation',
            isotope: 'Sr-90',
            daughter: 'Y-90',
            decayMode: 'β',
            halfLife: 29,
            units: 'years',
            initialCount: 100,
            axisMax: 120,
            xAxis: 'Time / years',
            yAxis: '% of original nuclei remaining',
          },
          caption: 'Run the simulation: pick six times, read the % of original nuclei remaining for three trial runs at each time, then average. Strontium-90 has a half-life of about 29 years.',
        },
        ph: 'Time (yrs) | Trial 1 | Trial 2 | Trial 3 | Average\n...        | ...     | ...     | ...     | ...\n(Choose 6 evenly spaced time values, record % remaining for each trial, calculate average)',
      },
      {
        label: 'b',
        text: 'Some of the data is also presented in the graphs. The image shows three options for how to draw a line through the data points.\n\n**Select** the most appropriate graph to present the radioactive decay data.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Point-to-point', 'Straight line', 'Smooth curve'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="220" fill="#ffffff"/><g><text x="100" y="22" font-size="12" font-weight="700" text-anchor="middle">Point-to-point</text><line x1="30" y1="40" x2="30" y2="180" stroke="#1f2d3a"/><line x1="30" y1="180" x2="190" y2="180" stroke="#1f2d3a"/><polyline points="40,60 70,95 100,120 130,140 160,155 185,165" fill="none" stroke="#0b7285" stroke-width="2"/><g fill="#0b7285"><circle cx="40" cy="60" r="3"/><circle cx="70" cy="95" r="3"/><circle cx="100" cy="120" r="3"/><circle cx="130" cy="140" r="3"/><circle cx="160" cy="155" r="3"/><circle cx="185" cy="165" r="3"/></g></g><g><text x="310" y="22" font-size="12" font-weight="700" text-anchor="middle">Straight line</text><line x1="240" y1="40" x2="240" y2="180" stroke="#1f2d3a"/><line x1="240" y1="180" x2="400" y2="180" stroke="#1f2d3a"/><line x1="250" y1="60" x2="395" y2="165" stroke="#0b7285" stroke-width="2"/><g fill="#0b7285"><circle cx="250" cy="60" r="3"/><circle cx="280" cy="95" r="3"/><circle cx="310" cy="120" r="3"/><circle cx="340" cy="140" r="3"/><circle cx="370" cy="155" r="3"/><circle cx="395" cy="165" r="3"/></g></g><g><text x="520" y="22" font-size="12" font-weight="700" text-anchor="middle">Smooth curve</text><line x1="450" y1="40" x2="450" y2="180" stroke="#1f2d3a"/><line x1="450" y1="180" x2="610" y2="180" stroke="#1f2d3a"/><path d="M460,60 Q500,120 540,150 Q575,168 605,172" fill="none" stroke="#0b7285" stroke-width="2"/><g fill="#0b7285"><circle cx="460" cy="60" r="3"/><circle cx="490" cy="95" r="3"/><circle cx="520" cy="120" r="3"/><circle cx="550" cy="140" r="3"/><circle cx="580" cy="155" r="3"/><circle cx="605" cy="165" r="3"/></g></g></svg>',
          },
          caption: 'Three ways of drawing a line through the same decay data points: joining each point (point-to-point), a single straight line, or a smooth best-fit curve.',
        },
        ph: 'Select the most appropriate line type',
      },
      {
        label: 'c',
        text: 'The half-life is characteristic of a particular isotope. The graph shows the decay of caesium-137.\n\nUsing the graph, **calculate** the average half-life for caesium-137. You should use **at least three** data points in your calculation.',
        marks: 3,
        ph: 'Reading 1: at t = ... years, % = 50 → first half-life = ... years\nReading 2: at t = ... years, % = 25 → second half-life = ...\nReading 3: at t = ... years, % = 12.5 → third half-life = ...\nAverage half-life = ... years',
      },
      {
        label: 'd',
        text: 'A different isotope of caesium, caesium-134, was also released. Caesium-134 has a half-life of two years.\n\nIf the Fukushima Daiichi disaster released **1 600 000** atoms of caesium-134 into the ocean, **calculate** how long it would take for this number to decrease to **100 000**.',
        marks: 2,
        ph: 'Number of half-lives needed: 1 600 000 → 800 000 → 400 000 → 200 000 → 100 000 = ... half-lives\nTotal time = ... × 2 years = ... years',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Power Stations & Electricity Transmission (16 marks) Criterion D
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
    stem: 'This question is about the generation and transmission of electricity. In many developed countries, electricity is generated in large power stations, far away from where the people who use the electricity live and work. The diagram shows the main components: power station → step-up transformer → high voltage wires → step-down transformer → homes. The energy sources that power the generators in large industrial countries are coal, gas and nuclear (fission) reactors, or a mix of these.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="arp" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="640" height="280" fill="#f5f9fb"/><rect x="0" y="230" width="640" height="50" fill="#cfe3cf"/><text x="320" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Generation and transmission of electricity</text><g><rect x="20" y="150" width="80" height="80" fill="#9aa3ab" stroke="#5b6b78"/><path d="M40,150 q10,-40 25,0 q5,-30 20,0 Z" fill="#dfe7ec" stroke="#aab4bc"/><text x="60" y="248" font-size="10" text-anchor="middle" fill="#3a4751">power station</text></g><g><rect x="140" y="175" width="44" height="55" fill="#e3a93c" stroke="#a8721a"/><text x="162" y="205" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">↑V</text><text x="162" y="248" font-size="9.5" text-anchor="middle" fill="#8a5a1e">step-up</text></g><g stroke="#5b6b78" stroke-width="2"><line x1="240" y1="90" x2="240" y2="230"/><line x1="380" y1="90" x2="380" y2="230"/><path d="M232,98 l16,0 l-8,-14 Z" fill="#5b6b78"/><path d="M372,98 l16,0 l-8,-14 Z" fill="#5b6b78"/></g><line x1="184" y1="120" x2="240" y2="100" stroke="#444" stroke-width="1.5"/><path d="M240,100 C300,80 320,80 380,100" fill="none" stroke="#444" stroke-width="1.5"/><path d="M240,112 C300,92 320,92 380,112" fill="none" stroke="#444" stroke-width="1.5"/><text x="310" y="74" font-size="11" text-anchor="middle" fill="#c0392b" font-weight="700">high-voltage wires</text><g><rect x="430" y="175" width="44" height="55" fill="#3a6ea5" stroke="#1f4a72"/><text x="452" y="205" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">↓V</text><text x="452" y="248" font-size="9.5" text-anchor="middle" fill="#1f4a72">step-down</text></g><line x1="380" y1="112" x2="430" y2="150" stroke="#444" stroke-width="1.5"/><g><rect x="540" y="180" width="50" height="50" fill="#c98a8a" stroke="#8a4a4a"/><path d="M535,180 l25,-22 l25,22 Z" fill="#8a4a4a"/><text x="565" y="248" font-size="10" text-anchor="middle" fill="#5b3a3a">homes</text></g><line x1="474" y1="200" x2="540" y2="205" stroke="#444" stroke-width="1.5" marker-end="url(#arp)"/></svg>',
      },
      caption: 'Power station → step-up transformer (raises voltage) → high-voltage transmission wires → step-down transformer (lowers voltage) → homes. High transmission voltage reduces energy lost in the cables.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** two reasons why people would not want a coal-fired power station in or near their city.',
        marks: 2,
        ph: 'Reason 1:\nReason 2:',
      },
      {
        label: 'b',
        text: 'Coal-fired power stations require large quantities of water. **State** one reason why so much water is needed in a coal-fired power station.',
        marks: 1,
        ph: 'Water is needed for...',
      },
      {
        label: 'c',
        text: 'A transformer converts current and voltage. If P = IV, when the secondary voltage **doubles**, **state** what happens to the secondary current.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="540" height="240" fill="#ffffff"/><text x="270" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">An ideal transformer (P = IV)</text><rect x="245" y="60" width="50" height="130" fill="#cdd6dd" stroke="#8a99a6"/><rect x="245" y="60" width="50" height="6" fill="#8a99a6"/><rect x="245" y="184" width="50" height="6" fill="#8a99a6"/><g stroke="#c0392b" stroke-width="3" fill="none"><path d="M220,80 a10,10 0 1 0 0,1"/><path d="M220,100 a10,10 0 1 0 0,1"/><path d="M220,120 a10,10 0 1 0 0,1"/><path d="M220,140 a10,10 0 1 0 0,1"/><path d="M220,160 a10,10 0 1 0 0,1"/></g><g stroke="#1f6feb" stroke-width="3" fill="none"><path d="M320,90 a10,10 0 1 1 0,1"/><path d="M320,115 a10,10 0 1 1 0,1"/><path d="M320,140 a10,10 0 1 1 0,1"/></g><text x="180" y="120" font-size="12" text-anchor="middle" fill="#c0392b" font-weight="700">primary</text><text x="180" y="138" font-size="11" text-anchor="middle" fill="#c0392b">Vₚ, Iₚ</text><text x="370" y="120" font-size="12" text-anchor="middle" fill="#1f6feb" font-weight="700">secondary</text><text x="370" y="138" font-size="11" text-anchor="middle" fill="#1f6feb">Vₛ, Iₛ</text><text x="270" y="216" font-size="11" text-anchor="middle" fill="#5b6b78">For an ideal transformer the power in equals the power out: Vₚ Iₚ = Vₛ Iₛ</text></svg>',
          },
          caption: 'An ideal transformer conserves power: Vₚ Iₚ = Vₛ Iₛ. If the secondary voltage rises while power stays constant, the secondary current must fall.',
        },
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
        text: 'Coal burns to release energy. The combustion of coal also releases three gases: water vapour (H₂O), carbon dioxide (CO₂) and sulfur dioxide (SO₂).\n\n**Explain** the environmental impact of each of these gases.',
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
  // QUESTION 10 — Solar Power & Traffic Management (16 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Solar Power & Traffic Management',
    marks: 16,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'work-energy', topics: ['energy sources (renewable vs non-renewable)', 'electrical power', 'energy efficiency'], level: 'advanced' },
    stem: 'The animation shows a sustainable solution to traffic management in an African city. Load shedding results in the electric power supplied to different parts of a city being cut off at different times. When load shedding occurs, traffic lights lose power and stop working. The animation shows a solar panel positioned to capture the energy of the sun, connected to a battery station. The stored energy in the battery can supply the traffic lights with electricity even when load shedding occurs.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sun10" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient><marker id="ar10" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2e8b57"/></marker></defs><rect width="640" height="300" fill="#f4faf4"/><rect x="0" y="250" width="640" height="50" fill="#cfe3cf"/><text x="320" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Solar-powered backup for traffic lights</text><circle cx="70" cy="70" r="26" fill="url(#sun10)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="105" y1="70" x2="150" y2="95"/><line x1="103" y1="82" x2="148" y2="107"/></g><g transform="translate(150,95) rotate(-18)"><rect x="0" y="0" width="120" height="70" fill="#2b3a67" stroke="#0b1f3a"/><g stroke="#5b76d6" stroke-width="1"><line x1="30" y1="0" x2="30" y2="70"/><line x1="60" y1="0" x2="60" y2="70"/><line x1="90" y1="0" x2="90" y2="70"/><line x1="0" y1="35" x2="120" y2="35"/></g></g><text x="215" y="190" font-size="11" text-anchor="middle" fill="#2b3a67">solar panel</text><line x1="270" y1="150" x2="330" y2="180" stroke="#2e8b57" stroke-width="2.5" marker-end="url(#ar10)"/><g><rect x="335" y="160" width="70" height="80" rx="6" fill="#4a4a4a" stroke="#222"/><rect x="348" y="175" width="44" height="12" fill="#3ad36a"/><rect x="348" y="193" width="44" height="12" fill="#3ad36a"/><rect x="348" y="211" width="44" height="12" fill="#9aa3ab"/><text x="370" y="255" font-size="11" text-anchor="middle" fill="#3a4751">battery station</text></g><line x1="405" y1="200" x2="470" y2="200" stroke="#2e8b57" stroke-width="2.5" marker-end="url(#ar10)"/><g><rect x="490" y="120" width="34" height="100" rx="6" fill="#2c3e50"/><circle cx="507" cy="142" r="9" fill="#c0392b"/><circle cx="507" cy="168" r="9" fill="#e3a93c"/><circle cx="507" cy="194" r="9" fill="#3ad36a"/><rect x="503" y="220" width="8" height="40" fill="#5b6b78"/><text x="507" y="278" font-size="11" text-anchor="middle" fill="#3a4751">traffic light</text></g></svg>',
      },
      caption: 'A solar panel charges a battery station during the day; the stored energy keeps the traffic lights working even when grid load-shedding cuts the mains supply.',
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
        text: 'Using information from the animation and your wider MYP studies, **discuss** and **evaluate** the use of a small-scale solar electrical power supply to solve the problem identified in part (a).\n\nIn your answer you should consider:\n• why a constant source of electricity is important in your application\n• the advantage of using a small-scale power supply in this situation\n• the disadvantage of using a small-scale power supply in this situation\n• economic factors\n• social factors',
        marks: 15,
        ph: 'Why constant electricity matters for my application: ...\n\nAdvantage of small-scale solar supply: ...\n\nDisadvantage of small-scale solar supply: ...\n\nEconomic factors: ...\n\nSocial factors: ...',
      },
    ],
  },
]
