'use client'

import { useEffect, useRef, useState } from 'react'

// Scripted "agent executes your task" demo — deliberately NOT a real LLM
// call (no API cost/latency/key management). It teaches the interaction
// design (what the user sees while the agent "works", how it reports back)
// without needing a live backend. See the case study's C-stage prompt: be
// explicit in your build log that this is simulated, not real.

const STEPS = ['Reading task…', 'Checking what it needs…', 'Attempting it…', 'Done — here’s what happened']

export default function ToDoneAgentDemo({ accent }: { accent: string }) {
  const [task, setTask] = useState('')
  const [step, setStep] = useState(-1)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  const run = () => {
    if (!task.trim() || step >= 0) return
    setStep(0)
    STEPS.slice(1).forEach((_, i) => {
      timers.current.push(setTimeout(() => setStep(i + 1), (i + 1) * 900))
    })
  }
  const reset = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    setStep(-1)
    setTask('')
  }

  return (
    <div className="rounded-2xl p-5" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
      <div className="text-xs font-black tracking-widest" style={{ color: accent }}>
        SIMULATED AGENT DEMO
      </div>
      <p className="mt-1 text-sm" style={{ color: 'var(--text-subtle)' }}>
        A scripted walkthrough of the interaction — not a real agent. Use it to prototype what the user sees, then
        decide what a real version would need.
      </p>

      {step < 0 ? (
        <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="e.g. Reply to the group chat that I'll bring snacks"
            className="flex-1 rounded-xl px-3.5 py-2.5 text-sm outline-none"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
          />
          <button onClick={run} disabled={!task.trim()} className="rounded-xl px-4 py-2.5 text-sm font-black disabled:opacity-40" style={{ background: accent, color: '#fff' }}>
            Hand to agent →
          </button>
        </div>
      ) : (
        <div className="mt-4 rounded-xl p-4" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
          <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>
            “{task}”
          </p>
          <ol className="mt-3 space-y-2">
            {STEPS.map((s, i) => {
              const active = i <= step
              return (
                <li key={s} className="flex items-center gap-2.5 text-sm" style={{ color: active ? 'var(--text)' : 'var(--text-subtle)' }}>
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black"
                    style={{ background: active ? accent : 'var(--surface-2)', color: active ? '#fff' : 'var(--text-subtle)' }}
                  >
                    {i < step ? '✓' : i === step ? '…' : ''}
                  </span>
                  {s}
                </li>
              )
            })}
          </ol>
          {step === STEPS.length - 1 && (
            <>
              <p className="mt-3 rounded-lg p-3 text-sm" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>
                (This is where a real agent would show its actual output — a drafted message, a confirmation, a link — for
                the user to approve or edit.)
              </p>
              <button onClick={reset} className="mt-3 text-xs font-bold underline" style={{ color: 'var(--text-subtle)' }}>
                Try another task
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
