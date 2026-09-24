// MYP4 "Prototyping for People" — starter design opportunities, three per
// accessibility track (matching personas.ts / personalities.ts), written for an
// ONLINE class: every card says how to prototype it with household materials or
// a free digital tool, what a student can measure at home, and how to test it on
// a video call. Each prototype idea follows the fidelity ladder from the MYP->DP
// bridge map (paper mock-up -> functional mock-up -> appearance/digital model)
// and is meant to prove one specific thing, not to look finished.
//
// Testing is always with a chosen user or someone whose hands/eyes/attention
// are genuinely busy — never asking a student to imitate a disability, which
// builds sympathy, not understanding.

import type { Persona } from './personas'

export interface Opportunity {
  id: string
  direction: Persona['direction']
  hmw: string
  /** Cheap, online-friendly way to build a first prototype, and what it should prove. */
  prototype: string
  /** A measurement a student can take at home for ergonomics/anthropometrics. */
  measure: string
  /** How to test it remotely and what to record. */
  test: string
}

export const OPPORTUNITIES: Opportunity[] = [
  // ── One-handed tool ──────────────────────────────────────────────────────
  {
    id: 'oh-jar', direction: 'onehand',
    hmw: 'How might we help someone open a jar or bottle using only one hand?',
    prototype: 'Paper mock-up of a grip that holds a lid still, then a cardboard-and-tape version around a real jar. It should prove the jar can be held without the second hand.',
    measure: 'Lid diameters of 3–4 jars at home (cm), plus the grip diameter of a hand around a cylinder.',
    test: 'Video call: your user (or anyone whose other hand is busy) tries it. Record time taken and where they struggled.',
  },
  {
    id: 'oh-paper', direction: 'onehand',
    hmw: 'How might we help someone hold paper steady while cutting or drawing with one hand?',
    prototype: 'A cardboard board with a grippy surface (rubber band, sandpaper, or tape strips) and a lip to stop the paper sliding. It should prove the paper stays put.',
    measure: 'Common paper sizes you use (A4, A5) and how far one hand can reach across a desk.',
    test: 'Ask your user to cut or draw a shape on video. Compare how much the paper moved with and without your board.',
  },
  {
    id: 'oh-zip', direction: 'onehand',
    hmw: 'How might we help someone open and close a bag or pencil-case zip with one hand?',
    prototype: 'A larger pull-loop or ring in card or string on a real zip, then a Tinkercad model of a better pull. It should prove the zip can be started and pulled with one hand.',
    measure: 'Zip-pull length and the space a finger needs to get through the loop (mm).',
    test: 'Record your user opening and closing the bag five times. Note failed attempts.',
  },

  // ── Low-vision object ────────────────────────────────────────────────────
  {
    id: 'lv-label', direction: 'lowvision',
    hmw: 'How might we make labels on food or medicine easier to read for someone with low vision?',
    prototype: 'Three paper labels for the same product: different text sizes and contrast (black on white, white on dark, yellow on black). It should prove which one is readable at a normal distance.',
    measure: 'Text height in mm on a real label, and the distance from which you can read it.',
    test: 'Show your user each label on camera. Record how far away they can read it and how long it takes.',
  },
  {
    id: 'lv-dial', direction: 'lowvision',
    hmw: 'How might we help someone find the right setting on a dial without needing to see it?',
    prototype: 'A cardboard dial with different textures at each setting (tape, sticky dots, string). It should prove each setting can be told apart by touch.',
    measure: 'Diameter of a dial or knob at home (cm) and the gap between the settings.',
    test: 'Ask your user to find three settings with their eyes closed or looking away, and record any mix-ups.',
  },
  {
    id: 'lv-stand', direction: 'lowvision',
    hmw: 'How might we help someone read comfortably using a stand and better light?',
    prototype: 'A cardboard reading stand with an adjustable angle, and a lamp position marked on paper. It should prove a comfortable angle and distance.',
    measure: 'Your comfortable reading distance, and the angle between book and desk (with a protractor or phone level).',
    test: 'Video call: your user reads for two minutes at three angles. Record which angle they choose and why.',
  },

  // ── Sensory organiser ────────────────────────────────────────────────────
  {
    id: 'se-desk', direction: 'sensory',
    hmw: 'How might we keep headphones and fidget tools within reach without cluttering the desk?',
    prototype: 'A cardboard organiser with a slot for each item. It should prove that everything has a home and can be reached without looking.',
    measure: 'The size of the items it must hold (headphones, fidgets, pencils) in cm.',
    test: 'Your user sets up their desk with it on camera. Record what they reach for most and what gets in the way.',
  },
  {
    id: 'se-calm', direction: 'sensory',
    hmw: 'How might we make a small kit that helps someone stay calm in a busy corridor?',
    prototype: 'A paper or fabric pouch mock-up with pockets for earplugs, a soft texture and a note card. It should prove the kit is quick to open and easy to carry.',
    measure: 'How many items fit and how long it takes you to take one out and put it back (seconds).',
    test: 'Ask your user to walk you through when they would use it. Record what they would add or remove.',
  },
  {
    id: 'se-texture', direction: 'sensory',
    hmw: 'How might we help someone lay out morning items by texture and colour so the routine feels calmer?',
    prototype: 'A tray with compartments in card, labelled by colour or texture. It should prove the routine can be followed without thinking.',
    measure: 'How many items are in the morning routine, and how much space each one needs.',
    test: 'Your user follows their routine with it on video. Record where they hesitate.',
  },

  // ── Elderly-friendly kitchen aid ─────────────────────────────────────────
  {
    id: 'el-grip', direction: 'elderly',
    hmw: 'How might we make a peeler or knife handle comfortable and safe to hold for longer?',
    prototype: 'A handle mock-up from foam, clay or a rolled towel around a real tool, in three thicknesses. It should prove which grip diameter feels best.',
    measure: 'With permission, the grip diameter of a few family members’ hands, and the handle diameters you already have at home.',
    test: 'Your user holds each version for one minute on camera. Record which they pick and any signs of strain.',
  },
  {
    id: 'el-jug', direction: 'elderly',
    hmw: 'How might we make measuring in the kitchen easy to read without small print?',
    prototype: 'A paper jug wrap with large, high-contrast markings for common amounts. It should prove the numbers can be read quickly from arm’s length.',
    measure: 'Marking height in mm on a real jug or spoon, and the distance you read it from.',
    test: 'Ask your user to read out three measurements from your mock-up and a normal one. Compare speed and mistakes.',
  },
  {
    id: 'el-tap', direction: 'elderly',
    hmw: 'How might we help someone turn taps and knobs that are hard to grip?',
    prototype: 'A lever-style handle in cardboard clipped over a real knob, then a Tinkercad model. It should prove a lever needs less grip than a round knob.',
    measure: 'Diameter of 3 knobs or taps at home (cm), and how far a lever would need to stick out.',
    test: 'Your user turns the knob with and without your handle on camera. Record how many tries and any discomfort.',
  },

  // ── Classroom accessibility ──────────────────────────────────────────────
  {
    id: 'cl-page', direction: 'classroom',
    hmw: 'How might we help someone turn pages or keep a book open without using two hands?',
    prototype: 'A cardboard page-holder and a paper-clip page-turner. It should prove the book stays open and a page can be turned with one hand.',
    measure: 'Book thickness and page width in cm for the books used most.',
    test: 'Your user reads a page and turns it, on camera. Record how many attempts and any slipping.',
  },
  {
    id: 'cl-timetable', direction: 'classroom',
    hmw: 'How might we show timetable changes clearly so nobody has to rely on hearing an announcement?',
    prototype: 'A clickable slide or Figma-style prototype of a visual timetable that flags changes. It should prove a change can be understood in seconds.',
    measure: 'How many changes a normal week has, and how long it takes to read a full timetable (seconds).',
    test: 'Show your user the prototype on screen share. Record what they notice first and what is confusing.',
  },
  {
    id: 'cl-layout', direction: 'classroom',
    hmw: 'How might we arrange desks and bags so people using mobility aids can move around a classroom?',
    prototype: 'A scale floor plan on paper (1 square = 10 cm), then a Tinkercad model of the room. It should prove there is a clear route through the room.',
    measure: 'Doorway and corridor widths at home, compared with the published dimensions of a real mobility product.',
    test: 'Show your plan to your user on video. Ask them to trace the route they would take and record where it is blocked.',
  },
]

export function getOpportunity(id: string): Opportunity | undefined {
  return OPPORTUNITIES.find((o) => o.id === id)
}

export function opportunitiesByDirection(direction: Persona['direction']): Opportunity[] {
  return OPPORTUNITIES.filter((o) => o.direction === direction)
}
