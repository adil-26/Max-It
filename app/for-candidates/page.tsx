import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedAccentOrbs from '@/components/animated-accent-orbs'
import MarketingFooter from '@/components/marketing-footer'
import MarketingHeader from '@/components/marketing-header'
import MotionCard from '@/components/motion-card'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'For Candidates',
  description:
    'For candidate professionals: submit your resume, access exclusive IT roles, and work with specialist recruiters across the US, UAE, and India.',
  path: '/for-candidates',
  keywords: ['for candidates', 'IT jobs', 'submit resume', 'technology career opportunities'],
})

const candidateBenefits = [
  'Access to exclusive roles not advertised publicly',
  'Interview coaching and resume review',
  'Transparent communication at every stage',
  'W2 and Corp-to-Corp (C2C) options available',
  'Benefits available for W2 contractors (health, dental, vision)',
  'Career growth guidance from specialist recruiters',
]

export default function ForCandidatesPage() {
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
          For Candidates
        </p>
        <h1 className="hero-title-animated mt-5 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
          Looking for Your Next IT Role? Let's Talk.
        </h1>
        <p className="mt-4 max-w-4xl text-lg text-neutral-300">
          Submit your resume and one of our specialist recruiters will review your profile within 24 hours.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {candidateBenefits.map((benefit, idx) => (
            <MotionCard key={benefit} delay={idx * 0.06} className="rounded-2xl border border-white/10 bg-[#06080d] p-5">
              <p className="text-base text-neutral-200">{benefit}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16">
        <MotionCard className="rounded-2xl border border-white/12 bg-[#2f2209] p-6">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Ready to submit your profile?</h2>
          <p className="mt-3 max-w-3xl text-neutral-300">
            We match technology professionals with enterprise roles aligned to their skills, growth goals, and preferred work model.
          </p>
          <div className="mt-6 flex flex-wrap justify-start gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-xl border border-[#e8a020]/50 bg-[#e8a020]/18 px-6 py-3 text-sm font-semibold text-white hover:bg-[#e8a020]/26"
            >
              Submit Your Resume
            </Link>
            <Link
              href="/roles"
              className="inline-flex rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Browse Roles
            </Link>
          </div>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
