import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllVlogPosts } from '@/lib/vlog'

export const metadata: Metadata = {
  title: 'Journal | Kung Fu Legacy',
  robots: { index: false, follow: false },
}

export default function VlogIndexPage() {
  const posts = getAllVlogPosts()

  return (
    <main className="section-pad min-h-screen">
      <div className="max-w-2xl mx-auto">
        <p className="label mb-6">Journal</p>
        <h1 className="heading-lg mb-16">Entries</h1>

        <div className="space-y-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/vlog/${post.slug}`} className="block group">
              <p className="kfl-support mb-1">{post.date}</p>
              <h2 className="kfl-h3 group-hover:text-gold transition-colors duration-300">
                {post.title}
              </h2>
              {post.excerpt && <p className="body mt-2">{post.excerpt}</p>}
            </Link>
          ))}

          {posts.length === 0 && <p className="body">No entries yet.</p>}
        </div>
      </div>
    </main>
  )
}
