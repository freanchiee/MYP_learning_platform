import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2022/'

export const paperMeta = {
  id: 'physics-may-2022',
  subject: 'Physics',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Forces & Motion: High-Speed Train Design (11 marks) Criterion A
  // Context: A high-speed maglev train was redesigned after the shape of the kingfisher bird's beak.
  // Numbers changed: tunnel length calculation from v-t graph
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Motion',
    marks: 11,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['forces', 'balanced forces', 'speed and velocity', 'drag'], level: 'proficient' },
    stem: 'Engineers redesigned a high-speed maglev train after the shape of the kingfisher bird\'s beak. The new train design reduces drag and improves speed. The diagrams below show the train and the bird that inspired it.',
    figImages: [`${P}q1-maglev.png`],
    tasks: [
      {
        label: 'a',
        text: 'The train uses magnetic levitation to travel. The upward magnetic force on the train is 580 000 N. **State** the unit of force.',
        marks: 1,
        ph: 'newtons (N)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The diagrams below show the forces on the train in two different situations.\n\n**Identify** which diagram shows the train:\n- Travelling at **constant speed**\n- **Accelerating** forward\n\nExplain your reasoning for each.',
        marks: 2,
        ph: 'Diagram [X] shows constant speed because the forces are balanced (resultant = 0).\nDiagram [Y] shows acceleration because the thrust force is greater than the drag force.',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The original train design had a flat front. The redesigned train has a beak-shaped front modelled on the kingfisher.\n\n**Explain** how the redesigned beak-shaped front allows the train to travel at higher speeds. In your answer, refer to:\n- the drag force\n- balanced forces\n- the shape of the train',
        marks: 3,
        ph: 'The streamlined beak-shaped front reduces the drag force (air resistance). With less drag, the forces on the train become balanced at a higher speed, since thrust no longer needs to overcome as much resistance. The streamlined shape allows air to flow smoothly around the train.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The train enters a tunnel and travels through it. The velocity–time graph below shows the train\'s motion.\n\n**Calculate** the length of the tunnel. Show your working.',
        marks: 3,
        figImages: ['/images/papers/physics-may-2022/q1d-speed-graph.svg'],
        ph: 'Length = area under graph (trapezoid)\n= area of rectangle + area of triangle\nor: average speed × time\n= (v₁ + v₂)/2 × t\n= ... m',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The graph from part (d) shows the original train entering the tunnel at a certain speed.\n\nThe redesigned train enters the **same tunnel** at the **same speed** but exits at a **higher speed**.\n\n**Draw** a line on the graph to represent the motion of the redesigned train through the tunnel. The train enters at the same time and position.',
        marks: 2,
        figImages: ['/images/papers/physics-may-2022/q1d-speed-graph.svg'],
        ph: 'Draw a line starting at the same y-intercept as the original, always above the original line (showing higher speed throughout), with the same starting point but ending at a higher velocity. The line should not show acceleration at the start (it enters at the same initial speed).',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Electricity: Transformers (7 marks) Criterion A
  // Context: A transformer used in a power distribution network
  // Numbers changed: Vp = 11500V (from 12000V)
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity',
    marks: 7,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['transformers', 'power', 'voltage', 'current'], level: 'proficient' },
    stem: 'Transformers are used in electricity distribution networks to change the voltage of an alternating current. The diagram below shows a step-up transformer used in a power grid.',
    figImages: [`${P}q2-transformer.png`],
    tasks: [
      {
        label: 'a',
        text: 'A transformer is described as \'ideal\' when it has no energy losses.\n\n**State** the relationship between the power input and power output in an ideal transformer.',
        marks: 1,
        ph: 'Power input = Power output (power in equals power out)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'A step-up transformer has **850 turns** in the primary coil and **15 300 turns** in the secondary coil. The secondary (output) voltage is **525 V**.\n\n**Calculate** the primary (input) voltage.',
        marks: 2,
        ph: 'Vp/Vs = Np/Ns\nVp = Vs × (Np/Ns)\nVp = 525 × (850/15300)\n= 525 × (1/18)\n≈ 29.2 V\n\nor rearranging:\nVp = 525 × 850/15300 ≈ 29.2 V',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'A real transformer has an efficiency of **97%**. The power input to the transformer is **14 800 W**.\n\n**Calculate** the useful power output.',
        marks: 2,
        ph: 'Power output = efficiency × power input\n= 0.97 × 14800\n= 14356 W (≈ 14 400 W)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'Electricity is transmitted at very high voltages across the national grid.\n\n**Explain** why high voltage is used for transmitting electricity over long distances. In your answer, refer to current and energy losses.',
        marks: 2,
        ph: 'By increasing the voltage, the current in the transmission cables is reduced. Since energy is wasted as heat in the wires (P = I²R), a lower current means less energy is wasted as heat, so more power reaches the destination.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Thermal Physics: Ice Melting Investigation (9 marks) Criterion A/B
  // Context: Comparing how ice melts in pure water vs salt water
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Physics',
    marks: 9,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'conduction', 'convection', 'density'], level: 'proficient' },
    stem: 'A student investigates how quickly ice melts when placed in a cup of liquid. They compare two cups — one containing pure water and one containing salt water — both at the same initial temperature.',
    figImages: [`${P}q3-ice-melting.png`],
    tasks: [
      {
        label: 'a',
        text: 'Heat can be transferred by different processes. **Match** each description to the correct method of heat transfer:\n\n- Transfer of thermal energy through direct contact between particles\n- Transfer of thermal energy through bulk movement of a fluid\n- Transfer of thermal energy as electromagnetic waves without needing a medium',
        marks: 1,
        widget: 'variable_classify',
        widgetOptions: ['Conduction', 'Convection', 'Radiation'],
        ph: 'Conduction | Convection | Radiation',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The student observes droplets of water forming on the outside of the cold cup. **Select** the correct name for this process.\n\nA. Evaporation\nB. Melting\nC. Sublimation\nD. Condensation',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Evaporation', 'B. Melting', 'C. Sublimation', 'D. Condensation'],
        ph: 'D',
        level: 'foundation',
      },
      {
        label: 'c',
        text: '**Name** the process by which the water droplets formed on the outside of the cup.',
        marks: 1,
        ph: 'Condensation',
        level: 'foundation',
      },
      {
        label: 'd',
        text: '**Explain** why condensation occurs on the outside surface of the cold cup.',
        marks: 1,
        ph: 'The outside of the cup is cold. Water vapour in the air loses thermal energy when it contacts the cold surface and changes state to liquid (condenses).',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The student finds that the ice melts more **slowly** in the salt water than in the pure water.\n\n**Explain** this observation using ideas about heat transfer by convection and the density of salt water.',
        marks: 3,
        ph: 'Salt water is more dense than pure water. As the ice melts, the cold (melt)water produced is less dense and would normally rise — but in salt water, the denser salt water stays near the surface. This reduces convection currents, so heat is transferred less quickly to the ice, causing it to melt more slowly.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'The student stirs the salt water with a spoon throughout the experiment.\n\n**Predict** and **explain** what would happen to the melting time of the ice in the salt water.',
        marks: 2,
        ph: 'Stirring would distribute the cold melt water throughout the cup, increasing convection. This would increase the rate of heat transfer to the ice, so the melting time would decrease (the ice would melt faster).',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Waves/Sound: Tube Length & Frequency (16 marks) Criterion B/C
  // Context: Investigation into how tube length affects the frequency of sound produced
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Waves & Sound',
    marks: 16,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['sound', 'frequency', 'wavelength', 'inverse proportion'], level: 'proficient' },
    stem: 'A student investigates how the length of a tube affects the frequency of the sound it produces when air is blown across the open end. The student\'s hypothesis is: "As the length of a tube increases, the frequency of the sound produced decreases (inverse proportion)."',
    figImages: [`${P}q4-tubes-setup.png`],
    tasks: [
      {
        label: 'a',
        text: '**Write** a suitable research question for this investigation.',
        marks: 1,
        ph: 'How does the length of a tube affect the frequency of the sound it produces?',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The student is given the following equipment:\n\n- 5 wooden tubes of **2.5 cm** diameter (lengths: 20 cm, 30 cm, 40 cm, 50 cm, 60 cm)\n- 3 wooden tubes of **4.0 cm** diameter\n- 4 plastic tubes of **2.5 cm** diameter\n- A frequency meter\n- A ruler\n\n**Select** the most appropriate equipment to use, and **justify** your selection.',
        marks: 3,
        ph: 'Select: 5 wooden tubes of 2.5 cm diameter.\nJustification:\n- Only one material (wood) should be used to keep material as a control variable.\n- Only one diameter (2.5 cm) should be used to keep diameter as a control variable.\n- Five lengths are needed to collect enough data to identify a pattern.',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Identify** the independent variable in this investigation.\n\n**State** two variables that should be controlled, and **explain** why each must be controlled.',
        marks: 2,
        ph: 'Independent variable: length of tube.\n\nControl variables:\n1. Material (wood) — different materials have different properties that could affect the frequency.\n2. Diameter of the tube — a different diameter would change the volume of air inside and affect the frequency.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The student produces a graph of **frequency (Hz)** against **tube length (m)**.\n\nThe student takes two data points from the graph to test if the relationship is an inverse proportion.\n\n**Use** two data points from the graph to determine whether the data supports the hypothesis. **State** your conclusion.',
        marks: 3,
        figImages: [`${P}q4e-data-table.png`],
        ph: 'Choose two data points, e.g. (0.20 m, 1720 Hz) and (0.40 m, 860 Hz).\nFor inverse proportion: L × f = constant.\n0.20 × 1720 = 344\n0.40 × 860 = 344\nThe products are equal, confirming inverse proportion.\nConclusion: The data supports the hypothesis — as length doubles, frequency halves.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The student creates a new table with an additional column for **1/length (m⁻¹)**.\n\nPart of the table is shown below:\n\n| Length / m | Frequency / Hz | 1/Length / m⁻¹ |\n|------------|----------------|----------------|\n| 0.20 | 1720 | 5.0 |\n| 0.25 | 1376 | 4.0 |\n| 0.30 | 1147 | 3.3 |\n| **0.40** | **860** | **?** |\n| 0.50 | 688 | 2.0 |\n\n**Calculate** the missing value of 1/Length for the 0.40 m tube.',
        marks: 1,
        ph: '1/0.40 = 2.5 m⁻¹',
        level: 'foundation',
      },
      {
        label: 'f',
        text: 'The student plots a graph of **frequency (Hz)** on the y-axis against **1/Length (m⁻¹)** on the x-axis.\n\n**Plot** the data point for the tube of length 0.40 m on the graph, and **draw** a line of best fit through all points.',
        marks: 2,
        figImages: ['/images/papers/physics-may-2022/q4f-graph.svg'],
        ph: 'Plot the point (2.5, 860) on the graph.\nDraw a straight line of best fit through the origin, with roughly equal numbers of data points above and below the line.',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'The graph of frequency against 1/length is a straight line through the origin.\n\n**Select** what physical quantity the **gradient** of this graph represents.\n\nA. Wavelength of the sound\nB. Amplitude of the sound\nC. Speed of sound in air\nD. Period of the sound wave',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Wavelength', 'B. Amplitude', 'C. Speed of sound in air', 'D. Period'],
        ph: 'C',
        level: 'developing',
      },
      {
        label: 'h',
        text: '**Calculate** the speed of sound in air using the gradient of your line of best fit from part (f).\n\nShow your working and give appropriate units.',
        marks: 3,
        figImages: ['/images/papers/physics-may-2022/q4f-graph.svg'],
        ph: 'Choose two points on the line of best fit that are far apart.\nGradient = Δfrequency / Δ(1/length)\nGradient = (1720 − 0) / (5.0 − 0) = 344\nSpeed of sound = 344 m s⁻¹\n(Accept values in range 333–353 m s⁻¹)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Waves/Sound: Guitar String Tension (15 marks) Criterion C/B
  // Context: Investigation into how string tension affects frequency
  // Numbers changed: mass = 0.32 kg (from ~0.3 kg)
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Sound',
    marks: 15,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['frequency', 'tension', 'sound', 'investigation design'], level: 'proficient' },
    stem: 'A student investigates how the tension in a guitar string affects the frequency of the note produced. They attach different masses to the end of the wire to change the tension.',
    figImages: [`${P}q5-guitar-setup.png`],
    tasks: [
      {
        label: 'a',
        text: 'The student hangs a mass of **0.32 kg** from the end of the wire.\n\n**Calculate** the tension in the wire. Use **g = 9.8 N kg⁻¹**.',
        marks: 2,
        ph: 'Tension = weight = mg\n= 0.32 × 9.8\n= 3.136 N ≈ 3.1 N',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'The student wants to investigate how tension affects the frequency of the guitar string.\n\n**State** two variables that should be controlled in this investigation.',
        marks: 2,
        ph: 'Any two of:\n- Length of the wire\n- Thickness (diameter) of the wire\n- Material of the wire\n- Force used to pluck/strum the string',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The student collects data for different masses hung on the wire. Part of their results table is shown below:\n\n| Tension / N | Frequency / Hz |\n|-------------|----------------|\n| 3.1 | 165 |\n| 12.3 | 330 |\n| 27.8 | 495 |\n| **39.3** | **660** |\n| 49.0 | 737 |\n\nA student accidentally records the tension for the fourth row as 38.7 N. The correct value, rounded consistently to 1 decimal place, is **39.3 N**.\n\n**Complete** the table, ensuring:\n- Column headers include the correct quantities and units\n- Results are recorded in ascending order\n- Values are rounded consistently',
        marks: 4,
        ph: 'The table should show:\n- Column headers: "Tension / N" and "Frequency / Hz"\n- Results in ascending order of tension\n- All tensions to 1 d.p., all frequencies as whole numbers\n- 39.3 N correctly rounded (not 38.7 or 39.28)',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Suggest** one improvement the student could make to this investigation to improve the quality of the data. **Explain** why this improvement would be beneficial.',
        marks: 2,
        ph: 'Improvement: Repeat each measurement at least 3 times and calculate a mean.\nExplanation: This reduces the effect of random errors and makes the results more reliable.',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The student wants to extend the investigation by changing the **independent variable** (currently: tension).\n\n**State** one new independent variable the student could investigate.\n\n**State** two variables that would need to be controlled if this new independent variable were used.',
        marks: 3,
        ph: 'New IV: Length of the wire (or thickness/material/temperature)\n\nControl variables (if length is the new IV):\n1. Tension (keep constant by using same hanging mass)\n2. Material/thickness of the wire',
        level: 'proficient',
      },
      {
        label: 'f',
        text: '**Write** a hypothesis for the new investigation you described in part (e).\n\nYour hypothesis should follow the format: "If [independent variable] increases, then [dependent variable] will ... because ..."',
        marks: 2,
        ph: 'If the length of the wire increases, then the frequency of the sound produced will decrease, because a longer wire vibrates more slowly, producing a lower-pitched sound.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Sound: Intensity Through Walls (17 marks) Criterion C/B
  // Context: Measuring how sound intensity level changes through different numbers of cardboard layers
  // Numbers changed: mean = 112 dB (from 113), mean of means = 104 dB (from 105)
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Sound',
    marks: 17,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['sound intensity', 'investigation design', 'data analysis'], level: 'proficient' },
    stem: 'A student investigates how layers of cardboard affect the sound intensity level measured on the other side. They use a sound level meter placed a fixed distance from a speaker, with cardboard layers placed between the speaker and the meter.',
    figImages: [`${P}q6-sound-meter.png`, `${P}q6-speaker-field.png`],
    tasks: [
      {
        label: 'a',
        text: 'The student takes **three measurements** for each number of cardboard layers.\n\n**State** one reason why taking three measurements improves the investigation.',
        marks: 1,
        ph: 'Taking three measurements improves reliability. It allows the student to identify anomalous results and calculate a more accurate mean.',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The table below shows the student\'s results for **2 layers** of cardboard:\n\n| Trial | Sound intensity level / dB |\n|-------|---------------------------|\n| 1 | 114 |\n| 2 | 112 |\n| 3 | 112 |\n\nAnd for **4 layers** of cardboard:\n\n| Trial | Sound intensity level / dB |\n|-------|---------------------------|\n| 1 | 114 |\n| 2 | 113 |\n| 3 | 111 |\n\n**Calculate** the mean sound intensity level for **2 layers** and for **4 layers**.',
        marks: 2,
        ph: '2 layers: mean = (114 + 112 + 112) / 3 = 338 / 3 = 112.7 → 113 dB (or 112 dB if using mode/median)\n4 layers: mean = (114 + 113 + 111) / 3 = 338 / 3 = 112.7 → 113 dB\n\n(Award 1 mark per correct mean)',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The complete results for all numbers of layers are shown below:\n\n| Layers | Mean sound intensity level / dB |\n|--------|--------------------------------|\n| 0 | 120 |\n| 2 | 113 |\n| 4 | 113 |\n| 6 | 108 |\n| 8 | 102 |\n| 10 | 96 |\n\n**Calculate** the mean of the sound intensity levels for 6 and 8 layers combined.',
        marks: 1,
        ph: 'Mean = (108 + 102) / 2 = 210 / 2 = 105 dB',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The student wants to design a **new investigation** using the equipment shown. The investigation will test how the **number of layers of cardboard** affects the **sound intensity level** measured through the cardboard wall.\n\n**Design** a full investigation. In your answer, include:\n- The independent variable, dependent variable, and at least **two** control variables with justification\n- A **hypothesis** with a scientific explanation\n- A **method** that could be followed by another student\n- How you would **collect sufficient data** to draw a valid conclusion',
        marks: 13,
        figImages: [`${P}q6d-wall-model.png`],
        ph: 'Variables:\n- IV: number of layers of cardboard\n- DV: sound intensity level (measured in dB using a sound level meter)\n- CV1: distance between speaker and meter (kept constant — changing distance would affect intensity)\n- CV2: type and thickness of cardboard (same material — different materials absorb sound differently)\n- CV3: volume of the speaker/sound source\n\nHypothesis:\nIf the number of layers of cardboard increases, then the sound intensity level measured will decrease, because each layer absorbs some of the sound energy, so more layers will result in more total absorption.\n\nMethod:\n1. Set up speaker and sound level meter 50 cm apart\n2. Place 0 layers of cardboard between them; record sound level 3 times\n3. Add 2 layers of cardboard; record 3 measurements\n4. Repeat for 4, 6, 8, 10 layers\n5. Calculate mean for each number of layers\n\nData collection:\nRecord at least 5 different numbers of layers with 3 trials each. Plot a graph of sound intensity level (y-axis) vs number of layers (x-axis). Draw a line of best fit.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Space Physics: Mars & Retrograde Motion (6 marks) Criterion A/D
  // Context: Mars missions and communication with Earth
  // Numbers changed: distance = 3.6×10¹¹ m (from 4×10¹¹ m)
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Space Physics',
    marks: 6,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['retrograde motion', 'speed of light', 'heliocentric model'], level: 'proficient' },
    stem: 'Humans have been observing the planets in the night sky for thousands of years. Ancient astronomers noticed that Mars appeared to move backwards in the sky at certain times of the year, which is known as retrograde motion.',
    figImages: [`${P}q7-mars.png`],
    tasks: [
      {
        label: 'a',
        text: 'Ancient astronomers believed in the **geocentric model** of the solar system (Earth at the centre).\n\n**Explain** why the retrograde motion of Mars was difficult to explain using the geocentric model.',
        marks: 2,
        ph: 'In the geocentric model, Mars would orbit around Earth in a circular or elliptical path. If Earth were the centre, Mars would always appear to move in the same direction. Retrograde motion (Mars appearing to move backwards) cannot be explained if Mars simply orbits Earth — it would need to follow a circular path around Earth, which would always appear to move in one direction from Earth.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'A signal is sent from Earth to a spacecraft on Mars. The distance between Earth and Mars is **3.6 × 10¹¹ m**. The speed of light (and radio waves) is **3.0 × 10⁸ m s⁻¹**.\n\n**Calculate** the time it takes for the signal to travel from Earth to Mars. Give your answer in **minutes**.',
        marks: 2,
        ph: 't = d/v\n= 3.6 × 10¹¹ / 3.0 × 10⁸\n= 1200 s\n= 1200 / 60\n= 20 minutes',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Scientists calculate a precise **launch date** for a rocket to travel from Earth to Mars.\n\n**Explain** why the launch date is important for a mission to Mars.',
        marks: 2,
        ph: 'The launch date is calculated to minimise the distance between Earth and Mars (since both planets are in different orbital positions). A shorter distance means:\n- Less travel time for the spacecraft\n- Less fuel needed\n- Less communication delay\nLaunching at the wrong time would mean travelling a much greater distance.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Mars Missions Evaluation (13 marks) Criterion D
  // Context: Evaluating Mars missions from technical, economic, and political perspectives
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society',
    marks: 13,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['space exploration', 'evaluation', 'evidence', 'stakeholders'], level: 'proficient' },
    stem: 'Several space agencies and private companies are planning crewed missions to Mars within the next few decades. The table below summarises proposed Mars missions and their objectives.',
    figImages: [`${P}q7-mars-missions.png`],
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** the proposal to send humans to Mars. In your answer, discuss:\n\n- At least **two technical challenges** involved in planning the journey to Mars (with scientific explanations)\n- **Economic advantages and disadvantages** for the government of a country funding the mission\n- **Political implications** of a crewed Mars mission\n- A **concluding appraisal** of whether the mission should proceed\n\nUse evidence and scientific reasoning to support your points.',
        marks: 13,
        ph: 'Technical challenges:\n1. Distance/communication delay — signals take 20 minutes each way, making real-time communication impossible. Engineers must design autonomous systems.\n2. Radiation exposure — Mars has no protective magnetosphere; astronauts face high doses of cosmic radiation, increasing cancer risk. Shielding is needed.\n3. (Others: low gravity effects, food/water supply, life support systems)\n\nEconomic advantages: technological spin-offs, creation of jobs, international prestige, potential resource extraction.\nEconomic disadvantages: enormous cost (estimated $500 billion+), opportunity cost (could fund healthcare/education), uncertain return on investment.\n\nPolitical implications: national prestige and soft power, international cooperation or competition, debate over resource rights on Mars.\n\nConclusion: Weigh the long-term scientific benefits against short-term costs; a collaborative international mission would distribute costs and share benefits.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Mars Environment Challenges (6 marks) Criterion D
  // Context: Scientific challenges of living on Mars
  // ─────────────────────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society',
    marks: 6,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['space', 'temperature', 'radiation', 'gravity', 'colonisation'], level: 'proficient' },
    stem: 'Some scientists propose that humans could eventually live permanently on Mars. However, the environment on Mars is very different from Earth.',
    tasks: [
      {
        label: 'a',
        text: '**Discuss** the challenges of living on Mars by explaining the effect of each factor listed below on human colonisers, and suggesting how each challenge could be overcome:\n\n1. **Low temperature** (average surface temperature is −60 °C)\n2. **Radiation** (Mars has a very thin atmosphere and no global magnetic field)\n3. **Low gravity** (Mars has 38% of Earth\'s surface gravity)',
        marks: 6,
        ph: '1. Low temperature:\n   Effect: Too cold for humans to survive; too cold to grow food outdoors.\n   Solution: Insulated habitats that minimise heat transfer; heated growing chambers for food production.\n\n2. Radiation:\n   Effect: High exposure to cosmic rays and solar radiation; increased risk of cancer and cell damage.\n   Solution: Underground habitats (Martian rock provides shielding); reflective suits; radiation-absorbing materials.\n\n3. Low gravity:\n   Effect: Bone density loss and muscle wasting over time; cardiovascular problems; difficulties moving.\n   Solution: Regular exercise programmes to maintain muscle mass; possible use of rotating habitat sections to simulate gravity.',
        level: 'advanced',
      },
    ],
  },

]
