import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Mail, Phone } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact Us' },
]

const officeContacts = [
  {
    region: 'US',
    address: '25 Oak Tavern Circle, Branchburg, NJ 08876',
    phone: '+1-908-449-3000',
    email: 'us@maxitconsultingllc.com',
  },
  {
    region: 'UAE',
    address: 'Dubai 32223, United Arab Emirates',
    phone: '+971-4-000-0000',
    email: 'uae@maxitconsultingllc.com',
  },
  {
    region: 'India',
    address: 'Noida Sector 63, Uttar Pradesh 201301, India',
    phone: '+91-120-000-0000',
    email: 'india@maxitconsultingllc.com',
  },
]

export default function MarketingFooter() {
  return (
    <footer className="mt-10 border-t border-black/10 bg-[#f7f6f2] text-[#222]">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-6 py-12 lg:grid-cols-3">
        <section>
          <div className="inline-flex rounded-lg border border-black/10 bg-white p-2.5">
            <Image
              src="/media/max-it-gold-logo.png"
              alt="MAX IT Consulting LLC logo"
              width={170}
              height={52}
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#9a7f2d]">
            We Build Career
          </p>
          <p className="mt-2 max-w-sm text-sm text-neutral-600">
            Specialized IT staffing and consulting across the US, UAE, and India.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="https://in.linkedin.com/company/max-it-consulting"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-black/5"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href="mailto:info@maxitconsultingllc.com"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-black/5"
            >
              <Mail className="h-3.5 w-3.5" />
              info@maxitconsultingllc.com
            </a>
            <a
              href="tel:+19084493000"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-black/5"
            >
              <Phone className="h-3.5 w-3.5" />
              +1-908-449-3000
            </a>
          </div>
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a7f2d]">Quick Links</p>
          <div className="mt-3 grid gap-2">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-neutral-700 hover:text-black">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a7f2d]">Contact</p>
          <div className="mt-3 space-y-3">
            {officeContacts.map((office) => (
              <div key={office.region} className="rounded-xl border border-black/10 bg-white p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9a7f2d]">{office.region}</p>
                <p className="mt-1 text-xs text-neutral-700">{office.address}</p>
                <p className="mt-1 text-xs text-neutral-700">{office.phone}</p>
                <p className="mt-1 text-xs text-neutral-700">{office.email}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-neutral-600 sm:flex-row">
          <p>(c) 2026 MAX IT Consulting LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-black">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-black">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-black">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
