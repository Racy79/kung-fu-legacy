'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
}

const developments = [
  'Structure',
  'Sensitivity',
  'Precision',
  'Control',
  'Discipline',
  'Presence',
]

export default function Experience() {
  return (
    <section className="section-pad bg-matte-black">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeUp} className="label mb-14">
          Training
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-16">
          Training here is different.
        </motion.h2>

        {/* Italic challenge lines */}
        <motion.div variants={stagger} className="space-y-5 mb-16">
          {[
            'You will be corrected.',
            'You will be challenged.',
            'You will be held accountable.',
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="font-serif text-xl md:text-2xl text-bone/65 italic"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="gold-line mb-16" />

        <motion.p
          variants={fadeUp}
          className="font-serif text-xl md:text-2xl text-bone mb-16"
        >
          Progress is earned.
        </motion.p>

        <motion.p variants={fadeUp} className="label mb-10">
          You will develop:
        </motion.p>

        {/* Development grid */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-bone/8 mb-16"
        >
          {developments.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-matte-black px-6 py-8 hover:bg-espresso/30 transition-colors duration-500"
            >
              <p className="font-serif text-xl md:text-2xl text-bone">{item}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Understanding callout */}
        <motion.div
          variants={fadeUp}
          className="border-l-2 border-gold pl-8 py-2"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-bone/55 mb-4">
            And something most never reach:
          </p>
          <p className="font-serif text-2xl md:text-3xl text-gold">
            Understanding.
          </p>
        </motion.div>

        {/* What you train */}
        <motion.div variants={fadeUp} className="mt-20 pt-16 border-t border-bone/[0.06]">
          <p className="label mb-12">What you train</p>
          <div className="space-y-0 divide-y divide-bone/[0.06]">
            {[
              { name: 'Siu Lim Tao', description: 'The first form. Structure, root, and the economy of motion.' },
              { name: 'Chum Kiu', description: 'Bridging and footwork. How to enter, turn, and control space.' },
              { name: 'Biu Jee', description: 'Emergency techniques and extreme-angle striking.' },
              { name: 'Chi Sao', description: 'Sticky hands. Sensitivity, reflexes, and live application — the core of Wing Chun sparring.' },
              { name: 'Muk Yan Jong', description: 'The wooden dummy. Angles, combinations, and contact conditioning.' },
            ].map(({ name, description }) => (
              <div key={name} className="py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                <p className="font-serif text-lg text-bone flex-shrink-0 sm:w-44">{name}</p>
                <p className="font-sans text-sm text-bone/45 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Training Image ──────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="relative h-72 md:h-[420px] overflow-hidden mt-20 group"
        >
          <img
            src="/images/40258FD4-D377-4396-8635-0D11A9EC97E5.jpeg"
            alt="Wing Chun training"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
