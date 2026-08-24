import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const WRITINGS_DIR = path.join(process.cwd(), 'content', 'writings')

export type Writing = {
  slug: string
  title: string
  date: string
  register: 'technical' | 'tradition'
  excerpt?: string
  content: string
}

function readWriting(slug: string): Writing {
  const raw = fs.readFileSync(path.join(WRITINGS_DIR, `${slug}.md`), 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    register: data.register === 'tradition' ? 'tradition' : 'technical',
    excerpt: data.excerpt || undefined,
    content,
  }
}

export function getAllWritings(): Writing[] {
  if (!fs.existsSync(WRITINGS_DIR)) return []
  return fs
    .readdirSync(WRITINGS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => readWriting(file.replace(/\.md$/, '')))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getWriting(slug: string): Writing | null {
  const filePath = path.join(WRITINGS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  return readWriting(slug)
}
