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
  'Throughout my years of training and teaching, I became increasingly aware of a problem.',
  'Many practitioners know what to do. Far fewer understand why. They learn forms without understanding their purpose. They learn drills without understanding what those drills are developing. They learn applications without understanding the principles that make them work.',
  'My work is helping students bridge that gap. Not by teaching more techniques. But by helping them understand the architecture beneath the art.',
  'The goal is not accumulation. The goal is understanding.',
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
          From Rafael
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
