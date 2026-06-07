import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2024/'

export const paperMeta = {
  id: 'physics-may-2024',
  subject: 'Physics',
  session: 'May',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Thermal Power Station & Greenhouse Effect (12 marks) Criterion A
  // Context rephrased: "coal-fired power station in Eastern Europe" → generic coal plant
  // Numbers changed ±15%; arc preserved: states of matter → KE → latent heat → energy calc → efficiency → greenhouse
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Power Station & Greenhouse Effect',
    marks: 12,
    tags: { unit: 'thermal-physics', topics: ['states of matter', 'kinetic theory', 'specific heat capacity', 'phase changes'], level: 'proficient' },
    stem: 'Coal-burning thermal power plants are systems that convert chemical potential energy into electricity, starting with the combustion of coal to heat water.\n\nA coal-burning thermal power plant involves three states of matter. The diagram shows the main components of the plant.',
    figImages: [`${P}q1-power-station.png`],
    tasks: [
      {
        label: 'a',
        text: '**Identify** the location of each substance below by selecting the correct region in the power station diagram.\n\n• Water (liquid)\n• Steam (gas)\n• Coal (solid)',
        marks: 1,
        widget: 'inline_dropdown_select',
        widgetItems: ['Water', 'Steam', 'Coal'],
        widgetOptions: ['Boiler / heat exchanger', 'Fuel hopper / furnace', 'Cooling tower / condenser'],
        ph: 'Water: ...\nSteam: ...\nCoal: ...',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'Absorbing heat can affect the kinetic energy of water molecules. **State** how water molecules are affected by this increase in kinetic energy.',
        marks: 1,
        ph: 'The molecules move faster / vibrate more...',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'As water boils into steam, the heat energy absorbed does **not** affect the kinetic energy of the molecules. **Outline** what happens to this heat energy, referring to the movement and arrangement of particles.',
        marks: 2,
        ph: 'The heat energy is used to...\nParticles move from... to...\nThe arrangement of particles changes because...',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'One kilogram of coal contains approximately **2.9 × 10⁷ J** of chemical potential energy. For a coal-burning power plant that burns **3.8 × 10⁵ kg** of coal per hour, **calculate** the energy released in one hour.\n\nYou should give your answer to two significant figures.',
        marks: 2,
        ph: 'Energy = energy per kg × mass\n= 2.9 × 10⁷ × 3.8 × 10⁵\n= ... J (2 s.f.)',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'Another coal-burning power plant burns enough coal per hour to generate a power of **31 500 MW**. If the efficiency of this power station is **25 %**, **determine** the useful power output.',
        marks: 2,
        ph: 'Useful power = total power × efficiency\n= 31 500 MW × 0.25\n= ... MW',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'Burning coal contributes to climate change by altering the composition of Earth\'s atmosphere, increasing the quantity of greenhouse gases. The diagram shows the flow of energy through Earth\'s atmosphere.\n\n**Select** the arrow in the diagram which would be most affected by burning coal.',
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
        ph: 'Trapping heat energy causes the temperature of the atmosphere to...\nThis leads to increased... (e.g. evaporation, convection)...\nAs a result, weather events such as storms become more frequent because...',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Nuclear Fission & Uranium-235 (12 marks) Criteria A / C / D
  // Arc: atomic structure → fission products → chain reaction → danger → decay graph reading → disposal
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Nuclear Fission & Radioactive Decay',
    marks: 12,
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'radioactive decay', 'nuclear equations', 'half-life', 'nuclear energy'], level: 'proficient' },
    stem: 'Nuclear fission is a reaction in which a heavy nucleus splits into two smaller nuclei, releasing large amounts of energy and two or more free neutrons.\n\nThe animation shows the fission of uranium-235 when it absorbs a neutron. The uranium nucleus splits into caesium-140 and rubidium-94, releasing two free neutrons and energy.',
    figImages: [`${P}q2-fission.png`],
    tasks: [
      {
        label: 'a',
        text: 'Using the periodic table, **state** the number of protons and the number of neutrons present in the nucleus of one atom of uranium-235.',
        marks: 2,
        ph: 'Number of protons: ...\nNumber of neutrons: ...',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Outline** how the protons and neutrons are affected by the fission of uranium-235.',
        marks: 2,
        ph: 'The protons and neutrons are divided between the two daughter nuclei (Cs-140 and Rb-94).\nThe total number of protons and neutrons after the reaction is the same as before.\n...',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'A neutron is needed to start this fission reaction. Neutrons are also produced during the reaction. This means that a chain reaction can occur with the fission of uranium-235.\n\n**Suggest** the meaning of the term chain reaction.',
        marks: 2,
        ph: 'A chain reaction is when one reaction causes another reaction to occur.\nThe released neutrons trigger further fission reactions...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'In nuclear power plants, fission reactions are used to supply energy but these chain reactions have to be carefully controlled.\n\n**Describe** a possible danger of an uncontrolled chain reaction in a nuclear power plant.',
        marks: 3,
        ph: 'An uncontrolled chain reaction means more and more reactions occur...\nThis releases enormous amounts of energy rapidly...\nThis could result in... (e.g. nuclear meltdown, explosion, release of radioactive material)...',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Nuclear power plants use uranium in the form of fuel rods. These rods are no longer useable when the level of uranium-235 remaining is low. However, used fuel rods still contain a small amount of remaining uranium-235 which decays over time, emitting radiation as shown in the graph below.\n\nUse the graph to **predict** how many years it would take for **75 %** of the remaining uranium to decay.',
        marks: 1,
        figImages: [`${P}q2e-decay-graph.png`],
        ph: 'Read from graph: 75% decayed means 25% remaining.\nFind time at 25% on the graph.\n≈ ... million years',
        level: 'developing',
      },
      {
        label: 'f',
        text: '**Suggest** why the long decay time of uranium-235 poses a significant challenge for the safe disposal of fuel rods.',
        marks: 2,
        ph: 'The long decay time means the fuel rods remain radioactive for... years.\nThis is challenging because...\nThe rods must be stored safely and securely because...',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Wire Resistance Investigation (16 marks) Criteria B / C
  // Context rephrased: silver → nichrome wire; numbers adjusted ±10%
  // Arc: research question → hypothesis → select wires → justify → circuit → calculate R → plot graph → evaluate error
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Wire Resistance Investigation',
    marks: 16,
    tags: { unit: 'electricity-circuits', topics: ['resistance', "Ohm\'s law", 'measuring current and voltage', 'series circuits'], level: 'proficient' },
    stem: 'A student plans to investigate how the length of a nichrome wire affects its electrical resistance.\n\nThe table shows the wires available in the laboratory:\n\n| Length / cm | Material  | Cross-sectional area / mm² |\n|-------------|-----------|----------------------------|\n| 40          | Nichrome  | 2.5                        |\n| 60          | Nichrome  | 2.5                        |\n| 80          | Nichrome  | 2.5                        |\n| 100         | Copper    | 1.0                        |\n| 100         | Nichrome  | 1.5                        |\n| 100         | Copper    | 2.0                        |\n| 100         | Aluminium | 2.5                        |\n| 100         | Copper    | 2.5                        |\n| 100         | Gold      | 2.5                        |\n| 100         | Nichrome  | 2.5                        |\n| 100         | Copper    | 3.0                        |\n| 120         | Nichrome  | 2.5                        |',
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that would be tested in this investigation.',
        marks: 1,
        ph: 'How does the length of a nichrome wire affect its electrical resistance?',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for this investigation using scientific reasoning.\n\nIf:\n\nThen:\n\nBecause:',
        marks: 3,
        ph: 'If: the length of the nichrome wire increases,\nThen: the resistance of the wire will increase,\nBecause: current (electrons) must travel further through more ions, causing more collisions, so resistance is proportional to length (R = ρL/A).',
        level: 'proficient',
      },
      {
        label: 'c',
        text: '**Select** the wires the student should use to collect sufficient data to determine the relationship between the resistance and the length of the wire.',
        marks: 3,
        widget: 'radio_select',
        widgetOptions: [
          'Nichrome wires: 40 cm, 60 cm, 80 cm, 100 cm, 120 cm (all 2.5 mm²)',
          'All 100 cm wires of different materials',
          'Nichrome wires of different cross-sectional areas',
          'Any five wires regardless of material',
        ],
        ph: 'Select the correct set of wires',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Justify** the selection you made in part (c).',
        marks: 2,
        ph: 'The independent variable is the length of the wire.\nTo test only the effect of length, the material and cross-sectional area must be kept constant (controlled variables).\nFive different lengths provide sufficient data points to identify a relationship.',
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
        text: 'For one of the trials when the wire was **100 cm** long, the voltage across the wire was **1.5 V** and the current through the wire was measured as **0.24 A**. **Determine** the resistance of the wire.',
        marks: 2,
        ph: 'R = V / I\nR = 1.5 / 0.24\nR = ... Ω',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'The graph below shows the processed data from the experiment. **Plot** the value you determined in part (f) and **draw** the line of best fit on the graph.',
        marks: 2,
        figImages: [`${P}q3g-graph.png`],
        ph: 'Plot the point at (100, 6.25) on the graph.\nDraw a straight line of best fit through the origin that best models all data points.',
        level: 'developing',
      },
      {
        label: 'h',
        text: 'According to theory, the relationship between resistance and length should be proportional, however, the student\'s results do not fit perfectly on the line of best fit. **Suggest** one source of error in this investigation and how it would affect the calculated value of resistance.',
        marks: 3,
        ph: 'Source of error: ...\nEffect on resistance: If this error occurs, the measured resistance will be [higher/lower] than the actual value because...',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Ball & Magnet Experiment (23 marks) Criteria A / B / C
  // Context rephrased: "steel balls + neodymium magnet" → "iron spheres + ferrite magnet on a wooden track"
  // Arc: conservation law → label forces → non-constant acceleration → magnetic field diagram →
  //      energy transfer → design investigation → construct data table
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Ball, Magnet & Energy Conservation',
    marks: 23,
    tags: { unit: 'magnetism-electromagnetism', topics: ['magnetic poles and fields', 'magnetic field lines', 'work done'], level: 'advanced' },
    stem: 'A student sets up an experiment with two iron spheres held magnetically on one side of a very strong ferrite magnet placed on a wooden track. A single sphere is rolled towards the other side of the magnet. As this sphere collides with the magnet, the sphere on the other side shoots out with a much faster velocity, as shown in the slow-motion video.',
    figImages: [`${P}q4b-forces-diagram.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** the conservation law that explains why the exiting sphere reaches the same height for both angles of the inclined plane.',
        marks: 1,
        ph: 'The law of conservation of energy states that...',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The slow-motion video shows the motion of the sphere just before it collides with the magnet. **Draw** and **label** the forces acting on the sphere while it is rolling **just before** it collides with the magnet.\n\nDraggable items: Electrostatic force | Magnetic force | Normal force | Tension force | Upthrust | Weight force',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Electrostatic force', 'Magnetic force', 'Normal force', 'Tension force', 'Upthrust', 'Weight force'],
        widgetOptions: ['Acting on sphere', 'Not acting on sphere'],
        ph: 'Forces acting on sphere just before magnet:\n• Magnetic force: direction right (towards magnet)\n• Normal force: direction up\n• Weight force: direction down\n(No tension, electrostatic, or upthrust)',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Suggest** why the acceleration of the sphere is not constant as it approaches the magnet. **Justify** your answer using scientific reasoning.',
        marks: 2,
        ph: 'The magnetic force on the sphere increases as it gets closer to the magnet.\nTherefore the resultant force increases...\nBy Newton\'s second law (F = ma), a greater force on the same mass means...',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The ferrite magnet can be assumed to have a magnetic field similar to that of the Earth. **Select** the diagram that best represents the magnetic field lines around the magnet.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: [`${P}q4d-magnetic-fields.png`],
        ph: 'Select A, B, C, or D',
        level: 'foundation',
      },
      {
        label: 'e',
        text: 'Once the incoming sphere collides with the magnet, the exiting sphere on the other side has a much greater kinetic energy than the incoming sphere before the collision. Use your scientific knowledge to **suggest** a reason for this observation.',
        marks: 1,
        ph: 'Magnetic potential energy stored in the system is released during the collision...\nor: changes in the magnetic field cause additional kinetic energy to be transferred to the exiting sphere.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'You plan to design an investigation to find out the relationship between the maximum height (h₂) reached by the exiting sphere and the initial height (h₁) of the incoming sphere. In your plan, you should include:\n\n• the independent variable, dependent variable and one control variable\n• a hypothesis which is explained using scientific reasoning\n• a detailed method for how you will collect data, including the equipment you will use\n• the values of the independent variable that will be used\n• details of how you will make sure your method is safe',
        marks: 11,
        ph: 'Independent variable (IV): initial height h₁ of the incoming sphere\nDependent variable (DV): maximum height h₂ reached by the exiting sphere\nControl variable: mass of spheres / angle of track\n\nHypothesis: As h₁ increases, h₂ will increase because...\n\nMethod:\n1. Set up the inclined wooden track...\n2. Release the sphere from h₁ = 5 cm and measure h₂ using a ruler...\n3. Repeat for h₁ = 10, 15, 20, 25 cm\n4. Repeat each value 3 times and calculate the mean...\n\nSafety: ...',
        figImages: [`${P}q4f-setup.png`],
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Construct** a data table that could be used to record data from the investigation in part (f). The table must include:\n\n• an appropriate number of rows and columns\n• the values of the independent variable that will be used\n• a column for processed data with an appropriate title',
        marks: 4,
        ph: 'Initial Height of Sphere (h₁) / cm | Trial 1 Max Height (h₂) / cm | Trial 2 / cm | Trial 3 / cm | Mean h₂ / cm\n5   | | | |\n10  | | | |\n15  | | | |\n20  | | | |\n25  | | | |',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Electromagnetic Force on a Conducting Rod (11 marks) Criteria B / C / D
  // Context: current-carrying rod in magnetic field; numbers changed slightly
  // Arc: read animation → calculate acceleration → identify quantity → select graph → evaluate hypothesis → suggest → friction
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Motor Effect — Electromagnetic Force',
    marks: 11,
    tags: { unit: 'magnetism-electromagnetism', topics: ['motors', "Fleming\'s left-hand rule", 'electromagnetic induction'], level: 'proficient' },
    stem: 'A student carries out an experiment using the equipment below. The conducting rod rests between two rows of magnets on a level surface. When the switch is closed, a current flows through the rod. The rod accelerates to the right. The student adjusts the current of the power supply. The rod is initially at rest and the student measures the time taken by the rod to move **18 cm**.\n\nThe table shows results collected by the student at different current values:\n\n| Current / A | Time / s |\n|-------------|----------|\n| 7           | 2.73     |\n| 8           | 2.40     |\n| 9           | 2.10     |\n| 10          | (missing)|\n| 11          | 1.83     |\n| 12          | 1.70     |',
    figImages: [`${P}q5-motor-setup.png`],
    tasks: [
      {
        label: 'a',
        text: 'The time for a current of **10 A** was not recorded by the student. Using the animation, **measure** the time it takes the rod to travel 18 cm from rest.',
        marks: 1,
        ph: 'Time at 10 A ≈ ... s\n(Expected answer: approximately 1.87 s based on the trend)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'The student assumes that the rod accelerates uniformly. For the last trial, at a current of **12 A**, the student records a time of **1.70 s**. Using the formula sheet, **calculate** the acceleration of the rod.',
        marks: 3,
        ph: 'Using s = ½at²:\n0.18 = ½ × a × (1.70)²\na = (2 × 0.18) / (1.70)²\na = 0.36 / 2.89\na = ... m s⁻²',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'After calculating its acceleration, the student wanted to calculate the net force acting on the rod. **State** what additional quantity would be needed for this calculation.',
        marks: 1,
        ph: 'The mass of the rod (in kg) — not weight.',
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
        ph: 'The line of best fit does not pass through the origin.\nThe x-intercept of the line of best fit is at approximately 4 A (there is no force below 4 A).\nThis means that doubling the current does not double the force, so the relationship is not proportional.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'The student adjusts the current to **4 A**. Use the graph in part (e) to **suggest** what you think would happen to the rod. **Justify** your answer.',
        marks: 2,
        ph: 'At 4 A, the force on the rod is approximately zero (the line crosses the x-axis at ~4 A).\nThe rod will not move because...\nThe net force is zero / the force is not sufficient to overcome frictional forces.',
        level: 'proficient',
      },
      {
        label: 'g',
        text: 'For the rod to move, it needs to overcome frictional forces. Use the graph to **suggest** the size of the frictional forces.',
        marks: 1,
        ph: 'From the graph, the y-intercept of the best fit line (extended) is approximately −2.6 to −2.8 mN.\nTherefore the frictional force ≈ 2.6–2.8 mN.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Telescopes & Expanding Universe (7 marks) Criterion D
  // Arc: chromatic aberration → reflecting telescope labels → light reflections → Hubble observation → space advantage
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Telescopes & Expanding Universe',
    marks: 7,
    tags: { unit: 'astrophysics', topics: ['telescopes', 'expansion of the universe', 'Big Bang theory'], level: 'proficient' },
    stem: 'This question is about telescopes used in astronomy to observe distant objects in the universe.',
    tasks: [
      {
        label: 'a',
        text: '**Outline** why a refracting telescope causes the different colours of light to separate.',
        marks: 2,
        ph: 'White light is made up of different wavelengths/frequencies.\nDifferent wavelengths/frequencies have different refractive indices in glass.\nTherefore different colours refract by different amounts and separate (dispersion).',
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
        text: 'One of the most famous telescopes of the 20th century was called the Hooker telescope. It was the world\'s largest telescope from 1917 to 1949 and included a 2.5 m reflecting mirror.\n\n**State** the number of times a single ray of light is reflected after it enters the Hooker telescope.',
        marks: 1,
        figImages: [`${P}q6c-hooker-telescope.png`],
        ph: 'Number of reflections = ...',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The Hooker telescope was used by Edwin Hubble to make observations that would change our view of the universe forever. He was able to prove that the universe extends far beyond the edge of the Milky Way galaxy. Hubble also proposed that the universe is expanding.\n\n**Suggest** what phenomenon Hubble observed to show him that the universe is expanding.',
        marks: 1,
        ph: 'Hubble observed that galaxies are moving away from us (redshift).\nThe light from distant galaxies is shifted to longer wavelengths (red shift), suggesting they are receding.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The idea of having a telescope in space, instead of on the surface of the Earth, was proposed early in the 20th century. This was an idea to improve the quality of the observations that could be made.\n\n**Suggest** why a telescope in space can make clearer observations than a telescope on the Earth\'s surface.',
        marks: 2,
        ph: 'A space telescope is above the Earth\'s atmosphere.\nThe atmosphere on Earth causes scattering/refraction/absorption/light pollution/weather interference of light.\nIn space, there is no atmosphere so these effects are absent and the images are clearer.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — James Webb Space Telescope (19 marks) Criterion D
  // Arc: challenges of space telescope → evaluate JWST societal/scientific impact → evaluate IR instrument for life detection
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'James Webb Space Telescope (JWST)',
    marks: 19,
    tags: { unit: 'astrophysics', topics: ['telescopes', 'expansion of the universe', 'stars and stellar evolution'], level: 'advanced' },
    stem: 'The James Webb Space Telescope (JWST), named after a NASA administrator, was built in the 1970s but wasn\'t launched until 2021 due to technical delays and budget problems.\n\nSoon after the telescope had been successfully launched into space, a problem with the main mirror was discovered.\n\nA mission in 1993 corrected the problem with the mirror and brought instrument upgrades to the telescope. The mission to correct the telescope took almost 11 days and the crew members made five spacewalks during the mission.\n\nThe JWST has changed our understanding of the universe forever. A famous image was taken in 1995 of the Eagle Nebula at a distance of around 7000 light years from Earth. This image shows clouds of dust and gas in the process of creating new stars.\n\nThis image has been replicated on everything from T-shirts to coffee mugs.\n\nPlans for a new space telescope started in 1996. The new telescope would include a larger mirror and would have travel further from Earth so that it could see deeper into space than ever before. This telescope, the James Webb Space Telescope, was designed to look for waves in the infrared region of the electromagnetic spectrum.\n\nThe telescope would be sent to a location so far from Earth that it couldn\'t be repaired if there were problems.\n\nThe telescope is the most expensive piece of scientific equipment ever made. However, the 10-billion-dollar cost is much less than the over 750 billion dollars that the US has as its annual military budget.',
    tasks: [
      {
        label: 'a',
        text: 'Using the information in the passage and your wider MYP studies, **discuss** and **evaluate** the development of the JWST and its role in extending our knowledge and understanding of the universe.\n\nIn your answer you should include:\n\n• the scientific challenges of launching a telescope into space\n• the social or cultural implications of the observations made with telescopes\n• the economic implications of spending government funds on a space telescope\n• a concluding appraisal giving your opinion on the impact of the JWST',
        marks: 13,
        ph: 'Scientific challenges:\n• Technical complexity: mirror alignment, deployment of 18 hexagonal segments...\n• Inaccessibility: JWST is at L2 (1.5 million km), too far to repair...\n• Extreme temperatures in space...\n\nSocial/cultural implications:\n• Eagle Nebula image inspired public and appeared on merchandise...\n• JWST could detect signs of life on exoplanets...\n\nEconomic implications:\n• $10 billion cost vs military spending comparison...\n• Long-term benefits to science and technology...\n\nConclusion: Overall, the JWST represents...',
        level: 'advanced',
      },
      {
        label: 'b',
        text: 'The JWST carries a mid-infrared instrument that some people believe could provide evidence of life on other planets.\n\nSome facts about the JWST are given below:\n\n• The instrument can detect substances such as water, oxygen, ozone, methane and carbon dioxide on planets outside our solar system. These planets are known as exoplanets.\n\n• The exoplanet has to be orbiting a specific kind of star, known as a white dwarf, for the substances to be detected by the instrument.\n\n• The nearest white dwarf star to Earth is over eight light-years away and there are only about 34 known white dwarf stars within 40 light-years of Earth.\n\nUse the information above to **evaluate** the benefits and limitations of using the mid-infrared instrument on the JWST to search for evidence of life on other planets.',
        marks: 6,
        ph: 'Benefits:\n• Can detect biosignature gases (water, O₂, ozone, methane, CO₂) from exoplanets...\n• Provides scientific evidence for/against extraterrestrial life without sending spacecraft...\n\nLimitations:\n• Only works for planets orbiting white dwarf stars (rare, only 34 within 40 ly)...\n• Nearest white dwarf is over 8 light-years away — very distant...\n• White dwarf stars are old and dim, so planets may not have conditions for life...\n\nConclusion: The instrument has significant scientific value but narrow applicability...',
        level: 'advanced',
      },
    ],
  },
]
