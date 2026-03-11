import { createClient } from '@supabase/supabase-js'
import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/seo'
import type { Database } from '@/lib/supabase'

type JobSitemapData = Pick<
  Database['public']['Tables']['jobs']['Row'],
  'id' | 'posted_date' | 'updated_at'
>

const staticRoutes = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/industries', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/jobs', changeFrequency: 'daily', priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
] as const

async function getJobEntries(): Promise<MetadataRoute.Sitemap> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (
    !supabaseUrl ||
    !supabaseAnonKey ||
    supabaseUrl.includes('your-project-ref') ||
    supabaseAnonKey === 'your-anon-key'
  ) {
    return []
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
      .select('id, posted_date, updated_at')
      .eq('status', 'active')
      .order('posted_date', { ascending: false })
      .limit(500)

    if (error || !data) {
      return []
    }

    return (data as JobSitemapData[]).map((job) => ({
      url: absoluteUrl(`/jobs/${job.id}`),
      lastModified: job.updated_at || job.posted_date || new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.7,
    }))
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const jobEntries = await getJobEntries()
  return [...staticEntries, ...jobEntries]
}
