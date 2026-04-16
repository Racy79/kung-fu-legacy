'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
}

const lineage = [
  { name: 'Ip Man', honorific: null },
  { name: 'Moy Yat', honorific: null },
  { name: 'Thornton Williams', honorific: 'Moy Don' },
  { name: 'Rafael Gonzalez', honorific: 'Moy Don Xùn' },
]

const closing = [
  'Refined through years of practice.',
  'Tested through real students.',
  'Preserved with intention.',
]

export default function Legacy() {
  return (
    <section className="section-pad bg-matte-black">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeUp} className="label mb-14">
          Legacy
        </motion.p>

        <motion.h2 variants={fadeUp} className="heading-lg mb-8">
          Built on direct transmission.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-serif text-xl text-bone/60 italic mb-20"
        >
          This is not learned casually.<br />
          It is passed, refined, and earned.
        </motion.p>

        {/* ── Lineage Chain ─────────────────────────────────────────────────── */}

        {/* Desktop: horizontal */}
        <motion.div
          variants={stagger}
          className="hidden md:flex items-center gap-0 flex-wrap mb-20"
        >
          {lineage.map(({ name, honorific }, i) => (
            <motion.div key={i} variants={fadeUp} className="flex items-center">
              <div className="text-center px-1">
                <p className="font-serif text-lg text-bone">{name}</p>
                {honorific && (
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mt-1">
                    {honorific}
                  </p>
                )}
              </div>
              {i < lineage.length - 1 && (
                <span className="text-gold/30 mx-5 text-xl font-thin select-none">—</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: vertical */}
        <motion.div
          variants={stagger}
          className="flex md:hidden flex-col mb-20"
        >
          {lineage.map(({ name, honorific }, i) => (
            <motion.div key={i} variants={fadeUp} className="flex items-start gap-5">
              <div className="flex flex-col items-center pt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {i < lineage.length - 1 && (
                  <div className="w-px flex-1 bg-gold/20 mt-1 mb-0 min-h-[40px]" />
                )}
              </div>
              <div className="pb-7">
                <p className="font-serif text-lg text-bone">{name}</p>
                {honorific && (
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mt-1">
                    {honorific}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Capacity ──────────────────────────────────────────────────────── */}
        <motion.p variants={fadeUp} className="body text-bone/55 mb-20">
          This brotherhood holds a maximum of fifteen men.
        </motion.p>

        {/* ── Training Image ─────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden mb-20 border border-gold/30"
        >
          <Image
            src="/images/group-photo.jpg"
            alt="Kung Fu Legacy — Rafael Gonzalez with students"
            width={1200}
            height={800}
            quality={100}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black/25" />
        </motion.div>

        {/* ── Closing lines ─────────────────────────────────────────────────── */}
        <motion.div variants={stagger} className="space-y-4">
          {closing.map((text, i) => (
            <motion.p key={i} variants={fadeUp} className="body text-bone/65">
              {text}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
