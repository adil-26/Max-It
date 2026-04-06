'use client'

import { useState } from 'react'
import AnimatedAccentOrbs from '@/components/animated-accent-orbs'
import MarketingHeader from '@/components/marketing-header'
import MarketingFooter from '@/components/marketing-footer'
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
    <main className="marketing-light relative min-h-screen overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[860px] bg-[radial-gradient(circle_at_14%_10%,rgba(235,58,69,0.3)_0%,rgba(235,58,69,0.08)_32%,transparent_58%),radial-gradient(circle_at_86%_18%,rgba(47,99,255,0.26)_0%,rgba(47,99,255,0.08)_40%,transparent_62%)]"
      />
      <AnimatedAccentOrbs />

      <MarketingHeader />

      <section className="mx-auto grid w-full max-w-[1240px] gap-8 px-6 pb-14 pt-24 sm:pt-28 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="reveal-up">
          <h1 className="hero-title-animated font-display text-4xl leading-[0.96] tracking-tight sm:text-5xl">
            Request a Free
            <br />
            Talent Capability Audit
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Our Talent Capability Audit is a free 30-minute consultation where we assess team gaps, hiring priorities,
            and provide a custom recruitment roadmap with zero commitment.
          </p>

          <div className="mt-10">
            <p className="text-4xl font-semibold leading-tight">What happens next:</p>
            <div className="mt-6 space-y-3 text-xl text-neutral-300">
              <MotionCard className="rounded-xl border border-white/10 bg-black/35 px-4 py-3">
                1. Initial scope review with your hiring stakeholders.
              </MotionCard>
              <MotionCard delay={0.06} className="rounded-xl border border-white/10 bg-black/35 px-4 py-3">
                2. Domain-based talent coverage analysis.
              </MotionCard>
              <MotionCard delay={0.12} className="rounded-xl border border-white/10 bg-black/35 px-4 py-3">
                3. Recommended execution model: onshore, nearshore, offshore.
              </MotionCard>
            </div>
          </div>

          <MotionCard className="mt-8 rounded-2xl border border-white/10 bg-black/35 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">Contact Information</p>
            <div className="mt-3 space-y-3 text-sm text-neutral-300">
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
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#8fb1ff]">
                Response Time: Within 4 Business Hours
              </p>
            </div>
          </MotionCard>
        </aside>

        <MotionCard className="rounded-[18px] border border-white/10 bg-[#07080a] p-5 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {success ? (
              <div className="rounded-xl border border-emerald-400/40 bg-emerald-500/15 p-3 text-sm text-emerald-100">
                Thank you. Your capability audit request was submitted successfully.
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
                placeholder="Alex Morgan"
                className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white placeholder:text-neutral-500"
                required
              />
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Global Enterprise Inc."
                className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white placeholder:text-neutral-500"
                required
              />
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Your Role / Title</label>
              <input
                type="text"
                name="roleTitle"
                value={formData.roleTitle}
                onChange={handleChange}
                placeholder="VP Engineering, HR Director, CTO"
                className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white placeholder:text-neutral-500"
                required
              />
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Phone</label>
              <div className="grid grid-cols-[120px_1fr] gap-2">
                <select
                  name="phoneCountry"
                  value={formData.phoneCountry}
                  onChange={handleChange}
                  className="h-12 rounded-lg border border-white/10 bg-black/35 px-3 text-sm text-white"
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
                  className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white placeholder:text-neutral-500"
                />
              </div>
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Business Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@enterprise.com"
                className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white placeholder:text-neutral-500"
                required
              />
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">How Can We Help?</label>
              <select
                name="helpType"
                value={formData.helpType}
                onChange={handleChange}
                className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white"
              >
                <option value="IT Staffing (Contract)">IT Staffing (Contract)</option>
                <option value="IT Staffing (Direct Hire)">IT Staffing (Direct Hire)</option>
                <option value="IT Staffing (Staff Aug)">IT Staffing (Staff Aug)</option>
                <option value="Business Consulting">Business Consulting</option>
                <option value="Software Development">Software Development</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Inquiry Category</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white"
              >
                <option value="staffing">Talent Capability Audit</option>
                <option value="general">General Inquiry</option>
                <option value="job_inquiry">Job Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
              </select>
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Number of Positions</label>
              <select
                name="positions"
                value={formData.positions}
                onChange={handleChange}
                className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white"
              >
                <option value="">Select...</option>
                <option value="1">1</option>
                <option value="2-5">2-5</option>
                <option value="6-10">6-10</option>
                <option value="10+">10+</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Technology / Skills Needed</label>
              <textarea
                name="techSkills"
                value={formData.techSkills}
                onChange={handleChange}
                placeholder="AWS engineers, React developers, Data Scientists..."
                rows={3}
                className="w-full rounded-lg border border-white/10 bg-black/35 px-4 py-3 text-base text-white placeholder:text-neutral-500"
              />
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Hiring Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="h-12 w-full rounded-lg border border-white/10 bg-black/35 px-4 text-base text-white"
              >
                <option value="">Select...</option>
                <option value="ASAP (within 2 weeks)">ASAP (within 2 weeks)</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="Planning ahead">Planning ahead</option>
              </select>
            </div>

            <div className="reveal-zoom">
              <label className="mb-2 block text-sm text-neutral-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share current hiring demand, target domains, locations, and timeline..."
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
                <option value="Google">Google</option>
                <option value="Referral">Referral</option>
                <option value="Job Board">Job Board</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="brand-cta-gradient reveal-zoom w-full rounded-full px-6 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'SUBMITTING...' : 'GET MY FREE TALENT AUDIT ->'}
            </button>
          </form>
        </MotionCard>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-6 pb-14">
        <MotionCard className="rounded-[18px] border border-white/10 bg-[#07080a] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8fb1ff]">
            Prefer to book directly? Pick a time that works for you.
          </p>
          <p className="mt-2 text-sm text-neutral-300">
            Free Talent Capability Audit - 30 minutes - video call format.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/35">
            <iframe
              src="https://calendly.com/maxitconsultingllc/talent-audit"
              title="Book Talent Capability Audit"
              className="h-[680px] w-full"
              loading="lazy"
            />
          </div>
        </MotionCard>
      </section>

      <MarketingFooter />
    </main>
  )
}
