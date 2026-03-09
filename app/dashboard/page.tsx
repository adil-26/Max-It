'use client'

import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function DashboardPage() {
  const { profile } = useAuth()
  const router = useRouter()

  if (!profile) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-text-secondary">Loading your profile...</p>
      </div>
    )
  }

  if (profile.role === 'candidate') {
    return <CandidateDashboard profile={profile} />
  } else if (profile.role === 'employer') {
    return <EmployerDashboard profile={profile} />
  } else if (profile.role === 'admin') {
    return <AdminDashboard profile={profile} />
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-text-secondary">Invalid role</p>
    </div>
  )
}

function CandidateDashboard({ profile }: { profile: any }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Welcome, {profile.full_name}!</h1>
        <p className="text-text-secondary">Manage your job applications and profile</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Link href="/dashboard/profile" className="p-6 border border-border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">My Profile</h2>
          <p className="text-text-secondary">View and edit your profile information</p>
        </Link>
        <Link href="/dashboard/applications" className="p-6 border border-border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">My Applications</h2>
          <p className="text-text-secondary">Track your job applications</p>
        </Link>
        <Link href="/jobs" className="p-6 border border-border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Browse Jobs</h2>
          <p className="text-text-secondary">Find your next opportunity</p>
        </Link>
      </div>

      <div className="bg-white border border-border rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
        <div className="space-y-3 text-text-secondary">
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Location:</strong> {profile.location || 'Not specified'}</p>
          <p><strong>Experience:</strong> {profile.experience_years || 'Not specified'} years</p>
          {profile.skills && profile.skills.length > 0 && (
            <p><strong>Skills:</strong> {profile.skills.join(', ')}</p>
          )}
        </div>
        <Link href="/dashboard/profile">
          <button className="mt-6 px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
            Edit Profile
          </button>
        </Link>
      </div>
    </div>
  )
}

function EmployerDashboard({ profile }: { profile: any }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Welcome, {profile.company_name}!</h1>
        <p className="text-text-secondary">Manage your job postings and applicants</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Link href="/dashboard/jobs" className="p-6 border border-border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">My Job Postings</h2>
          <p className="text-text-secondary">View and manage your posted jobs</p>
        </Link>
        <Link href="/dashboard/applicants" className="p-6 border border-border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Applicants</h2>
          <p className="text-text-secondary">Review candidates and applications</p>
        </Link>
        <Link href="/dashboard/post-job" className="p-6 border border-border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Post a Job</h2>
          <p className="text-text-secondary">Create a new job posting</p>
        </Link>
      </div>

      <div className="bg-white border border-border rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Company Profile</h2>
        <div className="space-y-3 text-text-secondary">
          <p><strong>Company:</strong> {profile.company_name}</p>
          <p><strong>Industry:</strong> {profile.industry || 'Not specified'}</p>
          <p><strong>Location:</strong> {profile.location || 'Not specified'}</p>
          <p><strong>Email:</strong> {profile.email}</p>
        </div>
        <Link href="/dashboard/company-profile">
          <button className="mt-6 px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
            Edit Company Profile
          </button>
        </Link>
      </div>
    </div>
  )
}

function AdminDashboard({ profile }: { profile: any }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-text-secondary">Manage users, jobs, and platform activity</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        <Link href="/dashboard/admin/users" className="p-6 border border-border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Users</h2>
          <p className="text-text-secondary">Manage platform users</p>
        </Link>
        <Link href="/dashboard/admin/jobs" className="p-6 border border-border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Jobs</h2>
          <p className="text-text-secondary">Moderate job postings</p>
        </Link>
        <Link href="/dashboard/admin/leads" className="p-6 border border-border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Contact Leads</h2>
          <p className="text-text-secondary">Review contact submissions</p>
        </Link>
        <Link href="/dashboard/admin/analytics" className="p-6 border border-border rounded-lg hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">Analytics</h2>
          <p className="text-text-secondary">View platform analytics</p>
        </Link>
      </div>
    </div>
  )
}
