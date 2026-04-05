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
  'You are between stable commitments or looking for something to try.',
  'You want technique. This is not technique-based instruction.',
  'You are not ready to be corrected without resistance.',
  'You want to take from this room more than you give.',
  'You are looking for something external to address what you have not yet faced yourself.',
]

const forYou = [
  'You have built something real and you are ready to go deeper than you can go alone.',
  'You are the most capable man in most rooms — and that has started to feel like a ceiling.',
  'You understand that what you bring matters as much as what you gain.',
  'You can be led. You can lead. And you know when to do each.',
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
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-12">
              This is not for you if:
            </p>
            <ul className="space-y-7">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <p className="body text-bone/80">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* For you */}
          <motion.div variants={fadeUp}>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-12">
              This is for you if:
            </p>
            <ul className="space-y-7">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
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
