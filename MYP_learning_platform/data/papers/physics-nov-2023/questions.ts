import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-nov-2023',
  subject: 'Physics',
  session: 'November',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Astronomy, Astrophysics and Units (10 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Astronomy & Astrophysics',
    marks: 10,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['solar system structure', 'Big Bang theory', 'stars and stellar evolution'], level: 'developing' },
    stem: 'This question is about astronomy, astrophysics and units. The diagram below shows the solar system (not to scale). The planets are arranged in order from the Sun, but some labels are missing.',
    nativeContent: 'solar_system',
    artefact: {
      component: 'OrbitSim',
      data: {
        title: 'The solar system (planets orbiting the Sun, not to scale)',
        mode: 'orbit',
        central: 'Sun',
        bodies: [
          { name: 'Sun', role: 'center', radius: 12, colour: '#f6b73c' },
          { name: 'Mercury', orbitalPeriod: 88, orbitRadius: 1, radius: 3, colour: '#b08d57' },
          { name: 'Venus', orbitalPeriod: 225, orbitRadius: 1.6, radius: 4, colour: '#d9a066' },
          { name: 'Earth', orbitalPeriod: 365, orbitRadius: 2.2, radius: 4, colour: '#3a6ea5' },
          { name: 'Mars', orbitalPeriod: 687, orbitRadius: 2.8, radius: 3.5, colour: '#c0392b' },
          { name: 'Jupiter', orbitalPeriod: 4333, orbitRadius: 3.6, radius: 8, colour: '#caa472' },
          { name: 'Saturn', orbitalPeriod: 10759, orbitRadius: 4.3, radius: 7, colour: '#d8c38a' },
          { name: 'Uranus', orbitalPeriod: 30687, orbitRadius: 5.0, radius: 5.5, colour: '#7fd6d6' },
          { name: 'Neptune', orbitalPeriod: 60190, orbitRadius: 5.6, radius: 5.5, colour: '#3b6fd6' },
        ],
      },
      caption: 'The eight planets orbit the Sun. The two missing labels in the drag-and-drop diagram are Jupiter (between Mars and Saturn) and Neptune (beyond Uranus). Play to watch the inner planets orbit faster than the outer ones.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Drag the correct planet names into the blank slots in the solar system diagram above. The planets shown in order from the Sun are: Mercury, Venus, Earth, Mars, [blank], Saturn, Uranus, Neptune, [blank]. State the names of the two missing objects that would correctly complete the solar system diagram, placing them in the correct order from the Sun.',
        marks: 2,
        ph: 'Name the two missing objects in order from the Sun...',
        widget: 'drag_drop_planets',
      },
      {
        label: 'b',
        text: 'In addition to the Sun and planets, state one type of object not made by humans that forms part of the solar system.',
        marks: 1,
        ph: 'e.g. moons, comets, asteroids...',
      },
      {
        label: 'c',
        text: 'The Sun is a star. Outline two differences between a star and a planet.',
        marks: 2,
        ph: 'Difference 1:\nDifference 2:',
      },
      {
        label: 'd',
        text: 'Stars and planets are found in huge collections called galaxies. Observations of distant galaxies show that they are moving away from our galaxy. The more distant the galaxy, the greater its speed. From these observations, scientists developed the Big Bang theory. Describe the Big Bang theory and how it is supported by these observations.',
        marks: 3,
        ph: 'Describe what the Big Bang theory states, and then explain how the observations of galaxies moving away support it...',
      },
      {
        label: 'e',
        text: 'The closest star to the Earth is Proxima Centauri which is 4 × 10¹⁶ m away. Astronomers may state this distance as 1.3 parsecs. The parsec is a unit of distance which is not an SI unit. Suggest one advantage and one disadvantage of using non-SI units such as parsecs in astrophysics.',
        marks: 2,
        ph: 'Advantage:\n\nDisadvantage:',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Carbon Dating (8 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity & Carbon Dating',
    marks: 8,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['radioactive decay', 'half-life', 'atomic structure'], level: 'proficient' },
    stem: 'This question is about using carbon dating to identify the age of organic matter. An atom of carbon-14 is represented as: ¹⁴₆C (mass number 14, atomic number 6).',
    artefact: {
      component: 'DecaySim',
      data: {
        title: 'Decay of carbon-14 (percentage of carbon-14 atoms remaining vs time)',
        isotope: 'carbon-14',
        daughter: 'nitrogen-14',
        decayMode: 'beta',
        halfLife: 5730,
        units: 'years',
        initialCount: 100,
        axisMax: 40000,
        xAxis: 'Time / years',
        yAxis: 'Carbon-14 atoms / %',
      },
      caption: 'The curve starts at 100% and halves every half-life. Play or drag the time marker: the half-life readout (~5730 years) is what part (c) asks for, and scrubbing to 20% remaining gives the sample age used in part (d).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Determine the number of protons and the number of neutrons in a nucleus of carbon-14.\n\nNumber of protons:\nNumber of neutrons:',
        marks: 2,
        ph: 'Number of protons: ...\nNumber of neutrons: ...',
      },
      {
        label: 'b',
        text: 'Carbon-14 is an unstable isotope. It decays to nitrogen-14. Select the type of decay process (alpha, beta, or gamma) and state one product of this decay, apart from the nitrogen-14 nucleus that is formed.',
        marks: 2,
        ph: 'Type of decay: ...\nOne product of decay (apart from nitrogen-14): ...',
      },
      {
        label: 'c',
        text: 'The graph below shows the percentage of carbon-14 atoms remaining as a sample decays over time. The x-axis shows Time / years (0 to 40,000) and the y-axis shows Carbon-14 atoms / % (0 to 100). The curve starts at 100% and decreases exponentially. Using the graph, determine the half-life of carbon-14.',
        marks: 1,
        ph: 'Half-life of carbon-14 ≈ ... years',
      },
      {
        label: 'd',
        text: 'Living things contain a large number of carbon atoms. The proportion of carbon-14 atoms compared to the total number of carbon atoms stays constant until they die. If an ancient sample of wood contains 20% of the carbon-14 possessed by living things, use the graph described in part (c) to determine the approximate age of the sample.',
        marks: 1,
        ph: 'Approximate age of sample ≈ ... years',
      },
      {
        label: 'e',
        text: 'A student makes the following claim:\n\n"Carbon-14 dating has shown that dinosaur bones are over 65 million years old."\n\nUse the graph in part (c) to evaluate this statement.',
        marks: 2,
        ph: 'Evaluate the claim using evidence from the carbon-14 decay graph...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — LED vs Filament Lightbulbs (9 marks) Criterion C
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'C',
    type: 'extended',
    topic: 'Energy Efficiency & Circuits',
    marks: 9,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['electrical power', "Ohm's law", 'energy efficiency'], level: 'proficient' },
    stem: 'A student decides to compare the efficiency of modern lightbulbs using Light Emitting Diodes (LEDs) to older filament lightbulbs.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Filament bulb', 'LED'],
        rows: [
          ['Total energy / power input', '100 J of electrical energy', '0.05 W (current 0.05 A at 1 V)'],
          ['Useful light output', '5 J', '0.02 W'],
          ['Wasted output form', 'thermal energy (heat)', 'thermal energy (heat)'],
          ['How light is produced', 'heating a thin wire (filament) until it glows', 'electrons crossing a semiconductor junction'],
        ],
      },
      caption: 'A comparison of the two bulbs the student investigates. The filament figures feed the Sankey-diagram task (a); the LED figures feed the power calculation in (c) and the efficiency comparison in (d).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The Sankey diagram for a filament light bulb shows: Electrical energy input = 100 J, Light energy output = 5 J (top arrow), and Thermal energy output at the bottom. Label the Sankey diagram by stating the value of the thermal energy output in joules, and identify what the two output energy forms are.',
        marks: 2,
        ph: 'Thermal energy output = ... J\nIdentify the two output forms: ...',
        widget: 'sankey_q3',
      },
      {
        label: 'b',
        text: 'The student uses a circuit to investigate an LED. Design a circuit to measure the current through the LED and the voltage across the LED. Describe the circuit you would use, naming the instruments and explaining how they should be connected.',
        marks: 2,
        ph: 'Describe the circuit design including placement of ammeter (in series) and voltmeter (in parallel)...',
      },
      {
        label: 'c',
        text: 'The student takes measurements using her circuit and finds that the current through the LED is 0.05 A when the voltage is 1 V. Use the formula P = IV to calculate the power of the LED. Show your working and include the unit.',
        marks: 2,
        ph: 'P = IV = ... × ... = ... W',
      },
      {
        label: 'd',
        text: 'The LED emits 0.02 W of light. Using information from part (a) and your answer to part (c), compare the efficiency of an LED with that of a filament bulb. Show your working for both efficiency calculations.',
        marks: 3,
        ph: 'Efficiency of filament bulb = useful output / total input = 5/100 = ...\nEfficiency of LED = 0.02 / 0.05 = ...\nComparison: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Bouncing Ball Investigation (18 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'simulation',
    simType: 'bounce',
    simCaption: 'Interactive: Click "Drop Ball" to drop the ball from ~60 cm. Observe the bounce height. You can reset and try again.',
    topic: 'Bouncing Ball Investigation',
    marks: 18,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'gravitational potential energy', 'conservation of energy'], level: 'proficient' },
    stem: 'A student wants to study the motion of balls when they bounce. The student decides to find out how the height the ball is dropped from affects the height of the first bounce by carrying out an investigation.',
    tasks: [
      {
        label: 'a',
        text: 'State a research question that would be addressed by this investigation.',
        marks: 1,
        ph: 'How does ... affect ...?',
      },
      {
        label: 'b',
        text: 'Classify the variables for this investigation by completing the classification below for each factor:\n\n• Height of the first bounce\n• The kind of ball used\n• Surface that the ball bounces from\n• Drop height\n• Temperature of the ball\n\nFor each, state whether it is the independent variable, dependent variable, or a control variable.',
        marks: 3,
        ph: 'Height of first bounce: ...\nKind of ball used: ...\nSurface: ...\nDrop height: ...\nTemperature: ...',
        widget: 'variable_classify',
      },
      {
        label: 'c',
        text: 'Use the simulation above — drop the ball from the starting position (~60 cm). State the height of the first bounce that you observe.',
        marks: 2,
        ph: 'Height of first bounce ≈ ... cm',
      },
      {
        label: 'd',
        text: 'The student starts to write an explanation:\n\n"The reason that the height of the first bounce of a ball is different to the drop height is because of the energy transformations that occur..."\n\nUse the concept of energy transformations to explain why the height of the first bounce is not the same as the drop height.',
        marks: 3,
        ph: 'Explain using GPE → KE → thermal/sound energy transformations...',
      },
      {
        label: 'e',
        text: 'The student collects data shown below. Calculate the missing average height for the 0.40 m drop height and add it to the table.',
        marks: 2,
        ph: 'Average = (0.25 + 0.27 + 0.25) / 3 = ... m',
        widget: 'q4e_table',
      },
      {
        label: 'f',
        text: 'Outline why multiple trials were performed in this investigation and why this would lead to more reliable results.',
        marks: 2,
        ph: 'Multiple trials allow... which makes the results more reliable because...',
      },
      {
        label: 'g',
        text: 'Two graphs of the student\'s results are shown. Both graphs plot the same data (average height of first bounce / m on y-axis vs. drop height / m on x-axis) but Graph A uses a scale from 0–2.0 on both axes while Graph B uses a scale from 0–1.0 on the y-axis and 0–2.0 on the x-axis. Graph B also has the best-fit line passing through the origin.\n\nIdentify which graph shows more clearly the relationship between the variables. Justify your answer.',
        marks: 2,
        ph: 'Graph ...\nJustification: ...',
        widget: 'bounce_graphs_ab',
      },
      {
        label: 'h',
        text: 'Before collecting data, the student made the following prediction:\n\n"As the drop height increases, the height of the first bounce will also increase. There will be a proportional relationship between the variables."\n\nUse the graphs in part (g) to evaluate the student\'s prediction.',
        marks: 3,
        ph: 'Evaluate whether the prediction is correct, using evidence from the graphs (e.g. does the line pass through origin? Is the relationship linear/proportional?)...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Coefficient of Restitution (14 marks) Criterion C
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Coefficient of Restitution',
    marks: 14,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'conservation of energy', 'energy efficiency'], level: 'proficient' },
    stem: 'Another student is doing a similar investigation on bouncing balls. They research the coefficient of restitution (e).\n\nWhen two objects collide, their velocities change. For a bouncing ball, e is calculated by dividing the speed after the collision by the speed before the collision.\n\nFor bouncing balls, this can be written using heights:\n\n  e = √(height of first bounce / drop height) = √(h₂/h₁)\n\nWhen e = 1, the ball has the same speed after the collision as before (perfectly elastic). The quantity e has no units.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Drop height (h₁)', 'Avg height of first bounce (h₂) / m', 'Coefficient of restitution (e)'],
        rows: [
          ['50.0 cm', '0.34', '0.82'],
          ['2.50 m', '1.44', '0.76'],
          ['1.50 m', '0.94', '0.74'],
          ['2.00 m', '1.21', '—'],
          ['1.00 m', '0.65', '0.806'],
        ],
      },
      caption: 'The student\'s table of processed data, exactly as they presented it. Note the inconsistent units (cm vs m), the missing e value for the 2.00 m drop, and the e values quoted to different numbers of significant figures — these are the presentation errors you must correct in part (c).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student decides to calculate the coefficient of restitution (e) using the relationship above. Suggest why this student would find it easier to measure height than to measure the speed of the ball in order to calculate e.',
        marks: 1,
        ph: 'Height is easier to measure because...',
      },
      {
        label: 'b',
        text: 'State what would be observed if e = 0 for the ball.',
        marks: 1,
        ph: 'If e = 0, the ball would...',
      },
      {
        label: 'c',
        text: 'The student\'s table of processed data is shown below. There are many errors in the way this student has presented their data.\n\nDrop height (h₁) | Avg height of first bounce (h₂) / m | Coefficient of restitution (e)\n50.0 cm          | 0.34                                 | 0.82\n2.50m            | 1.44                                 | 0.76\n1.50m            | 0.94                                 | 0.74 (note: should be 0.79)\n2.00m            | 1.21                                 | (missing)\n1.00m            | 0.65                                 | 0.806\n\nPresent the data in the correct format. Calculate the e value for a drop height of 2.00 m and add your value to the table.\n\nNote: Use e = √(h₂/h₁). For 2.00m: e = √(1.21/2.00)',
        marks: 6,
        ph: 'Correct table with consistent units:\nDrop height / m | Avg bounce height / m | e\n...\n\nCalculation of e for 2.00 m:\ne = √(1.21/2.00) = √(0.605) = ...',
        widget: 'q5c_table',
      },
      {
        label: 'd',
        text: 'Before collecting this data, the student wrote the following hypothesis:\n\n"The coefficient of restitution, e, will not be affected by the drop height. The value of e will be constant as it depends on the material the ball is made from and not on the drop height."\n\nUse the table of processed data in part (c) to evaluate the student\'s hypothesis.',
        marks: 3,
        ph: 'Look at the e values across different drop heights. Does e stay constant? What does this tell us about the hypothesis?',
      },
      {
        label: 'e',
        text: 'A collision with an e value of 1 is known as a perfectly elastic collision. A student in the class made the following statement:\n\n"A collision with an e value of 0.5 means that 50% of the kinetic energy of the ball is converted to other forms of energy."\n\nKinetic energy: KE = ½mv²\nCoefficient of restitution: e = v₂/v₁\n\nUse these equations to evaluate the statement made by the student.',
        marks: 3,
        ph: 'If e = 0.5, then v₂ = 0.5v₁\nKE₂/KE₁ = (½mv₂²)/(½mv₁²) = (v₂/v₁)² = e² = 0.25\nSo 75% of KE is converted, not 50%.\nThe statement is incorrect because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Table Tennis Investigation Design (18 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Experimental Design — Table Tennis',
    marks: 18,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'conservation of energy'], level: 'proficient' },
    stem: 'The game of table tennis involves hitting a plastic ball with a wooden racket. The racket is usually made from wood covered with a layer of sponge and rubber on top. The thickness of the sponge layer depends on the choice of the player — it can vary from no sponge to around 2.5 mm. A student is interested in how the bounce of a table tennis ball is affected by the thickness of the sponge layer on the racket. They decide to put a table tennis racket on the floor, drop table tennis balls onto the racket and measure the height of the first bounce.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="woodG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#caa472"/><stop offset="1" stop-color="#9c7b4a"/></linearGradient><radialGradient id="ballG" cx="0.35" cy="0.32"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e8772e"/></radialGradient></defs><rect width="600" height="320" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cross-section of a table tennis racket (not to scale)</text><line x1="40" y1="232" x2="560" y2="232" stroke="#94a3ad" stroke-width="1" stroke-dasharray="4 4"/><text x="46" y="248" font-size="10" fill="#94a3ad">floor</text><g><rect x="120" y="170" width="300" height="34" rx="4" fill="url(#woodG)" stroke="#7a5e36"/><rect x="120" y="150" width="300" height="20" fill="#f4c84a" stroke="#caa028"/><rect x="120" y="134" width="300" height="16" fill="#c0392b" stroke="#8a2a20"/></g><rect x="408" y="180" width="120" height="14" rx="7" fill="url(#woodG)" stroke="#7a5e36"/><text x="492" y="190" font-size="11" text-anchor="middle" fill="#5b3f1e">handle</text><circle cx="270" cy="104" r="22" fill="url(#ballG)" stroke="#a8531a"/><text x="270" y="78" font-size="11" text-anchor="middle" fill="#a8531a">plastic ball (dropped)</text><line x1="445" y1="143" x2="525" y2="120" stroke="#5b6b78" stroke-width="1"/><text x="528" y="122" font-size="11" fill="#8a2a20">rubber (top surface)</text><line x1="445" y1="160" x2="525" y2="158" stroke="#5b6b78" stroke-width="1"/><text x="528" y="161" font-size="11" fill="#b8860b">sponge layer</text><line x1="445" y1="187" x2="525" y2="200" stroke="#5b6b78" stroke-width="1"/><text x="528" y="203" font-size="11" fill="#7a5e36">layer of wood</text><g stroke="#2c5468" stroke-width="1"><line x1="100" y1="150" x2="100" y2="170"/><line x1="96" y1="150" x2="104" y2="150"/><line x1="96" y1="170" x2="104" y2="170"/></g><text x="92" y="164" font-size="10" text-anchor="end" fill="#2c5468">sponge</text><text x="74" y="176" font-size="9" text-anchor="end" fill="#2c5468">0–2.5 mm</text></svg>',
      },
      caption: 'The racket is wood topped by a sponge layer (0 to about 2.5 mm thick) and a rubber surface. The student investigates how the sponge-layer thickness changes the height of the first bounce of the plastic ball.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the student\'s idea to design an investigation to find out how the thickness of the sponge layer on a table tennis racket affects the height of the first bounce.\n\nIn your plan you should include:\n• the independent and dependent variables together with the justification of one control variable\n• a hypothesis for your investigation including a scientific explanation\n• a list of equipment you will use\n• how you will collect sufficient data\n• a method detailing the procedure you will follow',
        marks: 14,
        ph: 'Independent variable: thickness of sponge layer\nDependent variable: height of first bounce\nControl variable (with justification): ...\n\nHypothesis: As the sponge layer thickness increases, the height of the first bounce will... because...\n\nEquipment:\n• ...\n\nMethod:\n1. ...\n2. ...',
      },
      {
        label: 'b',
        text: 'In question 4 you considered the effect of drop height on bouncing balls and in part (a) of this question you considered the effect of the sponge layer on a table tennis racket. Suggest an investigation into another factor that could affect the height of bounce of a ball.\n\nIn your answer you should include a research question and independent and control variables. (The dependent variable is the height of first bounce — this has been completed for you.)\n\nResearch question:\nIndependent variable:\nControl variable 1:\nControl variable 2:',
        marks: 4,
        ph: 'Research question: How does [factor] affect the height of the first bounce?\nIndependent variable: ...\nControl variable 1: ...\nControl variable 2: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Passively Heated Houses (10 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Passive Housing & Heat Transfer',
    marks: 10,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['conduction', 'convection', 'radiation (thermal)'], level: 'advanced' },
    stem: 'Houses in cold climates are usually heated to provide a comfortable living environment. Passively heated houses are designed to lower the energy required for heating. In passively heated houses, the amount of heat lost to the surroundings is greatly reduced compared to houses which are actively heated.\n\nKey features of passive houses include:\n• Airtightness — prevents air moving between inside and outside\n• Heat recirculation — mechanical ventilation system circulates warm air\n• Thermal insulation of walls and roof — does not easily transfer heat\n• Insulated floor slab — minimizes thermal contact with ground\n• Direction of windows — positioned to maximize solar heat entering\n• Windows with three layers of glass — sealed, coated to allow sunlight in but prevent radiation leaving',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 420" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wallG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3e7cf"/><stop offset="1" stop-color="#e6d3ad"/></linearGradient><linearGradient id="roofG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a8531a"/><stop offset="1" stop-color="#7a3d12"/></linearGradient><radialGradient id="sunG" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="620" height="420" fill="#ffffff"/><rect x="0" y="350" width="620" height="70" fill="#c9b98a"/><text x="310" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cross-section of a passively heated house</text><circle cx="556" cy="78" r="30" fill="url(#sunG)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="520" y1="98" x2="470" y2="128"/><line x1="524" y1="110" x2="476" y2="140"/><line x1="528" y1="122" x2="482" y2="152"/></g><polygon points="200,130 340,130 270,70" fill="url(#roofG)" stroke="#5a2c0d"/><rect x="200" y="130" width="140" height="220" fill="url(#wallG)" stroke="#b89b66" stroke-width="6"/><rect x="225" y="160" width="42" height="52" fill="#bfe3f2" stroke="#3a6ea5" stroke-width="3"/><rect x="231" y="160" width="6" height="52" fill="#9fcfe6"/><rect x="243" y="160" width="6" height="52" fill="#9fcfe6"/><rect x="273" y="160" width="42" height="52" fill="#bfe3f2" stroke="#3a6ea5" stroke-width="3"/><rect x="225" y="250" width="42" height="80" fill="#bfe3f2" stroke="#3a6ea5" stroke-width="3"/><rect x="200" y="344" width="140" height="10" fill="#7a8a6a" stroke="#566448"/><path d="M285,250 q30,-30 0,-60 q-30,-30 0,-60" fill="none" stroke="#c0392b" stroke-width="2.5" stroke-dasharray="5 4"/><path d="M295,330 q34,-40 0,-80 q-34,-40 0,-80" fill="none" stroke="#3a6ea5" stroke-width="2.5" stroke-dasharray="5 4"/><g font-size="11" fill="#1f2d3a"><line x1="200" y1="100" x2="120" y2="100" stroke="#5b6b78" stroke-width="1"/><text x="116" y="103" text-anchor="end">thermal insulation of walls &amp; roof</text><line x1="200" y1="240" x2="120" y2="250" stroke="#5b6b78" stroke-width="1"/><text x="116" y="253" text-anchor="end">airtightness (no air leaks)</text><line x1="200" y1="349" x2="120" y2="360" stroke="#5b6b78" stroke-width="1"/><text x="116" y="363" text-anchor="end">insulated floor slab</text><line x1="315" y1="186" x2="430" y2="170" stroke="#5b6b78" stroke-width="1"/><text x="434" y="173" text-anchor="start">triple-glazed windows facing the Sun</text><line x1="320" y1="290" x2="430" y2="300" stroke="#5b6b78" stroke-width="1"/><text x="434" y="303" text-anchor="start">heat recirculation (warm air re-used)</text></g></svg>',
      },
      caption: 'A passive house combines roof and wall insulation, an airtight sealed envelope, an insulated floor slab, triple-glazed windows facing the Sun, and a ventilation system that recirculates warm air — together these greatly reduce the heat energy needed to keep the house warm.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Passively heated houses are designed to reduce the amount of money people spend on energy while allowing them to keep their houses warm. Use your knowledge of physics to outline how passive houses are able to stay warm inside, while requiring less heat energy compared to actively heated houses.',
        marks: 2,
        ph: 'Passive houses reduce heat loss by... The insulation/triple glazing/airtightness works because...',
      },
      {
        label: 'b',
        text: 'Outline how using three layers of glass in windows reduces heat loss by conduction.',
        marks: 2,
        ph: 'Three layers of glass create... between the panes. This reduces conduction because...',
      },
      {
        label: 'c',
        text: 'Passively heated houses are tested for airtightness by creating a pressure difference between the inside and the outside of the house. Use kinetic theory to describe how a higher pressure inside the house can help to locate the places where air can escape through the walls of the house.',
        marks: 3,
        ph: 'Higher pressure means more/faster moving gas particles... When there are gaps in the walls, particles will... This allows technicians to detect leaks by...',
      },
      {
        label: 'd',
        text: 'The passively heated house concept was developed in Germany. A stacked bar chart shows household energy consumption for heating by energy source in Germany. The sources shown are: Gas (~50%), Oil (~15%), Wood (~20%), Heat (~8%), Electricity (~5%), Coal (~2%). State the percentage of households using oil as a source of energy for heating.',
        marks: 1,
        artefact: {
          component: 'PieChart',
          data: {
            kind: 'doughnut',
            title: 'Household energy consumption for heating, by energy source (Germany)',
            unit: '%',
            series: [
              { name: 'Gas', value: 50, color: '#e8772e' },
              { name: 'Wood', value: 20, color: '#2f9e44' },
              { name: 'Oil', value: 15, color: '#495057' },
              { name: 'Heat (district)', value: 8, color: '#1971c2' },
              { name: 'Electricity', value: 5, color: '#f0c419' },
              { name: 'Coal', value: 2, color: '#5b3f1e' },
            ],
          },
          caption: 'Share of German households using each source of energy for heating. Read off the share that use oil.',
        },
        ph: 'Percentage using oil = ...%',
      },
      {
        label: 'e',
        text: 'Suggest why the move to passive housing has a positive effect on the environment.',
        marks: 2,
        ph: 'Passive housing reduces energy consumption which means... This leads to lower... and therefore reduces...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Passive Housing Policy (13 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science, Society & Environment',
    marks: 13,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'work-energy', topics: ['energy sources (renewable vs non-renewable)', 'energy efficiency'], level: 'advanced' },
    stem: 'The government of a country in a cold climate is considering giving money to people to upgrade their houses to meet the standards for passively heated houses.\n\nKey information from the infographic:\n\nCOST COMPARISON:\n• Active house: €180,000 to build; Passive house: €195,000 to build\n• Passive houses save 90% on heating costs (≈ €822/year saving)\n• Upgrade cost: €15,000 per house\n• Upgrade costs are decreasing with increasing demand\n\nREGULATION:\n• Governments determine building regulations and urban planning\n• Developing passive house standards is slow and costly\n• Legal standards guarantee safety, quality and performance\n\nPAYING FOR HEAT:\n• Heating costs are a large part of family expenditure\n• "Fuel poverty" — households choose between heating and food/clothing\n• Fuel poverty linked to adverse physical and mental health effects\n• Most common in low-income areas with poor housing quality\n\nAIR QUALITY:\n• Outdoor pollutants cannot enter (airtight)\n• Need well-maintained filter systems\n• If maintained, higher air quality than actively heated houses\n• Indoor pollutants from printers, copiers, fossil-fuel heaters',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Factor', 'Actively heated house', 'Passively heated house'],
        rows: [
          ['Cost to build', '€180 000', '€195 000'],
          ['Heating cost saving', '—', '≈ 90% (≈ €822 / year)'],
          ['Cost to upgrade an existing house', '—', '€15 000 (falling with demand)'],
          ['Building regulation', 'established standards', 'slow & costly to develop'],
          ['Fuel poverty risk', 'higher (more heating cost)', 'lower (much less heating cost)'],
          ['Air quality (if filters maintained)', 'lower', 'higher (airtight + filtered)'],
        ],
      },
      caption: 'Key figures from the passive-house infographic: cost comparison, heating-cost savings, upgrade cost, regulation, fuel poverty and air quality. Use these to weigh the social and economic implications discussed below.',
    },
    tasks: [
      {
        label: '',
        text: 'Discuss and evaluate the implications of upgrading houses to passively heated standards. In your answer you should include:\n• positive and negative social and economic implications for individuals in the community\n• positive and negative economic implications for governments and businesses\n• a concluding appraisal giving your opinion on whether governments should fund this upgrade',
        marks: 13,
        ph: 'SOCIAL/ECONOMIC IMPLICATIONS FOR INDIVIDUALS:\nPositive: ...\nNegative: ...\n\nIMPLICATIONS FOR GOVERNMENTS/BUSINESSES:\nPositive: ...\nNegative: ...\n\nCONCLUSION AND OPINION:\nOverall, I believe that...',
      },
    ],
  },
]
