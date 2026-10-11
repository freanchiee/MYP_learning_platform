// Free, ORIGINAL per-criterion study guides for each MYP subject (/guides/<subject>/criterion-<a-d>).
// Written by CritABCD in our own words: strand wording is paraphrased, the examples are invented for
// this site, and nothing is copied from IB subject guides or past papers. The shared strand lists and
// level bands live at the top; each subject then supplies its own lead, tips, common mistakes and a
// weak-versus-strong worked example, so every page says something specific to its subject.

export type CriterionKey = 'A' | 'B' | 'C' | 'D'
export const CRITERION_KEYS: CriterionKey[] = ['A', 'B', 'C', 'D']

export interface Strand { code: string; name: string; looksLike: string }

export interface CriterionEntry {
  lead: string
  tips: string[]
  mistakes: string[]
  example: { task: string; weak: string; strong: string; why: string[] }
}

export type StrandGroup = 'sciences' | 'iands' | 'design'

export const SUBJECT_GROUP: Record<string, StrandGroup> = {
  physics: 'sciences', chemistry: 'sciences', biology: 'sciences', humanities: 'iands', geography: 'iands', design: 'design',
}

export const CRITERION_TITLES: Record<StrandGroup, Record<CriterionKey, string>> = {
  sciences: { A: 'Knowing and understanding', B: 'Inquiring and designing', C: 'Processing and evaluating', D: 'Reflecting on the impacts of science' },
  iands: { A: 'Knowing and understanding', B: 'Investigating', C: 'Communicating', D: 'Thinking critically' },
  design: { A: 'Inquiring and analysing', B: 'Developing ideas', C: 'Creating the solution', D: 'Evaluating' },
}

export const STRANDS: Record<StrandGroup, Record<CriterionKey, Strand[]>> = {
  sciences: {
    A: [
      { code: 'A.i', name: 'Explain scientific knowledge', looksLike: 'You use correct terms and explain why something happens, not just that it happens.' },
      { code: 'A.ii', name: 'Apply knowledge to solve problems', looksLike: 'You pick the right idea and use it on a situation you have not seen before.' },
      { code: 'A.iii', name: 'Analyse and evaluate information', looksLike: 'You weigh data, claims or sources and reach a judgement you can support.' },
    ],
    B: [
      { code: 'B.i', name: 'Explain the problem or question', looksLike: 'You say what is being tested and why, using the science behind it.' },
      { code: 'B.ii', name: 'Formulate a testable hypothesis', looksLike: 'Your prediction names the variables and is explained with scientific reasoning.' },
      { code: 'B.iii', name: 'Explain variables and data collection', looksLike: 'You say how each variable is changed, measured or controlled, and how data will be gathered.' },
      { code: 'B.iv', name: 'Design the investigation', looksLike: 'A logical, safe, complete method that someone else could follow and repeat.' },
    ],
    C: [
      { code: 'C.i', name: 'Present collected and transformed data', looksLike: 'Clear tables and graphs with units, labels and any calculations shown.' },
      { code: 'C.ii', name: 'Interpret data and describe results', looksLike: 'You describe the pattern with numbers and explain it using science.' },
      { code: 'C.iii', name: 'Discuss the validity of the hypothesis', looksLike: 'You say whether the evidence supports your hypothesis and how far.' },
      { code: 'C.iv', name: 'Discuss the validity of the method', looksLike: 'You link specific weaknesses in the method to their effect on the results.' },
      { code: 'C.v', name: 'Describe improvements or extensions', looksLike: 'Realistic changes that would fix the weaknesses you found, or the next question to test.' },
    ],
    D: [
      { code: 'D.i', name: 'Explain how science is applied', looksLike: 'You explain the science behind a specific real-world solution or issue.' },
      { code: 'D.ii', name: 'Discuss implications', looksLike: 'You weigh benefits and drawbacks for people, society, the economy or the environment.' },
      { code: 'D.iii', name: 'Use scientific language effectively', looksLike: 'Precise terms, units and symbols, used correctly and in context.' },
      { code: 'D.iv', name: 'Document sources', looksLike: 'Every idea or figure from someone else is referenced with a recognised convention.' },
    ],
  },
  iands: {
    A: [
      { code: 'A.i', name: 'Use terminology in context', looksLike: 'Subject terms appear in the right place and are used accurately.' },
      { code: 'A.ii', name: 'Show knowledge through developed explanations', looksLike: 'You describe, explain and give examples, rather than listing facts.' },
    ],
    B: [
      { code: 'B.i', name: 'Explain the choice of research question', looksLike: 'A focused question, with a reason it is worth investigating.' },
      { code: 'B.ii', name: 'Formulate and follow an action plan', looksLike: 'A realistic plan with steps and dates, and evidence you followed it.' },
      { code: 'B.iii', name: 'Collect and record varied information', looksLike: 'Relevant evidence from different kinds of source, recorded clearly.' },
      { code: 'B.iv', name: 'Evaluate the process and results', looksLike: 'You judge how well the investigation worked and what you would change.' },
    ],
    C: [
      { code: 'C.i', name: 'Communicate for audience and purpose', looksLike: 'Tone, vocabulary and detail suit who you are writing for and why.' },
      { code: 'C.ii', name: 'Structure for the format', looksLike: 'The layout and order of ideas match the task: report, essay, presentation.' },
      { code: 'C.iii', name: 'Document sources', looksLike: 'Citations and a reference list in one recognised convention, used consistently.' },
    ],
    D: [
      { code: 'D.i', name: 'Discuss concepts, issues and theories', looksLike: 'You explore an idea from more than one angle.' },
      { code: 'D.ii', name: 'Synthesise into supported arguments', looksLike: 'Evidence from several sources is combined into a clear, backed-up claim.' },
      { code: 'D.iii', name: 'Analyse and evaluate sources', looksLike: 'You judge origin, purpose, values and limitations, not just what a source says.' },
      { code: 'D.iv', name: 'Interpret perspectives and implications', looksLike: 'You explain why different people see it differently and what follows.' },
    ],
  },
  design: {
    A: [
      { code: 'A.i', name: 'Explain and justify the need', looksLike: 'A specific client or audience, a clear problem, and evidence it matters.' },
      { code: 'A.ii', name: 'Prioritise the research needed', looksLike: 'A ranked plan of primary and secondary research, with reasons for the order.' },
      { code: 'A.iii', name: 'Analyse existing products', looksLike: 'A feature-by-feature comparison that shows what to keep, avoid or improve.' },
      { code: 'A.iv', name: 'Develop a design brief', looksLike: 'One page that summarises the research and says what the solution must do.' },
    ],
    B: [
      { code: 'B.i', name: 'Develop a design specification', looksLike: 'Measurable success criteria that someone could test the solution against.' },
      { code: 'B.ii', name: 'Develop feasible design ideas', looksLike: 'Several different ideas, drawn or described so a stranger understands them.' },
      { code: 'B.iii', name: 'Present and justify the chosen design', looksLike: 'You choose one idea and justify it against the specification.' },
      { code: 'B.iv', name: 'Develop accurate planning drawings', looksLike: 'Labelled, accurate drawings plus what is needed to make it.' },
    ],
    C: [
      { code: 'C.i', name: 'Construct a logical plan', looksLike: 'Ordered steps, times, tools and materials that another person could follow.' },
      { code: 'C.ii', name: 'Demonstrate technical skills', looksLike: 'Evidence of skilled, safe use of tools, software or techniques.' },
      { code: 'C.iii', name: 'Follow the plan to make the solution', looksLike: 'A solution that works as intended, built in line with the plan.' },
      { code: 'C.iv', name: 'Justify changes', looksLike: 'Each change to the design or plan is recorded with the reason and evidence.' },
      { code: 'C.v', name: 'Present the solution', looksLike: 'The finished solution is shown clearly, as a whole.' },
    ],
    D: [
      { code: 'D.i', name: 'Design testing methods', looksLike: 'Tests that generate data about how well the solution meets the specification.' },
      { code: 'D.ii', name: 'Evaluate the solution', looksLike: 'You judge success against each specification point, using test evidence.' },
      { code: 'D.iii', name: 'Explain improvements', looksLike: 'Specific, realistic ways the solution could be better.' },
      { code: 'D.iv', name: 'Explain the impact', looksLike: 'Who is affected, how, and what happens to the product at the end of its life.' },
    ],
  },
}

/** What each score band tends to look like, in our own words. Teachers apply the official descriptors. */
export const LEVEL_BANDS: { range: string; label: string; text: string }[] = [
  { range: '1-2', label: 'Limited', text: 'A little of the criterion is addressed. Ideas are basic, partly missing, or not linked to the task.' },
  { range: '3-4', label: 'Adequate', text: 'The main points are there but thin. Some explanations are correct; links to the task or evidence are incomplete.' },
  { range: '5-6', label: 'Substantial', text: 'Mostly accurate, well explained and consistently tied to the task, with only small gaps.' },
  { range: '7-8', label: 'Excellent', text: 'Detailed, precise and justified throughout, with ideas connected and applied to new situations or evidence.' },
]

type SubjectContent = Record<CriterionKey, CriterionEntry>

export const CRITERION_CONTENT: Record<string, SubjectContent> = {
  // ------------------------------------------------------------------ PHYSICS
  physics: {
    A: {
      lead: 'Criterion A rewards physics you can explain and use, not physics you can recite. Examiners want to see the idea, the reasoning that links it to the situation, and units that are right.',
      tips: [
        'Name the physical idea first (Newton’s second law, conservation of energy, wave speed) and then use it.',
        'For calculations, write the equation, substitute with units, and give the answer with units.',
        'In explanations, chain the logic with because and so: cause, mechanism, effect.',
        'In an unfamiliar context, say which model you are using before you start. That is usually where the marks are.',
      ],
      mistakes: [
        'Quoting a formula without using it on the situation in the question.',
        'Mixing up pairs such as mass and weight, speed and velocity, heat and temperature.',
        'Leaving out units, or giving a number with no direction when the quantity is a vector.',
      ],
      example: {
        task: 'Explain why a passenger lurches forward when a bus brakes suddenly.',
        weak: 'Because of inertia he goes forward.',
        strong: 'The passenger and the bus move at the same velocity. When the bus brakes, the braking force acts on the bus, not on the passenger. With no resultant force on him, Newton’s first law says his velocity stays the same, so he keeps moving forward at the old speed while the bus slows. A seat belt supplies the unbalanced force that slows him down with the bus.',
        why: ['It names the law and uses it, instead of the single word inertia.', 'It says which object the force acts on, which is the real point.', 'It finishes the story by linking to the seat belt, so the idea is applied.'],
      },
    },
    B: {
      lead: 'In physics, Criterion B is about planning a test that is fair, measurable and safe. A strong plan reads like instructions a classmate could follow and get comparable results.',
      tips: [
        'Write a question that names the independent and dependent variables and the unit you will measure.',
        'Give the hypothesis as If..., then..., because..., and make the because a physics reason.',
        'List every controlled variable and say how you will keep it constant, not just that you will.',
        'State how many readings you will take for each value and why, then name the equipment and its resolution.',
      ],
      mistakes: [
        'A hypothesis with no scientific reason behind it.',
        'Writing keep everything else the same with no list of what that means.',
        'A dependent variable that cannot actually be measured with the equipment named.',
      ],
      example: {
        task: 'Write a hypothesis for an investigation into how ramp angle affects a trolley’s speed.',
        weak: 'The steeper the ramp, the faster the trolley will go.',
        strong: 'If the ramp angle is increased from 10° to 40° in steps of 10°, the trolley’s average speed over a fixed 0.80 m will increase, because a larger component of its weight acts down the slope (mg sin θ), giving a larger acceleration.',
        why: ['It states the range and steps of the independent variable.', 'The measurable outcome (average speed over 0.80 m) is named.', 'The because uses a real physics relationship.'],
      },
    },
    C: {
      lead: 'Criterion C is where your data earns its marks. Present it cleanly, describe the pattern with numbers, explain it with physics, and be honest and specific about what could have gone wrong.',
      tips: [
        'Put units and uncertainty in table headings, and label graph axes with quantity and unit.',
        'Describe the trend with numbers (for example, doubling the force roughly doubled the acceleration) before you explain it.',
        'Say whether the data supports the hypothesis and how strongly, rather than just proves or does not prove.',
        'For every weakness, state its effect on the results and a specific fix.',
      ],
      mistakes: [
        'Writing human error, which says nothing about what happened or how much it mattered.',
        'Improvements such as be more careful instead of a specific change.',
        'A conclusion that never refers back to the hypothesis.',
      ],
      example: {
        task: 'Evaluate the method used to time a ball in free fall over 1.5 m.',
        weak: 'Human error affected the results. We should use more accurate equipment.',
        strong: 'Timing by hand adds a reaction-time error of about ±0.2 s. The fall lasts only about 0.55 s, so that is a percentage uncertainty of roughly 35%, large enough to hide the pattern I was looking for. Using two light gates connected to a timer would remove the reaction-time error. Repeating each drop five times would also show how consistent the readings are.',
        why: ['It names the specific source of error and gives its size.', 'It links the error to the effect on the conclusion.', 'The improvement is concrete and directly fixes the problem.'],
      },
    },
    D: {
      lead: 'Criterion D asks you to step back from the lab and show what physics does in the world: how it is applied, who gains and who bears the costs, and what the evidence says.',
      tips: [
        'Choose one specific application (wind turbines, X-rays, GPS) rather than physics in general.',
        'Explain the physics behind it first, then discuss the implications.',
        'Weigh at least two kinds of impact (social, economic, environmental, ethical) and reach a balanced judgement.',
        'Cite every source, and use physics vocabulary and units precisely.',
      ],
      mistakes: [
        'Generic statements such as technology is good and bad.',
        'Discussing the issue without explaining the science that makes it work.',
        'Using facts and figures with no source given.',
      ],
      example: {
        task: 'Discuss the use of nuclear power to reduce carbon emissions.',
        weak: 'Nuclear power makes electricity without carbon so it is good, but it is dangerous.',
        strong: 'In a nuclear reactor, fission of uranium-235 releases thermal energy that boils water to drive turbines, so no carbon dioxide is released during generation (Source 1). This could cut emissions compared with coal, but it creates radioactive waste that stays hazardous for thousands of years, so storage becomes a long-term cost for future communities. On balance, nuclear power helps most as one part of a mix with renewables, provided waste storage is funded and regulated.',
        why: ['It explains the science (fission, heat, turbines) before judging.', 'It weighs an environmental benefit against a long-term social cost.', 'It cites a source and ends with a reasoned judgement.'],
      },
    },
  },

  // ---------------------------------------------------------------- CHEMISTRY
  chemistry: {
    A: {
      lead: 'In chemistry, Criterion A is about connecting what you can observe to what the particles are doing. The best answers move between the visible change, the particle explanation and the symbols.',
      tips: [
        'Explain at the particle level: what the ions, atoms or molecules are doing and why.',
        'Write balanced equations with state symbols when asked, and check the atoms on both sides.',
        'Use the right word for the right idea: atom, ion and molecule are not interchangeable.',
        'In an unfamiliar reaction, look for the pattern you know (acid plus base, displacement, combustion) and apply it.',
      ],
      mistakes: [
        'Explaining a property of a substance by describing the whole substance instead of its particles.',
        'Equations that are not balanced, or that change a formula to make them balance.',
        'Confusing intermolecular forces with the covalent bonds inside a molecule.',
      ],
      example: {
        task: 'Explain why solid sodium chloride does not conduct electricity but molten sodium chloride does.',
        weak: 'Because when it melts it can carry electricity.',
        strong: 'Sodium chloride is a giant ionic lattice. In the solid, the Na⁺ and Cl⁻ ions are held in fixed positions by strong electrostatic attraction, so no charged particles are free to move. When it melts, the lattice breaks down and the ions can move. These moving charged particles carry the current.',
        why: ['It says what the particles are and how they are held.', 'It names the key idea: charged particles free to move.', 'It contrasts solid and molten directly.'],
      },
    },
    B: {
      lead: 'Criterion B in chemistry is about designing a fair test that you could actually carry out in a lab: one variable changed, one measured, everything else controlled, and the safety thought through.',
      tips: [
        'Choose a dependent variable you can really measure, such as time for a mark to disappear or volume of gas collected.',
        'Explain your hypothesis using particle theory: more concentration means more collisions per second.',
        'Name the control variables with values (25 cm³ of acid, 20 °C) and say how each is held constant.',
        'Include a safety line that is specific to the chemicals used, such as eye protection for the acid.',
      ],
      mistakes: [
        'A hypothesis that is only a prediction, with no particle explanation.',
        'Control variables listed with no values or method.',
        'Safety written as be careful rather than a specific hazard and precaution.',
      ],
      example: {
        task: 'Write a method outline for investigating how concentration of hydrochloric acid affects the rate of reaction with sodium thiosulfate.',
        weak: 'Mix different amounts of acid with thiosulfate and see how fast it goes cloudy.',
        strong: 'I will change the concentration of hydrochloric acid (0.5, 1.0, 1.5, 2.0 mol/dm³) and measure the time for a cross under the flask to disappear. I will keep 50 cm³ of 0.2 mol/dm³ sodium thiosulfate, 10 cm³ of acid, temperature (20 °C, checked with a thermometer) and the same flask constant. I will repeat each concentration three times and wear eye protection because the acid is an irritant and sulfur dioxide may be released.',
        why: ['The variables and their values are specific.', 'Controls say how they are held constant.', 'It plans repeats and states a particular safety hazard.'],
      },
    },
    C: {
      lead: 'Criterion C asks you to turn raw results into a justified conclusion. In chemistry that means careful tables and graphs, a calculation you can follow, and an honest account of the experiment’s limits.',
      tips: [
        'Show one worked example of each calculation, with units, so a reader can follow the method.',
        'For rate data, plot the graph, draw a line or curve of best fit and describe its shape in words and numbers.',
        'Use chemical reasoning in the interpretation, such as more collisions per second at higher concentration.',
        'For evaluation, tie each weakness to a measurable effect, such as heat loss lowering the temperature rise.',
      ],
      mistakes: [
        'Reporting a calculated value to far more significant figures than the measurements allow.',
        'Describing results as good or bad instead of describing the trend.',
        'Saying the experiment was unfair without naming the uncontrolled variable.',
      ],
      example: {
        task: 'Evaluate an experiment measuring the temperature rise when a fuel heats water.',
        weak: 'Some heat was lost so the results are not accurate. Use a better thermometer.',
        strong: 'The temperature rise was lower than the value calculated from the data book because much of the heat from the burning fuel warmed the air and the beaker rather than the water. This makes the calculated energy per gram lower than it should be. Adding a draught shield and a lid, and using a copper calorimeter, would reduce the loss and bring the result closer to the accepted value.',
        why: ['It gives the direction of the error (result too low) and the cause.', 'It states the effect on the conclusion.', 'The improvements match the cause they fix.'],
      },
    },
    D: {
      lead: 'Criterion D connects chemistry to the decisions societies make. You explain the science of a real product or process, then judge its benefits and costs for people and the environment.',
      tips: [
        'Pick a specific case (lithium-ion batteries, fertilisers, plastics recycling) and explain the chemistry involved.',
        'Look at the full life of the product: raw materials, use and disposal.',
        'Include more than one perspective, for example manufacturers, communities and the environment.',
        'Reference every source and check that numbers come from a reliable one.',
      ],
      mistakes: [
        'Writing about chemicals as simply good or bad without any detail.',
        'Skipping the chemistry and giving only opinions.',
        'Using statistics with no reference.',
      ],
      example: {
        task: 'Discuss the use of nitrogen fertilisers in farming.',
        weak: 'Fertilisers help plants grow but they can pollute rivers.',
        strong: 'Plants need nitrogen to make proteins, and soluble nitrate fertilisers replace what crops remove, which raises yields and helps feed more people (Source 1). When rain washes excess nitrate into rivers, it causes eutrophication: algae bloom, then decompose and use up dissolved oxygen, and fish die. Applying smaller, better-timed amounts balances food security against river health.',
        why: ['It explains why the chemical is useful.', 'It explains the mechanism of the harm step by step.', 'It cites a source and ends with a balanced recommendation.'],
      },
    },
  },

  // ------------------------------------------------------------------ BIOLOGY
  biology: {
    A: {
      lead: 'Biology Criterion A rewards explanation: linking a structure to its function, a process to its purpose, and a change in conditions to its effect on a living system.',
      tips: [
        'Link structure to function, such as thin walls and short diffusion distance in alveoli.',
        'Use terms precisely: diffusion, osmosis and active transport describe different processes.',
        'In data questions, quote values from the graph or table when you explain the trend.',
        'For unfamiliar organisms or systems, find the biological principle you know and apply it.',
      ],
      mistakes: [
        'Stating a function with no explanation of how the structure achieves it.',
        'Describing osmosis in terms of solutes moving rather than water.',
        'Using everyday words such as eats food instead of the process involved.',
      ],
      example: {
        task: 'Explain why a potato cylinder gains mass when placed in distilled water.',
        weak: 'Because water goes into it.',
        strong: 'The cells of the potato contain a solution that is more concentrated than distilled water. Water moves by osmosis, from the region of higher water concentration (outside) to lower (inside), across the partially permeable cell membrane. The cells take in water and the potato cylinder gains mass.',
        why: ['It names the process and the direction of water movement.', 'It compares the concentrations, which is the cause.', 'It links the cell-level change to the observed mass gain.'],
      },
    },
    B: {
      lead: 'Criterion B in biology is about designing investigations on living material, where variation and ethics matter. A strong design controls what it can and plans repeats for what it cannot.',
      tips: [
        'Choose a measurable response, such as bubbles per minute or change in mass, and say how you will count or measure it.',
        'Control variables carefully (same plant, light distance, temperature) and say how.',
        'Plan repeats and a mean, because living things vary.',
        'Include ethical and safety points, such as treating organisms humanely and washing hands.',
      ],
      mistakes: [
        'A vague dependent variable such as how well the plant does.',
        'Ignoring natural variation by testing only one specimen.',
        'No mention of how a variable like light intensity is actually changed.',
      ],
      example: {
        task: 'Plan how to investigate the effect of light intensity on the rate of photosynthesis in pondweed.',
        weak: 'Put the pondweed near a lamp and count bubbles at different distances.',
        strong: 'I will place a 5 cm piece of pondweed in water with sodium hydrogencarbonate and move a lamp to 10, 20, 30, 40 and 50 cm away, using a ruler. I will count the bubbles released in one minute, repeat three times at each distance and calculate the mean. Water temperature is kept constant using a water bath, and the same piece of pondweed is used throughout.',
        why: ['The independent variable is changed in defined steps.', 'The dependent variable has a unit (bubbles per minute).', 'Key controls and repeats are included.'],
      },
    },
    C: {
      lead: 'Criterion C asks you to handle data from living systems honestly: show it clearly, describe what it says, and be careful about how much one set of results can prove.',
      tips: [
        'Calculate a mean for repeats and show how, and consider ranges to show spread.',
        'Draw graphs with the independent variable on the x-axis, labelled with units.',
        'Describe the pattern with numbers and then explain it with biology.',
        'Evaluate with sample size and variation in mind: how many organisms did you test?',
      ],
      mistakes: [
        'Concluding a cause from only one repeat.',
        'Explaining a result by saying it was because of the experiment.',
        'Leaving anomalous results in the mean without comment.',
      ],
      example: {
        task: 'Evaluate an enzyme investigation in which the rate of reaction was measured at five temperatures.',
        weak: 'The results were not very good. We could do it again.',
        strong: 'The results at 60 °C showed one anomalous reading (rate 3.2 compared with 0.4 and 0.5), which I excluded after noting it probably came from a delay in starting the timer. Only three repeats per temperature were taken, so the mean may not represent the true rate. Taking five repeats and using a water bath with a thermometer would give more reliable data about where the optimum lies.',
        why: ['It identifies the anomaly and handles it explicitly.', 'It links the small sample to reliability.', 'The improvements are specific and fix the weaknesses.'],
      },
    },
    D: {
      lead: 'Criterion D places biology in the world. You explain how a biological idea is used, then discuss who benefits, who is at risk and what a fair decision might look like.',
      tips: [
        'Choose a defined case such as antibiotic resistance, GM crops or vaccination programmes.',
        'Explain the biology of how it works before you discuss its consequences.',
        'Include ethical, social and environmental implications and weigh them.',
        'Use a recognised referencing style for every source.',
      ],
      mistakes: [
        'Treating a debate as one-sided without evidence on the other view.',
        'Confusing selective breeding with genetic modification.',
        'Citing websites with no author or date and no checking of reliability.',
      ],
      example: {
        task: 'Discuss the use of antibiotics in farming.',
        weak: 'Antibiotics keep animals healthy but they make bacteria resistant, which is bad.',
        strong: 'Antibiotics kill bacteria that cause disease, so farmers use them to keep animals healthy and produce more meat (Source 1). Using them routinely, however, puts selection pressure on bacteria: resistant individuals survive and reproduce, so resistance becomes more common and can pass to bacteria that infect humans. A fairer approach is to use antibiotics only to treat diagnosed illness, which protects animal welfare and keeps medicines effective.',
        why: ['It explains resistance as natural selection, not just damage.', 'It weighs animal welfare against public health.', 'It cites a source and gives a reasoned recommendation.'],
      },
    },
  },

  // --------------------------------------------------------------- HUMANITIES
  humanities: {
    A: {
      lead: 'In Individuals and Societies, Criterion A is about knowing the content and using the subject’s vocabulary properly. High marks go to developed explanations with examples, not lists of facts.',
      tips: [
        'Use terms such as causation, significance, urbanisation or inflation in context, and define them briefly the first time.',
        'Move from describe to explain to example: what happened, why it mattered, one specific case.',
        'Link causes and consequences with phrases such as this led to and as a result.',
        'Use accurate dates, places and names, and check them.',
      ],
      mistakes: [
        'Long narrative with no explanation of why events mattered.',
        'Using key terms loosely or without showing you understand them.',
        'Giving a general example (some countries) instead of a specific one.',
      ],
      example: {
        task: 'Explain one cause of the Industrial Revolution beginning in Britain.',
        weak: 'Britain had lots of coal and factories so industry grew.',
        strong: 'One cause was Britain’s access to coal and iron ore close to ports and canals. Cheap coal powered steam engines, which allowed factories and mines to operate away from rivers, and good transport lowered the cost of moving heavy goods. As a result, manufacturers could produce and sell textiles and iron at lower prices, which encouraged more investment in industry.',
        why: ['It develops one cause rather than listing several.', 'It uses specific examples (steam engines, canals).', 'It follows the chain of cause and effect.'],
      },
    },
    B: {
      lead: 'Criterion B is about running an investigation well, not just writing about a topic. The marks follow the process: a focused question, a plan you follow, varied evidence, and an honest evaluation.',
      tips: [
        'Make the question narrow enough to answer, with a clear place, period or group.',
        'Write an action plan with steps and dates, and record where you changed it and why.',
        'Gather different kinds of source: primary and secondary, quantitative and qualitative.',
        'Evaluate both the evidence and your own process.',
      ],
      mistakes: [
        'A research question so broad that no answer is possible in the time.',
        'A plan written at the end instead of followed along the way.',
        'Evaluating only the topic, not how well the investigation was carried out.',
      ],
      example: {
        task: 'Improve this research question: How did war affect people?',
        weak: 'How did war affect people?',
        strong: 'To what extent did rationing during the Second World War change the daily diet of working-class families in Britain between 1940 and 1945?',
        why: ['It names a place, period and group.', 'To what extent invites a judgement, not a list.', 'It can be investigated with sources available to a student.'],
      },
    },
    C: {
      lead: 'Criterion C marks how well you communicate: the right tone for the audience, a structure that suits the format, and sources documented in a convention you stick with.',
      tips: [
        'Check the task: who is the audience and what is the purpose? Adjust tone and detail to match.',
        'Plan the structure before writing: a clear introduction, paragraphs each with one point, and a conclusion that answers the question.',
        'Pick one citation convention and use it for every source, including images.',
        'Proofread for clarity: short sentences are fine when they are precise.',
      ],
      mistakes: [
        'Writing a presentation script when the task asked for a report.',
        'References listed at the end that are never cited in the text.',
        'Switching citation styles part-way through.',
      ],
      example: {
        task: 'Cite a source in the text and the reference list.',
        weak: 'Source: internet.',
        strong: 'In text: (Smith, 2021). Reference list: Smith, A. (2021) Rationing in wartime Britain. Available at: https://example.org/rationing (Accessed: 3 March 2025).',
        why: ['The in-text citation points to a single entry in the list.', 'The reference gives author, date, title and access details.', 'The same convention would be used for every source.'],
      },
    },
    D: {
      lead: 'Criterion D is about thinking, not retelling. You compare perspectives, test sources for reliability and values, and combine evidence into an argument that you can defend.',
      tips: [
        'Use the OPCVL prompts for a source: origin, purpose, content, value and limitation.',
        'Compare at least two perspectives and say why they differ, such as role, time or evidence.',
        'Make a clear claim, support it with evidence from more than one source, and respond to a counter-argument.',
        'Explain what a perspective implies for decisions or action today.',
      ],
      mistakes: [
        'Summarising a source instead of evaluating it.',
        'Treating a primary source as automatically reliable.',
        'A conclusion that repeats the introduction without weighing the evidence.',
      ],
      example: {
        task: 'Evaluate a government poster from 1942 encouraging people to grow their own food.',
        weak: 'The poster is useful because it is from 1942 and shows what people did.',
        strong: 'The poster was produced by the Ministry of Food to persuade the public to grow vegetables, so its purpose was to build morale as well as to inform. That makes it valuable for showing official wartime messages, but limited as evidence of what households actually did, because it does not show how many people took part. To judge its impact I would compare it with diaries or sales figures for seeds.',
        why: ['It considers origin and purpose, not just date.', 'It states both a value and a limitation.', 'It names the kind of evidence needed to check it.'],
      },
    },
  },

  // ---------------------------------------------------------------- GEOGRAPHY
  geography: {
    A: {
      lead: 'Geography Criterion A rewards precise use of geographical terms and developed explanations that link physical and human processes with real places.',
      tips: [
        'Use the terms precisely (urbanisation, erosion, migration, sustainability) and give each a place-based example.',
        'Explain processes in sequence, such as how waves erode a cliff, step by step.',
        'Link physical and human factors where they interact, such as flood risk and land use.',
        'Use maps, data and named locations to support your points.',
      ],
      mistakes: [
        'Describing a pattern on a map without explaining what causes it.',
        'Examples that are not specific (in some countries).',
        'Treating the terms weather and climate as the same.',
      ],
      example: {
        task: 'Explain how a headland and bay form on a coastline.',
        weak: 'The sea wears away the soft rock and leaves the hard rock.',
        strong: 'On a coast where bands of hard and soft rock meet the sea, waves attack the softer rock faster by hydraulic action and abrasion, forming a bay. The harder rock erodes more slowly and is left sticking out as a headland. Waves then refract around the headland, concentrating erosion on its sides and sheltering the bay, where sand and shingle are deposited.',
        why: ['It names the processes (hydraulic action, abrasion, refraction).', 'It explains the difference in rock resistance.', 'It follows the sequence from erosion to deposition.'],
      },
    },
    B: {
      lead: 'Criterion B in geography is about fieldwork and research: a focused question, a method that collects the right evidence at the right places, and a plan you follow and evaluate.',
      tips: [
        'Link the question to a measurable variable, such as pebble size or pedestrian counts.',
        'Explain your sampling: where, when and how many, with reasons.',
        'Record data in a table designed before you go into the field.',
        'Evaluate with specifics, such as the weather on the day or too few sample points.',
      ],
      mistakes: [
        'Collecting data at convenient places without explaining the choice.',
        'Methods with no equipment, units or timing.',
        'An evaluation that lists generic problems rather than your own.',
      ],
      example: {
        task: 'Explain a sampling method for a river fieldwork investigation into velocity.',
        weak: 'We measured the river in a few places.',
        strong: 'I will measure velocity at five sites, each 500 m apart from source to mouth, so that changes along the river’s long profile show up. At each site I will time a float over 10 m, repeat three times, and take the mean. Using the same method and the same people at every site makes the results comparable.',
        why: ['Site choice is justified by the question.', 'The method includes distance, repeats and a mean.', 'Consistency is addressed.'],
      },
    },
    C: {
      lead: 'Criterion C marks communication: the right geographical format (report, case study, presentation), clear maps and graphs, and referenced sources.',
      tips: [
        'Choose the graph or map type that fits the data (bar chart, choropleth, scatter graph) and label it fully.',
        'Annotate maps and photographs so each one makes a point.',
        'Structure the report: aim, method, results, analysis, conclusion, evaluation.',
        'Reference all maps, data and images, including the date you accessed them.',
      ],
      mistakes: [
        'Maps and charts included but never referred to in the text.',
        'Unlabelled axes, no title, or no scale or key.',
        'Missing the source for a figure or image.',
      ],
      example: {
        task: 'Present rainfall data for a city across a year.',
        weak: 'A pie chart with each month as a slice and no title.',
        strong: 'A bar chart titled Average monthly rainfall in Mumbai, 2023 (mm), with months on the x-axis, rainfall in millimetres on the y-axis, and a source line under the chart. A short caption states that over 80% of the rain falls between June and September.',
        why: ['The chart type suits continuous monthly data.', 'The title, axes, units and source are all there.', 'The caption says what the chart shows.'],
      },
    },
    D: {
      lead: 'Criterion D asks you to think critically about geographical issues: weigh perspectives, evaluate evidence and reach a defensible judgement about a place or decision.',
      tips: [
        'Identify who gains and who loses from a decision, such as a dam, a new airport or a coastal defence.',
        'Check the reliability and purpose of each source, especially statistics from interested parties.',
        'Use evidence from more than one scale: local, national and global.',
        'Finish with a judgement and say what would change your mind.',
      ],
      mistakes: [
        'Listing pros and cons with no overall judgement.',
        'Assuming official statistics are neutral.',
        'Ignoring the voices of the people most affected.',
      ],
      example: {
        task: 'Evaluate whether a new dam is a good solution for a region short of electricity.',
        weak: 'A dam makes electricity but moves people. It depends.',
        strong: 'A dam can supply low-carbon electricity to industry and homes, according to the government report (Source 1). The same report was written by the agency that proposed the dam, so I treat its figures cautiously. Villagers’ interviews (Source 2) show the loss of farmland and homes that the reservoir would cause. On balance, the dam is justified only if resettled families receive fair land and compensation, because the benefits go mainly to cities while the costs fall on rural communities.',
        why: ['It identifies who gains and who loses.', 'It evaluates the reliability and purpose of a source.', 'It reaches a conditional judgement based on fairness.'],
      },
    },
  },

  // ------------------------------------------------------------------- DESIGN
  design: {
    A: {
      lead: 'In MYP Design, Criterion A is where a project begins. You show that a real person has a real problem, plan research in order of importance, and learn from what already exists.',
      tips: [
        'Name a specific client or group and explain the problem in their words, with evidence.',
        'Rank your research questions by importance and say why the top one comes first.',
        'Analyse at least two existing products feature by feature, not just describe them.',
        'End with a brief that states what the solution must do, who it is for and the constraints.',
      ],
      mistakes: [
        'A problem described in general terms, such as people need better backpacks.',
        'A research plan that is a list with no priorities.',
        'Product analysis that only describes and never concludes what to keep or avoid.',
      ],
      example: {
        task: 'Write a need statement for a design project.',
        weak: 'Old people forget their medicine so I will make an app.',
        strong: 'My neighbour, Mr Rao (78), takes five medicines at different times and twice last month missed a dose because the pill box lid hides the labels. A solution that reminds him and shows the right dose in large print would help him keep to his routine without relying on his family to call him.',
        why: ['A named client with a specific situation.', 'Evidence of the problem (missed doses, hidden labels).', 'It describes the need without jumping to a solution.'],
      },
    },
    B: {
      lead: 'Criterion B turns research into a design. You set measurable success criteria, generate genuinely different ideas, choose one with reasons, and draw it accurately enough for someone to build.',
      tips: [
        'Write specification points you can test: Text at least 18 pt, not Easy to read.',
        'Generate ideas that differ in approach, not the same idea in different colours.',
        'Justify your choice by scoring ideas against the specification.',
        'Label planning drawings with sizes, materials and views, and list what you will need to make it.',
      ],
      mistakes: [
        'Specification points that cannot be tested.',
        'Three ideas that are all minor variations of one.',
        'Choosing a design because I like it with no reference to the specification.',
      ],
      example: {
        task: 'Improve this specification point: The app should be easy to use.',
        weak: 'The app should be easy to use.',
        strong: 'A first-time user can set a daily reminder in under 60 seconds without help, and all text is at least 18 pt with a contrast ratio of at least 4.5:1.',
        why: ['It is measurable (time, size, contrast).', 'It can be tested with a real user.', 'It links directly to the client’s needs.'],
      },
    },
    C: {
      lead: 'Criterion C is about making: a plan someone else could follow, skilled and safe work, a solution that works, and honest records of what you changed and why.',
      tips: [
        'Write the plan as numbered steps with times, tools, materials and safety points.',
        'Keep a dated log with photos or screenshots as you work.',
        'When you change the design or plan, record what changed, why, and the evidence that prompted it.',
        'Present the finished solution clearly: photos from several angles or a short walk-through.',
      ],
      mistakes: [
        'A plan written after the work is finished.',
        'Changes made but never explained.',
        'A log entry with only the date and made progress.',
      ],
      example: {
        task: 'Record a change made during making.',
        weak: 'I changed the button size.',
        strong: 'Week 3: I increased the button width from 12 mm to 20 mm because during the first trial the client missed the button twice (photo 4). This meets specification point 2, which requires large controls, and I updated the plan to include a longer printing time.',
        why: ['It states the change with numbers.', 'It gives the evidence for the change.', 'It links to the specification and plan.'],
      },
    },
    D: {
      lead: 'Criterion D closes the design cycle. You test what you built against your specification, judge it honestly, suggest improvements and think about its impact beyond the client.',
      tips: [
        'Design tests that produce data, such as timed tasks, counts and ratings, and plan who will test it.',
        'Evaluate against every specification point, saying met, partly met or not met, with evidence.',
        'Suggest improvements that follow directly from your test results.',
        'Explain the impact on the client and wider community and what happens to the product at the end of its life.',
      ],
      mistakes: [
        'Evaluating with I think it worked well and no test evidence.',
        'Ignoring specification points that were not met.',
        'Impact written only about the client, with no end-of-life or circular thinking.',
      ],
      example: {
        task: 'Evaluate one specification point using test evidence.',
        weak: 'The reminder app works well and the client liked it.',
        strong: 'Specification point 1 required that a first-time user can set a reminder in under 60 seconds. Three testers took 45, 52 and 78 seconds, so it was met for two of three. The slowest tester struggled to find the time picker, so moving it to the first screen should help. The client can set reminders, but my next version should be tested with more users.',
        why: ['It quotes the specification point and the test results.', 'It states clearly whether it was met.', 'The improvement follows from the evidence.'],
      },
    },
  },
}
