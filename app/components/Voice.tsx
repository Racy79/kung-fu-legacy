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
  'I am not building a school. I am building a brotherhood.',
  'What I carry was passed to me through a direct line from Ip Man — through Moy Yat, through my teacher Moy Don. That transmission does not go to everyone. It goes to the men who are ready to receive it and carry it forward.',
  'I am in my late forties. People regularly mistake me for someone in their early thirties. My mind is sharper, my body is stronger, and I live at a standard most men only talk about wanting. That is not a claim. That is what this system builds.',
  'What you enter here is not a program. It is a circle of men — selected, not collected. Men who are building something in their lives, who understand that iron sharpens iron, and who are ready to be held to a standard by the men beside them.',
  'What you get is not just Wing Chun. You get access to everything I have built — how I train, how I eat, how I think, how I lead. Three decades of refinement. And you get the men you were meant to stand with.',
  'If that is what you are looking for, request entry.',
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

        <div className="w-px h-12 bg-gold/30 mb-14" />

        <motion.div variants={stagger} className="space-y-8">
          {lines.slice(0, -1).map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className={`font-serif italic leading-relaxed ${
                i === 0
                  ? 'text-xl md:text-2xl text-bone'
                  : 'text-lg md:text-xl text-bone/80'
              }`}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="gold-line mt-14 mb-14" />

        <motion.p
          variants={fadeUp}
          className="font-serif text-2xl md:text-3xl text-bone"
        >
          {lines[lines.length - 1]}
        </motion.p>

        <div className="w-px h-12 bg-gold/30 mt-14" />

        <motion.p
          variants={fadeUp}
          className="font-sans text-[10px] tracking-[0.3em] uppercase text-bone/30 mt-8"
        >
          Rafael Gonzalez — Sifu
        </motion.p>
      </motion.div>
    </section>
  )
}
