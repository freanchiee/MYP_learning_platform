'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { DESIGN_CYCLE, CRITERION_BY_KEY, type CriterionKey, type Criterion } from '@/data/design/cycle'
import { DESIGN_PROJECTS, type DesignProject } from '@/data/design/projects'
import { useDesignProgress, type DesignProgress } from '@/hooks/useDesignProgress'
import DesignCycleRing from './DesignCycleRing'

type Mode = 'study' | 'build'

interface Props {
  project: DesignProject
  initialMode: Mode
}

const KEYS: CriterionKey[] = ['A', 'B', 'C', 'D']

export default function ProjectWorkspace({ project, initialMode }: Props) {
  const [mode, setMode] = useState<Mode>(initialMode)
  const [activeKey, setActiveKey] = useState<CriterionKey>('A')
  const { saved, setAnswer: setAnswerRaw, setBand: setBandRaw, synced } = useDesignProgress(project.id)

  const crit = CRITERION_BY_KEY[activeKey]
  const stage = project.stages[activeKey]

  const setAnswer = (i: number, text: string) => setAnswerRaw(`${activeKey}:${i}`, text)
  const setBand = (idx: number) => setBandRaw(activeKey, idx)

  const stageDone = (k: CriterionKey) =>
    saved.bands[k] !== undefined ||
    CRITERION_BY_KEY[k].objectives.some((_, i) => (saved.answers[`${k}:${i}`] || '').trim().length > 0)

  const doneKeys = useMemo(() => new Set(KEYS.filter(stageDone)), [saved]) // eslint-disable-line react-hooks/exhaustive-deps
  const idx = DESIGN_PROJECTS.findIndex((p) => p.id === project.id)
  const next = DESIGN_PROJECTS[idx + 1]
  const activePos = KEYS.indexOf(activeKey)

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: 'calc(100vh - 56px)' }}>
      <div className="mx-auto max-w-[1400px] px-5 py-8 md:px-10 md:py-10">
        {/* ── Header (full width) ── */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/design" className="text-sm font-bold tracking-widest" style={{ color: 'var(--text-subtle)' }}>
            ← ALL PROJECTS
          </Link>
          {/* Mode toggle */}
          <div className="flex overflow-hidden rounded-full text-sm font-black" style={{ border: '1px solid var(--border)' }}>
            {(['study', 'build'] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className="px-5 py-2.5 tracking-widest transition-colors"
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

        <div className="mt-5">
          <div className="text-sm font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
            {project.designType.toUpperCase()}
          </div>
          <h1 className="mt-1 text-4xl font-extrabold md:text-5xl" style={{ color: 'var(--text)' }}>
            {project.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {[`🌍 ${project.globalContext}`, `🔑 ${project.keyConcept}`, ...project.relatedConcepts].map((t) => (
              <span key={t} className="rounded-full px-3.5 py-1.5 text-sm font-bold" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Situation + challenge (full width) */}
        <div className="mt-6 grid gap-4 rounded-3xl p-6 md:grid-cols-2 md:p-8" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text)' }}>The situation. </strong>
            {project.situation}
          </p>
          <div>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text)' }}>Your challenge. </strong>
              {project.challenge}
            </p>
            <p className="mt-3 text-sm font-semibold" style={{ color: 'var(--text-subtle)' }}>
              Client / target audience: {project.client}
            </p>
          </div>
        </div>

        {/* ── Two-column body: sticky rail + wide stage content ── */}
        <div className="mt-8 lg:grid lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-10">
          {/* LEFT RAIL */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-3xl p-6" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
              <DesignCycleRing activeKey={activeKey} onSelect={setActiveKey} doneKeys={doneKeys} />

              {/* Stage list — precise nav + table of contents */}
              <div className="mt-5 space-y-1.5">
                {DESIGN_CYCLE.map((c) => {
                  const on = c.key === activeKey
                  return (
                    <button
                      key={c.key}
                      onClick={() => setActiveKey(c.key)}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all"
                      style={{ background: on ? 'var(--surface-2)' : 'transparent', border: `1px solid ${on ? c.cssVar : 'transparent'}` }}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base font-black text-white" style={{ background: c.cssVar }}>
                        {c.key}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold leading-tight" style={{ color: 'var(--text)' }}>{c.phase}</span>
                      </span>
                      {mode === 'build' && doneKeys.has(c.key) && <span style={{ color: 'var(--success)' }}>✓</span>}
                    </button>
                  )
                })}
              </div>

              {/* Progress + export */}
              <div className="mt-5 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
                <div className="mb-3 text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>
                  {mode === 'build' ? `${doneKeys.size} of 4 criteria started` : 'Study each criterion, then switch to Build'}
                </div>
                <button
                  onClick={() => printFolder(project, saved)}
                  className="w-full rounded-xl px-4 py-3 text-sm font-black"
                  style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
                >
                  ⬇ Download my design folder
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN STAGE CONTENT */}
          <main className="mt-6 lg:mt-0">
            <StageHeader crit={crit} />

            {mode === 'study' ? (
              <StudyView key={activeKey} crit={crit} exemplar={stage.exemplar} tip={stage.tip} />
            ) : (
              <BuildView
                key={activeKey}
                crit={crit}
                answers={saved.answers}
                band={saved.bands[activeKey]}
                synced={synced}
                onAnswer={setAnswer}
                onBand={setBand}
              />
            )}

            {/* Prev / next */}
            <div className="mt-8 flex items-center justify-between gap-3">
              <button
                disabled={activePos === 0}
                onClick={() => setActiveKey(KEYS[activePos - 1])}
                className="rounded-xl px-5 py-3 text-sm font-bold disabled:opacity-30"
                style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                ← Criterion {activePos > 0 ? KEYS[activePos - 1] : 'A'}
              </button>

              {activePos < KEYS.length - 1 ? (
                <button
                  onClick={() => setActiveKey(KEYS[activePos + 1])}
                  className="rounded-xl px-5 py-3 text-sm font-black"
                  style={{ background: crit.cssVar, color: '#fff' }}
                >
                  Next: Criterion {KEYS[activePos + 1]} →
                </button>
              ) : next ? (
                <Link href={`/design/${next.id}`} className="rounded-xl px-5 py-3 text-sm font-black" style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}>
                  Next project: {next.title} →
                </Link>
              ) : (
                <Link href="/design" className="rounded-xl px-5 py-3 text-sm font-bold" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>
                  Finish ✓
                </Link>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function StageHeader({ crit }: { crit: Criterion }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl font-black text-white" style={{ background: crit.cssVar }}>
        {crit.key}
      </span>
      <div>
        <h2 className="text-2xl font-extrabold md:text-3xl" style={{ color: 'var(--text)' }}>
          {crit.title}
        </h2>
        <p className="mt-1 text-base" style={{ color: 'var(--text-subtle)' }}>
          {crit.summary}
        </p>
      </div>
    </div>
  )
}

function StudyView({ crit, exemplar, tip }: { crit: Criterion; exemplar: string[]; tip?: string }) {
  const [band, setBand] = useState(crit.bands.length - 1) // default to the top band
  const b = crit.bands[band]
  const isTop = band === crit.bands.length - 1

  return (
    <div className="mt-6 grid gap-5 xl:grid-cols-2">
      {/* Worked example */}
      <section className="rounded-3xl p-6 md:p-7" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
        <div className="text-xs font-black tracking-widest" style={{ color: crit.cssVar }}>
          WORKED EXAMPLE — A STRONG (7–8) RESPONSE
        </div>
        <ul className="mt-4 space-y-4">
          {exemplar.map((e, i) => (
            <li key={i} className="flex gap-3 text-base leading-relaxed md:text-lg" style={{ color: 'var(--text-muted)' }}>
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: crit.cssVar }} />
              <span>{e}</span>
            </li>
          ))}
        </ul>
        {tip && (
          <p className="mt-5 rounded-xl p-4 text-sm leading-relaxed" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>
            💡 {tip}
          </p>
        )}
      </section>

      {/* Interactive rubric — pick a band to explore what it takes */}
      <section className="rounded-3xl p-6 md:p-7" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
        <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>
          HOW IT&apos;S ASSESSED — TAP A BAND (MAX 8)
        </div>

        {/* Band selector */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          {crit.bands.map((bb, i) => {
            const on = band === i
            return (
              <button
                key={bb.range}
                onClick={() => setBand(i)}
                className="rounded-xl px-2 py-2.5 text-center transition-all"
                style={{ background: on ? crit.cssVar : 'var(--surface-2)', color: on ? '#fff' : 'var(--text)', border: `1px solid ${on ? crit.cssVar : 'transparent'}` }}
              >
                <div className="text-base font-black">{bb.range}</div>
                <div className="text-[11px] font-bold leading-tight" style={{ opacity: on ? 0.95 : 0.6 }}>{bb.label}</div>
              </button>
            )
          })}
        </div>

        {/* Selected band descriptors */}
        <ul className="mt-5 space-y-2.5">
          {b.descriptors.map((d, j) => (
            <li key={j} className="flex gap-2.5 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: crit.cssVar }}>•</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <p className="mt-5 rounded-xl p-3.5 text-sm font-semibold" style={{ background: 'var(--surface-2)', color: isTop ? 'var(--success)' : 'var(--text-muted)' }}>
          {isTop
            ? '✓ This is the target — the worked example on the left hits this band.'
            : '▲ Aim higher — tap 7–8 to see what a top response adds.'}
        </p>
      </section>
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
    <div className="mt-6 space-y-5">
      <section className="rounded-3xl p-6 md:p-7" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
        <div className="text-xs font-black tracking-widest" style={{ color: crit.cssVar }}>
          YOUR DESIGN FOLDER — CRITERION {crit.key}
        </div>
        <p className="mt-1.5 text-sm" style={{ color: 'var(--text-subtle)' }}>
          Answer each strand for <strong>your own</strong> project.{' '}
          {synced ? '☁ Synced to your account.' : '💾 Saved on this device.'}
        </p>

        <div className="mt-5 space-y-6">
          {crit.objectives.map((obj, i) => (
            <label key={i} className="block">
              <span className="text-base font-bold" style={{ color: 'var(--text)' }}>
                {i + 1}. {obj}
              </span>
              <textarea
                value={answers[`${crit.key}:${i}`] || ''}
                onChange={(e) => onAnswer(i, e.target.value)}
                rows={4}
                placeholder="Write your response…"
                className="mt-2.5 w-full resize-y rounded-xl p-4 text-base outline-none"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
              />
            </label>
          ))}
        </div>
      </section>

      {/* Self-assessment */}
      <section className="rounded-3xl p-6 md:p-7" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
        <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>
          SELF-ASSESS — WHICH BAND DOES YOUR WORK HIT?
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {crit.bands.map((b, i) => {
            const on = band === i
            return (
              <button
                key={b.range}
                onClick={() => onBand(i)}
                className="rounded-xl p-4 text-left transition-all"
                style={{ background: on ? crit.cssVar : 'var(--bg)', border: `1px solid ${on ? crit.cssVar : 'var(--border)'}`, color: on ? '#fff' : 'var(--text)' }}
              >
                <div className="text-base font-black">{b.range}</div>
                <div className="text-xs font-bold" style={{ opacity: on ? 0.95 : 0.7 }}>{b.label}</div>
              </button>
            )
          })}
        </div>
        {band !== undefined && (
          <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            To reach the next band, compare your folder above against the wording in{' '}
            <strong>Study exemplar</strong> mode — be honest about what&apos;s missing.
          </p>
        )}
      </section>
    </div>
  )
}

// ponytail: export = print-to-PDF via the browser. Zero deps. Swap for a PDF
// lib only if pixel-perfect layout/branding becomes a requirement.
function printFolder(project: DesignProject, saved: DesignProgress) {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
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
