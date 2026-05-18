import type { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: 'linear-gradient(135deg, #001e30 0%, #003b5c 100%)',
      }}
    >
      <div className="w-full max-w-md">
        {/* Platform branding */}
        <div className="flex flex-col items-center mb-8 select-none">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3 shadow-lg">
            <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#003b5c' }}>
              MYP
            </span>
          </div>
          <h1 className="text-white text-2xl font-semibold tracking-wide">MYP Sciences</h1>
          <p className="text-blue-200 text-sm mt-1 opacity-80">e-Assessment Platform</p>
        </div>

        {/* Page content */}
        {children}
      </div>
    </div>
  )
}
