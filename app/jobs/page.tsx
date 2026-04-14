import Link from 'next/link'
import AnimatedAccentOrbs from '@/components/animated-accent-orbs'
import MarketingHeader from '@/components/marketing-header'
import MarketingFooter from '@/components/marketing-footer'
import MotionCard from '@/components/motion-card'

const highImpactDomains = [
  {
    title: 'Software Engineering',
    focus:
      'Backend, frontend, and full stack development roles for modern enterprise products and internal platforms.',
    roles: ['Backend Engineer', 'Frontend Engineer', 'Full Stack Developer', 'Software Architect'],
    skills: 'Java, Python, .NET, Node.js, React, Angular, Microservices',
  },
  {
    title: 'Cloud & DevOps',
    focus:
      'Cloud architecture, DevOps, and platform reliability roles that support high-availability enterprise delivery.',
    roles: ['Cloud Architect', 'DevOps Engineer', 'Site Reliability Engineer', 'Platform Engineer'],
    skills: 'AWS, Azure, GCP, Kubernetes, Docker, Terraform, CI/CD',
  },
  {
    title: 'Data & Analytics',
    focus: 'Data engineering, analytics, and machine learning talent to drive reporting, forecasting, and automation.',
    roles: ['Data Engineer', 'Data Scientist', 'BI Developer', 'ML Engineer'],
    skills: 'Python, Spark, SQL, Tableau, Power BI, Databricks, TensorFlow',
  },
  {
    title: 'Cybersecurity',
    focus:
      'Security specialists for SOC operations, risk management, IAM controls, and zero-trust enterprise programs.',
    roles: ['Security Analyst', 'Penetration Tester', 'SOC Specialist', 'Security Architect'],
    skills: 'SIEM, IAM, Zero Trust, CISSP, SOC 2, ISO 27001',
  },
  {
    title: 'Project & Program Management',
    focus: 'Delivery leadership roles across Agile and hybrid models for enterprise transformation initiatives.',
    roles: ['IT Project Manager', 'Scrum Master', 'PMO Lead', 'Program Manager'],
    skills: 'PMP, CSM, Agile, Jira, SAFe, Waterfall',
  },
  {
    title: 'ERP & Enterprise Systems',
    focus:
      'Domain talent across SAP, Oracle, Salesforce, and Dynamics ecosystems for implementation and optimization.',
    roles: ['SAP Consultant', 'Oracle Developer', 'Salesforce Admin', 'ERP Integration Specialist'],
    skills: 'SAP S/4HANA, Salesforce, Oracle, Dynamics 365',
  },
  {
    title: 'QA & Test Engineering',
    focus: 'Quality assurance and automation professionals for scalable and reliable release pipelines.',
    roles: ['QA Engineer', 'SDET', 'Test Architect', 'Automation Engineer'],
    skills: 'Selenium, Cypress, Playwright, JIRA, TestRail',
  },
  {
    title: 'IT Leadership',
    focus: 'Senior technology leadership for strategy, governance, organization scale, and transformation execution.',
    roles: ['CTO', 'CIO', 'VP Engineering', 'IT Director'],
    skills: 'Strategy, P&L, Team Building, Digital Transformation',
  },
]

const candidateBenefits = [
  'Access to exclusive roles not publicly advertised',
  'Resume refinement and interview coaching',
  'Transparent communication at every hiring stage',
  'W2 and Corp-to-Corp (C2C) engagement options',
  'Benefits support for eligible W2 consultants',
  'Career-path guidance from specialist recruiters',
]

const roleShowcase = [
  {
    title: 'Senior Cloud Engineer',
    location: 'New York, NY - Hybrid',
    type: 'Contract-to-Hire',
    duration: '6 months to permanent',
    skills: 'AWS, Kubernetes, Terraform, 5+ years',
    compensation: '$85 - $105/hr',
  },
  {
    title: 'Lead Data Engineer',
    location: 'Dallas, TX - Remote',
    type: 'Direct Hire',
    duration: 'Permanent',
    skills: 'Python, Spark, Databricks, SQL',
    compensation: '$165K - $190K',
  },
  {
    title: 'Cybersecurity Architect',
    location: 'New Jersey - On-site/Hybrid',
    type: 'Contract',
    duration: '12 months',
    skills: 'IAM, SIEM, Zero Trust, SOC2',
    compensation: '$90 - $120/hr',
  },
]

export default function JobsPage() {
  return (
    <main className="marketing-light relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[920px] bg-[radial-gradient(circle_at_12%_12%,rgba(234,58,69,0.33)_0%,rgba(234,58,69,0.08)_34%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.28)_0%,rgba(47,99,255,0.08)_38%,transparent_62%)]"
      />
      <AnimatedAccentOrbs />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-10 pt-32 sm:pt-28">
        <div className="max-w-5xl">
          <p className="inline-flex rounded-full border border-[#2f63ff]/60 bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            Enterprise IT Roles
          </p>
          <h1 className="hero-title-animated mt-5 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            Enterprise IT Roles
          </h1>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-neutral-300">
            Whether you are hiring or exploring your next move, we specialize in enterprise IT roles across core
            technology disciplines.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highImpactDomains.map((domain, idx) => (
            <MotionCard
              key={domain.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-white/10 bg-[#07090f] p-6"
            >
              <h2 className="font-display text-3xl leading-tight">{domain.title}</h2>
              <p className="mt-3 text-base text-neutral-300">{domain.focus}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.09em] text-[#8fb1ff]">{domain.skills}</p>
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

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-6 pt-4">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">Featured Role Snapshot</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {roleShowcase.map((role, idx) => (
              <MotionCard
                key={role.title}
                delay={idx * 0.06}
                className="rounded-xl border border-white/10 bg-black/45 p-4"
              >
                <h3 className="font-display text-2xl leading-tight">{role.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{role.location}</p>
                <p className="mt-1 text-sm text-neutral-300">{role.type}</p>
                <p className="mt-1 text-sm text-neutral-300">Duration: {role.duration}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#8fb1ff]">{role.skills}</p>
                <p className="mt-2 text-sm text-neutral-300">Rate / Salary: {role.compensation}</p>
                <div className="mt-4 flex gap-3">
                  <Link href="/contact" className="inline-flex text-sm font-semibold text-[#8fb1ff] hover:text-white">
                    Apply Now
                  </Link>
                  <button type="button" className="text-sm font-semibold text-neutral-300 hover:text-white">
                    Save Role
                  </button>
                </div>
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16 pt-8">
        <div className="grid gap-4 md:grid-cols-2">
          <MotionCard className="rounded-[24px] border border-[#2f63ff]/30 bg-[#0d1630] px-6 py-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">For Employers</p>
            <h2 className="mt-3 font-display text-4xl leading-tight">Need to Hire? We'll Find Your Next IT Star.</h2>
            <p className="mt-4 text-neutral-300">
              Submit your job brief and our specialized recruiters begin immediately. We typically deliver a shortlist
              of pre-screened candidates within 48-72 hours.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-xl bg-[#2f63ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3f72ff]"
            >
              Start Hiring
            </Link>
          </MotionCard>

          <MotionCard className="rounded-[24px] border border-[#e8a020]/35 bg-[#2f2209] px-6 py-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f1bd5b]">For Candidates</p>
            <h2 className="mt-3 font-display text-4xl leading-tight">Looking for Your Next IT Role? Let's Talk.</h2>
            <p className="mt-4 text-neutral-300">
              Submit your resume and one of our specialist recruiters will review it within 24 hours. We match
              professionals with enterprise roles aligned to skills, goals, and preferred work model.
            </p>
            <div className="mt-4 space-y-2">
              {candidateBenefits.map((benefit, idx) => (
                <p key={benefit} className="text-sm text-neutral-200">
                  {idx + 1}. {benefit}
                </p>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-xl border border-[#e8a020]/50 bg-[#e8a020]/18 px-6 py-3 text-sm font-semibold text-white hover:bg-[#e8a020]/26"
            >
              Submit Your Resume
            </Link>
          </MotionCard>
        </div>
      </section>

      <MarketingFooter />
    </main>
  )
}
