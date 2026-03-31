'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type MotionCardProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function MotionCard({ children, className, delay = 0 }: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={cn(
        'relative will-change-transform before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 before:transition before:duration-300 before:content-[""] hover:before:opacity-100 before:[box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08),0_18px_40px_-24px_rgba(47,99,255,0.45)]',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
