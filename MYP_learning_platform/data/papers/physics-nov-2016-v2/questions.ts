import type { Question } from '@/lib/types'

const P = '/images/papers/physics-nov-2016-v2/'

export const paperMeta = {
  id: 'physics-nov-2016-v2',
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
  // V2: Peregrine falcon, 840 km in 24 h → 35 km h⁻¹
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Peregrine Falcon Migration & Motion',
    marks: 10,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['speed and velocity', 'velocity-time graphs', "Newton's second law"], level: 'proficient' },
    stem: 'Some birds migrate every autumn, some fly to cooler countries and some fly to warmer countries. The peregrine falcon is one of the fastest birds on Earth and undertakes impressive seasonal migrations of thousands of kilometres. Scientists track these journeys using lightweight GPS transmitters attached to the birds.',
    figImages: [`${P}q1-peregrine-falcon.png`],
    tasks: [
      {
        label: 'a',
        text: 'One peregrine falcon flies **840 km** in a day. **Calculate** the speed in km h⁻¹ (in kilometres per hour).',
        marks: 1,
        ph: 'Speed = distance / time = 840 / 24 = ... km h⁻¹',
      },
      {
        label: 'b',
        text: 'Scientists fit lightweight GPS transmitters to 12 peregrine falcons at their nesting sites in Mongolia. Later, the scientists use the information from the GPS transmitters and calculate that the average speed of the birds is 42 km h⁻¹.\n\n**Outline** two factors that may affect the average speed achieved by the peregrine falcon.',
        marks: 2,
        ph: 'Factor 1:\nFactor 2:',
      },
      {
        label: 'c',
        text: 'The graph below shows part of a different migrating bird\'s journey. Between points B and C on the graph, the bird travels at **constant velocity**.\n\n**Select** the appropriate diagram which represents the forces acting between points B and C on the graph.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Diagram 1', 'Diagram 2', 'Diagram 3', 'Diagram 4'],
        figImages: [`${P}vtgraph-q1.png`, `${P}forcediagrams-q1c.png`],
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
  // V2: Whale sound communication, speed = 1480 m s⁻¹ in ocean
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
    stem: 'These animations show the two different types of wave moving along springs — a transverse wave and a longitudinal wave. Infrasound is a low frequency longitudinal wave that blue whales and fin whales use to communicate with each other across vast distances. The frequency of infrasound waves is lower than 20 Hz. Infrasound waves travel through ocean water at a speed of 1480 m s⁻¹.',
    nativeContent: 'wave_animations',
    tasks: [
      {
        label: 'a',
        text: '**Label** the two diagrams shown above to identify each of the following wave properties. Drag each label to the correct position on the diagram:\n\n(i) wavelength\n(ii) amplitude\n(iii) compression\n(iv) rarefaction',
        marks: 2,
        widget: 'wave_label_drag_drop',
        ph: '(i) Wavelength: ...\n(ii) Amplitude: ...\n(iii) Compression: ...\n(iv) Rarefaction: ...',
      },
      {
        label: 'b',
        text: 'Sound waves can be represented on a computer. The image shows waves recorded on a computer from four different sources (A, B, C and D). The time axis shows 1 second total.\n\n**Calculate** the frequency of wave A.',
        marks: 1,
        figImages: [`${P}oscilloscope-q2.png`],
        ph: 'Frequency = number of complete cycles per second\nCount cycles of wave A in 1 second: ...\nf = ... Hz',
      },
      {
        label: 'c',
        text: 'Looking at the four waves A, B, C and D shown on the computer display, **identify** which two waves have the same frequency.',
        marks: 1,
        figImages: [`${P}oscilloscope-q2.png`],
        ph: 'The two waves with the same frequency are ... and ...',
      },
      {
        label: 'd',
        text: 'The speed of sound in ocean water is 1480 m s⁻¹.\n\n**Calculate** the wavelength of wave C. Show your working and include the unit.',
        marks: 2,
        figImages: [`${P}oscilloscope-q2.png`],
        ph: 'First find frequency of wave C from the graph: f = ... Hz\nThen use v = fλ → λ = v/f = 1480 / ... = ... m',
      },
      {
        label: 'e',
        text: 'Infrasound waves have a frequency of less than 20 Hz. Use your answers above to **identify** which wave (A, B, C or D) does **not** show infrasound.',
        marks: 1,
        figImages: [`${P}oscilloscope-q2.png`],
        ph: 'Wave ... does not show infrasound because its frequency is ... Hz, which is [above/below] 20 Hz.',
      },
      {
        label: 'f',
        text: 'Whales use infrasound as the waves travel very long distances through the ocean. The diagram shows whales on opposite sides of an underwater mountain range.\n\n**Explain** how the group of whales on the other side of the underwater mountain range can hear the whale.',
        marks: 3,
        figImages: [`${P}page-18.png`],
        ph: 'The infrasound waves undergo...\nThis happens because the wavelength is...\nAs a result, the waves...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Refraction of Light (5 marks) Criterion A
  // V2: Same 3 materials (Air/Glass/Water), different diagram context
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
    stem: 'A ray of light travels from one material to another. The diagram shows the ray passing from above through three different transparent materials stacked vertically. The table shows the refractive indices of common materials:\n\n| Material | Refractive index (n) |\n|----------|---------------------|\n| Air      | 1.00                |\n| Glass    | 1.50                |\n| Water    | 1.33                |',
    figImages: [`${P}page-21.png`],
    tasks: [
      {
        label: 'a',
        text: 'Use the data and diagram to **identify** each of the materials the ray passes through. Drag each material to the correct layer.',
        marks: 2,
        widget: 'refraction_label_drag_drop',
        widgetItems: ['Air', 'Glass', 'Water'],
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
  // V2: Ebonite rod rubbed with fur; paper scraps and balloon context
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
    stem: 'Most materials are electrically neutral; they contain equal numbers of charged particles. An animation shows that if an animal fur is used to rub an ebonite rod, the rod becomes negatively charged.',
    figImages: [`${P}page-22.png`, `${P}page-25.png`],
    tasks: [
      {
        label: 'a',
        text: '**Select** an appropriate charge for each particle below.',
        marks: 1,
        widget: 'inline_dropdown_select',
        widgetItems: ['Electron', 'Proton', 'Neutron'],
        widgetOptions: ['+1', '0', '-1'],
        ph: 'Electron: ...\nProton: ...\nNeutron: ...',
      },
      {
        label: 'b',
        text: 'Use the animation to **explain** the process by which the ebonite rod becomes negatively charged when rubbed with fur.',
        marks: 3,
        ph: 'When the fur rubs the rod, ... are transferred...\nThe rod gains...\nThis makes the rod negatively charged because...',
      },
      {
        label: 'c',
        text: 'Mia rubs a balloon against her woollen jumper. The balloon becomes electrically charged. Small pieces of dry tissue paper on a table nearby are attracted towards the balloon. The pieces of tissue paper are initially uncharged.\n\nUsing the concept of induction, **suggest** why the tissue paper pieces are attracted to the balloon.',
        marks: 4,
        ph: 'The balloon becomes charged because...\nThe tissue paper is initially uncharged, but...\nInduction causes...\nThe tissue paper is attracted because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Thermal Insulation Investigation (13 marks) Criterion B
  // V2: Aluminium foil wrapping investigation
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
    stem: 'Kofi carries ice cream home from the shops. On hot days, he finds that much of the ice cream has melted before he gets home. He lives 15 minutes away from the shops. Kofi decides to investigate a solution to this problem. He has read that wrapping foods in aluminium foil can help keep them cold.\n\nKofi uses standard blocks of ice, each with mass of 100 g, to model the melting of the ice cream. He decides to investigate how the number of layers of aluminium foil wrapped around the block affects the mass of ice that has melted.',
    figImages: [`${P}page-27.png`],
    tasks: [
      {
        label: 'a',
        text: 'This question is about heat transfer.\n\n**List** the three ways that heat is transferred.',
        marks: 3,
        ph: '1.\n2.\n3.',
      },
      {
        label: 'b',
        text: 'Other than ice and aluminium foil, **suggest** and **justify** one additional piece of equipment that Kofi will need to perform this experiment.',
        marks: 2,
        ph: 'Equipment: ...\nJustification: ...',
      },
      {
        label: 'c',
        text: '**Suggest** and **justify** a hypothesis for this experiment.',
        marks: 2,
        ph: 'Hypothesis: As the number of layers of aluminium foil increases, the mass of ice melted will...\nJustification: This is because...',
      },
      {
        label: 'd',
        text: '**State** one variable that Kofi needs to control. **Describe** how and why this variable should be controlled.',
        marks: 3,
        ph: 'Variable: ...\nHow it should be controlled: ...\nWhy it should be controlled: ...',
      },
      {
        label: 'e',
        text: '**Explain** what results Kofi needs to collect to ensure that he has sufficient relevant data.',
        marks: 3,
        ph: 'Kofi should measure...\nHe should test at least ... different values of...\nHe should repeat each measurement ... times because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Cup Cooling Investigation (9 marks) Criterion C
  // V2: Different data table (same inconsistencies)
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Cup Cooling Investigation',
    marks: 9,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['conduction', 'specific heat capacity', 'thermal equilibrium'], level: 'proficient' },
    stem: 'Another student, Marcus, finds that his mug of tea cools down too quickly in his kitchen. He wonders if a thicker mug would help keep his drink warm for longer.\n\nMarcus formulates the hypothesis: "The thicker the mug, the longer the tea will take to cool down because heat will take longer to transfer through the thicker material of the mug."\n\nHe finds mugs of different thicknesses. He fills each mug with tea to the same level and times how long it takes for the tea to cool from 78 °C to 52 °C in each mug. His results are:\n\n| Thickness of mug / mm | Time taken to cool from 78 °C to 52 °C / min |\n|---|---|\n| 1 | 15 |\n| 3 | 22 |\n| 5 | 7  |\n| 5 | 18 |\n| 7 | 12 |',
    figImages: [`${P}page-33.png`, `${P}page-34.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** and **justify** whether the results of Marcus\'s investigation support his hypothesis.',
        marks: 1,
        ph: 'The results [do / do not] support the hypothesis because...',
      },
      {
        label: 'b',
        text: '**Identify** four weaknesses in Marcus\'s method. For each of the weaknesses, **explain** how his investigation was affected. Use scientific knowledge and understanding in your answer.',
        marks: 8,
        ph: 'Weakness 1: ...\nHow this affected the investigation: ...\n\nWeakness 2: ...\nHow this affected the investigation: ...\n\nWeakness 3: ...\nHow this affected the investigation: ...\n\nWeakness 4: ...\nHow this affected the investigation: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Radiation Investigation (21 marks) Criterion B
  // V2: Beta radiation, glass manufacturing factory context
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
    stem: 'Developments in the understanding of atomic physics have led to many useful applications in industry, medicine and technology. Through understanding patterns in the properties of alpha (α), beta (β) and gamma (γ) radiation, scientists have developed ways in which the specific properties may be used.\n\nOne useful property is the difference in the penetration of the three types of radiation. The diagram shows the penetration of alpha, beta and gamma radiation through paper, aluminium and lead.\n\nThe amount of beta radiation absorbed depends on the thickness of the materials. This property of beta radiation is used to monitor the thickness of glass sheets produced in a glass manufacturing factory — a sensor adjusts rollers based on data from the detector.',
    nativeContent: 'radiation_q7',
    tasks: [
      {
        label: 'a',
        text: 'Your task is to design an investigation to determine how the thickness of glass sheets affects the amount of beta radiation absorbed.\n\n**State** the independent and dependent variables in your investigation.',
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
        text: '**Write** a hypothesis for this investigation that describes the expected relationship between the thickness of glass and the intensity of beta radiation detected.',
        marks: 2,
        ph: 'As the thickness of glass increases, the beta radiation detected will ... because ...',
      },
      {
        label: 'd',
        text: '**Describe** in detail how you would carry out this investigation to collect valid and reliable data. In your answer include:\n• the range and number of IV values tested\n• how and how many times measurements are repeated\n• what measurement is taken with no glass present\n• how glass sheets are added\n• one control variable and how it is kept constant\n• how the same source is used throughout',
        marks: 6,
        ph: 'Range of IV values: ...\nRepeat each measurement: ... times\nBaseline (no glass): ...\nGlass added: ...\nControl variable: ...\nSame source: ...',
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
        text: 'The student then places an alpha source in the same position and repeats the experiment with the glass sheets.\n\n**Describe** what the student would observe with the alpha source compared to the beta source, and explain why the observations differ.',
        marks: 2,
        ph: 'With the alpha source, the count rate would...\nThis differs from beta because alpha particles...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Radioactive Decay & Half-Life (12 marks) Criterion C
  // V2: Caesium-137 simulation; krypton-85 graph; nuclear submarine context
  // Q8b: radio_select ['Point-to-point', 'Straight line', 'Smooth curve'], correct=2
  // Q8d: barium-140 t½=12d, 800,000→50,000 = 4 half-lives = 48 days
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
    stem: 'A simulation shows the radioactive decay of caesium-137. In the simulation, the percentage of the original nucleus remaining can be recorded at different times. Some of the data is also shown on a graph of krypton-85 decay (% of original nucleus remaining vs. time in years). A nuclear submarine accident released several radioactive isotopes into the surrounding ocean, including caesium-137 and barium-140.',
    figImages: [`${P}page-53.png`, `${P}page-55.png`, `${P}page-56.png`],
    tasks: [
      {
        label: 'a',
        text: 'A simulation shows the radioactive decay of caesium-137. You should **identify** six times at which you would record data from the simulation. For each time, record the percentage of the original nucleus remaining from three separate trial runs and **calculate** the mean average.\n\nPresent your results in a table with columns: Time (yrs) | Trial 1 | Trial 2 | Trial 3 | Average.\n\nGive your average values to an appropriate number of significant figures.',
        marks: 6,
        ph: 'Time (yrs) | Trial 1 | Trial 2 | Trial 3 | Average\n...         | ...     | ...     | ...     | ...\n(Choose 6 evenly spaced time values, record % remaining for each trial, calculate average)',
      },
      {
        label: 'b',
        text: 'Some of the data is also presented in the graphs. The image shows three options for how to draw a line through the data points.\n\n**Select** the most appropriate graph to present the radioactive decay data.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Point-to-point', 'Straight line', 'Smooth curve'],
        ph: 'Select the most appropriate line type',
      },
      {
        label: 'c',
        text: 'The half-life is characteristic of a particular isotope. The graph shows the decay of krypton-85.\n\nUsing the graph, **calculate** the average half-life for krypton-85. You should use **at least three** data points in your calculation.',
        marks: 3,
        ph: 'Reading 1: at t = ... years, % = 50 → first half-life = ... years\nReading 2: at t = ... years, % = 25 → second half-life = ...\nReading 3: at t = ... years, % = 12.5 → third half-life = ...\nAverage half-life = ... years',
      },
      {
        label: 'd',
        text: 'A different isotope, barium-140, was also released. Barium-140 has a half-life of **12 days**.\n\nIf the accident released **800 000** atoms of barium-140 into the ocean, **calculate** how long it would take for this number to decrease to **50 000**.',
        marks: 2,
        ph: 'Number of half-lives needed: 800 000 → 400 000 → 200 000 → 100 000 → 50 000 = ... half-lives\nTotal time = ... × 12 days = ... days',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Power Stations & Electricity Transmission (16 marks) Criterion D
  // V2: Gas-fired power station context
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
    stem: 'This question is about the generation and transmission of electricity. In many developed countries, electricity is generated in large power stations, far away from where the people who use the electricity live and work. The diagram shows the main components: power station → step-up transformer → high voltage wires → step-down transformer → homes. The energy sources that power the generators in large industrial countries include natural gas, oil and nuclear (fission) reactors, or a mix of these.',
    figImages: [`${P}page-61.png`, `${P}page-66.png`],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** two reasons why people would not want a gas-fired power station in or near their city.',
        marks: 2,
        ph: 'Reason 1:\nReason 2:',
      },
      {
        label: 'b',
        text: 'Gas-fired power stations require large quantities of water. **State** one reason why so much water is needed in a gas-fired power station.',
        marks: 1,
        ph: 'Water is needed for...',
      },
      {
        label: 'c',
        text: 'A transformer converts current and voltage. If P = IV, when the secondary voltage **doubles**, **state** what happens to the secondary current.',
        marks: 1,
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
        text: 'Natural gas burns to release energy. The combustion of natural gas also releases three gases: water vapour (H₂O), carbon dioxide (CO₂) and small amounts of nitrogen oxides (NOₓ).\n\n**Explain** the environmental impact of each of these gases.',
        marks: 6,
        ph: 'Water vapour (H₂O): ...\n\nCarbon dioxide (CO₂): ...\n\nNitrogen oxides (NOₓ): ...',
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
  // QUESTION 10 — Hydroelectric Power & Traffic Management (16 marks) Criterion D
  // V2: Small-scale hydroelectric power + battery system
  // ─────────────────────────────────────────────────────────────
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Hydroelectric Power & Traffic Management',
    marks: 16,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'work-energy', topics: ['energy sources (renewable vs non-renewable)', 'electrical power', 'energy efficiency'], level: 'advanced' },
    stem: 'The animation shows a sustainable solution to traffic management in a riverside city. Load shedding results in the electric power supplied to different parts of a city being cut off at different times. When load shedding occurs, traffic lights lose power and stop working. The animation shows a small run-of-river hydroelectric generator positioned on a nearby stream, connected to a battery station. The stored energy in the battery can supply the traffic lights with electricity even when load shedding occurs.',
    figImages: [`${P}page-73.png`, `${P}page-74.png`, `${P}page-75.png`],
    tasks: [
      {
        label: 'a',
        text: 'Apart from traffic lights, **suggest** a different application where a constant source of electricity is necessary.',
        marks: 1,
        ph: 'Application: ...',
      },
      {
        label: 'b',
        text: 'Using information from the animation and your wider MYP studies, **discuss** and **evaluate** the use of a small-scale hydroelectric power supply to solve the problem identified in part (a).\n\nIn your answer you should consider:\n• why a constant source of electricity is important in your application\n• the advantage of using a small-scale power supply in this situation\n• the disadvantage of using a small-scale power supply in this situation\n• economic factors\n• social factors',
        marks: 15,
        ph: 'Why constant electricity matters for my application: ...\n\nAdvantage of small-scale hydro supply: ...\n\nDisadvantage of small-scale hydro supply: ...\n\nEconomic factors: ...\n\nSocial factors: ...',
      },
    ],
  },

]
