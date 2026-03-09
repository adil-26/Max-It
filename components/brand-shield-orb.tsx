'use client'

import { useRef, type MouseEvent } from 'react'
import { BrandShieldIcon } from '@/components/brand-shield-3d'

export default function BrandShieldOrb() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const rect = wrapper.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateY = ((x - rect.width / 2) / rect.width) * 14
    const rotateX = ((rect.height / 2 - y) / rect.height) * 14

    wrapper.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`)
    wrapper.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`)
  }

  const reset = () => {
    const wrapper = wrapperRef.current
    if (!wrapper) return
    wrapper.style.setProperty('--rx', '0deg')
    wrapper.style.setProperty('--ry', '0deg')
  }

  return (
    <div className="mx-auto w-fit [perspective:1300px]">
      <div
        ref={wrapperRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="relative h-32 w-32 transition-transform duration-200 [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]"
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.24),rgba(0,0,0,0.12)_54%,rgba(0,0,0,0.28)_100%)] backdrop-blur-xl" />
        <div className="brand-ring absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="brand-ring brand-ring-2 absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="relative z-10 p-3">
          <BrandShieldIcon />
        </div>
      </div>
    </div>
  )
}

