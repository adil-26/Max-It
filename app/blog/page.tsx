import Link from 'next/link'
import MarketingHeader from '@/components/marketing-header'
import MarketingFooter from '@/components/marketing-footer'

const posts = [
  {
    title: 'Top 10 remote tech skills employers are looking for in 2025.',
    date: 'JAN 13, 2025',
    media: 'image',
    src: '/media/office-photo-pexels-4385545.jpg',
  },
  {
    title: 'How to ace your remote tech job interview.',
    date: 'JAN 10, 2025',
    media: 'video',
    src: '/media/office-video-7792304.mp4',
  },
  {
    title: 'The future of remote work: trends every tech professional should know.',
    date: 'NOV 15, 2024',
    media: 'video',
    src: '/media/office-video-7792192.mp4',
  },
  {
    title: 'Building a strong tech portfolio: Tips for standing out.',
    date: 'OCT 10, 2024',
    media: 'video',
    src: '/media/office-video-7792461.mp4',
  },
  {
    title: '5 must-have tools for remote developers.',
    date: 'SEP 26, 2024',
    media: 'image',
    src: '/placeholder.jpg',
  },
  {
    title: 'How to stay productive while working remotely in tech.',
    date: 'SEP 17, 2024',
    media: 'image',
    src: '/placeholder.jpg',
  },
]

export default function BlogPage() {
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
            <h1 className="hero-title-animated max-w-4xl font-display text-7xl leading-[0.9] tracking-tight">
              Insights, trends, and
              <br />
              career tips in tech.
            </h1>
            <p className="mt-5 max-w-4xl text-2xl leading-relaxed text-neutral-300">
              Stay updated with the latest news, industry trends, and expert advice to help you navigate the world of remote tech careers.
            </p>
          </div>
          <div className="flex justify-start xl:justify-end">
            <Link href="/blog" className="rounded-xl bg-gradient-to-r from-[#ea3a45] to-[#2f63ff] px-6 py-3 text-sm font-semibold text-white hover:from-[#ff4c58] hover:to-[#3f72ff]">
              View blog
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
