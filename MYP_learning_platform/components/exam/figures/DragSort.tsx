'use client'

/**
 * DragSort — the flexible click-to-place classification artefact.
 *
 * One component, five modes:
 *  - "bins"   : place each item chip into the correct labelled drop-zone (classify,
 *               match-to-arrow, build-an-atom, chromatography bands, …).
 *  - "order"  : arrange shuffled items into the correct sequence (energy chain,
 *               process steps, fill an equation left→right).
 *  - "slots"  : fill named blanks in a reaction / equation / word-equation from a
 *               palette (the slots have labels; each maps to one correct item).
 *  - "select" : pick the single correct option from a labelled set A–D (correct Lewis
 *               structure / hazard symbol / field-line diagram).
 *  - "venn"   : drag items into the correct region of two/three overlapping sets.
 *
 * Interaction is click-to-place (click an item, then click a target) — robust and
 * accessible. A Check / Reset pair drives correct/wrong feedback via FeedbackChip.
 *
 * The component is DATA-DRIVEN and tolerant: the real render_data shapes in the wild
 * vary a lot (items as strings or {id,label}; bins as strings or objects; `correct`
 * keyed item→bin OR bin→item OR bin→item[]; energy chains via labelBank/slots;
 * equation builders via items/slots/correct). Everything is normalised below and every
 * field is optional with a sane default, so a partial payload still renders correctly.
 */

import { useMemo, useState } from 'react'
import {
  FigureCard,
  GhostButton,
  FeedbackChip,
  PALETTE,
  colorAt,
  INK,
  SUB,
  LINE,
  SURFACE,
} from './_figureKit'

/* ------------------------------------------------------------------ types --- */

type Mode = 'bins' | 'order' | 'slots' | 'select' | 'venn'

export interface DragSortItem {
  id?: string
  label?: string
  text?: string
  correct?: boolean
  correctBin?: string
}
export interface DragSortZone {
  id?: string
  label?: string
  hint?: string
  correct?: string
}
export interface DragSortOption {
  id?: string
  label?: string
  text?: string
  correct?: boolean
}
export interface DragSortSet {
  id?: string
  label?: string
}

export interface DragSortData {
  mode?: Mode | string
  title?: string
  source?: string
  prompt?: string

  /** Item chips. Accepts strings or objects ({id,label,text,correctBin}). */
  items?: Array<string | DragSortItem>
  /** Alias some payloads use for the item palette. */
  palette?: Array<string | DragSortItem>
  labelBank?: Array<string | DragSortItem>

  /** Drop-zones for "bins"/"venn". Accepts strings or objects. */
  bins?: Array<string | DragSortZone>
  zones?: Array<string | DragSortZone>
  /** Overlapping sets for "venn" (region labels are derived from these). */
  sets?: Array<string | DragSortSet>

  /** Named slots for "slots"/"order" (strings, or objects with a label). */
  slots?: Array<string | DragSortZone>
  /** Table-style classification: column / row headers. */
  columns?: string[]
  rows?: string[]

  /** Options for "select" mode. Accepts strings or objects ({id,label,correct}). */
  options?: Array<string | DragSortOption>

  /**
   * Correct mapping — accepts the many shapes seen in real data:
   *  - item→bin            { "Filter paper": "Inside funnel" }
   *  - bin→item            { "Band 1 (top)": "Pigment C" }
   *  - bin→item[]          { "Control variable": ["Mass","Volume"] }
   *  - slot→item           { left: "CO₂(aq)", operator: "⇌" }
   *  - column→{row:item}   { Mass: { Units: "kilogram" } }
   *  - a single id string  (select mode)   "A"
   */
  correct?: unknown
  /** "order" mode: the correct sequence of item labels. */
  correctOrder?: string[]
}

/* ------------------------------------------------------------- normalising --- */

const itemLabel = (it: string | DragSortItem): string =>
  typeof it === 'string' ? it : it.label ?? it.text ?? it.id ?? ''
const itemId = (it: string | DragSortItem, i: number): string =>
  (typeof it === 'string' ? it : it.id ?? it.label ?? it.text) || `item-${i}`
const zoneLabel = (z: string | DragSortZone): string =>
  typeof z === 'string' ? z : z.label ?? z.id ?? ''
const zoneId = (z: string | DragSortZone, i: number): string =>
  (typeof z === 'string' ? z : z.id ?? z.label) || `zone-${i}`

function inferMode(d: DragSortData): Mode {
  const m = (d.mode ?? '').toString().toLowerCase()
  if (m.includes('venn')) return 'venn'
  if (m.includes('select') || m.includes('option') || m.includes('correct-option')) return 'select'
  if (m.includes('order') || m.includes('sequence') || m.includes('chain')) return 'order'
  if (m.includes('slot') || m.includes('equation') || m.includes('blank')) return 'slots'
  if (m.includes('bin') || m.includes('classif')) return 'bins'
  // structural inference
  if (d.options && d.options.length) return 'select'
  if (d.sets && d.sets.length) return 'venn'
  if (d.correctOrder && d.correctOrder.length) return 'order'
  if (d.slots && d.slots.length && !(d.bins ?? d.zones)) return 'slots'
  if ((d.bins ?? d.zones) && (d.bins ?? d.zones)!.length) return 'bins'
  return 'bins'
}

interface NItem {
  id: string
  label: string
  correctZone?: string // zone id this item belongs in (bins/venn/slots)
}
interface NZone {
  id: string
  label: string
}

/** Resolve a target id for an item given the messy `correct` shapes. */
function buildCorrectMap(
  d: DragSortData,
  items: NItem[],
  zones: NZone[],
): Record<string, string> {
  const out: Record<string, string> = {}
  const byLabel = (lbl: string) => items.find((it) => it.label === lbl)
  const zoneByLabelOrId = (k: string): NZone | undefined =>
    zones.find((z) => z.id === k || z.label === k)

  // 1) per-item correctBin (carbon-cycle style)
  for (const it of items) if (it.correctZone) out[it.id] = it.correctZone

  const c = d.correct
  if (c && typeof c === 'object' && !Array.isArray(c)) {
    const rec = c as Record<string, unknown>
    for (const [k, v] of Object.entries(rec)) {
      const zoneK = zoneByLabelOrId(k)
      if (typeof v === 'string') {
        const item = byLabel(v)
        if (zoneK && item) {
          // bin → item
          out[item.id] = zoneK.id
        } else {
          // item → bin (k is the item label, v is the zone)
          const zoneV = zoneByLabelOrId(v)
          const itemK = byLabel(k)
          if (itemK && zoneV) out[itemK.id] = zoneV.id
        }
      } else if (Array.isArray(v) && zoneK) {
        // bin → item[]
        for (const lbl of v) {
          const item = byLabel(String(lbl))
          if (item) out[item.id] = zoneK.id
        }
      }
    }
  }
  return out
}

/* -------------------------------------------------------------- the figure --- */

export default function DragSort({ data }: { data: DragSortData }) {
  const mode = useMemo(() => inferMode(data), [data])
  const hint =
    mode === 'select'
      ? 'Click the option you think is correct, then press Check.'
      : mode === 'order'
        ? 'Click an item, then click a slot to place it in sequence. Check when done.'
        : mode === 'slots'
          ? 'Click an item from the palette, then click the blank it fills. Check when done.'
          : mode === 'venn'
            ? 'Click an item, then click the region it belongs in. Check when done.'
            : 'Click an item, then click the zone it belongs in. Check when done.'

  return (
    <FigureCard title={data.title} source={data.source} hint={hint}>
      {data.prompt && (
        <p className="mb-3 text-sm font-medium leading-snug" style={{ color: INK }}>
          {data.prompt}
        </p>
      )}
      {mode === 'select' ? (
        <SelectMode data={data} />
      ) : (
        <PlaceMode data={data} mode={mode} />
      )}
    </FigureCard>
  )
}

/* ----------------------------------------------------- select (A–D) mode --- */

function SelectMode({ data }: { data: DragSortData }) {
  const options = useMemo<NItem[]>(() => {
    const raw =
      (data.options as Array<string | DragSortOption> | undefined) ??
      (data.items as Array<string | DragSortItem> | undefined) ??
      []
    return raw.map((o, i) => {
      const label = itemLabel(o)
      const id = itemId(o, i)
      const correct =
        typeof o === 'object' && o.correct === true
          ? true
          : typeof data.correct === 'string'
            ? id === data.correct || label === data.correct
            : false
      return { id, label, correctZone: correct ? 'CORRECT' : undefined }
    })
  }, [data.options, data.items, data.correct])

  const [picked, setPicked] = useState<string | null>(null)
  const [state, setState] = useState<'idle' | 'correct' | 'wrong'>('idle')

  const check = () => {
    if (picked == null) return
    const opt = options.find((o) => o.id === picked)
    setState(opt?.correctZone === 'CORRECT' ? 'correct' : 'wrong')
  }
  const reset = () => {
    setPicked(null)
    setState('idle')
  }

  return (
    <div>
      <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}>
        {options.map((o, i) => {
          const on = picked === o.id
          const reveal = state !== 'idle' && o.correctZone === 'CORRECT'
          const wrongPick = state === 'wrong' && on && o.correctZone !== 'CORRECT'
          const c = colorAt(i)
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => state === 'idle' && setPicked(o.id)}
              className="flex min-h-[64px] flex-col items-center justify-center gap-1 rounded-xl px-3 py-3 text-center text-sm font-semibold transition-all"
              style={{
                background: reveal ? '#e6f4ea' : on ? SURFACE : '#ffffff',
                color: INK,
                border: `2px solid ${reveal ? '#2f9e44' : wrongPick ? '#c2255c' : on ? c : LINE}`,
                cursor: state === 'idle' ? 'pointer' : 'default',
              }}
              aria-pressed={on}
            >
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold"
                style={{ background: on || reveal ? c : SURFACE, color: on || reveal ? '#fff' : SUB }}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className="leading-tight">{o.label}</span>
            </button>
          )
        })}
      </div>
      <Controls state={state} onCheck={check} onReset={reset} canCheck={picked != null} />
    </div>
  )
}

/* ---------------------------------- bins / venn / slots / order placement --- */

function PlaceMode({ data, mode }: { data: DragSortData; mode: Mode }) {
  // Items from items | palette | labelBank.
  const rawItems = useMemo(
    () => data.items ?? data.palette ?? data.labelBank ?? [],
    [data.items, data.palette, data.labelBank],
  )

  // Zones: bins/zones for bins+venn; slots for slots; ordered slots for order.
  const zones = useMemo<NZone[]>(() => {
    if (mode === 'venn') {
      const sets = (data.sets ?? data.bins ?? data.zones ?? []).map((s, i) => ({
        id: zoneId(s as string | DragSortZone, i),
        label: zoneLabel(s as string | DragSortZone),
      }))
      if (sets.length >= 2) {
        // derive overlap regions for 2 or 3 sets
        const regions: NZone[] = []
        sets.forEach((s) => regions.push({ id: `only:${s.id}`, label: `${s.label} only` }))
        if (sets.length === 2) {
          regions.push({ id: `both:${sets[0].id}:${sets[1].id}`, label: `${sets[0].label} ∩ ${sets[1].label}` })
        } else if (sets.length >= 3) {
          regions.push({ id: `ab:${sets[0].id}:${sets[1].id}`, label: `${sets[0].label} ∩ ${sets[1].label}` })
          regions.push({ id: `bc:${sets[1].id}:${sets[2].id}`, label: `${sets[1].label} ∩ ${sets[2].label}` })
          regions.push({ id: `ac:${sets[0].id}:${sets[2].id}`, label: `${sets[0].label} ∩ ${sets[2].label}` })
          regions.push({ id: 'all', label: 'All three' })
        }
        return regions
      }
      return sets
    }
    if (mode === 'slots' || mode === 'order') {
      const raw = data.slots ?? data.bins ?? data.zones ?? []
      return raw.map((z, i) => ({ id: zoneId(z, i), label: zoneLabel(z) || `Slot ${i + 1}` }))
    }
    const raw = data.bins ?? data.zones ?? []
    return raw.map((z, i) => ({ id: zoneId(z, i), label: zoneLabel(z) }))
  }, [data, mode])

  const items = useMemo<NItem[]>(() => {
    const list = rawItems.map((it, i) => {
      const obj = typeof it === 'object' ? it : undefined
      return {
        id: itemId(it, i),
        label: itemLabel(it),
        correctZone:
          obj && obj.correctBin
            ? zones.find((z) => z.id === obj.correctBin || z.label === obj.correctBin)?.id
            : undefined,
      } as NItem
    })
    return list
  }, [rawItems, zones])

  // correctOrder → per-slot correct mapping (item label sits in slot i)
  const correctMap = useMemo<Record<string, string>>(() => {
    if (mode === 'order' || mode === 'slots') {
      const out: Record<string, string> = {}
      // order: correctOrder array maps position→label
      if (mode === 'order' && data.correctOrder?.length) {
        data.correctOrder.forEach((lbl, i) => {
          const item = items.find((it) => it.label === lbl)
          if (item && zones[i]) out[item.id] = zones[i].id
        })
        return out
      }
      // slots / order via `correct` { slotLabel/id : itemLabel }
      const c = data.correct
      if (c && typeof c === 'object' && !Array.isArray(c)) {
        for (const [k, v] of Object.entries(c as Record<string, unknown>)) {
          if (typeof v !== 'string') continue
          const zone = zones.find((z) => z.id === k || z.label === k)
          const item = items.find((it) => it.label === v || it.id === v)
          if (zone && item) out[item.id] = zone.id
        }
        if (Object.keys(out).length) return out
      }
      // fallback: items already carry order via their array order
      items.forEach((it, i) => {
        if (zones[i]) out[it.id] = zones[i].id
      })
      return out
    }
    return buildCorrectMap(data, items, zones)
  }, [data, items, zones, mode])

  // placement state: itemId -> zoneId
  const [placed, setPlaced] = useState<Record<string, string>>({})
  const [selected, setSelected] = useState<string | null>(null)
  const [state, setState] = useState<'idle' | 'correct' | 'wrong'>('idle')

  const placeIntoZone = (zoneId: string) => {
    if (selected == null) return
    setPlaced((p) => {
      const next = { ...p }
      // single-occupancy for slots/order (one item per slot)
      if (mode === 'slots' || mode === 'order') {
        for (const k of Object.keys(next)) if (next[k] === zoneId) delete next[k]
      }
      next[selected] = zoneId
      return next
    })
    setSelected(null)
    setState('idle')
  }
  const removeFromZone = (itemId: string) => {
    setPlaced((p) => {
      const next = { ...p }
      delete next[itemId]
      return next
    })
    setState('idle')
  }
  const reset = () => {
    setPlaced({})
    setSelected(null)
    setState('idle')
  }
  const check = () => {
    if (!Object.keys(correctMap).length) {
      // no answer key supplied — accept any complete placement
      setState(items.every((it) => placed[it.id]) ? 'correct' : 'wrong')
      return
    }
    const ok = items.every((it) => {
      const want = correctMap[it.id]
      if (want === undefined) return true // unconstrained item
      return placed[it.id] === want
    })
    setState(ok ? 'correct' : 'wrong')
  }

  const unplaced = items.filter((it) => !placed[it.id])
  const accent = PALETTE[0]

  return (
    <div className="flex flex-col gap-3">
      {/* item tray */}
      <div
        className="rounded-xl p-2.5"
        style={{ background: SURFACE, border: `1px dashed ${LINE}` }}
      >
        <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wide" style={{ color: SUB }}>
          Items {unplaced.length ? `(${unplaced.length} left)` : '— all placed'}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {unplaced.length === 0 && (
            <span className="text-[12px]" style={{ color: SUB }}>
              All items placed.
            </span>
          )}
          {unplaced.map((it, i) => (
            <Chip
              key={it.id}
              label={it.label}
              color={colorAt(i)}
              selected={selected === it.id}
              onClick={() => setSelected((s) => (s === it.id ? null : it.id))}
            />
          ))}
        </div>
      </div>

      {/* zones */}
      <div
        className="grid gap-2.5"
        style={{
          gridTemplateColumns:
            mode === 'order'
              ? '1fr'
              : `repeat(auto-fit, minmax(${zones.length > 3 ? 150 : 170}px, 1fr))`,
        }}
      >
        {zones.map((z, zi) => {
          const inZone = items.filter((it) => placed[it.id] === z.id)
          const zoneColor = colorAt(zi)
          const armed = selected != null
          return (
            <div
              key={z.id}
              role="button"
              tabIndex={0}
              onClick={() => placeIntoZone(z.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  placeIntoZone(z.id)
                }
              }}
              className="rounded-xl p-2.5 transition-all"
              style={{
                background: '#ffffff',
                border: `2px ${armed ? 'solid' : 'dashed'} ${armed ? zoneColor : LINE}`,
                minHeight: 78,
                cursor: armed ? 'pointer' : 'default',
                outline: 'none',
              }}
            >
              <div className="mb-1.5 flex items-center gap-1.5">
                {mode === 'order' && (
                  <span
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold"
                    style={{ background: zoneColor, color: '#fff' }}
                  >
                    {zi + 1}
                  </span>
                )}
                <span className="text-[11px] font-bold leading-tight" style={{ color: INK }}>
                  {z.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {inZone.length === 0 && (
                  <span className="text-[11px] italic" style={{ color: SUB }}>
                    {armed ? 'click to place here' : 'empty'}
                  </span>
                )}
                {inZone.map((it) => {
                  const showState =
                    state !== 'idle' && correctMap[it.id] !== undefined
                      ? correctMap[it.id] === z.id
                        ? 'ok'
                        : 'bad'
                      : null
                  return (
                    <span
                      key={it.id}
                      onClick={(e) => {
                        e.stopPropagation()
                        removeFromZone(it.id)
                      }}
                      className="inline-flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1 text-[12px] font-semibold transition-all"
                      style={{
                        background:
                          showState === 'ok' ? '#e6f4ea' : showState === 'bad' ? '#fdecea' : SURFACE,
                        color:
                          showState === 'ok' ? '#2f9e44' : showState === 'bad' ? '#c2255c' : INK,
                        border: `1.5px solid ${
                          showState === 'ok' ? '#2f9e44' : showState === 'bad' ? '#c2255c' : zoneColor
                        }`,
                      }}
                      title="Click to remove"
                    >
                      {showState === 'ok' ? '✓ ' : showState === 'bad' ? '✗ ' : ''}
                      {it.label}
                      <span aria-hidden style={{ opacity: 0.5 }}>
                        ×
                      </span>
                    </span>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <Controls
        state={state}
        onCheck={check}
        onReset={reset}
        canCheck={Object.keys(placed).length > 0}
        accent={accent}
      />
    </div>
  )
}

/* ------------------------------------------------------------ small parts --- */

function Chip({
  label,
  color,
  selected,
  onClick,
}: {
  label: string
  color: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg px-2.5 py-1.5 text-[12px] font-semibold transition-all"
      style={{
        background: selected ? color : '#ffffff',
        color: selected ? '#ffffff' : INK,
        border: `1.5px solid ${color}`,
        boxShadow: selected ? '0 1px 4px rgba(15,23,42,0.18)' : 'none',
        transform: selected ? 'translateY(-1px)' : 'none',
      }}
      aria-pressed={selected}
    >
      {label}
    </button>
  )
}

function Controls({
  state,
  onCheck,
  onReset,
  canCheck,
  accent = PALETTE[0],
}: {
  state: 'idle' | 'correct' | 'wrong'
  onCheck: () => void
  onReset: () => void
  canCheck: boolean
  accent?: string
}) {
  return (
    <div className="mt-1 flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={onCheck}
        disabled={!canCheck}
        className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all hover:brightness-110 disabled:opacity-40"
        style={{ background: accent, color: '#ffffff' }}
      >
        Check
      </button>
      <GhostButton onClick={onReset} color={accent}>
        Reset
      </GhostButton>
      <FeedbackChip state={state} />
    </div>
  )
}
