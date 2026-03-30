'use client'

import { useEffect, useRef } from 'react'
import { trackScrollDepth } from '../lib/analytics'

export default function ScrollTracker() {
  const fired = useRef({ d50: false, d90: false })

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total <= 0) return
      const pct = (window.scrollY / total) * 100

      if (!fired.current.d50 && pct >= 50) {
        fired.current.d50 = true
        trackScrollDepth('50')
      }
      if (!fired.current.d90 && pct >= 90) {
        fired.current.d90 = true
        trackScrollDepth('90')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
