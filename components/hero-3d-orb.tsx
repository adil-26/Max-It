'use client'

import { useRef, type MouseEvent } from 'react'

export default function Hero3DOrb() {
  const panelRef = useRef<HTMLDivElement>(null)

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const panel = panelRef.current
    if (!panel) return

    const rect = panel.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const rotateY = ((x - rect.width / 2) / rect.width) * 22
    const rotateX = ((rect.height / 2 - y) / rect.height) * 22

    panel.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`)
    panel.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`)
  }

  const reset = () => {
    const panel = panelRef.current
    if (!panel) return
    panel.style.setProperty('--rx', '0deg')
    panel.style.setProperty('--ry', '0deg')
  }

  return (
    <div className="relative mx-auto w-full max-w-[420px] [perspective:1400px]">
      <div
        ref={panelRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="float-slow glass-panel relative h-[420px] w-full overflow-hidden p-6 transition-transform duration-200 will-change-transform [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-gradient-to-br from-primary/40 to-secondary/35 blur-[1px] shadow-[0_0_120px_rgba(67,140,255,0.35)]" />
        <div className="orbit absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/35" />
        <div className="orbit absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/35 [animation-duration:16s] [animation-direction:reverse]" />

        <div className="absolute left-6 top-6 rounded-md border border-white/20 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary">
          Talent Matrix
        </div>
        <div className="absolute bottom-6 right-6 rounded-md border border-white/20 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-secondary">
          Staffing Core
        </div>

        <div className="absolute inset-x-6 bottom-6 glass-panel p-4">
          <p className="font-display text-sm uppercase tracking-[0.18em] text-primary">
            Real-Time Hiring Intelligence
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Built for high-velocity recruitment, consulting delivery, and workforce scale.
          </p>
        </div>
      </div>
    </div>
  )
}
