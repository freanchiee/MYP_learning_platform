import 'server-only'
import type { MSRecord } from '@/data/papers/physics-nov-2023/markscheme'

// Markscheme — Physics November 2018 · VARIANT 2 (isomorphic to physics-nov-2018)
// Every numeric answer RECOMPUTED for the new contexts. MCQ correct-indices match
// the widgetOptions order in this variant's questions.ts.

export const MS: Record<string, MSRecord> = {
  // Q1 — Sound and Light (Starting pistol)
  '1a': { type: 'mcq', correct: 0 },
  '1b': {
    marks: 3,
    exemplar: 'Measure the time between seeing the smoke/flash and hearing the bang [1]. Use speed = distance/time → distance = speed of sound × time [1]. Using speed of sound in air (330 ms⁻¹) [1].',
    keyConcepts: ['time between smoke/flash and bang', 'speed = distance/time', 'speed of sound = 330 ms⁻¹'],
    keywords: ['time', 'bang', 'smoke', 'flash', 'speed', 'distance', '330'],
    feedbackHit: 'Correct outline of measurement and calculation for the distance to the starter.',
    feedbackMiss: 'Measure the time between seeing the smoke/flash and hearing the bang. Then use: distance = speed of sound × time (speed of sound ≈ 330 ms⁻¹).',
  },
  '1c': {
    marks: 2,
    exemplar: 'Moving with constant/unchanging speed OR it is not accelerating [1]. Any additional point: moving toward AND then away from the spectator / it passes at about 1 km (closest approach) [1].',
    keyConcepts: ['constant speed', 'moves toward then away from spectator', 'passes at ~1 km'],
    keywords: ['constant', 'speed', 'toward', 'away', 'passes', '1 km'],
    feedbackHit: 'Correct description of the vehicle journey from the graph.',
    feedbackMiss: 'The graph shows distance decreasing then increasing at a constant rate — so the vehicle moves at constant speed, first toward the spectator, then away. It passes at about 1 km distance.',
  },
  '1d': {
    marks: 2,
    exemplar: 'Values read from graph (8 km at 14:00, 4 km at 14:10) [1]. Answer = 24 km h⁻¹ [1]. (Ignore incorrect unit if present.)',
    keyConcepts: ['speed = distance/time', 'read graph values', '24 km h⁻¹'],
    keywords: ['24', 'km h⁻¹', 'speed', 'distance', '14:00', '14:10'],
    feedbackHit: 'Correct speed calculated from the graph.',
    feedbackMiss: 'Read distance at 14:00 (8 km) and 14:10 (4 km). Distance = 4 km in 10 min = 1/6 h. Speed = 4 ÷ (1/6) = 24 km h⁻¹.',
  },

  // Q2 — Van de Graaff / Electricity
  '2a': { type: 'mcq', correct: 0 },
  '2b': {
    marks: 3,
    exemplar: 'R = V/I seen or implied [1]. R = 200 000/8 000 [1]. R = 25 Ω (correct unit) [1].',
    keyConcepts: ['R = V/I', '200 000 / 8 000 = 25', 'unit: Ω (ohms)'],
    keywords: ['R = V/I', '200000', '8000', '25', 'Ω', 'ohms'],
    feedbackHit: 'Correct resistance calculation using Ohm\'s law.',
    feedbackMiss: 'Use R = V/I = 200 000 V ÷ 8 000 A = 25 Ω.',
  },
  '2c': {
    marks: 2,
    exemplar: 'ΔQ = I × Δt seen or implied (from 8 000 × 25 × 10⁻⁶) [1]. ΔQ = 0.20 C [1].',
    keyConcepts: ['Q = IΔt', '8 000 × 25 × 10⁻⁶ = 0.20 C'],
    keywords: ['Q = IΔt', '8000', '25', '10⁻⁶', '0.20', 'C', 'coulombs'],
    feedbackHit: 'Correct charge calculation.',
    feedbackMiss: 'Use Q = I × t = 8 000 A × 25 × 10⁻⁶ s = 0.20 C.',
  },
  '2d': {
    marks: 3,
    exemplar: 'The metal earthing wire is a better conductor / has lower resistance than a visitor\'s body [1]. The current/charge flows through the earthing wire (path of least resistance) [1]. The current/charge passes safely to earth instead of through a visitor, preventing a shock [1].',
    keyConcepts: ['earthing wire lower resistance', 'current flows through wire', 'charge passes to earth safely'],
    keywords: ['conductor', 'resistance', 'lower', 'current', 'charge', 'earth', 'ground', 'shock'],
    feedbackHit: 'Correct explanation of how the earthing wire protects the visitor.',
    feedbackMiss: 'The metal wire conducts better (lower resistance) → spark current flows through it → charge goes safely to earth, bypassing the visitor.',
  },

  // Q3 — Decay and Half-life (Oganesson)
  '3a': {
    marks: 1,
    exemplar: 'All three correct: Th→Ra + ⁴α (alpha); C→N + ⁰β (beta); Pu→U + ⁴α (alpha) [1 mark for all three correct].',
    keyConcepts: ['Th→Ra: alpha decay', 'C→N: beta decay', 'Pu→U: alpha decay'],
    keywords: ['alpha', 'beta', 'decay', 'Th', 'Ra', 'C', 'N', 'Pu', 'U'],
    feedbackHit: 'All three decay particles correctly identified.',
    feedbackMiss: 'Alpha (⁴₂α) reduces mass by 4 and atomic number by 2. Beta (⁰₋₁β) keeps mass the same and increases atomic number by 1. Th(90)→Ra(88): alpha; C(6)→N(7): beta; Pu(94)→U(92): alpha.',
  },
  '3b': {
    marks: 3,
    exemplar: 'Atomic number = 116 [1]. Mass number = 290 [1]. Livermorium or Lv [1]. (Award all marks independently.)',
    keyConcepts: ['new atomic number = 118 − 2 = 116', 'new mass number = 294 − 4 = 290', 'element = Livermorium (Lv)'],
    keywords: ['116', '290', 'livermorium', 'Lv', 'atomic number', 'mass number'],
    feedbackHit: 'Correct identification of Livermorium-290 from Oganesson-294 alpha decay.',
    feedbackMiss: 'Alpha particle (⁴₂α) removes 4 from the mass number and 2 from the atomic number. 294−4=290 (mass), 118−2=116 (atomic number). Element 116 = Livermorium (Lv).',
  },
  '3c': {
    marks: 2,
    exemplar: 'High energy OR high frequency OR short wavelength [1]. Electromagnetic wave OR radiation OR photon (do NOT accept "particle") [1].',
    keyConcepts: ['gamma = high energy EM radiation', 'high frequency / short wavelength', 'not a particle'],
    keywords: ['electromagnetic', 'high energy', 'high frequency', 'short wavelength', 'photon', 'radiation'],
    feedbackHit: 'Correct description of gamma radiation nature.',
    feedbackMiss: 'Gamma radiation is high-energy electromagnetic radiation (high frequency, short wavelength). It is a photon/EM wave — NOT a particle.',
  },
  '3d': {
    marks: 3,
    exemplar: 'Carbon-14 [1]. After 10 000 years the change in abundance will be noticeable OR the half-life is appropriate to the situation [1]. It exists in nature in organic materials (such as charcoal) [1].',
    keyConcepts: ['Carbon-14 most appropriate', 'half-life 5700y appropriate for 10000y charcoal', 'found naturally in organic materials'],
    keywords: ['carbon-14', 'half-life', '5700', 'organic', 'natural', 'noticeable', 'charcoal'],
    feedbackHit: 'Correct isotope selection with valid justification.',
    feedbackMiss: 'Carbon-14 (half-life 5 700 years) is best: (1) the half-life is similar in magnitude to 10 000 years so the change in abundance is detectable; (2) it is found naturally in all organic materials, including charcoal.',
  },

  // Q4 — Volleyball Bounce
  '4a': {
    marks: 4,
    exemplar: 'IV: only internal air pressure [1]. DV: only bounce height [1]. Two control variables correct [1]. All control variables correct [1].',
    keyConcepts: ['IV = internal air pressure', 'DV = bounce height', 'controls = drop height, size, surface, material'],
    keywords: ['independent', 'air pressure', 'dependent', 'bounce height', 'control', 'drop height', 'size', 'surface'],
    feedbackHit: 'Correct variable classification.',
    feedbackMiss: 'IV = internal air pressure (what you change). DV = bounce height (what you measure). All others (drop height, size of ball, bouncing surface, material) are control variables.',
  },
  '4b': {
    marks: 3,
    exemplar: 'Select: Measurements each 10 kPa; 3 repetitions at each pressure [1]. Comment on reliability (allows a mean to be calculated, reduces experimental uncertainty) [1]. Sufficient data across the full range [1].',
    keyConcepts: ['10 kPa intervals', '3 repetitions for reliability', 'sufficient data across range'],
    keywords: ['10 kPa', '3 repetitions', 'mean', 'reliability', 'range', 'uncertainty'],
    feedbackHit: 'Correct option selected with valid justification.',
    feedbackMiss: 'Choose 10 kPa intervals with 3 repetitions: enough data points across the full range AND 3 repeats allows a mean to be calculated to reduce experimental uncertainty.',
  },
  '4c': {
    marks: 2,
    exemplar: 'Safety factor linked to the question [1]: e.g. use a safe method to drop the ball / avoid bouncing it into the face / avoid over-pressurizing. Justification [1]: e.g. to avoid a falling injury / to avoid injury / the ball might burst.',
    keyConcepts: ['relevant safety measure', 'justification linked to hazard'],
    keywords: ['safety', 'drop', 'height', 'injury', 'pressure', 'burst', 'face'],
    feedbackHit: 'Safety measure stated with a linked justification.',
    feedbackMiss: 'State a specific safety measure for this experiment (e.g. safe dropping method, avoid over-pressurizing) AND explain why (e.g. prevent a falling injury or the ball bursting).',
  },
  '4d': {
    marks: 2,
    exemplar: '38 ± 0.5 kPa [1]. Correct unit: kPa [1]. (Accept any value 37–39 kPa.) Do not accept "kpa" for the unit mark.',
    keyConcepts: ['read pressure gauge: 38 kPa', 'correct unit: kPa'],
    keywords: ['38', 'kPa', 'pressure gauge', 'read'],
    feedbackHit: 'Correct pressure reading with correct unit.',
    feedbackMiss: 'Read the gauge: about 38 kPa (just below half-way between 20 and 60). The unit must be kPa (capital K and P).',
  },
  '4e': {
    marks: 1,
    exemplar: 'Straight line of best fit that goes through (or as close as possible to) all data points [1].',
    keyConcepts: ['LOBF through all data points', 'straight line'],
    keywords: ['line of best fit', 'straight', 'through', 'data points'],
    feedbackHit: 'Correct line of best fit drawn.',
    feedbackMiss: 'Draw a straight line that passes through, or as close as possible to, all the data points.',
  },
  '4f': {
    marks: 1,
    exemplar: '0.51–0.53 m (accept any value in this range) [1].',
    keyConcepts: ['read LOBF at 38 kPa ≈ 0.51-0.53 m'],
    keywords: ['0.51', '0.52', '0.53', '38 kPa', 'estimate'],
    feedbackHit: 'Correct estimate from the LOBF.',
    feedbackMiss: 'Find 38 kPa on the x-axis, go up to your LOBF, then read across to the y-axis: about 0.51–0.53 m.',
  },
  '4g': {
    marks: 3,
    exemplar: 'y-intercept corresponds to a bounce height of approximately 0.30 m [1]. The ball is completely deflated when pressure = 0 kPa [1]. So in reality it will not bounce at all → the y-intercept is physically meaningless [1].',
    keyConcepts: ['y-intercept ≈ 0.30 m at 0 kPa', 'deflated ball bounces = 0', 'y-intercept physically meaningless'],
    keywords: ['y-intercept', '0.30', 'deflated', '0 kPa', 'not bounce', 'significance'],
    feedbackHit: 'Correct explanation of why the y-intercept is physically insignificant.',
    feedbackMiss: 'At 0 kPa the ball is completely deflated — it cannot bounce. The y-intercept suggests a bounce height of ~0.30 m at 0 kPa, which is impossible. So the y-intercept has no physical significance.',
  },
  '4h': {
    marks: 2,
    exemplar: 'If the relationship was proportional, the line would go through the origin [1]. The line does not go through the origin — it is not proportional, so the hypothesis is not fully supported [1].',
    keyConcepts: ['proportional → LOBF through origin', 'line does not go through origin → not proportional'],
    keywords: ['origin', 'proportional', 'line', 'does not pass', 'hypothesis', 'not supported'],
    feedbackHit: 'Correct evaluation using the graph to test proportionality.',
    feedbackMiss: 'For a proportional relationship: bounce height = k × pressure, so the LOBF must pass through the origin. It doesn\'t → the hypothesis is NOT supported.',
  },

  // Q5 — Squash/Table-tennis Ball Bounce Data
  '5a': {
    marks: 6,
    exemplar: 'Identification of 2 incorrect steps [max 2], e.g.: ruler not used correctly (held at an angle, not on the floor); ball not held vertically; a different ball used; ball thrown rather than dropped. Effect of each step on validity [max 2]: e.g. bounce height measured incorrectly/inconsistently. Improvement linked to each step [max 2]: e.g. hold the ruler vertically/place it on the floor; use the same ball for all repeats; release rather than throw.',
    keyConcepts: ['ruler not used correctly', 'inconsistent ball release', 'effect on measurement validity', 'specific improvements'],
    keywords: ['ruler', 'angle', 'vertical', 'consistent', 'same ball', 'validity', 'improvement', 'throw'],
    feedbackHit: 'Good evaluation identifying steps, effects, and improvements.',
    feedbackMiss: 'For each problem: (1) name the step; (2) state its effect on the data (e.g. inconsistent measurements); (3) state the improvement. E.g. ruler at an angle → underestimates height → hold it vertically; ball thrown → inconsistent results → release from the same position.',
  },
  '5b': {
    marks: 2,
    exemplar: 'Evidence of conversion to m (4.5 × 10¹ cm = 45 cm = 0.45 m) [1]. Answer = 0.44 m [1].',
    keyConcepts: ['convert 4.5 × 10¹ cm to 0.45 m', 'mean = (0.41 + 0.46 + 0.45)/3 = 0.44 m'],
    keywords: ['0.44', 'mean', 'average', 'convert', 'cm to m'],
    feedbackHit: 'Correct average calculated after unit conversion.',
    feedbackMiss: 'Convert Trial 3: 4.5 × 10¹ cm = 45 cm = 0.45 m. Mean = (0.41 + 0.46 + 0.45) ÷ 3 = 1.32 ÷ 3 = 0.44 m.',
  },
  '5c': {
    marks: 5,
    exemplar: 'Both drop-height and bounce-height table headers correct [1]. Table headers include units that agree with the data (no units in the data columns) [1]. Correct values recorded in order of increasing/decreasing drop height [1]. Values recorded to a consistent number of decimal places [1]. Data from part (b) included (0.44 m at 1.8 m) [1].',
    keyConcepts: ['headers with units', 'no units in data columns', 'ordered data', 'consistent decimal places', 'include 0.44 from part b'],
    keywords: ['header', 'unit', 'order', 'decimal places', 'consistent', '0.44', 'table'],
    feedbackHit: 'Good table with headers, units, ordered data.',
    feedbackMiss: 'Table needs: (1) headers with units (Drop height/m, Bounce height/m); (2) no units in data cells; (3) data in ascending/descending order by drop height; (4) consistent decimal places; (5) include 0.44 m at 1.8 m drop.',
  },
  '5d': {
    marks: 2,
    exemplar: 'Data point plotted correctly at (1.8, 0.44) — ECF from part b [1]. X axis: drop height/m AND Y axis: bounce height/m [1]. Must clearly distinguish the two types of height.',
    keyConcepts: ['plot (1.8, 0.44) ECF', 'x-axis = drop height/m, y-axis = bounce height/m'],
    keywords: ['plot', '1.8', '0.44', 'drop height', 'bounce height', 'x-axis', 'y-axis'],
    feedbackHit: 'Correct data point plotted with correct axis labels.',
    feedbackMiss: 'Plot the point (drop height = 1.8, bounce height = 0.44). Label x-axis "drop height/m" and y-axis "bounce height/m" — distinguish the two heights.',
  },

  // Q6 — Racquetball Design
  '6a': {
    marks: 3,
    exemplar: 'Dependent variable: bounce height (of the ball) or any specifically named bounce measurement [1]. Two control variables: any two relevant, e.g. drop height, surface type, ball size, ball mass, ball material [1 each for 2 marks].',
    keyConcepts: ['DV = bounce height', '2 control variables: drop height, surface, ball size/mass'],
    keywords: ['bounce height', 'dependent', 'control', 'drop height', 'surface', 'size', 'mass'],
    feedbackHit: 'Correct DV and two valid control variables.',
    feedbackMiss: 'DV = bounce height (what you measure). Control variables = anything kept constant, e.g. drop height, surface type, ball size/mass.',
  },
  '6b': {
    marks: 14,
    exemplar: '[Hypothesis 1–4 marks] 1=RQ suggested. 2=Prediction linking IV and DV. 3=Testable prediction linking IV and DV with incomplete scientific reasoning. 4=Testable hypothesis with scientific reasoning (e.g. higher temperature gives the rubber more elastic energy / less energy loss → higher bounce). [Equipment 1–3 marks] Specific equipment for measuring temperature; specific equipment for bounce height; equipment for manipulating the temperature. [Method/manipulation 1–3 marks] 1=attempt described. 2=method described precisely. 3=complete method that could be followed. [Data 1–3 marks] 1=implies range. 2=5 values across the range. 3=3 trials/repeats and plans to calculate an average. [Safety 1 mark] Reasonable safety consideration with justification (e.g. scalding from hot water).',
    keyConcepts: ['testable hypothesis with scientific reasoning', 'specific equipment', 'systematic method', 'range + repeats + mean', 'safety consideration'],
    keywords: ['hypothesis', 'temperature', 'bounce height', 'thermometer', 'ruler', 'water bath', 'method', 'trials', 'mean', 'safety'],
    feedbackHit: 'Good investigation design with hypothesis, equipment, method, data plan and safety.',
    feedbackMiss: 'Check all 5 components: (1) hypothesis linking temperature and bounce height; (2) specific equipment (thermometer, ruler, water bath, heater); (3) method: heat the water to different temperatures, place the ball in, drop from a fixed height, measure bounce; (4) data: 5 temperatures, 3 repeats, mean; (5) safety: risk of scalding from hot water.',
  },

  // Q7 — Climate Change (Shipping)
  '7a': { type: 'mcq', correct: 1 },
  '7b': {
    marks: 2,
    exemplar: 'Both global temperature AND the amount of CO₂ increase [1]. Use of values from the graph for both temperature and CO₂ [1].',
    keyConcepts: ['CO₂ and temperature both increase together', 'positive correlation', 'use graph values'],
    keywords: ['both', 'increase', 'CO₂', 'temperature', 'correlation', 'graph'],
    feedbackHit: 'Correct outline linking the CO₂ and temperature trends from the graph.',
    feedbackMiss: 'Both variables increase together — as CO₂ rises, global temperature also rises. Use specific values from the graph (e.g. both rise sharply after 1800).',
  },
  '7c': {
    marks: 2,
    exemplar: 'Increased use of fossil fuels [1]. Because of industrialization (Industrial Revolution from ~1800) [1].',
    keyConcepts: ['fossil fuels', 'industrialization after 1800', 'burning coal/oil/gas'],
    keywords: ['fossil fuels', 'industrialization', 'burning', 'coal', 'oil', 'factories'],
    feedbackHit: 'Correct cause identified with a reason.',
    feedbackMiss: 'After 1800 the Industrial Revolution greatly increased the burning of fossil fuels (coal, oil, gas), releasing large amounts of CO₂.',
  },
  '7d': {
    marks: 4,
    exemplar: 'Any two reasonable consequences [1 each], e.g.: rising sea levels; changing weather patterns; ice sheets melting; loss of biodiversity. Correctly linked impact [1 each], e.g.: rising sea levels → coastal flooding / loss of land; changing weather → drought / reduced food production.',
    keyConcepts: ['sea level rise', 'extreme weather', 'ice melt', 'biodiversity loss', 'linked impacts'],
    keywords: ['sea level', 'flooding', 'ice melt', 'weather', 'drought', 'food', 'biodiversity'],
    feedbackHit: 'Two consequences with correctly linked impacts.',
    feedbackMiss: 'State two consequences (e.g. rising sea levels, changing weather patterns) and for each explain the impact on humans or ecosystems (e.g. coastal flooding, reduced food production).',
  },
  '7e': {
    marks: 4,
    exemplar: 'One type of technology [1], e.g.: wind-assisted (sail/rotor) cargo ships; ammonia/hydrogen ship fuel; carbon capture; solar/wind energy. How it reduces CO₂ [1]. A strength [1]. A limitation [1].',
    keyConcepts: ['specific technology', 'mechanism for CO₂ reduction', 'strength', 'limitation'],
    keywords: ['technology', 'wind-assisted', 'sail', 'hydrogen', 'carbon capture', 'reduces CO₂', 'strength', 'limitation'],
    feedbackHit: 'Technology named with mechanism, strength, and limitation.',
    feedbackMiss: 'Name a specific technology. Explain HOW it reduces CO₂. Give one strength and one limitation. E.g. wind-assisted ships: use wind for part of propulsion → less fuel burned → less CO₂; strength: wind is free/renewable; limitation: high cost / depends on the wind.',
  },

  // Q8 — Transport Evaluation
  '8a': {
    marks: 11,
    exemplar: '11-mark banded response: [Health 1–4 marks] 1=simple health comment for one method; 2=health impact for both methods OR one with explanation; 3=health impact for both with explanation for at least one; 4=health impact for both with linked explanation for both. [Economic/social 1–3 marks] 1=simple economic/social comment for one method; 2=economic/social impact for both methods; 3=economic/social impact for both with linked explanation for either. [Comparison 1–2 marks] 1=comparison of health impacts OR of economic impacts; 2=both a health comparison AND an economic comparison. [Recommendation 1 mark] A recommendation with justification.',
    keyConcepts: ['health/wellbeing impacts of two methods', 'economic/social impacts', 'comparison', 'justified recommendation'],
    keywords: ['health', 'exercise', 'safety', 'economic', 'social', 'comparison', 'recommend', 'justify'],
    feedbackHit: 'Strong evaluation with health, economic, comparison, and a justified recommendation.',
    feedbackMiss: 'Cover all four components: (1) health and well-being — positive AND negative for BOTH methods; (2) economic/social — positive AND negative for BOTH; (3) a comparison of methods; (4) a final recommendation with justification.',
  },
}
