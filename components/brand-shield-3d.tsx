'use client'

import { useRef, type MouseEvent } from 'react'

export function BrandShieldIcon() {
  return (
    <svg viewBox="0 0 240 260" className="h-full w-full drop-shadow-[0_12px_35px_rgba(0,0,0,0.45)]">
      <defs>
        <linearGradient id="shieldLeftFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e10613" />
          <stop offset="100%" stopColor="#a70811" />
        </linearGradient>
        <linearGradient id="shieldRightFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#163e88" />
          <stop offset="100%" stopColor="#0b1f3a" />
        </linearGradient>
        <linearGradient id="shieldRim" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.92)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.38)" />
        </linearGradient>
        <clipPath id="shieldMask">
          <path d="M120 10L220 42V138c0 58-38 99-100 114C58 237 20 196 20 138V42L120 10Z" />
        </clipPath>
      </defs>

      <path
        d="M120 10L220 42V138c0 58-38 99-100 114C58 237 20 196 20 138V42L120 10Z"
        fill="url(#shieldRim)"
      />

      <g clipPath="url(#shieldMask)">
        <rect x="18" y="8" width="102" height="246" fill="url(#shieldLeftFill)" />
        <rect x="120" y="8" width="102" height="246" fill="url(#shieldRightFill)" />
        <rect x="116" y="8" width="8" height="246" fill="rgba(255,255,255,0.95)" />

        <path d="M137 112C160 92 184 94 220 87" stroke="white" strokeWidth="14" fill="none" />
        <path d="M123 148C152 130 185 128 222 121" stroke="white" strokeWidth="14" fill="none" />
        <path d="M123 182C152 165 185 163 220 157" stroke="white" strokeWidth="14" fill="none" />

        <g fill="white">
          <circle cx="150" cy="44" r="4.5" />
          <circle cx="172" cy="53" r="4.5" />
          <circle cx="194" cy="64" r="4.5" />
          <circle cx="138" cy="66" r="4.5" />
          <circle cx="160" cy="75" r="4.5" />
          <circle cx="182" cy="84" r="4.5" />
        </g>

        <g stroke="white" strokeWidth="6.8" strokeLinecap="round" fill="none">
          <path d="M47 77V128L72 145" />
          <path d="M67 60V113L98 132" />
          <path d="M87 52V100L112 117" />
          <path d="M73 145L96 158V181" />
          <path d="M112 117V157" />
        </g>
        <g fill="white">
          <circle cx="47" cy="77" r="6" />
          <circle cx="67" cy="60" r="6" />
          <circle cx="87" cy="52" r="6" />
          <circle cx="73" cy="145" r="6" />
          <circle cx="96" cy="158" r="6" />
          <circle cx="96" cy="181" r="6" />
          <circle cx="112" cy="117" r="6" />
        </g>

        <rect x="87" y="83" width="18" height="30" fill="white" opacity="0.95" />
      </g>

      <text
        x="120"
        y="146"
        textAnchor="middle"
        fontSize="64"
        fontWeight={700}
        fill="white"
        style={{ letterSpacing: '0.04em', fontFamily: 'var(--font-display)' }}
      >
        IT
      </text>
    </svg>
  )
}

export default function BrandShield3D() {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateY = ((x - rect.width / 2) / rect.width) * 18
    const rotateX = ((rect.height / 2 - y) / rect.height) * 16

    card.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`)
    card.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`)
  }

  const reset = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--rx', '0deg')
    card.style.setProperty('--ry', '0deg')
  }

  return (
    <div className="relative mx-auto w-full max-w-[430px] [perspective:1600px]">
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="brand-card glass-panel relative h-[430px] w-full overflow-hidden p-6 transition-transform duration-200 [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.2),transparent_48%),radial-gradient(circle_at_80%_78%,rgba(24,101,255,0.22),transparent_46%),radial-gradient(circle_at_12%_76%,rgba(193,18,31,0.18),transparent_42%)]" />
        <div className="brand-ring absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="brand-ring brand-ring-2 absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full" />

        <div className="absolute left-6 top-6 rounded-md border border-white/25 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary">
          Max IT Core
        </div>

        <div className="absolute right-6 top-6 rounded-md border border-white/25 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-secondary">
          US Talent Grid
        </div>

        <div className="relative z-10 mx-auto mt-12 h-64 w-64">
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_40deg_at_50%_50%,rgba(22,62,136,0.35),rgba(193,18,31,0.25),rgba(255,255,255,0.15),rgba(22,62,136,0.35))] blur-xl" />
          <div className="brand-icon-wrap glass-panel relative h-full w-full p-4">
            <BrandShieldIcon />
          </div>
        </div>

        <div className="absolute inset-x-6 bottom-6 glass-panel p-4">
          <p className="font-display text-sm uppercase tracking-[0.18em] text-primary">Future Workforce Engine</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Precision staffing and consulting for enterprise technology teams.
          </p>
        </div>
      </div>
    </div>
  )
}
