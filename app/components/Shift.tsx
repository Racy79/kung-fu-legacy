'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.2 } },
}

const principles = [
  { accent: 'Structure', rest: 'before movement.' },
  { accent: 'Sensitivity', rest: 'before speed.' },
  { accent: 'Control', rest: 'before force.' },
]

export default function Shift() {
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
          The System
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-8">
          This is not a collection of techniques.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-serif text-2xl md:text-3xl text-gold italic mb-24"
        >
          This is a system.
        </motion.p>

        <motion.div variants={stagger} className="mb-24">
          {principles.map(({ accent, rest }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-baseline gap-4 py-7 border-b border-bone/8 last:border-0"
            >
              <span className="font-serif text-2xl md:text-3xl text-gold">{accent}</span>
              <span className="font-sans text-base md:text-lg text-bone/40">{rest}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={stagger} className="space-y-5">
          <motion.p variants={fadeUp} className="body text-bone/70">
            You are not learning what to do.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-serif text-xl md:text-2xl text-bone italic"
          >
            You are building understanding.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
