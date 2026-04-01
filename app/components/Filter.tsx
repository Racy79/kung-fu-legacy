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
  'You are financially unstable or between commitments.',
  'You are looking for martial arts classes or technique-based instruction.',
  'You bring unresolved instability, bad energy, or the need to negotiate every correction.',
  'You want to receive but are unwilling to contribute to the men around you.',
  'You are looking for a group to fix what you have not yet addressed yourself.',
]

const forYou = [
  'You have built something real — a business, a discipline, a standard — and you are ready to go deeper.',
  'You are tired of being the most capable man in every room with no one to match you.',
  'You understand that what you bring to this group matters as much as what you gain.',
  'You can be led, and you can lead — and you know the difference.',
  'You are ready to enter a lineage, not attend a program.',
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
