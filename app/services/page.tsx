import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedAccentOrbs from '@/components/animated-accent-orbs'
import MarketingFooter from '@/components/marketing-footer'
import MarketingHeader from '@/components/marketing-header'
import MotionCard from '@/components/motion-card'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Our Services',
  description:
    'MAX IT Consulting LLC delivers IT staffing, business consulting, and custom software development for enterprise teams across the US, UAE, and India.',
  path: '/services',
  keywords: [
    'IT staffing services',
    'business IT consulting',
    'custom software development',
    'staff augmentation USA',
  ],
})

const serviceRoles = [
  'Software Engineers (Java, Python, .NET, Node.js, React)',
  'Cloud Engineers & Architects (AWS, Azure, GCP)',
  'DevOps & SRE Engineers',
  'Data Engineers & Data Scientists',
  'Cybersecurity Analysts & Engineers',
  'Project Managers & Scrum Masters',
  'QA & Test Automation Engineers',
  'ERP / SAP Consultants',
  'IT Leadership: CTO, CIO, VP Engineering',
  'Business Analysts',
  'Network & Infrastructure Engineers',
  'Full Stack Developers',
  'Mobile Engineers (iOS, Android)',
  'AI/ML Engineers',
]

const engagementModels = [
  {
    title: 'Contract Staffing',
    text: 'Flexible, project-based placement for urgent skills gaps without long-term commitment.',
  },
  {
    title: 'Contract-to-Hire',
    text: 'Evaluate consultant performance on the job before making a full-time offer.',
  },
  {
    title: 'Direct Hire / Permanent',
    text: 'Full-cycle recruitment for permanent roles including sourcing, screening, and offer support.',
  },
  {
    title: 'Staff Augmentation',
    text: 'Embed MAX IT consultants into your team and scale based on project demand.',
  },
]

const consultingAreas = [
  'IT Strategy & Roadmapping',
  'Digital Transformation',
  'Process Optimization',
  'Technology Assessment',
  'Vendor Selection & Management',
  'Change Management',
]

const softwareBuildAreas = [
  'Enterprise Web Applications',
  'REST and GraphQL APIs',
  'System Integrations and Middleware',
  'Cloud-Native Applications (AWS, Azure, GCP)',
  'Data Pipelines and Analytics Dashboards',
  'Mobile Applications (iOS and Android)',
  'ERP Customizations and Extensions',
  'Legacy System Modernization',
]

export default function ServicesPage() {
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
          Our Services
        </p>
        <h1 className="hero-title-animated mt-5 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
          Our Services
        </h1>
        <p className="mt-4 max-w-4xl text-lg text-neutral-300">
          From sourcing one specialist to staffing an entire technology division, MAX IT Consulting delivers at every scale.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-8">
        <MotionCard className="rounded-2xl border border-white/12 bg-[#06080d] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">Service 1</p>
          <h2 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">IT Staffing & Talent Solutions</h2>
          <p className="mt-3 text-neutral-300">
            Our core service is connecting enterprise organizations with the IT talent they need fast through contract,
            contract-to-hire, direct hire, and augmentation models. Every profile is screened through our 5-step vetting
            process before client submission.
          </p>
          <div className="mt-5 grid gap-2 md:grid-cols-2">
            {serviceRoles.map((role) => (
              <div key={role} className="rounded-lg border border-white/10 bg-black/45 px-3 py-2 text-sm text-neutral-200">
                {role}
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {engagementModels.map((model) => (
              <MotionCard key={model.title} className="rounded-xl border border-white/10 bg-black/45 p-4">
                <h3 className="font-display text-2xl leading-tight">{model.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{model.text}</p>
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          <MotionCard className="rounded-2xl border border-white/12 bg-[#06080d] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">Service 2</p>
            <h2 className="mt-2 font-display text-4xl leading-tight">Business & IT Consulting</h2>
            <p className="mt-3 text-neutral-300">
              We align technology investments with business goals through practical consulting and transformation guidance.
            </p>
            <div className="mt-4 space-y-2">
              {consultingAreas.map((area) => (
                <div key={area} className="rounded-lg border border-white/10 bg-black/45 px-3 py-2 text-sm text-neutral-200">
                  {area}
                </div>
              ))}
            </div>
          </MotionCard>

          <MotionCard className="rounded-2xl border border-white/12 bg-[#06080d] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">Service 3</p>
            <h2 className="mt-2 font-display text-4xl leading-tight">Custom Software Development</h2>
            <p className="mt-3 text-neutral-300">
              When off-the-shelf software is not enough, MAX IT builds tailored enterprise applications and integrations.
            </p>
            <div className="mt-4 space-y-2">
              {softwareBuildAreas.map((area) => (
                <div key={area} className="rounded-lg border border-white/10 bg-black/45 px-3 py-2 text-sm text-neutral-200">
                  {area}
                </div>
              ))}
            </div>
          </MotionCard>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16">
        <MotionCard className="rounded-2xl border border-white/12 bg-[#0a1d3f] p-6 text-center">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Need immediate hiring support?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-neutral-300">
            Share your role priorities and we will return a delivery plan with timeline, engagement model, and shortlist approach.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="brand-cta-gradient inline-flex rounded-xl px-6 py-3 text-sm font-semibold text-white"
            >
              Request a Free Audit
            </Link>
            <Link
              href="/hiring"
              className="inline-flex rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              View Hiring Process
            </Link>
          </div>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
