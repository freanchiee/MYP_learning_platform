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
  // ── Q1 — Bronze Age tools ─────────────────────────────────────────────────
  q1_a: { type: 'mcq', correct: 2 } as MCQEntry,

  q1_b: {
    marks: 2,
    exemplar: 'Magnesium oxide (for MgO); SnO₂ (for Tin oxide)',
    keyConcepts: ['Ionic compound naming', 'Chemical formulae'],
    keywords: ['magnesium oxide', 'SnO₂', 'MgO', 'tin oxide'],
    feedbackHit: 'Both name and formula correct — 2 marks.',
    feedbackMiss: 'Name for MgO = magnesium oxide. Formula for tin(IV) oxide = SnO₂ (Sn⁴⁺ and O²⁻).',
    blankAnswers: ['Magnesium oxide', 'SnO₂'],
  },

  q1_c: {
    marks: 1,
    exemplar: 'Magnesium (Mg) — electron configuration 2,8,2 gives 12 protons, Group 2, Period 3.',
    keyConcepts: ['Electron configuration', 'Element identification'],
    keywords: ['magnesium', 'Mg', '2,8,2', 'Group 2'],
    feedbackHit: 'Magnesium correctly identified.',
    feedbackMiss: '2+8+2=12 protons → element 12 = Magnesium.',
  },

  q1_d: {
    marks: 2,
    exemplar: 'Mg has 12 protons; mass number = 12 + 14 = 26. [1 mark for proton number, 1 for correct sum]',
    keyConcepts: ['Atomic structure', 'Mass number', 'Isotopes'],
    keywords: ['mass number', 'protons', 'neutrons', '26'],
    feedbackHit: 'Mass number 26 with working — 2 marks.',
    feedbackMiss: 'Mass number = protons + neutrons = 12 + 14 = 26.',
  },

  q1_e: {
    marks: 3,
    exemplar: '3 mol CuSO₄·5H₂O contains 3×5=15 mol H₂O. M(H₂O)=18 g/mol. Mass=15×18=270 g.',
    keyConcepts: ['Moles', 'Hydrated salts', 'Molar mass'],
    keywords: ['15 mol', '270 g', 'CuSO₄·5H₂O', 'water'],
    feedbackHit: '270 g with full working — 3 marks.',
    feedbackMiss: 'Moles H₂O = 3×5=15. Mass = 15×18=270 g.',
  },

  // ── Q2 — Mosaic tiles / NaOH ──────────────────────────────────────────────
  q2_a: {
    marks: 1,
    exemplar: 'Any transition metal with name and symbol, e.g. Cobalt (Co), Manganese (Mn), Chromium (Cr).',
    keyConcepts: ['Transition metals', 'Periodic table'],
    keywords: ['cobalt', 'Co', 'manganese', 'Mn', 'chromium', 'Cr'],
    feedbackHit: 'Transition metal with name and symbol — 1 mark.',
    feedbackMiss: 'Transition metals are in groups 3–12 (d-block). Give both name and symbol.',
  },

  q2_b: {
    marks: 1,
    exemplar: 'Sodium (Na) — Group 1, Period 3.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['sodium', 'Na', 'Group 1', 'Period 3'],
    feedbackHit: 'Sodium correctly identified.',
    feedbackMiss: 'Group 1, Period 3 → third row, first column = Sodium.',
  },

  q2_c: {
    marks: 4,
    exemplar: 'Mass CaO = 40.0−30.0−6.0 = 4.0 g [1]; M(CaO) = 40+16 = 56 g/mol [1]; n = 4.0/56 [1] = 0.071 mol (2 s.f.) [1].',
    keyConcepts: ['Moles', 'Molar mass', 'Composition by subtraction'],
    keywords: ['CaO', '4.0 g', '56 g/mol', '0.071 mol'],
    feedbackHit: '0.071 mol (2 s.f.) with full working — 4 marks.',
    feedbackMiss: 'Subtract SiO₂ and K₂O from total. M(CaO)=56. n=4.0/56=0.071.',
  },

  q2_d: { type: 'mcq', correct: 2 } as MCQEntry,

  q2_e: { type: 'mcq', correct: 0 } as MCQEntry,

  q2_f: {
    marks: 2,
    exemplar: 'Temperature after = 41°C [1]; temperature change = 41−25 = +16°C [1].',
    keyConcepts: ['Temperature measurement', 'Exothermic dissolution'],
    keywords: ['41°C', '+16°C', 'temperature change'],
    feedbackHit: 'Both values correct — 2 marks.',
    feedbackMiss: 'Read thermometer: 41°C. Change = 41−25 = +16°C.',
  },

  q2_g: {
    marks: 1,
    exemplar: 'Exothermic (temperature increased when NaOH dissolved).',
    keyConcepts: ['Exothermic reactions'],
    keywords: ['exothermic', 'temperature increase'],
    feedbackHit: 'Exothermic — 1 mark.',
    feedbackMiss: 'Temperature rose → energy released = exothermic.',
  },

  q2_h: {
    marks: 4,
    exemplar: '2 NaOH + 1 H₂SO₄ → 1 Na₂SO₄ + 2 H₂O. Blanks in order: 2, 1, Na₂SO₄, 2.',
    keyConcepts: ['Balancing equations', 'Neutralisation', 'Acid-base'],
    keywords: ['2NaOH', 'H₂SO₄', 'Na₂SO₄', '2H₂O'],
    feedbackHit: 'Fully balanced equation with correct salt — 4 marks.',
    feedbackMiss: 'Product is sodium sulfate (Na₂SO₄). Balance Na, S, O, H systematically.',
    blankAnswers: ['2', '1', 'Na₂SO₄', '2'],
  },

  // ── Q3 — Cl₂ bleach ───────────────────────────────────────────────────────
  q3_a: { type: 'mcq', correct: 1 } as MCQEntry,

  q3_b: { type: 'mcq', correct: 3 } as MCQEntry,

  q3_c: {
    marks: 1,
    exemplar: 'Approximately 6–9% mould spores remaining after two-step process at 3 hours.',
    keyConcepts: ['Graph reading', 'Bleaching effectiveness'],
    keywords: ['two-step', '3 hours', '6%', '9%', 'mould spores'],
    feedbackHit: 'Value between 6–9% — 1 mark.',
    feedbackMiss: 'Read two-step curve at x=3h; y ≈ 6–9%.',
  },

  q3_d: {
    marks: 1,
    exemplar: 'Approximately 5 hours — one-step reaches 10% remaining (90% removed) at ≈ 5 h.',
    keyConcepts: ['Graph reading', '90% removal'],
    keywords: ['one-step', '5 hours', '90%', 'removal'],
    feedbackHit: '5 hours (accept 4.5–5.5h) — 1 mark.',
    feedbackMiss: '90% removed = 10% remaining. Find 10% on one-step curve → read x-axis.',
  },

  q3_e: {
    marks: 2,
    exemplar: 'Recommend two-step [1]; removes more mould spores in the same time period / achieves lower residual spore count at every time point [1].',
    keyConcepts: ['Justification from data', 'Effectiveness comparison'],
    keywords: ['two-step', 'justify', 'fewer spores', 'lower %'],
    feedbackHit: 'Process named + data-based justification — 2 marks.',
    feedbackMiss: 'State recommendation AND give a specific reason using the graph data.',
  },

  // ── Q4 — KMnO₄ catalyst ───────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Collect gas in inverted test tube [1]; hold glowing splint at mouth — if relights, O₂ confirmed [1].',
    keyConcepts: ['Testing for oxygen', 'Gas collection'],
    keywords: ['glowing splint', 'relights', 'collect', 'O₂'],
    feedbackHit: 'Collection + test described — 2 marks.',
    feedbackMiss: 'Two steps: (1) collect gas; (2) glowing splint → relights = O₂.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'If catalyst is in solution → rate of decomposition will be faster [1] because ions dispersed throughout solution [1] and collide with KMnO₄ more frequently [1].',
    keyConcepts: ['Hypothesis', 'Collision theory', 'Catalyst state'],
    keywords: ['if–then', 'solution', 'collision frequency', 'rate higher'],
    feedbackHit: 'Prediction + collision theory explanation — 3 marks.',
    feedbackMiss: 'Format: IF [condition] THEN [prediction] BECAUSE [collision theory].',
  },

  q4_c: {
    marks: 4,
    exemplar: 'IV: type of catalyst [1]; DV: volume O₂ in 30 s [1]; CV1: mass of catalyst [1]; CV2: mass of KMnO₄ [1].',
    keyConcepts: ['Variables', 'IV/DV/CV'],
    keywords: ['type of catalyst', 'volume O₂', 'mass catalyst', 'mass KMnO₄'],
    feedbackHit: 'All four variables correct — 4 marks.',
    feedbackMiss: 'IV = what changes; DV = what you measure; CVs = what stays the same.',
  },

  q4_d: {
    marks: 3,
    exemplar: 'Hypothesis is not valid [1]; temperature rise does not directly measure rate of O₂ production [1]; O₂ volume per unit time is the correct measure of rate [1].',
    keyConcepts: ['Validity', 'Rate measurement'],
    keywords: ['invalid', 'temperature ≠ rate', 'O₂ volume', 'correct measure'],
    feedbackHit: 'Stated invalid + two-part reasoning — 3 marks.',
    feedbackMiss: 'Evaluate what the DV measures. Colour/temperature ≠ O₂ production rate.',
  },

  q4_e: {
    marks: 3,
    exemplar: 'Average = (38+40+42)/3 = 120/3 = 40 cm³ [1]; rate = 40/30 [1] = 1.33 cm³ s⁻¹ [1].',
    keyConcepts: ['Average', 'Rate calculation', 'Units'],
    keywords: ['40 cm³', '1.33 cm³ s⁻¹', 'divide by 30'],
    feedbackHit: 'Average 40 cm³ and rate 1.33 cm³ s⁻¹ — 3 marks.',
    feedbackMiss: 'Average=(38+40+42)/3=40. Rate=40/30=1.33 cm³ s⁻¹.',
  },

  q4_f: {
    marks: 3,
    exemplar: 'Error 1: tube not properly sealed → air or extra gas enters [1+justification]. Error 2: more catalyst used than in previous trials / timing >30s [1+justification].',
    keyConcepts: ['Experimental error', 'Anomalous result'],
    keywords: ['sealed', 'extra gas', 'extra catalyst', 'timing'],
    feedbackHit: 'Two errors with justifications — 3 marks.',
    feedbackMiss: 'Each error needs a reason why it increases the gas volume measured.',
  },

  // ── Q5 — Crit B design ────────────────────────────────────────────────────
  q5_: {
    marks: 16,
    exemplar: `Criterion B Investigation Design — 16 marks (0–16 rubric):

**Research question (0–2):**
2 – Clear RQ linking catalyst type to rate of KMnO₄ decomposition.
1 – Vague RQ present.
0 – No RQ.

**Variables (0–2):**
2 – IV (catalyst type/form), DV (vol O₂), ≥2 CVs (mass catalyst, mass KMnO₄, temp).
1 – Incomplete.
0 – Missing.

**Method — sufficient data (0–4):**
4 – ≥3 trials, all 5 catalysts, time stated (30 s), data table.
3 – Minor gap.
2 – ≤2 repeats or ≤3 catalysts.
0–1 – Very incomplete.

**Equipment list (0–2):**
2 – eudiometer, stopwatch, balance, KMnO₄, 5 catalysts, reaction vessel.
1 – Partial.
0 – Not given.

**Safety (0–2):**
2 – KMnO₄ oxidiser/staining (gloves/goggles); Cl-based catalysts irritants.
1 – One hazard.
0 – None.

**Reliability (0–2):**
2 – 3+ repeats, anomalies addressed, averages planned.
1 – Brief mention.
0 – None.

**Justification (0–2):**
2 – Explains variable choices and method validity.
1 – Some reasoning.
0 – None.`,
    keyConcepts: ['Criterion B', 'Experimental design', 'KMnO₄', 'Catalyst'],
    keywords: ['RQ', 'variables', 'method', 'equipment', 'safety', 'repeats'],
    feedbackHit: 'Comprehensive design covering RQ, variables, method, equipment, safety, reliability.',
    feedbackMiss: 'Must include: RQ, IV/DV/CVs, step-by-step method with repeats, equipment list, safety.',
  },

  // ── Q6 — Cl₂ bleach spectrophotometry ────────────────────────────────────
  q6_a: {
    marks: 3,
    exemplar: 'Higher Cl₂ concentration → more Cl₂ molecules present [1]; more oxidising agent available to react with colour pigment [1]; more pigment destroyed → more colour removed from fabric [1].',
    keyConcepts: ['Data interpretation', 'Oxidation', 'Bleaching'],
    keywords: ['higher concentration', 'more Cl₂', 'more pigment', 'more colour removed'],
    feedbackHit: 'Three-step explanation — 3 marks.',
    feedbackMiss: 'Link: higher concentration → more Cl₂ → more oxidation → more bleaching.',
  },

  q6_b: {
    marks: 5,
    exemplar: 'x-axis: Cl₂ concentration / % [1]; y-axis: signal strength [1]; appropriate scale [1]; title [1]; ≥5 points correctly plotted ±half square [1].',
    keyConcepts: ['Graph drawing', 'Scale', 'Plotting'],
    keywords: ['x-axis', 'y-axis', 'scale', 'title', 'data points'],
    feedbackHit: 'Labelled axes, title, scale, 5+ points plotted correctly — 5 marks.',
    feedbackMiss: 'x=Cl₂ %, y=signal strength. Label with units. Plot all 7 points. Best-fit line.',
  },

  q6_c: {
    marks: 1,
    exemplar: '5% Cl₂ → signal ≈ 3150 (accept 2950–3350) by interpolation between 4% and 6%.',
    keyConcepts: ['Interpolation'],
    keywords: ['5%', '3150', 'interpolate', 'between 2500 and 3800'],
    feedbackHit: 'Value ~3150 ± 200 — 1 mark.',
    feedbackMiss: 'Midpoint between 4% (2500) and 6% (3800): (2500+3800)/2 ≈ 3150.',
  },

  q6_d: {
    marks: 2,
    exemplar: 'Not valid [1]; average does not reveal individual batch values — one batch may be above 4% while others lower, making the average appear acceptable [1].',
    keyConcepts: ['Validity of averages', 'Individual data'],
    keywords: ['not valid', 'average', 'individual batches', 'misleading'],
    feedbackHit: 'States not valid + explains why average hides individual data — 2 marks.',
    feedbackMiss: 'A batch at 5% and three at 2% could give average ≈ 2.75%. Average masks individual violations.',
  },

  // ── Q7 — Clay tablets ─────────────────────────────────────────────────────
  q7_a: {
    marks: 1,
    exemplar: 'Plastic/malleable when wet — can be shaped on a wheel without cracking.',
    keyConcepts: ['Material properties', 'Plasticity'],
    keywords: ['plastic', 'malleable', 'wet clay', 'shaped'],
    feedbackHit: 'Plasticity / malleability of wet clay — 1 mark.',
    feedbackMiss: 'Think about the physical property that lets wet clay be moulded.',
  },

  q7_b: {
    marks: 1,
    exemplar: 'Waterproofing / to give a decorative glossy finish / to protect from scratching.',
    keyConcepts: ['Protective coatings', 'Glaze'],
    keywords: ['waterproof', 'glossy', 'protect', 'glaze'],
    feedbackHit: 'Waterproofing or protection/decoration reason — 1 mark.',
    feedbackMiss: 'Glaze forms a glass-like layer → waterproof and decorative.',
  },

  q7_c: {
    marks: 1,
    exemplar: 'O₃ produces only O₂ which is not toxic; Cl₂ produces toxic HCl gas / chlorinated by-products that are harmful.',
    keyConcepts: ['Green chemistry', 'By-products'],
    keywords: ['O₃', 'O₂', 'non-toxic', 'Cl₂', 'toxic HCl'],
    feedbackHit: 'O₃ by-product O₂ is non-toxic; Cl₂ produces toxic gas — 1 mark.',
    feedbackMiss: 'Compare by-products: O₃ → O₂ (harmless); Cl₂ → toxic chlorinated compounds.',
  },

  q7_d: {
    marks: 6,
    exemplar: `**Advantages of clay tablets:**
- Highly durable; survived thousands of years without degradation [1]
- Fire-resistant; baking hardens the clay permanently [1]

**Disadvantages of clay tablets:**
- Heavy/bulky; difficult to transport or store large quantities [1]
- Text can be eroded by water/physical abrasion over time [1]

**Advantages of acid-free paper:**
- Lightweight and portable; easy to mass-produce [1]
- Chemically stable; resists yellowing for 500+ years [1]

**Conclusion:** Accept clay tablets if justified by durability evidence; accept acid-free paper if justified by practicality and stability — must include specific reasoning.`,
    keyConcepts: ['Criterion D', 'Material preservation', 'Clay vs paper'],
    keywords: ['clay tablets', 'acid-free paper', 'durable', 'stable pH', 'conclusion'],
    feedbackHit: 'Both advantages + disadvantages for each, plus justified conclusion — up to 6 marks.',
    feedbackMiss: 'Must compare BOTH materials with specific evidence before giving a justified conclusion.',
  },

  // ── Q8 — Bamboo vs tree paper ─────────────────────────────────────────────
  q8_: {
    marks: 10,
    exemplar: `Criterion D: Implications — bamboo-to-paper vs tree-to-paper

**Environmental — bamboo:**
- Grows in 3–5 years vs 25–50 for trees; much lower deforestation impact [1]
- Bamboo absorbs CO₂ faster; positive carbon effect [1]

**Environmental — tree:**
- Large established forests cleared; habitat loss [1]
- Long-term chemical processing (pulping) creates water pollution [1]

**Economic — bamboo:**
- Cheaper long-term raw material; emerging industry [1]
- New infrastructure needed; higher initial investment [1]

**Economic — tree:**
- Established industry; large employment base in forestry/mills [1]
- Raw material cost rising as forests are depleted [1]

**Conclusion:**
- Bamboo better for environment; tree-paper industry currently better economically [1]
- Overall: bamboo-to-paper is more sustainable — accept tree if well justified [1]`,
    keyConcepts: ['Criterion D', 'Bamboo', 'Deforestation', 'Economic impact'],
    keywords: ['bamboo', 'tree', 'deforestation', 'CO₂', 'economic', 'conclusion'],
    feedbackHit: 'Both processes compared on environment and economy with justified conclusion — up to 10 marks.',
    feedbackMiss: 'Address: (1) environment for both, (2) economy for both, (3) justified conclusion.',
  },

  // ── Q9 — Stone inscriptions vs electronic ─────────────────────────────────
  q9_: {
    marks: 6,
    exemplar: `Cultural advantages/disadvantages — stone inscriptions vs electronic:

**Stone — cultural advantages:**
- Physical embodiment of cultural heritage; seen in original context [1]
- Accessible without technology; community members can view directly [1]

**Stone — cultural disadvantages:**
- Immovable; restricted to geographic location [1]

**Electronic — cultural advantages:**
- Globally sharable; enables worldwide cultural education [1]
- Translation tools; makes culture accessible across languages [1]

**Electronic — cultural disadvantages:**
- Technology gap; communities without internet cannot access [1]

**Conclusion:** Both valuable; electronic enables cultural reach while stone preserves authenticity.`,
    keyConcepts: ['Criterion D', 'Cultural heritage', 'Stone vs digital'],
    keywords: ['cultural', 'stone', 'electronic', 'heritage', 'access', 'authentic'],
    feedbackHit: 'Cultural angle for both, balanced, justified conclusion — up to 6 marks.',
    feedbackMiss: 'Focus specifically on CULTURAL impact (not just convenience). Both sides required.',
  },
}
