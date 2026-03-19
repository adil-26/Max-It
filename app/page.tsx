import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import MarketingFooter from '@/components/marketing-footer'
import MarketingHeader from '@/components/marketing-header'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Remote Tech Careers',
  description:
    'Connect with top companies, explore remote opportunities, and discover your next tech role.',
  path: '/',
  keywords: [
    'remote tech careers',
    'remote jobs',
    'technology hiring',
    'recruitment',
    'career growth',
  ],
})

const heroTestimonials = [
  {
    name: 'Jon Bell',
    role: 'Data Scientist',
    quote: 'The team at Talentify understood my career goals and helped me secure a fantastic role.',
    company: 'Code Solutions',
    score: '9/10',
  },
  {
    name: 'Tim Chen',
    role: 'Senior Software Engineer',
    quote: 'Talentify helped me land my dream remote developer job in just a few weeks.',
    company: 'ABC Solutions',
    score: '9/10',
  },
  {
    name: 'Sarah Maplas',
    role: 'Lead UX Designer',
    quote: 'Thanks to Talentify, I found a perfect remote tech role that matches my skills and lifestyle.',
    company: 'Creative Studios',
    score: '8/10',
  },
  {
    name: 'Eniola Bakare',
    role: 'Full Stack Developer',
    quote: 'From start to finish, the recruitment process was simple and fast.',
    company: 'Abstract Studio',
    score: '10/10',
  },
]

const processSteps = [
  {
    title: 'Browse remote jobs.',
    text: 'Explore a curated selection of remote tech job listings that match your expertise and career goals.',
    id: 'STEP 01',
  },
  {
    title: 'Apply role of your choice.',
    text: "Submit applications directly through Talentify, knowing you're connecting with companies actively seeking remote professionals.",
    id: 'STEP 02',
  },
  {
    title: 'Meet Talentify.',
    text: 'Have a quick chat with our team to align your skills, experience, and career goals with the right opportunities.',
    id: 'STEP 03',
  },
  {
    title: 'Land your dream role.',
    text: 'After interviews and final selection, secure your next remote tech role and start with top companies.',
    id: 'STEP 04',
  },
]

const recruitingList = [
  {
    title: 'Role posting.',
    text: 'Post your job and access a curated pool of skilled tech candidates, from software development to data science.',
  },
  { title: 'Pre-screening interviews.' },
  { title: 'Onboarding support.' },
  { title: 'Diversify recruitment.' },
]

const featuredRoles = [
  {
    company: 'Code Solutions',
    role: 'Head of Development',
    type: 'Full-time',
    date: 'Posted on Nov 26, 2024',
  },
  {
    company: 'ABC Studios',
    role: 'UI/UX Designer',
    type: 'Full-time',
    date: 'Posted on Dec 20, 2024',
  },
  {
    company: 'Design Spark',
    role: 'Lead Product Designer',
    type: 'Full-time',
    date: 'Posted on Dec 30, 2024',
  },
]

const testimonials = [
  {
    name: 'Jon Bell',
    role: 'Data Scientist',
    quote: 'The team at Talentify understood my career goals and helped me secure a fantastic role.',
    company: 'Code Solutions',
    score: '9/10',
  },
  {
    name: 'Eniola Bakare',
    role: 'Full Stack Developer',
    quote: 'From start to finish, Talentify made the recruitment process super simple. Highly recommend!',
    company: 'Abstract Studio',
    score: '10/10',
  },
  {
    name: 'Sarah Maplas',
    role: 'Lead UX Designer',
    quote: 'Thanks to Talentify, I found a perfect remote tech role that matches my skills and lifestyle.',
    company: 'Creative Studios',
    score: '8/10',
  },
  {
    name: 'Tim Chen',
    role: 'Senior Software Engineer',
    quote: 'Talentify helped me land my dream remote developer job in just a few weeks.',
    company: 'ABC Solutions',
    score: '9/10',
  },
]

const recruiters = [
  {
    slug: 'amber-stewart',
    name: 'Amber Stewart',
    location: 'BASED IN AMSTERDAM',
    experience: '10y',
    placements: '25',
    satisfaction: '98%',
  },
  {
    slug: 'jake-mullock',
    name: 'Jake Mullock',
    location: 'BASED IN BERLIN',
    experience: '5y',
    placements: '13',
    satisfaction: '95%',
  },
  {
    slug: 'jennifer-belle',
    name: 'Jennifer Belle',
    location: 'BASED IN IRELAND',
    experience: '8y',
    placements: '17',
    satisfaction: '96%',
  },
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040405] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[860px] bg-[radial-gradient(circle_at_14%_10%,rgba(235,58,69,0.3)_0%,rgba(235,58,69,0.08)_32%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.26)_0%,rgba(47,99,255,0.08)_40%,transparent_62%)]"
      />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16 pt-36">
        <div className="grid gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
          <div>
            <h1 className="hero-title-animated font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">
              Your gateway to
              <br />
              remote tech careers.
            </h1>
            <p className="mt-5 max-w-lg text-2xl leading-relaxed text-neutral-400">
              Connect with top companies and explore roles suited to your skills and career goals.
            </p>
          </div>
          <div className="flex items-center justify-start gap-3 xl:justify-end">
            <Link
              href="/jobs"
              className="rounded-xl bg-[#2f63ff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3d73ff]"
            >
              Explore roles
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-[#ea3a45]/45 bg-[#ea3a45]/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ea3a45]/22"
            >
              Hire talent
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {heroTestimonials.map((item) => (
            <article
              key={`${item.name}-${item.role}`}
              className="rounded-[28px] border border-white/10 bg-[linear-gradient(165deg,#131b2f_0%,#0c0e14_48%,#231319_100%)] p-5"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/placeholder-user.jpg"
                  alt={item.name}
                  width={52}
                  height={52}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-sm text-neutral-400">{item.role}</p>
                </div>
              </div>
              <p className="mt-5 min-h-[84px] text-lg leading-snug text-neutral-100">{item.quote}</p>
              <div className="mt-5 flex items-end justify-between">
                <p className="text-base font-medium text-neutral-300">{item.company}</p>
                <div className="text-right">
                  <p className="font-display text-5xl leading-none text-white">{item.score}</p>
                  <p className="text-sm text-neutral-500">Job Satisfaction</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">PROCESS</p>
            <h2 className="mt-2 font-display text-5xl leading-[0.95] tracking-tight">
              Your path to the perfect remote tech job.
            </h2>
            <p className="mt-4 max-w-3xl text-2xl text-neutral-400">
              Discover top remote opportunities and land your next role with ease, through our streamlined process.
            </p>
          </div>
          <Link
            href="/jobs"
            className="rounded-xl bg-gradient-to-r from-[#ea3a45] to-[#2f63ff] px-6 py-3 text-sm font-semibold text-white transition hover:from-[#ff4c58] hover:to-[#3d73ff]"
          >
            View open roles
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {processSteps.slice(0, 2).map((item, idx) => (
            <article
              key={item.id}
              className="rounded-[24px] border border-white/10 bg-[#09090b] p-8"
            >
              <p className={`text-sm font-semibold uppercase tracking-[0.1em] ${idx % 2 === 0 ? 'text-[#ea3a45]' : 'text-[#2f63ff]'}`}>
                {item.id}
              </p>
              <h3 className="mt-3 font-display text-5xl tracking-tight">{item.title}</h3>
              <p className="mt-4 text-xl leading-relaxed text-neutral-400">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 flex justify-end gap-3">
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-neutral-300"
            aria-label="Previous step"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#2f63ff] text-white"
            aria-label="Next step"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {processSteps.slice(2).map((item, idx) => (
            <article
              key={item.id}
              className="rounded-[24px] border border-white/10 bg-[#09090b] p-8"
            >
              <p className={`text-sm font-semibold uppercase tracking-[0.1em] ${idx % 2 === 0 ? 'text-[#2f63ff]' : 'text-[#ea3a45]'}`}>
                {item.id}
              </p>
              <h3 className="mt-3 font-display text-5xl tracking-tight">{item.title}</h3>
              <p className="mt-4 text-xl leading-relaxed text-neutral-400">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1240px] gap-8 px-6 py-12 lg:grid-cols-[1fr_0.98fr]">
        <article>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#ea3a45]">RECRUITING</p>
          <h2 className="mt-2 font-display text-5xl tracking-tight">Select from the best.</h2>
          <p className="mt-4 max-w-2xl text-2xl leading-relaxed text-neutral-400">
            We know finding the right hire is challenging, which is why we approve only highly skilled professionals on our platform.
          </p>

          <div className="mt-10 space-y-6">
            {recruitingList.map((item, idx) => (
              <div key={item.title}>
                <h3 className="font-display text-5xl tracking-tight">{item.title}</h3>
                {item.text ? <p className="mt-3 max-w-xl text-xl leading-relaxed text-neutral-400">{item.text}</p> : null}
                {idx < recruitingList.length - 1 ? <div className="mt-6 h-px bg-white/10" /> : null}
              </div>
            ))}
          </div>
        </article>

        <article className="flex flex-col justify-between">
          <div className="flex justify-end">
            <Link
              href="/contact"
              className="rounded-xl bg-[#ea3a45] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff3b47]"
            >
              Hire now
            </Link>
          </div>
          <div className="relative mt-8 min-h-[590px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0a0a0d]">
            <Image
              src="/placeholder.jpg"
              alt="Professional working on laptop"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">FEATURED ROLES</p>
        <h2 className="mt-2 text-center font-display text-6xl tracking-tight">Find your next role.</h2>
        <p className="mt-4 text-center text-2xl text-neutral-400">Browse, apply and land your dream remote job.</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {featuredRoles.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-[22px] border border-white/10 bg-[#09090b] p-6"
            >
              <div className="inline-flex rounded-full border border-[#2f63ff]/35 bg-[#2f63ff]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#9eb6ff]">
                Featured
              </div>
              <p className="mt-4 font-display text-5xl tracking-tight">{item.company}</p>
              <div className="mt-4 h-px bg-white/10" />
              <p className="mt-4 text-3xl font-semibold">{item.role}</p>
              <p className="mt-1 text-xl text-neutral-400">{item.type}</p>
              <Link
                href="/jobs"
                className="mt-6 block rounded-xl bg-[#2f63ff] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#3d73ff]"
              >
                View details
              </Link>
              <p className="mt-4 text-center text-lg text-neutral-500">{item.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#ea3a45]">TESTIMONIALS</p>
        <h2 className="mt-2 text-center font-display text-6xl tracking-tight">Securing talent&apos;s dream roles.</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-2xl leading-relaxed text-neutral-400">
          Hear from professionals who&apos;ve found their perfect role through us. Their success is our motivation.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={`${item.name}-${item.company}`}
              className="rounded-[24px] border border-white/10 bg-[#09090b] p-6"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/placeholder-user.jpg"
                  alt={item.name}
                  width={52}
                  height={52}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-lg text-neutral-400">{item.role}</p>
                </div>
              </div>

              <p className="mt-6 text-2xl leading-relaxed text-neutral-100">{item.quote}</p>

              <div className="mt-6 flex items-end justify-between">
                <p className="text-2xl text-neutral-300">{item.company}</p>
                <div className="text-right">
                  <p className="font-display text-6xl leading-none text-white">{item.score}</p>
                  <p className="text-lg text-neutral-500">Job Satisfaction</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">RECRUITERS</p>
        <h2 className="mt-2 text-center font-display text-6xl tracking-tight">Meet your recruiter.</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-2xl leading-relaxed text-neutral-400">
          With our combined, extensive experience, we ensure we&apos;ll help you land your perfect role.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {recruiters.map((item) => (
            <article
              key={item.name}
              className="rounded-[22px] border border-white/10 bg-[#09090b] p-6"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/placeholder-user.jpg"
                  alt={item.name}
                  width={58}
                  height={58}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-3xl font-semibold">{item.name}</p>
                  <p className="text-sm font-semibold tracking-[0.06em] text-neutral-400">{item.location}</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display text-5xl">{item.experience}</p>
                  <p className="text-lg text-neutral-400">Experience</p>
                </div>
                <div>
                  <p className="font-display text-5xl">{item.placements}</p>
                  <p className="text-lg text-neutral-400">Placements</p>
                </div>
                <div>
                  <p className="font-display text-5xl">{item.satisfaction}</p>
                  <p className="text-lg text-neutral-400">Satisfaction</p>
                </div>
              </div>

              <Link
                href={`/profiles/${item.slug}`}
                className="mt-7 block rounded-xl bg-gradient-to-r from-[#ea3a45] to-[#2f63ff] px-4 py-3 text-center text-sm font-semibold text-white transition hover:from-[#ff4c58] hover:to-[#3d73ff]"
              >
                View profile
              </Link>
            </article>
          ))}
        </div>
      </section>

      <MarketingFooter />
    </main>
  )
}
