import type { Metadata } from 'next'
import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import SiteFooter from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Hire Skilled IT Professionals',
  description:
    'Partner with Max IT Consulting LLC to hire software engineers, cloud specialists, and cybersecurity talent with faster time-to-hire.',
  path: '/employers',
  keywords: ['hire IT professionals', 'IT staffing for employers', 'technology recruiting services'],
})

const process = [
  'Requirement discovery and role calibration',
  'Targeted candidate sourcing',
  'Technical and communication screening',
  'Interview scheduling and feedback loop',
  'Offer support and onboarding transition',
]

const benefits = [
  'Faster hiring cycles',
  'Access to specialized skill sets',
  'Reduced recruitment overhead',
  'Nationwide consultant network',
]

export default function EmployersPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground subtle />

        <section className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-8 lg:px-20">
          <div className="glass-panel p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Employers</p>
            <h1 className="mt-2 text-4xl sm:text-5xl">Hire Skilled IT Professionals</h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Partner with Max IT Consulting LLC to scale your technology team with precision and speed.
            </p>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1440px] gap-6 px-4 py-8 sm:px-8 lg:grid-cols-2 lg:px-20">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-secondary">Our Hiring Process</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {process.map((step, idx) => (
                <li key={step}>{idx + 1}. {step}</li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-secondary">Benefits</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-16 pt-8 sm:px-8 lg:px-20">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-primary">Submit Requirement</p>
            <h2 className="mt-2 text-3xl">Tell us what talent you need</h2>

            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <Input placeholder="Company Name" className="border-white/20 bg-black/25" />
              <Input placeholder="Work Email" className="border-white/20 bg-black/25" />
              <Input placeholder="Hiring Role" className="border-white/20 bg-black/25" />
              <Input placeholder="Location" className="border-white/20 bg-black/25" />
              <textarea
                placeholder="Project details and hiring requirements"
                rows={5}
                className="md:col-span-2 w-full rounded-md border border-white/20 bg-black/25 px-3 py-2 text-sm text-foreground"
              />
              <Button className="md:col-span-2 font-display uppercase tracking-[0.12em]">Submit Requirement</Button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
