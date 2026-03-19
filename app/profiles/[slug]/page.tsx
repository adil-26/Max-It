import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import MarketingFooter from '@/components/marketing-footer'
import MarketingHeader from '@/components/marketing-header'
import { getProfileBySlug, teamProfiles } from '@/lib/profile-data'
import { createPageMetadata } from '@/lib/seo'

type ProfilePageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return teamProfiles.map((profile) => ({ slug: profile.slug }))
}

export function generateMetadata({ params }: ProfilePageProps): Metadata {
  const profile = getProfileBySlug(params.slug)

  if (!profile) {
    return createPageMetadata({
      title: 'Profile',
      description: 'Recruiter and candidate profile details.',
      path: `/profiles/${params.slug}`,
      noIndex: true,
    })
  }

  return createPageMetadata({
    title: `${profile.name} Profile`,
    description: `${profile.name} - ${profile.role} at MAX IT Consulting LLC.`,
    path: `/profiles/${profile.slug}`,
    keywords: [profile.name, profile.role, 'recruiter profile', 'candidate profile'],
  })
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const profile = getProfileBySlug(params.slug)

  if (!profile) {
    notFound()
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040405] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[860px] bg-[radial-gradient(circle_at_14%_10%,rgba(235,58,69,0.28)_0%,rgba(235,58,69,0.08)_36%,transparent_60%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.24)_0%,rgba(47,99,255,0.08)_40%,transparent_64%)]"
      />

      <MarketingHeader />

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-12 pt-36">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <article className="reveal-zoom rounded-[22px] border border-white/10 bg-[linear-gradient(165deg,#131b2f_0%,#0c0e14_48%,#231319_100%)] p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder-user.jpg"
                alt={profile.name}
                width={84}
                height={84}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-3xl font-semibold">{profile.name}</p>
                <p className="text-lg text-neutral-300">{profile.role}</p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs uppercase tracking-[0.08em] text-neutral-400">Experience</p>
                <p className="mt-1 text-lg font-semibold">{profile.experience}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs uppercase tracking-[0.08em] text-neutral-400">Placements</p>
                <p className="mt-1 text-lg font-semibold">{profile.placements}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-xs uppercase tracking-[0.08em] text-neutral-400">Satisfaction</p>
                <p className="mt-1 text-lg font-semibold">{profile.satisfaction}</p>
              </div>
            </div>
          </article>

          <article className="reveal-up">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2f63ff]">Profile</p>
            <h1 className="hero-title-animated mt-2 font-display text-6xl leading-[0.9] tracking-tight sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-2xl text-neutral-300">{profile.location}</p>
            <p className="mt-5 max-w-3xl text-xl leading-relaxed text-neutral-300">{profile.bio}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-neutral-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-gradient-to-r from-[#ea3a45] to-[#2f63ff] px-6 py-3 text-sm font-semibold text-white transition hover:from-[#ff4c58] hover:to-[#3d73ff]"
              >
                Contact now
              </Link>
              <Link
                href="/roles"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View roles
              </Link>
            </div>
          </article>
        </div>
      </section>

      <MarketingFooter />
    </main>
  )
}
