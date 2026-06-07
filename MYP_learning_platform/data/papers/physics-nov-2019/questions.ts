import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-nov-2019',
  subject: 'Physics',
  session: 'November',
  year: 2019,
  totalMarks: 99,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

const P = '/images/papers/physics-nov-2019/'

export const questions: Question[] = [

  // ─── Q1: Motion and Momentum (7 marks, Criterion A) ───
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Interactions — Momentum',
    marks: 7,
    tags: { unit: 'forces-interactions', topics: ['momentum', 'Newton\'s laws', 'inertia', 'friction'], level: 'proficient' },
    stem: 'This question is about motion and momentum. To calculate an object\'s momentum, we use the equation p = mv.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the units in which each of the quantities is measured.\n\n| Symbol | Quantity | Unit |\n|--------|----------|------|\n| p | momentum | ? |\n| m | mass | ? |\n| v | velocity | ? |',
        marks: 2,
        ph: 'State the SI unit for each: momentum = Ns or kg m s⁻¹; mass = kg; velocity = m s⁻¹.',
      },
      {
        label: 'b',
        text: 'A man is sitting on a moving train. The man and the train are both travelling at a speed of 5 m s⁻¹. **State** why the train has more momentum than the man.',
        marks: 1,
        ph: 'Refer to mass: the train has a greater mass than the man.',
      },
      {
        label: 'c',
        text: 'Two children are sitting on the same moving train; one child places a ball on the floor and the other places a large bag on the floor. When the train comes to a complete stop, the ball rolls forward. Use Newton\'s Laws to **explain** why the ball moves forward after the train has stopped.',
        marks: 3,
        ph: 'Three steps: (1) the ball has forward momentum / is moving forward at 5 m s⁻¹; (2) a force is required to change an object\'s momentum; (3) no net force acts on the ball, so its velocity stays the same (Newton\'s 1st law / inertia).',
      },
      {
        label: 'd',
        text: 'The child\'s large bag does not move when the train comes to a complete stop. **Suggest** why the bag does not move.',
        marks: 1,
        ph: 'Friction (between bag and floor) creates a force that prevents the bag from moving.',
      },
    ],
  },

  // ─── Q2: Smog filter / electricity / ionization (7 marks, Criterion A) ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity & Circuits — Power and Charge',
    marks: 7,
    tags: { unit: 'electricity-circuits', topics: ['electrical power', 'current', 'electrostatic attraction', 'ionization'], level: 'proficient' },
    stem: 'Pollution in cities often causes smog which can be harmful when breathed in. Smog contains a mixture of polluting gases and dust particles. One solution recently installed in parks in the Netherlands and Beijing is a tower containing smog filters to clean the air in the park.\n\nThe smog filter uses ionization to remove particles from the air. Air containing dust particles without charge enters the filter and passes through an ionization chamber. Inside the ionization chamber, electrons pass between two electrodes where they collide with the dust particles in the air, causing the particles to become negatively charged. The air then moves past long, charged "collection" plates and the charged particles attach to the plates. The clean air moves out of the other side of the filter.',
    figImages: [`${P}q2-smog.png`, `${P}q2-ionization.png`],
    tasks: [
      {
        label: 'a',
        text: 'The tower is estimated to require 1100 W of electrical power and is connected to an electrical supply of 220 V. **Calculate** the current flowing through the tower. You should give the appropriate unit with your answer.',
        marks: 3,
        ph: 'Use P = IV → I = P/V = 1100/220 = 5 A. Show the formula, substitution and unit.',
      },
      {
        label: 'b',
        text: '**Outline** why dust particles collect on the positive plate of the smog filter.',
        marks: 2,
        ph: 'Dust particles are negatively charged (from electrons in ionization chamber). Opposite charges attract, so negative dust is attracted to the positive collection plate.',
      },
      {
        label: 'c',
        text: 'Over time, the collection plates become less effective. Using your understanding of electrical fields, **suggest** why the plates need to be regularly cleaned.',
        marks: 2,
        ph: 'Negative dust on the positive plate adds negative charge, reducing the net positive charge. This weakens the electric field/attractive force, so fewer particles are collected.',
      },
    ],
  },

  // ─── Q3: EM spectrum / RFID / induction (10 marks, Criterion A) ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'EM Spectrum & Magnetism — RFID',
    marks: 10,
    tags: { unit: 'em-spectrum', topics: ['electromagnetic spectrum', 'radio waves', 'induction', 'RFID'], level: 'proficient' },
    stem: 'Radio waves form a section of the electromagnetic spectrum. RFIDs (radio-frequency identification devices) are now used in many ways to help track products and store information. RFIDs can be placed under the skin of animals to share information regarding their owners. The RFID consists of a wire coil, a radio transmitter and a microchip to store information.',
    figImages: [`${P}q3a-spectrum.png`, `${P}q3b-rfid-cat.png`, `${P}q3-rfid-structure.png`],
    tasks: [
      {
        label: 'a',
        text: 'Radio waves form a section of the electromagnetic spectrum. **Drag and drop** the labels to classify the missing sections in the spectrum.\n\nSpectrum order (low to high frequency): Radio — Microwave — **?** — Visible — **?** — X-rays — Gamma ray\n\nDraggable labels: X-rays, Infra-red, Radio',
        marks: 1,
        ph: 'Fill the two gaps: Infrared (between Microwave and Visible) and Ultraviolet (between Visible and X-rays). Note: X-rays and Infrared are the draggable labels given.',
      },
      {
        label: 'b',
        text: 'The RFID transmits information using radio waves. Infra-red waves can also be used to transmit information. **Suggest** one advantage of using radio waves instead of infra-red waves inside animals.',
        marks: 1,
        ph: 'Any one: infra-red does not pass through fur/tissue as well; infra-red could adversely affect health; radio waves travel further; infra-red has higher energy (more harmful).',
      },
      {
        label: 'c',
        text: 'The frequency of the radio waves is 134 500 Hz and their wavelength is 2238 m. **Calculate** the speed of radio waves. Give your answer in scientific notation.',
        marks: 3,
        ph: 'v = fλ = 134 500 × 2238 = 2.999 × 10⁸ m s⁻¹ ≈ 3.00 × 10⁸ m s⁻¹. Show formula, substitution, and scientific notation.',
      },
      {
        label: 'd',
        text: 'The wire coil in the scanner carries an alternating current. Inside the RFID there is also a coil of wire. When the two coils act together they behave like a transformer, inducing a current in the RFID coil.\n\n**Outline** one advantage of powering the RFID using induction rather than using a battery.',
        marks: 2,
        ph: 'Any one: no internal power source needed; a battery would lose power over time requiring replacement; an internal battery/power source would be too large to fit inside the RFID.',
      },
      {
        label: 'e',
        text: '**Explain**, using the principle of induction, how an alternating current flowing in the coil of the hand-held scanner generates a current in the RFID.',
        marks: 3,
        ph: 'Three steps: (1) AC in scanner coil produces an alternating magnetic field/flux; (2) this changing magnetic field passes through the cat to the RFID coil; (3) the changing magnetic field in the RFID induces an EMF/current in the RFID coil (electromagnetic induction).',
      },
    ],
  },

  // ─── Q4: Mirrors / virtual images — Criteria B & C (12 marks) ───
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Light & Optics — Mirror Investigation',
    marks: 12,
    tags: { unit: 'light-optics', topics: ['reflection', 'virtual images', 'inverse proportion', 'experimental design'], level: 'proficient' },
    stem: 'An object placed in front of a mirror produces an image due to the reflection of light waves from the surface of the mirror. When two mirrors are placed together in contact along one side, the number of images varies depending on the angle between the mirrors. In the picture shown here, there are seven virtual images. The only thing that has changed between these situations is the angle between the mirrors.',
    figImages: [`${P}q4-mirrors.png`],
    tasks: [
      {
        label: 'a',
        text: 'A student wants to investigate the relationship between the number of virtual images when the angle between two mirrors changes. **State** the question that could be answered in this scientific investigation.',
        marks: 1,
        ph: 'Write a research question naming the IV (angle between mirrors) and the DV (number of virtual images observed).',
      },
      {
        label: 'b',
        text: 'Below is a list of variables for this experiment. **Select** the appropriate description for each of the variables.\n\n| Variable | Independent | Dependent | Control |\n|----------|-------------|-----------|--------|\n| The object used | | | |\n| The position of the object | | | |\n| The number of images observed | | | |\n| The size of the mirrors used | | | |\n| The angle between the mirrors | | | |\n| The shape of the mirrors used | | | |',
        marks: 3,
        widget: 'variable_classify',
        widgetOptions: ['The object used', 'The position of the object', 'The number of images observed', 'The size of the mirrors used', 'The angle between the mirrors', 'The shape of the mirrors used'],
        ph: 'IV = angle between mirrors; DV = number of images observed; Controls = object used, position of object, size of mirrors, shape of mirrors.',
      },
      {
        label: 'c',
        text: '**Identify** the measuring instrument that would be needed for this experiment.',
        marks: 1,
        ph: 'Protractor (to measure the angle between the two mirrors).',
      },
      {
        label: 'd',
        text: 'After collecting data, the student presents the results in the form of a graph.\n\nUse the graph to **predict** the angle that would produce three images.',
        marks: 1,
        figImages: [`${P}q4d-graph.png`],
        ph: 'Read off the graph: at 3 images, the angle is approximately 60°.',
      },
      {
        label: 'e',
        text: 'The student makes the following prediction: "I predict that as the angle between the mirrors increases, the number of images decreases. The relationship between these variables will be inversely proportional."\n\nUsing data from the graph, **outline** if the graph supports this prediction. You should include calculations to support your answer.',
        marks: 3,
        ph: 'State: as angle increases, images decrease ✓. Test inverse proportion: N × angle = constant? e.g. 7 × 24° ≈ 168, 5 × 36° = 180, 3 × 60° = 180 — roughly constant but not exact → relationship is approximately inversely proportional but not perfectly so.',
      },
      {
        label: 'f',
        text: 'The bar chart below is an alternative presentation of the data from part (d). **Justify** why a bar chart is a more appropriate way of presenting this data.',
        marks: 2,
        figImages: [`${P}q4f-barchart.png`],
        ph: 'Only integer values of number of images are allowed (you cannot have 3.5 images). The relationship between angle and images is discrete, making a bar chart more appropriate than a continuous line graph.',
      },
      {
        label: 'g',
        text: 'A second student in the same class presents a table of results for her investigation. **Outline** if the first student\'s data in part (d) or the second student\'s data above are better for exploring the relationship between the two variables.',
        marks: 1,
        ph: 'The second student\'s data is better because: there are more data points OR data are taken at regular intervals (every 20°), making it easier to identify trends.',
      },
    ],
  },

  // ─── Q5: Speed of sound via echo (20 marks, Criterion C) ───
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Sound & Waves — Speed of Sound',
    marks: 20,
    tags: { unit: 'sound-waves', topics: ['speed of sound', 'echo', 'data processing', 'graph analysis', 'accuracy'], level: 'proficient' },
    stem: 'Like light, sound also reflects. We experience reflected sound as an echo. Echoes can be used to investigate the speed of sound. A student stands a known distance away from a wall and makes a loud sound by hitting two pieces of wood together. The time that the sound takes to travel to the wall and back can be used to calculate a value for the speed of sound.',
    figImages: [`${P}q5-echo.png`],
    tasks: [
      {
        label: 'a',
        text: 'Two students work in a pair to collect data for this investigation. One student claps the wood together and the other student measures the time between this sound and the sound of the echo returning. The result of this experiment is shown below:\n\n**Time for sound to travel = 0.79 s**\n\nThe student stands **110 m** from the wall. **Calculate** a value for the speed of sound using this raw data. Give your answer to two significant figures.',
        marks: 3,
        ph: 'Total distance = 2 × 110 = 220 m. Speed = distance / time = 220 / 0.79 = 278 ≈ 280 m s⁻¹ (2 s.f.).',
      },
      {
        label: 'b',
        text: 'The students are concerned that their measurements may not be accurate so they decide to improve their method. **Describe and justify** two things that the students could do to improve the accuracy of their measurements while using the same basic method. Your improvements should not require any new equipment.',
        marks: 4,
        ph: 'Improvement 1: Increase the number of time measurements at this distance — reduces effect of random errors in timing. Improvement 2: Increase the distance to the wall — small timing errors become less significant relative to the total travel time.',
      },
      {
        label: 'c',
        text: 'Instead of using a stopwatch to time the interval between the first sound and the echo, a laptop with a microphone and some sound recording software can be used.\n\nUse the sound recording image to **calculate** the time taken for the sound to travel 600 m.',
        marks: 2,
        ph: 'From the recording, read off the time between the two sound peaks: t₁ and t₂. Time = t₂ − t₁ = 2.65 − 0.90 = 1.75 ± 0.06 s.',
      },
      {
        label: 'd',
        text: 'The students vary the distance the sound travels and write down four sets of results in their notebook. **Organise and present** the data in a table that shows the distance travelled by the sound wave, and the time taken. Include the data from part (c) in your answer.',
        marks: 4,
        figImages: [`${P}q5d-table.png`],
        ph: 'Table with headers: Distance (m) and Time (s). Results in order: 220m/0.79s, 400m/1.2s... include ECF value from part (c) for 600m. Units in column headings only. Values to 2 d.p.',
      },
      {
        label: 'e',
        text: 'Another student collects data using the same method. To process their data to find the speed of sound, they plot a graph of the distance travelled by the sound wave against the time taken.\n\nUse data from the graph to **calculate** the speed of sound.',
        marks: 2,
        figImages: [`${P}q5e-graph.png`],
        ph: 'Read gradient from the line of best fit: speed = Δdistance / Δtime = gradient ≈ 330–355 m s⁻¹.',
      },
      {
        label: 'f',
        text: 'The student that collected this data set thought that a mistake had been made when measuring one of the times during the experiment. **Suggest** which measurement was performed incorrectly by referring to the graph. **State** whether the actual time should be higher or lower than the value recorded.',
        marks: 2,
        ph: 'Identify the anomalous data point (at 400 m or time ≈ 1 s). State: the time is too low — it should be greater to follow the trend and be closer to the line of best fit.',
      },
      {
        label: 'g',
        text: 'During any speed of sound investigation, it is important to measure temperature as sound travels at different speeds through air at different temperatures. For temperatures close to room temperature, the relationship is given by:\n\n**speed of sound in air = 330 + (0.6 × T)**\n\nwhere T is the temperature of the air in degrees Celsius and the speed of sound in air is measured in metres per second.\n\n**Explain** why the speed of sound is dependent on temperature. Your answer should contain reference to the motion of particles.',
        marks: 3,
        ph: 'Three steps: (1) sound travels faster at higher temperature; (2) higher temperature → particles have greater kinetic energy / move faster; (3) time between collisions is reduced OR faster rate of energy transfer between particles.',
      },
    ],
  },

  // ─── Q6: Spring oscillations — Criterion B (19 marks) ───
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Sound & Waves — Spring Oscillation Design',
    marks: 19,
    tags: { unit: 'sound-waves', topics: ['oscillation', 'experimental design', 'variables', 'hypothesis', 'period'], level: 'advanced' },
    stem: 'A sound wave in air is created due to the oscillations of air particles. The air particles oscillate around a fixed point, known as the equilibrium position. An MYP student is interested in the factors that affect oscillations of air particles. He decides to conduct an investigation by modelling an oscillating particle using a hanging mass on a spring.\n\n**Research question:** If the mass on a spring increases, what happens to the time period of the oscillation?',
    figImages: [`${P}q6-spring.png`],
    tasks: [
      {
        label: 'a',
        text: '**Design** an experiment to investigate this research question. In your plan you must include:\n- the independent variable, the dependent variable and the justification of two control variables\n- a hypothesis that can be tested by this investigation\n- how you will collect sufficient data\n- a method detailing the procedure you will follow',
        marks: 14,
        ph: 'IV = mass on spring; DV = time period of oscillation; CV = spring constant/stiffness AND length of spring (justify each).\nHypothesis: If mass increases, then time period increases, because greater mass has more inertia.\nData: at least 5 different masses, 3 trials each, calculate mean.\nMethod: attach mass to spring, displace and release, measure time for 10 oscillations, divide by 10 for period. Repeat.',
      },
      {
        label: 'b',
        text: '**Suggest** a second investigation into another factor that could affect the time period of a mass oscillating on a spring. For this new investigation you should include:\n- the independent and dependent variables\n- a research question\n- two relevant control variables',
        marks: 5,
        ph: 'Example: IV = spring constant/stiffness (use different springs); DV = time period; RQ = How does spring constant affect time period?; CVs = mass on spring AND amplitude of oscillation. (Do not repeat mass as IV)',
      },
    ],
  },

  // ─── Q7: Stopping distance (10 marks, Criteria A & D) ───
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Interactions — Stopping Distance',
    marks: 10,
    tags: { unit: 'forces-interactions', topics: ['stopping distance', 'kinematics', 'deceleration', 'friction', 'driver factors'], level: 'proficient' },
    stem: 'This task will consider some of the factors that affect the stopping distance of a car. Stopping distance has important implications for road safety. The stopping distance of a car is made up of two components: the thinking distance (how far the car travels in the time taken for the driver to react) and the braking distance (how far the car travels while it is decelerating).',
    figImages: [`${P}q7-stopping.png`],
    tasks: [
      {
        label: 'a',
        text: 'In the diagram, the car decelerates from 20 m s⁻¹ to rest. If the brakes are worn and are only able to decelerate the car at 2 m s⁻², **calculate** the new braking distance.',
        marks: 4,
        ph: 'Use v² = u² + 2as: 0 = 20² + 2×(−2)×s → 0 = 400 − 4s → s = 100 m. Show formula, substitution, and unit.',
      },
      {
        label: 'b',
        text: 'Factors related to the driver, the car or the environment can have an impact on the stopping distance for a given speed. For example, driving when tired, or distracted (driver factors), can significantly increase reaction times and subsequently increase the stopping distance of a car. **Classify** the following into environmental factors, driver factors, and car factors.',
        marks: 2,
        figImages: [`${P}q7b-factors.png`],
        widget: 'inline_dropdown_select',
        widgetOptions: ['environmental factor', 'driver factor', 'car factor'],
        widgetItems: ['Using a cell phone', 'Heavy rain', 'Worn out tyre tread', 'Faulty brakes', 'Drinking alcohol', 'Poor road surface'],
        ph: 'Cell phone → driver; Heavy rain → environmental; Worn tyre tread → car; Faulty brakes → car; Drinking alcohol → driver; Poor road surface → environmental.',
      },
      {
        label: 'c',
        text: 'Drinking alcohol and poor road surface are two of the factors which affect stopping distance. For each factor, **select** which part of the stopping distance each factor affects and **outline** the impact of each factor on stopping distance using your scientific knowledge.',
        marks: 4,
        ph: 'Alcohol: increases reaction time → increases thinking distance → increases stopping distance. Poor road surface: less friction between tyres and road → less braking force → greater braking distance → increases stopping distance.',
      },
    ],
  },

  // ─── Q8: Driverless cars evaluation (14 marks, Criterion D) ───
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Forces & Transport — Driverless Cars',
    marks: 14,
    tags: { unit: 'forces-interactions', topics: ['technology evaluation', 'road safety', 'societal implications', 'economic implications'], level: 'advanced' },
    stem: 'In recent years, a number of countries have focused on improving road safety. In these countries there has been a decrease in the number of road casualties. Further improvements in the way cars are engineered could allow us to continue this trend. One such innovation is the use of electronic systems which can reduce driver error.\n\nModernization in car technology aims to improve safety. By 2035, it\'s expected that there will be more than 54 million self-driving cars and trucks. Self-driving cars, which drive us, instead of us driving them, are becoming a reality.',
    figImages: [`${P}q8-driverless.png`],
    tasks: [
      {
        label: 'a',
        text: 'Applying technical innovation to the modernization of road transport has led to the development of driverless cars. Driverless cars will change the way goods and people are moved with significant consequences for both society and the economy. Whether or not all societies will be safer with driverless cars will affect how this technology is adopted. The economic effects on drivers and the multi-national companies who develop this technology are also considered in this question.\n\n**Discuss and evaluate** the consequences of all cars becoming driverless. In your answer you should include:\n- an outline of the technological improvements with respect to driverless cars related to safety\n- the advantages and disadvantages for society\n- the economic implications of driverless technology\n- a concluding appraisal giving your opinion on the use of driverless cars',
        marks: 14,
        ph: 'Structure around four areas: (1) Technology safety: fewer accidents from human error, sensors/AI react faster; (2) Society: safer roads vs job losses for drivers, independence for elderly/disabled; (3) Economics: high development cost, reduced transport costs, impact on taxi/truck drivers; (4) Concluding appraisal: your justified opinion linking all arguments.',
      },
    ],
  },

]
