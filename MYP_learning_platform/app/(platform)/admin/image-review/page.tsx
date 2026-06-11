import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { loadReviewQueue, loadAllEntries } from './actions'
import ReviewCard from './ReviewCard'

export const dynamic = 'force-dynamic'

export default async function ImageReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string; status?: string; tab?: string }>
}) {
  // Auth gate
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const params = await searchParams
  const subjectFilter = params.subject ?? ''
  const statusFilter = params.status ?? 'needs_review'
  const tab = params.tab ?? 'queue'

  const [queue, all] = await Promise.all([loadReviewQueue(), loadAllEntries()])

  const displayEntries = tab === 'queue' ? queue : all

  // Filter
  const filtered = displayEntries.filter(entry => {
    if (subjectFilter && !entry.paperId.startsWith(subjectFilter)) return false
    if (tab !== 'queue' && statusFilter === 'approved' && !entry.approved) return false
    if (tab !== 'queue' && statusFilter === 'flagged' && !entry.flagged) return false
    return true
  })

  // Count stats
  const stats = {
    queue: queue.length,
    approved: all.filter(e => e.approved).length,
    flagged: all.filter(e => e.flagged).length,
    total: all.length,
  }

  // Unique subjects for filter dropdown
  const subjects = Array.from(new Set(all.map(e => e.paperId.split('-')[0]))).sort()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Image Review Queue</h1>
          <p className="text-sm text-gray-500 mt-1">
            Review AI-generated replacement images before they go live.
            Approve to update questions.ts, Regenerate to try again, Flag for manual attention.
          </p>

          {/* Stats row */}
          <div className="flex gap-6 mt-4">
            {[
              { label: 'Needs Review', val: stats.queue, color: 'text-amber-600' },
              { label: 'Approved', val: stats.approved, color: 'text-green-600' },
              { label: 'Flagged', val: stats.flagged, color: 'text-red-600' },
              { label: 'Total Classified', val: stats.total, color: 'text-gray-600' },
            ].map(s => (
              <div key={s.label}>
                <p className={`text-2xl font-bold ${s.color}`}>{s.val}</p>
                <p className="text-xs text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex gap-3 flex-wrap items-center">
          {/* Tab selector */}
          <div className="flex rounded-lg border border-gray-200 overflow-hidden text-xs font-semibold">
            {[
              { key: 'queue', label: `Queue (${stats.queue})` },
              { key: 'all', label: `All (${stats.total})` },
            ].map(t => (
              <a
                key={t.key}
                href={`?tab=${t.key}&subject=${subjectFilter}`}
                className={`px-3 py-1.5 transition-colors ${tab === t.key ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {t.label}
              </a>
            ))}
          </div>

          {/* Subject filter */}
          <form method="get" className="flex items-center gap-2">
            <input type="hidden" name="tab" value={tab} />
            <select
              name="subject"
              defaultValue={subjectFilter}
              className="rounded-lg border border-gray-200 text-xs px-3 py-1.5 bg-white text-gray-700 focus:outline-none"
            >
              <option value="">All subjects</option>
              {subjects.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <button type="submit" className="px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg">
              Filter
            </button>
          </form>

          <span className="ml-auto text-xs text-gray-400">
            {filtered.length} item{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Card grid */}
      <div className="max-w-4xl mx-auto px-6 py-6 space-y-5">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-3">🎉</p>
            <p className="text-lg font-semibold text-gray-600">
              {tab === 'queue'
                ? 'Review queue is empty!'
                : 'No entries match the current filter.'}
            </p>
            <p className="text-sm mt-1">
              {tab === 'queue'
                ? 'Run the classify script on a paper to populate the queue.'
                : 'Try changing the subject filter.'}
            </p>
            {tab === 'queue' && (
              <div className="mt-6 inline-block rounded-xl border border-gray-200 bg-white px-5 py-4 text-left">
                <p className="text-xs font-semibold text-gray-600 mb-2">To classify a paper:</p>
                <code className="text-xs font-mono text-gray-800 block">
                  node scripts/classify-images.mjs --paperId physics-nov-2024
                </code>
              </div>
            )}
          </div>
        ) : (
          filtered.map(entry => (
            <ReviewCard
              key={`${entry.paperId}::${entry.taskPath}`}
              entry={entry}
            />
          ))
        )}
      </div>
    </div>
  )
}
