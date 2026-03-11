import type { Metadata } from 'next'

export const siteName = 'MAX IT CONSULTING LLC'
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ||
  'https://maxitconsultingllc.com'
export const siteDescription =
  'MAX IT CONSULTING LLC is a New Jersey-based IT staffing and consulting company established in 2008, providing skilled IT professionals across industries.'
export const defaultOgImage = '/placeholder.jpg'

export const defaultKeywords = [
  'Max IT Consulting LLC',
  'IT staffing',
  'IT consulting',
  'business consulting',
  'software development',
  'US recruitment',
  'IT recruitment agency',
  'contract staffing',
  'direct hire',
  'permanent placement',
  'IT staffing New Jersey',
  'digital transformation',
  'cloud solutions',
  'cybersecurity hiring',
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
  description: siteDescription,
  email: 'info@maxitconsult.com',
  telephone: '+1-908-449-3000',
  foundingDate: '2008',
  areaServed: 'US',
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
