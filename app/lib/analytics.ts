export const trackApplyClick = () => {
  if (typeof window === 'undefined') return
  window.gtag?.('event', 'apply_click', { event_category: 'CTA' })
  window.fbq?.('trackCustom', 'ApplyClick')
}

export const trackFormSubmit = () => {
  if (typeof window === 'undefined') return
  window.gtag?.('event', 'generate_lead')
  window.fbq?.('track', 'Lead')
}

export const trackScrollDepth = (depth: '50' | '90') => {
  if (typeof window === 'undefined') return
  window.gtag?.('event', 'scroll', { percent_scrolled: depth })
  window.fbq?.('trackCustom', `ScrollDepth${depth}`)
}
