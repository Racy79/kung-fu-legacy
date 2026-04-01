'use client'

import { motion } from 'framer-motion'
import { trackApplyClick } from '../lib/analytics'

export default function FinalClose() {
  const scrollToForm = () => {
    trackApplyClick()
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-pad bg-espresso/15 border-t border-bone/5">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="w-px h-16 bg-gold/25 mx-auto mb-20" />

        <p className="font-serif text-xl md:text-2xl text-bone italic mb-6 leading-relaxed">
          Some men are not looking for more information.
        </p>
        <p className="font-serif text-xl md:text-2xl text-bone italic mb-20 leading-relaxed">
          They are looking for the men they were meant to stand with.
        </p>

        <button onClick={scrollToForm} className="btn">
          Request Entry
        </button>

        <div className="w-px h-16 bg-gold/25 mx-auto mt-20 mb-14" />

        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-bone/25">
          Kung Fu Legacy — Converse, Texas
        </p>
        <p className="font-sans text-xs text-bone/15 mt-3">
          &copy; {new Date().getFullYear()} Rafael Gonzalez. All rights reserved.
        </p>
      </motion.div>
    </section>
  )
}
