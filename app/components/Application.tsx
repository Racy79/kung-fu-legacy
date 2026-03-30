'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { trackFormSubmit } from '../lib/analytics'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  fullName: string
  phone: string
  email: string
  experience: string
  whyTrain: string
  developGoals: string[]
  commitToTraining: string
  acceptChallenge: string
  willTravel: string
}

const INITIAL: FormData = {
  fullName: '',
  phone: '',
  email: '',
  experience: '',
  whyTrain: '',
  developGoals: [],
  commitToTraining: '',
  acceptChallenge: '',
  willTravel: '',
}

const GOALS = ['Structure', 'Discipline', 'Self Defense', 'Personal Growth']

const QUALIFIERS: { field: keyof FormData; question: string }[] = [
  {
    field: 'commitToTraining',
    question: 'Are you willing to commit to consistent training and correction?',
  },
  {
    field: 'acceptChallenge',
    question: 'Are you ready to be challenged and held accountable?',
  },
  {
    field: 'willTravel',
    question: 'Are you willing to travel consistently for training if required?',
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

  const set = (field: keyof FormData, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const toggleGoal = (goal: string) =>
    setForm(prev => ({
      ...prev,
      developGoals: prev.developGoals.includes(goal)
        ? prev.developGoals.filter(g => g !== goal)
        : [...prev.developGoals, goal],
    }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error(`Response ${res.status}`)

      trackFormSubmit()
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg(
        'Something went wrong. Please try again or contact us directly.'
      )
    }
  }

  return (
    <section id="apply" className="section-pad bg-matte-black">
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
          Entry is limited.
        </motion.h2>

        <motion.div variants={stagger} className="space-y-3 mb-8">
          <motion.p variants={fadeUp} className="body text-bone/50">
            Not because of space.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/50">
            Because of standard.
          </motion.p>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-serif text-xl text-bone/75 italic mb-10"
        >
          This requires commitment.<br />
          But it gives you what casual training never will.
        </motion.p>

        <motion.p variants={fadeUp} className="body text-bone/35 mb-16">
          If this speaks to you, apply below.
        </motion.p>

        <motion.div variants={fadeUp} className="gold-line mb-16" />

        {/* ── Success State ─────────────────────────────────────────────────── */}
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center py-20"
          >
            <div className="w-px h-14 bg-gold/30 mx-auto mb-14" />
            <h3 className="font-serif text-2xl md:text-3xl text-bone mb-8">
              Application received.
            </h3>
            <p className="body text-bone/50 mb-2">Applications are reviewed.</p>
            <p className="body text-bone/50">If accepted, you will be contacted.</p>
            <div className="w-px h-14 bg-gold/30 mx-auto mt-14" />
          </motion.div>
        ) : (
          /* ── Form ───────────────────────────────────────────────────────── */
          <form onSubmit={handleSubmit} className="space-y-12" noValidate>
            <h3 className="font-serif text-2xl text-bone">Apply for Training</h3>

            {/* ── Basic fields ───────────────────────────────────────────── */}
            <div className="space-y-6">
              <div>
                <label className="label block mb-3">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={e => set('fullName', e.target.value)}
                  className="field"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="label block mb-3">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => set('phone', e.target.value)}
                    className="field"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="label block mb-3">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    className="field"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="label block mb-3">Training Experience</label>
                <div className="relative">
                  <select
                    required
                    value={form.experience}
                    onChange={e => set('experience', e.target.value)}
                    className="field appearance-none cursor-pointer bg-matte-black pr-10"
                  >
                    <option value="" disabled>Select your background</option>
                    <option value="none">None</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  {/* Custom select arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-bone/30">
                    <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
                      <path d="M1 1L5.5 6L10 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="label block mb-3">Why do you want to train?</label>
                <textarea
                  required
                  rows={5}
                  value={form.whyTrain}
                  onChange={e => set('whyTrain', e.target.value)}
                  className="field resize-none"
                  placeholder="Be specific."
                />
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
                  <div className="flex gap-8">
                    {['Yes', 'No'].map(opt => {
                      const val = opt.toLowerCase()
                      const checked = form[field] === val
                      return (
                        <label
                          key={opt}
                          className={`
                            flex items-center gap-3 cursor-pointer font-sans text-sm
                            transition-colors duration-300
                            ${checked ? 'text-gold' : 'text-bone/45 hover:text-bone/70'}
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
                </div>
              ))}
            </div>

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
                {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  )
}
