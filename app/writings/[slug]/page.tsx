import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllWritings, getWriting } from '@/lib/writings'

export function generateStaticParams() {
  return getAllWritings().map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const w = getWriting(slug)
  if (!w) return {}

  return {
    title: `${w.title} | Kung Fu Legacy`,
    description: w.excerpt,
  }
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const w = getWriting(slug)
  if (!w) notFound()

  return (
    <main className="section-pad min-h-screen">
      <article className="max-w-2xl mx-auto">
        <p className="kfl-support mb-2">{w.date}</p>
        <h1 className="heading-lg mb-10">{w.title}</h1>

        <div className="body prose-vlog">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{w.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  )
}
