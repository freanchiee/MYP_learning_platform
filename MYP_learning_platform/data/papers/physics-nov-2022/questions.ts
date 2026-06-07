import type { Question } from '@/lib/types'

const P = '/images/papers/physics-nov-2022/'

export const paperMeta = {
  id: 'physics-nov-2022',
  subject: 'Physics',
  session: 'November',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Nuclear Fission & Radioactive Decay (9 marks) Criterion A
  // Context: Uranium isotopes and nuclear fission — historical experiment
  // Numbers rephrased: energy requirement changed from 1.26×10¹⁰ to 1.18×10¹⁰ J per year
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Nuclear Fission & Radioactive Decay',
    marks: 9,
    tags: { unit: 'atomic-physics', topics: ['isotopes', 'nuclear fission', 'radioactive decay', 'half-life'], level: 'proficient' },
    stem: 'In 1938, an experiment took place that led to important developments in the fields of science and technology. The first step in this experiment used neutrons to bombard a sample of uranium.\n\nSome atoms of uranium-235 (²³⁵₉₂U) changed into atoms of uranium-236 (²³⁶₉₂U).',
    figImages: [`${P}q1-fission.png`],
    tasks: [
      {
        label: 'a',
        text: '**Select** words to complete the following statements about uranium atoms:\n\n• Both of these forms of uranium have [atomic number / mass number / number of electron shells] of 92.\n• Uranium-236 has one more [neutron / proton / electron] than uranium-235.\n• These two different forms of uranium are known as [isotopes / isomers / isotones].',
        marks: 3,
        widget: 'inline_dropdown_select',
        widgetItems: ['Property of 92', 'Extra particle', 'Classification'],
        widgetOptions: ['atomic number', 'mass number', 'number of electron shells', 'neutron', 'proton', 'electron', 'isotopes', 'isomers', 'isotones'],
        ph: 'Property of 92: atomic number\nExtra particle: neutron\nClassification: isotopes',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Uranium-236 can split into smaller nuclei. This is an example of nuclear fission. The total number of protons and neutrons is unchanged during this reaction.\n\nOne such fission reaction is shown below, but one chemical symbol is missing.\n\n²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + **?** + 3 neutrons\n\n**Determine** the missing symbol and add it to the equation. The draggable items are: ⁶⁰₃₃As, ⁹²₃₃As, ⁹²₃₆Kr, ⁹⁵₃₆Kr.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['⁶⁰₃₃As', '⁹²₃₃As', '⁹²₃₆Kr', '⁹⁵₃₆Kr'],
        ph: '⁹²₃₆Kr',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The products of the fission reaction are radioactive. The graph shows how the activity of barium-141 changes with time.\n\n**Using the graph, determine** the half-life of barium-141.',
        marks: 2,
        figImages: [`${P}q1c-decay-graph.png`],
        ph: 'Half-life = ... minutes\nWorking: initial activity ≈ 1000 Bq; half of 1000 = 500 Bq; read time at 500 Bq from graph...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'Fission reactions release energy. The energy requirement of an average person in an economically developed country is **1.18 × 10¹⁰ J** per year. The fission of 1 g of uranium releases **82 000 MJ** of energy.\n\n**Calculate** the number of grams of uranium that would be needed to provide all the energy required by an individual in an economically developed country.',
        marks: 2,
        ph: 'Energy needed = 1.18 × 10¹⁰ J\nEnergy per g = 82 000 MJ = 82 000 × 10⁶ J = 8.2 × 10¹⁰ J\nMass = (1.18 × 10¹⁰) ÷ (8.2 × 10¹⁰) = ... g',
        level: 'advanced',
      },
      {
        label: 'e',
        text: 'The amount of energy released in fission was calculated by the physicist Lise Meitner. Meitner was also a part of the team that analysed the products of the fission reaction. During the discovery of fission, physicists and chemists worked together collaboratively.\n\n**Suggest** the importance of collaboration in science.',
        marks: 1,
        ph: 'Collaboration allows scientists with different skills to...',
        level: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Thermal Energy & States of Matter (9 marks) Criterion A
  // Context: Evaporation and cooling effect of liquids
  // Numbers rephrased: 20.8°C → 21.2°C; 60 s axis unchanged
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Energy & States of Matter',
    marks: 9,
    tags: { unit: 'thermal-physics', topics: ['states of matter', 'evaporation', 'latent heat', 'cooling effect'], level: 'proficient' },
    stem: 'Thermal energy is also known as heat energy. The addition or removal of heat energy can cause changes in temperature and in state.',
    tasks: [
      {
        label: 'a',
        text: '**Drag and drop** the state changes below to **identify** which require heat energy to be added and which require heat energy to be removed. The first one (Boiling) has been completed for you.\n\nChanges: Melting, Freezing, Condensing',
        marks: 2,
        widget: 'variable_classify',
        widgetOptions: ['Melting', 'Freezing', 'Condensing'],
        widgetItems: ['Heat energy added', 'Heat energy removed'],
        ph: 'Heat energy added: Boiling, ...\nHeat energy removed: ...',
        level: 'developing',
      },
      {
        label: 'b',
        text: '**Compare and contrast** the processes of evaporation and boiling.',
        marks: 2,
        ph: 'Similarity: both are...\nDifference: evaporation occurs at... whereas boiling...',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The evaporation of liquid sweat from the surface of the skin helps to remove heat from the human body and keep it cool. A student models this relationship using temperature probes placed in three different liquids: cooking oil, pure water, and ethanol. The probes are then removed and temperature measured over time. The graph shows the temperature change.\n\n**Using the graph, select** the liquid that caused no cooling effect and the liquid that caused the greatest cooling effect.',
        marks: 2,
        figImages: [`${P}q2c-cooling-graph.png`],
        widget: 'inline_dropdown_select',
        widgetItems: ['No cooling effect', 'Greatest cooling effect'],
        widgetOptions: ['cooking oil', 'water', 'ethanol'],
        ph: 'No cooling effect: cooking oil\nGreatest cooling effect: ethanol',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Use the graph** in part (c) to **identify** the temperature of the laboratory.',
        marks: 1,
        ph: 'The laboratory temperature is approximately ... °C because...',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'Student A says that ethanol requires the most energy to evaporate. Student B says that cooking oil requires the most energy to evaporate.\n\n**Using the graph** in part (c), **justify** which student is correct.',
        marks: 2,
        ph: 'Student ... is correct.\nThe graph shows that ... had the greatest cooling effect, which means it absorbed the most heat energy during evaporation...',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Astrophysics: Jupiter's Moons & EM Waves (7 marks) Criterion A
  // Context: Galileo's 1610 observations; Europa ocean; EM spectrum
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Astrophysics: Moons, Planets & Electromagnetic Waves',
    marks: 7,
    tags: { unit: 'astrophysics', topics: ['moons and planets', 'geocentric vs heliocentric models', 'electromagnetic spectrum'], level: 'proficient' },
    stem: 'In 1610, the astronomer Galileo Galilei used his telescope to observe the planet Jupiter. He noticed four small objects that appeared to be distant stars. However, he later realised that they were in fact moons.',
    figImages: [`${P}q3-jupiters-moons.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** two differences between a moon and a star.',
        marks: 2,
        ph: '1. A moon orbits a planet, whereas a star...\n2. A moon does not emit its own light, whereas a star...',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'At the time it was widely believed that everything in the universe orbited Earth. This is known as the geocentric model of the universe. Galileo observed the four moons and their movement over time. This new evidence showed that the geocentric model was incorrect.\n\n**Suggest** how Galileo\'s observations helped to disprove the geocentric model.',
        marks: 2,
        ph: 'He observed the moons orbiting Jupiter, not Earth. This showed that not everything orbits Earth, which contradicts the geocentric model...',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'It has been known for a long time that the surface of the moon Europa is covered with ice because of how it reflects light. There is additional evidence that beneath the ice there could be liquid water and possibly an ocean.\n\n**Suggest** why the presence of liquid water on the moon Europa would be of particular interest to scientists.',
        marks: 1,
        figImages: [`${P}q3c-europa.png`],
        ph: 'Liquid water could support life / indicate conditions necessary for life...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'In 2019, water vapour was detected for the first time above Europa\'s surface. The technique used to detect it involved the analysis of infrared waves. Infrared waves are part of the electromagnetic spectrum shown below.\n\n**State** two properties that are shared by **all** waves in the electromagnetic spectrum.',
        marks: 2,
        figImages: [`${P}q3d-em-spectrum.png`],
        ph: '1. All electromagnetic waves travel at the same speed in a vacuum (3 × 10⁸ m/s)\n2. All electromagnetic waves are transverse waves',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Energy & Efficiency: Planning an Investigation (10 marks) Criterion B
  // Context: Electric motor lifting mass with pulley — planning sub-tasks
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Energy & Efficiency: Motor Investigation Planning',
    marks: 10,
    tags: { unit: 'work-energy', topics: ['energy efficiency', 'gravitational potential energy', 'electrical power', 'scientific methodology'], level: 'proficient' },
    stem: 'All modern technologies rely on changing energy from one form into another. The efficiency of any energy conversion is found using the formula:\n\n**efficiency = (useful energy out ÷ total energy in) × 100**\n\nNo device is 100% efficient in converting energy. Improving the efficiency of energy conversion is an important goal for scientists and engineers who want to reduce the environmental impact of new technologies.\n\nA student decides to test the efficiency of a simple electric motor lifting a mass with a pulley.',
    figImages: [`${P}q4-motor-setup.png`],
    tasks: [
      {
        label: 'a',
        text: 'For an electric motor, the useful energy output is the work done in lifting the mass. The student suspects that when the motor does more work, its efficiency will change.\n\n**State** one form of wasted energy in an electric motor.',
        marks: 1,
        ph: 'Heat energy / sound energy',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**State** a research question the student could use to guide their investigation.',
        marks: 2,
        ph: 'How does the height to which a mass is lifted affect the efficiency of an electric motor?\nOR: What is the relationship between work done and efficiency of an electric motor?',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The useful energy output is equal to the mass\'s change of gravitational potential energy as shown by the formula:\n\n**ΔEₚ = mgΔh**\n\nThe student plans to use height lifted as the independent variable in their experiment.\n\n**Outline** how the student could vary the independent variable and how this data could be used to determine the useful energy output of the motor.',
        marks: 2,
        ph: 'The student could lift the mass to different heights (e.g. 10 cm, 20 cm, 30 cm...) by...\nUsing ΔEₚ = mgh, the useful energy output can be calculated by multiplying the mass by g and the height lifted...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'To measure efficiency, the student must also determine the total energy used by the motor while lifting the mass. They must determine the power output of the motor by measuring the current flowing through the motor and the voltage across it.\n\n**Draw** a circuit to measure the power output of a motor. The power supply has been started for you.\n\nDraggable circuit components: ammeter (A), voltmeter (V), motor (M), resistor, switch, wire.',
        marks: 3,
        ph: 'Circuit should include: motor in series with ammeter; voltmeter connected in parallel across the motor; connected to power supply.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Measuring the power output of the motor alone is not sufficient to determine the total energy used by the motor.\n\n**Outline** what other quantity the student must measure and **state** how this would be used to calculate the total energy used.',
        marks: 2,
        ph: 'The student must also measure time.\nTotal energy = power × time (E = P × t)\nSo total energy = voltage × current × time',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Energy Efficiency: Full Investigation Design (14 marks) Criterion B
  // Context: Investigate how voltage affects motor efficiency
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Energy Efficiency: Investigation Design',
    marks: 14,
    tags: { unit: 'work-energy', topics: ['energy efficiency', 'electrical power', 'gravitational potential energy', 'experimental design'], level: 'advanced' },
    stem: 'A second student decides to investigate how changing the voltage supplied to the motor affects the time taken to lift a mass. They will use this to calculate the efficiency of the motor.',
    figImages: [`${P}q4-motor-setup.png`],
    tasks: [
      {
        label: 'a',
        text: '**Design** an investigation that the student could use to collect data. In your answer you should include:\n\n• the independent and dependent variables\n• two control variables with justification\n• a detailed method for the collection of data\n• an explanation of how you will collect sufficient data\n• a statement of how data will be processed to calculate efficiency',
        marks: 14,
        ph: 'Independent variable: voltage supplied to the motor (V)\nDependent variable: time taken to lift the mass / efficiency (%)\n\nControl variable 1: mass lifted — kept constant because changes in mass would change the useful energy output, making it impossible to isolate the effect of voltage\nControl variable 2: height to which mass is lifted — kept constant because a different height would change the useful energy output\n\nMethod:\n1. Set up the motor, pulley and mass as shown in the diagram\n2. Connect an ammeter in series with the motor and a voltmeter in parallel across the motor\n3. Set the power supply to an initial voltage of 1 V\n4. Press start simultaneously with the stopwatch; record the time for the mass to rise 50 cm\n5. Record the current reading during the lift\n6. Repeat each voltage setting at least three times to improve reliability\n7. Increase the voltage in steps of 1 V up to 6 V and repeat\n\nUseful energy output: ΔEp = mgh (use same mass and height each trial)\nTotal energy input: E = V × I × t\nEfficiency = (ΔEp ÷ E) × 100',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Energy Efficiency: Data Processing (10 marks) Criterion C
  // Context: Same motor — lifting different masses to 95 cm height, 2 V supply
  // Numbers same as original (calculation-based)
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Energy Efficiency: Data Processing',
    marks: 10,
    tags: { unit: 'work-energy', topics: ['gravitational potential energy', 'energy efficiency', 'data processing', 'significant figures'], level: 'proficient' },
    stem: 'Another student has decided to change the mass lifted to see if this affects the motor\'s efficiency.\n\nIn each trial of their experiment, they use the motor to lift different masses from the surface of a table to a height of 95.0 cm.',
    figImages: [`${P}q6-motor-setup.png`],
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the change of gravitational potential energy of a **0.050 kg** mass as it is lifted above the table. Assume that the value of **g = 9.81 N kg⁻¹**.',
        marks: 2,
        ph: 'ΔEp = mgh\n= 0.050 × 9.81 × 0.95\n= ... J',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'The student used the same supply voltage in every trial of their experiment.\n\n**Outline** how this helped to ensure the validity of the data.',
        marks: 2,
        ph: 'Mass is the independent variable, so voltage must be kept constant (controlled) to ensure any change in efficiency is due to mass only. Changes in voltage would change the power input, making results invalid...',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The student recorded their raw data in their notebook as shown below:\n\n| Mass | Current | Time |\n|------|---------|------|\n| 30 g | 0.15 A | 4.74 s |\n| 20 g | 0.14 A | 4.68 s |\n| 50 g | 0.18 A | 5.21 s |\n| 10 g | 0.12 A | 4.32 s |\n| 40 g | 0.17 A | 5.16 s |\n\n**Organise** the student\'s raw data into a table with appropriate headings, units, and data in increasing order of mass.',
        marks: 3,
        ph: 'Table with column headers Mass/g | Current/A | Time/s\nData in order: 10, 20, 30, 40, 50 g\nUnits only in headers, not in data cells',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The student then constructs a processed data table. For each trial, they calculate the power output of the motor and the efficiency of the motor. The voltage supplied to the motor was **2 V** in each trial.\n\nUsing data from part (c), **calculate** the total energy output and the efficiency of the motor for the trial when the mass was **50 g**. Use your answer from part (a) to calculate efficiency.',
        marks: 3,
        ph: 'Total energy = V × I × t = 2 × 0.18 × 5.21 = ... J\nEfficiency = (useful energy ÷ total energy) × 100\n= (answer from a ÷ total energy) × 100 = ... %',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Projectile Motion Investigation (17 marks) Criterion C
  // Context: Ball launcher with compressed spring, launch angle vs max height
  // Numbers rephrased: height at 0° = 5.1 m → same; angle at 0 m = 82° → same
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Projectile Motion Investigation',
    marks: 17,
    tags: { unit: 'measurement-motion', topics: ['projectile motion', 'data analysis', 'air resistance', 'experimental error'], level: 'advanced' },
    stem: 'An MYP student is interested in the motion of a ball when it is launched into the air. The student uses a simple device to launch a ball using a compressed spring. Then they measured the maximum height that the ball reached.\n\nThey performed one trial for different launch angles, starting from a launch directed vertically upwards which was labelled as zero degrees.',
    figImages: [`${P}q7-launcher.png`],
    tasks: [
      {
        label: 'a',
        text: 'The student plotted this data on a graph and found a line of best fit. This helped the student to identify an outlier in their data when the launch angle was 30 degrees.\n\n**Select** the graph that best represents the student\'s data and **justify** your choice.',
        marks: 2,
        figImages: [`${P}q7a-graphs.png`],
        widget: 'radio_select',
        widgetOptions: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
        ph: 'Graph D\nJustification: The line of best fit intersects the most data points with points both above and below the line, and the point at 30° is clearly an outlier above the LOBF.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: '**Use** the student\'s results in part (a) to **identify**:\n\n• The height reached when the angle was 0 degrees.\n• The angle when the height reached was 0 metres.',
        marks: 2,
        ph: 'Height at 0°: approximately ... m\nAngle at height = 0 m: approximately ... °',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The student had made the following prediction for this investigation:\n\n*"If the angle from the vertical position increases, then the maximum height reached will decrease in inverse proportion."*\n\n**Use** the student\'s results in part (a) to **discuss** the validity of the prediction.',
        marks: 3,
        ph: 'The prediction is partially correct: as angle increases the maximum height does decrease.\nHowever, the relationship is NOT inverse proportion because...\nIn an inverse proportion, doubling the IV would halve the DV, but the graph shows...\nAlso, the graph has an intercept, which an inverse proportion graph would not have.',
        level: 'advanced',
      },
      {
        label: 'd',
        text: 'During the experiment, the student measured angle and height. The launching device was set at a specific angle for each trial before the ball was released. The height of the ball was measured by comparing the position of the ball during its flight to a metre ruler that was fixed to the wall.\n\n**Select** the most likely source of error in the student\'s data. **Justify** your answer.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['angle', 'height'],
        ph: 'Height — because the ball is moving during measurement, making it difficult to read the height accurately from the ruler.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: '**Suggest** one change the student could make to their method to reduce the chance of outliers in the data.',
        marks: 1,
        ph: 'Repeat each trial multiple times and calculate a mean value.',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'The student conducts additional research to understand their results. They learn that the motion of the ball can be influenced by the force of air resistance.\n\n**Select** how the height reached by the ball would be affected by the force of air resistance. **Use scientific reasoning to justify** your answer.\n\nThe height reached would be: decreased / increased / unchanged',
        marks: 3,
        widget: 'radio_select',
        widgetOptions: ['decreased', 'increased', 'unchanged'],
        ph: 'Decreased\nJustification: Air resistance acts as an additional force opposing the motion of the ball. This means the total force acting against the ball is greater, causing greater deceleration. Less kinetic energy is converted to gravitational potential energy, so less height is gained. Energy is also converted to heat by air resistance.',
        level: 'advanced',
      },
      {
        label: 'g',
        text: 'During this investigation, the student launched a small metal ball as the object.\n\n**Suggest** how the shape, size and material of the object would help to reduce the effect of force of air resistance on the results. You should refer to particle theory in your answer.',
        marks: 2,
        ph: 'Shape: use a streamlined/aerodynamic shape to reduce the cross-sectional area the air must flow around.\nSize: use a smaller object so there is less surface area for air particles to collide with.\nMaterial: use a denser material so the ball has greater mass/inertia relative to the air resistance force, reducing its effect.',
        level: 'advanced',
      },
      {
        label: 'h',
        text: 'The student is interested in extending their investigation so that they can find out more about the motion of a projectile. **Suggest** another dependent variable that the student could measure, together with two control variables. The independent variable is the launch angle.',
        marks: 3,
        ph: 'Dependent variable: horizontal range (or time of flight)\n\nControl variable 1: mass of ball — because a heavier ball would have different inertia, affecting the range\nControl variable 2: spring compression distance / launch speed — because changing the initial speed would directly change the range, confounding results',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Ultrasound & X-rays in Medicine (24 marks) Criterion D
  // Context: Medical imaging — kidney stones, ultrasound vs x-rays for pregnant women
  // Numbers rephrased: speed = 1600 m/s, t = 1×10⁻⁴ s unchanged (calculation task)
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Ultrasound & X-rays in Medical Imaging',
    marks: 24,
    tags: { unit: 'sound-waves', topics: ['ultrasound', 'electromagnetic spectrum', 'wave speed calculations', 'science and society'], level: 'advanced' },
    stem: 'Ultrasound waves can be defined as sound waves with a frequency greater than 20 kHz, which is beyond the range of human hearing. A major use of ultrasound waves is in medical imaging systems.\n\nA kidney stone is a hard mass formed in the kidneys that can stop them functioning correctly.',
    figImages: [`${P}q8-comparison-table.png`],
    tasks: [
      {
        label: 'a',
        text: 'If the speed of ultrasound waves in the human body is **1600 m s⁻¹**, and the reflection is detected **1 × 10⁻⁴ s** after transmission, **calculate** the distance in cm between the kidney stone and the detector.',
        marks: 3,
        ph: 'Total distance = speed × time = 1600 × (1 × 10⁻⁴) = 0.16 m\nDistance to stone = 0.16 ÷ 2 = 0.08 m = 8 cm',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Ultrasound waves were first used for medical imaging in the 1950s. Before this, x-rays were used as a medical imaging technique.\n\nIn 2016, the World Health Organization estimated that two-thirds of the global population do not have access to medical imaging facilities. A government of a country with limited access to medical imaging is considering providing free imaging technology for pregnant women.\n\n**Discuss and evaluate** the use of x-rays compared to ultrasound waves in pregnant women. In your answer, you should include:\n\n• an explanation of how the waves create images in each technique\n• a discussion of the impacts on human health for each technique\n• a discussion of the positive and negative economic implications for the government\n• a comment about ethical implications\n• a concluding appraisal giving your opinion',
        marks: 16,
        passage: 'Ultrasound scans: Uses sound waves to create live images of the organs, muscles and other structures. Heart rates and blood flows can also be viewed and measured. Ultrasound scans can check for blood flow, heart problems, possible problems in the abdomen and kidneys, and investigate some cancerous and non-cancerous growths. The ultrasound scan itself is believed to be harmless. Images can be hard to interpret and there is the possibility of a misdiagnosis. Cost: $500 per scan, $40 000 per machine.\n\nX-ray images: Uses high-energy electromagnetic waves to create images of bones. Organs, muscles and other structures are imaged with limited detail. X-rays can check for broken bones and to monitor the healing and treatment of bone problems. They are also used to check the condition of the lungs and check for the presence of some cancerous and non-cancerous growths. The absorption of x-rays leads to an increase in risk of developing cancers later in life. The risk is particularly high in younger children. Shielding is used to protect parts of the body not being imaged, and the risk for each x-ray is very small. Cost: $150 per image, $30 000 per machine.',
        ph: 'How waves create images:\n• Ultrasound: sound waves are emitted and reflect off tissue boundaries; the time delay and intensity of reflections create a real-time image\n• X-rays: high-energy EM waves pass through soft tissue but are absorbed by dense structures (bone); a shadow image is formed on a detector\n\nHealth impacts:\n• Ultrasound: no known health risks, believed to be harmless; safe for pregnant women and foetuses\n• X-rays: ionising radiation increases cancer risk; risk is small but higher for developing foetuses; shielding reduces but does not eliminate risk\n\nEconomic implications:\n• Ultrasound: higher cost per machine ($40 000) but can be used many times; scanning cost of $500 may still be prohibitive for low-income governments\n• X-rays: cheaper per machine ($30 000) and per image ($150); could scan more patients; however ethical concerns may limit use\n\nEthical implications:\n• Using x-rays on pregnant women risks harm to the foetus, raising ethical concerns about consent and "do no harm"\n• Not providing imaging denies access to healthcare — also an ethical issue\n• Ultrasound is ethically preferable for foetal imaging\n\nConclusion: Ultrasound is the better option for pregnant women because it provides detailed soft-tissue images without the ionising radiation risk to the developing foetus. Although the machine cost is slightly higher, the health and ethical benefits outweigh the economic difference.',
        level: 'advanced',
      },
      {
        label: 'c',
        text: 'Since the 1960s medical imaging has become much more widespread. Medical imaging has given information about the development of unborn babies, their growth, the functioning of their organs and identification of their sex. Data from the United Nations (UN) has shown a change in the sex ratio at birth since the 1970s. The sex ratio at birth is the number of boys born for every 100 girls born. The expected biological sex ratio is 105 males per 100 females. There is the concern that identification of sex from medical imaging might be selectively used to terminate pregnancies, changing the sex ratio.\n\n**Discuss** why there would be a concern to the government of a country which has a large change to the sex ratio at birth and **suggest** an ethical action the government could take to prevent further imbalance in sex ratio at birth.',
        marks: 5,
        figImages: [`${P}q8c-sex-ratio-graph.png`],
        ph: 'Concern: A significantly imbalanced sex ratio leads to social problems including workforce imbalance, difficulty finding partners, population decline, and breakdown of family structures. The graph shows the ratio rising above 105, suggesting selective terminations.\n\nEthical action: The government could introduce legislation preventing medical staff from revealing the sex of a foetus to parents before birth, or run public education campaigns about the ethical implications of sex-selective terminations.',
        level: 'advanced',
      },
    ],
  },

]
