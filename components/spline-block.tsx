'use client'

import { useEffect, useState, type ReactNode } from 'react'

type SplineBlockProps = {
  url?: string
  title: string
  className?: string
  fallback: ReactNode
}

export default function SplineBlock({ url, title, className = '', fallback }: SplineBlockProps) {
  const [interactive, setInteractive] = useState(false)

  useEffect(() => {
    if (!url) {
      setInteractive(false)
      return
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const compactViewport = window.matchMedia('(max-width: 1023px)')
    const updateInteractive = () => {
      setInteractive(!reducedMotion.matches && !compactViewport.matches)
    }

    updateInteractive()

    const addListener = (query: MediaQueryList, listener: () => void) => {
      if (query.addEventListener) {
        query.addEventListener('change', listener)
        return () => query.removeEventListener('change', listener)
      }

      query.addListener(listener)
      return () => query.removeListener(listener)
    }

    const removeReducedListener = addListener(reducedMotion, updateInteractive)
    const removeCompactListener = addListener(compactViewport, updateInteractive)

    return () => {
      removeReducedListener()
      removeCompactListener()
    }
  }, [url])

  if (!url || !interactive) {
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
