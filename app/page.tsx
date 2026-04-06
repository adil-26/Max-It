import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Globe, Linkedin } from 'lucide-react'
import AnimatedAccentOrbs from '@/components/animated-accent-orbs'
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
      'We source, screen, and place top-tier IT professionals for contract, contract-to-hire, and direct hire roles within days.',
    cta: 'Explore Staffing',
    href: '/services',
  },
  {
    title: 'Business & IT Consulting',
    description:
      'From IT strategy to digital transformation, our consultants align technology decisions with measurable business outcomes.',
    cta: 'Explore Consulting',
    href: '/services',
  },
  {
    title: 'Custom Software Development',
    description:
      'We build scalable enterprise applications, APIs, and integrations tailored to your operational and growth requirements.',
    cta: 'Explore Development',
    href: '/services',
  },
]

const enterprisePillars = [
  {
    title: 'Speed of Placement',
    description:
      'We deliver pre-screened, interview-ready candidates within 48 to 72 hours of receiving your job brief.',
  },
  {
    title: 'Pre-Vetted Talent',
    description:
      'Every profile is screened through technical assessment, background checks, culture fit, references, and compliance.',
  },
  {
    title: 'Global Talent Network',
    description:
      'With offices in the US, UAE, and India, we access high-quality IT talent across global markets.',
  },
  {
    title: 'Enterprise-Grade Compliance',
    description:
      'We manage W2/C2C classification, onboarding documentation, and enterprise-ready compliance workflows.',
  },
  {
    title: 'Industry Expertise',
    description:
      'We specialize in enterprise technology roles with domain-aware recruiters who understand your tech stack.',
  },
  {
    title: 'Dedicated Account Management',
    description:
      'A dedicated account manager partners with your team from briefing through successful placement and onboarding.',
  },
]

const industries = [
  'Banking & Financial Services',
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
      'MAX IT Consulting found us three senior cloud engineers in under two weeks. The quality of candidates was outstanding and the process was seamless.',
    attribution: 'VP of Engineering, New Jersey Fintech Company',
  },
  {
    quote:
      'My recruiter at MAX IT understood exactly what I was looking for. I was placed in my next role quickly and the support continued after joining.',
    attribution: 'Senior Software Engineer, New York',
  },
]

const linkedinHighlights = [
  {
    title: 'Hiring Trend Snapshot',
    summary: 'Enterprise hiring demand remains strong for cloud, data, and cybersecurity roles across US delivery centers.',
  },
  {
    title: 'Talent Capability Audit Spotlight',
    summary: 'Our recruiters shared how 30-minute audit sessions reduce hiring delays and improve shortlist quality.',
  },
  {
    title: 'Placement Success Story',
    summary: 'Recent placement program delivered multiple interview-ready candidates within the first week of intake.',
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
      slogan: 'Hire Smart Grow Fast',
      foundingDate: '2021',
      industry: 'Business Consulting and Services',
      serviceType: [
        'IT Consulting',
        'Business Consulting',
        'Software Development',
        'US Recruitment',
        'IT Staffing',
        'Digital Transformation',
        'Cloud Solutions',
        'Cybersecurity',
      ],
      areaServed: ['United States', 'Nearshore', 'Offshore'],
      sameAs: ['https://in.linkedin.com/company/max-it-consulting'],
      knowsAbout: [
        'IT Consulting',
        'Business Consulting',
        'Software Development',
        'US Recruitment',
        'IT Staffing',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How quickly can MAX IT Consulting LLC deliver enterprise shortlists?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We use AI-led filtering across our 50,000+ candidate database and submit top-fit shortlists based on role complexity and compliance requirements.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you support Fortune 500 compliance and security standards?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our process includes technical vetting, background verification, and enterprise-aligned compliance controls before onboarding.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which delivery models do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We support onshore, nearshore, and offshore staffing models through one unified delivery framework.',
          },
        },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[1200px] bg-[radial-gradient(circle_at_10%_14%,rgba(234,58,69,0.34)_0%,rgba(234,58,69,0.08)_34%,transparent_58%),radial-gradient(circle_at_88%_18%,rgba(47,99,255,0.3)_0%,rgba(47,99,255,0.08)_38%,transparent_62%)]"
      />
      <AnimatedAccentOrbs />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-10 pt-24 sm:pt-28">
        <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_390px]">
          <div className="max-w-5xl">
            <p className="inline-flex rounded-full border border-[#2f63ff]/60 bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
              Powering Enterprise IT - Worldwide
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">
              Trusted technology partner for modern business growth.
            </p>
            <h1 className="hero-title-animated mt-4 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
              We Place Top IT Talent - Fast.
            </h1>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-neutral-300">
              Specialized IT staffing and consulting for enterprise teams across the US, UAE, and India. 100+
              successful placements. Zero compromise on quality.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="brand-cta-gradient inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white"
              >
                Get a Free Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/roles"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Browse Open Roles
              </Link>
            </div>
          </div>

          <MotionCard className="overflow-hidden rounded-[24px] border border-white/12 bg-[#06080d]/90">
            <div className="border-b border-white/10 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">Founder Videos</p>
            </div>
            <div className="grid grid-cols-2 gap-3 px-4 pb-4 pt-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
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
                <p className="px-2 py-2 text-[11px] text-neutral-400">Video 1: Hiring overview</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <div className="relative aspect-[9/16]">
                  <video
                    className="h-full w-full object-contain"
                    src="/media/hiring-owner-message-2.mp4"
                    controls
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    playsInline
                    preload="metadata"
                  />
                </div>
                <p className="px-2 py-2 text-[11px] text-neutral-400">Video 2: Personalized process</p>
              </div>
            </div>
          </MotionCard>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {companySignals.map((item, idx) => (
            <MotionCard
              key={item.value + item.label}
              delay={idx * 0.08}
              className="rounded-2xl border border-white/10 bg-[#07090f]/90 p-5"
            >
              <p className="font-display text-3xl leading-tight text-white">{item.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">{item.label}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d]/90 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8fb1ff]">Client Ecosystem</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((logo, idx) => (
              <MotionCard
                key={logo.src}
                delay={idx * 0.04}
                className="flex h-20 items-center justify-center rounded-xl border border-white/10 bg-black/45 p-3"
              >
                <Image src={logo.src} alt={logo.alt} width={120} height={44} className="h-9 w-auto object-contain" />
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d]/90 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">The Power of 50,000</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            Solve enterprise talent shortage
            <br />
            with a structured supply advantage.
          </h2>
          <p className="mt-4 max-w-4xl text-lg text-neutral-300">
            We maintain a 50,000+ candidate intelligence network and a disciplined screening model so enterprise teams
            can hire faster without sacrificing technical quality, role fit, or compliance readiness.
          </p>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#ea3a45]/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            What We Provide
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
            Comprehensive IT Solutions
            <br />
            for the Modern Enterprise
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {serviceStack.map((service, idx) => (
            <MotionCard
              key={service.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-white/10 bg-[#07090f] p-6"
            >
              <h3 className="font-display text-2xl leading-tight">{service.title}</h3>
              <p className="mt-3 text-lg text-neutral-300">{service.description}</p>
              <Link
                href={service.href}
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#8fb1ff] hover:text-white"
              >
                {service.cta} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#2f63ff]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            Why Choose Us
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
            Why Companies Choose
            <br />
            MAX IT Consulting
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {enterprisePillars.map((pillar, idx) => (
            <MotionCard
              key={pillar.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-white/10 bg-[#07090f] p-6"
            >
              <h3 className="font-display text-3xl leading-tight">{pillar.title}</h3>
              <p className="mt-3 text-lg text-neutral-300">{pillar.description}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">Client Feedback</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.97] tracking-tight sm:text-5xl">
            What Our Clients and
            <br />
            Candidates Say
          </h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {testimonials.map((item, idx) => (
              <MotionCard
                key={item.attribution}
                delay={idx * 0.03}
                className="rounded-xl border border-white/10 bg-black/45 px-5 py-4"
              >
                <p className="text-base text-neutral-100">"{item.quote}"</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#8fb1ff]">
                  {item.attribution}
                </p>
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">LinkedIn Highlights</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.97] tracking-tight sm:text-5xl">
            Insights from MAX IT
            <br />
            leadership and recruiters
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {linkedinHighlights.map((item, idx) => (
              <MotionCard
                key={item.title}
                delay={idx * 0.05}
                className="rounded-xl border border-white/10 bg-black/45 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#8fb1ff]">{item.title}</p>
                <p className="mt-2 text-sm text-neutral-300">{item.summary}</p>
              </MotionCard>
            ))}
          </div>
          <a
            href="https://in.linkedin.com/company/max-it-consulting"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex text-sm font-semibold text-[#8fb1ff] hover:text-white"
          >
            View latest posts on LinkedIn
          </a>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">Industry Coverage</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.97] tracking-tight sm:text-5xl">
            Trusted by Teams Across
            <br />
            Every Major Industry
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {industries.map((industry, idx) => (
              <MotionCard
                key={industry}
                delay={idx * 0.05}
                className="rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm font-semibold text-neutral-200"
              >
                {industry}
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-16 text-center">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#0a1d3f] px-6 py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f63ff]">Connect With Us</p>
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
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#e8a020]">Ready to Build Your Dream Team?</p>
          <h2 className="mt-3 font-display text-4xl leading-[0.97] tracking-tight sm:text-5xl">
            Ready to Build Your
            <br />
            Dream Team?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
            Tell us what you need and we'll deliver. Our Talent Capability Audit is free, takes 30 minutes, and gives
            you a custom IT hiring roadmap at no cost.
          </p>
          <Link
            href="/contact"
            className="brand-cta-gradient mt-8 inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white"
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
