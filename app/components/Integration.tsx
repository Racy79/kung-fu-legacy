'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
}

const distinctions = [
  'Every correction is personal.',
  'Every lesson is specific.',
  'Every weakness is addressed directly.',
  'Every misunderstanding can be explored completely.',
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
          Why Private Instruction
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-8">
          Group instruction is valuable.<br />Private instruction is different.
        </motion.h2>

        <motion.p variants={fadeUp} className="kfl-pullquote text-bone/65 mb-20">
          The material may be the same.<br />The attention is not.
        </motion.p>

        <motion.p variants={fadeUp} className="label mb-10">
          In private instruction:
        </motion.p>

        <motion.div variants={stagger} className="space-y-0 divide-y divide-bone/[0.06] mb-20">
          {distinctions.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="flex gap-6 py-7">
              <div className="w-px bg-gold/25 flex-shrink-0" />
              <p className="kfl-pullquote--authority text-bone/80">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="kfl-pullquote kfl-pullquote--gold">
          The goal is not more information.<br />The goal is greater clarity.
        </motion.p>
      </motion.div>
    </section>
  )
}
