import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2016/'

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
    stem: 'The following table contains information that can be used to describe mass or weight.',
    figImages: [`${P}q1-table.png`],
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
    stem: 'While passing close by each planet, the probe drops a test object from a height of 100.0 m. The shape of the object ensures that any frictional forces are negligible over a fall of this distance. All of the test object\'s gravitational potential energy (E_p) transforms to kinetic energy before hitting the surface of the moons.',
    figImages: [`${P}q2-probe.png`],
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
    stem: 'A student is going to investigate how the **area of a parachute** affects the **terminal velocity** of the parachute.',
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
    stem: 'The first animation shows the Moon orbiting the Earth. The second animation shows how the Moon looks each day, when viewed from the Earth over a complete month.',
    figImages: [`${P}q4-moon.png`],
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
    stem: 'There are different theories about how the universe began and how it is changing. One theory is the "steady state" theory, which proposes that the universe has always existed and that matter is constantly being created. An alternative is the "Big Bang" theory.',
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
    stem: 'A student is planning to investigate how the voltage (potential difference) across a bulb affects the current through it.',
    figImages: [`${P}q6a-circuits.png`],
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
    stem: 'A student investigates the V-I characteristic of a light bulb by varying the voltage and measuring the current through the bulb.',
    figImages: [`${P}q7-vi-graph.png`],
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
    stem: 'Resistance (R) is defined as R = V/I. The V-I characteristic of a filament lamp is being investigated across a range of temperatures.',
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
    stem: 'A student investigates how the distance between ground stations affects the transmission time for signals to travel between them via satellite.',
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
    stem: 'Satellite technology can provide internet access to remote areas of the world that are not connected by traditional cable-based internet.',
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
    stem: 'Ionising radiation can affect the human body. X-rays and gamma rays can both be used by doctors to produce images of the internal structure of the human body.',
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
        figImages: [`${P}q11d-xray-table.png`],
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
    stem: 'X-rays can be used to examine objects for scientific and medical purposes. An X-ray image is formed by projecting X-rays and capturing the "shadow" on a surface that reacts to X-ray radiation.',
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
    stem: 'X-ray Fluorescence Spectroscopy (XRFS) is a technique that uses X-rays to identify the chemical elements present in a material. XRFS was used to examine an old painting.',
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
