'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StarDisplayProps {
  stars: 0 | 1 | 2 | 3
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'text-base',
  md: 'text-2xl',
  lg: 'text-4xl',
} as const

export default function StarDisplay({ stars, size = 'md' }: StarDisplayProps) {
  const textSize = sizeMap[size]

  return (
    <div className={cn('flex items-center gap-0.5', textSize)} aria-label={`${stars} out of 3 stars`}>
      <AnimatePresence mode="popLayout">
        {[1, 2, 3].map(n => {
          const filled = n <= stars
          return (
            <motion.span
              key={n}
              layout
              initial={filled ? { scale: 0, rotate: -30 } : false}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 22, delay: (n - 1) * 0.08 }}
              className="select-none leading-none"
              title={filled ? 'Earned' : 'Not yet earned'}
            >
              {filled ? '⭐' : '☆'}
            </motion.span>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
