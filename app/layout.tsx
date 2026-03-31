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
  title: 'Kung Fu Legacy — Wing Chun Instruction in Converse, Texas',
  description:
    'Authentic Wing Chun instruction and personal development in Converse, Texas under Sifu Rafael Gonzalez. Direct lineage from Ip Man. Selective enrollment. Apply now.',
  keywords: [
    'Wing Chun San Antonio',
    'Wing Chun Converse Texas',
    'martial arts Converse Texas',
    'kung fu San Antonio',
    'Wing Chun instructor Texas',
    'Sifu Rafael Gonzalez',
    'martial arts training San Antonio',
  ],
  openGraph: {
    title: 'Kung Fu Legacy — Wing Chun Converse, Texas',
    description: 'Authentic Wing Chun instruction under Sifu Rafael Gonzalez. Direct Ip Man lineage. Selective enrollment.',
    siteName: 'Kung Fu Legacy',
    locale: 'en_US',
    type: 'website',
    url: 'https://thekungfulegacy.com',
  },
  alternates: {
    canonical: 'https://thekungfulegacy.com',
  },
}

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Kung Fu Legacy',
  description: 'Authentic Wing Chun instruction and personal development in Converse, Texas under Sifu Rafael Gonzalez. Direct lineage from Ip Man through Moy Yat and Moy Don.',
  url: 'https://thekungfulegacy.com',
  telephone: '+17879406694',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Converse',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.5135,
    longitude: -98.3126,
  },
  founder: {
    '@type': 'Person',
    name: 'Rafael Gonzalez',
    jobTitle: 'Sifu',
  },
  areaServed: ['Converse TX', 'San Antonio TX', 'Cibolo TX', 'Live Oak TX', 'Selma TX'],
  sport: 'Wing Chun Kung Fu',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="bg-matte-black text-bone antialiased">
        <Analytics />
        <ScrollTracker />
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
