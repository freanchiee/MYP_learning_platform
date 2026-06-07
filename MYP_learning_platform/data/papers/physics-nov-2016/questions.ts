import type { Question } from '@/lib/types'

const P = '/images/papers/physics-nov-2016/'

export const paperMeta = {
  id: 'physics-nov-2016',
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
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Bird Migration & Motion',
    marks: 10,
    tags: { unit: 'measurement-motion', topics: ['speed and velocity', 'velocity-time graphs', "Newton's second law"], level: 'proficient' },
    stem: 'Some birds migrate every autumn, some fly to cooler countries and some fly to warmer countries. The bar-tailed godwit in the photograph can fly for nearly 11 000 km without stopping. During the eight-day journey that it takes to cover that distance, the bird doesn\'t stop for food or rest. This makes the bar-tailed godwit the bird with the longest recorded non-stop flight.',
    figImages: [`${P}q1-godwit.png`],
    tasks: [
      {
        label: 'a',
        text: 'One bar-tailed godwit flies 1200 km in a day. **Calculate** the speed in km h⁻¹ (in kilometres per hour).',
        marks: 1,
        ph: 'Speed = distance / time = 1200 / 24 = ... km h⁻¹',
      },
      {
        label: 'b',
        text: 'Scientists fit satellite transmitters to 16 godwits at two locations in New Zealand. Later the scientists use the information from the satellite transmitters and calculate that the average speed of the bird is 56 km h⁻¹.\n\n**Outline** two factors that may affect the average speed achieved by the bar-tailed godwit.',
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
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Wave Properties',
    marks: 10,
    tags: { unit: 'sound-waves', topics: ['wave properties (wavelength, frequency, amplitude, period)', 'infrasound and ultrasound', 'speed of sound'], level: 'proficient' },
    stem: 'These animations show the two different types of wave moving along springs — a transverse wave and a longitudinal wave. Infrasound is a low frequency longitudinal wave that elephants, whales, rhinoceros and alligators use to communicate with each other. The frequency of infrasound waves is lower than 20 Hz. Infrasound waves can travel very long distances through air at a speed of 330 m s⁻¹.',
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
        text: 'The speed of sound in air is 330 m s⁻¹.\n\n**Calculate** the wavelength of wave C. Show your working and include the unit.',
        marks: 2,
        figImages: [`${P}oscilloscope-q2.png`],
        ph: 'First find frequency of wave C from the graph: f = ... Hz\nThen use v = fλ → λ = v/f = 330 / ... = ... m',
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
        text: 'Animals use infrasound as the waves travel long distances. The diagram shows elephants on opposite sides of a hill.\n\n**Explain** how the group of elephants on the other side of the hill can hear the elephant.',
        marks: 3,
        figImages: [`${P}page-18.png`],
        ph: 'The infrasound waves undergo...\nThis happens because the wavelength is...\nAs a result, the waves...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Refraction of Light (5 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Refraction of Light',
    marks: 5,
    tags: { unit: 'light-optics', topics: ['refraction', 'refractive index', "Snell's law"], level: 'proficient' },
    stem: 'A ray of light travels from one material to another. The diagram shows the ray passing through three different transparent materials. The table shows the refractive indices of common materials:\n\n| Material | Refractive index (n) |\n|----------|---------------------|\n| Air      | 1.00                |\n| Glass    | 1.50                |\n| Water    | 1.33                |',
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
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Static Electricity',
    marks: 8,
    tags: { unit: 'electricity-circuits', topics: ['electric charge', 'static electricity', 'induction'], level: 'proficient' },
    stem: 'Most materials are electrically neutral; they contain equal numbers of charged particles. An animation shows that if a cloth is used to rub a plastic rod, the rod becomes positively charged.',
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
        text: 'Use the animation to **explain** the process by which the rod becomes positively charged when rubbed with a cloth.',
        marks: 3,
        ph: 'When the cloth rubs the rod, ... are transferred...\nThe rod loses...\nThis makes the rod positively charged because...',
      },
      {
        label: 'c',
        text: 'Harry is a cat. When Harry walks around, he becomes electrically charged. Small polystyrene pellets on the floor are attracted to Harry\'s fur. The polystyrene pellets are initially uncharged.\n\nUsing the concept of induction, **suggest** why the polystyrene pellets stick to Harry.',
        marks: 4,
        ph: 'Harry becomes charged because...\nThe pellets are initially uncharged, but...\nInduction causes...\nThe pellets are attracted because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Thermal Insulation Investigation (13 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Thermal Insulation Investigation',
    marks: 13,
    tags: { unit: 'thermal-physics', topics: ['conduction', 'convection', 'radiation (thermal)'], level: 'proficient' },
    stem: 'Zaina carries ice cream home from the shops. On hot days, she finds that much of the ice cream has melted before she gets home. She lives 15 minutes away from the shops. Zaina decides to investigate a solution to this problem. In many countries, wrapping ice cream in thick paper is an environmentally friendly alternative to insulated bags.\n\nZaina uses standard blocks of ice, each with mass of 100 g, to model the melting of the ice cream. She decides to investigate how the number of sheets of paper wrapped around the block affects the mass of ice that has melted.',
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
        text: 'Other than ice and paper, **suggest** and **justify** one additional piece of equipment that Zaina will need to perform this experiment.',
        marks: 2,
        ph: 'Equipment: ...\nJustification: ...',
      },
      {
        label: 'c',
        text: '**Suggest** and **justify** a hypothesis for this experiment.',
        marks: 2,
        ph: 'Hypothesis: As the number of sheets of paper increases, the mass of ice melted will...\nJustification: This is because...',
      },
      {
        label: 'd',
        text: '**State** one variable that Zaina needs to control. **Describe** how and why this variable should be controlled.',
        marks: 3,
        ph: 'Variable: ...\nHow it should be controlled: ...\nWhy it should be controlled: ...',
      },
      {
        label: 'e',
        text: '**Explain** what results Zaina needs to collect to ensure that she has sufficient relevant data.',
        marks: 3,
        ph: 'Zaina should measure...\nShe should test at least ... different values of...\nShe should repeat each measurement ... times because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Coffee Cup Cooling Investigation (9 marks) Criterion C
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Coffee Cup Cooling Investigation',
    marks: 9,
    tags: { unit: 'thermal-physics', topics: ['conduction', 'specific heat capacity', 'thermal equilibrium'], level: 'proficient' },
    stem: 'Another student, Gareth, finds that his cup of coffee cools down too quickly when taking it home from his local coffee shop. He wonders if the thin cardboard cup is the reason for the coffee cooling down too quickly.\n\nGareth formulates the hypothesis: "The thicker the coffee cup, the longer the coffee will take to cool down because the heat will take longer to transfer through the thicker material of the cup."\n\nHe finds cups of different thicknesses in his kitchen. He fills each cup with coffee to the same level and times how long it takes for the coffee to cool down from 75 °C to 50 °C in each cup. His results are:\n\n| Thickness of coffee cup / mm | Time taken to cool from 75 °C to 50 °C / min |\n|---|---|\n| 1 | 18 |\n| 2 | 25 |\n| 3 | 8  |\n| 3 | 16 |\n| 4 | 10 |',
    figImages: [`${P}page-33.png`, `${P}page-34.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** and **justify** whether the results of Gareth\'s investigation support his hypothesis.',
        marks: 1,
        ph: 'The results [do / do not] support the hypothesis because...',
      },
      {
        label: 'b',
        text: '**Identify** four weaknesses in Gareth\'s method. For each of the weaknesses, **explain** how his investigation was affected. Use scientific knowledge and understanding in your answer.',
        marks: 8,
        ph: 'Weakness 1: ...\nHow this affected the investigation: ...\n\nWeakness 2: ...\nHow this affected the investigation: ...\n\nWeakness 3: ...\nHow this affected the investigation: ...\n\nWeakness 4: ...\nHow this affected the investigation: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Radiation Investigation (21 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Radiation Investigation',
    marks: 21,
    tags: { unit: 'atomic-physics', topics: ['alpha radiation', 'beta radiation', 'gamma radiation', 'radiation safety'], level: 'proficient' },
    stem: 'Developments in the understanding of atomic physics have led to many useful applications in industry, medicine and technology. Through understanding patterns in the properties of alpha (α), beta (β) and gamma (γ) radiation, scientists have developed ways in which the specific properties may be used.\n\nOne useful property is the difference in the penetration of the three types of radiation. The diagram shows the penetration of alpha, beta and gamma radiation through paper, aluminium and lead.\n\nThe amount of beta radiation absorbed depends on the thickness of the materials. This property of beta radiation is used to monitor the thickness of aluminium foil produced in an aluminium factory — a sensor adjusts rollers based on data from the detector.',
    nativeContent: 'radiation_q7',
    tasks: [
      {
        label: 'a',
        text: 'Your task is to design an investigation to determine how the thickness of aluminium foil affects the amount of beta radiation absorbed.\n\n**State** the independent and dependent variables in your investigation.',
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
        text: '**Write** a hypothesis for this investigation that describes the expected relationship between the thickness of aluminium and the intensity of beta radiation detected.',
        marks: 2,
        ph: 'As the thickness of aluminium increases, the beta radiation detected will ... because ...',
      },
      {
        label: 'd',
        text: '**Describe** in detail how you would carry out this investigation to collect valid and reliable data. In your answer include:\n• the range and number of IV values tested\n• how and how many times measurements are repeated\n• what measurement is taken with no aluminium present\n• how aluminium sheets are added\n• one control variable and how it is kept constant\n• how the same source is used throughout',
        marks: 6,
        ph: 'Range of IV values: ...\nRepeat each measurement: ... times\nBaseline (no aluminium): ...\nAluminium added: ...\nControl variable: ...\nSame source: ...',
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
        text: 'The student then places an alpha source in the same position and repeats the experiment with the aluminium sheets.\n\n**Describe** what the student would observe with the alpha source compared to the beta source, and explain why the observations differ.',
        marks: 2,
        ph: 'With the alpha source, the count rate would...\nThis differs from beta because alpha particles...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Radioactive Decay & Half-Life (12 marks) Criterion C
  // (Fukushima / Caesium-137 context)
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Radioactive Decay & Half-Life',
    marks: 12,
    tags: { unit: 'atomic-physics', topics: ['radioactive decay', 'half-life', 'half-life calculations'], level: 'developing' },
    stem: 'A simulation shows the radioactive decay of strontium-90. In the simulation, the percentage of the original nucleus remaining can be recorded at different times. Some of the data is also shown on a graph of caesium-137 decay (% of original nucleus remaining vs. time in years). The Fukushima Daiichi nuclear disaster released several radioactive isotopes into the environment, including caesium-134 and caesium-137.',
    figImages: [`${P}page-53.png`, `${P}page-55.png`, `${P}page-56.png`],
    tasks: [
      {
        label: 'a',
        text: 'A simulation shows the radioactive decay of strontium-90. You should **identify** six times at which you would record data from the simulation. For each time, record the percentage of the original nucleus remaining from three separate trial runs and **calculate** the mean average.\n\nPresent your results in a table with columns: Time (yrs) | Trial 1 | Trial 2 | Trial 3 | Average.\n\nGive your average values to an appropriate number of significant figures.',
        marks: 6,
        ph: 'Time (yrs) | Trial 1 | Trial 2 | Trial 3 | Average\n...        | ...     | ...     | ...     | ...\n(Choose 6 evenly spaced time values, record % remaining for each trial, calculate average)',
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
        text: 'The half-life is characteristic of a particular isotope. The graph shows the decay of caesium-137.\n\nUsing the graph, **calculate** the average half-life for caesium-137. You should use **at least three** data points in your calculation.',
        marks: 3,
        ph: 'Reading 1: at t = ... years, % = 50 → first half-life = ... years\nReading 2: at t = ... years, % = 25 → second half-life = ...\nReading 3: at t = ... years, % = 12.5 → third half-life = ...\nAverage half-life = ... years',
      },
      {
        label: 'd',
        text: 'A different isotope of caesium, caesium-134, was also released. Caesium-134 has a half-life of two years.\n\nIf the Fukushima Daiichi disaster released **1 600 000** atoms of caesium-134 into the ocean, **calculate** how long it would take for this number to decrease to **100 000**.',
        marks: 2,
        ph: 'Number of half-lives needed: 1 600 000 → 800 000 → 400 000 → 200 000 → 100 000 = ... half-lives\nTotal time = ... × 2 years = ... years',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Power Stations & Electricity Transmission (16 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Power Stations & Electricity Transmission',
    marks: 16,
    tags: { unit: 'magnetism-electromagnetism', topics: ['transformers', 'generators', 'AC vs DC'], level: 'proficient' },
    stem: 'This question is about the generation and transmission of electricity. In many developed countries, electricity is generated in large power stations, far away from where the people who use the electricity live and work. The diagram shows the main components: power station → step-up transformer → high voltage wires → step-down transformer → homes. The energy sources that power the generators in large industrial countries are coal, gas and nuclear (fission) reactors, or a mix of these.',
    figImages: [`${P}page-61.png`, `${P}page-66.png`],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** two reasons why people would not want a coal-fired power station in or near their city.',
        marks: 2,
        ph: 'Reason 1:\nReason 2:',
      },
      {
        label: 'b',
        text: 'Coal-fired power stations require large quantities of water. **State** one reason why so much water is needed in a coal-fired power station.',
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
        text: 'Coal burns to release energy. The combustion of coal also releases three gases: water vapour (H₂O), carbon dioxide (CO₂) and sulfur dioxide (SO₂).\n\n**Explain** the environmental impact of each of these gases.',
        marks: 6,
        ph: 'Water vapour (H₂O): ...\n\nCarbon dioxide (CO₂): ...\n\nSulfur dioxide (SO₂): ...',
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
  // QUESTION 10 — Solar Power & Traffic Management (16 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Solar Power & Traffic Management',
    marks: 16,
    tags: { unit: 'work-energy', topics: ['energy sources (renewable vs non-renewable)', 'electrical power', 'energy efficiency'], level: 'advanced' },
    stem: 'The animation shows a sustainable solution to traffic management in an African city. Load shedding results in the electric power supplied to different parts of a city being cut off at different times. When load shedding occurs, traffic lights lose power and stop working. The animation shows a solar panel positioned to capture the energy of the sun, connected to a battery station. The stored energy in the battery can supply the traffic lights with electricity even when load shedding occurs.',
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
        text: 'Using information from the animation and your wider MYP studies, **discuss** and **evaluate** the use of a small-scale solar electrical power supply to solve the problem identified in part (a).\n\nIn your answer you should consider:\n• why a constant source of electricity is important in your application\n• the advantage of using a small-scale power supply in this situation\n• the disadvantage of using a small-scale power supply in this situation\n• economic factors\n• social factors',
        marks: 15,
        ph: 'Why constant electricity matters for my application: ...\n\nAdvantage of small-scale solar supply: ...\n\nDisadvantage of small-scale solar supply: ...\n\nEconomic factors: ...\n\nSocial factors: ...',
      },
    ],
  },
]
