import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2023-v1/'

export const paperMeta = {
  id: 'physics-may-2023-v1',
  subject: 'Physics',
  session: 'May',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Work, Energy & Power (11 marks) Criterion A
  // V1: Working oxen in agricultural fields
  // Q1a: 3.5 km in 42 min → 5.0 km/h; Q1c: A=420 kg→4116 N, B=5096 N→520 kg
  // Q1e: h=16 m, t=7.5 s, m=520 kg → ΔEp=81536 J, P=10871 W=10.9 kW
  // Q1f: 2.5 hp × 746 = 1865 W; I = 1865/230 = 8.1 A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power',
    marks: 11,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['speed and velocity', 'work done', 'power', 'gravitational potential energy'], level: 'proficient' },
    stem: 'Oxen have been used in agriculture for thousands of years. They perform work by pulling ploughs and heavy loads across fields. Physics can be used to analyse how oxen complete these tasks.',
    figImages: [`${P}q1-oxen.png`],
    tasks: [
      {
        label: 'a',
        text: 'An ox covers a distance of **3.5 km** in **42 minutes**. **Calculate** its speed in km per hour (km h⁻¹).',
        marks: 2,
        ph: 'Speed = distance ÷ time\n= 3.5 ÷ (42/60)\n= 3.5 × (60/42)\n= 5.0 km h⁻¹',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Power is the rate of transforming energy or the rate of doing work. **Select** the formula for power.\n\nA. energy transformed = power ÷ distance\nB. energy transformed = power + distance\nC. energy transformed = power × time\nD. energy transformed = power − time',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'C',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'The table below gives data about two oxen A and B. **Calculate** the missing values and complete the table. Use **g = 9.8 N kg⁻¹**.\n\n| Ox | Mass / kg | Weight / N |\n|----|-----------|------------|\n| A | 420 | ? |\n| B | ? | 5096 |',
        marks: 2,
        ph: 'Ox A weight = 420 × 9.8 = 4116 N\nOx B mass = 5096 ÷ 9.8 = 520 kg',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Select** the correct terms to complete the energy transformation diagram for an ox that starts from rest at the bottom of a hill, runs up the hill and then stops at the top.\n\nThe energy transformations are: [?] → [?] → [?]',
        marks: 1,
        widget: 'energy_chain',
        widgetOptions: ['Chemical potential energy', 'Gravitational potential energy', 'Elastic potential energy', 'Electrical energy', 'Kinetic energy'],
        ph: 'Chemical potential energy → Kinetic energy → Gravitational potential energy',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The hill in part (d) is **16 m** high. Using information from part (c) and the formula **ΔEₚ = mgΔh**, calculate the minimum power required for ox B to reach this height in **7.5 s**. Give your answer in kW.',
        marks: 3,
        ph: 'ΔEp = mgΔh = 520 × 9.8 × 16 = 81536 J\nPower = ΔEp ÷ t = 81536 ÷ 7.5 = 10871 W ≈ 10.9 kW',
        level: 'advanced',
      },
      {
        label: 'f',
        text: 'Power is sometimes given in horsepower (hp), where **1.0 hp = 746 W**. An electric irrigation pump has a power of **2.5 hp** and operates at a voltage of **230 V**. **Calculate** the current the pump requires.',
        marks: 2,
        ph: 'Power = 2.5 × 746 = 1865 W\nI = P ÷ V = 1865 ÷ 230 = 8.1 A',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Light & EM Waves (7 marks) Criterion A
  // V1: Prism dispersion; wavelength 420 nm (violet)
  // f = 3×10⁸ / (420×10⁻⁹) = 7.14×10¹⁴ Hz
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Light & Electromagnetic Waves',
    marks: 7,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['dispersion', 'refraction', 'electromagnetic spectrum', 'wave equation'], level: 'proficient' },
    stem: 'When white light passes through a glass prism, it separates into the colours of the visible spectrum. Scientists use this phenomenon to study the properties of light.',
    tasks: [
      {
        label: 'a',
        text: 'The image shows white light being separated into different colours as it passes through a prism. **Select** the term that best describes this process.\n\nA. Absorption\nB. Deflection\nC. Reflection\nD. Dispersion',
        marks: 1,
        figImages: [`${P}q2-prism.png`],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'D',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Explain** why violet light is at the bottom of the spectrum in part (a). Use scientific terminology in your answer.',
        marks: 3,
        ph: 'Violet light has the shortest wavelength (highest frequency) of the visible colours. It is refracted the most by the glass prism. Violet light travels slowest through the glass (highest refractive index), so it is bent the most at the glass surface, appearing at the bottom of the spectrum.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Ultraviolet (UV) waves exist just beyond violet in the spectrum. Unlike violet light, UV waves are not visible to the human eye. **State** one other difference between UV waves and violet light.',
        marks: 1,
        ph: 'UV waves have a shorter wavelength than violet light / UV has a higher frequency than violet light / UV carries more energy per photon.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'In air, all colours of light travel at **3.00 × 10⁸ m s⁻¹**. **Calculate** the frequency of violet light with a wavelength of **420 nm**. Give your answer in scientific notation.',
        marks: 2,
        ph: 'f = v ÷ λ = (3.00 × 10⁸) ÷ (420 × 10⁻⁹) = 7.14 × 10¹⁴ Hz',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Atomic Physics (9 marks) Criterion A
  // V1: Nitrogen-14 atom (Z=7, A=14; 7p, 7n)
  // Q3c: same variable_classify (Gamma/X-ray/Cosmic/Ultrasound → 3 categories)
  // Q3d: ²²⁶₈₈Ra→⁴₂He alpha; ¹⁴₆C→¹⁴₇N beta
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Physics & Radioactivity',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'isotopes', 'alpha and beta decay', 'gamma radiation and x-rays'], level: 'proficient' },
    stem: 'The diagram shows an atom of nitrogen-14, which has 7 protons and 7 neutrons.',
    figImages: [`${P}q3-nitrogen14-atom.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** the atomic number and mass number for this atom.',
        marks: 2,
        ph: 'Atomic number: 7\nMass number: 14',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**State** one similarity and one difference between a nucleus of nitrogen-13 and a nucleus of nitrogen-14.',
        marks: 2,
        ph: 'Similarity: both have the same number of protons (7) / same atomic number / same positive charge\nDifference: nitrogen-14 has one more neutron (7) than nitrogen-13 (6) / different mass number / nitrogen-13 is radioactively unstable',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Gamma rays and X-rays are both types of electromagnetic radiation. The key below shows where each type is produced. **Classify** each type of radiation by placing it in the correct category.\n\n• Gamma ray — produced from the nucleus of an atom\n• X-ray — produced from the inner orbits of electrons\n• Cosmic ray — produced outside the atom\n• Ultrasound wave — not EM radiation',
        marks: 2,
        figImages: [`${P}q3c-radiation-atom.png`],
        widget: 'variable_classify',
        widgetOptions: ['Gamma ray', 'X-ray', 'Cosmic ray', 'Ultrasound wave'],
        widgetItems: ['Produced from nucleus', 'Produced from inner electron orbit', 'Neither'],
        ph: 'Nucleus: Gamma ray\nInner electron orbit: X-ray\nNeither: Cosmic ray, Ultrasound wave',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Complete** the following two nuclear decay equations by filling in the missing values:\n\n²²⁶₈₈Ra → ²²²₈₆Rn + ?₂α\n\n¹⁴₆C → ?₇N + ⁰₋₁β',
        marks: 2,
        ph: 'Equation 1: alpha particle = ⁴₂He (mass number 226−222=4, atomic number 88−86=2 ✓)\nEquation 2: daughter nucleus = ¹⁴₇N (mass 14, atomic number 6+1=7)',
        level: 'proficient',
      },
      {
        label: 'e',
        text: '**Suggest** what is happening in the reaction shown below:\n\n¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁p',
        marks: 1,
        ph: 'A nitrogen-14 nucleus absorbs an alpha particle (helium-4 nucleus) to produce an oxygen-17 nucleus and a proton. This is a nuclear transmutation (artificial nuclear reaction).',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Ideal Gas & Boyle's Law Investigation (13 marks) Criterion B
  // V1: Piston in a cylinder
  // Q4b: variable_classify (same structure)
  // Q4c: radio_select correct=0 (increase)
  // Q4d: area=9.0×10⁻⁴ m², mass=1.8 kg, P_atm=100000 Pa
  //   ΔP=1.8×9.81/9.0×10⁻⁴=19620 Pa; Total=119620 Pa≈1.20×10⁵ Pa
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: "Ideal Gas & Boyle's Law",
    marks: 13,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['pressure and volume', "Boyle's law", 'gas laws', 'scientific investigation'], level: 'advanced' },
    stem: "A student investigates how the pressure on a fixed mass of gas affects its volume. They use a piston in a sealed cylinder, adding masses slowly to the top of the piston so that temperature remains constant. The cylinder is sealed so the amount of gas is fixed.",
    figImages: [`${P}q4-piston.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that this investigation could answer.',
        marks: 1,
        ph: 'How does the mass added to the piston affect the volume of gas in the cylinder? (or: How does pressure affect the volume of a fixed amount of gas at constant temperature?)',
        level: 'developing',
      },
      {
        label: 'b',
        text: '**Identify** the variables for this investigation.\n\n| Variable | Independent | Dependent | Control |\n|----------|-------------|-----------|--------|\n| Amount of gas in cylinder | | | |\n| Mass added to piston | | | |\n| Temperature | | | |\n| Volume of gas | | | |',
        marks: 2,
        widget: 'variable_classify',
        widgetOptions: ['Amount of gas in cylinder', 'Mass added to piston', 'Temperature', 'Volume of gas'],
        widgetItems: ['Independent', 'Dependent', 'Control'],
        ph: 'Independent: Mass added to piston\nDependent: Volume of gas\nControl: Amount of gas in cylinder, Temperature',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Select** the correct response to complete the sentence:\n\nWhen masses are added to the piston, the pressure will: [Select]',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['increase', 'decrease', 'stay the same'],
        ph: 'increase',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The piston has an area of **9.0 × 10⁻⁴ m²**. Atmospheric pressure is **100 000 Pa**. **Calculate** the total pressure on the gas in the cylinder when the mass applied is **1.8 kg**. Use **g = 9.81 N kg⁻¹**.',
        marks: 3,
        ph: 'ΔP = F/A = mg/A = (1.8 × 9.81) / (9.0 × 10⁻⁴)\n= 17.658 / 0.0009 = 19620 Pa\nTotal pressure = 19620 + 100000 = 119620 Pa ≈ 1.20 × 10⁵ Pa',
        level: 'advanced',
      },
      {
        label: 'e',
        text: 'The student calculated the pressure for each mass. They presented the processed data in two graphs below.\n\n**Use both graphs** to **describe** the relationship between pressure and volume of a gas.',
        marks: 2,
        figImages: [`${P}q4e-graphs.png`],
        ph: "As pressure increases, volume decreases. The relationship is non-linear (inverse) — as seen in the curved V vs P graph. This is consistent with Boyle's law: pressure and volume are inversely proportional at constant temperature.",
        level: 'proficient',
      },
      {
        label: 'f',
        text: "Another student multiplied pressure × volume (pV) and plotted the result. Boyle's law states that pV is constant at constant temperature. **Suggest** whether the graph supports Boyle's law. **Justify** your answer.",
        marks: 2,
        figImages: [`${P}q4f-pv-graph.png`],
        ph: "The graph broadly supports Boyle's law. The pV values are approximately constant (close to a horizontal line) across the range of pressures, with only small deviations likely due to experimental error.",
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Use the graph** in part (f) to **calculate** the volume of the gas when the pressure is **75 kPa**. Include a unit in your answer.',
        marks: 2,
        figImages: [`${P}q4f-pv-graph.png`],
        ph: 'Read the constant pV value from the graph (e.g. ≈ 11000 kPa·cm³).\nV = pV ÷ p = 11000 ÷ 75 ≈ 147 cm³\n(Accept 140–155 cm³)',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Balloon Temperature Investigation Design (17 marks) Criterion B
  // V1: Gas in balloon — temperature vs circumference (same structure, different framing)
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Gas in a Balloon: Temperature Investigation',
    marks: 17,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['kinetic theory', 'temperature and gas volume', 'experimental design'], level: 'advanced' },
    stem: 'A group of students decides to investigate the effect of temperature on the volume of a gas trapped inside a sealed balloon.\n\nThey make the following prediction:\n\n*"If the temperature of a fixed amount of gas inside a balloon increases, the circumference of the balloon will increase."*',
    figImages: [`${P}q5-balloon.png`],
    tasks: [
      {
        label: 'a',
        text: '**Use kinetic theory to explain** the prediction.',
        marks: 3,
        ph: 'As temperature increases, gas particles gain more kinetic energy and move faster. They collide with the inside of the balloon more frequently and with greater force per collision. This increases the outward pressure on the balloon walls, causing the elastic balloon to expand — so the circumference increases.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Directly measuring the volume of a balloon is difficult, so students measure the circumference instead.\n\n**Design** an experiment the students could use to carry out this investigation. They are provided with standard laboratory equipment including a water bath to control temperature. In your plan, you must include:\n\n• a research question\n• the independent, dependent and one control variable\n• a list of the equipment needed\n• a detailed method for collecting data\n• an explanation of how sufficient data will be collected\n• details of how to make the method safe',
        marks: 14,
        ph: 'Research question: How does temperature affect the circumference of a balloon containing a fixed amount of gas?\n\nIV: temperature of gas (°C)\nDV: circumference of balloon (cm)\nCV: amount of gas in balloon (same initial inflations)\n\nEquipment: balloon, tape measure or string and ruler, thermometer, water bath with heater, tongs, stopwatch, clamp stand\n\nMethod:\n1. Inflate balloon to fixed size; measure circumference with tape measure.\n2. Place in water bath at 20°C; wait 5 min for temperature equilibrium; measure circumference.\n3. Repeat at 30, 40, 50, 60, 70°C.\n4. Record temperature and circumference for each trial.\n5. Take 3 repeats at each temperature; calculate mean.\n\nSufficiency: ≥5 temperatures, 3 repeats, graph of circumference vs temperature.\n\nSafety: use tongs; do not exceed 80°C (balloon may burst); keep water away from electrical equipment.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Balloon Rocket & Newton's Laws (17 marks) Criterion C
  // V1: Same balloon-rocket structure; different diameter
  // Q6c: diameter = 10.5 cm → C = π×10.5 = 33.0 cm
  // Q6d: raw data includes 33.0 cm result; ascending order
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: "Balloon Rocket & Newton's Laws",
    marks: 17,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ["Newton's second law", "Newton's third law", 'data processing', 'hypothesis evaluation'], level: 'advanced' },
    stem: 'When the air inside an inflated balloon is released, the balloon accelerates along a string.',
    figImages: [`${P}q6-balloon-rocket.png`],
    tasks: [
      {
        label: 'a',
        text: "**Use Newton's laws** to **explain** the motion of the balloon along the string.",
        marks: 3,
        ph: "Newton's 3rd law: the balloon pushes air backwards; the air pushes the balloon forwards with an equal and opposite reaction force (action-reaction pair).\nNewton's 2nd law: the net (unbalanced) forward force causes the balloon to accelerate forward (F = ma).",
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Students investigate the distance travelled by a balloon along a string when inflated to different circumferences.\n\n**State** the research question the students are investigating.',
        marks: 1,
        ph: 'How does the circumference of a balloon affect the distance it travels along the string when released?',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The students inflate a balloon until its diameter is **10.5 cm**. **Calculate** the circumference of this balloon. Include a unit in your answer.',
        marks: 1,
        ph: 'Circumference = π × d = π × 10.5 = 33.0 cm\n(Accept 32.9–33.1 cm)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The students recorded their raw data in their notebook. **Organise and present** the data into a table, including the result from part (c) with an estimated distance of **1.15 m**.\n\nRaw data (unordered):\n- Circumference 28.5 cm → 0.75 m\n- Circumference 36.4 cm → 1.48 m\n- Circumference 44.2 cm → 2.85 m\n- Circumference 51.7 cm → 4.35 m\n- Circumference 55.3 cm → 5.72 m',
        marks: 4,
        ph: 'Table headers: Circumference / cm | Distance travelled / m\nData in ascending circumference order:\n28.5 | 0.75\n33.0 | 1.15 (from part c)\n36.4 | 1.48\n44.2 | 2.85\n51.7 | 4.35\n55.3 | 5.72\nUnits in headers only; consistent decimal places.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Before their investigation, the students suggested the following hypothesis:\n\n*"If the circumference of the balloon increases, then the distance travelled will increase because the net force will be greater with more air."*\n\nThe students plotted three different graphs of their data. **Use the graphs** to **describe** the relationship between circumference and distance, and **evaluate** the validity of their hypothesis.',
        marks: 3,
        figImages: [`${P}q6e-hypothesis-graphs.png`],
        ph: 'As circumference increases, distance increases — hypothesis direction is correct. However, the relationship is NOT directly proportional (Graph A does not pass through origin / is not straight). Graph C (distance vs circumference³) shows a straight line through origin, suggesting distance ∝ circumference³. Hypothesis is only partially valid: direction is correct but the direct-proportion claim is not supported.',
        level: 'advanced',
      },
      {
        label: 'f',
        text: 'The students want to extend their investigation. **Suggest** a new independent variable and two control variables for an extension investigation. The dependent variable (distance travelled) has been given.\n\n• Independent variable: ...\n• Dependent variable: distance travelled\n• Control variable 1: ...\n• Control variable 2: ...',
        marks: 3,
        ph: 'IV: temperature of the gas inside the balloon / type of gas / length of string\nCV1: circumference of balloon (same starting volume)\nCV2: length of straw attached to balloon (affects friction/drag)',
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Formulate** a hypothesis for the extension investigation described in part (f).',
        marks: 2,
        ph: 'If [IV] increases, then the distance travelled will [increase/decrease] because [scientific reasoning].\nE.g. If the temperature of the gas inside the balloon increases, the distance travelled will increase, because higher temperature → greater kinetic energy of gas → larger volume of gas released → greater net force on balloon.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Waves & Mobile Phone Communication (18 marks) Criterion C/D
  // V1: Different waveform period (T=2.0 s → f=0.50 Hz)
  // Q7b: radio_select 4 opts, correct=2 (C)
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Radio Communication',
    marks: 18,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['wave properties', 'frequency and period', 'radio waves', 'electromagnetic communication'], level: 'advanced' },
    stem: 'The frequency of any wave can be found from a graph of displacement against time.',
    tasks: [
      {
        label: 'a',
        text: 'The graph below shows a wave. **Calculate** the frequency of the waveform shown. Give your answer to two significant figures and include a unit.',
        marks: 3,
        figImages: [`${P}q7a-waveform.png`],
        ph: 'Period T = read from graph ≈ 2.0 s (one complete cycle)\nFrequency f = 1/T = 1/2.0 = 0.50 Hz\n(Answer to 2 s.f. with unit)',
        level: 'proficient',
      },
      {
        label: 'b',
        text: '**Select** the waveform with the **same frequency** as the waveform in part (a). Waveforms A–D are shown below.',
        marks: 1,
        figImages: [`${P}q7b-waveforms.png`],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'C',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Khalid and Sena are communicating using mobile phones. The phones send and receive information as radio waves. Different frequencies are used to transmit this information.\n\n**Put the following statements in order** to outline how the phone network works.',
        marks: 1,
        figImages: [`${P}q7-phone-network.png`],
        ph: "1. Khalid's voice is converted into an electrical signal by the microphone. The phone converts that signal into a radio wave.\n2. The radio wave is transmitted from Khalid's phone to tower A.\n3. Tower A sends the signal via fibre-optic cables to tower B, where it is converted to a radio wave again.\n4. Sena's phone receives the radio wave and converts it back into sound she can hear.",
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'Location data from mobile phones can be used in navigation apps and to track movements of individuals in public spaces.\n\nPeople in large gatherings can be tracked and this data can reveal where they live and other personal details.\n\n**Discuss and evaluate** the implications of mobile phone technology being used to track the locations and movements of individuals. In your answer, discuss:\n\n• the advantages and disadvantages of location tracking for an individual\n• the economic benefits of location tracking for a company\n• the positive and negative security implications for a country\n• an overall appraisal evaluating the points discussed',
        marks: 13,
        ph: 'Advantages for individual: navigation; fitness tracking; emergency location services; family safety.\nDisadvantages: loss of privacy; data sold without consent; risk of stalking; movements monitored.\n\nEconomic for companies: targeted advertising; consumer behaviour analytics; delivery optimisation; data as revenue.\n\nSecurity (positive): track criminals/terrorists; crowd monitoring for public safety; disaster response.\nSecurity (negative): mass surveillance; suppression of protest; data breach risks.\n\nConclusion: Benefits exist but significant privacy risks. Consent and regulation are key to balancing benefits and civil liberties.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Scientific Misinformation Online (8 marks) Criterion D
  // V1: Moon landing conspiracy theories and internet misinformation
  // topicCanonical and topicGroup preserved from source
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Scientific Misinformation Online',
    marks: 8,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['science and society', 'misinformation', 'internet and science communication'], level: 'advanced' },
    stem: 'Social media and internet communities allow people to share ideas rapidly. Some online communities promote the idea that the Apollo moon landings were faked by NASA — a claim that contradicts overwhelming scientific evidence.\n\nSome scientists and governments have suggested that platforms should automatically remove such scientifically inaccurate claims.\n\n**Discuss and evaluate** the benefits and limitations of controlling scientific information shared on the internet.',
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the benefits and limitations of controlling scientific information that is shared through the internet.',
        marks: 8,
        ph: 'Benefits of controlling:\n• Reduces spread of dangerous misinformation (e.g. moon landing denial may erode trust in all science)\n• Protects public understanding of evidence-based science\n• Prevents misinformation influencing policy decisions\n\nLimitations:\n• Who determines what is "correct" science? Scientific knowledge evolves — past consensus has been revised\n• Risk of censorship suppressing legitimate minority scientific views\n• Technically difficult and expensive to implement across all platforms\n• Governments could exploit content control to suppress inconvenient scientific findings\n• Undermines freedom of speech and open debate\n\nConclusion: Removal of clearly dangerous or false content has merit, but broad content control risks censorship. Labelling disputed content with the scientific consensus may be preferable to outright removal.',
        level: 'advanced',
      },
    ],
  },

]
