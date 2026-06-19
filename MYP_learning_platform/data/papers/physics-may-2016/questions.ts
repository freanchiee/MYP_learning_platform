import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2016',
  subject: 'Physics',
  session: 'May',
  year: 2016,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Mass vs Weight (5 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 5,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The following table contains information that can be used to describe mass or weight.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Mass', 'Weight'],
        rows: [
          ['Units', '?', '?'],
          ['Type of quantity', '?', '?'],
          ['Effect of gravitational field strength', '?', '?'],
        ],
      },
      caption: 'Complete the table: drag the correct item into each Mass and Weight cell.',
    },
    tags: { unit: 'forces-interactions', topics: ['mass', 'weight', 'gravitational field strength', 'solar system'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct option to complete the table. Drag the correct items into the Mass and Weight columns for: Units, Type of quantity, Effect of gravitational field strength.\n\nDraggable items: *newton* / *kilogram* / *size only* / *size and direction* / *independent of gravitational field strength* / *dependent on gravitational field strength*',
        marks: 2,
        ph: 'Mass: Units=kilogram, Type=size only (scalar), Effect=independent of gravitational field strength.\nWeight: Units=newton, Type=size and direction (vector), Effect=dependent on gravitational field strength.',
      },
      {
        label: 'b',
        text: 'A space probe visits several planets in our solar system. **Name** the three planets listed below in order of their distance from the Sun, starting with the closest.\n\nPlanets: Venus, Neptune, Jupiter',
        marks: 2,
        ph: 'Venus → Jupiter → Neptune (order from Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune).',
      },
      {
        label: 'c',
        text: 'The probe detects that planets appear to get colder as they are further from the Sun. **Suggest one reason** why.',
        marks: 1,
        ph: 'The further from the Sun, the less radiation/energy received per unit area from the Sun, so the temperature is lower.',
      },
    ],
  },

  // ── Q2: Space Probe — Gravity & GPE (11 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 11,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'While passing close by each planet, the probe drops a test object from a height of 100.0 m. The shape of the object ensures that any frictional forces are negligible over a fall of this distance. All of the test object\'s gravitational potential energy (E_p) transforms to kinetic energy before hitting the surface of the moons.',
    artefact: {
      component: 'ProjectileSim',
      data: {
        title: 'Space-probe drop test (height 100.0 m)',
        mode: 'drop',
        dropHeight_m: 100,
        scaleMarks_m: [0, 20, 40, 60, 80, 100],
        readout: 'fall time / s',
        planets: [
          { name: 'Mercury', g: 3.7, fallTime_s: 7.3 },
          { name: 'Mars', g: 3.8, fallTime_s: 7.3 },
          { name: 'Earth', g: 9.8, fallTime_s: 4.5 },
        ],
      },
      caption: 'Pick a planet to drop the test object 100.0 m and read the fall time. Use s = ½at² to find g.',
    },
    tags: { unit: 'forces-interactions', topics: ['gravitational field strength', 'density', 'gravitational potential energy', 'kinetic energy', 'velocity'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The table shows the time it takes the test object to fall 100.0 m on different planets. Using the equation *s = ½at²*, **calculate** the gravitational field strength on Mercury and on Mars.',
        marks: 3,
        ph: 'g = 2s/t². Mercury: t = 7.3 s (read), g = 2×100/7.3² = 3.75 ≈ 3.7 ms⁻². Mars: t = 7.3 s? (check), g ≈ 3.8 ms⁻². Award 2 if more than 2 significant figures are recorded.',
      },
      {
        label: 'b',
        text: 'The gravitational field strength (g) is related to both the density and the radius of a planet. The gravitational field strength on Mars is greater than on Mercury, even though Mars has a larger radius.\n\n**Explain** what this tells us about the relationship between density and g, and between radius and g.',
        marks: 2,
        ph: 'A reference to the relationship between g and density (as density increases, g increases). A reference to the relationship between r and density — so Mars must have a much lower density (than Mercury) to have greater g despite larger radius.',
      },
      {
        label: 'c',
        text: 'The probe then travels to the moons of Jupiter. It drops a test object of mass **600 g** from a height of **100.0 m** above the surface of Io (g on Io = 1.8 ms⁻²). **Calculate** the gravitational potential energy of the test object before it is released.',
        marks: 3,
        ph: 'Ep = mgh = 0.6 × 1.8 × 100 = 108 J. Accept: 0.600 × 1.8 × 100 = 108 J. Also accept Ep = mgh = 3600 J (using different g? Or 600g in grams not kg). Actually: mass=0.6 kg, g=1.8, h=100 → Ep=108J. (If using 6N weight with g=6: 6×100=600J).\nNote from MS: Ep = mgh = 3600 J/3.6 kJ — this may use different values; check data. MS answer = 3600J.',
      },
      {
        label: 'd',
        text: 'The test object travels faster before hitting the surface of Io than it does before hitting the surface of Ganymede. **Explain** this observation.',
        marks: 3,
        ph: 'As g on Ganymede is smaller, the GPE of the probe on Ganymede is smaller (Ep = mgh). All GPE becomes KE, so KE on Ganymede is smaller. As all other quantities are the same, the velocity must be smaller on Ganymede.',
      },
    ],
  },

  // ── Q3: Parachute Investigation (11 marks, Criterion B) ──
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 11,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A student is going to investigate how the **area of a parachute** affects the **terminal velocity** of the parachute.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Expected result: parachute area vs terminal velocity',
        xLabel: 'Parachute area',
        yLabel: 'Terminal velocity',
        xUnit: 'm²',
        yUnit: 'm s⁻¹',
        xMin: 0,
        xMax: 0.5,
        yMin: 0,
        yMax: 5,
        xStep: 0.1,
        yStep: 1,
        dataPoints: [
          { x: 0.1, y: 4.2 },
          { x: 0.2, y: 3.0 },
          { x: 0.3, y: 2.4 },
          { x: 0.4, y: 2.1 },
          { x: 0.5, y: 1.9 },
        ],
      },
      caption: 'A larger parachute area gives a lower terminal velocity (greater drag). The student must design a fair test of this relationship.',
    },
    tags: { unit: 'forces-interactions', topics: ['terminal velocity', 'drag', 'experimental design', 'variables'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State** the equipment the student would need and give a reason why each piece of equipment is needed.',
        marks: 2,
        ph: 'Stopwatch/timer: to measure the time taken for the parachute to fall. Metre rule/measuring device: to measure the height from which it falls (or to measure the area of the parachute). Data logger with sensor: to measure the speed/velocity of the parachute.',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that this investigation would test.',
        marks: 3,
        ph: 'As the area of the parachute increases, the terminal velocity decreases. Because a larger area increases the drag/air resistance force on the parachute. This increased drag reduces the acceleration and lowers the terminal velocity. (Quantitative: doubling the area halves terminal velocity.)',
      },
      {
        label: 'c',
        text: '**State** one variable that must be controlled and **describe** how this variable should be controlled in this experiment.',
        marks: 3,
        ph: 'Control variable: mass/weight of the parachute (or shape, material). How to control: use the same mass/weight attached to each parachute each time. Reason: the greater the mass, the greater the downward force, which affects the terminal velocity.',
      },
      {
        label: 'd',
        text: '**Describe** the data to collect. Include the number of different values of area and the number of repeats.',
        marks: 3,
        ph: 'At least five different values of parachute area. Values evenly spread over a range. Repeat measurements (at least 3 repetitions) for each area to allow a mean to be calculated and improve reliability.',
      },
    ],
  },

  // ── Q4: Moon Phases (3 marks, Criterion A) ──
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'astrophysics',
    marks: 3,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The first animation shows the Moon orbiting the Earth. The second animation shows how the Moon looks each day, when viewed from the Earth over a complete month.',
    artefact: {
      component: 'OrbitSim',
      data: {
        title: 'The Moon orbiting the Earth, and its phases',
        mode: 'phases',
        central: 'Earth',
        synodicMonth: 29.5,
        bodies: [
          { name: 'Earth', role: 'center' },
          { name: 'Moon', role: 'orbiter', synodicMonth_days: 29.5 },
        ],
        phases: ['new', 'waxing crescent', 'first quarter', 'waxing gibbous', 'full', 'waning gibbous', 'last quarter', 'waning crescent'],
      },
      caption: 'Left: the Moon orbiting Earth (Sun fixed to the left). Right: the phase seen from Earth as the lit fraction changes through the month.',
    },
    tags: { unit: 'astrophysics', topics: ['moon phases', 'gravity', 'orbit'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** why the Moon appears to change shape (phases) when viewed from the Earth over the course of a month.',
        marks: 2,
        ph: 'The Moon orbits the Earth, so its position changes. As its position changes, different amounts of the lit (bright) surface of the Moon are visible from Earth. Different bright sections of the Moon are visible at different points in its orbit.',
      },
      {
        label: 'b',
        text: '**State** the force that keeps the Moon in orbit around the Earth.',
        marks: 1,
        ph: 'Gravitational force / pull / attraction. (Accept: gravity)',
      },
    ],
  },

  // ── Q5: Big Bang Theory (2 marks, Criterion A) ──
  {
    id: 5,
    crit: 'A',
    type: 'extended',
    topic: 'astrophysics',
    marks: 2,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'There are different theories about how the universe began and how it is changing. One theory is the "steady state" theory, which proposes that the universe has always existed and that matter is constantly being created. An alternative is the "Big Bang" theory.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="150" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Big Bang theory</text><text x="450" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Steady-state theory</text><line x1="300" y1="40" x2="300" y2="280" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 4"/><g><circle cx="60" cy="150" r="6" fill="#862e9c"/><circle cx="130" cy="150" r="34" fill="none" stroke="#7048e8" stroke-width="1.5"/><circle cx="210" cy="150" r="70" fill="none" stroke="#1971c2" stroke-width="1.5"/><line x1="66" y1="150" x2="276" y2="150" stroke="#94a3ad" stroke-width="1" marker-end="url(#bbarr)"/><g fill="#6741d9"><circle cx="130" cy="150" r="2"/><circle cx="118" cy="135" r="2"/><circle cx="142" cy="165" r="2"/><circle cx="190" cy="150" r="2"/><circle cx="230" cy="130" r="2"/><circle cx="240" cy="175" r="2"/><circle cx="180" cy="190" r="2"/><circle cx="175" cy="115" r="2"/></g><text x="150" y="250" font-size="11" text-anchor="middle" fill="#475569">starts from one point, expands &amp; cools;</text><text x="150" y="266" font-size="11" text-anchor="middle" fill="#475569">density decreases over time</text></g><defs><marker id="bbarr" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#94a3ad"/></marker></defs><g><circle cx="400" cy="150" r="55" fill="none" stroke="#2f9e44" stroke-width="1.5"/><circle cx="520" cy="150" r="55" fill="none" stroke="#2f9e44" stroke-width="1.5"/><line x1="406" y1="150" x2="586" y2="150" stroke="#94a3ad" stroke-width="1" marker-end="url(#bbarr)"/><g fill="#356b44"><circle cx="385" cy="135" r="2"/><circle cx="415" cy="160" r="2"/><circle cx="400" cy="180" r="2"/><circle cx="420" cy="125" r="2"/><circle cx="505" cy="135" r="2"/><circle cx="535" cy="160" r="2"/><circle cx="520" cy="180" r="2"/><circle cx="540" cy="125" r="2"/><circle cx="500" cy="170" r="2"/></g><text x="490" y="250" font-size="11" text-anchor="middle" fill="#475569">expands but new matter is created,</text><text x="490" y="266" font-size="11" text-anchor="middle" fill="#475569">so density stays constant over time</text></g></svg>',
      },
      caption: 'The Big Bang model (left) begins at a point and cools as it expands; the steady-state model (right) keeps a constant density by continuously creating matter.',
    },
    tags: { unit: 'astrophysics', topics: ['Big Bang', 'cosmology', 'evidence'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State two pieces of evidence** that support the Big Bang theory rather than the steady-state theory.',
        marks: 2,
        ph: 'Any two from: the Big Bang theory states the universe has a moment of beginning (age). The universe is cooling over time. The density of the universe is not constant. Matter is not being created. New evidence about cosmic microwave background (CMB) radiation does not support the steady-state theory.',
      },
    ],
  },

  // ── Q6: Electricity V-I Investigation (7 marks, Criterion B) ──
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'electricity-circuits',
    marks: 7,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'A student is planning to investigate how the voltage (potential difference) across a bulb affects the current through it.',
    artefact: {
      component: 'CircuitSim',
      data: {
        title: 'Measuring the current through the bulb',
        mode: 'place',
        component: 'bulb',
        slots: [
          { id: 'ammeter', correct: 'series with wire' },
          { id: 'voltmeter', correct: 'parallel with wire' },
        ],
        task: 'In the incorrect circuit the ammeter is placed in a parallel branch, not in series with the bulb. Build the correct circuit: ammeter in series with the bulb, voltmeter in parallel across it.',
      },
      caption: 'Place the ammeter in series with the bulb (so it reads the current through the bulb) and the voltmeter in parallel across it.',
    },
    tags: { unit: 'electricity-circuits', topics: ['voltage', 'current', 'experimental design', 'ammeter', 'circuit'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: 'Two circuit diagrams are shown — one labelled "Correct" and one "Incorrect".\n\n**Explain** why the current through the bulb could not be measured using the incorrect circuit.',
        marks: 2,
        ph: 'In the incorrect diagram, the ammeter is not in series with the bulb. The ammeter is not measuring the current through the bulb. OR: Ammeters have negligible resistance; in the incorrect circuit all/most current flows through the ammeter and not through the lamp.',
      },
      {
        label: 'b',
        text: '**State** the independent and dependent variables in this investigation.',
        marks: 2,
        ph: 'Independent variable: voltage / potential difference (across the bulb). Dependent variable: current (through the bulb). (Accept "temperature" as DV.)',
      },
      {
        label: 'c',
        text: 'The student collects data at 9 voltage values ranging from 0 to 12 V. **Evaluate** the quality of this data collection approach.',
        marks: 3,
        ph: 'The collected data is sufficient: 9 measurements constitute a sample that allows analysis. The voltage values cover the range proposed by the experiment (0–12V). However, the values are not distributed evenly — they are clustered around some areas and there are gaps in others. This reduces the reliability of the relationship identified from the data.',
      },
    ],
  },

  // ── Q7: V-I Characteristic Data Processing (13 marks, Criterion C) ──
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'electricity-circuits',
    marks: 13,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'A student investigates the V-I characteristic of a light bulb by varying the voltage and measuring the current through the bulb.',
    artefact: {
      component: 'GraphSim',
      data: {
        title: 'V–I characteristic of the filament lamp',
        mode: 'readoff',
        xLabel: 'Voltage / V',
        yLabel: 'Current / A',
        xRange: [0, 12],
        yRange: [0, 1.4],
        points: [
          [0, 0],
          [2, 0.30],
          [4, 0.55],
          [6, 0.78],
          [8, 0.98],
          [10, 1.15],
          [10.4, 1.18],
          [11, 1.21],
          [12, 1.25],
        ],
        readouts: [{ x: 10.4, note: 'lamp begins to emit visible light' }],
        dataMaxX: 12,
      },
      caption: 'Drag the crosshair to read current at any voltage. The curve flattens at higher voltages — resistance (R = V/I) increases as the filament heats up.',
    },
    tags: { unit: 'electricity-circuits', topics: ['resistance', 'V-I characteristic', 'proportionality', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student plots their data on a scatter graph. **Evaluate** the student\'s choice to plot the data this way, and describe what they should do to show the relationship between voltage and current.',
        marks: 3,
        ph: 'At least 5 voltage values covering 0–12V, evenly distributed. The scatter graph is appropriate for continuous data. A line of best fit should be drawn. Correct observation about the light level: the data point where the light just turns on should be noted.',
      },
      {
        label: 'b',
        text: '**Describe** the relationship between potential difference (voltage) and current shown by the graph.',
        marks: 3,
        ph: 'Current increases with voltage. The relationship is linear (straight line through origin) for low voltages (below about 10.4V). The relationship is non-linear at higher voltages (above 10.4V) — current increases less per unit voltage as voltage increases. (Accept: for data only below 10.4V: current is proportional to voltage.)',
      },
      {
        label: 'c',
        text: 'Resistance (R) is defined as the ratio of voltage (V) across a material to the current (I) flowing through the material: R = V/I. **Describe** how resistance changes in the filament across the range of the experiment. Choose two points on the graph to calculate values of resistance to support your answer.',
        marks: 4,
        ph: 'At lower voltages, calculate R = V/I → lower resistance. At higher voltages, calculate R = V/I again → higher resistance. State that resistance increases as voltage (and temperature) increases. Award 1 mark each for two correct calculations + two linked observations.',
      },
      {
        label: 'd',
        text: 'The student\'s original hypothesis was: *"The current through a bulb is directly proportional to the voltage across it."*\n\n**Evaluate** the hypothesis using the data recorded. Refer to whether the graph supports or rejects the hypothesis.',
        marks: 3,
        ph: 'For directly proportional, the graph of V vs I should be a straight line through the origin. As appropriate to the data recorded: EITHER the graph is not a straight line → relationship is not directly proportional → hypothesis is NOT supported. OR the graph is a straight line (if only low-voltage data used) → relationship is directly proportional → hypothesis IS supported. (Do not award for saying "not all materials tested.")',
      },
    ],
  },

  // ── Q8: Lamp Resistance & Temperature (10 marks, Criterion C) ──
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'electricity-circuits',
    marks: 10,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'Resistance (R) is defined as R = V/I. The V-I characteristic of a filament lamp is being investigated across a range of temperatures.',
    artefact: {
      component: 'GraphSim',
      data: {
        title: 'V–I characteristic of the filament lamp',
        mode: 'readoff',
        xLabel: 'Voltage / V',
        yLabel: 'Current / A',
        xRange: [0, 12],
        yRange: [0, 1.4],
        points: [
          [0, 0],
          [2, 0.30],
          [4, 0.55],
          [6, 0.78],
          [8, 0.98],
          [10, 1.15],
          [10.4, 1.18],
          [11, 1.21],
          [12, 1.25],
        ],
        readouts: [{ x: 10.4, note: 'lamp begins to emit visible light (10.4 V)' }],
        dataMaxX: 12,
      },
      caption: 'Read off the voltage at which the lamp begins to emit visible light, and note how the current rises less steeply at higher voltage as the filament heats and its resistance increases.',
    },
    tags: { unit: 'electricity-circuits', topics: ['resistance', 'temperature', 'filament', 'light emission', 'EM spectrum'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'From the graph, **state** the voltage at which the lamp begins to emit visible light.',
        marks: 1,
        ph: '10.4 V',
      },
      {
        label: 'b',
        text: '**Explain** why the lamp only produces visible light above a certain voltage.',
        marks: 2,
        ph: 'Only certain frequencies (wavelengths) of EM radiation are in the visible range. Above a certain temperature (threshold), the EM waves emitted by the filament are in the visible frequency range. Below this temperature the filament only emits infrared radiation (not visible).',
      },
      {
        label: 'c',
        text: '**Explain** why the current through the filament does not increase as much at higher voltages (higher temperatures) as it does at lower voltages.',
        marks: 5,
        ph: 'Current increases with voltage. At higher voltages the temperature of the filament increases. Higher temperature means atoms in the filament vibrate faster / have greater kinetic energy. Flowing charges (electrons) collide more frequently with the vibrating atoms. These collisions slow down the electrons more, increasing resistance. This increased resistance means the current does not increase as much per unit increase in voltage at higher temperatures.',
      },
      {
        label: 'd',
        text: '**Suggest** one way of extending this investigation, and **justify** your suggestion.',
        marks: 2,
        ph: 'Any reasonable suggestion e.g.: test a different component (e.g. resistor, diode) to compare. OR: test a different material for the filament. OR: use a greater range of voltage/potential difference. Justification: correctly linked to the suggestion (e.g. to see if resistance also increases for a resistor, or whether all materials behave the same way).',
      },
    ],
  },

  // ── Q9: Satellite Signal Investigation (10 marks, Criterion B) ──
  {
    id: 9,
    crit: 'B',
    type: 'extended',
    topic: 'astrophysics',
    marks: 10,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'A student investigates how the distance between ground stations affects the transmission time for signals to travel between them via satellite.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="earth9" cx="0.5" cy="0.5"><stop offset="0" stop-color="#3a7bd5"/><stop offset="1" stop-color="#16456e"/></radialGradient><marker id="ah9" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="340" fill="#0a0d18"/><g fill="#dde6f5"><circle cx="60" cy="40" r="1.3"/><circle cx="160" cy="30" r="1"/><circle cx="300" cy="50" r="1.4"/><circle cx="460" cy="35" r="1"/><circle cx="540" cy="60" r="1.3"/><circle cx="90" cy="90" r="1"/><circle cx="510" cy="110" r="1.2"/></g><circle cx="300" cy="560" r="320" fill="url(#earth9)" stroke="#0c2c47"/><path d="M40,360 Q300,250 560,360" fill="none" stroke="#5b9bd5" stroke-width="1" opacity="0.5"/><rect x="100" y="300" width="14" height="22" fill="#cbd5e1" stroke="#7a8a99"/><line x1="107" y1="300" x2="107" y2="278" stroke="#cbd5e1" stroke-width="2"/><circle cx="107" cy="276" r="4" fill="#e8772e"/><text x="107" y="338" font-size="11" text-anchor="middle" fill="#cbd5e1">station 1</text><rect x="486" y="300" width="14" height="22" fill="#cbd5e1" stroke="#7a8a99"/><line x1="493" y1="300" x2="493" y2="278" stroke="#cbd5e1" stroke-width="2"/><circle cx="493" cy="276" r="4" fill="#e8772e"/><text x="493" y="338" font-size="11" text-anchor="middle" fill="#cbd5e1">station 2</text><g transform="translate(300,70)"><rect x="-26" y="-10" width="52" height="20" rx="3" fill="#b6c4cf" stroke="#5b6b78"/><rect x="-44" y="-7" width="16" height="14" rx="2" fill="#2b4a7a" stroke="#9fb6d6"/><rect x="28" y="-7" width="16" height="14" rx="2" fill="#2b4a7a" stroke="#9fb6d6"/><text x="0" y="-20" font-size="11" text-anchor="middle" fill="#9fd3ff">satellite</text></g><path d="M107,272 L292,78" stroke="#3ad36a" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ah9)"/><path d="M308,78 L493,272" stroke="#3ad36a" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ah9)"/><line x1="107" y1="324" x2="493" y2="324" stroke="#94a3ad" stroke-width="1" stroke-dasharray="3 3"/><text x="300" y="318" font-size="11" text-anchor="middle" fill="#94a3ad">ground distance between stations</text></svg>',
      },
      caption: 'A signal travels station 1 → satellite → station 2. The student changes the ground distance between the stations and measures the transmission time.',
    },
    tags: { unit: 'astrophysics', topics: ['satellite', 'signal transmission', 'variables', 'hypothesis'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct classification for each variable in this investigation.\n\nVariables: transmission time, height of satellite, ground distance between stations.',
        marks: 2,
        widget: 'variable_classify',
        widgetItems: ['Transmission time', 'Height of satellite', 'Ground distance between stations'],
        ph: 'Transmission time = dependent variable. Ground distance between stations = independent variable. Height of satellite = control variable.',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that this investigation would test.',
        marks: 3,
        ph: 'As the ground distance between stations increases, the transmission time will increase. Because signals must travel a greater total distance (from station 1 → satellite → station 2). The greater the ground distance, the longer the path. Prediction: if distance doubles, transmission time doubles (directly proportional).',
      },
      {
        label: 'c',
        text: '**Explain** why ground distance/station separation is the independent variable, and why the height of the satellite is a control variable.',
        marks: 3,
        ph: 'Ground distance is the independent variable because it is what the student changes/controls (the variable being investigated). Height of satellite is a control variable because it could affect the transmission time (different heights = different path lengths) and must be kept constant so it does not affect the result.',
      },
      {
        label: 'd',
        text: '**Suggest** why there would be a maximum distance beyond which the satellite signal cannot connect the two ground stations.',
        marks: 2,
        ph: 'Beyond the maximum distance, the stations are outside the satellite\'s footprint (area on Earth\'s surface visible to the satellite). Signals cannot be transmitted if the ground station is beyond the curvature of the Earth relative to the satellite\'s position.',
      },
    ],
  },

  // ── Q10: Satellite Internet Access Evaluation (12 marks, Criterion D — banded) ──
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'astrophysics',
    marks: 12,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Satellite technology can provide internet access to remote areas of the world that are not connected by traditional cable-based internet.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Feature', 'Cable / fibre internet', 'Geostationary satellite', 'Low-Earth-orbit (LEO) satellite'],
        rows: [
          ['Reaches remote areas without infrastructure', 'no', 'yes', 'yes'],
          ['Signal latency (delay)', 'very low (~5 ms)', 'high (~600 ms)', 'low (~40 ms)'],
          ['Affected by heavy rain / cloud', 'no', 'yes', 'yes'],
          ['Area covered per satellite', 'n/a', 'very large', 'small (needs many)'],
          ['Set-up / launch cost', 'high to lay cable', 'very high', 'very high (many satellites)'],
          ['Equipment needed by user', 'none extra', 'satellite dish', 'small antenna'],
        ],
      },
      caption: 'Compare cable internet with satellite internet. Use this data to weigh the advantages, disadvantages, technology and economics of satellite access.',
    },
    tags: { unit: 'astrophysics', topics: ['satellite', 'internet access', 'technology', 'evaluation', 'economics'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the use of satellite internet access for providing connectivity to remote areas. In your answer, consider:\n- **advantages** and **disadvantages** of satellite internet access (with justification)\n- **technological considerations**\n- **economic factors**\n- a **concluding appraisal** linking all issues discussed',
        marks: 12,
        ph: 'Advantages: access in remote/rural areas without infrastructure; disaster recovery; covers large geographic areas. Disadvantages: signal latency (long path to satellite and back); weather interference; limited bandwidth; requires satellite dish. Technology: geostationary satellites cover large areas; low Earth orbit (LEO) satellites reduce latency; equipment maintenance; energy supply needed. Economic: high launch and maintenance costs; subscription costs may be unaffordable in developing countries; reduces digital divide; enables economic development. Conclusion: satellite internet is a valuable technology for bridging the digital divide, especially in remote regions; technological and economic barriers must be addressed; justified recommendation.',
      },
    ],
  },

  // ── Q11: Ionisation & Medical X-rays (9 marks, Criterion A) ──
  {
    id: 11,
    crit: 'A',
    type: 'extended',
    topic: 'atomic-physics',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'Ionising radiation can affect the human body. X-rays and gamma rays can both be used by doctors to produce images of the internal structure of the human body.',
    artefact: {
      component: 'SpectrumSim',
      data: {
        title: 'High-energy end of the electromagnetic spectrum',
        mode: 'scrub',
        bands: ['Visible', 'Ultraviolet', 'X-rays', 'Gamma rays'],
        axis: 'energy and penetrating power increase left → right',
        target: 'X-rays',
      },
      caption: 'Energy, frequency and penetrating power increase from ultraviolet to X-rays to gamma rays. Scrub across the bands to compare them.',
    },
    tags: { unit: 'atomic-physics', topics: ['ionisation', 'DNA damage', 'X-rays', 'gamma rays', 'UV', 'medical imaging'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**Describe** how an atom can become ionised.',
        marks: 3,
        ph: 'An atom absorbs energy from radiation (or a charged particle collides with the atom). An electron gains enough energy to escape from the atom. An ion (positively charged atom) is left behind.',
      },
      {
        label: 'b',
        text: '**Explain** how ionising radiation can be harmful to human health. Use a linked chain of reasoning.',
        marks: 2,
        ph: 'Ionising radiation damages DNA (in cells). This can cause mutations (changes to the DNA code). Mutations can lead to cancer or other health issues. OR: damage to cytoplasm can occur → leads to cell death.',
      },
      {
        label: 'c',
        text: '**Order** these three types of electromagnetic radiation from lowest to highest penetrating power: gamma rays, ultraviolet radiation, X-rays.',
        marks: 1,
        ph: 'Ultraviolet → X-ray → gamma ray (increasing penetrating power)',
      },
      {
        label: 'd',
        text: 'The table shows the absorption of ultraviolet, X-ray, and gamma radiation by different body tissues (skin, bone, soft tissue).\n\n**Explain** why X-rays are used rather than ultraviolet or gamma rays when doctors wish to make images of a person\'s bones.',
        marks: 3,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Absorption by', 'Ultraviolet', 'X-rays', 'Gamma rays'],
            rows: [
              ['skin', 'high', 'low', 'low'],
              ['bones', 'high', 'high', 'low'],
              ['soft tissue', 'high', 'medium', 'low'],
            ],
          },
          caption: 'Absorption of each type of radiation by skin, bone and soft tissue. Only X-rays are absorbed very differently by bone and soft tissue.',
        },
        ph: 'UV is blocked/absorbed by all materials (absorbed by skin) → cannot penetrate to bones. Gamma rays pass through all materials → no contrast between bone and soft tissue in the image. Only X-rays give contrast between bone and soft tissue/skin → bones absorb more X-rays than soft tissue → shadow image shows bone structure clearly.',
      },
    ],
  },

  // ── Q12: X-ray of Foot in Shoe (3 marks, Criterion D) ──
  {
    id: 12,
    crit: 'D',
    type: 'extended',
    topic: 'atomic-physics',
    marks: 3,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'X-rays can be used to examine objects for scientific and medical purposes. An X-ray image is formed by projecting X-rays and capturing the "shadow" on a surface that reacts to X-ray radiation.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="300" fill="#0b0e14"/><text x="260" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#cbd5e1">X-ray image: foot inside a high-heeled shoe</text><path d="M120,230 L120,180 Q120,150 160,140 L320,118 Q360,112 380,140 L408,200 Q418,225 392,238 L150,238 Q120,238 120,230 Z" fill="none" stroke="#6b7a8a" stroke-width="2" stroke-dasharray="5 4"/><text x="300" y="258" font-size="11" fill="#6b7a8a">shoe outline (faint, low absorption)</text><g stroke="#e8edf2" stroke-width="2" fill="#cdd7e0"><ellipse cx="150" cy="170" rx="20" ry="14"/><rect x="158" y="162" width="40" height="16" rx="6"/><rect x="196" y="158" width="44" height="14" rx="6"/><rect x="238" y="150" width="40" height="13" rx="6"/><rect x="276" y="143" width="34" height="12" rx="6"/><ellipse cx="322" cy="140" rx="14" ry="9"/><ellipse cx="346" cy="139" rx="9" ry="7"/></g><g stroke="#e8edf2" stroke-width="1.6" fill="#aab8c6"><ellipse cx="356" cy="155" rx="6" ry="5"/><ellipse cx="362" cy="170" rx="6" ry="5"/><ellipse cx="365" cy="186" rx="6" ry="5"/><ellipse cx="364" cy="202" rx="6" ry="5"/></g><text x="150" y="150" font-size="10" fill="#9fb0c0">heel bone</text><text x="245" y="135" font-size="10" fill="#9fb0c0">toes (compressed &amp; angled by shoe)</text><text x="380" y="200" font-size="10" fill="#9fb0c0">toe bones bent downward</text></svg>',
      },
      caption: 'An X-ray "shadow" image: the dense bones absorb X-rays strongly (bright), while the shoe absorbs few X-rays (faint outline). The bones reveal how the shoe forces the foot into an unnatural position.',
    },
    tags: { unit: 'atomic-physics', topics: ['X-rays', 'medical imaging', 'interpretation'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Describe** what can be seen in the X-ray image of a foot inside a shoe, and **explain** what scientific information the image reveals. Refer specifically to the image in your answer.',
        marks: 3,
        ph: 'Any relevant scientific point: high detail visible in the X-ray (first point must refer to image). The X-ray shows the foot is in an unnatural/distorted position inside the shoe. Information about the construction of the shoe (internal structure) is revealed. The bones of the foot are clearly visible showing any distortion caused by the shoe.',
      },
    ],
  },

  // ── Q13: XRFS Analysis of Painting (4 marks, Criterion D) ──
  {
    id: 13,
    crit: 'D',
    type: 'extended',
    topic: 'atomic-physics',
    marks: 4,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'X-ray Fluorescence Spectroscopy (XRFS) is a technique that uses X-rays to identify the chemical elements present in a material. XRFS was used to examine an old painting.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><g><rect x="30" y="40" width="150" height="160" rx="4" fill="#7a5c3e" stroke="#3f2f1f" stroke-width="2"/><circle cx="105" cy="100" r="30" fill="#caa776"/><path d="M75,150 Q105,120 135,150 L135,190 L75,190 Z" fill="#3f5d7a"/><text x="105" y="222" font-size="12" text-anchor="middle" font-weight="700" fill="#1f2d3a">Image A</text><text x="105" y="236" font-size="10" text-anchor="middle" fill="#64748b">visible photograph</text></g><g><rect x="225" y="40" width="150" height="160" rx="4" fill="#101418" stroke="#000" stroke-width="2"/><circle cx="300" cy="95" r="26" fill="none" stroke="#7fd0ff" stroke-width="1.6"/><path d="M272,150 Q300,122 328,150 L328,190 L272,190 Z" fill="none" stroke="#7fd0ff" stroke-width="1.4"/><ellipse cx="300" cy="92" rx="10" ry="13" fill="none" stroke="#ff9d5c" stroke-width="1.4" stroke-dasharray="3 2"/><text x="300" y="222" font-size="12" text-anchor="middle" font-weight="700" fill="#1f2d3a">Image B</text><text x="300" y="236" font-size="10" text-anchor="middle" fill="#64748b">XRFS elemental scan</text></g><g><rect x="420" y="40" width="150" height="160" rx="4" fill="#6e5236" stroke="#3f2f1f" stroke-width="2"/><circle cx="495" cy="92" r="22" fill="#c79f73"/><ellipse cx="495" cy="88" rx="9" ry="12" fill="#a07a4e"/><path d="M467,150 Q495,124 523,150 L523,190 L467,190 Z" fill="#5a4a6a"/><text x="495" y="222" font-size="12" text-anchor="middle" font-weight="700" fill="#1f2d3a">Image C</text><text x="495" y="236" font-size="10" text-anchor="middle" fill="#64748b">earlier hidden painting</text></g><path d="M185,120 L222,120" stroke="#94a3ad" stroke-width="1.5" marker-end="url(#xr)"/><path d="M380,120 L417,120" stroke="#94a3ad" stroke-width="1.5" marker-end="url(#xr)"/><defs><marker id="xr" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#94a3ad"/></marker></defs></svg>',
      },
      caption: 'Image A is the painting seen today; Image B is the XRFS elemental scan; Image C is an earlier version. The XRFS scan (B) matches the hidden earlier painting (C) beneath the visible surface.',
    },
    tags: { unit: 'atomic-physics', topics: ['XRFS', 'X-ray analysis', 'art conservation', 'scientific applications'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: 'Three images of the painting are shown: Image A (photograph), Image B (XRFS scan), Image C (a later stage of the painting).\n\n**Explain** what XRFS reveals about the painting that Image A does not show.',
        marks: 2,
        ph: 'XRFS reveals Image B which is not visible in Image A. Image B resembles Image C (an earlier stage of the painting). The XRFS reveals a hidden earlier version/layer of the painting beneath the visible surface.',
      },
      {
        label: 'b',
        text: '**State two advantages** of using XRFS rather than removing paint layers to examine what is under the surface.',
        marks: 2,
        ph: 'Any two: the painting is not damaged during analysis. Hidden information is revealed without physical intervention. The whole painting can be examined (not just a small area). The painting is preserved for people to enjoy.',
      },
    ],
  },
]
