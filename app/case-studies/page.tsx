import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedAccentOrbs from '@/components/animated-accent-orbs'
import MarketingFooter from '@/components/marketing-footer'
import MarketingHeader from '@/components/marketing-header'
import MotionCard from '@/components/motion-card'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Client Success Stories',
  description:
    'Explore case studies from MAX IT Consulting LLC showing faster hiring, stronger shortlist quality, and enterprise delivery outcomes.',
  path: '/case-studies',
  keywords: ['IT staffing case studies', 'enterprise hiring success stories', 'technology recruitment outcomes'],
})

const caseStudies = [
  {
    client: 'Leading Fintech Firm - New Jersey',
    challenge:
      'Needed to fill 6 senior cloud engineering roles within 3 weeks to support a critical AWS migration.',
    actions: [
      'Activated US cloud talent network and outbound sourcing lanes',
      'Screened 40+ candidates with technical and behavioral checkpoints',
      'Delivered 6 pre-vetted profiles in 5 days',
    ],
    result:
      'All 6 roles were filled in 19 days. Migration timelines stayed on track and engagement expanded for additional positions.',
    metrics: ['19 Days to Fill', '6 Placements', '100% Start Rate'],
  },
  {
    client: 'National Healthcare Technology Provider',
    challenge: 'Required rapid hiring of Data Engineers and QA automation specialists for HIPAA-sensitive programs.',
    actions: [
      'Mapped role criteria to healthcare compliance expectations',
      'Built parallel pipelines across US and offshore delivery centers',
      'Managed interview loops with structured feedback tracking',
    ],
    result:
      'Shortlist quality improved and interview-to-offer conversion increased over two hiring sprints.',
    metrics: ['72-Hour First Submission', '8 Offers Accepted', 'Reduced Time-to-Hire'],
  },
  {
    client: 'Enterprise SaaS Platform Team',
    challenge: 'Needed contract-to-hire staffing for platform reliability and DevOps modernization.',
    actions: [
      'Defined must-have SRE and DevOps competency matrix',
      'Executed contract-to-hire model with quality checkpoints',
      'Provided onboarding continuity and retention follow-up',
    ],
    result:
      'Client achieved predictable release cadence with improved platform support coverage and permanent conversions.',
    metrics: ['4 Critical Roles', '2 Permanent Conversions', 'On-Time Delivery'],
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[960px] bg-[radial-gradient(circle_at_14%_12%,rgba(234,58,69,0.28)_0%,rgba(234,58,69,0.08)_36%,transparent_60%),radial-gradient(circle_at_84%_18%,rgba(47,99,255,0.28)_0%,rgba(47,99,255,0.08)_40%,transparent_62%)]"
      />
      <AnimatedAccentOrbs />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-10 pt-24 sm:pt-28">
        <p className="inline-flex rounded-full border border-[#2f63ff]/60 bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
          Client Success Stories
        </p>
        <h1 className="hero-title-animated mt-5 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
          Client Success Stories
        </h1>
        <p className="mt-4 max-w-4xl text-lg text-neutral-300">
          Real results for real organizations. Here is how MAX IT Consulting has helped enterprise teams hire faster,
          build smarter, and grow stronger.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-12">
        <div className="space-y-4">
          {caseStudies.map((item, idx) => (
            <MotionCard key={item.client} delay={idx * 0.08} className="rounded-2xl border border-white/10 bg-[#06080d] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">{item.client}</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-neutral-200">Challenge</p>
              <p className="mt-1 text-base text-neutral-300">{item.challenge}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.1em] text-neutral-200">What We Did</p>
              <div className="mt-2 grid gap-2 md:grid-cols-3">
                {item.actions.map((action) => (
                  <div key={action} className="rounded-lg border border-white/10 bg-black/45 px-3 py-2 text-sm text-neutral-200">
                    {action}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.1em] text-neutral-200">Result</p>
              <p className="mt-1 text-base text-neutral-300">{item.result}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {item.metrics.map((metric) => (
                  <div key={metric} className="rounded-lg border border-[#2f63ff]/35 bg-[#0d1734] px-3 py-2 text-sm font-semibold text-white">
                    {metric}
                  </div>
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16">
        <MotionCard className="rounded-2xl border border-white/12 bg-[#0a1d3f] p-6 text-center">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Need Similar Hiring Results?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-neutral-300">
            Share your hiring brief and we will map a delivery plan with timeline, shortlist approach, and engagement model.
          </p>
          <Link
            href="/contact"
            className="brand-cta-gradient mt-6 inline-flex rounded-xl px-6 py-3 text-sm font-semibold text-white"
          >
            Start with a Free Audit
          </Link>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
