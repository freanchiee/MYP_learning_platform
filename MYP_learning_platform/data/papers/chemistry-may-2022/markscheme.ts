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
  // ── Q1 — Ancient mirrors ──────────────────────────────────────────────────
  q1_a: { type: 'mcq', correct: 3 } as MCQEntry,

  q1_b: {
    marks: 2,
    exemplar: 'Aluminium oxide (for Al₂O₃); Fe₂O₃ (for Iron oxide)',
    keyConcepts: ['Ionic compounds', 'Naming conventions'],
    keywords: ['aluminium oxide', 'iron oxide', 'Fe₂O₃', 'Al₂O₃'],
    feedbackHit: 'Both name and formula correct — 2 marks.',
    feedbackMiss: 'Check the name for Al₂O₃ (aluminium oxide) and the formula for iron oxide (Fe₂O₃).',
    blankAnswers: ['Aluminium oxide', 'Fe₂O₃'],
  },

  q1_c: {
    marks: 1,
    exemplar: 'Chlorine (Cl) — electron configuration 2,8,7 gives 17 protons, Group 7, Period 3.',
    keyConcepts: ['Electron configuration', 'Periodic table'],
    keywords: ['chlorine', 'Cl', '2,8,7', 'Group 7'],
    feedbackHit: 'Correct — Chlorine identified.',
    feedbackMiss: 'Count electrons: 2+8+7=17 protons → element 17 = Chlorine.',
  },

  q1_d: {
    marks: 2,
    exemplar: 'Proton number of Cl = 17; mass number = 17 + 20 = 37. [1 mark for identifying proton number, 1 for correct mass number]',
    keyConcepts: ['Atomic structure', 'Isotopes', 'Mass number'],
    keywords: ['proton number', 'neutrons', 'mass number', '37', 'isotope'],
    feedbackHit: 'Mass number 37 correct with working.',
    feedbackMiss: 'Mass number = protons + neutrons. Chlorine has 17 protons; 17+20=37.',
  },

  q1_e: {
    marks: 3,
    exemplar: '5 mol CaSO₄·2H₂O contains 5×2=10 mol H₂O. M(H₂O)=18 g/mol. Mass=10×18=180 g.',
    keyConcepts: ['Moles', 'Molar mass', 'Hydrated salts'],
    keywords: ['moles', 'water', '10 mol', '180 g', 'CaSO₄·2H₂O'],
    feedbackHit: '180 g with correct mole calculation — full marks.',
    feedbackMiss: 'Step 1: 5 mol salt × 2 mol H₂O/mol salt = 10 mol H₂O. Step 2: 10 × 18 g/mol = 180 g.',
  },

  // ── Q2 — Stained glass ────────────────────────────────────────────────────
  q2_a: {
    marks: 1,
    exemplar: 'Any one of: Copper (Cu), Tungsten (W), Gold (Au), Iron (Fe), Chromium (Cr) [accept any transition metal with name and symbol].',
    keyConcepts: ['Transition metals', 'Periodic table'],
    keywords: ['transition metal', 'copper', 'Cu', 'tungsten', 'W'],
    feedbackHit: 'Correct transition metal name and symbol given.',
    feedbackMiss: 'Transition metals are found in the d-block (groups 3–12). Give both name and symbol.',
  },

  q2_b: {
    marks: 1,
    exemplar: 'Calcium (Ca) — Group 2, Period 4.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['calcium', 'Ca', 'Group 2', 'Period 4'],
    feedbackHit: 'Calcium correctly identified.',
    feedbackMiss: 'Group 2, Period 4 → fourth row, second column of main groups = Calcium.',
  },

  q2_c: {
    marks: 4,
    exemplar: 'Mass Na₂O = 35.0−26.3−3.4 = 5.3 g [1]; M(Na₂O) = 2×23+16 = 62 g/mol [1]; n = 5.3/62 [1] = 0.085 mol (2 s.f.) [1].',
    keyConcepts: ['Moles', 'Molar mass calculation', 'Percentage composition'],
    keywords: ['moles', 'Na₂O', '0.085 mol', 'molar mass', '62 g/mol'],
    feedbackHit: '0.085 mol (or 8.5×10⁻² mol) — full marks.',
    feedbackMiss: 'Subtract SiO₂ and CaO masses from total. Calculate M(Na₂O)=62. Divide mass by molar mass.',
  },

  q2_d: { type: 'mcq', correct: 1 } as MCQEntry,

  q2_e: { type: 'mcq', correct: 3 } as MCQEntry,

  q2_f: {
    marks: 2,
    exemplar: 'Temperature after = 39°C [1]; temperature change = 39−25 = +14°C [1].',
    keyConcepts: ['Temperature measurement', 'Exothermic reactions'],
    keywords: ['39°C', '+14°C', 'temperature change', 'thermometer'],
    feedbackHit: 'Both readings correct — 2 marks.',
    feedbackMiss: 'Read the thermometer scale carefully. Change = final − initial = 39−25 = 14°C.',
  },

  q2_g: {
    marks: 1,
    exemplar: 'Exothermic (temperature increased when HF dissolved).',
    keyConcepts: ['Exothermic reactions', 'Energy changes'],
    keywords: ['exothermic', 'temperature increase', 'heat released'],
    feedbackHit: 'Exothermic correctly identified.',
    feedbackMiss: 'Temperature went up → energy released to surroundings = exothermic.',
  },

  q2_h: {
    marks: 4,
    exemplar: '2 HF + 1 Ca(OH)₂ → 1 CaF₂ + 2 H₂O. Blanks in order: 2, 1, CaF₂, 2.',
    keyConcepts: ['Balancing equations', 'Acid-base reactions', 'Neutralisation'],
    keywords: ['balanced equation', '2HF', 'Ca(OH)₂', 'CaF₂', '2H₂O'],
    feedbackHit: 'Fully balanced with correct product — 4 marks.',
    feedbackMiss: 'Product of HF + Ca(OH)₂ is calcium fluoride (CaF₂) + water. Balance F and H atoms.',
    blankAnswers: ['2', '1', 'CaF₂', '2'],
  },

  // ── Q3 — H₂O₂ contact lens cleaning ─────────────────────────────────────
  q3_a: { type: 'mcq', correct: 2 } as MCQEntry,

  q3_b: { type: 'mcq', correct: 0 } as MCQEntry,

  q3_c: {
    marks: 1,
    exemplar: 'Approximately 4–6% bacteria remaining after 4 hours using one-step process.',
    keyConcepts: ['Data reading from graphs', 'Bacterial removal'],
    keywords: ['graph', '4 hours', 'one-step', '4%', '6%', 'bacteria'],
    feedbackHit: 'Value between 4% and 6% — accepted.',
    feedbackMiss: 'Read the graph at x=4h on the one-step curve; y-value ≈ 4–6%.',
  },

  q3_d: {
    marks: 1,
    exemplar: '6 hours (or more) — two-step curve reaches 5% remaining (95% removed) at ≥ 6 h.',
    keyConcepts: ['Graph reading', 'Contact lens hygiene'],
    keywords: ['6 hours', 'two-step', '95%', 'removal'],
    feedbackHit: '6 hours (or greater) — 1 mark.',
    feedbackMiss: 'Find 5% remaining on two-step curve → x-axis = 6h.',
  },

  q3_e: {
    marks: 2,
    exemplar: 'Recommend two-step process [1]; justification: removes more bacteria over same time/removes bacteria to a lower level than one-step [1].',
    keyConcepts: ['Scientific justification', 'Comparisons from data'],
    keywords: ['two-step', 'recommend', 'more bacteria removed', 'lower remaining'],
    feedbackHit: 'Process named with graph-based justification — 2 marks.',
    feedbackMiss: 'State which process AND explain why using specific data from graph.',
  },

  // ── Q4 — Catalyst investigation ──────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Collect gas in inverted test tube over water [1]; hold a glowing splint at the mouth — if it relights, O₂ is confirmed [1].',
    keyConcepts: ['Testing for gases', 'Oxygen identification'],
    keywords: ['glowing splint', 'relights', 'oxygen', 'test tube', 'gas collection'],
    feedbackHit: 'Collection method and glowing splint test both described — 2 marks.',
    feedbackMiss: 'Two steps: (1) collect gas; (2) test with glowing splint → relights = O₂.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'If the catalyst is in solution, the rate of decomposition will be faster [1] because dissolved ions/particles move freely [1] and collide with H₂O₂ more frequently [1].',
    keyConcepts: ['Collision theory', 'Catalyst state', 'Hypothesis formulation'],
    keywords: ['hypothesis', 'solution catalyst', 'collision frequency', 'rate', 'if…then'],
    feedbackHit: 'Hypothesis with if–then structure and collision theory explanation — 3 marks.',
    feedbackMiss: 'State prediction (solution faster) then link to collision theory (more collisions per unit time).',
  },

  q4_c: {
    marks: 4,
    exemplar: 'IV: type of catalyst [1]; DV: time the flame burns (or volume O₂ produced) [1]; CV1: mass/amount of catalyst [1]; CV2: volume/concentration of H₂O₂ [1].',
    keyConcepts: ['Variables', 'Independent variable', 'Dependent variable', 'Control variables'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'catalyst type', 'flame time'],
    feedbackHit: 'All four variables correctly identified — 4 marks.',
    feedbackMiss: 'IV = what you change (catalyst type); DV = what you measure (flame time); CVs = what you keep the same.',
  },

  q4_d: {
    marks: 3,
    exemplar: 'Hypothesis is not valid [1]; longer burning time does NOT indicate faster rate of O₂ production [1]; the same total O₂ is produced regardless of catalyst — faster catalyst just produces it more quickly [1].',
    keyConcepts: ['Validity', 'Rate vs total amount', 'Critical thinking'],
    keywords: ['invalid', 'rate', 'flame duration', 'total oxygen', 'not faster'],
    feedbackHit: 'Stated invalid with two-part reasoning — 3 marks.',
    feedbackMiss: 'Rate = speed of O₂ production. A longer flame = more O₂ produced total, not necessarily faster rate.',
  },

  q4_e: {
    marks: 3,
    exemplar: 'Average = (42+44+46)/3 = 132/3 = 44 cm³ [1]; rate = 44 cm³ / 30 s [1] = 1.47 cm³ s⁻¹ [1].',
    keyConcepts: ['Average', 'Rate calculation', 'Units'],
    keywords: ['average', '44 cm³', 'rate', '1.47 cm³ s⁻¹', 'divide by 30'],
    feedbackHit: 'Average 44 cm³ and rate 1.47 cm³ s⁻¹ — 3 marks.',
    feedbackMiss: 'Average=(42+44+46)/3=44. Rate=volume/time=44/30=1.47 cm³ s⁻¹.',
  },

  q4_f: {
    marks: 3,
    exemplar: 'Error 1: stopper/bung not properly inserted → extra gas enters from air [1+justification]. Error 2: time measured was longer than 30 s / tube not sealed properly [1+justification].',
    keyConcepts: ['Experimental error', 'Anomalous results', 'Equipment setup'],
    keywords: ['stopper', 'sealed', 'extra gas', 'timing error', 'inconsistent'],
    feedbackHit: 'Two errors with justifications — 3 marks.',
    feedbackMiss: 'Look at the diagram: is the apparatus sealed? Was timing correct? Each error needs a reason why it gives more gas.',
  },

  // ── Q5 — Design: catalyst comparison (Crit B) ────────────────────────────
  q5_: {
    marks: 16,
    exemplar: `Criterion B Investigation Design — 16 marks (0–16 rubric):

**Research question/focus (0–2):**
2 – Clear RQ linking type of catalyst to rate of H₂O₂ decomposition.
1 – RQ present but vague.
0 – No RQ.

**Variables (0–2):**
2 – IV (type of catalyst), DV (volume O₂ / time), ≥2 CVs (mass catalyst, vol H₂O₂, temp) all present.
1 – IV/DV or fewer CVs.
0 – Missing.

**Method — sufficient data (0–4):**
4 – ≥3 trials per catalyst, all 5 tested, time stated, data table template.
3 – Minor gap.
2 – Only 2 trials or 3 catalysts.
1 – General method only.
0 – No method.

**Equipment list (0–2):**
2 – All named: eudiometer, stopwatch, balance, H₂O₂ solution, 5 catalysts, beakers.
1 – Partial.
0 – Not listed.

**Safety (0–2):**
2 – H₂O₂ irritant/oxidiser (gloves/goggles); FeCl₃/CuCl₂/NiCl₂ irritants.
1 – One hazard.
0 – Not mentioned.

**Reliability/reproducibility (0–2):**
2 – 3 repeats noted, anomalies addressed, average planned.
1 – Repeats mentioned briefly.
0 – Not addressed.

**Scientific reasoning / justification (0–2):**
2 – Explains why variables chosen and why method valid.
1 – Some reasoning.
0 – None.`,
    keyConcepts: ['Criterion B', 'Experimental design', 'Variables', 'Safety', 'Catalyst'],
    keywords: ['research question', 'variables', 'method', 'equipment', 'safety', 'reliability'],
    feedbackHit: 'Comprehensive design with RQ, variables, full method, equipment, safety, reliability.',
    feedbackMiss: 'Include: clear RQ, IV/DV/CVs, step-by-step method with repeats, full equipment list, safety hazards.',
  },

  // ── Q6 — Hair bleaching / spectrophotometer ───────────────────────────────
  q6_a: {
    marks: 3,
    exemplar: 'As time increases, H₂O₂ reacts with hair pigment [1]; more pigment is removed from the hair follicle [1]; the hair appears lighter in colour as more pigment is removed [1].',
    keyConcepts: ['Data interpretation', 'Chemical reactions', 'Hair pigment'],
    keywords: ['time increases', 'H₂O₂ reacts', 'pigment removed', 'lighter'],
    feedbackHit: 'Three-part answer linking time → reaction → lighter colour — 3 marks.',
    feedbackMiss: 'Describe the trend, state the chemical cause, then explain the visual effect.',
  },

  q6_b: {
    marks: 5,
    exemplar: 'Graph: x-axis = H₂O₂ concentration / % (0–10), y-axis = signal strength (0–5000) [1]; appropriate scale [1]; title e.g. "Signal strength vs H₂O₂ concentration" [1]; ≥5 data points correctly plotted ±half square [1]; smooth best-fit line/curve [1].',
    keyConcepts: ['Graph drawing', 'Scales', 'Plotting data points', 'Line of best fit'],
    keywords: ['x-axis', 'y-axis', 'scale', 'title', 'data points', 'best fit'],
    feedbackHit: 'Correctly labelled axes, title, scaled, plotted, and line of best fit — 5 marks.',
    feedbackMiss: 'Axes: H₂O₂ % (x) and signal strength (y). Label with units. Plot all 7 points. Draw best-fit line.',
  },

  q6_c: {
    marks: 1,
    exemplar: '5% H₂O₂ → signal ≈ 3500 (accept 3400–3600) by interpolation.',
    keyConcepts: ['Interpolation', 'Using graphs'],
    keywords: ['5%', '3500', 'interpolate', 'read from graph'],
    feedbackHit: 'Value ≈ 3500 ± 200 — 1 mark.',
    feedbackMiss: 'Read your graph at x = 5%. Should be between 3050 (4%) and 4050 (6%), so ≈ 3500.',
  },

  q6_d: {
    marks: 2,
    exemplar: 'Not valid [1]; the average does not show the individual values of each bottle — one or more bottles could be above 4% while others are below, and you cannot tell from the average alone [1].',
    keyConcepts: ['Validity', 'Averages', 'Individual data'],
    keywords: ['not valid', 'average', 'individual bottles', 'cannot determine', 'misleading'],
    feedbackHit: 'States not valid + explains average masks individual values — 2 marks.',
    feedbackMiss: 'An average of 2960 could include one bottle at 5% and others at 2%. The average hides individual concentration.',
  },

  // ── Q7 — Paper properties ─────────────────────────────────────────────────
  q7_a: {
    marks: 1,
    exemplar: 'Malleable / easy to fold and keep its shape / flexible / can hold a crease.',
    keyConcepts: ['Material properties'],
    keywords: ['malleable', 'flexible', 'fold', 'crease', 'thin'],
    feedbackHit: 'Appropriate physical property given — 1 mark.',
    feedbackMiss: 'Think about what property allows you to fold and shape paper for origami.',
  },

  q7_b: {
    marks: 1,
    exemplar: 'Waterproofing / to give a glossy finish / to protect from moisture/air.',
    keyConcepts: ['Material coatings', 'Waterproofing'],
    keywords: ['waterproof', 'glossy', 'protect', 'moisture'],
    feedbackHit: 'Waterproofing or protection reason given — 1 mark.',
    feedbackMiss: 'Plastic/wax repels water — used for waterproofing or aesthetics.',
  },

  q7_c: {
    marks: 1,
    exemplar: 'H₂O₂ produces oxygen (O₂) which is not toxic; chlorine (Cl₂) produces a toxic gas harmful to the environment/workers.',
    keyConcepts: ['Green chemistry', 'Hazardous by-products'],
    keywords: ['oxygen', 'non-toxic', 'chlorine', 'toxic gas', 'safer'],
    feedbackHit: 'O₂ non-toxic / Cl₂ toxic gas contrast made — 1 mark.',
    feedbackMiss: 'Compare what each chemical produces during bleaching. O₂ (safe) vs Cl₂ gas (toxic).',
  },

  q7_d: {
    marks: 6,
    exemplar: `**Advantages of papyrus:**
- Natural/organic material that has lasted thousands of years under right conditions [1]
- Low processing/chemical treatment needed [1]

**Disadvantages of papyrus:**
- Fragile/brittle; degrades in humidity; cannot withstand handling [1]
- Only grows in certain climates; not globally renewable [1]

**Advantages of acid-free paper:**
- Chemically stable; resists yellowing/degradation; can last 500+ years [1]
- Widely available and recyclable [1]

**Conclusion:** Acid-free paper is better for long-term preservation because it is chemically stable, reproducible and resistant to everyday conditions — accept papyrus if well justified with specific reasoning about durability.`,
    keyConcepts: ['Criterion D', 'Material properties', 'Preservation', 'Evaluation'],
    keywords: ['papyrus', 'acid-free paper', 'advantages', 'disadvantages', 'durability', 'conclusion'],
    feedbackHit: 'Both sides discussed with justified conclusion — up to 6 marks.',
    feedbackMiss: 'Must include advantages AND disadvantages of BOTH, then a justified conclusion.',
  },

  // ── Q8 — Paper production implications (Crit D) ──────────────────────────
  q8_: {
    marks: 10,
    exemplar: `Criterion D: Implications — tree-to-paper vs paper-to-paper (recycling)

**Environmental impact — tree-to-paper:**
- Deforestation; habitat loss; carbon released [1]
- Water/chemical use in pulp process; pollution [1]

**Environmental impact — paper-to-paper:**
- Less deforestation; lower carbon footprint [1]
- Chemicals/energy still needed for de-inking and re-processing [1]

**Economic impact — tree-to-paper:**
- Employment in forestry, pulp mills; costs of raw materials [1]
- Higher cost for sustainable certified timber [1]

**Economic impact — paper-to-paper:**
- Lower raw material cost; employment in recycling industry [1]
- Infrastructure investment needed; quality degrades each cycle [1]

**Conclusion:**
- Paper-to-paper recycling is better overall because lower environmental impact outweighs higher processing complexity [1]
- Accept tree-to-paper if justified with specific economic/cultural reasons and counter-evidence [1]`,
    keyConcepts: ['Criterion D', 'Environmental impact', 'Economic impact', 'Paper production', 'Recycling'],
    keywords: ['deforestation', 'recycling', 'economic', 'environmental', 'carbon footprint', 'conclusion'],
    feedbackHit: 'Both processes compared on environment and economy with justified conclusion — up to 10 marks.',
    feedbackMiss: 'Address: (1) environment for both, (2) economy for both, (3) justified conclusion.',
  },

  // ── Q9 — Paper vs electronic storage (Crit D) ────────────────────────────
  q9_: {
    marks: 6,
    exemplar: `Cultural advantages/disadvantages — paper vs electronic:

**Paper — cultural advantages:**
- Physical connection to historical/cultural artefacts [1]
- No technology required; accessible in power-outage situations [1]

**Paper — cultural disadvantages:**
- Degrades/burns; cannot be easily duplicated [1]

**Electronic — cultural advantages:**
- Easily shared globally; translation/search possible; preserves cultural heritage digitally [1]

**Electronic — cultural disadvantages:**
- Cultural gap for communities without technology access; risk of data loss/hacking [1]

**Conclusion:**
- Both have value; electronic better for wide sharing of cultural knowledge; paper better for authenticity [1]`,
    keyConcepts: ['Criterion D', 'Cultural implications', 'Information storage', 'Digital vs physical'],
    keywords: ['cultural', 'paper', 'electronic', 'advantages', 'disadvantages', 'preservation'],
    feedbackHit: 'Cultural angle addressed for both with justified conclusion — up to 6 marks.',
    feedbackMiss: 'Focus specifically on CULTURAL impact (not just practical). Consider access, heritage, authenticity.',
  },
}
