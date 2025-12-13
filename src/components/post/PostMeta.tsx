import { Calendar, Folder, Tag, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Category, Tag as TagType } from '@/types'

interface PostMetaProps {
  date: string
  updated?: string
  categories?: Category[]
  tags?: TagType[]
  readingTime?: number
  className?: string
}

export function PostMeta({
  date,
  updated,
  categories = [],
  tags = [],
  readingTime,
  className = '',
}: PostMetaProps) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className={`flex flex-wrap items-center gap-4 text-sm text-muted-foreground ${className}`}>
      {/* 发布日期 */}
      <span className="flex items-center gap-1">
        <Calendar className="h-4 w-4" />
        <time dateTime={date}>{formatDate(date)}</time>
      </span>

      {/* 更新日期 */}
      {updated && updated !== date && (
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>更新于 {formatDate(updated)}</span>
        </span>
      )}

      {/* 阅读时间 */}
      {readingTime && (
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{readingTime} 分钟阅读</span>
        </span>
      )}

      {/* 分类 */}
      {categories.length > 0 && (
        <span className="flex items-center gap-1">
          <Folder className="h-4 w-4" />
          {categories.map((category, index) => (
            <span key={category.slug}>
              <a
                href={`/categories/${category.slug}/`}
                className="hover:text-foreground transition-colors"
              >
                {category.name}
              </a>
              {index < categories.length - 1 && ', '}
            </span>
          ))}
        </span>
      )}

      {/* 标签 */}
      {tags.length > 0 && (
        <span className="flex items-center gap-1 flex-wrap">
          <Tag className="h-4 w-4" />
          {tags.map((tag) => (
            <a key={tag.slug} href={`/tags/${tag.slug}/`}>
              <Badge variant="outline" className="text-xs cursor-pointer hover:bg-accent">
                {tag.name}
              </Badge>
            </a>
          ))}
        </span>
      )}
    </div>
  )
}

export default PostMeta
