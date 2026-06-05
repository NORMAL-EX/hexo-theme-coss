/**
 * Hexo Theme Coss - Custom Tags
 * 自定义标签：信息框和按钮
 *
 * 使用 Coss UI 的 Alert 和 Button 样式
 *
 * 使用方法：
 *
 * 1. 信息框 (Alert)
 *    {% alert type title %}
 *    内容文本
 *    {% endalert %}
 *
 *    type: info | success | warning | error
 *    title: 可选的标题
 *
 *    示例:
 *    {% alert info 提示 %}
 *    这是一条提示信息
 *    {% endalert %}
 *
 *    {% alert warning %}
 *    这是一条警告信息（无标题）
 *    {% endalert %}
 *
 * 2. 按钮 (Button)
 *    {% btn url text [variant] [size] [icon] %}
 *
 *    url: 链接地址
 *    text: 按钮文本
 *    variant: primary | secondary (默认: primary)
 *    size: sm | md | lg (默认: md)
 *    icon: 可选的图标名称
 *
 *    示例:
 *    {% btn https://example.com 点击访问 %}
 *    {% btn https://example.com 查看更多 secondary %}
 *    {% btn https://example.com 下载 primary lg %}
 */

'use strict';

// Lucide Icons SVG - 与 Coss UI 保持一致
const lucideIcons = {
  // Alert 图标
  'info': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>',
  'success': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>',
  'warning': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>',
  'error': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>',
  // Button 图标
  'download': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
  'link': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
  'github': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>',
  'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>',
  'external': '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>'
};

// Coss UI Alert variant 样式 (使用 CSS 变量)
const alertVariantStyles = {
  'info': 'border-color: color-mix(in srgb, var(--info) 32%, transparent); background-color: color-mix(in srgb, var(--info) 4%, transparent);',
  'success': 'border-color: color-mix(in srgb, var(--success) 32%, transparent); background-color: color-mix(in srgb, var(--success) 4%, transparent);',
  'warning': 'border-color: color-mix(in srgb, var(--warning) 32%, transparent); background-color: color-mix(in srgb, var(--warning) 4%, transparent);',
  'error': 'border-color: color-mix(in srgb, var(--destructive) 32%, transparent); background-color: color-mix(in srgb, var(--destructive) 4%, transparent);'
};

// Alert 图标颜色
const alertIconColors = {
  'info': 'color: var(--info);',
  'success': 'color: var(--success);',
  'warning': 'color: var(--warning);',
  'error': 'color: var(--destructive);'
};

// 注册信息框标签 - 使用 Coss UI Alert 样式
hexo.extend.tag.register('alert', function(args, content) {
  const type = args[0] || 'info';
  const title = args.slice(1).join(' ') || '';

  const validTypes = ['info', 'success', 'warning', 'error'];
  const alertType = validTypes.includes(type) ? type : 'info';

  const renderedContent = hexo.render.renderSync({ text: content, engine: 'markdown' });

  // 基础样式
  const baseStyle = `
    position: relative;
    display: grid;
    width: 100%;
    align-items: start;
    gap: 0 0.5rem;
    border-radius: 0.75rem;
    border-width: 1px;
    border-style: solid;
    padding: 0.75rem 0.875rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--card-foreground);
    margin: 1rem 0;
    grid-template-columns: 1rem 1fr;
  `.replace(/\s+/g, ' ').trim();

  const variantStyle = alertVariantStyles[alertType];
  const iconColor = alertIconColors[alertType];
  const icon = lucideIcons[alertType];

  let html = `<div style="${baseStyle} ${variantStyle}" role="alert">`;
  html += `<span style="${iconColor} display: flex; align-items: center; height: 1lh;">${icon}</span>`;
  html += '<div style="grid-column-start: 2;">';

  if (title) {
    html += `<div style="font-weight: 500; margin-bottom: 0.25rem;">${title}</div>`;
  }

  html += `<div style="color: var(--muted-foreground);">${renderedContent}</div>`;
  html += '</div></div>';

  return html;
}, { ends: true });

// 注册按钮标签 - 使用 Coss UI Button 样式 (添加 CSS 类以支持 hover 效果)
// 可自定义的按钮类：修改 `buttonVariantClasses.primary` 或 `buttonVariantClasses.secondary` 来覆盖样式
const buttonVariantClasses = {
  'primary': 'relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border bg-clip-padding font-medium text-sm outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&_svg:not([class*=\'size-\'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 h-9 px-3 border-border bg-background shadow-xs not-disabled:not-active:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-input/32 dark:not-in-data-[slot=group]:bg-clip-border dark:not-disabled:before:shadow-[0_-1px_--theme(--color-white/4%)] dark:not-disabled:not-active:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/8%)] [&:is(:disabled,:active,[data-pressed])]:shadow-none [&:is(:hover,[data-pressed])]:bg-accent/50 dark:[&:is(:hover,[data-pressed])]:bg-input/64',
  'secondary': 'relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border bg-clip-padding font-medium text-sm outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&_svg:not([class*=\'size-\'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 h-9 px-3 not-disabled:inset-shadow-[0_1px_--theme(--color-white/16%)] border-primary bg-primary text-primary-foreground shadow-primary/24 shadow-xs hover:bg-primary/90 [&:is(:active,[data-pressed])]:inset-shadow-[0_1px_--theme(--color-black/8%)] [&:is(:disabled,:active,[data-pressed])]:shadow-none'
};

const buttonSizeClasses = {
  'xs': 'coss-btn-xs',
  'sm': 'coss-btn-sm',
  'md': 'coss-btn-md',
  'lg': 'coss-btn-lg',
  'xl': 'coss-btn-xl'
};

hexo.extend.tag.register('btn', function(args) {
  if (args.length < 2) {
    return '<span style="color: var(--destructive);">[错误] btn 标签需要至少 url 和 text 两个参数</span>';
  }

  const url = args[0];
  const text = args[1];
  const variant = args[2] || 'primary';
  const size = args[3] || 'md';
  const icon = args[4] || '';

  const validVariants = ['primary', 'secondary'];
  const buttonVariant = validVariants.includes(variant) ? variant : 'primary';

  const validSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  const buttonSize = validSizes.includes(size) ? size : 'md';

  const iconHtml = lucideIcons[icon] ? `<span style="display: inline-flex; width: 1rem; height: 1rem;">${lucideIcons[icon]}</span>` : '';

  const isExternal = url.startsWith('http://') || url.startsWith('https://');
  const target = isExternal ? 'target="_blank"' : 'target="_self"';

  // 使用可配置的类名来控制样式，这样可以支持 hover 效果并允许用户自定义
  const variantClass = buttonVariantClasses[buttonVariant] || buttonVariantClasses['primary'];
  const btnClass = variantClass;

  // 使用 button 标签并通过 onclick 处理导航
  const onclickHandler = `window.open('${url}', '${isExternal ? '_blank' : '_self'}')`;

  return `<button class="${btnClass}" onclick="${onclickHandler}">${iconHtml}${text}</button>`;
});

// 注册简化的信息框标签（单行语法）- 使用 Coss UI Alert 样式
// 使用方式: {% note type 内容文本 %}
hexo.extend.tag.register('note', function(args) {
  const type = args[0] || 'info';
  const text = args.slice(1).join(' ');

  const validTypes = ['info', 'success', 'warning', 'error'];
  const alertType = validTypes.includes(type) ? type : 'info';

  // 基础样式
  const baseStyle = `
    position: relative;
    display: grid;
    width: 100%;
    align-items: start;
    gap: 0 0.5rem;
    border-radius: 0.75rem;
    border-width: 1px;
    border-style: solid;
    padding: 0.75rem 0.875rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--card-foreground);
    margin: 1rem 0;
    grid-template-columns: 1rem 1fr;
  `.replace(/\s+/g, ' ').trim();

  const variantStyle = alertVariantStyles[alertType];
  const iconColor = alertIconColors[alertType];
  const icon = lucideIcons[alertType];

  return `<div style="${baseStyle} ${variantStyle}" role="alert"><span style="${iconColor} display: flex; align-items: center; height: 1lh;">${icon}</span><div style="color: var(--muted-foreground); grid-column-start: 2;">${text}</div></div>`;
});