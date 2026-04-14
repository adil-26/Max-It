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

const heroHighlights = [
  'Enterprise-first screening and compliance process',
  'Fast shortlist delivery for urgent business timelines',
  'Coverage across software, cloud, data, cybersecurity, and ERP',
]

const heroShowcasePhotos = [
  {
    src: '/media/hiring-hero-photo-1.jpg',
    alt: 'Hiring manager and candidate discussing role fit in a meeting room.',
  },
  {
    src: '/media/hiring-hero-photo-2.jpg',
    alt: 'Recruiter reviewing candidate details during an interview process.',
  },
  {
    src: '/media/hiring-hero-photo-3.jpg',
    alt: 'Professional hiring interview with role expectations discussion.',
  },
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

const deliveryFramework = [
  {
    title: '1. Discovery and Role Mapping',
    description:
      'We align role expectations, delivery timelines, budget, and must-have skills with hiring stakeholders before sourcing starts.',
  },
  {
    title: '2. Targeted Sourcing and Vetting',
    description:
      'We run multi-channel sourcing and apply structured technical and behavioral vetting before client submission.',
  },
  {
    title: '3. Interview and Feedback Management',
    description:
      'We coordinate interview loops, track decision feedback, and optimize shortlist quality with each cycle.',
  },
  {
    title: '4. Placement and Onboarding Continuity',
    description:
      'From offer closure to onboarding and post-placement follow-up, we stay accountable for delivery continuity.',
  },
]

const marketInsights = [
  {
    title: 'Software Roles Continue to Expand',
    stat: '15% Growth',
    detail: 'BLS projects software developer employment growth from 2024 to 2034.',
    source: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm',
  },
  {
    title: 'Cybersecurity Talent Demand Remains High',
    stat: '29% Growth',
    detail: 'BLS projects information security analyst employment growth from 2024 to 2034.',
    source: 'https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm',
  },
  {
    title: 'Data and AI Teams Are Scaling Fast',
    stat: '34% Growth',
    detail: 'BLS projects data scientist employment growth from 2024 to 2034.',
    source: 'https://www.bls.gov/ooh/math/data-scientists.htm',
  },
]

const faqItems = [
  {
    q: 'How fast can MAX IT submit candidates?',
    a: 'For most enterprise roles, we target first candidate submissions within 48 to 72 hours after role alignment.',
  },
  {
    q: 'Do you support contract, permanent, and augmentation models?',
    a: 'Yes. We support contract staffing, contract-to-hire, direct hire, and staff augmentation based on your program needs.',
  },
  {
    q: 'Which regions do you serve?',
    a: 'We serve clients across the US, UAE, and India with multi-region sourcing and delivery support.',
  },
  {
    q: 'Can you support compliance-focused hiring environments?',
    a: 'Yes. Our process includes structured vetting and compliance checkpoints suitable for enterprise and regulated sectors.',
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

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-8 pt-24 sm:pt-28">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-[#d7c27a] bg-[#f3eddb] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">
              Enterprise IT Staffing, Consulting, and Delivery
            </p>
            <h1 className="mt-4 font-display text-[2.35rem] leading-[0.96] tracking-tight sm:text-5xl lg:text-[3.35rem]">
              Build Stronger IT Teams
              <br />
              Without Hiring Delays.
            </h1>
            <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-neutral-700 text-pretty sm:text-lg">
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

            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-neutral-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {companySignals.map((item, idx) => (
                <MotionCard
                  key={item.value + item.label}
                  delay={idx * 0.06}
                  className="rounded-xl border border-black/10 bg-white p-4"
                >
                  <p className="font-display text-2xl leading-tight text-black">{item.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">{item.label}</p>
                </MotionCard>
              ))}
            </div>
          </div>

          <MotionCard className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <div className="border-b border-black/10 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Founder Message</p>
            </div>
            <div className="px-4 pb-3 pt-4">
              <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl border border-black/10 bg-[#f9f9f9]">
                <div className="relative aspect-[9/16]">
                  <video
                    className="h-full w-full object-contain"
                    src="/media/home.mp4"
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
            <div className="grid grid-cols-3 gap-2 px-4 pb-4">
              {heroShowcasePhotos.map((photo) => (
                <div key={photo.src} className="overflow-hidden rounded-lg border border-black/10 bg-[#fafafa]">
                  <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
            <p className="px-4 pb-4 text-[11px] text-neutral-500">Selected hiring and interview visuals from public business stock sources.</p>
          </MotionCard>
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
        <MotionCard className="rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Market Insights</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            IT Talent Outlook
            <br />
            2024-2034
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {marketInsights.map((item, idx) => (
              <MotionCard key={item.title} delay={idx * 0.05} className="rounded-xl border border-black/10 bg-[#fafafa] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7f6720]">{item.title}</p>
                <p className="mt-2 font-display text-3xl text-black">{item.stat}</p>
                <p className="mt-2 text-sm text-neutral-700">{item.detail}</p>
                <a
                  href={item.source}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.08em] text-[#7f6720] hover:text-black"
                >
                  Source
                </a>
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-8">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-[#d7c27a] bg-[#f3eddb] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">
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
        <MotionCard className="rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Delivery Framework</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            How We Execute
            <br />
            Hiring Programs
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {deliveryFramework.map((item, idx) => (
              <MotionCard key={item.title} delay={idx * 0.05} className="rounded-xl border border-black/10 bg-[#fafafa] p-4">
                <h3 className="font-display text-2xl leading-tight text-black">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{item.description}</p>
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-8">
        <div className="max-w-4xl">
          <p className="inline-flex rounded-full border border-[#d7c27a] bg-[#f3eddb] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">
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

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16 pt-10">
        <MotionCard className="rounded-2xl border border-black/10 bg-white px-6 py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Ready to Build Your Team?</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.97] tracking-tight sm:text-5xl">
            Book a Free Talent
            <br />
            Capability Audit
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-neutral-700">
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

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16">
        <MotionCard className="rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">FAQ</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            Frequently Asked
            <br />
            Questions
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {faqItems.map((item, idx) => (
              <MotionCard key={item.q} delay={idx * 0.04} className="rounded-xl border border-black/10 bg-[#fafafa] p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#7f6720]">{item.q}</p>
                <p className="mt-2 text-sm text-neutral-700">{item.a}</p>
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
