import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Linkedin } from 'lucide-react'
import AnimatedAccentOrbs from '@/components/animated-accent-orbs'
import MarketingFooter from '@/components/marketing-footer'
import MarketingHeader from '@/components/marketing-header'
import MotionCard from '@/components/motion-card'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'About MAX IT Consulting LLC',
  description:
    'MAX IT Consulting LLC is a technology and business consulting partner delivering IT strategy, digital transformation, cloud, cybersecurity, software development, and staffing support.',
  path: '/about',
  keywords: [
    'about max it consulting llc',
    'business consulting and services company',
    'it consulting branchburg new jersey',
    'software development and staffing services',
  ],
})

const profileSignals = [
  { label: 'Founded', value: '2018' },
  { label: 'Industry', value: 'Business Consulting and Services' },
  { label: 'Company Size', value: '11-50 Employees' },
  { label: 'Type', value: 'Partnership' },
]

const missionPillars = [
  {
    title: 'Client-Centric Approach',
    text: 'We collaborate deeply to understand your goals and tailor practical solutions that fit your business context.',
  },
  {
    title: 'Industry Expertise',
    text: 'Our consultants bring cross-industry experience and modern best practices across core technology domains.',
  },
  {
    title: 'Continuous Innovation',
    text: 'We evaluate emerging technologies and methods to deliver solutions that are useful today and resilient tomorrow.',
  },
]

const operatingModel = [
  {
    title: 'Discover',
    text: 'Identify capability gaps, urgency levels, role dependencies, and hiring constraints across business units.',
  },
  {
    title: 'Design',
    text: 'Build a hiring program using domain-specific talent pools, screening criteria, and timeline-based execution plans.',
  },
  {
    title: 'Deliver',
    text: 'Run governed shortlisting and onboarding workflows with transparent reporting and optimization checkpoints.',
  },
]

const specialties = [
  'IT Consulting',
  'Business Consulting',
  'Software Development',
  'US Recruitment',
  'IT Staffing',
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[920px] bg-[radial-gradient(circle_at_12%_12%,rgba(234,58,69,0.33)_0%,rgba(234,58,69,0.08)_34%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.28)_0%,rgba(47,99,255,0.08)_38%,transparent_62%)]"
      />
      <AnimatedAccentOrbs />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-12 pt-28 sm:pt-32">
        <div className="max-w-5xl">
          <p className="inline-flex rounded-full border border-[#2f63ff]/60 bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            About MAX IT Consulting LLC
          </p>
          <h1 className="hero-title-animated mt-6 font-display text-5xl leading-[0.94] tracking-tight sm:text-6xl">
            Trusted advisors for
            <br />
            technology and growth.
          </h1>
          <p className="mt-5 max-w-4xl text-xl leading-relaxed text-neutral-300">
            With a legacy of client-focused delivery, Max IT Consulting LLC helps businesses navigate technology and
            innovation through strategy, execution, and high-quality talent programs built for measurable outcomes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/roles"
              className="rounded-xl bg-[#2f63ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3f72ff]"
            >
              View Enterprise Roles
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-[#ea3a45]/45 bg-[#ea3a45]/15 px-6 py-3 text-sm font-semibold text-white hover:bg-[#ea3a45]/22"
            >
              Request Capability Audit
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profileSignals.map((item, idx) => (
            <MotionCard
              key={item.label}
              delay={idx * 0.08}
              className="rounded-2xl border border-white/10 bg-[#07090f]/90 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">{item.label}</p>
              <p className="mt-2 font-display text-2xl leading-tight">{item.value}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {missionPillars.map((item, idx) => (
            <MotionCard
              key={item.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-white/10 bg-[#07090f] p-6"
            >
              <h2 className="font-display text-4xl leading-tight">{item.title}</h2>
              <p className="mt-3 text-lg text-neutral-300">{item.text}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-14">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d]/90 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">Operating Model</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.94] tracking-tight sm:text-6xl">
            Enterprise collaboration
            <br />
            built for predictable outcomes.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {operatingModel.map((item, idx) => (
              <MotionCard
                key={item.title}
                delay={idx * 0.06}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
              >
                <h3 className="font-display text-3xl">{item.title}</h3>
                <p className="mt-3 text-base text-neutral-300">{item.text}</p>
              </MotionCard>
            ))}
          </div>

          <div className="mt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8fb1ff]">Specialties</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {specialties.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-black/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-neutral-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16 text-center">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d] px-6 py-10">
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            Build your next workforce program
            <br />
            with execution certainty.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
            We align speed, quality, and compliance so enterprise hiring leaders can deliver measurable talent
            outcomes under business pressure.
          </p>
          <div className="mx-auto mt-4 flex max-w-2xl flex-wrap justify-center gap-3">
            <a
              href="https://www.maxitconsultllc.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Globe className="h-4 w-4 text-[#dcb85f]" />
              Official Website
            </a>
            <a
              href="https://in.linkedin.com/company/max-it-consulting"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4 text-[#2f63ff]" />
              LinkedIn
            </a>
          </div>
          <Link
            href="/contact"
            className="brand-cta-gradient mt-8 inline-flex rounded-xl px-7 py-3 text-sm font-semibold text-white"
          >
            Start Enterprise Conversation
          </Link>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
