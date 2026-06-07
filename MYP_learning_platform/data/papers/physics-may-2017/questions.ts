import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2017/'

export const paperMeta = {
  id: 'physics-may-2017',
  subject: 'Physics',
  session: 'May',
  year: 2017,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Star Colours & Properties of Light (4 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'astrophysics',
    marks: 4,
    stem: 'The colours of visible light emitted from a star are related to the star\'s temperature. Stars appear more red when they cool down and approach the end of their life. Young, hot stars appear more blue.',
    figImages: [`${P}q1-stars.png`],
    tags: { unit: 'astrophysics', topics: ['star temperature', 'colour', 'EM spectrum', 'light properties'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct options to complete the comparisons between red and blue light.\n\nThe speed of red light is **[greater than / equal to / less than]** the speed of blue light.\n\nThe wavelength of red light is **[greater than / equal to / less than]** the wavelength of blue light.\n\nThe frequency of red light is **[greater than / equal to / less than]** the frequency of blue light.',
        marks: 2,
        figImages: [`${P}q1a-inline.png`],
        ph: 'Speed: equal to (all visible light travels at c in vacuum). Wavelength: greater than (red has longer wavelength). Frequency: less than (red has lower frequency). Award 2 marks for all three correct; 1 mark for any one correct.',
      },
      {
        label: 'b',
        text: '**State** the expected surface temperature for the red supergiant star Betelgeuse.',
        marks: 1,
        ph: 'Less than 3200 °C (accept: equal to 3200 °C; less than or equal to 3200 °C).',
      },
      {
        label: 'c',
        text: '**State** the expected colour for a star with a surface temperature of 8500 °C.',
        marks: 1,
        ph: 'White (accept: blue-white / blue).',
      },
    ],
  },

  // ── Q2: White Light & IR Radiation (7 marks, Criterion A/C) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'light-optics',
    marks: 7,
    stem: 'White light from the Sun passes through a glass prism and produces a spectrum.',
    tags: { unit: 'light-optics', topics: ['white light', 'refraction', 'infrared radiation', 'electromagnetic spectrum'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** why white light produces a spectrum when it passes through a glass prism.',
        marks: 2,
        ph: 'White light is a mixture of different colours / frequencies / wavelengths. Different colours/frequencies of light are refracted (slowed) by different amounts when passing through glass. (Award additional point for: light of different frequencies/wavelengths slows down by different amounts.)',
      },
      {
        label: 'b',
        text: 'A student investigates the heating effect of radiation beyond the red end of the spectrum. They place a thermometer bulb in different positions across the spectrum and in the region beyond the visible red end.\n\n**Explain** what physical process causes the temperature to rise when radiation hits the black thermometer bulb.',
        marks: 2,
        ph: 'The temperature rise is caused by the absorption of (infra-red) radiation. Black surfaces are best at absorbing radiation. The energy absorbed from the radiation increases the kinetic energy of the molecules, raising the temperature.',
      },
      {
        label: 'c',
        text: '**Interpret** the data from the thermometer readings across the spectrum and **explain** the results using scientific reasoning.',
        marks: 3,
        ph: 'Temperature increases across the visible spectrum from violet to red. Temperature continues to rise beyond red (into the infra-red region). The highest temperature rise is in the infra-red region because infra-red radiation carries more energy per unit area in this region. Black surfaces absorb all wavelengths best, experiencing the highest temperature rise.',
      },
    ],
  },

  // ── Q3: Astrophysics — Telescopes, Stars & Distance (13 marks, Criterion A) ──
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'astrophysics',
    marks: 13,
    stem: 'The appearance of the night sky changes over time. Astronomers use telescopes to study the sky in more detail.',
    tags: { unit: 'astrophysics', topics: ['telescopes', 'reflection', 'Earth rotation', 'Polaris', 'light year', 'distance'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'A spinning mirror is used to capture images of the sky as it rotates. **Select** the correct diagram showing how the spinning mirror would appear in a photograph of the sky.',
        marks: 1,
        ph: 'The mirror appears as a bright arc/trail in the photograph, showing its rotation.',
      },
      {
        label: 'b',
        text: 'A reflecting telescope uses a curved mirror to focus light. **Draw** on the diagram the path of two reflected rays from the curved mirror, and show the correct **direction** of the arrows. Show where the rays converge to form an image.',
        marks: 3,
        ph: 'Both reflected rays should converge at the focal point (approximately correct angles of reflection). Arrows point away from the mirror toward the focal point. Award full marks if one ray is completely correct; third mark for correct direction of arrows.',
      },
      {
        label: 'c',
        text: 'A student takes a long-exposure photograph of the night sky. The photograph shows arcs of light from the stars.\n\n**Explain** why the stars appear to move across the sky.',
        marks: 2,
        ph: 'The stars appear to move across the sky because the Earth is rotating/spinning on its axis. The stars themselves are not moving (relative to Earth).',
      },
      {
        label: 'd',
        text: 'In the photograph, the star marked P (Polaris) appears to remain stationary. **Explain why** Polaris appears to not move.',
        marks: 1,
        ph: 'Polaris is located directly in line with the axis of rotation of the Earth (above the North Pole), so it does not appear to move as Earth rotates.',
      },
      {
        label: 'e',
        text: 'Three stars close together in the sky are described. **Explain why** the three stars cannot be seen as distinct (separate) with the naked eye, and how a telescope allows us to see them separately.',
        marks: 2,
        ph: 'From a distance, the three stars cannot be seen as distinct because the naked eye cannot resolve (separate) objects that are very close together in the sky. New technology (telescopes) increase magnification and light-gathering ability, allowing the three stars to be seen separately.',
      },
      {
        label: 'f',
        text: 'Scientists estimate that Polaris A is 323 light years from Earth. A light year is the distance light travels in one year. Light travels at 3.0 × 10⁸ ms⁻¹ in a vacuum. Assume a year has 365 days.\n\n**Calculate** how far Polaris A is from the Earth in metres. Show your working.',
        marks: 3,
        ph: 'Distance = speed × time. Time in seconds = 365 × 24 × 60 × 60 = 3.15 × 10⁷ s. Distance for 1 light year = 3.0 × 10⁸ × 3.15 × 10⁷ = 9.5 × 10¹⁵ m. Distance to Polaris = 323 × 9.5 × 10¹⁵ = 3.1 × 10¹⁸ m',
      },
      {
        label: 'g',
        text: 'Using your answer to part (f), **calculate** how far Polaris A is from the Earth in metres. Give your answer in standard form.',
        marks: 1,
        ph: '323 × 9.5 × 10¹⁵ = 3.1 × 10¹⁸ m (ECF from part f)',
      },
    ],
  },

  // ── Q4: Planets & Habitable Zone (8 marks, Criterion A/B) ──
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'astrophysics',
    marks: 8,
    stem: 'Astronomers searching for Earth-like planets use a transit method: a planet passing in front of its star causes a measurable reduction in the brightness of light reaching Earth.',
    figImages: [`${P}q1-stars.png`],
    tags: { unit: 'astrophysics', topics: ['planets', 'habitable zone', 'transit method', 'luminosity'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** how the transit method allows astronomers to detect a planet orbiting a star.',
        marks: 2,
        ph: 'Planets are opaque (solid/blocking) objects. When a planet passes in front of its star (transit), it blocks/eclipses some of the star\'s light, causing a reduction in the measured brightness of the star from Earth.',
      },
      {
        label: 'b',
        text: '**Explain** why planets cannot be detected directly by telescopes (unlike stars).',
        marks: 2,
        ph: 'Planets are non-luminous objects — they do not produce their own light. They can only be detected if they are illuminated by the light from a star (reflected light), or if they block the light from a star.',
      },
      {
        label: 'c',
        text: 'The "habitable zone" around a star is the region where liquid water could exist on a planet\'s surface. A planet very close to a star would have no liquid water. **Explain why** liquid water cannot exist on a planet close to a hot star.',
        marks: 2,
        ph: 'A planet too close to a star receives too much radiation. The surface would be too hot. Any water present would evaporate / become vapour / boil away. Liquid water cannot exist.',
      },
      {
        label: 'd',
        text: 'The diagram shows habitable zones for stars of different temperatures. **Explain why** hotter, larger stars have a habitable zone that is further away from the star.',
        marks: 2,
        ph: 'Hotter stars emit more energy / radiation per unit time. A planet must be further away for the energy received per unit area to be the same as that from a cooler star at a smaller distance. The surface temperature of a planet at a given distance is related to the energy it receives.',
      },
    ],
  },

  // ── Q5: Ramp Investigation — Height vs Distance (25 marks, Criterion A/B/C) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 25,
    stem: 'The simulation shows a ramp with a wooden block (mass 0.25 kg) that slides down the ramp onto a flat surface. The ramp length is 80 cm. The height of the ramp and the distance the block slides along the flat surface can both be measured.',
    figImages: [`${P}q5-ramp-setup.png`],
    tags: { unit: 'forces-interactions', topics: ['gravitational potential energy', 'kinetic energy', 'friction', 'variables', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**State** the equation linking gravitational potential energy (GPE) and kinetic energy (KE) for a block sliding down a frictionless ramp.',
        marks: 1,
        ph: 'GPE = KE (or: gravitational potential energy is converted to kinetic energy)',
      },
      {
        label: 'b',
        text: '**Calculate** the gravitational potential energy of the block when the ramp height is 0.60 m. Use g = 10 ms⁻². Show your working.',
        marks: 3,
        ph: 'GPE = mgh = 0.25 × 10 × 0.60 = 1.5 J',
      },
      {
        label: 'c',
        text: '**State** the question that this investigation could answer.',
        marks: 1,
        ph: 'How does the height of the ramp affect the distance the block slides along the flat surface?',
      },
      {
        label: 'd',
        text: '**Formulate and explain** the hypothesis that this question would test.',
        marks: 3,
        ph: 'As the height of the ramp increases, the distance travelled by the block will increase. Because the block has more GPE at a greater height, which is converted to more KE at the bottom of the ramp, so the block travels further before friction brings it to rest. Quantitative: doubling the height doubles the distance.',
      },
      {
        label: 'e',
        text: '**Identify** the independent and dependent variables, and **name two control variables** for this experiment.',
        marks: 4,
        widget: 'variable_classify',
        widgetItems: ['Height of ramp', 'Distance block travels', 'Material of sliding block', 'Surface the block slides on', 'Mass of block', 'Length of ramp'],
        ph: 'Independent: Height of ramp. Dependent: Distance the block travels along the flat surface. Control variables (any 2): material of block, surface the block slides on, mass of block, length of ramp.',
      },
      {
        label: 'f',
        text: 'A student sets up the ramp at a very low height and finds the block does not slide at all. **Explain** why this happened.',
        marks: 1,
        ph: 'At low heights the ramp is not steep enough / the force component along the ramp is less than the frictional force. The block does not have enough force to overcome friction and does not slide.',
      },
      {
        label: 'g',
        text: '**Describe two safety precautions** the student should take when carrying out this experiment.',
        marks: 2,
        ph: 'E.g. Ensure the ramp is firmly supported/clamped so it cannot fall. Ensure there are no obstacles in the path of the block. Keep feet/hands clear of the path of the sliding block.',
      },
      {
        label: 'h',
        text: '**Describe** the data you will collect. Include the range of heights you will use and the number of trials.',
        marks: 4,
        ph: 'Measure the distance travelled for at least 5 different heights between 0.35 m and 0.60 m (evenly spaced). Carry out at least 2 trials at each height. Record both the height (IV) and the distance (DV) for each trial. Calculate a mean distance for each height.',
      },
      {
        label: 'i',
        text: 'The student plots a graph of distance (y-axis) against height (x-axis). **Describe** the relationship shown by the graph.',
        marks: 2,
        ph: 'As the height of the ramp increases, the distance travelled by the block increases. There is a linear relationship between height and distance. The relationship is NOT proportional (the line does not pass through the origin — there is an x-intercept).',
      },
      {
        label: 'j',
        text: '**Read** the x-intercept from the graph.',
        marks: 1,
        ph: 'Accept any value in the range 0.29–0.31 m (units not essential for this mark)',
      },
      {
        label: 'k',
        text: '**Explain** the significance of the x-intercept in this experiment.',
        marks: 2,
        ph: 'The x-intercept represents the minimum height of the ramp at which the block will travel beyond the ramp onto the flat section. Below this height, all of the energy of the falling block will be lost to friction / the frictional force is too high for the block to slide beyond the ramp.',
      },
      {
        label: 'l',
        text: '**Evaluate** the quality of the student\'s method in terms of the conclusions that can be drawn.',
        marks: 1,
        ph: 'The method produced sufficient data for a conclusion to be drawn (a suitable graph could be drawn showing the linear relationship between height and distance).',
      },
    ],
  },

  // ── Q6: Alternative Ramp Investigation (9 marks, Criterion B) ──
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 9,
    stem: 'The student wants to extend their investigation of the ramp experiment by changing a different variable.',
    tags: { unit: 'forces-interactions', topics: ['experimental design', 'variables', 'hypothesis', 'friction'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State** a relevant question using a suitable **alternative independent variable** for a new ramp investigation.',
        marks: 1,
        ph: 'How does the surface material (or mass of the block / angle of ramp / length of ramp) affect the distance the block travels? (Do NOT accept height as IV; do NOT accept speed as DV.)',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that the question in part (a) would test.',
        marks: 3,
        ph: 'E.g. As the surface becomes rougher, the distance the block travels will decrease. Because a rougher surface has a greater frictional force, which removes kinetic energy from the block more rapidly. Doubling the roughness will halve the distance.',
      },
      {
        label: 'c',
        text: '**Identify** one independent variable and **name two control variables** (that can be measured) for this new investigation.',
        marks: 3,
        ph: 'IV: surface material (ECF from 6a; do not accept height). CV (any 2 that can be measured): same height, same mass of block, same surface area of block in contact, same ramp length.',
      },
      {
        label: 'd',
        text: '**Describe** the data you will collect. Include the number of different conditions of the IV and any relevant features of your plan.',
        marks: 2,
        ph: 'Describe testing at least 5 different conditions of the IV (e.g. 5 different surface materials or 5 different masses). Specify either multiple trials, different conditions of the IV, or relevant equipment.',
      },
    ],
  },

  // ── Q7: Sail Experiment — Stopping Distance (9 marks, Criterion C) ──
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 9,
    stem: 'A student investigates how the radius of a circular sail attached to a toy trolley affects the stopping distance of the trolley. The trolley is launched with the same force each time.',
    figImages: [`${P}q7-trolley.png`],
    tags: { unit: 'forces-interactions', topics: ['drag', 'friction', 'stopping distance', 'data processing', 'proportionality'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student clicks the release mechanism in the simulation. Take appropriate measurements and **determine** the stopping distance of the trolley.',
        marks: 3,
        ph: 'Read the start position of the trolley and the final (stopping) position. Stopping distance = final position − start position ≈ 6.11 m (accept 6.08–6.13 m). Include the unit: m.',
      },
      {
        label: 'b',
        text: 'The student records the stopping distance for several different sail radii. **Create a suitable table** to record the data collected, including appropriate column headings with units, data in order, and consistent decimal places.',
        marks: 5,
        ph: 'Table: Column 1 = Radius of sail / m. Column 2 = Stopping distance / m. Units in headers only. Data ordered (ascending or descending radius). Values recorded to consistent decimal places. Include the result from part (a) for the appropriate sail radius.',
      },
      {
        label: 'c',
        text: 'The student claims that a scatter graph with a line of best fit is the most appropriate way to present this data.\n\n**Justify** this choice.',
        marks: 1,
        ph: 'The data is continuous (both radius and stopping distance are continuous numerical variables). A scatter graph allows a line of best fit to be drawn to identify the relationship and any anomalies.',
      },
    ],
  },

  // ── Q7 continued: Data Analysis (7 marks, Criterion C) ──
  // Note: grouped here as Q7d-h for processing marks
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 7,
    stem: 'The student analyses their stopping distance data further by plotting four graphs: Graph 1 (stopping distance vs radius R), Graph 2 (stopping distance vs R²), Graph 3 (stopping distance vs 1/R), Graph 4 (stopping distance vs 1/R²).',
    figImages: [`${P}q7e-graph1.png`, `${P}q7g-graph4.png`],
    tags: { unit: 'forces-interactions', topics: ['data processing', 'proportionality', 'inverse relationship', 'drag'], level: 'advanced' },
    tasks: [
      {
        label: 'd',
        text: 'The student had hypothesised: *"As the radius of the sail increases, the stopping distance will decrease because the drag force will be greater."*\n\n**Describe** the relationship shown between stopping distance and sail radius in Graph 1.',
        marks: 2,
        ph: 'As the radius of the sail increases, the stopping distance decreases. The relationship is inverse (not linear). Do NOT accept: proportional.',
      },
      {
        label: 'e',
        text: '**Deduce** the relationship between the variables using the graphs.',
        marks: 1,
        ph: 'Stopping distance is directly proportional to 1/R (inversely proportional to R). Graph 3 (stopping distance vs 1/R) shows a straight line through the origin.',
      },
      {
        label: 'f',
        text: '**Explain** why increasing the sail radius reduces the stopping distance.',
        marks: 3,
        ph: 'Increasing the sail radius increases the surface area of the sail. A larger area creates a greater drag force (more air resistance). The greater drag removes kinetic energy from the trolley more rapidly, so the trolley stops in a shorter distance. More collisions between air particles and sail per unit time → greater retarding force.',
      },
      {
        label: 'g',
        text: 'Graph 4 shows stopping distance against 1/R². **Evaluate** the validity of the hypothesis that stopping distance is inversely proportional to R.',
        marks: 2,
        ph: 'Graph 4 (stopping distance vs 1/R²) is NOT a straight line through the origin; Graph 3 (vs 1/R) IS a straight line through the origin. Therefore stopping distance is inversely proportional to R (not R²). The hypothesis (stopping distance decreases with increasing R) is supported, but the "hypothesis" was about direction only — the actual relationship is d ∝ 1/R, not d ∝ 1/R².',
      },
    ],
  },

  // ── Q8 (was labelled Q8 in QP): Materials for Prosthetics (7 marks, Criterion C/D) ──
  {
    id: 9,
    crit: 'C',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 7,
    stem: 'When a force is applied to a material it can cause a change in the length of that material. Young\'s modulus (E) is a measure of how much the material can be changed. Stiffer or more rigid materials have a bigger value of E. The table shows data for some of the materials used in prostheses.',
    figImages: [`${P}q8-materials-table.png`],
    tags: { unit: 'forces-interactions', topics: ['materials', 'Young\'s modulus', 'density', 'prosthetics'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the most rigid material in the table.',
        marks: 1,
        ph: 'Carbon fibre (Young\'s modulus E = 40 GPa — the highest value in the table).',
      },
      {
        label: 'b',
        text: '**Suggest** one reason why Material X might not be ideal for use in a prosthetic limb for an athlete.',
        marks: 1,
        ph: 'Material X is too soft / less rigid (lower Young\'s modulus) / may not be able to support high forces during competition. OR: Material X has a higher density, making the prosthetic limb heavier.',
      },
      {
        label: 'c',
        text: '**Compare** the properties of Material X with carbon fibre, and **evaluate** whether Material X or carbon fibre would be more suitable for a high-performance prosthetic limb. Refer to density, stiffness (Young\'s modulus), and how each property affects the function of a prosthesis.',
        marks: 5,
        ph: 'Carbon fibre: E = 40 GPa (much stiffer than Material X, E = 17 GPa) → better for high-impact sport (maintains shape under load). Density: Carbon fibre 1.60 g cm⁻³ vs Material X 4.23 g cm⁻³ → carbon fibre much lighter → less metabolic energy for athlete to lift limb. Leg is more complex than bone alone: muscles also important. Recommendation: carbon fibre better due to greater stiffness and lower density for athletic performance.',
      },
    ],
  },

  // ── Q9: Prosthetics in Sport — Ethics Evaluation (11 marks, Criterion D — banded) ──
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 11,
    stem: 'Advances in materials science have led to the development of high-performance prosthetic limbs that allow athletes with limb differences to compete at high levels.',
    tags: { unit: 'forces-interactions', topics: ['prosthetics', 'ethics', 'sport', 'technology', 'evaluation'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the implications of this type of technological advance in relation to the fairness of the competition and inclusive access to sport for all athletes. In your answer, consider:\n- the **ethical** implications of improving performance with prostheses\n- the **social** implications of including prosthesis-aided athletes in competitions\n- a **concluding appraisal**',
        marks: 11,
        ph: 'Ethical: prostheses may give unfair advantage (spring-like limbs store/release energy) → debate about separate categories. BUT: denying competition is discriminatory. Access: prostheses allow participation → socially positive / inclusive. Advanced prostheses very expensive → only accessible to wealthy athletes → inequality in access. Social: visibility of para-athletes inspires others. Concluding appraisal: technological advance is beneficial for inclusion but requires careful regulation to ensure fairness; separate categories or strict performance standards may be needed.',
      },
    ],
  },

  // ── Q10: Elephant Foot Prosthesis — Pressure (7 marks, Criterion A/D) ──
  {
    id: 11,
    crit: 'A',
    type: 'extended',
    topic: 'pressure',
    marks: 7,
    stem: 'An elephant in Thailand lost its foot in a landmine explosion. Veterinarians designed a prosthetic foot for the elephant. The elephant has a mass of 2500 kg and stands on four legs. Gravitational field strength g = 10 ms⁻². Each foot has a contact area of 0.05 m² with the ground.',
    tags: { unit: 'pressure', topics: ['pressure', 'force', 'area', 'prosthetics design'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the pressure that the elephant exerts on the ground through one foot.',
        marks: 2,
        ph: 'Weight of elephant = mg = 2500 × 10 = 25 000 N. Weight per foot = 25 000 / 4 = 6 250 N. OR total weight on all feet: P = F/A = 25000 / (4 × 0.05) = 25000 / 0.2 = 125 000 Pa. Per foot: P = 6250 / 0.05 = 125 000 Pa (50 000 Pa if calculated differently). Accept 50 000 N/m² or Pa.',
      },
      {
        label: 'b',
        text: '**Explain** how the design of the prosthesis takes account of pressure when:\n1. Creating contact with the ground\n2. Connecting to the elephant\'s limb',
        marks: 5,
        ph: 'Contact with ground: the contact area between the prosthesis and the ground should be as large as the natural elephant foot to keep pressure the same / low enough to allow walking without the foot sinking. Large area → lower pressure (P = F/A). Contact with limb: the area of contact between the prosthesis and the remaining limb should be maximised to distribute the force over a large area → lower pressure on the skin/tissue → comfortable and prevents injury.',
      },
    ],
  },
]
