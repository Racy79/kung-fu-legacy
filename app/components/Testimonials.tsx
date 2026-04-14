'use client'

import { motion } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────────────────
// MEMBER VOICE — PLACEHOLDER SCAFFOLD
// Set SHOW_TESTIMONIALS to true when real quotes are ready.
// Replace placeholder data in the `testimonials` array below.
// ─────────────────────────────────────────────────────────────────────────────

const SHOW_TESTIMONIALS = false

const testimonials = [
  {
    // TODO: Replace with real member quote — first-person, unpolished is fine.
    // Keep it short: 1–3 sentences. Do not edit for polish — authenticity is the point.
    quote: '[Member quote — to be replaced before enabling]',

    // TODO: First name only, or initials. e.g. 'M.R.' or 'David'
    name: '[Name]',

    // TODO: One short descriptor. e.g. 'Active Member' / 'Business Owner, San Antonio'
    // Do not include profession if member prefers privacy.
    descriptor: '[Descriptor]',
  },

  // ── Second voice (optional) ───────────────────────────────────────────────
  // Uncomment and populate when a second real quote is available.
  // {
  //   quote: '[Second member quote — to be replaced before enabling]',
  //   name: '[Name]',
  //   descriptor: '[Descriptor]',
  // },
]

// ─────────────────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
}

const stagger = {
  show: { transition: { staggerChildren: 0.2 } },
}

export default function Testimonials() {
  if (!SHOW_TESTIMONIALS) return null

  return (
    <section className="section-pad bg-espresso/15">
      <motion.div
        className="max-w-2xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p variants={fadeUp} className="label mb-14">
          From the Brotherhood
        </motion.p>

        <div className="w-px h-12 bg-gold/30 mb-14" />

        <motion.div variants={stagger} className="space-y-16">
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp}>

              {/* Quote */}
              <p className="font-serif text-lg md:text-xl text-bone/80 italic leading-relaxed mb-8">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-4">
                <div className="w-5 h-px bg-gold/40" />
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-bone/40">
                  {t.name}
                  {t.descriptor && (
                    <span className="text-bone/25"> &nbsp;·&nbsp; {t.descriptor}</span>
                  )}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

        <div className="w-px h-12 bg-gold/30 mt-14" />

      </motion.div>
    </section>
  )
}
