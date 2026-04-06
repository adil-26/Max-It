'use client'

import { useState } from 'react'
import MarketingFooter from '@/components/marketing-footer'
import MarketingHeader from '@/components/marketing-header'
import MotionCard from '@/components/motion-card'
import { supabase } from '@/lib/supabase'

type InquiryType = 'general' | 'job_inquiry' | 'staffing' | 'partnership'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    roleTitle: '',
    phoneCountry: '+1',
    phone: '',
    email: '',
    subject: 'staffing' as InquiryType,
    helpType: 'IT Staffing (Contract)',
    positions: '',
    techSkills: '',
    timeline: '',
    message: '',
    source: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    try {
      setLoading(true)
      const detailBlocks = [
        `How can we help: ${formData.helpType}`,
        formData.roleTitle ? `Role/Title: ${formData.roleTitle}` : '',
        formData.positions ? `Number of Positions: ${formData.positions}` : '',
        formData.techSkills ? `Technology/Skills Needed: ${formData.techSkills}` : '',
        formData.timeline ? `Hiring Timeline: ${formData.timeline}` : '',
        formData.source ? `Source: ${formData.source}` : '',
      ]
        .filter(Boolean)
        .join('\n')

      const { error: dbError } = await supabase.from('contact_leads').insert({
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        phone: formData.phone ? `${formData.phoneCountry} ${formData.phone}` : null,
        message: `${formData.message}\n\n${detailBlocks}`,
        inquiry_type: formData.subject,
      })

      if (dbError) throw dbError

      setSuccess(true)
      setFormData({
        name: '',
        company: '',
        roleTitle: '',
        phoneCountry: '+1',
        phone: '',
        email: '',
        subject: 'staffing',
        helpType: 'IT Staffing (Contract)',
        positions: '',
        techSkills: '',
        timeline: '',
        message: '',
        source: '',
      })

      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while submitting the form')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#191919]">
      <MarketingHeader />

      <section className="mx-auto grid w-full max-w-[1240px] gap-8 px-6 pb-14 pt-24 sm:pt-28 lg:grid-cols-[0.95fr_1.05fr]">
        <aside>
          <p className="inline-flex rounded-full border border-[#d7c27a] bg-[#f3eddb] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">
            Contact
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            Request a Free
            <br />
            Talent Capability Audit
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Our Talent Capability Audit is a free 30-minute consultation where we assess team capability gaps, hiring
            urgency, and provide a practical recruitment roadmap with zero commitment.
          </p>

          <MotionCard className="mt-8 rounded-2xl border border-black/10 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Contact Information</p>
            <div className="mt-3 space-y-3 text-sm text-neutral-700">
              <p>
                US: 25 Oak Tavern Circle, Branchburg, New Jersey 08876, USA
                <br />
                Phone: +1-908-449-3000
                <br />
                Email: us@maxitconsultingllc.com
              </p>
              <p>
                UAE: Dubai 32223, United Arab Emirates
                <br />
                Phone: +971-4-000-0000
                <br />
                Email: uae@maxitconsultingllc.com
              </p>
              <p>
                India: Noida Sector 63, Uttar Pradesh 201301, India
                <br />
                Phone: +91-120-000-0000
                <br />
                Email: india@maxitconsultingllc.com
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#7f6720]">
                Response SLA: Within 4 Business Hours
              </p>
            </div>
          </MotionCard>

          <MotionCard className="mt-4 overflow-hidden rounded-2xl border border-black/10 bg-white">
            <div className="border-b border-black/10 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7f6720]">Founder Message Video</p>
            </div>
            <div className="p-4">
              <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-xl border border-black/10 bg-[#f9f9f9]">
                <div className="relative aspect-[9/16]">
                  <video
                    className="h-full w-full object-contain"
                    src="/media/hiring-owner-message-portrait.mp4"
                    controls
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>
            </div>
          </MotionCard>
        </aside>

        <MotionCard className="rounded-[18px] border border-black/10 bg-white p-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {success ? (
              <div className="rounded-xl border border-emerald-400/40 bg-emerald-500/10 p-3 text-sm text-emerald-700">
                Thank you. Your capability audit request was submitted successfully.
              </div>
            ) : null}

            {error ? (
              <div className="rounded-xl border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-700">{error}</div>
            ) : null}

            <div>
              <label className="mb-2 block text-sm text-neutral-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Alex Morgan"
                className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-base text-black placeholder:text-neutral-500"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-700">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Global Enterprise Inc."
                className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-base text-black placeholder:text-neutral-500"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-700">Your Role / Title</label>
              <input
                type="text"
                name="roleTitle"
                value={formData.roleTitle}
                onChange={handleChange}
                placeholder="VP Engineering, HR Director, CTO"
                className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-base text-black placeholder:text-neutral-500"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-700">Phone</label>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <select
                  name="phoneCountry"
                  value={formData.phoneCountry}
                  onChange={handleChange}
                  className="h-12 rounded-lg border border-black/10 bg-white px-3 text-sm text-black"
                >
                  <option value="+1">+1 US</option>
                  <option value="+971">+971 UAE</option>
                  <option value="+91">+91 India</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="555 000 1234"
                  className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-base text-black placeholder:text-neutral-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-700">Business Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@enterprise.com"
                className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-base text-black placeholder:text-neutral-500"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-700">How Can We Help?</label>
              <select
                name="helpType"
                value={formData.helpType}
                onChange={handleChange}
                className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-base text-black"
              >
                <option value="IT Staffing (Contract)">IT Staffing (Contract)</option>
                <option value="IT Staffing (Direct Hire)">IT Staffing (Direct Hire)</option>
                <option value="IT Staffing (Staff Aug)">IT Staffing (Staff Aug)</option>
                <option value="Business Consulting">Business Consulting</option>
                <option value="Software Development">Software Development</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-700">Inquiry Category</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="h-12 w-full rounded-lg border border-black/10 bg-white px-4 text-base text-black"
              >
                <option value="staffing">Talent Capability Audit</option>
                <option value="general">General Inquiry</option>
                <option value="job_inquiry">Job Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share open roles, target skills, team size, location, and hiring timeline..."
                rows={5}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-base text-black placeholder:text-neutral-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#111111] px-6 py-3 text-sm font-semibold text-[#d6bc63] transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'SUBMITTING...' : 'GET MY FREE TALENT AUDIT ->'}
            </button>
            <p className="text-xs text-neutral-500">No fee. No long-term commitment. Response within 4 business hours.</p>
          </form>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
