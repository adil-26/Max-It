import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import { Button } from '@/components/ui/button'
import SiteFooter from '@/components/site-footer'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'About Max IT Consulting LLC',
  description:
    'Learn about Max IT Consulting LLC, our mission, and how we deliver high-quality IT staffing and consulting solutions for US businesses.',
  path: '/about',
  keywords: ['about Max IT Consulting', 'IT recruiting partner', 'technology staffing agency'],
})

const values = [
  {
    name: 'Integrity',
    text: 'Transparent communication, ethical recruiting, and reliable partnership decisions.',
  },
  {
    name: 'Speed with Quality',
    text: 'Fast submission cycles without compromising technical alignment and fit.',
  },
  {
    name: 'Technical Depth',
    text: 'Domain-specific sourcing for software, cloud, cybersecurity, data, and enterprise systems.',
  },
  {
    name: 'Long-Term Partnership',
    text: 'Hiring strategies focused on retention, team continuity, and delivery outcomes.',
  },
]

const operatingModel = [
  'Intake and role calibration with hiring managers',
  'Targeted sourcing and pre-screening',
  'Technical validation and structured shortlisting',
  'Interview coordination and offer support',
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground />

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
          <div className="glass-panel reveal-up p-7 sm:p-12">
            <p className="text-xs uppercase tracking-[0.24em] text-primary">About Max IT Consulting LLC</p>
            <h1 className="gradient-title mt-4 text-4xl leading-tight sm:text-5xl">
              We build modern workforce pipelines for technology teams
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Max IT Consulting LLC is a US-based IT staffing and consulting partner helping organizations
              hire skilled technology professionals and helping candidates move into high-impact roles.
            </p>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-6 md:grid-cols-2">
          <article className="glass-panel reveal-up p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">Mission</p>
            <h2 className="mt-2 text-3xl">Deliver exceptional technology talent to every client engagement</h2>
            <p className="mt-4 text-muted-foreground">
              Our mission is to reduce hiring friction and accelerate delivery by connecting organizations with
              vetted IT professionals who can contribute from day one.
            </p>
          </article>

          <article className="glass-panel reveal-up delay-1 p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-secondary">Vision</p>
            <h2 className="mt-2 text-3xl">Become the most trusted IT talent partner in the US market</h2>
            <p className="mt-4 text-muted-foreground">
              We aim to set the standard for modern staffing through speed, technical accuracy, and consistent
              candidate quality across industries.
            </p>
          </article>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Core Values</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">How we operate every day</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value, index) => (
              <article
                key={value.name}
                className="glass-panel reveal-up p-6"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="font-display text-xl uppercase tracking-[0.1em] text-primary">{value.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-8">
          <div className="glass-panel p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Operating Model</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Structured recruitment flow from intake to onboarding</h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {operatingModel.map((step, index) => (
                <div
                  key={step}
                  className="rounded-lg border border-white/15 bg-black/20 px-4 py-3 text-sm uppercase tracking-[0.08em] text-foreground"
                >
                  {index + 1}. {step}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="glass-panel p-7 sm:p-10">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Work With Us</p>
                <h2 className="mt-2 text-3xl sm:text-4xl">Scale your team with confidence</h2>
                <p className="mt-4 text-muted-foreground">
                  Whether you are hiring software engineers, cloud specialists, or security experts,
                  our team can support rapid and reliable talent delivery.
                </p>
              </div>

              <div className="space-y-3">
                <Link href="/jobs" className="block">
                  <Button className="w-full font-display uppercase tracking-[0.12em]">View Open Roles</Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full font-display uppercase tracking-[0.12em]">
                    Contact Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
