import Link from 'next/link'
import AnimatedAccentOrbs from '@/components/animated-accent-orbs'
import MarketingHeader from '@/components/marketing-header'
import MarketingFooter from '@/components/marketing-footer'
import MotionCard from '@/components/motion-card'

const highImpactDomains = [
  {
    title: 'Cloud / DevOps',
    focus: 'Cloud architecture, DevSecOps, platform engineering, SRE, and release automation for production-grade systems.',
    roles: [
      'Principal Cloud Architect (AWS/Azure/GCP)',
      'Lead DevOps Engineer',
      'Site Reliability Engineer',
      'Platform Automation Engineer',
    ],
  },
  {
    title: 'AI / Data Science',
    focus: 'Applied AI, machine learning, MLOps, and analytics modernization for enterprise decision velocity.',
    roles: [
      'AI/ML Engineer',
      'Senior Data Scientist',
      'MLOps Engineer',
      'Data Platform Engineer',
    ],
  },
  {
    title: 'Cybersecurity',
    focus: 'Security architecture, SOC operations, governance controls, and cloud security hardening for regulated enterprises.',
    roles: [
      'Cybersecurity Architect',
      'Cloud Security Engineer',
      'Security Operations Lead',
      'GRC & Compliance Specialist',
    ],
  },
  {
    title: 'Enterprise ERP (SAP/Oracle)',
    focus: 'ERP transformation, integration strategy, and operational continuity across SAP and Oracle ecosystems.',
    roles: [
      'SAP S/4HANA Functional Consultant',
      'SAP ABAP Technical Lead',
      'Oracle Cloud ERP Consultant',
      'ERP Integration Specialist',
    ],
  },
]

export default function JobsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[920px] bg-[radial-gradient(circle_at_12%_12%,rgba(234,58,69,0.33)_0%,rgba(234,58,69,0.08)_34%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.28)_0%,rgba(47,99,255,0.08)_38%,transparent_62%)]"
      />
      <AnimatedAccentOrbs />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-12 pt-36">
        <div className="max-w-5xl">
          <p className="inline-flex rounded-full border border-[#2f63ff]/60 bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            Enterprise Roles
          </p>
          <h1 className="hero-title-animated mt-6 font-display text-6xl leading-[0.92] tracking-tight sm:text-8xl">
            High-Impact Domains
            <br />
            for enterprise delivery.
          </h1>
          <p className="mt-5 max-w-4xl text-xl leading-relaxed text-neutral-300">
            Our 50,000+ candidate ecosystem is categorized by domain depth so hiring leaders can activate quality
            pipelines quickly for critical IT initiatives.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <div className="grid gap-4 md:grid-cols-2">
          {highImpactDomains.map((domain, idx) => (
            <MotionCard
              key={domain.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-white/10 bg-[#07090f] p-6"
            >
              <h2 className="font-display text-4xl leading-tight">{domain.title}</h2>
              <p className="mt-3 text-lg text-neutral-300">{domain.focus}</p>
              <div className="mt-5 space-y-2">
                {domain.roles.map((role, roleIdx) => (
                  <MotionCard
                    key={role}
                    delay={roleIdx * 0.04}
                    className="rounded-lg border border-white/10 bg-black/45 px-3 py-2 text-sm text-neutral-200"
                  >
                    {role}
                  </MotionCard>
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16 pt-8">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d] px-6 py-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f63ff]">Role Activation</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            Share role clusters.
            <br />
            Receive top 3% shortlists.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
            Submit your hiring priorities and our team will map domain-specific talent pipelines with transparent
            turnaround timelines and enterprise-ready documentation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/hiring"
              className="rounded-xl bg-[#2f63ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3f72ff]"
            >
              Review Hiring Process
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-[#ea3a45]/45 bg-[#ea3a45]/15 px-6 py-3 text-sm font-semibold text-white hover:bg-[#ea3a45]/22"
            >
              Request Capability Audit
            </Link>
          </div>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
