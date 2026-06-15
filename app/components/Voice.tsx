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
  'I am not building a school. I am transmitting an art.',
  'What I carry was passed to me through a direct line from Yip Man (Ip Man) — through Moy Yat, through my teacher Moy Don (Thornton Williams). I hold Jui Pai within this lineage. That transmission does not go to everyone. It goes to practitioners who are ready to receive it and capable of carrying it forward.',
  'Most instruction teaches what to do. Fewer instructors can explain how. Almost none articulate why — the architecture behind the system, how each principle connects to the next, why the art works the way it does at its deepest level. That understanding is what I transmit.',
  'What you enter here is not a program with a fixed schedule. It is a private instruction relationship. The progression is yours — specific to your structure, your development, your understanding. The standard belongs to the art.',
  'Some students who develop serious competence may eventually be invited into instructor development. That path is not for sale and not guaranteed. It is earned through demonstrated character, consistency, and teaching capacity — over time, under observation.',
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
