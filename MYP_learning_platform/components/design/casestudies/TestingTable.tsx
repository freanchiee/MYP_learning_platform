'use client'

// Criterion D artifact: a testing table whose first row is seeded from the
// student's OWN success criteria (their Criterion B answer) — so testing
// is traceable back to a spec they wrote themselves, not a given rubric.

interface Row {
  criterion: string
  target: string
  measured: string
  passFail: 'pass' | 'fail' | ''
  notes: string
}

function parse(raw: string): Row[] {
  if (!raw) return []
  try {
    const d = JSON.parse(raw)
    return Array.isArray(d) ? d : []
  } catch {
    return []
  }
}

const EMPTY_ROW: Row = { criterion: '', target: '', measured: '', passFail: '', notes: '' }

export default function TestingTable({
  value,
  onChange,
  accent,
  bSpecHint,
}: {
  value: string
  onChange: (v: string) => void
  accent: string
  /** The student's own Criterion B success-criteria answer — seeds row 1. */
  bSpecHint?: string
}) {
  let rows = parse(value)
  if (rows.length === 0) {
    rows = [{ ...EMPTY_ROW, criterion: bSpecHint?.slice(0, 140) ?? '' }]
  }

  const write = (next: Row[]) => onChange(JSON.stringify(next))
  const update = (i: number, patch: Partial<Row>) => write(rows.map((r, j) => (j === i ? { ...r, ...patch } : r)))
  const addRow = () => write([...rows, EMPTY_ROW])
  const removeRow = (i: number) => write(rows.filter((_, j) => j !== i))

  return (
    <div className="rounded-2xl p-5" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
      <div className="text-xs font-black tracking-widest" style={{ color: accent }}>
        TESTING TABLE
      </div>
      <p className="mt-1 text-sm" style={{ color: 'var(--text-subtle)' }}>
        Test against the success criteria <strong>you</strong> wrote in Criterion B — one row per criterion.
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] border-separate" style={{ borderSpacing: '0 8px' }}>
          <thead>
            <tr className="text-left text-xs font-black" style={{ color: 'var(--text-subtle)' }}>
              <th className="w-1/3 pb-1">SUCCESS CRITERION (from your B spec)</th>
              <th className="pb-1">TARGET</th>
              <th className="pb-1">MEASURED</th>
              <th className="pb-1">PASS / FAIL</th>
              <th className="pb-1">NOTES</th>
              <th className="pb-1" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ background: 'var(--surface-elevated)' }}>
                {(['criterion', 'target', 'measured'] as const).map((field) => (
                  <td key={field} className="p-2 align-top first:rounded-l-xl">
                    <textarea
                      value={r[field]}
                      onChange={(e) => update(i, { [field]: e.target.value } as Partial<Row>)}
                      rows={2}
                      className="w-full resize-y rounded-lg p-2 text-sm outline-none"
                      style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    />
                  </td>
                ))}
                <td className="p-2 align-top">
                  <select
                    value={r.passFail}
                    onChange={(e) => update(i, { passFail: e.target.value as Row['passFail'] })}
                    className="w-full rounded-lg p-2 text-sm outline-none"
                    style={{
                      background: r.passFail === 'pass' ? 'var(--success)' : r.passFail === 'fail' ? 'var(--accent-action)' : 'var(--bg)',
                      color: r.passFail ? '#fff' : 'var(--text)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <option value="">—</option>
                    <option value="pass">Pass</option>
                    <option value="fail">Fail</option>
                  </select>
                </td>
                <td className="p-2 align-top">
                  <textarea
                    value={r.notes}
                    onChange={(e) => update(i, { notes: e.target.value })}
                    rows={2}
                    className="w-full resize-y rounded-lg p-2 text-sm outline-none"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)' }}
                  />
                </td>
                <td className="rounded-r-xl p-2 align-top">
                  <button onClick={() => removeRow(i)} className="text-xs" style={{ color: 'var(--text-subtle)' }}>
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={addRow} className="mt-3 rounded-lg px-4 py-2 text-xs font-black" style={{ background: accent, color: '#fff' }}>
        + Add criterion
      </button>
    </div>
  )
}
