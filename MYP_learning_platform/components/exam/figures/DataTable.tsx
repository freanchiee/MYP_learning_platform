export interface DataTableData {
  headers: string[]
  rows: (string | number)[][]
}

export default function DataTable({ data }: { data: DataTableData }) {
  return (
    <div className="overflow-x-auto rounded-control shadow-card border border-line">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-surface-2">
            {data.headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-2 text-xs font-semibold text-ink-muted uppercase tracking-wide border-b border-line text-left"
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
                  className="px-4 py-2 text-ink border-t border-divider"
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
