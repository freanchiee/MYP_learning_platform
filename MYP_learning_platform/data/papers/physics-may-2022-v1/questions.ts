import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2022-v1/'

export const paperMeta = {
  id: 'physics-may-2022-v1',
  subject: 'Physics',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Forces & Motion: TGV Train Aerodynamics (11 marks) Criterion A
  // V1: TGV bullet train redesigned based on the peregrine falcon's beak profile
  // Tunnel: v_in=75 m/s, v_out=55 m/s, t=25 s → L=(75+55)/2×25=1625 m
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
    stem: 'Engineers redesigned a high-speed TGV train after studying the streamlined beak of the peregrine falcon. The new train design has a tapered nose that reduces drag and allows higher speeds. The diagrams below show the train and the falcon that inspired it.',
    figImages: [`${P}q1-tgv.png`],
    tasks: [
      {
        label: 'a',
        text: 'The train uses electric motors to travel. The total driving force produced is 420 000 N. **State** the unit of force.',
        marks: 1,
        ph: 'newtons (N)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The diagrams below show the forces on the train in two different situations.\n\n**Identify** which diagram shows the train:\n- Travelling at **constant speed**\n- **Accelerating** forward\n\nExplain your reasoning for each.',
        marks: 2,
        ph: 'Diagram [X] shows constant speed because the forces are balanced (resultant = 0).\nDiagram [Y] shows acceleration because the thrust force is greater than the drag force (unbalanced forces).',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The original train design had a flat front. The redesigned train has a tapered nose modelled on the peregrine falcon\'s beak.\n\n**Explain** how the redesigned tapered nose allows the train to travel at higher speeds. In your answer, refer to:\n- the drag force\n- balanced forces\n- the shape of the train',
        marks: 3,
        ph: 'The streamlined tapered nose reduces the drag force (air resistance). With less drag, the forces on the train become balanced at a higher speed — the train does not need as much thrust to overcome drag. The streamlined shape allows air to flow smoothly around the train rather than pushing against a flat face.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The train enters a tunnel and decelerates while travelling through it. The velocity–time graph below shows the train\'s motion through the tunnel.\n\nThe train enters at **75 m s⁻¹** and exits at **55 m s⁻¹** after **25 seconds**.\n\n**Calculate** the length of the tunnel. Show your working.',
        marks: 3,
        figImages: [`${P}q1d-speed-graph.png`],
        ph: 'Length = area under v–t graph (trapezoid)\n= (v₁ + v₂)/2 × t\n= (75 + 55)/2 × 25\n= 65 × 25\n= **1625 m**',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The graph from part (d) shows the original train entering the tunnel at a certain speed.\n\nThe redesigned train enters the **same tunnel** at the **same speed** but exits at a **higher speed** (due to reduced drag).\n\n**Draw** a line on the graph to represent the motion of the redesigned train through the tunnel. The train enters at the same time and position.',
        marks: 2,
        figImages: [`${P}q1d-speed-graph.png`],
        ph: 'Draw a line starting at the same y-intercept (75 m/s) as the original. The new line should remain above the original at all times (higher speed throughout). It can show less deceleration or same initial deceleration but higher exit speed. Must not show acceleration above initial speed.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Electricity: Step-Down Transformer (7 marks) Criterion A
  // V1: Step-down transformer for household appliance
  // Np=2400, Ns=120, Vs=6.0 V → Vp=120 V; Efficiency=92%, Pin=8500 W → Pout=7820 W
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity — Transformers',
    marks: 7,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['transformers', 'power', 'voltage', 'current'], level: 'proficient' },
    stem: 'Transformers are used in household electronics to step down the mains voltage to a lower voltage suitable for devices. The diagram below shows a step-down transformer used in a laptop power adapter.',
    figImages: [`${P}q2-transformer.png`],
    tasks: [
      {
        label: 'a',
        text: 'A transformer is described as \'ideal\' when it has no energy losses.\n\n**State** the relationship between the power input and power output in an ideal transformer.',
        marks: 1,
        ph: 'Power input = Power output',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'A step-down transformer has **2400 turns** in the primary coil and **120 turns** in the secondary coil. The secondary (output) voltage is **6.0 V**.\n\n**Calculate** the primary (input) voltage.',
        marks: 2,
        ph: 'Vp/Vs = Np/Ns\nVp = Vs × (Np/Ns)\n= 6.0 × (2400/120)\n= 6.0 × 20\n= **120 V**',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'A real transformer has an efficiency of **92%**. The power input to the transformer is **8500 W**.\n\n**Calculate** the useful power output.',
        marks: 2,
        ph: 'Power output = efficiency × power input\n= 0.92 × 8500\n= **7820 W**',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'Electricity is transmitted at very high voltages across the national grid.\n\n**Explain** why high voltage is used for transmitting electricity over long distances. In your answer, refer to current and energy losses.',
        marks: 2,
        ph: 'Increasing the voltage reduces the current in the transmission cables. Since energy is wasted as heat (P = I²R), a lower current means much less energy wasted as heat, so more power reaches consumers efficiently.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Thermal Physics: Ice Melting in Sea Water (9 marks) Criterion A/B
  // V1: Ice melting in fresh water vs sea water (density effect on convection)
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Physics — Ice Melting',
    marks: 9,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'conduction', 'convection', 'density'], level: 'proficient' },
    stem: 'A student investigates how quickly ice melts when placed in different liquids. They compare two cups — one containing fresh water and one containing sea water — both at the same initial temperature. Sea water is denser than fresh water due to dissolved salts.',
    figImages: [`${P}q3-ice-cups.png`],
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
        text: 'The student finds that the ice melts more **slowly** in the sea water than in the fresh water.\n\n**Explain** this observation using ideas about heat transfer by convection and the density of sea water.',
        marks: 3,
        ph: 'Sea water is more dense than fresh water. As the ice melts, the cold fresh meltwater produced is less dense than the surrounding sea water. This cold meltwater stays near the ice (it cannot sink through the denser sea water), forming a cold layer around the ice. This reduces convection currents, so heat is transferred less quickly to the ice, causing it to melt more slowly.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'The student stirs the sea water with a spoon throughout the experiment.\n\n**Predict** and **explain** what would happen to the melting time of the ice in the sea water.',
        marks: 2,
        ph: 'Stirring distributes the cold melt water throughout the cup, increasing convection currents. This increases the rate of heat transfer to the ice, so the melting time decreases — the ice melts faster.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Waves/Sound: PVC Pipe Length & Frequency (16 marks) Criterion B/C
  // V1: Blowing PVC pipes of different lengths; speed of sound = 336 m/s
  // Data: 0.20→1680, 0.25→1344, 0.30→1120, 0.40→840 (missing 1/L=2.5), 0.50→672 Hz
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Waves & Sound — Pipe Resonance',
    marks: 16,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['sound', 'frequency', 'wavelength', 'inverse proportion'], level: 'proficient' },
    stem: 'A student investigates how the length of a PVC pipe affects the frequency of the sound it produces when air is blown across the open end. The student\'s hypothesis is: "As the length of a pipe increases, the frequency of the sound produced decreases (inverse proportion)."',
    figImages: [`${P}q4-pipes-setup.png`],
    tasks: [
      {
        label: 'a',
        text: '**Write** a suitable research question for this investigation.',
        marks: 1,
        ph: 'How does the length of a PVC pipe affect the frequency of the sound it produces?',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The student is given the following equipment:\n\n- 5 PVC pipes of **2.5 cm** diameter (lengths: 20 cm, 25 cm, 30 cm, 40 cm, 50 cm)\n- 3 PVC pipes of **4.0 cm** diameter\n- 4 copper pipes of **2.5 cm** diameter\n- A frequency meter\n- A ruler\n\n**Select** the most appropriate equipment to use, and **justify** your selection.',
        marks: 3,
        ph: 'Select: 5 PVC pipes of 2.5 cm diameter.\nJustification:\n- Only one material (PVC) — different materials have different properties that could affect frequency (control variable).\n- Only one diameter (2.5 cm) — different diameter changes the air column volume, affecting frequency (control variable).\n- Five lengths provides sufficient data to identify the pattern.',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Identify** the independent variable in this investigation.\n\n**State** two variables that should be controlled, and **explain** why each must be controlled.',
        marks: 2,
        ph: 'Independent variable: length of pipe.\n\nControl variables:\n1. Material (PVC) — different materials resonate differently, affecting frequency.\n2. Diameter — different diameter changes the volume of air inside, affecting the frequency produced.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The student produces a graph of **frequency (Hz)** against **pipe length (m)**.\n\nThe student takes two data points from the graph to test if the relationship is an inverse proportion.\n\n**Use** two data points from the graph to determine whether the data supports the hypothesis. **State** your conclusion.',
        marks: 3,
        figImages: [`${P}q4d-data-table.png`],
        ph: 'Choose two data points, e.g. (0.20 m, 1680 Hz) and (0.40 m, 840 Hz).\nFor inverse proportion: L × f = constant.\n0.20 × 1680 = 336\n0.40 × 840 = 336\nThe products are equal → confirms inverse proportion.\nConclusion: Data supports the hypothesis — as length doubles, frequency halves.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The student creates a new table with an additional column for **1/Length (m⁻¹)**.\n\nPart of the table is shown below:\n\n| Length / m | Frequency / Hz | 1/Length / m⁻¹ |\n|------------|----------------|----------------|\n| 0.20 | 1680 | 5.0 |\n| 0.25 | 1344 | 4.0 |\n| 0.30 | 1120 | 3.3 |\n| **0.40** | **840** | **?** |\n| 0.50 | 672 | 2.0 |\n\n**Calculate** the missing value of 1/Length for the 0.40 m pipe.',
        marks: 1,
        ph: '1/0.40 = **2.5 m⁻¹**',
        level: 'foundation',
      },
      {
        label: 'f',
        text: 'The student plots a graph of **frequency (Hz)** on the y-axis against **1/Length (m⁻¹)** on the x-axis.\n\n**Plot** the data point for the pipe of length 0.40 m on the graph, and **draw** a line of best fit through all points.',
        marks: 2,
        figImages: [`${P}q4f-graph.png`],
        ph: 'Plot the point (2.5, 840) on the graph.\nDraw a straight line of best fit through the origin, with roughly equal numbers of data points above and below.',
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
        figImages: [`${P}q4f-graph.png`],
        ph: 'Choose two points on the line of best fit.\nGradient = Δfrequency / Δ(1/length)\n= (1680 − 0) / (5.0 − 0) = **336 m s⁻¹**\n(Accept values 330–342 m s⁻¹)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Waves/Sound: Guitar String Tension (15 marks) Criterion C/B
  // V1: Mass = 0.45 kg → tension = 0.45 × 9.8 = 4.41 ≈ 4.4 N
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Sound — Guitar String',
    marks: 15,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['frequency', 'tension', 'sound', 'investigation design'], level: 'proficient' },
    stem: 'A student investigates how the tension in a guitar string affects the frequency of the note produced. They attach different masses to the end of the wire to change the tension.',
    figImages: [`${P}q5-guitar-setup.png`],
    tasks: [
      {
        label: 'a',
        text: 'The student hangs a mass of **0.45 kg** from the end of the wire.\n\n**Calculate** the tension in the wire. Use **g = 9.8 N kg⁻¹**.',
        marks: 2,
        ph: 'Tension = weight = mg\n= 0.45 × 9.8\n= 4.41 N ≈ **4.4 N**',
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
        text: 'The student collects data for different masses hung on the wire. Part of their results table is shown below:\n\n| Tension / N | Frequency / Hz |\n|-------------|----------------|\n| 4.4 | 165 |\n| 17.6 | 330 |\n| 39.6 | 495 |\n| **56.2** | **660** |\n| 70.6 | 748 |\n\nA student accidentally records the tension for the fourth row as 55.8 N. The correct value, rounded consistently to 1 decimal place, is **56.2 N**.\n\n**Complete** the table, ensuring:\n- Column headers include the correct quantities and units\n- Results are recorded in ascending order\n- Values are rounded consistently',
        marks: 4,
        ph: 'The table should show:\n- Column headers: "Tension / N" and "Frequency / Hz"\n- Results in ascending order of tension (4.4, 17.6, 39.6, 56.2, 70.6)\n- Tensions to 1 d.p.; frequencies as whole numbers\n- 56.2 N correctly (not 55.8)',
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
        ph: 'New IV: Length of the wire\n\nControl variables (if length is new IV):\n1. Tension (keep constant using same hanging mass)\n2. Material/thickness of wire',
        level: 'proficient',
      },
      {
        label: 'f',
        text: '**Write** a hypothesis for the new investigation you described in part (e).\n\nYour hypothesis should follow the format: "If [independent variable] increases, then [dependent variable] will ... because ..."',
        marks: 2,
        ph: 'If the length of the wire increases, then the frequency of the sound produced will decrease, because a longer wire has a lower natural vibration frequency, producing a lower-pitched sound.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Sound Intensity: Foam Layers (17 marks) Criterion C/B
  // V1: How layers of acoustic foam affect sound intensity level
  // Q6b: 2 layers → (111+110+112)/3=111 dB; 4 layers → (108+109+107)/3=108 dB
  // Q6c: mean of 6 and 8 layers = (104+98)/2=101 dB
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Sound — Sound Intensity',
    marks: 17,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['sound intensity', 'investigation design', 'data analysis'], level: 'proficient' },
    stem: 'A student investigates how layers of acoustic foam affect the sound intensity level measured on the other side. They use a sound level meter placed a fixed distance from a speaker, with foam layers placed between the speaker and the meter.',
    figImages: [`${P}q6-sound-foam.png`],
    tasks: [
      {
        label: 'a',
        text: 'The student takes **three measurements** for each number of foam layers.\n\n**State** one reason why taking three measurements improves the investigation.',
        marks: 1,
        ph: 'Taking three measurements improves reliability — it allows identification of anomalous results and calculation of a more accurate mean.',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The table below shows the student\'s results for **2 layers** of foam:\n\n| Trial | Sound intensity level / dB |\n|-------|---------------------------|\n| 1 | 111 |\n| 2 | 110 |\n| 3 | 112 |\n\nAnd for **4 layers** of foam:\n\n| Trial | Sound intensity level / dB |\n|-------|---------------------------|\n| 1 | 108 |\n| 2 | 109 |\n| 3 | 107 |\n\n**Calculate** the mean sound intensity level for **2 layers** and for **4 layers**.',
        marks: 2,
        ph: '2 layers: mean = (111 + 110 + 112) / 3 = 333/3 = **111 dB**\n4 layers: mean = (108 + 109 + 107) / 3 = 324/3 = **108 dB**',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The complete results for all numbers of layers are shown below:\n\n| Layers | Mean sound intensity level / dB |\n|--------|--------------------------------|\n| 0 | 120 |\n| 2 | 111 |\n| 4 | 108 |\n| 6 | 104 |\n| 8 | 98 |\n| 10 | 92 |\n\n**Calculate** the mean of the sound intensity levels for 6 and 8 layers combined.',
        marks: 1,
        ph: 'Mean = (104 + 98) / 2 = 202/2 = **101 dB**',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The student wants to design a **new investigation** using the equipment shown. The investigation will test how the **number of layers of acoustic foam** affects the **sound intensity level** measured through the foam barrier.\n\n**Design** a full investigation. In your answer, include:\n- The independent variable, dependent variable, and at least **two** control variables with justification\n- A **hypothesis** with a scientific explanation\n- A **method** that could be followed by another student\n- How you would **collect sufficient data** to draw a valid conclusion',
        marks: 13,
        figImages: [`${P}q6d-wall-model.png`],
        ph: 'Variables:\n- IV: number of layers of foam\n- DV: sound intensity level (dB, measured using sound level meter)\n- CV1: distance between speaker and meter (same distance — changing distance changes intensity independently)\n- CV2: type and thickness of foam (same material — different materials absorb differently)\n- CV3: volume/frequency of speaker output\n\nHypothesis:\nIf the number of foam layers increases, the sound intensity level measured will decrease, because each layer absorbs some sound energy, so more layers → greater total absorption.\n\nMethod:\n1. Place speaker and sound level meter 50 cm apart\n2. Record level with 0 layers, 3 trials\n3. Add 2 foam layers; record 3 measurements\n4. Repeat for 4, 6, 8, 10 layers\n5. Calculate mean for each\n\nData: ≥5 values, 3 repeats, graph of dB vs layers.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Space Physics: Mars at Closer Approach (6 marks) Criterion A/D
  // V1: Mars at closer orbital position; d = 1.8×10¹¹ m → t = 600 s = 10 minutes
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Space Physics — Mars Communication',
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
        ph: 'In the geocentric model, Mars orbits Earth in a circular/elliptical path. A Mars orbiting Earth would always appear to move in the same direction from Earth\'s perspective. Retrograde motion — Mars appearing to reverse direction — cannot be explained by simple circular orbit around Earth.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'A signal is sent from Earth to a rover on Mars. The distance between Earth and Mars at this orbital position is **1.8 × 10¹¹ m**. The speed of light (and radio waves) is **3.0 × 10⁸ m s⁻¹**.\n\n**Calculate** the time it takes for the signal to travel from Earth to Mars. Give your answer in **minutes**.',
        marks: 2,
        ph: 't = d/v\n= 1.8 × 10¹¹ / 3.0 × 10⁸\n= 600 s\n= 600 / 60\n= **10 minutes**',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Scientists calculate a precise **launch date** for a rocket to travel from Earth to Mars.\n\n**Explain** why the launch date is important for a mission to Mars.',
        marks: 2,
        ph: 'The launch date is calculated for when Earth and Mars are optimally positioned — minimising travel distance. A shorter distance means less travel time, less fuel needed, and less communication delay. Launching at the wrong orbital alignment would greatly increase the distance and fuel cost.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Mars Missions Evaluation (13 marks) Criterion D
  // V1: Same structure as source — evaluate crewed Mars mission
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society — Mars Missions',
    marks: 13,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['space exploration', 'evaluation', 'evidence', 'stakeholders'], level: 'proficient' },
    stem: 'Several space agencies and private companies are planning crewed missions to Mars. The table below summarises the proposed mission profiles and scientific objectives of these organisations.',
    figImages: [`${P}q8-mars-missions.png`],
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** the proposal to send humans to Mars. In your answer, discuss:\n\n- At least **two technical challenges** involved in planning the journey to Mars (with scientific explanations)\n- **Economic advantages and disadvantages** for the government of a country funding the mission\n- **Political implications** of a crewed Mars mission\n- A **concluding appraisal** of whether the mission should proceed\n\nUse evidence and scientific reasoning to support your points.',
        marks: 13,
        ph: 'Technical challenges:\n1. Communication delay — signals take 10–20 min each way; real-time control impossible; requires autonomous systems.\n2. Long exposure to radiation — Mars lacks magnetosphere; cosmic ray exposure increases cancer risk; shielding required.\n3. (Others: bone/muscle loss in reduced gravity, closed-loop life support, food production)\n\nEconomic advantages: technological innovation (spin-offs in medicine, materials, computing), job creation, national prestige, potential long-term resource access.\nDisadvantages: cost ($200–500B), opportunity cost (healthcare, education, climate), no guaranteed short-term return.\n\nPolitical: enhances geopolitical status, may drive international cooperation, raises question of Mars territorial rights.\n\nConclusion: Benefits are significant but costs are enormous; an international collaborative approach distributes both cost and benefit equitably.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Mars Environment Challenges (6 marks) Criterion D
  // V1: Same 3 factors — temperature, radiation, low gravity
  // ─────────────────────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society — Life on Mars',
    marks: 6,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['space', 'temperature', 'radiation', 'gravity', 'colonisation'], level: 'proficient' },
    stem: 'Some scientists propose that humans could eventually live permanently on Mars. However, the environment on Mars is very different from Earth\'s, presenting serious challenges for colonisers.',
    tasks: [
      {
        label: 'a',
        text: '**Discuss** the challenges of living on Mars by explaining the effect of each factor listed below on human colonisers, and suggesting how each challenge could be overcome:\n\n1. **Low temperature** (average surface temperature −60 °C)\n2. **Radiation** (Mars has a very thin atmosphere and no global magnetic field)\n3. **Low gravity** (Mars has 38% of Earth\'s surface gravity)',
        marks: 6,
        ph: '1. Low temperature:\n   Effect: Too cold for humans without protection; cannot grow food outdoors.\n   Solution: Insulated, heated habitats; enclosed growing chambers.\n\n2. Radiation:\n   Effect: High cosmic ray and UV exposure; increased cancer risk; DNA damage.\n   Solution: Underground habitats (rock shielding); radiation-resistant suits; radiation-absorbing building materials.\n\n3. Low gravity:\n   Effect: Bone density loss, muscle wasting, cardiovascular effects over months.\n   Solution: Regular resistance exercise programmes; possible rotating habitat sections to simulate gravity.',
        level: 'advanced',
      },
    ],
  },

]
