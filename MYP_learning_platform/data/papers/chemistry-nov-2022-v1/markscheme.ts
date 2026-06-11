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
  // ── Q1: Silver / metals ────────────────────────────────────────────────────
  q1_a: { type: 'mcq', correct: 3 },         // Transition metals
  q1_b: {
    marks: 1,
    exemplar: 'Period 5',
    keyConcepts: ['Periodic table', 'Periods'],
    keywords: ['silver period 5', 'row 5', 'transition metal row'],
    feedbackHit: 'Correct — silver is in Period 5 of the periodic table.',
    feedbackMiss: 'Silver (Ag, atomic number 47) is in Period 5 — count the electron shells: 2, 8, 18, 18, 1.',
    blankAnswers: ['5'],
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
    exemplar: 'Neutrons = 107 − 47 = 60. Electrons = 47 (equal to proton number).',
    keyConcepts: ['Atomic structure', 'Isotopes'],
    keywords: ['Ag-107 neutrons 60', 'electrons 47', 'mass number minus atomic number'],
    feedbackHit: 'Correct — neutrons = 107 − 47 = 60; electrons = atomic number = 47.',
    feedbackMiss: 'Neutrons = mass number − atomic number = 107 − 47 = 60. Electrons always equal the atomic number in a neutral atom = 47.',
  },
  q1_e: { type: 'mcq', correct: 1 },         // Alloy
  q1_f: {
    marks: 2,
    exemplar: 'Sterling silver is harder than pure silver, making jewellery more durable and scratch-resistant. It also has greater resistance to tarnishing, so jewellery keeps its shine longer.',
    keyConcepts: ['Alloys', 'Properties of materials'],
    keywords: ['harder than pure silver', 'corrosion resistant tarnish', 'durable jewellery', 'malleable'],
    feedbackHit: 'Correct — links a property from the table (hardness / corrosion resistance) to why it suits jewellery-making.',
    feedbackMiss: 'Use data from the table: sterling silver is harder than pure silver (won\'t scratch easily) or more resistant to tarnishing (keeps its shine).',
  },

  // ── Q2: Magnesium / MgCl₂ bonding ──────────────────────────────────────────
  q2_a: { type: 'mcq', correct: 3 },         // Oxidation
  q2_b: { type: 'mcq', correct: 0 },         // Option A: :Cl–Cl: (single bond with lone pairs)
  q2_c: {
    marks: 3,
    exemplar: '2 Mg + 1 O₂ → 2 MgO',
    keyConcepts: ['Balancing equations', 'Oxidation of magnesium'],
    keywords: ['2Mg', '1O₂', '2MgO', 'balanced equation', 'coefficients 2 1 2'],
    feedbackHit: 'Correct — 2 Mg : 1 O₂ : 2 MgO balances magnesium and oxygen atoms.',
    feedbackMiss: 'MgO contains 1 Mg and 1 O. You need 2 MgO to use 2 O atoms from 1 O₂ molecule, and 2 Mg on the left. Answer: 2Mg + 1O₂ → 2MgO.',
    blankAnswers: ['2', '1', '2'],
  },
  q2_d: {
    marks: 4,
    exemplar: 'n(Mg) = m/Mr = 0.486/24.3 = 0.0200 mol. From balanced equation, ratio Mg:O₂ = 2:1, so n(O₂) = 0.0200 × (1/2) = 0.0100 mol.',
    keyConcepts: ['Moles calculation', 'Stoichiometry'],
    keywords: ['n = m/Mr', '0.486/24.3', '2:1 ratio', '0.0100 mol O₂'],
    feedbackHit: 'Correct — moles of Mg divided by 2 gives moles of O₂.',
    feedbackMiss: 'Step 1: n(Mg) = 0.486/24.3 = 0.0200 mol. Step 2: Use 2Mg:1O₂ ratio → n(O₂) = 0.0200 × 1/2 = 0.0100 mol.',
  },
  q2_e: {
    marks: 2,
    exemplar: 'Gas / slightly soluble / not conductive → Chlorine. Solid / insoluble / conductive → Magnesium. Solid / soluble / not conductive → Magnesium chloride.',
    keyConcepts: ['Properties of substances', 'States of matter'],
    keywords: ['chlorine gas slightly soluble', 'magnesium solid conductive', 'MgCl₂ ionic solid soluble'],
    feedbackHit: 'Correct — matched all three substances to their physical properties.',
    feedbackMiss: 'Chlorine = gas, slightly soluble, non-conductor (covalent). Mg = solid, insoluble, conducts (metallic). MgCl₂ = ionic: solid, dissolves, but SOLID does not conduct (ions not free to move).',
    blankAnswers: ['Chlorine', 'Magnesium', 'Magnesium chloride'],
  },
  q2_f: {
    marks: 1,
    exemplar: '2, 5   (or 1s² 2s² 2p³)',
    keyConcepts: ['Electron configuration', 'Nitrogen'],
    keywords: ['2.5', 'nitrogen 7 electrons', 'two shells', 'electron arrangement N'],
    feedbackHit: 'Correct — nitrogen has 7 electrons arranged 2, 5.',
    feedbackMiss: 'Nitrogen (Z=7) has 7 electrons. Shell 1 = 2, shell 2 = 5 → 2.5.',
    blankAnswers: ['2.5'],
  },
  q2_g: {
    marks: 4,
    exemplar: 'Magnesium loses 2 electrons to form Mg²⁺ ions. Chlorine gains 1 electron to form Cl⁻ ions. Two Cl⁻ ions are needed per Mg²⁺. An ionic bond is formed by the electrostatic attraction between the oppositely charged Mg²⁺ and Cl⁻ ions.',
    keyConcepts: ['Ionic bonding', 'Electron transfer'],
    keywords: ['Mg loses 2 electrons', 'Mg²⁺', 'Cl gains electron', 'Cl⁻', 'ionic bond electrostatic attraction'],
    feedbackHit: 'Correct — described electron transfer from Mg to Cl, forming ions and ionic bond.',
    feedbackMiss: 'Mg LOSES 2 electrons → Mg²⁺; each Cl GAINS 1 electron → Cl⁻; 2 Cl⁻ per Mg²⁺; the bond is electrostatic attraction between oppositely charged ions.',
  },
  q2_h: { type: 'mcq', correct: 3 },         // Irritant (options: Corrosive, Explosive, Flammable, Irritant)

  // ── Q3: Acid rain / marble erosion (V1 data) ───────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'Average = (2.87 + 3.01 + 2.94) ÷ 3 = 8.82 ÷ 3 = 2.94 g',
    keyConcepts: ['Data processing', 'Mean calculation'],
    keywords: ['average', '2.94 g', '(2.87+3.01+2.94)/3', 'mean vinegar'],
    feedbackHit: 'Correct — evidence of calculation and correctly rounded to 2.94.',
    feedbackMiss: 'Add the three trials: 2.87 + 3.01 + 2.94 = 8.82 g. Divide by 3: 8.82/3 = 2.94 g.',
    blankAnswers: ['2.94'],
  },
  q3_b: {
    marks: 3,
    exemplar: 'The pH probe gives numerical/quantitative data to 3 significant figures, making it precise and reliable. Universal indicator paper gives a range of colours (qualitative data), and the measured pH depends on interpretation of a colour scale. Therefore the pH probe produces more valid data.',
    keyConcepts: ['Validity', 'Quantitative vs qualitative data'],
    keywords: ['pH probe quantitative numerical', 'indicator qualitative colour', 'interpretation error', 'pH probe more valid'],
    feedbackHit: 'Correct — contrasted quantitative pH probe with qualitative indicator and concluded pH probe is more valid.',
    feedbackMiss: 'Key points: (1) pH probe = numerical/quantitative to 3 sig figs; (2) indicator = colour range (qualitative) / subject to interpretation; (3) pH probe is more valid.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'Lemon juice had the largest decrease in acidity because it showed the largest average increase in pH (3.52), compared to cola (2.73) and vinegar (2.61).',
    keyConcepts: ['pH scale', 'Acidity'],
    keywords: ['lemon juice', 'largest pH increase 3.52', 'least acidic after week'],
    feedbackHit: 'Correct — identified lemon juice and justified with largest average pH increase.',
    feedbackMiss: 'Decrease in acidity = increase in pH. Lemon juice average ΔpH = 3.52 (largest) → it had the greatest decrease in acidity.',
  },
  q3_d: {
    marks: 17,
    exemplar: 'Crit B design rubric (same construct as source): IV = marble chip size; DV = change in mass (or CO₂ volume or pH change); CVs = acid concentration (0.1 mol/dm³), volume, temperature; equipment listed; ≥5 chip sizes, ≥3 trials; clear replicable method; acid safety noted.',
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Method', 'Safety'],
    keywords: ['IV chip size', 'DV mass change', 'CVs stated', 'equipment', '5 sizes 3 trials', 'method steps', 'safety H₂SO₄ goggles'],
    feedbackHit: 'Strong Crit B design with IV/DV/CVs, equipment, sufficient data, clear method, safety.',
    feedbackMiss: 'Check: IV (chip size), DV (mass change/pH/CO₂), 2+ CVs, equipment list, ≥5 sizes + ≥3 trials, step-by-step method, acid safety.',
  },
  q3_e: {
    marks: 2,
    exemplar: 'Research question: "How does the thickness of a protective paint layer affect the change in mass of marble chips when exposed to acid?" IV = thickness of paint layer; DV = change in mass (or volume of gas / pH change).',
    keyConcepts: ['Research question', 'Independent variable', 'Dependent variable'],
    keywords: ['thickness of paint layer IV', 'change in mass DV', 'research question format'],
    feedbackHit: 'Correct — question includes thickness of paint layer as IV and a measurable DV.',
    feedbackMiss: 'The IV must be "thickness of paint/coating layer". Choose a measurable DV: change in mass, volume of gas produced, or pH change.',
  },

  // ── Q4: Balloon CO₂ investigation ──────────────────────────────────────────
  q4_a: {
    marks: 3,
    exemplar: 'IV: Number of teaspoons (or mass) of baking soda. DV: Diameter of balloon. CV: Volume of citric acid (50 cm³) [or type/size of balloon; type of bottle].',
    keyConcepts: ['Variables', 'Criterion B'],
    keywords: ['IV baking soda teaspoons', 'DV balloon diameter', 'CV volume citric acid'],
    feedbackHit: 'Correct — IV (baking soda amount), DV (balloon diameter), valid CV identified.',
    feedbackMiss: 'IV = what you change = teaspoons of baking soda. DV = what you measure = diameter of balloon. CV = what you keep constant = volume of citric acid, type of balloon, etc.',
    blankAnswers: ['Number of teaspoons of baking soda', 'Diameter of balloon', 'Volume of citric acid'],
  },
  q4_b: {
    marks: 3,
    exemplar: 'If the mass of baking soda increases, then the diameter of the balloon will increase, because more carbon dioxide is produced.',
    keyConcepts: ['Hypothesis', 'If–Then–Because'],
    keywords: ['if baking soda increases', 'then balloon diameter increases', 'because more CO₂'],
    feedbackHit: 'Correct hypothesis with If/then/because logic.',
    feedbackMiss: 'IF (more baking soda) → THEN (larger balloon) → BECAUSE (more CO₂ produced to inflate balloon).',
  },
  q4_c: {
    marks: 2,
    exemplar: 'Limitation 1: The mass of baking soda was not measured (only counted in spoons) — spoon sizes vary. Limitation 2: Only one trial per amount, so an average cannot be calculated to reduce random error.',
    keyConcepts: ['Limitations', 'Evaluating methods'],
    keywords: ['spoon not weighed', 'spoon size varies', 'one trial no average', 'balloon diameter hard to measure'],
    feedbackHit: 'Two valid limitations identified.',
    feedbackMiss: 'Possible limitations: (1) baking soda measured in spoons (not grams — variable); (2) only one trial (no average possible); (3) balloon diameter hard to measure accurately.',
  },
  q4_d: {
    marks: 1,
    exemplar: 'Different IV: concentration of the citric acid / type of acid / volume of acid / temperature of the solution.',
    keyConcepts: ['Extending investigations'],
    keywords: ['concentration citric acid', 'type of acid', 'volume acid', 'temperature'],
    feedbackHit: 'Correct — valid different IV suggested.',
    feedbackMiss: 'Any variable that affects CO₂ production: concentration of acid, type of acid, volume of citric acid solution, or temperature.',
  },
  q4_e: {
    marks: 3,
    exemplar: 'Table with two columns:\n\n| Mass of baking soda / g | Balloon diameter / cm |\n|---|---|\n| 1 | 4 |\n| 2 | 7 |\n| 3 | 11 |\n| 4 | 14 |\n| 5 | 16 |\n\nHeaders include quantity AND units. Data in ascending order.',
    keyConcepts: ['Data organisation', 'Tables'],
    keywords: ['mass baking soda / g', 'balloon diameter / cm', 'headers units', 'data in order'],
    feedbackHit: 'Correct — two-column table with proper headers (quantity + unit) and data in order.',
    feedbackMiss: 'Table must have: (1) headers with quantity AND unit; (2) data in ascending order of baking soda mass; (3) data only in body rows.',
  },
  q4_f: {
    marks: 5,
    exemplar: 'Graph: x-axis = Mass of baking soda / g (0–5); y-axis = Balloon diameter / cm (0–16 or more, even scale); all 5 data points plotted; line of best fit drawn; axes labelled with quantity and unit.',
    keyConcepts: ['Graph plotting', 'Line of best fit'],
    keywords: ['x axis mass baking soda', 'y axis balloon diameter', 'even scale zero', 'all 5 points', 'line of best fit'],
    feedbackHit: 'Correct — scales suitable, all data plotted, line of best fit, axes labelled.',
    feedbackMiss: 'Check: (1) y-axis starts at 0 with even increments; (2) all 5 points plotted correctly; (3) line of best fit with equal points above/below; (4) axes labelled with quantity and unit.',
  },

  // ── Q5: Smoke detectors ─────────────────────────────────────────────────────
  q5_a: {
    marks: 3,
    exemplar: 'The optical detector is the heaviest (185 g) AND can detect an area of 45 m², which is NOT the largest. The ionisation detector is lightest (120 g) but has the largest detection area (60 m²). Therefore the research statement is NOT valid.',
    keyConcepts: ['Evaluating research statements', 'Data interpretation'],
    keywords: ['optical 185g 45m²', 'ionisation 120g 60m²', 'lightest has largest area', 'not valid'],
    feedbackHit: 'Correct — used data showing lightest detector has largest area to invalidate the statement.',
    feedbackMiss: 'Must use DATA: ionisation = 120 g → 60 m² (lightest, largest area); optical = 185 g → 45 m². Heaviest does NOT have largest area → statement NOT valid.',
  },
  q5_b: {
    marks: 3,
    exemplar: 'Heat detector. Justification (any two): Best for high-heat areas like kitchens; very low false alarm risk (cooking fumes/steam won\'t trigger it); 5-year battery life; covers 25 m² which is sufficient for a kitchen.',
    keyConcepts: ['Data application', 'Justifying choices'],
    keywords: ['heat detector', 'high heat area kitchen', 'very low false alarm', '5 year battery', '1000°C'],
    feedbackHit: 'Correct — chose heat detector and justified with two data-linked reasons.',
    feedbackMiss: 'Heat detector is best for kitchens: (1) very low false alarm risk (cooking steam won\'t trigger it); (2) designed for high-heat environments; (3) 5-year battery. Must reference data.',
  },
  q5_c: { type: 'mcq', correct: 3 },         // Exothermic

  // ── Q6: Sleep / organic chemistry (V1) ─────────────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Molecule A: Ester (C–O–C linkage with C=O). Molecule B: Carboxylic acid (COOH group).',
    keyConcepts: ['Functional groups', 'Organic chemistry'],
    keywords: ['ester C-O-C molecule A', 'carboxylic acid COOH molecule B', 'functional group identification'],
    feedbackHit: 'Correct — molecule A ester functional group; molecule B carboxylic acid.',
    feedbackMiss: 'Ester group = C–O–C linkage with C=O (looks like R–CO–O–R). Carboxylic acid = –COOH (carbon double-bonded to O and single-bonded to OH).',
    blankAnswers: ['Ester', 'Carboxylic acid'],
  },
  q6_b: {
    marks: 13,
    exemplar: 'Crit D evaluation rubric (same structure as source paper): importance of sleep for truck driver safety; comparison of spray sleep quality; economic considerations of cost per sleep; justified final choice.',
    keyConcepts: ['Criterion D', 'Societal impact', 'Economic evaluation'],
    keywords: ['truck driver safety sleep', 'spray comparison', 'cost per sleep', 'justified choice'],
    feedbackHit: 'Strong Crit D — sleep importance for safety, compared quality + economics for multiple sprays, justified final choice.',
    feedbackMiss: '(1) Why sleep matters for truck driver safety; (2) compare sleep quality across 2+ sprays with data; (3) compare economic cost; (4) justified final choice.',
  },

  // ── Q7: Peppermint vs chamomile ─────────────────────────────────────────────
  q7_: {
    marks: 9,
    exemplar: 'Crit D discussion (rubric):\n\nSocial impact: Peppermint supports small family farms and preserves traditional livelihoods; lower industrial scale. Chamomile provides agricultural employment at scale but benefits primarily large companies.\n\nEnvironmental impact: Peppermint requires moderate water and tolerates varied climates; replantable. Chamomile requires more water and pesticide use, raising concerns about soil health.\n\nFinal choice: Chamomile is the better choice for the industry — significantly cheaper ($28.50 vs $75.00 per 15 ml), higher yield per hectare (4200 vs 1500 kg), and more scalable. Social concerns about peppermint not supporting small farms at scale are outweighed by the economic viability.',
    keyConcepts: ['Criterion D', 'Social impact', 'Environmental impact', 'Sustainability'],
    keywords: ['peppermint family farms', 'chamomile industrial scale', 'water use pesticides', 'cost comparison yield', 'justified choice'],
    feedbackHit: 'Strong Crit D — social impact (both), environmental impact (both), justified final choice with data.',
    feedbackMiss: 'Need: (1) social impact for BOTH extracts; (2) environmental impact for BOTH; (3) final choice with data justification.',
  },
}
