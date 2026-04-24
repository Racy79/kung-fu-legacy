'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
}

const requirements = [
  {
    label: 'Presence',
    body: 'Physical, regular. This is not a course you manage around your schedule.',
  },
  {
    label: 'Openness',
    body: 'You enter as a student. The men here have earned the right to hold you to a standard — and they will.',
  },
  {
    label: 'Contribution',
    body: 'What you bring to the men beside you matters as much as what you develop here.',
  },
]

export default function Requirement() {
  return (
    <section className="section-pad bg-matte-black border-t border-bone/5">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeUp} className="label mb-14">
          What this requires
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-8">
          Three things. Not in addition to what you carry.
        </motion.h2>

        <motion.p variants={fadeUp} className="kfl-pullquote text-bone/60 mb-20">
          As a condition of entry.
        </motion.p>

        <motion.div variants={stagger} className="space-y-0 divide-y divide-bone/[0.06]">
          {requirements.map(({ label, body }, i) => (
            <motion.div key={i} variants={fadeUp} className="flex gap-8 py-10">
              <div className="w-px bg-gold/30 flex-shrink-0" />
              <div>
                <p className="kfl-h3 font-normal text-bone mb-2">{label}</p>
                <p className="kfl-support text-bone/55">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="label text-bone/40 mt-14">
          These are not expectations. They are the conditions of entry.
        </motion.p>

      </motion.div>
    </section>
  )
}
