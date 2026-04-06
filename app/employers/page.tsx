import Link from 'next/link'
import AnimatedAccentOrbs from '@/components/animated-accent-orbs'
import MarketingHeader from '@/components/marketing-header'
import MarketingFooter from '@/components/marketing-footer'
import MotionCard from '@/components/motion-card'

const mncPath = [
  {
    step: '01',
    title: 'AI-Database Filtering',
    description:
      'Role intelligence filters run across our 50,000+ candidate database to generate precise longlists by skill, certifications, industry relevance, and availability.',
    outcomes: [
      'Role-to-skill matrix alignment',
      'Experience and stack compatibility scoring',
      'Fast parallel-pipeline generation',
    ],
  },
  {
    step: '02',
    title: 'Peer-to-Peer Technical Testing',
    description:
      'Domain practitioners evaluate shortlisted candidates through structured technical assessments and practical scenario validation before client submission.',
    outcomes: [
      'Hands-on technical capability checks',
      'Collaboration and communication validation',
      'Only top 3% candidate submissions',
    ],
  },
  {
    step: '03',
    title: 'Enterprise Compliance Verification',
    description:
      'Final candidates are processed through enterprise background, legal, and security checkpoints aligned to MNC governance requirements.',
    outcomes: [
      'Identity and background verification workflows',
      'Compliance evidence and audit-ready packaging',
      'Offer readiness aligned to enterprise policy',
    ],
  },
]

const processBenefits = [
  'Reduced time-to-hire without sacrificing quality',
  'Lower technical mismatch risk in final interviews',
  'Stronger onboarding readiness for enterprise controls',
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
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[920px] bg-[radial-gradient(circle_at_12%_12%,rgba(234,58,69,0.33)_0%,rgba(234,58,69,0.08)_34%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.28)_0%,rgba(47,99,255,0.08)_38%,transparent_62%)]"
      />
      <AnimatedAccentOrbs />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-12 pt-24 sm:pt-28">
        <div className="grid items-start gap-7 xl:grid-cols-[minmax(0,1fr)_500px]">
          <div className="max-w-5xl">
            <p className="inline-flex rounded-full border border-[#2f63ff]/60 bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
              Owner-Led Hiring Framework
            </p>
            <h1 className="hero-title-animated mt-6 font-display text-6xl leading-[0.92] tracking-tight sm:text-8xl">
              A personalized hiring process
              <br />
              built for enterprise outcomes.
            </h1>
            <p className="mt-5 max-w-4xl text-xl leading-relaxed text-neutral-300">
              Watch how our owner-led team runs AI shortlisting, technical validation, and compliance checkpoints to
              deliver hiring decisions faster without lowering standards.
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
                Hiring process walk-through and personalized delivery approach.
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
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2f63ff]">Delivery Confidence</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            From role intake to compliant onboarding,
            <br />
            one accountable partner.
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
              Explore Role Domains
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

      <MarketingFooter />
    </main>
  )
}
