import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2022 · VARIANT 2  (isomorphic to physics-nov-2022)
// Same construct everywhere (crit, command term, marks, task structure, widgets,
// taxonomy tags). Only the real-world context, numbers and data-driven artefacts
// change. No figImages. v2 ≠ v1 ≠ source.
//   Q1 Nuclear/decay:  1938 U fission        → submarine reactor U-235 fission + Ba-139 decay (transport)
//   Q2 Thermal:        evaporation cooling   → cooling sprays / coolants on hot machinery (industrial)
//   Q3 Astrophysics:   Galileo Jupiter moons → Huygens probe & Titan / Saturn (space)
//   Q4 Motor planning: motor + pulley        → passenger-lift motor lifting a counterweight (everyday)
//   Q5 Crit B design:  motor voltage         → passenger-lift voltage investigation (everyday)
//   Q6 Data process:   motor masses 95 cm    → lift motor lifting masses 80 cm (everyday)
//   Q7 Projectile:     spring ball launcher  → toy catapult firing a foam ball (sport)
//   Q8 Crit D essay:   ultrasound vs x-ray   → ultrasound vs x-ray for limb/joint imaging (medical)
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2022-v2',
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
  // Context: a nuclear submarine reactor splitting uranium-235; Ba-139 daughter decays
  // v2 numbers: energy need 9.4 × 10⁹ J/yr; fission of 1 g U releases 76 000 MJ
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Nuclear Fission & Radioactive Decay',
    marks: 9,
    topicCanonical: 'Nuclear Reactions & Energy',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['isotopes', 'nuclear fission', 'radioactive decay', 'half-life'], level: 'proficient' },
    stem: 'A nuclear submarine carries a small fission reactor that can power the vessel for many years without refuelling. Inside the reactor, neutrons are used to bombard a sample of uranium fuel.\n\nSome atoms of uranium-235 (²³⁵₉₂U) absorb a neutron and change into atoms of uranium-236 (²³⁶₉₂U).',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="nu2" cx="0.4" cy="0.35"><stop offset="0" stop-color="#7fb2c9"/><stop offset="1" stop-color="#2c6c86"/></radialGradient><marker id="b1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#444"/></marker></defs><rect width="600" height="230" fill="#ffffff"/><circle cx="46" cy="115" r="7" fill="#c0392b"/><text x="30" y="140" font-size="10" fill="#c0392b">neutron</text><line x1="56" y1="115" x2="146" y2="115" stroke="#444" stroke-width="1.5" marker-end="url(#b1)"/><circle cx="182" cy="115" r="34" fill="url(#nu2)" stroke="#1f4a5c"/><text x="182" y="119" font-size="12" font-weight="700" text-anchor="middle" fill="#fff">236U</text><line x1="222" y1="115" x2="284" y2="115" stroke="#444" stroke-width="1.5"/><circle cx="345" cy="62" r="26" fill="#e3a93c" stroke="#a8721a"/><text x="345" y="66" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">139Ba</text><circle cx="345" cy="168" r="22" fill="#5b9a6b" stroke="#356b44"/><text x="345" y="172" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">95Kr</text><line x1="380" y1="56" x2="470" y2="36" stroke="#c0392b" stroke-width="1.5" marker-end="url(#b1)"/><line x1="385" y1="115" x2="475" y2="115" stroke="#c0392b" stroke-width="1.5" marker-end="url(#b1)"/><text x="498" y="118" font-size="11" fill="#c0392b">neutrons + energy</text></svg>',
      },
      caption: 'A neutron is absorbed by uranium-235, forming uranium-236, which then splits in a fission reaction.',
    },
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
        text: 'Uranium-236 can split into smaller nuclei. This is an example of nuclear fission. The total number of protons and neutrons is unchanged during this reaction.\n\nOne such fission reaction is shown below, but one chemical symbol is missing.\n\n²³⁵₉₂U + ¹₀n → ¹³⁹₅₆Ba + **?** + 2 neutrons\n\n**Determine** the missing symbol and add it to the equation. The draggable items are: ⁹⁵₃₆Kr, ⁹⁵₃₄Se, ⁹⁷₃₆Kr, ⁹¹₃₆Kr.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['⁹⁵₃₆Kr', '⁹⁵₃₄Se', '⁹⁷₃₆Kr', '⁹¹₃₆Kr'],
        ph: '⁹⁵₃₆Kr',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The products of the fission reaction are radioactive. The simulation shows how the activity of barium-139 changes with time.\n\n**Using the graph, determine** the half-life of barium-139.',
        marks: 2,
        artefact: {
          component: 'DecaySim',
          data: {
            isotope: 'barium-139',
            daughter: 'lanthanum-139',
            decayMode: 'beta',
            halfLife: 83,
            units: 'min',
            initialActivity: 1600,
            activityUnits: 'Bq',
            axisMax: 420,
          },
          caption: 'Activity of barium-139 against time (drag the time marker to read the activity).',
        },
        ph: 'Half-life = ... min\nWorking: initial activity ≈ 1600 Bq; half of 1600 = 800 Bq; read time at 800 Bq from graph...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'Fission reactions release energy. The energy requirement of an average person in an economically developed country is **9.4 × 10⁹ J** per year. The fission of 1 g of uranium releases **76 000 MJ** of energy.\n\n**Calculate** the number of grams of uranium that would be needed to provide all the energy required by an individual in an economically developed country.',
        marks: 2,
        ph: 'Energy needed = 9.4 × 10⁹ J\nEnergy per g = 76 000 MJ = 76 000 × 10⁶ J = 7.6 × 10¹⁰ J\nMass = (9.4 × 10⁹) ÷ (7.6 × 10¹⁰) = ... g',
        level: 'advanced',
      },
      {
        label: 'e',
        text: 'Designing a safe reactor for a submarine required physicists, chemists and marine engineers from different organisations to work together. During the development of nuclear power, scientists from many disciplines collaborated.\n\n**Suggest** the importance of collaboration in science.',
        marks: 1,
        ph: 'Collaboration allows scientists with different skills to...',
        level: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Thermal Energy & States of Matter (9 marks) Criterion A
  // Context: cooling sprays/coolants used to cool hot machinery
  // NOTE: task (a) uses the HARDCODED variable_classify widget (bounce IV/DV/CV).
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Energy & States of Matter',
    marks: 9,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['states of matter', 'evaporation', 'latent heat', 'cooling effect'], level: 'proficient' },
    stem: 'In a workshop, technicians cool hot machine parts by spraying a volatile liquid onto them. As the liquid evaporates it removes heat from the surface. An engineer investigates how quickly different liquids evaporate and how this affects cooling. The addition or removal of heat energy can cause changes in temperature and in state.',
    tasks: [
      {
        label: 'a',
        text: 'Before studying evaporation, the engineer first practises identifying variables using a simpler experiment: dropping a ball and measuring how high it bounces.\n\n**Drag and drop** each variable into the correct column to **identify** the independent variable, the dependent variable, and the control variables for this bounce experiment.',
        marks: 2,
        widget: 'variable_classify',
        ph: 'Independent variable: drop height\nDependent variable: height of first bounce\nControl variables: kind of ball, surface, temperature',
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
        text: 'The engineer wets identical metal blocks with three liquids — glycerol, pure water and acetone — and measures the temperature of each block as the liquid evaporates. The graph shows how the temperature of each block changes.\n\n**Using the graph, select** the liquid that caused no cooling effect and the liquid that caused the greatest cooling effect.',
        marks: 2,
        artefact: {
          component: 'ThermalSim',
          data: {
            mode: 'cool',
            totalTime: 240,
            timeUnit: 's',
            tempUnit: '°C',
            labTempC: 23,
            probes: [
              { liquid: 'glycerol', startTempC: 23, endTempC: 22.7, minTempC: 22.7, behaviour: 'no cooling', color: '#f08c00' },
              { liquid: 'water', startTempC: 23, endTempC: 17.5, minTempC: 17.5, behaviour: 'moderate cooling', color: '#0b7285' },
              { liquid: 'acetone', startTempC: 23, endTempC: 9.5, minTempC: 9.5, behaviour: 'strong cooling', color: '#5b9a6b' },
            ],
          },
          caption: 'Temperature of three metal blocks wetted with different liquids as the liquid evaporates.',
        },
        widget: 'inline_dropdown_select',
        widgetItems: ['No cooling effect', 'Greatest cooling effect'],
        widgetOptions: ['glycerol', 'water', 'acetone'],
        ph: 'No cooling effect: glycerol\nGreatest cooling effect: acetone',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Use the graph** in part (c) to **identify** the temperature of the workshop.',
        marks: 1,
        ph: 'The workshop temperature is approximately ... °C because...',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'Student A says that acetone requires the most energy to evaporate. Student B says that glycerol requires the most energy to evaporate.\n\n**Using the graph** in part (c), **justify** which student is correct.',
        marks: 2,
        ph: 'Student ... is correct.\nThe graph shows that ... had the greatest cooling effect, which means it absorbed the most heat energy during evaporation...',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Astrophysics: Saturn's Moon Titan & EM Waves (7 marks) Criterion A
  // Context: Huygens probe landing on Titan (2005), subsurface ocean, infrared
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Astrophysics: Moons, Planets & Electromagnetic Waves',
    marks: 7,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['moons and planets', 'geocentric vs heliocentric models', 'electromagnetic spectrum'], level: 'proficient' },
    stem: 'In 2005, the Huygens probe parachuted down through the thick atmosphere of Titan, the largest moon of Saturn, and landed on its surface. Centuries earlier, astronomers using early telescopes had first seen these moons as faint points of light near Saturn, before realising they were moons orbiting the planet.',
    artefact: {
      component: 'OrbitSim',
      data: {
        mode: 'moons',
        central: 'Saturn',
        bodies: [
          { name: 'Saturn', role: 'center', radius: 26, colour: '#e3c16f', fixed: true },
          { name: 'Tethys', role: 'orbiter', orbitalPeriod: 1.9, orbitRadius: 72, radius: 6, colour: '#cfe8f2' },
          { name: 'Dione', role: 'orbiter', orbitalPeriod: 2.7, orbitRadius: 104, radius: 7, colour: '#b8c4cc' },
          { name: 'Titan', role: 'orbiter', orbitalPeriod: 16, orbitRadius: 150, radius: 9, colour: '#d8a657' },
        ],
      },
      caption: "Three of Saturn's moons orbiting the planet; Huygens landed on Titan.",
    },
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
        text: 'At the time it was widely believed that everything in the universe orbited Earth. This is known as the geocentric model of the universe. Astronomers observed the moons of Saturn moving around the planet over many nights. This new evidence showed that the geocentric model was incorrect.\n\n**Suggest** how the observation of moons orbiting Saturn helped to disprove the geocentric model.',
        marks: 2,
        ph: 'The moons orbit Saturn, not Earth. This showed that not everything orbits Earth, which contradicts the geocentric model...',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Measurements made by spacecraft suggest that, deep beneath Titan\'s icy crust, there may be a hidden ocean of liquid water. There is additional interest because Titan also has lakes of liquid methane on its surface.\n\n**Suggest** why the presence of liquid water on the moon Titan would be of particular interest to scientists.',
        marks: 1,
        ph: 'Liquid water could support life / indicate conditions necessary for life...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: "The Cassini orbiter, which carried Huygens, mapped Titan's surface using radar and infrared waves because Titan's thick haze blocks visible light. Infrared waves are part of the electromagnetic spectrum shown below.\n\n**State** two properties that are shared by **all** waves in the electromagnetic spectrum.",
        marks: 2,
        artefact: {
          component: 'SpectrumSim',
          data: {
            mode: 'scrub',
            bands: ['Radio', 'Microwave', 'IR', 'Visible', 'UV', 'X-rays', 'Gamma'],
            axis: 'frequency increases left → right',
            target: 'IR',
          },
          caption: "The electromagnetic spectrum. Infrared (IR) was used to map Titan's surface through its haze.",
        },
        ph: '1. All electromagnetic waves travel at the same speed in a vacuum (3 × 10⁸ m/s)\n2. All electromagnetic waves are transverse waves',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Energy & Efficiency: Planning an Investigation (10 marks) Criterion B
  // Context: passenger-lift (elevator) motor lifting a car/counterweight
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Energy & Efficiency: Motor Investigation Planning',
    marks: 10,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'work-energy', topics: ['energy efficiency', 'gravitational potential energy', 'electrical power', 'scientific methodology'], level: 'proficient' },
    stem: 'All modern technologies rely on changing energy from one form into another. The efficiency of any energy conversion is found using the formula:\n\n**efficiency = (useful energy out ÷ total energy in) × 100**\n\nNo device is 100% efficient in converting energy. Improving the efficiency of energy conversion is an important goal for scientists and engineers who want to reduce the environmental impact of new technologies.\n\nA student builds a model passenger lift in which an electric motor winds a cable to raise a small lift car.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="frame4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b6c4cf"/><stop offset="1" stop-color="#8a99a6"/></linearGradient></defs><rect width="460" height="320" fill="#ffffff"/><rect x="120" y="30" width="220" height="260" fill="none" stroke="#cdd7df" stroke-width="2"/><rect x="150" y="36" width="160" height="16" fill="url(#frame4)" stroke="#5b6b78"/><rect x="200" y="52" width="64" height="42" rx="6" fill="#0b7285" stroke="#075460"/><text x="232" y="78" font-size="12" font-weight="700" text-anchor="middle" fill="#fff">M</text><text x="232" y="110" font-size="10" text-anchor="middle" fill="#0b7285">lift motor</text><circle cx="232" cy="100" r="3" fill="#5b6b78"/><line x1="232" y1="94" x2="232" y2="180" stroke="#444" stroke-width="2"/><rect x="196" y="180" width="72" height="70" rx="4" fill="#f08c00" stroke="#b46a00"/><text x="232" y="220" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">lift car</text><line x1="60" y1="295" x2="400" y2="295" stroke="#5b6b78" stroke-width="3"/><line x1="100" y1="295" x2="100" y2="180" stroke="#94a3ad" stroke-dasharray="3 3"/><line x1="92" y1="180" x2="108" y2="180" stroke="#94a3ad"/><text x="40" y="240" font-size="10" fill="#94a3ad">height h</text></svg>',
      },
      caption: 'A model passenger lift: an electric motor winds a cable to raise the lift car by a measured height h.',
    },
    tasks: [
      {
        label: 'a',
        text: 'For the lift, the useful energy output is the work done in raising the lift car. The student suspects that when the lift does more work, its efficiency will change.\n\n**State** one form of wasted energy in an electric lift motor.',
        marks: 1,
        ph: 'Heat energy / sound energy',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**State** a research question the student could use to guide their investigation.',
        marks: 2,
        ph: 'How does the height to which the lift car is raised affect the efficiency of the lift motor?\nOR: What is the relationship between work done and the efficiency of an electric lift motor?',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The useful energy output is equal to the lift car\'s change of gravitational potential energy as shown by the formula:\n\n**ΔEₚ = mgΔh**\n\nThe student plans to use height raised as the independent variable in their experiment.\n\n**Outline** how the student could vary the independent variable and how this data could be used to determine the useful energy output of the lift motor.',
        marks: 2,
        ph: 'The student could raise the lift car to different heights (e.g. 15 cm, 30 cm, 45 cm...) by...\nUsing ΔEₚ = mgh, the useful energy output can be calculated by multiplying the mass by g and the height raised...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'To measure efficiency, the student must also determine the total energy used by the motor while raising the lift car. They must determine the power output of the motor by measuring the current flowing through the motor and the voltage across it.\n\n**Draw** a circuit to measure the power output of the lift motor. The power supply has been started for you.\n\nDraggable circuit components: ammeter (A), voltmeter (V), motor (M), resistor, switch, wire.',
        marks: 3,
        artefact: {
          component: 'CircuitDiagram',
          data: {
            topology: 'series',
            components: [
              { type: 'battery', label: 'power supply' },
              { type: 'switch', label: 'switch' },
              { type: 'ammeter', label: 'A' },
            ],
          },
          caption: 'The power supply, switch and ammeter are already in series. Add the motor (in series) and a voltmeter (in parallel across the motor).',
        },
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
  // Context: investigate how voltage affects lift-motor efficiency
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Energy Efficiency: Investigation Design',
    marks: 14,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'work-energy', topics: ['energy efficiency', 'electrical power', 'gravitational potential energy', 'experimental design'], level: 'advanced' },
    stem: 'A second student decides to investigate how changing the voltage supplied to the lift motor affects the time taken to raise the lift car. They will use this to calculate the efficiency of the lift motor.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="frame5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b6c4cf"/><stop offset="1" stop-color="#8a99a6"/></linearGradient></defs><rect width="460" height="320" fill="#ffffff"/><rect x="120" y="30" width="220" height="260" fill="none" stroke="#cdd7df" stroke-width="2"/><rect x="150" y="36" width="160" height="16" fill="url(#frame5)" stroke="#5b6b78"/><rect x="200" y="52" width="64" height="42" rx="6" fill="#0b7285" stroke="#075460"/><text x="232" y="78" font-size="12" font-weight="700" text-anchor="middle" fill="#fff">M</text><line x1="232" y1="94" x2="232" y2="180" stroke="#444" stroke-width="2"/><rect x="196" y="180" width="72" height="70" rx="4" fill="#f08c00" stroke="#b46a00"/><text x="232" y="220" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">lift car</text><line x1="60" y1="295" x2="400" y2="295" stroke="#5b6b78" stroke-width="3"/><rect x="30" y="120" width="84" height="44" rx="4" fill="#222"/><text x="72" y="142" font-size="11" fill="#3ad36a" text-anchor="middle" font-family="monospace">V = ?</text><text x="72" y="158" font-size="9" fill="#9bb9cf" text-anchor="middle" font-family="monospace">power supply</text></svg>',
      },
      caption: 'The voltage supplied to the lift motor is varied while it raises the same lift car.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Design** an investigation that the student could use to collect data. In your answer you should include:\n\n• the independent and dependent variables\n• two control variables with justification\n• a detailed method for the collection of data\n• an explanation of how you will collect sufficient data\n• a statement of how data will be processed to calculate efficiency',
        marks: 14,
        ph: 'Independent variable: voltage supplied to the motor (V)\nDependent variable: time taken to raise the lift car / efficiency (%)\n\nControl variable 1: mass raised — kept constant because changes in mass would change the useful energy output, making it impossible to isolate the effect of voltage\nControl variable 2: height to which the car is raised — kept constant because a different height would change the useful energy output\n\nMethod:\n1. Set up the lift, cable drum and car as shown in the diagram\n2. Connect an ammeter in series with the motor and a voltmeter in parallel across the motor\n3. Set the power supply to an initial voltage of 1 V\n4. Press start simultaneously with the stopwatch; record the time for the car to rise 50 cm\n5. Record the current reading during the lift\n6. Repeat each voltage setting at least three times to improve reliability\n7. Increase the voltage in steps of 1 V up to 6 V and repeat\n\nUseful energy output: ΔEp = mgh (use same mass and height each trial)\nTotal energy input: E = V × I × t\nEfficiency = (ΔEp ÷ E) × 100',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Energy Efficiency: Data Processing (10 marks) Criterion C
  // Context: lift motor lifting different masses to 80 cm, 2 V supply
  // v2 numbers: g=9.81; q6a m=0.040 kg, h=0.80 m → 0.314 J; q6d 50 g, 0.18 A, 5.21 s
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Energy Efficiency: Data Processing',
    marks: 10,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'work-energy', topics: ['gravitational potential energy', 'energy efficiency', 'data processing', 'significant figures'], level: 'proficient' },
    stem: 'Another student has decided to change the mass raised to see if this affects the lift motor\'s efficiency.\n\nIn each trial of their experiment, they use the lift motor to raise different masses from the ground floor to a height of 80.0 cm.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="frame6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b6c4cf"/><stop offset="1" stop-color="#8a99a6"/></linearGradient></defs><rect width="460" height="320" fill="#ffffff"/><rect x="120" y="30" width="220" height="260" fill="none" stroke="#cdd7df" stroke-width="2"/><rect x="150" y="36" width="160" height="16" fill="url(#frame6)" stroke="#5b6b78"/><rect x="200" y="52" width="64" height="42" rx="6" fill="#0b7285" stroke="#075460"/><text x="232" y="78" font-size="12" font-weight="700" text-anchor="middle" fill="#fff">M</text><line x1="232" y1="94" x2="232" y2="190" stroke="#444" stroke-width="2"/><rect x="204" y="190" width="56" height="48" rx="4" fill="#f08c00" stroke="#b46a00"/><text x="232" y="219" font-size="10" font-weight="700" text-anchor="middle" fill="#fff">mass</text><line x1="60" y1="295" x2="400" y2="295" stroke="#5b6b78" stroke-width="3"/><line x1="100" y1="295" x2="100" y2="190" stroke="#94a3ad" stroke-dasharray="3 3"/><line x1="92" y1="190" x2="108" y2="190" stroke="#94a3ad"/><text x="40" y="245" font-size="10" fill="#94a3ad">80.0 cm</text></svg>',
      },
      caption: 'The lift motor raises each mass through the same height of 80.0 cm.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the change of gravitational potential energy of a **0.040 kg** mass as it is raised above the ground floor. Assume that the value of **g = 9.81 N kg⁻¹**.',
        marks: 2,
        ph: 'ΔEp = mgh\n= 0.040 × 9.81 × 0.80\n= ... J',
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
        text: 'The student then constructs a processed data table. For each trial, they calculate the power output of the motor and the efficiency of the motor. The voltage supplied to the motor was **2 V** in each trial.\n\nUsing data from part (c), **calculate** the total energy output and the efficiency of the lift motor for the trial when the mass was **50 g**. Use your answer from part (a) to calculate efficiency.',
        marks: 3,
        ph: 'Total energy = V × I × t = 2 × 0.18 × 5.21 = ... J\nEfficiency = (useful energy ÷ total energy) × 100\n= (answer from a ÷ total energy) × 100 = ... %',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Projectile Motion Investigation (17 marks) Criterion C
  // Context: toy catapult firing a foam ball at different launch angles
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Projectile Motion Investigation',
    marks: 17,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['projectile motion', 'data analysis', 'air resistance', 'experimental error'], level: 'advanced' },
    stem: 'An MYP student is interested in the motion of a foam ball when it is launched into the air. The student uses a toy catapult with a stretched elastic band to fire the ball. Then they measured the maximum height that the ball reached.\n\nThey performed one trial for different launch angles, starting from a launch directed vertically upwards which was labelled as zero degrees.',
    artefact: {
      component: 'ProjectileSim',
      data: {
        mode: 'launch',
        launch: { angleDeg: 20, speed: 16, g: 9.8, angleMin: 0, angleMax: 80, speedMin: 8, speedMax: 22 },
        g: 9.8,
      },
      caption: 'A foam ball fired from a toy catapult. The launch angle is measured from the vertical (0°).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student plotted this data on a graph and found a line of best fit. This helped the student to identify an outlier in their data when the launch angle was 30 degrees.\n\n**Select** the graph that best represents the student\'s data and **justify** your choice.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'launch angle / degrees',
            yLabel: 'maximum height / m',
            points: [[0, 4.6], [15, 4.0], [30, 4.3], [45, 2.9], [60, 1.8], [75, 0.8]],
            bestFit: 'line of best fit shows height decreasing with angle; the 30° point lies above the line (outlier)',
            readouts: [{ x: 0, note: 'read the height at 0° (y-intercept)' }],
            dataMaxX: 75,
          },
          caption: 'Maximum height of the foam ball against launch angle (the 30° point is an outlier).',
        },
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
        text: 'During the experiment, the student measured angle and height. The catapult was set at a specific angle for each trial before the ball was released. The height of the ball was measured by comparing the position of the ball during its flight to a metre ruler that was fixed to the wall.\n\n**Select** the most likely source of error in the student\'s data. **Justify** your answer.',
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
        text: 'During this investigation, the student launched a light foam ball as the object.\n\n**Suggest** how the shape, size and material of the object would help to reduce the effect of force of air resistance on the results. You should refer to particle theory in your answer.',
        marks: 2,
        ph: 'Shape: use a streamlined/aerodynamic shape to reduce the cross-sectional area the air must flow around.\nSize: use a smaller object so there is less surface area for air particles to collide with.\nMaterial: use a denser material so the ball has greater mass/inertia relative to the air resistance force, reducing its effect.',
        level: 'advanced',
      },
      {
        label: 'h',
        text: 'The student is interested in extending their investigation so that they can find out more about the motion of a projectile. **Suggest** another dependent variable that the student could measure, together with two control variables. The independent variable is the launch angle.',
        marks: 3,
        ph: 'Dependent variable: horizontal range (or time of flight)\n\nControl variable 1: mass of ball — because a heavier ball would have different inertia, affecting the range\nControl variable 2: elastic band extension / launch speed — because changing the initial speed would directly change the range, confounding results',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Ultrasound & X-rays in Medicine (24 marks) Criterion D
  // Context: medical imaging — joint/ligament injury; ultrasound vs x-rays for limb imaging
  // v2 numbers: speed = 1580 m/s, t = 9.0 × 10⁻⁵ s → 7.11 cm
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Ultrasound & X-rays in Medical Imaging',
    marks: 24,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['ultrasound', 'electromagnetic spectrum', 'wave speed calculations', 'science and society'], level: 'advanced' },
    stem: 'Ultrasound waves can be defined as sound waves with a frequency greater than 20 kHz, which is beyond the range of human hearing. A major use of ultrasound waves is in medical imaging systems.\n\nA sports physiotherapist uses ultrasound to look for damage to the soft tissue around an injured knee joint.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="b8" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker><linearGradient id="body82" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f6d8c0"/><stop offset="1" stop-color="#e6b48f"/></linearGradient></defs><rect width="560" height="240" fill="#ffffff"/><rect x="120" y="40" width="380" height="160" rx="40" fill="url(#body82)" stroke="#cf9a73"/><text x="310" y="30" font-size="12" text-anchor="middle" fill="#9a6a45">soft tissue around joint</text><rect x="70" y="100" width="56" height="40" rx="6" fill="#0b7285" stroke="#075460"/><text x="98" y="124" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">probe</text><ellipse cx="400" cy="120" rx="22" ry="16" fill="#cdd7df" stroke="#7a8893"/><text x="400" y="124" font-size="9" text-anchor="middle" fill="#3a464f">tissue boundary</text><line x1="126" y1="116" x2="376" y2="116" stroke="#0b7285" stroke-width="2" marker-end="url(#b8)"/><text x="240" y="108" font-size="10" fill="#0b7285">transmitted pulse</text><line x1="376" y1="132" x2="126" y2="132" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#b8)"/><text x="240" y="150" font-size="10" fill="#c0392b">reflected echo</text></svg>',
      },
      caption: 'An ultrasound probe sends a pulse into the joint; the echo reflected from a tissue boundary is timed to find its depth.',
    },
    tasks: [
      {
        label: 'a',
        text: 'If the speed of ultrasound waves in the human body is **1580 m s⁻¹**, and the reflection is detected **9.0 × 10⁻⁵ s** after transmission, **calculate** the distance in cm between the tissue boundary and the detector.',
        marks: 3,
        ph: 'Total distance = speed × time = 1580 × (9.0 × 10⁻⁵) = 0.1422 m\nDistance to boundary = 0.1422 ÷ 2 = 0.0711 m = 7.11 cm',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Ultrasound waves were first used for medical imaging in the 1950s. Before this, x-rays were used as a medical imaging technique.\n\nIn 2016, the World Health Organization estimated that two-thirds of the global population do not have access to medical imaging facilities. A government of a country with limited access to medical imaging is considering providing free imaging technology for examining sports injuries to limbs and joints.\n\n**Discuss and evaluate** the use of x-rays compared to ultrasound waves for imaging limb and joint injuries. In your answer, you should include:\n\n• an explanation of how the waves create images in each technique\n• a discussion of the impacts on human health for each technique\n• a discussion of the positive and negative economic implications for the government\n• a comment about ethical implications\n• a concluding appraisal giving your opinion',
        marks: 16,
        passage: 'Ultrasound scans: Uses sound waves to create live images of the organs, muscles and other structures. Heart rates and blood flows can also be viewed and measured. Ultrasound scans can check for blood flow, soft-tissue and ligament damage, and investigate some cancerous and non-cancerous growths. The ultrasound scan itself is believed to be harmless. Images can be hard to interpret and there is the possibility of a misdiagnosis. Cost: $500 per scan, $40 000 per machine.\n\nX-ray images: Uses high-energy electromagnetic waves to create images of bones. Organs, muscles and other structures are imaged with limited detail. X-rays can check for broken bones and to monitor the healing and treatment of bone problems. They are also used to check the condition of the lungs and check for the presence of some cancerous and non-cancerous growths. The absorption of x-rays leads to an increase in risk of developing cancers later in life. The risk is particularly high in younger children. Shielding is used to protect parts of the body not being imaged, and the risk for each x-ray is very small. Cost: $150 per image, $30 000 per machine.',
        ph: 'How waves create images:\n• Ultrasound: sound waves are emitted and reflect off tissue boundaries; the time delay and intensity of reflections create a real-time image\n• X-rays: high-energy EM waves pass through soft tissue but are absorbed by dense structures (bone); a shadow image is formed on a detector\n\nHealth impacts:\n• Ultrasound: no known health risks, believed to be harmless\n• X-rays: ionising radiation increases cancer risk; risk is small but higher for children; shielding reduces but does not eliminate risk\n\nEconomic implications:\n• Ultrasound: higher cost per machine ($40 000) but reusable; scanning cost of $500 may still be prohibitive\n• X-rays: cheaper per machine ($30 000) and per image ($150); could scan more patients; however health costs may offset savings\n\nEthical implications:\n• X-rays expose patients to ionising radiation; ultrasound avoids this for soft-tissue/ligament imaging\n• X-rays are better for diagnosing fractured bones; not providing any imaging denies access to healthcare\n\nConclusion: Ultrasound is the better option for soft-tissue and ligament injuries because it gives detailed live images without ionising radiation; x-rays remain essential where a bone fracture is suspected.',
        level: 'advanced',
      },
      {
        label: 'c',
        text: 'Since the 1960s medical imaging has become much more widespread. Medical imaging has given information about the development of unborn babies, their growth, the functioning of their organs and identification of their sex. Data from the United Nations (UN) has shown a change in the sex ratio at birth since the 1970s. The sex ratio at birth is the number of boys born for every 100 girls born. The expected biological sex ratio is 105 males per 100 females. There is the concern that identification of sex from medical imaging might be selectively used to terminate pregnancies, changing the sex ratio.\n\n**Discuss** why there would be a concern to the government of a country which has a large change to the sex ratio at birth and **suggest** an ethical action the government could take to prevent further imbalance in sex ratio at birth.',
        marks: 5,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Sex ratio at birth since 1970',
            xLabel: 'Year',
            yLabel: 'Boys per 100 girls',
            dataPoints: [
              { x: 1970, y: 106 }, { x: 1980, y: 108 }, { x: 1990, y: 111 },
              { x: 2000, y: 116 }, { x: 2010, y: 118 }, { x: 2020, y: 113 },
            ],
            xMin: 1970, xMax: 2020, yMin: 100, yMax: 125, xStep: 10, yStep: 5,
          },
          caption: 'Reported sex ratio at birth rising above the expected biological value of 105.',
        },
        ph: 'Concern: A significantly imbalanced sex ratio leads to social problems including workforce imbalance, difficulty finding partners, population decline, and breakdown of family structures. The graph shows the ratio rising above 105, suggesting selective terminations.\n\nEthical action: The government could introduce legislation preventing medical staff from revealing the sex of a foetus to parents before birth, or run public education campaigns about the ethical implications of sex-selective terminations.',
        level: 'advanced',
      },
    ],
  },

]
