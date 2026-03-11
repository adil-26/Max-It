import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import SiteFooter from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'IT Staffing and IT Consulting Services',
  description:
    'Explore MAX IT Consulting LLC services including contract staffing, permanent hiring, consulting, workforce planning, and managed delivery support.',
  path: '/services',
  keywords: [
    'contract IT staffing',
    'permanent IT hiring',
    'managed talent programs',
    'IT consulting services USA',
    'technology recruitment partner',
  ],
})

const services = [
  {
    title: 'IT Staffing Services',
    desc: 'Contract staffing, contract-to-hire, and permanent recruitment for modern technology roles.',
  },
  {
    title: 'IT Consulting',
    desc: 'Cloud, data, cybersecurity, DevOps, and enterprise architecture support aligned to delivery goals.',
  },
  {
    title: 'Talent Acquisition',
    desc: 'End-to-end sourcing, screening, and interview coordination for enterprise technology teams.',
  },
  {
    title: 'Managed Talent Programs',
    desc: 'Structured workforce scaling models with continuous hiring and delivery oversight.',
  },
  {
    title: 'Workforce Planning',
    desc: 'Role demand forecasting and phased hiring roadmaps for short-term and long-term growth.',
  },
  {
    title: 'Hiring Process Optimization',
    desc: 'Interview loop design, candidate scoring models, and feedback workflows to reduce time-to-hire.',
  },
  {
    title: 'Project-Based Teams',
    desc: 'Rapid team assembly for migration, modernization, and transformation initiatives.',
  },
  {
    title: 'Recruitment Operations Support',
    desc: 'Pipeline management, candidate communication, and reporting support for internal hiring teams.',
  },
]

const engagementModels = [
  {
    title: 'Contract Staffing',
    text: 'Flexible staffing for urgent projects, short-term programs, and specialized execution needs.',
  },
  {
    title: 'Contract-to-Hire',
    text: 'Evaluate role fit in active delivery environments before converting to full-time employment.',
  },
  {
    title: 'Direct Hire',
    text: 'Permanent placement for core technology roles and long-term team expansion.',
  },
  {
    title: 'Managed Hiring Pod',
    text: 'Dedicated recruiter model for high-volume or multi-role hiring cycles.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Requirement Discovery',
    text: 'Clarify must-have skills, preferred backgrounds, timeline, and interview plan.',
  },
  {
    step: '02',
    title: 'Sourcing and Screening',
    text: 'Source targeted profiles and validate technical, communication, and role-fit readiness.',
  },
  {
    step: '03',
    title: 'Shortlist and Interviews',
    text: 'Submit quality-matched candidates with concise notes for faster decision-making.',
  },
  {
    step: '04',
    title: 'Offer and Onboarding',
    text: 'Coordinate closure, joining schedules, and onboarding support with minimal friction.',
  },
]

const outcomes = [
  'Reduced time-to-submit and time-to-hire',
  'Improved profile-to-interview conversion',
  'Higher role-fit quality in shortlist pipelines',
  'Consistent communication across hiring stages',
  'Scalable support for multi-role hiring demand',
]

const servicesGallery = [
  {
    title: 'Recruitment Delivery Desk',
    image: '/media/staffing-dashboard.svg',
    text: 'Fast-moving recruiter operations to support urgent and niche requirements.',
  },
  {
    title: 'Technical Interview Coordination',
    image: '/media/collaboration-room.svg',
    text: 'Structured interview scheduling and feedback loops for smoother hiring cycles.',
  },
  {
    title: 'Candidate Readiness Support',
    image: '/media/candidate-growth.svg',
    text: 'Role-focused preparation to improve interview outcomes and joining success.',
  },
]

const servicesVideos = [
  {
    title: 'Staffing Process Overview',
    embed: 'https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0&modestbranding=1',
    watch: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
  },
  {
    title: 'Consulting Delivery Snapshot',
    embed: 'https://www.youtube-nocookie.com/embed/ysz5S6PUM-U?rel=0&modestbranding=1',
    watch: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground subtle />

        <section className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-8 lg:px-20">
          <div className="glass-panel p-5 sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Services</p>
            <h1 className="mt-2 text-3xl leading-tight sm:text-5xl">Technology staffing and consulting solutions</h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              MAX IT Consulting LLC delivers enterprise-grade staffing and consulting support for organizations
              building secure, scalable, and outcome-focused technology operations.
            </p>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              We support employers through every stage of hiring: demand planning, sourcing, screening,
              interview coordination, offer closure, and onboarding transition.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="font-display uppercase tracking-[0.12em]">Hire Talent</Button>
              </Link>
              <Link href="/jobs">
                <Button variant="outline" className="font-display uppercase tracking-[0.12em]">
                  Explore Career
                </Button>
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border/70 bg-background/80 px-4 py-3">
                <p className="font-display text-2xl tracking-[0.03em]">Contract</p>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Flexible Hiring</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/80 px-4 py-3">
                <p className="font-display text-2xl tracking-[0.03em]">Direct Hire</p>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Core Team Building</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-background/80 px-4 py-3">
                <p className="font-display text-2xl tracking-[0.03em]">Consulting</p>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Delivery Support</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-20">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Service Portfolio</p>
            <h2 className="mt-2 text-2xl sm:text-4xl">Comprehensive support across hiring and consulting</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="glass-panel reveal-up rounded-xl p-5 sm:p-6"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-secondary">Offering</p>
                <h3 className="mt-2 font-display text-xl uppercase tracking-[0.06em] sm:text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-20">
          <div className="glass-panel p-5 sm:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Engagement Models</p>
            <h2 className="mt-2 text-2xl sm:text-4xl">Flexible ways to partner with MAX IT</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {engagementModels.map((model) => (
                <article
                  key={model.title}
                  className="rounded-xl border border-border/70 bg-background/80 p-5"
                >
                  <h3 className="font-display text-xl uppercase tracking-[0.05em] text-foreground">
                    {model.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{model.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-20">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Delivery Process</p>
            <h2 className="mt-2 text-2xl sm:text-4xl">From intake to onboarding, built for execution speed</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.step} className="glass-panel rounded-xl p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-secondary">Step {step.step}</p>
                <h3 className="mt-2 font-display text-xl uppercase tracking-[0.05em] sm:text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1440px] gap-6 px-4 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-20">
          <article className="glass-panel p-5 sm:p-9">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Expected Outcomes</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">What clients gain from our service model</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {outcomes.map((outcome) => (
                <li key={outcome} className="rounded-lg border border-border/70 bg-background/80 px-4 py-3">
                  {outcome}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-panel p-5 sm:p-9">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Need a Hiring Partner?</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Let us support your next hiring cycle</h2>
            <p className="mt-4 text-muted-foreground">
              Whether you need one critical specialist or a full project team, MAX IT Consulting LLC can
              provide practical, scalable support tailored to your timeline and business priorities.
            </p>
            <p className="mt-3 text-muted-foreground">
              Share your requirements and we will propose a focused delivery plan.
            </p>
            <div className="mt-6 space-y-3">
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
          </article>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-20">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Service Visuals</p>
            <h2 className="mt-2 text-2xl sm:text-4xl">How our delivery model works on the ground</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {servicesGallery.map((item, idx) => (
              <article
                key={item.title}
                className="glass-panel reveal-up overflow-hidden rounded-[1.5rem]"
                style={{ animationDelay: `${idx * 90}ms` }}
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
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Service Videos</p>
            <h2 className="mt-2 text-2xl sm:text-4xl">Staffing and consulting explainer videos</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {servicesVideos.map((video) => (
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
      </main>
      <SiteFooter />
    </>
  )
}
