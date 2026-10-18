import type { ReactNode } from 'react'
import { requirePapersAccess } from '@/lib/papers-access'

export default async function ExamLayout({ children }: { children: ReactNode }) {
  await requirePapersAccess()
  return (
    <div className="overflow-hidden h-screen w-screen">
      {children}
    </div>
  )
}
