import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedAccentOrbs from '@/components/animated-accent-orbs'
import MarketingFooter from '@/components/marketing-footer'
import MarketingHeader from '@/components/marketing-header'
import MotionCard from '@/components/motion-card'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'IT Hiring Resources & Insights',
  description:
    'Explore IT hiring resources, guides, and insights from MAX IT Consulting LLC for enterprise leaders and technology professionals.',
  path: '/resources',
  keywords: [
    'IT hiring resources',
    'enterprise recruitment insights',
    'technology staffing guides',
    'talent capability audit',
  ],
})

const resourceTopics = [
  'The 2026 IT Hiring Market: What Enterprise CTOs Need to Know',
  'How to Hire a Cloud Engineer in 2026: Skills, Salary, and Red Flags',
  'Staff Augmentation vs Direct Hire: Which Model Is Right for Your IT Team?',
  'The H-1B Visa and US IT Staffing: What Employers Need to Know',
  'Top 10 IT Roles in Highest Demand Across the US in 2026',
  'How to Prepare for an IT Staffing Interview (Candidate Guide)',
  'What Is a Talent Capability Audit? And Why Every CTO Should Have One',
  'Remote vs On-Site IT Teams in 2026: What the Data Shows',
]

export default function ResourcesPage() {
  return (
    <main className="marketing-light relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[920px] bg-[radial-gradient(circle_at_14%_12%,rgba(234,58,69,0.28)_0%,rgba(234,58,69,0.08)_36%,transparent_60%),radial-gradient(circle_at_84%_18%,rgba(47,99,255,0.28)_0%,rgba(47,99,255,0.08)_40%,transparent_62%)]"
      />
      <AnimatedAccentOrbs />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-10 pt-24 sm:pt-28">
        <p className="inline-flex rounded-full border border-[#2f63ff]/60 bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
          IT Hiring Resources & Insights
        </p>
        <h1 className="hero-title-animated mt-5 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
          IT Hiring Resources & Insights
        </h1>
        <p className="mt-4 max-w-4xl text-lg text-neutral-300">
          Expert guides, market insights, and practical playbooks for IT hiring leaders and technology teams.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          {resourceTopics.map((topic, idx) => (
            <MotionCard key={topic} delay={idx * 0.06} className="rounded-2xl border border-white/10 bg-[#06080d] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">Resource Topic</p>
              <h2 className="mt-3 font-display text-3xl leading-tight">{topic}</h2>
              <p className="mt-2 text-sm text-neutral-300">
                Research-backed guidance from MAX IT. Request the latest edition or connect with our team for a focused brief.
              </p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16">
        <MotionCard className="rounded-2xl border border-white/12 bg-[#0a1d3f] p-6 text-center">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Need role-specific insights?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-neutral-300">
            Tell us your domain and hiring goals. We will share focused market guidance and talent recommendations for your team.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="brand-cta-gradient inline-flex rounded-xl px-6 py-3 text-sm font-semibold text-white"
            >
              Request a Free Audit
            </Link>
            <Link
              href="/blog"
              className="inline-flex rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Visit Blog Archive
            </Link>
          </div>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
