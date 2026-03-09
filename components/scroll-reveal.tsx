'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const queryRevealElements = () =>
      Array.from(document.querySelectorAll<HTMLElement>('.reveal-up'))
    const forEachRevealInNode = (node: Node, run: (element: HTMLElement) => void) => {
      if (!(node instanceof HTMLElement)) {
        return
      }

      if (node.matches('.reveal-up')) {
        run(node)
      }

      node.querySelectorAll<HTMLElement>('.reveal-up').forEach(run)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const showElement = (element: HTMLElement) => {
        element.classList.add('is-visible')
      }

      queryRevealElements().forEach(showElement)

      const reduceMotionObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            forEachRevealInNode(node, showElement)
          })
        })
      })
      reduceMotionObserver.observe(document.body, { childList: true, subtree: true })

      return () => {
        reduceMotionObserver.disconnect()
      }
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

    const observeElement = (element: HTMLElement) => {
      if (observed.has(element)) {
        return
      }

      element.classList.remove('is-visible')
      observer.observe(element)
      observed.add(element)
    }

    queryRevealElements().forEach(observeElement)

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          forEachRevealInNode(node, observeElement)
        })
      })
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutationObserver.disconnect()
      observer.disconnect()
    }
  }, [pathname])

  return null
}
