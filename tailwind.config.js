/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'matte-black': '#0B0B0B',
        'espresso':    '#2B1F1A',
        'gold':        '#C6A962',
        'bone':        '#E8E3D9',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      // KFL Typographic Scale — pixel parity with React Native theme.ts
      // DO NOT use ad-hoc Tailwind sizes (text-3xl, text-xl, etc.) in components.
      // Use these named sizes exclusively.
      fontSize: {
        // ── Semantic scale ───────────────────────────────────────────────
        'kfl-meta':    ['11px', { lineHeight: '16px', letterSpacing: '0.04em' }],
        'kfl-support': ['13px', { lineHeight: '20px' }],
        'kfl-body':    ['16px', { lineHeight: '24px' }],
        'kfl-h3':      ['22px', { lineHeight: '30px' }],
        'kfl-h2':      ['30px', { lineHeight: '38px' }],
        'kfl-h2-lg':   ['38px', { lineHeight: '48px' }],  // h2 at md+
        'kfl-h1':      ['48px', { lineHeight: '56px' }],  // h1 mobile
        'kfl-h1-lg':   ['64px', { lineHeight: '72px' }],  // h1 md+
        'kfl-display': ['80px', { lineHeight: '88px' }],  // display lg+
        // ── Pull quote / serif italic emphasis ───────────────────────────
        'kfl-quote':   ['22px', { lineHeight: '32px' }],
        'kfl-quote-lg':['28px', { lineHeight: '40px' }],
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
}
