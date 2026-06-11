import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2021/'

export const paperMeta = {
  id: 'physics-may-2021',
  subject: 'Physics',
  session: 'May',
  year: 2021,
  totalMarks: 98,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Electromagnetic Waves: Radio Communication (8 marks) Criterion A/D
  // Context: Marconi's first radio transmission across open sea (1897)
  // Numbers changed: distance 6 km → 7 km; time = 7000/(3×10⁸) = 2.33×10⁻⁵ s
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Electromagnetic Waves',
    marks: 8,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'em-spectrum', topics: ['radio waves', 'electromagnetic spectrum', 'speed of waves', 'diffraction'], level: 'proficient' },
    stem: 'At the end of the 19th century, physicists considered radio waves to be like an invisible form of light. In 1897, Marconi sent the first radio message across open sea — a message saying "are you ready" was transmitted over the sea.',
    figImages: [`${P}q1-radio.png`],
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
        text: 'One advantage of sending messages using radio waves is that the waves can bend around obstacles. An animation shows waves bending around a hill to reach a receiver behind it.\n\n**Select** the phenomenon shown in the animation.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Reflection', 'B. Diffraction', 'C. Refraction', 'D. Interference'],
        ph: 'B',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'Marconi sent a radio message over a distance of **7 km**. **Calculate** the time taken for Marconi\'s message to travel 7 km. You should take the speed of radio waves in air to be **3.0 × 10⁸ m s⁻¹**. Give your answer in **scientific notation**.',
        marks: 3,
        ph: 'Convert: 7 km = 7000 m\nt = d/v = 7000 / (3.0 × 10⁸)\n= 2.333... × 10⁻⁵ s\n≈ **2.3 × 10⁻⁵ s**',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Suggest** two reasons why communication using radio waves was such an important discovery.',
        marks: 2,
        ph: 'Any two of:\n- Able to communicate while moving (e.g. boats, aircraft)\n- Communication over larger distances or with other countries / previously inaccessible locations\n- High speed communication is possible\n- No failures of wired connections; saves material and money required for wired connections\n- Led to the development of new technologies (e.g. television, mobile phones, radar)',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Radioactivity & Nuclear Medicine (9 marks) Criterion A
  // Context: Copper-67 isotope used in cancer treatment
  // Numbers changed: half-life reading from graph ~62 h (from 60 h)
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Physics',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'radioactive decay', 'half-life', 'nuclear medicine'], level: 'proficient' },
    stem: 'Copper is a chemical element used as a conductor of heat and electricity. It has an atomic number of 29 and a mass number of 63. Copper has many isotopes, some stable and some unstable. The unstable copper-67 isotope decays by emitting beta and gamma radiation.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct option to complete the following sentences about an atom of copper:\n\n- 29 is the **[Select]** in the nucleus.\n- 63 is the **[Select]** in the nucleus.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetOptions: ['atomic number', 'mass number', 'number of protons', 'number of neutrons', 'number of nucleons'],
        widgetItems: ['29 is the', '63 is the'],
        ph: 'number of protons (atomic number) | mass number (number of nucleons)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The three images below show the path of beta radiation emitted by copper-67 moving through an electric field.\n\n**Select** the image that shows the path of beta radiation emitted by copper-67. **Justify** your answer.',
        marks: 3,
        figImages: [`${P}q2b-beta-field.png`],
        ph: 'Select: image C (beta particles deflected towards the positive plate).\nJustification: Beta particles are electrons, which are negatively charged. Negatively charged particles are attracted to the positive plate, so they are deflected towards the positive plate in an electric field.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The graph below shows how the mass of copper-67 changes with time. Use the graph to **determine** the half-life of copper-67.',
        marks: 2,
        figImages: [`${P}q2c-halflife.png`],
        ph: 'From the graph: start with initial mass (e.g. 100 g). Find the time when it halves to 50 g.\nHalf-life = approximately **62 h** (accept any value within range 60 ± 2 h)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The copper-67 isotope is used in medicine either as a radioactive drug inside the body or as an external source of radiation.\n\n**Suggest** why the half-life and the combination of beta and gamma emissions of copper-67 make it useful to treat medical conditions such as cancer.',
        marks: 2,
        ph: 'Half-life: The half-life (≈60 h) is short enough to limit long-term radioactive exposure in the body, but long enough to allow treatment to be effective.\n\nBeta/gamma emissions: Beta and gamma radiation can penetrate tissue and kill cancer cells or tumours directly. Both types cause ionisation that damages or destroys cancer cells.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Kinetic Energy & Hybrid Cars (11 marks) Criterion A
  // Context: Energy transformations in hybrid cars; regenerative braking
  // Numbers changed: car mass = 1600 kg (from 1500 kg); speed = 22 m/s (from 25 m/s); braking distance = 25 m
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power',
    marks: 11,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'deceleration', 'energy transformation', 'hybrid vehicles'], level: 'proficient' },
    stem: 'Energy transformations occur in moving cars. Hybrid cars use a combination of fuel and electrical power to provide their kinetic energy. These kinds of cars are designed to be more fuel efficient.',
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the kinetic energy of a **1600 kg** car moving at **22 m s⁻¹**.',
        marks: 2,
        ph: 'KE = ½mv²\n= ½ × 1600 × 22²\n= ½ × 1600 × 484\n= 800 × 484\n= **387 200 J** (≈ 387 kJ)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'When the driver of the car hits the brakes, the car slows down to a complete stop. The braking distance is **25 m**.\n\n**Calculate** the average deceleration of the car during braking. Give your answer to **3 significant figures**.',
        marks: 4,
        ph: 'Use v² = u² + 2as\n0 = 22² + 2 × a × 25\n0 = 484 + 50a\n50a = −484\na = −484/50 = **−9.68 m s⁻²** (to 3 s.f.)\n\nOr: using KE = work done → ½mv² = F × d → F = KE/d → a = F/m',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'In petrol cars the brakes slow down the car by transforming all the kinetic energy of the car into heat energy.\n\n**State** why the heat energy produced during braking is considered to be wasted energy.',
        marks: 1,
        ph: 'Heat energy cannot be used by the car to perform useful work (it cannot be converted back to kinetic energy to drive the car forward).',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'Regenerative brakes are a feature of hybrid cars. During regenerative braking, some of the energy wasted as heat is used to recharge the car\'s battery instead.\n\nThe diagram below shows the energy transformations that would take place in a hybrid car during braking. **Select** the correct energy forms to complete the diagram.\n\nKinetic energy → **[?]** → Electrical energy → **[?]** → Thermal energy',
        marks: 1,
        figImages: [`${P}q3d-energy-diagram.png`],
        widget: 'energy_chain',
        ph: 'Kinetic energy → Kinetic energy (or mechanical) → Electrical energy → Chemical potential energy → Thermal energy\n(All correct for 1 mark)',
        level: 'foundation',
      },
      {
        label: 'e',
        text: '**Suggest** why regenerative braking helps the hybrid car to use less fuel than a petrol car.',
        marks: 1,
        ph: 'During regenerative braking, the kinetic energy of the car is converted to electrical energy which is stored as chemical potential energy in the battery. This stored energy can then be used to drive the car, reducing the amount of fuel needed.',
        level: 'developing',
      },
      {
        label: 'f',
        text: '**Outline** why reducing the amount of fuel required by cars is an issue of global significance.',
        marks: 2,
        ph: 'Burning fuel produces carbon dioxide (CO₂), which is a greenhouse gas that contributes to global warming and climate change. Reducing fuel consumption reduces CO₂ emissions, addressing climate change, which affects all countries and future generations worldwide.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Galileo's Ramp Experiment: Motion (18 marks) Criterion B/C
  // Context: Galileo's investigation into motion of a ball rolling down a ramp
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Forces & Motion',
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
        ph: 'How does the distance a ball rolls affect the time taken? (Or: "How does the time taken change as the distance the ball rolls increases?")',
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
        ph: 'The ball accelerates because there is a net force acting on it — the component of gravity (weight) along the slope. By Newton\'s second law (F = ma), a constant force on a constant mass produces a constant acceleration. Since the gravitational force and the mass of the ball are both constant, the acceleration is constant.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'For a ball moving with constant acceleration, the distance (s) the ball moves and the time taken (t) are related by the formula:\n\n**s = ½at²** (when initial velocity = 0)\n\nUse the second formula to **select** the results that you would expect to be shown by this investigation. **Justify** your answer.\n\nA. s vs t² — concave curve upwards\nB. s vs t² — straight line through origin\nC. s vs t — straight line through origin\nD. s vs t — decreasing curve',
        marks: 3,
        figImages: [`${P}q4d-graphs.png`],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select: B (straight line through origin on s vs t² graph).\nJustification:\n- s = ½at² means s ∝ t² (s is directly proportional to t²)\n- A graph of s vs t² should be a straight line through the origin\n- The gradient of this line equals ½a',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Another student performs a similar investigation and obtains the results shown in the table below:\n\n| Distance / m | Time / s | (Time)² / **?** |\n|-------------|----------|------------------|\n| 0.25 | 1.02 | 1.04 |\n| 0.50 | 1.39 | 1.93 |\n| 0.75 | 1.75 | 3.06 |\n| 1.00 | 1.98 | 3.92 |\n| 1.25 | 2.19 | **?** |\n\nThe table is incomplete. **Label** the missing unit for the column (Time)² and **calculate** the missing value.',
        marks: 3,
        figImages: [`${P}q4e-table.png`],
        ph: 'Unit: s² (seconds squared)\nMissing value: 2.19² = 4.7961 ≈ **4.80** s²\n(Accept 4.7961 or 4.8 or 4.796; award 2 marks for 4.79 if rounded to 2 d.p.)',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'In Galileo\'s original investigation, the measuring equipment available was quite basic. One piece of equipment that Galileo used to measure time was a water clock. The water clock provided a relative measure of time based on the volume of water collected in a beaker as the ball rolled down the ramp.\n\n**Suggest** why using a water clock to measure time would have made it hard for Galileo to share his results with other scientists.',
        marks: 1,
        ph: 'A water clock does not measure time in standard units — different water clocks would produce different volumes for the same time interval. Without a universal standard unit (like seconds), other scientists cannot replicate or compare results. The water clock measurement only makes sense if other scientists use the same clock.',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'In modern times we have much more advanced equipment available. **State** the name of the measuring equipment that you would use to measure time if you were repeating Galileo\'s investigation.',
        marks: 1,
        ph: 'A stopwatch (or stopclock, chronometer, digital timer)',
        level: 'foundation',
      },
      {
        label: 'h',
        text: '**State** a follow-up investigation into another factor that can affect the motion of a ball on a ramp. The dependent variable is time.\n\nState the new independent variable and write a research question that this new investigation would test.',
        marks: 4,
        ph: 'New independent variable: angle of the slope (or mass of ball, size of ball, surface of ramp)\n\nResearch question: How does the angle of the slope affect the time taken for a ball to roll a fixed distance?\n\nControl variables: mass of ball, size of ball (do not use distance as CV if it is the DV, and do not reuse the new IV)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Parachute: Air Resistance Investigation (14 marks) Criterion B
  // Context: Objects falling — air resistance and surface area
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Forces & Motion',
    marks: 14,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['air resistance', 'surface area', 'falling objects', 'investigation design'], level: 'advanced' },
    stem: 'One of Galileo\'s most important discoveries was that objects would fall at the same rate if they were dropped from the same height — provided air resistance was not significant. In real life, air resistance has a significant effect on the rate at which objects fall to the ground. An MYP student is interested in the effect that surface area has on the time taken for an object to fall to the ground.',
    figImages: [`${P}q5-parachute.png`],
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a hypothesis for the student\'s investigation. Your explanation should refer to forces and particle theory.',
        marks: 3,
        ph: 'If the surface area of the parachute increases, then the time taken to fall will increase (it will fall more slowly).\nBecause: A larger surface area means more collisions per second with air particles, which increases the air resistance force on the parachute. The greater air resistance reduces the net downward force, so the parachute decelerates and falls more slowly, taking longer to reach the ground.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: '**Design** an investigation that the student could use to test the hypothesis in part (a).\n\nIn your plan you should include:\n- Your independent and dependent variables\n- Two control variables with justification\n- A list of the equipment you will use\n- An explanation of how you will collect sufficient data\n- Details of how you will make sure your method is safe',
        marks: 11,
        ph: 'Variables:\n- IV: surface area of the parachute\n- DV: time taken to fall (from a fixed height)\n- CV1: mass of the parachute load — a heavier load would fall faster regardless of area\n- CV2: height of drop — a different height changes the total fall time\n\nEquipment: ruler or tape measure (to measure surface area and height), stopwatch (to measure time), metre ruler or plumb line, scissors, material for parachutes of different sizes.\n\nMethod:\n1. Cut 5 parachutes of different surface areas (e.g. 100, 200, 300, 400, 500 cm²)\n2. Attach the same load (mass) to each parachute\n3. Drop each parachute from the same height (e.g. 2 m) and time the fall\n4. Repeat each measurement 3 times and calculate the mean\n5. Record results in a table\n\nSafety: Stand on a stable platform when dropping from height; ensure the drop zone is clear.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Optics: Convex Lens & Focal Length (15 marks) Criterion C
  // Context: Finding the focal length of a convex lens using 1/f = 1/do + 1/di
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Light & Optics',
    marks: 15,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['convex lens', 'focal length', 'image distance', 'data processing'], level: 'proficient' },
    stem: 'Galileo is also famous for his work on the development of the telescope. Galileo used a combination of lenses to allow an observer to see far away objects clearly.\n\nLenses work using the refraction of light. One type of lens is a convex lens. With this lens, light waves coming from an object meet at a point known as the focus (F). The focal length of a lens (f) is defined as the distance between the centre of the lens and its focus. It is a constant for a particular lens; different lenses have different focal lengths.\n\nThe formula relating object distance (dₒ) and image distance (dᵢ) is: **1/f = 1/dₒ + 1/dᵢ**',
    figImages: [`${P}q6-lens-setup.png`],
    tasks: [
      {
        label: 'a',
        text: 'A simulation has a distance dₒ of **30 cm**. Change the position of the movable screen to **determine** the distance dᵢ.\n\nThe simulation shows the image is sharp when the screen is at the **42.8 cm** mark on the ruler. Calculate dᵢ.',
        marks: 3,
        ph: 'The lens is positioned at 30 cm (dₒ = 30 cm means the object is 30 cm from the lens).\nThe image is sharp at the 42.8 cm mark.\ndᵢ = 42.8 − 30 = **12.8 cm**\n(Accept 42.8 ± 0.1 for the reading; dᵢ = 12.8 ± 0.1 cm)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'A student collects more data for different values of dₒ. Their raw notebook data is shown below:\n\n- 20.0 cm — 16.4 centimetres\n- 10.0 cm — 0.90 m\n- 40.0 cm — 11.40 cm\n- 60.0 cm — 11.1 cm\n\n**Organise and present** the student\'s data in a table of results. Include your result from part (a).',
        marks: 4,
        ph: '| dₒ / cm | dᵢ / cm |\n|---------|--------|\n| 10.0 | 90.0 |\n| 20.0 | 16.4 |\n| 30.0 | 12.8 |\n| 40.0 | 11.40 |\n| 60.0 | 11.1 |\n\nMarks: column headings with symbols (dₒ, dᵢ) and units in headers; data in ascending order of dₒ; all data complete; dₒ to 1 d.p. (or nearest cm); all dᵢ to consistent number of d.p.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Another student in the same class processes the data. Their table of processed data is shown below:\n\n| 1/dₒ / m⁻¹ | 1/dᵢ / m⁻¹ | 1/f / m⁻¹ | f / [?] |\n|------------|------------|------------|----------|\n| 5.00 | 0.95 | 5.95 | 0.168 |\n| 3.33 | 2.63 | 5.96 | 0.168 |\n| 2.50 | 3.33 | 5.83 | 0.171 |\n| 2.00 | 3.87 | **?** | **?** |\n| 1.67 | 3.67 | 5.34 | 0.187 |\n| 1.43 | 4.35 | 5.78 | 0.173 |\n\n**Label** the incomplete column header and **calculate** the missing processed data values.',
        marks: 3,
        ph: 'Column header: f / m (metres)\nMissing 1/f value: 1/dₒ + 1/dᵢ = 2.00 + 3.87 = **5.87** m⁻¹\nMissing f value: f = 1/5.87 = **0.170** m\n(Accept 0.170 or 0.17 m)',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'One of the calculated f values in the table appears to be anomalous. **Identify** this data point.',
        marks: 1,
        ph: 'The anomalous value is **0.187 m** (corresponding to 1/dₒ = 1.67 m⁻¹). It is noticeably different from the other values which cluster around 0.168–0.173 m.',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'A graph of 1/dᵢ against 1/dₒ can be used to find the focal length of the lens. The line of best fit will have a y-intercept of 1/f. The four graphs below show different lines of best fit for the data points.\n\n**Select** the most appropriate graph. **Justify** your answer.',
        marks: 2,
        figImages: [`${P}q6e-graphs.png`],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select: C\nJustification: The equation shows a straight line (linear relationship) is expected. Graph C has the best-fit line that does not include the anomalous data point, with roughly equal numbers of data points above and below the line.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'Use your answer to part (e) to **calculate** the focal length (f) of the lens.',
        marks: 2,
        ph: 'Read y-intercept from graph C: y-intercept ≈ 5.8 m⁻¹ (accept 5.8 ± 0.1)\nf = 1 / (y-intercept) = 1 / 5.8 = **0.172 m** (accept 0.172 ± 0.003 m)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Drones: Forces & Evaluation (9 marks) Criterion A/D
  // Context: Quadcopter drones delivering medical supplies
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Motion',
    marks: 9,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['balanced forces', 'unbalanced forces', 'Newton\'s laws', 'drone technology'], level: 'proficient' },
    stem: 'A drone is a vehicle that can fly without a pilot on board. A drone may be controlled by computers or by someone on the ground who may be a long distance away. A quadcopter is a common type of drone.',
    figImages: [`${P}q7-drone.png`],
    tasks: [
      {
        label: 'a',
        text: 'The diagrams below show the forces acting on a moving quadcopter. T is the total thrust generated by the propellers and W is the weight of the quadcopter. **Select** the diagram showing a quadcopter **taking off**. **Justify** your answer.',
        marks: 2,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C'],
        ph: 'Select: A (diagram showing T > W — upward thrust is greater than downward weight).\nJustification: For the quadcopter to take off (accelerate upwards), the forces must be unbalanced — the thrust must be greater than the weight. This gives a net upward force, causing upward acceleration.',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Many cities have serious traffic problems which can increase the delivery time of urgent medical supplies. Scientists have suggested that quadcopters could be a good option for faster delivery of these supplies. Some quadcopters can carry up to 3 kg of material, can fly for 20 minutes and can cover a distance up to 20 km.\n\n**Discuss and evaluate** the advantages and disadvantages of using quadcopters to deliver urgent medical supplies.',
        marks: 7,
        ph: 'Advantages:\n- Can bypass road traffic → faster delivery of urgent medical supplies (e.g. blood, medication)\n- Can reach remote areas not accessible by road\n- Lower running costs than ambulances; no driver needed\n- Environmental benefit: electric → zero direct emissions\n\nDisadvantages:\n- Limited payload (3 kg) — may not be sufficient for large/heavy supplies\n- Limited range (20 km) and flight time (20 min)\n- Weather-dependent — cannot operate in heavy rain/wind\n- Risk of collision with aircraft or buildings\n- Privacy and security concerns about autonomous vehicles in urban areas\n- Regulatory challenges — air traffic control\n\nConclusion: For small, urgent medical deliveries (e.g. insulin, AED devices), quadcopters offer significant advantages over road delivery. However, limitations in payload and range mean they supplement rather than replace conventional delivery.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Drones in Environmental Monitoring (14 marks) Criterion D
  // Context: Uses of drones beyond delivery — environmental and scientific monitoring
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society',
    marks: 14,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['drone technology', 'environmental monitoring', 'social implications', 'science and society'], level: 'advanced' },
    stem: 'The video outlines some common uses of drones, including in environmental monitoring, agriculture, search and rescue, photography, and scientific research. Scientists are increasingly using drones to monitor and study the natural environment.',
    figImages: [`${P}q8-drone-uses.png`],
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** the use of drones. In your answer:\n\n- Describe at least **two uses of drones in environmental monitoring**, and explain how each use is a benefit to science\n- Discuss the **social implications** of drone technology for individuals (positive AND negative), with justification\n- Discuss the **political implications** of widespread drone use, with further explanation',
        marks: 14,
        ph: 'Environmental monitoring uses:\n1. Monitoring wildlife populations — drones can survey large, inaccessible areas quickly without disturbing animals. This provides more accurate population data for conservation science.\n2. Monitoring deforestation and land use — drones can capture high-resolution imagery of forest areas to track illegal logging. This data supports environmental policy and conservation efforts.\n3. Atmospheric monitoring — drones can fly into weather systems to collect data on temperature, pressure, and pollution levels, improving weather prediction models.\n\nSocial implications:\nPositive: Faster emergency response (e.g. delivering AEDs to cardiac arrest victims); improved search and rescue operations; reduced exposure of humans to dangerous environments.\nNegative: Privacy concerns — drones with cameras can invade personal privacy. Risk of drone crashes or collisions causing injury. Job displacement for delivery workers.\n\nPolitical implications:\nPositive: Better environmental data supports international climate agreements. Drones can monitor borders and enforce environmental laws.\nNegative: Drones can be used for surveillance by governments, raising civil liberties concerns. International tensions over drone flights in disputed airspace. Military use of drones raises ethical questions about autonomous weapons.',
        level: 'advanced',
      },
    ],
  },

]
