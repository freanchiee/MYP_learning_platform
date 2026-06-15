# Physics Variant Artefact — Scientific Audit

18 physics paper-pairs (v1+v2) audited for scientific correctness, markscheme consistency, and SVG-vs-Sim fit.

**Totals: 17 critical · 9 major · 31 minor**

> **RESOLUTION:** All 17 critical + 9 major findings (9 papers: may-2017/18/19/23/25, nov-2016/18/19/20)
> were FIXED and independently re-audited. Policy = prefer correct-by-construction Sims where they fit
> (may-2023 waveform → WaveSim; may-2018 energy graph → LineGraph; may-2019 Q3c OrbitSim → static SVG for
> the draw-arrows task) and recompute every coordinate/value from the markscheme for SVG-only figures
> (refraction angles via Snell's law; instrument needles; fission = 2 neutrons; balanced free-body;
> cannonball paths matched to the answer key; capillary heights; may-2017 added the missing Graph 3).
> tsc=0, no multi-line SVGs, render-verified. The 31 cosmetic minors below are intentionally deferred.

## CRITICAL

- **physics-may-2018 [v1] Q6a** (GenericSVG)
  - Issue: Stopwatch hand position identical to v2 Q6a despite different times (11.5 s vs 13.2 s). Hand coordinates are (160,172)→(244,138) in both, making both display the same incorrect time (~8.5 s based on geometry) instead of showing different readings.
  - Fix: Recalculate hand endpoint for 11.5 s on a 0-45 s scale. For 11.5 s: fraction=11.5/45=0.2556→92° clockwise from 12 o'clock→endpoint ≈(160+104sin(92°), 172-104cos(92°))≈(264, 170). Update SVG line element accordingly.
- **physics-may-2018 [v2] Q6a** (GenericSVG)
  - Issue: Stopwatch hand position identical to v1 Q6a. Should show 13.2 s but instead uses same coordinates as 11.5 s variant. Hand at (160,172)→(244,138) is fixed while variant time differs.
  - Fix: Recalculate hand for 13.2 s on 0-45 scale. Fraction=13.2/45=0.293→105.6° from 12 o'clock→endpoint≈(160+104sin(105.6°),172-104cos(105.6°))≈(270, 144). Update SVG line element.
- **physics-may-2018 [v1] Q7 (task a, c, e)** (GenericSVG)
  - Issue: India energy consumption graph: world average line (orange polyline) is plotted at y≈80 pixels, which represents ~2240 kWh/person at 2005. Should represent ~1000 kWh/person. This is ~2.2× the correct value, making the gap between India (600) and world average appear much smaller than reality. Students using this graph for Q7c calculations would read wrong world values.
  - Fix: Replot world average line with y-coordinates: 1975: y≈240 (200 kWh), 1985: y≈170 (800 kWh), 1995: y≈140 (1000 kWh), 2005: y≈130 (1050 kWh). Recalculate polyline points attribute with corrected y values while keeping x fixed at 80, 190, 300, 410.
- **physics-may-2018 [v2] Q7 (task a, c, e)** (GenericSVG)
  - Issue: Brazil energy consumption graph: world average line (orange polyline) plotted at y≈80 at 2005, representing ~2240 kWh/person. Should be ~1500 kWh/person. Misrepresents global energy consumption patterns by showing world average too high. Affects graph reading for Q7c.
  - Fix: Replot world line with corrected y values: 1975: y≈245 (175 kWh), 1985: y≈185 (1050 kWh), 1995: y≈160 (1250 kWh), 2005: y≈150 (1350 kWh). Keep x at 80, 190, 300, 410.
- **physics-may-2019-v1 [v2] Q5 Data Table (caption and part b options)** (DataTable)
  - Issue: The first data row states 'radius = 3.5 cm', and the widget options for part (b) claim the correct area is '76 cm²'. However, πr² = π × 3.5² ≈ 38.5 cm², not 76 cm². The markscheme confirms 76 cm² as the intended answer, but this is a mathematical error: 76 cm² would correspond to a radius of ~4.9 cm, not 3.5 cm. Students reading this data will be confused or misled about the correct conversion formula.
  - Fix: Either (1) correct the radius to ~4.9 cm (so that πr² ≈ 76 cm²), or (2) correct the answer in part (b) options and markscheme to 38.5 cm² (or 39 cm² rounded). The most practical fix: change 'radius = 3.5 cm' to 'radius = 4.9 cm' or 'radius = √(76/π) cm' to make 76 cm² correct.
- **physics-may-2019-v1 [v1] Q5 Data Table (caption)** (DataTable)
  - Issue: The caption states 'The first canopy was recorded as a radius (2.0 cm) rather than an area — its CSA must be converted to an area in part (b), giving 50 cm² for the results table.' But πr² = π × 2.0² ≈ 12.57 cm², not 50 cm². This is a major calculation error: 50 cm² would correspond to radius √(50/π) ≈ 3.99 cm ≈ 4 cm. The data table shows the first row as 'radius = 2.0 cm', '28 m/s'. Students will try to reconcile the caption claim with the actual calculation and get conflicting information.
  - Fix: Either (1) correct the radius to ~4 cm (so πr² ≈ 50 cm²), or (2) correct the caption to state 'giving 13 cm² for the results table' (using πr² ≈ 12.57). The data and caption must be internally consistent. Most practical: change 'radius = 2.0 cm' to 'radius = 4.0 cm' so that π × 4² ≈ 50 cm².
- **physics-may-2023-v1 [v1 and v2] Q7b** (GenericSVG)
  - Issue: Waveform selection SVG is IDENTICAL in both variants, but v1 has target frequency 0.50 Hz (T=2.0 s) and v2 has 0.63 Hz (T=1.6 s). Both papers claim answer C is correct, but if the SVG waveforms are identical, one answer must be wrong. Students in v2 will select waveform C (which has T=2.0 s) and mark it as frequency 0.63 Hz, which contradicts the visual period they see. This breaks variant isomorphism.
  - Fix: Create two separate GenericSVG artefacts for Q7b: one with four waveforms where C has period 2.0 s (for v1), and another where C has period 1.6 s (for v2). The waveforms must be numerically distinct so their periods visually match their frequencies.
- **physics-may-2025-v1 [v1] Q2 task a (angler/fish refraction)** (GenericSVG)
  - Issue: Refraction ray angles violate Snell's law. Calculated angles: i≈52° (water), r≈64° (air). Snell check: 1.33×sin(52°)=1.05, which exceeds the maximum sine value of 1.0 — indicating angle of incidence is beyond the critical angle (~49°) for total internal reflection. The diagram shows refraction occurring when total internal reflection should occur instead.
  - Fix: Recalculate ray geometry to satisfy Snell's law with n_water=1.33. For a realistic air-water refraction, use angles like i=30° (water), r≈48° (air), which gives 1.33×sin(30°)=0.665≈sin(48°). Redraw the ray paths to match these corrected angles.
- **physics-may-2025-v1 [v2] Q2 task a (swimmer/coin refraction)** (GenericSVG)
  - Issue: Refraction ray angles do not satisfy Snell's law. Calculated angles: i≈38° (water), r≈67° (air). Snell check: 1.33×sin(38.3°)=0.824 but sin(67°)=0.921. The ratio 0.824/0.921≈0.89 does not match the expected 1.0 for air-water refraction. The angles are qualitatively correct (bending away from normal) but quantitatively incorrect.
  - Fix: Adjust ray paths to satisfy Snell's law: 1.33×sin(i)=sin(r). For example, if i=40° (water), then sin(r)=1.33×sin(40°)=0.855, giving r≈59° (air). Redraw the refracted ray to match this corrected angle.
- **physics-may-2025-v1 [v2] Q3 task c (nuclear fission diagram)** (GenericSVG)
  - Issue: Diagram shows 3 neutron arrows but the nuclear equation ²³⁶U → ¹⁴⁴Cs + ⁹⁰Rb + ?n requires exactly 2 neutrons (236 = 144 + 90 + 2). This directly contradicts the markscheme answer ('q3_c': 2 neutrons) and could cause student confusion about neutron conservation.
  - Fix: Remove one neutron arrow from the diagram, leaving only 2. The three paths should be: one neutron (top), one neutron (bottom), and one daughter nucleus (middle). Verify the line count: only 2 lines with stroke-width="1.5" should be red (neutrons).
- **physics-may-2025-v1 [v1 & v2] Q7 task a (cannonball trajectory matching)** (GenericSVG)
  - Issue: Inconsistency between diagram and answer key. Path C is drawn as a perfect circular orbit (dashed circle at r=150), but the markscheme assigns C = 0 m/s (falls straight down). A cannonball at 0 m/s falls vertically, not in a circular arc. The diagram visually contradicts the intended answer.
  - Fix: Either: (a) redraw the diagram to include a 5th straight-down path for C=0 m/s and relabel paths accordingly, OR (b) change the markscheme to assign B=7800 m/s to path C (the circular orbit) and reassign the other speeds. The current diagram-to-answer mismatch is confusing and pedagogically harmful.
- **physics-nov-2016-v1-and-v2 [v1] Q1 task c** (GenericSVG)
  - Issue: Force diagram Diagram 3 (marked as correct) shows unbalanced forces: forward arrow 46px (stroke-width 2.5) is 2.7× larger than backward arrow 17px (stroke-width 1.5). At constant velocity, Newton's First Law requires net force = zero, meaning forces must be balanced. This diagram contradicts the physics of constant velocity motion.
  - Fix: Replace with a diagram showing either no arrows OR two equal-length arrows in opposite directions. The correct answer should be a diagram representing zero net force (e.g. two identical-length horizontal arrows pointing opposite directions, or no force arrows at all).
- **physics-nov-2016-v1-and-v2 [v2] Q1 task c** (GenericSVG)
  - Issue: Same as V1: Force diagram Diagram 3 is marked correct but shows unbalanced forces. The forward arrow (46px) far exceeds the backward arrow (17px), violating Newton's First Law at constant velocity where ΣF must equal zero.
  - Fix: Replace with a physically correct diagram showing balanced forces (equal-length opposite arrows) or no net force.
- **physics-nov-2016-v1-and-v2 [v2] Q2 task b and d** (GenericSVG)
  - Issue: Oscilloscope SVG for wave C shows 8 complete cycles (480 pixels total width ÷ 60-pixel cycle spacing = 8 cycles), implying frequency f = 8 Hz. However, the markscheme answer for Q2d expects f = 4 Hz, leading to λ = 330/4 = 82.5 m. A student reading the SVG correctly will count 8 cycles and compute λ = 330/8 = 41.25 m, which contradicts the marked answer. The SVG path should show only 4 cycles (120-pixel spacing) to match the 4 Hz expected answer.
  - Fix: Fix the wave C SVG path: replace `q30.0,-30 60.0,0 t60.0,0 t60.0,0 t60.0,0 t60.0,0 t60.0,0 t60.0,0` (8 cycles) with `q30.0,-30 120.0,0 t120.0,0 t120.0,0 t120.0,0` (4 cycles) to align the visual display with the markscheme answer of f=4 Hz and λ=82.5 m.
- **physics-nov-2018 [v1] Q4d** (GenericSVG)
  - Issue: Pressure gauge needle is positioned at angle 326.3° from center, which corresponds to approximately 65 kPa on the dial, not the expected 56 ± 0.5 kPa. The needle does not visually align with 'just over half-way between 50 and 75 kPa' as stated in the caption and markscheme. A student reading this gauge would obtain an incorrect value (off by ~9 kPa), leading to wrong answers and incorrect marking.
  - Fix: Recalculate and redraw the needle to point to the correct angle. For a 56 kPa reading on a 0-100 kPa dial with marks at 0(222°), 25(177°), 50(270°), 75(3°), 100(90°), the needle should be positioned at approximately 267.6° (56.3° clockwise from the 50 mark at 270°, or ~270° - 2.4° = 267.6°). Update the SVG coordinates from <line x1="150" y1="150" x2="228" y2="98" ...> to point to the correct angle.
- **physics-nov-2018 [v2] Q4d** (GenericSVG)
  - Issue: Pressure gauge needle is positioned at angle 216.5° from center, which corresponds to approximately 28 kPa on the dial, not the expected 38 ± 0.5 kPa. The needle should read 'just below half-way between 20 and 60 kPa' per the caption, but the actual position is too far toward the 20 kPa mark. A student reading this gauge would obtain a significantly incorrect value (off by ~10 kPa lower), leading to wrong answers and mis-marking.
  - Fix: Recalculate and redraw the needle to point to the correct angle. For a 38 kPa reading on a 0-80 kPa dial with marks at 20(180°), 40(270°), 60(0°), 80(90°), the needle should be positioned at approximately 234.0° (54° clockwise from the 20 mark at 180°, following the proportional scale). Update the SVG coordinates from <line x1="150" y1="150" x2="80" y2="98" ...> to point to the correct angle.
- **physics-nov-2019-v1 [v1] Q5f** (GraphSim)
  - Issue: The graph data point (0.80 s, 1000 m) lies above the expected line of best fit for a ~1500 m/s gradient. At this gradient, 0.80 s should correspond to ~1200 m, not 1000 m. For a 1000 m distance, the correct time would be ~0.67 s. The markscheme states 'time is too low — it should be higher,' but the graph shows the time is actually too HIGH. The markscheme diagnosis is backwards: it should say 'time is too high — it should be lower.'
  - Fix: Correct the markscheme exemplar for q5f. Change from 'the time is too low — it should be higher' to 'the time is too high — it should be lower' to match the actual graph data. OR correct the graph point from (0.80, 1000) to approximately (0.67, 1000) or (0.80, 1200) to be consistent with the markscheme language.

## MAJOR

- **physics-may-2017-v1 [v1] Q7/Q8 artefacts — Graph 1 and Graph 4 (stopping distance vs W and 1/W²)** (GenericSVG)
  - Issue: The graphs show only TWO graph panels (Graph 1 and Graph 4) but the question stem mentions FOUR graphs (1, 2, 3, and 4). The critical Graph 3 (stopping distance vs 1/W), which should show a straight line through the origin to support the d ∝ 1/W deduction, is MISSING from the visual. This means students cannot directly verify the proportionality relationship from the provided artefact — they must infer it. Markscheme Q8e requires students to 'Deduce the relationship using the graphs' but Graph 3 is not shown.
  - Fix: Include all four graphs (1, 2, 3, 4) in the artefact, or explicitly state that Graph 3 (vs 1/W) is a straight line through origin in the question text. As-is, students are hampered in their deduction. This is a CRITICAL GAP for criterion C (data analysis) assessment.
- **physics-may-2017-v1 [v2] Q7/Q8 artefacts — Graph 1 and Graph 4 (stopping distance vs R and 1/R²)** (GenericSVG)
  - Issue: SAME ISSUE as v1: The artefact shows only Graph 1 (stopping distance vs cone radius R, a curve) and Graph 4 (stopping distance vs 1/R², also a curve). The critical Graph 3 (stopping distance vs 1/R), which should be a STRAIGHT LINE through the origin, is MISSING. Without Graph 3 visible, students cannot directly see the linear relationship that proves d ∝ 1/R. Markscheme Q8e requires deduction using 'the four graphs' but the crucial proof graph is absent from the visual.
  - Fix: Provide all four graphs in the figure, with Graph 3 (vs 1/R) clearly shown as a straight line through the origin. This is essential for Criterion C (interpreting and deducing relationships from data).
- **physics-may-2019-v1 [v1] Q3c - Apophis Force Diagram** (OrbitSim)
  - Issue: OrbitSim is used here, which is excellent for interactive visualization. However, the task explicitly asks students to 'Draw arrows to represent the force of attraction' at positions A and B. An interactive Sim is more engaging but may not teach the static drawing skill the examination requires. Additionally, the Sim shows the orbit dynamically, so students cannot easily identify and label fixed positions A and B on a static diagram as the question implies.
  - Fix: Replace OrbitSim with a static GenericSVG showing the orbit with positions A and B clearly marked, allowing students to draw arrows at those specific points. Alternatively, keep OrbitSim but add static reference points A and B that remain visible throughout the animation.
- **physics-may-2019-v1 [v2] Q3c - Comet Halley Force Diagram** (OrbitSim)
  - Issue: Same issue as v1 Q3c: OrbitSim is interactive and dynamic, but the question asks students to 'Draw arrows' at specific positions A and B. The dynamic nature makes it hard for a static answer to match the Sim's transient display. A static diagram with marked positions A and B would be more appropriate for a drawing task.
  - Fix: Replace with a static GenericSVG showing an elliptical orbit with positions A (farther) and B (closer) labeled, allowing students to draw force arrows. OrbitSim is better suited to 'observe' or 'identify' tasks, not drawing tasks.
- **physics-may-2023-v1 [v1 and v2] Q3** (GenericSVG; →ParticleSim or none if no atomic-specific Sim available)
  - Issue: Atom diagrams (nitrogen-14 in v1, oxygen-18 in v2) use hand-authored GenericSVG showing nucleus (as coloured circles for protons/neutrons) and electron shells (as orbital circles with electrons). These diagrams are functional but lack interactivity and visual clarity compared to available ParticleSim or a similar interactive atomic-structure tool.
  - Fix: Consider replacing with an interactive Sim that allows students to visualize the 3D atomic structure, electron orbital filling, and nuclear composition. ParticleSim (if adapted for atomic context) or a custom atomic-visualization Sim would be higher quality. However, GenericSVG is acceptable if no Sim exists. Current diagrams are correct but could be higher quality.
- **physics-may-2025-v1 [v1 & v2] Q2 task c (refraction angle diagram)** (GenericSVG)
  - Issue: Snell's law verification: calculated ratio sin(i)/sin(r) = 0.813/0.686 ≈ 1.19, but expected n_water/n_air = 1.33 for air-to-water. The diagram is qualitatively correct (shows bending toward normal in denser medium) but quantitatively inaccurate for Snell's law verification or calculation exercises.
  - Fix: If this diagram is used for Snell's law calculation, recalculate to satisfy 1.33×sin(i)=sin(r). Update angles to i≈41° (air), r≈30° (water) or similar. If used only as a conceptual diagram, add a note that angles are approximate.
- **physics-nov-2019-v1 [v1] Q5e** (GraphSim)
  - Issue: The graph gradient for the distance-time plot using points (0.20, 300), (0.40, 600), (0.80, 1000), (1.20, 1800), (1.60, 2400) yields a slope of approximately (2400-300)/(1.60-0.20) = 1500 m/s. The markscheme states 'Speed = 1480–1520 m s⁻¹,' which is consistent with this. However, the point (0.80, 1000) is a significant outlier that distorts the calculation. Students reading the line of best fit may calculate a different gradient. This anomaly should be flagged in the question stem or caption to avoid student confusion.
  - Fix: Either accept the range 1480–1520 m s⁻¹ in marking and emphasize to students that they should ignore the obvious outlier at (0.80, 1000) when drawing their line of best fit, OR regenerate the graph with the point at approximately (0.67, 1000) or (0.80, 1200) to align the visual with the expected markscheme answer.
- **physics-nov-2020-v1 [v2] Q6, capillary tubes diagram (task a intro artefact)** (GenericSVG)
  - Issue: Tube D drawn at ~11.6 mm height (SVG path y=158 to y=190, scaled by 2.75 units/mm) vs expected 16.0 mm from markscheme (Q6a exemplar, expected reading: 16.0 mm). 27% underestimate. This is the largest tube with the smallest rise — the undersizing distorts the inverse relationship visualization and may cause students to mis-measure tube C (the missing measurement task).
  - Fix: Regenerate the capillary tubes SVG for v2 ensuring tube heights match the capillary constant relationship: height = K / (1/diameter). For v2 K≈32 mm²: A(0.8mm)→40mm, B(1.2mm)→27mm, C(1.6mm)→20mm, D(2.0mm)→16mm. Use a consistent scale with viewBox units. Calculate fill rect heights: y_top = 180 - (height_mm × pixels_per_mm), using the same scale for the measurement axis.
- **physics-nov-2020-v1 [v1] Q6, capillary tubes diagram (task a intro artefact)** (GenericSVG)
  - Issue: Tube A drawn at ~24.5 mm height (SVG path y=100 to y=190, scaled by 3.67 units/mm) vs expected 28.0 mm from markscheme (12% underestimate). Tube D drawn at ~8.7 mm vs expected 11.0 mm (21% underestimate). These proportional errors in the comparison set may distort student perception of the inverse relationship when they measure tube C.
  - Fix: Regenerate the capillary tubes SVG for v1 ensuring tube heights match the capillary constant relationship: height = K / (1/diameter). For v1 K≈28 mm²: A(1.0mm)→28mm, B(1.5mm)→19mm, C(2.0mm)→14mm, D(2.5mm)→11mm. Recompute all fill rect heights using consistent scale. The measurement axis (60 to 190 SVG units = 30 mm) should be used to derive pixel-per-mm scaling: 110 units / 30 mm = 3.67 units/mm. Then for each tube, y_fill_top = 180 - (expected_height_mm × 3.67).

## MINOR

- **physics-may-2016-v1 [v1] Q4 (Phases of Europa)** (GenericSVG; →OrbitSim)
  - Issue: Orbital phase diagram uses hand-authored SVG where an interactive OrbitSim would be more pedagogically effective and allow students to rotate and observe phases dynamically.
  - Fix: Replace with OrbitSim configured for: Jupiter (central body), Europa (satellite), Earth observer viewpoint. Allows students to rotate orbit and see phase changes in real time.
- **physics-may-2016-v1 [v2] Q4 (Phases of Venus)** (GenericSVG; →OrbitSim)
  - Issue: Orbital phase diagram uses hand-authored SVG where an interactive OrbitSim would be more pedagogically effective and allow students to rotate and observe phase changes dynamically.
  - Fix: Replace with OrbitSim configured for: Sun (central body), Venus (inner planet), Earth observer viewpoint. Allows rotation to observe full phase cycle.
- **physics-may-2016-v1 [v1] Q7 (V-I characteristic of nichrome wire)** (LineGraph)
  - Issue: The graph correctly shows linear (Ohmic) behaviour with R ≈ 5.0 Ω throughout, but the caption states 'begins to curve slightly above about 8 V as the wire heats up' — the data point at (10V, 1.88A) gives R = 5.3 Ω, which is only a 6% increase. The visual line does NOT noticeably curve; the curvature is overstated in the caption.
  - Fix: Revise caption to: 'The line is straight through the origin (R = 5.0 Ω). Resistance remains approximately constant across the range, showing the nichrome wire is Ohmic.' Remove the curvature reference, as it is not visually evident in the plotted data.
- **physics-may-2017-v1 [v1] Q1 artefact** (GenericSVG)
  - Issue: Visual depiction of star sizes is illustrative but not to scale. Blue hypergiant shown is actually about 1.5× red dwarf in visual diameter, whereas real ratio is ~100× difference in radius between hot massive stars and cool dwarfs.
  - Fix: This is acceptable for a schematic diagram. If precise scaling is desired, add a note 'not to scale' or switch to a diagram that emphasizes relative temperature bands rather than size.
- **physics-may-2017-v1 [v2] Q1 artefact** (GenericSVG)
  - Issue: Red supergiant (Mu Cephei) shown with radius ~2× blue star, but real Mu Cephei radius is ~1000× our Sun (~1500 solar radii), making it vastly larger than most blue stars. Schematic diagram lacks physical scale.
  - Fix: Add 'artist's impression: not to scale' or use a Hertzsprung-Russell diagram approach if exact size relationships matter to the question.
- **physics-may-2017-v1 [v1] Q4 artefact (binary system with exoplanet and habitable zones)** (GenericSVG)
  - Issue: Habitable zones shown as concentric dashed circles around both stars. Geometry is reasonable but the visual width of the habitable zone for the small red star is too thin relative to the blue star — if both stars have similar temperature difference (red ~3000 K, blue ~25,000 K), the red dwarf zone should be closer but the visual width on the plot is disproportionately narrow. Not physics-critical but visually misleading.
  - Fix: Adjust the visual width of habitable zones to reflect relative luminosity differences more accurately, or add labels stating the zone distance ratios.
- **physics-may-2017-v1 [v2] Q4 artefact (Kepler exoplanet detection diagram)** (GenericSVG)
  - Issue: Kepler telescope shown in schematic form. Solar panel and antenna geometries are stylized and not to scale. However, for an apparatus diagram this is acceptable — the diagram correctly illustrates the transit method and light-curve dip concept.
  - Fix: No change needed — apparatus diagram is fit for purpose.
- **physics-may-2017-v1 [v1] Q5 artefact (ramp with steel ball, height 0.45 m)** (GenericSVG)
  - Issue: Ramp angle and ball placement are schematic. Ramp is 80 cm long at 0.45 m height → sin θ = 0.45/0.80 = 0.5625 → θ ≈ 34°. Visual angle in SVG appears close to this (ramp goes from ~(170,180) to ~(558,290) over 388 px horizontal, 110 px vertical → angle ≈ arctan(110/388) ≈ 16°), so the drawn angle is SHALLOWER than actual. Not critical for a qualitative setup diagram.
  - Fix: SVG ramp angle is approximately correct schematically. No physics error — serves as a setup reference.
- **physics-may-2017-v1 [v2] Q5 artefact (ramp with toy car, height 0.80 m)** (GenericSVG)
  - Issue: Ramp is 80 cm long at 0.80 m height. sin θ = 0.80/0.80 = 1.0 → θ = 90° (impossible). This indicates the question intends the ramp to be 80 cm at a 0.80 m HEIGHT, which is physically impossible if the ramp length is the hypotenuse. The SVG shows a much shallower ramp than 90°. This is a setup confusion in the question, not the artefact.
  - Fix: Clarify the question stem: if ramp length is 80 cm and height is 0.80 m, this violates geometry. Intended interpretation: ramp HEIGHT is 0.80 m (possibly implying the ramp sits on a 0.80 m-tall stand). The SVG is qualitatively acceptable for a schematic.
- **physics-may-2017-v1 [v1] Q9 artefact (DataTable of materials)** (DataTable)
  - Issue: Table lists four materials with Young's modulus and density. The data correctly identifies titanium alloy (110 GPa) as the stiffest, carbon fibre (40 GPa) as lighter, and the comparison is straightforward. No physics error. Table format is clean and readable.
  - Fix: No change needed — table is appropriate and accurate.
- **physics-may-2017-v1 [v2] Q9 artefact (DataTable of materials)** (DataTable)
  - Issue: Table compares stainless steel (200 GPa, 7.9 g/cm³) with carbon fibre (40 GPa, 1.6 g/cm³). Stainless steel is much stiffer but very heavy. The data correctly reflects real material properties and supports the question's evaluation of suitability for athletic prosthetics. No error.
  - Fix: No change needed — table is accurate and fit for purpose.
- **physics-may-2017-v1 [v1] Q7 artefact (rectangular sail trolley setup)** (GenericSVG)
  - Issue: The rectangular sail is shown on the trolley with width W marked. The apparatus is schematic but conveys the setup correctly. Ruler scale at bottom is detailed and appropriate for reading distances.
  - Fix: No change needed.
- **physics-may-2017-v1 [v2] Q7 artefact (cone drag device trolley setup)** (GenericSVG)
  - Issue: The cone is shown facing backward (apex toward the front of trolley, base facing backward). This is the correct orientation for a drag device. The radius R is clearly marked. The apparatus diagram is appropriate and schematic.
  - Fix: No change needed.
- **physics-may-2019-v1 [v2] Q4d - Balloon Model Selection artefact** (GenericSVG)
  - Issue: The SVG shows 8 balloon models drawn as circles of varying sizes, but the relative sizes do not accurately represent the stated CSA values. For example, the first balloon (labeled 10 cm² at top-left) appears similar in size to other balloons, but should be noticeably smaller than the 30 cm² balloon (bottom-left). Visual sizing is inconsistent with the numeric labels, which could confuse students selecting the widest CSA range.
  - Fix: Redraw the balloons so their visual areas scale proportionally to their CSA values. A 10 cm² balloon should be ~3× smaller (by linear dimension) than a 30 cm² balloon. Alternatively, use consistent proportional sizing or a scale diagram.
- **physics-may-2019-v1 [v1] Q4d - Parachute Model Selection artefact** (GenericSVG)
  - Issue: Similar to v2 Q4d: the SVG shows 8 parachute models drawn as semi-circles of varying sizes, but visual sizing does not accurately represent CSA values. For instance, a 10 cm² parachute should appear much smaller than a 30 cm² parachute, but visual distinction is weak.
  - Fix: Redraw parachute canopies so visual area scales proportionally to stated CSA. Use radius ∝ √(CSA) for accurate visual comparison.
- **physics-may-2023-v1 [v1] Q1** (GenericSVG)
  - Issue: Oxen pulling plough SVG is illustrative/scene-setting only (no numerical read-off required). Quality is acceptable but the drawing is somewhat crude and childish in proportions. The oxen bodies are simplified geometric shapes.
  - Fix: Consider improving the line quality and anatomical proportions of the oxen bodies, or switch to using realistic reference imagery for a more professional appearance. However, this is NOT load-bearing for the physics question itself.
- **physics-may-2023-v1 [v2] Q1** (GenericSVG)
  - Issue: Donkeys carrying load SVG is illustrative/scene-setting only. Similar to v1 oxen: simplified geometric bodies, proportions are exaggerated (e.g., the load box is too large relative to donkey size). No physics calculation required from this figure.
  - Fix: Improve anatomical realism and proportions of the donkey figures. The load should be proportional to a realistic animal-drawn cart. However, this is cosmetic and does not affect the physics assessment.
- **physics-may-2023-v1 [v1 and v2] Q4e** (GenericSVG; →LineGraph)
  - Issue: Two Boyle's law graphs (volume vs pressure, and 1/V vs pressure) are presented as hand-drawn curves and lines in a GenericSVG. The curves are qualitatively correct but lack precise gridlines and data-point markers, making it difficult for students to read exact values. The graphs are illustrative rather than numerically precise.
  - Fix: Replace Q4e GenericSVG with a DataTable or dual LineGraph component showing the same data points and computed inverse values. This would allow students to read values accurately and understand the linear relationship of 1/V vs P quantitatively. Alternatively, annotate the GenericSVG with gridlines and explicit data-point circles.
- **physics-may-2023-v1 [v1 and v2] Q4f and Q4g** (LineGraph)
  - Issue: The pV constant graph is correct and uses the same data in both variants (which is appropriate since the experiment yields the same Boyle's constant). However, the scale and gridlines are minimal. Students must interpolate the pV value from a sparse grid (only 5 data points), which may lead to reading errors. The graph is fit-for-purpose but could be more precise.
  - Fix: Increase the density of gridlines (both major and minor) to improve readability. Alternatively, add explicit data-point circles and labels at each point. The current LineGraph is correct but slightly low-resolution for graphical analysis tasks.
- **physics-may-2025-v1 [v1 & v2] Q1 task d (electrostatic apparatus)** (GenericSVG)
  - Issue: The apparatus diagrams correctly show plate-type and tubular precipitators (V1) or corona and bell spray guns (V2), but labels are small and the field lines or gradient representation could be clearer. The diagrams are correct but somewhat lack pedagogical emphasis on the key design differences.
  - Fix: Optionally enhance by adding field-line patterns or shading to emphasize field uniformity in tubular vs plate designs (V1), or droplet-size representation for corona vs bell (V2). Current diagrams are acceptable but could be improved for clarity.
- **physics-nov-2016-v1-and-v2 [v1] Q2 task f** (GenericSVG)
  - Issue: The diffraction diagram (infrasound around rhinoceros ridge) is scientifically correct but uses a hand-drawn SVG. This is appropriate for a labelled static scene showing the obstacle and wave paths. No Sim matches this 'explain diffraction around an obstacle' scenario, so GenericSVG is the right choice.
  - Fix: No change needed. The physics is correct (diffraction of long-wavelength infrasound around a large obstacle) and the component choice is appropriate.
- **physics-nov-2016-v1-and-v2 [v2] Q2 task f** (GenericSVG)
  - Issue: The diffraction diagram (infrasound around whale/seamount) is scientifically correct. Same as V1 — a static labelled scene is appropriate here.
  - Fix: No change needed.
- **physics-nov-2016-v1-and-v2 [v1] Q6** (DataTable; →LineGraph)
  - Issue: The cooling data (inconsistent cup-thickness vs cooling time with scattered anomalies) is presented as a plain DataTable. While correct, a LineGraph with scattered points would more visually communicate the lack of trend and highlight the anomalies (two 6mm readings: 20 vs 11 min).
  - Fix: Consider rendering as a LineGraph with scattered data points to visually emphasize the inconsistency in the data. This would help students immediately see why the hypothesis is not supported.
- **physics-nov-2016-v1-and-v2 [v2] Q6** (DataTable; →LineGraph)
  - Issue: Same as V1: cooling data (inconsistent soup-cup thickness vs cooling time) presented as DataTable. A LineGraph would better visualize the lack of trend.
  - Fix: Consider LineGraph to show scattered data points visually.
- **physics-nov-2016-v1-and-v2 [v1] Q8 task a** (DecaySim)
  - Issue: DecaySim is correctly used for simulating iodine-131 decay. The component is appropriate and physics is sound (half-life 8 days, β⁻ decay to xenon-131).
  - Fix: No change needed. This is a well-chosen interactive component.
- **physics-nov-2016-v1-and-v2 [v2] Q8 task a** (DecaySim)
  - Issue: DecaySim correctly configured for cobalt-60 decay (half-life 5 years, β⁻+γ). Physics is correct.
  - Fix: No change needed.
- **physics-nov-2016-v1-and-v2 [v1] Q8 task c** (GraphSim)
  - Issue: GraphSim is correctly used for reading Sr-90 decay curve. The plotted points [0,100], [14,71], [29,50], [43,35], [58,25], [87,12.5], [116,6.25] accurately represent exponential decay with half-life ≈ 29 years. Physics is correct.
  - Fix: No change needed. Excellent use of an interactive Sim for a 'read-off the value' task.
- **physics-nov-2016-v1-and-v2 [v2] Q8 task c** (GraphSim)
  - Issue: Same as V1: GraphSim for Sr-90 curve is correct. Same point values ensure consistency between variants.
  - Fix: No change needed.
- **physics-nov-2019-v1 [v2] Q5f** (GraphSim)
  - Issue: The graph data point (2.30 s, 600 m) is correctly identified as anomalous in the markscheme ('time too high — should be lower'). However, the deviation is large: for a ~330 m/s gradient, 600 m should take ~1.82 s, not 2.30 s. This is a physics error in the question design: the point is so far off the trend that a student would easily spot it, but the large discrepancy might distract or confuse when drawing the line of best fit.
  - Fix: The physics and markscheme are correct. No change needed; however, consider noting in the marking guidance that students should draw a line of best fit that closely follows (0.85, 280), (1.52, 500), and (3.00, 1020), (4.00, 1320), largely excluding the point at (2.30, 600).
- **physics-nov-2020-v1 [v1] Q5d, electromagnet strength graph** (GraphSim)
  - Issue: No issue detected. Six data points (1.0,0.30), (2.0,0.60), (3.0,0.90), (4.0,1.20), (5.0,1.50), (6.0,1.80) form a perfect proportional relationship through the origin with gradient 0.30 N/(cm⁻¹). Point readout at x=3.0 cm⁻¹ yields y≈0.90 N — consistent with markscheme statement that 'straight line through origin supports the relationship.'
  - Fix: No action required. Graph correctly represents the data and supports the physics taught (weight ∝ turns/cm at constant current = 2 A).
- **physics-nov-2020-v1 [v2] Q5d, electromagnet strength graph** (GraphSim)
  - Issue: No issue detected. Six data points (1.0,0.25), (2.0,0.50), (3.0,0.75), (4.0,1.00), (5.0,1.25), (6.0,1.50) form a perfect proportional relationship through the origin with gradient 0.25 N/(cm⁻¹). Point readout at x=4.0 cm⁻¹ yields y=1.00 N. Values correctly scaled to reflect nails (0.25 N each) vs v1 washers (0.30 N each).
  - Fix: No action required. Graph correctly represents the data and supports the physics taught.
