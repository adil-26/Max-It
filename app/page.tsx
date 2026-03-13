import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FuturisticBackground from '@/components/futuristic-background'
import Header from '@/components/header'
import SiteFooter from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'USA IT Staffing and Career Platform',
  description:
    'Discover IT jobs, hire technology professionals, and scale delivery teams with MAX IT Consulting LLC across the United States.',
  path: '/',
  keywords: [
    'USA IT jobs',
    'IT staffing USA',
    'technology hiring USA',
    'MAX IT Consulting LLC',
    'US recruitment',
    'post IT jobs',
  ],
})

type KpiCard = {
  title: string
  value: string
  delta: string
  deltaType: 'up' | 'down'
  sparkline: number[]
}

const kpiCards: KpiCard[] = [
  {
    title: 'Active Openings',
    value: '25,559+',
    delta: '+14% vs last month',
    deltaType: 'up',
    sparkline: [74, 70, 66, 61, 58, 63, 60, 64, 68, 73],
  },
  {
    title: 'Employer Enquiries',
    value: '1,284',
    delta: '+9% weekly growth',
    deltaType: 'up',
    sparkline: [36, 40, 44, 39, 37, 42, 46, 51, 54, 57],
  },
  {
    title: 'Interview-to-Offer',
    value: '41.8%',
    delta: '-2.1% quality alert',
    deltaType: 'down',
    sparkline: [62, 64, 60, 57, 55, 53, 50, 49, 52, 54],
  },
]

const companyMarquee = [
  'Deloitte',
  'Accenture',
  'Cognizant',
  'Capgemini',
  'Infosys',
  'TCS',
  'Wipro USA',
  'EPAM',
  'HCLTech',
  'Tech Mahindra',
  'KPMG',
  'EY',
  'PwC',
  'Slalom',
  'LTI Mindtree',
  'Nagarro',
  'Persistent',
  'LTIM',
  'UST',
  'NTT DATA',
]

const partnerLogos = [
  { name: 'IBM', logo: '/company-logos/ibm.png' },
  { name: 'Wipro', logo: '/company-logos/wipro.png' },
  { name: 'Atos', logo: '/company-logos/atos.png' },
  { name: 'Indra', logo: '/company-logos/indra.png' },
  { name: 'Softtek', logo: '/company-logos/softtek.png' },
  { name: 'DATCO', logo: '/company-logos/datco.png' },
]

const roleDemand = [
  { role: 'Software Engineer', open: 148, urgency: 'High' },
  { role: 'Cloud Engineer', open: 119, urgency: 'High' },
  { role: 'DevOps Engineer', open: 96, urgency: 'High' },
  { role: 'Cybersecurity Analyst', open: 87, urgency: 'High' },
  { role: 'Data Analyst', open: 84, urgency: 'Medium' },
  { role: 'QA Automation', open: 72, urgency: 'Medium' },
  { role: 'Network Engineer', open: 63, urgency: 'Medium' },
  { role: 'Business Analyst', open: 58, urgency: 'Medium' },
  { role: 'IT Recruiter', open: 54, urgency: 'Medium' },
  { role: 'Help Desk', open: 42, urgency: 'Normal' },
]

const recentJobs = [
  {
    title: 'Sr. Java Developer',
    company: 'For a MAX IT Client',
    location: 'New York, NY',
  },
  {
    title: 'Cloud DevOps Engineer',
    company: 'For a MAX IT Client',
    location: 'Dallas, TX',
  },
  {
    title: 'IT Recruiter - US Staffing',
    company: 'MAX IT Consulting LLC',
    location: 'Edison, NJ',
  },
  {
    title: 'Cybersecurity Analyst',
    company: 'For a MAX IT Client',
    location: 'Washington, DC',
  },
  {
    title: 'Business Systems Analyst',
    company: 'For a MAX IT Client',
    location: 'Charlotte, NC',
  },
  {
    title: 'Data Engineer',
    company: 'For a MAX IT Client',
    location: 'Chicago, IL',
  },
  {
    title: 'Service Desk Technician',
    company: 'For a MAX IT Client',
    location: 'Phoenix, AZ',
  },
  {
    title: 'QA Automation Tester',
    company: 'For a MAX IT Client',
    location: 'Atlanta, GA',
  },
]

const cityDemand = [
  { city: 'New York', jobs: 214, salary: '$132k avg' },
  { city: 'Dallas', jobs: 162, salary: '$118k avg' },
  { city: 'Chicago', jobs: 141, salary: '$122k avg' },
  { city: 'Atlanta', jobs: 118, salary: '$114k avg' },
  { city: 'Seattle', jobs: 102, salary: '$146k avg' },
  { city: 'Phoenix', jobs: 91, salary: '$109k avg' },
  { city: 'Charlotte', jobs: 85, salary: '$112k avg' },
  { city: 'San Jose', jobs: 77, salary: '$158k avg' },
]

const hiringFlow = [
  'Intake with role calibration and market fit discussion',
  'Targeted sourcing and technical pre-screen',
  'Shortlist submission with structured candidate notes',
  'Interview coordination and feedback loop',
  'Offer closure and onboarding support',
]

const testimonials = [
  {
    name: 'Arun Yadav',
    role: 'MAX IT Associate',
    quote:
      'MAX IT Consulting LLC helped me secure a stable technology role with consistent communication and a fast process.',
  },
  {
    name: 'Nadia Khan',
    role: 'Cloud Engineering Candidate',
    quote:
      'From profile shortlisting to final offer, the process was transparent, well-structured, and very professional.',
  },
  {
    name: 'US Delivery Manager',
    role: 'Client Team',
    quote:
      'They consistently submit role-aligned candidates quickly. The quality and response times are better than previous partners.',
  },
]

const insights = [
  {
    title: 'Entry-Level and Skilled IT Jobs',
    text: 'Entry-level and skilled technology roles remain essential across logistics, healthcare, retail, telecom, and finance operations in the U.S.',
  },
  {
    title: 'Why MAX IT for USA Hiring',
    text: 'We reduce hiring friction with role-focused sourcing, domain screening, and reliable coordination from intake through onboarding.',
  },
]

const jobsByRoles = [
  'Software Engineer',
  'Cloud Engineer',
  'DevOps Engineer',
  'Cybersecurity Analyst',
  'Data Analyst',
  'Business Analyst',
  'QA Automation',
  'Network Engineer',
  'Service Desk',
  'IT Recruiter',
  'Project Coordinator',
  'Database Administrator',
]

const jobsByCities = [
  'New York',
  'Jersey City',
  'Dallas',
  'Chicago',
  'Atlanta',
  'Phoenix',
  'Seattle',
  'San Jose',
  'Austin',
  'Boston',
  'Charlotte',
  'Tampa',
]

const calendarWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const calendarCells: Array<number | null> = [
  null,
  null,
  null,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  null,
  null,
]
const highlightedDays = new Set([4, 8, 12, 19, 24, 29])

const interviewSchedule = [
  { day: 'Apr 12', title: 'Java Engineer Panel', time: '10:30 AM ET' },
  { day: 'Apr 19', title: 'Cloud Architect Screen', time: '01:00 PM ET' },
  { day: 'Apr 24', title: 'Security Analyst Final', time: '11:45 AM ET' },
]

const intakeSteps = ['Company', 'Role', 'Budget', 'Submit']

const mediaHighlights = [
  {
    title: 'Talent Delivery in Action',
    text: 'Structured sourcing and screening to match business-critical roles faster.',
    image: '/media/staffing-dashboard.svg',
  },
  {
    title: 'Client Collaboration',
    text: 'Close hiring coordination with delivery teams, recruiters, and stakeholders.',
    image: '/media/collaboration-room.svg',
  },
  {
    title: 'Candidate Success',
    text: 'Role-fit focused interview preparation and onboarding transition support.',
    image: '/media/candidate-growth.svg',
  },
]

const videoHighlights = [
  {
    title: 'Hiring Process Walkthrough',
    embed: 'https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0&modestbranding=1',
    watch: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
  },
  {
    title: 'Career Preparation Tips',
    embed: 'https://www.youtube-nocookie.com/embed/ysz5S6PUM-U?rel=0&modestbranding=1',
    watch: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
]

function sparklinePoints(values: number[]) {
  if (values.length === 0) {
    return ''
  }

  const width = 100
  const height = 36
  const padding = 3

  if (values.length === 1) {
    const y = height / 2
    return `0,${y} ${width},${y}`
  }

  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width
      const normalized = (value - min) / range
      const y = height - padding - normalized * (height - padding * 2)
      return `${x},${y}`
    })
    .join(' ')
}

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground subtle />

        <section className="mx-auto grid w-full max-w-[1440px] gap-6 px-4 py-8 sm:px-8 xl:grid-cols-[1.15fr_0.85fr] lg:px-20">
          <article className="glass-panel reveal-up relative overflow-hidden rounded-[2rem] p-5 sm:p-10">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-14 right-[-40px] h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-primary">
                  USA Career and Staffing Platform
                </p>
                <h1 className="mt-3 text-3xl leading-tight sm:text-5xl">
                  Hire faster. Get hired faster.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  MAX IT Consulting LLC connects businesses with skilled IT professionals and helps
                  candidates discover role-matched opportunities across the United States.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="font-display uppercase tracking-[0.12em]">
                    <Link href="/jobs">Explore Career</Link>
                  </Button>
                  <Button asChild variant="outline" className="font-display uppercase tracking-[0.12em]">
                    <Link href="/contact">Contact Team</Link>
                  </Button>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:max-w-md">
                  <div className="rounded-2xl border border-border/70 bg-background/75 px-4 py-3">
                    <p className="font-display text-2xl uppercase tracking-[0.05em]">25k+</p>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      Active Openings
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/75 px-4 py-3">
                    <p className="font-display text-2xl uppercase tracking-[0.05em]">50k+</p>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      Job Seekers
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-border/70 bg-background/80 p-4 shadow-[0_18px_42px_-30px_rgba(0,0,0,0.45)] sm:p-6">
                <div className="rounded-2xl border border-border/70 bg-white p-4 dark:bg-neutral-900">
                  <div className="relative mx-auto h-[92px] w-[260px] max-w-full">
                    <Image
                      src="/max-it-logo.png"
                      alt="MAX IT CONSULTING LLC logo"
                      fill
                      className="object-contain"
                      sizes="260px"
                    />
                  </div>
                </div>
                <p className="mt-5 text-center font-display text-2xl uppercase leading-tight tracking-[0.05em] text-foreground sm:text-3xl">
                  MAX IT CONSULTING LLC
                </p>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Trusted U.S. staffing and consulting partner focused on reliable talent delivery.
                </p>
                <Button asChild className="mt-5 w-full rounded-full font-display uppercase tracking-[0.12em]">
                  <Link href="/contact">Contact Team</Link>
                </Button>
              </div>
            </div>
          </article>

          <div className="space-y-4">
            {kpiCards.map((card, idx) => (
              <article
                key={card.title}
                className="glass-panel reveal-up rounded-[1.8rem] border border-border/75 bg-background/90 p-5"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="grid items-center gap-4 md:grid-cols-[1fr_170px]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{card.title}</p>
                    <p className="mt-2 font-display text-3xl tracking-[0.02em] sm:text-4xl">{card.value}</p>
                    <p
                      className={`mt-1 text-sm font-medium ${
                        card.deltaType === 'up' ? 'text-secondary' : 'text-primary'
                      }`}
                    >
                      {card.delta}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/65 bg-background/80 p-3">
                    <svg viewBox="0 0 100 36" className="h-16 w-full" preserveAspectRatio="none">
                      <polyline
                        fill="none"
                        stroke={card.deltaType === 'up' ? '#2340ed' : '#ff1f20'}
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={sparklinePoints(card.sparkline)}
                      />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-2 sm:px-8 lg:px-20">
          <div className="glass-panel reveal-up rounded-[1.7rem] p-4 sm:p-6">
            <div className="grid gap-4 lg:grid-cols-[1fr_220px_220px_auto]">
              <Input
                name="search"
                form="home-job-search"
                placeholder="Search job title, role, or skill"
                className="h-12 rounded-xl border-border/80 bg-background/80"
              />
              <Input
                name="location"
                form="home-job-search"
                placeholder="City / State"
                className="h-12 rounded-xl border-border/80 bg-background/80"
              />
              <Input
                name="skill"
                form="home-job-search"
                placeholder="Skill"
                className="h-12 rounded-xl border-border/80 bg-background/80"
              />
              <form id="home-job-search" action="/jobs" method="get">
                <Button type="submit" className="h-12 w-full font-display uppercase tracking-[0.12em] lg:min-w-[180px]">
                  Search Career
                </Button>
              </form>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em]">
              {['Contract', 'Full-time', 'Hybrid', 'Remote', 'Cloud', 'Cybersecurity', 'Data'].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-border/70 bg-background/80 px-3 py-1 text-muted-foreground"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-8 lg:px-20">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Top Companies</p>
              <h2 className="mt-2 text-2xl sm:text-4xl">Trusted hiring ecosystem</h2>
            </div>
            <Link href="/contact" className="text-xs uppercase tracking-[0.16em] text-secondary hover:text-primary">
              Become Hiring Partner
            </Link>
          </div>

          <div className="glass-panel reveal-up rounded-[1.7rem] p-4 sm:hidden">
            <div className="flex flex-wrap gap-2">
              {companyMarquee.map((company) => (
                <span
                  key={`mobile-${company}`}
                  className="rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel marquee-pause reveal-up showcase-mask hidden overflow-hidden rounded-[1.7rem] p-4 sm:block">
            <div className="marquee-track">
              {[...companyMarquee, ...companyMarquee].map((company, idx) => (
                <span
                  key={`${company}-${idx}`}
                  className="mx-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.14em] text-foreground"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-6">
            {partnerLogos.map((company, idx) => (
              <article
                key={company.name}
                className="glass-panel reveal-up rounded-2xl border border-border/70 bg-background/85 p-4 text-center"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="relative mx-auto h-12 w-24">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {company.name}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-10 sm:px-8 lg:px-20">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Media Highlights</p>
            <h2 className="mt-2 text-2xl sm:text-4xl">See MAX IT consulting and staffing in action</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {mediaHighlights.map((item, idx) => (
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

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-10 sm:px-8 lg:px-20">
          <div className="grid gap-5 xl:grid-cols-12">
            <article className="glass-panel reveal-up rounded-[1.8rem] p-6 xl:col-span-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">Role Demand</p>
                <Link href="/jobs" className="text-xs uppercase tracking-[0.14em] text-secondary hover:text-primary">
                  View all
                </Link>
              </div>
              <div className="mt-4 space-y-3">
                {roleDemand.map((item) => (
                  <Link
                    key={item.role}
                    href={`/jobs?search=${encodeURIComponent(item.role)}`}
                    className="group flex items-center justify-between rounded-xl border border-border/70 bg-background/75 px-3 py-2 transition hover:-translate-y-0.5 hover:border-primary/45"
                  >
                    <div>
                      <p className="text-sm uppercase tracking-[0.08em] text-foreground">{item.role}</p>
                      <p className="text-xs text-muted-foreground">{item.open} openings</p>
                    </div>
                    <span
                      className="rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.14em]"
                      style={
                        item.urgency === 'High'
                          ? {
                              backgroundColor:
                                'color-mix(in srgb, var(--red-100) 92%, transparent)',
                              color: 'var(--red-700)',
                            }
                          : item.urgency === 'Medium'
                            ? {
                                backgroundColor:
                                  'color-mix(in srgb, var(--blue-100) 92%, transparent)',
                                color: 'var(--blue-700)',
                              }
                            : {
                                backgroundColor:
                                  'color-mix(in srgb, var(--neutral-200) 92%, transparent)',
                                color: 'var(--neutral-700)',
                              }
                      }
                    >
                      {item.urgency}
                    </span>
                  </Link>
                ))}
              </div>
            </article>

            <article className="glass-panel reveal-up rounded-[1.8rem] p-6 xl:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Top Cities</p>
              <h3 className="mt-2 text-2xl sm:text-3xl">USA city hiring index</h3>
              <div className="mt-4 space-y-3">
                {cityDemand.map((item) => (
                  <Link
                    key={item.city}
                    href={`/jobs?location=${encodeURIComponent(item.city)}`}
                    className="block rounded-xl border border-border/70 bg-background/75 px-3 py-3 transition hover:border-secondary/45"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm uppercase tracking-[0.1em]">{item.city}</p>
                      <p className="font-display text-xl uppercase tracking-[0.04em] text-secondary">
                        {item.jobs}
                      </p>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-border/70">
                      <div
                        className="h-full rounded-full bg-secondary transition-all duration-500"
                        style={{ width: `${Math.max(18, Math.round((item.jobs / 214) * 100))}%` }}
                      />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{item.salary}</p>
                  </Link>
                ))}
              </div>
            </article>

            <article className="glass-panel reveal-up rounded-[1.8rem] p-6 xl:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Hiring Flow</p>
              <h3 className="mt-2 text-2xl sm:text-3xl">How we deliver fast hiring</h3>
              <div className="mt-4 space-y-2">
                {hiringFlow.map((step, idx) => (
                  <div
                    key={step}
                    className="rounded-xl border border-border/70 bg-background/75 px-3 py-3 text-sm text-muted-foreground"
                  >
                    <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-[11px] text-primary">
                      {idx + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
              <Button asChild className="mt-5 w-full font-display uppercase tracking-[0.12em]">
                <Link href="/contact">Start Hiring</Link>
              </Button>
            </article>

            <article className="glass-panel reveal-up rounded-[1.8rem] p-6 xl:col-span-8">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">Recent Jobs</p>
                  <h3 className="mt-2 text-2xl sm:text-3xl">Latest openings in U.S. market</h3>
                </div>
                <Link href="/jobs" className="text-xs uppercase tracking-[0.16em] text-secondary hover:text-primary">
                  View All Jobs
                </Link>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {recentJobs.map((job) => (
                  <Link
                    key={`${job.title}-${job.location}`}
                    href={`/jobs?search=${encodeURIComponent(job.title)}`}
                    className="rounded-xl border border-border/70 bg-background/75 px-4 py-3 transition hover:-translate-y-0.5 hover:border-primary/45"
                  >
                    <p className="font-medium text-foreground">{job.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {job.company} | {job.location}
                    </p>
                  </Link>
                ))}
              </div>
            </article>

            <article className="glass-panel reveal-up rounded-[1.8rem] p-6 xl:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Testimonials</p>
              <div className="mt-4 space-y-3">
                {testimonials.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-border/70 bg-background/75 px-4 py-4"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-secondary">{item.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.quote}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-foreground">{item.name}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-10 sm:px-8 lg:px-20">
          <div className="grid gap-5 lg:grid-cols-2">
            {insights.map((item, idx) => (
              <article
                key={item.title}
                className="glass-panel reveal-up rounded-[1.8rem] p-7 sm:p-8"
                style={{
                  animationDelay: `${idx * 120}ms`,
                  backgroundColor:
                    idx % 2 === 0
                      ? 'color-mix(in srgb, var(--red-0) 68%, transparent)'
                      : 'color-mix(in srgb, var(--blue-50) 68%, transparent)',
                }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-primary">
                  {idx === 0 ? 'Workforce Insight' : 'Employer Insight'}
                </p>
                <h3 className="mt-2 text-3xl sm:text-4xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-10 sm:px-8 lg:px-20">
          <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
            <article className="glass-panel reveal-up rounded-[1.8rem] p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">Interview Calendar</p>
                  <h3 className="mt-2 text-2xl sm:text-3xl">Hiring plan - April 2026</h3>
                </div>
                <span className="rounded-full border border-border/70 bg-background/80 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Team schedule
                </span>
              </div>

              <div className="mt-5 rounded-2xl border border-border/70 bg-background/75 p-4">
                <div className="grid grid-cols-7 gap-2">
                  {calendarWeekdays.map((day) => (
                    <p
                      key={day}
                      className="text-center text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {day}
                    </p>
                  ))}
                  {calendarCells.map((cell, idx) => {
                    const isHighlighted = cell ? highlightedDays.has(cell) : false
                    return (
                      <div
                        key={`cell-${idx}`}
                        className={`flex h-10 items-center justify-center rounded-lg border text-sm ${
                          cell
                            ? isHighlighted
                              ? 'border-secondary/35 bg-secondary/12 text-secondary'
                              : 'border-border/65 bg-background/85 text-foreground'
                            : 'border-transparent bg-transparent'
                        }`}
                      >
                        {cell ?? ''}
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {interviewSchedule.map((slot) => (
                  <div
                    key={slot.title}
                    className="rounded-xl border border-border/70 bg-background/75 p-3"
                  >
                    <p className="text-[11px] uppercase tracking-[0.14em] text-secondary">{slot.day}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.06em] text-foreground">{slot.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{slot.time}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass-panel reveal-up rounded-[1.8rem] p-6 sm:p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Employer Intake Form</p>
              <h3 className="mt-2 text-2xl sm:text-3xl">Share hiring requirement in 2 minutes</h3>

              <div className="mt-5 grid grid-cols-4 gap-2">
                {intakeSteps.map((step, idx) => (
                  <div key={step} className="space-y-2 text-center">
                    <div
                      className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full border text-[11px] ${
                        idx === 0
                          ? 'border-primary/45 bg-primary/15 text-primary'
                          : 'border-border/70 bg-background/80 text-muted-foreground'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>

              <form action="/contact" method="get" className="mt-5 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Input
                    name="company"
                    placeholder="Company name"
                    className="h-11 rounded-xl border-border/80 bg-background/80"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Work email"
                    className="h-11 rounded-xl border-border/80 bg-background/80"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <Input
                    name="role"
                    placeholder="Role title"
                    className="h-11 rounded-xl border-border/80 bg-background/80"
                  />
                  <select
                    name="engagement"
                    className="h-11 w-full rounded-xl border border-border/80 bg-background/80 px-3 text-sm text-foreground"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Engagement type
                    </option>
                    <option value="contract">Contract</option>
                    <option value="contract-to-hire">Contract-to-hire</option>
                    <option value="full-time">Full-time</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Required skills, budget, and timeline"
                  className="w-full rounded-xl border border-border/80 bg-background/80 px-3 py-2 text-sm text-foreground"
                />

                <Button type="submit" className="w-full rounded-xl font-display uppercase tracking-[0.12em]">
                  Continue to Contact
                </Button>
              </form>
            </article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-10 sm:px-8 lg:px-20">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Video Insights</p>
            <h2 className="mt-2 text-2xl sm:text-4xl">Hiring and career guidance videos</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {videoHighlights.map((video, idx) => (
              <article
                key={video.title}
                className="glass-panel reveal-up overflow-hidden rounded-[1.5rem] p-4"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <p className="mb-3 text-xs uppercase tracking-[0.16em] text-secondary">{video.title}</p>
                <div className="relative aspect-video overflow-hidden rounded-xl border border-border/70 bg-background/85">
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
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-12 sm:px-8 lg:px-20">
          <div className="glass-panel reveal-up rounded-[1.8rem] p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Explore by Filter</p>

            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">Jobs By Roles</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {jobsByRoles.map((role) => (
                <Link
                  key={role}
                  href={`/jobs?search=${encodeURIComponent(role)}`}
                  className="rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-foreground transition hover:bg-primary/10"
                >
                  {role}
                </Link>
              ))}
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">Jobs By Cities</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {jobsByCities.map((city) => (
                <Link
                  key={city}
                  href={`/jobs?location=${encodeURIComponent(city)}`}
                  className="rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-foreground transition hover:bg-secondary/10"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-16 sm:px-8 lg:px-20">
          <div className="glass-panel reveal-up relative overflow-hidden rounded-[2rem] border border-border/70 p-7 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(255,31,32,0.12)_0%,transparent_36%),radial-gradient(circle_at_88%_88%,rgba(57,97,248,0.16)_0%,transparent_34%)]" />
            <div className="relative z-10 grid gap-6 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary">MAX IT Consulting LLC</p>
                <h2 className="mt-2 text-3xl sm:text-5xl">Build high-performance teams in the USA</h2>
                <p className="mt-4 max-w-3xl text-muted-foreground">
                  We help businesses grow by connecting them with the right talent at the right time.
                  From urgent contract staffing to long-term hiring, we support end-to-end recruitment and
                  delivery alignment.
                </p>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full font-display uppercase tracking-[0.12em]">
                  <Link href="/contact">Contact Team</Link>
                </Button>
                <Button asChild variant="outline" className="w-full font-display uppercase tracking-[0.12em]">
                  <a
                    href="https://www.linkedin.com/company/maxitconsultingllc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
