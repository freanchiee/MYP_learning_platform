export interface DataTableData {
  headers: string[]
  rows: (string | number)[][]
}

export default function DataTable({ data }: { data: DataTableData }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-gray-50">
            {data.headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-2 text-xs font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200 text-left"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-2 text-gray-800 border-t border-gray-100"
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
