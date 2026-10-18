import type { ReactNode } from 'react'
import { requirePapersAccess } from '@/lib/papers-access'

export default async function PapersAreaLayout({ children }: { children: ReactNode }) {
  await requirePapersAccess()
  return <>{children}</>
}
