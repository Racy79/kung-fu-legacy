'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-matte-black border-t border-bone/[0.06] py-24 md:py-32">
      <motion.div
        className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 xl:px-40 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-60px' }}
      >

        {/* Full logo — ceremonial mark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.svg"
          alt="Kung Fu Legacy"
          className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] mb-10"
        />

        {/* Lineage */}
        <p className="font-sans text-[9px] tracking-[0.32em] uppercase text-bone/20 mb-8 text-center">
          Yip Man &middot; Moy Yat &middot; Moy Don &middot; Moy Don Xùn
        </p>

        {/* Thin gold rule */}
        <div className="w-8 h-px bg-gold/20 mb-8" />

        {/* Copyright */}
        <p className="font-sans text-[10px] text-bone/15 text-center">
          &copy; {new Date().getFullYear()} Rafael Gonzalez. All rights reserved.
        </p>

      </motion.div>
    </footer>
  )
}
