'use client'

// Read-only 3D embed: Spline publishes scenes as public iframe-embeddable
// URLs. This is deliberately NOT a live editor (Spline's editor itself
// isn't embeddable) — students design in Spline/Onshape directly and paste
// their published scene link here to show it inline in their design folder.

function isEmbeddableUrl(u: string): boolean {
  try {
    const url = new URL(u)
    return url.protocol === 'https:' && /(^|\.)spline\.design$/.test(url.hostname)
  } catch {
    return false
  }
}

export default function SplineEmbed({ value, onChange, accent }: { value: string; onChange: (v: string) => void; accent: string }) {
  const valid = value.trim().length > 0 && isEmbeddableUrl(value.trim())

  return (
    <div className="rounded-2xl p-5" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
      <div className="text-xs font-black tracking-widest" style={{ color: accent }}>
        3D SCENE EMBED
      </div>
      <p className="mt-1 text-sm" style={{ color: 'var(--text-subtle)' }}>
        Publish your Spline scene (or export a screenshot/video from Onshape) and paste the public link here.
      </p>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://my.spline.design/your-scene-id/"
        className="mt-3 w-full rounded-xl px-3.5 py-2.5 text-sm outline-none"
        style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
      />

      {value.trim().length > 0 && !valid && (
        <p className="mt-2 text-xs font-semibold" style={{ color: 'var(--accent-action)' }}>
          That doesn’t look like a public spline.design scene URL — publish the scene in Spline first ("Export → Public
          URL"), or use an Onshape screenshot/video in your build log instead.
        </p>
      )}

      {valid && (
        <div className="mt-4 overflow-hidden rounded-xl" style={{ border: '1px solid var(--border)', aspectRatio: '16 / 10' }}>
          <iframe src={value.trim()} className="h-full w-full" title="3D scene" allow="fullscreen" loading="lazy" />
        </div>
      )}
    </div>
  )
}
