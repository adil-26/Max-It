'use client'

import { useState } from 'react'
import Header from '@/components/header'
import FuturisticBackground from '@/components/futuristic-background'
import SiteFooter from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { supabase } from '@/lib/supabase'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: 'general',
    message: '',
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
        company: formData.company || null,
        phone: formData.phone || null,
        message: formData.message,
        inquiry_type: formData.inquiryType as 'job_inquiry' | 'partnership' | 'staffing' | 'general',
      })

      if (dbError) throw dbError

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        inquiryType: 'general',
        message: '',
      })

      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An error occurred while submitting the form'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24">
        <FuturisticBackground />

        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
          <div className="glass-panel p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Contact Max IT Consulting LLC</p>
            <h1 className="gradient-title mt-2 text-4xl sm:text-5xl">Start a hiring conversation</h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Tell us what you are building and the roles you need to fill. Our team will respond quickly with
              a staffing or consulting path that fits your goals.
            </p>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-16 md:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-4">
            <div className="glass-panel p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-secondary">Email</p>
              <a href="mailto:info@maxitconsultingllc.com" className="mt-2 block text-sm text-foreground hover:text-primary">
                info@maxitconsultingllc.com
              </a>
            </div>

            <div className="glass-panel p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-secondary">Office</p>
              <p className="mt-2 text-sm text-muted-foreground">25 Oak Tavern Cir, Branchburg, NJ 08876, USA</p>
            </div>

            <div className="glass-panel p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-secondary">Engagement Types</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Contract staffing</li>
                <li>Contract-to-hire</li>
                <li>Permanent staffing</li>
                <li>IT consulting support</li>
              </ul>
            </div>
          </aside>

          <div className="glass-panel p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {success && (
                <div className="rounded-lg border border-emerald-400/40 bg-emerald-500/15 p-4 text-sm text-emerald-100">
                  Thank you. Your message has been submitted successfully.
                </div>
              )}

              {error && (
                <div className="rounded-lg border border-red-400/40 bg-red-500/15 p-4 text-sm text-red-100">
                  {error}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="border-white/20 bg-black/25"
                    required
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="border-white/20 bg-black/25"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Company
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="border-white/20 bg-black/25"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 000 000 0000"
                    className="border-white/20 bg-black/25"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full rounded-md border border-white/20 bg-black/25 px-3 py-2 text-sm text-foreground"
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="job_inquiry">Job Inquiry</option>
                  <option value="staffing">Staffing Request</option>
                  <option value="partnership">Partnership Opportunity</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you are hiring for or what support you need"
                  rows={6}
                  className="w-full rounded-md border border-white/20 bg-black/25 px-3 py-2 text-sm text-foreground"
                  required
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full font-display uppercase tracking-[0.12em]">
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
