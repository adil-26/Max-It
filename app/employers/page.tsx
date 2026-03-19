import Image from 'next/image'
import Link from 'next/link'
import MarketingHeader from '@/components/marketing-header'
import MarketingFooter from '@/components/marketing-footer'

const talentCards = [
  { slug: 'jon-bell', name: 'Jon Bell', role: 'Product Designer' },
  { slug: 'eniola-bakare', name: 'Eniola Bakare', role: 'QA Tester' },
  { slug: 'sarah-maplas', name: 'Sarah Maplas', role: 'Software Developer' },
]

export default function EmployersPage() {
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
              Hire your next
              <br />
              talented employees.
            </h1>
            <p className="mt-5 max-w-3xl text-2xl leading-relaxed text-neutral-300">
              Select from our pool of skilled talent, each of which we qualify before listing on our platform.
            </p>
          </div>
          <div className="flex items-center justify-start gap-3 xl:justify-end">
            <Link href="/hiring" className="rounded-xl bg-[#2f63ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3f72ff]">
              View talent
            </Link>
            <Link href="/contact" className="rounded-xl border border-[#ea3a45]/45 bg-[#ea3a45]/15 px-6 py-3 text-sm font-semibold text-white hover:bg-[#ea3a45]/22">
              Post a role
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-6">
        <div className="reveal-up flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">TALENT</p>
            <h2 className="mt-2 font-display text-6xl tracking-tight">Search for your next employee.</h2>
          </div>
          <div className="reveal-zoom flex h-12 w-full items-center rounded-full border border-white/10 bg-white/5 px-5 text-lg text-neutral-500 md:w-[420px]">
            Search by person&apos;s name
            <span className="ml-auto text-neutral-400">⌕</span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {talentCards.map((item, idx) => (
            <article
              key={item.name}
              className="reveal-tilt rounded-[18px] border border-white/10 bg-[#09090b] p-5 text-center"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <Image src="/placeholder-user.jpg" alt={item.name} width={90} height={90} className="mx-auto rounded-full object-cover" />
              <p className="mt-3 text-3xl font-semibold">{item.name}</p>
              <p className="mt-1 text-lg text-neutral-400">{item.role}</p>
              <Link href={`/profiles/${item.slug}`} className="mt-5 block rounded-xl bg-gradient-to-r from-[#ea3a45] to-[#2f63ff] px-4 py-3 text-sm font-semibold text-white">
                View profile
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1240px] gap-8 px-6 py-12 lg:grid-cols-[1fr_1fr]">
        <article className="reveal-up">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">JOIN TALENTIFY</p>
          <h2 className="mt-2 font-display text-6xl leading-[0.95] tracking-tight">List your active roles.</h2>
          <p className="mt-4 max-w-xl text-2xl text-neutral-300">
            Receive qualified professionals applying for your vacancies and join your thriving team.
          </p>
          <div className="reveal-zoom mt-6 overflow-hidden rounded-[18px] border border-white/10">
            <video
              className="h-[300px] w-full object-cover"
              src="/media/office-video-7792461.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </article>

        <article className="reveal-up rounded-[22px] border border-white/10 bg-[#09090b] p-6">
          <h3 className="font-display text-5xl tracking-tight">Company details</h3>
          <form className="mt-4 grid gap-3">
            <input placeholder="Company name" className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500" />
            <input placeholder="Name" className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500" />
            <input placeholder="Website" className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500" />
            <input placeholder="Phone no." className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500" />
            <input placeholder="Email" className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500" />

            <h3 className="mt-3 font-display text-5xl tracking-tight">Role details</h3>
            <input placeholder="Job Name (Developer)" className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500" />
            <select className="reveal-zoom h-11 rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white">
              <option>Employment Type</option>
            </select>
            <textarea rows={4} placeholder="Description" className="reveal-zoom rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-500" />
            <label className="reveal-zoom text-xs text-neutral-400">
              <input type="checkbox" className="mr-2 align-middle" /> By submitting, you agree to share your mail for hiring and marketing.
            </label>
            <button type="button" className="reveal-zoom rounded-full bg-[#2f63ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3f72ff]">
              SUBMIT
            </button>
          </form>
        </article>
      </section>

      <MarketingFooter />
    </main>
  )
}
