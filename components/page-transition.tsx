'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

type TransitionStage = 'rest' | 'exiting' | 'entering'

const EXIT_DURATION_MS = 240
const ENTER_DURATION_MS = 420

export default function PageTransition({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const previousPathname = useRef(pathname)
  const latestChildren = useRef(children)
  const enterTimer = useRef<number | null>(null)
  const exitTimer = useRef<number | null>(null)

  const [displayedChildren, setDisplayedChildren] = useState(children)
  const [stage, setStage] = useState<TransitionStage>('entering')

  useEffect(() => {
    latestChildren.current = children
  }, [children])

  useEffect(() => {
    if (stage === 'entering') {
      if (enterTimer.current !== null) {
        window.clearTimeout(enterTimer.current)
      }

      enterTimer.current = window.setTimeout(() => {
        setStage('rest')
      }, ENTER_DURATION_MS)
    }

    return () => {
      if (enterTimer.current !== null) {
        window.clearTimeout(enterTimer.current)
      }
    }
  }, [stage])

  useEffect(() => {
    if (pathname === previousPathname.current) {
      return
    }

    previousPathname.current = pathname
    setStage('exiting')

    if (exitTimer.current !== null) {
      window.clearTimeout(exitTimer.current)
    }

    exitTimer.current = window.setTimeout(() => {
      setDisplayedChildren(latestChildren.current)
      setStage('entering')
      window.scrollTo({ top: 0, behavior: 'auto' })
    }, EXIT_DURATION_MS)

    return () => {
      if (exitTimer.current !== null) {
        window.clearTimeout(exitTimer.current)
      }
    }
  }, [pathname])

  useEffect(() => {
    if (stage === 'rest') {
      setDisplayedChildren(children)
    }
  }, [children, stage])

  const transitionClass =
    stage === 'exiting'
      ? 'page-transition-exit'
      : stage === 'entering'
        ? 'page-transition-enter'
        : ''

  return <div className={`page-transition-layer ${transitionClass}`}>{displayedChildren}</div>
}
