'use client'

import Link from 'next/link'
import { YEARS, liveActivitiesForYear } from '@/data/design/live/registry'

export default function LiveHub() {
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: 'calc(100vh - 56px)' }}>
      <div className="mx-auto max-w-[1100px] px-5 py-10 md:px-10">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <Link href="/design" className="text-sm font-bold tracking-widest" style={{ color: 'var(--text-subtle)' }}>
            ← BACK TO DESIGN
          </Link>
          <Link
            href="/design/live/history"
            className="rounded-full px-4 py-2 text-sm font-black"
            style={{ background: 'var(--surface-2)', color: 'var(--text)', border: '1px solid var(--border)' }}
          >
            📜 My live class history
          </Link>
        </div>

        <div className="mt-4 text-xs font-black tracking-[0.35em]" style={{ color: 'var(--accent)' }}>
          LIVE CLASS · HOST FROM ANY DEVICE · STUDENTS JOIN WITH A CODE
        </div>
        <h1 className="mt-2 text-4xl font-extrabold md:text-6xl" style={{ color: 'var(--text)', letterSpacing: '-1px' }}>
          Live Classes
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Kahoot-style, teacher-hosted sessions built for MYP Design — a quiz, a worksheet, or a team icebreaker,
          projected on the big screen while every student answers live from their own device. Pick a year group to
          see what&apos;s live.
        </p>

        {YEARS.map((year) => {
          const activities = liveActivitiesForYear(year)
          return (
            <section key={year} className="mt-10">
              <h2 className="text-xl font-extrabold" style={{ color: 'var(--text)' }}>
                {year}
              </h2>
              {activities.length === 0 ? (
                <div className="mt-3 rounded-2xl border px-5 py-6 text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--surface-2)' }}>
                  Coming soon.
                </div>
              ) : (
                <div className="mt-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {activities.map((a) => (
                    <Link
                      key={a.id}
                      href={`/design/live/${a.id}`}
                      className="group flex flex-col rounded-3xl p-6 transition-transform hover:-translate-y-1"
                      style={{ background: `linear-gradient(145deg, ${a.theme.from} 0%, ${a.theme.via} 55%, ${a.theme.to} 100%)` }}
                    >
                      <div className="text-3xl">{a.icon}</div>
                      <h3 className="mt-2 text-xl font-extrabold leading-tight text-white">{a.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                        {a.subtitle}
                      </p>
                      {a.teams && (
                        <div className="mt-3 text-[11px] font-bold" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          TEAM ICEBREAKER · {a.teams.length} TEAMS
                        </div>
                      )}
                      <span className="mt-5 text-sm font-black tracking-wide text-white opacity-80 group-hover:opacity-100">
                        Host or join →
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}
