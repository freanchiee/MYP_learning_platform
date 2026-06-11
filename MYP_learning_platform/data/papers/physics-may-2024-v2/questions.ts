import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2024-v2/'

export const paperMeta = {
  id: 'physics-may-2024-v2',
  subject: 'Physics',
  session: 'May',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // Q1 — Oil-Fired Power Station & Greenhouse Effect (12 marks) Crit A
  // V2: crude oil (fuel oil); E=4.2e7×2.5e5=1.05e13≈1.1e13 J (2 s.f.)
  // Q1e: 40000 MW × 0.30 = 12000 MW
  // Q1f: radio_select 4 opts, correct=3 (D)
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Oil-Fired Power Station & Greenhouse Effect',
    marks: 12,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['states of matter', 'kinetic theory', 'specific heat capacity', 'phase changes'], level: 'proficient' },
    stem: 'Oil-burning thermal power plants convert chemical potential energy stored in crude oil into electricity by combusting fuel oil to heat water.\n\nAn oil-burning thermal power plant involves three states of matter. The diagram shows the main components of the plant.',
    figImages: [`${P}q1-power-station.png`],
    tasks: [
      {
        label: 'a',
        text: '**Identify** the location of each substance below by selecting the correct region in the power station diagram.\n\n• Water (liquid)\n• Steam (gas)\n• Crude oil (liquid fuel)',
        marks: 1,
        widget: 'inline_dropdown_select',
        widgetItems: ['Water', 'Steam', 'Crude oil'],
        widgetOptions: ['Boiler / heat exchanger', 'Oil burner / furnace', 'Cooling tower / condenser'],
        ph: 'Water: Boiler/heat exchanger\nSteam: Cooling tower/condenser\nCrude oil: Oil burner/furnace',
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
        ph: 'The heat energy is used to overcome the intermolecular forces between water molecules.\nParticles move from a compact, ordered liquid arrangement to a widely spaced, disordered gaseous arrangement.\nPotential energy of particles increases; temperature (and KE) does not change during the phase change.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'One kilogram of fuel oil contains approximately **4.2 × 10⁷ J** of chemical potential energy. For an oil-burning power plant that burns **2.5 × 10⁵ kg** of oil per hour, **calculate** the energy released in one hour.\n\nGive your answer to two significant figures.',
        marks: 2,
        ph: 'Energy = 4.2 × 10⁷ × 2.5 × 10⁵\n= 10.5 × 10¹² J\n= 1.1 × 10¹³ J (2 s.f.)',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'Another oil-burning power plant generates a total power of **40 000 MW**. If the efficiency of this power station is **30 %**, **determine** the useful power output.',
        marks: 2,
        ph: 'Useful power = total power × efficiency\n= 40 000 × 0.30\n= 12 000 MW',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'Burning oil releases CO₂ and other greenhouse gases into the atmosphere, contributing to climate change. The diagram shows the flow of energy through Earth\'s atmosphere.\n\n**Select** the arrow in the diagram which would be most affected by burning oil.',
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
        ph: 'Trapping heat energy raises the average temperature of Earth\'s atmosphere and surface.\nHigher temperatures cause greater evaporation from oceans and land → increased water vapour in the atmosphere → more intense rainfall, flooding, and storms.\nIncreased atmospheric energy drives stronger convection, forming more powerful cyclones and disrupting established climate patterns — causing droughts in some regions and flooding in others.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Q2 — Nuclear Fission: U-235 → I-139 + Y-95 + 2n (12 marks) Crit A
  // V2: different daughter products
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
    stem: 'Nuclear fission is a reaction in which a heavy nucleus splits into two smaller nuclei, releasing large amounts of energy and one or more free neutrons.\n\nThe animation shows the fission of uranium-235 when it absorbs a neutron. The uranium nucleus splits into iodine-139 and yttrium-95, releasing two free neutrons and energy.\n\nNote: 53 + 39 = 92 ✓ and 139 + 95 + 2 = 236 = 235 + 1 ✓',
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
        ph: 'The protons and neutrons are distributed between the two daughter nuclei (I-139 and Y-95) and two free neutrons.\nTotal protons: 53+39=92 ✓; total mass number: 139+95+2=236=235+1 ✓ — conserved before and after.',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'A neutron is needed to initiate this fission reaction. Free neutrons are produced during the reaction, meaning a chain reaction can occur.\n\n**Suggest** the meaning of the term chain reaction.',
        marks: 2,
        ph: 'A chain reaction is when each fission reaction produces neutrons that go on to trigger further fission reactions in neighbouring uranium-235 nuclei.\nThis cascade is self-sustaining and exponential, releasing progressively more energy.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'In nuclear power plants, fission reactions supply energy, but chain reactions must be carefully controlled.\n\n**Describe** a possible danger of an uncontrolled chain reaction in a nuclear power plant.',
        marks: 3,
        ph: 'An uncontrolled chain reaction causes an exponentially growing number of fissions per second.\nThis releases enormous amounts of thermal energy extremely rapidly.\nThe result could be a nuclear meltdown — the reactor core overheats and melts, releasing radioactive materials — or an explosion that spreads radioactive contamination across the surrounding area, posing long-term radiation hazards.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Nuclear power plants use uranium in the form of fuel rods. These rods are no longer useable when the level of uranium-235 remaining is low. However, used fuel rods still contain a small amount of remaining uranium-235 which decays over time, emitting radiation as shown in the graph below.\n\nUse the graph to **predict** how many years it would take for **87.5 %** of the remaining uranium to decay.',
        marks: 1,
        figImages: [`${P}q2e-decay-graph.png`],
        ph: 'Read from graph: 87.5% decayed means 12.5% remaining.\n12.5% remaining = 3 half-lives.\nRead 3 × half-life from the graph (≈ ... million years).',
        level: 'developing',
      },
      {
        label: 'f',
        text: '**Suggest** why the long decay time of uranium-235 poses a significant challenge for the safe disposal of fuel rods.',
        marks: 2,
        ph: 'The very long half-life (hundreds of millions of years) means radioactivity persists far beyond human timescales.\nThis is challenging because: geological storage must remain stable over these timescales; no society or institution can guarantee security for millions of years; language, ownership, and political structures change, making "keep away" warnings unreliable.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Q3 — Manganin Wire Resistance Investigation (16 marks) Crit B
  // V2: manganin wire; Q3c correct=0; Q3e correct=0
  // Q3f: V=2.40V, I=0.30A → R=8.0Ω; Q3g: plot (100, 8.0)
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
    stem: 'A student plans to investigate how the length of a manganin wire affects its electrical resistance.\n\nThe table shows the wires available in the laboratory:\n\n| Length / cm | Material  | Cross-sectional area / mm² |\n|-------------|-----------|----------------------------|\n| 40          | Manganin  | 2.5                        |\n| 60          | Manganin  | 2.5                        |\n| 80          | Manganin  | 2.5                        |\n| 100         | Copper    | 1.0                        |\n| 100         | Manganin  | 1.5                        |\n| 100         | Copper    | 2.0                        |\n| 100         | Aluminium | 2.5                        |\n| 100         | Copper    | 2.5                        |\n| 100         | Silver    | 2.5                        |\n| 100         | Manganin  | 2.5                        |\n| 100         | Copper    | 3.0                        |\n| 120         | Manganin  | 2.5                        |',
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that would be tested in this investigation.',
        marks: 1,
        ph: 'How does the length of a manganin wire affect its electrical resistance?',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for this investigation using scientific reasoning.\n\nIf:\n\nThen:\n\nBecause:',
        marks: 3,
        ph: 'If: the length of the manganin wire increases,\nThen: the resistance of the wire will increase,\nBecause: electrons must travel a greater distance through the metal lattice, colliding more frequently with positive ions, producing greater opposition to current flow; R ∝ L (from R = ρL/A).',
        level: 'proficient',
      },
      {
        label: 'c',
        text: '**Select** the wires the student should use to collect sufficient data to determine the relationship between the resistance and the length of the wire.',
        marks: 3,
        widget: 'radio_select',
        widgetOptions: [
          'Manganin wires: 40 cm, 60 cm, 80 cm, 100 cm, 120 cm (all 2.5 mm²)',
          'All 100 cm wires of different materials',
          'Manganin wires of different cross-sectional areas',
          'Any five wires regardless of material',
        ],
        ph: 'Select the correct set of wires',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Justify** the selection you made in part (c).',
        marks: 2,
        ph: 'The IV is wire length. To test only length\'s effect, material and cross-sectional area must be held constant (CVs). Choosing manganin wires of five different lengths (40–120 cm, all 2.5 mm²) keeps material and area constant while varying only length, providing sufficient data to identify the mathematical relationship.',
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
        text: 'For one of the trials when the wire was **100 cm** long, the voltage across the wire was **2.40 V** and the current through the wire was measured as **0.30 A**. **Determine** the resistance of the wire.',
        marks: 2,
        ph: 'R = V / I\nR = 2.40 / 0.30\nR = 8.0 Ω',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'The graph below shows the processed data from the experiment. **Plot** the value you determined in part (f) and **draw** the line of best fit on the graph.',
        marks: 2,
        figImages: [`${P}q3g-graph.png`],
        ph: 'Plot the point at (100, 8.0) on the graph.\nDraw a straight line of best fit through the origin that best models all data points.',
        level: 'developing',
      },
      {
        label: 'h',
        text: 'According to theory, the relationship between resistance and length should be proportional; however, the student\'s results do not fit perfectly on the line of best fit. **Suggest** one source of error in this investigation and how it would affect the calculated value of resistance.',
        marks: 3,
        ph: 'Source of error: contact resistance at the connection points between the wire and the clips/leads. This resistance is not part of the wire but is included in the voltage reading.\nEffect: the measured resistance will be slightly higher than the true resistance of the wire alone. This systematic error causes the plotted line to have a positive y-intercept rather than passing through the origin.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Q4 — Steel Ball & Electromagnet Experiment (23 marks) Crit C
  // V2: strong electromagnet on aluminium track
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
    stem: 'A student sets up an experiment with two iron spheres held magnetically on one side of a powerful rare-earth magnet placed on an aluminium track. A single sphere is rolled towards the other side of the magnet. As this sphere collides with the magnet, the sphere on the other side is launched out with a much higher velocity, as shown in the slow-motion video.',
    figImages: [`${P}q4-setup.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** the conservation law that explains why the exiting sphere reaches the same height for both angles of the inclined plane.',
        marks: 1,
        ph: 'The law of conservation of energy: the total energy of the system is conserved. The kinetic energy of the exiting sphere is fully converted to gravitational potential energy at maximum height, so the height reached is the same regardless of the angle.',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The slow-motion video shows the motion of the iron sphere just before it collides with the magnet. **Draw** and **label** the forces acting on the sphere while it is rolling **just before** it collides with the magnet.\n\nDraggable items: Electrostatic force | Magnetic force | Normal force | Tension force | Upthrust | Weight force',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Electrostatic force', 'Magnetic force', 'Normal force', 'Tension force', 'Upthrust', 'Weight force'],
        widgetOptions: ['Acting on sphere', 'Not acting on sphere'],
        ph: 'Acting on sphere: Magnetic force (towards magnet), Normal force (perpendicular to track surface), Weight force (downward)\nNot acting: Electrostatic force, Tension force, Upthrust',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Suggest** why the acceleration of the sphere is not constant as it approaches the magnet. **Justify** your answer using scientific reasoning.',
        marks: 2,
        ph: 'The magnetic field strength and the resulting attractive force increase as the sphere gets closer to the magnet.\nBy Newton\'s second law (F = ma), an increasing force on the same mass produces an increasing acceleration — so acceleration is not constant but increases as the sphere approaches.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The rare-earth magnet can be assumed to have a magnetic field similar to that of a bar magnet. **Select** the diagram that best represents the magnetic field lines around the magnet.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: [`${P}q4d-magnetic-fields.png`],
        ph: 'Select A, B, C, or D',
        level: 'foundation',
      },
      {
        label: 'e',
        text: 'Once the incoming sphere collides with the magnet, the exiting sphere has a much greater kinetic energy than the incoming sphere before the collision. Use your scientific knowledge to **suggest** a reason for this observation.',
        marks: 1,
        ph: 'The exiting sphere is strongly attracted to the magnet from the back and gains additional energy from the magnetic potential energy stored in the system. As the exiting sphere moves away, the magnet\'s field accelerates it further — so the KE of the exiting sphere is greater than that of the incoming sphere.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'You plan to design an investigation to find out the relationship between the maximum height (h₂) reached by the exiting sphere and the initial height (h₁) of the incoming sphere. In your plan, you should include:\n\n• the independent variable, dependent variable and one control variable\n• a hypothesis which is explained using scientific reasoning\n• a detailed method for how you will collect data, including the equipment you will use\n• the values of the independent variable that will be used\n• details of how you will make sure your method is safe',
        marks: 11,
        figImages: [`${P}q4f-setup.png`],
        ph: 'IV: initial height h₁ / cm\nDV: maximum height h₂ reached by exiting sphere / cm\nCV: mass of spheres (same spheres every trial)\n\nHypothesis: As h₁ increases, h₂ will increase because greater h₁ → greater incoming KE → more energy transferred through the magnetic collision → greater KE of exiting sphere → greater h₂.\n\nMethod:\n1. Set up aluminium track with rare-earth magnet fixed at base; position two iron spheres on one side.\n2. Release one sphere from h₁ = 5 cm; measure h₂ of the exiting sphere using ruler against marked scale.\n3. Repeat for h₁ = 10, 15, 20, 25 cm.\n4. Repeat each h₁ 3 times; calculate mean h₂.\n\nSafety: wear eye protection; secure the track; keep iron objects away from experiment to prevent stray magnetic attractions; use low heights to prevent injury from fast-moving spheres.',
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
  // V2: rod travels 20 cm (0.20 m); Q5b at 12A, t=1.50s → a=0.178≈0.18 m s⁻²
  // Q5d: radio_select 4 opts, correct=3 (D)
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
    stem: 'A student carries out an experiment using the equipment below. The conducting rod rests between two rows of magnets on a level surface. When the switch is closed, a current flows through the rod. The rod accelerates to the right. The student adjusts the current of the power supply. The rod is initially at rest and the student measures the time taken by the rod to move **20 cm**.\n\nThe table shows results collected by the student at different current values:\n\n| Current / A | Time / s |\n|-------------|----------|\n| 7           | 3.65     |\n| 8           | 3.20     |\n| 9           | 2.80     |\n| 10          | (missing)|\n| 11          | 2.32     |\n| 12          | 1.50     |',
    figImages: [`${P}q5-motor-setup.png`],
    tasks: [
      {
        label: 'a',
        text: 'The time for a current of **10 A** was not recorded by the student. Using the animation, **measure** the time it takes the rod to travel 20 cm from rest.',
        marks: 1,
        ph: 'Time at 10 A ≈ 2.56 s\n(Accept a value consistent with the trend between 2.80 s and 2.32 s)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'The student assumes that the rod accelerates uniformly. For the last trial, at a current of **12 A**, the student records a time of **1.50 s**. Using the formula sheet, **calculate** the acceleration of the rod.',
        marks: 3,
        ph: 'Using s = ½at²:\n0.20 = ½ × a × (1.50)²\n0.20 = ½ × a × 2.25\na = (2 × 0.20) / 2.25 = 0.40 / 2.25 = 0.178 m s⁻² ≈ 0.18 m s⁻²',
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
        ph: 'The line of best fit does not pass through the origin — it crosses the x-axis at a positive current value (~4 A).\nBelow this threshold current, no force is detected. This means the force is not proportional to current — doubling current does not double force.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'The student adjusts the current to **4 A**. Use the graph in part (e) to **suggest** what you think would happen to the rod. **Justify** your answer.',
        marks: 2,
        ph: 'At 4 A, the force on the rod is approximately zero (the line of best fit intersects the x-axis at ~4 A).\nThe rod will not move because the electromagnetic force is too small to overcome static friction.',
        level: 'proficient',
      },
      {
        label: 'g',
        text: 'For the rod to move, it needs to overcome frictional forces. Use the graph to **suggest** the size of the frictional forces.',
        marks: 1,
        ph: 'Extending the line of best fit to the y-axis gives a y-intercept of approximately −2.6 to −2.8 mN.\nThe frictional force ≈ 2.6–2.8 mN.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Q6 — Keck Observatory & Expanding Universe (7 marks) Crit D
  // V2: Keck Telescope (Hawaii, 10 m segmented mirror)
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
        ph: 'White light consists of different wavelengths/frequencies of light.\nEach wavelength refracts by a different amount in glass (each has a different refractive index).\nThis causes the colours to separate — producing a rainbow effect known as chromatic aberration or dispersion.',
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
        text: 'One of the most powerful telescopes of the late 20th century was the Keck Telescope at Mauna Kea, Hawaii. It features a segmented primary mirror **10 m** in diameter — one of the largest optical mirrors in the world.\n\n**State** the number of times a single ray of light is reflected after it enters the Keck reflecting telescope.',
        marks: 1,
        figImages: [`${P}q6c-keck-telescope.png`],
        ph: 'Number of reflections = 2 (once from primary mirror, once from secondary mirror).',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The Keck Telescope has been used to measure the spectra of distant galaxies and quasars. These observations confirmed that the universe is expanding.\n\n**Suggest** what phenomenon astronomers observed to show that the universe is expanding.',
        marks: 1,
        ph: 'Astronomers observed cosmological redshift: the spectral lines of distant galaxies are shifted to longer (redder) wavelengths compared to nearby objects. This indicates galaxies are moving away from us. The greater the distance, the greater the redshift (Hubble\'s law), consistent with universal expansion.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The idea of having a telescope in space, instead of on the surface of the Earth, has been pursued since the mid-20th century.\n\n**Suggest** why a telescope in space can make clearer observations than a telescope on the Earth\'s surface.',
        marks: 2,
        ph: 'A space telescope is above the Earth\'s atmosphere, so:\n• No atmospheric turbulence (the main cause of image blurring — stars "twinkling").\n• No light pollution from cities.\n• No absorption of ultraviolet or infrared radiation by the atmosphere — allowing full-spectrum observations.\nAll of these factors combine to produce much clearer, sharper images in space.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Q7 — Nancy Grace Roman Space Telescope (19 marks) Crit D
  // V2: Roman Space Telescope (planned/in development); same structure a(13m), b(6m)
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Nancy Grace Roman Space Telescope',
    marks: 19,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['telescopes', 'expansion of the universe', 'stars and stellar evolution'], level: 'advanced' },
    stem: 'The Nancy Grace Roman Space Telescope (Roman ST) is a planned NASA observatory expected to launch in the late 2020s. Named after NASA\'s first Chief of Astronomy, it is designed to survey large areas of the sky in visible and near-infrared light.\n\nThe telescope will study dark energy — the mysterious force believed to be accelerating the expansion of the universe — by mapping hundreds of millions of galaxies.\n\nThe Roman ST has a primary mirror of 2.4 m (the same size as Hubble\'s) but a field of view 100 times larger, allowing it to survey vast regions of the sky far more efficiently.\n\nThe telescope will be placed at the L2 Lagrange point, approximately 1.5 million kilometres from Earth — the same location as the James Webb Space Telescope. At this distance, it will be beyond the reach of any servicing mission.\n\nThe Roman ST is one of the most ambitious astronomical projects ever planned. However, its estimated cost of around 3 billion dollars has raised questions about whether government funds are best spent on deep-space observatories.',
    tasks: [
      {
        label: 'a',
        text: 'Using the information in the passage and your wider MYP studies, **discuss** and **evaluate** the development of the Roman ST and its role in extending our knowledge and understanding of the universe.\n\nIn your answer you should include:\n\n• the scientific challenges of launching a telescope into space\n• the social or cultural implications of the observations made with telescopes\n• the economic implications of spending government funds on a space telescope\n• a concluding appraisal giving your opinion on the impact of the Roman ST',
        marks: 13,
        ph: 'Scientific challenges:\n• Placement at L2 (1.5 million km) — beyond repair range, so must work perfectly from launch.\n• Technical complexity of 100× wider field of view compared to Hubble — advanced detector arrays required.\n• Accurately measuring dark energy requires extremely precise photometry over years of observation.\n\nSocial/cultural implications:\n• Mapping hundreds of millions of galaxies will create the most detailed map of the universe ever produced.\n• Named after a pioneering woman in science — promotes diversity and science role models.\n• Discovery of dark energy and universe expansion rate could reshape our understanding of cosmic fate.\n\nEconomic implications:\n• ~$3 billion cost — though much less than military spending or other infrastructure.\n• Long-term value: data used by astronomers worldwide for decades.\n• Technology spinoffs in optics, detectors, and computing.\n\nConclusion: The Roman ST represents a high-value scientific investment. Its inability to be serviced is a risk, but L2 placement provides unique scientific access and its 100× survey power vastly exceeds previous capabilities. The societal and scientific return justifies the cost.',
        level: 'advanced',
      },
      {
        label: 'b',
        text: 'The Roman ST carries a near-infrared spectrometer instrument that some scientists believe could help characterise the atmospheres of exoplanets.\n\nSome facts about the Roman ST spectrometer are given below:\n\n• The instrument can detect water vapour, carbon dioxide, and methane in the atmospheres of large gas-giant exoplanets passing in front of their stars.\n\n• The exoplanet must be large enough to have a detectable atmosphere and must be on a close orbit around its star (transiting frequently).\n\n• Only a small fraction of known exoplanets satisfy both conditions — most are too small, too distant, or do not transit their star at an observable angle.\n\nUse the information above to **evaluate** the benefits and limitations of using the Roman ST spectrometer to search for evidence of life on other planets.',
        marks: 6,
        ph: 'Benefits:\n• Can detect atmospheric molecules (H₂O, CO₂, CH₄) associated with possible life.\n• 100× wider field than Hubble increases the number of transiting exoplanets observed.\n• Near-infrared is ideal for detecting molecular absorption signatures.\n\nLimitations:\n• Only works for large transiting gas giants — Earth-like rocky planets are too small.\n• Most exoplanets do not transit at the right angle to be detected.\n• Gas giant atmospheres may contain biosignature gases from non-biological processes (false positives).\n\nConclusion: The Roman ST spectrometer will significantly advance exoplanet atmospheric science but has limited applicability to searching for life specifically on Earth-like planets — next-generation instruments targeting smaller rocky planets will be needed.',
        level: 'advanced',
      },
    ],
  },

]
