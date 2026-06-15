import 'server-only'

interface MSEntry {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
  blankAnswers?: string[]
}
interface MCQEntry { type: 'mcq'; correct: number }
type MSRecord = Record<string, MSEntry | MCQEntry>

export const MS: MSRecord = {
  // ── Q1 ───────────────────────────────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Phytoplankton → Krill → Herring → Seal. Award 1 mark for any two organisms in correct relative order; 2 marks for all four correctly sequenced.',
    keyConcepts: ['food chain', 'producer', 'consumer', 'trophic level'],
    keywords: ['food chain', 'producer', 'consumer', 'phytoplankton', 'krill', 'herring', 'seal'],
    feedbackHit: 'Correct food chain — energy flows from producer to each consumer.',
    feedbackMiss: 'Start with the producer (phytoplankton). Krill eat phytoplankton; herring eat krill; seal eats herring.',
  },
  q1_b: {
    marks: 3,
    exemplar: 'Two barnacles on the same rock → Competition; Orca and seal → Predation; Sea louse and salmon → Parasitism. Award 1 mark per correct answer.',
    keyConcepts: ['ecological interactions', 'predation', 'parasitism', 'competition'],
    keywords: ['competition', 'predation', 'parasitism', 'interaction', 'ecosystem'],
    feedbackHit: 'You correctly identified all three ecological interactions.',
    feedbackMiss: 'Predation = one organism kills and eats another. Parasitism = one organism lives on/in another and harms it. Competition = organisms compete for the same resource.',
    blankAnswers: ['Competition', 'Predation', 'Parasitism'],
  },
  q1_c: {
    marks: 2,
    exemplar: 'A community of living organisms (biotic factors) interacting with each other and with their non-living (abiotic) environment, functioning as a system.',
    keyConcepts: ['ecosystem', 'biotic', 'abiotic', 'community', 'environment'],
    keywords: ['ecosystem', 'community', 'living', 'non-living', 'biotic', 'abiotic', 'interact'],
    feedbackHit: 'You defined ecosystem correctly, including both biotic and abiotic components.',
    feedbackMiss: 'An ecosystem includes all living organisms (biotic) AND the non-living environment (abiotic factors such as temperature, water, light) in an area.',
  },
  q1_d: {
    marks: 4,
    exemplar: 'Individuals in a population show variation (1). Some variations are heritable/caused by genes (1). A selection pressure (e.g. predation, food shortage, ocean warming) means not all individuals survive to reproduce (1). Individuals with advantageous traits are more likely to survive and reproduce, passing on those traits; over many generations the population changes (1).',
    keyConcepts: ['natural selection', 'variation', 'selection pressure', 'adaptation', 'survival of the fittest'],
    keywords: ['variation', 'selection pressure', 'survival', 'reproduce', 'heritable', 'adaptation', 'population', 'generations'],
    feedbackHit: 'Excellent — you described variation, selection pressure, differential survival, and inheritance.',
    feedbackMiss: 'Four key steps: variation exists → selection pressure acts → better-adapted individuals survive and reproduce → advantageous traits inherited by offspring → population adapts over generations.',
  },

  // ── Q2 ───────────────────────────────────────────────────────────────────
  q2_a: {
    marks: 1,
    exemplar: 'Homeostasis is the maintenance of a stable/constant internal environment in the body despite changes in external conditions.',
    keyConcepts: ['homeostasis', 'internal environment', 'regulation'],
    keywords: ['homeostasis', 'stable', 'internal environment', 'constant', 'regulate'],
    feedbackHit: 'Correct definition of homeostasis.',
    feedbackMiss: 'Homeostasis = maintaining a stable internal environment (e.g. body temperature, water balance, sugar levels).',
  },
  q2_b: {
    marks: 1,
    exemplar: 'Cell membrane (plasma membrane).',
    keyConcepts: ['cell membrane', 'semi-permeable', 'diffusion', 'osmosis'],
    keywords: ['cell membrane', 'plasma membrane', 'semi-permeable'],
    feedbackHit: 'Correct — the cell membrane regulates what enters and leaves the cell.',
    feedbackMiss: 'The cell membrane (plasma membrane) is semi-permeable and controls diffusion and osmosis across the cell.',
  },
  q2_c: {
    marks: 3,
    exemplar: 'Diffusion: the movement of molecules from a region of high concentration to low concentration (down a concentration gradient), passive process requiring no energy (1). Osmosis: the movement of water molecules through a semi-permeable membrane from a region of low solute concentration (high water potential) to high solute concentration (low water potential) (1). Both are passive processes driven by concentration gradients (1).',
    keyConcepts: ['diffusion', 'osmosis', 'concentration gradient', 'semi-permeable membrane', 'passive transport'],
    keywords: ['diffusion', 'osmosis', 'concentration gradient', 'semi-permeable', 'passive', 'water potential', 'solute'],
    feedbackHit: 'You explained both diffusion and osmosis accurately.',
    feedbackMiss: 'Diffusion: molecules move high → low concentration (passive). Osmosis: water moves through semi-permeable membrane from low → high solute concentration.',
  },
  q2_d: {
    marks: 4,
    exemplar: 'Reason: to maintain a concentration gradient (1) so water vapour and gases continue to diffuse into and out of the leaf (1). Prediction: if the air is still, water vapour will build up just outside the stomata (1); the concentration gradient will be reduced, diffusion slows, so transpiration and gas exchange decrease (1).',
    keyConcepts: ['gas exchange', 'concentration gradient', 'diffusion', 'transpiration', 'stomata'],
    keywords: ['concentration gradient', 'diffusion', 'water vapour', 'moving air', 'stomata', 'transpiration'],
    feedbackHit: 'You correctly linked moving air to maintenance of the concentration gradient.',
    feedbackMiss: 'Moving air carries water vapour away to keep the air outside the leaf at a low concentration — this maintains the gradient needed for diffusion out of the leaf.',
  },
  q2_e: {
    marks: 2,
    exemplar: 'Many tiny stomata spread across the leaf give a much greater total surface area than one large pore (1). Greater surface area increases the rate of diffusion, allowing more efficient exchange of gases and water vapour in the same amount of time (1).',
    keyConcepts: ['surface area', 'diffusion rate', 'gas exchange', 'efficiency'],
    keywords: ['surface area', 'diffusion', 'rate', 'efficient', 'stomata', 'exchange'],
    feedbackHit: 'Correct — more surface area means faster diffusion.',
    feedbackMiss: 'Many tiny stomata have more total surface area than one large pore. More surface area = faster diffusion = more efficient gas exchange.',
  },

  // ── Q3 ───────────────────────────────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'Any two from: movement, respiration, sensitivity/response to stimuli, growth, reproduction, excretion, nutrition/feeding (MRSGREN). Award 1 mark each.',
    keyConcepts: ['characteristics of living organisms', 'MRSGREN'],
    keywords: ['movement', 'respiration', 'sensitivity', 'growth', 'reproduction', 'excretion', 'nutrition'],
    feedbackHit: 'Correct — you listed two valid characteristics of living organisms.',
    feedbackMiss: 'Living organisms share seven characteristics: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition (MRSGREN).',
  },
  q3_b: {
    marks: 1,
    exemplar: 'Egeria cells have a cell wall (made of cellulose), chloroplasts, or a large central vacuole — any one feature not present in blackworm cells.',
    keyConcepts: ['plant cell', 'animal cell', 'cell wall', 'chloroplast', 'vacuole'],
    keywords: ['cell wall', 'chloroplast', 'vacuole', 'plant cell', 'Egeria'],
    feedbackHit: 'Correct plant-cell-specific feature identified.',
    feedbackMiss: 'Egeria is a plant: its cells have a cell wall, chloroplasts, and/or a large central vacuole — none of which are found in blackworm (animal) cells.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'If caffeine concentration in the water increases, then the pulsation rate of the blackworm will increase (1), because caffeine is a stimulant that speeds up nerve and muscle activity, raising the metabolic rate and pulsation rate (1).',
    keyConcepts: ['hypothesis', 'caffeine', 'pulsation rate', 'stimulant', 'blackworm'],
    keywords: ['hypothesis', 'caffeine', 'concentration', 'pulsation rate', 'increase', 'stimulant', 'metabolic'],
    feedbackHit: 'Good hypothesis with clear prediction and scientific reasoning.',
    feedbackMiss: 'State a prediction (if caffeine increases → pulsation rate increases/decreases) and give a scientific reason (e.g. caffeine is a stimulant → speeds up activity → higher pulsation rate).',
  },
  q3_d: {
    marks: 4,
    exemplar: 'IV: caffeine concentration of the water (what is changed) (1). DV: pulsation rate of blackworm in bpm (what is measured) (1). CV: temperature of water; type/size of blackworm; volume of solution (any two, 1 mark each).',
    keyConcepts: ['variables', 'independent variable', 'dependent variable', 'control variable'],
    keywords: ['independent', 'dependent', 'control', 'caffeine concentration', 'pulsation rate', 'temperature'],
    feedbackHit: 'You correctly identified IV, DV and control variables.',
    feedbackMiss: 'IV = what you change (caffeine concentration). DV = what you measure (pulsation rate). CV = what you keep the same (temperature, type of blackworm, volume).',
  },
  q3_e: {
    marks: 2,
    exemplar: 'At least 4–5 different caffeine concentrations (1); to identify a trend or pattern across a range of values and determine whether the relationship is linear or non-linear (1).',
    keyConcepts: ['range of values', 'trend', 'data range', 'investigation design'],
    keywords: ['at least 4', 'concentrations', 'trend', 'range', 'pattern', 'relationship'],
    feedbackHit: 'Correct — more data points allow identification of trends.',
    feedbackMiss: 'Use at least 4–5 different concentrations to identify a clear trend and determine the shape of the relationship.',
  },
  q3_f: {
    marks: 2,
    exemplar: 'At least 3 trials per concentration (1); to improve reliability of results, allow calculation of a mean, and identify and exclude anomalous results (1).',
    keyConcepts: ['reliability', 'trials', 'mean', 'anomalous results'],
    keywords: ['3 trials', 'reliability', 'mean', 'anomalous', 'repeat', 'reproducibility'],
    feedbackHit: 'Correct — repeated trials increase reliability.',
    feedbackMiss: 'Repeat each concentration at least 3 times to improve reliability; calculate a mean to reduce the effect of anomalous results.',
  },

  // ── Q4 ───────────────────────────────────────────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: 'Multiply pulses in 20 s by 3 to give bpm. Award 1 mark for correct method shown; 2 marks for all calculated values correct (36 × 3 = 108 bpm; 44 × 3 = 132 bpm; 52 × 3 = 156 bpm); deduct 1 mark for an arithmetic error if the method is correct.',
    keyConcepts: ['pulsation rate calculation', 'data processing', 'units conversion'],
    keywords: ['pulsation rate', 'bpm', 'beats per minute', 'multiply', 'calculate', '20 seconds'],
    feedbackHit: 'Correct calculations — pulses in 20 s × 3 = bpm.',
    feedbackMiss: 'To convert from pulses/20 s to bpm: multiply by 3 (since 20 s × 3 = 60 s = 1 minute). 36 → 108, 44 → 132, 52 → 156.',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Weakness 1: only one blackworm used per temperature (1); results may not be representative; should use multiple blackworms and calculate a mean to improve reliability (1). Weakness 2: only counting for 20 seconds (1); short count period increases counting error; count for longer (e.g. 60 seconds) to improve accuracy (1).',
    keyConcepts: ['investigation weaknesses', 'reliability', 'replication', 'accuracy'],
    keywords: ['weakness', 'one blackworm', 'not representative', 'counting error', '20 seconds', 'reliability', 'improve'],
    feedbackHit: 'You identified two weaknesses and justified how each affects the investigation.',
    feedbackMiss: 'A weakness needs: what is wrong + why it is a problem + how to fix it. E.g. only one blackworm → not representative → use multiple individuals.',
  },
  q4_c: {
    marks: 1,
    exemplar: 'Any valid new IV: caffeine/sugar/salt concentration; light intensity; pH of water; dissolved oxygen level.',
    keyConcepts: ['investigation extension', 'independent variable'],
    keywords: ['caffeine', 'sugar', 'light', 'pH', 'concentration', 'independent variable', 'extend'],
    feedbackHit: 'Valid extension variable suggested.',
    feedbackMiss: 'Suggest a different factor that could affect blackworm pulsation rate, e.g. caffeine concentration, sugar concentration, or light intensity.',
  },
  q4_d: {
    marks: 2,
    exemplar: 'Higher temperature increases the kinetic energy of molecules and speeds up enzyme-controlled reactions in cells (1), increasing metabolic rate and the demand for oxygen, so the blood vessel pulses faster to deliver more oxygen to cells (1). The prediction is scientifically valid up to an optimum temperature.',
    keyConcepts: ['temperature', 'enzyme activity', 'metabolic rate', 'pulsation rate'],
    keywords: ['temperature', 'kinetic energy', 'enzyme', 'metabolic rate', 'oxygen demand', 'pulsation rate'],
    feedbackHit: 'You linked temperature to enzyme activity and metabolic rate correctly.',
    feedbackMiss: 'Higher temperature → more kinetic energy → faster enzyme reactions → higher metabolic rate → more oxygen needed → pulsation rate increases.',
  },
  q4_e: {
    marks: 2,
    exemplar: 'The data broadly supports the prediction — pulsation rate increases from 108 bpm at 10 °C to 156 bpm at 30 °C (1). However, reliability is limited: only one blackworm measured at each temperature with no repeats, so results could be due to individual variation rather than temperature (1).',
    keyConcepts: ['validity', 'reliability', 'data evaluation', 'conclusion'],
    keywords: ['supports', 'prediction', 'valid', 'reliable', 'repeat', 'individual variation'],
    feedbackHit: 'Good evaluation — you assessed both whether the prediction was supported and the reliability limitations.',
    feedbackMiss: 'State whether data supports/refutes the prediction, then comment on limitations of the method that affect reliability.',
  },
  q4_f: {
    marks: 2,
    exemplar: 'x-axis: Temperature / °C (1); y-axis: Pulsation rate / bpm (or beats per minute) (1).',
    keyConcepts: ['graph labelling', 'axes', 'units'],
    keywords: ['temperature', '°C', 'pulsation rate', 'bpm', 'x-axis', 'y-axis', 'label', 'units'],
    feedbackHit: 'Axes labelled correctly with units.',
    feedbackMiss: 'x-axis = the independent variable (Temperature / °C); y-axis = the dependent variable (Pulsation rate / bpm). Always include units.',
  },
  q4_g: {
    marks: 2,
    exemplar: 'Read the pulsation rate values at 10 °C and 20 °C from the line of best fit on the graph: 108 bpm at 10 °C and 132 bpm at 20 °C (award 1 mark per correctly read value within an acceptable range).',
    keyConcepts: ['reading graphs', 'interpolation', 'transformed data'],
    keywords: ['graph', 'read', 'interpolate', 'values', '10°C', '20°C', 'transformed data'],
    feedbackHit: 'Values correctly read from graph.',
    feedbackMiss: 'Locate 10 °C and 20 °C on the x-axis; read across to the line of best fit; read the pulsation rate value on the y-axis (108 bpm and 132 bpm).',
  },

  // ── Q5 ───────────────────────────────────────────────────────────────────
  q5_: {
    marks: 17,
    exemplar: 'Criteria B rubric (17 marks). Hypothesis (2): testable prediction e.g. "If glucose concentration increases, heart rate will increase because more glucose provides more substrate for respiration, releasing more energy and raising metabolic and heart rate." Variables (4): IV = glucose concentration (g/dm³); DV = heart rate (bpm); CV = age of participants, time of day, baseline health status, amount consumed. Method (5): measure resting heart rate; provide defined glucose solutions; measure heart rate at set intervals after consumption; use multiple participants. Data table (2): titled, labelled with units. Data processing (2): calculate means; state graph type. Ethics (2): informed consent; exclude participants with diabetes/heart conditions; right to withdraw.',
    keyConcepts: ['Criteria B', 'glucose', 'heart rate', 'hypothesis', 'variables', 'method', 'ethics'],
    keywords: ['hypothesis', 'IV', 'DV', 'CV', 'glucose', 'heart rate', 'method', 'ethics', 'consent', 'table', 'graph'],
    feedbackHit: 'Your investigation design covers all Criteria B components including ethical considerations.',
    feedbackMiss: 'A complete Criteria B design needs: testable hypothesis with reasoning; IV/DV/CV; step-by-step method; data table design; data processing plan; ethical considerations.',
  },

  // ── Q6 ───────────────────────────────────────────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Line of best fit drawn smoothly through scatter points (1). Predicted heart rate at 40 mg/100 cm³ glucose read from the line of best fit (1); accept any value consistent with the drawn line (approximately 80 bpm).',
    keyConcepts: ['line of best fit', 'graph prediction', 'glucose', 'heart rate'],
    keywords: ['line of best fit', 'predict', 'heart rate', 'glucose concentration', '40 mg'],
    feedbackHit: 'Line of best fit drawn and prediction made correctly.',
    feedbackMiss: 'Draw a straight line of best fit through the scatter points. Locate 40 mg/100 cm³ on the x-axis and read the predicted heart rate from your line.',
  },
  q6_b: {
    marks: 3,
    exemplar: '% increase = (measured − predicted) / predicted × 100 (1). Substitution with correct values shown, e.g. (98 − 80) / 80 × 100 (1). Answer to 3 significant figures with the correct unit: ≈ 22.5 % (accept a value consistent with the student\'s predicted heart rate) (1).',
    keyConcepts: ['percentage increase', 'calculation', 'significant figures'],
    keywords: ['percentage increase', 'calculate', '3 significant figures', 'working', '98 bpm'],
    feedbackHit: 'Correct formula, working, and answer to 3 s.f.',
    feedbackMiss: '% increase = (98 − predicted value) / predicted value × 100. Show full working and give the answer to 3 significant figures.',
  },
  q6_c: {
    marks: 2,
    exemplar: 'VOLTREK contains other stimulants in addition to glucose (e.g. caffeine, taurine) (1); the combined effect of multiple stimulants raises heart rate higher than glucose alone would predict (1).',
    keyConcepts: ['stimulants', 'energy gel', 'glucose', 'combined effect'],
    keywords: ['other stimulants', 'caffeine', 'taurine', 'combined', 'energy gel', 'additional'],
    feedbackHit: 'You correctly identified that other ingredients in the gel contribute to the higher-than-predicted heart rate.',
    feedbackMiss: 'The graph only modelled glucose concentration. VOLTREK also contains other stimulants (e.g. caffeine, taurine) that also raise heart rate — so the actual rate is higher than predicted from glucose alone.',
  },

  // ── Q7 ───────────────────────────────────────────────────────────────────
  q7_a: {
    marks: 2,
    exemplar: 'Adds CO₂ to atmosphere: Respiration (1). Removes CO₂ from atmosphere: Photosynthesis (1). Geotropism, sedimentation, and transpiration are distractors — they do not involve CO₂ exchange with the atmosphere.',
    keyConcepts: ['carbon cycle', 'respiration', 'photosynthesis', 'CO₂'],
    keywords: ['respiration', 'photosynthesis', 'CO₂', 'adds', 'removes', 'atmosphere', 'carbon cycle'],
    feedbackHit: 'Correct — respiration releases CO₂; photosynthesis absorbs CO₂.',
    feedbackMiss: 'Respiration by all organisms releases CO₂ into the atmosphere. Photosynthesis by plants removes CO₂ from the atmosphere to make glucose.',
    blankAnswers: ['Respiration', 'Photosynthesis'],
  },
  q7_b: {
    marks: 4,
    exemplar: 'Action 1: burning fossil fuels (coal, oil, gas) (1) → releases stored carbon as CO₂ → increases CO₂ in atmosphere → enhances greenhouse effect → global warming (1). Action 2: draining wetlands / deforestation (1) → stored carbon in peat is exposed and released, and fewer plants absorb CO₂ → CO₂ levels rise → climate change (1).',
    keyConcepts: ['human impact', 'fossil fuels', 'wetland drainage', 'deforestation', 'carbon cycle imbalance', 'CO₂'],
    keywords: ['fossil fuels', 'wetland', 'deforestation', 'CO₂', 'greenhouse effect', 'global warming', 'consequence'],
    feedbackHit: 'You identified two human actions and outlined the consequence of each.',
    feedbackMiss: 'Name two human actions (e.g. burning fossil fuels, draining wetlands/deforestation) and for each explain the consequence for the carbon cycle (increased CO₂ → greenhouse effect → global warming).',
  },
  q7_c: {
    marks: 2,
    exemplar: 'Higher temperatures cause coral bleaching (symbiotic algae expelled, coral dies) (1). OR: species extinction/migration as habitats become unsuitable (1). OR: increased frequency of harmful algal blooms; disrupted reproductive timing in animals (phenology); spread of tropical disease vectors to new regions (any one valid biological consequence, fully outlined for 2 marks).',
    keyConcepts: ['global warming', 'biological consequences', 'coral bleaching', 'species migration', 'extinction'],
    keywords: ['temperature increase', 'coral bleaching', 'extinction', 'migration', 'habitat', 'biological consequence'],
    feedbackHit: 'You outlined a valid biological consequence of temperature increase.',
    feedbackMiss: 'Think about how organisms are affected by rising temperature: coral bleaching, species moving to cooler areas, disrupted breeding seasons, spread of disease.',
  },

  // ── Q8 ───────────────────────────────────────────────────────────────────
  q8_: {
    marks: 17,
    exemplar: 'Criteria D rubric (17 marks). Two solutions chosen (e.g. restoring mangroves/seagrass + offshore wind). For each: describe the action (2); explain the science — e.g. mangroves and seagrass absorb CO₂ by photosynthesis and lock "blue carbon" into seabed sediment; offshore wind generates electricity without releasing CO₂ (2 × 2 = 4). Advantages: both solutions described with evidence (2 × 2 = 4). Disadvantages: both solutions critiqued — e.g. coastal habitats are limited and slow to restore; offshore wind is intermittent and costly to build (2 × 2 = 4). Concluding appraisal: reasoned personal judgement on the best solution with justification (3).',
    keyConcepts: ['Criteria D', 'climate change solutions', 'blue carbon', 'mangroves', 'seagrass', 'kelp', 'offshore wind', 'evaluate', 'appraisal'],
    keywords: ['climate change', 'solution', 'advantage', 'disadvantage', 'science', 'blue carbon', 'mangrove', 'seagrass', 'wind', 'ocean', 'appraisal', 'justify'],
    feedbackHit: 'Your essay covers description, science, advantages, disadvantages and a clear appraisal.',
    feedbackMiss: 'Structure: describe two solutions → explain the science behind each → advantages of both → disadvantages of both → concluding appraisal with your justified opinion.',
  },
}
