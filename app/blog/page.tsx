import Link from 'next/link'
import MarketingHeader from '@/components/marketing-header'
import MarketingFooter from '@/components/marketing-footer'

const posts = [
  {
    title: 'The 2026 IT Hiring Market: What Enterprise CTOs Need to Know',
    date: 'APR 02, 2026',
    media: 'image',
    src: '/media/office-photo-pexels-4385545.jpg',
  },
  {
    title: 'How to Hire a Cloud Engineer in 2026: Skills, Salary, and Red Flags',
    date: 'MAR 24, 2026',
    media: 'video',
    src: '/media/office-video-7792304.mp4',
  },
  {
    title: 'Staff Augmentation vs Direct Hire: Which Model Fits Your IT Team',
    date: 'MAR 10, 2026',
    media: 'video',
    src: '/media/office-video-7792192.mp4',
  },
  {
    title: 'Top 10 Enterprise IT Roles in Highest Demand Across the US',
    date: 'FEB 27, 2026',
    media: 'video',
    src: '/media/office-video-7792461.mp4',
  },
  {
    title: 'What Is a Talent Capability Audit and Why It Improves Hiring',
    date: 'FEB 14, 2026',
    media: 'image',
    src: '/placeholder.jpg',
  },
  {
    title: 'Remote vs On-Site IT Teams in 2026: What the Data Shows',
    date: 'JAN 28, 2026',
    media: 'image',
    src: '/placeholder.jpg',
  },
]

export default function BlogPage() {
  return (
    <main className="marketing-light relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[860px] bg-[radial-gradient(circle_at_14%_10%,rgba(235,58,69,0.3)_0%,rgba(235,58,69,0.08)_32%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.26)_0%,rgba(47,99,255,0.08)_40%,transparent_62%)]"
      />

      <MarketingHeader />

      <section className="reveal-up mx-auto w-full max-w-[1240px] px-6 pb-10 pt-32 sm:pt-32">
        <div className="grid items-end gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="hero-title-animated max-w-4xl font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
              Hiring insights and
              <br />
              market intelligence.
            </h1>
            <p className="mt-5 max-w-4xl text-2xl leading-relaxed text-neutral-300">
              Practical content for enterprise hiring leaders, delivery managers, and technology professionals.
            </p>
          </div>
          <div className="flex justify-start xl:justify-end">
            <Link href="/contact" className="brand-cta-gradient rounded-xl px-6 py-3 text-sm font-semibold text-white">
              Request hiring guidance
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-6">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, idx) => (
            <article
              key={post.title}
              className="reveal-tilt overflow-hidden rounded-[16px] border border-white/10 bg-[#09090b]"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="relative h-56 w-full">
                {post.media === 'video' ? (
                  <video
                    className="h-full w-full object-cover"
                    src={post.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img src={post.src} alt={post.title} className="h-full w-full object-cover" />
                )}
              </div>
              <div className="p-4">
                <h2 className="font-display text-4xl leading-tight">{post.title}</h2>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-500">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <MarketingFooter />
    </main>
  )
}
