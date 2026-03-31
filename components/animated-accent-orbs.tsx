'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function AnimatedAccentOrbs() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return null
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#ea3a45]/20 blur-3xl"
        animate={{ x: [0, 34, -18, 0], y: [0, -24, 18, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[#2f63ff]/20 blur-3xl"
        animate={{ x: [0, -22, 18, 0], y: [0, 24, -18, 0], scale: [1, 0.95, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
