import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import HeroWaveRibbon from '@/components/hero-wave-ribbon'
import BrandShieldOrb from '@/components/brand-shield-orb'
import BrandShield3D from '@/components/brand-shield-3d'
import SplineBlock from '@/components/spline-block'
import SiteFooter from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'IT Staffing, Recruitment and Consulting Partner',
  description:
    'MAX IT CONSULTING LLC delivers IT staffing, US recruitment, contract staffing, direct hire, and technology consulting services for fast-growing teams.',
  path: '/',
  keywords: [
    'MAX IT CONSULTING LLC',
    'IT staffing agency',
    'US IT recruitment',
    'contract staffing',
    'direct hire',
    'permanent placement',
  ],
})

const snapshotCompanies = [
  { name: 'IBM', tag: 'Enterprise Technology', logo: '/company-logos/ibm.png' },
  { name: 'Wipro', tag: 'Global IT Services', logo: '/company-logos/wipro.png' },
  { name: 'Indra', tag: 'Digital Systems', logo: '/company-logos/indra.png' },
  { name: 'Atos', tag: 'Cloud and Security', logo: '/company-logos/atos.png' },
  { name: 'Softtek', tag: 'Nearshore Delivery', logo: '/company-logos/softtek.png' },
  { name: 'DATCO', tag: 'Business Solutions', logo: '/company-logos/datco.png' },
]

const serviceCards = [
  {
    title: 'IT Strategy and Consulting',
    text: 'Strategic technology roadmaps aligned to your business goals, growth plans, and delivery priorities.',
  },
  {
    title: 'Digital Transformation',
    text: 'Modernization programs that help teams adopt digital processes, automation, and scalable operating models.',
  },
  {
    title: 'Cloud Solutions',
    text: 'Cloud architecture and migration support built for resilience, scalability, and performance.',
  },
  {
    title: 'Cybersecurity',
    text: 'Security-first controls and advisory services to protect digital assets and reduce operational risk.',
  },
  {
    title: 'Software Development',
    text: 'Custom software engineering for web platforms, internal systems, and business-critical applications.',
  },
  {
    title: 'US Recruitment and IT Staffing',
    text: 'Contract staffing, direct hire, and permanent placement tailored to your delivery and hiring model.',
  },
]

const industries = [
  {
    title: 'Healthcare',
    text: 'Technology and workforce support for secure, compliant, and patient-focused operations.',
  },
  {
    title: 'Marketing',
    text: 'Digital strategy and execution support for marketing operations and campaign performance.',
  },
  {
    title: 'Retail',
    text: 'Software and staffing solutions for omnichannel operations and customer-facing systems.',
  },
  {
    title: 'Telecom',
    text: 'Reliable consulting and engineering support for high-availability telecom environments.',
  },
  {
    title: 'Finance',
    text: 'Secure, scalable technology delivery for data-sensitive and business-critical financial systems.',
  },
]

const jobCategories = [
  'IT Consulting',
  'Business Consulting',
  'Software Development',
  'US Recruitment',
  'IT Staffing',
  'Digital Transformation',
  'Cloud Solutions',
  'Cybersecurity',
]

const processSteps = [
  'Discovery and assessment: we map your current IT landscape, business goals, and practical constraints.',
  'Strategy and execution: we align consulting, delivery, and staffing to the outcomes you need most.',
  'Continuous support: we optimize with your team to ensure secure, scalable, and measurable impact.',
]

const testimonials = [
  {
    company: 'Junaid Amir',
    quote: 'Founder of MAX IT CONSULTING LLC and lead strategist for client growth initiatives.',
    person: 'Founder',
  },
  {
    company: 'Imrana Aamir',
    quote: 'Drives business development with a client-first and execution-focused mindset.',
    person: 'Business Development Executive',
  },
  {
    company: 'Leadership Team',
    quote: 'Supported by experienced account, technology, and recruitment managers across the U.S.',
    person: 'Client Delivery and Recruitment',
  },
]

const splineHeroUrl = process.env.NEXT_PUBLIC_SPLINE_HERO_URL
const splineServicesUrl = process.env.NEXT_PUBLIC_SPLINE_SERVICES_URL
const splineHiringUrl = process.env.NEXT_PUBLIC_SPLINE_HIRING_URL
const splineCtaUrl = process.env.NEXT_PUBLIC_SPLINE_CTA_URL

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground subtle />

        <section className="relative mx-auto grid min-h-[78vh] w-full max-w-[1440px] items-center gap-10 px-4 pb-28 pt-8 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-20">
          <div className="relative z-10 space-y-6">
            <div className="reveal-up w-fit">
              <BrandShieldOrb />
            </div>

            <p className="reveal-up text-xs uppercase tracking-[0.24em] text-primary">
              MAX IT CONSULTING LLC
            </p>

            <h1 className="reveal-up delay-1 max-w-2xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Your trusted partner for technology consulting and staffing.
            </h1>

            <p className="reveal-up delay-2 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              At MAX IT CONSULTING LLC, we help businesses navigate innovation with client-centric IT strategy, secure delivery, and reliable talent solutions.
            </p>

            <div className="reveal-up delay-3 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="font-display uppercase tracking-[0.12em]">Get Consultation</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="font-display uppercase tracking-[0.12em]">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative z-10 reveal-up delay-2">
            <SplineBlock
              url={splineHeroUrl}
              title="Spline Hero Network Globe"
              className="h-[420px] md:h-[500px]"
              fallback={
                <div className="glass-panel relative h-[420px] overflow-hidden p-2 md:h-[500px]">
                  <Image
                    src="/hero-reference.png"
                    alt="3D technology network hero"
                    fill
                    priority
                    className="rounded-xl border border-border/60 object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </div>
              }
            />
          </div>

          <HeroWaveRibbon />
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-10 sm:px-8 lg:px-20">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Company snapshot
          </p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {snapshotCompanies.map((company, idx) => (
              <article
                key={company.name}
                className="glass-panel reveal-up flex items-center gap-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-background/95 via-background/85 to-primary/5 p-4"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="relative h-12 w-28 shrink-0 rounded-lg border border-border/70 bg-white/95 p-2">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-secondary">{company.tag}</p>
                  <p className="mt-1 font-display text-2xl uppercase tracking-[0.06em] text-foreground">
                    {company.name}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 lg:px-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Strategic Services</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Comprehensive IT services built around your goals</h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <div className="grid gap-5 md:grid-cols-2">
              {serviceCards.map((service, index) => (
                <article
                  key={service.title}
                  className="glass-panel reveal-up p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/45"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">Capability {index + 1}</p>
                  <h3 className="font-display text-2xl uppercase tracking-[0.06em]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                </article>
              ))}
            </div>

            <SplineBlock
              url={splineServicesUrl}
              title="Spline Digital Cloud"
              className="min-h-[360px] xl:min-h-[420px]"
              fallback={
                <div className="glass-panel relative min-h-[360px] overflow-hidden p-6 xl:min-h-[420px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(53,122,255,0.32),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(193,18,31,0.25),transparent_50%)]" />
                  <div className="absolute left-1/2 top-[42%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-black/35 shadow-[0_0_30px_rgba(53,122,255,0.28)]" />
                  <div className="absolute left-1/2 top-[42%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 orbit" />
                  <div className="absolute left-1/2 top-[42%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/25 orbit [animation-duration:18s] [animation-direction:reverse]" />
                  <p className="absolute inset-x-6 bottom-6 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Strategy + Delivery + Security
                  </p>
                </div>
              }
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 lg:px-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Industry Portfolio</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Industries we currently support</h2>
          </div>

          <div className="hidden md:block">
            <div className="glass-panel marquee-pause showcase-mask overflow-hidden py-6">
              <div className="marquee-track marquee-track-slow items-stretch">
                {[...industries, ...industries].map((industry, idx) => (
                  <article
                    key={`${industry.title}-${idx}`}
                    className="mx-3 min-w-[320px] rounded-xl border border-white/15 bg-black/30 p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-secondary">Sector</p>
                    <p className="mt-2 font-display text-2xl uppercase tracking-[0.06em] text-foreground">
                      {industry.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{industry.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:hidden">
            {industries.map((industry) => (
              <article key={industry.title} className="glass-panel rounded-xl p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-secondary">Sector</p>
                <p className="mt-2 font-display text-2xl uppercase tracking-[0.06em] text-foreground">
                  {industry.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{industry.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 lg:px-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Delivery Capabilities</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Specialties and focus areas</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobCategories.map((category, idx) => (
              <article
                key={category}
                className="glass-panel reveal-up rounded-xl border p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/45"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Area</p>
                <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.06em]">{category}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1440px] gap-8 px-4 py-14 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-20">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Why MAX IT CONSULTING LLC</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Why clients choose us</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground sm:text-base">
              <li>Client-centric delivery tailored to your exact business objectives</li>
              <li>Expert team with deep consulting and implementation experience</li>
              <li>Innovation-first mindset with practical, future-ready solutions</li>
              <li>Proven outcomes across healthcare, marketing, retail, telecom, and finance</li>
            </ul>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <BrandShield3D />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 lg:px-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Working Method</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">How we deliver measurable outcomes</h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <div className="grid gap-4 md:grid-cols-2">
              {processSteps.map((step, idx) => (
                <article
                  key={step}
                  className="glass-panel reveal-up p-5"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary">Phase {idx + 1}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step}</p>
                </article>
              ))}
            </div>

            <SplineBlock
              url={splineHiringUrl}
              title="Spline AI Brain Animation"
              className="min-h-[360px] xl:min-h-[420px]"
              fallback={
                <div className="glass-panel relative min-h-[360px] overflow-hidden p-6 xl:min-h-[420px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(53,122,255,0.24),transparent_55%),radial-gradient(circle_at_50%_82%,rgba(193,18,31,0.18),transparent_55%)]" />
                  <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/35" />
                  <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/25 orbit [animation-duration:20s]" />
                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_20px_rgba(53,122,255,0.8)]" />
                  <div className="absolute left-[30%] top-[38%] h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
                  <div className="absolute left-[68%] top-[36%] h-2.5 w-2.5 rounded-full bg-white animate-pulse [animation-delay:200ms]" />
                  <div className="absolute left-[32%] top-[64%] h-2.5 w-2.5 rounded-full bg-white animate-pulse [animation-delay:350ms]" />
                  <div className="absolute left-[70%] top-[66%] h-2.5 w-2.5 rounded-full bg-white animate-pulse [animation-delay:500ms]" />
                  <p className="absolute inset-x-6 bottom-6 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Reliable execution from planning to delivery
                  </p>
                </div>
              }
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 lg:px-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Leadership</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">People behind MAX IT CONSULTING LLC</h2>
          </div>

          <div className="glass-panel overflow-hidden py-6">
            <div className="marquee-track marquee-track-slow">
              {[...testimonials, ...testimonials].map((item, idx) => (
                <article key={`${item.company}-${idx}`} className="mx-3 min-w-[320px] rounded-xl border border-white/15 bg-black/30 p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-secondary">{item.company}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.quote}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.14em] text-foreground">{item.person}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-16 pt-10 sm:px-8 lg:px-20">
          <div className="glass-panel particle-field p-6 sm:p-8">
            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
              <div className="text-center xl:text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">Start Your Next IT Challenge</p>
                <h2 className="mt-2 text-3xl sm:text-5xl">Let&apos;s discuss your next IT initiative</h2>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground xl:mx-0">
                  We provide IT consulting, staffing, and software delivery support tailored to your roadmap and team structure.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 xl:justify-start">
                  <Link href="/contact">
                    <Button className="font-display uppercase tracking-[0.12em]">Contact Team</Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="font-display uppercase tracking-[0.12em]">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>

              <SplineBlock
                url={splineCtaUrl}
                title="Spline Tech Particles"
                className="min-h-[280px] xl:min-h-[320px]"
                fallback={
                  <div className="glass-panel relative min-h-[280px] overflow-hidden p-5 xl:min-h-[320px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_26px_rgba(255,255,255,0.95)]" />
                    <div className="absolute left-[30%] top-[30%] h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <div className="absolute left-[70%] top-[28%] h-2 w-2 rounded-full bg-secondary animate-pulse [animation-delay:220ms]" />
                    <div className="absolute left-[24%] top-[64%] h-2 w-2 rounded-full bg-primary animate-pulse [animation-delay:480ms]" />
                    <div className="absolute left-[76%] top-[68%] h-2 w-2 rounded-full bg-secondary animate-pulse [animation-delay:650ms]" />
                    <div className="absolute left-[45%] top-[20%] h-40 w-40 rounded-full border border-white/20 orbit" />
                    <div className="absolute left-[22%] top-[42%] h-28 w-28 rounded-full border border-primary/35 orbit [animation-duration:16s] [animation-direction:reverse]" />
                    <p className="absolute inset-x-4 bottom-4 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      IT Consulting + Staffing + Software Delivery
                    </p>
                  </div>
                }
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
