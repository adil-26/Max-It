import type { Metadata } from 'next'
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
  { label: 'Candidate Database', value: '50,000+' },
  { label: 'Founded', value: '2018' },
  { label: 'Industry', value: 'Business Consulting and Services' },
  { label: 'Headquarters', value: 'Branchburg, New Jersey' },
  { label: 'Company Type', value: 'Partnership' },
]

const serviceStack = [
  {
    title: 'IT Strategy and Consulting',
    description:
      'We craft strategic technology roadmaps that align IT investments with business goals and measurable growth targets.',
  },
  {
    title: 'Digital Transformation',
    description:
      'We guide organizations through modernization programs that improve agility, efficiency, and customer-facing performance.',
  },
  {
    title: 'Cloud Solutions',
    description:
      'We help teams adopt and optimize cloud platforms for scale, resilience, and cost-effective operations.',
  },
  {
    title: 'Cybersecurity',
    description:
      'We fortify digital assets with practical security controls, risk mitigation, and enterprise-grade governance measures.',
  },
  {
    title: 'Software Development',
    description:
      'We build bespoke software solutions tailored to real business requirements, system complexity, and delivery timelines.',
  },
  {
    title: 'US Recruitment and IT Staffing',
    description:
      'We deliver highly skilled IT professionals through structured sourcing, technical screening, and role-fit validation.',
  },
]

const enterprisePillars = [
  {
    title: 'Client-Centric Approach',
    description:
      'Your success is at the center of every engagement. We collaborate closely to understand your objectives and tailor execution accordingly.',
  },
  {
    title: 'Expertise',
    description:
      'Our team brings deep cross-industry experience and a strong understanding of modern technology delivery patterns.',
  },
  {
    title: 'Innovation',
    description:
      'We continuously evaluate emerging technologies to provide forward-looking solutions that keep clients competitive.',
  },
  {
    title: 'Proven Track Record',
    description:
      'Our portfolio spans successful projects across diverse sectors with a consistent focus on practical business outcomes.',
  },
]

const industries = [
  'Banking & Financial Services',
  'Insurance',
  'Healthcare & Life Sciences',
  'Manufacturing',
  'Retail & Consumer Tech',
  'Enterprise SaaS',
]

const associatedCompanies = [
  'Amazon',
  'Walmart',
  'Air Canada',
  'Microsoft',
  'Google',
  'Apple',
  'Meta',
  'Oracle',
  'IBM',
  'Accenture',
  'Deloitte',
  'Infosys',
  'TCS',
  'Wipro',
  'Capgemini',
  'JPMorgan Chase',
  'Bank of America',
  'Cisco',
]

const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      name: 'MAX IT Consulting LLC',
      slogan: 'Hire Smart Grow Fast',
      foundingDate: '2018',
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

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-14 pt-28 sm:pt-32">
        <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_430px]">
          <div className="max-w-5xl">
            <p className="inline-flex rounded-full border border-[#2f63ff]/60 bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
              Staffing at the Speed of Business
            </p>
            <h1 className="hero-title-animated mt-6 font-display text-5xl leading-[0.94] tracking-tight sm:text-6xl">
              Trusted technology partner
              <br />
              for modern business growth.
            </h1>
            <p className="mt-5 max-w-4xl text-xl leading-relaxed text-neutral-300">
              Welcome to Max IT Consulting LLC. We help organizations navigate the evolving landscape of technology and
              innovation through practical IT and business consulting, specialized staffing, and delivery-focused
              engineering support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="brand-cta-gradient inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white"
              >
                Request a Talent Capability Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/roles"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Explore Enterprise Roles
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

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {companySignals.map((item, idx) => (
            <MotionCard
              key={item.label}
              delay={idx * 0.08}
              className="rounded-2xl border border-white/10 bg-[#07090f]/90 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">{item.label}</p>
              <p className="mt-2 font-display text-3xl leading-tight text-white">{item.value}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d]/90 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">The Power of 50,000</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.94] tracking-tight sm:text-6xl">
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

      <section className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#ea3a45]/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            What We Provide
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.93] tracking-tight sm:text-7xl">
            Enterprise staffing and consulting
            <br />
            with execution depth.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {serviceStack.map((service, idx) => (
            <MotionCard
              key={service.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-white/10 bg-[#07090f] p-6"
            >
              <h3 className="font-display text-4xl leading-tight">{service.title}</h3>
              <p className="mt-3 text-lg text-neutral-300">{service.description}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#2f63ff]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            Why Choose Us
          </p>
          <h2 className="mt-4 font-display text-6xl leading-[0.93] tracking-tight sm:text-7xl">
            Make better hiring decisions
            <br />
            under enterprise pressure.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {enterprisePillars.map((pillar, idx) => (
            <MotionCard
              key={pillar.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-white/10 bg-[#07090f] p-6"
            >
              <h3 className="font-display text-4xl leading-tight">{pillar.title}</h3>
              <p className="mt-3 text-lg text-neutral-300">{pillar.description}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">Associated Companies</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            Enterprise associations
            <br />
            across global brands.
          </h2>
          <p className="mt-4 max-w-4xl text-lg text-neutral-300">
            Our talent delivery model is aligned to enterprise environments and role standards commonly used across
            global organizations.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {associatedCompanies.map((company, idx) => (
              <MotionCard
                key={company}
                delay={idx * 0.03}
                className="rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-center text-sm font-semibold text-neutral-100"
              >
                {company}
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">Industry Coverage</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            Domain talent across
            <br />
            critical enterprise sectors.
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d] px-6 py-10">
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
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#2f63ff]">Ready to Elevate Hiring?</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            Build your next enterprise talent program
            <br />
            with measurable confidence.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
            Get a capability audit that maps demand, role priority, skill depth, and delivery approach before your
            next hiring cycle.
          </p>
          <Link
            href="/contact"
            className="brand-cta-gradient mt-8 inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white"
          >
            Start Capability Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
