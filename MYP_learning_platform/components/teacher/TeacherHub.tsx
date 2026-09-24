'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { YEARS, liveActivitiesForYear } from '@/data/design/live/registry'
import CreateClassForm from './CreateClassForm'
import SubjectPicker from './SubjectPicker'
import { CopyInviteButton } from './InviteCard'

const NAV_H = 56

export interface HubClass { id: string; name: string; join_code: string; students: number; assignments: number; emoji: string; from: string; to: string }
export interface HubAssignment { id: string; classId: string; className: string; title: string; kind: string; subject: string; due_at: string | null; done: number; total: number }
export interface HubResource { slug: string; label: string; icon: string; papers: number; topics: number }

const GATES = [
  { id: 'classes', label: 'YOUR CLASSES', from: '#0a0a14', via: '#1a1430', to: '#2a1f4a' },
  { id: 'resources', label: 'FREE RESOURCES', from: '#0a1420', via: '#123048', to: '#1f5f6b' },
  { id: 'gameducation', label: 'GAMEDUCATION', from: '#140a20', via: '#2d1450', to: '#5b2a86' },
]

const glass = { background: 'var(--surface-elevated)', border: '1px solid var(--border)' } as const
const eyebrow = 'text-[10px] font-black tracking-[0.4em]'
const btnSolid = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' } as const
const btnGhost = { border: '1px solid var(--border-strong)', color: 'var(--text)' } as const

export default function TeacherHub({ name, subjects, classes, assignments, resources }: { name: string; subjects: string[]; classes: HubClass[]; assignments: HubAssignment[]; resources: HubResource[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [hover, setHover] = useState<number | null>(null)
  const [mine, setMine] = useState(subjects)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => setActive(Math.max(0, Math.min(Math.round(el.scrollTop / el.clientHeight), GATES.length - 1)))
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (i: number) => ref.current?.scrollTo({ top: i * ref.current.clientHeight, behavior: 'smooth' })
  const shown = resources.filter((r) => mine.includes(r.slug))
  const firstClass = classes[0]
  const pad = 'px-6 md:pl-40 md:pr-16'

  return (
    <>
      <div ref={ref} style={{ height: `calc(100vh - ${NAV_H}px)`, overflowY: 'scroll', scrollSnapType: 'y mandatory', scrollBehavior: 'smooth', background: 'var(--bg)' }}>
        {/* ── 1. Classes ── */}
        <section className={pad} style={{ ...sectionStyle(0), overflowY: 'auto' }}>
          <div className="mx-auto max-w-6xl py-12" style={{ color: 'var(--text)' }}>
            <div className={eyebrow} style={{ color: 'var(--text-subtle)' }}>TEACHER DASHBOARD</div>
            <h1 className="mt-3 font-extrabold leading-none" style={{ fontSize: 'clamp(36px, 6vw, 84px)', letterSpacing: '-3px' }}>Welcome, {name}</h1>

            <div className="mt-6 max-w-2xl rounded-2xl p-4" style={glass}>
              <div className="mb-2 text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>SUBJECTS YOU TEACH</div>
              <SubjectPicker initial={subjects} onChange={setMine} />
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
              <div>
                <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
                  <h2 className="text-2xl font-extrabold">Your active classes</h2>
                </div>
                <div className="mb-4 rounded-2xl p-4" style={glass}><CreateClassForm /></div>
                {classes.length === 0 ? (
                  <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>No classes yet — create one above and share its code with your students.</p>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {classes.map((c, i) => (
                      <div key={c.id} className="overflow-hidden rounded-2xl" style={glass}>
                        <div className="relative h-24 overflow-hidden" style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})` }}>
                          <span aria-hidden className="absolute -right-2 -top-4 select-none leading-none" style={{ fontSize: 110, opacity: 0.25 }}>{c.emoji}</span>
                          <span className="absolute bottom-[-18px] left-4 grid h-14 w-14 place-items-center rounded-2xl text-3xl shadow-lg" style={{ background: 'var(--surface-elevated)', border: '3px solid var(--surface-elevated)' }}>{c.emoji}</span>
                        </div>
                        <div className="p-4 pt-6">
                          <Link href={`/classes/${c.id}`} className="text-lg font-extrabold hover:underline">{c.name}</Link>
                          <div className="mt-1 text-xs font-bold tracking-widest" style={{ color: 'var(--text-subtle)' }}>CODE <span style={{ color: 'var(--accent)' }}>{c.join_code}</span></div>
                          <div className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>{c.students} student{c.students === 1 ? '' : 's'} · {c.assignments} assignment{c.assignments === 1 ? '' : 's'}</div>
                          <div className="mt-4 flex gap-2">
                            <Link href={`/classes/${c.id}?tab=library`} className="rounded-lg px-3 py-2 text-xs font-black tracking-wider" style={btnSolid}>CREATE ASSIGNMENT</Link>
                            <Link href={`/classes/${c.id}`} className="rounded-lg px-3 py-2 text-xs font-black tracking-wider" style={btnGhost}>OPEN</Link>
                            <CopyInviteButton code={c.join_code} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <aside className="rounded-2xl p-5 self-start" style={glass}>
                <h2 className="text-xl font-extrabold">Assignments</h2>
                {assignments.length === 0 ? (
                  <p className="mt-3 text-sm" style={{ color: 'var(--text-subtle)' }}>No ongoing or recent assignments.</p>
                ) : (
                  assignments.map((a) => (
                    <Link key={a.id} href={`/classes/${a.classId}?tab=insights`} className="mt-3 block rounded-xl p-3" style={{ background: 'var(--surface-inset)' }}>
                      <div className="text-sm font-bold">{a.title}</div>
                      <div className="text-xs" style={{ color: 'var(--text-subtle)' }}>{a.className} · {a.kind === 'paper' ? 'Past paper' : 'Topic revision'}</div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full" style={{ background: 'var(--border)' }}>
                        <div className="h-full rounded-full" style={{ width: `${a.total ? Math.round((a.done / a.total) * 100) : 0}%`, background: 'var(--accent)' }} />
                      </div>
                      <div className="mt-1 text-[11px]" style={{ color: 'var(--text-subtle)' }}>{a.done} of {a.total} done</div>
                    </Link>
                  ))
                )}
              </aside>
            </div>
            <div className="mt-10 text-center text-[11px] font-black tracking-[0.25em]" style={{ color: 'var(--text-subtle)' }}>SCROLL FOR FREE RESOURCES ↓</div>
          </div>
        </section>

        {/* ── 2. Free resources for chosen subjects ── */}
        <section className={pad} style={{ ...sectionStyle(1), overflowY: 'auto' }}>
          <div className="mx-auto max-w-6xl py-12" style={{ color: 'var(--text)' }}>
            <div className={eyebrow} style={{ color: 'var(--text-subtle)' }}>FREE · FOR YOUR SUBJECTS</div>
            <h2 className="mt-3 font-extrabold leading-none" style={{ fontSize: 'clamp(32px, 5vw, 72px)', letterSpacing: '-2px' }}>Resources to assign</h2>
            <p className="mt-4 max-w-xl text-base" style={{ color: 'var(--text-muted)', fontFamily: 'Georgia, serif' }}>
              Past papers and topic-wise revision for the subjects you teach. Pick a class, choose what to set, and follow how every student does.
            </p>
            {shown.length === 0 ? (
              <p className="mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>Choose your subjects at the top of your dashboard to see resources here.</p>
            ) : (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map((r) => (
                  <div key={r.slug} className="rounded-2xl p-5" style={glass}>
                    <div className="text-3xl">{r.icon}</div>
                    <h3 className="mt-2 text-xl font-extrabold">{r.label}</h3>
                    <div className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                      {r.papers > 0 && `${r.papers} past papers`}{r.papers > 0 && r.topics > 0 && ' · '}{r.topics > 0 && `${r.topics} revision topics`}
                      {r.papers === 0 && r.topics === 0 && 'Live classes and guides'}
                    </div>
                    {firstClass && (r.papers > 0 || r.topics > 0) ? (
                      <Link href={`/classes/${firstClass.id}?tab=library&subject=${r.slug}`} className="mt-4 inline-block rounded-lg px-3 py-2 text-xs font-black tracking-wider" style={btnSolid}>ASSIGN TO {firstClass.name.toUpperCase()} →</Link>
                    ) : r.papers > 0 || r.topics > 0 ? (
                      <div className="mt-4 text-xs" style={{ color: 'var(--text-subtle)' }}>Create a class first to assign this.</div>
                    ) : (
                      <Link href="/guides" className="mt-4 inline-block rounded-lg px-3 py-2 text-xs font-black tracking-wider" style={btnGhost}>FREE GUIDES →</Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── 3. Gameducation ── */}
        <section className={pad} style={{ ...sectionStyle(2), overflowY: 'auto' }}>
          <div className="mx-auto max-w-6xl py-12" style={{ color: 'var(--text)' }}>
            <div className={eyebrow} style={{ color: 'var(--text-subtle)' }}>LIVE · HOST FROM ANY DEVICE · STUDENTS JOIN WITH A CODE</div>
            <h2 className="mt-3 font-extrabold leading-none" style={{ fontSize: 'clamp(32px, 5vw, 72px)', letterSpacing: '-2px' }}>Gameducation</h2>
            <p className="mt-4 max-w-xl text-base" style={{ color: 'var(--text-muted)', fontFamily: 'Georgia, serif' }}>
              Game-style live classes: a quiz, a worksheet or a team icebreaker on the big screen while every student answers on their own device. Choose the class in the lobby.
            </p>
            {YEARS.map((year) => {
              const acts = liveActivitiesForYear(year)
              if (!acts.length) return null
              return (
                <div key={year} className="mt-8">
                  <h3 className="text-lg font-extrabold">{year}</h3>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {acts.map((a) => (
                      <Link key={a.id} href={`/design/live/${a.id}`} className="rounded-2xl p-5 transition-transform hover:-translate-y-1" style={{ background: `linear-gradient(145deg, ${a.theme.from}, ${a.theme.via} 55%, ${a.theme.to})`, border: '1px solid var(--border)', color: '#fff' }}>
                        <div className="text-2xl">{a.icon}</div>
                        <div className="mt-1 text-lg font-extrabold leading-tight">{a.title}</div>
                        <div className="mt-1 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{a.subtitle}</div>
                        <div className="mt-3 text-xs font-black tracking-widest">HOST →</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/design/live" className="rounded-lg px-4 py-3 text-xs font-black tracking-widest" style={btnSolid}>ALL LIVE CLASSES →</Link>
              <Link href="/design/live/history" className="rounded-lg px-4 py-3 text-xs font-black tracking-widest" style={btnGhost}>PAST SESSIONS</Link>
              <Link href="/gameducation" className="rounded-lg px-4 py-3 text-xs font-black tracking-widest" style={btnGhost}>ABOUT GAMEDUCATION</Link>
            </div>
          </div>
        </section>
      </div>

      {/* Diamond nav, same as the Design hub */}
      <nav className="fixed z-50 hidden flex-col gap-4 md:flex" style={{ left: '2rem', top: `calc(50% + ${NAV_H / 2}px)`, transform: 'translateY(-50%)' }}>
        {GATES.map((g, i) => {
          const on = i === active
          const hov = hover === i
          return (
            <div key={g.id} className="flex cursor-pointer items-center gap-2" onClick={() => goTo(i)} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <div style={{ width: on ? 12 : hov ? 10 : 8, height: on ? 12 : hov ? 10 : 8, transform: 'rotate(45deg)', background: on ? 'var(--accent)' : hov ? 'var(--text-muted)' : 'var(--border)', border: on ? 'none' : '1px solid var(--border-strong)', transition: 'all 0.2s', boxShadow: on ? '0 0 10px var(--accent)' : 'none' }} />
              <span style={{ color: on ? 'var(--text)' : hov ? 'var(--text-muted)' : 'var(--text-subtle)', fontSize: on || hov ? 11 : 9.5, fontWeight: on ? 900 : 700, letterSpacing: '0.15em', whiteSpace: 'nowrap', userSelect: 'none' }}>{g.label}</span>
            </div>
          )
        })}
      </nav>
      <div className="fixed z-50 hidden text-xs font-black tracking-widest md:block" style={{ right: '2rem', bottom: '2rem', color: 'var(--text-subtle)' }}>
        {String(active + 1).padStart(2, '0')} / {String(GATES.length).padStart(2, '0')}
      </div>
    </>
  )
}

function sectionStyle(i: number) {
  const g = GATES[i]
  return {
    height: `calc(100vh - ${NAV_H}px)`,
    scrollSnapAlign: 'start' as const,
    scrollSnapStop: 'always' as const,
    position: 'relative' as const,
    background: i === 1 ? 'var(--surface)' : 'var(--bg)',
    backgroundImage: i === 1 ? 'none' : 'var(--bg-image)',
  }
}
