'use client'

/**
 * ParticleSim — interactive particle-model stimulus for states of matter.
 *
 * Three data-driven modes:
 *  - "states":   one (or several side-by-side) containers of ~40 particles that
 *                animate per the selected state — solid (close-packed lattice
 *                vibrating in place), liquid (loosely packed, sliding/flowing),
 *                gas (sparse, fast, random ballistic motion). A Segmented control
 *                switches state; if multiple containers are supplied each is
 *                labelled and animates in its own state.
 *  - "freeze":   before/after toggle — liquid (random, close-but-not-touching) vs
 *                solid (ordered lattice, fixed contact, vibrating). For the
 *                "draw before/after on freezing" tasks.
 *  - "diffusion":particles spreading from a drop/source through the box over time;
 *                Play advances the spread.
 *
 * STIMULUS rules: every author-supplied label/number renders exactly; interactivity
 * never changes the assessed construct (arrangement & motion of the particle model).
 * SSR-safe — particle layout and motion phases are seeded deterministically
 * (mulberry32 from a fixed numeric seed) so server and client paint identically;
 * animation runs only through the kit's useRaf hook.
 */

import { useMemo, useRef, useState } from 'react'
import {
  FigureCard,
  PlayButton,
  GhostButton,
  Segmented,
  Slider,
  useRaf,
  PALETTE,
  INK,
  SUB,
  LINE,
  SURFACE,
} from './_figureKit'

// ── Public data interface ──────────────────────────────────────────────────
export type ParticleState = 'solid' | 'liquid' | 'gas'

export interface ParticleSimData {
  title?: string
  source?: string

  /** Top-level mode hint. Anything other than 'freeze'/'diffusion' renders states. */
  mode?: 'states' | 'freeze' | 'diffusion' | string

  /** Substance name, shown in the readout (e.g. "water"). */
  substance?: string

  /** State labels — may be plain ('solid') or descriptive ('liquid (before freezing)'). */
  states?: string[]
  /** Container labels; when >1 they render side by side, each in its own state. */
  containers?: string[]
  /** Answer options for the label-the-state task (rendered verbatim if present). */
  options?: string[]

  /** Particles per container (default 40; freeze uses this for the molecule count). */
  particleCount?: number

  /** Free-text descriptions for the freeze before/after states (rendered verbatim). */
  before?: string
  after?: string

  /** Optional staged state-change description (X→Y→Z). Used to seed the state chips. */
  stages?: { label: string; state?: string; particles?: string }[]
  /** Whether to show a temperature/heat slider (state-change papers). */
  heatSlider?: boolean
}

// ── Deterministic PRNG (mulberry32) — seeded so SSR === CSR ─────────────────
function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Stable numeric seed from a label string. */
function seedFrom(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Map a (possibly descriptive) state label to one of the three canonical states. */
function canonState(label: string | undefined): ParticleState {
  const s = (label ?? '').toLowerCase()
  if (s.includes('gas') || s.includes('vapour') || s.includes('vapor')) return 'gas'
  if (s.includes('solid') || s.includes('frozen') || s.includes('ice') || s.includes('lattice')) return 'solid'
  return 'liquid'
}

const STATE_COLOR: Record<ParticleState, string> = {
  solid: PALETTE[0], // teal
  liquid: PALETTE[4], // blue
  gas: PALETTE[1], // orange
}
const STATE_LABEL: Record<ParticleState, string> = {
  solid: 'Solid',
  liquid: 'Liquid',
  gas: 'Gas',
}

// ── Box geometry ───────────────────────────────────────────────────────────
const BOX = 168 // viewBox side
const PAD = 12 // inner padding so particles stay inside the wall
const R = 6 // particle radius

interface Seeded {
  /** home position in [PAD..BOX-PAD] for solid/liquid; spawn for gas/diffusion */
  hx: number
  hy: number
  /** per-particle phase + frequency offsets for deterministic jitter */
  px: number
  py: number
  /** gas/diffusion velocity direction (unit-ish) */
  vx: number
  vy: number
  /** diffusion start position (clustered at source) */
  sx: number
  sy: number
}

/** Build a deterministic particle set for a container, laid out for `state`. */
function buildParticles(n: number, state: ParticleState, seed: number): Seeded[] {
  const rnd = mulberry32(seed)
  const lo = PAD + R
  const hi = BOX - PAD - R
  const span = hi - lo

  // Lattice columns/rows for solid (and as anchor grid for liquid).
  const cols = Math.max(1, Math.round(Math.sqrt(n)))
  const rows = Math.max(1, Math.ceil(n / cols))

  const out: Seeded[] = []
  for (let i = 0; i < n; i++) {
    const col = i % cols
    const row = Math.floor(i / cols)
    // Grid home (centre each cell).
    const gx = lo + (span * (col + 0.5)) / cols
    const gy = lo + (span * (row + 0.5)) / rows

    let hx = gx
    let hy = gy
    if (state === 'liquid') {
      // Loosely packed: jitter the grid home, biased to lower 70% of the box.
      hx = lo + span * (rnd() * 0.96 + 0.02)
      hy = lo + span * (0.28 + rnd() * 0.7)
    } else if (state === 'gas') {
      // Sparse: anywhere in the box.
      hx = lo + span * rnd()
      hy = lo + span * rnd()
    }

    const ang = rnd() * Math.PI * 2
    out.push({
      hx,
      hy,
      px: rnd() * Math.PI * 2,
      py: rnd() * Math.PI * 2,
      vx: Math.cos(ang),
      vy: Math.sin(ang),
      // Diffusion source: a tight cluster at lower-left.
      sx: lo + span * (0.06 + rnd() * 0.16),
      sy: hi - span * (0.06 + rnd() * 0.16),
    })
  }
  return out
}

/**
 * Compute a particle's rendered position at animation time `t` (seconds) for a state.
 * Pure function of seeded data + t, so it is deterministic and SSR-safe (t starts at 0).
 */
function posFor(p: Seeded, state: ParticleState, t: number): [number, number] {
  const lo = PAD + R
  const hi = BOX - PAD - R
  if (state === 'solid') {
    // Small vibration about a fixed lattice point.
    const a = 1.6
    return [p.hx + Math.sin(t * 6 + p.px) * a, p.hy + Math.cos(t * 6.6 + p.py) * a]
  }
  if (state === 'liquid') {
    // Gentle sliding drift in a Lissajous orbit around home.
    const a = 7
    return [p.hx + Math.sin(t * 1.4 + p.px) * a, p.hy + Math.sin(t * 1.7 + p.py) * a * 0.8]
  }
  // gas: fast linear travel, reflecting off the walls (triangle wave on each axis).
  const speed = 34
  const reflect = (start: number, vel: number) => {
    const range = hi - lo
    let d = ((start - lo + vel * speed * t) % (2 * range) + 2 * range) % (2 * range)
    if (d > range) d = 2 * range - d
    return lo + d
  }
  return [reflect(p.hx, p.vx), reflect(p.hy, p.vy)]
}

/** Diffusion: interpolate from clustered source to spread-out home as `prog` goes 0→1. */
function posDiffuse(p: Seeded, prog: number, t: number): [number, number] {
  const e = prog * prog * (3 - 2 * prog) // smoothstep
  const jitter = 4 * prog
  const x = p.sx + (p.hx - p.sx) * e + Math.sin(t * 2 + p.px) * jitter
  const y = p.sy + (p.hy - p.sy) * e + Math.cos(t * 2.2 + p.py) * jitter
  return [x, y]
}

export default function ParticleSim({ data }: { data: ParticleSimData }) {
  const rawMode = (data.mode ?? '').toLowerCase()
  const mode: 'states' | 'freeze' | 'diffusion' =
    rawMode === 'freeze' || rawMode === 'diffusion'
      ? (rawMode as 'freeze' | 'diffusion')
      : // infer freeze from before/after fields even if mode is unset/other
        data.before != null || data.after != null
        ? 'freeze'
        : 'states'

  const n = Math.max(4, Math.min(60, Math.round(data.particleCount ?? 40)))

  // Resolve the list of state labels driving the segmented control.
  const stateLabels: string[] = useMemo(() => {
    if (data.states && data.states.length) return data.states
    if (data.stages && data.stages.length) return data.stages.map((s) => s.label)
    if (data.options && data.options.length) return data.options
    return ['solid', 'liquid', 'gas']
  }, [data.states, data.stages, data.options])

  // Container labels (for the side-by-side states layout).
  const containers = data.containers && data.containers.length ? data.containers : null

  const [selected, setSelected] = useState(0)
  const [playing, setPlaying] = useState(mode !== 'diffusion') // states/freeze animate on load; diffusion waits for Play
  const [tNow, setTNow] = useState(0)
  const [prog, setProg] = useState(0) // diffusion progress 0→1

  useRaf(
    (dt, t) => {
      setTNow(t)
      if (mode === 'diffusion') {
        setProg((p) => {
          const next = p + dt / 6 // ~6 s to fully spread
          if (next >= 1) {
            setPlaying(false)
            return 1
          }
          return next
        })
      }
    },
    playing,
  )

  const teal = PALETTE[0]

  // ── FREEZE MODE ──────────────────────────────────────────────────────────
  if (mode === 'freeze') {
    // Two phases: index 0 = before (liquid), index 1 = after (solid).
    const beforeLabel = stateLabels[0] ?? 'liquid (before)'
    const afterLabel = stateLabels[1] ?? 'solid (after)'
    const phase = selected === 0 ? 'before' : 'after'
    const state: ParticleState = phase === 'before' ? 'liquid' : 'solid'
    const desc = phase === 'before' ? data.before : data.after

    return (
      <FigureCard
        title={data.title ?? `Particle model${data.substance ? ` — ${data.substance}` : ''}`}
        source={data.source}
        hint="Toggle between the liquid (before) and solid (after) states to compare how the particles are arranged and how they move when the substance freezes."
        maxWidth={520}
      >
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Segmented
            options={[
              { value: 'before', label: beforeLabel },
              { value: 'after', label: afterLabel },
            ]}
            value={phase}
            onChange={(v) => setSelected(v === 'before' ? 0 : 1)}
            color={teal}
          />
          <PlayButton
            playing={playing}
            onToggle={() => setPlaying((p) => !p)}
            color={teal}
            labelPlay="Animate"
            labelPause="Pause"
          />
        </div>

        <ParticleBox
          n={n}
          state={state}
          tNow={playing ? tNow : 0}
          seedKey={`freeze:${phase}`}
          accent={STATE_COLOR[state]}
        />

        <div
          className="mt-3 rounded-lg px-3 py-2 text-xs"
          style={{ background: SURFACE, border: `1px solid ${LINE}`, borderLeft: `4px solid ${STATE_COLOR[state]}`, color: INK }}
          aria-live="polite"
        >
          <span className="font-bold">{phase === 'before' ? beforeLabel : afterLabel}.</span>{' '}
          <span style={{ color: SUB }}>
            {desc ??
              (state === 'solid'
                ? 'Regular lattice — particles in fixed contact, vibrating in place.'
                : 'Irregular arrangement — particles close but not all touching, sliding past one another.')}
          </span>
        </div>
      </FigureCard>
    )
  }

  // ── DIFFUSION MODE ───────────────────────────────────────────────────────
  if (mode === 'diffusion') {
    const reset = () => {
      setPlaying(false)
      setProg(0)
    }
    return (
      <FigureCard
        title={data.title ?? `Diffusion${data.substance ? ` of ${data.substance}` : ''}`}
        source={data.source}
        hint="Press Play to release the particles from the source and watch them spread to fill the container. Drag the slider to scrub the spread."
        maxWidth={420}
      >
        <ParticleBox
          n={n}
          state="gas"
          tNow={tNow}
          seedKey="diffusion"
          accent={teal}
          diffuseProg={prog}
        />
        <div className="mt-3 flex flex-col gap-3">
          <Slider
            label="Spread"
            min={0}
            max={1}
            step={0.01}
            value={prog}
            onChange={(v) => {
              setPlaying(false)
              setProg(v)
            }}
            color={teal}
            format={(v) => `${Math.round(v * 100)}%`}
          />
          <div className="flex flex-wrap items-center gap-2">
            <PlayButton playing={playing} onToggle={() => setPlaying((p) => !p)} color={teal} />
            <GhostButton onClick={reset} color={SUB}>
              Reset
            </GhostButton>
          </div>
        </div>
      </FigureCard>
    )
  }

  // ── STATES MODE (default) ────────────────────────────────────────────────
  // Multiple containers: render each in a fixed state (cycle solid/liquid/gas) so
  // the student can compare/label them. Single container: a Segmented state switch.
  if (containers && containers.length > 1) {
    const order: ParticleState[] = ['solid', 'liquid', 'gas']
    return (
      <FigureCard
        title={data.title ?? 'States of matter — particle model'}
        source={data.source}
        hint="Each sealed container shows particles arranged and moving according to one state of matter. Compare the arrangement and motion to identify each state."
        maxWidth={620}
      >
        <div className="flex flex-wrap justify-center gap-4">
          {containers.map((label, i) => {
            const state = order[i % order.length]
            return (
              <div key={i} className="flex flex-col items-center">
                <span className="mb-1 text-xs font-bold" style={{ color: INK }}>
                  {label}
                </span>
                <ParticleBox
                  n={n}
                  state={state}
                  tNow={playing ? tNow : 0}
                  seedKey={`container:${i}:${state}`}
                  accent={STATE_COLOR[state]}
                  size={138}
                />
              </div>
            )
          })}
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <Legend />
          <PlayButton
            playing={playing}
            onToggle={() => setPlaying((p) => !p)}
            color={teal}
            labelPlay="Animate"
            labelPause="Pause"
          />
        </div>
        {data.options && data.options.length > 0 && (
          <p className="mt-2 text-[11px]" style={{ color: SUB }}>
            States to match: {data.options.join(' · ')}
          </p>
        )}
      </FigureCard>
    )
  }

  // Single container — segmented switch through the supplied states.
  const sel = Math.min(selected, stateLabels.length - 1)
  const selLabel = stateLabels[sel] ?? 'solid'
  const state = canonState(selLabel)

  return (
    <FigureCard
      title={data.title ?? 'States of matter — particle model'}
      source={data.source}
      hint="Switch between the states of matter and watch how the particle arrangement and motion change: a vibrating lattice (solid), sliding particles (liquid), or sparse fast-moving particles (gas)."
      maxWidth={460}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Segmented
          options={stateLabels.map((s, i) => ({ value: String(i), label: prettyState(s) }))}
          value={String(sel)}
          onChange={(v) => setSelected(Number(v))}
          color={teal}
        />
        <PlayButton
          playing={playing}
          onToggle={() => setPlaying((p) => !p)}
          color={teal}
          labelPlay="Animate"
          labelPause="Pause"
        />
      </div>

      <ParticleBox
        n={n}
        state={state}
        tNow={playing ? tNow : 0}
        seedKey={`state:${state}`}
        accent={STATE_COLOR[state]}
      />

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <div
          className="rounded-lg px-3 py-1.5 text-xs"
          style={{ background: SURFACE, border: `1px solid ${LINE}`, borderLeft: `4px solid ${STATE_COLOR[state]}`, color: INK }}
        >
          <span className="font-bold">{STATE_LABEL[state]}.</span>{' '}
          <span style={{ color: SUB }}>{STATE_DESC[state]}</span>
        </div>
      </div>
    </FigureCard>
  )
}

const STATE_DESC: Record<ParticleState, string> = {
  solid: 'Close-packed regular lattice; particles vibrate about fixed positions.',
  liquid: 'Loosely packed, irregular; particles slide past one another.',
  gas: 'Sparse and far apart; particles move quickly in random directions.',
}

/** Title-case a canonical state, but keep descriptive labels verbatim. */
function prettyState(label: string): string {
  const trimmed = label.trim()
  if (/^(solid|liquid|gas)$/i.test(trimmed)) {
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase()
  }
  return trimmed
}

function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]" style={{ color: SUB }}>
      {(['solid', 'liquid', 'gas'] as ParticleState[]).map((s) => (
        <span key={s} className="inline-flex items-center gap-1">
          <span style={{ width: 10, height: 10, borderRadius: 10, background: STATE_COLOR[s], display: 'inline-block' }} />
          {STATE_LABEL[s]}
        </span>
      ))}
    </div>
  )
}

/** The animated container of particles. Pure render from (state, tNow, seedKey). */
function ParticleBox({
  n,
  state,
  tNow,
  seedKey,
  accent,
  size = BOX,
  diffuseProg,
}: {
  n: number
  state: ParticleState
  tNow: number
  seedKey: string
  accent: string
  size?: number
  diffuseProg?: number
}) {
  const particles = useMemo(() => buildParticles(n, state, seedFrom(seedKey)), [n, state, seedKey])

  return (
    <svg
      viewBox={`0 0 ${BOX} ${BOX}`}
      width={size}
      height={size}
      className="block select-none"
      style={{ maxWidth: '100%', height: 'auto' }}
      role="img"
      aria-label={`${STATE_LABEL[state]} state — ${n} particles`}
    >
      {/* container walls */}
      <rect
        x={1}
        y={1}
        width={BOX - 2}
        height={BOX - 2}
        rx={8}
        fill={SURFACE}
        stroke={LINE}
        strokeWidth={2}
      />
      {/* particles */}
      {particles.map((p, i) => {
        const [x, y] =
          diffuseProg != null ? posDiffuse(p, diffuseProg, tNow) : posFor(p, state, tNow)
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={R}
            fill={accent}
            stroke="#ffffff"
            strokeWidth={1}
            opacity={0.92}
          />
        )
      })}
    </svg>
  )
}
