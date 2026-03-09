import { createClient } from '@supabase/supabase-js'
import type { Metadata } from 'next'
import type { Database } from '@/lib/supabase'
import { createPageMetadata } from '@/lib/seo'

type JobSeoData = Pick<
  Database['public']['Tables']['jobs']['Row'],
  'id' | 'title' | 'description' | 'location' | 'category' | 'employment_type'
>

async function getJobSeoData(id: string): Promise<JobSeoData | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (
    !supabaseUrl ||
    !supabaseAnonKey ||
    supabaseUrl.includes('your-project-ref') ||
    supabaseAnonKey === 'your-anon-key'
  ) {
    return null
  }

  try {
    const client = createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })

    const { data, error } = await client
      .from('jobs')
      .select('id, title, description, location, category, employment_type')
      .eq('id', id)
      .eq('status', 'active')
      .maybeSingle()

    if (error || !data) {
      return null
    }

    return data as JobSeoData
  } catch {
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const job = await getJobSeoData(id)

  if (!job) {
    return createPageMetadata({
      title: 'IT Job Opportunity',
      description:
        'Explore this IT job opportunity and apply through Max IT Consulting LLC.',
      path: `/jobs/${id}`,
      keywords: ['IT job', 'technology opportunity'],
    })
  }

  const summary = job.description.replace(/\s+/g, ' ').trim()
  const trimmedSummary =
    summary.length > 150 ? `${summary.slice(0, 147).trimEnd()}...` : summary

  return createPageMetadata({
    title: `${job.title} in ${job.location}`,
    description: trimmedSummary,
    path: `/jobs/${id}`,
    keywords: [job.title, job.location, job.category, job.employment_type].filter(
      Boolean
    ) as string[],
    type: 'article',
  })
}

export default function JobDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
