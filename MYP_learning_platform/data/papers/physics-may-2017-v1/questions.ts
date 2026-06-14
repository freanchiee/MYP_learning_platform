import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2017-v1/'

export const paperMeta = {
  id: 'physics-may-2017-v1',
  subject: 'Physics',
  session: 'May',
  year: 2017,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Star Colours & Light Properties — Blue Hypergiant vs Red Dwarf (4 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Star Temperature and Light Colour',
    marks: 4,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Blue hypergiant stars are extremely massive and hot. Red dwarf stars are small, cool, and very long-lived. The colour of a star is related to its surface temperature: hotter stars emit more blue light, while cooler stars emit more red light.',
    figImages: ['/images/papers/physics-may-2017-v1/q1-stars.svg'],
    tags: { unit: 'astrophysics', topics: ['star temperature', 'colour', 'EM spectrum', 'light properties'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct options to complete the comparisons between red and blue light.\n\nThe speed of red light is **[greater than / equal to / less than]** the speed of blue light.\n\nThe wavelength of red light is **[greater than / equal to / less than]** the wavelength of blue light.\n\nThe frequency of red light is **[greater than / equal to / less than]** the frequency of blue light.',
        marks: 2,
        ph: 'Speed: equal to. Wavelength: greater than. Frequency: less than. All 3 correct = 2 marks; any 1 correct = 1 mark.',
      },
      {
        label: 'b',
        text: '**State** the expected maximum surface temperature for the red dwarf star Proxima Centauri.',
        marks: 1,
        ph: 'Less than (or equal to) 3200 °C.',
      },
      {
        label: 'c',
        text: '**State** the expected colour for a star with a surface temperature of 15,000 °C.',
        marks: 1,
        ph: 'Blue (accept: blue-white).',
      },
    ],
  },

  // ── Q2: White Light & UV Beyond the Violet (7 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Light Dispersion and Ultraviolet Radiation',
    marks: 7,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    stem: 'White light from a projector passes through a glass prism and produces a spectrum on a screen. A student places a UV-sensitive fluorescent card in different positions across the spectrum and beyond the violet end.',
    tags: { unit: 'em-spectrum', topics: ['white light', 'refraction', 'ultraviolet radiation', 'electromagnetic spectrum'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** why white light produces a spectrum when it passes through a glass prism.',
        marks: 2,
        ph: 'White light is a mixture of different colours/frequencies/wavelengths. Different frequencies are refracted by different amounts in glass, separating them into a spectrum.',
      },
      {
        label: 'b',
        text: 'The student observes that the fluorescent card glows strongly when placed beyond the violet end of the visible spectrum.\n\n**Explain** what physical process causes the card to fluoresce (glow) when ultraviolet radiation hits it.',
        marks: 2,
        ph: 'UV radiation is absorbed by the fluorescent material. The absorbed UV energy excites electrons to higher energy states. When electrons return to lower energy states they emit visible light (fluorescence). Black/dark surfaces absorb radiation most effectively.',
      },
      {
        label: 'c',
        text: '**Interpret** the results: the card does not glow in the visible spectrum, but glows brightly beyond the violet end. **Explain** this using scientific reasoning about the electromagnetic spectrum.',
        marks: 3,
        ph: 'The visible spectrum (violet to red) does not have enough photon energy to excite the fluorescent material. UV radiation beyond the violet has higher frequency (greater energy per photon) than visible light. The higher energy of UV photons is sufficient to excite the fluorescent dye molecules, causing them to emit visible light. This confirms UV radiation exists beyond the visible violet end.',
      },
    ],
  },

  // ── Q3: Exoplanet Observatory — Telescopes & Sirius (13 marks, Criterion A) ──
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Telescopes, Stellar Motion & Light Year Calculation',
    marks: 13,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Astronomers use ground-based and space telescopes to study the night sky. Long-exposure photographs reveal details of how the sky appears to change over time.',
    tags: { unit: 'astrophysics', topics: ['telescopes', 'reflection', 'Earth rotation', 'pole star', 'light year', 'distance'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'A spinning mirror attached to a telescope rotates at high speed to capture images of the sky. **Select** the correct diagram showing how the spinning mirror would appear in a long-exposure photograph of the sky.',
        marks: 1,
        ph: 'The mirror appears as a bright arc/trail in the photograph, tracing its rotation path.',
      },
      {
        label: 'b',
        text: 'A reflecting telescope uses a curved primary mirror to focus light. **Draw** on the diagram the path of two reflected rays from the curved mirror and show the correct **direction** of the arrows. Show where the rays converge to form an image.',
        marks: 3,
        ph: 'Both reflected rays converge at the focal point. Arrows correctly pointing away from mirror toward the focal point. Full marks if both rays approximately correct; third mark for correct arrow directions.',
      },
      {
        label: 'c',
        text: 'An astronomer takes a long-exposure photograph of the night sky from an observatory in Chile. The photograph shows arcs of light from stars.\n\n**Explain** why the stars appear to trace arcs across the sky during a long exposure.',
        marks: 2,
        ph: 'The stars appear to move because the Earth is rotating on its axis. The stars themselves are not moving (relative to Earth); the rotation of the Earth causes their apparent motion.',
      },
      {
        label: 'd',
        text: 'In the photograph, the star marked S (Sigma Octantis — the southern pole star) appears almost stationary compared with all other stars. **Explain why** Sigma Octantis appears to not move.',
        marks: 1,
        ph: 'Sigma Octantis is located almost directly above the Earth\'s South Pole, in line with the Earth\'s axis of rotation, so it does not appear to move as the Earth rotates.',
      },
      {
        label: 'e',
        text: 'Three faint stars close together in a distant galaxy are visible only as a single blurry point to the naked eye. **Explain why** the three stars cannot be seen as distinct objects with the naked eye, and how a telescope allows us to see them separately.',
        marks: 2,
        ph: 'The naked eye cannot resolve (separate) objects very close together in the sky. A telescope provides greater magnification and light-gathering ability, allowing the angular separation between the three stars to be resolved.',
      },
      {
        label: 'f',
        text: 'Sirius A is estimated to be 8.7 light years from Earth. A light year is the distance light travels in one year. Light travels at 3.0 × 10⁸ ms⁻¹ in a vacuum. Assume a year has 365 days.\n\n**Calculate** how far Sirius A is from the Earth in metres. Show your working.',
        marks: 3,
        ph: 'Time in 1 year = 365 × 24 × 3600 = 3.15 × 10⁷ s. 1 light year = 3.0 × 10⁸ × 3.15 × 10⁷ = 9.45 × 10¹⁵ m. Distance = 8.7 × 9.45 × 10¹⁵ = 8.22 × 10¹⁶ ≈ 8.3 × 10¹⁶ m.',
      },
      {
        label: 'g',
        text: 'Using your answer to part (f), **state** the distance from Sirius A to Earth in metres. Give your answer in standard form.',
        marks: 1,
        ph: '8.3 × 10¹⁶ m (ECF from part f)',
      },
    ],
  },

  // ── Q4: Binary Star System & Habitable Zone (8 marks, Criterion A) ──
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Binary Stars, Exoplanets & Habitable Zone',
    marks: 8,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Many stars exist in binary systems — pairs of stars orbiting each other. Astronomers use the transit method to detect exoplanets: a planet passing in front of a star causes a dip in the star\'s brightness as measured from Earth.',
    figImages: [`${P}q4-binary.png`],
    tags: { unit: 'astrophysics', topics: ['binary stars', 'habitable zone', 'transit method', 'luminosity'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** how the transit method allows astronomers to detect an exoplanet orbiting a star.',
        marks: 2,
        ph: 'Exoplanets are opaque objects. When an exoplanet passes in front of its star, it blocks some of the star\'s light, causing a measurable dip in brightness as seen from Earth. The periodic dip in brightness reveals the planet.',
      },
      {
        label: 'b',
        text: '**Explain** why exoplanets cannot normally be directly detected by optical telescopes (unlike stars).',
        marks: 2,
        ph: 'Exoplanets are non-luminous — they do not produce their own light. They are only detectable via reflected light from their star (reflected light is extremely faint) or by the shadow they cast during a transit.',
      },
      {
        label: 'c',
        text: 'A rocky exoplanet orbits too close to its host star to support liquid water. **Explain why** liquid water cannot exist on the surface of a planet that is very close to a hot star.',
        marks: 2,
        ph: 'A planet very close to a hot star receives too much radiation. The surface temperature would be too high. Any water present on the surface would evaporate/boil away and cannot remain in liquid form.',
      },
      {
        label: 'd',
        text: 'A binary star system has two stars: a large, hot, blue star and a small, cool, red star. **Explain why** the habitable zone around the blue star is further from it than the habitable zone around the red star.',
        marks: 2,
        ph: 'The blue star is hotter and emits more energy per unit time than the red star. A planet must be further away from the blue star to receive the same energy per unit area needed for liquid water. Therefore the habitable zone is further out for the more energetic blue star.',
      },
    ],
  },

  // ── Q5: Ramp Investigation — Steel Ball Rolling (25 marks, Criterion B) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'GPE, KE & Rolling Friction Investigation',
    marks: 25,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'The simulation shows a ramp with a steel ball (mass 0.30 kg) that rolls down the ramp onto a flat surface. The ramp length is 80 cm. The height of the ramp and the distance the ball rolls along the flat surface can both be measured.',
    figImages: [`${P}q5-ramp-setup.png`],
    tags: { unit: 'forces-interactions', topics: ['gravitational potential energy', 'kinetic energy', 'friction', 'variables', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**State** the equation linking gravitational potential energy (GPE) and kinetic energy (KE) for a ball rolling down a frictionless ramp.',
        marks: 1,
        ph: 'GPE = KE (gravitational potential energy converts to kinetic energy)',
      },
      {
        label: 'b',
        text: '**Calculate** the gravitational potential energy of the ball when the ramp height is 0.45 m. Use g = 10 ms⁻². Show your working.',
        marks: 3,
        ph: 'GPE = mgh = 0.30 × 10 × 0.45 = 1.35 J',
      },
      {
        label: 'c',
        text: '**State** the question that this investigation could answer.',
        marks: 1,
        ph: 'How does the height of the ramp affect the distance the ball rolls along the flat surface?',
      },
      {
        label: 'd',
        text: '**Formulate and explain** the hypothesis that this question would test.',
        marks: 3,
        ph: 'As the height increases, the distance rolled increases. Greater height → more GPE → more KE at base → ball rolls further before friction stops it. Doubling height doubles the distance (quantitative).',
      },
      {
        label: 'e',
        text: '**Identify** the independent and dependent variables, and **name two control variables** for this experiment.',
        marks: 4,
        widget: 'variable_classify',
        widgetItems: ['Height of ramp', 'Distance ball travels', 'Material of ball', 'Surface the ball rolls on', 'Mass of ball', 'Length of ramp'],
        ph: 'IV: Height of ramp. DV: Distance ball travels. CV (any 2): material of ball, surface the ball rolls on, mass of ball, length of ramp.',
      },
      {
        label: 'f',
        text: 'A student sets up the ramp at a very low height and finds the ball does not roll off onto the flat surface. **Explain** why this happened.',
        marks: 1,
        ph: 'At very low heights the ramp is not steep enough. The driving force component along the ramp is less than friction. The ball does not overcome friction and does not leave the ramp.',
      },
      {
        label: 'g',
        text: '**Describe two safety precautions** the student should take when carrying out this experiment.',
        marks: 2,
        ph: 'Clamp the ramp securely so it cannot fall. Keep hands and feet clear of the ball\'s rolling path. Ensure a barrier/backstop prevents the ball hitting equipment or people.',
      },
      {
        label: 'h',
        text: '**Describe** the data you will collect. Include the range of heights you will use and the number of trials.',
        marks: 4,
        ph: 'Measure rolling distance for at least 5 different heights between 0.20 m and 0.55 m, evenly spaced. At least 2 trials per height. Record both height (IV) and distance (DV). Calculate mean distance at each height.',
      },
      {
        label: 'i',
        text: 'The student plots a graph of distance (y-axis) against height (x-axis). **Describe** the relationship shown by the graph.',
        marks: 2,
        ph: 'As height increases, distance increases. The relationship is linear (straight line). The line does NOT pass through the origin (x-intercept exists) → NOT proportional.',
      },
      {
        label: 'j',
        text: '**Read** the x-intercept from the graph.',
        marks: 1,
        ph: 'Accept any value in the range 0.13–0.17 m (units not essential for this mark)',
      },
      {
        label: 'k',
        text: '**Explain** the significance of the x-intercept in this experiment.',
        marks: 2,
        ph: 'The x-intercept is the minimum ramp height at which the ball will roll off the ramp onto the flat surface. Below this height, friction on the ramp consumes all the kinetic energy before the ball reaches the flat section.',
      },
      {
        label: 'l',
        text: '**Evaluate** the quality of the student\'s method in terms of the conclusions that can be drawn.',
        marks: 1,
        ph: 'The method produced sufficient data to draw a valid conclusion (a graph showing the linear relationship between height and distance could be plotted).',
      },
    ],
  },

  // ── Q6: Alternative Ramp Investigation — Ball Mass (9 marks, Criterion B) ──
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Alternative Ramp Variable Investigation',
    marks: 9,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'The student wants to extend the ramp investigation by changing a different variable.',
    tags: { unit: 'forces-interactions', topics: ['experimental design', 'variables', 'hypothesis', 'friction'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State** a relevant question using a suitable **alternative independent variable** for a new ramp investigation.',
        marks: 1,
        ph: 'How does the mass of the ball (or surface material / angle of ramp / length of ramp) affect the distance the ball rolls? (Do NOT accept height as IV; do NOT accept speed as DV.)',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that the question in part (a) would test.',
        marks: 3,
        ph: 'As the mass of the ball increases, the distance rolled will remain constant (GPE = mgh and KE = ½mv², so mass cancels). OR for surface roughness: rougher surface → more friction → shorter distance. Include quantitative prediction and scientific explanation.',
      },
      {
        label: 'c',
        text: '**Identify** one independent variable and **name two control variables** (that can be measured) for this new investigation.',
        marks: 3,
        ph: 'IV: mass of ball (ECF from 6a; not height). CV (any 2): height of ramp, surface material, ramp length, ball material/type.',
      },
      {
        label: 'd',
        text: '**Describe** the data you will collect. Include the number of different conditions of the IV and any relevant features of your plan.',
        marks: 2,
        ph: 'Test at least 5 different masses (or surface conditions). Multiple trials per condition. Record both IV and DV for each trial.',
      },
    ],
  },

  // ── Q7: Rectangular Sail Investigation (9 marks, Criterion C) ──
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Rectangular Sail — Stopping Distance Investigation',
    marks: 9,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A student investigates how the width of a rectangular sail attached to a toy trolley affects the stopping distance of the trolley. The trolley is launched with the same force each time.',
    figImages: [`${P}q7-trolley.png`],
    tags: { unit: 'forces-interactions', topics: ['drag', 'friction', 'stopping distance', 'data processing', 'proportionality'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student clicks the release mechanism in the simulation. Take appropriate measurements and **determine** the stopping distance of the trolley.',
        marks: 3,
        ph: 'Read start and stop positions. Stopping distance = final − initial ≈ 4.55 m (accept 4.50–4.60 m). Include unit: m.',
      },
      {
        label: 'b',
        text: 'The student records the stopping distance for several different sail widths. **Create a suitable table** to record the data collected, including appropriate column headings with units, data in order, and consistent decimal places.',
        marks: 5,
        ph: 'Table: Column 1 = Width of sail / m. Column 2 = Stopping distance / m. Units in headers only. Ascending or descending order. Consistent decimal places. Include result from part (a) for appropriate width.',
      },
      {
        label: 'c',
        text: 'The student claims that a scatter graph with a line of best fit is the most appropriate way to present this data.\n\n**Justify** this choice.',
        marks: 1,
        ph: 'The data is continuous (both sail width and stopping distance are continuous numerical variables). A scatter graph allows a line of best fit to show the relationship and identify anomalies.',
      },
    ],
  },

  // ── Q7 continued: Sail Data Analysis (7 marks, Criterion C) ──
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Sail Data Analysis — Relationship Deduction',
    marks: 7,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'The student analyses their stopping distance data further by plotting four graphs: Graph 1 (stopping distance vs width W), Graph 2 (stopping distance vs W²), Graph 3 (stopping distance vs 1/W), Graph 4 (stopping distance vs 1/W²).',
    figImages: ['/images/papers/physics-may-2017-v1/q7g-graph4.svg', `${P}q7g-graph4.png`],
    tags: { unit: 'forces-interactions', topics: ['data processing', 'proportionality', 'inverse relationship', 'drag'], level: 'advanced' },
    tasks: [
      {
        label: 'd',
        text: 'The student hypothesised: *"As the width of the sail increases, the stopping distance will decrease because the drag force will be greater."*\n\n**Describe** the relationship shown between stopping distance and sail width in Graph 1.',
        marks: 2,
        ph: 'As sail width increases, stopping distance decreases. The relationship is inverse (not linear, not proportional).',
      },
      {
        label: 'e',
        text: '**Deduce** the relationship between the variables using the graphs.',
        marks: 1,
        ph: 'Stopping distance is directly proportional to 1/W (inversely proportional to W). Graph 3 (stopping distance vs 1/W) shows a straight line through the origin.',
      },
      {
        label: 'f',
        text: '**Explain** why increasing the sail width reduces the stopping distance.',
        marks: 3,
        ph: 'Increasing the sail width increases the cross-sectional area exposed to air. Larger area → more air resistance/drag. Greater drag removes kinetic energy from the trolley more quickly → faster deceleration → shorter stopping distance. More air particle collisions per unit time with the sail.',
      },
      {
        label: 'g',
        text: 'Graph 4 shows stopping distance against 1/W². **Evaluate** the validity of the hypothesis that stopping distance is inversely proportional to W.',
        marks: 2,
        ph: 'Graph 4 (vs 1/W²) is NOT a straight line through origin; Graph 3 (vs 1/W) IS a straight line through origin. Therefore d ∝ 1/W. The directional hypothesis (distance decreases with increasing width) is supported, but the relationship is d ∝ 1/W, not d ∝ 1/W².',
      },
    ],
  },

  // ── Q9: Prosthetic Materials — Titanium vs Carbon Fibre (7 marks, Criterion C) ──
  {
    id: 9,
    crit: 'C',
    type: 'extended',
    topic: 'Materials for Prosthetic Limbs',
    marks: 7,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'When a force is applied to a material it can cause a change in the length of that material. Young\'s modulus (E) is a measure of how much the material can be changed. Stiffer or more rigid materials have a bigger value of E. The table shows data for some materials used in prostheses.',
    figImages: [`${P}q8-materials-table.png`],
    tags: { unit: 'forces-interactions', topics: ['materials', 'Young\'s modulus', 'density', 'prosthetics'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the most rigid material in the table.',
        marks: 1,
        ph: 'Titanium alloy (highest Young\'s modulus E = 110 GPa in the table).',
      },
      {
        label: 'b',
        text: '**Suggest** one reason why Material P (UHMWPE) might not be ideal for use in a prosthetic limb for an athlete.',
        marks: 1,
        ph: 'Material P has very low stiffness (E = 0.7 GPa) — much too flexible to support the high forces encountered in athletic competition. OR: its low density is an advantage but its very low Young\'s modulus means it would deform excessively under load.',
      },
      {
        label: 'c',
        text: '**Compare** the properties of titanium alloy with carbon fibre composite, and **evaluate** which material would be more suitable for a high-performance prosthetic running blade. Refer to density, stiffness (Young\'s modulus), and how each property affects the function of a prosthesis.',
        marks: 5,
        ph: 'Titanium alloy: E = 110 GPa (very stiff) but density = 4.5 g/cm³ (heavy). Carbon fibre: E = 40 GPa (very stiff) but density = 1.60 g/cm³ (much lighter). Both are stiff enough for athletic use. Carbon fibre is much lighter → less metabolic effort to lift limb during running. Carbon fibre preferred: sufficient stiffness + much lower mass. Recommendation: carbon fibre better suited for athletic prosthetic blade.',
      },
    ],
  },

  // ── Q10: Exoskeleton Technology Evaluation (11 marks, Criterion D — banded) ──
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Powered Exoskeleton Technology in Sport',
    marks: 11,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'Powered robotic exoskeletons are wearable devices that support the wearer\'s movements using motorised joints. They are used in rehabilitation, and some athletes are beginning to use them in training to assist with movement and protect against injury.',
    tags: { unit: 'forces-interactions', topics: ['exoskeleton', 'ethics', 'sport', 'technology', 'evaluation'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the implications of powered exoskeleton technology in sport and rehabilitation. In your answer, consider:\n- the **ethical** implications of using exoskeletons to enhance athletic performance\n- the **social** implications of exoskeleton-assisted athletes competing\n- a **concluding appraisal**',
        marks: 11,
        ph: 'Ethical: exoskeleton provides mechanical assistance (motorised joints) → significant performance advantage → debate about fair competition. Athletes without exoskeletons cannot compete equally. BUT: used in training (not competition) this might be acceptable. Access: exoskeletons very expensive → only elite/wealthy athletes can afford → inequality. Rehabilitation: huge benefit for injured athletes and people with disabilities → socially positive. Social: exoskeletons could make sport more inclusive for people with mobility impairments. Concluding appraisal: exoskeletons offer great benefit in rehabilitation; use in competition should be regulated; separate categories may be necessary; cost barrier limits access and creates inequality.',
      },
    ],
  },

  // ── Q11: Hippopotamus Prosthetic Foot — Pressure (7 marks, Criterion A) ──
  {
    id: 11,
    crit: 'A',
    type: 'extended',
    topic: 'Pressure Calculation — Hippopotamus Prosthesis',
    marks: 7,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    stem: 'A hippopotamus at a wildlife rescue centre was fitted with a prosthetic foot after an injury. The hippopotamus has a mass of 2000 kg and stands on four legs. Gravitational field strength g = 10 ms⁻². Each foot has a contact area of 0.04 m² with the ground.',
    tags: { unit: 'pressure', topics: ['pressure', 'force', 'area', 'prosthetics design'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the pressure that the hippopotamus exerts on the ground through one foot.',
        marks: 2,
        ph: 'Weight = mg = 2000 × 10 = 20 000 N. Force per foot = 20 000 / 4 = 5 000 N. Pressure = F/A = 5 000 / 0.04 = 125 000 Pa.',
      },
      {
        label: 'b',
        text: '**Explain** how the design of the prosthesis takes account of pressure when:\n1. Creating contact with the ground\n2. Connecting to the hippopotamus\'s limb',
        marks: 5,
        ph: 'Ground contact: area of prosthesis contacting ground should match the natural foot area → keeps pressure per unit area the same → prevents the foot sinking into soft ground (P = F/A: larger A → lower P). Limb contact: contact area between prosthesis and remaining limb stump should be maximised → distributes the large force over a wider area → reduces pressure on skin and tissue → prevents sores and injury.',
      },
    ],
  },
]
