'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.2 } },
}

const pairs = [
  { belief: 'Students believe they are learning positions.', reality: 'They are learning structure.' },
  { belief: 'Students believe they are learning drills.', reality: 'They are learning perception.' },
  { belief: 'Students believe they are learning applications.', reality: 'They are learning judgment.' },
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
          The Invisible Curriculum
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-8">
          Most students believe they are learning techniques.
        </motion.h2>

        <motion.p variants={fadeUp} className="kfl-pullquote--authority mb-20">
          In reality, they are developing capacities.
        </motion.p>

        <motion.div variants={stagger} className="mb-20">
          {pairs.map(({ belief, reality }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="py-8 border-b border-bone/8 last:border-0"
            >
              <p className="body text-bone/45 mb-2">{belief}</p>
              <p className="kfl-pullquote--authority text-bone">{reality}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={stagger} className="space-y-4">
          <motion.p variants={fadeUp} className="body text-bone/70">
            The techniques are the vehicle.
          </motion.p>
          <motion.p variants={fadeUp} className="kfl-pullquote text-bone">
            The development is the destination.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
