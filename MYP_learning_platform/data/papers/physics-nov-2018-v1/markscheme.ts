import 'server-only'
import type { MSRecord } from '@/data/papers/physics-nov-2023/markscheme'

export const MS: Record<string, MSRecord> = {

  '1a': { type: 'mcq', correct: 0 },

  '1b': {
    marks: 3,
    exemplar: 'Measure the time between seeing the explosion/flash and hearing the sound. Calculate: distance = speed of sound × time, where speed of sound ≈ 330 ms⁻¹. Award 1 mark for identifying time as the quantity; 1 for the equation; 1 for correct speed of sound value.',
    keyConcepts: ['speed of sound', 'distance = speed × time'],
    keywords: ['time', '330 ms⁻¹', 'sound'],
    feedbackHit: 'Correct — you identified time as the measurable quantity and used d = v × t with the speed of sound.',
    feedbackMiss: 'Measure the time delay between the flash and the sound. Use d = v × t with v ≈ 330 ms⁻¹.',
  },

  '1c': {
    marks: 2,
    exemplar: 'The storm moves at constant/unchanging speed. It moves toward the student (distance decreasing) then away from the student (distance increasing), passing closest at the turning point. Award 1 for direction change; 1 for constant/uniform speed.',
    keyConcepts: ['distance-time graph', 'constant speed'],
    keywords: ['toward', 'away', 'constant speed', 'closest point'],
    feedbackHit: 'Good — you described the approach, closest point and recession at constant speed.',
    feedbackMiss: 'Describe the storm approaching then moving away at a steady pace, with a closest point.',
  },

  '1d': {
    marks: 2,
    exemplar: 'Read graph: at 09:00 ≈ 6 km, at 09:10 ≈ 3 km. Distance = 3 km in 10 min = 1/6 h. Speed = 3 ÷ (1/6) = 18 km h⁻¹. Award 1 for reading correct values; 1 for correct calculation.',
    keyConcepts: ['speed = distance/time', 'unit conversion'],
    keywords: ['18 km h⁻¹', '3 km', '10 min', 'graph reading'],
    feedbackHit: 'Correct — 3 km in 10 min = 18 km h⁻¹.',
    feedbackMiss: 'Read the distance change from the graph and divide by time in hours (10 min = 1/6 h).',
  },

  '2a': { type: 'mcq', correct: 0 },

  '2b': {
    marks: 3,
    exemplar: 'V = 400 000 V, I = 16 000 A. R = V/I = 400 000 / 16 000 = 25 Ω. Award 1 for correct equation R = V/I; 1 for substitution; 1 for answer 25 Ω with unit.',
    keyConcepts: ['Ohm\'s law', 'resistance'],
    keywords: ['R = V/I', '25 Ω', '400 000 V', '16 000 A'],
    feedbackHit: 'Correct — R = V/I = 400 000/16 000 = 25 Ω.',
    feedbackMiss: 'Use R = V/I. Substitute 400 000 V and 16 000 A.',
  },

  '2c': {
    marks: 2,
    exemplar: 'Q = I × t = 16 000 × 50 × 10⁻⁶ = 0.80 C. Award 1 for equation Q = It; 1 for correct answer 0.80 C with correct unit.',
    keyConcepts: ['charge', 'Q = It'],
    keywords: ['Q = It', '0.80 C', '50 μs'],
    feedbackHit: 'Correct — Q = 16 000 × 50 × 10⁻⁶ = 0.80 C.',
    feedbackMiss: 'Use Q = I × t. Convert 50 μs to seconds (50 × 10⁻⁶ s).',
  },

  '2d': {
    marks: 3,
    exemplar: 'Metal is a better conductor / has lower resistance than the components. Charge/current flows through the grounding strap (path of least resistance). Charge is safely conducted to earth without passing through sensitive components. Award 1 for lower resistance; 1 for path of least resistance; 1 for grounding to earth.',
    keyConcepts: ['conductors', 'resistance', 'earthing'],
    keywords: ['conductor', 'resistance', 'earth', 'path of least resistance'],
    feedbackHit: 'Correct — metal conducts charge to earth via path of least resistance, bypassing components.',
    feedbackMiss: 'Explain: metal has lower resistance, so current flows through the strap to earth, not through the device.',
  },

  '3a': {
    marks: 1,
    exemplar: 'Correctly identify alpha or beta emission for each equation. Alpha: mass decreases by 4 and atomic number by 2. Beta: mass unchanged, atomic number increases by 1.',
    keyConcepts: ['alpha decay', 'beta decay', 'decay equations'],
    keywords: ['alpha', 'beta', 'atomic number', 'mass number'],
    feedbackHit: 'Correct identification of particle types from the decay equations.',
    feedbackMiss: 'Alpha decay: −4 mass, −2 atomic. Beta decay: same mass, +1 atomic.',
  },

  '3b': {
    marks: 3,
    exemplar: 'Tennessine (Ts) has atomic number 117. Alpha particle: mass 4, atomic number 2. New mass = 294 − 4 = 290. New atomic number = 117 − 2 = 115. Element 115 = Moscovium (Mc). Award 1 for each correct value; 1 for correct element name.',
    keyConcepts: ['alpha decay', 'periodic table'],
    keywords: ['290', '115', 'Moscovium', 'Mc'],
    feedbackHit: 'Correct — 117 − 2 = 115 (Moscovium), mass 290.',
    feedbackMiss: 'Subtract 2 from atomic number (115) and 4 from mass number (290). Element 115 is Moscovium.',
  },

  '3c': {
    marks: 2,
    exemplar: 'Gamma radiation is a high-energy electromagnetic wave (photon). It has very high frequency and very short wavelength. It is NOT a particle. Award 1 for electromagnetic/wave nature; 1 for high energy/frequency/short wavelength.',
    keyConcepts: ['gamma radiation', 'electromagnetic spectrum'],
    keywords: ['electromagnetic wave', 'high frequency', 'photon', 'not a particle'],
    feedbackHit: 'Correct — gamma is a high-energy EM wave/photon.',
    feedbackMiss: 'Gamma radiation is an electromagnetic wave (like light, but much higher energy/frequency), not a particle.',
  },

  '3d': {
    marks: 3,
    exemplar: 'Carbon-14 (half-life 5 700 years) is the best choice. The artifact is 12 000 years old ≈ 2.1 half-lives, so a detectable proportion of C-14 remains. C-14 is naturally present in all living material (wood). Other isotopes have half-lives too short or too long, or are not naturally found in wood. Award 1 for identifying C-14; 1 for linking half-life to artifact age; 1 for presence in organic material.',
    keyConcepts: ['carbon-14 dating', 'half-life'],
    keywords: ['carbon-14', '5 700 years', 'organic material', 'half-life'],
    feedbackHit: 'Correct — C-14, half-life 5 700 y, is present in organic matter and detectable at 12 000 years.',
    feedbackMiss: 'Choose Carbon-14: half-life is similar in magnitude to 12 000 years, and it occurs naturally in wood.',
  },

  '4a': {
    marks: 4,
    exemplar: 'IV: Internal air pressure. DV: Bounce height. Controls: Drop height, Size of ball, Bouncing surface, Material of the ball. Award 1 mark per correct variable, max 4.',
    keyConcepts: ['variables', 'fair test'],
    keywords: ['independent', 'dependent', 'control', 'pressure', 'bounce height'],
    feedbackHit: 'Correct classification of all variables.',
    feedbackMiss: 'IV = what you change (pressure). DV = what you measure (bounce height). Controls = everything else kept constant.',
  },

  '4b': { type: 'mcq', correct: 1 },

  '4c': {
    marks: 2,
    exemplar: 'Safety: e.g. secure the ball when pumping to avoid it rolling / do not over-pressurize beyond the gauge limit. Justification: to avoid the ball bouncing unexpectedly and causing injury / to avoid valve damage. Award 1 for safety measure; 1 for justification.',
    keyConcepts: ['safety'],
    keywords: ['over-pressure', 'secure', 'justification'],
    feedbackHit: 'Good — you identified a relevant safety measure and justified it.',
    feedbackMiss: 'State a safety step (e.g. secure the ball) and explain why (e.g. prevent it rolling and causing a trip hazard).',
  },

  '4d': {
    marks: 2,
    exemplar: '95 kPa (accept 94–96 kPa). Award 1 for reading correct scale value; 1 for correct unit (kPa).',
    keyConcepts: ['pressure gauge reading', 'measurement'],
    keywords: ['95 kPa'],
    feedbackHit: '95 kPa — correct gauge reading.',
    feedbackMiss: 'Read the pointer on the gauge scale and include units (kPa).',
  },

  '4e': {
    marks: 1,
    exemplar: 'Single straight line of best fit passing through/close to all plotted data points. Reject a line that misses the trend or connects points dot-to-dot.',
    keyConcepts: ['line of best fit'],
    keywords: ['LOBF', 'straight line', 'trend'],
    feedbackHit: 'Good straight LOBF through the data.',
    feedbackMiss: 'Draw one straight line that best follows all the data points — do not join each dot.',
  },

  '4f': {
    marks: 1,
    exemplar: 'Read LOBF at 45 kPa: approximately 0.72–0.74 m (ECF from drawn LOBF).',
    keyConcepts: ['graph interpolation'],
    keywords: ['45 kPa', '0.72–0.74 m'],
    feedbackHit: 'Correct interpolation from the LOBF at 45 kPa.',
    feedbackMiss: 'Follow the LOBF up from 45 kPa on the x-axis and read the y-value.',
  },

  '4g': {
    marks: 3,
    exemplar: 'At 0 kPa the ball has no internal pressure and cannot bounce. The y-intercept suggests a non-zero bounce height when the ball is completely deflated, which is physically impossible. Therefore the y-intercept has no physical meaning. Award 1 for "deflated at 0 kPa"; 1 for "cannot bounce"; 1 for "physically impossible / no meaning".',
    keyConcepts: ['graph interpretation', 'y-intercept'],
    keywords: ['0 kPa', 'deflated', 'physically impossible', 'no meaning'],
    feedbackHit: 'Correct — at 0 kPa the ball is deflated so a non-zero bounce height is impossible.',
    feedbackMiss: 'Think about what 0 kPa means physically — a completely deflated ball cannot bounce.',
  },

  '4h': {
    marks: 2,
    exemplar: 'The LOBF does NOT pass through the origin. Therefore bounce height is NOT proportional to pressure. The hypothesis is not supported. Award 1 for observation about origin; 1 for conclusion on proportionality.',
    keyConcepts: ['proportionality', 'hypothesis evaluation'],
    keywords: ['origin', 'proportional', 'hypothesis', 'not supported'],
    feedbackHit: 'Correct — LOBF misses the origin, so the hypothesis of proportionality is not supported.',
    feedbackMiss: 'Check if the LOBF passes through the origin. Proportional relationships must pass through (0, 0).',
  },

  '5a': {
    marks: 6,
    exemplar: 'Step 1: Ruler not held vertically / at an angle. Effect: Bounce height is measured inaccurately (too low/high). Improvement: Hold the ruler vertical, perpendicular to the floor. Step 2: Ball released from inconsistent height. Effect: Drop height varies between trials, affecting bounce height. Improvement: Mark a fixed release point or use a guide. Award up to 3 marks per step (1 identify + 1 effect + 1 improvement).',
    keyConcepts: ['method evaluation', 'validity'],
    keywords: ['ruler vertical', 'consistent drop height', 'accuracy', 'validity'],
    feedbackHit: 'Good — you identified two flaws, explained their effects, and gave improvements.',
    feedbackMiss: 'Identify two steps (e.g. ruler angle, inconsistent drop height), explain the effect of each, then suggest an improvement.',
  },

  '5b': {
    marks: 2,
    exemplar: 'Convert 6.7 × 10² mm = 670 mm = 0.67 m. Mean = (0.64 + 0.58 + 0.67) / 3 = 1.89 / 3 = 0.63 m. Award 1 for correct conversion; 1 for correct mean.',
    keyConcepts: ['unit conversion', 'mean'],
    keywords: ['0.67 m', '0.63 m', 'conversion', 'mean'],
    feedbackHit: 'Correct — 6.7 × 10² mm = 0.67 m; mean = 0.63 m.',
    feedbackMiss: 'Convert mm to m first (÷1000). Then add all three values and divide by 3.',
  },

  '5c': {
    marks: 5,
    exemplar: 'Table with clear headings: Drop height / m and Bounce height (mean) / m. Rows in ascending or descending order of drop height. Correct decimal places throughout. ECF from 5b for the 2.0 m row. Award 1 heading row; 1 units; 1 order; 1 consistency; 1 correct 5b value.',
    keyConcepts: ['data table', 'presentation'],
    keywords: ['heading', 'units', 'decimal places', 'ordered'],
    feedbackHit: 'Well-structured table with headings, units, and ordered data.',
    feedbackMiss: 'Include column headers with units, order the rows, use consistent decimal places, and include your mean from (b).',
  },

  '5d': {
    marks: 2,
    exemplar: 'X-axis: Drop height / m. Y-axis: Bounce height / m. Plot (2.0, 0.63) — ECF from (b). Award 1 for correct axis labels; 1 for correct point plotted.',
    keyConcepts: ['graph axes', 'data point'],
    keywords: ['Drop height / m', 'Bounce height / m', '(2.0, 0.63)'],
    feedbackHit: 'Correct labels and point plotted.',
    feedbackMiss: 'Label x-axis "Drop height / m", y-axis "Bounce height / m", then plot (2.0, 0.63) from part (b).',
  },

  '6a': {
    marks: 3,
    exemplar: 'Dependent variable: Bounce height. Control variables: Drop height (accept any 2 of: surface type, ball size, ball mass, type of ball). Award 1 for DV; 1 per CV (max 2).',
    keyConcepts: ['variables'],
    keywords: ['bounce height', 'drop height', 'control variables'],
    feedbackHit: 'Correct — DV is bounce height; CV includes drop height and at least one other.',
    feedbackMiss: 'DV = what you measure (bounce height). CVs = everything held constant (drop height, surface, ball size).',
  },

  '6b': {
    marks: 14,
    exemplar: 'Bands (mark-scheme banded response):\n\n**0 marks**: No relevant content.\n\n**1–5 marks (limited)**: Simple hypothesis stated. One or two variables named without detail. No justification. Minimal method outline. No safety.\n\n**6–9 marks (developing)**: Hypothesis stated with basic reasoning (e.g. higher temperature → more energy → greater bounce). Variables named and manipulated with some detail. Data collection described (some temperatures, some repeats). Limited justification. One safety point.\n\n**10–14 marks (proficient–excellent)**: Clear, testable hypothesis with mechanism (e.g. rubber more elastic at higher T → more energy stored and released). Explicit control of drop height and surface. 5+ temperature values across a meaningful range (20–60°C), 3+ repeats per temperature. Justification: range ensures trend visible; repeats allow mean and reduce anomalies. Two safety points with justification (e.g. hot water → use tongs; water on floor → mop spill).',
    keyConcepts: ['experiment design', 'hypothesis', 'variables', 'data sufficiency', 'safety'],
    keywords: ['hypothesis', 'manipulate', 'temperature', 'bounce height', 'repeats', 'safety', 'rubber', 'elastic'],
    feedbackHit: 'Strong design — clear hypothesis with mechanism, good variable control, sufficient data with justification, and safety.',
    feedbackMiss: 'Ensure your hypothesis links temperature to bounce height with a physical reason. State how you control variables, specify temperatures and repeats, justify why your data is sufficient, and include safety measures.',
  },

  '7a': { type: 'mcq', correct: 2 },

  '7b': {
    marks: 2,
    exemplar: 'Both CO₂ levels and global temperature rise together (positive correlation). The increase accelerates from around 1800 (Industrial Revolution). Specific values from the graph should be quoted. Award 1 for correlation; 1 for reference to values/trend from the graph.',
    keyConcepts: ['correlation', 'CO₂ and temperature'],
    keywords: ['correlation', 'CO₂', 'temperature', 'increases', 'post-1800'],
    feedbackHit: 'Correct — CO₂ and temperature both increase, especially after 1800.',
    feedbackMiss: 'Describe how both quantities change together and reference specific values from the graph.',
  },

  '7c': {
    marks: 2,
    exemplar: 'The Industrial Revolution began around 1800, greatly increasing the burning of fossil fuels (coal, oil, gas) in factories, transport, and power generation. This released more CO₂ into the atmosphere. Award 1 for industrial/human cause; 1 for burning fossil fuels or increased energy use.',
    keyConcepts: ['fossil fuels', 'CO₂ emission'],
    keywords: ['Industrial Revolution', 'fossil fuels', 'burning', 'factories'],
    feedbackHit: 'Correct — industrialization increased fossil fuel use, raising CO₂.',
    feedbackMiss: 'Link the post-1800 rise to industrialization and burning of fossil fuels.',
  },

  '7d': {
    marks: 4,
    exemplar: 'Consequence 1: Melting ice sheets and glaciers → rising sea levels → flooding of coastal cities and displacement of populations (2 marks). Consequence 2: More frequent and severe droughts → reduced crop yields → food insecurity and famine (2 marks). Award 1 for each consequence stated; 1 for each impact outlined.',
    keyConcepts: ['climate change impacts'],
    keywords: ['sea levels', 'flooding', 'drought', 'food security', 'ice melt'],
    feedbackHit: 'Two consequences with clear impacts — well done.',
    feedbackMiss: 'State two specific consequences (e.g. ice melt, drought) and explain the chain of impact for each.',
  },

  '7e': {
    marks: 4,
    exemplar: 'Technology: e.g. Carbon Capture and Storage (CCS). Mechanism: captures CO₂ from power station emissions before it enters the atmosphere. Strength: can be applied to existing fossil-fuel infrastructure. Limitation: expensive to install and operate; stored CO₂ may leak. Award 1 each for: technology named; mechanism; strength; limitation.',
    keyConcepts: ['climate technology', 'CO₂ reduction'],
    keywords: ['carbon capture', 'mechanism', 'strength', 'limitation'],
    feedbackHit: 'Good — technology named with mechanism, strength, and limitation.',
    feedbackMiss: 'Name a technology, explain how it reduces CO₂, then give one strength and one limitation.',
  },

  '8a': {
    marks: 11,
    exemplar: 'Bands (mark-scheme banded response):\n\n**0 marks**: No relevant content.\n\n**1–4 marks (limited)**: One or two impacts listed for each transport mode, without full comparison or recommendation. Superficial.\n\n**5–7 marks (developing)**: Health and well-being impacts stated for both modes. Some economic or social impacts included. Some comparison. Recommendation made but not well justified.\n\n**8–11 marks (proficient–excellent)**: Positive and negative health/well-being impacts for BOTH methods (e.g. cycling: aerobic exercise, fresh air vs. danger from traffic; tram: sedentary but safe, enclosed air). Positive and negative economic/social impacts for BOTH (e.g. cycling: free, but requires equipment; tram: ticketed, but reliable/frequent). Comparison: clearly weighs up both. Final recommendation for Kieran with clear justification referencing the 6 km distance.',
    keyConcepts: ['transport', 'health', 'economics', 'evaluation'],
    keywords: ['health', 'well-being', 'economic', 'social', 'comparison', 'recommendation', '6 km'],
    feedbackHit: 'Excellent — balanced discussion of health and economic impacts for both methods, clear comparison, justified recommendation.',
    feedbackMiss: 'Give positive AND negative impacts for BOTH methods across health AND economics/social. Then compare them and make a recommendation.',
  },
}
