import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Enterprise IT Hiring Domains',
  description:
    'View enterprise IT hiring domains across cloud, AI/data, cybersecurity, and ERP talent clusters.',
  path: '/jobs',
  keywords: [
    'enterprise IT hiring',
    'cloud AI cybersecurity roles',
    'technical staffing domains',
    'IT talent clusters',
  ],
})

export default function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
