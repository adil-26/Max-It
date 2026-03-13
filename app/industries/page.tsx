import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import SiteFooter from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Industry-Specific IT Staffing',
  description:
    'MAX IT Consulting LLC supports finance, healthcare, retail, telecom, insurance, government, and technology teams with specialized IT staffing and consulting.',
  path: '/industries',
  keywords: [
    'industry IT staffing',
    'healthcare IT recruiters',
    'finance technology hiring',
    'telecom IT talent',
    'government technology staffing',
  ],
})

const industries = [
  {
    name: 'Finance',
    detail:
      'Secure systems, trading platforms, regulatory reporting, and compliance-sensitive engineering teams.',
    roles: ['Java Developers', 'Data Engineers', 'Risk Analysts', 'DevOps Engineers'],
  },
  {
    name: 'Healthcare',
    detail:
      'Data privacy, EHR integrations, interoperability, and scalable care technology staffing.',
    roles: ['HL7/FHIR Specialists', 'Cloud Engineers', 'Security Analysts', 'QA Testers'],
  },
  {
    name: 'Retail',
    detail:
      'E-commerce modernization, customer analytics, inventory systems, and omnichannel operations.',
    roles: ['Full-Stack Engineers', 'Data Analysts', 'Product Analysts', 'Support Engineers'],
  },
  {
    name: 'Telecom',
    detail:
      'Network systems, OSS/BSS modernization, and high-throughput data pipeline support.',
    roles: ['Network Engineers', 'Cloud Architects', 'SRE/DevOps', 'NOC Specialists'],
  },
  {
    name: 'Technology',
    detail:
      'Product engineering, cloud-native development, platform scaling, and agile delivery teams.',
    roles: ['Software Engineers', 'Platform Engineers', 'QA Automation', 'Product Analysts'],
  },
  {
    name: 'Insurance',
    detail:
      'Claims automation, policy systems modernization, risk platforms, and process transformation.',
    roles: ['Business Analysts', 'System Integrators', 'QA Engineers', 'Data Specialists'],
  },
  {
    name: 'Government',
    detail:
      'Mission-critical modernization with secure and compliant hiring and delivery operations.',
    roles: ['Security Engineers', 'Infrastructure Specialists', 'Project Coordinators', 'Analysts'],
  },
]

const complianceAreas = [
  'SOC 2 Controls',
  'HIPAA-aware Delivery',
  'PCI-related Support',
  'Data Governance Practices',
  'Secure Access Workflows',
  'Audit-Friendly Documentation',
]

const approach = [
  {
    title: 'Domain-Aligned Intake',
    text: 'We calibrate hiring requirements against industry-specific delivery and compliance expectations.',
  },
  {
    title: 'Skill + Context Screening',
    text: 'Candidate evaluation includes both technical capability and domain context fit.',
  },
  {
    title: 'Role-Based Shortlisting',
    text: 'We submit focused shortlists with clear notes tied to project goals and team structure.',
  },
  {
    title: 'Continuous Hiring Support',
    text: 'For ongoing demand, we maintain pipelines with regular status reporting and optimization.',
  },
]

const marketCoverage = [
  { region: 'Northeast', cities: 'New York, Jersey City, Boston', note: 'Finance and enterprise demand' },
  { region: 'South', cities: 'Dallas, Atlanta, Charlotte, Tampa', note: 'Cloud and support operations' },
  { region: 'Midwest', cities: 'Chicago, Detroit, Columbus', note: 'Data, infrastructure, and modernization' },
  { region: 'West', cities: 'Seattle, San Jose, Phoenix, Austin', note: 'Platform and product engineering' },
]

const industryGallery = [
  {
    title: 'Finance and Compliance Programs',
    image: '/media/finance-sector.svg',
    text: 'Secure delivery environments where regulatory and performance expectations are critical.',
  },
  {
    title: 'Healthcare and Data Privacy',
    image: '/media/healthcare-sector.svg',
    text: 'Technology support aligned to protected data handling and high-availability needs.',
  },
  {
    title: 'Retail and Omnichannel Scale',
    image: '/media/retail-sector.svg',
    text: 'Teams supporting customer-facing systems, analytics, and platform performance.',
  },
]

const industriesVideos = [
  {
    title: 'Industry Hiring Strategy',
    embed: 'https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?rel=0&modestbranding=1',
    watch: 'https://www.youtube.com/watch?v=M7lc1UVf-VE',
  },
  {
    title: 'Sector Staffing Execution',
    embed: 'https://www.youtube-nocookie.com/embed/ysz5S6PUM-U?rel=0&modestbranding=1',
    watch: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground subtle />

        <section className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-8 lg:px-20">
          <div className="glass-panel p-5 sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Industries We Serve</p>
            <h1 className="mt-2 text-3xl leading-tight sm:text-5xl">Industry-focused IT talent strategy</h1>
            <p className="mt-4 max-w-4xl text-muted-foreground">
              MAX IT Consulting LLC aligns staffing strategy with domain realities, compliance obligations,
              and delivery timelines for each industry. We help clients build teams that can execute in
              complex, business-critical environments.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-8 sm:px-8 lg:px-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, idx) => (
              <article
                key={industry.name}
                className="glass-panel reveal-up rounded-xl p-5 sm:p-6"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-secondary">Industry</p>
                <h2 className="mt-2 font-display text-2xl uppercase tracking-[0.06em] sm:text-3xl">{industry.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{industry.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {industry.roles.map((role) => (
                    <span
                      key={`${industry.name}-${role}`}
                      className="rounded-full border border-border/70 bg-background/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-foreground"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-20">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="glass-panel p-5 sm:p-9">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Industry Delivery Approach</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">How we tailor hiring by industry</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {approach.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border/70 bg-background/80 p-4"
                  >
                    <h3 className="font-display text-xl uppercase tracking-[0.05em]">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="glass-panel p-5 sm:p-9">
              <p className="text-xs uppercase tracking-[0.2em] text-primary">Compliance-Aware Support</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Hiring quality with governance in mind</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {complianceAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-20">
          <div className="glass-panel p-5 sm:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Market Coverage</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Regional hiring support across the U.S.</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {marketCoverage.map((region) => (
                <article
                  key={region.region}
                  className="rounded-xl border border-border/70 bg-background/80 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-secondary">{region.region}</p>
                  <p className="mt-2 font-display text-xl uppercase tracking-[0.05em] text-foreground">
                    {region.cities}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{region.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-20">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Industry Gallery</p>
            <h2 className="mt-2 text-2xl sm:text-4xl">Visual snapshots across sectors</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {industryGallery.map((item, idx) => (
              <article
                key={item.title}
                className="glass-panel reveal-up overflow-hidden rounded-[1.5rem]"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl uppercase tracking-[0.05em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 lg:px-20">
          <div className="glass-panel p-5 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Industry Video</p>
            <h2 className="mt-2 text-2xl sm:text-4xl">Domain-focused hiring explainer</h2>
            <div className="mt-5 grid gap-5">
              {industriesVideos.map((video) => (
                <article key={video.title} className="rounded-xl border border-border/70 bg-background/80 p-4">
                  <p className="mb-3 text-xs uppercase tracking-[0.16em] text-secondary">{video.title}</p>
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-border/70">
                    <iframe
                      src={video.embed}
                      title={video.title}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Video not loading?{' '}
                    <a
                      href={video.watch}
                      target="_blank"
                      rel="noreferrer"
                      className="text-secondary underline-offset-4 hover:underline"
                    >
                      Open video in new tab
                    </a>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 py-14 sm:px-8 lg:px-20">
          <div className="glass-panel p-5 sm:p-10">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">Need Industry-Specific Hiring?</p>
                <h2 className="mt-2 text-3xl sm:text-4xl">Build specialized technology teams with MAX IT</h2>
                <p className="mt-4 text-muted-foreground">
                  Share your domain, role priorities, and timeline. We will structure a hiring plan aligned
                  with your industry context and business outcomes.
                </p>
              </div>

              <div className="space-y-3">
                <Link href="/contact" className="block">
                  <Button className="w-full font-display uppercase tracking-[0.12em]">Contact Team</Button>
                </Link>
                <a
                  href="https://www.linkedin.com/company/112240073/admin/dashboard/"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full font-display uppercase tracking-[0.12em]">
                    LinkedIn
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
