import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2023/'

export const paperMeta = {
  id: 'physics-may-2023',
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
  // Context: Horses performing farm work — rephrased: "draft horses clearing land"
  // Numbers changed: 3 km/45 min → 4 km/55 min; Horse B mass 510 kg → 480 kg; hill 12 m → 14 m; time 5.5 s → 6.2 s
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
    stem: 'Horses can perform work for farming activities. In the past, they were used to clear land before planting. Physics can be used to explore the ways in which horses complete these tasks.',
    figImages: [`${P}q1-horses.png`],
    tasks: [
      {
        label: 'a',
        text: 'A horse covers a distance of **4 km** in **55 minutes**. **Calculate** its speed in km per hour (km h⁻¹).',
        marks: 2,
        ph: 'Speed = distance ÷ time\n= 4 ÷ (55/60)\n= ... km h⁻¹',
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
        text: 'The table below gives some data about two horses A and B. **Calculate** the missing values and complete the table. You should assume the value of **g = 9.8 N kg⁻¹**.\n\n| Horse | Mass of horse / kg | Weight / N |\n|-------|-------------------|------------|\n| A | 350 | ? |\n| B | ? | 4704 |',
        marks: 2,
        ph: 'Horse A weight = mass × g = 350 × 9.8 = ... N\nHorse B mass = weight ÷ g = 4704 ÷ 9.8 = ... kg',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Select** the correct terms to complete the energy transformation diagram for a horse that starts from rest at the bottom of a hill, runs up the hill and then stops at the top of the hill.',
        marks: 1,
        widget: 'energy_chain',
        widgetOptions: ['Chemical potential energy', 'Gravitational potential energy', 'Elastic potential energy', 'Electrical energy', 'Kinetic energy'],
        ph: 'Chemical potential energy → Kinetic energy → Gravitational potential energy',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The hill in part (d) is **14 m** high. Using information from part (c) and the formula **ΔEₚ = mgΔh**, calculate the minimum power required for horse B to reach this height in **6.2 s**. You should give your answer in kW.',
        marks: 3,
        ph: 'Work done = ΔEp = mgΔh = (mass from c) × 9.8 × 14 = ... J\nPower = work done ÷ time = ... ÷ 6.2 = ... W = ... kW',
        level: 'advanced',
      },
      {
        label: 'f',
        text: 'The power of some modern devices is given in horsepower (hp), where **1.0 hp is equivalent to 746 W**. An example of such a device is an electric water pump. **Calculate** the current that would be needed by a water pump with a power of **2.0 hp** operating at a voltage of **230 V**.',
        marks: 2,
        ph: 'Power = 2.0 × 746 = 1492 W\nI = P ÷ V = 1492 ÷ 230 = ... A',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Light & Electromagnetic Waves (7 marks) Criterion A
  // Context: Newton's prism experiments — dispersion of white light
  // Numbers changed: wavelength 750 nm → 680 nm (red light)
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
    stem: 'Newton carried out experiments on light. Working in his darkened room, he directed white light through a glass prism, which separated the light into the seven colours we now know as the visible spectrum.',
    tasks: [
      {
        label: 'a',
        text: 'The image shows white light being separated into different colours. **Select** the term that best describes this process.\n\nA. Absorption\nB. Deflection\nC. Reflection\nD. Dispersion',
        marks: 1,
        figImages: [`${P}q2-prism.png`],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'D',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Explain** why red light is at the top of the image in part (a). You should use scientific terminology in your answer.',
        marks: 3,
        ph: 'Red light has the longest wavelength (or lowest frequency) of the visible colours.\nIt is refracted the least by the glass prism.\nRed light travels fastest through the glass (lowest refractive index), so it is bent the least at the glass surface.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Another scientist called Herschel detected infrared waves beyond the visible spectrum. Unlike red light, infrared waves are not visible to the human eye. **State** one other difference between infrared waves and red light.',
        marks: 1,
        ph: 'Infrared waves have a longer wavelength than red light / infrared has a lower frequency / infrared is detectable as heat.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'In air, all the colours of light in the spectrum travel at a speed of **3.00 × 10⁸ m s⁻¹**. **Calculate** the frequency of red light with a wavelength of **680 nm**. You should use scientific notation in your answer.',
        marks: 2,
        ph: 'f = v ÷ λ\n= (3.00 × 10⁸) ÷ (680 × 10⁻⁹)\n= ... × 10¹⁴ Hz',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Atomic Physics (9 marks) Criterion A
  // Context: Carbon-14 atom, radiation types, nuclear decay equations
  // Numbers/details kept (historical/scientific facts)
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
    stem: 'The diagram shows an atom of carbon-14, which has 6 protons and 8 neutrons.',
    figImages: [`${P}q3-carbon14-atom.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** the atomic number and mass number for this atom.',
        marks: 2,
        ph: 'Atomic number: ...\nMass number: ...',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**State** one similarity and one difference between a nucleus of carbon-12 and a nucleus of carbon-14.',
        marks: 2,
        ph: 'Similarity: both nuclei have the same number of protons / same positive charge\nDifference: carbon-14 has more neutrons (8) than carbon-12 (6) / carbon-14 has more nucleons / carbon-14 is radioactively unstable',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Gamma rays and X-rays are both types of electromagnetic radiation. The key below shows where each type is produced. **Classify** each type of radiation by dragging it to the correct location on the atom diagram.\n\n• Gamma ray — produced from the nucleus of an atom\n• X-ray — produced from inner orbit of electrons\n• Cosmic ray — produced outside the atom (drag to tray)\n• Ultrasound wave — not EM radiation (drag to tray)',
        marks: 2,
        figImages: [`${P}q3c-radiation-atom.png`],
        widget: 'variable_classify',
        widgetOptions: ['Gamma ray', 'X-ray', 'Cosmic ray', 'Ultrasound wave'],
        widgetItems: ['Produced from nucleus', 'Produced from inner electron orbit', 'Neither'],
        ph: 'Produced from nucleus: Gamma ray\nProduced from inner electron orbit: X-ray\nNeither: Cosmic ray, Ultrasound wave',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Complete** the following two nuclear decay equations by filling in the missing values:\n\n²³⁸₉₂U → ²³⁴₉₀Th + ?₂α\n\n²³²₉₀Th → ?₉₁Pa + ⁰₋₁β',
        marks: 2,
        ph: 'Equation 1: α particle is ⁴₂He, so the alpha particle is ⁴₂α ✓\nEquation 2: ²³²₉₁Pa (mass number 232, atomic number 91)',
        level: 'proficient',
      },
      {
        label: 'e',
        text: '**Suggest** what is happening in the reaction shown below that results in the formation of a uranium-239 nucleus:\n\n²³⁸₉₂U + ¹₀n → ²³⁹₉₂U',
        marks: 1,
        ph: 'A neutron is absorbed by the nucleus of uranium-238 to form uranium-239.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Ideal Gas & Boyle's Law Investigation (13 marks) Criterion B/C
  // Context: Student adds masses to syringe plunger; temperature constant
  // Numbers changed: area 7.8×10⁻⁴ → 8.2×10⁻⁴ m²; mass 1.2 kg → 1.4 kg; atm pressure 100300 → 101300 Pa
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Ideal Gas & Boyle\'s Law',
    marks: 13,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['pressure and volume', 'Boyle\'s law', 'gas laws', 'scientific investigation'], level: 'advanced' },
    stem: 'The pressure, volume and temperature of a gas are related. The ideal gas law describes the relationship between them.\n\nA student decides to investigate the effect of adding masses to the volume of air in a syringe. The student adds the masses slowly so that the temperature of the air in the syringe remains constant. The tip of the syringe is sealed so that the amount of air is constant. Masses are added and the plunger is pushed downwards, compressing the air in the syringe.',
    figImages: [`${P}q4-syringe.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** the research question that could be answered by this scientific investigation.',
        marks: 1,
        ph: 'How does the mass added to the plunger affect the volume of air in the syringe? (or: How does pressure affect the volume of a fixed amount of gas at constant temperature?)',
        level: 'developing',
      },
      {
        label: 'b',
        text: '**Identify** the variables for this investigation.\n\n| Variable | Independent | Dependent | Control |\n|----------|-------------|-----------|--------|\n| Amount of air in the syringe | | | |\n| Mass added to plunger | | | |\n| Temperature | | | |\n| Volume of air | | | |',
        marks: 2,
        widget: 'variable_classify',
        widgetOptions: ['Amount of air in the syringe', 'Mass added to plunger', 'Temperature', 'Volume of air'],
        widgetItems: ['Independent', 'Dependent', 'Control'],
        ph: 'Independent: Mass added to plunger\nDependent: Volume of air\nControl: Amount of air in syringe, Temperature',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Select** the correct response to complete the sentence:\n\nWhen masses are added to the plunger, the pressure will: [Select]',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['increase', 'decrease', 'stay the same'],
        ph: 'increase',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The plunger has an area of **8.2 × 10⁻⁴ m²**. Atmospheric pressure is **101 300 Pa**. **Calculate** the total pressure on the air in the syringe if the mass applied is **1.4 kg**. You should assume the value of **g = 9.81 N kg⁻¹**.',
        marks: 3,
        ph: 'Increase in pressure = F ÷ A = (mg) ÷ A = (1.4 × 9.81) ÷ (8.2 × 10⁻⁴)\n= 13.734 ÷ 8.2×10⁻⁴\n= 16748 Pa (or 1.67 × 10⁴ Pa)\nTotal pressure = 16748 + 101300 = 118048 Pa ≈ 1.18 × 10⁵ Pa',
        level: 'advanced',
      },
      {
        label: 'e',
        text: 'The student calculated the pressure for each of the masses used. They presented the processed data in the graphs below.\n\n**Use both graphs** above to **describe** the relationship between pressure and volume of a gas.',
        marks: 2,
        figImages: [`${P}q4e-graphs.png`],
        ph: 'As the pressure increases, the volume decreases. The relationship is an inverse (non-linear) relationship — as seen in the curved line of the V vs P graph. The volume is inversely proportional to the pressure (Boyle\'s law).',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'Another student decided to multiply pressure by volume (pV) and presented this on the graph below.\n\nBoyle\'s law states that pV is constant for a fixed amount of gas at constant temperature. **Suggest** whether the graph supports Boyle\'s law. **Justify** your answer.',
        marks: 2,
        figImages: [`${P}q4f-pv-graph.png`],
        ph: 'The graph (does / does not) fully support Boyle\'s law.\nJustification: The pV values are approximately constant (close to horizontal line) across the range of pressures, but there is a slight slope / the value is not perfectly constant. Within experimental error, the data supports Boyle\'s law.',
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Use the graph** in part (f) to **calculate** the volume of the gas when the pressure is **75 kPa**. You should include a unit in your answer.',
        marks: 2,
        ph: 'From the pV graph, read the approximate constant pV value (e.g. ≈ 11000 kPa·cm³).\nV = pV ÷ p = 11000 ÷ 75 = ... cm³\n(Accept answer in range 140–150 cm³)',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Balloon Temperature Investigation Design (17 marks) Criterion B
  // Context: Gas in balloon — temperature affects circumference
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
    stem: 'Another group of students decides to use balloons to investigate the relationship between the volume of a gas and its temperature.\n\nThey make the following prediction:\n\n*"If the temperature of a fixed amount of gas inside a balloon increases, the volume of the balloon will increase."*',
    figImages: [`${P}q5-balloon.png`],
    tasks: [
      {
        label: 'a',
        text: '**Use kinetic theory to explain** the prediction.',
        marks: 3,
        ph: 'As temperature increases, the kinetic energy (and speed) of the gas particles increases.\nThe particles collide with the walls of the balloon more frequently and with greater force.\nThis increases the pressure on the balloon walls, causing the elastic balloon to expand outwards — so the volume increases.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Measuring the volume of a balloon directly is difficult. The students plan to measure the circumference of the balloon instead of measuring its volume.\n\n**Design** an experiment that the students could use to carry out this investigation. They are provided with standard laboratory equipment, including an oven to change the temperature. In your plan, you must include:\n\n• a research question\n• the independent, dependent and one control variable\n• a list of the equipment they will need\n• a detailed method for collecting data\n• an explanation of how the students will collect sufficient data\n• details of how they will make sure that the method is safe',
        marks: 14,
        ph: 'Research question: How does temperature affect the circumference of a balloon containing a fixed amount of gas?\n\nIndependent variable: temperature of the gas inside the balloon (°C)\nDependent variable: circumference of the balloon (cm)\nControl variable: amount of gas in the balloon (same number of inflations / same initial volume)\n\nEquipment: balloon, string or tape measure, ruler/metre stick, oven, thermometer, ice bath, clamp stand, stopwatch\n\nMethod:\n1. Inflate the balloon to a fixed circumference at room temperature; measure and record the initial circumference using a tape measure.\n2. Place the balloon in a water bath set to a known temperature (e.g. 20°C). Wait 5 min for equilibrium. Measure circumference.\n3. Repeat at temperatures: 30, 40, 50, 60, 70°C by heating the water bath or using the oven.\n4. Record temperature and circumference for each trial.\n5. For safety: do not overheat the balloon; use tongs when handling hot water; do not exceed 80°C as balloon may burst.\n\nSufficient data: take at least 5 different temperature values; repeat each measurement 3 times and calculate the mean.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Balloon Rocket & Newton's Laws (17 marks) Criterion C
  // Context: Balloon rocket along string; circumference vs distance
  // Numbers changed: circumference values slightly adjusted
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Balloon Rocket & Newton\'s Laws',
    marks: 17,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['Newton\'s second law', 'Newton\'s third law', 'data processing', 'hypothesis evaluation'], level: 'advanced' },
    stem: 'When the air inside an inflated balloon is released, the balloon accelerates forward.',
    figImages: [`${P}q6-balloon-rocket.png`],
    tasks: [
      {
        label: 'a',
        text: '**Use Newton\'s laws** to **explain** the motion of the balloon.',
        marks: 3,
        ph: 'Newton\'s 2nd law: there is a net (unbalanced) force acting on the balloon. F = ma — the expelled air exerts a thrust force on the balloon, causing it to accelerate.\nNewton\'s 3rd law: the balloon pushes air backwards; the air pushes the balloon forwards with an equal and opposite reaction force. The expulsion of gas and the thrust on the balloon are an action-reaction pair.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'A group of students decide to investigate the distance travelled by a balloon filled with different volumes of air. They use a drinking straw attached to the balloon and thread it along a string.\n\n**State** the research question that the students are investigating.',
        marks: 1,
        ph: 'How does the circumference (or volume) of air in the balloon affect the distance it travels along the string?',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The students inflate a balloon until its diameter is **12.2 cm**. **Calculate** the circumference of this balloon. You should include a unit in your answer.',
        marks: 1,
        ph: 'Circumference = π × d = π × 12.2 = 38.3 cm\n(Accept answers in range 38.2–38.4 cm)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The students recorded their raw data in their notebook as shown below. **Organise and present** the data from the experiment into a table, including the result from part (c).\n\nRaw data (unordered):\n- Circumference 35.8 cm → 1.07 m\n- Circumference 41.0 cm → 1.97 m\n- Circumference 50.3 cm → 3.10 m\n- Circumference 54.9 cm → 3.99 m\n- Circumference 58.2 cm → 5.06 m',
        marks: 4,
        ph: 'Table with headers: Circumference / cm | Distance travelled / m\nData in ascending order of circumference:\n35.8 | 1.07\n38.3 | 1.30 (from part c)\n41.0 | 1.97\n50.3 | 3.10\n54.9 | 3.99\n58.2 | 5.06\nUnits only in column headers; data to consistent decimal places.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Before their investigation, the students suggested the following hypothesis:\n\n*"If the circumference of the balloon increases, then the distance travelled will increase because the resultant or net force will be greater with an increased volume of air."*\n\nThe students plotted three different graphs of their data below. **Use the graphs** to **describe** the relationship between pressure and volume of a gas and evaluate the validity of their hypothesis.',
        marks: 3,
        figImages: [`${P}q6e-hypothesis-graphs.png`],
        ph: 'The graphs show that as circumference increases, the distance travelled increases (positive relationship — hypothesis is partially valid on direction).\nHowever, the relationship is NOT directly proportional (Graph A) — the data fits better with circumference cubed (Graph C shows a straight line through origin), suggesting distance ∝ circumference³.\nThe hypothesis is therefore only partially valid: direction is correct but the "directly proportional" claim is not supported.',
        level: 'advanced',
      },
      {
        label: 'f',
        text: 'The students wanted to extend their investigation. **Suggest** variables that the students could use to extend this investigation. The dependent variable has been completed for you.\n\n• Independent variable: ...\n• Dependent variable: distance travelled\n• Control variable 1: ...\n• Control variable 2: ...',
        marks: 3,
        ph: 'Independent variable: temperature of the gas inside the balloon / type of gas / shape of the balloon\nControl variable 1: length of straw attached to balloon (affects drag/friction)\nControl variable 2: angle of the string / circumference of balloon (consistent starting volume)',
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Formulate** a hypothesis that your extension in part (f) would test.',
        marks: 2,
        ph: 'If [the independent variable you chose] increases, then the distance travelled will [increase/decrease] because [scientific reasoning linking IV to net force or energy].',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Waves & Mobile Phone Communication (18 marks) Criterion C/D
  // Context: Wave properties + radio waves + mobile phone location tracking
  // Numbers changed: wave period ~1.7s → 2.4s for fresh calculation
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
    stem: 'The frequency of any wave can be found from a graph of the wave position against time.',
    tasks: [
      {
        label: 'a',
        text: 'The student plotted this data on a graph. **Calculate** the frequency of the waveform shown below. Give your answer to two significant figures and include a unit.',
        marks: 3,
        figImages: [`${P}q7a-waveform.png`],
        ph: 'Period T = read from graph (one complete wave cycle) ≈ ... s\nFrequency f = 1/T = 1/... = ... Hz\nAnswer to 2 s.f. with unit: ... Hz',
        level: 'proficient',
      },
      {
        label: 'b',
        text: '**Select** the waveform with the same frequency as the waveform in part (a).',
        marks: 1,
        figImages: [`${P}q7b-waveforms.png`],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'C',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Pedro and Natasha are communicating using mobile phones. The phones send and receive information in the form of radio waves. Different frequencies are used to transmit this information.\n\nThe animation below shows a simplified view of the mobile phone network that is used. **Put the following statements in order** to outline the process taking place in the animation.',
        marks: 1,
        figImages: [`${P}q7-phone-network.png`],
        ph: '1. Pedro\'s voice is converted into an electrical signal by the microphone in his mobile phone. The phone then converts that electrical signal into a radio wave.\n2. The radio wave signal is transmitted from the mobile phone to tower A.\n3. Tower A receives the signal, then sends the signal out through a connection using wires or fibre-optic cables to Tower B, where the signal is converted again.\n4. Natasha\'s phone receives the radio wave signal and converts it back into a sound wave that she can hear.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The use of radio waves enables high-speed communication, but the technology requires the location of the phone to be detectable. This has consequences for security and data protection.\n\nLocation data can be used in navigation apps and fitness trackers. Even applications not directly used in navigation can track the location of the phone and map the movements of the user.\n\nPeople in large gatherings can be tracked and this information can be used to identify where they live and other personal details.\n\n**Discuss and evaluate** the implications of mobile phone technology being used to track the locations and movements of individuals. In your answer, you should discuss:\n\n• the advantages and disadvantages of location-tracking technology for an individual\n• the economic benefits of location-tracking technology for a company\n• the positive and negative security implications of location-tracking technology for a country\n• an overall appraisal in which you evaluate the points discussed',
        marks: 13,
        ph: 'Advantages for individual: navigation/directions; fitness tracking; finding lost devices; emergency services can locate you; family safety apps.\nDisadvantages for individual: loss of privacy; personal data can be sold without consent; movements monitored without knowledge; risk of stalking or targeted crime.\n\nEconomic benefits for companies: targeted advertising using location data; better understanding of consumer behaviour; logistics and delivery optimisation; data sold as a commodity generating revenue.\n\nSecurity implications (positive): governments can track terrorists and criminals; crowd monitoring helps public safety; tracking can help in natural disasters to locate survivors.\nSecurity implications (negative): authoritarian governments can suppress protest movements; mass surveillance undermines democratic freedoms; data breaches expose sensitive movements of citizens.\n\nAppraisal/conclusion: Location tracking has genuine benefits for individuals and companies but poses significant risks to privacy and civil liberties. The key issue is consent and regulation — with appropriate laws, the benefits can be retained while protecting individuals from misuse.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Controlling Scientific Information Online (8 marks) Criterion D
  // Context: Flat Earth conspiracy theories, internet misinformation
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Controlling Scientific Information Online',
    marks: 8,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['science and society', 'misinformation', 'internet and science communication'], level: 'advanced' },
    stem: 'The ability of modern mobile phones to access the internet has influenced the way that people communicate. On the internet, people tend to communicate with other people that have the same ideas as they do, which can reinforce opinions that may not be logical or scientifically accurate.\n\nSome people think that this kind of communication has led to an increase in the number of people believing in conspiracy theories. One such idea is the flat-Earth theory.\n\nSome people have suggested that any scientific information that is shared through the internet should be checked for accuracy. Information that is incorrect or misleading should be removed.\n\n**Discuss and evaluate** the benefits and limitations of controlling scientific information that is shared through the internet.',
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the benefits and limitations of controlling scientific information that is shared through the internet.',
        marks: 8,
        ph: 'Benefits of controlling:\n• Reduces spread of dangerous misinformation (e.g. anti-vaccine content, flat-Earth claims)\n• Protects public trust in scientific consensus\n• Prevents health harms caused by false medical advice\n• Ensures people have access to reliable, evidence-based information\n\nLimitations of controlling:\n• Who decides what counts as correct science? Scientific consensus changes over time (e.g. plate tectonics was once dismissed)\n• Risk of censorship — legitimate scientific debate could be suppressed\n• Difficult and expensive to implement at scale across all platforms\n• Could be used by governments to suppress inconvenient scientific findings (e.g. climate data)\n• Undermines freedom of speech and open scientific debate\n\nConclusion: There is a genuine case for removing clearly false and harmful content, but broad content control raises serious risks of censorship. A balanced approach — labelling disputed content with scientific consensus rather than removal — may better serve both accuracy and open debate.',
        level: 'advanced',
      },
    ],
  },

]
