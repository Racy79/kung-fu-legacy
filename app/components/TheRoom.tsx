'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
}

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
          The Room
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-10">
          You will know the moment you walk in.
        </motion.h2>

        <motion.div variants={stagger} className="space-y-8 mb-20">
          <motion.p variants={fadeUp} className="body text-bone/70">
            This is not a class. It is not an open session. There is no drop-in.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            The men here were selected. They earned the right to be corrected. They hold each other to a standard that most rooms never reach.
          </motion.p>
          <motion.p variants={fadeUp} className="font-serif text-xl md:text-2xl text-bone italic">
            When you walk in, you feel it immediately.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            Not intensity for its own sake. Presence. Structure. Men who take the work seriously — and take each other seriously.
          </motion.p>
          <motion.p variants={fadeUp} className="font-serif text-xl text-gold italic">
            That is what has been missing.
          </motion.p>
        </motion.div>

        {/* ── The Brotherhood ───────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden"
          style={{ aspectRatio: '16/9' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/IMG_3853.png"
            alt="Wing Chun wooden dummy — Kung Fu Legacy"
            className="w-full h-full object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-black/15" />
        </motion.div>

      </motion.div>
    </section>
  )
}
