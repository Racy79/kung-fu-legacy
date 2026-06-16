'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { trackApplyClick } from '../lib/analytics'

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

const stagger = {
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
}

export default function Hero() {
  const scrollToForm = () => {
    trackApplyClick()
    const el = document.getElementById('apply-form')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background Image ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-espresso">
        <Image
          src="/images/hero.jpg"
          alt="Rafael Gonzalez — Kung Fu Legacy"
          fill
          priority
          quality={100}
          className="object-cover object-top md:object-[center_15%] transition-opacity duration-1000"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>

      {/* ── Overlays ───────────────────────────────────────────────────────── */}
      {/* Directional gradient: heavy left, fades right so face stays clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-matte-black to-transparent" />

      {/* ── Hero Content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 xl:px-40 py-32 md:py-40">
        <motion.div
          className="max-w-xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Brand name */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="heading-xl mb-7"
          >
            Kung Fu Legacy
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="kfl-pullquote text-bone/80 mb-4"
          >
            Private Wing Chun Apprenticeship
          </motion.p>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="body text-bone/55 max-w-sm mb-10"
          >
            For individuals who value mastery, direct mentorship, and the preservation of traditional knowledge.
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="gold-line mb-10"
          />

          {/* Body */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-3 mb-10"
          >
            <p className="body max-w-sm">
              This is not a martial arts school.
            </p>
            <p className="body text-bone/60 max-w-sm">
              Private instruction within the Moy Yat lineage for serious practitioners seeking a deeper understanding of the art.
            </p>
          </motion.div>

          {/* List */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-1 mb-12"
          >
            {['Direct correction.', 'Personalized progression.', 'Traditional transmission.', 'By application only.'].map((item, i) => (
              <p key={i} className="kfl-support text-bone/50">{item}</p>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <button onClick={scrollToForm} className="btn">
              Request Entry
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Instructor name lower-right (desktop) ─────────────────────────── */}
      <motion.div
        className="hidden md:block absolute bottom-12 right-12 z-10 text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
      >
        <p className="label opacity-30">Instructor</p>
        <p className="kfl-support text-bone/50 mt-1">Rafael Gonzalez</p>
      </motion.div>
    </section>
  )
}
