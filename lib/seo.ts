import type { Metadata } from 'next'

export const siteName = 'MAX IT CONSULTING LLC'
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ||
  'https://www.maxitconsultingllc.com'
export const siteDescription =
  'Max IT Consulting LLC provides IT staffing, technology recruiting, and consulting services for companies across the United States.'
export const defaultOgImage = '/placeholder.jpg'

export const defaultKeywords = [
  'Max IT Consulting LLC',
  'IT staffing',
  'IT consulting',
  'technology staffing',
  'IT recruiters',
  'staffing agency USA',
  'contract staffing',
  'permanent hiring',
  'cloud engineers',
  'software developers',
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
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  email: 'info@maxitconsultingllc.com',
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
