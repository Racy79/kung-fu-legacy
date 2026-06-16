'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
}

const values = [
  'Mastery.',
  'Craftsmanship.',
  'Tradition.',
  'Direct mentorship.',
  'Personal responsibility.',
  'Long-term development.',
]

export default function Filter() {
  return (
    <section className="section-pad bg-espresso/15">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeUp} className="label mb-14">
          Who This Is For
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-12">
          This is for individuals who value:
        </motion.h2>

        <motion.div variants={stagger} className="space-y-0 divide-y divide-bone/[0.06] mb-20">
          {values.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="flex items-center gap-6 py-6">
              <div className="w-px h-6 bg-gold/25 flex-shrink-0" />
              <p className="kfl-pullquote--authority text-bone/80">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={stagger} className="space-y-5">
          <motion.p variants={fadeUp} className="body text-bone/70">
            You do not need previous martial arts experience.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            You do need seriousness. You do need commitment. And you do need a genuine desire to learn.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
