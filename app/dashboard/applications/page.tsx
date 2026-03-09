'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { supabase } from '@/lib/supabase'
import type { Database } from '@/lib/supabase'

type Application = Database['public']['Tables']['job_applications']['Row']
type Job = Database['public']['Tables']['jobs']['Row']

interface ApplicationWithJob extends Application {
  job?: Job
}

export default function ApplicationsPage() {
  const { profile } = useAuth()
  const [applications, setApplications] = useState<ApplicationWithJob[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (profile?.role === 'candidate') {
      fetchApplications()
    }
  }, [profile])

  const fetchApplications = async () => {
    if (!profile) return
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('job_applications')
        .select('*, jobs(*)')
        .eq('candidate_id', profile.id)
        .order('applied_date', { ascending: false })

      if (error) throw error
      setApplications(data || [])
    } catch (error) {
      console.error('Error fetching applications:', error)
    } finally {
      setLoading(false)
    }
  }

  if (profile?.role !== 'candidate') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-text-secondary">
          This page is only available for job candidates.
        </p>
      </div>
    )
  }

  const statusColors: Record<string, string> = {
    applied: 'bg-blue-50 text-blue-700 border-blue-200',
    reviewed: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    shortlisted: 'bg-purple-50 text-purple-700 border-purple-200',
    rejected: 'bg-red-50 text-red-700 border-red-200',
    accepted: 'bg-green-50 text-green-700 border-green-200',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Applications</h1>

      {loading ? (
        <p className="text-text-secondary">Loading applications...</p>
      ) : applications.length === 0 ? (
        <div className="bg-white border border-border rounded-lg p-12 text-center">
          <p className="text-text-secondary mb-6">
            You haven't applied for any jobs yet.
          </p>
          <Link href="/jobs" className="text-primary hover:underline font-semibold">
            Browse Jobs →
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-primary hover:underline">
                    <Link href={`/jobs/${app.job_id}`}>
                      {app.job?.title || 'Job'}
                    </Link>
                  </h2>
                  <p className="text-text-secondary mt-1">
                    {app.job?.location || 'Location not specified'}
                  </p>
                </div>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${
                    statusColors[app.status] || 'bg-gray-50 text-gray-700'
                  }`}
                >
                  {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                </span>
              </div>

              {app.job?.description && (
                <p className="text-text-secondary mb-4 line-clamp-2">
                  {app.job.description}
                </p>
              )}

              <div className="flex justify-between items-center text-sm text-text-secondary">
                <p>
                  Applied on {new Date(app.applied_date).toLocaleDateString()}
                </p>
                <Link href={`/jobs/${app.job_id}`} className="text-primary hover:underline">
                  View Job →
                </Link>
              </div>

              {app.cover_letter && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm font-medium mb-2">Cover Letter</p>
                  <p className="text-sm text-text-secondary line-clamp-3">
                    {app.cover_letter}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
