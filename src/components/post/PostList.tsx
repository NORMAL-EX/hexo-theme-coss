import { PostCard } from './PostCard'
import type { Post } from '@/types'

interface PostListProps {
  posts: Post[]
  showExcerpt?: boolean
  showCover?: boolean
  columns?: 1 | 2 | 3
}

export function PostList({
  posts,
  showExcerpt = true,
  showCover = true,
  columns = 1,
}: PostListProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        暂无文章
      </div>
    )
  }

  return (
    <div className={`grid ${gridClasses[columns]} gap-6`}>
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          post={post}
          showExcerpt={showExcerpt}
          showCover={showCover}
        />
      ))}
    </div>
  )
}

export default PostList
