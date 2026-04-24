'use client'

import { motion } from 'framer-motion'
import { trackApplyClick } from '../lib/analytics'

export default function FinalClose() {
  const scrollToForm = () => {
    trackApplyClick()
    const el = document.getElementById('apply-form')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
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

        <p className="kfl-pullquote text-bone mb-6">
          Some men are not looking for more information.
        </p>
        <p className="kfl-pullquote text-bone mb-20">
          They are looking for the men.
        </p>

        <button onClick={scrollToForm} className="btn">
          Request Entry
        </button>
      </motion.div>
    </section>
  )
}
