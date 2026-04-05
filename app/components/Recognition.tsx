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
          You are not here because something is broken.
        </motion.h2>

        <motion.div variants={stagger} className="space-y-8">
          <motion.p variants={fadeUp} className="body text-bone/70">
            You have built something real. You show up. You hold the standard. You have been doing this long enough that most of the people around you have become background. They respect you. Some admire you. They defer to you in the room.
          </motion.p>
          <motion.p variants={fadeUp} className="font-serif text-xl md:text-2xl text-bone italic">
            None of them can actually challenge you.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            That is the absence you have been feeling. Not a gap in your training. Not a need for more structure. A room that has been empty for a long time. Men who are operating at the level you are. Who will tell you the truth. Who carry enough themselves to have earned the right to say it.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            That kind of brotherhood does not happen by accident. It is built through shared practice, shared pressure, and time. It has a structure. It has a lineage. It asks something real from the men inside it.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            You have been patient with the absence. You have worked around it. You have filled the space with output, with achievement, with forward motion. But you feel it.
          </motion.p>
          <motion.p variants={fadeUp} className="font-serif text-xl md:text-2xl text-gold italic">
            Most men stop looking for it. They settle. You are still looking. That is why you are here.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
