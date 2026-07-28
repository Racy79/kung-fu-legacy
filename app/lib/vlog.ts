import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const VLOG_DIR = path.join(process.cwd(), 'content', 'vlog')

export type VlogPost = {
  slug: string
  title: string
  date: string
  videoUrl?: string
  excerpt?: string
  content: string
}

function readPost(slug: string): VlogPost {
  const raw = fs.readFileSync(path.join(VLOG_DIR, `${slug}.md`), 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    videoUrl: data.videoUrl || undefined,
    excerpt: data.excerpt || undefined,
    content,
  }
}

export function getAllVlogPosts(): VlogPost[] {
  if (!fs.existsSync(VLOG_DIR)) return []
  return fs
    .readdirSync(VLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => readPost(file.replace(/\.md$/, '')))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getVlogPost(slug: string): VlogPost | null {
  const filePath = path.join(VLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  return readPost(slug)
}

/** Converts a plain YouTube/Vimeo URL into an embeddable iframe src. */
export function toEmbedUrl(url: string): string | null {
  const youtube = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]+)/)
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}`

  const vimeo = url.match(/vimeo\.com\/(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`

  return null
}
