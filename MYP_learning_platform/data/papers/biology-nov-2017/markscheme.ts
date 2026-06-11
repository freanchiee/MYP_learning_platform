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

interface MCQEntry {
  type: 'mcq'
  correct: number
}

type MSRecord = Record<string, MSEntry | MCQEntry>

export const MS: MSRecord = {

  // ── Q1: Water in Plants ────────────────────────────────────────────────────
  q1_a: {
    type: 'mcq',
    correct: 0,
  },
  q1_b: {
    marks: 1,
    exemplar: 'Cell wall.',
    keyConcepts: ['cell wall prevents bursting turgid cell'],
    keywords: ['cell wall', 'turgid', 'structure', 'burst'],
    feedbackHit: 'Correct — the cell wall prevents the turgid cell from bursting.',
    feedbackMiss: 'The structure is the cell wall. (Not the cell membrane — that can burst.)',
  },
  q1_c: {
    marks: 1,
    exemplar: 'The plant will no longer be able to stand upright. OR The plant will wilt or go floppy.',
    keyConcepts: ['plasmolyzed cells plant wilts', 'loss of turgor pressure structural support'],
    keywords: ['wilt', 'floppy', 'stand upright', 'plasmolyzed', 'turgor'],
    feedbackHit: 'Correct — plasmolyzed cells lose turgor causing wilting.',
    feedbackMiss: 'Accept: plant will wilt / go floppy / no longer stand upright.',
  },
  q1_d: {
    marks: 4,
    exemplar: 'Either: the leaves are curled (or the stomata are sunken / there are hairs surrounding the stomata). This allows transpired water to become trapped in enclosed spaces. Humidity increases. So evaporation or transpiration is reduced in humid or moist conditions. OR: the leaf has a waxy cuticle. The leaf surface is impermeable to water. This reduces the area of the leaf where water can be lost. Prevents evaporation or transpiration through that surface.',
    keyConcepts: ['marram grass adaptation reduce water loss', 'curled leaves sunken stomata waxy cuticle humid microclimate'],
    keywords: ['curled leaves', 'sunken stomata', 'hairs', 'waxy cuticle', 'humid', 'trapped', 'evaporation', 'transpiration', 'impermeable'],
    feedbackHit: 'Structural adaptation named, mechanism stated, result (reduced transpiration) explained.',
    feedbackMiss: 'Name one adaptation (curled/sunken stomata/hairs OR waxy cuticle), explain how it traps moisture or reduces surface area, state this reduces evaporation/transpiration. Four linked points needed.',
  },

  // ── Q2: Tropisms ──────────────────────────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Any two from: light (phototropism), water (hydrotropism), heat (thermotropism), nutrients, pheromones.',
    keyConcepts: ['stimuli causing tropism in plants', 'light water heat nutrients pheromones'],
    keywords: ['light', 'water', 'heat', 'nutrients', 'pheromones', 'stimulus', 'tropism'],
    feedbackHit: 'Two valid stimuli stated.',
    feedbackMiss: 'Accept any two of: light, water, heat/high temperature, nutrients, pheromones.',
  },
  q2_b: {
    marks: 4,
    exemplar: 'Positive tropism shown by stem growing upwards so that the leaves are exposed to light. Negative tropism shown by roots growing downward so that roots can absorb water and nutrients. OR so that a stable root structure is formed.',
    keyConcepts: ['positive tropism stem upward toward light', 'negative tropism roots downward absorb water nutrients'],
    keywords: ['positive tropism', 'negative tropism', 'stem', 'upward', 'roots', 'downward', 'light', 'water', 'nutrients'],
    feedbackHit: 'Both positive (stem up, reason) and negative (roots down, reason) tropism described.',
    feedbackMiss: '1: positive tropism = stem grows upward. 2: so leaves exposed to light. 3: negative tropism = roots grow downward. 4: so roots absorb water/nutrients OR stable root structure formed.',
  },
  q2_c: {
    marks: 3,
    exemplar: 'Any three reasonable suggestions, for example: touch causes leaves to close so leaves cannot be eaten; gives wilted, unappealing appearance; predators are confused as food disappears; (hence) improved chance of survival with more photosynthetic tissue.',
    keyConcepts: ['Mimosa pudica touch survival', 'leaves close avoided eaten predators confused'],
    keywords: ['leaves close', 'unappealing', 'predators confused', 'survival', 'photosynthetic', 'touch', 'eaten'],
    feedbackHit: 'Three valid survival reasons given.',
    feedbackMiss: 'Any 3 of: leaves close so cannot be eaten; wilted appearance; predators confused; more photosynthetic tissue survives.',
  },
  q2_d: {
    marks: 3,
    exemplar: 'The stalk or plant will bend or move toward the light. Only if the tip is exposed to the light.',
    keyConcepts: ['phototropism plant bends toward light', 'tip of plant required for response'],
    keywords: ['bend', 'toward light', 'tip', 'exposed', 'phototropism'],
    feedbackHit: 'Plant bends toward light, tip required, stated.',
    feedbackMiss: 'WTTE. ORA: 1: stalk/plant bends toward light. 2: only if tip is exposed to light.',
  },
  q2_e: {
    marks: 4,
    exemplar: 'On the shaded side, the mica blocked the substance moving down from the tip. (And therefore) the plant did not bend. When the mica was on the lit side, the bending was not affected. (So) the plant grew toward the light.',
    keyConcepts: ['mica blocked substance from tip', 'substance moves from tip to shaded side', 'plant grows toward light'],
    keywords: ['mica', 'shaded side', 'substance', 'blocked', 'tip', 'bend', 'lit side', 'toward light'],
    feedbackHit: 'All four points in the causal chain correctly described.',
    feedbackMiss: '1: shaded side mica blocked substance from tip. 2: plant did not bend. 3: mica on lit side did not affect bending. 4: so plant grew toward light.',
  },

  // ── Q3: Cells & Selective Breeding ───────────────────────────────────────
  q3_a: {
    marks: 3,
    exemplar: 'Nucleus → DNA/control of growth. Golgi apparatus → packaging proteins/lipids/lysosomes. Mitochondria → energy conversion from food.',
    keyConcepts: ['nucleus DNA control', 'Golgi apparatus packaging proteins lipids', 'mitochondria energy conversion'],
    keywords: ['nucleus', 'Golgi apparatus', 'mitochondria', 'DNA', 'packaging', 'energy', 'lysosomes'],
    feedbackHit: 'All three organelles correctly matched to functions.',
    feedbackMiss: 'Nucleus = DNA/control. Golgi apparatus = packaging molecules/lipids/lysosomes. Mitochondria = energy from food molecules.',
  },
  q3_b: {
    marks: 1,
    exemplar: 'A specific instruction for a specific trait/protein/cell activity. Contains the genetic code for a particular characteristic.',
    keyConcepts: ['gene specific instruction trait protein characteristic'],
    keywords: ['instruction', 'trait', 'protein', 'characteristic', 'genetic code', 'gene'],
    feedbackHit: 'Function of gene correctly stated.',
    feedbackMiss: 'Do not accept "DNA has genetic information" alone. Must specify instruction for trait/protein/cell activity.',
  },
  q3_c: {
    marks: 4,
    exemplar: 'A similarity: both select for the desired trait; both rely on principles of heredity; both aim to alter the genetic code. A difference: GE can introduce a new trait whereas SB uses an existing trait; GE needs one generation to introduce the trait while SB needs more; GE is much faster; GE is artificial while SB is natural. Any further two points from either list (2 max).',
    keyConcepts: ['genetic engineering vs selective breeding', 'both select desired trait; GE new trait faster artificial vs SB existing slow natural'],
    keywords: ['genetic engineering', 'selective breeding', 'desired trait', 'new trait', 'existing trait', 'generations', 'faster', 'artificial', 'natural'],
    feedbackHit: 'Similarity and difference both correctly stated with detail.',
    feedbackMiss: 'Similarity: both select for desired trait / both alter genetic code. Difference: GE introduces new trait vs SB uses existing; GE faster; GE artificial vs SB natural. Award up to 4 marks.',
  },
  q3_d: {
    marks: 2,
    exemplar: 'Reduction in the gene pool/variation. Trait desired by humans might have a negative effect on the species. Low variation reduces the ability to survive changes in the environment.',
    keyConcepts: ['selective breeding reduces gene pool variation', 'low variation less adaptable to environment change'],
    keywords: ['gene pool', 'variation', 'negative effect', 'environment', 'survive', 'adaptable'],
    feedbackHit: 'Two valid reasons for weakened survival ability.',
    feedbackMiss: '1: reduction in gene pool/variation. 2: trait desired by humans may negatively affect species OR low variation reduces ability to survive environmental changes.',
  },

  // ── Q4: Diffusion Investigation ──────────────────────────────────────────
  q4_a: {
    type: 'mcq',
    correct: 1,
  },
  q4_b: {
    type: 'mcq',
    correct: 2,
  },
  q4_c: {
    marks: 2,
    exemplar: 'Any two reasonable precautions: use gloves; use safety glasses.',
    keyConcepts: ['iodine hazard precautions', 'gloves safety glasses'],
    keywords: ['gloves', 'safety glasses', 'goggles', 'precaution', 'iodine', 'harmful'],
    feedbackHit: 'Two valid safety precautions for iodine stated.',
    feedbackMiss: 'Accept any two of: use gloves; use safety glasses/goggles.',
  },
  q4_d: {
    marks: 3,
    exemplar: '(Does the) concentration of iodine (solution affect the) time taken for iodine to diffuse across a semi-permeable membrane. Correct use of word concentration.',
    keyConcepts: ['problem statement iodine concentration diffusion time semi-permeable membrane'],
    keywords: ['concentration', 'iodine', 'time', 'diffuse', 'semi-permeable', 'membrane', 'rate'],
    feedbackHit: 'Problem correctly identifies concentration as IV and time for diffusion as DV across membrane.',
    feedbackMiss: 'WTTE: Does the concentration of iodine solution affect the time taken for iodine to diffuse across a semi-permeable membrane? Accept references to rate.',
  },
  q4_e: {
    marks: 1,
    exemplar: 'A correct prediction linking the two variables, for example: if the concentration of the iodine solution increases then the rate of diffusion of iodine will increase.',
    keyConcepts: ['testable prediction iodine concentration diffusion rate'],
    keywords: ['concentration', 'increases', 'rate of diffusion', 'prediction', 'if...then'],
    feedbackHit: 'Valid testable prediction linking concentration to diffusion rate.',
    feedbackMiss: 'Must link the two variables: if concentration of iodine increases, then rate of diffusion will increase.',
  },
  q4_f: {
    marks: 6,
    exemplar: 'Identification (2 max): IV: concentration of iodine solution. DV: time for iodine to diffuse (turn tube dark blue). CV1: temperature. CV2: volume of water / type of membrane / amount of starch. Manipulation (4 max): IV: change concentration in equal increments (e.g. 1%, 5%, 15%). DV: time how long it takes the tube to match colour of reference tube. CV1: use water bath / keep at constant temperature. CV2: use same volume of distilled water in each beaker. ECF for correct description of manipulation of an incorrectly identified variable except rate of diffusion.',
    keyConcepts: ['IV concentration iodine DV time diffusion CV temperature volume type membrane'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'concentration', 'time', 'temperature', 'membrane', 'manipulation'],
    feedbackHit: 'IV, DV and two CVs correctly identified and manipulations correctly described.',
    feedbackMiss: 'IV = concentration of iodine (1mk). DV = time for colour change (1mk). CV = any two of: temperature, volume of water, type of membrane, amount of starch (1mk each). Plus manipulation of each (1mk each, ECF).',
  },
  q4_g: {
    marks: 2,
    exemplar: 'At least three trials. Average data can be calculated OR anomalous data can be identified OR allows for statistical analysis.',
    keyConcepts: ['three trials justification average anomalous data'],
    keywords: ['three trials', 'average', 'anomalous', 'statistical', 'reliability'],
    feedbackHit: '≥3 trials stated with correct justification.',
    feedbackMiss: '1: at least 3 trials. 2: so average can be calculated / anomalous data identified.',
  },
  q4_h: {
    marks: 3,
    exemplar: 'A table with at least three trials; a table with at least three rows (for concentrations); labels including units.',
    keyConcepts: ['data table design trials concentrations labels units'],
    keywords: ['table', 'trials', 'concentrations', 'labels', 'units', 'rows', 'columns'],
    feedbackHit: 'Table has ≥3 trial columns, ≥3 concentration rows, and labelled columns with units.',
    feedbackMiss: '1: at least 3 trials. 2: at least 3 rows for concentrations. 3: labels including units.',
  },
  q4_i: {
    marks: 1,
    exemplar: 'Any reasonable weakness: determining when the bag was completely changed could be subjective; the concentration of the solutions was not changed in equal increments.',
    keyConcepts: ['investigation weakness subjective colour comparison unequal increments'],
    keywords: ['subjective', 'colour', 'unequal increments', 'weakness', 'method'],
    feedbackHit: 'Valid weakness of the investigation identified.',
    feedbackMiss: 'Accept: colour comparison is subjective; concentrations not in equal increments. WTTE.',
  },

  // ── Q5: Osmosis Investigation Data Analysis ────────────────────────────────
  q5_a: {
    marks: 1,
    exemplar: 'Whether temperature affects the rate of movement (of water molecules) across a membrane (osmosis).',
    keyConcepts: ['problem statement temperature rate osmosis membrane'],
    keywords: ['temperature', 'rate', 'osmosis', 'movement', 'membrane'],
    feedbackHit: 'Problem correctly links temperature to osmosis rate across membrane.',
    feedbackMiss: 'State the problem as: whether temperature affects the rate of movement across a membrane.',
  },
  q5_b: {
    marks: 3,
    exemplar: 'The change in mass over a fixed time period is used to determine the rate. The unit for rate of osmosis is g min⁻¹ or g s⁻¹.',
    keyConcepts: ['rate of osmosis change in mass per fixed time', 'unit g per minute or g per second'],
    keywords: ['change in mass', 'fixed time', 'rate', 'g min⁻¹', 'g s⁻¹', 'unit', 'osmosis'],
    feedbackHit: 'Method for determining rate stated, and unit correctly formulated.',
    feedbackMiss: '1: change in mass over fixed time period determines rate. 2: accept g/min or g/s. 3: measurement is made for a fixed time period.',
  },
  q5_c: {
    marks: 2,
    exemplar: '0.10(1) g min⁻¹. Correctly stated as 0.10 with correct significant figures.',
    keyConcepts: ['calculation rate osmosis 15°C 1.01g per 10 min = 0.10 g min⁻¹'],
    keywords: ['0.10', '0.101', 'rate', '15°C', 'calculation', 'significant figures'],
    feedbackHit: 'Rate at 15°C correctly calculated as 0.10 g min⁻¹.',
    feedbackMiss: 'Rate = 1.01 g / 10 min = 0.10(1) g min⁻¹. Accept incorrect precision for first mark.',
  },
  q5_d: {
    marks: 4,
    exemplar: 'Increments evenly spaced. y-axis scale appropriate to give good visual differentiation of data trend. Two points plotted correctly = 1 mark. All points plotted correctly = 2 marks. Ignore point (5, 0) if plotted. ECF from part (c).',
    keyConcepts: ['graph plotting osmosis rate temperature evenly spaced', 'y-axis scale appropriate all points correct'],
    keywords: ['y-axis', 'evenly spaced', 'points plotted', 'scale', 'temperature', 'rate of osmosis'],
    feedbackHit: 'Evenly spaced axes, appropriate scale, all points correctly plotted.',
    feedbackMiss: '1: evenly spaced increments. 2: y-axis scale appropriate. 3: two points plotted correctly. 4: all points correctly plotted. Ignore (5,0). ECF from (c).',
  },
  q5_e: {
    marks: 4,
    exemplar: 'Both graphs show similar trend until 35°C. Both graphs increase at a similar rate OR rate of increase slows at a similar rate. The university graph shows a plateau or reaches a constant value above 35°C. The student graph has no data above 35°C.',
    keyConcepts: ['compare student vs university data osmosis temperature', 'similar trend plateau above 35°C no student data above'],
    keywords: ['similar trend', 'both increase', 'plateau', '35°C', 'constant', 'no data above 35°C'],
    feedbackHit: 'All four comparison points (similar trend, rate, plateau in university, no student data above 35°C) correctly stated.',
    feedbackMiss: '1: both show similar trend to 35°C. 2: both increase at similar rate. 3: university shows plateau above 35°C. 4: student has no data above 35°C.',
  },
  q5_f: {
    marks: 4,
    exemplar: 'As temperature increases (kinetic) energy increases. Particles move more quickly. So the rate of movement across the membrane increases. Term kinetic energy used correctly. OR: at a temperature above 35°C the movement of water is in equilibrium (for this system). So the rate of (net) movement becomes constant because particles are moving in both directions at the same rate. Term equilibrium or osmotic pressure used correctly.',
    keyConcepts: ['kinetic energy temperature osmosis rate', 'equilibrium above 35°C net movement zero'],
    keywords: ['kinetic energy', 'temperature', 'particles', 'move faster', 'equilibrium', 'osmotic pressure', 'rate constant'],
    feedbackHit: 'Kinetic energy / equilibrium mechanism correctly explained with scientific term.',
    feedbackMiss: '1: as temperature increases KE increases. 2: particles move faster. 3: rate of movement across membrane increases. 4: correct term (kinetic energy or equilibrium/osmotic pressure). OR 1-4 for equilibrium explanation.',
  },
  q5_g: {
    marks: 1,
    exemplar: 'Valid because the trends match (below 35°C). OR valid because the data/results were similar. OR not valid because there are no measurements above 35°C.',
    keyConcepts: ['hypothesis validation osmosis data comparison'],
    keywords: ['valid', 'trends match', 'similar data', 'not valid', 'no measurements above 35°C'],
    feedbackHit: 'Valid/not valid stated with correct reason.',
    feedbackMiss: 'Do not accept valid or not valid alone — a reason must be given.',
  },
  q5_h: {
    marks: 2,
    exemplar: 'Any reasonable extension (change to IV), for example: increase the temperature range; investigate a different solute. Any reasonable improvement, for example: fill in the missing temperature increments; increase the duration of each trial to check if equilibrium is reached after 10 minutes.',
    keyConcepts: ['osmosis investigation extension improvement', 'increase temperature range fill missing increments'],
    keywords: ['extension', 'improvement', 'temperature range', 'different solute', 'increments', 'duration', 'equilibrium'],
    feedbackHit: 'One valid extension and one valid improvement both stated.',
    feedbackMiss: 'Accept one extension and one improvement given in either box. Extension = change to IV. Improvement = address a weakness in the existing method.',
  },

  // ── Q6: Investigation Design — Osmosis Potato ─────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Necessary equipment: balance or ruler, potato, beaker, thermometer, flask of distilled water, knife, ice, kettle, paper towels, goggles. Award 1 mark for three items including potato and thermometer, and water. Award 2 marks for a further three items from the necessary equipment list.',
    keyConcepts: ['osmosis potato investigation equipment', 'balance thermometer beaker knife potato water'],
    keywords: ['balance', 'thermometer', 'potato', 'beaker', 'distilled water', 'knife', 'ice', 'kettle', 'goggles', 'paper towels'],
    feedbackHit: 'Correct set of equipment for osmosis potato investigation selected.',
    feedbackMiss: 'Must include: potato, thermometer, distilled water. Plus any three from: balance/ruler, beaker, knife, ice, kettle, paper towels, goggles.',
  },
  q6_b: {
    marks: 15,
    exemplar: 'Criteria B rubric (0–15 marks): Variables: IV = temperature, DV = change in mass of potato pieces, CV = volume of solution and size/mass of potato pieces. Hypothesis: testable, linked to variables, with correct scientific explanation (e.g. as temperature increases, rate of osmosis increases because kinetic energy of water molecules increases; above optimal temperature, equilibrium is reached). Manipulation: at least five stated values of IV (temperatures). Method: clearly described, connected to IV, with equipment detail, measurements and units, could be followed by another student. Data: at least three trials. Safety: relevant safety comment (careful with knife/hot water/goggles).',
    keyConcepts: ['Criteria B osmosis potato design variables hypothesis method data safety'],
    keywords: ['temperature', 'mass change', 'potato', 'control', 'hypothesis', 'kinetic energy', 'equilibrium', 'trials', 'safety', 'knife', 'goggles'],
    feedbackHit: 'Full Criteria B: variables identified; testable hypothesis with scientific explanation; ≥5 temperatures; detailed replicable method; ≥3 trials; safety comment.',
    feedbackMiss: 'Level 4 (max): IV+DV+2CV; testable hypothesis with scientific explanation; ≥5 IV values; method replicable by another student; ≥3 trials; safety linked to specific hazard.',
  },

  // ── Q7: Balanced Diet & Nutrients ─────────────────────────────────────────
  q7_a: {
    marks: 3,
    exemplar: 'Carbohydrate → quick energy release. Fat → long term energy storage and insulation. Minerals and vitamins → supports metabolism. Protein → body structures and cell functions. 1 pair correctly matched = 1 mark. 2 pairs = 2 marks. All 4 pairs = 3 marks.',
    keyConcepts: ['nutrient function match carbohydrate fat minerals protein'],
    keywords: ['carbohydrate', 'quick energy', 'fat', 'long term energy', 'insulation', 'minerals', 'vitamins', 'metabolism', 'protein', 'body structures'],
    feedbackHit: 'All four nutrients correctly matched to functions.',
    feedbackMiss: 'Carbohydrate=quick energy; Fat=long-term storage/insulation; Minerals+vitamins=support metabolism; Protein=body structures/cell functions.',
  },
  q7_b: {
    marks: 1,
    exemplar: 'Goat (meat).',
    keyConcepts: ['highest protein percentage goat from bar chart'],
    keywords: ['goat', 'highest', 'protein', 'percentage'],
    feedbackHit: 'Goat correctly identified as highest protein food from bar chart.',
    feedbackMiss: 'The food with the highest percentage of protein from the graph is goat.',
  },

  // ── Q8: In Vitro Meat Production ──────────────────────────────────────────
  q8_: {
    marks: 16,
    exemplar: 'Criteria D rubric (0–16 marks): Impacts: impacts of intensive farming (deforestation, land use, water use, methane production, animal welfare). Strengths and limitations: strengths (no animal suffering, less land, same protein) and limitations of in vitro (expensive, unnatural, not widely available, cultural acceptance). Environmental: intensive vs in vitro environmental impact (land/water/emissions). Ethical: animal welfare intensive farming; ethical issues in vitro (natural vs artificial). Appraisal: concluding appraisal linking impacts/environment/ethics.',
    keyConcepts: ['in vitro meat vs intensive farming impacts environment ethical appraisal', 'strengths limitations in vitro production sustainability'],
    keywords: ['intensive farming', 'in vitro', 'deforestation', 'methane', 'water', 'animal welfare', 'strengths', 'limitations', 'environmental', 'ethical', 'appraisal'],
    feedbackHit: 'Full Criteria D: impacts + strengths/limitations + environmental + ethical + appraisal, all with scientific reasoning.',
    feedbackMiss: 'Level 4 (13-16): states more than one impact of intensive farming with effects; strength and limitation of in vitro with scientific explanation; environmental + ethical considerations; concluding appraisal linking all factors.',
  },

  // ── Q9: 3D Bioprinting for Transplants ────────────────────────────────────
  q9_: {
    marks: 9,
    exemplar: 'Criteria D rubric (0–9 marks): Advantages: no matching donor needed, reduced rejection risk, faster availability, can be customised. Disadvantages: expensive, limited tissue types, not fully tested/approved, requires stem cells. Evaluative statement: justified with scientific reasoning. Appraisal: concluding statement linking all factors discussed.',
    keyConcepts: ['3D bioprinting transplants advantages disadvantages appraisal', 'replacing traditional transplantation scientific implications'],
    keywords: ['3D printing', 'bioprinting', 'transplant', 'donor', 'rejection', 'advantages', 'disadvantages', 'stem cells', 'expensive', 'appraisal'],
    feedbackHit: 'Advantages and disadvantages of 3D bioprinting stated with scientific reasoning, plus concluding appraisal.',
    feedbackMiss: 'Level 4 (max): more than one advantage and disadvantage correctly linked to bioprinting; evaluative statement justified scientifically; concluding appraisal linking all discussed factors.',
  },
}
