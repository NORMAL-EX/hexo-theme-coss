import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import type { TocItem } from '@/types'

interface TableOfContentsProps {
  toc: TocItem[]
  className?: string
}

export function TableOfContents({ toc, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    )

    const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id]')
    headings.forEach((heading) => observer.observe(heading))

    return () => {
      headings.forEach((heading) => observer.unobserve(heading))
    }
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setActiveId(id)
    }
  }

  const renderTocItems = (items: TocItem[], depth = 0) => {
    return (
      <ul className={cn('space-y-2', depth > 0 && 'ml-4 mt-2')}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                'block text-sm outline-none focus:outline-none',
                activeId === item.id
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {item.text}
            </a>
            {item.children && item.children.length > 0 && renderTocItems(item.children, depth + 1)}
          </li>
        ))}
      </ul>
    )
  }

  if (toc.length === 0) {
    return null
  }

  return (
    <nav className={cn('text-sm sticky top-20', className)}>
      <h4 className="font-semibold mb-4 text-foreground">目录</h4>
      <div className="max-h-[calc(100vh-8rem)] overflow-y-auto">
        {renderTocItems(toc)}
      </div>
    </nav>
  )
}

export default TableOfContents
