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
  // ── Q1 — Iron Age meteorite tools ─────────────────────────────────────────
  q1_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q1_b: {
    marks: 2,
    exemplar: 'Nickel oxide (for NiO); FeS (for Iron sulfide)',
    keyConcepts: ['Ionic compound naming', 'Chemical formulae'],
    keywords: ['nickel oxide', 'FeS', 'NiO', 'iron sulfide'],
    feedbackHit: 'Both name and formula correct — 2 marks.',
    feedbackMiss: 'Name for NiO = nickel oxide. Formula for iron(II) sulfide = FeS.',
    blankAnswers: ['Nickel oxide', 'FeS'],
  },

  q1_c: {
    marks: 1,
    exemplar: 'Sulfur (S) — electron configuration 2,8,6 gives 16 protons, Group 6, Period 3.',
    keyConcepts: ['Electron configuration', 'Element identification'],
    keywords: ['sulfur', 'S', '2,8,6', 'Group 6'],
    feedbackHit: 'Sulfur correctly identified.',
    feedbackMiss: '2+8+6=16 protons → element 16 = Sulfur.',
  },

  q1_d: {
    marks: 2,
    exemplar: 'S has 16 protons; mass number = 16 + 18 = 34. [1 mark for proton number, 1 for correct sum]',
    keyConcepts: ['Atomic structure', 'Mass number', 'Isotopes'],
    keywords: ['mass number', 'protons', 'neutrons', '34', 'S-34'],
    feedbackHit: 'Mass number 34 with working — 2 marks.',
    feedbackMiss: 'Mass number = protons + neutrons = 16 + 18 = 34.',
  },

  q1_e: {
    marks: 3,
    exemplar: '4 mol FeSO₄·7H₂O contains 4×7=28 mol H₂O. M(H₂O)=18 g/mol. Mass=28×18=504 g.',
    keyConcepts: ['Moles', 'Hydrated salts', 'Molar mass'],
    keywords: ['28 mol', '504 g', 'FeSO₄·7H₂O', 'water'],
    feedbackHit: '504 g with full working — 3 marks.',
    feedbackMiss: 'Moles H₂O = 4×7=28. Mass = 28×18=504 g.',
  },

  // ── Q2 — Painted murals ───────────────────────────────────────────────────
  q2_a: {
    marks: 1,
    exemplar: 'Any transition metal with name and symbol, e.g. Iron (Fe), Cobalt (Co), Chromium (Cr).',
    keyConcepts: ['Transition metals', 'Periodic table'],
    keywords: ['iron', 'Fe', 'cobalt', 'Co', 'chromium', 'Cr'],
    feedbackHit: 'Transition metal with name and symbol — 1 mark.',
    feedbackMiss: 'Transition metals are in groups 3–12 (d-block). Give both name and symbol.',
  },

  q2_b: {
    marks: 1,
    exemplar: 'Magnesium (Mg) — Group 2, Period 3.',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['magnesium', 'Mg', 'Group 2', 'Period 3'],
    feedbackHit: 'Magnesium correctly identified.',
    feedbackMiss: 'Group 2, Period 3 → third row, second column = Magnesium.',
  },

  q2_c: {
    marks: 4,
    exemplar: 'Mass MgO = 50.0−38.0−7.0 = 5.0 g [1]; M(MgO) = 24+16 = 40 g/mol [1]; n = 5.0/40 [1] = 0.13 mol (2 s.f.) [1].',
    keyConcepts: ['Moles', 'Molar mass', 'Composition by subtraction'],
    keywords: ['MgO', '5.0 g', '40 g/mol', '0.13 mol'],
    feedbackHit: '0.13 mol (2 s.f.) with full working — 4 marks.',
    feedbackMiss: 'Subtract SiO₂ and Na₂O. M(MgO)=40. n=5.0/40=0.13.',
  },

  q2_d: { type: 'mcq', correct: 0 } as MCQEntry,

  q2_e: { type: 'mcq', correct: 1 } as MCQEntry,

  q2_f: {
    marks: 2,
    exemplar: 'Temperature after = 42°C [1]; temperature change = 42−25 = +17°C [1].',
    keyConcepts: ['Temperature measurement', 'Dissolution'],
    keywords: ['42°C', '+17°C', 'temperature change'],
    feedbackHit: 'Both values correct — 2 marks.',
    feedbackMiss: 'Read thermometer: 42°C. Change = 42−25 = +17°C.',
  },

  q2_g: {
    marks: 1,
    exemplar: 'Exothermic (temperature increased when HCl dissolved).',
    keyConcepts: ['Exothermic reactions'],
    keywords: ['exothermic', 'temperature increase'],
    feedbackHit: 'Exothermic — 1 mark.',
    feedbackMiss: 'Temperature rose → energy released to surroundings = exothermic.',
  },

  q2_h: {
    marks: 4,
    exemplar: '2 HCl + 1 Mg(OH)₂ → 1 MgCl₂ + 2 H₂O. Blanks in order: 2, 1, MgCl₂, 2.',
    keyConcepts: ['Balancing equations', 'Neutralisation'],
    keywords: ['2HCl', 'Mg(OH)₂', 'MgCl₂', '2H₂O'],
    feedbackHit: 'Fully balanced with correct salt — 4 marks.',
    feedbackMiss: 'Product is magnesium chloride (MgCl₂). Balance Cl, Mg, O, H systematically.',
    blankAnswers: ['2', '1', 'MgCl₂', '2'],
  },

  // ── Q3 — NaOCl disinfection ───────────────────────────────────────────────
  q3_a: { type: 'mcq', correct: 0 } as MCQEntry,

  q3_b: { type: 'mcq', correct: 2 } as MCQEntry,

  q3_c: {
    marks: 1,
    exemplar: 'Approximately 8–12% bacteria remaining after one-step at 2 hours.',
    keyConcepts: ['Graph reading', 'Disinfection'],
    keywords: ['one-step', '2 hours', '8%', '12%', 'bacteria'],
    feedbackHit: 'Value between 8–12% — 1 mark.',
    feedbackMiss: 'Read one-step curve at x=2h; y ≈ 8–12%.',
  },

  q3_d: {
    marks: 1,
    exemplar: 'Approximately 8 hours — two-step reaches 1% remaining (99% removed) at ≈ 8 h.',
    keyConcepts: ['Graph reading', '99% removal'],
    keywords: ['two-step', '8 hours', '99%', 'removal'],
    feedbackHit: '8 hours — 1 mark.',
    feedbackMiss: '99% removed = 1% remaining. Find 1% on two-step curve → read x-axis.',
  },

  q3_e: {
    marks: 2,
    exemplar: 'Recommend two-step [1]; removes more bacteria over same time / achieves lower residual count at every point on the graph [1].',
    keyConcepts: ['Justification from data', 'Recommendation'],
    keywords: ['two-step', 'lower bacteria', 'justify', 'graph data'],
    feedbackHit: 'Recommendation + data-based justification — 2 marks.',
    feedbackMiss: 'State which process AND cite specific graph evidence for why.',
  },

  // ── Q4 — MnO₂ H₂O₂ decomposition ────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Collect gas in inverted test tube [1]; hold glowing splint at mouth — if relights, O₂ confirmed [1].',
    keyConcepts: ['Testing for oxygen', 'Gas collection'],
    keywords: ['glowing splint', 'relights', 'collect', 'inverted'],
    feedbackHit: 'Collection + glowing splint test described — 2 marks.',
    feedbackMiss: '(1) collect gas; (2) glowing splint → relights = O₂.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'If MnO₂ is in powder form → larger surface area [1]; H₂O₂ molecules collide with more MnO₂ particles per second [1]; rate of decomposition is higher than with granules [1].',
    keyConcepts: ['Hypothesis', 'Collision theory', 'Surface area'],
    keywords: ['if–then', 'surface area', 'collision frequency', 'powder'],
    feedbackHit: 'Prediction + surface area + collision theory — 3 marks.',
    feedbackMiss: 'Powder = larger surface area → more collisions per unit time → faster rate.',
  },

  q4_c: {
    marks: 4,
    exemplar: 'IV: form/type of MnO₂ [1]; DV: volume of O₂ in 30 s [1]; CV1: mass of MnO₂ [1]; CV2: volume/concentration of H₂O₂ [1].',
    keyConcepts: ['Variables', 'IV/DV/CV'],
    keywords: ['form MnO₂', 'volume O₂', 'mass MnO₂', 'H₂O₂ concentration'],
    feedbackHit: 'All four variables correct — 4 marks.',
    feedbackMiss: 'IV = MnO₂ form; DV = O₂ volume; CVs = mass MnO₂ and H₂O₂ volume/concentration.',
  },

  q4_d: {
    marks: 3,
    exemplar: 'Not valid [1]; colour change of MnO₂ does not directly measure O₂ production rate [1]; volume of O₂ per unit time is the correct measure of reaction rate [1].',
    keyConcepts: ['Validity', 'Measuring rate'],
    keywords: ['invalid', 'colour ≠ rate', 'O₂ volume', 'correct DV'],
    feedbackHit: 'Stated invalid + two-part reasoning — 3 marks.',
    feedbackMiss: 'Rate = volume O₂ / time. Colour of catalyst does not measure how fast O₂ is produced.',
  },

  q4_e: {
    marks: 3,
    exemplar: 'Average = (48+50+52)/3 = 150/3 = 50 cm³ [1]; rate = 50/30 [1] = 1.67 cm³ s⁻¹ [1].',
    keyConcepts: ['Average', 'Rate', 'Units'],
    keywords: ['50 cm³', '1.67 cm³ s⁻¹', 'divide by 30'],
    feedbackHit: 'Average 50 cm³ and rate 1.67 cm³ s⁻¹ — 3 marks.',
    feedbackMiss: 'Average=(48+50+52)/3=50. Rate=50/30=1.67 cm³ s⁻¹.',
  },

  q4_f: {
    marks: 3,
    exemplar: 'Error 1: bung/stopper not sealed → extra atmospheric O₂ or gas enters [1+justification]. Error 2: more H₂O₂ added / time exceeded 30 s [1+justification].',
    keyConcepts: ['Experimental error', 'Anomalous result'],
    keywords: ['bung', 'sealed', 'extra H₂O₂', 'timing error'],
    feedbackHit: 'Two errors each justified — 3 marks.',
    feedbackMiss: 'Each error must explain WHY more gas is measured than in previous trials.',
  },

  // ── Q5 — Crit B design ────────────────────────────────────────────────────
  q5_: {
    marks: 16,
    exemplar: `Criterion B Investigation Design — 16 marks (0–16 rubric):

**Research question (0–2):**
2 – Clear RQ linking MnO₂ form to rate of H₂O₂ decomposition.
1 – Vague RQ present.
0 – No RQ.

**Variables (0–2):**
2 – IV (MnO₂ form), DV (vol O₂ in 30 s), ≥2 CVs (mass MnO₂, H₂O₂ concentration, temp).
1 – Incomplete.
0 – Missing.

**Method — sufficient data (0–4):**
4 – ≥3 trials per form, all 5 forms tested, time stated, data table.
3 – Minor gap.
2 – ≤2 repeats or ≤3 forms.
0–1 – Very incomplete.

**Equipment list (0–2):**
2 – eudiometer, stopwatch, balance, 1 mol/dm³ H₂O₂, 5 MnO₂ forms, conical flask.
1 – Partial.
0 – Not given.

**Safety (0–2):**
2 – H₂O₂ irritant/oxidiser (gloves/goggles); MnO₂ dust (mask).
1 – One hazard.
0 – None.

**Reliability (0–2):**
2 – 3+ repeats, anomaly plan, averages.
1 – Repeats mentioned.
0 – None.

**Justification (0–2):**
2 – Explains why method and variables are appropriate.
1 – Some reasoning.
0 – None.`,
    keyConcepts: ['Criterion B', 'Experimental design', 'MnO₂', 'H₂O₂'],
    keywords: ['RQ', 'variables', 'method', 'equipment', 'safety', 'reliability'],
    feedbackHit: 'Comprehensive design with RQ, variables, method, equipment, safety, reliability.',
    feedbackMiss: 'Must include: RQ, IV/DV/CVs, step-by-step method with repeats, equipment list, safety.',
  },

  // ── Q6 — Hair dye oxidant ─────────────────────────────────────────────────
  q6_a: {
    marks: 3,
    exemplar: 'Higher oxidant concentration → more H₂O₂ available [1]; more cuticle layers opened [1]; more colour pigment can enter and bond → stronger hair colour [1].',
    keyConcepts: ['Data interpretation', 'Concentration effect'],
    keywords: ['higher concentration', 'more cuticles', 'more pigment', 'stronger colour'],
    feedbackHit: 'Three-step scientific explanation — 3 marks.',
    feedbackMiss: 'Link: concentration → cuticle opening → pigment absorption → colour intensity.',
  },

  q6_b: {
    marks: 5,
    exemplar: 'x-axis: Oxidant concentration / % [1]; y-axis: signal strength [1]; appropriate scale [1]; title [1]; ≥5 points correctly plotted ±half square [1].',
    keyConcepts: ['Graph drawing', 'Scatter plot'],
    keywords: ['x-axis', 'y-axis', 'scale', 'title', 'data points'],
    feedbackHit: 'Labelled axes, title, scale, 5+ points correctly — 5 marks.',
    feedbackMiss: 'Label axes with units. Title linking both variables. Plot all 7 points. Best-fit line.',
  },

  q6_c: {
    marks: 1,
    exemplar: '5% oxidant → signal ≈ 3375 (accept 3175–3575) by interpolation between 4% (2800) and 6% (3950).',
    keyConcepts: ['Interpolation'],
    keywords: ['5%', '3375', 'interpolate', 'between 2800 and 3950'],
    feedbackHit: 'Value ~3375 ± 200 — 1 mark.',
    feedbackMiss: 'Midpoint between 4% (2800) and 6% (3950): (2800+3950)/2 ≈ 3375.',
  },

  q6_d: {
    marks: 2,
    exemplar: 'Not valid [1]; average does not reveal individual batch values — one batch may exceed 4% while the average appears safe [1].',
    keyConcepts: ['Validity of averages', 'Individual data'],
    keywords: ['not valid', 'average', 'individual batches', 'misleading'],
    feedbackHit: 'States not valid + explains why average is misleading — 2 marks.',
    feedbackMiss: 'If one batch is at 6% and five are at 2%, average = 2.67% — hides the dangerous batch.',
  },

  // ── Q7 — Parchment vs paper ───────────────────────────────────────────────
  q7_a: {
    marks: 1,
    exemplar: 'Flexible / pliable / can be bent without cracking — allows rolling into a scroll.',
    keyConcepts: ['Material properties', 'Flexibility'],
    keywords: ['flexible', 'pliable', 'roll', 'scroll'],
    feedbackHit: 'Flexibility or pliability — 1 mark.',
    feedbackMiss: 'Think about what allows parchment to be rolled without tearing.',
  },

  q7_b: {
    marks: 1,
    exemplar: 'Waterproofing / protection from humidity, air pollutants or physical abrasion.',
    keyConcepts: ['Protective coatings'],
    keywords: ['waterproof', 'humidity', 'protect', 'polymer film'],
    feedbackHit: 'Protection or waterproofing reason — 1 mark.',
    feedbackMiss: 'Polymeric film is impermeable → protects from water and environmental damage.',
  },

  q7_c: {
    marks: 1,
    exemplar: 'O₃ breaks down to O₂ which is harmless; Cl₂ produces toxic chlorinated compounds that could degrade paper fibres.',
    keyConcepts: ['Green chemistry', 'By-products'],
    keywords: ['O₃', 'O₂', 'non-toxic', 'Cl₂', 'toxic', 'paper damage'],
    feedbackHit: 'O₃ by-product O₂ non-toxic; Cl₂ toxic by-products damage paper — 1 mark.',
    feedbackMiss: 'O₃ → O₂ (safe). Cl₂ → chlorinated compounds (toxic/paper-damaging).',
  },

  q7_d: {
    marks: 6,
    exemplar: `**Advantages of parchment:**
- Resilient — protein (collagen) structure lasts centuries under stable conditions [1]
- Chemical stability — not acidic unlike wood-based paper [1]

**Disadvantages of parchment:**
- Expensive to produce; requires animal skin [1]
- Susceptible to humidity — can warp, stretch or mould [1]

**Advantages of acid-free paper:**
- Lightweight; mass-produced; accessible globally [1]
- Chemically stable; resists yellowing for 500+ years [1]

**Conclusion:** Acid-free paper is better for modern archiving (practical, cost-effective). Parchment better for extreme longevity if properly stored — accept either with justification.`,
    keyConcepts: ['Criterion D', 'Parchment', 'Acid-free paper', 'Preservation'],
    keywords: ['parchment', 'acid-free paper', 'collagen', 'humidity', 'conclusion'],
    feedbackHit: 'Adv + disadv for both materials, justified conclusion — up to 6 marks.',
    feedbackMiss: 'Must discuss both materials with specific properties before giving a justified conclusion.',
  },

  // ── Q8 — Bagasse vs tree paper ────────────────────────────────────────────
  q8_: {
    marks: 10,
    exemplar: `Criterion D: Implications — sugarcane bagasse vs tree-to-paper

**Environmental — bagasse:**
- Agricultural by-product; no additional land clearing needed [1]
- Lower water consumption in processing; reduced chemical load [1]

**Environmental — tree:**
- Deforestation; loss of biodiversity and carbon storage [1]
- Chemical pulping produces wastewater / air pollution [1]

**Economic — bagasse:**
- Uses agricultural waste → low raw material cost; benefits sugar industry [1]
- Processing infrastructure less developed; needs investment [1]

**Economic — tree:**
- Established global industry with skilled workforce [1]
- Increasing cost pressure as forests deplete [1]

**Conclusion:**
- Bagasse better environmentally (by-product, no deforestation) [1]
- Accept tree-based if economic stability argument is well justified [1]`,
    keyConcepts: ['Criterion D', 'Bagasse', 'Tree paper', 'By-product'],
    keywords: ['bagasse', 'tree', 'deforestation', 'by-product', 'economic', 'conclusion'],
    feedbackHit: 'Environment and economy compared for both processes with justified conclusion — up to 10 marks.',
    feedbackMiss: 'Must cover (1) environment for both, (2) economy for both, (3) justified conclusion.',
  },

  // ── Q9 — Cave art vs digital ──────────────────────────────────────────────
  q9_: {
    marks: 6,
    exemplar: `Cultural advantages/disadvantages — cave art physical vs electronic archive:

**Physical preservation — cultural advantages:**
- Authentic experience of original site; cultural tourism value [1]
- Tangible connection to ancestral culture; irreplaceable [1]

**Physical preservation — cultural disadvantages:**
- Fragile; human access degrades paintings (CO₂, moisture) [1]

**Digital archiving — cultural advantages:**
- Globally accessible; extends cultural reach beyond geographic limits [1]
- Educational resource; 3D scanning preserves fine details [1]

**Digital archiving — cultural disadvantages:**
- Risk of cyber-attack / data loss; cultural record could be deleted [1]

**Conclusion:** Both needed — physical preserves authenticity, digital ensures global cultural access.`,
    keyConcepts: ['Criterion D', 'Cultural preservation', 'Cave art', 'Digital archiving'],
    keywords: ['cultural', 'cave paintings', 'digital', 'authentic', 'global access', 'fragile'],
    feedbackHit: 'Cultural angle for both with justified conclusion — up to 6 marks.',
    feedbackMiss: 'Must specifically address CULTURAL (not just practical) impacts for both.',
  },
}
