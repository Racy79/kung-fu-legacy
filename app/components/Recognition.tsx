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
        <motion.p variants={fadeUp} className="label mb-14">
          Recognition
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-12">
          You are not looking for another class.
        </motion.h2>

        <motion.div variants={stagger} className="space-y-8">
          <motion.p variants={fadeUp} className="body text-bone/70">
            You have trained. You have developed. At some point, group instruction reaches the limit of what it can give you — not because the instruction was poor, but because the format cannot do what individual transmission does.
          </motion.p>
          <motion.p variants={fadeUp} className="kfl-pullquote">
            Technique can be taught in a class. Understanding requires direct transmission.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            What changes in private instruction is not the material. It is the quality of attention. Every correction is specific to you — your structure, your timing, your particular misunderstanding of the principle. There is no averaging. No managing a room. One instructor. One student. The art between them.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            This is how Wing Chun has always been transmitted at its deepest levels. Not distributed across a class. Passed directly — from someone who holds it to someone capable of receiving it.
          </motion.p>
          <motion.p variants={fadeUp} className="kfl-pullquote kfl-pullquote--gold">
            If that is what you have been looking for, you are in the right place.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
