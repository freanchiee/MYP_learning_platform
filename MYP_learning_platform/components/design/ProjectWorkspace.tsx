'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { DESIGN_CYCLE, type CriterionKey, type Criterion } from '@/data/design/cycle'
import { DESIGN_PROJECTS, type DesignProject } from '@/data/design/projects'

type Mode = 'study' | 'build'

interface Props {
  project: DesignProject
  initialMode: Mode
}

interface Saved {
  answers: Record<string, string> // `${crit}:${strandIndex}` -> text
  bands: Partial<Record<CriterionKey, number>> // crit -> band index (0–3)
}

const KEYS: CriterionKey[] = ['A', 'B', 'C', 'D']

export default function ProjectWorkspace({ project, initialMode }: Props) {
  const storageKey = `myp-design:${project.id}`
  const supabase = useMemo(() => createClient(), [])
  const [mode, setMode] = useState<Mode>(initialMode)
  const [activeKey, setActiveKey] = useState<CriterionKey>('A')
  const [saved, setSaved] = useState<Saved>({ answers: {}, bands: {} })
  const [loaded, setLoaded] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)

  // Load: localStorage first (instant, offline), then the signed-in user's row
  // from Supabase (cross-device source of truth) if it exists.
  useEffect(() => {
    let active = true
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) setSaved(JSON.parse(raw))
    } catch {
      /* corrupt/absent — start fresh */
    }
    ;(async () => {
      let uid: string | null = null
      try {
        uid = (await supabase.auth.getUser()).data.user?.id ?? null
      } catch {
        /* no session / no backend (dev) — stay local-only */
      }
      if (!active) return
      setUserId(uid)
      if (uid) {
        const { data } = await supabase
          .from('design_progress')
          .select('answers, bands')
          .eq('user_id', uid)
          .eq('project_id', project.id)
          .maybeSingle()
        if (active && data) setSaved({ answers: data.answers ?? {}, bands: data.bands ?? {} })
      }
      if (active) setLoaded(true)
    })()
    return () => {
      active = false
    }
  }, [storageKey, project.id, supabase])

  // Save: localStorage immediately; debounced upsert to Supabase when signed in.
  const firstSave = useRef(true)
  useEffect(() => {
    if (!loaded) return
    localStorage.setItem(storageKey, JSON.stringify(saved))
    if (!userId) return
    // skip the write triggered by the initial remote load
    if (firstSave.current) {
      firstSave.current = false
      return
    }
    const t = setTimeout(() => {
      supabase
        .from('design_progress')
        .upsert(
          {
            user_id: userId,
            project_id: project.id,
            answers: saved.answers,
            bands: saved.bands,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'user_id,project_id' },
        )
        .then(({ error }) => {
          if (error) console.warn('design_progress sync failed:', error.message)
        })
    }, 800)
    return () => clearTimeout(t)
  }, [saved, loaded, userId, storageKey, project.id, supabase])

  const crit = useMemo(() => DESIGN_CYCLE.find((c) => c.key === activeKey)!, [activeKey])
  const stage = project.stages[activeKey]

  const setAnswer = (i: number, text: string) =>
    setSaved((s) => ({ ...s, answers: { ...s.answers, [`${activeKey}:${i}`]: text } }))
  const setBand = (idx: number) =>
    setSaved((s) => ({ ...s, bands: { ...s.bands, [activeKey]: idx } }))

  const stageDone = (k: CriterionKey) =>
    saved.bands[k] !== undefined ||
    crit.objectives.some((_, i) => (saved.answers[`${k}:${i}`] || '').trim().length > 0)

  const idx = DESIGN_PROJECTS.findIndex((p) => p.id === project.id)
  const next = DESIGN_PROJECTS[idx + 1]

  const activePos = KEYS.indexOf(activeKey)

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: 'calc(100vh - 56px)' }}>
      <div className="mx-auto max-w-5xl px-5 py-8">
        {/* ── Header ── */}
        <Link href="/design" className="text-xs font-bold tracking-widest" style={{ color: 'var(--text-subtle)' }}>
          ← ALL PROJECTS
        </Link>

        <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-[11px] font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
              {project.designType.toUpperCase()}
            </div>
            <h1 className="mt-1 text-3xl font-extrabold" style={{ color: 'var(--text)' }}>
              {project.title}
            </h1>
          </div>

          {/* Mode toggle */}
          <div
            className="flex overflow-hidden rounded-full text-xs font-black"
            style={{ border: '1px solid var(--border)' }}
          >
            {(['study', 'build'] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className="px-4 py-2 tracking-widest transition-colors"
                style={{
                  background: mode === m ? 'var(--accent)' : 'transparent',
                  color: mode === m ? 'var(--text-on-accent)' : 'var(--text-subtle)',
                }}
              >
                {m === 'study' ? 'STUDY EXEMPLAR' : 'BUILD YOUR FOLDER'}
              </button>
            ))}
          </div>
        </div>

        {/* Meta chips */}
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            `🌍 ${project.globalContext}`,
            `🔑 ${project.keyConcept}`,
            ...project.relatedConcepts.map((c) => c),
          ].map((t) => (
            <span
              key={t}
              className="rounded-full px-3 py-1 text-[11px] font-bold"
              style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Situation + challenge */}
        <div
          className="mt-5 rounded-2xl p-5"
          style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text)' }}>The situation. </strong>
            {project.situation}
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text)' }}>Your challenge. </strong>
            {project.challenge}
          </p>
          <p className="mt-3 text-xs" style={{ color: 'var(--text-subtle)' }}>
            Client / target audience: {project.client}
          </p>
        </div>

        {/* ── Stage tabs (the design cycle) ── */}
        <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {DESIGN_CYCLE.map((c) => {
            const on = c.key === activeKey
            return (
              <button
                key={c.key}
                onClick={() => setActiveKey(c.key)}
                className="rounded-xl px-3 py-3 text-left transition-all"
                style={{
                  background: on ? c.cssVar : 'var(--surface-elevated)',
                  border: `1px solid ${on ? c.cssVar : 'var(--border)'}`,
                  color: on ? '#fff' : 'var(--text)',
                  boxShadow: on ? 'var(--shadow-card)' : 'none',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black">{c.key}</span>
                  {stageDone(c.key) && mode === 'build' && (
                    <span className="text-xs" style={{ opacity: on ? 1 : 0.6 }}>✓</span>
                  )}
                </div>
                <div className="text-[11px] font-bold leading-tight" style={{ opacity: on ? 0.95 : 0.7 }}>
                  {c.phase}
                </div>
              </button>
            )
          })}
        </div>

        {/* ── Active stage ── */}
        <div className="mt-6">
          <StageHeader crit={crit} />

          {mode === 'study' ? (
            <StudyView crit={crit} exemplar={stage.exemplar} tip={stage.tip} />
          ) : (
            <BuildView
              crit={crit}
              answers={saved.answers}
              band={saved.bands[activeKey]}
              synced={!!userId}
              onAnswer={setAnswer}
              onBand={setBand}
            />
          )}
        </div>

        {/* ── Footer nav ── */}
        <div className="mt-8 flex items-center justify-between gap-3 border-t pt-5" style={{ borderColor: 'var(--border)' }}>
          <button
            disabled={activePos === 0}
            onClick={() => setActiveKey(KEYS[activePos - 1])}
            className="rounded-lg px-4 py-2 text-sm font-bold disabled:opacity-30"
            style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
          >
            ← {activePos > 0 ? `Criterion ${KEYS[activePos - 1]}` : 'Criterion A'}
          </button>

          <button
            onClick={() => printFolder(project, saved)}
            className="rounded-lg px-4 py-2 text-sm font-black"
            style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
          >
            ⬇ Download my design folder
          </button>

          {activePos < KEYS.length - 1 ? (
            <button
              onClick={() => setActiveKey(KEYS[activePos + 1])}
              className="rounded-lg px-4 py-2 text-sm font-bold"
              style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              Criterion {KEYS[activePos + 1]} →
            </button>
          ) : next ? (
            <Link
              href={`/design/${next.id}`}
              className="rounded-lg px-4 py-2 text-sm font-bold"
              style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              Next project →
            </Link>
          ) : (
            <Link
              href="/design"
              className="rounded-lg px-4 py-2 text-sm font-bold"
              style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              Finish ✓
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

function StageHeader({ crit }: { crit: Criterion }) {
  return (
    <div className="flex items-baseline gap-3">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg font-black text-white"
        style={{ background: crit.cssVar }}
      >
        {crit.key}
      </span>
      <div>
        <h2 className="text-xl font-extrabold" style={{ color: 'var(--text)' }}>
          {crit.title}
        </h2>
        <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>
          {crit.summary}
        </p>
      </div>
    </div>
  )
}

function StudyView({ crit, exemplar, tip }: { crit: Criterion; exemplar: string[]; tip?: string }) {
  return (
    <div className="mt-4 grid gap-4 lg:grid-cols-2">
      {/* Worked example */}
      <div className="rounded-2xl p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
        <div className="text-[11px] font-black tracking-widest" style={{ color: crit.cssVar }}>
          WORKED EXAMPLE — A STRONG (7–8) RESPONSE
        </div>
        <ul className="mt-3 space-y-3">
          {exemplar.map((e, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: crit.cssVar }}>●</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>
        {tip && (
          <p className="mt-4 rounded-lg p-3 text-xs leading-relaxed" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>
            💡 {tip}
          </p>
        )}
      </div>

      {/* Rubric */}
      <div className="rounded-2xl p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
        <div className="text-[11px] font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>
          HOW IT'S ASSESSED (MAX 8)
        </div>
        <div className="mt-3 space-y-2">
          {crit.bands.map((b, i) => {
            const top = i === crit.bands.length - 1
            return (
              <div
                key={b.range}
                className="rounded-lg p-3"
                style={{
                  background: top ? 'var(--surface-2)' : 'transparent',
                  border: `1px solid ${top ? crit.cssVar : 'var(--border)'}`,
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="rounded px-2 py-0.5 text-xs font-black text-white"
                    style={{ background: top ? crit.cssVar : 'var(--text-subtle)' }}
                  >
                    {b.range}
                  </span>
                  <span className="text-xs font-bold" style={{ color: 'var(--text)' }}>
                    {b.label}
                  </span>
                </div>
                <ul className="mt-2 space-y-1">
                  {b.descriptors.map((d, j) => (
                    <li key={j} className="text-[12px] leading-snug" style={{ color: 'var(--text-muted)' }}>
                      • {d}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function BuildView({
  crit,
  answers,
  band,
  synced,
  onAnswer,
  onBand,
}: {
  crit: Criterion
  answers: Record<string, string>
  band: number | undefined
  synced: boolean
  onAnswer: (i: number, text: string) => void
  onBand: (idx: number) => void
}) {
  return (
    <div className="mt-4 space-y-4">
      <div className="rounded-2xl p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
        <div className="text-[11px] font-black tracking-widest" style={{ color: crit.cssVar }}>
          YOUR DESIGN FOLDER — CRITERION {crit.key}
        </div>
        <p className="mt-1 text-xs" style={{ color: 'var(--text-subtle)' }}>
          Answer each strand for <strong>your own</strong> project.{' '}
          {synced ? '☁ Synced to your account.' : '💾 Saved on this device.'}
        </p>

        <div className="mt-4 space-y-5">
          {crit.objectives.map((obj, i) => (
            <label key={i} className="block">
              <span className="text-sm font-bold" style={{ color: 'var(--text)' }}>
                {i + 1}. {obj}
              </span>
              <textarea
                value={answers[`${crit.key}:${i}`] || ''}
                onChange={(e) => onAnswer(i, e.target.value)}
                rows={3}
                placeholder="Write your response…"
                className="mt-2 w-full resize-y rounded-lg p-3 text-sm outline-none"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Self-assessment */}
      <div className="rounded-2xl p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
        <div className="text-[11px] font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>
          SELF-ASSESS — WHICH BAND DOES YOUR WORK HIT?
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {crit.bands.map((b, i) => {
            const on = band === i
            return (
              <button
                key={b.range}
                onClick={() => onBand(i)}
                className="rounded-lg p-3 text-left transition-all"
                style={{
                  background: on ? crit.cssVar : 'var(--bg)',
                  border: `1px solid ${on ? crit.cssVar : 'var(--border)'}`,
                  color: on ? '#fff' : 'var(--text)',
                }}
              >
                <div className="text-sm font-black">{b.range}</div>
                <div className="text-[11px] font-bold" style={{ opacity: on ? 0.95 : 0.7 }}>
                  {b.label}
                </div>
              </button>
            )
          })}
        </div>
        {band !== undefined && (
          <p className="mt-3 text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            To reach the next band, compare your folder above against the wording in{' '}
            <strong>Study exemplar</strong> mode — be honest about what's missing.
          </p>
        )}
      </div>
    </div>
  )
}

// ponytail: export = print-to-PDF via the browser. Zero deps. Swap for a PDF
// lib only if pixel-perfect layout/branding becomes a requirement.
function printFolder(project: DesignProject, saved: Saved) {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const sections = DESIGN_CYCLE.map((c) => {
    const bandIdx = saved.bands[c.key]
    const bandTxt = bandIdx !== undefined ? `${c.bands[bandIdx].range} (${c.bands[bandIdx].label})` : '—'
    const items = c.objectives
      .map((obj, i) => {
        const a = (saved.answers[`${c.key}:${i}`] || '').trim()
        return `<li><b>${esc(obj)}</b><p>${a ? esc(a) : '<i>(not yet written)</i>'}</p></li>`
      })
      .join('')
    return `<section><h2>Criterion ${c.key} — ${esc(c.title)}</h2>
      <p class="band">Self-assessed band: <b>${bandTxt}</b></p><ol>${items}</ol></section>`
  }).join('')

  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(project.title)} — Design Folder</title>
    <style>
      body{font-family:Georgia,serif;max-width:760px;margin:40px auto;padding:0 24px;color:#1f2937;line-height:1.5}
      h1{font-size:26px;margin-bottom:4px}.meta{color:#6b7280;font-size:13px;margin-bottom:24px}
      h2{font-size:17px;border-bottom:2px solid #333;padding-bottom:4px;margin-top:28px}
      .band{color:#444;font-size:13px}ol{padding-left:20px}li{margin-bottom:14px}
      li b{font-size:14px}li p{margin:4px 0 0;white-space:pre-wrap;font-size:14px}
      @media print{body{margin:0}}
    </style></head><body>
    <h1>${esc(project.title)} — Design Folder</h1>
    <div class="meta">${esc(project.designType)} · ${esc(project.globalContext)} · Key concept: ${esc(
      project.keyConcept,
    )}<br>Challenge: ${esc(project.challenge)}</div>
    ${sections}
    <script>window.onload=function(){window.print()}</script>
    </body></html>`

  const w = window.open('', '_blank')
  if (!w) {
    alert('Allow pop-ups to download your design folder as a PDF.')
    return
  }
  w.document.write(html)
  w.document.close()
}
