import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import type { Author, Category, Tag, Post, FriendLink } from '@/types'

interface SidebarProps {
  author?: Author
  categories?: Category[]
  tags?: Tag[]
  recentPosts?: Post[]
  friends?: FriendLink[]
  showAuthor?: boolean
  showCategories?: boolean
  showTags?: boolean
  showRecent?: boolean
  showFriends?: boolean
}

export function Sidebar({
  author,
  categories = [],
  tags = [],
  recentPosts = [],
  friends = [],
  showAuthor = true,
  showCategories = true,
  showTags = true,
  showRecent = true,
  showFriends = true,
}: SidebarProps) {
  return (
    <aside className="space-y-6">
      {/* 作者信息 */}
      {showAuthor && author && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-semibold">{author.name}</h3>
              {author.description && (
                <p className="text-sm text-muted-foreground mt-2">
                  {author.description}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 分类 */}
      {showCategories && categories.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">分类</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <a
                    href={`/categories/${category.slug}/`}
                    className="flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>{category.name}</span>
                    {category.count !== undefined && (
                      <span className="text-xs">({category.count})</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* 标签 */}
      {showTags && tags.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">标签</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <a key={tag.slug} href={`/tags/${tag.slug}/`}>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-accent">
                    {tag.name}
                    {tag.count !== undefined && (
                      <span className="ml-1 text-xs">({tag.count})</span>
                    )}
                  </Badge>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 最新文章 */}
      {showRecent && recentPosts.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">最新文章</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <a
                    href={`/posts/${post.slug}/`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors line-clamp-2"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* 友情链接 */}
      {showFriends && friends.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">友情链接</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {friends.map((friend) => (
                <li key={friend.url}>
                  <a
                    href={friend.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {friend.avatar && (
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={friend.avatar} alt={friend.name} />
                        <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <span>{friend.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </aside>
  )
}

export default Sidebar
