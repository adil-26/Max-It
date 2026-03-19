import type { CSSProperties } from 'react'

const WAVE_COUNT = 24

export default function HeroWaveRibbon() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[220px] overflow-hidden">
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        role="presentation"
      >
        <defs>
          <linearGradient id="heroWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c1121f" />
            <stop offset="36%" stopColor="#2b65d9" />
            <stop offset="72%" stopColor="#b7d0ff" />
             <stop offset="100%" stopColor="#d12d38" />
          </linearGradient>
        </defs>

        {Array.from({ length: WAVE_COUNT }).map((_, index) => {
          const baseY = 136 + index * 2.8
          const lift = 28 + index * 1.2
          const style: CSSProperties = {
            opacity: 0.72 - index * 0.02,
            animationDelay: `${index * -0.35}s`,
            animationDuration: `${9.2 + index * 0.3}s`,
          }

          return (
            <path
              key={index}
              d={`M -120 ${baseY} C 160 ${baseY - lift} 420 ${baseY + lift} 720 ${baseY} C 980 ${baseY - lift} 1240 ${baseY + lift} 1560 ${baseY}`}
              className="hero-wave-line"
              stroke="url(#heroWaveGradient)"
              style={style}
            />
          )
        })}
      </svg>
    </div>
  )
}
