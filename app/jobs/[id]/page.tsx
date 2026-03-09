'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/lib/auth-context'
import type { Database } from '@/lib/supabase'
import { siteName, siteUrl } from '@/lib/seo'

type Job = Database['public']['Tables']['jobs']['Row']
type Profile = Database['public']['Tables']['profiles']['Row']

export default function JobDetailPage() {
  const params = useParams()
  const jobId = params.id as string
  const { user, profile, loading: authLoading } = useAuth()
  
  const [job, setJob] = useState<Job | null>(null)
  const [employer, setEmployer] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [applying, setApplying] = useState(false)
  const [coverLetter, setCoverLetter] = useState('')
  const [applicationSuccess, setApplicationSuccess] = useState(false)
  const [applicationError, setApplicationError] = useState('')
  const [hasApplied, setHasApplied] = useState(false)

  const jobPostingJsonLd = job
    ? {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: job.title,
        description: job.description,
        datePosted: job.posted_date,
        validThrough: job.deadline || undefined,
        employmentType: job.employment_type?.toUpperCase().replace(/-/g, '_'),
        hiringOrganization: {
          '@type': 'Organization',
          name: employer?.company_name || siteName,
          sameAs: siteUrl,
        },
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: job.location,
            addressCountry: 'US',
          },
        },
        ...(job.salary_min && job.salary_max
          ? {
              baseSalary: {
                '@type': 'MonetaryAmount',
                currency: 'USD',
                value: {
                  '@type': 'QuantitativeValue',
                  minValue: job.salary_min,
                  maxValue: job.salary_max,
                  unitText: 'YEAR',
                },
              },
            }
          : {}),
      }
    : null

  useEffect(() => {
    fetchJobDetails()
  }, [jobId])

  useEffect(() => {
    if (user && profile && job) {
      checkIfApplied()
    }
  }, [user, profile, job])

  const fetchJobDetails = async () => {
    try {
      setLoading(true)
      const { data: jobData, error: jobError } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .single()

      if (jobError) throw jobError
      setJob(jobData)

      // Fetch employer info
      if (jobData) {
        const { data: employerData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', jobData.employer_id)
          .single()
        setEmployer(employerData)
      }
    } catch (error) {
      console.error('Error fetching job:', error)
    } finally {
      setLoading(false)
    }
  }

  const checkIfApplied = async () => {
    if (!user || !profile) return
    try {
      const { data } = await supabase
        .from('job_applications')
        .select('id')
        .eq('job_id', jobId)
        .eq('candidate_id', profile.id)
        .single()
      setHasApplied(!!data)
    } catch (error) {
      console.error('Error checking application:', error)
    }
  }

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !profile) return

    try {
      setApplying(true)
      setApplicationError('')

      const { error } = await supabase.from('job_applications').insert({
        job_id: jobId,
        candidate_id: profile.id,
        cover_letter: coverLetter || null,
      })

      if (error) throw error

      setApplicationSuccess(true)
      setCoverLetter('')
      setHasApplied(true)
      setTimeout(() => setApplicationSuccess(false), 5000)
    } catch (error) {
      setApplicationError(
        error instanceof Error ? error.message : 'An error occurred'
      )
    } finally {
      setApplying(false)
    }
  }

  if (loading || authLoading) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <p className="text-text-secondary">Loading job details...</p>
        </main>
      </>
    )
  }

  if (!job) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
            <p className="text-text-secondary mb-6">
              The job you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/jobs">
              <Button>Back to Jobs</Button>
            </Link>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {jobPostingJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
          />
        )}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Job Header */}
          <div className="mb-12">
            <Link href="/jobs" className="text-primary hover:underline text-sm mb-4 block">
              {'<-'} Back to Jobs
            </Link>
            <h1 className="text-5xl font-bold mb-4">{job.title}</h1>
            <p className="text-xl text-text-secondary mb-4">
              {employer?.company_name || 'Company'} | {job.location}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">
                {job.employment_type}
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">
                {job.experience_level || 'Not specified'}
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">
                {job.category}
              </span>
            </div>

            {job.salary_min && job.salary_max && (
              <p className="text-2xl font-semibold text-primary mb-6">
                ${job.salary_min.toLocaleString()} - ${job.salary_max.toLocaleString()}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Job Details */}
            <div className="md:col-span-2">
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Job Description</h2>
                <div className="prose prose-sm max-w-none text-text-secondary whitespace-pre-wrap">
                  {job.description}
                </div>
              </div>

              {/* Required Skills */}
              {job.required_skills && job.required_skills.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Required Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {job.required_skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-muted px-4 py-2 rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Employer Info */}
              {employer && (
                <div className="border-t border-border pt-8">
                  <h2 className="text-2xl font-bold mb-4">About the Employer</h2>
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">
                      {employer.company_name}
                    </h3>
                    {employer.bio && (
                      <p className="text-text-secondary">{employer.bio}</p>
                    )}
                    {employer.location && (
                      <p className="text-text-secondary mt-2">
                        Location: {employer.location}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Application Sidebar */}
            <div>
              <div className="border border-border rounded-lg p-6 sticky top-24">
                {user && profile?.role === 'candidate' ? (
                  <>
                    <h3 className="text-xl font-bold mb-4">Apply Now</h3>

                    {applicationSuccess && (
                      <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                        Application submitted successfully!
                      </div>
                    )}

                    {applicationError && (
                      <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {applicationError}
                      </div>
                    )}

                    {hasApplied && (
                      <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm">
                        You've already applied for this job
                      </div>
                    )}

                    <form onSubmit={handleApply} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Cover Letter (Optional)
                        </label>
                        <textarea
                          value={coverLetter}
                          onChange={(e) => setCoverLetter(e.target.value)}
                          placeholder="Tell the employer why you're interested in this role..."
                          rows={6}
                          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={applying || hasApplied}
                        className="w-full"
                      >
                        {applying ? 'Applying...' : hasApplied ? 'Already Applied' : 'Apply Now'}
                      </Button>
                    </form>
                  </>
                ) : user ? (
                  <div className="text-center py-4">
                    <p className="text-text-secondary text-sm mb-4">
                      You're signed in as an employer. Switch to a candidate account to apply.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-text-secondary text-sm">
                      Sign in to apply for this job
                    </p>
                    <Link href="/auth/login" className="block">
                      <Button className="w-full">Sign In</Button>
                    </Link>
                    <Link href="/auth/signup?role=candidate" className="block">
                      <Button variant="outline" className="w-full">
                        Create Account
                      </Button>
                    </Link>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t border-border text-sm text-text-secondary space-y-2">
                  <p>
                    <strong>Posted:</strong>{' '}
                    {new Date(job.posted_date).toLocaleDateString()}
                  </p>
                  {job.deadline && (
                    <p>
                      <strong>Deadline:</strong>{' '}
                      {new Date(job.deadline).toLocaleDateString()}
                    </p>
                  )}
                  <p>
                    <strong>Applications:</strong> {job.applications_count}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
