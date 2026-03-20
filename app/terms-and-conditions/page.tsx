import type { Metadata } from 'next'
import MarketingFooter from '@/components/marketing-footer'
import MarketingHeader from '@/components/marketing-header'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for using MAX IT Consulting LLC website and services.',
  path: '/terms-and-conditions',
  keywords: ['terms and conditions', 'MAX IT Consulting LLC', 'website terms', 'service terms'],
})

export default function TermsAndConditionsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040405] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[860px] bg-[radial-gradient(circle_at_14%_10%,rgba(235,58,69,0.3)_0%,rgba(235,58,69,0.08)_32%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.26)_0%,rgba(47,99,255,0.08)_40%,transparent_62%)]"
      />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1040px] px-6 pb-16 pt-36">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#ea3a45]">Legal</p>
        <h1 className="hero-title-animated mt-2 font-display text-6xl tracking-tight sm:text-7xl">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-xl text-neutral-300">
          Effective date: March 19, 2026
        </p>

        <div className="mt-8 space-y-6 rounded-[24px] border border-white/10 bg-[#09090b] p-7 text-neutral-300">
          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you agree to these Terms and Conditions and all applicable laws.
              If you do not agree, please do not use this website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">2. Use of Website</h2>
            <p>
              You agree to use the website only for lawful purposes related to recruitment, staffing, and business
              inquiries. You must not attempt to disrupt, abuse, or gain unauthorized access to systems or data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">3. Recruitment and Hiring Information</h2>
            <p>
              Job and hiring information provided on the website is for general informational purposes. MAX IT
              CONSULTING LLC does not guarantee job placement, interview selection, or hiring outcomes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">4. Intellectual Property</h2>
            <p>
              Website content, brand assets, and visual materials are owned by or licensed to MAX IT CONSULTING LLC.
              You may not copy, distribute, or reuse content without prior written permission.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, MAX IT CONSULTING LLC is not liable for indirect, incidental, or
              consequential damages arising from use of this website or reliance on website content.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">6. Changes to Terms</h2>
            <p>
              We may update these Terms and Conditions at any time. Continued use of the website after updates means
              you accept the revised terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">7. Contact</h2>
            <p>
              For questions regarding these terms, contact info@maxitconsultingllc.com.
            </p>
          </section>
        </div>
      </section>

      <MarketingFooter />
    </main>
  )
}
