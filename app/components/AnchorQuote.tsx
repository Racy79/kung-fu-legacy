'use client'

import { motion } from 'framer-motion'

export default function AnchorQuote() {
  return (
    <section className="relative py-36 md:py-52 overflow-hidden bg-matte-black">
      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #C6A962 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Top vertical rule */}
        <div className="w-px h-16 bg-gold/30 mx-auto mb-16" />

        <blockquote className="heading-lg text-center">
          Any instructor can show you what to do.
          <br className="hidden sm:block" />{' '}
          <span className="text-bone/75 italic">Understanding why it works is a different conversation.</span>
        </blockquote>

        {/* Bottom vertical rule */}
        <div className="w-px h-16 bg-gold/30 mx-auto mt-16" />
      </motion.div>
    </section>
  )
}
