import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2021-v1/'

export const paperMeta = {
  id: 'physics-may-2021-v1',
  subject: 'Physics',
  session: 'May',
  year: 2021,
  totalMarks: 98,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Electromagnetic Waves: Maritime Rescue Radio (8 marks) Criterion A
  // V1: MAYDAY radio calls across the English Channel; distance = 9 km
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Electromagnetic Waves — Maritime Radio',
    marks: 8,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'em-spectrum', topics: ['radio waves', 'electromagnetic spectrum', 'speed of waves', 'diffraction'], level: 'proficient' },
    stem: 'Radio waves transformed maritime communication. Before radio, ships in distress had no way to call for help. The first distress call — the MAYDAY signal — was transmitted using radio waves across the English Channel. The ability to send radio signals allowed ships in danger to communicate their position and receive rescue.',
    figImages: [`${P}q1-radio-rescue.png`],
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct option to complete the statements below.\n\n- Radio waves travel **[? → faster than / slower than / at the same speed as]** light waves in a vacuum.\n- Radio waves have **[? → a longer wavelength than / a shorter wavelength than / the same wavelength as]** light waves.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetOptions: ['faster than', 'slower than', 'at the same speed as', 'a longer wavelength than', 'a shorter wavelength than', 'the same wavelength as'],
        widgetItems: ['Speed comparison', 'Wavelength comparison'],
        ph: 'at the same speed as | a longer wavelength than',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'One advantage of using radio waves for maritime rescue is that the waves can travel around the curve of the Earth\'s surface. A simulation shows radio waves bending around a coastal headland to reach a ship hidden from direct line of sight.\n\n**Select** the phenomenon shown in the simulation.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Reflection', 'B. Diffraction', 'C. Refraction', 'D. Interference'],
        ph: 'B',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'A rescue station transmits a MAYDAY confirmation signal across the English Channel, a distance of **9 km**. **Calculate** the time taken for the radio signal to travel 9 km. You should take the speed of radio waves in air to be **3.0 × 10⁸ m s⁻¹**. Give your answer in **scientific notation**.',
        marks: 3,
        ph: 'Convert: 9 km = 9000 m\nt = d/v = 9000 / (3.0 × 10⁸)\n= **3.0 × 10⁻⁵ s**',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Suggest** two reasons why communication using radio waves was such an important discovery for maritime safety.',
        marks: 2,
        ph: 'Any two of:\n- Ships at sea can send distress calls without physical connection to shore\n- Communication over large distances previously impossible without cables\n- Real-time communication allows faster rescue response\n- No physical infrastructure needed at sea\n- Led to development of radar, sonar, navigation systems',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Radioactivity: Iodine-131 in Thyroid Treatment (9 marks) Criterion A
  // V1: Iodine-131 isotope for thyroid cancer; half-life read from graph ≈ 8 days
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Physics — Iodine-131',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'radioactive decay', 'half-life', 'nuclear medicine'], level: 'proficient' },
    stem: 'Iodine is a chemical element essential for thyroid function. It has an atomic number of 53. The unstable iodine-131 isotope has a mass number of 131 and decays by emitting beta and gamma radiation. It is used in medicine to treat thyroid cancer.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct option to complete the following sentences about an atom of iodine-131:\n\n- 53 is the **[Select]** in the nucleus.\n- 131 is the **[Select]** in the nucleus.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetOptions: ['atomic number', 'mass number', 'number of protons', 'number of neutrons', 'number of nucleons'],
        widgetItems: ['53 is the', '131 is the'],
        ph: 'number of protons (atomic number) | mass number (number of nucleons)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The three images below show the path of beta radiation emitted by iodine-131 moving through an electric field.\n\n**Select** the image that shows the path of beta radiation emitted by iodine-131. **Justify** your answer.',
        marks: 3,
        figImages: [`${P}q2b-beta-field.png`],
        ph: 'Select: image C (beta particles deflected towards the positive plate).\nJustification: Beta particles are electrons, which are negatively charged. Negatively charged particles are attracted to the positive plate, so they are deflected towards the positive plate in an electric field.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The graph below shows how the mass of iodine-131 changes with time. Use the graph to **determine** the half-life of iodine-131.',
        marks: 2,
        figImages: [`${P}q2c-halflife.png`],
        ph: 'From the graph: start with initial mass. Find the time when mass halves.\nHalf-life ≈ **8 days** (accept 7–9 days from graph)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'Iodine-131 is used in medicine either as a radioactive drug inside the body or as an external source of radiation.\n\n**Suggest** why the half-life and the combination of beta and gamma emissions of iodine-131 make it useful to treat thyroid cancer.',
        marks: 2,
        ph: 'Half-life: The half-life (≈8 days) is short enough to limit long-term radioactive exposure in the body, but long enough to allow treatment of the thyroid to be effective.\n\nBeta/gamma emissions: Beta radiation can travel short distances in tissue and directly destroy cancer cells in the thyroid. Gamma radiation penetrates tissue and can be detected externally to image the thyroid.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Kinetic Energy & Regenerative Braking: Electric Sports Car (11 marks) Criterion A
  // V1: Electric sports car; mass = 1800 kg; speed = 24 m/s; braking distance = 32 m
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power — Electric Car',
    marks: 11,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'deceleration', 'energy transformation', 'electric vehicles'], level: 'proficient' },
    stem: 'Energy transformations occur in moving vehicles. Electric cars use electrical energy stored in batteries to provide their kinetic energy. These cars are designed to be more energy efficient and environmentally friendly than petrol cars.',
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the kinetic energy of a **1800 kg** electric car moving at **24 m s⁻¹**.',
        marks: 2,
        ph: 'KE = ½mv²\n= ½ × 1800 × 24²\n= ½ × 1800 × 576\n= 900 × 576\n= **518 400 J** (≈ 518 kJ)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'When the driver of the car hits the brakes, the car slows down to a complete stop. The braking distance is **32 m**.\n\n**Calculate** the average deceleration of the car during braking. Give your answer to **3 significant figures**.',
        marks: 4,
        ph: 'Use v² = u² + 2as\n0 = 24² + 2 × a × 32\n0 = 576 + 64a\n64a = −576\na = −576/64 = **−9.00 m s⁻²** (to 3 s.f.)',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'In conventional braking, the brakes slow down the car by transforming all the kinetic energy of the car into heat energy.\n\n**State** why the heat energy produced during braking is considered to be wasted energy.',
        marks: 1,
        ph: 'Heat energy cannot be used by the car to perform useful work — it cannot be converted back to kinetic energy to drive the car forward.',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'Regenerative brakes are a feature of electric cars. During regenerative braking, some of the energy wasted as heat is used to recharge the car\'s battery instead.\n\nThe diagram below shows the energy transformations that take place in an electric car during braking. **Select** the correct energy forms to complete the diagram.\n\nKinetic energy → **[?]** → Electrical energy → **[?]** → Thermal energy',
        marks: 1,
        figImages: [`${P}q3d-energy-diagram.png`],
        widget: 'energy_chain',
        ph: 'Kinetic energy → Kinetic energy (mechanical) → Electrical energy → Chemical potential energy → Thermal energy',
        level: 'foundation',
      },
      {
        label: 'e',
        text: '**Suggest** why regenerative braking helps the electric car to travel further on one charge than conventional braking.',
        marks: 1,
        ph: 'During regenerative braking, kinetic energy is converted to electrical energy and stored as chemical potential energy in the battery. This stored energy can be used to drive the car further, increasing the range of the car.',
        level: 'developing',
      },
      {
        label: 'f',
        text: '**Outline** why reducing the energy consumed by cars is an issue of global significance.',
        marks: 2,
        ph: 'Burning fossil fuels for transport produces CO₂, a greenhouse gas contributing to global warming and climate change. Reducing energy consumption lowers CO₂ emissions, addressing climate change — a problem affecting all countries and future generations worldwide.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Galileo's Ramp: Marble Rolling Experiment (18 marks) Criterion B/C
  // V1: Marble on ramp; table data has different time values
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Forces & Motion — Ramp Experiment',
    marks: 18,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['acceleration', 'distance-time graphs', 'velocity', 'investigation design'], level: 'proficient' },
    stem: 'The famous scientist Galileo was fascinated by the motion of accelerating objects. He studied the motion of a ball rolling down a ramp. He was interested in the relationship between distance and time. By setting the ramp at a small angle, the motion would happen slowly enough for him to take measurements.',
    figImages: [`${P}q4-galileo.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that would be tested by this investigation.',
        marks: 1,
        ph: 'How does the distance a ball rolls down the ramp affect the time taken?',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Identify** the variables for this investigation. The possible variables are: mass of ball, time taken, size of ball, distance travelled by ball, angle of slope.',
        marks: 3,
        ph: 'Independent variable: distance travelled by ball\nDependent variable: time taken\nControl variables: mass of ball, size of ball, angle of slope',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The student starts to write the following hypothesis:\n\n*"As the distance the ball rolls increases, the time taken will also increase but the relationship will not be proportional. The ball will have a constant acceleration as it moves down the slope."*\n\n**Outline** why the ball accelerates at a constant rate as it moves down the slope by referring to relevant scientific principles.',
        marks: 2,
        ph: 'The ball accelerates because a net force acts on it — the component of gravity (weight) along the slope. By Newton\'s second law (F = ma), a constant net force on a constant mass produces constant acceleration. Since both gravitational force and ball mass are constant, acceleration is constant.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'For a ball moving with constant acceleration, the distance (s) the ball moves and the time taken (t) are related by the formula:\n\n**s = ½at²** (when initial velocity = 0)\n\nUse the formula to **select** the results that you would expect to be shown by this investigation. **Justify** your answer.\n\nA. s vs t² — concave curve upwards\nB. s vs t² — straight line through origin\nC. s vs t — straight line through origin\nD. s vs t — decreasing curve',
        marks: 3,
        figImages: [`${P}q4d-graphs.png`],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select: B (straight line through origin on s vs t² graph).\nJustification:\n- s = ½at² means s ∝ t² (s directly proportional to t²)\n- A graph of s vs t² should be a straight line through the origin\n- Gradient of this line equals ½a',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Another student performs a similar investigation and obtains the results shown in the table below:\n\n| Distance / m | Time / s | (Time)² / **?** |\n|-------------|----------|------------------|\n| 0.25 | 0.95 | 0.90 |\n| 0.50 | 1.33 | 1.77 |\n| 0.75 | 1.62 | 2.62 |\n| 1.00 | 1.92 | 3.69 |\n| 1.25 | 2.14 | **?** |\n\nThe table is incomplete. **Label** the missing unit for the column (Time)² and **calculate** the missing value.',
        marks: 3,
        figImages: [`${P}q4e-table.png`],
        ph: 'Unit: s² (seconds squared)\nMissing value: 2.14² = 4.5796 ≈ **4.58** s²',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'In Galileo\'s original investigation, the measuring equipment available was quite basic. One piece of equipment that Galileo used to measure time was a water clock. The water clock provided a relative measure of time based on the volume of water collected in a beaker as the ball rolled down the ramp.\n\n**Suggest** why using a water clock to measure time would have made it hard for Galileo to share his results with other scientists.',
        marks: 1,
        ph: 'A water clock does not measure time in standard units — different water clocks produce different volumes for the same time interval. Without a universal standard unit, other scientists cannot replicate or compare results.',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'In modern times we have much more advanced equipment available. **State** the name of the measuring equipment that you would use to measure time if you were repeating Galileo\'s investigation.',
        marks: 1,
        ph: 'A stopwatch (or stopclock, digital timer)',
        level: 'foundation',
      },
      {
        label: 'h',
        text: '**State** a follow-up investigation into another factor that can affect the motion of a ball on a ramp. The dependent variable is time.\n\nState the new independent variable and write a research question that this new investigation would test.',
        marks: 4,
        ph: 'New independent variable: angle of the slope (or mass of ball, surface material of ramp)\n\nResearch question: How does the angle of the slope affect the time taken for a ball to roll a fixed distance?\n\nControl variables: mass of ball, size of ball, distance (if angle is IV).',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Air Resistance: Coffee Filter Investigation (14 marks) Criterion B
  // V1: Coffee filter papers dropped from a fixed height; different scenario, same structure
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Forces & Motion — Air Resistance',
    marks: 14,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['air resistance', 'surface area', 'falling objects', 'investigation design'], level: 'advanced' },
    stem: 'One of Galileo\'s most important discoveries was that objects fall at the same rate if air resistance is not significant. In real life, air resistance significantly affects the rate at which objects fall. An MYP student is interested in the effect that the number of stacked coffee filters (which changes the mass but not the surface area) has on the time taken to fall from a fixed height.',
    figImages: [`${P}q5-coffee-filters.png`],
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a hypothesis for the student\'s investigation. Your explanation should refer to forces and particle theory.',
        marks: 3,
        ph: 'If the mass of stacked coffee filters increases (more filters), then the time taken to fall will decrease (they fall faster).\nBecause: A greater weight (downward force) acts on more filters. The upward air resistance force stays similar (same surface area). The greater net downward force causes greater acceleration. More filters also have greater inertia — two effects oppose each other, but net effect is faster fall. Air resistance: same number of collisions with air particles per unit area.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: '**Design** an investigation that the student could use to test the hypothesis in part (a).\n\nIn your plan you should include:\n- Your independent and dependent variables\n- Two control variables with justification\n- A list of the equipment you will use\n- An explanation of how you will collect sufficient data\n- Details of how you will make sure your method is safe',
        marks: 11,
        ph: 'Variables:\n- IV: number of stacked coffee filters (1–5)\n- DV: time taken to fall (from fixed height)\n- CV1: height of drop — different heights change total fall time regardless of filter mass\n- CV2: orientation of filters — different orientations change surface area and air resistance\n\nEquipment: set of identical coffee filters, stopwatch, metre ruler or tape measure, flat surface to drop from, chair/table as platform.\n\nMethod:\n1. Stack 1, 2, 3, 4, 5 filters\n2. Drop each stack from same height (e.g. 2 m)\n3. Time each drop with stopwatch\n4. Repeat 3 times per stack, calculate mean\n5. Record in table\n\nSafety: Use stable platform; keep drop zone clear.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Optics: Camera Lens Focal Length (15 marks) Criterion C
  // V1: Camera lens with f ≈ 10 cm; Q6a dₒ = 25 cm → dᵢ = 16.7 cm
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Light & Optics — Camera Lens',
    marks: 15,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['convex lens', 'focal length', 'image distance', 'data processing'], level: 'proficient' },
    stem: 'Camera lenses use convex lenses to focus light from a scene onto the camera sensor. With a convex lens, light from an object converges to form a sharp image. The focal length of a lens (f) is the distance between the centre of the lens and the focus point. It is constant for a particular lens.\n\nThe formula relating object distance (dₒ) and image distance (dᵢ) is: **1/f = 1/dₒ + 1/dᵢ**',
    figImages: [`${P}q6-lens-setup.png`],
    tasks: [
      {
        label: 'a',
        text: 'A simulation has a distance dₒ of **25 cm**. Change the position of the movable screen to **determine** the distance dᵢ.\n\nThe simulation shows the image is sharp when the screen is at the **41.7 cm** mark on the ruler. Calculate dᵢ.',
        marks: 3,
        ph: 'The lens is positioned at 25 cm from the object.\ndᵢ = 41.7 − 25 = **16.7 cm**\n(Accept 41.7 ± 0.1 for the reading; dᵢ = 16.7 ± 0.1 cm)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'A student collects more data for different values of dₒ. Their raw notebook data is shown below:\n\n- 15.0 cm — 30.0 centimetres\n- 20.0 cm — 20.0 cm\n- 40.0 cm — 0.180 m\n- 50.0 cm — 12.5 cm\n\n**Organise and present** the student\'s data in a table of results. Include your result from part (a).',
        marks: 4,
        ph: '| dₒ / cm | dᵢ / cm |\n|---------|--------|\n| 15.0 | 30.0 |\n| 20.0 | 20.0 |\n| 25.0 | 16.7 |\n| 40.0 | 18.0 |\n| 50.0 | 12.5 |\n\nMarks: correct headings with symbols and units; data in ascending order of dₒ; all values consistent decimal places.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Another student in the same class processes the data. Their table of processed data is shown below:\n\n| 1/dₒ / m⁻¹ | 1/dᵢ / m⁻¹ | 1/f / m⁻¹ | f / [?] |\n|------------|------------|------------|----------|\n| 6.67 | 3.33 | 10.00 | 0.100 |\n| 5.00 | 5.00 | 10.00 | 0.100 |\n| 4.00 | 5.99 | 9.99 | 0.100 |\n| 3.33 | **?** | **?** | **?** |\n| 2.50 | 5.56 | 8.06 | 0.124 |\n| 2.00 | 8.00 | 10.00 | 0.100 |\n\n**Label** the incomplete column header and **calculate** the missing processed data values.',
        marks: 3,
        ph: 'Column header: f / m (metres)\nMissing 1/dᵢ: 1/f − 1/dₒ = 10.00 − 3.33 = **6.67** m⁻¹\nMissing 1/f: 3.33 + 6.67 = **10.00** m⁻¹\nMissing f: 1/10.00 = **0.100** m',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'One of the calculated f values in the table appears to be anomalous. **Identify** this data point.',
        marks: 1,
        ph: 'The anomalous value is **0.124 m** (corresponding to 1/dₒ = 2.50 m⁻¹, dₒ = 40 cm). It is noticeably larger than the other values which cluster around 0.100 m.',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'A graph of 1/dᵢ against 1/dₒ can be used to find the focal length of the lens. The line of best fit will have a y-intercept of 1/f. The four graphs below show different lines of best fit for the data points.\n\n**Select** the most appropriate graph. **Justify** your answer.',
        marks: 2,
        figImages: [`${P}q6e-graphs.png`],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select: C\nJustification: Graph C has a straight line of best fit that does not include the anomalous data point, with roughly equal numbers of points above and below the line. The equation predicts a linear relationship.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'Use your answer to part (e) to **calculate** the focal length (f) of the lens.',
        marks: 2,
        ph: 'Read y-intercept from Graph C: y-intercept ≈ 10.0 m⁻¹ (accept 10.0 ± 0.1)\nf = 1 / 10.0 = **0.100 m** (accept 0.100 ± 0.001 m)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Helicopter: Forces & Evaluation (9 marks) Criterion A/D
  // V1: Helicopter delivering supplies to a remote community
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Motion — Helicopter',
    marks: 9,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['balanced forces', 'unbalanced forces', 'Newton\'s laws', 'helicopter technology'], level: 'proficient' },
    stem: 'A helicopter is an aircraft that can fly without wings, using rotating blades (rotors) to generate lift. Helicopters can fly in any direction and hover in place. They are used for many purposes including military operations, medical evacuation, search and rescue, and delivering supplies to remote communities.',
    figImages: [`${P}q7-helicopter.png`],
    tasks: [
      {
        label: 'a',
        text: 'The diagrams below show the forces acting on a moving helicopter. T is the total thrust (lift) generated by the rotors and W is the weight of the helicopter. **Select** the diagram showing a helicopter **taking off**. **Justify** your answer.',
        marks: 2,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C'],
        ph: 'Select: A (diagram showing T > W — upward thrust is greater than downward weight).\nJustification: For the helicopter to take off (accelerate upwards), the forces must be unbalanced — thrust must exceed weight. This gives a net upward force, causing upward acceleration.',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Many remote communities lack adequate road infrastructure, increasing the time required to deliver medical supplies and emergency equipment. Scientists have proposed that helicopters could significantly improve access to urgent supplies in these areas. Some light helicopters can carry up to 500 kg of payload and can travel over 600 km.\n\n**Discuss and evaluate** the advantages and disadvantages of using helicopters to deliver urgent medical supplies to remote communities.',
        marks: 7,
        ph: 'Advantages:\n- Can bypass road infrastructure → reach remote areas inaccessible by road\n- Faster delivery of time-sensitive medical supplies (e.g. blood, vaccines, antivenom)\n- Can land in small clearings without need for airstrips\n- Versatile — can also perform evacuations if needed\n\nDisadvantages:\n- High operating cost (fuel, maintenance, trained pilots)\n- Weather-dependent — cannot fly safely in extreme conditions\n- Limited payload compared to trucks\n- High carbon footprint per kg delivered compared to road vehicles\n- Noise pollution, especially near wildlife or communities\n\nConclusion: For truly remote communities where road infrastructure is absent or seasonal, helicopters offer substantial advantages. However, high costs mean they are best used for urgent/emergency deliveries rather than routine supply runs.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Drones in Disaster Relief: Evaluation (14 marks) Criterion D
  // V1: Uses of drones in disaster relief and emergency response
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society — Drones in Disaster Relief',
    marks: 14,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['drone technology', 'disaster relief', 'social implications', 'science and society'], level: 'advanced' },
    stem: 'A video outlines the use of drones in disaster relief, including delivering supplies to flood-affected areas, searching for survivors with thermal cameras, assessing structural damage to buildings, and mapping terrain after earthquakes. Drones are increasingly deployed alongside human rescue teams.',
    figImages: [`${P}q8-drone-disaster.png`],
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** the use of drones in disaster relief and emergency response. In your answer:\n\n- Describe at least **two uses of drones in disaster relief**, and explain how each use benefits emergency response science\n- Discuss the **social implications** of drone technology in disaster situations (positive AND negative), with justification\n- Discuss the **political implications** of widespread drone deployment in emergencies, with further explanation',
        marks: 14,
        ph: 'Disaster relief uses:\n1. Search and rescue — drones with thermal cameras can scan large disaster zones quickly, detecting heat signatures from survivors buried under rubble without risking additional lives. Provides more systematic coverage than ground teams.\n2. Supply delivery — drones can deliver emergency supplies (medicine, water, food) to communities cut off by floods or landslides where road access is impossible. Faster than waiting for infrastructure restoration.\n3. Damage assessment — drones can safely map structural damage and landslide extent, providing data for engineering assessment and evacuation planning.\n\nSocial implications:\nPositive: Faster location of survivors saves lives; reduced risk to rescue workers in unstable environments; mental health support — seeing aerial activity reassures survivors.\nNegative: Privacy — drones with cameras in people\'s homes and private areas during emergencies. Dependence on technology that can fail in extreme conditions (heat, rain). Communities may fear autonomous machines; potential for misuse.\n\nPolitical implications:\nPositive: Drones allow faster international aid response after disasters; improve government preparedness and response metrics; reduce cost of disaster relief.\nNegative: Drone flights in national airspace during crises require international clearance. Military drones vs civilian drones — risk of confusion. Government surveillance of affected populations raises human rights concerns. Insurance and liability questions when drones crash during relief operations.',
        level: 'advanced',
      },
    ],
  },

]
