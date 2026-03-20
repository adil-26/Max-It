import type { Metadata } from 'next'
import { Rajdhani, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/lib/auth-context'
import PageTransition from '@/components/page-transition'
import ScrollReveal from '@/components/scroll-reveal'
import { ThemeProvider } from '@/components/theme-provider'
import {
  absoluteUrl,
  defaultKeywords,
  defaultOgImage,
  organizationJsonLd,
  siteDescription,
  siteName,
  siteUrl,
  websiteJsonLd,
} from '@/lib/seo'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | IT Staffing and Consulting`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  generator: siteName,
  keywords: defaultKeywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: `${siteName} | IT Staffing and Consulting`,
    description: siteDescription,
    url: absoluteUrl('/'),
    siteName,
    locale: 'en_US',
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
    title: `${siteName} | IT Staffing and Consulting`,
    description: siteDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${rajdhani.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
          <ScrollReveal />
          <AuthProvider>
            <PageTransition>{children}</PageTransition>
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
