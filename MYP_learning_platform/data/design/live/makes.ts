// MYP4 "Prototyping for People" — the hands-on "What will you make?" menu:
// concrete things to BUILD (not problems to think about — that's
// opportunities.ts), four per accessibility track plus a wild card each,
// all doable at home with cheap materials in an online class. Each one says
// what it is, what to make it from, how long it takes, and the single thing
// the first version should prove (the fidelity-ladder habit from the MYP->DP
// bridge map: decide what a prototype must prove before choosing its polish).

import type { Persona } from './personas'

export type MakeTime = 'quick' | 'lesson' | 'stretch'

export const MAKE_TIME_LABEL: Record<MakeTime, string> = {
  quick: '⚡ Quick · about 20 min',
  lesson: '🔧 One lesson',
  stretch: '🚀 Stretch · more than a lesson',
}

export interface Make {
  id: string
  direction: Persona['direction']
  icon: string
  name: string
  what: string
  materials: string
  time: MakeTime
  proves: string
}

export const WILD_CARD_PREFIX = 'wild-'

export const MAKES: Make[] = [
  // ── One-handed tool ──────────────────────────────────────────────────────
  {
    id: 'oh-lid', direction: 'onehand', icon: '🫙', name: 'Jar-lid holder',
    what: 'A grip that holds a jar or bottle still so one hand can open it.',
    materials: 'Cardboard, rubber bands, tape, a jar from the kitchen.',
    time: 'lesson', proves: 'The jar stays put while one hand turns the lid.',
  },
  {
    id: 'oh-board', direction: 'onehand', icon: '📄', name: 'Steady-paper board',
    what: 'A board with a lip and a grippy surface so paper does not slide while you cut or draw.',
    materials: 'Cardboard, sandpaper or tape strips, an old folder.',
    time: 'quick', proves: 'The paper does not move when used with one hand.',
  },
  {
    id: 'oh-zip', direction: 'onehand', icon: '🧷', name: 'One-hand zip pull',
    what: 'A big pull-loop that makes a zip easy to start and close with one hand.',
    materials: 'String or ribbon, a paper clip, card, a bag or pencil case.',
    time: 'quick', proves: 'The zip can be opened and closed with one hand.',
  },
  {
    id: 'oh-grip', direction: 'onehand', icon: '🥄', name: 'Chunky grip handle',
    what: 'A handle in three thicknesses to find the most comfortable grip for a tool or cutlery.',
    materials: 'Clay, foam or a rolled towel, tape, a spoon or brush.',
    time: 'lesson', proves: 'Which grip diameter feels best to hold and control.',
  },

  // ── Low-vision object ────────────────────────────────────────────────────
  {
    id: 'lv-dial', direction: 'lowvision', icon: '🎚️', name: 'Tactile dial',
    what: 'A dial with a different texture at each setting, so you can find it by touch.',
    materials: 'Cardboard, sticky dots, string, tape, a brass fastener.',
    time: 'lesson', proves: 'Each setting can be told apart by touch alone.',
  },
  {
    id: 'lv-labels', direction: 'lowvision', icon: '🏷️', name: 'High-contrast label set',
    what: 'The same label made three ways: bigger text, different colours, different contrast.',
    materials: 'Paper, thick markers, black and white card.',
    time: 'quick', proves: 'Which version is readable from arm’s length.',
  },
  {
    id: 'lv-stand', direction: 'lowvision', icon: '📖', name: 'Reading stand and light guide',
    what: 'A stand with an adjustable angle and marks that show where the light should sit.',
    materials: 'Cardboard, tape, a book, a desk lamp, a phone level.',
    time: 'lesson', proves: 'A comfortable reading angle and distance.',
  },
  {
    id: 'lv-markers', direction: 'lowvision', icon: '🔴', name: 'Tactile marker kit',
    what: 'Raised markers that show which key, button or drawer is which.',
    materials: 'Sticky dots, tape, glue, thick paper.',
    time: 'quick', proves: 'Each marker can be found and recognised without looking.',
  },

  // ── Sensory organiser ────────────────────────────────────────────────────
  {
    id: 'se-desk', direction: 'sensory', icon: '🗃️', name: 'Slot-for-everything organiser',
    what: 'A desk organiser with a home for headphones, fidgets and pencils.',
    materials: 'Cardboard, tape, scissors, the items it must hold.',
    time: 'lesson', proves: 'Every item has a place and can be reached without looking.',
  },
  {
    id: 'se-pouch', direction: 'sensory', icon: '🧸', name: 'Calm-down pouch',
    what: 'A small pouch with pockets for earplugs, a soft texture and a note card.',
    materials: 'Paper or fabric, tape or thread, small items from home.',
    time: 'lesson', proves: 'It is quick to open and easy to carry.',
  },
  {
    id: 'se-tray', direction: 'sensory', icon: '🧺', name: 'Texture-sorted morning tray',
    what: 'A tray with compartments sorted by colour or texture to make a routine calmer.',
    materials: 'Cardboard, tape, coloured paper.',
    time: 'quick', proves: 'The routine can be followed without stopping to think.',
  },
  {
    id: 'se-hook', direction: 'sensory', icon: '🎧', name: 'Headphone hook and holder',
    what: 'A holder that keeps headphones within reach and stops them getting lost.',
    materials: 'Cardboard, a coat hanger or strong tape, string.',
    time: 'quick', proves: 'Headphones can be grabbed and put back in seconds.',
  },

  // ── Elderly-friendly kitchen aid ─────────────────────────────────────────
  {
    id: 'el-grip', direction: 'elderly', icon: '🥕', name: 'Easy-grip handle',
    what: 'A comfortable handle for a peeler or knife, made in three thicknesses.',
    materials: 'Foam, clay or a rolled towel, tape, a real tool.',
    time: 'lesson', proves: 'Which grip diameter is comfortable for longer.',
  },
  {
    id: 'el-jug', direction: 'elderly', icon: '🥛', name: 'Large-print measuring jug wrap',
    what: 'A wrap with big, high-contrast markings for common amounts.',
    materials: 'Paper, thick markers, tape, a real jug.',
    time: 'quick', proves: 'The amounts can be read quickly from arm’s length.',
  },
  {
    id: 'el-lever', direction: 'elderly', icon: '🚰', name: 'Lever tap turner',
    what: 'A lever that clips over a round knob so it needs less grip to turn.',
    materials: 'Cardboard, tape, a wooden spoon, a knob or jar lid.',
    time: 'lesson', proves: 'A lever needs less grip than a round knob.',
  },
  {
    id: 'el-rack', direction: 'elderly', icon: '🧂', name: 'Big-label spice rack',
    what: 'A small rack with big, clear labels so items are easy to find.',
    materials: 'Cardboard, markers, tape, spice jars.',
    time: 'stretch', proves: 'Any item can be found and read at a glance.',
  },

  // ── Classroom accessibility ──────────────────────────────────────────────
  {
    id: 'cl-page', direction: 'classroom', icon: '📚', name: 'Page holder and turner',
    what: 'A stand that keeps a book open, with a way to turn a page using one hand.',
    materials: 'Cardboard, paper clips, tape, a book.',
    time: 'lesson', proves: 'The book stays open and a page can be turned one-handed.',
  },
  {
    id: 'cl-timetable', direction: 'classroom', icon: '📅', name: 'Clickable visual timetable',
    what: 'A clickable slide or app-style prototype that flags timetable changes clearly.',
    materials: 'Google Slides or Figma, a real timetable.',
    time: 'stretch', proves: 'A change can be understood in seconds.',
  },
  {
    id: 'cl-layout', direction: 'classroom', icon: '🗺️', name: 'Scale classroom layout',
    what: 'A scale plan or Tinkercad model of a room with a clear route for a mobility aid.',
    materials: 'Squared paper or Tinkercad, a tape measure.',
    time: 'stretch', proves: 'There is a clear, wide-enough route through the room.',
  },
  {
    id: 'cl-pencil', direction: 'classroom', icon: '✏️', name: 'Pencil grip adapter',
    what: 'A grip that makes a pencil easier to hold, tested in a few shapes.',
    materials: 'Clay, foam or a rubber band, a pencil.',
    time: 'quick', proves: 'Which shape gives the steadiest, most comfortable hold.',
  },

  // ── Wild cards (one per track): the student's own idea ───────────────────
  ...(['onehand', 'lowvision', 'sensory', 'elderly', 'classroom'] as const).map(
    (direction): Make => ({
      id: `${WILD_CARD_PREFIX}${direction}`,
      direction,
      icon: '🃏',
      name: 'Wild card',
      what: 'Your own idea. Make anything that helps your user — as long as you can build a first version at home.',
      materials: 'Whatever you have.',
      time: 'lesson',
      proves: 'You decide — write down the ONE thing your first version must prove.',
    })
  ),
]

export const isWildCard = (id: string) => id.startsWith(WILD_CARD_PREFIX)

export function getMake(id: string): Make | undefined {
  return MAKES.find((m) => m.id === id)
}

export function makesByDirection(direction: Persona['direction']): Make[] {
  return MAKES.filter((m) => m.direction === direction)
}
