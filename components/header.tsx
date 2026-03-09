'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/employers', label: 'Employers' },
  { href: '/candidates', label: 'Candidates' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`glass-panel mx-auto max-w-[1440px] transition-all duration-300 ${
          scrolled ? 'border-white/20 bg-black/55 shadow-[0_14px_48px_-30px_rgba(0,0,0,0.9)]' : ''
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
            scrolled ? 'h-16' : 'h-20'
          }`}
        >
          <Link href="/" className="font-display text-sm uppercase tracking-[0.16em] text-foreground sm:text-base">
            MAX IT <span className="text-primary">CONSULTING LLC</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
                    active
                      ? 'neon-outline bg-primary/15 text-foreground'
                      : 'text-muted-foreground hover:bg-white/10 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link href="/contact">
              <Button className="font-display uppercase tracking-[0.12em]">Hire Talent</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="font-display uppercase tracking-[0.12em]">
                Login
              </Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.16em] text-foreground lg:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <nav className="space-y-2 border-t border-white/10 px-4 pb-4 pt-3 lg:hidden">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-xs uppercase tracking-[0.14em] ${
                    active
                      ? 'bg-primary/15 text-foreground'
                      : 'text-muted-foreground hover:bg-white/10 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            <div className="grid grid-cols-2 gap-2 pt-2">
              <Link href="/contact">
                <Button className="w-full font-display uppercase tracking-[0.12em]">Hire Talent</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" className="w-full font-display uppercase tracking-[0.12em]">
                  Login
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
