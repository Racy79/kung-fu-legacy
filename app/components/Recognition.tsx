'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
}

export default function Recognition() {
  return (
    <section className="section-pad bg-matte-black">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.h2 variants={fadeUp} className="heading-lg mb-12">
          In a world of mass-produced instruction, some forms of knowledge are still best transmitted directly.
        </motion.h2>

        <motion.div variants={stagger} className="space-y-8">
          <motion.p variants={fadeUp} className="kfl-pullquote text-bone/60">
            Wing Chun was never meant to be consumed.<br />
            It was meant to be studied.<br />
            The difference is significant.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            Most modern instruction is designed to accommodate groups. It must serve beginners and advanced students simultaneously. It must move at a pace that works for everyone.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            Private instruction solves a different problem. It allows the student and instructor to focus entirely on the student&apos;s development.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            Every correction belongs to you. Every lesson is shaped around your strengths, weaknesses, questions, and progress.
          </motion.p>
          <motion.p variants={fadeUp} className="kfl-pullquote kfl-pullquote--gold">
            The objective is not simply to learn more.<br />
            The objective is to understand more deeply.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
