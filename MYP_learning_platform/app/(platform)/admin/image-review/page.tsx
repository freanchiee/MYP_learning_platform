import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { loadReviewQueue, loadAllEntries } from './actions'
import ReviewCard from './ReviewCard'
import { DEV_NO_AUTH } from '@/lib/dev-auth'

export const dynamic = 'force-dynamic'

export default async function ImageReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string; paper?: string; status?: string; tab?: string }>
}) {
  // Auth gate
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user && !DEV_NO_AUTH) redirect('/login')

  const params = await searchParams
  const subjectFilter = params.subject ?? ''
  const paperFilter = params.paper ?? ''
  const statusFilter = params.status ?? 'needs_review'
  const tab = params.tab ?? 'queue'

  const [queue, all] = await Promise.all([
    loadReviewQueue(),
    loadAllEntries(),
  ])

  const displayEntries = tab === 'queue' ? queue : all

  // Filter
  const filtered = displayEntries.filter(entry => {
    if (paperFilter && entry.paperId !== paperFilter) return false
    if (subjectFilter && !entry.paperId.startsWith(subjectFilter)) return false
    if (tab !== 'queue' && statusFilter === 'approved' && !entry.approved) return false
    return true
  })

  // Unique paper ids for the paper dropdown
  const papers = Array.from(new Set(all.map(e => e.paperId))).sort()

  // Count stats
  const stats = {
    queue: queue.length,
    approved: all.filter(e => e.approved).length,
    total: all.length,
  }

  // Unique subjects for filter dropdown
  const subjects = Array.from(new Set(all.map(e => e.paperId.split('-')[0]))).sort()

  return (
    <div className="min-h-screen bg-bg" style={{ backgroundImage: 'var(--bg-image)' }}>
      {/* Header */}
      <div className="bg-surface border-b border-line px-6 py-5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-ink">Image Review</h1>
              <p className="text-sm text-ink-subtle mt-1">
                Review SVG replacements for IB images. <strong>Approve</strong> to push live,
                or <strong>Upload</strong> your own image.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex gap-6 mt-4">
            {[
              { label: 'Needs Review', val: stats.queue, color: 'text-warning' },
              { label: 'Approved', val: stats.approved, color: 'text-success' },
              { label: 'Total', val: stats.total, color: 'text-ink-muted' },
            ].map(s => (
              <div key={s.label}>
                <p className={`text-2xl font-bold ${s.color}`}>{s.val}</p>
                <p className="text-xs text-ink-subtle">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-surface border-b border-line px-6 py-3 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex gap-3 flex-wrap items-center">
          {/* Tab selector */}
          <div className="flex rounded-control border border-line overflow-hidden text-xs font-semibold">
            {[
              { key: 'queue', label: `Queue (${stats.queue})` },
              { key: 'all', label: `All (${stats.total})` },
            ].map(t => (
              <a
                key={t.key}
                href={`?tab=${t.key}&subject=${subjectFilter}&paper=${paperFilter}`}
                className={`px-3 py-1.5 transition-colors ${tab === t.key ? 'bg-accent text-on-accent' : 'text-ink-muted hover:bg-surface-2'}`}
              >
                {t.label}
              </a>
            ))}
          </div>

          {/* Subject + paper filters */}
          <form method="get" className="flex items-center gap-2">
            <input type="hidden" name="tab" value={tab} />
            <select
              name="subject"
              defaultValue={subjectFilter}
              className="rounded-control border border-line text-xs px-3 py-1.5 bg-surface-inset text-ink-muted focus:outline-none"
            >
              <option value="">All subjects</option>
              {subjects.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <select
              name="paper"
              defaultValue={paperFilter}
              className="rounded-control border border-line text-xs px-3 py-1.5 bg-surface-inset text-ink-muted focus:outline-none max-w-[220px]"
            >
              <option value="">All papers</option>
              {papers.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <button type="submit" className="px-3 py-1.5 bg-accent text-on-accent text-xs font-semibold rounded-control">
              Filter
            </button>
          </form>

          <span className="ml-auto text-xs text-ink-subtle">
            {filtered.length} item{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Card grid */}
      <div className="max-w-4xl mx-auto px-6 py-6 space-y-5">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-ink-subtle">
            <p className="text-4xl mb-3">🎉</p>
            <p className="text-lg font-semibold text-ink-muted">
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
              <div className="mt-6 inline-block rounded-card border border-line bg-surface px-5 py-4 text-left">
                <p className="text-xs font-semibold text-ink-muted mb-2">To classify a paper:</p>
                <code
                  className="text-xs font-mono block rounded-control px-3 py-2"
                  style={{ background: 'var(--code-bg)', color: 'var(--code-fg)', border: '1px solid var(--code-border)' }}
                >
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
