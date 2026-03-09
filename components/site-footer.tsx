import Link from 'next/link'

const services = ['IT Staffing', 'IT Consulting', 'Contract Hiring', 'Managed Talent']
const industries = ['Finance', 'Healthcare', 'Retail', 'Telecom', 'Technology', 'Insurance', 'Government']

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black/55">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 py-12 sm:px-8 lg:grid-cols-4 lg:px-20">
        <div>
          <p className="font-display text-lg uppercase tracking-[0.14em] text-foreground">
            Max IT <span className="text-primary">Consulting LLC</span>
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Premium IT staffing and consulting partner helping organizations build high-performance technology teams.
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
            <p className="pt-2">info@maxitconsultingllc.com</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em]">
            <Link href="/contact" className="rounded-md border border-white/20 px-3 py-2 text-foreground hover:bg-white/10">
              Contact
            </Link>
            <Link href="/jobs" className="rounded-md border border-white/20 px-3 py-2 text-foreground hover:bg-white/10">
              Jobs
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs uppercase tracking-[0.14em] text-muted-foreground">
        Copyright {new Date().getFullYear()} Max IT Consulting LLC. All rights reserved.
      </div>
    </footer>
  )
}

