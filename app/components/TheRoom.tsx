'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
}

const qualities = [
  'Judgment.',
  'Timing.',
  'Perception.',
  'Sensitivity.',
  'Control.',
  'Understanding.',
]

export default function TheRoom() {
  return (
    <section className="section-pad bg-espresso/10">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeUp} className="label mb-14">
          The Pursuit of Mastery
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-10">
          Most people approach martial arts as a collection of techniques.
        </motion.h2>

        <motion.div variants={stagger} className="space-y-8 mb-16">
          <motion.p variants={fadeUp} className="body text-bone/70">
            The serious practitioner eventually discovers that techniques are only the surface. Beneath them exists something more valuable.
          </motion.p>

          <motion.div variants={stagger} className="space-y-3 pl-6 border-l border-gold/20">
            {qualities.map((q, i) => (
              <motion.p key={i} variants={fadeUp} className="kfl-pullquote--authority text-bone/80">
                {q}
              </motion.p>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="body text-bone/70">
            These qualities cannot be downloaded. They cannot be rushed. They are developed through study, practice, correction, and time.
          </motion.p>

          <motion.p variants={fadeUp} className="kfl-pullquote kfl-pullquote--gold">
            This is why serious practitioners throughout history sought direct mentorship. Not because information was unavailable. Because understanding requires guidance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden"
          style={{ aspectRatio: '16/9' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/40258FD4-D377-4396-8635-0D11A9EC97E5.jpeg"
            alt="Wing Chun technique — Kung Fu Legacy"
            className="w-full h-full object-cover object-[40%_25%]"
          />
          <div className="absolute inset-0 bg-black/15" />
        </motion.div>

      </motion.div>
    </section>
  )
}
