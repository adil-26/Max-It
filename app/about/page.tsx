import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import { Button } from '@/components/ui/button'
import SiteFooter from '@/components/site-footer'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'About MAX IT Consulting LLC',
  description:
    'MAX IT Consulting LLC is a New Jersey-based IT staffing and consulting company established in 2008.',
  path: '/about',
  keywords: ['MAX IT Consulting LLC', 'IT staffing New Jersey', 'IT consulting company'],
})

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground />

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-16">
          <div className="glass-panel reveal-up p-7 sm:p-12">
            <p className="text-xs uppercase tracking-[0.24em] text-primary">About MAX IT Consulting LLC</p>
            <h1 className="gradient-title mt-4 text-4xl leading-tight sm:text-5xl">
              Trusted IT staffing and consulting partner since 2008
            </h1>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              MAX IT Consulting LLC is a New Jersey-based IT staffing and consulting company established in
              2008. We specialize in providing highly skilled IT professionals to organizations across
              various industries. With years of experience in the staffing industry, we focus on delivering
              the right talent to help businesses achieve their goals efficiently.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground">
              Our team is committed to identifying top-quality candidates and matching them with the right
              opportunities. With a strong recruitment process and industry expertise, we maintain a high
              success rate in fulfilling client requirements.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground">
              At MAX IT Consulting LLC, we believe that the right talent drives business growth. Our mission
              is to support companies in building strong teams by providing reliable, skilled, and experienced
              professionals who contribute to long-term success.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground">
              We help businesses grow by connecting them with the right talent at the right time.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-14">
          <div className="glass-panel p-7 sm:p-10">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Connect With MAX IT</p>
                <h2 className="mt-2 text-3xl sm:text-4xl">Build your team with the right IT professionals</h2>
                <p className="mt-4 text-muted-foreground">
                  Partner with us for reliable staffing support, industry-focused recruiting, and a delivery
                  model built for long-term success.
                </p>
              </div>

              <div className="space-y-3">
                <Link href="/contact" className="block">
                  <Button className="w-full font-display uppercase tracking-[0.12em]">Contact Team</Button>
                </Link>
                <a
                  href="https://www.linkedin.com/groups/17949004/"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full font-display uppercase tracking-[0.12em]">
                    LinkedIn Group
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
