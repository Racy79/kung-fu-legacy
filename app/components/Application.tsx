'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { trackFormSubmit } from '../lib/analytics'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  fullName: string
  phone: string
  email: string
  experience: string
  profession: string
  whyTrain: string
  whatYouBring: string
  developGoals: string[]
  commitToTraining: string
  acceptChallenge: string
  willTravel: string
  understandCommunity: string
}

const INITIAL: FormData = {
  fullName: '',
  phone: '',
  email: '',
  experience: '',
  profession: '',
  whyTrain: '',
  whatYouBring: '',
  developGoals: [],
  commitToTraining: '',
  acceptChallenge: '',
  willTravel: '',
  understandCommunity: '',
}

const GOALS = ['Structure', 'Sensitivity', 'Precision', 'Discipline', 'Instructor Development', 'Mastery']

const QUALIFIERS: { field: keyof FormData; question: string }[] = [
  {
    field: 'commitToTraining',
    question: 'Private instruction requires consistent presence — not when convenient, but as a standard. Are you in a place in your life where you can honor that commitment?',
  },
  {
    field: 'acceptChallenge',
    question: 'You will be corrected directly and specifically. Your technique, your structure, your understanding of the principles — all of it is subject to correction. Are you prepared to receive that without resistance?',
  },
  {
    field: 'willTravel',
    question: 'Are you willing to travel to train if required?',
  },
  {
    field: 'understandCommunity',
    question: 'Serious instruction places demands on your time and independent practice — not only during sessions. Do you understand that the quality of your development between sessions determines what is possible during them?',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.14 } },
}

export default function Application() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  useEffect(() => {
    if (status === 'success') {
      document.getElementById('apply-confirmation')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [status])

  // Capture UTM params on landing (persists across the visit even if the user
  // navigates before applying) so every application is tagged by channel —
  // needed to know which marketing spend is actually producing applicants.
  const [utm, setUtm] = useState({ utm_source: '', utm_medium: '', utm_campaign: '' })
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const fromUrl = {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
    }
    if (fromUrl.utm_source || fromUrl.utm_medium || fromUrl.utm_campaign) {
      sessionStorage.setItem('kfl_utm', JSON.stringify(fromUrl))
      setUtm(fromUrl)
    } else {
      const saved = sessionStorage.getItem('kfl_utm')
      if (saved) setUtm(JSON.parse(saved))
    }
  }, [])

  const set = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required.'
    if (!form.phone.trim()) e.phone = 'Phone is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    if (!form.experience) e.experience = 'Please select your experience level.'
    if (!form.profession.trim()) e.profession = 'Please tell us what you do and what you are building.'
    if (!form.whyTrain.trim()) e.whyTrain = 'Please answer this question.'
    if (!form.whatYouBring.trim()) e.whatYouBring = 'Please answer this question.'
    if (!form.commitToTraining) e.commitToTraining = 'Please answer this question.'
    if (!form.acceptChallenge) e.acceptChallenge = 'Please answer this question.'
    if (!form.willTravel) e.willTravel = 'Please answer this question.'
    if (!form.understandCommunity) e.understandCommunity = 'Please answer this question.'
    setErrors(e)
    if (Object.keys(e).length > 0) {
      setTimeout(() => {
        const firstError = document.querySelector('[data-error]')
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 80)
      return false
    }
    return true
  }

  const toggleGoal = (goal: string) =>
    setForm(prev => ({
      ...prev,
      developGoals: prev.developGoals.includes(goal)
        ? prev.developGoals.filter(g => g !== goal)
        : [...prev.developGoals, goal],
    }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, ...utm }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || `Response ${res.status}`)

      trackFormSubmit()
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(`Error: ${err}`)
    }
  }

  return (
    <section id="apply" className="section-pad bg-matte-black scroll-mt-24">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Pre-form copy */}
        <motion.p variants={fadeUp} className="label mb-14">
          Application
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-12">
          Enrollment is intentionally limited because private instruction requires attention.
        </motion.h2>

        <motion.div variants={stagger} className="space-y-5 mb-16">
          <motion.p variants={fadeUp} className="body text-bone/65">
            Applications are reviewed personally by Rafael Gonzalez. If accepted, you will be contacted directly.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/65">
            This is not a trial class. This is an ongoing apprenticeship built around development, accountability, and understanding.
          </motion.p>
        </motion.div>

        <motion.div variants={fadeUp} className="gold-line mb-16" />

        {/* ── Success State ─────────────────────────────────────────────────── */}
        {status === 'success' ? (
          <motion.div
            id="apply-confirmation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center py-16 px-10 border border-gold/60"
            style={{ boxShadow: '0 0 40px rgba(198,169,98,0.08)' }}
          >
            <div className="w-px h-10 bg-gold/40 mx-auto mb-10" />
            <p className="label mb-6 text-gold">Received</p>
            <h3 className="kfl-pullquote--authority text-bone mb-8">
              Application received.
            </h3>
            <p className="body text-bone/65 mb-6">
              Your application will be reviewed by Rafael personally.
            </p>
            <p className="body text-bone/65 mb-6">
              If it advances, you will receive a direct call — not an email, not an automated message. Rafael will reach out within a few days.
            </p>
            <p className="kfl-pullquote text-bone/80">
              Sit with what you wrote. It will be the first thing you are asked about.
            </p>
            <div className="w-px h-10 bg-gold/40 mx-auto mt-10" />
          </motion.div>
        ) : (
          /* ── Form ───────────────────────────────────────────────────────── */
          <form id="apply-form" onSubmit={handleSubmit} className="space-y-12 scroll-mt-28" noValidate>

            {/* ── Basic fields ───────────────────────────────────────────── */}
            <div className="space-y-6">
              <div>
                <label className="label block mb-3">Full Name</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={e => set('fullName', e.target.value)}
                  className={`field ${errors.fullName ? '!border-gold/60' : ''}`}
                  placeholder="Your full name"
                />
                {errors.fullName && <p data-error className="mt-2 kfl-support text-gold">{errors.fullName}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="label block mb-3">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => set('phone', e.target.value)}
                    className={`field ${errors.phone ? '!border-gold/60' : ''}`}
                    placeholder="(555) 000-0000"
                  />
                  {errors.phone && <p data-error className="mt-2 kfl-support text-gold">{errors.phone}</p>}
                </div>
                <div>
                  <label className="label block mb-3">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    className={`field ${errors.email ? '!border-gold/60' : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p data-error className="mt-2 kfl-support text-gold">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="label block mb-3">Previous Martial Background</label>
                <div className="relative">
                  <select
                    value={form.experience}
                    onChange={e => set('experience', e.target.value)}
                    className={`field appearance-none cursor-pointer bg-matte-black pr-10 ${errors.experience ? '!border-gold/60' : ''}`}
                  >
                    <option value="" disabled>Select your background</option>
                    <option value="none">None</option>
                    <option value="some">Some Formal Training</option>
                    <option value="extensive">Extensive Training</option>
                    <option value="high-level">High-Level Experience</option>
                  </select>
                  {/* Custom select arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-bone/30">
                    <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
                      <path d="M1 1L5.5 6L10 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                {errors.experience && <p data-error className="mt-2 kfl-support text-gold">{errors.experience}</p>}
              </div>

              <div>
                <label className="label block mb-3">What do you do, and what are you currently building?</label>
                <textarea
                  rows={4}
                  value={form.profession}
                  onChange={e => set('profession', e.target.value)}
                  className={`field resize-none ${errors.profession ? '!border-gold/60' : ''}`}
                  placeholder="Your profession, business, or endeavor. Be specific."
                />
                {errors.profession && <p data-error className="mt-2 kfl-support text-gold">{errors.profession}</p>}
              </div>

              <div>
                <label className="label block mb-3">Why Wing Chun specifically, and why private instruction?</label>
                <textarea
                  rows={5}
                  value={form.whyTrain}
                  onChange={e => set('whyTrain', e.target.value)}
                  className={`field resize-none ${errors.whyTrain ? '!border-gold/60' : ''}`}
                  placeholder="Be specific. Not why martial arts in general — why this system, and why now."
                />
                {errors.whyTrain && <p data-error className="mt-2 kfl-support text-gold">{errors.whyTrain}</p>}
              </div>

              <div>
                <label className="label block mb-3">Describe your current practice. What does serious training look like for you outside of formal sessions?</label>
                <textarea
                  rows={5}
                  value={form.whatYouBring}
                  onChange={e => set('whatYouBring', e.target.value)}
                  className={`field resize-none ${errors.whatYouBring ? '!border-gold/60' : ''}`}
                  placeholder="How do you train on your own? What disciplines or practices have shaped how you approach serious study?"
                />
                {errors.whatYouBring && <p data-error className="mt-2 kfl-support text-gold">{errors.whatYouBring}</p>}
              </div>
            </div>

            {/* ── Development goals ──────────────────────────────────────── */}
            <div>
              <p className="label mb-6">What do you want to develop most?</p>
              <div className="grid grid-cols-2 gap-3">
                {GOALS.map(goal => {
                  const active = form.developGoals.includes(goal)
                  return (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => toggleGoal(goal)}
                      className={`
                        px-5 py-4 border text-left kfl-support
                        transition-all duration-300
                        ${active
                          ? 'border-gold text-gold bg-gold/5'
                          : 'border-bone/15 text-bone/45 hover:border-bone/35 hover:text-bone/65'
                        }
                      `}
                    >
                      {goal}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* ── Qualifier questions ────────────────────────────────────── */}
            <div className="space-y-10">
              <p className="label">Commitment</p>
              {QUALIFIERS.map(({ field, question }) => (
                <div key={field}>
                  <p className="body text-bone/65 mb-5">
                    {question}
                  </p>
                  <div className="flex gap-4">
                    {['Yes', 'No'].map(opt => {
                      const val = opt.toLowerCase()
                      const checked = form[field] === val
                      return (
                        <label
                          key={opt}
                          className={`
                            flex items-center gap-3 cursor-pointer kfl-support
                            min-h-[48px] px-4 border transition-all duration-300
                            ${checked
                              ? 'text-gold border-gold/40 bg-gold/5'
                              : 'text-bone/45 border-bone/10 hover:border-bone/25 hover:text-bone/70'
                            }
                          `}
                        >
                          <input
                            type="radio"
                            name={field}
                            value={val}
                            checked={checked}
                            onChange={e => set(field, e.target.value)}
                            className="sr-only"
                            required
                          />
                          {/* Custom radio */}
                          <span
                            className={`
                              w-4 h-4 border flex-shrink-0 flex items-center justify-center
                              transition-colors duration-300
                              ${checked ? 'border-gold' : 'border-bone/25'}
                            `}
                          >
                            {checked && (
                              <span className="w-1.5 h-1.5 bg-gold block" />
                            )}
                          </span>
                          {opt}
                        </label>
                      )
                    })}
                  </div>
                  {errors[field] && <p data-error className="mt-3 kfl-support text-gold">{errors[field]}</p>}
                </div>
              ))}
            </div>

            {/* ── Validation banner ──────────────────────────────────────── */}
            {Object.keys(errors).length > 0 && (
              <p className="kfl-support text-gold/80 border border-gold/20 px-5 py-4">
                Please fill in all required fields before submitting.
              </p>
            )}

            {/* ── Error message ──────────────────────────────────────────── */}
            {status === 'error' && (
              <p className="kfl-support text-bone/55 border border-bone/15 px-5 py-4">
                {errorMsg}
              </p>
            )}

            {/* ── Submit ─────────────────────────────────────────────────── */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn w-full sm:w-auto"
              >
                {status === 'submitting' ? 'Submitting...' : 'Request Entry'}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  )
}
