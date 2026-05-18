import type { Question } from '@/lib/types'

const P = '/images/papers/physics-nov-2024/'

export const paperMeta = {
  id: 'physics-nov-2024',
  title: 'MYP Physics – November 2024',
  totalMarks: 100,
  durationMinutes: 90,
}

export const questions: Question[] = [

  // ── Q1: Pendulum & Wrecking Ball (12 marks, Crit A) ──────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Pendulum & Energy',
    marks: 12,
    stem: 'A pendulum is a mass on a string that swings back and forth. It is an example of periodic motion.',
    tasks: [
      {
        label: 'a',
        text: 'Regular, repeating movement can be described as **periodic motion**.\n\n**Select** the image that does **not** show periodic movement.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: [`${P}page-01-crop.png`],
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'b',
        text: '**Select** the option that describes the kinetic energy, potential energy and speed of the pendulum at positions A (top left), B (bottom) and C (top right).',
        marks: 2,
        ph: 'Describe each position:\nPosition A: KE = ___ (min/max), PE = ___ (min/max), Speed = ___ (min/max)\nPosition B: KE = ___, PE = ___, Speed = ___\nPosition C: KE = ___, PE = ___, Speed = ___',
      },
      {
        label: 'c',
        text: 'A pendulum can be used to determine the acceleration due to gravity, g.\n\nThe period T of a pendulum is the time taken to complete one swing. T depends on the length of the pendulum L and g. It is given by the relationship: T² = 4π²L / g\n\nA pendulum used in a laboratory in Canada has a length of 72.0 cm. The time taken for 10 periods is measured to be 17.1 s.\n\n**Calculate** the acceleration due to gravity g in m s⁻² in this laboratory, giving your answer to three significant figures.',
        marks: 3,
        ph: 'Show your working:\nStep 1 — find T: T = 17.1 / 10 = ... s\nStep 2 — rearrange: g = 4π²L / T²\nStep 3 — substitute: g = 4 × π² × 0.720 / (...)²\ng = ... m s⁻² (3 s.f.)',
      },
      {
        label: 'd',
        text: 'The expected value of acceleration due to gravity at this location is 9.82 m s⁻².\n\n**Suggest** why the experimental value in part (c) is different.',
        marks: 1,
        ph: 'Suggest one reason (e.g. measurement uncertainty in T or L, environmental factor, location above sea level)...',
      },
      {
        label: 'e',
        text: 'A wrecking ball is an example of a pendulum that can be used to demolish buildings. It is a very heavy steel ball hanging from a crane, which is released and swung to hit the structure. Mass of steel ball = 2000 kg.\n\nInitially, the ball is stationary. The crane operator releases the ball from a height of 12.5 m. The ball hits the building at 4.5 m above the ground.\n\n**Calculate** the kinetic energy of the ball when it hits the building at 4.5 m above the ground. You should assume that the acceleration due to gravity g = 9.81 m s⁻². Give your result in kJ rounded to two significant figures.',
        marks: 4,
        figImages: [`${P}page-02-crop.png`],
        ph: 'Show your working:\nHeight change: Δh = 12.5 − 4.5 = ... m\nUsing conservation of energy: KE = mgh\nKE = 2000 × 9.81 × ...\nKE = ... J = ... kJ (2 s.f.)',
      },
      {
        label: 'f',
        text: '**Suggest** why the real-world kinetic energy of the wrecking ball would be lower than the calculated value.',
        marks: 1,
        ph: 'Suggest one reason relating to energy transfer (e.g. friction, air resistance, heat, sound)...',
      },
    ],
  },

  // ── Q2: Smoke Detectors & Radioactivity (12 marks, Crit A) ───────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity',
    marks: 12,
    stem: 'Smoke detectors are devices that sound an alarm when smoke enters them. The sound of the alarm warns people to take action in the event of a fire. Some smoke detectors use the properties of radiation to detect smoke.',
    figImages: [`${P}page-03-crop.png`],
    tasks: [
      {
        label: 'a',
        text: '**Outline** why smoke detectors are installed on the ceiling in a house instead of on the walls or floor.',
        marks: 2,
        ph: 'Explain what smoke does (relative to air density) and why this means the ceiling is the best location...\n•\n•',
      },
      {
        label: 'b',
        text: 'Some smoke detectors use a small amount of a radioactive isotope, americium-241. Americium-241 emits alpha particles.\n\n**State** two properties of alpha particles.',
        marks: 2,
        ph: 'Property 1: ...\nProperty 2: ...',
      },
      {
        label: 'c',
        text: '**Select** the equation that represents the radioactive decay of americium-241 in a smoke detector.\n\n• **A:** ²⁴¹₉₅Am → ²³⁷₉₃Np + ⁴₂α\n• **B:** ²³⁷₉₃Np + ⁴₂α → ²⁴¹₉₅Am\n• **C:** ²⁴¹₉₅Am → ²³⁷₉₃Np + ⁰₀γ\n• **D:** ²⁴¹₉₅Am → ²³⁷₉₃Am + ⁰₋₁β',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'd',
        text: 'Americium-241 is an isotope of americium. **Select** which of the following is **not** an isotope of americium-241. Use scientific terminology to **justify** your answer.\n\n• **A:** ²³⁹₉₅Am\n• **B:** ²⁴⁰₉₃Am\n• **C:** ²⁴³₉₅Am\n• **D:** ²⁴¹₉₅Br',
        marks: 2,
        ph: 'My answer is option ___.\nJustification: Isotopes of the same element must have the same ___ number (protons). Option ___ has a proton number of ___, which is different from americium\'s proton number of 95.',
      },
      {
        label: 'e',
        text: '**Determine** the half-life of americium-241 in years using the graph shown.',
        marks: 1,
        figImages: [`${P}page-04-crop.png`],
        ph: 'Starting nuclei = 10 000. Half = 5 000.\nRead the time on the x-axis where the curve crosses 5 000 nuclei.\nHalf-life ≈ ___ years',
      },
      {
        label: 'f',
        text: 'Use your answer to part (e) to **calculate** the time taken for 625 nuclei to remain in this sample, which started with 10 000 nuclei.',
        marks: 1,
        ph: '10 000 → 5 000 (1 half-life)\n5 000 → 2 500 (2)\n2 500 → 1 250 (3)\n1 250 → 625 (4 half-lives)\nTime = 4 × ___ = ___ years',
      },
      {
        label: 'g',
        text: '**Explain** why this kind of smoke detector would not function correctly with a radioactive isotope that emits beta or gamma radiation.',
        marks: 3,
        ph: 'Explain the normal mechanism:\n• Alpha particles ionize air molecules between two plates → creates a current → alarm silent\n\nNow explain why beta/gamma fails:\n• Beta/gamma have ___ ionizing power than alpha...\n• Effect on the current in the chamber...\n• Therefore the alarm would...',
      },
    ],
  },

  // ── Q3: Resistance Investigation (17 marks, Crit B/C) ────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Electrical Resistance',
    marks: 17,
    stem: 'A resistor is an electrical component that limits the flow of current in a circuit and converts electrical energy to heat. Resistance can be measured using an ohmmeter.\n\nA student is interested in studying resistance. They decide to model resistors using cylinders of conducting material. Their research question is:\n\n"What is the relationship between the diameter of a cylinder and its resistance?"',
    figImages: [`${P}page-05-crop.png`],
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a hypothesis to test this research question.',
        marks: 2,
        ph: 'If the diameter of the cylinder increases, then the resistance will ___ because...\n\n(Include a scientific reason linking diameter to the number of paths available for electrons)',
      },
      {
        label: 'b',
        text: '**Select** the cylinders the student should use to collect appropriate data by choosing from the available cylinders shown.',
        marks: 3,
        figImages: [`${P}page-05b-crop.png`],
        ph: 'I would select:\n• Material: only Material ___ (one material only)\n• Number of cylinders: ___ cylinders with ___ different diameters\n• Reason: to keep material and length constant while only varying diameter',
      },
      {
        label: 'c',
        text: '**Justify** your selection of cylinders in part (b).',
        marks: 2,
        ph: 'Justify by explaining:\n1. Why only one material must be selected...\n2. Why cylinders with different diameters are needed (to test the RQ)...\n3. What variables are being controlled and why...',
      },
      {
        label: 'd',
        text: 'Having carried out one trial for each cylinder, the student records their data as shown in the notebook below.\n\n**Organize** and **present** the data in a table with appropriate headings and units.',
        marks: 4,
        figImages: [`${P}page-06-crop.png`],
        ph: 'Draw a table:\n| Diameter / mm | Resistance / Ω |\n|---------------|----------------|\n| 12            | 56             |\n| 17            | 27             |\n| 20            | 20             |\n| 23            | 16             |\n| 27            | 12             |',
      },
      {
        label: 'e',
        text: 'The student\'s lab partner wants to carry out more trials. **Suggest** how this would improve the investigation.',
        marks: 2,
        ph: 'More trials would:\n• Allow a ___ to be calculated for each diameter\n• Reduce the effect of ___ errors\n• Increase the ___ of the results',
      },
      {
        label: 'f',
        text: 'The student draws four graphs using the data from part (d). **Select** the most appropriate trend line to show the relationship between diameter and resistance.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: [`${P}page-07-crop.png`],
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'g',
        text: 'The student wishes to extend the investigation using the same materials and equipment available in parts (a) and (b). The dependent variable will be resistance.\n\n**State** an appropriate research question, independent variable, and one control variable for this extension.',
        marks: 3,
        ph: 'Research question: How does ___ affect the resistance of the cylinder?\nIndependent variable: ___\nControl variable: ___ (kept constant because...)',
      },
    ],
  },

  // ── Q4: LDR Investigation Design (14 marks, Crit B) ──────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Light Dependent Resistor',
    marks: 14,
    stem: 'The resistance of a light-dependent resistor (LDR) depends on the intensity of light shining on its upper, light-sensitive surface. A student predicts:\n\n"If the distance between a light source and an LDR increases, then the resistance of the LDR will also increase."',
    tasks: [
      {
        label: 'a',
        text: '**State** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'How does the ___ between the light source and the LDR affect the ___ of the LDR?',
      },
      {
        label: 'b',
        text: 'The student uses a lamp as a light source and an ohmmeter to measure the resistance.\n\n**Design** an investigation the student could use to test their prediction. In your answer, you should include:\n\n• the independent variable and dependent variable\n• two control variables and a justification of why they should be controlled\n• a list of equipment\n• a detailed method for how you will collect data\n• an explanation of how you will collect sufficient data.',
        marks: 13,
        figImages: [`${P}page-08-crop.png`],
        ph: 'VARIABLES:\nIndependent variable: distance between lamp and LDR (cm)\nDependent variable: resistance of LDR (Ω, measured by ohmmeter)\nControl variable 1: ___ — because if this changes, it would affect the light intensity...\nControl variable 2: ___ — because...\n\nEQUIPMENT:\n•\n•\n•\n\nMETHOD:\n1. Set up the lamp and LDR on a ruler/track.\n2. Place the LDR at a distance of ___ cm from the lamp.\n3. Record the resistance shown on the ohmmeter.\n4. Move the LDR to the next distance (___ cm) and repeat...\n\nSUFFICIENT DATA:\n• Range of distances: ___ cm to ___ cm\n• Intervals: every ___ cm (___ data points)\n• Repeats: ___ trials per distance (to calculate mean)',
      },
    ],
  },

  // ── Q5: Resistance vs Temperature (19 marks, Crit C) ─────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Resistance & Temperature',
    marks: 19,
    stem: 'Another student decides to investigate the effect of varying the temperature of a resistor on its resistance. Instead of using an ohmmeter, this student measures current in order to calculate resistance. The supply voltage is kept constant throughout the investigation. The temperature of each resistor is modified by immersing it in a temperature-controlled bead bath.\n\nThe student\'s research question is: "How does the temperature of a resistor affect the current in a circuit?"',
    figImages: [`${P}page-09-crop.png`],
    tasks: [
      {
        label: 'a',
        text: '**Measure** the temperature of the bead bath shown in the image.',
        marks: 1,
        figImages: [`${P}page-09b-crop.png`],
        ph: 'Read the thermometer carefully between the 30 and 40 graduation marks.\nTemperature = ___ °C',
      },
      {
        label: 'b',
        text: '**Draw** a diagram of the circuit used by the student. You do not need to include a bead bath in your diagram.\n\nDescribe the circuit components and how they are connected.',
        marks: 3,
        ph: 'Circuit description:\n• Battery/power supply\n• Resistor (connected in series)\n• Ammeter (in series, to measure current)\n• Voltmeter (in parallel across the resistor)\n\nDescribe using words or standard symbol names:\nThe battery connects in series with the ammeter and resistor. The voltmeter is connected in parallel (across) the resistor.',
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation by classifying each of the following as Independent (IV), Dependent (DV), or Control (CV):\n\n• Temperature of the resistor\n• Length of the resistor\n• Current in the circuit\n• Diameter of the resistor\n• Voltage across the resistor',
        marks: 3,
        ph: 'Independent variable (what you change): ___\nDependent variable (what you measure): ___\nControl variables (kept constant):\n  • ___\n  • ___\n  • ___',
      },
      {
        label: 'd',
        text: '**Identify** a safety issue that the student should have considered when planning this investigation.',
        marks: 1,
        ph: 'Safety issue: e.g. high temperature beads / electrical hazards / burns from hot equipment...',
      },
      {
        label: 'e',
        text: 'The student predicts: "As the temperature of the resistor increases, the current through the resistor will decrease. I predict that there will be an **inversely proportional** relationship between the variables."\n\nThe graph of their results is shown below.\n\nUse data from the graph and a calculation to **explain** whether the student\'s prediction is supported.',
        marks: 2,
        figImages: [`${P}page-11-crop.png`],
        ph: 'To test inverse proportion: check if I × T = constant for all data points.\nFrom the graph:\n• At T = ___ °C, I ≈ ___ mA → product = ___\n• At T = ___ °C, I ≈ ___ mA → product = ___\nAre the products constant? ___\nConclusion: The prediction is (supported / not supported) because...',
      },
      {
        label: 'f',
        text: 'Having measured the current and voltage, additional processing is required to find the relationship between temperature and resistance. The voltage was kept constant at 30 V.\n\nUsing the graph in part (e) and information from the formula sheet, **calculate** the missing resistance value for the data shown.',
        marks: 2,
        figImages: [`${P}page-11b-crop.png`],
        ph: 'Read the current at 50 °C from the graph: I ≈ ___ mA = ___ A\nFormula: R = V / I\nR = 30 / ___ = ___ Ω\n(Round to nearest whole number)',
      },
      {
        label: 'g',
        text: 'The graph below shows the processed data (temperature vs resistance). **Plot** the data point you determined in part (f) and **draw** a line of best fit on the graph.\n\nAxes: x-axis = Temperature / °C (0 to 100), y-axis = Resistance / Ω (0 to 120)',
        marks: 2,
        ph: 'Data point to plot: (50 °C, ___ Ω) [your calculated value from part f]\n\nLine of best fit:\n• Draw a straight line that passes close to all 6 data points\n• The line should not be forced through the origin\n• Extend slightly beyond the data range in both directions',
      },
      {
        label: 'h',
        text: 'Using the graph in part (g), **predict** the value of resistance at 0 °C.',
        marks: 1,
        ph: 'Extend the line of best fit back to 0 °C on the temperature axis.\nResistance at 0 °C ≈ ___ Ω',
      },
      {
        label: 'i',
        text: '**Calculate** the gradient of the line of best fit drawn in part (g). You should include your working and the unit in your answer.',
        marks: 2,
        ph: 'Choose two well-separated points on the LINE OF BEST FIT (not data points):\nPoint 1: (___ °C, ___ Ω)\nPoint 2: (___ °C, ___ Ω)\nGradient = ΔR / ΔT = (___ − ___) / (___ − ___)\n= ___ Ω °C⁻¹',
      },
      {
        label: 'j',
        text: 'The student calculated that the resistance would be 500 Ω when the temperature was 1000 °C.\n\n**Comment** on the validity of this calculation.',
        marks: 2,
        ph: 'Comment on two issues:\n1. Extrapolation: This temperature is far beyond the data range (data only goes to ___ °C). The linear relationship may not continue...\n2. Physical limitations: At 1000 °C, the resistor would... (e.g. melt, be destroyed, change phase).',
      },
    ],
  },

  // ── Q6: Water Tower & Clean Water Access (13 marks, Crit D) ──────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Energy & Development',
    marks: 13,
    stem: 'Different communities around the world do not have equal access to clean water and this is a challenge for fair development.\n\nA water tower is an elevated structure found in many economically developed countries. It holds a water tank high above the ground. This allows the water to be distributed to the local area through a network of pipes.\n\nThe images below show a water tower in Finland with a capacity of 12 600 m³ and a height of 52 m.',
    figImages: [`${P}page-13-crop.png`],
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the work done to fill this water tower with water from ground level. You should assume that g = 9.81 N kg⁻¹ and the density of water = 1000 kg m⁻³. Give your answer in standard form to two significant figures.',
        marks: 3,
        ph: 'Show your working:\nVolume = 12 600 m³\nMass = density × volume = 1000 × 12 600 = ___ kg\nW = mgh = ___ × 9.81 × 52\nW = ___ J ≈ ___ × 10⁹ J (2 s.f.)',
      },
      {
        label: 'b',
        text: 'In many countries, water must be collected from sources that are sometimes located far away from the home. It is estimated that around a quarter of the global population have to collect water. A worldwide total of around 200 million hours every day is spent collecting water.\n\n**Suggest** why the need to collect water is a barrier to development for the people that live in these regions.',
        marks: 1,
        ph: 'Suggest one reason (e.g. time lost from education / work / economic activity, physical burden on women and girls, health impacts)...',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** providing a hand pump to a local village community.\n\nIn your answer, you should include:\n• the benefits to health that are associated with access to clean, drinkable water\n• the ethical advantages and disadvantages of asking the villagers to pay a small fee to access the clean water\n• a concluding appraisal giving your opinion on how the charity should ensure a long-term solution to water access for the village.',
        marks: 9,
        passage: 'The United Nations (UN) Sustainable Development Goal for clean water and sanitation calls for fair and universal access to safe and affordable drinking water by 2030. However, this is a significant global challenge.\n\nIt is estimated that one in four, or around two billion people worldwide, do not have access to water that is safe to drink. 1.4 million people die annually and 74 million people will have their lives shortened due to diseases caused by drinking unclean water. In addition, the most polluted regions rely entirely on manual water collection, with women and girls bearing a disproportionate share of this burden, spending a worldwide total of around 200 million hours every day collecting water.\n\nMost of the water sources used are sometimes located far away from the home. Collecting water by hand pump — drawing clean water from under the ground — is a common method in sub-Saharan Africa. The charity wants to provide a hand pump to a local village community to improve access to clean water. They want to make sure that the hand pump will remain usable for a long time. A recent study found that charging a small amount of money to use the pump can help train people to maintain the pumps so that they remain usable for a long time.',
        ph: 'BENEFITS TO HEALTH (access to clean water):\n•\n•\n\nETHICAL ANALYSIS (fee to use pump):\nAdvantage of charging a fee: ...\nDisadvantage of charging a fee: ...\n\nCONCLUDING APPRAISAL:\nOverall, I think the charity should... because...',
      },
    ],
  },

  // ── Q7: SODIS Water Treatment (13 marks, Crit D) ─────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'EM Radiation & Development',
    marks: 13,
    stem: 'Water must be treated before it is safe to be consumed by humans.\n\nIn more economically developed countries, water treatment facilities are used to make sure that water is safe for human consumption. However, less economically developed countries do not always have access to these water treatment facilities.\n\nOne method that is used in less economically developed countries, where no centralized water treatment facilities exist, is solar disinfection, or SODIS. This method involves placing untreated water into a transparent container and exposing it to sunlight for several hours before drinking. The container is often a reused plastic water bottle. It is the UV waves and high temperatures that kills the harmful microbes that are present in the untreated water.\n\nTo be effective, the SODIS technique requires 8 hours of exposure to sunlight on a clear day in the countries close to the equator. This also requires the availability of plastic bottles in which to hold the water. SODIS is recommended by the World Health Organization as a method for household water treatment, especially in locations where fuel is expensive.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the region where ultraviolet (UV) waves are found in the electromagnetic spectrum shown below.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['1', '2', '3', '4'],
        figImages: [`${P}page-15-crop.png`],
        ph: 'Select 1, 2, 3, or 4',
      },
      {
        label: 'b',
        text: '**State** the property of ultraviolet waves that is useful for killing harmful microbes in water.',
        marks: 1,
        ph: 'UV waves have ___ energy / ___ frequency / ___ wavelength, which allows them to...',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** the use of SODIS as a water treatment method for people in less economically developed countries.\n\nIn your answer, you should include:\n• information about the suitability of the climate in different less economically developed countries for SODIS\n• the likely impact on the health of the villagers\n• the challenges of implementing SODIS\n• a concluding appraisal of whether SODIS is a suitable water treatment method.',
        marks: 11,
        passage: 'Water must be treated before it is safe to be consumed by humans.\n\nIn more economically developed countries, water treatment facilities are used to make sure that water is safe for human consumption. However, less economically developed countries do not always have access to these water treatment facilities.\n\nOne method that is used in less economically developed countries, where no centralized water treatment facilities exist, is solar disinfection, or SODIS. This method involves placing untreated water into a transparent container and exposing it to sunlight for several hours before drinking. The container is often a reused plastic water bottle. It is the UV waves and high temperatures that kills the harmful microbes that are present in the untreated water.\n\nTo be effective, the SODIS technique requires 8 hours of exposure to sunlight on a clear day in the countries close to the equator. This also requires the availability of plastic bottles in which to hold the water. SODIS is recommended by the World Health Organization as a method for household water treatment, especially in locations where fuel is expensive.',
        ph: 'CLIMATE SUITABILITY:\n• Countries near the equator: ___ (sunny, ideal for SODIS)\n• Countries with cloudy/cold climates: ___ (2 days needed, less effective)\n\nHEALTH IMPACT:\n• Reducing waterborne diseases: ...\n• Reducing deaths/illness from...\n\nCHALLENGES OF IMPLEMENTATION:\n• Plastic bottle availability...\n• 8-hour exposure time requirement...\n• Cloudy weather...\n• Public trust / education...\n\nCONCLUDING APPRAISAL:\nOverall, SODIS is (suitable / partially suitable / not suitable) for LEDCs because...',
      },
    ],
  },
]
