import type { Metadata } from 'next'

export const siteName = 'MAX IT CONSULTING LLC'
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ||
  'https://www.maxitconsultllc.com'
export const siteDescription =
  'MAX IT CONSULTING LLC is a Branchburg, New Jersey-based Business Consulting and Services firm delivering IT consulting, business consulting, software development, US recruitment, and IT staffing solutions.'
export const defaultOgImage = '/hero-reference.png'

export const defaultKeywords = [
  'Max IT Consulting LLC',
  'IT consulting',
  'business consulting and services',
  'software development',
  'digital transformation',
  'cloud solutions',
  'cybersecurity',
  'US recruitment',
  'IT staffing',
  'technology consultancy New Jersey',
  'Branchburg New Jersey consulting',
  'maxitconsultllc',
  'maxitconsult',
  'IT staffing',
]

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  type?: 'website' | 'article'
  noIndex?: boolean
}

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${normalized === '/' ? '' : normalized}`
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = 'website',
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`

  return {
    title,
    description,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type,
      title,
      description,
      url: absoluteUrl(canonicalPath),
      siteName,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteName} preview image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultOgImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  }
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'EmploymentAgency'],
  name: siteName,
  url: siteUrl,
  slogan: 'Hire Smart Grow Fast',
  description: siteDescription,
  email: 'info@maxitconsultingllc.com',
  telephone: '+1-908-728-8642',
  foundingDate: '2018',
  industry: 'Business Consulting and Services',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 11,
    maxValue: 50,
  },
  knowsAbout: [
    'IT Consulting',
    'Business Consulting',
    'Software Development',
    'US Recruitment',
    'IT Staffing',
    'Digital Transformation',
    'Cloud Solutions',
    'Cybersecurity',
  ],
  areaServed: ['United States', 'Nearshore', 'Offshore'],
  sameAs: [
    'https://in.linkedin.com/company/max-it-consulting',
    'https://www.maxitconsult.com',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'info@maxitconsultingllc.com',
      telephone: '+1-908-728-8642',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '25 Oak Tavern Cir',
    addressLocality: 'Branchburg',
    addressRegion: 'NJ',
    postalCode: '08876',
    addressCountry: 'US',
  },
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/jobs?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}
