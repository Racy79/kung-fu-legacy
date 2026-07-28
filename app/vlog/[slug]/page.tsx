import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllVlogPosts, getVlogPost, toEmbedUrl } from '@/lib/vlog'

export function generateStaticParams() {
  return getAllVlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getVlogPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Kung Fu Legacy`,
    description: post.excerpt,
    robots: { index: false, follow: false },
  }
}

export default async function VlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getVlogPost(slug)
  if (!post) notFound()

  const embedUrl = post.videoUrl ? toEmbedUrl(post.videoUrl) : null

  return (
    <main className="section-pad min-h-screen">
      <article className="max-w-2xl mx-auto">
        <p className="kfl-support mb-2">{post.date}</p>
        <h1 className="heading-lg mb-10">{post.title}</h1>

        {embedUrl && (
          <div className="relative w-full aspect-video mb-12 border border-bone/15">
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <div className="body prose-vlog">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  )
}
