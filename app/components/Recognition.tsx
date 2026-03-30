'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
}

const lines = [
  {
    primary: 'You have seen techniques.',
    secondary: 'But never understood structure.',
  },
  {
    primary: 'You know you are capable of more.',
    secondary: 'But no one has shown you how to develop it.',
  },
  {
    primary: null,
    secondary: 'And you have not yet found the structure to build it.',
  },
]

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
        <motion.p variants={fadeUp} className="label mb-14">
          Recognition
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-12">
          You have trained.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-serif text-xl md:text-2xl text-bone/50 italic mb-20"
        >
          But something has always been missing.
        </motion.p>

        <motion.div variants={stagger} className="space-y-10">
          {lines.map(({ primary, secondary }, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border-l border-gold/25 pl-8"
            >
              {primary && (
                <p className="body mb-2 text-bone/80">{primary}</p>
              )}
              <p className="body text-bone/40">{secondary}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
