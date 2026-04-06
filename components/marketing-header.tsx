'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Linkedin } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact' },
]

function isActivePath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/' || pathname === '/home'
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function MarketingHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="rounded-2xl border border-black/10 bg-white/95 px-3 shadow-[0_6px_24px_rgba(0,0,0,0.08)] backdrop-blur-md sm:px-4">
          <div className="flex h-14 items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg border border-black/10 bg-white px-2 py-1"
              aria-label="MAX IT Consulting LLC"
            >
              <Image
                src="/media/max-it-gold-logo.png"
                alt="MAX IT Consulting LLC logo"
                width={150}
                height={42}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const active = isActivePath(pathname, item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${
                      active
                        ? 'bg-[#b89a3a]/14 text-[#7f6720]'
                        : 'text-neutral-700 hover:bg-black/5 hover:text-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href="https://in.linkedin.com/company/max-it-consulting"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black transition hover:bg-black/5"
                aria-label="MAX IT LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#111111] px-5 py-2 text-sm font-semibold text-[#d6bc63] hover:bg-black"
              >
                Get a Free Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="rounded-xl border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-900"
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
              >
                Menu
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2 lg:hidden">
          <Link
            href="/contact"
            className="block rounded-xl bg-[#111111] px-4 py-2.5 text-center text-sm font-semibold text-[#d6bc63]"
          >
            Get a Free Audit
          </Link>
        </div>

        {menuOpen ? (
          <div className="mt-2 rounded-2xl border border-black/10 bg-white/95 p-3 backdrop-blur-md lg:hidden">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const active = isActivePath(pathname, item.href)

                return (
                  <Link
                    key={`mobile-${item.href}`}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      active
                        ? 'bg-[#b89a3a]/14 text-[#7f6720]'
                        : 'text-neutral-700 hover:bg-black/5 hover:text-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <a
              href="https://in.linkedin.com/company/max-it-consulting"
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-black"
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
