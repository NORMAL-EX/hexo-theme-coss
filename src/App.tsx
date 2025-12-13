import { useState } from 'react'
import { Header, Footer, Container, Sidebar } from '@/components/layout'
import { PostList } from '@/components/post'
import { Pagination, BackToTop, Search } from '@/components/common'
import type { Post, Author, Category, Tag, FriendLink, MenuItem } from '@/types'

// 示例数据
const sampleAuthor: Author = {
  name: '博主名称',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=blog',
  description: '这是一段简短的个人介绍',
  social: [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  ],
}

const sampleMenu: MenuItem[] = [
  { name: '首页', url: '/' },
  { name: '归档', url: '/archives/' },
  { name: '分类', url: '/categories/' },
  { name: '标签', url: '/tags/' },
  { name: '关于', url: '/about/' },
]

const sampleCategories: Category[] = [
  { name: '技术', slug: 'tech', count: 10 },
  { name: '生活', slug: 'life', count: 5 },
  { name: '随笔', slug: 'essay', count: 3 },
]

const sampleTags: Tag[] = [
  { name: 'JavaScript', slug: 'javascript', count: 8 },
  { name: 'React', slug: 'react', count: 6 },
  { name: 'TypeScript', slug: 'typescript', count: 5 },
  { name: 'CSS', slug: 'css', count: 4 },
  { name: 'Node.js', slug: 'nodejs', count: 3 },
]

const sampleFriends: FriendLink[] = [
  { name: '友链1', url: 'https://example.com', description: '这是友链1的描述' },
  { name: '友链2', url: 'https://example.com', description: '这是友链2的描述' },
]

const samplePosts: Post[] = [
  {
    title: '使用 React 和 TypeScript 构建现代化博客主题',
    slug: 'react-typescript-blog-theme',
    date: '2024-01-15',
    excerpt: '本文将介绍如何使用 React、TypeScript 和 Tailwind CSS 构建一个现代化的博客主题，包括深浅色主题切换、响应式布局等功能。',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    categories: [{ name: '技术', slug: 'tech' }],
    tags: [
      { name: 'React', slug: 'react' },
      { name: 'TypeScript', slug: 'typescript' },
    ],
    sticky: 1,
    content: '',
  },
  {
    title: 'Tailwind CSS v4 新特性详解',
    slug: 'tailwind-css-v4-features',
    date: '2024-01-10',
    excerpt: 'Tailwind CSS v4 带来了许多令人兴奋的新特性，包括新的配置方式、性能优化等。让我们一起来看看有哪些值得关注的更新。',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    categories: [{ name: '技术', slug: 'tech' }],
    tags: [
      { name: 'CSS', slug: 'css' },
      { name: 'Tailwind', slug: 'tailwind' },
    ],
    content: '',
  },
  {
    title: '我的 2024 年度总结',
    slug: '2024-annual-summary',
    date: '2024-01-05',
    excerpt: '回顾 2024 年，这一年经历了很多，学到了很多，也成长了很多。在这篇文章中，我将分享这一年的收获与感悟。',
    categories: [{ name: '生活', slug: 'life' }],
    tags: [{ name: '年度总结', slug: 'annual-summary' }],
    content: '',
  },
]

function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        siteName="Hexo Theme Coss"
        menu={sampleMenu}
        onSearchClick={() => setSearchOpen(true)}
      />

      <main className="flex-1 py-8">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 主内容区 - 标题靠左对齐 */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 text-left">最新文章</h1>
              <p className="text-muted-foreground mb-8 text-left">
                分享技术、生活与思考
              </p>

              <PostList posts={samplePosts} showExcerpt showCover />

              <Pagination
                pagination={{ current: 1, total: 5 }}
                className="mt-8"
              />
            </div>

            {/* 侧边栏 */}
            <div className="w-full lg:w-80 shrink-0">
              <Sidebar
                author={sampleAuthor}
                categories={sampleCategories}
                tags={sampleTags}
                recentPosts={samplePosts.slice(0, 5)}
                friends={sampleFriends}
              />
            </div>
          </div>
        </Container>
      </main>

      <Footer
        copyright="© 2024 Hexo Theme Coss. All rights reserved."
        powered
        social={sampleAuthor.social}
      />

      <BackToTop />

      <Search
        open={searchOpen}
        onOpenChange={setSearchOpen}
        searchData={samplePosts.map((p) => ({
          title: p.title,
          slug: p.slug,
          excerpt: p.excerpt,
        }))}
      />
    </div>
  )
}

export default App
