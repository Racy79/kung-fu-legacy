'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { trackApplyClick } from '../lib/analytics'

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

const stagger = {
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.5 },
  },
}

export default function Hero() {
  const scrollToForm = () => {
    trackApplyClick()
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
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
          {/* Location pill */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="label mb-10 flex items-center gap-3"
          >
            <span className="w-4 h-px bg-gold inline-block" />
            Converse, Texas
          </motion.p>

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
            className="font-serif text-xl md:text-2xl text-bone/80 italic mb-10"
          >
            Build the structure that carries you.
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
            className="space-y-5 mb-14"
          >
            <p className="body max-w-sm">
              Kung Fu is not something you attend.<br />
              It is something you inherit, refine, and embody.
            </p>
            <p className="body max-w-sm">
              For those seeking discipline, clarity, and real development,
              this is where it begins.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <button onClick={scrollToForm} className="btn">
              Apply for Training
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
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-bone/30">
          Instructor
        </p>
        <p className="font-serif text-base text-bone/50 mt-1">
          Rafael Gonzalez
        </p>
      </motion.div>
    </section>
  )
}
