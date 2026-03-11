'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import SiteFooter from '@/components/site-footer'
import { supabase, type Database } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Job = Database['public']['Tables']['jobs']['Row']
type JobFilters = {
  search: string
  location: string
  experience: string
  jobType: string
  skill: string
  minSalary: string
}

export default function JobsPage() {
  const searchParams = useSearchParams()
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [experience, setExperience] = useState('')
  const [jobType, setJobType] = useState('')
  const [skill, setSkill] = useState('')
  const [minSalary, setMinSalary] = useState('')

  useEffect(() => {
    const initialFilters: JobFilters = {
      search: searchParams.get('search') || '',
      location: searchParams.get('location') || '',
      experience: searchParams.get('experience') || '',
      jobType: searchParams.get('jobType') || '',
      skill: searchParams.get('skill') || '',
      minSalary: searchParams.get('minSalary') || '',
    }

    const hasInitialFilter = Object.values(initialFilters).some((value) => value.trim() !== '')

    if (hasInitialFilter) {
      setSearch(initialFilters.search)
      setLocation(initialFilters.location)
      setExperience(initialFilters.experience)
      setJobType(initialFilters.jobType)
      setSkill(initialFilters.skill)
      setMinSalary(initialFilters.minSalary)
      void fetchJobs(initialFilters)
      return
    }

    void fetchJobs()
  }, [searchParams])

  const fetchJobs = async (overrides?: Partial<JobFilters>) => {
    try {
      setLoading(true)
      setError('')

      const searchValue = overrides?.search ?? search
      const locationValue = overrides?.location ?? location
      const experienceValue = overrides?.experience ?? experience
      const jobTypeValue = overrides?.jobType ?? jobType
      const skillValue = overrides?.skill ?? skill
      const minSalaryValue = overrides?.minSalary ?? minSalary

      let query = supabase
        .from('jobs')
        .select('*')
        .eq('status', 'active')
        .order('posted_date', { ascending: false })
        .limit(80)

      if (searchValue.trim()) {
        const term = searchValue.trim()
        query = query.or(`title.ilike.%${term}%,description.ilike.%${term}%`)
      }

      if (locationValue.trim()) {
        query = query.ilike('location', `%${locationValue.trim()}%`)
      }

      if (jobTypeValue) {
        query = query.eq('employment_type', jobTypeValue)
      }

      if (experienceValue) {
        query = query.eq('experience_level', experienceValue)
      }

      if (skillValue.trim()) {
        query = query.contains('required_skills', [skillValue.trim()])
      }

      if (minSalaryValue.trim()) {
        const amount = Number(minSalaryValue)
        if (!Number.isNaN(amount)) {
          query = query.gte('salary_min', amount)
        }
      }

      const { data, error: jobsError } = await query
      if (jobsError) throw jobsError

      setJobs((data || []) as Job[])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load jobs')
    } finally {
      setLoading(false)
    }
  }

  const resetFilters = () => {
    setSearch('')
    setLocation('')
    setExperience('')
    setJobType('')
    setSkill('')
    setMinSalary('')
  }

  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground subtle />

        <section className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-8 lg:px-20">
          <div className="glass-panel p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Career</p>
            <h1 className="mt-2 text-4xl sm:text-5xl">Find top IT opportunities across the United States</h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Filter by role, location, experience, skills, and compensation to match the right career
              opportunity.
            </p>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1440px] gap-6 px-4 pb-16 sm:px-8 lg:grid-cols-[320px_1fr] lg:px-20">
          <aside className="glass-panel h-fit p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-secondary">Filters</p>

            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault()
                void fetchJobs()
              }}
            >
              <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Role or keyword" className="border-white/20 bg-black/25" />
              <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="border-white/20 bg-black/25" />

              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full rounded-md border border-white/20 bg-black/25 px-3 py-2 text-sm"
              >
                <option value="">Experience</option>
                <option value="entry">Entry</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
                <option value="lead">Lead</option>
              </select>

              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full rounded-md border border-white/20 bg-black/25 px-3 py-2 text-sm"
              >
                <option value="">Job Type</option>
                <option value="full-time">Full-time</option>
                <option value="contract">Contract</option>
                <option value="contract-to-hire">Contract-to-Hire</option>
              </select>

              <Input value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="Skill (e.g. AWS)" className="border-white/20 bg-black/25" />
              <Input value={minSalary} onChange={(e) => setMinSalary(e.target.value)} placeholder="Minimum salary" className="border-white/20 bg-black/25" />

              <div className="grid grid-cols-2 gap-2 pt-1">
                <Button type="submit" className="font-display uppercase tracking-[0.12em]">Apply</Button>
                <Button
                  type="button"
                  variant="outline"
                  className="font-display uppercase tracking-[0.12em]"
                  onClick={() => {
                    resetFilters()
                    void fetchJobs({
                      search: '',
                      location: '',
                      experience: '',
                      jobType: '',
                      skill: '',
                      minSalary: '',
                    })
                  }}
                >
                  Reset
                </Button>
              </div>
            </form>
          </aside>

          <div className="space-y-4">
            {loading ? (
              <div className="glass-panel p-6 text-sm text-muted-foreground">Loading jobs...</div>
            ) : error ? (
              <div className="glass-panel border-red-500/45 bg-red-500/10 p-6 text-sm text-red-200">{error}</div>
            ) : jobs.length === 0 ? (
              <div className="glass-panel p-8 text-center">
                <p className="text-muted-foreground">No jobs found for the selected filters.</p>
                <Link href="/contact" className="mt-4 inline-block">
                  <Button variant="outline" className="font-display uppercase tracking-[0.12em]">
                    Contact Recruiting Team
                  </Button>
                </Link>
              </div>
            ) : (
              jobs.map((job, index) => (
                <article
                  key={job.id}
                  className="glass-panel reveal-up p-6"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-secondary">{job.category || 'Technology'}</p>
                      <h2 className="mt-1 font-display text-2xl uppercase tracking-[0.05em]">{job.title}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {job.location} | {job.employment_type}
                      </p>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {job.description}
                      </p>
                    </div>

                    <div className="space-y-2 md:text-right">
                      {job.salary_min && job.salary_max ? (
                        <p className="text-sm font-medium text-foreground">
                          ${job.salary_min.toLocaleString()} - ${job.salary_max.toLocaleString()}
                        </p>
                      ) : (
                        <p className="text-sm text-muted-foreground">Compensation negotiable</p>
                      )}

                      <Link href={`/jobs/${job.id}`}>
                        <Button className="font-display uppercase tracking-[0.12em]">Apply</Button>
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
