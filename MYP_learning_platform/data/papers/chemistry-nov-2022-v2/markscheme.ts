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
  // ── Q1: Nickel / metals ────────────────────────────────────────────────────
  q1_a: { type: 'mcq', correct: 3 },         // Transition metals
  q1_b: {
    marks: 1,
    exemplar: 'Period 4',
    keyConcepts: ['Periodic table', 'Periods'],
    keywords: ['nickel period 4', 'row 4', 'transition metal row'],
    feedbackHit: 'Correct — nickel is in Period 4 of the periodic table.',
    feedbackMiss: 'Nickel (Ni, atomic number 28) is in Period 4 — it has 4 electron shells: 2, 8, 16, 2.',
    blankAnswers: ['4'],
  },
  q1_c: {
    marks: 2,
    exemplar: 'An isotope is an atom of the same element with the same number of protons (and electrons) but a different number of neutrons / different mass number.',
    keyConcepts: ['Isotopes', 'Atomic structure'],
    keywords: ['same atomic number', 'different mass number', 'different neutrons', 'same protons'],
    feedbackHit: 'Correct — isotopes share the same atomic number but differ in neutron count / mass number.',
    feedbackMiss: 'Isotopes have the SAME number of protons (same element) but DIFFERENT numbers of neutrons → different mass numbers.',
  },
  q1_d: {
    marks: 2,
    exemplar: 'Neutrons = 60 − 28 = 32. Electrons = 28 (equal to proton number).',
    keyConcepts: ['Atomic structure', 'Isotopes'],
    keywords: ['Ni-60 neutrons 32', 'electrons 28', 'mass number minus atomic number'],
    feedbackHit: 'Correct — neutrons = 60 − 28 = 32; electrons = atomic number = 28.',
    feedbackMiss: 'Neutrons = mass number − atomic number = 60 − 28 = 32. Electrons = atomic number in neutral atom = 28.',
  },
  q1_e: { type: 'mcq', correct: 1 },         // Alloy
  q1_f: {
    marks: 2,
    exemplar: 'Nichrome has a higher melting point than pure nickel, making it suitable for high-temperature applications. It also has greater resistance to oxidation/corrosion, so catalytic converters last longer.',
    keyConcepts: ['Alloys', 'Properties of materials'],
    keywords: ['higher melting point nichrome', 'corrosion resistant', 'heat resistant', 'durable catalytic converter'],
    feedbackHit: 'Correct — links a property from the table (melting point / corrosion resistance) to why it suits catalytic converters.',
    feedbackMiss: 'Nichrome is harder / has higher melting point / more corrosion resistant than pure nickel → better for high-temperature catalytic converter applications.',
  },

  // ── Q2: Aluminium / AlCl₃ bonding ──────────────────────────────────────────
  q2_a: { type: 'mcq', correct: 3 },         // Oxidation
  q2_b: { type: 'mcq', correct: 0 },         // Option A: :F–F: (single bond with lone pairs)
  q2_c: {
    marks: 3,
    exemplar: '2 Al + 3 Cl₂ → 2 AlCl₃',
    keyConcepts: ['Balancing equations', 'Aluminium chloride'],
    keywords: ['2Al', '3Cl₂', '2AlCl₃', 'balanced equation', 'coefficients 2 3 2'],
    feedbackHit: 'Correct — 2Al : 3Cl₂ : 2AlCl₃ balances aluminium and chlorine atoms.',
    feedbackMiss: 'AlCl₃ needs 1 Al and 3 Cl per unit. Try 2Al + 3Cl₂ → 2AlCl₃: left = 2 Al, 6 Cl; right = 2 Al, 6 Cl ✓.',
    blankAnswers: ['2', '3', '2'],
  },
  q2_d: {
    marks: 4,
    exemplar: 'n(Al) = m/Mr = 0.540/27.0 = 0.0200 mol. From balanced equation, ratio Al:Cl₂ = 2:3, so n(Cl₂) = 0.0200 × (3/2) = 0.0300 mol.',
    keyConcepts: ['Moles calculation', 'Stoichiometry'],
    keywords: ['n = m/Mr', '0.540/27.0', '2:3 ratio', '0.0300 mol Cl₂'],
    feedbackHit: 'Correct — moles of Al × 3/2 gives moles of Cl₂.',
    feedbackMiss: 'Step 1: n(Al) = 0.540/27.0 = 0.0200 mol. Step 2: Use 2Al:3Cl₂ ratio → n(Cl₂) = 0.0200 × 3/2 = 0.0300 mol.',
  },
  q2_e: {
    marks: 2,
    exemplar: 'Gas / slightly soluble / not conductive → Chlorine. Solid / insoluble / conductive → Aluminium. Solid / soluble / not conductive → Aluminium chloride.',
    keyConcepts: ['Physical properties', 'States of matter'],
    keywords: ['chlorine gas slightly soluble', 'aluminium solid metallic conductor', 'AlCl₃ ionic solid soluble'],
    feedbackHit: 'Correct — all three substances matched to their properties.',
    feedbackMiss: 'Chlorine = gas, slightly soluble, non-conductor (covalent). Al = solid, insoluble, conducts (metallic). AlCl₃ = ionic: solid, dissolves, SOLID does not conduct.',
    blankAnswers: ['Chlorine', 'Aluminium', 'Aluminium chloride'],
  },
  q2_f: {
    marks: 1,
    exemplar: '2, 8, 5   (or 1s² 2s² 2p⁶ 3s² 3p³)',
    keyConcepts: ['Electron configuration', 'Phosphorus'],
    keywords: ['2.8.5', 'phosphorus 15 electrons', 'three shells', '3p³'],
    feedbackHit: 'Correct — phosphorus has 15 electrons arranged 2, 8, 5.',
    feedbackMiss: 'Phosphorus (Z=15) has 15 electrons: shell 1 = 2, shell 2 = 8, shell 3 = 5 → 2.8.5.',
    blankAnswers: ['2.8.5'],
  },
  q2_g: {
    marks: 4,
    exemplar: 'Aluminium loses 3 electrons to form Al³⁺ ions. Chlorine gains 1 electron to form Cl⁻ ions. Three Cl⁻ ions are needed per Al³⁺. An ionic bond is formed by the electrostatic attraction between the oppositely charged Al³⁺ and Cl⁻ ions.',
    keyConcepts: ['Ionic bonding', 'Electron transfer'],
    keywords: ['Al loses 3 electrons', 'Al³⁺', 'Cl gains electron', 'Cl⁻', 'ionic bond electrostatic attraction'],
    feedbackHit: 'Correct — electron transfer from Al to Cl, ions formed, ionic bond described.',
    feedbackMiss: 'Al LOSES 3 electrons → Al³⁺; each Cl GAINS 1 electron → Cl⁻; 3 Cl⁻ per Al³⁺; ionic bond = electrostatic attraction between opposite charges.',
  },
  q2_h: { type: 'mcq', correct: 0 },         // Corrosive (options: Corrosive, Explosive, Flammable, Toxic)

  // ── Q3: Acid rain / limestone erosion (V2 data) ────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'Average = (3.25 + 3.19 + 3.23) ÷ 3 = 9.67 ÷ 3 = 3.22 g',
    keyConcepts: ['Data processing', 'Mean calculation'],
    keywords: ['average', '3.22 g', '(3.25+3.19+3.23)/3', 'mean vinegar limestone'],
    feedbackHit: 'Correct — evidence of calculation and correctly rounded to 3.22.',
    feedbackMiss: 'Add the three trials: 3.25 + 3.19 + 3.23 = 9.67 g. Divide by 3: 9.67/3 = 3.22 g.',
    blankAnswers: ['3.22'],
  },
  q3_b: {
    marks: 3,
    exemplar: 'The pH probe gives numerical/quantitative data to 3 significant figures, making it precise and reliable. Universal indicator paper gives a range of colours (qualitative data), dependent on interpretation. Therefore the pH probe produces more valid data.',
    keyConcepts: ['Validity', 'Quantitative vs qualitative data'],
    keywords: ['pH probe quantitative numerical', 'indicator qualitative colour', 'pH probe valid'],
    feedbackHit: 'Correct — contrasted quantitative probe with qualitative indicator.',
    feedbackMiss: 'Key points: (1) pH probe = numerical/quantitative to 3 sig figs; (2) indicator = colour range (qualitative) / subject to interpretation; (3) pH probe more valid.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'Lemon juice had the largest decrease in acidity because it showed the largest average increase in pH (3.44), compared to cola (2.67) and vinegar (2.58).',
    keyConcepts: ['pH scale', 'Acidity'],
    keywords: ['lemon juice', 'largest pH increase 3.44', 'least acidic after week'],
    feedbackHit: 'Correct — identified lemon juice with justification from pH data.',
    feedbackMiss: 'Lemon juice average ΔpH = 3.44 (largest) → greatest decrease in acidity.',
  },
  q3_d: {
    marks: 17,
    exemplar: 'Crit B design rubric: IV = limestone chip size; DV = change in mass (or CO₂ volume or pH change); CVs = acid concentration (0.1 mol/dm³ HCl), volume, temperature; equipment listed; ≥5 chip sizes, ≥3 trials; clear method; acid safety.',
    keyConcepts: ['Criterion B', 'Investigation design'],
    keywords: ['IV chip size', 'DV mass change', 'CVs HCl concentration', 'equipment', 'trials', 'method', 'safety'],
    feedbackHit: 'Strong design — IV/DV/CVs, equipment, sufficient data, method, safety.',
    feedbackMiss: 'IV (limestone chip size), DV (mass/CO₂/pH), 2+ CVs, equipment, ≥5 sizes + ≥3 trials, step-by-step method, acid safety.',
  },
  q3_e: {
    marks: 2,
    exemplar: 'Research question: "How does the thickness of a wax coating affect the change in mass of limestone chips when exposed to acid?" IV = thickness of wax coating; DV = change in mass (or volume of gas / pH change).',
    keyConcepts: ['Research question', 'Variables'],
    keywords: ['thickness of wax coating IV', 'change in mass DV', 'research question'],
    feedbackHit: 'Correct — question includes wax coating thickness as IV and a measurable DV.',
    feedbackMiss: 'IV = thickness of wax coating. DV = any measurable outcome (mass change, CO₂ volume, pH change).',
  },

  // ── Q4: Lemon juice + baking soda balloon investigation ────────────────────
  q4_a: {
    marks: 3,
    exemplar: 'IV: Number of teaspoons (or mass) of baking soda. DV: Diameter of balloon. CV: Volume of lemon juice (50 cm³) [or type/size of balloon; temperature].',
    keyConcepts: ['Variables', 'Criterion B'],
    keywords: ['IV baking soda teaspoons', 'DV balloon diameter', 'CV volume lemon juice'],
    feedbackHit: 'Correct — IV, DV, valid CV all identified.',
    feedbackMiss: 'IV = teaspoons of baking soda; DV = balloon diameter; CV = volume of lemon juice or type of balloon.',
    blankAnswers: ['Number of teaspoons of baking soda', 'Diameter of balloon', 'Volume of lemon juice'],
  },
  q4_b: {
    marks: 3,
    exemplar: 'If the mass of baking soda increases, then the diameter of the balloon will increase, because more carbon dioxide is produced.',
    keyConcepts: ['Hypothesis', 'If–Then–Because'],
    keywords: ['if baking soda increases', 'then balloon diameter increases', 'because more CO₂'],
    feedbackHit: 'Correct hypothesis — If/then/because with logical reasoning.',
    feedbackMiss: 'IF more baking soda → THEN larger balloon → BECAUSE more CO₂ produced.',
  },
  q4_c: {
    marks: 2,
    exemplar: 'Limitation 1: The baking soda was measured in spoons, not grams — spoon sizes vary. Limitation 2: Only one trial per amount, so no average can be calculated.',
    keyConcepts: ['Limitations'],
    keywords: ['spoon not weighed', 'one trial no average', 'balloon diameter measurement'],
    feedbackHit: 'Two valid limitations identified.',
    feedbackMiss: 'Limitations: (1) spoons not grams — variable amount; (2) one trial — no average; (3) balloon diameter hard to measure accurately.',
  },
  q4_d: {
    marks: 1,
    exemplar: 'Different IV: concentration of lemon juice / type of acid / volume of lemon juice / temperature of the solution.',
    keyConcepts: ['Extending investigations'],
    keywords: ['concentration lemon juice', 'type of acid', 'volume lemon juice', 'temperature'],
    feedbackHit: 'Correct — valid different IV suggested.',
    feedbackMiss: 'Any variable that affects CO₂ production: concentration of acid, volume, temperature, type of acid.',
  },
  q4_e: {
    marks: 3,
    exemplar: 'Table:\n\n| Mass of baking soda / g | Balloon diameter / cm |\n|---|---|\n| 1 | 3 |\n| 2 | 6 |\n| 3 | 10 |\n| 4 | 13 |\n| 5 | 15 |\n\nHeaders with quantity and units; data in ascending order.',
    keyConcepts: ['Data organisation'],
    keywords: ['mass baking soda / g', 'balloon diameter / cm', 'two columns headers units'],
    feedbackHit: 'Correct table with headers (quantity + unit) and ordered data.',
    feedbackMiss: 'Needs: headers with quantity AND unit; 5 rows in order; data only in body.',
  },
  q4_f: {
    marks: 5,
    exemplar: 'Graph: x = Mass of baking soda / g; y = Balloon diameter / cm (even scale from 0); all 5 points plotted correctly; line of best fit; axes labelled with quantity and unit.',
    keyConcepts: ['Graph plotting', 'Line of best fit'],
    keywords: ['x axis mass', 'y axis diameter', 'even scale', '5 points', 'line of best fit'],
    feedbackHit: 'Correct — suitable scales, data plotted, line of best fit, axes labelled.',
    feedbackMiss: 'Check: y-axis from 0 with even increments; all 5 points plotted; line of best fit; axes labelled with quantity + unit.',
  },

  // ── Q5: Portable fire suppressants ─────────────────────────────────────────
  q5_a: {
    marks: 3,
    exemplar: 'The CO₂ cartridge is the heaviest (0.52 kg) AND covers the smallest area (4 m²). The powder ball is the lightest (0.21 kg) but covers the largest area (35 m²). Therefore the research statement is NOT valid.',
    keyConcepts: ['Evaluating research statements', 'Data interpretation'],
    keywords: ['CO₂ 0.52kg 4m²', 'powder ball 0.21kg 35m²', 'lightest largest area', 'not valid'],
    feedbackHit: 'Correct — used data showing lightest suppressant has largest area to invalidate the statement.',
    feedbackMiss: 'Must use DATA: CO₂ = 0.52 kg → 4 m² (heaviest, smallest area); powder ball = 0.21 kg → 35 m² (lightest, largest area) → statement NOT valid.',
  },
  q5_b: {
    marks: 3,
    exemplar: 'Powder ball. Justification (any two): Can be dropped/thrown from a distance into the fire; covers the largest area (35 m²); works at any temperature; lightest (0.21 kg) — easy to carry and deploy quickly.',
    keyConcepts: ['Data application', 'Justifying choices'],
    keywords: ['powder ball forest fire', 'drop/throw from distance', '35 m²', 'any temperature', 'lightweight'],
    feedbackHit: 'Correct — chose powder ball and justified with data-linked reasons.',
    feedbackMiss: 'Powder ball: (1) can be thrown into fire without operator being close; (2) covers 35 m² at any temperature; (3) lightest. Must justify with table data.',
  },
  q5_c: { type: 'mcq', correct: 3 },         // Exothermic

  // ── Q6: Sleep / organic chemistry (V2) ─────────────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Molecule A: Carboxylic acid (COOH group). Molecule B: Alcohol (OH group).',
    keyConcepts: ['Functional groups', 'Organic chemistry'],
    keywords: ['COOH carboxylic acid molecule A', 'OH alcohol molecule B', 'functional group identification'],
    feedbackHit: 'Correct — molecule A COOH = carboxylic acid; molecule B OH = alcohol.',
    feedbackMiss: 'Carboxylic acid = –COOH (carbon double-bonded to O and single-bonded to OH). Alcohol = –OH (hydroxyl group on carbon chain).',
    blankAnswers: ['Carboxylic acid', 'Alcohol'],
  },
  q6_b: {
    marks: 13,
    exemplar: 'Crit D evaluation rubric: importance of sleep for airline crew safety; spray quality comparison with data; economic considerations; justified final choice.',
    keyConcepts: ['Criterion D', 'Societal impact', 'Economic evaluation'],
    keywords: ['airline crew sleep safety', 'spray comparison', 'cost per sleep', 'justified choice'],
    feedbackHit: 'Strong Crit D — importance of sleep, compared quality + economics, justified final choice.',
    feedbackMiss: '(1) Why sleep matters for pilot/crew safety; (2) compare sleep quality with data; (3) economic comparison; (4) justified choice.',
  },

  // ── Q7: Eucalyptus vs rose oil ───────────────────────────────────────────────
  q7_: {
    marks: 9,
    exemplar: 'Crit D discussion:\n\nSocial impact: Rose oil supports traditional small Bulgarian family farms and preserves centuries-old cultural practices. Eucalyptus is produced by large industrial corporations with limited benefit to local communities.\n\nEnvironmental impact: Eucalyptus trees are fast-growing, require low water, and tolerate poor soil — highly sustainable. Rosa damascena grows slowly, requires specific conditions and high water use, and there is no endangered species concern, but yield per hectare is low (2800 vs 8500 kg/ha).\n\nFinal choice: Eucalyptus oil is the better industrial choice — significantly cheaper ($18.50 vs $145.00 per 15 ml), higher yield (8500 kg/ha), lower water requirement, and more environmentally sustainable at scale. Social concerns about large corporations should be addressed through fair-trade partnerships.',
    keyConcepts: ['Criterion D', 'Social impact', 'Environmental impact', 'Sustainability'],
    keywords: ['rose oil family farms Bulgaria', 'eucalyptus industrial large scale', 'water use yield comparison', 'cost $18.50 vs $145', 'justified choice'],
    feedbackHit: 'Strong Crit D — social impact (both), environmental impact (both), justified choice with data.',
    feedbackMiss: 'Need: (1) social impact for BOTH extracts; (2) environmental impact for BOTH; (3) justified final choice with data.',
  },
}
