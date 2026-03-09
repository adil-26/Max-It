import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Max IT Consulting LLC',
  description:
    'Contact Max IT Consulting LLC for IT staffing, technology consulting, and hiring support across the United States.',
  path: '/contact',
  keywords: ['contact IT staffing company', 'IT consulting contact', 'staffing request'],
})

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
