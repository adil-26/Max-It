export default function FuturisticBackground({ subtle = false }: { subtle?: boolean }) {
  const pexelsPixelsTexture =
    'url(https://images.pexels.com/photos/7026467/pexels-photo-7026467.jpeg?auto=compress&cs=tinysrgb&w=2000)'
  const pexelsPixelsGameOver =
    'url(https://images.pexels.com/photos/4835419/pexels-photo-4835419.jpeg?auto=compress&cs=tinysrgb&w=2000)'
  const pexelsPixelsGradient =
    'url(https://images.pexels.com/photos/7130557/pexels-photo-7130557.jpeg?auto=compress&cs=tinysrgb&w=2000)'

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className={`photo-pan absolute inset-0 ${subtle ? 'opacity-[0.2]' : 'opacity-[0.34]'}`}
        style={{ backgroundImage: pexelsPixelsTexture }}
      />
      <div
        className={`photo-pan-alt absolute inset-0 mix-blend-screen ${subtle ? 'opacity-[0.08]' : 'opacity-[0.16]'}`}
        style={{ backgroundImage: pexelsPixelsGameOver }}
      />
      <div
        className={`photo-pan absolute inset-0 mix-blend-color-dodge ${subtle ? 'opacity-[0.04]' : 'opacity-[0.1]'}`}
        style={{ backgroundImage: pexelsPixelsGradient }}
      />

      <div className={`circuit-lines absolute inset-0 ${subtle ? 'opacity-[0.18]' : 'opacity-[0.34]'}`} />
      <div className={`circuit-pulse absolute inset-0 ${subtle ? 'opacity-[0.12]' : 'opacity-[0.22]'}`} />
      <div
        className={`absolute inset-0 ${subtle ? 'opacity-[0.08]' : 'opacity-[0.18]'} futuristic-grid`}
      />
      <div className={`scanline-overlay absolute inset-0 ${subtle ? 'opacity-[0.08]' : 'opacity-[0.2]'}`} />

      <svg
        className={`tech-lines absolute inset-0 h-full w-full ${subtle ? 'opacity-[0.12]' : 'opacity-[0.28]'}`}
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="techLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(57,97,248,0)" />
            <stop offset="50%" stopColor="rgba(57,97,248,0.85)" />
            <stop offset="100%" stopColor="rgba(255,31,32,0)" />
          </linearGradient>
          <linearGradient id="techLineGradAlt" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,31,32,0)" />
            <stop offset="45%" stopColor="rgba(255,31,32,0.72)" />
            <stop offset="100%" stopColor="rgba(57,97,248,0)" />
          </linearGradient>
        </defs>
        <path className="tech-path" d="M-120 210 C220 130, 400 350, 760 260 C1020 195, 1320 170, 1720 250" />
        <path className="tech-path alt" d="M-100 620 C240 700, 470 480, 790 560 C1090 640, 1360 700, 1710 610" />
        <path className="tech-path" d="M-140 440 C210 350, 460 520, 780 420 C1090 330, 1330 420, 1710 390" />
      </svg>

      <div className={`hud-ring absolute inset-0 m-auto h-[420px] w-[420px] ${subtle ? 'opacity-[0.1]' : 'opacity-[0.2]'}`} />
      <div
        className={`hud-ring hud-ring-alt absolute inset-0 m-auto h-[600px] w-[600px] ${subtle ? 'opacity-[0.08]' : 'opacity-[0.16]'}`}
      />

      <div className="tech-node absolute left-[12%] top-[24%] [animation-delay:0.4s]" />
      <div className="tech-node absolute left-[28%] top-[62%] [animation-delay:1.1s]" />
      <div className="tech-node absolute left-[72%] top-[22%] [animation-delay:0.8s]" />
      <div className="tech-node absolute left-[84%] top-[64%] [animation-delay:1.5s]" />

      <div className={`aurora-blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/55 ${subtle ? 'opacity-30' : ''}`} />
      <div className={`aurora-blob absolute right-0 top-1/3 h-80 w-80 rounded-full bg-secondary/50 [animation-delay:1.8s] ${subtle ? 'opacity-30' : ''}`} />
      <div className={`aurora-blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-300/30 [animation-delay:3.2s] ${subtle ? 'opacity-20' : ''}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--foreground)_10%,transparent)_0%,transparent_45%),linear-gradient(180deg,color-mix(in_oklch,var(--background)_84%,transparent)_0%,color-mix(in_oklch,var(--background)_90%,transparent)_62%,color-mix(in_oklch,var(--background)_97%,black)_100%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_45%),linear-gradient(180deg,rgba(3,6,18,0.48)_0%,rgba(3,6,18,0.7)_68%,rgba(3,6,18,0.9)_100%)]" />
    </div>
  )
}
