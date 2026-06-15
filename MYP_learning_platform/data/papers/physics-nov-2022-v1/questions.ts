import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2022 · VARIANT 1  (isomorphic to physics-nov-2022)
// Same construct everywhere (crit, command term, marks, task structure, widgets,
// taxonomy tags). Only the real-world context, numbers and data-driven artefacts
// change. No figImages. v1 ≠ v2 ≠ source.
//   Q1 Nuclear/decay:  1938 U fission        → reactor U-235 fission + Sr-94 decay (industrial)
//   Q2 Thermal:        evaporation cooling   → sweating athletes / cooling liquids (sport, medical)
//   Q3 Astrophysics:   Galileo Jupiter moons → Cassini & Enceladus / Saturn (space)
//   Q4 Motor planning: motor + pulley        → warehouse hoist lifting a crate (industrial)
//   Q5 Crit B design:  motor voltage         → warehouse hoist voltage investigation (industrial)
//   Q6 Data process:   motor masses 95 cm    → hoist lifting masses 110 cm (industrial)
//   Q7 Projectile:     spring ball launcher  → water rocket launch angle (transport/space)
//   Q8 Crit D essay:   ultrasound vs x-ray   → ultrasound vs x-ray for abdominal imaging (medical)
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2022-v1',
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
  // Context: a working reactor splitting uranium-235; Sr-94 daughter decays
  // v1 numbers: energy need 1.05 × 10¹⁰ J/yr; fission of 1 g U releases 79 000 MJ
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
    stem: 'In a modern nuclear power station, slow-moving neutrons are used to bombard a fuel of uranium. The reactor controls the chain reaction so that the energy released can be used to generate electricity.\n\nSome atoms of uranium-235 (²³⁵₉₂U) absorb a neutron and change into atoms of uranium-236 (²³⁶₉₂U).',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="nu1" cx="0.4" cy="0.35"><stop offset="0" stop-color="#7fb2c9"/><stop offset="1" stop-color="#2c6c86"/></radialGradient><marker id="a1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#444"/></marker></defs><rect width="600" height="230" fill="#ffffff"/><circle cx="46" cy="115" r="7" fill="#c0392b"/><text x="30" y="140" font-size="10" fill="#c0392b">neutron</text><line x1="56" y1="115" x2="146" y2="115" stroke="#444" stroke-width="1.5" marker-end="url(#a1)"/><circle cx="182" cy="115" r="34" fill="url(#nu1)" stroke="#1f4a5c"/><text x="182" y="119" font-size="12" font-weight="700" text-anchor="middle" fill="#fff">236U</text><line x1="222" y1="115" x2="284" y2="115" stroke="#444" stroke-width="1.5"/><circle cx="345" cy="62" r="26" fill="#e3a93c" stroke="#a8721a"/><text x="345" y="66" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">140Xe</text><circle cx="345" cy="168" r="22" fill="#5b9a6b" stroke="#356b44"/><text x="345" y="172" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">94Sr</text><line x1="380" y1="56" x2="470" y2="36" stroke="#c0392b" stroke-width="1.5" marker-end="url(#a1)"/><line x1="385" y1="115" x2="475" y2="115" stroke="#c0392b" stroke-width="1.5" marker-end="url(#a1)"/><text x="498" y="118" font-size="11" fill="#c0392b">neutrons + energy</text></svg>',
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
        text: 'Uranium-236 can split into smaller nuclei. This is an example of nuclear fission. The total number of protons and neutrons is unchanged during this reaction.\n\nOne such fission reaction is shown below, but one chemical symbol is missing.\n\n²³⁵₉₂U + ¹₀n → ¹⁴⁰₅₄Xe + **?** + 2 neutrons\n\n**Determine** the missing symbol and add it to the equation. The draggable items are: ⁹⁴₃₈Sr, ⁹⁴₃₆Kr, ⁹⁰₃₈Sr, ⁹⁶₃₈Sr.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['⁹⁴₃₈Sr', '⁹⁴₃₆Kr', '⁹⁰₃₈Sr', '⁹⁶₃₈Sr'],
        ph: '⁹⁴₃₈Sr',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The products of the fission reaction are radioactive. The simulation shows how the activity of strontium-94 changes with time.\n\n**Using the graph, determine** the half-life of strontium-94.',
        marks: 2,
        artefact: {
          component: 'DecaySim',
          data: {
            isotope: 'strontium-94',
            daughter: 'yttrium-94',
            decayMode: 'beta',
            halfLife: 75,
            units: 's',
            initialActivity: 1200,
            activityUnits: 'Bq',
            axisMax: 400,
          },
          caption: 'Activity of strontium-94 against time (drag the time marker to read the activity).',
        },
        ph: 'Half-life = ... s\nWorking: initial activity ≈ 1200 Bq; half of 1200 = 600 Bq; read time at 600 Bq from graph...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'Fission reactions release energy. The energy requirement of an average person in an economically developed country is **1.05 × 10¹⁰ J** per year. The fission of 1 g of uranium releases **79 000 MJ** of energy.\n\n**Calculate** the number of grams of uranium that would be needed to provide all the energy required by an individual in an economically developed country.',
        marks: 2,
        ph: 'Energy needed = 1.05 × 10¹⁰ J\nEnergy per g = 79 000 MJ = 79 000 × 10⁶ J = 7.9 × 10¹⁰ J\nMass = (1.05 × 10¹⁰) ÷ (7.9 × 10¹⁰) = ... g',
        level: 'advanced',
      },
      {
        label: 'e',
        text: 'Building and running a nuclear reactor safely requires physicists, chemists and engineers to work together. The reactor was designed by teams from several different countries and scientific disciplines.\n\n**Suggest** the importance of collaboration in science.',
        marks: 1,
        ph: 'Collaboration allows scientists with different skills to...',
        level: 'foundation',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Thermal Energy & States of Matter (9 marks) Criterion A
  // Context: athletes cooling down — evaporation of liquids from skin
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
    stem: 'After exercising, the human body cools itself when sweat evaporates from the skin. A sports scientist investigates how quickly different liquids evaporate and how this affects cooling. The addition or removal of heat energy can cause changes in temperature and in state.',
    tasks: [
      {
        label: 'a',
        text: 'Before studying evaporation, the sports scientist first practises identifying variables using a simpler experiment: dropping a ball and measuring how high it bounces.\n\n**Drag and drop** each variable into the correct column to **identify** the independent variable, the dependent variable, and the control variables for this bounce experiment.',
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
        text: 'The scientist soaks identical cloths in three liquids — sunflower oil, pure water and propanol — and wraps each around a temperature probe. The graph shows how the temperature of each probe changes as the liquid evaporates.\n\n**Using the graph, select** the liquid that caused no cooling effect and the liquid that caused the greatest cooling effect.',
        marks: 2,
        artefact: {
          component: 'ThermalSim',
          data: {
            mode: 'cool',
            totalTime: 240,
            timeUnit: 's',
            tempUnit: '°C',
            labTempC: 22,
            probes: [
              { liquid: 'sunflower oil', startTempC: 22, endTempC: 21.6, minTempC: 21.6, behaviour: 'no cooling', color: '#f08c00' },
              { liquid: 'water', startTempC: 22, endTempC: 16.5, minTempC: 16.5, behaviour: 'moderate cooling', color: '#0b7285' },
              { liquid: 'propanol', startTempC: 22, endTempC: 11.0, minTempC: 11.0, behaviour: 'strong cooling', color: '#5b9a6b' },
            ],
          },
          caption: 'Temperature of three cloths soaked in different liquids as the liquid evaporates.',
        },
        widget: 'inline_dropdown_select',
        widgetItems: ['No cooling effect', 'Greatest cooling effect'],
        widgetOptions: ['sunflower oil', 'water', 'propanol'],
        ph: 'No cooling effect: sunflower oil\nGreatest cooling effect: propanol',
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
        text: 'Student A says that propanol requires the most energy to evaporate. Student B says that sunflower oil requires the most energy to evaporate.\n\n**Using the graph** in part (c), **justify** which student is correct.',
        marks: 2,
        ph: 'Student ... is correct.\nThe graph shows that ... had the greatest cooling effect, which means it absorbed the most heat energy during evaporation...',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Astrophysics: Saturn's Moons & EM Waves (7 marks) Criterion A
  // Context: Cassini probe (2005), Enceladus ocean, infrared analysis
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
    stem: 'In 2005, the Cassini space probe flew close to the planet Saturn and studied several of its moons. Looking through a telescope from Earth, early astronomers had first mistaken these moons for faint stars near Saturn, before realising they were in fact moons orbiting the planet.',
    artefact: {
      component: 'OrbitSim',
      data: {
        mode: 'moons',
        central: 'Saturn',
        bodies: [
          { name: 'Saturn', role: 'center', radius: 26, colour: '#e3c16f', fixed: true },
          { name: 'Enceladus', role: 'orbiter', orbitalPeriod: 1.4, orbitRadius: 70, radius: 6, colour: '#cfe8f2' },
          { name: 'Titan', role: 'orbiter', orbitalPeriod: 16, orbitRadius: 110, radius: 9, colour: '#d8a657' },
          { name: 'Rhea', role: 'orbiter', orbitalPeriod: 4.5, orbitRadius: 150, radius: 7, colour: '#b8c4cc' },
        ],
      },
      caption: "Three of Saturn's moons orbiting the planet, as studied by the Cassini probe.",
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
        text: 'At the time it was widely believed that everything in the universe orbited Earth. This is known as the geocentric model of the universe. Astronomers observed moons orbiting Saturn over many nights. This new evidence showed that the geocentric model was incorrect.\n\n**Suggest** how the observation of moons orbiting Saturn helped to disprove the geocentric model.',
        marks: 2,
        ph: 'The moons orbit Saturn, not Earth. This showed that not everything orbits Earth, which contradicts the geocentric model...',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The Cassini probe discovered that the small moon Enceladus shoots jets of water vapour and ice into space from cracks near its south pole. This is strong evidence that beneath its icy surface Enceladus has a layer of liquid water, possibly a global ocean.\n\n**Suggest** why the presence of liquid water on the moon Enceladus would be of particular interest to scientists.',
        marks: 1,
        ph: 'Liquid water could support life / indicate conditions necessary for life...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: "Cassini analysed the icy jets using an instrument that detects infrared waves. Infrared waves are part of the electromagnetic spectrum shown below.\n\n**State** two properties that are shared by **all** waves in the electromagnetic spectrum.",
        marks: 2,
        artefact: {
          component: 'SpectrumSim',
          data: {
            mode: 'scrub',
            bands: ['Radio', 'Microwave', 'IR', 'Visible', 'UV', 'X-rays', 'Gamma'],
            axis: 'frequency increases left → right',
            target: 'IR',
          },
          caption: 'The electromagnetic spectrum. Infrared (IR) is used to study the icy jets of Enceladus.',
        },
        ph: '1. All electromagnetic waves travel at the same speed in a vacuum (3 × 10⁸ m/s)\n2. All electromagnetic waves are transverse waves',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Energy & Efficiency: Planning an Investigation (10 marks) Criterion B
  // Context: warehouse electric hoist lifting a crate
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
    stem: 'All modern technologies rely on changing energy from one form into another. The efficiency of any energy conversion is found using the formula:\n\n**efficiency = (useful energy out ÷ total energy in) × 100**\n\nNo device is 100% efficient in converting energy. Improving the efficiency of energy conversion is an important goal for scientists and engineers who want to reduce the environmental impact of new technologies.\n\nA technician decides to test the efficiency of an electric warehouse hoist that lifts crates using a motor and a steel cable.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="beam4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b6c4cf"/><stop offset="1" stop-color="#8a99a6"/></linearGradient></defs><rect width="480" height="300" fill="#ffffff"/><rect x="60" y="36" width="360" height="18" fill="url(#beam4)" stroke="#5b6b78"/><text x="240" y="28" font-size="12" text-anchor="middle" fill="#1f2d3a">overhead support beam</text><rect x="150" y="54" width="70" height="46" rx="6" fill="#0b7285" stroke="#075460"/><text x="185" y="82" font-size="13" font-weight="700" text-anchor="middle" fill="#fff">M</text><text x="185" y="116" font-size="10" text-anchor="middle" fill="#0b7285">hoist motor</text><circle cx="245" cy="77" r="14" fill="#cdd7df" stroke="#5b6b78"/><circle cx="245" cy="77" r="3" fill="#5b6b78"/><text x="270" y="80" font-size="10" fill="#5b6b78">pulley</text><line x1="245" y1="91" x2="245" y2="210" stroke="#444" stroke-width="2"/><rect x="210" y="210" width="70" height="50" rx="4" fill="#f08c00" stroke="#b46a00"/><text x="245" y="240" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">crate</text><line x1="40" y1="280" x2="440" y2="280" stroke="#5b6b78" stroke-width="3"/><line x1="100" y1="260" x2="100" y2="280" stroke="#94a3ad"/><line x1="100" y1="210" x2="100" y2="260" stroke="#94a3ad" stroke-dasharray="3 3"/><text x="108" y="240" font-size="10" fill="#94a3ad">height lifted, h</text><line x1="92" y1="210" x2="108" y2="210" stroke="#94a3ad"/></svg>',
      },
      caption: 'A warehouse hoist: an electric motor turns a pulley to lift a crate by a measured height h.',
    },
    tasks: [
      {
        label: 'a',
        text: 'For the hoist, the useful energy output is the work done in lifting the crate. The technician suspects that when the hoist does more work, its efficiency will change.\n\n**State** one form of wasted energy in an electric hoist motor.',
        marks: 1,
        ph: 'Heat energy / sound energy',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**State** a research question the technician could use to guide their investigation.',
        marks: 2,
        ph: 'How does the height to which a crate is lifted affect the efficiency of an electric hoist?\nOR: What is the relationship between work done and the efficiency of an electric hoist?',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The useful energy output is equal to the crate\'s change of gravitational potential energy as shown by the formula:\n\n**ΔEₚ = mgΔh**\n\nThe technician plans to use height lifted as the independent variable in their experiment.\n\n**Outline** how the technician could vary the independent variable and how this data could be used to determine the useful energy output of the hoist.',
        marks: 2,
        ph: 'The technician could lift the crate to different heights (e.g. 20 cm, 40 cm, 60 cm...) by...\nUsing ΔEₚ = mgh, the useful energy output can be calculated by multiplying the mass by g and the height lifted...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'To measure efficiency, the technician must also determine the total energy used by the motor while lifting the crate. They must determine the power output of the motor by measuring the current flowing through the motor and the voltage across it.\n\n**Draw** a circuit to measure the power output of the hoist motor. The power supply has been started for you.\n\nDraggable circuit components: ammeter (A), voltmeter (V), motor (M), resistor, switch, wire.',
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
        text: 'Measuring the power output of the motor alone is not sufficient to determine the total energy used by the motor.\n\n**Outline** what other quantity the technician must measure and **state** how this would be used to calculate the total energy used.',
        marks: 2,
        ph: 'The technician must also measure time.\nTotal energy = power × time (E = P × t)\nSo total energy = voltage × current × time',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Energy Efficiency: Full Investigation Design (14 marks) Criterion B
  // Context: investigate how voltage affects hoist efficiency
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
    stem: 'A second technician decides to investigate how changing the voltage supplied to the hoist motor affects the time taken to lift a crate. They will use this to calculate the efficiency of the hoist.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="beam5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b6c4cf"/><stop offset="1" stop-color="#8a99a6"/></linearGradient></defs><rect width="480" height="300" fill="#ffffff"/><rect x="60" y="36" width="360" height="18" fill="url(#beam5)" stroke="#5b6b78"/><rect x="150" y="54" width="70" height="46" rx="6" fill="#0b7285" stroke="#075460"/><text x="185" y="82" font-size="13" font-weight="700" text-anchor="middle" fill="#fff">M</text><circle cx="245" cy="77" r="14" fill="#cdd7df" stroke="#5b6b78"/><circle cx="245" cy="77" r="3" fill="#5b6b78"/><line x1="245" y1="91" x2="245" y2="210" stroke="#444" stroke-width="2"/><rect x="210" y="210" width="70" height="50" rx="4" fill="#f08c00" stroke="#b46a00"/><text x="245" y="240" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">crate</text><line x1="40" y1="280" x2="440" y2="280" stroke="#5b6b78" stroke-width="3"/><rect x="330" y="120" width="90" height="46" rx="4" fill="#222"/><text x="375" y="142" font-size="11" fill="#3ad36a" text-anchor="middle" font-family="monospace">V = ?</text><text x="375" y="158" font-size="9" fill="#9bb9cf" text-anchor="middle" font-family="monospace">power supply</text></svg>',
      },
      caption: 'The voltage supplied to the hoist motor is varied while it lifts the same crate.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Design** an investigation that the technician could use to collect data. In your answer you should include:\n\n• the independent and dependent variables\n• two control variables with justification\n• a detailed method for the collection of data\n• an explanation of how you will collect sufficient data\n• a statement of how data will be processed to calculate efficiency',
        marks: 14,
        ph: 'Independent variable: voltage supplied to the motor (V)\nDependent variable: time taken to lift the crate / efficiency (%)\n\nControl variable 1: mass lifted — kept constant because changes in mass would change the useful energy output, making it impossible to isolate the effect of voltage\nControl variable 2: height to which the crate is lifted — kept constant because a different height would change the useful energy output\n\nMethod:\n1. Set up the hoist, pulley and crate as shown in the diagram\n2. Connect an ammeter in series with the motor and a voltmeter in parallel across the motor\n3. Set the power supply to an initial voltage of 1 V\n4. Press start simultaneously with the stopwatch; record the time for the crate to rise 50 cm\n5. Record the current reading during the lift\n6. Repeat each voltage setting at least three times to improve reliability\n7. Increase the voltage in steps of 1 V up to 6 V and repeat\n\nUseful energy output: ΔEp = mgh (use same mass and height each trial)\nTotal energy input: E = V × I × t\nEfficiency = (ΔEp ÷ E) × 100',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Energy Efficiency: Data Processing (10 marks) Criterion C
  // Context: hoist lifting different masses to 110 cm, 2 V supply
  // v1 numbers: g=9.81; q6a m=0.060 kg, h=1.10 m → 0.648 J; q6d 50 g, 0.18 A, 5.21 s
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
    stem: 'Another technician has decided to change the mass lifted to see if this affects the hoist\'s efficiency.\n\nIn each trial of their experiment, they use the hoist to lift different masses from the floor to a height of 110.0 cm.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="beam6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b6c4cf"/><stop offset="1" stop-color="#8a99a6"/></linearGradient></defs><rect width="460" height="300" fill="#ffffff"/><rect x="50" y="30" width="360" height="16" fill="url(#beam6)" stroke="#5b6b78"/><rect x="140" y="46" width="64" height="42" rx="6" fill="#0b7285" stroke="#075460"/><text x="172" y="72" font-size="12" font-weight="700" text-anchor="middle" fill="#fff">M</text><circle cx="228" cy="67" r="13" fill="#cdd7df" stroke="#5b6b78"/><line x1="228" y1="80" x2="228" y2="215" stroke="#444" stroke-width="2"/><rect x="200" y="215" width="56" height="44" rx="4" fill="#f08c00" stroke="#b46a00"/><text x="228" y="242" font-size="10" font-weight="700" text-anchor="middle" fill="#fff">mass</text><line x1="40" y1="280" x2="420" y2="280" stroke="#5b6b78" stroke-width="3"/><line x1="90" y1="280" x2="90" y2="215" stroke="#94a3ad" stroke-dasharray="3 3"/><line x1="82" y1="215" x2="98" y2="215" stroke="#94a3ad"/><text x="100" y="250" font-size="10" fill="#94a3ad">110.0 cm</text></svg>',
      },
      caption: 'The hoist lifts each mass through the same height of 110.0 cm.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the change of gravitational potential energy of a **0.060 kg** mass as it is lifted above the floor. Assume that the value of **g = 9.81 N kg⁻¹**.',
        marks: 2,
        ph: 'ΔEp = mgh\n= 0.060 × 9.81 × 1.10\n= ... J',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'The technician used the same supply voltage in every trial of their experiment.\n\n**Outline** how this helped to ensure the validity of the data.',
        marks: 2,
        ph: 'Mass is the independent variable, so voltage must be kept constant (controlled) to ensure any change in efficiency is due to mass only. Changes in voltage would change the power input, making results invalid...',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The technician recorded their raw data in their notebook as shown below:\n\n| Mass | Current | Time |\n|------|---------|------|\n| 30 g | 0.15 A | 4.74 s |\n| 20 g | 0.14 A | 4.68 s |\n| 50 g | 0.18 A | 5.21 s |\n| 10 g | 0.12 A | 4.32 s |\n| 40 g | 0.17 A | 5.16 s |\n\n**Organise** the technician\'s raw data into a table with appropriate headings, units, and data in increasing order of mass.',
        marks: 3,
        ph: 'Table with column headers Mass/g | Current/A | Time/s\nData in order: 10, 20, 30, 40, 50 g\nUnits only in headers, not in data cells',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The technician then constructs a processed data table. For each trial, they calculate the power output of the motor and the efficiency of the motor. The voltage supplied to the motor was **2 V** in each trial.\n\nUsing data from part (c), **calculate** the total energy output and the efficiency of the hoist for the trial when the mass was **50 g**. Use your answer from part (a) to calculate efficiency.',
        marks: 3,
        ph: 'Total energy = V × I × t = 2 × 0.18 × 5.21 = ... J\nEfficiency = (useful energy ÷ total energy) × 100\n= (answer from a ÷ total energy) × 100 = ... %',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Projectile Motion Investigation (17 marks) Criterion C
  // Context: water rocket launched at different angles, max height measured
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
    stem: 'An MYP student is interested in the motion of a water rocket when it is launched into the air. The student uses a launch pad with compressed air to fire the rocket. Then they measured the maximum height that the rocket reached.\n\nThey performed one trial for different launch angles, starting from a launch directed vertically upwards which was labelled as zero degrees.',
    artefact: {
      component: 'ProjectileSim',
      data: {
        mode: 'launch',
        launch: { angleDeg: 20, speed: 18, g: 9.8, angleMin: 0, angleMax: 80, speedMin: 10, speedMax: 24 },
        g: 9.8,
      },
      caption: 'A water rocket launched from a pad. The launch angle is measured from the vertical (0°).',
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
            points: [[0, 5.4], [15, 4.7], [30, 5.0], [45, 3.4], [60, 2.2], [75, 1.0]],
            bestFit: 'line of best fit shows height decreasing with angle; the 30° point lies above the line (outlier)',
            readouts: [{ x: 0, note: 'read the height at 0° (y-intercept)' }],
            dataMaxX: 75,
          },
          caption: 'Maximum height of the water rocket against launch angle (the 30° point is an outlier).',
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
        text: 'During the experiment, the student measured angle and height. The launch pad was set at a specific angle for each trial before the rocket was launched. The height of the rocket was measured by comparing the position of the rocket during its flight to a tall measuring pole fixed in the ground.\n\n**Select** the most likely source of error in the student\'s data. **Justify** your answer.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['angle', 'height'],
        ph: 'Height — because the rocket is moving during measurement, making it difficult to read the height accurately from the pole.',
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
        text: 'The student conducts additional research to understand their results. They learn that the motion of the rocket can be influenced by the force of air resistance.\n\n**Select** how the height reached by the rocket would be affected by the force of air resistance. **Use scientific reasoning to justify** your answer.\n\nThe height reached would be: decreased / increased / unchanged',
        marks: 3,
        widget: 'radio_select',
        widgetOptions: ['decreased', 'increased', 'unchanged'],
        ph: 'Decreased\nJustification: Air resistance acts as an additional force opposing the motion of the rocket. This means the total force acting against the rocket is greater, causing greater deceleration. Less kinetic energy is converted to gravitational potential energy, so less height is gained. Energy is also converted to heat by air resistance.',
        level: 'advanced',
      },
      {
        label: 'g',
        text: 'During this investigation, the student launched a small plastic water rocket as the object.\n\n**Suggest** how the shape, size and material of the object would help to reduce the effect of force of air resistance on the results. You should refer to particle theory in your answer.',
        marks: 2,
        ph: 'Shape: use a streamlined/aerodynamic shape to reduce the cross-sectional area the air must flow around.\nSize: use a smaller object so there is less surface area for air particles to collide with.\nMaterial: use a denser material so the rocket has greater mass/inertia relative to the air resistance force, reducing its effect.',
        level: 'advanced',
      },
      {
        label: 'h',
        text: 'The student is interested in extending their investigation so that they can find out more about the motion of a projectile. **Suggest** another dependent variable that the student could measure, together with two control variables. The independent variable is the launch angle.',
        marks: 3,
        ph: 'Dependent variable: horizontal range (or time of flight)\n\nControl variable 1: mass of rocket / volume of water — because a heavier rocket would have different inertia, affecting the range\nControl variable 2: air pressure used to launch / launch speed — because changing the initial speed would directly change the range, confounding results',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Ultrasound & X-rays in Medicine (24 marks) Criterion D
  // Context: medical imaging — gallstones; ultrasound vs x-rays for abdominal imaging
  // v1 numbers: speed = 1540 m/s, t = 1.2 × 10⁻⁴ s → 9.24 cm
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
    stem: 'Ultrasound waves can be defined as sound waves with a frequency greater than 20 kHz, which is beyond the range of human hearing. A major use of ultrasound waves is in medical imaging systems.\n\nA gallstone is a hard mass that can form in the gall bladder and cause pain or block the flow of bile.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="a8" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker><linearGradient id="body8" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f6d8c0"/><stop offset="1" stop-color="#e6b48f"/></linearGradient></defs><rect width="560" height="240" fill="#ffffff"/><rect x="120" y="40" width="380" height="160" rx="40" fill="url(#body8)" stroke="#cf9a73"/><text x="310" y="30" font-size="12" text-anchor="middle" fill="#9a6a45">body tissue</text><rect x="70" y="100" width="56" height="40" rx="6" fill="#0b7285" stroke="#075460"/><text x="98" y="124" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">probe</text><circle cx="400" cy="120" r="18" fill="#7a6a55" stroke="#4e4030"/><text x="400" y="124" font-size="10" text-anchor="middle" fill="#fff">stone</text><line x1="126" y1="116" x2="378" y2="116" stroke="#0b7285" stroke-width="2" marker-end="url(#a8)"/><text x="240" y="108" font-size="10" fill="#0b7285">transmitted pulse</text><line x1="378" y1="132" x2="126" y2="132" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#a8)"/><text x="240" y="150" font-size="10" fill="#c0392b">reflected echo</text></svg>',
      },
      caption: 'An ultrasound probe sends a pulse into the body; the echo reflected from the gallstone is timed to find its depth.',
    },
    tasks: [
      {
        label: 'a',
        text: 'If the speed of ultrasound waves in the human body is **1540 m s⁻¹**, and the reflection is detected **1.2 × 10⁻⁴ s** after transmission, **calculate** the distance in cm between the gallstone and the detector.',
        marks: 3,
        ph: 'Total distance = speed × time = 1540 × (1.2 × 10⁻⁴) = 0.1848 m\nDistance to stone = 0.1848 ÷ 2 = 0.0924 m = 9.24 cm',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Ultrasound waves were first used for medical imaging in the 1950s. Before this, x-rays were used as a medical imaging technique.\n\nIn 2016, the World Health Organization estimated that two-thirds of the global population do not have access to medical imaging facilities. A government of a country with limited access to medical imaging is considering providing free imaging technology for abdominal examinations.\n\n**Discuss and evaluate** the use of x-rays compared to ultrasound waves for abdominal imaging. In your answer, you should include:\n\n• an explanation of how the waves create images in each technique\n• a discussion of the impacts on human health for each technique\n• a discussion of the positive and negative economic implications for the government\n• a comment about ethical implications\n• a concluding appraisal giving your opinion',
        marks: 16,
        passage: 'Ultrasound scans: Uses sound waves to create live images of the organs, muscles and other structures. Heart rates and blood flows can also be viewed and measured. Ultrasound scans can check for blood flow, heart problems, possible problems in the abdomen and kidneys, and investigate some cancerous and non-cancerous growths. The ultrasound scan itself is believed to be harmless. Images can be hard to interpret and there is the possibility of a misdiagnosis. Cost: $500 per scan, $40 000 per machine.\n\nX-ray images: Uses high-energy electromagnetic waves to create images of bones. Organs, muscles and other structures are imaged with limited detail. X-rays can check for broken bones and to monitor the healing and treatment of bone problems. They are also used to check the condition of the lungs and check for the presence of some cancerous and non-cancerous growths. The absorption of x-rays leads to an increase in risk of developing cancers later in life. The risk is particularly high in younger children. Shielding is used to protect parts of the body not being imaged, and the risk for each x-ray is very small. Cost: $150 per image, $30 000 per machine.',
        ph: 'How waves create images:\n• Ultrasound: sound waves are emitted and reflect off tissue boundaries; the time delay and intensity of reflections create a real-time image\n• X-rays: high-energy EM waves pass through soft tissue but are absorbed by dense structures (bone/stones); a shadow image is formed on a detector\n\nHealth impacts:\n• Ultrasound: no known health risks, believed to be harmless\n• X-rays: ionising radiation increases cancer risk; risk is small but higher for children; shielding reduces but does not eliminate risk\n\nEconomic implications:\n• Ultrasound: higher cost per machine ($40 000) but reusable; scanning cost of $500 may still be prohibitive\n• X-rays: cheaper per machine ($30 000) and per image ($150); could scan more patients; however health costs may offset savings\n\nEthical implications:\n• Exposing patients to ionising radiation raises ethical concerns; ultrasound avoids this for soft-tissue abdominal imaging\n• Not providing any imaging denies access to healthcare — also an ethical issue\n\nConclusion: Ultrasound is the better option for abdominal soft-tissue imaging because it gives detailed live images without ionising-radiation risk. Although the machine cost is higher, the health and ethical benefits outweigh the economic difference.',
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
              { x: 1970, y: 105 }, { x: 1980, y: 107 }, { x: 1990, y: 112 },
              { x: 2000, y: 117 }, { x: 2010, y: 119 }, { x: 2020, y: 114 },
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
