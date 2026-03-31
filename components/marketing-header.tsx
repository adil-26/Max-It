'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Linkedin } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/roles', label: 'Roles' },
  { href: '/hiring', label: 'Hiring' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function MarketingHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-5">
      <div className="mx-auto w-full max-w-[1240px] px-1">
        <div className="flex h-12 items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center rounded-md border border-white/10 bg-white px-2 py-1"
          aria-label="MAX IT Consulting LLC"
        >
          <Image
            src="/media/max-it-linkedin-logo.png"
            alt="MAX IT Consulting LLC logo"
            width={140}
            height={140}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${
                  active ? 'text-white' : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://in.linkedin.com/company/max-it-consulting"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="MAX IT LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <Link
            href="/contact"
            className="brand-cta-gradient rounded-xl px-5 py-2 text-sm font-semibold text-white transition"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-xl border border-white/15 bg-[#111215] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          Menu
        </button>
        </div>

        {menuOpen ? (
          <div className="mt-3 rounded-2xl border border-white/10 bg-[#0b0c11]/95 p-3 backdrop-blur-md md:hidden">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`)

                return (
                  <Link
                    key={`mobile-${item.href}`}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      active ? 'bg-white/10 text-white' : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <Link
              href="/contact"
              className="brand-cta-gradient mt-3 block rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Contact
            </Link>
            <a
              href="https://in.linkedin.com/company/max-it-consulting"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        ) : null}
      </div>
    </header>
  )
}
