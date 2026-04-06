import type { Metadata } from 'next'
import EmployersPage from '../employers/page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Enterprise Hiring Process',
  description:
    'Understand the MAX IT Consulting LLC 6-step enterprise hiring process, SLA commitments, and structured vetting methodology.',
  path: '/hiring',
  keywords: [
    'enterprise hiring process',
    '48-72 hour candidate submission',
    'technical vetting process',
    'enterprise staffing SLA',
  ],
})

export default EmployersPage
