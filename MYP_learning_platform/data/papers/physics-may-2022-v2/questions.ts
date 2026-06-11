import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2022-v2/'

export const paperMeta = {
  id: 'physics-may-2022-v2',
  subject: 'Physics',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Forces & Motion: Aerodynamic Submarine Design (11 marks) Criterion A
  // V2: High-speed underwater drone modelled on shark skin/profile
  // Tunnel (pipe): v_in=80 m/s, v_out=60 m/s, t=20 s → L=(80+60)/2×20=70×20=1400 m
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
    stem: 'Engineers studied the skin texture of sharks to redesign the hull of a high-speed underwater vehicle. The tiny V-shaped ridges (denticles) on shark skin reduce drag by disrupting turbulent water flow. The diagrams below show the vehicle and the shark that inspired its design.',
    figImages: [`${P}q1-shark-vehicle.png`],
    tasks: [
      {
        label: 'a',
        text: 'The underwater vehicle uses electric motors that produce a total thrust of **380 000 N**.\n\n**State** the unit of thrust.',
        marks: 1,
        ph: 'newtons (N)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The diagrams below show the forces on the vehicle in two situations.\n\n**Identify** which diagram shows the vehicle:\n- Travelling at **constant speed**\n- **Decelerating**\n\nExplain your reasoning for each.',
        marks: 2,
        ph: 'Diagram [X] shows constant speed: thrust = drag, forces are balanced, net force = 0.\nDiagram [Y] shows deceleration: drag > thrust, net force is backward, vehicle slows down.',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The original vehicle had a smooth cylindrical hull. The shark-skin inspired design has micro-ridges on its surface.\n\n**Explain** how the micro-ridge design allows the vehicle to travel at higher speeds.\n\nIn your answer, refer to:\n- drag force\n- balanced forces\n- the surface texture of the vehicle',
        marks: 3,
        ph: 'The micro-ridges break up turbulent water flow around the hull, reducing drag force (water resistance). With less drag, the thrust and drag balance at a higher speed. The textured surface disrupts the turbulent boundary layer, allowing water to flow more smoothly, just as it does along a shark\'s body.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The vehicle enters a water pipe and decelerates while travelling through it. The velocity–time graph shows the motion through the pipe.\n\nThe vehicle enters at **80 m s⁻¹** and exits at **60 m s⁻¹** after **20 seconds**.\n\n**Calculate** the length of the pipe section. Show your working.',
        marks: 3,
        figImages: [`${P}q1d-speed-graph.png`],
        ph: 'Length = area under v–t graph (trapezoid)\n= (v₁ + v₂)/2 × t\n= (80 + 60)/2 × 20\n= 70 × 20\n= **1400 m**',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The graph from part (d) shows the original vehicle entering the pipe at the same speed.\n\nThe redesigned shark-skin vehicle enters the **same pipe** at the **same initial speed** but exits at a **higher speed** (less drag).\n\n**Draw** a line on the graph to represent the motion of the redesigned vehicle through the pipe.',
        marks: 2,
        figImages: [`${P}q1d-speed-graph.png`],
        ph: 'Draw a line starting at v = 80 m/s at the same start time as the original. The new line lies above the original throughout — it decelerates less steeply (less drag) and exits at a speed higher than 60 m/s.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Electricity: Step-Up Transformer (7 marks) Criterion A
  // V2: Step-up transformer for wind farm grid connection
  // Np=450, Ns=9000, Vs=6600 V → Vp=330 V; Efficiency=88%, Pin=25000 W → Pout=22000 W
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
    stem: 'Wind farms generate electricity at a relatively low voltage. A step-up transformer is used to increase the voltage before electricity is fed into the national grid. The diagram below shows the transformer connecting a wind turbine to the high-voltage transmission line.',
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
        text: 'A step-up transformer has **450 turns** in the primary coil and **9 000 turns** in the secondary coil. The secondary (output) voltage is **6 600 V**.\n\n**Calculate** the primary (input) voltage.',
        marks: 2,
        ph: 'Vp/Vs = Np/Ns\nVp = Vs × (Np/Ns)\n= 6600 × (450/9000)\n= 6600 × (1/20)\n= **330 V**',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'A real transformer has an efficiency of **88%**. The power input to the transformer is **25 000 W**.\n\n**Calculate** the useful power output.',
        marks: 2,
        ph: 'Power output = efficiency × power input\n= 0.88 × 25000\n= **22 000 W**',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'Electricity is transmitted at very high voltages across the national grid.\n\n**Explain** why high voltage is used for transmitting electricity over long distances. In your answer, refer to current and energy losses.',
        marks: 2,
        ph: 'High voltage → low current (for same power, P = IV). Lower current → less heating in cables (P_waste = I²R). So less energy is wasted as heat, and more electricity reaches consumers.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Thermal Physics: Ice Melting in Sugar Syrup (9 marks) Criterion A
  // V2: Ice melting in fresh water vs concentrated sugar syrup
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
    stem: 'A student compares how fast an ice cube melts when placed in a cup of fresh water versus a cup of concentrated sugar syrup. Both liquids are at the same initial temperature. Concentrated sugar syrup is significantly denser than fresh water.',
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
        text: 'The student notices moisture forming on the **outside** of the cold cup.\n\n**Select** the correct name for this process.\n\nA. Evaporation\nB. Melting\nC. Sublimation\nD. Condensation',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Evaporation', 'B. Melting', 'C. Sublimation', 'D. Condensation'],
        ph: 'D',
        level: 'foundation',
      },
      {
        label: 'c',
        text: '**Name** the process by which water droplets formed on the outer surface of the cold cup.',
        marks: 1,
        ph: 'Condensation',
        level: 'foundation',
      },
      {
        label: 'd',
        text: '**Explain** why condensation occurs on the outside surface of the cold cup.',
        marks: 1,
        ph: 'The cup surface is cold. Water vapour in the warm surrounding air loses thermal energy on contact with the cold surface and changes state to liquid water (condenses).',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The student finds that the ice melts more **slowly** in the sugar syrup than in the fresh water.\n\n**Explain** this observation using ideas about heat transfer by convection and the density of the sugar syrup.',
        marks: 3,
        ph: 'Sugar syrup is more dense than fresh water. As the ice melts, the cold fresh meltwater produced is less dense than the surrounding syrup. The cold meltwater cannot sink through the denser syrup, forming an insulating cold layer around the ice. This suppresses convection currents, reducing the rate of heat transfer to the ice and slowing the melting.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'The student gently heats the sugar syrup on a hot plate while conducting the experiment.\n\n**Predict** and **explain** what would happen to the melting time of the ice in the sugar syrup.',
        marks: 2,
        ph: 'The ice would melt faster. Heating the sugar syrup increases the thermal energy of the liquid, increasing the temperature gradient between the liquid and ice. This increases the rate of heat transfer to the ice by convection, speeding up the melting.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Waves/Sound: Bottle Length & Frequency (16 marks) Criterion B/C
  // V2: Blowing across bottles of different lengths; speed of sound = 360 m/s
  // Data: 0.20→1800, 0.25→1440, 0.30→1200, 0.40→900 (missing 1/L=2.5), 0.50→720 Hz
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Waves & Sound — Bottle Resonance',
    marks: 16,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['sound', 'frequency', 'wavelength', 'inverse proportion'], level: 'proficient' },
    stem: 'A student investigates how the length of air column inside a glass bottle affects the frequency of the sound produced when air is blown across the bottle\'s opening. The student\'s hypothesis is: "As the length of the air column increases, the frequency of the sound produced decreases (inverse proportion)."',
    figImages: [`${P}q4-bottles-setup.png`],
    tasks: [
      {
        label: 'a',
        text: '**Write** a suitable research question for this investigation.',
        marks: 1,
        ph: 'How does the length of the air column inside a bottle affect the frequency of the sound produced?',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The student is given the following equipment:\n\n- 5 identical glass bottles with different water levels (air column lengths: 20 cm, 25 cm, 30 cm, 40 cm, 50 cm)\n- 3 identical glass bottles with a larger diameter\n- 4 plastic bottles of the same diameter as the first set\n- A frequency meter\n- A ruler\n\n**Select** the most appropriate equipment to use, and **justify** your selection.',
        marks: 3,
        ph: 'Select: 5 identical glass bottles with air column lengths 20, 25, 30, 40, 50 cm.\nJustification:\n- Same material (glass) controls the effect of material properties.\n- Same diameter controls cross-sectional area of air column.\n- 5 lengths gives sufficient data to identify pattern and plot a graph.',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Identify** the independent variable in this investigation.\n\n**State** two variables that should be controlled, and **explain** why each must be controlled.',
        marks: 2,
        ph: 'Independent variable: length of air column (height of air above water).\n\nControl variables:\n1. Bottle diameter — wider bottle → different air column volume → different frequency.\n2. Bottle material — different materials resonate differently, affecting frequency.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The student produces a graph of **frequency (Hz)** against **air column length (m)**.\n\n**Use** two data points from the graph to determine whether the data supports the hypothesis. **State** your conclusion.',
        marks: 3,
        figImages: [`${P}q4d-data-table.png`],
        ph: 'Choose two data points, e.g. (0.20 m, 1800 Hz) and (0.40 m, 900 Hz).\nFor inverse proportion: L × f = constant.\n0.20 × 1800 = 360\n0.40 × 900 = 360\nProducts are equal → confirms inverse proportion.\nConclusion: Data supports the hypothesis.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The student creates a new table with an additional column for **1/Length (m⁻¹)**.\n\nPart of the table is shown below:\n\n| Length / m | Frequency / Hz | 1/Length / m⁻¹ |\n|------------|----------------|----------------|\n| 0.20 | 1800 | 5.0 |\n| 0.25 | 1440 | 4.0 |\n| 0.30 | 1200 | 3.3 |\n| **0.40** | **900** | **?** |\n| 0.50 | 720 | 2.0 |\n\n**Calculate** the missing value of 1/Length for the 0.40 m bottle.',
        marks: 1,
        ph: '1/0.40 = **2.5 m⁻¹**',
        level: 'foundation',
      },
      {
        label: 'f',
        text: 'The student plots a graph of **frequency (Hz)** on the y-axis against **1/Length (m⁻¹)** on the x-axis.\n\n**Plot** the data point for the bottle of length 0.40 m on the graph, and **draw** a line of best fit through all points.',
        marks: 2,
        figImages: [`${P}q4f-graph.png`],
        ph: 'Plot the point (2.5, 900) on the graph.\nDraw a straight line of best fit through the origin, with roughly equal numbers of data points above and below.',
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
        ph: 'Choose two points on the line of best fit.\nGradient = Δfrequency / Δ(1/length)\n= (1800 − 0) / (5.0 − 0) = **360 m s⁻¹**\n(Accept values 354–366 m s⁻¹)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Waves/Sound: Guitar String Tension (15 marks) Criterion C/B
  // V2: Mass = 0.60 kg → tension = 0.60 × 9.8 = 5.88 ≈ 5.9 N
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
    stem: 'A student investigates how the tension in a guitar string affects the frequency of the note produced. They attach different masses to one end of the wire, which is clamped at both ends, to change the tension.',
    figImages: [`${P}q5-guitar-setup.png`],
    tasks: [
      {
        label: 'a',
        text: 'The student hangs a mass of **0.60 kg** from the end of the wire.\n\n**Calculate** the tension in the wire. Use **g = 9.8 N kg⁻¹**.',
        marks: 2,
        ph: 'Tension = weight = mg\n= 0.60 × 9.8\n= 5.88 N ≈ **5.9 N**',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'The student wants to investigate how tension affects the frequency of the guitar string.\n\n**State** two variables that should be controlled in this investigation.',
        marks: 2,
        ph: 'Any two of:\n- Length of the wire (between the clamps)\n- Thickness (diameter) of the wire\n- Material of the wire\n- Method of plucking the string',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The student collects data for different masses hung on the wire. Part of their results table is shown below:\n\n| Tension / N | Frequency / Hz |\n|-------------|----------------|\n| 5.9 | 210 |\n| 23.5 | 420 |\n| 52.9 | 630 |\n| **75.2** | **750** |\n| 94.1 | 840 |\n\nA student accidentally records the tension for the fourth row as 74.8 N. The correct value, rounded consistently to 1 decimal place, is **75.2 N**.\n\n**Complete** the table, ensuring:\n- Column headers include the correct quantities and units\n- Results are recorded in ascending order\n- Values are rounded consistently',
        marks: 4,
        ph: 'The table should show:\n- Column headers: "Tension / N" and "Frequency / Hz"\n- Results in ascending order of tension (5.9, 23.5, 52.9, 75.2, 94.1)\n- Tensions to 1 d.p.; frequencies as whole numbers\n- 75.2 N correctly (not 74.8)',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Suggest** one improvement the student could make to this investigation to improve the quality of the data. **Explain** why this improvement would be beneficial.',
        marks: 2,
        ph: 'Improvement: Repeat each measurement at least 3 times and calculate a mean.\nExplanation: Reduces the impact of random error (e.g. imprecise plucking) and gives a more reliable result.',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The student wants to extend the investigation by changing the **independent variable** (currently: tension).\n\n**State** one new independent variable the student could investigate.\n\n**State** two variables that would need to be controlled if this new independent variable were used.',
        marks: 3,
        ph: 'New IV: Length of the wire\n\nControl variables (if length is IV):\n1. Tension (keep constant with same hanging mass)\n2. Material and diameter of wire',
        level: 'proficient',
      },
      {
        label: 'f',
        text: '**Write** a hypothesis for the new investigation you described in part (e).\n\nYour hypothesis should follow the format: "If [independent variable] increases, then [dependent variable] will ... because ..."',
        marks: 2,
        ph: 'If the length of the wire increases, then the frequency of the sound produced will decrease, because a longer wire vibrates at a lower natural frequency, producing a lower-pitched sound wave.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Sound Intensity: Bubble Wrap Layers (17 marks) Criterion C/B
  // V2: How layers of bubble wrap affect sound intensity level
  // Q6b: 2 layers → (116+115+114)/3=115 dB; 4 layers → (113+112+114)/3=113 dB
  // Q6c: mean of 6 and 8 layers = (109+103)/2=106 dB
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
    stem: 'A student investigates how layers of bubble wrap affect the sound intensity level measured on the other side of the barrier. They use a sound level meter placed a fixed distance from a speaker, with bubble wrap layers placed between them.',
    figImages: [`${P}q6-sound-bubblewrap.png`],
    tasks: [
      {
        label: 'a',
        text: 'The student takes **three measurements** for each number of bubble wrap layers.\n\n**State** one reason why taking three measurements improves the investigation.',
        marks: 1,
        ph: 'Taking three measurements allows identification of anomalous values and gives a more reliable mean result, reducing the effect of random error.',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The table below shows the student\'s results for **2 layers** of bubble wrap:\n\n| Trial | Sound intensity level / dB |\n|-------|---------------------------|\n| 1 | 116 |\n| 2 | 115 |\n| 3 | 114 |\n\nAnd for **4 layers** of bubble wrap:\n\n| Trial | Sound intensity level / dB |\n|-------|---------------------------|\n| 1 | 113 |\n| 2 | 112 |\n| 3 | 114 |\n\n**Calculate** the mean sound intensity level for **2 layers** and for **4 layers**.',
        marks: 2,
        ph: '2 layers: mean = (116 + 115 + 114) / 3 = 345/3 = **115 dB**\n4 layers: mean = (113 + 112 + 114) / 3 = 339/3 = **113 dB**',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The complete results for all numbers of layers are shown below:\n\n| Layers | Mean sound intensity level / dB |\n|--------|--------------------------------|\n| 0 | 120 |\n| 2 | 115 |\n| 4 | 113 |\n| 6 | 109 |\n| 8 | 103 |\n| 10 | 97 |\n\n**Calculate** the mean of the sound intensity levels for 6 and 8 layers combined.',
        marks: 1,
        ph: 'Mean = (109 + 103) / 2 = 212/2 = **106 dB**',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The student wants to design a **new investigation** using the available equipment. The investigation will test how the **number of layers of bubble wrap** affects the **sound intensity level** measured through it.\n\n**Design** a full investigation. In your answer, include:\n- The independent variable, dependent variable, and at least **two** control variables with justification\n- A **hypothesis** with a scientific explanation\n- A **method** that could be followed by another student\n- How you would **collect sufficient data** to draw a valid conclusion',
        marks: 13,
        figImages: [`${P}q6d-wall-model.png`],
        ph: 'Variables:\n- IV: number of bubble wrap layers\n- DV: sound intensity level (dB)\n- CV1: distance speaker to meter (changing distance changes intensity)\n- CV2: type/thickness of bubble wrap (different wrap → different properties)\n- CV3: sound frequency/volume of speaker\n\nHypothesis:\nIf number of bubble wrap layers increases, sound intensity level will decrease, because each layer traps air (poor conductor) and absorbs more sound energy.\n\nMethod:\n1. Place speaker and meter 50 cm apart; record baseline (0 layers)\n2. Place 2 layers between them; record 3 measurements\n3. Repeat for 4, 6, 8, 10 layers\n4. Calculate mean for each\n\nData: ≥5 values, 3 repeats, plot dB vs layers.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Space Physics: Mars at Farther Orbital Position (6 marks) Criterion A
  // V2: Mars at farther orbital position; d = 5.4×10¹¹ m → t = 1800 s = 30 minutes
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
    stem: 'Ancient astronomers noticed that the apparent position of Mars in the night sky appeared to move backwards relative to the stars at certain times of the year. This phenomenon is called retrograde motion.',
    figImages: [`${P}q7-mars.png`],
    tasks: [
      {
        label: 'a',
        text: 'Ancient astronomers believed in the **geocentric model** of the solar system (Earth at the centre).\n\n**Explain** why the retrograde motion of Mars was difficult to explain using the geocentric model.',
        marks: 2,
        ph: 'In the geocentric model, Mars orbits Earth in one direction — it should always appear to move in the same direction from Earth. Retrograde motion (apparent backward movement) cannot occur if Mars has a simple circular orbit around Earth.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'A signal is sent from Earth to a space probe orbiting Mars. At this orbital configuration, the distance between Earth and Mars is **5.4 × 10¹¹ m**. The speed of light (and radio waves) is **3.0 × 10⁸ m s⁻¹**.\n\n**Calculate** the time it takes for the signal to travel from Earth to Mars. Give your answer in **minutes**.',
        marks: 2,
        ph: 't = d/v\n= 5.4 × 10¹¹ / 3.0 × 10⁸\n= 1800 s\n= 1800 / 60\n= **30 minutes**',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Scientists calculate a precise **launch date** for a rocket to travel from Earth to Mars.\n\n**Explain** why the launch date is important for a mission to Mars.',
        marks: 2,
        ph: 'The launch date is chosen when Earth and Mars are at optimal orbital alignment, minimising travel distance. A shorter distance requires less fuel and travel time. If launched at the wrong alignment, the enormous extra distance makes the mission far more expensive and longer.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Mars Missions Evaluation (13 marks) Criterion D
  // V2: Same structure — evaluate robotic vs crewed Mars mission comparison
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
    stem: 'Several space agencies are debating whether to send robotic or crewed missions to Mars. The table below presents data on proposed missions from different agencies.',
    figImages: [`${P}q8-mars-missions.png`],
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** whether a crewed mission to Mars represents a better scientific investment than a robotic mission. In your answer, discuss:\n\n- At least **two technical advantages and two technical disadvantages** of sending humans compared to robots (with scientific explanations)\n- **Economic implications** for the space agency funding the mission\n- **Ethical considerations** for a crewed versus robotic approach\n- A **concluding appraisal** of which approach is more justified\n\nUse evidence and scientific reasoning to support your points.',
        marks: 13,
        ph: 'Technical advantages of crewed: real-time decision-making, fine motor dexterity for sample collection, adaptability to unexpected events.\nTechnical disadvantages of crewed: life support systems add mass/cost, radiation exposure, bone loss/muscle atrophy, communication delay prevents Earth-control.\nEconomic: crewed costs 10–100× more than robotic; robotic allows parallel missions at lower unit cost.\nEthical: human life risk vs scientific gain; who selects crew (representation); international cooperation vs national prestige.\nConclusion: Robotic missions currently offer better cost-to-science ratio; crewed missions justified for complex tasks requiring human judgment.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Mars Environment Challenges (6 marks) Criterion D
  // V2: Same 3 factors — temperature, radiation, low gravity
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
    stem: 'A Mars colony would face extreme environmental conditions. Scientists and engineers must find ways to support human life in these conditions over a long period.',
    tasks: [
      {
        label: 'a',
        text: '**Discuss** the challenges of living on Mars by explaining the effect of each factor listed below on human colonisers, and suggesting how each challenge could be overcome:\n\n1. **Low temperature** (average surface temperature −60 °C)\n2. **Radiation** (Mars has no global magnetic field and a very thin atmosphere)\n3. **Low gravity** (Mars has 38% of Earth\'s surface gravity)',
        marks: 6,
        ph: '1. Low temperature:\n   Effect: Impossible to survive outside without protection; water freezes; crops cannot grow outdoors.\n   Solution: Pressurised, insulated domed habitats; geothermal heating.\n\n2. Radiation:\n   Effect: High exposure to solar wind and cosmic rays; increases cancer risk and cellular DNA damage.\n   Solution: Build underground habitat; use lead/polyethylene shielding; radiation-resistant construction materials.\n\n3. Low gravity:\n   Effect: Muscles and bones weaken over months; cardiovascular system adapts (heart shrinks); balance disruption.\n   Solution: Daily resistance exercise regime; centrifuge facilities; calcium and vitamin D supplements.',
        level: 'advanced',
      },
    ],
  },

]
