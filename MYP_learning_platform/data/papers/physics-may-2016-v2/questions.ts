import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2016-v2/'

export const paperMeta = {
  id: 'physics-may-2016-v2',
  subject: 'Physics',
  session: 'May',
  year: 2016,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Mass vs Weight — Inner Planets context (5 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Mass, Weight & the Inner Planets',
    marks: 5,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'An astronaut is planning a mission to the inner planets of the solar system. The following table contains information that can be used to describe mass or weight.',
    figImages: ['/images/papers/physics-may-2016-v2/q1-table.svg'],
    tags: { unit: 'forces-interactions', topics: ['mass', 'weight', 'gravitational field strength', 'solar system'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct option to complete the table. Drag the correct items into the Mass and Weight columns for: Units, Type of quantity, Effect of gravitational field strength.\n\nDraggable items: *newton* / *kilogram* / *size only* / *size and direction* / *independent of gravitational field strength* / *dependent on gravitational field strength*',
        marks: 2,
        ph: 'Mass: kilogram, size only, independent. Weight: newton, size and direction, dependent on g.',
      },
      {
        label: 'b',
        text: 'The astronaut studies the inner planets. **Name** the three inner planets listed below in order of their distance from the Sun, starting with the closest.\n\nPlanets: Venus, Mars, Mercury',
        marks: 2,
        ph: 'Mercury → Venus → Mars (order by distance from the Sun).',
      },
      {
        label: 'c',
        text: 'Venus is hotter at its surface than Mercury, even though Mercury is closer to the Sun. **Suggest one reason** related to its atmosphere why Venus has a higher surface temperature than Mercury.',
        marks: 1,
        ph: 'Venus has a thick atmosphere (mainly CO₂) that creates a strong greenhouse effect, trapping heat and raising its surface temperature far above Mercury, which has almost no atmosphere.',
      },
    ],
  },

  // ── Q2: Probe — Gravity on Inner Planets (11 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Gravitational Field Strength on Inner Planets',
    marks: 11,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'A space probe drops a test object from a height of 90.0 m on each inner planet. The shape of the object ensures frictional forces are negligible. All of the object\'s gravitational potential energy (E_p) transforms to kinetic energy before hitting the surface.',
    figImages: [`${P}q2-probe.png`],
    tags: { unit: 'forces-interactions', topics: ['gravitational field strength', 'density', 'gravitational potential energy', 'kinetic energy', 'velocity'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The table shows the time it takes the test object to fall 90.0 m on different planets. Using the equation *s = ½at²*, **calculate** the gravitational field strength on Venus and on Mercury.\n\n| Planet | Time (s) |\n|--------|----------|\n| Venus | 4.5 |\n| Mercury | 7.0 |',
        marks: 3,
        ph: 'g = 2s/t². Venus: g = 2×90/(4.5)² = 180/20.25 = 8.9 ms⁻². Mercury: g = 2×90/(7.0)² = 180/49.0 = 3.7 ms⁻².',
      },
      {
        label: 'b',
        text: 'The gravitational field strength (g) is related to both the density and the radius of a planet. Venus has a greater g than Mercury.\n\n**Explain** what this tells us about the relationship between density and g, and between radius and g.',
        marks: 2,
        ph: 'A planet\'s g depends on both its density and radius. Venus is larger and denser than Mercury. Greater density → higher g. Greater radius also contributes to higher g when paired with higher density.',
      },
      {
        label: 'c',
        text: 'The probe releases a test object of mass **450 g** from a height of **90.0 m** above the surface of Mars (g on Mars = 3.8 ms⁻²). **Calculate** the gravitational potential energy of the test object before release.',
        marks: 3,
        ph: 'Ep = mgh = 0.45 × 3.8 × 90.0 = 154.35 J ≈ 154 J.',
      },
      {
        label: 'd',
        text: 'The test object travels faster before hitting the surface of Venus than before hitting the surface of Mars. **Explain** this observation.',
        marks: 3,
        ph: 'g on Venus is greater than on Mars. Ep = mgh is therefore greater on Venus (same m and h). All Ep converts to KE, so KE is greater on Venus. Since KE = ½mv² and mass is the same, velocity must be greater on Venus.',
      },
    ],
  },

  // ── Q3: Cone Parachute Terminal Velocity Investigation (11 marks, Criterion B) ──
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Terminal Velocity — Mass Attached to Cone Parachute',
    marks: 11,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A student is going to investigate how the **mass attached to a cone parachute** affects the **terminal velocity** of the parachute falling through air.',
    tags: { unit: 'forces-interactions', topics: ['terminal velocity', 'drag', 'experimental design', 'variables'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State** the equipment the student would need and give a reason why each piece of equipment is needed.',
        marks: 2,
        ph: 'Stopwatch/timer: to measure time for the parachute to fall. Metre rule: to measure the distance fallen. Set of masses (varying mass). Cone parachutes of identical shape/size (controlled).',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that this investigation would test.',
        marks: 3,
        ph: 'As the mass attached increases, the terminal velocity increases. Because higher mass → greater weight force. To reach a new terminal velocity (where drag = weight), the parachute must fall faster to increase drag. Therefore terminal velocity increases with mass.',
      },
      {
        label: 'c',
        text: '**State** one variable that must be controlled and **describe** how this variable should be controlled in this experiment.',
        marks: 3,
        ph: 'Control variable: size/shape of the cone parachute. How to control: use identical cone parachutes throughout. Reason: the size and shape of the parachute affects the drag force, which determines terminal velocity.',
      },
      {
        label: 'd',
        text: '**Describe** the data to collect. Include the number of different values of mass and the number of repeats.',
        marks: 3,
        ph: 'At least five different masses attached to the parachute. Values evenly spread across a range (e.g. 5 g to 25 g). At least 3 repetitions for each mass value to improve reliability and allow a mean to be calculated.',
      },
    ],
  },

  // ── Q4: Phases of Venus (3 marks, Criterion A) ──
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Phases of Venus',
    marks: 3,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Venus orbits the Sun closer than Earth does. Observers using telescopes can watch Venus\'s lit face change over the course of its orbit.',
    figImages: [`${P}q4-venus.png`],
    tags: { unit: 'astrophysics', topics: ['moon phases', 'gravity', 'orbit', 'inner planets'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** why Venus appears to change its lit shape (phases) when viewed from Earth over the course of its orbit.',
        marks: 2,
        ph: 'Venus orbits the Sun, so its position relative to Earth changes. As its position changes, different amounts of the sunlit surface of Venus are visible from Earth. Different fractions of the lit surface face Earth at different orbital positions.',
      },
      {
        label: 'b',
        text: '**State** the force that keeps Venus in orbit around the Sun.',
        marks: 1,
        ph: 'Gravitational force / gravity / gravitational attraction.',
      },
    ],
  },

  // ── Q5: Big Bang Evidence (2 marks, Criterion A) ──
  {
    id: 5,
    crit: 'A',
    type: 'extended',
    topic: 'Evidence for the Big Bang',
    marks: 2,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The Big Bang theory is the prevailing cosmological model for the origin and evolution of the universe. It states that the universe began approximately 13.8 billion years ago in an extremely hot and dense state and has been expanding ever since.',
    tags: { unit: 'astrophysics', topics: ['Big Bang', 'evidence', 'cosmology', 'redshift'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State two observations** that provide evidence supporting the Big Bang theory.',
        marks: 2,
        ph: 'Any two: redshift of distant galaxies shows the universe is expanding. Cosmic Microwave Background radiation (CMB) — uniform low-temperature radiation matching Big Bang predictions. Abundance of light elements (hydrogen and helium) consistent with nucleosynthesis after the Big Bang.',
      },
    ],
  },

  // ── Q6: Voltage vs LED Brightness Investigation (7 marks, Criterion B) ──
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Voltage vs LED Brightness Investigation',
    marks: 7,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'A student is planning to investigate how the voltage (potential difference) across a light-emitting diode (LED) affects the brightness of the LED.',
    figImages: [`${P}q6a-circuits.png`],
    tags: { unit: 'electricity-circuits', topics: ['voltage', 'LED', 'experimental design', 'circuit'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: 'Two circuit diagrams are shown — one labelled "Correct" and one "Incorrect".\n\n**Explain** why the current through the LED could not be measured using the incorrect circuit.',
        marks: 2,
        ph: 'In the incorrect diagram, the ammeter is connected in parallel with the LED. The ammeter has near-zero resistance, so most current bypasses the LED. The ammeter therefore measures current through the short circuit, not through the LED.',
      },
      {
        label: 'b',
        text: '**State** the independent and dependent variables in this investigation.',
        marks: 2,
        ph: 'Independent variable: voltage / potential difference (across the LED). Dependent variable: brightness of the LED / current through the LED.',
      },
      {
        label: 'c',
        text: 'The student collects data at 8 voltage values ranging from 0 to 5 V, but the values are not evenly spread. **Evaluate** the quality of this data collection approach.',
        marks: 3,
        ph: '8 measurements is sufficient. Covers 0–5 V range (appropriate for an LED). However, values are not evenly distributed — some regions are denser and others are sparse. This reduces confidence in identifying the true relationship between voltage and brightness.',
      },
    ],
  },

  // ── Q7: V-I Characteristic — Diode (13 marks, Criterion C) ──
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'V-I Characteristic of a Diode',
    marks: 13,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'A student investigates the V-I characteristic of a silicon diode by varying the forward voltage and measuring the current through the diode.',
    figImages: [`${P}q7-vi-graph.png`],
    tags: { unit: 'electricity-circuits', topics: ['diode', 'V-I characteristic', 'threshold voltage', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student plots their data on a scatter graph. **Evaluate** the student\'s choice to plot the data this way, and describe what they should do to show the relationship between voltage and current.',
        marks: 3,
        ph: 'Scatter graph is appropriate for continuous data. A smooth curve of best fit (not a straight line) should be drawn. Data at the threshold region (around 0.6 V) should be denser, since that is where the most interesting change occurs.',
      },
      {
        label: 'b',
        text: '**Describe** the relationship between potential difference (voltage) and current shown by the graph.',
        marks: 3,
        ph: 'Below approximately 0.6 V (threshold voltage), current is approximately zero. Above the threshold, current increases very rapidly with increasing voltage — the relationship is non-linear (exponential). The diode only conducts significantly above the threshold voltage.',
      },
      {
        label: 'c',
        text: 'Resistance (R) is defined as R = V/I. **Describe** how resistance changes in the diode across the range of the experiment. Choose two points on the graph to calculate values of resistance to support your answer.',
        marks: 4,
        ph: 'At low voltages (e.g. 0.4 V, I ≈ 0) → resistance is very high (effectively infinite). At higher voltages (e.g. 0.7 V, I ≈ 10 mA) → R = 0.7/0.01 = 70 Ω. Resistance decreases significantly as voltage increases above threshold. Diode is NOT ohmic.',
      },
      {
        label: 'd',
        text: 'The student\'s original hypothesis was: *"The current through the diode is directly proportional to the voltage across it."*\n\n**Evaluate** the hypothesis using the data recorded. Refer to whether the graph supports or rejects the hypothesis.',
        marks: 3,
        ph: 'For directly proportional: the graph must be a straight line through the origin. The diode graph is NOT a straight line — it is non-linear with a threshold. The graph REJECTS the hypothesis. The diode does not obey Ohm\'s law.',
      },
    ],
  },

  // ── Q8: Thermistor V-I Characteristic (10 marks, Criterion C) ──
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Thermistor Resistance and Temperature',
    marks: 10,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'Resistance (R) is defined as R = V/I. A student investigates how a negative temperature coefficient (NTC) thermistor behaves when it is heated.',
    tags: { unit: 'electricity-circuits', topics: ['thermistor', 'resistance', 'temperature', 'NTC'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'From the graph, **state** the temperature at which the resistance of the NTC thermistor begins to decrease noticeably from its room-temperature value.',
        marks: 1,
        ph: 'Approximately 30°C (accept range 25–35°C depending on graph).',
      },
      {
        label: 'b',
        text: '**Explain** why the resistance of an NTC thermistor decreases as its temperature increases.',
        marks: 2,
        ph: 'As temperature increases, the thermistor releases more charge carriers (electrons). More charge carriers are available to carry current. For the same voltage, more current flows → resistance decreases (R = V/I).',
      },
      {
        label: 'c',
        text: '**Explain** why an NTC thermistor is useful in temperature-sensing circuits.',
        marks: 5,
        ph: 'Resistance of the thermistor decreases as temperature rises. This change in resistance changes the voltage across the thermistor in a potential divider circuit. The voltage change can be detected and used as an input to a control system. The output can trigger an alarm or switch a heater/cooler on or off. The thermistor therefore converts temperature into a measurable electrical signal.',
      },
      {
        label: 'd',
        text: '**Suggest** one way of extending this investigation, and **justify** your suggestion.',
        marks: 2,
        ph: 'Suggestion: compare a positive temperature coefficient (PTC) thermistor. Justification: resistance of a PTC increases with temperature — comparing the two types would reveal different applications (e.g. PTC used as a self-resetting fuse).',
      },
    ],
  },

  // ── Q9: Sonar Depth Investigation (10 marks, Criterion B) ──
  {
    id: 9,
    crit: 'B',
    type: 'extended',
    topic: 'Sonar Echo Return Time Investigation',
    marks: 10,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    stem: 'A student investigates how the depth of water in a tank affects the time for a sonar pulse to travel to the bottom of the tank and return.',
    tags: { unit: 'sound-waves', topics: ['sonar', 'echo', 'variables', 'hypothesis', 'investigation'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct classification for each variable in this investigation.\n\nVariables: echo return time, frequency of sonar pulse, depth of water.',
        marks: 2,
        widget: 'variable_classify',
        widgetItems: ['Echo return time', 'Frequency of sonar pulse', 'Depth of water'],
        ph: 'Echo return time = dependent variable. Depth of water = independent variable. Frequency of sonar pulse = control variable.',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that this investigation would test.',
        marks: 3,
        ph: 'As the depth of water increases, the sonar echo return time increases. The sound wave must travel a greater total distance (down and back). Prediction: if depth doubles, return time doubles (directly proportional).',
      },
      {
        label: 'c',
        text: '**Explain** why the depth of water is the independent variable, and why the frequency of the sonar pulse is a control variable.',
        marks: 3,
        ph: 'Depth is the IV because it is what the student changes. Frequency is a CV because frequency could affect the behaviour of the sound pulse in water and must be kept constant to ensure a fair test.',
      },
      {
        label: 'd',
        text: '**Suggest** why sonar is more useful than light for measuring water depth in murky water.',
        marks: 2,
        ph: 'Light is absorbed and scattered by particles suspended in murky water and cannot penetrate to large depths. Sound (sonar) waves pass through murky water with much less absorption and can travel to the seabed and return without being blocked by particles.',
      },
    ],
  },

  // ── Q10: Nuclear Power Plant Evaluation (12 marks, Criterion D — banded) ──
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Nuclear Power for Developing Countries',
    marks: 12,
    topicCanonical: 'Nuclear Reactions & Energy',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'Some developing countries are considering building nuclear power plants as part of their plan to increase electricity generation and reduce dependence on fossil fuels.',
    tags: { unit: 'atomic-physics', topics: ['nuclear power', 'evaluation', 'environment', 'economics'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** whether developing countries should invest in nuclear power plants. In your answer, consider:\n- **advantages** and **disadvantages** of nuclear power (with justification)\n- **safety and environmental considerations**\n- **economic factors**\n- a **concluding appraisal** linking all issues discussed',
        marks: 12,
        ph: 'Advantages: large reliable power output; no CO₂ emissions during operation; low fuel cost per kWh. Disadvantages: risk of accident/meltdown; radioactive waste management for thousands of years; risk of nuclear proliferation. Safety/environment: cooling water discharge affects local ecosystem; mining uranium causes environmental damage. Economic: high construction cost; long build time; high decommissioning cost; creates skilled jobs. Conclusion: nuclear power could reduce fossil fuel dependence in developing countries; significant challenges remain; cost-benefit analysis essential.',
      },
    ],
  },

  // ── Q11: Ionisation & X-ray Security Screening (9 marks, Criterion A) ──
  {
    id: 11,
    crit: 'A',
    type: 'extended',
    topic: 'Ionising Radiation and X-ray Screening',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'Ionising radiation can affect the human body. Airport security systems use X-rays to scan baggage and detect prohibited items without opening bags.',
    tags: { unit: 'atomic-physics', topics: ['ionisation', 'DNA damage', 'X-rays', 'security screening', 'electromagnetic spectrum'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**Describe** how an atom can become ionised.',
        marks: 3,
        ph: 'An atom absorbs energy from radiation. An electron gains enough energy to overcome the electrostatic attraction of the nucleus. The electron escapes from the atom, leaving behind a positive ion.',
      },
      {
        label: 'b',
        text: '**Explain** how ionising radiation can damage the DNA of airport security workers exposed to scattered X-rays. Use a linked chain of reasoning.',
        marks: 2,
        ph: 'Ionising radiation ionises atoms in DNA molecules. This breaks chemical bonds in the DNA strand. Broken DNA can lead to mutations in cells, which may cause cancer.',
      },
      {
        label: 'c',
        text: '**Order** these three types of electromagnetic radiation from lowest to highest penetrating power: gamma rays, ultraviolet radiation, X-rays.',
        marks: 1,
        ph: 'Ultraviolet → X-ray → gamma ray (increasing penetrating power)',
      },
      {
        label: 'd',
        text: 'The table shows how different radiation types penetrate through a steel security door.\n\n**Explain** why X-rays rather than ultraviolet radiation or gamma rays are chosen for baggage screening at airports.',
        marks: 3,
        figImages: [`${P}q11d-radiation-table.png`],
        ph: 'UV cannot penetrate metal (absorbed too quickly) → cannot pass through baggage. Gamma rays are too penetrating — they pass straight through everything without being absorbed/scattered enough to form a clear image, and pose a greater radiation hazard. X-rays have intermediate penetration — absorbed more by dense objects (metal weapons) than by soft materials — producing a clear differential image of baggage contents.',
      },
    ],
  },

  // ── Q12: X-ray Authentication of Painting (3 marks, Criterion D) ──
  {
    id: 12,
    crit: 'D',
    type: 'extended',
    topic: 'X-ray Authentication in Art',
    marks: 3,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'X-ray imaging is used by art experts to examine paintings non-destructively. By passing X-rays through a painting and detecting the pattern on the other side, conservators can investigate what lies beneath the visible surface.',
    tags: { unit: 'atomic-physics', topics: ['X-rays', 'art authentication', 'interpretation', 'non-destructive testing'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Describe** what can be seen in the X-ray image of the Rembrandt painting, and **explain** what scientific information the image reveals about the history of the artwork.',
        marks: 3,
        ph: 'First point must refer to image. X-ray reveals an earlier composition (underdrawing or different scene) beneath the visible paint layer. Denser paints (containing lead-white) absorb more X-rays and appear lighter. Revisions made by the artist (pentimenti) are visible. This confirms the painting\'s history of reworking and can help authenticate it.',
      },
    ],
  },

  // ── Q13: Infrared Thermography of Buildings (4 marks, Criterion D) ──
  {
    id: 13,
    crit: 'D',
    type: 'extended',
    topic: 'Infrared Thermography for Energy Efficiency',
    marks: 4,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    stem: 'Infrared thermography is a technique that uses a special camera to detect infrared radiation emitted by warm objects. It is used to survey buildings and identify areas of high heat loss.',
    tags: { unit: 'em-spectrum', topics: ['infrared', 'thermography', 'heat loss', 'energy efficiency', 'scientific applications'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: 'A thermographic image of a house is shown. **Explain** what the thermographic image reveals about heat loss in the building, with reference to the colours visible in the image.',
        marks: 2,
        ph: 'Areas that appear white/yellow are warmest (e.g. windows, roof edges) — indicating greatest heat loss. Areas that appear blue/purple are coldest — indicating good insulation. The image reveals that windows and the roof are the main sources of heat loss.',
      },
      {
        label: 'b',
        text: '**State two advantages** of using infrared thermography rather than physical inspection to assess heat loss in a building.',
        marks: 2,
        ph: 'Any two: surveys the whole building quickly without removing cladding. Non-destructive (building is not damaged). Provides quantitative temperature data. Can survey areas that are inaccessible by physical inspection. Results are immediately visible as a colour map.',
      },
    ],
  },
]
