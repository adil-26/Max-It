import type { Metadata } from 'next'
import Image from 'next/image'
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
  { label: 'Founded', value: '2021' },
  { label: 'Team Size', value: '11-50 Employees' },
  { label: 'LinkedIn', value: '6,273+ Followers' },
  { label: 'Global Offices', value: 'US | UAE | India' },
]

const missionPillars = [
  {
    title: 'Mission',
    text: 'To empower organizations with the IT talent and strategic consulting they need to grow, innovate, and lead in a technology-driven world.',
  },
  {
    title: 'Vision',
    text: 'To become the most trusted IT staffing partner for enterprise organizations across three continents.',
  },
  {
    title: 'Core Values',
    text: 'Integrity in every placement. Speed without compromise. Client partnership over transactions. Global reach with local understanding. Continuous improvement.',
  },
]

const ourStory = [
  'MAX IT Consulting LLC was founded in 2021 with a single mission: to bridge the gap between world-class IT talent and the enterprise organizations that need them most. What began as a boutique US staffing firm has grown into a multi-continent operation, with offices in New Jersey, Dubai, and Noida, India.',
  'We understand that in enterprise IT, speed and quality cannot be traded off against each other. That is why we built a structured screening model that delivers pre-vetted, interview-ready candidates within 48 to 72 hours without compromising technical depth, compliance, or culture fit.',
  'Today, MAX IT Consulting serves clients across financial services, healthcare, retail, government, and technology, placing engineers, architects, project managers, data professionals, and IT leaders across the US and internationally.',
]

const companyTimeline = [
  { year: '2021', event: 'MAX IT Consulting LLC founded in Branchburg, New Jersey.' },
  { year: '2022', event: 'Expanded internationally with Dubai office to serve Middle East clients.' },
  { year: '2022-23', event: 'Opened Noida office and scaled specialist recruiter operations.' },
  { year: '2024', event: 'Surpassed 100+ successful IT placements across geographies.' },
  { year: '2025', event: 'Expanded Talent Capability Audit service for enterprise hiring leaders.' },
  { year: '2026+', event: 'Continuing expansion across services, industries, and global delivery.' },
]

const offices = [
  {
    name: 'US Headquarters',
    address: '25 Oak Tavern Circle, Branchburg, New Jersey 08876, USA',
    phone: '+1-908-449-3000',
    email: 'us@maxitconsultingllc.com',
    timezone: 'EST (UTC-5)',
  },
  {
    name: 'Dubai Office',
    address: 'Dubai 32223, United Arab Emirates',
    phone: '+971-4-000-0000',
    email: 'uae@maxitconsultingllc.com',
    timezone: 'GST (UTC+4)',
  },
  {
    name: 'India Office',
    address: 'Noida Sector 63, Uttar Pradesh 201301, India',
    phone: '+91-120-000-0000',
    email: 'india@maxitconsultingllc.com',
    timezone: 'IST (UTC+5:30)',
  },
]

const seniorTeam = [
  {
    name: 'Aisha Khan',
    title: 'Senior Talent Partner',
    bio: 'Leads enterprise technology hiring programs across cloud, data, and cybersecurity domains.',
    initials: 'AK',
  },
  {
    name: 'Rahul Mehta',
    title: 'Practice Lead - Consulting',
    bio: 'Supports digital transformation programs with delivery-aligned consulting and staffing strategy.',
    initials: 'RM',
  },
  {
    name: 'Sarah Thomas',
    title: 'Account Director',
    bio: 'Drives client partnership, delivery governance, and post-placement success for enterprise accounts.',
    initials: 'ST',
  },
]

export default function AboutPage() {
  return (
    <main className="marketing-light relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[920px] bg-[radial-gradient(circle_at_12%_12%,rgba(234,58,69,0.33)_0%,rgba(234,58,69,0.08)_34%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.28)_0%,rgba(47,99,255,0.08)_38%,transparent_62%)]"
      />
      <AnimatedAccentOrbs />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-10 pt-24 sm:pt-28">
        <div className="max-w-5xl">
          <p className="inline-flex rounded-full border border-[#2f63ff]/60 bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            About MAX IT Consulting LLC
          </p>
          <h1 className="hero-title-animated mt-5 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            About MAX IT Consulting LLC
          </h1>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-neutral-300">
            We are a technology staffing and consulting firm built on one belief: the right talent changes everything.
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
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">Our Story</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.94] tracking-tight sm:text-6xl">
            Built to connect enterprise teams
            <br />
            with world-class IT talent.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-neutral-300">
            {ourStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionCard className="rounded-2xl border border-white/10 bg-[#07090f] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">Founder & Director</p>
            <div className="mt-4 flex items-center gap-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/35">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Junaid Aamir founder headshot placeholder"
                  width={84}
                  height={84}
                  className="h-20 w-20 object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-4xl leading-tight">Junaid Aamir</h3>
                <p className="mt-1 text-sm text-neutral-300">Founder & Director, MAX IT Consulting LLC</p>
              </div>
            </div>
            <p className="mt-4 text-base text-neutral-300">
              Junaid Aamir founded MAX IT Consulting LLC in 2021 with a vision to build a global IT staffing firm
              that combines boutique speed with enterprise-level delivery standards.
            </p>
            <a
              href="https://in.linkedin.com/company/max-it-consulting"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8fb1ff] hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              View LinkedIn
            </a>
          </MotionCard>

          <MotionCard className="rounded-2xl border border-white/10 bg-[#07090f] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">Global Offices</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {offices.map((office) => (
                <div key={office.name} className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <h4 className="text-lg font-semibold text-white">{office.name}</h4>
                  <p className="mt-2 text-sm text-neutral-300">{office.address}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#f1bd5b]">{office.phone}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#8fb1ff]">
                    {office.email}
                  </p>
                  <p className="mt-1 text-xs text-neutral-400">{office.timezone}</p>
                </div>
              ))}
            </div>
          </MotionCard>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-6">
        <MotionCard className="rounded-2xl border border-white/10 bg-[#07090f] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">Senior Team</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {seniorTeam.map((member) => (
              <div key={member.name} className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#1b3a6b] text-sm font-semibold">
                    {member.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{member.name}</p>
                    <p className="text-xs text-neutral-400">{member.title}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-neutral-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-8">
        <MotionCard className="rounded-2xl border border-white/10 bg-[#07090f] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">Company Timeline</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {companyTimeline.map((item, idx) => (
              <MotionCard
                key={item.year}
                delay={idx * 0.05}
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-3"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#8fb1ff]">{item.year}</p>
                <p className="mt-2 text-sm text-neutral-300">{item.event}</p>
              </MotionCard>
            ))}
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
