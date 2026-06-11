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
  // ── Q1: Sparkling water / CO₂ ─────────────────────────────────────────────
  q1_a: {
    marks: 1,
    exemplar: '2',
    keyConcepts: ['Molecular formulae', 'Atoms in molecules'],
    keywords: ['two oxygen atoms', '2 oxygen', 'CO₂'],
    feedbackHit: 'Correct — CO₂ contains 2 oxygen atoms.',
    feedbackMiss: 'CO₂: subscript 2 after O means 2 oxygen atoms per molecule.',
    blankAnswers: ['2'],
  },
  q1_b: {
    marks: 1,
    exemplar: 'CO₂ (subscript 2 required)',
    keyConcepts: ['Chemical formulae'],
    keywords: ['CO₂', 'carbon dioxide formula'],
    feedbackHit: 'Correct — CO₂.',
    feedbackMiss: 'Carbon dioxide: C for carbon, O for oxygen, subscript 2 → CO₂.',
    blankAnswers: ['CO₂'],
  },
  q1_c: {
    marks: 3,
    exemplar: 'O::×C×::O — C in centre, two C=O double bonds (dots and crosses), lone pairs on each O (2 lone pairs per O).',
    keyConcepts: ['Covalent bonding', 'Dot-and-cross diagrams'],
    keywords: ['CO₂ dot cross', 'double bond C=O', 'lone pairs oxygen', 'carbon centre'],
    feedbackHit: 'Correct — C centre, double bonds, lone pairs on O.',
    feedbackMiss: '3 marks: (1) C in centre; (2) both C=O double bonds with dots and crosses; (3) two lone pairs on each O.',
  },
  q1_d: {
    marks: 2,
    exemplar: 'CO₂(aq) ⇌ CO₂(g). Both state symbols correct. Equilibrium arrow required. Accept either direction.',
    keyConcepts: ['Equilibrium', 'State symbols'],
    keywords: ['CO₂(aq)', 'CO₂(g)', 'equilibrium arrow'],
    feedbackHit: 'Correct — CO₂(aq) ⇌ CO₂(g).',
    feedbackMiss: 'Need (aq) and (g) state symbols + equilibrium arrow ⇌.',
    blankAnswers: ['CO₂(aq)', 'CO₂(g)'],
  },
  q1_e: {
    marks: 3,
    exemplar: 'The sparkling water is less fizzy. The equilibrium is disrupted (some CO₂ escapes). The solubility of CO₂ decreases as temperature increases (or: diffusion rate increases / concentration of dissolved CO₂ decreases).',
    keyConcepts: ['Gas solubility', 'Temperature and equilibrium'],
    keywords: ['less fizzy', 'equilibrium disrupted', 'CO₂ solubility decreases temperature'],
    feedbackHit: 'Correct — less fizzy; equilibrium disrupted; CO₂ less soluble at higher temperature.',
    feedbackMiss: '3 marks: (1) less fizzy; (2) equilibrium disrupted/CO₂ escapes; (3) solubility decreases with temperature.',
  },

  // ── Q2: Citric acid / sorbitol / erythritol / neotame ─────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Mr(C₆H₈O₇) = 6(12) + 8(1) + 7(16) = 72 + 8 + 112 = 192 g mol⁻¹',
    keyConcepts: ['Molar mass'],
    keywords: ['Mr 192', 'citric acid molar mass', '72+8+112', 'g mol⁻¹'],
    feedbackHit: 'Correct — Mr = 192 g mol⁻¹.',
    feedbackMiss: 'Mr(C₆H₈O₇) = 6×12 + 8×1 + 7×16 = 72+8+112 = 192 g mol⁻¹. Award 1 mark for method, 1 for answer + unit.',
  },
  q2_b: {
    marks: 2,
    exemplar: 'n = m/Mr = 18.2/182 = 0.100 mol (3 s.f.)',
    keyConcepts: ['Moles calculation', 'n = m/Mr'],
    keywords: ['n = m/Mr', '18.2/182', '0.100 mol', 'moles sorbitol'],
    feedbackHit: 'Correct — n = 18.2/182 = 0.100 mol.',
    feedbackMiss: 'n = m/Mr = 18.2 ÷ 182 = 0.100 mol (3 s.f.). Award 2 marks if 0.100 seen without working.',
    blankAnswers: ['0.100'],
  },
  q2_c: {
    marks: 3,
    exemplar: 'C₄H₁₀O₄. Count from 3D model: 4 carbon (grey), 10 hydrogen (white), 4 oxygen (red). Elements must be in correct order.',
    keyConcepts: ['Molecular formulae', 'Counting atoms'],
    keywords: ['C4H10O4', 'erythritol molecular formula', 'count atoms model', 'four carbon ten hydrogen four oxygen'],
    feedbackHit: 'Correct — C₄H₁₀O₄.',
    feedbackMiss: '3 marks: (1) correct atom count; (2) correct formula; (3) correctly expressed in order C, H, O.',
    blankAnswers: ['C₄H₁₀O₄'],
  },
  q2_d: {
    marks: 2,
    exemplar: 'First highlighted group: Ester (–COO– linkage). Second highlighted group: Alcohol (–OH group).',
    keyConcepts: ['Functional groups', 'Organic chemistry'],
    keywords: ['ester COO linkage', 'alcohol OH group', 'neotame functional groups'],
    feedbackHit: 'Correct — first = ester; second = alcohol.',
    feedbackMiss: 'Ester = –COO– (C double-bonded to O and single-bonded to another O). Alcohol = –OH (hydroxyl group on a carbon chain).',
    blankAnswers: ['Ester', 'Alcohol'],
  },

  // ── Q3: Titanium implants ──────────────────────────────────────────────────
  q3_a: {
    marks: 1,
    exemplar: '2.8.10.2  (or 1s² 2s² 2p⁶ 3s² 3p⁶ 3d² 4s²)',
    keyConcepts: ['Electron configuration', 'Titanium'],
    keywords: ['2.8.10.2', 'titanium electron configuration', 'Ti 22 electrons'],
    feedbackHit: 'Correct — Ti (Z=22) electron configuration: 2.8.10.2.',
    feedbackMiss: 'Titanium has 22 electrons: shell 1=2, shell 2=8, shell 3=10, shell 4=2 → 2.8.10.2.',
    blankAnswers: ['2.8.10.2'],
  },
  q3_b: {
    marks: 4,
    exemplar: 'Any two properties + linked advantages [max 4]:\n\n1. Titanium is less reactive/biocompatible → does not react with body tissue/fluids; safe inside body.\n2. Titanium is less dense/lighter → reduces mechanical stress on surrounding bone; more comfortable for patient.\n3. Titanium has high strength-to-weight ratio → can withstand load-bearing forces as a joint replacement.',
    keyConcepts: ['Properties of titanium', 'Biocompatibility', 'Materials science'],
    keywords: ['less reactive biocompatible', 'less dense lighter', 'high strength', 'titanium implant advantage'],
    feedbackHit: 'Correct — two properties each linked to an advantage for implant use.',
    feedbackMiss: 'State property AND linked advantage: (1) less reactive → safe with body tissue; (2) less dense → less stress on bone; (3) high strength → withstands load-bearing forces.',
  },

  // ── Q4: Sugar solubility / toffee production ─────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: '| Temperature of water (°C) | Mass of sucrose (g) |\n| 0 | 180 |\n| 20 | 200 |\n| 40 | 240 |\n| 60 | 320 |\n| 80 | 370 |\n| 100 | 450 |\n\nColumns labelled with Temperature and mass. Units in column header. Data in ascending order.',
    keyConcepts: ['Data organisation', 'Tables'],
    keywords: ['temperature mass sucrose table', 'ascending order', 'headers units', '180 200 240 320 370 450'],
    feedbackHit: 'Correct — labelled columns with units in header; data ascending; no units with values.',
    feedbackMiss: '3 marks: (1) columns labelled Temperature and mass with units; (2) units in header not with data; (3) data in ascending order.',
  },
  q4_b: {
    marks: 5,
    exemplar: 'Scatter graph: x=Temperature/°C (0–100), y=Mass of sucrose/g (0–500); all 6 points plotted; line of best fit; axes labelled with quantity and unit; majority of grid used.',
    keyConcepts: ['Graph plotting', 'Line of best fit'],
    keywords: ['x Temperature', 'y mass sucrose', 'even scale', '6 points', 'line of best fit', 'axes labelled'],
    feedbackHit: 'Correct — axes labelled with units, suitable scale, all 6 points, line of best fit.',
    feedbackMiss: '5 marks: x-axis label; y-axis label; units both axes; 3+ points correct; ALL points + majority of grid.',
  },
  q4_c: { type: 'mcq', correct: 2 },         // Graph C
  q4_d: {
    marks: 2,
    exemplar: 'Outlier: the 60°C data point (measured 320 g vs expected ≈ 280 g from line of best fit in graph C). Expected mass = 280 ± 10 g.',
    keyConcepts: ['Outliers', 'Line of best fit interpretation'],
    keywords: ['outlier 60°C', 'expected 280 g', '320g anomalous', 'line of best fit reading'],
    feedbackHit: 'Correct — outlier at 60°C; expected ≈ 280 g from line.',
    feedbackMiss: 'The 60°C point (320 g) is furthest from the line (expected ~280 g). Award 1 mark for point identified, 1 for expected value 280±10 g.',
  },
  q4_e: {
    marks: 4,
    exemplar: 'Heated pan: Liquid — Takes the shape of the container. Mould after cooling: Solid — No change of shape when changing container.',
    keyConcepts: ['States of matter', 'Properties of solids and liquids'],
    keywords: ['heated pan liquid takes shape', 'mould solid no change shape', 'toffee states'],
    feedbackHit: 'Correct — heated pan = liquid (takes shape); cooled mould = solid (no change of shape). ECF from first mark.',
    feedbackMiss: 'Sugar heated to 140°C → LIQUID (takes shape). Cooled in mould → SOLID (no shape change). Award ECF.',
    blankAnswers: ['Liquid', 'Solid', 'Takes the shape of the container', 'No change of shape when changing container'],
  },

  // ── Q5: Chicken / pancakes / Maillard ─────────────────────────────────────
  q5_a: {
    marks: 4,
    exemplar: 'Independent variable: Time (or duration of cooking)\nDependent variable: How cooked / colour / appearance\nControl variable 1: Size of chicken piece\nControl variable 2: Temperature of water (or type of chicken / volume of water)',
    keyConcepts: ['Variables', 'Criterion B'],
    keywords: ['IV time duration', 'DV how cooked colour', 'CV size chicken', 'CV temperature water'],
    feedbackHit: 'Correct — IV=time; DV=how cooked/appearance; two valid CVs.',
    feedbackMiss: 'IV = time/duration of cooking. DV = how cooked/colour/appearance. CVs = size of chicken, temperature of water, type of chicken, etc.',
    blankAnswers: ['Time / duration of cooking', 'How cooked / colour / appearance', 'Size of chicken piece', 'Temperature of water'],
  },
  q5_b: {
    marks: 3,
    exemplar: 'If: the chicken is cooked for a longer time\nThen: the chicken will be more cooked / firmer / whiter\nBecause: there is a greater amount of chemical change (proteins denature more)',
    keyConcepts: ['Hypothesis', 'If–Then–Because'],
    keywords: ['if longer time chicken', 'then more cooked white firm', 'because chemical change protein denaturation'],
    feedbackHit: 'Correct — If/Then/Because with logical reasoning.',
    feedbackMiss: 'IF longer cooking time → THEN more cooked/firm/white → BECAUSE greater amount of chemical change/protein denaturation.',
  },
  q5_c: {
    marks: 3,
    exemplar: 'Sugar and protein react with heat. The Maillard reaction takes place. This causes the golden-brown colour of pancakes.',
    keyConcepts: ['Maillard reaction', 'Chemical changes in food'],
    keywords: ['sugar protein react heat', 'Maillard reaction', 'golden brown colour', 'pancake browning'],
    feedbackHit: 'Correct — sugar and protein react with heat via Maillard reaction → brown colour.',
    feedbackMiss: '3 marks: (1) sugars and proteins react; (2) with heat; (3) Maillard reaction causes brown colour.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'The pancake would be less golden-brown. Because lower temperature → fewer/slower Maillard reactions (less chemical change) WTTE.',
    keyConcepts: ['Temperature and reaction rate', 'Prediction'],
    keywords: ['less brown golden', 'lower temperature fewer Maillard', 'slower reaction rate'],
    feedbackHit: 'Correct — less brown; lower temperature → fewer/slower Maillard reactions.',
    feedbackMiss: '2 marks: (1) less golden-brown colour; (2) lower temperature → fewer/slower Maillard reactions.',
  },

  // ── Q6: MPPS / pineapple marinade / Crit B design ─────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'The force needed to break cooked MPPS is HIGHER than uncooked. Therefore the hypothesis is NOT supported (ORA).',
    keyConcepts: ['Hypothesis evaluation'],
    keywords: ['force higher cooked', 'hypothesis not supported', 'ORA'],
    feedbackHit: 'Correct — force is higher for cooked MPPS, hypothesis not supported.',
    feedbackMiss: '2 marks: (1) force higher for cooked; (2) hypothesis not supported. Both required.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'Pineapple and lemon samples are suitable to eat. Both had breaking forces greater than 290 N.',
    keyConcepts: ['Data interpretation', 'Threshold values'],
    keywords: ['pineapple lemon suitable', 'breaking force > 290 N'],
    feedbackHit: 'Correct — pineapple and lemon identified; forces > 290 N.',
    feedbackMiss: '2 marks: (1) correct samples (pineapple, lemon); (2) justified with forces > 290 N threshold.',
  },
  q6_c: {
    marks: 1,
    exemplar: 'As a control (or for direct comparison, or as a baseline).',
    keyConcepts: ['Control experiment'],
    keywords: ['control baseline direct comparison', 'reference sample 1'],
    feedbackHit: 'Correct — sample 1 is a control.',
    feedbackMiss: 'Sample 1 (juice only) is a CONTROL — provides baseline to compare experimental samples against.',
    blankAnswers: ['As a control / for direct comparison / as a baseline'],
  },
  q6_d: {
    marks: 2,
    exemplar: 'Repeat the experiment (at least 3 trials). Calculate an average to reduce random error.',
    keyConcepts: ['Reliability'],
    keywords: ['repeat experiment', 'calculate average', 'reduce random error'],
    feedbackHit: 'Correct — repeat AND average.',
    feedbackMiss: '2 marks: (1) repeat experiment; (2) calculate average. Both needed.',
  },
  q6_e: {
    marks: 1,
    exemplar: '"What is the effect of pH on the breaking force of MPPS?" (must mention pH and measurable outcome)',
    keyConcepts: ['Research question'],
    keywords: ['effect of pH', 'breaking force MPPS', 'research question'],
    feedbackHit: 'Correct — research question with pH as IV and measurable DV.',
    feedbackMiss: 'Must state IV (pH) and DV (breaking force/cooked or not). E.g. "What is the effect of pH on the breaking force of MPPS?"',
  },
  q6_f: {
    marks: 17,
    exemplar: 'Crit B design rubric:\n\nBand 4: IV=pH AND DV=breaking force; two CVs (size of strip + time submerged); equipment (force meter + stopwatch + pH meter); Force measured AND ≥15 mins AND same size strips AND submerged in acid; 3+ trials for ≥5 pH levels AND plan to average; safety explicitly linked to acidity (goggles, lab coat).\n\nExample method: Prepare 5 citric acid solutions at pH 2.5, 3.0, 3.5, 4.0, and 4.5. Cut equal-sized MPPS strips (e.g. 3cm × 2cm). Submerge one strip in each solution for 25 minutes at 20°C. Use force meter to measure breaking force. Repeat 3 times. Calculate mean. Record in table. Safety: citric acid is irritant — wear goggles.',
    keyConcepts: ['Criterion B', 'Investigation design'],
    keywords: ['IV pH DV breaking force', 'CVs size time', 'force meter pH meter', '5 pH values 3 trials', 'acid safety'],
    feedbackHit: 'Strong Crit B — IV/DV/CVs, equipment, 5+ pH values, 3 trials, acid safety.',
    feedbackMiss: 'Band descriptors check: (1) IV or DV; (2) IV AND DV; (3) measured for multiple pH + CVs; (4) full method + safety.',
  },

  // ── Q7: Protein / chicken nuggets carbon footprint ─────────────────────────
  q7_a: {
    marks: 2,
    exemplar: 'Carbon footprint from chicken protein in US diet = total protein footprint − non-chicken contribution. From graph: approximately 1800 − 700 = 1100 kg CO₂ eq (accept 1050–1150). Award 2 marks for correct answer with no working.',
    keyConcepts: ['Carbon footprint', 'Data from graphs'],
    keywords: ['1800-700', '1100 kg CO₂', 'chicken carbon footprint'],
    feedbackHit: 'Correct — approximately 1050–1150 kg CO₂ equivalent.',
    feedbackMiss: 'Read total US diet bar (~1800) minus non-chicken contribution (~700). Answer ≈ 1100 kg CO₂ eq. Accept 1050–1150.',
  },
  q7_b: {
    marks: 7,
    exemplar: 'Crit D rubric:\n\nAD Band 3: >1 production advantage or disadvantage with supporting evidence (plant nuggets have lower carbon/water/land footprint per kg protein; however texture/taste may differ).\n\nNutritional Band 3: >1 category compared for both (energy, protein, fat, sodium compared).\n\nConclusion Band 3: Appraisal with justification (e.g. plant nuggets are better for the environment; nutritionally similar; people choose for ethical/environmental/health reasons but taste preference may favour chicken).',
    keyConcepts: ['Criterion D', 'Plant-based diet', 'Environmental impact'],
    keywords: ['lower carbon water land nuggets', 'nutritional comparison', 'ethical consumer', 'justify choice'],
    feedbackHit: 'Strong Crit D — AD of plant protein production + nutritional comparison + justified conclusion.',
    feedbackMiss: '(1) advantage + disadvantage of plant protein production; (2) 2+ nutritional comparisons; (3) justified conclusion.',
  },

  // ── Q8: Insect protein ────────────────────────────────────────────────────
  q8_: {
    marks: 15,
    exemplar: 'Crit D rubric (4 bands):\n\nEnvironmental (Band 4): >1 impact with scientific justification (e.g. "crickets require 12× less feed than cattle per kg of protein produced; vertical urban farms greatly reduce land use").\n\nEthical (Band 4): Issue stated with further discussion (e.g. "many cultures consider insects unacceptable to eat; however, insects feel less pain than mammals due to simpler nervous systems; some argue no killing is involved if they are processed alive").\n\nSocio-economic (Band 4): Social + economic + justification (e.g. "cricket farms cost less to set up than cattle farms; can be located in cities; creating urban food production jobs; however, cultural acceptance in Western countries remains a barrier").\n\nHealth (Band 4): Clearly stated (e.g. "cricket protein is comparable in quality to meat; high in essential amino acids; risk of chitin allergy in shellfish-allergic individuals; must be processed carefully to avoid contamination").\n\nConclusion (Band 4): Justified appraisal (e.g. "Insect protein is a promising sustainable solution; environmental benefits are well-evidenced; the main challenges are cultural acceptance and scaling production; with targeted education and regulation, insect protein could become mainstream").',
    keyConcepts: ['Criterion D', 'Insect protein', 'Environmental sustainability', 'Ethical issues'],
    keywords: ['cricket mealworm less land water feed', 'ethical cultural acceptance', 'urban farming socio-economic', 'chitin allergy health', 'justified conclusion'],
    feedbackHit: 'Strong Crit D — environmental + ethical + socio-economic + health + justified conclusion.',
    feedbackMiss: 'Need: (1) environmental impact stated AND justified; (2) ethical issue stated AND discussed; (3) social AND economic + justification; (4) health impact clearly stated; (5) justified conclusion.',
  },
}
