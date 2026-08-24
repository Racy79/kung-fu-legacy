import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllWritings } from '@/lib/writings'

export const metadata: Metadata = {
  title: 'Writings | Kung Fu Legacy',
  description: 'Essays on Wing Chun, transmission, and the discipline of real instruction.',
}

export default function WritingsIndexPage() {
  const writings = getAllWritings()

  return (
    <main className="section-pad min-h-screen">
      <div className="max-w-2xl mx-auto">
        <p className="label mb-6">Writings</p>
        <h1 className="heading-lg mb-16">On the art, and what carries it.</h1>

        <div className="space-y-10">
          {writings.map((w) => (
            <Link key={w.slug} href={`/writings/${w.slug}`} className="block group">
              <p className="kfl-support mb-1">{w.date}</p>
              <h2 className="kfl-h3 group-hover:text-gold transition-colors duration-300">
                {w.title}
              </h2>
              {w.excerpt && <p className="body mt-2">{w.excerpt}</p>}
            </Link>
          ))}

          {writings.length === 0 && <p className="body">Nothing published yet.</p>}
        </div>
      </div>
    </main>
  )
}
