export default function FuturisticBackground({ subtle = false }: { subtle?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 ${subtle ? 'opacity-[0.15]' : 'opacity-40'} futuristic-grid`} />
      <div className={`scanline-overlay absolute inset-0 ${subtle ? 'opacity-10' : ''}`} />

      <div className={`aurora-blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/55 ${subtle ? 'opacity-30' : ''}`} />
      <div className={`aurora-blob absolute right-0 top-1/3 h-80 w-80 rounded-full bg-secondary/50 [animation-delay:1.8s] ${subtle ? 'opacity-30' : ''}`} />
      <div className={`aurora-blob absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-300/30 [animation-delay:3.2s] ${subtle ? 'opacity-20' : ''}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--foreground)_10%,transparent)_0%,transparent_45%),linear-gradient(180deg,color-mix(in_oklch,var(--background)_82%,transparent)_0%,color-mix(in_oklch,var(--background)_88%,transparent)_70%,color-mix(in_oklch,var(--background)_95%,black)_100%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_45%),linear-gradient(180deg,rgba(3,6,18,0.5)_0%,rgba(3,6,18,0.65)_70%,rgba(3,6,18,0.86)_100%)]" />
    </div>
  )
}
