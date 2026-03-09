import Link from 'next/link'
import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import SiteFooter from '@/components/site-footer'
import BrandShieldOrb from '@/components/brand-shield-orb'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'IT Staffing Services',
    desc: 'Contract staffing, contract-to-hire, and permanent recruitment for modern technology roles.',
  },
  {
    title: 'IT Consulting',
    desc: 'Cloud, data, cybersecurity, DevOps, and enterprise architecture support.',
  },
  {
    title: 'Talent Acquisition',
    desc: 'End-to-end sourcing, screening, and interview coordination for enterprise teams.',
  },
  {
    title: 'Managed Talent Programs',
    desc: 'Structured workforce scaling models with continuous hiring and delivery oversight.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground subtle />

        <section className="mx-auto grid w-full max-w-[1440px] gap-8 px-4 py-12 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-20">
          <div className="glass-panel p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Services</p>
            <h1 className="mt-2 text-4xl sm:text-5xl">Technology staffing and consulting solutions</h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Max IT Consulting LLC delivers enterprise-grade staffing and consulting support for organizations
              building cloud-native, secure, and scalable technology systems.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="font-display uppercase tracking-[0.12em]">Hire Talent</Button>
              </Link>
              <Link href="/jobs">
                <Button variant="outline" className="font-display uppercase tracking-[0.12em]">
                  Explore Jobs
                </Button>
              </Link>
            </div>
          </div>

          <div className="glass-panel flex items-center justify-center p-6">
            <BrandShieldOrb />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-8 lg:px-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="glass-panel reveal-up p-6"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-secondary">Offering</p>
                <h2 className="mt-2 font-display text-2xl uppercase tracking-[0.06em]">{service.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{service.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
