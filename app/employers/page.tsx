import Link from 'next/link'
import AnimatedAccentOrbs from '@/components/animated-accent-orbs'
import MarketingHeader from '@/components/marketing-header'
import MarketingFooter from '@/components/marketing-footer'
import MotionCard from '@/components/motion-card'

const mncPath = [
  {
    step: '01',
    title: 'Discovery Call (Day 1)',
    description:
      'We run a focused discovery session to understand role scope, technical requirements, hiring timeline, team structure, and budget context.',
    outcomes: [
      '30-minute intake with hiring stakeholders',
      'Role brief + priorities documented',
      'No-cost consultation to align expectations',
    ],
  },
  {
    step: '02',
    title: 'Requirements Brief (Day 1-2)',
    description:
      'We finalize mandatory skills, optional skills, compensation range, engagement model, and location requirements before sourcing starts.',
    outcomes: [
      'Approval-ready role documentation',
      'Clear must-have vs nice-to-have criteria',
      'Aligned interview expectations',
    ],
  },
  {
    step: '03',
    title: 'Talent Search & Sourcing (Day 2-4)',
    description:
      'Our recruiters activate US, UAE, and India pipelines using direct outreach, referrals, LinkedIn sourcing, and internal candidate intelligence.',
    outcomes: [
      'Proactive talent outreach',
      'Parallel sourcing pipelines',
      'Role-matched longlist generation',
    ],
  },
  {
    step: '04',
    title: 'Screening & Vetting (Day 3-5)',
    description:
      'Every candidate is evaluated through technical checks, recruiter behavioral screening, background verification, references, and compliance checks.',
    outcomes: [
      '5-point vetting methodology',
      'Only qualified profiles proceed',
      'Compliance-ready candidate packaging',
    ],
  },
  {
    step: '05',
    title: 'Client Interviews (Day 5-7)',
    description:
      'You receive 3-5 pre-vetted candidates with recruiter notes. We coordinate interviews, manage feedback loops, and keep candidates engaged.',
    outcomes: [
      'First shortlist in 48-72 hours',
      'Structured interview scheduling',
      'Fast feedback and iteration support',
    ],
  },
  {
    step: '06',
    title: 'Placement & Onboarding (Day 7+)',
    description:
      'Once selected, we drive offer coordination, onboarding paperwork, and post-placement support to ensure smooth integration and delivery continuity.',
    outcomes: [
      'Offer and joining coordination',
      'Contractor payroll/compliance support',
      'Post-placement follow-up',
    ],
  },
]

const processBenefits = [
  'First candidate submission: 48-72 hours for most enterprise roles',
  'Shortlist depth: 3-5 pre-vetted, interview-ready candidates per role',
  'Client response SLA: within 4 business hours',
  'Replacement coverage: free replacement within 30 days',
  'Background checks: 3-5 business days, with 24-hour expedited option',
]

const vettingStages = [
  {
    title: '1. Technical Assessment',
    check:
      'Role-specific technical test or live coding, architecture review, or practical case study based on role seniority.',
  },
  {
    title: '2. Recruiter Interview',
    check:
      'Structured 30-45 minute conversation assessing communication, collaboration, problem-solving, and role alignment.',
  },
  {
    title: '3. Background Verification',
    check: 'Employment verification, education checks, identity validation, and security screening where required.',
  },
  {
    title: '4. Reference Check',
    check:
      'At least two professional references reviewed with structured performance and reliability validation questions.',
  },
  {
    title: '5. Compliance & Work Authorization',
    check: 'US W2/C2C/H1B and I-9 checks, plus local labor-law compliance for UAE and India placements.',
  },
]

const engagementModels = [
  {
    title: 'Contract Staffing',
    details:
      'Consultants are engaged for a defined period while remaining on MAX IT payroll. We handle taxes, payroll, benefits, and compliance.',
  },
  {
    title: 'Contract-to-Hire',
    details:
      'Start as contract and convert to full-time after evaluation. Ideal where on-the-job fit confirmation is important.',
  },
  {
    title: 'Direct Hire / Permanent',
    details:
      'Full-cycle recruitment for permanent positions with shortlist management, offer coordination, and replacement support.',
  },
  {
    title: 'Staff Augmentation',
    details:
      'Embed one or more consultants into your team and scale up or down based on project phases and capacity demand.',
  },
]

const hiringHeroPhotos = [
  {
    src: '/media/hiring-hero-photo-1.jpg',
    alt: 'Interview candidate presenting documents across a glass meeting table.',
  },
  {
    src: '/media/hiring-hero-photo-2.jpg',
    alt: 'Candidate and hiring manager reviewing role expectations in an interview room.',
  },
  {
    src: '/media/hiring-hero-photo-3.jpg',
    alt: 'Professional interview discussion between a hiring lead and candidate.',
  },
]

export default function EmployersPage() {
  return (
    <main className="marketing-light relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[920px] bg-[radial-gradient(circle_at_12%_12%,rgba(234,58,69,0.33)_0%,rgba(234,58,69,0.08)_34%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.28)_0%,rgba(47,99,255,0.08)_38%,transparent_62%)]"
      />
      <AnimatedAccentOrbs />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-10 pt-20 sm:pt-24">
        <div className="grid items-start gap-7 xl:grid-cols-[minmax(0,1fr)_500px]">
          <div className="max-w-5xl">
            <p className="inline-flex rounded-full border border-[#2f63ff]/60 bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
              Enterprise Hiring Process
            </p>
            <h1 className="hero-title-animated mt-5 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
              Our Enterprise Hiring Process
            </h1>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-neutral-300">
              We combine speed with precision. From intake to onboarding, this is exactly how MAX IT delivers
              enterprise hiring outcomes with lower risk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-[#2f63ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3f72ff]"
              >
                Book Hiring Strategy Call
              </Link>
              <Link
                href="/roles"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Explore Role Domains
              </Link>
            </div>
          </div>

          <MotionCard className="overflow-hidden rounded-[24px] border border-white/12 bg-[#06080d]/90">
            <div className="border-b border-white/10 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8fb1ff]">Founder Video</p>
              <p className="mt-1 text-sm text-neutral-300">
                Executive walk-through of our hiring process and delivery model.
              </p>
            </div>
            <div className="px-4 pb-3 pt-4 sm:px-6">
              <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-black/45">
                <div className="relative aspect-[9/16]">
                  <video
                    className="h-full w-full object-contain"
                    src="/media/hiring-owner-message-portrait.mp4"
                    controls
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 p-4 pt-2">
              {hiringHeroPhotos.map((photo) => (
                <div key={photo.src} className="overflow-hidden rounded-lg border border-white/10 bg-black/35">
                  <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
            <p className="px-4 pb-4 text-[11px] text-neutral-400">
              Photos sourced from Wikimedia Commons (amtec_photos, CC BY-SA 2.0). Player controls hide download.
            </p>
          </MotionCard>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {mncPath.map((item, idx) => (
            <MotionCard
              key={item.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-white/10 bg-[#07090f] p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f63ff]">Step {item.step}</p>
              <h2 className="mt-2 font-display text-4xl leading-tight">{item.title}</h2>
              <p className="mt-3 text-base text-neutral-300">{item.description}</p>
              <div className="mt-5 space-y-2">
                {item.outcomes.map((outcome, outcomeIdx) => (
                  <MotionCard
                    key={outcome}
                    delay={outcomeIdx * 0.04}
                    className="rounded-lg border border-white/10 bg-black/45 px-3 py-2 text-sm text-neutral-200"
                  >
                    {outcome}
                  </MotionCard>
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16 pt-8">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d] px-6 py-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f63ff]">SLA Commitments</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            Operational standards
            <br />
            you can plan around.
          </h2>
          <div className="mx-auto mt-5 max-w-3xl space-y-2">
            {processBenefits.map((benefit, idx) => (
              <MotionCard
                key={benefit}
                delay={idx * 0.06}
                className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-neutral-200"
              >
                {benefit}
              </MotionCard>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/roles"
              className="rounded-xl bg-[#2f63ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3f72ff]"
            >
              Explore Enterprise Roles
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-[#ea3a45]/45 bg-[#ea3a45]/15 px-6 py-3 text-sm font-semibold text-white hover:bg-[#ea3a45]/22"
            >
              Request Talent Capability Audit
            </Link>
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 py-6">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f63ff]">
            5-Point Candidate Vetting Methodology
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {vettingStages.map((stage, idx) => (
              <MotionCard
                key={stage.title}
                delay={idx * 0.06}
                className="rounded-xl border border-white/10 bg-black/45 p-4"
              >
                <h3 className="font-display text-2xl leading-tight">{stage.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{stage.check}</p>
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-16 pt-6">
        <MotionCard className="rounded-[24px] border border-white/12 bg-[#06080d] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f63ff]">Engagement Models</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {engagementModels.map((model, idx) => (
              <MotionCard
                key={model.title}
                delay={idx * 0.05}
                className="rounded-xl border border-white/10 bg-black/45 p-4"
              >
                <h3 className="font-display text-2xl leading-tight">{model.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{model.details}</p>
              </MotionCard>
            ))}
          </div>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
