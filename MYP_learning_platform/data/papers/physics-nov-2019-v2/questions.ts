import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2019 · VARIANT 2  (isomorphic to physics-nov-2019)
// Same crit, command terms, marks (task+question+total=99), tags, task
// structure and widgets. Only the real-world context, numbers and artefacts
// change. All figures are data-driven artefacts (no figImages). Numbers
// recomputed throughout. Contexts differ from the source AND from variant 1.
//   Q1 Momentum:      man on a train      → curling stone on an ice rink (sport)
//   Q2 Power/charge:  smog-filter tower   → photocopier toner drum (everyday)
//   Q3 EM spectrum:   RFID cat            → metro travel card on a reader gate (everyday)
//   Q4 Crit B vars:   mirror images       → hinged dressing-table mirrors (home) [N = 360/θ − 1]
//   Q5 Crit C sound:  clap echo off wall  → echo off a canyon cliff (environmental)
//   Q6 Crit B design: mass on a spring    → mass on a spring (vertical oscillation)
//   Q7 Stopping dist: car on a road       → car braking on an icy winter road (transport)
//   Q8 Crit D essay:  driverless cars     → autonomous robotaxis (transport)
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2019-v2',
  subject: 'Physics',
  session: 'November',
  year: 2019,
  totalMarks: 99,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─── Q1: Motion and Momentum (7 marks, Criterion A) ───
  // Curling stone sliding on ice. p = mv; Newton's 1st law; friction.
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
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="ice1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eaf6fb"/><stop offset="1" stop-color="#cfe6f0"/></linearGradient><radialGradient id="stone1" cx="0.4" cy="0.35"><stop offset="0" stop-color="#9aa0a6"/><stop offset="1" stop-color="#565b60"/></radialGradient><marker id="ah1b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="240" fill="#ffffff"/><rect x="0" y="150" width="600" height="90" fill="url(#ice1)"/><line x1="0" y1="150" x2="600" y2="150" stroke="#9cc4d6" stroke-width="2"/><text x="30" y="172" font-size="12" fill="#4a7c93">ice rink</text><ellipse cx="220" cy="170" rx="46" ry="20" fill="url(#stone1)" stroke="#3a3e42"/><rect x="208" y="138" width="24" height="20" rx="4" fill="#c0392b"/><text x="220" y="206" font-size="11" text-anchor="middle" fill="#3a3e42">curling stone</text><line x1="290" y1="150" x2="420" y2="150" stroke="#0b7285" stroke-width="2.5" marker-end="url(#ah1b)"/><text x="355" y="140" font-size="13" text-anchor="middle" fill="#0b7285">4 m s⁻¹</text></svg>',
      },
      caption: 'A curling stone slides across the ice at a steady 4 m s⁻¹.',
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
        text: 'A heavy granite curling stone and a light plastic practice puck are pushed across the ice at the same speed of 4 m s⁻¹. **State** why the curling stone has more momentum than the practice puck.',
        marks: 1,
        ph: 'Refer to mass: the curling stone has a greater mass than the practice puck.',
      },
      {
        label: 'c',
        text: 'A player gives the curling stone a push and then lets go of it. After the player\'s hand has left the stone, the stone keeps sliding forward across the ice. Use Newton\'s Laws to **explain** why the stone keeps moving forward after the hand has let go.',
        marks: 3,
        ph: 'Three steps: (1) the stone has forward momentum / is moving forward at 4 m s⁻¹; (2) a force is required to change an object\'s momentum; (3) almost no net force acts on the stone on smooth ice, so its velocity stays nearly the same (Newton\'s 1st law / inertia).',
      },
      {
        label: 'd',
        text: 'Eventually the curling stone slows down and stops, even though no one touches it. **Suggest** why the stone slows down and stops.',
        marks: 1,
        ph: 'Friction (between the stone and the ice) creates a backward force that slows the stone until it stops.',
      },
    ],
  },

  // ─── Q2: Photocopier toner drum / power / charging (7 marks, Criterion A) ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity & Circuits — Power and Charge',
    marks: 7,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'electricity-circuits', topics: ['electrical power', 'current', 'electrostatic attraction', 'ionization'], level: 'proficient' },
    stem: 'A photocopier uses static electricity to copy a page. A rotating drum is first given an even positive charge by a high-voltage charging wire. Light reflected from the white parts of the page removes the charge there, leaving a positively charged "image" of the dark text on the drum. Tiny grains of toner powder are given a negative charge and are attracted onto the positively charged image areas of the drum, before being pressed and heated onto the paper. Over time, leftover toner builds up on the drum and the copies become faint.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="drum2" cx="0.4" cy="0.4"><stop offset="0" stop-color="#cdd6dd"/><stop offset="1" stop-color="#7d8a94"/></radialGradient></defs><rect width="620" height="280" fill="#ffffff"/><circle cx="220" cy="140" r="90" fill="url(#drum2)" stroke="#5b6b78" stroke-width="2"/><text x="220" y="145" font-size="13" text-anchor="middle" fill="#3a4a57">drum (+)</text><g fill="#0b7285"><text x="160" y="64" font-size="14">+</text><text x="200" y="56" font-size="14">+</text><text x="240" y="58" font-size="14">+</text><text x="280" y="70" font-size="14">+</text></g><line x1="330" y1="80" x2="330" y2="200" stroke="#f08c00" stroke-width="2.5"/><text x="360" y="90" font-size="11" fill="#a8531a">charging wire</text><g fill="#a8531a"><circle cx="360" cy="150" r="4"/><circle cx="385" cy="135" r="4"/><circle cx="385" cy="165" r="4"/><circle cx="410" cy="145" r="4"/><circle cx="410" cy="175" r="4"/></g><text x="450" y="150" font-size="11" fill="#a8531a">toner grains (−)</text><rect x="120" y="245" width="380" height="18" fill="#eef3f6" stroke="#9aa9b5"/><text x="310" y="259" font-size="11" text-anchor="middle" fill="#5b6b78">paper</text></svg>',
      },
      caption: 'Negatively charged toner grains are attracted onto the positively charged image areas of the photocopier drum.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The photocopier is estimated to require 1380 W of electrical power and is connected to an electrical supply of 230 V. **Calculate** the current flowing through the photocopier. You should give the appropriate unit with your answer.',
        marks: 3,
        ph: 'Use P = IV → I = P/V = 1380/230 = 6 A. Show the formula, substitution and unit.',
      },
      {
        label: 'b',
        text: '**Outline** why the toner grains collect on the positively charged areas of the drum.',
        marks: 2,
        ph: 'Toner grains are negatively charged. Opposite charges attract, so the negative toner is attracted to the positively charged image areas of the drum.',
      },
      {
        label: 'c',
        text: 'Over time, leftover toner builds up on the drum and copies become faint. Using your understanding of electrical fields, **suggest** why the drum needs to be regularly cleaned.',
        marks: 2,
        ph: 'Negative toner left on the positive drum adds negative charge, reducing the net positive charge on the image areas. This weakens the electric field/attractive force, so less new toner is attracted and the copies become faint.',
      },
    ],
  },

  // ─── Q3: EM spectrum / metro travel card / induction (10 marks, Criterion A) ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'EM Spectrum & Magnetism — RFID',
    marks: 10,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'em-spectrum', topics: ['electromagnetic spectrum', 'radio waves', 'induction', 'RFID'], level: 'proficient' },
    stem: 'Radio waves form a section of the electromagnetic spectrum. A metro travel card lets passengers pass through a ticket gate by holding the card against a reader. The card contains a wire coil, a radio transmitter and a microchip that stores the travel balance. The card carries no battery — it is powered by the reader in the gate every time it is tapped.',
    artefact: {
      component: 'SpectrumSim',
      data: {
        bands: ['Radio', 'Microwave', 'Infrared', 'Visible', 'Ultraviolet', 'X-rays', 'Gamma'],
        mode: 'label',
        gaps: [
          { slot: 2, correct: 'Infrared' },
          { slot: 4, correct: 'Ultraviolet' },
        ],
        draggableTray: ['Infrared', 'Ultraviolet'],
      },
      caption: 'The electromagnetic spectrum in order of increasing frequency. Two sections are missing.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Radio waves form a section of the electromagnetic spectrum. **Drag and drop** the labels to classify the missing sections in the spectrum.\n\nSpectrum order (low to high frequency): Radio — Microwave — **?** — Visible — **?** — X-rays — Gamma ray\n\nDraggable labels: Infrared, Ultraviolet',
        marks: 1,
        ph: 'Fill the two gaps: Infrared (between Microwave and Visible) and Ultraviolet (between Visible and X-rays).',
      },
      {
        label: 'b',
        text: 'The card transmits information using radio waves. Infra-red waves can also be used to transmit information. **Suggest** one advantage of using radio waves instead of infra-red waves for a metro travel card.',
        marks: 1,
        ph: 'Any one: infra-red needs a clear line of sight and would be blocked by a wallet/bag; radio waves pass through the wallet and case; infra-red has higher energy.',
      },
      {
        label: 'c',
        text: 'The frequency of the radio waves used by the card is 13 560 000 Hz and their wavelength is 22.12 m. **Calculate** the speed of radio waves. Give your answer in scientific notation.',
        marks: 3,
        ph: 'v = fλ = 13 560 000 × 22.12 = 3.000 × 10⁸ m s⁻¹ ≈ 3.00 × 10⁸ m s⁻¹. Show formula, substitution, and scientific notation.',
      },
      {
        label: 'd',
        text: 'The coil in the gate reader carries an alternating current. Inside the card there is also a coil of wire. When the two coils act together they behave like a transformer, inducing a current in the card\'s coil.\n\n**Outline** one advantage of powering the card using induction rather than using a battery.',
        marks: 2,
        ph: 'Any one: no internal power source needed; a battery would lose power over time requiring replacement; an internal battery would be too thick to fit inside the thin card.',
      },
      {
        label: 'e',
        text: '**Explain**, using the principle of induction, how an alternating current flowing in the coil of the gate reader generates a current in the card.',
        marks: 3,
        ph: 'Three steps: (1) AC in reader coil produces an alternating magnetic field/flux; (2) this changing magnetic field passes across the gap to the card coil; (3) the changing magnetic field in the card induces an EMF/current in the card coil (electromagnetic induction).',
      },
    ],
  },

  // ─── Q4: Hinged dressing-table mirror investigation — Criterion B (12 marks) ───
  // A pair of hinged dressing-table / shop-fitting mirrors at angle θ → number of
  // virtual images. N = 360/θ − 1 (inverse / decreasing relationship). Variable
  // list rendered as a markdown table in the task text (answer in `ph`), as in
  // the source.
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Light & Optics — Mirror Investigation',
    marks: 12,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['reflection', 'virtual images', 'inverse proportion', 'experimental design'], level: 'proficient' },
    stem: 'A dressing table has two tall mirrors joined by a hinge along one edge, so that the angle between them can be opened or closed. When a small ornament is placed in front of the hinge, light reflects back and forth between the two mirrors and a row of virtual images of the ornament appears. The number of virtual images depends on the angle between the two mirrors. The only thing that is changed between situations is the angle between the mirrors.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="mir2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef4f7"/><stop offset="1" stop-color="#c4d4dc"/></linearGradient><marker id="kah2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="320" fill="#ffffff"/><text x="280" y="28" font-size="14" text-anchor="middle" fill="#33323a">Two hinged dressing-table mirrors at angle θ</text><g stroke="#8a7d63" stroke-width="3"><rect x="118" y="96" width="120" height="170" rx="4" fill="url(#mir2)" transform="rotate(-16 238 266)"/><rect x="322" y="96" width="120" height="170" rx="4" fill="url(#mir2)" transform="rotate(16 322 266)"/></g><circle cx="280" cy="262" r="6" fill="#5b4f3a"/><text x="280" y="288" font-size="11" text-anchor="middle" fill="#5b4f3a">hinge</text><path d="M236,224 A 60 60 0 0 1 324,224" fill="none" stroke="#a8531a" stroke-width="1.5"/><text x="280" y="214" font-size="12" text-anchor="middle" fill="#a8531a">θ</text><g><circle cx="280" cy="168" r="10" fill="#f08c00" stroke="#a8531a" stroke-width="1.2"/><text x="298" y="172" font-size="10" fill="#a8531a">object</text></g><g fill="#cdddE4" stroke="#90b0bd" stroke-width="0.8" opacity="0.85"><circle cx="214" cy="156" r="9"/><circle cx="346" cy="156" r="9"/><circle cx="178" cy="190" r="9"/><circle cx="382" cy="190" r="9"/><circle cx="160" cy="228" r="9"/><circle cx="400" cy="228" r="9"/></g><text x="160" y="252" font-size="10" fill="#7090a0">virtual images</text><text x="372" y="252" font-size="10" fill="#7090a0">repeat around the hinge</text></svg>',
      },
      caption: 'Two hinged dressing-table mirrors at angle θ produce a row of virtual images of the ornament.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A student wants to investigate the relationship between the number of virtual images and the angle between the two hinged mirrors. **State** the question that could be answered in this scientific investigation.',
        marks: 1,
        ph: 'Write a research question naming the IV (angle between the mirrors) and the DV (number of virtual images observed).',
      },
      {
        label: 'b',
        text: 'Below is a list of variables for this experiment. For each variable, **State** whether it is the independent variable, the dependent variable, or a control variable.\n\n| Variable | Independent / Dependent / Control |\n|----------|-----------------------------------|\n| The ornament used as the object | |\n| The position of the ornament | |\n| The number of images observed | |\n| The size of the mirrors used | |\n| The angle between the mirrors | |\n| The shape of the mirrors used | |',
        marks: 3,
        ph: 'IV = angle between the mirrors; DV = number of images observed; Controls = ornament used, position of the ornament, size of mirrors, shape of mirrors.',
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
            points: [[36, 9], [45, 7], [60, 5], [90, 3], [120, 2]],
            readouts: [{ x: 90, note: 'read the angle that produces 3 images' }],
            dataMaxX: 120,
          },
          caption: 'Number of virtual images versus angle between the mirrors (drag the crosshair to read values).',
        },
        ph: 'Read off the graph: 3 images are produced at an angle of approximately 90°.',
      },
      {
        label: 'e',
        text: 'The student makes the following prediction: "I predict that as the angle between the mirrors increases, the number of images decreases. The relationship between these variables will be inversely proportional."\n\nUsing data from the graph, **outline** if the graph supports this prediction. You should include calculations to support your answer.',
        marks: 3,
        ph: 'State: as angle increases, the number of images decreases ✓. Test inverse proportion: N × angle = constant? 9 × 36 = 324, 7 × 45 = 315, 5 × 60 = 300, 3 × 90 = 270, 2 × 120 = 240 — roughly similar but not exactly constant → the relationship is approximately inversely proportional but not perfectly so.',
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

  // ─── Q5: Speed of sound via echo off a canyon cliff (20 marks, Criterion C) ───
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Sound & Waves — Speed of Sound',
    marks: 20,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['speed of sound', 'echo', 'data processing', 'graph analysis', 'accuracy'], level: 'proficient' },
    stem: 'Sound reflects off surfaces, producing an echo. A group of hikers use this to investigate the speed of sound in air. A hiker stands a known distance from a tall canyon cliff and makes a loud sound by blowing a whistle. The time the sound takes to travel to the cliff and back as an echo can be used to calculate a value for the speed of sound.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="cliff5" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#caa97e"/><stop offset="1" stop-color="#9c7a4c"/></linearGradient><marker id="ah5b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f08c00"/></marker></defs><rect width="560" height="300" fill="#ffffff"/><rect x="0" y="250" width="560" height="50" fill="#cdbb96"/><path d="M430,40 L560,40 L560,250 L430,250 q-12,-50 0,-100 q-12,-55 0,-110 z" fill="url(#cliff5)" stroke="#6f5630" stroke-width="2"/><text x="500" y="150" font-size="13" text-anchor="middle" fill="#4a3a1e">cliff</text><circle cx="120" cy="150" r="12" fill="#f1c27d" stroke="#c98a3c"/><rect x="110" y="162" width="20" height="46" rx="6" fill="#3a6ea5"/><text x="120" y="226" font-size="11" text-anchor="middle" fill="#1f2d3a">hiker</text><line x1="138" y1="150" x2="412" y2="150" stroke="#f08c00" stroke-width="2.5" marker-end="url(#ah5b)"/><line x1="412" y1="172" x2="142" y2="172" stroke="#0b7285" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#ah5b)"/><text x="280" y="200" font-size="11" text-anchor="middle" fill="#0b7285">whistle out + echo back</text></svg>',
      },
      caption: 'A hiker blows a whistle and times the echo returning from the canyon cliff.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Two hikers work in a pair to collect data for this investigation. One hiker blows the whistle and the other measures the time between this sound and the echo returning. The result of this experiment is shown below:\n\n**Time for sound to travel = 0.85 s**\n\nThe hiker stands **140 m** from the cliff. **Calculate** a value for the speed of sound using this raw data. Give your answer to two significant figures.',
        marks: 3,
        ph: 'Total distance = 2 × 140 = 280 m. Speed = distance / time = 280 / 0.85 = 329 ≈ 330 m s⁻¹ (2 s.f.).',
      },
      {
        label: 'b',
        text: 'The hikers are concerned that their measurements may not be accurate so they decide to improve their method. **Describe and justify** two things that the hikers could do to improve the accuracy of their measurements while using the same basic method. Your improvements should not require any new equipment.',
        marks: 4,
        ph: 'Improvement 1: Repeat the time measurement several times at this distance and take a mean — reduces the effect of random errors in timing. Improvement 2: Stand further from the cliff — small timing errors become less significant relative to the longer total travel time.',
      },
      {
        label: 'c',
        text: 'Instead of using a stopwatch to time the interval between the whistle and the echo, a phone with a microphone and some sound-recording software can be used.\n\nUse the sound recording image to **calculate** the time taken for the sound to travel to a cliff 510 m away and back.',
        marks: 2,
        ph: 'From the recording, read off the time between the two sound peaks: t₁ and t₂. Time = t₂ − t₁ = 3.05 − 0.05 = 3.00 ± 0.06 s.',
      },
      {
        label: 'd',
        text: 'The hikers move to cliffs at different distances and write down four more sets of results. **Organise and present** the data in a table that shows the total distance travelled by the sound wave, and the time taken. Include the data from part (c) in your answer.',
        marks: 4,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Total distance / m', 'Time / s'],
            rows: [['280', ''], ['500', ''], ['760', ''], ['1020', ''], ['1320', '']],
          },
          caption: 'Distance travelled by the sound wave and the time taken (fill in the times).',
        },
        ph: 'Table with headers: Total distance (m) and Time (s). Results in order: 280m/0.85s, 500m/1.52s, ... include the ECF value from part (c) for the 1020m row. Units in column headings only. Values to 2 d.p.',
      },
      {
        label: 'e',
        text: 'Another group collects data using the same method. To process their data to find the speed of sound, they plot a graph of the total distance travelled by the sound wave against the time taken.\n\nUse data from the graph to **calculate** the speed of sound.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'time / s',
            yLabel: 'total distance / m',
            points: [[0.85, 280], [1.52, 500], [2.30, 600], [3.00, 1020], [4.00, 1320]],
            readouts: [{ x: 2.30, note: 'this point lies off the line of best fit' }],
            dataMaxX: 4.00,
          },
          caption: 'Total distance versus time for the sound wave (drag the crosshair to read values).',
        },
        ph: 'Read gradient from the line of best fit: speed = Δdistance / Δtime = gradient ≈ 325–345 m s⁻¹.',
      },
      {
        label: 'f',
        text: 'The group that collected this data set thought that a mistake had been made when measuring one of the times during the experiment. **Suggest** which measurement was performed incorrectly by referring to the graph. **State** whether the actual time should be higher or lower than the value recorded.',
        marks: 2,
        ph: 'Identify the anomalous data point (at 600 m / time ≈ 2.30 s). State: the time is too high — it should be lower to follow the trend and be closer to the line of best fit.',
      },
      {
        label: 'g',
        text: 'During any speed of sound investigation, it is important to measure temperature as sound travels at different speeds through air at different temperatures. For temperatures close to room temperature, the relationship is given by:\n\n**speed of sound in air = 331 + (0.6 × T)**\n\nwhere T is the temperature of the air in degrees Celsius and the speed of sound in air is measured in metres per second.\n\n**Explain** why the speed of sound is dependent on temperature. Your answer should contain reference to the motion of particles.',
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
    stem: 'A sound wave in air is created due to the oscillations of air particles. The air particles oscillate around a fixed point, known as the equilibrium position. An MYP student is interested in the factors that affect oscillations of air particles. She decides to conduct an investigation by modelling an oscillating particle using a hanging mass on a spring.\n\n**Research question:** If the mass on a spring increases, what happens to the time period of the oscillation?',
    artefact: {
      component: 'OscillatorSim',
      data: {
        type: 'spring',
        springConstant: 25,
        massSlider: { min: 100, max: 600, step: 50, unit: 'g' },
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

  // ─── Q7: Stopping distance on an icy winter road (10 marks, Criteria A & D) ───
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Interactions — Stopping Distance',
    marks: 10,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['stopping distance', 'kinematics', 'deceleration', 'friction', 'driver factors'], level: 'proficient' },
    stem: 'This task will consider some of the factors that affect the stopping distance of a car on a winter road. Stopping distance has important implications for road safety. The stopping distance of a car is made up of two components: the thinking distance (how far the car travels in the time taken for the driver to react) and the braking distance (how far the car travels while it is decelerating).',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah7b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="200" fill="#ffffff"/><rect x="0" y="120" width="600" height="50" fill="#bcd2dd"/><g stroke="#ffffff" stroke-width="3" stroke-dasharray="26 22"><line x1="0" y1="145" x2="600" y2="145"/></g><g fill="#e8f1f5"><circle cx="60" cy="135" r="3"/><circle cx="180" cy="158" r="3"/><circle cx="300" cy="140" r="3"/><circle cx="430" cy="160" r="3"/><circle cx="520" cy="134" r="3"/></g><rect x="70" y="92" width="90" height="28" rx="6" fill="#0b7285" stroke="#075663"/><rect x="150" y="98" width="34" height="22" rx="3" fill="#3a6ea5"/><circle cx="96" cy="124" r="11" fill="#222"/><circle cx="162" cy="124" r="11" fill="#222"/><line x1="200" y1="80" x2="310" y2="80" stroke="#0b7285" stroke-width="2.5" marker-end="url(#ah7b)"/><text x="255" y="70" font-size="13" text-anchor="middle" fill="#0b7285">25 m s⁻¹</text><line x1="200" y1="180" x2="540" y2="180" stroke="#5b6b78" stroke-width="1"/><line x1="200" y1="174" x2="200" y2="186" stroke="#5b6b78"/><line x1="540" y1="174" x2="540" y2="186" stroke="#5b6b78"/><text x="370" y="196" font-size="11" text-anchor="middle" fill="#5b6b78">stopping distance = thinking + braking</text></svg>',
      },
      caption: 'A car decelerates to rest on a snowy winter road. The stopping distance is the thinking distance plus the braking distance.',
    },
    tasks: [
      {
        label: 'a',
        text: 'In the diagram, the car decelerates from 25 m s⁻¹ to rest. If the icy road means the brakes are only able to decelerate the car at 2.5 m s⁻², **calculate** the new braking distance.',
        marks: 4,
        ph: 'Use v² = u² + 2as: 0 = 25² + 2×(−2.5)×s → 0 = 625 − 5s → s = 125 m. Show formula, substitution, and unit.',
      },
      {
        label: 'b',
        text: 'Factors related to the driver, the car or the environment can have an impact on the stopping distance for a given speed. For example, driving when tired, or distracted (driver factors), can significantly increase reaction times and subsequently increase the stopping distance of a car. **Classify** the following into environmental factors, driver factors, and car factors.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetOptions: ['environmental factor', 'driver factor', 'car factor'],
        widgetItems: ['Adjusting the radio', 'Falling snow', 'Worn brake discs', 'Under-inflated tyres', 'Driving while medicated', 'Wet leaves on the road'],
        ph: 'Adjusting radio → driver; Falling snow → environmental; Worn brake discs → car; Under-inflated tyres → car; Driving while medicated → driver; Wet leaves on road → environmental.',
      },
      {
        label: 'c',
        text: 'Driving while medicated and wet leaves on the road are two of the factors which affect stopping distance. For each factor, **select** which part of the stopping distance each factor affects and **outline** the impact of each factor on stopping distance using your scientific knowledge.',
        marks: 4,
        ph: 'Medication: increases reaction time → increases thinking distance → increases stopping distance. Wet leaves: less friction between tyres and road → less braking force → greater braking distance → increases stopping distance.',
      },
    ],
  },

  // ─── Q8: Autonomous robotaxis evaluation (14 marks, Criterion D) ───
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Forces & Transport — Driverless Cars',
    marks: 14,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['technology evaluation', 'road safety', 'societal implications', 'economic implications'], level: 'advanced' },
    stem: 'In recent years, a number of countries have focused on improving road safety. In these countries there has been a decrease in the number of road casualties. Further improvements in the way cars are engineered could allow us to continue this trend. One such innovation is the use of electronic systems which can reduce driver error.\n\nModernization in car technology aims to improve safety. Several cities are now trialling fleets of autonomous "robotaxis" — self-driving taxis with no human driver that passengers summon using an app. Supporters expect millions of such vehicles on city roads within the next decade.',
    tasks: [
      {
        label: 'a',
        text: 'Applying technical innovation to the modernization of road transport has led to the development of autonomous robotaxis. Robotaxis will change the way people travel around cities with significant consequences for both society and the economy. Whether or not all societies will be safer with robotaxis will affect how this technology is adopted. The economic effects on drivers and the multi-national companies who develop this technology are also considered in this question.\n\n**Discuss and evaluate** the consequences of cities replacing ordinary taxis with autonomous robotaxis. In your answer you should include:\n- an outline of the technological improvements with respect to robotaxis related to safety\n- the advantages and disadvantages for society\n- the economic implications of robotaxi technology\n- a concluding appraisal giving your opinion on the use of robotaxis',
        marks: 14,
        ph: 'Structure around four areas: (1) Technology safety: fewer accidents from human error, sensors/AI react faster, no tired/distracted driver; (2) Society: safer streets vs job losses for taxi drivers, mobility for elderly/disabled; (3) Economics: high development cost, cheaper fares, impact on taxi drivers and operators; (4) Concluding appraisal: your justified opinion linking all arguments.',
      },
    ],
  },

]
