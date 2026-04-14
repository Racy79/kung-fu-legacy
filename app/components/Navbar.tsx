'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { trackApplyClick } from '../lib/analytics'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToForm = () => {
    trackApplyClick()
    const el = document.getElementById('apply-form')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'h-[72px] bg-matte-black/[0.92] backdrop-blur-[12px] border-b border-bone/[0.04]'
          : 'h-[88px] bg-transparent'
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
    >
      <div className="h-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 xl:px-40 flex items-center justify-between">

        {/* Seal mark — left anchor */}
        <button
          onClick={scrollToTop}
          className="opacity-90 hover:opacity-60 transition-opacity duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/40"
          aria-label="Kung Fu Legacy — return to top"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Kung Fu Legacy seal"
            className="w-14 h-14 md:w-16 md:h-16 object-cover object-top"
          />
        </button>

        {/* Request Entry — right anchor */}
        <button
          onClick={scrollToForm}
          className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/60 px-6 py-2.5 transition-all duration-500 hover:bg-gold hover:text-matte-black hover:border-gold focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/40"
        >
          Request Entry
        </button>

      </div>
    </motion.header>
  )
}
