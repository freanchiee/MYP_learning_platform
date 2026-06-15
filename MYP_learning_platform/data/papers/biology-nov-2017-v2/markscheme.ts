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

  // ── Q1: Water in Plants (mangrove) ─────────────────────────────────────────
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
    exemplar: 'Either: the leaves are small and thick (or the stomata are sunken into pits). This reduces the surface area of the leaf exposed to the air OR allows transpired water to become trapped in enclosed pits. The water vapour increases the local humidity. So evaporation or transpiration is reduced. OR: the leaf has a thick glossy waxy cuticle. The surface is impermeable to water. This prevents water escaping through the surface. So evaporation or transpiration through that surface is reduced.',
    keyConcepts: ['mangrove adaptation reduce water loss', 'small thick leaves sunken stomata waxy cuticle humid microclimate'],
    keywords: ['small thick leaves', 'sunken stomata', 'pits', 'waxy cuticle', 'surface area', 'humid', 'trapped', 'evaporation', 'transpiration', 'impermeable'],
    feedbackHit: 'Structural adaptation named, mechanism stated, result (reduced transpiration) explained.',
    feedbackMiss: 'Name one adaptation (small thick leaves/sunken stomata in pits OR thick waxy cuticle), explain how it reduces surface area or traps moisture, state this reduces evaporation/transpiration. Four linked points needed.',
  },

  // ── Q2: Tropisms (sundew / Darwin coleoptile) ─────────────────────────────
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
    exemplar: 'Negative gravitropism shown by the stem growing upwards (away from gravity) so that the leaves are exposed to light. Positive gravitropism shown by the roots growing downward (toward gravity) so that roots can absorb water and nutrients. OR so that a stable root structure is formed.',
    keyConcepts: ['negative gravitropism stem upward toward light', 'positive gravitropism roots downward absorb water nutrients'],
    keywords: ['positive tropism', 'negative tropism', 'stem', 'upward', 'roots', 'downward', 'light', 'water', 'nutrients', 'gravity'],
    feedbackHit: 'Both negative (stem up, reason) and positive (roots down, reason) gravitropism described.',
    feedbackMiss: '1: stem grows upward (negative gravitropism). 2: so leaves exposed to light. 3: roots grow downward (positive gravitropism). 4: so roots absorb water/nutrients OR stable root structure formed.',
  },
  q2_c: {
    marks: 3,
    exemplar: 'Any three reasonable suggestions, for example: touch by an insect makes the sticky tentacles bend and curl around it; the insect is trapped on the leaf and digested; this supplies nitrogen/nutrients that are scarce in the poor boggy soil; (hence) improved chance of survival and growth where minerals are limited.',
    keyConcepts: ['sundew touch survival', 'tentacles curl trap insect supply nutrients poor soil'],
    keywords: ['tentacles curl', 'sticky', 'insect trapped', 'digested', 'nitrogen', 'nutrients', 'poor soil', 'survival', 'touch'],
    feedbackHit: 'Three valid survival reasons given.',
    feedbackMiss: 'Any 3 of: touch makes tentacles curl around insect; insect trapped/digested; supplies nitrogen/nutrients lacking in poor soil; improves survival where minerals scarce.',
  },
  q2_d: {
    marks: 3,
    exemplar: 'The coleoptile or shoot will bend or grow toward the light. This only happens if the tip is exposed to the light.',
    keyConcepts: ['phototropism coleoptile bends toward light', 'tip of plant required for response'],
    keywords: ['bend', 'toward light', 'tip', 'exposed', 'phototropism', 'coleoptile'],
    feedbackHit: 'Shoot bends toward light, tip required, stated.',
    feedbackMiss: 'WTTE. ORA: 1: coleoptile/shoot bends toward light. 2: only if tip is exposed to light.',
  },
  q2_e: {
    marks: 4,
    exemplar: 'On the shaded side, the mica blocked the substance moving down from the tip. (And therefore) the plant did not bend. When the mica was on the lit side, the bending was not affected. (So) the plant grew toward the light.',
    keyConcepts: ['mica blocked substance from tip', 'substance moves from tip to shaded side', 'plant grows toward light'],
    keywords: ['mica', 'shaded side', 'substance', 'blocked', 'tip', 'bend', 'lit side', 'toward light'],
    feedbackHit: 'All four points in the causal chain correctly described.',
    feedbackMiss: '1: shaded side mica blocked substance from tip. 2: plant did not bend. 3: mica on lit side did not affect bending. 4: so plant grew toward light.',
  },

  // ── Q3: Cells & Selective Breeding (seedless watermelon) ──────────────────
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

  // ── Q4: Diffusion Investigation (methylene blue / gelatine) ───────────────
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
    keyConcepts: ['methylene blue hazard precautions', 'gloves safety glasses'],
    keywords: ['gloves', 'safety glasses', 'goggles', 'precaution', 'methylene blue', 'harmful'],
    feedbackHit: 'Two valid safety precautions for methylene blue stated.',
    feedbackMiss: 'Accept any two of: use gloves; use safety glasses/goggles.',
  },
  q4_d: {
    marks: 3,
    exemplar: '(Does the) concentration of methylene blue (solution affect the) time taken for it to diffuse into the gelatine cube. Correct use of word concentration.',
    keyConcepts: ['problem statement methylene blue concentration diffusion time gelatine'],
    keywords: ['concentration', 'methylene blue', 'time', 'diffuse', 'gelatine', 'rate'],
    feedbackHit: 'Problem correctly identifies concentration as IV and time for diffusion as DV into the gelatine.',
    feedbackMiss: 'WTTE: Does the concentration of methylene blue solution affect the time taken for it to diffuse into the gelatine cube? Accept references to rate.',
  },
  q4_e: {
    marks: 1,
    exemplar: 'A correct prediction linking the two variables, for example: if the concentration of the methylene blue solution increases then the rate of diffusion into the gelatine will increase.',
    keyConcepts: ['testable prediction methylene blue concentration diffusion rate'],
    keywords: ['concentration', 'increases', 'rate of diffusion', 'prediction', 'if...then'],
    feedbackHit: 'Valid testable prediction linking concentration to diffusion rate.',
    feedbackMiss: 'Must link the two variables: if concentration of methylene blue increases, then rate of diffusion will increase.',
  },
  q4_f: {
    marks: 6,
    exemplar: 'Identification (2 max): IV: concentration of methylene blue solution. DV: time for the stain to diffuse (gelatine cube to match reference colour). CV1: temperature. CV2: volume of solution / size of gelatine cube / starting colour of gelatine. Manipulation (4 max): IV: change concentration in equal increments (e.g. 1%, 5%, 15%). DV: time how long it takes the cube to match the colour of the reference cube. CV1: use a water bath / keep at constant temperature. CV2: cut all gelatine cubes to the same size / use the same volume of solution in each beaker. ECF for correct description of manipulation of an incorrectly identified variable except rate of diffusion.',
    keyConcepts: ['IV concentration methylene blue DV time diffusion CV temperature volume cube size'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'concentration', 'time', 'temperature', 'cube size', 'manipulation'],
    feedbackHit: 'IV, DV and two CVs correctly identified and manipulations correctly described.',
    feedbackMiss: 'IV = concentration of methylene blue (1mk). DV = time for colour change (1mk). CV = any two of: temperature, volume of solution, size of gelatine cube (1mk each). Plus manipulation of each (1mk each, ECF).',
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
    exemplar: 'Any reasonable weakness: determining when the gelatine cube matched the reference colour could be subjective; the concentration of the solutions was not changed in equal increments.',
    keyConcepts: ['investigation weakness subjective colour comparison unequal increments'],
    keywords: ['subjective', 'colour', 'unequal increments', 'weakness', 'method'],
    feedbackHit: 'Valid weakness of the investigation identified.',
    feedbackMiss: 'Accept: colour comparison is subjective; concentrations not in equal increments. WTTE.',
  },

  // ── Q5: Osmosis Data Analysis (salt concentration) ────────────────────────
  q5_a: {
    marks: 1,
    exemplar: 'Whether the external salt concentration affects the rate of movement (of water molecules) across a membrane (osmosis).',
    keyConcepts: ['problem statement salt concentration rate osmosis membrane'],
    keywords: ['salt concentration', 'rate', 'osmosis', 'movement', 'membrane'],
    feedbackHit: 'Problem correctly links external salt concentration to osmosis rate across the membrane.',
    feedbackMiss: 'State the problem as: whether the external salt concentration affects the rate of movement across a membrane.',
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
    exemplar: '0.09(2) g min⁻¹. Rate = 0.92 g ÷ 10 min = 0.092 ≈ 0.09 g min⁻¹. Correctly stated as 0.09 with correct significant figures.',
    keyConcepts: ['calculation rate osmosis 4% salt 0.92g per 10 min = 0.09 g min⁻¹'],
    keywords: ['0.09', '0.092', 'rate', '4%', 'calculation', 'significant figures'],
    feedbackHit: 'Rate at 4% salt correctly calculated as 0.09 g min⁻¹.',
    feedbackMiss: 'Rate = 0.92 g / 10 min = 0.09(2) g min⁻¹. Accept incorrect precision for first mark.',
  },
  q5_d: {
    marks: 4,
    exemplar: 'Increments evenly spaced. y-axis scale appropriate to give good visual differentiation of data trend. Two points plotted correctly = 1 mark. All points plotted correctly = 2 marks. Ignore point (0, 0) if plotted. ECF from part (c).',
    keyConcepts: ['graph plotting osmosis rate salt concentration evenly spaced', 'y-axis scale appropriate all points correct'],
    keywords: ['y-axis', 'evenly spaced', 'points plotted', 'scale', 'salt concentration', 'rate of osmosis'],
    feedbackHit: 'Evenly spaced axes, appropriate scale, all points correctly plotted.',
    feedbackMiss: '1: evenly spaced increments. 2: y-axis scale appropriate. 3: two points plotted correctly. 4: all points correctly plotted. Ignore (0,0). ECF from (c).',
  },
  q5_e: {
    marks: 4,
    exemplar: 'Both graphs show a similar increasing trend until 8% salt. Both graphs increase at a similar rate OR the rate of increase slows at a similar rate. The university graph shows a plateau or reaches a constant value above 8%. The student graph has no data above 8%.',
    keyConcepts: ['compare student vs university data osmosis salt', 'similar trend plateau above 8% no student data above'],
    keywords: ['similar trend', 'both increase', 'plateau', '8%', 'constant', 'no data above 8%'],
    feedbackHit: 'All four comparison points (similar trend, rate, plateau in university, no student data above 8%) correctly stated.',
    feedbackMiss: '1: both show similar trend to 8%. 2: both increase at similar rate. 3: university shows plateau above 8%. 4: student has no data above 8%.',
  },
  q5_f: {
    marks: 4,
    exemplar: 'As the external salt concentration increases, the concentration gradient across the membrane increases. Water molecules move more quickly down the steeper gradient. So the rate of movement across the membrane increases. Term concentration gradient used correctly. OR: above 8% the gradient is large enough that the system reaches its maximum / equilibrium for this set-up. So the rate of (net) movement becomes constant because water moves in both directions at the same rate. Term equilibrium or osmotic pressure used correctly.',
    keyConcepts: ['concentration gradient salt osmosis rate', 'equilibrium above 8% net movement constant'],
    keywords: ['concentration gradient', 'salt', 'water molecules', 'move faster', 'equilibrium', 'osmotic pressure', 'rate constant'],
    feedbackHit: 'Concentration gradient / equilibrium mechanism correctly explained with scientific term.',
    feedbackMiss: '1: as salt concentration increases the gradient increases. 2: water moves faster. 3: rate of movement across membrane increases. 4: correct term (concentration gradient or equilibrium/osmotic pressure). OR 1-4 for equilibrium explanation.',
  },
  q5_g: {
    marks: 1,
    exemplar: 'Valid because the trends match (below 8%). OR valid because the data/results were similar. OR not valid because there are no measurements above 8%.',
    keyConcepts: ['hypothesis validation osmosis data comparison'],
    keywords: ['valid', 'trends match', 'similar data', 'not valid', 'no measurements above 8%'],
    feedbackHit: 'Valid/not valid stated with correct reason.',
    feedbackMiss: 'Do not accept valid or not valid alone — a reason must be given.',
  },
  q5_h: {
    marks: 2,
    exemplar: 'Any reasonable extension (change to IV), for example: increase the salt concentration range; investigate a different solute. Any reasonable improvement, for example: fill in the missing concentration increments; increase the duration of each trial to check if equilibrium is reached after 10 minutes.',
    keyConcepts: ['osmosis investigation extension improvement', 'increase concentration range fill missing increments'],
    keywords: ['extension', 'improvement', 'concentration range', 'different solute', 'increments', 'duration', 'equilibrium'],
    feedbackHit: 'One valid extension and one valid improvement both stated.',
    feedbackMiss: 'Accept one extension and one improvement given in either box. Extension = change to IV. Improvement = address a weakness in the existing method.',
  },

  // ── Q6: Investigation Design — Osmosis Apple ──────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Necessary equipment: balance or ruler, apple, beaker, thermometer, flask of distilled water, cork borer or knife, ice, kettle, paper towels, goggles. Award 1 mark for three items including apple and thermometer, and water. Award 2 marks for a further three items from the necessary equipment list.',
    keyConcepts: ['osmosis apple investigation equipment', 'balance thermometer beaker cork borer apple water'],
    keywords: ['balance', 'thermometer', 'apple', 'beaker', 'distilled water', 'cork borer', 'knife', 'ice', 'kettle', 'goggles', 'paper towels'],
    feedbackHit: 'Correct set of equipment for osmosis apple investigation selected.',
    feedbackMiss: 'Must include: apple, thermometer, distilled water. Plus any three from: balance/ruler, beaker, cork borer/knife, ice, kettle, paper towels, goggles.',
  },
  q6_b: {
    marks: 15,
    exemplar: 'Criteria B rubric (0–15 marks): Variables: IV = temperature, DV = change in mass of apple cylinders, CV = volume of solution and size/mass of apple cylinders. Hypothesis: testable, linked to variables, with correct scientific explanation (e.g. as temperature increases, rate of osmosis increases because kinetic energy of water molecules increases; above optimal temperature, equilibrium is reached). Manipulation: at least five stated values of IV (temperatures). Method: clearly described, connected to IV, with equipment detail, measurements and units, could be followed by another student. Data: at least three trials. Safety: relevant safety comment (careful with cork borer/knife/hot water/goggles).',
    keyConcepts: ['Criteria B osmosis apple design variables hypothesis method data safety'],
    keywords: ['temperature', 'mass change', 'apple', 'control', 'hypothesis', 'kinetic energy', 'equilibrium', 'trials', 'safety', 'cork borer', 'goggles'],
    feedbackHit: 'Full Criteria B: variables identified; testable hypothesis with scientific explanation; ≥5 temperatures; detailed replicable method; ≥3 trials; safety comment.',
    feedbackMiss: 'Level 4 (max): IV+DV+2CV; testable hypothesis with scientific explanation; ≥5 IV values; method replicable by another student; ≥3 trials; safety linked to specific hazard.',
  },

  // ── Q7: Balanced Diet & Nutrients (peanuts) ───────────────────────────────
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
    exemplar: 'Peanuts.',
    keyConcepts: ['highest protein percentage peanuts from bar chart'],
    keywords: ['peanuts', 'peanut', 'highest', 'protein', 'percentage'],
    feedbackHit: 'Peanuts correctly identified as highest protein food from bar chart.',
    feedbackMiss: 'The food with the highest percentage of protein from the graph is peanuts (38%).',
  },

  // ── Q8: Cultured Dairy Production ─────────────────────────────────────────
  q8_: {
    marks: 16,
    exemplar: 'Criteria D rubric (0–16 marks): Impacts: impacts of intensive dairy farming (deforestation for pasture, methane production from cattle, land and water use, animal welfare and separation of calves). Strengths and limitations: strengths (no animal suffering, less land/water, identical real milk proteins) and limitations of cultured dairy (expensive, energy for fermentation, GMO/unfamiliarity concerns). Environmental: intensive vs cultured environmental impact (land/water/methane vs energy and sugar feedstock). Ethical: animal welfare in dairy farming; ethical issues for cultured dairy (GMO acceptance, natural vs artificial). Appraisal: concluding appraisal linking impacts/environment/ethics.',
    keyConcepts: ['cultured dairy vs intensive farming impacts environment ethical appraisal', 'strengths limitations cultured production sustainability'],
    keywords: ['intensive dairy farming', 'cultured dairy', 'deforestation', 'methane', 'water', 'animal welfare', 'fermentation', 'strengths', 'limitations', 'environmental', 'ethical', 'appraisal'],
    feedbackHit: 'Full Criteria D: impacts + strengths/limitations + environmental + ethical + appraisal, all with scientific reasoning.',
    feedbackMiss: 'Level 4 (13-16): states more than one impact of intensive dairy farming with effects; strength and limitation of cultured dairy with scientific explanation; environmental + ethical considerations; concluding appraisal linking all factors.',
  },

  // ── Q9: Xenotransplantation (GM pig organs) ───────────────────────────────
  q9_: {
    marks: 9,
    exemplar: 'Criteria D rubric (0–9 marks): Advantages: no need to wait for a matching human donor, organs can be produced on demand to shorten waiting lists, pigs can be genetically modified to reduce rejection. Disadvantages: rejection risk remains high because the organ is from another species, risk of transferring animal viruses (zoonosis) to humans, animal-welfare and ethical concerns, not fully tested in humans. Evaluative statement: justified with scientific reasoning. Appraisal: concluding statement linking all factors discussed.',
    keyConcepts: ['xenotransplantation GM pig organs advantages disadvantages appraisal', 'replacing traditional transplantation scientific implications'],
    keywords: ['xenotransplantation', 'pig organs', 'genetically modified', 'transplant', 'donor', 'rejection', 'zoonosis', 'virus', 'advantages', 'disadvantages', 'appraisal'],
    feedbackHit: 'Advantages and disadvantages of xenotransplantation stated with scientific reasoning, plus concluding appraisal.',
    feedbackMiss: 'Level 4 (max): more than one advantage and disadvantage correctly linked to xenotransplantation; evaluative statement justified scientifically; concluding appraisal linking all discussed factors.',
  },
}
