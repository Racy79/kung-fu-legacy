'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
}

const curriculum = [
  {
    name: 'Siu Nim Tao',
    belief: 'Students believe they are learning a form.',
    development: 'They are developing structure, centerline awareness, balance, distance recognition, and the beginning of perceptual skill. The first lesson is not fighting. The first lesson is learning how to see.',
  },
  {
    name: 'Chum Kiu',
    belief: 'Students believe they are learning movement.',
    development: 'They are learning adjustment based on necessity. Reality changes. Distance changes. Pressure changes. Position changes. The practitioner learns how to preserve principles while adapting to changing conditions.',
  },
  {
    name: 'Biu Jee',
    belief: 'Students believe they are learning advanced techniques.',
    development: 'They are learning restoration. When ideal conditions are lost, structure collapses, or control disappears, the practitioner learns how to restore the system.',
  },
  {
    name: 'Chi Sao',
    belief: 'Students learn to gather information through contact.',
    development: 'Pressure. Timing. Rhythm. Intent. Opportunity. Rather than relying on prediction, they learn to interpret what is actually happening.',
  },
  {
    name: 'Muk Yan Jong',
    belief: 'The Wooden Dummy refines positioning, structure, angles, and application.',
    development: 'Students begin seeing how the system functions as a whole rather than as isolated techniques.',
  },
  {
    name: 'Luk Dim Boon Gwun',
    belief: 'The Long Pole magnifies flaws.',
    development: 'Weak structure becomes obvious. Poor alignment becomes obvious. Students develop intent, alignment, power generation, and precision.',
  },
  {
    name: 'Bart Cham Dao',
    belief: 'The Butterfly Swords reveal deeper layers of the same principles already present in the empty-hand system.',
    development: 'The weapons do not create a new system. They reveal the logic of the existing one.',
  },
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
          What You Are Actually Learning
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-16">
          The curriculum is visible. The development is not.
        </motion.h2>

        <motion.div variants={stagger} className="space-y-0 divide-y divide-bone/[0.06]">
          {curriculum.map(({ name, belief, development }) => (
            <motion.div key={name} variants={fadeUp} className="py-10">
              <p className="kfl-pullquote not-italic text-bone mb-4">{name}</p>
              <p className="body text-bone/40 mb-3">{belief}</p>
              <p className="kfl-support text-bone/65">{development}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative h-72 md:h-[420px] overflow-hidden mt-20 group"
        >
          <img
            src="/images/IMG_3853.png"
            alt="Muk Yan Jong — wooden dummy training"
            className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
