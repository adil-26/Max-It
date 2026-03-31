import type { Metadata } from 'next'
import EmployersPage from '../employers/page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Enterprise Hiring Process',
  description:
    'Understand the MAX IT Consulting LLC MNC Path: AI database filtering, peer technical testing, and enterprise compliance verification.',
  path: '/hiring',
  keywords: [
    'enterprise hiring process',
    'MNC path staffing',
    'technical vetting process',
    'compliance-first recruitment',
  ],
})

export default EmployersPage
