import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Pagination as PaginationType } from '@/types'

interface PaginationProps {
  pagination: PaginationType
  basePath?: string
  className?: string
}

export function Pagination({ pagination, basePath = '/page/', className }: PaginationProps) {
  const { current, total } = pagination

  if (total <= 1) {
    return null
  }

  const getPageUrl = (page: number) => {
    if (page === 1) {
      return basePath === '/page/' ? '/' : basePath.replace(/\/page\/$/, '/')
    }
    return `${basePath}${page}/`
  }

  const getVisiblePages = () => {
    const delta = 2
    const range: (number | 'ellipsis')[] = []
    const rangeWithDots: (number | 'ellipsis')[] = []
    let l: number | undefined

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
        range.push(i)
      }
    }

    for (const i of range) {
      if (l !== undefined) {
        if (typeof i === 'number' && i - l === 2) {
          rangeWithDots.push(l + 1)
        } else if (typeof i === 'number' && i - l !== 1) {
          rangeWithDots.push('ellipsis')
        }
      }
      rangeWithDots.push(i)
      l = typeof i === 'number' ? i : l
    }

    return rangeWithDots
  }

  const visiblePages = getVisiblePages()

  return (
    <nav className={cn('flex items-center justify-center space-x-2', className)}>
      {/* 上一页 */}
      {current === 1 ? (
        <Button
          variant="outline"
          size="icon"
          className="size-9"
          disabled
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="size-9"
          render={<a href={getPageUrl(current - 1)} />}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}

      {/* 页码 */}
      {visiblePages.map((page, index) => {
        if (page === 'ellipsis') {
          return (
            <span
              key={`ellipsis-${index}`}
              className="flex h-9 w-9 items-center justify-center"
            >
              <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </span>
          )
        }

        const isActive = page === current

        if (isActive) {
          return (
            <Button
              key={page}
              variant="default"
              size="icon"
              className="size-9"
            >
              {page}
            </Button>
          )
        }

        return (
          <Button
            key={page}
            variant="outline"
            size="icon"
            className="size-9"
            render={<a href={getPageUrl(page)} />}
          >
            {page}
          </Button>
        )
      })}

      {/* 下一页 */}
      {current === total ? (
        <Button
          variant="outline"
          size="icon"
          className="size-9"
          disabled
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          className="size-9"
          render={<a href={getPageUrl(current + 1)} />}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </nav>
  )
}

export default Pagination
