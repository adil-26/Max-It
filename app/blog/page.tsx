import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import SiteFooter from '@/components/site-footer'

const posts = [
  {
    title: 'How US Enterprises Build AI-Ready Engineering Teams',
    category: 'Staffing Strategy',
  },
  {
    title: 'Cloud Hiring Trends: Skills in Demand for 2026',
    category: 'Cloud',
  },
  {
    title: 'Interviewing Cybersecurity Talent Effectively',
    category: 'Cybersecurity',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground subtle />

        <section className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-8 lg:px-20">
          <div className="glass-panel p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Blog</p>
            <h1 className="mt-2 text-4xl sm:text-5xl">Insights for hiring and technology leadership</h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Practical guides on IT staffing, consulting, and workforce strategy for modern enterprises.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-16 sm:px-8 lg:px-20">
          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((post, idx) => (
              <article key={post.title} className="glass-panel reveal-up p-6" style={{ animationDelay: `${idx * 90}ms` }}>
                <p className="text-xs uppercase tracking-[0.16em] text-secondary">{post.category}</p>
                <h2 className="mt-2 font-display text-2xl uppercase tracking-[0.06em]">{post.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">Read more</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
