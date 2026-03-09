import type { ReactNode } from 'react'

type SplineBlockProps = {
  url?: string
  title: string
  className?: string
  fallback: ReactNode
}

export default function SplineBlock({ url, title, className = '', fallback }: SplineBlockProps) {
  if (!url) {
    return <>{fallback}</>
  }

  return (
    <div className={`glass-panel overflow-hidden p-2 ${className}`}>
      <iframe
        src={url}
        title={title}
        loading="lazy"
        className="h-full w-full rounded-xl border border-white/10"
      />
    </div>
  )
}

