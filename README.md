# Hexo Theme Coss

[English](./README_en.md) | 简体中文

一款基于 React + Tailwind CSS + Coss UI 构建的现代化 Hexo 主题。

## 特性

- 🎨 **现代化设计** - 简洁优雅的 UI 设计，基于 Coss UI 组件库
- 🌓 **深色模式** - 支持浅色/深色/跟随系统三种主题模式
- 📱 **响应式布局** - 完美适配桌面端和移动端
- 🔍 **全站搜索** - 内置搜索功能，快速查找文章
- 💬 **多种评论系统** - 支持 Disqus、Gitalk、Valine、Waline、Twikoo
- 📊 **统计分析** - 支持 Google Analytics 和百度统计
- 🏷️ **文章功能** - 分类、标签、归档、置顶、目录
- 🔗 **友情链接** - 独立的友链页面和侧边栏展示
- ⚡ **高性能** - 基于 Vite 构建，加载速度快
- 📝 **自定义组件** - 支持信息框、按钮等 Markdown 扩展组件

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| TypeScript | 最新稳定版 | 类型安全 |
| React | 18+ | UI 框架 |
| Vite | 6+ | 构建工具 |
| Coss UI | 最新版 | UI 组件库 |
| Tailwind CSS | v4+ | 样式框架 |
| Lucide Icons | 最新版 | 图标库 |
| Hexo | 7+ | 静态博客框架 |

## 安装

### 方式一：Git Clone

```bash
cd your-hexo-blog
git clone https://github.com/NORMAL-EX/hexo-theme-coss.git themes/coss
```

### 方式二：NPM 安装

```bash
cd your-hexo-blog
npm install hexo-theme-coss
```

## 配置

### 1. 启用主题

修改 Hexo 根目录下的 `_config.yml`：

```yaml
theme: coss
```

### 2. 主题配置

复制主题目录下的 `_config.yml` 到 Hexo 根目录并重命名为 `_config.coss.yml`，或直接编辑主题目录下的 `_config.yml`。

## 主题配置说明

### 基本信息

```yaml
# 网站 Logo（可选，设置后显示为圆形头像）
logo: /images/logo.png

# Header 标题（显示在头像右边，可选）
header_title: 我的博客

# 网站 Favicon
favicon: /favicon.ico
```

### 首页设置

```yaml
index:
  # 支持高亮语法：{{highlight}}文字{{/highlight}}
  title: 欢迎来到{{highlight}}我的博客{{/highlight}}
  subtitle: 分享技术、生活与思考
```

### 导航菜单

```yaml
menu:
  首页: /
  归档: /archives/
  分类: /categories/
  标签: /tags/
  友链: /links/
  关于: /about/
```

### 作者信息

```yaml
author:
  avatar: /images/avatar.png
  description: 这是一段简短的个人介绍
```

### 社交链接

```yaml
# 支持的图标: github, twitter, email, rss
social:
  - name: GitHub
    url: https://github.com/username
    icon: github
  - name: Twitter
    url: https://twitter.com/username
    icon: twitter
  - name: Email
    url: mailto:example@example.com
    icon: email
  - name: RSS
    url: /atom.xml
    icon: rss
```

### 友情链接

```yaml
links:
  enable: true
  subtitle: 感谢以下站点的友情支持
  list:
    - name: 网站名称
      url: https://example.com
      avatar: https://example.com/avatar.png
      description: 网站描述
```

### 侧边栏设置

```yaml
sidebar:
  showAuthor: true      # 显示作者信息
  showCategories: true  # 显示分类
  showTags: true        # 显示标签
  showRecent: true      # 显示最新文章
  showFriends: true     # 显示友情链接
  recentPostsCount: 5   # 最新文章数量
```

### 评论系统

支持 Disqus、Gitalk、Valine、Waline、Twikoo：

```yaml
comments:
  provider: twikoo  # 可选: disqus, gitalk, valine, waline, twikoo
  config:
    # Twikoo
    envId: your-twikoo-env-id

    # Disqus
    # shortname: your-disqus-shortname

    # Gitalk
    # clientID: your-client-id
    # clientSecret: your-client-secret
    # repo: your-repo
    # owner: your-github-username
    # admin: your-github-username

    # Valine
    # appId: your-leancloud-app-id
    # appKey: your-leancloud-app-key

    # Waline
    # serverURL: https://your-waline-server.vercel.app
```

### 统计分析

```yaml
analytics:
  google: UA-XXXXXXXX-X  # Google Analytics ID
  baidu: xxxxxxxx        # 百度统计 ID
```

### 页脚设置

```yaml
footer:
  copyright: © 2024 My Blog  # 版权信息，支持 HTML
  powered: true               # 是否显示 Powered by Hexo
  beian: 京ICP备XXXXXXXX号    # 备案号（可选）
```

### 版权声明

```yaml
copyright:
  enable: true
  text: 本博客所有文章除特别声明外，均采用 CC BY-NC-SA 4.0 许可协议。转载请注明出处！
```

### 文章目录

```yaml
toc:
  enable: true
  max_depth: 4  # 目录最大深度
```

## 文章 Front-matter

```yaml
---
title: 文章标题
date: 2024-01-01 12:00:00
updated: 2024-01-02 12:00:00
categories:
  - 技术
tags:
  - JavaScript
  - React
cover: /images/cover.jpg    # 封面图
sticky: 1                    # 置顶，数字越大优先级越高
toc: true                    # 是否显示目录
comments: true               # 是否开启评论
copyright: true              # 是否显示版权声明
---
```

## 自定义组件

主题支持在 Markdown 中使用自定义组件：

### 信息框 (Alert)

多行语法：

```markdown
{% alert info 提示标题 %}
这里是信息框的内容，支持 **Markdown** 格式
{% endalert %}
```

单行语法：

```markdown
{% note success 这是一条成功提示 %}
```

支持类型：
- `info` - 提示（蓝色）
- `success` - 成功（绿色）
- `warning` - 警告（黄色）
- `error` - 错误（红色）

### 按钮 (Button)

```markdown
{% btn https://example.com 访问网站 %}
{% btn /download 立即下载 primary lg download %}
```

参数说明：
- **样式**：`primary`（默认）、`secondary`
- **尺寸**：`sm`（小）、`md`（默认）、`lg`（大）
- **图标**：`download`、`link`、`github`、`arrow-right`、`external`

## 创建页面

### 友情链接页面

```bash
hexo new page links
```

编辑 `source/links/index.md`：

```markdown
---
title: 友情链接
layout: links
---

这里可以写一些自定义内容，支持 Markdown 格式。
```

### 关于页面

```bash
hexo new page about
```

编辑 `source/about/index.md`：

```markdown
---
title: 关于
---

关于页面内容...
```

### 分类页面

```bash
hexo new page categories
```

编辑 `source/categories/index.md`：

```markdown
---
title: 分类
layout: category
---
```

### 标签页面

```bash
hexo new page tags
```

编辑 `source/tags/index.md`：

```markdown
---
title: 标签
layout: tag
---
```

## 开发

### 本地开发

```bash
cd hexo-theme-coss
npm install
npm run dev
```

### 构建

```bash
npm run build
```

构建后的文件会输出到 `source` 目录。

## 许可证

[MIT License](LICENSE)

## 致谢

- [Hexo](https://hexo.io/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Coss UI](https://github.com/cossui/coss-ui)
- [Lucide Icons](https://lucide.dev/)
