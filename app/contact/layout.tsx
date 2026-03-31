import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Request Talent Capability Audit',
  description:
    'Contact MAX IT Consulting LLC to request a talent capability audit for enterprise IT staffing, compliance-ready hiring, and global delivery support.',
  path: '/contact',
  keywords: [
    'request talent capability audit',
    'enterprise IT staffing consultation',
    'Fortune 500 hiring support',
    'MNC staffing partner contact',
  ],
})

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
