import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'
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
  'MAX IT Consulting LLC was founded in 2021 to close the gap between enterprise demand and high-quality IT talent.',
  'What started as a focused staffing operation in the US has scaled into a multi-continent delivery partner with offices in New Jersey, Dubai, and Noida.',
  'Today we support clients across financial services, healthcare, retail, government, and technology with fast, structured, and compliance-ready hiring outcomes.',
]

const companyTimeline = [
  { year: '2021', event: 'MAX IT Consulting LLC founded in Branchburg, New Jersey.' },
  { year: '2022', event: 'Expanded internationally with a Dubai office for Middle East delivery coverage.' },
  { year: '2022-23', event: 'Opened Noida office and scaled specialized recruiter and consulting operations.' },
  { year: '2024', event: 'Crossed 100+ successful placements across multiple enterprise sectors.' },
  { year: '2025', event: 'Launched Talent Capability Audit for structured enterprise hiring planning.' },
  { year: '2026+', event: 'Expanding domain depth and strategic client partnerships across regions.' },
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#191919]">
      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-8 pt-32 sm:pt-28">
        <div className="max-w-5xl">
          <p className="inline-flex rounded-full border border-[#d7c27a] bg-[#f3eddb] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">
            About MAX IT Consulting LLC
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            About MAX IT Consulting LLC
          </h1>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-neutral-700">
            We are an IT staffing and consulting firm built on one belief: the right talent changes business outcomes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex rounded-xl bg-[#111111] px-6 py-3 text-sm font-semibold text-[#d6bc63]"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-xl border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-black/5"
            >
              Request Capability Audit
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profileSignals.map((item, idx) => (
            <MotionCard key={item.label} delay={idx * 0.06} className="rounded-xl border border-black/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">{item.label}</p>
              <p className="mt-2 font-display text-2xl leading-tight text-black">{item.value}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-8">
        <div className="grid gap-4 md:grid-cols-3">
          {missionPillars.map((item, idx) => (
            <MotionCard key={item.title} delay={idx * 0.06} className="rounded-2xl border border-black/10 bg-white p-6">
              <h2 className="font-display text-3xl leading-tight text-black">{item.title}</h2>
              <p className="mt-3 text-base text-neutral-700">{item.text}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-8">
        <MotionCard className="rounded-2xl border border-black/10 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#7f6720]">Our Story</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.96] tracking-tight text-black sm:text-5xl">
            Built to connect enterprise teams
            <br />
            with world-class IT talent.
          </h2>
          <div className="mt-6 space-y-4 text-base text-neutral-700">
            {ourStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-8">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionCard className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Founder & Director</p>
            <div className="mt-4 flex items-center gap-4">
              <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#f7f7f7]">
                <Image
                  src="/placeholder-user.jpg"
                  alt="Junaid Aamir founder headshot placeholder"
                  width={84}
                  height={84}
                  className="h-20 w-20 object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-3xl leading-tight text-black">Junaid Aamir</h3>
                <p className="mt-1 text-sm text-neutral-700">Founder & Director, MAX IT Consulting LLC</p>
              </div>
            </div>
            <p className="mt-4 text-base text-neutral-700">
              Junaid Aamir founded MAX IT Consulting LLC in 2021 to build a staffing and consulting partner that combines
              boutique speed with enterprise-level process discipline.
            </p>
            <a
              href="https://in.linkedin.com/company/max-it-consulting"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7f6720] hover:text-black"
            >
              <Linkedin className="h-4 w-4" />
              View LinkedIn
            </a>
          </MotionCard>

          <MotionCard className="rounded-2xl border border-black/10 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Global Offices</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {offices.map((office) => (
                <div key={office.name} className="min-w-0 rounded-xl border border-black/10 bg-[#fafafa] p-4">
                  <h4 className="text-lg font-semibold text-black">{office.name}</h4>
                  <p className="mt-2 text-sm text-neutral-700">{office.address}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#7f6720]">{office.phone}</p>
                  <p className="mt-2 break-all text-xs font-semibold tracking-[0.04em] text-neutral-700">{office.email}</p>
                  <p className="mt-1 text-xs text-neutral-500">{office.timezone}</p>
                </div>
              ))}
            </div>
          </MotionCard>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16 pt-4">
        <MotionCard className="rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Company Timeline</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {companyTimeline.map((item, idx) => (
              <MotionCard key={item.year} delay={idx * 0.05} className="rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#7f6720]">{item.year}</p>
                <p className="mt-2 text-sm text-neutral-700">{item.event}</p>
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
