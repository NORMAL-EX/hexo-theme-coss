// 文章类型
export interface Post {
  title: string
  slug: string
  date: string
  updated?: string
  content: string
  excerpt?: string
  cover?: string
  categories?: Category[]
  tags?: Tag[]
  sticky?: number
  toc?: TocItem[]
  prev?: PostNavItem
  next?: PostNavItem
  comments?: boolean
  copyright?: boolean
}

// 文章导航项
export interface PostNavItem {
  title: string
  slug: string
}

// 目录项
export interface TocItem {
  id: string
  text: string
  level: number
  children?: TocItem[]
}

// 分类类型
export interface Category {
  name: string
  slug: string
  count?: number
  children?: Category[]
}

// 标签类型
export interface Tag {
  name: string
  slug: string
  count?: number
}

// 归档类型
export interface Archive {
  year: number
  months: {
    month: number
    posts: Post[]
  }[]
}

// 分页类型
export interface Pagination {
  current: number
  total: number
  prev?: number
  next?: number
}

// 作者信息
export interface Author {
  name: string
  avatar?: string
  description?: string
  social?: SocialLink[]
}

// 社交链接
export interface SocialLink {
  name: string
  url: string
  icon: string
}

// 友情链接
export interface FriendLink {
  name: string
  url: string
  avatar?: string
  description?: string
}

// 导航菜单项
export interface MenuItem {
  name: string
  url: string
  icon?: string
  children?: MenuItem[]
}

// 主题配置
export interface ThemeConfig {
  siteName: string
  siteDescription?: string
  siteKeywords?: string
  author: Author
  menu: MenuItem[]
  social?: SocialLink[]
  friends?: FriendLink[]
  footer?: {
    copyright?: string
    powered?: boolean
    beian?: string
  }
  sidebar?: {
    showAuthor?: boolean
    showCategories?: boolean
    showTags?: boolean
    showRecent?: boolean
    showFriends?: boolean
    recentPostsCount?: number
  }
  comments?: {
    provider?: 'disqus' | 'gitalk' | 'valine' | 'waline' | 'twikoo'
    config?: Record<string, unknown>
  }
  analytics?: {
    google?: string
    baidu?: string
  }
}

// 主题模式
export type ThemeMode = 'light' | 'dark' | 'system'

// 搜索结果
export interface SearchResult {
  title: string
  slug: string
  excerpt?: string
  content?: string
}
