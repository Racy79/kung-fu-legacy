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
  'I am not interested in volume. I am interested in people who are serious.',
  'Most people think they know what they want from training. They don't. They come looking for technique. What they need is structure — and the discipline to build it.',
  'I am in my late forties. People regularly mistake me for someone in their early thirties. My mind is sharper, my body is stronger, and I live at a standard most people only talk about wanting.',
  'That is not a claim. That is what consistent, serious training builds.',
  'What you get here is not just Wing Chun. You get access to everything I have built — how I train, how I eat, how I think. The full model. Three decades of refinement.',
  'If that speaks to you, apply.',
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
          {lines.map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className={`font-serif italic leading-relaxed ${
                i === 0
                  ? 'text-xl md:text-2xl text-bone'
                  : i === lines.length - 1
                  ? 'text-lg text-gold'
                  : 'text-lg md:text-xl text-bone/80'
              }`}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

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
