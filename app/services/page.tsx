import type { Metadata } from 'next'
import Link from 'next/link'
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
    <main className="min-h-screen bg-[#f7f6f2] text-[#191919]">
      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-10 pt-24 sm:pt-28">
        <p className="inline-flex rounded-full border border-[#d7c27a] bg-[#f3eddb] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">
          Our Services
        </p>
        <h1 className="mt-5 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">Our Services</h1>
        <p className="mt-4 max-w-4xl text-lg text-neutral-700">
          From filling one critical role to scaling full technology teams, MAX IT Consulting delivers at enterprise scale.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-8">
        <MotionCard className="rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Service 1</p>
          <h2 className="mt-2 font-display text-3xl leading-tight text-black sm:text-4xl">IT Staffing & Talent Solutions</h2>
          <p className="mt-3 text-neutral-700">
            Our core service is connecting enterprise organizations with high-quality IT talent through contract,
            contract-to-hire, direct hire, and staff augmentation models.
          </p>
          <div className="mt-5 grid gap-2 md:grid-cols-2">
            {serviceRoles.map((role) => (
              <div key={role} className="rounded-lg border border-black/10 bg-[#fafafa] px-3 py-2 text-sm text-neutral-700">
                {role}
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {engagementModels.map((model) => (
              <MotionCard key={model.title} className="rounded-xl border border-black/10 bg-[#fafafa] p-4">
                <h3 className="font-display text-2xl leading-tight text-black">{model.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{model.text}</p>
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          <MotionCard className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Service 2</p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-black">Business & IT Consulting</h2>
            <p className="mt-3 text-neutral-700">
              We align technology investments with business priorities through practical advisory and transformation execution support.
            </p>
            <div className="mt-4 space-y-2">
              {consultingAreas.map((area) => (
                <div key={area} className="rounded-lg border border-black/10 bg-[#fafafa] px-3 py-2 text-sm text-neutral-700">
                  {area}
                </div>
              ))}
            </div>
          </MotionCard>

          <MotionCard className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Service 3</p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-black">Custom Software Development</h2>
            <p className="mt-3 text-neutral-700">
              When off-the-shelf software is not enough, MAX IT delivers custom enterprise applications, APIs, and integrations.
            </p>
            <div className="mt-4 space-y-2">
              {softwareBuildAreas.map((area) => (
                <div key={area} className="rounded-lg border border-black/10 bg-[#fafafa] px-3 py-2 text-sm text-neutral-700">
                  {area}
                </div>
              ))}
            </div>
          </MotionCard>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16">
        <MotionCard className="rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="font-display text-4xl leading-tight text-black sm:text-5xl">Need immediate hiring support?</h2>
          <p className="mt-3 max-w-3xl text-neutral-700">
            Share your hiring priorities and we will provide a delivery plan with timeline, engagement model, and shortlist strategy.
          </p>
          <div className="mt-6 flex flex-wrap justify-start gap-3">
            <Link href="/contact" className="inline-flex rounded-xl bg-[#111111] px-6 py-3 text-sm font-semibold text-[#d6bc63]">
              Request a Free Audit
            </Link>
            <Link
              href="/industries"
              className="inline-flex rounded-xl border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-black/5"
            >
              View Industries
            </Link>
          </div>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
