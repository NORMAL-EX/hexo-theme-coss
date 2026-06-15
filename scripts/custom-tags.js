/**
 * Hexo Theme Coss - Custom Tags
 * 自定义标签：信息框和按钮（全面使用 Coss UI 组件样式，class 值完整）
 *
 * 使用方法：
 *
 * 1. 信息框 (Alert)
 *    {% alert type title %}
 *    内容文本（支持 Markdown）
 *    {% endalert %}
 *
 *    type: info | success | warning | error
 *    title: 可选标题
 *
 * 2. 单行信息框 (note)
 *    {% note type 内容文本 %}
 *
 * 3. 按钮 (Button)
 *    {% btn url text [variant] [size] [icon] %}
 *    variant: primary(默认实心) | secondary | outline
 *    size: xs | sm | md(默认) | lg | xl
 *    icon: download | link | github | arrow-right | external
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

// Coss UI Alert 基础类 + 各 variant 类（完整 class 值，源自 ui/alert.tsx）
const ALERT_BASE = "relative grid w-full items-start gap-x-2 gap-y-0.5 rounded-xl border px-3.5 py-3 text-card-foreground text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-2 [&>svg]:h-lh [&>svg]:w-4 my-4";
const ALERT_VARIANTS = {
  'info': 'border-info/32 bg-info/4 [&>svg]:text-info',
  'success': 'border-success/32 bg-success/4 [&>svg]:text-success',
  'warning': 'border-warning/32 bg-warning/4 [&>svg]:text-warning',
  'error': 'border-destructive/32 bg-destructive/4 [&>svg]:text-destructive'
};
const ALERT_TITLE = "font-medium [svg~&]:col-start-2";
const ALERT_DESC = "flex flex-col gap-1.5 text-muted-foreground [svg~&]:col-start-2 [&_p]:m-0 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4";

function renderAlert(type, title, innerHtml) {
  const validTypes = ['info', 'success', 'warning', 'error'];
  const alertType = validTypes.includes(type) ? type : 'info';
  const icon = lucideIcons[alertType];

  let html = `<div class="${ALERT_BASE} ${ALERT_VARIANTS[alertType]}" data-slot="alert" role="alert">`;
  html += icon;
  if (title) {
    html += `<div class="${ALERT_TITLE}" data-slot="alert-title">${title}</div>`;
  }
  html += `<div class="${ALERT_DESC}" data-slot="alert-description">${innerHtml}</div>`;
  html += '</div>';
  return html;
}

// 注册信息框标签（多行，支持 Markdown 内容） - Coss UI Alert
hexo.extend.tag.register('alert', function (args, content) {
  const type = args[0] || 'info';
  const title = args.slice(1).join(' ') || '';
  const renderedContent = hexo.render.renderSync({ text: content, engine: 'markdown' });
  return renderAlert(type, title, renderedContent);
}, { ends: true });

// 注册单行信息框标签 - Coss UI Alert
hexo.extend.tag.register('note', function (args) {
  const type = args[0] || 'info';
  const text = args.slice(1).join(' ');
  return renderAlert(type, '', text);
});

// Coss UI Button 基础类（完整 class 值，源自 ui/button.tsx）
const BTN_BASE = "[&_svg]:-mx-0.5 relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-medium text-base outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 sm:text-sm [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 no-underline";

const BTN_VARIANTS = {
  'primary': "not-disabled:inset-shadow-[0_1px_--theme(--color-white/16%)] border-primary bg-primary text-primary-foreground shadow-primary/24 shadow-xs hover:bg-primary/90 [&:is(:active,[data-pressed])]:inset-shadow-[0_1px_--theme(--color-black/8%)] [&:is(:disabled,:active,[data-pressed])]:shadow-none",
  'secondary': "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90 [&:is(:active,[data-pressed])]:bg-secondary/80",
  'outline': "border-border bg-background bg-clip-padding shadow-xs not-disabled:not-active:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-input/32 dark:not-in-data-[slot=group]:bg-clip-border dark:not-disabled:before:shadow-[0_-1px_--theme(--color-white/4%)] dark:not-disabled:not-active:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/8%)] [&:is(:disabled,:active,[data-pressed])]:shadow-none [&:is(:hover,[data-pressed])]:bg-accent/50 dark:[&:is(:hover,[data-pressed])]:bg-input/64"
};

const BTN_SIZES = {
  'xs': "h-7 gap-1 rounded-md px-[calc(--spacing(2)-1px)] text-sm before:rounded-[calc(var(--radius-md)-1px)] sm:h-6 sm:text-xs",
  'sm': "h-8 gap-1.5 px-[calc(--spacing(2.5)-1px)] sm:h-7",
  'md': "h-9 px-[calc(--spacing(3)-1px)] sm:h-8",
  'lg': "h-10 px-[calc(--spacing(3.5)-1px)] sm:h-9",
  'xl': "h-11 px-[calc(--spacing(4)-1px)] text-lg sm:h-10 sm:text-base [&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-4.5"
};

hexo.extend.tag.register('btn', function (args) {
  if (args.length < 2) {
    return '<span class="text-destructive text-sm">[错误] btn 标签需要至少 url 和 text 两个参数</span>';
  }

  const url = args[0];
  const rest = args.slice(1);

  // 从末尾依次识别 icon / size / variant，剩余部分全部作为按钮文字（允许含空格）
  let icon = '', size = 'md', variant = 'primary';
  if (rest.length > 1 && lucideIcons[rest[rest.length - 1]]) icon = rest.pop();
  if (rest.length > 1 && BTN_SIZES[rest[rest.length - 1]]) size = rest.pop();
  if (rest.length > 1 && BTN_VARIANTS[rest[rest.length - 1]]) variant = rest.pop();
  const text = rest.join(' ');

  const iconHtml = lucideIcons[icon] || '';
  const isExternal = url.startsWith('http://') || url.startsWith('https://');
  const rel = isExternal ? ' rel="noopener noreferrer"' : '';
  const target = isExternal ? '_blank' : '_self';

  const cls = `${BTN_BASE} ${BTN_SIZES[size]} ${BTN_VARIANTS[variant]}`;

  return `<a class="${cls}" href="${url}" target="${target}"${rel} data-slot="button">${iconHtml}${text}</a>`;
});
