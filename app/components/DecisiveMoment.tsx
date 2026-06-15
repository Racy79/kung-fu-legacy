'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

export default function DecisiveMoment() {
  return (
    <section className="section-pad bg-espresso/10">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="w-px h-16 bg-gold/20 mx-auto mb-20" />

        <motion.p variants={fadeUp} className="kfl-pullquote text-bone mb-8 text-center">
          Group instruction reaches a natural limit.
        </motion.p>

        <motion.p variants={fadeUp} className="kfl-pullquote text-bone mb-16 text-center">
          Private transmission does not.
        </motion.p>

        <motion.div variants={fadeUp} className="gold-line mb-16" />

        <motion.p
          variants={fadeUp}
          className="body text-bone/65 text-center mb-6"
        >
          If you have trained seriously and found yourself wanting instruction that goes deeper than what a class can offer — that is not a common situation. Most practitioners never reach it.
        </motion.p>

        <motion.p variants={fadeUp} className="kfl-pullquote kfl-pullquote--gold text-center">
          The application is the first step. It is also the first assessment.
        </motion.p>

        <div className="w-px h-16 bg-gold/20 mx-auto mt-20" />
      </motion.div>
    </section>
  )
}
