import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-nov-2020-v1',
  subject: 'Physics',
  session: 'November',
  year: 2020,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

const P = '/images/papers/physics-nov-2020/'

export const questions: Question[] = [

  // ─── Q1: Thermoregulation in animals (8 marks, Criterion A) ───
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Physics — Thermoregulation',
    marks: 8,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'conduction', 'convection', 'radiation', 'evaporation'], level: 'developing' },
    stem: 'Mammals need to keep their body temperature within a given range, a concept called thermoregulation. This question is about the physics of heat transfer used in thermoregulation.',
    figImages: [`${P}q1-animals.png`],
    tasks: [
      {
        label: 'a',
        text: '**Select** which of these animals is better adapted to living in cold conditions.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A — Crocodile: smooth, scaly skin', 'B — Camel: short, sparse coat', 'C — Arctic hare: dense, white fur', 'D — Elephant: thick, sparse skin'],
        ph: 'Select one option.',
      },
      {
        label: 'b',
        text: 'Musk oxen have a dense undercoat of fine, woolly fur beneath an outer layer of long guard hairs. **Outline** how this feature enables musk oxen to keep warm in cold weather.',
        marks: 2,
        ph: 'Describe the physics of how layered dense fur reduces heat loss (2 points).',
      },
      {
        label: 'c',
        text: 'The snowy owl is adapted to living in Arctic conditions, while the Saharan silver ant has evolved to survive in one of the hottest environments on Earth.\n\n**Outline** how the white feathers of the snowy owl **and** the reflective silver hairs of the Saharan silver ant help with thermoregulation. You should use scientific language in your answer.',
        marks: 2,
        ph: 'Address both features: (1) white feathers and reduced radiation emission/absorption, (2) silver hairs and reflection of solar radiation.',
      },
      {
        label: 'd',
        text: 'Horses cool down by sweating through their skin. Sweat contains water that evaporates from the horse\'s coat.\n\n**Explain** how the process of evaporation leads to a cooling effect in a horse.',
        marks: 3,
        ph: 'Use particle theory: which particles escape, what happens to those left behind, and why this cools the horse.',
      },
    ],
  },

  // ─── Q2: Stelvio Pass hill climb / energy (9 marks, Criterion A) ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power — Mountain Race',
    marks: 9,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['gravitational potential energy', 'Sankey diagrams', 'power'], level: 'developing' },
    stem: 'The Stelvio Pass in Italy is one of the highest paved mountain roads in the Alps. It is used as a venue for hill climb motor racing, where drivers compete to ascend the mountain in the fastest time.',
    figImages: [`${P}q2-pikes.png`],
    tasks: [
      {
        label: 'a',
        text: 'The Sankey diagram below represents the energy changes associated with a car engine. **Label** the energy forms on the diagram.',
        marks: 2,
        figImages: [`${P}q2a-sankey.png`],
        ph: 'Label all three output arrows: Useful energy output (25%), Heat losses (70%), Frictional losses (5%).',
      },
      {
        label: 'b',
        text: 'The event starts at an altitude of 900 m and ends at an altitude of 2500 m. A car competing in the race had a mass of 720 kg. **Calculate** the gain in gravitational potential energy. You should assume that the gravitational field strength is 10 N kg⁻¹.',
        marks: 4,
        figImages: [`${P}q2b-cars.png`],
        ph: 'Show working: Δh = 2500 − 900 = 1600 m; ΔEp = mgh = 720 × 10 × 1600 = ? J or MJ',
      },
      {
        label: 'c',
        text: 'A lighter car travelling the same route gained 9.6 MJ in 480 s. **Calculate** the power of this car.',
        marks: 3,
        ph: 'Show working: P = E / t = 9 600 000 / 480 = ? W   Include correct units.',
      },
    ],
  },

  // ─── Q3: Light waves and space (9 marks, Criterion A) ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Astrophysics — Light & Satellites',
    marks: 9,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['light emission and reflection', 'geostationary satellites', 'speed of light', 'Big Bang'], level: 'proficient' },
    stem: 'This question is about light waves and space. When we look up at the night sky, many bright objects are visible.',
    figImages: [`${P}q3-nightsky.png`],
    tasks: [
      {
        label: 'a',
        text: '**Select** whether each object emits its own light or reflects light.\n\n| Object | Emits or reflects light |\n|--------|------------------------|\n| Star | ? |\n| Moon | ? |\n| Planet | ? |\n| Satellite | ? |',
        marks: 2,
        widget: 'radio_select',
        widgetOptions: ['Star — Emits; Moon — Reflects; Planet — Reflects; Satellite — Reflects'],
        ph: 'Select Emits or Reflects for each: Star, Moon, Planet, Satellite.',
      },
      {
        label: 'b',
        text: 'Some satellites are always at the same point above the surface of the Earth. These are known as geostationary satellites. **State** why these satellites appear to be stationary.',
        marks: 1,
        ph: 'State the orbital period of a geostationary satellite.',
      },
      {
        label: 'c',
        text: 'Geostationary satellites are used to relay television broadcasts around the world. **State** one additional application of geostationary satellites.',
        marks: 1,
        ph: 'Give one use other than TV broadcasting (e.g. weather forecasting, GPS, satellite phone, navigation).',
      },
      {
        label: 'd',
        text: 'Geostationary orbit is approximately 36 000 km above the surface of the Earth. Light travels at 3 × 10⁸ m s⁻¹. A journalist broadcasts a live report from a remote location via satellite link. **Calculate** the minimum time delay between sending the signal and it being received back on Earth.',
        marks: 3,
        ph: 'Convert km → m; total distance = 2 × 3.6 × 10⁷ m; t = d / c = ? Show all steps.',
      },
      {
        label: 'e',
        text: 'The James Webb Space Telescope observes that distant galaxies are moving away from each other. **Outline** how this observation provides evidence for the origin of the universe.',
        marks: 2,
        ph: 'Link: galaxies moving apart → in the past they were closer together → evidence for the Big Bang.',
      },
    ],
  },

  // ─── Q4: Kibble balance / electromagnet investigation (12 marks, Criterion B) ───
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Magnetism & Electromagnetism — Kibble Balance',
    marks: 12,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['scientific inquiry', 'electromagnets', 'variables', 'hypothesis'], level: 'proficient' },
    stem: 'Between 1889 and 2019, the kilogram was defined as the mass of a block of metal known as the International Prototype of the Kilogram. In 2019, scientists decided that a new way to define the mass of a kilogram was needed. The Kibble balance uses the force of an electromagnetic field produced by a current in a wire to balance the weight of an object and therefore calculate its mass. It is possible to investigate the same effect in your school classroom using an electromagnet and steel washers.',
    figImages: [`${P}q4-kibble.png`],
    tasks: [
      {
        label: 'a',
        text: '**State** the research question this experiment could investigate.',
        marks: 1,
        ph: 'Write a research question identifying the independent variable (current) and dependent variable (electromagnet strength / weight of washers supported).',
      },
      {
        label: 'b',
        text: 'Below is a list of variables that are important in this experiment. **Select** the description that best describes each.\n\n| Variable | Independent | Dependent | Control |\n|----------|-------------|-----------|--------|\n| Current | | | |\n| Diameter of the iron rod | | | |\n| Number of turns | | | |\n| Total length taken up by the turns | | | |\n| Total weight of steel washers supported by the electromagnet | | | |\n| Size of the steel washers | | | |',
        marks: 4,
        widget: 'variable_classify',
        widgetOptions: ['Current', 'Diameter of the iron rod', 'Number of turns', 'Total length taken up by the turns', 'Total weight of steel washers supported', 'Size of the steel washers'],
        ph: 'Classify each variable: Current = Independent; Weight of washers = Dependent; all others = Control.',
      },
      {
        label: 'c',
        text: 'Using the information contained in the video and your knowledge of electromagnets, **formulate** a testable hypothesis that could test your research question from part (a).',
        marks: 3,
        ph: 'Structure: If [current increases], then [weight of steel washers supported will increase] because [the electromagnetic field is stronger].',
      },
      {
        label: 'd',
        text: 'In the laboratory, you have a range of equipment available. **Select** one piece of equipment that you would need and state how it would be used in the experiment.',
        marks: 2,
        ph: 'Name the equipment (e.g. ammeter) and state its purpose (to measure the size of the current).',
      },
      {
        label: 'e',
        text: 'A second piece of equipment is also needed to measure the dependent variable. **Select** the most appropriate choice and justify your selection.',
        marks: 2,
        ph: 'Name the equipment (e.g. balance/scale) and explain why that range is most suitable (greatest range to measure the total weight of washers).',
      },
    ],
  },

  // ─── Q5: Electromagnet steel washer investigation (15 marks, Criterion C) ───
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Magnetism — Steel Washer Investigation',
    marks: 15,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['data collection', 'data processing', 'graph analysis', 'proportional relationships'], level: 'proficient' },
    stem: 'Two different groups of students in your class choose to investigate a different variable. They both investigate whether the strength of the electromagnet is affected by the spacing of the turns wrapped around the iron rod. They decide to keep the current constant in the coil at 2 A. Your teacher tells the class that:\n\n**magnetic force ~ current × number of turns per centimetre**\n\nThe first group of students uses steel washers, each with a weight of 0.3 N, to determine the weight supported by the electromagnet.',
    figImages: [`${P}q5-paperclips.png`],
    tasks: [
      {
        label: 'a',
        text: '**Present** the data from the tablet in a table.',
        marks: 3,
        ph: 'Draw a table with clear headings and units. Include all 6 data rows (coil length / cm vs number of washers): 1.0→6, 2.0→3, 3.0→2, 4.0→1, 5.0→1, 6.0→1.',
      },
      {
        label: 'b',
        text: '**Calculate** the number of turns per centimetre and the total washer weight for each measurement. Present this processed data in a second table.',
        marks: 4,
        ph: 'Calculate turns per cm (= turns ÷ length) and weight/N (= washers × 0.3 N) for each row. Show working and correct units (cm⁻¹ and N). All values to 1 d.p.',
      },
      {
        label: 'c',
        text: 'The first group used steel washers in their experiment. The second group uses small steel pins, each with a weight of 0.01 N. **Justify** why the second group of students will produce a better set of data.',
        marks: 2,
        ph: 'This would lead to more accurate data because small pins produce a more precise measure of weight supported (0.01 N increments vs 0.3 N increments).',
      },
      {
        label: 'd',
        text: 'The relationship given for this experiment was:\n\n**weight supported ~ current × number of turns per centimetre**\n\nThe second group produced the following graph of their results. Use the graph to **explain** if the data supports the relationship.',
        marks: 4,
        figImages: [`${P}q5d-graph.png`],
        ph: 'Describe: straight line through the origin → relationship is proportional. State this supports the given relationship (weight ∝ turns per cm at constant current).',
      },
      {
        label: 'e',
        text: 'The independent variable in this experiment was number of turns per centimetre. If the independent variable was changed to current, **predict** the shape and the gradient of a graph drawn from the new data.',
        marks: 2,
        ph: 'Shape: same (straight line through the origin — still proportional). Gradient: would be different because current is a different variable with a different constant of proportionality.',
      },
    ],
  },

  // ─── Q6: Capillary action investigation (11 marks, Criterion C) ───
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Pressure — Capillary Action',
    marks: 11,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    tags: { unit: 'pressure', topics: ['capillary action', 'proportional relationships', 'graphical analysis', 'gradient calculation'], level: 'proficient' },
    stem: 'We normally expect liquids to flow downwards through a tube. However, if the diameter of the tube is small enough, the liquid will rise up through the tube. This process is known as capillary action. This is one of the mechanisms by which liquids flow up through plant stems and tree trunks.\n\nA student decides to perform an experiment to investigate capillary action. After some research, they discover that the height to which the water level has risen above the liquid surface is determined by the following equation:\n\n**height above liquid surface = capillary constant × (1 / diameter)**\n\nThe capillary constant is the constant of proportionality for capillary action.',
    tasks: [
      {
        label: 'a',
        text: 'The results of the experiment are recorded in the table below. **Measure** the height of the water in the tube and complete the table.',
        marks: 2,
        figImages: [`${P}q6-capillary.png`],
        ph: 'Read tube C height from the diagram (≈ 14.0 mm) and enter: C: diameter 2.0 mm, 1/diameter = 0.50 mm⁻¹, height = 14.0 mm.',
      },
      {
        label: 'b',
        text: '**Plot** your measured value on the graph below, and draw a line of best fit. You should add labels to the axes.',
        marks: 4,
        ph: 'Plot point C at (0.50, 14.0). Draw line of best fit (through origin, approximately equal points above and below). Label x-axis: "1/diameter / mm⁻¹" and y-axis: "Height of liquid / mm".',
      },
      {
        label: 'c',
        text: '**Calculate** the capillary constant from the graph. You must show your working in your answer.',
        marks: 3,
        ph: 'Choose two points on the line of best fit with Δy ≥ 20 mm. Calculate gradient = Δy / Δx. Capillary constant ≈ 28 mm² (accept 23–33).',
      },
      {
        label: 'd',
        text: 'Giant redwood trees can grow to almost 100 m in height. From this experiment, we can conclude that capillary action is not the only mechanism used to move water through tree trunks. Use data from the image below to **suggest** how this experiment supports this conclusion.',
        marks: 2,
        figImages: [`${P}q7-redwood.png`],
        ph: 'Use the inverse relationship: height ∝ 1/diameter. For a 115 m tree, the tube diameter would need to be unrealistically small → capillary action alone cannot explain water reaching 100+ m heights.',
      },
    ],
  },

  // ─── Q7: Design investigation — salt concentration and capillary action (13 marks, Criterion B) ───
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Pressure — Capillary Action Design',
    marks: 13,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    tags: { unit: 'pressure', topics: ['experimental design', 'variables', 'method', 'data collection'], level: 'advanced' },
    stem: 'You decide to extend the experiment and investigate how changing the concentration of dissolved salt in the water affects the height that the liquid rises up a capillary tube.',
    tasks: [
      {
        label: 'a',
        text: '**Design** an investigation that you could use to carry out this investigation. In your plan, you must include:\n- a research question\n- the independent, dependent and one control variable\n- the equipment you need and how it will be used\n- your method for manipulating the variables\n- how you will collect sufficient data',
        marks: 13,
        ph: 'Research question: How does salt concentration affect the height liquid rises in a capillary tube?\nIV: salt concentration (g/L or g/100 mL); DV: height of liquid rise (mm); CV: tube diameter, liquid temperature, tube material.\nEquipment: capillary tubes, balance, graduated cylinder, ruler, beaker, distilled water, salt, stirring rod.\nMethod: prepare solutions of at least 5 different salt concentrations; measure height of rise in each; repeat 3 times; calculate mean.\nData: record in table; at least 5 increments AND 3 trials to calculate mean.',
      },
    ],
  },

  // ─── Q8: Maglev trains (8 marks, Criterion A) ───
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Magnetism — Maglev Trains',
    marks: 8,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['magnetic forces', 'friction', 'electromagnetic levitation'], level: 'proficient' },
    stem: 'One strategy used by infrastructure planners to transport people quickly in urban areas is the maglev (magnetic levitation) train. This type of train moves using powerful electromagnets instead of the conventional rail-and-wheels system.',
    tasks: [
      {
        label: 'a',
        text: 'Some metals are attracted to magnets, some are not. **Select** the metal that is attracted to magnets.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Gold', 'Silver', 'Iron', 'Lead'],
        ph: 'Select one metal.',
      },
      {
        label: 'b',
        text: 'Maglev trains use repelling forces between strong electromagnets attached to the tracks and the underside of the train. These electromagnets lift the whole train to float at about 1 cm above the tracks. The train can travel at an average speed of 430 km h⁻¹.\n\nIn order to function, the maglev train uses magnetic forces to control three systems: the levitation system, the guidance system, and the propulsion system.\n\n**Identify** the force corresponding to each system in the diagram.',
        marks: 2,
        figImages: [`${P}q8-maglev.png`, `${P}q8b-forces.png`],
        ph: 'Match each force arrow to a system: Levitation = upward force (blue), Guidance = sideways force (green), Propulsion = forward force (red).',
      },
      {
        label: 'c',
        text: 'Compared to a conventional train with wheels in contact with the track, the frictional forces in maglev trains are lower. **Suggest** two advantages of lower frictional forces.',
        marks: 2,
        ph: 'Give two distinct advantages: e.g. higher maximum speed; less energy wasted as heat; less wear and tear on components; lower maintenance costs.',
      },
      {
        label: 'd',
        text: 'The size of the repelling force depends on the distance between the magnets. The graph below shows how the repelling force varies when the distance between the magnets increases.\n\nUse the graph to **explain** the effect on the repelling force of an increase in the number of passengers.',
        marks: 3,
        figImages: [`${P}q8d-graph.png`],
        ph: 'Step 1: more passengers → greater weight/load on train. Step 2: train sinks closer to track → smaller distance between magnets. Step 3: from graph, smaller distance → larger repelling force.',
      },
    ],
  },

  // ─── Q9: Transportation evaluation (15 marks, Criterion D) ───
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Forces & Transport — Evaluation',
    marks: 15,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['evaluation', 'transport', 'science in society', 'economic and environmental impact'], level: 'advanced' },
    stem: 'The increase in world population has created a need for a complex and varied transportation infrastructure. New technologies have given people the choice of several options for moving between cities. More people are able to travel long distances for work and leisure. People value comfort, reduced travel times and low cost. The infographic shows some information related to four transport options that could be taken when travelling between two cities.',
    figImages: [`${P}q9-transport.png`],
    tasks: [
      {
        label: 'a',
        text: 'Using information from the infographic above and your wider MYP knowledge, choose one of the alternative transportation methods. **Discuss and evaluate** your chosen method compared to driving a car. In your answer you should include:\n- the economic advantages and disadvantages of your chosen method compared to driving\n- the environmental advantages and disadvantages of your chosen method compared to driving\n- the comfort of your chosen method compared to driving\n- the safety of your chosen method compared to driving\n- your final recommendation',
        marks: 15,
        ph: 'Choose train, air, or coach. Compare systematically on: cost, CO₂/environmental impact, comfort (seating, space, journey experience), safety data, and make a justified final recommendation. Use specific data from the infographic where possible.',
      },
    ],
  },

]
