'use client'
import { useContext, useEffect, useState } from 'react'
import type { Block, Mcq } from '@/data/learn/physics'
import { useLessonProgress } from '@/lib/learn/progress'
import { Widget } from './widgets'
import { ArrowList, Deck, DeckCtx, Flow, Formulas, HandNote, Matrix, Pills } from './visuals'

const ctl = 'rounded-[var(--radius-control)] px-4 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
const primary: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }

function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((s, i) =>
        s.startsWith('**') ? <strong key={i} style={{ color: 'var(--text)' }}>{s.slice(2, -2)}</strong> : <span key={i}>{s}</span>,
      )}
    </>
  )
}

function Card({ children, label }: { children: React.ReactNode; label?: string }) {
  const inDeck = useContext(DeckCtx) // inside a slide the slide is already the card
  const cls = inDeck ? '' : 'chrome-card p-5 md:p-6'
  return (
    <section className={cls}>
      {label && !inDeck && <div className="mb-3 text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>{label}</div>}
      {children}
    </section>
  )
}

function McqView({ q, saved, onPick, back }: { q: Mcq; saved?: number; onPick: (i: number) => void; back?: string }) {
  const answered = saved !== undefined
  const right = saved === q.answer
  return (
    <div>
      <p className="text-base font-bold" style={{ color: 'var(--text)' }}>{q.q}</p>
      <div className="mt-3 grid gap-2" role="radiogroup" aria-label={q.q}>
        {q.options.map((o, i) => {
          const sel = saved === i
          const mark = answered && (i === q.answer ? 'var(--success)' : sel ? 'var(--warning)' : 'var(--border)')
          return (
            <button
              key={o}
              role="radio"
              aria-checked={sel}
              onClick={() => !right && onPick(i)}
              className="rounded-[var(--radius-panel)] px-4 py-3 text-left text-sm font-semibold focus:outline-none focus:ring-2"
              style={{ background: sel ? 'var(--accent-soft)' : 'var(--surface-inset)', border: `1.5px solid ${mark || 'var(--border)'}`, color: 'var(--text)' }}
            >
              {o}
              {answered && i === q.answer && <span className="sr-only"> (correct answer)</span>}
            </button>
          )
        })}
      </div>
      {answered && (
        <div role="status" className="mt-3 rounded-[var(--radius-panel)] px-4 py-3 text-sm" style={{ background: right ? 'var(--success-surface)' : 'var(--warning-surface)', color: 'var(--text)' }}>
          <strong>{right ? 'Correct. ' : 'Not yet. '}</strong>
          {right ? q.why : back ? (
            <>Have another go. <a
              href={`#${back}`}
              onClick={(e) => {
                e.preventDefault()
                window.dispatchEvent(new CustomEvent('dp-goto', { detail: back }))
                document.getElementById(back)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="font-bold underline"
              style={{ color: 'var(--accent)' }}
            >Review the section that covers this</a>.</>
          ) : 'Have another go.'}
        </div>
      )}
    </div>
  )
}

function PredictThenWidget({ b }: { b: Extract<Block, { t: 'widget' }> }) {
  const [pick, setPick] = useState<number | undefined>()
  const [skip, setSkip] = useState(false)
  const unlocked = !b.predict || pick !== undefined || skip
  return (
    <Card label="Explore">
      <h3 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>{b.title}</h3>
      <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}><strong>The idea:</strong> {b.idea}</p>
      {b.predict && (
        <div className="mt-4 rounded-[var(--radius-panel)] p-4" style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}>
          <McqView q={b.predict} saved={pick} onPick={setPick} />
          {pick === undefined && !skip && (
            <button onClick={() => setSkip(true)} className="mt-2 text-xs font-bold underline" style={{ color: 'var(--text-muted)' }}>Skip and go to the simulation</button>
          )}
        </div>
      )}
      <div className="mt-4">
        {unlocked ? <Widget id={b.id} /> : <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Answer the prediction above to unlock the simulation. Then test it.</p>}
      </div>
    </Card>
  )
}

function ApplyView({ b, saved, onSave }: { b: Extract<Block, { t: 'apply' }>; saved?: string; onSave: (s: string) => void }) {
  const [text, setText] = useState(saved ?? '')
  const [shown, setShown] = useState(false)
  useEffect(() => { if (saved) setText((t) => t || saved) }, [saved])
  return (
    <Card label="Apply">
      <p className="text-base font-bold" style={{ color: 'var(--text)' }}>{b.prompt}</p>
      <textarea
        aria-label="Your answer"
        value={text}
        onChange={(e) => { setText(e.target.value); onSave(e.target.value) }}
        rows={4}
        className="mt-3 w-full rounded-[var(--radius-panel)] p-3 text-sm focus:outline-none focus:ring-2"
        style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' }}
        placeholder="Write your answer in your own words first…"
      />
      <div className="mt-2 text-xs" style={{ color: 'var(--text-subtle)' }}>Your writing is saved on this device.</div>
      {!shown ? (
        <button disabled={text.trim().length < 15} onClick={() => setShown(true)} className={`${ctl} mt-3 disabled:opacity-50`} style={primary}>SHOW MODEL ANSWER</button>
      ) : (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-[var(--radius-panel)] p-4" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border)' }}>
            <div className="text-[11px] font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>MODEL ANSWER</div>
            <p className="mt-2 text-sm" style={{ color: 'var(--text)' }}>{b.model}</p>
          </div>
          <div className="rounded-[var(--radius-panel)] p-4" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border)' }}>
            <div className="text-[11px] font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>SELF-CHECK</div>
            <ul className="mt-2 grid gap-1.5 text-sm" style={{ color: 'var(--text)' }}>
              {b.checklist.map((c) => (
                <li key={c}><label className="flex items-start gap-2"><input type="checkbox" style={{ accentColor: 'var(--accent)', marginTop: 3 }} />{c}</label></li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Card>
  )
}

function StaticBlock({ b }: { b: Block }) {
  switch (b.t) {
    case 'hook':
      return (
        <div className="rounded-[var(--radius-card)] p-5 md:p-6" style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}>
          <div className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>Hook</div>
          <p className="mt-2 text-lg font-bold md:text-xl" style={{ color: 'var(--text)' }}>{b.text}</p>
        </div>
      )
    case 'h':
      return <h2 id={b.id} className="scroll-mt-20 pt-2 text-2xl font-extrabold" style={{ color: 'var(--text)', letterSpacing: -0.5 }}>{b.text}</h2>
    case 'p':
      return <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}><Inline text={b.text} /></p>
    case 'list':
      return (
        <ul className="grid gap-2 pl-1 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {b.items.map((it) => (
            <li key={it} className="flex gap-3"><span aria-hidden style={{ color: 'var(--accent)' }}>◆</span><span><Inline text={it} /></span></li>
          ))}
        </ul>
      )
    case 'callout': {
      const col = b.kind === 'warn' ? 'var(--warning)' : b.kind === 'idea' ? 'var(--accent)' : 'var(--border-strong)'
      const tag = b.kind === 'warn' ? 'Watch out' : b.kind === 'idea' ? 'Key idea' : 'Note'
      return (
        <aside className="rounded-[var(--radius-card)] p-4 md:p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', borderLeft: `4px solid ${col}` }}>
          <div className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: b.kind === 'note' ? 'var(--text-subtle)' : col }}>{tag} · {b.title}</div>
          <p className="mt-1.5 text-base" style={{ color: 'var(--text)' }}><Inline text={b.text} /></p>
        </aside>
      )
    }
    case 'def':
      return (
        <div className="chrome-card p-4 md:p-5">
          <div className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>Definition</div>
          <p className="mt-1 text-base" style={{ color: 'var(--text)' }}><strong>{b.term}:</strong> <Inline text={b.text} /></p>
        </div>
      )
    case 'widget':
      return <PredictThenWidget b={b} />
    case 'desmos':
      return (
        <Card label="Explore">
          <h3 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>{b.title}</h3>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>{b.description}</p>
          <iframe
            src={b.src}
            title={b.title}
            loading="lazy"
            className="mt-4 w-full"
            style={{ height: 460, border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-panel)', background: '#fff' }}
          />
          <a href={b.src.replace('?embed', '')} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs font-bold underline" style={{ color: 'var(--accent)' }}>Open the graph in Desmos</a>
        </Card>
      )
    case 'matrix':
      return <Card label="Try it: fill in the boxes"><Matrix title={b.title} idea={b.idea} cols={b.cols} rows={b.rows} /></Card>
    case 'flow':
      return <Card label="Follow the arrows"><Flow title={b.title} root={b.root} /></Card>
    case 'arrows':
      return <ArrowList title={b.title} head={b.head} rows={b.rows} />
    case 'pills':
      return <Pills groups={b.groups} />
    case 'formulas':
      return <Formulas items={b.items} />
    case 'note':
      return <HandNote text={b.text} by={b.by} />
    default:
      return null
  }
}

export default function LessonBody({ lessonKey, blocks }: { lessonKey: string; blocks: Block[] }) {
  const { progress, update } = useLessonProgress(lessonKey)
  const checkIds = blocks.filter((b) => b.t === 'check').map((b) => (b as Extract<Block, { t: 'check' }>).id)
  const solved = checkIds.filter((id) => {
    const blk = blocks.find((b) => b.t === 'check' && b.id === id) as Extract<Block, { t: 'check' }>
    return progress.checks[id] === blk.answer
  }).length
  const allDone = checkIds.length > 0 && solved === checkIds.length
  useEffect(() => {
    if (allDone && !progress.done) update((p) => ({ ...p, done: true }))
  }, [allDone, progress.done, update])

  const [ret, setRet] = useState<Record<string, number>>({})
  let checkNo = 0

  return (
    <div className="grid gap-5 [&>*]:min-w-0">
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'check': {
            checkNo += 1
            return (
              <Card key={i} label={`Check ${checkNo} of ${checkIds.length}`}>
                <McqView q={b} back={b.back} saved={progress.checks[b.id]} onPick={(v) => update((p) => ({ ...p, checks: { ...p.checks, [b.id]: v } }))} />
              </Card>
            )
          }
          case 'apply':
            return <ApplyView key={i} b={b} saved={progress.apply[b.id]} onSave={(s) => update((p) => ({ ...p, apply: { ...p.apply, [b.id]: s } }))} />
          case 'retrieval':
            return (
              <Card key={i} label="Remember earlier lessons">
                <div className="grid gap-5">
                  {b.items.map((it, k) => (
                    <div key={it.q}>
                      <div className="mb-1 text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>From lesson {it.from}</div>
                      <McqView q={it} saved={ret[`${i}-${k}`]} onPick={(v) => setRet((r) => ({ ...r, [`${i}-${k}`]: v }))} />
                    </div>
                  ))}
                </div>
              </Card>
            )
          case 'deck':
            return <Deck key={i} slides={b.slides} render={(x) => <StaticBlock b={x as Block} />} />
          case 'summary':
            return (
              <Card key={i} label="Summary card">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-black" style={{ color: 'var(--text)' }}>Key points</h3>
                    <ul className="mt-2 grid gap-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>{b.points.map((p) => <li key={p}>• {p}</li>)}</ul>
                    {b.formulas.length > 0 && (
                      <>
                        <h3 className="mt-4 text-sm font-black" style={{ color: 'var(--text)' }}>Formulas</h3>
                        <ul className="mt-2 grid gap-1.5 text-sm" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>{b.formulas.map((f) => <li key={f}>{f}</li>)}</ul>
                      </>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-black" style={{ color: 'var(--text)' }}>Key terms</h3>
                    <dl className="mt-2 grid gap-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>
                      {b.terms.map((t) => <div key={t.term}><dt className="inline font-bold" style={{ color: 'var(--text)' }}>{t.term}</dt>: <dd className="inline">{t.def}</dd></div>)}
                    </dl>
                    {b.errors.length > 0 && (
                      <>
                        <h3 className="mt-4 text-sm font-black" style={{ color: 'var(--warning)' }}>Common errors</h3>
                        <ul className="mt-2 grid gap-1.5 text-sm" style={{ color: 'var(--text-muted)' }}>{b.errors.map((e) => <li key={e}>• {e}</li>)}</ul>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-5 text-xs font-bold" style={{ color: allDone ? 'var(--success)' : 'var(--text-subtle)' }} aria-live="polite">
                  {allDone ? 'Lesson complete: all checks correct.' : `Checks solved: ${solved} of ${checkIds.length}`}
                </div>
              </Card>
            )
          default:
            return <StaticBlock key={i} b={b} />
        }
      })}
    </div>
  )
}
