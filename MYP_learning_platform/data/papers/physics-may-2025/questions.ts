import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2025',
  subject: 'Physics',
  session: 'May',
  year: 2025,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Defibrillators & Electricity (7 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity — Defibrillators',
    marks: 7,
    stem: 'Defibrillators are used to apply an electric current to the heart. Defibrillators are made from two metal plates. During a charging process, one of the plates becomes positively charged and the other becomes negatively charged.',
    figImages: [
      '/images/papers/physics-may-2025/page-01-crop.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Select** the particles that move to cause the charge on the defibrillator plates.\n\nOptions: Atoms | Electrons | Neutrons | Protons',
        marks: 1,
        ph: 'Write your chosen option here...',
      },
      {
        label: 'b',
        text: 'A charged defibrillator with stored energy of 150 J applies a voltage of 300 V to an adult human. **Calculate** the current that would flow in 30 milliseconds.',
        marks: 3,
        ph: 'Show your working (equation, substitution, answer with unit)...',
      },
      {
        label: 'c',
        text: 'A gel is often applied between the plates and the patient\'s skin before using a defibrillator. **Suggest** why a gel is used.',
        marks: 1,
        ph: 'Suggest a reason...',
      },
      {
        label: 'd',
        text: 'One type of defibrillator uses charged plates which are stuck to the body of the patient with adhesive pads. Another type has plates that can be placed against the body of the patient by a doctor, who holds onto the plates using insulating grip handles. **Suggest** an advantage of each type of defibrillator.\n\nAdhesive pads advantage:\n\nInsulating handles advantage:',
        marks: 2,
        figImages: [
          '/images/papers/physics-may-2025/page-05-crop.png',
        ],
        ph: 'Adhesive pads: ...\n\nInsulating handles: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Refraction of Light (10 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Waves — Refraction of Light',
    marks: 10,
    stem: 'Refraction of light can help people to see more clearly but it can also cause optical illusions, as shown in the image of a straw in a glass of water.',
    figImages: [
      '/images/papers/physics-may-2025/page-06-crop.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'Yellow light has a wavelength of 550 nm. **Calculate** the frequency of yellow light. Assume the speed of light = 3.0 × 10⁸ m s⁻¹. Give your answer to two significant figures.',
        marks: 3,
        ph: 'State formula, convert units, show substitution, give answer with unit...',
      },
      {
        label: 'b',
        text: '**State** one colour of visible light that has a longer wavelength than yellow light.',
        marks: 1,
        ph: 'Colour: ...',
      },
      {
        label: 'c',
        text: 'Light travels as waves. Refraction of light changes some of the characteristics of light. The diagram shows a light ray passing from air into water.\n\n**Select** one quantity that remains constant when light is refracted through transparent materials.\n\nOptions: Direction | Frequency | Speed | Wavelength',
        marks: 1,
        figImages: [
          '/images/papers/physics-may-2025/page-09-crop.png',
        ],
        ph: 'Write your chosen quantity...',
      },
      {
        label: 'd',
        text: 'Refraction can make us believe that objects are in a location different to reality. Using the diagram showing a person on a cliff looking at a fish underwater, **explain** why the person believes the fish is in a different location to where it really is.',
        marks: 3,
        figImages: [
          '/images/papers/physics-may-2025/page-11-crop.png',
        ],
        ph: 'Explain the path of light and how the brain interprets it...',
      },
      {
        label: 'e',
        text: 'One use of refraction is to correct short-sightedness, which happens when light rays meet in front of the retina. **Outline** how the use of a diverging lens helps to correct short-sightedness.',
        marks: 2,
        figImages: [
          '/images/papers/physics-may-2025/page-13-crop.png',
        ],
        ph: 'Describe what the lens does to the light rays and how this shifts the focal point...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Nuclear Energy & Uranium Fission (9 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Nuclear Physics — Uranium Fission',
    marks: 9,
    stem: 'Nuclear energy is a possible solution to our growing energy demands. Nuclear power stations use uranium as a fuel. Uranium-235 (²³⁵U) can absorb a neutron to form uranium-236 (²³⁶U), which then undergoes nuclear fission:\n\n    ²³⁶U  →  ¹⁴⁰Xe  +  ⁹³Sr  +  ? n\n\nEach fission reaction releases 2.8 × 10⁻¹¹ J of energy.',
    tasks: [
      {
        label: 'a',
        text: '**State** one problem with using fossil fuels as an energy resource.',
        marks: 1,
        ph: 'One problem: ...',
      },
      {
        label: 'b',
        text: '**State** the difference between a nucleus of U-235 and a nucleus of U-236.',
        marks: 1,
        ph: 'The difference is in the number of ...',
      },
      {
        label: 'c',
        text: '**Identify** the number of neutrons (?) that would balance the nuclear fission equation shown above.',
        marks: 1,
        ph: 'Number of neutrons = ...',
      },
      {
        label: 'd',
        text: 'Use the equation E = mc² to **calculate** the mass difference between U-236 and the fission products. Assume c = 3.0 × 10⁸ m s⁻¹. Give your answer to 2 or more significant figures and include the unit.',
        marks: 2,
        ph: 'Rearrange E = mc² for m, then substitute values. State unit...',
      },
      {
        label: 'e',
        text: 'In a developed country, one family used 9.7 GJ of energy in a year. **Calculate** the number of fission reactions required to meet the energy needs of this family.',
        marks: 2,
        ph: 'Convert GJ to J first, then divide by energy per fission...',
      },
      {
        label: 'f',
        text: 'A nuclear power station operates with an efficiency of 35%. If the station generates 1.5 × 10⁹ W of electrical power, **calculate** the total power released through nuclear fission in the nuclear reactor.',
        marks: 2,
        ph: 'Use efficiency = useful power / total power. Rearrange for total power...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Cotton Reel Model Car / Motion (10 marks) Criterion C
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Motion — Cotton Reel Model Car',
    marks: 10,
    stem: 'An MYP student investigates the motion of a simple model car made from a cotton reel. The car is powered by a wound elastic (rubber) band. The student uses video analysis to track the car\'s position at regular time intervals.',
    figImages: [
      '/images/papers/physics-may-2025/page-20-crop.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'The video analysis records the position of the car every 0.10 s. **Calculate** the frequency with which the position data is recorded. Include an appropriate unit.',
        marks: 2,
        ph: 'State formula, substitute values, give unit...',
      },
      {
        label: 'b',
        text: 'Using the data table shown, read the velocity of the cotton reel car at t = 0.35 s.',
        marks: 1,
        figImages: [
          '/images/papers/physics-may-2025/page-21-crop.png',
        ],
        ph: 'Velocity at t = 0.35 s = ... cm s⁻¹',
      },
      {
        label: 'c',
        text: 'The student processed the data and drew a velocity-time graph (shown below). **Calculate** the gradient of the line of best fit between t = 0.05 s and t = 0.35 s. Give the unit and **state** the quantity that the gradient represents.',
        marks: 3,
        figImages: [
          '/images/papers/physics-may-2025/page-36-crop.png',
        ],
        ph: 'Gradient = Δv / Δt = ... / ... = ... (unit)\nQuantity: ...',
      },
      {
        label: 'd',
        text: 'The student repeated the experiment using twice as many turns of the elastic band. **Predict** how the line of best fit drawn in part (c) would change. **Justify** your answer.',
        marks: 2,
        ph: 'Prediction: ...\nJustification (link to force / energy): ...',
      },
      {
        label: 'e',
        text: 'A second student collects motion data using only a ruler and a stopwatch. **Outline** two limitations of this second student\'s data compared to data obtained using video analysis.',
        marks: 2,
        ph: 'Limitation 1: ...\n\nLimitation 2: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Cotton Reel Investigation Design (17 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Experimental Design — Cotton Reel Investigation',
    marks: 17,
    stem: 'After completing the first experiment investigating the motion of a model car, a student wants to extend their investigation by measuring a different dependent variable.',
    tasks: [
      {
        label: 'a',
        text: '**Design** a method to investigate the effect of changing the number of turns of the elastic band on the time taken for a model car to travel a fixed distance.\n\nIn your plan, you must include:\n• the independent variable, dependent variable, and one control variable\n• a hypothesis\n• details of any additional measuring equipment you will need to perform the experiment\n• a detailed method for how you will collect the data\n• details of how you will collect sufficient data',
        marks: 16,
        figImages: [
          '/images/papers/physics-may-2025/page-40-crop.png',
        ],
        ph: 'VARIABLES:\nIndependent variable:\nDependent variable:\nControl variable (+ justification):\n\nHYPOTHESIS:\nIf ... then ... because ...\n\nEQUIPMENT:\n•\n•\n\nMETHOD:\n1.\n2.\n...\n\nSUFFICIENT DATA:\n• Number of different IV values:\n• Number of repeats per value:',
      },
      {
        label: 'b',
        text: 'The research question of the student in part (a) was:\n\n"How does the number of turns of the elastic band affect the time taken for a model car to travel a fixed distance?"\n\nAnother student wants to carry out a different investigation using a similar model car. **Suggest** an alternative research question.',
        marks: 1,
        ph: 'How does [different variable] affect [outcome] of the model car?',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Seebeck Effect / Thermoelectric Generator (23 marks) Criterion B/C/A
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Energy — Thermoelectric Generator (Seebeck Effect)',
    marks: 23,
    stem: 'A student has a kit that uses the Seebeck effect. The kit contains a thermoelectric generator (TEG) which comprises two wires made of different metals and two water tanks (hot and cold). When there is a temperature difference (ΔT) between the hot and cold sides of the TEG, a voltage (V) is produced. The student investigates the relationship between voltage produced and temperature difference.',
    figImages: [
      '/images/papers/physics-may-2025/page-44-crop.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that would be tested in this investigation.',
        marks: 1,
        ph: 'How does [IV] affect [DV] in the TEG?',
      },
      {
        label: 'b',
        text: '**Identify** two pieces of measuring equipment you would need to perform this experiment.',
        marks: 2,
        ph: 'Equipment 1: ...\nEquipment 2: ...',
      },
      {
        label: 'c',
        text: 'The data table was collected from the experiment. One temperature difference value is missing from the table.\n\n**Calculate** the missing temperature difference and state your value.',
        marks: 1,
        figImages: [
          '/images/papers/physics-may-2025/page-47-crop.png',
        ],
        ph: 'ΔT = T_hot − T_cold = ... − ... = ... °C',
      },
      {
        label: 'd',
        text: '**Present** the voltage (V) versus temperature difference (ΔT) data from part (c) in a graph. Add an appropriate line of best fit.\n\nYour answer should include: labelled axes with units, all data points plotted correctly, and a suitable line of best fit.',
        marks: 4,
        ph: 'Describe your graph:\nX-axis label & unit:\nY-axis label & unit:\nData points (list the coordinates):\nLine of best fit — straight/curved, passes through origin?:',
      },
      {
        label: 'e',
        text: 'The student claims that the voltage is directly proportional to the temperature difference. Use the data in part (c) or the graph in part (d) to **comment** on the validity of the student\'s claim. **Justify** your answer.',
        marks: 2,
        ph: 'State whether the claim is valid or not valid, then give evidence from the graph/data...',
      },
      {
        label: 'f',
        text: 'The Seebeck coefficient (S) measures how well a material converts a temperature difference into an electric voltage:\n\n    S = −ΔV / ΔT\n\n**Outline** how you would use the graph in part (d) to calculate the Seebeck coefficient.',
        marks: 2,
        ph: 'Describe how to find the gradient of the line of best fit and how to apply S = −ΔV/ΔT...',
      },
      {
        label: 'g',
        text: 'The student builds a propeller-driven car by connecting a motor and propeller to the TEG kit and mounting this onto a flat base with wheels.\n\nAt a voltage of 0.397 V, the current through the motor is 0.11 A. **Calculate** the motor\'s power. Include an appropriate unit in your answer.',
        marks: 2,
        ph: 'State formula P = ..., substitute values, give unit...',
      },
      {
        label: 'h',
        text: 'The student noticed that the propeller-driven car did not accelerate forwards. **Suggest** an improvement to the car\'s design that could increase its acceleration. **Justify** your answer by referring to scientific principles.',
        marks: 2,
        ph: 'Improvement: ...\nScientific justification: ...',
      },
      {
        label: 'i',
        text: '**Select** the missing term to complete the useful energy transformation chain for the propeller-driven car moving horizontally.',
        marks: 1,
        widget: 'energy_chain',
        ph: 'The missing energy form is: ...',
      },
      {
        label: 'j',
        text: '**Identify** the variables for a new investigation using the propeller-driven car:\n\nIndependent variable:\nDependent variable:\nControl variable 1:\nControl variable 2:',
        marks: 4,
        ph: 'IV:\nDV:\nControl 1:\nControl 2:',
        widget: 'variable_classify',
      },
      {
        label: 'k',
        text: '**Formulate** a hypothesis for the investigation in part (j). Use the format:\n\n"If [IV]... then [DV]... because [scientific reasoning]..."',
        marks: 2,
        ph: 'If ... then ... because ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Newton's Cannonball & Satellites (16 marks) Criterion A/D
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Space Physics — Satellites & Orbital Mechanics',
    marks: 16,
    stem: 'In 1728, Isaac Newton conducted a thought experiment often referred to as "Newton\'s cannonball". In this thought experiment, a cannonball is fired from a cannon placed at the top of a very tall mountain. If the only force experienced by the cannonball is the gravitational force, then the path followed by the cannonball would depend on its initial horizontal speed.',
    figImages: [
      '/images/papers/physics-may-2025/page-62-crop.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'The diagram shows four paths (A, B, C, D) a cannonball could follow depending on its initial horizontal speed. **Identify** the correct path for each speed by matching each path label to one of the speeds below.\n\nAll four must be correct to gain the mark.',
        marks: 1,
        figImages: [
          '/images/papers/physics-may-2025/page-65-crop.png',
        ],
        widget: 'cannonball_paths',
        ph: 'A = ... m s⁻¹  |  B = ... m s⁻¹  |  C = ... m s⁻¹  |  D = ... m s⁻¹',
      },
      {
        label: 'b',
        text: '**Identify** the free-body force diagram (A, B, C, or D from the image) that correctly shows the force(s) acting on Newton\'s cannonball when it is in a circular orbit around Earth.',
        marks: 1,
        figImages: [
          '/images/papers/physics-may-2025/page-66-crop.png',
          '/images/papers/physics-may-2025/page-67-crop.png',
        ],
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Correct diagram: ...',
      },
      {
        label: 'c',
        text: 'Newton\'s thought experiment enabled scientists to understand how artificial satellites could be placed in orbit. In 1945, science-fiction writer Arthur C. Clarke suggested that artificial satellites could be used for a global communication system.\n\n**Discuss and evaluate** the development of the global communication system using satellites. In your answer you must include:\n• the scientific and technological challenges of putting a satellite into orbit\n• the political implications for governments of the global communication system\n• the positive and negative economic implications of private companies controlling access to the limited space in the Clarke belt\n• a concluding appraisal',
        marks: 14,
        passage: 'Geostationary satellites orbit the Earth once every 24 hours and permanently appear in the same location above the Earth\'s equator.\n\nThese satellites have to be placed at a specific distance from the Earth at an altitude of around 36 000 km, a region of space which is known as the \'Clarke Belt\' after Arthur C Clarke.\n\nReaching this location is challenging and, due to the increase in global demand for satellite communication, this region is becoming increasingly crowded.\n\nTo work correctly, satellites must maintain a safe distance from each other. Spaces for new satellites are assigned by the International Telecommunication Union, an agency of the United Nations. This agency helps to settle disputes between countries or companies if satellites start to interfere with each other, which happens when they get too close together.\n\nIn 2022, there were estimated to be 539 satellites in this increasingly crowded area.\n\nMost satellites in space are owned and operated by one company, SpaceX. In 2021, the company set a new record by launching 143 satellites into orbit on one rocket.\n\nThe prospect of one company having so much control over worldwide communication has raised concerns.\n\nSatellites have wide-ranging applications in the modern world, such as wildfire control, espionage, wildlife tracking, surveillance and other civil or military applications.',
        ph: 'SCIENTIFIC & TECHNOLOGICAL CHALLENGES:\n•\n•\n\nPOLITICAL IMPLICATIONS:\n•\n•\n\nECONOMIC IMPLICATIONS:\nPositive:\nNegative:\n\nCONCLUDING APPRAISAL:',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Space Elevator (8 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society — Space Elevator',
    marks: 8,
    stem: 'Satellites are put into orbit using rockets. However, space elevators have been proposed as an alternative method of putting objects into space. A space elevator would consist of a cable anchored at the Earth\'s equator, extending up to a counterweight in geostationary orbit (approximately 36 000 km above the surface). A "climber" vehicle would travel up and down the cable, carrying cargo or passengers to orbit without the need for rockets.\n\nThe concept was first seriously proposed by Russian scientist Konstantin Tsiolkovsky in 1895 and features in Arthur C. Clarke\'s 1979 novel "The Fountains of Paradise".\n\nThe main technological challenge is that no known material currently has sufficient tensile strength to withstand the enormous forces involved, although carbon nanotube composites are being investigated.',
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** the benefits and limitations of a country spending significant amounts of government money to construct the first space elevator.\n\nIn your answer you should include:\n• benefits of constructing a space elevator\n• limitations of constructing a space elevator\n• a conclusion stating whether a government should spend money on constructing a space elevator',
        marks: 8,
        ph: 'BENEFITS:\n•\n•\n\nLIMITATIONS:\n•\n•\n\nCONCLUSION:\nThe government should / should not ... because ...',
      },
    ],
  },
]
