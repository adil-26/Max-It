import Link from 'next/link'
import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import SiteFooter from '@/components/site-footer'
import { Button } from '@/components/ui/button'

const categories = [
  'Software Development',
  'Cloud Engineering',
  'Cybersecurity',
  'Data Science',
  'DevOps',
  'Infrastructure',
]

const tips = [
  'Keep your resume focused on impact and outcomes.',
  'Highlight production cloud and architecture experience.',
  'Prepare practical examples for technical interviews.',
]

export default function CandidatesPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground subtle />

        <section className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-8 lg:px-20">
          <div className="glass-panel p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Candidates</p>
            <h1 className="mt-2 text-4xl sm:text-5xl">Find Your Dream IT Job</h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Connect with top employers and discover opportunities across cloud, software,
              cybersecurity, data, and enterprise platforms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/jobs">
                <Button className="font-display uppercase tracking-[0.12em]">Browse Jobs</Button>
              </Link>
              <Button variant="outline" className="font-display uppercase tracking-[0.12em]">
                Upload Resume
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1440px] gap-6 px-4 py-8 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-20">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-secondary">Job Categories</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {categories.map((category) => (
                <div key={category} className="rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-sm uppercase tracking-[0.1em]">
                  {category}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-secondary">Career Tips</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
