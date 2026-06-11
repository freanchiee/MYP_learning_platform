import 'server-only'
import type { MSRecord } from '@/data/papers/physics-nov-2023/markscheme'

export const MS: Record<string, MSRecord> = {

  '1a': { type: 'mcq', correct: 0 },

  '1b': {
    marks: 3,
    exemplar: 'Measure the time between seeing the flash and hearing the bang. Calculate: distance = speed of sound × time (≈ 330 ms⁻¹). Award 1 for time; 1 for equation; 1 for correct speed value.',
    keyConcepts: ['speed of sound', 'distance = speed × time'],
    keywords: ['time', '330 ms⁻¹', 'distance'],
    feedbackHit: 'Correct — time delay and d = v × t with speed of sound.',
    feedbackMiss: 'Measure time between flash and bang. Use d = v × t with v ≈ 330 ms⁻¹.',
  },

  '1c': {
    marks: 2,
    exemplar: 'Storm moves at constant speed toward the student (distance decreasing) then away (distance increasing), with a closest point. Award 1 for direction change; 1 for constant speed.',
    keyConcepts: ['distance-time graph', 'constant speed'],
    keywords: ['toward', 'away', 'constant speed'],
    feedbackHit: 'Good — approach, closest point, and recession at constant speed described.',
    feedbackMiss: 'Describe the storm approaching, reaching a minimum distance, then receding at constant speed.',
  },

  '1d': {
    marks: 2,
    exemplar: 'Read graph: at 10:00 ≈ 8 km, at 10:10 ≈ 4 km. Distance = 4 km in 10 min = 1/6 h. Speed = 4 ÷ (1/6) = 24 km h⁻¹. Award 1 for correct graph values; 1 for correct calculation.',
    keyConcepts: ['speed = distance/time', 'unit conversion'],
    keywords: ['24 km h⁻¹', '4 km', '10 min'],
    feedbackHit: 'Correct — 4 km in 10 min = 24 km h⁻¹.',
    feedbackMiss: 'Read the distance change from the graph (4 km) and divide by 10 min = 1/6 h.',
  },

  '2a': { type: 'mcq', correct: 0 },

  '2b': {
    marks: 3,
    exemplar: 'V = 600 000 V, I = 20 000 A. R = V/I = 600 000 / 20 000 = 30 Ω. Award 1 for R = V/I; 1 for substitution; 1 for 30 Ω with unit.',
    keyConcepts: ['Ohm\'s law', 'resistance'],
    keywords: ['R = V/I', '30 Ω', '600 000 V', '20 000 A'],
    feedbackHit: 'Correct — R = 600 000/20 000 = 30 Ω.',
    feedbackMiss: 'Use R = V/I. Substitute 600 000 V and 20 000 A.',
  },

  '2c': {
    marks: 2,
    exemplar: 'Q = I × t = 20 000 × 25 × 10⁻⁶ = 0.50 C. Award 1 for Q = It; 1 for correct answer 0.50 C.',
    keyConcepts: ['charge', 'Q = It'],
    keywords: ['0.50 C', '25 μs', 'Q = It'],
    feedbackHit: 'Correct — Q = 20 000 × 25 × 10⁻⁶ = 0.50 C.',
    feedbackMiss: 'Use Q = I × t. Convert 25 μs to seconds (25 × 10⁻⁶ s).',
  },

  '2d': {
    marks: 3,
    exemplar: 'Metal (surge protector) has lower resistance than building/equipment. Current flows through the surge protector (path of least resistance). Charge conducted safely to earth, bypassing sensitive equipment. Award 1 for lower resistance; 1 for path of least resistance; 1 for safe earthing.',
    keyConcepts: ['conductors', 'resistance', 'earthing'],
    keywords: ['lower resistance', 'path of least resistance', 'earth', 'protects equipment'],
    feedbackHit: 'Correct — lower resistance means current flows to earth via the protector, not through the device.',
    feedbackMiss: 'Explain: metal has lower resistance, so current bypasses the equipment and reaches earth safely.',
  },

  '3a': {
    marks: 1,
    exemplar: 'Correctly identify alpha or beta emission for each equation from changes in mass and atomic number.',
    keyConcepts: ['alpha decay', 'beta decay'],
    keywords: ['alpha', 'beta', 'atomic number', 'mass number'],
    feedbackHit: 'Correct identification from the decay equations.',
    feedbackMiss: 'Alpha: −4 mass, −2 atomic. Beta: same mass, +1 atomic.',
  },

  '3b': {
    marks: 3,
    exemplar: 'Oganesson (Og) has atomic number 118. Alpha: mass 4, atomic number 2. New mass = 294 − 4 = 290. New atomic number = 118 − 2 = 116. Element 116 = Livermorium (Lv). Award 1 per correct value; 1 for name.',
    keyConcepts: ['alpha decay', 'periodic table'],
    keywords: ['290', '116', 'Livermorium', 'Lv'],
    feedbackHit: 'Correct — 118 − 2 = 116 (Livermorium), mass 290.',
    feedbackMiss: 'Subtract 2 from atomic number (116) and 4 from mass number (290). Element 116 = Livermorium.',
  },

  '3c': {
    marks: 2,
    exemplar: 'Gamma is a high-energy electromagnetic wave (photon). Very high frequency, very short wavelength. Not a particle. Award 1 for EM wave nature; 1 for high energy/frequency.',
    keyConcepts: ['gamma radiation', 'EM waves'],
    keywords: ['electromagnetic', 'high frequency', 'photon'],
    feedbackHit: 'Correct — gamma is a high-energy EM wave, not a particle.',
    feedbackMiss: 'Gamma radiation is an electromagnetic wave with very high frequency and short wavelength.',
  },

  '3d': {
    marks: 3,
    exemplar: 'Carbon-14 (half-life 5 700 years) is best for a 2 500-year-old Iron Age artifact. The half-life is comparable in magnitude to the artifact age, so a detectable fraction of C-14 remains. C-14 is naturally present in all organic/biological materials. Award 1 for C-14; 1 for appropriate half-life reasoning; 1 for presence in organic material.',
    keyConcepts: ['carbon-14 dating', 'half-life'],
    keywords: ['carbon-14', '5 700 years', 'organic material', 'Iron Age'],
    feedbackHit: 'Correct — C-14 half-life 5 700 y is appropriate for 2 500 years and it occurs in organic materials.',
    feedbackMiss: 'Choose C-14: its half-life is similar in order of magnitude to 2 500 years, and it is present in organic material.',
  },

  '4a': {
    marks: 4,
    exemplar: 'IV: Internal air pressure. DV: Bounce height. Controls: Drop height, Size of ball, Bouncing surface, Material of the ball. 1 mark each.',
    keyConcepts: ['variables'],
    keywords: ['pressure', 'bounce height', 'drop height', 'control'],
    feedbackHit: 'All variables correctly classified.',
    feedbackMiss: 'IV = pressure (what you change). DV = bounce height (what you measure). Controls = everything else.',
  },

  '4b': { type: 'mcq', correct: 1 },

  '4c': {
    marks: 2,
    exemplar: 'Safety: do not over-pressurize the ball beyond its rated capacity. Justification: over-pressure could cause the valve to fail or ball to burst, creating a hazard. Award 1 + 1.',
    keyConcepts: ['safety'],
    keywords: ['over-pressurize', 'burst', 'justification'],
    feedbackHit: 'Correct safety measure with justification.',
    feedbackMiss: 'State a specific precaution (e.g. max pressure limit) and why it is needed.',
  },

  '4d': {
    marks: 2,
    exemplar: '75 kPa (accept 74–76 kPa). Award 1 for correct reading; 1 for correct unit.',
    keyConcepts: ['pressure gauge reading'],
    keywords: ['75 kPa'],
    feedbackHit: '75 kPa — correct reading.',
    feedbackMiss: 'Read the scale pointer position and state the value with kPa units.',
  },

  '4e': {
    marks: 1,
    exemplar: 'Single straight LOBF following the trend of plotted points. Reject dot-to-dot connection.',
    keyConcepts: ['line of best fit'],
    keywords: ['LOBF', 'straight line'],
    feedbackHit: 'Correct LOBF drawn.',
    feedbackMiss: 'Draw one straight line that best fits all the data, not connecting each dot.',
  },

  '4f': {
    marks: 1,
    exemplar: 'Read LOBF at 55 kPa: approximately 0.82–0.84 m (ECF from drawn LOBF).',
    keyConcepts: ['graph interpolation'],
    keywords: ['55 kPa', '0.82–0.84 m'],
    feedbackHit: 'Correct interpolation at 55 kPa.',
    feedbackMiss: 'Follow the LOBF from 55 kPa on x-axis and read the bounce height.',
  },

  '4g': {
    marks: 3,
    exemplar: 'At 0 kPa the ball is completely deflated and cannot bounce. A non-zero y-intercept implies bounce at 0 pressure, which is physically impossible. Therefore the y-intercept has no physical significance. 1 mark each.',
    keyConcepts: ['graph interpretation', 'y-intercept'],
    keywords: ['0 kPa', 'deflated', 'physically impossible'],
    feedbackHit: 'Correct — deflated ball cannot bounce, so the y-intercept is meaningless.',
    feedbackMiss: 'Explain what 0 kPa means (deflated) and why bounce height cannot be non-zero at that pressure.',
  },

  '4h': {
    marks: 2,
    exemplar: 'LOBF does not pass through the origin. Therefore bounce height is not proportional to pressure and the hypothesis is not supported. 1 mark each.',
    keyConcepts: ['proportionality', 'hypothesis'],
    keywords: ['origin', 'not proportional', 'not supported'],
    feedbackHit: 'Correct — LOBF misses origin, hypothesis of proportionality is not supported.',
    feedbackMiss: 'Proportionality requires the line to pass through (0, 0). Check whether the LOBF does this.',
  },

  '5a': {
    marks: 6,
    exemplar: 'Step 1: Ruler not vertical (angled). Effect: Bounce height measured inaccurately. Improvement: Hold ruler vertically. Step 2: Inconsistent ball release height. Effect: Drop height varies, introducing error. Improvement: Use a fixed release guide or mark on wall. Award 1+1+1 per step.',
    keyConcepts: ['method evaluation', 'validity'],
    keywords: ['ruler vertical', 'consistent height', 'validity'],
    feedbackHit: 'Two method flaws identified with effects and improvements.',
    feedbackMiss: 'Find two steps with issues, explain the effect on validity, and suggest how to fix each.',
  },

  '5b': {
    marks: 2,
    exemplar: 'Convert 5.1 × 10² mm = 510 mm = 0.51 m. Mean = (0.56 + 0.52 + 0.51) / 3 = 1.59 / 3 = 0.53 m. Award 1 for conversion; 1 for correct mean.',
    keyConcepts: ['unit conversion', 'mean'],
    keywords: ['0.51 m', '0.53 m', 'mean'],
    feedbackHit: 'Correct — 510 mm = 0.51 m; mean = 0.53 m.',
    feedbackMiss: 'Convert 5.1 × 10² mm to metres (0.51 m). Then mean = (0.56 + 0.52 + 0.51)/3.',
  },

  '5c': {
    marks: 5,
    exemplar: 'Table with headers Drop height / m and Bounce height / m. Rows ordered. Consistent decimal places. Includes 0.53 m from (b). Award 1 heading; 1 units; 1 order; 1 consistency; 1 correct (b) value.',
    keyConcepts: ['data table'],
    keywords: ['headers', 'units', 'order', 'decimal places'],
    feedbackHit: 'Well-organised table with all required features.',
    feedbackMiss: 'Include column headers with units, order the rows, keep consistent decimal places, include value from (b).',
  },

  '5d': {
    marks: 2,
    exemplar: 'X-axis: Drop height / m. Y-axis: Bounce height / m. Plot (1.6, 0.53) ECF from (b). Award 1 for labels; 1 for point.',
    keyConcepts: ['graph axes'],
    keywords: ['Drop height / m', 'Bounce height / m', '(1.6, 0.53)'],
    feedbackHit: 'Correct labels and data point plotted.',
    feedbackMiss: 'Label the axes with quantity and unit, then plot (1.6, 0.53) from part (b).',
  },

  '6a': {
    marks: 3,
    exemplar: 'DV: bounce height. Control 1: drop height. Control 2: any two of surface type, ball size/mass, type of ball. Award 1 for DV; 1 per CV (max 2).',
    keyConcepts: ['variables'],
    keywords: ['bounce height', 'drop height', 'control'],
    feedbackHit: 'Correct — DV is bounce height; CVs stated.',
    feedbackMiss: 'DV = what you measure (bounce height). CVs = everything kept constant (drop height, surface, size).',
  },

  '6b': {
    marks: 14,
    exemplar: 'Bands:\n\n**0**: No relevant content.\n\n**1–5 (limited)**: Simple hypothesis. Variables named but not well controlled. Minimal method. No or inadequate safety.\n\n**6–9 (developing)**: Hypothesis with basic reasoning. Variables controlled with some detail. Some temperatures and repeats stated. Limited justification. One safety point.\n\n**10–14 (proficient–excellent)**: Clear testable hypothesis with mechanism (e.g. higher T → rubber more elastic → more kinetic energy returned on bounce → greater bounce height). Explicit control: fixed drop height, surface, same ball. At least 5 temperatures in a meaningful range (20–60°C); 3 repeats per temperature to calculate mean and spot anomalies. Justification of sufficiency. Two safety measures with justification (hot water burns; water spill slipping hazard).',
    keyConcepts: ['experiment design', 'hypothesis', 'data sufficiency', 'safety'],
    keywords: ['hypothesis', 'temperature', 'bounce height', 'repeats', 'safety', 'elastic', 'rubber'],
    feedbackHit: 'Excellent — full design with mechanism-based hypothesis, controlled variables, sufficient data, justified, with safety.',
    feedbackMiss: 'Provide a mechanistic hypothesis, control all variables, specify temperature range and repeats with justification, and include two safety measures.',
  },

  '7a': { type: 'mcq', correct: 2 },

  '7b': {
    marks: 2,
    exemplar: 'As global temperature increases, Arctic ice decreases (negative correlation). Both trends accelerate from the mid-20th century. Reference values from the graph. Award 1 for relationship; 1 for graph reference.',
    keyConcepts: ['correlation', 'climate change data'],
    keywords: ['negative correlation', 'temperature', 'ice extent', 'graph values'],
    feedbackHit: 'Correct — negative correlation between temperature and ice, with graph values cited.',
    feedbackMiss: 'Describe how ice decreases as temperature rises, and quote specific values from the graph.',
  },

  '7c': {
    marks: 2,
    exemplar: 'Rapid industrialization from 1900 onwards increased the burning of fossil fuels. Power stations, vehicles, and factories released more CO₂, raising global temperatures. Award 1 for industrialization; 1 for fossil fuel / CO₂ link.',
    keyConcepts: ['fossil fuels', 'industrialization'],
    keywords: ['industrialization', 'fossil fuels', 'CO₂', 'factories', 'vehicles'],
    feedbackHit: 'Correct — industrialization increased fossil fuel burning, raising temperatures.',
    feedbackMiss: 'Link the rapid increase to industrialization and burning of fossil fuels (coal, oil, gas).',
  },

  '7d': {
    marks: 4,
    exemplar: 'Consequence 1: Melting Arctic ice → rising sea levels → coastal flooding and displacement of millions (2 marks). Consequence 2: Loss of habitat for Arctic species (polar bears, seals) → decline in biodiversity and possible extinction (2 marks). Award 1 stated + 1 impact for each consequence.',
    keyConcepts: ['climate impacts', 'biodiversity'],
    keywords: ['sea levels', 'habitat loss', 'flooding', 'extinction'],
    feedbackHit: 'Two consequences with clear impacts stated.',
    feedbackMiss: 'State two consequences and explain the knock-on impact of each (e.g. sea level rise → coastal flooding).',
  },

  '7e': {
    marks: 4,
    exemplar: 'Technology: Offshore wind farms. Mechanism: Converts wind energy to electricity without burning fossil fuels, producing no CO₂ during operation. Strength: large-scale renewable electricity supply. Limitation: high construction cost; output depends on wind speed. Award 1 each: technology; mechanism; strength; limitation.',
    keyConcepts: ['renewable energy technology'],
    keywords: ['wind farm', 'no CO₂', 'strength', 'limitation', 'cost'],
    feedbackHit: 'Good — technology, mechanism, strength, and limitation all stated.',
    feedbackMiss: 'Name a technology, explain how it reduces CO₂, and give one strength and one limitation.',
  },

  '8a': {
    marks: 11,
    exemplar: 'Bands:\n\n**0**: No relevant content.\n\n**1–4 (limited)**: One or two impacts listed. No comparison or weak recommendation.\n\n**5–7 (developing)**: Health and well-being impacts for both methods. Some economic/social impacts. Partial comparison. Recommendation made but lightly justified.\n\n**8–11 (proficient–excellent)**: Positive and negative health/well-being for BOTH (e.g. cycling: exercise benefit, exposure to weather/traffic; metro: sedentary, sheltered, crowded). Positive and negative economic/social for BOTH (e.g. cycling: no ticket cost, need equipment; metro: reliable, fare required). Clear comparison of the two. Recommendation for Sara referencing 10 km distance and conditions — e.g. metro is recommended for a 10 km commute as it is safer and more reliable, with cycling on shorter or leisure journeys.',
    keyConcepts: ['transport evaluation', 'health', 'economics'],
    keywords: ['health', 'well-being', 'economic', 'social', 'recommendation', '10 km'],
    feedbackHit: 'Excellent — balanced discussion for both methods with comparison and justified recommendation.',
    feedbackMiss: 'Cover positive AND negative health AND economic/social impacts for BOTH methods, compare them, and recommend with justification for Sara\'s specific 10 km commute.',
  },
}
