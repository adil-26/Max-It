import type { Metadata } from 'next'

export const siteName = 'MAX IT CONSULTING LLC'
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ||
  'https://www.maxitconsult.com'
export const siteDescription =
  'MAX IT CONSULTING LLC provides IT consulting, business consulting, software development, US recruitment, and IT staffing services.'
export const defaultOgImage = '/placeholder.jpg'

export const defaultKeywords = [
  'Max IT Consulting LLC',
  'IT staffing',
  'IT consulting',
  'business consulting',
  'software development',
  'US recruitment',
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
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  email: 'info@maxitconsult.com',
  telephone: '+1-908-449-3000',
  foundingDate: '2021',
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
