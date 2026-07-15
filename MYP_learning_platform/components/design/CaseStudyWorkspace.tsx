'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { CRITERION_BY_KEY, type CriterionKey } from '@/data/design/cycle'
import { ADVANCED_CASE_STUDIES, type CaseStudy } from '@/data/design/caseStudies'
import { useDesignProgress } from '@/hooks/useDesignProgress'
import DesignCycleRing from './DesignCycleRing'
import IdeaDivergenceBoard from './casestudies/IdeaDivergenceBoard'
import BuildLog from './casestudies/BuildLog'
import TestingTable from './casestudies/TestingTable'
import WiringDiagram from './casestudies/WiringDiagram'
import WeatherStationSim from './casestudies/WeatherStationSim'
import ToDoneAgentDemo from './casestudies/ToDoneAgentDemo'
import SplineEmbed from './casestudies/SplineEmbed'

const KEYS: CriterionKey[] = ['A', 'B', 'C', 'D']

export default function CaseStudyWorkspace({ caseStudy }: { caseStudy: CaseStudy }) {
  const [activeKey, setActiveKey] = useState<CriterionKey>('A')
  const id = `case-studies/${caseStudy.id}`
  const { saved, setAnswer, synced } = useDesignProgress(id)

  const crit = CRITERION_BY_KEY[activeKey]
  const stage = caseStudy.stages[activeKey]

  const stageDone = (k: CriterionKey) =>
    caseStudy.stages[k].prompts.some((_, i) => (saved.answers[`${k}:${i}`] || '').trim().length > 0)
  const doneKeys = useMemo(() => new Set(KEYS.filter(stageDone)), [saved]) // eslint-disable-line react-hooks/exhaustive-deps

  const idx = ADVANCED_CASE_STUDIES.findIndex((c) => c.id === caseStudy.id)
  const next = ADVANCED_CASE_STUDIES[idx + 1]
  const activePos = KEYS.indexOf(activeKey)

  const artifactKey = (name: string) => `${activeKey}:artifact:${name}`

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: 'calc(100vh - 56px)' }}>
      <div className="mx-auto max-w-[1400px] px-5 py-8 md:px-10 md:py-10">
        {/* ── Header ── */}
        <Link href="/design/case-studies" className="text-sm font-bold tracking-widest" style={{ color: 'var(--text-subtle)' }}>
          ← ALL CASE STUDIES
        </Link>

        <div className="mt-5">
          <div className="text-sm font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>
            ADVANCED CASE STUDY · {caseStudy.track.toUpperCase()}
          </div>
          <h1 className="mt-1 text-4xl font-extrabold md:text-5xl" style={{ color: 'var(--text)' }}>
            {caseStudy.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              `🌍 ${caseStudy.globalContext}`,
              `🔑 ${caseStudy.keyConcept}`,
              ...caseStudy.relatedConcepts,
              ...(caseStudy.difficultyTier ? [`Tier: ${caseStudy.difficultyTier}`] : []),
            ].map((t) => (
              <span key={t} className="rounded-full px-3.5 py-1.5 text-sm font-bold" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Situation + challenge */}
        <div className="mt-6 grid gap-4 rounded-3xl p-6 md:grid-cols-2 md:p-8" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text)' }}>The situation. </strong>
            {caseStudy.situation}
          </p>
          <div>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text)' }}>Your challenge. </strong>
              {caseStudy.challenge}
            </p>
            <p className="mt-3 text-sm font-semibold" style={{ color: 'var(--text-subtle)' }}>
              Client / target audience: {caseStudy.client}
            </p>
          </div>
        </div>

        {/* Existing solutions to analyse (Criterion A raw material) + hardware */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl p-6" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
            <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>
              REAL PRECEDENTS TO ANALYSE
            </div>
            <ul className="mt-3 space-y-2.5">
              {caseStudy.existingSolutions.map((s) => (
                <li key={s.name} className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text)' }}>{s.name}. </strong>
                  {s.note}
                </li>
              ))}
            </ul>
          </div>
          {caseStudy.hardwareNeeded && caseStudy.hardwareNeeded.length > 0 && (
            <div className="rounded-3xl p-6" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
              <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>
                HARDWARE YOU'LL NEED
              </div>
              <ul className="mt-3 space-y-1.5">
                {caseStudy.hardwareNeeded.map((h) => (
                  <li key={h} className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    • {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ── Two-column body ── */}
        <div className="mt-8 lg:grid lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-10">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-3xl p-6" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
              <DesignCycleRing activeKey={activeKey} onSelect={setActiveKey} doneKeys={doneKeys} />
              <div className="mt-5 space-y-1.5">
                {KEYS.map((k) => {
                  const c = CRITERION_BY_KEY[k]
                  const on = k === activeKey
                  return (
                    <button
                      key={k}
                      onClick={() => setActiveKey(k)}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all"
                      style={{ background: on ? 'var(--surface-2)' : 'transparent', border: `1px solid ${on ? c.cssVar : 'transparent'}` }}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base font-black text-white" style={{ background: c.cssVar }}>
                        {k}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold leading-tight" style={{ color: 'var(--text)' }}>{c.phase}</span>
                      </span>
                      {doneKeys.has(k) && <span style={{ color: 'var(--success)' }}>✓</span>}
                    </button>
                  )
                })}
              </div>
              <div className="mt-5 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
                <div className="text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>
                  {doneKeys.size} of 4 criteria started · {synced ? '☁ Synced' : '💾 Saved on this device'}
                </div>
              </div>
            </div>
          </aside>

          <main className="mt-6 lg:mt-0">
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

            <div className="mt-6 space-y-5">
              {stage.technique && (
                <div className="rounded-2xl p-4" style={{ background: 'var(--surface-2)', border: `1px solid ${crit.cssVar}` }}>
                  <span className="text-xs font-black tracking-widest" style={{ color: crit.cssVar }}>
                    TECHNIQUE — {stage.technique.name.toUpperCase()}
                  </span>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {stage.technique.description}
                  </p>
                </div>
              )}

              <section className="rounded-3xl p-6 md:p-7" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
                <div className="text-xs font-black tracking-widest" style={{ color: crit.cssVar }}>
                  WORK THROUGH THIS YOURSELF
                </div>
                <div className="mt-5 space-y-6">
                  {stage.prompts.map((prompt, i) => (
                    <label key={i} className="block">
                      <span className="text-base font-bold" style={{ color: 'var(--text)' }}>
                        {i + 1}. {prompt}
                      </span>
                      <textarea
                        value={saved.answers[`${activeKey}:${i}`] || ''}
                        onChange={(e) => setAnswer(`${activeKey}:${i}`, e.target.value)}
                        rows={4}
                        placeholder="Write your response…"
                        className="mt-2.5 w-full resize-y rounded-xl p-4 text-base outline-none"
                        style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      />
                    </label>
                  ))}
                </div>
              </section>

              {stage.artifacts?.includes('idea-board') && (
                <IdeaDivergenceBoard
                  value={saved.answers[artifactKey('idea-board')] || ''}
                  onChange={(v) => setAnswer(artifactKey('idea-board'), v)}
                  accent={crit.cssVar}
                />
              )}
              {stage.artifacts?.includes('wiring-diagram') && stage.wiring && (
                <WiringDiagram items={stage.wiring} accent={crit.cssVar} />
              )}
              {stage.artifacts?.includes('build-log') && (
                <BuildLog value={saved.answers[artifactKey('build-log')] || ''} onChange={(v) => setAnswer(artifactKey('build-log'), v)} accent={crit.cssVar} />
              )}
              {stage.artifacts?.includes('testing-table') && (
                <TestingTable
                  value={saved.answers[artifactKey('testing-table')] || ''}
                  onChange={(v) => setAnswer(artifactKey('testing-table'), v)}
                  accent={crit.cssVar}
                  bSpecHint={saved.answers['B:0']}
                />
              )}
              {stage.artifacts?.includes('weather-sim') && <WeatherStationSim accent={crit.cssVar} />}
              {stage.artifacts?.includes('todone-demo') && <ToDoneAgentDemo accent={crit.cssVar} />}
              {stage.artifacts?.includes('spline-embed') && (
                <SplineEmbed value={saved.answers[artifactKey('spline-embed')] || ''} onChange={(v) => setAnswer(artifactKey('spline-embed'), v)} accent={crit.cssVar} />
              )}
            </div>

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
                <Link href={`/design/case-studies/${next.id}`} className="rounded-xl px-5 py-3 text-sm font-black" style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}>
                  Next case study: {next.title} →
                </Link>
              ) : (
                <Link href="/design/case-studies" className="rounded-xl px-5 py-3 text-sm font-bold" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>
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
