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

const GOALS = ['Structure', 'Sensitivity', 'Precision', 'Discipline', 'Brotherhood', 'Mastery']

const QUALIFIERS: { field: keyof FormData; question: string }[] = [
  {
    field: 'commitToTraining',
    question: 'This brotherhood demands consistent presence and full commitment — not when convenient, but as a standard. Are you in a place in your life where you can honor that?',
  },
  {
    field: 'acceptChallenge',
    question: 'You will be corrected. Your assumptions will be challenged. The men around you will hold you to a standard. Are you ready to be led before you lead?',
  },
  {
    field: 'willTravel',
    question: 'Are you willing to travel to train if required?',
  },
  {
    field: 'understandCommunity',
    question: 'The men who enter this brotherhood are selected for the value they bring — not just what they seek. Do you understand that your role here is as much about contribution as it is about development?',
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
        body: JSON.stringify(form),
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

        <motion.h2 variants={fadeUp} className="heading-lg mb-8">
          Entry is not given.
        </motion.h2>

        <motion.div variants={stagger} className="space-y-3 mb-8">
          <motion.p variants={fadeUp} className="body text-bone/65">
            It is earned.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/65">
            It is granted by the men already inside it.
          </motion.p>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-serif text-xl text-bone/75 italic mb-10"
        >
          What you are committing to is not a training schedule.<br />
          It is a standard.
        </motion.p>

        <motion.p variants={fadeUp} className="body text-bone/55 mb-16">
          Applications are reviewed. Entry is not guaranteed. If you are the right man, you will know it before you submit.
        </motion.p>

        {/* ── Operational Clarity ───────────────────────────────────────── */}
        <motion.div variants={stagger} className="mb-16">
          <motion.p variants={fadeUp} className="label mb-6">
            What membership includes
          </motion.p>
          <motion.div variants={stagger} className="space-y-3 mb-8">
            {[
              'One-on-one instruction. Weekly group session.',
              'Structured progression through the complete system.',
              'You train here, in person, in Converse, Texas.',
              'This is not remote. This is not a course.',
            ].map((line, i) => (
              <motion.p key={i} variants={fadeUp} className="font-sans text-sm text-bone/55">
                {line}
              </motion.p>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="font-serif text-lg text-bone/75 italic">
            Men who enter this brotherhood make a serious and ongoing financial commitment to the work.
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
            <h3 className="font-serif text-2xl md:text-3xl text-bone mb-8">
              Application received.
            </h3>
            <p className="body text-bone/65 mb-6">
              Your application will be reviewed by Rafael personally.
            </p>
            <p className="body text-bone/65 mb-6">
              If it advances, you will receive a direct call — not an email, not an automated message. Rafael will reach out within a few days.
            </p>
            <p className="font-serif text-lg text-bone/80 italic">
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
                {errors.fullName && <p data-error className="mt-2 font-sans text-sm text-gold">{errors.fullName}</p>}
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
                  {errors.phone && <p data-error className="mt-2 font-sans text-sm text-gold">{errors.phone}</p>}
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
                  {errors.email && <p data-error className="mt-2 font-sans text-sm text-gold">{errors.email}</p>}
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
                {errors.experience && <p data-error className="mt-2 font-sans text-sm text-gold">{errors.experience}</p>}
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
                {errors.profession && <p data-error className="mt-2 font-sans text-sm text-gold">{errors.profession}</p>}
              </div>

              <div>
                <label className="label block mb-3">Why do you want to enter this brotherhood?</label>
                <textarea
                  rows={5}
                  value={form.whyTrain}
                  onChange={e => set('whyTrain', e.target.value)}
                  className={`field resize-none ${errors.whyTrain ? '!border-gold/60' : ''}`}
                  placeholder="Be specific. Not what you want to learn — why this, why now."
                />
                {errors.whyTrain && <p data-error className="mt-2 font-sans text-sm text-gold">{errors.whyTrain}</p>}
              </div>

              <div>
                <label className="label block mb-3">What do you bring to a group of men at this level?</label>
                <textarea
                  rows={5}
                  value={form.whatYouBring}
                  onChange={e => set('whatYouBring', e.target.value)}
                  className={`field resize-none ${errors.whatYouBring ? '!border-gold/60' : ''}`}
                  placeholder="Skills, disciplines, experience, perspective. What makes you an asset to the men around you?"
                />
                {errors.whatYouBring && <p data-error className="mt-2 font-sans text-sm text-gold">{errors.whatYouBring}</p>}
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
                        px-5 py-4 border text-left font-sans text-sm
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
                  <p className="font-sans text-sm text-bone/65 leading-relaxed mb-5">
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
                            flex items-center gap-3 cursor-pointer font-sans text-sm
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
                  {errors[field] && <p data-error className="mt-3 font-sans text-sm text-gold">{errors[field]}</p>}
                </div>
              ))}
            </div>

            {/* ── Validation banner ──────────────────────────────────────── */}
            {Object.keys(errors).length > 0 && (
              <p className="font-sans text-sm text-gold/80 border border-gold/20 px-5 py-4">
                Please fill in all required fields before submitting.
              </p>
            )}

            {/* ── Error message ──────────────────────────────────────────── */}
            {status === 'error' && (
              <p className="font-sans text-sm text-bone/55 border border-bone/15 px-5 py-4">
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
