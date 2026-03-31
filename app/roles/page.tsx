import type { Metadata } from 'next'
import JobsPage from '../jobs/page'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Enterprise IT Roles',
  description:
    'Explore enterprise role domains at MAX IT Consulting LLC: Cloud/DevOps, AI/Data Science, Cybersecurity, and SAP/Oracle ERP talent.',
  path: '/roles',
  keywords: [
    'enterprise IT roles',
    'cloud devops staffing',
    'AI data science recruitment',
    'cybersecurity talent acquisition',
    'SAP Oracle ERP staffing',
  ],
})

export default JobsPage
