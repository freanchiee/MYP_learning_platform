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
export type { MSRecord }

export const MS: MSRecord = {
  // ── Q1: Soda water / CO₂ ─────────────────────────────────────────────────
  q1_a: {
    marks: 1,
    exemplar: '2',
    keyConcepts: ['Molecular formulae', 'Atoms in molecules'],
    keywords: ['two oxygen atoms', '2 oxygen', 'CO₂'],
    feedbackHit: 'Correct — CO₂ contains 2 oxygen atoms.',
    feedbackMiss: 'CO₂: subscript 2 means 2 oxygen atoms.',
    blankAnswers: ['2'],
  },
  q1_b: {
    marks: 1,
    exemplar: 'CO₂ (subscript 2 required)',
    keyConcepts: ['Chemical formulae'],
    keywords: ['CO₂', 'carbon dioxide formula'],
    feedbackHit: 'Correct — CO₂.',
    feedbackMiss: 'CO₂: C for carbon, O for oxygen, subscript 2.',
    blankAnswers: ['CO₂'],
  },
  q1_c: {
    marks: 3,
    exemplar: 'O::×C×::O — C in centre, two C=O double bonds (dots and crosses), lone pairs on each O.',
    keyConcepts: ['Covalent bonding', 'Dot-and-cross diagrams'],
    keywords: ['CO₂ dot cross', 'double bond', 'lone pairs'],
    feedbackHit: 'Correct — C centre, double bonds, lone pairs on O.',
    feedbackMiss: '3 marks: (1) C centre; (2) both double bonds; (3) lone pairs on each O.',
  },
  q1_d: {
    marks: 2,
    exemplar: 'CO₂(aq) ⇌ CO₂(g). Both states correct. Equilibrium arrow required. Either direction accepted.',
    keyConcepts: ['Equilibrium', 'State symbols'],
    keywords: ['CO₂(aq)', 'CO₂(g)', 'equilibrium arrow'],
    feedbackHit: 'Correct — CO₂(aq) ⇌ CO₂(g).',
    feedbackMiss: 'Need (aq) and (g) + equilibrium arrow ⇌.',
    blankAnswers: ['CO₂(aq)', 'CO₂(g)'],
  },
  q1_e: {
    marks: 3,
    exemplar: 'The soda water is less fizzy. The equilibrium is disrupted as CO₂ escapes. CO₂ solubility decreases as temperature increases (or: diffusion increases / concentration of dissolved CO₂ decreases).',
    keyConcepts: ['Gas solubility', 'Temperature and equilibrium'],
    keywords: ['less fizzy', 'equilibrium CO₂ escapes', 'solubility decreases temperature'],
    feedbackHit: 'Correct — less fizzy; equilibrium disrupted; CO₂ less soluble at high temp.',
    feedbackMiss: '3 marks: (1) less fizzy; (2) equilibrium disrupted; (3) solubility decreases with temperature.',
  },

  // ── Q2: Tartaric acid / mannitol / sugar alcohol / sucralose ──────────────
  q2_a: {
    marks: 2,
    exemplar: 'Mr(C₄H₆O₆) = 4(12) + 6(1) + 6(16) = 48 + 6 + 96 = 150 g mol⁻¹',
    keyConcepts: ['Molar mass'],
    keywords: ['Mr 150', 'tartaric acid molar mass', '48+6+96'],
    feedbackHit: 'Correct — Mr = 150 g mol⁻¹.',
    feedbackMiss: 'Mr(C₄H₆O₆) = 4×12 + 6×1 + 6×16 = 150 g mol⁻¹.',
  },
  q2_b: {
    marks: 2,
    exemplar: 'n = m/Mr = 12.0/182 = 0.0659 mol (3 s.f.)',
    keyConcepts: ['Moles calculation'],
    keywords: ['n = m/Mr', '12.0/182', '0.0659 mol'],
    feedbackHit: 'Correct — n = 0.0659 mol.',
    feedbackMiss: 'n = m/Mr = 12.0 ÷ 182 = 0.06593… → 0.0659 mol (3 s.f.).',
    blankAnswers: ['0.0659'],
  },
  q2_c: {
    marks: 3,
    exemplar: 'C₆H₁₄O₆. Count from 3D model: 6 carbon (grey), 14 hydrogen (white), 6 oxygen (red). Elements in correct order.',
    keyConcepts: ['Molecular formulae', 'Counting atoms'],
    keywords: ['C6H14O6', 'mannitol sorbitol formula', 'six carbon fourteen hydrogen six oxygen'],
    feedbackHit: 'Correct — C₆H₁₄O₆.',
    feedbackMiss: '3 marks: (1) correct atom count; (2) correct formula; (3) correctly expressed C, H, O order.',
    blankAnswers: ['C₆H₁₄O₆'],
  },
  q2_d: {
    marks: 2,
    exemplar: 'First highlighted group: Alkene (C=C double bond). Second highlighted group: Alcohol (–OH).',
    keyConcepts: ['Functional groups', 'Organic chemistry'],
    keywords: ['alkene C=C double bond', 'alcohol OH group', 'sucralose functional groups'],
    feedbackHit: 'Correct — first = alkene; second = alcohol.',
    feedbackMiss: 'Alkene = C=C double bond. Alcohol = –OH (hydroxyl group).',
    blankAnswers: ['Alkene', 'Alcohol'],
  },

  // ── Q3: Zinc / galvanizing ────────────────────────────────────────────────
  q3_a: {
    marks: 1,
    exemplar: '2.8.18.2  (or 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s²)',
    keyConcepts: ['Electron configuration', 'Zinc'],
    keywords: ['2.8.18.2', 'zinc electron configuration', 'Zn 30 electrons'],
    feedbackHit: 'Correct — Zn (Z=30) electron configuration: 2.8.18.2.',
    feedbackMiss: 'Zinc has 30 electrons: shell 1=2, shell 2=8, shell 3=18, shell 4=2 → 2.8.18.2.',
    blankAnswers: ['2.8.18.2'],
  },
  q3_b: {
    marks: 4,
    exemplar: 'Any two properties + linked advantages [max 4]:\n\n1. Zinc is more reactive than tin → provides sacrificial protection (if the coating is scratched, zinc oxidises instead of the steel).\n2. Zinc is more readily available/cheaper than tin → lower production cost for galvanized steel products.\n3. Zinc coating can be applied easily (lower melting point than tin) → more efficient manufacturing process.',
    keyConcepts: ['Properties of zinc', 'Galvanic protection', 'Materials science'],
    keywords: ['zinc more reactive sacrificial', 'readily available cheaper', 'easy to apply', 'galvanizing advantages'],
    feedbackHit: 'Correct — two properties each linked to a real advantage of zinc coating.',
    feedbackMiss: 'State property AND advantage: (1) more reactive → sacrificial protection if scratched; (2) more available → cheaper; (3) easier to apply.',
  },

  // ── Q4: Sugar solubility / lollipop production ────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: '| Temperature (°C) | Mass of sucrose (g) |\n| 0 | 160 |\n| 20 | 180 |\n| 40 | 330 |\n| 60 | 295 |\n| 80 | 370 |\n| 100 | 440 |\n\nColumns labelled, units in header, data in ascending order. (Note: 40°C is the outlier.)',
    keyConcepts: ['Data organisation', 'Tables'],
    keywords: ['temperature mass sucrose lollipop', 'ascending order', 'headers units', '160 180 330 295 370 440'],
    feedbackHit: 'Correct — labelled columns, units in header, ascending temperature order.',
    feedbackMiss: '3 marks: (1) labelled columns with units; (2) units in header only; (3) ascending order.',
  },
  q4_b: {
    marks: 5,
    exemplar: 'Scatter graph: x=Temperature/°C (0–100), y=Mass of sucrose/g (0–500+); all 6 points; line of best fit; labelled axes with units; majority of grid.',
    keyConcepts: ['Graph plotting', 'Line of best fit'],
    keywords: ['x Temperature y mass sucrose', 'even scale', '6 points', 'line of best fit'],
    feedbackHit: 'Correct — axes, scale, all points, line of best fit.',
    feedbackMiss: '5 marks: x-axis label; y-axis label; units; 3+ points; ALL points + majority of grid.',
  },
  q4_c: { type: 'mcq', correct: 2 },         // Graph C
  q4_d: {
    marks: 2,
    exemplar: 'Outlier: the 40°C data point (measured 330 g vs expected ≈ 215 g from line of best fit). Expected mass = 215 ± 10 g.',
    keyConcepts: ['Outliers', 'Data interpretation'],
    keywords: ['outlier 40°C', 'expected 215 g', '330g anomalous'],
    feedbackHit: 'Correct — outlier at 40°C; expected ≈ 215 g.',
    feedbackMiss: 'The 40°C point (330 g) is furthest from the trend line (expected ~215 g). 1 mark for point, 1 for expected value 215±10 g.',
  },
  q4_e: {
    marks: 4,
    exemplar: 'Heated pan: Liquid — Takes the shape of the container. Cooled mould: Solid — No change of shape when changing container.',
    keyConcepts: ['States of matter'],
    keywords: ['heated pan liquid takes shape', 'cooled mould solid no change shape'],
    feedbackHit: 'Correct — heated = liquid (takes shape); cooled = solid (no change of shape). ECF.',
    feedbackMiss: 'Sugar heated to 150°C → LIQUID. Cooled in mould → SOLID. Liquid takes shape; solid does not change shape.',
    blankAnswers: ['Liquid', 'Solid', 'Takes the shape of the container', 'No change of shape when changing container'],
  },

  // ── Q5: Shrimp / onion rings / Maillard ───────────────────────────────────
  q5_a: {
    marks: 4,
    exemplar: 'Independent variable: Time (or duration of cooking)\nDependent variable: Colour / appearance / how cooked\nControl variable 1: Size of shrimp\nControl variable 2: Temperature of water (or type of shrimp / volume of water)',
    keyConcepts: ['Variables', 'Criterion B'],
    keywords: ['IV time duration', 'DV colour appearance', 'CV size shrimp', 'CV temperature water'],
    feedbackHit: 'Correct — IV=time; DV=colour/appearance; two valid CVs.',
    feedbackMiss: 'IV = time/duration. DV = colour/appearance/how cooked. CVs = size of shrimp, temperature, type of shrimp, etc.',
    blankAnswers: ['Time / duration of cooking', 'Colour / appearance / how cooked', 'Size of shrimp', 'Temperature of water'],
  },
  q5_b: {
    marks: 3,
    exemplar: 'If: shrimp is cooked for a longer time\nThen: the shrimp will be more cooked / firmer / pinker\nBecause: there is greater chemical change (proteins denature more)',
    keyConcepts: ['Hypothesis'],
    keywords: ['if longer time shrimp', 'then more cooked pink firm', 'because chemical change'],
    feedbackHit: 'Correct If/Then/Because.',
    feedbackMiss: 'IF longer cooking → THEN more cooked/pink/firm → BECAUSE greater chemical change/protein denaturation.',
  },
  q5_c: {
    marks: 3,
    exemplar: 'Sugar and protein react with heat. The Maillard reaction occurs. This produces the golden-brown colour of onion rings.',
    keyConcepts: ['Maillard reaction'],
    keywords: ['sugar protein heat', 'Maillard reaction', 'golden brown onion rings'],
    feedbackHit: 'Correct — sugar + protein + heat → Maillard → brown colour.',
    feedbackMiss: '3 marks: (1) sugars and proteins react; (2) with heat; (3) Maillard reaction causes brown colour.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'The onion rings would be less golden-brown. Because at lower temperature, fewer/slower Maillard reactions occur (less chemical change) WTTE.',
    keyConcepts: ['Temperature and reaction rate'],
    keywords: ['less brown', 'lower temperature fewer Maillard', 'slower reactions'],
    feedbackHit: 'Correct — less brown; fewer/slower Maillard reactions at lower temperature.',
    feedbackMiss: '2 marks: (1) less brown; (2) lower temperature → fewer Maillard reactions.',
  },

  // ── Q6: MR-S / lemon+apple marinade / Crit B design ─────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Force to break cooked MR-S is HIGHER than uncooked. Hypothesis NOT supported (ORA).',
    keyConcepts: ['Hypothesis evaluation'],
    keywords: ['force higher cooked MR-S', 'hypothesis not supported'],
    feedbackHit: 'Correct — force higher, hypothesis not supported.',
    feedbackMiss: '2 marks: (1) force is higher for cooked; (2) hypothesis not supported.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'Lemon and apple samples are suitable to eat. Both had breaking forces greater than 300 N.',
    keyConcepts: ['Data interpretation', 'Threshold values'],
    keywords: ['lemon apple suitable', 'breaking force > 300 N'],
    feedbackHit: 'Correct — lemon and apple identified; forces > 300 N.',
    feedbackMiss: '2 marks: (1) correct samples (lemon + apple); (2) forces > 300 N threshold.',
  },
  q6_c: {
    marks: 1,
    exemplar: 'As a control (or for direct comparison, or as a baseline).',
    keyConcepts: ['Control experiment'],
    keywords: ['control baseline direct comparison'],
    feedbackHit: 'Correct — sample 1 is a control.',
    feedbackMiss: 'Sample 1 (juice only) is a CONTROL — provides a reference.',
    blankAnswers: ['As a control / for direct comparison / as a baseline'],
  },
  q6_d: {
    marks: 2,
    exemplar: 'Repeat the experiment. Calculate an average to reduce random error.',
    keyConcepts: ['Reliability'],
    keywords: ['repeat experiment average', 'reduce random error'],
    feedbackHit: 'Correct — repeat AND average.',
    feedbackMiss: '2 marks: (1) repeat; (2) calculate average. Both needed.',
  },
  q6_e: {
    marks: 1,
    exemplar: '"What is the effect of pH on the breaking force of MR-S?" (must mention pH and measurable outcome)',
    keyConcepts: ['Research question'],
    keywords: ['effect of pH MR-S breaking force'],
    feedbackHit: 'Correct — pH as IV, measurable outcome as DV.',
    feedbackMiss: 'Must state IV (pH) and DV (breaking force). E.g. "What is the effect of pH on the breaking force of MR-S?"',
  },
  q6_f: {
    marks: 17,
    exemplar: 'Crit B design rubric:\n\nBand 4: IV=pH AND DV=breaking force; two CVs (size of strip + time); equipment (force meter + stopwatch + pH meter); Force measured AND ≥15 mins AND same size AND submerged; 3+ trials for ≥5 pH levels AND plan to average; safety explicitly linked to acidity.\n\nExample method: Prepare 5 tartaric acid solutions at pH 2.0, 2.5, 3.0, 3.5, 4.0. Cut 5cm × 2cm strips of MR-S. Submerge in 50 cm³ of each solution for 25 minutes at room temperature. Measure force to break using force meter. Repeat 3 times per pH. Calculate mean. Safety: tartaric acid is irritant — wear goggles.',
    keyConcepts: ['Criterion B', 'Investigation design'],
    keywords: ['IV pH DV breaking force', 'CVs size strip time', 'force meter', '5 pH levels 3 trials', 'acid safety'],
    feedbackHit: 'Strong Crit B — IV/DV/CVs, equipment, method, safety.',
    feedbackMiss: 'Band descriptors: (1) IV or DV; (2) IV AND DV; (3) measured multiple pH + CVs; (4) full method + safety linked to acid.',
  },

  // ── Q7: Dairy vs plant-based milk carbon footprint ────────────────────────
  q7_a: {
    marks: 2,
    exemplar: 'Carbon footprint from dairy milk in European diet. From graph: approximately 1600 − 550 = 1050 kg CO₂ eq (accept 1000–1100). Award 2 marks for correct answer without working.',
    keyConcepts: ['Carbon footprint', 'Graph reading'],
    keywords: ['1600-550', '1050 kg CO₂', 'dairy milk footprint'],
    feedbackHit: 'Correct — approximately 1000–1100 kg CO₂ eq.',
    feedbackMiss: 'Read total bar (~1600) minus non-dairy component (~550). ≈ 1050 kg CO₂ eq. Accept 1000–1100.',
  },
  q7_b: {
    marks: 7,
    exemplar: 'Crit D rubric:\n\nAD Band 3: >1 production advantage or disadvantage with evidence (oat milk lower carbon/water/land; however requires more processing; less protein per serving).\n\nNutritional Band 3: >1 category compared (energy, protein, calcium, fat compared for dairy vs oat).\n\nConclusion Band 3: Appraisal with justification (e.g. plant-based milk is better environmentally; nutritionally, dairy has more protein/calcium unless fortified; people choose plant milk for ethical, environmental, or lactose intolerance reasons).',
    keyConcepts: ['Criterion D', 'Environmental impact', 'Nutritional analysis', 'Plant-based diet'],
    keywords: ['oat milk lower carbon water land', 'nutritional comparison protein calcium', 'lactose intolerance ethical', 'justify choice'],
    feedbackHit: 'Strong Crit D — AD production + 2+ nutritional comparisons + justified conclusion.',
    feedbackMiss: '(1) AD of production with evidence; (2) 2+ nutritional comparisons; (3) justified conclusion.',
  },

  // ── Q8: Lab-grown seafood ─────────────────────────────────────────────────
  q8_: {
    marks: 15,
    exemplar: 'Crit D rubric (4 bands):\n\nEnvironmental (Band 4): >1 impact with justification (e.g. "lab-grown fish eliminates destructive fishing practices such as bottom trawling that destroy seabed habitats; requires less water and land than fish farms; could prevent extinction of bluefin tuna").\n\nEthical (Band 4): Issue stated with discussion (e.g. "cells taken from live fish, so some argue this is still animal exploitation; however, it eliminates bycatch — the accidental killing of non-target species including dolphins and sea turtles; this is ethically preferable to commercial fishing").\n\nSocio-economic (Band 4): Social + economic + justification (e.g. "the seafood industry employs millions of people in fishing communities globally — lab-grown fish would displace these jobs; however, it could make premium fish like salmon affordable for all income groups; new lab technician jobs would be created").\n\nHealth (Band 4): Clearly stated (e.g. "lab-grown seafood could be free from microplastics, heavy metals, and parasites found in wild-caught fish; however, long-term health effects of eating lab-grown protein are not yet fully understood").\n\nConclusion (Band 4): Justified (e.g. "lab-grown seafood offers strong environmental and health benefits; ethical concerns are minor compared to current industrial fishing; the key challenge is economic: supporting displaced fishing communities and scaling production to mainstream affordability").',
    keyConcepts: ['Criterion D', 'Lab-grown seafood', 'Environmental impact', 'Ethical issues', 'Socio-economic factors'],
    keywords: ['eliminate overfishing trawling', 'ethical bycatch no killing', 'fishing jobs displaced affordable', 'microplastics heavy metals', 'justified conclusion seafood'],
    feedbackHit: 'Strong Crit D — environmental + ethical + socio-economic + health + justified conclusion.',
    feedbackMiss: 'Need: (1) environmental impact justified; (2) ethical issue discussed; (3) social + economic issue justified; (4) health impact stated; (5) justified conclusion.',
  },
}
