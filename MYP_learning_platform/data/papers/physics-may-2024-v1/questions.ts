import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2024-v1/'

export const paperMeta = {
  id: 'physics-may-2024-v1',
  subject: 'Physics',
  session: 'May',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // Q1 — Natural Gas Power Station & Greenhouse Effect (12 marks) Crit A
  // V1: Natural gas (methane); E=5.5e7×1.8e5=9.9e12 J; 36000 MW×0.25=9000 MW
  // Q1f: radio_select 4 opts, correct=3 (D)
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Natural Gas Power Station & Greenhouse Effect',
    marks: 12,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['states of matter', 'kinetic theory', 'specific heat capacity', 'phase changes'], level: 'proficient' },
    stem: 'Natural gas-burning thermal power plants convert chemical potential energy into electricity by combusting methane to heat water.\n\nA natural gas power plant involves three states of matter. The diagram shows the main components of the plant.',
    figImages: [`${P}q1-power-station.png`],
    tasks: [
      {
        label: 'a',
        text: '**Identify** the location of each substance below by selecting the correct region in the power station diagram.\n\n• Water (liquid)\n• Steam (gas)\n• Natural gas (gas/fuel)',
        marks: 1,
        widget: 'inline_dropdown_select',
        widgetItems: ['Water', 'Steam', 'Natural gas'],
        widgetOptions: ['Boiler / heat exchanger', 'Gas supply / combustion chamber', 'Cooling tower / condenser'],
        ph: 'Water: Boiler\nSteam: Cooling tower/condenser\nNatural gas: Gas supply/combustion chamber',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'Absorbing heat can affect the kinetic energy of water molecules. **State** how water molecules are affected by an increase in kinetic energy.',
        marks: 1,
        ph: 'The molecules move faster / vibrate more rapidly.',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'As water boils into steam, the heat energy absorbed does **not** affect the kinetic energy of the molecules. **Outline** what happens to this heat energy, referring to the movement and arrangement of particles.',
        marks: 2,
        ph: 'The heat energy is used to break intermolecular bonds/forces between the water molecules.\nParticles move from a close, ordered arrangement to a widely spaced, disordered arrangement (liquid → gas).\nThe potential energy of the particles increases but their kinetic energy (temperature) does not.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'One kilogram of natural gas contains approximately **5.5 × 10⁷ J** of chemical potential energy. For a natural gas power plant that burns **1.8 × 10⁵ kg** of gas per hour, **calculate** the energy released in one hour.\n\nGive your answer to two significant figures.',
        marks: 2,
        ph: 'Energy = 5.5 × 10⁷ × 1.8 × 10⁵\n= 9.9 × 10¹² J (2 s.f.)',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'Another natural gas power plant generates a total power of **36 000 MW**. If the efficiency of this power station is **25 %**, **determine** the useful power output.',
        marks: 2,
        ph: 'Useful power = total power × efficiency\n= 36 000 × 0.25\n= 9000 MW',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'Burning natural gas contributes to climate change by releasing CO₂ and other greenhouse gases. The diagram shows the flow of energy through Earth\'s atmosphere.\n\n**Select** the arrow in the diagram which would be most affected by burning natural gas.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'Solar energy from the Sun',
          'Energy reflected by top of clouds',
          'Heat energy from the ground',
          'Heat energy absorbed and re-emitted by greenhouse gases',
        ],
        figImages: [`${P}q1f-greenhouse.png`],
        ph: 'Select the most appropriate arrow',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'Greenhouse gases trap heat energy in Earth\'s atmosphere. This trapped heat is associated with more extreme weather events like storms, droughts, floods and changes to Earth\'s climate.\n\nUsing scientific knowledge, **explain** why trapping heat energy in Earth\'s atmosphere would cause more extreme weather events and changes to Earth\'s climate.',
        marks: 3,
        ph: 'Trapping heat energy increases the mean temperature of the atmosphere.\nHigher temperatures cause greater evaporation from oceans → more water vapour → more intense rainfall and storms.\nWarmer oceans drive stronger hurricane formation and more frequent heatwaves/droughts in inland areas.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Q2 — Nuclear Fission: U-235 → La-142 + Br-93 + n (12 marks) Crit A
  // V1: different daughter products from U-235 fission
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Nuclear Fission & Radioactive Decay',
    marks: 12,
    topicCanonical: 'Nuclear Reactions & Energy',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'radioactive decay', 'nuclear equations', 'half-life', 'nuclear energy'], level: 'proficient' },
    stem: 'Nuclear fission is a reaction in which a heavy nucleus splits into two smaller nuclei, releasing large amounts of energy and one or more free neutrons.\n\nThe animation shows the fission of uranium-235 when it absorbs a neutron. The uranium nucleus splits into lanthanum-142 and bromine-93, releasing one free neutron and energy.',
    figImages: [`${P}q2-fission.png`],
    tasks: [
      {
        label: 'a',
        text: 'Using the periodic table, **state** the number of protons and the number of neutrons present in the nucleus of one atom of uranium-235.',
        marks: 2,
        ph: 'Number of protons: 92\nNumber of neutrons: 143 (235 − 92)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Outline** how the protons and neutrons are affected by the fission of uranium-235 shown above.',
        marks: 2,
        ph: 'The protons and neutrons are divided between the two daughter nuclei (La-142 and Br-93) and one free neutron.\nThe total number of protons (92) and neutrons (144 = 143+1) is conserved before and after the reaction.',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'A neutron is needed to initiate this fission reaction. Free neutrons are also produced during the reaction. This means that a chain reaction can occur.\n\n**Suggest** the meaning of the term chain reaction.',
        marks: 2,
        ph: 'A chain reaction is when the neutrons released in one fission event go on to trigger further fission reactions in other uranium-235 nuclei.\nThis continues in a self-sustaining cascade, producing more and more reactions.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'In nuclear power plants, fission reactions are used to supply energy, but these chain reactions must be carefully controlled.\n\n**Describe** a possible danger of an uncontrolled chain reaction in a nuclear power plant.',
        marks: 3,
        ph: 'An uncontrolled chain reaction causes an exponentially increasing number of fission events.\nThis releases enormous amounts of energy in a very short time.\nThis could cause a nuclear meltdown, explosion, or catastrophic release of radioactive material into the environment, endangering surrounding populations.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Nuclear power plants use uranium in the form of fuel rods. These rods are no longer useable when the level of uranium-235 remaining is low. However, used fuel rods still contain a small amount of remaining uranium-235 which decays over time, emitting radiation as shown in the graph below.\n\nUse the graph to **predict** how many years it would take for **50 %** of the remaining uranium to decay (the half-life).',
        marks: 1,
        figImages: [`${P}q2e-decay-graph.png`],
        ph: 'Read from graph: 50% remaining corresponds to the half-life.\nHalf-life ≈ ... million years (read from the graph at 50% remaining).',
        level: 'developing',
      },
      {
        label: 'f',
        text: '**Suggest** why the long decay time of uranium-235 poses a significant challenge for the safe disposal of fuel rods.',
        marks: 2,
        ph: 'The long half-life means the fuel rods remain dangerously radioactive for millions of years.\nThis is challenging because: secure, geologically stable storage must be maintained for an exceptionally long time; future generations inherit the problem; any leak or geological change could release radioactive material.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Q3 — Constantan Wire Resistance Investigation (16 marks) Crit B
  // V1: constantan wire; Q3c correct=0; Q3e correct=0
  // Q3f: V=1.80V, I=0.30A → R=6.0Ω; Q3g: plot (100, 6.0)
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Wire Resistance Investigation',
    marks: 16,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['resistance', "Ohm's law", 'measuring current and voltage', 'series circuits'], level: 'proficient' },
    stem: 'A student plans to investigate how the length of a constantan wire affects its electrical resistance.\n\nThe table shows the wires available in the laboratory:\n\n| Length / cm | Material   | Cross-sectional area / mm² |\n|-------------|------------|----------------------------|\n| 40          | Constantan | 2.5                        |\n| 60          | Constantan | 2.5                        |\n| 80          | Constantan | 2.5                        |\n| 100         | Copper     | 1.0                        |\n| 100         | Constantan | 1.5                        |\n| 100         | Copper     | 2.0                        |\n| 100         | Aluminium  | 2.5                        |\n| 100         | Copper     | 2.5                        |\n| 100         | Gold       | 2.5                        |\n| 100         | Constantan | 2.5                        |\n| 100         | Copper     | 3.0                        |\n| 120         | Constantan | 2.5                        |',
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that would be tested in this investigation.',
        marks: 1,
        ph: 'How does the length of a constantan wire affect its electrical resistance?',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for this investigation using scientific reasoning.\n\nIf:\n\nThen:\n\nBecause:',
        marks: 3,
        ph: 'If: the length of the constantan wire increases,\nThen: the resistance of the wire will increase,\nBecause: electrons must travel through more metal ions, causing more collisions and greater opposition to current flow; resistance is proportional to length (R = ρL/A).',
        level: 'proficient',
      },
      {
        label: 'c',
        text: '**Select** the wires the student should use to collect sufficient data to determine the relationship between the resistance and the length of the wire.',
        marks: 3,
        widget: 'radio_select',
        widgetOptions: [
          'Constantan wires: 40 cm, 60 cm, 80 cm, 100 cm, 120 cm (all 2.5 mm²)',
          'All 100 cm wires of different materials',
          'Constantan wires of different cross-sectional areas',
          'Any five wires regardless of material',
        ],
        ph: 'Select the correct set of wires',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Justify** the selection you made in part (c).',
        marks: 2,
        ph: 'The independent variable is the length. To isolate its effect, material and cross-sectional area must be controlled (CVs). Choosing constantan wires of 40–120 cm (all 2.5 mm²) keeps material and area constant while varying only length. Five lengths provide sufficient data to identify the relationship.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: '**Select** the location in the circuit below for each piece of equipment required to take measurements to calculate the resistance of a wire.',
        marks: 1,
        figImages: [`${P}q3e-circuit.png`],
        widget: 'radio_select',
        widgetOptions: [
          'Voltmeter in parallel with wire; Ammeter in series with wire',
          'Voltmeter in series with wire; Ammeter in parallel with wire',
          'Both Voltmeter and Ammeter in series',
          'Both Voltmeter and Ammeter in parallel',
        ],
        ph: 'Select the correct circuit configuration',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'For one of the trials when the wire was **100 cm** long, the voltage across the wire was **1.80 V** and the current through the wire was measured as **0.30 A**. **Determine** the resistance of the wire.',
        marks: 2,
        ph: 'R = V / I\nR = 1.80 / 0.30\nR = 6.0 Ω',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'The graph below shows the processed data from the experiment. **Plot** the value you determined in part (f) and **draw** the line of best fit on the graph.',
        marks: 2,
        figImages: [`${P}q3g-graph.png`],
        ph: 'Plot the point at (100, 6.0) on the graph.\nDraw a straight line of best fit through the origin that models all data points.',
        level: 'developing',
      },
      {
        label: 'h',
        text: 'According to theory, the relationship between resistance and length should be proportional; however, the student\'s results do not fit perfectly on the line of best fit. **Suggest** one source of error in this investigation and how it would affect the calculated value of resistance.',
        marks: 3,
        ph: 'Source of error: the wire temperature increases during measurement (resistance increases with temperature for metals), causing the resistance to be measured slightly higher than at room temperature.\nEffect: calculated resistance values will be systematically higher than the true values, causing the line of best fit to have a slightly steeper gradient than the theoretical value.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Q4 — Steel Ball & Ceramic Magnet Experiment (23 marks) Crit C
  // V1: ceramic magnet on wooden track; widget invariants preserved
  // Q4b: variable_classify 6 widgetItems, 2 widgetOptions (unchanged)
  // Q4d: radio_select ['A','B','C','D'] correct=0
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Ball, Magnet & Energy Conservation',
    marks: 23,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['magnetic poles and fields', 'magnetic field lines', 'work done'], level: 'advanced' },
    stem: 'A student sets up an experiment with two steel balls held magnetically on one side of a very strong ceramic magnet placed on a wooden track. A single ball is rolled towards the other side of the magnet. As this ball collides with the magnet, the ball on the other side shoots out with a much faster velocity, as shown in the slow-motion video.',
    figImages: [`${P}q4-setup.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** the conservation law that explains why the exiting ball reaches the same height for both angles of the inclined plane.',
        marks: 1,
        ph: 'The law of conservation of energy: energy cannot be created or destroyed, only transformed. The kinetic energy of the exiting ball is converted to gravitational potential energy as it rises, reaching the same height regardless of angle.',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The slow-motion video shows the motion of the steel ball just before it collides with the magnet. **Draw** and **label** the forces acting on the ball while it is rolling **just before** it collides with the magnet.\n\nDraggable items: Electrostatic force | Magnetic force | Normal force | Tension force | Upthrust | Weight force',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Electrostatic force', 'Magnetic force', 'Normal force', 'Tension force', 'Upthrust', 'Weight force'],
        widgetOptions: ['Acting on sphere', 'Not acting on sphere'],
        ph: 'Acting on sphere: Magnetic force (towards magnet), Normal force (upward), Weight force (downward)\nNot acting: Electrostatic force, Tension force, Upthrust',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Suggest** why the acceleration of the ball is not constant as it approaches the magnet. **Justify** your answer using scientific reasoning.',
        marks: 2,
        ph: 'The magnetic force increases as the ball gets closer to the magnet (magnetic field strength increases with proximity).\nBy Newton\'s second law (F = ma), a greater force on the same mass results in greater acceleration — so acceleration increases as the ball approaches.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The ceramic magnet can be assumed to have a magnetic field similar to that of a bar magnet. **Select** the diagram that best represents the magnetic field lines around the magnet.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: [`${P}q4d-magnetic-fields.png`],
        ph: 'Select A, B, C, or D',
        level: 'foundation',
      },
      {
        label: 'e',
        text: 'Once the incoming ball collides with the magnet, the exiting ball on the other side has a much greater kinetic energy than the incoming ball before the collision. Use your scientific knowledge to **suggest** a reason for this observation.',
        marks: 1,
        ph: 'Magnetic potential energy stored in the ball-magnet system is converted to kinetic energy as the exiting ball is launched. The exiting ball is strongly attracted by the magnet from behind and repelled by the other ball, transferring the stored magnetic PE as additional KE.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'You plan to design an investigation to find out the relationship between the maximum height (h₂) reached by the exiting ball and the initial height (h₁) of the incoming ball. In your plan, you should include:\n\n• the independent variable, dependent variable and one control variable\n• a hypothesis which is explained using scientific reasoning\n• a detailed method for how you will collect data, including the equipment you will use\n• the values of the independent variable that will be used\n• details of how you will make sure your method is safe',
        marks: 11,
        figImages: [`${P}q4f-setup.png`],
        ph: 'IV: initial height h₁ (cm)\nDV: maximum height h₂ (cm)\nCV: mass of balls / angle of track / same magnet\n\nHypothesis: As h₁ increases, h₂ will increase because greater h₁ → greater KE of incoming ball → more energy input to the magnetic system → greater KE of exiting ball → greater h₂.\n\nMethod:\n1. Set up inclined track with ceramic magnet fixed at bottom of slope.\n2. Hold two steel balls on one side of magnet (at rest).\n3. Release one ball from h₁ = 5 cm; record h₂ with ruler.\n4. Repeat for h₁ = 10, 15, 20, 25 cm.\n5. Repeat each h₁ three times; calculate mean h₂.\n\nSafety: use eye protection; secure track to prevent it sliding; be careful of magnetised balls sticking to equipment.',
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Construct** a data table that could be used to record data from the investigation in part (f). The table must include:\n\n• an appropriate number of rows and columns\n• the values of the independent variable that will be used\n• a column for processed data with an appropriate title',
        marks: 4,
        ph: 'Initial Height h₁ / cm | Trial 1: Max Height h₂ / cm | Trial 2 / cm | Trial 3 / cm | Mean h₂ / cm\n5   | | | |\n10  | | | |\n15  | | | |\n20  | | | |\n25  | | | |',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Q5 — Motor Effect: Conducting Rod (11 marks) Crit C
  // V1: rod travels 15 cm (0.15 m); Q5b at 12A, t=2.00s → a=0.075 m s⁻²
  // Q5d: radio_select 4 opts, correct=3 (D = proportional → straight line through origin)
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Motor Effect — Electromagnetic Force',
    marks: 11,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['motors', "Fleming's left-hand rule", 'electromagnetic induction'], level: 'proficient' },
    stem: 'A student carries out an experiment using the equipment below. The conducting rod rests between two rows of magnets on a level surface. When the switch is closed, a current flows through the rod. The rod accelerates to the right. The student adjusts the current of the power supply. The rod is initially at rest and the student measures the time taken by the rod to move **15 cm**.\n\nThe table shows results collected by the student at different current values:\n\n| Current / A | Time / s |\n|-------------|----------|\n| 7           | 3.16     |\n| 8           | 2.77     |\n| 9           | 2.43     |\n| 10          | (missing)|\n| 11          | 2.08     |\n| 12          | 2.00     |',
    figImages: [`${P}q5-motor-setup.png`],
    tasks: [
      {
        label: 'a',
        text: 'The time for a current of **10 A** was not recorded by the student. Using the animation, **measure** the time it takes the rod to travel 15 cm from rest.',
        marks: 1,
        ph: 'Time at 10 A ≈ 2.24 s\n(Accept a value consistent with the trend between 2.43 s and 2.08 s)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'The student assumes that the rod accelerates uniformly. For the last trial, at a current of **12 A**, the student records a time of **2.00 s**. Using the formula sheet, **calculate** the acceleration of the rod.',
        marks: 3,
        ph: 'Using s = ½at²:\n0.15 = ½ × a × (2.00)²\n0.15 = ½ × a × 4.00\na = (2 × 0.15) / 4.00 = 0.30 / 4.00 = 0.075 m s⁻²',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'After calculating its acceleration, the student wanted to calculate the net force acting on the rod. **State** what additional quantity would be needed for this calculation.',
        marks: 1,
        ph: 'The mass of the rod (kg) — to use F = ma.',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'Before starting the experiment, the student makes the following prediction:\n\n*"If the electric current passing through the rod doubles, the force on the rod will double. The relationship will be proportional."*\n\nIf the results of the experiment support this hypothesis, **select** the graph that would represent the data.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A — straight line with negative gradient', 'B — curve levelling off', 'C — curve decreasing', 'D — straight line through origin with positive gradient'],
        ph: 'Select the correct graph shape for a proportional relationship',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'Another student processed the data and calculated the force on the rod for each current. The student plotted their data on the graph shown below.\n\nReferring to the graph, **outline** why the student\'s hypothesis in part (d) is **not** supported by the data.',
        marks: 2,
        figImages: [`${P}q5e-force-graph.png`],
        ph: 'The line of best fit does not pass through the origin — it has a positive x-intercept.\nThis means there is a threshold current (approximately 4 A) below which no force is detected.\nTherefore doubling the current does NOT double the force; the relationship is not directly proportional.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'The student adjusts the current to **4 A**. Use the graph in part (e) to **suggest** what you think would happen to the rod. **Justify** your answer.',
        marks: 2,
        ph: 'At 4 A the force on the rod is approximately zero (the line of best fit crosses the x-axis at ~4 A).\nThe rod will not move because the electromagnetic force is insufficient to overcome the frictional forces holding the rod in place.',
        level: 'proficient',
      },
      {
        label: 'g',
        text: 'For the rod to move, it needs to overcome frictional forces. Use the graph to **suggest** the size of the frictional forces.',
        marks: 1,
        ph: 'Extending the line of best fit to the y-axis gives a y-intercept of approximately −2.6 to −2.8 mN.\nTherefore the frictional force ≈ 2.6–2.8 mN.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Q6 — Palomar Telescope & Expanding Universe (7 marks) Crit D
  // V1: Mount Palomar Hale Telescope (200-inch, 5 m mirror) instead of Hooker
  // Q6b: radio_select 4 opts, correct=0
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Telescopes & Expanding Universe',
    marks: 7,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['telescopes', 'expansion of the universe', 'Big Bang theory'], level: 'proficient' },
    stem: 'This question is about telescopes used in astronomy to observe distant objects in the universe.',
    tasks: [
      {
        label: 'a',
        text: '**Outline** why a refracting telescope causes the different colours of light to separate.',
        marks: 2,
        ph: 'White light is made up of different wavelengths/frequencies.\nDifferent wavelengths refract by different amounts in glass (different refractive indices for each colour).\nThis separates colours — an effect called dispersion or chromatic aberration.',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Clearer images can be obtained by using mirrors to create a reflecting telescope. Parallel rays from a distant object are reflected by a curved primary mirror onto a plane secondary mirror. The rays are reflected again by the secondary mirror and come into focus at the eyepiece.\n\n**Label** the primary mirror, secondary mirror and the position of the eyepiece in the diagram shown.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'Large curved mirror at far end = Primary; small flat mirror near top = Secondary; opening at top = Eyepiece',
          'Small flat mirror at far end = Primary; large curved mirror near top = Secondary',
          'Opening at bottom = Eyepiece; large mirror at top = Primary',
          'Small mirror at top = Primary; large mirror at bottom = Secondary',
        ],
        figImages: [`${P}q6b-reflecting-telescope.png`],
        ph: 'Select the correct labelling arrangement',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'One of the most famous telescopes of the 20th century was the Hale Telescope at Palomar Observatory. For several decades it was the world\'s largest telescope, with a **5 m** (200-inch) reflecting primary mirror.\n\n**State** the number of times a single ray of light is reflected after it enters the Hale reflecting telescope.',
        marks: 1,
        figImages: [`${P}q6c-hale-telescope.png`],
        ph: 'Number of reflections = 2 (once from primary mirror, once from secondary mirror).',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The Hale Telescope was used by astronomers to study the spectra of distant galaxies. These observations supported the idea that the universe is expanding.\n\n**Suggest** what phenomenon astronomers observed to show them that the universe is expanding.',
        marks: 1,
        ph: 'Astronomers observed redshift: the light from distant galaxies is shifted to longer (redder) wavelengths, indicating the galaxies are moving away from us. The further the galaxy, the greater the redshift (Hubble\'s law).',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The idea of having a telescope in space, instead of on the surface of the Earth, was proposed in the mid-20th century. This was an idea to improve the quality of the observations that could be made.\n\n**Suggest** why a telescope in space can make clearer observations than a telescope on the Earth\'s surface.',
        marks: 2,
        ph: 'A space telescope is above the Earth\'s atmosphere.\nThe atmosphere scatters, refracts, and absorbs light, and introduces turbulence (causing stars to "twinkle"). Light pollution also interferes.\nIn space, there is no atmosphere and no light pollution — so images are much clearer and more detailed.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Q7 — Hubble Space Telescope (19 marks) Crit D
  // V1: HST instead of JWST; same structure a(13m), b(6m)
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Hubble Space Telescope',
    marks: 19,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['telescopes', 'expansion of the universe', 'stars and stellar evolution'], level: 'advanced' },
    stem: 'The Hubble Space Telescope (HST) was launched into low Earth orbit in 1990 aboard the Space Shuttle Discovery.\n\nSoon after launch, astronomers discovered a flaw in the main mirror — it had been ground to the wrong shape, causing blurry images.\n\nA repair mission in 1993 corrected the mirror problem and brought instrument upgrades. The mission took almost 11 days and the crew made five spacewalks during the mission.\n\nThe HST has transformed our understanding of the universe. A famous image known as the Hubble Deep Field was taken in 1995–96 by pointing the telescope at a seemingly empty patch of sky for 10 days. The image revealed thousands of galaxies, stretching back nearly to the beginning of the universe.\n\nThis image has been reproduced in science textbooks and on posters worldwide.\n\nPlans for a successor telescope began in the 1990s. The new telescope would be placed much further from Earth, beyond the reach of any repair mission.\n\nThe Hubble Space Telescope is one of the most productive scientific instruments in history. However, its development and servicing missions have cost over 16 billion dollars — though this is far less than many national defence budgets.',
    tasks: [
      {
        label: 'a',
        text: 'Using the information in the passage and your wider MYP studies, **discuss** and **evaluate** the development of the HST and its role in extending our knowledge and understanding of the universe.\n\nIn your answer you should include:\n\n• the scientific challenges of launching a telescope into space\n• the social or cultural implications of the observations made with telescopes\n• the economic implications of spending government funds on a space telescope\n• a concluding appraisal giving your opinion on the impact of the HST',
        marks: 13,
        ph: 'Scientific challenges:\n• Mirror flaw discovered after launch — required expensive repair mission at significant risk to astronauts.\n• Maintaining instruments in the harsh conditions of space (radiation, vacuum, extreme temperatures).\n• Technical complexity of deploying and operating sensitive optical instruments in orbit.\n\nSocial/cultural implications:\n• Hubble Deep Field image revealed the scale of the universe, profoundly changing public perception of humanity\'s place in the cosmos.\n• Images reproduced in textbooks, documentaries, and popular media — inspiring generations of scientists.\n• HST observations confirmed the expansion of the universe and the existence of dark energy.\n\nEconomic implications:\n• Over $16 billion total cost — could have funded other priorities.\n• Returns in the form of scientific knowledge, technological spinoffs, and inspiring the next generation of engineers and scientists.\n• Comparison to defence spending suggests society can afford both.\n\nConclusion: The HST represents one of the most successful scientific investments in history — the mirror flaw was overcome, and the scientific and cultural return has been extraordinary. The initial design error was a setback but also demonstrated the value of having the ability to service space instruments.',
        level: 'advanced',
      },
      {
        label: 'b',
        text: 'The HST carries a spectrograph instrument that can detect specific molecules in the atmospheres of planets in our solar system and, in some cases, around other stars.\n\nSome facts about the HST spectrograph are given below:\n\n• The instrument can detect substances such as water vapour, ozone and methane in planetary atmospheres.\n\n• However, the exoplanet must be close to its host star and the star must be bright enough for HST to measure the starlight filtered through the planet\'s atmosphere.\n\n• The nearest star system (Alpha Centauri) is over four light-years away, and only a handful of nearby exoplanets are large enough and close enough to their stars for HST to detect their atmospheres.\n\nUse the information above to **evaluate** the benefits and limitations of using the HST spectrograph to search for evidence of life on other planets.',
        marks: 6,
        ph: 'Benefits:\n• Can detect biosignature gases (water, ozone, methane) indicating possible life.\n• Already-orbiting instrument — no new launch needed.\n• Proven technology that has found water in atmospheres of some exoplanets.\n\nLimitations:\n• Only works for large exoplanets orbiting bright, nearby stars — very restrictive conditions.\n• The nearest star is over 4 light-years away; most confirmed exoplanets are too faint or distant.\n• HST has limited UV range and ageing instruments; successor telescopes (JWST) have superior capability.\n\nConclusion: The HST spectrograph has made pioneering contributions but has very narrow applicability to exoplanet life detection. Next-generation telescopes will provide much broader capability.',
        level: 'advanced',
      },
    ],
  },

]
