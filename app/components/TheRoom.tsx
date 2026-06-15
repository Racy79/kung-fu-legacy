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
          The Practice
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-10">
          This is not a class. It is not a program.
        </motion.h2>

        <motion.div variants={stagger} className="space-y-8 mb-20">
          <motion.p variants={fadeUp} className="body text-bone/70">
            There is no drop-in. No shared curriculum on a fixed schedule. No managing a room of students at different levels.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            Private instruction means the session belongs entirely to the student in front of the instructor. The correction is direct. The progression is specific to where you actually are — not where a syllabus says you should be.
          </motion.p>
          <motion.p variants={fadeUp} className="kfl-pullquote">
            The instruction adapts to the student. Not the other way around.
          </motion.p>
          <motion.p variants={fadeUp} className="body text-bone/70">
            This is the model through which serious Wing Chun has always been transmitted. Not distributed to a group. Given to an individual who has earned the right to receive it.
          </motion.p>
          <motion.p variants={fadeUp} className="kfl-pullquote kfl-pullquote--gold">
            Enrollment is limited. That limitation is the point.
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
