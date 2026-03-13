import Link from 'next/link'
import Image from 'next/image'

const services = [
  'IT Strategy and Consulting',
  'Digital Transformation',
  'Cloud Solutions',
  'Cybersecurity',
  'Software Development',
  'US Recruitment and IT Staffing',
]

const industries = [
  'Healthcare',
  'Marketing',
  'Retail',
  'Telecom',
  'Finance',
]

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/25 bg-gradient-to-b from-background/90 via-background/96 to-background">
      <div aria-hidden className="futuristic-grid pointer-events-none absolute inset-0 opacity-[0.2]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,color-mix(in_oklch,var(--primary)_18%,transparent)_0%,transparent_44%),radial-gradient(circle_at_84%_82%,color-mix(in_oklch,var(--secondary)_14%,transparent)_0%,transparent_42%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-12 sm:px-8 lg:grid-cols-4 lg:px-20">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/max-it-logo.png"
              alt="MAX IT CONSULTING LLC logo"
              width={190}
              height={66}
              className="h-14 w-auto rounded-md border border-border/70 bg-white/95 p-1 object-contain"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            New Jersey-based IT staffing and consulting company helping businesses grow by connecting
            them with the right talent at the right time.
          </p>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.18em] text-secondary">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.18em] text-secondary">Industries</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm uppercase tracking-[0.18em] text-secondary">Contact</p>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p>25 Oak Tavern Cir</p>
            <p>Branchburg, NJ 08876</p>
            <p>USA</p>
            <p className="pt-2">info@maxitconsultingll.com</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em]">
            <Link href="/contact" className="rounded-md border border-primary/30 bg-background/70 px-3 py-2 text-foreground hover:bg-primary/10">
              Contact
            </Link>
            <Link href="/services" className="rounded-md border border-primary/30 bg-background/70 px-3 py-2 text-foreground hover:bg-primary/10">
              Services
            </Link>
            <a
              href="https://www.linkedin.com/company/maxitconsultingllc/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-primary/30 bg-background/70 px-3 py-2 text-foreground hover:bg-primary/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-primary/25 bg-background/80 py-4 text-center text-xs uppercase tracking-[0.14em] text-muted-foreground">
        Copyright {new Date().getFullYear()} MAX IT CONSULTING LLC. All rights reserved.
      </div>
    </footer>
  )
}
