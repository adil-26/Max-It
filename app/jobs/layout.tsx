import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'IT Jobs in the United States',
  description:
    'Search and apply to active IT jobs in software, cloud, data, cybersecurity, and enterprise technology.',
  path: '/jobs',
  keywords: ['IT jobs', 'technology job board', 'software and cloud jobs'],
})

export default function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
