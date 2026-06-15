import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2019 · VARIANT 1  (isomorphic to physics-nov-2019)
// Same crit, command terms, marks (task+question+total=99), tags, task
// structure and widgets. Only the real-world context, numbers and artefacts
// change. All figures are data-driven artefacts (no figImages). Numbers
// recomputed throughout.
//   Q1 Momentum:      man on a train      → loaded truck on a car ferry (transport)
//   Q2 Power/charge:  smog-filter tower   → electrostatic paint spraying (industrial)
//   Q3 EM spectrum:   RFID cat            → contactless payment card (everyday)
//   Q4 Crit B vars:   mirror images       → kaleidoscope hinged mirrors (toy) [N = 360/θ − 1]
//   Q5 Crit C sound:  clap echo off wall  → sonar depth sounding off seabed (transport)
//   Q6 Crit B design: mass on a spring    → mass on a spring (vertical oscillation)
//   Q7 Stopping dist: car on a road       → car braking on a motorway (transport)
//   Q8 Crit D essay:  driverless cars     → driverless delivery trucks (transport)
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2019-v1',
  subject: 'Physics',
  session: 'November',
  year: 2019,
  totalMarks: 99,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─── Q1: Motion and Momentum (7 marks, Criterion A) ───
  // Loaded truck on a moving car ferry. p = mv; Newton's 1st law; friction.
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Interactions — Momentum',
    marks: 7,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['momentum', 'Newton\'s laws', 'inertia', 'friction'], level: 'proficient' },
    stem: 'This question is about motion and momentum. To calculate an object\'s momentum, we use the equation p = mv.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="ferry1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfd9e0"/><stop offset="1" stop-color="#9aa9b5"/></linearGradient><linearGradient id="sea1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a7d3e6"/><stop offset="1" stop-color="#5fa3c4"/></linearGradient><marker id="ah1a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="240" fill="#ffffff"/><rect x="0" y="170" width="600" height="70" fill="url(#sea1)"/><path d="M0,178 q40,-10 80,0 t80,0 t80,0 t80,0 t80,0 t80,0 t80,0" fill="none" stroke="#3f7e98" stroke-width="1.5"/><path d="M70,170 L530,170 L500,120 L100,120 Z" fill="url(#ferry1)" stroke="#5b6b78" stroke-width="2"/><text x="300" y="160" font-size="12" text-anchor="middle" fill="#3a4a57">car ferry deck</text><g><rect x="180" y="78" width="120" height="34" rx="4" fill="#0b7285" stroke="#075663"/><rect x="300" y="86" width="36" height="26" rx="3" fill="#3a6ea5" stroke="#244a73"/><circle cx="208" cy="118" r="11" fill="#222"/><circle cx="270" cy="118" r="11" fill="#222"/><circle cx="318" cy="118" r="11" fill="#222"/><text x="240" y="100" font-size="11" text-anchor="middle" fill="#fff">truck</text></g><line x1="360" y1="60" x2="470" y2="60" stroke="#0b7285" stroke-width="2.5" marker-end="url(#ah1a)"/><text x="415" y="50" font-size="13" text-anchor="middle" fill="#0b7285">5 m s⁻¹</text></svg>',
      },
      caption: 'A loaded truck stands on the deck of a car ferry. Both move forward at 5 m s⁻¹.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the units in which each of the quantities is measured.\n\n| Symbol | Quantity | Unit |\n|--------|----------|------|\n| p | momentum | ? |\n| m | mass | ? |\n| v | velocity | ? |',
        marks: 2,
        ph: 'State the SI unit for each: momentum = Ns or kg m s⁻¹; mass = kg; velocity = m s⁻¹.',
      },
      {
        label: 'b',
        text: 'A truck is parked on the deck of a moving car ferry. The truck and the ferry are both travelling at a speed of 5 m s⁻¹. **State** why the ferry has more momentum than the truck.',
        marks: 1,
        ph: 'Refer to mass: the ferry has a greater mass than the truck.',
      },
      {
        label: 'c',
        text: 'Two passengers leave items on the smooth ferry deck; one places a metal can on its side and the other places a heavy crate. When the ferry suddenly slows to a stop at the dock, the can rolls forward. Use Newton\'s Laws to **explain** why the can moves forward after the ferry has stopped.',
        marks: 3,
        ph: 'Three steps: (1) the can has forward momentum / is moving forward at 5 m s⁻¹; (2) a force is required to change an object\'s momentum; (3) no net force acts on the can, so its velocity stays the same (Newton\'s 1st law / inertia).',
      },
      {
        label: 'd',
        text: 'The heavy crate does not move when the ferry comes to a complete stop. **Suggest** why the crate does not move.',
        marks: 1,
        ph: 'Friction (between crate and deck) creates a force that prevents the crate from moving.',
      },
    ],
  },

  // ─── Q2: Electrostatic paint spraying / power / ionization (7 marks, Criterion A) ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity & Circuits — Power and Charge',
    marks: 7,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'electricity-circuits', topics: ['electrical power', 'current', 'electrostatic attraction', 'ionization'], level: 'proficient' },
    stem: 'Car factories paint bodywork using electrostatic spray guns to give a smooth, even coat with very little wasted paint. As the paint leaves the spray gun, it passes a charged electrode that gives every paint droplet the same negative charge. The metal car body being painted is connected to earth and held at a positive potential. The negatively charged droplets are attracted onto the positive bodywork, even wrapping around to coat the back of edges and panels. Over time the spray nozzle and electrode become coated with dried paint.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="body2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8a657"/><stop offset="1" stop-color="#b07f2e"/></linearGradient></defs><rect width="620" height="280" fill="#ffffff"/><rect x="70" y="90" width="60" height="70" rx="6" fill="#444" stroke="#222"/><rect x="92" y="118" width="40" height="18" rx="3" fill="#666"/><path d="M132,127 l26,0" stroke="#888" stroke-width="6"/><text x="100" y="180" font-size="12" text-anchor="middle" fill="#333">spray gun</text><circle cx="172" cy="127" r="5" fill="#0b7285"/><text x="172" y="100" font-size="11" text-anchor="middle" fill="#0b7285">electrode (−)</text><g fill="#f08c00"><circle cx="210" cy="118" r="4"/><circle cx="245" cy="132" r="4"/><circle cx="280" cy="112" r="4"/><circle cx="300" cy="140" r="4"/><circle cx="330" cy="124" r="4"/><circle cx="360" cy="136" r="4"/><circle cx="225" cy="148" r="4"/><circle cx="290" cy="160" r="4"/></g><text x="270" y="190" font-size="11" text-anchor="middle" fill="#a8531a">charged paint droplets (−)</text><path d="M430,60 q70,67 0,134" fill="url(#body2)" stroke="#7a5418" stroke-width="2"/><text x="470" y="200" font-size="12" text-anchor="middle" fill="#5b4012">car body (+)</text><line x1="470" y1="194" x2="470" y2="230" stroke="#5b6b78" stroke-width="2"/><line x1="455" y1="230" x2="485" y2="230" stroke="#5b6b78" stroke-width="2"/><line x1="460" y1="236" x2="480" y2="236" stroke="#5b6b78" stroke-width="2"/><line x1="465" y1="242" x2="475" y2="242" stroke="#5b6b78" stroke-width="2"/><text x="505" y="234" font-size="10" fill="#5b6b78">earth</text></svg>',
      },
      caption: 'Negatively charged paint droplets are attracted onto the positively charged, earthed car body.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The spray system is estimated to require 990 W of electrical power and is connected to an electrical supply of 220 V. **Calculate** the current flowing through the system. You should give the appropriate unit with your answer.',
        marks: 3,
        ph: 'Use P = IV → I = P/V = 990/220 = 4.5 A. Show the formula, substitution and unit.',
      },
      {
        label: 'b',
        text: '**Outline** why the paint droplets collect on the positively charged car body.',
        marks: 2,
        ph: 'Paint droplets are negatively charged (from the electrode). Opposite charges attract, so negative droplets are attracted to the positive car body.',
      },
      {
        label: 'c',
        text: 'Over time, the spray nozzle and electrode become coated with dried paint and the coating becomes less even. Using your understanding of electrical fields, **suggest** why the electrode needs to be regularly cleaned.',
        marks: 2,
        ph: 'Dried negatively charged paint on the electrode adds charge / insulates it, reducing the effective charge on each droplet. This weakens the electric field/attractive force, so fewer droplets are attracted onto the body.',
      },
    ],
  },

  // ─── Q3: EM spectrum / contactless card / induction (10 marks, Criterion A) ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'EM Spectrum & Magnetism — RFID',
    marks: 10,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'em-spectrum', topics: ['electromagnetic spectrum', 'radio waves', 'induction', 'RFID'], level: 'proficient' },
    stem: 'Radio waves form a section of the electromagnetic spectrum. Contactless bank cards let people pay by holding a card close to a payment terminal. The card contains a thin wire coil, a radio transmitter and a microchip that stores account information. The card has no battery of its own — it is powered by the terminal as it is tapped.',
    artefact: {
      component: 'SpectrumSim',
      data: {
        bands: ['Radio', 'Microwave', 'Infrared', 'Visible', 'Ultraviolet', 'X-rays', 'Gamma'],
        mode: 'label',
        gaps: [
          { slot: 2, correct: 'Infrared' },
          { slot: 4, correct: 'Ultraviolet' },
        ],
        draggableTray: ['Ultraviolet', 'Infrared'],
      },
      caption: 'The electromagnetic spectrum in order of increasing frequency. Two sections are missing.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Radio waves form a section of the electromagnetic spectrum. **Drag and drop** the labels to classify the missing sections in the spectrum.\n\nSpectrum order (low to high frequency): Radio — Microwave — **?** — Visible — **?** — X-rays — Gamma ray\n\nDraggable labels: Ultraviolet, Infrared',
        marks: 1,
        ph: 'Fill the two gaps: Infrared (between Microwave and Visible) and Ultraviolet (between Visible and X-rays).',
      },
      {
        label: 'b',
        text: 'The card transmits information using radio waves. Infra-red waves can also be used to transmit information. **Suggest** one advantage of using radio waves instead of infra-red waves for a contactless card.',
        marks: 1,
        ph: 'Any one: infra-red needs a clear line of sight and would be blocked by a wallet/purse; radio waves pass through the card sleeve and clothing; infra-red has higher energy.',
      },
      {
        label: 'c',
        text: 'The frequency of the radio waves used by the card is 13 560 000 Hz and their wavelength is 22.1 m. **Calculate** the speed of radio waves. Give your answer in scientific notation.',
        marks: 3,
        ph: 'v = fλ = 13 560 000 × 22.1 = 2.997 × 10⁸ m s⁻¹ ≈ 3.00 × 10⁸ m s⁻¹. Show formula, substitution, and scientific notation.',
      },
      {
        label: 'd',
        text: 'The coil in the payment terminal carries an alternating current. Inside the card there is also a coil of wire. When the two coils act together they behave like a transformer, inducing a current in the card\'s coil.\n\n**Outline** one advantage of powering the card using induction rather than using a battery.',
        marks: 2,
        ph: 'Any one: no internal power source needed; a battery would lose power over time requiring replacement; an internal battery would be too thick to fit inside the card.',
      },
      {
        label: 'e',
        text: '**Explain**, using the principle of induction, how an alternating current flowing in the coil of the payment terminal generates a current in the card.',
        marks: 3,
        ph: 'Three steps: (1) AC in terminal coil produces an alternating magnetic field/flux; (2) this changing magnetic field passes across the gap to the card coil; (3) the changing magnetic field in the card induces an EMF/current in the card coil (electromagnetic induction).',
      },
    ],
  },

  // ─── Q4: Kaleidoscope hinged-mirror investigation — Criterion B (12 marks) ───
  // Two hinged mirrors of a kaleidoscope at angle θ → number of virtual images.
  // N = 360/θ − 1 (inverse / decreasing relationship). Variable list rendered as
  // a markdown table in the task text (answer in `ph`), as in the source.
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Light & Optics — Mirror Investigation',
    marks: 12,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['reflection', 'virtual images', 'inverse proportion', 'experimental design'], level: 'proficient' },
    stem: 'A child\'s kaleidoscope toy contains two long mirrors joined along one edge so they form an adjustable hinge, with a small coloured bead placed between them. Light from the bead reflects back and forth between the two mirrors, producing a ring of virtual images. The number of virtual images depends on the angle between the two mirrors. The only thing that is changed between situations is the angle between the mirrors.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="mir1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dff1f6"/><stop offset="1" stop-color="#a9cdd8"/></linearGradient><marker id="kah1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="320" fill="#ffffff"/><text x="280" y="28" font-size="14" text-anchor="middle" fill="#1f3d46">Kaleidoscope: two hinged mirrors at angle θ</text><g><polygon points="280,250 100,120 110,108 290,238" fill="url(#mir1)" stroke="#5b8aa0" stroke-width="2"/><polygon points="280,250 460,120 450,108 270,238" fill="url(#mir1)" stroke="#5b8aa0" stroke-width="2"/></g><circle cx="280" cy="250" r="6" fill="#3a4a57"/><text x="280" y="276" font-size="11" text-anchor="middle" fill="#3a4a57">hinge</text><path d="M232,205 A 70 70 0 0 1 328,205" fill="none" stroke="#a8531a" stroke-width="1.5"/><text x="280" y="196" font-size="12" text-anchor="middle" fill="#a8531a">θ</text><g fill="#f08c00" stroke="#a8531a" stroke-width="1"><polygon points="280,150 286,162 280,174 274,162"/></g><text x="298" y="158" font-size="10" fill="#a8531a">object</text><g fill="#bcd6df" stroke="#7ba9b8" stroke-width="0.8" opacity="0.85"><polygon points="206,138 211,148 206,158 201,148"/><polygon points="354,138 359,148 354,158 349,148"/><polygon points="170,170 175,179 170,188 165,179"/><polygon points="390,170 395,179 390,188 385,179"/><polygon points="150,206 155,215 150,224 145,215"/><polygon points="410,206 415,215 410,224 405,215"/></g><text x="150" y="244" font-size="10" fill="#5b8aa0">virtual images</text><text x="372" y="244" font-size="10" fill="#5b8aa0">repeat around the hinge</text></svg>',
      },
      caption: 'Two hinged kaleidoscope mirrors at angle θ produce a ring of virtual images of the bead.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A student wants to investigate the relationship between the number of virtual images and the angle between the two kaleidoscope mirrors. **State** the question that could be answered in this scientific investigation.',
        marks: 1,
        ph: 'Write a research question naming the IV (angle between the mirrors) and the DV (number of virtual images observed).',
      },
      {
        label: 'b',
        text: 'Below is a list of variables for this experiment. For each variable, **State** whether it is the independent variable, the dependent variable, or a control variable.\n\n| Variable | Independent / Dependent / Control |\n|----------|-----------------------------------|\n| The bead used as the object | |\n| The position of the bead | |\n| The number of images observed | |\n| The size of the mirrors used | |\n| The angle between the mirrors | |\n| The shape of the mirrors used | |',
        marks: 3,
        ph: 'IV = angle between the mirrors; DV = number of images observed; Controls = bead used, position of the bead, size of mirrors, shape of mirrors.',
      },
      {
        label: 'c',
        text: '**Identify** the measuring instrument that would be needed for this experiment.',
        marks: 1,
        ph: 'Protractor (to measure the angle between the two mirrors).',
      },
      {
        label: 'd',
        text: 'After collecting data, the student presents the results in the form of a graph of the number of images against the angle between the mirrors.\n\nUse the graph to **predict** the angle that would produce three images.',
        marks: 1,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'angle between mirrors / °',
            yLabel: 'number of virtual images',
            points: [[30, 11], [45, 7], [60, 5], [90, 3]],
            readouts: [{ x: 90, note: 'read the angle that produces 3 images' }],
            dataMaxX: 90,
          },
          caption: 'Number of virtual images versus angle between the mirrors (drag the crosshair to read values).',
        },
        ph: 'Read off the graph: 3 images are produced at an angle of approximately 90°.',
      },
      {
        label: 'e',
        text: 'The student makes the following prediction: "I predict that as the angle between the mirrors increases, the number of images decreases. The relationship between these variables will be inversely proportional."\n\nUsing data from the graph, **outline** if the graph supports this prediction. You should include calculations to support your answer.',
        marks: 3,
        ph: 'State: as angle increases, the number of images decreases ✓. Test inverse proportion: N × angle = constant? 11 × 30 = 330, 7 × 45 = 315, 5 × 60 = 300, 3 × 90 = 270 — roughly similar but not exactly constant → the relationship is approximately inversely proportional but not perfectly so.',
      },
      {
        label: 'f',
        text: 'A second student presents the same data as a bar chart, with one bar for each angle tested. **Justify** why a bar chart is a more appropriate way of presenting this data.',
        marks: 2,
        ph: 'Only integer values of the number of images are allowed (you cannot observe 3.5 images). The number of images is a discrete quantity, making a bar chart more appropriate than a continuous line graph.',
      },
      {
        label: 'g',
        text: 'A third student in the same class presents a table of results taken at angles of 20, 40, 60, 80, 100, 120, 140, 160 and 180°. **Outline** if the first student\'s data in part (d) or the third student\'s data above are better for exploring the relationship between the two variables.',
        marks: 1,
        ph: 'The third student\'s data is better because: there are more data points OR data are taken at regular intervals (every 20°), making it easier to identify the trend.',
      },
    ],
  },

  // ─── Q5: Speed of sound via sonar echo off seabed (20 marks, Criterion C) ───
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Sound & Waves — Speed of Sound',
    marks: 20,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['speed of sound', 'echo', 'data processing', 'graph analysis', 'accuracy'], level: 'proficient' },
    stem: 'Sound reflects off surfaces, producing an echo. A survey boat uses this to investigate the speed of sound in water. The boat sends a short pulse of sound straight down towards the seabed and measures the time for the echo to return. Because the sea depth at each survey point is already known from a chart, the echo time can be used to calculate a value for the speed of sound in water.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sea5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fcfe6"/><stop offset="1" stop-color="#356f8c"/></linearGradient><marker id="ah5a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f08c00"/></marker></defs><rect width="560" height="320" fill="#ffffff"/><rect x="0" y="70" width="560" height="210" fill="url(#sea5)"/><path d="M0,70 q30,-9 60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0" fill="none" stroke="#2c5468" stroke-width="1.5"/><rect x="200" y="44" width="120" height="30" rx="5" fill="#c0392b" stroke="#8a2820"/><text x="260" y="64" font-size="12" text-anchor="middle" fill="#fff">survey boat</text><rect x="246" y="74" width="28" height="12" fill="#444"/><path d="M0,280 q60,-26 120,-6 t120,4 t120,-8 t120,6 t80,0 l0,40 l-680,0 z" fill="#7a5b3a" stroke="#5b4329"/><text x="430" y="300" font-size="11" fill="#3f2f1c">seabed</text><line x1="260" y1="88" x2="260" y2="264" stroke="#f08c00" stroke-width="2.5" marker-end="url(#ah5a)"/><line x1="285" y1="264" x2="285" y2="90" stroke="#0b7285" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#ah5a)"/><text x="300" y="180" font-size="11" fill="#0b7285">pulse down + echo up</text></svg>',
      },
      caption: 'A survey boat sends a sound pulse to the seabed and times the returning echo.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The crew send a sound pulse straight down to the seabed and measure the time until the echo returns. The result of one survey point is shown below:\n\n**Time for the echo to return = 0.20 s**\n\nThe seabed at this point is **150 m** below the boat. **Calculate** a value for the speed of sound in water using this raw data. Give your answer to two significant figures.',
        marks: 3,
        ph: 'Total distance = 2 × 150 = 300 m. Speed = distance / time = 300 / 0.20 = 1500 m s⁻¹ (2 s.f.).',
      },
      {
        label: 'b',
        text: 'The crew are concerned that their measurements may not be accurate so they decide to improve their method. **Describe and justify** two things that the crew could do to improve the accuracy of their measurements while using the same basic method. Your improvements should not require any new equipment.',
        marks: 4,
        ph: 'Improvement 1: Repeat the time measurement several times at the same point and take a mean — reduces the effect of random errors in timing. Improvement 2: Take readings where the water is deeper — small timing errors become less significant relative to the longer total travel time.',
      },
      {
        label: 'c',
        text: 'Instead of a stopwatch, the boat\'s sonar system records the outgoing pulse and the returning echo on a screen as two peaks.\n\nUse the sonar recording to **calculate** the time taken for the sound to travel to a seabed 900 m below the boat and back.',
        marks: 2,
        ph: 'From the recording, read off the time of each peak: t₁ and t₂. Time = t₂ − t₁ = 1.30 − 0.10 = 1.20 ± 0.04 s.',
      },
      {
        label: 'd',
        text: 'The boat moves to points of different depth and records four more sets of results. **Organise and present** the data in a table that shows the total distance travelled by the sound pulse, and the time taken. Include the data from part (c) in your answer.',
        marks: 4,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Total distance / m', 'Time / s'],
            rows: [['300', ''], ['600', ''], ['1200', ''], ['1800', ''], ['2400', '']],
          },
          caption: 'Distance travelled by the sound pulse and the time taken (fill in the times).',
        },
        ph: 'Table with headers: Total distance (m) and Time (s). Results in order: 300m/0.20s, 600m/0.40s, ... include the ECF value from part (c) for the 1800m row. Units in column headings only. Values to 2 d.p.',
      },
      {
        label: 'e',
        text: 'Another crew collects data using the same method. To process their data to find the speed of sound, they plot a graph of the total distance travelled by the sound pulse against the time taken.\n\nUse data from the graph to **calculate** the speed of sound.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'time / s',
            yLabel: 'total distance / m',
            points: [[0.20, 300], [0.40, 600], [0.80, 1000], [1.20, 1800], [1.60, 2400]],
            readouts: [{ x: 0.80, note: 'this point lies off the line of best fit' }],
            dataMaxX: 1.60,
          },
          caption: 'Total distance versus time for the sound pulse (drag the crosshair to read values).',
        },
        ph: 'Read gradient from the line of best fit: speed = Δdistance / Δtime = gradient ≈ 1480–1520 m s⁻¹.',
      },
      {
        label: 'f',
        text: 'The crew that collected this data set thought that a mistake had been made when measuring one of the times during the survey. **Suggest** which measurement was performed incorrectly by referring to the graph. **State** whether the actual time should be higher or lower than the value recorded.',
        marks: 2,
        ph: 'Identify the anomalous data point (at 1000 m / time ≈ 0.80 s). State: the time is too low — it should be higher to follow the trend and be closer to the line of best fit.',
      },
      {
        label: 'g',
        text: 'During any speed of sound investigation, it is important to measure temperature as sound travels at different speeds through water at different temperatures. For temperatures close to those of the open sea, the relationship is given by:\n\n**speed of sound in water = 1450 + (4.0 × T)**\n\nwhere T is the temperature of the water in degrees Celsius and the speed of sound in water is measured in metres per second.\n\n**Explain** why the speed of sound is dependent on temperature. Your answer should contain reference to the motion of particles.',
        marks: 3,
        ph: 'Three steps: (1) sound travels faster at higher temperature; (2) higher temperature → particles have greater kinetic energy / move faster; (3) time between collisions is reduced OR faster rate of energy transfer between particles.',
      },
    ],
  },

  // ─── Q6: Spring oscillations — Criterion B (19 marks) ───
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Sound & Waves — Spring Oscillation Design',
    marks: 19,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['oscillation', 'experimental design', 'variables', 'hypothesis', 'period'], level: 'advanced' },
    stem: 'A sound wave in air is created due to the oscillations of air particles. The air particles oscillate around a fixed point, known as the equilibrium position. An MYP student is interested in the factors that affect oscillations of air particles. He decides to conduct an investigation by modelling an oscillating particle using a hanging mass on a spring.\n\n**Research question:** If the mass on a spring increases, what happens to the time period of the oscillation?',
    artefact: {
      component: 'OscillatorSim',
      data: {
        type: 'spring',
        springConstant: 20,
        massSlider: { min: 100, max: 500, step: 50, unit: 'g' },
        periodFormula: 'T = 2π√(m/k)',
      },
      caption: 'A mass hanging on a spring oscillates vertically about its equilibrium position.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Design** an experiment to investigate this research question. In your plan you must include:\n- the independent variable, the dependent variable and the justification of two control variables\n- a hypothesis that can be tested by this investigation\n- how you will collect sufficient data\n- a method detailing the procedure you will follow',
        marks: 14,
        ph: 'IV = mass on spring; DV = time period of oscillation; CV = spring constant/stiffness AND amplitude of oscillation (justify each).\nHypothesis: If mass increases, then time period increases, because greater mass has more inertia.\nData: at least 5 different masses, 3 trials each, calculate mean.\nMethod: attach mass to spring, displace and release, measure time for 10 oscillations, divide by 10 for period. Repeat.',
      },
      {
        label: 'b',
        text: '**Suggest** a second investigation into another factor that could affect the time period of a mass oscillating on a spring. For this new investigation you should include:\n- the independent and dependent variables\n- a research question\n- two relevant control variables',
        marks: 5,
        ph: 'Example: IV = spring constant/stiffness (use different springs); DV = time period; RQ = How does spring constant affect time period?; CVs = mass on spring AND amplitude of oscillation. (Do not repeat mass as IV)',
      },
    ],
  },

  // ─── Q7: Stopping distance on a motorway (10 marks, Criteria A & D) ───
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Interactions — Stopping Distance',
    marks: 10,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['stopping distance', 'kinematics', 'deceleration', 'friction', 'driver factors'], level: 'proficient' },
    stem: 'This task will consider some of the factors that affect the stopping distance of a car on a motorway. Stopping distance has important implications for road safety. The stopping distance of a car is made up of two components: the thinking distance (how far the car travels in the time taken for the driver to react) and the braking distance (how far the car travels while it is decelerating).',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah7" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="200" fill="#ffffff"/><rect x="0" y="120" width="600" height="50" fill="#5b6b78"/><g stroke="#f0e6c8" stroke-width="3" stroke-dasharray="26 22"><line x1="0" y1="145" x2="600" y2="145"/></g><rect x="70" y="92" width="90" height="28" rx="6" fill="#0b7285" stroke="#075663"/><rect x="150" y="98" width="34" height="22" rx="3" fill="#3a6ea5"/><circle cx="96" cy="124" r="11" fill="#222"/><circle cx="162" cy="124" r="11" fill="#222"/><line x1="200" y1="80" x2="320" y2="80" stroke="#0b7285" stroke-width="2.5" marker-end="url(#ah7)"/><text x="260" y="70" font-size="13" text-anchor="middle" fill="#0b7285">30 m s⁻¹</text><line x1="200" y1="180" x2="540" y2="180" stroke="#5b6b78" stroke-width="1"/><line x1="200" y1="174" x2="200" y2="186" stroke="#5b6b78"/><line x1="540" y1="174" x2="540" y2="186" stroke="#5b6b78"/><text x="370" y="196" font-size="11" text-anchor="middle" fill="#5b6b78">stopping distance = thinking + braking</text></svg>',
      },
      caption: 'A car decelerates to rest on a motorway. The stopping distance is the thinking distance plus the braking distance.',
    },
    tasks: [
      {
        label: 'a',
        text: 'In the diagram, the car decelerates from 30 m s⁻¹ to rest. If the brakes are worn and are only able to decelerate the car at 3 m s⁻², **calculate** the new braking distance.',
        marks: 4,
        ph: 'Use v² = u² + 2as: 0 = 30² + 2×(−3)×s → 0 = 900 − 6s → s = 150 m. Show formula, substitution, and unit.',
      },
      {
        label: 'b',
        text: 'Factors related to the driver, the car or the environment can have an impact on the stopping distance for a given speed. For example, driving when tired, or distracted (driver factors), can significantly increase reaction times and subsequently increase the stopping distance of a car. **Classify** the following into environmental factors, driver factors, and car factors.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetOptions: ['environmental factor', 'driver factor', 'car factor'],
        widgetItems: ['Texting while driving', 'Thick fog', 'Bald tyres', 'Failed brake pads', 'Feeling drowsy', 'Ice on the road'],
        ph: 'Texting → driver; Thick fog → environmental; Bald tyres → car; Failed brake pads → car; Feeling drowsy → driver; Ice on the road → environmental.',
      },
      {
        label: 'c',
        text: 'Feeling drowsy and ice on the road are two of the factors which affect stopping distance. For each factor, **select** which part of the stopping distance each factor affects and **outline** the impact of each factor on stopping distance using your scientific knowledge.',
        marks: 4,
        ph: 'Drowsy: increases reaction time → increases thinking distance → increases stopping distance. Ice on the road: less friction between tyres and road → less braking force → greater braking distance → increases stopping distance.',
      },
    ],
  },

  // ─── Q8: Driverless delivery trucks evaluation (14 marks, Criterion D) ───
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Forces & Transport — Driverless Cars',
    marks: 14,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['technology evaluation', 'road safety', 'societal implications', 'economic implications'], level: 'advanced' },
    stem: 'In recent years, a number of countries have focused on improving road safety. In these countries there has been a decrease in the number of road casualties. Further improvements in the way vehicles are engineered could allow us to continue this trend. One such innovation is the use of electronic systems which can reduce driver error.\n\nModernization in vehicle technology aims to improve safety. Logistics companies are now testing driverless delivery trucks that can carry goods along motorways without a human driver. By 2035, it is expected that a large share of freight could be moved by self-driving trucks.',
    tasks: [
      {
        label: 'a',
        text: 'Applying technical innovation to the modernization of road transport has led to the development of driverless delivery trucks. Driverless trucks will change the way goods are moved with significant consequences for both society and the economy. Whether or not all societies will be safer with driverless trucks will affect how this technology is adopted. The economic effects on drivers and the multi-national companies who develop this technology are also considered in this question.\n\n**Discuss and evaluate** the consequences of all freight being carried by driverless trucks. In your answer you should include:\n- an outline of the technological improvements with respect to driverless trucks related to safety\n- the advantages and disadvantages for society\n- the economic implications of driverless technology\n- a concluding appraisal giving your opinion on the use of driverless trucks',
        marks: 14,
        ph: 'Structure around four areas: (1) Technology safety: fewer accidents from human error, sensors/AI react faster, no driver fatigue on long routes; (2) Society: safer roads vs job losses for truck drivers, fewer delays for goods; (3) Economics: high development cost, reduced freight/transport costs, impact on haulage/driver jobs; (4) Concluding appraisal: your justified opinion linking all arguments.',
      },
    ],
  },

]
