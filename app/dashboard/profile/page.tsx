'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { updateUserProfile } from '@/lib/auth'

export default function ProfilePage() {
  const { user, profile } = useAuth()
  const [formData, setFormData] = useState({
    full_name: '',
    location: '',
    experience_years: 0,
    skills: '',
    bio: '',
    phone: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (profile && profile.role === 'candidate') {
      setFormData({
        full_name: profile.full_name || '',
        location: profile.location || '',
        experience_years: profile.experience_years || 0,
        skills: profile.skills?.join(', ') || '',
        bio: profile.bio || '',
        phone: profile.phone || '',
      })
    }
  }, [profile])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    try {
      setLoading(true)
      setError('')
      setSuccess(false)

      const skills = formData.skills
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0)

      await updateUserProfile(user.id, {
        full_name: formData.full_name,
        location: formData.location,
        experience_years: parseInt(formData.experience_years as any, 10),
        skills,
        bio: formData.bio,
        phone: formData.phone,
      })

      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An error occurred while updating profile'
      )
    } finally {
      setLoading(false)
    }
  }

  if (profile?.role !== 'candidate') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <p className="text-text-secondary">
          This page is only available for job candidates.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>

      <div className="bg-white border border-border rounded-lg p-8">
        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            Profile updated successfully!
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Full Name
            </label>
            <Input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Phone
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (234) 567-890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Location
            </label>
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="San Francisco, CA"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Years of Experience
            </label>
            <Input
              type="number"
              name="experience_years"
              value={formData.experience_years}
              onChange={handleChange}
              min="0"
              max="70"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Skills (comma-separated)
            </label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g., JavaScript, React, Node.js, AWS, Docker"
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
              rows={5}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Updating...' : 'Save Profile'}
          </Button>
        </form>
      </div>
    </div>
  )
}
