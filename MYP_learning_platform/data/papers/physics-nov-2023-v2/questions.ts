import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2023 · VARIANT 2  (isomorphic to physics-nov-2023)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags, widget) in a NEW real-world context, with self-contained
// data-driven artefacts (no figImages). Numbers recomputed throughout.
//   Q1 Astronomy/units:  Proxima Centauri 4×10¹⁶ m → Sirius 8.1×10¹⁶ m
//   Q2 Radioactive dating: carbon-14 wood → cobalt-60 industrial sterilisation source
//   Q3 Efficiency/Sankey:  LED vs filament bulb → LED vs incandescent torch (Sankey 100/5/95)
//   Q4 Bounce investigation: generic ball → tennis ball on a clay court
//   Q5 Restitution (e):    bouncing ball → golf ball at constant temperature
//   Q6 Crit B design:      table-tennis sponge → thickness of a foam floor mat under the ball
//   Q7 Heat transfer:      passive house → triple-glazed eco-home in Norway
//   Q8 Crit D essay:       low-energy housing retrofit policy (refreshed numbers)
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-nov-2023-v2',
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
  // V2: Sirius 8.1 × 10¹⁶ m ≈ 2.6 parsecs
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
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 760 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sun2" cx="0.5" cy="0.5"><stop offset="0" stop-color="#ffe066"/><stop offset="1" stop-color="#f08c00"/></radialGradient></defs><rect width="760" height="150" fill="#ffffff"/><circle cx="36" cy="75" r="34" fill="url(#sun2)" stroke="#d9480f"/><text x="36" y="125" font-size="11" text-anchor="middle" fill="#d9480f">Sun</text><line x1="70" y1="75" x2="750" y2="75" stroke="#ced4da" stroke-width="1"/><g text-anchor="middle"><circle cx="110" cy="75" r="4" fill="#868e96"/><text x="110" y="58" font-size="9" fill="#495057">Mercury</text><circle cx="160" cy="75" r="6" fill="#e8b84b"/><text x="160" y="56" font-size="9" fill="#495057">Venus</text><circle cx="215" cy="75" r="6" fill="#1c7ed6"/><text x="215" y="56" font-size="9" fill="#495057">Earth</text><circle cx="265" cy="75" r="5" fill="#e8590c"/><text x="265" y="58" font-size="9" fill="#495057">Mars</text><rect x="300" y="60" width="44" height="30" rx="4" fill="#f1f3f5" stroke="#0b7285" stroke-dasharray="3 3"/><text x="322" y="79" font-size="10" fill="#0b7285">?</text><circle cx="400" cy="75" r="13" fill="#d9a441"/><text x="400" y="50" font-size="9" fill="#495057">Saturn</text><circle cx="470" cy="75" r="9" fill="#74c0fc"/><text x="470" y="54" font-size="9" fill="#495057">Uranus</text><circle cx="535" cy="75" r="9" fill="#3b5bdb"/><text x="535" y="54" font-size="9" fill="#495057">Neptune</text><rect x="590" y="60" width="44" height="30" rx="4" fill="#f1f3f5" stroke="#0b7285" stroke-dasharray="3 3"/><text x="612" y="79" font-size="10" fill="#0b7285">?</text></g><text x="380" y="142" font-size="10" text-anchor="middle" fill="#868e96">order from the Sun (not to scale)</text></svg>',
      },
      caption: 'The solar system in order from the Sun, with two objects missing (shown as ?).',
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
        text: 'Sirius, the brightest star in the night sky, is a distance of about 8.1 × 10¹⁶ m from the Earth. Astronomers may instead state this distance as 2.6 parsecs. The parsec is a unit of distance which is not an SI unit. Suggest one advantage and one disadvantage of using non-SI units such as parsecs in astrophysics.',
        marks: 2,
        ph: 'Advantage:\n\nDisadvantage:',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Cobalt-60 Sterilisation Source / Half-Life (8 marks) Criterion A
  // V2: Cobalt-60 (⁶⁰₂₇Co), half-life ~5.3 years, β⁻ decay → Nickel-60
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity & Half-Life',
    marks: 8,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['radioactive decay', 'half-life', 'atomic structure'], level: 'proficient' },
    stem: 'This question is about following the decay of a radioactive source used in industry. Cobalt-60 sources are used to sterilise medical equipment by irradiating it. An atom of cobalt-60 is represented as: ⁶⁰₂₇Co (mass number 60, atomic number 27).',
    nativeContent: 'carbon_decay',
    artefact: {
      component: 'DecaySim',
      data: {
        isotope: 'Cobalt-60',
        daughter: 'Nickel-60',
        decayMode: 'beta-minus',
        halfLife: 5.3,
        units: 'years',
        initialCount: 144,
        initialActivity: 500,
        activityUnits: 'TBq',
        axisMax: 26.5,
      },
      caption: 'Decay of cobalt-60. Drag the time marker to read the percentage (or activity) remaining at any time.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Determine the number of protons and the number of neutrons in a nucleus of cobalt-60.\n\nNumber of protons:\nNumber of neutrons:',
        marks: 2,
        ph: 'Number of protons: ...\nNumber of neutrons: ...',
      },
      {
        label: 'b',
        text: 'Cobalt-60 is an unstable isotope. It decays to nickel-60. Select the type of decay process (alpha, beta, or gamma) and state one product of this decay, apart from the nickel-60 nucleus that is formed.',
        marks: 2,
        ph: 'Type of decay: ...\nOne product of decay (apart from nickel-60): ...',
      },
      {
        label: 'c',
        text: 'The graph above shows the percentage of cobalt-60 atoms remaining as a sample decays over time. The x-axis shows Time / years (0 to about 26) and the y-axis shows Cobalt-60 atoms / % (0 to 100). The curve starts at 100% and decreases exponentially. Using the graph, determine the half-life of cobalt-60.',
        marks: 1,
        ph: 'Half-life of cobalt-60 ≈ ... years',
      },
      {
        label: 'd',
        text: 'A sterilisation plant must replace its cobalt-60 source once its activity falls to 25% of the original value. Use the graph described in part (c) to determine the approximate time after which the source must be replaced.',
        marks: 1,
        ph: 'Approximate replacement time ≈ ... years',
      },
      {
        label: 'e',
        text: 'A student makes the following claim:\n\n"Cobalt-60 could be used to date fossils that are millions of years old, in the same way as carbon dating."\n\nUse the graph in part (c) to evaluate this statement.',
        marks: 2,
        ph: 'Evaluate the claim using evidence from the cobalt-60 decay graph...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Incandescent vs LED Torch Efficiency (9 marks) Criterion C
  // V2: incandescent torch bulb Sankey 100 J in → 5 J light + 95 J thermal (matches sankey_q3 widget)
  // LED: I=0.06 A at V=10 V → P=0.60 W; LED light 0.21 W → LED eff 35% vs incandescent 5%
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
    stem: 'A student decides to compare the efficiency of a modern Light Emitting Diode (LED) torch with an older torch that uses a small incandescent (filament) bulb.',
    nativeContent: 'sankey_q3',
    artefact: {
      component: 'SankeySim',
      data: {
        units: 'J',
        input: { label: 'Electrical energy input', value: 100 },
        outputs: [
          { label: 'Light energy', value: 5, kind: 'out' },
          { label: 'Thermal (heat) energy', value: null, kind: 'loss' },
        ],
      },
      caption: 'Sankey diagram for the incandescent torch bulb. One output value is missing — find it using conservation of energy.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The Sankey diagram for the incandescent torch bulb shows: Electrical energy input = 100 J, Light energy output = 5 J (top arrow), and a thermal energy output at the bottom. Label the Sankey diagram by stating the value of the thermal energy output in joules, and identify what the two output energy forms are.',
        marks: 2,
        ph: 'Thermal energy output = ... J\nIdentify the two output forms: ...',
        widget: 'sankey_q3',
      },
      {
        label: 'b',
        text: 'The student uses a circuit to investigate the LED in the modern torch. Design a circuit to measure the current through the LED and the voltage across the LED. Describe the circuit you would use, naming the instruments and explaining how they should be connected.',
        marks: 2,
        ph: 'Describe the circuit design including placement of ammeter (in series) and voltmeter (in parallel)...',
      },
      {
        label: 'c',
        text: 'The student takes measurements using her circuit and finds that the current through the LED is 0.06 A when the voltage is 10 V. Use the formula P = IV to calculate the power of the LED. Show your working and include the unit.',
        marks: 2,
        ph: 'P = IV = ... × ... = ... W',
      },
      {
        label: 'd',
        text: 'The LED emits 0.21 W of light. Using information from part (a) and your answer to part (c), compare the efficiency of an LED with that of the incandescent torch bulb. Show your working for both efficiency calculations.',
        marks: 3,
        ph: 'Efficiency of incandescent bulb = useful output / total input = 5/100 = ...\nEfficiency of LED = 0.21 / 0.60 = ...\nComparison: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Tennis-Ball Bounce Investigation (18 marks) Criterion B
  // V2: tennis ball on a clay court; 0.40 m drop trials 0.25/0.27/0.25 → 0.26 m (widget-locked)
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
    stem: 'A student wants to study the motion of balls when they bounce. The student decides to find out how the height a tennis ball is dropped from affects the height of the first bounce on a clay court by carrying out an investigation.',
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
        text: 'The student starts to write an explanation:\n\n"The reason that the height of the first bounce of a tennis ball is different to the drop height is because of the energy transformations that occur..."\n\nUse the concept of energy transformations to explain why the height of the first bounce is not the same as the drop height.',
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
  // QUESTION 5 — Coefficient of Restitution: Golf Ball (14 marks) Criterion C
  // V2: golf ball context; q5c_table widget renders fixed table (2.00 m → e=√(1.21/2.00)=0.78)
  // so task (c) text mirrors widget data; part (e) uses e=0.8 (distinct from source 0.5 / v1 0.6)
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
    stem: 'Another student is doing a similar investigation on the bounce of a golf ball. They research the coefficient of restitution (e).\n\nWhen two objects collide, their velocities change. For a bouncing ball, e is calculated by dividing the speed after the collision by the speed before the collision.\n\nFor bouncing balls, this can be written using heights:\n\n  e = √(height of first bounce / drop height) = √(h₂/h₁)\n\nWhen e = 1, the ball has the same speed after the collision as before (perfectly elastic). The quantity e has no units.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah_d5b" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="460" height="300" fill="#ffffff"/><line x1="60" y1="40" x2="60" y2="270" stroke="#adb5bd" stroke-width="2"/><line x1="60" y1="270" x2="420" y2="270" stroke="#495057" stroke-width="4"/><text x="240" y="290" font-size="11" text-anchor="middle" fill="#495057">floor</text><g font-size="9" fill="#868e96"><line x1="55" y1="60" x2="60" y2="60"/><text x="50" y="63" text-anchor="end">2.0</text><line x1="55" y1="165" x2="60" y2="165"/><text x="50" y="168" text-anchor="end">1.0</text><line x1="55" y1="270" x2="60" y2="270"/><text x="50" y="273" text-anchor="end">0</text></g><text x="30" y="155" font-size="11" fill="#868e96" transform="rotate(-90 30 155)">height / m</text><line x1="150" y1="60" x2="150" y2="255" stroke="#0b7285" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#ah_d5b)"/><circle cx="150" cy="60" r="12" fill="#fff3bf" stroke="#e8b84b"/><text x="170" y="60" font-size="10" fill="#0b7285">drop h₁</text><path d="M150,255 Q220,55 290,128" fill="none" stroke="#868e96" stroke-width="1.5" stroke-dasharray="3 3"/><line x1="290" y1="128" x2="290" y2="255" stroke="#2f9e44" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#ah_d5b)"/><circle cx="290" cy="128" r="11" fill="#fff3bf" stroke="#e8b84b"/><text x="305" y="118" font-size="10" fill="#2f9e44">bounce h₂</text></svg>',
      },
      caption: 'A golf ball dropped from height h₁ rebounds to a lower height h₂ on its first bounce.',
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
        text: 'A collision with an e value of 1 is known as a perfectly elastic collision. A student in the class made the following statement:\n\n"A collision with an e value of 0.8 means that 80% of the kinetic energy of the ball is converted to other forms of energy."\n\nKinetic energy: KE = ½mv²\nCoefficient of restitution: e = v₂/v₁\n\nUse these equations to evaluate the statement made by the student.',
        marks: 3,
        ph: 'If e = 0.8, then v₂ = 0.8v₁\nKE₂/KE₁ = (½mv₂²)/(½mv₁²) = (v₂/v₁)² = e² = 0.64\nSo 36% of KE is converted, not 80%.\nThe statement is incorrect because...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Foam-Mat Thickness Investigation Design (18 marks) Criterion B
  // V2: thickness of a foam floor mat under the ball vs bounce height
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Experimental Design — Foam Mat Thickness',
    marks: 18,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'conservation of energy'], level: 'proficient' },
    stem: 'Gymnasiums place foam exercise mats on the floor to protect equipment and people. A coach notices that a ball does not bounce as high when it lands on a thick foam mat as it does on the bare floor. The thickness of the foam mats available ranges from a thin 5 mm sheet up to a 50 mm thick mat. A student is interested in how the bounce of a ball is affected by the thickness of the foam mat it lands on. They decide to drop a ball from a fixed height onto mats of different thicknesses and measure the height of the first bounce.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah_q6b" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="250" fill="#ffffff"/><line x1="50" y1="30" x2="50" y2="210" stroke="#adb5bd" stroke-width="2"/><g font-size="9" fill="#868e96"><line x1="45" y1="50" x2="50" y2="50"/><text x="42" y="53" text-anchor="end">100</text><line x1="45" y1="130" x2="50" y2="130"/><text x="42" y="133" text-anchor="end">50</text><line x1="45" y1="200" x2="50" y2="200"/><text x="42" y="203" text-anchor="end">0</text></g><text x="20" y="130" font-size="10" fill="#868e96" transform="rotate(-90 20 130)">height / cm</text><line x1="120" y1="50" x2="120" y2="178" stroke="#0b7285" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#ah_q6b)"/><circle cx="120" cy="50" r="11" fill="#f08c00" stroke="#d9480f"/><text x="135" y="48" font-size="10" fill="#0b7285">drop height (fixed)</text><line x1="70" y1="210" x2="520" y2="210" stroke="#495057" stroke-width="4"/><text x="290" y="232" font-size="11" text-anchor="middle" fill="#495057">floor</text><rect x="90" y="180" width="120" height="22" rx="3" fill="#74c0fc" stroke="#1c7ed6"/><text x="150" y="195" font-size="9" text-anchor="middle" fill="#1b4965">thin mat (5 mm)</text><rect x="300" y="160" width="120" height="42" rx="3" fill="#4dabf7" stroke="#1c7ed6"/><text x="360" y="185" font-size="9" text-anchor="middle" fill="#fff">thick mat (50 mm)</text></svg>',
      },
      caption: 'A ball dropped from a fixed height onto foam mats of different thickness.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the student\'s idea to design an investigation to find out how the thickness of the foam mat affects the height of the first bounce of the ball.\n\nIn your plan you should include:\n• the independent and dependent variables together with the justification of one control variable\n• a hypothesis for your investigation including a scientific explanation\n• a list of equipment you will use\n• how you will collect sufficient data\n• a method detailing the procedure you will follow',
        marks: 14,
        ph: 'Independent variable: thickness of the foam mat\nDependent variable: height of first bounce\nControl variable (with justification): ...\n\nHypothesis: As the mat thickness increases, the height of the first bounce will... because...\n\nEquipment:\n• ...\n\nMethod:\n1. ...\n2. ...',
      },
      {
        label: 'b',
        text: 'In question 4 you considered the effect of drop height on a bouncing tennis ball and in part (a) of this question you considered the effect of foam-mat thickness on the bounce. Suggest an investigation into another factor that could affect the height of bounce of a ball.\n\nIn your answer you should include a research question and independent and control variables. (The dependent variable is the height of first bounce — this has been completed for you.)\n\nResearch question:\nIndependent variable:\nControl variable 1:\nControl variable 2:',
        marks: 4,
        ph: 'Research question: How does [factor] affect the height of the first bounce?\nIndependent variable: ...\nControl variable 1: ...\nControl variable 2: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Triple-Glazed Eco-Home in Norway (10 marks) Criterion D
  // V2: low-energy eco-home; Norway heating-source bar chart
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Low-Energy Housing & Heat Transfer',
    marks: 10,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['conduction', 'convection', 'radiation (thermal)'], level: 'advanced' },
    stem: 'Homes in cold northern countries are usually heated to provide a comfortable living environment. Low-energy "eco-homes" are designed to lower the energy required for heating. In a low-energy eco-home, the amount of heat lost to the surroundings is greatly reduced compared with ordinary homes which are actively heated.\n\nKey features of low-energy eco-homes include:\n• Airtightness — prevents air moving between inside and outside\n• Heat recirculation — mechanical ventilation system circulates warm air\n• Thermal insulation of walls and roof — does not easily transfer heat\n• Insulated foundation slab — minimizes thermal contact with the ground\n• Direction of windows — positioned to maximize solar heat entering\n• Windows with three layers of glass — sealed, coated to allow sunlight in but prevent radiation leaving',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah_q7" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2f9e44"/></marker></defs><rect width="600" height="300" fill="#ffffff"/><rect x="0" y="0" width="600" height="160" fill="#e7f5ff"/><circle cx="80" cy="55" r="22" fill="#ffd43b" stroke="#f08c00"/><g stroke="#ffd43b" stroke-width="2"><line x1="80" y1="20" x2="80" y2="8"/><line x1="112" y1="55" x2="124" y2="55"/></g><rect x="0" y="240" width="600" height="60" fill="#dee2e6"/><text x="300" y="278" font-size="10" text-anchor="middle" fill="#868e96">insulated foundation slab on the ground</text><rect x="190" y="120" width="220" height="120" fill="#f1f3f5" stroke="#495057" stroke-width="2"/><path d="M180,120 L300,60 L420,120 Z" fill="#1c7ed6"/><rect x="215" y="150" width="55" height="55" fill="#a5d8ff" stroke="#0b7285" stroke-width="3"/><line x1="225" y1="150" x2="225" y2="205" stroke="#0b7285"/><line x1="235" y1="150" x2="235" y2="205" stroke="#0b7285"/><text x="242" y="225" font-size="9" text-anchor="middle" fill="#0b7285">triple glazing</text><rect x="320" y="155" width="65" height="60" fill="#ffe8cc" stroke="#495057"/><text x="352" y="188" font-size="9" text-anchor="middle" fill="#5c3d1e">warm</text><text x="352" y="200" font-size="9" text-anchor="middle" fill="#5c3d1e">interior</text><g stroke="#495057" stroke-width="6" stroke-linecap="round"><line x1="190" y1="120" x2="190" y2="240"/><line x1="410" y1="120" x2="410" y2="240"/></g><text x="170" y="185" font-size="9" fill="#495057" transform="rotate(-90 170 185)">thick wall insulation</text><path d="M120,200 q14,-7 0,-14" fill="none" stroke="#2f9e44" stroke-width="2" marker-end="url(#ah_q7)"/><text x="300" y="100" font-size="11" text-anchor="middle" fill="#1c7ed6">triple-glazed eco-home</text></svg>',
      },
      caption: 'Cross-section of a low-energy eco-home with thick wall insulation, triple glazing and an insulated foundation slab.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Low-energy eco-homes are designed to reduce the amount of money people spend on energy while allowing them to keep their homes warm. Use your knowledge of physics to outline how these eco-homes are able to stay warm inside, while requiring less heat energy compared to ordinary actively heated homes.',
        marks: 2,
        ph: 'Eco-homes reduce heat loss by... The insulation/triple glazing/airtightness works because...',
      },
      {
        label: 'b',
        text: 'Outline how using three layers of glass in windows reduces heat loss by conduction.',
        marks: 2,
        ph: 'Three layers of glass create... between the panes. This reduces conduction because...',
      },
      {
        label: 'c',
        text: 'These eco-homes are tested for airtightness by creating a pressure difference between the inside and the outside of the home. Use kinetic theory to describe how a higher pressure inside the home can help to locate the places where air can escape through the walls.',
        marks: 3,
        ph: 'Higher pressure means more/faster moving gas particles... When there are gaps in the walls, particles will... This allows technicians to detect leaks by...',
      },
      {
        label: 'd',
        text: 'Low-energy eco-homes are common in Norway. A stacked bar chart shows household energy consumption for heating by energy source in Norway. The sources shown are: Electricity (~55%), Wood/biomass (~20%), District heat (~12%), Heat pumps (~10%), Oil (~3%). State the percentage of households using district heat as a source of energy for heating.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="150" fill="#ffffff"/><text x="230" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Household heating energy by source — Norway</text><g><rect x="30" y="50" width="220" height="34" fill="#1c7ed6"/><text x="140" y="72" font-size="11" text-anchor="middle" fill="#fff">Electricity 55%</text><rect x="250" y="50" width="80" height="34" fill="#2f9e44"/><text x="290" y="72" font-size="9" text-anchor="middle" fill="#fff">Wood 20%</text><rect x="330" y="50" width="48" height="34" fill="#0b7285"/><text x="354" y="72" font-size="8" text-anchor="middle" fill="#fff">Dist 12%</text><rect x="378" y="50" width="40" height="34" fill="#f08c00"/><rect x="418" y="50" width="12" height="34" fill="#868e96"/></g><g font-size="9" fill="#495057"><rect x="30" y="100" width="12" height="12" fill="#f08c00"/><text x="48" y="110">Heat pumps 10%</text><rect x="170" y="100" width="12" height="12" fill="#868e96"/><text x="188" y="110">Oil 3%</text></g><g font-size="9" fill="#868e96"><line x1="30" y1="92" x2="430" y2="92" stroke="#ced4da"/><text x="30" y="104">0%</text><text x="410" y="104">100%</text></g></svg>',
          },
          caption: 'Stacked bar chart of household heating energy sources in Norway.',
        },
        ph: 'Percentage using district heat = ...%',
      },
      {
        label: 'e',
        text: 'Suggest why the move to low-energy eco-homes has a positive effect on the environment.',
        marks: 2,
        ph: 'Low-energy housing reduces energy consumption which means... This leads to lower... and therefore reduces...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Low-Energy Housing Retrofit Policy (13 marks) Criterion D
  // V2: refreshed cost numbers (different from source & v1)
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
    stem: 'The government of a country in a cold climate is considering giving money to people to upgrade their homes to meet the standards for low-energy eco-homes.\n\nKey information from the infographic:\n\nCOST COMPARISON:\n• Ordinary house: €175,000 to build; Low-energy house: €196,000 to build\n• Low-energy houses save about 85% on heating costs (≈ €690/year saving)\n• Upgrade (retrofit) cost: €21,000 per house\n• Upgrade costs are decreasing with increasing demand\n\nREGULATION:\n• Governments determine building regulations and urban planning\n• Developing low-energy building standards is slow and costly\n• Legal standards guarantee safety, quality and performance\n\nPAYING FOR HEAT:\n• Heating costs are a large part of family expenditure\n• "Fuel poverty" — households choose between heating and food/clothing\n• Fuel poverty linked to adverse physical and mental health effects\n• Most common in low-income areas with poor housing quality\n\nAIR QUALITY:\n• Outdoor pollutants cannot enter (airtight)\n• Need well-maintained filter systems\n• If maintained, higher air quality than ordinary houses\n• Indoor pollutants from printers, copiers, fossil-fuel heaters',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah_q8" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="220" fill="#ffffff"/><text x="280" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Ordinary vs low-energy house</text><g><rect x="60" y="60" width="120" height="120" fill="#ffe8cc" stroke="#d9480f"/><path d="M55,60 L120,30 L185,60 Z" fill="#e8590c"/><text x="120" y="200" font-size="11" text-anchor="middle" fill="#495057">Ordinary</text><text x="120" y="130" font-size="11" text-anchor="middle" fill="#d9480f">€175k</text><g stroke="#d9480f" stroke-width="2"><path d="M186,80 q22,-6 22,6" fill="none"/><path d="M186,110 q26,-6 26,6" fill="none"/><path d="M186,140 q22,-6 22,6" fill="none"/></g><text x="232" y="115" font-size="9" fill="#d9480f">heat lost</text></g><g><rect x="360" y="60" width="120" height="120" fill="#d3f9d8" stroke="#2f9e44"/><path d="M355,60 L420,30 L485,60 Z" fill="#37b24d"/><text x="420" y="200" font-size="11" text-anchor="middle" fill="#495057">Low-energy</text><text x="420" y="124" font-size="11" text-anchor="middle" fill="#2f9e44">€196k</text><text x="420" y="142" font-size="9" text-anchor="middle" fill="#2f9e44">−85% heating</text></g><text x="280" y="120" font-size="11" text-anchor="middle" fill="#495057">retrofit</text><text x="280" y="136" font-size="11" text-anchor="middle" fill="#495057">€21k</text><path d="M250,110 L310,110" stroke="#0b7285" stroke-width="2" marker-end="url(#ah_q8)"/></svg>',
      },
      caption: 'Infographic comparing an ordinary house with a low-energy house and the retrofit cost.',
    },
    tasks: [
      {
        label: '',
        text: 'Discuss and evaluate the implications of upgrading houses to low-energy eco-home standards. In your answer you should include:\n• positive and negative social and economic implications for individuals in the community\n• positive and negative economic implications for governments and businesses\n• a concluding appraisal giving your opinion on whether governments should fund this upgrade',
        marks: 13,
        ph: 'SOCIAL/ECONOMIC IMPLICATIONS FOR INDIVIDUALS:\nPositive: ...\nNegative: ...\n\nIMPLICATIONS FOR GOVERNMENTS/BUSINESSES:\nPositive: ...\nNegative: ...\n\nCONCLUSION AND OPINION:\nOverall, I believe that...',
      },
    ],
  },
]
