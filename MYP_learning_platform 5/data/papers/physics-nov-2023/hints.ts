/**
 * CLIENT-SAFE hints bank — scaffolding prompts only.
 * These are NOT answers — they are progressive Socratic cues.
 * Key format matches MS keys: 'q3_a', 'q14_b i', etc.
 */
export const HINTS: Record<string, string[]> = {
  q3_a: [
    'Think about what "precision" means for a measuring instrument.',
    'The smallest division is 1 mm = 0.001 m. What is the last significant digit in 0.835 m?',
    '0.835 m is recorded to the nearest mm → 3 significant figures IS justified. The digit 5 in the thousandths place is meaningful.',
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
    "The gravitational field strength on the Moon is 1/6 of Earth's. Calculate g_moon first.",
    'g_moon = 9.8 ÷ 6 ≈ 1.63 N/kg. Now use W = mg.',
    'W_moon = 90 × 1.63 ≈ 147 N.',
  ],
}
