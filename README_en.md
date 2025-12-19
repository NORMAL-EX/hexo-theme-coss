# Hexo Theme Coss

English | [简体中文](./README.md)

A modern Hexo theme built with React + Tailwind CSS + Coss UI.

## Features

- 🎨 **Modern Design** - Clean and elegant UI based on Coss UI component library
- 🌓 **Dark Mode** - Supports light/dark/system theme modes
- 📱 **Responsive Layout** - Perfect adaptation for desktop and mobile devices
- 🔍 **Site Search** - Built-in search functionality for quick article lookup
- 💬 **Multiple Comment Systems** - Supports Disqus, Gitalk, Valine, Waline, Twikoo
- 📊 **Analytics** - Supports Google Analytics and Baidu Analytics
- 🏷️ **Post Features** - Categories, tags, archives, pinning, table of contents
- 🔗 **Friend Links** - Dedicated friend links page and sidebar display
- ⚡ **High Performance** - Built with Vite for fast loading
- 📝 **Custom Components** - Supports alert boxes, buttons, and other Markdown extensions

## Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| TypeScript | Latest | Type safety |
| React | 18+ | UI framework |
| Vite | 6+ | Build tool |
| Coss UI | Latest | UI component library |
| Tailwind CSS | v4+ | CSS framework |
| Lucide Icons | Latest | Icon library |
| Hexo | 7+ | Static blog framework |

## Installation

### Option 1: Git Clone

```bash
cd your-hexo-blog
git clone https://github.com/NORMAL-EX/hexo-theme-coss.git themes/coss
```

### Option 2: NPM Install

```bash
cd your-hexo-blog
npm install hexo-theme-coss
```

## Configuration

### 1. Enable Theme

Edit `_config.yml` in your Hexo root directory:

```yaml
theme: coss
```

### 2. Theme Configuration

Copy the theme's `_config.yml` to your Hexo root and rename it to `_config.coss.yml`, or edit the `_config.yml` directly in the theme directory.

## Configuration Options

### Basic Information

```yaml
# Site logo (optional, displays as circular avatar when set)
logo: /images/logo.png

# Header title (displayed next to avatar, optional)
header_title: My Blog

# Site favicon
favicon: /favicon.ico
```

### Homepage Settings

```yaml
index:
  # Supports highlight syntax: {{highlight}}text{{/highlight}}
  title: Welcome to {{highlight}}My Blog{{/highlight}}
  subtitle: Sharing technology, life, and thoughts
```

### Navigation Menu

```yaml
menu:
  Home: /
  Archives: /archives/
  Categories: /categories/
  Tags: /tags/
  Links: /links/
  About: /about/
```

### Author Information

```yaml
author:
  avatar: /images/avatar.png
  description: A brief personal introduction
```

### Social Links

```yaml
# Supported icons: github, twitter, email, rss
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

### Friend Links

```yaml
links:
  enable: true
  subtitle: Thanks for the support from these sites
  list:
    - name: Site Name
      url: https://example.com
      avatar: https://example.com/avatar.png
      description: Site description
```

### Sidebar Settings

```yaml
sidebar:
  showAuthor: true      # Show author info
  showCategories: true  # Show categories
  showTags: true        # Show tags
  showRecent: true      # Show recent posts
  showFriends: true     # Show friend links
  recentPostsCount: 5   # Number of recent posts
```

### Comment System

Supports Disqus, Gitalk, Valine, Waline, Twikoo:

```yaml
comments:
  provider: twikoo  # Options: disqus, gitalk, valine, waline, twikoo
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

### Analytics

```yaml
analytics:
  google: UA-XXXXXXXX-X  # Google Analytics ID
  baidu: xxxxxxxx        # Baidu Analytics ID
```

### Footer Settings

```yaml
footer:
  copyright: © 2024 My Blog  # Copyright info, supports HTML
  powered: true               # Show "Powered by Hexo"
  beian: ICP备XXXXXXXX号      # ICP filing number (optional)
```

### Copyright Notice

```yaml
copyright:
  enable: true
  text: All articles are licensed under CC BY-NC-SA 4.0 unless otherwise stated.
```

### Table of Contents

```yaml
toc:
  enable: true
  max_depth: 4  # Maximum depth of TOC
```

## Post Front-matter

```yaml
---
title: Post Title
date: 2024-01-01 12:00:00
updated: 2024-01-02 12:00:00
categories:
  - Technology
tags:
  - JavaScript
  - React
cover: /images/cover.jpg    # Cover image
sticky: 1                    # Pin post, higher number = higher priority
toc: true                    # Show table of contents
comments: true               # Enable comments
copyright: true              # Show copyright notice
---
```

## Custom Components

The theme supports custom components in Markdown:

### Alert Box

Multi-line syntax:

```markdown
{% alert info Info Title %}
This is the alert content, supports **Markdown** formatting
{% endalert %}
```

Single-line syntax:

```markdown
{% note success This is a success message %}
```

Supported types:
- `info` - Information (blue)
- `success` - Success (green)
- `warning` - Warning (yellow)
- `error` - Error (red)

### Button

```markdown
{% btn https://example.com Visit Website %}
{% btn /download Download Now primary lg download %}
```

Parameters:
- **Style**: `primary` (default), `secondary`
- **Size**: `sm` (small), `md` (default), `lg` (large)
- **Icon**: `download`, `link`, `github`, `arrow-right`, `external`

## Creating Pages

### Friend Links Page

```bash
hexo new page links
```

Edit `source/links/index.md`:

```markdown
---
title: Friend Links
layout: links
---

Custom content here, supports Markdown.
```

### About Page

```bash
hexo new page about
```

Edit `source/about/index.md`:

```markdown
---
title: About
---

About page content...
```

### Categories Page

```bash
hexo new page categories
```

Edit `source/categories/index.md`:

```markdown
---
title: Categories
layout: category
---
```

### Tags Page

```bash
hexo new page tags
```

Edit `source/tags/index.md`:

```markdown
---
title: Tags
layout: tag
---
```

## Development

### Local Development

```bash
cd hexo-theme-coss
npm install
npm run dev
```

### Build

```bash
npm run build
```

Built files will be output to the `source` directory.

## License

[MIT License](LICENSE)

## Acknowledgments

- [Hexo](https://hexo.io/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Coss UI](https://github.com/cossui/coss-ui)
- [Lucide Icons](https://lucide.dev/)
