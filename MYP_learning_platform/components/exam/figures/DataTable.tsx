export interface DataTableData {
  headers: string[]
  rows: (string | number)[][]
}

const isNumeric = (c: string | number) =>
  typeof c === 'number' || (typeof c === 'string' && /^[-+]?[\d.,]+\s*[%°a-zA-Z/³²]*$/.test(c.trim()))

export default function DataTable({ data }: { data: DataTableData }) {
  return (
    // w-full + wrapping headers/cells so the table fits the column instead of forcing
    // a horizontal scroll; overflow-x-auto stays only as a last resort for huge tables.
    <div className="figure-surface w-full overflow-x-auto rounded-control border border-line">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-surface-2">
            {data.headers.map((h, i) => (
              <th
                key={i}
                className="px-3 py-2 text-[11px] font-semibold text-ink-muted uppercase tracking-wide border-b border-line align-bottom whitespace-normal break-words text-left"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-surface' : 'bg-surface-2'}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-3 py-2 text-ink border-t border-divider align-top ${
                    isNumeric(cell) ? 'tabular-nums whitespace-nowrap' : 'whitespace-normal break-words'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
