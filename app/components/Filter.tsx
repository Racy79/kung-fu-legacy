'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
}

const notForYou = [
  'You are looking for something to try. Private instruction is not a trial.',
  'You want to accumulate techniques. This instruction develops understanding, not inventory.',
  'You are not prepared to receive direct correction without resistance.',
  'You are unwilling to practice seriously between sessions — the work does not happen only in the room.',
  'You are looking for personal development with martial arts as the vehicle. The art is the point here.',
]

const forYou = [
  'You have trained and reached the limit of what group instruction can give you.',
  'You want to understand Wing Chun — not just perform it.',
  'You are willing to be corrected directly and specifically, without explanation or defense.',
  'You understand that in a serious lineage, what you receive is proportional to what you bring to it.',
  'You are ready to enter a lineage — not attend a program.',
]

export default function Filter() {
  return (
    <section className="section-pad bg-espresso/15">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-28">

          {/* Not for you */}
          <motion.div variants={fadeUp}>
            <p className="label mb-12">
              This is not for you if:
            </p>
            <ul className="space-y-7">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-bone/30 flex-shrink-0" />
                  <p className="body text-bone/80">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* For you */}
          <motion.div variants={fadeUp}>
            <p className="label mb-12">
              This is for you if:
            </p>
            <ul className="space-y-7">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-bone/30 flex-shrink-0" />
                  <p className="body text-bone/80">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
