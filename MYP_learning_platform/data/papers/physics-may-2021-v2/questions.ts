import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2021-v2/'

export const paperMeta = {
  id: 'physics-may-2021-v2',
  subject: 'Physics',
  session: 'May',
  year: 2021,
  totalMarks: 98,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Electromagnetic Waves: Aviation Radio (8 marks) Criterion A
  // V2: Air traffic control microwave/radio signals; distance = 12 km
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Electromagnetic Waves — Aviation Radio',
    marks: 8,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'em-spectrum', topics: ['radio waves', 'electromagnetic spectrum', 'speed of waves', 'diffraction'], level: 'proficient' },
    stem: 'Radio waves are essential for safe aviation. Air traffic controllers on the ground use radio waves to communicate with pilots in aircraft. Without radio communication, pilots would have no way to receive updated weather information, landing instructions, or emergency guidance. The first air-to-ground radio communication was successfully demonstrated in the early twentieth century.',
    figImages: [`${P}q1-aviation-radio.png`],
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
        text: 'Radio waves used in aviation can travel beyond the visible horizon. An animation shows radio waves bending around the Earth\'s curved surface to reach aircraft that are not in the direct line of sight of a ground antenna.\n\n**Select** the phenomenon shown in the animation.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Reflection', 'B. Diffraction', 'C. Refraction', 'D. Interference'],
        ph: 'B',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'An air traffic controller transmits a landing instruction to an aircraft at a distance of **12 km** from the control tower. **Calculate** the time taken for the radio signal to travel 12 km. You should take the speed of radio waves in air to be **3.0 × 10⁸ m s⁻¹**. Give your answer in **scientific notation**.',
        marks: 3,
        ph: 'Convert: 12 km = 12 000 m\nt = d/v = 12 000 / (3.0 × 10⁸)\n= **4.0 × 10⁻⁵ s**',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Suggest** two reasons why communication using radio waves was such an important discovery for aviation.',
        marks: 2,
        ph: 'Any two of:\n- Pilots can receive real-time guidance from ground controllers → safer navigation\n- Communication over large distances (to aircraft far from airport) without physical connection\n- Enables precise coordination of takeoff/landing to prevent mid-air collisions\n- Emergency communication with distressed aircraft\n- Led to development of radar for tracking aircraft positions',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Radioactivity: Technetium-99m in Bone Scanning (9 marks) Criterion A
  // V2: Tc-99m (Z=43, A=99) used in bone scans; half-life from graph ≈ 6 h
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Physics — Technetium-99m',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'radioactive decay', 'half-life', 'nuclear medicine'], level: 'proficient' },
    stem: 'Technetium is a chemical element used in nuclear medicine. It has an atomic number of 43. The unstable technetium-99m isotope has a mass number of 99 and decays by emitting gamma radiation only. It is widely used in bone scans and organ imaging to diagnose diseases.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct option to complete the following sentences about an atom of technetium-99m:\n\n- 43 is the **[Select]** in the nucleus.\n- 99 is the **[Select]** in the nucleus.',
        marks: 2,
        widget: 'inline_dropdown_select',
        widgetOptions: ['atomic number', 'mass number', 'number of protons', 'number of neutrons', 'number of nucleons'],
        widgetItems: ['43 is the', '99 is the'],
        ph: 'number of protons (atomic number) | mass number (number of nucleons)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The three images below show the path of a charged particle moving through an electric field.\n\n**Select** the image that shows the path of beta radiation emitted by a different isotope. **Justify** your answer.',
        marks: 3,
        figImages: [`${P}q2b-beta-field.png`],
        ph: 'Select: image C (beta particles deflected towards the positive plate).\nJustification: Beta particles are electrons, which are negatively charged. Negatively charged particles are attracted to the positive plate, so they are deflected towards the positive plate in an electric field.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'The graph below shows how the mass of technetium-99m changes with time. Use the graph to **determine** the half-life of technetium-99m.',
        marks: 2,
        figImages: [`${P}q2c-halflife.png`],
        ph: 'From the graph: start with initial mass. Find the time when mass halves.\nHalf-life ≈ **6 h** (accept 5–7 h from graph)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'Technetium-99m is used in medicine as a radioactive tracer injected into the body.\n\n**Suggest** why the half-life and the gamma emission of technetium-99m make it useful for bone scanning.',
        marks: 2,
        ph: 'Half-life: The short half-life (≈6 h) means radioactivity decays quickly after the scan is complete, minimising the radiation dose to the patient.\n\nGamma emission: Gamma rays penetrate bone and soft tissue, allowing an external gamma camera to detect the radiation and form an image of the skeleton. No beta radiation means less tissue damage from the tracer itself.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Kinetic Energy & Regenerative Braking: Hybrid Bus (11 marks) Criterion A
  // V2: Hybrid city bus; mass = 2000 kg; speed = 16 m/s; braking distance = 22 m
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power — Hybrid Bus',
    marks: 11,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'deceleration', 'energy transformation', 'hybrid vehicles'], level: 'proficient' },
    stem: 'Energy transformations occur in moving vehicles. Hybrid buses use a combination of diesel fuel and electrical energy stored in batteries to provide their kinetic energy. These buses are designed to be more fuel efficient and reduce emissions in urban environments.',
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the kinetic energy of a **2000 kg** hybrid bus moving at **16 m s⁻¹**.',
        marks: 2,
        ph: 'KE = ½mv²\n= ½ × 2000 × 16²\n= ½ × 2000 × 256\n= 1000 × 256\n= **256 000 J** (256 kJ)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'When the driver of the bus hits the brakes, the bus slows down to a complete stop. The braking distance is **22 m**.\n\n**Calculate** the average deceleration of the bus during braking. Give your answer to **3 significant figures**.',
        marks: 4,
        ph: 'Use v² = u² + 2as\n0 = 16² + 2 × a × 22\n0 = 256 + 44a\n44a = −256\na = −256/44 = −5.818... ≈ **−5.82 m s⁻²** (to 3 s.f.)',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'In conventional braking, the brakes slow down the bus by transforming all the kinetic energy of the bus into heat energy.\n\n**State** why the heat energy produced during braking is considered to be wasted energy.',
        marks: 1,
        ph: 'Heat energy cannot be used by the bus to perform useful work — it cannot be converted back to kinetic energy to drive the bus forward.',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'Regenerative brakes are a feature of hybrid buses. During regenerative braking, some of the energy wasted as heat is used to recharge the bus\'s battery instead.\n\nThe diagram below shows the energy transformations that take place in a hybrid bus during braking. **Select** the correct energy forms to complete the diagram.\n\nKinetic energy → **[?]** → Electrical energy → **[?]** → Thermal energy',
        marks: 1,
        figImages: [`${P}q3d-energy-diagram.png`],
        widget: 'energy_chain',
        ph: 'Kinetic energy → Kinetic energy (mechanical) → Electrical energy → Chemical potential energy → Thermal energy',
        level: 'foundation',
      },
      {
        label: 'e',
        text: '**Suggest** why regenerative braking helps the hybrid bus to use less diesel fuel than a conventional bus.',
        marks: 1,
        ph: 'During regenerative braking, kinetic energy is converted to electrical energy and stored as chemical potential energy in the battery. This stored energy can be used to drive the bus, reducing the amount of diesel fuel needed.',
        level: 'developing',
      },
      {
        label: 'f',
        text: '**Outline** why reducing the fuel consumed by city buses is an issue of global significance.',
        marks: 2,
        ph: 'Burning diesel produces CO₂ (a greenhouse gas contributing to climate change) and particulates that cause urban air pollution and health problems. Reducing fuel consumption addresses both climate change (a global problem) and urban air quality, which affects millions of city dwellers worldwide.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Galileo's Ramp: Rubber Ball Experiment (18 marks) Criterion B/C
  // V2: Rubber ball on ramp; different time data; missing value = 2.38² = 5.66 s²
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Forces & Motion — Ball on Ramp',
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
        ph: 'The ball accelerates because a constant net force acts on it — the component of gravity along the slope. By Newton\'s second law (F = ma), a constant force on a constant mass produces constant acceleration. Both gravitational force and mass are constant, so acceleration is constant.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'For a ball moving with constant acceleration, the distance (s) the ball moves and the time taken (t) are related by the formula:\n\n**s = ½at²** (when initial velocity = 0)\n\nUse the formula to **select** the results that you would expect to be shown by this investigation. **Justify** your answer.\n\nA. s vs t² — concave curve upwards\nB. s vs t² — straight line through origin\nC. s vs t — straight line through origin\nD. s vs t — decreasing curve',
        marks: 3,
        figImages: [`${P}q4d-graphs.png`],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select: B (straight line through origin on s vs t² graph).\nJustification:\n- s = ½at² means s ∝ t² (directly proportional)\n- Graph of s vs t² should be straight line through origin\n- Gradient equals ½a',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Another student performs a similar investigation and obtains the results shown in the table below:\n\n| Distance / m | Time / s | (Time)² / **?** |\n|-------------|----------|------------------|\n| 0.25 | 1.10 | 1.21 |\n| 0.50 | 1.52 | 2.31 |\n| 0.75 | 1.84 | 3.39 |\n| 1.00 | 2.15 | 4.62 |\n| 1.25 | 2.38 | **?** |\n\nThe table is incomplete. **Label** the missing unit for the column (Time)² and **calculate** the missing value.',
        marks: 3,
        figImages: [`${P}q4e-table.png`],
        ph: 'Unit: s² (seconds squared)\nMissing value: 2.38² = 5.6644 ≈ **5.66** s²',
        level: 'developing',
      },
      {
        label: 'f',
        text: 'In Galileo\'s original investigation, the measuring equipment available was quite basic. One piece of equipment that Galileo used to measure time was a water clock. The water clock provided a relative measure of time based on the volume of water collected in a beaker as the ball rolled down the ramp.\n\n**Suggest** why using a water clock to measure time would have made it hard for Galileo to share his results with other scientists.',
        marks: 1,
        ph: 'A water clock does not measure time in standard units — different water clocks produce different volumes for the same time interval. Without a universal standard unit, results cannot be replicated or compared by other scientists.',
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
        ph: 'New independent variable: angle of the slope (or mass of ball, surface material)\n\nResearch question: How does the angle of the slope affect the time taken for a ball to roll a fixed distance?\n\nControl variables: mass of ball, size of ball, distance (do not use distance as CV if it is DV).',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Air Resistance: Cone-shaped Paper Investigation (14 marks) Criterion B
  // V2: Cone-shaped paper objects of different base areas dropped from fixed height
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Forces & Motion — Cone Drag',
    marks: 14,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['air resistance', 'surface area', 'falling objects', 'investigation design'], level: 'advanced' },
    stem: 'One of Galileo\'s most important discoveries was that objects fall at the same rate if air resistance is not significant. In real life, air resistance significantly affects falling objects. An MYP student is interested in the effect that the base area of a cone-shaped paper object has on the time taken to fall from a fixed height.',
    figImages: [`${P}q5-cone-drag.png`],
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a hypothesis for the student\'s investigation. Your explanation should refer to forces and particle theory.',
        marks: 3,
        ph: 'If the base area of the paper cone increases, then the time taken to fall will increase (it will fall more slowly).\nBecause: A larger base area means more air particles collide with the cone per second, creating a greater upward air resistance force. The greater upward force reduces the net downward force, so the cone decelerates and falls more slowly, taking longer to reach the ground.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: '**Design** an investigation that the student could use to test the hypothesis in part (a).\n\nIn your plan you should include:\n- Your independent and dependent variables\n- Two control variables with justification\n- A list of the equipment you will use\n- An explanation of how you will collect sufficient data\n- Details of how you will make sure your method is safe',
        marks: 11,
        ph: 'Variables:\n- IV: base area of the paper cone (cm²)\n- DV: time taken to fall (from fixed height)\n- CV1: mass of the cone — heavier cones fall faster regardless of area; must keep mass constant by using same amount of paper\n- CV2: height of drop — different heights change total fall time independently\n\nEquipment: paper, scissors, ruler/compass (to measure base radius and calculate area), stopwatch, metre ruler.\n\nMethod:\n1. Make 5 cones with different base areas (e.g. 10, 20, 30, 40, 50 cm²) using the same amount of paper\n2. Drop each cone from the same height (e.g. 2 m)\n3. Time each fall with stopwatch, 3 repeats per cone\n4. Calculate mean time per cone\n5. Record in a table\n\nSafety: Stand on a stable surface; ensure drop zone is clear.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Optics: Projector Lens Focal Length (15 marks) Criterion C
  // V2: Projector/telescope lens with f ≈ 14.5 cm; Q6a dₒ = 30 cm → dᵢ = 28.0 cm
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Light & Optics — Projector Lens',
    marks: 15,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['convex lens', 'focal length', 'image distance', 'data processing'], level: 'proficient' },
    stem: 'Projector lenses use convex lenses to focus light from a small display panel onto a large screen. With a convex lens, light from an object converges to form a magnified image on the screen. The focal length of a lens (f) is the distance between the centre of the lens and the focus point.\n\nThe formula relating object distance (dₒ) and image distance (dᵢ) is: **1/f = 1/dₒ + 1/dᵢ**',
    figImages: [`${P}q6-lens-setup.png`],
    tasks: [
      {
        label: 'a',
        text: 'A simulation has a distance dₒ of **30 cm**. Change the position of the movable screen to **determine** the distance dᵢ.\n\nThe simulation shows the image is sharp when the screen is at the **58.0 cm** mark on the ruler. Calculate dᵢ.',
        marks: 3,
        ph: 'The lens is positioned at 30 cm from the object.\ndᵢ = 58.0 − 30 = **28.0 cm**\n(Accept 58.0 ± 0.1 for the reading; dᵢ = 28.0 ± 0.1 cm)',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'A student collects more data for different values of dₒ. Their raw notebook data is shown below:\n\n- 20.0 cm — 52.6 centimetres\n- 25.0 cm — 0.345 m\n- 50.0 cm — 16.0 cm\n- 60.0 cm — 19.1 cm\n\n**Organise and present** the student\'s data in a table of results. Include your result from part (a).',
        marks: 4,
        ph: '| dₒ / cm | dᵢ / cm |\n|---------|--------|\n| 20.0 | 52.6 |\n| 25.0 | 34.5 |\n| 30.0 | 28.0 |\n| 50.0 | 16.0 |\n| 60.0 | 19.1 |\n\nMarks: correct headings with symbols and units; data in ascending order of dₒ; 0.345 m → 34.5 cm conversion; consistent decimal places.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Another student in the same class processes the data. Their table of processed data is shown below:\n\n| 1/dₒ / m⁻¹ | 1/dᵢ / m⁻¹ | 1/f / m⁻¹ | f / [?] |\n|------------|------------|------------|----------|\n| 5.00 | 1.90 | 6.90 | 0.145 |\n| 4.00 | 2.90 | 6.90 | 0.145 |\n| 3.33 | 3.57 | 6.90 | 0.145 |\n| 2.50 | **?** | **?** | **?** |\n| 2.00 | 6.25 | 8.25 | 0.121 |\n| 1.67 | 5.24 | 6.91 | 0.145 |\n\n**Label** the incomplete column header and **calculate** the missing processed data values.',
        marks: 3,
        ph: 'Column header: f / m (metres)\nMissing 1/dᵢ: 1/f − 1/dₒ = 6.90 − 2.50 = **4.40** m⁻¹\nMissing 1/f: 2.50 + 4.40 = **6.90** m⁻¹\nMissing f: 1/6.90 = **0.145** m',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'One of the calculated f values in the table appears to be anomalous. **Identify** this data point.',
        marks: 1,
        ph: 'The anomalous value is **0.121 m** (corresponding to 1/dₒ = 2.00 m⁻¹, dₒ = 50 cm). It is noticeably smaller than the other values which cluster around 0.145 m.',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'A graph of 1/dᵢ against 1/dₒ can be used to find the focal length of the lens. The line of best fit will have a y-intercept of 1/f. The four graphs below show different lines of best fit for the data points.\n\n**Select** the most appropriate graph. **Justify** your answer.',
        marks: 2,
        figImages: [`${P}q6e-graphs.png`],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select: C\nJustification: Graph C has a straight line of best fit that excludes the anomalous point, with roughly equal numbers of data points above and below the line. The equation predicts a linear relationship.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'Use your answer to part (e) to **calculate** the focal length (f) of the lens.',
        marks: 2,
        ph: 'Read y-intercept from Graph C: y-intercept ≈ 6.90 m⁻¹ (accept 6.90 ± 0.1)\nf = 1 / 6.90 = **0.145 m** (accept 0.145 ± 0.002 m)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Hot Air Balloon: Forces & Evaluation (9 marks) Criterion A/D
  // V2: Hot air balloon delivering humanitarian aid to mountainous regions
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Motion — Hot Air Balloon',
    marks: 9,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['balanced forces', 'unbalanced forces', 'Newton\'s laws', 'hot air balloon'], level: 'proficient' },
    stem: 'A hot air balloon is an aircraft that uses a large inflated envelope of hot air to generate lift. A burner heats the air inside the balloon, making it less dense than the surrounding cool air, generating an upward buoyancy force. Hot air balloons have been used for scientific research, tourism, and communication relay in remote areas.',
    figImages: [`${P}q7-hot-air-balloon.png`],
    tasks: [
      {
        label: 'a',
        text: 'The diagrams below show the forces acting on a hot air balloon. T is the total upward buoyancy force (lift) and W is the weight of the balloon and basket. **Select** the diagram showing a balloon **taking off** (ascending). **Justify** your answer.',
        marks: 2,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C'],
        ph: 'Select: A (diagram showing T > W — upward lift exceeds downward weight).\nJustification: For the balloon to take off (accelerate upwards), the forces must be unbalanced — lift must exceed weight. This gives a net upward force, causing upward acceleration.',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Some mountainous and island communities have limited road and sea access, meaning urgent medical supplies can take days to arrive. Scientists have proposed that hot air balloons could be used to carry supplies to communities at altitude. A research balloon can carry up to 800 kg of payload and carry it several hundred kilometres.\n\n**Discuss and evaluate** the advantages and disadvantages of using hot air balloons to deliver urgent medical supplies to remote mountainous communities.',
        marks: 7,
        ph: 'Advantages:\n- Can reach communities at high altitude that roads or helicopters struggle to access in calm conditions\n- Large payload capacity compared to small drones\n- Low fuel cost once airborne (relies on wind for horizontal travel)\n- Silent operation — no noise disturbance to community or wildlife\n\nDisadvantages:\n- Highly weather-dependent — cannot steer against wind, so direction uncertain\n- Slow — travel time unpredictable and may not suit urgent medical needs\n- Cannot be precisely guided to a delivery point\n- Risk of collision with terrain in mountainous regions\n- Requires large open landing space not always available\n\nConclusion: Hot air balloons are not suitable for time-critical emergency medical deliveries due to limited control and weather dependence. However, they could be used for scheduled, non-urgent supply runs to isolated communities where weather is predictable and suitable landing sites exist.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Drones in Marine Science: Evaluation (14 marks) Criterion D
  // V2: Uses of drones in marine and coastal monitoring
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society — Marine Drones',
    marks: 14,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['drone technology', 'marine science', 'social implications', 'science and society'], level: 'advanced' },
    stem: 'A video outlines the use of aerial and underwater drones in marine science, including monitoring coral reef health using underwater cameras, surveying whale populations from the air, collecting water samples in remote ocean areas, and mapping plastic pollution across large ocean zones. Marine drones are increasingly deployed in coastal and deep-ocean research.',
    figImages: [`${P}q8-marine-drones.png`],
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** the use of drones in marine science and environmental monitoring. In your answer:\n\n- Describe at least **two uses of drones in marine science**, and explain how each use benefits scientific research\n- Discuss the **social implications** of drone technology in marine environments (positive AND negative), with justification\n- Discuss the **political implications** of widespread drone use in international waters, with further explanation',
        marks: 14,
        ph: 'Marine science uses:\n1. Coral reef monitoring — underwater drones (ROVs) equipped with cameras map reef extent and health across large areas without diver disturbance. Provides more accurate and safer data collection than scuba surveys, enabling better tracking of bleaching events linked to climate change.\n2. Whale population surveys — aerial drones photograph whale pods from above, allowing scientists to count individuals and measure body condition without the noise and disturbance of traditional survey vessels. More data collected per survey hour.\n3. Ocean plastic mapping — surface drones photograph and log GPS coordinates of floating plastic debris across large ocean areas, providing data on distribution that informs cleanup operations.\n\nSocial implications:\nPositive: Better marine data leads to evidence-based fisheries management → food security for fishing communities. Reef protection → protects tourism industries and coastal livelihoods. Reduced risk to human divers in dangerous survey conditions.\nNegative: Underwater drones may disturb marine life (whales, dolphins respond to propeller noise). Fishermen may be monitored without consent. Fear of surveillance equipment in fishing areas. High cost of marine drone technology excludes developing nations from scientific opportunities.\n\nPolitical implications:\nPositive: Shared drone data on ocean health can support international agreements (e.g. UNCLOS marine protected areas). Monitoring of illegal fishing in protected zones supports enforcement.\nNegative: Drones operating in contested international waters raise sovereignty disputes. Military drones and civilian research drones may be confused. Countries may refuse foreign marine drones access to their exclusive economic zones. Data ownership disputes — who owns ocean data collected by drones?',
        level: 'advanced',
      },
    ],
  },

]
