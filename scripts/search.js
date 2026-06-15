/**
 * Hexo Theme Coss - Search Data Generator
 * 生成搜索数据 JSON 文件
 */

'use strict';

hexo.extend.generator.register('search', function(locals) {
  const config = this.config;
  const searchData = [];

  locals.posts.sort('-date').forEach(function(post) {
    if (post.published) {
      const data = {
        title: post.title,
        url: config.root + post.path,
        date: post.date ? post.date.format('YYYY-MM-DD') : '',
        tags: post.tags && post.tags.length ? post.tags.map(t => t.name) : [],
        content: post.content ? post.content.replace(/<[^>]+>/g, '').substring(0, 500) : '',
        excerpt: post.excerpt ? post.excerpt.replace(/<[^>]+>/g, '').substring(0, 200) : ''
      };
      searchData.push(data);
    }
  });

  return {
    path: 'search.json',
    data: JSON.stringify(searchData)
  };
});
