import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2023-v2/'

export const paperMeta = {
  id: 'physics-may-2023-v2',
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
  // V2: Working donkeys in agriculture (North African context)
  // Q1a: 6 km in 75 min → 6×60/75 = 4.8 km/h
  // Q1c: A=280 kg→2744 N, B=3920 N→400 kg
  // Q1e: h=18 m, t=8.0 s → ΔEp=400×9.8×18=70560 J, P=70560/8.0=8820 W=8.82≈8.8 kW
  // Q1f: 3.0 hp×746=2238 W; I=2238/230≈9.7 A
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
    stem: 'Donkeys have been used in agriculture across the world for thousands of years. They perform work by carrying loads and pulling ploughs. Physics can be used to analyse how they complete these tasks.',
    figImages: [`${P}q1-donkeys.png`],
    tasks: [
      {
        label: 'a',
        text: 'A donkey covers a distance of **6 km** in **75 minutes**. **Calculate** its speed in km per hour (km h⁻¹).',
        marks: 2,
        ph: 'Speed = distance ÷ time\n= 6 ÷ (75/60)\n= 6 × (60/75)\n= 4.8 km h⁻¹',
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
        text: 'The table below gives data about two donkeys A and B. **Calculate** the missing values. Use **g = 9.8 N kg⁻¹**.\n\n| Donkey | Mass / kg | Weight / N |\n|--------|-----------|------------|\n| A | 280 | ? |\n| B | ? | 3920 |',
        marks: 2,
        ph: 'Donkey A weight = 280 × 9.8 = 2744 N\nDonkey B mass = 3920 ÷ 9.8 = 400 kg',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Select** the correct terms to complete the energy transformation diagram for a donkey that starts from rest at the bottom of a hill, walks up the hill and then stops at the top.\n\nThe energy transformations are: [?] → [?] → [?]',
        marks: 1,
        widget: 'energy_chain',
        widgetOptions: ['Chemical potential energy', 'Gravitational potential energy', 'Elastic potential energy', 'Electrical energy', 'Kinetic energy'],
        ph: 'Chemical potential energy → Kinetic energy → Gravitational potential energy',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The hill in part (d) is **18 m** high. Using information from part (c) and the formula **ΔEₚ = mgΔh**, calculate the minimum power required for donkey B to reach this height in **8.0 s**. Give your answer in kW.',
        marks: 3,
        ph: 'ΔEp = mgΔh = 400 × 9.8 × 18 = 70560 J\nPower = ΔEp ÷ t = 70560 ÷ 8.0 = 8820 W = 8.82 kW ≈ 8.8 kW',
        level: 'advanced',
      },
      {
        label: 'f',
        text: 'Power is sometimes given in horsepower (hp), where **1.0 hp = 746 W**. A water desalination pump has a power of **3.0 hp** and operates at a voltage of **230 V**. **Calculate** the current the pump requires.',
        marks: 2,
        ph: 'Power = 3.0 × 746 = 2238 W\nI = P ÷ V = 2238 ÷ 230 = 9.73 A ≈ 9.7 A',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Light & EM Waves (7 marks) Criterion A
  // V2: Prism dispersion; wavelength 580 nm (yellow)
  // f = 3×10⁸ / (580×10⁻⁹) = 5.17×10¹⁴ Hz
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
    stem: 'When white light passes through a glass prism, it separates into the seven colours of the visible spectrum. This dispersion effect is used in many scientific instruments such as spectroscopes.',
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
        text: '**Explain** why yellow light appears in the middle of the visible spectrum produced by the prism. Use scientific terminology in your answer.',
        marks: 3,
        ph: 'Yellow light has a medium wavelength (around 580 nm) compared to the other colours. It is refracted by an intermediate amount — more than red (lower frequency, less refraction) but less than violet (higher frequency, more refraction). Yellow travels at an intermediate speed through the glass and is bent by a moderate angle at the surface.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Infrared (IR) waves exist just beyond red in the spectrum. Unlike yellow light, IR waves are not visible to the human eye. **State** one other difference between IR waves and yellow light.',
        marks: 1,
        ph: 'IR waves have a longer wavelength than yellow light / IR has a lower frequency / IR carries less energy per photon / IR can be detected as heat.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'In air, all colours of light travel at **3.00 × 10⁸ m s⁻¹**. **Calculate** the frequency of yellow light with a wavelength of **580 nm**. Give your answer in scientific notation.',
        marks: 2,
        ph: 'f = v ÷ λ = (3.00 × 10⁸) ÷ (580 × 10⁻⁹) = 5.17 × 10¹⁴ Hz',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Atomic Physics (9 marks) Criterion A
  // V2: Oxygen-18 atom (Z=8, A=18; 8p, 10n)
  // Q3c: same variable_classify structure
  // Q3d: ²¹⁰₈₄Po→⁴₂He alpha; ¹³¹₅₃I→¹³¹₅₄Xe beta
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
    stem: 'The diagram shows an atom of oxygen-18, which has 8 protons and 10 neutrons.',
    figImages: [`${P}q3-oxygen18-atom.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** the atomic number and mass number for this atom.',
        marks: 2,
        ph: 'Atomic number: 8\nMass number: 18',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**State** one similarity and one difference between a nucleus of oxygen-16 and a nucleus of oxygen-18.',
        marks: 2,
        ph: 'Similarity: both have the same number of protons (8) / same atomic number / same positive charge\nDifference: oxygen-18 has more neutrons (10) than oxygen-16 (8) / different mass number / oxygen-18 is more massive',
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
        text: '**Complete** the following two nuclear decay equations by filling in the missing values:\n\n²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ?₂α\n\n¹³¹₅₃I → ?₅₄Xe + ⁰₋₁β',
        marks: 2,
        ph: 'Equation 1: alpha particle = ⁴₂He (mass 210−206=4; atomic 84−82=2 ✓)\nEquation 2: daughter nucleus = ¹³¹₅₄Xe (mass 131, atomic number 53+1=54)',
        level: 'proficient',
      },
      {
        label: 'e',
        text: '**Suggest** what is happening in the reaction shown below:\n\n²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3¹₀n',
        marks: 1,
        ph: 'A neutron is absorbed by uranium-235, causing the nucleus to split (nuclear fission) into barium-141 and krypton-92, releasing 3 neutrons and a large amount of energy.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Ideal Gas & Boyle's Law Investigation (13 marks) Criterion B
  // V2: Gas in a sealed flask with weighted bung
  // Q4b: variable_classify same structure
  // Q4c: radio_select correct=0 (increase)
  // Q4d: area=5.0×10⁻⁴ m², mass=2.0 kg, P_atm=102000 Pa
  //   ΔP=2.0×9.81/5.0×10⁻⁴=39240 Pa; Total=141240 Pa≈1.41×10⁵ Pa
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
    stem: "A student investigates how the pressure on a fixed mass of gas in a sealed flask affects its volume. They apply increasing masses to a weighted bung fitted to the flask opening. Masses are added slowly so that temperature remains constant throughout.",
    figImages: [`${P}q4-flask.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that this investigation could answer.',
        marks: 1,
        ph: 'How does the mass applied to the bung affect the volume of gas in the flask? (or: How does pressure affect the volume of a fixed amount of gas at constant temperature?)',
        level: 'developing',
      },
      {
        label: 'b',
        text: '**Identify** the variables for this investigation.\n\n| Variable | Independent | Dependent | Control |\n|----------|-------------|-----------|--------|\n| Amount of gas in flask | | | |\n| Mass applied to bung | | | |\n| Temperature | | | |\n| Volume of gas | | | |',
        marks: 2,
        widget: 'variable_classify',
        widgetOptions: ['Amount of gas in flask', 'Mass applied to bung', 'Temperature', 'Volume of gas'],
        widgetItems: ['Independent', 'Dependent', 'Control'],
        ph: 'Independent: Mass applied to bung\nDependent: Volume of gas\nControl: Amount of gas in flask, Temperature',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Select** the correct response to complete the sentence:\n\nWhen masses are added to the bung, the pressure will: [Select]',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['increase', 'decrease', 'stay the same'],
        ph: 'increase',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The bung has an area of **5.0 × 10⁻⁴ m²**. Atmospheric pressure is **102 000 Pa**. **Calculate** the total pressure on the gas in the flask when the mass applied is **2.0 kg**. Use **g = 9.81 N kg⁻¹**.',
        marks: 3,
        ph: 'ΔP = F/A = mg/A = (2.0 × 9.81) / (5.0 × 10⁻⁴)\n= 19.62 / 0.0005 = 39240 Pa\nTotal pressure = 39240 + 102000 = 141240 Pa ≈ 1.41 × 10⁵ Pa',
        level: 'advanced',
      },
      {
        label: 'e',
        text: 'The student calculated the pressure for each mass. They presented the processed data in two graphs below.\n\n**Use both graphs** to **describe** the relationship between pressure and volume of a gas.',
        marks: 2,
        figImages: [`${P}q4e-graphs.png`],
        ph: "As pressure increases, volume decreases. The relationship is non-linear (inverse). The V vs P graph shows a curve, consistent with Boyle's law: pressure and volume are inversely proportional at constant temperature.",
        level: 'proficient',
      },
      {
        label: 'f',
        text: "Another student multiplied pressure × volume (pV) and plotted the result. Boyle's law states that pV is constant at constant temperature. **Suggest** whether the graph supports Boyle's law. **Justify** your answer.",
        marks: 2,
        figImages: [`${P}q4f-pv-graph.png`],
        ph: "The graph broadly supports Boyle's law. The pV values are approximately constant across the pressure range (close to a horizontal line), with small deviations attributable to experimental error.",
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Use the graph** in part (f) to **calculate** the volume of the gas when the pressure is **75 kPa**. Include a unit in your answer.',
        marks: 2,
        figImages: [`${P}q4f-pv-graph.png`],
        ph: 'Read constant pV value from the graph (e.g. ≈ 11000 kPa·cm³).\nV = pV ÷ p = 11000 ÷ 75 ≈ 147 cm³\n(Accept 140–155 cm³)',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Balloon Temperature Investigation Design (17 marks) Criterion B
  // V2: Gas in balloon — same structure, different framing
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
    stem: 'A group of students investigates how the volume of a gas trapped in a sealed balloon changes with temperature.\n\nThey make the following prediction:\n\n*"If the temperature of the gas inside the balloon increases, the balloon will expand and its circumference will increase."*',
    figImages: [`${P}q5-balloon.png`],
    tasks: [
      {
        label: 'a',
        text: '**Use kinetic theory to explain** the prediction.',
        marks: 3,
        ph: 'At higher temperatures, gas particles have greater kinetic energy and move faster. They collide with the inner walls of the balloon more often and with greater force per collision. The increased force expands the elastic balloon outward — so its volume and circumference increase.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Since measuring volume directly is difficult, students measure the circumference of the balloon as a proxy for volume.\n\n**Design** an experiment to carry out this investigation. Standard laboratory equipment, including a water bath, is available. In your plan, you must include:\n\n• a research question\n• the independent, dependent and one control variable\n• a list of the equipment needed\n• a detailed method for collecting data\n• an explanation of how sufficient data will be collected\n• details of how to make the method safe',
        marks: 14,
        ph: 'Research question: How does temperature affect the circumference of a balloon containing a fixed amount of gas?\n\nIV: temperature (°C)\nDV: circumference (cm)\nCV: amount of gas in balloon\n\nEquipment: balloon, tape measure, thermometer, water bath with heater, tongs, stopwatch\n\nMethod:\n1. Inflate balloon to fixed circumference; measure.\n2. Place in water bath at 20°C; equilibrate 5 min; measure circumference.\n3. Repeat at 30, 40, 50, 60, 70°C.\n4. Take 3 repeats; calculate mean at each temperature.\n\nSufficiency: ≥5 temperatures, 3 repeats each, graph of circumference vs temperature.\n\nSafety: use tongs; avoid overheating; do not exceed 80°C (balloon may burst).',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Balloon Rocket & Newton's Laws (17 marks) Criterion C
  // V2: Same structure; diameter = 15.0 cm → C = π×15.0 = 47.1 cm
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
    stem: 'When a balloon is inflated and the air is released, the balloon accelerates along a string threaded through a straw attached to it.',
    figImages: [`${P}q6-balloon-rocket.png`],
    tasks: [
      {
        label: 'a',
        text: "**Use Newton's laws** to **explain** the motion of the balloon along the string.",
        marks: 3,
        ph: "Newton's 3rd law: the balloon pushes air backwards; the air exerts an equal and opposite reaction force on the balloon, pushing it forward.\nNewton's 2nd law: the net forward force causes the balloon to accelerate (F = ma).",
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Students investigate how the circumference of the balloon affects the distance it travels along the string.\n\n**State** the research question the students are investigating.',
        marks: 1,
        ph: 'How does the circumference (or volume) of a balloon affect the distance it travels along the string when released?',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The students inflate a balloon until its diameter is **15.0 cm**. **Calculate** the circumference of this balloon. Include a unit in your answer.',
        marks: 1,
        ph: 'Circumference = π × d = π × 15.0 = 47.1 cm\n(Accept 47.0–47.2 cm)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The students recorded their raw data in their notebook. **Organise and present** the data into a table, including the result from part (c) with an estimated distance of **2.50 m**.\n\nRaw data (unordered):\n- Circumference 30.2 cm → 0.45 m\n- Circumference 38.6 cm → 1.20 m\n- Circumference 55.8 cm → 4.18 m\n- Circumference 62.5 cm → 6.20 m\n- Circumference 68.0 cm → 8.10 m',
        marks: 4,
        ph: 'Table headers: Circumference / cm | Distance travelled / m\nAscending circumference order:\n30.2 | 0.45\n38.6 | 1.20\n47.1 | 2.50 (from part c)\n55.8 | 4.18\n62.5 | 6.20\n68.0 | 8.10\nUnits in headers only; consistent decimal places.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Before their investigation, students suggested:\n\n*"If the circumference of the balloon increases, then the distance travelled will increase because the net force will be greater with a larger volume of air."*\n\nThe students plotted three different graphs. **Use the graphs** to **describe** the relationship between circumference and distance, and **evaluate** the validity of the hypothesis.',
        marks: 3,
        figImages: [`${P}q6e-hypothesis-graphs.png`],
        ph: 'As circumference increases, distance increases — hypothesis direction is supported. The relationship is not directly proportional (Graph A not linear). Graph C (distance vs circumference³) is a straight line through origin, suggesting distance ∝ circumference³. Hypothesis is partially valid: correct direction, but the assumption of direct proportion is not supported.',
        level: 'advanced',
      },
      {
        label: 'f',
        text: 'Students want to extend their investigation. **Suggest** a new independent variable and two control variables. The dependent variable (distance travelled) is given.\n\n• Independent variable: ...\n• Dependent variable: distance travelled\n• Control variable 1: ...\n• Control variable 2: ...',
        marks: 3,
        ph: 'IV: type of gas inside balloon (e.g. helium vs air vs CO₂)\nCV1: circumference of balloon (same starting volume)\nCV2: length of string / angle of string',
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Formulate** a hypothesis for the extension investigation described in part (f).',
        marks: 2,
        ph: 'If helium is used instead of air, the balloon will travel further because helium is less dense than air, so the balloon + gas system has less mass. For the same thrust force, less mass → greater acceleration (F = ma) → more distance.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Waves & Radio Communication (18 marks) Criterion C/D
  // V2: Different waveform (T = 1.6 s → f = 0.625 ≈ 0.63 Hz)
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
        ph: 'Period T = read from graph ≈ 1.6 s (one complete cycle)\nFrequency f = 1/T = 1/1.6 = 0.625 Hz ≈ 0.63 Hz\n(Answer to 2 s.f. with unit)',
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
        text: 'Marina and Tomas are communicating using mobile phones. The phones send and receive information as radio waves.\n\n**Put the following statements in order** to outline how the mobile phone network transmits the call.',
        marks: 1,
        figImages: [`${P}q7-phone-network.png`],
        ph: "1. Marina's voice is converted into an electrical signal by the microphone. The phone converts that into a radio wave.\n2. The radio wave is transmitted from Marina's phone to the nearest tower.\n3. The tower sends the signal via fibre-optic cables to the tower nearest to Tomas.\n4. Tomas's phone receives the radio wave and converts it to sound he can hear.",
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'Mobile phone networks track the location of phones in real time to route calls. This location data is also available to app developers, advertisers, and governments.\n\n**Discuss and evaluate** the implications of mobile phone technology being used to track the locations and movements of individuals. In your answer, discuss:\n\n• the advantages and disadvantages for an individual\n• the economic benefits for a company\n• the positive and negative security implications for a country\n• an overall appraisal evaluating the points discussed',
        marks: 13,
        ph: 'Advantages for individual: navigation, fitness tracking, emergency services, family safety.\nDisadvantages: loss of privacy, data sold, risk of stalking, surveillance without consent.\n\nEconomic for company: targeted advertising, logistics optimisation, consumer analytics, data monetisation.\n\nSecurity positive: tracking criminals, disaster response, public event safety.\nSecurity negative: authoritarian surveillance, suppression of protest, data breach risks.\n\nConclusion: Significant benefits but serious privacy risks. Regulation and user consent are essential to balance benefits with protection of civil liberties.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Scientific Misinformation Online (8 marks) Criterion D
  // V2: Climate change denial as alternative misinformation context
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
    stem: 'Social media allows rapid sharing of ideas globally. Some online communities promote ideas that contradict scientific consensus — for example, claims that Earth\'s climate has not been significantly affected by human activity, despite overwhelming scientific agreement on human-caused climate change.\n\nSome scientists and policymakers have suggested that scientific misinformation should be removed from social media platforms.\n\n**Discuss and evaluate** the benefits and limitations of controlling scientific information shared on the internet.',
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the benefits and limitations of controlling scientific information that is shared through the internet.',
        marks: 8,
        ph: 'Benefits of controlling:\n• Prevents spread of misinformation that could undermine public health or environmental policy\n• Protects scientific consensus and public trust\n• Reduces harmful consequences of people acting on false information\n\nLimitations:\n• Who decides what is correct science? Scientific consensus evolves — early climate data was disputed by legitimate scientists\n• Risk of suppressing valid scientific dissent or emerging minority views\n• Technically and economically difficult to implement at global scale\n• Governments may exploit control to suppress inconvenient data\n• Undermines freedom of expression and open academic debate\n\nConclusion: Removing clearly false and harmful content has merit. However, broad removal risks censorship. A more nuanced approach — clearly labelling disputed claims with the current scientific consensus — preserves free debate while protecting public understanding.',
        level: 'advanced',
      },
    ],
  },

]
