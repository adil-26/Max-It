import type { Metadata } from 'next'
import MarketingFooter from '@/components/marketing-footer'
import MarketingHeader from '@/components/marketing-header'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for MAX IT Consulting LLC website and recruitment services.',
  path: '/privacy-policy',
  keywords: ['privacy policy', 'MAX IT Consulting LLC', 'data protection', 'recruitment privacy'],
})

export default function PrivacyPolicyPage() {
  return (
    <main className="marketing-light relative min-h-screen overflow-hidden bg-[#040405] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[860px] bg-[radial-gradient(circle_at_14%_10%,rgba(235,58,69,0.3)_0%,rgba(235,58,69,0.08)_32%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.26)_0%,rgba(47,99,255,0.08)_40%,transparent_62%)]"
      />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1040px] px-6 pb-16 pt-32 sm:pt-32">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">Legal</p>
        <h1 className="hero-title-animated mt-2 font-display text-4xl tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-xl text-neutral-300">
          Effective date: March 19, 2026
        </p>

        <div className="mt-8 space-y-6 rounded-[24px] border border-white/10 bg-[#09090b] p-7 text-neutral-300">
          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">1. Information We Collect</h2>
            <p>
              MAX IT CONSULTING LLC may collect personal information you submit through contact forms, hiring forms,
              and direct communications. This may include your name, email address, phone number, resume, portfolio
              links, employment details, and company information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">2. How We Use Information</h2>
            <p>
              We use your information to respond to inquiries, support recruiting and staffing operations, match
              candidates with job opportunities, communicate updates, and improve our services and website experience.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">3. Data Sharing</h2>
            <p>
              We do not sell personal data. We may share relevant information with clients, hiring partners, or service
              providers only where necessary to provide recruitment and consulting services or to meet legal obligations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">4. Data Security</h2>
            <p>
              We apply reasonable technical and organizational safeguards to protect personal information against
              unauthorized access, disclosure, alteration, or loss.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">5. Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your personal information, subject to applicable law.
              To submit a request, contact us at info@maxitconsultingllc.com.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">6. SMS Consent and Messaging</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">SMS Consent</h3>
                <p>
                  We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages.
                </p>
                <p className="mt-2">
                  All of the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Opt-Out Process</h3>
                <p>
                  You may choose to stop receiving text messages from MAX IT Consulting LLC at any time.
                  To opt out, simply reply STOP or UNSUBSCRIBE to any text message you receive from us.
                  Once we receive your opt-out request, you will be immediately removed from our messaging list and will no longer receive SMS messages from us.
                  For assistance, reply HELP or contact us at info@maxitconsultingllc.com.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-3xl text-white">7. Contact</h2>
            <p>
              If you have privacy questions, contact: MAX IT CONSULTING LLC, 25 Oak Tavern Cir, Branchburg, NJ 08876,
              United States, info@maxitconsultingllc.com.
            </p>
          </section>
        </div>
      </section>

      <MarketingFooter />
    </main>
  )
}
