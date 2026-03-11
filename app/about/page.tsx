import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import { Button } from '@/components/ui/button'
import SiteFooter from '@/components/site-footer'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'About MAX IT Consulting LLC',
  description:
    'Learn about MAX IT Consulting LLC, our staffing methodology, consulting approach, and long-term talent delivery commitment across the United States.',
  path: '/about',
  keywords: [
    'MAX IT Consulting LLC',
    'about MAX IT',
    'IT staffing partner USA',
    'technology recruiting process',
    'IT consulting New Jersey',
  ],
})

const companyFacts = [
  { value: '2008', label: 'Established', note: 'Serving employers since 2008' },
  { value: 'NJ', label: 'Headquartered', note: 'Branchburg, New Jersey' },
  { value: 'US-Wide', label: 'Coverage', note: 'Roles across major U.S. markets' },
  { value: 'High', label: 'Fulfillment Rate', note: 'Strong match-to-role outcomes' },
]

const principles = [
  {
    title: 'Role Accuracy First',
    text: 'We begin with deep intake sessions to ensure role scope, delivery goals, and technical expectations are fully aligned.',
  },
  {
    title: 'Quality + Speed Balance',
    text: 'Our screening process is designed to deliver strong profiles quickly without compromising technical and communication fit.',
  },
  {
    title: 'Industry Context',
    text: 'We tailor hiring strategy to each sector so compliance, workflow, and domain expectations are considered from day one.',
  },
  {
    title: 'Long-Term Partnership',
    text: 'Beyond immediate hiring, we focus on continuity, retention, and delivery reliability for growing teams.',
  },
]

const deliveryFramework = [
  {
    step: '1',
    title: 'Intake and Planning',
    text: 'Clarify role priorities, skill depth, timeline, interview process, and budget guardrails.',
  },
  {
    step: '2',
    title: 'Targeted Sourcing',
    text: 'Use focused channels and networks to source candidates with relevant domain and technical exposure.',
  },
  {
    step: '3',
    title: 'Screening and Validation',
    text: 'Evaluate skills, communication, and role-fit before profile submission.',
  },
  {
    step: '4',
    title: 'Interview Orchestration',
    text: 'Coordinate interview loops, collect structured feedback, and reduce scheduling friction.',
  },
  {
    step: '5',
    title: 'Offer to Onboarding',
    text: 'Support offer closure, joining timeline management, and onboarding transition.',
  },
]

const supportAreas = [
  'Software Engineering',
  'Cloud and DevOps',
  'Cybersecurity',
  'Data and Analytics',
  'Infrastructure and Support',
  'Enterprise Applications',
  'IT Project Coordination',
  'US Staffing and Recruitment',
]

const commitments = [
  'Consistent communication with hiring teams and candidates',
  'Transparent status visibility at every hiring stage',
  'Structured candidate documentation for faster decisions',
  'Reliable turnaround for urgent and niche requirements',
]

const aboutGallery = [
  {
    title: 'Recruitment Strategy Sessions',
    image: '/media/collaboration-room.svg',
    text: 'Collaborative planning with client teams to align hiring goals and delivery milestones.',
  },
  {
    title: 'Candidate Quality Reviews',
    image: '/media/staffing-dashboard.svg',
    text: 'Structured profile validation before submission to improve interview conversion quality.',
  },
  {
    title: 'Career Transition Support',
    image: '/media/candidate-growth.svg',
    text: 'Helping candidates prepare for role-specific interviews and onboarding expectations.',
  },
]

const aboutVideos = [
  {
    title: 'About MAX IT Delivery Model',
    embed: 'https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0&modestbranding=1',
    watch: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
  },
  {
    title: 'Candidate Interview Preparation',
    embed: 'https://www.youtube-nocookie.com/embed/ysz5S6PUM-U?rel=0&modestbranding=1',
    watch: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground />

        <section className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-8 lg:px-20">
          <div className="glass-panel reveal-up p-5 sm:p-12">
            <p className="text-xs uppercase tracking-[0.24em] text-primary">About MAX IT Consulting LLC</p>
            <h1 className="gradient-title mt-4 text-3xl leading-tight sm:text-5xl">
              Trusted IT staffing and consulting partner since 2008
            </h1>
            <p className="mt-5 max-w-5xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              MAX IT Consulting LLC is a New Jersey-based IT staffing and consulting company focused on
              connecting organizations with highly skilled technology professionals. We support clients across
              industries with recruitment precision, strong process execution, and consistent hiring outcomes.
            </p>
            <p className="mt-4 max-w-5xl text-base leading-relaxed text-muted-foreground">
              Our team combines industry expertise with a structured recruiting model to identify, evaluate,
              and deliver role-aligned candidates. We help organizations scale with confidence by placing
              reliable professionals who contribute to both short-term delivery and long-term growth.
            </p>
            <p className="mt-4 max-w-5xl text-base leading-relaxed text-foreground">
              We help businesses grow by connecting them with the right talent at the right time.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-6 sm:px-8 lg:px-20">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {companyFacts.map((fact, idx) => (
              <article
                key={fact.label}
                className="glass-panel reveal-up rounded-2xl p-5 sm:p-6"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <p className="font-display text-3xl uppercase tracking-[0.04em] text-primary sm:text-4xl">{fact.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-foreground">{fact.label}</p>
                <p className="mt-2 text-sm text-muted-foreground">{fact.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-8 lg:px-20">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Operating Principles</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">How we deliver consistent staffing outcomes</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((item, idx) => (
              <article
                key={item.title}
                className="glass-panel reveal-up rounded-xl p-5 sm:p-6"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="font-display text-xl uppercase tracking-[0.06em] sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-20">
          <div className="glass-panel p-5 sm:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Delivery Framework</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Our end-to-end client engagement flow</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-5">
              {deliveryFramework.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-border/70 bg-background/80 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-secondary">Step {item.step}</p>
                  <h3 className="mt-2 font-display text-xl uppercase tracking-[0.05em]">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1440px] gap-6 px-4 py-10 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-20">
          <article className="glass-panel p-5 sm:p-9">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Support Areas</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Technology domains we hire for</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {supportAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </article>

          <article className="glass-panel p-5 sm:p-9">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Client Commitments</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">What you can expect from our team</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {commitments.map((item) => (
                <li key={item} className="rounded-lg border border-border/70 bg-background/80 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-20">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Inside MAX IT</p>
            <h2 className="mt-2 text-2xl sm:text-4xl">Team, process, and delivery moments</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {aboutGallery.map((item, idx) => (
              <article
                key={item.title}
                className="glass-panel reveal-up overflow-hidden rounded-[1.5rem]"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl uppercase tracking-[0.05em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-20">
          <div className="glass-panel p-5 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Video Brief</p>
            <h2 className="mt-2 text-2xl sm:text-4xl">How we support hiring teams and candidates</h2>
            <div className="mt-5 grid gap-5">
              {aboutVideos.map((video) => (
                <article key={video.title} className="rounded-xl border border-border/70 bg-background/80 p-4">
                  <p className="mb-3 text-xs uppercase tracking-[0.16em] text-secondary">{video.title}</p>
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-border/70">
                    <iframe
                      src={video.embed}
                      title={video.title}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Video not loading?{' '}
                    <a
                      href={video.watch}
                      target="_blank"
                      rel="noreferrer"
                      className="text-secondary underline-offset-4 hover:underline"
                    >
                      Open video in new tab
                    </a>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 lg:px-20">
          <div className="glass-panel p-5 sm:p-10">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Connect With MAX IT</p>
                <h2 className="mt-2 text-3xl sm:text-4xl">Build your team with the right IT professionals</h2>
                <p className="mt-4 text-muted-foreground">
                  Partner with us for dependable staffing support, industry-focused recruiting, and a delivery
                  model designed for long-term success.
                </p>
              </div>

              <div className="space-y-3">
                <Link href="/contact" className="block">
                  <Button className="w-full font-display uppercase tracking-[0.12em]">Contact Team</Button>
                </Link>
                <a
                  href="https://www.linkedin.com/groups/17949004/"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full font-display uppercase tracking-[0.12em]">
                    LinkedIn Group
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
