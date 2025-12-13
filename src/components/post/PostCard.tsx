import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PostMeta } from './PostMeta'
import { Pin } from 'lucide-react'
import type { Post } from '@/types'

interface PostCardProps {
  post: Post
  showExcerpt?: boolean
  showCover?: boolean
}

export function PostCard({ post, showExcerpt = true, showCover = true }: PostCardProps) {
  return (
    <Card className="overflow-hidden">
      {/* 封面图 */}
      {showCover && post.cover && (
        <a href={`/posts/${post.slug}/`} className="block">
          <div className="aspect-video overflow-hidden">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </a>
      )}

      <CardHeader className="pb-3">
        {/* 置顶标识 */}
        {post.sticky && post.sticky > 0 && (
          <div className="flex items-center gap-1 text-sm text-orange-500 mb-2">
            <Pin className="h-4 w-4" />
            <span>置顶</span>
          </div>
        )}

        {/* 标题 - 靠左对齐 */}
        <h2 className="text-xl font-semibold text-left">
          <a
            href={`/posts/${post.slug}/`}
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </a>
        </h2>
      </CardHeader>

      <CardContent className="pb-3">
        {/* 元信息 */}
        <PostMeta
          date={post.date}
          categories={post.categories}
          className="mb-3"
        />

        {/* 摘要 */}
        {showExcerpt && post.excerpt && (
          <p className="text-muted-foreground text-sm line-clamp-3 text-left">
            {post.excerpt}
          </p>
        )}
      </CardContent>

      {/* 标签 */}
      {post.tags && post.tags.length > 0 && (
        <CardFooter className="pt-0">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 5).map((tag) => (
              <a key={tag.slug} href={`/tags/${tag.slug}/`}>
                <Badge variant="secondary" className="text-xs cursor-pointer hover:bg-accent">
                  {tag.name}
                </Badge>
              </a>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  )
}

export default PostCard
