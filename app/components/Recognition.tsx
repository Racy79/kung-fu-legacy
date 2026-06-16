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
            Group instruction is designed for groups. The instructor manages the room. Corrections are necessarily general. Progression moves at the pace of a shared curriculum, not at the pace of you. That format has a ceiling.
          </motion.p>
          <motion.p variants={fadeUp} className="kfl-pullquote">
            Private instruction removes the ceiling.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            Every correction in a private session is specific to your body, your structure, your particular misunderstanding of a principle. There is no averaging. No managing a room. The session is entirely yours, and the instruction is built entirely around where you actually are.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            When instruction is that specific, development accelerates. Not because the material is different — because the attention is undivided.
          </motion.p>
          <motion.p variants={fadeUp} className="kfl-pullquote kfl-pullquote--gold">
            If you want to understand Wing Chun — not just train in it — this is the model that makes that possible.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
