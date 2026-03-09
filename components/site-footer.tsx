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
    <footer className="relative border-t border-white/10 bg-black/55">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-12 sm:px-8 lg:grid-cols-4 lg:px-20">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/max-it-logo.png"
              alt="MAX IT CONSULTING LLC logo"
              width={40}
              height={40}
              className="size-10 rounded-lg border border-border/70 object-cover"
            />
            <p className="font-display text-lg uppercase tracking-[0.14em] text-foreground">
              MAX IT <span className="text-primary">CONSULTING LLC</span>
            </p>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Trusted technology partner helping businesses with IT consulting, software development, cybersecurity, cloud, and staffing services.
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
            <p className="pt-2">info@maxitconsult.com</p>
            <p>+1 908 449 3000</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em]">
            <Link href="/contact" className="rounded-md border border-white/20 px-3 py-2 text-foreground hover:bg-white/10">
              Contact
            </Link>
            <Link href="/services" className="rounded-md border border-white/20 px-3 py-2 text-foreground hover:bg-white/10">
              Services
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-[0.14em] text-muted-foreground">
        Copyright {new Date().getFullYear()} MAX IT CONSULTING LLC. All rights reserved.
      </div>
    </footer>
  )
}
