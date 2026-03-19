import Image from 'next/image'
import Link from 'next/link'
import MarketingHeader from '@/components/marketing-header'
import MarketingFooter from '@/components/marketing-footer'

const roleCards = [
  { company: 'ABC Studios', role: 'UI/UX Researcher', type: 'Full-time', date: 'Posted on Dec 03, 2024' },
  { company: 'Design Spark', role: 'Junior Product Designer', type: 'Part-time', date: 'Posted on Dec 12, 2024' },
  { company: 'Code Solutions', role: 'Head of Development', type: 'Full-time', date: 'Posted on Nov 26, 2024' },
  { company: 'ABC Studios', role: 'UI/UX Designer', type: 'Full-time', date: 'Posted on Dec 20, 2024' },
  { company: 'Affinity Solutions', role: 'Design Engineer', type: 'Contract', date: 'Posted on Dec 13, 2024' },
  { company: 'Code Block', role: 'Software Engineer', type: 'Part-time', date: 'Posted on Dec 22, 2024' },
]

const recruiters = [
  { slug: 'amber-stewart', name: 'Amber Stewart', exp: '10y', placements: '25', score: '98%' },
  { slug: 'jake-mullock', name: 'Jake Mullock', exp: '5y', placements: '13', score: '95%' },
  { slug: 'jennifer-belle', name: 'Jennifer Belle', exp: '8y', placements: '17', score: '96%' },
]

export default function JobsPage() {
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
              Start to work from
              <br />
              anywhere now.
            </h1>
            <p className="mt-5 max-w-3xl text-2xl leading-relaxed text-neutral-300">
              Work from your ideal environment while connecting with top tech companies.
            </p>
          </div>
          <div className="flex items-center justify-start gap-3 xl:justify-end">
            <Link href="/roles" className="rounded-xl bg-[#2f63ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3f72ff]">
              View open roles
            </Link>
            <Link href="/contact" className="rounded-xl border border-[#ea3a45]/45 bg-[#ea3a45]/15 px-6 py-3 text-sm font-semibold text-white hover:bg-[#ea3a45]/22">
              Join platform
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-12">
        <div className="reveal-zoom overflow-hidden rounded-[20px] border border-white/10">
          <video
            className="h-[280px] w-full object-cover sm:h-[360px]"
            src="/media/office-video-7792192.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-6">
        <div className="reveal-up flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">OPEN ROLES</p>
            <h2 className="mt-2 font-display text-6xl tracking-tight">Search active job listings.</h2>
          </div>
          <div className="text-sm text-neutral-400">ALL</div>
        </div>

        <div className="reveal-zoom mt-5 flex h-12 items-center rounded-full border border-white/10 bg-white/5 px-5 text-lg text-neutral-500">
          Search for roles, e.g. Framer Developer...
          <span className="ml-auto text-neutral-400">⌕</span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {roleCards.map((item, idx) => (
            <article
              key={`${item.company}-${item.role}-${idx}`}
              className="reveal-tilt rounded-[18px] border border-white/10 bg-[#09090b] p-5"
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <p className="font-display text-4xl leading-tight">{item.company}</p>
              <div className="mt-4 h-px bg-white/10" />
              <p className="mt-4 text-3xl font-semibold">{item.role}</p>
              <p className="mt-1 text-lg text-neutral-400">{item.type}</p>
              <Link href="/contact" className="mt-5 block rounded-xl bg-[#2f63ff] px-4 py-3 text-center text-sm font-semibold text-white">
                View details
              </Link>
              <p className="mt-3 text-center text-lg text-neutral-500">{item.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1240px] gap-8 px-6 py-12 lg:grid-cols-[1fr_1fr]">
        <article className="reveal-up">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">JOIN TALENTIFY</p>
          <h2 className="mt-2 font-display text-6xl leading-[0.95] tracking-tight">Get discovered by top tech employers.</h2>
          <p className="mt-4 max-w-xl text-2xl text-neutral-300">
            Join our network and share your profile for active roles where your skills can create impact.
          </p>
          <div className="reveal-zoom mt-6 overflow-hidden rounded-[18px] border border-white/10">
            <Image
              src="/media/office-photo-pexels-4385545.jpg"
              alt="Office discussion"
              width={900}
              height={520}
              className="h-auto w-full object-cover"
            />
          </div>
        </article>

        <article className="reveal-up rounded-[22px] border border-white/10 bg-[#09090b] p-6">
          <form className="grid gap-3 sm:grid-cols-2">
            <input placeholder="Name" className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500" />
            <input placeholder="Email" className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500" />
            <input placeholder="Profession" className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500" />
            <select className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white">
              <option>Employment Type</option>
            </select>
            <input placeholder="Years of experience" className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500" />
            <input placeholder="City / Portfolio" className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500" />
            <input placeholder="Skills in order" className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500 sm:col-span-2" />
            <label className="reveal-zoom sm:col-span-2 text-xs text-neutral-400">
              <input type="checkbox" className="mr-2 align-middle" /> By submitting, you agree to share your mail for hiring and marketing.
            </label>
            <button type="button" className="reveal-zoom sm:col-span-2 rounded-full bg-[#2f63ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3f72ff]">
              SUBMIT
            </button>
          </form>
        </article>
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
