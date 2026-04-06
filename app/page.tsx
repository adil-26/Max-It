import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import MarketingFooter from '@/components/marketing-footer'
import MarketingHeader from '@/components/marketing-header'
import MotionCard from '@/components/motion-card'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'IT Consulting and Business Consulting Services',
  description:
    'MAX IT Consulting LLC delivers IT consulting, business consulting, software development, US recruitment, and IT staffing services for enterprise teams.',
  path: '/',
  keywords: [
    'IT consulting services',
    'business consulting and services',
    'software development company USA',
    'US recruitment and IT staffing',
    'max it consulting llc',
  ],
})

const companySignals = [
  { value: '100+', label: 'Successful IT Placements' },
  { value: '3+', label: 'Years of Excellence' },
  { value: '3', label: 'US | UAE | India Offices' },
  { value: '50+', label: 'Expert Recruiters & Consultants' },
  { value: '10+', label: 'Verticals Served' },
]

const serviceStack = [
  {
    title: 'IT Staffing & Talent Solutions',
    description:
      'We source, screen, and place high-impact IT professionals for contract, contract-to-hire, and direct-hire roles.',
  },
  {
    title: 'Business & IT Consulting',
    description: 'From technology strategy to execution planning, we align IT decisions with measurable business outcomes.',
  },
  {
    title: 'Custom Software Development',
    description: 'We deliver scalable enterprise applications, APIs, and integrations designed for long-term growth.',
  },
]

const enterprisePillars = [
  {
    title: 'Speed of Placement',
    description: 'Pre-screened, interview-ready candidate submissions within 48 to 72 hours for most enterprise roles.',
  },
  {
    title: 'Pre-Vetted Talent',
    description: 'Every candidate is screened through technical, background, role-fit, and compliance checks.',
  },
  {
    title: 'Global Delivery',
    description: 'With offices in the US, UAE, and India, we deliver broad and reliable access to specialized talent.',
  },
  {
    title: 'Dedicated Account Ownership',
    description: 'A dedicated point-of-contact from intake through onboarding and post-placement support.',
  },
]

const industries = [
  'Financial Services & Banking',
  'Healthcare & Life Sciences',
  'Retail & E-commerce',
  'Government & Public Sector',
  'Manufacturing & Supply Chain',
  'Telecommunications',
  'Insurance',
  'Energy & Utilities',
  'SaaS & Technology',
  'Media & Entertainment',
]

const testimonials = [
  {
    quote:
      'MAX IT Consulting delivered three senior cloud engineers in under two weeks. Candidate quality was strong and execution was highly organized.',
    attribution: 'VP of Engineering, NJ Fintech Company',
  },
  {
    quote:
      'My recruiter understood my goals clearly and moved me into the right enterprise role quickly, with support through every step.',
    attribution: 'Senior Software Engineer, New York',
  },
]

const clientLogos = [
  { src: '/company-logos/ibm.png', alt: 'IBM partner ecosystem logo' },
  { src: '/company-logos/wipro.png', alt: 'Wipro partner ecosystem logo' },
  { src: '/company-logos/atos.png', alt: 'Atos partner ecosystem logo' },
  { src: '/company-logos/softtek.png', alt: 'Softtek partner ecosystem logo' },
  { src: '/company-logos/datco.png', alt: 'Datco partner ecosystem logo' },
  { src: '/company-logos/indra.png', alt: 'Indra partner ecosystem logo' },
]

const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      name: 'MAX IT Consulting LLC',
      slogan: 'Powering Enterprise IT - Worldwide',
      foundingDate: '2021',
      industry: 'Business Consulting and Services',
      serviceType: ['IT Consulting', 'Business Consulting', 'Software Development', 'US Recruitment', 'IT Staffing'],
      areaServed: ['United States', 'UAE', 'India'],
      sameAs: ['https://in.linkedin.com/company/max-it-consulting'],
    },
  ],
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#191919]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }} />
      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-10 pt-24 sm:pt-28">
        <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-[#d7c27a] bg-[#f3eddb] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">
              Enterprise IT Staffing, Consulting, and Delivery
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
              Build Stronger IT Teams
              <br />
              Without Hiring Delays.
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-700">
              MAX IT Consulting helps enterprise teams hire faster and execute better through specialized IT staffing,
              business consulting, and software delivery across the US, UAE, and India.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#111] px-6 py-3 text-sm font-semibold text-[#d6bc63]"
              >
                Get a Free Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-black/5"
              >
                View Services
              </Link>
            </div>
          </div>

          <MotionCard className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <div className="border-b border-black/10 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Founder Message</p>
            </div>
            <div className="px-4 pb-4 pt-4">
              <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl border border-black/10 bg-[#f9f9f9]">
                <div className="relative aspect-[9/16]">
                  <video
                    className="h-full w-full object-contain"
                    src="/media/hiring-owner-message-portrait.mp4"
                    controls
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>
            </div>
          </MotionCard>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {companySignals.map((item, idx) => (
            <MotionCard key={item.value + item.label} delay={idx * 0.06} className="rounded-xl border border-black/10 bg-white p-4">
              <p className="font-display text-2xl leading-tight text-black">{item.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">{item.label}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-8">
        <MotionCard className="rounded-2xl border border-black/10 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Client Ecosystem</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((logo, idx) => (
              <MotionCard
                key={logo.src}
                delay={idx * 0.03}
                className="flex h-20 items-center justify-center rounded-xl border border-black/10 bg-[#fafafa] p-3"
              >
                <Image src={logo.src} alt={logo.alt} width={120} height={44} className="h-9 w-auto object-contain" />
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-8">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#d7c27a] bg-[#f3eddb] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">
            What We Do
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            Comprehensive IT Solutions
            <br />
            for Growth-Focused Enterprises
          </h2>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {serviceStack.map((service, idx) => (
            <MotionCard key={service.title} delay={idx * 0.06} className="rounded-2xl border border-black/10 bg-white p-6">
              <h3 className="font-display text-2xl leading-tight">{service.title}</h3>
              <p className="mt-3 text-base text-neutral-700">{service.description}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-8">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#d7c27a] bg-[#f3eddb] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">
            Why MAX IT
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            Built for Quality,
            <br />
            Speed, and Trust
          </h2>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {enterprisePillars.map((pillar, idx) => (
            <MotionCard key={pillar.title} delay={idx * 0.06} className="rounded-2xl border border-black/10 bg-white p-5">
              <h3 className="font-display text-2xl leading-tight">{pillar.title}</h3>
              <p className="mt-3 text-sm text-neutral-700">{pillar.description}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-8">
        <MotionCard className="rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Industries</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            Trusted Across
            <br />
            Major Sectors
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {industries.map((industry, idx) => (
              <MotionCard
                key={industry}
                delay={idx * 0.02}
                className="rounded-full border border-black/10 bg-[#fafafa] px-3 py-1.5 text-xs font-semibold text-neutral-700"
              >
                {industry}
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-8">
        <MotionCard className="rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Testimonials</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            What Clients and
            <br />
            Candidates Say
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {testimonials.map((item, idx) => (
              <MotionCard key={item.attribution} delay={idx * 0.05} className="rounded-xl border border-black/10 bg-[#fafafa] p-4">
                <p className="text-base text-neutral-800">"{item.quote}"</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#7f6720]">{item.attribution}</p>
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16 pt-10 text-center">
        <MotionCard className="rounded-2xl border border-black/10 bg-white px-6 py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Ready to Build Your Team?</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.97] tracking-tight sm:text-5xl">
            Book a Free Talent
            <br />
            Capability Audit
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-700">
            Share your hiring priorities and we will return an execution-ready hiring roadmap with the right delivery model.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#111] px-7 py-3 text-sm font-semibold text-[#d6bc63]"
          >
            Get My Free Talent Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
