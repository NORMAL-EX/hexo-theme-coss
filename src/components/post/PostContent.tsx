import { cn } from '@/lib/utils'

interface PostContentProps {
  content: string
  className?: string
}

export function PostContent({ content, className }: PostContentProps) {
  return (
    <article
      className={cn(
        'prose prose-zinc dark:prose-invert max-w-none',
        'prose-headings:scroll-mt-20 prose-headings:font-semibold',
        'prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl',
        'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
        'prose-code:before:content-none prose-code:after:content-none',
        'prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded',
        'prose-pre:bg-muted prose-pre:border',
        'prose-img:rounded-lg prose-img:shadow-md',
        'prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-1',
        'prose-table:overflow-x-auto',
        'prose-th:bg-muted prose-th:px-4 prose-th:py-2',
        'prose-td:px-4 prose-td:py-2 prose-td:border',
        className
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PostContent
