'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Instagram, Linkedin } from 'lucide-react'
import ThemeToggle from '@/components/theme-toggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/jobs', label: 'Career' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/112240073/admin/dashboard/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: Instagram,
  },
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
          scrolled
            ? 'border-border/80 bg-background/85 shadow-[0_14px_48px_-30px_rgba(15,23,42,0.35)] dark:shadow-[0_14px_48px_-30px_rgba(0,0,0,0.9)]'
            : ''
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
            scrolled ? 'h-16' : 'h-20'
          }`}
        >
          <Link
            href="/"
            className="flex items-center text-foreground"
          >
            <Image
              src="/max-it-logo.png"
              alt="MAX IT CONSULTING LLC logo"
              width={170}
              height={60}
              priority
              className="h-11 w-auto rounded-md border border-border/70 bg-white/95 p-1 object-contain sm:h-12"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
                    active
                      ? 'neon-outline bg-primary/15 text-foreground'
                      : 'text-muted-foreground hover:bg-background/85 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border/80 bg-background/75 p-2 text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground"
                  aria-label={item.label}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              )
            })}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-md border border-border/80 bg-background/75 px-3 py-2 text-xs uppercase tracking-[0.16em] text-foreground"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              Menu
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="space-y-2 border-t border-white/10 px-4 pb-4 pt-3 lg:hidden">
            {navItems.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-xl px-3 py-2 text-xs uppercase tracking-[0.14em] ${
                    active
                      ? 'bg-primary/15 text-foreground'
                      : 'text-muted-foreground hover:bg-background/85 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="grid grid-cols-2 gap-2 pt-2">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={`mobile-${item.label}`}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-background/75 px-3 py-2 text-xs uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {item.label}
                  </a>
                )
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
