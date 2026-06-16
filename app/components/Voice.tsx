'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.2 } },
}

const lines = [
  'Most instructors teach you what to do. Some can teach you how to do it. Very few can explain the architecture beneath the system — why each principle exists, how the elements connect, what the art is actually developing in you. That is what I teach.',
  'My instruction is grounded in the Moy Yat lineage through Thornton Williams (Moy Don). I hold Jui Pai within that lineage — the full transmission of the system, including the elements most students never reach.',
  'Sessions are private. One student. One instructor. No shared schedule, no curriculum moving at the pace of a group, no correction averaged across a room. Every session is built around where you actually are.',
  'Some students who develop serious competence may eventually be invited into instructor development. That is not the expectation at entry. The expectation at entry is that you want to understand Wing Chun — not just train in it.',
  'If that is what you are looking for, apply.',
]

export default function Voice() {
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
          From the Instructor
        </motion.p>

        {/* Portrait */}
        <motion.div variants={fadeUp} className="flex flex-col items-center mb-14">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-gold/25">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero.jpg"
              alt="Rafael Gonzalez — Sifu, Kung Fu Legacy"
              className="w-full h-full object-cover object-[65%_20%]"
            />
          </div>
          <p className="label opacity-30 mt-4">
            Rafael Gonzalez &nbsp;·&nbsp; Sifu
          </p>
        </motion.div>

        <div className="w-px h-12 bg-gold/30 mb-14" />

        <motion.div variants={stagger} className="space-y-8">
          {lines.slice(0, -1).map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className={i === 0 ? 'kfl-pullquote text-bone' : 'kfl-pullquote text-bone/80'}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="gold-line mt-14 mb-14" />

        <motion.p variants={fadeUp} className="kfl-pullquote--authority">
          {lines[lines.length - 1]}
        </motion.p>

        <div className="w-px h-12 bg-gold/30 mt-14" />
      </motion.div>
    </section>
  )
}
