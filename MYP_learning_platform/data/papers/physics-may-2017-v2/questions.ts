import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2017-v2/'

export const paperMeta = {
  id: 'physics-may-2017-v2',
  subject: 'Physics',
  session: 'May',
  year: 2017,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Star Colours & Light — Red Supergiant Mu Cephei (4 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Star Temperature and Colour Classification',
    marks: 4,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Stars are classified by their colour, which is directly related to their surface temperature. The hottest stars emit most of their radiation in the blue part of the spectrum, while cool red stars emit mostly red light. The Hertzsprung–Russell diagram shows star colour plotted against luminosity.',
    figImages: [`${P}q1-stars.png`],
    tags: { unit: 'astrophysics', topics: ['star temperature', 'colour', 'EM spectrum', 'light properties'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct options to complete the comparisons between red and blue light.\n\nThe speed of red light is **[greater than / equal to / less than]** the speed of blue light.\n\nThe wavelength of red light is **[greater than / equal to / less than]** the wavelength of blue light.\n\nThe frequency of red light is **[greater than / equal to / less than]** the frequency of blue light.',
        marks: 2,
        ph: 'Speed: equal to. Wavelength: greater than. Frequency: less than. All 3 correct = 2; any 1 correct = 1.',
      },
      {
        label: 'b',
        text: '**State** the expected surface temperature for the red supergiant star Mu Cephei.',
        marks: 1,
        ph: 'Less than (or equal to) 3200 °C.',
      },
      {
        label: 'c',
        text: '**State** the expected colour for a star with a surface temperature of 25,000 °C.',
        marks: 1,
        ph: 'Blue (accept: blue-white).',
      },
    ],
  },

  // ── Q2: White Light & Radiation Beyond the Red End (7 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Light Dispersion and Infrared Radiation',
    marks: 7,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    stem: 'White light from a halogen lamp passes through a glass prism into a darkened room. A student places a digital infrared thermometer sensor in different positions across the spectrum and in the region beyond the visible red end.',
    tags: { unit: 'em-spectrum', topics: ['white light', 'refraction', 'infrared radiation', 'electromagnetic spectrum'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** why white light produces a spectrum when it passes through a glass prism.',
        marks: 2,
        ph: 'White light is a mixture of different colours/frequencies/wavelengths. Different frequencies are refracted by different amounts when passing through glass, separating the colours into a spectrum.',
      },
      {
        label: 'b',
        text: 'The student observes a temperature rise when the sensor is placed beyond the red end of the visible spectrum.\n\n**Explain** what physical process causes the temperature of the sensor to rise when infrared radiation falls on it.',
        marks: 2,
        ph: 'The sensor absorbs infrared radiation from the region beyond the red. Absorption of radiation increases the internal energy / kinetic energy of the sensor\'s molecules, raising its temperature. Dark/black surfaces are better absorbers of radiation.',
      },
      {
        label: 'c',
        text: '**Interpret** the data from the sensor readings across the spectrum and **explain** the results using scientific reasoning.',
        marks: 3,
        ph: 'Temperature increases from the violet end to the red end across the visible spectrum. Temperature continues to rise beyond the red end in the infrared region. The maximum temperature rise occurs in the infrared region, beyond the visible spectrum. This occurs because the infrared region carries more energy per unit area in this region of the spectrum. The sensor absorbs radiation at all wavelengths, with peak response in the infrared.',
      },
    ],
  },

  // ── Q3: Southern Observatory — Telescopes & Alpha Centauri (13 marks, Criterion A) ──
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Telescopes, Star Trails & Light Year Calculation',
    marks: 13,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Astronomers use optical and radio telescopes to study the universe. Long-exposure cameras can capture the motion of the sky over several hours from an observatory.',
    tags: { unit: 'astrophysics', topics: ['telescopes', 'reflection', 'Earth rotation', 'pole star', 'light year', 'distance'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'A revolving mirror attached to a camera rotates continuously to track the sky. **Select** the correct diagram showing how the rotating mirror would appear in a long-exposure photograph of the night sky.',
        marks: 1,
        ph: 'The mirror appears as a continuous bright arc/streak in the long-exposure photograph.',
      },
      {
        label: 'b',
        text: 'A reflecting telescope uses a large concave primary mirror to collect and focus light. **Draw** on the diagram the path of two reflected rays from the curved mirror and show the correct **direction** of the arrows. Show where the rays converge to form an image.',
        marks: 3,
        ph: 'Both reflected rays converge at the focal point of the mirror. Arrows point from mirror toward focal point. Award 3 marks if both rays approximately correct; third mark for correct arrow direction.',
      },
      {
        label: 'c',
        text: 'A student takes a 3-hour long-exposure photograph of the night sky from an observatory in South Africa. The photograph shows curved arcs of light from stars.\n\n**Explain** why the stars appear to trace arcs across the sky.',
        marks: 2,
        ph: 'The apparent motion of the stars is caused by the rotation of the Earth on its own axis. The Earth rotates from west to east, making the stars appear to move from east to west. The stars themselves are not moving (relative to Earth).',
      },
      {
        label: 'd',
        text: 'In the photograph, the star marked T (Sigma Octantis, the south celestial pole star) appears stationary while all other stars trace arcs. **Explain why** Sigma Octantis appears not to move.',
        marks: 1,
        ph: 'Sigma Octantis is located almost directly above the Earth\'s South Pole, aligned with the Earth\'s axis of rotation. As Earth spins, Sigma Octantis stays in a fixed position above the rotation axis.',
      },
      {
        label: 'e',
        text: 'A cluster of three stars in a nearby galaxy are resolved into separate objects only using a telescope. **Explain why** the three stars cannot be seen as separate objects with the naked eye, and how a telescope solves this.',
        marks: 2,
        ph: 'The naked eye cannot resolve (separate) objects that are angularly very close together in the sky. A telescope increases magnification and light-gathering ability, allowing the angular gap between the three stars to be resolved into distinct objects.',
      },
      {
        label: 'f',
        text: 'Alpha Centauri is estimated to be 4.2 light years from Earth. A light year is the distance light travels in one year. Light travels at 3.0 × 10⁸ ms⁻¹ in a vacuum. Assume a year has 365 days.\n\n**Calculate** how far Alpha Centauri is from the Earth in metres. Show your working.',
        marks: 3,
        ph: '1 year = 365 × 24 × 3600 = 3.15 × 10⁷ s. 1 light year = 3.0 × 10⁸ × 3.15 × 10⁷ = 9.45 × 10¹⁵ m. Distance = 4.2 × 9.45 × 10¹⁵ = 3.97 × 10¹⁶ ≈ 4.0 × 10¹⁶ m.',
      },
      {
        label: 'g',
        text: 'Using your answer to part (f), **state** the distance from Alpha Centauri to Earth in metres. Give your answer in standard form.',
        marks: 1,
        ph: '4.0 × 10¹⁶ m (ECF from part f)',
      },
    ],
  },

  // ── Q4: Exoplanet Detection & Habitable Zone (8 marks, Criterion A) ──
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Exoplanet Detection and the Habitable Zone',
    marks: 8,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The Kepler space telescope detected thousands of exoplanets by monitoring changes in starlight. Astronomers search particularly for planets in the "habitable zone" where liquid water could exist.',
    figImages: [`${P}q4-kepler.png`],
    tags: { unit: 'astrophysics', topics: ['planets', 'habitable zone', 'transit method', 'luminosity'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** how the transit method allows astronomers to detect an exoplanet orbiting a distant star.',
        marks: 2,
        ph: 'An exoplanet is opaque and passes in front of its star (transit), blocking some of the star\'s light. This causes a measurable periodic dip in the brightness of the star as observed from Earth, revealing the planet\'s presence.',
      },
      {
        label: 'b',
        text: '**Explain** why exoplanets cannot normally be directly imaged by telescopes (unlike stars).',
        marks: 2,
        ph: 'Exoplanets are non-luminous — they do not produce their own visible light. They are at least a billion times fainter than their host stars. Only their reflected light or their shadow (transit) can be detected; this reflected light is too faint to distinguish from the star\'s glare.',
      },
      {
        label: 'c',
        text: 'An exoplanet orbiting at a distance of only 0.05 AU from a Sun-like star would have no liquid water on its surface. **Explain why** liquid water cannot exist on such a planet.',
        marks: 2,
        ph: 'At 0.05 AU the planet is extremely close to the star and receives a very large amount of radiation. The surface temperature would be far too high. Any water would evaporate or boil away, leaving only vapour. Liquid water cannot exist at such high temperatures.',
      },
      {
        label: 'd',
        text: 'Observations show that the habitable zone around a cooler, smaller red dwarf star is much closer to the star than for a larger, hotter star like our Sun. **Explain why** the habitable zone is closer to a cool red dwarf star.',
        marks: 2,
        ph: 'A cooler red dwarf star emits much less energy per unit time than a hotter star. A planet must be much closer to a red dwarf to receive enough energy to maintain liquid water temperatures. The habitable zone for a low-luminosity star is therefore much closer to the star.',
      },
    ],
  },

  // ── Q5: Ramp Investigation — Toy Car (25 marks, Criterion B) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'GPE, KE & Friction — Toy Car on a Ramp',
    marks: 25,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'The simulation shows a ramp with a toy car (mass 0.20 kg) that rolls down the ramp onto a flat surface. The ramp length is 80 cm. The height of the ramp and the distance the car travels along the flat surface can both be measured.',
    figImages: [`${P}q5-ramp-setup.png`],
    tags: { unit: 'forces-interactions', topics: ['gravitational potential energy', 'kinetic energy', 'friction', 'variables', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**State** the equation linking gravitational potential energy (GPE) and kinetic energy (KE) for a car rolling down a frictionless ramp.',
        marks: 1,
        ph: 'GPE = KE (gravitational potential energy converts to kinetic energy on a frictionless ramp)',
      },
      {
        label: 'b',
        text: '**Calculate** the gravitational potential energy of the car when the ramp height is 0.80 m. Use g = 10 ms⁻². Show your working.',
        marks: 3,
        ph: 'GPE = mgh = 0.20 × 10 × 0.80 = 1.60 J',
      },
      {
        label: 'c',
        text: '**State** the question that this investigation could answer.',
        marks: 1,
        ph: 'How does the height of the ramp affect the distance the toy car travels along the flat surface?',
      },
      {
        label: 'd',
        text: '**Formulate and explain** the hypothesis that this question would test.',
        marks: 3,
        ph: 'As the height increases, the distance the car travels increases. Greater height → more GPE → more KE at base of ramp → car travels further before friction stops it. Doubling the height doubles the distance (quantitative).',
      },
      {
        label: 'e',
        text: '**Identify** the independent and dependent variables, and **name two control variables** for this experiment.',
        marks: 4,
        widget: 'variable_classify',
        widgetItems: ['Height of ramp', 'Distance car travels', 'Type of car/wheel material', 'Surface the car rolls on', 'Mass of car', 'Length of ramp'],
        ph: 'IV: Height of ramp. DV: Distance car travels. CV (any 2): type of car/wheel material, surface the car rolls on, mass of car, length of ramp.',
      },
      {
        label: 'f',
        text: 'A student sets up the ramp at a very low height and finds the car does not travel beyond the end of the ramp. **Explain** why this happened.',
        marks: 1,
        ph: 'At very low heights the ramp is too shallow. The force component along the ramp is less than the friction force. The car cannot overcome friction and does not leave the ramp.',
      },
      {
        label: 'g',
        text: '**Describe two safety precautions** the student should take when carrying out this experiment.',
        marks: 2,
        ph: 'Clamp or support the ramp securely so it cannot fall over. Keep hands and feet clear of the car\'s rolling path. Provide a cushioned barrier to stop the car at the end of the track.',
      },
      {
        label: 'h',
        text: '**Describe** the data you will collect. Include the range of heights you will use and the number of trials.',
        marks: 4,
        ph: 'Measure distance for at least 5 different heights between 0.30 m and 0.80 m (evenly spaced). At least 2 trials per height. Record height (IV) and distance (DV) for each trial. Calculate mean distance at each height.',
      },
      {
        label: 'i',
        text: 'The student plots a graph of distance (y-axis) against height (x-axis). **Describe** the relationship shown by the graph.',
        marks: 2,
        ph: 'As height increases, distance increases. The relationship is linear (straight line). The line does NOT pass through the origin (x-intercept present) → NOT proportional.',
      },
      {
        label: 'j',
        text: '**Read** the x-intercept from the graph.',
        marks: 1,
        ph: 'Accept any value in the range 0.18–0.22 m (units not essential for this mark)',
      },
      {
        label: 'k',
        text: '**Explain** the significance of the x-intercept in this experiment.',
        marks: 2,
        ph: 'The x-intercept is the minimum height at which the car will travel beyond the ramp onto the flat surface. Below this height, friction on the ramp dissipates all the kinetic energy before the car reaches the flat section.',
      },
      {
        label: 'l',
        text: '**Evaluate** the quality of the student\'s method in terms of the conclusions that can be drawn.',
        marks: 1,
        ph: 'The method produced sufficient data for a valid conclusion (a graph showing the linear relationship between height and distance could be drawn and the x-intercept identified).',
      },
    ],
  },

  // ── Q6: Alternative Ramp Investigation — Surface Material (9 marks, Criterion B) ──
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Alternative Ramp Variable — Surface Texture',
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
        ph: 'How does the surface material of the track (or mass of car / angle of ramp / ramp length) affect the distance the car travels? (Do NOT accept height as IV.)',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that the question in part (a) would test.',
        marks: 3,
        ph: 'As the surface becomes rougher, the distance the car travels will decrease. A rougher surface creates a greater friction force. Friction removes kinetic energy from the car more rapidly, so it stops sooner. Doubling the roughness halves the distance (quantitative prediction).',
      },
      {
        label: 'c',
        text: '**Identify** one independent variable and **name two control variables** (that can be measured) for this new investigation.',
        marks: 3,
        ph: 'IV: surface material of track (ECF from 6a; not height). CV (any 2): height of ramp, mass of car, length of ramp, wheel material.',
      },
      {
        label: 'd',
        text: '**Describe** the data you will collect. Include the number of different conditions of the IV and any relevant features of your plan.',
        marks: 2,
        ph: 'Test at least 5 different surface materials/textures. At least 2 trials per surface. Record both IV (surface) and DV (distance) for each trial.',
      },
    ],
  },

  // ── Q7: Cone Drag Device Investigation (9 marks, Criterion C) ──
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Cone Drag Device — Stopping Distance Investigation',
    marks: 9,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A student investigates how the base radius of a cone-shaped drag device attached to a toy trolley affects the stopping distance of the trolley. The trolley is launched with the same force each time.',
    figImages: [`${P}q7-trolley.png`],
    tags: { unit: 'forces-interactions', topics: ['drag', 'friction', 'stopping distance', 'data processing', 'proportionality'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student clicks the release mechanism. Take appropriate measurements and **determine** the stopping distance of the trolley.',
        marks: 3,
        ph: 'Read start and end positions. Stopping distance = final − initial ≈ 7.32 m (accept 7.28–7.36 m). Include unit: m.',
      },
      {
        label: 'b',
        text: 'The student records the stopping distance for several different cone radii. **Create a suitable table** to record the data collected, including appropriate column headings with units, data in order, and consistent decimal places.',
        marks: 5,
        ph: 'Table: Column 1 = Radius of cone / m. Column 2 = Stopping distance / m. Units in headers only. Data in ascending or descending order. Consistent decimal places. Include result from 7a for appropriate radius.',
      },
      {
        label: 'c',
        text: 'The student claims that a scatter graph with a line of best fit is the most appropriate way to present this data.\n\n**Justify** this choice.',
        marks: 1,
        ph: 'The data is continuous (both cone radius and stopping distance are continuous numerical variables). A scatter graph with a line of best fit allows the mathematical relationship to be identified and anomalous results to be spotted.',
      },
    ],
  },

  // ── Q7 continued: Cone Drag Data Analysis (7 marks, Criterion C) ──
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Cone Drag Data Analysis',
    marks: 7,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'The student analyses their stopping distance data further by plotting four graphs: Graph 1 (stopping distance vs radius R), Graph 2 (stopping distance vs R²), Graph 3 (stopping distance vs 1/R), Graph 4 (stopping distance vs 1/R²).',
    figImages: [`${P}q7e-graph1.png`, `${P}q7g-graph4.png`],
    tags: { unit: 'forces-interactions', topics: ['data processing', 'proportionality', 'inverse relationship', 'drag'], level: 'advanced' },
    tasks: [
      {
        label: 'd',
        text: 'The student hypothesised: *"As the radius of the cone drag device increases, the stopping distance will decrease because drag force increases."*\n\n**Describe** the relationship shown between stopping distance and cone radius in Graph 1.',
        marks: 2,
        ph: 'As cone radius increases, stopping distance decreases. The relationship is inverse (not linear, not proportional).',
      },
      {
        label: 'e',
        text: '**Deduce** the relationship between the variables using the four graphs.',
        marks: 1,
        ph: 'Stopping distance is directly proportional to 1/R. Graph 3 (stopping distance vs 1/R) shows a straight line through the origin → d ∝ 1/R.',
      },
      {
        label: 'f',
        text: '**Explain** why increasing the cone radius reduces the stopping distance.',
        marks: 3,
        ph: 'A larger cone radius gives a larger cross-sectional area. Greater area → more air resistance/drag. Greater drag removes kinetic energy from the trolley faster → trolley decelerates more quickly → stops in a shorter distance. Larger area → more air particle collisions per unit time → greater retarding force.',
      },
      {
        label: 'g',
        text: 'Graph 4 shows stopping distance against 1/R². **Evaluate** the validity of the hypothesis that stopping distance is inversely proportional to R.',
        marks: 2,
        ph: 'Graph 4 (vs 1/R²) is NOT a straight line through origin; Graph 3 (vs 1/R) IS a straight line through origin → d ∝ 1/R. Direction of hypothesis (distance decreases as radius increases) IS supported. But the exact relationship is d ∝ 1/R (not d ∝ 1/R²).',
      },
    ],
  },

  // ── Q9: Prosthetic Materials — Stainless Steel vs Carbon Fibre (7 marks, Criterion C) ──
  {
    id: 9,
    crit: 'C',
    type: 'extended',
    topic: 'Prosthetic Limb Materials — Stainless Steel vs Carbon Fibre',
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
        ph: 'Stainless steel (highest Young\'s modulus E = 200 GPa in the table).',
      },
      {
        label: 'b',
        text: '**Suggest** one reason why Material Q (nylon/polyamide) might not be ideal for use in a high-performance prosthetic limb.',
        marks: 1,
        ph: 'Material Q has low stiffness (E = 3.0 GPa) — it would flex/deform too much under the high forces encountered in athletic competition. OR: it may fatigue over repeated cycles.',
      },
      {
        label: 'c',
        text: '**Compare** the properties of stainless steel with carbon fibre composite, and **evaluate** which material would be more suitable for a high-performance prosthetic running blade. Refer to density, stiffness (Young\'s modulus), and how each property affects the function of a prosthesis.',
        marks: 5,
        ph: 'Stainless steel: E = 200 GPa (very stiff) but density = 7.9 g/cm³ (very heavy). Carbon fibre: E = 40 GPa (very stiff for purpose) but density = 1.60 g/cm³ (much lighter). Both are stiff enough for athletic use. Stainless steel is far heavier → requires much more energy to lift during running → poor athletic performance. Carbon fibre: sufficient stiffness, much lower mass → better for running prosthesis. Recommendation: carbon fibre composite is more suitable for high-performance athletic prosthetic.',
      },
    ],
  },

  // ── Q10: Gene Editing in Sport — Ethics Evaluation (11 marks, Criterion D — banded) ──
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Gene Editing Technology in Sport',
    marks: 11,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'Gene editing technologies such as CRISPR allow scientists to modify the DNA of living organisms. Some researchers are investigating whether gene editing could be used to enhance athletic performance by modifying muscle characteristics or oxygen-carrying capacity.',
    tags: { unit: 'forces-interactions', topics: ['gene editing', 'ethics', 'sport', 'technology', 'evaluation'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the implications of using gene editing to enhance athletic performance. In your answer, consider:\n- the **ethical** implications of genetically modifying athletes\n- the **social** implications for sporting competition\n- a **concluding appraisal**',
        marks: 11,
        ph: 'Ethical: gene editing permanently alters DNA → irreversible changes to a person\'s genome → consent issues; potential harm if unintended mutations occur; "designer athletes" debate. Performance advantage: genetically modified athletes could have permanent, undetectable advantages → renders competition unfair; unlike doping, no drug test can detect DNA modifications. Social: pressure on athletes to undergo risky procedures to compete; athletes from wealthy countries with access to gene editing technology have unfair advantage → global inequality. May improve health/treatment of genetic diseases (dual use). Concluding appraisal: gene editing for performance enhancement is deeply unethical and should be prohibited; however, therapeutic gene editing for treating genuine medical conditions should remain permissible under regulation.',
      },
    ],
  },

  // ── Q11: Rhinoceros Prosthetic Foot — Pressure (7 marks, Criterion A) ──
  {
    id: 11,
    crit: 'A',
    type: 'extended',
    topic: 'Pressure Calculation — Rhinoceros Prosthesis',
    marks: 7,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    stem: 'A rhinoceros at a wildlife sanctuary was fitted with a prosthetic foot after losing a leg to a poaching trap. The rhinoceros has a mass of 3000 kg and stands on four legs. Gravitational field strength g = 10 ms⁻². Each foot has a contact area of 0.04 m² with the ground.',
    tags: { unit: 'pressure', topics: ['pressure', 'force', 'area', 'prosthetics design'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the pressure that the rhinoceros exerts on the ground through one foot.',
        marks: 2,
        ph: 'Weight = mg = 3000 × 10 = 30 000 N. Force per foot = 30 000 / 4 = 7 500 N. Pressure = F/A = 7 500 / 0.04 = 187 500 Pa.',
      },
      {
        label: 'b',
        text: '**Explain** how the design of the prosthesis takes account of pressure when:\n1. Creating contact with the ground\n2. Connecting to the rhinoceros\'s limb',
        marks: 5,
        ph: 'Ground contact: contact area of the prosthesis with the ground should be the same as the natural rhino foot. Large area → low pressure → rhino foot will not sink into soft ground. P = F/A; large A → small P. Limb connection: the prosthesis must connect to the rhino\'s remaining limb stump over as large an area as possible. Distributing the 7500 N force over a large area → lower pressure on the skin and tissue → comfortable, reduces risk of pressure sores and injury.',
      },
    ],
  },
]
