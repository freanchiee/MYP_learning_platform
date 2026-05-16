export type MSEntry = {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
}

export type MSRecord =
  | { type: 'mcq'; correct: number }
  | MSEntry

export const MS: Record<string, MSRecord> = {
  q1: { type: 'mcq', correct: 3 },
  q2: { type: 'mcq', correct: 3 },
  q3_a: {
    marks: 1,
    exemplar:
      'No. The smallest division is 1 mm = 0.001 m, giving precision to ±0.5 mm. Recording 0.835 m (to nearest mm) gives 3 significant figures, which is justified as the ruler reads to 1 mm.',
    keyConcepts: ['precision', 'significant figures', 'justified', '1mm', '3 sig fig'],
    keywords: ['smallest division', 'accurate', 'precision', 'mm', '0.001'],
    feedbackHit:
      'Good — you correctly linked significant figures to the precision of the measuring instrument.',
    feedbackMiss:
      "Key idea: 1 mm precision → 0.001 m → 3 significant figures IS justified because the last digit (5) is meaningful to the ruler's resolution.",
  },
  q3_b: {
    marks: 2,
    exemplar:
      'The SI unit of density is kg/m³ (kilograms per cubic metre). g/cm³ is also accepted.',
    keyConcepts: ['kg/m3', 'kilogram', 'cubic metre'],
    keywords: ['kg', 'm3', 'g/cm3', 'density unit', 'si unit'],
    feedbackHit: 'Correct SI unit stated.',
    feedbackMiss:
      'The SI unit is kg/m³. Note: g/cm³ is acceptable in some contexts but kg/m³ is the SI standard.',
  },
  q3_c: {
    marks: 3,
    exemplar: 'ρ = m/V = 120 g ÷ 15 cm³ = 8 g/cm³ (or 8000 kg/m³ with conversion)',
    keyConcepts: ['density equals', 'mass divided by volume', '8', 'formula'],
    keywords: ['rho', 'm/v', '120', '15', '8 g', '8000 kg', 'divide', 'calculation'],
    feedbackHit: 'Formula correctly applied and numerical answer obtained.',
    feedbackMiss: 'Use ρ = m/V. Substitute: 120 ÷ 15 = 8 g/cm³.',
  },
  q4_a: {
    marks: 2,
    exemplar: 'R_total = R₁ + R₂ = 2 + 1 = 3 Ω',
    keyConcepts: ['3 ohm', 'series', 'add', 'total resistance'],
    keywords: ['2+1', 'r1+r2', '3', 'series resistance', 'ohm'],
    feedbackHit: 'Correct: series resistances are added.',
    feedbackMiss: 'In series: R_total = R₁ + R₂ = 2 + 1 = 3 Ω',
  },
  q4_b: {
    marks: 2,
    exemplar:
      'I = V/R = 6/3 = 2 A. In series the current is the same through both resistors: 2 A each.',
    keyConcepts: ['2 ampere', 'v/r', 'current same', 'ohm law'],
    keywords: ['6/3', '2a', 'current', 'same', 'series', 'ohm', 'i=v/r'],
    feedbackHit: "Ohm's law correctly applied.",
    feedbackMiss: 'I = V/R = 6÷3 = 2 A.',
  },
  q4_c: {
    marks: 2,
    exemplar: 'V₁ = IR₁ = 2×2 = 4 V; V₂ = IR₂ = 2×1 = 2 V. Check: 4+2 = 6V ✓',
    keyConcepts: ['4 volt', '2 volt', 'v=ir', 'potential difference'],
    keywords: ['4v', '2v', 'v=ir', 'potential', 'voltage', 'check'],
    feedbackHit: 'V = IR applied correctly to each resistor.',
    feedbackMiss: 'V₁ = I×R₁ = 2×2 = 4V and V₂ = I×R₂ = 2×1 = 2V.',
  },
  q5_i: {
    marks: 2,
    exemplar:
      'How does the load (force) applied to a spring affect its extension? (IV = load/force in N; DV = extension in cm/m)',
    keyConcepts: ['how does', 'affect', 'extension', 'load', 'force'],
    keywords: ['spring', 'investigate', 'load', 'extension', 'force', 'variable', 'relationship', 'proportional'],
    feedbackHit: 'Research question identifies IV and DV.',
    feedbackMiss:
      'A good RQ names IV (load/force) and DV (extension): "How does load affect extension of a spring?"',
  },
  q5_ii: {
    marks: 2,
    exemplar:
      "I predict that as the load increases, the extension will increase proportionally, because according to Hooke's Law (F = kx), force is directly proportional to extension within the elastic limit.",
    keyConcepts: ["hooke's law", 'directly proportional', 'elastic limit', 'extension increases'],
    keywords: ['proportional', 'increase', 'hooke', 'f=kx', 'spring constant', 'elastic', 'linear', 'predict'],
    feedbackHit: "Hypothesis uses Hooke's Law correctly.",
    feedbackMiss: 'State prediction (extension increases with load) AND justify using F = kx.',
  },
  q5_iii: {
    marks: 2,
    exemplar:
      'IV: load (mass/force in N)\nDV: extension of spring (cm or m)\nControlled: same spring, same ruler position, temperature of spring',
    keyConcepts: ['independent variable', 'dependent variable', 'controlled', 'same spring', 'load', 'extension'],
    keywords: ['iv', 'dv', 'control', 'fixed', 'same', 'spring', 'ruler', 'temperature', 'mass', 'force', 'extension'],
    feedbackHit: 'IV, DV and at least 2 controlled variables correctly identified.',
    feedbackMiss:
      'IV = load (what you change), DV = extension (what you measure), CVs = same spring, same ruler, temperature.',
  },
  q5_iv: {
    marks: 2,
    exemplar:
      '1. Measure natural length of unloaded spring. 2. Add 100g mass, wait for spring to stop oscillating. 3. Record new length and calculate extension. 4. Repeat for 200g, 300g... up to 500g. 5. Repeat each measurement 3 times for reliability.',
    keyConcepts: ['measure', 'repeat', 'reliability', 'mass', 'length', 'extension'],
    keywords: ['ruler', 'clamp', 'stand', 'masses', 'measure', 'record', 'extension', 'repeat', 'average', 'oscillation', 'settle'],
    feedbackHit: 'Method is systematic with clear steps and mentions reliability.',
    feedbackMiss:
      'Key elements: measure natural length, add masses in steps, wait for spring to be stationary, record extension, repeat each mass 3× for average.',
  },
  q6_i: {
    marks: 2,
    exemplar:
      'How does the length of a pendulum affect its period (time for one complete oscillation)?',
    keyConcepts: ['how does', 'length', 'affect', 'period', 'oscillation'],
    keywords: ['pendulum', 'length', 'period', 'time', 'complete', 'swing', 'oscillate'],
    feedbackHit: 'Research question correctly identifies IV (length) and DV (period).',
    feedbackMiss:
      'RQ must name: IV = length of pendulum, DV = period (time for one complete oscillation).',
  },
  q6_ii: {
    marks: 2,
    exemplar:
      'I predict that as length increases, period increases. This is because a longer pendulum has a greater arc distance to travel; T = 2π√(l/g) shows period is proportional to the square root of length.',
    keyConcepts: ['period increases', 'length increases', 't=2pi', 'square root'],
    keywords: ['longer', 'increase', 't=2pi', 'root', 'proportional', 'sqrt', 'formula'],
    feedbackHit: 'Correct prediction with mathematical justification.',
    feedbackMiss: 'As length increases, period increases. Use T = 2π√(l/g) to justify.',
  },
  q6_iii: {
    marks: 2,
    exemplar:
      'IV: length of pendulum (cm)\nDV: period T (s)\nCVs: mass of bob, amplitude of swing, same timing method',
    keyConcepts: ['independent', 'dependent', 'controlled', 'length', 'period', 'mass bob', 'amplitude'],
    keywords: ['iv', 'dv', 'cv', 'length', 'period', 'mass', 'amplitude', 'angle', 'controlled'],
    feedbackHit: 'All three variable types correctly identified.',
    feedbackMiss: 'IV = length, DV = period, CVs = mass of bob, amplitude, same timing method.',
  },
  q6_iv: {
    marks: 2,
    exemplar:
      '1. Time 10 complete oscillations (not just 1) to reduce percentage error in timing. 2. Release from same small angle each time (<15°) to ensure simple harmonic motion.',
    keyConcepts: ['10 oscillations', 'percentage error', 'timing', 'small angle'],
    keywords: ['10', 'oscillations', 'error', 'reaction', 'angle', 'small', 'consistent', 'repeat', 'average'],
    feedbackHit: 'Two valid reliability precautions stated with reasoning.',
    feedbackMiss:
      'Key precautions: (1) time multiple oscillations (10T) to reduce reaction time error, (2) keep amplitude small and constant.',
  },
  q7_a: {
    marks: 3,
    exemplar:
      'Extension = length - 10.0 cm. Row values: 0, 3.5, 7.0, 10.5, 14.0, 17.5, 24.0 cm → divide by 100 for metres: 0, 0.035, 0.070, 0.105, 0.140, 0.175, 0.240 m',
    keyConcepts: ['extension', 'subtract', 'natural length', 'divide by 100', 'metres'],
    keywords: ['extension', 'subtract', '10', '100', 'cm', 'm', 'convert', 'column'],
    feedbackHit: 'Extensions correctly calculated and converted to metres.',
    feedbackMiss:
      'Extension = measured length − 10.0 cm (natural length). Convert to m by dividing by 100.',
  },
  q7_b: {
    marks: 3,
    exemplar:
      'Graph should show: Extension (m) on y-axis, Load (N) on x-axis, points plotted at (0,0),(1,0.035),(2,0.070),(3,0.105),(4,0.14),(5,0.175), best-fit straight line through origin (up to 5N), point at 6N deviates above line.',
    keyConcepts: ['extension y-axis', 'load x-axis', 'best-fit', 'straight line', 'origin'],
    keywords: ['y-axis', 'x-axis', 'extension', 'load', 'plot', 'graph', 'best fit', 'straight', 'origin', 'points'],
    feedbackHit: 'Graph axes correctly labelled and best-fit line drawn through origin.',
    feedbackMiss:
      'y-axis = Extension (m), x-axis = Load (N). Points up to 5N should lie on a straight line through origin. 6N point deviates.',
  },
  q7_c: {
    marks: 2,
    exemplar:
      'k = gradient = ΔF/Δx = (0.175-0)/(5-0) / ... Wait: k = Load/Extension = gradient of Load vs Extension but inverted. If plotting Extension vs Load: gradient = Δextension/ΔLoad = 0.035 m/N. So k = 1/0.035 ≈ 28.6 N/m',
    keyConcepts: ['gradient', 'spring constant', 'calculation', 'N/m', 'delta'],
    keywords: ['gradient', 'rise', 'run', 'delta', 'k', '28', 'spring constant', 'n/m', '0.035'],
    feedbackHit: 'Gradient correctly calculated from best-fit line and k determined.',
    feedbackMiss:
      'Gradient = Δy/Δx = Δextension/ΔLoad ≈ 0.035 m/N. k = 1/gradient ≈ 28.6 N/m.',
  },
  q7_d: {
    marks: 2,
    exemplar:
      "The spring goes beyond its limit of proportionality at 6 N load. The data point at 6N (extension = 0.240m) lies above the best-fit line, showing greater extension than predicted by Hooke's Law.",
    keyConcepts: ['6 newton', 'limit of proportionality', 'above line', 'deviates'],
    keywords: ['6', '6n', 'limit', 'proportionality', 'elastic', 'deviates', 'above', 'greater', 'hooke'],
    feedbackHit: 'Correct load identified with reference to deviation from best-fit line.',
    feedbackMiss:
      'At 6 N, the extension (0.240 m) is greater than expected from the best-fit line → limit of proportionality exceeded.',
  },
  q8_a: {
    marks: 3,
    exemplar:
      'Average 10T: (9.0+9.2)/2=9.1, (11.0+11.2)/2=11.1, (12.6+12.8)/2=12.7, (14.1+14.3)/2=14.2, (15.5+15.5)/2=15.5, (16.7+16.9)/2=16.8. T=Average/10. T²=T×T.',
    keyConcepts: ['average', 'divide by 10', 'period', 'T squared', 'calculation'],
    keywords: ['average', 'sum', 'divide', '10', 'period', 'T', 'square', 'T2', 't squared'],
    feedbackHit: 'Correct averages, periods and T² values calculated.',
    feedbackMiss: 'Average = (Trial1+Trial2)/2. Period T = Average/10. T² = T×T.',
  },
  q8_b: {
    marks: 3,
    exemplar:
      'T² vs length graph: T²(y-axis), length in cm (x-axis), points should lie near a straight line through origin, best-fit drawn.',
    keyConcepts: ['T squared y-axis', 'length x-axis', 'straight line', 'best fit'],
    keywords: ['t2', 't squared', 'length', 'y-axis', 'x-axis', 'graph', 'plot', 'straight', 'best fit'],
    feedbackHit: 'Correct axes and straight best-fit line drawn.',
    feedbackMiss:
      'y-axis = T² (s²), x-axis = length (cm). Points should lie approximately on a straight line.',
  },
  q8_c: {
    marks: 2,
    exemplar:
      'g = 4π²/gradient. Gradient ≈ 0.04 s²/cm = 4 s²/m. g = 4π²/4 ≈ 9.87 m/s² ≈ 9.8 m/s²',
    keyConcepts: ['gradient', '4pi squared', 'calculate g', '9.8'],
    keywords: ['gradient', '4pi', '9.8', '9.87', 'g', 'calculation', 'formula'],
    feedbackHit: 'Gradient used correctly to calculate g ≈ 9.8 m/s².',
    feedbackMiss:
      'Read gradient from graph, then g = 4π²/gradient. Expected g ≈ 9.8 m/s².',
  },
  q8_d: {
    marks: 2,
    exemplar:
      'Limitation: only 2 trials per length reduces reliability. Improvement: repeat each length 3-5 times and average to reduce effect of random timing errors.',
    keyConcepts: ['limitation', 'repeat', 'reliability', 'random error', 'improvement'],
    keywords: ['limitation', 'improve', 'repeat', 'trials', 'random', 'error', 'average', 'reliability'],
    feedbackHit: 'Specific limitation and improvement with reasoning.',
    feedbackMiss:
      'Limitation = only 2 trials → low reliability. Improvement = repeat 3+ times and average to reduce random error.',
  },
  q9_a: {
    marks: 3,
    exemplar:
      'R = V/I for each pair: 1.0/0.25=4Ω, 2.0/0.50=4Ω, 3.0/0.74=4.05Ω, 4.0/1.00=4Ω, 5.0/1.25=4Ω, 6.0/1.52=3.95Ω',
    keyConcepts: ['R=V/I', 'ohm', 'resistance', 'calculation', 'formula'],
    keywords: ['r=v/i', 'ohm', '4', 'resistance', 'divide', 'calculation', 'v/i'],
    feedbackHit: 'R = V/I correctly applied with numerical answers.',
    feedbackMiss:
      'Use R = V/I for each pair. R ≈ 4 Ω for all pairs (approximately constant).',
  },
  q9_b: {
    marks: 2,
    exemplar:
      "The resistance values are approximately constant (≈4Ω) across all measurements. This indicates the resistor is ohmic — it obeys Ohm's law at constant temperature.",
    keyConcepts: ['constant resistance', 'ohmic', "ohm's law"],
    keywords: ['constant', 'ohmic', 'ohm', 'temperature', 'approximately', '4 ohm'],
    feedbackHit: 'Correctly identifies constant resistance → ohmic conductor.',
    feedbackMiss: 'Resistance stays approximately constant → ohmic conductor.',
  },
  q9_c: {
    marks: 2,
    exemplar:
      '1. Temperature change: as current flows the wire heats up, changing resistance. 2. Parallax error reading analogue meters.',
    keyConcepts: ['temperature', 'parallax', 'error', 'source'],
    keywords: ['temperature', 'heat', 'parallax', 'reading', 'contact', 'resistance', 'error'],
    feedbackHit: 'Two distinct sources of error identified.',
    feedbackMiss:
      'Sources: (1) Temperature rise in wire, (2) Parallax error in reading ammeter/voltmeter.',
  },
  q9_d: {
    marks: 1,
    exemplar:
      'Repeat each voltage measurement at least 3 times and calculate an average current to reduce random errors.',
    keyConcepts: ['repeat', 'average', 'reliability', 'random error'],
    keywords: ['repeat', 'average', '3 times', 'reliability', 'multiple', 'random', 'error'],
    feedbackHit: 'Specific improvement targeting reliability.',
    feedbackMiss: 'Repeat measurements and average to reduce random errors.',
  },
  q10_a: {
    marks: 4,
    exemplar:
      'Advantage: Nuclear produces no CO₂ or greenhouse gases during operation.\nDisadvantage: Produces radioactive waste that remains hazardous for thousands of years.',
    keyConcepts: ['no CO2', 'greenhouse gas', 'radioactive waste', 'thousands of years'],
    keywords: ['co2', 'greenhouse', 'carbon', 'climate', 'warming', 'radioactive', 'waste', 'storage', 'hazardous', 'thousand years'],
    feedbackHit: 'Both advantage and disadvantage correctly stated.',
    feedbackMiss:
      'Advantage: no CO₂ emissions. Disadvantage: radioactive waste requiring safe storage for thousands of years.',
  },
  q10_b: {
    marks: 4,
    exemplar:
      'Climate perspective: nuclear reduces carbon emissions. Safety perspective: risk of accidents (Chernobyl/Fukushima), radiation exposure. Economic perspective: high construction cost. Balanced conclusion needed.',
    keyConcepts: ['climate perspective', 'safety perspective', 'balanced', 'risk', 'accident'],
    keywords: ['perspective', 'balanced', 'climate', 'safety', 'risk', 'accident', 'chernobyl', 'radiation', 'community', 'cost'],
    feedbackHit: 'Two perspectives with balanced conclusion.',
    feedbackMiss: 'Must present ≥2 perspectives and reach a balanced judgement.',
  },
  q11: { type: 'mcq', correct: 1 },
  q12_a: {
    marks: 4,
    exemplar:
      'Advantages: 1. Renewable, 2. No greenhouse gas emissions.\nDisadvantages: 1. Intermittent, 2. Visual/noise pollution, may harm wildlife.',
    keyConcepts: ['renewable', 'no emissions', 'intermittent', 'visual pollution'],
    keywords: ['renewable', 'inexhaustible', 'no emissions', 'carbon', 'intermittent', 'unreliable', 'visual', 'noise', 'birds', 'wildlife', 'land'],
    feedbackHit: 'Two advantages and two disadvantages with reasoning.',
    feedbackMiss: 'Advantages: renewable, no CO₂. Disadvantages: intermittent, visual/noise impact.',
  },
  q12_b: {
    marks: 4,
    exemplar:
      'Supporting: less CO₂, urgent climate action needed. Challenges: grid stability, storage costs, social disruption. Conclusion: rapid but managed transition is more realistic.',
    keyConcepts: ['CO2 reduction', 'balanced', 'challenges', 'transition', 'not immediate'],
    keywords: ['co2', 'carbon', 'climate', 'urgent', 'renewable', 'cost', 'grid', 'storage', 'transition', 'realistic', 'balanced', 'conclusion'],
    feedbackHit: 'Both sides addressed with justified conclusion.',
    feedbackMiss:
      'Address why "immediately" is unrealistic AND why the direction is right. Reach an evaluative conclusion.',
  },
  q13: { type: 'mcq', correct: 0 },
  q14_a: {
    marks: 3,
    exemplar:
      'N = N₀ × (½)ⁿ. 25 = 100 × (½)ⁿ → (½)ⁿ = 0.25 = (½)² → n = 2 half-lives. Time = 2 × 1 hour = 2 hours.',
    keyConcepts: ['2 half-lives', '2 hours', 'formula', 'calculation'],
    keywords: ['half life', 'n=n0', '0.25', '2 hours', '120 minutes', 'calculation', '25/100'],
    feedbackHit: 'Half-life formula correctly applied, n=2, time=2 hours.',
    feedbackMiss: 'N = N₀(½)ⁿ → 25 = 100(½)ⁿ → n=2 → 2×1 = 2 hours.',
  },
  'q14_b i': {
    marks: 2,
    exemplar:
      'α: stopped by paper — least penetrating. β: stopped by a few mm of aluminium. γ: requires several cm of lead — most penetrating.',
    keyConcepts: ['alpha least', 'paper', 'beta aluminium', 'gamma lead', 'most penetrating'],
    keywords: ['alpha', 'paper', 'least', 'beta', 'aluminium', 'gamma', 'lead', 'concrete', 'penetrating'],
    feedbackHit: 'All three radiations correctly ranked.',
    feedbackMiss: 'Order (least→most): α (paper) < β (aluminium) < γ (lead/concrete)',
  },
  'q14_b ii': {
    marks: 2,
    exemplar: 'α: highest ionising power. β: medium. γ: lowest ionising power.',
    keyConcepts: ['alpha highest', 'beta medium', 'gamma lowest', 'ionising'],
    keywords: ['alpha', 'highest', 'beta', 'medium', 'gamma', 'lowest', 'ionise', 'charge'],
    feedbackHit: 'Ionising power correctly ranked.',
    feedbackMiss: 'Order (most→least): α > β > γ. α is most ionising due to large charge.',
  },
  q15_a: {
    marks: 3,
    exemplar: 'd = 1600 m; t = 480 s; v = 1600/480 = 3.33 m/s',
    keyConcepts: ['1600 metres', '480 seconds', '3.33', 'v=s/t'],
    keywords: ['1600', '480', '3.3', 'v=s/t', 'm/s', 'convert'],
    feedbackHit: 'Both unit conversions correct and formula applied.',
    feedbackMiss: 'Convert: 1.6km→1600m, 8min→480s. v = 1600/480 = 3.33 m/s.',
  },
  q15_b: {
    marks: 1,
    exemplar: 'Her average speed increases because she is accelerating.',
    keyConcepts: ['increases', 'accelerates'],
    keywords: ['increases', 'greater', 'higher', 'accelerate', 'faster', 'downhill'],
    feedbackHit: 'Correct: speed increases.',
    feedbackMiss: 'Speed increases — she is accelerating.',
  },
  q16_a: {
    marks: 3,
    exemplar: 'W = mg = 90 × 9.8 = 882 N',
    keyConcepts: ['W=mg', '882 newton', 'formula'],
    keywords: ['w=mg', '90', '9.8', '882', 'weight', 'newton', 'n'],
    feedbackHit: 'W = mg correctly applied.',
    feedbackMiss: 'W = mg = 90 × 9.8 = 882 N.',
  },
  q16_b: {
    marks: 1,
    exemplar: 'Mass on Moon = 90 kg. Mass does not change with location.',
    keyConcepts: ['90 kg', 'mass unchanged'],
    keywords: ['90', 'kg', 'same', 'unchanged', 'constant', 'mass does not change'],
    feedbackHit: 'Correctly states mass unchanged at 90 kg.',
    feedbackMiss: 'Mass = 90 kg on the Moon — mass does not change with location.',
  },
  q16_c: {
    marks: 2,
    exemplar: 'g_moon = 9.8/6 = 1.63 N/kg. W_moon = mg = 90 × 1.63 = 147 N',
    keyConcepts: ['1.63', '147 newton', 'g divided by 6', 'W=mg'],
    keywords: ['9.8/6', '1.63', '147', '150', 'w=mg', 'moon', 'newton', '1/6'],
    feedbackHit: 'g_moon correctly calculated and applied.',
    feedbackMiss: 'g_moon = 9.8÷6 ≈ 1.63 N/kg. W = 90 × 1.63 ≈ 147 N.',
  },
}

// ---------------------------------------------------------------------------
// HINTS bank — per task key, an ordered array of progressive hints
// ---------------------------------------------------------------------------
export const HINTS: Record<string, string[]> = {
  q3_a: [
    'Think about what "precision" means for a measuring instrument.',
    'The smallest division is 1 mm = 0.001 m. What is the last significant digit in 0.835 m?',
    '0.835 m recorded to the nearest mm → 3 significant figures IS justified. The digit 5 in the thousandths place is meaningful.',
  ],
  q3_b: [
    'Density is measured in mass per volume. What are the SI base units for mass and volume?',
    'SI unit of mass = kilogram (kg). SI unit of volume = cubic metre (m³).',
    'SI unit of density = kg/m³.',
  ],
  q3_c: [
    'Write the formula for density: ρ = m/V',
    'Substitute: m = 120 g, V = 15 cm³. Calculate 120 ÷ 15.',
    'ρ = 120 ÷ 15 = 8 g/cm³. To convert to SI: 8 g/cm³ = 8000 kg/m³.',
  ],
  q4_a: [
    'In a series circuit, how do resistances combine?',
    'Series rule: R_total = R₁ + R₂.',
    'R_total = 2 + 1 = 3 Ω.',
  ],
  q4_b: [
    "Use Ohm's Law: I = V/R.",
    'V = 6 V, R = 3 Ω (from part a). Calculate I = 6 ÷ 3.',
    'I = 2 A. In series, this same current flows through both resistors.',
  ],
  q4_c: [
    'For each resistor, use V = IR.',
    'Resistor 1: V₁ = I × R₁ = 2 × 2. Resistor 2: V₂ = I × R₂ = 2 × 1.',
    'V₁ = 4 V, V₂ = 2 V. Check: 4 + 2 = 6 V ✓',
  ],
  q5_i: [
    'A research question should clearly state what you are changing (IV) and what you are measuring (DV).',
    'IV = load/force applied to spring. DV = extension of spring.',
    'Example: "How does the load (N) applied to a spring affect its extension (cm)?"',
  ],
  q5_ii: [
    "What does Hooke's Law state about force and extension?",
    "Hooke's Law: F = kx, meaning force is directly proportional to extension (within the elastic limit).",
    'Prediction: as load increases, extension increases proportionally. Graph should be a straight line through origin.',
  ],
  q5_iii: [
    'Identify what you deliberately change, what you measure, and what you keep constant.',
    'IV = load/force (N). DV = extension (cm or m).',
    'CVs: same spring, same starting position of ruler, room temperature (to prevent spring expansion).',
  ],
  q5_iv: [
    'Think about the steps in order: setup → measure → record → repeat.',
    'Key steps: 1) Measure natural length. 2) Add mass. 3) Record new length. 4) Calculate extension.',
    'For reliability: repeat each mass measurement 3 times and calculate average. Wait for spring to stop oscillating before measuring.',
  ],
  q6_i: [
    'Your research question should identify the independent variable (IV) and dependent variable (DV).',
    'IV = length of pendulum. DV = period (time for one complete oscillation).',
    'Example: "How does the length of a pendulum affect its period of oscillation?"',
  ],
  q6_ii: [
    'Use the formula T = 2π√(l/g) to predict the relationship.',
    'From T = 2π√(l/g): as l increases, √l increases, so T increases.',
    'Prediction: period increases as length increases. The relationship is T ∝ √l (not linear).',
  ],
  q6_iii: [
    'Name the variable you change, the variable you measure, and three you keep constant.',
    'IV = length of pendulum (cm). DV = period T (s).',
    'CVs: mass of bob, amplitude (angle of release), same timing method/equipment.',
  ],
  q6_iv: [
    'Think about what causes timing errors in pendulum experiments.',
    'Human reaction time when pressing a stopwatch causes error. How can you reduce its percentage impact?',
    '1) Time 10 complete oscillations and divide by 10 — reduces reaction time as a % of total time. 2) Keep amplitude small (<15°) to maintain simple harmonic motion.',
  ],
  q7_a: [
    'Extension = current length − natural length. What is the natural length of the spring?',
    'Natural length = 10.0 cm (the length with 0 N load). Subtract 10.0 from each length reading.',
    'Once you have extension in cm, divide by 100 to get metres. E.g., 3.5 cm ÷ 100 = 0.035 m.',
  ],
  q7_b: [
    'Decide which variable goes on which axis. The dependent variable (extension) goes on the y-axis.',
    'x-axis: Load (N) from 0 to 7. y-axis: Extension (m) from 0 to 0.30.',
    'Plot each (Load, Extension) pair. Draw the best-fit straight line through the first 6 points. The 6 N point should deviate above the line.',
  ],
  q7_c: [
    'The spring constant k = Force / Extension. From the graph, calculate the gradient.',
    'Gradient = Δy/Δx = Δextension/ΔLoad. Use two well-separated points on the best-fit line.',
    'Gradient ≈ 0.035 m/N. Since k = Force/Extension: k = 1/gradient ≈ 28.6 N/m.',
  ],
  q7_d: [
    "Look for the data point that does not lie on the best-fit straight line. This indicates Hooke's Law is no longer obeyed.",
    'Which load produces an extension larger than the straight line predicts?',
    "At 6 N, the extension (24.0 cm = 0.240 m) is greater than the best-fit line predicts. This is where the spring exceeds its limit of proportionality.",
  ],
  q8_a: [
    'Average = (Trial 1 + Trial 2) ÷ 2. Then Period T = Average ÷ 10. Then T² = T × T.',
    'Example for l = 20 cm: Average = (9.0 + 9.2)/2 = 9.1 s. T = 9.1/10 = 0.91 s. T² = 0.91² = 0.828 s².',
    'Complete all rows using the same method. Keep values to 2 decimal places.',
  ],
  q8_b: [
    'Plot T² on the y-axis and length l (cm) on the x-axis.',
    'Your points should approximately lie on a straight line through the origin.',
    'Draw the line of best fit — a single straight line that passes as close to all points as possible.',
  ],
  q8_c: [
    'Read the gradient of your T² vs l graph: gradient = ΔT²/Δl.',
    'The formula is: gradient = 4π²/g, so g = 4π²/gradient.',
    'If gradient ≈ 0.04 s²/cm = 4 s²/m, then g = 4π²/4 = π² ≈ 9.87 ≈ 9.8 m/s².',
  ],
  q8_d: [
    'A limitation is something that reduces the accuracy or reliability of the experiment.',
    'Only 2 trials per length means limited data to identify outliers.',
    'Limitation: only 2 trials → small number reduces reliability. Improvement: repeat each length 3–5 times and calculate an average to reduce random error.',
  ],
  q9_a: [
    'Use the formula R = V/I for each data pair.',
    'Pair 1: R = 1.0/0.25. Pair 2: R = 2.0/0.50. Continue for all pairs.',
    'All resistances should be approximately 4 Ω. Show one full calculation: R = V/I = 1.0/0.25 = 4 Ω.',
  ],
  q9_b: [
    'Look at the pattern in your calculated resistance values.',
    'Are the resistance values roughly constant or changing significantly?',
    'The values are approximately constant (≈4 Ω). This indicates an ohmic conductor — resistance does not change with voltage at constant temperature.',
  ],
  q9_c: [
    'Think about physical changes that happen during the experiment that could affect resistance.',
    'What happens to the resistor as current flows through it? What errors arise when reading instruments?',
    'Sources: (1) Temperature increase causes resistance to change. (2) Parallax error when reading analogue ammeter or voltmeter scales.',
  ],
  q9_d: [
    'What is the main cause of variation in your resistance values?',
    'Random errors can be reduced by repeating measurements.',
    'Improvement: repeat each voltage setting at least 3 times and use the average current to calculate resistance.',
  ],
  q10_a: [
    'Compare nuclear power to fossil fuels for one advantage and one disadvantage.',
    'Advantage: think about greenhouse gas emissions during operation.',
    'Advantage: no CO₂/greenhouse gases produced during operation. Disadvantage: produces radioactive waste that is hazardous for thousands of years.',
  ],
  q10_b: [
    'Identify at least two different groups of people and how they might view a nuclear power station.',
    'Consider: climate scientists, local residents near the site, economists, safety experts.',
    'Climate view: reduces carbon emissions, helps meet climate targets. Safety/community view: risk of accidents, radiation exposure, psychological impact. Conclude with a balanced judgement.',
  ],
  q11: [
    'Think about what microwaves do and how mobile phones use them.',
    'Mobile phones transmit via microwaves. Consider both benefits (global communication) and risks (health concerns).',
    'The best answer acknowledges both the benefit (connectivity) and the risk (potential health concerns) — showing science has a dual role.',
  ],
  q12_a: [
    'For advantages: think about fuel source and emissions. For disadvantages: think about reliability and visual impact.',
    'Advantages: wind is renewable/inexhaustible; no CO₂ produced during operation.',
    'Disadvantages: wind is intermittent (unreliable); visual and noise pollution, potential harm to birds/wildlife.',
  ],
  q12_b: [
    'This is an evaluate question — you must present both sides before concluding.',
    'For "immediately": urgency of climate change, CO₂ reduction needed. Against: grid instability, storage costs, transition time needed.',
    'Balanced conclusion: the direction is right but "immediate" replacement is unrealistic — a managed, phased transition is more appropriate.',
  ],
  q13: [
    'More cycles per second = higher frequency = higher pitch. Smaller amplitude = quieter sound.',
    'P has more cycles → higher frequency → higher pitch than Q.',
    'P has smaller amplitude → quieter (less loud) than Q. Answer: P has higher pitch and is not so loud.',
  ],
  q14_a: [
    'Use the decay equation: N = N₀ × (½)ⁿ where n = number of half-lives.',
    '25 = 100 × (½)ⁿ → (½)ⁿ = 25/100 = 0.25. What power of ½ gives 0.25?',
    '(½)² = 0.25 → n = 2 half-lives. Time = 2 × 1 hour = 2 hours.',
  ],
  'q14_b i': [
    'Think about what stops each type of radiation.',
    'α is stopped by paper/skin. β is stopped by a few mm of aluminium. γ requires cm of lead.',
    'Penetrating power (least to most): α < β < γ.',
  ],
  'q14_b ii': [
    'Which type of radiation causes the most ionisation of surrounding atoms?',
    'α has 2 protons and 2 neutrons — large charge causes most ionisation. γ is electromagnetic — least ionising.',
    'Ionising power (most to least): α > β > γ.',
  ],
  q15_a: [
    'First, convert both distance and time to SI units (m and s).',
    '1.6 km = 1600 m. 8 minutes = 8 × 60 = 480 s.',
    'v = distance/time = 1600/480 = 3.33 m/s (to 3 s.f.).',
  ],
  q15_b: [
    'What does "accelerates" mean for speed?',
    'If she accelerates, her velocity (and speed) is increasing.',
    'Her average speed increases because the downhill gradient causes her to accelerate.',
  ],
  q16_a: [
    'Use the weight formula: W = mg.',
    'm = 90 kg, g = 9.8 N/kg. Calculate W = 90 × 9.8.',
    'W = 90 × 9.8 = 882 N. Include the unit: Newtons (N).',
  ],
  q16_b: [
    'Does mass change with location?',
    'Mass is a measure of the amount of matter — it does not change between Earth and Moon.',
    'Mass on Moon = 90 kg. (Only weight changes, not mass.)',
  ],
  q16_c: [
    'The gravitational field strength on the Moon is 1/6 of Earth\'s. Calculate g_moon first.',
    'g_moon = 9.8 ÷ 6 ≈ 1.63 N/kg. Now use W = mg.',
    'W_moon = 90 × 1.63 ≈ 147 N.',
  ],
}
