'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.2 } },
}

const capacities = [
  'Perception.',
  'Sensitivity.',
  'Timing.',
  'Distance.',
  'Adaptation.',
  'Judgment.',
  'Understanding.',
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

          <motion.p variants={fadeUp} className="body text-bone/70">
            Like many practitioners, I spent years learning forms, drills, applications, and techniques.
          </motion.p>

          <motion.p variants={fadeUp} className="body text-bone/70">
            Over time I noticed something that troubled me. Many skilled practitioners could perform the movements, yet struggled to explain the deeper reasoning behind them. They knew what to do. Some knew how to do it. Very few could clearly explain why.
          </motion.p>

          <motion.p variants={fadeUp} className="body text-bone/70">
            The longer I trained, the more I realized that the most important lessons in the system were often the least discussed.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-3 pl-6 border-l border-bone/15">
            <p className="body text-bone/55">Students learned forms, but rarely discussed what those forms were trying to develop.</p>
            <p className="body text-bone/55">Students learned drills, but rarely discussed the capacities being cultivated through those drills.</p>
            <p className="body text-bone/55">Students learned applications, but rarely discussed the principles connecting them together.</p>
          </motion.div>

          <motion.p variants={fadeUp} className="kfl-pullquote text-bone">
            This became an obsession for me.
          </motion.p>

          <motion.p variants={fadeUp} className="body text-bone/70">
            Not simply learning the system. Understanding it. I began spending years examining how the pieces connected. Why certain things were taught first. Why other things appeared later. Why concepts repeated themselves throughout the curriculum. Why lessons introduced in one area of training reappeared years later in another.
          </motion.p>

          <motion.p variants={fadeUp} className="kfl-pullquote text-bone/60">
            Eventually I came to a conclusion:
          </motion.p>

          <motion.p variants={fadeUp} className="kfl-pullquote text-bone">
            Most practitioners are not merely learning techniques. They are developing capacities.
          </motion.p>

          <motion.div variants={stagger} className="space-y-2 pl-6 border-l border-gold/25">
            {capacities.map((c, i) => (
              <motion.p key={i} variants={fadeUp} className="kfl-pullquote--authority text-bone/80">
                {c}
              </motion.p>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="body text-bone/70">
            The techniques are important. But they are not the destination. They are the vehicle.
          </motion.p>

          <motion.p variants={fadeUp} className="body text-bone/70">
            Today, my greatest passion is helping students see what many practitioners spend decades overlooking. Not simply how to perform the art. But how to understand it.
          </motion.p>

          <motion.p variants={fadeUp} className="kfl-pullquote kfl-pullquote--gold">
            Because when understanding improves, everything else improves with it.
          </motion.p>

        </motion.div>

        <motion.div variants={fadeUp} className="gold-line mt-14 mb-14" />

        <motion.div variants={stagger} className="space-y-4">
          <motion.p variants={fadeUp} className="kfl-pullquote--authority">
            My goal is not to create students who depend on me.
          </motion.p>
          <motion.p variants={fadeUp} className="kfl-pullquote--authority">
            My goal is to help students see the art clearly enough to continue growing long after the lesson ends.
          </motion.p>
        </motion.div>

        <div className="w-px h-12 bg-gold/30 mt-14" />
      </motion.div>
    </section>
  )
}
