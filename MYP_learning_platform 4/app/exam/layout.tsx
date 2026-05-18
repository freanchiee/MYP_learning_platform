import type { ReactNode } from 'react'

export default function ExamLayout({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden h-screen w-screen">
      {children}
    </div>
  )
}
