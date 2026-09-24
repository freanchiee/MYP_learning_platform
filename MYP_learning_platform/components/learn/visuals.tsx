'use client'
import { createContext, useEffect, useRef, useState } from 'react'
import type { BoxKind, Cell, FlowNode } from '@/data/learn/physics'
import { hand } from './hand'
import './learn.css'

export const DeckCtx = createContext(false)

const ctl = 'rounded-[var(--radius-control)] px-3 py-2 text-xs font-black tracking-wider focus:outline-none focus:ring-2'
const primary: React.CSSProperties = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }
const secondary: React.CSSProperties = { border: '1px solid var(--border-strong)', color: 'var(--text)', background: 'var(--surface-inset)' }
const inset: React.CSSProperties = { background: 'var(--surface-inset)', border: '1px solid var(--border)' }

// ---------- the checkbox from the handwritten notes: ☑ ☒ and the dotted "optional" box ----------
export function Tick({ kind, size = 28, delay = 0, label }: { kind: BoxKind | 'blank'; size?: number; delay?: number; label?: string }) {
  const col = kind === 'yes' ? 'var(--success)' : kind === 'no' ? 'var(--danger)' : 'var(--accent)'
  const d = `${delay}s`
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" role="img" aria-label={label ?? (kind === 'yes' ? 'ticked' : kind === 'no' ? 'crossed' : kind === 'opt' ? 'optional' : 'empty')} style={{ flex: 'none' }}>
      <rect x="3" y="3" width="22" height="22" rx="4" fill="none" stroke={kind === 'blank' ? 'var(--border-strong)' : col} strokeWidth="2" strokeDasharray={kind === 'opt' || kind === 'blank' ? '3 3' : undefined} />
      {kind === 'yes' && <path className="dp-draw" style={{ ['--len' as string]: 30, ['--d' as string]: d }} d="M7 15 L12 20 L22 6" fill="none" stroke={col} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
      {kind === 'no' && (
        <>
          <path className="dp-draw" style={{ ['--len' as string]: 20, ['--d' as string]: d }} d="M8 8 L20 20" fill="none" stroke={col} strokeWidth="3" strokeLinecap="round" />
          <path className="dp-draw" style={{ ['--len' as string]: 20, ['--d' as string]: `${delay + 0.15}s` }} d="M20 8 L8 20" fill="none" stroke={col} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {kind === 'opt' && <path d="M7 15 L12 20 L22 6" fill="none" stroke={col} strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round" opacity="0.7" />}
    </svg>
  )
}

// ---------- matrix: fill the boxes yourself, then check (the notes' Matter / Space / Black hole / Wave grid) ----------
export function Matrix({ title, idea, cols, rows }: { title: string; idea: string; cols: { head: string; sub?: string; ex?: string }[]; rows: { label: string; cells: Cell[] }[] }) {
  const [guess, setGuess] = useState<Record<string, 'yes' | 'no'>>({})
  const [checked, setChecked] = useState(false)
  const [rev, setRev] = useState(0)
  const key = (r: number, c: number) => `${r}-${c}`
  const truth = (cell: Cell) => (cell.v === 'yes' ? 'yes' : 'no')
  const total = rows.length * cols.length
  const right = rows.reduce((n, r, ri) => n + r.cells.filter((c, ci) => guess[key(ri, ci)] === truth(c)).length, 0)
  const cycle = (k: string) => {
    setChecked(false)
    setGuess((g) => {
      const n = { ...g }
      if (!g[k]) n[k] = 'yes'
      else if (g[k] === 'yes') n[k] = 'no'
      else delete n[k]
      return n
    })
  }
  const showAll = () => {
    const g: Record<string, 'yes' | 'no'> = {}
    rows.forEach((r, ri) => r.cells.forEach((c, ci) => (g[key(ri, ci)] = truth(c))))
    setGuess(g)
    setChecked(true)
    setRev((x) => x + 1)
  }
  return (
    <div>
      <p className="text-sm" style={{ color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text)' }}>{/[?.!]$/.test(title) ? title : `${title}.`}</strong> {idea}</p>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-separate text-center" style={{ borderSpacing: 6, minWidth: 460, tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th style={{ width: 96 }} />
              {cols.map((c) => (
                <th key={c.head} className="rounded-[var(--radius-panel)] px-2 py-2 align-top" style={inset}>
                  <div className="text-sm font-extrabold" style={{ color: 'var(--text)' }}>{c.head}</div>
                  {c.sub && <div className="text-[11px] font-semibold" style={{ color: 'var(--text-muted)' }}>{c.sub}</div>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={r.label}>
                <th scope="row" className={`${hand.className} pr-2 text-right text-xl font-bold`} style={{ color: 'var(--text)' }}>{r.label}</th>
                {r.cells.map((c, ci) => {
                  const g = guess[key(ri, ci)]
                  const ok = checked && g && g === truth(c)
                  const bad = checked && g && g !== truth(c)
                  return (
                    <td key={ci} className="rounded-[var(--radius-panel)] p-2" style={{ ...inset, outline: ok ? '2px solid var(--success)' : bad ? '2px solid var(--warning)' : 'none' }}>
                      <button onClick={() => cycle(key(ri, ci))} aria-label={`${r.label} for ${cols[ci].head}: ${g ?? 'not answered'}. Press to change.`} className="mx-auto block rounded-[var(--radius-control)] p-1 focus:outline-none focus:ring-2">
                        <Tick key={`${g}-${rev}`} kind={g ?? 'blank'} size={32} delay={0.05 * (ri + ci)} />
                      </button>
                      {c.v === 'tiny' && (checked || g === 'no') && <div className={`${hand.className} text-base`} style={{ color: 'var(--text-muted)' }}>*negligible</div>}
                      {checked && c.note && <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{c.note}</div>}
                    </td>
                  )
                })}
              </tr>
            ))}
            <tr>
              <th />
              {cols.map((c) => (
                <td key={c.head} className={`${hand.className} align-top text-lg leading-tight`} style={{ color: 'var(--text-muted)' }}>{c.ex}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button onClick={() => setChecked(true)} className={ctl} style={primary}>CHECK MY BOXES</button>
        <button onClick={showAll} className={ctl} style={secondary}>SHOW ANSWERS</button>
        <button onClick={() => { setGuess({}); setChecked(false) }} className={ctl} style={secondary}>CLEAR</button>
        <span className="text-xs font-bold" style={{ color: 'var(--text-muted)' }} aria-live="polite">
          {checked ? `${right} of ${total} correct` : 'Tap a box: once for ✓, twice for ✗, three times to clear.'}
        </span>
      </div>
    </div>
  )
}

// ---------- flow tree: question, animated YES / NO arrows, outcome cards, revealed step by step ----------
function countNodes(n: FlowNode): number {
  return 1 + (n.then ? countNodes(n.then) : 0) + (n.branches ?? []).reduce((a, b) => a + countNodes(b.node), 0)
}

function Arrow({ label, tone }: { label: string; tone: 'yes' | 'no' | 'plain' }) {
  const col = tone === 'yes' ? 'var(--success)' : tone === 'no' ? 'var(--danger)' : 'var(--text-subtle)'
  return (
    <div className="flex flex-col items-center" aria-hidden={!label}>
      <span className={`${hand.className} text-2xl font-bold`} style={{ color: col }}>{label}</span>
      <svg width="24" height="44" viewBox="0 0 24 44">
        <path className="dp-draw" style={{ ['--len' as string]: 50 }} d="M12 2 L12 38" stroke={col} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path className="dp-draw" style={{ ['--len' as string]: 20, ['--d' as string]: '0.4s' }} d="M4 30 L12 40 L20 30" stroke={col} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function NodeCard({ n }: { n: FlowNode }) {
  const bracketCount = n.bracket?.count ?? 0
  const boxes = n.boxes ?? []
  const row = (b: { text: string; kind: BoxKind }, i: number) => (
    <li key={b.text} className="flex items-center gap-2.5 text-sm font-semibold" style={{ color: 'var(--text)' }}>
      <Tick kind={b.kind} size={24} delay={0.2 + i * 0.2} />
      <span>{b.text}</span>
    </li>
  )
  return (
    <div className="rounded-[var(--radius-card)] p-4 text-left" style={{ ...inset, boxShadow: 'var(--shadow-card)' }}>
      {n.q && <div className="text-lg font-extrabold leading-snug" style={{ color: 'var(--text)' }}>{n.q}</div>}
      {n.title && <div className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>{n.title}</div>}
      {n.tag && <span className="mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-black tracking-wider" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>{n.tag}</span>}
      {boxes.length > 0 && (
        <ul className="mt-3 grid gap-2">
          {bracketCount > 0 ? (
            <li>
              <div className="flex items-stretch gap-3">
                <ul className="grid flex-1 gap-2">{boxes.slice(0, bracketCount).map(row)}</ul>
                <div className="flex items-center gap-2" aria-label={n.bracket!.label}>
                  <svg width="14" height="100%" viewBox="0 0 14 60" preserveAspectRatio="none" style={{ minHeight: 48 }} aria-hidden>
                    <path className="dp-draw" style={{ ['--len' as string]: 90, ['--d' as string]: '0.6s' }} d="M2 2 Q12 2 12 12 L12 24 Q12 30 6 30 Q12 30 12 36 L12 48 Q12 58 2 58" stroke="var(--accent)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <span className={`${hand.className} text-xl font-bold`} style={{ color: 'var(--accent)' }}>{n.bracket!.label}</span>
                </div>
              </div>
            </li>
          ) : null}
          {boxes.slice(bracketCount).map((b, i) => row(b, i + bracketCount))}
        </ul>
      )}
      {n.note && <div className={`${hand.className} dp-note mt-2 text-xl leading-tight`} style={{ color: 'var(--text-muted)' }}>{n.note}</div>}
    </div>
  )
}

function FlowView({ n, shown, idx }: { n: FlowNode; shown: number; idx: number }) {
  const visible = idx < shown
  const thenIdx = idx + 1
  let next = thenIdx + (n.then ? countNodes(n.then) : 0)
  const branches = (n.branches ?? []).map((b) => {
    const at = next
    next += countNodes(b.node)
    return { b, at }
  })
  return (
    <div className="flex flex-col items-center" style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', transition: 'opacity .2s' }} aria-hidden={!visible}>
      {visible ? <div className="dp-pop w-full max-w-sm"><NodeCard n={n} /></div> : <div className="w-full max-w-sm" style={{ minHeight: 60 }} />}
      {n.then && (
        <>
          {thenIdx < shown ? <div className="dp-pop"><Arrow label="" tone="plain" /></div> : <div style={{ height: 44 }} />}
          <FlowView n={n.then} shown={shown} idx={thenIdx} />
        </>
      )}
      {branches.length > 0 && (
        <div className="dp-branches grid w-full gap-x-4" style={{ ['--n' as string]: branches.length }}>
          {branches.map(({ b, at }) => (
            <div key={b.label} className="flex flex-col items-center">
              {at < shown ? <Arrow label={b.label} tone={b.tone} /> : <div style={{ height: 70 }} />}
              <FlowView n={b.node} shown={shown} idx={at} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function Flow({ title, root }: { title: string; root: FlowNode }) {
  const total = countNodes(root)
  const [shown, setShown] = useState(1)
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>{title.toUpperCase()}</span>
        {total > 1 && <span className="text-xs" style={{ color: 'var(--text-subtle)' }}>step {Math.min(shown, total)} of {total}</span>}
      </div>
      <div className="mt-3 pb-2"><div><FlowView n={root} shown={shown} idx={0} /></div></div>
      {total > 1 && <div className="mt-3 flex flex-wrap gap-2">
        <button onClick={() => setShown((s) => Math.min(total, s + 1))} disabled={shown >= total} className={`${ctl} disabled:opacity-50`} style={primary}>NEXT STEP ▸</button>
        <button onClick={() => setShown(total)} disabled={shown >= total} className={`${ctl} disabled:opacity-50`} style={secondary}>SHOW ALL</button>
        <button onClick={() => setShown(1)} className={ctl} style={secondary}>RESTART</button>
      </div>}
    </div>
  )
}

// ---------- arrow table: "kg → mass", "sunrise → sunset → 1 day" ----------
export function ArrowList({ title, head, rows }: { title?: string; head?: [string, string]; rows: { from: string; to: string; note?: string; emoji?: string }[] }) {
  return (
    <div>
      {title && <div className="mb-2 text-xs font-black tracking-[0.3em]" style={{ color: 'var(--accent)' }}>{title.toUpperCase()}</div>}
      <div role="table" className="overflow-hidden rounded-[var(--radius-card)]" style={inset}>
        {head && (
          <div role="row" className="grid grid-cols-[1fr_44px_1.2fr] gap-2 px-4 py-2 text-[11px] font-black uppercase tracking-[0.25em]" style={{ color: 'var(--text-subtle)', background: 'var(--surface-2)' }}>
            <span>{head[0]}</span><span /><span>{head[1]}</span>
          </div>
        )}
        {rows.map((r, i) => (
          <div key={r.from} role="row" className="dp-pop grid grid-cols-[1fr_44px_1.2fr] items-center gap-2 px-4 py-2.5" style={{ ['--d' as string]: `${i * 0.12}s`, borderTop: i || head ? '1px solid var(--divider)' : undefined }}>
            <span className="text-sm font-extrabold" style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)' }}>{r.emoji && <span aria-hidden>{r.emoji} </span>}{r.from}</span>
            <svg width="44" height="14" viewBox="0 0 44 14" aria-hidden>
              <path className="dp-draw" style={{ ['--len' as string]: 40, ['--d' as string]: `${i * 0.12 + 0.2}s` }} d="M2 7 H40 M34 2 L41 7 L34 12" stroke="var(--accent)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
              {r.to}
              {r.note && <span className={`${hand.className} ml-2 text-lg`} style={{ color: 'var(--text-muted)' }}>{r.note}</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Pills({ groups }: { groups: { label: string; tone?: 'accent' | 'muted' | 'warn'; items: string[] }[] }) {
  return (
    <div className="grid gap-3">
      {groups.map((g, gi) => (
        <div key={g.label} className="dp-pop rounded-[var(--radius-panel)] p-3" style={{ ...inset, ['--d' as string]: `${gi * 0.15}s` }}>
          <div className={`${hand.className} text-xl font-bold`} style={{ color: g.tone === 'warn' ? 'var(--warning)' : 'var(--accent)' }}>{g.label}</div>
          <div className="mt-1 flex flex-wrap gap-2">
            {g.items.map((it) => (
              <span key={it} className="rounded-full px-3 py-1 text-sm font-bold" style={{ background: g.tone === 'muted' ? 'var(--surface-2)' : 'var(--accent-soft)', color: 'var(--text)' }}>{it}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Formulas({ items }: { items: { eq: string; legend: string[] }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((f, i) => (
        <div key={f.eq} className="dp-pop rounded-[var(--radius-card)] p-4 text-center" style={{ ...inset, ['--d' as string]: `${i * 0.2}s` }}>
          <div className="text-3xl font-extrabold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{f.eq}</div>
          <ul className={`${hand.className} mt-2 text-xl leading-tight`} style={{ color: 'var(--text-muted)' }}>{f.legend.map((l) => <li key={l}>{l}</li>)}</ul>
        </div>
      ))}
    </div>
  )
}

export function HandNote({ text, by }: { text: string; by?: string }) {
  return (
    <blockquote className="dp-note dp-pop rounded-[var(--radius-panel)] p-4" style={{ background: 'var(--accent-soft)', border: '1px dashed var(--accent)' }}>
      <p className={`${hand.className} text-2xl font-bold leading-snug`} style={{ color: 'var(--text)' }}>&ldquo;{text}&rdquo;</p>
      {by && <footer className="mt-1 text-xs font-bold" style={{ color: 'var(--text-muted)' }}>{by}</footer>}
    </blockquote>
  )
}

// ---------- slide deck: one idea per screen ----------
export function Deck({ slides, render }: { slides: { id: string; kicker: string; title: string; blocks: unknown[] }[]; render: (b: never, i: number) => React.ReactNode }) {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState<'next' | 'prev'>('next')
  const root = useRef<HTMLDivElement>(null)
  const go = (n: number) => {
    const c = Math.max(0, Math.min(slides.length - 1, n))
    setDir(c >= i ? 'next' : 'prev')
    setI(c)
  }
  useEffect(() => {
    const h = (e: Event) => {
      const id = (e as CustomEvent<string>).detail
      const k = slides.findIndex((s) => s.id === id)
      if (k >= 0) {
        setDir(k >= i ? 'next' : 'prev')
        setI(k)
        setTimeout(() => root.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30)
      }
    }
    window.addEventListener('dp-goto', h)
    return () => window.removeEventListener('dp-goto', h)
  }, [slides, i])
  const s = slides[i]
  return (
    <section
      ref={root}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Lesson slides"
      onKeyDown={(e) => {
        if (e.target instanceof HTMLElement && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return
        if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1) }
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(i - 1) }
      }}
      className="chrome-card scroll-mt-20 p-4 focus:outline-none focus:ring-2 md:p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: 'var(--accent)' }}>{s.kicker}</div>
        <div className="text-xs font-bold" style={{ color: 'var(--text-subtle)' }} aria-live="polite">{i + 1} / {slides.length}</div>
      </div>
      <div key={s.id} id={s.id} className={`scroll-mt-20 mt-2 grid min-w-0 gap-4 dp-slide-${dir}`} aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}: ${s.title}`}>
        <h2 className="text-2xl font-extrabold md:text-3xl" style={{ color: 'var(--text)', letterSpacing: -0.5 }}>{s.title}</h2>
        <DeckCtx.Provider value={true}>{s.blocks.map((b, k) => <div key={k} className="min-w-0">{render(b as never, k)}</div>)}</DeckCtx.Provider>
      </div>
      <div className="mt-5 flex items-center justify-between gap-3">
        <button onClick={() => go(i - 1)} disabled={i === 0} className={`${ctl} disabled:opacity-40`} style={secondary} aria-label="Previous slide">◂ BACK</button>
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
          {slides.map((x, k) => (
            <button key={x.id} role="tab" aria-selected={k === i} aria-label={`Slide ${k + 1}: ${x.title}`} onClick={() => go(k)} className="h-3 rounded-full transition-all focus:outline-none focus:ring-2" style={{ width: k === i ? 26 : 12, background: k === i ? 'var(--accent)' : k < i ? 'var(--accent-2)' : 'var(--border-strong)' }} />
          ))}
        </div>
        <button onClick={() => go(i + 1)} disabled={i === slides.length - 1} className={`${ctl} disabled:opacity-40`} style={primary} aria-label="Next slide">NEXT ▸</button>
      </div>
    </section>
  )
}
