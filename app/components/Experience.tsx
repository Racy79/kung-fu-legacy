'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
}

const developments = [
  'Structure',
  'Sensitivity',
  'Precision',
  'Control',
  'Discipline',
  'Presence',
]

export default function Experience() {
  return (
    <section className="section-pad bg-matte-black">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeUp} className="label mb-14">
          Training
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-16">
          Training here is different.
        </motion.h2>

        {/* Italic challenge lines */}
        <motion.div variants={stagger} className="space-y-5 mb-16">
          {[
            'You will be corrected.',
            'You will be challenged.',
            'You will be held accountable.',
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="font-serif text-xl md:text-2xl text-bone/65 italic"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="gold-line mb-16" />

        <motion.p
          variants={fadeUp}
          className="font-serif text-xl md:text-2xl text-bone mb-16"
        >
          Progress is earned.
        </motion.p>

        <motion.p variants={fadeUp} className="label mb-10">
          You will develop:
        </motion.p>

        {/* Development grid */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-bone/8 mb-16"
        >
          {developments.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-matte-black px-6 py-8 hover:bg-espresso/30 transition-colors duration-500"
            >
              <p className="font-serif text-xl md:text-2xl text-bone">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Understanding callout */}
        <motion.div
          variants={fadeUp}
          className="border-l-2 border-gold pl-8 py-2"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-bone/55 mb-4">
            And something most never reach:
          </p>
          <p className="font-serif text-2xl md:text-3xl text-gold">
            Understanding.
          </p>
        </motion.div>

        {/* ── Training Image Placeholder 2 ──────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="relative h-72 md:h-[420px] overflow-hidden mt-20 group"
        >
          <div className="absolute inset-0 bg-espresso/50 border border-bone/8 flex items-center justify-center">
            <p className="label opacity-30">Training Photo — Drills</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
