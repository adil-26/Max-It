import type { Metadata } from 'next'
import JobsPage from '../jobs/page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Enterprise IT Roles',
  description:
    'Explore enterprise IT roles at MAX IT Consulting LLC across software engineering, cloud, data, cybersecurity, ERP, QA, and IT leadership.',
  path: '/roles',
  keywords: [
    'enterprise IT roles',
    'IT role categories',
    'software engineering staffing',
    'cloud devops staffing',
    'cybersecurity talent acquisition',
    'enterprise IT recruitment',
  ],
})

export default JobsPage
