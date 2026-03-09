'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const queryRevealElements = () =>
      Array.from(document.querySelectorAll<HTMLElement>('.reveal-up'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const showAll = () => {
        queryRevealElements().forEach((element) => {
          element.classList.add('is-visible')
        })
      }

      showAll()

      const reduceMotionObserver = new MutationObserver(() => {
        showAll()
      })
      reduceMotionObserver.observe(document.body, { childList: true, subtree: true })

      return () => {
        reduceMotionObserver.disconnect()
      }
      return
    }

    const observed = new WeakSet<HTMLElement>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    const observeNewElements = () => {
      queryRevealElements().forEach((element) => {
        if (observed.has(element)) {
          return
        }

        element.classList.remove('is-visible')
        observer.observe(element)
        observed.add(element)
      })
    }

    observeNewElements()

    const mutationObserver = new MutationObserver(() => {
      observeNewElements()
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutationObserver.disconnect()
      observer.disconnect()
    }
  }, [pathname])

  return null
}
