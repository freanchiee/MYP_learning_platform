'use client'

/**
 * EditableArtefact — Context-aware wrapper for data-driven figure artefacts
 * (the `code_rendered` path: GenericSVG + the interactive Sims).
 *
 * Published mode → renders the (possibly overridden) artefact exactly as before.
 *
 * Edit mode      → amber dashed outline + a hover "✎ Edit figure" chip. Click opens
 *                  a modal where a content editor can:
 *                    • swap the component (GenericSVG / WaveSim / OpticsSim / LineGraph / …)
 *                    • edit the raw SVG (for GenericSVG) or the JSON `data` (for any Sim)
 *                    • edit the caption
 *                  with a LIVE PREVIEW, then Apply (or Reset to original).
 *
 * Mirrors EditableImage / EditableText: overrides live in examStore.artefactOverrides
 * (in-memory), keyed by "q{id}:artefact" or "q{id}:task:{label}:artefact".
 */

import { useMemo, useState } from 'react'
import { useExamStore } from '@/store/examStore'
import QuestionImage from '@/components/exam/QuestionImage'
import type { ArtefactSpec } from '@/lib/types'

interface EditableArtefactProps {
  /** Unique key used in examStore.artefactOverrides, e.g. "q2:artefact" */
  artefactKey: string
  /** The original artefact spec from questions.ts */
  artefact: ArtefactSpec
}

// Components selectable in the editor (must match cases in QuestionImage's CodeRendered switch).
const COMPONENTS = [
  'GenericSVG', 'LineGraph', 'DataTable', 'CircuitDiagram', 'WaveDiagram',
  'OpticsSim', 'WaveSim', 'CircuitSim', 'FieldSim', 'DecaySim', 'OrbitSim',
  'ProjectileSim', 'OscillatorSim', 'GasLawSim', 'ThermalSim', 'SpectrumSim',
  'GraphSim', 'ParticleSim', 'SankeySim', 'DragSort', 'NetworkGraph', 'PieChart',
]

function renderArtefact(spec: ArtefactSpec) {
  return (
    <QuestionImage
      image_type="code_rendered"
      render_component={spec.component}
      render_data={spec.data}
      alt={spec.caption ?? 'Interactive figure'}
    />
  )
}

export default function EditableArtefact({ artefactKey, artefact }: EditableArtefactProps) {
  const editMode          = useExamStore(s => s.editMode)
  const artefactOverrides = useExamStore(s => s.artefactOverrides)
  const setArtefactOverride = useExamStore(s => s.setArtefactOverride)

  const override   = artefactOverrides[artefactKey]
  const effective: ArtefactSpec = override ?? artefact
  const hasOverride = !!override

  const [open, setOpen] = useState(false)

  const figure = (
    <>
      {renderArtefact(effective)}
      {effective.caption && (
        <p className="mt-1.5 text-xs" style={{ color: 'var(--text-subtle)' }}>{effective.caption}</p>
      )}
    </>
  )

  // ── Published mode — unchanged behaviour ──────────────────────────────────
  if (!editMode) return <div className="mt-4">{figure}</div>

  // ── Edit mode wrapper ─────────────────────────────────────────────────────
  return (
    <div className="relative group mt-4">
      <div
        style={{
          outline: hasOverride ? '2.5px solid var(--success)' : '2px dashed var(--warning)',
          outlineOffset: 4,
          borderRadius: 10,
        }}
      >
        {figure}
      </div>

      {hasOverride && (
        <span
          className="absolute top-1.5 left-1.5 z-10 pointer-events-none text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow"
          style={{ background: 'var(--success)', color: 'var(--text-on-accent)' }}
        >
          ✓ edited
        </span>
      )}

      {/* Hover chip */}
      <div className="absolute top-1.5 right-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1.5">
        <button
          onClick={() => setOpen(true)}
          className="px-2.5 py-1 text-[11px] font-bold rounded-lg shadow-md hover:brightness-110"
          style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
        >
          ✎ Edit figure
        </button>
        {hasOverride && (
          <button
            onClick={() => setArtefactOverride(artefactKey, null)}
            className="px-2.5 py-1 text-[11px] font-bold rounded-lg shadow-md hover:brightness-110"
            style={{ background: 'var(--surface-3)', color: 'var(--text-muted)' }}
          >
            ↩ Reset
          </button>
        )}
      </div>

      {open && (
        <ArtefactEditor
          original={artefact}
          current={effective}
          onApply={(spec) => { setArtefactOverride(artefactKey, spec); setOpen(false) }}
          onReset={() => { setArtefactOverride(artefactKey, null); setOpen(false) }}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}

// ── The modal editor ─────────────────────────────────────────────────────────
function ArtefactEditor({
  original, current, onApply, onReset, onClose,
}: {
  original: ArtefactSpec
  current: ArtefactSpec
  onApply: (spec: ArtefactSpec) => void
  onReset: () => void
  onClose: () => void
}) {
  const [component, setComponent] = useState(current.component)
  const [caption, setCaption]     = useState(current.caption ?? '')
  // For GenericSVG we edit the raw svg string; for everything else, the JSON of `data`.
  const initialBody = current.component === 'GenericSVG'
    ? ((current.data as { svg?: string } | undefined)?.svg ?? '')
    : JSON.stringify(current.data ?? {}, null, 2)
  const [body, setBody] = useState(initialBody)

  const isSvg = component === 'GenericSVG'

  // Derive the spec + any JSON error WITHOUT setState (so render stays pure).
  const { preview, error } = useMemo<{ preview: ArtefactSpec | null; error: string | null }>(() => {
    if (isSvg) {
      return { preview: { component, data: { svg: body }, caption: caption || undefined }, error: null }
    }
    try {
      const data = body.trim() ? JSON.parse(body) : {}
      return { preview: { component, data, caption: caption || undefined }, error: null }
    } catch (e) {
      return { preview: null, error: `Invalid JSON: ${(e as Error).message}` }
    }
  }, [isSvg, component, body, caption])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'var(--scrim)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[90vh] overflow-auto rounded-2xl shadow-2xl"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
          <h3 className="font-bold text-sm" style={{ color: 'var(--text)' }}>Edit figure artefact</h3>
          <button onClick={onClose} className="text-xl leading-none px-2" style={{ color: 'var(--text-muted)' }}>×</button>
        </div>

        <div className="grid md:grid-cols-2 gap-4 p-5">
          {/* Left: editor */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
              Component
              <select
                value={component}
                onChange={(e) => setComponent(e.target.value)}
                className="mt-1 w-full px-3 py-2 rounded-lg text-sm border"
                style={{ borderColor: 'var(--border-strong)', background: 'var(--surface-inset)', color: 'var(--text)' }}
              >
                {COMPONENTS.includes(component) ? null : <option value={component}>{component}</option>}
                {COMPONENTS.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </label>

            <label className="block text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
              {isSvg ? 'SVG markup (single self-contained <svg>…</svg>)' : 'data (JSON)'}
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                spellCheck={false}
                className="mt-1 w-full px-3 py-2 rounded-lg text-[11px] font-mono border"
                style={{ minHeight: 280, borderColor: 'var(--border-strong)', background: 'var(--surface-inset)', color: 'var(--text)' }}
              />
            </label>

            <label className="block text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
              Caption
              <input
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="mt-1 w-full px-3 py-2 rounded-lg text-sm border"
                style={{ borderColor: 'var(--border-strong)', background: 'var(--surface-inset)', color: 'var(--text)' }}
              />
            </label>

            {error && (
              <p className="text-xs font-semibold" style={{ color: 'var(--danger)' }}>{error}</p>
            )}
          </div>

          {/* Right: live preview */}
          <div>
            <p className="text-xs font-semibold mb-1" style={{ color: 'var(--text-muted)' }}>Live preview</p>
            <div className="rounded-lg p-2" style={{ border: '1px solid var(--border)', background: 'var(--surface-2)' }}>
              {preview
                ? renderArtefact(preview)
                : <p className="text-xs p-4" style={{ color: 'var(--danger)' }}>Fix the JSON to see a preview.</p>}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 px-5 py-3" style={{ borderTop: '1px solid var(--border)' }}>
          <button
            onClick={onReset}
            className="px-3 py-1.5 text-xs font-bold rounded-lg hover:brightness-110"
            style={{ background: 'var(--surface-3)', color: 'var(--text-muted)' }}
          >
            ↩ Reset to original
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-bold rounded-lg hover:brightness-95"
            style={{ background: 'var(--surface-3)', color: 'var(--text-muted)' }}
          >
            Cancel
          </button>
          <button
            onClick={() => { if (preview) onApply(preview) }}
            disabled={!preview}
            className="px-4 py-1.5 text-xs font-bold rounded-lg hover:brightness-110 disabled:opacity-50"
            style={{ background: 'var(--success)', color: 'var(--text-on-accent)' }}
          >
            ✓ Apply
          </button>
        </div>
      </div>
    </div>
  )
}
