import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { createPageMetadata } from '@/lib/seo'
import MarketingHeader from '@/components/marketing-header'
import MarketingFooter from '@/components/marketing-footer'

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Cultivating careers and connecting professionals with top remote opportunities through a modern recruitment platform.',
  path: '/about',
  keywords: ['about', 'remote recruitment', 'talent platform', 'career support'],
})

const trustedCompanies = [
  'NVIDIA',
  'Alphabet (Google)',
  'Apple',
  'Microsoft',
  'Amazon',
  'Saudi Aramco',
  'TSMC',
  'Meta Platforms (Facebook)',
  'Broadcom',
  'Tesla',
  'Berkshire Hathaway',
  'Walmart',
  'Samsung',
  'Eli Lilly',
  'JPMorgan Chase',
  'Exxon Mobil',
  'Visa',
  'Tencent',
  'Johnson & Johnson',
  'ASML',
  'Micron Technology',
  'SK Hynix',
  'Oracle',
  'Mastercard',
  'Costco',
  'Chevron',
  'Netflix',
  'ICBC',
  'Palantir',
  'AbbVie',
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

const featuredRoles = [
  { company: 'Code Solutions', role: 'Head of Development', date: 'Posted on Nov 26, 2024' },
  { company: 'ABC Studios', role: 'UI/UX Designer', date: 'Posted on Dec 20, 2024' },
  { company: 'Design Spark', role: 'Lead Product Designer', date: 'Posted on Dec 30, 2024' },
]

const recruiters = [
  { slug: 'amber-stewart', name: 'Amber Stewart', exp: '10y', placements: '25', score: '98%' },
  { slug: 'jake-mullock', name: 'Jake Mullock', exp: '5y', placements: '13', score: '95%' },
  { slug: 'jennifer-belle', name: 'Jennifer Belle', exp: '8y', placements: '17', score: '96%' },
]

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[860px] bg-[radial-gradient(circle_at_14%_10%,rgba(235,58,69,0.3)_0%,rgba(235,58,69,0.08)_32%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.26)_0%,rgba(47,99,255,0.08)_40%,transparent_62%)]"
      />

      <MarketingHeader />

      <section className="reveal-up mx-auto w-full max-w-[1240px] px-6 pb-10 pt-36">
        <div className="grid items-end gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="hero-title-animated max-w-3xl font-display text-7xl leading-[0.9] tracking-tight">
              Cultivating professions,
              <br />
              enhancing abilities.
            </h1>
            <p className="mt-5 max-w-3xl text-2xl leading-relaxed text-neutral-300">
              We connect tech professionals with remote opportunities, advancing careers and helping businesses grow.
            </p>
          </div>
          <div className="flex items-center justify-start gap-3 xl:justify-end">
            <Link href="/roles" className="rounded-xl bg-[#2f63ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3f72ff]">
              Explore roles
            </Link>
              <Link href="/hiring" className="rounded-xl border border-[#ea3a45]/45 bg-[#ea3a45]/15 px-6 py-3 text-sm font-semibold text-white hover:bg-[#ea3a45]/22">
                Hire talent
              </Link>
          </div>
        </div>
      </section>

      <section className="reveal-up mx-auto w-full max-w-[1240px] px-6 pb-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
          TRUSTED BY GLOBAL COMPANIES.
        </p>
        <div className="marquee-pause mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-4">
          <div className="marquee-track gap-3 px-2" style={{ animationDirection: 'reverse', animationDuration: '48s' }}>
            {[...trustedCompanies, ...trustedCompanies].map((company, idx) => (
              <span
                key={`${company}-${idx}`}
                className="inline-flex shrink-0 items-center rounded-full border border-white/15 bg-black/45 px-4 py-2 text-sm font-semibold text-neutral-200"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1240px] gap-5 px-6 py-4 lg:grid-cols-[1fr_1fr]">
        <article className="reveal-zoom overflow-hidden rounded-[20px] border border-white/10">
          <div className="relative h-[420px]">
            <Image
              src="/media/office-photo-pexels-4385545.jpg"
              alt="Office collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </article>

        <article className="reveal-tilt overflow-hidden rounded-[20px] border border-white/10 bg-[#09090b]">
          <div className="relative h-[420px]">
            <video
              className="h-full w-full object-cover"
              src="/media/office-video-7792304.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/20" />
            <div className="absolute inset-x-6 bottom-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">COLLABORATION</p>
              <h2 className="mt-2 font-display text-5xl leading-tight">Collaborate with leading companies.</h2>
              <Link href="/hiring" className="mt-4 inline-block rounded-xl bg-[#2f63ff] px-5 py-2.5 text-sm font-semibold text-white">
                Hire now
              </Link>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <p className="reveal-up text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">TESTIMONIALS</p>
        <h2 className="reveal-up mt-2 text-center font-display text-6xl leading-tight">Securing talent&apos;s dream roles.</h2>
        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          {testimonials.map((item, idx) => (
            <article
              key={`${item.name}-${item.company}`}
              className="reveal-tilt rounded-[20px] border border-white/10 bg-[#09090b] p-6"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="flex items-center gap-3">
                <Image src="/placeholder-user.jpg" alt={item.name} width={52} height={52} className="rounded-full object-cover" />
                <div>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-lg text-neutral-400">{item.role}</p>
                </div>
              </div>
              <p className="mt-5 text-2xl leading-relaxed text-neutral-100">{item.quote}</p>
              <div className="mt-5 flex items-end justify-between">
                <p className="text-2xl text-neutral-300">{item.company}</p>
                <div className="text-right">
                  <p className="font-display text-6xl leading-none">{item.score}</p>
                  <p className="text-lg text-neutral-500">Job Satisfaction</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <p className="reveal-up text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#ea3a45]">FEATURED ROLES</p>
        <h2 className="reveal-up mt-2 text-center font-display text-6xl tracking-tight">Find your next role.</h2>
        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {featuredRoles.map((item, idx) => (
            <article
              key={`${item.company}-${item.role}`}
              className="reveal-zoom rounded-[20px] border border-white/10 bg-[#09090b] p-6"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <p className="font-display text-4xl">{item.company}</p>
              <div className="mt-4 h-px bg-white/10" />
              <p className="mt-4 text-3xl font-semibold">{item.role}</p>
              <p className="mt-1 text-lg text-neutral-400">Full-time</p>
              <Link href="/roles" className="mt-6 block rounded-xl bg-[#2f63ff] px-4 py-3 text-center text-sm font-semibold text-white">
                View details
              </Link>
              <p className="mt-3 text-center text-lg text-neutral-500">{item.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-12">
        <p className="reveal-up text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">RECRUITERS</p>
        <h2 className="reveal-up mt-2 text-center font-display text-6xl tracking-tight">Meet your recruiter.</h2>
        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {recruiters.map((item, idx) => (
            <article
              key={item.name}
              className="reveal-zoom rounded-[20px] border border-white/10 bg-[#09090b] p-6"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <p className="text-2xl font-semibold">{item.name}</p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="font-display text-4xl">{item.exp}</p>
                  <p className="text-sm text-neutral-400">Experience</p>
                </div>
                <div>
                  <p className="font-display text-4xl">{item.placements}</p>
                  <p className="text-sm text-neutral-400">Placements</p>
                </div>
                <div>
                  <p className="font-display text-4xl">{item.score}</p>
                  <p className="text-sm text-neutral-400">Satisfaction</p>
                </div>
              </div>
              <Link href={`/profiles/${item.slug}`} className="mt-6 block rounded-xl bg-gradient-to-r from-[#ea3a45] to-[#2f63ff] px-4 py-3 text-center text-sm font-semibold text-white">
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
