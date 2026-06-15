import 'server-only'

export type MSEntry = {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
}
export type MCQEntry = { type: 'mcq'; correct: number }
export type MSRecord = MSEntry | MCQEntry

export const MS: Record<string, MSRecord> = {

  // ── Q1: Thermoregulation ──
  q1a: { type: 'mcq', correct: 1 } as MCQEntry, // B — Emperor penguin

  q1b: {
    marks: 2,
    exemplar: 'The fat (blubber) layer is a poor conductor / good insulator of heat [1]. It reduces the rate at which body heat is lost / conducted to the cold surroundings so the penguin stays warm [1].',
    keyConcepts: ['fat layer is a poor conductor / insulator', 'reduces conduction of heat', 'less heat lost to cold surroundings'],
    keywords: ['fat', 'blubber', 'insulator', 'conductor', 'poor', 'heat loss', 'conduction', 'reduce'],
    feedbackHit: 'Correctly explained how the fat layer insulates the penguin and reduces heat loss.',
    feedbackMiss: 'Two ideas: (1) fat/blubber is a poor conductor (good insulator) of heat, and (2) it reduces the rate of heat lost by conduction to the cold surroundings.',
  } as MSEntry,

  q1c: {
    marks: 2,
    exemplar: 'Large ears AND large surface area increases heat lost by conduction OR convection OR radiation, cooling the fennec fox in the heat [1]. White fur AND reduces / reflects (infra-red) radiation so the Arctic fox loses less heat in the cold [1].',
    keyConcepts: ['large ears = large surface area increase heat loss', 'white fur reduces infrared radiation', 'surface area and heat transfer'],
    keywords: ['large', 'ears', 'surface area', 'conduction', 'convection', 'radiation', 'white', 'fur', 'reflect', 'heat loss'],
    feedbackHit: 'Correctly linked large ears to greater heat loss and white fur to less radiation lost.',
    feedbackMiss: 'Two separate ideas: (1) Fennec fox — large ears have a large surface area which increases heat loss by conduction/convection/radiation in the heat; (2) Arctic fox — white fur reduces/reflects infrared radiation so less heat is lost in the cold.',
  } as MSEntry,

  q1d: {
    marks: 3,
    exemplar: 'Heat is required for evaporation OR evaporation removes heat [1]. High energy (fast-moving) particles escape from the surface of the water [1]. Leaving lower energy particles behind, so the average kinetic energy / temperature falls and the dog cools [1].',
    keyConcepts: ['evaporation requires heat energy', 'high energy / fast particles escape', 'remaining particles have lower average energy / temperature drops'],
    keywords: ['evaporation', 'heat', 'energy', 'high energy', 'fast', 'escape', 'surface', 'lower energy', 'cool', 'temperature'],
    feedbackHit: 'Correctly explained the three steps of evaporative cooling using particle theory.',
    feedbackMiss: 'Three steps: (1) evaporation requires/takes heat energy, (2) the highest-energy (fastest) particles escape from the surface, (3) the remaining particles have lower average kinetic energy → the tongue cools the dog.',
  } as MSEntry,

  // ── Q2: Pumped-storage hydro / energy ──
  q2a: {
    marks: 2,
    exemplar: 'Sankey diagram correctly labelled: Useful electrical output (25%) on small top arrow, Heat losses (70%) on large downward arrow, Frictional losses (5%) on small bottom arrow [1 mark for 2 correct; 2 marks for all 3 correct].',
    keyConcepts: ['Sankey diagram', 'useful electrical output 25%', 'heat losses 70%', 'frictional losses 5%', 'energy conservation'],
    keywords: ['Sankey', 'useful', 'electrical', 'heat losses', 'friction', '25%', '70%', '5%', 'input'],
    feedbackHit: 'Correctly labelled all energy forms on the Sankey diagram.',
    feedbackMiss: 'The Sankey diagram has three outputs: Useful electrical output (25%), Heat losses (70%), Frictional losses (5%). Together they must add to 100%.',
  } as MSEntry,

  q2b: {
    marks: 4,
    exemplar: 'Height drop = 540 − 90 = 450 m [1]. ΔEp = mgh [1]. = 920 × 10 × 450 = 4 140 000 J [1]. Correct unit: J or MJ or joule or mega joule [1].',
    keyConcepts: ['ΔEp = mgh', 'change in height = 450 m', 'gravitational potential energy', 'unit: J or MJ'],
    keywords: ['GPE', 'gravitational', 'potential', 'mgh', '450', 'height', '920', '4 140 000', '4140000', 'joule', 'MJ'],
    feedbackHit: 'Correctly calculated the gravitational potential energy released, including units.',
    feedbackMiss: 'Steps: (1) Δh = 540 − 90 = 450 m; (2) use ΔEp = mgh; (3) = 920 × 10 × 450 = 4,140,000 J = 4.14 MJ. The unit must match the numerical value given.',
  } as MSEntry,

  q2c: {
    marks: 3,
    exemplar: 'Power = energy / time taken [1]. = 9 200 000 / 460 = 20 000 W [1]. Correct consistent unit: W or J s⁻¹ or kW or MW [1].',
    keyConcepts: ['P = E / t', 'power in watts', 'unit consistency'],
    keywords: ['power', 'P = E/t', '9200000', '460', '20000', '20 000', 'watts', 'W', 'kW'],
    feedbackHit: 'Correctly calculated power and included a consistent unit.',
    feedbackMiss: 'P = E / t = 9,200,000 J ÷ 460 s = 20,000 W = 20 kW. The unit must be consistent with your numerical answer (e.g. if you write 20 then use kW).',
  } as MSEntry,

  // ── Q3: Light and space ──
  q3a: {
    marks: 2,
    exemplar: 'Star — Emits; Moon — Reflects; Planet — Reflects; Satellite — Reflects [3 correct = 1 mark; all 4 correct = 2 marks].',
    keyConcepts: ['stars emit light', 'moon reflects sunlight', 'planets reflect sunlight', 'satellites reflect sunlight'],
    keywords: ['emit', 'reflect', 'star', 'moon', 'planet', 'satellite', 'light source'],
    feedbackHit: 'Correctly classified all objects as emitting or reflecting light.',
    feedbackMiss: 'Only stars (and other luminous objects like the Sun) emit their own light. The Moon, planets, and satellites only reflect light from the Sun.',
  } as MSEntry,

  q3b: {
    marks: 1,
    exemplar: 'Orbital period of 1 day / 24 hours, which matches the Earth\'s rotation.',
    keyConcepts: ['geostationary orbit', '24 hour period', 'matches Earth rotation'],
    keywords: ['24 hours', '1 day', 'period', 'orbit', 'rotation', 'same'],
    feedbackHit: 'Correctly stated the 24-hour orbital period of geostationary satellites.',
    feedbackMiss: 'Geostationary satellites have an orbital period of exactly 1 day (24 hours), which matches the Earth\'s rotation, so they stay above the same point on Earth.',
  } as MSEntry,

  q3c: {
    marks: 1,
    exemplar: 'Weather forecasting OR satellite phone communication OR GPS / navigation OR military intelligence (any one).',
    keyConcepts: ['geostationary satellite applications', 'weather forecasting', 'GPS', 'satellite phones'],
    keywords: ['weather', 'forecasting', 'GPS', 'navigation', 'phone', 'communication', 'military'],
    feedbackHit: 'Gave a valid application of geostationary satellites.',
    feedbackMiss: 'Applications of geostationary satellites include: weather forecasting, satellite phone communication, GPS navigation, and military intelligence. Do not give TV broadcasting — that was already mentioned in the question.',
  } as MSEntry,

  q3d: {
    marks: 3,
    exemplar: 'Convert 36 000 km to 3.6 × 10⁷ m [1]. Total distance = 2 × 3.6 × 10⁷ = 7.2 × 10⁷ m [1]. t = d / c = 7.2 × 10⁷ / 3 × 10⁸ = 0.24 s [1].',
    keyConcepts: ['convert km to m', 'signal travels up AND down', 't = d / c', 'speed of light 3 × 10⁸ m/s'],
    keywords: ['convert', 'km', 'm', '36000', '3.6 × 10⁷', 'two-way', '7.2 × 10⁷', 't = d/c', '0.24'],
    feedbackHit: 'Correctly calculated the two-way signal travel time.',
    feedbackMiss: 'Three steps: (1) convert 36,000 km → 3.6 × 10⁷ m; (2) the signal travels up AND back, so total distance = 2 × 3.6 × 10⁷ = 7.2 × 10⁷ m; (3) t = d/c = 7.2 × 10⁷ / 3 × 10⁸ = 0.24 s.',
  } as MSEntry,

  q3e: {
    marks: 2,
    exemplar: 'In the past the galaxies would have been closer together [1]. Which is evidence for the Big Bang model OR a description of the Big Bang model [1].',
    keyConcepts: ['galaxies moving apart', 'universe expanding', 'Big Bang evidence', 'galaxies closer in the past'],
    keywords: ['Big Bang', 'galaxies', 'closer', 'past', 'expanding', 'universe', 'evidence', 'origin'],
    feedbackHit: 'Correctly linked galaxies moving apart to Big Bang evidence.',
    feedbackMiss: 'Two ideas: (1) if galaxies are moving apart now, then in the past they must have been closer together; (2) this is evidence for the Big Bang — the universe started from a single point and has been expanding ever since.',
  } as MSEntry,

  // ── Q4: Scrap-metal lifting electromagnet ──
  q4a: {
    marks: 1,
    exemplar: 'How does the current flowing through the coil affect the strength of the electromagnet / the weight of paper clips it can support?',
    keyConcepts: ['research question', 'current as independent variable', 'electromagnet strength as dependent variable'],
    keywords: ['current', 'affect', 'electromagnet', 'strength', 'weight', 'paper clips', 'research question'],
    feedbackHit: 'Correctly stated a research question with current as IV and electromagnet strength as DV.',
    feedbackMiss: 'The research question must name the independent variable (current) and what you are measuring (electromagnet strength / weight supported). E.g. "How does the current affect the strength of the electromagnet?"',
  } as MSEntry,

  q4b: {
    marks: 4,
    exemplar: 'Independent: Current only [1]. Dependent: Total weight of paper clips supported only [1]. Control variables: Diameter of iron rod AND Number of turns AND Total length AND Size of paper clips [1 for 2 correct; 2 for all 4 correct].',
    keyConcepts: ['current = independent variable', 'weight of clips = dependent variable', 'diameter/turns/length/size = control variables'],
    keywords: ['independent', 'current', 'dependent', 'weight', 'control', 'diameter', 'turns', 'length', 'size'],
    feedbackHit: 'Correctly classified all six variables as independent, dependent, or control.',
    feedbackMiss: 'Independent = only Current (what you change). Dependent = only Total weight of paper clips (what you measure). Everything else (diameter of iron rod, number of turns, total length, size of clips) = Control (kept the same).',
  } as MSEntry,

  q4c: {
    marks: 3,
    exemplar: 'If: the current increases [1]. Then: the weight of paper clips supported will increase / the strength of the electromagnet will increase [1]. Because: a greater current produces a stronger electromagnetic field [1].',
    keyConcepts: ['if-then-because hypothesis structure', 'current increases → weight increases', 'greater current → stronger electromagnetic field'],
    keywords: ['if', 'then', 'because', 'current', 'increase', 'weight', 'stronger', 'electromagnetic', 'field'],
    feedbackHit: 'Correctly structured the hypothesis with if/then/because and correct scientific reasoning.',
    feedbackMiss: 'Structure as If→Then→Because: If [current increases], then [weight of clips supported increases], because [greater current creates a stronger electromagnetic field]. All three parts needed for full marks.',
  } as MSEntry,

  q4d: {
    marks: 2,
    exemplar: 'Ammeter selected [1] to measure the size of the current [1]. OR balance/scale selected [1] to measure the total weight of the paper clips supported [1].',
    keyConcepts: ['ammeter measures current', 'balance measures weight', 'appropriate equipment for measurement'],
    keywords: ['ammeter', 'current', 'measure', 'balance', 'weigh', 'equipment'],
    feedbackHit: 'Correctly identified an appropriate piece of equipment and explained its purpose.',
    feedbackMiss: 'You need either: an ammeter to measure the current, OR a balance/scale to measure the weight of paper clips supported. State both the equipment name and its specific purpose.',
  } as MSEntry,

  q4e: {
    marks: 2,
    exemplar: 'Balance selected [1]. Greatest / most appropriate range given as justification, so it can measure the full range of weights as more clips are added [1].',
    keyConcepts: ['balance with greatest range', 'measurement range justification'],
    keywords: ['balance', 'greatest range', 'range', 'appropriate', 'justify'],
    feedbackHit: 'Correctly selected the balance with the greatest range and justified the choice.',
    feedbackMiss: 'Select the balance that has the greatest measurement range. Justify: it needs to measure a range of weights from small to larger values as more paper clips are added.',
  } as MSEntry,

  // ── Q5: Steel washer investigation ──
  q5a: {
    marks: 3,
    exemplar: 'Raw data table with header row and units [1]. Data correct: 1.0→6, 2.0→3, 3.0→2, 4.0→1, 5.0→1, 6.0→1 [1]. Data in ascending or descending order [1].',
    keyConcepts: ['raw data table', 'headers with units', 'data recorded correctly', 'ordered data'],
    keywords: ['table', 'headings', 'units', 'length', 'washers', 'ascending', 'descending', 'cm'],
    feedbackHit: 'Correctly presented raw data in a properly formatted table.',
    feedbackMiss: 'Raw data table needs: (1) a header row with column names and units (e.g. Length of coil / cm; Number of washers), (2) all 6 data rows correct (1.0→6, 2.0→3, 3.0→2, 4.0→1, 5.0→1, 6.0→1), (3) data in order.',
  } as MSEntry,

  q5b: {
    marks: 4,
    exemplar: 'Processed table headers: Turns per centimetre / cm⁻¹ AND Weight of washers / N [1]. Correct turns/cm for all rows: 6.0, 3.0, 2.0, 1.5, 1.2, 1.0 [1]. Correct weights for all rows: 1.8, 0.9, 0.6, 0.3, 0.3, 0.3 N [1]. All values to 1 d.p. [1].',
    keyConcepts: ['turns per centimetre = turns ÷ length', 'weight = washers × 0.3 N', 'processed data table', 'correct units'],
    keywords: ['turns per cm', 'weight', 'N', '0.3', 'calculate', 'divide', 'multiply', 'table', 'cm⁻¹'],
    feedbackHit: 'Correctly calculated and presented all processed data values.',
    feedbackMiss: 'Calculate: turns/cm = number of turns ÷ length in cm. Weight = washers × 0.3 N. Values: 6.0 cm⁻¹ → 1.8 N; 3.0 → 0.9 N; 2.0 → 0.6 N; 1.5 → 0.3 N; 1.2 → 0.3 N; 1.0 → 0.3 N. All to 1 d.p.',
  } as MSEntry,

  q5c: {
    marks: 2,
    exemplar: 'This would lead to more accurate data [1]. Because small steel tacks (0.01 N each) produce a more precise measure of the weight supported than large 0.3 N washers [1].',
    keyConcepts: ['small increments give more precision', 'accurate data', '0.01 N increments vs 0.3 N'],
    keywords: ['accurate', 'precise', 'small', 'increment', '0.01', 'better', 'measurement', 'resolution'],
    feedbackHit: 'Correctly justified why small tacks give better data.',
    feedbackMiss: 'Two marks: (1) the data will be more accurate/precise, (2) because each small tack adds only 0.01 N (vs 0.3 N per large washer) — this gives a much finer measurement scale, so you can detect smaller changes in the weight supported.',
  } as MSEntry,

  q5d: {
    marks: 4,
    exemplar: 'Graph has a straight line [1] which goes through the origin [1] indicating the relationship is proportional [1]. This supports the given relationship (weight ∝ turns per cm at constant current) [1].',
    keyConcepts: ['straight line through origin', 'proportional relationship', 'graph supports prediction', 'direct proportion'],
    keywords: ['straight line', 'origin', 'proportional', 'direct proportion', 'supports', 'relationship'],
    feedbackHit: 'Correctly described the graph and explained what it means for the relationship.',
    feedbackMiss: 'Describe the graph: straight line passing through the origin. This shows a directly proportional relationship (weight ∝ turns/cm). Since the formula says weight ∝ current × turns/cm, and current is constant, this confirms the relationship.',
  } as MSEntry,

  q5e: {
    marks: 2,
    exemplar: 'Shape: straight line through the origin (same proportional shape) [1]. Gradient: would be different / the gradient would change because current is a different variable with a different constant of proportionality [1].',
    keyConcepts: ['same proportional shape', 'straight line through origin', 'gradient changes with different variable'],
    keywords: ['straight line', 'origin', 'same shape', 'gradient', 'different', 'proportional', 'current'],
    feedbackHit: 'Correctly predicted same shape but different gradient.',
    feedbackMiss: 'Since weight ∝ current × turns/cm, if current is the IV (and turns/cm is fixed), the graph would still be a straight line through the origin (proportional). However the gradient would be different because it now represents a different constant of proportionality.',
  } as MSEntry,

  // ── Q6: Capillary action ──
  q6a: {
    marks: 2,
    exemplar: 'Height for tube C measured correctly: 14.0 ± 0.5 mm [1]. Table completed correctly with diameter 2.0 mm, 1/diameter 0.50 mm⁻¹, height 14.0 mm [1].',
    keyConcepts: ['measure height from diagram', 'complete data table', '1/diameter column'],
    keywords: ['measure', 'height', '14', 'diameter', '2.0', '0.50', 'table', 'complete'],
    feedbackHit: 'Correctly measured tube C height and completed the table.',
    feedbackMiss: 'Read the height of water in tube C from the diagram — it should be approximately 14.0 mm. Then complete the row: diameter = 2.0 mm, 1/diameter = 1/2.0 = 0.50 mm⁻¹, height ≈ 14.0 mm.',
  } as MSEntry,

  q6b: {
    marks: 4,
    exemplar: 'Point C plotted correctly at (0.50, 14.0) [1]. Line of best fit drawn [1]. Approximately equal distribution of points above and below the line [1]. Both axes labelled with units: x = 1/diameter / mm⁻¹, y = Height of liquid / mm [1].',
    keyConcepts: ['plot data point', 'line of best fit', 'axis labels with units', 'even distribution around line'],
    keywords: ['plot', 'point', 'line of best fit', 'axis', 'label', '1/diameter', 'mm⁻¹', 'height', 'mm'],
    feedbackHit: 'Correctly plotted the point, drew a line of best fit, and labelled the axes.',
    feedbackMiss: 'Plot C at (0.50, 14.0). Draw a straight line of best fit with roughly equal numbers of points above and below. Label x-axis: "1/diameter / mm⁻¹" and y-axis: "Height of liquid / mm".',
  } as MSEntry,

  q6c: {
    marks: 3,
    exemplar: 'Two points from line of best fit chosen with Δy ≥ 20 [1]. Gradient = Δy / Δx shown [1]. Final value = 28 ± 4 (units not required, accept 24–32) [1].',
    keyConcepts: ['gradient = Δy / Δx', 'use points on line not data points', 'capillary constant ≈ 28'],
    keywords: ['gradient', 'Δy', 'Δx', 'two points', 'line', 'capillary constant', '28', '24', '32'],
    feedbackHit: 'Correctly calculated the capillary constant as the gradient of the line.',
    feedbackMiss: 'Choose two points that lie ON the line (not data points). Calculate gradient = Δy/Δx = change in height / change in (1/diameter). Your answer should be approximately 28 (units: mm ÷ mm⁻¹ = mm², but units are not required).',
  } as MSEntry,

  q6d: {
    marks: 2,
    exemplar: 'Height is inversely proportional to diameter [1]. For a 100 m tree, the diameter of capillary tubes would need to be unrealistically / extremely small for capillary action alone to explain the height [1].',
    keyConcepts: ['inversely proportional relationship', 'extremely small diameter needed for large heights', 'capillary action insufficient for 100 m trees'],
    keywords: ['inversely proportional', 'small diameter', '100', 'unrealistic', 'tree', 'height', 'capillary alone'],
    feedbackHit: 'Correctly used the inverse relationship to show capillary action alone is insufficient.',
    feedbackMiss: 'From the experiment: height ∝ 1/diameter. For a tree 100 m tall, you would need an incredibly small diameter capillary tube — unrealistically small. Therefore capillary action alone cannot be the only mechanism for water transport in tall trees.',
  } as MSEntry,

  // ── Q7: Design investigation (salt concentration) ──
  q7a: {
    marks: 13,
    exemplar: 'Full experimental plan: Research question identifying salt concentration (IV) and capillary height (DV). Variables: IV = salt concentration, DV = height of water rise, CVs = tube diameter, water temperature, tube material. Equipment includes balance, measuring cylinder, capillary tubes, ruler, beaker, salt — each with stated purpose. Detailed method that will produce relevant data. At least 5 concentration increments AND 3 trials with plan to calculate mean.',
    keyConcepts: ['research question', 'IV = salt concentration', 'DV = height', 'controlled variables', 'balance', 'measuring cylinder', 'capillary tube', 'ruler', 'method', 'five increments', 'three trials', 'mean'],
    keywords: ['concentration', 'salt', 'height', 'IV', 'DV', 'control', 'balance', 'cylinder', 'capillary', 'ruler', 'method', 'repeat', 'mean', 'trials', 'increments'],
    feedbackHit: 'Provided a complete and detailed experimental design covering all required elements.',
    feedbackMiss: 'Include: (1) Research question with IV=salt concentration, DV=height; (2) list IV, DV, and at least one CV (tube diameter); (3) list equipment with purpose (balance + cylinder to make solutions, ruler for height, capillary tube, beaker); (4) detailed method; (5) at least 5 different concentrations and 3 trials per concentration to calculate mean.',
  } as MSEntry,

  // ── Q8: Maglev trains ──
  q8a: { type: 'mcq', correct: 2 } as MCQEntry, // Steel (Aluminium=0, Brass=1, Steel=2, Zinc=3)

  q8b: {
    marks: 2,
    exemplar: 'One correct identification [1]: all three correct [2]. Levitation = blue (upward force); Guidance = green (sideways force); Propulsion = red (forward force).',
    keyConcepts: ['levitation = upward magnetic force', 'guidance = sideways magnetic force', 'propulsion = forward force'],
    keywords: ['levitation', 'guidance', 'propulsion', 'upward', 'sideways', 'forward', 'blue', 'green', 'red'],
    feedbackHit: 'Correctly identified all three magnetic forces in the maglev diagram.',
    feedbackMiss: 'Three forces: Levitation (blue) = the upward force that lifts the train off the track; Guidance (green) = the sideways force that keeps the train centred on the track; Propulsion (red) = the forward force that drives the train forward.',
  } as MSEntry,

  q8c: {
    marks: 2,
    exemplar: 'Any two reasonable advantages: speed can be higher than conventional trains / less energy wasted (as heat) / less wear and tear on components / lower maintenance costs for train or track.',
    keyConcepts: ['higher speed possible', 'less energy wasted', 'less wear and tear', 'lower maintenance'],
    keywords: ['speed', 'faster', 'energy', 'waste', 'wear', 'maintenance', 'advantage', 'friction', 'lower'],
    feedbackHit: 'Gave two valid advantages of lower frictional forces.',
    feedbackMiss: 'Lower friction means: (1) the train can travel at higher speeds (less resistance to motion), and (2) less energy is wasted as heat. Other valid answers: less wear on components, lower maintenance costs, quieter operation.',
  } as MSEntry,

  q8d: {
    marks: 3,
    exemplar: 'Increase in passengers → increased weight / increased load [1]. This decreases the distance between the magnets [1]. Hence the repelling force increases (from the graph, smaller distance → larger force) [1].',
    keyConcepts: ['more passengers → more weight', 'greater weight → smaller gap between magnets', 'smaller gap → larger repelling force (from graph)'],
    keywords: ['passengers', 'weight', 'load', 'distance', 'gap', 'smaller', 'repelling force', 'increases', 'graph'],
    feedbackHit: 'Correctly traced the three-step chain from passengers to repelling force using the graph.',
    feedbackMiss: 'Three-step chain: (1) more passengers → greater total weight/load on the train; (2) this extra weight pushes the train closer to the track → distance between magnets decreases; (3) from the graph, as distance decreases, the repelling force increases significantly.',
  } as MSEntry,

  // ── Q9: Transportation evaluation ──
  q9a: {
    marks: 15,
    exemplar: 'Full evaluation comparing chosen method (commuter rail / express bus / bicycle) vs driving: economic advantages AND disadvantages; environmental advantages AND disadvantages; comfort comparison; safety comparison with data; justified final recommendation.',
    keyConcepts: ['economic comparison', 'environmental comparison', 'comfort evaluation', 'safety evaluation', 'justified recommendation', 'use infographic data'],
    keywords: ['economic', 'cost', 'price', 'environmental', 'CO2', 'emissions', 'comfort', 'safety', 'recommend', 'compare', 'evaluate', 'advantage', 'disadvantage'],
    feedbackHit: 'Provided a comprehensive, balanced evaluation with specific data and a justified recommendation.',
    feedbackMiss: 'Structure your answer around five categories: (1) economic pros and cons vs driving; (2) environmental pros and cons vs driving; (3) comfort comparison; (4) safety comparison using specific data from the infographic; (5) a final recommendation with clear justification. Use data from the infographic throughout.',
  } as MSEntry,
}
