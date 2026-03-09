import Link from 'next/link'
import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import HeroWaveRibbon from '@/components/hero-wave-ribbon'
import BrandShieldOrb from '@/components/brand-shield-orb'
import BrandShield3D from '@/components/brand-shield-3d'
import HeroNetworkGlobe from '@/components/hero-network-globe'
import SplineBlock from '@/components/spline-block'
import SiteFooter from '@/components/site-footer'
import { Button } from '@/components/ui/button'

const trustedLogos = [
  { name: 'AWS', tag: 'Cloud Platform' },
  { name: 'Google Cloud', tag: 'Data and AI' },
  { name: 'Microsoft', tag: 'Enterprise Stack' },
  { name: 'Oracle', tag: 'Enterprise Systems' },
  { name: 'Cisco', tag: 'Network Infrastructure' },
]

const serviceCards = [
  {
    title: 'IT Staffing',
    text: 'Contract, contract-to-hire, and permanent placement for mission-critical technology roles.',
  },
  {
    title: 'IT Consulting',
    text: 'Architecture, modernization, and implementation support for enterprise technology initiatives.',
  },
  {
    title: 'Contract Hiring',
    text: 'Rapid deployment of specialized consultants for short-term and project-based delivery.',
  },
  {
    title: 'Managed Talent',
    text: 'Ongoing workforce management and talent operations for scalable growth.',
  },
]

const industries = [
  {
    title: 'Finance',
    text: 'Secure platforms, low-latency systems, and regulated engineering hiring.',
  },
  {
    title: 'Healthcare',
    text: 'HIPAA-aware staffing for data privacy, EHR integrations, and cloud operations.',
  },
  {
    title: 'Retail',
    text: 'Omnichannel commerce, analytics, and large-scale customer experience systems.',
  },
  {
    title: 'Telecom',
    text: 'Network engineering, OSS/BSS systems, and reliability-focused delivery teams.',
  },
  {
    title: 'Technology',
    text: 'Product engineering, platform development, and modern DevOps capabilities.',
  },
  {
    title: 'Insurance',
    text: 'Claims automation, core platforms, and enterprise modernization programs.',
  },
  {
    title: 'Government',
    text: 'Mission-critical modernization with secure and compliant IT talent pipelines.',
  },
]

const jobCategories = [
  'Software Development',
  'Cloud Engineering',
  'Cybersecurity',
  'Data Science',
  'DevOps',
  'AI Engineering',
  'Infrastructure',
  'Enterprise Systems',
]

const processSteps = [
  'Submit requirements',
  'Talent sourcing',
  'Candidate screening',
  'Interview coordination',
  'Hiring and onboarding',
]

const testimonials = [
  {
    company: 'FinEdge Group',
    quote: 'Max IT reduced our hiring timeline from weeks to days while improving candidate quality.',
    person: 'Director of Engineering',
  },
  {
    company: 'HealthNova Systems',
    quote: 'Their team understood compliance-heavy hiring and delivered excellent cloud specialists.',
    person: 'VP of Technology',
  },
  {
    company: 'RetailAxis',
    quote: 'Reliable staffing partner for high-velocity projects and enterprise rollouts.',
    person: 'Head of Delivery',
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
              Premium US IT Staffing Partner
            </p>

            <h1 className="reveal-up delay-1 max-w-2xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Build Your Future with the Right Technology Talent
            </h1>

            <p className="reveal-up delay-2 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Max IT Consulting connects companies with highly skilled technology professionals across the United States.
            </p>

            <div className="reveal-up delay-3 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="font-display uppercase tracking-[0.12em]">Hire Talent</Button>
              </Link>
              <Link href="/jobs">
                <Button variant="outline" className="font-display uppercase tracking-[0.12em]">
                  Find Jobs
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative z-10 reveal-up delay-2">
            <SplineBlock
              url={splineHeroUrl}
              title="Spline Hero Network Globe"
              className="h-[420px] md:h-[500px]"
              fallback={<HeroNetworkGlobe />}
            />
          </div>

          <HeroWaveRibbon />
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-10 sm:px-8 lg:px-20">
          <p className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by companies across the United States
          </p>
          <div className="glass-panel marquee-pause showcase-mask overflow-hidden py-5">
            <div className="marquee-track items-stretch">
              {[...trustedLogos, ...trustedLogos].map((logo, idx) => (
                <article
                  key={`${logo.name}-${idx}`}
                  className="mx-3 min-w-[220px] rounded-xl border border-white/15 bg-black/30 px-5 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-secondary">{logo.tag}</p>
                  <p className="mt-2 font-display text-xl uppercase tracking-[0.05em] text-foreground">
                    {logo.name}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 lg:px-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Services</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Technology staffing and consulting services</h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <div className="grid gap-5 md:grid-cols-2">
              {serviceCards.map((service, index) => (
                <article
                  key={service.title}
                  className="glass-panel reveal-up p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/45"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-primary">Service {index + 1}</p>
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
                    Digital Cloud Network
                  </p>
                </div>
              }
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 lg:px-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Industries</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Industry-focused technology hiring support</h2>
          </div>

          <div className="hidden md:block">
            <div className="glass-panel marquee-pause showcase-mask overflow-hidden py-6">
              <div className="marquee-track marquee-track-slow items-stretch">
                {[...industries, ...industries].map((industry, idx) => (
                  <article
                    key={`${industry.title}-${idx}`}
                    className="mx-3 min-w-[320px] rounded-xl border border-white/15 bg-black/30 p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-secondary">Industry</p>
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
                <p className="text-xs uppercase tracking-[0.16em] text-secondary">Industry</p>
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
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Job Categories</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Explore technology hiring domains</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobCategories.map((category, idx) => (
              <article
                key={category}
                className="glass-panel reveal-up rounded-xl border p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/45"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Category</p>
                <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.06em]">{category}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1440px] gap-8 px-4 py-14 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-20">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Why Choose Us</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Enterprise-ready staffing execution</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground sm:text-base">
              <li>Fast hiring cycles with pre-vetted candidates</li>
              <li>Top talent pool across specialized technologies</li>
              <li>Industry-specific recruitment expertise</li>
              <li>Nationwide coverage and delivery support</li>
            </ul>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <BrandShield3D />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 lg:px-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">How It Works</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">A clear hiring process from start to finish</h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <div className="grid gap-4 md:grid-cols-2">
              {processSteps.map((step, idx) => (
                <article
                  key={step}
                  className="glass-panel reveal-up p-5"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary">Step {idx + 1}</p>
                  <p className="mt-3 font-display text-xl uppercase tracking-[0.06em]">{step}</p>
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
                    AI Recruitment Intelligence
                  </p>
                </div>
              }
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 lg:px-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Testimonials</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">What clients say about Max IT Consulting</h2>
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
                <p className="text-xs uppercase tracking-[0.2em] text-primary">Ready to Hire</p>
                <h2 className="mt-2 text-3xl sm:text-5xl">Hire Top IT Talent Today</h2>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground xl:mx-0">
                  Tell us your hiring goals and we will help you build a high-performing technology team.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3 xl:justify-start">
                  <Link href="/contact">
                    <Button className="font-display uppercase tracking-[0.12em]">Hire Talent</Button>
                  </Link>
                  <Link href="/jobs">
                    <Button variant="outline" className="font-display uppercase tracking-[0.12em]">
                      Submit Job
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
                      Tech Particle Network
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
