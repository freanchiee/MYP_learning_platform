'use client'

// Criterion B artifact: forces genuinely divergent concepts before a choice
// unlocks. Persisted as one JSON string in the shared answers bag (via the
// `value`/`onChange` pair from useDesignProgress), so no new storage needed.

interface BoardData {
  ideas: string[]
  chosenIndex: number | null
  justification: string
}

const EMPTY: BoardData = { ideas: ['', '', ''], chosenIndex: null, justification: '' }

function parse(raw: string): BoardData {
  if (!raw) return EMPTY
  try {
    const d = JSON.parse(raw)
    return { ideas: d.ideas?.length ? d.ideas : EMPTY.ideas, chosenIndex: d.chosenIndex ?? null, justification: d.justification ?? '' }
  } catch {
    return EMPTY
  }
}

export default function IdeaDivergenceBoard({
  value,
  onChange,
  accent,
  minIdeas = 3,
}: {
  value: string
  onChange: (v: string) => void
  accent: string
  minIdeas?: number
}) {
  const data = parse(value)
  const write = (patch: Partial<BoardData>) => onChange(JSON.stringify({ ...data, ...patch }))

  const filledCount = data.ideas.filter((i) => i.trim().length > 0).length
  const canChoose = filledCount >= minIdeas

  return (
    <div className="rounded-2xl p-5" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
      <div className="text-xs font-black tracking-widest" style={{ color: accent }}>
        IDEA DIVERGENCE BOARD
      </div>
      <p className="mt-1 text-sm" style={{ color: 'var(--text-subtle)' }}>
        Write at least {minIdeas} genuinely different ideas — not {minIdeas} versions of the same one. Then choose.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {data.ideas.map((idea, i) => {
          const chosen = data.chosenIndex === i
          return (
            <div
              key={i}
              className="rounded-xl p-3.5"
              style={{
                background: chosen ? accent : 'var(--bg)',
                border: `1px solid ${chosen ? accent : 'var(--border)'}`,
                transition: 'all .15s',
              }}
            >
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-xs font-black" style={{ color: chosen ? '#fff' : 'var(--text-subtle)' }}>
                  IDEA {i + 1}
                </span>
                {data.ideas.length > minIdeas && (
                  <button
                    onClick={() => write({ ideas: data.ideas.filter((_, j) => j !== i), chosenIndex: data.chosenIndex === i ? null : data.chosenIndex })}
                    className="text-xs font-bold"
                    style={{ color: chosen ? 'rgba(255,255,255,0.7)' : 'var(--text-subtle)' }}
                  >
                    ✕
                  </button>
                )}
              </div>
              <textarea
                value={idea}
                onChange={(e) => {
                  const ideas = [...data.ideas]
                  ideas[i] = e.target.value
                  write({ ideas })
                }}
                rows={3}
                placeholder="Describe a distinct concept…"
                className="w-full resize-y rounded-lg p-2.5 text-sm outline-none"
                style={{
                  background: chosen ? 'rgba(255,255,255,0.12)' : 'var(--surface-elevated)',
                  color: chosen ? '#fff' : 'var(--text)',
                  border: '1px solid transparent',
                }}
              />
              {canChoose && (
                <button
                  onClick={() => write({ chosenIndex: chosen ? null : i })}
                  className="mt-2 w-full rounded-lg py-1.5 text-xs font-black"
                  style={{
                    background: chosen ? 'rgba(255,255,255,0.18)' : 'var(--surface-elevated)',
                    color: chosen ? '#fff' : accent,
                    border: `1px solid ${chosen ? 'transparent' : accent}`,
                  }}
                >
                  {chosen ? '✓ CHOSEN' : 'CHOOSE THIS'}
                </button>
              )}
            </div>
          )
        })}
        <button
          onClick={() => write({ ideas: [...data.ideas, ''] })}
          className="flex min-h-[110px] items-center justify-center rounded-xl text-sm font-bold"
          style={{ border: `1px dashed var(--border)`, color: 'var(--text-subtle)' }}
        >
          + Add another idea
        </button>
      </div>

      {!canChoose && (
        <p className="mt-3 text-xs font-semibold" style={{ color: 'var(--text-subtle)' }}>
          Fill in {minIdeas - filledCount} more idea{minIdeas - filledCount === 1 ? '' : 's'} to unlock selection.
        </p>
      )}

      {canChoose && data.chosenIndex !== null && (
        <label className="mt-4 block">
          <span className="text-sm font-bold" style={{ color: 'var(--text)' }}>
            Justify your choice against the success criteria you wrote above — not against what sounds coolest.
          </span>
          <textarea
            value={data.justification}
            onChange={(e) => write({ justification: e.target.value })}
            rows={3}
            placeholder="Why this idea, specifically?"
            className="mt-2 w-full resize-y rounded-xl p-3 text-sm outline-none"
            style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
          />
        </label>
      )}
    </div>
  )
}
