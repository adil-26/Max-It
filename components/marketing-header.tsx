'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/roles', label: 'Roles' },
  { href: '/hiring', label: 'Hiring' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function MarketingHeader() {
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-5">
      <div className="mx-auto flex h-12 w-full max-w-[1240px] items-center justify-between px-1">
        <Link
          href="/"
          className="inline-flex items-center rounded-md border border-white/10 bg-white px-2 py-1"
          aria-label="MAX IT Consulting LLC"
        >
          <Image
            src="/media/maxit-logo-clean-full.png"
            alt="MAX IT Consulting LLC logo"
            width={180}
            height={252}
            className="h-9 w-auto object-contain"
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

        <Link
          href="/contact"
          className="rounded-xl bg-gradient-to-r from-[#ea3a45] to-[#2f63ff] px-5 py-2 text-sm font-semibold text-white transition hover:from-[#ff4c58] hover:to-[#3f72ff]"
        >
          Book a call
        </Link>
      </div>
    </header>
  )
}
