import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import SiteFooter from '@/components/site-footer'

const industries = [
  {
    name: 'Finance',
    detail: 'Secure systems, trading platforms, and compliance-driven engineering teams.',
  },
  {
    name: 'Healthcare',
    detail: 'Data privacy, EHR integrations, and scalable care technology staffing.',
  },
  {
    name: 'Retail',
    detail: 'E-commerce, customer analytics, and omnichannel platform modernization.',
  },
  {
    name: 'Telecom',
    detail: 'Network systems, OSS/BSS modernization, and high-throughput data pipelines.',
  },
  {
    name: 'Technology',
    detail: 'Product engineering, cloud-native systems, and AI-ready development teams.',
  },
  {
    name: 'Insurance',
    detail: 'Claims automation, risk systems, and enterprise architecture delivery.',
  },
  {
    name: 'Government',
    detail: 'Mission-critical modernization with secure and compliant hiring operations.',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground subtle />

        <section className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-8 lg:px-20">
          <div className="glass-panel p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Industries We Serve</p>
            <h1 className="mt-2 text-4xl sm:text-5xl">Industry-focused IT talent strategy</h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              We align hiring strategy with domain realities, compliance requirements,
              and delivery timelines for each industry.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-16 sm:px-8 lg:px-20">
          <div className="glass-panel overflow-hidden py-8">
            <div className="marquee-track marquee-track-slow">
              {[...industries, ...industries].map((industry, idx) => (
                <article
                  key={`${industry.name}-${idx}`}
                  className="mx-3 min-w-[300px] rounded-xl border border-white/15 bg-black/30 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-secondary">Industry</p>
                  <h2 className="mt-2 font-display text-3xl uppercase tracking-[0.06em]">{industry.name}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{industry.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
