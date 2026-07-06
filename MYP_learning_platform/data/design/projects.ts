// MYP Design — exemplar projects to study, then rebuild via the scaffold.
// Each project is a complete worked design folder: for every criterion (A–D)
// the `exemplar` bullets show what a strong (7–8) response looks like.
// The build-mode scaffold reuses the criterion objectives from cycle.ts, so
// projects only carry their own worked content — not a duplicated set of prompts.

import type { CriterionKey } from './cycle'

export interface ProjectStage {
  exemplar: string[] // worked "what a strong response looks like" points
  tip?: string // one examiner-style pointer for this criterion
}

export interface DesignProject {
  id: string
  title: string
  blurb: string // one line for the hub gate
  designType: 'Product design' | 'Digital design' | 'Combined'
  globalContext: string
  keyConcept: string
  relatedConcepts: string[]
  client: string
  situation: string // the design situation
  challenge: string // the design challenge / problem statement
  accent: { from: string; via: string; to: string } // hub gate gradient
  stages: Record<CriterionKey, ProjectStage>
}

export const DESIGN_PROJECTS: DesignProject[] = [
  {
    id: 'adaptive-kitchen-tool',
    title: 'Adaptive Kitchen Tool',
    blurb: 'Help someone with limited grip cook independently.',
    designType: 'Product design',
    globalContext: 'Fairness and development',
    keyConcept: 'Communities',
    relatedConcepts: ['Ergonomics', 'Function', 'Adaptation'],
    client: 'An adult with arthritis and reduced grip strength.',
    situation:
      'Most everyday kitchen tools assume full hand strength and fine motor control. For people living with arthritis, simple tasks like peeling, opening jars or chopping become painful or impossible, and store-bought "adaptive" tools are expensive and stigmatising.',
    challenge:
      'Design an adaptive kitchen tool that lets the client prepare a simple meal safely and independently, without specialist help.',
    accent: { from: '#1a0f2e', via: '#3a1f5c', to: '#6b3fa0' },
    stages: {
      A: {
        exemplar: [
          'Need explained AND justified: the client cannot grip a standard peeler for more than a minute without pain — losing the ability to cook independently affects dignity, nutrition and cost, so a low-effort tool is genuinely needed.',
          'Research plan prioritised: primary — interview the client + a timed observation of them peeling; secondary — research arthritis grip ranges, anti-slip materials and food-safe plastics. Primary is prioritised because the tool must fit one real hand.',
          'Range of existing products analysed in detail: a chunky-handle OXO peeler (good grip, poor leverage), a Y-peeler (low force, hard to align), and a mounted clamp peeler — each rated against grip force, safety and price.',
          'Detailed design brief summarises the analysis: a fixed-blade tool with a large low-effort handle, anti-slip grip and a guard, makeable from food-safe materials under a set budget.',
        ],
        tip: 'A 7–8 brief does not just describe research — it argues why each finding shapes the solution.',
      },
      B: {
        exemplar: [
          'Specification with measurable success criteria: handle ≥ 35 mm diameter, requires < 10 N of grip force, anti-slip surface, dishwasher-safe, total cost < the client’s budget — each criterion comes from the Criterion A research.',
          'Range of feasible ideas with detailed annotation: three sketched concepts (loop-grip, palm-cradle, lever-arm) annotated for grip force, safety and ease of cleaning.',
          'Chosen design justified critically against the spec: the palm-cradle wins because it spreads load across the whole hand (lowest grip force) and has no crevices to trap food.',
          'Accurate, detailed planning drawings: dimensioned orthographic views + a materials/requirements list (food-safe PLA body, silicone grip, stainless blade).',
        ],
        tip: 'Every success criterion should be testable later in Criterion D — vague specs cost marks twice.',
      },
      C: {
        exemplar: [
          'Detailed, logical plan: an ordered build schedule with time estimates and resources per step (model handle → print → fit blade → add grip → finish), followable by a peer.',
          'Excellent technical skills: clean 3D-printed body, blade seated securely, smooth de-burred edges, neatly bonded silicone grip.',
          'Solution functions as intended and is presented appropriately: the finished peeler works and is shown clearly with photos.',
          'Changes fully justified: the handle was widened from 35 → 42 mm after the first print still pinched the client’s thumb — the change is recorded with the reason.',
        ],
        tip: 'Keep a dated build log with photos — it is the evidence that earns the "justifies changes" strand.',
      },
      D: {
        exemplar: [
          'Detailed, relevant tests that generate data: measure grip force with a luggage scale, time a peeling task, and run a 5-point client comfort survey — each test maps to a specification point.',
          'Success critically evaluated against the spec: meets grip-force and anti-slip targets; the guard reduced but did not eliminate slips, evidenced by the test data.',
          'Improvements explained: a thumb rest and a slightly curved blade would cut the remaining slips and speed up peeling.',
          'Impact on the client explained: the client peeled a potato unaided in under a minute for the first time in years — restoring independence at mealtimes.',
        ],
        tip: 'Test against your own specification numbers, not a vague "did it work?" — authentic data is what separates 7–8 from 5–6.',
      },
    },
  },
  {
    id: 'campus-wayfinding-app',
    title: 'Campus Wayfinding App',
    blurb: 'A digital guide so new students never get lost.',
    designType: 'Digital design',
    globalContext: 'Orientation in space and time',
    keyConcept: 'Communication',
    relatedConcepts: ['Systems', 'Innovation', 'Perspective'],
    client: 'New Year-7 students in their first week at a large school.',
    situation:
      'A large multi-building campus is confusing for new students. Paper maps are hard to read on the move, room codes are cryptic, and asking for directions is intimidating — so new students are routinely late and anxious in their first weeks.',
    challenge:
      'Design a digital wayfinding solution (app or interactive map) that helps a new student get from any room to any other room confidently and on time.',
    accent: { from: '#04212e', via: '#0a4a5c', to: '#1f8fa3' },
    stages: {
      A: {
        exemplar: [
          'Need explained and justified with evidence: a first-week survey shows most new students were late ≥ 3 times because of navigation — lateness causes stress and lost learning time, so a faster way to find rooms is justified.',
          'Research prioritised: primary — observe/time new students finding rooms + survey their pain points; secondary — review map UX patterns, accessibility (colour-blind, screen size) and offline performance. Primary is prioritised to ground the design in real confusion points.',
          'Range of existing products analysed in detail: Google Maps indoor (great routing, no room codes), a static school PDF map (offline but unsearchable) and a university campus app — compared on search, offline use and clarity for a 11-year-old.',
          'Detailed design brief: a searchable, offline-capable room finder with step-by-step routing and large, simple visuals, summarising why each research finding matters.',
        ],
        tip: 'For digital design, "existing products" means analysing real apps/sites for UX — not just listing them.',
      },
      B: {
        exemplar: [
          'Specification with measurable success criteria: find any room in ≤ 3 taps, works offline, readable at arm’s length, colour-blind-safe palette, route shown as numbered steps.',
          'Range of feasible ideas with annotation: three interface concepts (search-first, map-first, timetable-linked) sketched as wireframes and annotated against the spec.',
          'Chosen design justified critically: search-first wins because new students know the room code but not its location — fewest taps to the answer.',
          'Detailed planning artefacts for digital design: a screen-flow map + annotated interface wireframes + a build requirements list (data source, framework, icon set).',
        ],
        tip: 'Digital "planning drawings" = navigation maps and annotated wireframes — examiners expect these, not photos of a finished screen.',
      },
      C: {
        exemplar: [
          'Detailed, logical build plan: ordered tasks with time estimates (data model → search → routing view → offline cache → styling), followable by a peer.',
          'Excellent technical skills: clean component structure, working search, accessible contrast and tap targets.',
          'Solution functions as intended: a working prototype returns a numbered route for any room search and runs offline.',
          'Changes fully justified: collapsed a two-step "building then room" picker into one search box after testers found the two-step flow slow — change logged with reasoning.',
        ],
        tip: 'A clickable prototype counts as a working solution — it must actually route, not just look finished.',
      },
      D: {
        exemplar: [
          'Detailed tests generating data: task-completion time and tap-count tests with real new students, plus a usability rating — each tied to a specification point.',
          'Success critically evaluated against the spec: hit the ≤ 3-tap and offline targets; routing was accurate but readability dipped in bright sunlight, shown by the test scores.',
          'Improvements explained: a high-contrast outdoor mode and voice search would address the remaining issues.',
          'Impact explained: testers reached an unfamiliar room first try without asking anyone — directly reducing first-week lateness and anxiety.',
        ],
        tip: 'Test with the actual target users (new students), not classmates who already know the campus.',
      },
    },
  },
  {
    id: 'zero-waste-lunch',
    title: 'Zero-Waste Lunch System',
    blurb: 'Cut single-use plastic from canteen lunches.',
    designType: 'Product design',
    globalContext: 'Globalization and sustainability',
    keyConcept: 'Systems',
    relatedConcepts: ['Sustainability', 'Resources', 'Form'],
    client: 'Students who buy lunch from the school canteen.',
    situation:
      'The canteen serves hundreds of lunches a day in single-use plastic trays, cutlery and film. The waste fills bins quickly, most is not recycled, and students have no easy reusable alternative that fits the fast lunch queue.',
    challenge:
      'Design a reusable product or system that noticeably reduces single-use plastic from canteen lunches without slowing the queue.',
    accent: { from: '#0d2615', via: '#1c5c32', to: '#3fa05f' },
    stages: {
      A: {
        exemplar: [
          'Need explained and justified with data: a one-day bin audit shows X kg of single-use plastic from lunch alone — a clear environmental and cost problem, so a reusable system is justified.',
          'Research prioritised: primary — bin audit + survey of why students don’t bring their own containers + time the queue; secondary — research reusable-container schemes, food-safe washable materials and deposit-return systems. Primary is prioritised to fit real student behaviour.',
          'Range of existing products analysed in detail: a deposit-return reusable box scheme, a collapsible silicone lunchbox, and a compartment tray — compared on cost, hygiene, queue speed and durability.',
          'Detailed design brief: a low-cost, washable, stackable container plus a simple return/clean system, summarising why each finding shapes the design.',
        ],
        tip: 'Quantify the problem — a measured bin audit is far stronger evidence than "there is a lot of plastic".',
      },
      B: {
        exemplar: [
          'Specification with measurable success criteria: survives 200+ dishwasher cycles, stacks to fit the existing serving line, adds < 5 s to the queue, food-safe, cost per unit under a set target.',
          'Range of feasible ideas with annotation: three concepts (deposit-token box, fold-flat tray, clip-lid bowl) sketched and annotated against durability, hygiene and queue speed.',
          'Chosen design justified critically: the clip-lid bowl wins — it stacks in the existing line, is fast to hand over, and has the fewest crevices to clean.',
          'Accurate, detailed planning drawings: dimensioned views sized to the serving line + a materials/requirements list and a simple flow diagram of the return-and-wash loop.',
        ],
        tip: 'Because the key concept is Systems, the spec must cover the whole loop (use → return → clean), not just the object.',
      },
      C: {
        exemplar: [
          'Detailed, logical plan: ordered build/prototype schedule with time and resources, and a pilot rollout plan for one year group, followable by a peer.',
          'Excellent technical skills: a sturdy, well-finished container prototype and clear return-station signage.',
          'Solution functions as intended: the prototype stacks in the line, survives wash testing and is handed over quickly.',
          'Changes fully justified: switched from a screw lid to a clip lid after timing showed screw lids slowed the queue — change logged with the timing reason.',
        ],
        tip: 'For a system, the "solution" includes the process (return station, washing) — prototype and present that too, not only the object.',
      },
      D: {
        exemplar: [
          'Detailed tests generating data: a one-week pilot measuring plastic saved (re-audit the bins), queue time, and a student adoption survey — each tied to a specification point.',
          'Success critically evaluated against the spec: cut single-use plastic by a measured %, kept queue time within target, but return rates dipped on Fridays — evidenced by the pilot data.',
          'Improvements explained: a deposit token and more return points would lift return rates and close the loop.',
          'Impact explained: the canteen sent measurably less plastic to landfill and students reported the system was easy — a scalable behaviour change.',
        ],
        tip: 'Re-running the same bin audit as a before/after gives authentic data that directly tests your headline claim.',
      },
    },
  },
]

export function getProject(id: string): DesignProject | undefined {
  return DESIGN_PROJECTS.find((p) => p.id === id)
}
