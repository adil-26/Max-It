'use client'

import { useState } from 'react'
import MarketingHeader from '@/components/marketing-header'
import MarketingFooter from '@/components/marketing-footer'
import { supabase } from '@/lib/supabase'

type InquiryType = 'general' | 'job_inquiry' | 'staffing' | 'partnership'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general' as InquiryType,
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
      const { error: dbError } = await supabase.from('contact_leads').insert({
        name: formData.name,
        email: formData.email,
        company: null,
        phone: null,
        message: `${formData.message}${formData.source ? `\n\nSource: ${formData.source}` : ''}`,
        inquiry_type: formData.subject,
      })

      if (dbError) throw dbError

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: 'general',
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
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[860px] bg-[radial-gradient(circle_at_14%_10%,rgba(235,58,69,0.3)_0%,rgba(235,58,69,0.08)_32%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.26)_0%,rgba(47,99,255,0.08)_40%,transparent_62%)]"
      />

      <MarketingHeader />

      <section className="mx-auto grid w-full max-w-[1240px] gap-8 px-6 pb-14 pt-36 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="reveal-up">
          <h1 className="hero-title-animated font-display text-7xl leading-[0.9] tracking-tight">Reach out now.</h1>
          <p className="mt-4 text-2xl text-neutral-300">We&apos;re here to help, reach out and we&apos;ll get back to you.</p>

          <div className="mt-10">
            <p className="text-5xl font-semibold leading-tight">Or connect with us:</p>
            <div className="mt-6 space-y-2 text-2xl text-neutral-300">
              <a href="https://x.com" target="_blank" rel="noreferrer" className="block hover:text-white">
                X (Twitter)
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block hover:text-white">
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/maxitconsultingllc/"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </aside>

        <article className="reveal-up rounded-[18px] border border-white/10 bg-[#07080a] p-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {success ? (
              <div className="rounded-xl border border-emerald-400/40 bg-emerald-500/15 p-3 text-sm text-emerald-100">
                Thanks. We received your message.
              </div>
            ) : null}

            {error ? (
              <div className="rounded-xl border border-red-400/40 bg-red-500/15 p-3 text-sm text-red-100">
                {error}
              </div>
            ) : null}

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white placeholder:text-neutral-500"
                required
              />
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@framer.com"
                className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white placeholder:text-neutral-500"
                required
              />
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white"
              >
                <option value="general">General Inquiry</option>
                <option value="job_inquiry">Job Inquiry</option>
                <option value="staffing">Staffing Request</option>
                <option value="partnership">Partnership Opportunity</option>
              </select>
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Provide details to your inquiry..."
                rows={5}
                className="w-full rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-base text-white placeholder:text-neutral-500"
                required
              />
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">How did you hear about us?</label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white"
              >
                <option value="">Select...</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Referral">Referral</option>
                <option value="Search">Search</option>
                <option value="Social Media">Social Media</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="reveal-zoom w-full rounded-full bg-gradient-to-r from-[#ea3a45] to-[#2f63ff] px-6 py-3 text-sm font-semibold text-white transition hover:from-[#ff4c58] hover:to-[#3f72ff] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'SUBMITTING...' : 'SUBMIT'}
            </button>
          </form>
        </article>
      </section>

      <MarketingFooter />
    </main>
  )
}
