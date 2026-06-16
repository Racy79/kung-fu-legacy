'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
}

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
          Instructor Development
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-12">
          The primary purpose of Kung Fu Legacy is private instruction.
        </motion.h2>

        <motion.div variants={stagger} className="space-y-6">
          <motion.p variants={fadeUp} className="body text-bone/70">
            However, exceptional students may eventually be invited into instructor development.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            This path is not purchased. It is earned through character, consistency, understanding, teaching ability, and long-term commitment.
          </motion.p>
          <motion.p variants={fadeUp} className="kfl-pullquote text-bone/60">
            Most students will never pursue this path.<br />
            Some will.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
