import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedAccentOrbs from '@/components/animated-accent-orbs'
import MarketingFooter from '@/components/marketing-footer'
import MarketingHeader from '@/components/marketing-header'
import MotionCard from '@/components/motion-card'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Industries We Serve',
  description:
    'MAX IT Consulting places IT professionals across financial services, healthcare, retail, government, manufacturing, telecom, insurance, and SaaS.',
  path: '/industries',
  keywords: [
    'industries IT staffing',
    'healthcare IT staffing',
    'government technology staffing',
    'financial services IT hiring',
  ],
})

const sectors = [
  {
    industry: 'Financial Services & Banking',
    roles: 'Security Architects, Core Banking Developers, Data Engineers, Risk Analysts',
    context: 'SOX, PCI-DSS, FINRA alignment and secure engineering workflows.',
  },
  {
    industry: 'Healthcare & Life Sciences',
    roles: 'EHR Developers, Health IT Architects, Data Scientists, Compliance Specialists',
    context: 'HIPAA, HL7, FHIR experience and patient-data security controls.',
  },
  {
    industry: 'Retail & E-commerce',
    roles: 'Full Stack Engineers, Platform Engineers, Data Analysts, UX Engineers',
    context: 'High-volume transaction systems and commerce platform operations.',
  },
  {
    industry: 'Government & Public Sector',
    roles: 'IT Project Managers, Security Analysts, Cloud Engineers',
    context: 'FedRAMP, FISMA, and security-sensitive delivery environments.',
  },
  {
    industry: 'Manufacturing & Supply Chain',
    roles: 'ERP Consultants, IoT Engineers, Operations IT Managers',
    context: 'SAP, Oracle, Industry 4.0, and plant-to-enterprise data flow modernization.',
  },
  {
    industry: 'Telecommunications',
    roles: 'Network Engineers, 5G Specialists, DevOps, OSS/BSS Developers',
    context: 'High-scale infrastructure performance and service reliability requirements.',
  },
  {
    industry: 'SaaS & Technology',
    roles: 'Software Engineers, Product Managers, ML Engineers, DevOps',
    context: 'Cloud-native delivery, CI/CD, and rapid product iteration models.',
  },
  {
    industry: 'Insurance',
    roles: 'Actuarial Analysts, Policy Systems Developers, Business Analysts',
    context: 'Guidewire and Duck Creek experience for underwriting and claims technology.',
  },
]

export default function IndustriesPage() {
  return (
    <main className="marketing-light relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[920px] bg-[radial-gradient(circle_at_14%_12%,rgba(234,58,69,0.28)_0%,rgba(234,58,69,0.08)_36%,transparent_60%),radial-gradient(circle_at_84%_18%,rgba(47,99,255,0.28)_0%,rgba(47,99,255,0.08)_40%,transparent_62%)]"
      />
      <AnimatedAccentOrbs />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-10 pt-24 sm:pt-28">
        <p className="inline-flex rounded-full border border-[#2f63ff]/60 bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
          Industries We Serve
        </p>
        <h1 className="hero-title-animated mt-5 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
          Industries We Serve
        </h1>
        <p className="mt-4 max-w-4xl text-lg text-neutral-300">
          MAX IT Consulting has placed IT professionals and delivered consulting engagements across major industry verticals.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {sectors.map((sector, idx) => (
            <MotionCard
              key={sector.industry}
              delay={idx * 0.06}
              className="rounded-2xl border border-white/10 bg-[#06080d] p-6"
            >
              <h2 className="font-display text-3xl leading-tight">{sector.industry}</h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#8fb1ff]">Key Roles</p>
              <p className="mt-1 text-neutral-300">{sector.roles}</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#8fb1ff]">Compliance / Context</p>
              <p className="mt-1 text-neutral-300">{sector.context}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16">
        <MotionCard className="rounded-2xl border border-white/12 bg-[#0a1d3f] p-6 text-center">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Need industry-specific hiring support?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-neutral-300">
            Share your industry, role priorities, and hiring timeline. We will tailor a domain-specific staffing plan.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="brand-cta-gradient inline-flex rounded-xl px-6 py-3 text-sm font-semibold text-white"
            >
              Request a Free Audit
            </Link>
            <Link
              href="/services"
              className="inline-flex rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
