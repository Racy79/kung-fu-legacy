import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Analytics from './components/Analytics'
import ScrollTracker from './components/ScrollTracker'
import ScrollToTop from './components/ScrollToTop'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kung Fu Legacy — Converse, Texas',
  description:
    'Build the structure that carries you. Wing Chun instruction in Converse, Texas under Rafael Gonzalez.',
  openGraph: {
    title: 'Kung Fu Legacy',
    description: 'Build the structure that carries you.',
    siteName: 'Kung Fu Legacy',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-matte-black text-bone antialiased">
        <Analytics />
        <ScrollTracker />
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
