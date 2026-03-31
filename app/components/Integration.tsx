'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
}

const pillars = [
  { headline: 'Strength is built.', sub: 'Physical and mental.' },
  { headline: 'Clarity is trained.', sub: 'In movement. In thought.' },
  { headline: 'Discipline is lived.', sub: 'Not performed.' },
]

export default function Integration() {
  return (
    <section className="section-pad bg-espresso/20">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeUp} className="label mb-14">
          Integration
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-8">
          This goes beyond fighting.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-serif text-xl md:text-2xl text-bone/65 italic mb-20"
        >
          It shapes how you move, think, and carry yourself.
        </motion.p>

        {/* Core attributes */}
        <motion.div variants={stagger} className="space-y-7 mb-20">
          {['Your structure.', 'Your discipline.', 'Your awareness.'].map((text, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="font-serif text-2xl md:text-3xl text-bone"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="gold-line mb-20" />

        <motion.p variants={fadeUp} className="font-serif text-xl text-gold mb-20">
          Training does not stay on the floor.
        </motion.p>

        {/* Pillars */}
        <motion.div variants={stagger} className="space-y-10">
          {pillars.map(({ headline, sub }, i) => (
            <motion.div key={i} variants={fadeUp} className="flex gap-6">
              <div className="w-px bg-gold/25 flex-shrink-0" />
              <div>
                <p className="font-serif text-xl text-bone mb-1">{headline}</p>
                <p className="font-sans text-sm text-bone/55">{sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Training Image Placeholder 3 ──────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="relative h-72 md:h-[420px] overflow-hidden mt-20"
        >
          <div className="absolute inset-0 bg-espresso/50 border border-bone/8 flex items-center justify-center">
            <p className="label opacity-30">Training Photo — Structure Work</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
