import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-nov-2019',
  subject: 'Physics',
  session: 'November',
  year: 2019,
  totalMarks: 99,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─── Q1: Motion and Momentum (7 marks, Criterion A) ───
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
      component: 'DataTable',
      data: {
        headers: ['Symbol', 'Quantity', 'SI unit'],
        rows: [
          ['p', 'momentum', '?'],
          ['m', 'mass', '?'],
          ['v', 'velocity', '?'],
        ],
      },
      caption: 'The quantities in p = mv. Select the SI unit for each symbol in part (a).',
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
        text: 'A man is sitting on a moving train. The man and the train are both travelling at a speed of 5 m s⁻¹. **State** why the train has more momentum than the man.',
        marks: 1,
        ph: 'Refer to mass: the train has a greater mass than the man.',
      },
      {
        label: 'c',
        text: 'Two children are sitting on the same moving train; one child places a ball on the floor and the other places a large bag on the floor. When the train comes to a complete stop, the ball rolls forward. Use Newton\'s Laws to **explain** why the ball moves forward after the train has stopped.',
        marks: 3,
        ph: 'Three steps: (1) the ball has forward momentum / is moving forward at 5 m s⁻¹; (2) a force is required to change an object\'s momentum; (3) no net force acts on the ball, so its velocity stays the same (Newton\'s 1st law / inertia).',
      },
      {
        label: 'd',
        text: 'The child\'s large bag does not move when the train comes to a complete stop. **Suggest** why the bag does not move.',
        marks: 1,
        ph: 'Friction (between bag and floor) creates a force that prevents the bag from moving.',
      },
    ],
  },

  // ─── Q2: Smog filter / electricity / ionization (7 marks, Criterion A) ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity & Circuits — Power and Charge',
    marks: 7,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'electricity-circuits', topics: ['electrical power', 'current', 'electrostatic attraction', 'ionization'], level: 'proficient' },
    stem: 'Pollution in cities often causes smog which can be harmful when breathed in. Smog contains a mixture of polluting gases and dust particles. One solution recently installed in parks in the Netherlands and Beijing is a tower containing smog filters to clean the air in the park.\n\nThe smog filter uses ionization to remove particles from the air. Air containing dust particles without charge enters the filter and passes through an ionization chamber. Inside the ionization chamber, electrons pass between two electrodes where they collide with the dust particles in the air, causing the particles to become negatively charged. The air then moves past long, charged "collection" plates and the charged particles attach to the plates. The clean air moves out of the other side of the filter.',
    artefact: {
      component: 'FieldSim',
      data: {
        title: 'Smog-filter collection plates',
        field: 'E',
        plates: { top: 'Collection plate (+)', bottom: 'Electrode (−)' },
        particles: [{ name: 'charged dust', charge: -1 }],
        expected: 'The negatively charged dust particle is attracted to the positive collection plate, so it is removed from the air.',
      },
      caption: 'Inside the ionization chamber dust becomes negatively charged; press Play to fire it through the field and watch it stick to the positive collection plate.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The tower is estimated to require 1100 W of electrical power and is connected to an electrical supply of 220 V. **Calculate** the current flowing through the tower. You should give the appropriate unit with your answer.',
        marks: 3,
        ph: 'Use P = IV → I = P/V = 1100/220 = 5 A. Show the formula, substitution and unit.',
      },
      {
        label: 'b',
        text: '**Outline** why dust particles collect on the positive plate of the smog filter.',
        marks: 2,
        ph: 'Dust particles are negatively charged (from electrons in ionization chamber). Opposite charges attract, so negative dust is attracted to the positive collection plate.',
      },
      {
        label: 'c',
        text: 'Over time, the collection plates become less effective. Using your understanding of electrical fields, **suggest** why the plates need to be regularly cleaned.',
        marks: 2,
        ph: 'Negative dust on the positive plate adds negative charge, reducing the net positive charge. This weakens the electric field/attractive force, so fewer particles are collected.',
      },
    ],
  },

  // ─── Q3: EM spectrum / RFID / induction (10 marks, Criterion A) ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'EM Spectrum & Magnetism — RFID',
    marks: 10,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'em-spectrum', topics: ['electromagnetic spectrum', 'radio waves', 'induction', 'RFID'], level: 'proficient' },
    stem: 'Radio waves form a section of the electromagnetic spectrum. RFIDs (radio-frequency identification devices) are now used in many ways to help track products and store information. RFIDs can be placed under the skin of animals to share information regarding their owners. The RFID consists of a wire coil, a radio transmitter and a microchip to store information.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="260" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Structure of an RFID tag (≈ 11.5 mm long)</text><defs><linearGradient id="glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eaf3f7"/><stop offset="1" stop-color="#cfe0e8"/></linearGradient></defs><rect x="120" y="96" width="360" height="64" rx="32" fill="url(#glass)" stroke="#5b6b78" stroke-width="2"/><rect x="150" y="112" width="64" height="32" rx="4" fill="#2c3e50"/><text x="182" y="132" font-size="9" fill="#fff" text-anchor="middle">chip</text><g stroke="#0b7285" stroke-width="2" fill="none"><path d="M250 116 q10 -12 20 0 q10 12 20 0 q10 -12 20 0 q10 12 20 0 q10 -12 20 0 q10 12 20 0"/><path d="M250 140 q10 -12 20 0 q10 12 20 0 q10 -12 20 0 q10 12 20 0 q10 -12 20 0 q10 12 20 0"/></g><line x1="120" y1="80" x2="480" y2="80" stroke="#94a3ad" stroke-width="1"/><line x1="120" y1="74" x2="120" y2="86" stroke="#94a3ad" stroke-width="1"/><line x1="480" y1="74" x2="480" y2="86" stroke="#94a3ad" stroke-width="1"/><text x="300" y="70" font-size="11" fill="#64748b" text-anchor="middle">11.5 mm</text><text x="182" y="184" font-size="11" fill="#2c3e50" text-anchor="middle">microchip</text><text x="350" y="184" font-size="11" fill="#0b7285" text-anchor="middle">coil of wire + radio transmitter</text><text x="540" y="132" font-size="11" fill="#5b6b78" text-anchor="middle">glass case</text><line x1="480" y1="128" x2="505" y2="128" stroke="#5b6b78" stroke-width="1"/></svg>',
      },
      caption: 'The RFID tag holds a microchip, a coil of wire and a radio transmitter sealed inside a glass capsule about 11.5 mm long.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Radio waves form a section of the electromagnetic spectrum. **Drag and drop** the labels to classify the missing sections in the spectrum.\n\nSpectrum order (low to high frequency): Radio — Microwave — **?** — Visible — Ultraviolet — **?** — Gamma ray\n\nDraggable labels: X-rays, Infra-red, Radio',
        marks: 1,
        artefact: {
          component: 'SpectrumSim',
          data: {
            title: 'Classify the missing sections of the electromagnetic spectrum',
            mode: 'label',
            axis: 'frequency increases left → right',
            bands: ['Radio', 'Microwave', 'Infra-red', 'Visible', 'Ultraviolet', 'X-rays', 'Gamma ray'],
            fixedLabels: ['Radio', 'Microwave', 'Visible', 'Ultraviolet', 'Gamma ray'],
            gaps: [
              { slot: 'between Microwave and Visible', correct: 'Infra-red' },
              { slot: 'between Ultraviolet and Gamma ray', correct: 'X-rays' },
            ],
            draggableTray: ['X-rays', 'Infra-red', 'Radio'],
          },
          caption: 'Drag Infra-red and X-rays into the two empty bands (Radio is already placed).',
        },
        ph: 'Fill the two gaps: Infra-red (between Microwave and Visible) and X-rays (between Ultraviolet and Gamma ray). These are the two draggable labels needed (Radio is a distractor, already placed).',
      },
      {
        label: 'b',
        text: 'The RFID transmits information using radio waves. Infra-red waves can also be used to transmit information. **Suggest** one advantage of using radio waves instead of infra-red waves inside animals.',
        marks: 1,
        ph: 'Any one: infra-red does not pass through fur/tissue as well; infra-red could adversely affect health; radio waves travel further; infra-red has higher energy (more harmful).',
      },
      {
        label: 'c',
        text: 'The frequency of the radio waves is 134 500 Hz and their wavelength is 2238 m. **Calculate** the speed of radio waves. Give your answer in scientific notation.',
        marks: 3,
        ph: 'v = fλ = 134 500 × 2238 = 301 011 000 ≈ 3.01 × 10⁸ m s⁻¹ (i.e. close to the speed of light, 3.00 × 10⁸ m s⁻¹). Show formula, substitution, and scientific notation.',
      },
      {
        label: 'd',
        text: 'The wire coil in the scanner carries an alternating current. Inside the RFID there is also a coil of wire. When the two coils act together they behave like a transformer, inducing a current in the RFID coil.\n\n**Outline** one advantage of powering the RFID using induction rather than using a battery.',
        marks: 2,
        ph: 'Any one: no internal power source needed; a battery would lose power over time requiring replacement; an internal battery/power source would be too large to fit inside the RFID.',
      },
      {
        label: 'e',
        text: '**Explain**, using the principle of induction, how an alternating current flowing in the coil of the hand-held scanner generates a current in the RFID.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Induction between scanner coil and RFID coil</text><rect x="40" y="70" width="40" height="100" rx="6" fill="#3a6ea5" stroke="#264c73"/><g stroke="#fff" stroke-width="2"><line x1="40" y1="86" x2="80" y2="86"/><line x1="40" y1="102" x2="80" y2="102"/><line x1="40" y1="118" x2="80" y2="118"/><line x1="40" y1="134" x2="80" y2="134"/><line x1="40" y1="150" x2="80" y2="150"/></g><text x="60" y="190" font-size="11" text-anchor="middle" fill="#264c73">scanner coil</text><text x="60" y="204" font-size="10" text-anchor="middle" fill="#64748b">(AC supply)</text><g fill="none" stroke="#0b7285" stroke-width="2"><path d="M95 120 q40 -36 80 0 q-40 36 -80 0" opacity="0.85"/><path d="M120 120 q60 -54 120 0 q-60 54 -120 0" opacity="0.6"/><path d="M150 120 q80 -72 160 0 q-80 72 -160 0" opacity="0.4"/></g><text x="250" y="60" font-size="11" fill="#0b7285" text-anchor="middle">changing magnetic field</text><rect x="470" y="80" width="34" height="80" rx="6" fill="#e8772e" stroke="#a8531a"/><g stroke="#fff" stroke-width="2"><line x1="470" y1="94" x2="504" y2="94"/><line x1="470" y1="110" x2="504" y2="110"/><line x1="470" y1="126" x2="504" y2="126"/><line x1="470" y1="142" x2="504" y2="142"/></g><text x="487" y="180" font-size="11" text-anchor="middle" fill="#a8531a">RFID coil</text><text x="487" y="194" font-size="10" text-anchor="middle" fill="#64748b">(induced current)</text><ellipse cx="380" cy="120" rx="60" ry="80" fill="none" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="4 4"/><text x="380" y="214" font-size="10" text-anchor="middle" fill="#94a3ad">animal tissue</text></svg>',
          },
          caption: 'The alternating current in the scanner coil produces a changing magnetic field that passes through the tissue and induces a current in the RFID coil.',
        },
        ph: 'Three steps: (1) AC in scanner coil produces an alternating magnetic field/flux; (2) this changing magnetic field passes through the cat to the RFID coil; (3) the changing magnetic field in the RFID induces an EMF/current in the RFID coil (electromagnetic induction).',
      },
    ],
  },

  // ─── Q4: Mirrors / virtual images — Criteria B & C (12 marks) ───
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Light & Optics — Mirror Investigation',
    marks: 12,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['reflection', 'virtual images', 'inverse proportion', 'experimental design'], level: 'proficient' },
    stem: 'An object placed in front of a mirror produces an image due to the reflection of light waves from the surface of the mirror. When two mirrors are placed together in contact along one side, the number of images varies depending on the angle between the mirrors. In the picture shown here, there are seven virtual images. The only thing that has changed between these situations is the angle between the mirrors.',
    artefact: {
      component: 'OpticsSim',
      data: {
        title: 'Two mirrors at an angle θ — count the virtual images',
        mode: 'mirror',
        mirror: {
          kaleidoscope: true,
          angle: 60,
          min: 20,
          max: 180,
          step: 10,
          imagesFormula: 'N = 360/θ − 1',
          readoutTarget: 'drag the slider to find the angle that produces 3 images',
        },
      },
      caption: 'Drag the angle slider between the two hinged mirrors: as the angle θ decreases the number of virtual images N rises (N = 360/θ − 1). Use it to explore the relationship you investigate in parts (a)–(g).',
    },
    tasks: [
      {
        label: 'a',
        text: 'A student wants to investigate the relationship between the number of virtual images when the angle between two mirrors changes. **State** the question that could be answered in this scientific investigation.',
        marks: 1,
        ph: 'Write a research question naming the IV (angle between mirrors) and the DV (number of virtual images observed).',
      },
      {
        label: 'b',
        text: 'Below is a list of variables for this experiment. For each variable, **State** whether it is the independent variable, the dependent variable, or a control variable.\n\n| Variable | Independent / Dependent / Control |\n|----------|-----------------------------------|\n| The object used | |\n| The position of the object | |\n| The number of images observed | |\n| The size of the mirrors used | |\n| The angle between the mirrors | |\n| The shape of the mirrors used | |',
        marks: 3,
        ph: 'IV = angle between mirrors; DV = number of images observed; Controls = object used, position of object, size of mirrors, shape of mirrors.',
      },
      {
        label: 'c',
        text: '**Identify** the measuring instrument that would be needed for this experiment.',
        marks: 1,
        ph: 'Protractor (to measure the angle between the two mirrors).',
      },
      {
        label: 'd',
        text: 'After collecting data, the student presents the results in the form of a graph.\n\nUse the graph to **predict** the angle that would produce three images.',
        marks: 1,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            title: 'Number of virtual images versus angle between mirrors',
            xAxis: { label: 'angle between mirrors / °', min: 0, max: 180, tick: 30 },
            yAxis: { label: 'number of images', min: 0, max: 8, tick: 1 },
            points: [[24, 7], [36, 5], [60, 3], [90, 2], [120, 1.5]],
            readouts: [{ x: 60, note: 'read the angle that gives 3 images' }],
            dataMaxX: 120,
          },
          caption: 'As the angle between the mirrors increases, the number of virtual images falls. Read off the angle that gives 3 images.',
        },
        ph: 'Read off the graph: at 3 images, the angle is approximately 60°.',
      },
      {
        label: 'e',
        text: 'The student makes the following prediction: "I predict that as the angle between the mirrors increases, the number of images decreases. The relationship between these variables will be inversely proportional."\n\nUsing data from the graph, **outline** if the graph supports this prediction. You should include calculations to support your answer.',
        marks: 3,
        ph: 'State: as angle increases, images decrease ✓. Test inverse proportion: N × angle = constant? e.g. 7 × 24° ≈ 168, 5 × 36° = 180, 3 × 60° = 180 — roughly constant but not exact → relationship is approximately inversely proportional but not perfectly so.',
      },
      {
        label: 'f',
        text: 'The bar chart below is an alternative presentation of the data from part (d). **Justify** why a bar chart is a more appropriate way of presenting this data.',
        marks: 2,
        artefact: {
          component: 'RateSim',
          data: {
            title: 'Number of virtual images at each mirror angle',
            mode: 'bars',
            variable: 'Angle between mirrors / °',
            metric: 'Number of virtual images',
            bars: [
              { label: '24°', value: 7 },
              { label: '36°', value: 5 },
              { label: '60°', value: 3 },
              { label: '90°', value: 2 },
            ],
            note: 'The number of images is a whole number (discrete) — a bar chart suits discrete categories better than a continuous line.',
          },
          caption: 'The same data shown as a bar chart: the number of images can only take whole-number values.',
        },
        ph: 'Only integer values of number of images are allowed (you cannot have 3.5 images). The relationship between angle and images is discrete, making a bar chart more appropriate than a continuous line graph.',
      },
      {
        label: 'g',
        text: 'A second student in the same class presents a table of results for her investigation. **Outline** if the first student\'s data in part (d) or the second student\'s data above are better for exploring the relationship between the two variables.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Angle between mirrors / °', 'Number of images'],
            rows: [
              ['20', '8'],
              ['40', '4'],
              ['60', '3'],
              ['80', '2'],
              ['100', '2'],
              ['120', '1'],
              ['140', '1'],
              ['160', '1'],
            ],
          },
          caption: 'The second student\'s results: more data points taken at regular 20° intervals.',
        },
        ph: 'The second student\'s data is better because: there are more data points OR data are taken at regular intervals (every 20°), making it easier to identify trends.',
      },
    ],
  },

  // ─── Q5: Speed of sound via echo (20 marks, Criterion C) ───
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Sound & Waves — Speed of Sound',
    marks: 20,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['speed of sound', 'echo', 'data processing', 'graph analysis', 'accuracy'], level: 'proficient' },
    stem: 'Like light, sound also reflects. We experience reflected sound as an echo. Echoes can be used to investigate the speed of sound. A student stands a known distance away from a wall and makes a loud sound by hitting two pieces of wood together. The time that the sound takes to travel to the wall and back can be used to calculate a value for the speed of sound.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ech" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1f2d3a"/></marker></defs><rect width="600" height="260" fill="#dbeafe"/><rect x="0" y="200" width="600" height="60" fill="#9ca3af"/><text x="560" y="30" font-size="11" text-anchor="end" fill="#475569">Diagram not to scale</text><rect x="500" y="60" width="60" height="140" fill="#6b7280" stroke="#374151"/><text x="530" y="130" font-size="12" text-anchor="middle" fill="#fff" font-weight="700" transform="rotate(0 530 130)">Wall</text><circle cx="70" cy="150" r="12" fill="#f1c27d" stroke="#c98a3c"/><rect x="60" y="162" width="20" height="36" rx="6" fill="#3a6ea5"/><path d="M86 150 l16 -8 l0 16 Z" fill="#e8590c"/><text x="90" y="140" font-size="10" fill="#e8590c">clap</text><line x1="100" y1="148" x2="498" y2="92" stroke="#1f2d3a" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#ech)"/><line x1="498" y1="108" x2="100" y2="164" stroke="#1f2d3a" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#ech)"/><line x1="80" y1="225" x2="530" y2="225" stroke="#1f2d3a" stroke-width="1.4" marker-end="url(#ech)"/><line x1="530" y1="225" x2="80" y2="225" stroke="#1f2d3a" stroke-width="1.4" marker-end="url(#ech)"/><text x="305" y="218" font-size="12" text-anchor="middle" fill="#1f2d3a" font-weight="700">Distance = 110 m</text></svg>',
      },
      caption: 'The student claps two pieces of wood 110 m from a wall; the sound travels to the wall and the echo returns.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Two students work in a pair to collect data for this investigation. One student claps the wood together and the other student measures the time between this sound and the sound of the echo returning. The result of this experiment is shown below:\n\n**Time for sound to travel = 0.79 s**\n\nThe student stands **110 m** from the wall. **Calculate** a value for the speed of sound using this raw data. Give your answer to two significant figures.',
        marks: 3,
        ph: 'Total distance = 2 × 110 = 220 m. Speed = distance / time = 220 / 0.79 = 278 ≈ 280 m s⁻¹ (2 s.f.).',
      },
      {
        label: 'b',
        text: 'The students are concerned that their measurements may not be accurate so they decide to improve their method. **Describe and justify** two things that the students could do to improve the accuracy of their measurements while using the same basic method. Your improvements should not require any new equipment.',
        marks: 4,
        ph: 'Improvement 1: Increase the number of time measurements at this distance — reduces effect of random errors in timing. Improvement 2: Increase the distance to the wall — small timing errors become less significant relative to the total travel time.',
      },
      {
        label: 'c',
        text: 'Instead of using a stopwatch to time the interval between the first sound and the echo, a laptop with a microphone and some sound recording software can be used.\n\nUse the sound recording image to **calculate** the time taken for the sound to travel 600 m.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="220" fill="#0f172a"/><text x="300" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#e2e8f0">Sound recording: amplitude versus time</text><line x1="60" y1="120" x2="560" y2="120" stroke="#334155" stroke-width="1"/><g stroke="#334155" stroke-width="1"><line x1="100" y1="116" x2="100" y2="124"/><line x1="200" y1="116" x2="200" y2="124"/><line x1="300" y1="116" x2="300" y2="124"/><line x1="400" y1="116" x2="400" y2="124"/><line x1="500" y1="116" x2="500" y2="124"/></g><g font-size="10" fill="#94a3b8" text-anchor="middle"><text x="100" y="142">0.5</text><text x="200" y="142">1.0</text><text x="300" y="142">1.5</text><text x="400" y="142">2.0</text><text x="500" y="142">2.5</text></g><text x="300" y="170" font-size="11" fill="#94a3b8" text-anchor="middle">time / s</text><g stroke="#22d3ee" stroke-width="1.2" fill="none"><path d="M140 120 l3 -52 l3 48 l3 -40 l3 36 l3 -28 l3 22 l3 -14 l3 10 l3 -6 l3 4 l3 -2"/></g><line x1="140" y1="60" x2="140" y2="120" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3 3"/><text x="140" y="56" font-size="10" fill="#f59e0b" text-anchor="middle">clap (0.90 s)</text><g stroke="#22d3ee" stroke-width="1.2" fill="none"><path d="M490 120 l3 -34 l3 30 l3 -24 l3 20 l3 -16 l3 12 l3 -8 l3 6 l3 -4 l3 2"/></g><line x1="490" y1="84" x2="490" y2="120" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3 3"/><text x="490" y="80" font-size="10" fill="#f59e0b" text-anchor="middle">echo (2.65 s)</text><line x1="140" y1="195" x2="490" y2="195" stroke="#e2e8f0" stroke-width="1"/><line x1="140" y1="190" x2="140" y2="200" stroke="#e2e8f0" stroke-width="1"/><line x1="490" y1="190" x2="490" y2="200" stroke="#e2e8f0" stroke-width="1"/><text x="315" y="190" font-size="11" fill="#e2e8f0" text-anchor="middle">Δt = ?</text></svg>',
          },
          caption: 'The microphone records the original clap and the returning echo as two amplitude spikes; read the time of each spike from the axis.',
        },
        ph: 'From the recording, read off the time between the two sound peaks: t₁ and t₂. Time = t₂ − t₁ = 2.65 − 0.90 = 1.75 ± 0.06 s.',
      },
      {
        label: 'd',
        text: 'The students vary the distance the sound travels and write down four sets of results in their notebook. **Organise and present** the data in a table that shows the distance travelled by the sound wave, and the time taken. Include the data from part (c) in your answer.',
        marks: 4,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Distance travelled by sound / m', 'Time / s'],
            rows: [
              ['200', '0.601'],
              ['300', '0.88'],
              ['400', '1.18'],
              ['500', '1.46'],
              ['600', '1.75'],
            ],
          },
          caption: 'The four notebook results plus the 600 m / 1.75 s result from part (c), shown here as the kind of table required.',
        },
        ph: 'Table with headers: Distance (m) and Time (s). Results in order: 200m/0.601s, 300m/0.88s, 400m/1.18s, 500m/1.46s, plus the ECF value from part (c) for 600m/1.75s. Units in column headings only. Values to 2 d.p.',
      },
      {
        label: 'e',
        text: 'Another student collects data using the same method. To process their data to find the speed of sound, they plot a graph of the distance travelled by the sound wave against the time taken.\n\nUse data from the graph to **calculate** the speed of sound.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            title: 'Distance travelled by sound versus time',
            xAxis: { label: 'time / s', min: 0, max: 2.0, tick: 0.5 },
            yAxis: { label: 'distance / m', min: 0, max: 700, tick: 100 },
            points: [[0.601, 200], [0.88, 300], [1.0, 280], [1.18, 400], [1.46, 500], [1.75, 600]],
            readouts: [{ x: 1.75, note: 'gradient of the line = speed of sound' }],
            dataMaxX: 1.75,
          },
          caption: 'Distance–time graph: the gradient of the line of best fit equals the speed of sound. One point lies below the line.',
        },
        ph: 'Read gradient from the line of best fit: speed = Δdistance / Δtime = gradient ≈ 330–355 m s⁻¹.',
      },
      {
        label: 'f',
        text: 'The student that collected this data set thought that a mistake had been made when measuring one of the times during the experiment. **Suggest** which measurement was performed incorrectly by referring to the graph. **State** whether the actual time should be higher or lower than the value recorded.',
        marks: 2,
        ph: 'Identify the anomalous data point (at 280 m / time ≈ 1.0 s). State: the time is too high (point is to the right of the line) — the actual time should be lower to follow the trend and be closer to the line of best fit.',
      },
      {
        label: 'g',
        text: 'During any speed of sound investigation, it is important to measure temperature as sound travels at different speeds through air at different temperatures. For temperatures close to room temperature, the relationship is given by:\n\n**speed of sound in air = 330 + (0.6 × T)**\n\nwhere T is the temperature of the air in degrees Celsius and the speed of sound in air is measured in metres per second.\n\n**Explain** why the speed of sound is dependent on temperature. Your answer should contain reference to the motion of particles.',
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
        title: 'Modelling an air particle with a mass on a spring',
        type: 'spring',
        springConstant: 20,
        massSlider: { min: 50, max: 500, step: 50, unit: 'g' },
        periodFormula: 'T = 2π√(m / k)',
      },
      caption: 'Drag the mass slider to change the hanging mass and press Play. The period T (time for one oscillation about the equilibrium position) updates as the mass changes.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Design** an experiment to investigate this research question. In your plan you must include:\n- the independent variable, the dependent variable and the justification of two control variables\n- a hypothesis that can be tested by this investigation\n- how you will collect sufficient data\n- a method detailing the procedure you will follow',
        marks: 14,
        ph: 'IV = mass on spring; DV = time period of oscillation; CV = spring constant/stiffness AND length of spring (justify each).\nHypothesis: If mass increases, then time period increases, because greater mass has more inertia.\nData: at least 5 different masses, 3 trials each, calculate mean.\nMethod: attach mass to spring, displace and release, measure time for 10 oscillations, divide by 10 for period. Repeat.',
      },
      {
        label: 'b',
        text: '**Suggest** a second investigation into another factor that could affect the time period of a mass oscillating on a spring. For this new investigation you should include:\n- the independent and dependent variables\n- a research question\n- two relevant control variables',
        marks: 5,
        ph: 'Example: IV = spring constant/stiffness (use different springs); DV = time period; RQ = How does spring constant affect time period?; CVs = mass on spring AND amplitude of oscillation. (Do not repeat mass as IV)',
      },
    ],
  },

  // ─── Q7: Stopping distance (10 marks, Criteria A & D) ───
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Interactions — Stopping Distance',
    marks: 10,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['stopping distance', 'kinematics', 'deceleration', 'friction', 'driver factors'], level: 'proficient' },
    stem: 'This task will consider some of the factors that affect the stopping distance of a car. Stopping distance has important implications for road safety. The stopping distance of a car is made up of two components: the thinking distance (how far the car travels in the time taken for the driver to react) and the braking distance (how far the car travels while it is decelerating).',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="sd" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1f2d3a"/></marker></defs><rect width="600" height="240" fill="#cfe8d4"/><rect x="0" y="180" width="600" height="60" fill="#5b6b78"/><line x1="0" y1="210" x2="600" y2="210" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="18 14"/><rect x="40" y="150" width="64" height="28" rx="10" fill="#e03131" stroke="#a01818"/><rect x="56" y="138" width="34" height="18" rx="6" fill="#c92a2a"/><circle cx="58" cy="180" r="11" fill="#222"/><circle cx="92" cy="180" r="11" fill="#222"/><text x="72" y="128" font-size="11" text-anchor="middle" fill="#1f2d3a">20 m s⁻¹</text><line x1="120" y1="100" x2="320" y2="100" stroke="#1f2d3a" stroke-width="1.4" marker-end="url(#sd)"/><line x1="320" y1="100" x2="120" y2="100" stroke="#1f2d3a" stroke-width="1.4" marker-end="url(#sd)"/><text x="220" y="92" font-size="12" text-anchor="middle" fill="#1f2d3a" font-weight="700">Thinking distance</text><text x="220" y="116" font-size="12" text-anchor="middle" fill="#1f2d3a">28 m</text><line x1="320" y1="100" x2="540" y2="100" stroke="#1f2d3a" stroke-width="1.4" marker-end="url(#sd)"/><line x1="540" y1="100" x2="320" y2="100" stroke="#1f2d3a" stroke-width="1.4" marker-end="url(#sd)"/><text x="430" y="92" font-size="12" text-anchor="middle" fill="#1f2d3a" font-weight="700">Braking distance</text><text x="430" y="116" font-size="12" text-anchor="middle" fill="#1f2d3a">39 m</text><line x1="120" y1="60" x2="540" y2="60" stroke="#1f2d3a" stroke-width="1.4" marker-end="url(#sd)"/><line x1="540" y1="60" x2="120" y2="60" stroke="#1f2d3a" stroke-width="1.4" marker-end="url(#sd)"/><text x="330" y="52" font-size="12" text-anchor="middle" fill="#1f2d3a" font-weight="700">Stopping distance</text><g font-size="10" fill="#1f2d3a"><circle cx="120" cy="200" r="4" fill="#e03131"/><text x="120" y="232" text-anchor="middle">Hazard detected</text><circle cx="320" cy="200" r="4" fill="#e03131"/><text x="320" y="232" text-anchor="middle">Braking begins</text><circle cx="540" cy="200" r="4" fill="#e03131"/><text x="540" y="232" text-anchor="middle">The car stops</text></g></svg>',
      },
      caption: 'Stopping distance = thinking distance (28 m) + braking distance (39 m) for a car travelling at 20 m s⁻¹.',
    },
    tasks: [
      {
        label: 'a',
        text: 'In the diagram, the car decelerates from 20 m s⁻¹ to rest. If the brakes are worn and are only able to decelerate the car at 2 m s⁻², **calculate** the new braking distance.',
        marks: 4,
        ph: 'Use v² = u² + 2as: 0 = 20² + 2×(−2)×s → 0 = 400 − 4s → s = 100 m. Show formula, substitution, and unit.',
      },
      {
        label: 'b',
        text: 'Factors related to the driver, the car or the environment can have an impact on the stopping distance for a given speed. For example, driving when tired, or distracted (driver factors), can significantly increase reaction times and subsequently increase the stopping distance of a car. **Classify** the following into environmental factors, driver factors, and car factors.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="260" fill="#ffffff"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Factors that affect stopping distance</text><g><rect x="30" y="40" width="170" height="80" rx="8" fill="#eef4f7" stroke="#94a3ad"/><text x="115" y="86" font-size="13" text-anchor="middle" fill="#1f2d3a">📱 Using a cell phone</text></g><g><rect x="215" y="40" width="170" height="80" rx="8" fill="#eef4f7" stroke="#94a3ad"/><text x="300" y="86" font-size="13" text-anchor="middle" fill="#1f2d3a">🌧 Heavy rain</text></g><g><rect x="400" y="40" width="170" height="80" rx="8" fill="#eef4f7" stroke="#94a3ad"/><text x="485" y="86" font-size="13" text-anchor="middle" fill="#1f2d3a">🛞 Worn out tyre tread</text></g><g><rect x="30" y="140" width="170" height="80" rx="8" fill="#eef4f7" stroke="#94a3ad"/><text x="115" y="186" font-size="13" text-anchor="middle" fill="#1f2d3a">🛑 Faulty brakes</text></g><g><rect x="215" y="140" width="170" height="80" rx="8" fill="#eef4f7" stroke="#94a3ad"/><text x="300" y="186" font-size="13" text-anchor="middle" fill="#1f2d3a">🍷 Drinking alcohol</text></g><g><rect x="400" y="140" width="170" height="80" rx="8" fill="#eef4f7" stroke="#94a3ad"/><text x="485" y="186" font-size="13" text-anchor="middle" fill="#1f2d3a">🛣 Poor road surface</text></g><text x="300" y="244" font-size="11" text-anchor="middle" fill="#64748b">Classify each as an environmental factor, a driver factor or a car factor.</text></svg>',
          },
          caption: 'Six factors to classify as environmental, driver or car factors using the dropdowns.',
        },
        widget: 'inline_dropdown_select',
        widgetOptions: ['environmental factor', 'driver factor', 'car factor'],
        widgetItems: ['Using a cell phone', 'Heavy rain', 'Worn out tyre tread', 'Faulty brakes', 'Drinking alcohol', 'Poor road surface'],
        ph: 'Cell phone → driver; Heavy rain → environmental; Worn tyre tread → car; Faulty brakes → car; Drinking alcohol → driver; Poor road surface → environmental.',
      },
      {
        label: 'c',
        text: 'Drinking alcohol and poor road surface are two of the factors which affect stopping distance. For each factor, **select** which part of the stopping distance each factor affects and **outline** the impact of each factor on stopping distance using your scientific knowledge.',
        marks: 4,
        ph: 'Alcohol: increases reaction time → increases thinking distance → increases stopping distance. Poor road surface: less friction between tyres and road → less braking force → greater braking distance → increases stopping distance.',
      },
    ],
  },

  // ─── Q8: Driverless cars evaluation (14 marks, Criterion D) ───
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Forces & Transport — Driverless Cars',
    marks: 14,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['technology evaluation', 'road safety', 'societal implications', 'economic implications'], level: 'advanced' },
    stem: 'In recent years, a number of countries have focused on improving road safety. In these countries there has been a decrease in the number of road casualties. Further improvements in the way cars are engineered could allow us to continue this trend. One such innovation is the use of electronic systems which can reduce driver error.\n\nModernization in car technology aims to improve safety. By 2035, it\'s expected that there will be more than 54 million self-driving cars and trucks. Self-driving cars, which drive us, instead of us driving them, are becoming a reality.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="280" fill="#f8fafc"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">How a driverless car senses its surroundings</text><rect x="220" y="150" width="160" height="50" rx="14" fill="#3a6ea5" stroke="#264c73"/><rect x="252" y="134" width="96" height="26" rx="8" fill="#4d7fb8"/><circle cx="248" cy="200" r="16" fill="#222"/><circle cx="352" cy="200" r="16" fill="#222"/><text x="300" y="182" font-size="11" text-anchor="middle" fill="#fff">self-driving car</text><g stroke="#0b7285" stroke-width="1.5" fill="none" opacity="0.7"><path d="M300 134 q0 -50 0 -70" marker-end=""/><ellipse cx="300" cy="100" rx="120" ry="34" stroke-dasharray="4 4"/><ellipse cx="300" cy="170" rx="170" ry="60" stroke-dasharray="4 4"/></g><circle cx="300" cy="120" r="6" fill="#e03131"/><text x="300" y="92" font-size="10" text-anchor="middle" fill="#0b7285">LIDAR / radar scan</text><g font-size="11" fill="#1f2d3a"><rect x="20" y="226" width="180" height="42" rx="8" fill="#dff0d8" stroke="#3a7d44"/><text x="110" y="244" text-anchor="middle" font-weight="700">Sensors + AI</text><text x="110" y="260" text-anchor="middle">react faster than humans</text></g><g font-size="11" fill="#1f2d3a"><rect x="210" y="226" width="180" height="42" rx="8" fill="#fde8cf" stroke="#c97a1a"/><text x="300" y="244" text-anchor="middle" font-weight="700">Society</text><text x="300" y="260" text-anchor="middle">safety vs driver jobs</text></g><g font-size="11" fill="#1f2d3a"><rect x="400" y="226" width="180" height="42" rx="8" fill="#e0e7ff" stroke="#4351b5"/><text x="490" y="244" text-anchor="middle" font-weight="700">Economy</text><text x="490" y="260" text-anchor="middle">cost vs cheaper transport</text></g></svg>',
      },
      caption: 'A driverless car uses LIDAR, radar and AI to sense its surroundings. The three panels flag the safety, society and economy themes to evaluate.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Applying technical innovation to the modernization of road transport has led to the development of driverless cars. Driverless cars will change the way goods and people are moved with significant consequences for both society and the economy. Whether or not all societies will be safer with driverless cars will affect how this technology is adopted. The economic effects on drivers and the multi-national companies who develop this technology are also considered in this question.\n\n**Discuss and evaluate** the consequences of all cars becoming driverless. In your answer you should include:\n- an outline of the technological improvements with respect to driverless cars related to safety\n- the advantages and disadvantages for society\n- the economic implications of driverless technology\n- a concluding appraisal giving your opinion on the use of driverless cars',
        marks: 14,
        ph: 'Structure around four areas: (1) Technology safety: fewer accidents from human error, sensors/AI react faster; (2) Society: safer roads vs job losses for drivers, independence for elderly/disabled; (3) Economics: high development cost, reduced transport costs, impact on taxi/truck drivers; (4) Concluding appraisal: your justified opinion linking all arguments.',
      },
    ],
  },

]
